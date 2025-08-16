interface ListItem {
	id: string;
	name: string;
	description?: string;
}

interface ListValue extends ListItem {
	value: number;
}

interface ValueType {
	name: string;
	total: number;
	components: ListValue[];
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
