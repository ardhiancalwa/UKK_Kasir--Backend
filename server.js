const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())

app.use(express.static(__dirname))

const user = require("./router/user")
app.use("/kasir/user", user)

const meja = require("./router/meja")
app.use("/kasir/meja", meja)

const menu = require("./router/menu")
app.use("/kasir/menu", menu)

const pemesanan = require("./router/pemesanan")
app.use("/kasir/pemesanan", pemesanan)

app.listen(4040, () => {
    console.log("Server run on port 4040")
})