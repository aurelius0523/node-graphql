"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
exports.BookSchema = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type Book {\n        \"wow a title\"\n        title: String\n        author: Author\n    }\n\n    extend type Query {\n        books: [Book]!\n    }\n"], ["\n    type Book {\n        \"wow a title\"\n        title: String\n        author: Author\n    }\n\n    extend type Query {\n        books: [Book]!\n    }\n"])));
var templateObject_1;
