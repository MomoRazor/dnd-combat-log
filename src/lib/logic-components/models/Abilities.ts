interface Ability {
	id: string;
	name: string;
	description: string;
}

interface RollableAbility extends Ability {
	diceRoll: DiceRoll; // The dice roll used for the ability, if applicable
}

interface Spell extends RollableAbility {
	level: number;
	castingTime: string; // e.g., '1 action', '1 bonus action'
	range: string; // e.g., '60 feet', 'Touch'
	concentration: boolean;
	ritual: boolean;
	duration: string; // e.g., '1 minute', 'Instantaneous'
	damageType: DamageType; // The type of damage the spell deals, if applicable
}

interface Abilities {
	abilities: Ability[];
	spells: Spell[];
	rollableAbilities: RollableAbility[];
}
