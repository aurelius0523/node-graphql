"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
exports.MutationResponseSchema = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    interface MutationResponse {\n        code: Int!\n        success: Boolean!\n        message: String\n    }\n"], ["\n    interface MutationResponse {\n        code: Int!\n        success: Boolean!\n        message: String\n    }\n"])));
var templateObject_1;
