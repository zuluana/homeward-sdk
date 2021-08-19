#  Homeward SDK

> *A simple, cross-platform library for saving deep links to your home screen.  Works with Expo Managed Workflow.  No linking necessary =)*

This library works by re-directing users to a web-browser where they can then save a deep link to their home screen.

This is a technique used by several popular apps and documented on [Stack Overflow](https://stackoverflow.com/questions/28042152/link-to-safari-add-to-home-screen-from-inside-app).

>  This library is a small TS / JS wrapper to simplify interaction with a [Homeward Server](https://github.com/CodalReef/Homeward-Server)

*See [Pitch / Anti-Pitch](#pitch--anti-pitch), [Disclaimer](#disclaimer), and [License](#license) prior to using.*

##  Installation

Npm
`npm i https://github.com/CodalReef/Homeward.git`

Yarn
`yarn add https://github.com/CodalReef/Homeward.git`

##  Usage

###  Create the Link
Next, create the deep link you'd like to save to the home-screen:

```typescript
const link = "myapp://feature1.context1?payload={ ... }"
```

The exact format of the link will depend on the app you're linking too.

If you're using Expo, the [expo-linking]() library can help with this:

```typescript
import * as Linking from 'expo-linking';
const link = Linking.makeUrl();
```

###  Build a Web App Manifest

Homeward directs the user to a web browser where they can save the icon to their home-screen.

The style of both the icon and the web page are controlled by the supplied [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest).

Web App Manifests are an experimental web standard supported by [several major browsers](https://developer.mozilla.org/en-US/docs/Web/Manifest#browser_compatibility).

Let's make a Web App Manifest to save a Calendar icon to the home-screen:

```typescript
import { WebAppManifest } from 'homeward';
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

A compatible icon is selected from the `icons` field and displayed on the home screen.

The [name](https://developer.mozilla.org/en-US/docs/Web/Manifest/name) field will show below the icon on the homescreen.

The [background_color](https://developer.mozilla.org/en-US/docs/Web/Manifest/background_color) field is a transitory color shown while loading the browser.

The [theme_color](https://developer.mozilla.org/en-US/docs/Web/Manifest/theme_color) field is used on Android to style the navigation bar.

If you don't supply a compatible icon, Homeward creates a default iOS icon using the `theme_color` and the first letter of the name.

At this time, we do not generate a default Android icon, and it's recommended to provide a compatible icon image.

###  Trigger Save to Home

With the link and the manifest, we can now save the icon to the home-screen:

```typescript
import { saveToHome } from 'homeward';

saveToHome({ link, manifest });
```

This immediately redirects the user to the browser with instructions on how to save the shortcut:

![Example](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/anu7aab9g5bwmlnr2nl3.png)

Once saved, the user can tap the icon on the home-screen and it will open a progressive web app (PWA) dedicated to redirecting the user to the link.

The PWA stays open in the switcher and can be tapped to open the deep link.

>  **NOTE**
>  Because Homeward requests a web page from an external server, users need to be connected to the internet to save deep links.


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
