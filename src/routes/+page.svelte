<script lang="ts">
	import Spinner from '$lib/visual-components/toolkit/svgs/Spinner.svelte';
	import { onMount } from 'svelte';

	let state = $state<{
		status: 'loading' | 'configured' | 'new';
		userCharacterName?: string;
	}>({
		status: 'loading',
		userCharacterName: undefined
	});

	onMount(() => {
		//TODO load information from localstorage using classes provided by RODERICK
		const storedState = localStorage.getItem('dnd-combat-log-state');
		if (storedState) {
			state = {
				status: 'configured',
				userCharacterName: JSON.parse(storedState).userCharacterName
			};
		} else {
			state = {
				status: 'new',
				userCharacterName: undefined
			};
		}
	});
</script>

<div class="fullscreen">
	<div class="text-center column">
		<div class="column" style="gap: 10px; text-align: center;">
			<h1>DnD Combat Log</h1>
			<h5>A tool for tracking Dungeons and Dragons combat encounters</h5>
			<small>(For dumb people!)</small>
			<small>(like me!!)</small>
		</div>
		{#if state.status === 'loading'}
			<Spinner />
		{:else if state.status === 'configured'}
			<a href="/combat">
				<button class="basic-button">Use Character {state.userCharacterName}</button>
			</a>
		{:else if state.status === 'new'}
			<a href="/creation" class="basic-a">
				<button class="basic-button">Create New Character</button>
			</a>
		{/if}
	</div>
</div>

<style>
	.fullscreen {
		align-items: center;
		justify-content: center;
		padding: var(--topbar-mobile-height) 0;
		width: 100%;
		height: 100%;
		display: flex;
		min-height: 100vh;
	}

	.text-center {
		gap: 20px;
	}
</style>
