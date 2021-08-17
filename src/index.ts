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
  const { name, description = "", letter, link, backgroundColor, themeColor, devServer = "https://codalreef.github.io/Homeward-Server", prodServer = "https://codalreef.github.io/Homeward-Server", payload = {} } = params;
  const url = __DEV__ ? devServer : prodServer;

  const queryParams = `?
    name=${ encodeURIComponent(name) }&
    description=${ encodeURIComponent(description) }&
    letter=${ encodeURIComponent(letter) }&
    link=${ encodeURIComponent(link + `?
    payload=${ JSON.stringify(payload) }`) }&
    background_color=${ encodeURIComponent(backgroundColor) }&
    theme_color=${ encodeURIComponent(themeColor) }`

  Linking.openURL(`${ url }${ queryParams}`);
};
