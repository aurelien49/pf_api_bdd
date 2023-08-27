const {createLogger, format, transports} = require('winston');
const winston = require("winston");
const {combine, timestamp, label, printf} = format;

const myFormat = printf(({level, message, label, timestamp}) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});

const l = winston.createLogger({

    //level: 'info',
    levels: {
        e: 0,
        w: 1,
        i: 2,
        h: 3,
        v: 4,
        d: 5,
        s: 6
    },
    // format: winston.format.json(),
    defaultMeta: {service: 'user-service'},
    format: combine(
        label({label: 'Debug Aurélien'}),
        timestamp(),
        myFormat
    ),
    transports: [
        new winston.transports.File({filename: './log/errors/my_log_error.log', level: 'e'}),
        new winston.transports.File({filename: './log/debug/my_log_debug.log', level: 'd'}),
    ],
});

module.exports = l;