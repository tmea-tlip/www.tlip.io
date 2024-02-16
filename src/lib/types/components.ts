/**
 * The type for a site section.
 */
export interface Section {
	/**
	 * The id of the section.
	 */
	id: string;
	/**
	 * The component for the section.
	 */
	component: ConstructorOfATypedSvelteComponent;
	/**
	 * Is this a light mode navbar.
	 */
	lightModeNavbar?: boolean;
}

/**
 * The type for a Button.
 */
export interface Button {
	/**
	 * The title of the button.
	 */
	title: string;
	/**
	 * Is the link external.
	 */
	isExternal?: boolean;
	/**
	 * The url of the button.
	 */
	url: string;
	/**
	 * Is the button a secondary button.
	 */
	secondary?: boolean;
	/**
	 * Is the button a small button.
	 */
	small?: boolean;
	/**
	 * Is the button disabled.
	 */
	disabled?: boolean;
	/**
	 * The classes for the button.
	 */
	classes?: string;
}

/**
 * The type for a FaqSection.
 */
export interface FaqSection extends AccordionItem {
	/**
	 * The subsections of the section.
	 */
	subsections?: AccordionItem[];
}

/**
 * The type for a AccordionItem.
 */
export interface AccordionItem {
	/**
	 * The id of the item.
	 */
	id: string;
	/**
	 * The title of the item.
	 */
	title: string;
	/**
	 * The description of the item.
	 */
	description?: string;
}

/**
 * The type for a NewsItem.
 */
export interface NewsItem {
	/**
	 * The date of the news item.
	 */
	date: Date;
	/**
	 * The title of the news item.
	 */
	title: string;
	/**
	 * The imageUrl of the news item.
	 */
	imageUrl?: string;
	/**
	 * The publishBy of the news item.
	 */
	publishBy?: string;
	/**
	 * The linkUrl of the news item.
	 */
	linkUrl?: string;
}

/**
 * Definition for a menu.
 */
export interface NavigationMenu {
	/**
	 * The label to display in the menu.
	 */
	label: string;

	/**
	 * The URL to navigate to when the menu entry is clicked.
	 */
	url?: string;

	/**
	 * Does this link to an external site ?
	 */
	external?: boolean;

	/**
	 * The entries in the menu.
	 */
	entries?: NavigationMenu[];
}

/**
 * Display an entry on the carousel.
 */
export interface CarouselEntry {
	/**
	 * The source for the image.
	 */
	src?: string;

	/**
	 * The label for the item.
	 */
	label?: string;

	/**
	 * The footnote for the item.
	 */
	footnote?: string;

	/**
	 * Buttons for the item.
	 */
	buttons?: Button[];
}
