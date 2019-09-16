
man(george).
man(john).
man(robert).
woman(barbara).
woman(christine).
woman(yolanda).

location(bathroom).
location(dining).
location(kitchen).
location(livingroom).
location(pantry).
location(study).

weapon(bag).
weapon(firearm).
weapon(gas). 
weapon(knife).
weapon(poison).
weapon(rope).

person(X) :- man(X).
person(X) :- woman(X).

uniq_ppl(A,B,C,D,E,F) :- 
	person(A), person(B), person(C),
	person(D), person(E), person(F),
	\+A=B, \+A=C, \+A=D, \+A=E, \+A=F, 
	\+B=C, \+B=D, \+B=E, \+B=F, 
	\+C=D, \+C=E, \+C=F, 
	\+D=E, \+D=F, 
	\+E=F.

murderer(X) :-
	uniq_ppl(Bathroom, Dining, Kitchen, Livingroom, Pantry, Study),
	uniq_ppl(Bag, Firearm, Gas, Knife, Poison, Rope),
	man(Kitchen),
	\+Kitchen=Rope, \+Kitchen=Knife, \+Kitchen=Bag, \+Kitchen=Firearm,

	woman(Bathroom), woman(Study), 
  \+christine=Bathroom, \+christine=Study, 
  \+barbara=Dining, \+barbara=Kitchen, 
  \+barbara=Livingroom, \+barbara=Pantry,
  \+yolanda=Dining, \+yolanda=Kitchen, 
  \+yolanda=Livingroom, \+yolanda=Pantry,

	\+barbara=Bag, \+george=Bag, 
	\+Bag=Bathroom, \+Bag=Dining,

	woman(Rope), Rope=Study,

	man(Livingroom), \+Livingroom=robert,

	\+Knife=Dining,

	\+yolanda=Pantry, \+yolanda=Study,

	Firearm=george,

	Pantry=Gas, Pantry=X, Gas=X.
