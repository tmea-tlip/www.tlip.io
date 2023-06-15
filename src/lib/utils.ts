import { browser } from "$app/environment";
import { goto } from "$app/navigation";
import { activeSectionId } from "./store";

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
            activeSectionId.set(visible[0]);
        },
        { threshold: [0], rootMargin: "-1px" }
    );

    for (const element of sectionElements) {
        intersectionObserver.observe(element);
    }

    return () => {
        activeSectionId.set(undefined);
        intersectionObserver.disconnect();
    };
};

let scrollTimeout: NodeJS.Timeout;
/**
 * Receives an event from an anchor tag and scrolls to the section.
 * @param event - An event object of an anchor tag.
 * @param event.target - The target of the event.
 */
export const scrollIntoView = ({ target }): ((event: Event) => void) => {
    clearTimeout(scrollTimeout);
    if (browser) {
        const targetID = target.getAttribute("href").replace("/", "");
        const el = document.querySelector(targetID);
        if (!el) {
            goto(target.href, { noscroll: true })
                .then(() => {
                    scrollTimeout = setTimeout(() => {
                        document.querySelector(targetID).scrollIntoView({
                            behavior: "smooth"
                        });
                    }, 300);
                })
                .catch(() => []);
            return;
        }
        el.scrollIntoView({
            behavior: "smooth"
        });
        window.history.replaceState(null, "", targetID);
    }
};

// eslint-disable-next-line jsdoc/require-jsdoc
export const fetchUrlImageMetadata = async (url: string): Promise<string> => {
    // eslint-disable-next-line curly
    if (!url) return null;
    const response = await fetch(`/api/get-url-metadata?url=${url}`);
    const responseJson = await response.json();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return responseJson?.urlMetadata?.image ?? responseJson?.urlMetadata?.["og:image"] ?? null;
};

// eslint-disable-next-line jsdoc/require-description, jsdoc/require-returns
/**
 *
 * @param date
 */
export function parseDate(date) {
    const [d, m, y] = date.split(".").map(Number);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return new Date(y, m - 1, d);
}

// eslint-disable-next-line jsdoc/require-description, jsdoc/require-returns
/**
 *
 * @param date
 */
export function formatDateToDDMMYYYY(date?: Date | null) {
    // eslint-disable-next-line curly
    if (!date) return "-";
    // eslint-disable-next-line max-len
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
    let currentSection: FaqSection = null;
    let currentSubsection: FaqSubsection = null;
    let firstHeadingLevel: number;
    let lastMatchIndex: number;

    for (const matchHeading of headingMatches) {
        const level = Number.parseInt(matchHeading[1], 10);
        const title = matchHeading[2];
        const id = title.toLowerCase().replace(/[^\w-]/g, "-");

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
            currentSubsection = null;
        } else if (level > firstHeadingLevel && currentSection) {
            currentSubsection = {
                id,
                title,
                description: ""
            };
            currentSection.subsections.push(currentSubsection);
        }

        lastMatchIndex = matchHeading.index + matchHeading[0].length;
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
