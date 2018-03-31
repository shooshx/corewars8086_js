package il.co.codeguru.corewars8086.gui;


import java.util.Stack;

public class ExpressionParser {
    /// Evaluate an integer arithmetic expression and return its result.
    /// @throw error if parsing fails.
    ///
    public int eval(String expr) throws Exception {
        int result = 0;
        index_ = 0;
        expr_ = expr;
        try {
            result = parseExpr();
            if (!isEnd())
                unexpected();
        }
        catch (Exception e)
        {
            while (!stack_.empty())
                stack_.pop();
            throw e;
        }
        return result;
    }

    /// Get the integer value of a character.
   /* int eval(char c) {
        std::string expr(1, c);
        return eval(expr);
    }*/

    private enum EOps {
        OPERATOR_NULL,
        OPERATOR_BITWISE_OR,     /// |
        OPERATOR_BITWISE_XOR,    /// ^
        OPERATOR_BITWISE_AND,    /// &
        OPERATOR_BITWISE_SHL,    /// <<
        OPERATOR_BITWISE_SHR,    /// >>
        OPERATOR_ADDITION,       /// +
        OPERATOR_SUBTRACTION,    /// -
        OPERATOR_MULTIPLICATION, /// *
        OPERATOR_DIVISION,       /// /
        OPERATOR_MODULO,         /// %
        OPERATOR_POWER,          /// **
        OPERATOR_EXPONENT        /// e, E
    }


    private class Operator
    {
        /// Operator, one of the OPERATOR_* enum definitions
        EOps op;
        int precedence;
        /// 'L' = left or 'R' = right
        int associativity;
        public Operator( EOps opr, int prec, int assoc)
        {
            op = opr;
            precedence = prec;
            associativity = assoc;
        }
    }


    private class OperatorValue
    {
        Operator op;
        int value;
        public OperatorValue(Operator opr, int val) {
            op = opr;
            value = val;
        }
        int getPrecedence()
        {
            return op.precedence;
        }
        boolean isNull()
        {
            return op.op == EOps.OPERATOR_NULL;
        }
    }



    /// Expression string
    private String expr_;
    /// Current expression index, incremented whilst parsing
    private int index_;
    /// The current operator and its left value
    /// are pushed onto the stack if the operator on
    /// top of the stack has lower precedence.
    private Stack<OperatorValue> stack_ = new Stack<OperatorValue>();

    /// Exponentiation by squaring, x^n.
    private static int pow(int x, int n) {
        int res = 1;

        while (n > 0) {
            if (n % 2 != 0) {
                res *= x;
                n -= 1;
            }
            n /= 2;

            if (n > 0)
                x *= x;
        }

        return res;
    }


    private int checkZero(int value) throws Exception
    {
        if (value == 0) {
            String divOperators = "/%";
            int division = expr_.lastIndexOf(divOperators, index_ - 2);
            StringBuilder msg = new StringBuilder();
            msg.append("Parser error: division by 0");
            if (division != -1) {
                msg.append(" (error token is \"");
                msg.append(expr_.substring(division, expr_.length() ));
                msg.append("\")");
            }
            throw new Exception(msg.toString());
        }
        return value;
    }

    private int calculate(int v1, int v2, Operator op) throws Exception
    {
        switch (op.op) {
            case OPERATOR_BITWISE_OR:
                return v1 | v2;
            case OPERATOR_BITWISE_XOR:
                return v1 ^ v2;
            case OPERATOR_BITWISE_AND:
                return v1 & v2;
            case OPERATOR_BITWISE_SHL:
                return v1 << v2;
            case OPERATOR_BITWISE_SHR:
                return v1 >> v2;
            case OPERATOR_ADDITION:
                return v1 + v2;
            case OPERATOR_SUBTRACTION:
                return v1 - v2;
            case OPERATOR_MULTIPLICATION:
                return v1 * v2;
            case OPERATOR_DIVISION:
                return v1 / checkZero(v2);
            case OPERATOR_MODULO:
                return v1 % checkZero(v2);
            case OPERATOR_POWER:
                return pow(v1, v2);
            case OPERATOR_EXPONENT:
                return v1 * pow(10, v2);
            default:
                return 0;
        }
    }

    boolean isEnd()
    {
        return index_ >= expr_.length();
    }

    /// Returns the character at the current expression index or
    /// 0 if the end of the expression is reached.
    ///
    private char getCharacter()
    {
        if (!isEnd())
            return expr_.charAt(index_);
        return 0;
    }

    /// Parse str at the current expression index.
    /// @throw error if parsing fails.
    ///
    private void expect(String str) throws Exception {
        if (!expr_.regionMatches(index_, str, 0, str.length()))
            unexpected();
        index_ += str.length();
    }

    private void unexpected() throws Exception
    {
        StringBuilder msg = new StringBuilder();
        msg.append("Syntax error: unexpected token \"");
        msg.append(expr_.substring(index_, expr_.length() ));
        msg.append("\" at index ");
        msg.append(index_);
        throw new Exception(msg.toString());
    }

    /// Eat all white space characters at the
    /// current expression index.
    ///
    private void eatSpaces() {
        while (getCharacter() == ' ')
            index_++;
    }

    /// Parse a binary operator at the current expression index.
    /// @return Operator with precedence and associativity.
    ///
    private Operator parseOp()  throws Exception
    {
        eatSpaces();
        switch (getCharacter()) {
            case '|':
                index_++;
                return new Operator(EOps.OPERATOR_BITWISE_OR, 4, 'L');
            case '^':
                index_++;
                return new Operator(EOps.OPERATOR_BITWISE_XOR, 5, 'L');
            case '&':
                index_++;
                return new Operator(EOps.OPERATOR_BITWISE_AND, 6, 'L');
            case '<':
                expect("<<");
                return new Operator(EOps.OPERATOR_BITWISE_SHL, 9, 'L');
            case '>':
                expect(">>");
                return new Operator(EOps.OPERATOR_BITWISE_SHR, 9, 'L');
            case '+':
                index_++;
                return new Operator(EOps.OPERATOR_ADDITION, 10, 'L');
            case '-':
                index_++;
                return new Operator(EOps.OPERATOR_SUBTRACTION, 10, 'L');
            case '/':
                index_++;
                return new Operator(EOps.OPERATOR_DIVISION, 20, 'L');
            case '%':
                index_++;
                return new Operator(EOps.OPERATOR_MODULO, 20, 'L');
            case '*':
                index_++;
                if (getCharacter() != '*')
                    return new Operator(EOps.OPERATOR_MULTIPLICATION, 20, 'L');
                index_++;
                return new Operator(EOps.OPERATOR_POWER, 30, 'R');
            case 'e':
                index_++;
                return new Operator(EOps.OPERATOR_EXPONENT, 40, 'R');
            case 'E':
                index_++;
                return new Operator(EOps.OPERATOR_EXPONENT, 40, 'R');
            default:
                return new Operator(EOps.OPERATOR_NULL, 0, 'L');
        }
    }

    private static int toInteger(char c) {
        if (c >= '0' && c <= '9') return c - '0';
        if (c >= 'a' && c <= 'f') return c - 'a' + 0xa;
        if (c >= 'A' && c <= 'F') return c - 'A' + 0xa;
        int noDigit = 0xf + 1;
        return noDigit;
    }

    private int getInteger()
    {
        return toInteger(getCharacter());
    }

    private int parseDecimal() {
        int value = 0;
        for (int d; (d = getInteger()) <= 9; index_++)
            value = value * 10 + d;
        return value;
    }

    private int parseHex() {
        index_ = index_ + 2;
        int value = 0;
        for (int h; (h = getInteger()) <= 0xf; index_++)
            value = value * 0x10 + h;
        return value;
    }

    private boolean isHex()
    {
        if (index_ + 2 < expr_.length()) {
            char x = expr_.charAt(index_ + 1);
            char h = expr_.charAt(index_ + 2);
            return (Character.toLowerCase(x) == 'x' && toInteger(h) <= 0xf);
        }
        return false;
    }

    /// Parse an integer value at the current expression index.
    /// The unary `+', `-' and `~' operators and opening
    /// parentheses `(' cause recursion.
    ///
    private int parseValue() throws Exception {
        int val = 0;
        eatSpaces();
        switch (getCharacter()) {
            case '0':
                if (isHex())
                    val = parseHex();
                else
                    val = parseDecimal();
                break;
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                val = parseDecimal();
                break;
            case '(':
                index_++;
                val = parseExpr();
                eatSpaces();
                if (getCharacter() != ')') {
                    if (!isEnd())
                        unexpected();
                    throw new Exception("Syntax error: `)' expected at end of expression");
                }
                index_++;
                break;
            case '~':
                index_++;
                val = ~parseValue();
                break;
            case '+':
                index_++;
                val = parseValue();
                break;
            case '-':
                index_++;
                val = parseValue() * (-1);
                break;
            default:
                if (!isEnd())
                    unexpected();
                throw new Exception("Syntax error: value expected at end of expression");
        }
        return val;
    }

    /// Parse all operations of the current parenthesis
    /// level and the levels above, when done
    /// return the result (value).
    ///
    private int parseExpr() throws Exception {
        stack_.push(new OperatorValue(new Operator(EOps.OPERATOR_NULL, 0, 'L'), 0));
        // first parse value on the left
        int value = parseValue();

        while (!stack_.empty()) {
            // parse an operator (+, -, *, ...)
            Operator op = parseOp();
            while (op.precedence < stack_.peek().getPrecedence() || (
                    op.precedence == stack_.peek().getPrecedence() &&
                            op.associativity == 'L'))
            {
                // end reached
                if (stack_.peek().isNull()) {
                    stack_.pop();
                    return value;
                }
                // do the calculation ("reduce"), producing a new value
                value = calculate(stack_.peek().value, value, stack_.peek().op);
                stack_.pop();
            }

            // store on stack_ and continue parsing ("shift")
            stack_.push(new OperatorValue(op, value));
            // parse value on the right
            value = parseValue();
        }
        return 0;
    }
}

// template<typename T>
// inline T eval(const std::string&expression)
// {
//     ExpressionParser<T> parser;
//     return parser.eval(expression);
// }

// template<typename T>
// inline T eval(char c)
// {
//     ExpressionParser<T> parser;
//     return parser.eval(c);
// }

// inline int eval(const std::string&expression)
// {
//     return eval<int>(expression);
// }

// inline int eval(char c)
// {
//     return eval<int>(c);
// }
