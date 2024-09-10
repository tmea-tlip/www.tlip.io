import { browser } from "$app/environment";
import { goto } from "$app/navigation";
import { sideMenuOpen } from "./store";
import type { FaqSection } from "./types";

/**
 * Starts an Observer that checks the section that you are navigating.
 * @param container The HTML Element that is going to be observed.
 * @returns A disconnect function that stops the service.
 */
export const startActiveSectionObserver = (container: HTMLElement): (() => void) => {
	const visible: string[] = [];
	const arr: [] = [];
	const sectionElements: HTMLElement[] = arr.slice.call(container.querySelectorAll("section"));
	const sections: string[] = sectionElements?.map(s => s.id) ?? [];

	const intersectionObserver = new IntersectionObserver(
		entries => {
			for (const {
				target: { id },
				isIntersecting
			} of entries) {
				if (isIntersecting) {
					if (sections.indexOf(id) < sections.indexOf(visible[0])) {
						visible.unshift(id);
					} else {
						visible.push(id);
					}
				} else {
					const visiblePosition = visible.indexOf(id);
					if (visiblePosition > -1) {
						visible.splice(visiblePosition, 1);
					}
				}
			}
		},
		{ threshold: [0], rootMargin: "-1px" }
	);

	for (const element of sectionElements) {
		intersectionObserver.observe(element);
	}

	return () => {
		intersectionObserver.disconnect();
	};
};

let scrollTimeout: number | undefined;
/**
 * Receives an event from an anchor tag and scrolls to the section.
 * @param target - An event object of an anchor tag.
 */
export function scrollIntoView(target: HTMLAnchorElement) {
	window.clearTimeout(scrollTimeout);
	if (browser) {
		const href = target.getAttribute("href");
		if (href) {
			sideMenuOpen.set(false);
			document.body.classList.remove("overflow-y-hidden");

			const url = new URL(href, window.location.href);
			const urlHash = url.hash;
			const [sectionId] = urlHash.includes("?") ? urlHash.split("?") : [urlHash, ""];

			const sectionIdParts = sectionId.split("#");
			if (sectionId && sectionIdParts.length === 2) {
				const targetId = `#${sectionIdParts[1]}`;
				goto(target.href, { noScroll: true })
					.then(() => {
						scrollTimeout = window.setTimeout(() => {
							const el = document.querySelector(targetId);

							if (el) {
								el.scrollIntoView({
									behavior: "smooth"
								});
							}
						}, 300);
					})
					.catch(() => {});
			} else {
				goto(target.href)
					.then(() => {
						window.scrollTo(0, 0);
					})
					.catch(() => {});
			}
		}
	}
}

/**
 * Fetch the metadata of an image from its url.
 * @param url The url for the image.
 * @returns The image metadata.
 */
export async function fetchUrlImageMetadata(url: string): Promise<string | undefined> {
	if (!url) {
		return;
	}
	const response = await fetch(`/api/get-url-metadata?url=${url}`);
	const responseJson = await response.json();

	let image = responseJson?.urlMetadata?.image;
	if (typeof image === "string" && image.length > 0) {
		return image;
	}
	image = responseJson?.urlMetadata?.["og:image"];
	if (typeof image === "string" && image.length > 0) {
		return image;
	}
}

/**
 * Split a date string into a Date object.
 * @param date The date to split.
 * @returns The date object.
 */
export function parseDate(date: string): Date {
	const [d, m, y] = date.split(".").map(Number);
	return new Date(y, m - 1, d);
}

/**
 * Formats a date to a string in the format "DD/MM/YYYY".
 * @param date The date to format.
 * @returns The formatted date.
 */
export function formatDateToDDMMYYYY(date?: Date): string {
	if (!date) {
		return "-";
	}
	return new Intl.DateTimeFormat("es-ES", { day: "2-digit", month: "2-digit", year: "numeric" }).format(
		new Date(date)
	);
}

/**
 * Parses the HTML string and returns an array of sections.
 * @param html - The HTML string to parse.
 * @returns An array of sections.
 */
export function parseMarkdownToFaqs(html: string): FaqSection[] {
	const HEADING_REGEX = /<h(\d)>(.*?)<\/h\d>/g;
	const headingMatches = Array.from(html.matchAll(HEADING_REGEX));

	const sections: FaqSection[] = [];
	let currentSection: FaqSection | undefined;
	let currentSubsection: FaqSection | undefined;
	let firstHeadingLevel: number = 0;
	let lastMatchIndex: number | undefined;

	for (const matchHeading of headingMatches) {
		const level = Number.parseInt(matchHeading[1], 10);
		const title = matchHeading[2];
		const id = title.toLowerCase().replaceAll(/[^\w-]/g, "-");

		if (!firstHeadingLevel) {
			firstHeadingLevel = level;
		}

		if (lastMatchIndex !== undefined) {
			const descriptionStartIndex = lastMatchIndex;
			const descriptionEndIndex = matchHeading.index;
			const description = html.slice(descriptionStartIndex, descriptionEndIndex).trim();
			if (currentSubsection) {
				currentSubsection.description = description;
			} else if (currentSection) {
				currentSection.description = description;
			}
		}

		if (level === firstHeadingLevel) {
			currentSection = {
				id,
				title,
				subsections: []
			};
			sections.push(currentSection);
			currentSubsection = undefined;
		} else if (level > firstHeadingLevel && currentSection) {
			currentSubsection = {
				id,
				title,
				description: ""
			};
			if (currentSection.subsections) {
				currentSection.subsections.push(currentSubsection);
			}
		}

		if (matchHeading.index) {
			lastMatchIndex = matchHeading.index + matchHeading[0].length;
		}
	}

	if (lastMatchIndex !== undefined) {
		const descriptionStartIndex = lastMatchIndex;
		const descriptionEndIndex = html.length;
		const description = html.slice(descriptionStartIndex, descriptionEndIndex).trim();
		if (currentSubsection) {
			currentSubsection.description = description;
		} else if (currentSection) {
			currentSection.description = description;
		}
	}

	return sections;
}

/**
 * Format an error to a readable string.
 * @param err The error to format.
 * @returns The formatted error.
 */
export function formatError(err: unknown): string {
	if (err === undefined || err === null) {
		return "";
	} else if (err instanceof Error) {
		return err.message;
	} else if (typeof err === "string") {
		return err;
	} else if (typeof err === "object" && "message" in err && typeof err.message === "string") {
		return err.message;
	}
	return JSON.stringify(err);
}
