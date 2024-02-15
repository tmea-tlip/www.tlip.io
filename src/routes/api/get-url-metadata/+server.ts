import { json } from "@sveltejs/kit";
import getUrlMetadata from "url-metadata";
import { logger } from "../logger";

/**
 * Get the metadata from the url.
 * @param param0 The request object.
 * @param param0.url The url to get the metadata from.
 * @param param0.setHeaders The function to set the headers.
 * @returns The object as json.
 */
export async function GET({ url, setHeaders }) {
	if (url?.searchParams?.has("url")) {
		const urlSearch: string | null = url.searchParams.get("url");
		if (urlSearch) {
			const urlMetadata = await getUrlMetadata(urlSearch);
			try {
				setHeaders({
					"content-type": "application/json",
					"cache-control": "max-age=600, public"
				});

				if (urlMetadata) {
					return json({
						urlMetadata
					});
				}
			} catch (err) {
				const errorMessage = "Error fetching URL metadata";
				logger.error(
					`${errorMessage}\nError Details: ${err instanceof Error ? err.message : JSON.stringify(err)}`
				);
			}
		}
	}
}
