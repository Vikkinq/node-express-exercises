const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/shopApp");
  console.log("DB CONNECTED!");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 30,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  categories: [String],
  qty: {
    online: {
      type: Number,
      default: 0,
    },
    inStore: {
      type: Number,
      default: 0,
    },
  },
});

const Product = mongoose.model("Product", productsSchema);

const items = new Product({
  name: "Royal Kludge Keyboard",
  price: 799,
  categories: ["Gaming", "Accessories"],
  qty: {
    online: 10,
    inStore: 21,
  },
});

items
  .save()
  .then((data) => {
    console.log("Data has been STORED", data);
  })
  .catch((error) => {
    console.log("Data Rejected", error);
  });
