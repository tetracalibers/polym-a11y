import { z as v, C as p, a9 as u, aa as d, x as y } from "./iframe.6f0d8ddb.js";
var x = v, E = p, O = u, R = d, b = y, o = x.RegExp, g = o.prototype, m = E && b(function() {
  var r = !0;
  try {
    o(".", "d");
  } catch {
    r = !1;
  }
  var a = {}, t = "", s = r ? "dgimsy" : "gimsy", c = function(l, f) {
    Object.defineProperty(a, l, { get: function() {
      return t += f, !0;
    } });
  }, e = {
    dotAll: "s",
    global: "g",
    ignoreCase: "i",
    multiline: "m",
    sticky: "y"
  };
  r && (e.hasIndices = "d");
  for (var i in e)
    c(i, e[i]);
  var n = Object.getOwnPropertyDescriptor(g, "flags").get.call(a);
  return n !== s || t !== s;
});
m && O(g, "flags", {
  configurable: !0,
  get: R
});
//# sourceMappingURL=es.regexp.flags.b11df199.js.map
