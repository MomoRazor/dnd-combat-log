<script lang="ts">
	import BasicValues from '$lib/visual-components/BasicValues.svelte';
	import { onMount } from 'svelte';

	//TODO get type from 'BE'
	let userInfo = $state<any>();
	let error = $state<string | null>(null);

	let mainFields = $state(true)
	let spellFields = $state(false)
	let 


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
	<BasicValues bind:userInfo />
{/if}

<style>
</style>
