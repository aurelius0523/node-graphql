"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_core_1 = require("apollo-server-core");
var GithubApi_1 = __importDefault(require("../datasource/github/GithubApi"));
// --- Schema
exports.RepositorySchema = apollo_server_core_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type Repository implements Node {\n        id: String!\n        name: String!\n        star: Int!\n        languages: [String]\n    }\n\n    extend type Query {\n        getRepositories: [Repository]!\n        getRepositoriesForUser(username: String!): [Repository]!\n    }\n"], ["\n    type Repository implements Node {\n        id: String!\n        name: String!\n        star: Int!\n        languages: [String]\n    }\n\n    extend type Query {\n        getRepositories: [Repository]!\n        getRepositoriesForUser(username: String!): [Repository]!\n    }\n"])));
// --- Resolver
var resolveLanguages = function (source) { return __awaiter(_this, void 0, void 0, function () {
    var response, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, GithubApi_1.default.getLanguage(source.name)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, Object.keys(response.data)];
            case 2:
                error_1 = _a.sent();
                return [2 /*return*/, []];
            case 3: return [2 /*return*/];
        }
    });
}); };
var resolveGetRepositories = function () { return __awaiter(_this, void 0, void 0, function () {
    var response, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, GithubApi_1.default.getOwnRepositories()];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data.map(mapResponseToSchema)];
            case 2:
                error_2 = _a.sent();
                return [2 /*return*/, []];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.resolveGetRepositoriesForUser = function (source, args) { return __awaiter(_this, void 0, void 0, function () {
    var username, response, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                username = source.username ? source.username : args.username;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, GithubApi_1.default.getUserRepositories(username)];
            case 2:
                response = _a.sent();
                return [2 /*return*/, response.data.map(mapResponseToSchema)];
            case 3:
                error_3 = _a.sent();
                return [2 /*return*/, []];
            case 4: return [2 /*return*/];
        }
    });
}); };
// --- GraphQL ResolverMap
exports.repositoryResolvers = {
    Repository: {
        languages: resolveLanguages
    },
    Query: {
        getRepositories: resolveGetRepositories,
        getRepositoriesForUser: exports.resolveGetRepositoriesForUser
    }
};
// --- Utilities
var mapResponseToSchema = function (datum) {
    return {
        id: datum.id,
        star: datum.watchers_count,
        name: datum.full_name
    };
};
var templateObject_1;
