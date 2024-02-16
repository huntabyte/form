/**
 * Attributes provided via the `attrs` slot prop of the `<Form.Item>`
 * component to spread onto the form control element.
 *
 * @see https://formsnap.dev/docs/components/form-item
 */
export type ControlAttrs = {
	/** The name of the control used for form submission. */
	name: string;

	/** The ID of the control, used for label association. */
	id: string;

	/** Present when a validation error exists on the field. */
	'data-fs-error': string | undefined;

	/** Present when description or validation exists. */
	'aria-describedby': string | undefined;

	/** Present when a validation error exists on the field. */
	'aria-invalid': 'true' | undefined;

	/** Present when the field is required. */
	'aria-required': 'true' | undefined;

	/** Used for selection during styling or otherwise */
	'data-fs-control': string;
};

/**
 * Attributes provided via the slot prop of the `<Form.Label />` component
 * when used with the `asChild` prop to spread onto the label element.
 *
 * @see https://formsnap.dev/docs/aschild
 * @see https://formsnap.dev/docs/components/form-label
 */
export type LabelAttrs = {
	/** The ID of the control, used for label association. */
	for: string;

	/** Present when a validation error exists on the field. */
	'data-fs-error': string | undefined;

	/** Used for selection during styling or otherwise */
	'data-fs-label': string;

	/** Any additional props provided to the `<Form.Label />` component */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any;
};

/**
 * Attributes provided via the slot prop `<Form.Validation />` when used
 * with the `asChild` prop to spread onto the validation element.
 *
 * @see https://formsnap.dev/docs/aschild
 * @see https://formsnap.dev/docs/components/form-validation
 */
export type ValidationAttrs = {
	/** The ID of the validation element, used to describe the control. */
	id: string;

	/** Present when a validation error exists on the field. */
	'data-fs-error': string | undefined;

	/** Used for selection during styling or otherwise */
	'data-fs-validation': string;

	/** Notifies screen readers when a validation error occurs */
	'aria-live': 'assertive' | 'polite';

	/** Any additional props provided to `<Form.Validation />` */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any;
};

/**
 * Attributes provided via the `validationErrorAttrs` slot prop
 * of the `<Form.Validation />` component to be spread onto
 * the individual validation error elements.
 */
export type ValidationErrorAttrs = {
	/** Used for selection during styling or otherwise */
	'data-fs-validation-error': string;

	/** Present when a validation error exists on the field. */
	'data-fs-error': string | undefined;
};

/**
 * Attributes provided via the `legendAttrs` slot prop of the
 * `<Form.Legend />` component to be spread onto the legend element when
 * used with the `asChild` prop.
 *
 * @see https://formsnap.dev/docs/aschild
 * @see https://formsnap.dev/docs/components/form-legend
 */
export type LegendAttrs = {
	/** Used for selection during styling or otherwise */
	'data-fs-legend': string;

	/** Present when a validation error exists on the field. */
	'data-fs-error': string | undefined;

	/* Any additional props provided to `<Form.Legend />` */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any;
};

/**
 * Attributes provided via the `descriptionAttrs` slot prop of the
 * `<Form.Description />` component to be spread onto the description
 * element when used with the `asChild` prop.
 *
 * @see https://formsnap.dev/docs/aschild
 * @see https://formsnap.dev/docs/components/form-description
 */
export type DescriptionAttrs = {
	/** The ID of the description element, used to describe the control. */
	id: string;

	/** Used for selection during styling or otherwise */
	'data-fs-description': string;

	/** Present when a validation error exists on the field. */
	'data-fs-error': string | undefined;

	/* Any additional props provided to `<Form.Description />` */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any;
};

/**
 * Attributes provided via the `fieldsetAttrs` slot prop of the
 * `<Form.Fieldset />` component to be spread onto the `<fieldset>`
 * element when used with the `asChild` prop.
 *
 * @see https://formsnap.dev/docs/aschild
 * @see https://formsnap.dev/docs/components/form-fieldset
 */
export type FieldsetAttrs = {
	/** Used for selection during styling or otherwise */
	'data-fs-fieldset': string;

	/** Present when a validation error exists on the field. */
	'data-fs-error': string | undefined;

	/* Any additional props provided to `<Form.Fieldset />` */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any;
};