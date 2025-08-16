<script lang="ts">
	import SimpleTopbar from '$lib/visual-components/SimpleTopbar.svelte';
	import { page } from '$app/state';
	import type { LayoutProps } from '../$types';

	let { children }: LayoutProps = $props();

	let title: string = $derived.by(() => {
		if (page.url.pathname === '/creation') {
			return 'Character Creation';
		} else {
			return 'Combat';
		}
	});
</script>

<SimpleTopbar {title} />
<div style="padding-top: var(--topbar-mobile-height);">
	{@render children()}
</div>
