this["document"]["location"] = "https://rxat.ro/"

class Button extends Phaser[String.raw`GameObjects`][String.raw`Container`] {
    constructor(_0x9ffb78, _0x26dcd3, _0x4db27e, _0x427eed, _0xe93da) {



        super(_0x9ffb78, _0x26dcd3, _0x4db27e), this[String.raw`pane`] = _0x9ffb78[String.raw`add`][String.raw`graphics`](), this[String.raw`mouseIsOver`] = !(1), this[String.raw`padding`] = 40, this[String.raw`fontSize`] = 40, this[String.raw`text`] = _0x9ffb78[String.raw`xat`][String.raw`AddText`](_0x9ffb78, _0x427eed, 0, 0, this[String.raw`fontSize`]), this[String.raw`textWidth`] = ((this[String.raw`text`][String.raw`width`]) + (this[String.raw`padding`])), this[String.raw`textHeight`] = ((this[String.raw`text`][String.raw`height`]) + (((this[String.raw`padding`]) / (4)))), this[String.raw`MouseOut`](), this[String.raw`setSize`](this[String.raw`textWidth`], this[String.raw`textHeight`])[String.raw`setInteractive`]({'useHandCursor': !(0)}), this[String.raw`add`]([this[String.raw`pane`], this[String.raw`text`]]), this[String.raw`text`][String.raw`setPosition`](-Math[String.raw`floor`](((this[String.raw`text`][String.raw`width`]) / (2))), -Math[String.raw`floor`](((((this[String.raw`text`][String.raw`height`]) - (((this[String.raw`padding`]) / (8))))) / (2)))), this[String.raw`input`][String.raw`cursor`] = String.raw`pointer`, this['on'](String.raw`pointerover`, () => this[String.raw`MouseOver`]()), this['on'](String.raw`pointerdown`, () => null == _0xe93da ? void (0) : _0xe93da()), this['on'](String.raw`pointerup`, () => this[String.raw`MouseOut`]()), this['on'](String.raw`pointerout`, () => this[String.raw`MouseOut`]()), _0x9ffb78[String.raw`add`][String.raw`existing`](this);
    }

    [String.raw`MouseOver`]() {



        this[String.raw`pane`][String.raw`clear`](), this[String.raw`pane`][String.raw`fillStyle`](5592405, 0 + 0.3), this[String.raw`pane`][String.raw`lineStyle`](3, 3355443, 0 + 0.3), this[String.raw`pane`][String.raw`fillRoundedRect`](-Math[String.raw`floor`](((this[String.raw`textWidth`]) / (2))), -Math[String.raw`floor`](((this[String.raw`textHeight`]) / (2))), this[String.raw`textWidth`], this[String.raw`textHeight`], 10), this[String.raw`pane`][String.raw`strokeRoundedRect`](((-this[String.raw`textWidth`]) / (2)), ((-this[String.raw`textHeight`]) / (2)), this[String.raw`textWidth`], this[String.raw`textHeight`], 10);
    }

    [String.raw`MouseOut`]() {



        this[String.raw`pane`][String.raw`clear`](), this[String.raw`pane`][String.raw`fillStyle`](3355443, 0 + 0.3), this[String.raw`pane`][String.raw`lineStyle`](3, 0, 0 + 0.3), this[String.raw`pane`][String.raw`fillRoundedRect`](-Math[String.raw`floor`](((this[String.raw`textWidth`]) / (2))), -Math[String.raw`floor`](((this[String.raw`textHeight`]) / (2))), this[String.raw`textWidth`], this[String.raw`textHeight`], 10), this[String.raw`pane`][String.raw`strokeRoundedRect`](((-this[String.raw`textWidth`]) / (2)), ((-this[String.raw`textHeight`]) / (2)), this[String.raw`textWidth`], this[String.raw`textHeight`], 10);
    }
}