"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config/config"));
const application_1 = require("../constants/application");
const logger_1 = __importDefault(require("./logger"));
exports.default = (req, res, responseStatusCode, responseMessage, data = null) => {
    const response = {
        success: true,
        status: responseStatusCode,
        request: {
            ip: req.ip || null,
            method: req.method,
            url: req.originalUrl
        },
        message: responseMessage,
        data: data
    };
    logger_1.default.info('Controller_Response', {
        meta: response
    });
    if (config_1.default.ENV === application_1.EApplicationEnvironment.PRODUCTION) {
        delete response.request.ip;
    }
    res.status(responseStatusCode).json(response);
};
//# sourceMappingURL=httpResponse.js.map