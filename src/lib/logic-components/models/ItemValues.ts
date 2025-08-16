interface ListItem {
	id: string;
	name: string;
	description?: string;
}

interface ListValue extends ListItem {
	value: number;
}

interface ValueTypeInterface {
	name: string;
	total: number;
	components: ListValue[];
}

class ValueType implements ValueTypeInterface {
	name: string;
	total: number = this.getTotal();
	components: ListValue[] = [];

	constructor(name: string) {
		this.name = name;
	}

	getTotal(): number {
		return this.components.reduce((sum, item) => sum + item.value, 0);
	}
}

interface DamageModifier extends ListItem {
	resistance: DamageType;
	condition: DamageModifierCondition;
}

type DamageModifierCondition = 'Resistance' | 'Weakness' | 'Immunity';

type DamageType =
	| 'Piercing'
	| 'Slashing'
	| 'Bludgeoning'
	| 'Acid'
	| 'Cold'
	| 'Fire'
	| 'Force'
	| 'Lightning'
	| 'Necrotic'
	| 'Poison'
	| 'Psychic'
	| 'Radiant'
	| 'Thunder';
