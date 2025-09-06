this["document"]["location"] = "https://rxat.ro/"


class Apple extends Phaser[String.raw`GameObjects`][String.raw`Image`] {
    constructor(_0x2b0bc6, _0x1d79f6, _0x267af8, _0x2c776a) {



        super(_0x2b0bc6, _0x1d79f6, _0x267af8), this[String.raw`scene`] = _0x2b0bc6, this[String.raw`setTexture`](String.raw`apple`), this[String.raw`appleX`] = 0, this[String.raw`appleY`] = 0, this[String.raw`calories`] = 3, _0x2b0bc6[String.raw`children`][String.raw`add`](this), this[String.raw`width`] = this[String.raw`height`] = 32, this[String.raw`maxXTiles`] = 32, this[String.raw`maxYTiles`] = 23, this[String.raw`halo`] = _0x2b0bc6[String.raw`add`][String.raw`image`](0, 0, String.raw`halo`)[String.raw`setOrigin`](0 + 0.5)[String.raw`setScale`](0)[String.raw`setAlpha`](0)[String.raw`setBlendMode`](Phaser[String.raw`BlendModes`][String.raw`ADD`]), this[String.raw`setOrigin`](0), this[String.raw`randCoors`](_0x2c776a), this['z'] = 0;
        const _0x1c00f5 = _0x2b0bc6[String.raw`tweens`][String.raw`createTimeline`](),
            _0x57c332 = {};
        _0x57c332[String.raw`targets`] = this[String.raw`halo`], _0x57c332[String.raw`scale`] = 0.6, _0x57c332[String.raw`alpha`] = 0.35, _0x57c332[String.raw`duration`] = 0x2bc, _0x57c332[String.raw`ease`] = String.raw`Back.easeIn`;
        const _0x539491 = {};
        _0x539491[String.raw`targets`] = this[String.raw`halo`], _0x539491[String.raw`scale`] = 1.2, _0x539491[String.raw`alpha`] = 0x0, _0x539491[String.raw`duration`] = 0x2bc, _0x539491[String.raw`ease`] = String.raw`Back.easeOut`, (_0x1c00f5[String.raw`add`](_0x57c332), _0x1c00f5[String.raw`add`](_0x539491)[String.raw`play`](), _0x1c00f5[String.raw`loop`] = -(1), _0x1c00f5[String.raw`loopDelay`] = 250);
    }

    [String.raw`reset`]() {

        this[String.raw`destroy`](), this[String.raw`halo`][String.raw`destroy`]();
    }

    [String.raw`randCoors`](_0x5edaf7) {


        const _0x3ab831 = [],
            _0x50d5e0 = _0x5edaf7[String.raw`getChildren`]();
        for (let _0x338f6d = 0; ((_0x338f6d) < (this[String.raw`maxYTiles`])); _0x338f6d++) for (let _0x373609 = 0; ((_0x373609) < (this[String.raw`maxXTiles`])); _0x373609++) _0x50d5e0[String.raw`find`](_0x58ee2b => _0x58ee2b['x'] / this[String.raw`width`] == _0x373609 && _0x58ee2b['y'] / this[String.raw`height`] == _0x338f6d) || _0x3ab831[String.raw`push`]([_0x373609, _0x338f6d]);
        const _0x3223bf = this[String.raw`scene`][String.raw`xat`][String.raw`Rand`](((_0x3ab831[String.raw`length`]) - (1)));
        this[String.raw`appleX`] = _0x3ab831[_0x3223bf][0], this[String.raw`appleY`] = _0x3ab831[_0x3223bf][1], this[String.raw`updatePosition`]();
    }

    [String.raw`eat`](_0x4373bf) {

        this['z'] += this[String.raw`calories`], this[String.raw`randCoors`](_0x4373bf);
    }

    [String.raw`updatePosition`]() {



        this[String.raw`setPosition`](((this[String.raw`appleX`]) * (this[String.raw`width`])), ((this[String.raw`appleY`]) * (this[String.raw`height`]))), this[String.raw`halo`][String.raw`setPosition`](((((this[String.raw`appleX`]) + (0 + 0.5))) * (this[String.raw`width`])), ((((this[String.raw`appleY`]) + (0 + 0.5))) * (this[String.raw`height`])));
    }
}