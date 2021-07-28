"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
exports.saveToHome = (params) => {
    const { name, description, letter, link, backgroundColor, themeColor, devServer = "https://www.oranda.io/link/", prodServer = "https://www.oranda.io/link/", payload } = params;
    const url = __DEV__ ? devServer : prodServer;
    const queryParams = `?name=${name}&description=${description}&letter=${letter}&link=${link + `?payload=${JSON.stringify(payload)}`}&background_color=${backgroundColor}&theme_color=${themeColor}`;
    react_native_1.Linking.openURL(`${url}${queryParams}`);
};
//# sourceMappingURL=index.js.map