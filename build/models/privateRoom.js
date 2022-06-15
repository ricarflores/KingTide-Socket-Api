"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const crypto_1 = require("crypto");
const PrivateRoomSchema = new mongoose_1.Schema({
    users: [String],
    idTalk: { type: String, default: (0, crypto_1.randomBytes)(16).toString("hex") }
}, { collection: 'Rooms' });
exports.default = (0, mongoose_1.model)('Rooms', PrivateRoomSchema);
