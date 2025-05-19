import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

const fileNames = [null, "global", "pages", "assets"];
const pages = [null, "Homepage", "WhatIsRentToOwn", "AboutUs", "Faq", "ApplyNow", "PartnerWithUs"];

const filePaths = fileNames.reduce((acc, cur) => ({
  ...acc,
  [cur]: path.resolve(__dirname, `./src/${cur}`),
}));

const pageImgPaths = pages.reduce((acc, cur) => ({
  ...acc,
  [`${cur.toLowerCase()}`]: path.resolve(__dirname, `./src/pages/${cur}/img`),
}))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      ...filePaths,
      ...pageImgPaths,
      "src": path.resolve(__dirname, "./src"),
    }
  }
})
