// Generated from marcelo/almalex2/Almalex2.g4 by ANTLR 4.7.2
package marcelo.almalex2;
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class Almalex2 extends Lexer {
	static { RuntimeMetaData.checkVersion("4.7.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		PALAVRA_RESERVADA=1, NUM_INTEIRO=2, NUM_REAL=3, VARIAVEL=4, CADEIA=5, 
		COMENTARIO=6, WS=7, OPERADOR_RELACIONAL=8, OP_ARITMETICO=9, DELIMITADOR=10, 
		ABREPAR=11, FECHAPAR=12;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"PALAVRA_RESERVADA", "NUM_INTEIRO", "NUM_REAL", "VARIAVEL", "CADEIA", 
			"ESC_SEQ", "COMENTARIO", "WS", "OPERADOR_RELACIONAL", "OP_ARITMETICO", 
			"DELIMITADOR", "ABREPAR", "FECHAPAR"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, "':'", "'('", 
			"')'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "PALAVRA_RESERVADA", "NUM_INTEIRO", "NUM_REAL", "VARIAVEL", "CADEIA", 
			"COMENTARIO", "WS", "OPERADOR_RELACIONAL", "OP_ARITMETICO", "DELIMITADOR", 
			"ABREPAR", "FECHAPAR"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public Almalex2(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Almalex2.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	@Override
	public void action(RuleContext _localctx, int ruleIndex, int actionIndex) {
		switch (ruleIndex) {
		case 6:
			COMENTARIO_action((RuleContext)_localctx, actionIndex);
			break;
		case 7:
			WS_action((RuleContext)_localctx, actionIndex);
			break;
		}
	}
	private void COMENTARIO_action(RuleContext _localctx, int actionIndex) {
		switch (actionIndex) {
		case 0:
			skip();
			break;
		}
	}
	private void WS_action(RuleContext _localctx, int actionIndex) {
		switch (actionIndex) {
		case 1:
			skip();
			break;
		}
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\16\u00b3\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2"+
		"\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3"+
		"\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2"+
		"\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3"+
		"\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\5\2c\n\2\3\3\5\3f\n\3\3\3\6\3i\n\3\r\3"+
		"\16\3j\3\4\5\4n\n\4\3\4\6\4q\n\4\r\4\16\4r\3\4\3\4\6\4w\n\4\r\4\16\4x"+
		"\5\4{\n\4\3\5\3\5\7\5\177\n\5\f\5\16\5\u0082\13\5\3\6\3\6\3\6\7\6\u0087"+
		"\n\6\f\6\16\6\u008a\13\6\3\6\3\6\3\7\3\7\3\7\3\b\3\b\7\b\u0093\n\b\f\b"+
		"\16\b\u0096\13\b\3\b\5\b\u0099\n\b\3\b\3\b\3\b\3\t\3\t\3\t\3\n\3\n\3\n"+
		"\3\n\3\n\3\n\3\n\3\n\3\n\5\n\u00aa\n\n\3\13\3\13\3\f\3\f\3\r\3\r\3\16"+
		"\3\16\2\2\17\3\3\5\4\7\5\t\6\13\7\r\2\17\b\21\t\23\n\25\13\27\f\31\r\33"+
		"\16\3\2\t\4\2--//\4\2C\\c|\5\2\62;C\\c|\4\2))^^\4\2\f\f\17\17\5\2\13\f"+
		"\17\17\"\"\5\2,-//\61\61\2\u00cf\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2"+
		"\t\3\2\2\2\2\13\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3"+
		"\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\3b\3\2\2\2\5e\3\2\2\2\7"+
		"m\3\2\2\2\t|\3\2\2\2\13\u0083\3\2\2\2\r\u008d\3\2\2\2\17\u0090\3\2\2\2"+
		"\21\u009d\3\2\2\2\23\u00a9\3\2\2\2\25\u00ab\3\2\2\2\27\u00ad\3\2\2\2\31"+
		"\u00af\3\2\2\2\33\u00b1\3\2\2\2\35\36\7F\2\2\36\37\7G\2\2\37 \7E\2\2 "+
		"!\7N\2\2!\"\7C\2\2\"#\7T\2\2#$\7C\2\2$%\7V\2\2%&\7K\2\2&\'\7Q\2\2\'(\7"+
		"P\2\2(c\7U\2\2)*\7C\2\2*+\7N\2\2+,\7I\2\2,-\7Q\2\2-.\7T\2\2./\7K\2\2/"+
		"\60\7V\2\2\60\61\7J\2\2\61c\7O\2\2\62\63\7K\2\2\63\64\7P\2\2\64c\7V\2"+
		"\2\65\66\7T\2\2\66\67\7G\2\2\678\7C\2\28c\7N\2\29:\7C\2\2:;\7U\2\2;<\7"+
		"U\2\2<=\7K\2\2=>\7I\2\2>c\7P\2\2?@\7V\2\2@c\7Q\2\2AB\7T\2\2BC\7G\2\2C"+
		"D\7C\2\2Dc\7F\2\2EF\7R\2\2FG\7T\2\2GH\7K\2\2HI\7P\2\2Ic\7V\2\2JK\7K\2"+
		"\2Kc\7H\2\2LM\7V\2\2MN\7J\2\2NO\7G\2\2Oc\7P\2\2PQ\7Y\2\2QR\7J\2\2RS\7"+
		"K\2\2ST\7N\2\2Tc\7G\2\2UV\7U\2\2VW\7V\2\2WX\7C\2\2XY\7T\2\2Yc\7V\2\2Z"+
		"[\7G\2\2[\\\7P\2\2\\c\7F\2\2]^\7C\2\2^_\7P\2\2_c\7F\2\2`a\7Q\2\2ac\7T"+
		"\2\2b\35\3\2\2\2b)\3\2\2\2b\62\3\2\2\2b\65\3\2\2\2b9\3\2\2\2b?\3\2\2\2"+
		"bA\3\2\2\2bE\3\2\2\2bJ\3\2\2\2bL\3\2\2\2bP\3\2\2\2bU\3\2\2\2bZ\3\2\2\2"+
		"b]\3\2\2\2b`\3\2\2\2c\4\3\2\2\2df\t\2\2\2ed\3\2\2\2ef\3\2\2\2fh\3\2\2"+
		"\2gi\4\62;\2hg\3\2\2\2ij\3\2\2\2jh\3\2\2\2jk\3\2\2\2k\6\3\2\2\2ln\t\2"+
		"\2\2ml\3\2\2\2mn\3\2\2\2np\3\2\2\2oq\4\62;\2po\3\2\2\2qr\3\2\2\2rp\3\2"+
		"\2\2rs\3\2\2\2sz\3\2\2\2tv\7\60\2\2uw\4\62;\2vu\3\2\2\2wx\3\2\2\2xv\3"+
		"\2\2\2xy\3\2\2\2y{\3\2\2\2zt\3\2\2\2z{\3\2\2\2{\b\3\2\2\2|\u0080\t\3\2"+
		"\2}\177\t\4\2\2~}\3\2\2\2\177\u0082\3\2\2\2\u0080~\3\2\2\2\u0080\u0081"+
		"\3\2\2\2\u0081\n\3\2\2\2\u0082\u0080\3\2\2\2\u0083\u0088\7)\2\2\u0084"+
		"\u0087\5\r\7\2\u0085\u0087\n\5\2\2\u0086\u0084\3\2\2\2\u0086\u0085\3\2"+
		"\2\2\u0087\u008a\3\2\2\2\u0088\u0086\3\2\2\2\u0088\u0089\3\2\2\2\u0089"+
		"\u008b\3\2\2\2\u008a\u0088\3\2\2\2\u008b\u008c\7)\2\2\u008c\f\3\2\2\2"+
		"\u008d\u008e\7^\2\2\u008e\u008f\7)\2\2\u008f\16\3\2\2\2\u0090\u0094\7"+
		"\'\2\2\u0091\u0093\n\6\2\2\u0092\u0091\3\2\2\2\u0093\u0096\3\2\2\2\u0094"+
		"\u0092\3\2\2\2\u0094\u0095\3\2\2\2\u0095\u0098\3\2\2\2\u0096\u0094\3\2"+
		"\2\2\u0097\u0099\7\17\2\2\u0098\u0097\3\2\2\2\u0098\u0099\3\2\2\2\u0099"+
		"\u009a\3\2\2\2\u009a\u009b\7\f\2\2\u009b\u009c\b\b\2\2\u009c\20\3\2\2"+
		"\2\u009d\u009e\t\7\2\2\u009e\u009f\b\t\3\2\u009f\22\3\2\2\2\u00a0\u00aa"+
		"\7@\2\2\u00a1\u00a2\7@\2\2\u00a2\u00aa\7?\2\2\u00a3\u00aa\7>\2\2\u00a4"+
		"\u00a5\7>\2\2\u00a5\u00aa\7?\2\2\u00a6\u00a7\7>\2\2\u00a7\u00aa\7@\2\2"+
		"\u00a8\u00aa\7?\2\2\u00a9\u00a0\3\2\2\2\u00a9\u00a1\3\2\2\2\u00a9\u00a3"+
		"\3\2\2\2\u00a9\u00a4\3\2\2\2\u00a9\u00a6\3\2\2\2\u00a9\u00a8\3\2\2\2\u00aa"+
		"\24\3\2\2\2\u00ab\u00ac\t\b\2\2\u00ac\26\3\2\2\2\u00ad\u00ae\7<\2\2\u00ae"+
		"\30\3\2\2\2\u00af\u00b0\7*\2\2\u00b0\32\3\2\2\2\u00b1\u00b2\7+\2\2\u00b2"+
		"\34\3\2\2\2\20\2bejmrxz\u0080\u0086\u0088\u0094\u0098\u00a9\4\3\b\2\3"+
		"\t\3";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}