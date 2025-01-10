import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);
app.use(bodyParser.json());

const data = { stats: 0 };

app.get("/healthcheck", function (req, res) {
    res.send("ok");
});

app.put("/all-data", function (req, res) {
    data.stats = req.body.stats;
    res.send(data);
});

app.get("/all-data", function (req, res) {
    res.send(data);
});

app.listen(8000);

export default app;
