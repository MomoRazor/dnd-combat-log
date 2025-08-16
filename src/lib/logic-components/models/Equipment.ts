import type { DamageType, ValueType } from './ItemValues';

interface Consumable {
	id: string;
	name: string;
	description: string;
	quantity: number;
}

interface EquipmentItem {
	id: string;
	name: string;
	effects: string[];
}

interface Weapon extends EquipmentItem {
	damageType: DamageType;
	damageDice: string; // e.g., '1d8'
	range: number;
}

interface Armor extends EquipmentItem {
	AC: ValueType;
	Type: ArmorType;
	stealthDisadvantage: boolean;
}

interface EquipmentInterface {
	weapons: Weapon[];
	armor: Armor[];
	consumables: Consumable[];
}

export class Equipment implements EquipmentInterface {
	weapons: Weapon[] = [];
	armor: Armor[] = [];
	consumables: Consumable[] = [];
	constructor() {}
}

type ArmorType = 'Light' | 'Medium' | 'Heavy' | 'Shield';
