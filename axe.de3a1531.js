import { g as nx, c as ix } from "./iframe.6f0d8ddb.js";
function ox(Dt, tr) {
  for (var y = 0; y < tr.length; y++) {
    const Ke = tr[y];
    if (typeof Ke != "string" && !Array.isArray(Ke)) {
      for (const R in Ke)
        if (R !== "default" && !(R in Dt)) {
          const h = Object.getOwnPropertyDescriptor(Ke, R);
          h && Object.defineProperty(Dt, R, h.get ? h : {
            enumerable: !0,
            get: () => Ke[R]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(Dt, Symbol.toStringTag, { value: "Module" }));
}
var ei = { exports: {} };
/*! axe v4.4.3
 * Copyright (c) 2022 Deque Systems, Inc.
 *
 * Your use of this Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * This entire copyright notice must appear in every copy of this file you
 * distribute or in any file that contains substantial portions of this source
 * code.
 */
(function(Dt) {
  (function tr(y) {
    var Ke = y, R = y.document, h = h || {};
    h.version = "4.4.3", P(Dt) === "object" && Dt.exports && typeof tr.toString == "function" && (h.source = "(" + tr.toString() + ')(typeof window === "object" ? window : this);', Dt.exports = h), typeof y.getComputedStyle == "function" && (y.axe = h);
    function rr(A) {
      this.name = "SupportError", this.cause = A.cause, this.message = "`".concat(A.cause, "` - feature unsupported in your environment."), A.ruleId && (this.ruleId = A.ruleId, this.message += " Skipping ".concat(this.ruleId, " rule.")), this.stack = new Error().stack;
    }
    rr.prototype = Object.create(Error.prototype), rr.prototype.constructor = rr;
    var Wu = ["node"], Gu = ["node"], Yu = ["variant"], Ku = ["matches"], Xu = ["chromium"], Ju = ["noImplicit"], Qu = ["noPresentational"], Zu = ["nodes"], es = ["node"], ts = ["relatedNodes"], rs = ["environmentData"], as = ["environmentData"], ns = ["node"], is = ["environmentData"], os = ["environmentData"], ls = ["environmentData"];
    function us(A, S, q) {
      return S in A ? Object.defineProperty(A, S, {
        value: q,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : A[S] = q, A;
    }
    function ti(A, S) {
      if (typeof S != "function" && S !== null)
        throw new TypeError("Super expression must either be null or a function");
      A.prototype = Object.create(S && S.prototype, {
        constructor: {
          value: A,
          writable: !0,
          configurable: !0
        }
      }), Object.defineProperty(A, "prototype", {
        writable: !1
      }), S && _a(A, S);
    }
    function _a(A, S) {
      return _a = Object.setPrototypeOf || function(G, fe) {
        return G.__proto__ = fe, G;
      }, _a(A, S);
    }
    function ri(A) {
      var S = cs();
      return function() {
        var G = Cr(A), fe;
        if (S) {
          var De = Cr(this).constructor;
          fe = Reflect.construct(G, arguments, De);
        } else
          fe = G.apply(this, arguments);
        return ss(this, fe);
      };
    }
    function ss(A, S) {
      if (S && (P(S) === "object" || typeof S == "function"))
        return S;
      if (S !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return ai(A);
    }
    function ai(A) {
      if (A === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return A;
    }
    function cs() {
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
    function Cr(A) {
      return Cr = Object.setPrototypeOf ? Object.getPrototypeOf : function(q) {
        return q.__proto__ || Object.getPrototypeOf(q);
      }, Cr(A);
    }
    function qe(A, S) {
      if (A == null)
        return {};
      var q = ds(A, S), G, fe;
      if (Object.getOwnPropertySymbols) {
        var De = Object.getOwnPropertySymbols(A);
        for (fe = 0; fe < De.length; fe++)
          G = De[fe], !(S.indexOf(G) >= 0) && (!Object.prototype.propertyIsEnumerable.call(A, G) || (q[G] = A[G]));
      }
      return q;
    }
    function ds(A, S) {
      if (A == null)
        return {};
      var q = {}, G = Object.keys(A), fe, De;
      for (De = 0; De < G.length; De++)
        fe = G[De], !(S.indexOf(fe) >= 0) && (q[fe] = A[fe]);
      return q;
    }
    function ie(A) {
      return ms(A) || ps(A) || xa(A) || fs();
    }
    function fs() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function ps(A) {
      if (typeof Symbol < "u" && A[Symbol.iterator] != null || A["@@iterator"] != null)
        return Array.from(A);
    }
    function ms(A) {
      if (Array.isArray(A))
        return Ea(A);
    }
    function ve(A, S) {
      return gs(A) || vs(A, S) || xa(A, S) || hs();
    }
    function hs() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function vs(A, S) {
      var q = A == null ? null : typeof Symbol < "u" && A[Symbol.iterator] || A["@@iterator"];
      if (q != null) {
        var G = [], fe = !0, De = !1, Xe, C;
        try {
          for (q = q.call(A); !(fe = (Xe = q.next()).done) && (G.push(Xe.value), !(S && G.length === S)); fe = !0)
            ;
        } catch (Te) {
          De = !0, C = Te;
        } finally {
          try {
            !fe && q.return != null && q.return();
          } finally {
            if (De)
              throw C;
          }
        }
        return G;
      }
    }
    function gs(A) {
      if (Array.isArray(A))
        return A;
    }
    function de() {
      return de = Object.assign || function(A) {
        for (var S = 1; S < arguments.length; S++) {
          var q = arguments[S];
          for (var G in q)
            Object.prototype.hasOwnProperty.call(q, G) && (A[G] = q[G]);
        }
        return A;
      }, de.apply(this, arguments);
    }
    function Fr(A, S) {
      if (!(A instanceof S))
        throw new TypeError("Cannot call a class as a function");
    }
    function ni(A, S) {
      for (var q = 0; q < S.length; q++) {
        var G = S[q];
        G.enumerable = G.enumerable || !1, G.configurable = !0, "value" in G && (G.writable = !0), Object.defineProperty(A, G.key, G);
      }
    }
    function kr(A, S, q) {
      return S && ni(A.prototype, S), q && ni(A, q), Object.defineProperty(A, "prototype", {
        writable: !1
      }), A;
    }
    function Rr(A, S) {
      var q = typeof Symbol < "u" && A[Symbol.iterator] || A["@@iterator"];
      if (!q) {
        if (Array.isArray(A) || (q = xa(A)) || S && A && typeof A.length == "number") {
          q && (A = q);
          var G = 0, fe = function() {
          };
          return {
            s: fe,
            n: function() {
              return G >= A.length ? {
                done: !0
              } : {
                done: !1,
                value: A[G++]
              };
            },
            e: function(pt) {
              throw pt;
            },
            f: fe
          };
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var De = !0, Xe = !1, C;
      return {
        s: function() {
          q = q.call(A);
        },
        n: function() {
          var pt = q.next();
          return De = pt.done, pt;
        },
        e: function(pt) {
          Xe = !0, C = pt;
        },
        f: function() {
          try {
            !De && q.return != null && q.return();
          } finally {
            if (Xe)
              throw C;
          }
        }
      };
    }
    function xa(A, S) {
      if (!!A) {
        if (typeof A == "string")
          return Ea(A, S);
        var q = Object.prototype.toString.call(A).slice(8, -1);
        if (q === "Object" && A.constructor && (q = A.constructor.name), q === "Map" || q === "Set")
          return Array.from(A);
        if (q === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(q))
          return Ea(A, S);
      }
    }
    function Ea(A, S) {
      (S == null || S > A.length) && (S = A.length);
      for (var q = 0, G = new Array(S); q < S; q++)
        G[q] = A[q];
      return G;
    }
    function P(A) {
      return P = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(S) {
        return typeof S;
      } : function(S) {
        return S && typeof Symbol == "function" && S.constructor === Symbol && S !== Symbol.prototype ? "symbol" : typeof S;
      }, P(A);
    }
    (function() {
      var A = Object.create, S = Object.defineProperty, q = Object.getPrototypeOf, G = Object.prototype.hasOwnProperty, fe = Object.getOwnPropertyNames, De = Object.getOwnPropertyDescriptor, Xe = function(t) {
        return S(t, "__esModule", {
          value: !0
        });
      }, C = function(t, r) {
        return function() {
          return r || (r = {
            exports: {}
          }, t(r.exports, r)), r.exports;
        };
      }, Te = function(t, r) {
        Xe(t);
        for (var a in r)
          S(t, a, {
            get: r[a],
            enumerable: !0
          });
      }, pt = function(t, r, a) {
        if (Xe(t), P(r) === "object" || typeof r == "function") {
          var n = Rr(fe(r)), i;
          try {
            var o = function() {
              var s = i.value;
              !G.call(t, s) && s !== "default" && S(t, s, {
                get: function() {
                  return r[s];
                },
                enumerable: !(a = De(r, s)) || a.enumerable
              });
            };
            for (n.s(); !(i = n.n()).done; )
              o();
          } catch (l) {
            n.e(l);
          } finally {
            n.f();
          }
        }
        return t;
      }, Je = function(t) {
        return t && t.__esModule ? t : pt(S(A(q(t)), "default", {
          value: t,
          enumerable: !0
        }), t);
      }, ii = C(function(e) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        function t(o) {
          return o >= "a" && o <= "z" || o >= "A" && o <= "Z" || o === "-" || o === "_";
        }
        e.isIdentStart = t;
        function r(o) {
          return o >= "a" && o <= "z" || o >= "A" && o <= "Z" || o >= "0" && o <= "9" || o === "-" || o === "_";
        }
        e.isIdent = r;
        function a(o) {
          return o >= "a" && o <= "f" || o >= "A" && o <= "F" || o >= "0" && o <= "9";
        }
        e.isHex = a;
        function n(o) {
          for (var l = o.length, s = "", u = 0; u < l; ) {
            var c = o.charAt(u);
            if (e.identSpecialChars[c])
              s += "\\" + c;
            else if (c === "_" || c === "-" || c >= "A" && c <= "Z" || c >= "a" && c <= "z" || u !== 0 && c >= "0" && c <= "9")
              s += c;
            else {
              var d = c.charCodeAt(0);
              if ((d & 63488) === 55296) {
                var f = o.charCodeAt(u++);
                if ((d & 64512) !== 55296 || (f & 64512) !== 56320)
                  throw Error("UCS-2(decode): illegal sequence");
                d = ((d & 1023) << 10) + (f & 1023) + 65536;
              }
              s += "\\" + d.toString(16) + " ";
            }
            u++;
          }
          return s;
        }
        e.escapeIdentifier = n;
        function i(o) {
          for (var l = o.length, s = "", u = 0, c; u < l; ) {
            var d = o.charAt(u);
            d === '"' ? d = '\\"' : d === "\\" ? d = "\\\\" : (c = e.strReplacementsRev[d]) !== void 0 && (d = c), s += d, u++;
          }
          return '"' + s + '"';
        }
        e.escapeStr = i, e.identSpecialChars = {
          "!": !0,
          '"': !0,
          "#": !0,
          $: !0,
          "%": !0,
          "&": !0,
          "'": !0,
          "(": !0,
          ")": !0,
          "*": !0,
          "+": !0,
          ",": !0,
          ".": !0,
          "/": !0,
          ";": !0,
          "<": !0,
          "=": !0,
          ">": !0,
          "?": !0,
          "@": !0,
          "[": !0,
          "\\": !0,
          "]": !0,
          "^": !0,
          "`": !0,
          "{": !0,
          "|": !0,
          "}": !0,
          "~": !0
        }, e.strReplacementsRev = {
          "\n": "\\n",
          "\r": "\\r",
          "	": "\\t",
          "\f": "\\f",
          "\v": "\\v"
        }, e.singleQuoteEscapeChars = {
          n: `
`,
          r: "\r",
          t: "	",
          f: "\f",
          "\\": "\\",
          "'": "'"
        }, e.doubleQuotesEscapeChars = {
          n: `
`,
          r: "\r",
          t: "	",
          f: "\f",
          "\\": "\\",
          '"': '"'
        };
      }), bs = C(function(e) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var t = ii();
        function r(a, n, i, o, l, s) {
          var u = a.length, c = "";
          function d(g, x) {
            var E = "";
            for (n++, c = a.charAt(n); n < u; ) {
              if (c === g)
                return n++, E;
              if (c === "\\") {
                n++, c = a.charAt(n);
                var F = void 0;
                if (c === g)
                  E += g;
                else if ((F = x[c]) !== void 0)
                  E += F;
                else if (t.isHex(c)) {
                  var I = c;
                  for (n++, c = a.charAt(n); t.isHex(c); )
                    I += c, n++, c = a.charAt(n);
                  c === " " && (n++, c = a.charAt(n)), E += String.fromCharCode(parseInt(I, 16));
                  continue;
                } else
                  E += c;
              } else
                E += c;
              n++, c = a.charAt(n);
            }
            return E;
          }
          function f() {
            var g = "";
            for (c = a.charAt(n); n < u; ) {
              if (t.isIdent(c))
                g += c;
              else if (c === "\\") {
                if (n++, n >= u)
                  throw Error("Expected symbol but end of file reached.");
                if (c = a.charAt(n), t.identSpecialChars[c])
                  g += c;
                else if (t.isHex(c)) {
                  var x = c;
                  for (n++, c = a.charAt(n); t.isHex(c); )
                    x += c, n++, c = a.charAt(n);
                  c === " " && (n++, c = a.charAt(n)), g += String.fromCharCode(parseInt(x, 16));
                  continue;
                } else
                  g += c;
              } else
                return g;
              n++, c = a.charAt(n);
            }
            return g;
          }
          function p() {
            c = a.charAt(n);
            for (var g = !1; c === " " || c === "	" || c === `
` || c === "\r" || c === "\f"; )
              g = !0, n++, c = a.charAt(n);
            return g;
          }
          function m() {
            var g = b();
            if (n < u)
              throw Error('Rule expected but "' + a.charAt(n) + '" found.');
            return g;
          }
          function b() {
            var g = D();
            if (!g)
              return null;
            var x = g;
            for (c = a.charAt(n); c === ","; ) {
              if (n++, p(), x.type !== "selectors" && (x = {
                type: "selectors",
                selectors: [g]
              }), g = D(), !g)
                throw Error('Rule expected after ",".');
              x.selectors.push(g);
            }
            return x;
          }
          function D() {
            p();
            var g = {
              type: "ruleSet"
            }, x = v();
            if (!x)
              return null;
            for (var E = g; x && (x.type = "rule", E.rule = x, E = x, p(), c = a.charAt(n), !(n >= u || c === "," || c === ")")); )
              if (l[c]) {
                var F = c;
                if (n++, p(), x = v(), !x)
                  throw Error('Rule expected after "' + F + '".');
                x.nestingOperator = F;
              } else
                x = v(), x && (x.nestingOperator = null);
            return g;
          }
          function v() {
            for (var g = null; n < u; )
              if (c = a.charAt(n), c === "*")
                n++, (g = g || {}).tagName = "*";
              else if (t.isIdentStart(c) || c === "\\")
                (g = g || {}).tagName = f();
              else if (c === ".")
                n++, g = g || {}, (g.classNames = g.classNames || []).push(f());
              else if (c === "#")
                n++, (g = g || {}).id = f();
              else if (c === "[") {
                n++, p();
                var x = {
                  name: f()
                };
                if (p(), c === "]")
                  n++;
                else {
                  var E = "";
                  if (o[c] && (E = c, n++, c = a.charAt(n)), n >= u)
                    throw Error('Expected "=" but end of file reached.');
                  if (c !== "=")
                    throw Error('Expected "=" but "' + c + '" found.');
                  x.operator = E + "=", n++, p();
                  var F = "";
                  if (x.valueType = "string", c === '"')
                    F = d('"', t.doubleQuotesEscapeChars);
                  else if (c === "'")
                    F = d("'", t.singleQuoteEscapeChars);
                  else if (s && c === "$")
                    n++, F = f(), x.valueType = "substitute";
                  else {
                    for (; n < u && c !== "]"; )
                      F += c, n++, c = a.charAt(n);
                    F = F.trim();
                  }
                  if (p(), n >= u)
                    throw Error('Expected "]" but end of file reached.');
                  if (c !== "]")
                    throw Error('Expected "]" but "' + c + '" found.');
                  n++, x.value = F;
                }
                g = g || {}, (g.attrs = g.attrs || []).push(x);
              } else if (c === ":") {
                n++;
                var I = f(), M = {
                  name: I
                };
                if (c === "(") {
                  n++;
                  var U = "";
                  if (p(), i[I] === "selector")
                    M.valueType = "selector", U = b();
                  else {
                    if (M.valueType = i[I] || "string", c === '"')
                      U = d('"', t.doubleQuotesEscapeChars);
                    else if (c === "'")
                      U = d("'", t.singleQuoteEscapeChars);
                    else if (s && c === "$")
                      n++, U = f(), M.valueType = "substitute";
                    else {
                      for (; n < u && c !== ")"; )
                        U += c, n++, c = a.charAt(n);
                      U = U.trim();
                    }
                    p();
                  }
                  if (n >= u)
                    throw Error('Expected ")" but end of file reached.');
                  if (c !== ")")
                    throw Error('Expected ")" but "' + c + '" found.');
                  n++, M.value = U;
                }
                g = g || {}, (g.pseudos = g.pseudos || []).push(M);
              } else
                break;
            return g;
          }
          return m();
        }
        e.parseCssSelector = r;
      }), ys = C(function(e) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var t = ii();
        function r(a) {
          var n = "";
          switch (a.type) {
            case "ruleSet":
              for (var i = a.rule, o = []; i; )
                i.nestingOperator && o.push(i.nestingOperator), o.push(r(i)), i = i.rule;
              n = o.join(" ");
              break;
            case "selectors":
              n = a.selectors.map(r).join(", ");
              break;
            case "rule":
              a.tagName && (a.tagName === "*" ? n = "*" : n = t.escapeIdentifier(a.tagName)), a.id && (n += "#" + t.escapeIdentifier(a.id)), a.classNames && (n += a.classNames.map(function(l) {
                return "." + t.escapeIdentifier(l);
              }).join("")), a.attrs && (n += a.attrs.map(function(l) {
                return "operator" in l ? l.valueType === "substitute" ? "[" + t.escapeIdentifier(l.name) + l.operator + "$" + l.value + "]" : "[" + t.escapeIdentifier(l.name) + l.operator + t.escapeStr(l.value) + "]" : "[" + t.escapeIdentifier(l.name) + "]";
              }).join("")), a.pseudos && (n += a.pseudos.map(function(l) {
                return l.valueType ? l.valueType === "selector" ? ":" + t.escapeIdentifier(l.name) + "(" + r(l.value) + ")" : l.valueType === "substitute" ? ":" + t.escapeIdentifier(l.name) + "($" + l.value + ")" : l.valueType === "numeric" ? ":" + t.escapeIdentifier(l.name) + "(" + l.value + ")" : ":" + t.escapeIdentifier(l.name) + "(" + t.escapeIdentifier(l.value) + ")" : ":" + t.escapeIdentifier(l.name);
              }).join(""));
              break;
            default:
              throw Error('Unknown entity type: "' + a.type + '".');
          }
          return n;
        }
        e.renderEntity = r;
      }), oi = C(function(e) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var t = bs(), r = ys(), a = function() {
          function n() {
            this.pseudos = {}, this.attrEqualityMods = {}, this.ruleNestingOperators = {}, this.substitutesEnabled = !1;
          }
          return n.prototype.registerSelectorPseudos = function() {
            for (var i = [], o = 0; o < arguments.length; o++)
              i[o] = arguments[o];
            for (var l = 0, s = i; l < s.length; l++) {
              var u = s[l];
              this.pseudos[u] = "selector";
            }
            return this;
          }, n.prototype.unregisterSelectorPseudos = function() {
            for (var i = [], o = 0; o < arguments.length; o++)
              i[o] = arguments[o];
            for (var l = 0, s = i; l < s.length; l++) {
              var u = s[l];
              delete this.pseudos[u];
            }
            return this;
          }, n.prototype.registerNumericPseudos = function() {
            for (var i = [], o = 0; o < arguments.length; o++)
              i[o] = arguments[o];
            for (var l = 0, s = i; l < s.length; l++) {
              var u = s[l];
              this.pseudos[u] = "numeric";
            }
            return this;
          }, n.prototype.unregisterNumericPseudos = function() {
            for (var i = [], o = 0; o < arguments.length; o++)
              i[o] = arguments[o];
            for (var l = 0, s = i; l < s.length; l++) {
              var u = s[l];
              delete this.pseudos[u];
            }
            return this;
          }, n.prototype.registerNestingOperators = function() {
            for (var i = [], o = 0; o < arguments.length; o++)
              i[o] = arguments[o];
            for (var l = 0, s = i; l < s.length; l++) {
              var u = s[l];
              this.ruleNestingOperators[u] = !0;
            }
            return this;
          }, n.prototype.unregisterNestingOperators = function() {
            for (var i = [], o = 0; o < arguments.length; o++)
              i[o] = arguments[o];
            for (var l = 0, s = i; l < s.length; l++) {
              var u = s[l];
              delete this.ruleNestingOperators[u];
            }
            return this;
          }, n.prototype.registerAttrEqualityMods = function() {
            for (var i = [], o = 0; o < arguments.length; o++)
              i[o] = arguments[o];
            for (var l = 0, s = i; l < s.length; l++) {
              var u = s[l];
              this.attrEqualityMods[u] = !0;
            }
            return this;
          }, n.prototype.unregisterAttrEqualityMods = function() {
            for (var i = [], o = 0; o < arguments.length; o++)
              i[o] = arguments[o];
            for (var l = 0, s = i; l < s.length; l++) {
              var u = s[l];
              delete this.attrEqualityMods[u];
            }
            return this;
          }, n.prototype.enableSubstitutes = function() {
            return this.substitutesEnabled = !0, this;
          }, n.prototype.disableSubstitutes = function() {
            return this.substitutesEnabled = !1, this;
          }, n.prototype.parse = function(i) {
            return t.parseCssSelector(i, 0, this.pseudos, this.attrEqualityMods, this.ruleNestingOperators, this.substitutesEnabled);
          }, n.prototype.render = function(i) {
            return r.renderEntity(i).trim();
          }, n;
        }();
        e.CssSelectorParser = a;
      }), Ds = C(function(e, t) {
        t.exports = function() {
        };
      }), wt = C(function(e, t) {
        var r = Ds()();
        t.exports = function(a) {
          return a !== r && a !== null;
        };
      }), li = C(function(e, t) {
        var r = wt(), a = Array.prototype.forEach, n = Object.create, i = function(l, s) {
          var u;
          for (u in l)
            s[u] = l[u];
        };
        t.exports = function(o) {
          var l = n(null);
          return a.call(arguments, function(s) {
            !r(s) || i(Object(s), l);
          }), l;
        };
      }), ws = C(function(e, t) {
        t.exports = function() {
          var r = Math.sign;
          return typeof r != "function" ? !1 : r(10) === 1 && r(-20) === -1;
        };
      }), _s = C(function(e, t) {
        t.exports = function(r) {
          return r = Number(r), isNaN(r) || r === 0 ? r : r > 0 ? 1 : -1;
        };
      }), xs = C(function(e, t) {
        t.exports = ws()() ? Math.sign : _s();
      }), Es = C(function(e, t) {
        var r = xs(), a = Math.abs, n = Math.floor;
        t.exports = function(i) {
          return isNaN(i) ? 0 : (i = Number(i), i === 0 || !isFinite(i) ? i : r(i) * n(a(i)));
        };
      }), _t = C(function(e, t) {
        var r = Es(), a = Math.max;
        t.exports = function(n) {
          return a(0, r(n));
        };
      }), ui = C(function(e, t) {
        var r = _t();
        t.exports = function(a, n, i) {
          var o;
          return isNaN(a) ? (o = n, o >= 0 ? i && o ? o - 1 : o : 1) : a === !1 ? !1 : r(a);
        };
      }), mt = C(function(e, t) {
        t.exports = function(r) {
          if (typeof r != "function")
            throw new TypeError(r + " is not a function");
          return r;
        };
      }), Nt = C(function(e, t) {
        var r = wt();
        t.exports = function(a) {
          if (!r(a))
            throw new TypeError("Cannot use null or undefined");
          return a;
        };
      }), As = C(function(e, t) {
        var r = mt(), a = Nt(), n = Function.prototype.bind, i = Function.prototype.call, o = Object.keys, l = Object.prototype.propertyIsEnumerable;
        t.exports = function(s, u) {
          return function(c, d) {
            var f, p = arguments[2], m = arguments[3];
            return c = Object(a(c)), r(d), f = o(c), m && f.sort(typeof m == "function" ? n.call(m, c) : void 0), typeof s != "function" && (s = f[s]), i.call(s, f, function(b, D) {
              return l.call(c, b) ? i.call(d, p, c[b], b, c, D) : u;
            });
          };
        };
      }), Tr = C(function(e, t) {
        t.exports = As()("forEach");
      }), xt = C(function() {
      }), Cs = C(function(e, t) {
        t.exports = function() {
          var r = Object.assign, a;
          return typeof r != "function" ? !1 : (a = {
            foo: "raz"
          }, r(a, {
            bar: "dwa"
          }, {
            trzy: "trzy"
          }), a.foo + a.bar + a.trzy === "razdwatrzy");
        };
      }), Fs = C(function(e, t) {
        t.exports = function() {
          try {
            return Object.keys("primitive"), !0;
          } catch {
            return !1;
          }
        };
      }), ks = C(function(e, t) {
        var r = wt(), a = Object.keys;
        t.exports = function(n) {
          return a(r(n) ? Object(n) : n);
        };
      }), Rs = C(function(e, t) {
        t.exports = Fs()() ? Object.keys : ks();
      }), Ts = C(function(e, t) {
        var r = Rs(), a = Nt(), n = Math.max;
        t.exports = function(i, o) {
          var l, s, u = n(arguments.length, 2), c;
          for (i = Object(a(i)), c = function(f) {
            try {
              i[f] = o[f];
            } catch (p) {
              l || (l = p);
            }
          }, s = 1; s < u; ++s)
            o = arguments[s], r(o).forEach(c);
          if (l !== void 0)
            throw l;
          return i;
        };
      }), si = C(function(e, t) {
        t.exports = Cs()() ? Object.assign : Ts();
      }), Ss = C(function(e, t) {
        var r = wt(), a = {
          function: !0,
          object: !0
        };
        t.exports = function(n) {
          return r(n) && a[P(n)] || !1;
        };
      }), Os = C(function(e, t) {
        var r = si(), a = Ss(), n = wt(), i = Error.captureStackTrace;
        t.exports = function(o) {
          var l = new Error(o), s = arguments[1], u = arguments[2];
          return n(u) || a(s) && (u = s, s = null), n(u) && r(l, u), n(s) && (l.code = s), i && i(l, t.exports), l;
        };
      }), ci = C(function(e, t) {
        var r = Nt(), a = Object.defineProperty, n = Object.getOwnPropertyDescriptor, i = Object.getOwnPropertyNames, o = Object.getOwnPropertySymbols;
        t.exports = function(l, s) {
          var u, c = Object(r(s));
          if (l = Object(r(l)), i(c).forEach(function(d) {
            try {
              a(l, d, n(s, d));
            } catch (f) {
              u = f;
            }
          }), typeof o == "function" && o(c).forEach(function(d) {
            try {
              a(l, d, n(s, d));
            } catch (f) {
              u = f;
            }
          }), u !== void 0)
            throw u;
          return l;
        };
      }), di = C(function(e, t) {
        var r = _t(), a = function(u, c) {
          return c;
        }, n, i, o, l;
        try {
          Object.defineProperty(a, "length", {
            configurable: !0,
            writable: !1,
            enumerable: !1,
            value: 1
          });
        } catch {
        }
        a.length === 1 ? (n = {
          configurable: !0,
          writable: !1,
          enumerable: !1
        }, i = Object.defineProperty, t.exports = function(s, u) {
          return u = r(u), s.length === u ? s : (n.value = u, i(s, "length", n));
        }) : (l = ci(), o = function() {
          var s = [];
          return function(u) {
            var c, d = 0;
            if (s[u])
              return s[u];
            for (c = []; u--; )
              c.push("a" + (++d).toString(36));
            return new Function("fn", "return function (" + c.join(", ") + ") { return fn.apply(this, arguments); };");
          };
        }(), t.exports = function(s, u) {
          var c;
          if (u = r(u), s.length === u)
            return s;
          c = o(u)(s);
          try {
            l(c, s);
          } catch {
          }
          return c;
        });
      }), fi = C(function(e, t) {
        var r = void 0;
        t.exports = function(a) {
          return a !== r && a !== null;
        };
      }), Ns = C(function(e, t) {
        var r = fi(), a = {
          object: !0,
          function: !0,
          undefined: !0
        };
        t.exports = function(n) {
          return r(n) ? hasOwnProperty.call(a, P(n)) : !1;
        };
      }), Is = C(function(e, t) {
        var r = Ns();
        t.exports = function(a) {
          if (!r(a))
            return !1;
          try {
            return a.constructor ? a.constructor.prototype === a : !1;
          } catch {
            return !1;
          }
        };
      }), Ps = C(function(e, t) {
        var r = Is();
        t.exports = function(a) {
          if (typeof a != "function" || !hasOwnProperty.call(a, "length"))
            return !1;
          try {
            if (typeof a.length != "number" || typeof a.call != "function" || typeof a.apply != "function")
              return !1;
          } catch {
            return !1;
          }
          return !r(a);
        };
      }), Ms = C(function(e, t) {
        var r = Ps(), a = /^\s*class[\s{/}]/, n = Function.prototype.toString;
        t.exports = function(i) {
          return !(!r(i) || a.test(n.call(i)));
        };
      }), Ls = C(function(e, t) {
        var r = "razdwatrzy";
        t.exports = function() {
          return typeof r.contains != "function" ? !1 : r.contains("dwa") === !0 && r.contains("foo") === !1;
        };
      }), qs = C(function(e, t) {
        var r = String.prototype.indexOf;
        t.exports = function(a) {
          return r.call(this, a, arguments[1]) > -1;
        };
      }), Bs = C(function(e, t) {
        t.exports = Ls()() ? String.prototype.contains : qs();
      }), Et = C(function(e, t) {
        var r = fi(), a = Ms(), n = si(), i = li(), o = Bs(), l = t.exports = function(s, u) {
          var c, d, f, p, m;
          return arguments.length < 2 || typeof s != "string" ? (p = u, u = s, s = null) : p = arguments[2], r(s) ? (c = o.call(s, "c"), d = o.call(s, "e"), f = o.call(s, "w")) : (c = f = !0, d = !1), m = {
            value: u,
            configurable: c,
            enumerable: d,
            writable: f
          }, p ? n(i(p), m) : m;
        };
        l.gs = function(s, u, c) {
          var d, f, p, m;
          return typeof s != "string" ? (p = c, c = u, u = s, s = null) : p = arguments[3], r(u) ? a(u) ? r(c) ? a(c) || (p = c, c = void 0) : c = void 0 : (p = u, u = c = void 0) : u = void 0, r(s) ? (d = o.call(s, "c"), f = o.call(s, "e")) : (d = !0, f = !1), m = {
            get: u,
            set: c,
            configurable: d,
            enumerable: f
          }, p ? n(i(p), m) : m;
        };
      }), js = C(function(e, t) {
        var r = Et(), a = mt(), n = Function.prototype.apply, i = Function.prototype.call, o = Object.create, l = Object.defineProperty, s = Object.defineProperties, u = Object.prototype.hasOwnProperty, c = {
          configurable: !0,
          enumerable: !1,
          writable: !0
        }, d, f, p, m, b, D, v;
        d = function(x, E) {
          var F;
          return a(E), u.call(this, "__ee__") ? F = this.__ee__ : (F = c.value = o(null), l(this, "__ee__", c), c.value = null), F[x] ? P(F[x]) === "object" ? F[x].push(E) : F[x] = [F[x], E] : F[x] = E, this;
        }, f = function(x, E) {
          var F, I;
          return a(E), I = this, d.call(this, x, F = function() {
            p.call(I, x, F), n.call(E, this, arguments);
          }), F.__eeOnceListener__ = E, this;
        }, p = function(x, E) {
          var F, I, M, U;
          if (a(E), !u.call(this, "__ee__"))
            return this;
          if (F = this.__ee__, !F[x])
            return this;
          if (I = F[x], P(I) === "object")
            for (U = 0; M = I[U]; ++U)
              (M === E || M.__eeOnceListener__ === E) && (I.length === 2 ? F[x] = I[U ? 0 : 1] : I.splice(U, 1));
          else
            (I === E || I.__eeOnceListener__ === E) && delete F[x];
          return this;
        }, m = function(x) {
          var E, F, I, M, U;
          if (!!u.call(this, "__ee__") && (M = this.__ee__[x], !!M))
            if (P(M) === "object") {
              for (F = arguments.length, U = new Array(F - 1), E = 1; E < F; ++E)
                U[E - 1] = arguments[E];
              for (M = M.slice(), E = 0; I = M[E]; ++E)
                n.call(I, this, U);
            } else
              switch (arguments.length) {
                case 1:
                  i.call(M, this);
                  break;
                case 2:
                  i.call(M, this, arguments[1]);
                  break;
                case 3:
                  i.call(M, this, arguments[1], arguments[2]);
                  break;
                default:
                  for (F = arguments.length, U = new Array(F - 1), E = 1; E < F; ++E)
                    U[E - 1] = arguments[E];
                  n.call(M, this, U);
              }
        }, b = {
          on: d,
          once: f,
          off: p,
          emit: m
        }, D = {
          on: r(d),
          once: r(f),
          off: r(p),
          emit: r(m)
        }, v = s({}, D), t.exports = e = function(x) {
          return x == null ? o(v) : s(Object(x), D);
        }, e.methods = b;
      }), Vs = C(function(e, t) {
        t.exports = function() {
          var r = Array.from, a, n;
          return typeof r != "function" ? !1 : (a = ["raz", "dwa"], n = r(a), Boolean(n && n !== a && n[1] === "dwa"));
        };
      }), Us = C(function(e, t) {
        t.exports = function() {
          return (typeof globalThis > "u" ? "undefined" : P(globalThis)) !== "object" || !globalThis ? !1 : globalThis.Array === Array;
        };
      }), Hs = C(function(e, t) {
        var r = function() {
          if ((typeof self > "u" ? "undefined" : P(self)) === "object" && self)
            return self;
          if ((typeof y > "u" ? "undefined" : P(y)) === "object" && y)
            return y;
          throw new Error("Unable to resolve global `this`");
        };
        t.exports = function() {
          if (this)
            return this;
          try {
            Object.defineProperty(Object.prototype, "__global__", {
              get: function() {
                return this;
              },
              configurable: !0
            });
          } catch {
            return r();
          }
          try {
            return __global__ || r();
          } finally {
            delete Object.prototype.__global__;
          }
        }();
      }), Sr = C(function(e, t) {
        t.exports = Us()() ? globalThis : Hs();
      }), zs = C(function(e, t) {
        var r = Sr(), a = {
          object: !0,
          symbol: !0
        };
        t.exports = function() {
          var n = r.Symbol, i;
          if (typeof n != "function")
            return !1;
          i = n("test symbol");
          try {
            String(i);
          } catch {
            return !1;
          }
          return !(!a[P(n.iterator)] || !a[P(n.toPrimitive)] || !a[P(n.toStringTag)]);
        };
      }), $s = C(function(e, t) {
        t.exports = function(r) {
          return r ? P(r) === "symbol" ? !0 : !r.constructor || r.constructor.name !== "Symbol" ? !1 : r[r.constructor.toStringTag] === "Symbol" : !1;
        };
      }), pi = C(function(e, t) {
        var r = $s();
        t.exports = function(a) {
          if (!r(a))
            throw new TypeError(a + " is not a symbol");
          return a;
        };
      }), Ws = C(function(e, t) {
        var r = Et(), a = Object.create, n = Object.defineProperty, i = Object.prototype, o = a(null);
        t.exports = function(l) {
          for (var s = 0, u, c; o[l + (s || "")]; )
            ++s;
          return l += s || "", o[l] = !0, u = "@@" + l, n(i, u, r.gs(null, function(d) {
            c || (c = !0, n(this, u, r(d)), c = !1);
          })), u;
        };
      }), Gs = C(function(e, t) {
        var r = Et(), a = Sr().Symbol;
        t.exports = function(n) {
          return Object.defineProperties(n, {
            hasInstance: r("", a && a.hasInstance || n("hasInstance")),
            isConcatSpreadable: r("", a && a.isConcatSpreadable || n("isConcatSpreadable")),
            iterator: r("", a && a.iterator || n("iterator")),
            match: r("", a && a.match || n("match")),
            replace: r("", a && a.replace || n("replace")),
            search: r("", a && a.search || n("search")),
            species: r("", a && a.species || n("species")),
            split: r("", a && a.split || n("split")),
            toPrimitive: r("", a && a.toPrimitive || n("toPrimitive")),
            toStringTag: r("", a && a.toStringTag || n("toStringTag")),
            unscopables: r("", a && a.unscopables || n("unscopables"))
          });
        };
      }), Ys = C(function(e, t) {
        var r = Et(), a = pi(), n = /* @__PURE__ */ Object.create(null);
        t.exports = function(i) {
          return Object.defineProperties(i, {
            for: r(function(o) {
              return n[o] ? n[o] : n[o] = i(String(o));
            }),
            keyFor: r(function(o) {
              var l;
              a(o);
              for (l in n)
                if (n[l] === o)
                  return l;
            })
          });
        };
      }), Ks = C(function(e, t) {
        var r = Et(), a = pi(), n = Sr().Symbol, i = Ws(), o = Gs(), l = Ys(), s = Object.create, u = Object.defineProperties, c = Object.defineProperty, d, f, p;
        if (typeof n == "function")
          try {
            String(n()), p = !0;
          } catch {
          }
        else
          n = null;
        f = function(b) {
          if (this instanceof f)
            throw new TypeError("Symbol is not a constructor");
          return d(b);
        }, t.exports = d = function m(b) {
          var D;
          if (this instanceof m)
            throw new TypeError("Symbol is not a constructor");
          return p ? n(b) : (D = s(f.prototype), b = b === void 0 ? "" : String(b), u(D, {
            __description__: r("", b),
            __name__: r("", i(b))
          }));
        }, o(d), l(d), u(f.prototype, {
          constructor: r(d),
          toString: r("", function() {
            return this.__name__;
          })
        }), u(d.prototype, {
          toString: r(function() {
            return "Symbol (" + a(this).__description__ + ")";
          }),
          valueOf: r(function() {
            return a(this);
          })
        }), c(d.prototype, d.toPrimitive, r("", function() {
          var m = a(this);
          return P(m) === "symbol" ? m : m.toString();
        })), c(d.prototype, d.toStringTag, r("c", "Symbol")), c(f.prototype, d.toStringTag, r("c", d.prototype[d.toStringTag])), c(f.prototype, d.toPrimitive, r("c", d.prototype[d.toPrimitive]));
      }), Xs = C(function(e, t) {
        t.exports = zs()() ? Sr().Symbol : Ks();
      }), Js = C(function(e, t) {
        var r = Object.prototype.toString, a = r.call(function() {
          return arguments;
        }());
        t.exports = function(n) {
          return r.call(n) === a;
        };
      }), Qs = C(function(e, t) {
        var r = Object.prototype.toString, a = RegExp.prototype.test.bind(/^[object [A-Za-z0-9]*Function]$/);
        t.exports = function(n) {
          return typeof n == "function" && a(r.call(n));
        };
      }), Zs = C(function(e, t) {
        var r = Object.prototype.toString, a = r.call("");
        t.exports = function(n) {
          return typeof n == "string" || n && P(n) === "object" && (n instanceof String || r.call(n) === a) || !1;
        };
      }), ec = C(function(e, t) {
        var r = Xs().iterator, a = Js(), n = Qs(), i = _t(), o = mt(), l = Nt(), s = wt(), u = Zs(), c = Array.isArray, d = Function.prototype.call, f = {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: null
        }, p = Object.defineProperty;
        t.exports = function(m) {
          var b = arguments[1], D = arguments[2], v, g, x, E, F, I, M, U, Q, L;
          if (m = Object(l(m)), s(b) && o(b), !this || this === Array || !n(this)) {
            if (!b) {
              if (a(m))
                return F = m.length, F !== 1 ? Array.apply(null, m) : (E = new Array(1), E[0] = m[0], E);
              if (c(m)) {
                for (E = new Array(F = m.length), g = 0; g < F; ++g)
                  E[g] = m[g];
                return E;
              }
            }
            E = [];
          } else
            v = this;
          if (!c(m)) {
            if ((Q = m[r]) !== void 0) {
              for (M = o(Q).call(m), v && (E = new v()), U = M.next(), g = 0; !U.done; )
                L = b ? d.call(b, D, U.value, g) : U.value, v ? (f.value = L, p(E, g, f)) : E[g] = L, U = M.next(), ++g;
              F = g;
            } else if (u(m)) {
              for (F = m.length, v && (E = new v()), g = 0, x = 0; g < F; ++g)
                L = m[g], g + 1 < F && (I = L.charCodeAt(0), I >= 55296 && I <= 56319 && (L += m[++g])), L = b ? d.call(b, D, L, x) : L, v ? (f.value = L, p(E, x, f)) : E[x] = L, ++x;
              F = x;
            }
          }
          if (F === void 0)
            for (F = i(m.length), v && (E = new v(F)), g = 0; g < F; ++g)
              L = b ? d.call(b, D, m[g], g) : m[g], v ? (f.value = L, p(E, g, f)) : E[g] = L;
          return v && (f.value = null, E.length = F), E;
        };
      }), Aa = C(function(e, t) {
        t.exports = Vs()() ? Array.from : ec();
      }), tc = C(function(e, t) {
        var r = Aa(), a = Array.isArray;
        t.exports = function(n) {
          return a(n) ? n : r(n);
        };
      }), rc = C(function(e, t) {
        var r = tc(), a = wt(), n = mt(), i = Array.prototype.slice, o;
        o = function(s) {
          return this.map(function(u, c) {
            return u ? u(s[c]) : s[c];
          }).concat(i.call(s, this.length));
        }, t.exports = function(l) {
          return l = r(l), l.forEach(function(s) {
            a(s) && n(s);
          }), o.bind(l);
        };
      }), ac = C(function(e, t) {
        var r = mt();
        t.exports = function(a) {
          var n;
          return typeof a == "function" ? {
            set: a,
            get: a
          } : (n = {
            get: r(a.get)
          }, a.set !== void 0 ? (n.set = r(a.set), a.delete && (n.delete = r(a.delete)), a.clear && (n.clear = r(a.clear)), n) : (n.set = n.get, n));
        };
      }), nc = C(function(e, t) {
        var r = Os(), a = di(), n = Et(), i = js().methods, o = rc(), l = ac(), s = Function.prototype.apply, u = Function.prototype.call, c = Object.create, d = Object.defineProperties, f = i.on, p = i.emit;
        t.exports = function(m, b, D) {
          var v = c(null), g, x, E, F, I, M, U, Q, L, X, Y, Z, ne, pe, J;
          return b !== !1 ? x = b : isNaN(m.length) ? x = 1 : x = m.length, D.normalizer && (X = l(D.normalizer), E = X.get, F = X.set, I = X.delete, M = X.clear), D.resolvers != null && (J = o(D.resolvers)), E ? pe = a(function(ae) {
            var O, ue, w = arguments;
            if (J && (w = J(w)), O = E(w), O !== null && hasOwnProperty.call(v, O))
              return Y && g.emit("get", O, w, this), v[O];
            if (w.length === 1 ? ue = u.call(m, this, w[0]) : ue = s.call(m, this, w), O === null) {
              if (O = E(w), O !== null)
                throw r("Circular invocation", "CIRCULAR_INVOCATION");
              O = F(w);
            } else if (hasOwnProperty.call(v, O))
              throw r("Circular invocation", "CIRCULAR_INVOCATION");
            return v[O] = ue, Z && g.emit("set", O, null, ue), ue;
          }, x) : b === 0 ? pe = function() {
            var O;
            if (hasOwnProperty.call(v, "data"))
              return Y && g.emit("get", "data", arguments, this), v.data;
            if (arguments.length ? O = s.call(m, this, arguments) : O = u.call(m, this), hasOwnProperty.call(v, "data"))
              throw r("Circular invocation", "CIRCULAR_INVOCATION");
            return v.data = O, Z && g.emit("set", "data", null, O), O;
          } : pe = function(O) {
            var ue, w = arguments, z;
            if (J && (w = J(arguments)), z = String(w[0]), hasOwnProperty.call(v, z))
              return Y && g.emit("get", z, w, this), v[z];
            if (w.length === 1 ? ue = u.call(m, this, w[0]) : ue = s.call(m, this, w), hasOwnProperty.call(v, z))
              throw r("Circular invocation", "CIRCULAR_INVOCATION");
            return v[z] = ue, Z && g.emit("set", z, null, ue), ue;
          }, g = {
            original: m,
            memoized: pe,
            profileName: D.profileName,
            get: function(O) {
              return J && (O = J(O)), E ? E(O) : String(O[0]);
            },
            has: function(O) {
              return hasOwnProperty.call(v, O);
            },
            delete: function(O) {
              var ue;
              !hasOwnProperty.call(v, O) || (I && I(O), ue = v[O], delete v[O], ne && g.emit("delete", O, ue));
            },
            clear: function() {
              var O = v;
              M && M(), v = c(null), g.emit("clear", O);
            },
            on: function(O, ue) {
              return O === "get" ? Y = !0 : O === "set" ? Z = !0 : O === "delete" && (ne = !0), f.call(this, O, ue);
            },
            emit: p,
            updateEnv: function() {
              m = g.original;
            }
          }, E ? U = a(function(ae) {
            var O, ue = arguments;
            J && (ue = J(ue)), O = E(ue), O !== null && g.delete(O);
          }, x) : b === 0 ? U = function() {
            return g.delete("data");
          } : U = function(O) {
            return J && (O = J(arguments)[0]), g.delete(O);
          }, Q = a(function() {
            var ae, O = arguments;
            return b === 0 ? v.data : (J && (O = J(O)), E ? ae = E(O) : ae = String(O[0]), v[ae]);
          }), L = a(function() {
            var ae, O = arguments;
            return b === 0 ? g.has("data") : (J && (O = J(O)), E ? ae = E(O) : ae = String(O[0]), ae === null ? !1 : g.has(ae));
          }), d(pe, {
            __memoized__: n(!0),
            delete: n(U),
            clear: n(g.clear),
            _get: n(Q),
            _has: n(L)
          }), g;
        };
      }), ic = C(function(e, t) {
        var r = mt(), a = Tr(), n = xt(), i = nc(), o = ui();
        t.exports = function l(s) {
          var u, c, d;
          if (r(s), u = Object(arguments[1]), u.async && u.promise)
            throw new Error("Options 'async' and 'promise' cannot be used together");
          return hasOwnProperty.call(s, "__memoized__") && !u.force ? s : (c = o(u.length, s.length, u.async && n.async), d = i(s, c, u), a(n, function(f, p) {
            u[p] && f(u[p], d, u);
          }), l.__profiler__ && l.__profiler__(d), d.updateEnv(), d.memoized);
        };
      }), oc = C(function(e, t) {
        t.exports = function(r) {
          var a, n, i = r.length;
          if (!i)
            return "";
          for (a = String(r[n = 0]); --i; )
            a += "" + r[++n];
          return a;
        };
      }), lc = C(function(e, t) {
        t.exports = function(r) {
          return r ? function(a) {
            for (var n = String(a[0]), i = 0, o = r; --o; )
              n += "" + a[++i];
            return n;
          } : function() {
            return "";
          };
        };
      }), uc = C(function(e, t) {
        t.exports = function() {
          var r = Number.isNaN;
          return typeof r != "function" ? !1 : !r({}) && r(NaN) && !r(34);
        };
      }), sc = C(function(e, t) {
        t.exports = function(r) {
          return r !== r;
        };
      }), cc = C(function(e, t) {
        t.exports = uc()() ? Number.isNaN : sc();
      }), Ca = C(function(e, t) {
        var r = cc(), a = _t(), n = Nt(), i = Array.prototype.indexOf, o = Object.prototype.hasOwnProperty, l = Math.abs, s = Math.floor;
        t.exports = function(u) {
          var c, d, f, p;
          if (!r(u))
            return i.apply(this, arguments);
          for (d = a(n(this).length), f = arguments[1], isNaN(f) ? f = 0 : f >= 0 ? f = s(f) : f = a(this.length) - s(l(f)), c = f; c < d; ++c)
            if (o.call(this, c) && (p = this[c], r(p)))
              return c;
          return -1;
        };
      }), dc = C(function(e, t) {
        var r = Ca(), a = Object.create;
        t.exports = function() {
          var n = 0, i = [], o = a(null);
          return {
            get: function(s) {
              var u = 0, c = i, d, f = s.length;
              if (f === 0)
                return c[f] || null;
              if (c = c[f]) {
                for (; u < f - 1; ) {
                  if (d = r.call(c[0], s[u]), d === -1)
                    return null;
                  c = c[1][d], ++u;
                }
                return d = r.call(c[0], s[u]), d === -1 ? null : c[1][d] || null;
              }
              return null;
            },
            set: function(s) {
              var u = 0, c = i, d, f = s.length;
              if (f === 0)
                c[f] = ++n;
              else {
                for (c[f] || (c[f] = [[], []]), c = c[f]; u < f - 1; )
                  d = r.call(c[0], s[u]), d === -1 && (d = c[0].push(s[u]) - 1, c[1].push([[], []])), c = c[1][d], ++u;
                d = r.call(c[0], s[u]), d === -1 && (d = c[0].push(s[u]) - 1), c[1][d] = ++n;
              }
              return o[n] = s, n;
            },
            delete: function(s) {
              var u = 0, c = i, d, f = o[s], p = f.length, m = [];
              if (p === 0)
                delete c[p];
              else if (c = c[p]) {
                for (; u < p - 1; ) {
                  if (d = r.call(c[0], f[u]), d === -1)
                    return;
                  m.push(c, d), c = c[1][d], ++u;
                }
                if (d = r.call(c[0], f[u]), d === -1)
                  return;
                for (s = c[1][d], c[0].splice(d, 1), c[1].splice(d, 1); !c[0].length && m.length; )
                  d = m.pop(), c = m.pop(), c[0].splice(d, 1), c[1].splice(d, 1);
              }
              delete o[s];
            },
            clear: function() {
              i = [], o = a(null);
            }
          };
        };
      }), fc = C(function(e, t) {
        var r = Ca();
        t.exports = function() {
          var a = 0, n = [], i = [];
          return {
            get: function(l) {
              var s = r.call(n, l[0]);
              return s === -1 ? null : i[s];
            },
            set: function(l) {
              return n.push(l[0]), i.push(++a), a;
            },
            delete: function(l) {
              var s = r.call(i, l);
              s !== -1 && (n.splice(s, 1), i.splice(s, 1));
            },
            clear: function() {
              n = [], i = [];
            }
          };
        };
      }), pc = C(function(e, t) {
        var r = Ca(), a = Object.create;
        t.exports = function(n) {
          var i = 0, o = [[], []], l = a(null);
          return {
            get: function(u) {
              for (var c = 0, d = o, f; c < n - 1; ) {
                if (f = r.call(d[0], u[c]), f === -1)
                  return null;
                d = d[1][f], ++c;
              }
              return f = r.call(d[0], u[c]), f === -1 ? null : d[1][f] || null;
            },
            set: function(u) {
              for (var c = 0, d = o, f; c < n - 1; )
                f = r.call(d[0], u[c]), f === -1 && (f = d[0].push(u[c]) - 1, d[1].push([[], []])), d = d[1][f], ++c;
              return f = r.call(d[0], u[c]), f === -1 && (f = d[0].push(u[c]) - 1), d[1][f] = ++i, l[i] = u, i;
            },
            delete: function(u) {
              for (var c = 0, d = o, f, p = [], m = l[u]; c < n - 1; ) {
                if (f = r.call(d[0], m[c]), f === -1)
                  return;
                p.push(d, f), d = d[1][f], ++c;
              }
              if (f = r.call(d[0], m[c]), f !== -1) {
                for (u = d[1][f], d[0].splice(f, 1), d[1].splice(f, 1); !d[0].length && p.length; )
                  f = p.pop(), d = p.pop(), d[0].splice(f, 1), d[1].splice(f, 1);
                delete l[u];
              }
            },
            clear: function() {
              o = [[], []], l = a(null);
            }
          };
        };
      }), mi = C(function(e, t) {
        var r = mt(), a = Tr(), n = Function.prototype.call;
        t.exports = function(i, o) {
          var l = {}, s = arguments[2];
          return r(o), a(i, function(u, c, d, f) {
            l[c] = n.call(o, s, u, c, d, f);
          }), l;
        };
      }), Fa = C(function(e, t) {
        var r = function(i) {
          if (typeof i != "function")
            throw new TypeError(i + " is not a function");
          return i;
        }, a = function(i) {
          var o = R.createTextNode(""), l, s, u = 0;
          return new i(function() {
            var c;
            if (l)
              s && (l = s.concat(l));
            else {
              if (!s)
                return;
              l = s;
            }
            if (s = l, l = null, typeof s == "function") {
              c = s, s = null, c();
              return;
            }
            for (o.data = u = ++u % 2; s; )
              c = s.shift(), s.length || (s = null), c();
          }).observe(o, {
            characterData: !0
          }), function(c) {
            if (r(c), l) {
              typeof l == "function" ? l = [l, c] : l.push(c);
              return;
            }
            l = c, o.data = u = ++u % 2;
          };
        };
        t.exports = function() {
          if ((typeof process > "u" ? "undefined" : P(process)) === "object" && process && typeof process.nextTick == "function")
            return process.nextTick;
          if (typeof queueMicrotask == "function")
            return function(n) {
              queueMicrotask(r(n));
            };
          if ((typeof R > "u" ? "undefined" : P(R)) === "object" && R) {
            if (typeof MutationObserver == "function")
              return a(MutationObserver);
            if (typeof WebKitMutationObserver == "function")
              return a(WebKitMutationObserver);
          }
          return typeof setImmediate == "function" ? function(n) {
            setImmediate(r(n));
          } : typeof setTimeout == "function" || (typeof setTimeout > "u" ? "undefined" : P(setTimeout)) === "object" ? function(n) {
            setTimeout(r(n), 0);
          } : null;
        }();
      }), mc = C(function() {
        var e = Aa(), t = mi(), r = ci(), a = di(), n = Fa(), i = Array.prototype.slice, o = Function.prototype.apply, l = Object.create;
        xt().async = function(s, u) {
          var c = l(null), d = l(null), f = u.memoized, p = u.original, m, b, D;
          u.memoized = a(function(v) {
            var g = arguments, x = g[g.length - 1];
            return typeof x == "function" && (m = x, g = i.call(g, 0, -1)), f.apply(b = this, D = g);
          }, f);
          try {
            r(u.memoized, f);
          } catch {
          }
          u.on("get", function(v) {
            var g, x, E;
            if (!!m) {
              if (c[v]) {
                typeof c[v] == "function" ? c[v] = [c[v], m] : c[v].push(m), m = null;
                return;
              }
              g = m, x = b, E = D, m = b = D = null, n(function() {
                var F;
                hasOwnProperty.call(d, v) ? (F = d[v], u.emit("getasync", v, E, x), o.call(g, F.context, F.args)) : (m = g, b = x, D = E, f.apply(x, E));
              });
            }
          }), u.original = function() {
            var v, g, x, E;
            return m ? (v = e(arguments), g = function F(I) {
              var M, U, Q = F.id;
              if (Q == null) {
                n(o.bind(F, this, arguments));
                return;
              }
              if (delete F.id, M = c[Q], delete c[Q], !!M)
                return U = e(arguments), u.has(Q) && (I ? u.delete(Q) : (d[Q] = {
                  context: this,
                  args: U
                }, u.emit("setasync", Q, typeof M == "function" ? 1 : M.length))), typeof M == "function" ? E = o.call(M, this, U) : M.forEach(function(L) {
                  E = o.call(L, this, U);
                }, this), E;
            }, x = m, m = b = D = null, v.push(g), E = o.call(p, this, v), g.cb = x, m = g, E) : o.call(p, this, arguments);
          }, u.on("set", function(v) {
            if (!m) {
              u.delete(v);
              return;
            }
            c[v] ? typeof c[v] == "function" ? c[v] = [c[v], m.cb] : c[v].push(m.cb) : c[v] = m.cb, delete m.cb, m.id = v, m = null;
          }), u.on("delete", function(v) {
            var g;
            hasOwnProperty.call(c, v) || !d[v] || (g = d[v], delete d[v], u.emit("deleteasync", v, i.call(g.args, 1)));
          }), u.on("clear", function() {
            var v = d;
            d = l(null), u.emit("clearasync", t(v, function(g) {
              return i.call(g.args, 1);
            }));
          });
        };
      }), hc = C(function(e, t) {
        var r = Array.prototype.forEach, a = Object.create;
        t.exports = function(n) {
          var i = a(null);
          return r.call(arguments, function(o) {
            i[o] = !0;
          }), i;
        };
      }), hi = C(function(e, t) {
        t.exports = function(r) {
          return typeof r == "function";
        };
      }), vc = C(function(e, t) {
        var r = hi();
        t.exports = function(a) {
          try {
            return a && r(a.toString) ? a.toString() : String(a);
          } catch {
            throw new TypeError("Passed argument cannot be stringifed");
          }
        };
      }), gc = C(function(e, t) {
        var r = Nt(), a = vc();
        t.exports = function(n) {
          return a(r(n));
        };
      }), bc = C(function(e, t) {
        var r = hi();
        t.exports = function(a) {
          try {
            return a && r(a.toString) ? a.toString() : String(a);
          } catch {
            return "<Non-coercible to string value>";
          }
        };
      }), yc = C(function(e, t) {
        var r = bc(), a = /[\n\r\u2028\u2029]/g;
        t.exports = function(n) {
          var i = r(n);
          return i.length > 100 && (i = i.slice(0, 99) + "\u2026"), i = i.replace(a, function(o) {
            return JSON.stringify(o).slice(1, -1);
          }), i;
        };
      }), vi = C(function(e, t) {
        t.exports = r, t.exports.default = r;
        function r(a) {
          return !!a && (P(a) === "object" || typeof a == "function") && typeof a.then == "function";
        }
      }), Dc = C(function() {
        var e = mi(), t = hc(), r = gc(), a = yc(), n = vi(), i = Fa(), o = Object.create, l = t("then", "then:finally", "done", "done:finally");
        xt().promise = function(s, u) {
          var c = o(null), d = o(null), f = o(null);
          if (s === !0)
            s = null;
          else if (s = r(s), !l[s])
            throw new TypeError("'" + a(s) + "' is not valid promise mode");
          u.on("set", function(p, m, b) {
            var D = !1;
            if (!n(b)) {
              d[p] = b, u.emit("setasync", p, 1);
              return;
            }
            c[p] = 1, f[p] = b;
            var v = function(I) {
              var M = c[p];
              if (D)
                throw new Error(`Memoizee error: Detected unordered then|done & finally resolution, which in turn makes proper detection of success/failure impossible (when in 'done:finally' mode)
Consider to rely on 'then' or 'done' mode instead.`);
              !M || (delete c[p], d[p] = I, u.emit("setasync", p, M));
            }, g = function() {
              D = !0, c[p] && (delete c[p], delete f[p], u.delete(p));
            }, x = s;
            if (x || (x = "then"), x === "then") {
              var E = function() {
                i(g);
              };
              b = b.then(function(F) {
                i(v.bind(this, F));
              }, E), typeof b.finally == "function" && b.finally(E);
            } else if (x === "done") {
              if (typeof b.done != "function")
                throw new Error("Memoizee error: Retrieved promise does not implement 'done' in 'done' mode");
              b.done(v, g);
            } else if (x === "done:finally") {
              if (typeof b.done != "function")
                throw new Error("Memoizee error: Retrieved promise does not implement 'done' in 'done:finally' mode");
              if (typeof b.finally != "function")
                throw new Error("Memoizee error: Retrieved promise does not implement 'finally' in 'done:finally' mode");
              b.done(v), b.finally(g);
            }
          }), u.on("get", function(p, m, b) {
            var D;
            if (c[p]) {
              ++c[p];
              return;
            }
            D = f[p];
            var v = function() {
              u.emit("getasync", p, m, b);
            };
            n(D) ? typeof D.done == "function" ? D.done(v) : D.then(function() {
              i(v);
            }) : v();
          }), u.on("delete", function(p) {
            if (delete f[p], c[p]) {
              delete c[p];
              return;
            }
            if (!!hasOwnProperty.call(d, p)) {
              var m = d[p];
              delete d[p], u.emit("deleteasync", p, [m]);
            }
          }), u.on("clear", function() {
            var p = d;
            d = o(null), c = o(null), f = o(null), u.emit("clearasync", e(p, function(m) {
              return [m];
            }));
          });
        };
      }), wc = C(function() {
        var e = mt(), t = Tr(), r = xt(), a = Function.prototype.apply;
        r.dispose = function(n, i, o) {
          var l;
          if (e(n), o.async && r.async || o.promise && r.promise) {
            i.on("deleteasync", l = function(u, c) {
              a.call(n, null, c);
            }), i.on("clearasync", function(s) {
              t(s, function(u, c) {
                l(c, u);
              });
            });
            return;
          }
          i.on("delete", l = function(u, c) {
            n(c);
          }), i.on("clear", function(s) {
            t(s, function(u, c) {
              l(c, u);
            });
          });
        };
      }), _c = C(function(e, t) {
        t.exports = 2147483647;
      }), xc = C(function(e, t) {
        var r = _t(), a = _c();
        t.exports = function(n) {
          if (n = r(n), n > a)
            throw new TypeError(n + " exceeds maximum possible timeout");
          return n;
        };
      }), Ec = C(function() {
        var e = Aa(), t = Tr(), r = Fa(), a = vi(), n = xc(), i = xt(), o = Function.prototype, l = Math.max, s = Math.min, u = Object.create;
        i.maxAge = function(c, d, f) {
          var p, m, b, D;
          c = n(c), c && (p = u(null), m = f.async && i.async || f.promise && i.promise ? "async" : "", d.on("set" + m, function(v) {
            p[v] = setTimeout(function() {
              d.delete(v);
            }, c), typeof p[v].unref == "function" && p[v].unref(), D && (D[v] && D[v] !== "nextTick" && clearTimeout(D[v]), D[v] = setTimeout(function() {
              delete D[v];
            }, b), typeof D[v].unref == "function" && D[v].unref());
          }), d.on("delete" + m, function(v) {
            clearTimeout(p[v]), delete p[v], D && (D[v] !== "nextTick" && clearTimeout(D[v]), delete D[v]);
          }), f.preFetch && (f.preFetch === !0 || isNaN(f.preFetch) ? b = 0.333 : b = l(s(Number(f.preFetch), 1), 0), b && (D = {}, b = (1 - b) * c, d.on("get" + m, function(v, g, x) {
            D[v] || (D[v] = "nextTick", r(function() {
              var E;
              D[v] === "nextTick" && (delete D[v], d.delete(v), f.async && (g = e(g), g.push(o)), E = d.memoized.apply(x, g), f.promise && a(E) && (typeof E.done == "function" ? E.done(o, o) : E.then(o, o)));
            }));
          }))), d.on("clear" + m, function() {
            t(p, function(v) {
              clearTimeout(v);
            }), p = {}, D && (t(D, function(v) {
              v !== "nextTick" && clearTimeout(v);
            }), D = {});
          }));
        };
      }), Ac = C(function(e, t) {
        var r = _t(), a = Object.create, n = Object.prototype.hasOwnProperty;
        t.exports = function(i) {
          var o = 0, l = 1, s = a(null), u = a(null), c = 0, d;
          return i = r(i), {
            hit: function(p) {
              var m = u[p], b = ++c;
              if (s[b] = p, u[p] = b, !m)
                return ++o, o <= i ? void 0 : (p = s[l], d(p), p);
              if (delete s[m], l === m)
                for (; !n.call(s, ++l); )
                  ;
            },
            delete: d = function(p) {
              var m = u[p];
              if (!!m && (delete s[m], delete u[p], --o, l === m)) {
                if (!o) {
                  c = 0, l = 1;
                  return;
                }
                for (; !n.call(s, ++l); )
                  ;
              }
            },
            clear: function() {
              o = 0, l = 1, s = a(null), u = a(null), c = 0;
            }
          };
        };
      }), Cc = C(function() {
        var e = _t(), t = Ac(), r = xt();
        r.max = function(a, n, i) {
          var o, l, s;
          a = e(a), a && (l = t(a), o = i.async && r.async || i.promise && r.promise ? "async" : "", n.on("set" + o, s = function(c) {
            c = l.hit(c), c !== void 0 && n.delete(c);
          }), n.on("get" + o, s), n.on("delete" + o, l.delete), n.on("clear" + o, l.clear));
        };
      }), Fc = C(function() {
        var e = Et(), t = xt(), r = Object.create, a = Object.defineProperties;
        t.refCounter = function(n, i, o) {
          var l, s;
          l = r(null), s = o.async && t.async || o.promise && t.promise ? "async" : "", i.on("set" + s, function(u, c) {
            l[u] = c || 1;
          }), i.on("get" + s, function(u) {
            ++l[u];
          }), i.on("delete" + s, function(u) {
            delete l[u];
          }), i.on("clear" + s, function() {
            l = {};
          }), a(i.memoized, {
            deleteRef: e(function() {
              var u = i.get(arguments);
              return u === null || !l[u] ? null : --l[u] ? !1 : (i.delete(u), !0);
            }),
            getRefCount: e(function() {
              var u = i.get(arguments);
              return u === null || !l[u] ? 0 : l[u];
            })
          });
        };
      }), gi = C(function(e, t) {
        var r = li(), a = ui(), n = ic();
        t.exports = function(i) {
          var o = r(arguments[1]), l;
          return o.normalizer || (l = o.length = a(o.length, i.length, o.async), l !== 0 && (o.primitive ? l === !1 ? o.normalizer = oc() : l > 1 && (o.normalizer = lc()(l)) : l === !1 ? o.normalizer = dc()() : l === 1 ? o.normalizer = fc()() : o.normalizer = pc()(l))), o.async && mc(), o.promise && Dc(), o.dispose && wc(), o.maxAge && Ec(), o.max && Cc(), o.refCounter && Fc(), n(i, o);
        };
      }), ka = C(function(e, t) {
        t.exports = function() {
          return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
        };
      }), bi = C(function(e, t) {
        (function() {
          var r = {
            name: "doT",
            version: "1.1.1",
            templateSettings: {
              evaluate: /\{\{([\s\S]+?(\}?)+)\}\}/g,
              interpolate: /\{\{=([\s\S]+?)\}\}/g,
              encode: /\{\{!([\s\S]+?)\}\}/g,
              use: /\{\{#([\s\S]+?)\}\}/g,
              useParams: /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
              define: /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
              defineParams: /^\s*([\w$]+):([\s\S]+)/,
              conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
              iterate: /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
              varname: "it",
              strip: !0,
              append: !0,
              selfcontained: !1,
              doNotSkipEncoded: !1
            },
            template: void 0,
            compile: void 0,
            log: !0
          };
          (function() {
            if ((typeof globalThis > "u" ? "undefined" : P(globalThis)) !== "object")
              try {
                Object.defineProperty(Object.prototype, "__magic__", {
                  get: function() {
                    return this;
                  },
                  configurable: !0
                }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__;
              } catch {
                y.globalThis = function() {
                  if (typeof self < "u")
                    return self;
                  if (typeof y < "u")
                    return y;
                  if (typeof Ke < "u")
                    return Ke;
                  if (typeof this < "u")
                    return this;
                  throw new Error("Unable to locate global `this`");
                }();
              }
          })(), r.encodeHTMLSource = function(l) {
            var s = {
              "&": "&#38;",
              "<": "&#60;",
              ">": "&#62;",
              '"': "&#34;",
              "'": "&#39;",
              "/": "&#47;"
            }, u = l ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
            return function(c) {
              return c ? c.toString().replace(u, function(d) {
                return s[d] || d;
              }) : "";
            };
          }, typeof t < "u" && t.exports ? t.exports = r : globalThis.doT = r;
          var a = {
            append: {
              start: "'+(",
              end: ")+'",
              startencode: "'+encodeHTML("
            },
            split: {
              start: "';out+=(",
              end: ");out+='",
              startencode: "';out+=encodeHTML("
            }
          }, n = /$^/;
          function i(l, s, u) {
            return (typeof s == "string" ? s : s.toString()).replace(l.define || n, function(c, d, f, p) {
              return d.indexOf("def.") === 0 && (d = d.substring(4)), d in u || (f === ":" ? (l.defineParams && p.replace(l.defineParams, function(m, b, D) {
                u[d] = {
                  arg: b,
                  text: D
                };
              }), d in u || (u[d] = p)) : new Function("def", "def['" + d + "']=" + p)(u)), "";
            }).replace(l.use || n, function(c, d) {
              l.useParams && (d = d.replace(l.useParams, function(p, m, b, D) {
                if (u[b] && u[b].arg && D) {
                  var v = (b + ":" + D).replace(/'|\\/g, "_");
                  return u.__exp = u.__exp || {}, u.__exp[v] = u[b].text.replace(new RegExp("(^|[^\\w$])" + u[b].arg + "([^\\w$])", "g"), "$1" + D + "$2"), m + "def.__exp['" + v + "']";
                }
              }));
              var f = new Function("def", "return " + d)(u);
              return f && i(l, f, u);
            });
          }
          function o(l) {
            return l.replace(/\\('|\\)/g, "$1").replace(/[\r\t\n]/g, " ");
          }
          r.template = function(l, s, u) {
            s = s || r.templateSettings;
            var c = s.append ? a.append : a.split, d, f = 0, p, m = s.use || s.define ? i(s, l, u || {}) : l;
            m = ("var out='" + (s.strip ? m.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g, " ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g, "") : m).replace(/'|\\/g, "\\$&").replace(s.interpolate || n, function(b, D) {
              return c.start + o(D) + c.end;
            }).replace(s.encode || n, function(b, D) {
              return d = !0, c.startencode + o(D) + c.end;
            }).replace(s.conditional || n, function(b, D, v) {
              return D ? v ? "';}else if(" + o(v) + "){out+='" : "';}else{out+='" : v ? "';if(" + o(v) + "){out+='" : "';}out+='";
            }).replace(s.iterate || n, function(b, D, v, g) {
              return D ? (f += 1, p = g || "i" + f, D = o(D), "';var arr" + f + "=" + D + ";if(arr" + f + "){var " + v + "," + p + "=-1,l" + f + "=arr" + f + ".length-1;while(" + p + "<l" + f + "){" + v + "=arr" + f + "[" + p + "+=1];out+='") : "';} } out+='";
            }).replace(s.evaluate || n, function(b, D) {
              return "';" + o(D) + "out+='";
            }) + "';return out;").replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r").replace(/(\s|;|\}|^|\{)out\+='';/g, "$1").replace(/\+''/g, ""), d && (!s.selfcontained && globalThis && !globalThis._encodeHTML && (globalThis._encodeHTML = r.encodeHTMLSource(s.doNotSkipEncoded)), m = "var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : (" + r.encodeHTMLSource.toString() + "(" + (s.doNotSkipEncoded || "") + "));" + m);
            try {
              return new Function(s.varname, m);
            } catch (b) {
              throw typeof console < "u" && console.log("Could not create a template function: " + m), b;
            }
          }, r.compile = function(l, s) {
            return r.template(l, null, s);
          };
        })();
      }), kc = C(function(e, t) {
        (function(r, a) {
          P(e) === "object" && typeof t < "u" ? t.exports = a() : r.ES6Promise = a();
        })(e, function() {
          function r(_) {
            var k = P(_);
            return _ !== null && (k === "object" || k === "function");
          }
          function a(_) {
            return typeof _ == "function";
          }
          var n = void 0;
          Array.isArray ? n = Array.isArray : n = function(k) {
            return Object.prototype.toString.call(k) === "[object Array]";
          };
          var i = n, o = 0, l = void 0, s = void 0, u = function(k, T) {
            I[o] = k, I[o + 1] = T, o += 2, o === 2 && (s ? s(M) : Q());
          };
          function c(_) {
            s = _;
          }
          function d(_) {
            u = _;
          }
          var f = typeof y < "u" ? y : void 0, p = f || {}, m = p.MutationObserver || p.WebKitMutationObserver, b = typeof self > "u" && typeof process < "u" && {}.toString.call(process) === "[object process]", D = typeof Uint8ClampedArray < "u" && typeof importScripts < "u" && typeof MessageChannel < "u";
          function v() {
            return function() {
              return process.nextTick(M);
            };
          }
          function g() {
            return typeof l < "u" ? function() {
              l(M);
            } : F();
          }
          function x() {
            var _ = 0, k = new m(M), T = R.createTextNode("");
            return k.observe(T, {
              characterData: !0
            }), function() {
              T.data = _ = ++_ % 2;
            };
          }
          function E() {
            var _ = new MessageChannel();
            return _.port1.onmessage = M, function() {
              return _.port2.postMessage(0);
            };
          }
          function F() {
            var _ = setTimeout;
            return function() {
              return _(M, 1);
            };
          }
          var I = new Array(1e3);
          function M() {
            for (var _ = 0; _ < o; _ += 2) {
              var k = I[_], T = I[_ + 1];
              k(T), I[_] = void 0, I[_ + 1] = void 0;
            }
            o = 0;
          }
          function U() {
            try {
              var _ = Function("return this")().require("vertx");
              return l = _.runOnLoop || _.runOnContext, g();
            } catch {
              return F();
            }
          }
          var Q = void 0;
          b ? Q = v() : m ? Q = x() : D ? Q = E() : f === void 0 ? Q = U() : Q = F();
          function L(_, k) {
            var T = this, B = new this.constructor(Z);
            B[Y] === void 0 && ke(B);
            var K = T._state;
            if (K) {
              var ee = arguments[K - 1];
              u(function() {
                return Ee(K, B, ee, T._result);
              });
            } else
              _e(T, B, _, k);
            return B;
          }
          function X(_) {
            var k = this;
            if (_ && P(_) === "object" && _.constructor === k)
              return _;
            var T = new k(Z);
            return W(T, _), T;
          }
          var Y = Math.random().toString(36).substring(2);
          function Z() {
          }
          var ne = void 0, pe = 1, J = 2;
          function ae() {
            return new TypeError("You cannot resolve a promise with itself");
          }
          function O() {
            return new TypeError("A promises callback cannot return that same promise.");
          }
          function ue(_, k, T, B) {
            try {
              _.call(k, T, B);
            } catch (K) {
              return K;
            }
          }
          function w(_, k, T) {
            u(function(B) {
              var K = !1, ee = ue(T, k, function(Pe) {
                K || (K = !0, k !== Pe ? W(B, Pe) : $(B, Pe));
              }, function(Pe) {
                K || (K = !0, j(B, Pe));
              }, "Settle: " + (B._label || " unknown promise"));
              !K && ee && (K = !0, j(B, ee));
            }, _);
          }
          function z(_, k) {
            k._state === pe ? $(_, k._result) : k._state === J ? j(_, k._result) : _e(k, void 0, function(T) {
              return W(_, T);
            }, function(T) {
              return j(_, T);
            });
          }
          function N(_, k, T) {
            k.constructor === _.constructor && T === L && k.constructor.resolve === X ? z(_, k) : T === void 0 ? $(_, k) : a(T) ? w(_, k, T) : $(_, k);
          }
          function W(_, k) {
            if (_ === k)
              j(_, ae());
            else if (r(k)) {
              var T = void 0;
              try {
                T = k.then;
              } catch (B) {
                j(_, B);
                return;
              }
              N(_, k, T);
            } else
              $(_, k);
          }
          function me(_) {
            _._onerror && _._onerror(_._result), xe(_);
          }
          function $(_, k) {
            _._state === ne && (_._result = k, _._state = pe, _._subscribers.length !== 0 && u(xe, _));
          }
          function j(_, k) {
            _._state === ne && (_._state = J, _._result = k, u(me, _));
          }
          function _e(_, k, T, B) {
            var K = _._subscribers, ee = K.length;
            _._onerror = null, K[ee] = k, K[ee + pe] = T, K[ee + J] = B, ee === 0 && _._state && u(xe, _);
          }
          function xe(_) {
            var k = _._subscribers, T = _._state;
            if (k.length !== 0) {
              for (var B = void 0, K = void 0, ee = _._result, Pe = 0; Pe < k.length; Pe += 3)
                B = k[Pe], K = k[Pe + T], B ? Ee(T, B, K, ee) : K(ee);
              _._subscribers.length = 0;
            }
          }
          function Ee(_, k, T, B) {
            var K = a(T), ee = void 0, Pe = void 0, er = !0;
            if (K) {
              try {
                ee = T(B);
              } catch (wa) {
                er = !1, Pe = wa;
              }
              if (k === ee) {
                j(k, O());
                return;
              }
            } else
              ee = B;
            k._state !== ne || (K && er ? W(k, ee) : er === !1 ? j(k, Pe) : _ === pe ? $(k, ee) : _ === J && j(k, ee));
          }
          function Ne(_, k) {
            try {
              k(function(B) {
                W(_, B);
              }, function(B) {
                j(_, B);
              });
            } catch (T) {
              j(_, T);
            }
          }
          var Me = 0;
          function $e() {
            return Me++;
          }
          function ke(_) {
            _[Y] = Me++, _._state = void 0, _._result = void 0, _._subscribers = [];
          }
          function ot() {
            return new Error("Array Methods must be provided an Array");
          }
          var Le = function() {
            function _(k, T) {
              this._instanceConstructor = k, this.promise = new k(Z), this.promise[Y] || ke(this.promise), i(T) ? (this.length = T.length, this._remaining = T.length, this._result = new Array(this.length), this.length === 0 ? $(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(T), this._remaining === 0 && $(this.promise, this._result))) : j(this.promise, ot());
            }
            return _.prototype._enumerate = function(T) {
              for (var B = 0; this._state === ne && B < T.length; B++)
                this._eachEntry(T[B], B);
            }, _.prototype._eachEntry = function(T, B) {
              var K = this._instanceConstructor, ee = K.resolve;
              if (ee === X) {
                var Pe = void 0, er = void 0, wa = !1;
                try {
                  Pe = T.then;
                } catch (Zn) {
                  wa = !0, er = Zn;
                }
                if (Pe === L && T._state !== ne)
                  this._settledAt(T._state, B, T._result);
                else if (typeof Pe != "function")
                  this._remaining--, this._result[B] = T;
                else if (K === ge) {
                  var Qn = new K(Z);
                  wa ? j(Qn, er) : N(Qn, T, Pe), this._willSettleAt(Qn, B);
                } else
                  this._willSettleAt(new K(function(Zn) {
                    return Zn(T);
                  }), B);
              } else
                this._willSettleAt(ee(T), B);
            }, _.prototype._settledAt = function(T, B, K) {
              var ee = this.promise;
              ee._state === ne && (this._remaining--, T === J ? j(ee, K) : this._result[B] = K), this._remaining === 0 && $(ee, this._result);
            }, _.prototype._willSettleAt = function(T, B) {
              var K = this;
              _e(T, void 0, function(ee) {
                return K._settledAt(pe, B, ee);
              }, function(ee) {
                return K._settledAt(J, B, ee);
              });
            }, _;
          }();
          function ye(_) {
            return new Le(this, _).promise;
          }
          function Ie(_) {
            var k = this;
            return i(_) ? new k(function(T, B) {
              for (var K = _.length, ee = 0; ee < K; ee++)
                k.resolve(_[ee]).then(T, B);
            }) : new k(function(T, B) {
              return B(new TypeError("You must pass an array to race."));
            });
          }
          function Ae(_) {
            var k = this, T = new k(Z);
            return j(T, _), T;
          }
          function Ce() {
            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
          }
          function Re() {
            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
          }
          var ge = function() {
            function _(k) {
              this[Y] = $e(), this._result = this._state = void 0, this._subscribers = [], Z !== k && (typeof k != "function" && Ce(), this instanceof _ ? Ne(this, k) : Re());
            }
            return _.prototype.catch = function(T) {
              return this.then(null, T);
            }, _.prototype.finally = function(T) {
              var B = this, K = B.constructor;
              return a(T) ? B.then(function(ee) {
                return K.resolve(T()).then(function() {
                  return ee;
                });
              }, function(ee) {
                return K.resolve(T()).then(function() {
                  throw ee;
                });
              }) : B.then(T, T);
            }, _;
          }();
          ge.prototype.then = L, ge.all = ye, ge.race = Ie, ge.resolve = X, ge.reject = Ae, ge._setScheduler = c, ge._setAsap = d, ge._asap = u;
          function se() {
            var _ = void 0;
            if (typeof Ke < "u")
              _ = Ke;
            else if (typeof self < "u")
              _ = self;
            else
              try {
                _ = Function("return this")();
              } catch {
                throw new Error("polyfill failed because global object is unavailable in this environment");
              }
            var k = _.Promise;
            if (k) {
              var T = null;
              try {
                T = Object.prototype.toString.call(k.resolve());
              } catch {
              }
              if (T === "[object Promise]" && !k.cast)
                return;
            }
            _.Promise = ge;
          }
          return ge.polyfill = se, ge.Promise = ge, ge;
        });
      }), Rc = C(function(e) {
        var t = void 0, r = 1e5, a = function() {
          var w = Object.prototype.toString, z = Object.prototype.hasOwnProperty;
          return {
            Class: function(W) {
              return w.call(W).replace(/^\[object *|\]$/g, "");
            },
            HasProperty: function(W, me) {
              return me in W;
            },
            HasOwnProperty: function(W, me) {
              return z.call(W, me);
            },
            IsCallable: function(W) {
              return typeof W == "function";
            },
            ToInt32: function(W) {
              return W >> 0;
            },
            ToUint32: function(W) {
              return W >>> 0;
            }
          };
        }(), n = Math.LN2, i = Math.abs, o = Math.floor, l = Math.log, s = Math.min, u = Math.pow, c = Math.round;
        function d(w) {
          if (p && f) {
            var z = p(w), N;
            for (N = 0; N < z.length; N += 1)
              f(w, z[N], {
                value: w[z[N]],
                writable: !1,
                enumerable: !1,
                configurable: !1
              });
          }
        }
        var f;
        Object.defineProperty && function() {
          try {
            return Object.defineProperty({}, "x", {}), !0;
          } catch {
            return !1;
          }
        }() ? f = Object.defineProperty : f = function(z, N, W) {
          if (!z === Object(z))
            throw new TypeError("Object.defineProperty called on non-object");
          return a.HasProperty(W, "get") && Object.prototype.__defineGetter__ && Object.prototype.__defineGetter__.call(z, N, W.get), a.HasProperty(W, "set") && Object.prototype.__defineSetter__ && Object.prototype.__defineSetter__.call(z, N, W.set), a.HasProperty(W, "value") && (z[N] = W.value), z;
        };
        var p = Object.getOwnPropertyNames || function(w) {
          if (w !== Object(w))
            throw new TypeError("Object.getOwnPropertyNames called on non-object");
          var z = [], N;
          for (N in w)
            a.HasOwnProperty(w, N) && z.push(N);
          return z;
        };
        function m(w) {
          if (!f)
            return;
          if (w.length > r)
            throw new RangeError("Array too large for polyfill");
          function z(W) {
            f(w, W, {
              get: function() {
                return w._getter(W);
              },
              set: function($) {
                w._setter(W, $);
              },
              enumerable: !0,
              configurable: !1
            });
          }
          var N;
          for (N = 0; N < w.length; N += 1)
            z(N);
        }
        function b(w, z) {
          var N = 32 - z;
          return w << N >> N;
        }
        function D(w, z) {
          var N = 32 - z;
          return w << N >>> N;
        }
        function v(w) {
          return [w & 255];
        }
        function g(w) {
          return b(w[0], 8);
        }
        function x(w) {
          return [w & 255];
        }
        function E(w) {
          return D(w[0], 8);
        }
        function F(w) {
          return w = c(Number(w)), [w < 0 ? 0 : w > 255 ? 255 : w & 255];
        }
        function I(w) {
          return [w >> 8 & 255, w & 255];
        }
        function M(w) {
          return b(w[0] << 8 | w[1], 16);
        }
        function U(w) {
          return [w >> 8 & 255, w & 255];
        }
        function Q(w) {
          return D(w[0] << 8 | w[1], 16);
        }
        function L(w) {
          return [w >> 24 & 255, w >> 16 & 255, w >> 8 & 255, w & 255];
        }
        function X(w) {
          return b(w[0] << 24 | w[1] << 16 | w[2] << 8 | w[3], 32);
        }
        function Y(w) {
          return [w >> 24 & 255, w >> 16 & 255, w >> 8 & 255, w & 255];
        }
        function Z(w) {
          return D(w[0] << 24 | w[1] << 16 | w[2] << 8 | w[3], 32);
        }
        function ne(w, z, N) {
          var W = (1 << z - 1) - 1, me, $, j, _e, xe, Ee, Ne;
          function Me($e) {
            var ke = o($e), ot = $e - ke;
            return ot < 0.5 ? ke : ot > 0.5 || ke % 2 ? ke + 1 : ke;
          }
          for (w !== w ? ($ = (1 << z) - 1, j = u(2, N - 1), me = 0) : w === 1 / 0 || w === -1 / 0 ? ($ = (1 << z) - 1, j = 0, me = w < 0 ? 1 : 0) : w === 0 ? ($ = 0, j = 0, me = 1 / w === -1 / 0 ? 1 : 0) : (me = w < 0, w = i(w), w >= u(2, 1 - W) ? ($ = s(o(l(w) / n), 1023), j = Me(w / u(2, $) * u(2, N)), j / u(2, N) >= 2 && ($ = $ + 1, j = 1), $ > W ? ($ = (1 << z) - 1, j = 0) : ($ = $ + W, j = j - u(2, N))) : ($ = 0, j = Me(w / u(2, 1 - W - N)))), xe = [], _e = N; _e; _e -= 1)
            xe.push(j % 2 ? 1 : 0), j = o(j / 2);
          for (_e = z; _e; _e -= 1)
            xe.push($ % 2 ? 1 : 0), $ = o($ / 2);
          for (xe.push(me ? 1 : 0), xe.reverse(), Ee = xe.join(""), Ne = []; Ee.length; )
            Ne.push(parseInt(Ee.substring(0, 8), 2)), Ee = Ee.substring(8);
          return Ne;
        }
        function pe(w, z, N) {
          var W = [], me, $, j, _e, xe, Ee, Ne, Me;
          for (me = w.length; me; me -= 1)
            for (j = w[me - 1], $ = 8; $; $ -= 1)
              W.push(j % 2 ? 1 : 0), j = j >> 1;
          return W.reverse(), _e = W.join(""), xe = (1 << z - 1) - 1, Ee = parseInt(_e.substring(0, 1), 2) ? -1 : 1, Ne = parseInt(_e.substring(1, 1 + z), 2), Me = parseInt(_e.substring(1 + z), 2), Ne === (1 << z) - 1 ? Me !== 0 ? NaN : Ee * (1 / 0) : Ne > 0 ? Ee * u(2, Ne - xe) * (1 + Me / u(2, N)) : Me !== 0 ? Ee * u(2, -(xe - 1)) * (Me / u(2, N)) : Ee < 0 ? -0 : 0;
        }
        function J(w) {
          return pe(w, 11, 52);
        }
        function ae(w) {
          return ne(w, 11, 52);
        }
        function O(w) {
          return pe(w, 8, 23);
        }
        function ue(w) {
          return ne(w, 8, 23);
        }
        (function() {
          var w = function(ke) {
            if (ke = a.ToInt32(ke), ke < 0)
              throw new RangeError("ArrayBuffer size is not a small enough positive integer");
            this.byteLength = ke, this._bytes = [], this._bytes.length = ke;
            var ot;
            for (ot = 0; ot < this.byteLength; ot += 1)
              this._bytes[ot] = 0;
            d(this);
          };
          e.ArrayBuffer = e.ArrayBuffer || w;
          var z = function() {
          };
          function N($e, ke, ot) {
            var Le;
            return Le = function(Ie, Ae, Ce) {
              var Re, ge, se, _;
              if (!arguments.length || typeof arguments[0] == "number") {
                if (this.length = a.ToInt32(arguments[0]), Ce < 0)
                  throw new RangeError("ArrayBufferView size is not a small enough positive integer");
                this.byteLength = this.length * this.BYTES_PER_ELEMENT, this.buffer = new w(this.byteLength), this.byteOffset = 0;
              } else if (P(arguments[0]) === "object" && arguments[0].constructor === Le)
                for (Re = arguments[0], this.length = Re.length, this.byteLength = this.length * this.BYTES_PER_ELEMENT, this.buffer = new w(this.byteLength), this.byteOffset = 0, se = 0; se < this.length; se += 1)
                  this._setter(se, Re._getter(se));
              else if (P(arguments[0]) === "object" && !(arguments[0] instanceof w || a.Class(arguments[0]) === "ArrayBuffer"))
                for (ge = arguments[0], this.length = a.ToUint32(ge.length), this.byteLength = this.length * this.BYTES_PER_ELEMENT, this.buffer = new w(this.byteLength), this.byteOffset = 0, se = 0; se < this.length; se += 1)
                  _ = ge[se], this._setter(se, Number(_));
              else if (P(arguments[0]) === "object" && (arguments[0] instanceof w || a.Class(arguments[0]) === "ArrayBuffer")) {
                if (this.buffer = Ie, this.byteOffset = a.ToUint32(Ae), this.byteOffset > this.buffer.byteLength)
                  throw new RangeError("byteOffset out of range");
                if (this.byteOffset % this.BYTES_PER_ELEMENT)
                  throw new RangeError("ArrayBuffer length minus the byteOffset is not a multiple of the element size.");
                if (arguments.length < 3) {
                  if (this.byteLength = this.buffer.byteLength - this.byteOffset, this.byteLength % this.BYTES_PER_ELEMENT)
                    throw new RangeError("length of buffer minus byteOffset not a multiple of the element size");
                  this.length = this.byteLength / this.BYTES_PER_ELEMENT;
                } else
                  this.length = a.ToUint32(Ce), this.byteLength = this.length * this.BYTES_PER_ELEMENT;
                if (this.byteOffset + this.byteLength > this.buffer.byteLength)
                  throw new RangeError("byteOffset and length reference an area beyond the end of the buffer");
              } else
                throw new TypeError("Unexpected argument type(s)");
              this.constructor = Le, d(this), m(this);
            }, Le.prototype = new z(), Le.prototype.BYTES_PER_ELEMENT = $e, Le.prototype._pack = ke, Le.prototype._unpack = ot, Le.BYTES_PER_ELEMENT = $e, Le.prototype._getter = function(ye) {
              if (arguments.length < 1)
                throw new SyntaxError("Not enough arguments");
              if (ye = a.ToUint32(ye), ye >= this.length)
                return t;
              var Ie = [], Ae, Ce;
              for (Ae = 0, Ce = this.byteOffset + ye * this.BYTES_PER_ELEMENT; Ae < this.BYTES_PER_ELEMENT; Ae += 1, Ce += 1)
                Ie.push(this.buffer._bytes[Ce]);
              return this._unpack(Ie);
            }, Le.prototype.get = Le.prototype._getter, Le.prototype._setter = function(ye, Ie) {
              if (arguments.length < 2)
                throw new SyntaxError("Not enough arguments");
              if (ye = a.ToUint32(ye), ye >= this.length)
                return t;
              var Ae = this._pack(Ie), Ce, Re;
              for (Ce = 0, Re = this.byteOffset + ye * this.BYTES_PER_ELEMENT; Ce < this.BYTES_PER_ELEMENT; Ce += 1, Re += 1)
                this.buffer._bytes[Re] = Ae[Ce];
            }, Le.prototype.set = function(ye, Ie) {
              if (arguments.length < 1)
                throw new SyntaxError("Not enough arguments");
              var Ae, Ce, Re, ge, se, _, k, T, B, K;
              if (P(arguments[0]) === "object" && arguments[0].constructor === this.constructor) {
                if (Ae = arguments[0], Re = a.ToUint32(arguments[1]), Re + Ae.length > this.length)
                  throw new RangeError("Offset plus length of array is out of range");
                if (T = this.byteOffset + Re * this.BYTES_PER_ELEMENT, B = Ae.length * this.BYTES_PER_ELEMENT, Ae.buffer === this.buffer) {
                  for (K = [], se = 0, _ = Ae.byteOffset; se < B; se += 1, _ += 1)
                    K[se] = Ae.buffer._bytes[_];
                  for (se = 0, k = T; se < B; se += 1, k += 1)
                    this.buffer._bytes[k] = K[se];
                } else
                  for (se = 0, _ = Ae.byteOffset, k = T; se < B; se += 1, _ += 1, k += 1)
                    this.buffer._bytes[k] = Ae.buffer._bytes[_];
              } else if (P(arguments[0]) === "object" && typeof arguments[0].length < "u") {
                if (Ce = arguments[0], ge = a.ToUint32(Ce.length), Re = a.ToUint32(arguments[1]), Re + ge > this.length)
                  throw new RangeError("Offset plus length of array is out of range");
                for (se = 0; se < ge; se += 1)
                  _ = Ce[se], this._setter(Re + se, Number(_));
              } else
                throw new TypeError("Unexpected argument type(s)");
            }, Le.prototype.subarray = function(ye, Ie) {
              function Ae(Re, ge, se) {
                return Re < ge ? ge : Re > se ? se : Re;
              }
              ye = a.ToInt32(ye), Ie = a.ToInt32(Ie), arguments.length < 1 && (ye = 0), arguments.length < 2 && (Ie = this.length), ye < 0 && (ye = this.length + ye), Ie < 0 && (Ie = this.length + Ie), ye = Ae(ye, 0, this.length), Ie = Ae(Ie, 0, this.length);
              var Ce = Ie - ye;
              return Ce < 0 && (Ce = 0), new this.constructor(this.buffer, this.byteOffset + ye * this.BYTES_PER_ELEMENT, Ce);
            }, Le;
          }
          var W = N(1, v, g), me = N(1, x, E), $ = N(1, F, E), j = N(2, I, M), _e = N(2, U, Q), xe = N(4, L, X), Ee = N(4, Y, Z), Ne = N(4, ue, O), Me = N(8, ae, J);
          e.Int8Array = e.Int8Array || W, e.Uint8Array = e.Uint8Array || me, e.Uint8ClampedArray = e.Uint8ClampedArray || $, e.Int16Array = e.Int16Array || j, e.Uint16Array = e.Uint16Array || _e, e.Int32Array = e.Int32Array || xe, e.Uint32Array = e.Uint32Array || Ee, e.Float32Array = e.Float32Array || Ne, e.Float64Array = e.Float64Array || Me;
        })(), function() {
          function w($, j) {
            return a.IsCallable($.get) ? $.get(j) : $[j];
          }
          var z = function() {
            var $ = new e.Uint16Array([4660]), j = new e.Uint8Array($.buffer);
            return w(j, 0) === 18;
          }(), N = function(j, _e, xe) {
            if (arguments.length === 0)
              j = new e.ArrayBuffer(0);
            else if (!(j instanceof e.ArrayBuffer || a.Class(j) === "ArrayBuffer"))
              throw new TypeError("TypeError");
            if (this.buffer = j || new e.ArrayBuffer(0), this.byteOffset = a.ToUint32(_e), this.byteOffset > this.buffer.byteLength)
              throw new RangeError("byteOffset out of range");
            if (arguments.length < 3 ? this.byteLength = this.buffer.byteLength - this.byteOffset : this.byteLength = a.ToUint32(xe), this.byteOffset + this.byteLength > this.buffer.byteLength)
              throw new RangeError("byteOffset and length reference an area beyond the end of the buffer");
            d(this);
          };
          function W($) {
            return function(j, _e) {
              if (j = a.ToUint32(j), j + $.BYTES_PER_ELEMENT > this.byteLength)
                throw new RangeError("Array index out of range");
              j += this.byteOffset;
              var xe = new e.Uint8Array(this.buffer, j, $.BYTES_PER_ELEMENT), Ee = [], Ne;
              for (Ne = 0; Ne < $.BYTES_PER_ELEMENT; Ne += 1)
                Ee.push(w(xe, Ne));
              return Boolean(_e) === Boolean(z) && Ee.reverse(), w(new $(new e.Uint8Array(Ee).buffer), 0);
            };
          }
          N.prototype.getUint8 = W(e.Uint8Array), N.prototype.getInt8 = W(e.Int8Array), N.prototype.getUint16 = W(e.Uint16Array), N.prototype.getInt16 = W(e.Int16Array), N.prototype.getUint32 = W(e.Uint32Array), N.prototype.getInt32 = W(e.Int32Array), N.prototype.getFloat32 = W(e.Float32Array), N.prototype.getFloat64 = W(e.Float64Array);
          function me($) {
            return function(j, _e, xe) {
              if (j = a.ToUint32(j), j + $.BYTES_PER_ELEMENT > this.byteLength)
                throw new RangeError("Array index out of range");
              var Ee = new $([_e]), Ne = new e.Uint8Array(Ee.buffer), Me = [], $e, ke;
              for ($e = 0; $e < $.BYTES_PER_ELEMENT; $e += 1)
                Me.push(w(Ne, $e));
              Boolean(xe) === Boolean(z) && Me.reverse(), ke = new e.Uint8Array(this.buffer, j, $.BYTES_PER_ELEMENT), ke.set(Me);
            };
          }
          N.prototype.setUint8 = me(e.Uint8Array), N.prototype.setInt8 = me(e.Int8Array), N.prototype.setUint16 = me(e.Uint16Array), N.prototype.setInt16 = me(e.Int16Array), N.prototype.setUint32 = me(e.Uint32Array), N.prototype.setInt32 = me(e.Int32Array), N.prototype.setFloat32 = me(e.Float32Array), N.prototype.setFloat64 = me(e.Float64Array), e.DataView = e.DataView || N;
        }();
      }), Tc = C(function(e) {
        (function(t) {
          if (t.WeakMap)
            return;
          var r = Object.prototype.hasOwnProperty, a = Object.defineProperty && function() {
            try {
              return Object.defineProperty({}, "x", {
                value: 1
              }).x === 1;
            } catch {
            }
          }(), n = function(l, s, u) {
            a ? Object.defineProperty(l, s, {
              configurable: !0,
              writable: !0,
              value: u
            }) : l[s] = u;
          };
          t.WeakMap = function() {
            function o() {
              if (this === void 0)
                throw new TypeError("Constructor WeakMap requires 'new'");
              if (n(this, "_id", s("_WeakMap")), arguments.length > 0)
                throw new TypeError("WeakMap iterable is not supported");
            }
            n(o.prototype, "delete", function(c) {
              if (l(this, "delete"), !i(c))
                return !1;
              var d = c[this._id];
              return d && d[0] === c ? (delete c[this._id], !0) : !1;
            }), n(o.prototype, "get", function(c) {
              if (l(this, "get"), !!i(c)) {
                var d = c[this._id];
                if (d && d[0] === c)
                  return d[1];
              }
            }), n(o.prototype, "has", function(c) {
              if (l(this, "has"), !i(c))
                return !1;
              var d = c[this._id];
              return !!(d && d[0] === c);
            }), n(o.prototype, "set", function(c, d) {
              if (l(this, "set"), !i(c))
                throw new TypeError("Invalid value used as weak map key");
              var f = c[this._id];
              return f && f[0] === c ? (f[1] = d, this) : (n(c, this._id, [c, d]), this);
            });
            function l(c, d) {
              if (!i(c) || !r.call(c, "_id"))
                throw new TypeError(d + " method called on incompatible receiver " + P(c));
            }
            function s(c) {
              return c + "_" + u() + "." + u();
            }
            function u() {
              return Math.random().toString().substring(2);
            }
            return n(o, "_polyfill", !0), o;
          }();
          function i(o) {
            return Object(o) === o;
          }
        })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof y < "u" ? y : typeof Ke < "u" ? Ke : e);
      }), Sc = [{
        name: "NA",
        value: "inapplicable",
        priority: 0,
        group: "inapplicable"
      }, {
        name: "PASS",
        value: "passed",
        priority: 1,
        group: "passes"
      }, {
        name: "CANTTELL",
        value: "cantTell",
        priority: 2,
        group: "incomplete"
      }, {
        name: "FAIL",
        value: "failed",
        priority: 3,
        group: "violations"
      }], tt = {
        helpUrlBase: "https://dequeuniversity.com/rules/",
        results: [],
        resultGroups: [],
        resultGroupMap: {},
        impact: Object.freeze(["minor", "moderate", "serious", "critical"]),
        preload: Object.freeze({
          assets: ["cssom", "media"],
          timeout: 1e4
        }),
        allOrigins: "<unsafe_all_origins>",
        sameOrigin: "<same_origin>"
      };
      Sc.forEach(function(e) {
        var t = e.name, r = e.value, a = e.priority, n = e.group;
        tt[t] = r, tt[t + "_PRIO"] = a, tt[t + "_GROUP"] = n, tt.results[a] = r, tt.resultGroups[a] = n, tt.resultGroupMap[r] = n;
      }), Object.freeze(tt.results), Object.freeze(tt.resultGroups), Object.freeze(tt.resultGroupMap), Object.freeze(tt);
      var re = tt;
      function Oc() {
        (typeof console > "u" ? "undefined" : P(console)) === "object" && console.log && Function.prototype.apply.call(console.log, console, arguments);
      }
      var At = Oc, Nc = /[\t\r\n\f]/g, Ic = function() {
        function e() {
          Fr(this, e), this.parent = void 0;
        }
        return kr(e, [{
          key: "props",
          get: function() {
            throw new Error('VirtualNode class must have a "props" object consisting of "nodeType" and "nodeName" properties');
          }
        }, {
          key: "attrNames",
          get: function() {
            throw new Error('VirtualNode class must have an "attrNames" property');
          }
        }, {
          key: "attr",
          value: function() {
            throw new Error('VirtualNode class must have an "attr" function');
          }
        }, {
          key: "hasAttr",
          value: function() {
            throw new Error('VirtualNode class must have a "hasAttr" function');
          }
        }, {
          key: "hasClass",
          value: function(r) {
            var a = this.attr("class");
            if (!a)
              return !1;
            var n = " " + r + " ";
            return (" " + a + " ").replace(Nc, " ").indexOf(n) >= 0;
          }
        }]), e;
      }(), oe = Ic, Ra = {};
      Te(Ra, {
        DqElement: function() {
          return rt;
        },
        aggregate: function() {
          return Ir;
        },
        aggregateChecks: function() {
          return Oi;
        },
        aggregateNodeResults: function() {
          return Ni;
        },
        aggregateResult: function() {
          return Ii;
        },
        areStylesSet: function() {
          return o1;
        },
        assert: function() {
          return we;
        },
        checkHelper: function() {
          return $a;
        },
        clone: function() {
          return st;
        },
        closest: function() {
          return Qe;
        },
        collectResultsFromFrames: function() {
          return Zi;
        },
        contains: function() {
          return Bt;
        },
        convertSelector: function() {
          return Ya;
        },
        cssParser: function() {
          return zi;
        },
        deepMerge: function() {
          return Qa;
        },
        escapeSelector: function() {
          return Fe;
        },
        extendMetaData: function() {
          return Za;
        },
        filterHtmlAttrs: function() {
          return Fp;
        },
        finalizeRuleResult: function() {
          return ar;
        },
        findBy: function() {
          return sr;
        },
        getAllChecks: function() {
          return Ur;
        },
        getAncestry: function() {
          return Br;
        },
        getBaseLang: function() {
          return Rt;
        },
        getCheckMessage: function() {
          return Tf;
        },
        getCheckOption: function() {
          return ra;
        },
        getEnvironmentData: function() {
          return vt;
        },
        getFlattenedTree: function() {
          return mn;
        },
        getFrameContexts: function() {
          return Uf;
        },
        getFriendlyUriEnd: function() {
          return Li;
        },
        getNodeAttributes: function() {
          return Mr;
        },
        getNodeFromTree: function() {
          return V;
        },
        getPreloadConfig: function() {
          return Go;
        },
        getRootNode: function() {
          return $r;
        },
        getRule: function() {
          return No;
        },
        getScroll: function() {
          return gt;
        },
        getScrollState: function() {
          return $f;
        },
        getSelector: function() {
          return Ha;
        },
        getSelectorData: function() {
          return qr;
        },
        getShadowSelector: function() {
          return Ba;
        },
        getStandards: function() {
          return Wf;
        },
        getStyleSheetFactory: function() {
          return Mo;
        },
        getXpath: function() {
          return Hi;
        },
        injectStyle: function() {
          return Kf;
        },
        isHidden: function() {
          return bn;
        },
        isHtmlElement: function() {
          return yn;
        },
        isNodeInContext: function() {
          return Dn;
        },
        isShadowRoot: function() {
          return zr;
        },
        isValidLang: function() {
          return la;
        },
        isXHTML: function() {
          return Lr;
        },
        matchAncestry: function() {
          return wn;
        },
        matches: function() {
          return Ka;
        },
        matchesExpression: function() {
          return ur;
        },
        matchesSelector: function() {
          return Lt;
        },
        memoize: function() {
          return na;
        },
        mergeResults: function() {
          return Hr;
        },
        nodeSorter: function() {
          return _n;
        },
        parseCrossOriginStylesheet: function() {
          return En;
        },
        parseSameOriginStylesheet: function() {
          return Bo;
        },
        parseStylesheet: function() {
          return xn;
        },
        performanceTimer: function() {
          return Oe;
        },
        pollyfillElementsFromPoint: function() {
          return jo;
        },
        preload: function() {
          return Yo;
        },
        preloadCssom: function() {
          return Uo;
        },
        preloadMedia: function() {
          return $o;
        },
        processMessage: function() {
          return gn;
        },
        publishMetaData: function() {
          return ia;
        },
        querySelectorAll: function() {
          return et;
        },
        querySelectorAllFilter: function() {
          return ct;
        },
        queue: function() {
          return lt;
        },
        respondable: function() {
          return at;
        },
        ruleShouldRun: function() {
          return Jo;
        },
        select: function() {
          return Cn;
        },
        sendCommandToFrame: function() {
          return Ki;
        },
        setScrollState: function() {
          return Ip;
        },
        shadowSelect: function() {
          return Pp;
        },
        shouldPreload: function() {
          return Wo;
        },
        toArray: function() {
          return Mi;
        },
        tokenList: function() {
          return Ve;
        },
        uniqueArray: function() {
          return pr;
        },
        uuid: function() {
          return Wc;
        },
        validInputTypes: function() {
          return oa;
        },
        validLangs: function() {
          return tl;
        }
      });
      var Pc = Object.freeze(["EvalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"]);
      function Mc(e) {
        var t = e.topic, r = e.channelId, a = e.message, n = e.messageId, i = e.keepalive, o = {
          channelId: r,
          topic: t,
          messageId: n,
          keepalive: !!i,
          source: yi()
        };
        return a instanceof Error ? o.error = {
          name: a.name,
          message: a.message,
          stack: a.stack
        } : o.payload = a, JSON.stringify(o);
      }
      function Lc(e) {
        var t;
        try {
          t = JSON.parse(e);
        } catch {
          return;
        }
        if (!!qc(t)) {
          var r = t, a = r.topic, n = r.channelId, i = r.messageId, o = r.keepalive, l = P(t.error) === "object" ? Bc(t.error) : t.payload;
          return {
            topic: a,
            message: l,
            messageId: i,
            channelId: n,
            keepalive: !!o
          };
        }
      }
      function qc(e) {
        return e !== null && P(e) === "object" && typeof e.channelId == "string" && e.source === yi();
      }
      function Bc(e) {
        var t = e.message || "Unknown error occurred", r = Pc.includes(e.name) ? e.name : "Error", a = y[r] || Error;
        return e.stack && (t += `
` + e.stack.replace(e.message, "")), new a(t);
      }
      function yi() {
        var e = "axeAPI", t = "";
        return typeof h < "u" && h._audit && h._audit.application && (e = h._audit.application), typeof h < "u" && (t = h.version), e + "." + t;
      }
      function jc(e, t) {
        if (!e)
          throw new Error(t);
      }
      var we = jc;
      function Ta(e) {
        wi(e), we(y.parent === e, "Source of the response must be the parent window.");
      }
      function Di(e) {
        wi(e), we(e.parent === y, "Respondable target must be a frame in the current window");
      }
      function wi(e) {
        we(y !== e, "Messages can not be sent to the same window.");
      }
      var Or = {};
      function Vc(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
        we(!Or[e], "A replyHandler already exists for this message channel."), Or[e] = {
          replyHandler: t,
          sendToParent: r
        };
      }
      function Uc(e) {
        return Or[e];
      }
      function Hc(e) {
        delete Or[e];
      }
      var It, Pt, Sa = y.crypto || y.msCrypto;
      if (!Pt && Sa && Sa.getRandomValues) {
        var _i = new Uint8Array(16);
        Pt = function() {
          return Sa.getRandomValues(_i), _i;
        };
      }
      if (!Pt) {
        var xi = new Array(16);
        Pt = function() {
          for (var t = 0, r; t < 16; t++)
            (t & 3) === 0 && (r = Math.random() * 4294967296), xi[t] = r >>> ((t & 3) << 3) & 255;
          return xi;
        };
      }
      for (var Ei = typeof y.Buffer == "function" ? y.Buffer : Array, Oa = [], Ai = {}, Mt = 0; Mt < 256; Mt++)
        Oa[Mt] = (Mt + 256).toString(16).substr(1), Ai[Oa[Mt]] = Mt;
      function zc(e, t, r) {
        var a = t && r || 0, n = 0;
        for (t = t || [], e.toLowerCase().replace(/[0-9a-f]{2}/g, function(i) {
          n < 16 && (t[a + n++] = Ai[i]);
        }); n < 16; )
          t[a + n++] = 0;
        return t;
      }
      function Na(e, t) {
        var r = t || 0, a = Oa;
        return a[e[r++]] + a[e[r++]] + a[e[r++]] + a[e[r++]] + "-" + a[e[r++]] + a[e[r++]] + "-" + a[e[r++]] + a[e[r++]] + "-" + a[e[r++]] + a[e[r++]] + "-" + a[e[r++]] + a[e[r++]] + a[e[r++]] + a[e[r++]] + a[e[r++]] + a[e[r++]];
      }
      var ht = Pt(), $c = [ht[0] | 1, ht[1], ht[2], ht[3], ht[4], ht[5]], Ci = (ht[6] << 8 | ht[7]) & 16383, Ia = 0, Pa = 0;
      function Fi(e, t, r) {
        var a = t && r || 0, n = t || [];
        e = e || {};
        var i = e.clockseq != null ? e.clockseq : Ci, o = e.msecs != null ? e.msecs : new Date().getTime(), l = e.nsecs != null ? e.nsecs : Pa + 1, s = o - Ia + (l - Pa) / 1e4;
        if (s < 0 && e.clockseq == null && (i = i + 1 & 16383), (s < 0 || o > Ia) && e.nsecs == null && (l = 0), l >= 1e4)
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        Ia = o, Pa = l, Ci = i, o += 122192928e5;
        var u = ((o & 268435455) * 1e4 + l) % 4294967296;
        n[a++] = u >>> 24 & 255, n[a++] = u >>> 16 & 255, n[a++] = u >>> 8 & 255, n[a++] = u & 255;
        var c = o / 4294967296 * 1e4 & 268435455;
        n[a++] = c >>> 8 & 255, n[a++] = c & 255, n[a++] = c >>> 24 & 15 | 16, n[a++] = c >>> 16 & 255, n[a++] = i >>> 8 | 128, n[a++] = i & 255;
        for (var d = e.node || $c, f = 0; f < 6; f++)
          n[a + f] = d[f];
        return t || Na(n);
      }
      function Ct(e, t, r) {
        var a = t && r || 0;
        typeof e == "string" && (t = e == "binary" ? new Ei(16) : null, e = null), e = e || {};
        var n = e.random || (e.rng || Pt)();
        if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, t)
          for (var i = 0; i < 16; i++)
            t[a + i] = n[i];
        return t || Na(n);
      }
      It = Ct, It.v1 = Fi, It.v4 = Ct, It.parse = zc, It.unparse = Na, It.BufferClass = Ei, h._uuid = Fi();
      var Wc = Ct, Nr = [];
      function Ma() {
        var e = "".concat(Ct(), ":").concat(Ct());
        return Nr.includes(e) ? Ma() : (Nr.push(e), e);
      }
      function Gc(e) {
        return Nr.includes(e) ? !1 : (Nr.push(e), !0);
      }
      function La(e, t, r, a) {
        if (typeof a == "function" && Vc(t.channelId, a, r), r ? Ta(e) : Di(e), t.message instanceof Error && !r)
          return h.log(t.message), !1;
        var n = Mc(de({
          messageId: Ma()
        }, t)), i = h._audit.allowedOrigins;
        return !i || !i.length ? !1 : (i.forEach(function(o) {
          try {
            e.postMessage(n, o);
          } catch (l) {
            throw l instanceof e.DOMException ? new Error('allowedOrigins value "'.concat(o, '" is not a valid origin')) : l;
          }
        }), !0);
      }
      function Yc(e, t, r) {
        if (!e.parent !== y)
          return h.log(t);
        try {
          La(e, {
            topic: null,
            channelId: r,
            message: t,
            messageId: Ma(),
            keepalive: !0
          }, !0);
        } catch (a) {
          return h.log(a);
        }
      }
      function ki(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
        return function(n, i, o) {
          var l = {
            channelId: t,
            message: n,
            keepalive: i
          };
          La(e, l, r, o);
        };
      }
      function Kc(e) {
        var t = h._audit.allowedOrigins;
        return t && t.includes("*") || t.includes(e);
      }
      function Xc(e, t) {
        var r = e.origin, a = e.data, n = e.source;
        try {
          var i = Lc(a) || {}, o = i.channelId, l = i.message, s = i.messageId;
          if (!Kc(r) || !Gc(s))
            return;
          if (l instanceof Error && n.parent !== y)
            return h.log(l), !1;
          try {
            if (i.topic) {
              var u = ki(n, o);
              Ta(n), t(i, u);
            } else
              Jc(n, i);
          } catch (c) {
            Yc(n, c, o);
          }
        } catch (c) {
          return h.log(c), !1;
        }
      }
      function Jc(e, t) {
        var r = t.channelId, a = t.message, n = t.keepalive, i = Uc(r) || {}, o = i.replyHandler, l = i.sendToParent;
        if (!!o) {
          l ? Ta(e) : Di(e);
          var s = ki(e, r, l);
          !n && r && Hc(r);
          try {
            o(a, n, s);
          } catch (u) {
            h.log(u), s(u, n);
          }
        }
      }
      var Qc = {
        open: function(t) {
          if (typeof y.addEventListener == "function") {
            var r = function(n) {
              Xc(n, t);
            };
            return y.addEventListener("message", r, !1), function() {
              y.removeEventListener("message", r, !1);
            };
          }
        },
        post: function(t, r, a) {
          return typeof y.addEventListener != "function" ? !1 : La(t, r, !1, a);
        }
      };
      function Ri(e) {
        e.updateMessenger(Qc);
      }
      function Zc(e, t, r) {
        t = t.slice(), r && t.push(r);
        var a = t.map(function(n) {
          return e.indexOf(n);
        }).sort();
        return e[a.pop()];
      }
      var Ir = Zc, e1 = re.CANTTELL_PRIO, t1 = re.FAIL_PRIO, Pr = [];
      Pr[re.PASS_PRIO] = !0, Pr[re.CANTTELL_PRIO] = null, Pr[re.FAIL_PRIO] = !1;
      var Ti = ["any", "all", "none"];
      function Si(e, t) {
        return Ti.reduce(function(r, a) {
          return r[a] = (e[a] || []).map(function(n) {
            return t(n, a);
          }), r;
        }, {});
      }
      function r1(e) {
        var t = Object.assign({}, e);
        Si(t, function(n, i) {
          var o = typeof n.result > "u" ? -1 : Pr.indexOf(n.result);
          n.priority = o !== -1 ? o : re.CANTTELL_PRIO, i === "none" && (n.priority === re.PASS_PRIO ? n.priority = re.FAIL_PRIO : n.priority === re.FAIL_PRIO && (n.priority = re.PASS_PRIO));
        });
        var r = {
          all: t.all.reduce(function(n, i) {
            return Math.max(n, i.priority);
          }, 0),
          none: t.none.reduce(function(n, i) {
            return Math.max(n, i.priority);
          }, 0),
          any: t.any.reduce(function(n, i) {
            return Math.min(n, i.priority);
          }, 4) % 4
        };
        t.priority = Math.max(r.all, r.none, r.any);
        var a = [];
        return Ti.forEach(function(n) {
          t[n] = t[n].filter(function(i) {
            return i.priority === t.priority && i.priority === r[n];
          }), t[n].forEach(function(i) {
            return a.push(i.impact);
          });
        }), [e1, t1].includes(t.priority) ? t.impact = Ir(re.impact, a) : t.impact = null, Si(t, function(n) {
          delete n.result, delete n.priority;
        }), t.result = re.results[t.priority], delete t.priority, t;
      }
      var Oi = r1;
      function a1(e) {
        var t = h._audit.rules.find(function(r) {
          return r.id === e.id;
        });
        return t && t.impact && e.nodes.forEach(function(r) {
          ["any", "all", "none"].forEach(function(a) {
            (r[a] || []).forEach(function(n) {
              n.impact = t.impact;
            });
          });
        }), Object.assign(e, Ni(e.nodes)), delete e.nodes, e;
      }
      var ar = a1;
      function n1(e) {
        var t = {};
        if (e = e.map(function(i) {
          if (i.any && i.all && i.none)
            return Oi(i);
          if (Array.isArray(i.node))
            return ar(i);
          throw new TypeError("Invalid Result type");
        }), e && e.length) {
          var r = e.map(function(i) {
            return i.result;
          });
          t.result = Ir(re.results, r, t.result);
        } else
          t.result = "inapplicable";
        re.resultGroups.forEach(function(i) {
          return t[i] = [];
        }), e.forEach(function(i) {
          var o = re.resultGroupMap[i.result];
          t[o].push(i);
        });
        var a = re.FAIL_GROUP;
        if (t[a].length === 0 && (a = re.CANTTELL_GROUP), t[a].length > 0) {
          var n = t[a].map(function(i) {
            return i.impact;
          });
          t.impact = Ir(re.impact, n) || null;
        } else
          t.impact = null;
        return t;
      }
      var Ni = n1;
      function qa(e, t, r) {
        var a = Object.assign({}, t);
        a.nodes = (a[r] || []).concat(), re.resultGroups.forEach(function(n) {
          delete a[n];
        }), e[r].push(a);
      }
      function i1(e) {
        var t = {};
        return re.resultGroups.forEach(function(r) {
          return t[r] = [];
        }), e.forEach(function(r) {
          r.error ? qa(t, r, re.CANTTELL_GROUP) : r.result === re.NA ? qa(t, r, re.NA_GROUP) : re.resultGroups.forEach(function(a) {
            Array.isArray(r[a]) && r[a].length > 0 && qa(t, r, a);
          });
        }), t;
      }
      var Ii = i1;
      function Pi(e, t, r) {
        var a = y.getComputedStyle(e, null);
        if (!a)
          return !1;
        for (var n = 0; n < t.length; ++n) {
          var i = t[n];
          if (a.getPropertyValue(i.property) === i.value)
            return !0;
        }
        return !e.parentNode || e.nodeName.toUpperCase() === r.toUpperCase() ? !1 : Pi(e.parentNode, t, r);
      }
      var o1 = Pi;
      function l1(e) {
        return Array.prototype.slice.call(e);
      }
      var Mi = l1;
      function u1(e) {
        for (var t = String(e), r = t.length, a = -1, n, i = "", o = t.charCodeAt(0); ++a < r; ) {
          if (n = t.charCodeAt(a), n == 0) {
            i += "\uFFFD";
            continue;
          }
          if (n >= 1 && n <= 31 || n == 127 || a == 0 && n >= 48 && n <= 57 || a == 1 && n >= 48 && n <= 57 && o == 45) {
            i += "\\" + n.toString(16) + " ";
            continue;
          }
          if (a == 0 && r == 1 && n == 45) {
            i += "\\" + t.charAt(a);
            continue;
          }
          if (n >= 128 || n == 45 || n == 95 || n >= 48 && n <= 57 || n >= 65 && n <= 90 || n >= 97 && n <= 122) {
            i += t.charAt(a);
            continue;
          }
          i += "\\" + t.charAt(a);
        }
        return i;
      }
      var Fe = u1;
      function s1() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
        return e.length !== 0 && (e.match(/[0-9]/g) || "").length >= e.length / 2;
      }
      function nr(e, t) {
        return [e.substring(0, t), e.substring(t)];
      }
      function ir(e) {
        return e.replace(/\s+$/, "");
      }
      function c1(e) {
        var t = e, r = "", a = "", n = "", i = "", o = "", l = "";
        if (e.includes("#")) {
          var s = nr(e, e.indexOf("#")), u = ve(s, 2);
          e = u[0], l = u[1];
        }
        if (e.includes("?")) {
          var c = nr(e, e.indexOf("?")), d = ve(c, 2);
          e = d[0], o = d[1];
        }
        if (e.includes("://")) {
          var f = e.split("://"), p = ve(f, 2);
          r = p[0], e = p[1];
          var m = nr(e, e.indexOf("/")), b = ve(m, 2);
          a = b[0], e = b[1];
        } else if (e.substr(0, 2) === "//") {
          e = e.substr(2);
          var D = nr(e, e.indexOf("/")), v = ve(D, 2);
          a = v[0], e = v[1];
        }
        if (a.substr(0, 4) === "www." && (a = a.substr(4)), a && a.includes(":")) {
          var g = nr(a, a.indexOf(":")), x = ve(g, 2);
          a = x[0], n = x[1];
        }
        return i = e, {
          original: t,
          protocol: r,
          domain: a,
          port: n,
          path: i,
          query: o,
          hash: l
        };
      }
      function d1() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (!(e.length <= 1 || e.substr(0, 5) === "data:" || e.substr(0, 11) === "javascript:" || e.includes("?"))) {
          var r = t.currentDomain, a = t.maxLength, n = a === void 0 ? 25 : a, i = c1(e), o = i.path, l = i.domain, s = i.hash, u = o.substr(o.substr(0, o.length - 2).lastIndexOf("/") + 1);
          if (s)
            return u && (u + s).length <= n ? ir(u + s) : u.length < 2 && s.length > 2 && s.length <= n ? ir(s) : void 0;
          if (l && l.length < n && o.length <= 1 || o === "/" + u && l && r && l !== r && (l + o).length <= n)
            return ir(l + o);
          var c = u.lastIndexOf(".");
          if ((c === -1 || c > 1) && (c !== -1 || u.length > 2) && u.length <= n && !u.match(/index(\.[a-zA-Z]{2-4})?/) && !s1(u))
            return ir(u);
        }
      }
      var Li = d1;
      function f1(e) {
        return e.attributes instanceof y.NamedNodeMap ? e.attributes : e.cloneNode(!1).attributes;
      }
      var Mr = f1, p1 = function() {
        var e;
        function t(r) {
          var a, n, i = ["matches", "matchesSelector", "mozMatchesSelector", "webkitMatchesSelector", "msMatchesSelector"], o = i.length;
          for (a = 0; a < o; a++)
            if (n = i[a], r[n])
              return n;
        }
        return function(r, a) {
          return (!e || !r[e]) && (e = t(r)), r[e] ? r[e](a) : !1;
        };
      }(), Lt = p1;
      function m1(e) {
        return e.createElement ? e.createElement("A").localName === "A" : !1;
      }
      var Lr = m1;
      function h1(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (!t)
          return "";
        var a = t.getRootNode && t.getRootNode() || R;
        if (a.nodeType !== 11)
          return e(t, r, a);
        for (var n = []; a.nodeType === 11; ) {
          if (!a.host)
            return "";
          n.unshift({
            elm: t,
            doc: a
          }), t = a.host, a = t.getRootNode();
        }
        return n.unshift({
          elm: t,
          doc: a
        }), n.map(function(i) {
          var o = i.elm, l = i.doc;
          return e(o, r, l);
        });
      }
      var Ba = h1, ja, v1 = ["class", "style", "id", "selected", "checked", "disabled", "tabindex", "aria-checked", "aria-selected", "aria-invalid", "aria-activedescendant", "aria-busy", "aria-disabled", "aria-expanded", "aria-grabbed", "aria-pressed", "aria-valuenow"], g1 = 31, b1 = /([\\"])/g, y1 = /(\r\n|\r|\n)/g;
      function Va(e) {
        return e.replace(b1, "\\$1").replace(y1, "\\a ");
      }
      function qi(e, t) {
        var r = t.name, a;
        if (r.indexOf("href") !== -1 || r.indexOf("src") !== -1) {
          var n = Li(e.getAttribute(r));
          n ? a = Fe(t.name) + '$="' + Va(n) + '"' : a = Fe(t.name) + '="' + Va(e.getAttribute(r)) + '"';
        } else
          a = Fe(r) + '="' + Va(t.value) + '"';
        return a;
      }
      function Ua(e, t) {
        return e.count < t.count ? -1 : e.count === t.count ? 0 : 1;
      }
      function Bi(e) {
        return !v1.includes(e.name) && e.name.indexOf(":") === -1 && (!e.value || e.value.length < g1);
      }
      function qr(e) {
        var t = {
          classes: {},
          tags: {},
          attributes: {}
        };
        e = Array.isArray(e) ? e : [e];
        for (var r = e.slice(), a = [], n = function() {
          var o = r.pop(), l = o.actualNode;
          if (l.querySelectorAll) {
            var s = l.nodeName;
            t.tags[s] ? t.tags[s]++ : t.tags[s] = 1, l.classList && Array.from(l.classList).forEach(function(u) {
              var c = Fe(u);
              t.classes[c] ? t.classes[c]++ : t.classes[c] = 1;
            }), l.hasAttributes() && Array.from(Mr(l)).filter(Bi).forEach(function(u) {
              var c = qi(l, u);
              c && (t.attributes[c] ? t.attributes[c]++ : t.attributes[c] = 1);
            });
          }
          for (o.children.length && (a.push(r), r = o.children.slice()); !r.length && a.length; )
            r = a.pop();
        }; r.length; )
          n();
        return t;
      }
      function D1(e, t) {
        var r = [], a = t.classes, n = t.tags;
        return e.classList && Array.from(e.classList).forEach(function(i) {
          var o = Fe(i);
          a[o] < n[e.nodeName] && r.push({
            name: o,
            count: a[o],
            species: "class"
          });
        }), r.sort(Ua);
      }
      function w1(e, t) {
        var r = e.parentNode && Array.from(e.parentNode.children || "") || [], a = r.find(function(i) {
          return i !== e && Lt(i, t);
        });
        if (a) {
          var n = 1 + r.indexOf(e);
          return ":nth-child(" + n + ")";
        } else
          return "";
      }
      function _1(e) {
        if (!!e.getAttribute("id")) {
          var t = e.getRootNode && e.getRootNode() || R, r = "#" + Fe(e.getAttribute("id") || "");
          if (!r.match(/player_uid_/) && t.querySelectorAll(r).length === 1)
            return r;
        }
      }
      function ji(e) {
        return typeof ja > "u" && (ja = Lr(R)), Fe(ja ? e.localName : e.nodeName.toLowerCase());
      }
      function x1(e, t) {
        var r = [], a = t.attributes, n = t.tags;
        return e.hasAttributes() && Array.from(Mr(e)).filter(Bi).forEach(function(i) {
          var o = qi(e, i);
          o && a[o] < n[e.nodeName] && r.push({
            name: o,
            count: a[o],
            species: "attribute"
          });
        }), r.sort(Ua);
      }
      function E1(e, t) {
        var r = "", a, n = D1(e, t), i = x1(e, t);
        return n.length && n[0].count === 1 ? a = [n[0]] : i.length && i[0].count === 1 ? (a = [i[0]], r = ji(e)) : (a = n.concat(i), a.sort(Ua), a = a.slice(0, 3), a.some(function(o) {
          return o.species === "class";
        }) ? a.sort(function(o, l) {
          return o.species !== l.species && o.species === "class" ? -1 : o.species === l.species ? 0 : 1;
        }) : r = ji(e)), r += a.reduce(function(o, l) {
          switch (l.species) {
            case "class":
              return o + "." + l.name;
            case "attribute":
              return o + "[" + l.name + "]";
          }
          return o;
        }, "");
      }
      function A1(e, t, r) {
        if (!h._selectorData)
          throw new Error("Expect axe._selectorData to be set up");
        var a = t.toRoot, n = a === void 0 ? !1 : a, i, o;
        do {
          var l = _1(e);
          l || (l = E1(e, h._selectorData), l += w1(e, l)), i ? i = l + " > " + i : i = l, o ? o = o.filter(function(s) {
            return Lt(s, i);
          }) : o = Array.from(r.querySelectorAll(i)), e = e.parentElement;
        } while ((o.length > 1 || n) && e && e.nodeType !== 11);
        return o.length === 1 ? i : i.indexOf(" > ") !== -1 ? ":root" + i.substring(i.indexOf(" > ")) : ":root";
      }
      function Ha(e, t) {
        return Ba(A1, e, t);
      }
      function Vi(e) {
        var t = e.nodeName.toLowerCase(), r = e.parentElement;
        if (!r)
          return t;
        var a = "";
        if (t !== "head" && t !== "body" && r.children.length > 1) {
          var n = Array.prototype.indexOf.call(r.children, e) + 1;
          a = ":nth-child(".concat(n, ")");
        }
        return Vi(r) + " > " + t + a;
      }
      function Br(e, t) {
        return Ba(Vi, e, t);
      }
      function Ui(e, t) {
        var r, a;
        if (!e)
          return [];
        if (!t && e.nodeType === 9)
          return t = [{
            str: "html"
          }], t;
        if (t = t || [], e.parentNode && e.parentNode !== e && (t = Ui(e.parentNode, t)), e.previousSibling) {
          a = 1, r = e.previousSibling;
          do
            r.nodeType === 1 && r.nodeName === e.nodeName && a++, r = r.previousSibling;
          while (r);
          a === 1 && (a = null);
        } else if (e.nextSibling) {
          r = e.nextSibling;
          do
            r.nodeType === 1 && r.nodeName === e.nodeName ? (a = 1, r = null) : (a = null, r = r.previousSibling);
          while (r);
        }
        if (e.nodeType === 1) {
          var n = {};
          n.str = e.nodeName.toLowerCase();
          var i = e.getAttribute && Fe(e.getAttribute("id"));
          i && e.ownerDocument.querySelectorAll("#" + i).length === 1 && (n.id = e.getAttribute("id")), a > 1 && (n.count = a), t.push(n);
        }
        return t;
      }
      function C1(e) {
        return e.reduce(function(t, r) {
          return r.id ? "/".concat(r.str, "[@id='").concat(r.id, "']") : t + "/".concat(r.str) + (r.count > 0 ? "[".concat(r.count, "]") : "");
        }, "");
      }
      function F1(e) {
        var t = Ui(e);
        return C1(t);
      }
      var Hi = F1, za = {}, k1 = {
        set: function(t, r) {
          za[t] = r;
        },
        get: function(t) {
          return za[t];
        },
        clear: function() {
          za = {};
        }
      }, H = k1;
      function R1(e, t) {
        var r = t || e;
        return H.get("nodeMap") ? H.get("nodeMap").get(r) : null;
      }
      var V = R1;
      function T1(e, t) {
        if (t = t || 300, e.length > t) {
          var r = e.indexOf(">");
          e = e.substring(0, r + 1);
        }
        return e;
      }
      function S1(e) {
        if (!(e != null && e.outerHTML))
          return "";
        var t = e.outerHTML;
        return !t && typeof XMLSerializer == "function" && (t = new XMLSerializer().serializeToString(e)), T1(t || "");
      }
      function qt(e) {
        var t, r, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (this.spec = n, e instanceof oe ? (this._virtualNode = e, this._element = e.actualNode) : (this._element = e, this._virtualNode = V(e)), this.fromFrame = ((t = this.spec.selector) === null || t === void 0 ? void 0 : t.length) > 1, a.absolutePaths && (this._options = {
          toRoot: !0
        }), this.nodeIndexes = [], Array.isArray(this.spec.nodeIndexes) ? this.nodeIndexes = this.spec.nodeIndexes : typeof ((r = this._virtualNode) === null || r === void 0 ? void 0 : r.nodeIndex) == "number" && (this.nodeIndexes = [this._virtualNode.nodeIndex]), this.source = null, !h._audit.noHtml) {
          var i;
          this.source = (i = this.spec.source) !== null && i !== void 0 ? i : S1(this._element);
        }
      }
      qt.prototype = {
        get selector() {
          return this.spec.selector || [Ha(this.element, this._options)];
        },
        get ancestry() {
          return this.spec.ancestry || [Br(this.element)];
        },
        get xpath() {
          return this.spec.xpath || [Hi(this.element)];
        },
        get element() {
          return this._element;
        },
        toJSON: function() {
          return {
            selector: this.selector,
            source: this.source,
            xpath: this.xpath,
            ancestry: this.ancestry,
            nodeIndexes: this.nodeIndexes
          };
        }
      }, qt.fromFrame = function(t, r, a) {
        var n = qt.mergeSpecs(t, a);
        return new qt(a.element, r, n);
      }, qt.mergeSpecs = function(t, r) {
        return de({}, t, {
          selector: [].concat(ie(r.selector), ie(t.selector)),
          ancestry: [].concat(ie(r.ancestry), ie(t.ancestry)),
          xpath: [].concat(ie(r.xpath), ie(t.xpath)),
          nodeIndexes: [].concat(ie(r.nodeIndexes), ie(t.nodeIndexes))
        });
      };
      var rt = qt;
      function O1(e, t, r, a) {
        return {
          isAsync: !1,
          async: function() {
            return this.isAsync = !0, function(i) {
              i instanceof Error ? a(i) : (e.result = i, r(e));
            };
          },
          data: function(i) {
            e.data = i;
          },
          relatedNodes: function(i) {
            !y.Node || (i = i instanceof y.Node ? [i] : Mi(i), i.every(function(o) {
              return o instanceof y.Node || o.actualNode;
            }) && (e.relatedNodes = i.map(function(o) {
              return new rt(o, t);
            })));
          }
        };
      }
      var $a = O1;
      function Wa(e) {
        var t, r, a, n, i = e;
        if ((t = y) !== null && t !== void 0 && t.Node && e instanceof y.Node || (r = y) !== null && r !== void 0 && r.HTMLCollection && e instanceof y.HTMLCollection)
          return e;
        if (e !== null && P(e) === "object")
          if (Array.isArray(e))
            for (i = [], a = 0, n = e.length; a < n; a++)
              i[a] = Wa(e[a]);
          else {
            i = {};
            for (a in e)
              i[a] = Wa(e[a]);
          }
        return i;
      }
      var st = Wa, N1 = Je(oi()), or = new N1.CssSelectorParser();
      or.registerSelectorPseudos("not"), or.registerSelectorPseudos("is"), or.registerNestingOperators(">"), or.registerAttrEqualityMods("^", "$", "*", "~");
      var zi = or;
      function I1(e, t) {
        return e.props.nodeType === 1 && (t.tag === "*" || e.props.nodeName === t.tag);
      }
      function P1(e, t) {
        return !t.classes || t.classes.every(function(r) {
          return e.hasClass(r.value);
        });
      }
      function M1(e, t) {
        return !t.attributes || t.attributes.every(function(r) {
          var a = e.attr(r.key);
          return a !== null && (!r.value || r.test(a));
        });
      }
      function L1(e, t) {
        return !t.id || e.props.id === t.id;
      }
      function q1(e, t) {
        return !!(!t.pseudos || t.pseudos.every(function(r) {
          if (r.name === "not")
            return !r.expressions.some(function(a) {
              return ur(e, a);
            });
          if (r.name === "is")
            return r.expressions.some(function(a) {
              return ur(e, a);
            });
          throw new Error("the pseudo selector " + r.name + " has not yet been implemented");
        }));
      }
      function $i(e, t) {
        return I1(e, t) && P1(e, t) && M1(e, t) && L1(e, t) && q1(e, t);
      }
      var lr = function() {
        var e = /(?=[\-\[\]{}()*+?.\\\^$|,#\s])/g, t = "\\";
        return function(r) {
          return r.replace(e, t);
        };
      }(), Ga = /\\/g;
      function B1(e) {
        if (!!e)
          return e.map(function(t) {
            var r = t.name.replace(Ga, ""), a = (t.value || "").replace(Ga, ""), n, i;
            switch (t.operator) {
              case "^=":
                i = new RegExp("^" + lr(a));
                break;
              case "$=":
                i = new RegExp(lr(a) + "$");
                break;
              case "~=":
                i = new RegExp("(^|\\s)" + lr(a) + "(\\s|$)");
                break;
              case "|=":
                i = new RegExp("^" + lr(a) + "(-|$)");
                break;
              case "=":
                n = function(l) {
                  return a === l;
                };
                break;
              case "*=":
                n = function(l) {
                  return l && l.includes(a);
                };
                break;
              case "!=":
                n = function(l) {
                  return a !== l;
                };
                break;
              default:
                n = function(l) {
                  return !!l;
                };
            }
            return a === "" && /^[*$^]=$/.test(t.operator) && (n = function() {
              return !1;
            }), n || (n = function(l) {
              return l && i.test(l);
            }), {
              key: r,
              value: a,
              test: n
            };
          });
      }
      function j1(e) {
        if (!!e)
          return e.map(function(t) {
            return t = t.replace(Ga, ""), {
              value: t,
              regexp: new RegExp("(^|\\s)" + lr(t) + "(\\s|$)")
            };
          });
      }
      function V1(e) {
        if (!!e)
          return e.map(function(t) {
            var r;
            return ["is", "not"].includes(t.name) && (r = t.value, r = r.selectors ? r.selectors : [r], r = Wi(r)), {
              name: t.name,
              expressions: r,
              value: t.value
            };
          });
      }
      function Wi(e) {
        return e.map(function(t) {
          for (var r = [], a = t.rule; a; )
            r.push({
              tag: a.tagName ? a.tagName.toLowerCase() : "*",
              combinator: a.nestingOperator ? a.nestingOperator : " ",
              id: a.id,
              attributes: B1(a.attrs),
              classes: j1(a.classNames),
              pseudos: V1(a.pseudos)
            }), a = a.rule;
          return r;
        });
      }
      function Ya(e) {
        var t = zi.parse(e);
        return t = t.selectors ? t.selectors : [t], Wi(t);
      }
      function Gi(e, t, r, a) {
        for (var n = Array.isArray(t), i = n ? t[r] : t, o = $i(e, i); !o && a && e.parent; )
          e = e.parent, o = $i(e, i);
        if (r > 0) {
          if ([" ", ">"].includes(i.combinator) === !1)
            throw new Error("axe.utils.matchesExpression does not support the combinator: " + i.combinator);
          o = o && Gi(e.parent, t, r - 1, i.combinator === " ");
        }
        return o;
      }
      function ur(e, t, r) {
        return Gi(e, t, t.length - 1, r);
      }
      function U1(e, t) {
        var r = Ya(t);
        return r.some(function(a) {
          return ur(e, a);
        });
      }
      var Ka = U1;
      function H1(e, t) {
        for (; e; ) {
          if (Ka(e, t))
            return e;
          if (typeof e.parent > "u")
            throw new TypeError("Cannot resolve parent for non-DOM nodes");
          e = e.parent;
        }
        return null;
      }
      var Qe = H1;
      function jr() {
      }
      function Xa(e) {
        if (typeof e != "function")
          throw new TypeError("Queue methods require functions as arguments");
      }
      function z1() {
        var e = [], t = 0, r = 0, a = jr, n = !1, i, o = function(p) {
          i = p, setTimeout(function() {
            i != null && At("Uncaught error (of queue)", i);
          }, 1);
        }, l = o;
        function s(f) {
          return function(p) {
            e[f] = p, r -= 1, !r && a !== jr && (n = !0, a(e));
          };
        }
        function u(f) {
          return a = jr, l(f), e;
        }
        function c() {
          for (var f = e.length; t < f; t++) {
            var p = e[t];
            try {
              p.call(null, s(t), u);
            } catch (m) {
              u(m);
            }
          }
        }
        var d = {
          defer: function(p) {
            if (P(p) === "object" && p.then && p.catch) {
              var m = p;
              p = function(D, v) {
                m.then(D).catch(v);
              };
            }
            if (Xa(p), i === void 0) {
              if (n)
                throw new Error("Queue already completed");
              return e.push(p), ++r, c(), d;
            }
          },
          then: function(p) {
            if (Xa(p), a !== jr)
              throw new Error("queue `then` already set");
            return i || (a = p, r || (n = !0, a(e))), d;
          },
          catch: function(p) {
            if (Xa(p), l !== o)
              throw new Error("queue `catch` already set");
            return i ? (p(i), i = null) : l = p, d;
          },
          abort: u
        };
        return d;
      }
      var lt = z1, Vr, Yi, Ja = {};
      function at(e, t, r, a, n) {
        var i = {
          topic: t,
          message: r,
          channelId: "".concat(Ct(), ":").concat(Ct()),
          keepalive: a
        };
        return Yi(e, i, n);
      }
      function $1(e, t) {
        var r = e.topic, a = e.message, n = e.keepalive, i = Ja[r];
        if (!!i)
          try {
            i(a, n, t);
          } catch (o) {
            h.log(o), t(o, n);
          }
      }
      at.updateMessenger = function(t) {
        var r = t.open, a = t.post;
        we(typeof r == "function", "open callback must be a function"), we(typeof a == "function", "post callback must be a function"), Vr && Vr();
        var n = r($1);
        n ? (we(typeof n == "function", "open callback must return a cleanup function"), Vr = n) : Vr = null, Yi = a;
      }, at.subscribe = function(t, r) {
        we(typeof r == "function", "Subscriber callback must be a function"), we(!Ja[t], "Topic ".concat(t, " is already registered to.")), Ja[t] = r;
      }, at.isInFrame = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : y;
        return !!t.frameElement;
      }, Ri(at);
      function Ki(e, t, r, a) {
        var n, i, o = e.contentWindow, l = (n = (i = t.options) === null || i === void 0 ? void 0 : i.pingWaitTime) !== null && n !== void 0 ? n : 500;
        if (!o) {
          At("Frame does not have a content window", e), r(null);
          return;
        }
        if (l === 0) {
          Xi(e, t, r, a);
          return;
        }
        var s = setTimeout(function() {
          s = setTimeout(function() {
            t.debug ? a(Ji("No response from frame", e)) : r(null);
          }, 0);
        }, l);
        at(o, "axe.ping", null, void 0, function() {
          clearTimeout(s), Xi(e, t, r, a);
        });
      }
      function Xi(e, t, r, a) {
        var n, i, o = (n = (i = t.options) === null || i === void 0 ? void 0 : i.frameWaitTime) !== null && n !== void 0 ? n : 6e4, l = e.contentWindow, s = setTimeout(function() {
          a(Ji("Axe in frame timed out", e));
        }, o);
        at(l, "axe.start", t, void 0, function(u) {
          clearTimeout(s), u instanceof Error ? a(u) : r(u);
        });
      }
      function Ji(e, t) {
        var r;
        return h._tree && (r = Ha(t)), new Error(e + ": " + (r || t));
      }
      function W1(e) {
        var t = [];
        return t.concat(e.any || []).concat(e.all || []).concat(e.none || []);
      }
      var Ur = W1;
      function G1(e, t, r) {
        if (Array.isArray(e))
          return e.find(function(a) {
            return P(a) === "object" && a[t] === r;
          });
      }
      var sr = G1;
      function Y1(e, t, r) {
        e.forEach(function(a) {
          a.node = rt.fromFrame(a.node, t, r);
          var n = Ur(a);
          n.forEach(function(i) {
            i.relatedNodes = i.relatedNodes.map(function(o) {
              return rt.fromFrame(o, t, r);
            });
          });
        });
      }
      function K1(e, t) {
        for (var r = t[0].node, a = 0; a < e.length; a++) {
          var n = e[a].node, i = Qi(n.nodeIndexes, r.nodeIndexes);
          if (i > 0 || i === 0 && r.selector.length < n.selector.length) {
            e.splice.apply(e, [a, 0].concat(ie(t)));
            return;
          }
        }
        e.push.apply(e, ie(t));
      }
      function X1(e) {
        return !e || !e.results ? null : Array.isArray(e.results) ? e.results.length ? e.results : null : [e.results];
      }
      function J1(e, t) {
        var r = [];
        return e.forEach(function(a) {
          var n = X1(a);
          if (!(!n || !n.length)) {
            var i = Q1(a, t);
            n.forEach(function(o) {
              o.nodes && i && Y1(o.nodes, t, i);
              var l = sr(r, "id", o.id);
              l ? o.nodes.length && K1(l.nodes, o.nodes) : r.push(o);
            });
          }
        }), r.forEach(function(a) {
          a.nodes && a.nodes.sort(function(n, i) {
            return Qi(n.node.nodeIndexes, i.node.nodeIndexes);
          });
        }), r;
      }
      function Qi() {
        for (var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = Math.max(e == null ? void 0 : e.length, t == null ? void 0 : t.length), a = 0; a < r; a++) {
          var n = e == null ? void 0 : e[a], i = t == null ? void 0 : t[a];
          if (typeof n != "number" || isNaN(n))
            return a === 0 ? 1 : -1;
          if (typeof i != "number" || isNaN(i))
            return a === 0 ? -1 : 1;
          if (n !== i)
            return n - i;
        }
        return 0;
      }
      var Hr = J1;
      function Q1(e, t) {
        return e.frameElement ? new rt(e.frameElement, t) : e.frameSpec ? e.frameSpec : null;
      }
      function Zi(e, t, r, a, n, i) {
        var o = lt(), l = e.frames;
        l.forEach(function(s) {
          var u = s.node, c = qe(s, Wu);
          o.defer(function(d, f) {
            var p = {
              options: t,
              command: r,
              parameter: a,
              context: c
            };
            function m(b) {
              return d(b ? {
                results: b,
                frameElement: u
              } : null);
            }
            Ki(u, p, m, f);
          });
        }), o.then(function(s) {
          n(Hr(s, t));
        }).catch(i);
      }
      function Bt(e, t) {
        if (e.shadowId || t.shadowId) {
          do {
            if (e.shadowId === t.shadowId)
              return !0;
            t = t.parent;
          } while (t);
          return !1;
        }
        if (!e.actualNode)
          do {
            if (t === e)
              return !0;
            t = t.parent;
          } while (t);
        if (typeof e.actualNode.contains != "function") {
          var r = e.actualNode.compareDocumentPosition(t.actualNode);
          return !!(r & 16);
        }
        return e.actualNode.contains(t.actualNode);
      }
      function eo() {
        for (var e = {}, t = arguments.length, r = new Array(t), a = 0; a < t; a++)
          r[a] = arguments[a];
        return r.forEach(function(n) {
          if (!(!n || P(n) !== "object" || Array.isArray(n)))
            for (var i = 0, o = Object.keys(n); i < o.length; i++) {
              var l = o[i];
              !e.hasOwnProperty(l) || P(n[l]) !== "object" || Array.isArray(e[l]) ? e[l] = n[l] : e[l] = eo(e[l], n[l]);
            }
        }), e;
      }
      var Qa = eo;
      function Z1(e, t) {
        Object.assign(e, t), Object.keys(t).filter(function(r) {
          return typeof t[r] == "function";
        }).forEach(function(r) {
          e[r] = null;
          try {
            e[r] = t[r](e);
          } catch {
          }
        });
      }
      var Za = Z1, ed = ["article", "aside", "blockquote", "body", "div", "footer", "h1", "h2", "h3", "h4", "h5", "h6", "header", "main", "nav", "p", "section", "span"];
      function td(e) {
        if (e.shadowRoot) {
          var t = e.nodeName.toLowerCase();
          if (ed.includes(t) || /^[a-z][a-z0-9_.-]*-[a-z0-9_.-]*$/.test(t))
            return !0;
        }
        return !1;
      }
      var zr = td, en = {};
      Te(en, {
        findElmsInContext: function() {
          return to;
        },
        findUp: function() {
          return jt;
        },
        findUpVirtual: function() {
          return Ft;
        },
        getComposedParent: function() {
          return He;
        },
        getElementByReference: function() {
          return rn;
        },
        getElementCoordinates: function() {
          return an;
        },
        getElementStack: function() {
          return ln;
        },
        getRootNode: function() {
          return Be;
        },
        getScrollOffset: function() {
          return ao;
        },
        getTabbableElements: function() {
          return lo;
        },
        getTextElementStack: function() {
          return uo;
        },
        getViewportSize: function() {
          return Wr;
        },
        hasContent: function() {
          return Xr;
        },
        hasContentVirtual: function() {
          return cr;
        },
        idrefs: function() {
          return nt;
        },
        insertedIntoFocusOrder: function() {
          return vo;
        },
        isCurrentPageLink: function() {
          return tn;
        },
        isFocusable: function() {
          return je;
        },
        isHTML5: function() {
          return go;
        },
        isHiddenWithCSS: function() {
          return un;
        },
        isInTextBlock: function() {
          return Do;
        },
        isModalOpen: function() {
          return Jr;
        },
        isNativelyFocusable: function() {
          return sn;
        },
        isNode: function() {
          return Hd;
        },
        isOffscreen: function() {
          return Gr;
        },
        isOpaque: function() {
          return cf;
        },
        isSkipLink: function() {
          return cn;
        },
        isVisible: function() {
          return he;
        },
        isVisualContent: function() {
          return so;
        },
        reduceToElementsBelowFloating: function() {
          return Eo;
        },
        shadowElementsFromPoint: function() {
          return pf;
        },
        urlPropsFromAttribute: function() {
          return yf;
        },
        visuallyContains: function() {
          return ea;
        },
        visuallyOverlaps: function() {
          return dn;
        }
      });
      function rd(e) {
        var t = e.getRootNode && e.getRootNode() || R;
        return t === e && (t = R), t;
      }
      var $r = rd, Be = $r;
      function ad(e) {
        var t = e.context, r = e.value, a = e.attr, n = e.elm, i = n === void 0 ? "" : n, o, l = Fe(r);
        return t.nodeType === 9 || t.nodeType === 11 ? o = t : o = Be(t), Array.from(o.querySelectorAll(i + "[" + a + "=" + l + "]"));
      }
      var to = ad;
      function nd(e, t) {
        var r;
        if (r = e.actualNode, !e.shadowId && typeof e.actualNode.closest == "function") {
          var a = e.actualNode.closest(t);
          return a || null;
        }
        do
          r = r.assignedSlot ? r.assignedSlot : r.parentNode, r && r.nodeType === 11 && (r = r.host);
        while (r && !Lt(r, t) && r !== R.documentElement);
        return !r || !Lt(r, t) ? null : r;
      }
      var Ft = nd;
      function id(e, t) {
        return Ft(V(e), t);
      }
      var jt = id;
      function ro(e) {
        if (e.assignedSlot)
          return ro(e.assignedSlot);
        if (e.parentNode) {
          var t = e.parentNode;
          if (t.nodeType === 1)
            return t;
          if (t.host)
            return t.host;
        }
        return null;
      }
      var He = ro, od = /^\/\#/, ld = /^#[!/]/;
      function tn(e) {
        var t, r = e.getAttribute("href");
        if (!r || r === "#")
          return !1;
        if (od.test(r))
          return !0;
        var a = e.hash, n = e.protocol, i = e.hostname, o = e.port, l = e.pathname;
        if (ld.test(a))
          return !1;
        if (r.charAt(0) === "#")
          return !0;
        if (typeof ((t = y.location) === null || t === void 0 ? void 0 : t.origin) != "string" || y.location.origin.indexOf("://") === -1)
          return null;
        var s = y.location.origin + y.location.pathname, u;
        return i ? u = "".concat(n, "//").concat(i).concat(o ? ":".concat(o) : "") : u = y.location.origin, l ? u += (l[0] !== "/" ? "/" : "") + l : u += y.location.pathname, u === s;
      }
      function ud(e, t) {
        var r = e.getAttribute(t);
        if (!r || t === "href" && !tn(e))
          return null;
        r.indexOf("#") !== -1 && (r = decodeURIComponent(r.substr(r.indexOf("#") + 1)));
        var a = R.getElementById(r);
        return a || (a = R.getElementsByName(r), a.length ? a[0] : null);
      }
      var rn = ud;
      function sd(e) {
        if (!e.nodeType && e.document && (e = e.document), e.nodeType === 9) {
          var t = e.documentElement, r = e.body;
          return {
            left: t && t.scrollLeft || r && r.scrollLeft || 0,
            top: t && t.scrollTop || r && r.scrollTop || 0
          };
        }
        return {
          left: e.scrollLeft,
          top: e.scrollTop
        };
      }
      var ao = sd;
      function cd(e) {
        var t = ao(R), r = t.left, a = t.top, n = e.getBoundingClientRect();
        return {
          top: n.top + a,
          right: n.right + r,
          bottom: n.bottom + a,
          left: n.left + r,
          width: n.right - n.left,
          height: n.bottom - n.top
        };
      }
      var an = cd;
      function dd(e) {
        var t = e.document, r = t.documentElement;
        if (e.innerWidth)
          return {
            width: e.innerWidth,
            height: e.innerHeight
          };
        if (r)
          return {
            width: r.clientWidth,
            height: r.clientHeight
          };
        var a = t.body;
        return {
          width: a.clientWidth,
          height: a.clientHeight
        };
      }
      var Wr = dd;
      function fd(e, t) {
        for (e = He(e); e && e.nodeName.toLowerCase() !== "html"; ) {
          if (e.scrollTop && (t += e.scrollTop, t >= 0))
            return !1;
          e = He(e);
        }
        return !0;
      }
      function pd(e) {
        var t, r = R.documentElement, a = y.getComputedStyle(e), n = y.getComputedStyle(R.body || r).getPropertyValue("direction"), i = an(e);
        if (i.bottom < 0 && (fd(e, i.bottom) || a.position === "absolute"))
          return !0;
        if (i.left === 0 && i.right === 0)
          return !1;
        if (n === "ltr") {
          if (i.right <= 0)
            return !0;
        } else if (t = Math.max(r.scrollWidth, Wr(y).width), i.left >= t)
          return !0;
        return !1;
      }
      var Gr = pd, md = /rect\s*\(([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px\s*\)/, hd = /(\w+)\((\d+)/;
      function vd(e) {
        var t = e.getPropertyValue("clip").match(md), r = e.getPropertyValue("clip-path").match(hd);
        if (t && t.length === 5) {
          var a = e.getPropertyValue("position");
          if (["fixed", "absolute"].includes(a))
            return t[3] - t[1] <= 0 && t[2] - t[4] <= 0;
        }
        if (r) {
          var n = r[1], i = parseInt(r[2], 10);
          switch (n) {
            case "inset":
              return i >= 50;
            case "circle":
              return i === 0;
          }
        }
        return !1;
      }
      function gd(e, t, r) {
        var a = jt(e, "map");
        if (!a)
          return !1;
        var n = a.getAttribute("name");
        if (!n)
          return !1;
        var i = Be(e);
        if (!i || i.nodeType !== 9)
          return !1;
        var o = et(h._tree, 'img[usemap="#'.concat(Fe(n), '"]'));
        return !o || !o.length ? !1 : o.some(function(l) {
          var s = l.actualNode;
          return Yr(s, t, r);
        });
      }
      function Yr(e, t, r) {
        var a;
        if (!e)
          throw new TypeError("Cannot determine if element is visible for non-DOM nodes");
        var n = e instanceof oe ? e : V(e);
        e = n ? n.actualNode : e;
        var i = "_isVisible" + (t ? "ScreenReader" : ""), o = (a = y.Node) !== null && a !== void 0 ? a : {}, l = o.DOCUMENT_NODE, s = o.DOCUMENT_FRAGMENT_NODE, u = n ? n.props.nodeType : e.nodeType, c = n ? n.props.nodeName : e.nodeName.toLowerCase();
        if (n && typeof n[i] < "u")
          return n[i];
        if (u === l)
          return !0;
        if (["style", "script", "noscript", "template"].includes(c))
          return !1;
        if (e && u === s && (e = e.host), t) {
          var d = n ? n.attr("aria-hidden") : e.getAttribute("aria-hidden");
          if (d === "true")
            return !1;
        }
        if (!e) {
          var f = n.parent, p = !0;
          return f && (p = Yr(f, t, !0)), n && (n[i] = p), p;
        }
        var m = y.getComputedStyle(e, null);
        if (m === null)
          return !1;
        if (c === "area")
          return gd(e, t, r);
        if (m.getPropertyValue("display") === "none")
          return !1;
        var b = parseInt(m.getPropertyValue("height")), D = parseInt(m.getPropertyValue("width")), v = gt(e), g = v && b === 0, x = v && D === 0, E = m.getPropertyValue("position") === "absolute" && (b < 2 || D < 2) && m.getPropertyValue("overflow") === "hidden";
        if (!t && (vd(m) || m.getPropertyValue("opacity") === "0" || g || x || E) || !r && (m.getPropertyValue("visibility") === "hidden" || !t && Gr(e)))
          return !1;
        var F = e.assignedSlot ? e.assignedSlot : e.parentNode, I = !1;
        return F && (I = Yr(F, t, !0)), n && (n[i] = I), I;
      }
      var he = Yr, Vt = 200;
      function nn() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : R.body, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
          container: null,
          cells: []
        }, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
        if (!r) {
          var a = V(R.documentElement);
          if (a || (a = new dr(R.documentElement)), a._stackingOrder = [0], oo(t, a), gt(a.actualNode)) {
            var n = {
              container: a,
              cells: []
            };
            a._subGrid = n;
          }
        }
        for (var i = R.createTreeWalker(e, y.NodeFilter.SHOW_ELEMENT, null, !1), o = r ? i.nextNode() : i.currentNode; o; ) {
          var l = V(o);
          o.parentElement ? r = V(o.parentElement) : o.parentNode && V(o.parentNode) && (r = V(o.parentNode)), l || (l = new h.VirtualNode(o, r)), l._stackingOrder = Dd(l, r);
          var s = wd(l, r), u = s ? s._subGrid : t;
          if (gt(l.actualNode)) {
            var c = {
              container: l,
              cells: []
            };
            l._subGrid = c;
          }
          var d = l.boundingClientRect;
          d.width !== 0 && d.height !== 0 && he(o) && oo(u, l), zr(o) && nn(o.shadowRoot, u, l), o = i.nextNode();
        }
      }
      function on(e, t) {
        var r, a, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, i = t.left + t.width / 2, o = t.top + t.height / 2, l = o / Vt | 0, s = i / Vt | 0;
        if (l > e.cells.length || s > e.numCols)
          throw new Error("Element midpoint exceeds the grid bounds");
        var u = (r = (a = e.cells[l][s]) === null || a === void 0 ? void 0 : a.filter(function(d) {
          return d.clientRects.find(function(f) {
            var p = f.left, m = f.top;
            return i <= p + f.width && i >= p && o <= m + f.height && o >= m;
          });
        })) !== null && r !== void 0 ? r : [], c = e.container;
        return c && (u = on(c._grid, c.boundingClientRect, !0).concat(u)), n || (u = u.sort(yd).map(function(d) {
          return d.actualNode;
        }).concat(R.documentElement).filter(function(d, f, p) {
          return p.indexOf(d) === f;
        })), u;
      }
      function bd(e, t) {
        var r = e.getComputedStylePropertyValue("position"), a = e.getComputedStylePropertyValue("z-index");
        if (r === "fixed" || r === "sticky" || a !== "auto" && r !== "static" || e.getComputedStylePropertyValue("opacity") !== "1")
          return !0;
        var n = e.getComputedStylePropertyValue("-webkit-transform") || e.getComputedStylePropertyValue("-ms-transform") || e.getComputedStylePropertyValue("transform") || "none";
        if (n !== "none")
          return !0;
        var i = e.getComputedStylePropertyValue("mix-blend-mode");
        if (i && i !== "normal")
          return !0;
        var o = e.getComputedStylePropertyValue("filter");
        if (o && o !== "none")
          return !0;
        var l = e.getComputedStylePropertyValue("perspective");
        if (l && l !== "none")
          return !0;
        var s = e.getComputedStylePropertyValue("clip-path");
        if (s && s !== "none")
          return !0;
        var u = e.getComputedStylePropertyValue("-webkit-mask") || e.getComputedStylePropertyValue("mask") || "none";
        if (u !== "none")
          return !0;
        var c = e.getComputedStylePropertyValue("-webkit-mask-image") || e.getComputedStylePropertyValue("mask-image") || "none";
        if (c !== "none")
          return !0;
        var d = e.getComputedStylePropertyValue("-webkit-mask-border") || e.getComputedStylePropertyValue("mask-border") || "none";
        if (d !== "none" || e.getComputedStylePropertyValue("isolation") === "isolate")
          return !0;
        var f = e.getComputedStylePropertyValue("will-change");
        if (f === "transform" || f === "opacity" || e.getComputedStylePropertyValue("-webkit-overflow-scrolling") === "touch")
          return !0;
        var p = e.getComputedStylePropertyValue("contain");
        if (["layout", "paint", "strict", "content"].includes(p))
          return !0;
        if (a !== "auto" && t) {
          var m = t.getComputedStylePropertyValue("display");
          if (["flex", "inline-flex", "inline flex", "grid", "inline-grid", "inline grid"].includes(m))
            return !0;
        }
        return !1;
      }
      function no(e) {
        if (!e)
          return !1;
        if (e._isFloated !== void 0)
          return e._isFloated;
        var t = e.getComputedStylePropertyValue("float");
        if (t !== "none")
          return e._isFloated = !0, !0;
        var r = no(e.parent);
        return e._isFloated = r, r;
      }
      function io(e) {
        return e.getComputedStylePropertyValue("display").indexOf("inline") !== -1 ? 2 : no(e) ? 1 : 0;
      }
      function yd(e, t) {
        for (var r = Math.max(e._stackingOrder.length, t._stackingOrder.length), a = 0; a < r; a++) {
          if (typeof t._stackingOrder[a] > "u")
            return -1;
          if (typeof e._stackingOrder[a] > "u" || t._stackingOrder[a] > e._stackingOrder[a])
            return 1;
          if (t._stackingOrder[a] < e._stackingOrder[a])
            return -1;
        }
        var n = e.actualNode, i = t.actualNode;
        if (n.getRootNode && n.getRootNode() !== i.getRootNode()) {
          for (var o = []; n; )
            o.push({
              root: n.getRootNode(),
              node: n
            }), n = n.getRootNode().host;
          for (; i && !o.find(function(D) {
            return D.root === i.getRootNode();
          }); )
            i = i.getRootNode().host;
          if (n = o.find(function(D) {
            return D.root === i.getRootNode();
          }).node, n === i)
            return e.actualNode.getRootNode() !== n.getRootNode() ? -1 : 1;
        }
        var l = y.Node, s = l.DOCUMENT_POSITION_FOLLOWING, u = l.DOCUMENT_POSITION_CONTAINS, c = l.DOCUMENT_POSITION_CONTAINED_BY, d = n.compareDocumentPosition(i), f = d & s ? 1 : -1, p = d & u || d & c, m = io(e), b = io(t);
        return m === b || p ? f : b - m;
      }
      function Dd(e, t) {
        var r = t._stackingOrder.slice(), a = e.getComputedStylePropertyValue("z-index"), n = e.getComputedStylePropertyValue("position") !== "static", i = e.getComputedStylePropertyValue("float") !== "none";
        if (n && !["auto", "0"].includes(a)) {
          for (; r.find(function(l) {
            return l % 1 !== 0;
          }); ) {
            var o = r.findIndex(function(l) {
              return l % 1 !== 0;
            });
            r.splice(o, 1);
          }
          r[r.length - 1] = parseInt(a);
        }
        return bd(e, t) ? r.push(0) : n ? r.push(0.5) : i && r.push(0.25), r;
      }
      function wd(e, t) {
        for (var r = null, a = [e]; t; ) {
          if (gt(t.actualNode)) {
            r = t;
            break;
          }
          if (t._scrollRegionParent) {
            r = t._scrollRegionParent;
            break;
          }
          a.push(t), t = V(t.actualNode.parentElement || t.actualNode.parentNode);
        }
        return a.forEach(function(n) {
          return n._scrollRegionParent = r;
        }), r;
      }
      function oo(e, t) {
        t._grid = e, t.clientRects.forEach(function(r) {
          var a, n = r.left, i = r.top, o = i / Vt | 0, l = n / Vt | 0, s = (i + r.height) / Vt | 0, u = (n + r.width) / Vt | 0;
          e.numCols = Math.max((a = e.numCols) !== null && a !== void 0 ? a : 0, u);
          for (var c = o; c <= s; c++) {
            e.cells[c] = e.cells[c] || [];
            for (var d = l; d <= u; d++)
              e.cells[c][d] = e.cells[c][d] || [], e.cells[c][d].includes(t) || e.cells[c][d].push(t);
          }
        });
      }
      function _d(e) {
        H.get("gridCreated") || (nn(), H.set("gridCreated", !0));
        var t = V(e), r = t._grid;
        return r ? on(r, t.boundingClientRect) : [];
      }
      var ln = _d;
      function xd(e) {
        var t = et(e, "*"), r = t.filter(function(a) {
          var n = a.isFocusable, i = a.actualNode.getAttribute("tabindex");
          return i = i && !isNaN(parseInt(i, 10)) ? parseInt(i) : null, i ? n && i >= 0 : n;
        });
        return r;
      }
      var lo = xd;
      function Ed(e) {
        return e ? e.replace(/\r\n/g, `
`).replace(/\u00A0/g, " ").replace(/[\s]{2,}/g, " ").trim() : "";
      }
      var te = Ed;
      function Ad(e) {
        H.get("gridCreated") || (nn(), H.set("gridCreated", !0));
        var t = V(e), r = t._grid;
        if (!r)
          return [];
        var a = t.boundingClientRect, n = [];
        return Array.from(e.childNodes).forEach(function(i) {
          if (i.nodeType === 3 && te(i.textContent) !== "") {
            var o = R.createRange();
            o.selectNodeContents(i);
            var l = o.getClientRects(), s = Array.from(l).some(function(d) {
              var f = d.left + d.width / 2, p = d.top + d.height / 2;
              return f < a.left || f > a.right || p < a.top || p > a.bottom;
            });
            if (s)
              return;
            for (var u = 0; u < l.length; u++) {
              var c = l[u];
              c.width >= 1 && c.height >= 1 && n.push(c);
            }
          }
        }), n.length ? n.map(function(i) {
          return on(r, i);
        }) : [ln(e)];
      }
      var uo = Ad, Cd = ["checkbox", "img", "radio", "range", "slider", "spinbutton", "textbox"];
      function Fd(e) {
        var t = e.getAttribute("role");
        if (t)
          return Cd.indexOf(t) !== -1;
        switch (e.nodeName.toUpperCase()) {
          case "IMG":
          case "IFRAME":
          case "OBJECT":
          case "VIDEO":
          case "AUDIO":
          case "CANVAS":
          case "SVG":
          case "MATH":
          case "BUTTON":
          case "SELECT":
          case "TEXTAREA":
          case "KEYGEN":
          case "PROGRESS":
          case "METER":
            return !0;
          case "INPUT":
            return e.type !== "hidden";
          default:
            return !1;
        }
      }
      var so = Fd;
      function kd(e, t) {
        e = e.actualNode || e;
        try {
          var r = Be(e), a = [], n = e.getAttribute(t);
          if (n) {
            n = Ve(n);
            for (var i = 0; i < n.length; i++)
              a.push(r.getElementById(n[i]));
          }
          return a;
        } catch {
          throw new TypeError("Cannot resolve id references for non-DOM nodes");
        }
      }
      var nt = kd;
      function co(e, t, r) {
        var a = e instanceof oe ? e : V(e), n = !e.actualNode || e.actualNode && he(e.actualNode, t), i = a.children.map(function(o) {
          var l = o.props, s = l.nodeType, u = l.nodeValue;
          if (s === 3) {
            if (u && n)
              return u;
          } else if (!r)
            return co(o, t);
        }).join("");
        return te(i);
      }
      var it = co;
      function Rd(e) {
        var t, r;
        return e.attr("aria-labelledby") && (t = nt(e.actualNode, "aria-labelledby"), r = t.map(function(a) {
          var n = V(a);
          return n ? it(n) : "";
        }).join(" ").trim(), r) || (r = e.attr("aria-label"), r && (r = te(r), r)) ? r : null;
      }
      var Kr = Rd, Td = ["HEAD", "TITLE", "TEMPLATE", "SCRIPT", "STYLE", "IFRAME", "OBJECT", "VIDEO", "AUDIO", "NOSCRIPT"];
      function Sd(e) {
        if (!Td.includes(e.actualNode.nodeName.toUpperCase()))
          return e.children.some(function(t) {
            var r = t.actualNode;
            return r.nodeType === 3 && r.nodeValue.trim();
          });
      }
      function fo(e, t, r) {
        return Sd(e) || so(e.actualNode) || !r && !!Kr(e) || !t && e.children.some(function(a) {
          return a.actualNode.nodeType === 1 && fo(a);
        });
      }
      var cr = fo;
      function Od(e, t, r) {
        return e = V(e), cr(e, t, r);
      }
      var Xr = Od;
      function po(e, t) {
        var r = V(e);
        return r ? (r._isHiddenWithCSS === void 0 && (r._isHiddenWithCSS = mo(e, t)), r._isHiddenWithCSS) : mo(e, t);
      }
      function mo(e, t) {
        if (e.nodeType === 9 || (e.nodeType === 11 && (e = e.host), ["STYLE", "SCRIPT"].includes(e.nodeName.toUpperCase())))
          return !1;
        var r = y.getComputedStyle(e, null);
        if (!r)
          throw new Error("Style does not exist for the given element.");
        var a = r.getPropertyValue("display");
        if (a === "none")
          return !0;
        var n = ["hidden", "collapse"], i = r.getPropertyValue("visibility");
        if (n.includes(i) && !t || n.includes(i) && t && n.includes(t))
          return !0;
        var o = He(e);
        return o && !n.includes(i) ? po(o, i) : !1;
      }
      var un = po;
      function Nd(e) {
        var t = e instanceof oe ? e : V(e);
        if (t.hasAttr("disabled"))
          return !0;
        for (var r = t.parent, a = [], n = !1; r && r.shadowId === t.shadowId && !n && (a.push(r), r.props.nodeName !== "legend"); ) {
          if (r._inDisabledFieldset !== void 0) {
            n = r._inDisabledFieldset;
            break;
          }
          r.props.nodeName === "fieldset" && r.hasAttr("disabled") && (n = !0), r = r.parent;
        }
        return a.forEach(function(i) {
          return i._inDisabledFieldset = n;
        }), n ? !0 : t.props.nodeName !== "area" && t.actualNode ? un(t.actualNode) : !1;
      }
      var ho = Nd;
      function Id(e) {
        var t = e instanceof oe ? e : V(e);
        if (!t || ho(t))
          return !1;
        switch (t.props.nodeName) {
          case "a":
          case "area":
            if (t.hasAttr("href"))
              return !0;
            break;
          case "input":
            return t.props.type !== "hidden";
          case "textarea":
          case "select":
          case "summary":
          case "button":
            return !0;
          case "details":
            return !et(t, "summary").length;
        }
        return !1;
      }
      var sn = Id;
      function Pd(e) {
        var t = e instanceof oe ? e : V(e);
        if (t.props.nodeType !== 1 || ho(t))
          return !1;
        if (sn(t))
          return !0;
        var r = t.attr("tabindex");
        return !!(r && !isNaN(parseInt(r, 10)));
      }
      var je = Pd;
      function Md(e) {
        var t = parseInt(e.getAttribute("tabindex"), 10);
        return t > -1 && je(e) && !sn(e);
      }
      var vo = Md;
      function Ld(e) {
        var t = e.doctype;
        return t === null ? !1 : t.name === "html" && !t.publicId && !t.systemId;
      }
      var go = Ld;
      function bo(e, t) {
        t(e.actualNode) !== !1 && e.children.forEach(function(r) {
          return bo(r, t);
        });
      }
      var qd = ["block", "list-item", "table", "flex", "grid", "inline-block"];
      function yo(e) {
        var t = y.getComputedStyle(e).getPropertyValue("display");
        return qd.includes(t) || t.substr(0, 6) === "table-";
      }
      function Bd(e) {
        for (var t = He(e); t && !yo(t); )
          t = He(t);
        return V(t);
      }
      function jd(e) {
        if (yo(e))
          return !1;
        var t = Bd(e), r = "", a = "", n = 0;
        return bo(t, function(i) {
          if (n === 2)
            return !1;
          if (i.nodeType === 3 && (r += i.nodeValue), i.nodeType === 1) {
            var o = (i.nodeName || "").toUpperCase();
            if (["BR", "HR"].includes(o))
              n === 0 ? (r = "", a = "") : n = 2;
            else {
              if (i.style.display === "none" || i.style.overflow === "hidden" || !["", null, "none"].includes(i.style.float) || !["", null, "relative"].includes(i.style.position))
                return !1;
              if (o === "A" && i.href || (i.getAttribute("role") || "").toLowerCase() === "link")
                return i === e && (n = 1), a += i.textContent, !1;
            }
          }
        }), r = te(r), a = te(a), r.length > a.length;
      }
      var Do = jd;
      function Vd(e) {
        e = e || {};
        var t = e.modalPercent || 0.75;
        if (H.get("isModalOpen"))
          return H.get("isModalOpen");
        var r = ct(h._tree[0], "dialog, [role=dialog], [aria-modal=true]", function(p) {
          return he(p.actualNode);
        });
        if (r.length)
          return H.set("isModalOpen", !0), !0;
        for (var a = Wr(y), n = a.width * t, i = a.height * t, o = (a.width - n) / 2, l = (a.height - i) / 2, s = [{
          x: o,
          y: l
        }, {
          x: a.width - o,
          y: l
        }, {
          x: a.width / 2,
          y: a.height / 2
        }, {
          x: o,
          y: a.height - l
        }, {
          x: a.width - o,
          y: a.height - l
        }], u = s.map(function(p) {
          return Array.from(R.elementsFromPoint(p.x, p.y));
        }), c = function(m) {
          var b = u[m].find(function(D) {
            var v = y.getComputedStyle(D);
            return parseInt(v.width, 10) >= n && parseInt(v.height, 10) >= i && v.getPropertyValue("pointer-events") !== "none" && (v.position === "absolute" || v.position === "fixed");
          });
          if (b && u.every(function(D) {
            return D.includes(b);
          }))
            return H.set("isModalOpen", !0), {
              v: !0
            };
        }, d = 0; d < u.length; d++) {
          var f = c(d);
          if (P(f) === "object")
            return f.v;
        }
        H.set("isModalOpen", void 0);
      }
      var Jr = Vd;
      function Ud(e) {
        return e instanceof y.Node;
      }
      var Hd = Ud, Qr = {}, zd = {
        set: function(t, r) {
          if (typeof t != "string")
            throw new Error("Incomplete data: key must be a string");
          return r && (Qr[t] = r), Qr[t];
        },
        get: function(t) {
          return Qr[t];
        },
        clear: function() {
          Qr = {};
        }
      }, Se = zd;
      function $d(e, t) {
        var r = ["IMG", "CANVAS", "OBJECT", "IFRAME", "VIDEO", "SVG"], a = e.nodeName.toUpperCase();
        if (r.includes(a))
          return Se.set("bgColor", "imgNode"), !0;
        t = t || y.getComputedStyle(e);
        var n = t.getPropertyValue("background-image"), i = n !== "none";
        if (i) {
          var o = /gradient/.test(n);
          Se.set("bgColor", o ? "bgGradient" : "bgImage");
        }
        return i;
      }
      var Zr = $d, Wd = {
        "aria-activedescendant": {
          type: "idref",
          allowEmpty: !0
        },
        "aria-atomic": {
          type: "boolean",
          global: !0
        },
        "aria-autocomplete": {
          type: "nmtoken",
          values: ["inline", "list", "both", "none"]
        },
        "aria-busy": {
          type: "boolean",
          global: !0
        },
        "aria-checked": {
          type: "nmtoken",
          values: ["false", "mixed", "true", "undefined"]
        },
        "aria-colcount": {
          type: "int",
          minValue: -1
        },
        "aria-colindex": {
          type: "int",
          minValue: 1
        },
        "aria-colspan": {
          type: "int",
          minValue: 1
        },
        "aria-controls": {
          type: "idrefs",
          allowEmpty: !0,
          global: !0
        },
        "aria-current": {
          type: "nmtoken",
          allowEmpty: !0,
          values: ["page", "step", "location", "date", "time", "true", "false"],
          global: !0
        },
        "aria-describedby": {
          type: "idrefs",
          allowEmpty: !0,
          global: !0
        },
        "aria-details": {
          type: "idref",
          allowEmpty: !0,
          global: !0
        },
        "aria-disabled": {
          type: "boolean",
          global: !0
        },
        "aria-dropeffect": {
          type: "nmtokens",
          values: ["copy", "execute", "link", "move", "none", "popup"],
          global: !0
        },
        "aria-errormessage": {
          type: "idref",
          allowEmpty: !0,
          global: !0
        },
        "aria-expanded": {
          type: "nmtoken",
          values: ["true", "false", "undefined"]
        },
        "aria-flowto": {
          type: "idrefs",
          allowEmpty: !0,
          global: !0
        },
        "aria-grabbed": {
          type: "nmtoken",
          values: ["true", "false", "undefined"],
          global: !0
        },
        "aria-haspopup": {
          type: "nmtoken",
          allowEmpty: !0,
          values: ["true", "false", "menu", "listbox", "tree", "grid", "dialog"],
          global: !0
        },
        "aria-hidden": {
          type: "nmtoken",
          values: ["true", "false", "undefined"],
          global: !0
        },
        "aria-invalid": {
          type: "nmtoken",
          allowEmpty: !0,
          values: ["grammar", "false", "spelling", "true"],
          global: !0
        },
        "aria-keyshortcuts": {
          type: "string",
          allowEmpty: !0,
          global: !0
        },
        "aria-label": {
          type: "string",
          allowEmpty: !0,
          global: !0
        },
        "aria-labelledby": {
          type: "idrefs",
          allowEmpty: !0,
          global: !0
        },
        "aria-level": {
          type: "int",
          minValue: 1
        },
        "aria-live": {
          type: "nmtoken",
          values: ["assertive", "off", "polite"],
          global: !0
        },
        "aria-modal": {
          type: "boolean"
        },
        "aria-multiline": {
          type: "boolean"
        },
        "aria-multiselectable": {
          type: "boolean"
        },
        "aria-orientation": {
          type: "nmtoken",
          values: ["horizontal", "undefined", "vertical"]
        },
        "aria-owns": {
          type: "idrefs",
          allowEmpty: !0,
          global: !0
        },
        "aria-placeholder": {
          type: "string",
          allowEmpty: !0
        },
        "aria-posinset": {
          type: "int",
          minValue: 1
        },
        "aria-pressed": {
          type: "nmtoken",
          values: ["false", "mixed", "true", "undefined"]
        },
        "aria-readonly": {
          type: "boolean"
        },
        "aria-relevant": {
          type: "nmtokens",
          values: ["additions", "all", "removals", "text"],
          global: !0
        },
        "aria-required": {
          type: "boolean"
        },
        "aria-roledescription": {
          type: "string",
          allowEmpty: !0,
          global: !0
        },
        "aria-rowcount": {
          type: "int",
          minValue: -1
        },
        "aria-rowindex": {
          type: "int",
          minValue: 1
        },
        "aria-rowspan": {
          type: "int",
          minValue: 0
        },
        "aria-selected": {
          type: "nmtoken",
          values: ["false", "true", "undefined"]
        },
        "aria-setsize": {
          type: "int",
          minValue: -1
        },
        "aria-sort": {
          type: "nmtoken",
          values: ["ascending", "descending", "none", "other"]
        },
        "aria-valuemax": {
          type: "decimal"
        },
        "aria-valuemin": {
          type: "decimal"
        },
        "aria-valuenow": {
          type: "decimal"
        },
        "aria-valuetext": {
          type: "string"
        }
      }, wo = Wd, Gd = {
        alert: {
          type: "widget",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"]
        },
        alertdialog: {
          type: "widget",
          allowedAttrs: ["aria-expanded", "aria-modal"],
          superclassRole: ["alert", "dialog"],
          accessibleNameRequired: !0
        },
        application: {
          type: "landmark",
          allowedAttrs: ["aria-activedescendant", "aria-expanded"],
          superclassRole: ["structure"],
          accessibleNameRequired: !0
        },
        article: {
          type: "structure",
          allowedAttrs: ["aria-posinset", "aria-setsize", "aria-expanded"],
          superclassRole: ["document"]
        },
        banner: {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        blockquote: {
          type: "structure",
          superclassRole: ["section"]
        },
        button: {
          type: "widget",
          allowedAttrs: ["aria-expanded", "aria-pressed"],
          superclassRole: ["command"],
          accessibleNameRequired: !0,
          nameFromContent: !0,
          childrenPresentational: !0
        },
        caption: {
          type: "structure",
          requiredContext: ["figure", "table", "grid", "treegrid"],
          superclassRole: ["section"],
          prohibitedAttrs: ["aria-label", "aria-labelledby"]
        },
        cell: {
          type: "structure",
          requiredContext: ["row"],
          allowedAttrs: ["aria-colindex", "aria-colspan", "aria-rowindex", "aria-rowspan", "aria-expanded"],
          superclassRole: ["section"],
          nameFromContent: !0
        },
        checkbox: {
          type: "widget",
          allowedAttrs: ["aria-checked", "aria-readonly", "aria-required"],
          superclassRole: ["input"],
          accessibleNameRequired: !0,
          nameFromContent: !0,
          childrenPresentational: !0
        },
        code: {
          type: "structure",
          superclassRole: ["section"],
          prohibitedAttrs: ["aria-label", "aria-labelledby"]
        },
        columnheader: {
          type: "structure",
          requiredContext: ["row"],
          allowedAttrs: ["aria-sort", "aria-colindex", "aria-colspan", "aria-expanded", "aria-readonly", "aria-required", "aria-rowindex", "aria-rowspan", "aria-selected"],
          superclassRole: ["cell", "gridcell", "sectionhead"],
          accessibleNameRequired: !1,
          nameFromContent: !0
        },
        combobox: {
          type: "composite",
          requiredAttrs: ["aria-expanded", "aria-controls"],
          allowedAttrs: ["aria-owns", "aria-autocomplete", "aria-readonly", "aria-required", "aria-activedescendant", "aria-orientation"],
          superclassRole: ["select"],
          accessibleNameRequired: !0
        },
        command: {
          type: "abstract",
          superclassRole: ["widget"]
        },
        complementary: {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        composite: {
          type: "abstract",
          superclassRole: ["widget"]
        },
        contentinfo: {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        comment: {
          type: "structure",
          allowedAttrs: ["aria-level", "aria-posinset", "aria-setsize"],
          superclassRole: ["article"]
        },
        definition: {
          type: "structure",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"]
        },
        deletion: {
          type: "structure",
          superclassRole: ["section"],
          prohibitedAttrs: ["aria-label", "aria-labelledby"]
        },
        dialog: {
          type: "widget",
          allowedAttrs: ["aria-expanded", "aria-modal"],
          superclassRole: ["window"],
          accessibleNameRequired: !0
        },
        directory: {
          type: "structure",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["list"],
          nameFromContent: !0
        },
        document: {
          type: "structure",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["structure"]
        },
        emphasis: {
          type: "structure",
          superclassRole: ["section"],
          prohibitedAttrs: ["aria-label", "aria-labelledby"]
        },
        feed: {
          type: "structure",
          requiredOwned: ["article"],
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["list"]
        },
        figure: {
          type: "structure",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"],
          nameFromContent: !0
        },
        form: {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        grid: {
          type: "composite",
          requiredOwned: ["rowgroup", "row"],
          allowedAttrs: ["aria-level", "aria-multiselectable", "aria-readonly", "aria-activedescendant", "aria-colcount", "aria-expanded", "aria-rowcount"],
          superclassRole: ["composite", "table"],
          accessibleNameRequired: !1
        },
        gridcell: {
          type: "widget",
          requiredContext: ["row"],
          allowedAttrs: ["aria-readonly", "aria-required", "aria-selected", "aria-colindex", "aria-colspan", "aria-expanded", "aria-rowindex", "aria-rowspan"],
          superclassRole: ["cell", "widget"],
          nameFromContent: !0
        },
        group: {
          type: "structure",
          allowedAttrs: ["aria-activedescendant", "aria-expanded"],
          superclassRole: ["section"]
        },
        heading: {
          type: "structure",
          requiredAttrs: ["aria-level"],
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["sectionhead"],
          accessibleNameRequired: !1,
          nameFromContent: !0
        },
        img: {
          type: "structure",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"],
          accessibleNameRequired: !0,
          childrenPresentational: !0
        },
        input: {
          type: "abstract",
          superclassRole: ["widget"]
        },
        insertion: {
          type: "structure",
          superclassRole: ["section"],
          prohibitedAttrs: ["aria-label", "aria-labelledby"]
        },
        landmark: {
          type: "abstract",
          superclassRole: ["section"]
        },
        link: {
          type: "widget",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["command"],
          accessibleNameRequired: !0,
          nameFromContent: !0
        },
        list: {
          type: "structure",
          requiredOwned: ["group", "listitem"],
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"]
        },
        listbox: {
          type: "composite",
          requiredOwned: ["group", "option"],
          allowedAttrs: ["aria-multiselectable", "aria-readonly", "aria-required", "aria-activedescendant", "aria-expanded", "aria-orientation"],
          superclassRole: ["select"],
          accessibleNameRequired: !0
        },
        listitem: {
          type: "structure",
          requiredContext: ["list", "group"],
          allowedAttrs: ["aria-level", "aria-posinset", "aria-setsize", "aria-expanded"],
          superclassRole: ["section"],
          nameFromContent: !0
        },
        log: {
          type: "widget",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"]
        },
        main: {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        marquee: {
          type: "widget",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"]
        },
        math: {
          type: "structure",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"],
          childrenPresentational: !0
        },
        menu: {
          type: "composite",
          requiredOwned: ["group", "menuitemradio", "menuitem", "menuitemcheckbox"],
          allowedAttrs: ["aria-activedescendant", "aria-expanded", "aria-orientation"],
          superclassRole: ["select"]
        },
        menubar: {
          type: "composite",
          requiredOwned: ["group", "menuitemradio", "menuitem", "menuitemcheckbox"],
          allowedAttrs: ["aria-activedescendant", "aria-expanded", "aria-orientation"],
          superclassRole: ["menu"]
        },
        menuitem: {
          type: "widget",
          requiredContext: ["menu", "menubar", "group"],
          allowedAttrs: ["aria-posinset", "aria-setsize", "aria-expanded"],
          superclassRole: ["command"],
          accessibleNameRequired: !0,
          nameFromContent: !0
        },
        menuitemcheckbox: {
          type: "widget",
          requiredContext: ["menu", "menubar", "group"],
          allowedAttrs: ["aria-checked", "aria-posinset", "aria-readonly", "aria-setsize"],
          superclassRole: ["checkbox", "menuitem"],
          accessibleNameRequired: !0,
          nameFromContent: !0,
          childrenPresentational: !0
        },
        menuitemradio: {
          type: "widget",
          requiredContext: ["menu", "menubar", "group"],
          allowedAttrs: ["aria-checked", "aria-posinset", "aria-readonly", "aria-setsize"],
          superclassRole: ["menuitemcheckbox", "radio"],
          accessibleNameRequired: !0,
          nameFromContent: !0,
          childrenPresentational: !0
        },
        meter: {
          type: "structure",
          allowedAttrs: ["aria-valuetext"],
          requiredAttrs: ["aria-valuemax", "aria-valuemin", "aria-valuenow"],
          superclassRole: ["range"],
          accessibleNameRequired: !0,
          childrenPresentational: !0
        },
        mark: {
          type: "structure",
          superclassRole: ["section"],
          prohibitedAttrs: ["aria-label", "aria-labelledby"]
        },
        navigation: {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        none: {
          type: "structure",
          superclassRole: ["structure"],
          prohibitedAttrs: ["aria-label", "aria-labelledby"]
        },
        note: {
          type: "structure",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"]
        },
        option: {
          type: "widget",
          requiredContext: ["group", "listbox"],
          allowedAttrs: ["aria-selected", "aria-checked", "aria-posinset", "aria-setsize"],
          superclassRole: ["input"],
          accessibleNameRequired: !0,
          nameFromContent: !0,
          childrenPresentational: !0
        },
        paragraph: {
          type: "structure",
          superclassRole: ["section"],
          prohibitedAttrs: ["aria-label", "aria-labelledby"]
        },
        presentation: {
          type: "structure",
          superclassRole: ["structure"],
          prohibitedAttrs: ["aria-label", "aria-labelledby"]
        },
        progressbar: {
          type: "widget",
          allowedAttrs: ["aria-expanded", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext"],
          superclassRole: ["range"],
          accessibleNameRequired: !0,
          childrenPresentational: !0
        },
        radio: {
          type: "widget",
          allowedAttrs: ["aria-checked", "aria-posinset", "aria-setsize", "aria-required"],
          superclassRole: ["input"],
          accessibleNameRequired: !0,
          nameFromContent: !0,
          childrenPresentational: !0
        },
        radiogroup: {
          type: "composite",
          requiredOwned: ["radio"],
          allowedAttrs: ["aria-readonly", "aria-required", "aria-activedescendant", "aria-expanded", "aria-orientation"],
          superclassRole: ["select"],
          accessibleNameRequired: !1
        },
        range: {
          type: "abstract",
          superclassRole: ["widget"]
        },
        region: {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"],
          accessibleNameRequired: !1
        },
        roletype: {
          type: "abstract",
          superclassRole: []
        },
        row: {
          type: "structure",
          requiredContext: ["grid", "rowgroup", "table", "treegrid"],
          requiredOwned: ["cell", "columnheader", "gridcell", "rowheader"],
          allowedAttrs: ["aria-colindex", "aria-level", "aria-rowindex", "aria-selected", "aria-activedescendant", "aria-expanded", "aria-posinset", "aria-setsize"],
          superclassRole: ["group", "widget"],
          nameFromContent: !0
        },
        rowgroup: {
          type: "structure",
          requiredContext: ["grid", "table", "treegrid"],
          requiredOwned: ["row"],
          superclassRole: ["structure"],
          nameFromContent: !0
        },
        rowheader: {
          type: "structure",
          requiredContext: ["row"],
          allowedAttrs: ["aria-sort", "aria-colindex", "aria-colspan", "aria-expanded", "aria-readonly", "aria-required", "aria-rowindex", "aria-rowspan", "aria-selected"],
          superclassRole: ["cell", "gridcell", "sectionhead"],
          accessibleNameRequired: !1,
          nameFromContent: !0
        },
        scrollbar: {
          type: "widget",
          requiredAttrs: ["aria-valuenow"],
          allowedAttrs: ["aria-controls", "aria-orientation", "aria-valuemax", "aria-valuemin", "aria-valuetext"],
          superclassRole: ["range"],
          childrenPresentational: !0
        },
        search: {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        searchbox: {
          type: "widget",
          allowedAttrs: ["aria-activedescendant", "aria-autocomplete", "aria-multiline", "aria-placeholder", "aria-readonly", "aria-required"],
          superclassRole: ["textbox"],
          accessibleNameRequired: !0
        },
        section: {
          type: "abstract",
          superclassRole: ["structure"],
          nameFromContent: !0
        },
        sectionhead: {
          type: "abstract",
          superclassRole: ["structure"],
          nameFromContent: !0
        },
        select: {
          type: "abstract",
          superclassRole: ["composite", "group"]
        },
        separator: {
          type: "structure",
          allowedAttrs: ["aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-orientation", "aria-valuetext"],
          superclassRole: ["structure", "widget"],
          childrenPresentational: !0
        },
        slider: {
          type: "widget",
          requiredAttrs: ["aria-valuenow"],
          allowedAttrs: ["aria-valuemax", "aria-valuemin", "aria-orientation", "aria-readonly", "aria-valuetext"],
          superclassRole: ["input", "range"],
          accessibleNameRequired: !0,
          childrenPresentational: !0
        },
        spinbutton: {
          type: "widget",
          requiredAttrs: ["aria-valuenow"],
          allowedAttrs: ["aria-valuemax", "aria-valuemin", "aria-readonly", "aria-required", "aria-activedescendant", "aria-valuetext"],
          superclassRole: ["composite", "input", "range"],
          accessibleNameRequired: !0
        },
        status: {
          type: "widget",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"]
        },
        strong: {
          type: "structure",
          superclassRole: ["section"],
          prohibitedAttrs: ["aria-label", "aria-labelledby"]
        },
        structure: {
          type: "abstract",
          superclassRole: ["roletype"]
        },
        subscript: {
          type: "structure",
          superclassRole: ["section"],
          prohibitedAttrs: ["aria-label", "aria-labelledby"]
        },
        superscript: {
          type: "structure",
          superclassRole: ["section"],
          prohibitedAttrs: ["aria-label", "aria-labelledby"]
        },
        switch: {
          type: "widget",
          requiredAttrs: ["aria-checked"],
          allowedAttrs: ["aria-readonly"],
          superclassRole: ["checkbox"],
          accessibleNameRequired: !0,
          nameFromContent: !0,
          childrenPresentational: !0
        },
        suggestion: {
          type: "structure",
          requiredOwned: ["insertion", "deletion"],
          superclassRole: ["section"],
          prohibitedAttrs: ["aria-label", "aria-labelledby"]
        },
        tab: {
          type: "widget",
          requiredContext: ["tablist"],
          allowedAttrs: ["aria-posinset", "aria-selected", "aria-setsize", "aria-expanded"],
          superclassRole: ["sectionhead", "widget"],
          nameFromContent: !0,
          childrenPresentational: !0
        },
        table: {
          type: "structure",
          requiredOwned: ["rowgroup", "row"],
          allowedAttrs: ["aria-colcount", "aria-rowcount", "aria-expanded"],
          superclassRole: ["section"],
          accessibleNameRequired: !1,
          nameFromContent: !0
        },
        tablist: {
          type: "composite",
          requiredOwned: ["tab"],
          allowedAttrs: ["aria-level", "aria-multiselectable", "aria-orientation", "aria-activedescendant", "aria-expanded"],
          superclassRole: ["composite"]
        },
        tabpanel: {
          type: "widget",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"],
          accessibleNameRequired: !1
        },
        term: {
          type: "structure",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"],
          nameFromContent: !0
        },
        text: {
          type: "structure",
          superclassRole: ["section"],
          nameFromContent: !0
        },
        textbox: {
          type: "widget",
          allowedAttrs: ["aria-activedescendant", "aria-autocomplete", "aria-multiline", "aria-placeholder", "aria-readonly", "aria-required"],
          superclassRole: ["input"],
          accessibleNameRequired: !0
        },
        time: {
          type: "structure",
          superclassRole: ["section"]
        },
        timer: {
          type: "widget",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["status"]
        },
        toolbar: {
          type: "structure",
          allowedAttrs: ["aria-orientation", "aria-activedescendant", "aria-expanded"],
          superclassRole: ["group"],
          accessibleNameRequired: !0
        },
        tooltip: {
          type: "structure",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"],
          nameFromContent: !0
        },
        tree: {
          type: "composite",
          requiredOwned: ["group", "treeitem"],
          allowedAttrs: ["aria-multiselectable", "aria-required", "aria-activedescendant", "aria-expanded", "aria-orientation"],
          superclassRole: ["select"],
          accessibleNameRequired: !1
        },
        treegrid: {
          type: "composite",
          requiredOwned: ["rowgroup", "row"],
          allowedAttrs: ["aria-activedescendant", "aria-colcount", "aria-expanded", "aria-level", "aria-multiselectable", "aria-orientation", "aria-readonly", "aria-required", "aria-rowcount"],
          superclassRole: ["grid", "tree"],
          accessibleNameRequired: !1
        },
        treeitem: {
          type: "widget",
          requiredContext: ["group", "tree"],
          allowedAttrs: ["aria-checked", "aria-expanded", "aria-level", "aria-posinset", "aria-selected", "aria-setsize"],
          superclassRole: ["listitem", "option"],
          accessibleNameRequired: !0,
          nameFromContent: !0
        },
        widget: {
          type: "abstract",
          superclassRole: ["roletype"]
        },
        window: {
          type: "abstract",
          superclassRole: ["roletype"]
        }
      }, _o = Gd, Yd = {
        "doc-abstract": {
          type: "section",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"]
        },
        "doc-acknowledgments": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-afterword": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-appendix": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-backlink": {
          type: "link",
          allowedAttrs: ["aria-expanded"],
          nameFromContent: !0,
          superclassRole: ["link"]
        },
        "doc-biblioentry": {
          type: "listitem",
          allowedAttrs: ["aria-expanded", "aria-level", "aria-posinset", "aria-setsize"],
          superclassRole: ["listitem"],
          deprecated: !0
        },
        "doc-bibliography": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-biblioref": {
          type: "link",
          allowedAttrs: ["aria-expanded"],
          nameFromContent: !0,
          superclassRole: ["link"]
        },
        "doc-chapter": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-colophon": {
          type: "section",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"]
        },
        "doc-conclusion": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-cover": {
          type: "img",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["img"]
        },
        "doc-credit": {
          type: "section",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"]
        },
        "doc-credits": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-dedication": {
          type: "section",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"]
        },
        "doc-endnote": {
          type: "listitem",
          allowedAttrs: ["aria-expanded", "aria-level", "aria-posinset", "aria-setsize"],
          superclassRole: ["listitem"],
          deprecated: !0
        },
        "doc-endnotes": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-epigraph": {
          type: "section",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"]
        },
        "doc-epilogue": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-errata": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-example": {
          type: "section",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"]
        },
        "doc-footnote": {
          type: "section",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"]
        },
        "doc-foreword": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-glossary": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-glossref": {
          type: "link",
          allowedAttrs: ["aria-expanded"],
          nameFromContent: !0,
          superclassRole: ["link"]
        },
        "doc-index": {
          type: "navigation",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["navigation"]
        },
        "doc-introduction": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-noteref": {
          type: "link",
          allowedAttrs: ["aria-expanded"],
          nameFromContent: !0,
          superclassRole: ["link"]
        },
        "doc-notice": {
          type: "note",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["note"]
        },
        "doc-pagebreak": {
          type: "separator",
          allowedAttrs: ["aria-expanded", "aria-orientation"],
          superclassRole: ["separator"],
          childrenPresentational: !0
        },
        "doc-pagelist": {
          type: "navigation",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["navigation"]
        },
        "doc-part": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-preface": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-prologue": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-pullquote": {
          type: "none",
          superclassRole: ["none"]
        },
        "doc-qna": {
          type: "section",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"]
        },
        "doc-subtitle": {
          type: "sectionhead",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["sectionhead"]
        },
        "doc-tip": {
          type: "note",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["note"]
        },
        "doc-toc": {
          type: "navigation",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["navigation"]
        }
      }, Kd = Yd, Xd = {
        "graphics-document": {
          type: "structure",
          superclassRole: ["document"],
          accessibleNameRequired: !0
        },
        "graphics-object": {
          type: "structure",
          superclassRole: ["group"],
          nameFromContent: !0
        },
        "graphics-symbol": {
          type: "structure",
          superclassRole: ["img"],
          accessibleNameRequired: !0,
          childrenPresentational: !0
        }
      }, Jd = Xd, Qd = {
        a: {
          variant: {
            href: {
              matches: "[href]",
              contentTypes: ["interactive", "phrasing", "flow"],
              allowedRoles: ["button", "checkbox", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "switch", "tab", "treeitem", "doc-backlink", "doc-biblioref", "doc-glossref", "doc-noteref"],
              namingMethods: ["subtreeText"]
            },
            default: {
              contentTypes: ["phrasing", "flow"],
              allowedRoles: !0
            }
          }
        },
        abbr: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        address: {
          contentTypes: ["flow"],
          allowedRoles: !0
        },
        area: {
          variant: {
            href: {
              matches: "[href]",
              allowedRoles: !1
            },
            default: {
              allowedRoles: ["button", "link"]
            }
          },
          contentTypes: ["phrasing", "flow"],
          namingMethods: ["altText"]
        },
        article: {
          contentTypes: ["sectioning", "flow"],
          allowedRoles: ["feed", "presentation", "none", "document", "application", "main", "region"],
          shadowRoot: !0
        },
        aside: {
          contentTypes: ["sectioning", "flow"],
          allowedRoles: ["feed", "note", "presentation", "none", "region", "search", "doc-dedication", "doc-example", "doc-footnote", "doc-pullquote", "doc-tip"]
        },
        audio: {
          variant: {
            controls: {
              matches: "[controls]",
              contentTypes: ["interactive", "embedded", "phrasing", "flow"]
            },
            default: {
              contentTypes: ["embedded", "phrasing", "flow"]
            }
          },
          allowedRoles: ["application"],
          chromiumRole: "Audio"
        },
        b: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        base: {
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        bdi: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        bdo: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        blockquote: {
          contentTypes: ["flow"],
          allowedRoles: !0,
          shadowRoot: !0
        },
        body: {
          allowedRoles: !1,
          shadowRoot: !0
        },
        br: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: ["presentation", "none"],
          namingMethods: ["titleText", "singleSpace"]
        },
        button: {
          contentTypes: ["interactive", "phrasing", "flow"],
          allowedRoles: ["checkbox", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "switch", "tab"],
          namingMethods: ["subtreeText"]
        },
        canvas: {
          allowedRoles: !0,
          contentTypes: ["embedded", "phrasing", "flow"],
          chromiumRole: "Canvas"
        },
        caption: {
          allowedRoles: !1
        },
        cite: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        code: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        col: {
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        colgroup: {
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        data: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        datalist: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !1,
          implicitAttrs: {
            "aria-multiselectable": "false"
          }
        },
        dd: {
          allowedRoles: !1
        },
        del: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        dfn: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        details: {
          contentTypes: ["interactive", "flow"],
          allowedRoles: !1
        },
        dialog: {
          contentTypes: ["flow"],
          allowedRoles: ["alertdialog"]
        },
        div: {
          contentTypes: ["flow"],
          allowedRoles: !0,
          shadowRoot: !0
        },
        dl: {
          contentTypes: ["flow"],
          allowedRoles: ["group", "list", "presentation", "none"],
          chromiumRole: "DescriptionList"
        },
        dt: {
          allowedRoles: ["listitem"]
        },
        em: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        embed: {
          contentTypes: ["interactive", "embedded", "phrasing", "flow"],
          allowedRoles: ["application", "document", "img", "presentation", "none"],
          chromiumRole: "EmbeddedObject"
        },
        fieldset: {
          contentTypes: ["flow"],
          allowedRoles: ["none", "presentation", "radiogroup"],
          namingMethods: ["fieldsetLegendText"]
        },
        figcaption: {
          allowedRoles: ["group", "none", "presentation"]
        },
        figure: {
          contentTypes: ["flow"],
          allowedRoles: !0,
          namingMethods: ["figureText", "titleText"]
        },
        footer: {
          contentTypes: ["flow"],
          allowedRoles: ["group", "none", "presentation", "doc-footnote"],
          shadowRoot: !0
        },
        form: {
          contentTypes: ["flow"],
          allowedRoles: ["search", "none", "presentation"]
        },
        h1: {
          contentTypes: ["heading", "flow"],
          allowedRoles: ["none", "presentation", "tab", "doc-subtitle"],
          shadowRoot: !0,
          implicitAttrs: {
            "aria-level": "1"
          }
        },
        h2: {
          contentTypes: ["heading", "flow"],
          allowedRoles: ["none", "presentation", "tab", "doc-subtitle"],
          shadowRoot: !0,
          implicitAttrs: {
            "aria-level": "2"
          }
        },
        h3: {
          contentTypes: ["heading", "flow"],
          allowedRoles: ["none", "presentation", "tab", "doc-subtitle"],
          shadowRoot: !0,
          implicitAttrs: {
            "aria-level": "3"
          }
        },
        h4: {
          contentTypes: ["heading", "flow"],
          allowedRoles: ["none", "presentation", "tab", "doc-subtitle"],
          shadowRoot: !0,
          implicitAttrs: {
            "aria-level": "4"
          }
        },
        h5: {
          contentTypes: ["heading", "flow"],
          allowedRoles: ["none", "presentation", "tab", "doc-subtitle"],
          shadowRoot: !0,
          implicitAttrs: {
            "aria-level": "5"
          }
        },
        h6: {
          contentTypes: ["heading", "flow"],
          allowedRoles: ["none", "presentation", "tab", "doc-subtitle"],
          shadowRoot: !0,
          implicitAttrs: {
            "aria-level": "6"
          }
        },
        head: {
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        header: {
          contentTypes: ["flow"],
          allowedRoles: ["group", "none", "presentation", "doc-footnote"],
          shadowRoot: !0
        },
        hgroup: {
          contentTypes: ["heading", "flow"],
          allowedRoles: !0
        },
        hr: {
          contentTypes: ["flow"],
          allowedRoles: ["none", "presentation", "doc-pagebreak"],
          namingMethods: ["titleText", "singleSpace"]
        },
        html: {
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        i: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        iframe: {
          contentTypes: ["interactive", "embedded", "phrasing", "flow"],
          allowedRoles: ["application", "document", "img", "none", "presentation"],
          chromiumRole: "Iframe"
        },
        img: {
          variant: {
            nonEmptyAlt: {
              matches: [{
                attributes: {
                  alt: "/.+/"
                }
              }, {
                hasAccessibleName: !0
              }],
              allowedRoles: ["button", "checkbox", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "progressbar", "radio", "scrollbar", "separator", "slider", "switch", "tab", "treeitem", "doc-cover"]
            },
            usemap: {
              matches: "[usemap]",
              contentTypes: ["interactive", "embedded", "flow"]
            },
            default: {
              allowedRoles: ["presentation", "none"],
              contentTypes: ["embedded", "flow"]
            }
          },
          namingMethods: ["altText"]
        },
        input: {
          variant: {
            button: {
              matches: {
                properties: {
                  type: "button"
                }
              },
              allowedRoles: ["link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "switch", "tab"]
            },
            buttonType: {
              matches: {
                properties: {
                  type: ["button", "submit", "reset"]
                }
              },
              namingMethods: ["valueText", "titleText", "buttonDefaultText"]
            },
            checkboxPressed: {
              matches: {
                properties: {
                  type: "checkbox"
                },
                attributes: {
                  "aria-pressed": "/.*/"
                }
              },
              allowedRoles: ["button", "menuitemcheckbox", "option", "switch"],
              implicitAttrs: {
                "aria-checked": "false"
              }
            },
            checkbox: {
              matches: {
                properties: {
                  type: "checkbox"
                },
                attributes: {
                  "aria-pressed": null
                }
              },
              allowedRoles: ["menuitemcheckbox", "option", "switch"],
              implicitAttrs: {
                "aria-checked": "false"
              }
            },
            noRoles: {
              matches: {
                properties: {
                  type: ["color", "date", "datetime-local", "file", "month", "number", "password", "range", "reset", "submit", "time", "week"]
                }
              },
              allowedRoles: !1
            },
            hidden: {
              matches: {
                properties: {
                  type: "hidden"
                }
              },
              contentTypes: ["flow"],
              allowedRoles: !1,
              noAriaAttrs: !0
            },
            image: {
              matches: {
                properties: {
                  type: "image"
                }
              },
              allowedRoles: ["link", "menuitem", "menuitemcheckbox", "menuitemradio", "radio", "switch"],
              namingMethods: ["altText", "valueText", "labelText", "titleText", "buttonDefaultText"]
            },
            radio: {
              matches: {
                properties: {
                  type: "radio"
                }
              },
              allowedRoles: ["menuitemradio"],
              implicitAttrs: {
                "aria-checked": "false"
              }
            },
            textWithList: {
              matches: {
                properties: {
                  type: "text"
                },
                attributes: {
                  list: "/.*/"
                }
              },
              allowedRoles: !1
            },
            default: {
              contentTypes: ["interactive", "flow"],
              allowedRoles: ["combobox", "searchbox", "spinbutton"],
              implicitAttrs: {
                "aria-valuenow": ""
              },
              namingMethods: ["labelText", "placeholderText"]
            }
          }
        },
        ins: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        kbd: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        label: {
          contentTypes: ["interactive", "phrasing", "flow"],
          allowedRoles: !1,
          chromiumRole: "Label"
        },
        legend: {
          allowedRoles: !1
        },
        li: {
          allowedRoles: ["menuitem", "menuitemcheckbox", "menuitemradio", "option", "none", "presentation", "radio", "separator", "tab", "treeitem", "doc-biblioentry", "doc-endnote"],
          implicitAttrs: {
            "aria-setsize": "1",
            "aria-posinset": "1"
          }
        },
        link: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        main: {
          contentTypes: ["flow"],
          allowedRoles: !1,
          shadowRoot: !0
        },
        map: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        math: {
          contentTypes: ["embedded", "phrasing", "flow"],
          allowedRoles: !1
        },
        mark: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        menu: {
          contentTypes: ["flow"],
          allowedRoles: ["directory", "group", "listbox", "menu", "menubar", "none", "presentation", "radiogroup", "tablist", "toolbar", "tree"]
        },
        meta: {
          variant: {
            itemprop: {
              matches: "[itemprop]",
              contentTypes: ["phrasing", "flow"]
            }
          },
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        meter: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !1,
          chromiumRole: "progressbar"
        },
        nav: {
          contentTypes: ["sectioning", "flow"],
          allowedRoles: ["doc-index", "doc-pagelist", "doc-toc", "menu", "menubar", "none", "presentation", "tablist"],
          shadowRoot: !0
        },
        noscript: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        object: {
          variant: {
            usemap: {
              matches: "[usemap]",
              contentTypes: ["interactive", "embedded", "phrasing", "flow"]
            },
            default: {
              contentTypes: ["embedded", "phrasing", "flow"]
            }
          },
          allowedRoles: ["application", "document", "img"],
          chromiumRole: "PluginObject"
        },
        ol: {
          contentTypes: ["flow"],
          allowedRoles: ["directory", "group", "listbox", "menu", "menubar", "none", "presentation", "radiogroup", "tablist", "toolbar", "tree"]
        },
        optgroup: {
          allowedRoles: !1
        },
        option: {
          allowedRoles: !1,
          implicitAttrs: {
            "aria-selected": "false"
          }
        },
        output: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0,
          namingMethods: ["subtreeText"]
        },
        p: {
          contentTypes: ["flow"],
          allowedRoles: !0,
          shadowRoot: !0
        },
        param: {
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        picture: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        pre: {
          contentTypes: ["flow"],
          allowedRoles: !0
        },
        progress: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !1,
          implicitAttrs: {
            "aria-valuemax": "100",
            "aria-valuemin": "0",
            "aria-valuenow": "0"
          }
        },
        q: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        rp: {
          allowedRoles: !0
        },
        rt: {
          allowedRoles: !0
        },
        ruby: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        s: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        samp: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        script: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        section: {
          contentTypes: ["sectioning", "flow"],
          allowedRoles: ["alert", "alertdialog", "application", "banner", "complementary", "contentinfo", "dialog", "document", "feed", "group", "log", "main", "marquee", "navigation", "none", "note", "presentation", "search", "status", "tabpanel", "doc-abstract", "doc-acknowledgments", "doc-afterword", "doc-appendix", "doc-bibliography", "doc-chapter", "doc-colophon", "doc-conclusion", "doc-credit", "doc-credits", "doc-dedication", "doc-endnotes", "doc-epigraph", "doc-epilogue", "doc-errata", "doc-example", "doc-foreword", "doc-glossary", "doc-index", "doc-introduction", "doc-notice", "doc-pagelist", "doc-part", "doc-preface", "doc-prologue", "doc-pullquote", "doc-qna", "doc-toc"],
          shadowRoot: !0
        },
        select: {
          variant: {
            combobox: {
              matches: {
                attributes: {
                  multiple: null,
                  size: [null, "1"]
                }
              },
              allowedRoles: ["menu"]
            },
            default: {
              allowedRoles: !1
            }
          },
          contentTypes: ["interactive", "phrasing", "flow"],
          implicitAttrs: {
            "aria-valuenow": ""
          },
          namingMethods: ["labelText"]
        },
        slot: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        small: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        source: {
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        span: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0,
          shadowRoot: !0
        },
        strong: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        style: {
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        svg: {
          contentTypes: ["embedded", "phrasing", "flow"],
          allowedRoles: !0,
          chromiumRole: "SVGRoot",
          namingMethods: ["svgTitleText"]
        },
        sub: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        summary: {
          allowedRoles: !1,
          namingMethods: ["subtreeText"]
        },
        sup: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        table: {
          contentTypes: ["flow"],
          allowedRoles: !0,
          namingMethods: ["tableCaptionText", "tableSummaryText"]
        },
        tbody: {
          allowedRoles: !0
        },
        template: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        textarea: {
          contentTypes: ["interactive", "phrasing", "flow"],
          allowedRoles: !1,
          implicitAttrs: {
            "aria-valuenow": "",
            "aria-multiline": "true"
          },
          namingMethods: ["labelText", "placeholderText"]
        },
        tfoot: {
          allowedRoles: !0
        },
        thead: {
          allowedRoles: !0
        },
        time: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        title: {
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        td: {
          allowedRoles: !0
        },
        th: {
          allowedRoles: !0
        },
        tr: {
          allowedRoles: !0
        },
        track: {
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        u: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        ul: {
          contentTypes: ["flow"],
          allowedRoles: ["directory", "group", "listbox", "menu", "menubar", "none", "presentation", "radiogroup", "tablist", "toolbar", "tree"]
        },
        var: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        video: {
          variant: {
            controls: {
              matches: "[controls]",
              contentTypes: ["interactive", "embedded", "phrasing", "flow"]
            },
            default: {
              contentTypes: ["embedded", "phrasing", "flow"]
            }
          },
          allowedRoles: ["application"],
          chromiumRole: "video"
        },
        wbr: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: ["presentation", "none"]
        }
      }, Zd = Qd, ef = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50]
      }, tf = ef, xo = {
        ariaAttrs: wo,
        ariaRoles: de({}, _o, Kd, Jd),
        htmlElms: Zd,
        cssColors: tf
      }, Ut = de({}, xo);
      function rf(e) {
        Object.keys(Ut).forEach(function(t) {
          e[t] && (Ut[t] = Qa(Ut[t], e[t]));
        });
      }
      function af() {
        Object.keys(Ut).forEach(function(e) {
          Ut[e] = xo[e];
        });
      }
      var le = Ut;
      function nf(e, t, r) {
        if (/%$/.test(t))
          return r === 3 ? parseFloat(t) / 100 : parseFloat(t) * 255 / 100;
        if (e[r] === "h") {
          if (/turn$/.test(t))
            return parseFloat(t) * 360;
          if (/rad$/.test(t))
            return parseFloat(t) * 57.3;
        }
        return parseFloat(t);
      }
      function of(e) {
        var t = ve(e, 4), r = t[0], a = t[1], n = t[2], i = t[3];
        a /= 255, n /= 255;
        var o = (1 - Math.abs(2 * n - 1)) * a, l = o * (1 - Math.abs(r / 60 % 2 - 1)), s = n - o / 2, u;
        return r < 60 ? u = [o, l, 0] : r < 120 ? u = [l, o, 0] : r < 180 ? u = [0, o, l] : r < 240 ? u = [0, l, o] : r < 300 ? u = [l, 0, o] : u = [o, 0, l], u.map(function(c) {
          return Math.round((c + s) * 255);
        }).concat(i);
      }
      function lf(e, t, r, a) {
        this.red = e, this.green = t, this.blue = r, this.alpha = a, this.toHexString = function() {
          var l = Math.round(this.red).toString(16), s = Math.round(this.green).toString(16), u = Math.round(this.blue).toString(16);
          return "#" + (this.red > 15.5 ? l : "0" + l) + (this.green > 15.5 ? s : "0" + s) + (this.blue > 15.5 ? u : "0" + u);
        };
        var n = /^#[0-9a-f]{3,8}$/i, i = /^((?:rgb|hsl)a?)\s*\(([^\)]*)\)/i;
        this.parseString = function(l) {
          if (le.cssColors[l] || l === "transparent") {
            var s = le.cssColors[l] || [0, 0, 0], u = ve(s, 3), c = u[0], d = u[1], f = u[2];
            this.red = c, this.green = d, this.blue = f, this.alpha = l === "transparent" ? 0 : 1;
            return;
          }
          if (l.match(i)) {
            this.parseColorFnString(l);
            return;
          }
          if (l.match(n)) {
            this.parseHexString(l);
            return;
          }
          throw new Error('Unable to parse color "'.concat(l, '"'));
        }, this.parseRgbString = function(l) {
          if (l === "transparent") {
            this.red = 0, this.green = 0, this.blue = 0, this.alpha = 0;
            return;
          }
          this.parseColorFnString(l);
        }, this.parseHexString = function(l) {
          if (!(!l.match(n) || [6, 8].includes(l.length))) {
            if (l = l.replace("#", ""), l.length < 6) {
              var s = l, u = ve(s, 4), c = u[0], d = u[1], f = u[2], p = u[3];
              l = c + c + d + d + f + f, p && (l += p + p);
            }
            var m = l.match(/.{1,2}/g);
            this.red = parseInt(m[0], 16), this.green = parseInt(m[1], 16), this.blue = parseInt(m[2], 16), m[3] ? this.alpha = parseInt(m[3], 16) / 255 : this.alpha = 1;
          }
        }, this.parseColorFnString = function(l) {
          var s = l.match(i) || [], u = ve(s, 3), c = u[1], d = u[2];
          if (!(!c || !d)) {
            var f = d.split(/\s*[,\/\s]\s*/).map(function(m) {
              return m.replace(",", "").trim();
            }).filter(function(m) {
              return m !== "";
            }), p = f.map(function(m, b) {
              return nf(c, m, b);
            });
            c.substr(0, 3) === "hsl" && (p = of(p)), this.red = p[0], this.green = p[1], this.blue = p[2], this.alpha = typeof p[3] == "number" ? p[3] : 1;
          }
        }, this.getRelativeLuminance = function() {
          var l = this.red / 255, s = this.green / 255, u = this.blue / 255, c = l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4), d = s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4), f = u <= 0.03928 ? u / 12.92 : Math.pow((u + 0.055) / 1.055, 2.4);
          return 0.2126 * c + 0.7152 * d + 0.0722 * f;
        };
      }
      var Ze = lf;
      function uf(e) {
        var t = new Ze();
        if (t.parseString(e.getPropertyValue("background-color")), t.alpha !== 0) {
          var r = e.getPropertyValue("opacity");
          t.alpha = t.alpha * r;
        }
        return t;
      }
      var kt = uf;
      function sf(e) {
        var t = y.getComputedStyle(e);
        return Zr(e, t) || kt(t).alpha === 1;
      }
      var cf = sf;
      function cn(e) {
        if (!e.href)
          return !1;
        var t;
        return typeof H.get("firstPageLink") < "u" ? t = H.get("firstPageLink") : (y.location.origin ? t = et(h._tree, 'a[href]:not([href^="javascript:"])').find(function(r) {
          return !tn(r.actualNode);
        }) : t = et(h._tree, 'a:not([href^="#"]):not([href^="/#"]):not([href^="javascript:"])')[0], H.set("firstPageLink", t || null)), t ? e.compareDocumentPosition(t.actualNode) === e.DOCUMENT_POSITION_FOLLOWING : !0;
      }
      function df(e, t) {
        for (var r = ["fixed", "sticky"], a = [], n = !1, i = 0; i < e.length; ++i) {
          var o = e[i];
          o === t && (n = !0);
          var l = y.getComputedStyle(o);
          if (!n && r.indexOf(l.position) !== -1) {
            a = [];
            continue;
          }
          a.push(o);
        }
        return a;
      }
      var Eo = df;
      function ea(e, t) {
        var r = Ao(t);
        do {
          var a = Ao(e);
          if (a === r || a === t)
            return ff(e, t);
          e = a;
        } while (e);
        return !1;
      }
      function Ao(e) {
        for (var t = V(e), r = t.parent; r; ) {
          if (gt(r.actualNode))
            return r.actualNode;
          r = r.parent;
        }
      }
      function ff(e, t) {
        var r = y.getComputedStyle(t), a = r.getPropertyValue("overflow");
        if (r.getPropertyValue("display") === "inline")
          return !0;
        var n = Array.from(e.getClientRects()), i = t.getBoundingClientRect(), o = {
          left: i.left,
          top: i.top,
          width: i.width,
          height: i.height
        };
        return (["scroll", "auto"].includes(a) || t instanceof y.HTMLHtmlElement) && (o.width = t.scrollWidth, o.height = t.scrollHeight), n.length === 1 && a === "hidden" && r.getPropertyValue("white-space") === "nowrap" && (n[0] = o), n.some(function(l) {
          return !(Math.ceil(l.left) < Math.floor(o.left) || Math.ceil(l.top) < Math.floor(o.top) || Math.floor(l.left + l.width) > Math.ceil(o.left + o.width) || Math.floor(l.top + l.height) > Math.ceil(o.top + o.height));
        });
      }
      function Co(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : R, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
        if (a > 999)
          throw new Error("Infinite loop detected");
        return Array.from(r.elementsFromPoint(e, t) || []).filter(function(n) {
          return Be(n) === r;
        }).reduce(function(n, i) {
          if (zr(i)) {
            var o = Co(e, t, i.shadowRoot, a + 1);
            n = n.concat(o), n.length && ea(n[0], i) && n.push(i);
          } else
            n.push(i);
          return n;
        }, []);
      }
      var pf = Co;
      function mf(e, t) {
        if (!!e.hasAttribute(t)) {
          var r = e.nodeName.toUpperCase(), a = e;
          (!["A", "AREA"].includes(r) || e.ownerSVGElement) && (a = R.createElement("a"), a.href = e.getAttribute(t));
          var n = ["https:", "ftps:"].includes(a.protocol) ? a.protocol.replace(/s:$/, ":") : a.protocol, i = /^\//.test(a.pathname) ? a.pathname : "/".concat(a.pathname), o = vf(i), l = o.pathname, s = o.filename;
          return {
            protocol: n,
            hostname: a.hostname,
            port: hf(a.port),
            pathname: /\/$/.test(l) ? l : "".concat(l, "/"),
            search: gf(a.search),
            hash: bf(a.hash),
            filename: s
          };
        }
      }
      function hf(e) {
        var t = ["443", "80"];
        return t.includes(e) ? "" : e;
      }
      function vf(e) {
        var t = e.split("/").pop();
        return !t || t.indexOf(".") === -1 ? {
          pathname: e,
          filename: ""
        } : {
          pathname: e.replace(t, ""),
          filename: /index./.test(t) ? "" : t
        };
      }
      function gf(e) {
        var t = {};
        if (!e || !e.length)
          return t;
        var r = e.substring(1).split("&");
        if (!r || !r.length)
          return t;
        for (var a = 0; a < r.length; a++) {
          var n = r[a], i = n.split("="), o = ve(i, 2), l = o[0], s = o[1], u = s === void 0 ? "" : s;
          t[decodeURIComponent(l)] = decodeURIComponent(u);
        }
        return t;
      }
      function bf(e) {
        if (!e)
          return "";
        var t = /#!?\/?/g, r = e.match(t);
        if (!r)
          return "";
        var a = ve(r, 1), n = a[0];
        return n === "#" ? "" : e;
      }
      var yf = mf;
      function Df(e, t) {
        var r = t.getBoundingClientRect(), a = r.top, n = r.left, i = {
          top: a - t.scrollTop,
          bottom: a - t.scrollTop + t.scrollHeight,
          left: n - t.scrollLeft,
          right: n - t.scrollLeft + t.scrollWidth
        };
        if (e.left > i.right && e.left > r.right || e.top > i.bottom && e.top > r.bottom || e.right < i.left && e.right < r.left || e.bottom < i.top && e.bottom < r.top)
          return !1;
        var o = y.getComputedStyle(t);
        return e.left > r.right || e.top > r.bottom ? o.overflow === "scroll" || o.overflow === "auto" || t instanceof y.HTMLBodyElement || t instanceof y.HTMLHtmlElement : !0;
      }
      var dn = Df, fn, Fo = 0, wf = function(e) {
        ti(r, e);
        var t = ri(r);
        function r(a, n, i) {
          var o;
          if (Fr(this, r), o = t.call(this), o.shadowId = i, o.children = [], o.actualNode = a, o.parent = n, n || (Fo = 0), o.nodeIndex = Fo++, o._isHidden = null, o._cache = {}, typeof fn > "u" && (fn = Lr(a.ownerDocument)), o._isXHTML = fn, a.nodeName.toLowerCase() === "input") {
            var l = a.getAttribute("type");
            l = o._isXHTML ? l : (l || "").toLowerCase(), oa().includes(l) || (l = "text"), o._type = l;
          }
          return H.get("nodeMap") && H.get("nodeMap").set(a, ai(o)), o;
        }
        return kr(r, [{
          key: "props",
          get: function() {
            if (!this._cache.hasOwnProperty("props")) {
              var n = this.actualNode, i = n.nodeType, o = n.nodeName, l = n.id, s = n.multiple, u = n.nodeValue, c = n.value, d = n.selected;
              this._cache.props = {
                nodeType: i,
                nodeName: this._isXHTML ? o : o.toLowerCase(),
                id: l,
                type: this._type,
                multiple: s,
                nodeValue: u,
                value: c,
                selected: d
              };
            }
            return this._cache.props;
          }
        }, {
          key: "attr",
          value: function(n) {
            return typeof this.actualNode.getAttribute != "function" ? null : this.actualNode.getAttribute(n);
          }
        }, {
          key: "hasAttr",
          value: function(n) {
            return typeof this.actualNode.hasAttribute != "function" ? !1 : this.actualNode.hasAttribute(n);
          }
        }, {
          key: "attrNames",
          get: function() {
            if (!this._cache.hasOwnProperty("attrNames")) {
              var n;
              this.actualNode.attributes instanceof y.NamedNodeMap ? n = this.actualNode.attributes : n = this.actualNode.cloneNode(!1).attributes, this._cache.attrNames = Array.from(n).map(function(i) {
                return i.name;
              });
            }
            return this._cache.attrNames;
          }
        }, {
          key: "getComputedStylePropertyValue",
          value: function(n) {
            var i = "computedStyle_" + n;
            return this._cache.hasOwnProperty(i) || (this._cache.hasOwnProperty("computedStyle") || (this._cache.computedStyle = y.getComputedStyle(this.actualNode)), this._cache[i] = this._cache.computedStyle.getPropertyValue(n)), this._cache[i];
          }
        }, {
          key: "isFocusable",
          get: function() {
            return this._cache.hasOwnProperty("isFocusable") || (this._cache.isFocusable = je(this.actualNode)), this._cache.isFocusable;
          }
        }, {
          key: "tabbableElements",
          get: function() {
            return this._cache.hasOwnProperty("tabbableElements") || (this._cache.tabbableElements = lo(this)), this._cache.tabbableElements;
          }
        }, {
          key: "clientRects",
          get: function() {
            return this._cache.hasOwnProperty("clientRects") || (this._cache.clientRects = Array.from(this.actualNode.getClientRects()).filter(function(n) {
              return n.width > 0;
            })), this._cache.clientRects;
          }
        }, {
          key: "boundingClientRect",
          get: function() {
            return this._cache.hasOwnProperty("boundingClientRect") || (this._cache.boundingClientRect = this.actualNode.getBoundingClientRect()), this._cache.boundingClientRect;
          }
        }]), r;
      }(oe), dr = wf, pn;
      function _f(e) {
        var t = [];
        for (e = e.firstChild; e; )
          t.push(e), e = e.nextSibling;
        return t;
      }
      function ko(e, t, r) {
        var a, n, i;
        function o(l, s, u) {
          var c = ko(s, t, u);
          return c && (l = l.concat(c)), l;
        }
        return e.documentElement && (e = e.documentElement), i = e.nodeName.toLowerCase(), zr(e) ? (pn = !0, a = new dr(e, r, t), t = "a" + Math.random().toString().substring(2), n = Array.from(e.shadowRoot.childNodes), a.children = n.reduce(function(l, s) {
          return o(l, s, a);
        }, []), [a]) : i === "content" && typeof e.getDistributedNodes == "function" ? (n = Array.from(e.getDistributedNodes()), n.reduce(function(l, s) {
          return o(l, s, r);
        }, [])) : i === "slot" && typeof e.assignedNodes == "function" ? (n = Array.from(e.assignedNodes()), n.length || (n = _f(e)), y.getComputedStyle(e), n.reduce(function(l, s) {
          return o(l, s, r);
        }, [])) : e.nodeType === 1 ? (a = new dr(e, r, t), n = Array.from(e.childNodes), a.children = n.reduce(function(l, s) {
          return o(l, s, a);
        }, []), [a]) : e.nodeType === 3 ? [new dr(e, r)] : void 0;
      }
      function xf() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : R.documentElement, t = arguments.length > 1 ? arguments[1] : void 0;
        pn = !1, H.set("nodeMap", /* @__PURE__ */ new WeakMap());
        var r = ko(e, t, null);
        return r[0]._hasShadowRoot = pn, r;
      }
      var mn = xf;
      function Ef(e) {
        return e ? e.trim().split("-")[0].toLowerCase() : "";
      }
      var Rt = Ef;
      function Af(e) {
        var t = {};
        return t.none = e.none.concat(e.all), t.any = e.any, Object.keys(t).map(function(r) {
          if (!!t[r].length) {
            var a = h._audit.data.failureSummaries[r];
            if (a && typeof a.failureMessage == "function")
              return a.failureMessage(t[r].map(function(n) {
                return n.message || "";
              }));
          }
        }).filter(function(r) {
          return r !== void 0;
        }).join(`

`);
      }
      var hn = Af;
      function vn() {
        var e = h._audit.data.incompleteFallbackMessage;
        return typeof e == "function" && (e = e()), typeof e != "string" ? "" : e;
      }
      function Cf(e, t) {
        ["any", "all", "none"].forEach(function(r) {
          !Array.isArray(e[r]) || e[r].filter(function(a) {
            return Array.isArray(a.relatedNodes);
          }).forEach(function(a) {
            a.relatedNodes = a.relatedNodes.map(function(n) {
              var i = {
                html: n.source
              };
              return t.elementRef && !n.fromFrame && (i.element = n.element), (t.selectors !== !1 || n.fromFrame) && (i.target = n.selector), t.ancestry && (i.ancestry = n.ancestry), t.xpath && (i.xpath = n.xpath), i;
            });
          });
        });
      }
      var Ro = re.resultGroups;
      function Ff(e, t) {
        var r = h.utils.aggregateResult(e);
        return Ro.forEach(function(a) {
          t.resultTypes && !t.resultTypes.includes(a) && (r[a] || []).forEach(function(n) {
            Array.isArray(n.nodes) && n.nodes.length > 0 && (n.nodes = [n.nodes[0]]);
          }), r[a] = (r[a] || []).map(function(n) {
            return n = Object.assign({}, n), Array.isArray(n.nodes) && n.nodes.length > 0 && (n.nodes = n.nodes.map(function(i) {
              return P(i.node) === "object" && (i.html = i.node.source, t.elementRef && !i.node.fromFrame && (i.element = i.node.element), (t.selectors !== !1 || i.node.fromFrame) && (i.target = i.node.selector), t.ancestry && (i.ancestry = i.node.ancestry), t.xpath && (i.xpath = i.node.xpath)), delete i.result, delete i.node, Cf(i, t), i;
            })), Ro.forEach(function(i) {
              return delete n[i];
            }), delete n.pageLevel, delete n.result, n;
          });
        }), r;
      }
      var fr = Ff;
      h._thisWillBeDeletedDoNotUse = h._thisWillBeDeletedDoNotUse || {}, h._thisWillBeDeletedDoNotUse.helpers = {
        failureSummary: hn,
        incompleteFallbackMessage: vn,
        processAggregate: fr
      };
      var kf = /\$\{\s?data\s?\}/g;
      function ta(e, t) {
        if (typeof t == "string")
          return e.replace(kf, t);
        for (var r in t)
          if (t.hasOwnProperty(r)) {
            var a = new RegExp("\\${\\s?data\\." + r + "\\s?}", "g"), n = typeof t[r] > "u" ? "" : String(t[r]);
            e = e.replace(a, n);
          }
        return e;
      }
      function To(e, t) {
        if (!!e) {
          if (Array.isArray(t)) {
            if (t.values = t.join(", "), typeof e.singular == "string" && typeof e.plural == "string") {
              var r = t.length === 1 ? e.singular : e.plural;
              return ta(r, t);
            }
            return ta(e, t);
          }
          if (typeof e == "string")
            return ta(e, t);
          if (typeof t == "string") {
            var a = e[t];
            return ta(a, t);
          }
          var n = e.default || vn();
          return t && t.messageKey && e[t.messageKey] && (n = e[t.messageKey]), To(n, t);
        }
      }
      var gn = To;
      function Rf(e, t, r) {
        var a = h._audit.data.checks[e];
        if (!a)
          throw new Error("Cannot get message for unknown check: ".concat(e, "."));
        if (!a.messages[t])
          throw new Error('Check "'.concat(e, '"" does not have a "').concat(t, '" message.'));
        return gn(a.messages[t], r);
      }
      var Tf = Rf;
      function Sf(e, t, r) {
        var a = ((r.rules && r.rules[t] || {}).checks || {})[e.id], n = (r.checks || {})[e.id], i = e.enabled, o = e.options;
        return n && (n.hasOwnProperty("enabled") && (i = n.enabled), n.hasOwnProperty("options") && (o = n.options)), a && (a.hasOwnProperty("enabled") && (i = a.enabled), a.hasOwnProperty("options") && (o = a.options)), {
          enabled: i,
          options: o,
          absolutePaths: r.absolutePaths
        };
      }
      var ra = Sf;
      function vt() {
        var e, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : y;
        return t && P(t) === "object" ? t : P(r) !== "object" ? {} : {
          testEngine: {
            name: "axe-core",
            version: h.version
          },
          testRunner: {
            name: h._audit.brand
          },
          testEnvironment: Of(r),
          timestamp: new Date().toISOString(),
          url: (e = r.location) === null || e === void 0 ? void 0 : e.href
        };
      }
      function Of(e) {
        if (!e.navigator || P(e.navigator) !== "object")
          return {};
        var t = e.navigator, r = e.innerHeight, a = e.innerWidth, n = Nf(e) || {}, i = n.angle, o = n.type;
        return {
          userAgent: t.userAgent,
          windowWidth: a,
          windowHeight: r,
          orientationAngle: i,
          orientationType: o
        };
      }
      function Nf(e) {
        var t = e.screen;
        return t.orientation || t.msOrientation || t.mozOrientation;
      }
      function So(e, t) {
        var r = t.focusable, a = t.page;
        return {
          node: e,
          include: [],
          exclude: [],
          initiator: !1,
          focusable: r && If(e),
          size: Pf(e),
          page: a
        };
      }
      function If(e) {
        var t = e.getAttribute("tabindex");
        if (!t)
          return !0;
        var r = parseInt(t, 10);
        return isNaN(r) || r >= 0;
      }
      function Pf(e) {
        var t = parseInt(e.getAttribute("width"), 10), r = parseInt(e.getAttribute("height"), 10);
        if (isNaN(t) || isNaN(r)) {
          var a = e.getBoundingClientRect();
          t = isNaN(t) ? a.width : t, r = isNaN(r) ? a.height : r;
        }
        return {
          width: t,
          height: r
        };
      }
      function Mf(e, t) {
        bn(t) || sr(e.frames, "node", t) || e.frames.push(So(t, e));
      }
      function Lf(e) {
        var t = e.include;
        return t.length === 1 && t[0].actualNode === R.documentElement;
      }
      function qf(e, t, r) {
        e.frames = e.frames || [];
        var a = r.shift(), n = R.querySelectorAll(a);
        Array.from(n).forEach(function(i) {
          if (e.frames.forEach(function(l) {
            l.node === i && l[t].push(r);
          }), !e.frames.find(function(l) {
            return l.node === i;
          })) {
            var o = So(i, e);
            r && o[t].push(r), e.frames.push(o);
          }
        });
      }
      function Bf(e) {
        if (e && P(e) === "object" || e instanceof y.NodeList) {
          if (e instanceof y.Node)
            return {
              include: [e],
              exclude: []
            };
          if (e.hasOwnProperty("include") || e.hasOwnProperty("exclude"))
            return {
              include: e.include && +e.include.length ? e.include : [R],
              exclude: e.exclude || []
            };
          if (e.length === +e.length)
            return {
              include: e,
              exclude: []
            };
        }
        return typeof e == "string" ? {
          include: [e],
          exclude: []
        } : {
          include: [R],
          exclude: []
        };
      }
      function Oo(e, t) {
        for (var r, a = [], n, i = 0, o = e[t].length; i < o; i++)
          if (r = e[t][i], typeof r == "string") {
            n = Array.from(R.querySelectorAll(r)), a = a.concat(n.map(function(l) {
              return V(l);
            }));
            break;
          } else
            r && r.length && !(r instanceof y.Node) ? r.length > 1 ? qf(e, t, r) : (n = Array.from(R.querySelectorAll(r[0])), a = a.concat(n.map(function(l) {
              return V(l);
            }))) : r instanceof y.Node && (r.documentElement instanceof y.Node ? a.push(e.flatTree[0]) : a.push(V(r)));
        return a.filter(function(l) {
          return l;
        });
      }
      function jf(e) {
        if (e.include.length === 0) {
          if (e.frames.length === 0) {
            var t = at.isInFrame() ? "frame" : "page";
            return new Error("No elements found for include in " + t + " Context");
          }
          e.frames.forEach(function(r, a) {
            if (r.include.length === 0)
              return new Error("No elements found for include in Context of frame " + a);
          });
        }
      }
      function Vf(e) {
        for (var t = e.include, r = e.exclude, a = Array.from(t).concat(Array.from(r)), n = 0; n < a.length; ++n) {
          var i = a[n];
          if (i instanceof y.Element)
            return i.ownerDocument.documentElement;
          if (i instanceof y.Document)
            return i.documentElement;
        }
        return R.documentElement;
      }
      function aa(e, t) {
        var r, a, n, i, o = this;
        e = st(e), this.frames = [], this.page = typeof ((r = e) === null || r === void 0 ? void 0 : r.page) == "boolean" ? e.page : void 0, this.initiator = typeof ((a = e) === null || a === void 0 ? void 0 : a.initiator) == "boolean" ? e.initiator : !0, this.focusable = typeof ((n = e) === null || n === void 0 ? void 0 : n.focusable) == "boolean" ? e.focusable : !0, this.size = P((i = e) === null || i === void 0 ? void 0 : i.size) === "object" ? e.size : {}, e = Bf(e), this.flatTree = t != null ? t : mn(Vf(e)), this.exclude = e.exclude, this.include = e.include, this.include = Oo(this, "include"), this.exclude = Oo(this, "exclude"), Cn("frame, iframe", this).forEach(function(s) {
          Dn(s, o) && Mf(o, s.actualNode);
        }), typeof this.page > "u" && (this.page = Lf(this), this.frames.forEach(function(s) {
          s.page = o.page;
        }));
        var l = jf(this);
        if (l instanceof Error)
          throw l;
        Array.isArray(this.include) || (this.include = Array.from(this.include)), this.include.sort(_n);
      }
      function Uf(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (t.iframes === !1)
          return [];
        var r = new aa(e), a = r.frames;
        return a.map(function(n) {
          var i = n.node, o = qe(n, Gu);
          o.initiator = !1;
          var l = Br(i);
          return {
            frameSelector: l,
            frameContext: o
          };
        });
      }
      function Hf(e) {
        var t = h._audit.rules.find(function(r) {
          return r.id === e;
        });
        if (!t)
          throw new Error("Cannot find rule by id: ".concat(e));
        return t;
      }
      var No = Hf;
      function gt(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = e.scrollWidth > e.clientWidth + t, a = e.scrollHeight > e.clientHeight + t;
        if (!!(r || a)) {
          var n = y.getComputedStyle(e), i = Io(n, "overflow-x"), o = Io(n, "overflow-y");
          if (r && i || a && o)
            return {
              elm: e,
              top: e.scrollTop,
              left: e.scrollLeft
            };
        }
      }
      function Io(e, t) {
        var r = e.getPropertyValue(t);
        return ["scroll", "auto"].includes(r);
      }
      function Po(e) {
        return Array.from(e.children || e.childNodes || []).reduce(function(t, r) {
          var a = gt(r);
          return a && t.push(a), t.concat(Po(r));
        }, []);
      }
      function zf() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : y, t = e.document.documentElement, r = [e.pageXOffset !== void 0 ? {
          elm: e,
          top: e.pageYOffset,
          left: e.pageXOffset
        } : {
          elm: t,
          top: t.scrollTop,
          left: t.scrollLeft
        }];
        return r.concat(Po(R.body));
      }
      var $f = zf;
      function Wf() {
        return st(le);
      }
      function Gf(e) {
        if (!e)
          throw new Error("axe.utils.getStyleSheetFactory should be invoked with an argument");
        return function(t) {
          var r = t.data, a = t.isCrossOrigin, n = a === void 0 ? !1 : a, i = t.shadowId, o = t.root, l = t.priority, s = t.isLink, u = s === void 0 ? !1 : s, c = e.createElement("style");
          if (u) {
            var d = e.createTextNode('@import "'.concat(r.href, '"'));
            c.appendChild(d);
          } else
            c.appendChild(e.createTextNode(r));
          return e.head.appendChild(c), {
            sheet: c.sheet,
            isCrossOrigin: n,
            shadowId: i,
            root: o,
            priority: l
          };
        };
      }
      var Mo = Gf, We;
      function Yf(e) {
        if (We && We.parentNode)
          return We.styleSheet === void 0 ? We.appendChild(R.createTextNode(e)) : We.styleSheet.cssText += e, We;
        if (!!e) {
          var t = R.head || R.getElementsByTagName("head")[0];
          return We = R.createElement("style"), We.type = "text/css", We.styleSheet === void 0 ? We.appendChild(R.createTextNode(e)) : We.styleSheet.cssText = e, t.appendChild(We), We;
        }
      }
      var Kf = Yf;
      function Lo(e, t) {
        var r = V(e);
        if (e.nodeType === 9)
          return !1;
        if (e.nodeType === 11 && (e = e.host), r && r._isHidden !== null)
          return r._isHidden;
        var a = y.getComputedStyle(e, null);
        if (!a || !e.parentNode || a.getPropertyValue("display") === "none" || !t && a.getPropertyValue("visibility") === "hidden" || e.getAttribute("aria-hidden") === "true")
          return !0;
        var n = e.assignedSlot ? e.assignedSlot : e.parentNode, i = Lo(n, !0);
        return r && (r._isHidden = i), i;
      }
      var bn = Lo;
      function Xf(e) {
        var t, r, a = (t = (r = e.props) === null || r === void 0 ? void 0 : r.nodeName) !== null && t !== void 0 ? t : e.nodeName.toLowerCase();
        return e.namespaceURI === "http://www.w3.org/2000/svg" ? !1 : !!le.htmlElms[a];
      }
      var yn = Xf;
      function qo(e) {
        return e.sort(function(t, r) {
          return Bt(t, r) ? 1 : -1;
        })[0];
      }
      function Jf(e, t) {
        var r = t.include && qo(t.include.filter(function(n) {
          return Bt(n, e);
        })), a = t.exclude && qo(t.exclude.filter(function(n) {
          return Bt(n, e);
        }));
        return !!(!a && r || a && Bt(a, r));
      }
      var Dn = Jf;
      function Qf(e, t) {
        return e.length !== t.length ? !1 : e.every(function(r, a) {
          var n = t[a];
          return Array.isArray(r) ? r.length !== n.length ? !1 : r.every(function(i, o) {
            return n[o] === i;
          }) : r === n;
        });
      }
      var wn = Qf, Zf = Je(gi());
      h._memoizedFns = [];
      function ep(e) {
        var t = Zf.default(e);
        return h._memoizedFns.push(t), t;
      }
      var na = ep;
      function tp(e, t) {
        return e = e.actualNode || e, t = t.actualNode || t, e === t ? 0 : e.compareDocumentPosition(t) & 4 ? -1 : 1;
      }
      var _n = tp;
      function rp(e, t, r, a) {
        var n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1, i = Array.from(e.cssRules);
        if (!i)
          return Promise.resolve();
        var o = i.filter(function(c) {
          return c.type === 3;
        });
        if (!o.length)
          return Promise.resolve({
            isCrossOrigin: n,
            priority: r,
            root: t.rootNode,
            shadowId: t.shadowId,
            sheet: e
          });
        var l = o.filter(function(c) {
          return c.href;
        }).map(function(c) {
          return c.href;
        }).filter(function(c) {
          return !a.includes(c);
        }), s = l.map(function(c, d) {
          var f = [].concat(ie(r), [d]), p = /^https?:\/\/|^\/\//i.test(c);
          return En(c, t, f, a, p);
        }), u = i.filter(function(c) {
          return c.type !== 3;
        });
        return u.length && s.push(Promise.resolve(t.convertDataToStylesheet({
          data: u.map(function(c) {
            return c.cssText;
          }).join(),
          isCrossOrigin: n,
          priority: r,
          root: t.rootNode,
          shadowId: t.shadowId
        }))), Promise.all(s);
      }
      var Bo = rp;
      function ap(e, t, r, a) {
        var n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1, i = np(e);
        return i ? Bo(e, t, r, a, n) : En(e.href, t, r, a, !0);
      }
      function np(e) {
        try {
          var t = e.cssRules;
          return !(!t && e.href);
        } catch {
          return !1;
        }
      }
      var xn = ap;
      function ip(e, t, r, a, n) {
        return a.push(e), new Promise(function(i, o) {
          var l = new XMLHttpRequest();
          l.open("GET", e), l.timeout = re.preload.timeout, l.addEventListener("error", o), l.addEventListener("timeout", o), l.addEventListener("loadend", function(s) {
            if (s.loaded && l.responseText)
              return i(l.responseText);
            o(l.responseText);
          }), l.send();
        }).then(function(i) {
          var o = t.convertDataToStylesheet({
            data: i,
            isCrossOrigin: n,
            priority: r,
            root: t.rootNode,
            shadowId: t.shadowId
          });
          return xn(o.sheet, t, r, a, o.isCrossOrigin);
        });
      }
      var En = ip, op = function() {
        function e() {
          if (y.performance && y.performance)
            return y.performance.now();
        }
        var t = null, r = e();
        return {
          start: function() {
            this.mark("mark_axe_start");
          },
          end: function() {
            this.mark("mark_axe_end"), this.measure("axe", "mark_axe_start", "mark_axe_end"), this.logMeasures("axe");
          },
          auditStart: function() {
            this.mark("mark_audit_start");
          },
          auditEnd: function() {
            this.mark("mark_audit_end"), this.measure("audit_start_to_end", "mark_audit_start", "mark_audit_end"), this.logMeasures();
          },
          mark: function(n) {
            y.performance && y.performance.mark !== void 0 && y.performance.mark(n);
          },
          measure: function(n, i, o) {
            y.performance && y.performance.measure !== void 0 && y.performance.measure(n, i, o);
          },
          logMeasures: function(n) {
            function i(c) {
              At("Measure " + c.name + " took " + c.duration + "ms");
            }
            if (y.performance && y.performance.getEntriesByType !== void 0)
              for (var o = y.performance.getEntriesByName("mark_axe_start")[0], l = y.performance.getEntriesByType("measure").filter(function(c) {
                return c.startTime >= o.startTime;
              }), s = 0; s < l.length; ++s) {
                var u = l[s];
                if (u.name === n) {
                  i(u);
                  return;
                }
                i(u);
              }
          },
          timeElapsed: function() {
            return e() - r;
          },
          reset: function() {
            t || (t = e()), r = e();
          }
        };
      }(), Oe = op;
      typeof Object.assign != "function" && function() {
        Object.assign = function(e) {
          if (e == null)
            throw new TypeError("Cannot convert undefined or null to object");
          for (var t = Object(e), r = 1; r < arguments.length; r++) {
            var a = arguments[r];
            if (a != null)
              for (var n in a)
                a.hasOwnProperty(n) && (t[n] = a[n]);
          }
          return t;
        };
      }(), Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
        value: function(t) {
          if (this === null)
            throw new TypeError("Array.prototype.find called on null or undefined");
          if (typeof t != "function")
            throw new TypeError("predicate must be a function");
          for (var r = Object(this), a = r.length >>> 0, n = arguments[1], i, o = 0; o < a; o++)
            if (i = r[o], t.call(n, i, o, r))
              return i;
        }
      }), Array.prototype.findIndex || Object.defineProperty(Array.prototype, "findIndex", {
        value: function(t, r) {
          if (this === null)
            throw new TypeError("Array.prototype.find called on null or undefined");
          if (typeof t != "function")
            throw new TypeError("predicate must be a function");
          for (var a = Object(this), n = a.length >>> 0, i, o = 0; o < n; o++)
            if (i = a[o], t.call(r, i, o, a))
              return o;
          return -1;
        }
      });
      function jo() {
        if (R.elementsFromPoint)
          return R.elementsFromPoint;
        if (R.msElementsFromPoint)
          return R.msElementsFromPoint;
        var e = function() {
          var n = R.createElement("x");
          return n.style.cssText = "pointer-events:auto", n.style.pointerEvents === "auto";
        }(), t = e ? "pointer-events" : "visibility", r = e ? "none" : "hidden", a = R.createElement("style");
        return a.innerHTML = e ? "* { pointer-events: all }" : "* { visibility: visible }", function(n, i) {
          var o, l, s, u = [], c = [];
          for (R.head.appendChild(a); (o = R.elementFromPoint(n, i)) && u.indexOf(o) === -1; )
            u.push(o), c.push({
              value: o.style.getPropertyValue(t),
              priority: o.style.getPropertyPriority(t)
            }), o.style.setProperty(t, r, "important");
          for (u.indexOf(R.documentElement) < u.length - 1 && (u.splice(u.indexOf(R.documentElement), 1), u.push(R.documentElement)), l = c.length; s = c[--l]; )
            u[l].style.setProperty(t, s.value ? s.value : "", s.priority);
          return R.head.removeChild(a), u;
        };
      }
      typeof y.addEventListener == "function" && (R.elementsFromPoint = jo()), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
        value: function(t) {
          var r = Object(this), a = parseInt(r.length, 10) || 0;
          if (a === 0)
            return !1;
          var n = parseInt(arguments[1], 10) || 0, i;
          n >= 0 ? i = n : (i = a + n, i < 0 && (i = 0));
          for (var o; i < a; ) {
            if (o = r[i], t === o || t !== t && o !== o)
              return !0;
            i++;
          }
          return !1;
        }
      }), Array.prototype.some || Object.defineProperty(Array.prototype, "some", {
        value: function(t) {
          if (this == null)
            throw new TypeError("Array.prototype.some called on null or undefined");
          if (typeof t != "function")
            throw new TypeError();
          for (var r = Object(this), a = r.length >>> 0, n = arguments.length >= 2 ? arguments[1] : void 0, i = 0; i < a; i++)
            if (i in r && t.call(n, r[i], i, r))
              return !0;
          return !1;
        }
      }), Array.from || Object.defineProperty(Array, "from", {
        value: function() {
          var e = Object.prototype.toString, t = function(o) {
            return typeof o == "function" || e.call(o) === "[object Function]";
          }, r = function(o) {
            var l = Number(o);
            return isNaN(l) ? 0 : l === 0 || !isFinite(l) ? l : (l > 0 ? 1 : -1) * Math.floor(Math.abs(l));
          }, a = Math.pow(2, 53) - 1, n = function(o) {
            var l = r(o);
            return Math.min(Math.max(l, 0), a);
          };
          return function(o) {
            var l = this, s = Object(o);
            if (o == null)
              throw new TypeError("Array.from requires an array-like object - not null or undefined");
            var u = arguments.length > 1 ? arguments[1] : void 0, c;
            if (typeof u < "u") {
              if (!t(u))
                throw new TypeError("Array.from: when provided, the second argument must be a function");
              arguments.length > 2 && (c = arguments[2]);
            }
            for (var d = n(s.length), f = t(l) ? Object(new l(d)) : new Array(d), p = 0, m; p < d; )
              m = s[p], u ? f[p] = typeof c > "u" ? u(m, p) : u.call(c, m, p) : f[p] = m, p += 1;
            return f.length = d, f;
          };
        }()
      }), String.prototype.includes || (String.prototype.includes = function(e, t) {
        return typeof t != "number" && (t = 0), t + e.length > this.length ? !1 : this.indexOf(e, t) !== -1;
      }), Array.prototype.flat || Object.defineProperty(Array.prototype, "flat", {
        configurable: !0,
        value: function e() {
          var t = isNaN(arguments[0]) ? 1 : Number(arguments[0]);
          return t ? Array.prototype.reduce.call(this, function(r, a) {
            return Array.isArray(a) ? r.push.apply(r, e.call(a, t - 1)) : r.push(a), r;
          }, []) : Array.prototype.slice.call(this);
        },
        writable: !0
      });
      function lp(e, t) {
        return e.concat(t).filter(function(r, a, n) {
          return n.indexOf(r) === a;
        });
      }
      var pr = lp;
      function Vo(e, t, r, a, n) {
        var i = n || {};
        return i.vNodes = e, i.vNodesIndex = 0, i.anyLevel = t, i.thisLevel = r, i.parentShadowId = a, i;
      }
      var An = [];
      function up(e, t, r) {
        for (var a = [], n = Array.isArray(e) ? e : [e], i = Vo(n, t, null, e[0].shadowId, An.pop()), o = []; i.vNodesIndex < i.vNodes.length; ) {
          for (var l, s, u = i.vNodes[i.vNodesIndex++], c = null, d = null, f = (((l = i.anyLevel) === null || l === void 0 ? void 0 : l.length) || 0) + (((s = i.thisLevel) === null || s === void 0 ? void 0 : s.length) || 0), p = !1, m = 0; m < f; m++) {
            var b, D, v, g = m < (((b = i.anyLevel) === null || b === void 0 ? void 0 : b.length) || 0) ? i.anyLevel[m] : i.thisLevel[m - (((D = i.anyLevel) === null || D === void 0 ? void 0 : D.length) || 0)];
            if ((!g[0].id || u.shadowId === i.parentShadowId) && ur(u, g[0]))
              if (g.length === 1)
                !p && (!r || r(u)) && (o.push(u), p = !0);
              else {
                var x = g.slice(1);
                if ([" ", ">"].includes(x[0].combinator) === !1)
                  throw new Error("axe.utils.querySelectorAll does not support the combinator: " + g[1].combinator);
                x[0].combinator === ">" ? (c = c || []).push(x) : (d = d || []).push(x);
              }
            (!g[0].id || u.shadowId === i.parentShadowId) && (v = i.anyLevel) !== null && v !== void 0 && v.includes(g) && (d = d || []).push(g);
          }
          for (u.children && u.children.length && (a.push(i), i = Vo(u.children, d, c, u.shadowId, An.pop())); i.vNodesIndex === i.vNodes.length && a.length; )
            An.push(i), i = a.pop();
        }
        return o;
      }
      function sp(e, t, r) {
        e = Array.isArray(e) ? e : [e];
        var a = Ya(t);
        return up(e, a, r);
      }
      var ct = sp;
      function cp(e) {
        var t = e.treeRoot, r = t === void 0 ? h._tree[0] : t, a = dp(r);
        if (!a.length)
          return Promise.resolve();
        var n = R.implementation.createHTMLDocument("Dynamic document for loading cssom"), i = Mo(n);
        return fp(a, i).then(function(o) {
          return Ho(o);
        });
      }
      var Uo = cp;
      function dp(e) {
        var t = [], r = ct(e, "*", function(a) {
          return t.includes(a.shadowId) ? !1 : (t.push(a.shadowId), !0);
        }).map(function(a) {
          return {
            shadowId: a.shadowId,
            rootNode: $r(a.actualNode)
          };
        });
        return pr(r, []);
      }
      function fp(e, t) {
        var r = [];
        return e.forEach(function(a, n) {
          var i = a.rootNode, o = a.shadowId, l = pp(i, o, t);
          if (!l)
            return Promise.all(r);
          var s = n + 1, u = {
            rootNode: i,
            shadowId: o,
            convertDataToStylesheet: t,
            rootIndex: s
          }, c = [], d = Promise.all(l.map(function(f, p) {
            var m = [s, p];
            return xn(f, u, m, c);
          }));
          r.push(d);
        }), Promise.all(r);
      }
      function Ho(e) {
        return e.reduce(function(t, r) {
          return Array.isArray(r) ? t.concat(Ho(r)) : t.concat(r);
        }, []);
      }
      function pp(e, t, r) {
        var a;
        return e.nodeType === 11 && t ? a = mp(e, r) : a = hp(e), gp(a);
      }
      function mp(e, t) {
        return Array.from(e.children).filter(vp).reduce(function(r, a) {
          var n = a.nodeName.toUpperCase(), i = n === "STYLE" ? a.textContent : a, o = n === "LINK", l = t({
            data: i,
            isLink: o,
            root: e
          });
          return r.push(l.sheet), r;
        }, []);
      }
      function hp(e) {
        return Array.from(e.styleSheets).filter(function(t) {
          return zo(t.media.mediaText);
        });
      }
      function vp(e) {
        var t = e.nodeName.toUpperCase(), r = e.getAttribute("href"), a = e.getAttribute("rel"), n = t === "LINK" && r && a && e.rel.toUpperCase().includes("STYLESHEET"), i = t === "STYLE";
        return i || n && zo(e.media);
      }
      function zo(e) {
        return e ? !e.toUpperCase().includes("PRINT") : !0;
      }
      function gp(e) {
        var t = [];
        return e.filter(function(r) {
          return r.href ? t.includes(r.href) ? !1 : (t.push(r.href), !0) : !0;
        });
      }
      function bp(e) {
        var t = e.treeRoot, r = t === void 0 ? h._tree[0] : t, a = ct(r, "video, audio", function(n) {
          var i = n.actualNode;
          if (i.hasAttribute("src"))
            return !!i.getAttribute("src");
          var o = Array.from(i.getElementsByTagName("source")).filter(function(l) {
            return !!l.getAttribute("src");
          });
          return !(o.length <= 0);
        });
        return Promise.all(a.map(function(n) {
          var i = n.actualNode;
          return yp(i);
        }));
      }
      var $o = bp;
      function yp(e) {
        return new Promise(function(t) {
          e.readyState > 0 && t(e);
          function r() {
            e.removeEventListener("loadedmetadata", r), t(e);
          }
          e.addEventListener("loadedmetadata", r);
        });
      }
      function Dp(e) {
        return P(e) === "object" && Array.isArray(e.assets);
      }
      function Wo(e) {
        return !e || e.preload === void 0 || e.preload === null ? !0 : typeof e.preload == "boolean" ? e.preload : Dp(e.preload);
      }
      function Go(e) {
        var t = re.preload, r = t.assets, a = t.timeout, n = {
          assets: r,
          timeout: a
        };
        if (!e.preload || typeof e.preload == "boolean")
          return n;
        var i = e.preload.assets.every(function(o) {
          return r.includes(o.toLowerCase());
        });
        if (!i)
          throw new Error("Requested assets, not supported. Supported assets are: ".concat(r.join(", "), "."));
        return n.assets = pr(e.preload.assets.map(function(o) {
          return o.toLowerCase();
        }), []), e.preload.timeout && typeof e.preload.timeout == "number" && !isNaN(e.preload.timeout) && (n.timeout = e.preload.timeout), n;
      }
      function wp(e) {
        var t = {
          cssom: Uo,
          media: $o
        };
        return Wo(e) ? new Promise(function(r, a) {
          var n = Go(e), i = n.assets, o = n.timeout, l = setTimeout(function() {
            return a(new Error("Preload assets timed out."));
          }, o);
          Promise.all(i.map(function(s) {
            return t[s](e).then(function(u) {
              return us({}, s, u);
            });
          })).then(function(s) {
            var u = s.reduce(function(c, d) {
              return de({}, c, d);
            }, {});
            clearTimeout(l), r(u);
          }).catch(function(s) {
            clearTimeout(l), a(s);
          });
        }) : Promise.resolve();
      }
      var Yo = wp;
      function _p(e, t) {
        function r(n) {
          return n.incomplete && n.incomplete.default ? n.incomplete.default : vn();
        }
        if (e && e.missingData)
          try {
            var a = t.incomplete[e.missingData[0].reason];
            if (!a)
              throw new Error();
            return a;
          } catch {
            return typeof e.missingData == "string" ? t.incomplete[e.missingData] : r(t);
          }
        else
          return e && e.messageKey ? t.incomplete[e.messageKey] : r(t);
      }
      function Ko(e, t, r) {
        return function(a) {
          var n = e[a.id] || {}, i = n.messages || {}, o = Object.assign({}, n);
          delete o.messages, !r.reviewOnFail && a.result === void 0 ? (P(i.incomplete) === "object" && !Array.isArray(a.data) && (o.message = _p(a.data, i)), o.message || (o.message = i.incomplete)) : o.message = a.result === t ? i.pass : i.fail, typeof o.message != "function" && (o.message = gn(o.message, a.data)), Za(a, o);
        };
      }
      function xp(e) {
        var t = h._audit.data.checks || {}, r = h._audit.data.rules || {}, a = sr(h._audit.rules, "id", e.id) || {};
        e.tags = st(a.tags || []);
        var n = Ko(t, !0, a), i = Ko(t, !1, a);
        e.nodes.forEach(function(o) {
          o.any.forEach(n), o.all.forEach(n), o.none.forEach(i);
        }), Za(e, st(r[e.id] || {}));
      }
      var ia = xp;
      function Ep(e, t) {
        return ct(e, t);
      }
      var et = Ep;
      function Xo(e, t) {
        var r, a, n, i = h._audit && h._audit.tagExclude ? h._audit.tagExclude : [];
        return t.hasOwnProperty("include") || t.hasOwnProperty("exclude") ? (r = t.include || [], r = Array.isArray(r) ? r : [r], a = t.exclude || [], a = Array.isArray(a) ? a : [a], a = a.concat(i.filter(function(o) {
          return r.indexOf(o) === -1;
        }))) : (r = Array.isArray(t) ? t : [t], a = i.filter(function(o) {
          return r.indexOf(o) === -1;
        })), n = r.some(function(o) {
          return e.tags.indexOf(o) !== -1;
        }), n || r.length === 0 && e.enabled !== !1 ? a.every(function(o) {
          return e.tags.indexOf(o) === -1;
        }) : !1;
      }
      function Ap(e, t, r) {
        var a = r.runOnly || {}, n = (r.rules || {})[e.id];
        return e.pageLevel && !t.page ? !1 : a.type === "rule" ? a.values.indexOf(e.id) !== -1 : n && typeof n.enabled == "boolean" ? n.enabled : a.type === "tag" && a.values ? Xo(e, a.values) : Xo(e, []);
      }
      var Jo = Ap;
      function Cp(e, t, r) {
        return typeof r[t] > "u" ? !1 : r[t] === !0 ? !0 : Lt(e, r[t]);
      }
      function Qo(e, t) {
        if (!t)
          return e;
        var r = e.cloneNode(!1), a = r.outerHTML, n = Mr(r);
        return H.get(a) ? r = H.get(a) : n && (r = R.createElement(r.nodeName), Array.from(n).forEach(function(i) {
          Cp(e, i.name, t) || r.setAttribute(i.name, i.value);
        }), H.set(a, r)), Array.from(e.childNodes).forEach(function(i) {
          r.appendChild(Qo(i, t));
        }), r;
      }
      var Fp = Qo;
      function kp(e, t) {
        var r;
        if (e.length === 0)
          return t;
        e.length < t.length && (r = e, e = t, t = r);
        for (var a = 0, n = t.length; a < n; a++)
          e.includes(t[a]) || e.push(t[a]);
        return e;
      }
      function Rp(e) {
        return e.reduce(function(t, r) {
          return (!t.length || !Bt(t[t.length - 1], r)) && t.push(r), t;
        }, []);
      }
      function Tp(e, t) {
        var r = [], a;
        if (h._selectCache)
          for (var n = 0, i = h._selectCache.length; n < i; n++) {
            var o = h._selectCache[n];
            if (o.selector === e)
              return o.result;
          }
        for (var l = Rp(t.include), s = Sp(t), u = 0; u < l.length; u++) {
          a = l[u];
          var c = ct(a, e, s);
          r = kp(r, c);
        }
        return h._selectCache && h._selectCache.push({
          selector: e,
          result: r
        }), r;
      }
      var Cn = Tp;
      function Sp(e) {
        return !e.exclude || e.exclude.length === 0 ? null : function(t) {
          return Dn(t, e);
        };
      }
      function Op(e, t, r) {
        if (e === y)
          return e.scroll(r, t);
        e.scrollTop = t, e.scrollLeft = r;
      }
      function Np(e) {
        e.forEach(function(t) {
          var r = t.elm, a = t.top, n = t.left;
          return Op(r, a, n);
        });
      }
      var Ip = Np;
      function Pp(e) {
        var t = Array.isArray(e) ? ie(e) : [e];
        return Zo(t, R);
      }
      function Zo(e, t) {
        var r = e.shift(), a = r ? t.querySelector(r) : null;
        return e.length === 0 ? a : a != null && a.shadowRoot ? Zo(e, a.shadowRoot) : null;
      }
      function Mp(e) {
        return (e || "").trim().replace(/\s{2,}/g, " ").split(" ");
      }
      var Ve = Mp;
      function Lp() {
        return ["hidden", "text", "search", "tel", "url", "email", "password", "date", "month", "week", "time", "datetime-local", "number", "range", "color", "checkbox", "radio", "file", "submit", "image", "reset", "button"];
      }
      var oa = Lp, el = [, [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, 1, 1, , 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, , , , , , 1, 1, 1, 1, , , 1, 1, 1, , 1, , 1, , 1, 1], [1, 1, 1, , 1, 1, , 1, 1, 1, , 1, , , 1, 1, 1, , , 1, 1, 1, , , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , , , , 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1], [, 1, , , , , , 1, , 1, , , , , 1, , 1, , , , 1, 1, , 1, , , 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, 1, 1, 1, , , 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , 1, 1, , , 1, , , , , 1, 1, 1, , 1, , 1, , 1, , , , , , 1], [1, , 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, , 1, , 1, , , , , 1, , 1, 1, 1, 1, 1, , , , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, , 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1], [, , 1, , , 1, , 1, , , , 1, 1, 1, , , , , , , , , , , 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1], [1, 1, 1, 1, 1, , , 1, , , 1, , , 1, 1, 1, , , , , 1, , , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1], [, 1, , 1, 1, 1, , 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, , , 1, 1, , , , , , 1, 1], [1, 1, 1, , , , , 1, , , , 1, 1, , 1, , , , , , 1, , , , , 1], [, 1, , , 1, , , 1, , , , , , 1], [, 1, , 1, , , , 1, , , , 1], [1, , 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , , 1, , , 1, , 1, 1, , 1, , 1, , , , , 1, , 1], [, 1, , , , 1, , , 1, 1, , 1, , 1, 1, 1, 1, , 1, 1, , , 1, , , 1], [, 1, 1, , , , , , 1, , , , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1], [, 1, , 1, 1, 1, , , 1, 1, 1, 1, 1, 1, , 1, , , , , 1, 1, , 1, , 1], [, 1, , 1, , 1, , 1, , 1, , 1, 1, 1, 1, 1, , , 1, 1, 1], [, 1, 1, 1, , , , 1, 1, 1, , 1, 1, , , 1, 1, , 1, 1, 1, 1, , 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, , 1, 1, 1, , 1, , , , , 1, 1, 1, , , 1, , 1, , , 1, 1], [, , , , 1, , , , , , , , , , , , , , , , , 1], [1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, , 1, 1, 1, , 1, 1, , , , 1, 1, 1, 1, 1, , , 1, 1, 1, , , , , 1], [1, 1, 1, 1, , , , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , , , , , , 1, , , , , , , 1], [, 1, 1, , 1, 1, , 1, , , , , , , , , , , , , 1], , [1, 1, 1, , , , , , , , , , , , , 1], [, , , , , , , , 1, , , 1, , , 1, 1, , , , , 1]], [, [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [, , , 1, , , , , , , , , , , , , , , 1], [, 1, , , 1, 1, , 1, , 1, 1, , , , 1, 1, , , 1, 1, , , , 1], [1, , , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, , , 1, , , , 1], , [, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, , 1, 1, , , 1, 1, 1, 1, , 1, 1, , 1], [, 1, , , 1, , , 1, , 1, , , 1, 1, 1, 1, , , 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, , , 1, , , 1, , 1], [, 1, , , , , , , , , , 1, 1, , , , , , 1, 1, , , , , 1], [, , , , , , , 1, , , , 1, , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, , , , 1, 1, 1, 1, 1, , , 1, 1, , 1, 1, 1, 1, 1], [, 1, , , 1, 1, , 1, , 1, 1, 1, , , 1, 1, , , 1, , 1, 1, 1, 1, , 1], [, 1, 1, 1, , 1, 1, , 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1], [, , , , , , , , , , , , , , , , 1], , [, 1, 1, 1, 1, 1, , 1, 1, 1, , , 1, , 1, 1, , 1, 1, 1, 1, 1, , 1, , 1], [, , 1, , , 1, , , 1, 1, , , 1, , 1, 1, , 1], [, 1, 1, , 1, , , , 1, 1, , 1, , 1, 1, 1, 1, , 1, 1, 1, 1, , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [1, 1], [, 1, , , , , , , , , , 1, 1, , , , , , 1, 1, , 1, , 1, , 1, 1], , [, 1, 1, , 1, , , 1, , 1, , , , 1, 1, 1, , , , , , 1, , , , 1], [1, 1, , , 1, 1, , 1, , , , , 1, , 1]], [, [, 1], [, , , 1, , , , 1, , , , 1, , , , 1, , , 1, , , 1], [, , , , , , , , , , , , , , , , , , 1, 1, , , , , , 1], , [1, , , , , 1], [, 1, , , , 1, , , , 1], [, 1, , , , , , , , , , , 1, , , 1, , , , , , , , , 1, 1], [, , , , , , , , , , , , , , , , , , , , , 1], [, , , , , , , , , , , , , , , , 1, , , , 1, , 1], [, 1], [, 1, , 1, , 1, , 1, , 1, , 1, 1, 1, , 1, 1, , 1, , , , , , , 1], [1, , , , , 1, , , 1, 1, , 1, , 1, , 1, 1, , , , , 1, , , 1], [, 1, 1, , , 1, , 1, , 1, , 1, , 1, 1, 1, 1, , , 1, , 1, , 1, 1, 1], [1, 1, 1, 1, 1, , 1, , 1, , , , 1, 1, 1, 1, , 1, 1, , , 1, 1, 1, 1], [1, , , , , , , , , , , , , , , , , , , , 1], [, , , , , , , , , 1], , [, 1, , , , , , 1, 1, 1, , 1, , , , 1, , , 1, 1, 1, , , 1], [1, , , , , 1, , 1, 1, 1, , 1, 1, 1, 1, 1, , 1, , 1, , 1, , , 1, 1], [1, , 1, 1, , , , , 1, , , , , , 1, 1, , , 1, 1, 1, 1, , , 1, , 1], [1, , , , , , , , , , , , , , , , , 1], [, , , , , 1, , , 1, , , , , , 1], [, , , , , , , , , , , , , , , 1], [, , , , , , , , , , , , , , , , , , , , 1], [, 1, , , , , , , , , , , , , , 1], [, 1, , , , 1]], [, [1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, , 1, 1, , , 1, 1, 1], [, , , , , , , , , , , , 1], [, , , , , , , , , , , , , , , , , , , 1], , [, , , , , , , , , , , , , , , , , , 1], [1, , , , , , , , , 1, , , , 1], [, , , , , , , , , , , , , , , , , , 1], , [1, 1, , , , 1, 1, , , , , , 1, , , , 1, , 1, , 1, 1, , 1], [1], [, , , , , , , , , , , 1, , , , , , , , , , , 1], [, 1, , , , , , , 1, 1, , , 1, , 1, , , , 1, , , , , , , 1], [, , , , , , , , , , , , , , , , 1, , , , , 1], [, , 1, , , , , 1, , 1], [1, , , , 1, , , , , 1, , , , 1, 1, , , , 1, 1, , , , , 1], [, , , , , 1], [, , , , , , , , , , , , , , , , , , , 1], [1, , , 1, 1, , , , , , , 1, , 1, , 1, 1, 1, 1, 1, 1], [, , , , , 1, , , , , , , 1, , , , , , , 1], , [, , 1, 1, 1, 1, 1, , 1, 1, 1, , , 1, 1, , , 1, 1, , 1, 1, 1, , , 1], [, , , , , , , , , , , , , , , , , , 1], [, 1, , , , 1], , [1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, , , 1, 1, 1, 1, , , , , , 1, , 1, , , , 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , , 1], [, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, , 1, , , 1, 1, 1, 1, 1], [, , , , , , , , , , , 1, , , , , , , , , 1, , , , 1], [, 1, 1, , 1, 1, , 1, , , , 1, 1, , 1, 1, , , 1, , 1, 1, , 1], [, 1, , 1, , 1, , , 1, , , 1, 1, , 1, 1, , , 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, , , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, , , , , , , , , 1, , 1, , 1, 1, , , , 1, , , 1], [, 1, , , 1, 1, , , , , , , , , 1, 1, 1, , , , , 1], [1, , , 1, 1, , , , 1, 1, 1, 1, 1, , , 1, , , 1, , , 1, , 1, , 1], [, 1, 1, , 1, 1, , 1, 1, , , , 1, 1, 1, , , 1, 1, , , 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, , 1, , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, , , , 1, , , , , , , , , 1], [, 1, , , , , , , , 1, , , , , 1, , , , 1, , , 1], [, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , , , 1, , 1, , , , , 1, 1, 1, 1, 1, , , 1, , , , 1], [, 1, , , , , , , , 1, , , , , , , , , , , , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1], [1, 1, , 1, , 1, 1, , , , 1, , 1, 1, 1, 1, 1, , 1, 1, , , , , , 1], [, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , , 1, 1, , , , 1, , 1, 1, , 1, 1], [, , , , , , , , , , , , , , , , , , , , , , , , 1], [, 1, 1, , 1, 1, 1, 1, , 1, , , 1, 1, 1, 1, , , 1, , , , , , , 1], [, 1, , , , , , , , 1, , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1], [, 1, 1, , , , , , , , , , , , 1, 1, , , , , , 1], [, 1, , , , , , , 1], [, , , , , , , , , , , , , , 1, , , , , 1, , , , , , 1], [1, 1, , , 1, , , 1, 1, 1, , , , 1], , [, , , , , , , , , , , , , 1, , , , , , , , , , 1], [, , , , , , , , , 1, , , , , , , , , 1, , , , , , , 1], [1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, , , 1, , 1, , , 1, 1], [, , , , , , , , , 1], [, 1, , , , 1, , , , , , 1, , , 1, , , , , 1], [, 1, 1, , 1, 1, , , , , , , , , , , , , , , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , 1, 1, , 1, 1, 1, 1, , , , 1, 1, , , , 1, , 1], [1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, , 1, 1, , 1, 1], [, , , , , , , , , , , , , , , 1, , , , 1], , [1, 1, , 1, , 1, , , , , , 1, , 1, , 1, 1, , 1, , 1, 1, , 1, 1, , 1], [, , 1, , , , , , 1, , , , 1, , 1, , , , , 1], [1, , , , , , , , , 1, , , , , , 1, , , , 1, , 1, , , 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , 1, , 1, , , , , , 1, , , 1, , , , , , , , 1], [, 1, , 1, , , , , , , , , , , , 1], , [1, 1, , , , , , , , , , , , , , , , , , , , , , 1, 1], [1]], [, [1, , , , , , , , , 1, , , , , 1, , 1, , 1], [, 1, 1, , 1, 1, , 1, 1, 1, , , 1, 1, 1, , , , 1, , , 1, , , , 1], [, 1, , , , , , , 1, , , , 1, , , , , , 1], [1, 1, 1, 1, 1, 1, , , , 1, , , , , , , , , 1, 1, 1, 1], [1], [, 1, 1, , , 1, 1, , , , , 1, , 1, , , , , , , , 1, , , , 1], [1, , 1, , , 1, , 1, , , , , 1, 1, 1, 1, , , , 1, , , , 1], [, , 1, , , , , , , 1, , , , , , , 1, , , , , , , 1], [1, , , , , , , , , , , , , , 1, , , , 1], [, , , 1, , 1, , , , , 1, , , , 1, 1, , , , 1], [1, , , , , 1, , , , 1, , 1, 1, , , 1, 1, , 1, 1, 1, , 1, 1, 1, , 1], [, 1, 1, , , , , 1, , 1, , 1, 1, 1, , 1, 1, , , 1, , 1, 1, 1], [, 1, , , , 1, , , , 1, , , 1, , 1, 1, , , 1, 1, , , , , , 1], [1, , 1, 1, , 1, , 1, 1, , 1, , 1, 1, 1, 1, 1, , , 1, 1, , , , , , 1], [1, , , , , , , , , , , , , , , , , , 1, , , 1, , 1], [, , , , , , , , , 1, , , , , , 1], [, , , , , , , , , , , , , , , , , , , , , 1, , 1], [, 1, , , , 1, , , 1, 1, , 1, , , 1, 1, , , 1, , , 1, , , 1, 1], [1, 1, , 1, 1, 1, , 1, 1, 1, , 1, , 1, 1, 1, , , 1, , 1, 1], [1, , 1, 1, 1, 1, , , , 1, , 1, 1, 1, , 1, , , 1, 1, 1, , 1, 1, 1, 1, 1], [1, , , , , , , , , , , , , 1], [, , 1, , , , , , , , , , , , , , , , , , , , 1], [1, , , , , , , , , , , 1, , 1, , 1, , , , 1], [, , , 1, , , , , , , , , 1], [, 1, , , , , , , , , , , , , , 1, , , , , , , , , 1], [, , , , , , , , 1, 1, , , , , , , , , 1, , , , , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , , 1, 1, 1], [, , , , , 1, , , , 1, 1, 1, , , 1, 1, , , 1, , 1, 1, , 1], [, , , , , , , , , , , , , , , , , , , 1, 1], [, 1, , , , , , 1, , , , , , , , , , , , , 1], [, , 1, , , 1, , 1, 1, 1, , 1, 1, , 1, , , , 1, , 1, 1], , [, , 1, , , 1, , , , , , 1, , , , 1], [, , , , , , , , , 1, , , , , , , , , , 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, , , 1, 1, , 1, , 1, , , 1, 1, 1, , , 1], [, , , , , 1, , , , , , , , , , , , , 1], [, 1, , , , , , , , , , , , 1, , 1, 1, , 1, , , 1], [, , , , , 1, , , , , , , , , , , , , , 1], [, 1, 1, 1, 1, , , , , 1, , , 1, , 1, , , , 1, 1, , , , 1, 1], [, 1, , , 1, , , 1, , 1, 1, , 1, , , , , , , 1], [, , 1, , 1, , , 1, , , , , , , , , , , 1, 1, , , , 1], [, 1, , , , , , , , , , , , , , , , , 1, , , , , , 1], [, , , , , , , , , , , , , , , , , , 1], [, 1, 1, , , , , , , , , , , , , , , , 1, , 1, 1], [, , , , , , , , , , , , 1], , [, 1, 1, 1, 1, , , , 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, , 1], [1, , , , 1, , , , , , , , , , 1], [1, , , , , , , , , 1], , [, 1, , , , 1, , , , , , , , , , , , , , , , , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, , , , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, , 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , 1, 1, 1, 1, , 1, , , , 1, 1, , , 1, 1, , 1], [, 1, 1, , 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , , , , , , , , , , , 1], [1, 1, 1, , , , , 1, 1, 1, , 1, 1, 1, 1, , , 1, 1, , 1, 1, , , , , 1], [, 1, , , , , , , 1, 1, , , 1, 1, 1, , 1, , , 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, , , , 1, , , , 1, , , 1, , , , 1, , , , , , , 1, 1], [, 1, 1, 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, , , 1, 1, 1, 1, , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1], [1, 1, 1, , 1, , , 1, 1, 1, 1, , 1, 1, 1, 1, , , , 1, , 1, , 1, , , 1], [1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , , 1, , , , , , , , , 1, 1, , , , , , , , , 1], , [, 1, , 1, , 1, , 1, , 1, , 1, 1, 1, 1, 1, , , 1, , 1, , 1, , , , 1], [, 1, , , 1, 1, , 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1, 1, , 1, , , 1], [1, , , 1, , , , 1, 1, 1, , , , , 1, 1, , , , 1, , 1], [1, 1, , 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [1, 1, , , , , , , , 1, , 1, , , , , , , , 1, , 1], [, 1, , , , 1, , 1, 1, , , , 1, 1, , 1, , , , 1, 1, 1, , 1], , [, 1, , , , , , 1, , , , , , , 1], [, , , , , , , , 1, , , , 1, , 1, , , , , , , , , , , , 1]], [, [, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, , 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, , 1], [, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1], [, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, , 1], [1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , 1, , , , , , , , 1, , , , , , 1, , , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, , , , 1, 1, 1, , 1, 1, 1, 1, , , 1, 1, 1, 1, , , 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1], [1, 1, , 1, , 1, , 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, , , 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, , , , , 1, 1, 1, , , 1, , 1, 1, , , , 1, , 1, , , 1, 1], [, , , , , , , 1, , , , 1, 1, 1, 1, 1, , 1, , , , , , , , 1], [1, 1, 1, 1, , 1, 1, 1, , 1, , 1, 1, 1, 1, , 1, , 1, , 1, 1, , , 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , , 1, 1, , 1, , 1, 1, 1, , 1, , 1, 1, , 1, 1, , 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , , , , , , , 1, , , , , 1, , 1], [, 1, 1, 1, , 1, , 1, , 1, , , , 1, , 1, , , 1, , , , , , 1, 1], [, 1, , , 1, 1, , 1, , 1, , 1, 1, 1, 1, 1, , 1, 1, , , 1, , , 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, , , , , 1, , 1, , 1, , , , , , 1, , 1, , , , 1, 1]], [, [, 1, , 1, , , , , , , , , , , , , , , 1, , , , 1], [, , , , , , , , , 1, , 1, 1, 1, , 1, , , 1, , 1, 1], [1, 1, , , , , , , 1, , , , , , , 1, , , , , , 1], [, 1, , , , , , , , , , 1, , , , , , , , , 1, 1], , [, , , , , , , , , , , , , , , 1, , , , 1, , 1], [, , 1, 1, , 1, , 1, , , , , , , , 1, , , , , , 1], [, , , , , , , , , , , , , , , , , , , , 1, 1], [, 1, , , , , , , , , , , , , 1], [1, , 1, 1, , , , 1, , , , , , , , , 1, , , 1, , , 1, 1], [, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, , 1, 1, , 1], [, 1, , , 1, 1, , , , , , 1, , 1, , 1, , , 1, , 1, 1], [1, 1, 1, 1, , 1, , 1, , 1, , 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1], [, 1, 1, , , 1, , 1, , 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, , 1, 1], [, , , , 1, , , 1, , , , , , , 1, , , , 1, 1], [, 1, , , , , , , , , , 1, , 1, , 1, , , , , 1, , , , , 1], , [1, 1, , 1, , 1, , 1, 1, , , , , , 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, , , , , , 1, , , , , , 1, 1, , , , 1, 1, , , 1], [, 1, 1, , 1, 1, , , , 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, , , 1, , , , 1, , , , 1, 1], [, , , , 1], [, , , , , , , , , 1, , , 1], , [, , 1, , 1, , , , , , , , , 1, , , , , , , , , , , , 1], [, , , , , , , , , , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , 1, 1, , 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, , , , , 1], [, 1, , 1, , , , , , 1, , , , , 1, 1, , , , , 1, 1], [, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, , , 1, , 1, 1, 1], [, 1, , , , 1, , , , , , , 1], [, 1, , , 1, , , 1, , 1, , 1, 1, , 1, , , , , 1, , 1, , , , 1, 1], [, 1, , , 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , , , , , , , , , , , , , , , , , , 1], [, 1, 1, 1, , , , 1, 1, , , , , , 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1], [, 1, , , , 1, , , , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , , 1, , , , , , , , 1, , , , , , , , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, , 1, 1, 1, , 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1], [1, 1, , , , , , , 1, 1, , , , , 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, , 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1], , [, 1, 1, , , , , 1, , 1, , , , 1, 1, 1, , , 1, , , , , 1], [, , , , , , , , , , , , , 1], [, , , , , 1, , , , , , , , 1, 1, , , , , 1, , 1, , , 1, 1], [, , , , , , , , , , , , , , 1]], [, [, 1], , , , , , , , , , , , , , , , , , , , [1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, , , 1, 1, 1, 1, 1], [, 1, , 1, , 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, , , 1, , , , 1, , 1, 1], [, 1, , 1, , 1, , , 1, , , , , 1, , , , , , 1, 1], [, 1, , 1, , , , , 1, , , , 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1], [, 1, , , , , , , , , , , , , , , 1]], [, [, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , 1, , , , , , , , , 1, 1, , , , 1], [, , , , , , 1], [, , 1], [, 1, 1, , , 1, , 1, , 1, 1, , 1, 1, 1, , , , 1, 1, 1, , , , , 1], , [, 1, , , , 1, , , , , , 1, , , 1, , , , 1, 1, , 1], [, , , , , , , 1, , , , , , , , , 1], [, 1, , , , 1, 1, , , , , , 1, 1, 1, , , , 1, , 1, 1], [, , , , , , , 1, , 1, , , , , , , , , , 1], [, 1, 1, , , , , , 1, 1, , , , 1, , , , , , , 1, , , 1], , [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , , 1, , , 1, , , , , 1, , 1, , 1, , 1, , , , , 1], [1, 1, 1, 1, 1, 1, 1, 1, , , , , 1, 1, , 1, 1, , 1, , , 1, , 1], [, , , , , , , , , , , , , , 1, , , , , , 1], , [, , , , , , , , , 1, , , , , , 1, , , , , 1], [, , 1, , , , , , , 1, , , 1, 1], [, , , 1, , , , , 1, , , , , 1, , , , , , 1, , , , 1], [1, , 1, 1, , 1, 1, 1, 1, 1, , 1, , , , 1, 1, 1, , , 1, 1, , , , 1, 1], , [1, 1, , , , , , , , , , 1, , 1, , 1, , , 1], [, , , , 1, , , , , , , , , , , , , , , , , , , 1], [, , , , , , , , , , , , , , 1, , , , , 1, , 1], [, , , , , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, , 1, , , 1, , , , , , , , 1, , , , , , 1, , , , 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, 1, , 1, , , , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, , 1, 1, 1, 1, , 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [1, 1, , , , , , , 1, , 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1], [1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1], [1, 1, 1, 1, , 1, , 1, , 1, 1, 1, 1, 1, , , , 1, 1, 1, 1, , 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, , , , , , 1, , 1, , , , , 1, 1, , , , , 1], [1, , 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , 1, 1, , 1, , 1, , , , 1, 1, 1, 1, 1, , , 1, 1, , 1, , 1], [, 1, 1, 1, 1, , , , , 1, , 1, 1, 1, 1, 1, , , 1, 1, , , , 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, , , , , 1, , 1, , 1, , , 1, , , 1, 1, , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , , , , , , , 1, , , , , 1, 1, , , 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , , 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , , , , 1, , 1, 1, , 1, 1, 1, 1, 1, , , 1, , 1, , 1], [1, 1, 1, , 1, 1, 1, 1, , , , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1], [1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, , 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, , 1, , , , , , , , , , 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , 1, 1, , , , , , 1, 1, 1, 1, 1, , , , 1, 1, 1, , 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1], [, 1, 1, 1, , 1, , 1, 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, , , 1, 1], [1, 1, , , , 1, , , 1, 1, 1, , 1, , 1, , 1, , 1, 1, 1, 1, 1, , 1, , 1], [, 1, , , , , , , 1, , 1, , 1, 1, 1, 1, , , , , , , , , 1]], [, [, , , , , , , , , , , , , 1, 1, , , , 1], [, 1, , , , , , , , 1, , , 1, , , , , , 1, , , 1, , , , 1], , [, 1, , , , 1, , 1, , 1, 1, , 1, 1, , , , , , , , 1], [, , , , , , , , , , , , , , , , , , , 1], [, , , , , , , , , 1], [1, 1, 1, , , 1, , , , , , , , , 1, 1, , , , , , , , , , 1], [, 1, , , , , , , , , , , , , 1], [, , , , , , , , , , , , , , , , , , , 1, , , 1], [, , , , , , , , , 1], [1, 1, , , , , , 1, 1, 1, , 1, 1, , , , 1, 1, , 1, , 1, 1, 1, , 1], [, 1, 1, 1, , 1, 1, , , 1, , 1, 1, 1, 1, , , , , , , 1, , 1], [, 1, 1, 1, 1, , , 1, , 1, , , , 1, 1, 1, 1, , 1, 1, , 1], [, 1, , , 1, 1, , 1, , , , 1, , 1, 1, , 1, , 1, , , 1, , , 1, , 1], [, , , , , , , , , , , 1], [, , , , , , , , , 1, , , , , , , , , , , , , 1], , [1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, , , , , , , 1, 1, , 1, , , , , 1, , , 1, , 1], [, 1, , , , 1, , , 1, , , , , , , , 1, , 1, , , 1], [, , , , , , , , , , , , , 1, 1, , , , 1, , , 1], [, , , , , 1, , , 1, , , , 1], [, 1], , [, 1], [1, , , , , , , , , , , , , , 1, , , , , 1]], [, [, 1, , , , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, , 1, 1, , , 1], [, , 1, , , , , , , , , 1], , , [1, , , 1, 1, , , , , , , , 1, 1, , 1, 1, , 1], , [, , , , , , , , , , , , , , , , , , 1, , 1], , [1, , , 1, 1, , 1, 1, , , , , 1, , 1, , , , , 1, 1, , 1], , [, 1, , , , , , , , 1, 1, 1, 1, 1, , 1, 1, , , , 1, 1], [, , , , , , , , , , , , , , , , 1, , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, , , , , , , , , , , 1, , 1, , , 1], [1, , , , , , , , , , , , , , , , , , 1, , 1], , , [, 1, , , , , , , , , , , , , , 1, , , , 1, 1], [, , , , , , , , , 1, , , 1, , , , , , , , , , 1], [, , , , , , , , , , , , , , , 1], [, , , , , , , , , , , , , 1, 1, , , , , , 1], , [, 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , , 1, 1, , 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1], [, 1, , , , , , , , 1], [, , , , 1, , , 1, , , 1, 1, , , , , , , , , , 1, , , , 1], [, 1, , 1, 1, , , 1, 1, 1, , , , 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [, , , , , , , 1], [, 1, 1, , , , , 1, , 1, , , , , , 1, , , , , , 1, , 1, , 1], [, 1, , , , , , 1, , , , 1, , , , , , , , , , 1], [, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, , 1, 1, 1, 1, , 1], [, 1, , , , , , , , 1], [, 1, 1, , 1, , , , , , , , 1, , , , , , 1, , , 1, , 1, , 1], [, 1, , 1, , 1, , 1, 1, 1, , 1, 1, 1, , 1, , , 1, 1, , 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , , 1, 1, , , , 1, 1, 1, , , , 1, 1, , , 1, 1], [, , 1, 1, 1, 1, , 1, , 1, , 1, , 1, 1, 1, 1, , , , , 1, , 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, , 1, 1, 1, , , 1, 1, , , , 1, , 1], [, , , 1], , [, 1, 1, , 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, , , , , , 1, , 1, , 1, , , , , , , 1, 1, , 1, 1], [, , , , , , 1, , 1, 1, , 1, , 1, , , , , , , , , , 1], [, 1, 1, , 1, , , , 1, , , , 1, 1, 1, , , , 1, , 1, 1, 1, , 1, 1], , [, 1, 1, , , , , , , , , , , , , 1, , , 1, , , , , 1], [, 1, , , , , , , , , , , , , , , , , , , , , , 1], [, 1, 1, , , , , , , 1, , , , 1, , , , , 1, , , , , , , 1]], [, [, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1], [, 1, 1, 1, 1, 1, , 1, , 1, 1, , , 1, 1, 1, 1, , 1, , , , , 1, 1, 1], [, , 1, 1, , 1, , 1, 1, , , , 1, 1, 1, 1, , , 1, , 1, 1, 1, 1, , 1], [, 1, , 1, , , , , , , , 1, , 1, , 1, , , , , , , , , , 1], [, , 1, , 1, , , 1, , , , , 1, 1, , , 1, , 1, 1, 1, 1], [, 1], [, 1, 1, , 1, , 1, 1, , 1, , , 1, 1, 1, , , , 1, , , 1, , 1], [1, 1, , 1, 1, 1, , , , , , , , , , , , , 1, , 1, 1, 1], [, 1, 1, , , , , , , 1, , , 1, , 1, , 1, , 1, 1, , , 1, , , 1], [, , 1, , , , , , , , , , , , , , , , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, , 1, , , , , 1, 1, 1, , , 1, , 1, , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, , , 1, 1, 1, , 1, , 1, 1, 1, , , 1, 1, 1, 1, , , , 1, 1], [, , , 1, 1, , , 1, , 1, , 1, , 1, 1, 1, 1, , 1, , , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , , , , , , , , , , , , , , , , , 1], [, 1, 1, , 1, 1, , 1, , 1, , , , 1, 1, , , 1, 1, , 1, 1, , 1], [, 1, 1, 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , , 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, , 1, , , 1, , , 1, , 1, 1, 1, 1, 1, , 1, , 1, 1], [, , , , , 1, , , , 1, , , , , 1, 1, , , , 1], [, 1, , 1, 1, 1, , 1, , , 1, 1, 1, , , 1, , , 1, , 1, , , 1], [, , 1, , , , , , , , , 1, , 1, , , , , 1, , 1], [, 1, 1, , , , , , , , 1, 1, 1, , , , , , , , 1, , , , , 1], [, , , , , , , , 1, , , , , 1, , , 1]], [, [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, , , , , , , , , 1, 1], [, , , , , , , , 1, , , , 1, , 1, , 1], [, 1, , , 1, 1, , 1, , , , 1, , , , , , , , 1], [, 1, , 1, , 1, , , , 1, 1, , 1, , 1, , , , 1, 1, 1, 1, 1, , , 1], , [, 1, , , , , , , , 1, , , 1, 1, , , 1, , 1, 1, , 1, , 1], [, 1, , , 1, , , , , , , , 1, , , , , , , 1], [1, 1, , , , , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1], , [, 1, , , , , , 1, , 1, , 1, 1, 1, 1, 1, , , 1, , 1, 1, , , , 1], [, 1, 1, , , 1, , 1, , 1, , , 1, 1, 1, 1, , , 1, , , 1, , , , 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, , 1], [, 1, , , 1, 1, , 1, 1, , , 1, 1, , 1, 1, , 1, , 1, , 1], [1, , 1, , , , , 1, , 1, , 1, 1, 1, 1, , , , , 1, 1, , , , 1, 1], [, 1, 1, , , , , 1, 1, , , 1, , 1, 1, 1, 1, , , , , , , , , , 1], , [, 1, 1, , , 1, , , , 1, , 1, 1, 1, 1, 1, , , , 1, , , , 1, , 1], [, , , 1, 1, , , 1, , , , , 1, , 1, 1, 1, , 1, 1, , , , , , 1], [, 1, , , , , , , , , , , 1, , , , 1, , , , , , , 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, , 1, 1, 1, 1], [, 1, , , , , , , , , , , , , , , , , , , 1], [, 1, , , , , , 1, , , , , 1, , 1, , , 1, 1, , 1, 1, , 1], [, 1, , , , , , 1, , , , , 1, 1, , , , , , , , 1, , , , 1], [, , , , , , , , , , , , , , , , , , 1, , , 1, , , , , 1], [, , , , , , , 1, , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , 1, , 1, , , , , , , 1, , , , , , , , 1, , , 1], [, 1, , , , , , , 1], [, , , , , , , , , , 1], [, 1, , , , , , 1, 1, , , , , , 1], , [, 1, 1, , , , , , 1, , , , , 1, 1, , , , 1], [1, , 1, , 1, , , , , 1, , , , , 1, , , , , , , , , 1, 1], [, 1, 1, , , , , , , , , 1, 1, 1, 1, , , , 1, , , , , 1, , , 1], , [, 1, 1, , 1, , , 1, 1, , , 1, , , 1, 1, 1, , 1, , 1, 1, 1, , , , 1], [, , , , , 1, , , , , 1, , , 1, 1, , , 1, , 1, , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , 1, 1, , 1, , , , 1, , , , , , , , 1], [, , , 1, , , , , 1, , , , , 1, , 1, , 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , , , 1], [, 1, , , , , , 1, , , , , , , 1, 1, 1, , , 1], [, 1, , , , , , , , , , 1, 1, 1, , , , , 1, , , 1], [, , , , , 1, , 1, , , , , 1, 1, 1, , 1, 1, , 1, 1, 1, , , 1, 1], [1, 1, , , , , , , 1, , , , , 1, 1, , , , , , , , , , , 1], , [, 1], [, , , , , , , , , , , , , , , , , , , , , , , , 1], [, , 1, , , , , 1, , , 1, , , , 1, , 1], [, 1, , , , , , , , , 1]]];
      function qp(e) {
        for (var t = el; e.length < 3; )
          e += "`";
        for (var r = 0; r <= e.length - 1; r++) {
          var a = e.charCodeAt(r) - 96;
          if (t = t[a], !t)
            return !1;
        }
        return !0;
      }
      function tl(e) {
        e = Array.isArray(e) ? e : el;
        var t = [];
        return e.forEach(function(r, a) {
          var n = String.fromCharCode(a + 96).replace("`", "");
          Array.isArray(r) ? t = t.concat(tl(r).map(function(i) {
            return n + i;
          })) : t.push(n);
        }), t;
      }
      var la = qp;
      h._thisWillBeDeletedDoNotUse = h._thisWillBeDeletedDoNotUse || {}, h._thisWillBeDeletedDoNotUse.utils = {
        setDefaultFrameMessenger: Ri
      };
      var Bp = function(e) {
        ti(r, e);
        var t = ri(r);
        function r(a) {
          var n;
          return Fr(this, r), n = t.call(this), n._props = Vp(a), n._attrs = Up(a), n;
        }
        return kr(r, [{
          key: "props",
          get: function() {
            return this._props;
          }
        }, {
          key: "attr",
          value: function(n) {
            var i;
            return (i = this._attrs[n]) !== null && i !== void 0 ? i : null;
          }
        }, {
          key: "hasAttr",
          value: function(n) {
            return this._attrs[n] !== void 0;
          }
        }, {
          key: "attrNames",
          get: function() {
            return Object.keys(this._attrs);
          }
        }]), r;
      }(oe), Fn = {
        "#cdata-section": 2,
        "#text": 3,
        "#comment": 8,
        "#document": 9,
        "#document-fragment": 11
      }, rl = {}, jp = Object.keys(Fn);
      jp.forEach(function(e) {
        rl[Fn[e]] = e;
      });
      function Vp(e) {
        var t, r, a, n = (t = e.nodeName) !== null && t !== void 0 ? t : rl[e.nodeType], i = (r = (a = e.nodeType) !== null && a !== void 0 ? a : Fn[e.nodeName]) !== null && r !== void 0 ? r : 1;
        we(typeof i == "number", "nodeType has to be a number, got '".concat(i, "'")), we(typeof n == "string", "nodeName has to be a string, got '".concat(n, "'")), n = n.toLowerCase();
        var o = null;
        n === "input" && (o = (e.type || e.attributes && e.attributes.type || "").toLowerCase(), oa().includes(o) || (o = "text"));
        var l = de({}, e, {
          nodeType: i,
          nodeName: n
        });
        return o && (l.type = o), delete l.attributes, Object.freeze(l);
      }
      function Up(e) {
        var t = e.attributes, r = t === void 0 ? {} : t, a = {
          htmlFor: "for",
          className: "class"
        };
        return Object.keys(r).reduce(function(n, i) {
          var o = r[i];
          if (we(P(o) !== "object" || o === null, "expects attributes not to be an object, '".concat(i, "' was")), o !== void 0) {
            var l = a[i] || i;
            n[l] = o !== null ? String(o) : null;
          }
          return n;
        }, {});
      }
      var al = Bp, nl = {};
      Te(nl, {
        allowedAttr: function() {
          return il;
        },
        arialabelText: function() {
          return mr;
        },
        arialabelledbyText: function() {
          return gr;
        },
        getAccessibleRefs: function() {
          return qn;
        },
        getElementUnallowedRoles: function() {
          return zl;
        },
        getExplicitRole: function() {
          return be;
        },
        getImplicitRole: function() {
          return ut;
        },
        getOwnedVirtual: function() {
          return vr;
        },
        getRole: function() {
          return ce;
        },
        getRoleType: function() {
          return Yt;
        },
        getRolesByType: function() {
          return Eh;
        },
        getRolesWithNameFromContents: function() {
          return Fh;
        },
        implicitNodes: function() {
          return Rh;
        },
        implicitRole: function() {
          return ut;
        },
        isAccessibleRef: function() {
          return fa;
        },
        isAriaRoleAllowedOnElement: function() {
          return Hl;
        },
        isUnsupportedRole: function() {
          return kn;
        },
        isValidRole: function() {
          return zt;
        },
        label: function() {
          return Gl;
        },
        labelVirtual: function() {
          return Kr;
        },
        lookupTable: function() {
          return Wl;
        },
        namedFromContents: function() {
          return _l;
        },
        requiredAttr: function() {
          return Yl;
        },
        requiredContext: function() {
          return jn;
        },
        requiredOwned: function() {
          return Vn;
        },
        validateAttr: function() {
          return Dr;
        },
        validateAttrValue: function() {
          return Kl;
        }
      });
      function Hp() {
        if (H.get("globalAriaAttrs"))
          return H.get("globalAriaAttrs");
        var e = Object.keys(le.ariaAttrs).filter(function(t) {
          return le.ariaAttrs[t].global;
        });
        return H.set("globalAriaAttrs", e), e;
      }
      var Ht = Hp;
      function zp(e) {
        var t = le.ariaRoles[e], r = ie(Ht());
        return t && (t.allowedAttrs && r.push.apply(r, ie(t.allowedAttrs)), t.requiredAttrs && r.push.apply(r, ie(t.requiredAttrs))), r;
      }
      var il = zp;
      function $p(e) {
        if (!(e instanceof oe)) {
          if (e.nodeType !== 1)
            return "";
          e = V(e);
        }
        return e.attr("aria-label") || "";
      }
      var mr = $p;
      function Wp(e) {
        var t = le.ariaRoles[e];
        return t ? !!t.unsupported : !1;
      }
      var kn = Wp;
      function Gp(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.allowAbstract, a = t.flagUnsupported, n = a === void 0 ? !1 : a, i = le.ariaRoles[e], o = kn(e);
        return !i || n && o ? !1 : r ? !0 : i.type !== "abstract";
      }
      var zt = Gp;
      function Yp(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.fallback, a = t.abstracts, n = t.dpub;
        if (e = e instanceof oe ? e : V(e), e.props.nodeType !== 1)
          return null;
        var i = (e.attr("role") || "").trim().toLowerCase(), o = r ? Ve(i) : [i], l = o.find(function(s) {
          return !n && s.substr(0, 4) === "doc-" ? !1 : zt(s, {
            allowAbstract: a
          });
        });
        return l || null;
      }
      var be = Yp;
      function Kp(e) {
        return Object.keys(le.htmlElms).filter(function(t) {
          var r = le.htmlElms[t];
          return r.contentTypes ? r.contentTypes.includes(e) : r.variant && r.variant.default && r.variant.default.contentTypes ? r.variant.default.contentTypes.includes(e) : !1;
        });
      }
      var Rn = Kp;
      function Xp(e) {
        for (var t = [], r = e.rows, a = 0, n = r.length; a < n; a++) {
          var i = r[a].cells;
          t[a] = t[a] || [];
          for (var o = 0, l = 0, s = i.length; l < s; l++)
            for (var u = 0; u < i[l].colSpan; u++) {
              for (var c = i[l].getAttribute("rowspan"), d = parseInt(c) === 0 || i[l].rowspan === 0 ? r.length : i[l].rowSpan, f = 0; f < d; f++) {
                for (t[a + f] = t[a + f] || []; t[a + f][o]; )
                  o++;
                t[a + f][o] = i[l];
              }
              o++;
            }
        }
        return t;
      }
      var dt = na(Xp);
      function Jp(e, t) {
        var r, a;
        for (t || (t = dt(jt(e, "table"))), r = 0; r < t.length; r++)
          if (t[r] && (a = t[r].indexOf(e), a !== -1))
            return {
              x: a,
              y: r
            };
      }
      var ua = na(Jp);
      function Qp(e) {
        var t = e.getAttribute("scope"), r = e.getAttribute("role");
        if (!(e instanceof y.Element) || ["TD", "TH"].indexOf(e.nodeName.toUpperCase()) === -1)
          throw new TypeError("Expected TD or TH element");
        if (r === "columnheader")
          return "col";
        if (r === "rowheader")
          return "row";
        if (t === "col" || t === "row")
          return t;
        if (e.nodeName.toUpperCase() !== "TH")
          return !1;
        var a = dt(jt(e, "table")), n = ua(e, a), i = a[n.y].reduce(function(l, s) {
          return l && s.nodeName.toUpperCase() === "TH";
        }, !0);
        if (i)
          return "col";
        var o = a.map(function(l) {
          return l[n.x];
        }).reduce(function(l, s) {
          return l && s && s.nodeName.toUpperCase() === "TH";
        }, !0);
        return o ? "row" : "auto";
      }
      var Tn = Qp;
      function Zp(e) {
        return ["col", "auto"].indexOf(Tn(e)) !== -1;
      }
      var $t = Zp;
      function em(e) {
        return ["row", "auto"].includes(Tn(e));
      }
      var Wt = em, ol = Rn("sectioning").map(function(e) {
        return "".concat(e, ":not([role])");
      }).join(", ") + " , main:not([role]), [role=article], [role=complementary], [role=main], [role=navigation], [role=region]";
      function ll(e) {
        var t = te(gr(e)), r = te(mr(e));
        return !!(t || r);
      }
      var tm = {
        a: function(t) {
          return t.hasAttr("href") ? "link" : null;
        },
        area: function(t) {
          return t.hasAttr("href") ? "link" : null;
        },
        article: "article",
        aside: "complementary",
        body: "document",
        button: "button",
        datalist: "listbox",
        dd: "definition",
        dfn: "term",
        details: "group",
        dialog: "dialog",
        dt: "term",
        fieldset: "group",
        figure: "figure",
        footer: function(t) {
          var r = Qe(t, ol);
          return r ? null : "contentinfo";
        },
        form: function(t) {
          return ll(t) ? "form" : null;
        },
        h1: "heading",
        h2: "heading",
        h3: "heading",
        h4: "heading",
        h5: "heading",
        h6: "heading",
        header: function(t) {
          var r = Qe(t, ol);
          return r ? null : "banner";
        },
        hr: "separator",
        img: function(t) {
          var r = t.hasAttr("alt") && !t.attr("alt"), a = Ht().find(function(n) {
            return t.hasAttr(n);
          });
          return r && !a && !je(t) ? "presentation" : "img";
        },
        input: function(t) {
          var r;
          if (t.hasAttr("list")) {
            var a = nt(t.actualNode, "list").filter(function(n) {
              return !!n;
            })[0];
            r = a && a.nodeName.toLowerCase() === "datalist";
          }
          switch (t.props.type) {
            case "checkbox":
              return "checkbox";
            case "number":
              return "spinbutton";
            case "radio":
              return "radio";
            case "range":
              return "slider";
            case "search":
              return r ? "combobox" : "searchbox";
            case "button":
            case "image":
            case "reset":
            case "submit":
              return "button";
            case "text":
            case "tel":
            case "url":
            case "email":
            case "":
              return r ? "combobox" : "textbox";
            default:
              return "textbox";
          }
        },
        li: "listitem",
        main: "main",
        math: "math",
        menu: "list",
        nav: "navigation",
        ol: "list",
        optgroup: "group",
        option: "option",
        output: "status",
        progress: "progressbar",
        section: function(t) {
          return ll(t) ? "region" : null;
        },
        select: function(t) {
          return t.hasAttr("multiple") || parseInt(t.attr("size")) > 1 ? "listbox" : "combobox";
        },
        summary: "button",
        table: "table",
        tbody: "rowgroup",
        td: function(t) {
          var r = Qe(t, "table"), a = be(r);
          return ["grid", "treegrid"].includes(a) ? "gridcell" : "cell";
        },
        textarea: "textbox",
        tfoot: "rowgroup",
        th: function(t) {
          if ($t(t.actualNode))
            return "columnheader";
          if (Wt(t.actualNode))
            return "rowheader";
        },
        thead: "rowgroup",
        tr: "row",
        ul: "list"
      }, Sn = tm;
      function rm(e, t) {
        var r = P(t);
        if (Array.isArray(t) && typeof e < "u")
          return t.includes(e);
        if (r === "function")
          return !!t(e);
        if (e != null) {
          if (t instanceof RegExp)
            return t.test(e);
          if (/^\/.*\/$/.test(t)) {
            var a = t.substring(1, t.length - 1);
            return new RegExp(a).test(e);
          }
        }
        return t === e;
      }
      var Tt = rm;
      function am(e, t) {
        return Tt(!!ze(e), t);
      }
      var ul = am;
      function nm(e, t) {
        var r = P(t);
        if (r !== "object" || Array.isArray(t) || t instanceof RegExp)
          throw new Error("Expect matcher to be an object");
        return Object.keys(t).every(function(a) {
          return Tt(e(a), t[a]);
        });
      }
      var On = nm;
      function im(e, t) {
        return e instanceof oe || (e = V(e)), On(function(r) {
          return e.attr(r);
        }, t);
      }
      var sl = im;
      function om(e, t) {
        return !!t(e);
      }
      var cl = om;
      function lm(e, t) {
        return Tt(be(e), t);
      }
      var dl = lm;
      function um(e, t) {
        return Tt(ut(e), t);
      }
      var fl = um;
      function sm(e, t) {
        return e instanceof oe || (e = V(e)), Tt(e.props.nodeName, t);
      }
      var pl = sm;
      function cm(e, t) {
        return e instanceof oe || (e = V(e)), On(function(r) {
          return e.props[r];
        }, t);
      }
      var ml = cm;
      function dm(e, t) {
        return Tt(ce(e), t);
      }
      var hl = dm, vl = {
        hasAccessibleName: ul,
        attributes: sl,
        condition: cl,
        explicitRole: dl,
        implicitRole: fl,
        nodeName: pl,
        properties: ml,
        semanticRole: hl
      };
      function gl(e, t) {
        return e instanceof oe || (e = V(e)), Array.isArray(t) ? t.some(function(r) {
          return gl(e, r);
        }) : typeof t == "string" ? Ka(e, t) : Object.keys(t).every(function(r) {
          if (!vl[r])
            throw new Error('Unknown matcher type "'.concat(r, '"'));
          var a = vl[r], n = t[r];
          return a(e, n);
        });
      }
      var bl = gl;
      function fm(e, t) {
        return bl(e, t);
      }
      var Ge = fm;
      Ge.hasAccessibleName = ul, Ge.attributes = sl, Ge.condition = cl, Ge.explicitRole = dl, Ge.fromDefinition = bl, Ge.fromFunction = On, Ge.fromPrimative = Tt, Ge.implicitRole = fl, Ge.nodeName = pl, Ge.properties = ml, Ge.semanticRole = hl;
      var hr = Ge;
      function pm(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.noMatchAccessibleName, a = r === void 0 ? !1 : r, n = le.htmlElms[e.props.nodeName];
        if (!n)
          return {};
        if (!n.variant)
          return n;
        var i = n.variant, o = qe(n, Yu);
        for (var l in i)
          if (!(!i.hasOwnProperty(l) || l === "default")) {
            for (var s = i[l], u = s.matches, c = qe(s, Ku), d = Array.isArray(u) ? u : [u], f = 0; f < d.length && a; f++)
              if (d[f].hasOwnProperty("hasAccessibleName"))
                return n;
            if (hr(e, u))
              for (var p in c)
                c.hasOwnProperty(p) && (o[p] = c[p]);
          }
        for (var m in i.default)
          i.default.hasOwnProperty(m) && typeof o[m] > "u" && (o[m] = i.default[m]);
        return o;
      }
      var St = pm;
      function mm(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.chromium, a = e instanceof oe ? e : V(e);
        if (e = a.actualNode, !a)
          throw new ReferenceError("Cannot get implicit role of a node outside the current scope.");
        var n = a.props.nodeName, i = Sn[n];
        if (!i && r) {
          var o = St(a), l = o.chromiumRole;
          return l || null;
        }
        return typeof i == "function" ? i(a) : i || null;
      }
      var ut = mm, hm = {
        td: ["tr"],
        th: ["tr"],
        tr: ["thead", "tbody", "tfoot", "table"],
        thead: ["table"],
        tbody: ["table"],
        tfoot: ["table"],
        li: ["ol", "ul"],
        dt: ["dl", "div"],
        dd: ["dl", "div"],
        div: ["dl"]
      };
      function yl(e, t) {
        var r = hm[e.props.nodeName];
        if (!r)
          return null;
        if (!e.parent)
          throw new ReferenceError("Cannot determine role presentational inheritance of a required parent outside the current scope.");
        if (!r.includes(e.parent.props.nodeName))
          return null;
        var a = be(e.parent, t);
        return ["none", "presentation"].includes(a) && !wl(e.parent) ? a : a ? null : yl(e.parent, t);
      }
      function Dl(e, t) {
        var r = t.chromium, a = qe(t, Xu), n = ut(e, {
          chromium: r
        });
        if (!n)
          return null;
        var i = yl(e, a);
        return i || n;
      }
      function wl(e) {
        var t = Ht().some(function(r) {
          return e.hasAttr(r);
        });
        return t || je(e);
      }
      function vm(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.noImplicit, a = qe(t, Ju), n = e instanceof oe ? e : V(e);
        if (n.props.nodeType !== 1)
          return null;
        var i = be(n, a);
        return i ? ["presentation", "none"].includes(i) && wl(n) ? r ? null : Dl(n, a) : i : r ? null : Dl(n, a);
      }
      function gm(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.noPresentational, a = qe(t, Qu), n = vm(e, a);
        return r && ["presentation", "none"].includes(n) ? null : n;
      }
      var ce = gm, bm = ["iframe"];
      function ym(e) {
        var t = e instanceof oe ? e : V(e);
        return t.props.nodeType !== 1 || !e.hasAttr("title") || !Ge(t, bm) && ["none", "presentation"].includes(ce(t)) ? "" : t.attr("title");
      }
      var sa = ym;
      function Dm(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.strict;
        if (e = e instanceof oe ? e : V(e), e.props.nodeType !== 1)
          return !1;
        var a = ce(e), n = le.ariaRoles[a];
        return n && n.nameFromContent ? !0 : r ? !1 : !n || ["presentation", "none"].includes(a);
      }
      var _l = Dm;
      function wm(e) {
        var t = e.actualNode, r = e.children;
        if (!r)
          throw new Error("getOwnedVirtual requires a virtual node");
        if (e.hasAttr("aria-owns")) {
          var a = nt(t, "aria-owns").filter(function(n) {
            return !!n;
          }).map(function(n) {
            return h.utils.getNodeFromTree(n);
          });
          return [].concat(ie(r), ie(a));
        }
        return ie(r);
      }
      var vr = wm;
      function _m(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = ze.alreadyProcessed;
        t.startNode = t.startNode || e;
        var a = t, n = a.strict, i = a.inControlContext, o = a.inLabelledByContext, l = St(e, {
          noMatchAccessibleName: !0
        }), s = l.contentTypes;
        if (r(e, t) || e.props.nodeType !== 1 || s != null && s.includes("embedded") || !_l(e, {
          strict: n
        }) && !t.subtreeDescendant)
          return "";
        if (!n) {
          var u = !i && !o;
          t = de({
            subtreeDescendant: u
          }, t);
        }
        return vr(e).reduce(function(c, d) {
          return Em(c, d, t);
        }, "");
      }
      var xm = Rn("phrasing").concat(["#text"]);
      function Em(e, t, r) {
        var a = t.props.nodeName, n = ze(t, r);
        return n ? (xm.includes(a) || (n[0] !== " " && (n += " "), e && e[e.length - 1] !== " " && (n = " " + n)), e + n) : e;
      }
      var Gt = _m;
      function Am(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = ze.alreadyProcessed;
        if (t.inControlContext || t.inLabelledByContext || r(e, t))
          return "";
        t.startNode || (t.startNode = e);
        var a = de({
          inControlContext: !0
        }, t), n = Cm(e), i = Qe(e, "label"), o;
        return i ? (o = [].concat(ie(n), [i.actualNode]), o.sort(_n)) : o = n, o.map(function(l) {
          return bt(l, a);
        }).filter(function(l) {
          return l !== "";
        }).join(" ");
      }
      function Cm(e) {
        if (!e.attr("id"))
          return [];
        if (!e.actualNode)
          throw new TypeError("Cannot resolve explicit label reference for non-DOM nodes");
        return to({
          elm: "label",
          attr: "for",
          value: e.attr("id"),
          context: e.actualNode
        });
      }
      var Nn = Am, Fm = {
        submit: "Submit",
        image: "Submit",
        reset: "Reset",
        button: ""
      }, km = {
        valueText: function(t) {
          var r = t.actualNode;
          return r.value || "";
        },
        buttonDefaultText: function(t) {
          var r = t.actualNode;
          return Fm[r.type] || "";
        },
        tableCaptionText: ca.bind(null, "caption"),
        figureText: ca.bind(null, "figcaption"),
        svgTitleText: ca.bind(null, "title"),
        fieldsetLegendText: ca.bind(null, "legend"),
        altText: In.bind(null, "alt"),
        tableSummaryText: In.bind(null, "summary"),
        titleText: sa,
        subtreeText: Gt,
        labelText: Nn,
        singleSpace: function() {
          return " ";
        },
        placeholderText: In.bind(null, "placeholder")
      };
      function In(e, t) {
        return t.attr(e) || "";
      }
      function ca(e, t, r) {
        var a = t.actualNode;
        e = e.toLowerCase();
        var n = [e, a.nodeName.toLowerCase()].join(","), i = a.querySelector(n);
        return !i || i.nodeName.toLowerCase() !== e ? "" : bt(i, r);
      }
      var xl = km;
      function Rm(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.actualNode;
        if (e.props.nodeType !== 1 || ["presentation", "none"].includes(ce(e)))
          return "";
        var a = Tm(e), n = a.reduce(function(i, o) {
          return i || o(e, t);
        }, "");
        return t.debug && h.log(n || "{empty-value}", r, t), n;
      }
      function Tm(e) {
        var t = St(e, {
          noMatchAccessibleName: !0
        }), r = t.namingMethods || [];
        return r.map(function(a) {
          return xl[a];
        });
      }
      var El = Rm, Sm = {
        accessibleNameFromFieldValue: ["combobox", "listbox", "progressbar"]
      }, Al = Sm, Om = ["button", "checkbox", "color", "file", "hidden", "image", "password", "radio", "reset", "submit"];
      function Nm(e) {
        e = e instanceof oe ? e : V(e);
        var t = e.props.nodeName;
        return t === "textarea" || t === "input" && !Om.includes((e.attr("type") || "").toLowerCase());
      }
      var Cl = Nm;
      function Im(e) {
        e = e instanceof oe ? e : V(e);
        var t = e.props.nodeName;
        return t === "select";
      }
      var Fl = Im;
      function Pm(e) {
        var t = be(e);
        return t === "textbox";
      }
      var kl = Pm;
      function Mm(e) {
        var t = be(e);
        return t === "listbox";
      }
      var Rl = Mm;
      function Lm(e) {
        var t = be(e);
        return t === "combobox";
      }
      var Tl = Lm, qm = ["progressbar", "scrollbar", "slider", "spinbutton"];
      function Bm(e) {
        var t = be(e);
        return qm.includes(t);
      }
      var Sl = Bm, jm = ["textbox", "progressbar", "scrollbar", "slider", "spinbutton", "combobox", "listbox"], Pn = {
        nativeTextboxValue: Um,
        nativeSelectValue: Hm,
        ariaTextboxValue: zm,
        ariaListboxValue: Ol,
        ariaComboboxValue: $m,
        ariaRangeValue: Wm
      };
      function Vm(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.actualNode, a = Al.accessibleNameFromFieldValue || [], n = ce(e);
        if (t.startNode === e || !jm.includes(n) || a.includes(n))
          return "";
        var i = Object.keys(Pn).map(function(l) {
          return Pn[l];
        }), o = i.reduce(function(l, s) {
          return l || s(e, t);
        }, "");
        return t.debug && At(o || "{empty-value}", r, t), o;
      }
      function Um(e) {
        var t = e instanceof oe ? e : V(e);
        return Cl(t) && t.props.value || "";
      }
      function Hm(e) {
        var t = e instanceof oe ? e : V(e);
        if (!Fl(t))
          return "";
        var r = et(t, "option"), a = r.filter(function(n) {
          return n.props.selected;
        });
        return a.length || a.push(r[0]), a.map(function(n) {
          return it(n);
        }).join(" ") || "";
      }
      function zm(e) {
        var t = e instanceof oe ? e : V(e), r = t.actualNode;
        return kl(t) ? !r || r && !un(r) ? it(t, !0) : r.textContent : "";
      }
      function Ol(e, t) {
        var r = e instanceof oe ? e : V(e);
        if (!Rl(r))
          return "";
        var a = vr(r).filter(function(n) {
          return ce(n) === "option" && n.attr("aria-selected") === "true";
        });
        return a.length === 0 ? "" : ze(a[0], t);
      }
      function $m(e, t) {
        var r = e instanceof oe ? e : V(e);
        if (!Tl(r))
          return "";
        var a = vr(r).filter(function(n) {
          return ce(n) === "listbox";
        })[0];
        return a ? Ol(a, t) : "";
      }
      function Wm(e) {
        var t = e instanceof oe ? e : V(e);
        if (!Sl(t) || !t.hasAttr("aria-valuenow"))
          return "";
        var r = +t.attr("aria-valuenow");
        return isNaN(r) ? "0" : String(r);
      }
      var Nl = Vm;
      function Il() {
        return /[\u1D00-\u1D7F\u1D80-\u1DBF\u1DC0-\u1DFF\u20A0-\u20CF\u20D0-\u20FF\u2100-\u214F\u2150-\u218F\u2190-\u21FF\u2200-\u22FF\u2300-\u23FF\u2400-\u243F\u2440-\u245F\u2460-\u24FF\u2500-\u257F\u2580-\u259F\u25A0-\u25FF\u2600-\u26FF\u2700-\u27BF\uE000-\uF8FF]/g;
      }
      function Pl() {
        return /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&\xa3\xa2\xa5\xa7\u20ac()*+,\-.\/:;<=>?@\[\]^_`{|}~\xb1]/g;
      }
      function Ml() {
        return /[\uDB80-\uDBBF][\uDC00-\uDFFF]/g;
      }
      var Gm = Je(ka());
      function Ym(e, t) {
        var r = t.emoji, a = t.nonBmp, n = t.punctuations;
        return r ? Gm.default().test(e) : a ? Il().test(e) || Ml().test(e) : n ? Pl().test(e) : !1;
      }
      var Mn = Ym;
      function Km(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0.15, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 3, a = e.actualNode.nodeValue.trim();
        if (!te(a) || Mn(a, {
          emoji: !0,
          nonBmp: !0
        }))
          return !1;
        H.get("canvasContext") || H.set("canvasContext", R.createElement("canvas").getContext("2d"));
        var n = H.get("canvasContext"), i = n.canvas;
        H.get("fonts") || H.set("fonts", {});
        var o = H.get("fonts"), l = y.getComputedStyle(e.parent.actualNode), s = l.getPropertyValue("font-family");
        o[s] || (o[s] = {
          occurances: 0,
          numLigatures: 0
        });
        var u = o[s];
        if (u.occurances >= r) {
          if (u.numLigatures / u.occurances === 1)
            return !0;
          if (u.numLigatures === 0)
            return !1;
        }
        u.occurances++;
        var c = 30, d = "".concat(c, "px ").concat(s);
        n.font = d;
        var f = a.charAt(0), p = n.measureText(f).width;
        if (p < 30) {
          var m = 30 / p;
          p *= m, c *= m, d = "".concat(c, "px ").concat(s);
        }
        i.width = p, i.height = c, n.font = d, n.textAlign = "left", n.textBaseline = "top", n.fillText(f, 0, 0);
        var b = new Uint32Array(n.getImageData(0, 0, p, c).data.buffer);
        if (!b.some(function(I) {
          return I;
        }))
          return u.numLigatures++, !0;
        n.clearRect(0, 0, p, c), n.fillText(a, 0, 0);
        var D = new Uint32Array(n.getImageData(0, 0, p, c).data.buffer), v = b.reduce(function(I, M, U) {
          return M === 0 && D[U] === 0 || M !== 0 && D[U] !== 0 ? I : ++I;
        }, 0), g = a.split("").reduce(function(I, M) {
          return I + n.measureText(M).width;
        }, 0), x = n.measureText(a).width, E = v / b.length, F = 1 - x / g;
        return E >= t && F >= t ? (u.numLigatures++, !0) : !1;
      }
      var Ll = Km;
      function ql(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.actualNode;
        if (t = Zm(e, t), Jm(e, t) || Qm(e, t))
          return "";
        var a = [gr, mr, El, Nl, Gt, Xm, sa], n = a.reduce(function(i, o) {
          return t.startNode === e && (i = te(i)), i !== "" ? i : o(e, t);
        }, "");
        return t.debug && h.log(n || "{empty-value}", r, t), n;
      }
      function Xm(e) {
        return e.props.nodeType !== 3 ? "" : e.props.nodeValue;
      }
      function Jm(e, t) {
        var r = e.actualNode;
        return !r || r.nodeType !== 1 || t.includeHidden ? !1 : !he(r, !0);
      }
      function Qm(e, t) {
        var r = t.ignoreIconLigature, a = t.pixelThreshold, n = t.occuranceThreshold;
        return e.props.nodeType !== 3 || !r ? !1 : Ll(e, a, n);
      }
      function Zm(e, t) {
        var r = e.actualNode;
        return t.startNode || (t = de({
          startNode: e
        }, t)), r && r.nodeType === 1 && t.inLabelledByContext && t.includeHidden === void 0 && (t = de({
          includeHidden: !he(r, !0)
        }, t)), t;
      }
      ql.alreadyProcessed = function(t, r) {
        return r.processed = r.processed || [], r.processed.includes(t) ? !0 : (r.processed.push(t), !1);
      };
      var ze = ql;
      function eh(e, t) {
        var r = V(e);
        return ze(r, t);
      }
      var bt = eh;
      function th(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (!(e instanceof oe)) {
          if (e.nodeType !== 1)
            return "";
          e = V(e);
        }
        if (e.props.nodeType !== 1 || t.inLabelledByContext || t.inControlContext || !e.attr("aria-labelledby"))
          return "";
        var r = nt(e, "aria-labelledby").filter(function(a) {
          return a;
        });
        return r.reduce(function(a, n) {
          var i = bt(n, de({
            inLabelledByContext: !0,
            startNode: t.startNode || e
          }, t));
          return a ? "".concat(a, " ").concat(i) : i;
        }, "");
      }
      var gr = th, br = {};
      Te(br, {
        accessibleText: function() {
          return bt;
        },
        accessibleTextVirtual: function() {
          return ze;
        },
        autocomplete: function() {
          return Ot;
        },
        formControlValue: function() {
          return Nl;
        },
        formControlValueMethods: function() {
          return Pn;
        },
        hasUnicode: function() {
          return Mn;
        },
        isHumanInterpretable: function() {
          return Ln;
        },
        isIconLigature: function() {
          return Ll;
        },
        isValidAutocomplete: function() {
          return Bl;
        },
        label: function() {
          return sh;
        },
        labelText: function() {
          return Nn;
        },
        labelVirtual: function() {
          return da;
        },
        nativeElementType: function() {
          return dh;
        },
        nativeTextAlternative: function() {
          return El;
        },
        nativeTextMethods: function() {
          return xl;
        },
        removeUnicode: function() {
          return yr;
        },
        sanitize: function() {
          return te;
        },
        subtreeText: function() {
          return Gt;
        },
        titleText: function() {
          return sa;
        },
        unsupported: function() {
          return Al;
        },
        visible: function() {
          return jl;
        },
        visibleTextNodes: function() {
          return fh;
        },
        visibleVirtual: function() {
          return it;
        }
      });
      var rh = Je(ka());
      function ah(e, t) {
        var r = t.emoji, a = t.nonBmp, n = t.punctuations;
        return r && (e = e.replace(rh.default(), "")), a && (e = e.replace(Il(), ""), e = e.replace(Ml(), "")), n && (e = e.replace(Pl(), "")), e;
      }
      var yr = ah;
      function nh(e) {
        if (!e.length)
          return 0;
        var t = ["x", "i"];
        if (t.includes(e))
          return 0;
        var r = yr(e, {
          emoji: !0,
          nonBmp: !0,
          punctuations: !0
        });
        return te(r) ? 1 : 0;
      }
      var Ln = nh, Ot = {
        stateTerms: ["on", "off"],
        standaloneTerms: ["name", "honorific-prefix", "given-name", "additional-name", "family-name", "honorific-suffix", "nickname", "username", "new-password", "current-password", "organization-title", "organization", "street-address", "address-line1", "address-line2", "address-line3", "address-level4", "address-level3", "address-level2", "address-level1", "country", "country-name", "postal-code", "cc-name", "cc-given-name", "cc-additional-name", "cc-family-name", "cc-number", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-csc", "cc-type", "transaction-currency", "transaction-amount", "language", "bday", "bday-day", "bday-month", "bday-year", "sex", "url", "photo", "one-time-code"],
        qualifiers: ["home", "work", "mobile", "fax", "pager"],
        qualifiedTerms: ["tel", "tel-country-code", "tel-national", "tel-area-code", "tel-local", "tel-local-prefix", "tel-local-suffix", "tel-extension", "email", "impp"],
        locations: ["billing", "shipping"]
      };
      function ih(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.looseTyped, a = r === void 0 ? !1 : r, n = t.stateTerms, i = n === void 0 ? [] : n, o = t.locations, l = o === void 0 ? [] : o, s = t.qualifiers, u = s === void 0 ? [] : s, c = t.standaloneTerms, d = c === void 0 ? [] : c, f = t.qualifiedTerms, p = f === void 0 ? [] : f;
        if (e = e.toLowerCase().trim(), i = i.concat(Ot.stateTerms), i.includes(e) || e === "")
          return !0;
        u = u.concat(Ot.qualifiers), l = l.concat(Ot.locations), d = d.concat(Ot.standaloneTerms), p = p.concat(Ot.qualifiedTerms);
        var m = e.split(/\s+/g);
        if (!a && (m[0].length > 8 && m[0].substr(0, 8) === "section-" && m.shift(), l.includes(m[0]) && m.shift(), u.includes(m[0]) && (m.shift(), d = []), m.length !== 1))
          return !1;
        var b = m[m.length - 1];
        return d.includes(b) || p.includes(b);
      }
      var Bl = ih;
      function oh(e, t, r) {
        return e = V(e), it(e, t, r);
      }
      var jl = oh;
      function lh(e) {
        var t, r, a;
        if (r = Kr(e), r)
          return r;
        if (e.attr("id")) {
          if (!e.actualNode)
            throw new TypeError("Cannot resolve explicit label reference for non-DOM nodes");
          var n = Fe(e.attr("id"));
          if (a = Be(e.actualNode), t = a.querySelector('label[for="' + n + '"]'), r = t && jl(t, !0), r)
            return r;
        }
        return t = Qe(e, "label"), r = t && it(t, !0), r || null;
      }
      var da = lh;
      function uh(e) {
        return e = V(e), da(e);
      }
      var sh = uh, ch = [{
        matches: [{
          nodeName: "textarea"
        }, {
          nodeName: "input",
          properties: {
            type: ["text", "password", "search", "tel", "email", "url"]
          }
        }],
        namingMethods: "labelText"
      }, {
        matches: {
          nodeName: "input",
          properties: {
            type: ["button", "submit", "reset"]
          }
        },
        namingMethods: ["valueText", "titleText", "buttonDefaultText"]
      }, {
        matches: {
          nodeName: "input",
          properties: {
            type: "image"
          }
        },
        namingMethods: ["altText", "valueText", "labelText", "titleText", "buttonDefaultText"]
      }, {
        matches: "button",
        namingMethods: "subtreeText"
      }, {
        matches: "fieldset",
        namingMethods: "fieldsetLegendText"
      }, {
        matches: "OUTPUT",
        namingMethods: "subtreeText"
      }, {
        matches: [{
          nodeName: "select"
        }, {
          nodeName: "input",
          properties: {
            type: /^(?!text|password|search|tel|email|url|button|submit|reset)/
          }
        }],
        namingMethods: "labelText"
      }, {
        matches: "summary",
        namingMethods: "subtreeText"
      }, {
        matches: "figure",
        namingMethods: ["figureText", "titleText"]
      }, {
        matches: "img",
        namingMethods: "altText"
      }, {
        matches: "table",
        namingMethods: ["tableCaptionText", "tableSummaryText"]
      }, {
        matches: ["hr", "br"],
        namingMethods: ["titleText", "singleSpace"]
      }], dh = ch;
      function Vl(e) {
        var t = he(e.actualNode), r = [];
        return e.children.forEach(function(a) {
          a.actualNode.nodeType === 3 ? t && r.push(a) : r = r.concat(Vl(a));
        }), r;
      }
      var fh = Vl, ph = /^idrefs?$/;
      function Ul(e, t, r) {
        if (e.hasAttribute) {
          if (e.nodeName.toUpperCase() === "LABEL" && e.hasAttribute("for")) {
            var a = e.getAttribute("for");
            t[a] = t[a] || [], t[a].push(e);
          }
          for (var n = 0; n < r.length; ++n) {
            var i = r[n], o = te(e.getAttribute(i) || "");
            if (!!o)
              for (var l = Ve(o), s = 0; s < l.length; ++s)
                t[l[s]] = t[l[s]] || [], t[l[s]].push(e);
          }
        }
        for (var u = 0; u < e.childNodes.length; u++)
          e.childNodes[u].nodeType === 1 && Ul(e.childNodes[u], t, r);
      }
      function mh(e) {
        e = e.actualNode || e;
        var t = Be(e);
        t = t.documentElement || t;
        var r = H.get("idRefsByRoot");
        r || (r = /* @__PURE__ */ new WeakMap(), H.set("idRefsByRoot", r));
        var a = r.get(t);
        if (!a) {
          a = {}, r.set(t, a);
          var n = Object.keys(le.ariaAttrs).filter(function(i) {
            var o = le.ariaAttrs[i].type;
            return ph.test(o);
          });
          Ul(t, a, n);
        }
        return a[e.id] || [];
      }
      var qn = mh;
      function hh(e) {
        var t = le.ariaRoles[e];
        return t ? t.type : null;
      }
      var Yt = hh;
      function vh(e, t) {
        var r = e instanceof oe ? e : V(e), a = ut(r), n = St(r);
        return Array.isArray(n.allowedRoles) ? n.allowedRoles.includes(t) : t === a ? !1 : !!n.allowedRoles;
      }
      var Hl = vh, gh = ["doc-backlink", "doc-biblioentry", "doc-biblioref", "doc-cover", "doc-endnote", "doc-glossref", "doc-noteref"], bh = {
        header: "banner",
        footer: "contentinfo"
      };
      function yh(e) {
        var t = [];
        if (!e)
          return t;
        if (e.hasAttr("role")) {
          var r = Ve(e.attr("role").toLowerCase());
          t = t.concat(r);
        }
        return t.filter(function(a) {
          return zt(a);
        });
      }
      function Dh(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, r = e instanceof oe ? e : V(e);
        if (!yn(r))
          return [];
        var a = r.props.nodeName, n = ut(r) || bh[a], i = yh(r);
        return i.filter(function(o) {
          return !wh(o, r, t, n);
        });
      }
      function wh(e, t, r, a) {
        return r && e === a ? !0 : gh.includes(e) && Yt(e) !== a ? !1 : Hl(t, e);
      }
      var zl = Dh;
      function _h(e) {
        return Object.keys(le.ariaRoles).filter(function(t) {
          return le.ariaRoles[t].type === e;
        });
      }
      var Kt = _h;
      function xh(e) {
        return Kt(e);
      }
      var Eh = xh;
      function Ah() {
        if (H.get("ariaRolesNameFromContent"))
          return H.get("ariaRolesNameFromContent");
        var e = Object.keys(le.ariaRoles).filter(function(t) {
          return le.ariaRoles[t].nameFromContent;
        });
        return H.set("ariaRolesNameFromContent", e), e;
      }
      var Bn = Ah;
      function Ch() {
        return Bn();
      }
      var Fh = Ch, $l = function(t) {
        return t === null;
      }, Ue = function(t) {
        return t !== null;
      }, ft = {};
      ft.attributes = {
        "aria-activedescendant": {
          type: "idref",
          allowEmpty: !0,
          unsupported: !1
        },
        "aria-atomic": {
          type: "boolean",
          values: ["true", "false"],
          unsupported: !1
        },
        "aria-autocomplete": {
          type: "nmtoken",
          values: ["inline", "list", "both", "none"],
          unsupported: !1
        },
        "aria-busy": {
          type: "boolean",
          values: ["true", "false"],
          unsupported: !1
        },
        "aria-checked": {
          type: "nmtoken",
          values: ["true", "false", "mixed", "undefined"],
          unsupported: !1
        },
        "aria-colcount": {
          type: "int",
          unsupported: !1
        },
        "aria-colindex": {
          type: "int",
          unsupported: !1
        },
        "aria-colspan": {
          type: "int",
          unsupported: !1
        },
        "aria-controls": {
          type: "idrefs",
          allowEmpty: !0,
          unsupported: !1
        },
        "aria-current": {
          type: "nmtoken",
          allowEmpty: !0,
          values: ["page", "step", "location", "date", "time", "true", "false"],
          unsupported: !1
        },
        "aria-describedby": {
          type: "idrefs",
          allowEmpty: !0,
          unsupported: !1
        },
        "aria-describedat": {
          unsupported: !0,
          unstandardized: !0
        },
        "aria-details": {
          type: "idref",
          allowEmpty: !0,
          unsupported: !1
        },
        "aria-disabled": {
          type: "boolean",
          values: ["true", "false"],
          unsupported: !1
        },
        "aria-dropeffect": {
          type: "nmtokens",
          values: ["copy", "move", "reference", "execute", "popup", "none"],
          unsupported: !1
        },
        "aria-errormessage": {
          type: "idref",
          allowEmpty: !0,
          unsupported: !1
        },
        "aria-expanded": {
          type: "nmtoken",
          values: ["true", "false", "undefined"],
          unsupported: !1
        },
        "aria-flowto": {
          type: "idrefs",
          allowEmpty: !0,
          unsupported: !1
        },
        "aria-grabbed": {
          type: "nmtoken",
          values: ["true", "false", "undefined"],
          unsupported: !1
        },
        "aria-haspopup": {
          type: "nmtoken",
          allowEmpty: !0,
          values: ["true", "false", "menu", "listbox", "tree", "grid", "dialog"],
          unsupported: !1
        },
        "aria-hidden": {
          type: "boolean",
          values: ["true", "false"],
          unsupported: !1
        },
        "aria-invalid": {
          type: "nmtoken",
          allowEmpty: !0,
          values: ["true", "false", "spelling", "grammar"],
          unsupported: !1
        },
        "aria-keyshortcuts": {
          type: "string",
          allowEmpty: !0,
          unsupported: !1
        },
        "aria-label": {
          type: "string",
          allowEmpty: !0,
          unsupported: !1
        },
        "aria-labelledby": {
          type: "idrefs",
          allowEmpty: !0,
          unsupported: !1
        },
        "aria-level": {
          type: "int",
          unsupported: !1
        },
        "aria-live": {
          type: "nmtoken",
          values: ["off", "polite", "assertive"],
          unsupported: !1
        },
        "aria-modal": {
          type: "boolean",
          values: ["true", "false"],
          unsupported: !1
        },
        "aria-multiline": {
          type: "boolean",
          values: ["true", "false"],
          unsupported: !1
        },
        "aria-multiselectable": {
          type: "boolean",
          values: ["true", "false"],
          unsupported: !1
        },
        "aria-orientation": {
          type: "nmtoken",
          values: ["horizontal", "vertical"],
          unsupported: !1
        },
        "aria-owns": {
          type: "idrefs",
          allowEmpty: !0,
          unsupported: !1
        },
        "aria-placeholder": {
          type: "string",
          allowEmpty: !0,
          unsupported: !1
        },
        "aria-posinset": {
          type: "int",
          unsupported: !1
        },
        "aria-pressed": {
          type: "nmtoken",
          values: ["true", "false", "mixed", "undefined"],
          unsupported: !1
        },
        "aria-readonly": {
          type: "boolean",
          values: ["true", "false"],
          unsupported: !1
        },
        "aria-relevant": {
          type: "nmtokens",
          values: ["additions", "removals", "text", "all"],
          unsupported: !1
        },
        "aria-required": {
          type: "boolean",
          values: ["true", "false"],
          unsupported: !1
        },
        "aria-roledescription": {
          type: "string",
          allowEmpty: !0,
          unsupported: !1
        },
        "aria-rowcount": {
          type: "int",
          unsupported: !1
        },
        "aria-rowindex": {
          type: "int",
          unsupported: !1
        },
        "aria-rowspan": {
          type: "int",
          unsupported: !1
        },
        "aria-selected": {
          type: "nmtoken",
          values: ["true", "false", "undefined"],
          unsupported: !1
        },
        "aria-setsize": {
          type: "int",
          unsupported: !1
        },
        "aria-sort": {
          type: "nmtoken",
          values: ["ascending", "descending", "other", "none"],
          unsupported: !1
        },
        "aria-valuemax": {
          type: "decimal",
          unsupported: !1
        },
        "aria-valuemin": {
          type: "decimal",
          unsupported: !1
        },
        "aria-valuenow": {
          type: "decimal",
          unsupported: !1
        },
        "aria-valuetext": {
          type: "string",
          unsupported: !1
        }
      }, ft.globalAttributes = ["aria-atomic", "aria-busy", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-dropeffect", "aria-flowto", "aria-grabbed", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-live", "aria-owns", "aria-relevant", "aria-roledescription"], ft.role = {
        alert: {
          type: "widget",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        alertdialog: {
          type: "widget",
          attributes: {
            allowed: ["aria-expanded", "aria-modal", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["dialog", "section"]
        },
        application: {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage", "aria-activedescendant"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["article", "audio", "embed", "iframe", "object", "section", "svg", "video"]
        },
        article: {
          type: "structure",
          attributes: {
            allowed: ["aria-expanded", "aria-posinset", "aria-setsize", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["article"],
          unsupported: !1
        },
        banner: {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["header"],
          unsupported: !1,
          allowedElements: ["section"]
        },
        button: {
          type: "widget",
          attributes: {
            allowed: ["aria-expanded", "aria-pressed", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: null,
          implicit: ["button", 'input[type="button"]', 'input[type="image"]', 'input[type="reset"]', 'input[type="submit"]', "summary"],
          unsupported: !1,
          allowedElements: [{
            nodeName: "a",
            attributes: {
              href: Ue
            }
          }]
        },
        cell: {
          type: "structure",
          attributes: {
            allowed: ["aria-colindex", "aria-colspan", "aria-rowindex", "aria-rowspan", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: ["row"],
          implicit: ["td", "th"],
          unsupported: !1
        },
        checkbox: {
          type: "widget",
          attributes: {
            allowed: ["aria-checked", "aria-required", "aria-readonly", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: null,
          implicit: ['input[type="checkbox"]'],
          unsupported: !1,
          allowedElements: ["button"]
        },
        columnheader: {
          type: "structure",
          attributes: {
            allowed: ["aria-colindex", "aria-colspan", "aria-expanded", "aria-rowindex", "aria-rowspan", "aria-required", "aria-readonly", "aria-selected", "aria-sort", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: ["row"],
          implicit: ["th"],
          unsupported: !1
        },
        combobox: {
          type: "composite",
          attributes: {
            allowed: ["aria-autocomplete", "aria-required", "aria-activedescendant", "aria-orientation", "aria-errormessage"],
            required: ["aria-expanded"]
          },
          owned: {
            all: ["listbox", "tree", "grid", "dialog", "textbox"]
          },
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: [{
            nodeName: "input",
            properties: {
              type: ["text", "search", "tel", "url", "email"]
            }
          }]
        },
        command: {
          nameFrom: ["author"],
          type: "abstract",
          unsupported: !1
        },
        complementary: {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["aside"],
          unsupported: !1,
          allowedElements: ["section"]
        },
        composite: {
          nameFrom: ["author"],
          type: "abstract",
          unsupported: !1
        },
        contentinfo: {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["footer"],
          unsupported: !1,
          allowedElements: ["section"]
        },
        definition: {
          type: "structure",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["dd", "dfn"],
          unsupported: !1
        },
        dialog: {
          type: "widget",
          attributes: {
            allowed: ["aria-expanded", "aria-modal", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["dialog"],
          unsupported: !1,
          allowedElements: ["section"]
        },
        directory: {
          type: "structure",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: null,
          unsupported: !1,
          allowedElements: ["ol", "ul"]
        },
        document: {
          type: "structure",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["body"],
          unsupported: !1,
          allowedElements: ["article", "embed", "iframe", "object", "section", "svg"]
        },
        "doc-abstract": {
          type: "section",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-acknowledgments": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-afterword": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-appendix": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-backlink": {
          type: "link",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: null,
          unsupported: !1,
          allowedElements: [{
            nodeName: "a",
            attributes: {
              href: Ue
            }
          }]
        },
        "doc-biblioentry": {
          type: "listitem",
          attributes: {
            allowed: ["aria-expanded", "aria-level", "aria-posinset", "aria-setsize", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: ["doc-bibliography"],
          unsupported: !1,
          allowedElements: ["li"]
        },
        "doc-bibliography": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: {
            one: ["doc-biblioentry"]
          },
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-biblioref": {
          type: "link",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: null,
          unsupported: !1,
          allowedElements: [{
            nodeName: "a",
            attributes: {
              href: Ue
            }
          }]
        },
        "doc-chapter": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-colophon": {
          type: "section",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-conclusion": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-cover": {
          type: "img",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1
        },
        "doc-credit": {
          type: "section",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-credits": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-dedication": {
          type: "section",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-endnote": {
          type: "listitem",
          attributes: {
            allowed: ["aria-expanded", "aria-level", "aria-posinset", "aria-setsize", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: ["doc-endnotes"],
          unsupported: !1,
          allowedElements: ["li"]
        },
        "doc-endnotes": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: {
            one: ["doc-endnote"]
          },
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-epigraph": {
          type: "section",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1
        },
        "doc-epilogue": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-errata": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-example": {
          type: "section",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["aside", "section"]
        },
        "doc-footnote": {
          type: "section",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["aside", "footer", "header"]
        },
        "doc-foreword": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-glossary": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: ["term", "definition"],
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["dl"]
        },
        "doc-glossref": {
          type: "link",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author", "contents"],
          context: null,
          unsupported: !1,
          allowedElements: [{
            nodeName: "a",
            attributes: {
              href: Ue
            }
          }]
        },
        "doc-index": {
          type: "navigation",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["nav", "section"]
        },
        "doc-introduction": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-noteref": {
          type: "link",
          attributes: {
            allowed: ["aria-expanded"]
          },
          owned: null,
          namefrom: ["author", "contents"],
          context: null,
          unsupported: !1,
          allowedElements: [{
            nodeName: "a",
            attributes: {
              href: Ue
            }
          }]
        },
        "doc-notice": {
          type: "note",
          attributes: {
            allowed: ["aria-expanded"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-pagebreak": {
          type: "separator",
          attributes: {
            allowed: ["aria-expanded"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["hr"]
        },
        "doc-pagelist": {
          type: "navigation",
          attributes: {
            allowed: ["aria-expanded"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["nav", "section"]
        },
        "doc-part": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-preface": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-prologue": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-pullquote": {
          type: "none",
          attributes: {
            allowed: ["aria-expanded"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["aside", "section"]
        },
        "doc-qna": {
          type: "section",
          attributes: {
            allowed: ["aria-expanded"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-subtitle": {
          type: "sectionhead",
          attributes: {
            allowed: ["aria-expanded"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: {
            nodeName: ["h1", "h2", "h3", "h4", "h5", "h6"]
          }
        },
        "doc-tip": {
          type: "note",
          attributes: {
            allowed: ["aria-expanded"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["aside"]
        },
        "doc-toc": {
          type: "navigation",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["nav", "section"]
        },
        feed: {
          type: "structure",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: {
            one: ["article"]
          },
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["article", "aside", "section"]
        },
        figure: {
          type: "structure",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: null,
          implicit: ["figure"],
          unsupported: !1
        },
        form: {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["form"],
          unsupported: !1
        },
        grid: {
          type: "composite",
          attributes: {
            allowed: ["aria-activedescendant", "aria-expanded", "aria-colcount", "aria-level", "aria-multiselectable", "aria-readonly", "aria-rowcount", "aria-errormessage"]
          },
          owned: {
            one: ["rowgroup", "row"]
          },
          nameFrom: ["author"],
          context: null,
          implicit: ["table"],
          unsupported: !1
        },
        gridcell: {
          type: "widget",
          attributes: {
            allowed: ["aria-colindex", "aria-colspan", "aria-expanded", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-readonly", "aria-required", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: ["row"],
          implicit: ["td", "th"],
          unsupported: !1
        },
        group: {
          type: "structure",
          attributes: {
            allowed: ["aria-activedescendant", "aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["details", "optgroup"],
          unsupported: !1,
          allowedElements: ["dl", "figcaption", "fieldset", "figure", "footer", "header", "ol", "ul"]
        },
        heading: {
          type: "structure",
          attributes: {
            required: ["aria-level"],
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: null,
          implicit: ["h1", "h2", "h3", "h4", "h5", "h6"],
          unsupported: !1
        },
        img: {
          type: "structure",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["img"],
          unsupported: !1,
          allowedElements: ["embed", "iframe", "object", "svg"]
        },
        input: {
          nameFrom: ["author"],
          type: "abstract",
          unsupported: !1
        },
        landmark: {
          nameFrom: ["author"],
          type: "abstract",
          unsupported: !1
        },
        link: {
          type: "widget",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: null,
          implicit: ["a[href]", "area[href]"],
          unsupported: !1,
          allowedElements: ["button", {
            nodeName: "input",
            properties: {
              type: ["image", "button"]
            }
          }]
        },
        list: {
          type: "structure",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: {
            all: ["listitem"]
          },
          nameFrom: ["author"],
          context: null,
          implicit: ["ol", "ul", "dl"],
          unsupported: !1
        },
        listbox: {
          type: "composite",
          attributes: {
            allowed: ["aria-activedescendant", "aria-multiselectable", "aria-readonly", "aria-required", "aria-expanded", "aria-orientation", "aria-errormessage"]
          },
          owned: {
            all: ["option"]
          },
          nameFrom: ["author"],
          context: null,
          implicit: ["select"],
          unsupported: !1,
          allowedElements: ["ol", "ul"]
        },
        listitem: {
          type: "structure",
          attributes: {
            allowed: ["aria-level", "aria-posinset", "aria-setsize", "aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: ["list"],
          implicit: ["li", "dt"],
          unsupported: !1
        },
        log: {
          type: "widget",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        main: {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["main"],
          unsupported: !1,
          allowedElements: ["article", "section"]
        },
        marquee: {
          type: "widget",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        math: {
          type: "structure",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["math"],
          unsupported: !1
        },
        menu: {
          type: "composite",
          attributes: {
            allowed: ["aria-activedescendant", "aria-expanded", "aria-orientation", "aria-errormessage"]
          },
          owned: {
            one: ["menuitem", "menuitemradio", "menuitemcheckbox"]
          },
          nameFrom: ["author"],
          context: null,
          implicit: ['menu[type="context"]'],
          unsupported: !1,
          allowedElements: ["ol", "ul"]
        },
        menubar: {
          type: "composite",
          attributes: {
            allowed: ["aria-activedescendant", "aria-expanded", "aria-orientation", "aria-errormessage"]
          },
          owned: {
            one: ["menuitem", "menuitemradio", "menuitemcheckbox"]
          },
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["ol", "ul"]
        },
        menuitem: {
          type: "widget",
          attributes: {
            allowed: ["aria-posinset", "aria-setsize", "aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: ["menu", "menubar"],
          implicit: ['menuitem[type="command"]'],
          unsupported: !1,
          allowedElements: ["button", "li", {
            nodeName: "iput",
            properties: {
              type: ["image", "button"]
            }
          }, {
            nodeName: "a",
            attributes: {
              href: Ue
            }
          }]
        },
        menuitemcheckbox: {
          type: "widget",
          attributes: {
            allowed: ["aria-checked", "aria-posinset", "aria-setsize", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: ["menu", "menubar"],
          implicit: ['menuitem[type="checkbox"]'],
          unsupported: !1,
          allowedElements: [{
            nodeName: ["button", "li"]
          }, {
            nodeName: "input",
            properties: {
              type: ["checkbox", "image", "button"]
            }
          }, {
            nodeName: "a",
            attributes: {
              href: Ue
            }
          }]
        },
        menuitemradio: {
          type: "widget",
          attributes: {
            allowed: ["aria-checked", "aria-selected", "aria-posinset", "aria-setsize", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: ["menu", "menubar"],
          implicit: ['menuitem[type="radio"]'],
          unsupported: !1,
          allowedElements: [{
            nodeName: ["button", "li"]
          }, {
            nodeName: "input",
            properties: {
              type: ["image", "button", "radio"]
            }
          }, {
            nodeName: "a",
            attributes: {
              href: Ue
            }
          }]
        },
        navigation: {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["nav"],
          unsupported: !1,
          allowedElements: ["section"]
        },
        none: {
          type: "structure",
          attributes: null,
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: [{
            nodeName: ["article", "aside", "dl", "embed", "figcaption", "fieldset", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hr", "iframe", "li", "ol", "section", "ul"]
          }, {
            nodeName: "img",
            attributes: {
              alt: Ue
            }
          }]
        },
        note: {
          type: "structure",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["aside"]
        },
        option: {
          type: "widget",
          attributes: {
            allowed: ["aria-selected", "aria-posinset", "aria-setsize", "aria-checked", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: ["listbox"],
          implicit: ["option"],
          unsupported: !1,
          allowedElements: [{
            nodeName: ["button", "li"]
          }, {
            nodeName: "input",
            properties: {
              type: ["checkbox", "button"]
            }
          }, {
            nodeName: "a",
            attributes: {
              href: Ue
            }
          }]
        },
        presentation: {
          type: "structure",
          attributes: null,
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: [{
            nodeName: ["article", "aside", "dl", "embed", "figcaption", "fieldset", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hr", "iframe", "li", "ol", "section", "ul"]
          }, {
            nodeName: "img",
            attributes: {
              alt: Ue
            }
          }]
        },
        progressbar: {
          type: "widget",
          attributes: {
            allowed: ["aria-valuetext", "aria-valuenow", "aria-valuemax", "aria-valuemin", "aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["progress"],
          unsupported: !1
        },
        radio: {
          type: "widget",
          attributes: {
            allowed: ["aria-selected", "aria-posinset", "aria-setsize", "aria-required", "aria-errormessage", "aria-checked"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: null,
          implicit: ['input[type="radio"]'],
          unsupported: !1,
          allowedElements: [{
            nodeName: ["button", "li"]
          }, {
            nodeName: "input",
            properties: {
              type: ["image", "button"]
            }
          }]
        },
        radiogroup: {
          type: "composite",
          attributes: {
            allowed: ["aria-activedescendant", "aria-required", "aria-expanded", "aria-readonly", "aria-errormessage", "aria-orientation"]
          },
          owned: {
            all: ["radio"]
          },
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: {
            nodeName: ["ol", "ul", "fieldset"]
          }
        },
        range: {
          nameFrom: ["author"],
          type: "abstract",
          unsupported: !1
        },
        region: {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["section[aria-label]", "section[aria-labelledby]", "section[title]"],
          unsupported: !1,
          allowedElements: {
            nodeName: ["article", "aside"]
          }
        },
        roletype: {
          type: "abstract",
          unsupported: !1
        },
        row: {
          type: "structure",
          attributes: {
            allowed: ["aria-activedescendant", "aria-colindex", "aria-expanded", "aria-level", "aria-selected", "aria-rowindex", "aria-errormessage"]
          },
          owned: {
            one: ["cell", "columnheader", "rowheader", "gridcell"]
          },
          nameFrom: ["author", "contents"],
          context: ["rowgroup", "grid", "treegrid", "table"],
          implicit: ["tr"],
          unsupported: !1
        },
        rowgroup: {
          type: "structure",
          attributes: {
            allowed: ["aria-activedescendant", "aria-expanded", "aria-errormessage"]
          },
          owned: {
            all: ["row"]
          },
          nameFrom: ["author", "contents"],
          context: ["grid", "table", "treegrid"],
          implicit: ["tbody", "thead", "tfoot"],
          unsupported: !1
        },
        rowheader: {
          type: "structure",
          attributes: {
            allowed: ["aria-colindex", "aria-colspan", "aria-expanded", "aria-rowindex", "aria-rowspan", "aria-required", "aria-readonly", "aria-selected", "aria-sort", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: ["row"],
          implicit: ["th"],
          unsupported: !1
        },
        scrollbar: {
          type: "widget",
          attributes: {
            required: ["aria-controls", "aria-valuenow"],
            allowed: ["aria-valuetext", "aria-orientation", "aria-errormessage", "aria-valuemax", "aria-valuemin"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1
        },
        search: {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: {
            nodeName: ["aside", "form", "section"]
          }
        },
        searchbox: {
          type: "widget",
          attributes: {
            allowed: ["aria-activedescendant", "aria-autocomplete", "aria-multiline", "aria-readonly", "aria-required", "aria-placeholder", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ['input[type="search"]'],
          unsupported: !1,
          allowedElements: {
            nodeName: "input",
            properties: {
              type: "text"
            }
          }
        },
        section: {
          nameFrom: ["author", "contents"],
          type: "abstract",
          unsupported: !1
        },
        sectionhead: {
          nameFrom: ["author", "contents"],
          type: "abstract",
          unsupported: !1
        },
        select: {
          nameFrom: ["author"],
          type: "abstract",
          unsupported: !1
        },
        separator: {
          type: "structure",
          attributes: {
            allowed: ["aria-expanded", "aria-orientation", "aria-valuenow", "aria-valuemax", "aria-valuemin", "aria-valuetext", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["hr"],
          unsupported: !1,
          allowedElements: ["li"]
        },
        slider: {
          type: "widget",
          attributes: {
            allowed: ["aria-valuetext", "aria-orientation", "aria-readonly", "aria-errormessage", "aria-valuemax", "aria-valuemin"],
            required: ["aria-valuenow"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ['input[type="range"]'],
          unsupported: !1
        },
        spinbutton: {
          type: "widget",
          attributes: {
            allowed: ["aria-valuetext", "aria-required", "aria-readonly", "aria-errormessage", "aria-valuemax", "aria-valuemin"],
            required: ["aria-valuenow"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ['input[type="number"]'],
          unsupported: !1,
          allowedElements: {
            nodeName: "input",
            properties: {
              type: ["text", "tel"]
            }
          }
        },
        status: {
          type: "widget",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["output"],
          unsupported: !1,
          allowedElements: ["section"]
        },
        structure: {
          type: "abstract",
          unsupported: !1
        },
        switch: {
          type: "widget",
          attributes: {
            allowed: ["aria-errormessage"],
            required: ["aria-checked"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: null,
          unsupported: !1,
          allowedElements: ["button", {
            nodeName: "input",
            properties: {
              type: ["checkbox", "image", "button"]
            }
          }, {
            nodeName: "a",
            attributes: {
              href: Ue
            }
          }]
        },
        tab: {
          type: "widget",
          attributes: {
            allowed: ["aria-selected", "aria-expanded", "aria-setsize", "aria-posinset", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: ["tablist"],
          unsupported: !1,
          allowedElements: [{
            nodeName: ["button", "h1", "h2", "h3", "h4", "h5", "h6", "li"]
          }, {
            nodeName: "input",
            properties: {
              type: "button"
            }
          }, {
            nodeName: "a",
            attributes: {
              href: Ue
            }
          }]
        },
        table: {
          type: "structure",
          attributes: {
            allowed: ["aria-colcount", "aria-rowcount", "aria-errormessage"]
          },
          owned: {
            one: ["rowgroup", "row"]
          },
          nameFrom: ["author", "contents"],
          context: null,
          implicit: ["table"],
          unsupported: !1
        },
        tablist: {
          type: "composite",
          attributes: {
            allowed: ["aria-activedescendant", "aria-expanded", "aria-level", "aria-multiselectable", "aria-orientation", "aria-errormessage"]
          },
          owned: {
            all: ["tab"]
          },
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["ol", "ul"]
        },
        tabpanel: {
          type: "widget",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        term: {
          type: "structure",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: null,
          implicit: ["dt"],
          unsupported: !1
        },
        textbox: {
          type: "widget",
          attributes: {
            allowed: ["aria-activedescendant", "aria-autocomplete", "aria-multiline", "aria-readonly", "aria-required", "aria-placeholder", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ['input[type="text"]', 'input[type="email"]', 'input[type="password"]', 'input[type="tel"]', 'input[type="url"]', "input:not([type])", "textarea"],
          unsupported: !1
        },
        timer: {
          type: "widget",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1
        },
        toolbar: {
          type: "structure",
          attributes: {
            allowed: ["aria-activedescendant", "aria-expanded", "aria-orientation", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ['menu[type="toolbar"]'],
          unsupported: !1,
          allowedElements: ["ol", "ul"]
        },
        tooltip: {
          type: "structure",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: null,
          unsupported: !1
        },
        tree: {
          type: "composite",
          attributes: {
            allowed: ["aria-activedescendant", "aria-multiselectable", "aria-required", "aria-expanded", "aria-orientation", "aria-errormessage"]
          },
          owned: {
            all: ["treeitem"]
          },
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["ol", "ul"]
        },
        treegrid: {
          type: "composite",
          attributes: {
            allowed: ["aria-activedescendant", "aria-colcount", "aria-expanded", "aria-level", "aria-multiselectable", "aria-readonly", "aria-required", "aria-rowcount", "aria-orientation", "aria-errormessage"]
          },
          owned: {
            one: ["rowgroup", "row"]
          },
          nameFrom: ["author"],
          context: null,
          unsupported: !1
        },
        treeitem: {
          type: "widget",
          attributes: {
            allowed: ["aria-checked", "aria-selected", "aria-expanded", "aria-level", "aria-posinset", "aria-setsize", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: ["group", "tree"],
          unsupported: !1,
          allowedElements: ["li", {
            nodeName: "a",
            attributes: {
              href: Ue
            }
          }]
        },
        widget: {
          type: "abstract",
          unsupported: !1
        },
        window: {
          nameFrom: ["author"],
          type: "abstract",
          unsupported: !1
        }
      }, ft.implicitHtmlRole = Sn, ft.elementsAllowedNoRole = [{
        nodeName: ["base", "body", "caption", "col", "colgroup", "datalist", "dd", "details", "dt", "head", "html", "keygen", "label", "legend", "main", "map", "math", "meta", "meter", "noscript", "optgroup", "param", "picture", "progress", "script", "source", "style", "template", "textarea", "title", "track"]
      }, {
        nodeName: "area",
        attributes: {
          href: Ue
        }
      }, {
        nodeName: "input",
        properties: {
          type: ["color", "data", "datatime", "file", "hidden", "month", "number", "password", "range", "reset", "submit", "time", "week"]
        }
      }, {
        nodeName: "link",
        attributes: {
          href: Ue
        }
      }, {
        nodeName: "menu",
        attributes: {
          type: "context"
        }
      }, {
        nodeName: "menuitem",
        attributes: {
          type: ["command", "checkbox", "radio"]
        }
      }, {
        nodeName: "select",
        condition: function(t) {
          return t instanceof h.AbstractVirtualNode || (t = h.utils.getNodeFromTree(t)), Number(t.attr("size")) > 1;
        },
        properties: {
          multiple: !0
        }
      }, {
        nodeName: ["clippath", "cursor", "defs", "desc", "feblend", "fecolormatrix", "fecomponenttransfer", "fecomposite", "feconvolvematrix", "fediffuselighting", "fedisplacementmap", "fedistantlight", "fedropshadow", "feflood", "fefunca", "fefuncb", "fefuncg", "fefuncr", "fegaussianblur", "feimage", "femerge", "femergenode", "femorphology", "feoffset", "fepointlight", "fespecularlighting", "fespotlight", "fetile", "feturbulence", "filter", "hatch", "hatchpath", "lineargradient", "marker", "mask", "meshgradient", "meshpatch", "meshrow", "metadata", "mpath", "pattern", "radialgradient", "solidcolor", "stop", "switch", "view"]
      }], ft.elementsAllowedAnyRole = [{
        nodeName: "a",
        attributes: {
          href: $l
        }
      }, {
        nodeName: "img",
        attributes: {
          alt: $l
        }
      }, {
        nodeName: ["abbr", "address", "canvas", "div", "p", "pre", "blockquote", "ins", "del", "output", "span", "table", "tbody", "thead", "tfoot", "td", "em", "strong", "small", "s", "cite", "q", "dfn", "abbr", "time", "code", "var", "samp", "kbd", "sub", "sup", "i", "b", "u", "mark", "ruby", "rt", "rp", "bdi", "bdo", "br", "wbr", "th", "tr"]
      }], ft.evaluateRoleForElement = {
        A: function(t) {
          var r = t.node, a = t.out;
          return r.namespaceURI === "http://www.w3.org/2000/svg" ? !0 : r.href.length ? a : !0;
        },
        AREA: function(t) {
          var r = t.node;
          return !r.href;
        },
        BUTTON: function(t) {
          var r = t.node, a = t.role, n = t.out;
          return r.getAttribute("type") === "menu" ? a === "menuitem" : n;
        },
        IMG: function(t) {
          var r = t.node, a = t.role, n = t.out;
          switch (r.alt) {
            case null:
              return n;
            case "":
              return a === "presentation" || a === "none";
            default:
              return a !== "presentation" && a !== "none";
          }
        },
        INPUT: function(t) {
          var r = t.node, a = t.role, n = t.out;
          switch (r.type) {
            case "button":
            case "image":
              return n;
            case "checkbox":
              return a === "button" && r.hasAttribute("aria-pressed") ? !0 : n;
            case "radio":
              return a === "menuitemradio";
            case "text":
              return a === "combobox" || a === "searchbox" || a === "spinbutton";
            case "tel":
              return a === "combobox" || a === "spinbutton";
            case "url":
            case "search":
            case "email":
              return a === "combobox";
            default:
              return !1;
          }
        },
        LI: function(t) {
          var r = t.node, a = t.out, n = h.utils.matchesSelector(r, "ol li, ul li");
          return n ? a : !0;
        },
        MENU: function(t) {
          var r = t.node;
          return r.getAttribute("type") !== "context";
        },
        OPTION: function(t) {
          var r = t.node, a = h.utils.matchesSelector(r, "select > option, datalist > option, optgroup > option");
          return !a;
        },
        SELECT: function(t) {
          var r = t.node, a = t.role;
          return !r.multiple && r.size <= 1 && a === "menu";
        },
        SVG: function(t) {
          var r = t.node, a = t.out;
          return r.parentNode && r.parentNode.namespaceURI === "http://www.w3.org/2000/svg" ? !0 : a;
        }
      }, ft.rolesOfType = {
        widget: ["button", "checkbox", "dialog", "gridcell", "link", "log", "marquee", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "progressbar", "radio", "scrollbar", "searchbox", "slider", "spinbutton", "status", "switch", "tab", "tabpanel", "textbox", "timer", "tooltip", "tree", "treeitem"]
      };
      var Wl = ft;
      function kh(e) {
        var t = null, r = Wl.role[e];
        return r && r.implicit && (t = st(r.implicit)), t;
      }
      var Rh = kh;
      function Th(e) {
        return !!qn(e).length;
      }
      var fa = Th;
      function Sh(e) {
        return e = V(e), Kr(e);
      }
      var Gl = Sh;
      function Oh(e) {
        var t = le.ariaRoles[e];
        return !t || !Array.isArray(t.requiredAttrs) ? [] : ie(t.requiredAttrs);
      }
      var Yl = Oh;
      function Nh(e) {
        var t = le.ariaRoles[e];
        return !t || !Array.isArray(t.requiredContext) ? null : ie(t.requiredContext);
      }
      var jn = Nh;
      function Ih(e) {
        var t = le.ariaRoles[e];
        return !t || !Array.isArray(t.requiredOwned) ? null : ie(t.requiredOwned);
      }
      var Vn = Ih;
      function Ph(e, t) {
        e = e instanceof oe ? e : V(e);
        var r, a, n = e.attr(t), i = le.ariaAttrs[t];
        if (!i || i.allowEmpty && (!n || n.trim() === ""))
          return !0;
        switch (i.type) {
          case "boolean":
            return ["true", "false"].includes(n.toLowerCase());
          case "nmtoken":
            return typeof n == "string" && i.values.includes(n.toLowerCase());
          case "nmtokens":
            return a = Ve(n), a.reduce(function(s, u) {
              return s && i.values.includes(u);
            }, a.length !== 0);
          case "idref":
            try {
              var o = Be(e.actualNode);
              return !!(n && o.getElementById(n));
            } catch {
              throw new TypeError("Cannot resolve id references for partial DOM");
            }
          case "idrefs":
            return nt(e, t).some(function(s) {
              return !!s;
            });
          case "string":
            return n.trim() !== "";
          case "decimal":
            return r = n.match(/^[-+]?([0-9]*)\.?([0-9]*)$/), !!(r && (r[1] || r[2]));
          case "int":
            var l = typeof i.minValue < "u" ? i.minValue : -1 / 0;
            return /^[-+]?[0-9]+$/.test(n) && parseInt(n) >= l;
        }
      }
      var Kl = Ph;
      function Mh(e) {
        var t = le.ariaAttrs[e];
        return !!t;
      }
      var Dr = Mh;
      function Lh(e, t, r) {
        var a = Ve(r.attr("role")).filter(function(n) {
          return Yt(n) === "abstract";
        });
        return a.length > 0 ? (this.data(a), !0) : !1;
      }
      var qh = Lh;
      function Bh(e, t, r) {
        var a = [], n = ce(r), i = r.attrNames, o = il(n);
        Array.isArray(t[n]) && (o = pr(t[n].concat(o)));
        var l = H.get("aria-allowed-attr-table");
        l || (l = /* @__PURE__ */ new WeakMap(), H.set("aria-allowed-attr-table", l));
        function s() {
          if (r.parent && n === "row") {
            var m = Qe(r, 'table, [role="treegrid"], [role="table"], [role="grid"]'), b = l.get(m);
            if (m && !b && (b = ce(m), l.set(m, b)), ["table", "grid"].includes(b) && n === "row")
              return !0;
          }
        }
        var u = Array.isArray(t.validTreeRowAttrs) ? t.validTreeRowAttrs : [], c = {};
        if (u.forEach(function(m) {
          c[m] = s;
        }), o)
          for (var d = 0; d < i.length; d++) {
            var f, p = i[d];
            (Dr(p) && (f = c[p]) !== null && f !== void 0 && f.call(c) || Dr(p) && !o.includes(p)) && a.push(p + '="' + r.attr(p) + '"');
          }
        return a.length ? (this.data(a), !yn(r) && !n && !je(r) ? void 0 : !1) : !0;
      }
      var jh = Bh;
      function Vh(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, a = t.allowImplicit, n = a === void 0 ? !0 : a, i = t.ignoredTags, o = i === void 0 ? [] : i, l = r.props.nodeName;
        if (o.map(function(u) {
          return u.toLowerCase();
        }).includes(l))
          return !0;
        var s = zl(r, n);
        return s.length ? (this.data(s), he(r, !0) ? !1 : void 0) : !0;
      }
      var Uh = Vh;
      function Hh(e, t, r) {
        t = Array.isArray(t) ? t : [];
        var a = r.attr("aria-errormessage"), n = r.hasAttr("aria-errormessage"), i = r.attr("aria-invalid"), o = r.hasAttr("aria-invalid");
        if (!o || i === "false")
          return !0;
        function l(s) {
          if (s.trim() === "")
            return le.ariaAttrs["aria-errormessage"].allowEmpty;
          var u;
          try {
            u = s && nt(r, "aria-errormessage")[0];
          } catch {
            this.data({
              messageKey: "idrefs",
              values: Ve(s)
            });
            return;
          }
          if (u)
            return he(u, !0) ? u.getAttribute("role") === "alert" || u.getAttribute("aria-live") === "assertive" || u.getAttribute("aria-live") === "polite" || Ve(r.attr("aria-describedby")).indexOf(s) > -1 : (this.data({
              messageKey: "hidden",
              values: Ve(s)
            }), !1);
        }
        return t.indexOf(a) === -1 && n ? (this.data(Ve(a)), l.call(this, a)) : !0;
      }
      var zh = Hh;
      function $h(e, t, r) {
        return r.attr("aria-hidden") !== "true";
      }
      var Wh = $h;
      function Gh(e, t, r) {
        var a = r.attr("aria-level"), n = parseInt(a, 10);
        if (!(n > 6))
          return !0;
      }
      var Yh = Gh;
      function Kh(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, a = (t == null ? void 0 : t.elementsAllowedAriaLabel) || [], n = r.props.nodeName, i = ce(r, {
          chromium: !0
        }), o = Xh(i, n, a), l = o.filter(function(c) {
          return r.attrNames.includes(c) ? te(r.attr(c)) !== "" : !1;
        });
        if (l.length === 0)
          return !1;
        var s = r.hasAttr("role") ? "hasRole" : "noRole";
        s += l.length > 1 ? "Plural" : "Singular", this.data({
          role: i,
          nodeName: n,
          messageKey: s,
          prohibited: l
        });
        var u = Gt(r, {
          subtreeDescendant: !0
        });
        if (te(u) === "")
          return !0;
      }
      function Xh(e, t, r) {
        var a = le.ariaRoles[e];
        return a ? a.prohibitedAttrs || [] : !!e || r.includes(t) ? [] : ["aria-label", "aria-labelledby"];
      }
      var Xl = {};
      Te(Xl, {
        getAriaRolesByType: function() {
          return Kt;
        },
        getAriaRolesSupportingNameFromContent: function() {
          return Bn;
        },
        getElementSpec: function() {
          return St;
        },
        getElementsByContentType: function() {
          return Rn;
        },
        getGlobalAriaAttrs: function() {
          return Ht;
        },
        implicitHtmlRoles: function() {
          return Sn;
        }
      });
      function Jh(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, a = [], n = r.attrNames, i = be(r);
        if (n.length) {
          var o = Yl(i), l = St(r);
          if (Array.isArray(t[i]) && (o = pr(t[i], o)), i && o)
            for (var s = 0, u = o.length; s < u; s++) {
              var c = o[s];
              !r.attr(c) && !(l.implicitAttrs && typeof l.implicitAttrs[c] < "u") && a.push(c);
            }
        }
        var d = i === "combobox" && a.includes("aria-controls");
        return d && (r.hasAttr("aria-owns") || r.attr("aria-expanded") !== "true") && a.splice(a.indexOf("aria-controls", 1)), a.length ? (this.data(a), !1) : !0;
      }
      var Qh = Jh;
      function Zh(e, t) {
        for (var r = [], a = vr(e), n = function(l) {
          var s = a[l], u = ce(s, {
            noPresentational: !0
          });
          !u || ["group", "rowgroup"].includes(u) && t.some(function(c) {
            return c === u;
          }) ? a.push.apply(a, ie(s.children)) : u && r.push(u);
        }, i = 0; i < a.length; i++)
          n(i);
        return r;
      }
      function ev(e, t, r, a) {
        for (var n = 0; n < a.length; n++) {
          var i = a[n];
          if (r.includes(i))
            return r = r.filter(function(o) {
              return o !== i;
            }), null;
        }
        return r.length ? r : null;
      }
      function tv(e, t, r) {
        var a = t && Array.isArray(t.reviewEmpty) ? t.reviewEmpty : [], n = be(r, {
          dpub: !0
        }), i = Vn(n);
        if (i === null)
          return !0;
        var o = Zh(r, i), l = ev(r, n, i, o);
        if (!l)
          return !0;
        if (this.data(l), !(a.includes(n) && !cr(r, !1, !0) && !o.length && (!r.hasAttr("aria-owns") || !nt(e, "aria-owns").length)))
          return !1;
      }
      var rv = tv;
      function Jl(e, t, r, a) {
        var n = be(e);
        if (r || (r = jn(n)), !r)
          return null;
        for (var i = a ? e : e.parent; i; ) {
          var o = ce(i);
          if (r.includes("group") && o === "group") {
            t.includes(n) && r.push(n), r = r.filter(function(l) {
              return l !== "group";
            }), i = i.parent;
            continue;
          }
          if (r.includes(o))
            return null;
          if (o && !["presentation", "none"].includes(o))
            return r;
          i = i.parent;
        }
        return r;
      }
      function av(e) {
        for (var t = [], r = null; e; ) {
          if (e.getAttribute("id")) {
            var a = Fe(e.getAttribute("id")), n = Be(e);
            r = n.querySelector("[aria-owns~=".concat(a, "]")), r && t.push(r);
          }
          e = e.parentElement;
        }
        return t.length ? t : null;
      }
      function nv(e, t, r) {
        var a = t && Array.isArray(t.ownGroupRoles) ? t.ownGroupRoles : [], n = Jl(r, a);
        if (!n)
          return !0;
        var i = av(e);
        if (i) {
          for (var o = 0, l = i.length; o < l; o++)
            if (n = Jl(V(i[o]), a, n, !0), !n)
              return !0;
        }
        return this.data(n), !1;
      }
      var iv = nv;
      function ov(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = ce(e), a = t.supportedRoles || [];
        if (a.includes(r))
          return !0;
        if (!(r && r !== "presentation" && r !== "none"))
          return !1;
      }
      var lv = ov;
      function uv(e, t, r) {
        var a = r.attrNames.filter(function(n) {
          var i = le.ariaAttrs[n];
          if (!Dr(n))
            return !1;
          var o = i.unsupported;
          return P(o) !== "object" ? !!o : !hr(e, o.exceptions);
        });
        return a.length ? (this.data(a), !0) : !1;
      }
      var sv = uv;
      function cv(e, t, r) {
        t = Array.isArray(t.value) ? t.value : [];
        var a = [], n = /^aria-/;
        return r.attrNames.forEach(function(i) {
          t.indexOf(i) === -1 && n.test(i) && !Dr(i) && a.push(i);
        }), a.length ? (this.data(a), !1) : !0;
      }
      var dv = cv;
      function fv(e, t, r) {
        t = Array.isArray(t.value) ? t.value : [];
        var a = "", n = "", i = [], o = /^aria-/, l = ["aria-errormessage"], s = {
          "aria-controls": function() {
            return r.attr("aria-expanded") !== "false" && r.attr("aria-selected") !== "false";
          },
          "aria-current": function(c) {
            c || (a = 'aria-current="'.concat(r.attr("aria-current"), '"'), n = "ariaCurrent");
          },
          "aria-owns": function() {
            return r.attr("aria-expanded") !== "false";
          },
          "aria-describedby": function(c) {
            c || (a = 'aria-describedby="'.concat(r.attr("aria-describedby"), '"'), n = h._tree && h._tree[0]._hasShadowRoot ? "noIdShadow" : "noId");
          },
          "aria-labelledby": function(c) {
            c || (a = 'aria-labelledby="'.concat(r.attr("aria-labelledby"), '"'), n = h._tree && h._tree[0]._hasShadowRoot ? "noIdShadow" : "noId");
          }
        };
        if (r.attrNames.forEach(function(u) {
          if (!(l.includes(u) || t.includes(u) || !o.test(u))) {
            var c, d = r.attr(u);
            try {
              c = Kl(r, u);
            } catch {
              a = "".concat(u, '="').concat(d, '"'), n = "idrefs";
            }
            (s[u] ? s[u](c) : !0) && !c && i.push("".concat(u, '="').concat(d, '"'));
          }
        }), a) {
          this.data({
            messageKey: n,
            needsReview: a
          });
          return;
        }
        return i.length ? (this.data(i), !1) : !0;
      }
      var pv = fv;
      function mv(e, t, r) {
        var a = ce(r, {
          dpub: !0,
          fallback: !0
        }), n = le.ariaRoles[a];
        return n != null && n.deprecated ? (this.data(a), !0) : !1;
      }
      function hv(e, t) {
        var r = ut(e);
        return !r && t.length === 2 && t.includes("none") && t.includes("presentation");
      }
      function vv(e, t, r) {
        var a = Ve(r.attr("role"));
        return a.length <= 1 ? !1 : hv(r, a) ? void 0 : !0;
      }
      var gv = vv;
      function bv(e, t, r) {
        var a = Ht().filter(function(n) {
          return r.hasAttr(n);
        });
        return this.data(a), a.length > 0;
      }
      var yv = bv;
      function Dv(e) {
        var t = e.getAttribute("role");
        if (t === null)
          return !1;
        var r = Yt(t);
        return r === "widget" || r === "composite";
      }
      var wv = Dv;
      function _v(e, t, r) {
        var a = Ve(r.attr("role")), n = a.every(function(i) {
          return !zt(i, {
            allowAbstract: !0
          });
        });
        return n ? (this.data(a), !0) : !1;
      }
      var xv = _v;
      function Ev(e, t, r) {
        return je(r);
      }
      var Av = Ev;
      function Cv(e, t, r) {
        var a = ce(r, {
          noImplicit: !0
        });
        this.data(a);
        var n, i;
        try {
          n = te(Nn(r)).toLowerCase(), i = te(ze(r)).toLowerCase();
        } catch {
          return;
        }
        if (!i && !n)
          return !1;
        if (!(!i && n) && !!i.includes(n))
          return !1;
      }
      var Fv = Cv;
      function kv(e, t, r) {
        return kn(ce(r));
      }
      var Rv = kv, Tv = {
        ARTICLE: !0,
        ASIDE: !0,
        NAV: !0,
        SECTION: !0
      }, Sv = {
        application: !0,
        banner: !1,
        complementary: !0,
        contentinfo: !0,
        form: !0,
        main: !0,
        navigation: !0,
        region: !0,
        search: !1
      };
      function Ov(e) {
        var t = e.nodeName.toUpperCase();
        return Tv[t] || !1;
      }
      function Nv(e, t) {
        var r = be(e);
        return r && (Sv[r] || t.roles.includes(r)) || !1;
      }
      function Iv(e, t) {
        return Nv(e, t) || Ov(e);
      }
      var Pv = Iv, Ql = {};
      Te(Ql, {
        Color: function() {
          return Ze;
        },
        centerPointOfRect: function() {
          return Lv;
        },
        elementHasImage: function() {
          return Zr;
        },
        elementIsDistinct: function() {
          return eu;
        },
        filteredRectStack: function() {
          return ru;
        },
        flattenColors: function() {
          return wr;
        },
        flattenShadowColors: function() {
          return pa;
        },
        getBackgroundColor: function() {
          return _r;
        },
        getBackgroundStack: function() {
          return au;
        },
        getContrast: function() {
          return Xt;
        },
        getForegroundColor: function() {
          return ha;
        },
        getOwnBackgroundColor: function() {
          return kt;
        },
        getRectStack: function() {
          return tu;
        },
        getTextShadowColors: function() {
          return ma;
        },
        hasValidContrastRatio: function() {
          return ng;
        },
        incompleteData: function() {
          return Se;
        }
      });
      function Mv(e) {
        if (!(e.left > y.innerWidth) && !(e.top > y.innerHeight)) {
          var t = Math.min(Math.ceil(e.left + e.width / 2), y.innerWidth - 1), r = Math.min(Math.ceil(e.top + e.height / 2), y.innerHeight - 1);
          return {
            x: t,
            y: r
          };
        }
      }
      var Lv = Mv;
      function Zl(e) {
        return e.getPropertyValue("font-family").split(/[,;]/g).map(function(t) {
          return t.trim().toLowerCase();
        });
      }
      function qv(e, t) {
        var r = y.getComputedStyle(e);
        if (r.getPropertyValue("background-image") !== "none")
          return !0;
        var a = ["border-bottom", "border-top", "outline"].reduce(function(l, s) {
          var u = new Ze();
          return u.parseString(r.getPropertyValue(s + "-color")), l || r.getPropertyValue(s + "-style") !== "none" && parseFloat(r.getPropertyValue(s + "-width")) > 0 && u.alpha !== 0;
        }, !1);
        if (a)
          return !0;
        var n = y.getComputedStyle(t);
        if (Zl(r)[0] !== Zl(n)[0])
          return !0;
        var i = ["text-decoration-line", "text-decoration-style", "font-weight", "font-style", "font-size"].reduce(function(l, s) {
          return l || r.getPropertyValue(s) !== n.getPropertyValue(s);
        }, !1), o = r.getPropertyValue("text-decoration");
        return o.split(" ").length < 3 && (i = i || o !== n.getPropertyValue("text-decoration")), i;
      }
      var eu = qv;
      function Bv(e) {
        var t = ln(e), r = uo(e);
        return !r || r.length <= 1 ? [t] : r.some(function(a) {
          return a === void 0;
        }) ? null : (r.splice(0, 0, t), r);
      }
      var tu = Bv;
      function jv(e) {
        var t = tu(e);
        if (t && t.length === 1)
          return t[0];
        if (t && t.length > 1) {
          var r = t.shift(), a;
          return t.forEach(function(n, i) {
            if (i !== 0) {
              var o = t[i - 1], l = t[i];
              a = o.every(function(s, u) {
                return s === l[u];
              }) || r.includes(e);
            }
          }), a ? t[0] : (Se.set("bgColor", "elmPartiallyObscuring"), null);
        }
        return Se.set("bgColor", "outsideViewport"), null;
      }
      var ru = jv;
      function Vv(e, t, r) {
        return Math.min(Math.max(t, e), r);
      }
      var Uv = {
        normal: function(t, r) {
          return r;
        },
        multiply: function(t, r) {
          return r * t;
        },
        screen: function(t, r) {
          return t + r - t * r;
        },
        overlay: function(t, r) {
          return this["hard-light"](r, t);
        },
        darken: function(t, r) {
          return Math.min(t, r);
        },
        lighten: function(t, r) {
          return Math.max(t, r);
        },
        "color-dodge": function(t, r) {
          return t === 0 ? 0 : r === 1 ? 1 : Math.min(1, t / (1 - r));
        },
        "color-burn": function(t, r) {
          return t === 1 ? 1 : r === 0 ? 0 : 1 - Math.min(1, (1 - t) / r);
        },
        "hard-light": function(t, r) {
          return r <= 0.5 ? this.multiply(t, 2 * r) : this.screen(t, 2 * r - 1);
        },
        "soft-light": function(t, r) {
          if (r <= 0.5)
            return t - (1 - 2 * r) * t * (1 - t);
          var a = t <= 0.25 ? ((16 * t - 12) * t + 4) * t : Math.sqrt(t);
          return t + (2 * r - 1) * (a - t);
        },
        difference: function(t, r) {
          return Math.abs(t - r);
        },
        exclusion: function(t, r) {
          return t + r - 2 * t * r;
        }
      };
      function Un(e, t, r, a, n) {
        return t * (1 - a) * e + t * a * Uv[n](r / 255, e / 255) * 255 + (1 - t) * a * r;
      }
      function Hv(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "normal", a = Un(e.red, e.alpha, t.red, t.alpha, r), n = Un(e.green, e.alpha, t.green, t.alpha, r), i = Un(e.blue, e.alpha, t.blue, t.alpha, r), o = Vv(e.alpha + t.alpha * (1 - e.alpha), 0, 1), l = Math.round(a / o), s = Math.round(n / o), u = Math.round(i / o);
        return new Ze(l, s, u, o);
      }
      var wr = Hv;
      function zv(e, t) {
        var r = e.alpha, a = (1 - r) * t.red + r * e.red, n = (1 - r) * t.green + r * e.green, i = (1 - r) * t.blue + r * e.blue, o = e.alpha + t.alpha * (1 - e.alpha);
        return new Ze(a, n, i, o);
      }
      var pa = zv;
      function $v(e, t) {
        var r = Node.DOCUMENT_POSITION_CONTAINED_BY;
        if (!(e.compareDocumentPosition(t) & r))
          return !1;
        var a = y.getComputedStyle(t), n = a.getPropertyValue("display");
        if (!n.includes("inline"))
          return !1;
        var i = a.getPropertyValue("position");
        return i === "static";
      }
      function Wv(e, t, r) {
        for (var a = e - 1; a >= 0; a--) {
          if (!$v(r, t[a]))
            return !0;
          t.splice(a, 1);
        }
        return !1;
      }
      function Gv(e) {
        var t = e.indexOf(R.body), r = e, a = kt(y.getComputedStyle(R.documentElement));
        if (t > 1 && a.alpha === 0 && !Zr(R.documentElement)) {
          t > 1 && (r.splice(t, 1), r.push(R.body));
          var n = r.indexOf(R.documentElement);
          n > 0 && (r.splice(n, 1), r.push(R.documentElement));
        }
        return r;
      }
      function Yv(e) {
        var t = ru(e);
        if (t === null)
          return null;
        t = Eo(t, e), t = Gv(t);
        var r = t.indexOf(e);
        return Wv(r, t, e) ? (Se.set("bgColor", "bgOverlap"), null) : r !== -1 ? t : null;
      }
      var au = Yv;
      function Kv(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.minRatio, a = t.maxRatio, n = y.getComputedStyle(e), i = n.getPropertyValue("text-shadow");
        if (i === "none")
          return [];
        var o = n.getPropertyValue("font-size"), l = parseInt(o);
        we(isNaN(l) === !1, "Unable to determine font-size value ".concat(o));
        var s = [], u = Xv(i);
        return u.forEach(function(c) {
          var d = c.colorStr, f = c.pixels;
          d = d || n.getPropertyValue("color");
          var p = ve(f, 3), m = p[0], b = p[1], D = p[2], v = D === void 0 ? 0 : D;
          if ((!r || v >= l * r) && (!a || v < l * a)) {
            var g = Jv({
              colorStr: d,
              offsetY: m,
              offsetX: b,
              blurRadius: v,
              fontSize: l
            });
            s.push(g);
          }
        }), s;
      }
      function Xv(e) {
        var t = {
          pixels: []
        }, r = e.trim(), a = [t];
        if (!r)
          return [];
        for (; r; ) {
          var n = r.match(/^rgba?\([0-9,.\s]+\)/i) || r.match(/^[a-z]+/i) || r.match(/^#[0-9a-f]+/i), i = r.match(/^([0-9.-]+)px/i) || r.match(/^(0)/);
          if (n)
            we(!t.colorStr, "Multiple colors identified in text-shadow: ".concat(e)), r = r.replace(n[0], "").trim(), t.colorStr = n[0];
          else if (i) {
            we(t.pixels.length < 3, "Too many pixel units in text-shadow: ".concat(e)), r = r.replace(i[0], "").trim();
            var o = parseFloat((i[1][0] === "." ? "0" : "") + i[1]);
            t.pixels.push(o);
          } else if (r[0] === ",")
            we(t.pixels.length >= 2, "Missing pixel value in text-shadow: ".concat(e)), t = {
              pixels: []
            }, a.push(t), r = r.substr(1).trim();
          else
            throw new Error("Unable to process text-shadows: ".concat(e));
        }
        return a;
      }
      function Jv(e) {
        var t = e.colorStr, r = e.offsetX, a = e.offsetY, n = e.blurRadius, i = e.fontSize;
        if (r > n || a > n)
          return new Ze(0, 0, 0, 0);
        var o = new Ze();
        return o.parseString(t), o.alpha *= Qv(n, i), o;
      }
      function Qv(e, t) {
        if (e === 0)
          return 1;
        var r = e / t;
        return 0.185 / (r + 0.4);
      }
      var ma = Kv;
      function _r(e) {
        var t, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0.1, n = ma(e, {
          minRatio: a
        });
        n.length && (n = [{
          color: n.reduce(pa)
        }]);
        var i = au(e);
        if ((i || []).some(function(s) {
          var u = y.getComputedStyle(s), c = kt(u);
          if (Zv(e, s, c) || Zr(s, u))
            return n = null, r.push(s), !0;
          if (c.alpha !== 0) {
            r.push(s);
            var d = u.getPropertyValue("mix-blend-mode");
            return n.unshift({
              color: c,
              blendMode: Hn(d)
            }), c.alpha === 1;
          } else
            return !1;
        }), n === null || i === null)
          return null;
        var o = eg(e, i.includes(R.body));
        if ((t = n).unshift.apply(t, ie(o)), n.length === 0)
          return new Ze(255, 255, 255, 1);
        var l = n.reduce(function(s, u) {
          return wr(u.color, s.color instanceof Ze ? s.color : s, u.blendMode);
        });
        return wr(l.color instanceof Ze ? l.color : l, new Ze(255, 255, 255, 1));
      }
      function Zv(e, t, r) {
        var a = e !== t && !ea(e, t) && r.alpha !== 0;
        return a && Se.set("bgColor", "elmPartiallyObscured"), a;
      }
      function Hn(e) {
        return e || void 0;
      }
      function eg(e, t) {
        var r = [];
        if (!t) {
          var a = R.documentElement, n = R.body, i = y.getComputedStyle(a), o = y.getComputedStyle(n), l = kt(i), s = kt(o), u = s.alpha !== 0 && ea(e, n);
          (s.alpha !== 0 && l.alpha === 0 || u && s.alpha !== 1) && r.unshift({
            color: s,
            blendMode: Hn(o.getPropertyValue("mix-blend-mode"))
          }), l.alpha !== 0 && (!u || u && s.alpha !== 1) && r.unshift({
            color: l,
            blendMode: Hn(i.getPropertyValue("mix-blend-mode"))
          });
        }
        return r;
      }
      function tg(e, t) {
        if (!t || !e)
          return null;
        t.alpha < 1 && (t = wr(t, e));
        var r = e.getRelativeLuminance(), a = t.getRelativeLuminance();
        return (Math.max(a, r) + 0.05) / (Math.min(a, r) + 0.05);
      }
      var Xt = tg;
      function nu(e) {
        if (!e)
          return 1;
        var t = V(e);
        if (t && t._opacity !== void 0 && t._opacity !== null)
          return t._opacity;
        var r = y.getComputedStyle(e), a = r.getPropertyValue("opacity"), n = a * nu(e.parentElement);
        return t && (t._opacity = n), n;
      }
      function rg(e, t, r) {
        var a = y.getComputedStyle(e), n = new Ze();
        n.parseString(a.getPropertyValue("color"));
        var i = nu(e);
        if (n.alpha = n.alpha * i, n.alpha === 1)
          return n;
        if (r || (r = _r(e, [])), r === null) {
          var o = Se.get("bgColor");
          return Se.set("fgColor", o), null;
        }
        if (n.alpha < 1) {
          var l = ma(e, {
            minRatio: 0
          });
          return [n].concat(ie(l), [r]).reduce(pa);
        }
        return wr(n, r);
      }
      var ha = rg;
      function ag(e, t, r, a) {
        var n = Xt(e, t), i = a && Math.ceil(r * 72) / 96 < 14 || !a && Math.ceil(r * 72) / 96 < 18, o = i ? 4.5 : 3;
        return {
          isValid: n > o,
          contrastRatio: n,
          expectedContrastRatio: o
        };
      }
      var ng = ag;
      function ig(e, t, r) {
        var a = t.ignoreUnicode, n = t.ignoreLength, i = t.ignorePseudo, o = t.boldValue, l = t.boldTextPt, s = t.largeTextPt, u = t.contrastRatio, c = t.shadowOutlineEmMax, d = t.pseudoSizeThreshold;
        if (!he(e, !1))
          return this.data({
            messageKey: "hidden"
          }), !0;
        var f = it(r, !1, !0);
        if (a && lg(f)) {
          this.data({
            messageKey: "nonBmp"
          });
          return;
        }
        var p = y.getComputedStyle(e), m = parseFloat(p.getPropertyValue("font-size")), b = p.getPropertyValue("font-weight"), D = parseFloat(b) >= o || b === "bold", v = Math.ceil(m * 72) / 96, g = D && v < l || !D && v < s, x = g ? u.normal : u.large, E = x.expected, F = x.minThreshold, I = x.maxThreshold, M = og(r, {
          ignorePseudo: i,
          pseudoSizeThreshold: d
        });
        if (M) {
          this.data({
            fontSize: "".concat((m * 72 / 96).toFixed(1), "pt (").concat(m, "px)"),
            fontWeight: D ? "bold" : "normal",
            messageKey: "pseudoContent",
            expectedContrastRatio: E + ":1"
          }), this.relatedNodes(M.actualNode);
          return;
        }
        var U = [], Q = _r(e, U, c), L = ha(e, !1, Q), X = ma(e, {
          minRatio: 1e-3,
          maxRatio: c
        }), Y = null, Z = null, ne = null;
        if (X.length === 0)
          Y = Xt(Q, L);
        else if (L && Q) {
          ne = [].concat(ie(X), [Q]).reduce(pa);
          var pe = Xt(Q, L), J = Xt(Q, ne), ae = Xt(ne, L);
          Y = Math.max(pe, J, ae), Y !== pe && (Z = J > ae ? "shadowOnBgColor" : "fgOnShadowColor");
        }
        var O = Y > E;
        if (typeof F == "number" && Y < F || typeof I == "number" && Y > I)
          return this.data({
            contrastRatio: Y
          }), !0;
        var ue = Math.floor(Y * 100) / 100, w;
        Q === null ? w = Se.get("bgColor") : O || (w = Z);
        var z = ue === 1, N = f.length === 1;
        if (z ? w = Se.set("bgColor", "equalRatio") : !O && N && !n && (w = "shortTextContent"), this.data({
          fgColor: L ? L.toHexString() : void 0,
          bgColor: Q ? Q.toHexString() : void 0,
          contrastRatio: ue,
          fontSize: "".concat((m * 72 / 96).toFixed(1), "pt (").concat(m, "px)"),
          fontWeight: D ? "bold" : "normal",
          messageKey: w,
          expectedContrastRatio: E + ":1",
          shadowColor: ne ? ne.toHexString() : void 0
        }), L === null || Q === null || z || N && !n && !O) {
          w = null, Se.clear(), this.relatedNodes(U);
          return;
        }
        return O || this.relatedNodes(U), O;
      }
      function og(e, t) {
        var r = t.pseudoSizeThreshold, a = r === void 0 ? 0.25 : r, n = t.ignorePseudo, i = n === void 0 ? !1 : n;
        if (!i) {
          var o = e.boundingClientRect, l = o.width * o.height * a;
          do {
            var s = iu(e.actualNode, ":before"), u = iu(e.actualNode, ":after");
            if (s + u > l)
              return e;
          } while (e = e.parent);
        }
      }
      var iu = na(function(t, r) {
        var a = y.getComputedStyle(t, r), n = function(s, u) {
          return a.getPropertyValue(s) === u;
        };
        if (n("content", "none") || n("display", "none") || n("visibility", "hidden") || n("position", "absolute") === !1 || kt(a).alpha === 0 && n("background-image", "none"))
          return 0;
        var i = ou(a.getPropertyValue("width")), o = ou(a.getPropertyValue("height"));
        return i.unit !== "px" || o.unit !== "px" ? i.value === 0 || o.value === 0 ? 0 : 1 / 0 : i.value * o.value;
      });
      function lg(e) {
        var t = {
          nonBmp: !0
        }, r = Mn(e, t), a = te(yr(e, t)) === "";
        return r && a;
      }
      function ou(e) {
        var t = /^([0-9.]+)([a-z]+)$/i, r = e.match(t) || [], a = ve(r, 3), n = a[1], i = n === void 0 ? "" : n, o = a[2], l = o === void 0 ? "" : o;
        return {
          value: parseFloat(i),
          unit: l.toLowerCase()
        };
      }
      function lu(e, t) {
        var r = e.getRelativeLuminance(), a = t.getRelativeLuminance();
        return (Math.max(r, a) + 0.05) / (Math.min(r, a) + 0.05);
      }
      var ug = ["block", "list-item", "table", "flex", "grid", "inline-block"];
      function uu(e) {
        var t = y.getComputedStyle(e).getPropertyValue("display");
        return ug.indexOf(t) !== -1 || t.substr(0, 6) === "table-";
      }
      function sg(e) {
        if (uu(e))
          return !1;
        for (var t = He(e); t.nodeType === 1 && !uu(t); )
          t = He(t);
        if (this.relatedNodes([t]), eu(e, t))
          return !0;
        var r, a;
        if (r = ha(e), a = ha(t), !r || !a)
          return;
        var n = lu(r, a);
        if (n === 1)
          return !0;
        if (n >= 3) {
          Se.set("fgColor", "bgContrast"), this.data({
            messageKey: Se.get("fgColor")
          }), Se.clear();
          return;
        }
        if (r = _r(e), a = _r(t), !r || !a || lu(r, a) >= 3) {
          var i;
          !r || !a ? i = Se.get("bgColor") : i = "bgContrast", Se.set("fgColor", i), this.data({
            messageKey: Se.get("fgColor")
          }), Se.clear();
          return;
        }
        return !1;
      }
      var cg = sg;
      function dg(e, t, r) {
        if (r.props.nodeName !== "input")
          return !0;
        var a = ["text", "search", "number", "tel"], n = ["text", "search", "url"], i = {
          bday: ["text", "search", "date"],
          email: ["text", "search", "email"],
          username: ["text", "search", "email"],
          "street-address": ["text"],
          tel: ["text", "search", "tel"],
          "tel-country-code": ["text", "search", "tel"],
          "tel-national": ["text", "search", "tel"],
          "tel-area-code": ["text", "search", "tel"],
          "tel-local": ["text", "search", "tel"],
          "tel-local-prefix": ["text", "search", "tel"],
          "tel-local-suffix": ["text", "search", "tel"],
          "tel-extension": ["text", "search", "tel"],
          "cc-number": a,
          "cc-exp": ["text", "search", "month", "tel"],
          "cc-exp-month": a,
          "cc-exp-year": a,
          "cc-csc": a,
          "transaction-amount": a,
          "bday-day": a,
          "bday-month": a,
          "bday-year": a,
          "new-password": ["text", "search", "password"],
          "current-password": ["text", "search", "password"],
          url: n,
          photo: n,
          impp: n
        };
        P(t) === "object" && Object.keys(t).forEach(function(d) {
          i[d] || (i[d] = []), i[d] = i[d].concat(t[d]);
        });
        var o = r.attr("autocomplete"), l = o.split(/\s+/g).map(function(d) {
          return d.toLowerCase();
        }), s = l[l.length - 1];
        if (Ot.stateTerms.includes(s))
          return !0;
        var u = i[s], c = r.hasAttr("type") ? te(r.attr("type")).toLowerCase() : "text";
        return c = oa().includes(c) ? c : "text", typeof u > "u" ? c === "text" : u.includes(c);
      }
      var fg = dg;
      function pg(e, t, r) {
        var a = r.attr("autocomplete") || "";
        return Bl(a, t);
      }
      var mg = pg;
      function hg(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0;
        if (!t.attribute || typeof t.attribute != "string")
          throw new TypeError("attr-non-space-content requires options.attribute to be a string");
        if (!r.hasAttr(t.attribute))
          return this.data({
            messageKey: "noAttr"
          }), !1;
        var a = r.attr(t.attribute), n = !te(a);
        return n ? (this.data({
          messageKey: "emptyAttr"
        }), !1) : !0;
      }
      var vg = hg;
      function gg(e) {
        var t = e.some(function(r) {
          return r.result === !0;
        });
        return t && e.forEach(function(r) {
          r.result = !0;
        }), e;
      }
      var bg = gg;
      function yg(e, t, r) {
        if (!t || !t.selector || typeof t.selector != "string")
          throw new TypeError("has-descendant requires options.selector to be a string");
        var a = ct(r, t.selector, function(n) {
          return he(n.actualNode, !0);
        });
        return this.relatedNodes(a.map(function(n) {
          return n.actualNode;
        })), a.length > 0;
      }
      var Dg = yg;
      function wg(e, t, r) {
        try {
          return te(Gt(r)) !== "";
        } catch {
          return;
        }
      }
      var _g = wg;
      function xg(e, t, r) {
        return hr(r, t.matcher);
      }
      var Eg = xg;
      function Ag(e) {
        return e.filter(function(t) {
          return t.data !== "ignored";
        });
      }
      var Cg = Ag;
      function Fg(e, t, r) {
        if (!t || !t.selector || typeof t.selector != "string")
          throw new TypeError("page-no-duplicate requires options.selector to be a string");
        var a = "page-no-duplicate;" + t.selector;
        if (H.get(a)) {
          this.data("ignored");
          return;
        }
        H.set(a, !0);
        var n = ct(h._tree[0], t.selector, function(i) {
          return he(i.actualNode, !0);
        });
        return typeof t.nativeScopeFilter == "string" && (n = n.filter(function(i) {
          return i.actualNode.hasAttribute("role") || !Ft(i, t.nativeScopeFilter);
        })), this.relatedNodes(n.filter(function(i) {
          return i !== r;
        }).map(function(i) {
          return i.actualNode;
        })), n.length <= 1;
      }
      var kg = Fg;
      function Rg(e) {
        var t = {};
        return e.filter(function(r) {
          if (!r.data)
            return !1;
          var a = r.data.toUpperCase();
          return t[a] ? (t[a].relatedNodes.push(r.relatedNodes[0]), !1) : (t[a] = r, r.relatedNodes = [], !0);
        }).map(function(r) {
          return r.result = !!r.relatedNodes.length, r;
        });
      }
      var Tg = Rg;
      function Sg(e) {
        return he(e, !1) && (this.data(e.getAttribute("accesskey")), this.relatedNodes([e])), !0;
      }
      var Og = Sg;
      function Ng(e, t, r) {
        var a = r.tabbableElements;
        if (!a)
          return !1;
        var n = a.filter(function(i) {
          return i !== r;
        });
        return n.length > 0;
      }
      var Ig = Ng;
      function Pg(e, t, r) {
        var a = ["BUTTON", "FIELDSET", "INPUT", "SELECT", "TEXTAREA"], n = r.tabbableElements;
        if (!n || !n.length)
          return !0;
        var i = n.reduce(function(o, l) {
          var s = l.actualNode, u = s.nodeName.toUpperCase();
          return a.includes(u) && o.push(s), o;
        }, []);
        return this.relatedNodes(i), i.length === 0 || Jr() ? !0 : i.every(function(o) {
          return o.onfocus;
        }) ? void 0 : !1;
      }
      var Mg = Pg;
      function Lg(e, t, r) {
        if (r.hasAttr("contenteditable") && i(r))
          return !0;
        var a = r.isFocusable, n = parseInt(r.attr("tabindex"), 10);
        return n = isNaN(n) ? null : n, n ? a && n >= 0 : a;
        function i(o) {
          var l = o.attr("contenteditable");
          if (l === "true" || l === "")
            return !0;
          if (l === "false")
            return !1;
          var s = Qe(r.parent, "[contenteditable]");
          return s ? i(s) : !1;
        }
      }
      var qg = Lg;
      function Bg(e, t, r) {
        var a = r.tabbableElements.map(function(n) {
          var i = n.actualNode;
          return i;
        });
        if (!a || !a.length)
          return !0;
        if (Jr()) {
          this.relatedNodes(a);
          return;
        }
        return !0;
      }
      var jg = Bg;
      function Vg(e, t, r) {
        var a = r.attr("tabindex"), n = je(r) && a > -1;
        if (!n)
          return !1;
        try {
          return !ze(r);
        } catch {
          return;
        }
      }
      var Ug = Vg;
      function Hg(e, t, r) {
        var a = ["BUTTON", "FIELDSET", "INPUT", "SELECT", "TEXTAREA"], n = r.tabbableElements;
        if (!n || !n.length)
          return !0;
        var i = n.reduce(function(o, l) {
          var s = l.actualNode, u = s.nodeName.toUpperCase();
          return a.includes(u) || o.push(s), o;
        }, []);
        return this.relatedNodes(i), i.length === 0 || Jr() ? !0 : i.every(function(o) {
          return o.onfocus;
        }) ? void 0 : !1;
      }
      var zg = Hg;
      function su(e) {
        if (je(e))
          return !0;
        if (!e.children) {
          if (e.props.nodeType === 1)
            throw new Error("Cannot determine children");
          return !1;
        }
        return e.children.some(function(t) {
          return su(t);
        });
      }
      function $g(e, t, r) {
        if (!!r.children)
          try {
            return !r.children.some(function(a) {
              return su(a);
            });
          } catch {
            return;
          }
      }
      var Wg = $g;
      function Gg(e) {
        var t = Kt("landmark"), r = He(e), a = ce(e);
        for (this.data({
          role: a
        }); r; ) {
          var n = r.getAttribute("role");
          if (!n && r.nodeName.toUpperCase() !== "FORM" && (n = ut(r)), n && t.includes(n) && !(n === "main" && a === "complementary"))
            return !1;
          r = He(r);
        }
        return !0;
      }
      var Yg = Gg;
      function Kg(e, t, r) {
        if (!!r.children)
          try {
            var a = cu(r);
            if (!a.length)
              return !0;
            var n = a.filter(Xg);
            return n.length > 0 ? (this.data({
              messageKey: "notHidden"
            }), this.relatedNodes(n)) : this.relatedNodes(a), !1;
          } catch {
            return;
          }
      }
      function cu(e) {
        if (!e.children) {
          if (e.props.nodeType === 1)
            throw new Error("Cannot determine children");
          return [];
        }
        var t = [];
        return e.children.forEach(function(r) {
          var a = ce(r);
          Yt(a) === "widget" && je(r) ? t.push(r) : t.push.apply(t, ie(cu(r)));
        }), t;
      }
      function Xg(e) {
        var t = parseInt(e.attr("tabindex"), 10);
        return !isNaN(t) && t < 0;
      }
      function Jg(e, t, r) {
        var a = parseInt(r.attr("tabindex"), 10);
        return isNaN(a) ? !0 : a <= 0;
      }
      var Qg = Jg;
      function Zg(e, t, r) {
        var a = r.attr("alt"), n = /^\s+$/;
        return typeof a == "string" && n.test(a);
      }
      var eb = Zg;
      function tb(e, t, r) {
        if (["none", "presentation"].includes(ce(r)))
          return !1;
        var a = Qe(r, t.parentSelector);
        if (!a)
          return !1;
        var n = it(a, !0).toLowerCase();
        return n === "" ? !1 : n === ze(r).toLowerCase();
      }
      var rb = tb;
      function ab(e, t, r) {
        if (r.attr("id")) {
          if (!r.actualNode)
            return;
          var a = Be(r.actualNode), n = Fe(r.attr("id")), i = Array.from(a.querySelectorAll('label[for="'.concat(n, '"]')));
          if (i.length)
            try {
              return i.some(function(o) {
                return he(o) ? !!bt(o) : !0;
              });
            } catch {
              return;
            }
        }
        return !1;
      }
      var nb = ab;
      function ib(e, t, r) {
        var a = da(r), n = e.getAttribute("title");
        if (!a)
          return !1;
        if (!n && (n = "", e.getAttribute("aria-describedby"))) {
          var i = nt(e, "aria-describedby");
          n = i.map(function(o) {
            return o ? bt(o) : "";
          }).join("");
        }
        return te(n) === te(a);
      }
      var ob = ib;
      function lb(e, t, r) {
        if (r.hasAttr("id")) {
          if (!r.actualNode)
            return;
          var a = Be(e), n = Fe(e.getAttribute("id")), i = a.querySelector('label[for="'.concat(n, '"]'));
          if (i && !he(i, !0)) {
            var o;
            try {
              o = ze(r).trim();
            } catch {
              return;
            }
            var l = o === "";
            return l;
          }
        }
        return !1;
      }
      var ub = lb;
      function sb(e, t, r) {
        try {
          var a = Qe(r, "label");
          return a ? !!ze(a, {
            inControlContext: !0
          }) : !1;
        } catch {
          return;
        }
      }
      var cb = sb;
      function du(e, t) {
        var r = fu(t), a = fu(e);
        return !r || !a ? !1 : r.includes(a);
      }
      function fu(e) {
        var t = yr(e, {
          emoji: !0,
          nonBmp: !0,
          punctuations: !0
        });
        return te(t);
      }
      function db(e, t, r) {
        var a = t || {}, n = a.pixelThreshold, i = a.occuranceThreshold, o = bt(e).toLowerCase();
        if (!(Ln(o) < 1)) {
          var l = te(Gt(r, {
            subtreeDescendant: !0,
            ignoreIconLigature: !0,
            pixelThreshold: n,
            occuranceThreshold: i
          })).toLowerCase();
          return l ? Ln(l) < 1 ? du(l, o) ? !0 : void 0 : du(l, o) : !0;
        }
      }
      var fb = db;
      function pb(e) {
        var t = Fe(e.getAttribute("id")), r = e.parentNode, a = Be(e);
        a = a.documentElement || a;
        var n = Array.from(a.querySelectorAll('label[for="'.concat(t, '"]')));
        for (n.length && (n = n.filter(function(l) {
          return he(l);
        })); r; )
          r.nodeName.toUpperCase() === "LABEL" && n.indexOf(r) === -1 && n.push(r), r = r.parentNode;
        if (this.relatedNodes(n), n.length > 1) {
          var i = n.filter(function(l) {
            return he(l, !0);
          });
          if (i.length > 1)
            return;
          var o = nt(e, "aria-labelledby");
          return o.includes(i[0]) ? !1 : void 0;
        }
        return !1;
      }
      var mb = pb;
      function hb(e, t, r) {
        var a = da(r), n = sa(r), i = r.attr("aria-describedby");
        return !a && !!(n || i);
      }
      var vb = hb;
      function gb(e) {
        var t = [];
        return e.filter(function(r) {
          var a = function(o) {
            return r.data.role === o.data.role && r.data.accessibleText === o.data.accessibleText;
          }, n = t.find(a);
          return n ? (n.result = !1, n.relatedNodes.push(r.relatedNodes[0]), !1) : (t.push(r), r.relatedNodes = [], !0);
        });
      }
      var bb = gb;
      function yb(e, t, r) {
        var a = ce(e), n = ze(r);
        return n = n ? n.toLowerCase() : null, this.data({
          role: a,
          accessibleText: n
        }), this.relatedNodes([e]), !0;
      }
      var Db = yb;
      function zn(e) {
        return (e || "").trim() !== "";
      }
      function wb(e, t, r) {
        var a = typeof R < "u" ? Lr(R) : !1;
        if (t.attributes.includes("xml:lang") && t.attributes.includes("lang") && zn(r.attr("xml:lang")) && !zn(r.attr("lang")) && !a)
          return this.data({
            messageKey: "noXHTML"
          }), !1;
        var n = t.attributes.some(function(i) {
          return zn(r.attr(i));
        });
        return n ? !0 : (this.data({
          messageKey: "noLang"
        }), !1);
      }
      var _b = wb;
      function xb(e, t, r) {
        var a = [];
        return t.attributes.forEach(function(n) {
          var i = r.attr(n);
          if (typeof i == "string") {
            var o = Rt(i), l = t.value ? !t.value.map(Rt).includes(o) : !la(o);
            (o !== "" && l || i !== "" && !te(i)) && a.push(n + '="' + r.attr(n) + '"');
          }
        }), a.length ? (this.data(a), !0) : !1;
      }
      var Eb = xb;
      function Ab(e, t, r) {
        var a = Rt(r.attr("lang")), n = Rt(r.attr("xml:lang"));
        return a === n;
      }
      var Cb = Ab;
      function Fb(e) {
        var t = He(e), r = t.nodeName.toUpperCase(), a = be(t);
        return r === "DIV" && ["presentation", "none", null].includes(a) && (t = He(t), r = t.nodeName.toUpperCase(), a = be(t)), r !== "DL" ? !1 : !!(!a || ["presentation", "none", "list"].includes(a));
      }
      var kb = Fb;
      function Rb(e, t, r) {
        var a = r.parent;
        if (!!a) {
          var n = a.props.nodeName, i = be(a);
          return ["presentation", "none", "list"].includes(i) ? !0 : i && zt(i) ? (this.data({
            messageKey: "roleNotValid"
          }), !1) : ["ul", "ol", "menu"].includes(n);
        }
      }
      function Tb(e, t, r) {
        var a = ["definition", "term", "list"], n = {
          badNodes: [],
          hasNonEmptyTextNode: !1
        }, i = r.children.reduce(function(l, s) {
          var u = s.actualNode;
          return u.nodeName.toUpperCase() === "DIV" && ce(u) === null ? l.concat(s.children) : l.concat(s);
        }, []), o = i.reduce(function(l, s) {
          var u = s.actualNode, c = u.nodeName.toUpperCase();
          if (u.nodeType === 1 && he(u, !0, !1)) {
            var d = be(u);
            (c !== "DT" && c !== "DD" || d) && (a.includes(d) || l.badNodes.push(u));
          } else
            u.nodeType === 3 && u.nodeValue.trim() !== "" && (l.hasNonEmptyTextNode = !0);
          return l;
        }, n);
        return o.badNodes.length && this.relatedNodes(o.badNodes), !!o.badNodes.length || o.hasNonEmptyTextNode;
      }
      var Sb = Tb;
      function Ob(e, t, r) {
        var a = !1, n = !1, i = !0, o = [], l = [], s = [];
        return r.children.forEach(function(u) {
          var c = u.actualNode;
          if (c.nodeType === 3 && c.nodeValue.trim() !== "") {
            a = !0;
            return;
          }
          if (!(c.nodeType !== 1 || !he(c, !0, !1))) {
            i = !1;
            var d = c.nodeName.toUpperCase() === "LI", f = ce(u), p = f === "listitem";
            !d && !p && o.push(c), d && !p && (l.push(c), s.includes(f) || s.push(f)), p && (n = !0);
          }
        }), a || o.length ? (this.relatedNodes(o), !0) : i || n ? !1 : (this.relatedNodes(l), this.data({
          messageKey: "roleNotValid",
          roles: s.join(", ")
        }), !0);
      }
      var Nb = Ob;
      function Ib(e, t, r) {
        var a = r.children;
        if (!a || !a.length)
          return !1;
        for (var n = !1, i = !1, o, l = 0; l < a.length; l++) {
          if (o = a[l].props.nodeName.toUpperCase(), o === "DT" && (n = !0), n && o === "DD")
            return !1;
          o === "DD" && (i = !0);
        }
        return n || i;
      }
      var Pb = Ib;
      function Mb(e, t, r) {
        var a = et(r, "track"), n = a.some(function(i) {
          return (i.attr("kind") || "").toLowerCase() === "captions";
        });
        return n ? !1 : void 0;
      }
      var Lb = Mb, pu = " > ";
      function qb(e) {
        var t = {};
        return e.filter(function(r) {
          var a = r.node.ancestry[r.node.ancestry.length - 1] !== "html";
          if (a) {
            var n = r.node.ancestry.flat(1 / 0).join(pu);
            return t[n] = r, !0;
          }
          var i = r.node.ancestry.slice(0, r.node.ancestry.length - 1).flat(1 / 0).join(pu);
          return t[i] && (t[i].result = !0), !1;
        });
      }
      var Bb = qb;
      function jb(e, t) {
        return t.isViolation ? !1 : void 0;
      }
      var Vb = jb;
      function Ub(e, t) {
        if (!e.duration) {
          console.warn("axe.utils.preloadMedia did not load metadata");
          return;
        }
        var r = t.allowedDuration, a = r === void 0 ? 3 : r, n = i(e);
        if (n <= a && !e.hasAttribute("loop"))
          return !0;
        if (!e.hasAttribute("controls"))
          return !1;
        return !0;
        function i(s) {
          if (!s.currentSrc)
            return 0;
          var u = o(s.currentSrc);
          return u ? u.length === 1 ? Math.abs(s.duration - u[0]) : Math.abs(u[1] - u[0]) : Math.abs(s.duration - (s.currentTime || 0));
        }
        function o(s) {
          var u = s.match(/#t=(.*)/);
          if (!!u) {
            var c = ve(u, 2), d = c[1], f = d.split(",");
            return f.map(function(p) {
              return /:/.test(p) ? l(p) : parseFloat(p);
            });
          }
        }
        function l(s) {
          for (var u = s.split(":"), c = 0, d = 1; u.length > 0; )
            c += d * parseInt(u.pop(), 10), d *= 60;
          return parseFloat(c);
        }
      }
      var Hb = Ub;
      function zb(e, t, r, a) {
        var n = a || {}, i = n.cssom, o = i === void 0 ? void 0 : i, l = t || {}, s = l.degreeThreshold, u = s === void 0 ? 0 : s;
        if (!o || !o.length)
          return;
        for (var c = !1, d = [], f = v(o), p = function() {
          var X = b[m], Y = f[X], Z = Y.root, ne = Y.rules, pe = ne.filter(g);
          if (!pe.length)
            return "continue";
          pe.forEach(function(J) {
            var ae = J.cssRules;
            Array.from(ae).forEach(function(O) {
              var ue = x(O);
              if (ue && O.selectorText.toUpperCase() !== "HTML") {
                var w = Array.from(Z.querySelectorAll(O.selectorText)) || [];
                d = d.concat(w);
              }
              c = c || ue;
            });
          });
        }, m = 0, b = Object.keys(f); m < b.length; m++)
          var D = p();
        if (!c)
          return !0;
        return d.length && this.relatedNodes(d), !1;
        function v(L) {
          return L.reduce(function(X, Y) {
            var Z = Y.sheet, ne = Y.root, pe = Y.shadowId, J = pe || "topDocument";
            if (X[J] || (X[J] = {
              root: ne,
              rules: []
            }), !Z || !Z.cssRules)
              return X;
            var ae = Array.from(Z.cssRules);
            return X[J].rules = X[J].rules.concat(ae), X;
          }, {});
        }
        function g(L) {
          var X = L.type, Y = L.cssText;
          return X !== 4 ? !1 : /orientation:\s*landscape/i.test(Y) || /orientation:\s*portrait/i.test(Y);
        }
        function x(L) {
          var X = L.selectorText, Y = L.style;
          if (!X || Y.length <= 0)
            return !1;
          var Z = Y.transform || Y.webkitTransform || Y.msTransform || !1;
          if (!Z)
            return !1;
          var ne = Z.match(/(rotate|rotateZ|rotate3d|matrix|matrix3d)\(([^)]+)\)(?!.*(rotate|rotateZ|rotate3d|matrix|matrix3d))/);
          if (!ne)
            return !1;
          var pe = ve(ne, 3), J = pe[1], ae = pe[2], O = E(J, ae);
          return !O || (O = Math.abs(O), Math.abs(O - 180) % 180 <= u) ? !1 : Math.abs(O - 90) % 90 <= u;
        }
        function E(L, X) {
          switch (L) {
            case "rotate":
            case "rotateZ":
              return F(X);
            case "rotate3d":
              var Y = X.split(",").map(function(J) {
                return J.trim();
              }), Z = ve(Y, 4), ne = Z[2], pe = Z[3];
              return parseInt(ne) === 0 ? void 0 : F(pe);
            case "matrix":
            case "matrix3d":
              return I(X);
            default:
              return;
          }
        }
        function F(L) {
          var X = L.match(/(deg|grad|rad|turn)/) || [], Y = ve(X, 1), Z = Y[0];
          if (!!Z) {
            var ne = parseFloat(L.replace(Z, ""));
            switch (Z) {
              case "rad":
                return M(ne);
              case "grad":
                return U(ne);
              case "turn":
                return Q(ne);
              case "deg":
              default:
                return parseInt(ne);
            }
          }
        }
        function I(L) {
          var X = L.split(",");
          if (X.length <= 6) {
            var Y = ve(X, 2), Z = Y[0], ne = Y[1], pe = Math.atan2(parseFloat(ne), parseFloat(Z));
            return M(pe);
          }
          var J = parseFloat(X[8]), ae = Math.asin(J), O = Math.cos(ae), ue = Math.acos(parseFloat(X[0]) / O);
          return M(ue);
        }
        function M(L) {
          return Math.round(L * (180 / Math.PI));
        }
        function U(L) {
          return L = L % 400, L < 0 && (L += 400), Math.round(L / 400 * 360);
        }
        function Q(L) {
          return Math.round(360 / (1 / L));
        }
      }
      var $b = zb;
      function Wb(e, t, r) {
        var a = t || {}, n = a.scaleMinimum, i = n === void 0 ? 2 : n, o = a.lowerBound, l = o === void 0 ? !1 : o, s = r.attr("content") || "";
        if (!s)
          return !0;
        var u = s.split(/[;,]/).reduce(function(d, f) {
          var p = f.trim();
          if (!p)
            return d;
          var m = p.split("="), b = ve(m, 2), D = b[0], v = b[1];
          if (!D || !v)
            return d;
          var g = D.toLowerCase().trim(), x = v.toLowerCase().trim();
          return g === "maximum-scale" && x === "yes" && (x = 1), g === "maximum-scale" && parseFloat(x) < 0 || (d[g] = x), d;
        }, {});
        if (l && u["maximum-scale"] && parseFloat(u["maximum-scale"]) < l)
          return !0;
        if (!l && u["user-scalable"] === "no")
          return this.data("user-scalable=no"), !1;
        var c = parseFloat(u["user-scalable"]);
        return !l && u["user-scalable"] && (c || c === 0) && c > -1 && c < 1 ? (this.data("user-scalable"), !1) : u["maximum-scale"] && parseFloat(u["maximum-scale"]) < i ? (this.data("maximum-scale"), !1) : !0;
      }
      var Gb = Wb;
      function Yb(e) {
        var t = Xb(e);
        return e.forEach(function(r) {
          r.result = Kb(r, t);
        }), e;
      }
      function Kb(e, t) {
        var r, a, n, i, o = mu(t, e.node.ancestry), l = (r = (a = t[o]) === null || a === void 0 ? void 0 : a.level) !== null && r !== void 0 ? r : -1, s = (n = (i = t[o - 1]) === null || i === void 0 ? void 0 : i.level) !== null && n !== void 0 ? n : -1;
        if (o === 0)
          return !0;
        if (l !== -1)
          return l - s <= 1;
      }
      function Xb(e) {
        e = ie(e), e.sort(function(r, a) {
          var n = r.node, i = a.node;
          return n.ancestry.length - i.ancestry.length;
        });
        var t = e.reduce(Jb, []);
        return t.filter(function(r) {
          var a = r.level;
          return a !== -1;
        });
      }
      function Jb(e, t) {
        var r, a = (r = t.data) === null || r === void 0 ? void 0 : r.headingOrder, n = hu(t.node.ancestry, 1);
        if (!a)
          return e;
        var i = a.map(function(l) {
          return Zb(l, n);
        }), o = Qb(e, n);
        return o === -1 ? e.push.apply(e, ie(i)) : e.splice.apply(e, [o, 0].concat(ie(i))), e;
      }
      function Qb(e, t) {
        for (; t.length; ) {
          var r = mu(e, t);
          if (r !== -1)
            return r;
          t = hu(t, 1);
        }
        return -1;
      }
      function mu(e, t) {
        return e.findIndex(function(r) {
          return wn(r.ancestry, t);
        });
      }
      function Zb(e, t) {
        var r = t.concat(e.ancestry);
        return de({}, e, {
          ancestry: r
        });
      }
      function hu(e, t) {
        return e.slice(0, e.length - t);
      }
      function ey(e) {
        var t = ce(e), r = t && t.includes("heading"), a = e.attr("aria-level"), n = parseInt(a, 10), i = e.props.nodeName.match(/h(\d)/) || [], o = ve(i, 2), l = o[1];
        return r ? l && !a ? parseInt(l, 10) : isNaN(n) || n < 1 ? l ? parseInt(l, 10) : 2 : n || -1 : -1;
      }
      function ty() {
        var e = H.get("headingOrder");
        if (e)
          return !0;
        var t = "h1, h2, h3, h4, h5, h6, [role=heading], iframe, frame", r = ct(h._tree[0], t, function(a) {
          return he(a.actualNode, !0);
        });
        return e = r.map(function(a) {
          return {
            ancestry: [Br(a.actualNode)],
            level: ey(a)
          };
        }), this.data({
          headingOrder: e
        }), H.set("headingOrder", r), !0;
      }
      var ry = ty;
      function vu(e, t) {
        if (!e || !t)
          return !1;
        var r = Object.getOwnPropertyNames(e), a = Object.getOwnPropertyNames(t);
        if (r.length !== a.length)
          return !1;
        var n = r.every(function(i) {
          var o = e[i], l = t[i];
          return P(o) !== P(l) ? !1 : typeof o == "object" || typeof l == "object" ? vu(o, l) : o === l;
        });
        return n;
      }
      function ay(e) {
        if (e.length < 2)
          return e;
        for (var t = e.filter(function(l) {
          var s = l.result;
          return s !== void 0;
        }), r = [], a = {}, n = function(s) {
          var u, c = t[s], d = c.data, f = d.name, p = d.urlProps;
          if (a[f])
            return "continue";
          var m = t.filter(function(D, v) {
            var g = D.data;
            return g.name === f && v !== s;
          }), b = m.every(function(D) {
            var v = D.data;
            return vu(v.urlProps, p);
          });
          m.length && !b && (c.result = void 0), c.relatedNodes = [], (u = c.relatedNodes).push.apply(u, ie(m.map(function(D) {
            return D.relatedNodes[0];
          }))), a[f] = m, r.push(c);
        }, i = 0; i < t.length; i++)
          var o = n(i);
        return r;
      }
      var ny = ay, gu = {};
      Te(gu, {
        aria: function() {
          return nl;
        },
        color: function() {
          return Ql;
        },
        dom: function() {
          return en;
        },
        forms: function() {
          return bu;
        },
        matches: function() {
          return hr;
        },
        standards: function() {
          return Xl;
        },
        table: function() {
          return Du;
        },
        text: function() {
          return br;
        },
        utils: function() {
          return Ra;
        }
      });
      var bu = {};
      Te(bu, {
        isAriaCombobox: function() {
          return Tl;
        },
        isAriaListbox: function() {
          return Rl;
        },
        isAriaRange: function() {
          return Sl;
        },
        isAriaTextbox: function() {
          return kl;
        },
        isDisabled: function() {
          return xr;
        },
        isNativeSelect: function() {
          return Fl;
        },
        isNativeTextbox: function() {
          return Cl;
        }
      });
      var iy = ["fieldset", "button", "select", "input", "textarea"];
      function yu(e) {
        var t = e._isDisabled;
        if (typeof t == "boolean")
          return t;
        var r = e.props.nodeName, a = e.attr("aria-disabled");
        return iy.includes(r) && e.hasAttr("disabled") ? t = !0 : a ? t = a.toLowerCase() === "true" : e.parent ? t = yu(e.parent) : t = !1, e._isDisabled = t, t;
      }
      var xr = yu, Du = {};
      Te(Du, {
        getAllCells: function() {
          return $n;
        },
        getCellPosition: function() {
          return ua;
        },
        getHeaders: function() {
          return va;
        },
        getScope: function() {
          return Tn;
        },
        isColumnHeader: function() {
          return $t;
        },
        isDataCell: function() {
          return _u;
        },
        isDataTable: function() {
          return ga;
        },
        isHeader: function() {
          return dy;
        },
        isRowHeader: function() {
          return Wt;
        },
        toArray: function() {
          return dt;
        },
        toGrid: function() {
          return dt;
        },
        traverse: function() {
          return Wn;
        }
      });
      function oy(e) {
        var t, r, a, n, i = [];
        for (t = 0, a = e.rows.length; t < a; t++)
          for (r = 0, n = e.rows[t].cells.length; r < n; r++)
            i.push(e.rows[t].cells[r]);
        return i;
      }
      var $n = oy;
      function wu(e, t, r) {
        for (var a = e === "row" ? "_rowHeaders" : "_colHeaders", n = e === "row" ? Wt : $t, i = r[t.y][t.x], o = i.colSpan - 1, l = i.getAttribute("rowspan"), s = parseInt(l) === 0 || i.rowspan === 0 ? r.length : i.rowSpan, u = s - 1, c = t.y + u, d = t.x + o, f = e === "row" ? t.y : 0, p = e === "row" ? 0 : t.x, m, b = [], D = c; D >= f && !m; D--)
          for (var v = d; v >= p; v--) {
            var g = r[D] ? r[D][v] : void 0;
            if (!!g) {
              var x = h.utils.getNodeFromTree(g);
              if (x[a]) {
                m = x[a];
                break;
              }
              b.push(g);
            }
          }
        return m = (m || []).concat(b.filter(n)), b.forEach(function(E) {
          var F = h.utils.getNodeFromTree(E);
          F[a] = m;
        }), m;
      }
      function ly(e, t) {
        if (e.getAttribute("headers")) {
          var r = nt(e, "headers");
          if (r.filter(function(o) {
            return o;
          }).length)
            return r;
        }
        t || (t = dt(jt(e, "table")));
        var a = ua(e, t), n = wu("row", a, t), i = wu("col", a, t);
        return [].concat(n, i).reverse();
      }
      var va = ly;
      function uy(e) {
        if (!e.children.length && !e.textContent.trim())
          return !1;
        var t = e.getAttribute("role");
        return zt(t) ? ["cell", "gridcell"].includes(t) : e.nodeName.toUpperCase() === "TD";
      }
      var _u = uy;
      function sy(e) {
        var t = (e.getAttribute("role") || "").toLowerCase();
        if ((t === "presentation" || t === "none") && !je(e))
          return !1;
        if (e.getAttribute("contenteditable") === "true" || jt(e, '[contenteditable="true"]') || t === "grid" || t === "treegrid" || t === "table" || Yt(t) === "landmark")
          return !0;
        if (e.getAttribute("datatable") === "0")
          return !1;
        if (e.getAttribute("summary") || e.tHead || e.tFoot || e.caption)
          return !0;
        for (var r = 0, a = e.children.length; r < a; r++)
          if (e.children[r].nodeName.toUpperCase() === "COLGROUP")
            return !0;
        for (var n = 0, i = e.rows.length, o, l, s = !1, u = 0; u < i; u++) {
          o = e.rows[u];
          for (var c = 0, d = o.cells.length; c < d; c++) {
            if (l = o.cells[c], l.nodeName.toUpperCase() === "TH" || (!s && (l.offsetWidth !== l.clientWidth || l.offsetHeight !== l.clientHeight) && (s = !0), l.getAttribute("scope") || l.getAttribute("headers") || l.getAttribute("abbr")) || ["columnheader", "rowheader"].includes((l.getAttribute("role") || "").toLowerCase()) || l.children.length === 1 && l.children[0].nodeName.toUpperCase() === "ABBR")
              return !0;
            n++;
          }
        }
        if (e.getElementsByTagName("table").length || i < 2)
          return !1;
        var f = e.rows[Math.ceil(i / 2)];
        if (f.cells.length === 1 && f.cells[0].colSpan === 1)
          return !1;
        if (f.cells.length >= 5 || s)
          return !0;
        var p, m;
        for (u = 0; u < i; u++) {
          if (o = e.rows[u], p && p !== y.getComputedStyle(o).getPropertyValue("background-color") || (p = y.getComputedStyle(o).getPropertyValue("background-color"), m && m !== y.getComputedStyle(o).getPropertyValue("background-image")))
            return !0;
          m = y.getComputedStyle(o).getPropertyValue("background-image");
        }
        return i >= 20 ? !0 : !(an(e).width > Wr(y).width * 0.95 || n < 10 || e.querySelector("object, embed, iframe, applet"));
      }
      var ga = sy;
      function cy(e) {
        if ($t(e) || Wt(e))
          return !0;
        if (e.getAttribute("id")) {
          var t = Fe(e.getAttribute("id"));
          return !!R.querySelector('[headers~="'.concat(t, '"]'));
        }
        return !1;
      }
      var dy = cy;
      function xu(e, t, r, a) {
        var n, i = r[t.y] ? r[t.y][t.x] : void 0;
        return i ? typeof a == "function" && (n = a(i, t, r), n === !0) ? [i] : (n = xu(e, {
          x: t.x + e.x,
          y: t.y + e.y
        }, r, a), n.unshift(i), n) : [];
      }
      function fy(e, t, r, a) {
        if (Array.isArray(t) && (a = r, r = t, t = {
          x: 0,
          y: 0
        }), typeof e == "string")
          switch (e) {
            case "left":
              e = {
                x: -1,
                y: 0
              };
              break;
            case "up":
              e = {
                x: 0,
                y: -1
              };
              break;
            case "right":
              e = {
                x: 1,
                y: 0
              };
              break;
            case "down":
              e = {
                x: 0,
                y: 1
              };
              break;
          }
        return xu(e, {
          x: t.x + e.x,
          y: t.y + e.y
        }, r, a);
      }
      var Wn = fy;
      function py(e, t, r) {
        var a = br.accessibleTextVirtual(r), n = br.sanitize(br.removeUnicode(a, {
          emoji: !0,
          nonBmp: !0,
          punctuations: !0
        })).toLowerCase();
        if (!!n) {
          var i = {
            name: n,
            urlProps: en.urlPropsFromAttribute(e, "href")
          };
          return this.data(i), this.relatedNodes([e]), !0;
        }
      }
      var my = py;
      function hy(e, t, r) {
        var a = et(r, "a[href]");
        return a.some(function(n) {
          return /^#[^/!]/.test(n.attr("href"));
        });
      }
      var vy = hy;
      function gy(e, t, r) {
        var a = r.attr("content") || "", n = a.split(/[;,]/);
        return a === "" || n[0] === "0";
      }
      var by = gy;
      function yy(e) {
        switch (e) {
          case "lighter":
            return 100;
          case "normal":
            return 400;
          case "bold":
            return 700;
          case "bolder":
            return 900;
        }
        return e = parseInt(e), isNaN(e) ? 400 : e;
      }
      function Dy(e) {
        for (var t = e, r = e.textContent.trim(), a = r; a === r && t !== void 0; ) {
          var n = -1;
          if (e = t, e.children.length === 0)
            return e;
          do
            n++, a = e.children[n].textContent.trim();
          while (a === "" && n + 1 < e.children.length);
          t = e.children[n];
        }
        return e;
      }
      function Gn(e) {
        var t = y.getComputedStyle(Dy(e));
        return {
          fontWeight: yy(t.getPropertyValue("font-weight")),
          fontSize: parseInt(t.getPropertyValue("font-size")),
          isItalic: t.getPropertyValue("font-style") === "italic"
        };
      }
      function Eu(e, t, r) {
        return r.reduce(function(a, n) {
          return a || (!n.size || e.fontSize / n.size > t.fontSize) && (!n.weight || e.fontWeight - n.weight > t.fontWeight) && (!n.italic || e.isItalic && !t.isItalic);
        }, !1);
      }
      function wy(e, t, r) {
        var a = Array.from(e.parentNode.children), n = a.indexOf(e);
        t = t || {};
        var i = t.margins || [], o = a.slice(n + 1).find(function(D) {
          return D.nodeName.toUpperCase() === "P";
        }), l = a.slice(0, n).reverse().find(function(D) {
          return D.nodeName.toUpperCase() === "P";
        }), s = Gn(e), u = o ? Gn(o) : null, c = l ? Gn(l) : null, d = t.passLength, f = t.failLength, p = e.textContent.trim().length, m = o == null ? void 0 : o.textContent.trim().length;
        if (p > m * d || !u || !Eu(s, u, i))
          return !0;
        var b = Ft(r, "blockquote");
        if (!(b && b.nodeName.toUpperCase() === "BLOCKQUOTE") && !(c && !Eu(s, c, i)) && !(p > m * f))
          return !1;
      }
      var _y = wy;
      function xy(e) {
        var t = e.filter(function(r) {
          return r.data.isIframe;
        });
        return e.forEach(function(r) {
          if (!(r.result || r.node.ancestry.length === 1)) {
            var a = r.node.ancestry.slice(0, -1), n = Rr(t), i;
            try {
              for (n.s(); !(i = n.n()).done; ) {
                var o = i.value;
                if (wn(a, o.node.ancestry)) {
                  r.result = o.result;
                  break;
                }
              }
            } catch (l) {
              n.e(l);
            } finally {
              n.f();
            }
          }
        }), t.forEach(function(r) {
          r.result || (r.result = !0);
        }), e;
      }
      var Ey = xy, Ay = Kt("landmark"), Cy = ["alert", "log", "status"];
      function Fy(e, t) {
        var r = e.actualNode, a = ce(e), n = (r.getAttribute("aria-live") || "").toLowerCase().trim();
        return !!(["assertive", "polite"].includes(n) || Cy.includes(a) || Ay.includes(a) || t.regionMatcher && hr(e, t.regionMatcher));
      }
      function Au(e, t) {
        var r = e.actualNode;
        if (ce(e) === "button" || Fy(e, t) || ["iframe", "frame"].includes(e.props.nodeName) || cn(e.actualNode) && rn(e.actualNode, "href") || !he(r, !0)) {
          for (var a = e; a; )
            a._hasRegionDescendant = !0, a = a.parent;
          return ["iframe", "frame"].includes(e.props.nodeName) ? [e] : [];
        } else
          return r !== R.body && Xr(r, !0) ? [e] : e.children.filter(function(n) {
            var i = n.actualNode;
            return i.nodeType === 1;
          }).map(function(n) {
            return Au(n, t);
          }).reduce(function(n, i) {
            return n.concat(i);
          }, []);
      }
      function ky(e, t, r) {
        var a = H.get("regionlessNodes");
        if (this.data({
          isIframe: ["iframe", "frame"].includes(r.props.nodeName)
        }), a)
          return !a.includes(r);
        var n = h._tree;
        return a = Au(n[0], t).map(function(i) {
          for (; i.parent && !i.parent._hasRegionDescendant && i.parent.actualNode !== R.body; )
            i = i.parent;
          return i;
        }).filter(function(i, o, l) {
          return l.indexOf(i) === o;
        }), H.set("regionlessNodes", a), !a.includes(r);
      }
      var Ry = ky;
      function Ty(e) {
        var t = rn(e, "href");
        return t ? he(t, !0) || void 0 : !1;
      }
      var Sy = Ty;
      function Oy(e) {
        var t = {};
        return e.forEach(function(r) {
          t[r.data] = t[r.data] !== void 0 ? ++t[r.data] : 0;
        }), e.forEach(function(r) {
          r.result = !!t[r.data];
        }), e;
      }
      var Ny = Oy;
      function Iy(e, t, r) {
        var a = te(r.attr("title")).toLowerCase();
        return this.data(a), !0;
      }
      var Py = Iy;
      function My(e) {
        var t = [];
        return e.filter(function(r) {
          return t.indexOf(r.data) === -1 ? (t.push(r.data), !0) : !1;
        });
      }
      var Ly = My;
      function qy(e) {
        var t = e.getAttribute("id").trim();
        if (!t)
          return !0;
        var r = Be(e), a = Array.from(r.querySelectorAll('[id="'.concat(Fe(t), '"]'))).filter(function(n) {
          return n !== e;
        });
        return a.length && this.relatedNodes(a), this.data(t), a.length === 0;
      }
      var By = qy;
      function jy(e, t, r) {
        return !!te(mr(r));
      }
      var Vy = jy;
      function Uy(e, t, r) {
        try {
          return !!te(gr(r));
        } catch {
          return;
        }
      }
      var Hy = Uy;
      function zy(e, t) {
        var r = t.cssProperties.filter(function(a) {
          if (e.style.getPropertyPriority(a) === "important")
            return a;
        });
        return r.length > 0 ? (this.data(r), !1) : !0;
      }
      var $y = zy;
      function Wy() {
        var e = R.title;
        return !!te(e);
      }
      var Gy = Wy;
      function Yy() {
      }
      var Ky = Yy;
      function Xy(e, t, r) {
        var a = r.props.nodeName;
        return ["img", "input", "area"].includes(a) ? r.hasAttr("alt") : !1;
      }
      var Jy = Xy;
      function Qy(e) {
        return he(e, !1) && !Gr(e);
      }
      var Zy = Qy;
      function eD(e, t, r) {
        var a = r.props.nodeName, n = (r.attr("type") || "").toLowerCase(), i = r.attr("value");
        return i && this.data({
          messageKey: "has-label"
        }), a === "input" && ["submit", "reset"].includes(n) ? i === null : !1;
      }
      var tD = eD;
      function rD(e, t, r) {
        var a = ce(r), n = be(r);
        if (["presentation", "none"].includes(a))
          return this.data({
            role: a
          }), !0;
        if (!["presentation", "none"].includes(n))
          return !1;
        var i = Ht().some(function(s) {
          return r.hasAttr(s);
        }), o = je(r), l;
        return i && !o ? l = "globalAria" : !i && o ? l = "focusable" : l = "both", this.data({
          messageKey: l,
          role: a
        }), !1;
      }
      var aD = rD;
      function nD(e, t, r) {
        if (!!r.children) {
          var a = r.children.find(function(n) {
            var i = n.props;
            return i.nodeName === "title";
          });
          if (!a)
            return this.data({
              messageKey: "noTitle"
            }), !1;
          try {
            if (it(a) === "")
              return this.data({
                messageKey: "emptyTitle"
              }), !1;
          } catch {
            return;
          }
          return !0;
        }
      }
      var iD = nD;
      function oD(e) {
        var t = dt(e), r = t[0];
        return t.length <= 1 || r.length <= 1 || e.rows.length <= 1 ? !0 : r.reduce(function(a, n, i) {
          return a || n !== r[i + 1] && r[i + 1] !== void 0;
        }, !1);
      }
      var lD = oD;
      function uD(e) {
        return go(R) ? e.nodeName.toUpperCase() === "TH" : !0;
      }
      var sD = uD;
      function cD(e) {
        return !!(e.summary && e.caption) && e.summary.toLowerCase() === bt(e.caption).toLowerCase();
      }
      var dD = cD;
      function fD(e, t) {
        var r = e.getAttribute("scope").toLowerCase();
        return t.values.indexOf(r) !== -1;
      }
      var pD = fD;
      function mD(e) {
        var t = [], r = $n(e), a = dt(e);
        return r.forEach(function(n) {
          if (Xr(n) && _u(n) && !Gl(n)) {
            var i = va(n, a).some(function(o) {
              return o !== null && !!Xr(o);
            });
            i || t.push(n);
          }
        }), t.length ? (this.relatedNodes(t), !1) : !0;
      }
      var hD = mD;
      function vD(e) {
        for (var t = [], r = [], a = [], n = 0; n < e.rows.length; n++)
          for (var i = e.rows[n], o = 0; o < i.cells.length; o++)
            t.push(i.cells[o]);
        var l = t.reduce(function(s, u) {
          return u.getAttribute("id") && s.push(u.getAttribute("id")), s;
        }, []);
        if (t.forEach(function(s) {
          var u = !1, c = !1;
          if (!!s.hasAttribute("headers")) {
            var d = s.getAttribute("headers").trim();
            if (!d)
              return r.push(s);
            var f = Ve(d);
            f.length !== 0 && (s.getAttribute("id") && (u = f.indexOf(s.getAttribute("id").trim()) !== -1), c = f.some(function(p) {
              return !l.includes(p);
            }), (u || c) && a.push(s));
          }
        }), a.length > 0)
          return this.relatedNodes(a), !1;
        if (r.length) {
          this.relatedNodes(r);
          return;
        }
        return !0;
      }
      var gD = vD;
      function bD(e) {
        var t = $n(e), r = this, a = [];
        t.forEach(function(l) {
          var s = l.getAttribute("headers");
          s && (a = a.concat(s.split(/\s+/)));
          var u = l.getAttribute("aria-labelledby");
          u && (a = a.concat(u.split(/\s+/)));
        });
        var n = t.filter(function(l) {
          return te(l.textContent) === "" ? !1 : l.nodeName.toUpperCase() === "TH" || ["rowheader", "columnheader"].indexOf(l.getAttribute("role")) !== -1;
        }), i = dt(e), o = !0;
        return n.forEach(function(l) {
          if (!(l.getAttribute("id") && a.includes(l.getAttribute("id")))) {
            var s = ua(l, i), u = !1;
            $t(l) && (u = Wn("down", s, i).find(function(c) {
              return !$t(c) && va(c, i).includes(l);
            })), !u && Wt(l) && (u = Wn("right", s, i).find(function(c) {
              return !Wt(c) && va(c, i).includes(l);
            })), u || r.relatedNodes(l), o = o && u;
          }
        }), o ? !0 : void 0;
      }
      var yD = bD;
      function DD(e, t, r) {
        var a = ["SCRIPT", "HEAD", "TITLE", "NOSCRIPT", "STYLE", "TEMPLATE"];
        if (!a.includes(e.nodeName.toUpperCase()) && cr(r)) {
          var n = y.getComputedStyle(e);
          if (n.getPropertyValue("display") === "none")
            return;
          if (n.getPropertyValue("visibility") === "hidden") {
            var i = He(e), o = i && y.getComputedStyle(i);
            if (!o || o.getPropertyValue("visibility") !== "hidden")
              return;
          }
        }
        return !0;
      }
      var wD = DD;
      function _D(e, t) {
        var r = /^aria-/, a = t.attrNames;
        if (a.length) {
          for (var n = 0, i = a.length; n < i; n++)
            if (r.test(a[n]))
              return !0;
        }
        return !1;
      }
      var xD = _D;
      function ED(e, t) {
        return be(t, {
          dpub: !0,
          fallback: !0
        }) !== null;
      }
      var AD = ED;
      function CD(e, t) {
        var r = /^aria-/;
        return t.attrNames.some(function(a) {
          return r.test(a);
        });
      }
      var FD = CD;
      function Cu(e) {
        return e ? e.getAttribute("aria-hidden") === "true" ? !1 : Cu(He(e)) : !0;
      }
      function kD(e) {
        return Cu(He(e));
      }
      var RD = kD;
      function TD(e, t) {
        var r = be(t, {
          dpub: !0
        });
        return !!Vn(r);
      }
      var SD = TD;
      function OD(e, t) {
        var r = be(t);
        return !!jn(r);
      }
      var ND = OD;
      function ID(e, t) {
        var r = t.attr("autocomplete");
        if (!r || te(r) === "")
          return !1;
        var a = t.props.nodeName;
        if (["textarea", "input", "select"].includes(a) === !1)
          return !1;
        var n = ["submit", "reset", "button", "hidden"];
        if (a === "input" && n.includes(t.props.type))
          return !1;
        var i = t.attr("aria-disabled") || "false";
        if (t.hasAttr("disabled") || i.toLowerCase() === "true")
          return !1;
        var o = t.attr("role"), l = t.attr("tabindex");
        if (l === "-1" && o) {
          var s = le.ariaRoles[o];
          if (s === void 0 || s.type !== "widget")
            return !1;
        }
        return !(l === "-1" && t.actualNode && !he(t.actualNode, !1) && !he(t.actualNode, !0));
      }
      var PD = ID;
      function MD(e, t, r) {
        return r.initiator;
      }
      var Fu = MD;
      function LD(e, t, r) {
        return Fu(e, t, r) ? !!e.querySelector("a[href]") : !0;
      }
      var qD = LD;
      function BD(e, t) {
        var r = t.props, a = r.nodeName, n = r.type;
        if (a === "option" || a === "select" && !e.options.length)
          return !1;
        var i = ["hidden", "range", "color", "checkbox", "radio", "image"];
        if (a === "input" && i.includes(n) || xr(t))
          return !1;
        var o = ["input", "select", "textarea"];
        if (o.includes(a)) {
          var l = y.getComputedStyle(e), s = parseInt(l.getPropertyValue("text-indent"), 10);
          if (s) {
            var u = e.getBoundingClientRect();
            if (u = {
              top: u.top,
              bottom: u.bottom,
              left: u.left + s,
              right: u.right + s
            }, !dn(u, e))
              return !1;
          }
          return !0;
        }
        var c = Ft(t, "label");
        if (a === "label" || c) {
          var d = c || e, f = c ? V(c) : t;
          if (d.htmlFor) {
            var p = Be(d), m = p.getElementById(d.htmlFor), b = m && V(m);
            if (b && xr(b))
              return !1;
          }
          var D = 'input:not([type="hidden"],[type="image"],[type="button"],[type="submit"],[type="reset"]), select, textarea', v = et(f, D)[0];
          if (v && xr(v))
            return !1;
        }
        for (var g = [], x = t; x; ) {
          if (x.props.id) {
            var E = qn(x).filter(function(Z) {
              return Ve(Z.getAttribute("aria-labelledby") || "").includes(x.props.id);
            }).map(function(Z) {
              return V(Z);
            });
            g.push.apply(g, ie(E));
          }
          x = x.parent;
        }
        if (g.length > 0 && g.every(xr))
          return !1;
        var F = it(t, !1, !0), I = {
          emoji: !0,
          nonBmp: !1,
          punctuations: !0
        };
        if (!F || !yr(F, I))
          return !1;
        for (var M = R.createRange(), U = t.children, Q = 0; Q < U.length; Q++) {
          var L = U[Q];
          L.actualNode.nodeType === 3 && te(L.actualNode.nodeValue) !== "" && M.selectNodeContents(L.actualNode);
        }
        for (var X = M.getClientRects(), Y = 0; Y < X.length; Y++)
          if (dn(X[Y], e))
            return !0;
        return !1;
      }
      var jD = BD;
      function VD(e) {
        if (ga(e)) {
          var t = dt(e);
          return t.length >= 3 && t[0].length >= 3 && t[1].length >= 3 && t[2].length >= 3;
        }
        return !1;
      }
      var UD = VD;
      function HD(e) {
        return ga(e);
      }
      var zD = HD;
      function $D(e) {
        var t = e.getAttribute("id").trim(), r = '*[id="'.concat(Fe(t), '"]'), a = Array.from(Be(e).querySelectorAll(r));
        return !fa(e) && a.some(je);
      }
      var WD = $D;
      function GD(e) {
        return fa(e);
      }
      var YD = GD;
      function KD(e) {
        var t = e.getAttribute("id").trim(), r = '*[id="'.concat(Fe(t), '"]'), a = Array.from(Be(e).querySelectorAll(r));
        return !fa(e) && a.every(function(n) {
          return !je(n);
        });
      }
      var XD = KD;
      function JD(e, t, r) {
        var a, n;
        return !r.initiator && !r.focusable && ((a = r.size) === null || a === void 0 ? void 0 : a.width) * ((n = r.size) === null || n === void 0 ? void 0 : n.height) > 1;
      }
      var QD = JD;
      function ZD(e) {
        var t = e.getAttribute("title");
        return !!te(t);
      }
      var ew = ZD;
      function tw(e, t) {
        return ut(t, {
          chromium: !0
        }) !== null;
      }
      var rw = tw;
      function aw(e) {
        var t;
        return e.hasAttribute("role") && (t = e.getAttribute("role").split(/\s+/i).filter(h.commons.aria.isValidRole)), t && t.length > 0 ? t.includes("heading") : h.commons.aria.implicitRole(e) === "heading";
      }
      var nw = aw;
      function iw(e, t) {
        try {
          var r = t.props.nodeName;
          return r === "svg" ? !0 : !!Qe(t, "svg");
        } catch {
          return !1;
        }
      }
      var ku = iw;
      function ow(e, t) {
        return !ku(e, t);
      }
      var lw = ow;
      function uw(e, t) {
        var r = !!ze(t);
        if (!r)
          return !1;
        var a = ce(e);
        return !(a && a !== "link");
      }
      var sw = uw;
      function cw(e) {
        return vo(e);
      }
      var dw = cw;
      function fw(e, t) {
        var r = ce(e);
        if (!r)
          return !1;
        var a = Kt("widget"), n = a.includes(r);
        if (!n)
          return !1;
        var i = Bn();
        return !(!i.includes(r) || !te(mr(t)) && !te(gr(e)) || !te(it(t)));
      }
      var pw = fw;
      function mw(e, t) {
        if (t.props.nodeName !== "input" || t.hasAttr("type") === !1)
          return !0;
        var r = t.attr("type").toLowerCase();
        return ["hidden", "image", "button", "submit", "reset"].includes(r) === !1;
      }
      var hw = mw;
      function vw(e, t) {
        var r = "article, aside, main, nav, section";
        return e.hasAttribute("role") || !Ft(t, r);
      }
      var gw = vw;
      function bw(e, t) {
        var r = ["article", "aside", "main", "nav", "section"].join(",");
        function a(i) {
          return !Ft(i, r);
        }
        function n(i) {
          var o = i.actualNode, l = Kt("landmark"), s = ce(o);
          if (!s)
            return !1;
          var u = o.nodeName.toUpperCase();
          if (u === "HEADER" || u === "FOOTER")
            return a(i);
          if (u === "SECTION" || u === "FORM") {
            var c = ze(i);
            return !!c;
          }
          return l.indexOf(s) >= 0 || s === "region";
        }
        return n(t) && he(e, !0);
      }
      var yw = bw;
      function Dw(e) {
        return !ga(e) && !je(e);
      }
      var ww = Dw;
      function _w(e) {
        var t = te(e.textContent), r = e.getAttribute("role");
        return r && r !== "link" || !t || !he(e, !1) ? !1 : Do(e);
      }
      var xw = _w;
      function Ew(e, t) {
        var r = ce(t);
        return r ? !!le.ariaRoles[r].childrenPresentational : !1;
      }
      var Aw = Ew;
      function Cw(e) {
        return !(!e.currentSrc || e.hasAttribute("paused") || e.hasAttribute("muted"));
      }
      var Fw = Cw;
      function kw(e, t) {
        return !(!t.hasAttr("role") || !t.attr("role").trim());
      }
      var Rw = kw;
      function Tw(e, t) {
        var r = be(t);
        if (!r || ["none", "presentation"].includes(r))
          return !0;
        var a = _o[r] || {}, n = a.accessibleNameRequired;
        return !!(n || je(t));
      }
      var Sw = Tw;
      function Ow(e, t) {
        var r = St(t), a = r.namingMethods;
        return !(a && a.length !== 0 || be(t) === "combobox" && et(t, 'input:not([type="hidden"])').length);
      }
      var Nw = Ow;
      function Iw(e) {
        return !e.getAttribute("role");
      }
      var Pw = Iw;
      function Mw(e, t) {
        return t.props.nodeName !== "html";
      }
      var Lw = Mw;
      function qw(e) {
        var t = Array.from(e.parentNode.childNodes), r = e.textContent.trim(), a = /[.!?:;](?![.!?:;])/g;
        if (r.length === 0 || (r.match(a) || []).length >= 2)
          return !1;
        var n = t.slice(t.indexOf(e) + 1).filter(function(i) {
          return i.nodeName.toUpperCase() === "P" && i.textContent.trim() !== "";
        });
        return n.length !== 0;
      }
      var Bw = qw;
      function jw(e, t) {
        return ut(t, {
          chromiumRoles: !0
        }) !== null;
      }
      var Vw = jw;
      function Uw(e, t) {
        if (!gt(e, 13))
          return !1;
        var r = be(t);
        if (wo["aria-haspopup"].values.includes(r)) {
          if (Qe(t, '[role~="combobox"]'))
            return !1;
          var a = t.attr("id");
          if (a) {
            var n = $r(e), i = Array.from(n.querySelectorAll('[aria-owns~="'.concat(a, '"], [aria-controls~="').concat(a, '"]'))), o = i.some(function(u) {
              var c = Ve(u.getAttribute("role"));
              return c.includes("combobox");
            });
            if (o)
              return !1;
          }
        }
        var l = et(t, "*"), s = l.some(function(u) {
          return cr(u, !0, !0);
        });
        return !!s;
      }
      var Hw = Uw;
      function zw(e) {
        return cn(e) && Gr(e);
      }
      var $w = zw;
      function Ww(e) {
        return e.ownerDocument.defaultView.self === e.ownerDocument.defaultView.top;
      }
      var Gw = Ww;
      function Yw(e) {
        var t = Rt(e.getAttribute("lang")), r = Rt(e.getAttribute("xml:lang"));
        return la(t) && la(r);
      }
      var Kw = Yw, Xw = {
        "abstractrole-evaluate": qh,
        "accesskeys-after": Tg,
        "accesskeys-evaluate": Og,
        "alt-space-value-evaluate": eb,
        "aria-allowed-attr-evaluate": jh,
        "aria-allowed-attr-matches": xD,
        "aria-allowed-role-evaluate": Uh,
        "aria-allowed-role-matches": AD,
        "aria-errormessage-evaluate": zh,
        "aria-has-attr-matches": FD,
        "aria-hidden-body-evaluate": Wh,
        "aria-hidden-focus-matches": RD,
        "aria-label-evaluate": Vy,
        "aria-labelledby-evaluate": Hy,
        "aria-level-evaluate": Yh,
        "aria-prohibited-attr-evaluate": Kh,
        "aria-required-attr-evaluate": Qh,
        "aria-required-children-evaluate": rv,
        "aria-required-children-matches": SD,
        "aria-required-parent-evaluate": iv,
        "aria-required-parent-matches": ND,
        "aria-roledescription-evaluate": lv,
        "aria-unsupported-attr-evaluate": sv,
        "aria-valid-attr-evaluate": dv,
        "aria-valid-attr-value-evaluate": pv,
        "attr-non-space-content-evaluate": vg,
        "autocomplete-appropriate-evaluate": fg,
        "autocomplete-matches": PD,
        "autocomplete-valid-evaluate": mg,
        "avoid-inline-spacing-evaluate": $y,
        "bypass-matches": qD,
        "caption-evaluate": Lb,
        "caption-faked-evaluate": lD,
        "color-contrast-evaluate": ig,
        "color-contrast-matches": jD,
        "css-orientation-lock-evaluate": $b,
        "data-table-large-matches": UD,
        "data-table-matches": zD,
        "deprecatedrole-evaluate": mv,
        "dlitem-evaluate": kb,
        "doc-has-title-evaluate": Gy,
        "duplicate-id-active-matches": WD,
        "duplicate-id-after": Ly,
        "duplicate-id-aria-matches": YD,
        "duplicate-id-evaluate": By,
        "duplicate-id-misc-matches": XD,
        "duplicate-img-label-evaluate": rb,
        "exists-evaluate": Ky,
        "explicit-evaluate": nb,
        "fallbackrole-evaluate": gv,
        "focusable-content-evaluate": Ig,
        "focusable-disabled-evaluate": Mg,
        "focusable-element-evaluate": qg,
        "focusable-modal-open-evaluate": jg,
        "focusable-no-name-evaluate": Ug,
        "focusable-not-tabbable-evaluate": zg,
        "frame-focusable-content-evaluate": Wg,
        "frame-focusable-content-matches": QD,
        "frame-tested-after": Bb,
        "frame-tested-evaluate": Vb,
        "frame-title-has-text-matches": ew,
        "has-alt-evaluate": Jy,
        "has-descendant-after": bg,
        "has-descendant-evaluate": Dg,
        "has-global-aria-attribute-evaluate": yv,
        "has-implicit-chromium-role-matches": rw,
        "has-lang-evaluate": _b,
        "has-text-content-evaluate": _g,
        "has-widget-role-evaluate": wv,
        "heading-matches": nw,
        "heading-order-after": Yb,
        "heading-order-evaluate": ry,
        "help-same-as-label-evaluate": ob,
        "hidden-content-evaluate": wD,
        "hidden-explicit-label-evaluate": ub,
        "html-namespace-matches": lw,
        "html5-scope-evaluate": sD,
        "identical-links-same-purpose-after": ny,
        "identical-links-same-purpose-evaluate": my,
        "identical-links-same-purpose-matches": sw,
        "implicit-evaluate": cb,
        "inserted-into-focus-order-matches": dw,
        "internal-link-present-evaluate": vy,
        "invalidrole-evaluate": xv,
        "is-element-focusable-evaluate": Av,
        "is-initiator-matches": Fu,
        "is-on-screen-evaluate": Zy,
        "label-content-name-mismatch-evaluate": fb,
        "label-content-name-mismatch-matches": pw,
        "label-matches": hw,
        "landmark-has-body-context-matches": gw,
        "landmark-is-top-level-evaluate": Yg,
        "landmark-is-unique-after": bb,
        "landmark-is-unique-evaluate": Db,
        "landmark-unique-matches": yw,
        "layout-table-matches": ww,
        "link-in-text-block-evaluate": cg,
        "link-in-text-block-matches": xw,
        "listitem-evaluate": Rb,
        "matches-definition-evaluate": Eg,
        "meta-refresh-evaluate": by,
        "meta-viewport-scale-evaluate": Gb,
        "multiple-label-evaluate": mb,
        "nested-interactive-matches": Aw,
        "no-autoplay-audio-evaluate": Hb,
        "no-autoplay-audio-matches": Fw,
        "no-empty-role-matches": Rw,
        "no-explicit-name-required-matches": Sw,
        "no-focusable-content-evaluate": Kg,
        "no-implicit-explicit-label-evaluate": Fv,
        "no-naming-method-matches": Nw,
        "no-role-matches": Pw,
        "non-empty-if-present-evaluate": tD,
        "not-html-matches": Lw,
        "only-dlitems-evaluate": Sb,
        "only-listitems-evaluate": Nb,
        "p-as-heading-evaluate": _y,
        "p-as-heading-matches": Bw,
        "page-no-duplicate-after": Cg,
        "page-no-duplicate-evaluate": kg,
        "presentation-role-conflict-matches": Vw,
        "presentational-role-evaluate": aD,
        "region-after": Ey,
        "region-evaluate": Ry,
        "same-caption-summary-evaluate": dD,
        "scope-value-evaluate": pD,
        "scrollable-region-focusable-matches": Hw,
        "skip-link-evaluate": Sy,
        "skip-link-matches": $w,
        "structured-dlitems-evaluate": Pb,
        "svg-namespace-matches": ku,
        "svg-non-empty-title-evaluate": iD,
        "tabindex-evaluate": Qg,
        "td-has-header-evaluate": hD,
        "td-headers-attr-evaluate": gD,
        "th-has-data-cells-evaluate": yD,
        "title-only-evaluate": vb,
        "unique-frame-title-after": Ny,
        "unique-frame-title-evaluate": Py,
        "unsupportedrole-evaluate": Rv,
        "valid-lang-evaluate": Eb,
        "valid-scrollable-semantics-evaluate": Pv,
        "window-is-top-matches": Gw,
        "xml-lang-mismatch-evaluate": Cb,
        "xml-lang-mismatch-matches": Kw
      }, ba = Xw;
      function Jw(e) {
        this.id = e.id, this.data = null, this.relatedNodes = [], this.result = null;
      }
      var Yn = Jw;
      function Kn(e) {
        if (typeof e == "string") {
          if (ba[e])
            return ba[e];
          if (/^\s*function[\s\w]*\(/.test(e))
            return new Function("return " + e + ";")();
          throw new ReferenceError("Function ID does not exist in the metadata-function-map: ".concat(e));
        }
        return e;
      }
      function Ru() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return (Array.isArray(e) || P(e) !== "object") && (e = {
          value: e
        }), e;
      }
      function Jt(e) {
        e && (this.id = e.id, this.configure(e));
      }
      Jt.prototype.enabled = !0, Jt.prototype.run = function(t, r, a, n, i) {
        r = r || {};
        var o = r.hasOwnProperty("enabled") ? r.enabled : this.enabled, l = this.getOptions(r.options);
        if (o) {
          var s = new Yn(this), u = $a(s, r, n, i), c;
          try {
            c = this.evaluate.call(u, t.actualNode, l, t, a);
          } catch (d) {
            t && t.actualNode && (d.errorNode = new rt(t).toJSON()), i(d);
            return;
          }
          u.isAsync || (s.result = c, n(s));
        } else
          n(null);
      }, Jt.prototype.runSync = function(t, r, a) {
        r = r || {};
        var n = r, i = n.enabled, o = i === void 0 ? this.enabled : i;
        if (!o)
          return null;
        var l = this.getOptions(r.options), s = new Yn(this), u = $a(s, r);
        u.async = function() {
          throw new Error("Cannot run async check while in a synchronous run");
        };
        var c;
        try {
          c = this.evaluate.call(u, t.actualNode, l, t, a);
        } catch (d) {
          throw t && t.actualNode && (d.errorNode = new rt(t).toJSON()), d;
        }
        return s.result = c, s;
      }, Jt.prototype.configure = function(t) {
        var r = this;
        (!t.evaluate || ba[t.evaluate]) && (this._internalCheck = !0), t.hasOwnProperty("enabled") && (this.enabled = t.enabled), t.hasOwnProperty("options") && (this._internalCheck ? this.options = Ru(t.options) : this.options = t.options), ["evaluate", "after"].filter(function(a) {
          return t.hasOwnProperty(a);
        }).forEach(function(a) {
          return r[a] = Kn(t[a]);
        });
      }, Jt.prototype.getOptions = function(t) {
        return this._internalCheck ? Qa(this.options, Ru(t || {})) : t || this.options;
      };
      var Tu = Jt;
      function Qw(e) {
        this.id = e.id, this.result = re.NA, this.pageLevel = e.pageLevel, this.impact = null, this.nodes = [];
      }
      var ya = Qw;
      function Ye(e, t) {
        this._audit = t, this.id = e.id, this.selector = e.selector || "*", e.impact && (we(re.impact.includes(e.impact), "Impact ".concat(e.impact, " is not a valid impact")), this.impact = e.impact), this.excludeHidden = typeof e.excludeHidden == "boolean" ? e.excludeHidden : !0, this.enabled = typeof e.enabled == "boolean" ? e.enabled : !0, this.pageLevel = typeof e.pageLevel == "boolean" ? e.pageLevel : !1, this.reviewOnFail = typeof e.reviewOnFail == "boolean" ? e.reviewOnFail : !1, this.any = e.any || [], this.all = e.all || [], this.none = e.none || [], this.tags = e.tags || [], this.preload = !!e.preload, e.matches && (this.matches = Kn(e.matches));
      }
      Ye.prototype.matches = function() {
        return !0;
      }, Ye.prototype.gather = function(t) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = "mark_gather_start_" + this.id, n = "mark_gather_end_" + this.id, i = "mark_isHidden_start_" + this.id, o = "mark_isHidden_end_" + this.id;
        r.performanceTimer && Oe.mark(a);
        var l = Cn(this.selector, t);
        return this.excludeHidden && (r.performanceTimer && Oe.mark(i), l = l.filter(function(s) {
          return !bn(s.actualNode);
        }), r.performanceTimer && (Oe.mark(o), Oe.measure("rule_" + this.id + "#gather_axe.utils.isHidden", i, o))), r.performanceTimer && (Oe.mark(n), Oe.measure("rule_" + this.id + "#gather", a, n)), l;
      }, Ye.prototype.runChecks = function(t, r, a, n, i, o) {
        var l = this, s = lt();
        this[t].forEach(function(u) {
          var c = l._audit.checks[u.id || u], d = ra(c, l.id, a);
          s.defer(function(f, p) {
            c.run(r, d, n, f, p);
          });
        }), s.then(function(u) {
          u = u.filter(function(c) {
            return c;
          }), i({
            type: t,
            results: u
          });
        }).catch(o);
      }, Ye.prototype.runChecksSync = function(t, r, a, n) {
        var i = this, o = [];
        return this[t].forEach(function(l) {
          var s = i._audit.checks[l.id || l], u = ra(s, i.id, a);
          o.push(s.runSync(r, u, n));
        }), o = o.filter(function(l) {
          return l;
        }), {
          type: t,
          results: o
        };
      }, Ye.prototype.run = function(t) {
        var r = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0, i = arguments.length > 3 ? arguments[3] : void 0;
        a.performanceTimer && this._trackPerformance();
        var o = lt(), l = new ya(this), s;
        try {
          s = this.gatherAndMatchNodes(t, a);
        } catch (u) {
          i(new rr({
            cause: u,
            ruleId: this.id
          }));
          return;
        }
        a.performanceTimer && this._logGatherPerformance(s), s.forEach(function(u) {
          o.defer(function(c, d) {
            var f = lt();
            ["any", "all", "none"].forEach(function(p) {
              f.defer(function(m, b) {
                r.runChecks(p, u, a, t, m, b);
              });
            }), f.then(function(p) {
              var m = Su(p);
              m && (m.node = new rt(u, a), l.nodes.push(m), r.reviewOnFail && (["any", "all"].forEach(function(b) {
                m[b].forEach(function(D) {
                  D.result === !1 && (D.result = void 0);
                });
              }), m.none.forEach(function(b) {
                b.result === !0 && (b.result = void 0);
              }))), c();
            }).catch(function(p) {
              return d(p);
            });
          });
        }), o.defer(function(u) {
          return setTimeout(u, 0);
        }), a.performanceTimer && this._logRulePerformance(), o.then(function() {
          return n(l);
        }).catch(function(u) {
          return i(u);
        });
      }, Ye.prototype.runSync = function(t) {
        var r = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        a.performanceTimer && this._trackPerformance();
        var n = new ya(this), i;
        try {
          i = this.gatherAndMatchNodes(t, a);
        } catch (o) {
          throw new rr({
            cause: o,
            ruleId: this.id
          });
        }
        return a.performanceTimer && this._logGatherPerformance(i), i.forEach(function(o) {
          var l = [];
          ["any", "all", "none"].forEach(function(u) {
            l.push(r.runChecksSync(u, o, a, t));
          });
          var s = Su(l);
          s && (s.node = o.actualNode ? new rt(o, a) : null, n.nodes.push(s), r.reviewOnFail && (["any", "all"].forEach(function(u) {
            s[u].forEach(function(c) {
              c.result === !1 && (c.result = void 0);
            });
          }), s.none.forEach(function(u) {
            u.result === !0 && (u.result = void 0);
          })));
        }), a.performanceTimer && this._logRulePerformance(), n;
      }, Ye.prototype._trackPerformance = function() {
        this._markStart = "mark_rule_start_" + this.id, this._markEnd = "mark_rule_end_" + this.id, this._markChecksStart = "mark_runchecks_start_" + this.id, this._markChecksEnd = "mark_runchecks_end_" + this.id;
      }, Ye.prototype._logGatherPerformance = function(t) {
        At("gather (", t.length, "):", Oe.timeElapsed() + "ms"), Oe.mark(this._markChecksStart);
      }, Ye.prototype._logRulePerformance = function() {
        Oe.mark(this._markChecksEnd), Oe.mark(this._markEnd), Oe.measure("runchecks_" + this.id, this._markChecksStart, this._markChecksEnd), Oe.measure("rule_" + this.id, this._markStart, this._markEnd);
      };
      function Su(e) {
        if (e.length) {
          var t = !1, r = {};
          return e.forEach(function(a) {
            var n = a.results.filter(function(i) {
              return i;
            });
            r[a.type] = n, n.length && (t = !0);
          }), t ? r : null;
        }
      }
      Ye.prototype.gatherAndMatchNodes = function(t, r) {
        var a = this, n = "mark_matches_start_" + this.id, i = "mark_matches_end_" + this.id, o = this.gather(t, r);
        return r.performanceTimer && Oe.mark(n), o = o.filter(function(l) {
          return a.matches(l.actualNode, l, t);
        }), r.performanceTimer && (Oe.mark(i), Oe.measure("rule_" + this.id + "#matches", n, i)), o;
      };
      function Zw(e) {
        return Ur(e).map(function(t) {
          var r = e._audit.checks[t.id || t];
          return r && typeof r.after == "function" ? r : null;
        }).filter(Boolean);
      }
      function e_(e, t) {
        var r = [];
        return e.forEach(function(a) {
          var n = Ur(a);
          n.forEach(function(i) {
            i.id === t && (i.node = a.node, r.push(i));
          });
        }), r;
      }
      function t_(e) {
        return e.filter(function(t) {
          return t.filtered !== !0;
        });
      }
      function r_(e) {
        var t = ["any", "all", "none"], r = e.nodes.filter(function(a) {
          var n = 0;
          return t.forEach(function(i) {
            a[i] = t_(a[i]), n += a[i].length;
          }), n > 0;
        });
        return e.pageLevel && r.length && (r = [r.reduce(function(a, n) {
          if (a)
            return t.forEach(function(i) {
              a[i].push.apply(a[i], n[i]);
            }), a;
        })]), r;
      }
      Ye.prototype.after = function(t, r) {
        var a = Zw(this), n = this.id;
        return a.forEach(function(i) {
          var o = e_(t.nodes, i.id), l = ra(i, n, r), s = i.after(o, l);
          o.forEach(function(u) {
            delete u.node, s.indexOf(u) === -1 && (u.filtered = !0);
          });
        }), t.nodes = r_(t), t;
      }, Ye.prototype.configure = function(t) {
        t.hasOwnProperty("selector") && (this.selector = t.selector), t.hasOwnProperty("excludeHidden") && (this.excludeHidden = typeof t.excludeHidden == "boolean" ? t.excludeHidden : !0), t.hasOwnProperty("enabled") && (this.enabled = typeof t.enabled == "boolean" ? t.enabled : !0), t.hasOwnProperty("pageLevel") && (this.pageLevel = typeof t.pageLevel == "boolean" ? t.pageLevel : !1), t.hasOwnProperty("reviewOnFail") && (this.reviewOnFail = typeof t.reviewOnFail == "boolean" ? t.reviewOnFail : !1), t.hasOwnProperty("any") && (this.any = t.any), t.hasOwnProperty("all") && (this.all = t.all), t.hasOwnProperty("none") && (this.none = t.none), t.hasOwnProperty("tags") && (this.tags = t.tags), t.hasOwnProperty("matches") && (this.matches = Kn(t.matches)), t.impact && (we(re.impact.includes(t.impact), "Impact ".concat(t.impact, " is not a valid impact")), this.impact = t.impact);
      };
      var Ou = Ye, Qt = Je(bi()), Zt = /\{\{.+?\}\}/g;
      function Nu() {
        if (y.origin)
          return y.origin;
        if (y.location && y.location.origin)
          return y.location.origin;
      }
      function a_(e) {
        var t;
        if (e ? (t = st(e), t.commons = e.commons) : t = {}, t.reporter = t.reporter || null, t.noHtml = t.noHtml || !1, !t.allowedOrigins) {
          var r = Nu();
          t.allowedOrigins = r ? [r] : [];
        }
        return t.rules = t.rules || [], t.checks = t.checks || [], t.data = de({
          checks: {},
          rules: {}
        }, t.data), t;
      }
      function Iu(e, t, r) {
        var a, n;
        for (a = 0, n = e.length; a < n; a++)
          t[r](e[a]);
      }
      var n_ = function(t, r) {
        var a = r.pass, n = r.fail;
        return typeof a == "string" && Zt.test(a) && (a = Qt.default.compile(a)), typeof n == "string" && Zt.test(n) && (n = Qt.default.compile(n)), de({}, t, {
          messages: {
            pass: a || t.messages.pass,
            fail: n || t.messages.fail,
            incomplete: P(t.messages.incomplete) === "object" ? de({}, t.messages.incomplete, r.incomplete) : r.incomplete
          }
        });
      }, i_ = function(t, r) {
        var a = r.help, n = r.description;
        return typeof a == "string" && Zt.test(a) && (a = Qt.default.compile(a)), typeof n == "string" && Zt.test(n) && (n = Qt.default.compile(n)), de({}, t, {
          help: a || t.help,
          description: n || t.description
        });
      }, o_ = function(t, r) {
        var a = r.failureMessage;
        return typeof a == "string" && Zt.test(a) && (a = Qt.default.compile(a)), de({}, t, {
          failureMessage: a || t.failureMessage
        });
      }, l_ = function(t, r) {
        return typeof r == "string" && Zt.test(r) && (r = Qt.default.compile(r)), r || t;
      }, u_ = function() {
        function e(t) {
          Fr(this, e), this.lang = "en", this.defaultConfig = t, this.standards = le, this._init(), this._defaultLocale = null;
        }
        return kr(e, [{
          key: "_setDefaultLocale",
          value: function() {
            if (!this._defaultLocale) {
              for (var r = {
                checks: {},
                rules: {},
                failureSummaries: {},
                incompleteFallbackMessage: "",
                lang: this.lang
              }, a = Object.keys(this.data.checks), n = 0; n < a.length; n++) {
                var i = a[n], o = this.data.checks[i], l = o.messages, s = l.pass, u = l.fail, c = l.incomplete;
                r.checks[i] = {
                  pass: s,
                  fail: u,
                  incomplete: c
                };
              }
              for (var d = Object.keys(this.data.rules), f = 0; f < d.length; f++) {
                var p = d[f], m = this.data.rules[p], b = m.description, D = m.help;
                r.rules[p] = {
                  description: b,
                  help: D
                };
              }
              for (var v = Object.keys(this.data.failureSummaries), g = 0; g < v.length; g++) {
                var x = v[g], E = this.data.failureSummaries[x], F = E.failureMessage;
                r.failureSummaries[x] = {
                  failureMessage: F
                };
              }
              r.incompleteFallbackMessage = this.data.incompleteFallbackMessage, this._defaultLocale = r;
            }
          }
        }, {
          key: "_resetLocale",
          value: function() {
            var r = this._defaultLocale;
            !r || this.applyLocale(r);
          }
        }, {
          key: "_applyCheckLocale",
          value: function(r) {
            for (var a = Object.keys(r), n = 0; n < a.length; n++) {
              var i = a[n];
              if (!this.data.checks[i])
                throw new Error('Locale provided for unknown check: "'.concat(i, '"'));
              this.data.checks[i] = n_(this.data.checks[i], r[i]);
            }
          }
        }, {
          key: "_applyRuleLocale",
          value: function(r) {
            for (var a = Object.keys(r), n = 0; n < a.length; n++) {
              var i = a[n];
              if (!this.data.rules[i])
                throw new Error('Locale provided for unknown rule: "'.concat(i, '"'));
              this.data.rules[i] = i_(this.data.rules[i], r[i]);
            }
          }
        }, {
          key: "_applyFailureSummaries",
          value: function(r) {
            for (var a = Object.keys(r), n = 0; n < a.length; n++) {
              var i = a[n];
              if (!this.data.failureSummaries[i])
                throw new Error('Locale provided for unknown failureMessage: "'.concat(i, '"'));
              this.data.failureSummaries[i] = o_(this.data.failureSummaries[i], r[i]);
            }
          }
        }, {
          key: "applyLocale",
          value: function(r) {
            this._setDefaultLocale(), r.checks && this._applyCheckLocale(r.checks), r.rules && this._applyRuleLocale(r.rules), r.failureSummaries && this._applyFailureSummaries(r.failureSummaries, "failureSummaries"), r.incompleteFallbackMessage && (this.data.incompleteFallbackMessage = l_(this.data.incompleteFallbackMessage, r.incompleteFallbackMessage)), r.lang && (this.lang = r.lang);
          }
        }, {
          key: "setAllowedOrigins",
          value: function(r) {
            var a = Nu();
            this.allowedOrigins = [];
            var n = Rr(r), i;
            try {
              for (n.s(); !(i = n.n()).done; ) {
                var o = i.value;
                if (o === re.allOrigins) {
                  this.allowedOrigins = ["*"];
                  return;
                } else
                  o !== re.sameOrigin ? this.allowedOrigins.push(o) : a && this.allowedOrigins.push(a);
              }
            } catch (l) {
              n.e(l);
            } finally {
              n.f();
            }
          }
        }, {
          key: "_init",
          value: function() {
            var r = a_(this.defaultConfig);
            this.lang = r.lang || "en", this.reporter = r.reporter, this.commands = {}, this.rules = [], this.checks = {}, this.brand = "axe", this.application = "axeAPI", this.tagExclude = ["experimental"], this.noHtml = r.noHtml, this.allowedOrigins = r.allowedOrigins, Iu(r.rules, this, "addRule"), Iu(r.checks, this, "addCheck"), this.data = {}, this.data.checks = r.data && r.data.checks || {}, this.data.rules = r.data && r.data.rules || {}, this.data.failureSummaries = r.data && r.data.failureSummaries || {}, this.data.incompleteFallbackMessage = r.data && r.data.incompleteFallbackMessage || "", this._constructHelpUrls();
          }
        }, {
          key: "registerCommand",
          value: function(r) {
            this.commands[r.id] = r.callback;
          }
        }, {
          key: "addRule",
          value: function(r) {
            r.metadata && (this.data.rules[r.id] = r.metadata);
            var a = this.getRule(r.id);
            a ? a.configure(r) : this.rules.push(new Ou(r, this));
          }
        }, {
          key: "addCheck",
          value: function(r) {
            var a = r.metadata;
            P(a) === "object" && (this.data.checks[r.id] = a, P(a.messages) === "object" && Object.keys(a.messages).filter(function(n) {
              return a.messages.hasOwnProperty(n) && typeof a.messages[n] == "string";
            }).forEach(function(n) {
              a.messages[n].indexOf("function") === 0 && (a.messages[n] = new Function("return " + a.messages[n] + ";")());
            })), this.checks[r.id] ? this.checks[r.id].configure(r) : this.checks[r.id] = new Tu(r);
          }
        }, {
          key: "run",
          value: function(r, a, n, i) {
            this.normalizeOptions(a), h._selectCache = [];
            var o = s_(this.rules, r, a), l = o.now, s = o.later, u = lt();
            l.forEach(function(f) {
              u.defer(Pu(f, r, a));
            });
            var c = lt();
            s.length && c.defer(function(f) {
              Yo(a).then(function(p) {
                return f(p);
              }).catch(function(p) {
                console.warn("Couldn't load preload assets: ", p), f(void 0);
              });
            });
            var d = lt();
            d.defer(u), d.defer(c), d.then(function(f) {
              var p = f.pop();
              if (p && p.length) {
                var m = p[0];
                m && (r = de({}, r, m));
              }
              var b = f[0];
              if (!s.length) {
                h._selectCache = void 0, n(b.filter(function(v) {
                  return !!v;
                }));
                return;
              }
              var D = lt();
              s.forEach(function(v) {
                var g = Pu(v, r, a);
                D.defer(g);
              }), D.then(function(v) {
                h._selectCache = void 0, n(b.concat(v).filter(function(g) {
                  return !!g;
                }));
              }).catch(i);
            }).catch(i);
          }
        }, {
          key: "after",
          value: function(r, a) {
            var n = this.rules;
            return r.map(function(i) {
              var o = sr(n, "id", i.id);
              if (!o)
                throw new Error("Result for unknown rule. You may be running mismatch axe-core versions");
              return o.after(i, a);
            });
          }
        }, {
          key: "getRule",
          value: function(r) {
            return this.rules.find(function(a) {
              return a.id === r;
            });
          }
        }, {
          key: "normalizeOptions",
          value: function(r) {
            var a = this, n = [], i = [];
            if (a.rules.forEach(function(c) {
              i.push(c.id), c.tags.forEach(function(d) {
                n.includes(d) || n.push(d);
              });
            }), ["object", "string"].includes(P(r.runOnly))) {
              if (typeof r.runOnly == "string" && (r.runOnly = [r.runOnly]), Array.isArray(r.runOnly)) {
                var o = r.runOnly.find(function(c) {
                  return n.includes(c);
                }), l = r.runOnly.find(function(c) {
                  return i.includes(c);
                });
                if (o && l)
                  throw new Error("runOnly cannot be both rules and tags");
                l ? r.runOnly = {
                  type: "rule",
                  values: r.runOnly
                } : r.runOnly = {
                  type: "tag",
                  values: r.runOnly
                };
              }
              var s = r.runOnly;
              if (s.value && !s.values && (s.values = s.value, delete s.value), !Array.isArray(s.values) || s.values.length === 0)
                throw new Error("runOnly.values must be a non-empty array");
              if (["rule", "rules"].includes(s.type))
                s.type = "rule", s.values.forEach(function(c) {
                  if (!i.includes(c))
                    throw new Error("unknown rule `" + c + "` in options.runOnly");
                });
              else if (["tag", "tags", void 0].includes(s.type)) {
                s.type = "tag";
                var u = s.values.filter(function(c) {
                  return !n.includes(c) && !/wcag2[1-3]a{1,3}/.test(c);
                });
                u.length !== 0 && h.log("Could not find tags `" + u.join("`, `") + "`");
              } else
                throw new Error("Unknown runOnly type '".concat(s.type, "'"));
            }
            return P(r.rules) === "object" && Object.keys(r.rules).forEach(function(c) {
              if (!i.includes(c))
                throw new Error("unknown rule `" + c + "` in options.rules");
            }), r;
          }
        }, {
          key: "setBranding",
          value: function(r) {
            var a = {
              brand: this.brand,
              application: this.application
            };
            typeof r == "string" && (this.application = r), r && r.hasOwnProperty("brand") && r.brand && typeof r.brand == "string" && (this.brand = r.brand), r && r.hasOwnProperty("application") && r.application && typeof r.application == "string" && (this.application = r.application), this._constructHelpUrls(a);
          }
        }, {
          key: "_constructHelpUrls",
          value: function() {
            var r = this, a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, n = (h.version.match(/^[1-9][0-9]*\.[0-9]+/) || ["x.y"])[0];
            this.rules.forEach(function(i) {
              r.data.rules[i.id] || (r.data.rules[i.id] = {});
              var o = r.data.rules[i.id];
              (typeof o.helpUrl != "string" || a && o.helpUrl === Mu(a, i.id, n)) && (o.helpUrl = Mu(r, i.id, n));
            });
          }
        }, {
          key: "resetRulesAndChecks",
          value: function() {
            this._init(), this._resetLocale();
          }
        }]), e;
      }();
      function s_(e, t, r) {
        var a = {
          now: [],
          later: []
        }, n = e.reduce(function(i, o) {
          return Jo(o, t, r) ? o.preload ? (i.later.push(o), i) : (i.now.push(o), i) : i;
        }, a);
        return n;
      }
      function Pu(e, t, r) {
        return r.performanceTimer && Oe.mark("mark_rule_start_" + e.id), function(a, n) {
          e.run(t, r, function(i) {
            a(i);
          }, function(i) {
            if (r.debug)
              n(i);
            else {
              var o = Object.assign(new ya(e), {
                result: re.CANTTELL,
                description: "An error occured while running this rule",
                message: i.message,
                stack: i.stack,
                error: i,
                errorNode: i.errorNode
              });
              a(o);
            }
          });
        };
      }
      function Mu(e, t, r) {
        var a = e.brand, n = e.application, i = e.lang;
        return re.helpUrlBase + a + "/" + (r || h.version.substring(0, h.version.lastIndexOf("."))) + "/" + t + "?application=" + encodeURIComponent(n) + (i && i !== "en" ? "&lang=" + encodeURIComponent(i) : "");
      }
      var Lu = u_, qu = {};
      Te(qu, {
        CssSelectorParser: function() {
          return c_.CssSelectorParser;
        },
        doT: function() {
          return Bu.default;
        },
        emojiRegexText: function() {
          return d_.default;
        },
        memoize: function() {
          return f_.default;
        }
      });
      var c_ = Je(oi()), Bu = Je(bi()), d_ = Je(ka()), f_ = Je(gi()), p_ = Je(kc()), m_ = Je(Rc());
      Je(Tc()), Bu.default.templateSettings.strip = !1, "Promise" in y || p_.default.polyfill(), "Uint32Array" in y || (y.Uint32Array = m_.Uint32Array), y.Uint32Array && ("some" in y.Uint32Array.prototype || Object.defineProperty(y.Uint32Array.prototype, "some", {
        value: Array.prototype.some
      }), "reduce" in y.Uint32Array.prototype || Object.defineProperty(y.Uint32Array.prototype, "reduce", {
        value: Array.prototype.reduce
      }));
      function h_(e, t) {
        if (e = e || function() {
        }, t = t || h.log, !h._audit)
          throw new Error("No audit configured");
        var r = h.utils.queue(), a = [];
        Object.keys(h.plugins).forEach(function(i) {
          r.defer(function(o) {
            var l = function(u) {
              a.push(u), o();
            };
            try {
              h.plugins[i].cleanup(o, l);
            } catch (s) {
              l(s);
            }
          });
        });
        var n = h.utils.getFlattenedTree(R.body);
        h.utils.querySelectorAll(n, "iframe, frame").forEach(function(i) {
          r.defer(function(o, l) {
            return h.utils.sendCommandToFrame(i.actualNode, {
              command: "cleanup-plugin"
            }, o, l);
          });
        }), r.then(function(i) {
          a.length === 0 ? e(i) : t(a);
        }).catch(t);
      }
      var ju = h_, Er = {}, Vu;
      function Uu(e) {
        return Er.hasOwnProperty(e);
      }
      function Xn(e) {
        return typeof e == "string" && Er[e] ? Er[e] : typeof e == "function" ? e : Vu;
      }
      function v_(e, t, r) {
        Er[e] = t, r && (Vu = t);
      }
      function g_(e) {
        var t;
        if (t = h._audit, !t)
          throw new Error("No audit configured");
        if (e.axeVersion || e.ver) {
          var r = e.axeVersion || e.ver;
          if (!/^\d+\.\d+\.\d+(-canary)?/.test(r))
            throw new Error("Invalid configured version ".concat(r));
          var a = r.split("-"), n = ve(a, 2), i = n[0], o = n[1], l = i.split(".").map(Number), s = ve(l, 3), u = s[0], c = s[1], d = s[2], f = h.version.split("-"), p = ve(f, 2), m = p[0], b = p[1], D = m.split(".").map(Number), v = ve(D, 3), g = v[0], x = v[1], E = v[2];
          if (u !== g || x < c || x === c && E < d || u === g && c === x && d === E && o && o !== b)
            throw new Error("Configured version ".concat(r, " is not compatible with current axe version ").concat(h.version));
        }
        if (e.reporter && (typeof e.reporter == "function" || Uu(e.reporter)) && (t.reporter = e.reporter), e.checks) {
          if (!Array.isArray(e.checks))
            throw new TypeError("Checks property must be an array");
          e.checks.forEach(function(I) {
            if (!I.id)
              throw new TypeError("Configured check ".concat(JSON.stringify(I), " is invalid. Checks must be an object with at least an id property"));
            t.addCheck(I);
          });
        }
        var F = [];
        if (e.rules) {
          if (!Array.isArray(e.rules))
            throw new TypeError("Rules property must be an array");
          e.rules.forEach(function(I) {
            if (!I.id)
              throw new TypeError("Configured rule ".concat(JSON.stringify(I), " is invalid. Rules must be an object with at least an id property"));
            F.push(I.id), t.addRule(I);
          });
        }
        if (e.disableOtherRules && t.rules.forEach(function(I) {
          F.includes(I.id) === !1 && (I.enabled = !1);
        }), typeof e.branding < "u" ? t.setBranding(e.branding) : t._constructHelpUrls(), e.tagExclude && (t.tagExclude = e.tagExclude), e.locale && t.applyLocale(e.locale), e.standards && rf(e.standards), e.noHtml && (t.noHtml = !0), e.allowedOrigins) {
          if (!Array.isArray(e.allowedOrigins))
            throw new TypeError("Allowed origins property must be an array");
          if (e.allowedOrigins.includes("*"))
            throw new Error('"*" is not allowed. Use "'.concat(re.allOrigins, '" instead'));
          t.setAllowedOrigins(e.allowedOrigins);
        }
      }
      var b_ = g_;
      function y_(e) {
        at.updateMessenger(e);
      }
      function D_(e) {
        e = e || [];
        var t = e.length ? h._audit.rules.filter(function(a) {
          return !!e.filter(function(n) {
            return a.tags.indexOf(n) !== -1;
          }).length;
        }) : h._audit.rules, r = h._audit.data.rules || {};
        return t.map(function(a) {
          var n = r[a.id] || {};
          return {
            ruleId: a.id,
            description: n.description,
            help: n.help,
            helpUrl: n.helpUrl,
            tags: a.tags
          };
        });
      }
      var w_ = D_;
      function __(e) {
        var t = y && "Node" in y && "NodeList" in y, r = !!R;
        if (!(t && r)) {
          if (!e || !e.ownerDocument)
            throw new Error('Required "window" or "document" globals not defined and cannot be deduced from the context. Either set the globals before running or pass in a valid Element.');
          r || (H.set("globalDocumentSet", !0), R = e.ownerDocument), t || (H.set("globalWindowSet", !0), y = R.defaultView);
        }
      }
      function Jn() {
        H.get("globalDocumentSet") && (H.set("globalDocumentSet", !1), R = null), H.get("globalWindowSet") && (H.set("globalWindowSet", !1), y = null);
      }
      function x_() {
        Jn(), h._memoizedFns.forEach(function(e) {
          return e.clear();
        }), H.clear(), h._tree = void 0, h._selectorData = void 0, h._selectCache = void 0;
      }
      var yt = x_;
      function E_(e, t, r, a) {
        try {
          e = new aa(e), h._tree = e.flatTree, h._selectorData = qr(e.flatTree);
        } catch (o) {
          return yt(), a(o);
        }
        var n = lt(), i = h._audit;
        t.performanceTimer && Oe.auditStart(), e.frames.length && t.iframes !== !1 && n.defer(function(o, l) {
          Zi(e, t, "rules", null, o, l);
        }), n.defer(function(o, l) {
          i.run(e, t, o, l);
        }), n.then(function(o) {
          try {
            t.performanceTimer && Oe.auditEnd();
            var l = Hr(o.map(function(s) {
              return {
                results: s
              };
            }));
            e.initiator && (l = i.after(l, t), l.forEach(ia), l = l.map(ar));
            try {
              r(l, yt);
            } catch (s) {
              yt(), At(s);
            }
          } catch (s) {
            yt(), a(s);
          }
        }).catch(function(o) {
          yt(), a(o);
        });
      }
      var Hu = E_;
      function A_(e, t, r) {
        var a = r, n = function(s) {
          s instanceof Error || (s = new Error(s)), r(s);
        }, i = e && e.context || {};
        i.hasOwnProperty("include") && !i.include.length && (i.include = [R]);
        var o = e && e.options || {};
        switch (e.command) {
          case "rules":
            return Hu(i, o, function(l, s) {
              a(l), s();
            }, n);
          case "cleanup-plugin":
            return ju(a, n);
          default:
            if (h._audit && h._audit.commands && h._audit.commands[e.command])
              return h._audit.commands[e.command](e, r);
        }
      }
      y.top !== y && (at.subscribe("axe.start", A_), at.subscribe("axe.ping", function(e, t, r) {
        r({
          axe: !0
        });
      }));
      function C_(e) {
        h._audit = new Lu(e);
      }
      var F_ = C_;
      function Ar(e) {
        this._run = e.run, this._collect = e.collect, this._registry = {}, e.commands.forEach(function(t) {
          h._audit.registerCommand(t);
        });
      }
      Ar.prototype.run = function() {
        return this._run.apply(this, arguments);
      }, Ar.prototype.collect = function() {
        return this._collect.apply(this, arguments);
      }, Ar.prototype.cleanup = function(t) {
        var r = h.utils.queue(), a = this;
        Object.keys(this._registry).forEach(function(n) {
          r.defer(function(i) {
            a._registry[n].cleanup(i);
          });
        }), r.then(t);
      }, Ar.prototype.add = function(t) {
        this._registry[t.id] = t;
      };
      function k_(e) {
        h.plugins[e.id] = new Ar(e);
      }
      var R_ = k_;
      function T_() {
        var e = h._audit;
        if (!e)
          throw new Error("No audit configured");
        e.resetRulesAndChecks(), af();
      }
      var S_ = T_;
      function O_(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        r.reporter = r.reporter || h._audit.reporter || "v1", h._selectorData = {}, t instanceof oe || (t = new al(t));
        var a = No(e);
        if (!a)
          throw new Error("unknown rule `" + e + "`");
        a = Object.create(a, {
          excludeHidden: {
            value: !1
          }
        });
        var n = {
          initiator: !0,
          include: [t]
        }, i = a.runSync(n, r);
        ia(i), ar(i);
        var o = Ii([i]);
        return o.violations.forEach(function(l) {
          return l.nodes.forEach(function(s) {
            s.failureSummary = hn(s);
          });
        }), de({}, vt(), o, {
          toolOptions: r
        });
      }
      var N_ = O_;
      function zu(e) {
        var t, r, a, n = ve(e, 3), i = n[0], o = n[1], l = n[2], s = new TypeError("axe.run arguments are invalid");
        if (!I_(i)) {
          if (l !== void 0)
            throw s;
          l = o, o = i, i = R;
        }
        if (P(o) !== "object") {
          if (l !== void 0)
            throw s;
          l = o, o = {};
        }
        if (typeof l != "function" && l !== void 0)
          throw s;
        return o = st(o), o.reporter = (t = (r = o.reporter) !== null && r !== void 0 ? r : (a = h._audit) === null || a === void 0 ? void 0 : a.reporter) !== null && t !== void 0 ? t : "v1", {
          context: i,
          options: o,
          callback: l
        };
      }
      function I_(e) {
        switch (!0) {
          case typeof e == "string":
          case Array.isArray(e):
          case (y.Node && e instanceof y.Node):
          case (y.NodeList && e instanceof y.NodeList):
            return !0;
          case P(e) !== "object":
            return !1;
          case e.include !== void 0:
          case e.exclude !== void 0:
          case typeof e.length == "number":
            return !0;
          default:
            return !1;
        }
      }
      var Da = function() {
      };
      function P_() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        __(t[0]);
        var a = zu(t), n = a.context, i = a.options, o = a.callback, l = o === void 0 ? Da : o, s = M_(l), u = s.thenable, c = s.resolve, d = s.reject;
        try {
          we(h._audit, "No audit configured"), we(!h._running, "Axe is already running. Use `await axe.run()` to wait for the previous run to finish before starting a new run.");
        } catch (m) {
          return q_(m, l);
        }
        h._running = !0, i.performanceTimer && h.utils.performanceTimer.start();
        function f(m, b) {
          var D = function(g) {
            h._running = !1, b();
            try {
              l(null, g);
            } catch (x) {
              h.log(x);
            }
            c(g);
          };
          i.performanceTimer && h.utils.performanceTimer.end();
          try {
            L_(m, i, D);
          } catch (v) {
            h._running = !1, b(), l(v), d(v);
          }
        }
        function p(m) {
          i.performanceTimer && h.utils.performanceTimer.end(), h._running = !1, Jn(), l(m), d(m);
        }
        return h._runRules(n, i, f, p), u;
      }
      function M_(e) {
        var t, r, a;
        return typeof Promise == "function" && e === Da ? t = new Promise(function(n, i) {
          r = i, a = n;
        }) : a = r = Da, {
          thenable: t,
          reject: r,
          resolve: a
        };
      }
      function L_(e, t, r) {
        var a = Xn(t.reporter), n = a(e, t, r);
        n !== void 0 && r(n);
      }
      function q_(e, t) {
        if (Jn(), typeof t == "function" && t !== Da) {
          t(e.message);
          return;
        }
        throw e;
      }
      function B_() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        var a = zu(t), n = a.options, i = a.context;
        we(h._audit, "Axe is not configured. Audit is missing."), we(!h._running, "Axe is already running. Use `await axe.run()` to wait for the previous run to finish before starting a new run.");
        var o = new aa(i, h._tree);
        return h._tree = o.flatTree, h._selectorData = qr(o.flatTree), h._running = !0, new Promise(function(l, s) {
          h._audit.run(o, n, l, s);
        }).then(function(l) {
          l = l.map(function(c) {
            var d = c.nodes, f = qe(c, Zu);
            return de({
              nodes: d.map(j_)
            }, f);
          });
          var s = o.frames.map(function(c) {
            var d = c.node;
            return new rt(d, n).toJSON();
          }), u;
          return o.initiator && (u = vt()), h._running = !1, yt(), {
            results: l,
            frames: s,
            environmentData: u
          };
        }).catch(function(l) {
          return h._running = !1, yt(), Promise.reject(l);
        });
      }
      function j_(e) {
        var t = e.node, r = qe(e, es);
        r.node = t.toJSON();
        for (var a = 0, n = ["any", "all", "none"]; a < n.length; a++) {
          var i = n[a];
          r[i] = r[i].map(function(o) {
            var l = o.relatedNodes, s = qe(o, ts);
            return de({}, s, {
              relatedNodes: l.map(function(u) {
                return u.toJSON();
              })
            });
          });
        }
        return r;
      }
      function V_(e) {
        var t, r, a, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        n = st(n);
        var i = e.find(function(s) {
          return s.environmentData;
        }) || {}, o = i.environmentData;
        h._audit.normalizeOptions(n), n.reporter = (t = (r = n.reporter) !== null && r !== void 0 ? r : (a = h._audit) === null || a === void 0 ? void 0 : a.reporter) !== null && t !== void 0 ? t : "v1", U_(e);
        var l = Hr(e);
        return l = h._audit.after(l, n), l.forEach(ia), l = l.map(ar), z_(l, de({
          environmentData: o
        }, n));
      }
      function U_(e) {
        var t = [], r = Rr(e), a;
        try {
          for (r.s(); !(a = r.n()).done; ) {
            var n = a.value, i = t.shift();
            if (!!n) {
              n.frameSpec = i != null ? i : null;
              var o = H_(n);
              t.unshift.apply(t, ie(o));
            }
          }
        } catch (l) {
          r.e(l);
        } finally {
          r.f();
        }
      }
      function H_(e) {
        var t = e.frames, r = e.frameSpec;
        return r ? t.map(function(a) {
          return rt.mergeSpecs(a, r);
        }) : t;
      }
      function z_(e, t) {
        return new Promise(function(r) {
          var a = Xn(t.reporter);
          a(e, t, r);
        });
      }
      function $_(e) {
        if (h._tree)
          throw new Error("Axe is already setup. Call `axe.teardown()` before calling `axe.setup` again.");
        return h._tree = mn(e), h._selectorData = qr(h._tree), h._tree[0];
      }
      var W_ = $_, G_ = function(t, r, a) {
        console.warn('"na" reporter will be deprecated in axe v4.0. Use the "v2" reporter instead.'), typeof r == "function" && (a = r, r = {});
        var n = r, i = n.environmentData, o = qe(n, rs);
        a(de({}, vt(i), {
          toolOptions: o
        }, fr(t, r)));
      }, Y_ = G_, K_ = function(t, r, a) {
        typeof r == "function" && (a = r, r = {});
        var n = r, i = n.environmentData, o = qe(n, as);
        r.resultTypes = ["violations"];
        var l = fr(t, r), s = l.violations;
        a(de({}, vt(i), {
          toolOptions: o,
          violations: s
        }));
      }, X_ = K_, J_ = function(t, r, a) {
        if (typeof r == "function" && (a = r, r = {}), !t || !Array.isArray(t))
          return a(t);
        var n = t.map(function(i) {
          for (var o = de({}, i), l = ["passes", "violations", "incomplete", "inapplicable"], s = 0, u = l; s < u.length; s++) {
            var c = u[s];
            o[c] && Array.isArray(o[c]) && (o[c] = o[c].map(function(d) {
              var f, p = d.node, m = qe(d, ns);
              return p = typeof ((f = p) === null || f === void 0 ? void 0 : f.toJSON) == "function" ? p.toJSON() : p, de({
                node: p
              }, m);
            }));
          }
          return o;
        });
        a(n);
      }, $u = J_, Q_ = function(t, r, a) {
        typeof r == "function" && (a = r, r = {});
        var n = r, i = n.environmentData, o = qe(n, is);
        $u(t, o, function(l) {
          var s = vt(i);
          a({
            raw: l,
            env: s
          });
        });
      }, Z_ = Q_, ex = function(t, r, a) {
        typeof r == "function" && (a = r, r = {});
        var n = r, i = n.environmentData, o = qe(n, os), l = fr(t, r), s = function(c) {
          c.nodes.forEach(function(d) {
            d.failureSummary = hn(d);
          });
        };
        l.incomplete.forEach(s), l.violations.forEach(s), a(de({}, vt(i), {
          toolOptions: o
        }, l));
      }, tx = ex, rx = function(t, r, a) {
        typeof r == "function" && (a = r, r = {});
        var n = r, i = n.environmentData, o = qe(n, ls), l = fr(t, r);
        a(de({}, vt(i), {
          toolOptions: o
        }, l));
      }, ax = rx;
      h.constants = re, h.log = At, h.AbstractVirtualNode = oe, h.SerialVirtualNode = al, h.VirtualNode = dr, h._cache = H, h._thisWillBeDeletedDoNotUse = h._thisWillBeDeletedDoNotUse || {}, h._thisWillBeDeletedDoNotUse.base = {
        Audit: Lu,
        CheckResult: Yn,
        Check: Tu,
        Context: aa,
        RuleResult: ya,
        Rule: Ou,
        metadataFunctionMap: ba
      }, h._thisWillBeDeletedDoNotUse.public = {
        reporters: Er
      }, h.imports = qu, h.cleanup = ju, h.configure = b_, h.frameMessenger = y_, h.getRules = w_, h._load = F_, h.plugins = {}, h.registerPlugin = R_, h.hasReporter = Uu, h.getReporter = Xn, h.addReporter = v_, h.reset = S_, h._runRules = Hu, h.runVirtualRule = N_, h.run = P_, h.setup = W_, h.teardown = yt, h.runPartial = B_, h.finishRun = V_, h.commons = gu, h.utils = Ra, h.addReporter("na", Y_), h.addReporter("no-passes", X_), h.addReporter("rawEnv", Z_), h.addReporter("raw", $u), h.addReporter("v1", tx), h.addReporter("v2", ax, !0);
    })(), h._load({
      lang: "en",
      data: {
        rules: {
          accesskeys: {
            description: "Ensures every accesskey attribute value is unique",
            help: "accesskey attribute value should be unique"
          },
          "area-alt": {
            description: "Ensures <area> elements of image maps have alternate text",
            help: "Active <area> elements must have alternate text"
          },
          "aria-allowed-attr": {
            description: "Ensures ARIA attributes are allowed for an element's role",
            help: "Elements must only use allowed ARIA attributes"
          },
          "aria-allowed-role": {
            description: "Ensures role attribute has an appropriate value for the element",
            help: "ARIA role should be appropriate for the element"
          },
          "aria-command-name": {
            description: "Ensures every ARIA button, link and menuitem has an accessible name",
            help: "ARIA commands must have an accessible name"
          },
          "aria-dialog-name": {
            description: "Ensures every ARIA dialog and alertdialog node has an accessible name",
            help: "ARIA dialog and alertdialog nodes should have an accessible name"
          },
          "aria-hidden-body": {
            description: "Ensures aria-hidden='true' is not present on the document body.",
            help: "aria-hidden='true' must not be present on the document body"
          },
          "aria-hidden-focus": {
            description: "Ensures aria-hidden elements are not focusable nor contain focusable elements",
            help: "ARIA hidden element must not be focusable or contain focusable elements"
          },
          "aria-input-field-name": {
            description: "Ensures every ARIA input field has an accessible name",
            help: "ARIA input fields must have an accessible name"
          },
          "aria-meter-name": {
            description: "Ensures every ARIA meter node has an accessible name",
            help: "ARIA meter nodes must have an accessible name"
          },
          "aria-progressbar-name": {
            description: "Ensures every ARIA progressbar node has an accessible name",
            help: "ARIA progressbar nodes must have an accessible name"
          },
          "aria-required-attr": {
            description: "Ensures elements with ARIA roles have all required ARIA attributes",
            help: "Required ARIA attributes must be provided"
          },
          "aria-required-children": {
            description: "Ensures elements with an ARIA role that require child roles contain them",
            help: "Certain ARIA roles must contain particular children"
          },
          "aria-required-parent": {
            description: "Ensures elements with an ARIA role that require parent roles are contained by them",
            help: "Certain ARIA roles must be contained by particular parents"
          },
          "aria-roledescription": {
            description: "Ensure aria-roledescription is only used on elements with an implicit or explicit role",
            help: "aria-roledescription must be on elements with a semantic role"
          },
          "aria-roles": {
            description: "Ensures all elements with a role attribute use a valid value",
            help: "ARIA roles used must conform to valid values"
          },
          "aria-text": {
            description: 'Ensures "role=text" is used on elements with no focusable descendants',
            help: '"role=text" should have no focusable descendants'
          },
          "aria-toggle-field-name": {
            description: "Ensures every ARIA toggle field has an accessible name",
            help: "ARIA toggle fields must have an accessible name"
          },
          "aria-tooltip-name": {
            description: "Ensures every ARIA tooltip node has an accessible name",
            help: "ARIA tooltip nodes must have an accessible name"
          },
          "aria-treeitem-name": {
            description: "Ensures every ARIA treeitem node has an accessible name",
            help: "ARIA treeitem nodes should have an accessible name"
          },
          "aria-valid-attr-value": {
            description: "Ensures all ARIA attributes have valid values",
            help: "ARIA attributes must conform to valid values"
          },
          "aria-valid-attr": {
            description: "Ensures attributes that begin with aria- are valid ARIA attributes",
            help: "ARIA attributes must conform to valid names"
          },
          "audio-caption": {
            description: "Ensures <audio> elements have captions",
            help: "<audio> elements must have a captions track"
          },
          "autocomplete-valid": {
            description: "Ensure the autocomplete attribute is correct and suitable for the form field",
            help: "autocomplete attribute must be used correctly"
          },
          "avoid-inline-spacing": {
            description: "Ensure that text spacing set through style attributes can be adjusted with custom stylesheets",
            help: "Inline text spacing must be adjustable with custom stylesheets"
          },
          blink: {
            description: "Ensures <blink> elements are not used",
            help: "<blink> elements are deprecated and must not be used"
          },
          "button-name": {
            description: "Ensures buttons have discernible text",
            help: "Buttons must have discernible text"
          },
          bypass: {
            description: "Ensures each page has at least one mechanism for a user to bypass navigation and jump straight to the content",
            help: "Page must have means to bypass repeated blocks"
          },
          "color-contrast-enhanced": {
            description: "Ensures the contrast between foreground and background colors meets WCAG 2 AAA contrast ratio thresholds",
            help: "Elements must have sufficient color contrast"
          },
          "color-contrast": {
            description: "Ensures the contrast between foreground and background colors meets WCAG 2 AA contrast ratio thresholds",
            help: "Elements must have sufficient color contrast"
          },
          "css-orientation-lock": {
            description: "Ensures content is not locked to any specific display orientation, and the content is operable in all display orientations",
            help: "CSS Media queries must not lock display orientation"
          },
          "definition-list": {
            description: "Ensures <dl> elements are structured correctly",
            help: "<dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements"
          },
          dlitem: {
            description: "Ensures <dt> and <dd> elements are contained by a <dl>",
            help: "<dt> and <dd> elements must be contained by a <dl>"
          },
          "document-title": {
            description: "Ensures each HTML document contains a non-empty <title> element",
            help: "Documents must have <title> element to aid in navigation"
          },
          "duplicate-id-active": {
            description: "Ensures every id attribute value of active elements is unique",
            help: "IDs of active elements must be unique"
          },
          "duplicate-id-aria": {
            description: "Ensures every id attribute value used in ARIA and in labels is unique",
            help: "IDs used in ARIA and labels must be unique"
          },
          "duplicate-id": {
            description: "Ensures every id attribute value is unique",
            help: "id attribute value must be unique"
          },
          "empty-heading": {
            description: "Ensures headings have discernible text",
            help: "Headings should not be empty"
          },
          "empty-table-header": {
            description: "Ensures table headers have discernible text",
            help: "Table header text must not be empty"
          },
          "focus-order-semantics": {
            description: "Ensures elements in the focus order have a role appropriate for interactive content",
            help: "Elements in the focus order should have an appropriate role"
          },
          "form-field-multiple-labels": {
            description: "Ensures form field does not have multiple label elements",
            help: "Form field must not have multiple label elements"
          },
          "frame-focusable-content": {
            description: "Ensures <frame> and <iframe> elements with focusable content do not have tabindex=-1",
            help: "Frames with focusable content must not have tabindex=-1"
          },
          "frame-tested": {
            description: "Ensures <iframe> and <frame> elements contain the axe-core script",
            help: "Frames should be tested with axe-core"
          },
          "frame-title-unique": {
            description: "Ensures <iframe> and <frame> elements contain a unique title attribute",
            help: "Frames should have a unique title attribute"
          },
          "frame-title": {
            description: "Ensures <iframe> and <frame> elements have an accessible name",
            help: "Frames must have an accessible name"
          },
          "heading-order": {
            description: "Ensures the order of headings is semantically correct",
            help: "Heading levels should only increase by one"
          },
          "hidden-content": {
            description: "Informs users about hidden content.",
            help: "Hidden content on the page should be analyzed"
          },
          "html-has-lang": {
            description: "Ensures every HTML document has a lang attribute",
            help: "<html> element must have a lang attribute"
          },
          "html-lang-valid": {
            description: "Ensures the lang attribute of the <html> element has a valid value",
            help: "<html> element must have a valid value for the lang attribute"
          },
          "html-xml-lang-mismatch": {
            description: "Ensure that HTML elements with both valid lang and xml:lang attributes agree on the base language of the page",
            help: "HTML elements with lang and xml:lang must have the same base language"
          },
          "identical-links-same-purpose": {
            description: "Ensure that links with the same accessible name serve a similar purpose",
            help: "Links with the same name must have a similar purpose"
          },
          "image-alt": {
            description: "Ensures <img> elements have alternate text or a role of none or presentation",
            help: "Images must have alternate text"
          },
          "image-redundant-alt": {
            description: "Ensure image alternative is not repeated as text",
            help: "Alternative text of images should not be repeated as text"
          },
          "input-button-name": {
            description: "Ensures input buttons have discernible text",
            help: "Input buttons must have discernible text"
          },
          "input-image-alt": {
            description: 'Ensures <input type="image"> elements have alternate text',
            help: "Image buttons must have alternate text"
          },
          "label-content-name-mismatch": {
            description: "Ensures that elements labelled through their content must have their visible text as part of their accessible name",
            help: "Elements must have their visible text as part of their accessible name"
          },
          "label-title-only": {
            description: "Ensures that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes",
            help: "Form elements should have a visible label"
          },
          label: {
            description: "Ensures every form element has a label",
            help: "Form elements must have labels"
          },
          "landmark-banner-is-top-level": {
            description: "Ensures the banner landmark is at top level",
            help: "Banner landmark should not be contained in another landmark"
          },
          "landmark-complementary-is-top-level": {
            description: "Ensures the complementary landmark or aside is at top level",
            help: "Aside should not be contained in another landmark"
          },
          "landmark-contentinfo-is-top-level": {
            description: "Ensures the contentinfo landmark is at top level",
            help: "Contentinfo landmark should not be contained in another landmark"
          },
          "landmark-main-is-top-level": {
            description: "Ensures the main landmark is at top level",
            help: "Main landmark should not be contained in another landmark"
          },
          "landmark-no-duplicate-banner": {
            description: "Ensures the document has at most one banner landmark",
            help: "Document should not have more than one banner landmark"
          },
          "landmark-no-duplicate-contentinfo": {
            description: "Ensures the document has at most one contentinfo landmark",
            help: "Document should not have more than one contentinfo landmark"
          },
          "landmark-no-duplicate-main": {
            description: "Ensures the document has at most one main landmark",
            help: "Document should not have more than one main landmark"
          },
          "landmark-one-main": {
            description: "Ensures the document has a main landmark",
            help: "Document should have one main landmark"
          },
          "landmark-unique": {
            help: "Ensures landmarks are unique",
            description: "Landmarks should have a unique role or role/label/title (i.e. accessible name) combination"
          },
          "link-in-text-block": {
            description: "Ensure links are distinguished from surrounding text in a way that does not rely on color",
            help: "Links must be distinguishable without relying on color"
          },
          "link-name": {
            description: "Ensures links have discernible text",
            help: "Links must have discernible text"
          },
          list: {
            description: "Ensures that lists are structured correctly",
            help: "<ul> and <ol> must only directly contain <li>, <script> or <template> elements"
          },
          listitem: {
            description: "Ensures <li> elements are used semantically",
            help: "<li> elements must be contained in a <ul> or <ol>"
          },
          marquee: {
            description: "Ensures <marquee> elements are not used",
            help: "<marquee> elements are deprecated and must not be used"
          },
          "meta-refresh": {
            description: 'Ensures <meta http-equiv="refresh"> is not used',
            help: "Timed refresh must not exist"
          },
          "meta-viewport-large": {
            description: 'Ensures <meta name="viewport"> can scale a significant amount',
            help: "Users should be able to zoom and scale the text up to 500%"
          },
          "meta-viewport": {
            description: 'Ensures <meta name="viewport"> does not disable text scaling and zooming',
            help: "Zooming and scaling should not be disabled"
          },
          "nested-interactive": {
            description: "Ensures interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies",
            help: "Interactive controls must not be nested"
          },
          "no-autoplay-audio": {
            description: "Ensures <video> or <audio> elements do not autoplay audio for more than 3 seconds without a control mechanism to stop or mute the audio",
            help: "<video> or <audio> elements must not play automatically"
          },
          "object-alt": {
            description: "Ensures <object> elements have alternate text",
            help: "<object> elements must have alternate text"
          },
          "p-as-heading": {
            description: "Ensure bold, italic text and font-size is not used to style <p> elements as a heading",
            help: "Styled <p> elements must not be used as headings"
          },
          "page-has-heading-one": {
            description: "Ensure that the page, or at least one of its frames contains a level-one heading",
            help: "Page should contain a level-one heading"
          },
          "presentation-role-conflict": {
            description: "Flags elements whose role is none or presentation and which cause the role conflict resolution to trigger.",
            help: "Elements of role none or presentation should be flagged"
          },
          region: {
            description: "Ensures all page content is contained by landmarks",
            help: "All page content should be contained by landmarks"
          },
          "role-img-alt": {
            description: "Ensures [role='img'] elements have alternate text",
            help: "[role='img'] elements must have an alternative text"
          },
          "scope-attr-valid": {
            description: "Ensures the scope attribute is used correctly on tables",
            help: "scope attribute should be used correctly"
          },
          "scrollable-region-focusable": {
            description: "Ensure elements that have scrollable content are accessible by keyboard",
            help: "Scrollable region must have keyboard access"
          },
          "select-name": {
            description: "Ensures select element has an accessible name",
            help: "Select element must have an accessible name"
          },
          "server-side-image-map": {
            description: "Ensures that server-side image maps are not used",
            help: "Server-side image maps must not be used"
          },
          "skip-link": {
            description: "Ensure all skip links have a focusable target",
            help: "The skip-link target should exist and be focusable"
          },
          "svg-img-alt": {
            description: "Ensures <svg> elements with an img, graphics-document or graphics-symbol role have an accessible text",
            help: "<svg> elements with an img role must have an alternative text"
          },
          tabindex: {
            description: "Ensures tabindex attribute values are not greater than 0",
            help: "Elements should not have tabindex greater than zero"
          },
          "table-duplicate-name": {
            description: "Ensure the <caption> element does not contain the same text as the summary attribute",
            help: "tables should not have the same summary and caption"
          },
          "table-fake-caption": {
            description: "Ensure that tables with a caption use the <caption> element.",
            help: "Data or header cells must not be used to give caption to a data table."
          },
          "td-has-header": {
            description: "Ensure that each non-empty data cell in a <table> larger than 3 by 3  has one or more table headers",
            help: "Non-empty <td> elements in larger <table> must have an associated table header"
          },
          "td-headers-attr": {
            description: "Ensure that each cell in a table that uses the headers attribute refers only to other cells in that table",
            help: "Table cells that use the headers attribute must only refer to cells in the same table"
          },
          "th-has-data-cells": {
            description: "Ensure that <th> elements and elements with role=columnheader/rowheader have data cells they describe",
            help: "Table headers in a data table must refer to data cells"
          },
          "valid-lang": {
            description: "Ensures lang attributes have valid values",
            help: "lang attribute must have a valid value"
          },
          "video-caption": {
            description: "Ensures <video> elements have captions",
            help: "<video> elements must have captions"
          }
        },
        checks: {
          abstractrole: {
            impact: "serious",
            messages: {
              pass: "Abstract roles are not used",
              fail: {
                singular: "Abstract role cannot be directly used: ${data.values}",
                plural: "Abstract roles cannot be directly used: ${data.values}"
              }
            }
          },
          "aria-allowed-attr": {
            impact: "critical",
            messages: {
              pass: "ARIA attributes are used correctly for the defined role",
              fail: {
                singular: "ARIA attribute is not allowed: ${data.values}",
                plural: "ARIA attributes are not allowed: ${data.values}"
              },
              incomplete: "Check that there is no problem if the ARIA attribute is ignored on this element: ${data.values}"
            }
          },
          "aria-allowed-role": {
            impact: "minor",
            messages: {
              pass: "ARIA role is allowed for given element",
              fail: {
                singular: "ARIA role ${data.values} is not allowed for given element",
                plural: "ARIA roles ${data.values} are not allowed for given element"
              },
              incomplete: {
                singular: "ARIA role ${data.values} must be removed when the element is made visible, as it is not allowed for the element",
                plural: "ARIA roles ${data.values} must be removed when the element is made visible, as they are not allowed for the element"
              }
            }
          },
          "aria-errormessage": {
            impact: "critical",
            messages: {
              pass: "aria-errormessage exists and references elements visible to screen readers that use a supported aria-errormessage technique",
              fail: {
                singular: "aria-errormessage value `${data.values}` must use a technique to announce the message (e.g., aria-live, aria-describedby, role=alert, etc.)",
                plural: "aria-errormessage values `${data.values}` must use a technique to announce the message (e.g., aria-live, aria-describedby, role=alert, etc.)",
                hidden: "aria-errormessage value `${data.values}` cannot reference a hidden element"
              },
              incomplete: {
                singular: "ensure aria-errormessage value `${data.values}` references an existing element",
                plural: "ensure aria-errormessage values `${data.values}` reference existing elements",
                idrefs: "unable to determine if aria-errormessage element exists on the page: ${data.values}"
              }
            }
          },
          "aria-hidden-body": {
            impact: "critical",
            messages: {
              pass: "No aria-hidden attribute is present on document body",
              fail: "aria-hidden=true should not be present on the document body"
            }
          },
          "aria-level": {
            impact: "serious",
            messages: {
              pass: "aria-level values are valid",
              incomplete: "aria-level values greater than 6 are not supported in all screenreader and browser combinations"
            }
          },
          "aria-prohibited-attr": {
            impact: "serious",
            messages: {
              pass: "ARIA attribute is allowed",
              fail: {
                hasRolePlural: '${data.prohibited} attributes cannot be used with role "${data.role}".',
                hasRoleSingular: '${data.prohibited} attribute cannot be used with role "${data.role}".',
                noRolePlural: "${data.prohibited} attributes cannot be used on a ${data.nodeName} with no valid role attribute.",
                noRoleSingular: "${data.prohibited} attribute cannot be used on a ${data.nodeName} with no valid role attribute."
              },
              incomplete: {
                hasRoleSingular: '${data.prohibited} attribute is not well supported with role "${data.role}".',
                hasRolePlural: '${data.prohibited} attributes are not well supported with role "${data.role}".',
                noRoleSingular: "${data.prohibited} attribute is not well supported on a ${data.nodeName} with no valid role attribute.",
                noRolePlural: "${data.prohibited} attributes are not well supported on a ${data.nodeName} with no valid role attribute."
              }
            }
          },
          "aria-required-attr": {
            impact: "critical",
            messages: {
              pass: "All required ARIA attributes are present",
              fail: {
                singular: "Required ARIA attribute not present: ${data.values}",
                plural: "Required ARIA attributes not present: ${data.values}"
              }
            }
          },
          "aria-required-children": {
            impact: "critical",
            messages: {
              pass: "Required ARIA children are present",
              fail: {
                singular: "Required ARIA child role not present: ${data.values}",
                plural: "Required ARIA children role not present: ${data.values}"
              },
              incomplete: {
                singular: "Expecting ARIA child role to be added: ${data.values}",
                plural: "Expecting ARIA children role to be added: ${data.values}"
              }
            }
          },
          "aria-required-parent": {
            impact: "critical",
            messages: {
              pass: "Required ARIA parent role present",
              fail: {
                singular: "Required ARIA parent role not present: ${data.values}",
                plural: "Required ARIA parents role not present: ${data.values}"
              }
            }
          },
          "aria-roledescription": {
            impact: "serious",
            messages: {
              pass: "aria-roledescription used on a supported semantic role",
              incomplete: "Check that the aria-roledescription is announced by supported screen readers",
              fail: "Give the element a role that supports aria-roledescription"
            }
          },
          "aria-unsupported-attr": {
            impact: "critical",
            messages: {
              pass: "ARIA attribute is supported",
              fail: "ARIA attribute is not widely supported in screen readers and assistive technologies: ${data.values}"
            }
          },
          "aria-valid-attr-value": {
            impact: "critical",
            messages: {
              pass: "ARIA attribute values are valid",
              fail: {
                singular: "Invalid ARIA attribute value: ${data.values}",
                plural: "Invalid ARIA attribute values: ${data.values}"
              },
              incomplete: {
                noId: "ARIA attribute element ID does not exist on the page: ${data.needsReview}",
                noIdShadow: "ARIA attribute element ID does not exist on the page or is a descendant of a different shadow DOM tree: ${data.needsReview}",
                ariaCurrent: 'ARIA attribute value is invalid and will be treated as "aria-current=true": ${data.needsReview}',
                idrefs: "Unable to determine if ARIA attribute element ID exists on the page: ${data.needsReview}"
              }
            }
          },
          "aria-valid-attr": {
            impact: "critical",
            messages: {
              pass: "ARIA attribute name is valid",
              fail: {
                singular: "Invalid ARIA attribute name: ${data.values}",
                plural: "Invalid ARIA attribute names: ${data.values}"
              }
            }
          },
          deprecatedrole: {
            impact: "minor",
            messages: {
              pass: "ARIA role is not deprecated",
              fail: "The role used is deprecated: ${data}"
            }
          },
          fallbackrole: {
            impact: "serious",
            messages: {
              pass: "Only one role value used",
              fail: "Use only one role value, since fallback roles are not supported in older browsers",
              incomplete: "Use only role 'presentation' or 'none' since they are synonymous."
            }
          },
          "has-global-aria-attribute": {
            impact: "minor",
            messages: {
              pass: {
                singular: "Element has global ARIA attribute: ${data.values}",
                plural: "Element has global ARIA attributes: ${data.values}"
              },
              fail: "Element does not have global ARIA attribute"
            }
          },
          "has-widget-role": {
            impact: "minor",
            messages: {
              pass: "Element has a widget role.",
              fail: "Element does not have a widget role."
            }
          },
          invalidrole: {
            impact: "critical",
            messages: {
              pass: "ARIA role is valid",
              fail: {
                singular: "Role must be one of the valid ARIA roles: ${data.values}",
                plural: "Roles must be one of the valid ARIA roles: ${data.values}"
              }
            }
          },
          "is-element-focusable": {
            impact: "minor",
            messages: {
              pass: "Element is focusable.",
              fail: "Element is not focusable."
            }
          },
          "no-implicit-explicit-label": {
            impact: "moderate",
            messages: {
              pass: "There is no mismatch between a <label> and accessible name",
              incomplete: "Check that the <label> does not need be part of the ARIA ${data} field's name"
            }
          },
          unsupportedrole: {
            impact: "critical",
            messages: {
              pass: "ARIA role is supported",
              fail: "The role used is not widely supported in screen readers and assistive technologies: ${data.values}"
            }
          },
          "valid-scrollable-semantics": {
            impact: "minor",
            messages: {
              pass: "Element has valid semantics for an element in the focus order.",
              fail: "Element has invalid semantics for an element in the focus order."
            }
          },
          "color-contrast-enhanced": {
            impact: "serious",
            messages: {
              pass: "Element has sufficient color contrast of ${data.contrastRatio}",
              fail: {
                default: "Element has insufficient color contrast of ${data.contrastRatio} (foreground color: ${data.fgColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",
                fgOnShadowColor: "Element has insufficient color contrast of ${data.contrastRatio} between the foreground and shadow color (foreground color: ${data.fgColor}, text-shadow color: ${data.shadowColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",
                shadowOnBgColor: "Element has insufficient color contrast of ${data.contrastRatio} between the shadow color and background color (text-shadow color: ${data.shadowColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}"
              },
              incomplete: {
                default: "Unable to determine contrast ratio",
                bgImage: "Element's background color could not be determined due to a background image",
                bgGradient: "Element's background color could not be determined due to a background gradient",
                imgNode: "Element's background color could not be determined because element contains an image node",
                bgOverlap: "Element's background color could not be determined because it is overlapped by another element",
                fgAlpha: "Element's foreground color could not be determined because of alpha transparency",
                elmPartiallyObscured: "Element's background color could not be determined because it's partially obscured by another element",
                elmPartiallyObscuring: "Element's background color could not be determined because it partially overlaps other elements",
                outsideViewport: "Element's background color could not be determined because it's outside the viewport",
                equalRatio: "Element has a 1:1 contrast ratio with the background",
                shortTextContent: "Element content is too short to determine if it is actual text content",
                nonBmp: "Element content contains only non-text characters",
                pseudoContent: "Element's background color could not be determined due to a pseudo element"
              }
            }
          },
          "color-contrast": {
            impact: "serious",
            messages: {
              pass: {
                default: "Element has sufficient color contrast of ${data.contrastRatio}",
                hidden: "Element is hidden"
              },
              fail: {
                default: "Element has insufficient color contrast of ${data.contrastRatio} (foreground color: ${data.fgColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",
                fgOnShadowColor: "Element has insufficient color contrast of ${data.contrastRatio} between the foreground and shadow color (foreground color: ${data.fgColor}, text-shadow color: ${data.shadowColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",
                shadowOnBgColor: "Element has insufficient color contrast of ${data.contrastRatio} between the shadow color and background color (text-shadow color: ${data.shadowColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}"
              },
              incomplete: {
                default: "Unable to determine contrast ratio",
                bgImage: "Element's background color could not be determined due to a background image",
                bgGradient: "Element's background color could not be determined due to a background gradient",
                imgNode: "Element's background color could not be determined because element contains an image node",
                bgOverlap: "Element's background color could not be determined because it is overlapped by another element",
                fgAlpha: "Element's foreground color could not be determined because of alpha transparency",
                elmPartiallyObscured: "Element's background color could not be determined because it's partially obscured by another element",
                elmPartiallyObscuring: "Element's background color could not be determined because it partially overlaps other elements",
                outsideViewport: "Element's background color could not be determined because it's outside the viewport",
                equalRatio: "Element has a 1:1 contrast ratio with the background",
                shortTextContent: "Element content is too short to determine if it is actual text content",
                nonBmp: "Element content contains only non-text characters",
                pseudoContent: "Element's background color could not be determined due to a pseudo element"
              }
            }
          },
          "link-in-text-block": {
            impact: "serious",
            messages: {
              pass: "Links can be distinguished from surrounding text in some way other than by color",
              fail: "Links need to be distinguished from surrounding text in some way other than by color",
              incomplete: {
                default: "Unable to determine contrast ratio",
                bgContrast: "Element's contrast ratio could not be determined. Check for a distinct hover/focus style",
                bgImage: "Element's contrast ratio could not be determined due to a background image",
                bgGradient: "Element's contrast ratio could not be determined due to a background gradient",
                imgNode: "Element's contrast ratio could not be determined because element contains an image node",
                bgOverlap: "Element's contrast ratio could not be determined because of element overlap"
              }
            }
          },
          "autocomplete-appropriate": {
            impact: "serious",
            messages: {
              pass: "the autocomplete value is on an appropriate element",
              fail: "the autocomplete value is inappropriate for this type of input"
            }
          },
          "autocomplete-valid": {
            impact: "serious",
            messages: {
              pass: "the autocomplete attribute is correctly formatted",
              fail: "the autocomplete attribute is incorrectly formatted"
            }
          },
          accesskeys: {
            impact: "serious",
            messages: {
              pass: "Accesskey attribute value is unique",
              fail: "Document has multiple elements with the same accesskey"
            }
          },
          "focusable-content": {
            impact: "moderate",
            messages: {
              pass: "Element contains focusable elements",
              fail: "Element should have focusable content"
            }
          },
          "focusable-disabled": {
            impact: "serious",
            messages: {
              pass: "No focusable elements contained within element",
              incomplete: "Check if the focusable elements immediately move the focus indicator",
              fail: "Focusable content should be disabled or be removed from the DOM"
            }
          },
          "focusable-element": {
            impact: "moderate",
            messages: {
              pass: "Element is focusable",
              fail: "Element should be focusable"
            }
          },
          "focusable-modal-open": {
            impact: "serious",
            messages: {
              pass: "No focusable elements while a modal is open",
              incomplete: "Check that focusable elements are not tabbable in the current state"
            }
          },
          "focusable-no-name": {
            impact: "serious",
            messages: {
              pass: "Element is not in tab order or has accessible text",
              fail: "Element is in tab order and does not have accessible text",
              incomplete: "Unable to determine if element has an accessible name"
            }
          },
          "focusable-not-tabbable": {
            impact: "serious",
            messages: {
              pass: "No focusable elements contained within element",
              incomplete: "Check if the focusable elements immediately move the focus indicator",
              fail: "Focusable content should have tabindex='-1' or be removed from the DOM"
            }
          },
          "frame-focusable-content": {
            impact: "serious",
            messages: {
              pass: "Element does not have focusable descendants",
              fail: "Element has focusable descendants",
              incomplete: "Could not determine if element has descendants"
            }
          },
          "landmark-is-top-level": {
            impact: "moderate",
            messages: {
              pass: "The ${data.role} landmark is at the top level.",
              fail: "The ${data.role} landmark is contained in another landmark."
            }
          },
          "no-focusable-content": {
            impact: "serious",
            messages: {
              pass: "Element does not have focusable descendants",
              fail: {
                default: "Element has focusable descendants",
                notHidden: "Using a negative tabindex on an element inside an interactive control does not prevent assistive technologies from focusing the element (even with 'aria-hidden=true')"
              },
              incomplete: "Could not determine if element has descendants"
            }
          },
          "page-has-heading-one": {
            impact: "moderate",
            messages: {
              pass: "Page has at least one level-one heading",
              fail: "Page must have a level-one heading"
            }
          },
          "page-has-main": {
            impact: "moderate",
            messages: {
              pass: "Document has at least one main landmark",
              fail: "Document does not have a main landmark"
            }
          },
          "page-no-duplicate-banner": {
            impact: "moderate",
            messages: {
              pass: "Document does not have more than one banner landmark",
              fail: "Document has more than one banner landmark"
            }
          },
          "page-no-duplicate-contentinfo": {
            impact: "moderate",
            messages: {
              pass: "Document does not have more than one contentinfo landmark",
              fail: "Document has more than one contentinfo landmark"
            }
          },
          "page-no-duplicate-main": {
            impact: "moderate",
            messages: {
              pass: "Document does not have more than one main landmark",
              fail: "Document has more than one main landmark"
            }
          },
          tabindex: {
            impact: "serious",
            messages: {
              pass: "Element does not have a tabindex greater than 0",
              fail: "Element has a tabindex greater than 0"
            }
          },
          "alt-space-value": {
            impact: "critical",
            messages: {
              pass: "Element has a valid alt attribute value",
              fail: "Element has an alt attribute containing only a space character, which is not ignored by all screen readers"
            }
          },
          "duplicate-img-label": {
            impact: "minor",
            messages: {
              pass: "Element does not duplicate existing text in <img> alt text",
              fail: "Element contains <img> element with alt text that duplicates existing text"
            }
          },
          "explicit-label": {
            impact: "critical",
            messages: {
              pass: "Form element has an explicit <label>",
              fail: "Form element does not have an explicit <label>",
              incomplete: "Unable to determine if form element has an explicit <label>"
            }
          },
          "help-same-as-label": {
            impact: "minor",
            messages: {
              pass: "Help text (title or aria-describedby) does not duplicate label text",
              fail: "Help text (title or aria-describedby) text is the same as the label text"
            }
          },
          "hidden-explicit-label": {
            impact: "critical",
            messages: {
              pass: "Form element has a visible explicit <label>",
              fail: "Form element has explicit <label> that is hidden",
              incomplete: "Unable to determine if form element has explicit <label> that is hidden"
            }
          },
          "implicit-label": {
            impact: "critical",
            messages: {
              pass: "Form element has an implicit (wrapped) <label>",
              fail: "Form element does not have an implicit (wrapped) <label>",
              incomplete: "Unable to determine if form element has an implicit (wrapped} <label>"
            }
          },
          "label-content-name-mismatch": {
            impact: "serious",
            messages: {
              pass: "Element contains visible text as part of it's accessible name",
              fail: "Text inside the element is not included in the accessible name"
            }
          },
          "multiple-label": {
            impact: "moderate",
            messages: {
              pass: "Form field does not have multiple label elements",
              incomplete: "Multiple label elements is not widely supported in assistive technologies. Ensure the first label contains all necessary information."
            }
          },
          "title-only": {
            impact: "serious",
            messages: {
              pass: "Form element does not solely use title attribute for its label",
              fail: "Only title used to generate label for form element"
            }
          },
          "landmark-is-unique": {
            impact: "moderate",
            messages: {
              pass: "Landmarks must have a unique role or role/label/title (i.e. accessible name) combination",
              fail: "The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable"
            }
          },
          "has-lang": {
            impact: "serious",
            messages: {
              pass: "The <html> element has a lang attribute",
              fail: {
                noXHTML: "The xml:lang attribute is not valid on HTML pages, use the lang attribute.",
                noLang: "The <html> element does not have a lang attribute"
              }
            }
          },
          "valid-lang": {
            impact: "serious",
            messages: {
              pass: "Value of lang attribute is included in the list of valid languages",
              fail: "Value of lang attribute not included in the list of valid languages"
            }
          },
          "xml-lang-mismatch": {
            impact: "moderate",
            messages: {
              pass: "Lang and xml:lang attributes have the same base language",
              fail: "Lang and xml:lang attributes do not have the same base language"
            }
          },
          dlitem: {
            impact: "serious",
            messages: {
              pass: "Description list item has a <dl> parent element",
              fail: "Description list item does not have a <dl> parent element"
            }
          },
          listitem: {
            impact: "serious",
            messages: {
              pass: 'List item has a <ul>, <ol> or role="list" parent element',
              fail: {
                default: "List item does not have a <ul>, <ol> parent element",
                roleNotValid: 'List item does not have a <ul>, <ol> parent element without a role, or a role="list"'
              }
            }
          },
          "only-dlitems": {
            impact: "serious",
            messages: {
              pass: "List element only has direct children that are allowed inside <dt> or <dd> elements",
              fail: "List element has direct children that are not allowed inside <dt> or <dd> elements"
            }
          },
          "only-listitems": {
            impact: "serious",
            messages: {
              pass: "List element only has direct children that are allowed inside <li> elements",
              fail: {
                default: "List element has direct children that are not allowed inside <li> elements",
                roleNotValid: "List element has direct children with a role that is not allowed: ${data.roles}"
              }
            }
          },
          "structured-dlitems": {
            impact: "serious",
            messages: {
              pass: "When not empty, element has both <dt> and <dd> elements",
              fail: "When not empty, element does not have at least one <dt> element followed by at least one <dd> element"
            }
          },
          caption: {
            impact: "critical",
            messages: {
              pass: "The multimedia element has a captions track",
              incomplete: "Check that captions is available for the element"
            }
          },
          "frame-tested": {
            impact: "critical",
            messages: {
              pass: "The iframe was tested with axe-core",
              fail: "The iframe could not be tested with axe-core",
              incomplete: "The iframe still has to be tested with axe-core"
            }
          },
          "no-autoplay-audio": {
            impact: "moderate",
            messages: {
              pass: "<video> or <audio> does not output audio for more than allowed duration or has controls mechanism",
              fail: "<video> or <audio> outputs audio for more than allowed duration and does not have a controls mechanism",
              incomplete: "Check that the <video> or <audio> does not output audio for more than allowed duration or provides a controls mechanism"
            }
          },
          "css-orientation-lock": {
            impact: "serious",
            messages: {
              pass: "Display is operable, and orientation lock does not exist",
              fail: "CSS Orientation lock is applied, and makes display inoperable",
              incomplete: "CSS Orientation lock cannot be determined"
            }
          },
          "meta-viewport-large": {
            impact: "minor",
            messages: {
              pass: "<meta> tag does not prevent significant zooming on mobile devices",
              fail: "<meta> tag limits zooming on mobile devices"
            }
          },
          "meta-viewport": {
            impact: "critical",
            messages: {
              pass: "<meta> tag does not disable zooming on mobile devices",
              fail: "${data} on <meta> tag disables zooming on mobile devices"
            }
          },
          "header-present": {
            impact: "serious",
            messages: {
              pass: "Page has a heading",
              fail: "Page does not have a heading"
            }
          },
          "heading-order": {
            impact: "moderate",
            messages: {
              pass: "Heading order valid",
              fail: "Heading order invalid",
              incomplete: "Unable to determine previous heading"
            }
          },
          "identical-links-same-purpose": {
            impact: "minor",
            messages: {
              pass: "There are no other links with the same name, that go to a different URL",
              incomplete: "Check that links have the same purpose, or are intentionally ambiguous."
            }
          },
          "internal-link-present": {
            impact: "serious",
            messages: {
              pass: "Valid skip link found",
              fail: "No valid skip link found"
            }
          },
          landmark: {
            impact: "serious",
            messages: {
              pass: "Page has a landmark region",
              fail: "Page does not have a landmark region"
            }
          },
          "meta-refresh": {
            impact: "critical",
            messages: {
              pass: "<meta> tag does not immediately refresh the page",
              fail: "<meta> tag forces timed refresh of page"
            }
          },
          "p-as-heading": {
            impact: "serious",
            messages: {
              pass: "<p> elements are not styled as headings",
              fail: "Heading elements should be used instead of styled <p> elements",
              incomplete: "Unable to determine if <p> elements are styled as headings"
            }
          },
          region: {
            impact: "moderate",
            messages: {
              pass: "All page content is contained by landmarks",
              fail: "Some page content is not contained by landmarks"
            }
          },
          "skip-link": {
            impact: "moderate",
            messages: {
              pass: "Skip link target exists",
              incomplete: "Skip link target should become visible on activation",
              fail: "No skip link target"
            }
          },
          "unique-frame-title": {
            impact: "serious",
            messages: {
              pass: "Element's title attribute is unique",
              fail: "Element's title attribute is not unique"
            }
          },
          "duplicate-id-active": {
            impact: "serious",
            messages: {
              pass: "Document has no active elements that share the same id attribute",
              fail: "Document has active elements with the same id attribute: ${data}"
            }
          },
          "duplicate-id-aria": {
            impact: "critical",
            messages: {
              pass: "Document has no elements referenced with ARIA or labels that share the same id attribute",
              fail: "Document has multiple elements referenced with ARIA with the same id attribute: ${data}"
            }
          },
          "duplicate-id": {
            impact: "minor",
            messages: {
              pass: "Document has no static elements that share the same id attribute",
              fail: "Document has multiple static elements with the same id attribute: ${data}"
            }
          },
          "aria-label": {
            impact: "serious",
            messages: {
              pass: "aria-label attribute exists and is not empty",
              fail: "aria-label attribute does not exist or is empty"
            }
          },
          "aria-labelledby": {
            impact: "serious",
            messages: {
              pass: "aria-labelledby attribute exists and references elements that are visible to screen readers",
              fail: "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
              incomplete: "ensure aria-labelledby references an existing element"
            }
          },
          "avoid-inline-spacing": {
            impact: "serious",
            messages: {
              pass: "No inline styles with '!important' that affect text spacing has been specified",
              fail: {
                singular: "Remove '!important' from inline style ${data.values}, as overriding this is not supported by most browsers",
                plural: "Remove '!important' from inline styles ${data.values}, as overriding this is not supported by most browsers"
              }
            }
          },
          "button-has-visible-text": {
            impact: "critical",
            messages: {
              pass: "Element has inner text that is visible to screen readers",
              fail: "Element does not have inner text that is visible to screen readers",
              incomplete: "Unable to determine if element has children"
            }
          },
          "doc-has-title": {
            impact: "serious",
            messages: {
              pass: "Document has a non-empty <title> element",
              fail: "Document does not have a non-empty <title> element"
            }
          },
          exists: {
            impact: "minor",
            messages: {
              pass: "Element does not exist",
              incomplete: "Element exists"
            }
          },
          "has-alt": {
            impact: "critical",
            messages: {
              pass: "Element has an alt attribute",
              fail: "Element does not have an alt attribute"
            }
          },
          "has-visible-text": {
            impact: "minor",
            messages: {
              pass: "Element has text that is visible to screen readers",
              fail: "Element does not have text that is visible to screen readers",
              incomplete: "Unable to determine if element has children"
            }
          },
          "is-on-screen": {
            impact: "serious",
            messages: {
              pass: "Element is not visible",
              fail: "Element is visible"
            }
          },
          "non-empty-alt": {
            impact: "critical",
            messages: {
              pass: "Element has a non-empty alt attribute",
              fail: {
                noAttr: "Element has no alt attribute",
                emptyAttr: "Element has an empty alt attribute"
              }
            }
          },
          "non-empty-if-present": {
            impact: "critical",
            messages: {
              pass: {
                default: "Element does not have a value attribute",
                "has-label": "Element has a non-empty value attribute"
              },
              fail: "Element has a value attribute and the value attribute is empty"
            }
          },
          "non-empty-placeholder": {
            impact: "serious",
            messages: {
              pass: "Element has a placeholder attribute",
              fail: {
                noAttr: "Element has no placeholder attribute",
                emptyAttr: "Element has an empty placeholder attribute"
              }
            }
          },
          "non-empty-title": {
            impact: "serious",
            messages: {
              pass: "Element has a title attribute",
              fail: {
                noAttr: "Element has no title attribute",
                emptyAttr: "Element has an empty title attribute"
              }
            }
          },
          "non-empty-value": {
            impact: "critical",
            messages: {
              pass: "Element has a non-empty value attribute",
              fail: {
                noAttr: "Element has no value attribute",
                emptyAttr: "Element has an empty value attribute"
              }
            }
          },
          "presentational-role": {
            impact: "minor",
            messages: {
              pass: 'Element\'s default semantics were overriden with role="${data.role}"',
              fail: {
                default: `Element's default semantics were not overridden with role="none" or role="presentation"`,
                globalAria: "Element's role is not presentational because it has a global ARIA attribute",
                focusable: "Element's role is not presentational because it is focusable",
                both: "Element's role is not presentational because it has a global ARIA attribute and is focusable"
              }
            }
          },
          "role-none": {
            impact: "minor",
            messages: {
              pass: `Element's default semantics were overriden with role="none"`,
              fail: `Element's default semantics were not overridden with role="none"`
            }
          },
          "role-presentation": {
            impact: "minor",
            messages: {
              pass: `Element's default semantics were overriden with role="presentation"`,
              fail: `Element's default semantics were not overridden with role="presentation"`
            }
          },
          "svg-non-empty-title": {
            impact: "serious",
            messages: {
              pass: "Element has a child that is a title",
              fail: {
                noTitle: "Element has no child that is a title",
                emptyTitle: "Element child title is empty"
              },
              incomplete: "Unable to determine element has a child that is a title"
            }
          },
          "caption-faked": {
            impact: "serious",
            messages: {
              pass: "The first row of a table is not used as a caption",
              fail: "The first child of the table should be a caption instead of a table cell"
            }
          },
          "html5-scope": {
            impact: "moderate",
            messages: {
              pass: "Scope attribute is only used on table header elements (<th>)",
              fail: "In HTML 5, scope attributes may only be used on table header elements (<th>)"
            }
          },
          "same-caption-summary": {
            impact: "minor",
            messages: {
              pass: "Content of summary attribute and <caption> are not duplicated",
              fail: "Content of summary attribute and <caption> element are identical"
            }
          },
          "scope-value": {
            impact: "critical",
            messages: {
              pass: "Scope attribute is used correctly",
              fail: "The value of the scope attribute may only be 'row' or 'col'"
            }
          },
          "td-has-header": {
            impact: "critical",
            messages: {
              pass: "All non-empty data cells have table headers",
              fail: "Some non-empty data cells do not have table headers"
            }
          },
          "td-headers-attr": {
            impact: "serious",
            messages: {
              pass: "The headers attribute is exclusively used to refer to other cells in the table",
              incomplete: "The headers attribute is empty",
              fail: "The headers attribute is not exclusively used to refer to other cells in the table"
            }
          },
          "th-has-data-cells": {
            impact: "serious",
            messages: {
              pass: "All table header cells refer to data cells",
              fail: "Not all table header cells refer to data cells",
              incomplete: "Table data cells are missing or empty"
            }
          },
          "hidden-content": {
            impact: "minor",
            messages: {
              pass: "All content on the page has been analyzed.",
              fail: "There were problems analyzing the content on this page.",
              incomplete: "There is hidden content on the page that was not analyzed. You will need to trigger the display of this content in order to analyze it."
            }
          }
        },
        failureSummaries: {
          any: {
            failureMessage: function(S) {
              var q = "Fix any of the following:", G = S;
              if (G)
                for (var fe, De = -1, Xe = G.length - 1; De < Xe; )
                  fe = G[De += 1], q += `
  ` + fe.split(`
`).join(`
  `);
              return q;
            }
          },
          none: {
            failureMessage: function(S) {
              var q = "Fix all of the following:", G = S;
              if (G)
                for (var fe, De = -1, Xe = G.length - 1; De < Xe; )
                  fe = G[De += 1], q += `
  ` + fe.split(`
`).join(`
  `);
              return q;
            }
          }
        },
        incompleteFallbackMessage: "axe couldn't tell the reason. Time to break out the element inspector!"
      },
      rules: [{
        id: "accesskeys",
        selector: "[accesskey]",
        excludeHidden: !1,
        tags: ["cat.keyboard", "best-practice"],
        all: [],
        any: [],
        none: ["accesskeys"]
      }, {
        id: "area-alt",
        selector: "map area[href]",
        excludeHidden: !1,
        tags: ["cat.text-alternatives", "wcag2a", "wcag111", "wcag244", "wcag412", "section508", "section508.22.a", "ACT"],
        actIds: ["c487ae"],
        all: [],
        any: [{
          options: {
            attribute: "alt"
          },
          id: "non-empty-alt"
        }, "aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }],
        none: []
      }, {
        id: "aria-allowed-attr",
        matches: "aria-allowed-attr-matches",
        tags: ["cat.aria", "wcag2a", "wcag412"],
        actIds: ["5c01ea"],
        all: [],
        any: [{
          options: {
            validTreeRowAttrs: ["aria-posinset", "aria-setsize", "aria-expanded", "aria-level"]
          },
          id: "aria-allowed-attr"
        }],
        none: ["aria-unsupported-attr", {
          options: {
            elementsAllowedAriaLabel: ["applet", "input"]
          },
          id: "aria-prohibited-attr"
        }]
      }, {
        id: "aria-allowed-role",
        excludeHidden: !1,
        selector: "[role]",
        matches: "aria-allowed-role-matches",
        tags: ["cat.aria", "best-practice"],
        all: [],
        any: [{
          options: {
            allowImplicit: !0,
            ignoredTags: []
          },
          id: "aria-allowed-role"
        }],
        none: []
      }, {
        id: "aria-command-name",
        selector: '[role="link"], [role="button"], [role="menuitem"]',
        matches: "no-naming-method-matches",
        tags: ["cat.aria", "wcag2a", "wcag412"],
        actIds: ["97a4e1"],
        all: [],
        any: ["has-visible-text", "aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }],
        none: []
      }, {
        id: "aria-dialog-name",
        selector: '[role="dialog"], [role="alertdialog"]',
        matches: "no-naming-method-matches",
        tags: ["cat.aria", "best-practice"],
        all: [],
        any: ["aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }],
        none: []
      }, {
        id: "aria-hidden-body",
        selector: "body",
        excludeHidden: !1,
        matches: "is-initiator-matches",
        tags: ["cat.aria", "wcag2a", "wcag412"],
        all: [],
        any: ["aria-hidden-body"],
        none: []
      }, {
        id: "aria-hidden-focus",
        selector: '[aria-hidden="true"]',
        matches: "aria-hidden-focus-matches",
        excludeHidden: !1,
        tags: ["cat.name-role-value", "wcag2a", "wcag412", "wcag131"],
        actIds: ["6cfa84"],
        all: ["focusable-modal-open", "focusable-disabled", "focusable-not-tabbable"],
        any: [],
        none: []
      }, {
        id: "aria-input-field-name",
        selector: '[role="combobox"], [role="listbox"], [role="searchbox"], [role="slider"], [role="spinbutton"], [role="textbox"]',
        matches: "no-naming-method-matches",
        tags: ["cat.aria", "wcag2a", "wcag412", "ACT"],
        actIds: ["e086e5"],
        all: [],
        any: ["aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }],
        none: ["no-implicit-explicit-label"]
      }, {
        id: "aria-meter-name",
        selector: '[role="meter"]',
        matches: "no-naming-method-matches",
        tags: ["cat.aria", "wcag2a", "wcag111"],
        all: [],
        any: ["aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }],
        none: []
      }, {
        id: "aria-progressbar-name",
        selector: '[role="progressbar"]',
        matches: "no-naming-method-matches",
        tags: ["cat.aria", "wcag2a", "wcag111"],
        all: [],
        any: ["aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }],
        none: []
      }, {
        id: "aria-required-attr",
        selector: "[role]",
        tags: ["cat.aria", "wcag2a", "wcag412"],
        all: [],
        any: ["aria-required-attr"],
        none: []
      }, {
        id: "aria-required-children",
        selector: "[role]",
        matches: "aria-required-children-matches",
        tags: ["cat.aria", "wcag2a", "wcag131"],
        actIds: ["ff89c9"],
        all: [],
        any: [{
          options: {
            reviewEmpty: ["doc-bibliography", "doc-endnotes", "grid", "list", "listbox", "table", "tablist", "tree", "treegrid", "rowgroup"]
          },
          id: "aria-required-children"
        }],
        none: []
      }, {
        id: "aria-required-parent",
        selector: "[role]",
        matches: "aria-required-parent-matches",
        tags: ["cat.aria", "wcag2a", "wcag131"],
        actIds: ["bc4a75", "ff89c9"],
        all: [],
        any: [{
          options: {
            ownGroupRoles: ["listitem", "treeitem"]
          },
          id: "aria-required-parent"
        }],
        none: []
      }, {
        id: "aria-roledescription",
        selector: "[aria-roledescription]",
        tags: ["cat.aria", "wcag2a", "wcag412"],
        all: [],
        any: [{
          options: {
            supportedRoles: ["button", "img", "checkbox", "radio", "combobox", "menuitemcheckbox", "menuitemradio"]
          },
          id: "aria-roledescription"
        }],
        none: []
      }, {
        id: "aria-roles",
        selector: "[role]",
        matches: "no-empty-role-matches",
        tags: ["cat.aria", "wcag2a", "wcag412"],
        all: [],
        any: [],
        none: ["fallbackrole", "invalidrole", "abstractrole", "unsupportedrole", "deprecatedrole"]
      }, {
        id: "aria-text",
        selector: "[role=text]",
        tags: ["cat.aria", "best-practice"],
        all: [],
        any: ["no-focusable-content"],
        none: []
      }, {
        id: "aria-toggle-field-name",
        selector: '[role="checkbox"], [role="menuitemcheckbox"], [role="menuitemradio"], [role="radio"], [role="switch"], [role="option"]',
        matches: "no-naming-method-matches",
        tags: ["cat.aria", "wcag2a", "wcag412", "ACT"],
        all: [],
        any: ["has-visible-text", "aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }],
        none: ["no-implicit-explicit-label"]
      }, {
        id: "aria-tooltip-name",
        selector: '[role="tooltip"]',
        matches: "no-naming-method-matches",
        tags: ["cat.aria", "wcag2a", "wcag412"],
        all: [],
        any: ["has-visible-text", "aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }],
        none: []
      }, {
        id: "aria-treeitem-name",
        selector: '[role="treeitem"]',
        matches: "no-naming-method-matches",
        tags: ["cat.aria", "best-practice"],
        all: [],
        any: ["has-visible-text", "aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }],
        none: []
      }, {
        id: "aria-valid-attr-value",
        matches: "aria-has-attr-matches",
        tags: ["cat.aria", "wcag2a", "wcag412"],
        actIds: ["5c01ea", "c487ae"],
        all: [{
          options: [],
          id: "aria-valid-attr-value"
        }, "aria-errormessage", "aria-level"],
        any: [],
        none: []
      }, {
        id: "aria-valid-attr",
        matches: "aria-has-attr-matches",
        tags: ["cat.aria", "wcag2a", "wcag412"],
        all: [],
        any: [{
          options: [],
          id: "aria-valid-attr"
        }],
        none: []
      }, {
        id: "audio-caption",
        selector: "audio",
        enabled: !1,
        excludeHidden: !1,
        tags: ["cat.time-and-media", "wcag2a", "wcag121", "section508", "section508.22.a"],
        actIds: ["c3232f", "e7aa44"],
        all: [],
        any: [],
        none: ["caption"]
      }, {
        id: "autocomplete-valid",
        matches: "autocomplete-matches",
        tags: ["cat.forms", "wcag21aa", "wcag135"],
        actIds: ["73f2c2"],
        all: [{
          options: {
            stateTerms: ["none", "false", "true", "disabled", "enabled", "undefined", "null"]
          },
          id: "autocomplete-valid"
        }],
        any: [],
        none: []
      }, {
        id: "avoid-inline-spacing",
        selector: "[style]",
        tags: ["cat.structure", "wcag21aa", "wcag1412"],
        all: [{
          options: {
            cssProperties: ["line-height", "letter-spacing", "word-spacing"]
          },
          id: "avoid-inline-spacing"
        }],
        any: [],
        none: []
      }, {
        id: "blink",
        selector: "blink",
        excludeHidden: !1,
        tags: ["cat.time-and-media", "wcag2a", "wcag222", "section508", "section508.22.j"],
        all: [],
        any: [],
        none: ["is-on-screen"]
      }, {
        id: "button-name",
        selector: "button",
        matches: "no-explicit-name-required-matches",
        tags: ["cat.name-role-value", "wcag2a", "wcag412", "section508", "section508.22.a", "ACT"],
        actIds: ["97a4e1", "m6b1q3"],
        all: [],
        any: ["button-has-visible-text", "aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }, "presentational-role"],
        none: []
      }, {
        id: "bypass",
        selector: "html",
        pageLevel: !0,
        matches: "bypass-matches",
        reviewOnFail: !0,
        tags: ["cat.keyboard", "wcag2a", "wcag241", "section508", "section508.22.o"],
        all: [],
        any: ["internal-link-present", {
          options: {
            selector: ":is(h1, h2, h3, h4, h5, h6):not([role]), [role=heading]"
          },
          id: "header-present"
        }, {
          options: {
            selector: "main, [role=main]"
          },
          id: "landmark"
        }],
        none: []
      }, {
        id: "color-contrast-enhanced",
        matches: "color-contrast-matches",
        excludeHidden: !1,
        enabled: !1,
        tags: ["cat.color", "wcag2aaa", "wcag146"],
        all: [],
        any: [{
          options: {
            ignoreUnicode: !0,
            ignoreLength: !1,
            ignorePseudo: !1,
            boldValue: 700,
            boldTextPt: 14,
            largeTextPt: 18,
            contrastRatio: {
              normal: {
                expected: 7
              },
              large: {
                expected: 4.5
              }
            },
            pseudoSizeThreshold: 0.25,
            shadowOutlineEmMax: 0.1
          },
          id: "color-contrast-enhanced"
        }],
        none: []
      }, {
        id: "color-contrast",
        matches: "color-contrast-matches",
        excludeHidden: !1,
        tags: ["cat.color", "wcag2aa", "wcag143"],
        all: [],
        any: [{
          options: {
            ignoreUnicode: !0,
            ignoreLength: !1,
            ignorePseudo: !1,
            boldValue: 700,
            boldTextPt: 14,
            largeTextPt: 18,
            contrastRatio: {
              normal: {
                expected: 4.5
              },
              large: {
                expected: 3
              }
            },
            pseudoSizeThreshold: 0.25,
            shadowOutlineEmMax: 0.2
          },
          id: "color-contrast"
        }],
        none: []
      }, {
        id: "css-orientation-lock",
        selector: "html",
        tags: ["cat.structure", "wcag134", "wcag21aa", "experimental"],
        actIds: ["b33eff"],
        all: [{
          options: {
            degreeThreshold: 2
          },
          id: "css-orientation-lock"
        }],
        any: [],
        none: [],
        preload: !0
      }, {
        id: "definition-list",
        selector: "dl",
        matches: "no-role-matches",
        tags: ["cat.structure", "wcag2a", "wcag131"],
        all: [],
        any: [],
        none: ["structured-dlitems", "only-dlitems"]
      }, {
        id: "dlitem",
        selector: "dd, dt",
        matches: "no-role-matches",
        tags: ["cat.structure", "wcag2a", "wcag131"],
        all: [],
        any: ["dlitem"],
        none: []
      }, {
        id: "document-title",
        selector: "html",
        matches: "is-initiator-matches",
        tags: ["cat.text-alternatives", "wcag2a", "wcag242", "ACT"],
        actIds: ["2779a5"],
        all: [],
        any: ["doc-has-title"],
        none: []
      }, {
        id: "duplicate-id-active",
        selector: "[id]",
        matches: "duplicate-id-active-matches",
        excludeHidden: !1,
        tags: ["cat.parsing", "wcag2a", "wcag411"],
        all: [],
        any: ["duplicate-id-active"],
        none: []
      }, {
        id: "duplicate-id-aria",
        selector: "[id]",
        matches: "duplicate-id-aria-matches",
        excludeHidden: !1,
        tags: ["cat.parsing", "wcag2a", "wcag411"],
        actIds: ["3ea0c8"],
        all: [],
        any: ["duplicate-id-aria"],
        none: []
      }, {
        id: "duplicate-id",
        selector: "[id]",
        matches: "duplicate-id-misc-matches",
        excludeHidden: !1,
        tags: ["cat.parsing", "wcag2a", "wcag411"],
        all: [],
        any: ["duplicate-id"],
        none: []
      }, {
        id: "empty-heading",
        selector: 'h1, h2, h3, h4, h5, h6, [role="heading"]',
        matches: "heading-matches",
        tags: ["cat.name-role-value", "best-practice"],
        impact: "minor",
        all: [],
        any: ["has-visible-text", "aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }],
        none: []
      }, {
        id: "empty-table-header",
        selector: 'th, [role="rowheader"], [role="columnheader"]',
        tags: ["wcag131", "cat.aria"],
        reviewOnFail: !0,
        all: [],
        any: ["has-visible-text"],
        none: []
      }, {
        id: "focus-order-semantics",
        selector: "div, h1, h2, h3, h4, h5, h6, [role=heading], p, span",
        matches: "inserted-into-focus-order-matches",
        tags: ["cat.keyboard", "best-practice", "experimental"],
        all: [],
        any: [{
          options: [],
          id: "has-widget-role"
        }, {
          options: {
            roles: ["tooltip"]
          },
          id: "valid-scrollable-semantics"
        }],
        none: []
      }, {
        id: "form-field-multiple-labels",
        selector: "input, select, textarea",
        matches: "label-matches",
        tags: ["cat.forms", "wcag2a", "wcag332"],
        all: [],
        any: [],
        none: ["multiple-label"]
      }, {
        id: "frame-focusable-content",
        selector: "html",
        matches: "frame-focusable-content-matches",
        tags: ["cat.keyboard", "wcag2a", "wcag211"],
        all: [],
        any: ["frame-focusable-content"],
        none: []
      }, {
        id: "frame-tested",
        selector: "html, frame, iframe",
        tags: ["cat.structure", "review-item", "best-practice"],
        all: [{
          options: {
            isViolation: !1
          },
          id: "frame-tested"
        }],
        any: [],
        none: []
      }, {
        id: "frame-title-unique",
        selector: "frame[title], iframe[title]",
        matches: "frame-title-has-text-matches",
        tags: ["cat.text-alternatives", "best-practice"],
        all: [],
        any: [],
        none: ["unique-frame-title"]
      }, {
        id: "frame-title",
        selector: "frame, iframe",
        tags: ["cat.text-alternatives", "wcag2a", "wcag241", "wcag412", "section508", "section508.22.i"],
        all: [],
        any: [{
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }, "aria-label", "aria-labelledby", "presentational-role"],
        none: []
      }, {
        id: "heading-order",
        selector: "h1, h2, h3, h4, h5, h6, [role=heading]",
        matches: "heading-matches",
        tags: ["cat.semantics", "best-practice"],
        all: [],
        any: ["heading-order"],
        none: []
      }, {
        id: "hidden-content",
        selector: "*",
        excludeHidden: !1,
        tags: ["cat.structure", "experimental", "review-item", "best-practice"],
        all: [],
        any: ["hidden-content"],
        none: []
      }, {
        id: "html-has-lang",
        selector: "html",
        matches: "is-initiator-matches",
        tags: ["cat.language", "wcag2a", "wcag311", "ACT"],
        actIds: ["b5c3f8"],
        all: [],
        any: [{
          options: {
            attributes: ["lang", "xml:lang"]
          },
          id: "has-lang"
        }],
        none: []
      }, {
        id: "html-lang-valid",
        selector: "html[lang], html[xml\\:lang]",
        tags: ["cat.language", "wcag2a", "wcag311", "ACT"],
        actIds: ["bf051a"],
        all: [],
        any: [],
        none: [{
          options: {
            attributes: ["lang", "xml:lang"]
          },
          id: "valid-lang"
        }]
      }, {
        id: "html-xml-lang-mismatch",
        selector: "html[lang][xml\\:lang]",
        matches: "xml-lang-mismatch-matches",
        tags: ["cat.language", "wcag2a", "wcag311", "ACT"],
        actIds: ["5b7ae0"],
        all: ["xml-lang-mismatch"],
        any: [],
        none: []
      }, {
        id: "identical-links-same-purpose",
        selector: 'a[href], area[href], [role="link"]',
        excludeHidden: !1,
        matches: "identical-links-same-purpose-matches",
        tags: ["cat.semantics", "wcag2aaa", "wcag249"],
        actIds: ["b20e66", "fd3a94"],
        all: ["identical-links-same-purpose"],
        any: [],
        none: []
      }, {
        id: "image-alt",
        selector: "img",
        matches: "no-explicit-name-required-matches",
        tags: ["cat.text-alternatives", "wcag2a", "wcag111", "section508", "section508.22.a", "ACT"],
        actIds: ["23a2a8"],
        all: [],
        any: ["has-alt", "aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }, "presentational-role"],
        none: ["alt-space-value"]
      }, {
        id: "image-redundant-alt",
        selector: "img",
        tags: ["cat.text-alternatives", "best-practice"],
        all: [],
        any: [],
        none: [{
          options: {
            parentSelector: "button, [role=button], a[href], p, li, td, th"
          },
          id: "duplicate-img-label"
        }]
      }, {
        id: "input-button-name",
        selector: 'input[type="button"], input[type="submit"], input[type="reset"]',
        matches: "no-explicit-name-required-matches",
        tags: ["cat.name-role-value", "wcag2a", "wcag412", "section508", "section508.22.a"],
        all: [],
        any: ["non-empty-if-present", {
          options: {
            attribute: "value"
          },
          id: "non-empty-value"
        }, "aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }, "presentational-role"],
        none: []
      }, {
        id: "input-image-alt",
        selector: 'input[type="image"]',
        matches: "no-explicit-name-required-matches",
        tags: ["cat.text-alternatives", "wcag2a", "wcag111", "section508", "section508.22.a", "ACT"],
        actIds: ["59796f"],
        all: [],
        any: [{
          options: {
            attribute: "alt"
          },
          id: "non-empty-alt"
        }, "aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }],
        none: []
      }, {
        id: "label-content-name-mismatch",
        matches: "label-content-name-mismatch-matches",
        tags: ["cat.semantics", "wcag21a", "wcag253", "experimental"],
        actIds: ["2ee8b8"],
        all: [],
        any: [{
          options: {
            pixelThreshold: 0.1,
            occuranceThreshold: 3
          },
          id: "label-content-name-mismatch"
        }],
        none: []
      }, {
        id: "label-title-only",
        selector: "input, select, textarea",
        matches: "label-matches",
        tags: ["cat.forms", "best-practice"],
        all: [],
        any: [],
        none: ["title-only"]
      }, {
        id: "label",
        selector: "input, textarea",
        matches: "label-matches",
        tags: ["cat.forms", "wcag2a", "wcag412", "wcag131", "section508", "section508.22.n", "ACT"],
        actIds: ["e086e5", "307n5z"],
        all: [],
        any: ["implicit-label", "explicit-label", "aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }, {
          options: {
            attribute: "placeholder"
          },
          id: "non-empty-placeholder"
        }, "presentational-role"],
        none: ["help-same-as-label", "hidden-explicit-label"]
      }, {
        id: "landmark-banner-is-top-level",
        selector: "header:not([role]), [role=banner]",
        matches: "landmark-has-body-context-matches",
        tags: ["cat.semantics", "best-practice"],
        all: [],
        any: ["landmark-is-top-level"],
        none: []
      }, {
        id: "landmark-complementary-is-top-level",
        selector: "aside:not([role]), [role=complementary]",
        tags: ["cat.semantics", "best-practice"],
        all: [],
        any: ["landmark-is-top-level"],
        none: []
      }, {
        id: "landmark-contentinfo-is-top-level",
        selector: "footer:not([role]), [role=contentinfo]",
        matches: "landmark-has-body-context-matches",
        tags: ["cat.semantics", "best-practice"],
        all: [],
        any: ["landmark-is-top-level"],
        none: []
      }, {
        id: "landmark-main-is-top-level",
        selector: "main:not([role]), [role=main]",
        tags: ["cat.semantics", "best-practice"],
        all: [],
        any: ["landmark-is-top-level"],
        none: []
      }, {
        id: "landmark-no-duplicate-banner",
        selector: "header:not([role]), [role=banner]",
        tags: ["cat.semantics", "best-practice"],
        all: [],
        any: [{
          options: {
            selector: "header:not([role]), [role=banner]",
            nativeScopeFilter: "article, aside, main, nav, section"
          },
          id: "page-no-duplicate-banner"
        }],
        none: []
      }, {
        id: "landmark-no-duplicate-contentinfo",
        selector: "footer:not([role]), [role=contentinfo]",
        tags: ["cat.semantics", "best-practice"],
        all: [],
        any: [{
          options: {
            selector: "footer:not([role]), [role=contentinfo]",
            nativeScopeFilter: "article, aside, main, nav, section"
          },
          id: "page-no-duplicate-contentinfo"
        }],
        none: []
      }, {
        id: "landmark-no-duplicate-main",
        selector: "main:not([role]), [role=main]",
        tags: ["cat.semantics", "best-practice"],
        all: [],
        any: [{
          options: {
            selector: "main:not([role]), [role='main']"
          },
          id: "page-no-duplicate-main"
        }],
        none: []
      }, {
        id: "landmark-one-main",
        selector: "html",
        tags: ["cat.semantics", "best-practice"],
        all: [{
          options: {
            selector: "main:not([role]), [role='main']"
          },
          id: "page-has-main"
        }],
        any: [],
        none: []
      }, {
        id: "landmark-unique",
        selector: "[role=banner], [role=complementary], [role=contentinfo], [role=main], [role=navigation], [role=region], [role=search], [role=form], form, footer, header, aside, main, nav, section",
        tags: ["cat.semantics", "best-practice"],
        matches: "landmark-unique-matches",
        all: [],
        any: ["landmark-is-unique"],
        none: []
      }, {
        id: "link-in-text-block",
        selector: "a[href], [role=link]",
        matches: "link-in-text-block-matches",
        excludeHidden: !1,
        tags: ["cat.color", "experimental", "wcag2a", "wcag141"],
        all: ["link-in-text-block"],
        any: [],
        none: []
      }, {
        id: "link-name",
        selector: "a[href]",
        tags: ["cat.name-role-value", "wcag2a", "wcag412", "wcag244", "section508", "section508.22.a", "ACT"],
        actIds: ["c487ae"],
        all: [],
        any: ["has-visible-text", "aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }],
        none: ["focusable-no-name"]
      }, {
        id: "list",
        selector: "ul, ol",
        matches: "no-role-matches",
        tags: ["cat.structure", "wcag2a", "wcag131"],
        all: [],
        any: [],
        none: ["only-listitems"]
      }, {
        id: "listitem",
        selector: "li",
        matches: "no-role-matches",
        tags: ["cat.structure", "wcag2a", "wcag131"],
        all: [],
        any: ["listitem"],
        none: []
      }, {
        id: "marquee",
        selector: "marquee",
        excludeHidden: !1,
        tags: ["cat.parsing", "wcag2a", "wcag222"],
        all: [],
        any: [],
        none: ["is-on-screen"]
      }, {
        id: "meta-refresh",
        selector: 'meta[http-equiv="refresh"]',
        excludeHidden: !1,
        tags: ["cat.time-and-media", "wcag2a", "wcag221", "wcag224", "wcag325"],
        all: [],
        any: ["meta-refresh"],
        none: []
      }, {
        id: "meta-viewport-large",
        selector: 'meta[name="viewport"]',
        matches: "is-initiator-matches",
        excludeHidden: !1,
        tags: ["cat.sensory-and-visual-cues", "best-practice"],
        all: [],
        any: [{
          options: {
            scaleMinimum: 5,
            lowerBound: 2
          },
          id: "meta-viewport-large"
        }],
        none: []
      }, {
        id: "meta-viewport",
        selector: 'meta[name="viewport"]',
        matches: "is-initiator-matches",
        excludeHidden: !1,
        tags: ["cat.sensory-and-visual-cues", "best-practice", "ACT"],
        actIds: ["b4f0c3"],
        all: [],
        any: [{
          options: {
            scaleMinimum: 2
          },
          id: "meta-viewport"
        }],
        none: []
      }, {
        id: "nested-interactive",
        matches: "nested-interactive-matches",
        tags: ["cat.keyboard", "wcag2a", "wcag412"],
        actIds: ["307n5z"],
        all: [],
        any: ["no-focusable-content"],
        none: []
      }, {
        id: "no-autoplay-audio",
        excludeHidden: !1,
        selector: "audio[autoplay], video[autoplay]",
        matches: "no-autoplay-audio-matches",
        tags: ["cat.time-and-media", "wcag2a", "wcag142", "experimental"],
        actIds: ["80f0bf"],
        preload: !0,
        all: [{
          options: {
            allowedDuration: 3
          },
          id: "no-autoplay-audio"
        }],
        any: [],
        none: []
      }, {
        id: "object-alt",
        selector: "object",
        matches: "no-explicit-name-required-matches",
        tags: ["cat.text-alternatives", "wcag2a", "wcag111", "section508", "section508.22.a"],
        actIds: ["8fc3b6"],
        all: [],
        any: ["aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }, "presentational-role"],
        none: []
      }, {
        id: "p-as-heading",
        selector: "p",
        matches: "p-as-heading-matches",
        tags: ["cat.semantics", "wcag2a", "wcag131", "experimental"],
        all: [{
          options: {
            margins: [{
              weight: 150,
              italic: !0
            }, {
              weight: 150,
              size: 1.15
            }, {
              italic: !0,
              size: 1.15
            }, {
              size: 1.4
            }],
            passLength: 1,
            failLength: 0.5
          },
          id: "p-as-heading"
        }],
        any: [],
        none: []
      }, {
        id: "page-has-heading-one",
        selector: "html",
        tags: ["cat.semantics", "best-practice"],
        all: [{
          options: {
            selector: "h1:not([role], [aria-level]), :is(h1, h2, h3, h4, h5, h6):not([role])[aria-level=1], [role=heading][aria-level=1]"
          },
          id: "page-has-heading-one"
        }],
        any: [],
        none: []
      }, {
        id: "presentation-role-conflict",
        matches: "has-implicit-chromium-role-matches",
        selector: '[role="none"], [role="presentation"]',
        tags: ["cat.aria", "best-practice"],
        all: [],
        any: [],
        none: ["is-element-focusable", "has-global-aria-attribute"]
      }, {
        id: "region",
        selector: "body *",
        tags: ["cat.keyboard", "best-practice"],
        all: [],
        any: [{
          options: {
            regionMatcher: "dialog, [role=dialog], [role=alertdialog], svg"
          },
          id: "region"
        }],
        none: []
      }, {
        id: "role-img-alt",
        selector: "[role='img']:not(img, area, input, object)",
        matches: "html-namespace-matches",
        tags: ["cat.text-alternatives", "wcag2a", "wcag111", "section508", "section508.22.a", "ACT"],
        actIds: ["23a2a8"],
        all: [],
        any: ["aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }],
        none: []
      }, {
        id: "scope-attr-valid",
        selector: "td[scope], th[scope]",
        tags: ["cat.tables", "best-practice"],
        all: ["html5-scope", {
          options: {
            values: ["row", "col", "rowgroup", "colgroup"]
          },
          id: "scope-value"
        }],
        any: [],
        none: []
      }, {
        id: "scrollable-region-focusable",
        matches: "scrollable-region-focusable-matches",
        tags: ["cat.keyboard", "wcag2a", "wcag211"],
        actIds: ["0ssw9k"],
        all: [],
        any: ["focusable-content", "focusable-element"],
        none: []
      }, {
        id: "select-name",
        selector: "select",
        tags: ["cat.forms", "wcag2a", "wcag412", "wcag131", "section508", "section508.22.n", "ACT"],
        actIds: ["e086e5"],
        all: [],
        any: ["implicit-label", "explicit-label", "aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }, "presentational-role"],
        none: ["help-same-as-label", "hidden-explicit-label"]
      }, {
        id: "server-side-image-map",
        selector: "img[ismap]",
        tags: ["cat.text-alternatives", "wcag2a", "wcag211", "section508", "section508.22.f"],
        all: [],
        any: [],
        none: ["exists"]
      }, {
        id: "skip-link",
        selector: 'a[href^="#"], a[href^="/#"]',
        matches: "skip-link-matches",
        tags: ["cat.keyboard", "best-practice"],
        all: [],
        any: ["skip-link"],
        none: []
      }, {
        id: "svg-img-alt",
        selector: '[role="img"], [role="graphics-symbol"], svg[role="graphics-document"]',
        matches: "svg-namespace-matches",
        tags: ["cat.text-alternatives", "wcag2a", "wcag111", "section508", "section508.22.a", "ACT"],
        actIds: ["7d6734"],
        all: [],
        any: ["svg-non-empty-title", "aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }],
        none: []
      }, {
        id: "tabindex",
        selector: "[tabindex]",
        tags: ["cat.keyboard", "best-practice"],
        all: [],
        any: ["tabindex"],
        none: []
      }, {
        id: "table-duplicate-name",
        selector: "table",
        tags: ["cat.tables", "best-practice"],
        all: [],
        any: [],
        none: ["same-caption-summary"]
      }, {
        id: "table-fake-caption",
        selector: "table",
        matches: "data-table-matches",
        tags: ["cat.tables", "experimental", "wcag2a", "wcag131", "section508", "section508.22.g"],
        all: ["caption-faked"],
        any: [],
        none: []
      }, {
        id: "td-has-header",
        selector: "table",
        matches: "data-table-large-matches",
        tags: ["cat.tables", "experimental", "wcag2a", "wcag131", "section508", "section508.22.g"],
        all: ["td-has-header"],
        any: [],
        none: []
      }, {
        id: "td-headers-attr",
        selector: "table",
        tags: ["cat.tables", "wcag2a", "wcag131", "section508", "section508.22.g"],
        actIds: ["a25f45"],
        all: ["td-headers-attr"],
        any: [],
        none: []
      }, {
        id: "th-has-data-cells",
        selector: "table",
        matches: "data-table-matches",
        tags: ["cat.tables", "wcag2a", "wcag131", "section508", "section508.22.g"],
        actIds: ["d0f69e"],
        all: ["th-has-data-cells"],
        any: [],
        none: []
      }, {
        id: "valid-lang",
        selector: "[lang], [xml\\:lang]",
        matches: "not-html-matches",
        tags: ["cat.language", "wcag2aa", "wcag312"],
        all: [],
        any: [],
        none: [{
          options: {
            attributes: ["lang", "xml:lang"]
          },
          id: "valid-lang"
        }]
      }, {
        id: "video-caption",
        selector: "video",
        excludeHidden: !1,
        tags: ["cat.text-alternatives", "wcag2a", "wcag122", "section508", "section508.22.a"],
        actIds: ["eac66b"],
        all: [],
        any: [],
        none: ["caption"]
      }],
      checks: [{
        id: "abstractrole",
        evaluate: "abstractrole-evaluate"
      }, {
        id: "aria-allowed-attr",
        evaluate: "aria-allowed-attr-evaluate",
        options: {
          validTreeRowAttrs: ["aria-posinset", "aria-setsize", "aria-expanded", "aria-level"]
        }
      }, {
        id: "aria-allowed-role",
        evaluate: "aria-allowed-role-evaluate",
        options: {
          allowImplicit: !0,
          ignoredTags: []
        }
      }, {
        id: "aria-errormessage",
        evaluate: "aria-errormessage-evaluate"
      }, {
        id: "aria-hidden-body",
        evaluate: "aria-hidden-body-evaluate"
      }, {
        id: "aria-level",
        evaluate: "aria-level-evaluate"
      }, {
        id: "aria-prohibited-attr",
        evaluate: "aria-prohibited-attr-evaluate",
        options: {
          elementsAllowedAriaLabel: ["applet", "input"]
        }
      }, {
        id: "aria-required-attr",
        evaluate: "aria-required-attr-evaluate"
      }, {
        id: "aria-required-children",
        evaluate: "aria-required-children-evaluate",
        options: {
          reviewEmpty: ["doc-bibliography", "doc-endnotes", "grid", "list", "listbox", "table", "tablist", "tree", "treegrid", "rowgroup"]
        }
      }, {
        id: "aria-required-parent",
        evaluate: "aria-required-parent-evaluate",
        options: {
          ownGroupRoles: ["listitem", "treeitem"]
        }
      }, {
        id: "aria-roledescription",
        evaluate: "aria-roledescription-evaluate",
        options: {
          supportedRoles: ["button", "img", "checkbox", "radio", "combobox", "menuitemcheckbox", "menuitemradio"]
        }
      }, {
        id: "aria-unsupported-attr",
        evaluate: "aria-unsupported-attr-evaluate"
      }, {
        id: "aria-valid-attr-value",
        evaluate: "aria-valid-attr-value-evaluate",
        options: []
      }, {
        id: "aria-valid-attr",
        evaluate: "aria-valid-attr-evaluate",
        options: []
      }, {
        id: "deprecatedrole",
        evaluate: "deprecatedrole-evaluate"
      }, {
        id: "fallbackrole",
        evaluate: "fallbackrole-evaluate"
      }, {
        id: "has-global-aria-attribute",
        evaluate: "has-global-aria-attribute-evaluate"
      }, {
        id: "has-widget-role",
        evaluate: "has-widget-role-evaluate",
        options: []
      }, {
        id: "invalidrole",
        evaluate: "invalidrole-evaluate"
      }, {
        id: "is-element-focusable",
        evaluate: "is-element-focusable-evaluate"
      }, {
        id: "no-implicit-explicit-label",
        evaluate: "no-implicit-explicit-label-evaluate"
      }, {
        id: "unsupportedrole",
        evaluate: "unsupportedrole-evaluate"
      }, {
        id: "valid-scrollable-semantics",
        evaluate: "valid-scrollable-semantics-evaluate",
        options: {
          roles: ["tooltip"]
        }
      }, {
        id: "color-contrast-enhanced",
        evaluate: "color-contrast-evaluate",
        options: {
          ignoreUnicode: !0,
          ignoreLength: !1,
          ignorePseudo: !1,
          boldValue: 700,
          boldTextPt: 14,
          largeTextPt: 18,
          contrastRatio: {
            normal: {
              expected: 7
            },
            large: {
              expected: 4.5
            }
          },
          pseudoSizeThreshold: 0.25,
          shadowOutlineEmMax: 0.1
        }
      }, {
        id: "color-contrast",
        evaluate: "color-contrast-evaluate",
        options: {
          ignoreUnicode: !0,
          ignoreLength: !1,
          ignorePseudo: !1,
          boldValue: 700,
          boldTextPt: 14,
          largeTextPt: 18,
          contrastRatio: {
            normal: {
              expected: 4.5
            },
            large: {
              expected: 3
            }
          },
          pseudoSizeThreshold: 0.25,
          shadowOutlineEmMax: 0.2
        }
      }, {
        id: "link-in-text-block",
        evaluate: "link-in-text-block-evaluate"
      }, {
        id: "autocomplete-appropriate",
        evaluate: "autocomplete-appropriate-evaluate",
        deprecated: !0
      }, {
        id: "autocomplete-valid",
        evaluate: "autocomplete-valid-evaluate",
        options: {
          stateTerms: ["none", "false", "true", "disabled", "enabled", "undefined", "null"]
        }
      }, {
        id: "accesskeys",
        evaluate: "accesskeys-evaluate",
        after: "accesskeys-after"
      }, {
        id: "focusable-content",
        evaluate: "focusable-content-evaluate"
      }, {
        id: "focusable-disabled",
        evaluate: "focusable-disabled-evaluate"
      }, {
        id: "focusable-element",
        evaluate: "focusable-element-evaluate"
      }, {
        id: "focusable-modal-open",
        evaluate: "focusable-modal-open-evaluate"
      }, {
        id: "focusable-no-name",
        evaluate: "focusable-no-name-evaluate"
      }, {
        id: "focusable-not-tabbable",
        evaluate: "focusable-not-tabbable-evaluate"
      }, {
        id: "frame-focusable-content",
        evaluate: "frame-focusable-content-evaluate"
      }, {
        id: "landmark-is-top-level",
        evaluate: "landmark-is-top-level-evaluate"
      }, {
        id: "no-focusable-content",
        evaluate: "no-focusable-content-evaluate"
      }, {
        id: "page-has-heading-one",
        evaluate: "has-descendant-evaluate",
        after: "has-descendant-after",
        options: {
          selector: "h1:not([role], [aria-level]), :is(h1, h2, h3, h4, h5, h6):not([role])[aria-level=1], [role=heading][aria-level=1]"
        }
      }, {
        id: "page-has-main",
        evaluate: "has-descendant-evaluate",
        after: "has-descendant-after",
        options: {
          selector: "main:not([role]), [role='main']"
        }
      }, {
        id: "page-no-duplicate-banner",
        evaluate: "page-no-duplicate-evaluate",
        after: "page-no-duplicate-after",
        options: {
          selector: "header:not([role]), [role=banner]",
          nativeScopeFilter: "article, aside, main, nav, section"
        }
      }, {
        id: "page-no-duplicate-contentinfo",
        evaluate: "page-no-duplicate-evaluate",
        after: "page-no-duplicate-after",
        options: {
          selector: "footer:not([role]), [role=contentinfo]",
          nativeScopeFilter: "article, aside, main, nav, section"
        }
      }, {
        id: "page-no-duplicate-main",
        evaluate: "page-no-duplicate-evaluate",
        after: "page-no-duplicate-after",
        options: {
          selector: "main:not([role]), [role='main']"
        }
      }, {
        id: "tabindex",
        evaluate: "tabindex-evaluate"
      }, {
        id: "alt-space-value",
        evaluate: "alt-space-value-evaluate"
      }, {
        id: "duplicate-img-label",
        evaluate: "duplicate-img-label-evaluate",
        options: {
          parentSelector: "button, [role=button], a[href], p, li, td, th"
        }
      }, {
        id: "explicit-label",
        evaluate: "explicit-evaluate"
      }, {
        id: "help-same-as-label",
        evaluate: "help-same-as-label-evaluate",
        enabled: !1
      }, {
        id: "hidden-explicit-label",
        evaluate: "hidden-explicit-label-evaluate"
      }, {
        id: "implicit-label",
        evaluate: "implicit-evaluate"
      }, {
        id: "label-content-name-mismatch",
        evaluate: "label-content-name-mismatch-evaluate",
        options: {
          pixelThreshold: 0.1,
          occuranceThreshold: 3
        }
      }, {
        id: "multiple-label",
        evaluate: "multiple-label-evaluate"
      }, {
        id: "title-only",
        evaluate: "title-only-evaluate"
      }, {
        id: "landmark-is-unique",
        evaluate: "landmark-is-unique-evaluate",
        after: "landmark-is-unique-after"
      }, {
        id: "has-lang",
        evaluate: "has-lang-evaluate",
        options: {
          attributes: ["lang", "xml:lang"]
        }
      }, {
        id: "valid-lang",
        evaluate: "valid-lang-evaluate",
        options: {
          attributes: ["lang", "xml:lang"]
        }
      }, {
        id: "xml-lang-mismatch",
        evaluate: "xml-lang-mismatch-evaluate"
      }, {
        id: "dlitem",
        evaluate: "dlitem-evaluate"
      }, {
        id: "listitem",
        evaluate: "listitem-evaluate"
      }, {
        id: "only-dlitems",
        evaluate: "only-dlitems-evaluate"
      }, {
        id: "only-listitems",
        evaluate: "only-listitems-evaluate"
      }, {
        id: "structured-dlitems",
        evaluate: "structured-dlitems-evaluate"
      }, {
        id: "caption",
        evaluate: "caption-evaluate"
      }, {
        id: "frame-tested",
        evaluate: "frame-tested-evaluate",
        after: "frame-tested-after",
        options: {
          isViolation: !1
        }
      }, {
        id: "no-autoplay-audio",
        evaluate: "no-autoplay-audio-evaluate",
        options: {
          allowedDuration: 3
        }
      }, {
        id: "css-orientation-lock",
        evaluate: "css-orientation-lock-evaluate",
        options: {
          degreeThreshold: 2
        }
      }, {
        id: "meta-viewport-large",
        evaluate: "meta-viewport-scale-evaluate",
        options: {
          scaleMinimum: 5,
          lowerBound: 2
        }
      }, {
        id: "meta-viewport",
        evaluate: "meta-viewport-scale-evaluate",
        options: {
          scaleMinimum: 2
        }
      }, {
        id: "header-present",
        evaluate: "has-descendant-evaluate",
        after: "has-descendant-after",
        options: {
          selector: ":is(h1, h2, h3, h4, h5, h6):not([role]), [role=heading]"
        }
      }, {
        id: "heading-order",
        evaluate: "heading-order-evaluate",
        after: "heading-order-after"
      }, {
        id: "identical-links-same-purpose",
        evaluate: "identical-links-same-purpose-evaluate",
        after: "identical-links-same-purpose-after"
      }, {
        id: "internal-link-present",
        evaluate: "internal-link-present-evaluate"
      }, {
        id: "landmark",
        evaluate: "has-descendant-evaluate",
        options: {
          selector: "main, [role=main]"
        }
      }, {
        id: "meta-refresh",
        evaluate: "meta-refresh-evaluate"
      }, {
        id: "p-as-heading",
        evaluate: "p-as-heading-evaluate",
        options: {
          margins: [{
            weight: 150,
            italic: !0
          }, {
            weight: 150,
            size: 1.15
          }, {
            italic: !0,
            size: 1.15
          }, {
            size: 1.4
          }],
          passLength: 1,
          failLength: 0.5
        }
      }, {
        id: "region",
        evaluate: "region-evaluate",
        after: "region-after",
        options: {
          regionMatcher: "dialog, [role=dialog], [role=alertdialog], svg"
        }
      }, {
        id: "skip-link",
        evaluate: "skip-link-evaluate"
      }, {
        id: "unique-frame-title",
        evaluate: "unique-frame-title-evaluate",
        after: "unique-frame-title-after"
      }, {
        id: "duplicate-id-active",
        evaluate: "duplicate-id-evaluate",
        after: "duplicate-id-after"
      }, {
        id: "duplicate-id-aria",
        evaluate: "duplicate-id-evaluate",
        after: "duplicate-id-after"
      }, {
        id: "duplicate-id",
        evaluate: "duplicate-id-evaluate",
        after: "duplicate-id-after"
      }, {
        id: "aria-label",
        evaluate: "aria-label-evaluate"
      }, {
        id: "aria-labelledby",
        evaluate: "aria-labelledby-evaluate"
      }, {
        id: "avoid-inline-spacing",
        evaluate: "avoid-inline-spacing-evaluate",
        options: {
          cssProperties: ["line-height", "letter-spacing", "word-spacing"]
        }
      }, {
        id: "button-has-visible-text",
        evaluate: "has-text-content-evaluate"
      }, {
        id: "doc-has-title",
        evaluate: "doc-has-title-evaluate"
      }, {
        id: "exists",
        evaluate: "exists-evaluate"
      }, {
        id: "has-alt",
        evaluate: "has-alt-evaluate"
      }, {
        id: "has-visible-text",
        evaluate: "has-text-content-evaluate"
      }, {
        id: "is-on-screen",
        evaluate: "is-on-screen-evaluate"
      }, {
        id: "non-empty-alt",
        evaluate: "attr-non-space-content-evaluate",
        options: {
          attribute: "alt"
        }
      }, {
        id: "non-empty-if-present",
        evaluate: "non-empty-if-present-evaluate"
      }, {
        id: "non-empty-placeholder",
        evaluate: "attr-non-space-content-evaluate",
        options: {
          attribute: "placeholder"
        }
      }, {
        id: "non-empty-title",
        evaluate: "attr-non-space-content-evaluate",
        options: {
          attribute: "title"
        }
      }, {
        id: "non-empty-value",
        evaluate: "attr-non-space-content-evaluate",
        options: {
          attribute: "value"
        }
      }, {
        id: "presentational-role",
        evaluate: "presentational-role-evaluate"
      }, {
        id: "role-none",
        evaluate: "matches-definition-evaluate",
        deprecated: !0,
        options: {
          matcher: {
            attributes: {
              role: "none"
            }
          }
        }
      }, {
        id: "role-presentation",
        evaluate: "matches-definition-evaluate",
        deprecated: !0,
        options: {
          matcher: {
            attributes: {
              role: "presentation"
            }
          }
        }
      }, {
        id: "svg-non-empty-title",
        evaluate: "svg-non-empty-title-evaluate"
      }, {
        id: "caption-faked",
        evaluate: "caption-faked-evaluate"
      }, {
        id: "html5-scope",
        evaluate: "html5-scope-evaluate"
      }, {
        id: "same-caption-summary",
        evaluate: "same-caption-summary-evaluate"
      }, {
        id: "scope-value",
        evaluate: "scope-value-evaluate",
        options: {
          values: ["row", "col", "rowgroup", "colgroup"]
        }
      }, {
        id: "td-has-header",
        evaluate: "td-has-header-evaluate"
      }, {
        id: "td-headers-attr",
        evaluate: "td-headers-attr-evaluate"
      }, {
        id: "th-has-data-cells",
        evaluate: "th-has-data-cells-evaluate"
      }, {
        id: "hidden-content",
        evaluate: "hidden-content-evaluate"
      }]
    });
  })(typeof window == "object" ? window : ix);
})(ei);
const lx = /* @__PURE__ */ nx(ei.exports), sx = /* @__PURE__ */ ox({
  __proto__: null,
  default: lx
}, [ei.exports]);
export {
  sx as a
};
//# sourceMappingURL=axe.de3a1531.js.map
