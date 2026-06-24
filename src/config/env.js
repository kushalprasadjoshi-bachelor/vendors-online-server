import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL;

if (!DB_URL) {
  throw new Error("DB_URL is not defined in .env file");
}

export { PORT, DB_URL };