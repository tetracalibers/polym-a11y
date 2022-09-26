import "./iframe.6f0d8ddb.js";
function c(r, n, t, a, e, o, i) {
  try {
    var s = r[o](i), u = s.value;
  } catch (g) {
    t(g);
    return;
  }
  s.done ? n(u) : Promise.resolve(u).then(a, e);
}
function p(r) {
  return function() {
    var n = this, t = arguments;
    return new Promise(function(a, e) {
      var o = r.apply(n, t);
      function i(u) {
        c(o, a, e, i, s, "next", u);
      }
      function s(u) {
        c(o, a, e, i, s, "throw", u);
      }
      i(void 0);
    });
  };
}
var l = {
  docs: {
    getContainer: function() {
      var r = p(/* @__PURE__ */ regeneratorRuntime.mark(function t() {
        return regeneratorRuntime.wrap(function(e) {
          for (; ; )
            switch (e.prev = e.next) {
              case 0:
                return e.next = 2, import("./index.e30d2282.js");
              case 2:
                return e.abrupt("return", e.sent.DocsContainer);
              case 3:
              case "end":
                return e.stop();
            }
        }, t);
      }));
      function n() {
        return r.apply(this, arguments);
      }
      return n;
    }(),
    getPage: function() {
      var r = p(/* @__PURE__ */ regeneratorRuntime.mark(function t() {
        return regeneratorRuntime.wrap(function(e) {
          for (; ; )
            switch (e.prev = e.next) {
              case 0:
                return e.next = 2, import("./index.e30d2282.js");
              case 2:
                return e.abrupt("return", e.sent.DocsPage);
              case 3:
              case "end":
                return e.stop();
            }
        }, t);
      }));
      function n() {
        return r.apply(this, arguments);
      }
      return n;
    }()
  }
};
export {
  l as parameters
};
//# sourceMappingURL=preview.4caee3d8.js.map
