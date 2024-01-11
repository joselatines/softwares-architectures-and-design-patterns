import { BaseballAgencyFactory } from "./baseball-factory";
import { AgencyAbstractFactory } from "./interfaces";
import { SoccerAgencyFactory } from "./soccer-factory";

interface Opts {
	teamName: string;
	logoAgency?: string;
}

function clientCode(agency: AgencyAbstractFactory, { teamName }: Opts) {
	const agencyTeam1 = agency.createTeam(teamName);
	agencyTeam1.slogan();
}

const baseballFactory = new BaseballAgencyFactory();
const soccerFactory = new SoccerAgencyFactory();

clientCode(baseballFactory, { teamName: "Magallanes" });
clientCode(soccerFactory, { teamName: "Caracas FC" });
