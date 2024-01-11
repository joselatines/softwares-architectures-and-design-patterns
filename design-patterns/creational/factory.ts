// Product class
interface Equipo {
	slogan(): void;
}


// Creator class
abstract class Agency {
	public abstract createEquipo(name: string): Equipo;
	public someOperation(): string {
		return "other function";
	}
}

// Specific Creator (child)
class EquipoAgency extends Agency {
	createEquipo(name: string): Equipo {
		return new EquipoEquipo(name);
	}
}

// Specific Creator 2 (child)
class FootballAgency extends Agency {
	createEquipo(name: string): Equipo {
		return new FootballEquipo(name);
	}
}


// Product
class EquipoEquipo implements Equipo {
	constructor(private name: string) {
		this.name = name;
	}

	slogan() {
		console.log(this.name, "Equipo Equipo");
	}
}

// Product 2
class FootballEquipo implements Equipo {
	constructor(private name: string) {
		this.name = name;
	}

	slogan() {
		console.log(this.name, "Football Equipo");
	}
}

const agency1 = new EquipoAgency();
const Equipo1 = agency1.createEquipo("Los Angeles");
Equipo1.slogan();

const agency2 = new FootballAgency();
const Equipo2 = agency2.createEquipo("Barcelona");
Equipo2.slogan();
