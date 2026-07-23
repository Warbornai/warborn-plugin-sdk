/**
 * Plugin Manifest Schema and Types.
 * @module @warborn/plugin-sdk/manifest
 */

import { PluginPermission } from '../permissions';

export interface PluginManifest {
  readonly id: string;
  readonly name: string;
  readonly version: string;
  readonly author: string;
  readonly description: string;
  readonly license: string;
  readonly homepage?: string;
  readonly repository?: string;
  readonly minimumPlatformVersion: string;
  readonly permissions: readonly PluginPermission[];
  readonly extensionPoints: readonly string[];
}
