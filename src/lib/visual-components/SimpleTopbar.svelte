<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	export interface SimpleTopbarProps {
		title: string;
	}

	let ready = $state(false);
	let { title }: SimpleTopbarProps = $props();

	onMount(() => (ready = true));
</script>

{#if ready}
	<header
		in:slide={{
			axis: 'y'
		}}
	>
		<h1>DnD Combat Log - {title}</h1>
	</header>
{/if}

<style>
	header {
		display: flex;
		top: 0;
		position: fixed;
		height: var(--topbar-mobile-height);
		background-color: var(--primary-color);
		width: 100%;
		align-items: center;
		padding: 1rem;
		z-index: 5;
		color: var(--primary-contrast-color);
	}
</style>
