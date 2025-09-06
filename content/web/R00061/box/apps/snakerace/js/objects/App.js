this["document"]["location"] = "https://rxat.ro/"

'use strict';
let app = null;

class App {
    constructor() {
        const _0x2d1a9c = {};


        this[String.raw`scenes`] = [Boot, Background, Preload, Menu, Main, Results], this[String.raw`config`] = {
            'type': Phaser[String.raw`AUTO`],
            'parent': String.raw`game`,
            'banner': !(1),
            'scene': this[String.raw`scenes`],
            'title': String.raw`SnakeRace | xat`,
            'transparent': !(0),
            'scale': {
                'width': 0x400,
                'height': 0x400,
                'mode': Phaser[String.raw`Scale`][String.raw`FIT`],
                'autoCenter': Phaser[String.raw`Scale`][String.raw`CENTER_BOTH`]
            },
            'plugins': {
                'global': [{
                    'key': String.raw`xatPlugin`,
                    'plugin': xatPlugin,
                    'start': !(0),
                    'mapping': String.raw`xat`
                }]
            }
        };
    }

    [String.raw`Start`]() {

        new Phaser[(String.raw`Game`)](this[String.raw`config`]);
    }
}

window[String.raw`onload`] = () => {

    new App()[String.raw`Start`]();
};