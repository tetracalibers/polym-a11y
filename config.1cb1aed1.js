import { m as xu, c as Je, a as Fu, g as bu, d as Un, b as Su, _ as _u, i as Bu, e as wu, f as Tu, h as Zr, j as ku, u as Nu, l as Rt, k as Ou } from "./iframe.6f0d8ddb.js";
import "./es.map.constructor.be929aeb.js";
import { r as Pu, p as en } from "./index.21d6a9d3.js";
import * as Iu from "react";
import Vt, { Fragment as Wn, isValidElement as zn, createElement as Ru } from "react";
import { s as Lu } from "./string.15091591.js";
import { j as Mu } from "./jsx-runtime.1e0c78f5.js";
var ju = function(t) {
  switch (t.type) {
    case "function":
      return {
        name: "function"
      };
    case "object":
      var r = {};
      return t.signature.properties.forEach(function(n) {
        r[n.key] = Gn(n.value);
      }), {
        name: "object",
        value: r
      };
    default:
      throw new Error("Unknown: ".concat(t));
  }
}, Gn = function e(t) {
  var r = t.name, n = t.raw, i = {};
  switch (typeof n < "u" && (i.raw = n), t.name) {
    case "string":
    case "number":
    case "symbol":
    case "boolean":
      return Object.assign({}, i, {
        name: r
      });
    case "Array":
      return Object.assign({}, i, {
        name: "array",
        value: t.elements.map(e)
      });
    case "signature":
      return Object.assign({}, i, ju(t));
    case "union":
    case "intersection":
      return Object.assign({}, i, {
        name: r,
        value: t.elements.map(e)
      });
    default:
      return Object.assign({}, i, {
        name: "other",
        value: r
      });
  }
}, Vu = function(t) {
  return t.name === "literal";
}, qu = function(t) {
  return t.value.replace(/['|"]/g, "");
}, Uu = function(t) {
  switch (t.type) {
    case "function":
      return {
        name: "function"
      };
    case "object":
      var r = {};
      return t.signature.properties.forEach(function(n) {
        r[n.key] = $n(n.value);
      }), {
        name: "object",
        value: r
      };
    default:
      throw new Error("Unknown: ".concat(t));
  }
}, $n = function e(t) {
  var r = t.name, n = t.raw, i = {};
  switch (typeof n < "u" && (i.raw = n), t.name) {
    case "literal":
      return Object.assign({}, i, {
        name: "other",
        value: t.value
      });
    case "string":
    case "number":
    case "symbol":
    case "boolean":
      return Object.assign({}, i, {
        name: r
      });
    case "Array":
      return Object.assign({}, i, {
        name: "array",
        value: t.elements.map(e)
      });
    case "signature":
      return Object.assign({}, i, Uu(t));
    case "union":
      return t.elements.every(Vu) ? Object.assign({}, i, {
        name: "enum",
        value: t.elements.map(qu)
      }) : Object.assign({}, i, {
        name: r,
        value: t.elements.map(e)
      });
    case "intersection":
      return Object.assign({}, i, {
        name: r,
        value: t.elements.map(e)
      });
    default:
      return Object.assign({}, i, {
        name: "other",
        value: r
      });
  }
}, Jn = /^['"]|['"]$/g, Wu = function(t) {
  return t.replace(Jn, "");
}, zu = function(t) {
  return Jn.test(t);
}, Gu = /^\(.*\) => /, $u = function e(t) {
  var r = t.name, n = t.raw, i = t.computed, a = t.value, s = {};
  switch (typeof n < "u" && (s.raw = n), r) {
    case "enum": {
      var l = i ? a : a.map(function(A) {
        var v = Wu(A.value);
        return zu(A.value) || Number.isNaN(Number(v)) ? v : Number(v);
      });
      return Object.assign({}, s, {
        name: r,
        value: l
      });
    }
    case "string":
    case "number":
    case "symbol":
      return Object.assign({}, s, {
        name: r
      });
    case "func":
      return Object.assign({}, s, {
        name: "function"
      });
    case "bool":
    case "boolean":
      return Object.assign({}, s, {
        name: "boolean"
      });
    case "arrayOf":
    case "array":
      return Object.assign({}, s, {
        name: "array",
        value: a && e(a)
      });
    case "object":
      return Object.assign({}, s, {
        name: r
      });
    case "objectOf":
      return Object.assign({}, s, {
        name: r,
        value: e(a)
      });
    case "shape":
    case "exact":
      var p = xu(a, function(A) {
        return e(A);
      });
      return Object.assign({}, s, {
        name: "object",
        value: p
      });
    case "union":
      return Object.assign({}, s, {
        name: "union",
        value: a.map(function(A) {
          return e(A);
        })
      });
    case "instanceOf":
    case "element":
    case "elementType":
    default: {
      if ((r == null ? void 0 : r.indexOf("|")) > 0)
        try {
          var m = r.split("|").map(function(A) {
            return JSON.parse(A);
          });
          return Object.assign({}, s, {
            name: "enum",
            value: m
          });
        } catch {
        }
      var g = a ? "".concat(r, "(").concat(a, ")") : r, y = Gu.test(r) ? "function" : "other";
      return Object.assign({}, s, {
        name: y,
        value: g
      });
    }
  }
}, Sr = function(t) {
  var r = t.type, n = t.tsType, i = t.flowType;
  return r != null ? $u(r) : n != null ? Gn(n) : i != null ? $n(i) : null;
}, We;
(function(e) {
  e.JAVASCRIPT = "JavaScript", e.FLOW = "Flow", e.TYPESCRIPT = "TypeScript", e.UNKNOWN = "Unknown";
})(We || (We = {}));
var Ju = ["null", "undefined"];
function _r(e) {
  return Ju.some(function(t) {
    return t === e;
  });
}
function Br(e) {
  return !!e.__docgenInfo;
}
function Yu(e) {
  return e != null && Object.keys(e).length > 0;
}
function Yn(e, t) {
  return Br(e) ? e.__docgenInfo[t] : null;
}
function Hu(e) {
  return Br(e) && Lu(e.__docgenInfo.description);
}
var Hn = {}, pt = {}, Kn = { exports: {} };
(function() {
  function e(s) {
    if (s == null)
      return !1;
    switch (s.type) {
      case "ArrayExpression":
      case "AssignmentExpression":
      case "BinaryExpression":
      case "CallExpression":
      case "ConditionalExpression":
      case "FunctionExpression":
      case "Identifier":
      case "Literal":
      case "LogicalExpression":
      case "MemberExpression":
      case "NewExpression":
      case "ObjectExpression":
      case "SequenceExpression":
      case "ThisExpression":
      case "UnaryExpression":
      case "UpdateExpression":
        return !0;
    }
    return !1;
  }
  function t(s) {
    if (s == null)
      return !1;
    switch (s.type) {
      case "DoWhileStatement":
      case "ForInStatement":
      case "ForStatement":
      case "WhileStatement":
        return !0;
    }
    return !1;
  }
  function r(s) {
    if (s == null)
      return !1;
    switch (s.type) {
      case "BlockStatement":
      case "BreakStatement":
      case "ContinueStatement":
      case "DebuggerStatement":
      case "DoWhileStatement":
      case "EmptyStatement":
      case "ExpressionStatement":
      case "ForInStatement":
      case "ForStatement":
      case "IfStatement":
      case "LabeledStatement":
      case "ReturnStatement":
      case "SwitchStatement":
      case "ThrowStatement":
      case "TryStatement":
      case "VariableDeclaration":
      case "WhileStatement":
      case "WithStatement":
        return !0;
    }
    return !1;
  }
  function n(s) {
    return r(s) || s != null && s.type === "FunctionDeclaration";
  }
  function i(s) {
    switch (s.type) {
      case "IfStatement":
        return s.alternate != null ? s.alternate : s.consequent;
      case "LabeledStatement":
      case "ForStatement":
      case "ForInStatement":
      case "WhileStatement":
      case "WithStatement":
        return s.body;
    }
    return null;
  }
  function a(s) {
    var l;
    if (s.type !== "IfStatement" || s.alternate == null)
      return !1;
    l = s.consequent;
    do {
      if (l.type === "IfStatement" && l.alternate == null)
        return !0;
      l = i(l);
    } while (l);
    return !1;
  }
  Kn.exports = {
    isExpression: e,
    isStatement: r,
    isIterationStatement: t,
    isSourceElement: n,
    isProblematicIfStatement: a,
    trailingStatement: i
  };
})();
var wr = { exports: {} };
(function() {
  var e, t, r, n, i, a;
  t = {
    NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
    NonAsciiIdentifierPart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/
  }, e = {
    NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
    NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
  };
  function s(_) {
    return 48 <= _ && _ <= 57;
  }
  function l(_) {
    return 48 <= _ && _ <= 57 || 97 <= _ && _ <= 102 || 65 <= _ && _ <= 70;
  }
  function p(_) {
    return _ >= 48 && _ <= 55;
  }
  r = [
    5760,
    8192,
    8193,
    8194,
    8195,
    8196,
    8197,
    8198,
    8199,
    8200,
    8201,
    8202,
    8239,
    8287,
    12288,
    65279
  ];
  function m(_) {
    return _ === 32 || _ === 9 || _ === 11 || _ === 12 || _ === 160 || _ >= 5760 && r.indexOf(_) >= 0;
  }
  function g(_) {
    return _ === 10 || _ === 13 || _ === 8232 || _ === 8233;
  }
  function y(_) {
    if (_ <= 65535)
      return String.fromCharCode(_);
    var R = String.fromCharCode(Math.floor((_ - 65536) / 1024) + 55296), j = String.fromCharCode((_ - 65536) % 1024 + 56320);
    return R + j;
  }
  for (n = new Array(128), a = 0; a < 128; ++a)
    n[a] = a >= 97 && a <= 122 || a >= 65 && a <= 90 || a === 36 || a === 95;
  for (i = new Array(128), a = 0; a < 128; ++a)
    i[a] = a >= 97 && a <= 122 || a >= 65 && a <= 90 || a >= 48 && a <= 57 || a === 36 || a === 95;
  function A(_) {
    return _ < 128 ? n[_] : t.NonAsciiIdentifierStart.test(y(_));
  }
  function v(_) {
    return _ < 128 ? i[_] : t.NonAsciiIdentifierPart.test(y(_));
  }
  function F(_) {
    return _ < 128 ? n[_] : e.NonAsciiIdentifierStart.test(y(_));
  }
  function C(_) {
    return _ < 128 ? i[_] : e.NonAsciiIdentifierPart.test(y(_));
  }
  wr.exports = {
    isDecimalDigit: s,
    isHexDigit: l,
    isOctalDigit: p,
    isWhiteSpace: m,
    isLineTerminator: g,
    isIdentifierStartES5: A,
    isIdentifierPartES5: v,
    isIdentifierStartES6: F,
    isIdentifierPartES6: C
  };
})();
var Qn = { exports: {} };
(function() {
  var e = wr.exports;
  function t(A) {
    switch (A) {
      case "implements":
      case "interface":
      case "package":
      case "private":
      case "protected":
      case "public":
      case "static":
      case "let":
        return !0;
      default:
        return !1;
    }
  }
  function r(A, v) {
    return !v && A === "yield" ? !1 : n(A, v);
  }
  function n(A, v) {
    if (v && t(A))
      return !0;
    switch (A.length) {
      case 2:
        return A === "if" || A === "in" || A === "do";
      case 3:
        return A === "var" || A === "for" || A === "new" || A === "try";
      case 4:
        return A === "this" || A === "else" || A === "case" || A === "void" || A === "with" || A === "enum";
      case 5:
        return A === "while" || A === "break" || A === "catch" || A === "throw" || A === "const" || A === "yield" || A === "class" || A === "super";
      case 6:
        return A === "return" || A === "typeof" || A === "delete" || A === "switch" || A === "export" || A === "import";
      case 7:
        return A === "default" || A === "finally" || A === "extends";
      case 8:
        return A === "function" || A === "continue" || A === "debugger";
      case 10:
        return A === "instanceof";
      default:
        return !1;
    }
  }
  function i(A, v) {
    return A === "null" || A === "true" || A === "false" || r(A, v);
  }
  function a(A, v) {
    return A === "null" || A === "true" || A === "false" || n(A, v);
  }
  function s(A) {
    return A === "eval" || A === "arguments";
  }
  function l(A) {
    var v, F, C;
    if (A.length === 0 || (C = A.charCodeAt(0), !e.isIdentifierStartES5(C)))
      return !1;
    for (v = 1, F = A.length; v < F; ++v)
      if (C = A.charCodeAt(v), !e.isIdentifierPartES5(C))
        return !1;
    return !0;
  }
  function p(A, v) {
    return (A - 55296) * 1024 + (v - 56320) + 65536;
  }
  function m(A) {
    var v, F, C, _, R;
    if (A.length === 0)
      return !1;
    for (R = e.isIdentifierStartES6, v = 0, F = A.length; v < F; ++v) {
      if (C = A.charCodeAt(v), 55296 <= C && C <= 56319) {
        if (++v, v >= F || (_ = A.charCodeAt(v), !(56320 <= _ && _ <= 57343)))
          return !1;
        C = p(C, _);
      }
      if (!R(C))
        return !1;
      R = e.isIdentifierPartES6;
    }
    return !0;
  }
  function g(A, v) {
    return l(A) && !i(A, v);
  }
  function y(A, v) {
    return m(A) && !a(A, v);
  }
  Qn.exports = {
    isKeywordES5: r,
    isKeywordES6: n,
    isReservedWordES5: i,
    isReservedWordES6: a,
    isRestrictedWord: s,
    isIdentifierNameES5: l,
    isIdentifierNameES6: m,
    isIdentifierES5: g,
    isIdentifierES6: y
  };
})();
(function() {
  pt.ast = Kn.exports, pt.code = wr.exports, pt.keyword = Qn.exports;
})();
var St = {}, ct = {};
const Ku = "doctrine", Qu = "JSDoc parser", Xu = "https://github.com/eslint/doctrine", Zu = "lib/doctrine.js", ea = "3.0.0", ta = {
  node: ">=6.0.0"
}, ra = {
  lib: "./lib"
}, na = [
  "lib"
], ia = [
  {
    name: "Nicholas C. Zakas",
    email: "nicholas+npm@nczconsulting.com",
    web: "https://www.nczonline.net"
  },
  {
    name: "Yusuke Suzuki",
    email: "utatane.tea@gmail.com",
    web: "https://github.com/Constellation"
  }
], ua = "eslint/doctrine", aa = {
  coveralls: "^3.0.1",
  dateformat: "^1.0.11",
  eslint: "^1.10.3",
  "eslint-release": "^1.0.0",
  linefix: "^0.1.1",
  mocha: "^3.4.2",
  "npm-license": "^0.3.1",
  nyc: "^10.3.2",
  semver: "^5.0.3",
  shelljs: "^0.5.3",
  "shelljs-nodecli": "^0.1.1",
  should: "^5.0.1"
}, sa = "Apache-2.0", oa = {
  pretest: "npm run lint",
  test: "nyc mocha",
  coveralls: "nyc report --reporter=text-lcov | coveralls",
  lint: "eslint lib/",
  "generate-release": "eslint-generate-release",
  "generate-alpharelease": "eslint-generate-prerelease alpha",
  "generate-betarelease": "eslint-generate-prerelease beta",
  "generate-rcrelease": "eslint-generate-prerelease rc",
  "publish-release": "eslint-publish-release"
}, la = {
  esutils: "^2.0.2"
}, ca = {
  name: Ku,
  description: Qu,
  homepage: Xu,
  main: Zu,
  version: ea,
  engines: ta,
  directories: ra,
  files: na,
  maintainers: ia,
  repository: ua,
  devDependencies: aa,
  license: sa,
  scripts: oa,
  dependencies: la
};
var Xn = { exports: {} }, Zn = {}, fa = function(t) {
  return t && typeof t == "object" && typeof t.copy == "function" && typeof t.fill == "function" && typeof t.readUInt8 == "function";
}, mr = { exports: {} };
typeof Object.create == "function" ? mr.exports = function(t, r) {
  t.super_ = r, t.prototype = Object.create(r.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  });
} : mr.exports = function(t, r) {
  t.super_ = r;
  var n = function() {
  };
  n.prototype = r.prototype, t.prototype = new n(), t.prototype.constructor = t;
};
(function(e) {
  var t = /%[sdj%]/g;
  e.format = function(T) {
    if (!J(T)) {
      for (var P = [], W = 0; W < arguments.length; W++)
        P.push(i(arguments[W]));
      return P.join(" ");
    }
    for (var W = 1, ne = arguments, U = ne.length, ce = String(T).replace(t, function(Z) {
      if (Z === "%%")
        return "%";
      if (W >= U)
        return Z;
      switch (Z) {
        case "%s":
          return String(ne[W++]);
        case "%d":
          return Number(ne[W++]);
        case "%j":
          try {
            return JSON.stringify(ne[W++]);
          } catch {
            return "[Circular]";
          }
        default:
          return Z;
      }
    }), oe = ne[W]; W < U; oe = ne[++W])
      _(oe) || !S(oe) ? ce += " " + oe : ce += " " + i(oe);
    return ce;
  }, e.deprecate = function(T, P) {
    if (d(Je.process))
      return function() {
        return e.deprecate(T, P).apply(this, arguments);
      };
    if (process.noDeprecation === !0)
      return T;
    var W = !1;
    function ne() {
      if (!W) {
        if (process.throwDeprecation)
          throw new Error(P);
        process.traceDeprecation ? console.trace(P) : console.error(P), W = !0;
      }
      return T.apply(this, arguments);
    }
    return ne;
  };
  var r = {}, n;
  e.debuglog = function(T) {
    if (d(n) && (n = process.env.NODE_DEBUG || ""), T = T.toUpperCase(), !r[T])
      if (new RegExp("\\b" + T + "\\b", "i").test(n)) {
        var P = process.pid;
        r[T] = function() {
          var W = e.format.apply(e, arguments);
          console.error("%s %d: %s", T, P, W);
        };
      } else
        r[T] = function() {
        };
    return r[T];
  };
  function i(T, P) {
    var W = {
      seen: [],
      stylize: s
    };
    return arguments.length >= 3 && (W.depth = arguments[2]), arguments.length >= 4 && (W.colors = arguments[3]), C(P) ? W.showHidden = P : P && e._extend(W, P), d(W.showHidden) && (W.showHidden = !1), d(W.depth) && (W.depth = 2), d(W.colors) && (W.colors = !1), d(W.customInspect) && (W.customInspect = !0), W.colors && (W.stylize = a), p(W, T, W.depth);
  }
  e.inspect = i, i.colors = {
    bold: [1, 22],
    italic: [3, 23],
    underline: [4, 24],
    inverse: [7, 27],
    white: [37, 39],
    grey: [90, 39],
    black: [30, 39],
    blue: [34, 39],
    cyan: [36, 39],
    green: [32, 39],
    magenta: [35, 39],
    red: [31, 39],
    yellow: [33, 39]
  }, i.styles = {
    special: "cyan",
    number: "yellow",
    boolean: "yellow",
    undefined: "grey",
    null: "bold",
    string: "green",
    date: "magenta",
    regexp: "red"
  };
  function a(T, P) {
    var W = i.styles[P];
    return W ? "\x1B[" + i.colors[W][0] + "m" + T + "\x1B[" + i.colors[W][1] + "m" : T;
  }
  function s(T, P) {
    return T;
  }
  function l(T) {
    var P = {};
    return T.forEach(function(W, ne) {
      P[W] = !0;
    }), P;
  }
  function p(T, P, W) {
    if (T.customInspect && P && z(P.inspect) && P.inspect !== e.inspect && !(P.constructor && P.constructor.prototype === P)) {
      var ne = P.inspect(W, T);
      return J(ne) || (ne = p(T, ne, W)), ne;
    }
    var U = m(T, P);
    if (U)
      return U;
    var ce = Object.keys(P), oe = l(ce);
    if (T.showHidden && (ce = Object.getOwnPropertyNames(P)), G(P) && (ce.indexOf("message") >= 0 || ce.indexOf("description") >= 0))
      return g(P);
    if (ce.length === 0) {
      if (z(P)) {
        var Z = P.name ? ": " + P.name : "";
        return T.stylize("[Function" + Z + "]", "special");
      }
      if (D(P))
        return T.stylize(RegExp.prototype.toString.call(P), "regexp");
      if (x(P))
        return T.stylize(Date.prototype.toString.call(P), "date");
      if (G(P))
        return g(P);
    }
    var Y = "", b = !1, w = ["{", "}"];
    if (F(P) && (b = !0, w = ["[", "]"]), z(P)) {
      var K = P.name ? ": " + P.name : "";
      Y = " [Function" + K + "]";
    }
    if (D(P) && (Y = " " + RegExp.prototype.toString.call(P)), x(P) && (Y = " " + Date.prototype.toUTCString.call(P)), G(P) && (Y = " " + g(P)), ce.length === 0 && (!b || P.length == 0))
      return w[0] + Y + w[1];
    if (W < 0)
      return D(P) ? T.stylize(RegExp.prototype.toString.call(P), "regexp") : T.stylize("[Object]", "special");
    T.seen.push(P);
    var N;
    return b ? N = y(T, P, W, oe, ce) : N = ce.map(function(k) {
      return A(T, P, W, oe, k, b);
    }), T.seen.pop(), v(N, Y, w);
  }
  function m(T, P) {
    if (d(P))
      return T.stylize("undefined", "undefined");
    if (J(P)) {
      var W = "'" + JSON.stringify(P).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
      return T.stylize(W, "string");
    }
    if (j(P))
      return T.stylize("" + P, "number");
    if (C(P))
      return T.stylize("" + P, "boolean");
    if (_(P))
      return T.stylize("null", "null");
  }
  function g(T) {
    return "[" + Error.prototype.toString.call(T) + "]";
  }
  function y(T, P, W, ne, U) {
    for (var ce = [], oe = 0, Z = P.length; oe < Z; ++oe)
      re(P, String(oe)) ? ce.push(A(
        T,
        P,
        W,
        ne,
        String(oe),
        !0
      )) : ce.push("");
    return U.forEach(function(Y) {
      Y.match(/^\d+$/) || ce.push(A(
        T,
        P,
        W,
        ne,
        Y,
        !0
      ));
    }), ce;
  }
  function A(T, P, W, ne, U, ce) {
    var oe, Z, Y;
    if (Y = Object.getOwnPropertyDescriptor(P, U) || { value: P[U] }, Y.get ? Y.set ? Z = T.stylize("[Getter/Setter]", "special") : Z = T.stylize("[Getter]", "special") : Y.set && (Z = T.stylize("[Setter]", "special")), re(ne, U) || (oe = "[" + U + "]"), Z || (T.seen.indexOf(Y.value) < 0 ? (_(W) ? Z = p(T, Y.value, null) : Z = p(T, Y.value, W - 1), Z.indexOf(`
`) > -1 && (ce ? Z = Z.split(`
`).map(function(b) {
      return "  " + b;
    }).join(`
`).substr(2) : Z = `
` + Z.split(`
`).map(function(b) {
      return "   " + b;
    }).join(`
`))) : Z = T.stylize("[Circular]", "special")), d(oe)) {
      if (ce && U.match(/^\d+$/))
        return Z;
      oe = JSON.stringify("" + U), oe.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (oe = oe.substr(1, oe.length - 2), oe = T.stylize(oe, "name")) : (oe = oe.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), oe = T.stylize(oe, "string"));
    }
    return oe + ": " + Z;
  }
  function v(T, P, W) {
    var ne = T.reduce(function(U, ce) {
      return ce.indexOf(`
`) >= 0, U + ce.replace(/\u001b\[\d\d?m/g, "").length + 1;
    }, 0);
    return ne > 60 ? W[0] + (P === "" ? "" : P + `
 `) + " " + T.join(`,
  `) + " " + W[1] : W[0] + P + " " + T.join(", ") + " " + W[1];
  }
  function F(T) {
    return Array.isArray(T);
  }
  e.isArray = F;
  function C(T) {
    return typeof T == "boolean";
  }
  e.isBoolean = C;
  function _(T) {
    return T === null;
  }
  e.isNull = _;
  function R(T) {
    return T == null;
  }
  e.isNullOrUndefined = R;
  function j(T) {
    return typeof T == "number";
  }
  e.isNumber = j;
  function J(T) {
    return typeof T == "string";
  }
  e.isString = J;
  function B(T) {
    return typeof T == "symbol";
  }
  e.isSymbol = B;
  function d(T) {
    return T === void 0;
  }
  e.isUndefined = d;
  function D(T) {
    return S(T) && Q(T) === "[object RegExp]";
  }
  e.isRegExp = D;
  function S(T) {
    return typeof T == "object" && T !== null;
  }
  e.isObject = S;
  function x(T) {
    return S(T) && Q(T) === "[object Date]";
  }
  e.isDate = x;
  function G(T) {
    return S(T) && (Q(T) === "[object Error]" || T instanceof Error);
  }
  e.isError = G;
  function z(T) {
    return typeof T == "function";
  }
  e.isFunction = z;
  function V(T) {
    return T === null || typeof T == "boolean" || typeof T == "number" || typeof T == "string" || typeof T == "symbol" || typeof T > "u";
  }
  e.isPrimitive = V, e.isBuffer = fa;
  function Q(T) {
    return Object.prototype.toString.call(T);
  }
  function I(T) {
    return T < 10 ? "0" + T.toString(10) : T.toString(10);
  }
  var te = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  function Ee() {
    var T = new Date(), P = [
      I(T.getHours()),
      I(T.getMinutes()),
      I(T.getSeconds())
    ].join(":");
    return [T.getDate(), te[T.getMonth()], P].join(" ");
  }
  e.log = function() {
    console.log("%s - %s", Ee(), e.format.apply(e, arguments));
  }, e.inherits = mr.exports, e._extend = function(T, P) {
    if (!P || !S(P))
      return T;
    for (var W = Object.keys(P), ne = W.length; ne--; )
      T[W[ne]] = P[W[ne]];
    return T;
  };
  function re(T, P) {
    return Object.prototype.hasOwnProperty.call(T, P);
  }
})(Zn);
var pa = Pu();
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function tn(e, t) {
  if (e === t)
    return 0;
  for (var r = e.length, n = t.length, i = 0, a = Math.min(r, n); i < a; ++i)
    if (e[i] !== t[i]) {
      r = e[i], n = t[i];
      break;
    }
  return r < n ? -1 : n < r ? 1 : 0;
}
function _t(e) {
  return Je.Buffer && typeof Je.Buffer.isBuffer == "function" ? Je.Buffer.isBuffer(e) : !!(e != null && e._isBuffer);
}
var ze = Zn, ha = Object.prototype.hasOwnProperty, rn = Array.prototype.slice, ei = function() {
  return function() {
  }.name === "foo";
}();
function nn(e) {
  return Object.prototype.toString.call(e);
}
function un(e) {
  return _t(e) || typeof Je.ArrayBuffer != "function" ? !1 : typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e ? !!(e instanceof DataView || e.buffer && e.buffer instanceof ArrayBuffer) : !1;
}
var Ae = Xn.exports = ri, da = /\s*function\s+([^\(\s]*)\s*/;
function ti(e) {
  if (!!ze.isFunction(e)) {
    if (ei)
      return e.name;
    var t = e.toString(), r = t.match(da);
    return r && r[1];
  }
}
Ae.AssertionError = function(t) {
  this.name = "AssertionError", this.actual = t.actual, this.expected = t.expected, this.operator = t.operator, t.message ? (this.message = t.message, this.generatedMessage = !1) : (this.message = ma(this), this.generatedMessage = !0);
  var r = t.stackStartFunction || Pe;
  if (Error.captureStackTrace)
    Error.captureStackTrace(this, r);
  else {
    var n = new Error();
    if (n.stack) {
      var i = n.stack, a = ti(r), s = i.indexOf(`
` + a);
      if (s >= 0) {
        var l = i.indexOf(`
`, s + 1);
        i = i.substring(l + 1);
      }
      this.stack = i;
    }
  }
};
ze.inherits(Ae.AssertionError, Error);
function an(e, t) {
  return typeof e == "string" ? e.length < t ? e : e.slice(0, t) : e;
}
function sn(e) {
  if (ei || !ze.isFunction(e))
    return ze.inspect(e);
  var t = ti(e), r = t ? ": " + t : "";
  return "[Function" + r + "]";
}
function ma(e) {
  return an(sn(e.actual), 128) + " " + e.operator + " " + an(sn(e.expected), 128);
}
function Pe(e, t, r, n, i) {
  throw new Ae.AssertionError({
    message: r,
    actual: e,
    expected: t,
    operator: n,
    stackStartFunction: i
  });
}
Ae.fail = Pe;
function ri(e, t) {
  e || Pe(e, !0, t, "==", Ae.ok);
}
Ae.ok = ri;
Ae.equal = function(t, r, n) {
  t != r && Pe(t, r, n, "==", Ae.equal);
};
Ae.notEqual = function(t, r, n) {
  t == r && Pe(t, r, n, "!=", Ae.notEqual);
};
Ae.deepEqual = function(t, r, n) {
  dt(t, r, !1) || Pe(t, r, n, "deepEqual", Ae.deepEqual);
};
Ae.deepStrictEqual = function(t, r, n) {
  dt(t, r, !0) || Pe(t, r, n, "deepStrictEqual", Ae.deepStrictEqual);
};
function dt(e, t, r, n) {
  if (e === t)
    return !0;
  if (_t(e) && _t(t))
    return tn(e, t) === 0;
  if (ze.isDate(e) && ze.isDate(t))
    return e.getTime() === t.getTime();
  if (ze.isRegExp(e) && ze.isRegExp(t))
    return e.source === t.source && e.global === t.global && e.multiline === t.multiline && e.lastIndex === t.lastIndex && e.ignoreCase === t.ignoreCase;
  if ((e === null || typeof e != "object") && (t === null || typeof t != "object"))
    return r ? e === t : e == t;
  if (un(e) && un(t) && nn(e) === nn(t) && !(e instanceof Float32Array || e instanceof Float64Array))
    return tn(
      new Uint8Array(e.buffer),
      new Uint8Array(t.buffer)
    ) === 0;
  if (_t(e) !== _t(t))
    return !1;
  n = n || { actual: [], expected: [] };
  var i = n.actual.indexOf(e);
  return i !== -1 && i === n.expected.indexOf(t) ? !0 : (n.actual.push(e), n.expected.push(t), ga(e, t, r, n));
}
function on(e) {
  return Object.prototype.toString.call(e) == "[object Arguments]";
}
function ga(e, t, r, n) {
  if (e == null || t === null || t === void 0)
    return !1;
  if (ze.isPrimitive(e) || ze.isPrimitive(t))
    return e === t;
  if (r && Object.getPrototypeOf(e) !== Object.getPrototypeOf(t))
    return !1;
  var i = on(e), a = on(t);
  if (i && !a || !i && a)
    return !1;
  if (i)
    return e = rn.call(e), t = rn.call(t), dt(e, t, r);
  var s = cn(e), l = cn(t), p, m;
  if (s.length !== l.length)
    return !1;
  for (s.sort(), l.sort(), m = s.length - 1; m >= 0; m--)
    if (s[m] !== l[m])
      return !1;
  for (m = s.length - 1; m >= 0; m--)
    if (p = s[m], !dt(e[p], t[p], r, n))
      return !1;
  return !0;
}
Ae.notDeepEqual = function(t, r, n) {
  dt(t, r, !1) && Pe(t, r, n, "notDeepEqual", Ae.notDeepEqual);
};
Ae.notDeepStrictEqual = ni;
function ni(e, t, r) {
  dt(e, t, !0) && Pe(e, t, r, "notDeepStrictEqual", ni);
}
Ae.strictEqual = function(t, r, n) {
  t !== r && Pe(t, r, n, "===", Ae.strictEqual);
};
Ae.notStrictEqual = function(t, r, n) {
  t === r && Pe(t, r, n, "!==", Ae.notStrictEqual);
};
function ln(e, t) {
  if (!e || !t)
    return !1;
  if (Object.prototype.toString.call(t) == "[object RegExp]")
    return t.test(e);
  try {
    if (e instanceof t)
      return !0;
  } catch {
  }
  return Error.isPrototypeOf(t) ? !1 : t.call({}, e) === !0;
}
function Aa(e) {
  var t;
  try {
    e();
  } catch (r) {
    t = r;
  }
  return t;
}
function ii(e, t, r, n) {
  var i;
  if (typeof t != "function")
    throw new TypeError('"block" argument must be a function');
  typeof r == "string" && (n = r, r = null), i = Aa(t), n = (r && r.name ? " (" + r.name + ")." : ".") + (n ? " " + n : "."), e && !i && Pe(i, r, "Missing expected exception" + n);
  var a = typeof n == "string", s = !e && ze.isError(i), l = !e && i && !r;
  if ((s && a && ln(i, r) || l) && Pe(i, r, "Got unwanted exception" + n), e && i && r && !ln(i, r) || !e && i)
    throw i;
}
Ae.throws = function(e, t, r) {
  ii(!0, e, t, r);
};
Ae.doesNotThrow = function(e, t, r) {
  ii(!1, e, t, r);
};
Ae.ifError = function(e) {
  if (e)
    throw e;
};
function ui(e, t) {
  e || Pe(e, !0, t, "==", ui);
}
Ae.strict = pa(ui, Ae, {
  equal: Ae.strictEqual,
  deepEqual: Ae.deepStrictEqual,
  notEqual: Ae.notStrictEqual,
  notDeepEqual: Ae.notDeepStrictEqual
});
Ae.strict.strict = Ae.strict;
var cn = Object.keys || function(e) {
  var t = [];
  for (var r in e)
    ha.call(e, r) && t.push(r);
  return t;
};
(function() {
  var e;
  e = ca.version, ct.VERSION = e;
  function t(n) {
    this.name = "DoctrineError", this.message = n;
  }
  t.prototype = function() {
    var n = function() {
    };
    return n.prototype = Error.prototype, new n();
  }(), t.prototype.constructor = t, ct.DoctrineError = t;
  function r(n) {
    throw new t(n);
  }
  ct.throwError = r, ct.assert = Xn.exports;
})();
(function() {
  var e, t, r, n, i, a, s, l, p, m, g, y;
  p = pt, m = ct, e = {
    NullableLiteral: "NullableLiteral",
    AllLiteral: "AllLiteral",
    NullLiteral: "NullLiteral",
    UndefinedLiteral: "UndefinedLiteral",
    VoidLiteral: "VoidLiteral",
    UnionType: "UnionType",
    ArrayType: "ArrayType",
    RecordType: "RecordType",
    FieldType: "FieldType",
    FunctionType: "FunctionType",
    ParameterType: "ParameterType",
    RestType: "RestType",
    NonNullableType: "NonNullableType",
    OptionalType: "OptionalType",
    NullableType: "NullableType",
    NameExpression: "NameExpression",
    TypeApplication: "TypeApplication",
    StringLiteralType: "StringLiteralType",
    NumericLiteralType: "NumericLiteralType",
    BooleanLiteralType: "BooleanLiteralType"
  }, t = {
    ILLEGAL: 0,
    DOT_LT: 1,
    REST: 2,
    LT: 3,
    GT: 4,
    LPAREN: 5,
    RPAREN: 6,
    LBRACE: 7,
    RBRACE: 8,
    LBRACK: 9,
    RBRACK: 10,
    COMMA: 11,
    COLON: 12,
    STAR: 13,
    PIPE: 14,
    QUESTION: 15,
    BANG: 16,
    EQUAL: 17,
    NAME: 18,
    STRING: 19,
    NUMBER: 20,
    EOF: 21
  };
  function A(b) {
    return "><(){}[],:*|?!=".indexOf(String.fromCharCode(b)) === -1 && !p.code.isWhiteSpace(b) && !p.code.isLineTerminator(b);
  }
  function v(b, w, K, N) {
    this._previous = b, this._index = w, this._token = K, this._value = N;
  }
  v.prototype.restore = function() {
    a = this._previous, i = this._index, s = this._token, l = this._value;
  }, v.save = function() {
    return new v(a, i, s, l);
  };
  function F(b, w) {
    return y && (b.range = [w[0] + g, w[1] + g]), b;
  }
  function C() {
    var b = r.charAt(i);
    return i += 1, b;
  }
  function _(b) {
    var w, K, N, k = 0;
    for (K = b === "u" ? 4 : 2, w = 0; w < K; ++w)
      if (i < n && p.code.isHexDigit(r.charCodeAt(i)))
        N = C(), k = k * 16 + "0123456789abcdef".indexOf(N.toLowerCase());
      else
        return "";
    return String.fromCharCode(k);
  }
  function R() {
    var b = "", w, K, N, k, L;
    for (w = r.charAt(i), ++i; i < n; )
      if (K = C(), K === w) {
        w = "";
        break;
      } else if (K === "\\")
        if (K = C(), p.code.isLineTerminator(K.charCodeAt(0)))
          K === "\r" && r.charCodeAt(i) === 10 && ++i;
        else
          switch (K) {
            case "n":
              b += `
`;
              break;
            case "r":
              b += "\r";
              break;
            case "t":
              b += "	";
              break;
            case "u":
            case "x":
              L = i, k = _(K), k ? b += k : (i = L, b += K);
              break;
            case "b":
              b += "\b";
              break;
            case "f":
              b += "\f";
              break;
            case "v":
              b += "\v";
              break;
            default:
              p.code.isOctalDigit(K.charCodeAt(0)) ? (N = "01234567".indexOf(K), i < n && p.code.isOctalDigit(r.charCodeAt(i)) && (N = N * 8 + "01234567".indexOf(C()), "0123".indexOf(K) >= 0 && i < n && p.code.isOctalDigit(r.charCodeAt(i)) && (N = N * 8 + "01234567".indexOf(C()))), b += String.fromCharCode(N)) : b += K;
              break;
          }
      else {
        if (p.code.isLineTerminator(K.charCodeAt(0)))
          break;
        b += K;
      }
    return w !== "" && m.throwError("unexpected quote"), l = b, t.STRING;
  }
  function j() {
    var b, w;
    if (b = "", w = r.charCodeAt(i), w !== 46) {
      if (b = C(), w = r.charCodeAt(i), b === "0") {
        if (w === 120 || w === 88) {
          for (b += C(); i < n && (w = r.charCodeAt(i), !!p.code.isHexDigit(w)); )
            b += C();
          return b.length <= 2 && m.throwError("unexpected token"), i < n && (w = r.charCodeAt(i), p.code.isIdentifierStartES5(w) && m.throwError("unexpected token")), l = parseInt(b, 16), t.NUMBER;
        }
        if (p.code.isOctalDigit(w)) {
          for (b += C(); i < n && (w = r.charCodeAt(i), !!p.code.isOctalDigit(w)); )
            b += C();
          return i < n && (w = r.charCodeAt(i), (p.code.isIdentifierStartES5(w) || p.code.isDecimalDigit(w)) && m.throwError("unexpected token")), l = parseInt(b, 8), t.NUMBER;
        }
        p.code.isDecimalDigit(w) && m.throwError("unexpected token");
      }
      for (; i < n && (w = r.charCodeAt(i), !!p.code.isDecimalDigit(w)); )
        b += C();
    }
    if (w === 46)
      for (b += C(); i < n && (w = r.charCodeAt(i), !!p.code.isDecimalDigit(w)); )
        b += C();
    if (w === 101 || w === 69)
      if (b += C(), w = r.charCodeAt(i), (w === 43 || w === 45) && (b += C()), w = r.charCodeAt(i), p.code.isDecimalDigit(w))
        for (b += C(); i < n && (w = r.charCodeAt(i), !!p.code.isDecimalDigit(w)); )
          b += C();
      else
        m.throwError("unexpected token");
    return i < n && (w = r.charCodeAt(i), p.code.isIdentifierStartES5(w) && m.throwError("unexpected token")), l = parseFloat(b), t.NUMBER;
  }
  function J() {
    var b, w;
    for (l = C(); i < n && A(r.charCodeAt(i)); ) {
      if (b = r.charCodeAt(i), b === 46) {
        if (i + 1 >= n)
          return t.ILLEGAL;
        if (w = r.charCodeAt(i + 1), w === 60)
          break;
      }
      l += C();
    }
    return t.NAME;
  }
  function B() {
    var b;
    for (a = i; i < n && p.code.isWhiteSpace(r.charCodeAt(i)); )
      C();
    if (i >= n)
      return s = t.EOF, s;
    switch (b = r.charCodeAt(i), b) {
      case 39:
      case 34:
        return s = R(), s;
      case 58:
        return C(), s = t.COLON, s;
      case 44:
        return C(), s = t.COMMA, s;
      case 40:
        return C(), s = t.LPAREN, s;
      case 41:
        return C(), s = t.RPAREN, s;
      case 91:
        return C(), s = t.LBRACK, s;
      case 93:
        return C(), s = t.RBRACK, s;
      case 123:
        return C(), s = t.LBRACE, s;
      case 125:
        return C(), s = t.RBRACE, s;
      case 46:
        if (i + 1 < n) {
          if (b = r.charCodeAt(i + 1), b === 60)
            return C(), C(), s = t.DOT_LT, s;
          if (b === 46 && i + 2 < n && r.charCodeAt(i + 2) === 46)
            return C(), C(), C(), s = t.REST, s;
          if (p.code.isDecimalDigit(b))
            return s = j(), s;
        }
        return s = t.ILLEGAL, s;
      case 60:
        return C(), s = t.LT, s;
      case 62:
        return C(), s = t.GT, s;
      case 42:
        return C(), s = t.STAR, s;
      case 124:
        return C(), s = t.PIPE, s;
      case 63:
        return C(), s = t.QUESTION, s;
      case 33:
        return C(), s = t.BANG, s;
      case 61:
        return C(), s = t.EQUAL, s;
      case 45:
        return s = j(), s;
      default:
        return p.code.isDecimalDigit(b) ? (s = j(), s) : (m.assert(A(b)), s = J(), s);
    }
  }
  function d(b, w) {
    m.assert(s === b, w || "consumed token not matched"), B();
  }
  function D(b, w) {
    s !== b && m.throwError(w || "unexpected token"), B();
  }
  function S() {
    var b, w = i - 1;
    if (d(t.LPAREN, "UnionType should start with ("), b = [], s !== t.RPAREN)
      for (; b.push(W()), s !== t.RPAREN; )
        D(t.PIPE);
    return d(t.RPAREN, "UnionType should end with )"), F({
      type: e.UnionType,
      elements: b
    }, [w, a]);
  }
  function x() {
    var b, w = i - 1, K;
    for (d(t.LBRACK, "ArrayType should start with ["), b = []; s !== t.RBRACK; ) {
      if (s === t.REST) {
        K = i - 3, d(t.REST), b.push(F({
          type: e.RestType,
          expression: W()
        }, [K, a]));
        break;
      } else
        b.push(W());
      s !== t.RBRACK && D(t.COMMA);
    }
    return D(t.RBRACK), F({
      type: e.ArrayType,
      elements: b
    }, [w, a]);
  }
  function G() {
    var b = l;
    if (s === t.NAME || s === t.STRING)
      return B(), b;
    if (s === t.NUMBER)
      return d(t.NUMBER), String(b);
    m.throwError("unexpected token");
  }
  function z() {
    var b, w = a;
    return b = G(), s === t.COLON ? (d(t.COLON), F({
      type: e.FieldType,
      key: b,
      value: W()
    }, [w, a])) : F({
      type: e.FieldType,
      key: b,
      value: null
    }, [w, a]);
  }
  function V() {
    var b, w = i - 1, K;
    if (d(t.LBRACE, "RecordType should start with {"), b = [], s === t.COMMA)
      d(t.COMMA);
    else
      for (; s !== t.RBRACE; )
        b.push(z()), s !== t.RBRACE && D(t.COMMA);
    return K = i, D(t.RBRACE), F({
      type: e.RecordType,
      fields: b
    }, [w, K]);
  }
  function Q() {
    var b = l, w = i - b.length;
    return D(t.NAME), s === t.COLON && (b === "module" || b === "external" || b === "event") && (d(t.COLON), b += ":" + l, D(t.NAME)), F({
      type: e.NameExpression,
      name: b
    }, [w, a]);
  }
  function I() {
    var b = [];
    for (b.push(ne()); s === t.COMMA; )
      d(t.COMMA), b.push(ne());
    return b;
  }
  function te() {
    var b, w, K = i - l.length;
    return b = Q(), s === t.DOT_LT || s === t.LT ? (B(), w = I(), D(t.GT), F({
      type: e.TypeApplication,
      expression: b,
      applications: w
    }, [K, a])) : b;
  }
  function Ee() {
    return d(t.COLON, "ResultType should start with :"), s === t.NAME && l === "void" ? (d(t.NAME), {
      type: e.VoidLiteral
    }) : W();
  }
  function re() {
    for (var b = [], w = !1, K, N = !1, k, L = i - 3, X; s !== t.RPAREN; )
      s === t.REST && (d(t.REST), N = !0), k = a, K = W(), K.type === e.NameExpression && s === t.COLON && (X = a - K.name.length, d(t.COLON), K = F({
        type: e.ParameterType,
        name: K.name,
        expression: W()
      }, [X, a])), s === t.EQUAL ? (d(t.EQUAL), K = F({
        type: e.OptionalType,
        expression: K
      }, [k, a]), w = !0) : w && m.throwError("unexpected token"), N && (K = F({
        type: e.RestType,
        expression: K
      }, [L, a])), b.push(K), s !== t.RPAREN && D(t.COMMA);
    return b;
  }
  function T() {
    var b, w, K, N, k, L = i - l.length;
    return m.assert(s === t.NAME && l === "function", "FunctionType should start with 'function'"), d(t.NAME), D(t.LPAREN), b = !1, K = [], w = null, s !== t.RPAREN && (s === t.NAME && (l === "this" || l === "new") ? (b = l === "new", d(t.NAME), D(t.COLON), w = te(), s === t.COMMA && (d(t.COMMA), K = re())) : K = re()), D(t.RPAREN), N = null, s === t.COLON && (N = Ee()), k = F({
      type: e.FunctionType,
      params: K,
      result: N
    }, [L, a]), w && (k.this = w, b && (k.new = !0)), k;
  }
  function P() {
    var b, w;
    switch (s) {
      case t.STAR:
        return d(t.STAR), F({
          type: e.AllLiteral
        }, [a - 1, a]);
      case t.LPAREN:
        return S();
      case t.LBRACK:
        return x();
      case t.LBRACE:
        return V();
      case t.NAME:
        if (w = i - l.length, l === "null")
          return d(t.NAME), F({
            type: e.NullLiteral
          }, [w, a]);
        if (l === "undefined")
          return d(t.NAME), F({
            type: e.UndefinedLiteral
          }, [w, a]);
        if (l === "true" || l === "false")
          return d(t.NAME), F({
            type: e.BooleanLiteralType,
            value: l === "true"
          }, [w, a]);
        if (b = v.save(), l === "function")
          try {
            return T();
          } catch {
            b.restore();
          }
        return te();
      case t.STRING:
        return B(), F({
          type: e.StringLiteralType,
          value: l
        }, [a - l.length - 2, a]);
      case t.NUMBER:
        return B(), F({
          type: e.NumericLiteralType,
          value: l
        }, [a - String(l).length, a]);
      default:
        m.throwError("unexpected token");
    }
  }
  function W() {
    var b, w;
    return s === t.QUESTION ? (w = i - 1, d(t.QUESTION), s === t.COMMA || s === t.EQUAL || s === t.RBRACE || s === t.RPAREN || s === t.PIPE || s === t.EOF || s === t.RBRACK || s === t.GT ? F({
      type: e.NullableLiteral
    }, [w, a]) : F({
      type: e.NullableType,
      expression: P(),
      prefix: !0
    }, [w, a])) : s === t.BANG ? (w = i - 1, d(t.BANG), F({
      type: e.NonNullableType,
      expression: P(),
      prefix: !0
    }, [w, a])) : (w = a, b = P(), s === t.BANG ? (d(t.BANG), F({
      type: e.NonNullableType,
      expression: b,
      prefix: !1
    }, [w, a])) : s === t.QUESTION ? (d(t.QUESTION), F({
      type: e.NullableType,
      expression: b,
      prefix: !1
    }, [w, a])) : s === t.LBRACK ? (d(t.LBRACK), D(t.RBRACK, "expected an array-style type declaration (" + l + "[])"), F({
      type: e.TypeApplication,
      expression: F({
        type: e.NameExpression,
        name: "Array"
      }, [w, a]),
      applications: [b]
    }, [w, a])) : b);
  }
  function ne() {
    var b, w;
    if (b = W(), s !== t.PIPE)
      return b;
    for (w = [b], d(t.PIPE); w.push(W()), s === t.PIPE; )
      d(t.PIPE);
    return F({
      type: e.UnionType,
      elements: w
    }, [0, i]);
  }
  function U() {
    var b;
    return s === t.REST ? (d(t.REST), F({
      type: e.RestType,
      expression: ne()
    }, [0, i])) : (b = ne(), s === t.EQUAL ? (d(t.EQUAL), F({
      type: e.OptionalType,
      expression: b
    }, [0, i])) : b);
  }
  function ce(b, w) {
    var K;
    return r = b, n = r.length, i = 0, a = 0, y = w && w.range, g = w && w.startIndex || 0, B(), K = ne(), w && w.midstream ? {
      expression: K,
      index: a
    } : (s !== t.EOF && m.throwError("not reach to EOF"), K);
  }
  function oe(b, w) {
    var K;
    return r = b, n = r.length, i = 0, a = 0, y = w && w.range, g = w && w.startIndex || 0, B(), K = U(), w && w.midstream ? {
      expression: K,
      index: a
    } : (s !== t.EOF && m.throwError("not reach to EOF"), K);
  }
  function Z(b, w, K) {
    var N, k, L;
    switch (b.type) {
      case e.NullableLiteral:
        N = "?";
        break;
      case e.AllLiteral:
        N = "*";
        break;
      case e.NullLiteral:
        N = "null";
        break;
      case e.UndefinedLiteral:
        N = "undefined";
        break;
      case e.VoidLiteral:
        N = "void";
        break;
      case e.UnionType:
        for (K ? N = "" : N = "(", k = 0, L = b.elements.length; k < L; ++k)
          N += Z(b.elements[k], w), k + 1 !== L && (N += w ? "|" : " | ");
        K || (N += ")");
        break;
      case e.ArrayType:
        for (N = "[", k = 0, L = b.elements.length; k < L; ++k)
          N += Z(b.elements[k], w), k + 1 !== L && (N += w ? "," : ", ");
        N += "]";
        break;
      case e.RecordType:
        for (N = "{", k = 0, L = b.fields.length; k < L; ++k)
          N += Z(b.fields[k], w), k + 1 !== L && (N += w ? "," : ", ");
        N += "}";
        break;
      case e.FieldType:
        b.value ? N = b.key + (w ? ":" : ": ") + Z(b.value, w) : N = b.key;
        break;
      case e.FunctionType:
        for (N = w ? "function(" : "function (", b.this && (b.new ? N += w ? "new:" : "new: " : N += w ? "this:" : "this: ", N += Z(b.this, w), b.params.length !== 0 && (N += w ? "," : ", ")), k = 0, L = b.params.length; k < L; ++k)
          N += Z(b.params[k], w), k + 1 !== L && (N += w ? "," : ", ");
        N += ")", b.result && (N += (w ? ":" : ": ") + Z(b.result, w));
        break;
      case e.ParameterType:
        N = b.name + (w ? ":" : ": ") + Z(b.expression, w);
        break;
      case e.RestType:
        N = "...", b.expression && (N += Z(b.expression, w));
        break;
      case e.NonNullableType:
        b.prefix ? N = "!" + Z(b.expression, w) : N = Z(b.expression, w) + "!";
        break;
      case e.OptionalType:
        N = Z(b.expression, w) + "=";
        break;
      case e.NullableType:
        b.prefix ? N = "?" + Z(b.expression, w) : N = Z(b.expression, w) + "?";
        break;
      case e.NameExpression:
        N = b.name;
        break;
      case e.TypeApplication:
        for (N = Z(b.expression, w) + ".<", k = 0, L = b.applications.length; k < L; ++k)
          N += Z(b.applications[k], w), k + 1 !== L && (N += w ? "," : ", ");
        N += ">";
        break;
      case e.StringLiteralType:
        N = '"' + b.value + '"';
        break;
      case e.NumericLiteralType:
        N = String(b.value);
        break;
      case e.BooleanLiteralType:
        N = String(b.value);
        break;
      default:
        m.throwError("Unknown type " + b.type);
    }
    return N;
  }
  function Y(b, w) {
    return w == null && (w = {}), Z(b, w.compact, w.topLevel);
  }
  St.parseType = ce, St.parseParamType = oe, St.stringify = Y, St.Syntax = e;
})();
(function(e) {
  (function() {
    var t, r, n, i, a;
    i = pt, t = St, r = ct;
    function s(D, S, x) {
      return D.slice(S, x);
    }
    a = function() {
      var D = Object.prototype.hasOwnProperty;
      return function(x, G) {
        return D.call(x, G);
      };
    }();
    function l(D) {
      var S = {}, x;
      for (x in D)
        D.hasOwnProperty(x) && (S[x] = D[x]);
      return S;
    }
    function p(D) {
      return D >= 97 && D <= 122 || D >= 65 && D <= 90 || D >= 48 && D <= 57;
    }
    function m(D) {
      return D === "param" || D === "argument" || D === "arg";
    }
    function g(D) {
      return D === "return" || D === "returns";
    }
    function y(D) {
      return D === "property" || D === "prop";
    }
    function A(D) {
      return m(D) || y(D) || D === "alias" || D === "this" || D === "mixes" || D === "requires";
    }
    function v(D) {
      return A(D) || D === "const" || D === "constant";
    }
    function F(D) {
      return y(D) || m(D);
    }
    function C(D) {
      return y(D) || m(D);
    }
    function _(D) {
      return m(D) || g(D) || D === "define" || D === "enum" || D === "implements" || D === "this" || D === "type" || D === "typedef" || y(D);
    }
    function R(D) {
      return _(D) || D === "throws" || D === "const" || D === "constant" || D === "namespace" || D === "member" || D === "var" || D === "module" || D === "constructor" || D === "class" || D === "extends" || D === "augments" || D === "public" || D === "private" || D === "protected";
    }
    var j = "[ \\f\\t\\v\\u00a0\\u1680\\u180e\\u2000-\\u200a\\u202f\\u205f\\u3000\\ufeff]", J = "(" + j + "*(?:\\*" + j + `?)?)(.+|[\r
\u2028\u2029])`;
    function B(D) {
      return D.replace(/^\/\*\*?/, "").replace(/\*\/$/, "").replace(new RegExp(J, "g"), "$2").replace(/\s*$/, "");
    }
    function d(D, S) {
      for (var x = D.replace(/^\/\*\*?/, ""), G = 0, z = new RegExp(J, "g"), V; V = z.exec(x); )
        if (G += V[1].length, V.index + V[0].length > S + G)
          return S + G + D.length - x.length;
      return D.replace(/\*\/$/, "").replace(/\s*$/, "").length;
    }
    (function(D) {
      var S, x, G, z, V, Q, I, te, Ee;
      function re() {
        var N = V.charCodeAt(x);
        return x += 1, i.code.isLineTerminator(N) && !(N === 13 && V.charCodeAt(x) === 10) && (G += 1), String.fromCharCode(N);
      }
      function T() {
        var N = "";
        for (re(); x < z && p(V.charCodeAt(x)); )
          N += re();
        return N;
      }
      function P() {
        var N, k, L = x;
        for (k = !1; L < z; ) {
          if (N = V.charCodeAt(L), i.code.isLineTerminator(N) && !(N === 13 && V.charCodeAt(L + 1) === 10))
            k = !0;
          else if (k) {
            if (N === 64)
              break;
            i.code.isWhiteSpace(N) || (k = !1);
          }
          L += 1;
        }
        return L;
      }
      function W(N, k, L) {
        for (var X, se, de, Fe, Ge = !1; x < k; )
          if (X = V.charCodeAt(x), i.code.isWhiteSpace(X))
            re();
          else if (X === 123) {
            re();
            break;
          } else {
            Ge = !0;
            break;
          }
        if (Ge)
          return null;
        for (se = 1, de = ""; x < k; )
          if (X = V.charCodeAt(x), i.code.isLineTerminator(X))
            re();
          else {
            if (X === 125) {
              if (se -= 1, se === 0) {
                re();
                break;
              }
            } else
              X === 123 && (se += 1);
            de === "" && (Fe = x), de += re();
          }
        return se !== 0 ? r.throwError("Braces are not balanced") : C(N) ? t.parseParamType(de, { startIndex: Z(Fe), range: L }) : t.parseType(de, { startIndex: Z(Fe), range: L });
      }
      function ne(N) {
        var k;
        if (!i.code.isIdentifierStartES5(V.charCodeAt(x)) && !V[x].match(/[0-9]/))
          return null;
        for (k = re(); x < N && i.code.isIdentifierPartES5(V.charCodeAt(x)); )
          k += re();
        return k;
      }
      function U(N) {
        for (; x < N && (i.code.isWhiteSpace(V.charCodeAt(x)) || i.code.isLineTerminator(V.charCodeAt(x))); )
          re();
      }
      function ce(N, k, L) {
        var X = "", se, de;
        if (U(N), x >= N)
          return null;
        if (V.charCodeAt(x) === 91)
          if (k)
            se = !0, X = re();
          else
            return null;
        if (X += ne(N), L)
          for (V.charCodeAt(x) === 58 && (X === "module" || X === "external" || X === "event") && (X += re(), X += ne(N)), V.charCodeAt(x) === 91 && V.charCodeAt(x + 1) === 93 && (X += re(), X += re()); V.charCodeAt(x) === 46 || V.charCodeAt(x) === 47 || V.charCodeAt(x) === 35 || V.charCodeAt(x) === 45 || V.charCodeAt(x) === 126; )
            X += re(), X += ne(N);
        if (se) {
          if (U(N), V.charCodeAt(x) === 61) {
            X += re(), U(N);
            for (var Fe, Ge = 1; x < N; ) {
              if (Fe = V.charCodeAt(x), i.code.isWhiteSpace(Fe) && (de || (U(N), Fe = V.charCodeAt(x))), Fe === 39 && (de ? de === "'" && (de = "") : de = "'"), Fe === 34 && (de ? de === '"' && (de = "") : de = '"'), Fe === 91)
                Ge++;
              else if (Fe === 93 && --Ge === 0)
                break;
              X += re();
            }
          }
          if (U(N), x >= N || V.charCodeAt(x) !== 93)
            return null;
          X += re();
        }
        return X;
      }
      function oe() {
        for (; x < z && V.charCodeAt(x) !== 64; )
          re();
        return x >= z ? !1 : (r.assert(V.charCodeAt(x) === 64), !0);
      }
      function Z(N) {
        return V === Q ? N : d(Q, N);
      }
      function Y(N, k) {
        this._options = N, this._title = k.toLowerCase(), this._tag = {
          title: k,
          description: null
        }, this._options.lineNumbers && (this._tag.lineNumber = G), this._first = x - k.length - 1, this._last = 0, this._extra = {};
      }
      Y.prototype.addError = function(k) {
        var L = Array.prototype.slice.call(arguments, 1), X = k.replace(
          /%(\d)/g,
          function(se, de) {
            return r.assert(de < L.length, "Message reference must be in range"), L[de];
          }
        );
        return this._tag.errors || (this._tag.errors = []), Ee && r.throwError(X), this._tag.errors.push(X), I;
      }, Y.prototype.parseType = function() {
        if (_(this._title))
          try {
            if (this._tag.type = W(this._title, this._last, this._options.range), !this._tag.type && !m(this._title) && !g(this._title) && !this.addError("Missing or invalid tag type"))
              return !1;
          } catch (N) {
            if (this._tag.type = null, !this.addError(N.message))
              return !1;
          }
        else if (R(this._title))
          try {
            this._tag.type = W(this._title, this._last, this._options.range);
          } catch {
          }
        return !0;
      }, Y.prototype._parseNamePath = function(N) {
        var k;
        return k = ce(this._last, te && C(this._title), !0), !k && !N && !this.addError("Missing or invalid tag name") ? !1 : (this._tag.name = k, !0);
      }, Y.prototype.parseNamePath = function() {
        return this._parseNamePath(!1);
      }, Y.prototype.parseNamePathOptional = function() {
        return this._parseNamePath(!0);
      }, Y.prototype.parseName = function() {
        var N, k;
        if (v(this._title))
          if (this._tag.name = ce(this._last, te && C(this._title), F(this._title)), this._tag.name)
            k = this._tag.name, k.charAt(0) === "[" && k.charAt(k.length - 1) === "]" && (N = k.substring(1, k.length - 1).split("="), N.length > 1 && (this._tag.default = N.slice(1).join("=")), this._tag.name = N[0], this._tag.type && this._tag.type.type !== "OptionalType" && (this._tag.type = {
              type: "OptionalType",
              expression: this._tag.type
            }));
          else {
            if (!A(this._title))
              return !0;
            if (m(this._title) && this._tag.type && this._tag.type.name)
              this._extra.name = this._tag.type, this._tag.name = this._tag.type.name, this._tag.type = null;
            else if (!this.addError("Missing or invalid tag name"))
              return !1;
          }
        return !0;
      }, Y.prototype.parseDescription = function() {
        var k = s(V, x, this._last).trim();
        return k && (/^-\s+/.test(k) && (k = k.substring(2)), this._tag.description = k), !0;
      }, Y.prototype.parseCaption = function() {
        var k = s(V, x, this._last).trim(), L = "<caption>", X = "</caption>", se = k.indexOf(L), de = k.indexOf(X);
        return se >= 0 && de >= 0 ? (this._tag.caption = k.substring(
          se + L.length,
          de
        ).trim(), this._tag.description = k.substring(de + X.length).trim()) : this._tag.description = k, !0;
      }, Y.prototype.parseKind = function() {
        var k, L;
        return L = {
          class: !0,
          constant: !0,
          event: !0,
          external: !0,
          file: !0,
          function: !0,
          member: !0,
          mixin: !0,
          module: !0,
          namespace: !0,
          typedef: !0
        }, k = s(V, x, this._last).trim(), this._tag.kind = k, !(!a(L, k) && !this.addError("Invalid kind name '%0'", k));
      }, Y.prototype.parseAccess = function() {
        var k;
        return k = s(V, x, this._last).trim(), this._tag.access = k, !(k !== "private" && k !== "protected" && k !== "public" && !this.addError("Invalid access name '%0'", k));
      }, Y.prototype.parseThis = function() {
        var k = s(V, x, this._last).trim();
        if (k && k.charAt(0) === "{") {
          var L = this.parseType();
          return L && this._tag.type.type === "NameExpression" || this._tag.type.type === "UnionType" ? (this._tag.name = this._tag.type.name, !0) : this.addError("Invalid name for this");
        } else
          return this.parseNamePath();
      }, Y.prototype.parseVariation = function() {
        var k, L;
        return L = s(V, x, this._last).trim(), k = parseFloat(L, 10), this._tag.variation = k, !(isNaN(k) && !this.addError("Invalid variation '%0'", L));
      }, Y.prototype.ensureEnd = function() {
        var N = s(V, x, this._last).trim();
        return !(N && !this.addError("Unknown content '%0'", N));
      }, Y.prototype.epilogue = function() {
        var k;
        return k = this._tag.description, !(C(this._title) && !this._tag.type && k && k.charAt(0) === "[" && (this._tag.type = this._extra.name, this._tag.name || (this._tag.name = void 0), !te && !this.addError("Missing or invalid tag name")));
      }, S = {
        access: ["parseAccess"],
        alias: ["parseNamePath", "ensureEnd"],
        augments: ["parseType", "parseNamePathOptional", "ensureEnd"],
        constructor: ["parseType", "parseNamePathOptional", "ensureEnd"],
        class: ["parseType", "parseNamePathOptional", "ensureEnd"],
        extends: ["parseType", "parseNamePathOptional", "ensureEnd"],
        example: ["parseCaption"],
        deprecated: ["parseDescription"],
        global: ["ensureEnd"],
        inner: ["ensureEnd"],
        instance: ["ensureEnd"],
        kind: ["parseKind"],
        mixes: ["parseNamePath", "ensureEnd"],
        mixin: ["parseNamePathOptional", "ensureEnd"],
        member: ["parseType", "parseNamePathOptional", "ensureEnd"],
        method: ["parseNamePathOptional", "ensureEnd"],
        module: ["parseType", "parseNamePathOptional", "ensureEnd"],
        func: ["parseNamePathOptional", "ensureEnd"],
        function: ["parseNamePathOptional", "ensureEnd"],
        var: ["parseType", "parseNamePathOptional", "ensureEnd"],
        name: ["parseNamePath", "ensureEnd"],
        namespace: ["parseType", "parseNamePathOptional", "ensureEnd"],
        private: ["parseType", "parseDescription"],
        protected: ["parseType", "parseDescription"],
        public: ["parseType", "parseDescription"],
        readonly: ["ensureEnd"],
        requires: ["parseNamePath", "ensureEnd"],
        since: ["parseDescription"],
        static: ["ensureEnd"],
        summary: ["parseDescription"],
        this: ["parseThis", "ensureEnd"],
        todo: ["parseDescription"],
        typedef: ["parseType", "parseNamePathOptional"],
        variation: ["parseVariation"],
        version: ["parseDescription"]
      }, Y.prototype.parse = function() {
        var k, L, X, se;
        if (!this._title && !this.addError("Missing or invalid title"))
          return null;
        for (this._last = P(this._title), this._options.range && (this._tag.range = [this._first, V.slice(0, this._last).replace(/\s*$/, "").length].map(Z)), a(S, this._title) ? X = S[this._title] : X = ["parseType", "parseName", "parseDescription", "epilogue"], k = 0, L = X.length; k < L; ++k)
          if (se = X[k], !this[se]())
            return null;
        return this._tag;
      };
      function b(N) {
        var k, L, X;
        if (!oe())
          return null;
        for (k = T(), L = new Y(N, k), X = L.parse(); x < L._last; )
          re();
        return X;
      }
      function w(N) {
        var k = "", L, X;
        for (X = !0; x < z && (L = V.charCodeAt(x), !(X && L === 64)); )
          i.code.isLineTerminator(L) ? X = !0 : X && !i.code.isWhiteSpace(L) && (X = !1), k += re();
        return N ? k : k.trim();
      }
      function K(N, k) {
        var L = [], X, se, de, Fe, Ge;
        if (k === void 0 && (k = {}), typeof k.unwrap == "boolean" && k.unwrap ? V = B(N) : V = N, Q = N, k.tags)
          if (Array.isArray(k.tags))
            for (de = {}, Fe = 0, Ge = k.tags.length; Fe < Ge; Fe++)
              typeof k.tags[Fe] == "string" ? de[k.tags[Fe]] = !0 : r.throwError('Invalid "tags" parameter: ' + k.tags);
          else
            r.throwError('Invalid "tags" parameter: ' + k.tags);
        for (z = V.length, x = 0, G = 0, I = k.recoverable, te = k.sloppy, Ee = k.strict, se = w(k.preserveWhitespace); X = b(k), !!X; )
          (!de || de.hasOwnProperty(X.title)) && L.push(X);
        return {
          description: se,
          tags: L
        };
      }
      D.parse = K;
    })(n = {}), e.version = r.VERSION, e.parse = n.parse, e.parseType = t.parseType, e.parseParamType = t.parseParamType, e.unwrapComment = B, e.Syntax = l(t.Syntax), e.Error = r.DoctrineError, e.type = {
      Syntax: e.Syntax,
      parseType: t.parseType,
      parseParamType: t.parseParamType,
      stringify: t.stringify
    };
  })();
})(Hn);
function Ea(e) {
  return e != null && e.includes("@");
}
function Da(e, t) {
  var r;
  try {
    r = Hn.parse(e, {
      tags: t,
      sloppy: !0
    });
  } catch (n) {
    throw console.error(n), new Error("Cannot parse JSDoc tags.");
  }
  return r;
}
var Ca = {
  tags: ["param", "arg", "argument", "returns", "ignore"]
}, ya = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ca;
  if (!Ea(t))
    return {
      includesJsDoc: !1,
      ignore: !1
    };
  var n = Da(t, r.tags), i = va(n);
  return i.ignore ? {
    includesJsDoc: !0,
    ignore: !0
  } : {
    includesJsDoc: !0,
    ignore: !1,
    description: n.description,
    extractedTags: i
  };
};
function va(e) {
  for (var t = {
    params: null,
    returns: null,
    ignore: !1
  }, r = 0; r < e.tags.length; r += 1) {
    var n = e.tags[r];
    if (n.title === "ignore") {
      t.ignore = !0;
      break;
    } else
      switch (n.title) {
        case "param":
        case "arg":
        case "argument": {
          var i = xa(n);
          i != null && (t.params == null && (t.params = []), t.params.push(i));
          break;
        }
        case "returns": {
          var a = Fa(n);
          a != null && (t.returns = a);
          break;
        }
      }
  }
  return t;
}
function xa(e) {
  var t = e.name;
  return t != null && t !== "null-null" ? {
    name: e.name,
    type: e.type,
    description: e.description,
    getPrettyName: function() {
      return t.includes("null") ? t.replace("-null", "").replace(".null", "") : e.name;
    },
    getTypeName: function() {
      return e.type != null ? ft(e.type) : null;
    }
  } : null;
}
function Fa(e) {
  return e.type != null ? {
    type: e.type,
    description: e.description,
    getTypeName: function() {
      return ft(e.type);
    }
  } : null;
}
function ft(e) {
  if (e.type === "NameExpression")
    return e.name;
  if (e.type === "RecordType") {
    var t = e.fields.map(function(i) {
      if (i.value != null) {
        var a = ft(i.value);
        return "".concat(i.key, ": ").concat(a);
      }
      return i.key;
    });
    return "({".concat(t.join(", "), "})");
  }
  if (e.type === "UnionType") {
    var r = e.elements.map(ft);
    return "(".concat(r.join("|"), ")");
  }
  if (e.type === "ArrayType")
    return "[]";
  if (e.type === "TypeApplication" && e.expression != null && e.expression.name === "Array") {
    var n = ft(e.applications[0]);
    return "".concat(n, "[]");
  }
  return e.type === "NullableType" || e.type === "NonNullableType" || e.type === "OptionalType" ? ft(e.expression) : e.type === "AllLiteral" ? "any" : null;
}
var ba = 90, Sa = 50;
function Tr(e) {
  return e.length > ba;
}
function Dt(e) {
  return e.length > Sa;
}
function ue(e, t) {
  return e === t ? {
    summary: e
  } : {
    summary: e,
    detail: t
  };
}
var qt;
(function(e) {
  e.UNION = "union", e.SIGNATURE = "signature";
})(qt || (qt = {}));
function ai(e) {
  var t = e.name, r = e.value, n = e.elements, i = e.raw;
  return r != null ? r : n != null ? n.map(ai).join(" | ") : i != null ? i : t;
}
function _a(e) {
  var t = e.name, r = e.raw, n = e.elements;
  return n != null ? ue(n.map(ai).join(" | ")) : r != null ? ue(r.replace(/^\|\s*/, "")) : ue(t);
}
function Ba(e) {
  var t = e.type, r = e.raw;
  return r != null ? ue(r) : ue(t);
}
function wa(e) {
  var t = e.type, r = e.raw;
  return r != null ? Tr(r) ? ue(t, r) : ue(r) : ue(t);
}
function Ta(e) {
  var t = e.type;
  return t === "object" ? wa(e) : Ba(e);
}
function ka(e) {
  var t = e.name, r = e.raw;
  return r != null ? Tr(r) ? ue(t, r) : ue(r) : ue(t);
}
function Na(e) {
  if (e == null)
    return null;
  switch (e.name) {
    case qt.UNION:
      return _a(e);
    case qt.SIGNATURE:
      return Ta(e);
    default:
      return ka(e);
  }
}
function Oa(e, t) {
  if (e != null) {
    var r = e.value;
    if (!_r(r))
      return Dt(r) ? ue(t.name, r) : ue(r);
  }
  return null;
}
var Pa = function(t, r) {
  var n = r.flowType, i = r.description, a = r.required, s = r.defaultValue;
  return {
    name: t,
    type: Na(n),
    required: a,
    description: i,
    defaultValue: Oa(s, n)
  };
};
function Ia(e) {
  var t = e.tsType, r = e.required;
  return t == null ? null : ue(r ? t.name : t.name.replace(" | undefined", ""));
}
function Ra(e) {
  var t = e.defaultValue;
  if (t != null) {
    var r = t.value;
    if (!_r(r))
      return ue(r);
  }
  return null;
}
var La = function(t, r) {
  var n = r.description, i = r.required;
  return {
    name: t,
    type: Ia(r),
    required: i,
    description: n,
    defaultValue: Ra(r)
  };
};
function Ma(e) {
  return e != null ? ue(e.name) : null;
}
function ja(e) {
  var t = e.computed, r = e.func;
  return typeof t > "u" && typeof r > "u";
}
function Va(e) {
  return e ? e.name === "string" ? !0 : e.name === "enum" ? Array.isArray(e.value) && e.value.every(function(t) {
    var r = t.value;
    return typeof r == "string" && r[0] === '"' && r[r.length - 1] === '"';
  }) : !1 : !1;
}
function qa(e, t) {
  if (e != null) {
    var r = e.value;
    if (!_r(r))
      return ja(e) && Va(t) ? ue(JSON.stringify(r)) : ue(r);
  }
  return null;
}
function si(e, t, r) {
  var n = r.description, i = r.required, a = r.defaultValue;
  return {
    name: e,
    type: Ma(t),
    required: i,
    description: n,
    defaultValue: qa(a, t)
  };
}
function Yt(e, t) {
  if (t.includesJsDoc) {
    var r = t.description, n = t.extractedTags;
    r != null && (e.description = t.description);
    var i = n.params != null, a = n.returns != null && n.returns.type != null;
    (i || a) && (e.jsDocTags = {
      params: i && n.params.map(function(s) {
        return {
          name: s.getPrettyName(),
          description: s.description
        };
      }),
      returns: a && {
        description: n.returns.description
      }
    });
  }
  return e;
}
var Ua = function(t, r, n) {
  var i = si(t, r.type, r);
  return i.sbType = Sr(r), Yt(i, n);
}, Wa = function(t, r, n) {
  var i = La(t, r);
  return i.sbType = Sr(r), Yt(i, n);
}, za = function(t, r, n) {
  var i = Pa(t, r);
  return i.sbType = Sr(r), Yt(i, n);
}, Ga = function(t, r, n) {
  var i = si(t, {
    name: "unknown"
  }, r);
  return Yt(i, n);
}, oi = function(t) {
  switch (t) {
    case We.JAVASCRIPT:
      return Ua;
    case We.TYPESCRIPT:
      return Wa;
    case We.FLOW:
      return za;
    default:
      return Ga;
  }
}, li = function(t) {
  return t.type != null ? We.JAVASCRIPT : t.flowType != null ? We.FLOW : t.tsType != null ? We.TYPESCRIPT : We.UNKNOWN;
}, $a = function(t) {
  var r = li(t[0]), n = oi(r);
  return t.map(function(i) {
    var a, s = i;
    return (a = i.type) !== null && a !== void 0 && a.elements && (s = Object.assign({}, i, {
      type: Object.assign({}, i.type, {
        value: i.type.elements
      })
    })), ci(s.name, s, r, n);
  });
}, Ja = function(t) {
  var r = Object.keys(t), n = li(t[r[0]]), i = oi(n);
  return r.map(function(a) {
    var s = t[a];
    return s != null ? ci(a, s, n, i) : null;
  }).filter(Boolean);
}, Ya = function(t, r) {
  var n = Yn(t, r);
  return Yu(n) ? Array.isArray(n) ? $a(n) : Ja(n) : [];
};
function ci(e, t, r, n) {
  var i = ya(t.description), a = i.includesJsDoc && i.ignore;
  if (!a) {
    var s = n(e, t, i);
    return {
      propDef: s,
      jsDocTags: i.extractedTags,
      docgenInfo: t,
      typeSystem: r
    };
  }
  return null;
}
function Ha(e) {
  return e != null && Hu(e);
}
var Ka = function(t) {
  var r = t.component, n = t.argTypes, i = t.parameters.docs, a = i === void 0 ? {} : i, s = a.extractArgTypes, l = s && r ? s(r) : {}, p = l ? Fu(l, n) : n;
  return p;
}, Qa = "storybook/docs", Xa = "".concat(Qa, "/snippet-rendered"), Ut;
(function(e) {
  e.AUTO = "auto", e.CODE = "code", e.DYNAMIC = "dynamic";
})(Ut || (Ut = {}));
function Za(e, t) {
  var r = e != null, n = t != null;
  if (!r && !n)
    return "";
  var i = [];
  if (r) {
    var a = e.map(function(s) {
      var l = s.getPrettyName(), p = s.getTypeName();
      return p != null ? "".concat(l, ": ").concat(p) : l;
    });
    i.push("(".concat(a.join(", "), ")"));
  } else
    i.push("()");
  return n && i.push("=> ".concat(t.getTypeName())), i.join(" ");
}
function es(e, t) {
  var r = e != null, n = t != null;
  if (!r && !n)
    return "";
  var i = [];
  return r ? i.push("( ... )") : i.push("()"), n && i.push("=> ".concat(t.getTypeName())), i.join(" ");
}
function ts(e) {
  return e.replace(/,/g, `,\r
`);
}
var gr = "custom", Tt = "object", kr = "array", rs = "class", mt = "func", Ct = "element", fi = { exports: {} };
const ns = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
];
(function(e) {
  e.exports = ns;
})(fi);
const is = /* @__PURE__ */ bu(fi.exports);
function Nr(e) {
  return is.includes(e.toLowerCase());
}
var pi = {}, hi = {};
(function(e) {
  (function t(r) {
    var n, i, a, s, l, p;
    function m(d) {
      var D = {}, S, x;
      for (S in d)
        d.hasOwnProperty(S) && (x = d[S], typeof x == "object" && x !== null ? D[S] = m(x) : D[S] = x);
      return D;
    }
    function g(d, D) {
      var S, x, G, z;
      for (x = d.length, G = 0; x; )
        S = x >>> 1, z = G + S, D(d[z]) ? x = S : (G = z + 1, x -= S + 1);
      return G;
    }
    n = {
      AssignmentExpression: "AssignmentExpression",
      AssignmentPattern: "AssignmentPattern",
      ArrayExpression: "ArrayExpression",
      ArrayPattern: "ArrayPattern",
      ArrowFunctionExpression: "ArrowFunctionExpression",
      AwaitExpression: "AwaitExpression",
      BlockStatement: "BlockStatement",
      BinaryExpression: "BinaryExpression",
      BreakStatement: "BreakStatement",
      CallExpression: "CallExpression",
      CatchClause: "CatchClause",
      ChainExpression: "ChainExpression",
      ClassBody: "ClassBody",
      ClassDeclaration: "ClassDeclaration",
      ClassExpression: "ClassExpression",
      ComprehensionBlock: "ComprehensionBlock",
      ComprehensionExpression: "ComprehensionExpression",
      ConditionalExpression: "ConditionalExpression",
      ContinueStatement: "ContinueStatement",
      DebuggerStatement: "DebuggerStatement",
      DirectiveStatement: "DirectiveStatement",
      DoWhileStatement: "DoWhileStatement",
      EmptyStatement: "EmptyStatement",
      ExportAllDeclaration: "ExportAllDeclaration",
      ExportDefaultDeclaration: "ExportDefaultDeclaration",
      ExportNamedDeclaration: "ExportNamedDeclaration",
      ExportSpecifier: "ExportSpecifier",
      ExpressionStatement: "ExpressionStatement",
      ForStatement: "ForStatement",
      ForInStatement: "ForInStatement",
      ForOfStatement: "ForOfStatement",
      FunctionDeclaration: "FunctionDeclaration",
      FunctionExpression: "FunctionExpression",
      GeneratorExpression: "GeneratorExpression",
      Identifier: "Identifier",
      IfStatement: "IfStatement",
      ImportExpression: "ImportExpression",
      ImportDeclaration: "ImportDeclaration",
      ImportDefaultSpecifier: "ImportDefaultSpecifier",
      ImportNamespaceSpecifier: "ImportNamespaceSpecifier",
      ImportSpecifier: "ImportSpecifier",
      Literal: "Literal",
      LabeledStatement: "LabeledStatement",
      LogicalExpression: "LogicalExpression",
      MemberExpression: "MemberExpression",
      MetaProperty: "MetaProperty",
      MethodDefinition: "MethodDefinition",
      ModuleSpecifier: "ModuleSpecifier",
      NewExpression: "NewExpression",
      ObjectExpression: "ObjectExpression",
      ObjectPattern: "ObjectPattern",
      PrivateIdentifier: "PrivateIdentifier",
      Program: "Program",
      Property: "Property",
      PropertyDefinition: "PropertyDefinition",
      RestElement: "RestElement",
      ReturnStatement: "ReturnStatement",
      SequenceExpression: "SequenceExpression",
      SpreadElement: "SpreadElement",
      Super: "Super",
      SwitchStatement: "SwitchStatement",
      SwitchCase: "SwitchCase",
      TaggedTemplateExpression: "TaggedTemplateExpression",
      TemplateElement: "TemplateElement",
      TemplateLiteral: "TemplateLiteral",
      ThisExpression: "ThisExpression",
      ThrowStatement: "ThrowStatement",
      TryStatement: "TryStatement",
      UnaryExpression: "UnaryExpression",
      UpdateExpression: "UpdateExpression",
      VariableDeclaration: "VariableDeclaration",
      VariableDeclarator: "VariableDeclarator",
      WhileStatement: "WhileStatement",
      WithStatement: "WithStatement",
      YieldExpression: "YieldExpression"
    }, a = {
      AssignmentExpression: ["left", "right"],
      AssignmentPattern: ["left", "right"],
      ArrayExpression: ["elements"],
      ArrayPattern: ["elements"],
      ArrowFunctionExpression: ["params", "body"],
      AwaitExpression: ["argument"],
      BlockStatement: ["body"],
      BinaryExpression: ["left", "right"],
      BreakStatement: ["label"],
      CallExpression: ["callee", "arguments"],
      CatchClause: ["param", "body"],
      ChainExpression: ["expression"],
      ClassBody: ["body"],
      ClassDeclaration: ["id", "superClass", "body"],
      ClassExpression: ["id", "superClass", "body"],
      ComprehensionBlock: ["left", "right"],
      ComprehensionExpression: ["blocks", "filter", "body"],
      ConditionalExpression: ["test", "consequent", "alternate"],
      ContinueStatement: ["label"],
      DebuggerStatement: [],
      DirectiveStatement: [],
      DoWhileStatement: ["body", "test"],
      EmptyStatement: [],
      ExportAllDeclaration: ["source"],
      ExportDefaultDeclaration: ["declaration"],
      ExportNamedDeclaration: ["declaration", "specifiers", "source"],
      ExportSpecifier: ["exported", "local"],
      ExpressionStatement: ["expression"],
      ForStatement: ["init", "test", "update", "body"],
      ForInStatement: ["left", "right", "body"],
      ForOfStatement: ["left", "right", "body"],
      FunctionDeclaration: ["id", "params", "body"],
      FunctionExpression: ["id", "params", "body"],
      GeneratorExpression: ["blocks", "filter", "body"],
      Identifier: [],
      IfStatement: ["test", "consequent", "alternate"],
      ImportExpression: ["source"],
      ImportDeclaration: ["specifiers", "source"],
      ImportDefaultSpecifier: ["local"],
      ImportNamespaceSpecifier: ["local"],
      ImportSpecifier: ["imported", "local"],
      Literal: [],
      LabeledStatement: ["label", "body"],
      LogicalExpression: ["left", "right"],
      MemberExpression: ["object", "property"],
      MetaProperty: ["meta", "property"],
      MethodDefinition: ["key", "value"],
      ModuleSpecifier: [],
      NewExpression: ["callee", "arguments"],
      ObjectExpression: ["properties"],
      ObjectPattern: ["properties"],
      PrivateIdentifier: [],
      Program: ["body"],
      Property: ["key", "value"],
      PropertyDefinition: ["key", "value"],
      RestElement: ["argument"],
      ReturnStatement: ["argument"],
      SequenceExpression: ["expressions"],
      SpreadElement: ["argument"],
      Super: [],
      SwitchStatement: ["discriminant", "cases"],
      SwitchCase: ["test", "consequent"],
      TaggedTemplateExpression: ["tag", "quasi"],
      TemplateElement: [],
      TemplateLiteral: ["quasis", "expressions"],
      ThisExpression: [],
      ThrowStatement: ["argument"],
      TryStatement: ["block", "handler", "finalizer"],
      UnaryExpression: ["argument"],
      UpdateExpression: ["argument"],
      VariableDeclaration: ["declarations"],
      VariableDeclarator: ["id", "init"],
      WhileStatement: ["test", "body"],
      WithStatement: ["object", "body"],
      YieldExpression: ["argument"]
    }, s = {}, l = {}, p = {}, i = {
      Break: s,
      Skip: l,
      Remove: p
    };
    function y(d, D) {
      this.parent = d, this.key = D;
    }
    y.prototype.replace = function(D) {
      this.parent[this.key] = D;
    }, y.prototype.remove = function() {
      return Array.isArray(this.parent) ? (this.parent.splice(this.key, 1), !0) : (this.replace(null), !1);
    };
    function A(d, D, S, x) {
      this.node = d, this.path = D, this.wrap = S, this.ref = x;
    }
    function v() {
    }
    v.prototype.path = function() {
      var D, S, x, G, z, V;
      function Q(I, te) {
        if (Array.isArray(te))
          for (x = 0, G = te.length; x < G; ++x)
            I.push(te[x]);
        else
          I.push(te);
      }
      if (!this.__current.path)
        return null;
      for (z = [], D = 2, S = this.__leavelist.length; D < S; ++D)
        V = this.__leavelist[D], Q(z, V.path);
      return Q(z, this.__current.path), z;
    }, v.prototype.type = function() {
      var d = this.current();
      return d.type || this.__current.wrap;
    }, v.prototype.parents = function() {
      var D, S, x;
      for (x = [], D = 1, S = this.__leavelist.length; D < S; ++D)
        x.push(this.__leavelist[D].node);
      return x;
    }, v.prototype.current = function() {
      return this.__current.node;
    }, v.prototype.__execute = function(D, S) {
      var x, G;
      return G = void 0, x = this.__current, this.__current = S, this.__state = null, D && (G = D.call(this, S.node, this.__leavelist[this.__leavelist.length - 1].node)), this.__current = x, G;
    }, v.prototype.notify = function(D) {
      this.__state = D;
    }, v.prototype.skip = function() {
      this.notify(l);
    }, v.prototype.break = function() {
      this.notify(s);
    }, v.prototype.remove = function() {
      this.notify(p);
    }, v.prototype.__initialize = function(d, D) {
      this.visitor = D, this.root = d, this.__worklist = [], this.__leavelist = [], this.__current = null, this.__state = null, this.__fallback = null, D.fallback === "iteration" ? this.__fallback = Object.keys : typeof D.fallback == "function" && (this.__fallback = D.fallback), this.__keys = a, D.keys && (this.__keys = Object.assign(Object.create(this.__keys), D.keys));
    };
    function F(d) {
      return d == null ? !1 : typeof d == "object" && typeof d.type == "string";
    }
    function C(d, D) {
      return (d === n.ObjectExpression || d === n.ObjectPattern) && D === "properties";
    }
    function _(d, D) {
      for (var S = d.length - 1; S >= 0; --S)
        if (d[S].node === D)
          return !0;
      return !1;
    }
    v.prototype.traverse = function(D, S) {
      var x, G, z, V, Q, I, te, Ee, re, T, P, W;
      for (this.__initialize(D, S), W = {}, x = this.__worklist, G = this.__leavelist, x.push(new A(D, null, null, null)), G.push(new A(null, null, null, null)); x.length; ) {
        if (z = x.pop(), z === W) {
          if (z = G.pop(), I = this.__execute(S.leave, z), this.__state === s || I === s)
            return;
          continue;
        }
        if (z.node) {
          if (I = this.__execute(S.enter, z), this.__state === s || I === s)
            return;
          if (x.push(W), G.push(z), this.__state === l || I === l)
            continue;
          if (V = z.node, Q = V.type || z.wrap, T = this.__keys[Q], !T)
            if (this.__fallback)
              T = this.__fallback(V);
            else
              throw new Error("Unknown node type " + Q + ".");
          for (Ee = T.length; (Ee -= 1) >= 0; )
            if (te = T[Ee], P = V[te], !!P) {
              if (Array.isArray(P)) {
                for (re = P.length; (re -= 1) >= 0; )
                  if (!!P[re] && !_(G, P[re])) {
                    if (C(Q, T[Ee]))
                      z = new A(P[re], [te, re], "Property", null);
                    else if (F(P[re]))
                      z = new A(P[re], [te, re], null, null);
                    else
                      continue;
                    x.push(z);
                  }
              } else if (F(P)) {
                if (_(G, P))
                  continue;
                x.push(new A(P, te, null, null));
              }
            }
        }
      }
    }, v.prototype.replace = function(D, S) {
      var x, G, z, V, Q, I, te, Ee, re, T, P, W, ne;
      function U(ce) {
        var oe, Z, Y, b;
        if (ce.ref.remove()) {
          for (Z = ce.ref.key, b = ce.ref.parent, oe = x.length; oe--; )
            if (Y = x[oe], Y.ref && Y.ref.parent === b) {
              if (Y.ref.key < Z)
                break;
              --Y.ref.key;
            }
        }
      }
      for (this.__initialize(D, S), P = {}, x = this.__worklist, G = this.__leavelist, W = {
        root: D
      }, I = new A(D, null, null, new y(W, "root")), x.push(I), G.push(I); x.length; ) {
        if (I = x.pop(), I === P) {
          if (I = G.pop(), Q = this.__execute(S.leave, I), Q !== void 0 && Q !== s && Q !== l && Q !== p && I.ref.replace(Q), (this.__state === p || Q === p) && U(I), this.__state === s || Q === s)
            return W.root;
          continue;
        }
        if (Q = this.__execute(S.enter, I), Q !== void 0 && Q !== s && Q !== l && Q !== p && (I.ref.replace(Q), I.node = Q), (this.__state === p || Q === p) && (U(I), I.node = null), this.__state === s || Q === s)
          return W.root;
        if (z = I.node, !!z && (x.push(P), G.push(I), !(this.__state === l || Q === l))) {
          if (V = z.type || I.wrap, re = this.__keys[V], !re)
            if (this.__fallback)
              re = this.__fallback(z);
            else
              throw new Error("Unknown node type " + V + ".");
          for (te = re.length; (te -= 1) >= 0; )
            if (ne = re[te], T = z[ne], !!T)
              if (Array.isArray(T)) {
                for (Ee = T.length; (Ee -= 1) >= 0; )
                  if (!!T[Ee]) {
                    if (C(V, re[te]))
                      I = new A(T[Ee], [ne, Ee], "Property", new y(T, Ee));
                    else if (F(T[Ee]))
                      I = new A(T[Ee], [ne, Ee], null, new y(T, Ee));
                    else
                      continue;
                    x.push(I);
                  }
              } else
                F(T) && x.push(new A(T, ne, null, new y(z, ne)));
        }
      }
      return W.root;
    };
    function R(d, D) {
      var S = new v();
      return S.traverse(d, D);
    }
    function j(d, D) {
      var S = new v();
      return S.replace(d, D);
    }
    function J(d, D) {
      var S;
      return S = g(D, function(G) {
        return G.range[0] > d.range[0];
      }), d.extendedRange = [d.range[0], d.range[1]], S !== D.length && (d.extendedRange[1] = D[S].range[0]), S -= 1, S >= 0 && (d.extendedRange[0] = D[S].range[1]), d;
    }
    function B(d, D, S) {
      var x = [], G, z, V, Q;
      if (!d.range)
        throw new Error("attachComments needs range information");
      if (!S.length) {
        if (D.length) {
          for (V = 0, z = D.length; V < z; V += 1)
            G = m(D[V]), G.extendedRange = [0, d.range[0]], x.push(G);
          d.leadingComments = x;
        }
        return d;
      }
      for (V = 0, z = D.length; V < z; V += 1)
        x.push(J(m(D[V]), S));
      return Q = 0, R(d, {
        enter: function(I) {
          for (var te; Q < x.length && (te = x[Q], !(te.extendedRange[1] > I.range[0])); )
            te.extendedRange[1] === I.range[0] ? (I.leadingComments || (I.leadingComments = []), I.leadingComments.push(te), x.splice(Q, 1)) : Q += 1;
          if (Q === x.length)
            return i.Break;
          if (x[Q].extendedRange[0] > I.range[1])
            return i.Skip;
        }
      }), Q = 0, R(d, {
        leave: function(I) {
          for (var te; Q < x.length && (te = x[Q], !(I.range[1] < te.extendedRange[0])); )
            I.range[1] === te.extendedRange[0] ? (I.trailingComments || (I.trailingComments = []), I.trailingComments.push(te), x.splice(Q, 1)) : Q += 1;
          if (Q === x.length)
            return i.Break;
          if (x[Q].extendedRange[0] > I.range[1])
            return i.Skip;
        }
      }), d;
    }
    return r.Syntax = n, r.traverse = R, r.replace = j, r.attachComments = B, r.VisitorKeys = a, r.VisitorOption = i, r.Controller = v, r.cloneEnvironment = function() {
      return t({});
    }, r;
  })(e);
})(hi);
var xt = {}, ur = {}, Lt = {}, Mt = {}, fn;
function us() {
  if (fn)
    return Mt;
  fn = 1;
  var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return Mt.encode = function(t) {
    if (0 <= t && t < e.length)
      return e[t];
    throw new TypeError("Must be between 0 and 63: " + t);
  }, Mt.decode = function(t) {
    var r = 65, n = 90, i = 97, a = 122, s = 48, l = 57, p = 43, m = 47, g = 26, y = 52;
    return r <= t && t <= n ? t - r : i <= t && t <= a ? t - i + g : s <= t && t <= l ? t - s + y : t == p ? 62 : t == m ? 63 : -1;
  }, Mt;
}
var pn;
function di() {
  if (pn)
    return Lt;
  pn = 1;
  var e = us(), t = 5, r = 1 << t, n = r - 1, i = r;
  function a(l) {
    return l < 0 ? (-l << 1) + 1 : (l << 1) + 0;
  }
  function s(l) {
    var p = (l & 1) === 1, m = l >> 1;
    return p ? -m : m;
  }
  return Lt.encode = function(p) {
    var m = "", g, y = a(p);
    do
      g = y & n, y >>>= t, y > 0 && (g |= i), m += e.encode(g);
    while (y > 0);
    return m;
  }, Lt.decode = function(p, m, g) {
    var y = p.length, A = 0, v = 0, F, C;
    do {
      if (m >= y)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (C = e.decode(p.charCodeAt(m++)), C === -1)
        throw new Error("Invalid base64 digit: " + p.charAt(m - 1));
      F = !!(C & i), C &= n, A = A + (C << v), v += t;
    } while (F);
    g.value = s(A), g.rest = m;
  }, Lt;
}
var ar = {}, hn;
function kt() {
  return hn || (hn = 1, function(e) {
    function t(B, d, D) {
      if (d in B)
        return B[d];
      if (arguments.length === 3)
        return D;
      throw new Error('"' + d + '" is a required argument.');
    }
    e.getArg = t;
    var r = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, n = /^data:.+\,.+$/;
    function i(B) {
      var d = B.match(r);
      return d ? {
        scheme: d[1],
        auth: d[2],
        host: d[3],
        port: d[4],
        path: d[5]
      } : null;
    }
    e.urlParse = i;
    function a(B) {
      var d = "";
      return B.scheme && (d += B.scheme + ":"), d += "//", B.auth && (d += B.auth + "@"), B.host && (d += B.host), B.port && (d += ":" + B.port), B.path && (d += B.path), d;
    }
    e.urlGenerate = a;
    function s(B) {
      var d = B, D = i(B);
      if (D) {
        if (!D.path)
          return B;
        d = D.path;
      }
      for (var S = e.isAbsolute(d), x = d.split(/\/+/), G, z = 0, V = x.length - 1; V >= 0; V--)
        G = x[V], G === "." ? x.splice(V, 1) : G === ".." ? z++ : z > 0 && (G === "" ? (x.splice(V + 1, z), z = 0) : (x.splice(V, 2), z--));
      return d = x.join("/"), d === "" && (d = S ? "/" : "."), D ? (D.path = d, a(D)) : d;
    }
    e.normalize = s;
    function l(B, d) {
      B === "" && (B = "."), d === "" && (d = ".");
      var D = i(d), S = i(B);
      if (S && (B = S.path || "/"), D && !D.scheme)
        return S && (D.scheme = S.scheme), a(D);
      if (D || d.match(n))
        return d;
      if (S && !S.host && !S.path)
        return S.host = d, a(S);
      var x = d.charAt(0) === "/" ? d : s(B.replace(/\/+$/, "") + "/" + d);
      return S ? (S.path = x, a(S)) : x;
    }
    e.join = l, e.isAbsolute = function(B) {
      return B.charAt(0) === "/" || r.test(B);
    };
    function p(B, d) {
      B === "" && (B = "."), B = B.replace(/\/$/, "");
      for (var D = 0; d.indexOf(B + "/") !== 0; ) {
        var S = B.lastIndexOf("/");
        if (S < 0 || (B = B.slice(0, S), B.match(/^([^\/]+:\/)?\/*$/)))
          return d;
        ++D;
      }
      return Array(D + 1).join("../") + d.substr(B.length + 1);
    }
    e.relative = p;
    var m = function() {
      var B = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in B);
    }();
    function g(B) {
      return B;
    }
    function y(B) {
      return v(B) ? "$" + B : B;
    }
    e.toSetString = m ? g : y;
    function A(B) {
      return v(B) ? B.slice(1) : B;
    }
    e.fromSetString = m ? g : A;
    function v(B) {
      if (!B)
        return !1;
      var d = B.length;
      if (d < 9 || B.charCodeAt(d - 1) !== 95 || B.charCodeAt(d - 2) !== 95 || B.charCodeAt(d - 3) !== 111 || B.charCodeAt(d - 4) !== 116 || B.charCodeAt(d - 5) !== 111 || B.charCodeAt(d - 6) !== 114 || B.charCodeAt(d - 7) !== 112 || B.charCodeAt(d - 8) !== 95 || B.charCodeAt(d - 9) !== 95)
        return !1;
      for (var D = d - 10; D >= 0; D--)
        if (B.charCodeAt(D) !== 36)
          return !1;
      return !0;
    }
    function F(B, d, D) {
      var S = _(B.source, d.source);
      return S !== 0 || (S = B.originalLine - d.originalLine, S !== 0) || (S = B.originalColumn - d.originalColumn, S !== 0 || D) || (S = B.generatedColumn - d.generatedColumn, S !== 0) || (S = B.generatedLine - d.generatedLine, S !== 0) ? S : _(B.name, d.name);
    }
    e.compareByOriginalPositions = F;
    function C(B, d, D) {
      var S = B.generatedLine - d.generatedLine;
      return S !== 0 || (S = B.generatedColumn - d.generatedColumn, S !== 0 || D) || (S = _(B.source, d.source), S !== 0) || (S = B.originalLine - d.originalLine, S !== 0) || (S = B.originalColumn - d.originalColumn, S !== 0) ? S : _(B.name, d.name);
    }
    e.compareByGeneratedPositionsDeflated = C;
    function _(B, d) {
      return B === d ? 0 : B === null ? 1 : d === null ? -1 : B > d ? 1 : -1;
    }
    function R(B, d) {
      var D = B.generatedLine - d.generatedLine;
      return D !== 0 || (D = B.generatedColumn - d.generatedColumn, D !== 0) || (D = _(B.source, d.source), D !== 0) || (D = B.originalLine - d.originalLine, D !== 0) || (D = B.originalColumn - d.originalColumn, D !== 0) ? D : _(B.name, d.name);
    }
    e.compareByGeneratedPositionsInflated = R;
    function j(B) {
      return JSON.parse(B.replace(/^\)]}'[^\n]*\n/, ""));
    }
    e.parseSourceMapInput = j;
    function J(B, d, D) {
      if (d = d || "", B && (B[B.length - 1] !== "/" && d[0] !== "/" && (B += "/"), d = B + d), D) {
        var S = i(D);
        if (!S)
          throw new Error("sourceMapURL could not be parsed");
        if (S.path) {
          var x = S.path.lastIndexOf("/");
          x >= 0 && (S.path = S.path.substring(0, x + 1));
        }
        d = l(a(S), d);
      }
      return s(d);
    }
    e.computeSourceURL = J;
  }(ar)), ar;
}
var sr = {}, dn;
function mi() {
  if (dn)
    return sr;
  dn = 1;
  var e = kt(), t = Object.prototype.hasOwnProperty, r = typeof Map < "u";
  function n() {
    this._array = [], this._set = r ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  return n.fromArray = function(a, s) {
    for (var l = new n(), p = 0, m = a.length; p < m; p++)
      l.add(a[p], s);
    return l;
  }, n.prototype.size = function() {
    return r ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  }, n.prototype.add = function(a, s) {
    var l = r ? a : e.toSetString(a), p = r ? this.has(a) : t.call(this._set, l), m = this._array.length;
    (!p || s) && this._array.push(a), p || (r ? this._set.set(a, m) : this._set[l] = m);
  }, n.prototype.has = function(a) {
    if (r)
      return this._set.has(a);
    var s = e.toSetString(a);
    return t.call(this._set, s);
  }, n.prototype.indexOf = function(a) {
    if (r) {
      var s = this._set.get(a);
      if (s >= 0)
        return s;
    } else {
      var l = e.toSetString(a);
      if (t.call(this._set, l))
        return this._set[l];
    }
    throw new Error('"' + a + '" is not in the set.');
  }, n.prototype.at = function(a) {
    if (a >= 0 && a < this._array.length)
      return this._array[a];
    throw new Error("No element indexed by " + a);
  }, n.prototype.toArray = function() {
    return this._array.slice();
  }, sr.ArraySet = n, sr;
}
var or = {}, mn;
function as() {
  if (mn)
    return or;
  mn = 1;
  var e = kt();
  function t(n, i) {
    var a = n.generatedLine, s = i.generatedLine, l = n.generatedColumn, p = i.generatedColumn;
    return s > a || s == a && p >= l || e.compareByGeneratedPositionsInflated(n, i) <= 0;
  }
  function r() {
    this._array = [], this._sorted = !0, this._last = { generatedLine: -1, generatedColumn: 0 };
  }
  return r.prototype.unsortedForEach = function(i, a) {
    this._array.forEach(i, a);
  }, r.prototype.add = function(i) {
    t(this._last, i) ? (this._last = i, this._array.push(i)) : (this._sorted = !1, this._array.push(i));
  }, r.prototype.toArray = function() {
    return this._sorted || (this._array.sort(e.compareByGeneratedPositionsInflated), this._sorted = !0), this._array;
  }, or.MappingList = r, or;
}
var gn;
function gi() {
  if (gn)
    return ur;
  gn = 1;
  var e = di(), t = kt(), r = mi().ArraySet, n = as().MappingList;
  function i(a) {
    a || (a = {}), this._file = t.getArg(a, "file", null), this._sourceRoot = t.getArg(a, "sourceRoot", null), this._skipValidation = t.getArg(a, "skipValidation", !1), this._sources = new r(), this._names = new r(), this._mappings = new n(), this._sourcesContents = null;
  }
  return i.prototype._version = 3, i.fromSourceMap = function(s) {
    var l = s.sourceRoot, p = new i({
      file: s.file,
      sourceRoot: l
    });
    return s.eachMapping(function(m) {
      var g = {
        generated: {
          line: m.generatedLine,
          column: m.generatedColumn
        }
      };
      m.source != null && (g.source = m.source, l != null && (g.source = t.relative(l, g.source)), g.original = {
        line: m.originalLine,
        column: m.originalColumn
      }, m.name != null && (g.name = m.name)), p.addMapping(g);
    }), s.sources.forEach(function(m) {
      var g = m;
      l !== null && (g = t.relative(l, m)), p._sources.has(g) || p._sources.add(g);
      var y = s.sourceContentFor(m);
      y != null && p.setSourceContent(m, y);
    }), p;
  }, i.prototype.addMapping = function(s) {
    var l = t.getArg(s, "generated"), p = t.getArg(s, "original", null), m = t.getArg(s, "source", null), g = t.getArg(s, "name", null);
    this._skipValidation || this._validateMapping(l, p, m, g), m != null && (m = String(m), this._sources.has(m) || this._sources.add(m)), g != null && (g = String(g), this._names.has(g) || this._names.add(g)), this._mappings.add({
      generatedLine: l.line,
      generatedColumn: l.column,
      originalLine: p != null && p.line,
      originalColumn: p != null && p.column,
      source: m,
      name: g
    });
  }, i.prototype.setSourceContent = function(s, l) {
    var p = s;
    this._sourceRoot != null && (p = t.relative(this._sourceRoot, p)), l != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[t.toSetString(p)] = l) : this._sourcesContents && (delete this._sourcesContents[t.toSetString(p)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  }, i.prototype.applySourceMap = function(s, l, p) {
    var m = l;
    if (l == null) {
      if (s.file == null)
        throw new Error(
          `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
        );
      m = s.file;
    }
    var g = this._sourceRoot;
    g != null && (m = t.relative(g, m));
    var y = new r(), A = new r();
    this._mappings.unsortedForEach(function(v) {
      if (v.source === m && v.originalLine != null) {
        var F = s.originalPositionFor({
          line: v.originalLine,
          column: v.originalColumn
        });
        F.source != null && (v.source = F.source, p != null && (v.source = t.join(p, v.source)), g != null && (v.source = t.relative(g, v.source)), v.originalLine = F.line, v.originalColumn = F.column, F.name != null && (v.name = F.name));
      }
      var C = v.source;
      C != null && !y.has(C) && y.add(C);
      var _ = v.name;
      _ != null && !A.has(_) && A.add(_);
    }, this), this._sources = y, this._names = A, s.sources.forEach(function(v) {
      var F = s.sourceContentFor(v);
      F != null && (p != null && (v = t.join(p, v)), g != null && (v = t.relative(g, v)), this.setSourceContent(v, F));
    }, this);
  }, i.prototype._validateMapping = function(s, l, p, m) {
    if (l && typeof l.line != "number" && typeof l.column != "number")
      throw new Error(
        "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
      );
    if (!(s && "line" in s && "column" in s && s.line > 0 && s.column >= 0 && !l && !p && !m)) {
      if (s && "line" in s && "column" in s && l && "line" in l && "column" in l && s.line > 0 && s.column >= 0 && l.line > 0 && l.column >= 0 && p)
        return;
      throw new Error("Invalid mapping: " + JSON.stringify({
        generated: s,
        source: p,
        original: l,
        name: m
      }));
    }
  }, i.prototype._serializeMappings = function() {
    for (var s = 0, l = 1, p = 0, m = 0, g = 0, y = 0, A = "", v, F, C, _, R = this._mappings.toArray(), j = 0, J = R.length; j < J; j++) {
      if (F = R[j], v = "", F.generatedLine !== l)
        for (s = 0; F.generatedLine !== l; )
          v += ";", l++;
      else if (j > 0) {
        if (!t.compareByGeneratedPositionsInflated(F, R[j - 1]))
          continue;
        v += ",";
      }
      v += e.encode(F.generatedColumn - s), s = F.generatedColumn, F.source != null && (_ = this._sources.indexOf(F.source), v += e.encode(_ - y), y = _, v += e.encode(F.originalLine - 1 - m), m = F.originalLine - 1, v += e.encode(F.originalColumn - p), p = F.originalColumn, F.name != null && (C = this._names.indexOf(F.name), v += e.encode(C - g), g = C)), A += v;
    }
    return A;
  }, i.prototype._generateSourcesContent = function(s, l) {
    return s.map(function(p) {
      if (!this._sourcesContents)
        return null;
      l != null && (p = t.relative(l, p));
      var m = t.toSetString(p);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, m) ? this._sourcesContents[m] : null;
    }, this);
  }, i.prototype.toJSON = function() {
    var s = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    return this._file != null && (s.file = this._file), this._sourceRoot != null && (s.sourceRoot = this._sourceRoot), this._sourcesContents && (s.sourcesContent = this._generateSourcesContent(s.sources, s.sourceRoot)), s;
  }, i.prototype.toString = function() {
    return JSON.stringify(this.toJSON());
  }, ur.SourceMapGenerator = i, ur;
}
var Ft = {}, lr = {}, An;
function ss() {
  return An || (An = 1, function(e) {
    e.GREATEST_LOWER_BOUND = 1, e.LEAST_UPPER_BOUND = 2;
    function t(r, n, i, a, s, l) {
      var p = Math.floor((n - r) / 2) + r, m = s(i, a[p], !0);
      return m === 0 ? p : m > 0 ? n - p > 1 ? t(p, n, i, a, s, l) : l == e.LEAST_UPPER_BOUND ? n < a.length ? n : -1 : p : p - r > 1 ? t(r, p, i, a, s, l) : l == e.LEAST_UPPER_BOUND ? p : r < 0 ? -1 : r;
    }
    e.search = function(n, i, a, s) {
      if (i.length === 0)
        return -1;
      var l = t(
        -1,
        i.length,
        n,
        i,
        a,
        s || e.GREATEST_LOWER_BOUND
      );
      if (l < 0)
        return -1;
      for (; l - 1 >= 0 && a(i[l], i[l - 1], !0) === 0; )
        --l;
      return l;
    };
  }(lr)), lr;
}
var cr = {}, En;
function os() {
  if (En)
    return cr;
  En = 1;
  function e(n, i, a) {
    var s = n[i];
    n[i] = n[a], n[a] = s;
  }
  function t(n, i) {
    return Math.round(n + Math.random() * (i - n));
  }
  function r(n, i, a, s) {
    if (a < s) {
      var l = t(a, s), p = a - 1;
      e(n, l, s);
      for (var m = n[s], g = a; g < s; g++)
        i(n[g], m) <= 0 && (p += 1, e(n, p, g));
      e(n, p + 1, g);
      var y = p + 1;
      r(n, i, a, y - 1), r(n, i, y + 1, s);
    }
  }
  return cr.quickSort = function(n, i) {
    r(n, i, 0, n.length - 1);
  }, cr;
}
var Dn;
function ls() {
  if (Dn)
    return Ft;
  Dn = 1;
  var e = kt(), t = ss(), r = mi().ArraySet, n = di(), i = os().quickSort;
  function a(m, g) {
    var y = m;
    return typeof m == "string" && (y = e.parseSourceMapInput(m)), y.sections != null ? new p(y, g) : new s(y, g);
  }
  a.fromSourceMap = function(m, g) {
    return s.fromSourceMap(m, g);
  }, a.prototype._version = 3, a.prototype.__generatedMappings = null, Object.defineProperty(a.prototype, "_generatedMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings;
    }
  }), a.prototype.__originalMappings = null, Object.defineProperty(a.prototype, "_originalMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings;
    }
  }), a.prototype._charIsMappingSeparator = function(g, y) {
    var A = g.charAt(y);
    return A === ";" || A === ",";
  }, a.prototype._parseMappings = function(g, y) {
    throw new Error("Subclasses must implement _parseMappings");
  }, a.GENERATED_ORDER = 1, a.ORIGINAL_ORDER = 2, a.GREATEST_LOWER_BOUND = 1, a.LEAST_UPPER_BOUND = 2, a.prototype.eachMapping = function(g, y, A) {
    var v = y || null, F = A || a.GENERATED_ORDER, C;
    switch (F) {
      case a.GENERATED_ORDER:
        C = this._generatedMappings;
        break;
      case a.ORIGINAL_ORDER:
        C = this._originalMappings;
        break;
      default:
        throw new Error("Unknown order of iteration.");
    }
    var _ = this.sourceRoot;
    C.map(function(R) {
      var j = R.source === null ? null : this._sources.at(R.source);
      return j = e.computeSourceURL(_, j, this._sourceMapURL), {
        source: j,
        generatedLine: R.generatedLine,
        generatedColumn: R.generatedColumn,
        originalLine: R.originalLine,
        originalColumn: R.originalColumn,
        name: R.name === null ? null : this._names.at(R.name)
      };
    }, this).forEach(g, v);
  }, a.prototype.allGeneratedPositionsFor = function(g) {
    var y = e.getArg(g, "line"), A = {
      source: e.getArg(g, "source"),
      originalLine: y,
      originalColumn: e.getArg(g, "column", 0)
    };
    if (A.source = this._findSourceIndex(A.source), A.source < 0)
      return [];
    var v = [], F = this._findMapping(
      A,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      e.compareByOriginalPositions,
      t.LEAST_UPPER_BOUND
    );
    if (F >= 0) {
      var C = this._originalMappings[F];
      if (g.column === void 0)
        for (var _ = C.originalLine; C && C.originalLine === _; )
          v.push({
            line: e.getArg(C, "generatedLine", null),
            column: e.getArg(C, "generatedColumn", null),
            lastColumn: e.getArg(C, "lastGeneratedColumn", null)
          }), C = this._originalMappings[++F];
      else
        for (var R = C.originalColumn; C && C.originalLine === y && C.originalColumn == R; )
          v.push({
            line: e.getArg(C, "generatedLine", null),
            column: e.getArg(C, "generatedColumn", null),
            lastColumn: e.getArg(C, "lastGeneratedColumn", null)
          }), C = this._originalMappings[++F];
    }
    return v;
  }, Ft.SourceMapConsumer = a;
  function s(m, g) {
    var y = m;
    typeof m == "string" && (y = e.parseSourceMapInput(m));
    var A = e.getArg(y, "version"), v = e.getArg(y, "sources"), F = e.getArg(y, "names", []), C = e.getArg(y, "sourceRoot", null), _ = e.getArg(y, "sourcesContent", null), R = e.getArg(y, "mappings"), j = e.getArg(y, "file", null);
    if (A != this._version)
      throw new Error("Unsupported version: " + A);
    C && (C = e.normalize(C)), v = v.map(String).map(e.normalize).map(function(J) {
      return C && e.isAbsolute(C) && e.isAbsolute(J) ? e.relative(C, J) : J;
    }), this._names = r.fromArray(F.map(String), !0), this._sources = r.fromArray(v, !0), this._absoluteSources = this._sources.toArray().map(function(J) {
      return e.computeSourceURL(C, J, g);
    }), this.sourceRoot = C, this.sourcesContent = _, this._mappings = R, this._sourceMapURL = g, this.file = j;
  }
  s.prototype = Object.create(a.prototype), s.prototype.consumer = a, s.prototype._findSourceIndex = function(m) {
    var g = m;
    if (this.sourceRoot != null && (g = e.relative(this.sourceRoot, g)), this._sources.has(g))
      return this._sources.indexOf(g);
    var y;
    for (y = 0; y < this._absoluteSources.length; ++y)
      if (this._absoluteSources[y] == m)
        return y;
    return -1;
  }, s.fromSourceMap = function(g, y) {
    var A = Object.create(s.prototype), v = A._names = r.fromArray(g._names.toArray(), !0), F = A._sources = r.fromArray(g._sources.toArray(), !0);
    A.sourceRoot = g._sourceRoot, A.sourcesContent = g._generateSourcesContent(
      A._sources.toArray(),
      A.sourceRoot
    ), A.file = g._file, A._sourceMapURL = y, A._absoluteSources = A._sources.toArray().map(function(D) {
      return e.computeSourceURL(A.sourceRoot, D, y);
    });
    for (var C = g._mappings.toArray().slice(), _ = A.__generatedMappings = [], R = A.__originalMappings = [], j = 0, J = C.length; j < J; j++) {
      var B = C[j], d = new l();
      d.generatedLine = B.generatedLine, d.generatedColumn = B.generatedColumn, B.source && (d.source = F.indexOf(B.source), d.originalLine = B.originalLine, d.originalColumn = B.originalColumn, B.name && (d.name = v.indexOf(B.name)), R.push(d)), _.push(d);
    }
    return i(A.__originalMappings, e.compareByOriginalPositions), A;
  }, s.prototype._version = 3, Object.defineProperty(s.prototype, "sources", {
    get: function() {
      return this._absoluteSources.slice();
    }
  });
  function l() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
  }
  s.prototype._parseMappings = function(g, y) {
    for (var A = 1, v = 0, F = 0, C = 0, _ = 0, R = 0, j = g.length, J = 0, B = {}, d = {}, D = [], S = [], x, G, z, V, Q; J < j; )
      if (g.charAt(J) === ";")
        A++, J++, v = 0;
      else if (g.charAt(J) === ",")
        J++;
      else {
        for (x = new l(), x.generatedLine = A, V = J; V < j && !this._charIsMappingSeparator(g, V); V++)
          ;
        if (G = g.slice(J, V), z = B[G], z)
          J += G.length;
        else {
          for (z = []; J < V; )
            n.decode(g, J, d), Q = d.value, J = d.rest, z.push(Q);
          if (z.length === 2)
            throw new Error("Found a source, but no line and column");
          if (z.length === 3)
            throw new Error("Found a source and line, but no column");
          B[G] = z;
        }
        x.generatedColumn = v + z[0], v = x.generatedColumn, z.length > 1 && (x.source = _ + z[1], _ += z[1], x.originalLine = F + z[2], F = x.originalLine, x.originalLine += 1, x.originalColumn = C + z[3], C = x.originalColumn, z.length > 4 && (x.name = R + z[4], R += z[4])), S.push(x), typeof x.originalLine == "number" && D.push(x);
      }
    i(S, e.compareByGeneratedPositionsDeflated), this.__generatedMappings = S, i(D, e.compareByOriginalPositions), this.__originalMappings = D;
  }, s.prototype._findMapping = function(g, y, A, v, F, C) {
    if (g[A] <= 0)
      throw new TypeError("Line must be greater than or equal to 1, got " + g[A]);
    if (g[v] < 0)
      throw new TypeError("Column must be greater than or equal to 0, got " + g[v]);
    return t.search(g, y, F, C);
  }, s.prototype.computeColumnSpans = function() {
    for (var g = 0; g < this._generatedMappings.length; ++g) {
      var y = this._generatedMappings[g];
      if (g + 1 < this._generatedMappings.length) {
        var A = this._generatedMappings[g + 1];
        if (y.generatedLine === A.generatedLine) {
          y.lastGeneratedColumn = A.generatedColumn - 1;
          continue;
        }
      }
      y.lastGeneratedColumn = 1 / 0;
    }
  }, s.prototype.originalPositionFor = function(g) {
    var y = {
      generatedLine: e.getArg(g, "line"),
      generatedColumn: e.getArg(g, "column")
    }, A = this._findMapping(
      y,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      e.compareByGeneratedPositionsDeflated,
      e.getArg(g, "bias", a.GREATEST_LOWER_BOUND)
    );
    if (A >= 0) {
      var v = this._generatedMappings[A];
      if (v.generatedLine === y.generatedLine) {
        var F = e.getArg(v, "source", null);
        F !== null && (F = this._sources.at(F), F = e.computeSourceURL(this.sourceRoot, F, this._sourceMapURL));
        var C = e.getArg(v, "name", null);
        return C !== null && (C = this._names.at(C)), {
          source: F,
          line: e.getArg(v, "originalLine", null),
          column: e.getArg(v, "originalColumn", null),
          name: C
        };
      }
    }
    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, s.prototype.hasContentsOfAllSources = function() {
    return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(g) {
      return g == null;
    }) : !1;
  }, s.prototype.sourceContentFor = function(g, y) {
    if (!this.sourcesContent)
      return null;
    var A = this._findSourceIndex(g);
    if (A >= 0)
      return this.sourcesContent[A];
    var v = g;
    this.sourceRoot != null && (v = e.relative(this.sourceRoot, v));
    var F;
    if (this.sourceRoot != null && (F = e.urlParse(this.sourceRoot))) {
      var C = v.replace(/^file:\/\//, "");
      if (F.scheme == "file" && this._sources.has(C))
        return this.sourcesContent[this._sources.indexOf(C)];
      if ((!F.path || F.path == "/") && this._sources.has("/" + v))
        return this.sourcesContent[this._sources.indexOf("/" + v)];
    }
    if (y)
      return null;
    throw new Error('"' + v + '" is not in the SourceMap.');
  }, s.prototype.generatedPositionFor = function(g) {
    var y = e.getArg(g, "source");
    if (y = this._findSourceIndex(y), y < 0)
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    var A = {
      source: y,
      originalLine: e.getArg(g, "line"),
      originalColumn: e.getArg(g, "column")
    }, v = this._findMapping(
      A,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      e.compareByOriginalPositions,
      e.getArg(g, "bias", a.GREATEST_LOWER_BOUND)
    );
    if (v >= 0) {
      var F = this._originalMappings[v];
      if (F.source === A.source)
        return {
          line: e.getArg(F, "generatedLine", null),
          column: e.getArg(F, "generatedColumn", null),
          lastColumn: e.getArg(F, "lastGeneratedColumn", null)
        };
    }
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  }, Ft.BasicSourceMapConsumer = s;
  function p(m, g) {
    var y = m;
    typeof m == "string" && (y = e.parseSourceMapInput(m));
    var A = e.getArg(y, "version"), v = e.getArg(y, "sections");
    if (A != this._version)
      throw new Error("Unsupported version: " + A);
    this._sources = new r(), this._names = new r();
    var F = {
      line: -1,
      column: 0
    };
    this._sections = v.map(function(C) {
      if (C.url)
        throw new Error("Support for url field in sections not implemented.");
      var _ = e.getArg(C, "offset"), R = e.getArg(_, "line"), j = e.getArg(_, "column");
      if (R < F.line || R === F.line && j < F.column)
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return F = _, {
        generatedOffset: {
          generatedLine: R + 1,
          generatedColumn: j + 1
        },
        consumer: new a(e.getArg(C, "map"), g)
      };
    });
  }
  return p.prototype = Object.create(a.prototype), p.prototype.constructor = a, p.prototype._version = 3, Object.defineProperty(p.prototype, "sources", {
    get: function() {
      for (var m = [], g = 0; g < this._sections.length; g++)
        for (var y = 0; y < this._sections[g].consumer.sources.length; y++)
          m.push(this._sections[g].consumer.sources[y]);
      return m;
    }
  }), p.prototype.originalPositionFor = function(g) {
    var y = {
      generatedLine: e.getArg(g, "line"),
      generatedColumn: e.getArg(g, "column")
    }, A = t.search(
      y,
      this._sections,
      function(F, C) {
        var _ = F.generatedLine - C.generatedOffset.generatedLine;
        return _ || F.generatedColumn - C.generatedOffset.generatedColumn;
      }
    ), v = this._sections[A];
    return v ? v.consumer.originalPositionFor({
      line: y.generatedLine - (v.generatedOffset.generatedLine - 1),
      column: y.generatedColumn - (v.generatedOffset.generatedLine === y.generatedLine ? v.generatedOffset.generatedColumn - 1 : 0),
      bias: g.bias
    }) : {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, p.prototype.hasContentsOfAllSources = function() {
    return this._sections.every(function(g) {
      return g.consumer.hasContentsOfAllSources();
    });
  }, p.prototype.sourceContentFor = function(g, y) {
    for (var A = 0; A < this._sections.length; A++) {
      var v = this._sections[A], F = v.consumer.sourceContentFor(g, !0);
      if (F)
        return F;
    }
    if (y)
      return null;
    throw new Error('"' + g + '" is not in the SourceMap.');
  }, p.prototype.generatedPositionFor = function(g) {
    for (var y = 0; y < this._sections.length; y++) {
      var A = this._sections[y];
      if (A.consumer._findSourceIndex(e.getArg(g, "source")) !== -1) {
        var v = A.consumer.generatedPositionFor(g);
        if (v) {
          var F = {
            line: v.line + (A.generatedOffset.generatedLine - 1),
            column: v.column + (A.generatedOffset.generatedLine === v.line ? A.generatedOffset.generatedColumn - 1 : 0)
          };
          return F;
        }
      }
    }
    return {
      line: null,
      column: null
    };
  }, p.prototype._parseMappings = function(g, y) {
    this.__generatedMappings = [], this.__originalMappings = [];
    for (var A = 0; A < this._sections.length; A++)
      for (var v = this._sections[A], F = v.consumer._generatedMappings, C = 0; C < F.length; C++) {
        var _ = F[C], R = v.consumer._sources.at(_.source);
        R = e.computeSourceURL(v.consumer.sourceRoot, R, this._sourceMapURL), this._sources.add(R), R = this._sources.indexOf(R);
        var j = null;
        _.name && (j = v.consumer._names.at(_.name), this._names.add(j), j = this._names.indexOf(j));
        var J = {
          source: R,
          generatedLine: _.generatedLine + (v.generatedOffset.generatedLine - 1),
          generatedColumn: _.generatedColumn + (v.generatedOffset.generatedLine === _.generatedLine ? v.generatedOffset.generatedColumn - 1 : 0),
          originalLine: _.originalLine,
          originalColumn: _.originalColumn,
          name: j
        };
        this.__generatedMappings.push(J), typeof J.originalLine == "number" && this.__originalMappings.push(J);
      }
    i(this.__generatedMappings, e.compareByGeneratedPositionsDeflated), i(this.__originalMappings, e.compareByOriginalPositions);
  }, Ft.IndexedSourceMapConsumer = p, Ft;
}
var fr = {}, Cn;
function cs() {
  if (Cn)
    return fr;
  Cn = 1;
  var e = gi().SourceMapGenerator, t = kt(), r = /(\r?\n)/, n = 10, i = "$$$isSourceNode$$$";
  function a(s, l, p, m, g) {
    this.children = [], this.sourceContents = {}, this.line = s == null ? null : s, this.column = l == null ? null : l, this.source = p == null ? null : p, this.name = g == null ? null : g, this[i] = !0, m != null && this.add(m);
  }
  return a.fromStringWithSourceMap = function(l, p, m) {
    var g = new a(), y = l.split(r), A = 0, v = function() {
      var j = B(), J = B() || "";
      return j + J;
      function B() {
        return A < y.length ? y[A++] : void 0;
      }
    }, F = 1, C = 0, _ = null;
    return p.eachMapping(function(j) {
      if (_ !== null)
        if (F < j.generatedLine)
          R(_, v()), F++, C = 0;
        else {
          var J = y[A] || "", B = J.substr(0, j.generatedColumn - C);
          y[A] = J.substr(j.generatedColumn - C), C = j.generatedColumn, R(_, B), _ = j;
          return;
        }
      for (; F < j.generatedLine; )
        g.add(v()), F++;
      if (C < j.generatedColumn) {
        var J = y[A] || "";
        g.add(J.substr(0, j.generatedColumn)), y[A] = J.substr(j.generatedColumn), C = j.generatedColumn;
      }
      _ = j;
    }, this), A < y.length && (_ && R(_, v()), g.add(y.splice(A).join(""))), p.sources.forEach(function(j) {
      var J = p.sourceContentFor(j);
      J != null && (m != null && (j = t.join(m, j)), g.setSourceContent(j, J));
    }), g;
    function R(j, J) {
      if (j === null || j.source === void 0)
        g.add(J);
      else {
        var B = m ? t.join(m, j.source) : j.source;
        g.add(new a(
          j.originalLine,
          j.originalColumn,
          B,
          J,
          j.name
        ));
      }
    }
  }, a.prototype.add = function(l) {
    if (Array.isArray(l))
      l.forEach(function(p) {
        this.add(p);
      }, this);
    else if (l[i] || typeof l == "string")
      l && this.children.push(l);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + l
      );
    return this;
  }, a.prototype.prepend = function(l) {
    if (Array.isArray(l))
      for (var p = l.length - 1; p >= 0; p--)
        this.prepend(l[p]);
    else if (l[i] || typeof l == "string")
      this.children.unshift(l);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + l
      );
    return this;
  }, a.prototype.walk = function(l) {
    for (var p, m = 0, g = this.children.length; m < g; m++)
      p = this.children[m], p[i] ? p.walk(l) : p !== "" && l(p, {
        source: this.source,
        line: this.line,
        column: this.column,
        name: this.name
      });
  }, a.prototype.join = function(l) {
    var p, m, g = this.children.length;
    if (g > 0) {
      for (p = [], m = 0; m < g - 1; m++)
        p.push(this.children[m]), p.push(l);
      p.push(this.children[m]), this.children = p;
    }
    return this;
  }, a.prototype.replaceRight = function(l, p) {
    var m = this.children[this.children.length - 1];
    return m[i] ? m.replaceRight(l, p) : typeof m == "string" ? this.children[this.children.length - 1] = m.replace(l, p) : this.children.push("".replace(l, p)), this;
  }, a.prototype.setSourceContent = function(l, p) {
    this.sourceContents[t.toSetString(l)] = p;
  }, a.prototype.walkSourceContents = function(l) {
    for (var p = 0, m = this.children.length; p < m; p++)
      this.children[p][i] && this.children[p].walkSourceContents(l);
    for (var g = Object.keys(this.sourceContents), p = 0, m = g.length; p < m; p++)
      l(t.fromSetString(g[p]), this.sourceContents[g[p]]);
  }, a.prototype.toString = function() {
    var l = "";
    return this.walk(function(p) {
      l += p;
    }), l;
  }, a.prototype.toStringWithSourceMap = function(l) {
    var p = {
      code: "",
      line: 1,
      column: 0
    }, m = new e(l), g = !1, y = null, A = null, v = null, F = null;
    return this.walk(function(C, _) {
      p.code += C, _.source !== null && _.line !== null && _.column !== null ? ((y !== _.source || A !== _.line || v !== _.column || F !== _.name) && m.addMapping({
        source: _.source,
        original: {
          line: _.line,
          column: _.column
        },
        generated: {
          line: p.line,
          column: p.column
        },
        name: _.name
      }), y = _.source, A = _.line, v = _.column, F = _.name, g = !0) : g && (m.addMapping({
        generated: {
          line: p.line,
          column: p.column
        }
      }), y = null, g = !1);
      for (var R = 0, j = C.length; R < j; R++)
        C.charCodeAt(R) === n ? (p.line++, p.column = 0, R + 1 === j ? (y = null, g = !1) : g && m.addMapping({
          source: _.source,
          original: {
            line: _.line,
            column: _.column
          },
          generated: {
            line: p.line,
            column: p.column
          },
          name: _.name
        })) : p.column++;
    }), this.walkSourceContents(function(C, _) {
      m.setSourceContent(C, _);
    }), { code: p.code, map: m };
  }, fr.SourceNode = a, fr;
}
var yn;
function fs() {
  return yn || (yn = 1, xt.SourceMapGenerator = gi().SourceMapGenerator, xt.SourceMapConsumer = ls().SourceMapConsumer, xt.SourceNode = cs().SourceNode), xt;
}
const ps = "escodegen", hs = "ECMAScript code generator", ds = "http://github.com/estools/escodegen", ms = "escodegen.js", gs = {
  esgenerate: "./bin/esgenerate.js",
  escodegen: "./bin/escodegen.js"
}, As = [
  "LICENSE.BSD",
  "README.md",
  "bin",
  "escodegen.js",
  "package.json"
], Es = "2.0.0", Ds = {
  node: ">=6.0"
}, Cs = [
  {
    name: "Yusuke Suzuki",
    email: "utatane.tea@gmail.com",
    web: "http://github.com/Constellation"
  }
], ys = {
  type: "git",
  url: "http://github.com/estools/escodegen.git"
}, vs = {
  estraverse: "^5.2.0",
  esutils: "^2.0.2",
  esprima: "^4.0.1",
  optionator: "^0.8.1"
}, xs = {
  "source-map": "~0.6.1"
}, Fs = {
  acorn: "^7.3.1",
  bluebird: "^3.4.7",
  "bower-registry-client": "^1.0.0",
  chai: "^4.2.0",
  "chai-exclude": "^2.0.2",
  "commonjs-everywhere": "^0.9.7",
  gulp: "^3.8.10",
  "gulp-eslint": "^3.0.1",
  "gulp-mocha": "^3.0.1",
  semver: "^5.1.0"
}, bs = "BSD-2-Clause", Ss = {
  test: "gulp travis",
  "unit-test": "gulp test",
  lint: "gulp lint",
  release: "node tools/release.js",
  "build-min": "./node_modules/.bin/cjsify -ma path: tools/entry-point.js > escodegen.browser.min.js",
  build: "./node_modules/.bin/cjsify -a path: tools/entry-point.js > escodegen.browser.js"
}, _s = {
  name: ps,
  description: hs,
  homepage: ds,
  main: ms,
  bin: gs,
  files: As,
  version: Es,
  engines: Ds,
  maintainers: Cs,
  repository: ys,
  dependencies: vs,
  optionalDependencies: xs,
  devDependencies: Fs,
  license: bs,
  scripts: Ss
};
(function(e) {
  (function() {
    var t, r, n, i, a, s, l, p, m, g, y, A, v, F, C, _, R, j, J, B, d, D, S, x, G, z;
    a = hi, s = pt, t = a.Syntax;
    function V(u) {
      return _e.Expression.hasOwnProperty(u.type);
    }
    function Q(u) {
      return _e.Statement.hasOwnProperty(u.type);
    }
    r = {
      Sequence: 0,
      Yield: 1,
      Assignment: 1,
      Conditional: 2,
      ArrowFunction: 2,
      LogicalOR: 3,
      LogicalAND: 4,
      BitwiseOR: 5,
      BitwiseXOR: 6,
      BitwiseAND: 7,
      Equality: 8,
      Relational: 9,
      BitwiseSHIFT: 10,
      Additive: 11,
      Multiplicative: 12,
      Exponentiation: 13,
      Await: 14,
      Unary: 14,
      Postfix: 15,
      OptionalChaining: 16,
      Call: 17,
      New: 18,
      TaggedTemplate: 19,
      Member: 20,
      Primary: 21
    }, n = {
      "||": r.LogicalOR,
      "&&": r.LogicalAND,
      "|": r.BitwiseOR,
      "^": r.BitwiseXOR,
      "&": r.BitwiseAND,
      "==": r.Equality,
      "!=": r.Equality,
      "===": r.Equality,
      "!==": r.Equality,
      is: r.Equality,
      isnt: r.Equality,
      "<": r.Relational,
      ">": r.Relational,
      "<=": r.Relational,
      ">=": r.Relational,
      in: r.Relational,
      instanceof: r.Relational,
      "<<": r.BitwiseSHIFT,
      ">>": r.BitwiseSHIFT,
      ">>>": r.BitwiseSHIFT,
      "+": r.Additive,
      "-": r.Additive,
      "*": r.Multiplicative,
      "%": r.Multiplicative,
      "/": r.Multiplicative,
      "**": r.Exponentiation
    };
    var I = 1, te = 1 << 1, Ee = 1 << 2, re = 1 << 3, T = 1 << 4, P = 1 << 5, W = te | Ee, ne = I | te, U = I | te | Ee, ce = I, oe = Ee, Z = I | Ee, Y = I, b = I | P, w = 0, K = I | T, N = I | re;
    function k() {
      return {
        indent: null,
        base: null,
        parse: null,
        comment: !1,
        format: {
          indent: {
            style: "    ",
            base: 0,
            adjustMultilineComment: !1
          },
          newline: `
`,
          space: " ",
          json: !1,
          renumber: !1,
          hexadecimal: !1,
          quotes: "single",
          escapeless: !1,
          compact: !1,
          parentheses: !0,
          semicolons: !0,
          safeConcatenation: !1,
          preserveBlankLines: !1
        },
        moz: {
          comprehensionExpressionStartsWithAssignment: !1,
          starlessGenerator: !1
        },
        sourceMap: null,
        sourceMapRoot: null,
        sourceMapWithCode: !1,
        directive: !1,
        raw: !0,
        verbatim: null,
        sourceCode: null
      };
    }
    function L(u, c) {
      var o = "";
      for (c |= 0; c > 0; c >>>= 1, u += u)
        c & 1 && (o += u);
      return o;
    }
    function X(u) {
      return /[\r\n]/g.test(u);
    }
    function se(u) {
      var c = u.length;
      return c && s.code.isLineTerminator(u.charCodeAt(c - 1));
    }
    function de(u, c) {
      var o;
      for (o in c)
        c.hasOwnProperty(o) && (u[o] = c[o]);
      return u;
    }
    function Fe(u, c) {
      var o, f;
      function E(O) {
        return typeof O == "object" && O instanceof Object && !(O instanceof RegExp);
      }
      for (o in c)
        c.hasOwnProperty(o) && (f = c[o], E(f) ? E(u[o]) ? Fe(u[o], f) : u[o] = Fe({}, f) : u[o] = f);
      return u;
    }
    function Ge(u) {
      var c, o, f, E, O;
      if (u !== u)
        throw new Error("Numeric literal whose value is NaN");
      if (u < 0 || u === 0 && 1 / u < 0)
        throw new Error("Numeric literal whose value is negative");
      if (u === 1 / 0)
        return m ? "null" : g ? "1e400" : "1e+400";
      if (c = "" + u, !g || c.length < 3)
        return c;
      for (o = c.indexOf("."), !m && c.charCodeAt(0) === 48 && o === 1 && (o = 0, c = c.slice(1)), f = c, c = c.replace("e+", "e"), E = 0, (O = f.indexOf("e")) > 0 && (E = +f.slice(O + 1), f = f.slice(0, O)), o >= 0 && (E -= f.length - o - 1, f = +(f.slice(0, o) + f.slice(o + 1)) + ""), O = 0; f.charCodeAt(f.length + O - 1) === 48; )
        --O;
      return O !== 0 && (E -= O, f = f.slice(0, O)), E !== 0 && (f += "e" + E), (f.length < c.length || y && u > 1e12 && Math.floor(u) === u && (f = "0x" + u.toString(16)).length < c.length) && +f === u && (c = f), c;
    }
    function $r(u, c) {
      return (u & -2) === 8232 ? (c ? "u" : "\\u") + (u === 8232 ? "2028" : "2029") : u === 10 || u === 13 ? (c ? "" : "\\") + (u === 10 ? "n" : "r") : String.fromCharCode(u);
    }
    function hu(u) {
      var c, o, f, E, O, M, q, H;
      if (o = u.toString(), u.source) {
        if (c = o.match(/\/([^/]*)$/), !c)
          return o;
        for (f = c[1], o = "", q = !1, H = !1, E = 0, O = u.source.length; E < O; ++E)
          M = u.source.charCodeAt(E), H ? (o += $r(M, H), H = !1) : (q ? M === 93 && (q = !1) : M === 47 ? o += "\\" : M === 91 && (q = !0), o += $r(M, H), H = M === 92);
        return "/" + o + "/" + f;
      }
      return o;
    }
    function du(u, c) {
      var o;
      return u === 8 ? "\\b" : u === 12 ? "\\f" : u === 9 ? "\\t" : (o = u.toString(16).toUpperCase(), m || u > 255 ? "\\u" + "0000".slice(o.length) + o : u === 0 && !s.code.isDecimalDigit(c) ? "\\0" : u === 11 ? "\\x0B" : "\\x" + "00".slice(o.length) + o);
    }
    function mu(u) {
      if (u === 92)
        return "\\\\";
      if (u === 10)
        return "\\n";
      if (u === 13)
        return "\\r";
      if (u === 8232)
        return "\\u2028";
      if (u === 8233)
        return "\\u2029";
      throw new Error("Incorrectly classified character");
    }
    function gu(u) {
      var c, o, f, E;
      for (E = A === "double" ? '"' : "'", c = 0, o = u.length; c < o; ++c)
        if (f = u.charCodeAt(c), f === 39) {
          E = '"';
          break;
        } else if (f === 34) {
          E = "'";
          break;
        } else
          f === 92 && ++c;
      return E + u + E;
    }
    function Au(u) {
      var c = "", o, f, E, O = 0, M = 0, q, H;
      for (o = 0, f = u.length; o < f; ++o) {
        if (E = u.charCodeAt(o), E === 39)
          ++O;
        else if (E === 34)
          ++M;
        else if (E === 47 && m)
          c += "\\";
        else if (s.code.isLineTerminator(E) || E === 92) {
          c += mu(E);
          continue;
        } else if (!s.code.isIdentifierPartES5(E) && (m && E < 32 || !m && !v && (E < 32 || E > 126))) {
          c += du(E, u.charCodeAt(o + 1));
          continue;
        }
        c += String.fromCharCode(E);
      }
      if (q = !(A === "double" || A === "auto" && M < O), H = q ? "'" : '"', !(q ? O : M))
        return H + c + H;
      for (u = c, c = H, o = 0, f = u.length; o < f; ++o)
        E = u.charCodeAt(o), (E === 39 && q || E === 34 && !q) && (c += "\\"), c += String.fromCharCode(E);
      return c + H;
    }
    function Jr(u) {
      var c, o, f, E = "";
      for (c = 0, o = u.length; c < o; ++c)
        f = u[c], E += Array.isArray(f) ? Jr(f) : f;
      return E;
    }
    function De(u, c) {
      if (!D)
        return Array.isArray(u) ? Jr(u) : u;
      if (c == null) {
        if (u instanceof i)
          return u;
        c = {};
      }
      return c.loc == null ? new i(null, null, D, u, c.name || null) : new i(c.loc.start.line, c.loc.start.column, D === !0 ? c.loc.source || null : D, u, c.name || null);
    }
    function Te() {
      return C || " ";
    }
    function ie(u, c) {
      var o, f, E, O;
      return o = De(u).toString(), o.length === 0 ? [c] : (f = De(c).toString(), f.length === 0 ? [u] : (E = o.charCodeAt(o.length - 1), O = f.charCodeAt(0), (E === 43 || E === 45) && E === O || s.code.isIdentifierPartES5(E) && s.code.isIdentifierPartES5(O) || E === 47 && O === 105 ? [u, Te(), c] : s.code.isWhiteSpace(E) || s.code.isLineTerminator(E) || s.code.isWhiteSpace(O) || s.code.isLineTerminator(O) ? [u, c] : [u, C, c]));
    }
    function ke(u) {
      return [l, u];
    }
    function Se(u) {
      var c;
      c = l, l += p, u(l), l = c;
    }
    function Eu(u) {
      var c;
      for (c = u.length - 1; c >= 0 && !s.code.isLineTerminator(u.charCodeAt(c)); --c)
        ;
      return u.length - 1 - c;
    }
    function Du(u, c) {
      var o, f, E, O, M, q, H, pe;
      for (o = u.split(/\r\n|[\r\n]/), q = Number.MAX_VALUE, f = 1, E = o.length; f < E; ++f) {
        for (O = o[f], M = 0; M < O.length && s.code.isWhiteSpace(O.charCodeAt(M)); )
          ++M;
        q > M && (q = M);
      }
      for (typeof c < "u" ? (H = l, o[1][q] === "*" && (c += " "), l = c) : (q & 1 && --q, H = l), f = 1, E = o.length; f < E; ++f)
        pe = De(ke(o[f].slice(q))), o[f] = D ? pe.join("") : pe;
      return l = H, o.join(`
`);
    }
    function Ye(u, c) {
      if (u.type === "Line") {
        if (se(u.value))
          return "//" + u.value;
        var o = "//" + u.value;
        return x || (o += `
`), o;
      }
      return B.format.indent.adjustMultilineComment && /[\n\r]/.test(u.value) ? Du("/*" + u.value + "*/", c) : "/*" + u.value + "*/";
    }
    function Yr(u, c) {
      var o, f, E, O, M, q, H, pe, we, nt, lt, Qr, Xr, $e;
      if (u.leadingComments && u.leadingComments.length > 0) {
        if (O = c, x) {
          for (E = u.leadingComments[0], c = [], pe = E.extendedRange, we = E.range, lt = S.substring(pe[0], we[0]), $e = (lt.match(/\n/g) || []).length, $e > 0 ? (c.push(L(`
`, $e)), c.push(ke(Ye(E)))) : (c.push(lt), c.push(Ye(E))), nt = we, o = 1, f = u.leadingComments.length; o < f; o++)
            E = u.leadingComments[o], we = E.range, Qr = S.substring(nt[1], we[0]), $e = (Qr.match(/\n/g) || []).length, c.push(L(`
`, $e)), c.push(ke(Ye(E))), nt = we;
          Xr = S.substring(we[1], pe[1]), $e = (Xr.match(/\n/g) || []).length, c.push(L(`
`, $e));
        } else
          for (E = u.leadingComments[0], c = [], j && u.type === t.Program && u.body.length === 0 && c.push(`
`), c.push(Ye(E)), se(De(c).toString()) || c.push(`
`), o = 1, f = u.leadingComments.length; o < f; ++o)
            E = u.leadingComments[o], H = [Ye(E)], se(De(H).toString()) || H.push(`
`), c.push(ke(H));
        c.push(ke(O));
      }
      if (u.trailingComments)
        if (x)
          E = u.trailingComments[0], pe = E.extendedRange, we = E.range, lt = S.substring(pe[0], we[0]), $e = (lt.match(/\n/g) || []).length, $e > 0 ? (c.push(L(`
`, $e)), c.push(ke(Ye(E)))) : (c.push(lt), c.push(Ye(E)));
        else
          for (M = !se(De(c).toString()), q = L(" ", Eu(De([l, c, p]).toString())), o = 0, f = u.trailingComments.length; o < f; ++o)
            E = u.trailingComments[o], M ? (o === 0 ? c = [c, p] : c = [c, q], c.push(Ye(E, q))) : c = [c, ke(Ye(E))], o !== f - 1 && !se(De(c).toString()) && (c = [c, `
`]);
      return c;
    }
    function ot(u, c, o) {
      var f, E = 0;
      for (f = u; f < c; f++)
        S[f] === `
` && E++;
      for (f = 1; f < E; f++)
        o.push(F);
    }
    function Be(u, c, o) {
      return c < o ? ["(", u, ")"] : u;
    }
    function Hr(u) {
      var c, o, f;
      for (f = u.split(/\r\n|\n/), c = 1, o = f.length; c < o; c++)
        f[c] = F + l + f[c];
      return f;
    }
    function Cu(u, c) {
      var o, f, E;
      return o = u[B.verbatim], typeof o == "string" ? f = Be(Hr(o), r.Sequence, c) : (f = Hr(o.content), E = o.precedence != null ? o.precedence : r.Sequence, f = Be(f, E, c)), De(f, u);
    }
    function _e() {
    }
    _e.prototype.maybeBlock = function(u, c) {
      var o, f, E = this;
      return f = !B.comment || !u.leadingComments, u.type === t.BlockStatement && f ? [C, this.generateStatement(u, c)] : u.type === t.EmptyStatement && f ? ";" : (Se(function() {
        o = [
          F,
          ke(E.generateStatement(u, c))
        ];
      }), o);
    }, _e.prototype.maybeBlockSuffix = function(u, c) {
      var o = se(De(c).toString());
      return u.type === t.BlockStatement && (!B.comment || !u.leadingComments) && !o ? [c, C] : o ? [c, l] : [c, F, l];
    };
    function Ie(u) {
      return De(u.name, u);
    }
    function vt(u, c) {
      return u.async ? "async" + (c ? Te() : C) : "";
    }
    function It(u) {
      var c = u.generator && !B.moz.starlessGenerator;
      return c ? "*" + C : "";
    }
    function Kr(u) {
      var c = u.value, o = "";
      return c.async && (o += vt(c, !u.computed)), c.generator && (o += It(c) ? "*" : ""), o;
    }
    _e.prototype.generatePattern = function(u, c, o) {
      return u.type === t.Identifier ? Ie(u) : this.generateExpression(u, c, o);
    }, _e.prototype.generateFunctionParams = function(u) {
      var c, o, f, E;
      if (E = !1, u.type === t.ArrowFunctionExpression && !u.rest && (!u.defaults || u.defaults.length === 0) && u.params.length === 1 && u.params[0].type === t.Identifier)
        f = [vt(u, !0), Ie(u.params[0])];
      else {
        for (f = u.type === t.ArrowFunctionExpression ? [vt(u, !1)] : [], f.push("("), u.defaults && (E = !0), c = 0, o = u.params.length; c < o; ++c)
          E && u.defaults[c] ? f.push(this.generateAssignment(u.params[c], u.defaults[c], "=", r.Assignment, U)) : f.push(this.generatePattern(u.params[c], r.Assignment, U)), c + 1 < o && f.push("," + C);
        u.rest && (u.params.length && f.push("," + C), f.push("..."), f.push(Ie(u.rest))), f.push(")");
      }
      return f;
    }, _e.prototype.generateFunctionBody = function(u) {
      var c, o;
      return c = this.generateFunctionParams(u), u.type === t.ArrowFunctionExpression && (c.push(C), c.push("=>")), u.expression ? (c.push(C), o = this.generateExpression(u.body, r.Assignment, U), o.toString().charAt(0) === "{" && (o = ["(", o, ")"]), c.push(o)) : c.push(this.maybeBlock(u.body, N)), c;
    }, _e.prototype.generateIterationForStatement = function(u, c, o) {
      var f = ["for" + (c.await ? Te() + "await" : "") + C + "("], E = this;
      return Se(function() {
        c.left.type === t.VariableDeclaration ? Se(function() {
          f.push(c.left.kind + Te()), f.push(E.generateStatement(c.left.declarations[0], w));
        }) : f.push(E.generateExpression(c.left, r.Call, U)), f = ie(f, u), f = [ie(
          f,
          E.generateExpression(c.right, r.Assignment, U)
        ), ")"];
      }), f.push(this.maybeBlock(c.body, o)), f;
    }, _e.prototype.generatePropertyKey = function(u, c) {
      var o = [];
      return c && o.push("["), o.push(this.generateExpression(u, r.Assignment, U)), c && o.push("]"), o;
    }, _e.prototype.generateAssignment = function(u, c, o, f, E) {
      return r.Assignment < f && (E |= I), Be(
        [
          this.generateExpression(u, r.Call, E),
          C + o + C,
          this.generateExpression(c, r.Assignment, E)
        ],
        r.Assignment,
        f
      );
    }, _e.prototype.semicolon = function(u) {
      return !R && u & P ? "" : ";";
    }, _e.Statement = {
      BlockStatement: function(u, c) {
        var o, f, E = ["{", F], O = this;
        return Se(function() {
          u.body.length === 0 && x && (o = u.range, o[1] - o[0] > 2 && (f = S.substring(o[0] + 1, o[1] - 1), f[0] === `
` && (E = ["{"]), E.push(f)));
          var M, q, H, pe;
          for (pe = Y, c & re && (pe |= T), M = 0, q = u.body.length; M < q; ++M)
            x && (M === 0 && (u.body[0].leadingComments && (o = u.body[0].leadingComments[0].extendedRange, f = S.substring(o[0], o[1]), f[0] === `
` && (E = ["{"])), u.body[0].leadingComments || ot(u.range[0], u.body[0].range[0], E)), M > 0 && !u.body[M - 1].trailingComments && !u.body[M].leadingComments && ot(u.body[M - 1].range[1], u.body[M].range[0], E)), M === q - 1 && (pe |= P), u.body[M].leadingComments && x ? H = O.generateStatement(u.body[M], pe) : H = ke(O.generateStatement(u.body[M], pe)), E.push(H), se(De(H).toString()) || x && M < q - 1 && u.body[M + 1].leadingComments || E.push(F), x && M === q - 1 && (u.body[M].trailingComments || ot(u.body[M].range[1], u.range[1], E));
        }), E.push(ke("}")), E;
      },
      BreakStatement: function(u, c) {
        return u.label ? "break " + u.label.name + this.semicolon(c) : "break" + this.semicolon(c);
      },
      ContinueStatement: function(u, c) {
        return u.label ? "continue " + u.label.name + this.semicolon(c) : "continue" + this.semicolon(c);
      },
      ClassBody: function(u, c) {
        var o = ["{", F], f = this;
        return Se(function(E) {
          var O, M;
          for (O = 0, M = u.body.length; O < M; ++O)
            o.push(E), o.push(f.generateExpression(u.body[O], r.Sequence, U)), O + 1 < M && o.push(F);
        }), se(De(o).toString()) || o.push(F), o.push(l), o.push("}"), o;
      },
      ClassDeclaration: function(u, c) {
        var o, f;
        return o = ["class"], u.id && (o = ie(o, this.generateExpression(u.id, r.Sequence, U))), u.superClass && (f = ie("extends", this.generateExpression(u.superClass, r.Unary, U)), o = ie(o, f)), o.push(C), o.push(this.generateStatement(u.body, b)), o;
      },
      DirectiveStatement: function(u, c) {
        return B.raw && u.raw ? u.raw + this.semicolon(c) : gu(u.directive) + this.semicolon(c);
      },
      DoWhileStatement: function(u, c) {
        var o = ie("do", this.maybeBlock(u.body, Y));
        return o = this.maybeBlockSuffix(u.body, o), ie(o, [
          "while" + C + "(",
          this.generateExpression(u.test, r.Sequence, U),
          ")" + this.semicolon(c)
        ]);
      },
      CatchClause: function(u, c) {
        var o, f = this;
        return Se(function() {
          var E;
          u.param ? (o = [
            "catch" + C + "(",
            f.generateExpression(u.param, r.Sequence, U),
            ")"
          ], u.guard && (E = f.generateExpression(u.guard, r.Sequence, U), o.splice(2, 0, " if ", E))) : o = ["catch"];
        }), o.push(this.maybeBlock(u.body, Y)), o;
      },
      DebuggerStatement: function(u, c) {
        return "debugger" + this.semicolon(c);
      },
      EmptyStatement: function(u, c) {
        return ";";
      },
      ExportDefaultDeclaration: function(u, c) {
        var o = ["export"], f;
        return f = c & P ? b : Y, o = ie(o, "default"), Q(u.declaration) ? o = ie(o, this.generateStatement(u.declaration, f)) : o = ie(o, this.generateExpression(u.declaration, r.Assignment, U) + this.semicolon(c)), o;
      },
      ExportNamedDeclaration: function(u, c) {
        var o = ["export"], f, E = this;
        return f = c & P ? b : Y, u.declaration ? ie(o, this.generateStatement(u.declaration, f)) : (u.specifiers && (u.specifiers.length === 0 ? o = ie(o, "{" + C + "}") : u.specifiers[0].type === t.ExportBatchSpecifier ? o = ie(o, this.generateExpression(u.specifiers[0], r.Sequence, U)) : (o = ie(o, "{"), Se(function(O) {
          var M, q;
          for (o.push(F), M = 0, q = u.specifiers.length; M < q; ++M)
            o.push(O), o.push(E.generateExpression(u.specifiers[M], r.Sequence, U)), M + 1 < q && o.push("," + F);
        }), se(De(o).toString()) || o.push(F), o.push(l + "}")), u.source ? o = ie(o, [
          "from" + C,
          this.generateExpression(u.source, r.Sequence, U),
          this.semicolon(c)
        ]) : o.push(this.semicolon(c))), o);
      },
      ExportAllDeclaration: function(u, c) {
        return [
          "export" + C,
          "*" + C,
          "from" + C,
          this.generateExpression(u.source, r.Sequence, U),
          this.semicolon(c)
        ];
      },
      ExpressionStatement: function(u, c) {
        var o, f;
        function E(q) {
          var H;
          return q.slice(0, 5) !== "class" ? !1 : (H = q.charCodeAt(5), H === 123 || s.code.isWhiteSpace(H) || s.code.isLineTerminator(H));
        }
        function O(q) {
          var H;
          return q.slice(0, 8) !== "function" ? !1 : (H = q.charCodeAt(8), H === 40 || s.code.isWhiteSpace(H) || H === 42 || s.code.isLineTerminator(H));
        }
        function M(q) {
          var H, pe, we;
          if (q.slice(0, 5) !== "async" || !s.code.isWhiteSpace(q.charCodeAt(5)))
            return !1;
          for (pe = 6, we = q.length; pe < we && s.code.isWhiteSpace(q.charCodeAt(pe)); ++pe)
            ;
          return pe === we || q.slice(pe, pe + 8) !== "function" ? !1 : (H = q.charCodeAt(pe + 8), H === 40 || s.code.isWhiteSpace(H) || H === 42 || s.code.isLineTerminator(H));
        }
        return o = [this.generateExpression(u.expression, r.Sequence, U)], f = De(o).toString(), f.charCodeAt(0) === 123 || E(f) || O(f) || M(f) || J && c & T && u.expression.type === t.Literal && typeof u.expression.value == "string" ? o = ["(", o, ")" + this.semicolon(c)] : o.push(this.semicolon(c)), o;
      },
      ImportDeclaration: function(u, c) {
        var o, f, E = this;
        return u.specifiers.length === 0 ? [
          "import",
          C,
          this.generateExpression(u.source, r.Sequence, U),
          this.semicolon(c)
        ] : (o = [
          "import"
        ], f = 0, u.specifiers[f].type === t.ImportDefaultSpecifier && (o = ie(o, [
          this.generateExpression(u.specifiers[f], r.Sequence, U)
        ]), ++f), u.specifiers[f] && (f !== 0 && o.push(","), u.specifiers[f].type === t.ImportNamespaceSpecifier ? o = ie(o, [
          C,
          this.generateExpression(u.specifiers[f], r.Sequence, U)
        ]) : (o.push(C + "{"), u.specifiers.length - f === 1 ? (o.push(C), o.push(this.generateExpression(u.specifiers[f], r.Sequence, U)), o.push(C + "}" + C)) : (Se(function(O) {
          var M, q;
          for (o.push(F), M = f, q = u.specifiers.length; M < q; ++M)
            o.push(O), o.push(E.generateExpression(u.specifiers[M], r.Sequence, U)), M + 1 < q && o.push("," + F);
        }), se(De(o).toString()) || o.push(F), o.push(l + "}" + C)))), o = ie(o, [
          "from" + C,
          this.generateExpression(u.source, r.Sequence, U),
          this.semicolon(c)
        ]), o);
      },
      VariableDeclarator: function(u, c) {
        var o = c & I ? U : W;
        return u.init ? [
          this.generateExpression(u.id, r.Assignment, o),
          C,
          "=",
          C,
          this.generateExpression(u.init, r.Assignment, o)
        ] : this.generatePattern(u.id, r.Assignment, o);
      },
      VariableDeclaration: function(u, c) {
        var o, f, E, O, M, q = this;
        o = [u.kind], M = c & I ? Y : w;
        function H() {
          for (O = u.declarations[0], B.comment && O.leadingComments ? (o.push(`
`), o.push(ke(q.generateStatement(O, M)))) : (o.push(Te()), o.push(q.generateStatement(O, M))), f = 1, E = u.declarations.length; f < E; ++f)
            O = u.declarations[f], B.comment && O.leadingComments ? (o.push("," + F), o.push(ke(q.generateStatement(O, M)))) : (o.push("," + C), o.push(q.generateStatement(O, M)));
        }
        return u.declarations.length > 1 ? Se(H) : H(), o.push(this.semicolon(c)), o;
      },
      ThrowStatement: function(u, c) {
        return [ie(
          "throw",
          this.generateExpression(u.argument, r.Sequence, U)
        ), this.semicolon(c)];
      },
      TryStatement: function(u, c) {
        var o, f, E, O;
        if (o = ["try", this.maybeBlock(u.block, Y)], o = this.maybeBlockSuffix(u.block, o), u.handlers)
          for (f = 0, E = u.handlers.length; f < E; ++f)
            o = ie(o, this.generateStatement(u.handlers[f], Y)), (u.finalizer || f + 1 !== E) && (o = this.maybeBlockSuffix(u.handlers[f].body, o));
        else {
          for (O = u.guardedHandlers || [], f = 0, E = O.length; f < E; ++f)
            o = ie(o, this.generateStatement(O[f], Y)), (u.finalizer || f + 1 !== E) && (o = this.maybeBlockSuffix(O[f].body, o));
          if (u.handler)
            if (Array.isArray(u.handler))
              for (f = 0, E = u.handler.length; f < E; ++f)
                o = ie(o, this.generateStatement(u.handler[f], Y)), (u.finalizer || f + 1 !== E) && (o = this.maybeBlockSuffix(u.handler[f].body, o));
            else
              o = ie(o, this.generateStatement(u.handler, Y)), u.finalizer && (o = this.maybeBlockSuffix(u.handler.body, o));
        }
        return u.finalizer && (o = ie(o, ["finally", this.maybeBlock(u.finalizer, Y)])), o;
      },
      SwitchStatement: function(u, c) {
        var o, f, E, O, M, q = this;
        if (Se(function() {
          o = [
            "switch" + C + "(",
            q.generateExpression(u.discriminant, r.Sequence, U),
            ")" + C + "{" + F
          ];
        }), u.cases)
          for (M = Y, E = 0, O = u.cases.length; E < O; ++E)
            E === O - 1 && (M |= P), f = ke(this.generateStatement(u.cases[E], M)), o.push(f), se(De(f).toString()) || o.push(F);
        return o.push(ke("}")), o;
      },
      SwitchCase: function(u, c) {
        var o, f, E, O, M, q = this;
        return Se(function() {
          for (u.test ? o = [
            ie("case", q.generateExpression(u.test, r.Sequence, U)),
            ":"
          ] : o = ["default:"], E = 0, O = u.consequent.length, O && u.consequent[0].type === t.BlockStatement && (f = q.maybeBlock(u.consequent[0], Y), o.push(f), E = 1), E !== O && !se(De(o).toString()) && o.push(F), M = Y; E < O; ++E)
            E === O - 1 && c & P && (M |= P), f = ke(q.generateStatement(u.consequent[E], M)), o.push(f), E + 1 !== O && !se(De(f).toString()) && o.push(F);
        }), o;
      },
      IfStatement: function(u, c) {
        var o, f, E, O = this;
        return Se(function() {
          o = [
            "if" + C + "(",
            O.generateExpression(u.test, r.Sequence, U),
            ")"
          ];
        }), E = c & P, f = Y, E && (f |= P), u.alternate ? (o.push(this.maybeBlock(u.consequent, Y)), o = this.maybeBlockSuffix(u.consequent, o), u.alternate.type === t.IfStatement ? o = ie(o, ["else ", this.generateStatement(u.alternate, f)]) : o = ie(o, ie("else", this.maybeBlock(u.alternate, f)))) : o.push(this.maybeBlock(u.consequent, f)), o;
      },
      ForStatement: function(u, c) {
        var o, f = this;
        return Se(function() {
          o = ["for" + C + "("], u.init ? u.init.type === t.VariableDeclaration ? o.push(f.generateStatement(u.init, w)) : (o.push(f.generateExpression(u.init, r.Sequence, W)), o.push(";")) : o.push(";"), u.test && (o.push(C), o.push(f.generateExpression(u.test, r.Sequence, U))), o.push(";"), u.update && (o.push(C), o.push(f.generateExpression(u.update, r.Sequence, U))), o.push(")");
        }), o.push(this.maybeBlock(u.body, c & P ? b : Y)), o;
      },
      ForInStatement: function(u, c) {
        return this.generateIterationForStatement("in", u, c & P ? b : Y);
      },
      ForOfStatement: function(u, c) {
        return this.generateIterationForStatement("of", u, c & P ? b : Y);
      },
      LabeledStatement: function(u, c) {
        return [u.label.name + ":", this.maybeBlock(u.body, c & P ? b : Y)];
      },
      Program: function(u, c) {
        var o, f, E, O, M;
        for (O = u.body.length, o = [j && O > 0 ? `
` : ""], M = K, E = 0; E < O; ++E)
          !j && E === O - 1 && (M |= P), x && (E === 0 && (u.body[0].leadingComments || ot(u.range[0], u.body[E].range[0], o)), E > 0 && !u.body[E - 1].trailingComments && !u.body[E].leadingComments && ot(u.body[E - 1].range[1], u.body[E].range[0], o)), f = ke(this.generateStatement(u.body[E], M)), o.push(f), E + 1 < O && !se(De(f).toString()) && (x && u.body[E + 1].leadingComments || o.push(F)), x && E === O - 1 && (u.body[E].trailingComments || ot(u.body[E].range[1], u.range[1], o));
        return o;
      },
      FunctionDeclaration: function(u, c) {
        return [
          vt(u, !0),
          "function",
          It(u) || Te(),
          u.id ? Ie(u.id) : "",
          this.generateFunctionBody(u)
        ];
      },
      ReturnStatement: function(u, c) {
        return u.argument ? [ie(
          "return",
          this.generateExpression(u.argument, r.Sequence, U)
        ), this.semicolon(c)] : ["return" + this.semicolon(c)];
      },
      WhileStatement: function(u, c) {
        var o, f = this;
        return Se(function() {
          o = [
            "while" + C + "(",
            f.generateExpression(u.test, r.Sequence, U),
            ")"
          ];
        }), o.push(this.maybeBlock(u.body, c & P ? b : Y)), o;
      },
      WithStatement: function(u, c) {
        var o, f = this;
        return Se(function() {
          o = [
            "with" + C + "(",
            f.generateExpression(u.object, r.Sequence, U),
            ")"
          ];
        }), o.push(this.maybeBlock(u.body, c & P ? b : Y)), o;
      }
    }, de(_e.prototype, _e.Statement), _e.Expression = {
      SequenceExpression: function(u, c, o) {
        var f, E, O;
        for (r.Sequence < c && (o |= I), f = [], E = 0, O = u.expressions.length; E < O; ++E)
          f.push(this.generateExpression(u.expressions[E], r.Assignment, o)), E + 1 < O && f.push("," + C);
        return Be(f, r.Sequence, c);
      },
      AssignmentExpression: function(u, c, o) {
        return this.generateAssignment(u.left, u.right, u.operator, c, o);
      },
      ArrowFunctionExpression: function(u, c, o) {
        return Be(this.generateFunctionBody(u), r.ArrowFunction, c);
      },
      ConditionalExpression: function(u, c, o) {
        return r.Conditional < c && (o |= I), Be(
          [
            this.generateExpression(u.test, r.LogicalOR, o),
            C + "?" + C,
            this.generateExpression(u.consequent, r.Assignment, o),
            C + ":" + C,
            this.generateExpression(u.alternate, r.Assignment, o)
          ],
          r.Conditional,
          c
        );
      },
      LogicalExpression: function(u, c, o) {
        return this.BinaryExpression(u, c, o);
      },
      BinaryExpression: function(u, c, o) {
        var f, E, O, M, q, H;
        return M = n[u.operator], E = u.operator === "**" ? r.Postfix : M, O = u.operator === "**" ? M : M + 1, M < c && (o |= I), q = this.generateExpression(u.left, E, o), H = q.toString(), H.charCodeAt(H.length - 1) === 47 && s.code.isIdentifierPartES5(u.operator.charCodeAt(0)) ? f = [q, Te(), u.operator] : f = ie(q, u.operator), q = this.generateExpression(u.right, O, o), u.operator === "/" && q.toString().charAt(0) === "/" || u.operator.slice(-1) === "<" && q.toString().slice(0, 3) === "!--" ? (f.push(Te()), f.push(q)) : f = ie(f, q), u.operator === "in" && !(o & I) ? ["(", f, ")"] : Be(f, M, c);
      },
      CallExpression: function(u, c, o) {
        var f, E, O;
        for (f = [this.generateExpression(u.callee, r.Call, ne)], u.optional && f.push("?."), f.push("("), E = 0, O = u.arguments.length; E < O; ++E)
          f.push(this.generateExpression(u.arguments[E], r.Assignment, U)), E + 1 < O && f.push("," + C);
        return f.push(")"), o & te ? Be(f, r.Call, c) : ["(", f, ")"];
      },
      ChainExpression: function(u, c, o) {
        r.OptionalChaining < c && (o |= te);
        var f = this.generateExpression(u.expression, r.OptionalChaining, o);
        return Be(f, r.OptionalChaining, c);
      },
      NewExpression: function(u, c, o) {
        var f, E, O, M, q;
        if (E = u.arguments.length, q = o & Ee && !_ && E === 0 ? Z : ce, f = ie(
          "new",
          this.generateExpression(u.callee, r.New, q)
        ), !(o & Ee) || _ || E > 0) {
          for (f.push("("), O = 0, M = E; O < M; ++O)
            f.push(this.generateExpression(u.arguments[O], r.Assignment, U)), O + 1 < M && f.push("," + C);
          f.push(")");
        }
        return Be(f, r.New, c);
      },
      MemberExpression: function(u, c, o) {
        var f, E;
        return f = [this.generateExpression(u.object, r.Call, o & te ? ne : ce)], u.computed ? (u.optional && f.push("?."), f.push("["), f.push(this.generateExpression(u.property, r.Sequence, o & te ? U : Z)), f.push("]")) : (!u.optional && u.object.type === t.Literal && typeof u.object.value == "number" && (E = De(f).toString(), E.indexOf(".") < 0 && !/[eExX]/.test(E) && s.code.isDecimalDigit(E.charCodeAt(E.length - 1)) && !(E.length >= 2 && E.charCodeAt(0) === 48) && f.push(" ")), f.push(u.optional ? "?." : "."), f.push(Ie(u.property))), Be(f, r.Member, c);
      },
      MetaProperty: function(u, c, o) {
        var f;
        return f = [], f.push(typeof u.meta == "string" ? u.meta : Ie(u.meta)), f.push("."), f.push(typeof u.property == "string" ? u.property : Ie(u.property)), Be(f, r.Member, c);
      },
      UnaryExpression: function(u, c, o) {
        var f, E, O, M, q;
        return E = this.generateExpression(u.argument, r.Unary, U), C === "" ? f = ie(u.operator, E) : (f = [u.operator], u.operator.length > 2 ? f = ie(f, E) : (M = De(f).toString(), q = M.charCodeAt(M.length - 1), O = E.toString().charCodeAt(0), ((q === 43 || q === 45) && q === O || s.code.isIdentifierPartES5(q) && s.code.isIdentifierPartES5(O)) && f.push(Te()), f.push(E))), Be(f, r.Unary, c);
      },
      YieldExpression: function(u, c, o) {
        var f;
        return u.delegate ? f = "yield*" : f = "yield", u.argument && (f = ie(
          f,
          this.generateExpression(u.argument, r.Yield, U)
        )), Be(f, r.Yield, c);
      },
      AwaitExpression: function(u, c, o) {
        var f = ie(
          u.all ? "await*" : "await",
          this.generateExpression(u.argument, r.Await, U)
        );
        return Be(f, r.Await, c);
      },
      UpdateExpression: function(u, c, o) {
        return u.prefix ? Be(
          [
            u.operator,
            this.generateExpression(u.argument, r.Unary, U)
          ],
          r.Unary,
          c
        ) : Be(
          [
            this.generateExpression(u.argument, r.Postfix, U),
            u.operator
          ],
          r.Postfix,
          c
        );
      },
      FunctionExpression: function(u, c, o) {
        var f = [
          vt(u, !0),
          "function"
        ];
        return u.id ? (f.push(It(u) || Te()), f.push(Ie(u.id))) : f.push(It(u) || C), f.push(this.generateFunctionBody(u)), f;
      },
      ArrayPattern: function(u, c, o) {
        return this.ArrayExpression(u, c, o, !0);
      },
      ArrayExpression: function(u, c, o, f) {
        var E, O, M = this;
        return u.elements.length ? (O = f ? !1 : u.elements.length > 1, E = ["[", O ? F : ""], Se(function(q) {
          var H, pe;
          for (H = 0, pe = u.elements.length; H < pe; ++H)
            u.elements[H] ? (E.push(O ? q : ""), E.push(M.generateExpression(u.elements[H], r.Assignment, U))) : (O && E.push(q), H + 1 === pe && E.push(",")), H + 1 < pe && E.push("," + (O ? F : C));
        }), O && !se(De(E).toString()) && E.push(F), E.push(O ? l : ""), E.push("]"), E) : "[]";
      },
      RestElement: function(u, c, o) {
        return "..." + this.generatePattern(u.argument);
      },
      ClassExpression: function(u, c, o) {
        var f, E;
        return f = ["class"], u.id && (f = ie(f, this.generateExpression(u.id, r.Sequence, U))), u.superClass && (E = ie("extends", this.generateExpression(u.superClass, r.Unary, U)), f = ie(f, E)), f.push(C), f.push(this.generateStatement(u.body, b)), f;
      },
      MethodDefinition: function(u, c, o) {
        var f, E;
        return u.static ? f = ["static" + C] : f = [], u.kind === "get" || u.kind === "set" ? E = [
          ie(u.kind, this.generatePropertyKey(u.key, u.computed)),
          this.generateFunctionBody(u.value)
        ] : E = [
          Kr(u),
          this.generatePropertyKey(u.key, u.computed),
          this.generateFunctionBody(u.value)
        ], ie(f, E);
      },
      Property: function(u, c, o) {
        return u.kind === "get" || u.kind === "set" ? [
          u.kind,
          Te(),
          this.generatePropertyKey(u.key, u.computed),
          this.generateFunctionBody(u.value)
        ] : u.shorthand ? u.value.type === "AssignmentPattern" ? this.AssignmentPattern(u.value, r.Sequence, U) : this.generatePropertyKey(u.key, u.computed) : u.method ? [
          Kr(u),
          this.generatePropertyKey(u.key, u.computed),
          this.generateFunctionBody(u.value)
        ] : [
          this.generatePropertyKey(u.key, u.computed),
          ":" + C,
          this.generateExpression(u.value, r.Assignment, U)
        ];
      },
      ObjectExpression: function(u, c, o) {
        var f, E, O, M = this;
        return u.properties.length ? (f = u.properties.length > 1, Se(function() {
          O = M.generateExpression(u.properties[0], r.Sequence, U);
        }), !f && !X(De(O).toString()) ? ["{", C, O, C, "}"] : (Se(function(q) {
          var H, pe;
          if (E = ["{", F, q, O], f)
            for (E.push("," + F), H = 1, pe = u.properties.length; H < pe; ++H)
              E.push(q), E.push(M.generateExpression(u.properties[H], r.Sequence, U)), H + 1 < pe && E.push("," + F);
        }), se(De(E).toString()) || E.push(F), E.push(l), E.push("}"), E)) : "{}";
      },
      AssignmentPattern: function(u, c, o) {
        return this.generateAssignment(u.left, u.right, "=", c, o);
      },
      ObjectPattern: function(u, c, o) {
        var f, E, O, M, q, H = this;
        if (!u.properties.length)
          return "{}";
        if (M = !1, u.properties.length === 1)
          q = u.properties[0], q.type === t.Property && q.value.type !== t.Identifier && (M = !0);
        else
          for (E = 0, O = u.properties.length; E < O; ++E)
            if (q = u.properties[E], q.type === t.Property && !q.shorthand) {
              M = !0;
              break;
            }
        return f = ["{", M ? F : ""], Se(function(pe) {
          var we, nt;
          for (we = 0, nt = u.properties.length; we < nt; ++we)
            f.push(M ? pe : ""), f.push(H.generateExpression(u.properties[we], r.Sequence, U)), we + 1 < nt && f.push("," + (M ? F : C));
        }), M && !se(De(f).toString()) && f.push(F), f.push(M ? l : ""), f.push("}"), f;
      },
      ThisExpression: function(u, c, o) {
        return "this";
      },
      Super: function(u, c, o) {
        return "super";
      },
      Identifier: function(u, c, o) {
        return Ie(u);
      },
      ImportDefaultSpecifier: function(u, c, o) {
        return Ie(u.id || u.local);
      },
      ImportNamespaceSpecifier: function(u, c, o) {
        var f = ["*"], E = u.id || u.local;
        return E && f.push(C + "as" + Te() + Ie(E)), f;
      },
      ImportSpecifier: function(u, c, o) {
        var f = u.imported, E = [f.name], O = u.local;
        return O && O.name !== f.name && E.push(Te() + "as" + Te() + Ie(O)), E;
      },
      ExportSpecifier: function(u, c, o) {
        var f = u.local, E = [f.name], O = u.exported;
        return O && O.name !== f.name && E.push(Te() + "as" + Te() + Ie(O)), E;
      },
      Literal: function(u, c, o) {
        var f;
        if (u.hasOwnProperty("raw") && d && B.raw)
          try {
            if (f = d(u.raw).body[0].expression, f.type === t.Literal && f.value === u.value)
              return u.raw;
          } catch {
          }
        return u.regex ? "/" + u.regex.pattern + "/" + u.regex.flags : u.value === null ? "null" : typeof u.value == "string" ? Au(u.value) : typeof u.value == "number" ? Ge(u.value) : typeof u.value == "boolean" ? u.value ? "true" : "false" : hu(u.value);
      },
      GeneratorExpression: function(u, c, o) {
        return this.ComprehensionExpression(u, c, o);
      },
      ComprehensionExpression: function(u, c, o) {
        var f, E, O, M, q = this;
        return f = u.type === t.GeneratorExpression ? ["("] : ["["], B.moz.comprehensionExpressionStartsWithAssignment && (M = this.generateExpression(u.body, r.Assignment, U), f.push(M)), u.blocks && Se(function() {
          for (E = 0, O = u.blocks.length; E < O; ++E)
            M = q.generateExpression(u.blocks[E], r.Sequence, U), E > 0 || B.moz.comprehensionExpressionStartsWithAssignment ? f = ie(f, M) : f.push(M);
        }), u.filter && (f = ie(f, "if" + C), M = this.generateExpression(u.filter, r.Sequence, U), f = ie(f, ["(", M, ")"])), B.moz.comprehensionExpressionStartsWithAssignment || (M = this.generateExpression(u.body, r.Assignment, U), f = ie(f, M)), f.push(u.type === t.GeneratorExpression ? ")" : "]"), f;
      },
      ComprehensionBlock: function(u, c, o) {
        var f;
        return u.left.type === t.VariableDeclaration ? f = [
          u.left.kind,
          Te(),
          this.generateStatement(u.left.declarations[0], w)
        ] : f = this.generateExpression(u.left, r.Call, U), f = ie(f, u.of ? "of" : "in"), f = ie(f, this.generateExpression(u.right, r.Sequence, U)), ["for" + C + "(", f, ")"];
      },
      SpreadElement: function(u, c, o) {
        return [
          "...",
          this.generateExpression(u.argument, r.Assignment, U)
        ];
      },
      TaggedTemplateExpression: function(u, c, o) {
        var f = ne;
        o & te || (f = ce);
        var E = [
          this.generateExpression(u.tag, r.Call, f),
          this.generateExpression(u.quasi, r.Primary, oe)
        ];
        return Be(E, r.TaggedTemplate, c);
      },
      TemplateElement: function(u, c, o) {
        return u.value.raw;
      },
      TemplateLiteral: function(u, c, o) {
        var f, E, O;
        for (f = ["`"], E = 0, O = u.quasis.length; E < O; ++E)
          f.push(this.generateExpression(u.quasis[E], r.Primary, U)), E + 1 < O && (f.push("${" + C), f.push(this.generateExpression(u.expressions[E], r.Sequence, U)), f.push(C + "}"));
        return f.push("`"), f;
      },
      ModuleSpecifier: function(u, c, o) {
        return this.Literal(u, c, o);
      },
      ImportExpression: function(u, c, o) {
        return Be([
          "import(",
          this.generateExpression(u.source, r.Assignment, U),
          ")"
        ], r.Call, c);
      }
    }, de(_e.prototype, _e.Expression), _e.prototype.generateExpression = function(u, c, o) {
      var f, E;
      return E = u.type || t.Property, B.verbatim && u.hasOwnProperty(B.verbatim) ? Cu(u, c) : (f = this[E](u, c, o), B.comment && (f = Yr(u, f)), De(f, u));
    }, _e.prototype.generateStatement = function(u, c) {
      var o, f;
      return o = this[u.type](u, c), B.comment && (o = Yr(u, o)), f = De(o).toString(), u.type === t.Program && !j && F === "" && f.charAt(f.length - 1) === `
` && (o = D ? De(o).replaceRight(/\s+$/, "") : f.replace(/\s+$/, "")), De(o, u);
    };
    function yu(u) {
      var c;
      if (c = new _e(), Q(u))
        return c.generateStatement(u, Y);
      if (V(u))
        return c.generateExpression(u, r.Sequence, U);
      throw new Error("Unknown node type: " + u.type);
    }
    function vu(u, c) {
      var o = k(), f, E;
      return c != null ? (typeof c.indent == "string" && (o.format.indent.style = c.indent), typeof c.base == "number" && (o.format.indent.base = c.base), c = Fe(o, c), p = c.format.indent.style, typeof c.base == "string" ? l = c.base : l = L(p, c.format.indent.base)) : (c = o, p = c.format.indent.style, l = L(p, c.format.indent.base)), m = c.format.json, g = c.format.renumber, y = m ? !1 : c.format.hexadecimal, A = m ? "double" : c.format.quotes, v = c.format.escapeless, F = c.format.newline, C = c.format.space, c.format.compact && (F = C = p = l = ""), _ = c.format.parentheses, R = c.format.semicolons, j = c.format.safeConcatenation, J = c.directive, d = m ? null : c.parse, D = c.sourceMap, S = c.sourceCode, x = c.format.preserveBlankLines && S !== null, B = c, D && (e.browser ? i = Je.sourceMap.SourceNode : i = fs().SourceNode), f = yu(u), D ? (E = f.toStringWithSourceMap({
        file: c.file,
        sourceRoot: c.sourceMapRoot
      }), c.sourceContent && E.map.setSourceContent(
        c.sourceMap,
        c.sourceContent
      ), c.sourceMapWithCode ? E : E.map.toString()) : (E = { code: f.toString(), map: null }, c.sourceMapWithCode ? E : E.code);
    }
    G = {
      indent: {
        style: "",
        base: 0
      },
      renumber: !0,
      hexadecimal: !0,
      quotes: "auto",
      escapeless: !0,
      compact: !0,
      parentheses: !1,
      semicolons: !1
    }, z = k().format, e.version = _s.version, e.generate = vu, e.attachComments = a.attachComments, e.Precedence = Fe({}, r), e.browser = !1, e.FORMAT_MINIFY = G, e.FORMAT_DEFAULTS = z;
  })();
})(pi);
var Ai = {
  format: {
    indent: {
      style: "  "
    },
    semicolons: !1
  }
}, Bs = Object.assign({}, Ai, {
  format: {
    newline: ""
  }
}), ws = Object.assign({}, Ai);
function et(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return pi.generate(e, t ? Bs : ws);
}
function Ar(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return t ? Ts(e) : et(e);
}
function Ts(e) {
  var t = et(e, !0);
  return t.endsWith(" }") || (t = "".concat(t.slice(0, -1), " }")), t;
}
function vn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return t ? Ns(e) : ks(e);
}
function ks(e) {
  var t = et(e);
  return t.endsWith("  }]") && (t = Un(t)), t;
}
function Ns(e) {
  var t = et(e, !0);
  return t.startsWith("[    ") && (t = t.replace("[    ", "[")), t;
}
var Ei = function(t) {
  return t.$$typeof === Symbol.for("react.memo");
}, Os = function(t) {
  return t.$$typeof === Symbol.for("react.forward_ref");
}, Ce;
(function(e) {
  e.IDENTIFIER = "Identifier", e.LITERAL = "Literal", e.OBJECT = "Object", e.ARRAY = "Array", e.FUNCTION = "Function", e.CLASS = "Class", e.ELEMENT = "Element", e.UNKNOWN = "Unknown";
})(Ce || (Ce = {}));
var pr = {
  3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
  5: "class enum extends super const export import",
  6: "enum",
  strict: "implements interface let package private protected public static yield",
  strictBind: "eval arguments"
}, hr = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this", Ps = {
  5: hr,
  "5module": hr + " export import",
  6: hr + " const class extends export import super"
}, Is = /^in(stanceof)?$/, Or = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC", Di = "\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF\u1AC0\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F", Rs = new RegExp("[" + Or + "]"), Ls = new RegExp("[" + Or + Di + "]");
Or = Di = null;
var Ci = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 107, 20, 28, 22, 13, 52, 76, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 230, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 35, 56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8952, 286, 50, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42717, 35, 4148, 12, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938], Ms = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 419, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
function Er(e, t) {
  for (var r = 65536, n = 0; n < t.length; n += 2) {
    if (r += t[n], r > e)
      return !1;
    if (r += t[n + 1], r >= e)
      return !0;
  }
}
function Qe(e, t) {
  return e < 65 ? e === 36 : e < 91 ? !0 : e < 97 ? e === 95 : e < 123 ? !0 : e <= 65535 ? e >= 170 && Rs.test(String.fromCharCode(e)) : t === !1 ? !1 : Er(e, Ci);
}
function ut(e, t) {
  return e < 48 ? e === 36 : e < 58 ? !0 : e < 65 ? !1 : e < 91 ? !0 : e < 97 ? e === 95 : e < 123 ? !0 : e <= 65535 ? e >= 170 && Ls.test(String.fromCharCode(e)) : t === !1 ? !1 : Er(e, Ci) || Er(e, Ms);
}
var me = function(t, r) {
  r === void 0 && (r = {}), this.label = t, this.keyword = r.keyword, this.beforeExpr = !!r.beforeExpr, this.startsExpr = !!r.startsExpr, this.isLoop = !!r.isLoop, this.isAssign = !!r.isAssign, this.prefix = !!r.prefix, this.postfix = !!r.postfix, this.binop = r.binop || null, this.updateContext = null;
};
function Me(e, t) {
  return new me(e, { beforeExpr: !0, binop: t });
}
var je = { beforeExpr: !0 }, Re = { startsExpr: !0 }, Ht = {};
function he(e, t) {
  return t === void 0 && (t = {}), t.keyword = e, Ht[e] = new me(e, t);
}
var h = {
  num: new me("num", Re),
  regexp: new me("regexp", Re),
  string: new me("string", Re),
  name: new me("name", Re),
  eof: new me("eof"),
  bracketL: new me("[", { beforeExpr: !0, startsExpr: !0 }),
  bracketR: new me("]"),
  braceL: new me("{", { beforeExpr: !0, startsExpr: !0 }),
  braceR: new me("}"),
  parenL: new me("(", { beforeExpr: !0, startsExpr: !0 }),
  parenR: new me(")"),
  comma: new me(",", je),
  semi: new me(";", je),
  colon: new me(":", je),
  dot: new me("."),
  question: new me("?", je),
  questionDot: new me("?."),
  arrow: new me("=>", je),
  template: new me("template"),
  invalidTemplate: new me("invalidTemplate"),
  ellipsis: new me("...", je),
  backQuote: new me("`", Re),
  dollarBraceL: new me("${", { beforeExpr: !0, startsExpr: !0 }),
  eq: new me("=", { beforeExpr: !0, isAssign: !0 }),
  assign: new me("_=", { beforeExpr: !0, isAssign: !0 }),
  incDec: new me("++/--", { prefix: !0, postfix: !0, startsExpr: !0 }),
  prefix: new me("!/~", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  logicalOR: Me("||", 1),
  logicalAND: Me("&&", 2),
  bitwiseOR: Me("|", 3),
  bitwiseXOR: Me("^", 4),
  bitwiseAND: Me("&", 5),
  equality: Me("==/!=/===/!==", 6),
  relational: Me("</>/<=/>=", 7),
  bitShift: Me("<</>>/>>>", 8),
  plusMin: new me("+/-", { beforeExpr: !0, binop: 9, prefix: !0, startsExpr: !0 }),
  modulo: Me("%", 10),
  star: Me("*", 10),
  slash: Me("/", 10),
  starstar: new me("**", { beforeExpr: !0 }),
  coalesce: Me("??", 1),
  _break: he("break"),
  _case: he("case", je),
  _catch: he("catch"),
  _continue: he("continue"),
  _debugger: he("debugger"),
  _default: he("default", je),
  _do: he("do", { isLoop: !0, beforeExpr: !0 }),
  _else: he("else", je),
  _finally: he("finally"),
  _for: he("for", { isLoop: !0 }),
  _function: he("function", Re),
  _if: he("if"),
  _return: he("return", je),
  _switch: he("switch"),
  _throw: he("throw", je),
  _try: he("try"),
  _var: he("var"),
  _const: he("const"),
  _while: he("while", { isLoop: !0 }),
  _with: he("with"),
  _new: he("new", { beforeExpr: !0, startsExpr: !0 }),
  _this: he("this", Re),
  _super: he("super", Re),
  _class: he("class", Re),
  _extends: he("extends", je),
  _export: he("export"),
  _import: he("import", Re),
  _null: he("null", Re),
  _true: he("true", Re),
  _false: he("false", Re),
  _in: he("in", { beforeExpr: !0, binop: 7 }),
  _instanceof: he("instanceof", { beforeExpr: !0, binop: 7 }),
  _typeof: he("typeof", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  _void: he("void", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  _delete: he("delete", { beforeExpr: !0, prefix: !0, startsExpr: !0 })
}, Le = /\r\n?|\n|\u2028|\u2029/, gt = new RegExp(Le.source, "g");
function yt(e, t) {
  return e === 10 || e === 13 || !t && (e === 8232 || e === 8233);
}
var Pr = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/, qe = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, yi = Object.prototype, js = yi.hasOwnProperty, Vs = yi.toString;
function Kt(e, t) {
  return js.call(e, t);
}
var xn = Array.isArray || function(e) {
  return Vs.call(e) === "[object Array]";
};
function it(e) {
  return new RegExp("^(?:" + e.replace(/ /g, "|") + ")$");
}
var At = function(t, r) {
  this.line = t, this.column = r;
};
At.prototype.offset = function(t) {
  return new At(this.line, this.column + t);
};
var Nt = function(t, r, n) {
  this.start = r, this.end = n, t.sourceFile !== null && (this.source = t.sourceFile);
};
function Ir(e, t) {
  for (var r = 1, n = 0; ; ) {
    gt.lastIndex = n;
    var i = gt.exec(e);
    if (i && i.index < t)
      ++r, n = i.index + i[0].length;
    else
      return new At(r, t - n);
  }
}
var Wt = {
  ecmaVersion: 10,
  sourceType: "script",
  onInsertedSemicolon: null,
  onTrailingComma: null,
  allowReserved: null,
  allowReturnOutsideFunction: !1,
  allowImportExportEverywhere: !1,
  allowAwaitOutsideFunction: !1,
  allowHashBang: !1,
  locations: !1,
  onToken: null,
  onComment: null,
  ranges: !1,
  program: null,
  sourceFile: null,
  directSourceFile: null,
  preserveParens: !1
};
function qs(e) {
  var t = {};
  for (var r in Wt)
    t[r] = e && Kt(e, r) ? e[r] : Wt[r];
  if (t.ecmaVersion >= 2015 && (t.ecmaVersion -= 2009), t.allowReserved == null && (t.allowReserved = t.ecmaVersion < 5), xn(t.onToken)) {
    var n = t.onToken;
    t.onToken = function(i) {
      return n.push(i);
    };
  }
  return xn(t.onComment) && (t.onComment = Us(t, t.onComment)), t;
}
function Us(e, t) {
  return function(r, n, i, a, s, l) {
    var p = {
      type: r ? "Block" : "Line",
      value: n,
      start: i,
      end: a
    };
    e.locations && (p.loc = new Nt(this, s, l)), e.ranges && (p.range = [i, a]), t.push(p);
  };
}
var wt = 1, Ot = 2, Rr = wt | Ot, vi = 4, xi = 8, Fi = 16, bi = 32, Si = 64, _i = 128;
function Lr(e, t) {
  return Ot | (e ? vi : 0) | (t ? xi : 0);
}
var Fn = 0, Mr = 1, Ke = 2, Bi = 3, wi = 4, Ti = 5, xe = function(t, r, n) {
  this.options = t = qs(t), this.sourceFile = t.sourceFile, this.keywords = it(Ps[t.ecmaVersion >= 6 ? 6 : t.sourceType === "module" ? "5module" : 5]);
  var i = "";
  if (t.allowReserved !== !0) {
    for (var a = t.ecmaVersion; !(i = pr[a]); a--)
      ;
    t.sourceType === "module" && (i += " await");
  }
  this.reservedWords = it(i);
  var s = (i ? i + " " : "") + pr.strict;
  this.reservedWordsStrict = it(s), this.reservedWordsStrictBind = it(s + " " + pr.strictBind), this.input = String(r), this.containsEsc = !1, n ? (this.pos = n, this.lineStart = this.input.lastIndexOf(`
`, n - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(Le).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = h.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = t.sourceType === "module", this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = {}, this.pos === 0 && t.allowHashBang && this.input.slice(0, 2) === "#!" && this.skipLineComment(2), this.scopeStack = [], this.enterScope(wt), this.regexpState = null;
}, at = { inFunction: { configurable: !0 }, inGenerator: { configurable: !0 }, inAsync: { configurable: !0 }, allowSuper: { configurable: !0 }, allowDirectSuper: { configurable: !0 }, treatFunctionsAsVar: { configurable: !0 } };
xe.prototype.parse = function() {
  var t = this.options.program || this.startNode();
  return this.nextToken(), this.parseTopLevel(t);
};
at.inFunction.get = function() {
  return (this.currentVarScope().flags & Ot) > 0;
};
at.inGenerator.get = function() {
  return (this.currentVarScope().flags & xi) > 0;
};
at.inAsync.get = function() {
  return (this.currentVarScope().flags & vi) > 0;
};
at.allowSuper.get = function() {
  return (this.currentThisScope().flags & Si) > 0;
};
at.allowDirectSuper.get = function() {
  return (this.currentThisScope().flags & _i) > 0;
};
at.treatFunctionsAsVar.get = function() {
  return this.treatFunctionsAsVarInScope(this.currentScope());
};
xe.prototype.inNonArrowFunction = function() {
  return (this.currentThisScope().flags & Ot) > 0;
};
xe.extend = function() {
  for (var t = [], r = arguments.length; r--; )
    t[r] = arguments[r];
  for (var n = this, i = 0; i < t.length; i++)
    n = t[i](n);
  return n;
};
xe.parse = function(t, r) {
  return new this(r, t).parse();
};
xe.parseExpressionAt = function(t, r, n) {
  var i = new this(n, t, r);
  return i.nextToken(), i.parseExpression();
};
xe.tokenizer = function(t, r) {
  return new this(r, t);
};
Object.defineProperties(xe.prototype, at);
var Oe = xe.prototype, Ws = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/;
Oe.strictDirective = function(e) {
  for (; ; ) {
    qe.lastIndex = e, e += qe.exec(this.input)[0].length;
    var t = Ws.exec(this.input.slice(e));
    if (!t)
      return !1;
    if ((t[1] || t[2]) === "use strict") {
      qe.lastIndex = e + t[0].length;
      var r = qe.exec(this.input), n = r.index + r[0].length, i = this.input.charAt(n);
      return i === ";" || i === "}" || Le.test(r[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(i) || i === "!" && this.input.charAt(n + 1) === "=");
    }
    e += t[0].length, qe.lastIndex = e, e += qe.exec(this.input)[0].length, this.input[e] === ";" && e++;
  }
};
Oe.eat = function(e) {
  return this.type === e ? (this.next(), !0) : !1;
};
Oe.isContextual = function(e) {
  return this.type === h.name && this.value === e && !this.containsEsc;
};
Oe.eatContextual = function(e) {
  return this.isContextual(e) ? (this.next(), !0) : !1;
};
Oe.expectContextual = function(e) {
  this.eatContextual(e) || this.unexpected();
};
Oe.canInsertSemicolon = function() {
  return this.type === h.eof || this.type === h.braceR || Le.test(this.input.slice(this.lastTokEnd, this.start));
};
Oe.insertSemicolon = function() {
  if (this.canInsertSemicolon())
    return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), !0;
};
Oe.semicolon = function() {
  !this.eat(h.semi) && !this.insertSemicolon() && this.unexpected();
};
Oe.afterTrailingComma = function(e, t) {
  if (this.type === e)
    return this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), t || this.next(), !0;
};
Oe.expect = function(e) {
  this.eat(e) || this.unexpected();
};
Oe.unexpected = function(e) {
  this.raise(e != null ? e : this.start, "Unexpected token");
};
function Qt() {
  this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
}
Oe.checkPatternErrors = function(e, t) {
  if (!!e) {
    e.trailingComma > -1 && this.raiseRecoverable(e.trailingComma, "Comma is not permitted after the rest element");
    var r = t ? e.parenthesizedAssign : e.parenthesizedBind;
    r > -1 && this.raiseRecoverable(r, "Parenthesized pattern");
  }
};
Oe.checkExpressionErrors = function(e, t) {
  if (!e)
    return !1;
  var r = e.shorthandAssign, n = e.doubleProto;
  if (!t)
    return r >= 0 || n >= 0;
  r >= 0 && this.raise(r, "Shorthand property assignments are valid only in destructuring patterns"), n >= 0 && this.raiseRecoverable(n, "Redefinition of __proto__ property");
};
Oe.checkYieldAwaitInDefaultParams = function() {
  this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value");
};
Oe.isSimpleAssignTarget = function(e) {
  return e.type === "ParenthesizedExpression" ? this.isSimpleAssignTarget(e.expression) : e.type === "Identifier" || e.type === "MemberExpression";
};
var ae = xe.prototype;
ae.parseTopLevel = function(e) {
  var t = {};
  for (e.body || (e.body = []); this.type !== h.eof; ) {
    var r = this.parseStatement(null, !0, t);
    e.body.push(r);
  }
  if (this.inModule)
    for (var n = 0, i = Object.keys(this.undefinedExports); n < i.length; n += 1) {
      var a = i[n];
      this.raiseRecoverable(this.undefinedExports[a].start, "Export '" + a + "' is not defined");
    }
  return this.adaptDirectivePrologue(e.body), this.next(), e.sourceType = this.options.sourceType, this.finishNode(e, "Program");
};
var jr = { kind: "loop" }, zs = { kind: "switch" };
ae.isLet = function(e) {
  if (this.options.ecmaVersion < 6 || !this.isContextual("let"))
    return !1;
  qe.lastIndex = this.pos;
  var t = qe.exec(this.input), r = this.pos + t[0].length, n = this.input.charCodeAt(r);
  if (n === 91)
    return !0;
  if (e)
    return !1;
  if (n === 123)
    return !0;
  if (Qe(n, !0)) {
    for (var i = r + 1; ut(this.input.charCodeAt(i), !0); )
      ++i;
    var a = this.input.slice(r, i);
    if (!Is.test(a))
      return !0;
  }
  return !1;
};
ae.isAsyncFunction = function() {
  if (this.options.ecmaVersion < 8 || !this.isContextual("async"))
    return !1;
  qe.lastIndex = this.pos;
  var e = qe.exec(this.input), t = this.pos + e[0].length;
  return !Le.test(this.input.slice(this.pos, t)) && this.input.slice(t, t + 8) === "function" && (t + 8 === this.input.length || !ut(this.input.charAt(t + 8)));
};
ae.parseStatement = function(e, t, r) {
  var n = this.type, i = this.startNode(), a;
  switch (this.isLet(e) && (n = h._var, a = "let"), n) {
    case h._break:
    case h._continue:
      return this.parseBreakContinueStatement(i, n.keyword);
    case h._debugger:
      return this.parseDebuggerStatement(i);
    case h._do:
      return this.parseDoStatement(i);
    case h._for:
      return this.parseForStatement(i);
    case h._function:
      return e && (this.strict || e !== "if" && e !== "label") && this.options.ecmaVersion >= 6 && this.unexpected(), this.parseFunctionStatement(i, !1, !e);
    case h._class:
      return e && this.unexpected(), this.parseClass(i, !0);
    case h._if:
      return this.parseIfStatement(i);
    case h._return:
      return this.parseReturnStatement(i);
    case h._switch:
      return this.parseSwitchStatement(i);
    case h._throw:
      return this.parseThrowStatement(i);
    case h._try:
      return this.parseTryStatement(i);
    case h._const:
    case h._var:
      return a = a || this.value, e && a !== "var" && this.unexpected(), this.parseVarStatement(i, a);
    case h._while:
      return this.parseWhileStatement(i);
    case h._with:
      return this.parseWithStatement(i);
    case h.braceL:
      return this.parseBlock(!0, i);
    case h.semi:
      return this.parseEmptyStatement(i);
    case h._export:
    case h._import:
      if (this.options.ecmaVersion > 10 && n === h._import) {
        qe.lastIndex = this.pos;
        var s = qe.exec(this.input), l = this.pos + s[0].length, p = this.input.charCodeAt(l);
        if (p === 40 || p === 46)
          return this.parseExpressionStatement(i, this.parseExpression());
      }
      return this.options.allowImportExportEverywhere || (t || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")), n === h._import ? this.parseImport(i) : this.parseExport(i, r);
    default:
      if (this.isAsyncFunction())
        return e && this.unexpected(), this.next(), this.parseFunctionStatement(i, !0, !e);
      var m = this.value, g = this.parseExpression();
      return n === h.name && g.type === "Identifier" && this.eat(h.colon) ? this.parseLabeledStatement(i, m, g, e) : this.parseExpressionStatement(i, g);
  }
};
ae.parseBreakContinueStatement = function(e, t) {
  var r = t === "break";
  this.next(), this.eat(h.semi) || this.insertSemicolon() ? e.label = null : this.type !== h.name ? this.unexpected() : (e.label = this.parseIdent(), this.semicolon());
  for (var n = 0; n < this.labels.length; ++n) {
    var i = this.labels[n];
    if ((e.label == null || i.name === e.label.name) && (i.kind != null && (r || i.kind === "loop") || e.label && r))
      break;
  }
  return n === this.labels.length && this.raise(e.start, "Unsyntactic " + t), this.finishNode(e, r ? "BreakStatement" : "ContinueStatement");
};
ae.parseDebuggerStatement = function(e) {
  return this.next(), this.semicolon(), this.finishNode(e, "DebuggerStatement");
};
ae.parseDoStatement = function(e) {
  return this.next(), this.labels.push(jr), e.body = this.parseStatement("do"), this.labels.pop(), this.expect(h._while), e.test = this.parseParenExpression(), this.options.ecmaVersion >= 6 ? this.eat(h.semi) : this.semicolon(), this.finishNode(e, "DoWhileStatement");
};
ae.parseForStatement = function(e) {
  this.next();
  var t = this.options.ecmaVersion >= 9 && (this.inAsync || !this.inFunction && this.options.allowAwaitOutsideFunction) && this.eatContextual("await") ? this.lastTokStart : -1;
  if (this.labels.push(jr), this.enterScope(0), this.expect(h.parenL), this.type === h.semi)
    return t > -1 && this.unexpected(t), this.parseFor(e, null);
  var r = this.isLet();
  if (this.type === h._var || this.type === h._const || r) {
    var n = this.startNode(), i = r ? "let" : this.value;
    return this.next(), this.parseVar(n, !0, i), this.finishNode(n, "VariableDeclaration"), (this.type === h._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && n.declarations.length === 1 ? (this.options.ecmaVersion >= 9 && (this.type === h._in ? t > -1 && this.unexpected(t) : e.await = t > -1), this.parseForIn(e, n)) : (t > -1 && this.unexpected(t), this.parseFor(e, n));
  }
  var a = new Qt(), s = this.parseExpression(!0, a);
  return this.type === h._in || this.options.ecmaVersion >= 6 && this.isContextual("of") ? (this.options.ecmaVersion >= 9 && (this.type === h._in ? t > -1 && this.unexpected(t) : e.await = t > -1), this.toAssignable(s, !1, a), this.checkLVal(s), this.parseForIn(e, s)) : (this.checkExpressionErrors(a, !0), t > -1 && this.unexpected(t), this.parseFor(e, s));
};
ae.parseFunctionStatement = function(e, t, r) {
  return this.next(), this.parseFunction(e, Bt | (r ? 0 : Dr), !1, t);
};
ae.parseIfStatement = function(e) {
  return this.next(), e.test = this.parseParenExpression(), e.consequent = this.parseStatement("if"), e.alternate = this.eat(h._else) ? this.parseStatement("if") : null, this.finishNode(e, "IfStatement");
};
ae.parseReturnStatement = function(e) {
  return !this.inFunction && !this.options.allowReturnOutsideFunction && this.raise(this.start, "'return' outside of function"), this.next(), this.eat(h.semi) || this.insertSemicolon() ? e.argument = null : (e.argument = this.parseExpression(), this.semicolon()), this.finishNode(e, "ReturnStatement");
};
ae.parseSwitchStatement = function(e) {
  this.next(), e.discriminant = this.parseParenExpression(), e.cases = [], this.expect(h.braceL), this.labels.push(zs), this.enterScope(0);
  for (var t, r = !1; this.type !== h.braceR; )
    if (this.type === h._case || this.type === h._default) {
      var n = this.type === h._case;
      t && this.finishNode(t, "SwitchCase"), e.cases.push(t = this.startNode()), t.consequent = [], this.next(), n ? t.test = this.parseExpression() : (r && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), r = !0, t.test = null), this.expect(h.colon);
    } else
      t || this.unexpected(), t.consequent.push(this.parseStatement(null));
  return this.exitScope(), t && this.finishNode(t, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(e, "SwitchStatement");
};
ae.parseThrowStatement = function(e) {
  return this.next(), Le.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), e.argument = this.parseExpression(), this.semicolon(), this.finishNode(e, "ThrowStatement");
};
var Gs = [];
ae.parseTryStatement = function(e) {
  if (this.next(), e.block = this.parseBlock(), e.handler = null, this.type === h._catch) {
    var t = this.startNode();
    if (this.next(), this.eat(h.parenL)) {
      t.param = this.parseBindingAtom();
      var r = t.param.type === "Identifier";
      this.enterScope(r ? bi : 0), this.checkLVal(t.param, r ? wi : Ke), this.expect(h.parenR);
    } else
      this.options.ecmaVersion < 10 && this.unexpected(), t.param = null, this.enterScope(0);
    t.body = this.parseBlock(!1), this.exitScope(), e.handler = this.finishNode(t, "CatchClause");
  }
  return e.finalizer = this.eat(h._finally) ? this.parseBlock() : null, !e.handler && !e.finalizer && this.raise(e.start, "Missing catch or finally clause"), this.finishNode(e, "TryStatement");
};
ae.parseVarStatement = function(e, t) {
  return this.next(), this.parseVar(e, !1, t), this.semicolon(), this.finishNode(e, "VariableDeclaration");
};
ae.parseWhileStatement = function(e) {
  return this.next(), e.test = this.parseParenExpression(), this.labels.push(jr), e.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(e, "WhileStatement");
};
ae.parseWithStatement = function(e) {
  return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), e.object = this.parseParenExpression(), e.body = this.parseStatement("with"), this.finishNode(e, "WithStatement");
};
ae.parseEmptyStatement = function(e) {
  return this.next(), this.finishNode(e, "EmptyStatement");
};
ae.parseLabeledStatement = function(e, t, r, n) {
  for (var i = 0, a = this.labels; i < a.length; i += 1) {
    var s = a[i];
    s.name === t && this.raise(r.start, "Label '" + t + "' is already declared");
  }
  for (var l = this.type.isLoop ? "loop" : this.type === h._switch ? "switch" : null, p = this.labels.length - 1; p >= 0; p--) {
    var m = this.labels[p];
    if (m.statementStart === e.start)
      m.statementStart = this.start, m.kind = l;
    else
      break;
  }
  return this.labels.push({ name: t, kind: l, statementStart: this.start }), e.body = this.parseStatement(n ? n.indexOf("label") === -1 ? n + "label" : n : "label"), this.labels.pop(), e.label = r, this.finishNode(e, "LabeledStatement");
};
ae.parseExpressionStatement = function(e, t) {
  return e.expression = t, this.semicolon(), this.finishNode(e, "ExpressionStatement");
};
ae.parseBlock = function(e, t, r) {
  for (e === void 0 && (e = !0), t === void 0 && (t = this.startNode()), t.body = [], this.expect(h.braceL), e && this.enterScope(0); this.type !== h.braceR; ) {
    var n = this.parseStatement(null);
    t.body.push(n);
  }
  return r && (this.strict = !1), this.next(), e && this.exitScope(), this.finishNode(t, "BlockStatement");
};
ae.parseFor = function(e, t) {
  return e.init = t, this.expect(h.semi), e.test = this.type === h.semi ? null : this.parseExpression(), this.expect(h.semi), e.update = this.type === h.parenR ? null : this.parseExpression(), this.expect(h.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e, "ForStatement");
};
ae.parseForIn = function(e, t) {
  var r = this.type === h._in;
  return this.next(), t.type === "VariableDeclaration" && t.declarations[0].init != null && (!r || this.options.ecmaVersion < 8 || this.strict || t.kind !== "var" || t.declarations[0].id.type !== "Identifier") ? this.raise(
    t.start,
    (r ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"
  ) : t.type === "AssignmentPattern" && this.raise(t.start, "Invalid left-hand side in for-loop"), e.left = t, e.right = r ? this.parseExpression() : this.parseMaybeAssign(), this.expect(h.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e, r ? "ForInStatement" : "ForOfStatement");
};
ae.parseVar = function(e, t, r) {
  for (e.declarations = [], e.kind = r; ; ) {
    var n = this.startNode();
    if (this.parseVarId(n, r), this.eat(h.eq) ? n.init = this.parseMaybeAssign(t) : r === "const" && !(this.type === h._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) ? this.unexpected() : n.id.type !== "Identifier" && !(t && (this.type === h._in || this.isContextual("of"))) ? this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : n.init = null, e.declarations.push(this.finishNode(n, "VariableDeclarator")), !this.eat(h.comma))
      break;
  }
  return e;
};
ae.parseVarId = function(e, t) {
  e.id = this.parseBindingAtom(), this.checkLVal(e.id, t === "var" ? Mr : Ke, !1);
};
var Bt = 1, Dr = 2, ki = 4;
ae.parseFunction = function(e, t, r, n) {
  this.initFunction(e), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !n) && (this.type === h.star && t & Dr && this.unexpected(), e.generator = this.eat(h.star)), this.options.ecmaVersion >= 8 && (e.async = !!n), t & Bt && (e.id = t & ki && this.type !== h.name ? null : this.parseIdent(), e.id && !(t & Dr) && this.checkLVal(e.id, this.strict || e.generator || e.async ? this.treatFunctionsAsVar ? Mr : Ke : Bi));
  var i = this.yieldPos, a = this.awaitPos, s = this.awaitIdentPos;
  return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(Lr(e.async, e.generator)), t & Bt || (e.id = this.type === h.name ? this.parseIdent() : null), this.parseFunctionParams(e), this.parseFunctionBody(e, r, !1), this.yieldPos = i, this.awaitPos = a, this.awaitIdentPos = s, this.finishNode(e, t & Bt ? "FunctionDeclaration" : "FunctionExpression");
};
ae.parseFunctionParams = function(e) {
  this.expect(h.parenL), e.params = this.parseBindingList(h.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams();
};
ae.parseClass = function(e, t) {
  this.next();
  var r = this.strict;
  this.strict = !0, this.parseClassId(e, t), this.parseClassSuper(e);
  var n = this.startNode(), i = !1;
  for (n.body = [], this.expect(h.braceL); this.type !== h.braceR; ) {
    var a = this.parseClassElement(e.superClass !== null);
    a && (n.body.push(a), a.type === "MethodDefinition" && a.kind === "constructor" && (i && this.raise(a.start, "Duplicate constructor in the same class"), i = !0));
  }
  return this.strict = r, this.next(), e.body = this.finishNode(n, "ClassBody"), this.finishNode(e, t ? "ClassDeclaration" : "ClassExpression");
};
ae.parseClassElement = function(e) {
  var t = this;
  if (this.eat(h.semi))
    return null;
  var r = this.startNode(), n = function(p, m) {
    m === void 0 && (m = !1);
    var g = t.start, y = t.startLoc;
    return t.eatContextual(p) ? t.type !== h.parenL && (!m || !t.canInsertSemicolon()) ? !0 : (r.key && t.unexpected(), r.computed = !1, r.key = t.startNodeAt(g, y), r.key.name = p, t.finishNode(r.key, "Identifier"), !1) : !1;
  };
  r.kind = "method", r.static = n("static");
  var i = this.eat(h.star), a = !1;
  i || (this.options.ecmaVersion >= 8 && n("async", !0) ? (a = !0, i = this.options.ecmaVersion >= 9 && this.eat(h.star)) : n("get") ? r.kind = "get" : n("set") && (r.kind = "set")), r.key || this.parsePropertyName(r);
  var s = r.key, l = !1;
  return !r.computed && !r.static && (s.type === "Identifier" && s.name === "constructor" || s.type === "Literal" && s.value === "constructor") ? (r.kind !== "method" && this.raise(s.start, "Constructor can't have get/set modifier"), i && this.raise(s.start, "Constructor can't be a generator"), a && this.raise(s.start, "Constructor can't be an async method"), r.kind = "constructor", l = e) : r.static && s.type === "Identifier" && s.name === "prototype" && this.raise(s.start, "Classes may not have a static property named prototype"), this.parseClassMethod(r, i, a, l), r.kind === "get" && r.value.params.length !== 0 && this.raiseRecoverable(r.value.start, "getter should have no params"), r.kind === "set" && r.value.params.length !== 1 && this.raiseRecoverable(r.value.start, "setter should have exactly one param"), r.kind === "set" && r.value.params[0].type === "RestElement" && this.raiseRecoverable(r.value.params[0].start, "Setter cannot use rest params"), r;
};
ae.parseClassMethod = function(e, t, r, n) {
  return e.value = this.parseMethod(t, r, n), this.finishNode(e, "MethodDefinition");
};
ae.parseClassId = function(e, t) {
  this.type === h.name ? (e.id = this.parseIdent(), t && this.checkLVal(e.id, Ke, !1)) : (t === !0 && this.unexpected(), e.id = null);
};
ae.parseClassSuper = function(e) {
  e.superClass = this.eat(h._extends) ? this.parseExprSubscripts() : null;
};
ae.parseExport = function(e, t) {
  if (this.next(), this.eat(h.star))
    return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (e.exported = this.parseIdent(!0), this.checkExport(t, e.exported.name, this.lastTokStart)) : e.exported = null), this.expectContextual("from"), this.type !== h.string && this.unexpected(), e.source = this.parseExprAtom(), this.semicolon(), this.finishNode(e, "ExportAllDeclaration");
  if (this.eat(h._default)) {
    this.checkExport(t, "default", this.lastTokStart);
    var r;
    if (this.type === h._function || (r = this.isAsyncFunction())) {
      var n = this.startNode();
      this.next(), r && this.next(), e.declaration = this.parseFunction(n, Bt | ki, !1, r);
    } else if (this.type === h._class) {
      var i = this.startNode();
      e.declaration = this.parseClass(i, "nullableID");
    } else
      e.declaration = this.parseMaybeAssign(), this.semicolon();
    return this.finishNode(e, "ExportDefaultDeclaration");
  }
  if (this.shouldParseExportStatement())
    e.declaration = this.parseStatement(null), e.declaration.type === "VariableDeclaration" ? this.checkVariableExport(t, e.declaration.declarations) : this.checkExport(t, e.declaration.id.name, e.declaration.id.start), e.specifiers = [], e.source = null;
  else {
    if (e.declaration = null, e.specifiers = this.parseExportSpecifiers(t), this.eatContextual("from"))
      this.type !== h.string && this.unexpected(), e.source = this.parseExprAtom();
    else {
      for (var a = 0, s = e.specifiers; a < s.length; a += 1) {
        var l = s[a];
        this.checkUnreserved(l.local), this.checkLocalExport(l.local);
      }
      e.source = null;
    }
    this.semicolon();
  }
  return this.finishNode(e, "ExportNamedDeclaration");
};
ae.checkExport = function(e, t, r) {
  !e || (Kt(e, t) && this.raiseRecoverable(r, "Duplicate export '" + t + "'"), e[t] = !0);
};
ae.checkPatternExport = function(e, t) {
  var r = t.type;
  if (r === "Identifier")
    this.checkExport(e, t.name, t.start);
  else if (r === "ObjectPattern")
    for (var n = 0, i = t.properties; n < i.length; n += 1) {
      var a = i[n];
      this.checkPatternExport(e, a);
    }
  else if (r === "ArrayPattern")
    for (var s = 0, l = t.elements; s < l.length; s += 1) {
      var p = l[s];
      p && this.checkPatternExport(e, p);
    }
  else
    r === "Property" ? this.checkPatternExport(e, t.value) : r === "AssignmentPattern" ? this.checkPatternExport(e, t.left) : r === "RestElement" ? this.checkPatternExport(e, t.argument) : r === "ParenthesizedExpression" && this.checkPatternExport(e, t.expression);
};
ae.checkVariableExport = function(e, t) {
  if (!!e)
    for (var r = 0, n = t; r < n.length; r += 1) {
      var i = n[r];
      this.checkPatternExport(e, i.id);
    }
};
ae.shouldParseExportStatement = function() {
  return this.type.keyword === "var" || this.type.keyword === "const" || this.type.keyword === "class" || this.type.keyword === "function" || this.isLet() || this.isAsyncFunction();
};
ae.parseExportSpecifiers = function(e) {
  var t = [], r = !0;
  for (this.expect(h.braceL); !this.eat(h.braceR); ) {
    if (r)
      r = !1;
    else if (this.expect(h.comma), this.afterTrailingComma(h.braceR))
      break;
    var n = this.startNode();
    n.local = this.parseIdent(!0), n.exported = this.eatContextual("as") ? this.parseIdent(!0) : n.local, this.checkExport(e, n.exported.name, n.exported.start), t.push(this.finishNode(n, "ExportSpecifier"));
  }
  return t;
};
ae.parseImport = function(e) {
  return this.next(), this.type === h.string ? (e.specifiers = Gs, e.source = this.parseExprAtom()) : (e.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), e.source = this.type === h.string ? this.parseExprAtom() : this.unexpected()), this.semicolon(), this.finishNode(e, "ImportDeclaration");
};
ae.parseImportSpecifiers = function() {
  var e = [], t = !0;
  if (this.type === h.name) {
    var r = this.startNode();
    if (r.local = this.parseIdent(), this.checkLVal(r.local, Ke), e.push(this.finishNode(r, "ImportDefaultSpecifier")), !this.eat(h.comma))
      return e;
  }
  if (this.type === h.star) {
    var n = this.startNode();
    return this.next(), this.expectContextual("as"), n.local = this.parseIdent(), this.checkLVal(n.local, Ke), e.push(this.finishNode(n, "ImportNamespaceSpecifier")), e;
  }
  for (this.expect(h.braceL); !this.eat(h.braceR); ) {
    if (t)
      t = !1;
    else if (this.expect(h.comma), this.afterTrailingComma(h.braceR))
      break;
    var i = this.startNode();
    i.imported = this.parseIdent(!0), this.eatContextual("as") ? i.local = this.parseIdent() : (this.checkUnreserved(i.imported), i.local = i.imported), this.checkLVal(i.local, Ke), e.push(this.finishNode(i, "ImportSpecifier"));
  }
  return e;
};
ae.adaptDirectivePrologue = function(e) {
  for (var t = 0; t < e.length && this.isDirectiveCandidate(e[t]); ++t)
    e[t].directive = e[t].expression.raw.slice(1, -1);
};
ae.isDirectiveCandidate = function(e) {
  return e.type === "ExpressionStatement" && e.expression.type === "Literal" && typeof e.expression.value == "string" && (this.input[e.start] === '"' || this.input[e.start] === "'");
};
var Xe = xe.prototype;
Xe.toAssignable = function(e, t, r) {
  if (this.options.ecmaVersion >= 6 && e)
    switch (e.type) {
      case "Identifier":
        this.inAsync && e.name === "await" && this.raise(e.start, "Cannot use 'await' as identifier inside an async function");
        break;
      case "ObjectPattern":
      case "ArrayPattern":
      case "RestElement":
        break;
      case "ObjectExpression":
        e.type = "ObjectPattern", r && this.checkPatternErrors(r, !0);
        for (var n = 0, i = e.properties; n < i.length; n += 1) {
          var a = i[n];
          this.toAssignable(a, t), a.type === "RestElement" && (a.argument.type === "ArrayPattern" || a.argument.type === "ObjectPattern") && this.raise(a.argument.start, "Unexpected token");
        }
        break;
      case "Property":
        e.kind !== "init" && this.raise(e.key.start, "Object pattern can't contain getter or setter"), this.toAssignable(e.value, t);
        break;
      case "ArrayExpression":
        e.type = "ArrayPattern", r && this.checkPatternErrors(r, !0), this.toAssignableList(e.elements, t);
        break;
      case "SpreadElement":
        e.type = "RestElement", this.toAssignable(e.argument, t), e.argument.type === "AssignmentPattern" && this.raise(e.argument.start, "Rest elements cannot have a default value");
        break;
      case "AssignmentExpression":
        e.operator !== "=" && this.raise(e.left.end, "Only '=' operator can be used for specifying default value."), e.type = "AssignmentPattern", delete e.operator, this.toAssignable(e.left, t);
      case "AssignmentPattern":
        break;
      case "ParenthesizedExpression":
        this.toAssignable(e.expression, t, r);
        break;
      case "ChainExpression":
        this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
        break;
      case "MemberExpression":
        if (!t)
          break;
      default:
        this.raise(e.start, "Assigning to rvalue");
    }
  else
    r && this.checkPatternErrors(r, !0);
  return e;
};
Xe.toAssignableList = function(e, t) {
  for (var r = e.length, n = 0; n < r; n++) {
    var i = e[n];
    i && this.toAssignable(i, t);
  }
  if (r) {
    var a = e[r - 1];
    this.options.ecmaVersion === 6 && t && a && a.type === "RestElement" && a.argument.type !== "Identifier" && this.unexpected(a.argument.start);
  }
  return e;
};
Xe.parseSpread = function(e) {
  var t = this.startNode();
  return this.next(), t.argument = this.parseMaybeAssign(!1, e), this.finishNode(t, "SpreadElement");
};
Xe.parseRestBinding = function() {
  var e = this.startNode();
  return this.next(), this.options.ecmaVersion === 6 && this.type !== h.name && this.unexpected(), e.argument = this.parseBindingAtom(), this.finishNode(e, "RestElement");
};
Xe.parseBindingAtom = function() {
  if (this.options.ecmaVersion >= 6)
    switch (this.type) {
      case h.bracketL:
        var e = this.startNode();
        return this.next(), e.elements = this.parseBindingList(h.bracketR, !0, !0), this.finishNode(e, "ArrayPattern");
      case h.braceL:
        return this.parseObj(!0);
    }
  return this.parseIdent();
};
Xe.parseBindingList = function(e, t, r) {
  for (var n = [], i = !0; !this.eat(e); )
    if (i ? i = !1 : this.expect(h.comma), t && this.type === h.comma)
      n.push(null);
    else {
      if (r && this.afterTrailingComma(e))
        break;
      if (this.type === h.ellipsis) {
        var a = this.parseRestBinding();
        this.parseBindingListItem(a), n.push(a), this.type === h.comma && this.raise(this.start, "Comma is not permitted after the rest element"), this.expect(e);
        break;
      } else {
        var s = this.parseMaybeDefault(this.start, this.startLoc);
        this.parseBindingListItem(s), n.push(s);
      }
    }
  return n;
};
Xe.parseBindingListItem = function(e) {
  return e;
};
Xe.parseMaybeDefault = function(e, t, r) {
  if (r = r || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(h.eq))
    return r;
  var n = this.startNodeAt(e, t);
  return n.left = r, n.right = this.parseMaybeAssign(), this.finishNode(n, "AssignmentPattern");
};
Xe.checkLVal = function(e, t, r) {
  switch (t === void 0 && (t = Fn), e.type) {
    case "Identifier":
      t === Ke && e.name === "let" && this.raiseRecoverable(e.start, "let is disallowed as a lexically bound name"), this.strict && this.reservedWordsStrictBind.test(e.name) && this.raiseRecoverable(e.start, (t ? "Binding " : "Assigning to ") + e.name + " in strict mode"), r && (Kt(r, e.name) && this.raiseRecoverable(e.start, "Argument name clash"), r[e.name] = !0), t !== Fn && t !== Ti && this.declareName(e.name, t, e.start);
      break;
    case "ChainExpression":
      this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
      break;
    case "MemberExpression":
      t && this.raiseRecoverable(e.start, "Binding member expression");
      break;
    case "ObjectPattern":
      for (var n = 0, i = e.properties; n < i.length; n += 1) {
        var a = i[n];
        this.checkLVal(a, t, r);
      }
      break;
    case "Property":
      this.checkLVal(e.value, t, r);
      break;
    case "ArrayPattern":
      for (var s = 0, l = e.elements; s < l.length; s += 1) {
        var p = l[s];
        p && this.checkLVal(p, t, r);
      }
      break;
    case "AssignmentPattern":
      this.checkLVal(e.left, t, r);
      break;
    case "RestElement":
      this.checkLVal(e.argument, t, r);
      break;
    case "ParenthesizedExpression":
      this.checkLVal(e.expression, t, r);
      break;
    default:
      this.raise(e.start, (t ? "Binding" : "Assigning to") + " rvalue");
  }
};
var le = xe.prototype;
le.checkPropClash = function(e, t, r) {
  if (!(this.options.ecmaVersion >= 9 && e.type === "SpreadElement") && !(this.options.ecmaVersion >= 6 && (e.computed || e.method || e.shorthand))) {
    var n = e.key, i;
    switch (n.type) {
      case "Identifier":
        i = n.name;
        break;
      case "Literal":
        i = String(n.value);
        break;
      default:
        return;
    }
    var a = e.kind;
    if (this.options.ecmaVersion >= 6) {
      i === "__proto__" && a === "init" && (t.proto && (r ? r.doubleProto < 0 && (r.doubleProto = n.start) : this.raiseRecoverable(n.start, "Redefinition of __proto__ property")), t.proto = !0);
      return;
    }
    i = "$" + i;
    var s = t[i];
    if (s) {
      var l;
      a === "init" ? l = this.strict && s.init || s.get || s.set : l = s.init || s[a], l && this.raiseRecoverable(n.start, "Redefinition of property");
    } else
      s = t[i] = {
        init: !1,
        get: !1,
        set: !1
      };
    s[a] = !0;
  }
};
le.parseExpression = function(e, t) {
  var r = this.start, n = this.startLoc, i = this.parseMaybeAssign(e, t);
  if (this.type === h.comma) {
    var a = this.startNodeAt(r, n);
    for (a.expressions = [i]; this.eat(h.comma); )
      a.expressions.push(this.parseMaybeAssign(e, t));
    return this.finishNode(a, "SequenceExpression");
  }
  return i;
};
le.parseMaybeAssign = function(e, t, r) {
  if (this.isContextual("yield")) {
    if (this.inGenerator)
      return this.parseYield(e);
    this.exprAllowed = !1;
  }
  var n = !1, i = -1, a = -1;
  t ? (i = t.parenthesizedAssign, a = t.trailingComma, t.parenthesizedAssign = t.trailingComma = -1) : (t = new Qt(), n = !0);
  var s = this.start, l = this.startLoc;
  (this.type === h.parenL || this.type === h.name) && (this.potentialArrowAt = this.start);
  var p = this.parseMaybeConditional(e, t);
  if (r && (p = r.call(this, p, s, l)), this.type.isAssign) {
    var m = this.startNodeAt(s, l);
    return m.operator = this.value, m.left = this.type === h.eq ? this.toAssignable(p, !1, t) : p, n || (t.parenthesizedAssign = t.trailingComma = t.doubleProto = -1), t.shorthandAssign >= m.left.start && (t.shorthandAssign = -1), this.checkLVal(p), this.next(), m.right = this.parseMaybeAssign(e), this.finishNode(m, "AssignmentExpression");
  } else
    n && this.checkExpressionErrors(t, !0);
  return i > -1 && (t.parenthesizedAssign = i), a > -1 && (t.trailingComma = a), p;
};
le.parseMaybeConditional = function(e, t) {
  var r = this.start, n = this.startLoc, i = this.parseExprOps(e, t);
  if (this.checkExpressionErrors(t))
    return i;
  if (this.eat(h.question)) {
    var a = this.startNodeAt(r, n);
    return a.test = i, a.consequent = this.parseMaybeAssign(), this.expect(h.colon), a.alternate = this.parseMaybeAssign(e), this.finishNode(a, "ConditionalExpression");
  }
  return i;
};
le.parseExprOps = function(e, t) {
  var r = this.start, n = this.startLoc, i = this.parseMaybeUnary(t, !1);
  return this.checkExpressionErrors(t) || i.start === r && i.type === "ArrowFunctionExpression" ? i : this.parseExprOp(i, r, n, -1, e);
};
le.parseExprOp = function(e, t, r, n, i) {
  var a = this.type.binop;
  if (a != null && (!i || this.type !== h._in) && a > n) {
    var s = this.type === h.logicalOR || this.type === h.logicalAND, l = this.type === h.coalesce;
    l && (a = h.logicalAND.binop);
    var p = this.value;
    this.next();
    var m = this.start, g = this.startLoc, y = this.parseExprOp(this.parseMaybeUnary(null, !1), m, g, a, i), A = this.buildBinary(t, r, e, y, p, s || l);
    return (s && this.type === h.coalesce || l && (this.type === h.logicalOR || this.type === h.logicalAND)) && this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"), this.parseExprOp(A, t, r, n, i);
  }
  return e;
};
le.buildBinary = function(e, t, r, n, i, a) {
  var s = this.startNodeAt(e, t);
  return s.left = r, s.operator = i, s.right = n, this.finishNode(s, a ? "LogicalExpression" : "BinaryExpression");
};
le.parseMaybeUnary = function(e, t) {
  var r = this.start, n = this.startLoc, i;
  if (this.isContextual("await") && (this.inAsync || !this.inFunction && this.options.allowAwaitOutsideFunction))
    i = this.parseAwait(), t = !0;
  else if (this.type.prefix) {
    var a = this.startNode(), s = this.type === h.incDec;
    a.operator = this.value, a.prefix = !0, this.next(), a.argument = this.parseMaybeUnary(null, !0), this.checkExpressionErrors(e, !0), s ? this.checkLVal(a.argument) : this.strict && a.operator === "delete" && a.argument.type === "Identifier" ? this.raiseRecoverable(a.start, "Deleting local variable in strict mode") : t = !0, i = this.finishNode(a, s ? "UpdateExpression" : "UnaryExpression");
  } else {
    if (i = this.parseExprSubscripts(e), this.checkExpressionErrors(e))
      return i;
    for (; this.type.postfix && !this.canInsertSemicolon(); ) {
      var l = this.startNodeAt(r, n);
      l.operator = this.value, l.prefix = !1, l.argument = i, this.checkLVal(i), this.next(), i = this.finishNode(l, "UpdateExpression");
    }
  }
  return !t && this.eat(h.starstar) ? this.buildBinary(r, n, i, this.parseMaybeUnary(null, !1), "**", !1) : i;
};
le.parseExprSubscripts = function(e) {
  var t = this.start, r = this.startLoc, n = this.parseExprAtom(e);
  if (n.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")")
    return n;
  var i = this.parseSubscripts(n, t, r);
  return e && i.type === "MemberExpression" && (e.parenthesizedAssign >= i.start && (e.parenthesizedAssign = -1), e.parenthesizedBind >= i.start && (e.parenthesizedBind = -1)), i;
};
le.parseSubscripts = function(e, t, r, n) {
  for (var i = this.options.ecmaVersion >= 8 && e.type === "Identifier" && e.name === "async" && this.lastTokEnd === e.end && !this.canInsertSemicolon() && e.end - e.start === 5 && this.potentialArrowAt === e.start, a = !1; ; ) {
    var s = this.parseSubscript(e, t, r, n, i, a);
    if (s.optional && (a = !0), s === e || s.type === "ArrowFunctionExpression") {
      if (a) {
        var l = this.startNodeAt(t, r);
        l.expression = s, s = this.finishNode(l, "ChainExpression");
      }
      return s;
    }
    e = s;
  }
};
le.parseSubscript = function(e, t, r, n, i, a) {
  var s = this.options.ecmaVersion >= 11, l = s && this.eat(h.questionDot);
  n && l && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
  var p = this.eat(h.bracketL);
  if (p || l && this.type !== h.parenL && this.type !== h.backQuote || this.eat(h.dot)) {
    var m = this.startNodeAt(t, r);
    m.object = e, m.property = p ? this.parseExpression() : this.parseIdent(this.options.allowReserved !== "never"), m.computed = !!p, p && this.expect(h.bracketR), s && (m.optional = l), e = this.finishNode(m, "MemberExpression");
  } else if (!n && this.eat(h.parenL)) {
    var g = new Qt(), y = this.yieldPos, A = this.awaitPos, v = this.awaitIdentPos;
    this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
    var F = this.parseExprList(h.parenR, this.options.ecmaVersion >= 8, !1, g);
    if (i && !l && !this.canInsertSemicolon() && this.eat(h.arrow))
      return this.checkPatternErrors(g, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = y, this.awaitPos = A, this.awaitIdentPos = v, this.parseArrowExpression(this.startNodeAt(t, r), F, !0);
    this.checkExpressionErrors(g, !0), this.yieldPos = y || this.yieldPos, this.awaitPos = A || this.awaitPos, this.awaitIdentPos = v || this.awaitIdentPos;
    var C = this.startNodeAt(t, r);
    C.callee = e, C.arguments = F, s && (C.optional = l), e = this.finishNode(C, "CallExpression");
  } else if (this.type === h.backQuote) {
    (l || a) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
    var _ = this.startNodeAt(t, r);
    _.tag = e, _.quasi = this.parseTemplate({ isTagged: !0 }), e = this.finishNode(_, "TaggedTemplateExpression");
  }
  return e;
};
le.parseExprAtom = function(e) {
  this.type === h.slash && this.readRegexp();
  var t, r = this.potentialArrowAt === this.start;
  switch (this.type) {
    case h._super:
      return this.allowSuper || this.raise(this.start, "'super' keyword outside a method"), t = this.startNode(), this.next(), this.type === h.parenL && !this.allowDirectSuper && this.raise(t.start, "super() call outside constructor of a subclass"), this.type !== h.dot && this.type !== h.bracketL && this.type !== h.parenL && this.unexpected(), this.finishNode(t, "Super");
    case h._this:
      return t = this.startNode(), this.next(), this.finishNode(t, "ThisExpression");
    case h.name:
      var n = this.start, i = this.startLoc, a = this.containsEsc, s = this.parseIdent(!1);
      if (this.options.ecmaVersion >= 8 && !a && s.name === "async" && !this.canInsertSemicolon() && this.eat(h._function))
        return this.parseFunction(this.startNodeAt(n, i), 0, !1, !0);
      if (r && !this.canInsertSemicolon()) {
        if (this.eat(h.arrow))
          return this.parseArrowExpression(this.startNodeAt(n, i), [s], !1);
        if (this.options.ecmaVersion >= 8 && s.name === "async" && this.type === h.name && !a)
          return s = this.parseIdent(!1), (this.canInsertSemicolon() || !this.eat(h.arrow)) && this.unexpected(), this.parseArrowExpression(this.startNodeAt(n, i), [s], !0);
      }
      return s;
    case h.regexp:
      var l = this.value;
      return t = this.parseLiteral(l.value), t.regex = { pattern: l.pattern, flags: l.flags }, t;
    case h.num:
    case h.string:
      return this.parseLiteral(this.value);
    case h._null:
    case h._true:
    case h._false:
      return t = this.startNode(), t.value = this.type === h._null ? null : this.type === h._true, t.raw = this.type.keyword, this.next(), this.finishNode(t, "Literal");
    case h.parenL:
      var p = this.start, m = this.parseParenAndDistinguishExpression(r);
      return e && (e.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(m) && (e.parenthesizedAssign = p), e.parenthesizedBind < 0 && (e.parenthesizedBind = p)), m;
    case h.bracketL:
      return t = this.startNode(), this.next(), t.elements = this.parseExprList(h.bracketR, !0, !0, e), this.finishNode(t, "ArrayExpression");
    case h.braceL:
      return this.parseObj(!1, e);
    case h._function:
      return t = this.startNode(), this.next(), this.parseFunction(t, 0);
    case h._class:
      return this.parseClass(this.startNode(), !1);
    case h._new:
      return this.parseNew();
    case h.backQuote:
      return this.parseTemplate();
    case h._import:
      return this.options.ecmaVersion >= 11 ? this.parseExprImport() : this.unexpected();
    default:
      this.unexpected();
  }
};
le.parseExprImport = function() {
  var e = this.startNode();
  this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword import");
  var t = this.parseIdent(!0);
  switch (this.type) {
    case h.parenL:
      return this.parseDynamicImport(e);
    case h.dot:
      return e.meta = t, this.parseImportMeta(e);
    default:
      this.unexpected();
  }
};
le.parseDynamicImport = function(e) {
  if (this.next(), e.source = this.parseMaybeAssign(), !this.eat(h.parenR)) {
    var t = this.start;
    this.eat(h.comma) && this.eat(h.parenR) ? this.raiseRecoverable(t, "Trailing comma is not allowed in import()") : this.unexpected(t);
  }
  return this.finishNode(e, "ImportExpression");
};
le.parseImportMeta = function(e) {
  this.next();
  var t = this.containsEsc;
  return e.property = this.parseIdent(!0), e.property.name !== "meta" && this.raiseRecoverable(e.property.start, "The only valid meta property for import is 'import.meta'"), t && this.raiseRecoverable(e.start, "'import.meta' must not contain escaped characters"), this.options.sourceType !== "module" && this.raiseRecoverable(e.start, "Cannot use 'import.meta' outside a module"), this.finishNode(e, "MetaProperty");
};
le.parseLiteral = function(e) {
  var t = this.startNode();
  return t.value = e, t.raw = this.input.slice(this.start, this.end), t.raw.charCodeAt(t.raw.length - 1) === 110 && (t.bigint = t.raw.slice(0, -1).replace(/_/g, "")), this.next(), this.finishNode(t, "Literal");
};
le.parseParenExpression = function() {
  this.expect(h.parenL);
  var e = this.parseExpression();
  return this.expect(h.parenR), e;
};
le.parseParenAndDistinguishExpression = function(e) {
  var t = this.start, r = this.startLoc, n, i = this.options.ecmaVersion >= 8;
  if (this.options.ecmaVersion >= 6) {
    this.next();
    var a = this.start, s = this.startLoc, l = [], p = !0, m = !1, g = new Qt(), y = this.yieldPos, A = this.awaitPos, v;
    for (this.yieldPos = 0, this.awaitPos = 0; this.type !== h.parenR; )
      if (p ? p = !1 : this.expect(h.comma), i && this.afterTrailingComma(h.parenR, !0)) {
        m = !0;
        break;
      } else if (this.type === h.ellipsis) {
        v = this.start, l.push(this.parseParenItem(this.parseRestBinding())), this.type === h.comma && this.raise(this.start, "Comma is not permitted after the rest element");
        break;
      } else
        l.push(this.parseMaybeAssign(!1, g, this.parseParenItem));
    var F = this.start, C = this.startLoc;
    if (this.expect(h.parenR), e && !this.canInsertSemicolon() && this.eat(h.arrow))
      return this.checkPatternErrors(g, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = y, this.awaitPos = A, this.parseParenArrowList(t, r, l);
    (!l.length || m) && this.unexpected(this.lastTokStart), v && this.unexpected(v), this.checkExpressionErrors(g, !0), this.yieldPos = y || this.yieldPos, this.awaitPos = A || this.awaitPos, l.length > 1 ? (n = this.startNodeAt(a, s), n.expressions = l, this.finishNodeAt(n, "SequenceExpression", F, C)) : n = l[0];
  } else
    n = this.parseParenExpression();
  if (this.options.preserveParens) {
    var _ = this.startNodeAt(t, r);
    return _.expression = n, this.finishNode(_, "ParenthesizedExpression");
  } else
    return n;
};
le.parseParenItem = function(e) {
  return e;
};
le.parseParenArrowList = function(e, t, r) {
  return this.parseArrowExpression(this.startNodeAt(e, t), r);
};
var $s = [];
le.parseNew = function() {
  this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
  var e = this.startNode(), t = this.parseIdent(!0);
  if (this.options.ecmaVersion >= 6 && this.eat(h.dot)) {
    e.meta = t;
    var r = this.containsEsc;
    return e.property = this.parseIdent(!0), e.property.name !== "target" && this.raiseRecoverable(e.property.start, "The only valid meta property for new is 'new.target'"), r && this.raiseRecoverable(e.start, "'new.target' must not contain escaped characters"), this.inNonArrowFunction() || this.raiseRecoverable(e.start, "'new.target' can only be used in functions"), this.finishNode(e, "MetaProperty");
  }
  var n = this.start, i = this.startLoc, a = this.type === h._import;
  return e.callee = this.parseSubscripts(this.parseExprAtom(), n, i, !0), a && e.callee.type === "ImportExpression" && this.raise(n, "Cannot use new with import()"), this.eat(h.parenL) ? e.arguments = this.parseExprList(h.parenR, this.options.ecmaVersion >= 8, !1) : e.arguments = $s, this.finishNode(e, "NewExpression");
};
le.parseTemplateElement = function(e) {
  var t = e.isTagged, r = this.startNode();
  return this.type === h.invalidTemplate ? (t || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"), r.value = {
    raw: this.value,
    cooked: null
  }) : r.value = {
    raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, `
`),
    cooked: this.value
  }, this.next(), r.tail = this.type === h.backQuote, this.finishNode(r, "TemplateElement");
};
le.parseTemplate = function(e) {
  e === void 0 && (e = {});
  var t = e.isTagged;
  t === void 0 && (t = !1);
  var r = this.startNode();
  this.next(), r.expressions = [];
  var n = this.parseTemplateElement({ isTagged: t });
  for (r.quasis = [n]; !n.tail; )
    this.type === h.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(h.dollarBraceL), r.expressions.push(this.parseExpression()), this.expect(h.braceR), r.quasis.push(n = this.parseTemplateElement({ isTagged: t }));
  return this.next(), this.finishNode(r, "TemplateLiteral");
};
le.isAsyncProp = function(e) {
  return !e.computed && e.key.type === "Identifier" && e.key.name === "async" && (this.type === h.name || this.type === h.num || this.type === h.string || this.type === h.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === h.star) && !Le.test(this.input.slice(this.lastTokEnd, this.start));
};
le.parseObj = function(e, t) {
  var r = this.startNode(), n = !0, i = {};
  for (r.properties = [], this.next(); !this.eat(h.braceR); ) {
    if (n)
      n = !1;
    else if (this.expect(h.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(h.braceR))
      break;
    var a = this.parseProperty(e, t);
    e || this.checkPropClash(a, i, t), r.properties.push(a);
  }
  return this.finishNode(r, e ? "ObjectPattern" : "ObjectExpression");
};
le.parseProperty = function(e, t) {
  var r = this.startNode(), n, i, a, s;
  if (this.options.ecmaVersion >= 9 && this.eat(h.ellipsis))
    return e ? (r.argument = this.parseIdent(!1), this.type === h.comma && this.raise(this.start, "Comma is not permitted after the rest element"), this.finishNode(r, "RestElement")) : (this.type === h.parenL && t && (t.parenthesizedAssign < 0 && (t.parenthesizedAssign = this.start), t.parenthesizedBind < 0 && (t.parenthesizedBind = this.start)), r.argument = this.parseMaybeAssign(!1, t), this.type === h.comma && t && t.trailingComma < 0 && (t.trailingComma = this.start), this.finishNode(r, "SpreadElement"));
  this.options.ecmaVersion >= 6 && (r.method = !1, r.shorthand = !1, (e || t) && (a = this.start, s = this.startLoc), e || (n = this.eat(h.star)));
  var l = this.containsEsc;
  return this.parsePropertyName(r), !e && !l && this.options.ecmaVersion >= 8 && !n && this.isAsyncProp(r) ? (i = !0, n = this.options.ecmaVersion >= 9 && this.eat(h.star), this.parsePropertyName(r, t)) : i = !1, this.parsePropertyValue(r, e, n, i, a, s, t, l), this.finishNode(r, "Property");
};
le.parsePropertyValue = function(e, t, r, n, i, a, s, l) {
  if ((r || n) && this.type === h.colon && this.unexpected(), this.eat(h.colon))
    e.value = t ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, s), e.kind = "init";
  else if (this.options.ecmaVersion >= 6 && this.type === h.parenL)
    t && this.unexpected(), e.kind = "init", e.method = !0, e.value = this.parseMethod(r, n);
  else if (!t && !l && this.options.ecmaVersion >= 5 && !e.computed && e.key.type === "Identifier" && (e.key.name === "get" || e.key.name === "set") && this.type !== h.comma && this.type !== h.braceR && this.type !== h.eq) {
    (r || n) && this.unexpected(), e.kind = e.key.name, this.parsePropertyName(e), e.value = this.parseMethod(!1);
    var p = e.kind === "get" ? 0 : 1;
    if (e.value.params.length !== p) {
      var m = e.value.start;
      e.kind === "get" ? this.raiseRecoverable(m, "getter should have no params") : this.raiseRecoverable(m, "setter should have exactly one param");
    } else
      e.kind === "set" && e.value.params[0].type === "RestElement" && this.raiseRecoverable(e.value.params[0].start, "Setter cannot use rest params");
  } else
    this.options.ecmaVersion >= 6 && !e.computed && e.key.type === "Identifier" ? ((r || n) && this.unexpected(), this.checkUnreserved(e.key), e.key.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = i), e.kind = "init", t ? e.value = this.parseMaybeDefault(i, a, e.key) : this.type === h.eq && s ? (s.shorthandAssign < 0 && (s.shorthandAssign = this.start), e.value = this.parseMaybeDefault(i, a, e.key)) : e.value = e.key, e.shorthand = !0) : this.unexpected();
};
le.parsePropertyName = function(e) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(h.bracketL))
      return e.computed = !0, e.key = this.parseMaybeAssign(), this.expect(h.bracketR), e.key;
    e.computed = !1;
  }
  return e.key = this.type === h.num || this.type === h.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
};
le.initFunction = function(e) {
  e.id = null, this.options.ecmaVersion >= 6 && (e.generator = e.expression = !1), this.options.ecmaVersion >= 8 && (e.async = !1);
};
le.parseMethod = function(e, t, r) {
  var n = this.startNode(), i = this.yieldPos, a = this.awaitPos, s = this.awaitIdentPos;
  return this.initFunction(n), this.options.ecmaVersion >= 6 && (n.generator = e), this.options.ecmaVersion >= 8 && (n.async = !!t), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(Lr(t, n.generator) | Si | (r ? _i : 0)), this.expect(h.parenL), n.params = this.parseBindingList(h.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(n, !1, !0), this.yieldPos = i, this.awaitPos = a, this.awaitIdentPos = s, this.finishNode(n, "FunctionExpression");
};
le.parseArrowExpression = function(e, t, r) {
  var n = this.yieldPos, i = this.awaitPos, a = this.awaitIdentPos;
  return this.enterScope(Lr(r, !1) | Fi), this.initFunction(e), this.options.ecmaVersion >= 8 && (e.async = !!r), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, e.params = this.toAssignableList(t, !0), this.parseFunctionBody(e, !0, !1), this.yieldPos = n, this.awaitPos = i, this.awaitIdentPos = a, this.finishNode(e, "ArrowFunctionExpression");
};
le.parseFunctionBody = function(e, t, r) {
  var n = t && this.type !== h.braceL, i = this.strict, a = !1;
  if (n)
    e.body = this.parseMaybeAssign(), e.expression = !0, this.checkParams(e, !1);
  else {
    var s = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(e.params);
    (!i || s) && (a = this.strictDirective(this.end), a && s && this.raiseRecoverable(e.start, "Illegal 'use strict' directive in function with non-simple parameter list"));
    var l = this.labels;
    this.labels = [], a && (this.strict = !0), this.checkParams(e, !i && !a && !t && !r && this.isSimpleParamList(e.params)), this.strict && e.id && this.checkLVal(e.id, Ti), e.body = this.parseBlock(!1, void 0, a && !i), e.expression = !1, this.adaptDirectivePrologue(e.body.body), this.labels = l;
  }
  this.exitScope();
};
le.isSimpleParamList = function(e) {
  for (var t = 0, r = e; t < r.length; t += 1) {
    var n = r[t];
    if (n.type !== "Identifier")
      return !1;
  }
  return !0;
};
le.checkParams = function(e, t) {
  for (var r = {}, n = 0, i = e.params; n < i.length; n += 1) {
    var a = i[n];
    this.checkLVal(a, Mr, t ? null : r);
  }
};
le.parseExprList = function(e, t, r, n) {
  for (var i = [], a = !0; !this.eat(e); ) {
    if (a)
      a = !1;
    else if (this.expect(h.comma), t && this.afterTrailingComma(e))
      break;
    var s = void 0;
    r && this.type === h.comma ? s = null : this.type === h.ellipsis ? (s = this.parseSpread(n), n && this.type === h.comma && n.trailingComma < 0 && (n.trailingComma = this.start)) : s = this.parseMaybeAssign(!1, n), i.push(s);
  }
  return i;
};
le.checkUnreserved = function(e) {
  var t = e.start, r = e.end, n = e.name;
  if (this.inGenerator && n === "yield" && this.raiseRecoverable(t, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && n === "await" && this.raiseRecoverable(t, "Cannot use 'await' as identifier inside an async function"), this.keywords.test(n) && this.raise(t, "Unexpected keyword '" + n + "'"), !(this.options.ecmaVersion < 6 && this.input.slice(t, r).indexOf("\\") !== -1)) {
    var i = this.strict ? this.reservedWordsStrict : this.reservedWords;
    i.test(n) && (!this.inAsync && n === "await" && this.raiseRecoverable(t, "Cannot use keyword 'await' outside an async function"), this.raiseRecoverable(t, "The keyword '" + n + "' is reserved"));
  }
};
le.parseIdent = function(e, t) {
  var r = this.startNode();
  return this.type === h.name ? r.name = this.value : this.type.keyword ? (r.name = this.type.keyword, (r.name === "class" || r.name === "function") && (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46) && this.context.pop()) : this.unexpected(), this.next(!!e), this.finishNode(r, "Identifier"), e || (this.checkUnreserved(r), r.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = r.start)), r;
};
le.parseYield = function(e) {
  this.yieldPos || (this.yieldPos = this.start);
  var t = this.startNode();
  return this.next(), this.type === h.semi || this.canInsertSemicolon() || this.type !== h.star && !this.type.startsExpr ? (t.delegate = !1, t.argument = null) : (t.delegate = this.eat(h.star), t.argument = this.parseMaybeAssign(e)), this.finishNode(t, "YieldExpression");
};
le.parseAwait = function() {
  this.awaitPos || (this.awaitPos = this.start);
  var e = this.startNode();
  return this.next(), e.argument = this.parseMaybeUnary(null, !1), this.finishNode(e, "AwaitExpression");
};
var zt = xe.prototype;
zt.raise = function(e, t) {
  var r = Ir(this.input, e);
  t += " (" + r.line + ":" + r.column + ")";
  var n = new SyntaxError(t);
  throw n.pos = e, n.loc = r, n.raisedAt = this.pos, n;
};
zt.raiseRecoverable = zt.raise;
zt.curPosition = function() {
  if (this.options.locations)
    return new At(this.curLine, this.pos - this.lineStart);
};
var rt = xe.prototype, Js = function(t) {
  this.flags = t, this.var = [], this.lexical = [], this.functions = [];
};
rt.enterScope = function(e) {
  this.scopeStack.push(new Js(e));
};
rt.exitScope = function() {
  this.scopeStack.pop();
};
rt.treatFunctionsAsVarInScope = function(e) {
  return e.flags & Ot || !this.inModule && e.flags & wt;
};
rt.declareName = function(e, t, r) {
  var n = !1;
  if (t === Ke) {
    var i = this.currentScope();
    n = i.lexical.indexOf(e) > -1 || i.functions.indexOf(e) > -1 || i.var.indexOf(e) > -1, i.lexical.push(e), this.inModule && i.flags & wt && delete this.undefinedExports[e];
  } else if (t === wi) {
    var a = this.currentScope();
    a.lexical.push(e);
  } else if (t === Bi) {
    var s = this.currentScope();
    this.treatFunctionsAsVar ? n = s.lexical.indexOf(e) > -1 : n = s.lexical.indexOf(e) > -1 || s.var.indexOf(e) > -1, s.functions.push(e);
  } else
    for (var l = this.scopeStack.length - 1; l >= 0; --l) {
      var p = this.scopeStack[l];
      if (p.lexical.indexOf(e) > -1 && !(p.flags & bi && p.lexical[0] === e) || !this.treatFunctionsAsVarInScope(p) && p.functions.indexOf(e) > -1) {
        n = !0;
        break;
      }
      if (p.var.push(e), this.inModule && p.flags & wt && delete this.undefinedExports[e], p.flags & Rr)
        break;
    }
  n && this.raiseRecoverable(r, "Identifier '" + e + "' has already been declared");
};
rt.checkLocalExport = function(e) {
  this.scopeStack[0].lexical.indexOf(e.name) === -1 && this.scopeStack[0].var.indexOf(e.name) === -1 && (this.undefinedExports[e.name] = e);
};
rt.currentScope = function() {
  return this.scopeStack[this.scopeStack.length - 1];
};
rt.currentVarScope = function() {
  for (var e = this.scopeStack.length - 1; ; e--) {
    var t = this.scopeStack[e];
    if (t.flags & Rr)
      return t;
  }
};
rt.currentThisScope = function() {
  for (var e = this.scopeStack.length - 1; ; e--) {
    var t = this.scopeStack[e];
    if (t.flags & Rr && !(t.flags & Fi))
      return t;
  }
};
var Xt = function(t, r, n) {
  this.type = "", this.start = r, this.end = 0, t.options.locations && (this.loc = new Nt(t, n)), t.options.directSourceFile && (this.sourceFile = t.options.directSourceFile), t.options.ranges && (this.range = [r, 0]);
}, Zt = xe.prototype;
Zt.startNode = function() {
  return new Xt(this, this.start, this.startLoc);
};
Zt.startNodeAt = function(e, t) {
  return new Xt(this, e, t);
};
function Ni(e, t, r, n) {
  return e.type = t, e.end = r, this.options.locations && (e.loc.end = n), this.options.ranges && (e.range[1] = r), e;
}
Zt.finishNode = function(e, t) {
  return Ni.call(this, e, t, this.lastTokEnd, this.lastTokEndLoc);
};
Zt.finishNodeAt = function(e, t, r, n) {
  return Ni.call(this, e, t, r, n);
};
var Ve = function(t, r, n, i, a) {
  this.token = t, this.isExpr = !!r, this.preserveSpace = !!n, this.override = i, this.generator = !!a;
}, be = {
  b_stat: new Ve("{", !1),
  b_expr: new Ve("{", !0),
  b_tmpl: new Ve("${", !1),
  p_stat: new Ve("(", !1),
  p_expr: new Ve("(", !0),
  q_tmpl: new Ve("`", !0, !0, function(e) {
    return e.tryReadTemplateToken();
  }),
  f_stat: new Ve("function", !1),
  f_expr: new Ve("function", !0),
  f_expr_gen: new Ve("function", !0, !1, null, !0),
  f_gen: new Ve("function", !1, !1, null, !0)
}, er = xe.prototype;
er.initialContext = function() {
  return [be.b_stat];
};
er.braceIsBlock = function(e) {
  var t = this.curContext();
  return t === be.f_expr || t === be.f_stat ? !0 : e === h.colon && (t === be.b_stat || t === be.b_expr) ? !t.isExpr : e === h._return || e === h.name && this.exprAllowed ? Le.test(this.input.slice(this.lastTokEnd, this.start)) : e === h._else || e === h.semi || e === h.eof || e === h.parenR || e === h.arrow ? !0 : e === h.braceL ? t === be.b_stat : e === h._var || e === h._const || e === h.name ? !1 : !this.exprAllowed;
};
er.inGeneratorContext = function() {
  for (var e = this.context.length - 1; e >= 1; e--) {
    var t = this.context[e];
    if (t.token === "function")
      return t.generator;
  }
  return !1;
};
er.updateContext = function(e) {
  var t, r = this.type;
  r.keyword && e === h.dot ? this.exprAllowed = !1 : (t = r.updateContext) ? t.call(this, e) : this.exprAllowed = r.beforeExpr;
};
h.parenR.updateContext = h.braceR.updateContext = function() {
  if (this.context.length === 1) {
    this.exprAllowed = !0;
    return;
  }
  var e = this.context.pop();
  e === be.b_stat && this.curContext().token === "function" && (e = this.context.pop()), this.exprAllowed = !e.isExpr;
};
h.braceL.updateContext = function(e) {
  this.context.push(this.braceIsBlock(e) ? be.b_stat : be.b_expr), this.exprAllowed = !0;
};
h.dollarBraceL.updateContext = function() {
  this.context.push(be.b_tmpl), this.exprAllowed = !0;
};
h.parenL.updateContext = function(e) {
  var t = e === h._if || e === h._for || e === h._with || e === h._while;
  this.context.push(t ? be.p_stat : be.p_expr), this.exprAllowed = !0;
};
h.incDec.updateContext = function() {
};
h._function.updateContext = h._class.updateContext = function(e) {
  e.beforeExpr && e !== h.semi && e !== h._else && !(e === h._return && Le.test(this.input.slice(this.lastTokEnd, this.start))) && !((e === h.colon || e === h.braceL) && this.curContext() === be.b_stat) ? this.context.push(be.f_expr) : this.context.push(be.f_stat), this.exprAllowed = !1;
};
h.backQuote.updateContext = function() {
  this.curContext() === be.q_tmpl ? this.context.pop() : this.context.push(be.q_tmpl), this.exprAllowed = !1;
};
h.star.updateContext = function(e) {
  if (e === h._function) {
    var t = this.context.length - 1;
    this.context[t] === be.f_expr ? this.context[t] = be.f_expr_gen : this.context[t] = be.f_gen;
  }
  this.exprAllowed = !0;
};
h.name.updateContext = function(e) {
  var t = !1;
  this.options.ecmaVersion >= 6 && e !== h.dot && (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) && (t = !0), this.exprAllowed = t;
};
var Oi = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS", Pi = Oi + " Extended_Pictographic", Ys = Pi, Hs = {
  9: Oi,
  10: Pi,
  11: Ys
}, bn = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu", Ii = "Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb", Ri = Ii + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd", Ks = Ri + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho", Qs = {
  9: Ii,
  10: Ri,
  11: Ks
}, Li = {};
function Vr(e) {
  var t = Li[e] = {
    binary: it(Hs[e] + " " + bn),
    nonBinary: {
      General_Category: it(bn),
      Script: it(Qs[e])
    }
  };
  t.nonBinary.Script_Extensions = t.nonBinary.Script, t.nonBinary.gc = t.nonBinary.General_Category, t.nonBinary.sc = t.nonBinary.Script, t.nonBinary.scx = t.nonBinary.Script_Extensions;
}
Vr(9);
Vr(10);
Vr(11);
var ee = xe.prototype, Ze = function(t) {
  this.parser = t, this.validFlags = "gim" + (t.options.ecmaVersion >= 6 ? "uy" : "") + (t.options.ecmaVersion >= 9 ? "s" : ""), this.unicodeProperties = Li[t.options.ecmaVersion >= 11 ? 11 : t.options.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = !1, this.switchN = !1, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = !1, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = [], this.backReferenceNames = [];
};
Ze.prototype.reset = function(t, r, n) {
  var i = n.indexOf("u") !== -1;
  this.start = t | 0, this.source = r + "", this.flags = n, this.switchU = i && this.parser.options.ecmaVersion >= 6, this.switchN = i && this.parser.options.ecmaVersion >= 9;
};
Ze.prototype.raise = function(t) {
  this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + t);
};
Ze.prototype.at = function(t, r) {
  r === void 0 && (r = !1);
  var n = this.source, i = n.length;
  if (t >= i)
    return -1;
  var a = n.charCodeAt(t);
  if (!(r || this.switchU) || a <= 55295 || a >= 57344 || t + 1 >= i)
    return a;
  var s = n.charCodeAt(t + 1);
  return s >= 56320 && s <= 57343 ? (a << 10) + s - 56613888 : a;
};
Ze.prototype.nextIndex = function(t, r) {
  r === void 0 && (r = !1);
  var n = this.source, i = n.length;
  if (t >= i)
    return i;
  var a = n.charCodeAt(t), s;
  return !(r || this.switchU) || a <= 55295 || a >= 57344 || t + 1 >= i || (s = n.charCodeAt(t + 1)) < 56320 || s > 57343 ? t + 1 : t + 2;
};
Ze.prototype.current = function(t) {
  return t === void 0 && (t = !1), this.at(this.pos, t);
};
Ze.prototype.lookahead = function(t) {
  return t === void 0 && (t = !1), this.at(this.nextIndex(this.pos, t), t);
};
Ze.prototype.advance = function(t) {
  t === void 0 && (t = !1), this.pos = this.nextIndex(this.pos, t);
};
Ze.prototype.eat = function(t, r) {
  return r === void 0 && (r = !1), this.current(r) === t ? (this.advance(r), !0) : !1;
};
function Gt(e) {
  return e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
}
ee.validateRegExpFlags = function(e) {
  for (var t = e.validFlags, r = e.flags, n = 0; n < r.length; n++) {
    var i = r.charAt(n);
    t.indexOf(i) === -1 && this.raise(e.start, "Invalid regular expression flag"), r.indexOf(i, n + 1) > -1 && this.raise(e.start, "Duplicate regular expression flag");
  }
};
ee.validateRegExpPattern = function(e) {
  this.regexp_pattern(e), !e.switchN && this.options.ecmaVersion >= 9 && e.groupNames.length > 0 && (e.switchN = !0, this.regexp_pattern(e));
};
ee.regexp_pattern = function(e) {
  e.pos = 0, e.lastIntValue = 0, e.lastStringValue = "", e.lastAssertionIsQuantifiable = !1, e.numCapturingParens = 0, e.maxBackReference = 0, e.groupNames.length = 0, e.backReferenceNames.length = 0, this.regexp_disjunction(e), e.pos !== e.source.length && (e.eat(41) && e.raise("Unmatched ')'"), (e.eat(93) || e.eat(125)) && e.raise("Lone quantifier brackets")), e.maxBackReference > e.numCapturingParens && e.raise("Invalid escape");
  for (var t = 0, r = e.backReferenceNames; t < r.length; t += 1) {
    var n = r[t];
    e.groupNames.indexOf(n) === -1 && e.raise("Invalid named capture referenced");
  }
};
ee.regexp_disjunction = function(e) {
  for (this.regexp_alternative(e); e.eat(124); )
    this.regexp_alternative(e);
  this.regexp_eatQuantifier(e, !0) && e.raise("Nothing to repeat"), e.eat(123) && e.raise("Lone quantifier brackets");
};
ee.regexp_alternative = function(e) {
  for (; e.pos < e.source.length && this.regexp_eatTerm(e); )
    ;
};
ee.regexp_eatTerm = function(e) {
  return this.regexp_eatAssertion(e) ? (e.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(e) && e.switchU && e.raise("Invalid quantifier"), !0) : (e.switchU ? this.regexp_eatAtom(e) : this.regexp_eatExtendedAtom(e)) ? (this.regexp_eatQuantifier(e), !0) : !1;
};
ee.regexp_eatAssertion = function(e) {
  var t = e.pos;
  if (e.lastAssertionIsQuantifiable = !1, e.eat(94) || e.eat(36))
    return !0;
  if (e.eat(92)) {
    if (e.eat(66) || e.eat(98))
      return !0;
    e.pos = t;
  }
  if (e.eat(40) && e.eat(63)) {
    var r = !1;
    if (this.options.ecmaVersion >= 9 && (r = e.eat(60)), e.eat(61) || e.eat(33))
      return this.regexp_disjunction(e), e.eat(41) || e.raise("Unterminated group"), e.lastAssertionIsQuantifiable = !r, !0;
  }
  return e.pos = t, !1;
};
ee.regexp_eatQuantifier = function(e, t) {
  return t === void 0 && (t = !1), this.regexp_eatQuantifierPrefix(e, t) ? (e.eat(63), !0) : !1;
};
ee.regexp_eatQuantifierPrefix = function(e, t) {
  return e.eat(42) || e.eat(43) || e.eat(63) || this.regexp_eatBracedQuantifier(e, t);
};
ee.regexp_eatBracedQuantifier = function(e, t) {
  var r = e.pos;
  if (e.eat(123)) {
    var n = 0, i = -1;
    if (this.regexp_eatDecimalDigits(e) && (n = e.lastIntValue, e.eat(44) && this.regexp_eatDecimalDigits(e) && (i = e.lastIntValue), e.eat(125)))
      return i !== -1 && i < n && !t && e.raise("numbers out of order in {} quantifier"), !0;
    e.switchU && !t && e.raise("Incomplete quantifier"), e.pos = r;
  }
  return !1;
};
ee.regexp_eatAtom = function(e) {
  return this.regexp_eatPatternCharacters(e) || e.eat(46) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e);
};
ee.regexp_eatReverseSolidusAtomEscape = function(e) {
  var t = e.pos;
  if (e.eat(92)) {
    if (this.regexp_eatAtomEscape(e))
      return !0;
    e.pos = t;
  }
  return !1;
};
ee.regexp_eatUncapturingGroup = function(e) {
  var t = e.pos;
  if (e.eat(40)) {
    if (e.eat(63) && e.eat(58)) {
      if (this.regexp_disjunction(e), e.eat(41))
        return !0;
      e.raise("Unterminated group");
    }
    e.pos = t;
  }
  return !1;
};
ee.regexp_eatCapturingGroup = function(e) {
  if (e.eat(40)) {
    if (this.options.ecmaVersion >= 9 ? this.regexp_groupSpecifier(e) : e.current() === 63 && e.raise("Invalid group"), this.regexp_disjunction(e), e.eat(41))
      return e.numCapturingParens += 1, !0;
    e.raise("Unterminated group");
  }
  return !1;
};
ee.regexp_eatExtendedAtom = function(e) {
  return e.eat(46) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e) || this.regexp_eatInvalidBracedQuantifier(e) || this.regexp_eatExtendedPatternCharacter(e);
};
ee.regexp_eatInvalidBracedQuantifier = function(e) {
  return this.regexp_eatBracedQuantifier(e, !0) && e.raise("Nothing to repeat"), !1;
};
ee.regexp_eatSyntaxCharacter = function(e) {
  var t = e.current();
  return Mi(t) ? (e.lastIntValue = t, e.advance(), !0) : !1;
};
function Mi(e) {
  return e === 36 || e >= 40 && e <= 43 || e === 46 || e === 63 || e >= 91 && e <= 94 || e >= 123 && e <= 125;
}
ee.regexp_eatPatternCharacters = function(e) {
  for (var t = e.pos, r = 0; (r = e.current()) !== -1 && !Mi(r); )
    e.advance();
  return e.pos !== t;
};
ee.regexp_eatExtendedPatternCharacter = function(e) {
  var t = e.current();
  return t !== -1 && t !== 36 && !(t >= 40 && t <= 43) && t !== 46 && t !== 63 && t !== 91 && t !== 94 && t !== 124 ? (e.advance(), !0) : !1;
};
ee.regexp_groupSpecifier = function(e) {
  if (e.eat(63)) {
    if (this.regexp_eatGroupName(e)) {
      e.groupNames.indexOf(e.lastStringValue) !== -1 && e.raise("Duplicate capture group name"), e.groupNames.push(e.lastStringValue);
      return;
    }
    e.raise("Invalid group");
  }
};
ee.regexp_eatGroupName = function(e) {
  if (e.lastStringValue = "", e.eat(60)) {
    if (this.regexp_eatRegExpIdentifierName(e) && e.eat(62))
      return !0;
    e.raise("Invalid capture group name");
  }
  return !1;
};
ee.regexp_eatRegExpIdentifierName = function(e) {
  if (e.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(e)) {
    for (e.lastStringValue += Gt(e.lastIntValue); this.regexp_eatRegExpIdentifierPart(e); )
      e.lastStringValue += Gt(e.lastIntValue);
    return !0;
  }
  return !1;
};
ee.regexp_eatRegExpIdentifierStart = function(e) {
  var t = e.pos, r = this.options.ecmaVersion >= 11, n = e.current(r);
  return e.advance(r), n === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, r) && (n = e.lastIntValue), Xs(n) ? (e.lastIntValue = n, !0) : (e.pos = t, !1);
};
function Xs(e) {
  return Qe(e, !0) || e === 36 || e === 95;
}
ee.regexp_eatRegExpIdentifierPart = function(e) {
  var t = e.pos, r = this.options.ecmaVersion >= 11, n = e.current(r);
  return e.advance(r), n === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, r) && (n = e.lastIntValue), Zs(n) ? (e.lastIntValue = n, !0) : (e.pos = t, !1);
};
function Zs(e) {
  return ut(e, !0) || e === 36 || e === 95 || e === 8204 || e === 8205;
}
ee.regexp_eatAtomEscape = function(e) {
  return this.regexp_eatBackReference(e) || this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e) || e.switchN && this.regexp_eatKGroupName(e) ? !0 : (e.switchU && (e.current() === 99 && e.raise("Invalid unicode escape"), e.raise("Invalid escape")), !1);
};
ee.regexp_eatBackReference = function(e) {
  var t = e.pos;
  if (this.regexp_eatDecimalEscape(e)) {
    var r = e.lastIntValue;
    if (e.switchU)
      return r > e.maxBackReference && (e.maxBackReference = r), !0;
    if (r <= e.numCapturingParens)
      return !0;
    e.pos = t;
  }
  return !1;
};
ee.regexp_eatKGroupName = function(e) {
  if (e.eat(107)) {
    if (this.regexp_eatGroupName(e))
      return e.backReferenceNames.push(e.lastStringValue), !0;
    e.raise("Invalid named reference");
  }
  return !1;
};
ee.regexp_eatCharacterEscape = function(e) {
  return this.regexp_eatControlEscape(e) || this.regexp_eatCControlLetter(e) || this.regexp_eatZero(e) || this.regexp_eatHexEscapeSequence(e) || this.regexp_eatRegExpUnicodeEscapeSequence(e, !1) || !e.switchU && this.regexp_eatLegacyOctalEscapeSequence(e) || this.regexp_eatIdentityEscape(e);
};
ee.regexp_eatCControlLetter = function(e) {
  var t = e.pos;
  if (e.eat(99)) {
    if (this.regexp_eatControlLetter(e))
      return !0;
    e.pos = t;
  }
  return !1;
};
ee.regexp_eatZero = function(e) {
  return e.current() === 48 && !tr(e.lookahead()) ? (e.lastIntValue = 0, e.advance(), !0) : !1;
};
ee.regexp_eatControlEscape = function(e) {
  var t = e.current();
  return t === 116 ? (e.lastIntValue = 9, e.advance(), !0) : t === 110 ? (e.lastIntValue = 10, e.advance(), !0) : t === 118 ? (e.lastIntValue = 11, e.advance(), !0) : t === 102 ? (e.lastIntValue = 12, e.advance(), !0) : t === 114 ? (e.lastIntValue = 13, e.advance(), !0) : !1;
};
ee.regexp_eatControlLetter = function(e) {
  var t = e.current();
  return ji(t) ? (e.lastIntValue = t % 32, e.advance(), !0) : !1;
};
function ji(e) {
  return e >= 65 && e <= 90 || e >= 97 && e <= 122;
}
ee.regexp_eatRegExpUnicodeEscapeSequence = function(e, t) {
  t === void 0 && (t = !1);
  var r = e.pos, n = t || e.switchU;
  if (e.eat(117)) {
    if (this.regexp_eatFixedHexDigits(e, 4)) {
      var i = e.lastIntValue;
      if (n && i >= 55296 && i <= 56319) {
        var a = e.pos;
        if (e.eat(92) && e.eat(117) && this.regexp_eatFixedHexDigits(e, 4)) {
          var s = e.lastIntValue;
          if (s >= 56320 && s <= 57343)
            return e.lastIntValue = (i - 55296) * 1024 + (s - 56320) + 65536, !0;
        }
        e.pos = a, e.lastIntValue = i;
      }
      return !0;
    }
    if (n && e.eat(123) && this.regexp_eatHexDigits(e) && e.eat(125) && eo(e.lastIntValue))
      return !0;
    n && e.raise("Invalid unicode escape"), e.pos = r;
  }
  return !1;
};
function eo(e) {
  return e >= 0 && e <= 1114111;
}
ee.regexp_eatIdentityEscape = function(e) {
  if (e.switchU)
    return this.regexp_eatSyntaxCharacter(e) ? !0 : e.eat(47) ? (e.lastIntValue = 47, !0) : !1;
  var t = e.current();
  return t !== 99 && (!e.switchN || t !== 107) ? (e.lastIntValue = t, e.advance(), !0) : !1;
};
ee.regexp_eatDecimalEscape = function(e) {
  e.lastIntValue = 0;
  var t = e.current();
  if (t >= 49 && t <= 57) {
    do
      e.lastIntValue = 10 * e.lastIntValue + (t - 48), e.advance();
    while ((t = e.current()) >= 48 && t <= 57);
    return !0;
  }
  return !1;
};
ee.regexp_eatCharacterClassEscape = function(e) {
  var t = e.current();
  if (to(t))
    return e.lastIntValue = -1, e.advance(), !0;
  if (e.switchU && this.options.ecmaVersion >= 9 && (t === 80 || t === 112)) {
    if (e.lastIntValue = -1, e.advance(), e.eat(123) && this.regexp_eatUnicodePropertyValueExpression(e) && e.eat(125))
      return !0;
    e.raise("Invalid property name");
  }
  return !1;
};
function to(e) {
  return e === 100 || e === 68 || e === 115 || e === 83 || e === 119 || e === 87;
}
ee.regexp_eatUnicodePropertyValueExpression = function(e) {
  var t = e.pos;
  if (this.regexp_eatUnicodePropertyName(e) && e.eat(61)) {
    var r = e.lastStringValue;
    if (this.regexp_eatUnicodePropertyValue(e)) {
      var n = e.lastStringValue;
      return this.regexp_validateUnicodePropertyNameAndValue(e, r, n), !0;
    }
  }
  if (e.pos = t, this.regexp_eatLoneUnicodePropertyNameOrValue(e)) {
    var i = e.lastStringValue;
    return this.regexp_validateUnicodePropertyNameOrValue(e, i), !0;
  }
  return !1;
};
ee.regexp_validateUnicodePropertyNameAndValue = function(e, t, r) {
  Kt(e.unicodeProperties.nonBinary, t) || e.raise("Invalid property name"), e.unicodeProperties.nonBinary[t].test(r) || e.raise("Invalid property value");
};
ee.regexp_validateUnicodePropertyNameOrValue = function(e, t) {
  e.unicodeProperties.binary.test(t) || e.raise("Invalid property name");
};
ee.regexp_eatUnicodePropertyName = function(e) {
  var t = 0;
  for (e.lastStringValue = ""; Vi(t = e.current()); )
    e.lastStringValue += Gt(t), e.advance();
  return e.lastStringValue !== "";
};
function Vi(e) {
  return ji(e) || e === 95;
}
ee.regexp_eatUnicodePropertyValue = function(e) {
  var t = 0;
  for (e.lastStringValue = ""; ro(t = e.current()); )
    e.lastStringValue += Gt(t), e.advance();
  return e.lastStringValue !== "";
};
function ro(e) {
  return Vi(e) || tr(e);
}
ee.regexp_eatLoneUnicodePropertyNameOrValue = function(e) {
  return this.regexp_eatUnicodePropertyValue(e);
};
ee.regexp_eatCharacterClass = function(e) {
  if (e.eat(91)) {
    if (e.eat(94), this.regexp_classRanges(e), e.eat(93))
      return !0;
    e.raise("Unterminated character class");
  }
  return !1;
};
ee.regexp_classRanges = function(e) {
  for (; this.regexp_eatClassAtom(e); ) {
    var t = e.lastIntValue;
    if (e.eat(45) && this.regexp_eatClassAtom(e)) {
      var r = e.lastIntValue;
      e.switchU && (t === -1 || r === -1) && e.raise("Invalid character class"), t !== -1 && r !== -1 && t > r && e.raise("Range out of order in character class");
    }
  }
};
ee.regexp_eatClassAtom = function(e) {
  var t = e.pos;
  if (e.eat(92)) {
    if (this.regexp_eatClassEscape(e))
      return !0;
    if (e.switchU) {
      var r = e.current();
      (r === 99 || Wi(r)) && e.raise("Invalid class escape"), e.raise("Invalid escape");
    }
    e.pos = t;
  }
  var n = e.current();
  return n !== 93 ? (e.lastIntValue = n, e.advance(), !0) : !1;
};
ee.regexp_eatClassEscape = function(e) {
  var t = e.pos;
  if (e.eat(98))
    return e.lastIntValue = 8, !0;
  if (e.switchU && e.eat(45))
    return e.lastIntValue = 45, !0;
  if (!e.switchU && e.eat(99)) {
    if (this.regexp_eatClassControlLetter(e))
      return !0;
    e.pos = t;
  }
  return this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e);
};
ee.regexp_eatClassControlLetter = function(e) {
  var t = e.current();
  return tr(t) || t === 95 ? (e.lastIntValue = t % 32, e.advance(), !0) : !1;
};
ee.regexp_eatHexEscapeSequence = function(e) {
  var t = e.pos;
  if (e.eat(120)) {
    if (this.regexp_eatFixedHexDigits(e, 2))
      return !0;
    e.switchU && e.raise("Invalid escape"), e.pos = t;
  }
  return !1;
};
ee.regexp_eatDecimalDigits = function(e) {
  var t = e.pos, r = 0;
  for (e.lastIntValue = 0; tr(r = e.current()); )
    e.lastIntValue = 10 * e.lastIntValue + (r - 48), e.advance();
  return e.pos !== t;
};
function tr(e) {
  return e >= 48 && e <= 57;
}
ee.regexp_eatHexDigits = function(e) {
  var t = e.pos, r = 0;
  for (e.lastIntValue = 0; qi(r = e.current()); )
    e.lastIntValue = 16 * e.lastIntValue + Ui(r), e.advance();
  return e.pos !== t;
};
function qi(e) {
  return e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102;
}
function Ui(e) {
  return e >= 65 && e <= 70 ? 10 + (e - 65) : e >= 97 && e <= 102 ? 10 + (e - 97) : e - 48;
}
ee.regexp_eatLegacyOctalEscapeSequence = function(e) {
  if (this.regexp_eatOctalDigit(e)) {
    var t = e.lastIntValue;
    if (this.regexp_eatOctalDigit(e)) {
      var r = e.lastIntValue;
      t <= 3 && this.regexp_eatOctalDigit(e) ? e.lastIntValue = t * 64 + r * 8 + e.lastIntValue : e.lastIntValue = t * 8 + r;
    } else
      e.lastIntValue = t;
    return !0;
  }
  return !1;
};
ee.regexp_eatOctalDigit = function(e) {
  var t = e.current();
  return Wi(t) ? (e.lastIntValue = t - 48, e.advance(), !0) : (e.lastIntValue = 0, !1);
};
function Wi(e) {
  return e >= 48 && e <= 55;
}
ee.regexp_eatFixedHexDigits = function(e, t) {
  var r = e.pos;
  e.lastIntValue = 0;
  for (var n = 0; n < t; ++n) {
    var i = e.current();
    if (!qi(i))
      return e.pos = r, !1;
    e.lastIntValue = 16 * e.lastIntValue + Ui(i), e.advance();
  }
  return !0;
};
var rr = function(t) {
  this.type = t.type, this.value = t.value, this.start = t.start, this.end = t.end, t.options.locations && (this.loc = new Nt(t, t.startLoc, t.endLoc)), t.options.ranges && (this.range = [t.start, t.end]);
}, fe = xe.prototype;
fe.next = function(e) {
  !e && this.type.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword), this.options.onToken && this.options.onToken(new rr(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken();
};
fe.getToken = function() {
  return this.next(), new rr(this);
};
typeof Symbol < "u" && (fe[Symbol.iterator] = function() {
  var e = this;
  return {
    next: function() {
      var t = e.getToken();
      return {
        done: t.type === h.eof,
        value: t
      };
    }
  };
});
fe.curContext = function() {
  return this.context[this.context.length - 1];
};
fe.nextToken = function() {
  var e = this.curContext();
  if ((!e || !e.preserveSpace) && this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length)
    return this.finishToken(h.eof);
  if (e.override)
    return e.override(this);
  this.readToken(this.fullCharCodeAtPos());
};
fe.readToken = function(e) {
  return Qe(e, this.options.ecmaVersion >= 6) || e === 92 ? this.readWord() : this.getTokenFromCode(e);
};
fe.fullCharCodeAtPos = function() {
  var e = this.input.charCodeAt(this.pos);
  if (e <= 55295 || e >= 57344)
    return e;
  var t = this.input.charCodeAt(this.pos + 1);
  return (e << 10) + t - 56613888;
};
fe.skipBlockComment = function() {
  var e = this.options.onComment && this.curPosition(), t = this.pos, r = this.input.indexOf("*/", this.pos += 2);
  if (r === -1 && this.raise(this.pos - 2, "Unterminated comment"), this.pos = r + 2, this.options.locations) {
    gt.lastIndex = t;
    for (var n; (n = gt.exec(this.input)) && n.index < this.pos; )
      ++this.curLine, this.lineStart = n.index + n[0].length;
  }
  this.options.onComment && this.options.onComment(
    !0,
    this.input.slice(t + 2, r),
    t,
    this.pos,
    e,
    this.curPosition()
  );
};
fe.skipLineComment = function(e) {
  for (var t = this.pos, r = this.options.onComment && this.curPosition(), n = this.input.charCodeAt(this.pos += e); this.pos < this.input.length && !yt(n); )
    n = this.input.charCodeAt(++this.pos);
  this.options.onComment && this.options.onComment(
    !1,
    this.input.slice(t + e, this.pos),
    t,
    this.pos,
    r,
    this.curPosition()
  );
};
fe.skipSpace = function() {
  e:
    for (; this.pos < this.input.length; ) {
      var e = this.input.charCodeAt(this.pos);
      switch (e) {
        case 32:
        case 160:
          ++this.pos;
          break;
        case 13:
          this.input.charCodeAt(this.pos + 1) === 10 && ++this.pos;
        case 10:
        case 8232:
        case 8233:
          ++this.pos, this.options.locations && (++this.curLine, this.lineStart = this.pos);
          break;
        case 47:
          switch (this.input.charCodeAt(this.pos + 1)) {
            case 42:
              this.skipBlockComment();
              break;
            case 47:
              this.skipLineComment(2);
              break;
            default:
              break e;
          }
          break;
        default:
          if (e > 8 && e < 14 || e >= 5760 && Pr.test(String.fromCharCode(e)))
            ++this.pos;
          else
            break e;
      }
    }
};
fe.finishToken = function(e, t) {
  this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
  var r = this.type;
  this.type = e, this.value = t, this.updateContext(r);
};
fe.readToken_dot = function() {
  var e = this.input.charCodeAt(this.pos + 1);
  if (e >= 48 && e <= 57)
    return this.readNumber(!0);
  var t = this.input.charCodeAt(this.pos + 2);
  return this.options.ecmaVersion >= 6 && e === 46 && t === 46 ? (this.pos += 3, this.finishToken(h.ellipsis)) : (++this.pos, this.finishToken(h.dot));
};
fe.readToken_slash = function() {
  var e = this.input.charCodeAt(this.pos + 1);
  return this.exprAllowed ? (++this.pos, this.readRegexp()) : e === 61 ? this.finishOp(h.assign, 2) : this.finishOp(h.slash, 1);
};
fe.readToken_mult_modulo_exp = function(e) {
  var t = this.input.charCodeAt(this.pos + 1), r = 1, n = e === 42 ? h.star : h.modulo;
  return this.options.ecmaVersion >= 7 && e === 42 && t === 42 && (++r, n = h.starstar, t = this.input.charCodeAt(this.pos + 2)), t === 61 ? this.finishOp(h.assign, r + 1) : this.finishOp(n, r);
};
fe.readToken_pipe_amp = function(e) {
  var t = this.input.charCodeAt(this.pos + 1);
  if (t === e) {
    if (this.options.ecmaVersion >= 12) {
      var r = this.input.charCodeAt(this.pos + 2);
      if (r === 61)
        return this.finishOp(h.assign, 3);
    }
    return this.finishOp(e === 124 ? h.logicalOR : h.logicalAND, 2);
  }
  return t === 61 ? this.finishOp(h.assign, 2) : this.finishOp(e === 124 ? h.bitwiseOR : h.bitwiseAND, 1);
};
fe.readToken_caret = function() {
  var e = this.input.charCodeAt(this.pos + 1);
  return e === 61 ? this.finishOp(h.assign, 2) : this.finishOp(h.bitwiseXOR, 1);
};
fe.readToken_plus_min = function(e) {
  var t = this.input.charCodeAt(this.pos + 1);
  return t === e ? t === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || Le.test(this.input.slice(this.lastTokEnd, this.pos))) ? (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : this.finishOp(h.incDec, 2) : t === 61 ? this.finishOp(h.assign, 2) : this.finishOp(h.plusMin, 1);
};
fe.readToken_lt_gt = function(e) {
  var t = this.input.charCodeAt(this.pos + 1), r = 1;
  return t === e ? (r = e === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2, this.input.charCodeAt(this.pos + r) === 61 ? this.finishOp(h.assign, r + 1) : this.finishOp(h.bitShift, r)) : t === 33 && e === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45 ? (this.skipLineComment(4), this.skipSpace(), this.nextToken()) : (t === 61 && (r = 2), this.finishOp(h.relational, r));
};
fe.readToken_eq_excl = function(e) {
  var t = this.input.charCodeAt(this.pos + 1);
  return t === 61 ? this.finishOp(h.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2) : e === 61 && t === 62 && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(h.arrow)) : this.finishOp(e === 61 ? h.eq : h.prefix, 1);
};
fe.readToken_question = function() {
  var e = this.options.ecmaVersion;
  if (e >= 11) {
    var t = this.input.charCodeAt(this.pos + 1);
    if (t === 46) {
      var r = this.input.charCodeAt(this.pos + 2);
      if (r < 48 || r > 57)
        return this.finishOp(h.questionDot, 2);
    }
    if (t === 63) {
      if (e >= 12) {
        var n = this.input.charCodeAt(this.pos + 2);
        if (n === 61)
          return this.finishOp(h.assign, 3);
      }
      return this.finishOp(h.coalesce, 2);
    }
  }
  return this.finishOp(h.question, 1);
};
fe.getTokenFromCode = function(e) {
  switch (e) {
    case 46:
      return this.readToken_dot();
    case 40:
      return ++this.pos, this.finishToken(h.parenL);
    case 41:
      return ++this.pos, this.finishToken(h.parenR);
    case 59:
      return ++this.pos, this.finishToken(h.semi);
    case 44:
      return ++this.pos, this.finishToken(h.comma);
    case 91:
      return ++this.pos, this.finishToken(h.bracketL);
    case 93:
      return ++this.pos, this.finishToken(h.bracketR);
    case 123:
      return ++this.pos, this.finishToken(h.braceL);
    case 125:
      return ++this.pos, this.finishToken(h.braceR);
    case 58:
      return ++this.pos, this.finishToken(h.colon);
    case 96:
      if (this.options.ecmaVersion < 6)
        break;
      return ++this.pos, this.finishToken(h.backQuote);
    case 48:
      var t = this.input.charCodeAt(this.pos + 1);
      if (t === 120 || t === 88)
        return this.readRadixNumber(16);
      if (this.options.ecmaVersion >= 6) {
        if (t === 111 || t === 79)
          return this.readRadixNumber(8);
        if (t === 98 || t === 66)
          return this.readRadixNumber(2);
      }
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return this.readNumber(!1);
    case 34:
    case 39:
      return this.readString(e);
    case 47:
      return this.readToken_slash();
    case 37:
    case 42:
      return this.readToken_mult_modulo_exp(e);
    case 124:
    case 38:
      return this.readToken_pipe_amp(e);
    case 94:
      return this.readToken_caret();
    case 43:
    case 45:
      return this.readToken_plus_min(e);
    case 60:
    case 62:
      return this.readToken_lt_gt(e);
    case 61:
    case 33:
      return this.readToken_eq_excl(e);
    case 63:
      return this.readToken_question();
    case 126:
      return this.finishOp(h.prefix, 1);
  }
  this.raise(this.pos, "Unexpected character '" + qr(e) + "'");
};
fe.finishOp = function(e, t) {
  var r = this.input.slice(this.pos, this.pos + t);
  return this.pos += t, this.finishToken(e, r);
};
fe.readRegexp = function() {
  for (var e, t, r = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(r, "Unterminated regular expression");
    var n = this.input.charAt(this.pos);
    if (Le.test(n) && this.raise(r, "Unterminated regular expression"), e)
      e = !1;
    else {
      if (n === "[")
        t = !0;
      else if (n === "]" && t)
        t = !1;
      else if (n === "/" && !t)
        break;
      e = n === "\\";
    }
    ++this.pos;
  }
  var i = this.input.slice(r, this.pos);
  ++this.pos;
  var a = this.pos, s = this.readWord1();
  this.containsEsc && this.unexpected(a);
  var l = this.regexpState || (this.regexpState = new Ze(this));
  l.reset(r, i, s), this.validateRegExpFlags(l), this.validateRegExpPattern(l);
  var p = null;
  try {
    p = new RegExp(i, s);
  } catch {
  }
  return this.finishToken(h.regexp, { pattern: i, flags: s, value: p });
};
fe.readInt = function(e, t, r) {
  for (var n = this.options.ecmaVersion >= 12 && t === void 0, i = r && this.input.charCodeAt(this.pos) === 48, a = this.pos, s = 0, l = 0, p = 0, m = t == null ? 1 / 0 : t; p < m; ++p, ++this.pos) {
    var g = this.input.charCodeAt(this.pos), y = void 0;
    if (n && g === 95) {
      i && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"), l === 95 && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"), p === 0 && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"), l = g;
      continue;
    }
    if (g >= 97 ? y = g - 97 + 10 : g >= 65 ? y = g - 65 + 10 : g >= 48 && g <= 57 ? y = g - 48 : y = 1 / 0, y >= e)
      break;
    l = g, s = s * e + y;
  }
  return n && l === 95 && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"), this.pos === a || t != null && this.pos - a !== t ? null : s;
};
function no(e, t) {
  return t ? parseInt(e, 8) : parseFloat(e.replace(/_/g, ""));
}
function zi(e) {
  return typeof BigInt != "function" ? null : BigInt(e.replace(/_/g, ""));
}
fe.readRadixNumber = function(e) {
  var t = this.pos;
  this.pos += 2;
  var r = this.readInt(e);
  return r == null && this.raise(this.start + 2, "Expected number in radix " + e), this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110 ? (r = zi(this.input.slice(t, this.pos)), ++this.pos) : Qe(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(h.num, r);
};
fe.readNumber = function(e) {
  var t = this.pos;
  !e && this.readInt(10, void 0, !0) === null && this.raise(t, "Invalid number");
  var r = this.pos - t >= 2 && this.input.charCodeAt(t) === 48;
  r && this.strict && this.raise(t, "Invalid number");
  var n = this.input.charCodeAt(this.pos);
  if (!r && !e && this.options.ecmaVersion >= 11 && n === 110) {
    var i = zi(this.input.slice(t, this.pos));
    return ++this.pos, Qe(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(h.num, i);
  }
  r && /[89]/.test(this.input.slice(t, this.pos)) && (r = !1), n === 46 && !r && (++this.pos, this.readInt(10), n = this.input.charCodeAt(this.pos)), (n === 69 || n === 101) && !r && (n = this.input.charCodeAt(++this.pos), (n === 43 || n === 45) && ++this.pos, this.readInt(10) === null && this.raise(t, "Invalid number")), Qe(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
  var a = no(this.input.slice(t, this.pos), r);
  return this.finishToken(h.num, a);
};
fe.readCodePoint = function() {
  var e = this.input.charCodeAt(this.pos), t;
  if (e === 123) {
    this.options.ecmaVersion < 6 && this.unexpected();
    var r = ++this.pos;
    t = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, t > 1114111 && this.invalidStringToken(r, "Code point out of bounds");
  } else
    t = this.readHexChar(4);
  return t;
};
function qr(e) {
  return e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
}
fe.readString = function(e) {
  for (var t = "", r = ++this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
    var n = this.input.charCodeAt(this.pos);
    if (n === e)
      break;
    n === 92 ? (t += this.input.slice(r, this.pos), t += this.readEscapedChar(!1), r = this.pos) : (yt(n, this.options.ecmaVersion >= 10) && this.raise(this.start, "Unterminated string constant"), ++this.pos);
  }
  return t += this.input.slice(r, this.pos++), this.finishToken(h.string, t);
};
var Gi = {};
fe.tryReadTemplateToken = function() {
  this.inTemplateElement = !0;
  try {
    this.readTmplToken();
  } catch (e) {
    if (e === Gi)
      this.readInvalidTemplateToken();
    else
      throw e;
  }
  this.inTemplateElement = !1;
};
fe.invalidStringToken = function(e, t) {
  if (this.inTemplateElement && this.options.ecmaVersion >= 9)
    throw Gi;
  this.raise(e, t);
};
fe.readTmplToken = function() {
  for (var e = "", t = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
    var r = this.input.charCodeAt(this.pos);
    if (r === 96 || r === 36 && this.input.charCodeAt(this.pos + 1) === 123)
      return this.pos === this.start && (this.type === h.template || this.type === h.invalidTemplate) ? r === 36 ? (this.pos += 2, this.finishToken(h.dollarBraceL)) : (++this.pos, this.finishToken(h.backQuote)) : (e += this.input.slice(t, this.pos), this.finishToken(h.template, e));
    if (r === 92)
      e += this.input.slice(t, this.pos), e += this.readEscapedChar(!0), t = this.pos;
    else if (yt(r)) {
      switch (e += this.input.slice(t, this.pos), ++this.pos, r) {
        case 13:
          this.input.charCodeAt(this.pos) === 10 && ++this.pos;
        case 10:
          e += `
`;
          break;
        default:
          e += String.fromCharCode(r);
          break;
      }
      this.options.locations && (++this.curLine, this.lineStart = this.pos), t = this.pos;
    } else
      ++this.pos;
  }
};
fe.readInvalidTemplateToken = function() {
  for (; this.pos < this.input.length; this.pos++)
    switch (this.input[this.pos]) {
      case "\\":
        ++this.pos;
        break;
      case "$":
        if (this.input[this.pos + 1] !== "{")
          break;
      case "`":
        return this.finishToken(h.invalidTemplate, this.input.slice(this.start, this.pos));
    }
  this.raise(this.start, "Unterminated template");
};
fe.readEscapedChar = function(e) {
  var t = this.input.charCodeAt(++this.pos);
  switch (++this.pos, t) {
    case 110:
      return `
`;
    case 114:
      return "\r";
    case 120:
      return String.fromCharCode(this.readHexChar(2));
    case 117:
      return qr(this.readCodePoint());
    case 116:
      return "	";
    case 98:
      return "\b";
    case 118:
      return "\v";
    case 102:
      return "\f";
    case 13:
      this.input.charCodeAt(this.pos) === 10 && ++this.pos;
    case 10:
      return this.options.locations && (this.lineStart = this.pos, ++this.curLine), "";
    case 56:
    case 57:
      if (e) {
        var r = this.pos - 1;
        return this.invalidStringToken(
          r,
          "Invalid escape sequence in template string"
        ), null;
      }
    default:
      if (t >= 48 && t <= 55) {
        var n = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0], i = parseInt(n, 8);
        return i > 255 && (n = n.slice(0, -1), i = parseInt(n, 8)), this.pos += n.length - 1, t = this.input.charCodeAt(this.pos), (n !== "0" || t === 56 || t === 57) && (this.strict || e) && this.invalidStringToken(
          this.pos - 1 - n.length,
          e ? "Octal literal in template string" : "Octal literal in strict mode"
        ), String.fromCharCode(i);
      }
      return yt(t) ? "" : String.fromCharCode(t);
  }
};
fe.readHexChar = function(e) {
  var t = this.pos, r = this.readInt(16, e);
  return r === null && this.invalidStringToken(t, "Bad character escape sequence"), r;
};
fe.readWord1 = function() {
  this.containsEsc = !1;
  for (var e = "", t = !0, r = this.pos, n = this.options.ecmaVersion >= 6; this.pos < this.input.length; ) {
    var i = this.fullCharCodeAtPos();
    if (ut(i, n))
      this.pos += i <= 65535 ? 1 : 2;
    else if (i === 92) {
      this.containsEsc = !0, e += this.input.slice(r, this.pos);
      var a = this.pos;
      this.input.charCodeAt(++this.pos) !== 117 && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos;
      var s = this.readCodePoint();
      (t ? Qe : ut)(s, n) || this.invalidStringToken(a, "Invalid Unicode escape"), e += qr(s), r = this.pos;
    } else
      break;
    t = !1;
  }
  return e + this.input.slice(r, this.pos);
};
fe.readWord = function() {
  var e = this.readWord1(), t = h.name;
  return this.keywords.test(e) && (t = Ht[e]), this.finishToken(t, e);
};
var $i = "7.4.1";
xe.acorn = {
  Parser: xe,
  version: $i,
  defaultOptions: Wt,
  Position: At,
  SourceLocation: Nt,
  getLineInfo: Ir,
  Node: Xt,
  TokenType: me,
  tokTypes: h,
  keywordTypes: Ht,
  TokContext: Ve,
  tokContexts: be,
  isIdentifierChar: ut,
  isIdentifierStart: Qe,
  Token: rr,
  isNewLine: yt,
  lineBreak: Le,
  lineBreakG: gt,
  nonASCIIwhitespace: Pr
};
function io(e, t) {
  return xe.parse(e, t);
}
function uo(e, t, r) {
  return xe.parseExpressionAt(e, t, r);
}
function ao(e, t) {
  return xe.tokenizer(e, t);
}
const so = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Node: Xt,
  Parser: xe,
  Position: At,
  SourceLocation: Nt,
  TokContext: Ve,
  Token: rr,
  TokenType: me,
  defaultOptions: Wt,
  getLineInfo: Ir,
  isIdentifierChar: ut,
  isIdentifierStart: Qe,
  isNewLine: yt,
  keywordTypes: Ht,
  lineBreak: Le,
  lineBreakG: gt,
  nonASCIIwhitespace: Pr,
  parse: io,
  parseExpressionAt: uo,
  tokContexts: be,
  tokTypes: h,
  tokenizer: ao,
  version: $i
}, Symbol.toStringTag, { value: "Module" }));
var Ji = { exports: {} }, oo = {
  quot: '"',
  amp: "&",
  apos: "'",
  lt: "<",
  gt: ">",
  nbsp: "\xA0",
  iexcl: "\xA1",
  cent: "\xA2",
  pound: "\xA3",
  curren: "\xA4",
  yen: "\xA5",
  brvbar: "\xA6",
  sect: "\xA7",
  uml: "\xA8",
  copy: "\xA9",
  ordf: "\xAA",
  laquo: "\xAB",
  not: "\xAC",
  shy: "\xAD",
  reg: "\xAE",
  macr: "\xAF",
  deg: "\xB0",
  plusmn: "\xB1",
  sup2: "\xB2",
  sup3: "\xB3",
  acute: "\xB4",
  micro: "\xB5",
  para: "\xB6",
  middot: "\xB7",
  cedil: "\xB8",
  sup1: "\xB9",
  ordm: "\xBA",
  raquo: "\xBB",
  frac14: "\xBC",
  frac12: "\xBD",
  frac34: "\xBE",
  iquest: "\xBF",
  Agrave: "\xC0",
  Aacute: "\xC1",
  Acirc: "\xC2",
  Atilde: "\xC3",
  Auml: "\xC4",
  Aring: "\xC5",
  AElig: "\xC6",
  Ccedil: "\xC7",
  Egrave: "\xC8",
  Eacute: "\xC9",
  Ecirc: "\xCA",
  Euml: "\xCB",
  Igrave: "\xCC",
  Iacute: "\xCD",
  Icirc: "\xCE",
  Iuml: "\xCF",
  ETH: "\xD0",
  Ntilde: "\xD1",
  Ograve: "\xD2",
  Oacute: "\xD3",
  Ocirc: "\xD4",
  Otilde: "\xD5",
  Ouml: "\xD6",
  times: "\xD7",
  Oslash: "\xD8",
  Ugrave: "\xD9",
  Uacute: "\xDA",
  Ucirc: "\xDB",
  Uuml: "\xDC",
  Yacute: "\xDD",
  THORN: "\xDE",
  szlig: "\xDF",
  agrave: "\xE0",
  aacute: "\xE1",
  acirc: "\xE2",
  atilde: "\xE3",
  auml: "\xE4",
  aring: "\xE5",
  aelig: "\xE6",
  ccedil: "\xE7",
  egrave: "\xE8",
  eacute: "\xE9",
  ecirc: "\xEA",
  euml: "\xEB",
  igrave: "\xEC",
  iacute: "\xED",
  icirc: "\xEE",
  iuml: "\xEF",
  eth: "\xF0",
  ntilde: "\xF1",
  ograve: "\xF2",
  oacute: "\xF3",
  ocirc: "\xF4",
  otilde: "\xF5",
  ouml: "\xF6",
  divide: "\xF7",
  oslash: "\xF8",
  ugrave: "\xF9",
  uacute: "\xFA",
  ucirc: "\xFB",
  uuml: "\xFC",
  yacute: "\xFD",
  thorn: "\xFE",
  yuml: "\xFF",
  OElig: "\u0152",
  oelig: "\u0153",
  Scaron: "\u0160",
  scaron: "\u0161",
  Yuml: "\u0178",
  fnof: "\u0192",
  circ: "\u02C6",
  tilde: "\u02DC",
  Alpha: "\u0391",
  Beta: "\u0392",
  Gamma: "\u0393",
  Delta: "\u0394",
  Epsilon: "\u0395",
  Zeta: "\u0396",
  Eta: "\u0397",
  Theta: "\u0398",
  Iota: "\u0399",
  Kappa: "\u039A",
  Lambda: "\u039B",
  Mu: "\u039C",
  Nu: "\u039D",
  Xi: "\u039E",
  Omicron: "\u039F",
  Pi: "\u03A0",
  Rho: "\u03A1",
  Sigma: "\u03A3",
  Tau: "\u03A4",
  Upsilon: "\u03A5",
  Phi: "\u03A6",
  Chi: "\u03A7",
  Psi: "\u03A8",
  Omega: "\u03A9",
  alpha: "\u03B1",
  beta: "\u03B2",
  gamma: "\u03B3",
  delta: "\u03B4",
  epsilon: "\u03B5",
  zeta: "\u03B6",
  eta: "\u03B7",
  theta: "\u03B8",
  iota: "\u03B9",
  kappa: "\u03BA",
  lambda: "\u03BB",
  mu: "\u03BC",
  nu: "\u03BD",
  xi: "\u03BE",
  omicron: "\u03BF",
  pi: "\u03C0",
  rho: "\u03C1",
  sigmaf: "\u03C2",
  sigma: "\u03C3",
  tau: "\u03C4",
  upsilon: "\u03C5",
  phi: "\u03C6",
  chi: "\u03C7",
  psi: "\u03C8",
  omega: "\u03C9",
  thetasym: "\u03D1",
  upsih: "\u03D2",
  piv: "\u03D6",
  ensp: "\u2002",
  emsp: "\u2003",
  thinsp: "\u2009",
  zwnj: "\u200C",
  zwj: "\u200D",
  lrm: "\u200E",
  rlm: "\u200F",
  ndash: "\u2013",
  mdash: "\u2014",
  lsquo: "\u2018",
  rsquo: "\u2019",
  sbquo: "\u201A",
  ldquo: "\u201C",
  rdquo: "\u201D",
  bdquo: "\u201E",
  dagger: "\u2020",
  Dagger: "\u2021",
  bull: "\u2022",
  hellip: "\u2026",
  permil: "\u2030",
  prime: "\u2032",
  Prime: "\u2033",
  lsaquo: "\u2039",
  rsaquo: "\u203A",
  oline: "\u203E",
  frasl: "\u2044",
  euro: "\u20AC",
  image: "\u2111",
  weierp: "\u2118",
  real: "\u211C",
  trade: "\u2122",
  alefsym: "\u2135",
  larr: "\u2190",
  uarr: "\u2191",
  rarr: "\u2192",
  darr: "\u2193",
  harr: "\u2194",
  crarr: "\u21B5",
  lArr: "\u21D0",
  uArr: "\u21D1",
  rArr: "\u21D2",
  dArr: "\u21D3",
  hArr: "\u21D4",
  forall: "\u2200",
  part: "\u2202",
  exist: "\u2203",
  empty: "\u2205",
  nabla: "\u2207",
  isin: "\u2208",
  notin: "\u2209",
  ni: "\u220B",
  prod: "\u220F",
  sum: "\u2211",
  minus: "\u2212",
  lowast: "\u2217",
  radic: "\u221A",
  prop: "\u221D",
  infin: "\u221E",
  ang: "\u2220",
  and: "\u2227",
  or: "\u2228",
  cap: "\u2229",
  cup: "\u222A",
  int: "\u222B",
  there4: "\u2234",
  sim: "\u223C",
  cong: "\u2245",
  asymp: "\u2248",
  ne: "\u2260",
  equiv: "\u2261",
  le: "\u2264",
  ge: "\u2265",
  sub: "\u2282",
  sup: "\u2283",
  nsub: "\u2284",
  sube: "\u2286",
  supe: "\u2287",
  oplus: "\u2295",
  otimes: "\u2297",
  perp: "\u22A5",
  sdot: "\u22C5",
  lceil: "\u2308",
  rceil: "\u2309",
  lfloor: "\u230A",
  rfloor: "\u230B",
  lang: "\u2329",
  rang: "\u232A",
  loz: "\u25CA",
  spades: "\u2660",
  clubs: "\u2663",
  hearts: "\u2665",
  diams: "\u2666"
};
const Sn = /* @__PURE__ */ Su(so);
(function(e) {
  const t = oo, r = /^[\da-fA-F]+$/, n = /^\d+$/, i = /* @__PURE__ */ new WeakMap();
  function a(p) {
    p = p.Parser.acorn || p;
    let m = i.get(p);
    if (!m) {
      const g = p.tokTypes, y = p.TokContext, A = p.TokenType, v = new y("<tag", !1), F = new y("</tag", !1), C = new y("<tag>...</tag>", !0, !0), _ = {
        tc_oTag: v,
        tc_cTag: F,
        tc_expr: C
      }, R = {
        jsxName: new A("jsxName"),
        jsxText: new A("jsxText", { beforeExpr: !0 }),
        jsxTagStart: new A("jsxTagStart", { startsExpr: !0 }),
        jsxTagEnd: new A("jsxTagEnd")
      };
      R.jsxTagStart.updateContext = function() {
        this.context.push(C), this.context.push(v), this.exprAllowed = !1;
      }, R.jsxTagEnd.updateContext = function(j) {
        let J = this.context.pop();
        J === v && j === g.slash || J === F ? (this.context.pop(), this.exprAllowed = this.curContext() === C) : this.exprAllowed = !0;
      }, m = { tokContexts: _, tokTypes: R }, i.set(p, m);
    }
    return m;
  }
  function s(p) {
    if (!p)
      return p;
    if (p.type === "JSXIdentifier")
      return p.name;
    if (p.type === "JSXNamespacedName")
      return p.namespace.name + ":" + p.name.name;
    if (p.type === "JSXMemberExpression")
      return s(p.object) + "." + s(p.property);
  }
  e.exports = function(p) {
    return p = p || {}, function(m) {
      return l({
        allowNamespaces: p.allowNamespaces !== !1,
        allowNamespacedObjects: !!p.allowNamespacedObjects
      }, m);
    };
  }, Object.defineProperty(e.exports, "tokTypes", {
    get: function() {
      return a(Sn).tokTypes;
    },
    configurable: !0,
    enumerable: !0
  });
  function l(p, m) {
    const g = m.acorn || Sn, y = a(g), A = g.tokTypes, v = y.tokTypes, F = g.tokContexts, C = y.tokContexts.tc_oTag, _ = y.tokContexts.tc_cTag, R = y.tokContexts.tc_expr, j = g.isNewLine, J = g.isIdentifierStart, B = g.isIdentifierChar;
    return class extends m {
      static get acornJsx() {
        return y;
      }
      jsx_readToken() {
        let d = "", D = this.pos;
        for (; ; ) {
          this.pos >= this.input.length && this.raise(this.start, "Unterminated JSX contents");
          let S = this.input.charCodeAt(this.pos);
          switch (S) {
            case 60:
            case 123:
              return this.pos === this.start ? S === 60 && this.exprAllowed ? (++this.pos, this.finishToken(v.jsxTagStart)) : this.getTokenFromCode(S) : (d += this.input.slice(D, this.pos), this.finishToken(v.jsxText, d));
            case 38:
              d += this.input.slice(D, this.pos), d += this.jsx_readEntity(), D = this.pos;
              break;
            case 62:
            case 125:
              this.raise(
                this.pos,
                "Unexpected token `" + this.input[this.pos] + "`. Did you mean `" + (S === 62 ? "&gt;" : "&rbrace;") + '` or `{"' + this.input[this.pos] + '"}`?'
              );
            default:
              j(S) ? (d += this.input.slice(D, this.pos), d += this.jsx_readNewLine(!0), D = this.pos) : ++this.pos;
          }
        }
      }
      jsx_readNewLine(d) {
        let D = this.input.charCodeAt(this.pos), S;
        return ++this.pos, D === 13 && this.input.charCodeAt(this.pos) === 10 ? (++this.pos, S = d ? `
` : `\r
`) : S = String.fromCharCode(D), this.options.locations && (++this.curLine, this.lineStart = this.pos), S;
      }
      jsx_readString(d) {
        let D = "", S = ++this.pos;
        for (; ; ) {
          this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
          let x = this.input.charCodeAt(this.pos);
          if (x === d)
            break;
          x === 38 ? (D += this.input.slice(S, this.pos), D += this.jsx_readEntity(), S = this.pos) : j(x) ? (D += this.input.slice(S, this.pos), D += this.jsx_readNewLine(!1), S = this.pos) : ++this.pos;
        }
        return D += this.input.slice(S, this.pos++), this.finishToken(A.string, D);
      }
      jsx_readEntity() {
        let d = "", D = 0, S, x = this.input[this.pos];
        x !== "&" && this.raise(this.pos, "Entity must start with an ampersand");
        let G = ++this.pos;
        for (; this.pos < this.input.length && D++ < 10; ) {
          if (x = this.input[this.pos++], x === ";") {
            d[0] === "#" ? d[1] === "x" ? (d = d.substr(2), r.test(d) && (S = String.fromCharCode(parseInt(d, 16)))) : (d = d.substr(1), n.test(d) && (S = String.fromCharCode(parseInt(d, 10)))) : S = t[d];
            break;
          }
          d += x;
        }
        return S || (this.pos = G, "&");
      }
      jsx_readWord() {
        let d, D = this.pos;
        do
          d = this.input.charCodeAt(++this.pos);
        while (B(d) || d === 45);
        return this.finishToken(v.jsxName, this.input.slice(D, this.pos));
      }
      jsx_parseIdentifier() {
        let d = this.startNode();
        return this.type === v.jsxName ? d.name = this.value : this.type.keyword ? d.name = this.type.keyword : this.unexpected(), this.next(), this.finishNode(d, "JSXIdentifier");
      }
      jsx_parseNamespacedName() {
        let d = this.start, D = this.startLoc, S = this.jsx_parseIdentifier();
        if (!p.allowNamespaces || !this.eat(A.colon))
          return S;
        var x = this.startNodeAt(d, D);
        return x.namespace = S, x.name = this.jsx_parseIdentifier(), this.finishNode(x, "JSXNamespacedName");
      }
      jsx_parseElementName() {
        if (this.type === v.jsxTagEnd)
          return "";
        let d = this.start, D = this.startLoc, S = this.jsx_parseNamespacedName();
        for (this.type === A.dot && S.type === "JSXNamespacedName" && !p.allowNamespacedObjects && this.unexpected(); this.eat(A.dot); ) {
          let x = this.startNodeAt(d, D);
          x.object = S, x.property = this.jsx_parseIdentifier(), S = this.finishNode(x, "JSXMemberExpression");
        }
        return S;
      }
      jsx_parseAttributeValue() {
        switch (this.type) {
          case A.braceL:
            let d = this.jsx_parseExpressionContainer();
            return d.expression.type === "JSXEmptyExpression" && this.raise(d.start, "JSX attributes must only be assigned a non-empty expression"), d;
          case v.jsxTagStart:
          case A.string:
            return this.parseExprAtom();
          default:
            this.raise(this.start, "JSX value should be either an expression or a quoted JSX text");
        }
      }
      jsx_parseEmptyExpression() {
        let d = this.startNodeAt(this.lastTokEnd, this.lastTokEndLoc);
        return this.finishNodeAt(d, "JSXEmptyExpression", this.start, this.startLoc);
      }
      jsx_parseExpressionContainer() {
        let d = this.startNode();
        return this.next(), d.expression = this.type === A.braceR ? this.jsx_parseEmptyExpression() : this.parseExpression(), this.expect(A.braceR), this.finishNode(d, "JSXExpressionContainer");
      }
      jsx_parseAttribute() {
        let d = this.startNode();
        return this.eat(A.braceL) ? (this.expect(A.ellipsis), d.argument = this.parseMaybeAssign(), this.expect(A.braceR), this.finishNode(d, "JSXSpreadAttribute")) : (d.name = this.jsx_parseNamespacedName(), d.value = this.eat(A.eq) ? this.jsx_parseAttributeValue() : null, this.finishNode(d, "JSXAttribute"));
      }
      jsx_parseOpeningElementAt(d, D) {
        let S = this.startNodeAt(d, D);
        S.attributes = [];
        let x = this.jsx_parseElementName();
        for (x && (S.name = x); this.type !== A.slash && this.type !== v.jsxTagEnd; )
          S.attributes.push(this.jsx_parseAttribute());
        return S.selfClosing = this.eat(A.slash), this.expect(v.jsxTagEnd), this.finishNode(S, x ? "JSXOpeningElement" : "JSXOpeningFragment");
      }
      jsx_parseClosingElementAt(d, D) {
        let S = this.startNodeAt(d, D), x = this.jsx_parseElementName();
        return x && (S.name = x), this.expect(v.jsxTagEnd), this.finishNode(S, x ? "JSXClosingElement" : "JSXClosingFragment");
      }
      jsx_parseElementAt(d, D) {
        let S = this.startNodeAt(d, D), x = [], G = this.jsx_parseOpeningElementAt(d, D), z = null;
        if (!G.selfClosing) {
          e:
            for (; ; )
              switch (this.type) {
                case v.jsxTagStart:
                  if (d = this.start, D = this.startLoc, this.next(), this.eat(A.slash)) {
                    z = this.jsx_parseClosingElementAt(d, D);
                    break e;
                  }
                  x.push(this.jsx_parseElementAt(d, D));
                  break;
                case v.jsxText:
                  x.push(this.parseExprAtom());
                  break;
                case A.braceL:
                  x.push(this.jsx_parseExpressionContainer());
                  break;
                default:
                  this.unexpected();
              }
          s(z.name) !== s(G.name) && this.raise(
            z.start,
            "Expected corresponding JSX closing tag for <" + s(G.name) + ">"
          );
        }
        let V = G.name ? "Element" : "Fragment";
        return S["opening" + V] = G, S["closing" + V] = z, S.children = x, this.type === A.relational && this.value === "<" && this.raise(this.start, "Adjacent JSX elements must be wrapped in an enclosing tag"), this.finishNode(S, "JSX" + V);
      }
      jsx_parseText() {
        let d = this.parseLiteral(this.value);
        return d.type = "JSXText", d;
      }
      jsx_parseElement() {
        let d = this.start, D = this.startLoc;
        return this.next(), this.jsx_parseElementAt(d, D);
      }
      parseExprAtom(d) {
        return this.type === v.jsxText ? this.jsx_parseText() : this.type === v.jsxTagStart ? this.jsx_parseElement() : super.parseExprAtom(d);
      }
      readToken(d) {
        let D = this.curContext();
        if (D === R)
          return this.jsx_readToken();
        if (D === C || D === _) {
          if (J(d))
            return this.jsx_readWord();
          if (d == 62)
            return ++this.pos, this.finishToken(v.jsxTagEnd);
          if ((d === 34 || d === 39) && D == C)
            return this.jsx_readString(d);
        }
        return d === 60 && this.exprAllowed && this.input.charCodeAt(this.pos + 1) !== 33 ? (++this.pos, this.finishToken(v.jsxTagStart)) : super.readToken(d);
      }
      updateContext(d) {
        if (this.type == A.braceL) {
          var D = this.curContext();
          D == C ? this.context.push(F.b_expr) : D == R ? this.context.push(F.b_tmpl) : super.updateContext(d), this.exprAllowed = !0;
        } else if (this.type === A.slash && d === v.jsxTagStart)
          this.context.length -= 2, this.context.push(_), this.exprAllowed = !1;
        else
          return super.updateContext(d);
      }
    };
  }
})(Ji);
const lo = Ji.exports;
function Yi(e, t, r, n, i) {
  r || (r = $), function a(s, l, p) {
    var m = p || s.type, g = t[m];
    r[m](s, l, a), g && g(s, l);
  }(e, n, i);
}
function co(e, t, r, n, i) {
  var a = [];
  r || (r = $), function s(l, p, m) {
    var g = m || l.type, y = t[g], A = l !== a[a.length - 1];
    A && a.push(l), r[g](l, p, s), y && y(l, p || a, a), A && a.pop();
  }(e, n, i);
}
function Ur(e, t, r) {
  r(e, t);
}
function st(e, t, r) {
}
var $ = {};
$.Program = $.BlockStatement = function(e, t, r) {
  for (var n = 0, i = e.body; n < i.length; n += 1) {
    var a = i[n];
    r(a, t, "Statement");
  }
};
$.Statement = Ur;
$.EmptyStatement = st;
$.ExpressionStatement = $.ParenthesizedExpression = $.ChainExpression = function(e, t, r) {
  return r(e.expression, t, "Expression");
};
$.IfStatement = function(e, t, r) {
  r(e.test, t, "Expression"), r(e.consequent, t, "Statement"), e.alternate && r(e.alternate, t, "Statement");
};
$.LabeledStatement = function(e, t, r) {
  return r(e.body, t, "Statement");
};
$.BreakStatement = $.ContinueStatement = st;
$.WithStatement = function(e, t, r) {
  r(e.object, t, "Expression"), r(e.body, t, "Statement");
};
$.SwitchStatement = function(e, t, r) {
  r(e.discriminant, t, "Expression");
  for (var n = 0, i = e.cases; n < i.length; n += 1) {
    var a = i[n];
    a.test && r(a.test, t, "Expression");
    for (var s = 0, l = a.consequent; s < l.length; s += 1) {
      var p = l[s];
      r(p, t, "Statement");
    }
  }
};
$.SwitchCase = function(e, t, r) {
  e.test && r(e.test, t, "Expression");
  for (var n = 0, i = e.consequent; n < i.length; n += 1) {
    var a = i[n];
    r(a, t, "Statement");
  }
};
$.ReturnStatement = $.YieldExpression = $.AwaitExpression = function(e, t, r) {
  e.argument && r(e.argument, t, "Expression");
};
$.ThrowStatement = $.SpreadElement = function(e, t, r) {
  return r(e.argument, t, "Expression");
};
$.TryStatement = function(e, t, r) {
  r(e.block, t, "Statement"), e.handler && r(e.handler, t), e.finalizer && r(e.finalizer, t, "Statement");
};
$.CatchClause = function(e, t, r) {
  e.param && r(e.param, t, "Pattern"), r(e.body, t, "Statement");
};
$.WhileStatement = $.DoWhileStatement = function(e, t, r) {
  r(e.test, t, "Expression"), r(e.body, t, "Statement");
};
$.ForStatement = function(e, t, r) {
  e.init && r(e.init, t, "ForInit"), e.test && r(e.test, t, "Expression"), e.update && r(e.update, t, "Expression"), r(e.body, t, "Statement");
};
$.ForInStatement = $.ForOfStatement = function(e, t, r) {
  r(e.left, t, "ForInit"), r(e.right, t, "Expression"), r(e.body, t, "Statement");
};
$.ForInit = function(e, t, r) {
  e.type === "VariableDeclaration" ? r(e, t) : r(e, t, "Expression");
};
$.DebuggerStatement = st;
$.FunctionDeclaration = function(e, t, r) {
  return r(e, t, "Function");
};
$.VariableDeclaration = function(e, t, r) {
  for (var n = 0, i = e.declarations; n < i.length; n += 1) {
    var a = i[n];
    r(a, t);
  }
};
$.VariableDeclarator = function(e, t, r) {
  r(e.id, t, "Pattern"), e.init && r(e.init, t, "Expression");
};
$.Function = function(e, t, r) {
  e.id && r(e.id, t, "Pattern");
  for (var n = 0, i = e.params; n < i.length; n += 1) {
    var a = i[n];
    r(a, t, "Pattern");
  }
  r(e.body, t, e.expression ? "Expression" : "Statement");
};
$.Pattern = function(e, t, r) {
  e.type === "Identifier" ? r(e, t, "VariablePattern") : e.type === "MemberExpression" ? r(e, t, "MemberPattern") : r(e, t);
};
$.VariablePattern = st;
$.MemberPattern = Ur;
$.RestElement = function(e, t, r) {
  return r(e.argument, t, "Pattern");
};
$.ArrayPattern = function(e, t, r) {
  for (var n = 0, i = e.elements; n < i.length; n += 1) {
    var a = i[n];
    a && r(a, t, "Pattern");
  }
};
$.ObjectPattern = function(e, t, r) {
  for (var n = 0, i = e.properties; n < i.length; n += 1) {
    var a = i[n];
    a.type === "Property" ? (a.computed && r(a.key, t, "Expression"), r(a.value, t, "Pattern")) : a.type === "RestElement" && r(a.argument, t, "Pattern");
  }
};
$.Expression = Ur;
$.ThisExpression = $.Super = $.MetaProperty = st;
$.ArrayExpression = function(e, t, r) {
  for (var n = 0, i = e.elements; n < i.length; n += 1) {
    var a = i[n];
    a && r(a, t, "Expression");
  }
};
$.ObjectExpression = function(e, t, r) {
  for (var n = 0, i = e.properties; n < i.length; n += 1) {
    var a = i[n];
    r(a, t);
  }
};
$.FunctionExpression = $.ArrowFunctionExpression = $.FunctionDeclaration;
$.SequenceExpression = function(e, t, r) {
  for (var n = 0, i = e.expressions; n < i.length; n += 1) {
    var a = i[n];
    r(a, t, "Expression");
  }
};
$.TemplateLiteral = function(e, t, r) {
  for (var n = 0, i = e.quasis; n < i.length; n += 1) {
    var a = i[n];
    r(a, t);
  }
  for (var s = 0, l = e.expressions; s < l.length; s += 1) {
    var p = l[s];
    r(p, t, "Expression");
  }
};
$.TemplateElement = st;
$.UnaryExpression = $.UpdateExpression = function(e, t, r) {
  r(e.argument, t, "Expression");
};
$.BinaryExpression = $.LogicalExpression = function(e, t, r) {
  r(e.left, t, "Expression"), r(e.right, t, "Expression");
};
$.AssignmentExpression = $.AssignmentPattern = function(e, t, r) {
  r(e.left, t, "Pattern"), r(e.right, t, "Expression");
};
$.ConditionalExpression = function(e, t, r) {
  r(e.test, t, "Expression"), r(e.consequent, t, "Expression"), r(e.alternate, t, "Expression");
};
$.NewExpression = $.CallExpression = function(e, t, r) {
  if (r(e.callee, t, "Expression"), e.arguments)
    for (var n = 0, i = e.arguments; n < i.length; n += 1) {
      var a = i[n];
      r(a, t, "Expression");
    }
};
$.MemberExpression = function(e, t, r) {
  r(e.object, t, "Expression"), e.computed && r(e.property, t, "Expression");
};
$.ExportNamedDeclaration = $.ExportDefaultDeclaration = function(e, t, r) {
  e.declaration && r(e.declaration, t, e.type === "ExportNamedDeclaration" || e.declaration.id ? "Statement" : "Expression"), e.source && r(e.source, t, "Expression");
};
$.ExportAllDeclaration = function(e, t, r) {
  e.exported && r(e.exported, t), r(e.source, t, "Expression");
};
$.ImportDeclaration = function(e, t, r) {
  for (var n = 0, i = e.specifiers; n < i.length; n += 1) {
    var a = i[n];
    r(a, t);
  }
  r(e.source, t, "Expression");
};
$.ImportExpression = function(e, t, r) {
  r(e.source, t, "Expression");
};
$.ImportSpecifier = $.ImportDefaultSpecifier = $.ImportNamespaceSpecifier = $.Identifier = $.Literal = st;
$.TaggedTemplateExpression = function(e, t, r) {
  r(e.tag, t, "Expression"), r(e.quasi, t, "Expression");
};
$.ClassDeclaration = $.ClassExpression = function(e, t, r) {
  return r(e, t, "Class");
};
$.Class = function(e, t, r) {
  e.id && r(e.id, t, "Pattern"), e.superClass && r(e.superClass, t, "Expression"), r(e.body, t);
};
$.ClassBody = function(e, t, r) {
  for (var n = 0, i = e.body; n < i.length; n += 1) {
    var a = i[n];
    r(a, t);
  }
};
$.MethodDefinition = $.Property = function(e, t, r) {
  e.computed && r(e.key, t, "Expression"), r(e.value, t, "Expression");
};
var Wr = Object.assign({}, $, {
  JSXElement: function() {
  }
}), fo = xe.extend(lo());
function Pt(e) {
  return e != null ? e.name : null;
}
function _n(e) {
  return e.filter(function(t) {
    return t.type === "ObjectExpression" || t.type === "ArrayExpression";
  });
}
function Hi(e) {
  var t = [];
  return co(
    e,
    {
      ObjectExpression: function(n, i) {
        t.push(_n(i).length);
      },
      ArrayExpression: function(n, i) {
        t.push(_n(i).length);
      }
    },
    Wr
  ), Math.max.apply(Math, t);
}
function po(e) {
  return {
    inferredType: {
      type: Ce.IDENTIFIER,
      identifier: Pt(e)
    },
    ast: e
  };
}
function ho(e) {
  return {
    inferredType: {
      type: Ce.LITERAL
    },
    ast: e
  };
}
function mo(e) {
  var t;
  Yi(
    e.body,
    {
      JSXElement: function(s) {
        t = s;
      }
    },
    Wr
  );
  var r = t != null, n = {
    type: r ? Ce.ELEMENT : Ce.FUNCTION,
    params: e.params,
    hasParams: e.params.length !== 0
  }, i = Pt(e.id);
  return i != null && (n.identifier = i), {
    inferredType: n,
    ast: e
  };
}
function go(e) {
  var t;
  Yi(
    e.body,
    {
      JSXElement: function(i) {
        t = i;
      }
    },
    Wr
  );
  var r = {
    type: t != null ? Ce.ELEMENT : Ce.CLASS,
    identifier: Pt(e.id)
  };
  return {
    inferredType: r,
    ast: e
  };
}
function Ao(e) {
  var t = {
    type: Ce.ELEMENT
  }, r = Pt(e.openingElement.name);
  return r != null && (t.identifier = r), {
    inferredType: t,
    ast: e
  };
}
function Eo(e) {
  var t = e.callee.type === "MemberExpression" ? e.callee.property : e.callee, r = Pt(t);
  return r === "shape" ? Ki(e.arguments[0]) : null;
}
function Ki(e) {
  return {
    inferredType: {
      type: Ce.OBJECT,
      depth: Hi(e)
    },
    ast: e
  };
}
function Do(e) {
  return {
    inferredType: {
      type: Ce.ARRAY,
      depth: Hi(e)
    },
    ast: e
  };
}
function Co(e) {
  switch (e.type) {
    case "Identifier":
      return po(e);
    case "Literal":
      return ho(e);
    case "FunctionExpression":
    case "ArrowFunctionExpression":
      return mo(e);
    case "ClassExpression":
      return go(e);
    case "JSXElement":
      return Ao(e);
    case "CallExpression":
      return Eo(e);
    case "ObjectExpression":
      return Ki(e);
    case "ArrayExpression":
      return Do(e);
    default:
      return null;
  }
}
function yo(e) {
  var t = fo.parse("(".concat(e, ")")), r = {
    inferredType: {
      type: Ce.UNKNOWN
    },
    ast: t
  };
  if (t.body[0] != null) {
    var n = t.body[0];
    switch (n.type) {
      case "ExpressionStatement": {
        var i = Co(n.expression);
        i != null && (r = i);
        break;
      }
    }
  }
  return r;
}
function tt(e) {
  try {
    var t = yo(e);
    return Object.assign({}, t);
  } catch {
  }
  return {
    inferredType: {
      type: Ce.UNKNOWN
    }
  };
}
var vo = 150, ge;
(function(e) {
  e.CUSTOM = "custom", e.ANY = "any", e.FUNC = "func", e.SHAPE = "shape", e.OBJECT = "object", e.INSTANCEOF = "instanceOf", e.OBJECTOF = "objectOf", e.UNION = "union", e.ENUM = "enum", e.ARRAYOF = "arrayOf", e.ELEMENT = "element", e.ELEMENTTYPE = "elementType", e.NODE = "node";
})(ge || (ge = {}));
function Ne(e) {
  var t = e.name, r = e.short, n = e.compact, i = e.full, a = e.inferredType;
  return {
    name: t,
    short: r,
    compact: n,
    full: i != null ? i : r,
    inferredType: a
  };
}
function Qi(e) {
  return e.replace(/PropTypes./g, "").replace(/.isRequired/g, "");
}
function Bn(e) {
  return e.split(/\r?\n/);
}
function $t(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return Qi(Ar(e, t));
}
function wn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return Qi(et(e, t));
}
function xo(e) {
  switch (e) {
    case Ce.OBJECT:
      return Tt;
    case Ce.ARRAY:
      return kr;
    case Ce.CLASS:
      return rs;
    case Ce.FUNCTION:
      return mt;
    case Ce.ELEMENT:
      return Ct;
    default:
      return gr;
  }
}
function Xi(e, t) {
  var r = tt(e), n = r.inferredType, i = r.ast, a = n.type, s, l, p;
  switch (a) {
    case Ce.IDENTIFIER:
    case Ce.LITERAL:
      s = e, l = e;
      break;
    case Ce.OBJECT: {
      var m = n, g = m.depth;
      s = Tt, l = g === 1 ? $t(i, !0) : null, p = $t(i);
      break;
    }
    case Ce.ELEMENT: {
      var y = n, A = y.identifier;
      s = A != null && !Nr(A) ? A : Ct, l = Bn(e).length === 1 ? e : null, p = e;
      break;
    }
    case Ce.ARRAY: {
      var v = n, F = v.depth;
      s = kr, l = F <= 2 ? wn(i, !0) : null, p = wn(i);
      break;
    }
    default:
      s = xo(a), l = Bn(e).length === 1 ? e : null, p = e;
      break;
  }
  return Ne({
    name: t,
    short: s,
    compact: l,
    full: p,
    inferredType: a
  });
}
function Fo(e) {
  var t = e.raw;
  return t != null ? Xi(t, ge.CUSTOM) : Ne({
    name: ge.CUSTOM,
    short: gr,
    compact: gr
  });
}
function bo(e) {
  var t = e.jsDocTags;
  return t != null && (t.params != null || t.returns != null) ? Ne({
    name: ge.FUNC,
    short: es(t.params, t.returns),
    compact: null,
    full: Za(t.params, t.returns)
  }) : Ne({
    name: ge.FUNC,
    short: mt,
    compact: mt
  });
}
function So(e, t) {
  var r = Object.keys(e.value).map(function(p) {
    return "".concat(p, ": ").concat(Et(e.value[p], t).full);
  }).join(", "), n = tt("{ ".concat(r, " }")), i = n.inferredType, a = n.ast, s = i, l = s.depth;
  return Ne({
    name: ge.SHAPE,
    short: Tt,
    compact: l === 1 && a ? $t(a, !0) : null,
    full: a ? $t(a) : null
  });
}
function dr(e) {
  return "objectOf(".concat(e, ")");
}
function _o(e, t) {
  var r = Et(e.value, t), n = r.short, i = r.compact, a = r.full;
  return Ne({
    name: ge.OBJECTOF,
    short: dr(n),
    compact: i != null ? dr(i) : null,
    full: dr(a)
  });
}
function Bo(e, t) {
  if (Array.isArray(e.value)) {
    var r = e.value.reduce(function(n, i) {
      var a = Et(i, t), s = a.short, l = a.compact, p = a.full;
      return n.short.push(s), n.compact.push(l), n.full.push(p), n;
    }, {
      short: [],
      compact: [],
      full: []
    });
    return Ne({
      name: ge.UNION,
      short: r.short.join(" | "),
      compact: r.compact.every(function(n) {
        return n != null;
      }) ? r.compact.join(" | ") : null,
      full: r.full.join(" | ")
    });
  }
  return Ne({
    name: ge.UNION,
    short: e.value,
    compact: null
  });
}
function wo(e) {
  var t = e.value, r = e.computed;
  return r ? Xi(t, "enumvalue") : Ne({
    name: "enumvalue",
    short: t,
    compact: t
  });
}
function To(e) {
  if (Array.isArray(e.value)) {
    var t = e.value.reduce(function(r, n) {
      var i = wo(n), a = i.short, s = i.compact, l = i.full;
      return r.short.push(a), r.compact.push(s), r.full.push(l), r;
    }, {
      short: [],
      compact: [],
      full: []
    });
    return Ne({
      name: ge.ENUM,
      short: t.short.join(" | "),
      compact: t.compact.every(function(r) {
        return r != null;
      }) ? t.compact.join(" | ") : null,
      full: t.full.join(" | ")
    });
  }
  return Ne({
    name: ge.ENUM,
    short: e.value,
    compact: e.value
  });
}
function Cr(e) {
  return "".concat(e, "[]");
}
function Tn(e) {
  return "[".concat(e, "]");
}
function kn(e, t, r) {
  return Ne({
    name: ge.ARRAYOF,
    short: Cr(e),
    compact: t != null ? Tn(t) : null,
    full: Tn(r)
  });
}
function ko(e, t) {
  var r = Et(e.value, t), n = r.name, i = r.short, a = r.compact, s = r.full, l = r.inferredType;
  if (n === ge.CUSTOM) {
    if (l === Ce.OBJECT)
      return kn(i, a, s);
  } else if (n === ge.SHAPE)
    return kn(i, a, s);
  return Ne({
    name: ge.ARRAYOF,
    short: Cr(i),
    compact: Cr(i)
  });
}
function Et(e, t) {
  try {
    switch (e.name) {
      case ge.CUSTOM:
        return Fo(e);
      case ge.FUNC:
        return bo(t);
      case ge.SHAPE:
        return So(e, t);
      case ge.INSTANCEOF:
        return Ne({
          name: ge.INSTANCEOF,
          short: e.value,
          compact: e.value
        });
      case ge.OBJECTOF:
        return _o(e, t);
      case ge.UNION:
        return Bo(e, t);
      case ge.ENUM:
        return To(e);
      case ge.ARRAYOF:
        return ko(e, t);
      default:
        return Ne({
          name: e.name,
          short: e.name,
          compact: e.name
        });
    }
  } catch (r) {
    console.error(r);
  }
  return Ne({
    name: "unknown",
    short: "unknown",
    compact: "unknown"
  });
}
function No(e) {
  var t = e.docgenInfo.type;
  if (t == null)
    return null;
  try {
    switch (t.name) {
      case ge.CUSTOM:
      case ge.SHAPE:
      case ge.INSTANCEOF:
      case ge.OBJECTOF:
      case ge.UNION:
      case ge.ENUM:
      case ge.ARRAYOF: {
        var r = Et(t, e), n = r.short, i = r.compact, a = r.full;
        return i != null && !Tr(i) ? ue(i) : ue(n, a);
      }
      case ge.FUNC: {
        var s = Et(t, e), l = s.short, p = s.full, m = l, g;
        return p.length < vo ? m = p : g = ts(p), ue(m, g);
      }
      default:
        return null;
    }
  } catch (y) {
    console.error(y);
  }
  return null;
}
function Zi(e) {
  var t = e.inferredType, r = e.ast, n = t, i = n.depth;
  if (i === 1) {
    var a = Ar(r, !0);
    if (!Dt(a))
      return ue(a);
  }
  return ue(Tt, Ar(r));
}
function eu(e) {
  var t = e.inferredType, r = e.ast, n = t, i = n.depth;
  if (i <= 2) {
    var a = vn(r, !0);
    if (!Dt(a))
      return ue(a);
  }
  return ue(kr, vn(r));
}
function tu(e) {
  var t = e.type, r = e.identifier;
  switch (t) {
    case Ce.FUNCTION:
      return zr(r, e.hasParams);
    case Ce.ELEMENT:
      return nr(r);
    default:
      return r;
  }
}
function zr(e, t) {
  return t ? "".concat(e, "( ... )") : "".concat(e, "()");
}
function nr(e) {
  return "<".concat(e, " />");
}
function Oo(e) {
  var t = e.inferredType, r = e.ast, n = t, i = n.identifier;
  if (i != null)
    return ue(tu(t), et(r));
  var a = et(r, !0);
  return Dt(a) ? ue(mt, et(r)) : ue(a);
}
function Po(e, t) {
  var r = t.inferredType, n = r, i = n.identifier;
  if (i != null && !Nr(i)) {
    var a = tu(r);
    return ue(a, e);
  }
  return Dt(e) ? ue(Ct, e) : ue(e);
}
function ru(e) {
  try {
    var t = tt(e);
    switch (t.inferredType.type) {
      case Ce.OBJECT:
        return Zi(t);
      case Ce.FUNCTION:
        return Oo(t);
      case Ce.ELEMENT:
        return Po(e, t);
      case Ce.ARRAY:
        return eu(t);
      default:
        return null;
    }
  } catch (r) {
    console.error(r);
  }
  return null;
}
var Io = _u, Ro = Bu, Lo = wu, Mo = "[object String]";
function jo(e) {
  return typeof e == "string" || !Ro(e) && Lo(e) && Io(e) == Mo;
}
var Vo = jo;
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function Nn(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function qo(e) {
  var t, r;
  return Nn(e) === !1 ? !1 : (t = e.constructor, t === void 0 ? !0 : (r = t.prototype, !(Nn(r) === !1 || r.hasOwnProperty("isPrototypeOf") === !1)));
}
var nu = {}, Jt = Je && Je.__assign || function() {
  return Jt = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Jt.apply(this, arguments);
}, Uo = Je && Je.__spreadArrays || function() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++)
    e += arguments[t].length;
  for (var n = Array(e), i = 0, t = 0; t < r; t++)
    for (var a = arguments[t], s = 0, l = a.length; s < l; s++, i++)
      n[i] = a[s];
  return n;
};
Object.defineProperty(nu, "__esModule", { value: !0 });
var bt = [];
function Wo(e) {
  var t = typeof e;
  return e !== null && (t === "object" || t === "function");
}
function zo(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
function Go(e) {
  return Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.prototype.propertyIsEnumerable.call(e, t);
  });
}
function jt(e, t, r) {
  r === void 0 && (r = "");
  var n = {
    indent: "	",
    singleQuotes: !0
  }, i = Jt(Jt({}, n), t), a;
  i.inlineCharacterLimit === void 0 ? a = {
    newLine: `
`,
    newLineOrSpace: `
`,
    pad: r,
    indent: r + i.indent
  } : a = {
    newLine: "@@__PRETTY_PRINT_NEW_LINE__@@",
    newLineOrSpace: "@@__PRETTY_PRINT_NEW_LINE_OR_SPACE__@@",
    pad: "@@__PRETTY_PRINT_PAD__@@",
    indent: "@@__PRETTY_PRINT_INDENT__@@"
  };
  var s = function(m) {
    if (i.inlineCharacterLimit === void 0)
      return m;
    var g = m.replace(new RegExp(a.newLine, "g"), "").replace(new RegExp(a.newLineOrSpace, "g"), " ").replace(new RegExp(a.pad + "|" + a.indent, "g"), "");
    return g.length <= i.inlineCharacterLimit ? g : m.replace(new RegExp(a.newLine + "|" + a.newLineOrSpace, "g"), `
`).replace(new RegExp(a.pad, "g"), r).replace(new RegExp(a.indent, "g"), r + i.indent);
  };
  if (bt.indexOf(e) !== -1)
    return '"[Circular]"';
  if (e == null || typeof e == "number" || typeof e == "boolean" || typeof e == "function" || typeof e == "symbol" || zo(e))
    return String(e);
  if (e instanceof Date)
    return "new Date('" + e.toISOString() + "')";
  if (Array.isArray(e)) {
    if (e.length === 0)
      return "[]";
    bt.push(e);
    var l = "[" + a.newLine + e.map(function(m, g) {
      var y = e.length - 1 === g ? a.newLine : "," + a.newLineOrSpace, A = jt(m, i, r + i.indent);
      return i.transform && (A = i.transform(e, g, A)), a.indent + A + y;
    }).join("") + a.pad + "]";
    return bt.pop(), s(l);
  }
  if (Wo(e)) {
    var p = Uo(Object.keys(e), Go(e));
    if (i.filter && (p = p.filter(function(g) {
      return i.filter && i.filter(e, g);
    })), p.length === 0)
      return "{}";
    bt.push(e);
    var l = "{" + a.newLine + p.map(function(g, y) {
      var A = p.length - 1 === y ? a.newLine : "," + a.newLineOrSpace, v = typeof g == "symbol", F = !v && /^[a-z$_][a-z$_0-9]*$/i.test(g.toString()), C = v || F ? g : jt(g, i), _ = jt(e[g], i, r + i.indent);
      return i.transform && (_ = i.transform(e, g, _)), a.indent + String(C) + ": " + _ + A;
    }).join("") + a.pad + "}";
    return bt.pop(), s(l);
  }
  return e = String(e).replace(/[\r\n]/g, function(m) {
    return m === `
` ? "\\n" : "\\r";
  }), i.singleQuotes ? (e = e.replace(/\\?'/g, "\\'"), "'" + e + "'") : (e = e.replace(/"/g, '\\"'), '"' + e + '"');
}
var $o = nu.prettyPrint = jt, Ue = { exports: {} }, ye = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var On;
function Jo() {
  if (On)
    return ye;
  On = 1;
  var e = 60103, t = 60106, r = 60107, n = 60108, i = 60114, a = 60109, s = 60110, l = 60112, p = 60113, m = 60120, g = 60115, y = 60116, A = 60121, v = 60122, F = 60117, C = 60129, _ = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var R = Symbol.for;
    e = R("react.element"), t = R("react.portal"), r = R("react.fragment"), n = R("react.strict_mode"), i = R("react.profiler"), a = R("react.provider"), s = R("react.context"), l = R("react.forward_ref"), p = R("react.suspense"), m = R("react.suspense_list"), g = R("react.memo"), y = R("react.lazy"), A = R("react.block"), v = R("react.server.block"), F = R("react.fundamental"), C = R("react.debug_trace_mode"), _ = R("react.legacy_hidden");
  }
  function j(I) {
    if (typeof I == "object" && I !== null) {
      var te = I.$$typeof;
      switch (te) {
        case e:
          switch (I = I.type, I) {
            case r:
            case i:
            case n:
            case p:
            case m:
              return I;
            default:
              switch (I = I && I.$$typeof, I) {
                case s:
                case l:
                case y:
                case g:
                case a:
                  return I;
                default:
                  return te;
              }
          }
        case t:
          return te;
      }
    }
  }
  var J = a, B = e, d = l, D = r, S = y, x = g, G = t, z = i, V = n, Q = p;
  return ye.ContextConsumer = s, ye.ContextProvider = J, ye.Element = B, ye.ForwardRef = d, ye.Fragment = D, ye.Lazy = S, ye.Memo = x, ye.Portal = G, ye.Profiler = z, ye.StrictMode = V, ye.Suspense = Q, ye.isAsyncMode = function() {
    return !1;
  }, ye.isConcurrentMode = function() {
    return !1;
  }, ye.isContextConsumer = function(I) {
    return j(I) === s;
  }, ye.isContextProvider = function(I) {
    return j(I) === a;
  }, ye.isElement = function(I) {
    return typeof I == "object" && I !== null && I.$$typeof === e;
  }, ye.isForwardRef = function(I) {
    return j(I) === l;
  }, ye.isFragment = function(I) {
    return j(I) === r;
  }, ye.isLazy = function(I) {
    return j(I) === y;
  }, ye.isMemo = function(I) {
    return j(I) === g;
  }, ye.isPortal = function(I) {
    return j(I) === t;
  }, ye.isProfiler = function(I) {
    return j(I) === i;
  }, ye.isStrictMode = function(I) {
    return j(I) === n;
  }, ye.isSuspense = function(I) {
    return j(I) === p;
  }, ye.isValidElementType = function(I) {
    return typeof I == "string" || typeof I == "function" || I === r || I === i || I === C || I === n || I === p || I === m || I === _ || typeof I == "object" && I !== null && (I.$$typeof === y || I.$$typeof === g || I.$$typeof === a || I.$$typeof === s || I.$$typeof === l || I.$$typeof === F || I.$$typeof === A || I[0] === v);
  }, ye.typeOf = j, ye;
}
var ve = {};
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pn;
function Yo() {
  return Pn || (Pn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = 60103, t = 60106, r = 60107, n = 60108, i = 60114, a = 60109, s = 60110, l = 60112, p = 60113, m = 60120, g = 60115, y = 60116, A = 60121, v = 60122, F = 60117, C = 60129, _ = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var R = Symbol.for;
      e = R("react.element"), t = R("react.portal"), r = R("react.fragment"), n = R("react.strict_mode"), i = R("react.profiler"), a = R("react.provider"), s = R("react.context"), l = R("react.forward_ref"), p = R("react.suspense"), m = R("react.suspense_list"), g = R("react.memo"), y = R("react.lazy"), A = R("react.block"), v = R("react.server.block"), F = R("react.fundamental"), R("react.scope"), R("react.opaque.id"), C = R("react.debug_trace_mode"), R("react.offscreen"), _ = R("react.legacy_hidden");
    }
    var j = !1;
    function J(L) {
      return !!(typeof L == "string" || typeof L == "function" || L === r || L === i || L === C || L === n || L === p || L === m || L === _ || j || typeof L == "object" && L !== null && (L.$$typeof === y || L.$$typeof === g || L.$$typeof === a || L.$$typeof === s || L.$$typeof === l || L.$$typeof === F || L.$$typeof === A || L[0] === v));
    }
    function B(L) {
      if (typeof L == "object" && L !== null) {
        var X = L.$$typeof;
        switch (X) {
          case e:
            var se = L.type;
            switch (se) {
              case r:
              case i:
              case n:
              case p:
              case m:
                return se;
              default:
                var de = se && se.$$typeof;
                switch (de) {
                  case s:
                  case l:
                  case y:
                  case g:
                  case a:
                    return de;
                  default:
                    return X;
                }
            }
          case t:
            return X;
        }
      }
    }
    var d = s, D = a, S = e, x = l, G = r, z = y, V = g, Q = t, I = i, te = n, Ee = p, re = !1, T = !1;
    function P(L) {
      return re || (re = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function W(L) {
      return T || (T = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ne(L) {
      return B(L) === s;
    }
    function U(L) {
      return B(L) === a;
    }
    function ce(L) {
      return typeof L == "object" && L !== null && L.$$typeof === e;
    }
    function oe(L) {
      return B(L) === l;
    }
    function Z(L) {
      return B(L) === r;
    }
    function Y(L) {
      return B(L) === y;
    }
    function b(L) {
      return B(L) === g;
    }
    function w(L) {
      return B(L) === t;
    }
    function K(L) {
      return B(L) === i;
    }
    function N(L) {
      return B(L) === n;
    }
    function k(L) {
      return B(L) === p;
    }
    ve.ContextConsumer = d, ve.ContextProvider = D, ve.Element = S, ve.ForwardRef = x, ve.Fragment = G, ve.Lazy = z, ve.Memo = V, ve.Portal = Q, ve.Profiler = I, ve.StrictMode = te, ve.Suspense = Ee, ve.isAsyncMode = P, ve.isConcurrentMode = W, ve.isContextConsumer = ne, ve.isContextProvider = U, ve.isElement = ce, ve.isForwardRef = oe, ve.isFragment = Z, ve.isLazy = Y, ve.isMemo = b, ve.isPortal = w, ve.isProfiler = K, ve.isStrictMode = N, ve.isSuspense = k, ve.isValidElementType = J, ve.typeOf = B;
  }()), ve;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Jo() : e.exports = Yo();
})(Ue);
var He = function(e, t) {
  return e === 0 ? "" : new Array(e * t).fill(" ").join("");
};
function ht(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ht = function(t) {
    return typeof t;
  } : ht = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ht(e);
}
function In(e) {
  return Ho(e) || Ko(e) || Qo(e) || Xo();
}
function Ho(e) {
  if (Array.isArray(e))
    return yr(e);
}
function Ko(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Qo(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return yr(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return yr(e, t);
  }
}
function yr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Xo() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vr(e, t) {
  return e === null || ht(e) !== "object" || e instanceof Date || e instanceof RegExp || /* @__PURE__ */ Iu.isValidElement(e) ? e : (t.add(e), Array.isArray(e) ? e.map(function(r) {
    return vr(r, t);
  }) : Object.keys(e).sort().reduce(function(r, n) {
    return n === "_owner" || (n === "current" || t.has(e[n]) ? r[n] = "[Circular]" : r[n] = vr(e[n], t)), r;
  }, {}));
}
function Zo(e) {
  return vr(e, /* @__PURE__ */ new WeakSet());
}
var iu = function(t) {
  return {
    type: "string",
    value: t
  };
}, el = function(t) {
  return {
    type: "number",
    value: t
  };
}, tl = function(t, r, n, i) {
  return {
    type: "ReactElement",
    displayName: t,
    props: r,
    defaultProps: n,
    childrens: i
  };
}, rl = function(t, r) {
  return {
    type: "ReactFragment",
    key: t,
    childrens: r
  };
}, nl = Boolean(Wn), uu = function(t) {
  return !t.name || t.name === "_default" ? "No Display Name" : t.name;
}, il = function e(t) {
  switch (!0) {
    case Boolean(t.displayName):
      return t.displayName;
    case t.$$typeof === Ue.exports.Memo:
      return e(t.type);
    case t.$$typeof === Ue.exports.ForwardRef:
      return e(t.render);
    default:
      return uu(t);
  }
}, ul = function(t) {
  switch (!0) {
    case typeof t.type == "string":
      return t.type;
    case typeof t.type == "function":
      return t.type.displayName ? t.type.displayName : uu(t.type);
    case Ue.exports.isForwardRef(t):
    case Ue.exports.isMemo(t):
      return il(t.type);
    case Ue.exports.isContextConsumer(t):
      return "".concat(t.type._context.displayName || "Context", ".Consumer");
    case Ue.exports.isContextProvider(t):
      return "".concat(t.type._context.displayName || "Context", ".Provider");
    case Ue.exports.isLazy(t):
      return "Lazy";
    case Ue.exports.isProfiler(t):
      return "Profiler";
    case Ue.exports.isStrictMode(t):
      return "StrictMode";
    case Ue.exports.isSuspense(t):
      return "Suspense";
    default:
      return "UnknownElementType";
  }
}, Rn = function(t, r) {
  return r !== "children";
}, al = function(t) {
  return t !== !0 && t !== !1 && t !== null && t !== "";
}, Ln = function(t, r) {
  var n = {};
  return Object.keys(t).filter(function(i) {
    return r(t[i], i);
  }).forEach(function(i) {
    return n[i] = t[i];
  }), n;
}, Gr = function e(t, r) {
  var n = r.displayName, i = n === void 0 ? ul : n;
  if (typeof t == "string")
    return iu(t);
  if (typeof t == "number")
    return el(t);
  if (!/* @__PURE__ */ Vt.isValidElement(t))
    throw new Error("react-element-to-jsx-string: Expected a React.Element, got `".concat(ht(t), "`"));
  var a = i(t), s = Ln(t.props, Rn);
  t.ref !== null && (s.ref = t.ref);
  var l = t.key;
  typeof l == "string" && l.search(/^\./) && (s.key = l);
  var p = Ln(t.type.defaultProps || {}, Rn), m = Vt.Children.toArray(t.props.children).filter(al).map(function(g) {
    return e(g, r);
  });
  return nl && t.type === Wn ? rl(l, m) : tl(a, s, p, m);
};
function sl() {
}
var ol = function(t) {
  return t.toString().split(`
`).map(function(r) {
    return r.trim();
  }).join("");
}, Mn = ol, au = function(e, t) {
  var r = t.functionValue, n = r === void 0 ? Mn : r, i = t.showFunctions;
  return n(!i && n === Mn ? sl : e);
}, ll = function(e, t, r, n) {
  var i = Zo(e), a = $o(i, {
    transform: function(l, p, m) {
      var g = l[p];
      return g && /* @__PURE__ */ zn(g) ? ir(Gr(g, n), !0, r, n) : typeof g == "function" ? au(g, n) : m;
    }
  });
  return t ? a.replace(/\s+/g, " ").replace(/{ /g, "{").replace(/ }/g, "}").replace(/\[ /g, "[").replace(/ ]/g, "]") : a.replace(/\t/g, He(1, n.tabStop)).replace(/\n([^$])/g, `
`.concat(He(r + 1, n.tabStop), "$1"));
}, cl = function(t) {
  return t.replace(/"/g, "&quot;");
}, fl = function(t, r, n, i) {
  if (typeof t == "number")
    return "{".concat(String(t), "}");
  if (typeof t == "string")
    return '"'.concat(cl(t), '"');
  if (ht(t) === "symbol") {
    var a = t.valueOf().toString().replace(/Symbol\((.*)\)/, "$1");
    return a ? "{Symbol('".concat(a, "')}") : "{Symbol()}";
  }
  return typeof t == "function" ? "{".concat(au(t, i), "}") : /* @__PURE__ */ zn(t) ? "{".concat(ir(Gr(t, i), !0, n, i), "}") : t instanceof Date ? isNaN(t.valueOf()) ? "{new Date(NaN)}" : '{new Date("'.concat(t.toISOString(), '")}') : qo(t) || Array.isArray(t) ? "{".concat(ll(t, r, n, i), "}") : "{".concat(String(t), "}");
}, pl = function(e, t, r, n, i, a, s, l) {
  if (!t && !n)
    throw new Error('The prop "'.concat(e, '" has no value and no default: could not be formatted'));
  var p = t ? r : i, m = l.useBooleanShorthandSyntax, g = l.tabStop, y = fl(p, a, s, l), A = " ", v = `
`.concat(He(s + 1, g)), F = y.includes(`
`);
  return m && y === "{false}" && !n ? (A = "", v = "") : m && y === "{true}" ? (A += "".concat(e), v += "".concat(e)) : (A += "".concat(e, "=").concat(y), v += "".concat(e, "=").concat(y)), {
    attributeFormattedInline: A,
    attributeFormattedMultiline: v,
    isMultilineAttribute: F
  };
}, hl = function(e, t) {
  var r = e.slice(0, e.length > 0 ? e.length - 1 : 0), n = e[e.length - 1];
  return n && (t.type === "string" || t.type === "number") && (n.type === "string" || n.type === "number") ? r.push(iu(String(n.value) + String(t.value))) : (n && r.push(n), r.push(t)), r;
}, dl = function(t) {
  return ["key", "ref"].includes(t);
}, ml = function(e) {
  return function(t) {
    var r = t.includes("key"), n = t.includes("ref"), i = t.filter(function(s) {
      return !dl(s);
    }), a = In(e ? i.sort() : i);
    return n && a.unshift("ref"), r && a.unshift("key"), a;
  };
};
function gl(e, t) {
  return Array.isArray(t) ? function(r) {
    return t.indexOf(r) === -1;
  } : function(r) {
    return t(e[r], r);
  };
}
var Al = function(t, r, n, i, a) {
  var s = a.tabStop;
  return t.type === "string" ? r.split(`
`).map(function(l, p) {
    return p === 0 ? l : "".concat(He(i, s)).concat(l);
  }).join(`
`) : r;
}, El = function(t, r, n) {
  return function(i) {
    return Al(i, ir(i, t, r, n), t, r, n);
  };
}, Dl = function(t, r) {
  return function(n) {
    var i = Object.keys(t).includes(n);
    return !i || i && t[n] !== r[n];
  };
}, su = function(t, r, n, i, a) {
  return a ? He(n, i).length + r.length > a : t.length > 1;
}, Cl = function(t, r, n, i, a, s, l) {
  return (su(t, r, a, s, l) || n) && !i;
}, ou = function(e, t, r, n) {
  var i = e.type, a = e.displayName, s = a === void 0 ? "" : a, l = e.childrens, p = e.props, m = p === void 0 ? {} : p, g = e.defaultProps, y = g === void 0 ? {} : g;
  if (i !== "ReactElement")
    throw new Error('The "formatReactElementNode" function could only format node of type "ReactElement". Given:  '.concat(i));
  var A = n.filterProps, v = n.maxInlineAttributesLineLength, F = n.showDefaultProps, C = n.sortProps, _ = n.tabStop, R = "<".concat(s), j = R, J = R, B = !1, d = [], D = gl(m, A);
  Object.keys(m).filter(D).filter(Dl(y, m)).forEach(function(G) {
    return d.push(G);
  }), Object.keys(y).filter(D).filter(function() {
    return F;
  }).filter(function(G) {
    return !d.includes(G);
  }).forEach(function(G) {
    return d.push(G);
  });
  var S = ml(C)(d);
  if (S.forEach(function(G) {
    var z = pl(G, Object.keys(m).includes(G), m[G], Object.keys(y).includes(G), y[G], t, r, n), V = z.attributeFormattedInline, Q = z.attributeFormattedMultiline, I = z.isMultilineAttribute;
    I && (B = !0), j += V, J += Q;
  }), J += `
`.concat(He(r, _)), Cl(S, j, B, t, r, _, v) ? R = J : R = j, l && l.length > 0) {
    var x = r + 1;
    R += ">", t || (R += `
`, R += He(x, _)), R += l.reduce(hl, []).map(El(t, x, n)).join(t ? "" : `
`.concat(He(x, _))), t || (R += `
`, R += He(x - 1, _)), R += "</".concat(s, ">");
  } else
    su(S, j, r, _, v) || (R += " "), R += "/>";
  return R;
}, yl = "", jn = "React.Fragment", vl = function(t, r, n) {
  var i = {};
  return r && (i = {
    key: r
  }), {
    type: "ReactElement",
    displayName: t,
    props: i,
    defaultProps: {},
    childrens: n
  };
}, xl = function(t) {
  var r = t.key;
  return Boolean(r);
}, Fl = function(t) {
  var r = t.childrens;
  return r.length === 0;
}, bl = function(e, t, r, n) {
  var i = e.type, a = e.key, s = e.childrens;
  if (i !== "ReactFragment")
    throw new Error('The "formatReactFragmentNode" function could only format node of type "ReactFragment". Given: '.concat(i));
  var l = n.useFragmentShortSyntax, p;
  return l ? Fl(e) || xl(e) ? p = jn : p = yl : p = jn, ou(vl(p, a, s), t, r, n);
}, Sl = ["<", ">", "{", "}"], _l = function(t) {
  return Sl.some(function(r) {
    return t.includes(r);
  });
}, Bl = function(t) {
  return _l(t) ? "{`".concat(t, "`}") : t;
}, wl = function(t) {
  var r = t;
  return r.endsWith(" ") && (r = r.replace(/^(.*?)(\s+)$/, "$1{'$2'}")), r.startsWith(" ") && (r = r.replace(/^(\s+)(.*)$/, "{'$1'}$2")), r;
}, ir = function(e, t, r, n) {
  if (e.type === "number")
    return String(e.value);
  if (e.type === "string")
    return e.value ? "".concat(wl(Bl(String(e.value)))) : "";
  if (e.type === "ReactElement")
    return ou(e, t, r, n);
  if (e.type === "ReactFragment")
    return bl(e, t, r, n);
  throw new TypeError('Unknow format type "'.concat(e.type, '"'));
}, Tl = function(e, t) {
  return ir(e, !1, 0, t);
}, xr = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.filterProps, i = n === void 0 ? [] : n, a = r.showDefaultProps, s = a === void 0 ? !0 : a, l = r.showFunctions, p = l === void 0 ? !1 : l, m = r.functionValue, g = r.tabStop, y = g === void 0 ? 2 : g, A = r.useBooleanShorthandSyntax, v = A === void 0 ? !0 : A, F = r.useFragmentShortSyntax, C = F === void 0 ? !0 : F, _ = r.sortProps, R = _ === void 0 ? !0 : _, j = r.maxInlineAttributesLineLength, J = r.displayName;
  if (!t)
    throw new Error("react-element-to-jsx-string: Expected a ReactElement");
  var B = {
    filterProps: i,
    showDefaultProps: s,
    showFunctions: p,
    functionValue: m,
    tabStop: y,
    useBooleanShorthandSyntax: v,
    useFragmentShortSyntax: C,
    sortProps: R,
    maxInlineAttributesLineLength: j,
    displayName: J
  };
  return Tl(Gr(t, B), B);
};
function Fr(e) {
  return Fr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fr(e);
}
function lu(e) {
  return e.$$typeof != null;
}
function cu(e, t) {
  var r = e.name;
  return r !== "" && r !== "anonymous" && r !== t ? r : null;
}
var kl = function(t) {
  return ue(JSON.stringify(t));
};
function Nl(e) {
  var t = e.type, r = t.displayName, n = xr(e, {});
  if (r != null) {
    var i = nr(r);
    return ue(i, n);
  }
  if (Vo(t) && Nr(t)) {
    var a = xr(e, {
      tabStop: 0
    }), s = a.replace(/\r?\n|\r/g, "");
    if (!Dt(s))
      return ue(s);
  }
  return ue(Ct, n);
}
var Ol = function(t) {
  if (lu(t) && t.type != null)
    return Nl(t);
  if (Tu(t)) {
    var r = tt(JSON.stringify(t));
    return Zi(r);
  }
  if (Array.isArray(t)) {
    var n = tt(JSON.stringify(t));
    return eu(n);
  }
  return ue(Tt);
}, Pl = function(t, r) {
  var n = !1, i;
  if (Zr(t.render))
    n = !0;
  else if (t.prototype != null && Zr(t.prototype.render))
    n = !0;
  else {
    var a;
    try {
      i = tt(t.toString());
      var s = i.inferredType, l = s.hasParams, p = s.params;
      l ? p.length === 1 && p[0].type === "ObjectPattern" && (a = t({})) : a = t(), a != null && lu(a) && (n = !0);
    } catch {
    }
  }
  var m = cu(t, r.name);
  if (m != null) {
    if (n)
      return ue(nr(m));
    i != null && (i = tt(t.toString()));
    var g = i.inferredType, y = g.hasParams;
    return ue(zr(m, y));
  }
  return ue(n ? Ct : mt);
}, Il = function(t) {
  return ue(t.toString());
}, fu = {
  string: kl,
  object: Ol,
  function: Pl,
  default: Il
};
function Rl() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.assign({}, fu, e);
}
function pu(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : fu;
  try {
    switch (Fr(e)) {
      case "string":
        return r.string(e, t);
      case "object":
        return r.object(e, t);
      case "function":
        return r.function(e, t);
      default:
        return r.default(e, t);
    }
  } catch (n) {
    console.error(n);
  }
  return null;
}
function Ll(e, t) {
  var r = t.propTypes;
  return r != null ? Object.keys(r).map(function(n) {
    return e.find(function(i) {
      return i.name === n;
    });
  }).filter(function(n) {
    return n;
  }) : e;
}
var Ml = function(t, r) {
  var n = r.name, i = r.type, a = i.summary === "element" || i.summary === "elementType", s = cu(t, n);
  if (s != null) {
    if (a)
      return ue(nr(s));
    var l = tt(t.toString()).inferredType, p = l.hasParams;
    return ue(zr(s, p));
  }
  return ue(a ? Ct : mt);
}, jl = Rl({
  function: Ml
});
function Vl(e, t) {
  var r = e.propDef, n = No(e);
  n != null && (r.type = n);
  var i = e.docgenInfo.defaultValue;
  if (i != null && i.value != null) {
    var a = ru(i.value);
    a != null && (r.defaultValue = a);
  } else if (t != null) {
    var s = pu(t, r, jl);
    s != null && (r.defaultValue = s);
  }
  return r;
}
function ql(e, t) {
  var r = t.defaultProps != null ? t.defaultProps : {}, n = e.map(function(i) {
    return Vl(i, r[i.propDef.name]);
  });
  return Ll(n, t);
}
function Ul(e, t) {
  var r = e.propDef, n = e.docgenInfo.defaultValue;
  if (n != null && n.value != null) {
    var i = ru(n.value);
    i != null && (r.defaultValue = i);
  } else if (t != null) {
    var a = pu(t, r);
    a != null && (r.defaultValue = a);
  }
  return r;
}
function Wl(e) {
  return e.map(function(t) {
    return Ul(t);
  });
}
var Vn = /* @__PURE__ */ new Map();
Object.keys(en.exports).forEach(function(e) {
  var t = en.exports[e];
  Vn.set(t, e), Vn.set(t.isRequired, e);
});
function zl(e, t) {
  var r = e;
  !Br(e) && !e.propTypes && Ei(e) && (r = e.type);
  var n = Ya(r, t);
  if (n.length === 0)
    return [];
  switch (n[0].typeSystem) {
    case We.JAVASCRIPT:
      return ql(n, e);
    case We.TYPESCRIPT:
      return Wl(n);
    default:
      return n.map(function(i) {
        return i.propDef;
      });
  }
}
var Gl = function(t) {
  return {
    rows: zl(t, "props")
  };
}, $l = function(t) {
  if (t) {
    var r = Gl(t), n = r.rows;
    if (n)
      return n.reduce(function(i, a) {
        var s = a.name, l = a.description, p = a.type, m = a.sbType, g = a.defaultValue, y = a.jsDocTags, A = a.required;
        return i[s] = {
          name: s,
          description: l,
          type: Object.assign({
            required: A
          }, m),
          table: {
            type: p,
            jsDocTags: y,
            defaultValue: g
          }
        }, i;
      }, {});
  }
  return null;
}, Jl = ["mdxType", "originalType", "children"], qn;
function Yl(e) {
  return Xl(e) || Ql(e) || Kl(e) || Hl();
}
function Hl() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Kl(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return br(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return br(e, t);
  }
}
function Ql(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Xl(e) {
  if (Array.isArray(e))
    return br(e);
}
function br(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Zl(e, t) {
  if (e == null)
    return {};
  var r = ec(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function ec(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function tc(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
var rc = function(t, r) {
  if (typeof r.onBeforeRender != "function")
    return t;
  var n = Ou(r.onBeforeRender, Un(qn || (qn = tc([`
      StoryFn.parameters.jsx.onBeforeRender was deprecated.
      Prefer StoryFn.parameters.jsx.transformSource instead.
      See https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-onbeforerender for details.
    `]))));
  return n(t);
}, nc = function(t, r, n) {
  return typeof r.transformSource != "function" ? t : r.transformSource(t, n);
}, ic = function(t, r) {
  if (typeof t > "u")
    return Rt.warn("Too many skip or undefined component"), null;
  for (var n = t, i = n.type, a = 0; a < r.skip; a += 1) {
    if (typeof n > "u")
      return Rt.warn("Cannot skip undefined element"), null;
    if (Vt.Children.count(n) > 1)
      return Rt.warn("Trying to skip an array of elements"), null;
    typeof n.props.children > "u" ? (Rt.warn("Not enough children to skip elements."), typeof n.type == "function" && n.type.name === "" && (n = /* @__PURE__ */ Mu(i, {
      ...n.props
    }))) : typeof n.props.children == "function" ? n = n.props.children() : n = n.props.children;
  }
  var s = typeof r.displayName == "string" ? {
    showFunctions: !0,
    displayName: function() {
      return r.displayName;
    }
  } : {
    displayName: function(y) {
      return y.type.displayName || Yn(y.type, "displayName") || (y.type.name !== "_default" ? y.type.name : null) || (typeof y.type == "function" ? "No Display Name" : null) || (Os(y.type) ? y.type.render.name : null) || (Ei(y.type) ? y.type.type.name : null) || y.type;
    }
  }, l = {
    filterProps: function(y, A) {
      return y !== void 0;
    }
  }, p = Object.assign({}, s, l, r), m = Vt.Children.map(t, function(g) {
    var y = typeof g == "number" ? g.toString() : g, A = rc(xr(y, p), r);
    if (A.indexOf("&quot;") > -1) {
      var v = A.match(/\S+=\\"([^"]*)\\"/g);
      v && v.forEach(function(F) {
        A = A.replace(F, F.replace(/&quot;/g, "'"));
      });
    }
    return A;
  }).join(`
`);
  return m.replace(/function\s+noRefCheck\(\)\s+\{\}/, "() => {}");
}, uc = {
  skip: 0,
  showFunctions: !1,
  enableBeautify: !0,
  showDefaultProps: !1
}, ac = function(t) {
  var r, n = t == null || (r = t.parameters.docs) === null || r === void 0 ? void 0 : r.source, i = t == null ? void 0 : t.parameters.__isArgsStory;
  return (n == null ? void 0 : n.type) === Ut.DYNAMIC ? !1 : !i || (n == null ? void 0 : n.code) || (n == null ? void 0 : n.type) === Ut.CODE;
}, sc = function(t) {
  var r, n;
  return ((r = t.type) === null || r === void 0 ? void 0 : r.displayName) === "MDXCreateElement" && !!((n = t.props) !== null && n !== void 0 && n.mdxType);
}, oc = function e(t) {
  if (!sc(t))
    return t;
  var r = t.props;
  r.mdxType;
  var n = r.originalType, i = r.children, a = Zl(r, Jl), s = [];
  if (i) {
    var l = Array.isArray(i) ? i : [i];
    s = l.map(e);
  }
  return /* @__PURE__ */ Ru.apply(void 0, [n, a].concat(Yl(s)));
}, lc = function(t, r) {
  var n, i, a = ku.getChannel(), s = ac(r), l = t(), p = "";
  if (Nu(function() {
    s || a.emit(Xa, (r || {}).id, p);
  }), s)
    return l;
  var m = Object.assign({}, uc, (r == null ? void 0 : r.parameters.jsx) || {}), g = r != null && (n = r.parameters.docs) !== null && n !== void 0 && (i = n.source) !== null && i !== void 0 && i.excludeDecorators ? r.originalStoryFn(r.args, r) : l, y = oc(g), A = ic(y, m);
  return A && (p = nc(A, m, r)), l;
}, gc = {
  docs: {
    inlineStories: !0,
    prepareForInline: function(t) {
      return t();
    },
    extractArgTypes: $l,
    extractComponentDescription: Ha
  }
}, Ac = [lc], Ec = [Ka];
export {
  Ec as argTypesEnhancers,
  Ac as decorators,
  gc as parameters
};
//# sourceMappingURL=config.1cb1aed1.js.map
