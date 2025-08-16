<script lang="ts">
	import BasicValues from '$lib/visual-components/BasicValues.svelte';
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	//TODO get type from 'BE'
	let userInfo = $state<any>();
	let error = $state<string | null>(null);

	let mainFields = $state(true);
	let spellFields = $state(false);
	let bonusFields = $state(false);
	let customCounters = $state(false);

	onMount(() => {
		//TODO load information from localstorage using classes provided by RODERICK
		// const storedState = localStorage.getItem('dnd-combat-log-state');
		// if (storedState) {
		// 	userInfo = JSON.parse(storedState).userInfo;
		// } else {
		// 	error = 'No user info found';
		// }
		userInfo = {
			ac: {
				total: 10,
				parts: [{ value: 10, description: 'Base AC' }]
			},
			hp: {
				total: 20,
				parts: [{ value: 20, description: 'Base HP' }]
			},
			speed: {
				total: 30,
				parts: [{ value: 30, description: 'Base Speed' }]
			},
			profBonus: {
				total: 2,
				parts: [{ value: 2, description: 'Proficiency Bonus' }]
			}
		};
	});
</script>

{#if error}
	<div class="error">
		<p>{error}</p>
	</div>
{:else if userInfo}
	<div class="row title-row">
		<h2>Basic Fields</h2>

		{#if mainFields}
			<button
				onclick={() => {
					mainFields = false;
				}}
				class="hidden-button"
			>
				<Icon icon="material-symbols:expand-less" font-size={18} />
			</button>
		{:else}
			<button
				onclick={() => {
					mainFields = true;
				}}
				class="hidden-button"
			>
				<Icon icon="material-symbols:expand-more" font-size={18} />
			</button>
		{/if}
	</div>
	{#if mainFields}
		<BasicValues bind:userInfo />
	{:else}
		<p>
			AC: {userInfo.ac.total}, HP: {userInfo.hp.total}, Speed (ft. per turn): {userInfo.speed
				.total}, Proficiency Bonus: {userInfo.profBonus.total}
		</p>
	{/if}
{/if}

<style>
	.title-row {
		justify-content: space-between;
		width: 100%;
	}
</style>
