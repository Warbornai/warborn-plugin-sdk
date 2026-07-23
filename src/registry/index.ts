/**
 * Central Plugin Registry for Discovery & Lifecycle Management.
 * @module @warborn/plugin-sdk/registry
 */

import { BasePlugin } from '../plugin';

export class PluginRegistry {
  private readonly plugins = new Map<string, BasePlugin>();

  public register(plugin: BasePlugin): void {
    this.plugins.set(plugin.manifest.id, plugin);
  }

  public unregister(pluginId: string): void {
    const plugin = this.plugins.get(pluginId);
    if (plugin) {
      plugin.shutdown();
      this.plugins.delete(pluginId);
    }
  }

  public get(pluginId: string): BasePlugin | undefined {
    return this.plugins.get(pluginId);
  }

  public list(): readonly BasePlugin[] {
    return Array.from(this.plugins.values());
  }

  public async enableAll(): Promise<void> {
    for (const plugin of this.plugins.values()) {
      await plugin.initialize();
      await plugin.onEnable();
    }
  }
}
