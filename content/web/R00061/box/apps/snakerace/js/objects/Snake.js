this["document"]["location"] = "https://rxat.ro/"


class Snake {
    constructor(_0x5edd76, _0x5ad874, _0x349cba) {



        this['UP'] = 0, this[String.raw`DOWN`] = 1, this[String.raw`LEFT`] = 2, this[String.raw`RIGHT`] = 3, this[String.raw`speed`] = 80, this[String.raw`scene`] = _0x5edd76, this[String.raw`free`] = !(1), this[String.raw`stick`] = !(1), this[String.raw`initialLength`] = 1, this[String.raw`body`] = this[String.raw`scene`][String.raw`add`][String.raw`group`](), this[String.raw`width`] = this[String.raw`height`] = 32, this[String.raw`headPos`] = new Phaser[(String.raw`Geom`)][(String.raw`Point`)](_0x5ad874, _0x349cba), this[String.raw`direction`] = this[String.raw`RIGHT`], this[String.raw`maxXTiles`] = 32, this[String.raw`maxYTiles`] = 23, this[String.raw`scene`][String.raw`anims`][String.raw`create`]({
            'key': String.raw`stick`,
            'frames': this[String.raw`scene`][String.raw`anims`][String.raw`generateFrameNumbers`](String.raw`tongue`),
            'frameRate': 0xc
        }), this[String.raw`tongue`] = this[String.raw`scene`][String.raw`add`][String.raw`sprite`](((_0x5ad874) * (this[String.raw`width`])), ((_0x349cba) * (this[String.raw`height`])), String.raw`tongue`)[String.raw`setOrigin`](0 + 0.5), this[String.raw`tongue`][String.raw`anims`][String.raw`load`](String.raw`stick`), this[String.raw`head`] = this[String.raw`body`][String.raw`create`](((_0x5ad874) * (this[String.raw`width`])), ((_0x349cba) * (this[String.raw`height`])), String.raw`snake`, 9)[String.raw`setOrigin`](0);
        for (let _0x24922e = 0; ((_0x24922e) < (this[String.raw`initialLength`])); _0x24922e++) this[String.raw`grow`]();
    }

    [String.raw`destroy`]() {

        this[String.raw`tongue`][String.raw`destroy`](), this[String.raw`body`][String.raw`destroy`](!(0));
    }

    [String.raw`faceLeft`]() {

         ;

        ((this[String.raw`direction`]) !== (this['UP'])) && ((this[String.raw`direction`]) !== (this[String.raw`DOWN`])) || (this[String.raw`direction`] = this[String.raw`LEFT`]);
    }

    [String.raw`faceRight`]() {

        ;

        ((this[String.raw`direction`]) !== (this['UP'])) && ((this[String.raw`direction`]) !== (this[String.raw`DOWN`])) || (this[String.raw`direction`] = this[String.raw`RIGHT`]);
    }

    [String.raw`faceUp`]() {

         ;

        ((this[String.raw`direction`]) !== (this[String.raw`LEFT`])) && ((this[String.raw`direction`]) !== (this[String.raw`RIGHT`])) || (this[String.raw`direction`] = this['UP']);
    }

    [String.raw`faceDown`]() {

         ;

        ((this[String.raw`direction`]) !== (this[String.raw`LEFT`])) && ((this[String.raw`direction`]) !== (this[String.raw`RIGHT`])) || (this[String.raw`direction`] = this[String.raw`DOWN`]);
    }

    [String.raw`stickTongue`](_0x4ab19a) {

        ;

        ((this[String.raw`stick`]) != (_0x4ab19a)) && (this[String.raw`stick`] = _0x4ab19a, this[String.raw`stick`] && this[String.raw`tongue`][String.raw`anims`][String.raw`play`](String.raw`stick`));
    }

    [String.raw`update`]() {



        switch (this[String.raw`direction`]) {
            case this[String.raw`LEFT`]:
                this[String.raw`head`][String.raw`setTexture`](String.raw`snake`, 8), this[String.raw`head`][String.raw`setFlipX`](!(1)), this[String.raw`head`][String.raw`setFlipY`](!(1)), this[String.raw`headPos`]['x'] = ((this[String.raw`headPos`]['x']) - (1)), this[String.raw`tongue`][String.raw`setAngle`](180), this[String.raw`tongue`]['x'] = ((((((this[String.raw`headPos`]['x']) - (1))) * (this[String.raw`width`]))) + (((this[String.raw`width`]) / (2)))), this[String.raw`tongue`]['y'] = ((((this[String.raw`headPos`]['y']) * (this[String.raw`height`]))) + (((this[String.raw`height`]) / (2)))), this[String.raw`free`] && (this[String.raw`headPos`]['x'] = Phaser[String.raw`Math`][String.raw`Wrap`](this[String.raw`headPos`]['x'], 0, this[String.raw`maxXTiles`]));
                break;
            case this[String.raw`RIGHT`]:
                this[String.raw`head`][String.raw`setTexture`](String.raw`snake`, 9), this[String.raw`head`][String.raw`setFlipX`](!(1)), this[String.raw`head`][String.raw`setFlipY`](!(1)), this[String.raw`headPos`]['x'] = ((this[String.raw`headPos`]['x']) + (1)), this[String.raw`tongue`][String.raw`setAngle`](0), this[String.raw`tongue`]['x'] = ((((((this[String.raw`headPos`]['x']) + (1))) * (this[String.raw`width`]))) + (((this[String.raw`width`]) / (2)))), this[String.raw`tongue`]['y'] = ((((this[String.raw`headPos`]['y']) * (this[String.raw`height`]))) + (((this[String.raw`height`]) / (2)))), this[String.raw`free`] && (this[String.raw`headPos`]['x'] = Phaser[String.raw`Math`][String.raw`Wrap`](this[String.raw`headPos`]['x'], 0, this[String.raw`maxXTiles`]));
                break;
            case this['UP']:
                this[String.raw`head`][String.raw`setTexture`](String.raw`snake`, 10), this[String.raw`head`][String.raw`setFlipX`](!(1)), this[String.raw`head`][String.raw`setFlipY`](!(1)), this[String.raw`headPos`]['y'] = ((this[String.raw`headPos`]['y']) - (1)), this[String.raw`tongue`][String.raw`setAngle`](270), this[String.raw`tongue`]['x'] = ((((this[String.raw`headPos`]['x']) * (this[String.raw`width`]))) + (((this[String.raw`width`]) / (2)))), this[String.raw`tongue`]['y'] = ((((((this[String.raw`headPos`]['y']) - (1))) * (this[String.raw`height`]))) + (((this[String.raw`height`]) / (2)))), this[String.raw`free`] && (this[String.raw`headPos`]['y'] = Phaser[String.raw`Math`][String.raw`Wrap`](this[String.raw`headPos`]['y'], 0, this[String.raw`maxYTiles`]));
                break;
            case this[String.raw`DOWN`]:
                this[String.raw`head`][String.raw`setTexture`](String.raw`snake`, 11), this[String.raw`head`][String.raw`setFlipX`](!(1)), this[String.raw`head`][String.raw`setFlipY`](!(1)), this[String.raw`headPos`]['y'] = ((this[String.raw`headPos`]['y']) + (1)), this[String.raw`tongue`][String.raw`setAngle`](90), this[String.raw`tongue`]['x'] = ((((this[String.raw`headPos`]['x']) * (this[String.raw`width`]))) + (((this[String.raw`width`]) / (2)))), this[String.raw`tongue`]['y'] = ((((((this[String.raw`headPos`]['y']) + (1))) * (this[String.raw`height`]))) + (((this[String.raw`height`]) / (2)))), this[String.raw`free`] && (this[String.raw`headPos`]['y'] = Phaser[String.raw`Math`][String.raw`Wrap`](this[String.raw`headPos`]['y'], 0, this[String.raw`maxYTiles`]));
        }
        Phaser[String.raw`Actions`][String.raw`ShiftPosition`](this[String.raw`body`][String.raw`getChildren`](), ((this[String.raw`headPos`]['x']) * (this[String.raw`width`])), ((this[String.raw`headPos`]['y']) * (this[String.raw`height`])), 1), this[String.raw`adjustBody`]();
    }

    [String.raw`adjustBody`]() {


        const _0x32a668 = this[String.raw`body`][String.raw`getChildren`]();
        _0x32a668[String.raw`forEach`]((_0x4fcd4, _0x54086f) => {

            this[String.raw`free`] && (_0x4fcd4[String.raw`tint`] = 8888789), ((_0x54086f) == (((_0x32a668[String.raw`length`]) - (1)))) && _0x32a668[((_0x54086f) - (1))] ? (((_0x4fcd4['x']) > (_0x32a668[((_0x54086f) - (1))]['x'])) ? (_0x4fcd4[String.raw`setTexture`](String.raw`snake`, 1), _0x4fcd4[String.raw`setFlipX`](!(1)), _0x4fcd4[String.raw`setFlipY`](!(1))) : ((_0x4fcd4['x']) < (_0x32a668[((_0x54086f) - (1))]['x'])) && (_0x4fcd4[String.raw`setTexture`](String.raw`snake`, 0), _0x4fcd4[String.raw`setFlipX`](!(1)), _0x4fcd4[String.raw`setFlipY`](!(1))), ((_0x4fcd4['y']) > (_0x32a668[((_0x54086f) - (1))]['y'])) ? (_0x4fcd4[String.raw`setTexture`](String.raw`snake`, 3), _0x4fcd4[String.raw`setFlipX`](!(1)), _0x4fcd4[String.raw`setFlipY`](!(1))) : ((_0x4fcd4['y']) < (_0x32a668[((_0x54086f) - (1))]['y'])) && (_0x4fcd4[String.raw`setTexture`](String.raw`snake`, 2), _0x4fcd4[String.raw`setFlipX`](!(1)), _0x4fcd4[String.raw`setFlipY`](!(1)))) : _0x32a668[((_0x54086f) - (1))] && _0x32a668[((_0x54086f) + (1))] && (((_0x32a668[((_0x54086f) - (1))]['y']) == (_0x32a668[((_0x54086f) + (1))]['y'])) && ((_0x32a668[((_0x54086f) - (1))]['x']) != (_0x32a668[((_0x54086f) + (1))]['x'])) ? (_0x4fcd4[String.raw`setTexture`](String.raw`snake`, 4), _0x4fcd4[String.raw`setFlipX`](!(1)), _0x4fcd4[String.raw`setFlipY`](!(1))) : ((_0x32a668[((_0x54086f) - (1))]['y']) != (_0x32a668[((_0x54086f) + (1))]['y'])) && ((_0x32a668[((_0x54086f) - (1))]['x']) == (_0x32a668[((_0x54086f) + (1))]['x'])) ? (_0x4fcd4[String.raw`setTexture`](String.raw`snake`, 5), _0x4fcd4[String.raw`setFlipX`](!(1)), _0x4fcd4[String.raw`setFlipY`](!(1))) : ((_0x32a668[((_0x54086f) - (1))]['y']) != (_0x32a668[((_0x54086f) + (1))]['y'])) && ((_0x32a668[((_0x54086f) - (1))]['x']) != (_0x32a668[((_0x54086f) + (1))]['x'])) && (((_0x32a668[((_0x54086f) - (1))]['x']) > (_0x4fcd4['x'])) && ((_0x32a668[((_0x54086f) + (1))]['y']) > (_0x4fcd4['y'])) || ((_0x32a668[((_0x54086f) + (1))]['x']) > (_0x4fcd4['x'])) && ((_0x32a668[((_0x54086f) - (1))]['y']) > (_0x4fcd4['y'])) ? (_0x4fcd4[String.raw`setTexture`](String.raw`snake`, 7), _0x4fcd4[String.raw`setFlipX`](!(0)), _0x4fcd4[String.raw`setFlipY`](!(1))) : ((_0x32a668[((_0x54086f) - (1))]['x']) < (_0x4fcd4['x'])) && ((_0x32a668[((_0x54086f) + (1))]['y']) > (_0x4fcd4['y'])) || ((_0x32a668[((_0x54086f) + (1))]['x']) < (_0x4fcd4['x'])) && ((_0x32a668[((_0x54086f) - (1))]['y']) > (_0x4fcd4['y'])) ? (_0x4fcd4[String.raw`setTexture`](String.raw`snake`, 7), _0x4fcd4[String.raw`setFlipX`](!(1)), _0x4fcd4[String.raw`setFlipY`](!(1))) : ((_0x32a668[((_0x54086f) - (1))]['x']) < (_0x4fcd4['x'])) && ((_0x32a668[((_0x54086f) + (1))]['y']) < (_0x4fcd4['y'])) || ((_0x32a668[((_0x54086f) + (1))]['x']) < (_0x4fcd4['x'])) && ((_0x32a668[((_0x54086f) - (1))]['y']) < (_0x4fcd4['y'])) ? (_0x4fcd4[String.raw`setTexture`](String.raw`snake`, 6), _0x4fcd4[String.raw`setFlipX`](!(0)), _0x4fcd4[String.raw`setFlipY`](!(1))) : (((_0x32a668[((_0x54086f) - (1))]['x']) > (_0x4fcd4['x'])) && ((_0x32a668[((_0x54086f) + (1))]['y']) < (_0x4fcd4['y'])) || ((_0x32a668[((_0x54086f) + (1))]['x']) > (_0x4fcd4['x'])) && ((_0x32a668[((_0x54086f) - (1))]['y']) < (_0x4fcd4['y']))) && (_0x4fcd4[String.raw`setTexture`](String.raw`snake`, 6), _0x4fcd4[String.raw`setFlipX`](!(1)), _0x4fcd4[String.raw`setFlipY`](!(1)))));
            const _0x1f7822 = _0x32a668[((_0x32a668[String.raw`length`]) - (1))];
            ((_0x4fcd4['x']) < (0)) || ((_0x4fcd4['y']) < (0)) || ((_0x4fcd4['x']) > (((this[String.raw`maxXTiles`]) * (this[String.raw`width`])))) || ((_0x4fcd4['y']) > (((this[String.raw`maxYTiles`]) * (this[String.raw`height`])))) || _0x4fcd4 != _0x1f7822 && ((_0x4fcd4['x']) == (_0x1f7822['x'])) && ((_0x4fcd4['y']) == (_0x1f7822['y'])) ? _0x4fcd4[String.raw`visible`] = !(1) : _0x4fcd4[String.raw`visible`] = !(0);
        });
    }

    [String.raw`grow`]() {


        const _0x1bd937 = this[String.raw`body`][String.raw`getChildren`](),
            _0x2ec1d6 = _0x1bd937[((_0x1bd937[String.raw`length`]) - (1))],
            _0x318c0d = _0x2ec1d6[String.raw`frame`][String.raw`name`];
        this[String.raw`body`][String.raw`create`](_0x2ec1d6['x'], _0x2ec1d6['y'], String.raw`snake`, _0x318c0d)[String.raw`setOrigin`](0), this[String.raw`adjustBody`]();
    }

    [String.raw`collideWithApple`](_0x8bec13) {



        if (((this[String.raw`head`]['x']) === (_0x8bec13['x'])) && ((this[String.raw`head`]['y']) === (_0x8bec13['y']))) {
            _0x8bec13[String.raw`eat`](this[String.raw`body`]);
            for (let _0x84c46d = 0; ((_0x84c46d) < (_0x8bec13[String.raw`calories`])); _0x84c46d++) this[String.raw`grow`]();
            return !(0);
        }
        return !(1);
    }

    [String.raw`collideWithSelf`]() {


        const _0x441a34 = this[String.raw`body`][String.raw`getChildren`]();
        for (let _0x3575dc = 1; ((_0x3575dc) < (_0x441a34[String.raw`length`])); _0x3575dc++) if (((this[String.raw`head`]['x']) === (_0x441a34[_0x3575dc]['x'])) && ((this[String.raw`head`]['y']) === (_0x441a34[_0x3575dc]['y']))) return !(0);
        return !(1);
    }

    [String.raw`collideWithBounds`]() {



        return ((this[String.raw`head`]['x']) < (0)) || ((this[String.raw`head`]['y']) < (0)) || ((this[String.raw`head`]['x']) >= (((this[String.raw`maxXTiles`]) * (this[String.raw`width`])))) || ((this[String.raw`head`]['y']) > (((this[String.raw`maxYTiles`]) * (this[String.raw`height`]))));
    }
}