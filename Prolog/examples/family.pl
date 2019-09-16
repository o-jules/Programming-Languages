
female(alice).
female(betsy).
female(diana).

male(albert).
male(bob).
male(bill).
male(bob).
male(carl).
male(charlie).

parent(albert, bob).
parent(albert, betsy).
parent(albert, bill).

parent(alice, bob).
parent(alice, betsy).
parent(alice, bill).

parent(bob, carl).
parent(bob, charlie).

get_grand_child(X) :-
	parent(X, Y),
	parent(Y, Z),
	format("~w 's grandchild is ~w ~n", [X, Z]),
	nl.

get_grand_parent(X, Y) :-
	parent(Z, X),
	parent(Y, Z).

is_brother(X, Y) :-
	parent(Z, X), parent(Z, Y).

related(X, Y) :-
	parent(X, Y).

related(X, Y) :-
	parent(X, Z),
	related(Z, Y).