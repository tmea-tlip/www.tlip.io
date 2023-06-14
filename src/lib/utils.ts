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
    const sectionRegex = /<h2>(.*?)<\/h2>([\S\s]*?)(?=<h2>|$)/g;
    const sectionMatches = Array.from(html.matchAll(sectionRegex));

    const sections = sectionMatches.map(([_, sectionTitle, sectionContent]) => {
        const subsectionRegex = /<h3>(.*?)<\/h3>([\S\s]*?)(?=<h3>|$)/g;
        const subsectionMatches = Array.from(sectionContent.matchAll(subsectionRegex));

        const subsections: FaqSubsection[] = subsectionMatches.map(([_, subsectionTitle, subsectionContent]) => ({
            id: subsectionTitle.toLowerCase().replace(/[^\w-]/g, "-"),
            title: subsectionTitle,
            description: subsectionContent.trim()
        }));

        return {
            id: sectionTitle.toLowerCase().replace(/[^\w-]/g, "-"),
            title: sectionTitle,
            subsections
        };
    });

    return sections;
}
