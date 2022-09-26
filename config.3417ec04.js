import { w as P } from "./iframe.6f0d8ddb.js";
import "./es.map.constructor.be929aeb.js";
import { StrictMode as k, Fragment as M, Component as D, useRef as x, useLayoutEffect as T } from "react";
import _, { version as y } from "react-dom";
import { j as l } from "./jsx-runtime.1e0c78f5.js";
function v(t) {
  return v = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, v(t);
}
function j(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function R(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function A(t, e, r) {
  return e && R(t.prototype, e), r && R(t, r), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function N(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && d(t, e);
}
function d(t, e) {
  return d = Object.setPrototypeOf || function(n, o) {
    return n.__proto__ = o, n;
  }, d(t, e);
}
function F(t) {
  var e = B();
  return function() {
    var n = h(t), o;
    if (e) {
      var u = h(this).constructor;
      o = Reflect.construct(n, arguments, u);
    } else
      o = n.apply(this, arguments);
    return W(this, o);
  };
}
function W(t, e) {
  if (e && (v(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return C(t);
}
function C(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function B() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function h(t) {
  return h = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, h(t);
}
function E(t, e, r, n, o, u, a) {
  try {
    var i = t[u](a), c = i.value;
  } catch (s) {
    r(s);
    return;
  }
  i.done ? e(c) : Promise.resolve(c).then(n, o);
}
function b(t) {
  return function() {
    var e = this, r = arguments;
    return new Promise(function(n, o) {
      var u = t.apply(e, r);
      function a(c) {
        E(u, n, o, a, i, "next", c);
      }
      function i(c) {
        E(u, n, o, a, i, "throw", c);
      }
      a(void 0);
    });
  };
}
var f = P.FRAMEWORK_OPTIONS, m = /* @__PURE__ */ new Map(), Y = function(e, r) {
  var n = r.id, o = r.component;
  if (!o)
    throw new Error("Unable to render story ".concat(n, " as the component annotation is missing from the default export"));
  return /* @__PURE__ */ l(o, {
    ...e
  });
}, I = function(e) {
  var r = e.callback, n = e.children, o = x();
  return T(function() {
    o.current !== r && (o.current = r, r());
  }, [r]), n;
}, U = /* @__PURE__ */ function() {
  var t = b(/* @__PURE__ */ regeneratorRuntime.mark(function e(r, n) {
    var o;
    return regeneratorRuntime.wrap(function(a) {
      for (; ; )
        switch (a.prev = a.next) {
          case 0:
            return a.next = 2, z(n);
          case 2:
            return o = a.sent, a.abrupt("return", new Promise(function(i) {
              o ? o.render(
                /* @__PURE__ */ l(I, {
                  callback: function() {
                    return i(null);
                  },
                  children: r
                })
              ) : _.render(r, n, function() {
                return i(null);
              });
            }));
          case 4:
          case "end":
            return a.stop();
        }
    }, e);
  }));
  return function(r, n) {
    return t.apply(this, arguments);
  };
}(), $ = y && (y.startsWith("18") || y.startsWith("0.0.0")), G = (f == null ? void 0 : f.legacyRootApi) !== !0, S = G && $, K = function(e) {
  var r = m.get(e);
  r && S ? (r.unmount(), m.delete(e)) : _.unmountComponentAtNode(e);
}, z = /* @__PURE__ */ function() {
  var t = b(/* @__PURE__ */ regeneratorRuntime.mark(function e(r) {
    var n, o;
    return regeneratorRuntime.wrap(function(a) {
      for (; ; )
        switch (a.prev = a.next) {
          case 0:
            if (S) {
              a.next = 2;
              break;
            }
            return a.abrupt("return", null);
          case 2:
            if (n = m.get(r), n) {
              a.next = 9;
              break;
            }
            return a.next = 6, import("./react-dom-client-placeholder.48e274be.js");
          case 6:
            o = a.sent.default, n = o.createRoot(r), m.set(r, n);
          case 9:
            return a.abrupt("return", n);
          case 10:
          case "end":
            return a.stop();
        }
    }, e);
  }));
  return function(r) {
    return t.apply(this, arguments);
  };
}(), L = /* @__PURE__ */ function(t) {
  N(r, t);
  var e = F(r);
  function r() {
    var n;
    j(this, r);
    for (var o = arguments.length, u = new Array(o), a = 0; a < o; a++)
      u[a] = arguments[a];
    return n = e.call.apply(e, [this].concat(u)), n.state = {
      hasError: !1
    }, n;
  }
  return A(r, [{
    key: "componentDidMount",
    value: function() {
      var o = this.state.hasError, u = this.props.showMain;
      o || u();
    }
  }, {
    key: "componentDidCatch",
    value: function(o) {
      var u = this.props.showException;
      u(o);
    }
  }, {
    key: "render",
    value: function() {
      var o = this.state.hasError, u = this.props.children;
      return o ? null : u;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function() {
      return {
        hasError: !0
      };
    }
  }]), r;
}(D), O = f != null && f.strictMode ? k : M;
function Z(t, e) {
  return w.apply(this, arguments);
}
function w() {
  return w = b(/* @__PURE__ */ regeneratorRuntime.mark(function t(e, r) {
    var n, o, u, a, i, c, s, g;
    return regeneratorRuntime.wrap(function(p) {
      for (; ; )
        switch (p.prev = p.next) {
          case 0:
            return n = e.storyContext, o = e.unboundStoryFn, u = e.showMain, a = e.showException, i = e.forceRemount, c = o, s = /* @__PURE__ */ l(L, {
              showMain: u,
              showException: a,
              children: /* @__PURE__ */ l(c, {
                ...n
              })
            }), g = O ? /* @__PURE__ */ l(O, {
              children: s
            }) : s, i && K(r), p.next = 7, U(g, r);
          case 7:
          case "end":
            return p.stop();
        }
    }, t);
  })), w.apply(this, arguments);
}
var ee = {
  framework: "react"
};
export {
  ee as parameters,
  Y as render,
  Z as renderToDOM
};
//# sourceMappingURL=config.3417ec04.js.map
