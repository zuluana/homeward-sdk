import { Linking } from 'react-native';

export interface SaveToHomeParams {
  name: string;
  description?: string;
  letter: string;
  link: string;
  backgroundColor: string;
  themeColor: string;
  payload?: any;
  devServer?: string;
  prodServer?: string;
}

export const saveToHome = (params: SaveToHomeParams) => {
  const { name, description, letter, link, backgroundColor, themeColor, devServer = "https://www.oranda.io/link/", prodServer = "https://www.oranda.io/link/", payload } = params;
  const url = __DEV__ ? devServer : prodServer;
  const queryParams = `?name=${ name }&description=${ description }&letter=${ letter }&link=${ link + `?payload=${ JSON.stringify(payload) }` }&background_color=${ backgroundColor }&theme_color=${ themeColor }`
  Linking.openURL(`${ url }${ queryParams}`);
};
