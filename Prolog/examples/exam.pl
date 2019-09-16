
answer(a).
answer(b).
answer(c).
answer(d).

% item(t1).
% item(t2).
% item(t3).
% item(t4).
% item(t5).
% item(t6).
% item(t7).
% item(t8).
% item(t9).
% item(t10).

clause2(T2,T5) :-
	(T2=a; T5=c),
	(T2=b; T5=d),
	(T2=c; T5=a),
	(T2=d; T5=b).

clause3(T3,T6,T2,T4) :-
	(T3=a; \+ T6=a; T6=T2; T2=T4),
	(T3=b; \+ T6=T2; T2=T4),
	(T3=c; \+ T6=a; T6=T2; T2=T4),
	(T3=d; \+ T6=a; T6=T2; T2=T4).

find(T1,T2,T3,T4,T5,T6,T7,T8,T9,T10) :-
	clause2(T2,T5),
	clause3(T3,T6,T2,T4),
