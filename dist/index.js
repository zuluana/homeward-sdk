"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
exports.saveToHome = (params) => {
    const { link, manifest, server = "https://codalreef.github.io/Homeward-Server", payload = {} } = params;
    const queryParams = `?
    manifest=${encodeURIComponent(JSON.stringify(manifest))}&
    link=${encodeURIComponent(link + `?payload=${JSON.stringify(payload)}`)}
  `;
    react_native_1.Linking.openURL(`${server}${queryParams}`);
};
//# sourceMappingURL=index.js.map