lexer grammar Almalex2;


PALAVRA_RESERVADA :	'DECLARATIONS' | 'ALGORITHM' | 'INT' | 'REAL' | 'ASSIGN' | 'TO' | 'READ'| 'PRINT' | 'IF' | 'THEN' 
	| 'WHILE' | 'START' | 'END' | 'AND' | 'OR' ; 

NUM_INTEIRO	: ('+'|'-')?('0'..'9')+;

NUM_REAL	: ('+'|'-')?('0'..'9')+ ('.' ('0'..'9')+)?;

VARIAVEL : ('a'..'z'|'A'..'Z') ('a'..'z'|'A'..'Z'|'0'..'9')*;

CADEIA 	: '\'' ( ESC_SEQ | ~('\''|'\\') )*  '\'';
fragment
ESC_SEQ	: '\\\'';

COMENTARIO:   '%' ~('\n'|'\r')* '\r'? '\n' {skip();};

WS:   ( ' '| '\t'| '\r'| '\n') {skip();};

OPERADOR_RELACIONAL:	'>' | '>=' | '<' | '<=' | '<>' | '=';

OP_ARITMETICO : '+' | '-' | '*' | '/';

DELIMITADOR :	':';

ABREPAR : '(';

FECHAPAR : ')';