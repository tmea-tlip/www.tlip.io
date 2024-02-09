import { json } from "@sveltejs/kit";
import { google } from "googleapis";
import type { RequestHandler } from "./$types";
import { logger } from "../logger";
import { GOOGLE_API_KEY } from "$env/static/private";
import { parseDate, type NewsItem, formatError } from "$lib";

/**
 * Get the data from the spreadsheet.
 * @param url The url to retrieve the spreadsheet from.
 * @param url.url The url to retrieve the spreadsheet from.
 * @param url.setHeaders The host to retrieve the spreadsheet from.
 * @returns The data.
 */
export const GET: RequestHandler = async ({ url, setHeaders }) => {
	const spreadsheetId: string = "1KRXVz3fbwCdJbs0Z7FOyykyQXK3WZhm3Bbi-QCm9rjg";

	const sheets = google.sheets({
		version: "v4",
		auth: GOOGLE_API_KEY
	});
	const refererHeader: string = "https://www.tlip.io";

	async function getRangeFromSheet(): Promise<string[][]> {
		try {
			const response = await sheets.spreadsheets.values.get(
				{
					spreadsheetId,
					range: "!B2:Z1000"
				},
				{
					headers: {
						referer: refererHeader
					} as unknown as Headers
				}
			);

			const rows = response?.data?.values;
			if (!rows) {
				const errorMessage = "No data found";
				logger.error(errorMessage);
				throw new Error(errorMessage);
			}
			return rows;
		} catch (err: unknown) {
			const errorMessage = `The API returned an error: ${formatError(err)}`;
			logger.error(errorMessage);
			throw new Error(errorMessage);
		}
	}

	try {
		const data = await getRangeFromSheet();

		if (data) {
			const rowData: NewsItem[] = data
				.filter(row => row[5]?.toLowerCase() === "ok")
				.map(row => ({
					publishBy: row[0],
					title: row[1],
					linkUrl: row[2],
					date: parseDate(row[3])
				}))
				.sort((a: NewsItem, b: NewsItem) => {
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
