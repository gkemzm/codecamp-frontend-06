import { DataSource } from "typeorm";
import { fetchProducts } from "./tables/Products";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.124.189",
  port: 5004,
  username: "postgres",
  password: "postgres2021",
  database: "postgres",
  entities: [fetchProducts],
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log("연결성공!!!");
  })
  .catch(() => {
    console.log("연결실패!!!");
  });
