interface Character {
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
