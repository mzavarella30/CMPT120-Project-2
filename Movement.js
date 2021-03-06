// Movement.js

// Array to define the game area. I like movement this way, much much easier.
var GameArea = new Array(
				/*  N   S   E   W */
				/*  0   1   2   3 */
		  /* 0 */ [-1, -1, -1,  1],
		  /* 1 */ [-1,  4,  0,  2],
		  /* 2 */ [-1, -1,  1, -1],
		  /* 3 */ [-1, -1, -1,  4],
		  /* 4 */ [ 1,  8,  3,  5],
		  /* 5 */ [-1, -1,  4,  6],
		  /* 6 */ [-1, -1,  5, -1],
		  /* 7 */ [-1, -1,  8, -1],
		  /* 8 */ [ 4, -1, 10,  7],
		  /* 9 */ [13, 17, -1, -1],
		 /* 10 */ [-1, -1, 11,  8],
		 /* 11 */ [14, -1, 12, 10],
		 /* 12 */ [-1, -1, 13, 11],
		 /* 13 */ [-1,  9, -1, 12],
		 /* 14 */ [16, 11, 15, -1],
		 /* 15 */ [-1, -1, -1, 14],
		 /* 16 */ [-1, 14, -1, -1],
		 /* 17 */ [ 9, -1, -1, -1],
		 /* 18 */ [17, 19, -1, 20],
		 /* 19 */ [18, -1, -1, -1],
		 /* 20 */ [-1, -1, 18, -1]
			             );	

// This is the puzzle portion of the game, the user needs the watch, money, and car keys to leave for the store
// I just need to figure out how to actually make it work... 
// Edit: December 7, 2012, 3:14 am by Michael Zavarella... I think it works. Further testing needed
// Where do i call it from
function unlockStore2() {
	if (Inventory.length === 3) {
		GameArea[17] = [  9, 18, -1, -1];
	} else {
		GameArea[17] = [  9, -1, -1, -1];
	}
}

// This is the function that prevents the user from going home when they take the cookies
// but still haven't paid for them
function lockHome() {
	if (Inventory.length === 4) {
		GameArea[18] = [-1, 19, 20, 20];
	} else {
		GameArea[18] = [17, 19, -1, 20];
	}
}

// Movement function, takes in the desired direction and the users current location, and outputs the new location
// or the same location if they are not allowed to move in that direction.			
function move(direction) {
	newLocation = GameArea[userlocation][direction];
	if (newLocation !== -1) {
		userlocation = newLocation;
		updateText(ListOfLocations[userlocation])
		ButtonSwitchFunction(userlocation);
	} else if (newLocation === -1) {
		var msg = "You can't go that way silly!"
		updateText(msg);
	}
	usermoves = usermoves + 1;
}