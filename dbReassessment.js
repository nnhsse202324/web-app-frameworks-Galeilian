"use strict";

const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

const client = new MongoClient(process.env.MONGO_URI);

async function run() {
  try {
    await client.connect();

    const db = client.db("sample_airbnb");
    const coll = db.collection("listingsAndReviews");

    const query = {
      "address.country": "Spain",
      "review_scores.rating": { $gte: 90 },
      beds: { $gte: 6 },
    };

    const result = await coll
      .find(query)
      .sort({ beds: -1, bathrooms: -1 })
      .toArray();

    const formattedArray = result.map((listing) => {
      return `
        <div>
          <b>${listing.name}</b>: <br />
          beds: ${listing.beds} <br />
          bathrooms: ${listing.bathrooms} <br />
          price: ${listing.price} <br />
          <img src="${listing.picture_url}" alt="Listing Image" /> <br />
          <a href="${listing.listing_url}" target="_blank">Link to Listing</a>
        </div>
      `;
    });
    for (const formattedString of formattedArray) {
      console.log(formattedString);
    }
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
