import { json } from "@sveltejs/kit";
import getUrlMetadata from "url-metadata";
import { logger } from "../logger";

/** @type {import('./$types').RequestHandler} */
export async function GET({ url, setHeaders }) {
    const urlSearch = new URLSearchParams(url?.searchParams)?.get("url");
    try {
        if (urlSearch) {
            const urlMetadata = await getUrlMetadata(urlSearch);

            setHeaders({
                "content-type": "application/json",
                "cache-control": "max-age=600, public"
            });

            if (urlMetadata) {
                return json({
                    urlMetadata
                });
            }
        }
    } catch (err) {
        const errorMessage = "Error when fetching URL metadata";
        logger.error(`${errorMessage}\nError Details: ${err instanceof Error ? err.message : JSON.stringify(err)}`);
    }
}
