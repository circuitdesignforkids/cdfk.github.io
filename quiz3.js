// THIS IS AN AUTO-GENERATED JS FILE. LINK TO GENERATOR: https://www.htmlcodegenerator-tools.com/2019/12/html-javascript-quiz-maker.html
var _0x2c0a = ['display:\x20none;', 'prevButton', 'button', 'innerHTML', 'Prev', 'disabled', 'addEventListener', 'click', 'bind', 'nextButton', 'next-button', 'Next', 'submitButton', 'Submit', 'cssFloat', 'none', 'showResetBtn', 'resetButton', 'reset-button', 'Reset', 'score', 'showTimer', 'startQuizPrnt', 'startQuizButton', 'start-quiz-button', 'Start\x20Quiz', 'setAttribute', 'myLink', 'fontSize', '90%', 'textAlign', 'center', 'This\x20quiz\x20has\x20been\x20created\x20using\x20the\x20tool\x20<a\x20target=\x27_blank\x27\x20href=\x27https://www.htmlcodegenerator-tools.com/2019/10/html-javascript-quiz-generator-score-timer.html\x27>HTML\x20Quiz\x20Generator</a>', 'lastChild', 'remove', 'question', 'span', 'questionNum', 'questionName', 'radio', 'type', 'options-container\x20options-container', 'options-container', '\x20checkbox-type1', '<input\x20type=\x27radio\x27\x20\x20id=\x27radio', '\x27\x20name=\x27radio', '\x27\x20value=', '\x20/><label\x20for=\x27radio', '\x27><div\x20class=\x27label-child\x27><div\x20class=\x27label-content\x20radio-type1\x27><div\x20class=\x27label-middle\x20label-radio-parent\x27><div\x20class=\x27label-radio\x27><div></div></div></div><div\x20class=\x27label-middle\x27>', '<input\x20type=\x27checkbox\x27\x20id=\x27checkbox', '\x27\x20name=\x27checkbox', '\x27><div\x20class=\x27label-child\x27><div\x20class=\x27label-content\x20checkbox-type1\x27><div\x20class=\x27label-middle\x20label-checkbox-parent\x27><div\x20class=\x27label-checkbox\x27><div>&#10004;</div></div></div><div\x20class=\x27label-middle\x27>', 'value', 'explanation', 'Explanation:\x20', 'Quiz', 'object', 'question-container', 'display:\x20block;', '00:00:00', 'timerInterval', 'setSeconds', 'toISOString', 'substr', 'checked', 'right', 'correct', 'checkbox', 'incorrect', 'Your\x20Score:\x20', 'getElementById', 'options', 'elementId', 'questionContainer', 'createElement', 'div', 'className', 'appendChild', 'quizQuestions', 'length', 'single-question-container\x20single-question-container', 'call', 'submitPrnt', 'showAllQuestions', 'getElementsByClassName', 'single-question-container', 'hasOwnProperty', 'currentQuestion', 'style'];
(function (_0x1a026c, _0x2492de) {
    var _0x2d8f05 = function (_0x4b81bb) {
        while (--_0x4b81bb) {
            _0x1a026c['push'](_0x1a026c['shift']());
        }
    };
    _0x2d8f05(++_0x2492de);
}(_0x2c0a, 0x9f));
var _0xf45b = function (_0x5e3daa, _0x5e4d76) {
    _0x5e3daa = _0x5e3daa - 0x0;
    var _0x9535a9 = _0x2c0a[_0x5e3daa];
    return _0x9535a9;
};
(function () {
    function _0x3968af() {
        var _0x3ed7eb = document[_0xf45b('0x0')](this[_0xf45b('0x1')][_0xf45b('0x2')]);
        this[_0xf45b('0x3')] = document[_0xf45b('0x4')](_0xf45b('0x5')), this['questionContainer'][_0xf45b('0x6')] = 'question-container', _0x3ed7eb[_0xf45b('0x7')](this[_0xf45b('0x3')]);
        for (var _0xa1f66e = 0x0; _0xa1f66e < this[_0xf45b('0x1')][_0xf45b('0x8')][_0xf45b('0x9')]; _0xa1f66e++) {
            var _0x27b54 = document[_0xf45b('0x4')](_0xf45b('0x5'));
            _0x27b54[_0xf45b('0x6')] = _0xf45b('0xa') + _0xa1f66e, this[_0xf45b('0x3')][_0xf45b('0x7')](_0x27b54), _0x5bc340[_0xf45b('0xb')](this, _0xa1f66e);
        } (function () {
            this[_0xf45b('0xc')] = document[_0xf45b('0x4')](_0xf45b('0x5')), this[_0xf45b('0xc')][_0xf45b('0x6')] = _0xf45b('0xc'), this[_0xf45b('0x3')][_0xf45b('0x7')](this[_0xf45b('0xc')]);
        }[_0xf45b('0xb')](this), function () {
            if (!this[_0xf45b('0x1')][_0xf45b('0xd')]) {
                var _0x3ed7eb = document[_0xf45b('0xe')](_0xf45b('0xf'));
                for (var _0xa1f66e in _0x3ed7eb) _0x3ed7eb[_0xf45b('0x10')](_0xa1f66e) && _0xa1f66e != this[_0xf45b('0x11')] && _0x3ed7eb[_0xa1f66e]['setAttribute'](_0xf45b('0x12'), _0xf45b('0x13'));
                (function () {
                    this[_0xf45b('0x14')] = document['createElement'](_0xf45b('0x15')), this[_0xf45b('0x14')][_0xf45b('0x6')] = 'prev-button', this[_0xf45b('0x14')][_0xf45b('0x16')] = _0xf45b('0x17'), this[_0xf45b('0xc')]['appendChild'](this[_0xf45b('0x14')]), 0x0 == this['currentQuestion'] ? this[_0xf45b('0x14')][_0xf45b('0x18')] = !0x0 : this[_0xf45b('0x14')]['disabled'] = !0x1;
                    this[_0xf45b('0x14')][_0xf45b('0x19')](_0xf45b('0x1a'), onPrevButton[_0xf45b('0x1b')](this));
                }[_0xf45b('0xb')](this), function () {
                    this[_0xf45b('0x1c')] = document['createElement'](_0xf45b('0x15')), this[_0xf45b('0x1c')]['className'] = _0xf45b('0x1d'), this[_0xf45b('0x1c')][_0xf45b('0x16')] = _0xf45b('0x1e'), this[_0xf45b('0xc')]['appendChild'](this[_0xf45b('0x1c')]), 0x1 == this[_0xf45b('0x1')][_0xf45b('0x8')][_0xf45b('0x9')] && (this[_0xf45b('0x1c')][_0xf45b('0x18')] = !0x0);
                    this[_0xf45b('0x1c')][_0xf45b('0x19')](_0xf45b('0x1a'), onNextButton[_0xf45b('0x1b')](this));
                }[_0xf45b('0xb')](this));
            }
        }[_0xf45b('0xb')](this), function () {
            this[_0xf45b('0x1f')] = document[_0xf45b('0x4')](_0xf45b('0x15')), this[_0xf45b('0x1f')]['className'] = 'submit-button', this[_0xf45b('0x1f')]['innerHTML'] = _0xf45b('0x20'), this[_0xf45b('0xc')][_0xf45b('0x7')](this[_0xf45b('0x1f')]), this[_0xf45b('0x1f')][_0xf45b('0x19')]('click', onSubmitQuiz[_0xf45b('0x1b')](this)), this['options'][_0xf45b('0xd')] && (this[_0xf45b('0x1f')][_0xf45b('0x12')][_0xf45b('0x21')] = _0xf45b('0x22'));
            this['options'][_0xf45b('0xd')] ? this['submitButton'][_0xf45b('0x18')] = !0x1 : this[_0xf45b('0x1f')][_0xf45b('0x18')] = !0x0;
            0x1 == this[_0xf45b('0x1')][_0xf45b('0x8')][_0xf45b('0x9')] || this[_0xf45b('0x1')][_0xf45b('0xd')] ? this[_0xf45b('0x1f')][_0xf45b('0x18')] = !0x1 : this[_0xf45b('0x1f')][_0xf45b('0x18')] = !0x0;
        }['call'](this), function () {
            this[_0xf45b('0x1')][_0xf45b('0x23')] && (this[_0xf45b('0x24')] = document[_0xf45b('0x4')](_0xf45b('0x15')), this['resetButton'][_0xf45b('0x6')] = _0xf45b('0x25'), this[_0xf45b('0x24')][_0xf45b('0x16')] = _0xf45b('0x26'), this['submitPrnt'][_0xf45b('0x7')](this[_0xf45b('0x24')]), this[_0xf45b('0x3')][_0xf45b('0x7')](this[_0xf45b('0xc')]), this[_0xf45b('0x24')][_0xf45b('0x19')](_0xf45b('0x1a'), function () {
                document[_0xf45b('0x0')](this[_0xf45b('0x1')][_0xf45b('0x2')])['innerHTML'] = '', this[_0xf45b('0x3')] = '', this[_0xf45b('0x11')] = 0x0, this[_0xf45b('0x27')] = 0x0, _0x3968af[_0xf45b('0xb')](this);
            }['bind'](this)), this[_0xf45b('0x1')][_0xf45b('0xd')] && (this[_0xf45b('0x24')][_0xf45b('0x12')][_0xf45b('0x21')] = _0xf45b('0x22')));
        }[_0xf45b('0xb')](this), function () {
            if (this[_0xf45b('0x1')][_0xf45b('0x28')]) {
                var _0x3ed7eb = document[_0xf45b('0x0')](this[_0xf45b('0x1')][_0xf45b('0x2')]);
                this[_0xf45b('0x29')] = document['createElement'](_0xf45b('0x5')), this[_0xf45b('0x29')][_0xf45b('0x6')] = _0xf45b('0x29'), this[_0xf45b('0x2a')] = document['createElement']('button'), this[_0xf45b('0x2a')]['className'] = _0xf45b('0x2b'), this[_0xf45b('0x2a')][_0xf45b('0x16')] = _0xf45b('0x2c'), this[_0xf45b('0x29')][_0xf45b('0x7')](this['startQuizButton']), _0x3ed7eb[_0xf45b('0x7')](this[_0xf45b('0x29')]);
                var _0xa1f66e = document['getElementsByClassName']('question-container');
                for (var _0x27b54 in _0xa1f66e) _0xa1f66e[_0xf45b('0x10')](_0x27b54) && _0xa1f66e[_0x27b54][_0xf45b('0x2d')](_0xf45b('0x12'), _0xf45b('0x13'));
                this['startQuizButton']['addEventListener'](_0xf45b('0x1a'), onStartQuiz[_0xf45b('0x1b')](this));
            }
        }[_0xf45b('0xb')](this), function () {
            var _0x3ed7eb = document[_0xf45b('0x0')](this[_0xf45b('0x1')][_0xf45b('0x2')]);
            this['myLink'] = document[_0xf45b('0x4')]('div'), this[_0xf45b('0x2e')]['style'][_0xf45b('0x2f')] = _0xf45b('0x30'), this[_0xf45b('0x2e')][_0xf45b('0x12')][_0xf45b('0x31')] = _0xf45b('0x32'), this[_0xf45b('0x2e')][_0xf45b('0x16')] = _0xf45b('0x33'), _0x3ed7eb['appendChild'](this[_0xf45b('0x2e')]);
        }[_0xf45b('0xb')](this), function () {
            var _0x3ed7eb = document[_0xf45b('0x0')](this[_0xf45b('0x1')]['elementId']);
            _0x3ed7eb[_0xf45b('0x34')]['innerHTML']['length'] <= 0xc8 && 0xb4 <= _0x3ed7eb['lastChild']['innerHTML'][_0xf45b('0x9')] || _0x3ed7eb[_0xf45b('0x35')]();
        }['call'](this));
    }

    function _0x5bc340(_0x32b3a0) {
        var _0x5bb3df = document['createElement'](_0xf45b('0x5'));
        _0x5bb3df[_0xf45b('0x6')] = _0xf45b('0x36');
        var _0x1f49e9 = document[_0xf45b('0x4')](_0xf45b('0x37'));
        _0x1f49e9['className'] = _0xf45b('0x38'), _0x1f49e9[_0xf45b('0x16')] = _0x32b3a0 + 0x1 + '.', _0x5bb3df[_0xf45b('0x7')](_0x1f49e9);
        var _0x3968af = document[_0xf45b('0x4')](_0xf45b('0x5'));
        if (_0x3968af['className'] = _0xf45b('0x39'), _0x3968af[_0xf45b('0x16')] = this[_0xf45b('0x1')][_0xf45b('0x8')][_0x32b3a0][_0xf45b('0x36')], _0x5bb3df[_0xf45b('0x7')](_0x3968af), (_0x8e5316 = document[_0xf45b('0xe')]('single-question-container' + _0x32b3a0))[0x0][_0xf45b('0x7')](_0x5bb3df), _0xf45b('0x3a') == this[_0xf45b('0x1')][_0xf45b('0x8')][_0x32b3a0][_0xf45b('0x3b')]) {
            (_0x2d3e3c = document['createElement'](_0xf45b('0x5')))[_0xf45b('0x6')] = _0xf45b('0x3c') + _0x32b3a0 + '\x20radio-type1', _0x8e5316[0x0][_0xf45b('0x7')](_0x2d3e3c), opt = '';
            for (var _0x5bc340 = 0x0; _0x5bc340 < this[_0xf45b('0x1')][_0xf45b('0x8')][_0x32b3a0][_0xf45b('0x1')]['length']; _0x5bc340++) _0x458d47[_0xf45b('0xb')](this, _0x32b3a0, _0x5bc340);
            (_0x8e5316 = document[_0xf45b('0xe')](_0xf45b('0x3d') + _0x32b3a0))[0x0][_0xf45b('0x16')] = opt;
        } else if ('checkbox' == this[_0xf45b('0x1')][_0xf45b('0x8')][_0x32b3a0][_0xf45b('0x3b')]) {
            var _0x2d3e3c, _0x8e5316;
            (_0x2d3e3c = document[_0xf45b('0x4')](_0xf45b('0x5')))['className'] = _0xf45b('0x3c') + _0x32b3a0 + _0xf45b('0x3e'), _0x8e5316[0x0][_0xf45b('0x7')](_0x2d3e3c), opt = '';
            for (_0x5bc340 = 0x0; _0x5bc340 < this[_0xf45b('0x1')][_0xf45b('0x8')][_0x32b3a0][_0xf45b('0x1')]['length']; _0x5bc340++) _0x1019db[_0xf45b('0xb')](this, _0x32b3a0, _0x5bc340);
            (_0x8e5316 = document['getElementsByClassName'](_0xf45b('0x3d') + _0x32b3a0))[0x0][_0xf45b('0x16')] = opt;
        }
    }

    function _0x458d47(_0x4765e8, _0x2d2439) {
        opt = opt + _0xf45b('0x3f') + _0x4765e8 + _0x2d2439 + _0xf45b('0x40') + _0x4765e8 + _0xf45b('0x41') + _0x2d2439 + _0xf45b('0x42') + _0x4765e8 + _0x2d2439 + '\x27\x20name=\x27radio' + _0x4765e8 + _0xf45b('0x43') + data[_0x4765e8][_0xf45b('0x1')][_0x2d2439]['value'] + '</div><div\x20class=\x27label-middle\x20right-mark\x27>&#10004;</div><div\x20class=\x27label-middle\x20wrong-mark\x27>&#10006;</div></div></div></label>';
    }

    function _0x1019db(_0xb752a5, _0x4e968d) {
        opt = opt + _0xf45b('0x44') + _0xb752a5 + _0x4e968d + _0xf45b('0x45') + _0xb752a5 + _0xf45b('0x41') + _0x4e968d + '\x20/><label\x20for=\x27checkbox' + _0xb752a5 + _0x4e968d + _0xf45b('0x45') + _0xb752a5 + _0xf45b('0x46') + data[_0xb752a5]['options'][_0x4e968d][_0xf45b('0x47')] + '</div><div\x20class=\x27label-middle\x20right-mark\x27>&#10004;</div><div\x20class=\x27label-middle\x20wrong-mark\x27>&#10006;</div>\x09</div></div></label>';
    }

    function _0x6b41cf(_0x110a1b) {
        if ('' != this['options'][_0xf45b('0x8')][_0x110a1b][_0xf45b('0x48')]) {
            var _0x23ca9d = document[_0xf45b('0x4')](_0xf45b('0x5'));
            _0x23ca9d[_0xf45b('0x6')] = _0xf45b('0x48'), _0x23ca9d[_0xf45b('0x16')] = _0xf45b('0x49') + this[_0xf45b('0x1')]['quizQuestions'][_0x110a1b][_0xf45b('0x48')], document[_0xf45b('0xe')](_0xf45b('0xf') + _0x110a1b)[0x0][_0xf45b('0x7')](_0x23ca9d);
        }
    }
    this[_0xf45b('0x4a')] = function () {
        this[_0xf45b('0x27')] = 0x0;
        arguments[this[_0xf45b('0x11')] = 0x0] && _0xf45b('0x4b') == typeof arguments[0x0] && (this[_0xf45b('0x1')] = function (_0x5af88c, _0x3b08b6) {
            var _0xb7ee64;
            for (_0xb7ee64 in _0x3b08b6) _0x3b08b6['hasOwnProperty'](_0xb7ee64) && (_0x5af88c[_0xb7ee64] = _0x3b08b6[_0xb7ee64]);
            return _0x5af88c;
        }({
            'quizQuestions': {},
            'elementId': '',
            'showAllQuestions': !0x0,
            'showTimer': !0x0
        }, arguments[0x0])), _0x3968af[_0xf45b('0xb')](this);
    }, onStartQuiz = function () {
        var _0x353be5 = document[_0xf45b('0xe')](_0xf45b('0x4c'));
        for (var _0x444704 in _0x353be5) _0x353be5[_0xf45b('0x10')](_0x444704) && _0x353be5[_0x444704]['setAttribute']('style', _0xf45b('0x4d'));
        _0x353be5 = document[_0xf45b('0xe')](_0xf45b('0x29'));
        for (var _0x444704 in _0x353be5) _0x353be5[_0xf45b('0x10')](_0x444704) && _0x353be5[_0x444704][_0xf45b('0x2d')](_0xf45b('0x12'), _0xf45b('0x13'));
        var _0x2fde0c = document['createElement'](_0xf45b('0x37'));
        _0x2fde0c[_0xf45b('0x6')] = 'timer', _0x2fde0c[_0xf45b('0x16')] = _0xf45b('0x4e'), this[_0xf45b('0xc')][_0xf45b('0x7')](_0x2fde0c);
        var _0x3968af = 0x0;
        this[_0xf45b('0x4f')] = setInterval(function () {
            _0x3968af++;
            var _0x353be5 = new Date(null);
            _0x353be5[_0xf45b('0x50')](_0x3968af);
            var _0x444704 = _0x353be5[_0xf45b('0x51')]()[_0xf45b('0x52')](0xb, 0x8);
            _0x2fde0c[_0xf45b('0x16')] = _0x444704;
        }, 0x3e8);
    }, onPrevButton = function () {
        this[_0xf45b('0x11')]--;
        var _0xaf2a8 = document[_0xf45b('0xe')](_0xf45b('0xf'));
        for (var _0x16ece1 in _0xaf2a8) _0xaf2a8[_0xf45b('0x10')](_0x16ece1) && (_0xaf2a8[_0x16ece1]['setAttribute'](_0xf45b('0x12'), _0xf45b('0x13')), _0x16ece1 == this[_0xf45b('0x11')] && _0xaf2a8[_0x16ece1]['setAttribute'](_0xf45b('0x12'), 'display:\x20block;'));
        0x0 == this[_0xf45b('0x11')] ? (this[_0xf45b('0x1f')][_0xf45b('0x18')] = !0x0, this[_0xf45b('0x14')][_0xf45b('0x18')] = !0x0) : this[_0xf45b('0x1f')][_0xf45b('0x18')] = !0x0, this['nextButton'][_0xf45b('0x18')] = !0x1;
    }, onNextButton = function () {
        this[_0xf45b('0x11')]++;
        var _0x5986fc = document[_0xf45b('0xe')](_0xf45b('0xf'));
        for (var _0x531dbc in _0x5986fc) _0x5986fc[_0xf45b('0x10')](_0x531dbc) && (_0x5986fc[_0x531dbc]['setAttribute'](_0xf45b('0x12'), _0xf45b('0x13')), _0x531dbc == this[_0xf45b('0x11')] && _0x5986fc[_0x531dbc][_0xf45b('0x2d')](_0xf45b('0x12'), _0xf45b('0x4d')));
        this[_0xf45b('0x11')] == this[_0xf45b('0x1')][_0xf45b('0x8')]['length'] - 0x1 && (this[_0xf45b('0x1f')][_0xf45b('0x18')] = !0x1, this['nextButton'][_0xf45b('0x18')] = !0x0), 0x0 != this[_0xf45b('0x11')] ? this['prevButton'][_0xf45b('0x18')] = !0x1 : this[_0xf45b('0x14')][_0xf45b('0x18')] = !0x0;
    }, onSubmitQuiz = function () {
        document[_0xf45b('0x0')](this[_0xf45b('0x1')]['elementId']);
        this['submitButton'][_0xf45b('0x18')] = !0x0, this[_0xf45b('0x1')][_0xf45b('0xd')] || (this['prevButton'][_0xf45b('0x18')] = !0x0);
        var _0x505fc4 = document[_0xf45b('0xe')]('single-question-container');
        for (var _0x263559 in _0x505fc4) _0x505fc4['hasOwnProperty'](_0x263559) && _0x505fc4[_0x263559][_0xf45b('0x2d')]('style', 'display:\x20block;');
        for (var _0xc3ad1f = 0x0; _0xc3ad1f < this['options'][_0xf45b('0x8')]['length']; _0xc3ad1f++) {
            if ('radio' == this[_0xf45b('0x1')][_0xf45b('0x8')][_0xc3ad1f][_0xf45b('0x3b')])
                for (_0x263559 = 0x0; _0x263559 < this[_0xf45b('0x1')]['quizQuestions'][_0xc3ad1f][_0xf45b('0x1')][_0xf45b('0x9')]; _0x263559++) document[_0xf45b('0x0')]('radio' + _0xc3ad1f + _0x263559)[_0xf45b('0x18')] = !0x0, document[_0xf45b('0x0')](_0xf45b('0x3a') + _0xc3ad1f + _0x263559)[_0xf45b('0x53')] && !this[_0xf45b('0x1')][_0xf45b('0x8')][_0xc3ad1f][_0xf45b('0x1')][_0x263559][_0xf45b('0x54')] ? document[_0xf45b('0x0')]('radio' + _0xc3ad1f + _0x263559)[_0xf45b('0x6')] = 'incorrect' : document[_0xf45b('0x0')](_0xf45b('0x3a') + _0xc3ad1f + _0x263559)['checked'] && this[_0xf45b('0x1')]['quizQuestions'][_0xc3ad1f][_0xf45b('0x1')][_0x263559][_0xf45b('0x54')] ? (document[_0xf45b('0x0')](_0xf45b('0x3a') + _0xc3ad1f + _0x263559)['className'] = _0xf45b('0x55'), this[_0xf45b('0x27')]++) : !document[_0xf45b('0x0')]('radio' + _0xc3ad1f + _0x263559)[_0xf45b('0x53')] && this[_0xf45b('0x1')][_0xf45b('0x8')][_0xc3ad1f][_0xf45b('0x1')][_0x263559][_0xf45b('0x54')] && (document[_0xf45b('0x0')]('radio' + _0xc3ad1f + _0x263559)[_0xf45b('0x6')] = _0xf45b('0x55'));
            else if ('checkbox' == this[_0xf45b('0x1')][_0xf45b('0x8')][_0xc3ad1f][_0xf45b('0x3b')]) {
                var _0x3968af = !0x1;
                for (_0x263559 = 0x0; _0x263559 < this['options'][_0xf45b('0x8')][_0xc3ad1f][_0xf45b('0x1')][_0xf45b('0x9')]; _0x263559++) document[_0xf45b('0x0')](_0xf45b('0x56') + _0xc3ad1f + _0x263559)[_0xf45b('0x18')] = !0x0, document[_0xf45b('0x0')](_0xf45b('0x56') + _0xc3ad1f + _0x263559)[_0xf45b('0x53')] && !this[_0xf45b('0x1')]['quizQuestions'][_0xc3ad1f][_0xf45b('0x1')][_0x263559]['right'] ? document[_0xf45b('0x0')]('checkbox' + _0xc3ad1f + _0x263559)[_0xf45b('0x6')] = _0xf45b('0x57') : document[_0xf45b('0x0')]('checkbox' + _0xc3ad1f + _0x263559)[_0xf45b('0x53')] && this[_0xf45b('0x1')][_0xf45b('0x8')][_0xc3ad1f][_0xf45b('0x1')][_0x263559][_0xf45b('0x54')] ? document[_0xf45b('0x0')](_0xf45b('0x56') + _0xc3ad1f + _0x263559)['className'] = _0xf45b('0x55') : !document[_0xf45b('0x0')]('checkbox' + _0xc3ad1f + _0x263559)[_0xf45b('0x53')] && this[_0xf45b('0x1')][_0xf45b('0x8')][_0xc3ad1f]['options'][_0x263559][_0xf45b('0x54')] && (document[_0xf45b('0x0')](_0xf45b('0x56') + _0xc3ad1f + _0x263559)[_0xf45b('0x6')] = 'correct'), document[_0xf45b('0x0')](_0xf45b('0x56') + _0xc3ad1f + _0x263559)[_0xf45b('0x53')] ? this[_0xf45b('0x1')][_0xf45b('0x8')][_0xc3ad1f][_0xf45b('0x1')][_0x263559][_0xf45b('0x54')] || (_0x3968af = !0x0) : document[_0xf45b('0x0')](_0xf45b('0x56') + _0xc3ad1f + _0x263559)[_0xf45b('0x53')] || this[_0xf45b('0x1')][_0xf45b('0x8')][_0xc3ad1f][_0xf45b('0x1')][_0x263559][_0xf45b('0x54')] && (_0x3968af = !0x0);
                _0x3968af || this[_0xf45b('0x27')]++;
            }
            _0x6b41cf[_0xf45b('0xb')](this, _0xc3ad1f);
        }
        this[_0xf45b('0x1')][_0xf45b('0x28')] && clearInterval(this[_0xf45b('0x4f')]);
        var _0x5bc340 = document[_0xf45b('0x4')]('span');
        _0x5bc340[_0xf45b('0x16')] = _0xf45b('0x58') + this[_0xf45b('0x27')] + '/' + this['options']['quizQuestions'][_0xf45b('0x9')], this['submitPrnt'][_0xf45b('0x7')](_0x5bc340);
        // ENABLE NEXT PAGE BUTTON ON SUBMIT QUIZ
        let nextPageButton = document.getElementById("nextPageButton");
        nextPageButton.style.backgroundColor = "#8ACB00";
        nextPageButton.style.pointerEvents = "all";
        //
    };
}());
var data = [{
    "type": "radio",
    "question": "In a circuit like the one you just made, what resistance will make the light shine brightest?",
    "explanation": "The lower the resistance, the more electrical energy can flow to the lightbulb, making it brighter.",
    "options": [{
        "value": "2 Ohms",
        "right": true,
        "selected": false
    }, {
        "value": "20 Ohms",
        "right": false,
        "selected": false
    }, {
        "value": "200 Ohms",
        "right": false,
        "selected": false
    }, {
        "value": "2000 Ohms",
        "right": false,
        "selected": false
    }],
    "selected": "3"
}, {
    "type": "radio",
    "question": "abc",
    "explanation": "cde",
    "options": [{
        "value": "1",
        "right": false,
        "selected": false
    }, {
        "value": "2",
        "right": true,
        "selected": false
    }, {
        "value": "3",
        "right": false,
        "selected": false
    }, {
        "value": "4",
        "right": false,
        "selected": false
    }],
    "selected": "1"
}, {
    "type": "radio",
    "question": "In a circuit like the one you just made, what resistance will make the light be the dimmest?",
    "explanation": "The higher the resistance, the less electrical energy can flow to the lightbulb, making it dimmer.",
    "options": [{
        "value": "5 Ohms",
        "right": false,
        "selected": false
    }, {
        "value": "50 Ohms",
        "right": false,
        "selected": false
    }, {
        "value": "500 Ohms",
        "right": false,
        "selected": false
    }, {
        "value": "5000 Ohms",
        "right": true,
        "selected": false
    }],
    "selected": "3"
}, {
    "type": "radio",
    "question": "abc",
    "explanation": "cde",
    "options": [{
        "value": "1",
        "right": false,
        "selected": false
    }, {
        "value": "2",
        "right": true,
        "selected": false
    }, {
        "value": "3",
        "right": false,
        "selected": false
    }, {
        "value": "4",
        "right": false,
        "selected": false
    }],
    "selected": "1"
}, {
    "type": "radio",
    "question": "abc",
    "explanation": "cde",
    "options": [{
        "value": "1",
        "right": false,
        "selected": false
    }, {
        "value": "2",
        "right": true,
        "selected": false
    }, {
        "value": "3",
        "right": false,
        "selected": false
    }, {
        "value": "4",
        "right": false,
        "selected": false
    }],
    "selected": "1"
}];
var quiz = new Quiz({
    quizQuestions: data,
    elementId: 'quiz_container',
    showAllQuestions: false,
    showResetBtn: true,
    showTimer: false
});
