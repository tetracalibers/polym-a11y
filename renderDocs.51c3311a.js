import "./iframe.6f0d8ddb.js";
import "react";
import g from "react-dom";
import { j as a, a as p, F as b } from "./jsx-runtime.1e0c78f5.js";
var k = {
  fontSize: "14px",
  letterSpacing: "0.2px",
  margin: "10px 0"
}, w = {
  margin: "auto",
  padding: 30,
  borderRadius: 10,
  background: "rgba(0,0,0,0.03)"
}, D = {
  textAlign: "center"
}, v = function() {
  return /* @__PURE__ */ a("div", {
    style: k,
    className: "sb-nodocs sb-wrapper",
    children: /* @__PURE__ */ p("div", {
      style: w,
      children: [/* @__PURE__ */ a("h1", {
        style: D,
        children: "No Docs"
      }), /* @__PURE__ */ p("p", {
        children: ["Sorry, but there are no docs for the selected story. To add them, set the story's\xA0", /* @__PURE__ */ a("code", {
          children: "docs"
        }), " parameter. If you think this is an error:"]
      }), /* @__PURE__ */ p("ul", {
        children: [/* @__PURE__ */ a("li", {
          children: "Please check the story definition."
        }), /* @__PURE__ */ a("li", {
          children: "Please check the Storybook config."
        }), /* @__PURE__ */ a("li", {
          children: "Try reloading the page."
        })]
      }), /* @__PURE__ */ a("p", {
        children: "If the problem persists, check the browser console, or the terminal you've run Storybook from."
      })]
    })
  });
};
v.displayName = "NoDocs";
function f(n, i, t, s, d, c, r) {
  try {
    var l = n[c](r), o = l.value;
  } catch (u) {
    t(u);
    return;
  }
  l.done ? i(o) : Promise.resolve(o).then(s, d);
}
function P(n) {
  return function() {
    var i = this, t = arguments;
    return new Promise(function(s, d) {
      var c = n.apply(i, t);
      function r(o) {
        f(c, s, d, r, l, "next", o);
      }
      function l(o) {
        f(c, s, d, r, l, "throw", o);
      }
      r(void 0);
    });
  };
}
function T(n, i, t, s) {
  return N(n, i, t).then(s);
}
function N(n, i, t) {
  return m.apply(this, arguments);
}
function m() {
  return m = P(/* @__PURE__ */ regeneratorRuntime.mark(function n(i, t, s) {
    var d, c, r, l, o, u;
    return regeneratorRuntime.wrap(function(e) {
      for (; ; )
        switch (e.prev = e.next) {
          case 0:
            if (r = i.parameters.docs, !((r != null && r.getPage || r != null && r.page) && !(r != null && r.getContainer || r != null && r.container))) {
              e.next = 3;
              break;
            }
            throw new Error("No `docs.container` set, did you run `addon-docs/preset`?");
          case 3:
            if (e.t1 = r.container, e.t1) {
              e.next = 8;
              break;
            }
            return e.next = 7, (d = r.getContainer) === null || d === void 0 ? void 0 : d.call(r);
          case 7:
            e.t1 = e.sent;
          case 8:
            if (e.t0 = e.t1, e.t0) {
              e.next = 11;
              break;
            }
            e.t0 = function(h) {
              var y = h.children;
              return /* @__PURE__ */ a(b, {
                children: y
              });
            };
          case 11:
            if (l = e.t0, e.t3 = r.page, e.t3) {
              e.next = 17;
              break;
            }
            return e.next = 16, (c = r.getPage) === null || c === void 0 ? void 0 : c.call(r);
          case 16:
            e.t3 = e.sent;
          case 17:
            if (e.t2 = e.t3, e.t2) {
              e.next = 20;
              break;
            }
            e.t2 = v;
          case 20:
            return o = e.t2, u = /* @__PURE__ */ a(l, {
              context: t,
              children: /* @__PURE__ */ a(o, {})
            }, i.componentId), e.next = 24, new Promise(function(h) {
              g.render(u, s, h);
            });
          case 24:
          case "end":
            return e.stop();
        }
    }, n);
  })), m.apply(this, arguments);
}
function $(n) {
  g.unmountComponentAtNode(n);
}
export {
  T as renderDocs,
  $ as unmountDocs
};
//# sourceMappingURL=renderDocs.51c3311a.js.map
