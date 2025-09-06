

this["document"]["location"] = "https://rxat.ro/"

'use strict';

class Results extends Phaser[String.raw`Scene`] {
    constructor() {


        const _0x7c40af = {};
        _0x7c40af[String.raw`key`] = String.raw`Results`, super(_0x7c40af);
    }

    [String.raw`init`](_0xf14223) {


        
        this[String.raw`playTime`] = null, this[String.raw`resultsTime`] = null, this[String.raw`level`] = _0xf14223[String.raw`level`], this[String.raw`timestamp`] = _0xf14223[String.raw`timestamp`], this[String.raw`winners`] = _0xf14223[String.raw`winners`], this[String.raw`leaderboard`] = _0xf14223[String.raw`leaderboard`], this[String.raw`numOfRays`] = 16, this[String.raw`frameTime`] = 0, this[String.raw`BkgEvents`] = this[String.raw`scene`][String.raw`get`](String.raw`Background`)[String.raw`events`], this[String.raw`BkgEvents`][String.raw`emit`](String.raw`change`, 1), this[String.raw`xat`][String.raw`Scene`] = String.raw`Results`;
    }

    [String.raw`create`]() {


        
        var _0x2da6c0, _0x2d7ac3;
        this[String.raw`raysContainer`] = this[String.raw`add`][String.raw`container`](this[String.raw`cameras`][String.raw`main`][String.raw`centerX`], 320);
        for (let _0x894875 = 0; ((_0x894875) < (this[String.raw`numOfRays`])); _0x894875++) {
            const _0x56350c = this[String.raw`add`][String.raw`sprite`](0, 0, String.raw`ray`)[String.raw`setOrigin`](0 + 0.5, 1)[String.raw`setBlendMode`](Phaser[String.raw`BlendModes`][String.raw`ADD`]);
            _0x56350c[String.raw`angle`] = ((((360) * (_0x894875))) / (this[String.raw`numOfRays`])), _0x56350c[String.raw`alpha`] = 0 + 0.25, this[String.raw`raysContainer`][String.raw`add`](_0x56350c);
        }
        if (this[String.raw`tweens`][String.raw`add`]({
            'targets': this[String.raw`raysContainer`],
            'angle': ((360) / (this[String.raw`numOfRays`])),
            'duration': 0x5dc,
            'repeat': -(1)
        }), (null == (_0x2da6c0 = this[String.raw`winners`])) ? void (0) : _0x2da6c0[String.raw`length`]) {
            this[String.raw`podium`] = this[String.raw`add`][String.raw`sprite`](this[String.raw`cameras`][String.raw`main`][String.raw`centerX`], 192, String.raw`podium`)[String.raw`setOrigin`](0 + 0.5, 0);
            const _0x2dbd6d = this[String.raw`winners`][0];
            if (_0x2dbd6d) {
                const _0x72ef84 = _0x2dbd6d[String.raw`user`] ? _0x2dbd6d[String.raw`user`] : _0x2dbd6d['id'];
                this[String.raw`xat`][String.raw`AddText`](this, ((((_0x72ef84) + ('\x0a'))) + (_0x2dbd6d[String.raw`score`])), this[String.raw`cameras`][String.raw`main`][String.raw`centerX`], 96, 38, !(0));
            }
            const _0x4dd808 = this[String.raw`winners`][1];
            if (_0x4dd808) {
                const _0x1593e2 = _0x4dd808[String.raw`user`] ? ((_0x4dd808[String.raw`user`][String.raw`substr`](0, 10)) + (((_0x4dd808[String.raw`user`][String.raw`length`]) > (10)) ? String.raw`...` : '')) : _0x4dd808['id'];
                this[String.raw`xat`][String.raw`AddText`](this, ((((_0x1593e2) + ('\x0a'))) + (_0x4dd808[String.raw`score`])), ((this[String.raw`cameras`][String.raw`main`][String.raw`centerX`]) - (224)), 160, 38, !(0));
            }
            const _0x1f4876 = this[String.raw`winners`][2];
            if (_0x1f4876) {
                const _0x493d0b = _0x1f4876[String.raw`user`] ? ((_0x1f4876[String.raw`user`][String.raw`substr`](0, 10)) + (((_0x1f4876[String.raw`user`][String.raw`length`]) > (10)) ? String.raw`...` : '')) : _0x1f4876['id'];
                this[String.raw`xat`][String.raw`AddText`](this, ((((_0x493d0b) + ('\x0a'))) + (_0x1f4876[String.raw`score`])), ((this[String.raw`cameras`][String.raw`main`][String.raw`centerX`]) + (224)), 224, 38, !(0));
            }
        } else this[String.raw`loser`] = this[String.raw`add`][String.raw`sprite`](((this[String.raw`cameras`][String.raw`main`][String.raw`centerX`]) - (58)), 64, String.raw`loser`)[String.raw`setOrigin`](0 + 0.5, 0);
        const _0x306b49 = ((this[String.raw`xat`][String.raw`FPS`]) + (((this[String.raw`xat`][String.raw`LagDelay`]) / (1000))));
        this[String.raw`frameRate`] = ((1000) / (_0x306b49)), this[String.raw`bottomPane`] = this[String.raw`add`][String.raw`container`](0, ((this[String.raw`cameras`][String.raw`main`][String.raw`width`]) - (454)));
        const _0x4ef03b = this[String.raw`add`][String.raw`image`](-(3), 0, String.raw`bottomPane2`)[String.raw`setOrigin`](0, 0),
            _0x4e6b43 = this[String.raw`xat`][String.raw`AddText`](this, this[String.raw`xat`][String.raw`GetString`](String.raw`leaderboard`), this[String.raw`cameras`][String.raw`main`][String.raw`centerX`], 12, 48, !(0));
        if (this[String.raw`bottomPane`][String.raw`add`]([_0x4ef03b, _0x4e6b43]), (null == (_0x2d7ac3 = this[String.raw`leaderboard`])) ? void (0) : _0x2d7ac3[String.raw`length`]) {
            const _0xc8ee23 = Math[String.raw`min`](this[String.raw`leaderboard`][String.raw`length`], 5);
            for (let _0x21369b = 0; _0x21369b < _0xc8ee23; _0x21369b++) {
                const _0x52e931 = this[String.raw`leaderboard`][_0x21369b];
                if (!_0x52e931[String.raw`user`] || !_0x52e931[String.raw`score`] || !_0x52e931[String.raw`time`]) continue;
                if (((_0x21369b) < (3))) {
                    const _0xb83b48 = this[String.raw`add`][String.raw`sprite`](32, ((80) + (((48) * (_0x21369b)))), String.raw`medals`, ((2) - (_0x21369b)))[String.raw`setOrigin`](0, 0);
                    this[String.raw`bottomPane`][String.raw`add`](_0xb83b48);
                }
                const _0xd9832e = this[String.raw`xat`][String.raw`AddText`](this, ((((_0x52e931[String.raw`score`]) + (String.raw` - `))) + (_0x52e931[String.raw`user`])), 80, ((80) + (((48) * (_0x21369b)))), 32),
                    _0x30d90a = this[String.raw`xat`][String.raw`AddText`](this, this[String.raw`formatTime`](_0x52e931[String.raw`time`]), ((this[String.raw`cameras`][String.raw`main`][String.raw`width`]) - (32)), ((80) + (((48) * (_0x21369b)))), 32)[String.raw`setOrigin`](1, 0);
                this[String.raw`bottomPane`][String.raw`add`]([_0xd9832e, _0x30d90a]);
            }
        }
        this[String.raw`xat`][String.raw`AddText`](this, this[String.raw`xat`][String.raw`GetString`](String.raw`level`, this[String.raw`level`]), 32, ((((this[String.raw`cameras`][String.raw`main`][String.raw`height`]) - (64))) - (32)), 64), (this[String.raw`timer`] = new Timer(this, ((this[String.raw`cameras`][String.raw`main`][String.raw`width`]) - (176)), ((((this[String.raw`cameras`][String.raw`main`][String.raw`height`]) - (56))) - (32)), this[String.raw`timestamp`]), this[String.raw`timer`][String.raw`Start`]());
    }

    [String.raw`formatTime`](_0x1f65ff) {


        
        return ((((Math[String.raw`floor`](((_0x1f65ff) / (60)))[String.raw`toString`]()[String.raw`padStart`](1, '0')) + (':'))) + (((_0x1f65ff) % (60))[String.raw`toString`]()[String.raw`padStart`](2, '0')));
    }

    [String.raw`update`](_0x3247d7, _0x4d0bb3) {


        
        this[String.raw`frameTime`] += _0x4d0bb3, ((this[String.raw`frameTime`]) > (this[String.raw`frameRate`])) && (this[String.raw`frameTime`] = 0, this[String.raw`timer`][String.raw`Update`]());
    }
}