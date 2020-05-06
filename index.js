const { app } = require("./core");

app.listen(3000, () => {
  console.log("API for smart home 1.1 up n running.");
});

const lightsRoute = require("./routes/lights");

app.use("/lights", lightsRoute);

/* CODE YOUR API HERE */
