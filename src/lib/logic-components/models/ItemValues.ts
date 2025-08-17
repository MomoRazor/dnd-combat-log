interface ListItem {
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

export class ValueType implements ValueTypeInterface {
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

export interface DamageModifier extends ListItem {
	resistance: DamageType;
	condition: DamageModifierCondition;
}

export type DamageModifierCondition = 'Resistance' | 'Weakness' | 'Immunity';

export type DamageType =
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

interface SpellLevelPointsInterface {
	[spellLevel: number]: number; // Points associated with each spell level
}

export const SpellLevelPoints: SpellLevelPointsInterface = {
	0: 0, // Cantrips
	1: 2,
	2: 3,
	3: 5,
	4: 6,
	5: 7,
	6: 9,
	7: 10,
	8: 11,
	9: 13
};
