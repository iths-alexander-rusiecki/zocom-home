const { app } = require("./core");

app.listen(3000, () => {
  console.log("API for smart home 1.1 up n running.");
});

// AIRCONDITION
const airconditionsRoute = require("./routes/aircondition");
app.use("/aircondition", airconditionsRoute);

// BLINDS
const blindsRoute = require("./routes/blinds");
app.use("/blinds", blindsRoute);

// CAMERA
const camerasRoute = require("./routes/camera");
app.use("/camera", camerasRoute);

// LIGHTS
const lightsRoute = require("./routes/lights");
app.use("/lights", lightsRoute);

// SPEAKERS
const speakersRoute = require("./routes/speakers");
app.use("/speakers", speakersRoute);

// VACUUM
const vacuumsRoute = require("./routes/vacuum");
app.use("/vacuum", vacuumsRoute);
