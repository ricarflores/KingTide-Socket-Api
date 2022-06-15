"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const crypto_1 = require("crypto");
const PrivateMessageSchema = new mongoose_1.Schema({
    from: { type: String, required: true },
    to: { type: String, required: true },
    type: { type: String, required: true },
    mensaje: { type: String, required: true },
    date: { type: Date, default: Date.now },
    idTalk: { type: String, default: (0, crypto_1.randomBytes)(16).toString("hex") }
}, { collection: 'Mensajes' });
exports.default = (0, mongoose_1.model)('PrivateMensajes', PrivateMessageSchema);
