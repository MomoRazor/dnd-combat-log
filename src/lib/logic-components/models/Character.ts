interface CharacterInterface {
	AC: ValueType;
	HP: ValueType;
	Speed: ValueType;
	ProficiencyBonus: number;
	DamageBonus: ValueType;
	AttackBonus: ValueType;
	DamageTypeModifiers: DamageModifier[];
	SCPoints: number;
	SCModifier: number;
	SCAttackBonus: number;
	SpellSaveDC: number;
	CustomCounters: counter[];
	ActiveFeats: string[];
	Equipment: Equipment;
	Abilities: Abilities;
}

class Character implements CharacterInterface {
	AC: ValueType = new ValueType('Armor Class');
	HP: ValueType = new ValueType('Hit Points');
	Speed: ValueType = new ValueType('Speed');
	ProficiencyBonus: number = 0;
	DamageBonus: ValueType = new ValueType('Damage Bonus');
	AttackBonus: ValueType = new ValueType('Attack Bonus');
	DamageTypeModifiers: DamageModifier[] = [];
	SCPoints: number = 0;
	SCModifier: number = 0;
	SCAttackBonus: number = this.getSCAttackBonus();
	SpellSaveDC: number = this.getSpellSaveDC();
	CustomCounters: counter[] = [];
	ActiveFeats: string[] = [];
	Equipment: Equipment = new Equipment();
	Abilities: Abilities = new Abilities();
	constructor() {}

	getSCAttackBonus(): number {
		return this.SCModifier + this.ProficiencyBonus;
	}

	getSpellSaveDC(): number {
		return 8 + this.SCModifier + this.ProficiencyBonus;
	}
}
