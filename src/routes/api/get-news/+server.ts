import { json } from "@sveltejs/kit";
/* eslint-disable import/no-unresolved */
import { google } from "googleapis";
import { logger } from "../logger";
import type { RequestHandler } from "./$types";
import { GOOGLE_API_KEY } from "$env/static/private";
import { parseDate, type New } from "$lib";
/* eslint-enable import/no-unresolved */

/**
 *
 */
export const GET: RequestHandler = async ({ url, setHeaders }) => {
    const spreadsheetId: string = "1KRXVz3fbwCdJbs0Z7FOyykyQXK3WZhm3Bbi-QCm9rjg";

    const sheets = google.sheets({
        version: "v4",
        auth: GOOGLE_API_KEY
    });
    const refererHeader: string = `https://${url.host}`;
    // google api request headers
    const headers: { [key: string]: string } = {
        referer: refererHeader
    };

    async function getRangeFromSheet() {
        return new Promise((resolve, reject) =>
            sheets.spreadsheets.values.get(
                {
                    spreadsheetId,
                    range: "!B2:Z1000",
                    headers
                },
                (err, res) => {
                    if (err) {
                        const errorMessage = `The API returned an error: ${err}`;
                        logger.error(errorMessage);
                        console.error(errorMessage);
                        reject(new Error(errorMessage));
                    }

                    const rows = res?.data?.values;
                    if (rows) {
                        resolve(rows);
                    } else {
                        const errorMessage = "No data found";
                        logger.error(errorMessage);
                        console.error(errorMessage);
                        reject(new Error(errorMessage));
                    }
                }
            )
        );
    }

    try {
        const data = await getRangeFromSheet();

        if (data) {
            const rowData: New[] = data
                .filter(row => row[5]?.toLowerCase() === "ok")
                .map(row => ({
                    publishBy: row[0],
                    title: row[1],
                    linkUrl: row[2],
                    date: parseDate(row[3])
                }))
                .sort((a: New, b: New) => {
                    const dateA = new Date(a.date);
                    const dateB = new Date(b.date);
                    return dateB.getTime() - dateA.getTime();
                });

            if (rowData) {
                setHeaders({
                    "content-type": "application/json",
                    "cache-control": "max-age=600, public"
                });
                return json(rowData);
            }
        }
    } catch (err) {
        const errorMessage = "Error fetching data from the spreadsheet";
        logger.error(`${errorMessage}\nError Details: ${err instanceof Error ? err.message : JSON.stringify(err)}`);
    }

    return json({
        rowData: null
    });
};
