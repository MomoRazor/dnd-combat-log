<script lang="ts">
	import type { LayoutProps } from './$types';
	import '../lib/visual-components/toolkit/default-hfl.css';
	import '../lib/visual-components/project.css';

	const appName = 'DnD Combat Log';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<title>{appName}</title>
	<meta name="description" />
</svelte:head>

{@render children()}
