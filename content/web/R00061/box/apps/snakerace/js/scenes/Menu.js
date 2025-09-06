this["document"]["location"] = "https://rxat.ro/"
'use strict';

class Menu extends Phaser[String.raw`Scene`] {
    constructor() {

        ;
        var _0x16eeae = {};
        _0x16eeae[String.raw`key`] = String.raw`Menu`, super(_0x16eeae);
    }

    [String.raw`init`]() {

           ;

        this[String.raw`events`]['on'](String.raw`onPlayerCount`, this[String.raw`onPlayerCount`], this), this[String.raw`BootEvents`] = this[String.raw`scene`][String.raw`get`](String.raw`Boot`)[String.raw`events`], this[String.raw`BkgEvents`] = this[String.raw`scene`][String.raw`get`](String.raw`Background`)[String.raw`events`], this[String.raw`xat`][String.raw`Scene`] = String.raw`Menu`;
    }

    [String.raw`create`]() {

           ;

        this[String.raw`BkgEvents`][String.raw`emit`](String.raw`change`, 0), this[String.raw`waiting`] = this[String.raw`xat`][String.raw`AddText`](this, this[String.raw`xat`][String.raw`GetString`](String.raw`waiting`), this[String.raw`cameras`][String.raw`main`][String.raw`centerX`], ((this[String.raw`cameras`][String.raw`main`][String.raw`centerY`]) + (210)), 42, !(0)), this[String.raw`playerCount`] = this[String.raw`xat`][String.raw`AddText`](this, this[String.raw`xat`][String.raw`GetString`](String.raw`numberOfPlayers`), this[String.raw`cameras`][String.raw`main`][String.raw`centerX`], ((this[String.raw`cameras`][String.raw`main`][String.raw`centerY`]) + (300)), 42, !(0)), this[String.raw`onPlayerCount`](1), this[String.raw`countTime`] = 1000, this[String.raw`startCount`] = performance[String.raw`now`](), this[String.raw`tweens`][String.raw`addCounter`]({
            'from': 0x0,
            'to': this[String.raw`countTime`],
            'duration': this[String.raw`countTime`],
            'onComplete': () => {

                this[String.raw`xat`][String.raw`LagDelay`] = ((((performance[String.raw`now`]()) - (this[String.raw`startCount`]))) - (this[String.raw`countTime`]));
            }
        }), this[String.raw`xat`][String.raw`Connected`] || this[String.raw`xat`][String.raw`ShowMessage`](this, this[String.raw`xat`][String.raw`GetString`](String.raw`connecting`), !(0));
    }

    [String.raw`onPlayerCount`](_0x48cdd6) {

        ;

        this[String.raw`playerCount`][String.raw`setText`](this[String.raw`xat`][String.raw`GetString`](String.raw`numberOfPlayers`, _0x48cdd6));
    }
}