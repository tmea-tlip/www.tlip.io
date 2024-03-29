/**
 * A Link component.
 */
export interface Link {
	/**
	 * The text that will be shown in the link.
	 */
	title: string;
	/**
	 * The url that the user will be redirected to.
	 */
	url: string;
}

/**
 * An object with a title and a description.
 */
export interface Heading {
	/**
	 * Section title.
	 */
	section?: string;

	/**
	 * Heading Title.
	 */
	title: string;

	/**
	 * Heading Sub Title.
	 */
	subtitle?: string;

	/**
	 * Heading Description.
	 */
	description?: string;
}
