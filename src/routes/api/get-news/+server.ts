import { json as json$1 } from "@sveltejs/kit";
import { google } from "googleapis";
// eslint-disable-next-line import/no-unresolved
import { parseDate, type New } from "$lib";

/**
 *
 */
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
                .map(row => ({
                    publishBy: row[0],
                    title: row[1],
                    linkUrl: row[2],
                    imageUrl: "",
                    date: parseDate(row[3]),
                    isVisible: row[5]
                }))
                .filter(row => row.isVisible?.toLowerCase() === "ok")
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
            return json$1(rowData);
        }
    } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return json$1({
            rowData: null
        });
    }
}
