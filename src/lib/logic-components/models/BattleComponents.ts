import type { Spell } from './Abilities';
import { Stats } from './Character';
import type { Counter } from './Counter';
import { SpellLevelPoints } from './ItemValues';

interface BattleComponentsInterface {
	turn: number; // Current round of the battle
	activeConcentrations: Spell[];
	spentSpellPoints: number; // Total spell points spent in the current battle
	customCounters: Counter[]; // Custom counters for the battle, taken from the character
	stats: Stats; // Character stats for the battle
}

export class BattleComponents implements BattleComponentsInterface {
	turn: number = 0; // Initialize to the first turn
	activeConcentrations: Spell[] = []; // Active concentration spells in the battle
	spentSpellPoints: number = 0; // Initialize to zero
	constructor(
		public customCounters: Counter[] = [],
		public stats: Stats = new Stats()
	) {
		this.customCounters = customCounters;
		this.stats = stats;
	}

	incrementTurn() {
		this.turn += 1; // Increment the turn number
	}

	addActiveConcentration(spell: Spell) {
		this.activeConcentrations.push(spell); // Add a spell to active concentrations
	}

	removeActiveConcentration(spell: Spell) {
		this.activeConcentrations = this.activeConcentrations.filter((s) => s.id !== spell.id); // Remove a spell from active concentrations
	}

	addSpentSpellPointsBySpellLevel(level: number) {
		this.spentSpellPoints += SpellLevelPoints[level]; // Add spell points spent in the battle
	}
}
