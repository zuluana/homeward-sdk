import { Linking } from 'react-native';
import { WebAppManifest } from 'web-app-manifest';

export interface SaveToHomeParams {
  manifest: WebAppManifest;
  link: string;
  payload?: any;
  server?: string;
}

export const saveToHome = (params: SaveToHomeParams) => {

  const { link, manifest, server = "https://codalreef.github.io/Homeward-Server", payload = {} } = params;

  const queryParams = `?
    manifest=${ encodeURIComponent(JSON.stringify(manifest)) }&
    link=${ encodeURIComponent(link + `?payload=${ JSON.stringify(payload) }`) }
  `;
  Linking.openURL(`${ server }${ queryParams}`);
};
