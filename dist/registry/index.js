"use strict";
/**
 * Central Plugin Registry for Discovery & Lifecycle Management.
 * @module @warborn/plugin-sdk/registry
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginRegistry = void 0;
class PluginRegistry {
    plugins = new Map();
    register(plugin) {
        this.plugins.set(plugin.manifest.id, plugin);
    }
    unregister(pluginId) {
        const plugin = this.plugins.get(pluginId);
        if (plugin) {
            plugin.shutdown();
            this.plugins.delete(pluginId);
        }
    }
    get(pluginId) {
        return this.plugins.get(pluginId);
    }
    list() {
        return Array.from(this.plugins.values());
    }
    async enableAll() {
        for (const plugin of this.plugins.values()) {
            await plugin.initialize();
            await plugin.onEnable();
        }
    }
}
exports.PluginRegistry = PluginRegistry;
//# sourceMappingURL=index.js.map