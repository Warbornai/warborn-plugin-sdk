/**
 * Plugin Permission Model for Warborn OS.
 * @module @warborn/plugin-sdk/permissions
 */

export type PluginPermission =
  | 'memory.read'
  | 'memory.write'
  | 'workflow.execute'
  | 'provider.use'
  | 'voice.access'
  | 'vision.access'
  | 'filesystem.read'
  | 'filesystem.write'
  | 'network.access';

export function validatePluginPermissions(requested: readonly PluginPermission[], allowed: readonly PluginPermission[]): boolean {
  return requested.every(perm => allowed.includes(perm));
}
