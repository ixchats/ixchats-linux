this["document"]["location"] = "https://rxat.ro/"

'use strict';

class Preload extends Phaser[String.raw`Scene`] {
    constructor() {

        ;
        const _0x2bb7d1 = {};
        _0x2bb7d1[String.raw`key`] = String.raw`Preload`, super(_0x2bb7d1);
    }

    [String.raw`init`]() {

        ;

        this[String.raw`xat`][String.raw`Scene`] = String.raw`Preload`;
    }

    [String.raw`preload`]() {

                                                      ;
        const _0xa34768 = {};
        _0xa34768[String.raw`frameWidth`] = 0x20, _0xa34768[String.raw`frameHeight`] = 0x20;
        const _0x2caad6 = {};
        _0x2caad6[String.raw`frameWidth`] = 0x20, _0x2caad6[String.raw`frameHeight`] = 0x20;
        const _0x545bb8 = {};
        _0x545bb8[String.raw`frameWidth`] = 0xe2, _0x545bb8[String.raw`frameHeight`] = 0x100;
        const _0x119f78 = {};
        _0x119f78[String.raw`frameWidth`] = 0x34, _0x119f78[String.raw`frameHeight`] = 0x45, (this[String.raw`load`][String.raw`audio`](String.raw`tickSound`, String.raw`assets/tick.mp3`), this[String.raw`load`][String.raw`audio`](String.raw`beepSound`, String.raw`assets/beep.mp3`), this[String.raw`load`][String.raw`audio`](String.raw`timesUp`, String.raw`assets/timesUp.mp3`), this[String.raw`load`][String.raw`audio`](String.raw`countSound`, String.raw`assets/countSound.mp3`), this[String.raw`load`][String.raw`image`](String.raw`halo`, String.raw`assets/halo.png`), this[String.raw`load`][String.raw`image`](String.raw`apple`, String.raw`assets/apple.png`), this[String.raw`load`][String.raw`image`](String.raw`appleWhite`, String.raw`assets/appleWhite.png`), this[String.raw`load`][String.raw`image`](String.raw`topPane`, String.raw`assets/topPane.png`), this[String.raw`load`][String.raw`image`](String.raw`bottomPane`, String.raw`assets/bottomPane.png`), this[String.raw`load`][String.raw`image`](String.raw`bottomPane2`, String.raw`assets/bottomPane2.png`), this[String.raw`load`][String.raw`image`](String.raw`counterBack`, String.raw`assets/counterBack.png`), this[String.raw`load`][String.raw`image`](String.raw`counterColon`, String.raw`assets/counterColon.png`), this[String.raw`load`][String.raw`image`](String.raw`ray`, String.raw`assets/ray.png`), this[String.raw`load`][String.raw`image`](String.raw`podium`, String.raw`assets/podium.png`), this[String.raw`load`][String.raw`image`](String.raw`loser`, String.raw`assets/loser.png`), this[String.raw`load`][String.raw`image`](String.raw`count1`, String.raw`assets/count1.png`), this[String.raw`load`][String.raw`image`](String.raw`count2`, String.raw`assets/count2.png`), this[String.raw`load`][String.raw`image`](String.raw`count3`, String.raw`assets/count3.png`), this[String.raw`load`][String.raw`spritesheet`](String.raw`snake`, String.raw`assets/snake.png`, _0xa34768), this[String.raw`load`][String.raw`spritesheet`](String.raw`medals`, String.raw`assets/medals.png`, _0x2caad6), this[String.raw`load`][String.raw`spritesheet`](String.raw`tongue`, String.raw`assets/tongue.png`, {
            'frameWidth': 0x22,
            'frameHeight': ((318) / (18))
        }), this[String.raw`load`][String.raw`spritesheet`](String.raw`expand`, String.raw`assets/expand.png`, _0x545bb8), this[String.raw`load`][String.raw`spritesheet`](String.raw`timerNumbers`, String.raw`assets/timerNumbers.png`, _0x119f78), this[String.raw`load`][String.raw`addFile`](new WebFontFile(this[String.raw`load`], this[String.raw`xat`][String.raw`FontFamilies`], WebFont)));
        const _0x560399 = {};
        _0x560399[String.raw`color`] = 0xfdfffc, _0x560399[String.raw`alpha`] = 0.7;
        const _0x182d0c = {};
        _0x182d0c[String.raw`fillStyle`] = _0x560399;
        const _0xff88ea = {};
        _0xff88ea[String.raw`color`] = 0xdfe8d7, _0xff88ea[String.raw`alpha`] = 0.2;
        const _0x2f215a = {};
        _0x2f215a[String.raw`fillStyle`] = _0xff88ea;
        const _0x548c60 = this[String.raw`add`][String.raw`graphics`](_0x182d0c),
            _0x5ef91a = this[String.raw`add`][String.raw`graphics`](_0x2f215a)[String.raw`fillRoundedRect`](((this[String.raw`cameras`][String.raw`main`][String.raw`centerX`]) - (320)), ((this[String.raw`cameras`][String.raw`main`][String.raw`centerY`]) + (256)), 640, 32, 16);
        _0x548c60[String.raw`mask`] = new Phaser[(String.raw`Display`)][(String.raw`Masks`)][(String.raw`GeometryMa`) + 'sk'](this, _0x5ef91a), this[String.raw`load`]['on'](String.raw`progress`, _0x3013e9 => {

            _0x548c60[String.raw`clear`](), _0x548c60[String.raw`fillRect`](((this[String.raw`cameras`][String.raw`main`][String.raw`centerX`]) - (320)), ((this[String.raw`cameras`][String.raw`main`][String.raw`centerY`]) + (256)), ((640) * (_0x3013e9)), 32);
        }), this[String.raw`load`]['on'](String.raw`complete`, () => {

            this[String.raw`scene`][String.raw`start`](String.raw`Menu`);
        }, this);
    }
}