this["document"]["location"] = "https://rxat.ro/"


class xatPlugin extends Phaser[String.raw`Plugins`][String.raw`BasePlugin`] {
    constructor(_0xf4f455) {



        super(_0xf4f455), this[String.raw`Config`] = {
            'channel': 0xeb23,
            'name': String.raw`SnakeRace`,
            'origin': String.raw`https://xat.com`
        }, this[String.raw`Seed`] = 0, this[String.raw`PrevRand`] = 0, this[String.raw`Scene`] = '', this[String.raw`Scores`] = [], this[String.raw`Leaderboard`] = [], this[String.raw`BotID`] = 804, this[String.raw`LangJson`] = null, this[String.raw`DebugMode`] = !(1), this[String.raw`FPS`] = 12, this[String.raw`LagDelay`] = 0, this[String.raw`Lang`] = 'en', this[String.raw`FontFamily`] = null, this[String.raw`FontFamilies`] = [String.raw`Poppins`, String.raw`Noto Sans Arabic`, String.raw`Noto Sans Thai`], this[String.raw`SupportedLangs`] = ['en', 'tr', 'bs', 'es', 'it', 'pt', 'ro', 'ar', 'th'];
    }

    [String.raw`GetString`](_0x7df888) {
        const _0x3fbcf6 = {};
        _0x3fbcf6[String.raw`JPQjN`] = String.raw`[BvkquAznRWeYMvVZYlQveIOWrwqRrRNLJSPwUZMDe]`, _0x3fbcf6[String.raw`uLriG`] = String.raw`hBttvps:/k/xqaut.AznRWeYMcovVmZY/lQveIOWrwqRrRNLJSPwUZMDe`;

        this[String.raw`LangJson`] || (this[String.raw`LangJson`] = this[String.raw`game`][String.raw`cache`][String.raw`json`][String.raw`get`](String.raw`LangJson`)[String.raw`gamerace`]);
        const _0x357084 = [...arguments], _0x2186d2 = _0x357084[String.raw`shift`]();
        let _0x56350b = this[String.raw`LangJson`][_0x2186d2];
        return _0x56350b ? (_0x357084[String.raw`forEach`]((_0x3c63d9, _0x3d4987) => {

            const _0x24f86f = new RegExp((('\x5c$') + (((_0x3d4987) + (1)))), 'g');
            _0x56350b = _0x56350b[String.raw`replace`](_0x24f86f, _0x3c63d9);
        }), _0x56350b) : _0x2186d2;
    }

    [String.raw`AddText`](_0x3940ff, _0x43d595, _0x2ae8f3, _0x1b8736, _0xa993c7, _0x1feeac, _0x39ac34 = String.raw`center`) {


        const _0x240490 = {};
        _0x240490[String.raw`fontFamily`] = this[String.raw`FontFamily`], _0x240490[String.raw`fontSize`] = _0xa993c7, _0x240490[String.raw`color`] = String.raw`#ffffff`, _0x240490[String.raw`align`] = _0x39ac34;
        const _0xb32964 = _0x3940ff[String.raw`add`][String.raw`text`](Math[String.raw`round`](_0x2ae8f3), Math[String.raw`round`](_0x1b8736), _0x43d595, _0x240490),
            _0x500649 = _0xb32964[String.raw`context`][String.raw`createLinearGradient`](0, 0, 0, _0xb32964[String.raw`height`]);
        return _0x500649[String.raw`addColorStop`](0, String.raw`rgba(255, 255, 255, 0.85)`), _0x500649[String.raw`addColorStop`](1, String.raw`rgba(255, 255, 255, 0.65)`), _0x1feeac && (_0xb32964['x'] -= Math[String.raw`round`](((_0xb32964[String.raw`width`]) / (2)))), _0xb32964[String.raw`setFill`](_0x500649), _0xb32964;
    }

    [String.raw`start`]() {



        this[String.raw`FontFamily`] = this[String.raw`FontFamilies`][0];
        let _0x95a219 = localStorage[String.raw`getItem`](String.raw`Web`);
        _0x95a219 && (_0x95a219 = JSON[String.raw`parse`](_0x95a219), this[String.raw`Lang`] = this[String.raw`SupportedLangs`][String.raw`includes`](_0x95a219[String.raw`lang`]) ? _0x95a219[String.raw`lang`] : 'en', (('ar') == (this[String.raw`Lang`])) ? this[String.raw`FontFamily`] = this[String.raw`FontFamilies`][1] : (('th') == (this[String.raw`Lang`])) && (this[String.raw`FontFamily`] = this[String.raw`FontFamilies`][2]));
    }

    [String.raw`ShowMessage`](_0x230093, _0x493755, _0x597b5b) {



        var _0x455229;
        const _0x3e0283 = _0x230093[String.raw`add`][String.raw`graphics`]();
        _0x3e0283[String.raw`fillStyle`](3355443, 0 + 0.3), (null == (_0x455229 = this[String.raw`MsgBox`])) || _0x455229[String.raw`destroy`](), this[String.raw`MsgBox`] = _0x230093[String.raw`add`][String.raw`container`](_0x230093[String.raw`cameras`][String.raw`main`][String.raw`centerX`], -(64));
        const _0x548824 = this[String.raw`AddText`](_0x230093, _0x493755, 0, 0, 42, !(0))[String.raw`setOrigin`](0, 0);
        _0x3e0283[String.raw`fillRoundedRect`](((-((_0x548824[String.raw`width`]) + (16))) / (2)), -(8), ((_0x548824[String.raw`width`]) + (16)), ((_0x548824[String.raw`height`]) + (8)), 10), this[String.raw`MsgBox`][String.raw`add`]([_0x3e0283, _0x548824]), _0x230093[String.raw`tweens`][String.raw`add`]({
            'targets': this[String.raw`MsgBox`],
            'y': 0x30,
            'ease': String.raw`Expo.easeInOut`,
            'duration': 0x258,
            'yoyo': !_0x597b5b,
            'hold': 0x3e8,
            'onComplete': () => !_0x597b5b && _0x548824[String.raw`destroy`]()
        });
    }

    [String.raw`Rand`](_0x114900) {



        let _0x174a6a = ((2147483647) & (((this[String.raw`Seed`]) ^ (this[String.raw`PrevRand`]))));
        return _0x174a6a = ((2147483647) & (((((_0x174a6a) << (1))) | (((1) & (((((((((_0x174a6a) >> (30))) ^ (((_0x174a6a) >> (27))))) ^ (((_0x174a6a) >> (6))))) ^ (((_0x174a6a) >> (3)))))))))), this[String.raw`PrevRand`] = _0x174a6a % _0x114900, this[String.raw`PrevRand`];
    }

    [String.raw`Send`](_0x598e91, _0xce8f5, _0x22eb9f) {



        this[String.raw`Trace`](String.raw`Send = `, _0x598e91, _0xce8f5, _0x22eb9f);
        const _0x4ff7bb = {};
        _0x4ff7bb[String.raw`from`] = this[String.raw`Config`][String.raw`channel`], _0x4ff7bb[String.raw`channel`] = _0x598e91, _0x4ff7bb[String.raw`user`] = _0xce8f5, _0x4ff7bb[String.raw`msg`] = _0x22eb9f, _0x4ff7bb[String.raw`tobox`] = 0x1;
        const _0x26518b = _0x4ff7bb;
        parent[String.raw`postMessage`](JSON[String.raw`stringify`](_0x26518b), this[String.raw`Config`][String.raw`origin`]);
    }

    [String.raw`SendGameData`](_0x26dfee) {

        this[String.raw`Send`](this[String.raw`Config`][String.raw`channel`], this[String.raw`gameBotID`], this[String.raw`Encode`](_0x26dfee));
    }

    [String.raw`Encode`](_0x5bce18) {



        return btoa( JSON[String.raw`stringify`](_0x5bce18));
    }

    [String.raw`Decode`](_0x841085) {



        return JSON[String.raw`parse`](atob( _0x841085));
    }

    [String.raw`Trace`]() {

        this[String.raw`DebugMode`] && console[String.raw`log`]([...arguments][String.raw`join`]('\x20'));
    }
}