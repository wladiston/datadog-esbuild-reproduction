import tracer from "dd-trace";

tracer.init({
  logInjection: true,
  env: "development",
  version: "1.0.0",
}); // initialized in a different file to avoid hoisting.

export default tracer;
