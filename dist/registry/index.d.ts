/**
 * Central Plugin Registry for Discovery & Lifecycle Management.
 * @module @warborn/plugin-sdk/registry
 */
import { BasePlugin } from '../plugin';
export declare class PluginRegistry {
    private readonly plugins;
    register(plugin: BasePlugin): void;
    unregister(pluginId: string): void;
    get(pluginId: string): BasePlugin | undefined;
    list(): readonly BasePlugin[];
    enableAll(): Promise<void>;
}
//# sourceMappingURL=index.d.ts.map