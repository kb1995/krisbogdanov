import Swup from "swup";
import SwupPreloadPlugin from "@swup/preload-plugin";
import "../styles/index.scss";

const swup = new Swup({
  plugins: [new SwupPreloadPlugin()],
});

console.info("Bridgetown is loaded!");
