/**
 * This file includes polyfills needed by Angular and is loaded befre the app.
 * You can add your own extra polyfills to this file.
 * 
 * This file is divided into 2 sections:
 * 1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 * 2. Application imports. Files imported after ZoneJS that should be loaded before your main file.
 * 
 * The current setup is for so-called "evergreen" browesers; the last versions of browsers that automatically
 * update themselves. This includes Safari >= 10, Chrome >= 55 (including opera),
 * Edge >= 13 on the desktop, and ios 10 and Chrome on mobile.
 * 
 * Learn more in https://angular.io/guide/browser-support
 */

/******************************************************************************************************
 * Browser POLYFILLS
 */

/**
 * IE11 requires the following for NgClass support on SVG elements
 */
import 'classlist.js'; // Run `npm install --save classlist.js`.

/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in angular Does Not require any polyfills (as of angular 6.0).
 */
import 'web-animations-js'; // Run `npm install --save web-animations-js`.

/******************************************************************************************************
 * ZONE JS is required by default for Angular itself.
 */
import 'zone.js/dist/zone'; // Included with Angular CLI.