/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable no-multi-assign */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable nonblock-statement-body-position */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { fetchUrlMetadata } from "$lib";
import { json as json$1 } from "@sveltejs/kit";
import { google } from "googleapis";

export async function GET({ url }) {
    const spreadsheetId: string = "1KRXVz3fbwCdJbs0Z7FOyykyQXK3WZhm3Bbi-QCm9rjg";

    const sheets = google.sheets({
        version: "v4",
        auth: import.meta.env.VITE_GOOGLE_API_KEY
    });
    const refererHeader: string = `https://${url.host}`;
    // google api request headers
    const headers = {
        referer: refererHeader
    };
    async function getRangeFromSheet() {
        return new Promise((resolve, reject) => {
            sheets.spreadsheets.values.get(
                {
                    spreadsheetId,
                    range: "!B2:Z1000",
                    headers
                },
                async (err, res) => {
                    if (err) {
                        reject({
                            message: `The API returned an error: ${err}`
                        });
                    }
                    const rows: Promise<any[]> = res?.data?.values;
                    resolve(rows);
                    if (await rows) {
                        resolve(rows);
                    } else {
                        reject({
                            message: "no data found"
                        });
                    }
                }
            );
        });
    }

    const data = await getRangeFromSheet();
    let rowData;
    if (data) {
        rowData = data
            .map(row => ({
                publishBy: row[0],
                title: row[1],
                linkUrl: row[2],
                imageUrl: "",
                date: row[3],
                isVisible: row[5]
            }))
            .filter(row => row.isVisible?.toLowerCase() === "ok")
            .sort((a, b) => {
                const dateA = new Date(a.date);
                const dateB = new Date(b.date);
                return dateA.getTime() - dateB.getTime();
            });
    }

    if (rowData) {
        return json$1(rowData);
    }
}
