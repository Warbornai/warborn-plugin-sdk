"use strict";
/**
 * Base Abstract Plugin Class for Developer Implementation.
 * @module @warborn/plugin-sdk/plugin
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePlugin = void 0;
const sdk_1 = require("@warborn/sdk");
class BasePlugin {
    manifest;
    status = 'installed';
    sdk;
    constructor(manifest, sdk) {
        this.manifest = manifest;
        this.sdk = sdk || (0, sdk_1.createWarbornSDK)();
    }
    async onInstall() { }
    async onEnable() { this.status = 'enabled'; }
    async onDisable() { this.status = 'disabled'; }
    async onUnload() { this.status = 'disabled'; }
}
exports.BasePlugin = BasePlugin;
//# sourceMappingURL=index.js.map