"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllOrderService = exports.newOrder = void 0;
const catchAsyncErrors_1 = require("../utils/middleware/catchAsyncErrors");
const order_model_1 = __importDefault(require("../models/order.model"));
// create new order
exports.newOrder = (0, catchAsyncErrors_1.CatchAsyncError)(async (data, res) => {
    const order = await order_model_1.default.create(data);
    res.status(201).json({
        succcess: true,
        order,
    });
});
//get All orders --->only for admin
const getAllOrderService = async (res) => {
    const users = await order_model_1.default.find().sort({ createdAt: -1 });
    res.status(201).json({ success: true, users });
};
exports.getAllOrderService = getAllOrderService;
