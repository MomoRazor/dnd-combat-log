<script lang="ts">
	import { slide } from 'svelte/transition';
	import Icon from '@iconify/svelte';

	//TODO Sync with BE on this
	export type NumericValue = {
		total: number;
		parts: {
			value: number;
			description: string;
		}[];
	};

	export interface NumberInputProps {
		title: string;
		value: NumericValue;
	}

	let { title, value = $bindable() }: NumberInputProps = $props();

	let open = $state(false);
</script>

<div class="column field-parent">
	<div class="row field" style="gap: 10px">
		<div class="label-div">
			<label for="ac">{title}</label>
		</div>
		<div class="row" style="gap: 10px;">
			<input class="basic-input" type="number" id="ac" bind:value={value.total} readonly />
			{#if open}
				<button onclick={() => (open = false)} class="hidden-button">
					<Icon icon="material-symbols:visibility-off" font-size={18} />
				</button>
			{:else}
				<button onclick={() => (open = true)} class="hidden-button">
					<Icon icon="material-symbols:visibility" font-size={18} />
				</button>
			{/if}
		</div>
	</div>
	<div class="row" style="padding: 0 10px">
		<hr class="basic-hr" />
	</div>
	{#if open}
		<div class="parts" in:slide={{ duration: 200 }} out:slide={{ duration: 200 }}>
			{#each value.parts as part}
				<div class="row field" style="gap: 10px">
					<input class="basic-input" type="text" bind:value={part.description} />
					<input
						class="basic-input"
						type="number"
						bind:value={part.value}
						oninput={() => {
							value.total = value.parts.reduce((sum, p) => sum + p.value, 0);
						}}
					/>
					<button
						onclick={() => {
							value.parts = value.parts.filter((p) => p !== part);
							value.total = value.parts.reduce((sum, p) => sum + p.value, 0);
						}}
						class="hidden-button"
					>
						<Icon icon="material-symbols:close" font-size={18} />
					</button>
				</div>
			{/each}
			<div class="row" style="padding: 0 10px; justify-content: flex-end;">
				<button
					class="basic-button"
					style="margin: 0; width: fit-content;"
					onclick={() => {
						value.parts.push({ value: 0, description: '' });
					}}
				>
					<Icon icon="material-symbols:add" font-size={18} />
					<span>Add Part</span>
				</button>
			</div>
		</div>
	{/if}
</div>

<style>
	.field-parent {
		display: flex;
		border: 1px solid var(--border-color);
		background-color: var(--border-color);
		border-radius: 4px;
		padding: 10px 0;
	}
	.field {
		display: flex;
		padding: 10px;
		justify-content: space-between;

		.label-div {
			height: 100%;
		}
	}
	.parts {
		justify-items: flex-end;
	}
</style>
