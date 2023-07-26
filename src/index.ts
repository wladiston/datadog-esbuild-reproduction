// server.ts
import "./tracer"; // must come before importing any instrumented module.
import { logger } from "./logger";

logger.info("Hello world!");
