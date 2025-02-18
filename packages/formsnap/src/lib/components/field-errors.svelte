<script lang="ts">
	import { box, mergeProps } from "svelte-toolbelt";
	import type { FieldErrorsProps } from "./types.js";
	import { useId } from "$lib/internal/utils/index.js";
	import { useFieldErrors } from "$lib/formsnap.svelte.js";

	let {
		id = useId(),
		ref = $bindable(null),
		children,
		child,
		...restProps
	}: FieldErrorsProps = $props();

	const fieldErrorsState = useFieldErrors({
		id: box.with(() => id),
		ref: box.with(
			() => ref,
			(v) => (ref = v)
		),
	});

	const mergedProps = $derived(mergeProps(restProps, fieldErrorsState.fieldErrorsProps));
</script>

<!--
@component
## FieldErrors
A component that renders the container for validation errors for a [Field](https://formsnap.dev/docs/components/field), [Fieldset](https://formsnap.dev/docs/components/fieldset), or [ElementField](https://formsnap.dev/docs/components/element-field).

- [FieldErrors Documentation](https://formsnap.dev/docs/components/field-errors)

### Snippet Props
- `errors` - An array of errors for the associated field.
- `fieldErrorsAttrs` - A spreadable object of attributes for the container element if `child` snippet is used.
- `errorAttrs` - A spreadable object of attributes for the individual error elements if `child` snippet is used.

@param {string} [id] - The id of the field errors container.
-->
{#if child}
	{@render child({
		props: mergedProps,
		...fieldErrorsState.snippetProps,
	})}
{:else}
	<div {...mergedProps}>
		{#if children}
			{@render children(fieldErrorsState.snippetProps)}
		{:else}
			{#each fieldErrorsState.field.errors as error}
				<div {...fieldErrorsState.errorProps}>{error}</div>
			{/each}
		{/if}
	</div>
{/if}
