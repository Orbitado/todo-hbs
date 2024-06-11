import Express from "express";
import handlebars from "express-handlebars";
import __dirname from "./dirname.js";
import path from "path";
import viewsRoutes from "./routes/views.routes.js";

const app = Express();
const PORT = 8080;

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.listen(PORT, () =>
  console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`)
);

// HBS Configuration
app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
    defaultLayout: "main",
  })
);

app.set("view engine", "hbs");
app.set("views", `${__dirname}/views`);
app.use(Express.static(path.resolve(__dirname, "../public")));

app.use("/", viewsRoutes);