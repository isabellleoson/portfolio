const cors = require("cors"),
    express = require("express"),
    path = require("path");

const app = express();

app.use(cors());

app.get("/api", (_request, response) => {
    response.send({ hello: "World" });
});

app.use(express.static(path.join(path.resolve(), "public")));

app.listen(8080, () => {
    console.log("Redo på http://localhost:8080/");
});
