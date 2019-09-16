
happy(albert).
happy(alice).
happy(bob).
happy(bill).

friend(alice, bob).
friend(bill, albert).

with(albert, alice).
near_water(bill).

runs(albert) :-
	happy(albert).

dances(alice) :-
	happy(alice),
	with(albert, alice).

does_alice_dance :- dances(alice),
	write("When Alice is happy and with Albert she dances.").

swims(bill) :-
	happy(bill).

swims(bill) :-
	near_water(bill).

onside_friend(X, Y) :- friend(X, Y), \+ friend(Y, X).
