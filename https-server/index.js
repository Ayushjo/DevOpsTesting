import express from "express"
import connectDB from "./db/index.js"
import dotenv from "dotenv"
const app = express()

dotenv.config({
  path: "./.env",
});
app.use(
  express.json({
    limit: "16kb",
  })
);

app.get("/", (req, res) => {
    res.send("Hello World!")
})

connectDB().then(() => {
    app.listen(3000, () => {
        console.log("Server started at port 3000")
    })
})