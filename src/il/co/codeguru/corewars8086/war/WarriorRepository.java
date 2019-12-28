package il.co.codeguru.corewars8086.war;

//import il.co.codeguru.corewars8086.utils.EventMulticaster;

import java.io.*;
import java.util.*;

//import javax.swing.JOptionPane;
import il.co.codeguru.corewars8086.gui.CompetitionWindow;
import il.co.codeguru.corewars8086.gui.LoadAddrChecker;
import il.co.codeguru.corewars8086.gui.PlayersPanel;
import il.co.codeguru.corewars8086.gui.widgets.*;
import il.co.codeguru.corewars8086.gui.widgets.Console;
import il.co.codeguru.corewars8086.jsadd.File;


public class WarriorRepository {

    /** Maximum initial code size of a single warrior */	
    public final static int MAX_WARRIOR_SIZE = 512;
    private static final String WARRIOR_DIRECTORY= "survivors";
    private static final String ZOMBIE_DIRECTORY= "zombies";

    private ArrayList<WarriorGroup> warriorGroups;
    private WarriorGroup zombieGroup;
    private Map<String,Integer> warriorNameToGroup;  // map name to group index in warriorGroups

    private EventMulticasterScore scoreEventsCaster;
    private ScoreEventListener scoreListener;

    public WarriorRepository() throws IOException {
        warriorNameToGroup = new HashMap<String,Integer>();
        warriorGroups = new ArrayList<WarriorGroup>();
        //readWarriorFiles();

        scoreEventsCaster = new EventMulticasterScore();
        scoreListener = scoreEventsCaster.proxy;
    }

    public void addScoreEventListener(ScoreEventListener lis) {
        scoreEventsCaster.add(lis);
        scoreEventsCaster.doneAdding();
    }

    public void addScore(String name, float value) {
        Integer groupIndex = warriorNameToGroup.get(name);
        if (groupIndex == null) {// zombies
            return;
        }
        WarriorGroup group = warriorGroups.get(groupIndex);
        int subIndex = group.addScoreToWarrior(name, value);
        scoreListener.scoreChanged(name, value, groupIndex, subIndex);
    }

    public int getNumberOfGroups() {
        return warriorGroups.size();
    }

    public ArrayList<WarriorGroup> getWarriorGroups() {
        return warriorGroups;
    }
    public String[] getGroupNames() {
        List<String> names = new ArrayList<String>();
        for (WarriorGroup group : warriorGroups) {
            names.add(group.getName());
        }
        return names.toArray(new String[0]);
    }

    private byte[] truncToSize(byte[] arr) {
        if (arr.length > MAX_WARRIOR_SIZE)
            return Arrays.copyOf(arr, MAX_WARRIOR_SIZE);
        return arr;
    }

    // it's an ugly singletop but that's the only reasonable way War and WarriorRepository can communicate about fixed addresses
    static public LoadAddrChecker m_loadAddrChecker;


    public boolean readWarriorFilesFromUI(PlayersPanel.Code[] files, PlayersPanel.Code[] zombies, boolean isInDebug)
    {
        warriorNameToGroup.clear();
        warriorGroups.clear();

        Console.log("Found " + Integer.toString(files.length) + " survivors, " + Integer.toString(zombies.length) + " zombies");
        m_loadAddrChecker = null; // reset it before potentially being used again

        Arrays.sort(files, new Comparator<PlayersPanel.Code>() {
            public int compare(PlayersPanel.Code o1, PlayersPanel.Code o2) {
                return o1.getName().compareToIgnoreCase(o2.getName());
            }});

        WarriorGroup currentGroup = null;
        for(PlayersPanel.Code c: files)
        {
            if (!c.player.isEnabled)
                continue;
            String name = c.getName();
            if (name.isEmpty()) {
                Console.err_box("All players must have a name for starting a competition");
                return false;
            }
            if (!c.lastCompileOk) {
                Console.err_box("Player " + name + " has assembly errors, can't start competition");
                return false;
            }
            byte[] bin = c.getBin();
            if (bin == null) {
                Console.err_box("Player " + name + " does not have any code, can't start competition");
                return false;
            }

            int startAddr = -1;
            if (!c.startAddrRandom && isInDebug) {
                if (m_loadAddrChecker == null) {
                    // having it in the competition window is an ugly hack but is the only way for it to get to the random
                    // loading where it will be needed later
                    m_loadAddrChecker = new LoadAddrChecker(files.length + zombies.length);
                }
                startAddr = m_loadAddrChecker.addCheck(c.startAddress, c.bin.length, name);
                if (startAddr == -2)
                    return false;
            }

            WarriorData data = new WarriorData(name, truncToSize(bin), c.getLabel(), startAddr);
            if (c.player.wtype != PlayersPanel.EWarriorType.SINGLE)
            {
                if (c.label.endsWith("0")) {
                    // start a new group!
                    currentGroup = new WarriorGroup(name.substring(0, name.length()-1), c.player.label);
                    currentGroup.addWarrior(data);
                    warriorNameToGroup.put(name, warriorGroups.size());
                }
                else if (c.label.endsWith("1")) {
                    currentGroup.addWarrior(data);
                    warriorNameToGroup.put(name, warriorGroups.size());
                    warriorGroups.add(currentGroup);
                    currentGroup = null;
                }
                else {
                    Console.error("Unexpected suffix for warrior name. expected 1 or 2: " + name);
                }
            } else {
                currentGroup = new WarriorGroup(name, c.player.label);
                currentGroup.addWarrior(data);
                warriorNameToGroup.put(name, warriorGroups.size());
                warriorGroups.add(currentGroup);
                currentGroup = null;
            }
        }

        if (warriorGroups.isEmpty()) {
            Console.err_box("no players to start a competition with");
            return false;
        }

        if (!readZombiesFromUI(zombies, m_loadAddrChecker))
            return false;

        return true;
    }

    /**
     * Reads all warrior data files from the warriors' directory.
     * @throws IOException 
     */
/*    private void readWarriorFiles() throws IOException  {
        File warriorsDirectory = new File(WARRIOR_DIRECTORY);
        
        fixFiles(warriorsDirectory);
        
        File[] warriorFiles = warriorsDirectory.listFiles();
        if (warriorFiles == null) {
            JOptionPane.showMessageDialog(null,
                "Error - survivors directory (\"" +
                WARRIOR_DIRECTORY + "\") not found");
            //System.exit(1);
        }
        System.out.println("Found " + Integer.toString(warriorFiles.length) + " survivors");

        WarriorGroup currentGroup = null;
        // sort by filename
        Arrays.sort(warriorFiles, new Comparator<File>() {
            public int compare(File o1, File o2) {
                    return o1.getName().compareToIgnoreCase(o2.getName());
            }});

        for (File file : warriorFiles) {
            if (file.isDirectory()) {
                continue;
            }

            String name = file.getName();
            WarriorData data = readWarriorFile(file);
            if (name.endsWith("1")) {
                // start a new group!
                currentGroup = new WarriorGroup(name.substring(0, name.length()-1));
                currentGroup.addWarrior(data);
                warriorNameToGroup.put(name, warriorGroups.size());
            } else if (name.endsWith("2")) {
                currentGroup.addWarrior(data);
                warriorNameToGroup.put(name, warriorGroups.size());
                warriorGroups.add(currentGroup);
                currentGroup = null;
            } else {
                currentGroup = new WarriorGroup(name);
                currentGroup.addWarrior(data);
                warriorNameToGroup.put(name, warriorGroups.size());
                warriorGroups.add(currentGroup);
                currentGroup = null;
            }
        }
        readZombies();
    }

    private void fixFiles(File warriorsDirectory) {
		if (!warriorsDirectory.exists()) {
			throw new RuntimeException("Missing directory " + warriorsDirectory.getAbsolutePath());
		}
    	File[] files = warriorsDirectory.listFiles();
    	for (File file : files) {
			if(file.getName().endsWith(".bin")){
				File renameTo = new File(file.getPath().replace(".bin", ""));
				renameTo.delete();
				file.renameTo(renameTo);
			}
		}
    	
    	files = warriorsDirectory.listFiles();
    	for (File file : files) {
			if(file.getName().contains("."))
				file.delete();
		}
	}
	*/

	private boolean readZombiesFromUI(PlayersPanel.Code[] zombieFiles, LoadAddrChecker loadAddrChecker) {
        zombieGroup = null;
        if (zombieFiles == null || zombieFiles.length == 0)
            return true;

        zombieGroup = new WarriorGroup("ZoMbIeS", "");
        for (PlayersPanel.Code c : zombieFiles) {
            String name = c.getName();
            if (name == null) {
                Console.err_box("All zombies must have a name for starting a competition");
                return false;
            }

            if (!c.lastCompileOk) {
                Console.err_box("Zombie " + name + " has assembly errors, can't start competition");
                return false;
            }
            byte[] bin = c.getBin();
            if (bin == null) {
                Console.err_box("Zombie " + name + " does not have any code, can't start competition");
                return false;
            }

            int startAddr = -1;
            if (!c.startAddrRandom) {
                startAddr = loadAddrChecker.addCheck(c.startAddress, c.bin.length, name);
                if (startAddr == -2)
                    return false;
            }

            WarriorData data = new WarriorData(name, truncToSize(bin), c.getLabel(), startAddr);
            zombieGroup.addWarrior(data);
        }
        return true;
    }

/*
	private void readZombies() throws IOException {
        File zombieDirectory = new File(ZOMBIE_DIRECTORY);
        File[] zombieFiles = zombieDirectory.listFiles();
        if (zombieFiles == null) {
            // no zombies!
            return;
        }
        zombieGroup = new WarriorGroup("ZoMbIeS");
        for (File file : zombieFiles) {
            if (file.isDirectory()) {
                continue;
            }

            WarriorData data = readWarriorFile(file);
            zombieGroup.addWarrior(data);
        }
    }

    private static WarriorData readWarriorFile(File filename) throws IOException {
        String warriorName = filename.getName();		

        int warriorSize = (int)filename.length();
        if (warriorSize > MAX_WARRIOR_SIZE) {
            warriorSize = MAX_WARRIOR_SIZE;
        }

        byte[] warriorData = filename.getData(); //new byte[warriorSize];		
        //FileInputStream fis = new FileInputStream(filename);		
       // int size = fis.read(warriorData);
        //fis.close();

        //if (size != warriorSize) {
        //    throw new IOException();
        //}

        return new WarriorData(warriorName, warriorData);
    }*/

    /**
     * @return the warrior groups corresponding to a given list of indices, and
     * the zombies group.
     * 
     * @param groupIndices  Required warrior groups indices.
     */
    public WarriorGroup[] createGroupList(int[] groupIndices) {
        ArrayList<WarriorGroup> groupsList = new ArrayList<WarriorGroup>();

        // add requested warrior groups
        for (int i = 0; i < groupIndices.length; ++i) {
            groupsList.add(warriorGroups.get(groupIndices[i]));
        }

        // add zombies (if exist)
        if (zombieGroup != null) {
            groupsList.add(zombieGroup);
        }

        WarriorGroup[] groups = new WarriorGroup[groupsList.size()];
        groupsList.toArray(groups);
        return groups;
    }

    public void saveScoresToFile(String filename) {
     /*   try { // TBD-SHY
            FileOutputStream fos = new FileOutputStream(filename);
            PrintStream ps = new PrintStream(fos);
            ps.print("Groups:\n");
            for (WarriorGroup group: warriorGroups) {
                ps.print(group.getName()+ "," + group.getGroupScore()+"\n");
            }
            ps.print("\nWarriors:\n");
            for (WarriorGroup group: warriorGroups) {
                List<Float> scores  = group.getScores();
                List<WarriorData> data = group.getWarriors();
                for (int i = 0; i < scores.size(); i++) {
                    ps.print(data.get(i).getName() + "," + scores.get(i)+"\n");
                }
            }
            fos.close();
        } catch (IOException e) {
            e.printStackTrace();
        }*/
    }
}