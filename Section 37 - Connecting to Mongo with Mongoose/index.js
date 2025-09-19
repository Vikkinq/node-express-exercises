const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/javApp");
  console.log("DB CONNECTED!");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const javSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
});

const Movie = mongoose.model("Movie", javSchema);
// const jav = new Movie({
//   title: "FSDSS-610",
//   year: 2023,
//   score: 9.5,
//   rating: "Godly",
// });

// Movie.insertMany([
//   { title: "SONE-467", year: 2021, score: 8.9, rating: "Legendary" },
//   { title: "CCVB-262", year: 2019, score: 9.2, rating: "Legendary" },
//   { title: "SONE-217", year: 2020, score: 7.5, rating: "Legendary" },
//   { title: "JOMNP-067", year: 2024, score: 9.1, rating: "Legendary" },
// ]).then((data) => {
//   console.log("DATA STORED SUCCESSFULLY");
//   console.log(data);
// });
