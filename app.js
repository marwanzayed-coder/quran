const express = require("express");
const app = express();
const port = 3000;
const helmet = require("helmet");
const cors = require("cors");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(helmet());

var corsOptions = {
  origin: "https://api.aladhan.com",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// For Public File
app.get("/", cors(corsOptions), (req, res) => {
  res.render("index", { myTitle: "القرأن الكريم" });
});
app.get("/quran", (req, res) => {
  res.render("quran", { myTitle: "المصحف | القرأن الكريم" });
});
app.get(`/quran/:id`, (req, res) => {
  res.render("sora", { myTitle: "القرأن الكريم" });
});
app.get("/citationForMorning", (req, res) => {
  res.render("citationForMorning", { myTitle: "اذكار الصباح | القرأن الكريم" });
});
app.get("/eveningPrayers", (req, res) => {
  res.render("eveningPrayers", { myTitle: "اذكار المساء | القرأن الكريم" });
});
app.get("/otherRemembrancesAndOtherSupplications", (req, res) => {
  res.render("otherRemembrancesAndOtherSupplications", {
    myTitle: "القرأن الكريم",
  });
});
app.get("/roqia", (req, res) => {
  res.render("roqia", { myTitle: "الرقيه الشرعية | القرأن الكريم" });
});
app.get("/settings", (req, res) => {
  res.render("settings", { myTitle: " الإعدادات | القرأن الكريم" });
});
// 404 Page Not Found
app.use((req, res) => {
  res.status(404).render("page-not-found", { myTitle: "الصفحه غير موجوده" });
});

app.listen(process.env.PORT || port, () => {
  console.log(`http://localhost:${port}`);
});
