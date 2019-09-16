
loves(juliet, romeo) :- loves(romeo, juliet).

stabs(tybalt, mercutio, sword).
hates(romeo, X) :- stabs(X, mercutio, sword).

does_romeo_hate_tybalt :- hates(tybalt).
