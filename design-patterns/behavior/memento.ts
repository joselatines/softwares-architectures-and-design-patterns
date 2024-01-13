interface Originator {
  createSnapshot(): SnapshotMemento
}

class Editor implements Originator {
	private x = "";
	private y = "";
	private color = "";
	setX(x: string) {
		this.x = x;
	}
	setY(y: string) {
		this.y = y;
	}
	setColor(colorCode: string) {
		this.color = colorCode;
	}

	createDraw() {
		console.log({ x: this.x, y: this.y, color: this.color });
	}

	// create backup
	createSnapshot() {
		return new SnapshotMemento(this, this.x, this.y, this.color);
	}
}

class SnapshotMemento {
	constructor(
		private editorOriginator: Editor,
		private x: string,
		private y: string,
		private color: string
	) {}

	restore() {
		this.editorOriginator.setX(this.x);
		this.editorOriginator.setY(this.y);
		this.editorOriginator.setColor(this.color);
	}
}

class CommandCareTaker {
	currentBackup: SnapshotMemento | null = null;
	constructor(private originator: Editor) {}
	makeBackup() {
		this.currentBackup = this.originator.createSnapshot();
	}

	undo() {
		if (this.currentBackup) return this.currentBackup.restore();

		console.log("no snapshot saver created");
	}
}

const editor = new Editor();
const backup = new CommandCareTaker(editor);

editor.setX("1");
editor.setY("1");
editor.setColor("1");
editor.createDraw();
backup.makeBackup();

editor.setX("");
editor.setY("");
editor.setColor("");
editor.createDraw();

backup.undo();
editor.createDraw();