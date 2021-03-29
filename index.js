const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("hi")
})

app.all("*", function(req, res) {
  res.send("all routes");
});

app.listen(3050, () => {
  console.log(`server has started on port 3050`)
})
