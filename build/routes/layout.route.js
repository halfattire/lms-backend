"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../utils/middleware/auth");
const layout_controller_1 = require("../controllers/layout.controller");
const layoutRouter = express_1.default.Router();
const layout_controller_2 = require("../controllers/layout.controller");
layoutRouter.post("/create-layout", auth_1.isAuthenticated, (0, auth_1.authorizeRoles)("admin"), layout_controller_1.createLayout);
layoutRouter.put("/edit-layout", auth_1.isAuthenticated, (0, auth_1.authorizeRoles)("admin"), layout_controller_2.editLayout);
layoutRouter.get("/get-layout/:type", layout_controller_2.getLayoutByType);
exports.default = layoutRouter;
