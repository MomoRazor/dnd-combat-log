<script lang="ts">
	import NumberInput from './NumberInput.svelte';

	export interface BasicValuesProps {
		userInfo: any; //TODO get type from 'BE'
	}

	let { userInfo = $bindable() }: BasicValuesProps = $props();
</script>

<div class="column value-form">
	<NumberInput title="AC (Armor Class)" bind:value={userInfo.ac} />
	<NumberInput title="HP (Health Points)" bind:value={userInfo.hp} />
	<NumberInput title="Speed (ft. per Turn)" bind:value={userInfo.speed} />
	<NumberInput title="Proficiency Bonus" bind:value={userInfo.profBonus} />
</div>

<style>
	.value-form {
		padding: 20px;
		gap: 20px;
	}
</style>
