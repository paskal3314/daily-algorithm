const axios = require("axios");
const cheerio = require("cheerio");

async function decodeSecretMessage(docUrl) {
  if (!docUrl || typeof docUrl !== "string") {
    throw new Error("Invalid docUrl");
  }
  try {
    const response = await axios.get(docUrl);
    const html = response.data;

    const $ = cheerio.load(html);

    const table = $("#contents table").first();
    const rows = table.find("tr")?.slice(1);

    const parsedData = [];

    rows.each((i, row) => {
      const cells = $(row).find("td");
      if (cells.length > 0) {
        const rowData = [cells.eq(0).text().trim(), cells.eq(1).text().trim(), cells.eq(2).text().trim()];
        parsedData.push(rowData);
      }
    });

    let maxX = 0;
    let maxY = 0;

    for (const [xCoord, char, yCoord] of parsedData) {
      maxX = Math.max(maxX, xCoord);
      maxY = Math.max(maxY, yCoord);
    }

    let grid = Array(maxY + 1)
      .fill()
      .map(() => Array(maxX + 1).fill(" "));

    for (const [xCoord, char, yCoord] of parsedData) {
      grid[yCoord][xCoord] = char || " ";
    }

    const reversedGrid = [];
    for (let i = grid.length - 1; i >= 0; i--) {
      reversedGrid.push(grid[i]);
    }

    console.log(reversedGrid.map((row) => row.join("")).join("\n"));
  } catch (error) {
    console.error("ERROR - ", error.message);
  }
}

const docUrl =
  "https://docs.google.com/document/d/e/2PACX-1vQGUck9HIFCyezsrBSnmENk5ieJuYwpt7YHYEzeNJkIb9OSDdx-ov2nRNReKQyey-cwJOoEKUhLmN9z/pub";
decodeSecretMessage(docUrl);
