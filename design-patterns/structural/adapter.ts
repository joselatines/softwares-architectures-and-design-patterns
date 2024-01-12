class Windows10Controller {
	buildSystem(processor: number) {
		console.log(processor, "- Windows 10 processor number");
	}
}

class Windows11ControllerAdapter extends Windows10Controller {
	private windows11Controller = new Windows11Controller();
	buildSystem(processor: number) {
		const processorConverted = processor.toString();
		this.windows11Controller.buildSystem(processorConverted);
	}
}

class Windows11Controller {
	buildSystem(processor: string) {
		console.log(processor, "- Windows 11 processor string");
	}
}

// client
const windows10 = new Windows10Controller()
const windows11adapter = new Windows11ControllerAdapter()
windows10.buildSystem(7)
windows11adapter.buildSystem(5)
