#  Homeward SDK

> *Simple Cross-Platform Shortcuts in React Native.  Works with Expo Managed (no linking necessary)*

With this library, you can prompt your mobile users to save an arbitrary URL to their home-screen.

You have full control over the styling of the saved shortcut through a standardized, cross-platform API.

This is a technique inspired by several popular apps and documented on [Stack Overflow](https://stackoverflow.com/questions/28042152/link-to-safari-add-to-home-screen-from-inside-app).

>  Homeward SDK is a Typescript / Javascript wrapper around the [Homeward API](https://github.com/CodalReef/homeward).  If you prefer you can also [call the API directly](https://github.com/CodalReef/homeward#api-usage).

*See [Pitch / Anti-Pitch](https://github.com/CodalReef/homeward#pitch--anti-pitch), [Disclaimer](https://github.com/CodalReef/homeward#disclaimer) prior to use.*

##  Installation

**Npm**

`npm i https://github.com/CodalReef/Homeward.git`

**Yarn**

`yarn add https://github.com/CodalReef/Homeward.git`

>  **NOTE**
>  We plan on publishing to npm shortly.

##  Usage


###  Create the Link
Next, create the deep link you'd like saved to the user's home-screen:

```typescript
const link = "myapp://feature1.context1?payload={ ... }"
```

The exact format of the link will depend on your application.

If you're using Expo, the [expo-linking](https://docs.expo.dev/guides/linking/) library can help with this:

```typescript
import * as Linking from 'expo-linking';
const link = Linking.makeUrl();
```

###  Build a Web App Manifest

The Homeland SDK directs the user to a web browser where they can save the icon to their home-screen.

The style of both the icon and the web page are controlled by the supplied [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest) JSON.

Web App Manifests are an experimental web standard supported by [several major browsers](https://developer.mozilla.org/en-US/docs/Web/Manifest#browser_compatibility).

Let's make a Web App Manifest to save a Calendar icon to the home-screen:

```typescript
import { WebAppManifest } from 'homeland';
const manifest: WebAppManifest = {
    name: "Calendar",
    background_color: "#79ccd2",
    theme_color: "#79ccd2",
    "icons": [{
        "src": "https://image.flaticon.com/icons/png/512/2948/2948115.png",
        "sizes": "512x512",
        "type": "image/jpeg"
    }]
}
```

The [name](https://developer.mozilla.org/en-US/docs/Web/Manifest/name) field will be shown below the icon on the home-screen.

The [theme_color](https://developer.mozilla.org/en-US/docs/Web/Manifest/theme_color) field is used on Android to style the navigation bar and on iOS to style the default icon.

The [background_color](https://developer.mozilla.org/en-US/docs/Web/Manifest/background_color) field is a transitory color shown while loading the browser.


If you do not specify an icon, [a default icon is created](https://github.com/CodalReef/homeward#default-icon).

>  **NOTE** 
> Android has full support for custom icons, but on iOS you [must specify a "180x180" icon](https://github.com/CodalReef/homeward#custom-icon).


###  Trigger Save to Home

With the link and the manifest, we can now save the icon to the home-screen:

```typescript
import { saveToHome } from 'homeward';

saveToHome({ link, manifest });
```

This immediately redirects the user to the web app with instructions on how to save the shortcut (shown above).

Once saved, the user can tap the home-screen icon to be directed to the cached Homeward PWA.  This then immediately opens the provided link, opening your native mobile app.

The PWA stays open in the switcher and can be tapped again to re-open the deep link.


##  Custom Server

The default Homeward Server is deployed as a Github Pages application.  As noted in the disclaimer, we do not recommended this endpoint for anything but debugging with non-sensitive payloads.

For production, we recommend you [deploy your own server](https://github.com/CodalReef/Homeward-Server).

Then, when calling `saveToHome`, pass the custom server as a parameter:

```typescript
import { saveToHome } from 'homeward';

//  Set the Custom Server
const server = "https://homeward.mydomain.com";

saveToHome({ link, manifest, server });
```

##  Contact

Email:  codalreef@gmail.com
Reddit:  https://www.reddit.com/user/CodalReef
Dev.to:  https://dev.to/codalreef
Twitter:  https://twitter.com/CodalReef
