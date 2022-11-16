/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable jsdoc/require-description */
/* eslint-disable no-console */
import { json } from "@sveltejs/kit";
import getUrlMetadata from "url-metadata";

/** @type {import('./$types').PageServerLoad} */
export async function GET({ url, setHeaders }): Promise<any> {
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
    } catch (e) {
        console.error(e);
        return json({
            urlMetadata: null
        });
    }
}
