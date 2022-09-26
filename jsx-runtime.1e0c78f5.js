import xe from "react";
var U = { exports: {} }, D = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var H, Pe;
function Ce() {
  if (Pe)
    return H;
  Pe = 1;
  var _ = Object.getOwnPropertySymbols, x = Object.prototype.hasOwnProperty, O = Object.prototype.propertyIsEnumerable;
  function T(h) {
    if (h == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(h);
  }
  function C() {
    try {
      if (!Object.assign)
        return !1;
      var h = new String("abc");
      if (h[5] = "de", Object.getOwnPropertyNames(h)[0] === "5")
        return !1;
      for (var m = {}, c = 0; c < 10; c++)
        m["_" + String.fromCharCode(c)] = c;
      var l = Object.getOwnPropertyNames(m).map(function(f) {
        return m[f];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var p = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        p[f] = f;
      }), Object.keys(Object.assign({}, p)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return H = C() ? Object.assign : function(h, m) {
    for (var c, l = T(h), p, f = 1; f < arguments.length; f++) {
      c = Object(arguments[f]);
      for (var b in c)
        x.call(c, b) && (l[b] = c[b]);
      if (_) {
        p = _(c);
        for (var g = 0; g < p.length; g++)
          O.call(c, p[g]) && (l[p[g]] = c[p[g]]);
      }
    }
    return l;
  }, H;
}
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function nr() {
  if (Te)
    return D;
  Te = 1, Ce();
  var _ = xe, x = 60103;
  if (D.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var O = Symbol.for;
    x = O("react.element"), D.Fragment = O("react.fragment");
  }
  var T = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = Object.prototype.hasOwnProperty, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(c, l, p) {
    var f, b = {}, g = null, w = null;
    p !== void 0 && (g = "" + p), l.key !== void 0 && (g = "" + l.key), l.ref !== void 0 && (w = l.ref);
    for (f in l)
      C.call(l, f) && !h.hasOwnProperty(f) && (b[f] = l[f]);
    if (c && c.defaultProps)
      for (f in l = c.defaultProps, l)
        b[f] === void 0 && (b[f] = l[f]);
    return { $$typeof: x, type: c, key: g, ref: w, props: b, _owner: T.current };
  }
  return D.jsx = m, D.jsxs = m, D;
}
var X = {};
/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function ar() {
  return we || (we = 1, function(_) {
    process.env.NODE_ENV !== "production" && function() {
      var x = xe, O = Ce(), T = 60103, C = 60106;
      _.Fragment = 60107;
      var h = 60108, m = 60114, c = 60109, l = 60110, p = 60112, f = 60113, b = 60120, g = 60115, w = 60116, $ = 60121, Z = 60122, Q = 60117, ee = 60129, re = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var v = Symbol.for;
        T = v("react.element"), C = v("react.portal"), _.Fragment = v("react.fragment"), h = v("react.strict_mode"), m = v("react.profiler"), c = v("react.provider"), l = v("react.context"), p = v("react.forward_ref"), f = v("react.suspense"), b = v("react.suspense_list"), g = v("react.memo"), w = v("react.lazy"), $ = v("react.block"), Z = v("react.server.block"), Q = v("react.fundamental"), v("react.scope"), v("react.opaque.id"), ee = v("react.debug_trace_mode"), v("react.offscreen"), re = v("react.legacy_hidden");
      }
      var te = typeof Symbol == "function" && Symbol.iterator, Se = "@@iterator";
      function Ae(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = te && e[te] || e[Se];
        return typeof r == "function" ? r : null;
      }
      var S = x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function R(e) {
        {
          for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
            t[n - 1] = arguments[n];
          ke("error", e, t);
        }
      }
      function ke(e, r, t) {
        {
          var n = S.ReactDebugCurrentFrame, o = n.getStackAddendum();
          o !== "" && (r += "%s", t = t.concat([o]));
          var u = t.map(function(i) {
            return "" + i;
          });
          u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
        }
      }
      var De = !1;
      function Ie(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === _.Fragment || e === m || e === ee || e === h || e === f || e === b || e === re || De || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === g || e.$$typeof === c || e.$$typeof === l || e.$$typeof === p || e.$$typeof === Q || e.$$typeof === $ || e[0] === Z));
      }
      function Ye(e, r, t) {
        var n = r.displayName || r.name || "";
        return e.displayName || (n !== "" ? t + "(" + n + ")" : t);
      }
      function ne(e) {
        return e.displayName || "Context";
      }
      function y(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && R("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case _.Fragment:
            return "Fragment";
          case C:
            return "Portal";
          case m:
            return "Profiler";
          case h:
            return "StrictMode";
          case f:
            return "Suspense";
          case b:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case l:
              var r = e;
              return ne(r) + ".Consumer";
            case c:
              var t = e;
              return ne(t._context) + ".Provider";
            case p:
              return Ye(e, e.render, "ForwardRef");
            case g:
              return y(e.type);
            case $:
              return y(e._render);
            case w: {
              var n = e, o = n._payload, u = n._init;
              try {
                return y(u(o));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var I = 0, ae, ie, oe, ue, fe, ce, se;
      function le() {
      }
      le.__reactDisabledLog = !0;
      function $e() {
        {
          if (I === 0) {
            ae = console.log, ie = console.info, oe = console.warn, ue = console.error, fe = console.group, ce = console.groupCollapsed, se = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: le,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          I++;
        }
      }
      function We() {
        {
          if (I--, I === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: O({}, e, {
                value: ae
              }),
              info: O({}, e, {
                value: ie
              }),
              warn: O({}, e, {
                value: oe
              }),
              error: O({}, e, {
                value: ue
              }),
              group: O({}, e, {
                value: fe
              }),
              groupCollapsed: O({}, e, {
                value: ce
              }),
              groupEnd: O({}, e, {
                value: se
              })
            });
          }
          I < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var V = S.ReactCurrentDispatcher, M;
      function W(e, r, t) {
        {
          if (M === void 0)
            try {
              throw Error();
            } catch (o) {
              var n = o.stack.trim().match(/\n( *(at )?)/);
              M = n && n[1] || "";
            }
          return `
` + M + e;
        }
      }
      var q = !1, F;
      {
        var Fe = typeof WeakMap == "function" ? WeakMap : Map;
        F = new Fe();
      }
      function ve(e, r) {
        if (!e || q)
          return "";
        {
          var t = F.get(e);
          if (t !== void 0)
            return t;
        }
        var n;
        q = !0;
        var o = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var u;
        u = V.current, V.current = null, $e();
        try {
          if (r) {
            var i = function() {
              throw Error();
            };
            if (Object.defineProperty(i.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(i, []);
              } catch (P) {
                n = P;
              }
              Reflect.construct(e, [], i);
            } else {
              try {
                i.call();
              } catch (P) {
                n = P;
              }
              e.call(i.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (P) {
              n = P;
            }
            e();
          }
        } catch (P) {
          if (P && n && typeof P.stack == "string") {
            for (var a = P.stack.split(`
`), E = n.stack.split(`
`), s = a.length - 1, d = E.length - 1; s >= 1 && d >= 0 && a[s] !== E[d]; )
              d--;
            for (; s >= 1 && d >= 0; s--, d--)
              if (a[s] !== E[d]) {
                if (s !== 1 || d !== 1)
                  do
                    if (s--, d--, d < 0 || a[s] !== E[d]) {
                      var j = `
` + a[s].replace(" at new ", " at ");
                      return typeof e == "function" && F.set(e, j), j;
                    }
                  while (s >= 1 && d >= 0);
                break;
              }
          }
        } finally {
          q = !1, V.current = u, We(), Error.prepareStackTrace = o;
        }
        var k = e ? e.displayName || e.name : "", je = k ? W(k) : "";
        return typeof e == "function" && F.set(e, je), je;
      }
      function de(e, r, t) {
        return ve(e, !1);
      }
      function Le(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function L(e, r, t) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return ve(e, Le(e));
        if (typeof e == "string")
          return W(e);
        switch (e) {
          case f:
            return W("Suspense");
          case b:
            return W("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case p:
              return de(e.render);
            case g:
              return L(e.type, r, t);
            case $:
              return de(e._render);
            case w: {
              var n = e, o = n._payload, u = n._init;
              try {
                return L(u(o), r, t);
              } catch {
              }
            }
          }
        return "";
      }
      var pe = {}, _e = S.ReactDebugCurrentFrame;
      function N(e) {
        if (e) {
          var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
          _e.setExtraStackFrame(t);
        } else
          _e.setExtraStackFrame(null);
      }
      function Ne(e, r, t, n, o) {
        {
          var u = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var i in e)
            if (u(e, i)) {
              var a = void 0;
              try {
                if (typeof e[i] != "function") {
                  var E = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw E.name = "Invariant Violation", E;
                }
                a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (s) {
                a = s;
              }
              a && !(a instanceof Error) && (N(o), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), N(null)), a instanceof Error && !(a.message in pe) && (pe[a.message] = !0, N(o), R("Failed %s type: %s", t, a.message), N(null));
            }
        }
      }
      var Y = S.ReactCurrentOwner, B = Object.prototype.hasOwnProperty, Ue = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, ge, Ee, G;
      G = {};
      function Ve(e) {
        if (B.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function Me(e) {
        if (B.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function qe(e, r) {
        if (typeof e.ref == "string" && Y.current && r && Y.current.stateNode !== r) {
          var t = y(Y.current.type);
          G[t] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', y(Y.current.type), e.ref), G[t] = !0);
        }
      }
      function Be(e, r) {
        {
          var t = function() {
            ge || (ge = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
          };
          t.isReactWarning = !0, Object.defineProperty(e, "key", {
            get: t,
            configurable: !0
          });
        }
      }
      function Ge(e, r) {
        {
          var t = function() {
            Ee || (Ee = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
          };
          t.isReactWarning = !0, Object.defineProperty(e, "ref", {
            get: t,
            configurable: !0
          });
        }
      }
      var Je = function(e, r, t, n, o, u, i) {
        var a = {
          $$typeof: T,
          type: e,
          key: r,
          ref: t,
          props: i,
          _owner: u
        };
        return a._store = {}, Object.defineProperty(a._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(a, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: n
        }), Object.defineProperty(a, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: o
        }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
      };
      function Ke(e, r, t, n, o) {
        {
          var u, i = {}, a = null, E = null;
          t !== void 0 && (a = "" + t), Me(r) && (a = "" + r.key), Ve(r) && (E = r.ref, qe(r, o));
          for (u in r)
            B.call(r, u) && !Ue.hasOwnProperty(u) && (i[u] = r[u]);
          if (e && e.defaultProps) {
            var s = e.defaultProps;
            for (u in s)
              i[u] === void 0 && (i[u] = s[u]);
          }
          if (a || E) {
            var d = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
            a && Be(i, d), E && Ge(i, d);
          }
          return Je(e, a, E, o, n, Y.current, i);
        }
      }
      var J = S.ReactCurrentOwner, he = S.ReactDebugCurrentFrame;
      function A(e) {
        if (e) {
          var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
          he.setExtraStackFrame(t);
        } else
          he.setExtraStackFrame(null);
      }
      var K;
      K = !1;
      function z(e) {
        return typeof e == "object" && e !== null && e.$$typeof === T;
      }
      function Re() {
        {
          if (J.current) {
            var e = y(J.current.type);
            if (e)
              return `

Check the render method of \`` + e + "`.";
          }
          return "";
        }
      }
      function ze(e) {
        {
          if (e !== void 0) {
            var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
            return `

Check your code at ` + r + ":" + t + ".";
          }
          return "";
        }
      }
      var be = {};
      function He(e) {
        {
          var r = Re();
          if (!r) {
            var t = typeof e == "string" ? e : e.displayName || e.name;
            t && (r = `

Check the top-level render call using <` + t + ">.");
          }
          return r;
        }
      }
      function Oe(e, r) {
        {
          if (!e._store || e._store.validated || e.key != null)
            return;
          e._store.validated = !0;
          var t = He(r);
          if (be[t])
            return;
          be[t] = !0;
          var n = "";
          e && e._owner && e._owner !== J.current && (n = " It was passed a child from " + y(e._owner.type) + "."), A(e), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), A(null);
        }
      }
      function me(e, r) {
        {
          if (typeof e != "object")
            return;
          if (Array.isArray(e))
            for (var t = 0; t < e.length; t++) {
              var n = e[t];
              z(n) && Oe(n, r);
            }
          else if (z(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var o = Ae(e);
            if (typeof o == "function" && o !== e.entries)
              for (var u = o.call(e), i; !(i = u.next()).done; )
                z(i.value) && Oe(i.value, r);
          }
        }
      }
      function Xe(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var t;
          if (typeof r == "function")
            t = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === p || r.$$typeof === g))
            t = r.propTypes;
          else
            return;
          if (t) {
            var n = y(r);
            Ne(t, e.props, "prop", n, e);
          } else if (r.PropTypes !== void 0 && !K) {
            K = !0;
            var o = y(r);
            R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Ze(e) {
        {
          for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
            var n = r[t];
            if (n !== "children" && n !== "key") {
              A(e), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), A(null);
              break;
            }
          }
          e.ref !== null && (A(e), R("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
        }
      }
      function ye(e, r, t, n, o, u) {
        {
          var i = Ie(e);
          if (!i) {
            var a = "";
            (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var E = ze(o);
            E ? a += E : a += Re();
            var s;
            e === null ? s = "null" : Array.isArray(e) ? s = "array" : e !== void 0 && e.$$typeof === T ? (s = "<" + (y(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
          }
          var d = Ke(e, r, t, o, u);
          if (d == null)
            return d;
          if (i) {
            var j = r.children;
            if (j !== void 0)
              if (n)
                if (Array.isArray(j)) {
                  for (var k = 0; k < j.length; k++)
                    me(j[k], e);
                  Object.freeze && Object.freeze(j);
                } else
                  R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                me(j, e);
          }
          return e === _.Fragment ? Ze(d) : Xe(d), d;
        }
      }
      function Qe(e, r, t) {
        return ye(e, r, t, !0);
      }
      function er(e, r, t) {
        return ye(e, r, t, !1);
      }
      var rr = er, tr = Qe;
      _.jsx = rr, _.jsxs = tr;
    }();
  }(X)), X;
}
(function(_) {
  process.env.NODE_ENV === "production" ? _.exports = nr() : _.exports = ar();
})(U);
const or = U.exports.Fragment, ur = U.exports.jsx, fr = U.exports.jsxs;
export {
  or as F,
  fr as a,
  ur as j
};
//# sourceMappingURL=jsx-runtime.1e0c78f5.js.map
