"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../utils/middleware/auth");
const notification_controller_1 = require("../controllers/notification.controller");
const notificationRouter = express_1.default.Router();
notificationRouter.get("/get-all-notifications", auth_1.isAuthenticated, (0, auth_1.authorizeRoles)("admin"), notification_controller_1.getNotifications);
notificationRouter.put("/update-notification/:id", auth_1.isAuthenticated, (0, auth_1.authorizeRoles)("admin"), notification_controller_1.updateNotification);
exports.default = notificationRouter;
