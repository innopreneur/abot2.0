const winston = require("winston");
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      name: "console",
      colorize: true,
      timestamp: function() {
        return new Date(Date.now());
      }
    }),
    new winston.transports.File({ filename: `${Date.now()}.log` })
  ]
});

export default logger;
