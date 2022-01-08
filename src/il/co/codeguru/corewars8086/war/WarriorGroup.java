package il.co.codeguru.corewars8086.war;

import java.util.ArrayList;
import java.util.List;

public class WarriorGroup {
    private String name;
    private String label;
    private String title; // user given name
    private ArrayList<WarriorData> warriorData;
    private List<Float> scores;
    private float groupScore;

    public WarriorGroup(String name, String label, String title) {
        this.name = name;
        this.label = label;
        this.title = title;
        warriorData = new ArrayList<WarriorData>();
        scores = new ArrayList<Float>();
    }

    public void addWarrior(WarriorData data) {
        warriorData.add(data);
        scores.add(new Float(0));
    }

    public List<WarriorData> getWarriors() {
        return warriorData;
    }

    public List<Float> getScores() {
        return scores;
    }

    public String getName() {
        return name;
    }
    public String getLabel() {
        return label;
    }
    public String getTitle() {
        return title;
    }

    public float getGroupScore() {
        return groupScore;
    }

    public int addScoreToWarrior(String name, float value) {
        // find this warrior
        int i;
        for (i = 0; i < warriorData.size(); i++) {
            if (warriorData.get(i).getName().equals(name)) {
                scores.set(i, scores.get(i) + value);
                break;
            }
        }
        groupScore += value;
        return i;
    }
}