import { a1 as Jt } from "./iframe.6f0d8ddb.js";
import "./es.map.constructor.be929aeb.js";
import { W as Ce, a9 as fe, aa as de, V as Kt, Y as $e, $ as Qt, ab as Y, ac as Ve, ad as Le, ae as Re, af as Ot, ag as j, ah as B, ai as I, aj as $, ak as He, al as pe, am as nt, an as Fe, ao as Zt, ap as xt, aq as _t } from "./Props.e30088b6.js";
import "./es.regexp.flags.b11df199.js";
import * as P from "react";
import N, { useState as er, useCallback as tr, useEffect as rr, Component as Et } from "react";
import { createPortal as nr } from "react-dom";
import { j as ot } from "./jsx-runtime.1e0c78f5.js";
import "./string.15091591.js";
import "./es.number.to-fixed.963eadaa.js";
var it, at;
function or(t, e) {
  return lr(t) || sr(t, e) || ar(t, e) || ir();
}
function ir() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ar(t, e) {
  if (!!t) {
    if (typeof t == "string")
      return st(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set")
      return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return st(t, e);
  }
}
function st(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++)
    r[n] = t[n];
  return r;
}
function sr(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var r = [], o = !0, i = !1, s, a;
    try {
      for (n = n.call(t); !(o = (s = n.next()).done) && (r.push(s.value), !(e && r.length === e)); o = !0)
        ;
    } catch (l) {
      i = !0, a = l;
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (i)
          throw a;
      }
    }
    return r;
  }
}
function lr(t) {
  if (Array.isArray(t))
    return t;
}
function Tt(t, e) {
  return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, {
    raw: {
      value: Object.freeze(e)
    }
  }));
}
function Pe(t) {
  return Pe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Pe(t);
}
function q(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
function F(t) {
  if (t == null)
    return window;
  if (t.toString() !== "[object Window]") {
    var e = t.ownerDocument;
    return e && e.defaultView || window;
  }
  return t;
}
function ie(t) {
  var e = F(t).Element;
  return t instanceof e || t instanceof Element;
}
function L(t) {
  var e = F(t).HTMLElement;
  return t instanceof e || t instanceof HTMLElement;
}
function Rt(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  var e = F(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function cr(t) {
  var e = t.state;
  Object.keys(e.elements).forEach(function(n) {
    var r = e.styles[n] || {}, o = e.attributes[n] || {}, i = e.elements[n];
    !L(i) || !q(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(s) {
      var a = o[s];
      a === !1 ? i.removeAttribute(s) : i.setAttribute(s, a === !0 ? "" : a);
    }));
  });
}
function ur(t) {
  var e = t.state, n = {
    popper: {
      position: e.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(e.elements.popper.style, n.popper), e.styles = n, e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow), function() {
    Object.keys(e.elements).forEach(function(r) {
      var o = e.elements[r], i = e.attributes[r] || {}, s = Object.keys(e.styles.hasOwnProperty(r) ? e.styles[r] : n[r]), a = s.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !L(o) || !q(o) || (Object.assign(o.style, a), Object.keys(i).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
var pr = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: cr,
  effect: ur,
  requires: ["computeStyles"]
};
function W(t) {
  return t.split("-")[0];
}
var re = Math.max, Se = Math.min, ae = Math.round;
function se(t, e) {
  e === void 0 && (e = !1);
  var n = t.getBoundingClientRect(), r = 1, o = 1;
  if (L(t) && e) {
    var i = t.offsetHeight, s = t.offsetWidth;
    s > 0 && (r = ae(n.width) / s || 1), i > 0 && (o = ae(n.height) / i || 1);
  }
  return {
    width: n.width / r,
    height: n.height / o,
    top: n.top / o,
    right: n.right / r,
    bottom: n.bottom / o,
    left: n.left / r,
    x: n.left / r,
    y: n.top / o
  };
}
function Ue(t) {
  var e = se(t), n = t.offsetWidth, r = t.offsetHeight;
  return Math.abs(e.width - n) <= 1 && (n = e.width), Math.abs(e.height - r) <= 1 && (r = e.height), {
    x: t.offsetLeft,
    y: t.offsetTop,
    width: n,
    height: r
  };
}
function Pt(t, e) {
  var n = e.getRootNode && e.getRootNode();
  if (t.contains(e))
    return !0;
  if (n && Rt(n)) {
    var r = e;
    do {
      if (r && t.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function V(t) {
  return F(t).getComputedStyle(t);
}
function fr(t) {
  return ["table", "td", "th"].indexOf(q(t)) >= 0;
}
function Q(t) {
  return ((ie(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Ae(t) {
  return q(t) === "html" ? t : t.assignedSlot || t.parentNode || (Rt(t) ? t.host : null) || Q(t);
}
function lt(t) {
  return !L(t) || V(t).position === "fixed" ? null : t.offsetParent;
}
function dr(t) {
  var e = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && L(t)) {
    var r = V(t);
    if (r.position === "fixed")
      return null;
  }
  for (var o = Ae(t); L(o) && ["html", "body"].indexOf(q(o)) < 0; ) {
    var i = V(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || e && i.willChange === "filter" || e && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function ge(t) {
  for (var e = F(t), n = lt(t); n && fr(n) && V(n).position === "static"; )
    n = lt(n);
  return n && (q(n) === "html" || q(n) === "body" && V(n).position === "static") ? e : n || dr(t) || e;
}
function qe(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function ve(t, e, n) {
  return re(t, Se(e, n));
}
function vr(t, e, n) {
  var r = ve(t, e, n);
  return r > n ? n : r;
}
function St() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ct(t) {
  return Object.assign({}, St(), t);
}
function At(t, e) {
  return e.reduce(function(n, r) {
    return n[r] = t, n;
  }, {});
}
var hr = function(e, n) {
  return e = typeof e == "function" ? e(Object.assign({}, n.rects, {
    placement: n.placement
  })) : e, Ct(typeof e != "number" ? e : At(e, Fe));
};
function mr(t) {
  var e, n = t.state, r = t.name, o = t.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, a = W(n.placement), l = qe(a), u = [B, $].indexOf(a) >= 0, c = u ? "height" : "width";
  if (!(!i || !s)) {
    var d = hr(o.padding, n), g = Ue(i), p = l === "y" ? j : B, v = l === "y" ? I : $, h = n.rects.reference[c] + n.rects.reference[l] - s[l] - n.rects.popper[c], m = s[l] - n.rects.reference[l], E = ge(i), T = E ? l === "y" ? E.clientHeight || 0 : E.clientWidth || 0 : 0, b = h / 2 - m / 2, f = d[p], w = T - g[c] - d[v], y = T / 2 - g[c] / 2 + b, O = ve(f, y, w), R = l;
    n.modifiersData[r] = (e = {}, e[R] = O, e.centerOffset = O - y, e);
  }
}
function gr(t) {
  var e = t.state, n = t.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  if (o != null && !(typeof o == "string" && (o = e.elements.popper.querySelector(o), !o))) {
    if (process.env.NODE_ENV !== "production" && (L(o) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !Pt(e.elements.popper, o)) {
      process.env.NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    e.elements.arrow = o;
  }
}
var yr = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: mr,
  effect: gr,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function le(t) {
  return t.split("-")[1];
}
var wr = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function br(t) {
  var e = t.x, n = t.y, r = window, o = r.devicePixelRatio || 1;
  return {
    x: ae(e * o) / o || 0,
    y: ae(n * o) / o || 0
  };
}
function ct(t) {
  var e, n = t.popper, r = t.popperRect, o = t.placement, i = t.variation, s = t.offsets, a = t.position, l = t.gpuAcceleration, u = t.adaptive, c = t.roundOffsets, d = t.isFixed, g = s.x, p = g === void 0 ? 0 : g, v = s.y, h = v === void 0 ? 0 : v, m = typeof c == "function" ? c({
    x: p,
    y: h
  }) : {
    x: p,
    y: h
  };
  p = m.x, h = m.y;
  var E = s.hasOwnProperty("x"), T = s.hasOwnProperty("y"), b = B, f = j, w = window;
  if (u) {
    var y = ge(n), O = "clientHeight", R = "clientWidth";
    if (y === F(n) && (y = Q(n), V(y).position !== "static" && a === "absolute" && (O = "scrollHeight", R = "scrollWidth")), y = y, o === j || (o === B || o === $) && i === He) {
      f = I;
      var S = d && w.visualViewport ? w.visualViewport.height : y[O];
      h -= S - r.height, h *= l ? 1 : -1;
    }
    if (o === B || (o === j || o === I) && i === He) {
      b = $;
      var C = d && w.visualViewport ? w.visualViewport.width : y[R];
      p -= C - r.width, p *= l ? 1 : -1;
    }
  }
  var x = Object.assign({
    position: a
  }, u && wr), A = c === !0 ? br({
    x: p,
    y: h
  }) : {
    x: p,
    y: h
  };
  if (p = A.x, h = A.y, l) {
    var k;
    return Object.assign({}, x, (k = {}, k[f] = T ? "0" : "", k[b] = E ? "0" : "", k.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + h + "px)" : "translate3d(" + p + "px, " + h + "px, 0)", k));
  }
  return Object.assign({}, x, (e = {}, e[f] = T ? h + "px" : "", e[b] = E ? p + "px" : "", e.transform = "", e));
}
function Or(t) {
  var e = t.state, n = t.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, s = i === void 0 ? !0 : i, a = n.roundOffsets, l = a === void 0 ? !0 : a;
  if (process.env.NODE_ENV !== "production") {
    var u = V(e.elements.popper).transitionProperty || "";
    s && ["transform", "top", "right", "bottom", "left"].some(function(d) {
      return u.indexOf(d) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var c = {
    placement: W(e.placement),
    variation: le(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: o,
    isFixed: e.options.strategy === "fixed"
  };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, ct(Object.assign({}, c, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: s,
    roundOffsets: l
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, ct(Object.assign({}, c, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}
var xr = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Or,
  data: {}
}, xe = {
  passive: !0
};
function Er(t) {
  var e = t.state, n = t.instance, r = t.options, o = r.scroll, i = o === void 0 ? !0 : o, s = r.resize, a = s === void 0 ? !0 : s, l = F(e.elements.popper), u = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return i && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, xe);
  }), a && l.addEventListener("resize", n.update, xe), function() {
    i && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, xe);
    }), a && l.removeEventListener("resize", n.update, xe);
  };
}
var Tr = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Er,
  data: {}
}, Rr = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ee(t) {
  return t.replace(/left|right|bottom|top/g, function(e) {
    return Rr[e];
  });
}
var Pr = {
  start: "end",
  end: "start"
};
function ut(t) {
  return t.replace(/start|end/g, function(e) {
    return Pr[e];
  });
}
function Ye(t) {
  var e = F(t), n = e.pageXOffset, r = e.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Xe(t) {
  return se(Q(t)).left + Ye(t).scrollLeft;
}
function Sr(t) {
  var e = F(t), n = Q(t), r = e.visualViewport, o = n.clientWidth, i = n.clientHeight, s = 0, a = 0;
  return r && (o = r.width, i = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (s = r.offsetLeft, a = r.offsetTop)), {
    width: o,
    height: i,
    x: s + Xe(t),
    y: a
  };
}
function Cr(t) {
  var e, n = Q(t), r = Ye(t), o = (e = t.ownerDocument) == null ? void 0 : e.body, i = re(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = re(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), a = -r.scrollLeft + Xe(t), l = -r.scrollTop;
  return V(o || n).direction === "rtl" && (a += re(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
function ze(t) {
  var e = V(t), n = e.overflow, r = e.overflowX, o = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function kt(t) {
  return ["html", "body", "#document"].indexOf(q(t)) >= 0 ? t.ownerDocument.body : L(t) && ze(t) ? t : kt(Ae(t));
}
function he(t, e) {
  var n;
  e === void 0 && (e = []);
  var r = kt(t), o = r === ((n = t.ownerDocument) == null ? void 0 : n.body), i = F(r), s = o ? [i].concat(i.visualViewport || [], ze(r) ? r : []) : r, a = e.concat(s);
  return o ? a : a.concat(he(Ae(s)));
}
function Ne(t) {
  return Object.assign({}, t, {
    left: t.x,
    top: t.y,
    right: t.x + t.width,
    bottom: t.y + t.height
  });
}
function Ar(t) {
  var e = se(t);
  return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e;
}
function pt(t, e) {
  return e === xt ? Ne(Sr(t)) : ie(e) ? Ar(e) : Ne(Cr(Q(t)));
}
function kr(t) {
  var e = he(Ae(t)), n = ["absolute", "fixed"].indexOf(V(t).position) >= 0, r = n && L(t) ? ge(t) : t;
  return ie(r) ? e.filter(function(o) {
    return ie(o) && Pt(o, r) && q(o) !== "body";
  }) : [];
}
function Dr(t, e, n) {
  var r = e === "clippingParents" ? kr(t) : [].concat(e), o = [].concat(r, [n]), i = o[0], s = o.reduce(function(a, l) {
    var u = pt(t, l);
    return a.top = re(u.top, a.top), a.right = Se(u.right, a.right), a.bottom = Se(u.bottom, a.bottom), a.left = re(u.left, a.left), a;
  }, pt(t, i));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function Dt(t) {
  var e = t.reference, n = t.element, r = t.placement, o = r ? W(r) : null, i = r ? le(r) : null, s = e.x + e.width / 2 - n.width / 2, a = e.y + e.height / 2 - n.height / 2, l;
  switch (o) {
    case j:
      l = {
        x: s,
        y: e.y - n.height
      };
      break;
    case I:
      l = {
        x: s,
        y: e.y + e.height
      };
      break;
    case $:
      l = {
        x: e.x + e.width,
        y: a
      };
      break;
    case B:
      l = {
        x: e.x - n.width,
        y: a
      };
      break;
    default:
      l = {
        x: e.x,
        y: e.y
      };
  }
  var u = o ? qe(o) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (i) {
      case Re:
        l[u] = l[u] - (e[c] / 2 - n[c] / 2);
        break;
      case He:
        l[u] = l[u] + (e[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function me(t, e) {
  e === void 0 && (e = {});
  var n = e, r = n.placement, o = r === void 0 ? t.placement : r, i = n.boundary, s = i === void 0 ? _t : i, a = n.rootBoundary, l = a === void 0 ? xt : a, u = n.elementContext, c = u === void 0 ? pe : u, d = n.altBoundary, g = d === void 0 ? !1 : d, p = n.padding, v = p === void 0 ? 0 : p, h = Ct(typeof v != "number" ? v : At(v, Fe)), m = c === pe ? Zt : pe, E = t.rects.popper, T = t.elements[g ? m : c], b = Dr(ie(T) ? T : T.contextElement || Q(t.elements.popper), s, l), f = se(t.elements.reference), w = Dt({
    reference: f,
    element: E,
    strategy: "absolute",
    placement: o
  }), y = Ne(Object.assign({}, E, w)), O = c === pe ? y : f, R = {
    top: b.top - O.top + h.top,
    bottom: O.bottom - b.bottom + h.bottom,
    left: b.left - O.left + h.left,
    right: O.right - b.right + h.right
  }, S = t.modifiersData.offset;
  if (c === pe && S) {
    var C = S[o];
    Object.keys(R).forEach(function(x) {
      var A = [$, I].indexOf(x) >= 0 ? 1 : -1, k = [j, I].indexOf(x) >= 0 ? "y" : "x";
      R[x] += C[k] * A;
    });
  }
  return R;
}
function Mr(t, e) {
  e === void 0 && (e = {});
  var n = e, r = n.placement, o = n.boundary, i = n.rootBoundary, s = n.padding, a = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? Ot : l, c = le(r), d = c ? a ? nt : nt.filter(function(v) {
    return le(v) === c;
  }) : Fe, g = d.filter(function(v) {
    return u.indexOf(v) >= 0;
  });
  g.length === 0 && (g = d, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var p = g.reduce(function(v, h) {
    return v[h] = me(t, {
      placement: h,
      boundary: o,
      rootBoundary: i,
      padding: s
    })[W(h)], v;
  }, {});
  return Object.keys(p).sort(function(v, h) {
    return p[v] - p[h];
  });
}
function jr(t) {
  if (W(t) === Ve)
    return [];
  var e = Ee(t);
  return [ut(t), e, ut(e)];
}
function Br(t) {
  var e = t.state, n = t.options, r = t.name;
  if (!e.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, a = s === void 0 ? !0 : s, l = n.fallbackPlacements, u = n.padding, c = n.boundary, d = n.rootBoundary, g = n.altBoundary, p = n.flipVariations, v = p === void 0 ? !0 : p, h = n.allowedAutoPlacements, m = e.options.placement, E = W(m), T = E === m, b = l || (T || !v ? [Ee(m)] : jr(m)), f = [m].concat(b).reduce(function(oe, G) {
      return oe.concat(W(G) === Ve ? Mr(e, {
        placement: G,
        boundary: c,
        rootBoundary: d,
        padding: u,
        flipVariations: v,
        allowedAutoPlacements: h
      }) : G);
    }, []), w = e.rects.reference, y = e.rects.popper, O = /* @__PURE__ */ new Map(), R = !0, S = f[0], C = 0; C < f.length; C++) {
      var x = f[C], A = W(x), k = le(x) === Re, X = [j, I].indexOf(A) >= 0, z = X ? "width" : "height", D = me(e, {
        placement: x,
        boundary: c,
        rootBoundary: d,
        altBoundary: g,
        padding: u
      }), M = X ? k ? $ : B : k ? I : j;
      w[z] > y[z] && (M = Ee(M));
      var ne = Ee(M), Z = [];
      if (i && Z.push(D[A] <= 0), a && Z.push(D[M] <= 0, D[ne] <= 0), Z.every(function(oe) {
        return oe;
      })) {
        S = x, R = !1;
        break;
      }
      O.set(x, Z);
    }
    if (R)
      for (var ye = v ? 3 : 1, ke = function(G) {
        var ue = f.find(function(be) {
          var _ = O.get(be);
          if (_)
            return _.slice(0, G).every(function(De) {
              return De;
            });
        });
        if (ue)
          return S = ue, "break";
      }, ce = ye; ce > 0; ce--) {
        var we = ke(ce);
        if (we === "break")
          break;
      }
    e.placement !== S && (e.modifiersData[r]._skip = !0, e.placement = S, e.reset = !0);
  }
}
var Lr = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Br,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function ft(t, e, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: t.top - e.height - n.y,
    right: t.right - e.width + n.x,
    bottom: t.bottom - e.height + n.y,
    left: t.left - e.width - n.x
  };
}
function dt(t) {
  return [j, $, I, B].some(function(e) {
    return t[e] >= 0;
  });
}
function Hr(t) {
  var e = t.state, n = t.name, r = e.rects.reference, o = e.rects.popper, i = e.modifiersData.preventOverflow, s = me(e, {
    elementContext: "reference"
  }), a = me(e, {
    altBoundary: !0
  }), l = ft(s, r), u = ft(a, o, i), c = dt(l), d = dt(u);
  e.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: d
  }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": d
  });
}
var Nr = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Hr
};
function Wr(t, e, n) {
  var r = W(t), o = [B, j].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, e, {
    placement: t
  })) : n, s = i[0], a = i[1];
  return s = s || 0, a = (a || 0) * o, [B, $].indexOf(r) >= 0 ? {
    x: a,
    y: s
  } : {
    x: s,
    y: a
  };
}
function Ir(t) {
  var e = t.state, n = t.options, r = t.name, o = n.offset, i = o === void 0 ? [0, 0] : o, s = Ot.reduce(function(c, d) {
    return c[d] = Wr(d, e.rects, i), c;
  }, {}), a = s[e.placement], l = a.x, u = a.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += u), e.modifiersData[r] = s;
}
var $r = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Ir
};
function Vr(t) {
  var e = t.state, n = t.name;
  e.modifiersData[n] = Dt({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement
  });
}
var Fr = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Vr,
  data: {}
};
function Ur(t) {
  return t === "x" ? "y" : "x";
}
function qr(t) {
  var e = t.state, n = t.options, r = t.name, o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, a = s === void 0 ? !1 : s, l = n.boundary, u = n.rootBoundary, c = n.altBoundary, d = n.padding, g = n.tether, p = g === void 0 ? !0 : g, v = n.tetherOffset, h = v === void 0 ? 0 : v, m = me(e, {
    boundary: l,
    rootBoundary: u,
    padding: d,
    altBoundary: c
  }), E = W(e.placement), T = le(e.placement), b = !T, f = qe(E), w = Ur(f), y = e.modifiersData.popperOffsets, O = e.rects.reference, R = e.rects.popper, S = typeof h == "function" ? h(Object.assign({}, e.rects, {
    placement: e.placement
  })) : h, C = typeof S == "number" ? {
    mainAxis: S,
    altAxis: S
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, S), x = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, A = {
    x: 0,
    y: 0
  };
  if (!!y) {
    if (i) {
      var k, X = f === "y" ? j : B, z = f === "y" ? I : $, D = f === "y" ? "height" : "width", M = y[f], ne = M + m[X], Z = M - m[z], ye = p ? -R[D] / 2 : 0, ke = T === Re ? O[D] : R[D], ce = T === Re ? -R[D] : -O[D], we = e.elements.arrow, oe = p && we ? Ue(we) : {
        width: 0,
        height: 0
      }, G = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : St(), ue = G[X], be = G[z], _ = ve(0, O[D], oe[D]), De = b ? O[D] / 2 - ye - _ - ue - C.mainAxis : ke - _ - ue - C.mainAxis, Ut = b ? -O[D] / 2 + ye + _ + be + C.mainAxis : ce + _ + be + C.mainAxis, Me = e.elements.arrow && ge(e.elements.arrow), qt = Me ? f === "y" ? Me.clientTop || 0 : Me.clientLeft || 0 : 0, Ge = (k = x == null ? void 0 : x[f]) != null ? k : 0, Yt = M + De - Ge - qt, Xt = M + Ut - Ge, Je = ve(p ? Se(ne, Yt) : ne, M, p ? re(Z, Xt) : Z);
      y[f] = Je, A[f] = Je - M;
    }
    if (a) {
      var Ke, zt = f === "x" ? j : B, Gt = f === "x" ? I : $, ee = y[w], Oe = w === "y" ? "height" : "width", Qe = ee + m[zt], Ze = ee - m[Gt], je = [j, B].indexOf(E) !== -1, _e = (Ke = x == null ? void 0 : x[w]) != null ? Ke : 0, et = je ? Qe : ee - O[Oe] - R[Oe] - _e + C.altAxis, tt = je ? ee + O[Oe] + R[Oe] - _e - C.altAxis : Ze, rt = p && je ? vr(et, ee, tt) : ve(p ? et : Qe, ee, p ? tt : Ze);
      y[w] = rt, A[w] = rt - ee;
    }
    e.modifiersData[r] = A;
  }
}
var Yr = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: qr,
  requiresIfExists: ["offset"]
};
function Xr(t) {
  return {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  };
}
function zr(t) {
  return t === F(t) || !L(t) ? Ye(t) : Xr(t);
}
function Gr(t) {
  var e = t.getBoundingClientRect(), n = ae(e.width) / t.offsetWidth || 1, r = ae(e.height) / t.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Jr(t, e, n) {
  n === void 0 && (n = !1);
  var r = L(e), o = L(e) && Gr(e), i = Q(e), s = se(t, o), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((q(e) !== "body" || ze(i)) && (a = zr(e)), L(e) ? (l = se(e, !0), l.x += e.clientLeft, l.y += e.clientTop) : i && (l.x = Xe(i))), {
    x: s.left + a.scrollLeft - l.x,
    y: s.top + a.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function Kr(t) {
  var e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  t.forEach(function(i) {
    e.set(i.name, i);
  });
  function o(i) {
    n.add(i.name);
    var s = [].concat(i.requires || [], i.requiresIfExists || []);
    s.forEach(function(a) {
      if (!n.has(a)) {
        var l = e.get(a);
        l && o(l);
      }
    }), r.push(i);
  }
  return t.forEach(function(i) {
    n.has(i.name) || o(i);
  }), r;
}
function Qr(t) {
  var e = Kr(t);
  return Le.reduce(function(n, r) {
    return n.concat(e.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function Zr(t) {
  var e;
  return function() {
    return e || (e = new Promise(function(n) {
      Promise.resolve().then(function() {
        e = void 0, n(t());
      });
    })), e;
  };
}
function J(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
    n[r - 1] = arguments[r];
  return [].concat(n).reduce(function(o, i) {
    return o.replace(/%s/, i);
  }, t);
}
var te = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', _r = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', vt = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function en(t) {
  t.forEach(function(e) {
    [].concat(Object.keys(e), vt).filter(function(n, r, o) {
      return o.indexOf(n) === r;
    }).forEach(function(n) {
      switch (n) {
        case "name":
          typeof e.name != "string" && console.error(J(te, String(e.name), '"name"', '"string"', '"' + String(e.name) + '"'));
          break;
        case "enabled":
          typeof e.enabled != "boolean" && console.error(J(te, e.name, '"enabled"', '"boolean"', '"' + String(e.enabled) + '"'));
          break;
        case "phase":
          Le.indexOf(e.phase) < 0 && console.error(J(te, e.name, '"phase"', "either " + Le.join(", "), '"' + String(e.phase) + '"'));
          break;
        case "fn":
          typeof e.fn != "function" && console.error(J(te, e.name, '"fn"', '"function"', '"' + String(e.fn) + '"'));
          break;
        case "effect":
          e.effect != null && typeof e.effect != "function" && console.error(J(te, e.name, '"effect"', '"function"', '"' + String(e.fn) + '"'));
          break;
        case "requires":
          e.requires != null && !Array.isArray(e.requires) && console.error(J(te, e.name, '"requires"', '"array"', '"' + String(e.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(e.requiresIfExists) || console.error(J(te, e.name, '"requiresIfExists"', '"array"', '"' + String(e.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + e.name + '" modifier, valid properties are ' + vt.map(function(r) {
            return '"' + r + '"';
          }).join(", ") + '; but "' + n + '" was provided.');
      }
      e.requires && e.requires.forEach(function(r) {
        t.find(function(o) {
          return o.name === r;
        }) == null && console.error(J(_r, String(e.name), r, r));
      });
    });
  });
}
function tn(t, e) {
  var n = /* @__PURE__ */ new Set();
  return t.filter(function(r) {
    var o = e(r);
    if (!n.has(o))
      return n.add(o), !0;
  });
}
function rn(t) {
  var e = t.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, {
      options: Object.assign({}, o.options, r.options),
      data: Object.assign({}, o.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(e).map(function(n) {
    return e[n];
  });
}
var ht = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", nn = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", mt = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function gt() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  return !e.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function on(t) {
  t === void 0 && (t = {});
  var e = t, n = e.defaultModifiers, r = n === void 0 ? [] : n, o = e.defaultOptions, i = o === void 0 ? mt : o;
  return function(a, l, u) {
    u === void 0 && (u = i);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, mt, i),
      modifiersData: {},
      elements: {
        reference: a,
        popper: l
      },
      attributes: {},
      styles: {}
    }, d = [], g = !1, p = {
      state: c,
      setOptions: function(E) {
        var T = typeof E == "function" ? E(c.options) : E;
        h(), c.options = Object.assign({}, i, c.options, T), c.scrollParents = {
          reference: ie(a) ? he(a) : a.contextElement ? he(a.contextElement) : [],
          popper: he(l)
        };
        var b = Qr(rn([].concat(r, c.options.modifiers)));
        if (c.orderedModifiers = b.filter(function(x) {
          return x.enabled;
        }), process.env.NODE_ENV !== "production") {
          var f = tn([].concat(b, c.options.modifiers), function(x) {
            var A = x.name;
            return A;
          });
          if (en(f), W(c.options.placement) === Ve) {
            var w = c.orderedModifiers.find(function(x) {
              var A = x.name;
              return A === "flip";
            });
            w || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var y = V(l), O = y.marginTop, R = y.marginRight, S = y.marginBottom, C = y.marginLeft;
          [O, R, S, C].some(function(x) {
            return parseFloat(x);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return v(), p.update();
      },
      forceUpdate: function() {
        if (!g) {
          var E = c.elements, T = E.reference, b = E.popper;
          if (!gt(T, b)) {
            process.env.NODE_ENV !== "production" && console.error(ht);
            return;
          }
          c.rects = {
            reference: Jr(T, ge(b), c.options.strategy === "fixed"),
            popper: Ue(b)
          }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(x) {
            return c.modifiersData[x.name] = Object.assign({}, x.data);
          });
          for (var f = 0, w = 0; w < c.orderedModifiers.length; w++) {
            if (process.env.NODE_ENV !== "production" && (f += 1, f > 100)) {
              console.error(nn);
              break;
            }
            if (c.reset === !0) {
              c.reset = !1, w = -1;
              continue;
            }
            var y = c.orderedModifiers[w], O = y.fn, R = y.options, S = R === void 0 ? {} : R, C = y.name;
            typeof O == "function" && (c = O({
              state: c,
              options: S,
              name: C,
              instance: p
            }) || c);
          }
        }
      },
      update: Zr(function() {
        return new Promise(function(m) {
          p.forceUpdate(), m(c);
        });
      }),
      destroy: function() {
        h(), g = !0;
      }
    };
    if (!gt(a, l))
      return process.env.NODE_ENV !== "production" && console.error(ht), p;
    p.setOptions(u).then(function(m) {
      !g && u.onFirstUpdate && u.onFirstUpdate(m);
    });
    function v() {
      c.orderedModifiers.forEach(function(m) {
        var E = m.name, T = m.options, b = T === void 0 ? {} : T, f = m.effect;
        if (typeof f == "function") {
          var w = f({
            state: c,
            name: E,
            instance: p,
            options: b
          }), y = function() {
          };
          d.push(w || y);
        }
      });
    }
    function h() {
      d.forEach(function(m) {
        return m();
      }), d = [];
    }
    return p;
  };
}
var an = [Tr, Fr, xr, pr, $r, Lr, Yr, yr, Nr], sn = /* @__PURE__ */ on({
  defaultModifiers: an
});
function We(t, e) {
  return We = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, We(t, e);
}
function Mt(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, We(t, e);
}
var jt = P.createContext(), Bt = P.createContext();
function ln(t) {
  var e = t.children, n = P.useState(null), r = n[0], o = n[1], i = P.useRef(!1);
  P.useEffect(function() {
    return function() {
      i.current = !0;
    };
  }, []);
  var s = P.useCallback(function(a) {
    i.current || o(a);
  }, []);
  return /* @__PURE__ */ ot(jt.Provider, {
    value: r,
    children: /* @__PURE__ */ ot(Bt.Provider, {
      value: s,
      children: e
    })
  });
}
var Lt = function(e) {
  return Array.isArray(e) ? e[0] : e;
}, Ht = function(e) {
  if (typeof e == "function") {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    return e.apply(void 0, r);
  }
}, Ie = function(e, n) {
  if (typeof e == "function")
    return Ht(e, n);
  e != null && (e.current = n);
}, yt = function(e) {
  return e.reduce(function(n, r) {
    var o = r[0], i = r[1];
    return n[o] = i, n;
  }, {});
}, wt = typeof window < "u" && window.document && window.document.createElement ? P.useLayoutEffect : P.useEffect, cn = typeof Element < "u", un = typeof Map == "function", pn = typeof Set == "function", fn = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Te(t, e) {
  if (t === e)
    return !0;
  if (t && e && Pe(t) == "object" && Pe(e) == "object") {
    if (t.constructor !== e.constructor)
      return !1;
    var n, r, o;
    if (Array.isArray(t)) {
      if (n = t.length, n != e.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (!Te(t[r], e[r]))
          return !1;
      return !0;
    }
    var i;
    if (un && t instanceof Map && e instanceof Map) {
      if (t.size !== e.size)
        return !1;
      for (i = t.entries(); !(r = i.next()).done; )
        if (!e.has(r.value[0]))
          return !1;
      for (i = t.entries(); !(r = i.next()).done; )
        if (!Te(r.value[1], e.get(r.value[0])))
          return !1;
      return !0;
    }
    if (pn && t instanceof Set && e instanceof Set) {
      if (t.size !== e.size)
        return !1;
      for (i = t.entries(); !(r = i.next()).done; )
        if (!e.has(r.value[0]))
          return !1;
      return !0;
    }
    if (fn && ArrayBuffer.isView(t) && ArrayBuffer.isView(e)) {
      if (n = t.length, n != e.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (t[r] !== e[r])
          return !1;
      return !0;
    }
    if (t.constructor === RegExp)
      return t.source === e.source && t.flags === e.flags;
    if (t.valueOf !== Object.prototype.valueOf)
      return t.valueOf() === e.valueOf();
    if (t.toString !== Object.prototype.toString)
      return t.toString() === e.toString();
    if (o = Object.keys(t), n = o.length, n !== Object.keys(e).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(e, o[r]))
        return !1;
    if (cn && t instanceof Element)
      return !1;
    for (r = n; r-- !== 0; )
      if (!((o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") && t.$$typeof) && !Te(t[o[r]], e[o[r]]))
        return !1;
    return !0;
  }
  return t !== t && e !== e;
}
var dn = function(e, n) {
  try {
    return Te(e, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
}, vn = [], hn = function(e, n, r) {
  r === void 0 && (r = {});
  var o = P.useRef(null), i = {
    onFirstUpdate: r.onFirstUpdate,
    placement: r.placement || "bottom",
    strategy: r.strategy || "absolute",
    modifiers: r.modifiers || vn
  }, s = P.useState({
    styles: {
      popper: {
        position: i.strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), a = s[0], l = s[1], u = P.useMemo(function() {
    return {
      name: "updateState",
      enabled: !0,
      phase: "write",
      fn: function(p) {
        var v = p.state, h = Object.keys(v.elements);
        l({
          styles: yt(h.map(function(m) {
            return [m, v.styles[m] || {}];
          })),
          attributes: yt(h.map(function(m) {
            return [m, v.attributes[m]];
          }))
        });
      },
      requires: ["computeStyles"]
    };
  }, []), c = P.useMemo(function() {
    var g = {
      onFirstUpdate: i.onFirstUpdate,
      placement: i.placement,
      strategy: i.strategy,
      modifiers: [].concat(i.modifiers, [u, {
        name: "applyStyles",
        enabled: !1
      }])
    };
    return dn(o.current, g) ? o.current || g : (o.current = g, g);
  }, [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, u]), d = P.useRef();
  return wt(function() {
    d.current && d.current.setOptions(c);
  }, [c]), wt(function() {
    if (!(e == null || n == null)) {
      var g = r.createPopper || sn, p = g(e, n, c);
      return d.current = p, function() {
        p.destroy(), d.current = null;
      };
    }
  }, [e, n, r.createPopper]), {
    state: d.current ? d.current.state : null,
    styles: a.styles,
    attributes: a.attributes,
    update: d.current ? d.current.update : null,
    forceUpdate: d.current ? d.current.forceUpdate : null
  };
}, mn = function() {
}, gn = function() {
  return Promise.resolve(null);
}, yn = [];
function wn(t) {
  var e = t.placement, n = e === void 0 ? "bottom" : e, r = t.strategy, o = r === void 0 ? "absolute" : r, i = t.modifiers, s = i === void 0 ? yn : i, a = t.referenceElement, l = t.onFirstUpdate, u = t.innerRef, c = t.children, d = P.useContext(jt), g = P.useState(null), p = g[0], v = g[1], h = P.useState(null), m = h[0], E = h[1];
  P.useEffect(function() {
    Ie(u, p);
  }, [u, p]);
  var T = P.useMemo(function() {
    return {
      placement: n,
      strategy: o,
      onFirstUpdate: l,
      modifiers: [].concat(s, [{
        name: "arrow",
        enabled: m != null,
        options: {
          element: m
        }
      }])
    };
  }, [n, o, l, s, m]), b = hn(a || d, p, T), f = b.state, w = b.styles, y = b.forceUpdate, O = b.update, R = P.useMemo(function() {
    return {
      ref: v,
      style: w.popper,
      placement: f ? f.placement : n,
      hasPopperEscaped: f && f.modifiersData.hide ? f.modifiersData.hide.hasPopperEscaped : null,
      isReferenceHidden: f && f.modifiersData.hide ? f.modifiersData.hide.isReferenceHidden : null,
      arrowProps: {
        style: w.arrow,
        ref: E
      },
      forceUpdate: y || mn,
      update: O || gn
    };
  }, [v, E, n, f, w, O, y]);
  return Lt(c)(R);
}
var bn = process.env.NODE_ENV !== "production", Nt = function() {
};
if (bn) {
  var On = function(e, n) {
    var r = arguments.length;
    n = new Array(r > 1 ? r - 1 : 0);
    for (var o = 1; o < r; o++)
      n[o - 1] = arguments[o];
    var i = 0, s = "Warning: " + e.replace(/%s/g, function() {
      return n[i++];
    });
    typeof console < "u" && console.error(s);
    try {
      throw new Error(s);
    } catch {
    }
  };
  Nt = function(e, n, r) {
    var o = arguments.length;
    r = new Array(o > 2 ? o - 2 : 0);
    for (var i = 2; i < o; i++)
      r[i - 2] = arguments[i];
    if (n === void 0)
      throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
    e || On.apply(null, [n].concat(r));
  };
}
var xn = Nt;
function En(t) {
  var e = t.children, n = t.innerRef, r = P.useContext(Bt), o = P.useCallback(function(i) {
    Ie(n, i), Ht(r, i);
  }, [n, r]);
  return P.useEffect(function() {
    return function() {
      return Ie(n, null);
    };
  }), P.useEffect(function() {
    xn(Boolean(r), "`Reference` should not be used outside of a `Manager` component.");
  }, [r]), Lt(e)({
    ref: o
  });
}
var Wt = /* @__PURE__ */ N.createContext({}), U = function() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return function() {
    for (var o = arguments.length, i = new Array(o), s = 0; s < o; s++)
      i[s] = arguments[s];
    return n.forEach(function(a) {
      return a && a.apply(void 0, i);
    });
  };
}, Tn = function() {
}, bt = function() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}, Rn = function(e, n) {
  if (typeof e == "function")
    return e(n);
  e != null && (e.current = n);
}, It = /* @__PURE__ */ function(t) {
  Mt(e, t);
  function e() {
    for (var r, o = arguments.length, i = new Array(o), s = 0; s < o; s++)
      i[s] = arguments[s];
    return r = t.call.apply(t, [this].concat(i)) || this, r.observer = void 0, r.tooltipRef = void 0, r.handleOutsideClick = function(a) {
      if (r.tooltipRef && !r.tooltipRef.contains(a.target)) {
        var l = r.context.parentOutsideClickHandler, u = r.props, c = u.hideTooltip, d = u.clearScheduled;
        d(), c(), l && l(a);
      }
    }, r.handleOutsideRightClick = function(a) {
      if (r.tooltipRef && !r.tooltipRef.contains(a.target)) {
        var l = r.context.parentOutsideRightClickHandler, u = r.props, c = u.hideTooltip, d = u.clearScheduled;
        d(), c(), l && l(a);
      }
    }, r.addOutsideClickHandler = function() {
      document.body.addEventListener("touchend", r.handleOutsideClick), document.body.addEventListener("click", r.handleOutsideClick);
    }, r.removeOutsideClickHandler = function() {
      document.body.removeEventListener("touchend", r.handleOutsideClick), document.body.removeEventListener("click", r.handleOutsideClick);
    }, r.addOutsideRightClickHandler = function() {
      return document.body.addEventListener("contextmenu", r.handleOutsideRightClick);
    }, r.removeOutsideRightClickHandler = function() {
      return document.body.removeEventListener("contextmenu", r.handleOutsideRightClick);
    }, r.getTooltipRef = function(a) {
      r.tooltipRef = a, Rn(r.props.innerRef, a);
    }, r.getArrowProps = function(a) {
      return a === void 0 && (a = {}), Y({}, a, {
        style: Y({}, a.style, r.props.arrowProps.style)
      });
    }, r.getTooltipProps = function(a) {
      return a === void 0 && (a = {}), Y({}, a, r.isTriggeredBy("hover") && {
        onMouseEnter: U(r.props.clearScheduled, a.onMouseEnter),
        onMouseLeave: U(r.props.hideTooltip, a.onMouseLeave)
      }, {
        style: Y({}, a.style, r.props.style)
      });
    }, r.contextValue = {
      isParentNoneTriggered: r.props.trigger === "none",
      addParentOutsideClickHandler: r.addOutsideClickHandler,
      addParentOutsideRightClickHandler: r.addOutsideRightClickHandler,
      parentOutsideClickHandler: r.handleOutsideClick,
      parentOutsideRightClickHandler: r.handleOutsideRightClick,
      removeParentOutsideClickHandler: r.removeOutsideClickHandler,
      removeParentOutsideRightClickHandler: r.removeOutsideRightClickHandler
    }, r;
  }
  var n = e.prototype;
  return n.componentDidMount = function() {
    var o = this, i = this.observer = new MutationObserver(function() {
      o.props.update();
    });
    if (i.observe(this.tooltipRef, this.props.mutationObserverOptions), this.isTriggeredBy("hover") || this.isTriggeredBy("click") || this.isTriggeredBy("right-click")) {
      var s = this.context, a = s.removeParentOutsideClickHandler, l = s.removeParentOutsideRightClickHandler;
      this.addOutsideClickHandler(), this.addOutsideRightClickHandler(), a && a(), l && l();
    }
  }, n.componentDidUpdate = function() {
    this.props.closeOnReferenceHidden && this.props.isReferenceHidden && this.props.hideTooltip();
  }, n.componentWillUnmount = function() {
    if (this.observer && this.observer.disconnect(), this.isTriggeredBy("hover") || this.isTriggeredBy("click") || this.isTriggeredBy("right-click")) {
      var o = this.context, i = o.isParentNoneTriggered, s = o.addParentOutsideClickHandler, a = o.addParentOutsideRightClickHandler;
      this.removeOutsideClickHandler(), this.removeOutsideRightClickHandler(), this.handleOutsideClick = void 0, this.handleOutsideRightClick = void 0, !i && s && s(), !i && a && a();
    }
  }, n.render = function() {
    var o = this.props, i = o.arrowProps, s = o.placement, a = o.tooltip;
    return /* @__PURE__ */ N.createElement(Wt.Provider, {
      value: this.contextValue
    }, a({
      arrowRef: i.ref,
      getArrowProps: this.getArrowProps,
      getTooltipProps: this.getTooltipProps,
      placement: s,
      tooltipRef: this.getTooltipRef
    }));
  }, n.isTriggeredBy = function(o) {
    var i = this.props.trigger;
    return i === o || Array.isArray(i) && i.includes(o);
  }, e;
}(Et);
It.contextType = Wt;
var Pn = {
  childList: !0,
  subtree: !0
}, $t = /* @__PURE__ */ function(t) {
  Mt(e, t);
  function e() {
    for (var r, o = arguments.length, i = new Array(o), s = 0; s < o; s++)
      i[s] = arguments[s];
    return r = t.call.apply(t, [this].concat(i)) || this, r.state = {
      tooltipShown: r.props.defaultTooltipShown
    }, r.hideTimeout = void 0, r.showTimeout = void 0, r.popperOffset = void 0, r.setTooltipState = function(a) {
      var l = function() {
        return r.props.onVisibilityChange(a.tooltipShown);
      };
      r.isControlled() ? l() : r.setState(a, l);
    }, r.clearScheduled = function() {
      clearTimeout(r.hideTimeout), clearTimeout(r.showTimeout);
    }, r.showTooltip = function(a) {
      var l = a.pageX, u = a.pageY;
      r.clearScheduled();
      var c = {
        tooltipShown: !0
      };
      r.props.followCursor && (c = Y({}, c, {
        pageX: l,
        pageY: u
      })), r.showTimeout = window.setTimeout(function() {
        return r.setTooltipState(c);
      }, r.props.delayShow);
    }, r.hideTooltip = function() {
      r.clearScheduled(), r.hideTimeout = window.setTimeout(function() {
        return r.setTooltipState({
          tooltipShown: !1
        });
      }, r.props.delayHide);
    }, r.toggleTooltip = function(a) {
      var l = a.pageX, u = a.pageY, c = r.getState() ? "hideTooltip" : "showTooltip";
      r[c]({
        pageX: l,
        pageY: u
      });
    }, r.clickToggle = function(a) {
      a.preventDefault();
      var l = a.pageX, u = a.pageY, c = r.props.followCursor ? "showTooltip" : "toggleTooltip";
      r[c]({
        pageX: l,
        pageY: u
      });
    }, r.contextMenuToggle = function(a) {
      a.preventDefault();
      var l = a.pageX, u = a.pageY, c = r.props.followCursor ? "showTooltip" : "toggleTooltip";
      r[c]({
        pageX: l,
        pageY: u
      });
    }, r.getTriggerProps = function(a) {
      return a === void 0 && (a = {}), Y({}, a, r.isTriggeredBy("click") && {
        onClick: U(r.clickToggle, a.onClick),
        onTouchEnd: U(r.clickToggle, a.onTouchEnd)
      }, r.isTriggeredBy("right-click") && {
        onContextMenu: U(r.contextMenuToggle, a.onContextMenu)
      }, r.isTriggeredBy("hover") && Y({
        onMouseEnter: U(r.showTooltip, a.onMouseEnter),
        onMouseLeave: U(r.hideTooltip, a.onMouseLeave)
      }, r.props.followCursor && {
        onMouseMove: U(r.showTooltip, a.onMouseMove)
      }), r.isTriggeredBy("focus") && {
        onFocus: U(r.showTooltip, a.onFocus),
        onBlur: U(r.hideTooltip, a.onBlur)
      });
    }, r;
  }
  var n = e.prototype;
  return n.componentWillUnmount = function() {
    this.clearScheduled();
  }, n.render = function() {
    var o = this, i = this.props, s = i.children, a = i.tooltip, l = i.placement, u = i.trigger, c = i.getTriggerRef, d = i.modifiers, g = i.closeOnReferenceHidden, p = i.usePortal, v = i.portalContainer, h = i.followCursor, m = i.getTooltipRef, E = i.mutationObserverOptions, T = Qt(i, ["children", "tooltip", "placement", "trigger", "getTriggerRef", "modifiers", "closeOnReferenceHidden", "usePortal", "portalContainer", "followCursor", "getTooltipRef", "mutationObserverOptions"]), b = /* @__PURE__ */ N.createElement(wn, Y({
      innerRef: m,
      placement: l,
      modifiers: [{
        name: "followCursor",
        enabled: h,
        phase: "main",
        fn: function(w) {
          o.popperOffset = w.state.rects.popper;
        }
      }].concat(d)
    }, T), function(f) {
      var w = f.ref, y = f.style, O = f.placement, R = f.arrowProps, S = f.isReferenceHidden, C = f.update;
      if (h && o.popperOffset) {
        var x = o.state, A = x.pageX, k = x.pageY, X = o.popperOffset, z = X.width, D = X.height, M = A + z > window.pageXOffset + document.body.offsetWidth ? A - z : A, ne = k + D > window.pageYOffset + document.body.offsetHeight ? k - D : k;
        y.transform = "translate3d(" + M + "px, " + ne + "px, 0";
      }
      return /* @__PURE__ */ N.createElement(It, Y({
        arrowProps: R,
        closeOnReferenceHidden: g,
        isReferenceHidden: S,
        placement: O,
        update: C,
        style: y,
        tooltip: a,
        trigger: u,
        mutationObserverOptions: E
      }, {
        clearScheduled: o.clearScheduled,
        hideTooltip: o.hideTooltip,
        innerRef: w
      }));
    });
    return /* @__PURE__ */ N.createElement(ln, null, /* @__PURE__ */ N.createElement(En, {
      innerRef: c
    }, function(f) {
      var w = f.ref;
      return s({
        getTriggerProps: o.getTriggerProps,
        triggerRef: w
      });
    }), this.getState() && (p ? /* @__PURE__ */ nr(b, v) : b));
  }, n.isControlled = function() {
    return this.props.tooltipShown !== void 0;
  }, n.getState = function() {
    return this.isControlled() ? this.props.tooltipShown : this.state.tooltipShown;
  }, n.isTriggeredBy = function(o) {
    var i = this.props.trigger;
    return i === o || Array.isArray(i) && i.includes(o);
  }, e;
}(Et);
$t.defaultProps = {
  closeOnReferenceHidden: !0,
  defaultTooltipShown: !1,
  delayHide: 0,
  delayShow: 0,
  followCursor: !1,
  onVisibilityChange: Tn,
  placement: "right",
  portalContainer: bt() ? document.body : null,
  trigger: "hover",
  usePortal: bt(),
  mutationObserverOptions: Pn,
  modifiers: []
};
var Sn = $t, H = Jt(1e3)(function(t, e, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
  return e.split("-")[0] === t ? n : r;
}), K = 8, Cn = Ce.div({
  position: "absolute",
  borderStyle: "solid"
}, function(t) {
  var e = t.placement, n = 0, r = 0;
  switch (!0) {
    case (e.startsWith("left") || e.startsWith("right")): {
      r = 8;
      break;
    }
    case (e.startsWith("top") || e.startsWith("bottom")): {
      n = 8;
      break;
    }
  }
  var o = "translate3d(".concat(n, "px, ").concat(r, "px, 0px)");
  return {
    transform: o
  };
}, function(t) {
  var e = t.theme, n = t.color, r = t.placement;
  return {
    bottom: "".concat(H("top", r, K * -1, "auto"), "px"),
    top: "".concat(H("bottom", r, K * -1, "auto"), "px"),
    right: "".concat(H("left", r, K * -1, "auto"), "px"),
    left: "".concat(H("right", r, K * -1, "auto"), "px"),
    borderBottomWidth: "".concat(H("top", r, "0", K), "px"),
    borderTopWidth: "".concat(H("bottom", r, "0", K), "px"),
    borderRightWidth: "".concat(H("left", r, "0", K), "px"),
    borderLeftWidth: "".concat(H("right", r, "0", K), "px"),
    borderTopColor: H("top", r, e.color[n] || n || e.base === "light" ? fe(e.background.app) : de(e.background.app), "transparent"),
    borderBottomColor: H("bottom", r, e.color[n] || n || e.base === "light" ? fe(e.background.app) : de(e.background.app), "transparent"),
    borderLeftColor: H("left", r, e.color[n] || n || e.base === "light" ? fe(e.background.app) : de(e.background.app), "transparent"),
    borderRightColor: H("right", r, e.color[n] || n || e.base === "light" ? fe(e.background.app) : de(e.background.app), "transparent")
  };
}), An = Ce.div(function(t) {
  var e = t.hidden;
  return {
    display: e ? "none" : "inline-block",
    zIndex: 2147483647
  };
}, function(t) {
  var e = t.theme, n = t.color, r = t.hasChrome;
  return r ? {
    background: e.color[n] || n || e.base === "light" ? fe(e.background.app) : de(e.background.app),
    filter: `
            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))
            drop-shadow(0 1px 3px rgba(0,0,0,0.1))
          `,
    borderRadius: e.appBorderRadius * 2,
    fontSize: e.typography.size.s1
  } : {};
}), Vt = function(e) {
  var n = e.placement, r = e.hasChrome, o = e.children, i = e.arrowProps, s = e.tooltipRef, a = e.arrowRef, l = e.color, u = $e(e, ["placement", "hasChrome", "children", "arrowProps", "tooltipRef", "arrowRef", "color"]);
  return N.createElement(An, Object.assign({
    hasChrome: r,
    placement: n,
    ref: s
  }, u, {
    color: l
  }), r && N.createElement(Cn, Object.assign({
    placement: n,
    ref: a
  }, i, {
    color: l
  })), o);
};
Vt.defaultProps = {
  color: void 0,
  arrowRef: void 0,
  tooltipRef: void 0,
  hasChrome: !0,
  placement: "top",
  arrowProps: {}
};
var Be = Kt.document, kn = Ce.div(it || (it = Tt([`
  display: inline-block;
  cursor: `, `;
`])), function(t) {
  return t.mode === "hover" ? "default" : "pointer";
}), Dn = Ce.g(at || (at = Tt([`
  cursor: `, `;
`])), function(t) {
  return t.mode === "hover" ? "default" : "pointer";
}), Ft = function(e) {
  var n = e.svg, r = e.trigger;
  e.closeOnClick;
  var o = e.placement, i = e.modifiers, s = e.hasChrome, a = e.tooltip, l = e.children, u = e.tooltipShown, c = e.onVisibilityChange, d = $e(e, ["svg", "trigger", "closeOnClick", "placement", "modifiers", "hasChrome", "tooltip", "children", "tooltipShown", "onVisibilityChange"]), g = n ? Dn : kn;
  return N.createElement(Sn, {
    placement: o,
    trigger: r,
    modifiers: i,
    tooltipShown: u,
    onVisibilityChange: c,
    tooltip: function(v) {
      var h = v.getTooltipProps, m = v.getArrowProps, E = v.tooltipRef, T = v.arrowRef, b = v.placement;
      return N.createElement(Vt, Object.assign({
        hasChrome: s,
        placement: b,
        tooltipRef: E,
        arrowRef: T,
        arrowProps: m()
      }, h()), typeof a == "function" ? a({
        onHide: function() {
          return c(!1);
        }
      }) : a);
    }
  }, function(p) {
    var v = p.getTriggerProps, h = p.triggerRef;
    return N.createElement(g, Object.assign({
      ref: h
    }, v(), d), l);
  });
};
Ft.defaultProps = {
  svg: !1,
  trigger: "hover",
  closeOnClick: !1,
  placement: "top",
  modifiers: [{
    name: "preventOverflow",
    options: {
      padding: 8
    }
  }, {
    name: "offset",
    options: {
      offset: [8, 8]
    }
  }, {
    name: "arrow",
    options: {
      padding: 8
    }
  }],
  hasChrome: !0,
  tooltipShown: !1
};
var Vn = function(e) {
  var n = e.startOpen, r = e.onVisibilityChange, o = $e(e, ["startOpen", "onVisibilityChange"]), i = er(n || !1), s = or(i, 2), a = s[0], l = s[1], u = tr(function(c) {
    r && r(c) === !1 || l(c);
  }, [r]);
  return rr(function() {
    var c = function() {
      return u(!1);
    };
    Be.addEventListener("keydown", c, !1);
    var d = Array.from(Be.getElementsByTagName("iframe")), g = [];
    return d.forEach(function(p) {
      var v = function() {
        try {
          p.contentWindow.document && (p.contentWindow.document.addEventListener("click", c), g.push(function() {
            try {
              p.contentWindow.document.removeEventListener("click", c);
            } catch {
            }
          }));
        } catch {
        }
      };
      v(), p.addEventListener("load", v), g.push(function() {
        p.removeEventListener("load", v);
      });
    }), function() {
      Be.removeEventListener("keydown", c), g.forEach(function(p) {
        p();
      });
    };
  }), N.createElement(Ft, Object.assign({}, o, {
    tooltipShown: a,
    onVisibilityChange: u
  }));
};
export {
  Vn as WithToolTipState,
  Vn as WithTooltip,
  Ft as WithTooltipPure
};
//# sourceMappingURL=WithTooltip-167e9982.e109a6cc.js.map
