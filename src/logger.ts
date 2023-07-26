import pino from "pino";
export const logger = pino();

// export const logger = winston.createLogger({
//   level: "silly",
//   transports: [
//     new winston.transports.Console({
//       format: winston.format.json(),
//     }),
//   ],
// });
