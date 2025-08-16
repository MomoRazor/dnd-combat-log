import { v4 as uuidv4 } from 'uuid';
import { Abilities } from './Abilities';
import type { Counter } from './Counter';
import { Equipment } from './Equipment';
import { ValueType, type DamageModifier } from './ItemValues';

interface CharacterInterface {
	ID: string; // Unique identifier for the character
	Name: string; // Name of the character
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
	CustomCounters: Counter[];
	ActiveFeats: string[];
	Equipment: Equipment;
	Abilities: Abilities;
}

export class Character implements CharacterInterface {
	ID: string = uuidv4(); // Generate a unique ID for the character
	Name: string;
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
	CustomCounters: Counter[] = [];
	ActiveFeats: string[] = [];
	Equipment: Equipment = new Equipment();
	Abilities: Abilities = new Abilities();

	constructor(name: string) {
		this.Name = name;
	}

	getSCAttackBonus(): number {
		return this.SCModifier + this.ProficiencyBonus;
	}

	getSpellSaveDC(): number {
		return 8 + this.SCModifier + this.ProficiencyBonus;
	}
}
