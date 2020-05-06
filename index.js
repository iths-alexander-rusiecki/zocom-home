const { app } = require("./core");

app.listen(3000, () => {
  console.log("API for smart home 1.1 up n running.");
});

const lightsRoute = require("./routes/lights");
const speakersRoute = require("./routes/speakers");

app.use("/lights", lightsRoute);
app.use("/speakers", speakersRoute);

/* CODE YOUR API HERE */
