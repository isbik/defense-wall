// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"lBB98":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "c9b2bbcd379dd93c";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"hD4hw":[function(require,module,exports) {
var _ball = require("./ball");
var _cannon = require("./cannon");
var _enemy = require("./enemy");
var _game = require("./game");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const wallImage = document.getElementById("wall");
const bgImage = document.getElementById("bg");
const groundEnemyImage = document.getElementById("groundEnemy");
const startBtn = document.getElementById("start");
const menu = document.querySelector(".menu");
let pause = true;
startBtn.addEventListener("click", ()=>{
    pause = false;
    if (!pause) {
        requestAnimationFrame(init);
        menu.style.display = "none";
    }
});
let cannon = new _cannon.Cannon(75, 575);
let enemies = [];
let mousePos;
let balls = [];
canvas.addEventListener("mousemove", (event)=>{
    mousePos = {
        x: event.clientX - canvas.offsetLeft,
        y: event.clientY - canvas.offsetTop
    };
    cannon.rotateTop(mousePos);
});
let progress = 0;
let timer = null;
window.addEventListener("mousedown", (event)=>{
    timer = setInterval(()=>{
        progress = Math.min(100, progress + 3);
    }, 10);
});
window.addEventListener("keydown", (event)=>{
    if (event.key === "w" && cannon.y > 100) cannon.y -= 160;
    if (event.key === "s" && cannon.y < 575) cannon.y += 160;
});
window.addEventListener("click", (event)=>{
    clearInterval(timer);
    progress = 0;
});
window.addEventListener("mouseup", (event)=>{
    let angle = cannon.angle;
    let dx = cannon.x + 15 - (cannon.x + 8);
    let dy = cannon.y - 30 - (cannon.y - 25);
    let distance = Math.sqrt(dx ** 2 + dy ** 2);
    let originalAngle = Math.atan2(dy, dx);
    let newX = cannon.x + 8 + distance * Math.cos(originalAngle + angle);
    let newY = cannon.y - 25 + distance * Math.sin(originalAngle + angle);
    for(let i = -1; i < 2; i++){
        let ball = new _ball.Ball(angle, newX + i * 25, newY + i * 25);
        ball.dx = Math.cos(angle) * (7 + progress / 9);
        ball.dy = Math.sin(angle) * (7 + progress / 9);
        balls.push(ball);
    }
    clearInterval(timer);
    progress = 0;
});
function collide(index) {
    let ball = balls[index];
    for(let i = index + 1; i < balls.length; i++)if (ballHitBall(ball, balls[i])) collideBalls(ball, balls[i]);
}
function collideBalls(ball1, ball2) {
    let dx = ball2.x - ball1.x;
    let dy = ball2.y - ball1.y;
    let distance = Math.sqrt(dx ** 2, dy ** 2);
    let collision = {
        x: dx / distance,
        y: dy / distance
    };
    let relativeVelocity = {
        x: ball1.dx - ball2.dx,
        y: ball1.dy - ball2.dy
    };
    let speed = relativeVelocity.x * collision.x + relativeVelocity.y + collision.y;
    if (speed < 0) return;
    let impulse = 1.1 * speed / (ball2.mass + ball1.mass);
    ball1.dx -= impulse * ball2.mass * collision.x;
    ball1.dy -= impulse * ball2.mass * collision.y;
    ball2.dx += impulse * ball1.mass * collision.x;
    ball2.dy += impulse * ball1.mass * collision.y;
    ball1.dy = ball1.dy * ball1.elasticity;
    ball2.dy = ball2.dy * ball2.elasticity;
}
function ballHitBall(ball1, ball2) {
    let dx = ball1.x - ball2.x;
    let dy = ball1.y - ball2.y;
    let distance = dx ** 2 + dy ** 2;
    if (distance <= (ball1.radius + ball2.radius) ** 2) return true;
    return false;
}
let scores = 0;
function gameOver() {
    pause = true;
    menu.style.display = "flex";
    const span = document.createElement("span");
    span.textContent = "Your scores: " + scores.toFixed();
    menu.appendChild(span);
}
function collideEnemy(enemy, ball) {
    let dx = ball.x - enemy.x;
    let dy = ball.y - enemy.y;
    let distance = dx ** 2 + dy ** 2;
    if (distance <= (ball.radius + enemy.radius) ** 2) {
        enemy.x += ball.dx * 50 / enemy.radius;
        enemy.damage(Math.abs(ball.dx) + 50);
        ball.deleted = true;
        scores += (50 - enemy.radius) * 2;
    }
    return false;
}
setInterval(()=>{
    let y = Math.random() * 300 + 50;
    enemies.push(new _enemy.Enemy(800, y, Math.random() * 20 + 20));
    let enemy = new _enemy.Enemy(800, _game.game.height - 40, 35);
    enemy.setSprite(groundEnemyImage);
    enemies.push(enemy);
}, 2000);
function init() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
    for(let i = 0; i < canvas.height; i += 160)ctx.drawImage(wallImage, 0, i - 40, 80, 200);
    if (_enemy.lives === 0) gameOver();
    if (pause) return;
    _game.game.render();
    ctx.fillStyle = progress > 50 ? "red" : "green";
    ctx.fillRect(cannon.x - 20, cannon.y - 50, progress / 2, 10);
    ctx.restore();
    balls.forEach((ball, index)=>{
        ball.move();
        collide(index);
        enemies.forEach((enemy)=>{
            collideEnemy(enemy, ball);
        });
        ball.draw(ctx);
    });
    enemies.forEach((enemy, index)=>{
        enemy.update();
        enemy.draw(ctx);
    });
    ctx.font = "bold 22pt Courier";
    ctx.fillText("Scores:" + scores.toFixed(0), 10, 30);
    ctx.font = "bold 16pt Courier";
    ctx.fillText("Lives:" + _enemy.lives, 10, 55);
    balls = balls.filter(({ deleted  })=>!deleted
    );
    enemies = enemies.filter(({ deleted  })=>!deleted
    );
    requestAnimationFrame(init);
}
requestAnimationFrame(init);

},{"./cannon":"kCaey","./ball":"ec3zJ","./enemy":"1H80V","./game":"fiRE9"}],"kCaey":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Cannon", ()=>Cannon
);
var _game = require("./game");
class Cannon {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.topX = x - 10;
        this.topY = y - 45;
        this.angle = 0;
        this.image = document.getElementById("cannon");
        _game.game.gameObjects.push(this);
    }
    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y - 25);
        ctx.rotate(this.angle);
        ctx.translate(-this.x, -(this.y - 25));
        ctx.drawImage(this.image, this.x - 10, this.y - 45, 50, 25);
    }
    rotateTop(position) {
        if (!position) return;
        let angle = Math.atan2(position.y - this.y + 22.5, position.x - this.x + 5);
        if (angle < -1 || angle > 1.3) return;
        this.angle = angle;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","./game":"fiRE9"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"fiRE9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Game", ()=>Game
);
parcelHelpers.export(exports, "game", ()=>game
);
class Game {
    constructor(canvas){
        this.width = canvas.width;
        this.height = canvas.height;
        this.gameObjects = [];
        this.ctx = canvas.getContext("2d");
    }
    update() {
        this.gameObjects.forEach((go)=>{
            go.update(game);
        });
    }
    render() {
        this.gameObjects.forEach((go)=>{
            go.draw(this.ctx);
        });
    }
}
const game = new Game(document.querySelector("canvas"));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ec3zJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Ball", ()=>Ball
);
const ballImage = document.getElementById("ball");
class Ball {
    constructor(angle, x, y){
        this.radius = 15;
        this.mass = this.radius;
        this.angle = angle;
        this.x = x;
        this.y = y;
        this.gravity = 0.05;
        this.elasticity = 0.5;
        this.friction = 0.008;
        this.dx = Math.cos(angle) * 7;
        this.dy = Math.sin(angle) * 7;
    }
    move() {
        const radius = this.radius;
        if (this.y + this.gravity + this.dy <= 600) this.dy += this.gravity;
        if (this.x <= radius - this.dx || this.x >= 800 - radius - this.dx) {
            this.dx *= -1;
            this.dy *= this.elasticity;
        }
        if (this.y <= radius - this.dy || this.y >= 600 - radius - this.dy) {
            this.dy *= -1;
            this.dy *= this.elasticity;
        }
        this.dx = this.dx - this.dx * this.friction;
        this.x += this.dx;
        this.y += this.dy;
        if (Math.abs(this.dx) < 0.05 && Math.abs(this.dy) < 0.05 && this.y > 520) this.deleted = true;
    }
    draw(ctx) {
        ctx.drawImage(ballImage, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
        ctx.fill();
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1H80V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "lives", ()=>lives
);
parcelHelpers.export(exports, "Enemy", ()=>Enemy
);
const enemyImage = document.getElementById("enemy");
let lives = 3;
class Enemy {
    constructor(x, y, radius){
        this.radius = radius;
        this.maxHealth = radius * 5;
        this._health = this.maxHealth;
        this.image = enemyImage;
        this.x = x;
        this.y = y;
    }
    set health(value) {
        this._health = Math.max(0, value);
    }
    get health() {
        return this._health;
    }
    damage(value1) {
        this._health -= value1;
        if (this._health <= 0) this.deleted = true;
    }
    setSprite(image) {
        this.image = image;
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
        if (this.maxHealth === this._health) return;
        let width = this._health / this.maxHealth * this.radius * 1.5;
        ctx.fillStyle = "green";
        ctx.fillRect(this.x - width / 2, this.y - this.radius - 10, width, 4);
    }
    update() {
        this.x -= 2;
        if (this.x + this.radius < 0) {
            this.deleted = true;
            lives -= 1;
        }
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["lBB98","hD4hw"], "hD4hw", "parcelRequire656f")

//# sourceMappingURL=index.379dd93c.js.map
