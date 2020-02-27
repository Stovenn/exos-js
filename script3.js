function spaces(line, floor) {
	let space =""; 
	for (let i = floor - line; i > 0; i--) {
		space += " ";
	}
	return space;
};

function bricks(line) {
	let brick = "";
	for (let i = 1; i <= line; i++) {
		brick += '#';
	}
	return brick;
};

function constructor(line, floor) { 
	let l ="";
	l += spaces(line, floor);
	l += bricks(line)
  return l;
};

function halfPyramid() {
  console.log("Salut, bienvenue dans ma super pyramide ");
	let floor = parseInt(prompt("Choisi un nombre d'étages"))
		for (let i = 1; i <= floor ; i++) {
			console.log(constructor(i, floor));
		}
};

halfPyramid();


