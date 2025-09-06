this["document"]["location"] = "https://rxat.ro/"


class CountDown {
    constructor(_0x1ea99b, _0x2d463b, _0x1bafc4, _0x5b86e3) {


        var _0x2d6fac = {};
        _0x2d6fac[String.raw`volume`] = 0.5, (this[String.raw`scene`] = _0x1ea99b, this[String.raw`callback`] = _0x5b86e3, this[String.raw`fps`] = ((_0x1ea99b[String.raw`xat`][String.raw`FPS`]) + (((_0x1ea99b[String.raw`xat`][String.raw`LagDelay`]) / (1000)))), this[String.raw`frameRate`] = ((1000) / (this[String.raw`fps`])), this[String.raw`scene`][String.raw`anims`][String.raw`create`]({
            'key': String.raw`expand`,
            'frames': this[String.raw`scene`][String.raw`anims`][String.raw`generateFrameNumbers`](String.raw`expand`),
            'frameRate': this[String.raw`fps`]
        }), this[String.raw`countSound`] = this[String.raw`scene`][String.raw`sound`][String.raw`add`](String.raw`countSound`, _0x2d6fac), this[String.raw`count1`] = this[String.raw`scene`][String.raw`add`][String.raw`sprite`](_0x2d463b, _0x1bafc4, String.raw`count1`)[String.raw`setAlpha`](0), this[String.raw`count2`] = this[String.raw`scene`][String.raw`add`][String.raw`sprite`](_0x2d463b, _0x1bafc4, String.raw`count2`)[String.raw`setAlpha`](0), this[String.raw`count3`] = this[String.raw`scene`][String.raw`add`][String.raw`sprite`](_0x2d463b, _0x1bafc4, String.raw`count3`)[String.raw`setAlpha`](0), this[String.raw`expand`] = this[String.raw`scene`][String.raw`add`][String.raw`sprite`](_0x2d463b, _0x1bafc4, String.raw`expand`), this[String.raw`countTimeline`] = this[String.raw`scene`][String.raw`tweens`][String.raw`createTimeline`](), this[String.raw`countTimeline`][String.raw`totalDuration`] = 500, this[String.raw`countTimeline`][String.raw`add`]({
            'targets': this[String.raw`count3`],
            'alpha': 0x0,
            'scale': 0.2,
            'angle': 0x41,
            'duration': this[String.raw`frameRate`],
            'onStart': () => {

                this[String.raw`countSound`][String.raw`play`](), this[String.raw`expand`][String.raw`play`](String.raw`expand`);
            }
        })[String.raw`add`]({
            'targets': this[String.raw`count3`],
            'alpha': 0x1,
            'scale': 0.2,
            'angle': 0x41,
            'duration': this[String.raw`frameRate`]
        })[String.raw`add`]({
            'targets': this[String.raw`count3`],
            'scale': 0x1,
            'angle': 14.8,
            'duration': ((3) * (this[String.raw`frameRate`]))
        })[String.raw`add`]({
            'targets': this[String.raw`count3`],
            'scale': 0.8,
            'angle': 0x0,
            'duration': ((2) * (this[String.raw`frameRate`]))
        })[String.raw`add`]({
            'targets': this[String.raw`count3`],
            'scale': 0x1,
            'duration': ((4) * (this[String.raw`frameRate`]))
        })[String.raw`add`]({
            'targets': this[String.raw`count3`],
            'scale': 0x1,
            'duration': this[String.raw`frameRate`]
        })[String.raw`add`]({
            'targets': this[String.raw`count2`],
            'alpha': 0x0,
            'scale': 0.2,
            'angle': 0x41,
            'duration': this[String.raw`frameRate`],
            'onStart': () => {

                this[String.raw`count3`][String.raw`destroy`](), this[String.raw`expand`][String.raw`play`](String.raw`expand`);
            }
        })[String.raw`add`]({
            'targets': this[String.raw`count2`],
            'alpha': 0x1,
            'scale': 0.2,
            'angle': 0x41,
            'duration': this[String.raw`frameRate`]
        })[String.raw`add`]({
            'targets': this[String.raw`count2`],
            'scale': 0x1,
            'angle': 14.8,
            'duration': ((3) * (this[String.raw`frameRate`]))
        })[String.raw`add`]({
            'targets': this[String.raw`count2`],
            'scale': 0.8,
            'angle': 0x0,
            'duration': ((2) * (this[String.raw`frameRate`]))
        })[String.raw`add`]({
            'targets': this[String.raw`count2`],
            'scale': 0x1,
            'duration': ((4) * (this[String.raw`frameRate`]))
        })[String.raw`add`]({
            'targets': this[String.raw`count2`],
            'scale': 0x1,
            'duration': this[String.raw`frameRate`]
        })[String.raw`add`]({
            'targets': this[String.raw`count1`],
            'alpha': 0x0,
            'scale': 0.2,
            'angle': 0x41,
            'duration': this[String.raw`frameRate`],
            'onStart': () => {

                this[String.raw`count2`][String.raw`destroy`](), this[String.raw`expand`][String.raw`play`](String.raw`expand`);
            }
        })[String.raw`add`]({
            'targets': this[String.raw`count1`],
            'alpha': 0x1,
            'scale': 0.2,
            'angle': 0x41,
            'duration': this[String.raw`frameRate`]
        })[String.raw`add`]({
            'targets': this[String.raw`count1`],
            'scale': 0x1,
            'angle': 14.8,
            'duration': ((3) * (this[String.raw`frameRate`]))
        })[String.raw`add`]({
            'targets': this[String.raw`count1`],
            'scale': 0.8,
            'angle': 0x0,
            'duration': ((2) * (this[String.raw`frameRate`]))
        })[String.raw`add`]({
            'targets': this[String.raw`count1`],
            'scale': 0x1,
            'duration': ((4) * (this[String.raw`frameRate`]))
        })[String.raw`add`]({
            'targets': this[String.raw`count1`],
            'scale': 0x1,
            'duration': ((4) * (this[String.raw`frameRate`])),
            'onComplete': () => {
                var _0x51b362;
                (null == (_0x51b362 = this[String.raw`callback`])) || _0x51b362[String.raw`call`](this), this[String.raw`expand`][String.raw`destroy`](), this[String.raw`count1`][String.raw`destroy`]();
            }
        }), this[String.raw`countTimeline`][String.raw`play`]());
    }
}