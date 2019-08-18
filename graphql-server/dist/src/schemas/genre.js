"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
exports.GenreSchema = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type Genre {\n        name: String\n        books: [Book]\n    }\n\n    extend type Query {\n        getGenre: [Genre]\n    }\n"], ["\n    type Genre {\n        name: String\n        books: [Book]\n    }\n\n    extend type Query {\n        getGenre: [Genre]\n    }\n"])));
var templateObject_1;
