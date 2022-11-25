grammar  Expressoes;

programa:
    expressao EOF
;
expressao:
    termo1=termo (op1 outrosTermos+=termo)*
;
termo:
    fator1=fator (op2 outrosFatores+=fator)*
;       
fator:
    '(' expressao ')' |
    NUM
;
op1:
    '+' | '-'
;
op2:
    '*' | '/'
;
NUM:
    '0'..'9'+
;	
WS:
    ( ' ' | '\n' | '\r' | '\t' ) -> skip
;
 