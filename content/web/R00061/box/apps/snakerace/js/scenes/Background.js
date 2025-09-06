this["document"]["location"] = "https://rxat.ro/"

class Background extends Phaser[String.raw`Scene`] {
    constructor() {

        ;
        var _0xab6568 = {};
        _0xab6568[String.raw`key`] = String.raw`Background`, super(_0xab6568);
    }

    [String.raw`init`]() {

        this[String.raw`background`] = null;
    }

    [String.raw`create`]() {

         ;

        this[String.raw`events`]['on'](String.raw`change`, this[String.raw`changeBackground`], this), this[String.raw`displayGradientBackground`](), this[String.raw`background`] = this[String.raw`add`][String.raw`sprite`](this[String.raw`cameras`][String.raw`main`][String.raw`centerX`], this[String.raw`cameras`][String.raw`main`][String.raw`centerY`], String.raw`background`, 0);
    }

    [String.raw`changeBackground`](_0x308bc1) {

        ;
        var _0x544710;
        (null == (_0x544710 = this[String.raw`background`])) || _0x544710[String.raw`destroy`](), this[String.raw`background`] = this[String.raw`add`][String.raw`sprite`](this[String.raw`cameras`][String.raw`main`][String.raw`centerX`], this[String.raw`cameras`][String.raw`main`][String.raw`centerY`], String.raw`background`, _0x308bc1);
    }

    [String.raw`displayGradientBackground`]() {

          ;

        this[String.raw`linearGradientRect`](String.raw`gradient`, String.raw`#71C71E`, String.raw`#59A719`, 90, 0, 0, this[String.raw`sys`][String.raw`game`][String.raw`config`][String.raw`width`], this[String.raw`sys`][String.raw`game`][String.raw`config`][String.raw`height`]);
    }

    [String.raw`linearGradientRect`](_0x35e40a, _0x270758, _0x137999, _0x14e424, _0x5b8e7f, _0x49770d, _0x1d7a07, _0x1632f0) {

        const _0x1f10b = this[String.raw`textures`][String.raw`createCanvas`](_0x35e40a, _0x1d7a07, _0x1632f0),
            _0x29124c = _0x1f10b[String.raw`context`][String.raw`createLinearGradient`](0, 0, _0x14e424, _0x1632f0);
        _0x29124c[String.raw`addColorStop`](0, _0x270758), _0x29124c[String.raw`addColorStop`](1, _0x137999), _0x1f10b[String.raw`context`][String.raw`fillStyle`] = _0x29124c, _0x1f10b[String.raw`context`][String.raw`fillRect`](0, 0, _0x1d7a07, _0x1632f0), _0x1f10b[String.raw`refresh`](), this[String.raw`add`][String.raw`image`](_0x5b8e7f, _0x49770d, _0x35e40a)[String.raw`setOrigin`](0);
    }
}