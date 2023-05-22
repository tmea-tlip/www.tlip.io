import { json } from "@sveltejs/kit";
import { google } from "googleapis";
import { parseDate, type New } from "$lib";
import { GOOGLE_API_KEY } from "$env/static/private";
// eslint-disable-next-line import/no-unresolved

/**
 *
 */
export async function GET({ url }) {
    const spreadsheetId: string = "1KRXVz3fbwCdJbs0Z7FOyykyQXK3WZhm3Bbi-QCm9rjg";

    const sheets = google.sheets({
        version: "v4",
        auth: GOOGLE_API_KEY
    });
    const refererHeader: string = `https://${url.host}`;
    // google api request headers
    const headers = {
        referer: refererHeader
    };
    async function getRangeFromSheet() {
        return new Promise((resolve, reject) => {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            sheets.spreadsheets.values.get(
                {
                    spreadsheetId,
                    range: "!B2:Z1000",
                    headers
                },
                async (err, res) => {
                    if (err) {
                        // eslint-disable-next-line prefer-promise-reject-errors
                        reject({
                            message: `The API returned an error: ${err}`
                        });
                    }
                    const rows: Promise<New[]> = res?.data?.values;
                    resolve(rows);
                    if (await rows) {
                        resolve(rows);
                    } else {
                        // eslint-disable-next-line prefer-promise-reject-errors
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
    try {
        if (data) {
            rowData = data
                .filter(row => row[5]?.toLowerCase() === "ok")
                .map(row => ({
                    publishBy: row[0],
                    title: row[1],
                    linkUrl: row[2],
                    date: parseDate(row[3])
                }))
                .sort((a, b) => {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                    const dateA = new Date(a.date);
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                    const dateB = new Date(b.date);
                    return dateB.getTime() - dateA.getTime();
                });
        }

        if (rowData) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return json(rowData);
        }
    } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return json({
            rowData: null
        });
    }
}
