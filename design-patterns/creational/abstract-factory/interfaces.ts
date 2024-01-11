// Product class
export interface Team {
	slogan(): string;
}

export interface Logo {

}

// AbstractFactory
export interface AgencyAbstractFactory {
	createTeam(name: string): Team;
	createLogo(draw: string): Logo;
}
