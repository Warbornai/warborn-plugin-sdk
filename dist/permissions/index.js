"use strict";
/**
 * Plugin Permission Model for Warborn OS.
 * @module @warborn/plugin-sdk/permissions
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePluginPermissions = validatePluginPermissions;
function validatePluginPermissions(requested, allowed) {
    return requested.every(perm => allowed.includes(perm));
}
//# sourceMappingURL=index.js.map