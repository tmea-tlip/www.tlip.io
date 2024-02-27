// Copyright 2021 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Handle click outside element.
 * @param element The element to attach the directive to.
 * @param callbackFunction The function to call when the click is triggered.
 * @returns The destroy method for the directive.
 */
export function clickOutside(
	element: Element,
	callbackFunction: () => void
): {
	update: (callbackFunction: () => void) => void;
	destroy: () => void;
} {
	const handleClick = (event: Event) => {
		if (element && !element.contains(event.target as Node)) {
			callbackFunction();
		}
	};

	document.addEventListener("click", handleClick);

	return {
		update(callback) {
			callbackFunction = callback;
		},
		destroy() {
			document.removeEventListener("click", handleClick);
		}
	};
}
