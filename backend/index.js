require("dotenv").config();
const cookieParser = require("cookie-parser");
const express = require("express");
const mongoose = require("mongoose");
const { PositionsModel } = require("./model/PositionsModel");
const { HoldingsModel } = require("./model/HoldingsModel");
const { OrdersModel } = require("./model/OrdersModel");
const authRoute = require("./Routes/AuthRoute");

const bodyParser = require("body-parser");
const cors = require("cors");

const uri = process.env.MONGO_URL;

const app = express();
app.use(
  cors({
    origin: process.env.FrontEnd_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
app.use(bodyParser.json());

app.use(express.json());
app.use(cookieParser());
app.use("/", authRoute);

// app.get("/addPositions",async(req,res)=>{
// 	 let tempPosition =[
//   {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
// ];

//  tempPosition.forEach((item)=>{
// 	let newPosition = new PositionsModel({
//     product:item.product,
// 	name: item.name,
// 	qty: item.qty,
// 	avg: item.avg,
// 	price: item.price,
// 	net: item.net,
// 	day: item.day,
// 	isLoss: item.isLoss,
// 	});

// 	newPosition.save();
//  });
//  res.send("Done!");
// });

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPostions = await PositionsModel.find({});
  res.json(allPostions);
});

app.get("/allOrders", async (req, res) => {
  let allOrders = await OrdersModel.find({});
  res.json(allOrders);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  newOrder.save();
  res.send("Order saved");
});

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("DB connected");

    app.listen(process.env.PORT || 3002, () => {
      console.log(`Server running on port ${process.env.PORT || 3002}`);
    });
  } catch (err) {
    console.log("DB error:", err);
  }
};

connectDB();

