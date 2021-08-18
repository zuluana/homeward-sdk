import { WebAppManifest as WebAppManifestInternal } from 'web-app-manifest';
export interface SaveToHomeParams {
    manifest: WebAppManifest;
    link: string;
    payload?: any;
    server?: string;
}
export declare const saveToHome: (params: SaveToHomeParams) => void;
export declare type WebAppManifest = WebAppManifestInternal;
