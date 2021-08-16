#  Homeland

> *A simple, cross-platform library for saving deep links to your home screen.  Works with Expo Managed Workflow.  No linking necessary =)*

This library works by re-directing users to a web-browser where they can then save a deep link to their home screen.

This is a technique used by several popular apps and documented on [Stack Overflow](https://stackoverflow.com/questions/28042152/link-to-safari-add-to-home-screen-from-inside-app).

*See [Pitch / Anti-Pitch](#pitch--anti-pitch), [Disclaimer](#disclaimer), and [License](#license) prior to using.*

##  Installation

Npm
`npm i --save git@github.com:CodalReef/Homeland.git`

Yarn
`yarn add --save git@github.com:CodalReef/Homeland.git`

##  Usage

Pass a JSON object to the `saveToHome` function to re-direct the user to a web-browser.

The user is then prompted with instructions for saving the link to the home screen.

Currently, the saved icon design is a solid backgroud color with a single letter above (See [Roadamap](#Roadmap) for extensibility plans).

### Example

```typescript
import { saveToHome } from 'homeland';

saveToHome({
  name: "Calendar",
  letter: "C",
  backgroundColor: "e33681",
  themeColor: "e33681",
  link: Linking.makeUrl(),
  payload: { page: "calendar", params: { day: "today" } }
)
```

In this example, we've created an icon with a letter "C" in the center and a pinkish-red background.

When tapped, user will be directed to the app using the supplied payload.  Presumably, they would be navigated to the "Calendar" section of the app showing data relevant to "today".


##  API
```
saveToHome({
  name: <Shortcut Name>,
  letter: <Shortcut Letter>,
  backgroundColor: <>,
  themeColor: "888888",
  link: "exp://172.20.10.2:19000/--/test",
  payload: <>
}: SaveToHomeParams)
```

Params
```
interface SaveToHomeParams {
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
```

## Pitch / Anti-Pitch

Advantages
-  Cross-Platform
-  Expo Compatible
-  MIT License

Disadvantages
-  Requires Internet Connection
-  Limited Icon Styling (See [Roadmap](#roadmap))
-  Requires Browser Redirect

While other solutions *are* available now, we ha several concerns which have been documented in our Dev.to article here:  Article Link


##  Roadmap

This library helps bridge a technology-specific gap while we wait for a non-viral wrapper around Siri Shortcuts and Expo support.

Once that happens, it shouldn't be difficult to build a native solution that doesn't re-direct to a browser.  In the meantime, here are some ideas for improving this library:

-  Extensibility
--  Modularize the renderer to use a user-specified component.
--  Support "Plugins" to dynamically generate various icon types.
--  Remove theh "dev" vs. "prod" distinction and inject that differentiation with a Plugin as needed.
--  Generally, make this library "Pluggable" as I discuss here:  
-  Publish on NPM

###  Disclaimer

The public debug end-point, currently located at https://www.oranda.io/link, is for debugging purposes only.  It is provided AS IS, without warranty, subject to undocumented change, and should not be used for  production, confidential, or otherwise sensitive payloads.

>  We are currently in the process of releasing the server code so you can deploy your own re-direct server.

###  License

Both this codebase and the public debug end-point, currently located at https://www.oranda.io/link), are licensed under the (MIT License)[License Link].

##  Contact

Dev.to:  
Email:  codalreef@gmail.com