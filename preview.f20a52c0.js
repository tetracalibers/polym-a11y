var b = (u, r) => () => (r || u((r = { exports: {} }).exports, r), r.exports);
import { w as R, j as H, S as A } from "./iframe.6f0d8ddb.js";
var j = b((z, c) => {
  var f = "storybook/a11y", N = "a11yHighlight", O = "".concat(f, "/result"), k = "".concat(f, "/request"), $ = "".concat(f, "/running"), C = "".concat(f, "/error"), D = "".concat(f, "/manual"), P = "".concat(f, "/highlight"), h = {
    RESULT: O,
    REQUEST: k,
    RUNNING: $,
    ERROR: C,
    MANUAL: D,
    HIGHLIGHT: P
  };
  function y(u, r, n, i, a, s, e) {
    try {
      var o = u[s](e), l = o.value;
    } catch (m) {
      n(m);
      return;
    }
    o.done ? r(l) : Promise.resolve(l).then(i, a);
  }
  function S(u) {
    return function() {
      var r = this, n = arguments;
      return new Promise(function(i, a) {
        var s = u.apply(r, n);
        function e(l) {
          y(s, i, a, e, o, "next", l);
        }
        function o(l) {
          y(s, i, a, e, o, "throw", l);
        }
        e(void 0);
      });
    };
  }
  var q = R.document, M = R.window;
  c && c.hot && c.hot.decline && c.hot.decline();
  var v = H.getChannel(), g = !1, p, Y = /* @__PURE__ */ function() {
    var u = S(/* @__PURE__ */ regeneratorRuntime.mark(function r(n) {
      var i, a;
      return regeneratorRuntime.wrap(function(e) {
        for (; ; )
          switch (e.prev = e.next) {
            case 0:
              return e.next = 2, G(n);
            case 2:
              if (i = e.sent, a = i.manual, a) {
                e.next = 7;
                break;
              }
              return e.next = 7, w(n);
            case 7:
            case "end":
              return e.stop();
          }
      }, r);
    }));
    return function(n) {
      return u.apply(this, arguments);
    };
  }(), w = /* @__PURE__ */ function() {
    var u = S(/* @__PURE__ */ regeneratorRuntime.mark(function r(n) {
      var i, a, s, e, o, l, m, E, T;
      return regeneratorRuntime.wrap(function(t) {
        for (; ; )
          switch (t.prev = t.next) {
            case 0:
              return p = n, t.prev = 1, t.next = 4, G(n);
            case 4:
              if (i = t.sent, g) {
                t.next = 19;
                break;
              }
              return g = !0, v.emit(h.RUNNING), t.next = 10, import("./axe.de3a1531.js").then((U) => U.a);
            case 10:
              return a = t.sent.default, s = i.element, e = s === void 0 ? "#root" : s, o = i.config, l = i.options, m = l === void 0 ? {} : l, E = q.querySelector(e), a.reset(), o && a.configure(o), t.next = 17, a.run(E, m);
            case 17:
              T = t.sent, p === n ? v.emit(h.RESULT, T) : (g = !1, w(p));
            case 19:
              t.next = 24;
              break;
            case 21:
              t.prev = 21, t.t0 = t.catch(1), v.emit(h.ERROR, t.t0);
            case 24:
              return t.prev = 24, g = !1, t.finish(24);
            case 27:
            case "end":
              return t.stop();
          }
      }, r, null, [[1, 21, 24, 27]]);
    }));
    return function(n) {
      return u.apply(this, arguments);
    };
  }(), G = /* @__PURE__ */ function() {
    var u = S(/* @__PURE__ */ regeneratorRuntime.mark(function r(n) {
      var i, a;
      return regeneratorRuntime.wrap(function(e) {
        for (; ; )
          switch (e.prev = e.next) {
            case 0:
              return e.next = 2, M.__STORYBOOK_STORY_STORE__.loadStory({
                storyId: n
              });
            case 2:
              if (e.t0 = e.sent, e.t0) {
                e.next = 5;
                break;
              }
              e.t0 = {};
            case 5:
              return i = e.t0, a = i.parameters, e.abrupt("return", a.a11y || {
                config: {},
                options: {
                  restoreScroll: !0
                }
              });
            case 8:
            case "end":
              return e.stop();
          }
      }, r);
    }));
    return function(n) {
      return u.apply(this, arguments);
    };
  }();
  v.on(h.REQUEST, Y);
  v.on(h.MANUAL, w);
  var B = function(r) {
    return `
  outline: 2px dashed `.concat(r, `;
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(255,255,255,0.6);
`);
  }, d = R.document;
  c && c.hot && c.hot.decline && c.hot.decline();
  var I = H.getChannel(), Q = function(r) {
    var n = N;
    L();
    var i = Array.from(new Set(r.elements)), a = d.createElement("style");
    a.setAttribute("id", n), a.innerHTML = i.map(function(s) {
      return "".concat(s, `{
          `).concat(B(r.color), `
         }`);
    }).join(" "), d.head.appendChild(a);
  }, L = function() {
    var r = N, n = d.getElementById(r);
    n && n.parentNode.removeChild(n);
  };
  I.on(A, L);
  I.on(h.HIGHLIGHT, Q);
});
export default j();
//# sourceMappingURL=preview.f20a52c0.js.map
