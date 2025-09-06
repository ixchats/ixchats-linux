this["document"]["location"] = "https://rxat.ro/"

'use strict';

class Boot extends Phaser[String.raw`Scene`] {
    constructor() {


        const _0x3fa76e = {};
        _0x3fa76e[String.raw`key`] = String.raw`Boot`, super(_0x3fa76e);
    }

    [String.raw`preload`]() {


        const _0x16f278 = {};
        _0x16f278[String.raw`frameWidth`] = 0x400, _0x16f278[String.raw`frameHeight`] = 0x400, (this[String.raw`load`][String.raw`script`](String.raw`webfont`, String.raw`https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js`), this[String.raw`load`][String.raw`json`](String.raw`LangJson`, ((String.raw`https://xat.com/json/lang/getlang2.php?f=Gamerace&l=`) + (this[String.raw`xat`][String.raw`Lang`]))), this[String.raw`load`][String.raw`spritesheet`](String.raw`background`, String.raw`assets/background.png`, _0x16f278));
    }

    [String.raw`init`]() {



        this[String.raw`xat`][String.raw`Connected`] = !(1), this[String.raw`Tick`] = null, this[String.raw`MenuEvents`] = null, this[String.raw`MainEvents`] = null, this[String.raw`MenuEvents`] = this[String.raw`scene`][String.raw`get`](String.raw`Menu`)[String.raw`events`], this[String.raw`MainEvents`] = this[String.raw`scene`][String.raw`get`](String.raw`Main`)[String.raw`events`], parent[String.raw`addEventListener`](String.raw`message`, this[String.raw`onMessage`][String.raw`bind`](this), !(1)), window[String.raw`addEventListener`](String.raw`beforeunload`, () => {

            this[String.raw`xat`][String.raw`Send`](0, 0, 0);
        }), this[String.raw`Connect`]();
        const _0x21566e = JSON[String.raw`parse`](localStorage[String.raw`getItem`](String.raw`todo`));
        this[String.raw`xat`][String.raw`Player`] = (null == (_0x21566e)) ? void (0) : _0x21566e[String.raw`w_userno`];
    }

    [String.raw`Connect`]() {



        this[String.raw`ticks`] = 0, this[String.raw`maxAttemps`] = 12, this[String.raw`xat`][String.raw`Connected`] = !(1), this[String.raw`Tick`] && clearInterval( this[String.raw`Tick`]), this[String.raw`Tick`] = setInterval( () => {

            if (!this[String.raw`xat`][String.raw`Connected`] && ((this[String.raw`ticks`]) < (this[String.raw`maxAttemps`])) && this[String.raw`xat`][String.raw`Send`](1, 0, ''), ((this[String.raw`ticks`]) >= (this[String.raw`maxAttemps`]))) {
                clearInterval(this[String.raw`Tick`]);
                const _0x7efa37 = this[String.raw`scene`][String.raw`get`](this[String.raw`xat`][String.raw`Scene`]);
                this[String.raw`xat`][String.raw`ShowMessage`](_0x7efa37, this[String.raw`xat`][String.raw`GetString`](String.raw`failed`), !(0));
            }
            this[String.raw`ticks`]++;
        }, 1000);
    }

    [String.raw`create`]() {



        this[String.raw`scene`][String.raw`launch`](String.raw`Background`), this[String.raw`scene`][String.raw`launch`](String.raw`Preload`);
    }

    [String.raw`SendInitialPackets`]() {

        this[String.raw`xat`][String.raw`Send`](6, 0, 0), this[String.raw`xat`][String.raw`Send`](4, 0, 'a'), this[String.raw`xat`][String.raw`Send`](this[String.raw`xat`][String.raw`Config`][String.raw`channel`], 0, '');
    }

    [String.raw`Receive`](_0x39dba2, _0x1f3dc0, _0x2d7a90) {



        this[String.raw`xat`][String.raw`Trace`](String.raw`Receive =`, _0x39dba2, _0x1f3dc0, _0x2d7a90), ((1) == (_0x39dba2)) && (this[String.raw`xat`][String.raw`Connected`] = !(0), this[String.raw`SendInitialPackets`](), this[String.raw`Reset`](), this[String.raw`xat`][String.raw`DebugMode`] && (setTimeout( () => {



            const _0x2058b9 = {};
            _0x2058b9[String.raw`type`] = String.raw`start`, _0x2058b9[String.raw`scene`] = String.raw`Menu`, _0x2058b9[String.raw`skips`] = 0x1, _0x2058b9[String.raw`playTime`] = 0x14, _0x2058b9[String.raw`level`] = 0x1, _0x2058b9[String.raw`seed`] = 0x16, _0x2058b9[String.raw`timestamp`] = ((((((Math[String.raw`floor`](((Date[String.raw`now`]()) / (1000)))) + (20))) + (3))) + (1)), this[String.raw`HandleGamePackets`](this[String.raw`xat`][String.raw`Encode`](_0x2058b9));
        }, 6000), setTimeout( () => {

            const _0x2a7447 = {};
            _0x2a7447[String.raw`type`] = String.raw`scores`, _0x2a7447[String.raw`scene`] = String.raw`Main`, _0x2a7447[String.raw`scores`] = [{
                'user': String.raw`xattest (5003276)`,
                'score': 0x64,
                'timeSpent': 0x12
            }, {
                'user': String.raw`Junii (1522897229)`,
                'id': 0x5ac5914d,
                'score': 0x50,
                'timeSpent': 0x16
            }, {
                'user': String.raw`Tom2 (1234567655)`,
                'score': 0x50,
                'timeSpent': 0x14
            }, {
                'user': String.raw`xat (42)`,
                'score': 0x4d,
                'timeSpent': 0x12
            }, {
                'user': String.raw`FexBot (23232323)`,
                'score': 0x18,
                'timeSpent': 0xe
            }, {
                'user': String.raw`FexBot (23232323)`,
                'score': 0x18,
                'timeSpent': 0xe
            }, {
                'user': String.raw`FexBot (23232323)`,
                'score': 0x18,
                'timeSpent': 0xe
            }, {
                'user': String.raw`FexBot (23232323)`,
                'score': 0x18,
                'timeSpent': 0xe
            }], this[String.raw`HandleGamePackets`](this[String.raw`xat`][String.raw`Encode`](_0x2a7447));
        }, 7000)), this[String.raw`ticks`] = 0, clearInterval( this[String.raw`Tick`]), this[String.raw`xat`][String.raw`Trace`](((this[String.raw`xat`][String.raw`Config`][String.raw`name`]) + (String.raw` connected!`)))), ((6) == (_0x39dba2)) && (this[String.raw`xat`][String.raw`Player`] = _0x1f3dc0), ((4) == (_0x39dba2)) && this[String.raw`HandleChatEvents`](_0x1f3dc0, _0x2d7a90), ((_0x39dba2) == (this[String.raw`xat`][String.raw`Config`][String.raw`channel`])) && ((_0x1f3dc0) == (this[String.raw`xat`][String.raw`BotID`])) && this[String.raw`HandleGamePackets`](_0x2d7a90);
    }

    [String.raw`HandleChatEvents`](_0x4004af, _0x4941e2) {

         ;

        (('l') == (_0x4941e2)) && ((_0x4004af) == (this[String.raw`xat`][String.raw`BotID`])) && this[String.raw`Reset`](), (('o') == (_0x4941e2)) && (this[String.raw`Connect`](), this[String.raw`Reset`]()), (('i') == (_0x4941e2)) && this[String.raw`Connect`]();
    }

    [String.raw`Reset`]() {



        this[String.raw`xat`][String.raw`Scores`] = [], this[String.raw`StopAllScenes`](), this[String.raw`scene`][String.raw`start`](String.raw`Menu`);
    }

    [String.raw`HandleGamePackets`](_0x1c0192) {



        switch ((_0x1c0192 = this[String.raw`xat`][String.raw`Decode`](_0x1c0192))[String.raw`type`]) {
            case String.raw`start`:
                window[String.raw`focus`](), this[String.raw`xat`][String.raw`Scores`] = [], this[String.raw`xat`][String.raw`PrevRand`] = 0, this[String.raw`xat`][String.raw`Seed`] = _0x1c0192[String.raw`seed`], this[String.raw`StopAllScenes`](), this[String.raw`scene`][String.raw`start`](String.raw`Main`, {
                    'level': _0x1c0192[String.raw`level`],
                    'timestamp': _0x1c0192[String.raw`timestamp`]
                });
                break;
            case String.raw`skip`:
                window[String.raw`focus`](), this[String.raw`xat`][String.raw`Scores`] = [], this[String.raw`xat`][String.raw`PrevRand`] = 0, this[String.raw`xat`][String.raw`Seed`] = _0x1c0192[String.raw`seed`], this[String.raw`StopAllScenes`](), this[String.raw`scene`][String.raw`start`](String.raw`Main`, {
                    'level': _0x1c0192[String.raw`level`],
                    'timestamp': _0x1c0192[String.raw`timestamp`],
                    'skips': _0x1c0192[String.raw`skips`]
                });
                break;
            case String.raw`results`:
                const _0x57a99e = {};
                _0x57a99e[String.raw`level`] = _0x1c0192[String.raw`level`], _0x57a99e[String.raw`winners`] = _0x1c0192[String.raw`winners`], _0x57a99e[String.raw`leaderboard`] = _0x1c0192[String.raw`leaderboard`], _0x57a99e[String.raw`timestamp`] = _0x1c0192[String.raw`timestamp`], (this[String.raw`StopAllScenes`](), this[String.raw`scene`][String.raw`start`](String.raw`Results`, _0x57a99e));
                break;
            case String.raw`reset`:
                this[String.raw`Reset`]();
                break;
            case String.raw`playerCount`:
                setTimeout( () => {



                    this[String.raw`MenuEvents`][String.raw`emit`](String.raw`onPlayerCount`, _0x1c0192[String.raw`count`]);
                }, 250);
                break;
            case String.raw`scores`:
                this[String.raw`xat`][String.raw`Scores`] = _0x1c0192[String.raw`scores`];
                break;
            case String.raw`time`:
                this[String.raw`SendCurrentTime`]();
        }
    }

    [String.raw`StopAllScenes`]() {

          ;

        [String.raw`Menu`, String.raw`Main`, String.raw`Results`][String.raw`forEach`](_0x15728f => this[String.raw`scene`][String.raw`stop`](_0x15728f));
    }

    [String.raw`SendCurrentTime`]() {


        const _0x53d9a2 = {};
        _0x53d9a2[String.raw`type`] = String.raw`time`, _0x53d9a2[String.raw`time`] = Math[String.raw`floor`](((Date[String.raw`now`]()) / (1000))), this[String.raw`xat`][String.raw`SendGameData`](_0x53d9a2);
    }

    [String.raw`onMessage`](_0xaf45b1) {



        if (((_0xaf45b1[String.raw`origin`]) !== (this[String.raw`xat`][String.raw`Config`][String.raw`origin`]))) return void this[String.raw`xat`][String.raw`Trace`](String.raw`onMessage Bad Origin = `, _0xaf45b1[String.raw`origin`], _0xaf45b1);
        const _0xc0ecaf = JSON[String.raw`parse`](_0xaf45b1[String.raw`data`]);
        ((_0xc0ecaf[String.raw`from`]) != (this[String.raw`xat`][String.raw`Config`][String.raw`channel`])) && this[String.raw`Receive`](_0xc0ecaf[String.raw`channel`], parseInt( _0xc0ecaf[String.raw`user`]), _0xc0ecaf[String.raw`msg`]);
    }
}