/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable jsdoc/require-description */
/* eslint-disable no-console */
import { json as json$1 } from "@sveltejs/kit";
import getUrlMetadata from "url-metadata";

/** @type {import('./$types').PageServerLoad} */
export async function GET({ url, setHeaders }): Promise<any> {
    const urlSearch = new URLSearchParams(url?.searchParams)?.get("url");
    if (urlSearch) {
        const urlMetadata = await getUrlMetadata(urlSearch).then(
            metadata => metadata,
            err => {
                console.log("getUrlMetadata error: ", err, "url: ", url);
            }
        );

        setHeaders({
            "content-type": "application/json",
            "cache-control": "max-age=600, public"
        });

        if (urlMetadata) {
            return json$1({
                urlMetadata
            });
        }
    }
}
