import { v4 as uuidv4 } from 'uuid';

interface CounterInterface {
	id: string;
	name: string;
	value: number;
	defaultValue?: number; // Optional default value for the counter
	increment(amount?: number): void;
	decrement(amount?: number): void;
	reset(): void;
}

export class Counter implements CounterInterface {
	id: string = uuidv4();
	name: string;
	value: number = 0;
	defaultValue?: number;

	constructor(name: string, defaultValue?: number) {
		this.name = name;
		if (defaultValue !== undefined) {
			this.value = defaultValue;
		}
	}

	increment(amount: number = 1) {
		this.value += amount;
	}

	decrement(amount: number = 1) {
		if (this.value - amount >= 0) {
			this.value -= amount;
		} else {
			this.value = 0; // Prevent negative values
		}
	}

	reset() {
		if (this.defaultValue !== undefined) {
			this.value = this.defaultValue;
		} else {
			this.value = 0; // Reset to zero if no default value is set
		}
	}
}
