/* 
This structure separates the abstraction (Platform) from its implementation (Game), 
allowing them to vary independently. It follows the Bridge Pattern by providing a 
bridge between different platforms and games. 
*/

// Implementor
interface Game {
	showTutorial(): void;
}

class Fornite implements Game {
	showTutorial() {
		console.log("show tutorial fornite");
	}
}
class GTA5 implements Game {
	showTutorial() {
		console.log("show tutorial gta");
	}
}

// Abstraction
abstract class Platform {
	constructor(protected game: Game) {}
	play(): void {
		console.log("playing in platform");
		this.game.showTutorial();
	}
}

class Pc extends Platform {
	play(): void {
		console.log("playing in pc");
		this.game.showTutorial();
	}
}
class Android extends Platform {
	play(): void {
		console.log("playing in android");
		this.game.showTutorial();
	}
}

const gta5game = new GTA5();
const forniteGame = new Fornite();

const pcPlatform = new Pc(gta5game);
const androidPlatform = new Android(forniteGame);

pcPlatform.play();
androidPlatform.play();
