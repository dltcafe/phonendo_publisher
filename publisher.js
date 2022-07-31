import "dotenv/config";
import { start, stop } from "./libp2p-node.js";

import { fromString } from "uint8arrays/from-string";
import { toString } from "uint8arrays/to-string";

start({
  "/discover/1.0.0": () => fromString(process.env.SERVICE_NAME),

  "/publish/1.0.0": async (value) => {
    return fromString(`TODO publish ${toString(value)}`);
  },
})
  .then()
  .catch(console.error);

const exit = async () => {
  await stop();
  process.exit(0);
};

process.on("SIGTERM", exit);
process.on("SIGINT", exit);
