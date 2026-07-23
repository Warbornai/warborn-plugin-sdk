/**
 * Base Abstract Plugin Class for Developer Implementation.
 * @module @warborn/plugin-sdk/plugin
 */

import { PluginManifest } from '../manifest';
import { PluginStatus, PluginLifecycleHooks } from '../lifecycle';
import { WarbornSDK, createWarbornSDK } from '@warborn/sdk';

export abstract class BasePlugin implements PluginLifecycleHooks {
  public status: PluginStatus = 'installed';
  public readonly sdk: WarbornSDK;

  constructor(public readonly manifest: PluginManifest, sdk?: WarbornSDK) {
    this.sdk = sdk || createWarbornSDK();
  }

  public abstract initialize(): Promise<void>;
  public abstract shutdown(): Promise<void>;

  public async onInstall() {}
  public async onEnable() { this.status = 'enabled'; }
  public async onDisable() { this.status = 'disabled'; }
  public async onUnload() { this.status = 'disabled'; }
}
