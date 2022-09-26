import "./iframe.6f0d8ddb.js";
import { useContext as o } from "react";
import { b as n, T as v, d as m } from "./Props.e30088b6.js";
import { j as c } from "./jsx-runtime.1e0c78f5.js";
var p = /\s*\/\s*/, x = function(i) {
  var r = i.title, t = r.trim().split(p);
  return t && t[t.length - 1] || r;
}, S = function(i) {
  var r = i.children, t = o(n), e = r;
  return e || (e = x(t)), e ? /* @__PURE__ */ c(v, {
    className: "sbdocs-title",
    children: e
  }) : null;
}, y = function(i) {
  var r = i.children, t = o(n), e = t.id, u = t.storyById, d = u(e), l = d.parameters, a = r;
  return a || (a = l == null ? void 0 : l.componentSubtitle), a ? /* @__PURE__ */ c(m, {
    className: "sbdocs-subtitle",
    children: a
  }) : null;
};
export {
  y as S,
  S as T,
  x as e
};
//# sourceMappingURL=Subtitle.a22b4ba1.js.map
