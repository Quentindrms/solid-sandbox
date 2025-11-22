import type { Config } from "vike/types";
import vikeSolid from "vike-solid/config";

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
  // https://vike.dev/head-tags
  title: "Solid Sandbox",
  description: "Une démonstration de force sous solidJS",
  prerender: true,

  extends: [vikeSolid],
  ssr: false,
  clientRouting: true,
} satisfies Config;
