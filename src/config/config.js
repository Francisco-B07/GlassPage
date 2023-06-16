import dotenv from "dotenv";

dotenv.config({
  override: true,
  path: `./src/.env`,
});

export const config = {
    app: {
        port: process.env.PORT,
    }
}