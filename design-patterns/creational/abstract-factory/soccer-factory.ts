import {
	AgencyAbstractFactory,
	Logo as ILogo,
	Team as ITeam,
} from "./interfaces";

class Logo implements ILogo {
	svg: string;
	constructor(draw: string) {
		this.svg = draw + ".svg";
	}
}


class SoccerTeam implements ITeam {
	constructor(private name: string) {}
	slogan(): string {
		const sloganTxt = `Soccer team: Let's go ${this.name}!!!`;
		console.log(sloganTxt);
		return sloganTxt;
	}
}

export class SoccerAgencyFactory implements AgencyAbstractFactory {
	createTeam(name: string): ITeam {
		return new SoccerTeam(name);
	}

	createLogo(draw: string): Logo {
		const logo = new Logo(draw);
		console.log("Soccer Agency:", logo.svg);
		return logo;
	}
}
