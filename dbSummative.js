"use strict";

const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

const client = new MongoClient(process.env.MONGO_URI);

async function run() {
  try {
    await client.connect();

    const db = client.db("sample_guides");
    const coll = db.collection("planets");

    const query = {
      mainAtmosphere: /H2/,
      orderFromSun: { $gt: 3 },
    };

    const result = await coll.find(query).toArray();

    result.sort((a, b) => a.orderFromSun - b.orderFromSun);

    const formattedArray = result.map((planet) => {
      return `<b>${planet.name}</b>: <br />main atmosphere: ${planet.mainAtmosphere} <br />mean surface temperature (degrees C): ${planet.surfaceTemperatureC.mean} <br />`;
    });

    console.log("<ul>");
    for (const formattedString of formattedArray) {
      console.log(`  <li>${formattedString}</li>`);
    }
    console.log("</ul>");
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
