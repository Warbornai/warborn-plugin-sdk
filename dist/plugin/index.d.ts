/**
 * Base Abstract Plugin Class for Developer Implementation.
 * @module @warborn/plugin-sdk/plugin
 */
import { PluginManifest } from '../manifest';
import { PluginStatus, PluginLifecycleHooks } from '../lifecycle';
import { WarbornSDK } from '@warborn/sdk';
export declare abstract class BasePlugin implements PluginLifecycleHooks {
    readonly manifest: PluginManifest;
    status: PluginStatus;
    readonly sdk: WarbornSDK;
    constructor(manifest: PluginManifest, sdk?: WarbornSDK);
    abstract initialize(): Promise<void>;
    abstract shutdown(): Promise<void>;
    onInstall(): Promise<void>;
    onEnable(): Promise<void>;
    onDisable(): Promise<void>;
    onUnload(): Promise<void>;
}
//# sourceMappingURL=index.d.ts.map