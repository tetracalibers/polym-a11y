import { p as e } from "./iframe.6f0d8ddb.js";
var i = e;
i({ target: "Number", stat: !0 }, {
  isNaN: function(r) {
    return r != r;
  }
});
var s = function(r) {
  if (!r)
    return "";
  if (typeof r == "string")
    return r;
  throw new Error("Description: expected string, got: ".concat(JSON.stringify(r)));
};
export {
  s
};
//# sourceMappingURL=string.15091591.js.map
