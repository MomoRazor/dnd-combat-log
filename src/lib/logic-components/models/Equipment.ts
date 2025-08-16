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

	addWeapon(weapon: Weapon): void;
	addArmor(armor: Armor): void;
	addConsumable(consumable: Consumable): void;
	removeWeapon(weaponId: string): void;
	removeArmor(armorId: string): void;
	removeConsumable(consumableId: string): void;
}

export class Equipment implements EquipmentInterface {
	weapons: Weapon[] = [];
	armor: Armor[] = [];
	consumables: Consumable[] = [];
	constructor() {}

	addWeapon(weapon: Weapon) {
		this.weapons.push(weapon);
	}

	addArmor(armor: Armor) {
		this.armor.push(armor);
	}

	addConsumable(consumable: Consumable) {
		this.consumables.push(consumable);
	}

	removeWeapon(weaponId: string) {
		this.weapons = this.weapons.filter((weapon) => weapon.id !== weaponId);
	}

	removeArmor(armorId: string) {
		this.armor = this.armor.filter((armor) => armor.id !== armorId);
	}

	removeConsumable(consumableId: string) {
		this.consumables = this.consumables.filter((consumable) => consumable.id !== consumableId);
	}
}

type ArmorType = 'Light' | 'Medium' | 'Heavy' | 'Shield';
