import { Linking } from 'react-native';
import { WebAppManifest as WebAppManifestInternal } from 'web-app-manifest';

export interface SaveToHomeParams {
  manifest: WebAppManifest;
  link: string;
  server?: string;
}

export const saveToHome = (params: SaveToHomeParams) => {
  const { link, manifest, server = "https://codalreef.github.io/homeward" } = params;
  const queryParams = `?manifest=${ encodeURIComponent(JSON.stringify(manifest)) }&link=${ encodeURIComponent(link) }`;
  Linking.openURL(`${ server }${ queryParams}`);
};

export type WebAppManifest = WebAppManifestInternal;
