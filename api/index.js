const express = require('express');
const app = express();
const port = 8800;
const userRoutes = require("./routes/users.js")

app.use("/api/users", userRoutes)

app.listen(port, () => {
    console.log("API working!")
})
