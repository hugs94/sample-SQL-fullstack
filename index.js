const express = require("express"),
  app = express(),
  cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
const db = require("./models");
const Item = db.Item;

const PORT = process.env.PORT || 8080;

app.post("/items", (req, res) => {
  //create item
  const newItem = {
    name: req.body.name,
    type: req.body.type,
    color: req.body.color,
    style: req.body.style,
    img: req.body.img
  };

  Item.create(newItem)
    .then(savedItem => {
      res.json(savedItem);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

app.get("/items", (req, res) => {
  Item.findAll()
    .then(items => {
      res.json(items);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});
app.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});
