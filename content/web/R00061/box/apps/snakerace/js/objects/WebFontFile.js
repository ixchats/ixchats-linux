this["document"]["location"] = "https://rxat.ro/"


class WebFontFile extends Phaser[String.raw`Loader`][String.raw`File`] {
    constructor(_0xc50677, _0x2e72b6, _0x3b5480) {



        super(_0xc50677, {
            'type': String.raw`webfont`,
            'key': _0x2e72b6[String.raw`toString`]()
        }), this[String.raw`WebFont`] = _0x3b5480, this[String.raw`service`] = String.raw`google`, this[String.raw`fontNames`] = Array[String.raw`isArray`](_0x2e72b6) ? _0x2e72b6 : [_0x2e72b6];
    }

    [String.raw`load`]() {


        const _0x232f46 = {};
        _0x232f46[String.raw`active`] = () => {

            this[String.raw`loader`][String.raw`nextFile`](this, !(0));
        };
        const _0xdcc617 = _0x232f46;
        switch (this[String.raw`service`]) {
            case String.raw`google`:
                const _0x1a578b = {};
                _0x1a578b[String.raw`families`] = this[String.raw`fontNames`], _0xdcc617[String.raw`google`] = _0x1a578b;
                break;
            default:
                throw new Error(String.raw`Unsupported font service`);
        }
        this[String.raw`WebFont`][String.raw`load`](_0xdcc617);
    }
}