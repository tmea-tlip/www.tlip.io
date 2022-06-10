import { activeSectionId } from "./store";

/**  */
export const startActiveSectionObserver = (container: HTMLElement): (() => void) => {
    const visible = [];
    const sectionElements = [].slice.call(container.querySelectorAll("section"));
    const sections = sectionElements?.map(s => s.id) ?? [];

    const intersectionObserver = new IntersectionObserver(
        entries => {
            for (const entry of entries) {
                const id = entry.target.id;
                if (entry.isIntersecting) {
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
        { threshold: [0] }
    );

    for (const element of sectionElements) {
        intersectionObserver.observe(element);
    }

    return () => {
        activeSectionId.set(undefined);
        intersectionObserver.disconnect();
    };
};
