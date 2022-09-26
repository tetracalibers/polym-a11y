import "./iframe.6f0d8ddb.js";
import "./es.map.constructor.be929aeb.js";
import { W as P, ar as Fr, as as Ur, at as Yr, au as Jr, av as Qr, Y as Zr, aw as pr, ax as re, ay as ee } from "./Props.e30088b6.js";
import _, { useRef as F, useMemo as br, useEffect as B, useState as V, useCallback as rr, useLayoutEffect as ae } from "react";
import { j as w, a as er } from "./jsx-runtime.1e0c78f5.js";
import "./string.15091591.js";
import "./es.number.to-fixed.963eadaa.js";
var q, A;
function S(a, r, e) {
  return r in a ? Object.defineProperty(a, r, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : a[r] = e, a;
}
function sr(a) {
  return sr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, sr(a);
}
function N(a, r) {
  return ie(a) || oe(a, r) || te(a, r) || ne();
}
function ne() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function te(a, r) {
  if (!!a) {
    if (typeof a == "string")
      return xr(a, r);
    var e = Object.prototype.toString.call(a).slice(8, -1);
    if (e === "Object" && a.constructor && (e = a.constructor.name), e === "Map" || e === "Set")
      return Array.from(a);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return xr(a, r);
  }
}
function xr(a, r) {
  (r == null || r > a.length) && (r = a.length);
  for (var e = 0, n = new Array(r); e < r; e++)
    n[e] = a[e];
  return n;
}
function oe(a, r) {
  var e = a == null ? null : typeof Symbol < "u" && a[Symbol.iterator] || a["@@iterator"];
  if (e != null) {
    var n = [], t = !0, o = !1, i, l;
    try {
      for (e = e.call(a); !(t = (i = e.next()).done) && (n.push(i.value), !(r && n.length === r)); t = !0)
        ;
    } catch (u) {
      o = !0, l = u;
    } finally {
      try {
        !t && e.return != null && e.return();
      } finally {
        if (o)
          throw l;
      }
    }
    return n;
  }
}
function ie(a) {
  if (Array.isArray(a))
    return a;
}
function z() {
  return (z = Object.assign || function(a) {
    for (var r = 1; r < arguments.length; r++) {
      var e = arguments[r];
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && (a[n] = e[n]);
    }
    return a;
  }).apply(this, arguments);
}
function mr(a, r) {
  if (a == null)
    return {};
  var e, n, t = {}, o = Object.keys(a);
  for (n = 0; n < o.length; n++)
    r.indexOf(e = o[n]) >= 0 || (t[e] = a[e]);
  return t;
}
function vr(a) {
  var r = F(a), e = F(function(n) {
    r.current && r.current(n);
  });
  return r.current = a, e.current;
}
var $ = function(r, e, n) {
  return e === void 0 && (e = 0), n === void 0 && (n = 1), r > n ? n : r < e ? e : r;
}, G = function(r) {
  return "touches" in r;
}, fr = function(r) {
  return r && r.ownerDocument.defaultView || self;
}, kr = function(r, e, n) {
  var t = r.getBoundingClientRect(), o = G(e) ? function(i, l) {
    for (var u = 0; u < i.length; u++)
      if (i[u].identifier === l)
        return i[u];
    return i[0];
  }(e.touches, n) : e;
  return {
    left: $((o.pageX - (t.left + fr(r).pageXOffset)) / t.width),
    top: $((o.pageY - (t.top + fr(r).pageYOffset)) / t.height)
  };
}, Mr = function(r) {
  !G(r) && r.preventDefault();
}, yr = _.memo(function(a) {
  var r = a.onMove, e = a.onKey, n = mr(a, ["onMove", "onKey"]), t = F(null), o = vr(r), i = vr(e), l = F(null), u = F(!1), c = br(function() {
    var x = function(h) {
      Mr(h), (G(h) ? h.touches.length > 0 : h.buttons > 0) && t.current ? o(kr(t.current, h, l.current)) : O(!1);
    }, M = function() {
      return O(!1);
    };
    function O(b) {
      var h = u.current, d = fr(t.current), g = b ? d.addEventListener : d.removeEventListener;
      g(h ? "touchmove" : "mousemove", x), g(h ? "touchend" : "mouseup", M);
    }
    return [function(b) {
      var h = b.nativeEvent, d = t.current;
      if (d && (Mr(h), !function(k, C) {
        return C && !G(k);
      }(h, u.current) && d)) {
        if (G(h)) {
          u.current = !0;
          var g = h.changedTouches || [];
          g.length && (l.current = g[0].identifier);
        }
        d.focus(), o(kr(d, h, l.current)), O(!0);
      }
    }, function(b) {
      var h = b.which || b.keyCode;
      h < 37 || h > 40 || (b.preventDefault(), i({
        left: h === 39 ? 0.05 : h === 37 ? -0.05 : 0,
        top: h === 40 ? 0.05 : h === 38 ? -0.05 : 0
      }));
    }, O];
  }, [i, o]), v = c[0], f = c[1], m = c[2];
  return B(function() {
    return m;
  }, [m]), /* @__PURE__ */ w("div", {
    ...z({}, n, {
      onTouchStart: v,
      onMouseDown: v,
      className: "react-colorful__interactive",
      ref: t,
      onKeyDown: f,
      tabIndex: 0,
      role: "slider"
    })
  });
}), D = function(r) {
  return r.filter(Boolean).join(" ");
}, wr = function(r) {
  var e = r.color, n = r.left, t = r.top, o = t === void 0 ? 0.5 : t, i = D(["react-colorful__pointer", r.className]);
  return /* @__PURE__ */ w("div", {
    className: i,
    style: {
      top: 100 * o + "%",
      left: 100 * n + "%"
    },
    children: /* @__PURE__ */ w("div", {
      className: "react-colorful__pointer-fill",
      style: {
        backgroundColor: e
      }
    })
  });
}, E = function(r, e, n) {
  return e === void 0 && (e = 0), n === void 0 && (n = Math.pow(10, e)), Math.round(n * r) / n;
}, le = {
  grad: 0.9,
  turn: 360,
  rad: 360 / (2 * Math.PI)
}, or = function(r) {
  return r[0] === "#" && (r = r.substr(1)), r.length < 6 ? {
    r: parseInt(r[0] + r[0], 16),
    g: parseInt(r[1] + r[1], 16),
    b: parseInt(r[2] + r[2], 16),
    a: 1
  } : {
    r: parseInt(r.substr(0, 2), 16),
    g: parseInt(r.substr(2, 2), 16),
    b: parseInt(r.substr(4, 2), 16),
    a: 1
  };
}, ue = function(r, e) {
  return e === void 0 && (e = "deg"), Number(r) * (le[e] || 1);
}, ce = function(r) {
  var e = /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(r);
  return e ? se({
    h: ue(e[1], e[2]),
    s: Number(e[3]),
    l: Number(e[4]),
    a: e[5] === void 0 ? 1 : Number(e[5]) / (e[6] ? 100 : 1)
  }) : {
    h: 0,
    s: 0,
    v: 0,
    a: 1
  };
}, se = function(r) {
  var e = r.s, n = r.l;
  return {
    h: r.h,
    s: (e *= (n < 50 ? n : 100 - n) / 100) > 0 ? 2 * e / (n + e) * 100 : 0,
    v: n + e,
    a: r.a
  };
}, Pr = function(r) {
  var e = r.s, n = r.v, t = r.a, o = (200 - e) * n / 100;
  return {
    h: E(r.h),
    s: E(o > 0 && o < 200 ? e * n / 100 / (o <= 100 ? o : 200 - o) * 100 : 0),
    l: E(o / 2),
    a: E(t, 2)
  };
}, hr = function(r) {
  var e = Pr(r);
  return "hsl(" + e.h + ", " + e.s + "%, " + e.l + "%)";
}, Z = function(r) {
  var e = Pr(r);
  return "hsla(" + e.h + ", " + e.s + "%, " + e.l + "%, " + e.a + ")";
}, jr = function(r) {
  var e = r.h, n = r.s, t = r.v, o = r.a;
  e = e / 360 * 6, n /= 100, t /= 100;
  var i = Math.floor(e), l = t * (1 - n), u = t * (1 - (e - i) * n), c = t * (1 - (1 - e + i) * n), v = i % 6;
  return {
    r: E(255 * [t, u, l, l, c, t][v]),
    g: E(255 * [c, t, t, u, l, l][v]),
    b: E(255 * [l, l, c, t, t, u][v]),
    a: E(o, 2)
  };
}, ve = function(r) {
  var e = /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(r);
  return e ? zr({
    r: Number(e[1]) / (e[2] ? 100 / 255 : 1),
    g: Number(e[3]) / (e[4] ? 100 / 255 : 1),
    b: Number(e[5]) / (e[6] ? 100 / 255 : 1),
    a: e[7] === void 0 ? 1 : Number(e[7]) / (e[8] ? 100 : 1)
  }) : {
    h: 0,
    s: 0,
    v: 0,
    a: 1
  };
}, ir = function(r) {
  var e = r.toString(16);
  return e.length < 2 ? "0" + e : e;
}, zr = function(r) {
  var e = r.r, n = r.g, t = r.b, o = r.a, i = Math.max(e, n, t), l = i - Math.min(e, n, t), u = l ? i === e ? (n - t) / l : i === n ? 2 + (t - e) / l : 4 + (e - n) / l : 0;
  return {
    h: E(60 * (u < 0 ? u + 6 : u)),
    s: E(i ? l / i * 100 : 0),
    v: E(i / 255 * 100),
    a: o
  };
}, Lr = _.memo(function(a) {
  var r = a.hue, e = a.onChange, n = D(["react-colorful__hue", a.className]);
  return _.createElement("div", {
    className: n
  }, _.createElement(yr, {
    onMove: function(o) {
      e({
        h: 360 * o.left
      });
    },
    onKey: function(o) {
      e({
        h: $(r + 360 * o.left, 0, 360)
      });
    },
    "aria-label": "Hue",
    "aria-valuetext": E(r)
  }, _.createElement(wr, {
    className: "react-colorful__hue-pointer",
    left: r / 360,
    color: hr({
      h: r,
      s: 100,
      v: 100,
      a: 1
    })
  })));
}), Br = _.memo(function(a) {
  var r = a.hsva, e = a.onChange, n = {
    backgroundColor: hr({
      h: r.h,
      s: 100,
      v: 100,
      a: 1
    })
  };
  return _.createElement("div", {
    className: "react-colorful__saturation",
    style: n
  }, _.createElement(yr, {
    onMove: function(o) {
      e({
        s: 100 * o.left,
        v: 100 - 100 * o.top
      });
    },
    onKey: function(o) {
      e({
        s: $(r.s + 100 * o.left, 0, 100),
        v: $(r.v - 100 * o.top, 0, 100)
      });
    },
    "aria-label": "Color",
    "aria-valuetext": "Saturation " + E(r.s) + "%, Brightness " + E(r.v) + "%"
  }, _.createElement(wr, {
    className: "react-colorful__saturation-pointer",
    top: 1 - r.v / 100,
    left: r.s / 100,
    color: hr(r)
  })));
}), $r = function(r, e) {
  if (r === e)
    return !0;
  for (var n in r)
    if (r[n] !== e[n])
      return !1;
  return !0;
}, Xr = function(r, e) {
  return r.replace(/\s/g, "") === e.replace(/\s/g, "");
};
function qr(a, r, e) {
  var n = vr(e), t = V(function() {
    return a.toHsva(r);
  }), o = t[0], i = t[1], l = F({
    color: r,
    hsva: o
  });
  B(function() {
    if (!a.equal(r, l.current.color)) {
      var c = a.toHsva(r);
      l.current = {
        hsva: c,
        color: r
      }, i(c);
    }
  }, [r, a]), B(function() {
    var c;
    $r(o, l.current.hsva) || a.equal(c = a.fromHsva(o), l.current.color) || (l.current = {
      hsva: o,
      color: c
    }, n(c));
  }, [o, a, n]);
  var u = rr(function(c) {
    i(function(v) {
      return Object.assign({}, v, c);
    });
  }, []);
  return [o, u];
}
var fe = typeof window < "u" ? ae : B, he = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}, Cr = /* @__PURE__ */ new Map(), Ar = function(r) {
  fe(function() {
    var e = r.current ? r.current.ownerDocument : document;
    if (e !== void 0 && !Cr.has(e)) {
      var n = e.createElement("style");
      n.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, Cr.set(e, n);
      var t = he();
      t && n.setAttribute("nonce", t), e.head.appendChild(n);
    }
  }, []);
}, de = function(r) {
  var e = r.className, n = r.colorModel, t = r.color, o = t === void 0 ? n.defaultColor : t, i = r.onChange, l = mr(r, ["className", "colorModel", "color", "onChange"]), u = F(null);
  Ar(u);
  var c = qr(n, o, i), v = c[0], f = c[1], m = D(["react-colorful", e]);
  return /* @__PURE__ */ er("div", {
    ...z({}, l, {
      ref: u,
      className: m
    }),
    children: [/* @__PURE__ */ w(Br, {
      hsva: v,
      onChange: f
    }), /* @__PURE__ */ w(Lr, {
      hue: v.h,
      onChange: f,
      className: "react-colorful__last-control"
    })]
  });
}, ge = {
  defaultColor: "000",
  toHsva: function(r) {
    return zr(or(r));
  },
  fromHsva: function(r) {
    return n = (e = jr(r)).g, t = e.b, "#" + ir(e.r) + ir(n) + ir(t);
    var e, n, t;
  },
  equal: function(r, e) {
    return r.toLowerCase() === e.toLowerCase() || $r(or(r), or(e));
  }
}, pe = function(r) {
  return _.createElement(de, z({}, r, {
    colorModel: ge
  }));
}, be = function(r) {
  var e = r.className, n = r.hsva, t = r.onChange, o = {
    backgroundImage: "linear-gradient(90deg, " + Z(Object.assign({}, n, {
      a: 0
    })) + ", " + Z(Object.assign({}, n, {
      a: 1
    })) + ")"
  }, i = D(["react-colorful__alpha", e]);
  return _.createElement("div", {
    className: i
  }, /* @__PURE__ */ w("div", {
    className: "react-colorful__alpha-gradient",
    style: o
  }), _.createElement(yr, {
    onMove: function(u) {
      t({
        a: u.left
      });
    },
    onKey: function(u) {
      t({
        a: $(n.a + u.left)
      });
    },
    "aria-label": "Alpha",
    "aria-valuetext": E(100 * n.a) + "%"
  }, _.createElement(wr, {
    className: "react-colorful__alpha-pointer",
    left: n.a,
    color: Z(n)
  })));
}, Vr = function(r) {
  var e = r.className, n = r.colorModel, t = r.color, o = t === void 0 ? n.defaultColor : t, i = r.onChange, l = mr(r, ["className", "colorModel", "color", "onChange"]), u = F(null);
  Ar(u);
  var c = qr(n, o, i), v = c[0], f = c[1], m = D(["react-colorful", e]);
  return /* @__PURE__ */ er("div", {
    ...z({}, l, {
      ref: u,
      className: m
    }),
    children: [/* @__PURE__ */ w(Br, {
      hsva: v,
      onChange: f
    }), /* @__PURE__ */ w(Lr, {
      hue: v.h,
      onChange: f
    }), /* @__PURE__ */ w(be, {
      hsva: v,
      onChange: f,
      className: "react-colorful__last-control"
    })]
  });
}, me = {
  defaultColor: "hsla(0, 0%, 0%, 1)",
  toHsva: ce,
  fromHsva: Z,
  equal: Xr
}, ye = function(r) {
  return /* @__PURE__ */ w(Vr, {
    ...z({}, r, {
      colorModel: me
    })
  });
}, we = {
  defaultColor: "rgba(0, 0, 0, 1)",
  toHsva: ve,
  fromHsva: function(r) {
    var e = jr(r);
    return "rgba(" + e.r + ", " + e.g + ", " + e.b + ", " + e.a + ")";
  },
  equal: Xr
}, xe = function(r) {
  return /* @__PURE__ */ w(Vr, {
    ...z({}, r, {
      colorModel: we
    })
  });
}, ke = {
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
}, K = ke, Gr = {};
for (var lr = 0, Sr = Object.keys(K); lr < Sr.length; lr++) {
  var Er = Sr[lr];
  Gr[K[Er]] = Er;
}
var s = {
  rgb: {
    channels: 3,
    labels: "rgb"
  },
  hsl: {
    channels: 3,
    labels: "hsl"
  },
  hsv: {
    channels: 3,
    labels: "hsv"
  },
  hwb: {
    channels: 3,
    labels: "hwb"
  },
  cmyk: {
    channels: 4,
    labels: "cmyk"
  },
  xyz: {
    channels: 3,
    labels: "xyz"
  },
  lab: {
    channels: 3,
    labels: "lab"
  },
  lch: {
    channels: 3,
    labels: "lch"
  },
  hex: {
    channels: 1,
    labels: ["hex"]
  },
  keyword: {
    channels: 1,
    labels: ["keyword"]
  },
  ansi16: {
    channels: 1,
    labels: ["ansi16"]
  },
  ansi256: {
    channels: 1,
    labels: ["ansi256"]
  },
  hcg: {
    channels: 3,
    labels: ["h", "c", "g"]
  },
  apple: {
    channels: 3,
    labels: ["r16", "g16", "b16"]
  },
  gray: {
    channels: 1,
    labels: ["gray"]
  }
}, Wr = s;
for (var ur = 0, _r = Object.keys(s); ur < _r.length; ur++) {
  var I = _r[ur];
  if (!("channels" in s[I]))
    throw new Error("missing channels property: " + I);
  if (!("labels" in s[I]))
    throw new Error("missing channel labels property: " + I);
  if (s[I].labels.length !== s[I].channels)
    throw new Error("channel and label counts mismatch: " + I);
  var Or = s[I], Me = Or.channels, Ce = Or.labels;
  delete s[I].channels, delete s[I].labels, Object.defineProperty(s[I], "channels", {
    value: Me
  }), Object.defineProperty(s[I], "labels", {
    value: Ce
  });
}
s.rgb.hsl = function(a) {
  var r = a[0] / 255, e = a[1] / 255, n = a[2] / 255, t = Math.min(r, e, n), o = Math.max(r, e, n), i = o - t, l, u;
  o === t ? l = 0 : r === o ? l = (e - n) / i : e === o ? l = 2 + (n - r) / i : n === o && (l = 4 + (r - e) / i), l = Math.min(l * 60, 360), l < 0 && (l += 360);
  var c = (t + o) / 2;
  return o === t ? u = 0 : c <= 0.5 ? u = i / (o + t) : u = i / (2 - o - t), [l, u * 100, c * 100];
};
s.rgb.hsv = function(a) {
  var r, e, n, t, o, i = a[0] / 255, l = a[1] / 255, u = a[2] / 255, c = Math.max(i, l, u), v = c - Math.min(i, l, u), f = function(x) {
    return (c - x) / 6 / v + 1 / 2;
  };
  return v === 0 ? (t = 0, o = 0) : (o = v / c, r = f(i), e = f(l), n = f(u), i === c ? t = n - e : l === c ? t = 1 / 3 + r - n : u === c && (t = 2 / 3 + e - r), t < 0 ? t += 1 : t > 1 && (t -= 1)), [t * 360, o * 100, c * 100];
};
s.rgb.hwb = function(a) {
  var r = a[0], e = a[1], n = a[2], t = s.rgb.hsl(a)[0], o = 1 / 255 * Math.min(r, Math.min(e, n));
  return n = 1 - 1 / 255 * Math.max(r, Math.max(e, n)), [t, o * 100, n * 100];
};
s.rgb.cmyk = function(a) {
  var r = a[0] / 255, e = a[1] / 255, n = a[2] / 255, t = Math.min(1 - r, 1 - e, 1 - n), o = (1 - r - t) / (1 - t) || 0, i = (1 - e - t) / (1 - t) || 0, l = (1 - n - t) / (1 - t) || 0;
  return [o * 100, i * 100, l * 100, t * 100];
};
function Se(a, r) {
  return Math.pow(a[0] - r[0], 2) + Math.pow(a[1] - r[1], 2) + Math.pow(a[2] - r[2], 2);
}
s.rgb.keyword = function(a) {
  var r = Gr[a];
  if (r)
    return r;
  for (var e = 1 / 0, n, t = 0, o = Object.keys(K); t < o.length; t++) {
    var i = o[t], l = K[i], u = Se(a, l);
    u < e && (e = u, n = i);
  }
  return n;
};
s.keyword.rgb = function(a) {
  return K[a];
};
s.rgb.xyz = function(a) {
  var r = a[0] / 255, e = a[1] / 255, n = a[2] / 255;
  r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92, e = e > 0.04045 ? Math.pow((e + 0.055) / 1.055, 2.4) : e / 12.92, n = n > 0.04045 ? Math.pow((n + 0.055) / 1.055, 2.4) : n / 12.92;
  var t = r * 0.4124 + e * 0.3576 + n * 0.1805, o = r * 0.2126 + e * 0.7152 + n * 0.0722, i = r * 0.0193 + e * 0.1192 + n * 0.9505;
  return [t * 100, o * 100, i * 100];
};
s.rgb.lab = function(a) {
  var r = s.rgb.xyz(a), e = r[0], n = r[1], t = r[2];
  e /= 95.047, n /= 100, t /= 108.883, e = e > 8856e-6 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, n = n > 8856e-6 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, t = t > 8856e-6 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116;
  var o = 116 * n - 16, i = 500 * (e - n), l = 200 * (n - t);
  return [o, i, l];
};
s.hsl.rgb = function(a) {
  var r = a[0] / 360, e = a[1] / 100, n = a[2] / 100, t, o, i;
  if (e === 0)
    return i = n * 255, [i, i, i];
  n < 0.5 ? t = n * (1 + e) : t = n + e - n * e;
  for (var l = 2 * n - t, u = [0, 0, 0], c = 0; c < 3; c++)
    o = r + 1 / 3 * -(c - 1), o < 0 && o++, o > 1 && o--, 6 * o < 1 ? i = l + (t - l) * 6 * o : 2 * o < 1 ? i = t : 3 * o < 2 ? i = l + (t - l) * (2 / 3 - o) * 6 : i = l, u[c] = i * 255;
  return u;
};
s.hsl.hsv = function(a) {
  var r = a[0], e = a[1] / 100, n = a[2] / 100, t = e, o = Math.max(n, 0.01);
  n *= 2, e *= n <= 1 ? n : 2 - n, t *= o <= 1 ? o : 2 - o;
  var i = (n + e) / 2, l = n === 0 ? 2 * t / (o + t) : 2 * e / (n + e);
  return [r, l * 100, i * 100];
};
s.hsv.rgb = function(a) {
  var r = a[0] / 60, e = a[1] / 100, n = a[2] / 100, t = Math.floor(r) % 6, o = r - Math.floor(r), i = 255 * n * (1 - e), l = 255 * n * (1 - e * o), u = 255 * n * (1 - e * (1 - o));
  switch (n *= 255, t) {
    case 0:
      return [n, u, i];
    case 1:
      return [l, n, i];
    case 2:
      return [i, n, u];
    case 3:
      return [i, l, n];
    case 4:
      return [u, i, n];
    case 5:
      return [n, i, l];
  }
};
s.hsv.hsl = function(a) {
  var r = a[0], e = a[1] / 100, n = a[2] / 100, t = Math.max(n, 0.01), o, i;
  i = (2 - e) * n;
  var l = (2 - e) * t;
  return o = e * t, o /= l <= 1 ? l : 2 - l, o = o || 0, i /= 2, [r, o * 100, i * 100];
};
s.hwb.rgb = function(a) {
  var r = a[0] / 360, e = a[1] / 100, n = a[2] / 100, t = e + n, o;
  t > 1 && (e /= t, n /= t);
  var i = Math.floor(6 * r), l = 1 - n;
  o = 6 * r - i, (i & 1) !== 0 && (o = 1 - o);
  var u = e + o * (l - e), c, v, f;
  switch (i) {
    default:
    case 6:
    case 0:
      c = l, v = u, f = e;
      break;
    case 1:
      c = u, v = l, f = e;
      break;
    case 2:
      c = e, v = l, f = u;
      break;
    case 3:
      c = e, v = u, f = l;
      break;
    case 4:
      c = u, v = e, f = l;
      break;
    case 5:
      c = l, v = e, f = u;
      break;
  }
  return [c * 255, v * 255, f * 255];
};
s.cmyk.rgb = function(a) {
  var r = a[0] / 100, e = a[1] / 100, n = a[2] / 100, t = a[3] / 100, o = 1 - Math.min(1, r * (1 - t) + t), i = 1 - Math.min(1, e * (1 - t) + t), l = 1 - Math.min(1, n * (1 - t) + t);
  return [o * 255, i * 255, l * 255];
};
s.xyz.rgb = function(a) {
  var r = a[0] / 100, e = a[1] / 100, n = a[2] / 100, t, o, i;
  return t = r * 3.2406 + e * -1.5372 + n * -0.4986, o = r * -0.9689 + e * 1.8758 + n * 0.0415, i = r * 0.0557 + e * -0.204 + n * 1.057, t = t > 31308e-7 ? 1.055 * Math.pow(t, 1 / 2.4) - 0.055 : t * 12.92, o = o > 31308e-7 ? 1.055 * Math.pow(o, 1 / 2.4) - 0.055 : o * 12.92, i = i > 31308e-7 ? 1.055 * Math.pow(i, 1 / 2.4) - 0.055 : i * 12.92, t = Math.min(Math.max(0, t), 1), o = Math.min(Math.max(0, o), 1), i = Math.min(Math.max(0, i), 1), [t * 255, o * 255, i * 255];
};
s.xyz.lab = function(a) {
  var r = a[0], e = a[1], n = a[2];
  r /= 95.047, e /= 100, n /= 108.883, r = r > 8856e-6 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, e = e > 8856e-6 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, n = n > 8856e-6 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116;
  var t = 116 * e - 16, o = 500 * (r - e), i = 200 * (e - n);
  return [t, o, i];
};
s.lab.xyz = function(a) {
  var r = a[0], e = a[1], n = a[2], t, o, i;
  o = (r + 16) / 116, t = e / 500 + o, i = o - n / 200;
  var l = Math.pow(o, 3), u = Math.pow(t, 3), c = Math.pow(i, 3);
  return o = l > 8856e-6 ? l : (o - 16 / 116) / 7.787, t = u > 8856e-6 ? u : (t - 16 / 116) / 7.787, i = c > 8856e-6 ? c : (i - 16 / 116) / 7.787, t *= 95.047, o *= 100, i *= 108.883, [t, o, i];
};
s.lab.lch = function(a) {
  var r = a[0], e = a[1], n = a[2], t, o = Math.atan2(n, e);
  t = o * 360 / 2 / Math.PI, t < 0 && (t += 360);
  var i = Math.sqrt(e * e + n * n);
  return [r, i, t];
};
s.lch.lab = function(a) {
  var r = a[0], e = a[1], n = a[2], t = n / 360 * 2 * Math.PI, o = e * Math.cos(t), i = e * Math.sin(t);
  return [r, o, i];
};
s.rgb.ansi16 = function(a) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, e = N(a, 3), n = e[0], t = e[1], o = e[2], i = r === null ? s.rgb.hsv(a)[2] : r;
  if (i = Math.round(i / 50), i === 0)
    return 30;
  var l = 30 + (Math.round(o / 255) << 2 | Math.round(t / 255) << 1 | Math.round(n / 255));
  return i === 2 && (l += 60), l;
};
s.hsv.ansi16 = function(a) {
  return s.rgb.ansi16(s.hsv.rgb(a), a[2]);
};
s.rgb.ansi256 = function(a) {
  var r = a[0], e = a[1], n = a[2];
  if (r === e && e === n)
    return r < 8 ? 16 : r > 248 ? 231 : Math.round((r - 8) / 247 * 24) + 232;
  var t = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(e / 255 * 5) + Math.round(n / 255 * 5);
  return t;
};
s.ansi16.rgb = function(a) {
  var r = a % 10;
  if (r === 0 || r === 7)
    return a > 50 && (r += 3.5), r = r / 10.5 * 255, [r, r, r];
  var e = (~~(a > 50) + 1) * 0.5, n = (r & 1) * e * 255, t = (r >> 1 & 1) * e * 255, o = (r >> 2 & 1) * e * 255;
  return [n, t, o];
};
s.ansi256.rgb = function(a) {
  if (a >= 232) {
    var r = (a - 232) * 10 + 8;
    return [r, r, r];
  }
  a -= 16;
  var e, n = Math.floor(a / 36) / 5 * 255, t = Math.floor((e = a % 36) / 6) / 5 * 255, o = e % 6 / 5 * 255;
  return [n, t, o];
};
s.rgb.hex = function(a) {
  var r = ((Math.round(a[0]) & 255) << 16) + ((Math.round(a[1]) & 255) << 8) + (Math.round(a[2]) & 255), e = r.toString(16).toUpperCase();
  return "000000".substring(e.length) + e;
};
s.hex.rgb = function(a) {
  var r = a.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
  if (!r)
    return [0, 0, 0];
  var e = r[0];
  r[0].length === 3 && (e = e.split("").map(function(l) {
    return l + l;
  }).join(""));
  var n = parseInt(e, 16), t = n >> 16 & 255, o = n >> 8 & 255, i = n & 255;
  return [t, o, i];
};
s.rgb.hcg = function(a) {
  var r = a[0] / 255, e = a[1] / 255, n = a[2] / 255, t = Math.max(Math.max(r, e), n), o = Math.min(Math.min(r, e), n), i = t - o, l, u;
  return i < 1 ? l = o / (1 - i) : l = 0, i <= 0 ? u = 0 : t === r ? u = (e - n) / i % 6 : t === e ? u = 2 + (n - r) / i : u = 4 + (r - e) / i, u /= 6, u %= 1, [u * 360, i * 100, l * 100];
};
s.hsl.hcg = function(a) {
  var r = a[1] / 100, e = a[2] / 100, n = e < 0.5 ? 2 * r * e : 2 * r * (1 - e), t = 0;
  return n < 1 && (t = (e - 0.5 * n) / (1 - n)), [a[0], n * 100, t * 100];
};
s.hsv.hcg = function(a) {
  var r = a[1] / 100, e = a[2] / 100, n = r * e, t = 0;
  return n < 1 && (t = (e - n) / (1 - n)), [a[0], n * 100, t * 100];
};
s.hcg.rgb = function(a) {
  var r = a[0] / 360, e = a[1] / 100, n = a[2] / 100;
  if (e === 0)
    return [n * 255, n * 255, n * 255];
  var t = [0, 0, 0], o = r % 1 * 6, i = o % 1, l = 1 - i, u = 0;
  switch (Math.floor(o)) {
    case 0:
      t[0] = 1, t[1] = i, t[2] = 0;
      break;
    case 1:
      t[0] = l, t[1] = 1, t[2] = 0;
      break;
    case 2:
      t[0] = 0, t[1] = 1, t[2] = i;
      break;
    case 3:
      t[0] = 0, t[1] = l, t[2] = 1;
      break;
    case 4:
      t[0] = i, t[1] = 0, t[2] = 1;
      break;
    default:
      t[0] = 1, t[1] = 0, t[2] = l;
  }
  return u = (1 - e) * n, [(e * t[0] + u) * 255, (e * t[1] + u) * 255, (e * t[2] + u) * 255];
};
s.hcg.hsv = function(a) {
  var r = a[1] / 100, e = a[2] / 100, n = r + e * (1 - r), t = 0;
  return n > 0 && (t = r / n), [a[0], t * 100, n * 100];
};
s.hcg.hsl = function(a) {
  var r = a[1] / 100, e = a[2] / 100, n = e * (1 - r) + 0.5 * r, t = 0;
  return n > 0 && n < 0.5 ? t = r / (2 * n) : n >= 0.5 && n < 1 && (t = r / (2 * (1 - n))), [a[0], t * 100, n * 100];
};
s.hcg.hwb = function(a) {
  var r = a[1] / 100, e = a[2] / 100, n = r + e * (1 - r);
  return [a[0], (n - r) * 100, (1 - n) * 100];
};
s.hwb.hcg = function(a) {
  var r = a[1] / 100, e = a[2] / 100, n = 1 - e, t = n - r, o = 0;
  return t < 1 && (o = (n - t) / (1 - t)), [a[0], t * 100, o * 100];
};
s.apple.rgb = function(a) {
  return [a[0] / 65535 * 255, a[1] / 65535 * 255, a[2] / 65535 * 255];
};
s.rgb.apple = function(a) {
  return [a[0] / 255 * 65535, a[1] / 255 * 65535, a[2] / 255 * 65535];
};
s.gray.rgb = function(a) {
  return [a[0] / 100 * 255, a[0] / 100 * 255, a[0] / 100 * 255];
};
s.gray.hsl = function(a) {
  return [0, 0, a[0]];
};
s.gray.hsv = s.gray.hsl;
s.gray.hwb = function(a) {
  return [0, 100, a[0]];
};
s.gray.cmyk = function(a) {
  return [0, 0, 0, a[0]];
};
s.gray.lab = function(a) {
  return [a[0], 0, 0];
};
s.gray.hex = function(a) {
  var r = Math.round(a[0] / 100 * 255) & 255, e = (r << 16) + (r << 8) + r, n = e.toString(16).toUpperCase();
  return "000000".substring(n.length) + n;
};
s.rgb.gray = function(a) {
  var r = (a[0] + a[1] + a[2]) / 3;
  return [r / 255 * 100];
};
var ar = Wr;
function Ee() {
  for (var a = {}, r = Object.keys(ar), e = r.length, n = 0; n < e; n++)
    a[r[n]] = {
      distance: -1,
      parent: null
    };
  return a;
}
function _e(a) {
  var r = Ee(), e = [a];
  for (r[a].distance = 0; e.length; )
    for (var n = e.pop(), t = Object.keys(ar[n]), o = t.length, i = 0; i < o; i++) {
      var l = t[i], u = r[l];
      u.distance === -1 && (u.distance = r[n].distance + 1, u.parent = n, e.unshift(l));
    }
  return r;
}
function Oe(a, r) {
  return function(e) {
    return r(a(e));
  };
}
function Ie(a, r) {
  for (var e = [r[a].parent, a], n = ar[r[a].parent][a], t = r[a].parent; r[t].parent; )
    e.unshift(r[t].parent), n = Oe(ar[r[t].parent][t], n), t = r[t].parent;
  return n.conversion = e, n;
}
var He = function(r) {
  for (var e = _e(r), n = {}, t = Object.keys(e), o = t.length, i = 0; i < o; i++) {
    var l = t[i], u = e[l];
    u.parent !== null && (n[l] = Ie(l, e));
  }
  return n;
}, dr = Wr, Ne = He, L = {}, Re = Object.keys(dr);
function Te(a) {
  var r = function() {
    for (var n = arguments.length, t = new Array(n), o = 0; o < n; o++)
      t[o] = arguments[o];
    var i = t[0];
    return i == null ? i : (i.length > 1 && (t = i), a(t));
  };
  return "conversion" in a && (r.conversion = a.conversion), r;
}
function Fe(a) {
  var r = function() {
    for (var n = arguments.length, t = new Array(n), o = 0; o < n; o++)
      t[o] = arguments[o];
    var i = t[0];
    if (i == null)
      return i;
    i.length > 1 && (t = i);
    var l = a(t);
    if (sr(l) === "object")
      for (var u = l.length, c = 0; c < u; c++)
        l[c] = Math.round(l[c]);
    return l;
  };
  return "conversion" in a && (r.conversion = a.conversion), r;
}
Re.forEach(function(a) {
  L[a] = {}, Object.defineProperty(L[a], "channels", {
    value: dr[a].channels
  }), Object.defineProperty(L[a], "labels", {
    value: dr[a].labels
  });
  var r = Ne(a), e = Object.keys(r);
  e.forEach(function(n) {
    var t = r[n];
    L[a][n] = Fe(t), L[a][n].raw = Te(t);
  });
});
var H = L, Pe = ee, je = function() {
  return Pe.Date.now();
}, ze = je, Le = /\s/;
function Be(a) {
  for (var r = a.length; r-- && Le.test(a.charAt(r)); )
    ;
  return r;
}
var $e = Be, Xe = $e, qe = /^\s+/;
function Ae(a) {
  return a && a.slice(0, Xe(a) + 1).replace(qe, "");
}
var Ve = Ae, Ge = Ve, Ir = pr, We = re, Hr = 0 / 0, Ke = /^[-+]0x[0-9a-f]+$/i, De = /^0b[01]+$/i, Ue = /^0o[0-7]+$/i, Ye = parseInt;
function Je(a) {
  if (typeof a == "number")
    return a;
  if (We(a))
    return Hr;
  if (Ir(a)) {
    var r = typeof a.valueOf == "function" ? a.valueOf() : a;
    a = Ir(r) ? r + "" : r;
  }
  if (typeof a != "string")
    return a === 0 ? a : +a;
  a = Ge(a);
  var e = De.test(a);
  return e || Ue.test(a) ? Ye(a.slice(2), e ? 2 : 8) : Ke.test(a) ? Hr : +a;
}
var Qe = Je, Ze = pr, cr = ze, Nr = Qe, ra = "Expected a function", ea = Math.max, aa = Math.min;
function na(a, r, e) {
  var n, t, o, i, l, u, c = 0, v = !1, f = !1, m = !0;
  if (typeof a != "function")
    throw new TypeError(ra);
  r = Nr(r) || 0, Ze(e) && (v = !!e.leading, f = "maxWait" in e, o = f ? ea(Nr(e.maxWait) || 0, r) : o, m = "trailing" in e ? !!e.trailing : m);
  function x(y) {
    var R = n, T = t;
    return n = t = void 0, c = y, i = a.apply(T, R), i;
  }
  function M(y) {
    return c = y, l = setTimeout(h, r), v ? x(y) : i;
  }
  function O(y) {
    var R = y - u, T = y - c, U = r - R;
    return f ? aa(U, o - T) : U;
  }
  function b(y) {
    var R = y - u, T = y - c;
    return u === void 0 || R >= r || R < 0 || f && T >= o;
  }
  function h() {
    var y = cr();
    if (b(y))
      return d(y);
    l = setTimeout(h, O(y));
  }
  function d(y) {
    return l = void 0, m && n ? x(y) : (n = t = void 0, i);
  }
  function g() {
    l !== void 0 && clearTimeout(l), c = 0, n = u = t = l = void 0;
  }
  function k() {
    return l === void 0 ? i : d(cr());
  }
  function C() {
    var y = cr(), R = b(y);
    if (n = arguments, t = this, u = y, R) {
      if (l === void 0)
        return M(u);
      if (f)
        return clearTimeout(l), l = setTimeout(h, r), x(u);
    }
    return l === void 0 && (l = setTimeout(h, r)), i;
  }
  return C.cancel = g, C.flush = k, C;
}
var ta = na, oa = ta, ia = pr, la = "Expected a function";
function ua(a, r, e) {
  var n = !0, t = !0;
  if (typeof a != "function")
    throw new TypeError(la);
  return ia(e) && (n = "leading" in e ? !!e.leading : n, t = "trailing" in e ? !!e.trailing : t), oa(a, r, {
    leading: n,
    maxWait: r,
    trailing: t
  });
}
var ca = ua, sa = P.div({
  position: "relative",
  maxWidth: 250
}), va = P(Fr)({
  position: "absolute",
  zIndex: 1,
  top: 4,
  left: 4
}), fa = P.div({
  width: 200,
  margin: 5,
  ".react-colorful__saturation": {
    borderRadius: "4px 4px 0 0"
  },
  ".react-colorful__hue": {
    boxShadow: "inset 0 0 0 1px rgb(0 0 0 / 5%)"
  },
  ".react-colorful__last-control": {
    borderRadius: "0 0 4px 4px"
  }
}), ha = P(Ur)(function(a) {
  var r = a.theme;
  return {
    fontFamily: r.typography.fonts.base
  };
}), da = P.div({
  display: "grid",
  gridTemplateColumns: "repeat(9, 16px)",
  gap: 6,
  padding: 3,
  marginTop: 5,
  width: 200
}), ga = P.div(function(a) {
  var r = a.theme, e = a.active;
  return {
    width: 16,
    height: 16,
    boxShadow: e ? "".concat(r.appBorderColor, " 0 0 0 1px inset, ").concat(r.color.mediumdark, "50 0 0 0 4px") : "".concat(r.appBorderColor, " 0 0 0 1px inset"),
    borderRadius: r.appBorderRadius
  };
}), pa = `url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`, Rr = function(r) {
  var e = r.value, n = r.active, t = r.onClick, o = r.style, i = Zr(r, ["value", "active", "onClick", "style"]), l = "linear-gradient(".concat(e, ", ").concat(e, "), ").concat(pa, ", linear-gradient(#fff, #fff)");
  return /* @__PURE__ */ w(ga, {
    ...Object.assign({}, i, {
      active: n,
      onClick: t
    }, {
      style: Object.assign(Object.assign({}, o), {
        backgroundImage: l
      })
    })
  });
}, ba = P(Yr.Input)(function(a) {
  var r = a.theme;
  return {
    width: "100%",
    paddingLeft: 30,
    paddingRight: 30,
    boxSizing: "border-box",
    fontFamily: r.typography.fonts.base
  };
}), ma = P(Jr)(function(a) {
  var r = a.theme;
  return {
    position: "absolute",
    zIndex: 1,
    top: 6,
    right: 7,
    width: 20,
    height: 20,
    padding: 4,
    boxSizing: "border-box",
    cursor: "pointer",
    color: r.input.color
  };
}), p;
(function(a) {
  a.RGB = "rgb", a.HSL = "hsl", a.HEX = "hex";
})(p || (p = {}));
var J = Object.values(p), ya = /\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/, wa = /^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i, xa = /^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i, gr = /^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i, ka = /^\s*#?([0-9a-f]{3})\s*$/i, Ma = (q = {}, S(q, p.HEX, pe), S(q, p.RGB, xe), S(q, p.HSL, ye), q), Q = (A = {}, S(A, p.HEX, "transparent"), S(A, p.RGB, "rgba(0, 0, 0, 0)"), S(A, p.HSL, "hsla(0, 0%, 0%, 0)"), A), Tr = function(r) {
  var e = r == null ? void 0 : r.match(ya);
  if (!e)
    return [0, 0, 0, 1];
  var n = N(e, 5), t = n[1], o = n[2], i = n[3], l = n[4], u = l === void 0 ? 1 : l;
  return [t, o, i, u].map(Number);
}, W = function(r) {
  var e;
  if (!!r) {
    var n = !0;
    if (wa.test(r)) {
      var t, o = Tr(r), i = N(o, 4), l = i[0], u = i[1], c = i[2], v = i[3], f = H.rgb.hsl([l, u, c]) || [0, 0, 0], m = N(f, 3), x = m[0], M = m[1], O = m[2];
      return t = {
        valid: n,
        value: r,
        keyword: H.rgb.keyword([l, u, c]),
        colorSpace: p.RGB
      }, S(t, p.RGB, r), S(t, p.HSL, "hsla(".concat(x, ", ").concat(M, "%, ").concat(O, "%, ").concat(v, ")")), S(t, p.HEX, "#".concat(H.rgb.hex([l, u, c]).toLowerCase())), t;
    }
    if (xa.test(r)) {
      var b, h = Tr(r), d = N(h, 4), g = d[0], k = d[1], C = d[2], y = d[3], R = H.hsl.rgb([g, k, C]) || [0, 0, 0], T = N(R, 3), U = T[0], Kr = T[1], Dr = T[2];
      return b = {
        valid: n,
        value: r,
        keyword: H.hsl.keyword([g, k, C]),
        colorSpace: p.HSL
      }, S(b, p.RGB, "rgba(".concat(U, ", ").concat(Kr, ", ").concat(Dr, ", ").concat(y, ")")), S(b, p.HSL, r), S(b, p.HEX, "#".concat(H.hsl.hex([g, k, C]).toLowerCase())), b;
    }
    var Y = r.replace("#", ""), X = H.keyword.rgb(Y) || H.hex.rgb(Y), tr = H.rgb.hsl(X), j = r;
    if (/[^#a-f0-9]/i.test(r) ? j = Y : gr.test(r) && (j = "#".concat(Y)), j.startsWith("#"))
      n = gr.test(j);
    else
      try {
        H.keyword.hex(j);
      } catch {
        n = !1;
      }
    return e = {
      valid: n,
      value: j,
      keyword: H.rgb.keyword(X),
      colorSpace: p.HEX
    }, S(e, p.RGB, "rgba(".concat(X[0], ", ").concat(X[1], ", ").concat(X[2], ", 1)")), S(e, p.HSL, "hsla(".concat(tr[0], ", ").concat(tr[1], "%, ").concat(tr[2], "%, 1)")), S(e, p.HEX, j), e;
  }
}, Ca = function(r, e, n) {
  if (!r || !(e != null && e.valid))
    return Q[n];
  if (n !== p.HEX)
    return (e == null ? void 0 : e[n]) || Q[n];
  if (!e.hex.startsWith("#"))
    try {
      return "#".concat(H.keyword.hex(e.hex));
    } catch {
      return Q.hex;
    }
  var t = e.hex.match(ka);
  if (!t)
    return gr.test(e.hex) ? e.hex : Q.hex;
  var o = t[1].split(""), i = N(o, 3), l = i[0], u = i[1], c = i[2];
  return "#".concat(l).concat(l).concat(u).concat(u).concat(c).concat(c);
}, Sa = function(r, e) {
  var n = V(r || ""), t = N(n, 2), o = t[0], i = t[1], l = V(function() {
    return W(o);
  }), u = N(l, 2), c = u[0], v = u[1], f = V((c == null ? void 0 : c.colorSpace) || p.HEX), m = N(f, 2), x = m[0], M = m[1];
  B(function() {
    r === void 0 && (i(""), v(void 0), M(p.HEX));
  }, [r]);
  var O = br(function() {
    return Ca(o, c, x).toLowerCase();
  }, [o, c, x]), b = rr(function(d) {
    var g = W(d);
    i((g == null ? void 0 : g.value) || d || ""), g && (v(g), M(g.colorSpace), e(g.value));
  }, [e]), h = rr(function() {
    var d = J.indexOf(x) + 1;
    d >= J.length && (d = 0), M(J[d]);
    var g = (c == null ? void 0 : c[J[d]]) || "";
    i(g), e(g);
  }, [c, x, e]);
  return {
    value: o,
    realValue: O,
    updateValue: b,
    color: c,
    colorSpace: x,
    cycleColorSpace: h
  };
}, nr = function(r) {
  return r.replace(/\s*/, "").toLowerCase();
}, Ea = function(r, e, n) {
  var t = V(e != null && e.valid ? [e] : []), o = N(t, 2), i = o[0], l = o[1];
  B(function() {
    e === void 0 && l([]);
  }, [e]);
  var u = br(function() {
    var v = (r || []).map(function(f) {
      return typeof f == "string" ? W(f) : f.title ? Object.assign(Object.assign({}, W(f.color)), {
        keyword: f.title
      }) : W(f.color);
    });
    return v.concat(i).filter(Boolean).slice(-27);
  }, [r, i]), c = rr(function(v) {
    !(v != null && v.valid) || u.some(function(f) {
      return nr(f[n]) === nr(v[n]);
    }) || l(function(f) {
      return f.concat(v);
    });
  }, [n, u]);
  return {
    presets: u,
    addPreset: c
  };
}, Pa = function(r) {
  var e = r.name, n = r.value, t = r.onChange, o = r.onFocus, i = r.onBlur, l = r.presetColors, u = r.startOpen, c = Sa(n, ca(t, 200)), v = c.value, f = c.realValue, m = c.updateValue, x = c.color, M = c.colorSpace, O = c.cycleColorSpace, b = Ea(l, x, M), h = b.presets, d = b.addPreset, g = Ma[M];
  return /* @__PURE__ */ er(sa, {
    children: [/* @__PURE__ */ w(va, {
      trigger: "click",
      startOpen: u,
      closeOnClick: !0,
      onVisibilityChange: function() {
        return d(x);
      },
      tooltip: /* @__PURE__ */ er(fa, {
        children: [/* @__PURE__ */ w(g, {
          ...Object.assign({
            color: f === "transparent" ? "#000000" : f
          }, {
            onChange: m,
            onFocus: o,
            onBlur: i
          })
        }), h.length > 0 && /* @__PURE__ */ w(da, {
          children: h.map(function(k, C) {
            return /* @__PURE__ */ w(Fr, {
              hasChrome: !1,
              tooltip: /* @__PURE__ */ w(ha, {
                note: k.keyword || k.value
              }),
              children: /* @__PURE__ */ w(Rr, {
                value: k[M],
                active: x && nr(k[M]) === nr(x[M]),
                onClick: function() {
                  return m(k.value);
                }
              })
            }, "".concat(k.value, "-").concat(C));
          })
        })]
      }),
      children: /* @__PURE__ */ w(Rr, {
        value: f,
        style: {
          margin: 4
        }
      })
    }), /* @__PURE__ */ w(ba, {
      id: Qr(e),
      value: v,
      onChange: function(C) {
        return m(C.target.value);
      },
      onFocus: function(C) {
        return C.target.select();
      },
      placeholder: "Choose color..."
    }), v ? /* @__PURE__ */ w(ma, {
      icon: "markup",
      onClick: O
    }) : null]
  });
};
export {
  Pa as ColorControl,
  Pa as default
};
//# sourceMappingURL=Color-f953d088.41415392.js.map