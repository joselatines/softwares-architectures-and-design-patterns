import {
	AgencyAbstractFactory,
	Logo as ILogo,
	Team as ITeam,
} from "./interfaces";

class BaseballTeam implements ITeam {
	constructor(private name: string) {}
	slogan(): string {
		const sloganTxt = `Baseball team: Let's go ${this.name}!!!`;
		console.log(sloganTxt);
		return sloganTxt;
	}
}

class BaseballLogo implements ILogo {
	svg: string;
	constructor(draw: string) {
		this.svg = draw + ".svg";
	}
}

export class BaseballAgencyFactory implements AgencyAbstractFactory {
	createTeam(name: string): ITeam {
		return new BaseballTeam(name);
	}

	createLogo(draw: string): ILogo {
		const logo = new BaseballLogo(draw);
		console.log("Baseball Agency:", logo.svg);
		return logo;
	}
}
