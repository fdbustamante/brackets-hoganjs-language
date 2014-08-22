/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50*/
/*global define, $, brackets, window*/

/*!
 * Brackets HoganJS language extension.
 * Adds support for HoganJS file extensions.
 * © 2014, Federico Bustamante, MIT License
 * http://github.com/fdbustamante/brackets-hoganjs-language
 */

define(function (require, exports, module) {
    "use strict";
    var LanguageManager = brackets.getModule("language/LanguageManager");
    var language = LanguageManager.getLanguage("html");
    language.addFileExtension("hjs");
});