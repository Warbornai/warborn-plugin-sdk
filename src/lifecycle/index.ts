/**
 * Plugin Lifecycle Contracts and Hooks.
 * @module @warborn/plugin-sdk/lifecycle
 */

export interface PluginLifecycleHooks {
  onInstall?: () => void | Promise<void>;
  onEnable?: () => void | Promise<void>;
  onDisable?: () => void | Promise<void>;
  onUnload?: () => void | Promise<void>;
}

export type PluginStatus = 'installed' | 'enabled' | 'disabled' | 'error';
