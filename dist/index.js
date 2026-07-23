"use strict";
/**
 * @warborn/plugin-sdk - Canonical Plugin SDK & Extensibility Framework for Warborn OS
 * Enables secure, typed, third-party plugin extension without exposing runtime internals.
 * @packageDocumentation
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WARBORN_PLUGIN_SDK_VERSION = void 0;
__exportStar(require("./manifest"), exports);
__exportStar(require("./permissions"), exports);
__exportStar(require("./lifecycle"), exports);
__exportStar(require("./plugin"), exports);
__exportStar(require("./registry"), exports);
exports.WARBORN_PLUGIN_SDK_VERSION = '0.1.0';
//# sourceMappingURL=index.js.map