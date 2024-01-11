interface Vehicle {
	wheels: number;
	motor: string;
}

interface Builder {
	setWheels(wheels: number): void;
	setMotor(motor: string): void;
	setPrice(price: number): void;
	setMaterial(material: string): void;
	getResults(): Vehicle;
}

interface Director {
	buildFancyCar(): Vehicle;
	buildCar(): Vehicle;
	setBuilder(builder: Builder): void;
}

class Car implements Vehicle {
	wheels = 4;
	motor = "100cc";
	price = 500;
	material = "metal";
}

class CarBuilder implements Builder {
	vehicle = new Car();

	constructor() {
		this.reset();
	}

	reset(): void {
		this.vehicle = new Car();
	}

	setWheels(wheels: number) {
		this.vehicle.wheels = wheels;
	}

	setMotor(motor: string): void {
		this.vehicle.motor = motor;
	}

	setPrice(price: number): void {
		this.vehicle.price = price;
	}

	setMaterial(material: string): void {
		this.vehicle.material = material;
	}

	getResults() {
		const result = this.vehicle;
		this.reset();
		return result;
	}
}

class VehicleDirector implements Director {
	constructor(private currentBuilder: Builder) {}
	buildCar(): Vehicle {
		this.currentBuilder.setMotor("500cc");
		this.currentBuilder.setPrice(1000);
		this.currentBuilder.setWheels(4);

		return this.currentBuilder.getResults();
	}

	buildFancyCar(): Vehicle {
		this.currentBuilder.setMotor("2000cc");
		this.currentBuilder.setPrice(30000);
		this.currentBuilder.setWheels(6);
		this.currentBuilder.setMaterial("Diamonds");

		return this.currentBuilder.getResults();
	}

	setBuilder(newBuilder: Builder): void {
		this.currentBuilder = newBuilder;
	}
}

const carBuilder = new CarBuilder();
const director = new VehicleDirector(carBuilder);

const commonCar = director.buildCar();
const fancyCar = director.buildFancyCar();

console.log({ commonCar, fancyCar });
