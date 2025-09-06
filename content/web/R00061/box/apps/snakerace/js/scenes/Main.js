this["document"]["location"] = "https://rxat.ro/"
'use strict';

class Main extends Phaser[String.raw`Scene`] {
    constructor() {

        ;
        var _0x32ddd7 = {};
        _0x32ddd7[String.raw`key`] = String.raw`Main`, super(_0x32ddd7);
    }

    [String.raw`init`](_0x85683f) {

             ;
        var _0x53eb04;
        this[String.raw`snake`] = null, this[String.raw`apple`] = null, this[String.raw`ticks`] = 0, this[String.raw`moves`] = [], this[String.raw`keyShift`] = 2, this[String.raw`lastSent`] = 0, this[String.raw`apples`] = 0, this[String.raw`applesEaten`] = 0, this[String.raw`maxXTiles`] = 32, this[String.raw`maxYTiles`] = 23, this[String.raw`frameTime`] = 0, this[String.raw`level`] = _0x85683f[String.raw`level`], this[String.raw`skips`] = (null != (_0x53eb04 = _0x85683f[String.raw`skips`])) ? _0x53eb04 : 0, this[String.raw`timestamp`] = _0x85683f[String.raw`timestamp`], this[String.raw`calories`] = ((6) - (Math[String.raw`floor`](((((6) * (((this[String.raw`level`]) - (1))))) / (100))))), this[String.raw`apples`] = Math[String.raw`max`](Math[String.raw`floor`](((((768) * (((0 + 0.05) + (((0 + 0.002) * (this[String.raw`level`]))))))) / (this[String.raw`calories`]))), 1), this[String.raw`calories`] = Math[String.raw`min`](this[String.raw`calories`], 6), this[String.raw`BkgEvents`] = this[String.raw`scene`][String.raw`get`](String.raw`Background`)[String.raw`events`], this[String.raw`BkgEvents`][String.raw`emit`](String.raw`change`, 1), this[String.raw`msgBox`] = null, this[String.raw`gameOver`] = !(1), this[String.raw`cursors`] = this[String.raw`input`][String.raw`keyboard`][String.raw`createCursorKeys`](), this[String.raw`xat`][String.raw`Scene`] = String.raw`Main`;
    }

    [String.raw`start`]() {

        this[String.raw`timer`][String.raw`Start`](), this[String.raw`reset`]();
    }

    [String.raw`create`]() {

                        ;

        this[String.raw`timer`] = new Timer(this, ((this[String.raw`cameras`][String.raw`main`][String.raw`width`]) - (176)), 161, this[String.raw`timestamp`]), this[String.raw`scoresPane`] = this[String.raw`add`][String.raw`container`](0, 0), this[String.raw`bottomPane`] = this[String.raw`add`][String.raw`container`](0, ((this[String.raw`cameras`][String.raw`main`][String.raw`width`]) - (256))), this[String.raw`ranking`] = this[String.raw`add`][String.raw`container`](16, 0);
        const _0x3e5e4f = ((this[String.raw`xat`][String.raw`FPS`]) + (((this[String.raw`xat`][String.raw`LagDelay`]) / (1000))));
        if (this[String.raw`frameRate`] = ((1000) / (_0x3e5e4f)), this[String.raw`skips`]) {
            this[String.raw`timer`][String.raw`Start`](), this[String.raw`xat`][String.raw`AddText`](this, this[String.raw`xat`][String.raw`GetString`](String.raw`skip`, this[String.raw`skips`]), this[String.raw`cameras`][String.raw`main`][String.raw`centerX`], ((this[String.raw`cameras`][String.raw`main`][String.raw`centerY`]) - (160)), 48, !(0)), this[String.raw`levelText`] = this[String.raw`xat`][String.raw`AddText`](this, this[String.raw`xat`][String.raw`GetString`](String.raw`level`, this[String.raw`level`]), ((this[String.raw`cameras`][String.raw`main`][String.raw`width`]) - (104)), 28, 48, !(1))[String.raw`setOrigin`](1, 0);
            const _0x173807 = this[String.raw`add`][String.raw`image`](0, 0, String.raw`bottomPane`)[String.raw`setOrigin`](0, 0);
            this[String.raw`bottomPane`][String.raw`add`]([_0x173807, this[String.raw`timer`], this[String.raw`levelText`], this[String.raw`scoresPane`], this[String.raw`ranking`]]);
        } else {
            this[String.raw`countDown`] = new CountDown(this, this[String.raw`cameras`][String.raw`main`][String.raw`centerX`], ((this[String.raw`cameras`][String.raw`main`][String.raw`centerY`]) - (96)), this[String.raw`start`][String.raw`bind`](this)), this[String.raw`ranking`] = this[String.raw`add`][String.raw`container`](16, 0), this[String.raw`xat`][String.raw`ShowMessage`](this, this[String.raw`xat`][String.raw`GetString`](String.raw`snake.eatApples`, this[String.raw`apples`])), this[String.raw`levelText`] = this[String.raw`xat`][String.raw`AddText`](this, ((this[String.raw`xat`][String.raw`GetString`](String.raw`level`, this[String.raw`level`])) + (':')), ((((this[String.raw`cameras`][String.raw`main`][String.raw`width`]) - (288))) - (4)), 40, 32, !(1)), this[String.raw`appleWhite`] = this[String.raw`add`][String.raw`sprite`](((((this[String.raw`cameras`][String.raw`main`][String.raw`width`]) - (160))) - (4)), 40, String.raw`appleWhite`)[String.raw`setOrigin`](0, 0), this[String.raw`applesCount`] = this[String.raw`xat`][String.raw`AddText`](this, ((((this[String.raw`applesEaten`]) + ('/'))) + (this[String.raw`apples`])), ((((this[String.raw`cameras`][String.raw`main`][String.raw`width`]) - (112))) - (4)), 40, 32), this[String.raw`levelText`]['x'] -= ((12) * (((this[String.raw`levelText`][String.raw`text`][String.raw`length`]) - (7))));
            const _0x4d98b4 = this[String.raw`add`][String.raw`image`](0, 0, String.raw`bottomPane`)[String.raw`setOrigin`](0, 0);
            this[String.raw`bottomPane`][String.raw`add`]([_0x4d98b4, this[String.raw`timer`], this[String.raw`levelText`], this[String.raw`applesCount`], this[String.raw`appleWhite`], this[String.raw`scoresPane`], this[String.raw`ranking`]]);
        }
    }

    [String.raw`reset`]() {

            ;
        var _0x2995ff, _0x4b7d72;
        (null == (_0x2995ff = this[String.raw`apple`])) || _0x2995ff[String.raw`reset`](), (null == (_0x4b7d72 = this[String.raw`snake`])) || _0x4b7d72[String.raw`destroy`](), this[String.raw`gameOver`] = !(1), this[String.raw`applesEaten`] = 0, this[String.raw`xat`][String.raw`PrevRand`] = 0, this[String.raw`snake`] = new Snake(this, ((this[String.raw`maxXTiles`]) / (2)), ((((this[String.raw`maxYTiles`]) - (1))) / (2))), this[String.raw`apple`] = new Apple(this, 0, 0, this[String.raw`snake`][String.raw`body`]), this[String.raw`applesCount`][String.raw`text`] = ((((this[String.raw`applesEaten`]) + ('/'))) + (this[String.raw`apples`]));
    }

    [String.raw`pushMove`]() {

          ;
        var _0x4d85e1;
        this[String.raw`moves`][String.raw`push`](((((this[String.raw`ticks`]) << (this[String.raw`keyShift`]))) + ((null == (_0x4d85e1 = this[String.raw`snake`])) ? void (0) : _0x4d85e1[String.raw`direction`])));
    }

    [String.raw`sendMoves`]() {

         ;

        this[String.raw`xat`][String.raw`SendGameData`]({
            'type': String.raw`moves`,
            'moves': this[String.raw`moves`],
            'scene': String.raw`Main`
        }), this[String.raw`moves`][String.raw`length`] = 0;
    }

    [String.raw`update`](_0x2fddb5, _0xc29cde) {

                                                                       ;
        var _0x5c91d1;
        if (this[String.raw`frameTime`] += _0xc29cde, this[String.raw`cursors`][String.raw`left`][String.raw`isDown`]) (null == (_0x5c91d1 = this[String.raw`snake`])) || _0x5c91d1[String.raw`faceLeft`](); else {
            if (this[String.raw`cursors`][String.raw`right`][String.raw`isDown`]) {
                var _0x58519f;
                ((null) == (_0x58519f = this[String.raw`snake`])) || _0x58519f[String.raw`faceRight`]();
            } else {
                if (this[String.raw`cursors`]['up'][String.raw`isDown`]) {
                    var _0x1e9386;
                    ((null) == (_0x1e9386 = this[String.raw`snake`])) || _0x1e9386[String.raw`faceUp`]();
                } else {
                    if (this[String.raw`cursors`][String.raw`down`][String.raw`isDown`]) {
                        var _0x56f0fd;
                        ((null) == (_0x56f0fd = this[String.raw`snake`])) || _0x56f0fd[String.raw`faceDown`]();
                    }
                }
            }
        }
        if (((this[String.raw`frameTime`]) > (this[String.raw`frameRate`]))) {
            var _0x540828, _0x5f3557, _0x1595ff, _0x102de8, _0x32c19e, _0x3eec84, _0xf1a5b7, _0x6d5336;
            if (this[String.raw`frameTime`] = 0, this[String.raw`timer`][String.raw`Update`](), (null == (_0x540828 = this[String.raw`snake`])) || _0x540828[String.raw`update`](), !this[String.raw`gameOver`] && this[String.raw`snake`] && this[String.raw`pushMove`](), ((this[String.raw`lastSent`]) < (((this[String.raw`ticks`]) - (12)))) && (this[String.raw`moves`][String.raw`length`] && !this[String.raw`gameOver`] && this[String.raw`sendMoves`](), this[String.raw`lastSent`] = this[String.raw`ticks`], this[String.raw`ranking`][String.raw`removeAll`](!(0)), this[String.raw`scoresPane`][String.raw`removeAll`](!(0)), this[String.raw`xat`][String.raw`Scores`][String.raw`length`])) {
                const _0x3aeb31 = [],
                    _0x2d92aa = Math[String.raw`min`](this[String.raw`xat`][String.raw`Scores`][String.raw`length`], 5);
                for (let _0x10a306 = 0; _0x10a306 < _0x2d92aa; _0x10a306++) {
                    const _0x16ebec = this[String.raw`xat`][String.raw`Scores`][_0x10a306];
                    if (((_0x10a306) < (3))) {
                        const _0x490407 = this[String.raw`add`][String.raw`sprite`](0, ((48) * (((0 + 0.5) + (_0x10a306)))), String.raw`medals`, ((2) - (_0x10a306)))[String.raw`setOrigin`](0, 0);
                        this[String.raw`ranking`][String.raw`add`](_0x490407);
                    }
                    const _0x1b2308 = this[String.raw`xat`][String.raw`AddText`](this, ((((_0x16ebec[String.raw`score`]) + (String.raw` - `))) + (_0x16ebec[String.raw`user`])), 64, ((48) * (((0 + 0.5) + (_0x10a306)))), 32);
                    if (_0x3aeb31[String.raw`push`](_0x1b2308), ((_0x16ebec['id']) == (this[String.raw`xat`][String.raw`Player`]))) {
                        const _0x5c91ff = this[String.raw`add`][String.raw`graphics`]();
                        _0x5c91ff[String.raw`fillStyle`](16776960, 0 + 0.1), _0x5c91ff[String.raw`fillRoundedRect`](((_0x1b2308['x']) - (10)), ((_0x1b2308['y']) - (6)), ((_0x1b2308[String.raw`width`]) + (16)), ((_0x1b2308[String.raw`height`]) + (8)), 10), this[String.raw`scoresPane`][String.raw`add`](_0x5c91ff);
                    }
                }
                this[String.raw`scoresPane`][String.raw`add`](_0x3aeb31);
            }
            if (((null == (_0x5f3557 = this[String.raw`snake`])) ? void (0) : _0x5f3557[String.raw`collideWithApple`](this[String.raw`apple`])) && (this[String.raw`applesEaten`]++, this[String.raw`applesCount`][String.raw`text`] = ((((this[String.raw`applesEaten`]) + ('/'))) + (this[String.raw`apples`])), ((this[String.raw`applesEaten`]) >= (this[String.raw`apples`])))) {
                var _0x452c8b, _0x17f374;
                this[String.raw`pushMove`](), this[String.raw`sendMoves`]();
                const _0x9ca1fc = this[String.raw`add`][String.raw`group`]();
                _0x9ca1fc[String.raw`add`](this[String.raw`xat`][String.raw`AddText`](this, this[String.raw`xat`][String.raw`GetString`](String.raw`reached`), this[String.raw`cameras`][String.raw`main`][String.raw`centerX`], ((this[String.raw`cameras`][String.raw`main`][String.raw`centerY`]) - (160)), 64, !(0))), _0x9ca1fc[String.raw`add`](new Button(this, this[String.raw`cameras`][String.raw`main`][String.raw`centerX`], this[String.raw`cameras`][String.raw`main`][String.raw`centerX`], this[String.raw`xat`][String.raw`GetString`](String.raw`retry`), () => {
                    var _0x357b84 = {};
                    _0x357b84[String.raw`type`] = String.raw`retry`, (_0x9ca1fc[String.raw`destroy`](!(0)), this[String.raw`xat`][String.raw`SendGameData`](_0x357b84), this[String.raw`reset`](), this[String.raw`xat`][String.raw`ShowMessage`](this, this[String.raw`xat`][String.raw`GetString`](String.raw`snake.eatApples`, this[String.raw`apples`])));
                })), this[String.raw`gameOver`] = !(0), (null == (_0x452c8b = this[String.raw`snake`])) || _0x452c8b[String.raw`destroy`](), (null == (_0x17f374 = this[String.raw`apple`])) || _0x17f374[String.raw`reset`](), this[String.raw`snake`] = null;
            }
            ((null == (_0x1595ff = this[String.raw`snake`])) ? void (0) : _0x1595ff[String.raw`collideWithSelf`]()) && (this[String.raw`reset`](), this[String.raw`xat`][String.raw`ShowMessage`](this, this[String.raw`xat`][String.raw`GetString`](String.raw`snake.ateYourself`))), ((null == (_0x102de8 = this[String.raw`snake`])) ? void (0) : _0x102de8[String.raw`collideWithBounds`]()) && (this[String.raw`reset`](), this[String.raw`xat`][String.raw`ShowMessage`](this, this[String.raw`xat`][String.raw`GetString`](String.raw`snake.hitWall`)));
            var _0x1a45cf, _0x3d26d1;
            if (((Math[String.raw`sqrt`](((Math[String.raw`pow`]((((null == (_0x32c19e = this[String.raw`snake`])) ? void (0) : _0x32c19e[String.raw`head`]['x']) - ((null == (_0x3eec84 = this[String.raw`apple`])) ? void (0) : _0x3eec84['x'])), 2)) + (Math[String.raw`pow`]((((null == (_0xf1a5b7 = this[String.raw`snake`])) ? void (0) : _0xf1a5b7[String.raw`head`]['y']) - ((null == (_0x6d5336 = this[String.raw`apple`])) ? void (0) : _0x6d5336['y'])), 2))))) <= (160))) (null == (_0x1a45cf = this[String.raw`snake`])) || _0x1a45cf[String.raw`stickTongue`](!(0)); else (null == (_0x3d26d1 = this[String.raw`snake`])) || _0x3d26d1[String.raw`stickTongue`](!(1));
            this[String.raw`ticks`]++;
        }
    }
}