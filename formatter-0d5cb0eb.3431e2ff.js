import { p as Ga, ab as O7, ac as gc, O as kb, C as Nb, z as $u, ad as L7, ae as Pb, af as Ib, ag as rf, P as Ob, T as R7, U as Lb, ah as Rb, ai as M7, Z as Mb, aj as j7, ak as $7, al as jb, x as qu, am as q7, s as $b, v as Ha, an as V7, ao as U7, ap as W7, E as tf, F as Eo, aq as G7, ar as H7, as as z7, N as X7, at as J7, au as Y7, av as K7, R as Q7, aw as Z7, M as qb, ax as _7, ay as eL, az as Vu, $ as rL, aA as tL, J as nL, L as Vb, V as uL, aB as aL, aC as Ub, aD as iL, aE as oL, aF as LD, aG as sL, aH as Wb, aI as cL, aJ as Gb, aK as lL, aL as pL, aM as fL, aN as dL, aO as hL, aP as DL, A as gL, B as mL, a1 as vL } from "./iframe.6f0d8ddb.js";
import { a0 as yL, a1 as EL, a2 as CL, a3 as AL, a4 as bL, U as go, a5 as Hb, a6 as FL } from "./Props.e30088b6.js";
import "./es.map.constructor.be929aeb.js";
import "./string.15091591.js";
import "./es.string.from-code-point.bdf0f098.js";
import "./es.regexp.flags.b11df199.js";
import "react";
import "./jsx-runtime.1e0c78f5.js";
import "./es.number.to-fixed.963eadaa.js";
var SL = Ga, TL = O7.codeAt;
SL({ target: "String", proto: !0 }, {
  codePointAt: function(N) {
    return TL(this, N);
  }
});
var xL = Ga;
xL({ target: "Number", stat: !0, nonConfigurable: !0, nonWritable: !0 }, {
  MAX_SAFE_INTEGER: 9007199254740991
});
var wL = Ga, BL = gc;
wL({ target: "URL", proto: !0, enumerable: !0 }, {
  toJSON: function() {
    return BL(URL.prototype.toString, this);
  }
});
var yo = { exports: {} }, kL = yL, RD = Nb, ut = $u, zb = L7, nf = Pb, ju = Ib, MD = rf, NL = j7, PL = Ob, bD = $7, IL = kb.f, OL = jb, uf = R7, Co = Lb, LL = Rb, RL = M7, Xb = Mb, Jb = Xb.enforce, ML = Xb.get, Qp = ut.Int8Array, FD = Qp && Qp.prototype, rb = ut.Uint8ClampedArray, tb = rb && rb.prototype, Bn = Qp && uf(Qp), ln = FD && uf(FD), jL = Object.prototype, jD = ut.TypeError, nb = LL("toStringTag"), SD = RL("TYPED_ARRAY_TAG"), Zp = "TypedArrayConstructor", _n = kL && !!Co && MD(ut.opera) !== "Opera", Yb = !1, pt, Mu, mo, eu = {
  Int8Array: 1,
  Uint8Array: 1,
  Uint8ClampedArray: 1,
  Int16Array: 2,
  Uint16Array: 2,
  Int32Array: 4,
  Uint32Array: 4,
  Float32Array: 4,
  Float64Array: 8
}, $D = {
  BigInt64Array: 8,
  BigUint64Array: 8
}, $L = function(N) {
  if (!nf(N))
    return !1;
  var M = MD(N);
  return M === "DataView" || ju(eu, M) || ju($D, M);
}, Kb = function(B) {
  var N = uf(B);
  if (!!nf(N)) {
    var M = ML(N);
    return M && ju(M, Zp) ? M[Zp] : Kb(N);
  }
}, Qb = function(B) {
  if (!nf(B))
    return !1;
  var N = MD(B);
  return ju(eu, N) || ju($D, N);
}, qL = function(B) {
  if (Qb(B))
    return B;
  throw jD("Target is not a typed array");
}, VL = function(B) {
  if (zb(B) && (!Co || OL(Bn, B)))
    return B;
  throw jD(NL(B) + " is not a typed array constructor");
}, UL = function(B, N, M, U) {
  if (!!RD) {
    if (M)
      for (var re in eu) {
        var ye = ut[re];
        if (ye && ju(ye.prototype, B))
          try {
            delete ye.prototype[B];
          } catch {
            try {
              ye.prototype[B] = N;
            } catch {
            }
          }
      }
    (!ln[B] || M) && bD(ln, B, M ? N : _n && FD[B] || N, U);
  }
}, WL = function(B, N, M) {
  var U, re;
  if (!!RD) {
    if (Co) {
      if (M) {
        for (U in eu)
          if (re = ut[U], re && ju(re, B))
            try {
              delete re[B];
            } catch {
            }
      }
      if (!Bn[B] || M)
        try {
          return bD(Bn, B, M ? N : _n && Bn[B] || N);
        } catch {
        }
      else
        return;
    }
    for (U in eu)
      re = ut[U], re && (!re[B] || M) && bD(re, B, N);
  }
};
for (pt in eu)
  Mu = ut[pt], mo = Mu && Mu.prototype, mo ? Jb(mo)[Zp] = Mu : _n = !1;
for (pt in $D)
  Mu = ut[pt], mo = Mu && Mu.prototype, mo && (Jb(mo)[Zp] = Mu);
if ((!_n || !zb(Bn) || Bn === Function.prototype) && (Bn = function() {
  throw jD("Incorrect invocation");
}, _n))
  for (pt in eu)
    ut[pt] && Co(ut[pt], Bn);
if ((!_n || !ln || ln === jL) && (ln = Bn.prototype, _n))
  for (pt in eu)
    ut[pt] && Co(ut[pt].prototype, ln);
_n && uf(tb) !== ln && Co(tb, ln);
if (RD && !ju(ln, nb)) {
  Yb = !0, IL(ln, nb, { get: function() {
    return nf(this) ? this[SD] : void 0;
  } });
  for (pt in eu)
    ut[pt] && PL(ut[pt], SD, pt);
}
var rr = {
  NATIVE_ARRAY_BUFFER_VIEWS: _n,
  TYPED_ARRAY_TAG: Yb && SD,
  aTypedArray: qL,
  aTypedArrayConstructor: VL,
  exportTypedArrayMethod: UL,
  exportTypedArrayStaticMethod: WL,
  getTypedArrayConstructor: Kb,
  isView: $L,
  isTypedArray: Qb,
  TypedArray: Bn,
  TypedArrayPrototype: ln
}, Zb = $u, vD = qu, GL = q7, HL = rr.NATIVE_ARRAY_BUFFER_VIEWS, zL = Zb.ArrayBuffer, Ua = Zb.Int8Array, XL = !HL || !vD(function() {
  Ua(1);
}) || !vD(function() {
  new Ua(-1);
}) || !GL(function(B) {
  new Ua(), new Ua(null), new Ua(1.5), new Ua(B);
}, !0) || vD(function() {
  return new Ua(new zL(2), 1, void 0).length !== 1;
}), JL = $b, YL = RangeError, KL = function(B) {
  var N = JL(B);
  if (N < 0)
    throw YL("The argument can't be less than 0");
  return N;
}, QL = KL, ZL = RangeError, _b = function(B, N) {
  var M = QL(B);
  if (M % N)
    throw ZL("Wrong offset");
  return M;
}, _L = rf, eR = Ha, rR = eR("".slice), tR = function(B) {
  return rR(_L(B), 0, 3) === "Big";
}, nR = V7, uR = TypeError, eF = function(B) {
  var N = nR(B, "number");
  if (typeof N == "number")
    throw uR("Can't convert number to bigint");
  return BigInt(N);
}, aR = U7, iR = gc, oR = W7, sR = tf, cR = Eo, lR = G7, pR = H7, fR = z7, dR = tR, hR = rr.aTypedArrayConstructor, DR = eF, gR = function(N) {
  var M = oR(this), U = sR(N), re = arguments.length, ye = re > 1 ? arguments[1] : void 0, Ve = ye !== void 0, De = pR(U), he, Ge, Gt, Nn, pn, bt, Ht, or;
  if (De && !fR(De))
    for (Ht = lR(U, De), or = Ht.next, U = []; !(bt = iR(or, Ht)).done; )
      U.push(bt.value);
  for (Ve && re > 2 && (ye = aR(ye, arguments[2])), Ge = cR(U), Gt = new (hR(M))(Ge), Nn = dR(Gt), he = 0; Ge > he; he++)
    pn = Ve ? ye(U[he], he) : U[he], Gt[he] = Nn ? DR(pn) : +pn;
  return Gt;
}, ub = Ga, rF = $u, ab = gc, mR = Nb, vR = XL, Ao = rr, tF = EL, ib = Q7, yR = Y7, pc = Ob, ER = Z7, CR = qb, ob = CL, yD = _b, nF = K7, fc = Ib, AR = rf, TD = Pb, bR = _7, FR = eL, SR = jb, zp = Lb, TR = X7.f, sb = gR, xR = Vu.forEach, wR = rL, uF = kb, aF = J7, qD = Mb, BR = tL, xD = qD.get, kR = qD.set, NR = qD.enforce, VD = uF.f, PR = aF.f, IR = Math.round, ED = rF.RangeError, iF = tF.ArrayBuffer, OR = iF.prototype, LR = tF.DataView, Xp = Ao.NATIVE_ARRAY_BUFFER_VIEWS, cb = Ao.TYPED_ARRAY_TAG, lb = Ao.TypedArray, dc = Ao.TypedArrayPrototype, RR = Ao.aTypedArrayConstructor, wD = Ao.isTypedArray, Jp = "BYTES_PER_ELEMENT", CD = "Wrong length", pb = function(B, N) {
  RR(B);
  for (var M = 0, U = N.length, re = new B(U); U > M; )
    re[M] = N[M++];
  return re;
}, Yp = function(B, N) {
  VD(B, N, { get: function() {
    return xD(this)[N];
  } });
}, fb = function(B) {
  var N;
  return SR(OR, B) || (N = AR(B)) == "ArrayBuffer" || N == "SharedArrayBuffer";
}, oF = function(B, N) {
  return wD(B) && !bR(N) && N in B && ER(+N) && N >= 0;
}, db = function(N, M) {
  return M = nF(M), oF(N, M) ? yR(2, N[M]) : PR(N, M);
}, hb = function(N, M, U) {
  return M = nF(M), oF(N, M) && TD(U) && fc(U, "value") && !fc(U, "get") && !fc(U, "set") && !U.configurable && (!fc(U, "writable") || U.writable) && (!fc(U, "enumerable") || U.enumerable) ? (N[M] = U.value, N) : VD(N, M, U);
};
mR ? (Xp || (aF.f = db, uF.f = hb, Yp(dc, "buffer"), Yp(dc, "byteOffset"), Yp(dc, "byteLength"), Yp(dc, "length")), ub({ target: "Object", stat: !0, forced: !Xp }, {
  getOwnPropertyDescriptor: db,
  defineProperty: hb
}), yo.exports = function(B, N, M) {
  var U = B.match(/\d+$/)[0] / 8, re = B + (M ? "Clamped" : "") + "Array", ye = "get" + B, Ve = "set" + B, De = rF[re], he = De, Ge = he && he.prototype, Gt = {}, Nn = function(or, Ye) {
    var dr = xD(or);
    return dr.view[ye](Ye * U + dr.byteOffset, !0);
  }, pn = function(or, Ye, dr) {
    var Ft = xD(or);
    M && (dr = (dr = IR(dr)) < 0 ? 0 : dr > 255 ? 255 : dr & 255), Ft.view[Ve](Ye * U + Ft.byteOffset, dr, !0);
  }, bt = function(or, Ye) {
    VD(or, Ye, {
      get: function() {
        return Nn(this, Ye);
      },
      set: function(dr) {
        return pn(this, Ye, dr);
      },
      enumerable: !0
    });
  };
  Xp ? vR && (he = N(function(or, Ye, dr, Ft) {
    return ib(or, Ge), BR(function() {
      return TD(Ye) ? fb(Ye) ? Ft !== void 0 ? new De(Ye, yD(dr, U), Ft) : dr !== void 0 ? new De(Ye, yD(dr, U)) : new De(Ye) : wD(Ye) ? pb(he, Ye) : ab(sb, he, Ye) : new De(ob(Ye));
    }(), or, he);
  }), zp && zp(he, lb), xR(TR(De), function(or) {
    or in he || pc(he, or, De[or]);
  }), he.prototype = Ge) : (he = N(function(or, Ye, dr, Ft) {
    ib(or, Ge);
    var Pn = 0, zt = 0, ru, ft, fn;
    if (!TD(Ye))
      fn = ob(Ye), ft = fn * U, ru = new iF(ft);
    else if (fb(Ye)) {
      ru = Ye, zt = yD(dr, U);
      var Uu = Ye.byteLength;
      if (Ft === void 0) {
        if (Uu % U || (ft = Uu - zt, ft < 0))
          throw ED(CD);
      } else if (ft = CR(Ft) * U, ft + zt > Uu)
        throw ED(CD);
      fn = ft / U;
    } else
      return wD(Ye) ? pb(he, Ye) : ab(sb, he, Ye);
    for (kR(or, {
      buffer: ru,
      byteOffset: zt,
      byteLength: ft,
      length: fn,
      view: new LR(ru)
    }); Pn < fn; )
      bt(or, Pn++);
  }), zp && zp(he, lb), Ge = he.prototype = FR(dc)), Ge.constructor !== he && pc(Ge, "constructor", he), NR(Ge).TypedArrayConstructor = he, cb && pc(Ge, cb, re);
  var Ht = he != De;
  Gt[re] = he, ub({ global: !0, constructor: !0, forced: Ht, sham: !Xp }, Gt), Jp in he || pc(he, Jp, U), Jp in Ge || pc(Ge, Jp, U), wR(re);
}) : yo.exports = function() {
};
var MR = yo.exports;
MR("Uint8", function(B) {
  return function(M, U, re) {
    return B(this, M, U, re);
  };
});
var jR = tf, AD = Vb, $R = Eo, qR = nL, VR = Math.min, UR = [].copyWithin || function(N, M) {
  var U = jR(this), re = $R(U), ye = AD(N, re), Ve = AD(M, re), De = arguments.length > 2 ? arguments[2] : void 0, he = VR((De === void 0 ? re : AD(De, re)) - Ve, re - ye), Ge = 1;
  for (Ve < ye && ye < Ve + he && (Ge = -1, Ve += he - 1, ye += he - 1); he-- > 0; )
    Ve in U ? U[ye] = U[Ve] : qR(U, ye), ye += Ge, Ve += Ge;
  return U;
}, WR = Ha, sF = rr, GR = UR, HR = WR(GR), zR = sF.aTypedArray, XR = sF.exportTypedArrayMethod;
XR("copyWithin", function(N, M) {
  return HR(zR(this), N, M, arguments.length > 2 ? arguments[2] : void 0);
});
var cF = rr, JR = Vu.every, YR = cF.aTypedArray, KR = cF.exportTypedArrayMethod;
KR("every", function(N) {
  return JR(YR(this), N, arguments.length > 1 ? arguments[1] : void 0);
});
var lF = rr, QR = uL, ZR = eF, _R = rf, eM = gc, rM = Ha, tM = qu, nM = lF.aTypedArray, uM = lF.exportTypedArrayMethod, aM = rM("".slice), iM = tM(function() {
  var B = 0;
  return new Int8Array(2).fill({ valueOf: function() {
    return B++;
  } }), B !== 1;
});
uM("fill", function(N) {
  var M = arguments.length;
  nM(this);
  var U = aM(_R(this), 0, 3) === "Big" ? ZR(N) : +N;
  return eM(QR, this, U, M > 1 ? arguments[1] : void 0, M > 2 ? arguments[2] : void 0);
}, iM);
var oM = Eo, sM = function(B, N) {
  for (var M = 0, U = oM(N), re = new B(U); U > M; )
    re[M] = N[M++];
  return re;
}, pF = rr, cM = aL, lM = pF.aTypedArrayConstructor, pM = pF.getTypedArrayConstructor, af = function(B) {
  return lM(cM(B, pM(B)));
}, fM = sM, dM = af, hM = function(B, N) {
  return fM(dM(B), N);
}, fF = rr, DM = Vu.filter, gM = hM, mM = fF.aTypedArray, vM = fF.exportTypedArrayMethod;
vM("filter", function(N) {
  var M = DM(mM(this), N, arguments.length > 1 ? arguments[1] : void 0);
  return gM(this, M);
});
var dF = rr, yM = Vu.find, EM = dF.aTypedArray, CM = dF.exportTypedArrayMethod;
CM("find", function(N) {
  return yM(EM(this), N, arguments.length > 1 ? arguments[1] : void 0);
});
var hF = rr, AM = Vu.findIndex, bM = hF.aTypedArray, FM = hF.exportTypedArrayMethod;
FM("findIndex", function(N) {
  return AM(bM(this), N, arguments.length > 1 ? arguments[1] : void 0);
});
var DF = rr, SM = Vu.forEach, TM = DF.aTypedArray, xM = DF.exportTypedArrayMethod;
xM("forEach", function(N) {
  SM(TM(this), N, arguments.length > 1 ? arguments[1] : void 0);
});
var gF = rr, wM = Ub.includes, BM = gF.aTypedArray, kM = gF.exportTypedArrayMethod;
kM("includes", function(N) {
  return wM(BM(this), N, arguments.length > 1 ? arguments[1] : void 0);
});
var mF = rr, NM = Ub.indexOf, PM = mF.aTypedArray, IM = mF.exportTypedArrayMethod;
IM("indexOf", function(N) {
  return NM(PM(this), N, arguments.length > 1 ? arguments[1] : void 0);
});
var OM = $u, LM = qu, UD = Ha, vF = rr, WD = iL, RM = Rb, GD = RM("iterator"), Db = OM.Uint8Array, MM = UD(WD.values), jM = UD(WD.keys), $M = UD(WD.entries), HD = vF.aTypedArray, of = vF.exportTypedArrayMethod, ho = Db && Db.prototype, sf = !LM(function() {
  ho[GD].call([1]);
}), yF = !!ho && ho.values && ho[GD] === ho.values && ho.values.name === "values", EF = function() {
  return MM(HD(this));
};
of("entries", function() {
  return $M(HD(this));
}, sf);
of("keys", function() {
  return jM(HD(this));
}, sf);
of("values", EF, sf || !yF, { name: "values" });
of(GD, EF, sf || !yF, { name: "values" });
var CF = rr, qM = Ha, VM = CF.aTypedArray, UM = CF.exportTypedArrayMethod, WM = qM([].join);
UM("join", function(N) {
  return WM(VM(this), N);
});
var GM = LD, HM = sL, zM = $b, XM = Eo, JM = oL, YM = Math.min, BD = [].lastIndexOf, AF = !!BD && 1 / [1].lastIndexOf(1, -0) < 0, KM = JM("lastIndexOf"), QM = AF || !KM, ZM = QM ? function(N) {
  if (AF)
    return GM(BD, this, arguments) || 0;
  var M = HM(this), U = XM(M), re = U - 1;
  for (arguments.length > 1 && (re = YM(re, zM(arguments[1]))), re < 0 && (re = U + re); re >= 0; re--)
    if (re in M && M[re] === N)
      return re || 0;
  return -1;
} : BD, bF = rr, _M = LD, ej = ZM, rj = bF.aTypedArray, tj = bF.exportTypedArrayMethod;
tj("lastIndexOf", function(N) {
  var M = arguments.length;
  return _M(ej, rj(this), M > 1 ? [N, arguments[1]] : [N]);
});
var FF = rr, nj = Vu.map, uj = af, aj = FF.aTypedArray, ij = FF.exportTypedArrayMethod;
ij("map", function(N) {
  return nj(aj(this), N, arguments.length > 1 ? arguments[1] : void 0, function(M, U) {
    return new (uj(M))(U);
  });
});
var oj = Wb, sj = tf, cj = cL, lj = Eo, pj = TypeError, gb = function(B) {
  return function(N, M, U, re) {
    oj(M);
    var ye = sj(N), Ve = cj(ye), De = lj(ye), he = B ? De - 1 : 0, Ge = B ? -1 : 1;
    if (U < 2)
      for (; ; ) {
        if (he in Ve) {
          re = Ve[he], he += Ge;
          break;
        }
        if (he += Ge, B ? he < 0 : De <= he)
          throw pj("Reduce of empty array with no initial value");
      }
    for (; B ? he >= 0 : De > he; he += Ge)
      he in Ve && (re = M(re, Ve[he], he, ye));
    return re;
  };
}, SF = {
  left: gb(!1),
  right: gb(!0)
}, TF = rr, fj = SF.left, dj = TF.aTypedArray, hj = TF.exportTypedArrayMethod;
hj("reduce", function(N) {
  var M = arguments.length;
  return fj(dj(this), N, M, M > 1 ? arguments[1] : void 0);
});
var xF = rr, Dj = SF.right, gj = xF.aTypedArray, mj = xF.exportTypedArrayMethod;
mj("reduceRight", function(N) {
  var M = arguments.length;
  return Dj(gj(this), N, M, M > 1 ? arguments[1] : void 0);
});
var wF = rr, vj = wF.aTypedArray, yj = wF.exportTypedArrayMethod, Ej = Math.floor;
yj("reverse", function() {
  for (var N = this, M = vj(N).length, U = Ej(M / 2), re = 0, ye; re < U; )
    ye = N[re], N[re++] = N[--M], N[M] = ye;
  return N;
});
var BF = $u, kF = gc, zD = rr, Cj = Eo, Aj = _b, bj = tf, NF = qu, Fj = BF.RangeError, kD = BF.Int8Array, mb = kD && kD.prototype, PF = mb && mb.set, Sj = zD.aTypedArray, Tj = zD.exportTypedArrayMethod, ND = !NF(function() {
  var B = new Uint8ClampedArray(2);
  return kF(PF, B, { length: 1, 0: 3 }, 1), B[1] !== 3;
}), xj = ND && zD.NATIVE_ARRAY_BUFFER_VIEWS && NF(function() {
  var B = new kD(2);
  return B.set(1), B.set("2", 1), B[0] !== 0 || B[1] !== 2;
});
Tj("set", function(N) {
  Sj(this);
  var M = Aj(arguments.length > 1 ? arguments[1] : void 0, 1), U = bj(N);
  if (ND)
    return kF(PF, this, U, M);
  var re = this.length, ye = Cj(U), Ve = 0;
  if (ye + M > re)
    throw Fj("Wrong length");
  for (; Ve < ye; )
    this[M + Ve] = U[Ve++];
}, !ND || xj);
var IF = rr, wj = af, Bj = qu, kj = Gb, Nj = IF.aTypedArray, Pj = IF.exportTypedArrayMethod, Ij = Bj(function() {
  new Int8Array(1).slice();
});
Pj("slice", function(N, M) {
  for (var U = kj(Nj(this), N, M), re = wj(this), ye = 0, Ve = U.length, De = new re(Ve); Ve > ye; )
    De[ye] = U[ye++];
  return De;
}, Ij);
var OF = rr, Oj = Vu.some, Lj = OF.aTypedArray, Rj = OF.exportTypedArrayMethod;
Rj("some", function(N) {
  return Oj(Lj(this), N, arguments.length > 1 ? arguments[1] : void 0);
});
var Mj = $u, jj = Ha, PD = qu, $j = Wb, qj = lL, LF = rr, vb = pL, Vj = fL, yb = dL, Eb = hL, Uj = LF.aTypedArray, Wj = LF.exportTypedArrayMethod, hc = Mj.Uint16Array, vo = hc && jj(hc.prototype.sort), Gj = !!vo && !(PD(function() {
  vo(new hc(2), null);
}) && PD(function() {
  vo(new hc(2), {});
})), Cb = !!vo && !PD(function() {
  if (yb)
    return yb < 74;
  if (vb)
    return vb < 67;
  if (Vj)
    return !0;
  if (Eb)
    return Eb < 602;
  var B = new hc(516), N = Array(516), M, U;
  for (M = 0; M < 516; M++)
    U = M % 4, B[M] = 515 - M, N[M] = M - 2 * U + 3;
  for (vo(B, function(re, ye) {
    return (re / 4 | 0) - (ye / 4 | 0);
  }), M = 0; M < 516; M++)
    if (B[M] !== N[M])
      return !0;
}), Hj = function(B) {
  return function(N, M) {
    return B !== void 0 ? +B(N, M) || 0 : M !== M ? -1 : N !== N ? 1 : N === 0 && M === 0 ? 1 / N > 0 && 1 / M < 0 ? 1 : -1 : N > M;
  };
};
Wj("sort", function(N) {
  return N !== void 0 && $j(N), Cb ? vo(this, N) : qj(Uj(this), Hj(N));
}, !Cb || Gj);
var RF = rr, zj = qb, Ab = Vb, Xj = af, Jj = RF.aTypedArray, Yj = RF.exportTypedArrayMethod;
Yj("subarray", function(N, M) {
  var U = Jj(this), re = U.length, ye = Ab(N, re), Ve = Xj(U);
  return new Ve(
    U.buffer,
    U.byteOffset + ye * U.BYTES_PER_ELEMENT,
    zj((M === void 0 ? re : Ab(M, re)) - ye)
  );
});
var Kj = $u, Qj = LD, MF = rr, ID = qu, bb = Gb, _p = Kj.Int8Array, Fb = MF.aTypedArray, Zj = MF.exportTypedArrayMethod, jF = [].toLocaleString, _j = !!_p && ID(function() {
  jF.call(new _p(1));
}), e$ = ID(function() {
  return [1, 2].toLocaleString() != new _p([1, 2]).toLocaleString();
}) || !ID(function() {
  _p.prototype.toLocaleString.call([1, 2]);
});
Zj("toLocaleString", function() {
  return Qj(
    jF,
    _j ? bb(Fb(this)) : Fb(this),
    bb(arguments)
  );
}, e$);
var r$ = rr.exportTypedArrayMethod, t$ = qu, n$ = $u, u$ = Ha, Sb = n$.Uint8Array, a$ = Sb && Sb.prototype || {}, ef = [].toString, i$ = u$([].join);
t$(function() {
  ef.call({});
}) && (ef = function() {
  return i$(this);
});
var o$ = a$.toString != ef;
r$("toString", ef, o$);
var s$ = DL;
s$("asyncIterator");
var c$ = yo.exports;
c$("Uint16", function(B) {
  return function(M, U, re) {
    return B(this, M, U, re);
  };
});
var l$ = yo.exports;
l$("Float32", function(B) {
  return function(M, U, re) {
    return B(this, M, U, re);
  };
});
var p$ = yo.exports;
p$("Float64", function(B) {
  return function(M, U, re) {
    return B(this, M, U, re);
  };
});
var f$ = gL.start, d$ = mL, $F = d$("trimStart") ? function() {
  return f$(this);
} : "".trimStart, h$ = Ga, Tb = $F;
h$({ target: "String", proto: !0, name: "trimStart", forced: "".trimLeft !== Tb }, {
  trimLeft: Tb
});
var D$ = Ga, xb = $F;
D$({ target: "String", proto: !0, name: "trimStart", forced: "".trimStart !== xb }, {
  trimStart: xb
});
var g$ = Ga, m$ = AL, v$ = bL;
g$({ target: "String", proto: !0, forced: v$("anchor") }, {
  anchor: function(N) {
    return m$(this, "a", "name", N);
  }
});
function Do(B) {
  var N = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Do = function(U) {
    if (U === null || !y$(U))
      return U;
    if (typeof U != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof N < "u") {
      if (N.has(U))
        return N.get(U);
      N.set(U, re);
    }
    function re() {
      return Kp(U, arguments, kn(this).constructor);
    }
    return re.prototype = Object.create(U.prototype, { constructor: { value: re, enumerable: !1, writable: !0, configurable: !0 } }), Dc(re, U);
  }, Do(B);
}
function Kp(B, N, M) {
  return VF() ? Kp = Reflect.construct : Kp = function(re, ye, Ve) {
    var De = [null];
    De.push.apply(De, ye);
    var he = Function.bind.apply(re, De), Ge = new he();
    return Ve && Dc(Ge, Ve.prototype), Ge;
  }, Kp.apply(null, arguments);
}
function y$(B) {
  return Function.toString.call(B).indexOf("[native code]") !== -1;
}
function wb(B) {
  return GF(B) || UF(B) || cf(B) || WF();
}
function Wa() {
  return typeof Reflect < "u" && Reflect.get ? Wa = Reflect.get : Wa = function(N, M, U) {
    var re = E$(N, M);
    if (!!re) {
      var ye = Object.getOwnPropertyDescriptor(re, M);
      return ye.get ? ye.get.call(arguments.length < 3 ? N : U) : ye.value;
    }
  }, Wa.apply(this, arguments);
}
function E$(B, N) {
  for (; !Object.prototype.hasOwnProperty.call(B, N) && (B = kn(B), B !== null); )
    ;
  return B;
}
function br(B, N) {
  if (typeof N != "function" && N !== null)
    throw new TypeError("Super expression must either be null or a function");
  B.prototype = Object.create(N && N.prototype, { constructor: { value: B, writable: !0, configurable: !0 } }), Object.defineProperty(B, "prototype", { writable: !1 }), N && Dc(B, N);
}
function Dc(B, N) {
  return Dc = Object.setPrototypeOf || function(U, re) {
    return U.__proto__ = re, U;
  }, Dc(B, N);
}
function Fr(B) {
  var N = VF();
  return function() {
    var U = kn(B), re;
    if (N) {
      var ye = kn(this).constructor;
      re = Reflect.construct(U, arguments, ye);
    } else
      re = U.apply(this, arguments);
    return qF(this, re);
  };
}
function qF(B, N) {
  if (N && (Se(N) === "object" || typeof N == "function"))
    return N;
  if (N !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return C$(B);
}
function C$(B) {
  if (B === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return B;
}
function VF() {
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
function kn(B) {
  return kn = Object.setPrototypeOf ? Object.getPrototypeOf : function(M) {
    return M.__proto__ || Object.getPrototypeOf(M);
  }, kn(B);
}
function le(B, N) {
  var M = typeof Symbol < "u" && B[Symbol.iterator] || B["@@iterator"];
  if (!M) {
    if (Array.isArray(B) || (M = cf(B)) || N && B && typeof B.length == "number") {
      M && (B = M);
      var U = 0, re = function() {
      };
      return { s: re, n: function() {
        return U >= B.length ? { done: !0 } : { done: !1, value: B[U++] };
      }, e: function(Ge) {
        throw Ge;
      }, f: re };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var ye = !0, Ve = !1, De;
  return { s: function() {
    M = M.call(B);
  }, n: function() {
    var Ge = M.next();
    return ye = Ge.done, Ge;
  }, e: function(Ge) {
    Ve = !0, De = Ge;
  }, f: function() {
    try {
      !ye && M.return != null && M.return();
    } finally {
      if (Ve)
        throw De;
    }
  } };
}
function Zn(B, N, M) {
  return N in B ? Object.defineProperty(B, N, { value: M, enumerable: !0, configurable: !0, writable: !0 }) : B[N] = M, B;
}
function _(B) {
  return b$(B) || UF(B) || cf(B) || A$();
}
function A$() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function UF(B) {
  if (typeof Symbol < "u" && B[Symbol.iterator] != null || B["@@iterator"] != null)
    return Array.from(B);
}
function b$(B) {
  if (Array.isArray(B))
    return OD(B);
}
function ke(B, N) {
  return GF(B) || F$(B, N) || cf(B, N) || WF();
}
function WF() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cf(B, N) {
  if (!!B) {
    if (typeof B == "string")
      return OD(B, N);
    var M = Object.prototype.toString.call(B).slice(8, -1);
    if (M === "Object" && B.constructor && (M = B.constructor.name), M === "Map" || M === "Set")
      return Array.from(B);
    if (M === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M))
      return OD(B, N);
  }
}
function OD(B, N) {
  (N == null || N > B.length) && (N = B.length);
  for (var M = 0, U = new Array(N); M < N; M++)
    U[M] = B[M];
  return U;
}
function F$(B, N) {
  var M = B == null ? null : typeof Symbol < "u" && B[Symbol.iterator] || B["@@iterator"];
  if (M != null) {
    var U = [], re = !0, ye = !1, Ve, De;
    try {
      for (M = M.call(B); !(re = (Ve = M.next()).done) && (U.push(Ve.value), !(N && U.length === N)); re = !0)
        ;
    } catch (he) {
      ye = !0, De = he;
    } finally {
      try {
        !re && M.return != null && M.return();
      } finally {
        if (ye)
          throw De;
      }
    }
    return U;
  }
}
function GF(B) {
  if (Array.isArray(B))
    return B;
}
function Se(B) {
  return Se = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(N) {
    return typeof N;
  } : function(N) {
    return N && typeof Symbol == "function" && N.constructor === Symbol && N !== Symbol.prototype ? "symbol" : typeof N;
  }, Se(B);
}
function se(B, N) {
  if (!(B instanceof N))
    throw new TypeError("Cannot call a class as a function");
}
function Bb(B, N) {
  for (var M = 0; M < N.length; M++) {
    var U = N[M];
    U.enumerable = U.enumerable || !1, U.configurable = !0, "value" in U && (U.writable = !0), Object.defineProperty(B, U.key, U);
  }
}
function ce(B, N, M) {
  return N && Bb(B.prototype, N), M && Bb(B, M), Object.defineProperty(B, "prototype", { writable: !1 }), B;
}
var HF = { exports: {} };
(function(B, N) {
  (function(M, U) {
    B.exports = U();
  })(go, function() {
    var M = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof go < "u" ? go : typeof self < "u" ? self : {};
    function U(E) {
      var h = { exports: {} };
      return E(h, h.exports), h.exports;
    }
    var re = U(function(E, h) {
      function g(m) {
        return h.$0 <= m && m <= h.$9;
      }
      /**
      * @license
      * Copyright Google Inc. All Rights Reserved.
      *
      * Use of this source code is governed by an MIT-style license that can be
      * found in the LICENSE file at https://angular.io/license
      */
      Object.defineProperty(h, "__esModule", { value: !0 }), h.$EOF = 0, h.$BSPACE = 8, h.$TAB = 9, h.$LF = 10, h.$VTAB = 11, h.$FF = 12, h.$CR = 13, h.$SPACE = 32, h.$BANG = 33, h.$DQ = 34, h.$HASH = 35, h.$$ = 36, h.$PERCENT = 37, h.$AMPERSAND = 38, h.$SQ = 39, h.$LPAREN = 40, h.$RPAREN = 41, h.$STAR = 42, h.$PLUS = 43, h.$COMMA = 44, h.$MINUS = 45, h.$PERIOD = 46, h.$SLASH = 47, h.$COLON = 58, h.$SEMICOLON = 59, h.$LT = 60, h.$EQ = 61, h.$GT = 62, h.$QUESTION = 63, h.$0 = 48, h.$7 = 55, h.$9 = 57, h.$A = 65, h.$E = 69, h.$F = 70, h.$X = 88, h.$Z = 90, h.$LBRACKET = 91, h.$BACKSLASH = 92, h.$RBRACKET = 93, h.$CARET = 94, h.$_ = 95, h.$a = 97, h.$b = 98, h.$e = 101, h.$f = 102, h.$n = 110, h.$r = 114, h.$t = 116, h.$u = 117, h.$v = 118, h.$x = 120, h.$z = 122, h.$LBRACE = 123, h.$BAR = 124, h.$RBRACE = 125, h.$NBSP = 160, h.$PIPE = 124, h.$TILDA = 126, h.$AT = 64, h.$BT = 96, h.isWhitespace = function(m) {
        return m >= h.$TAB && m <= h.$SPACE || m == h.$NBSP;
      }, h.isDigit = g, h.isAsciiLetter = function(m) {
        return m >= h.$a && m <= h.$z || m >= h.$A && m <= h.$Z;
      }, h.isAsciiHexDigit = function(m) {
        return m >= h.$a && m <= h.$f || m >= h.$A && m <= h.$F || g(m);
      }, h.isNewLine = function(m) {
        return m === h.$LF || m === h.$CR;
      }, h.isOctalDigit = function(m) {
        return h.$0 <= m && m <= h.$7;
      };
    });
    /**
    * @license
    * Copyright Google Inc. All Rights Reserved.
    *
    * Use of this source code is governed by an MIT-style license that can be
    * found in the LICENSE file at https://angular.io/license
    */
    var ye = /* @__PURE__ */ function() {
      function E(h, g, m) {
        se(this, E), this.filePath = h, this.name = g, this.members = m;
      }
      return ce(E, [{ key: "assertNoMembers", value: function() {
        if (this.members.length)
          throw new Error("Illegal state: symbol without members expected, but got ".concat(JSON.stringify(this), "."));
      } }]), E;
    }(), Ve = ye, De = /* @__PURE__ */ function() {
      function E() {
        se(this, E), this.cache = /* @__PURE__ */ new Map();
      }
      return ce(E, [{ key: "get", value: function(g, m, C) {
        var T = (C = C || []).length ? ".".concat(C.join(".")) : "", L = '"'.concat(g, '".').concat(m).concat(T), j = this.cache.get(L);
        return j || (j = new ye(g, m, C), this.cache.set(L, j)), j;
      } }]), E;
    }(), he = Object.defineProperty({ StaticSymbol: Ve, StaticSymbolCache: De }, "__esModule", { value: !0 });
    /**
    * @license
    * Copyright Google Inc. All Rights Reserved.
    *
    * Use of this source code is governed by an MIT-style license that can be
    * found in the LICENSE file at https://angular.io/license
    */
    var Ge = /-+([a-z0-9])/g, Gt = function(h) {
      return h.replace(Ge, function() {
        for (var g = arguments.length, m = new Array(g), C = 0; C < g; C++)
          m[C] = arguments[C];
        return m[1].toUpperCase();
      });
    }, Nn = function(h, g) {
      return bt(h, ":", g);
    }, pn = function(h, g) {
      return bt(h, ".", g);
    };
    function bt(E, h, g) {
      var m = E.indexOf(h);
      return m == -1 ? g : [E.slice(0, m).trim(), E.slice(m + 1).trim()];
    }
    function Ht(E, h, g) {
      return Array.isArray(E) ? h.visitArray(E, g) : Se(m = E) == "object" && m !== null && Object.getPrototypeOf(m) === lf ? h.visitStringMap(E, g) : E == null || typeof E == "string" || typeof E == "number" || typeof E == "boolean" ? h.visitPrimitive(E, g) : h.visitOther(E, g);
      var m;
    }
    var or = Ht, Ye = function(h) {
      return h != null;
    }, dr = function(h) {
      return h === void 0 ? null : h;
    }, Ft = /* @__PURE__ */ function() {
      function E() {
        se(this, E);
      }
      return ce(E, [{ key: "visitArray", value: function(g, m) {
        var C = this;
        return g.map(function(T) {
          return Ht(T, C, m);
        });
      } }, { key: "visitStringMap", value: function(g, m) {
        var C = this, T = {};
        return Object.keys(g).forEach(function(L) {
          T[L] = Ht(g[L], C, m);
        }), T;
      } }, { key: "visitPrimitive", value: function(g, m) {
        return g;
      } }, { key: "visitOther", value: function(g, m) {
        return g;
      } }]), E;
    }(), Pn = { assertSync: function(h) {
      if (tu(h))
        throw new Error("Illegal state: value cannot be a promise");
      return h;
    }, then: function(h, g) {
      return tu(h) ? h.then(g) : g(h);
    }, all: function(h) {
      return h.some(tu) ? Promise.all(h) : h;
    } }, zt = function(h) {
      throw new Error("Internal Error: ".concat(h));
    }, ru = function(h, g) {
      var m = Error(h);
      return m[ft] = !0, g && (m[fn] = g), m;
    }, ft = "ngSyntaxError", fn = "ngParseErrors", Uu = function(h) {
      return h[ft];
    }, mc = function(h) {
      return h[fn] || [];
    }, vc = function(h) {
      return h.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
    }, lf = Object.getPrototypeOf({}), pf = function(h) {
      for (var g = "", m = 0; m < h.length; m++) {
        var C = h.charCodeAt(m);
        if (C >= 55296 && C <= 56319 && h.length > m + 1) {
          var T = h.charCodeAt(m + 1);
          T >= 56320 && T <= 57343 && (m++, C = (C - 55296 << 10) + T - 56320 + 65536);
        }
        C <= 127 ? g += String.fromCharCode(C) : C <= 2047 ? g += String.fromCharCode(C >> 6 & 31 | 192, 63 & C | 128) : C <= 65535 ? g += String.fromCharCode(C >> 12 | 224, C >> 6 & 63 | 128, 63 & C | 128) : C <= 2097151 && (g += String.fromCharCode(C >> 18 & 7 | 240, C >> 12 & 63 | 128, C >> 6 & 63 | 128, 63 & C | 128));
      }
      return g;
    }, ff = function E(h) {
      if (typeof h == "string")
        return h;
      if (h instanceof Array)
        return "[" + h.map(E).join(", ") + "]";
      if (h == null)
        return "" + h;
      if (h.overriddenName)
        return "".concat(h.overriddenName);
      if (h.name)
        return "".concat(h.name);
      if (!h.toString)
        return "object";
      var g = h.toString();
      if (g == null)
        return "" + g;
      var m = g.indexOf(`
`);
      return m === -1 ? g : g.substring(0, m);
    }, df = function(h) {
      return typeof h == "function" && h.hasOwnProperty("__forward_ref__") ? h() : h;
    };
    function tu(E) {
      return !!E && typeof E.then == "function";
    }
    var bo = tu, yc = /* @__PURE__ */ ce(function E(h) {
      se(this, E), this.full = h;
      var g = h.split(".");
      this.major = g[0], this.minor = g[1], this.patch = g.slice(2).join(".");
    }), Ec = typeof window < "u" && window, Cc = typeof self < "u" && typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && self, za = M !== void 0 && M || Ec || Cc, Xa = Object.defineProperty({ dashCaseToCamelCase: Gt, splitAtColon: Nn, splitAtPeriod: pn, visitValue: or, isDefined: Ye, noUndefined: dr, ValueTransformer: Ft, SyncAsync: Pn, error: zt, syntaxError: ru, isSyntaxError: Uu, getParseErrors: mc, escapeRegExp: vc, utf8Encode: pf, stringify: ff, resolveForwardRef: df, isPromise: bo, Version: yc, global: za }, "__esModule", { value: !0 }), Fo = U(function(E, h) {
      /**
      * @license
      * Copyright Google Inc. All Rights Reserved.
      *
      * Use of this source code is governed by an MIT-style license that can be
      * found in the LICENSE file at https://angular.io/license
      */
      Object.defineProperty(h, "__esModule", { value: !0 });
      var g = /^(?:(?:\[([^\]]+)\])|(?:\(([^\)]+)\)))|(\@[-\w]+)$/;
      function m(z) {
        return z.replace(/\W/g, "_");
      }
      h.sanitizeIdentifier = m;
      var C = 0;
      function T(z) {
        if (!z || !z.reference)
          return null;
        var V = z.reference;
        if (V instanceof he.StaticSymbol)
          return V.name;
        if (V.__anonymousType)
          return V.__anonymousType;
        var J = Xa.stringify(V);
        return J.indexOf("(") >= 0 ? (J = "anonymous_".concat(C++), V.__anonymousType = J) : J = m(J), J;
      }
      var L;
      h.identifierName = T, h.identifierModuleUrl = function(z) {
        var V = z.reference;
        return V instanceof he.StaticSymbol ? V.filePath : "./".concat(Xa.stringify(V));
      }, h.viewClassName = function(z, V) {
        return "View_".concat(T({ reference: z }), "_").concat(V);
      }, h.rendererTypeName = function(z) {
        return "RenderType_".concat(T({ reference: z }));
      }, h.hostViewClassName = function(z) {
        return "HostView_".concat(T({ reference: z }));
      }, h.componentFactoryName = function(z) {
        return "".concat(T({ reference: z }), "NgFactory");
      }, function(z) {
        z[z.Pipe = 0] = "Pipe", z[z.Directive = 1] = "Directive", z[z.NgModule = 2] = "NgModule", z[z.Injectable = 3] = "Injectable";
      }(L = h.CompileSummaryKind || (h.CompileSummaryKind = {})), h.tokenName = function(z) {
        return z.value != null ? m(z.value) : T(z.identifier);
      }, h.tokenReference = function(z) {
        return z.identifier != null ? z.identifier.reference : z.value;
      }, h.CompileStylesheetMetadata = /* @__PURE__ */ function() {
        function z() {
          var V = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, J = V.moduleUrl, Ee = V.styles, ee = V.styleUrls;
          se(this, z), this.moduleUrl = J || null, this.styles = Q(Ee), this.styleUrls = Q(ee);
        }
        return ce(z);
      }(), h.CompileTemplateMetadata = /* @__PURE__ */ function() {
        function z(V) {
          var J = V.encapsulation, Ee = V.template, ee = V.templateUrl, ge = V.htmlAst, me = V.styles, xe = V.styleUrls, Be = V.externalStylesheets, G = V.animations, Y = V.ngContentSelectors, P = V.interpolation, W = V.isInline, te = V.preserveWhitespaces;
          if (se(this, z), this.encapsulation = J, this.template = Ee, this.templateUrl = ee, this.htmlAst = ge, this.styles = Q(me), this.styleUrls = Q(xe), this.externalStylesheets = Q(Be), this.animations = G ? pe(G) : [], this.ngContentSelectors = Y || [], P && P.length != 2)
            throw new Error("'interpolation' should have a start and an end symbol.");
          this.interpolation = P, this.isInline = W, this.preserveWhitespaces = te;
        }
        return ce(z, [{ key: "toSummary", value: function() {
          return { ngContentSelectors: this.ngContentSelectors, encapsulation: this.encapsulation, styles: this.styles, animations: this.animations };
        } }]), z;
      }();
      var j = /* @__PURE__ */ function() {
        function z(V) {
          var J = V.isHost, Ee = V.type, ee = V.isComponent, ge = V.selector, me = V.exportAs, xe = V.changeDetection, Be = V.inputs, G = V.outputs, Y = V.hostListeners, P = V.hostProperties, W = V.hostAttributes, te = V.providers, ie = V.viewProviders, Ie = V.queries, je = V.guards, Xe = V.viewQueries, Sr = V.entryComponents, gr = V.template, Or = V.componentViewType, ot = V.rendererType, Nt = V.componentFactory;
          se(this, z), this.isHost = !!J, this.type = Ee, this.isComponent = ee, this.selector = ge, this.exportAs = me, this.changeDetection = xe, this.inputs = Be, this.outputs = G, this.hostListeners = Y, this.hostProperties = P, this.hostAttributes = W, this.providers = Q(te), this.viewProviders = Q(ie), this.queries = Q(Ie), this.guards = je, this.viewQueries = Q(Xe), this.entryComponents = Q(Sr), this.template = gr, this.componentViewType = Or, this.rendererType = ot, this.componentFactory = Nt;
        }
        return ce(z, [{ key: "toSummary", value: function() {
          return { summaryKind: L.Directive, type: this.type, isComponent: this.isComponent, selector: this.selector, exportAs: this.exportAs, inputs: this.inputs, outputs: this.outputs, hostListeners: this.hostListeners, hostProperties: this.hostProperties, hostAttributes: this.hostAttributes, providers: this.providers, viewProviders: this.viewProviders, queries: this.queries, guards: this.guards, viewQueries: this.viewQueries, entryComponents: this.entryComponents, changeDetection: this.changeDetection, template: this.template && this.template.toSummary(), componentViewType: this.componentViewType, rendererType: this.rendererType, componentFactory: this.componentFactory };
        } }], [{ key: "create", value: function(J) {
          var Ee = J.isHost, ee = J.type, ge = J.isComponent, me = J.selector, xe = J.exportAs, Be = J.changeDetection, G = J.inputs, Y = J.outputs, P = J.host, W = J.providers, te = J.viewProviders, ie = J.queries, Ie = J.guards, je = J.viewQueries, Xe = J.entryComponents, Sr = J.template, gr = J.componentViewType, Or = J.rendererType, ot = J.componentFactory, Nt = {}, dt = {}, vn = {};
          P != null && Object.keys(P).forEach(function(Lr) {
            var Tr = P[Lr], Ze = Lr.match(g);
            Ze === null ? vn[Lr] = Tr : Ze[1] != null ? dt[Ze[1]] = Tr : Ze[2] != null && (Nt[Ze[2]] = Tr);
          });
          var gu = {};
          G != null && G.forEach(function(Lr) {
            var Tr = Xa.splitAtColon(Lr, [Lr, Lr]);
            gu[Tr[0]] = Tr[1];
          });
          var mu = {};
          return Y != null && Y.forEach(function(Lr) {
            var Tr = Xa.splitAtColon(Lr, [Lr, Lr]);
            mu[Tr[0]] = Tr[1];
          }), new z({ isHost: Ee, type: ee, isComponent: !!ge, selector: me, exportAs: xe, changeDetection: Be, inputs: gu, outputs: mu, hostListeners: Nt, hostProperties: dt, hostAttributes: vn, providers: W, viewProviders: te, queries: ie, guards: Ie, viewQueries: je, entryComponents: Xe, template: Sr, componentViewType: gr, rendererType: Or, componentFactory: ot });
        } }]), z;
      }();
      h.CompileDirectiveMetadata = j, h.CompilePipeMetadata = /* @__PURE__ */ function() {
        function z(V) {
          var J = V.type, Ee = V.name, ee = V.pure;
          se(this, z), this.type = J, this.name = Ee, this.pure = !!ee;
        }
        return ce(z, [{ key: "toSummary", value: function() {
          return { summaryKind: L.Pipe, type: this.type, name: this.name, pure: this.pure };
        } }]), z;
      }(), h.CompileShallowModuleMetadata = /* @__PURE__ */ function() {
        function z() {
          se(this, z);
        }
        return ce(z);
      }(), h.CompileNgModuleMetadata = /* @__PURE__ */ function() {
        function z(V) {
          var J = V.type, Ee = V.providers, ee = V.declaredDirectives, ge = V.exportedDirectives, me = V.declaredPipes, xe = V.exportedPipes, Be = V.entryComponents, G = V.bootstrapComponents, Y = V.importedModules, P = V.exportedModules, W = V.schemas, te = V.transitiveModule, ie = V.id;
          se(this, z), this.type = J || null, this.declaredDirectives = Q(ee), this.exportedDirectives = Q(ge), this.declaredPipes = Q(me), this.exportedPipes = Q(xe), this.providers = Q(Ee), this.entryComponents = Q(Be), this.bootstrapComponents = Q(G), this.importedModules = Q(Y), this.exportedModules = Q(P), this.schemas = Q(W), this.id = ie || null, this.transitiveModule = te || null;
        }
        return ce(z, [{ key: "toSummary", value: function() {
          var J = this.transitiveModule;
          return { summaryKind: L.NgModule, type: this.type, entryComponents: J.entryComponents, providers: J.providers, modules: J.modules, exportedDirectives: J.exportedDirectives, exportedPipes: J.exportedPipes };
        } }]), z;
      }();
      function Q(z) {
        return z || [];
      }
      h.TransitiveCompileNgModuleMetadata = /* @__PURE__ */ function() {
        function z() {
          se(this, z), this.directivesSet = /* @__PURE__ */ new Set(), this.directives = [], this.exportedDirectivesSet = /* @__PURE__ */ new Set(), this.exportedDirectives = [], this.pipesSet = /* @__PURE__ */ new Set(), this.pipes = [], this.exportedPipesSet = /* @__PURE__ */ new Set(), this.exportedPipes = [], this.modulesSet = /* @__PURE__ */ new Set(), this.modules = [], this.entryComponentsSet = /* @__PURE__ */ new Set(), this.entryComponents = [], this.providers = [];
        }
        return ce(z, [{ key: "addProvider", value: function(J, Ee) {
          this.providers.push({ provider: J, module: Ee });
        } }, { key: "addDirective", value: function(J) {
          this.directivesSet.has(J.reference) || (this.directivesSet.add(J.reference), this.directives.push(J));
        } }, { key: "addExportedDirective", value: function(J) {
          this.exportedDirectivesSet.has(J.reference) || (this.exportedDirectivesSet.add(J.reference), this.exportedDirectives.push(J));
        } }, { key: "addPipe", value: function(J) {
          this.pipesSet.has(J.reference) || (this.pipesSet.add(J.reference), this.pipes.push(J));
        } }, { key: "addExportedPipe", value: function(J) {
          this.exportedPipesSet.has(J.reference) || (this.exportedPipesSet.add(J.reference), this.exportedPipes.push(J));
        } }, { key: "addModule", value: function(J) {
          this.modulesSet.has(J.reference) || (this.modulesSet.add(J.reference), this.modules.push(J));
        } }, { key: "addEntryComponent", value: function(J) {
          this.entryComponentsSet.has(J.componentType) || (this.entryComponentsSet.add(J.componentType), this.entryComponents.push(J));
        } }]), z;
      }();
      function pe(z) {
        return z.reduce(function(V, J) {
          var Ee = Array.isArray(J) ? pe(J) : J;
          return V.concat(Ee);
        }, []);
      }
      function de(z) {
        return z.replace(/(\w+:\/\/[\w:-]+)?(\/+)?/, "ng:///");
      }
      h.ProviderMeta = /* @__PURE__ */ function() {
        function z(V, J) {
          var Ee = J.useClass, ee = J.useValue, ge = J.useExisting, me = J.useFactory, xe = J.deps, Be = J.multi;
          se(this, z), this.token = V, this.useClass = Ee || null, this.useValue = ee, this.useExisting = ge, this.useFactory = me || null, this.dependencies = xe || null, this.multi = !!Be;
        }
        return ce(z);
      }(), h.flatten = pe, h.templateSourceUrl = function(z, V, J) {
        var Ee;
        return Ee = J.isInline ? V.type.reference instanceof he.StaticSymbol ? "".concat(V.type.reference.filePath, ".").concat(V.type.reference.name, ".html") : "".concat(T(z), "/").concat(T(V.type), ".html") : J.templateUrl, V.type.reference instanceof he.StaticSymbol ? Ee : de(Ee);
      }, h.sharedStylesheetJitUrl = function(z, V) {
        var J = z.moduleUrl.split(/\/\\/g), Ee = J[J.length - 1];
        return de("css/".concat(V).concat(Ee, ".ngstyle.js"));
      }, h.ngModuleJitUrl = function(z) {
        return de("".concat(T(z.type), "/module.ngfactory.js"));
      }, h.templateJitUrl = function(z, V) {
        return de("".concat(T(z), "/").concat(T(V.type), ".ngfactory.js"));
      };
    }), ar = U(function(E, h) {
      Object.defineProperty(h, "__esModule", { value: !0 });
      /**
      * @license
      * Copyright Google Inc. All Rights Reserved.
      *
      * Use of this source code is governed by an MIT-style license that can be
      * found in the LICENSE file at https://angular.io/license
      */
      var g = /* @__PURE__ */ function() {
        function L(j, Q, pe, de) {
          se(this, L), this.file = j, this.offset = Q, this.line = pe, this.col = de;
        }
        return ce(L, [{ key: "toString", value: function() {
          return this.offset != null ? "".concat(this.file.url, "@").concat(this.line, ":").concat(this.col) : this.file.url;
        } }, { key: "moveBy", value: function(Q) {
          for (var pe = this.file.content, de = pe.length, z = this.offset, V = this.line, J = this.col; z > 0 && Q < 0; )
            if (z--, Q++, pe.charCodeAt(z) == re.$LF) {
              V--;
              var Ee = pe.substr(0, z - 1).lastIndexOf(String.fromCharCode(re.$LF));
              J = Ee > 0 ? z - Ee : z;
            } else
              J--;
          for (; z < de && Q > 0; ) {
            var ee = pe.charCodeAt(z);
            z++, Q--, ee == re.$LF ? (V++, J = 0) : J++;
          }
          return new L(this.file, z, V, J);
        } }, { key: "getContext", value: function(Q, pe) {
          var de = this.file.content, z = this.offset;
          if (z != null) {
            z > de.length - 1 && (z = de.length - 1);
            for (var V = z, J = 0, Ee = 0; J < Q && z > 0 && (z--, J++, de[z] != `
` || ++Ee != pe); )
              ;
            for (J = 0, Ee = 0; J < Q && V < de.length - 1 && (V++, J++, de[V] != `
` || ++Ee != pe); )
              ;
            return { before: de.substring(z, this.offset), after: de.substring(this.offset, V + 1) };
          }
          return null;
        } }]), L;
      }();
      h.ParseLocation = g;
      var m = /* @__PURE__ */ ce(function L(j, Q) {
        se(this, L), this.content = j, this.url = Q;
      });
      h.ParseSourceFile = m;
      var C = /* @__PURE__ */ function() {
        function L(j, Q) {
          var pe = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
          se(this, L), this.start = j, this.end = Q, this.details = pe;
        }
        return ce(L, [{ key: "toString", value: function() {
          return this.start.file.content.substring(this.start.offset, this.end.offset);
        } }]), L;
      }(), T;
      h.ParseSourceSpan = C, h.EMPTY_PARSE_LOCATION = new g(new m("", ""), 0, 0, 0), h.EMPTY_SOURCE_SPAN = new C(h.EMPTY_PARSE_LOCATION, h.EMPTY_PARSE_LOCATION), function(L) {
        L[L.WARNING = 0] = "WARNING", L[L.ERROR = 1] = "ERROR";
      }(T = h.ParseErrorLevel || (h.ParseErrorLevel = {})), h.ParseError = /* @__PURE__ */ function() {
        function L(j, Q) {
          var pe = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : T.ERROR;
          se(this, L), this.span = j, this.msg = Q, this.level = pe;
        }
        return ce(L, [{ key: "contextualMessage", value: function() {
          var Q = this.span.start.getContext(100, 3);
          return Q ? "".concat(this.msg, ' ("').concat(Q.before, "[").concat(T[this.level], " ->]").concat(Q.after, '")') : this.msg;
        } }, { key: "toString", value: function() {
          var Q = this.span.details ? ", ".concat(this.span.details) : "";
          return "".concat(this.contextualMessage(), ": ").concat(this.span.start).concat(Q);
        } }]), L;
      }(), h.typeSourceSpan = function(L, j) {
        var Q = Fo.identifierModuleUrl(j), pe = Q != null ? "in ".concat(L, " ").concat(Fo.identifierName(j), " in ").concat(Q) : "in ".concat(L, " ").concat(Fo.identifierName(j)), de = new m("", pe);
        return new C(new g(de, -1, -1, -1), new g(de, -1, -1, -1));
      }, h.r3JitTypeSourceSpan = function(L, j, Q) {
        var pe = "in ".concat(L, " ").concat(j, " in ").concat(Q), de = new m("", pe);
        return new C(new g(de, -1, -1, -1), new g(de, -1, -1, -1));
      };
    }), So = new RegExp("^(?<startDelimiter>-{3}|\\+{3})(?<language>[^\\n]*)\\n(?:|(?<value>[\\S\\s]*?)\\n)(?<endDelimiter>\\k<startDelimiter>|\\.{3})[^\\S\\n]*(?:\\n|$)"), hf = function(h) {
      var g = h.match(So);
      if (!g)
        return { content: h };
      var m = g.groups, C = m.startDelimiter, T = m.language, L = m.value, j = L === void 0 ? "" : L, Q = m.endDelimiter, pe = T.trim() || "yaml";
      if (C === "+++" && (pe = "toml"), pe !== "yaml" && C !== Q)
        return { content: h };
      var de = ke(g, 1), z = de[0];
      return { frontMatter: { type: "front-matter", lang: pe, value: j, startDelimiter: C, endDelimiter: Q, raw: z.replace(/\n$/, "") }, content: z.replace(/[^\n]/g, " ") + h.slice(z.length) };
    }, To = function(h) {
      return h[h.length - 1];
    }, nu = function(h, g) {
      var m = new SyntaxError(h + " (" + g.start.line + ":" + g.start.column + ")");
      return m.loc = g, m;
    }, xo = function(h) {
      return typeof h == "string" ? h.replace(function() {
        var g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, m = g.onlyFirst, C = m === void 0 ? !1 : m, T = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
        return new RegExp(T, C ? void 0 : "g");
      }(), "") : h;
    }, wo = function(h) {
      return !Number.isNaN(h) && h >= 4352 && (h <= 4447 || h === 9001 || h === 9002 || 11904 <= h && h <= 12871 && h !== 12351 || 12880 <= h && h <= 19903 || 19968 <= h && h <= 42182 || 43360 <= h && h <= 43388 || 44032 <= h && h <= 55203 || 63744 <= h && h <= 64255 || 65040 <= h && h <= 65049 || 65072 <= h && h <= 65131 || 65281 <= h && h <= 65376 || 65504 <= h && h <= 65510 || 110592 <= h && h <= 110593 || 127488 <= h && h <= 127569 || 131072 <= h && h <= 262141);
    }, Bo = wo, Ac = wo;
    Bo.default = Ac;
    var Wu = function(h) {
      if (typeof h != "string" || h.length === 0 || (h = xo(h)).length === 0)
        return 0;
      h = h.replace(/\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g, "  ");
      for (var g = 0, m = 0; m < h.length; m++) {
        var C = h.codePointAt(m);
        C <= 31 || C >= 127 && C <= 159 || C >= 768 && C <= 879 || (C > 65535 && m++, g += Bo(C) ? 2 : 1);
      }
      return g;
    }, ko = Wu, bc = Wu;
    ko.default = bc;
    var Fc = function(h) {
      if (typeof h != "string")
        throw new TypeError("Expected a string");
      return h.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
    };
    function uu(E, h) {
      return h || (h = E.slice(0)), Object.freeze(Object.defineProperties(E, { raw: { value: Object.freeze(h) } }));
    }
    var Ja = function(h) {
      for (var g = -1, m = h == null ? 0 : h.length, C = {}; ++g < m; ) {
        var T = h[g];
        C[T[0]] = T[1];
      }
      return C;
    }, In = In !== void 0 ? In : typeof self < "u" ? self : typeof window < "u" ? window : {};
    function No() {
      throw new Error("setTimeout has not been defined");
    }
    function Po() {
      throw new Error("clearTimeout has not been defined");
    }
    var Vr = No, Xt = Po;
    function Io(E) {
      if (Vr === setTimeout)
        return setTimeout(E, 0);
      if ((Vr === No || !Vr) && setTimeout)
        return Vr = setTimeout, setTimeout(E, 0);
      try {
        return Vr(E, 0);
      } catch {
        try {
          return Vr.call(null, E, 0);
        } catch {
          return Vr.call(this, E, 0);
        }
      }
    }
    typeof In.setTimeout == "function" && (Vr = setTimeout), typeof In.clearTimeout == "function" && (Xt = clearTimeout);
    var Jt, Yt = [], au = !1, Ya = -1;
    function Df() {
      au && Jt && (au = !1, Jt.length ? Yt = Jt.concat(Yt) : Ya = -1, Yt.length && Sc());
    }
    function Sc() {
      if (!au) {
        var E = Io(Df);
        au = !0;
        for (var h = Yt.length; h; ) {
          for (Jt = Yt, Yt = []; ++Ya < h; )
            Jt && Jt[Ya].run();
          Ya = -1, h = Yt.length;
        }
        Jt = null, au = !1, function(g) {
          if (Xt === clearTimeout)
            return clearTimeout(g);
          if ((Xt === Po || !Xt) && clearTimeout)
            return Xt = clearTimeout, clearTimeout(g);
          try {
            Xt(g);
          } catch {
            try {
              return Xt.call(null, g);
            } catch {
              return Xt.call(this, g);
            }
          }
        }(E);
      }
    }
    function Tc(E, h) {
      this.fun = E, this.array = h;
    }
    Tc.prototype.run = function() {
      this.fun.apply(null, this.array);
    };
    function On() {
    }
    var Ka = On, xc = On, iu = On, wc = On, Oo = On, Bc = On, kc = On, ou = In.performance || {}, gf = ou.now || ou.mozNow || ou.msNow || ou.oNow || ou.webkitNow || function() {
      return new Date().getTime();
    }, Gu = new Date(), Qa = { nextTick: function(h) {
      var g = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var m = 1; m < arguments.length; m++)
          g[m - 1] = arguments[m];
      Yt.push(new Tc(h, g)), Yt.length !== 1 || au || Io(Sc);
    }, title: "browser", browser: !0, env: {}, argv: [], version: "", versions: {}, on: Ka, addListener: xc, once: iu, off: wc, removeListener: Oo, removeAllListeners: Bc, emit: kc, binding: function(h) {
      throw new Error("process.binding is not supported");
    }, cwd: function() {
      return "/";
    }, chdir: function(h) {
      throw new Error("process.chdir is not supported");
    }, umask: function() {
      return 0;
    }, hrtime: function(h) {
      var g = 1e-3 * gf.call(ou), m = Math.floor(g), C = Math.floor(g % 1 * 1e9);
      return h && (m -= h[0], (C -= h[1]) < 0 && (m--, C += 1e9)), [m, C];
    }, platform: "browser", release: {}, config: {}, uptime: function() {
      return (new Date() - Gu) / 1e3;
    } }, su = Se(Qa) == "object" && Qa.env && Qa.env.NODE_DEBUG && /\bsemver\b/i.test(Qa.env.NODE_DEBUG) ? function() {
      for (var E, h = arguments.length, g = new Array(h), m = 0; m < h; m++)
        g[m] = arguments[m];
      return (E = console).error.apply(E, ["SEMVER"].concat(g));
    } : function() {
    }, Za = { SEMVER_SPEC_VERSION: "2.0.0", MAX_LENGTH: 256, MAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER || 9007199254740991, MAX_SAFE_COMPONENT_LENGTH: 16 }, Nc = U(function(E, h) {
      var g = Za.MAX_SAFE_COMPONENT_LENGTH, m = (h = E.exports = {}).re = [], C = h.src = [], T = h.t = {}, L = 0, j = function(pe, de, z) {
        var V = L++;
        su(V, de), T[pe] = V, C[V] = de, m[V] = new RegExp(de, z ? "g" : void 0);
      };
      j("NUMERICIDENTIFIER", "0|[1-9]\\d*"), j("NUMERICIDENTIFIERLOOSE", "[0-9]+"), j("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"), j("MAINVERSION", "(".concat(C[T.NUMERICIDENTIFIER], ")\\.") + "(".concat(C[T.NUMERICIDENTIFIER], ")\\.") + "(".concat(C[T.NUMERICIDENTIFIER], ")")), j("MAINVERSIONLOOSE", "(".concat(C[T.NUMERICIDENTIFIERLOOSE], ")\\.") + "(".concat(C[T.NUMERICIDENTIFIERLOOSE], ")\\.") + "(".concat(C[T.NUMERICIDENTIFIERLOOSE], ")")), j("PRERELEASEIDENTIFIER", "(?:".concat(C[T.NUMERICIDENTIFIER], "|").concat(C[T.NONNUMERICIDENTIFIER], ")")), j("PRERELEASEIDENTIFIERLOOSE", "(?:".concat(C[T.NUMERICIDENTIFIERLOOSE], "|").concat(C[T.NONNUMERICIDENTIFIER], ")")), j("PRERELEASE", "(?:-(".concat(C[T.PRERELEASEIDENTIFIER], "(?:\\.").concat(C[T.PRERELEASEIDENTIFIER], ")*))")), j("PRERELEASELOOSE", "(?:-?(".concat(C[T.PRERELEASEIDENTIFIERLOOSE], "(?:\\.").concat(C[T.PRERELEASEIDENTIFIERLOOSE], ")*))")), j("BUILDIDENTIFIER", "[0-9A-Za-z-]+"), j("BUILD", "(?:\\+(".concat(C[T.BUILDIDENTIFIER], "(?:\\.").concat(C[T.BUILDIDENTIFIER], ")*))")), j("FULLPLAIN", "v?".concat(C[T.MAINVERSION]).concat(C[T.PRERELEASE], "?").concat(C[T.BUILD], "?")), j("FULL", "^".concat(C[T.FULLPLAIN], "$")), j("LOOSEPLAIN", "[v=\\s]*".concat(C[T.MAINVERSIONLOOSE]).concat(C[T.PRERELEASELOOSE], "?").concat(C[T.BUILD], "?")), j("LOOSE", "^".concat(C[T.LOOSEPLAIN], "$")), j("GTLT", "((?:<|>)?=?)"), j("XRANGEIDENTIFIERLOOSE", "".concat(C[T.NUMERICIDENTIFIERLOOSE], "|x|X|\\*")), j("XRANGEIDENTIFIER", "".concat(C[T.NUMERICIDENTIFIER], "|x|X|\\*")), j("XRANGEPLAIN", "[v=\\s]*(".concat(C[T.XRANGEIDENTIFIER], ")") + "(?:\\.(".concat(C[T.XRANGEIDENTIFIER], ")") + "(?:\\.(".concat(C[T.XRANGEIDENTIFIER], ")") + "(?:".concat(C[T.PRERELEASE], ")?").concat(C[T.BUILD], "?") + ")?)?"), j("XRANGEPLAINLOOSE", "[v=\\s]*(".concat(C[T.XRANGEIDENTIFIERLOOSE], ")") + "(?:\\.(".concat(C[T.XRANGEIDENTIFIERLOOSE], ")") + "(?:\\.(".concat(C[T.XRANGEIDENTIFIERLOOSE], ")") + "(?:".concat(C[T.PRERELEASELOOSE], ")?").concat(C[T.BUILD], "?") + ")?)?"), j("XRANGE", "^".concat(C[T.GTLT], "\\s*").concat(C[T.XRANGEPLAIN], "$")), j("XRANGELOOSE", "^".concat(C[T.GTLT], "\\s*").concat(C[T.XRANGEPLAINLOOSE], "$")), j("COERCE", "".concat("(^|[^\\d])(\\d{1,").concat(g, "})") + "(?:\\.(\\d{1,".concat(g, "}))?") + "(?:\\.(\\d{1,".concat(g, "}))?") + "(?:$|[^\\d])"), j("COERCERTL", C[T.COERCE], !0), j("LONETILDE", "(?:~>?)"), j("TILDETRIM", "(\\s*)".concat(C[T.LONETILDE], "\\s+"), !0), h.tildeTrimReplace = "$1~", j("TILDE", "^".concat(C[T.LONETILDE]).concat(C[T.XRANGEPLAIN], "$")), j("TILDELOOSE", "^".concat(C[T.LONETILDE]).concat(C[T.XRANGEPLAINLOOSE], "$")), j("LONECARET", "(?:\\^)"), j("CARETTRIM", "(\\s*)".concat(C[T.LONECARET], "\\s+"), !0), h.caretTrimReplace = "$1^", j("CARET", "^".concat(C[T.LONECARET]).concat(C[T.XRANGEPLAIN], "$")), j("CARETLOOSE", "^".concat(C[T.LONECARET]).concat(C[T.XRANGEPLAINLOOSE], "$")), j("COMPARATORLOOSE", "^".concat(C[T.GTLT], "\\s*(").concat(C[T.LOOSEPLAIN], ")$|^$")), j("COMPARATOR", "^".concat(C[T.GTLT], "\\s*(").concat(C[T.FULLPLAIN], ")$|^$")), j("COMPARATORTRIM", "(\\s*)".concat(C[T.GTLT], "\\s*(").concat(C[T.LOOSEPLAIN], "|").concat(C[T.XRANGEPLAIN], ")"), !0), h.comparatorTrimReplace = "$1$2$3", j("HYPHENRANGE", "^\\s*(".concat(C[T.XRANGEPLAIN], ")") + "\\s+-\\s+" + "(".concat(C[T.XRANGEPLAIN], ")") + "\\s*$"), j("HYPHENRANGELOOSE", "^\\s*(".concat(C[T.XRANGEPLAINLOOSE], ")") + "\\s+-\\s+" + "(".concat(C[T.XRANGEPLAINLOOSE], ")") + "\\s*$"), j("STAR", "(<|>)?=?\\s*\\*"), j("GTE0", "^\\s*>=\\s*0.0.0\\s*$"), j("GTE0PRE", "^\\s*>=\\s*0.0.0-0\\s*$");
    }), Pc = ["includePrerelease", "loose", "rtl"], Ic = function(h) {
      return h ? Se(h) != "object" ? { loose: !0 } : Pc.filter(function(g) {
        return h[g];
      }).reduce(function(g, m) {
        return g[m] = !0, g;
      }, {}) : {};
    }, Oc = /^[0-9]+$/, Lo = function(h, g) {
      var m = Oc.test(h), C = Oc.test(g);
      return m && C && (h = +h, g = +g), h === g ? 0 : m && !C ? -1 : C && !m ? 1 : h < g ? -1 : 1;
    }, sr = { compareIdentifiers: Lo, rcompareIdentifiers: function(h, g) {
      return Lo(g, h);
    } }, _a = Za.MAX_LENGTH, Pr = Za.MAX_SAFE_INTEGER, Ro = Nc.re, Mo = Nc.t, at = sr.compareIdentifiers, dn = /* @__PURE__ */ function() {
      function E(h, g) {
        if (se(this, E), g = Ic(g), h instanceof E) {
          if (h.loose === !!g.loose && h.includePrerelease === !!g.includePrerelease)
            return h;
          h = h.version;
        } else if (typeof h != "string")
          throw new TypeError("Invalid Version: ".concat(h));
        if (h.length > _a)
          throw new TypeError("version is longer than ".concat(_a, " characters"));
        su("SemVer", h, g), this.options = g, this.loose = !!g.loose, this.includePrerelease = !!g.includePrerelease;
        var m = h.trim().match(g.loose ? Ro[Mo.LOOSE] : Ro[Mo.FULL]);
        if (!m)
          throw new TypeError("Invalid Version: ".concat(h));
        if (this.raw = h, this.major = +m[1], this.minor = +m[2], this.patch = +m[3], this.major > Pr || this.major < 0)
          throw new TypeError("Invalid major version");
        if (this.minor > Pr || this.minor < 0)
          throw new TypeError("Invalid minor version");
        if (this.patch > Pr || this.patch < 0)
          throw new TypeError("Invalid patch version");
        m[4] ? this.prerelease = m[4].split(".").map(function(C) {
          if (/^[0-9]+$/.test(C)) {
            var T = +C;
            if (T >= 0 && T < Pr)
              return T;
          }
          return C;
        }) : this.prerelease = [], this.build = m[5] ? m[5].split(".") : [], this.format();
      }
      return ce(E, [{ key: "format", value: function() {
        return this.version = "".concat(this.major, ".").concat(this.minor, ".").concat(this.patch), this.prerelease.length && (this.version += "-".concat(this.prerelease.join("."))), this.version;
      } }, { key: "toString", value: function() {
        return this.version;
      } }, { key: "compare", value: function(g) {
        if (su("SemVer.compare", this.version, this.options, g), !(g instanceof E)) {
          if (typeof g == "string" && g === this.version)
            return 0;
          g = new E(g, this.options);
        }
        return g.version === this.version ? 0 : this.compareMain(g) || this.comparePre(g);
      } }, { key: "compareMain", value: function(g) {
        return g instanceof E || (g = new E(g, this.options)), at(this.major, g.major) || at(this.minor, g.minor) || at(this.patch, g.patch);
      } }, { key: "comparePre", value: function(g) {
        if (g instanceof E || (g = new E(g, this.options)), this.prerelease.length && !g.prerelease.length)
          return -1;
        if (!this.prerelease.length && g.prerelease.length)
          return 1;
        if (!this.prerelease.length && !g.prerelease.length)
          return 0;
        var m = 0;
        do {
          var C = this.prerelease[m], T = g.prerelease[m];
          if (su("prerelease compare", m, C, T), C === void 0 && T === void 0)
            return 0;
          if (T === void 0)
            return 1;
          if (C === void 0)
            return -1;
          if (C !== T)
            return at(C, T);
        } while (++m);
      } }, { key: "compareBuild", value: function(g) {
        g instanceof E || (g = new E(g, this.options));
        var m = 0;
        do {
          var C = this.build[m], T = g.build[m];
          if (su("prerelease compare", m, C, T), C === void 0 && T === void 0)
            return 0;
          if (T === void 0)
            return 1;
          if (C === void 0)
            return -1;
          if (C !== T)
            return at(C, T);
        } while (++m);
      } }, { key: "inc", value: function(g, m) {
        switch (g) {
          case "premajor":
            this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", m);
            break;
          case "preminor":
            this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", m);
            break;
          case "prepatch":
            this.prerelease.length = 0, this.inc("patch", m), this.inc("pre", m);
            break;
          case "prerelease":
            this.prerelease.length === 0 && this.inc("patch", m), this.inc("pre", m);
            break;
          case "major":
            this.minor === 0 && this.patch === 0 && this.prerelease.length !== 0 || this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
            break;
          case "minor":
            this.patch === 0 && this.prerelease.length !== 0 || this.minor++, this.patch = 0, this.prerelease = [];
            break;
          case "patch":
            this.prerelease.length === 0 && this.patch++, this.prerelease = [];
            break;
          case "pre":
            if (this.prerelease.length === 0)
              this.prerelease = [0];
            else {
              for (var C = this.prerelease.length; --C >= 0; )
                typeof this.prerelease[C] == "number" && (this.prerelease[C]++, C = -2);
              C === -1 && this.prerelease.push(0);
            }
            m && (this.prerelease[0] === m ? isNaN(this.prerelease[1]) && (this.prerelease = [m, 0]) : this.prerelease = [m, 0]);
            break;
          default:
            throw new Error("invalid increment argument: ".concat(g));
        }
        return this.format(), this.raw = this.version, this;
      } }]), E;
    }(), jo = dn, Kt = function(h, g, m) {
      return new jo(h, m).compare(new jo(g, m));
    }, Qt = function(h, g, m) {
      return Kt(h, g, m) < 0;
    }, Ln, Hu, Lc, $o, qo, hn, mf = function(h, g, m) {
      return Kt(h, g, m) >= 0;
    }, vf = "2.3.0", yf = U(function(E, h) {
      function g() {
        for (var ge = [], me = 0; me < arguments.length; me++)
          ge[me] = arguments[me];
      }
      function m() {
        return typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : { add: g, delete: g, get: g, set: g, has: function(me) {
          return !1;
        } };
      }
      Object.defineProperty(h, "__esModule", { value: !0 }), h.outdent = void 0;
      var C = Object.prototype.hasOwnProperty, T = function(me, xe) {
        return C.call(me, xe);
      };
      function L(ge, me) {
        for (var xe in me)
          T(me, xe) && (ge[xe] = me[xe]);
        return ge;
      }
      var j = /^[ \t]*(?:\r\n|\r|\n)/, Q = /(?:\r\n|\r|\n)[ \t]*$/, pe = /^(?:[\r\n]|$)/, de = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/, z = /^[ \t]*[\r\n][ \t\r\n]*$/;
      function V(ge, me, xe) {
        var Be = 0, G = ge[0].match(de);
        G && (Be = G[1].length);
        var Y = new RegExp("(\\r\\n|\\r|\\n).{0," + Be + "}", "g");
        me && (ge = ge.slice(1));
        var P = xe.newline, W = xe.trimLeadingNewline, te = xe.trimTrailingNewline, ie = typeof P == "string", Ie = ge.length;
        return ge.map(function(je, Xe) {
          return je = je.replace(Y, "$1"), Xe === 0 && W && (je = je.replace(j, "")), Xe === Ie - 1 && te && (je = je.replace(Q, "")), ie && (je = je.replace(/\r\n|\n|\r/g, function(Sr) {
            return P;
          })), je;
        });
      }
      function J(ge, me) {
        for (var xe = "", Be = 0, G = ge.length; Be < G; Be++)
          xe += ge[Be], Be < G - 1 && (xe += me[Be]);
        return xe;
      }
      function Ee(ge) {
        return T(ge, "raw") && T(ge, "length");
      }
      var ee = function ge(me) {
        var xe = m(), Be = m();
        return L(function G(Y) {
          for (var P = [], W = 1; W < arguments.length; W++)
            P[W - 1] = arguments[W];
          if (Ee(Y)) {
            var te = Y, ie = (P[0] === G || P[0] === ee) && z.test(te[0]) && pe.test(te[1]), Ie = ie ? Be : xe, je = Ie.get(te);
            if (je || (je = V(te, ie, me), Ie.set(te, je)), P.length === 0)
              return je[0];
            var Xe = J(je, ie ? P.slice(1) : P);
            return Xe;
          }
          return ge(L(L({}, me), Y || {}));
        }, { string: function(Y) {
          return V([Y], !1, me)[0];
        } });
      }({ trimLeadingNewline: !0, trimTrailingNewline: !0 });
      h.outdent = ee, h.default = ee;
      try {
        E.exports = ee, Object.defineProperty(ee, "__esModule", { value: !0 }), ee.default = ee, ee.outdent = ee;
      } catch {
      }
    }), cu = yf.outdent, Vo = "Config", ei = "Editor", ri = "Other", Ur = "Global", Rn = "Special", Ef = { cursorOffset: { since: "1.4.0", category: Rn, type: "int", default: -1, range: { start: -1, end: Number.POSITIVE_INFINITY, step: 1 }, description: cu(Ln || (Ln = uu([`
      Print (to stderr) where a cursor at the given position would move to after formatting.
      This option cannot be used with --range-start and --range-end.
    `]))), cliCategory: ei }, endOfLine: { since: "1.15.0", category: Ur, type: "choice", default: [{ since: "1.15.0", value: "auto" }, { since: "2.0.0", value: "lf" }], description: "Which end of line characters to apply.", choices: [{ value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos" }, { value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows" }, { value: "cr", description: "Carriage Return character only (\\r), used very rarely" }, { value: "auto", description: cu(Hu || (Hu = uu([`
          Maintain existing
          (mixed values within one file are normalised by looking at what's used after the first line)
        `]))) }] }, filepath: { since: "1.4.0", category: Rn, type: "path", description: "Specify the input filepath. This will be used to do parser inference.", cliName: "stdin-filepath", cliCategory: ri, cliDescription: "Path to the file to pretend that stdin comes from." }, insertPragma: { since: "1.8.0", category: Rn, type: "boolean", default: !1, description: "Insert @format pragma into file's first docblock comment.", cliCategory: ri }, parser: { since: "0.0.10", category: Ur, type: "choice", default: [{ since: "0.0.10", value: "babylon" }, { since: "1.13.0", value: void 0 }], description: "Which parser to use.", exception: function(h) {
      return typeof h == "string" || typeof h == "function";
    }, choices: [{ value: "flow", description: "Flow" }, { value: "babel", since: "1.16.0", description: "JavaScript" }, { value: "babel-flow", since: "1.16.0", description: "Flow" }, { value: "babel-ts", since: "2.0.0", description: "TypeScript" }, { value: "typescript", since: "1.4.0", description: "TypeScript" }, { value: "espree", since: "2.2.0", description: "JavaScript" }, { value: "meriyah", since: "2.2.0", description: "JavaScript" }, { value: "css", since: "1.7.1", description: "CSS" }, { value: "less", since: "1.7.1", description: "Less" }, { value: "scss", since: "1.7.1", description: "SCSS" }, { value: "json", since: "1.5.0", description: "JSON" }, { value: "json5", since: "1.13.0", description: "JSON5" }, { value: "json-stringify", since: "1.13.0", description: "JSON.stringify" }, { value: "graphql", since: "1.5.0", description: "GraphQL" }, { value: "markdown", since: "1.8.0", description: "Markdown" }, { value: "mdx", since: "1.15.0", description: "MDX" }, { value: "vue", since: "1.10.0", description: "Vue" }, { value: "yaml", since: "1.14.0", description: "YAML" }, { value: "glimmer", since: "2.3.0", description: "Ember / Handlebars" }, { value: "html", since: "1.15.0", description: "HTML" }, { value: "angular", since: "1.15.0", description: "Angular" }, { value: "lwc", since: "1.17.0", description: "Lightning Web Components" }] }, plugins: { since: "1.10.0", type: "path", array: !0, default: [{ value: [] }], category: Ur, description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.", exception: function(h) {
      return typeof h == "string" || Se(h) == "object";
    }, cliName: "plugin", cliCategory: Vo }, pluginSearchDirs: { since: "1.13.0", type: "path", array: !0, default: [{ value: [] }], category: Ur, description: cu(Lc || (Lc = uu([`
      Custom directory that contains prettier plugins in node_modules subdirectory.
      Overrides default behavior when plugins are searched relatively to the location of Prettier.
      Multiple values are accepted.
    `]))), exception: function(h) {
      return typeof h == "string" || Se(h) == "object";
    }, cliName: "plugin-search-dir", cliCategory: Vo }, printWidth: { since: "0.0.0", category: Ur, type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 } }, rangeEnd: { since: "1.4.0", category: Rn, type: "int", default: Number.POSITIVE_INFINITY, range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }, description: cu($o || ($o = uu([`
      Format code ending at a given character offset (exclusive).
      The range will extend forwards to the end of the selected statement.
      This option cannot be used with --cursor-offset.
    `]))), cliCategory: ei }, rangeStart: { since: "1.4.0", category: Rn, type: "int", default: 0, range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }, description: cu(qo || (qo = uu([`
      Format code starting at a given character offset.
      The range will extend backwards to the start of the first line containing the selected statement.
      This option cannot be used with --cursor-offset.
    `]))), cliCategory: ei }, requirePragma: { since: "1.7.0", category: Rn, type: "boolean", default: !1, description: cu(hn || (hn = uu([`
      Require either '@prettier' or '@format' to be present in the file's first docblock comment
      in order for it to be formatted.
    `]))), cliCategory: ri }, tabWidth: { type: "int", category: Ur, default: 2, description: "Number of spaces per indentation level.", range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 } }, useTabs: { since: "1.0.0", category: Ur, type: "boolean", default: !1, description: "Indent with tabs instead of spaces." }, embeddedLanguageFormatting: { since: "2.1.0", category: Ur, type: "choice", default: [{ since: "2.1.0", value: "auto" }], description: "Control how Prettier formats quoted code embedded in the file.", choices: [{ value: "auto", description: "Format embedded code if Prettier can automatically identify it." }, { value: "off", description: "Never automatically format embedded code." }] } }, Ir = { compare: Kt, lt: Qt, gte: mf }, zu = vf, Uo = Ef, Rc = { getSupportInfo: function() {
      var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, g = h.plugins, m = g === void 0 ? [] : g, C = h.showUnreleased, T = C === void 0 ? !1 : C, L = h.showDeprecated, j = L === void 0 ? !1 : L, Q = h.showInternal, pe = Q === void 0 ? !1 : Q, de = zu.split("-", 1)[0], z = m.reduce(function(ee, ge) {
        return [].concat(_(ee), _(ge.languages || []));
      }, []).filter(J), V = function(ee, ge) {
        return Object.entries(ee).map(function(me) {
          var xe = ke(me, 2), Be = xe[0], G = xe[1];
          return Object.assign(Zn({}, ge, Be), G);
        });
      }(Object.assign.apply(Object, [{}].concat(_(m.map(function(ee) {
        var ge = ee.options;
        return ge;
      })), [Uo])), "name").filter(function(ee) {
        return J(ee) && Ee(ee);
      }).sort(function(ee, ge) {
        return ee.name === ge.name ? 0 : ee.name < ge.name ? -1 : 1;
      }).map(function(ee) {
        return pe ? ee : function(ge, me) {
          if (ge == null)
            return {};
          var xe, Be, G = {}, Y = Object.keys(ge);
          for (Be = 0; Be < Y.length; Be++)
            xe = Y[Be], me.indexOf(xe) >= 0 || (G[xe] = ge[xe]);
          return G;
        }(ee, ["cliName", "cliCategory", "cliDescription"]);
      }).map(function(ee) {
        ee = Object.assign({}, ee), Array.isArray(ee.default) && (ee.default = ee.default.length === 1 ? ee.default[0].value : ee.default.filter(J).sort(function(me, xe) {
          return Ir.compare(xe.since, me.since);
        })[0].value), Array.isArray(ee.choices) && (ee.choices = ee.choices.filter(function(me) {
          return J(me) && Ee(me);
        }), ee.name === "parser" && function(me, xe, Be) {
          var G = new Set(me.choices.map(function(je) {
            return je.value;
          })), Y = le(xe), P;
          try {
            for (Y.s(); !(P = Y.n()).done; ) {
              var W = P.value;
              if (W.parsers) {
                var te = le(W.parsers), ie;
                try {
                  var Ie = function() {
                    var Xe = ie.value;
                    if (!G.has(Xe)) {
                      G.add(Xe);
                      var Sr = Be.find(function(Or) {
                        return Or.parsers && Or.parsers[Xe];
                      }), gr = W.name;
                      Sr && Sr.name && (gr += " (plugin: ".concat(Sr.name, ")")), me.choices.push({ value: Xe, description: gr });
                    }
                  };
                  for (te.s(); !(ie = te.n()).done; )
                    Ie();
                } catch (je) {
                  te.e(je);
                } finally {
                  te.f();
                }
              }
            }
          } catch (je) {
            Y.e(je);
          } finally {
            Y.f();
          }
        }(ee, z, m));
        var ge = Ja(m.filter(function(me) {
          return me.defaultOptions && me.defaultOptions[ee.name] !== void 0;
        }).map(function(me) {
          return [me.name, me.defaultOptions[ee.name]];
        }));
        return Object.assign({}, ee, { pluginDefaults: ge });
      });
      return { languages: z, options: V };
      function J(ee) {
        return T || !("since" in ee) || ee.since && Ir.gte(de, ee.since);
      }
      function Ee(ee) {
        return j || !("deprecated" in ee) || ee.deprecated && Ir.lt(de, ee.deprecated);
      }
    } }, Cf = Rc.getSupportInfo, Af = /[^\x20-\x7F]/;
    function lu(E) {
      return function(h, g, m) {
        var C = m && m.backwards;
        if (g === !1)
          return !1;
        for (var T = h.length, L = g; L >= 0 && L < T; ) {
          var j = h.charAt(L);
          if (E instanceof RegExp) {
            if (!E.test(j))
              return L;
          } else if (!E.includes(j))
            return L;
          C ? L-- : L++;
        }
        return (L === -1 || L === T) && L;
      };
    }
    var Mc = lu(/\s/), Mn = lu(" 	"), Wo = lu(",; 	"), Xu = lu(/[^\n\r]/);
    function ti(E, h) {
      if (h === !1)
        return !1;
      if (E.charAt(h) === "/" && E.charAt(h + 1) === "*") {
        for (var g = h + 2; g < E.length; ++g)
          if (E.charAt(g) === "*" && E.charAt(g + 1) === "/")
            return g + 2;
      }
      return h;
    }
    function ni(E, h) {
      return h !== !1 && (E.charAt(h) === "/" && E.charAt(h + 1) === "/" ? Xu(E, h) : h);
    }
    function St(E, h, g) {
      var m = g && g.backwards;
      if (h === !1)
        return !1;
      var C = E.charAt(h);
      if (m) {
        if (E.charAt(h - 1) === "\r" && C === `
`)
          return h - 2;
        if (C === `
` || C === "\r" || C === "\u2028" || C === "\u2029")
          return h - 1;
      } else {
        if (C === "\r" && E.charAt(h + 1) === `
`)
          return h + 2;
        if (C === `
` || C === "\r" || C === "\u2028" || C === "\u2029")
          return h + 1;
      }
      return h;
    }
    function jc(E, h) {
      var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, m = Mn(E, g.backwards ? h - 1 : h, g);
      return m !== St(E, m, g);
    }
    function Go(E, h) {
      for (var g = null, m = h; m !== g; )
        g = m, m = Wo(E, m), m = ti(E, m), m = Mn(E, m);
      return m = ni(E, m), m = St(E, m), m !== !1 && jc(E, m);
    }
    function ui(E, h) {
      for (var g = null, m = h; m !== g; )
        g = m, m = Mn(E, m), m = ti(E, m), m = ni(E, m), m = St(E, m);
      return m;
    }
    function $c(E, h, g) {
      return ui(E, g(h));
    }
    function Ho(E, h) {
      for (var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, m = 0, C = g; C < E.length; ++C)
        E[C] === "	" ? m = m + h - m % h : m++;
      return m;
    }
    function zo(E, h) {
      var g = E.slice(1, -1), m = { quote: '"', regex: /"/g }, C = { quote: "'", regex: /'/g }, T = h === "'" ? C : m, L = T === C ? m : C, j = T.quote;
      return (g.includes(T.quote) || g.includes(L.quote)) && (j = (g.match(T.regex) || []).length > (g.match(L.regex) || []).length ? L.quote : T.quote), j;
    }
    function Xo(E, h, g) {
      var m = h === '"' ? "'" : '"', C = E.replace(/\\([\S\s])|(["'])/g, function(T, L, j) {
        return L === m ? L : j === h ? "\\" + j : j || (g && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(L) ? L : "\\" + L);
      });
      return h + C + h;
    }
    function ai(E, h) {
      (E.comments || (E.comments = [])).push(h), h.printed = !1, h.nodeDescription = function(g) {
        var m = g.type || g.kind || "(unknown type)", C = String(g.name || g.id && (Se(g.id) == "object" ? g.id.name : g.id) || g.key && (Se(g.key) == "object" ? g.key.name : g.key) || g.value && (Se(g.value) == "object" ? "" : String(g.value)) || g.operator || "");
        return C.length > 20 && (C = C.slice(0, 19) + "\u2026"), m + (C ? " " + C : "");
      }(E);
    }
    var Ju = { inferParserByLanguage: function(h, g) {
      var m = Cf({ plugins: g.plugins }), C = m.languages, T = C.find(function(L) {
        var j = L.name;
        return j.toLowerCase() === h;
      }) || C.find(function(L) {
        var j = L.aliases;
        return Array.isArray(j) && j.includes(h);
      }) || C.find(function(L) {
        var j = L.extensions;
        return Array.isArray(j) && j.includes(".".concat(h));
      });
      return T && T.parsers[0];
    }, replaceEndOfLineWith: function(h, g) {
      var m = [], C = le(h.split(`
`)), T;
      try {
        for (C.s(); !(T = C.n()).done; ) {
          var L = T.value;
          m.length > 0 && m.push(g), m.push(L);
        }
      } catch (j) {
        C.e(j);
      } finally {
        C.f();
      }
      return m;
    }, getStringWidth: function(h) {
      return h ? Af.test(h) ? ko(h) : h.length : 0;
    }, getMaxContinuousCount: function(h, g) {
      var m = h.match(new RegExp("(".concat(Fc(g), ")+"), "g"));
      return m === null ? 0 : m.reduce(function(C, T) {
        return Math.max(C, T.length / g.length);
      }, 0);
    }, getMinNotPresentContinuousCount: function(h, g) {
      var m = h.match(new RegExp("(".concat(Fc(g), ")+"), "g"));
      if (m === null)
        return 0;
      var C = /* @__PURE__ */ new Map(), T = 0, L = le(m), j;
      try {
        for (L.s(); !(j = L.n()).done; ) {
          var Q = j.value, pe = Q.length / g.length;
          C.set(pe, !0), pe > T && (T = pe);
        }
      } catch (z) {
        L.e(z);
      } finally {
        L.f();
      }
      for (var de = 1; de < T; de++)
        if (!C.get(de))
          return de;
      return T + 1;
    }, getPenultimate: function(h) {
      return h[h.length - 2];
    }, getLast: To, getNextNonSpaceNonCommentCharacterIndexWithStartIndex: ui, getNextNonSpaceNonCommentCharacterIndex: $c, getNextNonSpaceNonCommentCharacter: function(h, g, m) {
      return h.charAt($c(h, g, m));
    }, skip: lu, skipWhitespace: Mc, skipSpaces: Mn, skipToLineEnd: Wo, skipEverythingButNewLine: Xu, skipInlineComment: ti, skipTrailingComment: ni, skipNewline: St, isNextLineEmptyAfterIndex: Go, isNextLineEmpty: function(h, g, m) {
      return Go(h, m(g));
    }, isPreviousLineEmpty: function(h, g, m) {
      var C = m(g) - 1;
      return C = Mn(h, C, { backwards: !0 }), C = St(h, C, { backwards: !0 }), C = Mn(h, C, { backwards: !0 }), C !== St(h, C, { backwards: !0 });
    }, hasNewline: jc, hasNewlineInRange: function(h, g, m) {
      for (var C = g; C < m; ++C)
        if (h.charAt(C) === `
`)
          return !0;
      return !1;
    }, hasSpaces: function(h, g) {
      var m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return Mn(h, m.backwards ? g - 1 : g, m) !== g;
    }, getAlignmentSize: Ho, getIndentSize: function(h, g) {
      var m = h.lastIndexOf(`
`);
      return m === -1 ? 0 : Ho(h.slice(m + 1).match(/^[\t ]*/)[0], g);
    }, getPreferredQuote: zo, printString: function(h, g) {
      return Xo(h.slice(1, -1), g.parser === "json" || g.parser === "json5" && g.quoteProps === "preserve" && !g.singleQuote ? '"' : g.__isInHtmlAttribute ? "'" : zo(h, g.singleQuote ? "'" : '"'), !(g.parser === "css" || g.parser === "less" || g.parser === "scss" || g.__embeddedInHtml));
    }, printNumber: function(h) {
      return h.toLowerCase().replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(\d)/, "$1$2$3").replace(/^([+-]?[\d.]+)e[+-]?0+$/, "$1").replace(/^([+-])?\./, "$10.").replace(/(\.\d+?)0+(?=e|$)/, "$1").replace(/\.(?=e|$)/, "");
    }, makeString: Xo, addLeadingComment: function(h, g) {
      g.leading = !0, g.trailing = !1, ai(h, g);
    }, addDanglingComment: function(h, g, m) {
      g.leading = !1, g.trailing = !1, m && (g.marker = m), ai(h, g);
    }, addTrailingComment: function(h, g) {
      g.leading = !1, g.trailing = !0, ai(h, g);
    }, isFrontMatterNode: function(h) {
      return h && h.type === "front-matter";
    }, getShebang: function(h) {
      if (!h.startsWith("#!"))
        return "";
      var g = h.indexOf(`
`);
      return g === -1 ? h : h.slice(0, g);
    }, isNonEmptyArray: function(h) {
      return Array.isArray(h) && h.length > 0;
    }, createGroupIdMapper: function(h) {
      var g = /* @__PURE__ */ new WeakMap();
      return function(m) {
        return g.has(m) || g.set(m, Symbol(h)), g.get(m);
      };
    } }, qc = { "*": ["accesskey", "autocapitalize", "autofocus", "class", "contenteditable", "dir", "draggable", "enterkeyhint", "hidden", "id", "inputmode", "is", "itemid", "itemprop", "itemref", "itemscope", "itemtype", "lang", "nonce", "slot", "spellcheck", "style", "tabindex", "title", "translate"], a: ["accesskey", "charset", "coords", "download", "href", "hreflang", "name", "ping", "referrerpolicy", "rel", "rev", "shape", "tabindex", "target", "type"], abbr: ["title"], applet: ["align", "alt", "archive", "code", "codebase", "height", "hspace", "name", "object", "vspace", "width"], area: ["accesskey", "alt", "coords", "download", "href", "hreflang", "nohref", "ping", "referrerpolicy", "rel", "shape", "tabindex", "target", "type"], audio: ["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"], base: ["href", "target"], basefont: ["color", "face", "size"], bdo: ["dir"], blockquote: ["cite"], body: ["alink", "background", "bgcolor", "link", "text", "vlink"], br: ["clear"], button: ["accesskey", "autofocus", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "name", "tabindex", "type", "value"], canvas: ["height", "width"], caption: ["align"], col: ["align", "char", "charoff", "span", "valign", "width"], colgroup: ["align", "char", "charoff", "span", "valign", "width"], data: ["value"], del: ["cite", "datetime"], details: ["open"], dfn: ["title"], dialog: ["open"], dir: ["compact"], div: ["align"], dl: ["compact"], embed: ["height", "src", "type", "width"], fieldset: ["disabled", "form", "name"], font: ["color", "face", "size"], form: ["accept", "accept-charset", "action", "autocomplete", "enctype", "method", "name", "novalidate", "target"], frame: ["frameborder", "longdesc", "marginheight", "marginwidth", "name", "noresize", "scrolling", "src"], frameset: ["cols", "rows"], h1: ["align"], h2: ["align"], h3: ["align"], h4: ["align"], h5: ["align"], h6: ["align"], head: ["profile"], hr: ["align", "noshade", "size", "width"], html: ["manifest", "version"], iframe: ["align", "allow", "allowfullscreen", "allowpaymentrequest", "allowusermedia", "frameborder", "height", "loading", "longdesc", "marginheight", "marginwidth", "name", "referrerpolicy", "sandbox", "scrolling", "src", "srcdoc", "width"], img: ["align", "alt", "border", "crossorigin", "decoding", "height", "hspace", "ismap", "loading", "longdesc", "name", "referrerpolicy", "sizes", "src", "srcset", "usemap", "vspace", "width"], input: ["accept", "accesskey", "align", "alt", "autocomplete", "autofocus", "checked", "dirname", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "height", "ismap", "list", "max", "maxlength", "min", "minlength", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "src", "step", "tabindex", "title", "type", "usemap", "value", "width"], ins: ["cite", "datetime"], isindex: ["prompt"], label: ["accesskey", "for", "form"], legend: ["accesskey", "align"], li: ["type", "value"], link: ["as", "charset", "color", "crossorigin", "disabled", "href", "hreflang", "imagesizes", "imagesrcset", "integrity", "media", "nonce", "referrerpolicy", "rel", "rev", "sizes", "target", "title", "type"], map: ["name"], menu: ["compact"], meta: ["charset", "content", "http-equiv", "name", "scheme"], meter: ["high", "low", "max", "min", "optimum", "value"], object: ["align", "archive", "border", "classid", "codebase", "codetype", "data", "declare", "form", "height", "hspace", "name", "standby", "tabindex", "type", "typemustmatch", "usemap", "vspace", "width"], ol: ["compact", "reversed", "start", "type"], optgroup: ["disabled", "label"], option: ["disabled", "label", "selected", "value"], output: ["for", "form", "name"], p: ["align"], param: ["name", "type", "value", "valuetype"], pre: ["width"], progress: ["max", "value"], q: ["cite"], script: ["async", "charset", "crossorigin", "defer", "integrity", "language", "nomodule", "nonce", "referrerpolicy", "src", "type"], select: ["autocomplete", "autofocus", "disabled", "form", "multiple", "name", "required", "size", "tabindex"], slot: ["name"], source: ["media", "sizes", "src", "srcset", "type"], style: ["media", "nonce", "title", "type"], table: ["align", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "rules", "summary", "width"], tbody: ["align", "char", "charoff", "valign"], td: ["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"], textarea: ["accesskey", "autocomplete", "autofocus", "cols", "dirname", "disabled", "form", "maxlength", "minlength", "name", "placeholder", "readonly", "required", "rows", "tabindex", "wrap"], tfoot: ["align", "char", "charoff", "valign"], th: ["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"], thead: ["align", "char", "charoff", "valign"], time: ["datetime"], tr: ["align", "bgcolor", "char", "charoff", "valign"], track: ["default", "kind", "label", "src", "srclang"], ul: ["compact", "type"], video: ["autoplay", "controls", "crossorigin", "height", "loop", "muted", "playsinline", "poster", "preload", "src", "width"] }, bf = Ju.inferParserByLanguage, Jo = Ju.isFrontMatterNode, Zt = { CSS_DISPLAY_TAGS: { area: "none", base: "none", basefont: "none", datalist: "none", head: "none", link: "none", meta: "none", noembed: "none", noframes: "none", param: "block", rp: "none", script: "block", source: "block", style: "none", template: "inline", track: "block", title: "none", html: "block", body: "block", address: "block", blockquote: "block", center: "block", div: "block", figure: "block", figcaption: "block", footer: "block", form: "block", header: "block", hr: "block", legend: "block", listing: "block", main: "block", p: "block", plaintext: "block", pre: "block", xmp: "block", slot: "contents", ruby: "ruby", rt: "ruby-text", article: "block", aside: "block", h1: "block", h2: "block", h3: "block", h4: "block", h5: "block", h6: "block", hgroup: "block", nav: "block", section: "block", dir: "block", dd: "block", dl: "block", dt: "block", ol: "block", ul: "block", li: "list-item", table: "table", caption: "table-caption", colgroup: "table-column-group", col: "table-column", thead: "table-header-group", tbody: "table-row-group", tfoot: "table-footer-group", tr: "table-row", td: "table-cell", th: "table-cell", fieldset: "block", button: "inline-block", details: "block", summary: "block", dialog: "block", meter: "inline-block", progress: "inline-block", object: "inline-block", video: "inline-block", audio: "inline-block", select: "inline-block", option: "block", optgroup: "block" }, CSS_DISPLAY_DEFAULT: "inline", CSS_WHITE_SPACE_TAGS: { listing: "pre", plaintext: "pre", pre: "pre", xmp: "pre", nobr: "nowrap", table: "initial", textarea: "pre-wrap" }, CSS_WHITE_SPACE_DEFAULT: "normal" }, Yo = Zt.CSS_DISPLAY_TAGS, ii = Zt.CSS_DISPLAY_DEFAULT, oi = Zt.CSS_WHITE_SPACE_TAGS, _t = Zt.CSS_WHITE_SPACE_DEFAULT, jn = Uc(["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "bgsound", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "command", "content", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "image", "img", "input", "ins", "isindex", "kbd", "keygen", "label", "legend", "li", "link", "listing", "main", "map", "mark", "marquee", "math", "menu", "menuitem", "meta", "meter", "multicol", "nav", "nextid", "nobr", "noembed", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "plaintext", "pre", "progress", "q", "rb", "rbc", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xmp"]), Ff = function(E, h) {
      for (var g = /* @__PURE__ */ Object.create(null), m = 0, C = Object.entries(E); m < C.length; m++) {
        var T = ke(C[m], 2), L = T[0], j = T[1];
        g[L] = h(j, L);
      }
      return g;
    }(qc, Uc), Ko = /* @__PURE__ */ new Set(["	", `
`, "\f", "\r", " "]), Vc = function(h) {
      return h.replace(/[\t\n\f\r ]+$/, "");
    };
    function Uc(E) {
      var h = /* @__PURE__ */ Object.create(null), g = le(E), m;
      try {
        for (g.s(); !(m = g.n()).done; ) {
          var C = m.value;
          h[C] = !0;
        }
      } catch (T) {
        g.e(T);
      } finally {
        g.f();
      }
      return h;
    }
    function si(E, h) {
      return !(E.type !== "ieConditionalComment" || !E.lastChild || E.lastChild.isSelfClosing || E.lastChild.endSourceSpan) || E.type === "ieConditionalComment" && !E.complete || !(!Vn(E) || !E.children.some(function(g) {
        return g.type !== "text" && g.type !== "interpolation";
      })) || !(!Qu(E, h) || $n(E) || E.type === "interpolation");
    }
    function Wc(E) {
      return E.type === "attribute" || !E.parent || typeof E.index != "number" || E.index === 0 ? !1 : function(h) {
        return h.type === "comment" && h.value.trim() === "prettier-ignore";
      }(E.parent.children[E.index - 1]);
    }
    function $n(E) {
      return E.type === "element" && (E.fullName === "script" || E.fullName === "style" || E.fullName === "svg:style" || Yu(E) && (E.name === "script" || E.name === "style"));
    }
    function pu(E) {
      return pi(E).startsWith("pre");
    }
    function Gc(E) {
      return E.type === "element" && E.children.length > 0 && (["html", "head", "ul", "ol", "select"].includes(E.name) || E.cssDisplay.startsWith("table") && E.cssDisplay !== "table-cell");
    }
    function Dn(E) {
      return li(E) || E.type === "element" && E.fullName === "br" || Qo(E);
    }
    function Qo(E) {
      return Zo(E) && ci(E);
    }
    function Zo(E) {
      return E.hasLeadingSpaces && (E.prev ? E.prev.sourceSpan.end.line < E.sourceSpan.start.line : E.parent.type === "root" || E.parent.startSourceSpan.end.line < E.sourceSpan.start.line);
    }
    function ci(E) {
      return E.hasTrailingSpaces && (E.next ? E.next.sourceSpan.start.line > E.sourceSpan.end.line : E.parent.type === "root" || E.parent.endSourceSpan && E.parent.endSourceSpan.start.line > E.sourceSpan.end.line);
    }
    function li(E) {
      switch (E.type) {
        case "ieConditionalComment":
        case "comment":
        case "directive":
          return !0;
        case "element":
          return ["script", "select"].includes(E.name);
      }
      return !1;
    }
    function qn(E) {
      var h = E.attrMap, g = h.type, m = h.lang;
      return g === "module" || g === "text/javascript" || g === "text/babel" || g === "application/javascript" || m === "jsx" ? "babel" : g === "application/x-typescript" || m === "ts" || m === "tsx" ? "typescript" : g === "text/markdown" ? "markdown" : g === "text/html" ? "html" : g && (g.endsWith("json") || g.endsWith("importmap")) ? "json" : g === "text/x-handlebars-template" ? "glimmer" : void 0;
    }
    function fu(E) {
      return E === "block" || E === "list-item" || E.startsWith("table");
    }
    function Vn(E) {
      return pi(E).startsWith("pre");
    }
    function Yu(E) {
      return E.type === "element" && !E.hasExplicitNamespace && !["html", "svg"].includes(E.namespace);
    }
    function pi(E) {
      return E.type === "element" && (!E.namespace || Yu(E)) && oi[E.name] || _t;
    }
    var Hc = /* @__PURE__ */ new Set(["template", "style", "script"]);
    function Ku(E, h) {
      return fi(E, h) && !Hc.has(E.fullName);
    }
    function fi(E, h) {
      return h.parser === "vue" && E.type === "element" && E.parent.type === "root" && E.fullName.toLowerCase() !== "html";
    }
    function Qu(E, h) {
      return fi(E, h) && (Ku(E, h) || E.attrMap.lang && E.attrMap.lang !== "html");
    }
    var X = { HTML_ELEMENT_ATTRIBUTES: Ff, HTML_TAGS: jn, htmlTrim: function(h) {
      return function(g) {
        return g.replace(/^[\t\n\f\r ]+/, "");
      }(Vc(h));
    }, htmlTrimPreserveIndentation: function(h) {
      return function(g) {
        return g.replace(/^[\t\f\r ]*?\n/g, "");
      }(Vc(h));
    }, splitByHtmlWhitespace: function(h) {
      return h.split(/[\t\n\f\r ]+/);
    }, hasHtmlWhitespace: function(h) {
      return /[\t\n\f\r ]/.test(h);
    }, getLeadingAndTrailingHtmlWhitespace: function(h) {
      var g = h.match(/^([\t\n\f\r ]*)([\S\s]*?)([\t\n\f\r ]*)$/), m = ke(g, 4), C = m[1], T = m[2], L = m[3];
      return { leadingWhitespace: C, trailingWhitespace: L, text: T };
    }, canHaveInterpolation: function(h) {
      return h.children && !$n(h);
    }, countChars: function(h, g) {
      for (var m = 0, C = 0; C < h.length; C++)
        h[C] === g && m++;
      return m;
    }, countParents: function(h, g) {
      for (var m = 0, C = h.stack.length - 1; C >= 0; C--) {
        var T = h.stack[C];
        T && Se(T) == "object" && !Array.isArray(T) && g(T) && m++;
      }
      return m;
    }, dedentString: function(h) {
      var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function(m) {
        var C = Number.POSITIVE_INFINITY, T = le(m.split(`
`)), L;
        try {
          for (T.s(); !(L = T.n()).done; ) {
            var j = L.value;
            if (j.length !== 0) {
              if (!Ko.has(j[0]))
                return 0;
              var Q = (pe = j, pe.match(/^[\t\n\f\r ]*/)[0]).length;
              j.length !== Q && Q < C && (C = Q);
            }
          }
        } catch (de) {
          T.e(de);
        } finally {
          T.f();
        }
        var pe;
        return C === Number.POSITIVE_INFINITY ? 0 : C;
      }(h);
      return g === 0 ? h : h.split(`
`).map(function(m) {
        return m.slice(g);
      }).join(`
`);
    }, forceBreakChildren: Gc, forceBreakContent: function(h) {
      return Gc(h) || h.type === "element" && h.children.length > 0 && (["body", "script", "style"].includes(h.name) || h.children.some(function(g) {
        return function(m) {
          return m.children && m.children.some(function(C) {
            return C.type !== "text";
          });
        }(g);
      })) || h.firstChild && h.firstChild === h.lastChild && h.firstChild.type !== "text" && Zo(h.firstChild) && (!h.lastChild.isTrailingSpaceSensitive || ci(h.lastChild));
    }, forceNextEmptyLine: function(h) {
      return Jo(h) || h.next && h.sourceSpan.end && h.sourceSpan.end.line + 1 < h.next.sourceSpan.start.line;
    }, getLastDescendant: function E(h) {
      return h.lastChild ? E(h.lastChild) : h;
    }, getNodeCssStyleDisplay: function(h, g) {
      if (h.prev && h.prev.type === "comment") {
        var m = h.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/);
        if (m)
          return m[1];
      }
      var C = !1;
      if (h.type === "element" && h.namespace === "svg") {
        if (!function(T, L) {
          for (var j = T; j; ) {
            if (L(j))
              return !0;
            j = j.parent;
          }
          return !1;
        }(h, function(T) {
          return T.fullName === "svg:foreignObject";
        }))
          return h.name === "svg" ? "inline-block" : "block";
        C = !0;
      }
      switch (g.htmlWhitespaceSensitivity) {
        case "strict":
          return "inline";
        case "ignore":
          return "block";
        default:
          return g.parser === "vue" && h.parent && h.parent.type === "root" ? "block" : h.type === "element" && (!h.namespace || C || Yu(h)) && Yo[h.name] || ii;
      }
    }, getNodeCssStyleWhiteSpace: pi, getPrettierIgnoreAttributeCommentData: function(h) {
      var g = h.trim().match(/^prettier-ignore-attribute(?:\s+([^]+))?$/);
      return !!g && (!g[1] || g[1].split(/\s+/));
    }, hasPrettierIgnore: Wc, inferScriptParser: function(h, g) {
      return h.name !== "script" || h.attrMap.src ? h.name === "style" ? function(m) {
        var C = m.attrMap.lang;
        return C && C !== "postcss" && C !== "css" ? C === "scss" ? "scss" : C === "less" ? "less" : void 0 : "css";
      }(h) : g && Qu(h, g) ? qn(h) || !("src" in h.attrMap) && bf(h.attrMap.lang, g) : void 0 : h.attrMap.lang || h.attrMap.type ? qn(h) : "babel";
    }, isVueCustomBlock: Ku, isVueNonHtmlBlock: Qu, isVueSlotAttribute: function(h) {
      var g = h.fullName;
      return g.charAt(0) === "#" || g === "slot-scope" || g === "v-slot" || g.startsWith("v-slot:");
    }, isVueSfcBindingsAttribute: function(h, g) {
      var m = h.parent;
      if (!fi(m, g))
        return !1;
      var C = m.fullName, T = h.fullName;
      return C === "script" && T === "setup" || C === "style" && T === "vars";
    }, isDanglingSpaceSensitiveNode: function(h) {
      return g = h.cssDisplay, !(fu(g) || g === "inline-block" || $n(h));
      var g;
    }, isIndentationSensitiveNode: pu, isLeadingSpaceSensitiveNode: function(h, g) {
      var m = function() {
        if (Jo(h))
          return !1;
        if ((h.type === "text" || h.type === "interpolation") && h.prev && (h.prev.type === "text" || h.prev.type === "interpolation"))
          return !0;
        if (!h.parent || h.parent.cssDisplay === "none")
          return !1;
        if (Vn(h.parent))
          return !0;
        if (!h.prev && (h.parent.type === "root" || Vn(h) && h.parent || $n(h.parent) || Ku(h.parent, g) || (C = h.parent.cssDisplay, fu(C) || C === "inline-block")))
          return !1;
        var C;
        return !(h.prev && !function(T) {
          return !fu(T);
        }(h.prev.cssDisplay));
      }();
      return m && !h.prev && h.parent && h.parent.tagDefinition && h.parent.tagDefinition.ignoreFirstLf ? h.type === "interpolation" : m;
    }, isPreLikeNode: Vn, isScriptLikeTag: $n, isTextLikeNode: function(h) {
      return h.type === "text" || h.type === "comment";
    }, isTrailingSpaceSensitiveNode: function(h, g) {
      return !Jo(h) && (!(h.type !== "text" && h.type !== "interpolation" || !h.next || h.next.type !== "text" && h.next.type !== "interpolation") || !(!h.parent || h.parent.cssDisplay === "none") && (!!Vn(h.parent) || !(!h.next && (h.parent.type === "root" || Vn(h) && h.parent || $n(h.parent) || Ku(h.parent, g) || (m = h.parent.cssDisplay, fu(m) || m === "inline-block"))) && !(h.next && !function(C) {
        return !fu(C);
      }(h.next.cssDisplay))));
      var m;
    }, isWhitespaceSensitiveNode: function(h) {
      return $n(h) || h.type === "interpolation" || pu(h);
    }, isUnknownNamespace: Yu, preferHardlineAsLeadingSpaces: function(h) {
      return li(h) || h.prev && Dn(h.prev) || Qo(h);
    }, preferHardlineAsTrailingSpaces: Dn, shouldNotPrintClosingTag: function(h, g) {
      return !h.isSelfClosing && !h.endSourceSpan && (Wc(h) || si(h.parent, g));
    }, shouldPreserveContent: si, unescapeQuoteEntities: function(h) {
      return h.replace(/&apos;/g, "'").replace(/&quot;/g, '"');
    } }, du = { hasPragma: function(h) {
      return /^\s*<!--\s*@(format|prettier)\s*-->/.test(h);
    }, insertPragma: function(h) {
      return `<!-- @format -->

` + h.replace(/^\s*\n/, "");
    } }, zc = Ju.isNonEmptyArray, gn = { attrs: !0, children: !0 }, hu = /* @__PURE__ */ function() {
      function E() {
        var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        se(this, E);
        for (var g = 0, m = Object.entries(h); g < m.length; g++) {
          var C = ke(m[g], 2), T = C[0], L = C[1];
          T in gn ? this._setNodes(T, L) : this[T] = L;
        }
      }
      return ce(E, [{ key: "_setNodes", value: function(g, m) {
        m !== this[g] && (this[g] = function(C, T) {
          for (var L = C.map(function(z) {
            return z instanceof E ? z.clone() : new E(z);
          }), j = null, Q = L[0], pe = L[1] || null, de = 0; de < L.length; de++)
            Zu(Q, { index: de, siblings: L, prev: j, next: pe, parent: T }), j = Q, Q = pe, pe = L[de + 2] || null;
          return L;
        }(m, this), g === "attrs" && Zu(this, { attrMap: Ja(this[g].map(function(C) {
          return [C.fullName, C.value];
        })) }));
      } }, { key: "map", value: function(g) {
        var m = null;
        for (var C in gn) {
          var T = this[C];
          if (T) {
            var L = Xc(T, function(J) {
              return J.map(g);
            });
            m !== T && (m || (m = new E()), m._setNodes(C, L));
          }
        }
        if (m) {
          for (var j in this)
            j in gn || (m[j] = this[j]);
          var Q = this.index, pe = this.siblings, de = this.prev, z = this.next, V = this.parent;
          Zu(m, { index: Q, siblings: pe, prev: de, next: z, parent: V });
        }
        return g(m || this);
      } }, { key: "clone", value: function(g) {
        return new E(g ? Object.assign({}, this, g) : this);
      } }, { key: "firstChild", get: function() {
        return zc(this.children) ? this.children[0] : null;
      } }, { key: "lastChild", get: function() {
        return zc(this.children) ? To(this.children) : null;
      } }, { key: "rawName", get: function() {
        return this.hasExplicitNamespace ? this.fullName : this.name;
      } }, { key: "fullName", get: function() {
        return this.namespace ? this.namespace + ":" + this.name : this.name;
      } }]), E;
    }();
    function Xc(E, h) {
      var g = E.map(h);
      return g.some(function(m, C) {
        return m !== E[C];
      }) ? g : E;
    }
    function Zu(E, h) {
      var g = Ja(Object.entries(h).map(function(m) {
        var C = ke(m, 2), T = C[0], L = C[1];
        return [T, { value: L, enumerable: !1 }];
      }));
      Object.defineProperties(E, g);
    }
    var _u = { Node: hu }, di = ar.ParseSourceSpan, Sf = [{ regex: /^(\[if([^\]]*?)\]>)([\s\S]*?)<!\s*\[endif\]$/, parse: function(h, g, m) {
      var C = ke(m, 4), T = C[1], L = C[2], j = C[3], Q = 4 + T.length, pe = h.sourceSpan.start.moveBy(Q), de = pe.moveBy(j.length), z = function() {
        try {
          return [!0, g(j, pe).children];
        } catch {
          return [!1, [{ type: "text", value: j, sourceSpan: new di(pe, de) }]];
        }
      }(), V = ke(z, 2), J = V[0], Ee = V[1];
      return { type: "ieConditionalComment", complete: J, children: Ee, condition: L.trim().replace(/\s+/g, " "), sourceSpan: h.sourceSpan, startSourceSpan: new di(h.sourceSpan.start, pe), endSourceSpan: new di(de, h.sourceSpan.end) };
    } }, { regex: /^\[if([^\]]*?)]><!$/, parse: function(h, g, m) {
      var C = ke(m, 2), T = C[1];
      return { type: "ieConditionalStartComment", condition: T.trim().replace(/\s+/g, " "), sourceSpan: h.sourceSpan };
    } }, { regex: /^<!\s*\[endif]$/, parse: function(h) {
      return { type: "ieConditionalEndComment", sourceSpan: h.sourceSpan };
    } }], Jc = { parseIeConditionalComment: function(h, g) {
      if (h.value) {
        var m = le(Sf), C;
        try {
          for (m.s(); !(C = m.n()).done; ) {
            var T = C.value, L = T.regex, j = T.parse, Q = h.value.match(L);
            if (Q)
              return j(h, g, Q);
          }
        } catch (pe) {
          m.e(pe);
        } finally {
          m.f();
        }
      }
      return null;
    } }, Yc = { locStart: function(h) {
      return h.sourceSpan.start.offset;
    }, locEnd: function(h) {
      return h.sourceSpan.end.offset;
    } }, vr = U(function(E, h) {
      function g(m) {
        if (m[0] != ":")
          return [null, m];
        var C = m.indexOf(":", 1);
        if (C == -1)
          throw new Error('Unsupported format "'.concat(m, '" expecting ":namespace:name"'));
        return [m.slice(1, C), m.slice(C + 1)];
      }
      /**
      * @license
      * Copyright Google Inc. All Rights Reserved.
      *
      * Use of this source code is governed by an MIT-style license that can be
      * found in the LICENSE file at https://angular.io/license
      */
      Object.defineProperty(h, "__esModule", { value: !0 }), function(m) {
        m[m.RAW_TEXT = 0] = "RAW_TEXT", m[m.ESCAPABLE_RAW_TEXT = 1] = "ESCAPABLE_RAW_TEXT", m[m.PARSABLE_DATA = 2] = "PARSABLE_DATA";
      }(h.TagContentType || (h.TagContentType = {})), h.splitNsName = g, h.isNgContainer = function(m) {
        return g(m)[1] === "ng-container";
      }, h.isNgContent = function(m) {
        return g(m)[1] === "ng-content";
      }, h.isNgTemplate = function(m) {
        return g(m)[1] === "ng-template";
      }, h.getNsPrefix = function(m) {
        return m === null ? null : g(m)[0];
      }, h.mergeNsAndName = function(m, C) {
        return m ? ":".concat(m, ":").concat(C) : C;
      }, h.NAMED_ENTITIES = { Aacute: "\xC1", aacute: "\xE1", Abreve: "\u0102", abreve: "\u0103", ac: "\u223E", acd: "\u223F", acE: "\u223E\u0333", Acirc: "\xC2", acirc: "\xE2", acute: "\xB4", Acy: "\u0410", acy: "\u0430", AElig: "\xC6", aelig: "\xE6", af: "\u2061", Afr: "\u{1D504}", afr: "\u{1D51E}", Agrave: "\xC0", agrave: "\xE0", alefsym: "\u2135", aleph: "\u2135", Alpha: "\u0391", alpha: "\u03B1", Amacr: "\u0100", amacr: "\u0101", amalg: "\u2A3F", AMP: "&", amp: "&", And: "\u2A53", and: "\u2227", andand: "\u2A55", andd: "\u2A5C", andslope: "\u2A58", andv: "\u2A5A", ang: "\u2220", ange: "\u29A4", angle: "\u2220", angmsd: "\u2221", angmsdaa: "\u29A8", angmsdab: "\u29A9", angmsdac: "\u29AA", angmsdad: "\u29AB", angmsdae: "\u29AC", angmsdaf: "\u29AD", angmsdag: "\u29AE", angmsdah: "\u29AF", angrt: "\u221F", angrtvb: "\u22BE", angrtvbd: "\u299D", angsph: "\u2222", angst: "\xC5", angzarr: "\u237C", Aogon: "\u0104", aogon: "\u0105", Aopf: "\u{1D538}", aopf: "\u{1D552}", ap: "\u2248", apacir: "\u2A6F", apE: "\u2A70", ape: "\u224A", apid: "\u224B", apos: "'", ApplyFunction: "\u2061", approx: "\u2248", approxeq: "\u224A", Aring: "\xC5", aring: "\xE5", Ascr: "\u{1D49C}", ascr: "\u{1D4B6}", Assign: "\u2254", ast: "*", asymp: "\u2248", asympeq: "\u224D", Atilde: "\xC3", atilde: "\xE3", Auml: "\xC4", auml: "\xE4", awconint: "\u2233", awint: "\u2A11", backcong: "\u224C", backepsilon: "\u03F6", backprime: "\u2035", backsim: "\u223D", backsimeq: "\u22CD", Backslash: "\u2216", Barv: "\u2AE7", barvee: "\u22BD", Barwed: "\u2306", barwed: "\u2305", barwedge: "\u2305", bbrk: "\u23B5", bbrktbrk: "\u23B6", bcong: "\u224C", Bcy: "\u0411", bcy: "\u0431", bdquo: "\u201E", becaus: "\u2235", Because: "\u2235", because: "\u2235", bemptyv: "\u29B0", bepsi: "\u03F6", bernou: "\u212C", Bernoullis: "\u212C", Beta: "\u0392", beta: "\u03B2", beth: "\u2136", between: "\u226C", Bfr: "\u{1D505}", bfr: "\u{1D51F}", bigcap: "\u22C2", bigcirc: "\u25EF", bigcup: "\u22C3", bigodot: "\u2A00", bigoplus: "\u2A01", bigotimes: "\u2A02", bigsqcup: "\u2A06", bigstar: "\u2605", bigtriangledown: "\u25BD", bigtriangleup: "\u25B3", biguplus: "\u2A04", bigvee: "\u22C1", bigwedge: "\u22C0", bkarow: "\u290D", blacklozenge: "\u29EB", blacksquare: "\u25AA", blacktriangle: "\u25B4", blacktriangledown: "\u25BE", blacktriangleleft: "\u25C2", blacktriangleright: "\u25B8", blank: "\u2423", blk12: "\u2592", blk14: "\u2591", blk34: "\u2593", block: "\u2588", bne: "=\u20E5", bnequiv: "\u2261\u20E5", bNot: "\u2AED", bnot: "\u2310", Bopf: "\u{1D539}", bopf: "\u{1D553}", bot: "\u22A5", bottom: "\u22A5", bowtie: "\u22C8", boxbox: "\u29C9", boxDL: "\u2557", boxDl: "\u2556", boxdL: "\u2555", boxdl: "\u2510", boxDR: "\u2554", boxDr: "\u2553", boxdR: "\u2552", boxdr: "\u250C", boxH: "\u2550", boxh: "\u2500", boxHD: "\u2566", boxHd: "\u2564", boxhD: "\u2565", boxhd: "\u252C", boxHU: "\u2569", boxHu: "\u2567", boxhU: "\u2568", boxhu: "\u2534", boxminus: "\u229F", boxplus: "\u229E", boxtimes: "\u22A0", boxUL: "\u255D", boxUl: "\u255C", boxuL: "\u255B", boxul: "\u2518", boxUR: "\u255A", boxUr: "\u2559", boxuR: "\u2558", boxur: "\u2514", boxV: "\u2551", boxv: "\u2502", boxVH: "\u256C", boxVh: "\u256B", boxvH: "\u256A", boxvh: "\u253C", boxVL: "\u2563", boxVl: "\u2562", boxvL: "\u2561", boxvl: "\u2524", boxVR: "\u2560", boxVr: "\u255F", boxvR: "\u255E", boxvr: "\u251C", bprime: "\u2035", Breve: "\u02D8", breve: "\u02D8", brvbar: "\xA6", Bscr: "\u212C", bscr: "\u{1D4B7}", bsemi: "\u204F", bsim: "\u223D", bsime: "\u22CD", bsol: "\\", bsolb: "\u29C5", bsolhsub: "\u27C8", bull: "\u2022", bullet: "\u2022", bump: "\u224E", bumpE: "\u2AAE", bumpe: "\u224F", Bumpeq: "\u224E", bumpeq: "\u224F", Cacute: "\u0106", cacute: "\u0107", Cap: "\u22D2", cap: "\u2229", capand: "\u2A44", capbrcup: "\u2A49", capcap: "\u2A4B", capcup: "\u2A47", capdot: "\u2A40", CapitalDifferentialD: "\u2145", caps: "\u2229\uFE00", caret: "\u2041", caron: "\u02C7", Cayleys: "\u212D", ccaps: "\u2A4D", Ccaron: "\u010C", ccaron: "\u010D", Ccedil: "\xC7", ccedil: "\xE7", Ccirc: "\u0108", ccirc: "\u0109", Cconint: "\u2230", ccups: "\u2A4C", ccupssm: "\u2A50", Cdot: "\u010A", cdot: "\u010B", cedil: "\xB8", Cedilla: "\xB8", cemptyv: "\u29B2", cent: "\xA2", CenterDot: "\xB7", centerdot: "\xB7", Cfr: "\u212D", cfr: "\u{1D520}", CHcy: "\u0427", chcy: "\u0447", check: "\u2713", checkmark: "\u2713", Chi: "\u03A7", chi: "\u03C7", cir: "\u25CB", circ: "\u02C6", circeq: "\u2257", circlearrowleft: "\u21BA", circlearrowright: "\u21BB", circledast: "\u229B", circledcirc: "\u229A", circleddash: "\u229D", CircleDot: "\u2299", circledR: "\xAE", circledS: "\u24C8", CircleMinus: "\u2296", CirclePlus: "\u2295", CircleTimes: "\u2297", cirE: "\u29C3", cire: "\u2257", cirfnint: "\u2A10", cirmid: "\u2AEF", cirscir: "\u29C2", ClockwiseContourIntegral: "\u2232", CloseCurlyDoubleQuote: "\u201D", CloseCurlyQuote: "\u2019", clubs: "\u2663", clubsuit: "\u2663", Colon: "\u2237", colon: ":", Colone: "\u2A74", colone: "\u2254", coloneq: "\u2254", comma: ",", commat: "@", comp: "\u2201", compfn: "\u2218", complement: "\u2201", complexes: "\u2102", cong: "\u2245", congdot: "\u2A6D", Congruent: "\u2261", Conint: "\u222F", conint: "\u222E", ContourIntegral: "\u222E", Copf: "\u2102", copf: "\u{1D554}", coprod: "\u2210", Coproduct: "\u2210", COPY: "\xA9", copy: "\xA9", copysr: "\u2117", CounterClockwiseContourIntegral: "\u2233", crarr: "\u21B5", Cross: "\u2A2F", cross: "\u2717", Cscr: "\u{1D49E}", cscr: "\u{1D4B8}", csub: "\u2ACF", csube: "\u2AD1", csup: "\u2AD0", csupe: "\u2AD2", ctdot: "\u22EF", cudarrl: "\u2938", cudarrr: "\u2935", cuepr: "\u22DE", cuesc: "\u22DF", cularr: "\u21B6", cularrp: "\u293D", Cup: "\u22D3", cup: "\u222A", cupbrcap: "\u2A48", CupCap: "\u224D", cupcap: "\u2A46", cupcup: "\u2A4A", cupdot: "\u228D", cupor: "\u2A45", cups: "\u222A\uFE00", curarr: "\u21B7", curarrm: "\u293C", curlyeqprec: "\u22DE", curlyeqsucc: "\u22DF", curlyvee: "\u22CE", curlywedge: "\u22CF", curren: "\xA4", curvearrowleft: "\u21B6", curvearrowright: "\u21B7", cuvee: "\u22CE", cuwed: "\u22CF", cwconint: "\u2232", cwint: "\u2231", cylcty: "\u232D", Dagger: "\u2021", dagger: "\u2020", daleth: "\u2138", Darr: "\u21A1", dArr: "\u21D3", darr: "\u2193", dash: "\u2010", Dashv: "\u2AE4", dashv: "\u22A3", dbkarow: "\u290F", dblac: "\u02DD", Dcaron: "\u010E", dcaron: "\u010F", Dcy: "\u0414", dcy: "\u0434", DD: "\u2145", dd: "\u2146", ddagger: "\u2021", ddarr: "\u21CA", DDotrahd: "\u2911", ddotseq: "\u2A77", deg: "\xB0", Del: "\u2207", Delta: "\u0394", delta: "\u03B4", demptyv: "\u29B1", dfisht: "\u297F", Dfr: "\u{1D507}", dfr: "\u{1D521}", dHar: "\u2965", dharl: "\u21C3", dharr: "\u21C2", DiacriticalAcute: "\xB4", DiacriticalDot: "\u02D9", DiacriticalDoubleAcute: "\u02DD", DiacriticalGrave: "`", DiacriticalTilde: "\u02DC", diam: "\u22C4", Diamond: "\u22C4", diamond: "\u22C4", diamondsuit: "\u2666", diams: "\u2666", die: "\xA8", DifferentialD: "\u2146", digamma: "\u03DD", disin: "\u22F2", div: "\xF7", divide: "\xF7", divideontimes: "\u22C7", divonx: "\u22C7", DJcy: "\u0402", djcy: "\u0452", dlcorn: "\u231E", dlcrop: "\u230D", dollar: "$", Dopf: "\u{1D53B}", dopf: "\u{1D555}", Dot: "\xA8", dot: "\u02D9", DotDot: "\u20DC", doteq: "\u2250", doteqdot: "\u2251", DotEqual: "\u2250", dotminus: "\u2238", dotplus: "\u2214", dotsquare: "\u22A1", doublebarwedge: "\u2306", DoubleContourIntegral: "\u222F", DoubleDot: "\xA8", DoubleDownArrow: "\u21D3", DoubleLeftArrow: "\u21D0", DoubleLeftRightArrow: "\u21D4", DoubleLeftTee: "\u2AE4", DoubleLongLeftArrow: "\u27F8", DoubleLongLeftRightArrow: "\u27FA", DoubleLongRightArrow: "\u27F9", DoubleRightArrow: "\u21D2", DoubleRightTee: "\u22A8", DoubleUpArrow: "\u21D1", DoubleUpDownArrow: "\u21D5", DoubleVerticalBar: "\u2225", DownArrow: "\u2193", Downarrow: "\u21D3", downarrow: "\u2193", DownArrowBar: "\u2913", DownArrowUpArrow: "\u21F5", DownBreve: "\u0311", downdownarrows: "\u21CA", downharpoonleft: "\u21C3", downharpoonright: "\u21C2", DownLeftRightVector: "\u2950", DownLeftTeeVector: "\u295E", DownLeftVector: "\u21BD", DownLeftVectorBar: "\u2956", DownRightTeeVector: "\u295F", DownRightVector: "\u21C1", DownRightVectorBar: "\u2957", DownTee: "\u22A4", DownTeeArrow: "\u21A7", drbkarow: "\u2910", drcorn: "\u231F", drcrop: "\u230C", Dscr: "\u{1D49F}", dscr: "\u{1D4B9}", DScy: "\u0405", dscy: "\u0455", dsol: "\u29F6", Dstrok: "\u0110", dstrok: "\u0111", dtdot: "\u22F1", dtri: "\u25BF", dtrif: "\u25BE", duarr: "\u21F5", duhar: "\u296F", dwangle: "\u29A6", DZcy: "\u040F", dzcy: "\u045F", dzigrarr: "\u27FF", Eacute: "\xC9", eacute: "\xE9", easter: "\u2A6E", Ecaron: "\u011A", ecaron: "\u011B", ecir: "\u2256", Ecirc: "\xCA", ecirc: "\xEA", ecolon: "\u2255", Ecy: "\u042D", ecy: "\u044D", eDDot: "\u2A77", Edot: "\u0116", eDot: "\u2251", edot: "\u0117", ee: "\u2147", efDot: "\u2252", Efr: "\u{1D508}", efr: "\u{1D522}", eg: "\u2A9A", Egrave: "\xC8", egrave: "\xE8", egs: "\u2A96", egsdot: "\u2A98", el: "\u2A99", Element: "\u2208", elinters: "\u23E7", ell: "\u2113", els: "\u2A95", elsdot: "\u2A97", Emacr: "\u0112", emacr: "\u0113", empty: "\u2205", emptyset: "\u2205", EmptySmallSquare: "\u25FB", emptyv: "\u2205", EmptyVerySmallSquare: "\u25AB", emsp: "\u2003", emsp13: "\u2004", emsp14: "\u2005", ENG: "\u014A", eng: "\u014B", ensp: "\u2002", Eogon: "\u0118", eogon: "\u0119", Eopf: "\u{1D53C}", eopf: "\u{1D556}", epar: "\u22D5", eparsl: "\u29E3", eplus: "\u2A71", epsi: "\u03B5", Epsilon: "\u0395", epsilon: "\u03B5", epsiv: "\u03F5", eqcirc: "\u2256", eqcolon: "\u2255", eqsim: "\u2242", eqslantgtr: "\u2A96", eqslantless: "\u2A95", Equal: "\u2A75", equals: "=", EqualTilde: "\u2242", equest: "\u225F", Equilibrium: "\u21CC", equiv: "\u2261", equivDD: "\u2A78", eqvparsl: "\u29E5", erarr: "\u2971", erDot: "\u2253", Escr: "\u2130", escr: "\u212F", esdot: "\u2250", Esim: "\u2A73", esim: "\u2242", Eta: "\u0397", eta: "\u03B7", ETH: "\xD0", eth: "\xF0", Euml: "\xCB", euml: "\xEB", euro: "\u20AC", excl: "!", exist: "\u2203", Exists: "\u2203", expectation: "\u2130", ExponentialE: "\u2147", exponentiale: "\u2147", fallingdotseq: "\u2252", Fcy: "\u0424", fcy: "\u0444", female: "\u2640", ffilig: "\uFB03", fflig: "\uFB00", ffllig: "\uFB04", Ffr: "\u{1D509}", ffr: "\u{1D523}", filig: "\uFB01", FilledSmallSquare: "\u25FC", FilledVerySmallSquare: "\u25AA", fjlig: "fj", flat: "\u266D", fllig: "\uFB02", fltns: "\u25B1", fnof: "\u0192", Fopf: "\u{1D53D}", fopf: "\u{1D557}", ForAll: "\u2200", forall: "\u2200", fork: "\u22D4", forkv: "\u2AD9", Fouriertrf: "\u2131", fpartint: "\u2A0D", frac12: "\xBD", frac13: "\u2153", frac14: "\xBC", frac15: "\u2155", frac16: "\u2159", frac18: "\u215B", frac23: "\u2154", frac25: "\u2156", frac34: "\xBE", frac35: "\u2157", frac38: "\u215C", frac45: "\u2158", frac56: "\u215A", frac58: "\u215D", frac78: "\u215E", frasl: "\u2044", frown: "\u2322", Fscr: "\u2131", fscr: "\u{1D4BB}", gacute: "\u01F5", Gamma: "\u0393", gamma: "\u03B3", Gammad: "\u03DC", gammad: "\u03DD", gap: "\u2A86", Gbreve: "\u011E", gbreve: "\u011F", Gcedil: "\u0122", Gcirc: "\u011C", gcirc: "\u011D", Gcy: "\u0413", gcy: "\u0433", Gdot: "\u0120", gdot: "\u0121", gE: "\u2267", ge: "\u2265", gEl: "\u2A8C", gel: "\u22DB", geq: "\u2265", geqq: "\u2267", geqslant: "\u2A7E", ges: "\u2A7E", gescc: "\u2AA9", gesdot: "\u2A80", gesdoto: "\u2A82", gesdotol: "\u2A84", gesl: "\u22DB\uFE00", gesles: "\u2A94", Gfr: "\u{1D50A}", gfr: "\u{1D524}", Gg: "\u22D9", gg: "\u226B", ggg: "\u22D9", gimel: "\u2137", GJcy: "\u0403", gjcy: "\u0453", gl: "\u2277", gla: "\u2AA5", glE: "\u2A92", glj: "\u2AA4", gnap: "\u2A8A", gnapprox: "\u2A8A", gnE: "\u2269", gne: "\u2A88", gneq: "\u2A88", gneqq: "\u2269", gnsim: "\u22E7", Gopf: "\u{1D53E}", gopf: "\u{1D558}", grave: "`", GreaterEqual: "\u2265", GreaterEqualLess: "\u22DB", GreaterFullEqual: "\u2267", GreaterGreater: "\u2AA2", GreaterLess: "\u2277", GreaterSlantEqual: "\u2A7E", GreaterTilde: "\u2273", Gscr: "\u{1D4A2}", gscr: "\u210A", gsim: "\u2273", gsime: "\u2A8E", gsiml: "\u2A90", GT: ">", Gt: "\u226B", gt: ">", gtcc: "\u2AA7", gtcir: "\u2A7A", gtdot: "\u22D7", gtlPar: "\u2995", gtquest: "\u2A7C", gtrapprox: "\u2A86", gtrarr: "\u2978", gtrdot: "\u22D7", gtreqless: "\u22DB", gtreqqless: "\u2A8C", gtrless: "\u2277", gtrsim: "\u2273", gvertneqq: "\u2269\uFE00", gvnE: "\u2269\uFE00", Hacek: "\u02C7", hairsp: "\u200A", half: "\xBD", hamilt: "\u210B", HARDcy: "\u042A", hardcy: "\u044A", hArr: "\u21D4", harr: "\u2194", harrcir: "\u2948", harrw: "\u21AD", Hat: "^", hbar: "\u210F", Hcirc: "\u0124", hcirc: "\u0125", hearts: "\u2665", heartsuit: "\u2665", hellip: "\u2026", hercon: "\u22B9", Hfr: "\u210C", hfr: "\u{1D525}", HilbertSpace: "\u210B", hksearow: "\u2925", hkswarow: "\u2926", hoarr: "\u21FF", homtht: "\u223B", hookleftarrow: "\u21A9", hookrightarrow: "\u21AA", Hopf: "\u210D", hopf: "\u{1D559}", horbar: "\u2015", HorizontalLine: "\u2500", Hscr: "\u210B", hscr: "\u{1D4BD}", hslash: "\u210F", Hstrok: "\u0126", hstrok: "\u0127", HumpDownHump: "\u224E", HumpEqual: "\u224F", hybull: "\u2043", hyphen: "\u2010", Iacute: "\xCD", iacute: "\xED", ic: "\u2063", Icirc: "\xCE", icirc: "\xEE", Icy: "\u0418", icy: "\u0438", Idot: "\u0130", IEcy: "\u0415", iecy: "\u0435", iexcl: "\xA1", iff: "\u21D4", Ifr: "\u2111", ifr: "\u{1D526}", Igrave: "\xCC", igrave: "\xEC", ii: "\u2148", iiiint: "\u2A0C", iiint: "\u222D", iinfin: "\u29DC", iiota: "\u2129", IJlig: "\u0132", ijlig: "\u0133", Im: "\u2111", Imacr: "\u012A", imacr: "\u012B", image: "\u2111", ImaginaryI: "\u2148", imagline: "\u2110", imagpart: "\u2111", imath: "\u0131", imof: "\u22B7", imped: "\u01B5", Implies: "\u21D2", in: "\u2208", incare: "\u2105", infin: "\u221E", infintie: "\u29DD", inodot: "\u0131", Int: "\u222C", int: "\u222B", intcal: "\u22BA", integers: "\u2124", Integral: "\u222B", intercal: "\u22BA", Intersection: "\u22C2", intlarhk: "\u2A17", intprod: "\u2A3C", InvisibleComma: "\u2063", InvisibleTimes: "\u2062", IOcy: "\u0401", iocy: "\u0451", Iogon: "\u012E", iogon: "\u012F", Iopf: "\u{1D540}", iopf: "\u{1D55A}", Iota: "\u0399", iota: "\u03B9", iprod: "\u2A3C", iquest: "\xBF", Iscr: "\u2110", iscr: "\u{1D4BE}", isin: "\u2208", isindot: "\u22F5", isinE: "\u22F9", isins: "\u22F4", isinsv: "\u22F3", isinv: "\u2208", it: "\u2062", Itilde: "\u0128", itilde: "\u0129", Iukcy: "\u0406", iukcy: "\u0456", Iuml: "\xCF", iuml: "\xEF", Jcirc: "\u0134", jcirc: "\u0135", Jcy: "\u0419", jcy: "\u0439", Jfr: "\u{1D50D}", jfr: "\u{1D527}", jmath: "\u0237", Jopf: "\u{1D541}", jopf: "\u{1D55B}", Jscr: "\u{1D4A5}", jscr: "\u{1D4BF}", Jsercy: "\u0408", jsercy: "\u0458", Jukcy: "\u0404", jukcy: "\u0454", Kappa: "\u039A", kappa: "\u03BA", kappav: "\u03F0", Kcedil: "\u0136", kcedil: "\u0137", Kcy: "\u041A", kcy: "\u043A", Kfr: "\u{1D50E}", kfr: "\u{1D528}", kgreen: "\u0138", KHcy: "\u0425", khcy: "\u0445", KJcy: "\u040C", kjcy: "\u045C", Kopf: "\u{1D542}", kopf: "\u{1D55C}", Kscr: "\u{1D4A6}", kscr: "\u{1D4C0}", lAarr: "\u21DA", Lacute: "\u0139", lacute: "\u013A", laemptyv: "\u29B4", lagran: "\u2112", Lambda: "\u039B", lambda: "\u03BB", Lang: "\u27EA", lang: "\u27E8", langd: "\u2991", langle: "\u27E8", lap: "\u2A85", Laplacetrf: "\u2112", laquo: "\xAB", Larr: "\u219E", lArr: "\u21D0", larr: "\u2190", larrb: "\u21E4", larrbfs: "\u291F", larrfs: "\u291D", larrhk: "\u21A9", larrlp: "\u21AB", larrpl: "\u2939", larrsim: "\u2973", larrtl: "\u21A2", lat: "\u2AAB", lAtail: "\u291B", latail: "\u2919", late: "\u2AAD", lates: "\u2AAD\uFE00", lBarr: "\u290E", lbarr: "\u290C", lbbrk: "\u2772", lbrace: "{", lbrack: "[", lbrke: "\u298B", lbrksld: "\u298F", lbrkslu: "\u298D", Lcaron: "\u013D", lcaron: "\u013E", Lcedil: "\u013B", lcedil: "\u013C", lceil: "\u2308", lcub: "{", Lcy: "\u041B", lcy: "\u043B", ldca: "\u2936", ldquo: "\u201C", ldquor: "\u201E", ldrdhar: "\u2967", ldrushar: "\u294B", ldsh: "\u21B2", lE: "\u2266", le: "\u2264", LeftAngleBracket: "\u27E8", LeftArrow: "\u2190", Leftarrow: "\u21D0", leftarrow: "\u2190", LeftArrowBar: "\u21E4", LeftArrowRightArrow: "\u21C6", leftarrowtail: "\u21A2", LeftCeiling: "\u2308", LeftDoubleBracket: "\u27E6", LeftDownTeeVector: "\u2961", LeftDownVector: "\u21C3", LeftDownVectorBar: "\u2959", LeftFloor: "\u230A", leftharpoondown: "\u21BD", leftharpoonup: "\u21BC", leftleftarrows: "\u21C7", LeftRightArrow: "\u2194", Leftrightarrow: "\u21D4", leftrightarrow: "\u2194", leftrightarrows: "\u21C6", leftrightharpoons: "\u21CB", leftrightsquigarrow: "\u21AD", LeftRightVector: "\u294E", LeftTee: "\u22A3", LeftTeeArrow: "\u21A4", LeftTeeVector: "\u295A", leftthreetimes: "\u22CB", LeftTriangle: "\u22B2", LeftTriangleBar: "\u29CF", LeftTriangleEqual: "\u22B4", LeftUpDownVector: "\u2951", LeftUpTeeVector: "\u2960", LeftUpVector: "\u21BF", LeftUpVectorBar: "\u2958", LeftVector: "\u21BC", LeftVectorBar: "\u2952", lEg: "\u2A8B", leg: "\u22DA", leq: "\u2264", leqq: "\u2266", leqslant: "\u2A7D", les: "\u2A7D", lescc: "\u2AA8", lesdot: "\u2A7F", lesdoto: "\u2A81", lesdotor: "\u2A83", lesg: "\u22DA\uFE00", lesges: "\u2A93", lessapprox: "\u2A85", lessdot: "\u22D6", lesseqgtr: "\u22DA", lesseqqgtr: "\u2A8B", LessEqualGreater: "\u22DA", LessFullEqual: "\u2266", LessGreater: "\u2276", lessgtr: "\u2276", LessLess: "\u2AA1", lesssim: "\u2272", LessSlantEqual: "\u2A7D", LessTilde: "\u2272", lfisht: "\u297C", lfloor: "\u230A", Lfr: "\u{1D50F}", lfr: "\u{1D529}", lg: "\u2276", lgE: "\u2A91", lHar: "\u2962", lhard: "\u21BD", lharu: "\u21BC", lharul: "\u296A", lhblk: "\u2584", LJcy: "\u0409", ljcy: "\u0459", Ll: "\u22D8", ll: "\u226A", llarr: "\u21C7", llcorner: "\u231E", Lleftarrow: "\u21DA", llhard: "\u296B", lltri: "\u25FA", Lmidot: "\u013F", lmidot: "\u0140", lmoust: "\u23B0", lmoustache: "\u23B0", lnap: "\u2A89", lnapprox: "\u2A89", lnE: "\u2268", lne: "\u2A87", lneq: "\u2A87", lneqq: "\u2268", lnsim: "\u22E6", loang: "\u27EC", loarr: "\u21FD", lobrk: "\u27E6", LongLeftArrow: "\u27F5", Longleftarrow: "\u27F8", longleftarrow: "\u27F5", LongLeftRightArrow: "\u27F7", Longleftrightarrow: "\u27FA", longleftrightarrow: "\u27F7", longmapsto: "\u27FC", LongRightArrow: "\u27F6", Longrightarrow: "\u27F9", longrightarrow: "\u27F6", looparrowleft: "\u21AB", looparrowright: "\u21AC", lopar: "\u2985", Lopf: "\u{1D543}", lopf: "\u{1D55D}", loplus: "\u2A2D", lotimes: "\u2A34", lowast: "\u2217", lowbar: "_", LowerLeftArrow: "\u2199", LowerRightArrow: "\u2198", loz: "\u25CA", lozenge: "\u25CA", lozf: "\u29EB", lpar: "(", lparlt: "\u2993", lrarr: "\u21C6", lrcorner: "\u231F", lrhar: "\u21CB", lrhard: "\u296D", lrm: "\u200E", lrtri: "\u22BF", lsaquo: "\u2039", Lscr: "\u2112", lscr: "\u{1D4C1}", Lsh: "\u21B0", lsh: "\u21B0", lsim: "\u2272", lsime: "\u2A8D", lsimg: "\u2A8F", lsqb: "[", lsquo: "\u2018", lsquor: "\u201A", Lstrok: "\u0141", lstrok: "\u0142", LT: "<", Lt: "\u226A", lt: "<", ltcc: "\u2AA6", ltcir: "\u2A79", ltdot: "\u22D6", lthree: "\u22CB", ltimes: "\u22C9", ltlarr: "\u2976", ltquest: "\u2A7B", ltri: "\u25C3", ltrie: "\u22B4", ltrif: "\u25C2", ltrPar: "\u2996", lurdshar: "\u294A", luruhar: "\u2966", lvertneqq: "\u2268\uFE00", lvnE: "\u2268\uFE00", macr: "\xAF", male: "\u2642", malt: "\u2720", maltese: "\u2720", Map: "\u2905", map: "\u21A6", mapsto: "\u21A6", mapstodown: "\u21A7", mapstoleft: "\u21A4", mapstoup: "\u21A5", marker: "\u25AE", mcomma: "\u2A29", Mcy: "\u041C", mcy: "\u043C", mdash: "\u2014", mDDot: "\u223A", measuredangle: "\u2221", MediumSpace: "\u205F", Mellintrf: "\u2133", Mfr: "\u{1D510}", mfr: "\u{1D52A}", mho: "\u2127", micro: "\xB5", mid: "\u2223", midast: "*", midcir: "\u2AF0", middot: "\xB7", minus: "\u2212", minusb: "\u229F", minusd: "\u2238", minusdu: "\u2A2A", MinusPlus: "\u2213", mlcp: "\u2ADB", mldr: "\u2026", mnplus: "\u2213", models: "\u22A7", Mopf: "\u{1D544}", mopf: "\u{1D55E}", mp: "\u2213", Mscr: "\u2133", mscr: "\u{1D4C2}", mstpos: "\u223E", Mu: "\u039C", mu: "\u03BC", multimap: "\u22B8", mumap: "\u22B8", nabla: "\u2207", Nacute: "\u0143", nacute: "\u0144", nang: "\u2220\u20D2", nap: "\u2249", napE: "\u2A70\u0338", napid: "\u224B\u0338", napos: "\u0149", napprox: "\u2249", natur: "\u266E", natural: "\u266E", naturals: "\u2115", nbsp: "\xA0", nbump: "\u224E\u0338", nbumpe: "\u224F\u0338", ncap: "\u2A43", Ncaron: "\u0147", ncaron: "\u0148", Ncedil: "\u0145", ncedil: "\u0146", ncong: "\u2247", ncongdot: "\u2A6D\u0338", ncup: "\u2A42", Ncy: "\u041D", ncy: "\u043D", ndash: "\u2013", ne: "\u2260", nearhk: "\u2924", neArr: "\u21D7", nearr: "\u2197", nearrow: "\u2197", nedot: "\u2250\u0338", NegativeMediumSpace: "\u200B", NegativeThickSpace: "\u200B", NegativeThinSpace: "\u200B", NegativeVeryThinSpace: "\u200B", nequiv: "\u2262", nesear: "\u2928", nesim: "\u2242\u0338", NestedGreaterGreater: "\u226B", NestedLessLess: "\u226A", NewLine: `
`, nexist: "\u2204", nexists: "\u2204", Nfr: "\u{1D511}", nfr: "\u{1D52B}", ngE: "\u2267\u0338", nge: "\u2271", ngeq: "\u2271", ngeqq: "\u2267\u0338", ngeqslant: "\u2A7E\u0338", nges: "\u2A7E\u0338", nGg: "\u22D9\u0338", ngsim: "\u2275", nGt: "\u226B\u20D2", ngt: "\u226F", ngtr: "\u226F", nGtv: "\u226B\u0338", nhArr: "\u21CE", nharr: "\u21AE", nhpar: "\u2AF2", ni: "\u220B", nis: "\u22FC", nisd: "\u22FA", niv: "\u220B", NJcy: "\u040A", njcy: "\u045A", nlArr: "\u21CD", nlarr: "\u219A", nldr: "\u2025", nlE: "\u2266\u0338", nle: "\u2270", nLeftarrow: "\u21CD", nleftarrow: "\u219A", nLeftrightarrow: "\u21CE", nleftrightarrow: "\u21AE", nleq: "\u2270", nleqq: "\u2266\u0338", nleqslant: "\u2A7D\u0338", nles: "\u2A7D\u0338", nless: "\u226E", nLl: "\u22D8\u0338", nlsim: "\u2274", nLt: "\u226A\u20D2", nlt: "\u226E", nltri: "\u22EA", nltrie: "\u22EC", nLtv: "\u226A\u0338", nmid: "\u2224", NoBreak: "\u2060", NonBreakingSpace: "\xA0", Nopf: "\u2115", nopf: "\u{1D55F}", Not: "\u2AEC", not: "\xAC", NotCongruent: "\u2262", NotCupCap: "\u226D", NotDoubleVerticalBar: "\u2226", NotElement: "\u2209", NotEqual: "\u2260", NotEqualTilde: "\u2242\u0338", NotExists: "\u2204", NotGreater: "\u226F", NotGreaterEqual: "\u2271", NotGreaterFullEqual: "\u2267\u0338", NotGreaterGreater: "\u226B\u0338", NotGreaterLess: "\u2279", NotGreaterSlantEqual: "\u2A7E\u0338", NotGreaterTilde: "\u2275", NotHumpDownHump: "\u224E\u0338", NotHumpEqual: "\u224F\u0338", notin: "\u2209", notindot: "\u22F5\u0338", notinE: "\u22F9\u0338", notinva: "\u2209", notinvb: "\u22F7", notinvc: "\u22F6", NotLeftTriangle: "\u22EA", NotLeftTriangleBar: "\u29CF\u0338", NotLeftTriangleEqual: "\u22EC", NotLess: "\u226E", NotLessEqual: "\u2270", NotLessGreater: "\u2278", NotLessLess: "\u226A\u0338", NotLessSlantEqual: "\u2A7D\u0338", NotLessTilde: "\u2274", NotNestedGreaterGreater: "\u2AA2\u0338", NotNestedLessLess: "\u2AA1\u0338", notni: "\u220C", notniva: "\u220C", notnivb: "\u22FE", notnivc: "\u22FD", NotPrecedes: "\u2280", NotPrecedesEqual: "\u2AAF\u0338", NotPrecedesSlantEqual: "\u22E0", NotReverseElement: "\u220C", NotRightTriangle: "\u22EB", NotRightTriangleBar: "\u29D0\u0338", NotRightTriangleEqual: "\u22ED", NotSquareSubset: "\u228F\u0338", NotSquareSubsetEqual: "\u22E2", NotSquareSuperset: "\u2290\u0338", NotSquareSupersetEqual: "\u22E3", NotSubset: "\u2282\u20D2", NotSubsetEqual: "\u2288", NotSucceeds: "\u2281", NotSucceedsEqual: "\u2AB0\u0338", NotSucceedsSlantEqual: "\u22E1", NotSucceedsTilde: "\u227F\u0338", NotSuperset: "\u2283\u20D2", NotSupersetEqual: "\u2289", NotTilde: "\u2241", NotTildeEqual: "\u2244", NotTildeFullEqual: "\u2247", NotTildeTilde: "\u2249", NotVerticalBar: "\u2224", npar: "\u2226", nparallel: "\u2226", nparsl: "\u2AFD\u20E5", npart: "\u2202\u0338", npolint: "\u2A14", npr: "\u2280", nprcue: "\u22E0", npre: "\u2AAF\u0338", nprec: "\u2280", npreceq: "\u2AAF\u0338", nrArr: "\u21CF", nrarr: "\u219B", nrarrc: "\u2933\u0338", nrarrw: "\u219D\u0338", nRightarrow: "\u21CF", nrightarrow: "\u219B", nrtri: "\u22EB", nrtrie: "\u22ED", nsc: "\u2281", nsccue: "\u22E1", nsce: "\u2AB0\u0338", Nscr: "\u{1D4A9}", nscr: "\u{1D4C3}", nshortmid: "\u2224", nshortparallel: "\u2226", nsim: "\u2241", nsime: "\u2244", nsimeq: "\u2244", nsmid: "\u2224", nspar: "\u2226", nsqsube: "\u22E2", nsqsupe: "\u22E3", nsub: "\u2284", nsubE: "\u2AC5\u0338", nsube: "\u2288", nsubset: "\u2282\u20D2", nsubseteq: "\u2288", nsubseteqq: "\u2AC5\u0338", nsucc: "\u2281", nsucceq: "\u2AB0\u0338", nsup: "\u2285", nsupE: "\u2AC6\u0338", nsupe: "\u2289", nsupset: "\u2283\u20D2", nsupseteq: "\u2289", nsupseteqq: "\u2AC6\u0338", ntgl: "\u2279", Ntilde: "\xD1", ntilde: "\xF1", ntlg: "\u2278", ntriangleleft: "\u22EA", ntrianglelefteq: "\u22EC", ntriangleright: "\u22EB", ntrianglerighteq: "\u22ED", Nu: "\u039D", nu: "\u03BD", num: "#", numero: "\u2116", numsp: "\u2007", nvap: "\u224D\u20D2", nVDash: "\u22AF", nVdash: "\u22AE", nvDash: "\u22AD", nvdash: "\u22AC", nvge: "\u2265\u20D2", nvgt: ">\u20D2", nvHarr: "\u2904", nvinfin: "\u29DE", nvlArr: "\u2902", nvle: "\u2264\u20D2", nvlt: "<\u20D2", nvltrie: "\u22B4\u20D2", nvrArr: "\u2903", nvrtrie: "\u22B5\u20D2", nvsim: "\u223C\u20D2", nwarhk: "\u2923", nwArr: "\u21D6", nwarr: "\u2196", nwarrow: "\u2196", nwnear: "\u2927", Oacute: "\xD3", oacute: "\xF3", oast: "\u229B", ocir: "\u229A", Ocirc: "\xD4", ocirc: "\xF4", Ocy: "\u041E", ocy: "\u043E", odash: "\u229D", Odblac: "\u0150", odblac: "\u0151", odiv: "\u2A38", odot: "\u2299", odsold: "\u29BC", OElig: "\u0152", oelig: "\u0153", ofcir: "\u29BF", Ofr: "\u{1D512}", ofr: "\u{1D52C}", ogon: "\u02DB", Ograve: "\xD2", ograve: "\xF2", ogt: "\u29C1", ohbar: "\u29B5", ohm: "\u03A9", oint: "\u222E", olarr: "\u21BA", olcir: "\u29BE", olcross: "\u29BB", oline: "\u203E", olt: "\u29C0", Omacr: "\u014C", omacr: "\u014D", Omega: "\u03A9", omega: "\u03C9", Omicron: "\u039F", omicron: "\u03BF", omid: "\u29B6", ominus: "\u2296", Oopf: "\u{1D546}", oopf: "\u{1D560}", opar: "\u29B7", OpenCurlyDoubleQuote: "\u201C", OpenCurlyQuote: "\u2018", operp: "\u29B9", oplus: "\u2295", Or: "\u2A54", or: "\u2228", orarr: "\u21BB", ord: "\u2A5D", order: "\u2134", orderof: "\u2134", ordf: "\xAA", ordm: "\xBA", origof: "\u22B6", oror: "\u2A56", orslope: "\u2A57", orv: "\u2A5B", oS: "\u24C8", Oscr: "\u{1D4AA}", oscr: "\u2134", Oslash: "\xD8", oslash: "\xF8", osol: "\u2298", Otilde: "\xD5", otilde: "\xF5", Otimes: "\u2A37", otimes: "\u2297", otimesas: "\u2A36", Ouml: "\xD6", ouml: "\xF6", ovbar: "\u233D", OverBar: "\u203E", OverBrace: "\u23DE", OverBracket: "\u23B4", OverParenthesis: "\u23DC", par: "\u2225", para: "\xB6", parallel: "\u2225", parsim: "\u2AF3", parsl: "\u2AFD", part: "\u2202", PartialD: "\u2202", Pcy: "\u041F", pcy: "\u043F", percnt: "%", period: ".", permil: "\u2030", perp: "\u22A5", pertenk: "\u2031", Pfr: "\u{1D513}", pfr: "\u{1D52D}", Phi: "\u03A6", phi: "\u03C6", phiv: "\u03D5", phmmat: "\u2133", phone: "\u260E", Pi: "\u03A0", pi: "\u03C0", pitchfork: "\u22D4", piv: "\u03D6", planck: "\u210F", planckh: "\u210E", plankv: "\u210F", plus: "+", plusacir: "\u2A23", plusb: "\u229E", pluscir: "\u2A22", plusdo: "\u2214", plusdu: "\u2A25", pluse: "\u2A72", PlusMinus: "\xB1", plusmn: "\xB1", plussim: "\u2A26", plustwo: "\u2A27", pm: "\xB1", Poincareplane: "\u210C", pointint: "\u2A15", Popf: "\u2119", popf: "\u{1D561}", pound: "\xA3", Pr: "\u2ABB", pr: "\u227A", prap: "\u2AB7", prcue: "\u227C", prE: "\u2AB3", pre: "\u2AAF", prec: "\u227A", precapprox: "\u2AB7", preccurlyeq: "\u227C", Precedes: "\u227A", PrecedesEqual: "\u2AAF", PrecedesSlantEqual: "\u227C", PrecedesTilde: "\u227E", preceq: "\u2AAF", precnapprox: "\u2AB9", precneqq: "\u2AB5", precnsim: "\u22E8", precsim: "\u227E", Prime: "\u2033", prime: "\u2032", primes: "\u2119", prnap: "\u2AB9", prnE: "\u2AB5", prnsim: "\u22E8", prod: "\u220F", Product: "\u220F", profalar: "\u232E", profline: "\u2312", profsurf: "\u2313", prop: "\u221D", Proportion: "\u2237", Proportional: "\u221D", propto: "\u221D", prsim: "\u227E", prurel: "\u22B0", Pscr: "\u{1D4AB}", pscr: "\u{1D4C5}", Psi: "\u03A8", psi: "\u03C8", puncsp: "\u2008", Qfr: "\u{1D514}", qfr: "\u{1D52E}", qint: "\u2A0C", Qopf: "\u211A", qopf: "\u{1D562}", qprime: "\u2057", Qscr: "\u{1D4AC}", qscr: "\u{1D4C6}", quaternions: "\u210D", quatint: "\u2A16", quest: "?", questeq: "\u225F", QUOT: '"', quot: '"', rAarr: "\u21DB", race: "\u223D\u0331", Racute: "\u0154", racute: "\u0155", radic: "\u221A", raemptyv: "\u29B3", Rang: "\u27EB", rang: "\u27E9", rangd: "\u2992", range: "\u29A5", rangle: "\u27E9", raquo: "\xBB", Rarr: "\u21A0", rArr: "\u21D2", rarr: "\u2192", rarrap: "\u2975", rarrb: "\u21E5", rarrbfs: "\u2920", rarrc: "\u2933", rarrfs: "\u291E", rarrhk: "\u21AA", rarrlp: "\u21AC", rarrpl: "\u2945", rarrsim: "\u2974", Rarrtl: "\u2916", rarrtl: "\u21A3", rarrw: "\u219D", rAtail: "\u291C", ratail: "\u291A", ratio: "\u2236", rationals: "\u211A", RBarr: "\u2910", rBarr: "\u290F", rbarr: "\u290D", rbbrk: "\u2773", rbrace: "}", rbrack: "]", rbrke: "\u298C", rbrksld: "\u298E", rbrkslu: "\u2990", Rcaron: "\u0158", rcaron: "\u0159", Rcedil: "\u0156", rcedil: "\u0157", rceil: "\u2309", rcub: "}", Rcy: "\u0420", rcy: "\u0440", rdca: "\u2937", rdldhar: "\u2969", rdquo: "\u201D", rdquor: "\u201D", rdsh: "\u21B3", Re: "\u211C", real: "\u211C", realine: "\u211B", realpart: "\u211C", reals: "\u211D", rect: "\u25AD", REG: "\xAE", reg: "\xAE", ReverseElement: "\u220B", ReverseEquilibrium: "\u21CB", ReverseUpEquilibrium: "\u296F", rfisht: "\u297D", rfloor: "\u230B", Rfr: "\u211C", rfr: "\u{1D52F}", rHar: "\u2964", rhard: "\u21C1", rharu: "\u21C0", rharul: "\u296C", Rho: "\u03A1", rho: "\u03C1", rhov: "\u03F1", RightAngleBracket: "\u27E9", RightArrow: "\u2192", Rightarrow: "\u21D2", rightarrow: "\u2192", RightArrowBar: "\u21E5", RightArrowLeftArrow: "\u21C4", rightarrowtail: "\u21A3", RightCeiling: "\u2309", RightDoubleBracket: "\u27E7", RightDownTeeVector: "\u295D", RightDownVector: "\u21C2", RightDownVectorBar: "\u2955", RightFloor: "\u230B", rightharpoondown: "\u21C1", rightharpoonup: "\u21C0", rightleftarrows: "\u21C4", rightleftharpoons: "\u21CC", rightrightarrows: "\u21C9", rightsquigarrow: "\u219D", RightTee: "\u22A2", RightTeeArrow: "\u21A6", RightTeeVector: "\u295B", rightthreetimes: "\u22CC", RightTriangle: "\u22B3", RightTriangleBar: "\u29D0", RightTriangleEqual: "\u22B5", RightUpDownVector: "\u294F", RightUpTeeVector: "\u295C", RightUpVector: "\u21BE", RightUpVectorBar: "\u2954", RightVector: "\u21C0", RightVectorBar: "\u2953", ring: "\u02DA", risingdotseq: "\u2253", rlarr: "\u21C4", rlhar: "\u21CC", rlm: "\u200F", rmoust: "\u23B1", rmoustache: "\u23B1", rnmid: "\u2AEE", roang: "\u27ED", roarr: "\u21FE", robrk: "\u27E7", ropar: "\u2986", Ropf: "\u211D", ropf: "\u{1D563}", roplus: "\u2A2E", rotimes: "\u2A35", RoundImplies: "\u2970", rpar: ")", rpargt: "\u2994", rppolint: "\u2A12", rrarr: "\u21C9", Rrightarrow: "\u21DB", rsaquo: "\u203A", Rscr: "\u211B", rscr: "\u{1D4C7}", Rsh: "\u21B1", rsh: "\u21B1", rsqb: "]", rsquo: "\u2019", rsquor: "\u2019", rthree: "\u22CC", rtimes: "\u22CA", rtri: "\u25B9", rtrie: "\u22B5", rtrif: "\u25B8", rtriltri: "\u29CE", RuleDelayed: "\u29F4", ruluhar: "\u2968", rx: "\u211E", Sacute: "\u015A", sacute: "\u015B", sbquo: "\u201A", Sc: "\u2ABC", sc: "\u227B", scap: "\u2AB8", Scaron: "\u0160", scaron: "\u0161", sccue: "\u227D", scE: "\u2AB4", sce: "\u2AB0", Scedil: "\u015E", scedil: "\u015F", Scirc: "\u015C", scirc: "\u015D", scnap: "\u2ABA", scnE: "\u2AB6", scnsim: "\u22E9", scpolint: "\u2A13", scsim: "\u227F", Scy: "\u0421", scy: "\u0441", sdot: "\u22C5", sdotb: "\u22A1", sdote: "\u2A66", searhk: "\u2925", seArr: "\u21D8", searr: "\u2198", searrow: "\u2198", sect: "\xA7", semi: ";", seswar: "\u2929", setminus: "\u2216", setmn: "\u2216", sext: "\u2736", Sfr: "\u{1D516}", sfr: "\u{1D530}", sfrown: "\u2322", sharp: "\u266F", SHCHcy: "\u0429", shchcy: "\u0449", SHcy: "\u0428", shcy: "\u0448", ShortDownArrow: "\u2193", ShortLeftArrow: "\u2190", shortmid: "\u2223", shortparallel: "\u2225", ShortRightArrow: "\u2192", ShortUpArrow: "\u2191", shy: "\xAD", Sigma: "\u03A3", sigma: "\u03C3", sigmaf: "\u03C2", sigmav: "\u03C2", sim: "\u223C", simdot: "\u2A6A", sime: "\u2243", simeq: "\u2243", simg: "\u2A9E", simgE: "\u2AA0", siml: "\u2A9D", simlE: "\u2A9F", simne: "\u2246", simplus: "\u2A24", simrarr: "\u2972", slarr: "\u2190", SmallCircle: "\u2218", smallsetminus: "\u2216", smashp: "\u2A33", smeparsl: "\u29E4", smid: "\u2223", smile: "\u2323", smt: "\u2AAA", smte: "\u2AAC", smtes: "\u2AAC\uFE00", SOFTcy: "\u042C", softcy: "\u044C", sol: "/", solb: "\u29C4", solbar: "\u233F", Sopf: "\u{1D54A}", sopf: "\u{1D564}", spades: "\u2660", spadesuit: "\u2660", spar: "\u2225", sqcap: "\u2293", sqcaps: "\u2293\uFE00", sqcup: "\u2294", sqcups: "\u2294\uFE00", Sqrt: "\u221A", sqsub: "\u228F", sqsube: "\u2291", sqsubset: "\u228F", sqsubseteq: "\u2291", sqsup: "\u2290", sqsupe: "\u2292", sqsupset: "\u2290", sqsupseteq: "\u2292", squ: "\u25A1", Square: "\u25A1", square: "\u25A1", SquareIntersection: "\u2293", SquareSubset: "\u228F", SquareSubsetEqual: "\u2291", SquareSuperset: "\u2290", SquareSupersetEqual: "\u2292", SquareUnion: "\u2294", squarf: "\u25AA", squf: "\u25AA", srarr: "\u2192", Sscr: "\u{1D4AE}", sscr: "\u{1D4C8}", ssetmn: "\u2216", ssmile: "\u2323", sstarf: "\u22C6", Star: "\u22C6", star: "\u2606", starf: "\u2605", straightepsilon: "\u03F5", straightphi: "\u03D5", strns: "\xAF", Sub: "\u22D0", sub: "\u2282", subdot: "\u2ABD", subE: "\u2AC5", sube: "\u2286", subedot: "\u2AC3", submult: "\u2AC1", subnE: "\u2ACB", subne: "\u228A", subplus: "\u2ABF", subrarr: "\u2979", Subset: "\u22D0", subset: "\u2282", subseteq: "\u2286", subseteqq: "\u2AC5", SubsetEqual: "\u2286", subsetneq: "\u228A", subsetneqq: "\u2ACB", subsim: "\u2AC7", subsub: "\u2AD5", subsup: "\u2AD3", succ: "\u227B", succapprox: "\u2AB8", succcurlyeq: "\u227D", Succeeds: "\u227B", SucceedsEqual: "\u2AB0", SucceedsSlantEqual: "\u227D", SucceedsTilde: "\u227F", succeq: "\u2AB0", succnapprox: "\u2ABA", succneqq: "\u2AB6", succnsim: "\u22E9", succsim: "\u227F", SuchThat: "\u220B", Sum: "\u2211", sum: "\u2211", sung: "\u266A", Sup: "\u22D1", sup: "\u2283", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", supdot: "\u2ABE", supdsub: "\u2AD8", supE: "\u2AC6", supe: "\u2287", supedot: "\u2AC4", Superset: "\u2283", SupersetEqual: "\u2287", suphsol: "\u27C9", suphsub: "\u2AD7", suplarr: "\u297B", supmult: "\u2AC2", supnE: "\u2ACC", supne: "\u228B", supplus: "\u2AC0", Supset: "\u22D1", supset: "\u2283", supseteq: "\u2287", supseteqq: "\u2AC6", supsetneq: "\u228B", supsetneqq: "\u2ACC", supsim: "\u2AC8", supsub: "\u2AD4", supsup: "\u2AD6", swarhk: "\u2926", swArr: "\u21D9", swarr: "\u2199", swarrow: "\u2199", swnwar: "\u292A", szlig: "\xDF", Tab: "	", target: "\u2316", Tau: "\u03A4", tau: "\u03C4", tbrk: "\u23B4", Tcaron: "\u0164", tcaron: "\u0165", Tcedil: "\u0162", tcedil: "\u0163", Tcy: "\u0422", tcy: "\u0442", tdot: "\u20DB", telrec: "\u2315", Tfr: "\u{1D517}", tfr: "\u{1D531}", there4: "\u2234", Therefore: "\u2234", therefore: "\u2234", Theta: "\u0398", theta: "\u03B8", thetasym: "\u03D1", thetav: "\u03D1", thickapprox: "\u2248", thicksim: "\u223C", ThickSpace: "\u205F\u200A", thinsp: "\u2009", ThinSpace: "\u2009", thkap: "\u2248", thksim: "\u223C", THORN: "\xDE", thorn: "\xFE", Tilde: "\u223C", tilde: "\u02DC", TildeEqual: "\u2243", TildeFullEqual: "\u2245", TildeTilde: "\u2248", times: "\xD7", timesb: "\u22A0", timesbar: "\u2A31", timesd: "\u2A30", tint: "\u222D", toea: "\u2928", top: "\u22A4", topbot: "\u2336", topcir: "\u2AF1", Topf: "\u{1D54B}", topf: "\u{1D565}", topfork: "\u2ADA", tosa: "\u2929", tprime: "\u2034", TRADE: "\u2122", trade: "\u2122", triangle: "\u25B5", triangledown: "\u25BF", triangleleft: "\u25C3", trianglelefteq: "\u22B4", triangleq: "\u225C", triangleright: "\u25B9", trianglerighteq: "\u22B5", tridot: "\u25EC", trie: "\u225C", triminus: "\u2A3A", TripleDot: "\u20DB", triplus: "\u2A39", trisb: "\u29CD", tritime: "\u2A3B", trpezium: "\u23E2", Tscr: "\u{1D4AF}", tscr: "\u{1D4C9}", TScy: "\u0426", tscy: "\u0446", TSHcy: "\u040B", tshcy: "\u045B", Tstrok: "\u0166", tstrok: "\u0167", twixt: "\u226C", twoheadleftarrow: "\u219E", twoheadrightarrow: "\u21A0", Uacute: "\xDA", uacute: "\xFA", Uarr: "\u219F", uArr: "\u21D1", uarr: "\u2191", Uarrocir: "\u2949", Ubrcy: "\u040E", ubrcy: "\u045E", Ubreve: "\u016C", ubreve: "\u016D", Ucirc: "\xDB", ucirc: "\xFB", Ucy: "\u0423", ucy: "\u0443", udarr: "\u21C5", Udblac: "\u0170", udblac: "\u0171", udhar: "\u296E", ufisht: "\u297E", Ufr: "\u{1D518}", ufr: "\u{1D532}", Ugrave: "\xD9", ugrave: "\xF9", uHar: "\u2963", uharl: "\u21BF", uharr: "\u21BE", uhblk: "\u2580", ulcorn: "\u231C", ulcorner: "\u231C", ulcrop: "\u230F", ultri: "\u25F8", Umacr: "\u016A", umacr: "\u016B", uml: "\xA8", UnderBar: "_", UnderBrace: "\u23DF", UnderBracket: "\u23B5", UnderParenthesis: "\u23DD", Union: "\u22C3", UnionPlus: "\u228E", Uogon: "\u0172", uogon: "\u0173", Uopf: "\u{1D54C}", uopf: "\u{1D566}", UpArrow: "\u2191", Uparrow: "\u21D1", uparrow: "\u2191", UpArrowBar: "\u2912", UpArrowDownArrow: "\u21C5", UpDownArrow: "\u2195", Updownarrow: "\u21D5", updownarrow: "\u2195", UpEquilibrium: "\u296E", upharpoonleft: "\u21BF", upharpoonright: "\u21BE", uplus: "\u228E", UpperLeftArrow: "\u2196", UpperRightArrow: "\u2197", Upsi: "\u03D2", upsi: "\u03C5", upsih: "\u03D2", Upsilon: "\u03A5", upsilon: "\u03C5", UpTee: "\u22A5", UpTeeArrow: "\u21A5", upuparrows: "\u21C8", urcorn: "\u231D", urcorner: "\u231D", urcrop: "\u230E", Uring: "\u016E", uring: "\u016F", urtri: "\u25F9", Uscr: "\u{1D4B0}", uscr: "\u{1D4CA}", utdot: "\u22F0", Utilde: "\u0168", utilde: "\u0169", utri: "\u25B5", utrif: "\u25B4", uuarr: "\u21C8", Uuml: "\xDC", uuml: "\xFC", uwangle: "\u29A7", vangrt: "\u299C", varepsilon: "\u03F5", varkappa: "\u03F0", varnothing: "\u2205", varphi: "\u03D5", varpi: "\u03D6", varpropto: "\u221D", vArr: "\u21D5", varr: "\u2195", varrho: "\u03F1", varsigma: "\u03C2", varsubsetneq: "\u228A\uFE00", varsubsetneqq: "\u2ACB\uFE00", varsupsetneq: "\u228B\uFE00", varsupsetneqq: "\u2ACC\uFE00", vartheta: "\u03D1", vartriangleleft: "\u22B2", vartriangleright: "\u22B3", Vbar: "\u2AEB", vBar: "\u2AE8", vBarv: "\u2AE9", Vcy: "\u0412", vcy: "\u0432", VDash: "\u22AB", Vdash: "\u22A9", vDash: "\u22A8", vdash: "\u22A2", Vdashl: "\u2AE6", Vee: "\u22C1", vee: "\u2228", veebar: "\u22BB", veeeq: "\u225A", vellip: "\u22EE", Verbar: "\u2016", verbar: "|", Vert: "\u2016", vert: "|", VerticalBar: "\u2223", VerticalLine: "|", VerticalSeparator: "\u2758", VerticalTilde: "\u2240", VeryThinSpace: "\u200A", Vfr: "\u{1D519}", vfr: "\u{1D533}", vltri: "\u22B2", vnsub: "\u2282\u20D2", vnsup: "\u2283\u20D2", Vopf: "\u{1D54D}", vopf: "\u{1D567}", vprop: "\u221D", vrtri: "\u22B3", Vscr: "\u{1D4B1}", vscr: "\u{1D4CB}", vsubnE: "\u2ACB\uFE00", vsubne: "\u228A\uFE00", vsupnE: "\u2ACC\uFE00", vsupne: "\u228B\uFE00", Vvdash: "\u22AA", vzigzag: "\u299A", Wcirc: "\u0174", wcirc: "\u0175", wedbar: "\u2A5F", Wedge: "\u22C0", wedge: "\u2227", wedgeq: "\u2259", weierp: "\u2118", Wfr: "\u{1D51A}", wfr: "\u{1D534}", Wopf: "\u{1D54E}", wopf: "\u{1D568}", wp: "\u2118", wr: "\u2240", wreath: "\u2240", Wscr: "\u{1D4B2}", wscr: "\u{1D4CC}", xcap: "\u22C2", xcirc: "\u25EF", xcup: "\u22C3", xdtri: "\u25BD", Xfr: "\u{1D51B}", xfr: "\u{1D535}", xhArr: "\u27FA", xharr: "\u27F7", Xi: "\u039E", xi: "\u03BE", xlArr: "\u27F8", xlarr: "\u27F5", xmap: "\u27FC", xnis: "\u22FB", xodot: "\u2A00", Xopf: "\u{1D54F}", xopf: "\u{1D569}", xoplus: "\u2A01", xotime: "\u2A02", xrArr: "\u27F9", xrarr: "\u27F6", Xscr: "\u{1D4B3}", xscr: "\u{1D4CD}", xsqcup: "\u2A06", xuplus: "\u2A04", xutri: "\u25B3", xvee: "\u22C1", xwedge: "\u22C0", Yacute: "\xDD", yacute: "\xFD", YAcy: "\u042F", yacy: "\u044F", Ycirc: "\u0176", ycirc: "\u0177", Ycy: "\u042B", ycy: "\u044B", yen: "\xA5", Yfr: "\u{1D51C}", yfr: "\u{1D536}", YIcy: "\u0407", yicy: "\u0457", Yopf: "\u{1D550}", yopf: "\u{1D56A}", Yscr: "\u{1D4B4}", yscr: "\u{1D4CE}", YUcy: "\u042E", yucy: "\u044E", Yuml: "\u0178", yuml: "\xFF", Zacute: "\u0179", zacute: "\u017A", Zcaron: "\u017D", zcaron: "\u017E", Zcy: "\u0417", zcy: "\u0437", Zdot: "\u017B", zdot: "\u017C", zeetrf: "\u2128", ZeroWidthSpace: "\u200B", Zeta: "\u0396", zeta: "\u03B6", Zfr: "\u2128", zfr: "\u{1D537}", ZHcy: "\u0416", zhcy: "\u0436", zigrarr: "\u21DD", Zopf: "\u2124", zopf: "\u{1D56B}", Zscr: "\u{1D4B5}", zscr: "\u{1D4CF}", zwj: "\u200D", zwnj: "\u200C" }, h.NGSP_UNICODE = "\uE500", h.NAMED_ENTITIES.ngsp = h.NGSP_UNICODE;
    });
    /**
    * @license
    * Copyright Google Inc. All Rights Reserved.
    *
    * Use of this source code is governed by an MIT-style license that can be
    * found in the LICENSE file at https://angular.io/license
    */
    var Me = /* @__PURE__ */ function() {
      function E() {
        var h = this, g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, m = g.closedByChildren, C = g.implicitNamespacePrefix, T = g.contentType, L = T === void 0 ? vr.TagContentType.PARSABLE_DATA : T, j = g.closedByParent, Q = j === void 0 ? !1 : j, pe = g.isVoid, de = pe === void 0 ? !1 : pe, z = g.ignoreFirstLf, V = z === void 0 ? !1 : z;
        se(this, E), this.closedByChildren = {}, this.closedByParent = !1, this.canSelfClose = !1, m && m.length > 0 && m.forEach(function(J) {
          return h.closedByChildren[J] = !0;
        }), this.isVoid = de, this.closedByParent = Q || de, this.implicitNamespacePrefix = C || null, this.contentType = L, this.ignoreFirstLf = V;
      }
      return ce(E, [{ key: "isClosedByChild", value: function(g) {
        return this.isVoid || g.toLowerCase() in this.closedByChildren;
      } }]), E;
    }(), Kc = Me, hi, Un, Qc = function(h) {
      return Un || (hi = new Me(), Un = { base: new Me({ isVoid: !0 }), meta: new Me({ isVoid: !0 }), area: new Me({ isVoid: !0 }), embed: new Me({ isVoid: !0 }), link: new Me({ isVoid: !0 }), img: new Me({ isVoid: !0 }), input: new Me({ isVoid: !0 }), param: new Me({ isVoid: !0 }), hr: new Me({ isVoid: !0 }), br: new Me({ isVoid: !0 }), source: new Me({ isVoid: !0 }), track: new Me({ isVoid: !0 }), wbr: new Me({ isVoid: !0 }), p: new Me({ closedByChildren: ["address", "article", "aside", "blockquote", "div", "dl", "fieldset", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "main", "nav", "ol", "p", "pre", "section", "table", "ul"], closedByParent: !0 }), thead: new Me({ closedByChildren: ["tbody", "tfoot"] }), tbody: new Me({ closedByChildren: ["tbody", "tfoot"], closedByParent: !0 }), tfoot: new Me({ closedByChildren: ["tbody"], closedByParent: !0 }), tr: new Me({ closedByChildren: ["tr"], closedByParent: !0 }), td: new Me({ closedByChildren: ["td", "th"], closedByParent: !0 }), th: new Me({ closedByChildren: ["td", "th"], closedByParent: !0 }), col: new Me({ isVoid: !0 }), svg: new Me({ implicitNamespacePrefix: "svg" }), math: new Me({ implicitNamespacePrefix: "math" }), li: new Me({ closedByChildren: ["li"], closedByParent: !0 }), dt: new Me({ closedByChildren: ["dt", "dd"] }), dd: new Me({ closedByChildren: ["dt", "dd"], closedByParent: !0 }), rb: new Me({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: !0 }), rt: new Me({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: !0 }), rtc: new Me({ closedByChildren: ["rb", "rtc", "rp"], closedByParent: !0 }), rp: new Me({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: !0 }), optgroup: new Me({ closedByChildren: ["optgroup"], closedByParent: !0 }), option: new Me({ closedByChildren: ["option", "optgroup"], closedByParent: !0 }), pre: new Me({ ignoreFirstLf: !0 }), listing: new Me({ ignoreFirstLf: !0 }), style: new Me({ contentType: vr.TagContentType.RAW_TEXT }), script: new Me({ contentType: vr.TagContentType.RAW_TEXT }), title: new Me({ contentType: vr.TagContentType.ESCAPABLE_RAW_TEXT }), textarea: new Me({ contentType: vr.TagContentType.ESCAPABLE_RAW_TEXT, ignoreFirstLf: !0 }) }), Un[h] || hi;
    }, en = Object.defineProperty({ HtmlTagDefinition: Kc, getHtmlTagDefinition: Qc }, "__esModule", { value: !0 }), Tf = /* @__PURE__ */ function() {
      function E(h) {
        var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1;
        se(this, E), this.path = h, this.position = g;
      }
      return ce(E, [{ key: "empty", get: function() {
        return !this.path || !this.path.length;
      } }, { key: "head", get: function() {
        return this.path[0];
      } }, { key: "tail", get: function() {
        return this.path[this.path.length - 1];
      } }, { key: "parentOf", value: function(g) {
        return g && this.path[this.path.indexOf(g) - 1];
      } }, { key: "childOf", value: function(g) {
        return this.path[this.path.indexOf(g) + 1];
      } }, { key: "first", value: function(g) {
        for (var m = this.path.length - 1; m >= 0; m--) {
          var C = this.path[m];
          if (C instanceof g)
            return C;
        }
      } }, { key: "push", value: function(g) {
        this.path.push(g);
      } }, { key: "pop", value: function() {
        return this.path.pop();
      } }]), E;
    }(), xf = Object.defineProperty({ AstPath: Tf }, "__esModule", { value: !0 }), _o = /* @__PURE__ */ function() {
      function E(h, g, m) {
        se(this, E), this.value = h, this.sourceSpan = g, this.i18n = m, this.type = "text";
      }
      return ce(E, [{ key: "visit", value: function(g, m) {
        return g.visitText(this, m);
      } }]), E;
    }(), Di = /* @__PURE__ */ function() {
      function E(h, g) {
        se(this, E), this.value = h, this.sourceSpan = g, this.type = "cdata";
      }
      return ce(E, [{ key: "visit", value: function(g, m) {
        return g.visitCdata(this, m);
      } }]), E;
    }(), Zc = /* @__PURE__ */ function() {
      function E(h, g, m, C, T, L) {
        se(this, E), this.switchValue = h, this.type = g, this.cases = m, this.sourceSpan = C, this.switchValueSourceSpan = T, this.i18n = L;
      }
      return ce(E, [{ key: "visit", value: function(g, m) {
        return g.visitExpansion(this, m);
      } }]), E;
    }(), _c = /* @__PURE__ */ function() {
      function E(h, g, m, C, T) {
        se(this, E), this.value = h, this.expression = g, this.sourceSpan = m, this.valueSourceSpan = C, this.expSourceSpan = T;
      }
      return ce(E, [{ key: "visit", value: function(g, m) {
        return g.visitExpansionCase(this, m);
      } }]), E;
    }(), ea = /* @__PURE__ */ function() {
      function E(h, g, m) {
        var C = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, T = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null, L = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null;
        se(this, E), this.name = h, this.value = g, this.sourceSpan = m, this.valueSpan = C, this.nameSpan = T, this.i18n = L, this.type = "attribute";
      }
      return ce(E, [{ key: "visit", value: function(g, m) {
        return g.visitAttribute(this, m);
      } }]), E;
    }(), es = /* @__PURE__ */ function() {
      function E(h, g, m, C) {
        var T = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null, L = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null, j = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null, Q = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : null;
        se(this, E), this.name = h, this.attrs = g, this.children = m, this.sourceSpan = C, this.startSourceSpan = T, this.endSourceSpan = L, this.nameSpan = j, this.i18n = Q, this.type = "element";
      }
      return ce(E, [{ key: "visit", value: function(g, m) {
        return g.visitElement(this, m);
      } }]), E;
    }(), el = es, rs = /* @__PURE__ */ function() {
      function E(h, g) {
        se(this, E), this.value = h, this.sourceSpan = g, this.type = "comment";
      }
      return ce(E, [{ key: "visit", value: function(g, m) {
        return g.visitComment(this, m);
      } }]), E;
    }(), ts = /* @__PURE__ */ function() {
      function E(h, g) {
        se(this, E), this.value = h, this.sourceSpan = g, this.type = "docType";
      }
      return ce(E, [{ key: "visit", value: function(g, m) {
        return g.visitDocType(this, m);
      } }]), E;
    }();
    function Du(E, h) {
      var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, m = [], C = E.visit ? function(T) {
        return E.visit(T, g) || T.visit(E, g);
      } : function(T) {
        return T.visit(E, g);
      };
      return h.forEach(function(T) {
        var L = C(T);
        L && m.push(L);
      }), m;
    }
    var wf = Du, gi = /* @__PURE__ */ function() {
      function E() {
        se(this, E);
      }
      return ce(E, [{ key: "visitElement", value: function(g, m) {
        this.visitChildren(m, function(C) {
          C(g.attrs), C(g.children);
        });
      } }, { key: "visitAttribute", value: function(g, m) {
      } }, { key: "visitText", value: function(g, m) {
      } }, { key: "visitCdata", value: function(g, m) {
      } }, { key: "visitComment", value: function(g, m) {
      } }, { key: "visitDocType", value: function(g, m) {
      } }, { key: "visitExpansion", value: function(g, m) {
        return this.visitChildren(m, function(C) {
          C(g.cases);
        });
      } }, { key: "visitExpansionCase", value: function(g, m) {
      } }, { key: "visitChildren", value: function(g, m) {
        var C = [], T = this;
        return m(function(L) {
          L && C.push(Du(T, L, g));
        }), Array.prototype.concat.apply([], C);
      } }]), E;
    }(), rl = gi;
    function Tt(E) {
      var h = E.sourceSpan.start.offset, g = E.sourceSpan.end.offset;
      return E instanceof es && (E.endSourceSpan ? g = E.endSourceSpan.end.offset : E.children && E.children.length && (g = Tt(E.children[E.children.length - 1]).end)), { start: h, end: g };
    }
    var fe = function(h, g) {
      var m = [];
      return Du(new (/* @__PURE__ */ function(C) {
        br(L, C);
        var T = Fr(L);
        function L() {
          return se(this, L), T.apply(this, arguments);
        }
        return ce(L, [{ key: "visit", value: function(Q, pe) {
          var de = Tt(Q);
          if (!(de.start <= g && g < de.end))
            return !0;
          m.push(Q);
        } }]), L;
      }(gi))(), h), new xf.AstPath(m, g);
    }, xt = Object.defineProperty({ Text: _o, CDATA: Di, Expansion: Zc, ExpansionCase: _c, Attribute: ea, Element: el, Comment: rs, DocType: ts, visitAll: wf, RecursiveVisitor: rl, findNode: fe }, "__esModule", { value: !0 }), tl = function(h, g) {
      if (g != null) {
        if (!Array.isArray(g))
          throw new Error("Expected '".concat(h, "' to be an array of strings."));
        for (var m = 0; m < g.length; m += 1)
          if (typeof g[m] != "string")
            throw new Error("Expected '".concat(h, "' to be an array of strings."));
      }
    }, Bf = [/^\s*$/, /[<>]/, /^[{}]$/, /&(#|[a-z])/i, /^\/\//], ns = function(h, g) {
      if (!(g == null || Array.isArray(g) && g.length == 2))
        throw new Error("Expected '".concat(h, "' to be an array, [start, end]."));
      if (g != null) {
        var m = g[0], C = g[1];
        Bf.forEach(function(T) {
          if (T.test(m) || T.test(C))
            throw new Error("['".concat(m, "', '").concat(C, "'] contains unusable interpolation symbol."));
        });
      }
    }, mi = Object.defineProperty({ assertArrayOfStrings: tl, assertInterpolationSymbols: ns }, "__esModule", { value: !0 }), us = U(function(E, h) {
      /**
      * @license
      * Copyright Google Inc. All Rights Reserved.
      *
      * Use of this source code is governed by an MIT-style license that can be
      * found in the LICENSE file at https://angular.io/license
      */
      Object.defineProperty(h, "__esModule", { value: !0 });
      var g = /* @__PURE__ */ function() {
        function m(C, T) {
          se(this, m), this.start = C, this.end = T;
        }
        return ce(m, null, [{ key: "fromArray", value: function(T) {
          return T ? (mi.assertInterpolationSymbols("interpolation", T), new m(T[0], T[1])) : h.DEFAULT_INTERPOLATION_CONFIG;
        } }]), m;
      }();
      h.InterpolationConfig = g, h.DEFAULT_INTERPOLATION_CONFIG = new g("{{", "}}");
    }), Ue = U(function(E, h) {
      /**
      * @license
      * Copyright Google Inc. All Rights Reserved.
      *
      * Use of this source code is governed by an MIT-style license that can be
      * found in the LICENSE file at https://angular.io/license
      */
      Object.defineProperty(h, "__esModule", { value: !0 });
      var g = re, m;
      (function(G) {
        G[G.TAG_OPEN_START = 0] = "TAG_OPEN_START", G[G.TAG_OPEN_END = 1] = "TAG_OPEN_END", G[G.TAG_OPEN_END_VOID = 2] = "TAG_OPEN_END_VOID", G[G.TAG_CLOSE = 3] = "TAG_CLOSE", G[G.TEXT = 4] = "TEXT", G[G.ESCAPABLE_RAW_TEXT = 5] = "ESCAPABLE_RAW_TEXT", G[G.RAW_TEXT = 6] = "RAW_TEXT", G[G.COMMENT_START = 7] = "COMMENT_START", G[G.COMMENT_END = 8] = "COMMENT_END", G[G.CDATA_START = 9] = "CDATA_START", G[G.CDATA_END = 10] = "CDATA_END", G[G.ATTR_NAME = 11] = "ATTR_NAME", G[G.ATTR_QUOTE = 12] = "ATTR_QUOTE", G[G.ATTR_VALUE = 13] = "ATTR_VALUE", G[G.DOC_TYPE_START = 14] = "DOC_TYPE_START", G[G.DOC_TYPE_END = 15] = "DOC_TYPE_END", G[G.EXPANSION_FORM_START = 16] = "EXPANSION_FORM_START", G[G.EXPANSION_CASE_VALUE = 17] = "EXPANSION_CASE_VALUE", G[G.EXPANSION_CASE_EXP_START = 18] = "EXPANSION_CASE_EXP_START", G[G.EXPANSION_CASE_EXP_END = 19] = "EXPANSION_CASE_EXP_END", G[G.EXPANSION_FORM_END = 20] = "EXPANSION_FORM_END", G[G.EOF = 21] = "EOF";
      })(m = h.TokenType || (h.TokenType = {}));
      var C = /* @__PURE__ */ ce(function G(Y, P, W) {
        se(this, G), this.type = Y, this.parts = P, this.sourceSpan = W;
      });
      h.Token = C;
      var T = /* @__PURE__ */ function(G) {
        br(P, G);
        var Y = Fr(P);
        function P(W, te, ie) {
          var Ie;
          return se(this, P), Ie = Y.call(this, ie, W), Ie.tokenType = te, Ie;
        }
        return ce(P);
      }(ar.ParseError);
      h.TokenError = T;
      var L = /* @__PURE__ */ ce(function G(Y, P) {
        se(this, G), this.tokens = Y, this.errors = P;
      });
      h.TokenizeResult = L, h.tokenize = function(G, Y, P) {
        var W = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        return new z(new ar.ParseSourceFile(G, Y), P, W).tokenize();
      };
      var j = /\r\n?/g;
      function Q(G) {
        var Y = G === g.$EOF ? "EOF" : String.fromCharCode(G);
        return 'Unexpected character "'.concat(Y, '"');
      }
      function pe(G) {
        return 'Unknown entity "'.concat(G, '" - use the "&#<decimal>;" or  "&#x<hex>;" syntax');
      }
      var de = /* @__PURE__ */ ce(function G(Y) {
        se(this, G), this.error = Y;
      }), z = /* @__PURE__ */ function() {
        function G(Y, P, W) {
          se(this, G), this._getTagContentType = P, this._currentTokenStart = null, this._currentTokenType = null, this._expansionCaseStack = [], this._inInterpolation = !1, this._fullNameStack = [], this.tokens = [], this.errors = [], this._tokenizeIcu = W.tokenizeExpansionForms || !1, this._interpolationConfig = W.interpolationConfig || us.DEFAULT_INTERPOLATION_CONFIG, this._leadingTriviaCodePoints = W.leadingTriviaChars && W.leadingTriviaChars.map(function(ie) {
            return ie.codePointAt(0) || 0;
          }), this._canSelfClose = W.canSelfClose || !1, this._allowHtmComponentClosingTags = W.allowHtmComponentClosingTags || !1;
          var te = W.range || { endPos: Y.content.length, startPos: 0, startLine: 0, startCol: 0 };
          this._cursor = W.escapedString ? new xe(Y, te) : new me(Y, te);
          try {
            this._cursor.init();
          } catch (ie) {
            this.handleError(ie);
          }
        }
        return ce(G, [{ key: "_processCarriageReturns", value: function(P) {
          return P.replace(j, `
`);
        } }, { key: "tokenize", value: function() {
          for (; this._cursor.peek() !== g.$EOF; ) {
            var P = this._cursor.clone();
            try {
              if (this._attemptCharCode(g.$LT))
                if (this._attemptCharCode(g.$BANG))
                  this._attemptStr("[CDATA[") ? this._consumeCdata(P) : this._attemptStr("--") ? this._consumeComment(P) : this._attemptStrCaseInsensitive("doctype") ? this._consumeDocType(P) : this._consumeBogusComment(P);
                else if (this._attemptCharCode(g.$SLASH))
                  this._consumeTagClose(P);
                else {
                  var W = this._cursor.clone();
                  this._attemptCharCode(g.$QUESTION) ? (this._cursor = W, this._consumeBogusComment(P)) : this._consumeTagOpen(P);
                }
              else
                this._tokenizeIcu && this._tokenizeExpansionForm() || this._consumeText();
            } catch (te) {
              this.handleError(te);
            }
          }
          return this._beginToken(m.EOF), this._endToken([]), new L(function(te) {
            for (var ie = [], Ie, je = 0; je < te.length; je++) {
              var Xe = te[je];
              Ie && Ie.type == m.TEXT && Xe.type == m.TEXT ? (Ie.parts[0] += Xe.parts[0], Ie.sourceSpan.end = Xe.sourceSpan.end) : (Ie = Xe, ie.push(Ie));
            }
            return ie;
          }(this.tokens), this.errors);
        } }, { key: "_tokenizeExpansionForm", value: function() {
          if (this.isExpansionFormStart())
            return this._consumeExpansionFormStart(), !0;
          if (((P = this._cursor.peek()) === g.$EQ || g.isAsciiLetter(P) || g.isDigit(P)) && this._isInExpansionForm())
            return this._consumeExpansionCaseStart(), !0;
          var P;
          if (this._cursor.peek() === g.$RBRACE) {
            if (this._isInExpansionCase())
              return this._consumeExpansionCaseEnd(), !0;
            if (this._isInExpansionForm())
              return this._consumeExpansionFormEnd(), !0;
          }
          return !1;
        } }, { key: "_beginToken", value: function(P) {
          var W = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._cursor.clone();
          this._currentTokenStart = W, this._currentTokenType = P;
        } }, { key: "_endToken", value: function(P) {
          var W = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._cursor.clone();
          if (this._currentTokenStart === null)
            throw new T("Programming error - attempted to end a token when there was no start to the token", this._currentTokenType, this._cursor.getSpan(W));
          if (this._currentTokenType === null)
            throw new T("Programming error - attempted to end a token which has no token type", null, this._cursor.getSpan(this._currentTokenStart));
          var te = new C(this._currentTokenType, P, this._cursor.getSpan(this._currentTokenStart, this._leadingTriviaCodePoints));
          return this.tokens.push(te), this._currentTokenStart = null, this._currentTokenType = null, te;
        } }, { key: "_createError", value: function(P, W) {
          this._isInExpansionForm() && (P += ` (Do you have an unescaped "{" in your template? Use "{{ '{' }}") to escape it.)`);
          var te = new T(P, this._currentTokenType, W);
          return this._currentTokenStart = null, this._currentTokenType = null, new de(te);
        } }, { key: "handleError", value: function(P) {
          if (P instanceof Be && (P = this._createError(P.msg, this._cursor.getSpan(P.cursor))), !(P instanceof de))
            throw P;
          this.errors.push(P.error);
        } }, { key: "_attemptCharCode", value: function(P) {
          return this._cursor.peek() === P && (this._cursor.advance(), !0);
        } }, { key: "_attemptCharCodeCaseInsensitive", value: function(P) {
          return W = this._cursor.peek(), te = P, ge(W) == ge(te) && (this._cursor.advance(), !0);
          var W, te;
        } }, { key: "_requireCharCode", value: function(P) {
          var W = this._cursor.clone();
          if (!this._attemptCharCode(P))
            throw this._createError(Q(this._cursor.peek()), this._cursor.getSpan(W));
        } }, { key: "_attemptStr", value: function(P) {
          var W = P.length;
          if (this._cursor.charsLeft() < W)
            return !1;
          for (var te = this._cursor.clone(), ie = 0; ie < W; ie++)
            if (!this._attemptCharCode(P.charCodeAt(ie)))
              return this._cursor = te, !1;
          return !0;
        } }, { key: "_attemptStrCaseInsensitive", value: function(P) {
          for (var W = 0; W < P.length; W++)
            if (!this._attemptCharCodeCaseInsensitive(P.charCodeAt(W)))
              return !1;
          return !0;
        } }, { key: "_requireStr", value: function(P) {
          var W = this._cursor.clone();
          if (!this._attemptStr(P))
            throw this._createError(Q(this._cursor.peek()), this._cursor.getSpan(W));
        } }, { key: "_requireStrCaseInsensitive", value: function(P) {
          var W = this._cursor.clone();
          if (!this._attemptStrCaseInsensitive(P))
            throw this._createError(Q(this._cursor.peek()), this._cursor.getSpan(W));
        } }, { key: "_attemptCharCodeUntilFn", value: function(P) {
          for (; !P(this._cursor.peek()); )
            this._cursor.advance();
        } }, { key: "_requireCharCodeUntilFn", value: function(P, W) {
          var te = this._cursor.clone();
          if (this._attemptCharCodeUntilFn(P), this._cursor.clone().diff(te) < W)
            throw this._createError(Q(this._cursor.peek()), this._cursor.getSpan(te));
        } }, { key: "_attemptUntilChar", value: function(P) {
          for (; this._cursor.peek() !== P; )
            this._cursor.advance();
        } }, { key: "_readChar", value: function(P) {
          if (P && this._cursor.peek() === g.$AMPERSAND)
            return this._decodeEntity();
          {
            var W = String.fromCodePoint(this._cursor.peek());
            return this._cursor.advance(), W;
          }
        } }, { key: "_decodeEntity", value: function() {
          var P = this._cursor.clone();
          if (this._cursor.advance(), !this._attemptCharCode(g.$HASH)) {
            var W = this._cursor.clone();
            if (this._attemptCharCodeUntilFn(ee), this._cursor.peek() != g.$SEMICOLON)
              return this._cursor = W, "&";
            var te = this._cursor.getChars(W);
            this._cursor.advance();
            var ie = vr.NAMED_ENTITIES[te];
            if (!ie)
              throw this._createError(pe(te), this._cursor.getSpan(P));
            return ie;
          }
          {
            var Ie = this._attemptCharCode(g.$x) || this._attemptCharCode(g.$X), je = this._cursor.clone();
            if (this._attemptCharCodeUntilFn(Ee), this._cursor.peek() != g.$SEMICOLON)
              throw this._createError(Q(this._cursor.peek()), this._cursor.getSpan());
            var Xe = this._cursor.getChars(je);
            this._cursor.advance();
            try {
              var Sr = parseInt(Xe, Ie ? 16 : 10);
              return String.fromCharCode(Sr);
            } catch {
              throw this._createError(pe(this._cursor.getChars(P)), this._cursor.getSpan());
            }
          }
        } }, { key: "_consumeRawText", value: function(P, W) {
          this._beginToken(P ? m.ESCAPABLE_RAW_TEXT : m.RAW_TEXT);
          for (var te = []; ; ) {
            var ie = this._cursor.clone(), Ie = W();
            if (this._cursor = ie, Ie)
              break;
            te.push(this._readChar(P));
          }
          return this._endToken([this._processCarriageReturns(te.join(""))]);
        } }, { key: "_consumeComment", value: function(P) {
          var W = this;
          this._beginToken(m.COMMENT_START, P), this._endToken([]), this._consumeRawText(!1, function() {
            return W._attemptStr("-->");
          }), this._beginToken(m.COMMENT_END), this._requireStr("-->"), this._endToken([]);
        } }, { key: "_consumeBogusComment", value: function(P) {
          var W = this;
          this._beginToken(m.COMMENT_START, P), this._endToken([]), this._consumeRawText(!1, function() {
            return W._cursor.peek() === g.$GT;
          }), this._beginToken(m.COMMENT_END), this._cursor.advance(), this._endToken([]);
        } }, { key: "_consumeCdata", value: function(P) {
          var W = this;
          this._beginToken(m.CDATA_START, P), this._endToken([]), this._consumeRawText(!1, function() {
            return W._attemptStr("]]>");
          }), this._beginToken(m.CDATA_END), this._requireStr("]]>"), this._endToken([]);
        } }, { key: "_consumeDocType", value: function(P) {
          var W = this;
          this._beginToken(m.DOC_TYPE_START, P), this._endToken([]), this._consumeRawText(!1, function() {
            return W._cursor.peek() === g.$GT;
          }), this._beginToken(m.DOC_TYPE_END), this._cursor.advance(), this._endToken([]);
        } }, { key: "_consumePrefixAndName", value: function() {
          for (var P = this._cursor.clone(), W = ""; this._cursor.peek() !== g.$COLON && !(((te = this._cursor.peek()) < g.$a || g.$z < te) && (te < g.$A || g.$Z < te) && (te < g.$0 || te > g.$9)); )
            this._cursor.advance();
          var te, ie;
          return this._cursor.peek() === g.$COLON ? (W = this._cursor.getChars(P), this._cursor.advance(), ie = this._cursor.clone()) : ie = P, this._requireCharCodeUntilFn(J, W === "" ? 0 : 1), [W, this._cursor.getChars(ie)];
        } }, { key: "_consumeTagOpen", value: function(P) {
          var W, te, ie, Ie = this.tokens.length, je = this._cursor.clone(), Xe = [];
          try {
            if (!g.isAsciiLetter(this._cursor.peek()))
              throw this._createError(Q(this._cursor.peek()), this._cursor.getSpan(P));
            for (ie = this._consumeTagOpenStart(P), te = ie.parts[0], W = ie.parts[1], this._attemptCharCodeUntilFn(V); this._cursor.peek() !== g.$SLASH && this._cursor.peek() !== g.$GT; ) {
              var Sr = this._consumeAttributeName(), gr = ke(Sr, 2), Or = gr[0], ot = gr[1];
              if (this._attemptCharCodeUntilFn(V), this._attemptCharCode(g.$EQ)) {
                this._attemptCharCodeUntilFn(V);
                var Nt = this._consumeAttributeValue();
                Xe.push({ prefix: Or, name: ot, value: Nt });
              } else
                Xe.push({ prefix: Or, name: ot });
              this._attemptCharCodeUntilFn(V);
            }
            this._consumeTagOpenEnd();
          } catch (vn) {
            if (vn instanceof de)
              return this._cursor = je, ie && (this.tokens.length = Ie), this._beginToken(m.TEXT, P), void this._endToken(["<"]);
            throw vn;
          }
          if (!(this._canSelfClose && this.tokens[this.tokens.length - 1].type === m.TAG_OPEN_END_VOID)) {
            var dt = this._getTagContentType(W, te, this._fullNameStack.length > 0, Xe);
            this._handleFullNameStackForTagOpen(te, W), dt === vr.TagContentType.RAW_TEXT ? this._consumeRawTextWithTagClose(te, W, !1) : dt === vr.TagContentType.ESCAPABLE_RAW_TEXT && this._consumeRawTextWithTagClose(te, W, !0);
          }
        } }, { key: "_consumeRawTextWithTagClose", value: function(P, W, te) {
          var ie = this;
          this._consumeRawText(te, function() {
            return !!ie._attemptCharCode(g.$LT) && !!ie._attemptCharCode(g.$SLASH) && (ie._attemptCharCodeUntilFn(V), !!ie._attemptStrCaseInsensitive(P ? "".concat(P, ":").concat(W) : W) && (ie._attemptCharCodeUntilFn(V), ie._attemptCharCode(g.$GT)));
          }), this._beginToken(m.TAG_CLOSE), this._requireCharCodeUntilFn(function(Ie) {
            return Ie === g.$GT;
          }, 3), this._cursor.advance(), this._endToken([P, W]), this._handleFullNameStackForTagClose(P, W);
        } }, { key: "_consumeTagOpenStart", value: function(P) {
          this._beginToken(m.TAG_OPEN_START, P);
          var W = this._consumePrefixAndName();
          return this._endToken(W);
        } }, { key: "_consumeAttributeName", value: function() {
          var P = this._cursor.peek();
          if (P === g.$SQ || P === g.$DQ)
            throw this._createError(Q(P), this._cursor.getSpan());
          this._beginToken(m.ATTR_NAME);
          var W = this._consumePrefixAndName();
          return this._endToken(W), W;
        } }, { key: "_consumeAttributeValue", value: function() {
          var P;
          if (this._cursor.peek() === g.$SQ || this._cursor.peek() === g.$DQ) {
            this._beginToken(m.ATTR_QUOTE);
            var W = this._cursor.peek();
            this._cursor.advance(), this._endToken([String.fromCodePoint(W)]), this._beginToken(m.ATTR_VALUE);
            for (var te = []; this._cursor.peek() !== W; )
              te.push(this._readChar(!0));
            P = this._processCarriageReturns(te.join("")), this._endToken([P]), this._beginToken(m.ATTR_QUOTE), this._cursor.advance(), this._endToken([String.fromCodePoint(W)]);
          } else {
            this._beginToken(m.ATTR_VALUE);
            var ie = this._cursor.clone();
            this._requireCharCodeUntilFn(J, 1), P = this._processCarriageReturns(this._cursor.getChars(ie)), this._endToken([P]);
          }
          return P;
        } }, { key: "_consumeTagOpenEnd", value: function() {
          var P = this._attemptCharCode(g.$SLASH) ? m.TAG_OPEN_END_VOID : m.TAG_OPEN_END;
          this._beginToken(P), this._requireCharCode(g.$GT), this._endToken([]);
        } }, { key: "_consumeTagClose", value: function(P) {
          if (this._beginToken(m.TAG_CLOSE, P), this._attemptCharCodeUntilFn(V), this._allowHtmComponentClosingTags && this._attemptCharCode(g.$SLASH))
            this._attemptCharCodeUntilFn(V), this._requireCharCode(g.$GT), this._endToken([]);
          else {
            var W = this._consumePrefixAndName(), te = ke(W, 2), ie = te[0], Ie = te[1];
            this._attemptCharCodeUntilFn(V), this._requireCharCode(g.$GT), this._endToken([ie, Ie]), this._handleFullNameStackForTagClose(ie, Ie);
          }
        } }, { key: "_consumeExpansionFormStart", value: function() {
          this._beginToken(m.EXPANSION_FORM_START), this._requireCharCode(g.$LBRACE), this._endToken([]), this._expansionCaseStack.push(m.EXPANSION_FORM_START), this._beginToken(m.RAW_TEXT);
          var P = this._readUntil(g.$COMMA);
          this._endToken([P]), this._requireCharCode(g.$COMMA), this._attemptCharCodeUntilFn(V), this._beginToken(m.RAW_TEXT);
          var W = this._readUntil(g.$COMMA);
          this._endToken([W]), this._requireCharCode(g.$COMMA), this._attemptCharCodeUntilFn(V);
        } }, { key: "_consumeExpansionCaseStart", value: function() {
          this._beginToken(m.EXPANSION_CASE_VALUE);
          var P = this._readUntil(g.$LBRACE).trim();
          this._endToken([P]), this._attemptCharCodeUntilFn(V), this._beginToken(m.EXPANSION_CASE_EXP_START), this._requireCharCode(g.$LBRACE), this._endToken([]), this._attemptCharCodeUntilFn(V), this._expansionCaseStack.push(m.EXPANSION_CASE_EXP_START);
        } }, { key: "_consumeExpansionCaseEnd", value: function() {
          this._beginToken(m.EXPANSION_CASE_EXP_END), this._requireCharCode(g.$RBRACE), this._endToken([]), this._attemptCharCodeUntilFn(V), this._expansionCaseStack.pop();
        } }, { key: "_consumeExpansionFormEnd", value: function() {
          this._beginToken(m.EXPANSION_FORM_END), this._requireCharCode(g.$RBRACE), this._endToken([]), this._expansionCaseStack.pop();
        } }, { key: "_consumeText", value: function() {
          var P = this._cursor.clone();
          this._beginToken(m.TEXT, P);
          var W = [];
          do
            this._interpolationConfig && this._attemptStr(this._interpolationConfig.start) ? (W.push(this._interpolationConfig.start), this._inInterpolation = !0) : this._interpolationConfig && this._inInterpolation && this._attemptStr(this._interpolationConfig.end) ? (W.push(this._interpolationConfig.end), this._inInterpolation = !1) : W.push(this._readChar(!0));
          while (!this._isTextEnd());
          this._endToken([this._processCarriageReturns(W.join(""))]);
        } }, { key: "_isTextEnd", value: function() {
          return !!(this._cursor.peek() === g.$LT || this._cursor.peek() === g.$EOF || this._tokenizeIcu && !this._inInterpolation && (this.isExpansionFormStart() || this._cursor.peek() === g.$RBRACE && this._isInExpansionCase()));
        } }, { key: "_readUntil", value: function(P) {
          var W = this._cursor.clone();
          return this._attemptUntilChar(P), this._cursor.getChars(W);
        } }, { key: "_isInExpansionCase", value: function() {
          return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === m.EXPANSION_CASE_EXP_START;
        } }, { key: "_isInExpansionForm", value: function() {
          return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === m.EXPANSION_FORM_START;
        } }, { key: "isExpansionFormStart", value: function() {
          if (this._cursor.peek() !== g.$LBRACE)
            return !1;
          if (this._interpolationConfig) {
            var P = this._cursor.clone(), W = this._attemptStr(this._interpolationConfig.start);
            return this._cursor = P, !W;
          }
          return !0;
        } }, { key: "_handleFullNameStackForTagOpen", value: function(P, W) {
          var te = vr.mergeNsAndName(P, W);
          this._fullNameStack.length !== 0 && this._fullNameStack[this._fullNameStack.length - 1] !== te || this._fullNameStack.push(te);
        } }, { key: "_handleFullNameStackForTagClose", value: function(P, W) {
          var te = vr.mergeNsAndName(P, W);
          this._fullNameStack.length !== 0 && this._fullNameStack[this._fullNameStack.length - 1] === te && this._fullNameStack.pop();
        } }]), G;
      }();
      function V(G) {
        return !g.isWhitespace(G) || G === g.$EOF;
      }
      function J(G) {
        return g.isWhitespace(G) || G === g.$GT || G === g.$SLASH || G === g.$SQ || G === g.$DQ || G === g.$EQ;
      }
      function Ee(G) {
        return G == g.$SEMICOLON || G == g.$EOF || !g.isAsciiHexDigit(G);
      }
      function ee(G) {
        return G == g.$SEMICOLON || G == g.$EOF || !g.isAsciiLetter(G);
      }
      function ge(G) {
        return G >= g.$a && G <= g.$z ? G - g.$a + g.$A : G;
      }
      var me = /* @__PURE__ */ function() {
        function G(Y, P) {
          if (se(this, G), Y instanceof G)
            this.file = Y.file, this.input = Y.input, this.end = Y.end, this.state = Object.assign({}, Y.state);
          else {
            if (!P)
              throw new Error("Programming error: the range argument must be provided with a file argument.");
            this.file = Y, this.input = Y.content, this.end = P.endPos, this.state = { peek: -1, offset: P.startPos, line: P.startLine, column: P.startCol };
          }
        }
        return ce(G, [{ key: "clone", value: function() {
          return new G(this);
        } }, { key: "peek", value: function() {
          return this.state.peek;
        } }, { key: "charsLeft", value: function() {
          return this.end - this.state.offset;
        } }, { key: "diff", value: function(P) {
          return this.state.offset - P.state.offset;
        } }, { key: "advance", value: function() {
          this.advanceState(this.state);
        } }, { key: "init", value: function() {
          this.updatePeek(this.state);
        } }, { key: "getSpan", value: function(P, W) {
          if (P = P || this, W)
            for (P = P.clone(); this.diff(P) > 0 && W.indexOf(P.peek()) !== -1; )
              P.advance();
          return new ar.ParseSourceSpan(new ar.ParseLocation(P.file, P.state.offset, P.state.line, P.state.column), new ar.ParseLocation(this.file, this.state.offset, this.state.line, this.state.column));
        } }, { key: "getChars", value: function(P) {
          return this.input.substring(P.state.offset, this.state.offset);
        } }, { key: "charAt", value: function(P) {
          return this.input.charCodeAt(P);
        } }, { key: "advanceState", value: function(P) {
          if (P.offset >= this.end)
            throw this.state = P, new Be('Unexpected character "EOF"', this);
          var W = this.charAt(P.offset);
          W === g.$LF ? (P.line++, P.column = 0) : g.isNewLine(W) || P.column++, P.offset++, this.updatePeek(P);
        } }, { key: "updatePeek", value: function(P) {
          P.peek = P.offset >= this.end ? g.$EOF : this.charAt(P.offset);
        } }]), G;
      }(), xe = /* @__PURE__ */ function(G) {
        br(P, G);
        var Y = Fr(P);
        function P(W, te) {
          var ie;
          return se(this, P), W instanceof P ? (ie = Y.call(this, W), ie.internalState = Object.assign({}, W.internalState)) : (ie = Y.call(this, W, te), ie.internalState = ie.state), qF(ie);
        }
        return ce(P, [{ key: "advance", value: function() {
          this.state = this.internalState, Wa(kn(P.prototype), "advance", this).call(this), this.processEscapeSequence();
        } }, { key: "init", value: function() {
          Wa(kn(P.prototype), "init", this).call(this), this.processEscapeSequence();
        } }, { key: "clone", value: function() {
          return new P(this);
        } }, { key: "getChars", value: function(te) {
          for (var ie = te.clone(), Ie = ""; ie.internalState.offset < this.internalState.offset; )
            Ie += String.fromCodePoint(ie.peek()), ie.advance();
          return Ie;
        } }, { key: "processEscapeSequence", value: function() {
          var te = this, ie = function() {
            return te.internalState.peek;
          };
          if (ie() === g.$BACKSLASH)
            if (this.internalState = Object.assign({}, this.state), this.advanceState(this.internalState), ie() === g.$n)
              this.state.peek = g.$LF;
            else if (ie() === g.$r)
              this.state.peek = g.$CR;
            else if (ie() === g.$v)
              this.state.peek = g.$VTAB;
            else if (ie() === g.$t)
              this.state.peek = g.$TAB;
            else if (ie() === g.$b)
              this.state.peek = g.$BSPACE;
            else if (ie() === g.$f)
              this.state.peek = g.$FF;
            else if (ie() === g.$u)
              if (this.advanceState(this.internalState), ie() === g.$LBRACE) {
                this.advanceState(this.internalState);
                for (var Ie = this.clone(), je = 0; ie() !== g.$RBRACE; )
                  this.advanceState(this.internalState), je++;
                this.state.peek = this.decodeHexDigits(Ie, je);
              } else {
                var Xe = this.clone();
                this.advanceState(this.internalState), this.advanceState(this.internalState), this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(Xe, 4);
              }
            else if (ie() === g.$x) {
              this.advanceState(this.internalState);
              var Sr = this.clone();
              this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(Sr, 2);
            } else if (g.isOctalDigit(ie())) {
              for (var gr = "", Or = 0, ot = this.clone(); g.isOctalDigit(ie()) && Or < 3; )
                ot = this.clone(), gr += String.fromCodePoint(ie()), this.advanceState(this.internalState), Or++;
              this.state.peek = parseInt(gr, 8), this.internalState = ot.internalState;
            } else
              g.isNewLine(this.internalState.peek) ? (this.advanceState(this.internalState), this.state = this.internalState) : this.state.peek = this.internalState.peek;
        } }, { key: "decodeHexDigits", value: function(te, ie) {
          var Ie = this.input.substr(te.internalState.offset, ie), je = parseInt(Ie, 16);
          if (isNaN(je))
            throw te.state = te.internalState, new Be("Invalid hexadecimal escape sequence", te);
          return je;
        } }]), P;
      }(me), Be = /* @__PURE__ */ ce(function G(Y, P) {
        se(this, G), this.msg = Y, this.cursor = P;
      });
      h.CursorError = Be;
    });
    /**
    * @license
    * Copyright Google Inc. All Rights Reserved.
    *
    * Use of this source code is governed by an MIT-style license that can be
    * found in the LICENSE file at https://angular.io/license
    */
    var wt = /* @__PURE__ */ function(E) {
      br(g, E);
      var h = Fr(g);
      function g(m, C, T) {
        var L;
        return se(this, g), L = h.call(this, C, T), L.elementName = m, L;
      }
      return ce(g, null, [{ key: "create", value: function(C, T, L) {
        return new g(C, T, L);
      } }]), g;
    }(ar.ParseError), nl = wt, vi = /* @__PURE__ */ ce(function E(h, g) {
      se(this, E), this.rootNodes = h, this.errors = g;
    }), ul = vi, al = /* @__PURE__ */ function() {
      function E(h) {
        se(this, E), this.getTagDefinition = h;
      }
      return ce(E, [{ key: "parse", value: function(g, m, C) {
        var T = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, L = arguments.length > 4 ? arguments[4] : void 0, j = function(me) {
          return function(xe) {
            for (var Be = arguments.length, G = new Array(Be > 1 ? Be - 1 : 0), Y = 1; Y < Be; Y++)
              G[Y - 1] = arguments[Y];
            return me.apply(void 0, [xe.toLowerCase()].concat(G));
          };
        }, Q = T ? this.getTagDefinition : j(this.getTagDefinition), pe = function(me) {
          return Q(me).contentType;
        }, de = T ? L : j(L), z = L ? function(ge, me, xe, Be) {
          var G = de(ge, me, xe, Be);
          return G !== void 0 ? G : pe(ge);
        } : pe, V = Ue.tokenize(g, m, z, C), J = C && C.canSelfClose || !1, Ee = C && C.allowHtmComponentClosingTags || !1, ee = new kf(V.tokens, Q, J, Ee, T).build();
        return new vi(ee.rootNodes, V.errors.concat(ee.errors));
      } }]), E;
    }(), kf = /* @__PURE__ */ function() {
      function E(h, g, m, C, T) {
        se(this, E), this.tokens = h, this.getTagDefinition = g, this.canSelfClose = m, this.allowHtmComponentClosingTags = C, this.isTagNameCaseSensitive = T, this._index = -1, this._rootNodes = [], this._errors = [], this._elementStack = [], this._advance();
      }
      return ce(E, [{ key: "build", value: function() {
        for (; this._peek.type !== Ue.TokenType.EOF; )
          this._peek.type === Ue.TokenType.TAG_OPEN_START ? this._consumeStartTag(this._advance()) : this._peek.type === Ue.TokenType.TAG_CLOSE ? (this._closeVoidElement(), this._consumeEndTag(this._advance())) : this._peek.type === Ue.TokenType.CDATA_START ? (this._closeVoidElement(), this._consumeCdata(this._advance())) : this._peek.type === Ue.TokenType.COMMENT_START ? (this._closeVoidElement(), this._consumeComment(this._advance())) : this._peek.type === Ue.TokenType.TEXT || this._peek.type === Ue.TokenType.RAW_TEXT || this._peek.type === Ue.TokenType.ESCAPABLE_RAW_TEXT ? (this._closeVoidElement(), this._consumeText(this._advance())) : this._peek.type === Ue.TokenType.EXPANSION_FORM_START ? this._consumeExpansion(this._advance()) : this._peek.type === Ue.TokenType.DOC_TYPE_START ? this._consumeDocType(this._advance()) : this._advance();
        return new vi(this._rootNodes, this._errors);
      } }, { key: "_advance", value: function() {
        var g = this._peek;
        return this._index < this.tokens.length - 1 && this._index++, this._peek = this.tokens[this._index], g;
      } }, { key: "_advanceIf", value: function(g) {
        return this._peek.type === g ? this._advance() : null;
      } }, { key: "_consumeCdata", value: function(g) {
        var m = this._advance(), C = this._getText(m), T = this._advanceIf(Ue.TokenType.CDATA_END);
        this._addToParent(new xt.CDATA(C, new ar.ParseSourceSpan(g.sourceSpan.start, (T || m).sourceSpan.end)));
      } }, { key: "_consumeComment", value: function(g) {
        var m = this._advanceIf(Ue.TokenType.RAW_TEXT), C = this._advanceIf(Ue.TokenType.COMMENT_END), T = m != null ? m.parts[0].trim() : null, L = new ar.ParseSourceSpan(g.sourceSpan.start, (C || m || g).sourceSpan.end);
        this._addToParent(new xt.Comment(T, L));
      } }, { key: "_consumeDocType", value: function(g) {
        var m = this._advanceIf(Ue.TokenType.RAW_TEXT), C = this._advanceIf(Ue.TokenType.DOC_TYPE_END), T = m != null ? m.parts[0].trim() : null, L = new ar.ParseSourceSpan(g.sourceSpan.start, (C || m || g).sourceSpan.end);
        this._addToParent(new xt.DocType(T, L));
      } }, { key: "_consumeExpansion", value: function(g) {
        for (var m = this._advance(), C = this._advance(), T = []; this._peek.type === Ue.TokenType.EXPANSION_CASE_VALUE; ) {
          var L = this._parseExpansionCase();
          if (!L)
            return;
          T.push(L);
        }
        if (this._peek.type !== Ue.TokenType.EXPANSION_FORM_END)
          return void this._errors.push(wt.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '}'."));
        var j = new ar.ParseSourceSpan(g.sourceSpan.start, this._peek.sourceSpan.end);
        this._addToParent(new xt.Expansion(m.parts[0], C.parts[0], T, j, m.sourceSpan)), this._advance();
      } }, { key: "_parseExpansionCase", value: function() {
        var g = this._advance();
        if (this._peek.type !== Ue.TokenType.EXPANSION_CASE_EXP_START)
          return this._errors.push(wt.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '{'.")), null;
        var m = this._advance(), C = this._collectExpansionExpTokens(m);
        if (!C)
          return null;
        var T = this._advance();
        C.push(new Ue.Token(Ue.TokenType.EOF, [], T.sourceSpan));
        var L = new E(C, this.getTagDefinition, this.canSelfClose, this.allowHtmComponentClosingTags, this.isTagNameCaseSensitive).build();
        if (L.errors.length > 0)
          return this._errors = this._errors.concat(L.errors), null;
        var j = new ar.ParseSourceSpan(g.sourceSpan.start, T.sourceSpan.end), Q = new ar.ParseSourceSpan(m.sourceSpan.start, T.sourceSpan.end);
        return new xt.ExpansionCase(g.parts[0], L.rootNodes, j, g.sourceSpan, Q);
      } }, { key: "_collectExpansionExpTokens", value: function(g) {
        for (var m = [], C = [Ue.TokenType.EXPANSION_CASE_EXP_START]; ; ) {
          if (this._peek.type !== Ue.TokenType.EXPANSION_FORM_START && this._peek.type !== Ue.TokenType.EXPANSION_CASE_EXP_START || C.push(this._peek.type), this._peek.type === Ue.TokenType.EXPANSION_CASE_EXP_END) {
            if (!yi(C, Ue.TokenType.EXPANSION_CASE_EXP_START))
              return this._errors.push(wt.create(null, g.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
            if (C.pop(), C.length == 0)
              return m;
          }
          if (this._peek.type === Ue.TokenType.EXPANSION_FORM_END) {
            if (!yi(C, Ue.TokenType.EXPANSION_FORM_START))
              return this._errors.push(wt.create(null, g.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
            C.pop();
          }
          if (this._peek.type === Ue.TokenType.EOF)
            return this._errors.push(wt.create(null, g.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
          m.push(this._advance());
        }
      } }, { key: "_getText", value: function(g) {
        var m = g.parts[0];
        if (m.length > 0 && m[0] == `
`) {
          var C = this._getParentElement();
          C != null && C.children.length == 0 && this.getTagDefinition(C.name).ignoreFirstLf && (m = m.substring(1));
        }
        return m;
      } }, { key: "_consumeText", value: function(g) {
        var m = this._getText(g);
        m.length > 0 && this._addToParent(new xt.Text(m, g.sourceSpan));
      } }, { key: "_closeVoidElement", value: function() {
        var g = this._getParentElement();
        g && this.getTagDefinition(g.name).isVoid && this._elementStack.pop();
      } }, { key: "_consumeStartTag", value: function(g) {
        for (var m = g.parts[0], C = g.parts[1], T = []; this._peek.type === Ue.TokenType.ATTR_NAME; )
          T.push(this._consumeAttr(this._advance()));
        var L = this._getElementFullName(m, C, this._getParentElement()), j = !1;
        if (this._peek.type === Ue.TokenType.TAG_OPEN_END_VOID) {
          this._advance(), j = !0;
          var Q = this.getTagDefinition(L);
          this.canSelfClose || Q.canSelfClose || vr.getNsPrefix(L) !== null || Q.isVoid || this._errors.push(wt.create(L, g.sourceSpan, 'Only void and foreign elements can be self closed "'.concat(g.parts[1], '"')));
        } else
          this._peek.type === Ue.TokenType.TAG_OPEN_END && (this._advance(), j = !1);
        var pe = this._peek.sourceSpan.start, de = new ar.ParseSourceSpan(g.sourceSpan.start, pe), z = new ar.ParseSourceSpan(g.sourceSpan.start.moveBy(1), g.sourceSpan.end), V = new xt.Element(L, T, [], de, de, void 0, z);
        this._pushElement(V), j && (this._popElement(L), V.endSourceSpan = de);
      } }, { key: "_pushElement", value: function(g) {
        var m = this._getParentElement();
        m && this.getTagDefinition(m.name).isClosedByChild(g.name) && this._elementStack.pop(), this._addToParent(g), this._elementStack.push(g);
      } }, { key: "_consumeEndTag", value: function(g) {
        var m = this.allowHtmComponentClosingTags && g.parts.length === 0 ? null : this._getElementFullName(g.parts[0], g.parts[1], this._getParentElement());
        if (this._getParentElement() && (this._getParentElement().endSourceSpan = g.sourceSpan), m && this.getTagDefinition(m).isVoid)
          this._errors.push(wt.create(m, g.sourceSpan, 'Void elements do not have end tags "'.concat(g.parts[1], '"')));
        else if (!this._popElement(m)) {
          var C = 'Unexpected closing tag "'.concat(m, '". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags');
          this._errors.push(wt.create(m, g.sourceSpan, C));
        }
      } }, { key: "_popElement", value: function(g) {
        for (var m = this._elementStack.length - 1; m >= 0; m--) {
          var C = this._elementStack[m];
          if (!g || (vr.getNsPrefix(C.name) ? C.name == g : C.name.toLowerCase() == g.toLowerCase()))
            return this._elementStack.splice(m, this._elementStack.length - m), !0;
          if (!this.getTagDefinition(C.name).closedByParent)
            return !1;
        }
        return !1;
      } }, { key: "_consumeAttr", value: function(g) {
        var m = vr.mergeNsAndName(g.parts[0], g.parts[1]), C, T, L = g.sourceSpan.end, j = "";
        if (this._peek.type === Ue.TokenType.ATTR_QUOTE && (T = this._advance().sourceSpan.start), this._peek.type === Ue.TokenType.ATTR_VALUE) {
          var Q = this._advance();
          j = Q.parts[0], L = Q.sourceSpan.end, C = Q.sourceSpan;
        }
        return this._peek.type === Ue.TokenType.ATTR_QUOTE && (L = this._advance().sourceSpan.end, C = new ar.ParseSourceSpan(T, L)), new xt.Attribute(m, j, new ar.ParseSourceSpan(g.sourceSpan.start, L), C, g.sourceSpan);
      } }, { key: "_getParentElement", value: function() {
        return this._elementStack.length > 0 ? this._elementStack[this._elementStack.length - 1] : null;
      } }, { key: "_getParentElementSkippingContainers", value: function() {
        for (var g = null, m = this._elementStack.length - 1; m >= 0; m--) {
          if (!vr.isNgContainer(this._elementStack[m].name))
            return { parent: this._elementStack[m], container: g };
          g = this._elementStack[m];
        }
        return { parent: null, container: g };
      } }, { key: "_addToParent", value: function(g) {
        var m = this._getParentElement();
        m != null ? m.children.push(g) : this._rootNodes.push(g);
      } }, { key: "_insertBeforeContainer", value: function(g, m, C) {
        if (m) {
          if (g) {
            var T = g.children.indexOf(m);
            g.children[T] = C;
          } else
            this._rootNodes.push(C);
          C.children.push(m), this._elementStack.splice(this._elementStack.indexOf(m), 0, C);
        } else
          this._addToParent(C), this._elementStack.push(C);
      } }, { key: "_getElementFullName", value: function(g, m, C) {
        return g === "" && (g = this.getTagDefinition(m).implicitNamespacePrefix || "") === "" && C != null && (g = vr.getNsPrefix(C.name)), vr.mergeNsAndName(g, m);
      } }]), E;
    }();
    function yi(E, h) {
      return E.length > 0 && E[E.length - 1] === h;
    }
    var il = Object.defineProperty({ TreeError: nl, ParseTreeResult: ul, Parser: al }, "__esModule", { value: !0 }), ol = il, Bt = ol.ParseTreeResult, it = ol.TreeError;
    /**
    * @license
    * Copyright Google Inc. All Rights Reserved.
    *
    * Use of this source code is governed by an MIT-style license that can be
    * found in the LICENSE file at https://angular.io/license
    */
    var Nf = /* @__PURE__ */ function(E) {
      br(g, E);
      var h = Fr(g);
      function g() {
        return se(this, g), h.call(this, en.getHtmlTagDefinition);
      }
      return ce(g, [{ key: "parse", value: function(C, T, L) {
        var j = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, Q = arguments.length > 4 ? arguments[4] : void 0;
        return Wa(kn(g.prototype), "parse", this).call(this, C, T, L, j, Q);
      } }]), g;
    }(il.Parser), as = Nf, sl = Object.defineProperty({ ParseTreeResult: Bt, TreeError: it, HtmlParser: as }, "__esModule", { value: !0 }), Pf = vr.TagContentType, Ei = null, Ci = function(h) {
      var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, m = g.canSelfClose, C = m === void 0 ? !1 : m, T = g.allowHtmComponentClosingTags, L = T === void 0 ? !1 : T, j = g.isTagNameCaseSensitive, Q = j === void 0 ? !1 : j, pe = g.getTagContentType;
      return (Ei || (Ei = new sl.HtmlParser()), Ei).parse(h, "angular-html-parser", { tokenizeExpansionForms: !1, interpolationConfig: void 0, canSelfClose: C, allowHtmComponentClosingTags: L }, Q, pe);
    }, is = Object.defineProperty({ TagContentType: Pf, parse: Ci }, "__esModule", { value: !0 }), Ai = ar.ParseSourceSpan, os = ar.ParseLocation, ss = ar.ParseSourceFile, rn = Ju.inferParserByLanguage, Z = X.HTML_ELEMENT_ATTRIBUTES, cl = X.HTML_TAGS, cs = X.isUnknownNamespace, ls = du.hasPragma, ps = _u.Node, fs = Jc.parseIeConditionalComment, kt = Yc.locStart, ll = Yc.locEnd;
    function If(E, h, g) {
      var m = h.recognizeSelfClosing, C = h.normalizeTagName, T = h.normalizeAttributeName, L = h.allowHtmComponentClosingTags, j = h.isTagNameCaseSensitive, Q = h.getTagContentType, pe = is, de = xt.RecursiveVisitor, z = xt.visitAll, V = ar.ParseSourceSpan, J = en.getHtmlTagDefinition, Ee = pe.parse(E, { canSelfClose: m, allowHtmComponentClosingTags: L, isTagNameCaseSensitive: j, getTagContentType: Q }), ee = Ee.rootNodes, ge = Ee.errors;
      if (g.parser === "vue")
        if (ee.some(function(Rr) {
          return Rr.type === "docType" && Rr.value === "html" || Rr.type === "element" && Rr.name.toLowerCase() === "html";
        })) {
          m = !0, C = !0, T = !0, L = !0, j = !1;
          var me = pe.parse(E, { canSelfClose: m, allowHtmComponentClosingTags: L, isTagNameCaseSensitive: j });
          ee = me.rootNodes, ge = me.errors;
        } else {
          var xe = function(mr) {
            if (!mr || mr.type !== "element" || mr.name !== "template")
              return !1;
            var yr = mr.attrs.find(function(jr) {
              return jr.name === "lang";
            }), Mr = yr && yr.value;
            return !Mr || rn(Mr, g) === "html";
          };
          if (ee.some(xe))
            for (var Be, G = function() {
              return pe.parse(E, { canSelfClose: m, allowHtmComponentClosingTags: L, isTagNameCaseSensitive: j });
            }, Y = function() {
              return Be || (Be = G());
            }, P = function(mr) {
              return Y().rootNodes.find(function(yr) {
                var Mr = yr.startSourceSpan;
                return Mr && Mr.start.offset === mr.startSourceSpan.start.offset;
              });
            }, W = 0; W < ee.length; W++) {
              var te = ee[W], ie = te.endSourceSpan, Ie = te.startSourceSpan;
              if (ie === null)
                ge = Y().errors, ee[W] = P(te) || te;
              else if (xe(te)) {
                var je = Y(), Xe = Ie.end.offset, Sr = ie.start.offset, gr = le(je.errors), Or;
                try {
                  for (gr.s(); !(Or = gr.n()).done; ) {
                    var ot = Or.value, Nt = ot.span.start.offset;
                    if (Xe < Nt && Nt < Sr) {
                      ge = [ot];
                      break;
                    }
                  }
                } catch (Rr) {
                  gr.e(Rr);
                } finally {
                  gr.f();
                }
                ee[W] = P(te) || te;
              }
            }
        }
      if (ge.length > 0) {
        var dt = ge[0], vn = dt.msg, gu = dt.span, mu = gu.start, Lr = gu.end;
        throw nu(vn, { start: { line: mu.line + 1, column: mu.col + 1 }, end: { line: Lr.line + 1, column: Lr.col + 1 } });
      }
      var Tr = function(mr) {
        var yr = mr.name.startsWith(":") ? mr.name.slice(1).split(":")[0] : null, Mr = mr.nameSpan.toString(), jr = yr !== null && Mr.startsWith("".concat(yr, ":")), $e = jr ? Mr.slice(yr.length + 1) : Mr;
        mr.name = $e, mr.namespace = yr, mr.hasExplicitNamespace = jr;
      }, Ze = function(mr, yr) {
        var Mr = mr.toLowerCase();
        return yr(Mr) ? Mr : mr;
      };
      return z(new (/* @__PURE__ */ function(Rr) {
        br(yr, Rr);
        var mr = Fr(yr);
        function yr() {
          return se(this, yr), mr.apply(this, arguments);
        }
        return ce(yr, [{ key: "visit", value: function(jr) {
          (function($e) {
            if ($e.type === "element") {
              Tr($e);
              var ht = le($e.attrs), Wn;
              try {
                for (ht.s(); !(Wn = ht.n()).done; ) {
                  var Dt = Wn.value;
                  Tr(Dt), Dt.valueSpan ? (Dt.value = Dt.valueSpan.toString(), /["']/.test(Dt.value[0]) && (Dt.value = Dt.value.slice(1, -1))) : Dt.value = null;
                }
              } catch (Pt) {
                ht.e(Pt);
              } finally {
                ht.f();
              }
            } else
              $e.type === "comment" ? $e.value = $e.sourceSpan.toString().slice(4, -3) : $e.type === "text" && ($e.value = $e.sourceSpan.toString());
          })(jr), function($e) {
            if ($e.type === "element") {
              var ht = J(j ? $e.name : $e.name.toLowerCase());
              !$e.namespace || $e.namespace === ht.implicitNamespacePrefix || cs($e) ? $e.tagDefinition = ht : $e.tagDefinition = J("");
            }
          }(jr), function($e) {
            $e.type === "element" && (!C || $e.namespace && $e.namespace !== $e.tagDefinition.implicitNamespacePrefix && !cs($e) || ($e.name = Ze($e.name, function(ht) {
              return ht in cl;
            })), T) && function() {
              var ht = Z[$e.name] || /* @__PURE__ */ Object.create(null), Wn = le($e.attrs), Dt;
              try {
                for (Wn.s(); !(Dt = Wn.n()).done; ) {
                  var Pt = Dt.value;
                  Pt.namespace || (Pt.name = Ze(Pt.name, function(Gn) {
                    return $e.name in Z && (Gn in Z["*"] || Gn in ht);
                  }));
                }
              } catch (Gn) {
                Wn.e(Gn);
              } finally {
                Wn.f();
              }
            }();
          }(jr), function($e) {
            $e.sourceSpan && $e.endSourceSpan && ($e.sourceSpan = new V($e.sourceSpan.start, $e.endSourceSpan.end));
          }(jr);
        } }]), yr;
      }(de))(), ee), ee;
    }
    function mn(E, h, g) {
      var m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, C = m ? hf(E) : { frontMatter: null, content: E }, T = C.frontMatter, L = C.content, j = new ss(E, h.filepath), Q = new os(j, 0, 0, 0), pe = Q.moveBy(E.length), de = { type: "root", sourceSpan: new Ai(Q, pe), children: If(L, g, h) };
      if (T) {
        var z = new os(j, 0, 0, 0), V = z.moveBy(T.raw.length);
        T.sourceSpan = new Ai(z, V), de.children.unshift(T);
      }
      var J = new ps(de), Ee = function(ge, me) {
        var xe = me.offset, Be = mn(E.slice(0, xe).replace(/[^\n\r]/g, " ") + ge, h, g, !1);
        Be.sourceSpan = new Ai(me, To(Be.children).sourceSpan.end);
        var G = Be.children[0];
        return G.length === xe ? Be.children.shift() : (G.sourceSpan = new Ai(G.sourceSpan.start.moveBy(xe), G.sourceSpan.end), G.value = G.value.slice(xe)), Be;
      };
      return J.map(function(ee) {
        if (ee.type === "comment") {
          var ge = fs(ee, Ee);
          if (ge)
            return ge;
        }
        return ee;
      });
    }
    function ra() {
      var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, h = E.recognizeSelfClosing, g = h === void 0 ? !1 : h, m = E.normalizeTagName, C = m === void 0 ? !1 : m, T = E.normalizeAttributeName, L = T === void 0 ? !1 : T, j = E.allowHtmComponentClosingTags, Q = j === void 0 ? !1 : j, pe = E.isTagNameCaseSensitive, de = pe === void 0 ? !1 : pe, z = E.getTagContentType;
      return { parse: function(J, Ee, ee) {
        return mn(J, ee, { recognizeSelfClosing: g, normalizeTagName: C, normalizeAttributeName: L, allowHtmComponentClosingTags: Q, isTagNameCaseSensitive: de, getTagContentType: z });
      }, hasPragma: ls, astFormat: "html", locStart: kt, locEnd: ll };
    }
    return { parsers: { html: ra({ recognizeSelfClosing: !0, normalizeTagName: !0, normalizeAttributeName: !0, allowHtmComponentClosingTags: !0 }), angular: ra(), vue: ra({ recognizeSelfClosing: !0, isTagNameCaseSensitive: !0, getTagContentType: function(h, g, m, C) {
      if (h.toLowerCase() !== "html" && !m && (h !== "template" || C.some(function(T) {
        var L = T.name, j = T.value;
        return L === "lang" && j !== "html";
      })))
        return is.TagContentType.RAW_TEXT;
    } }), lwc: ra() } };
  });
})(HF);
var S$ = /* @__PURE__ */ Hb(HF.exports), zF = { exports: {} };
(function(B, N) {
  (function(M, U) {
    B.exports = U();
  })(go, function() {
    function M(r, e) {
      if (r == null)
        return {};
      var t, n, u = {}, a = Object.keys(r);
      for (n = 0; n < a.length; n++)
        t = a[n], e.indexOf(t) >= 0 || (u[t] = r[t]);
      return u;
    }
    function U(r, e) {
      return e || (e = r.slice(0)), Object.freeze(Object.defineProperties(r, { raw: { value: Object.freeze(e) } }));
    }
    var re = { name: "prettier", version: "2.3.0", description: "Prettier is an opinionated code formatter", bin: "./bin/prettier.js", repository: "prettier/prettier", homepage: "https://prettier.io", author: "James Long", license: "MIT", main: "./index.js", browser: "./standalone.js", unpkg: "./standalone.js", engines: { node: ">=10.13.0" }, files: ["index.js", "standalone.js", "src", "bin"], dependencies: { "@angular/compiler": "11.2.13", "@babel/code-frame": "7.12.13", "@babel/parser": "7.14.1", "@glimmer/syntax": "0.79.0", "@iarna/toml": "2.2.5", "@typescript-eslint/typescript-estree": "4.22.0", "angular-estree-parser": "2.3.0", "angular-html-parser": "1.8.0", camelcase: "6.2.0", chalk: "4.1.1", "ci-info": "3.1.1", "cjk-regex": "2.0.1", cosmiconfig: "7.0.0", dashify: "2.0.0", diff: "5.0.0", editorconfig: "0.15.3", "editorconfig-to-prettier": "0.2.0", "escape-string-regexp": "4.0.0", espree: "7.3.1", esutils: "2.0.3", "fast-glob": "3.2.5", "fast-json-stable-stringify": "2.1.0", "find-parent-dir": "0.3.0", "flow-parser": "0.150.1", "get-stdin": "8.0.0", globby: "11.0.3", graphql: "15.5.0", "html-element-attributes": "2.3.0", "html-styles": "1.0.0", "html-tag-names": "1.1.5", "html-void-elements": "1.0.5", ignore: "4.0.6", "jest-docblock": "26.0.0", json5: "2.2.0", leven: "3.1.0", "lines-and-columns": "1.1.6", "linguist-languages": "7.14.0", lodash: "4.17.21", mem: "8.1.1", meriyah: "4.1.5", minimatch: "3.0.4", minimist: "1.2.5", "n-readlines": "1.0.1", outdent: "0.8.0", "parse-srcset": "ikatyang/parse-srcset#54eb9c1cb21db5c62b4d0e275d7249516df6f0ee", "please-upgrade-node": "3.2.0", "postcss-less": "3.1.4", "postcss-media-query-parser": "0.2.3", "postcss-scss": "2.1.1", "postcss-selector-parser": "2.2.3", "postcss-values-parser": "2.0.1", "regexp-util": "1.2.2", "remark-footnotes": "2.0.0", "remark-math": "3.0.1", "remark-parse": "8.0.3", resolve: "1.20.0", semver: "7.3.5", "string-width": "4.2.2", "strip-ansi": "6.0.0", typescript: "4.2.4", "unicode-regex": "3.0.0", unified: "9.2.1", vnopts: "1.0.2", wcwidth: "1.0.1", "yaml-unist-parser": "1.3.1" }, devDependencies: { "@babel/core": "7.14.0", "@babel/preset-env": "7.14.1", "@babel/types": "7.14.1", "@glimmer/reference": "0.79.0", "@rollup/plugin-alias": "3.1.2", "@rollup/plugin-babel": "5.3.0", "@rollup/plugin-commonjs": "18.1.0", "@rollup/plugin-json": "4.1.0", "@rollup/plugin-node-resolve": "13.0.0", "@rollup/plugin-replace": "2.4.2", "@types/estree": "0.0.47", "@types/node": "15.0.1", "babel-jest": "26.6.3", "babel-loader": "8.2.2", benchmark: "2.1.4", "builtin-modules": "3.2.0", "cross-env": "7.0.3", cspell: "4.2.8", eslint: "7.26.0", "eslint-config-prettier": "8.3.0", "eslint-formatter-friendly": "7.0.0", "eslint-plugin-import": "2.22.1", "eslint-plugin-jest": "24.3.6", "eslint-plugin-prettier-internal-rules": "link:scripts/tools/eslint-plugin-prettier-internal-rules", "eslint-plugin-react": "7.23.2", "eslint-plugin-unicorn": "31.0.0", execa: "5.0.0", jest: "26.6.3", "jest-snapshot-serializer-ansi": "1.0.0", "jest-snapshot-serializer-raw": "1.2.0", "jest-watch-typeahead": "0.6.3", "npm-run-all": "4.1.5", "path-browserify": "1.0.1", prettier: "2.2.1", "pretty-bytes": "5.6.0", rimraf: "3.0.2", rollup: "2.47.0", "rollup-plugin-polyfill-node": "0.6.2", "rollup-plugin-terser": "7.0.2", shelljs: "0.8.4", "snapshot-diff": "0.8.1", "synchronous-promise": "2.0.15", tempy: "1.0.1", "terser-webpack-plugin": "5.1.1", webpack: "5.36.2" }, scripts: { prepublishOnly: 'echo "Error: must publish from dist/" && exit 1', "prepare-release": "yarn && yarn build && yarn test:dist", test: "jest", "test:dev-package": "cross-env INSTALL_PACKAGE=1 jest", "test:dist": "cross-env NODE_ENV=production jest", "test:dist-standalone": "cross-env NODE_ENV=production TEST_STANDALONE=1 jest", "test:integration": "jest tests/integration", "perf:repeat": "yarn && yarn build && cross-env NODE_ENV=production node ./dist/bin-prettier.js --debug-repeat ${PERF_REPEAT:-1000} --loglevel debug ${PERF_FILE:-./index.js} > /dev/null", "perf:repeat-inspect": "yarn && yarn build && cross-env NODE_ENV=production node --inspect-brk ./dist/bin-prettier.js --debug-repeat ${PERF_REPEAT:-1000} --loglevel debug ${PERF_FILE:-./index.js} > /dev/null", "perf:benchmark": "yarn && yarn build && cross-env NODE_ENV=production node ./dist/bin-prettier.js --debug-benchmark --loglevel debug ${PERF_FILE:-./index.js} > /dev/null", lint: "run-p lint:*", "lint:typecheck": "tsc", "lint:eslint": "cross-env EFF_NO_LINK_RULES=true eslint . --format friendly", "lint:changelog": "node ./scripts/lint-changelog.js", "lint:prettier": 'prettier . "!test*" --check', "lint:dist": 'eslint --no-eslintrc --no-ignore --no-inline-config --env=es6,browser --parser-options=ecmaVersion:2018 "dist/!(bin-prettier|index|third-party).js"', "lint:spellcheck": 'cspell "**/*" ".github/**/*"', "lint:deps": "node ./scripts/check-deps.js", fix: "run-s fix:eslint fix:prettier", "fix:eslint": "yarn lint:eslint --fix", "fix:prettier": "yarn lint:prettier --write", build: "node --max-old-space-size=3072 ./scripts/build/build.js", "build-docs": "node ./scripts/build-docs.js" } }, ye = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof go < "u" ? go : typeof self < "u" ? self : {};
    function Ve(r) {
      return r && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
    }
    function De(r) {
      var e = { exports: {} };
      return r(e, e.exports), e.exports;
    }
    var he = De(function(r, e) {
      function t() {
      }
      function n(a, i, o, s, c) {
        for (var l = 0, p = i.length, f = 0, d = 0; l < p; l++) {
          var D = i[l];
          if (D.removed) {
            if (D.value = a.join(s.slice(d, d + D.count)), d += D.count, l && i[l - 1].added) {
              var v = i[l - 1];
              i[l - 1] = i[l], i[l] = v;
            }
          } else {
            if (!D.added && c) {
              var y = o.slice(f, f + D.count);
              y = y.map(function(S, F) {
                var x = s[d + F];
                return x.length > S.length ? x : S;
              }), D.value = a.join(y);
            } else
              D.value = a.join(o.slice(f, f + D.count));
            f += D.count, D.added || (d += D.count);
          }
        }
        var b = i[p - 1];
        return p > 1 && typeof b.value == "string" && (b.added || b.removed) && a.equals("", b.value) && (i[p - 2].value += b.value, i.pop()), i;
      }
      function u(a) {
        return { newPos: a.newPos, components: a.components.slice(0) };
      }
      Object.defineProperty(e, "__esModule", { value: !0 }), e.default = t, t.prototype = { diff: function(i, o) {
        var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, c = s.callback;
        typeof s == "function" && (c = s, s = {}), this.options = s;
        var l = this;
        function p(x) {
          return c ? (setTimeout(function() {
            c(void 0, x);
          }, 0), !0) : x;
        }
        i = this.castInput(i), o = this.castInput(o), i = this.removeEmpty(this.tokenize(i));
        var f = (o = this.removeEmpty(this.tokenize(o))).length, d = i.length, D = 1, v = f + d, y = [{ newPos: -1, components: [] }], b = this.extractCommon(y[0], o, i, 0);
        if (y[0].newPos + 1 >= f && b + 1 >= d)
          return p([{ value: this.join(o), count: o.length }]);
        function S() {
          for (var x = -1 * D; x <= D; x += 2) {
            var w = void 0, A = y[x - 1], k = y[x + 1], O = (k ? k.newPos : 0) - x;
            A && (y[x - 1] = void 0);
            var q = A && A.newPos + 1 < f, H = k && 0 <= O && O < d;
            if (q || H) {
              if (!q || H && A.newPos < k.newPos ? (w = u(k), l.pushComponent(w.components, void 0, !0)) : ((w = A).newPos++, l.pushComponent(w.components, !0, void 0)), O = l.extractCommon(w, o, i, x), w.newPos + 1 >= f && O + 1 >= d)
                return p(n(l, w.components, o, i, l.useLongestToken));
              y[x] = w;
            } else
              y[x] = void 0;
          }
          D++;
        }
        if (c)
          (function x() {
            setTimeout(function() {
              if (D > v)
                return c();
              S() || x();
            }, 0);
          })();
        else
          for (; D <= v; ) {
            var F = S();
            if (F)
              return F;
          }
      }, pushComponent: function(i, o, s) {
        var c = i[i.length - 1];
        c && c.added === o && c.removed === s ? i[i.length - 1] = { count: c.count + 1, added: o, removed: s } : i.push({ count: 1, added: o, removed: s });
      }, extractCommon: function(i, o, s, c) {
        for (var l = o.length, p = s.length, f = i.newPos, d = f - c, D = 0; f + 1 < l && d + 1 < p && this.equals(o[f + 1], s[d + 1]); )
          f++, d++, D++;
        return D && i.components.push({ count: D }), i.newPos = f, d;
      }, equals: function(i, o) {
        return this.options.comparator ? this.options.comparator(i, o) : i === o || this.options.ignoreCase && i.toLowerCase() === o.toLowerCase();
      }, removeEmpty: function(i) {
        for (var o = [], s = 0; s < i.length; s++)
          i[s] && o.push(i[s]);
        return o;
      }, castInput: function(i) {
        return i;
      }, tokenize: function(i) {
        return i.split("");
      }, join: function(i) {
        return i.join("");
      } };
    }), Ge = De(function(r, e) {
      var t;
      Object.defineProperty(e, "__esModule", { value: !0 }), e.diffChars = function(u, a, i) {
        return n.diff(u, a, i);
      }, e.characterDiff = void 0;
      var n = new ((t = he) && t.__esModule ? t : { default: t }).default();
      e.characterDiff = n;
    }), Gt = function(e, t) {
      if (typeof e == "function")
        t.callback = e;
      else if (e)
        for (var n in e)
          e.hasOwnProperty(n) && (t[n] = e[n]);
      return t;
    }, Nn = Object.defineProperty({ generateOptions: Gt }, "__esModule", { value: !0 }), pn = De(function(r, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), e.diffWords = function(o, s, c) {
        return c = (0, Nn.generateOptions)(c, { ignoreWhitespace: !0 }), i.diff(o, s, c);
      }, e.diffWordsWithSpace = function(o, s, c) {
        return i.diff(o, s, c);
      }, e.wordDiff = void 0;
      var t, n = (t = he) && t.__esModule ? t : { default: t }, u = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/, a = /\S/, i = new n.default();
      e.wordDiff = i, i.equals = function(o, s) {
        return this.options.ignoreCase && (o = o.toLowerCase(), s = s.toLowerCase()), o === s || this.options.ignoreWhitespace && !a.test(o) && !a.test(s);
      }, i.tokenize = function(o) {
        for (var s = o.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/), c = 0; c < s.length - 1; c++)
          !s[c + 1] && s[c + 2] && u.test(s[c]) && u.test(s[c + 2]) && (s[c] += s[c + 2], s.splice(c + 1, 2), c--);
        return s;
      };
    }), bt = De(function(r, e) {
      var t;
      Object.defineProperty(e, "__esModule", { value: !0 }), e.diffLines = function(u, a, i) {
        return n.diff(u, a, i);
      }, e.diffTrimmedLines = function(u, a, i) {
        var o = (0, Nn.generateOptions)(i, { ignoreWhitespace: !0 });
        return n.diff(u, a, o);
      }, e.lineDiff = void 0;
      var n = new ((t = he) && t.__esModule ? t : { default: t }).default();
      e.lineDiff = n, n.tokenize = function(u) {
        var a = [], i = u.split(/(\n|\r\n)/);
        i[i.length - 1] || i.pop();
        for (var o = 0; o < i.length; o++) {
          var s = i[o];
          o % 2 && !this.options.newlineIsToken ? a[a.length - 1] += s : (this.options.ignoreWhitespace && (s = s.trim()), a.push(s));
        }
        return a;
      };
    }), Ht = De(function(r, e) {
      var t;
      Object.defineProperty(e, "__esModule", { value: !0 }), e.diffSentences = function(u, a, i) {
        return n.diff(u, a, i);
      }, e.sentenceDiff = void 0;
      var n = new ((t = he) && t.__esModule ? t : { default: t }).default();
      e.sentenceDiff = n, n.tokenize = function(u) {
        return u.split(/(\S.+?[.!?])(?=\s+|$)/);
      };
    }), or = De(function(r, e) {
      var t;
      Object.defineProperty(e, "__esModule", { value: !0 }), e.diffCss = function(u, a, i) {
        return n.diff(u, a, i);
      }, e.cssDiff = void 0;
      var n = new ((t = he) && t.__esModule ? t : { default: t }).default();
      e.cssDiff = n, n.tokenize = function(u) {
        return u.split(/([{}:;,]|\s+)/);
      };
    }), Ye = De(function(r, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), e.diffJson = function(s, c, l) {
        return i.diff(s, c, l);
      }, e.canonicalize = o, e.jsonDiff = void 0;
      var t, n = (t = he) && t.__esModule ? t : { default: t };
      function u(s) {
        return (u = typeof Symbol == "function" && Se(Symbol.iterator) == "symbol" ? function(c) {
          return Se(c);
        } : function(c) {
          return c && typeof Symbol == "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : Se(c);
        })(s);
      }
      var a = Object.prototype.toString, i = new n.default();
      function o(s, c, l, p, f) {
        var d, D;
        for (c = c || [], l = l || [], p && (s = p(f, s)), d = 0; d < c.length; d += 1)
          if (c[d] === s)
            return l[d];
        if (a.call(s) === "[object Array]") {
          for (c.push(s), D = new Array(s.length), l.push(D), d = 0; d < s.length; d += 1)
            D[d] = o(s[d], c, l, p, f);
          return c.pop(), l.pop(), D;
        }
        if (s && s.toJSON && (s = s.toJSON()), u(s) === "object" && s !== null) {
          c.push(s), D = {}, l.push(D);
          var v, y = [];
          for (v in s)
            s.hasOwnProperty(v) && y.push(v);
          for (y.sort(), d = 0; d < y.length; d += 1)
            D[v = y[d]] = o(s[v], c, l, p, v);
          c.pop(), l.pop();
        } else
          D = s;
        return D;
      }
      e.jsonDiff = i, i.useLongestToken = !0, i.tokenize = bt.lineDiff.tokenize, i.castInput = function(s) {
        var c = this.options, l = c.undefinedReplacement, p = c.stringifyReplacer, f = p === void 0 ? function(d, D) {
          return D === void 0 ? l : D;
        } : p;
        return typeof s == "string" ? s : JSON.stringify(o(s, null, null, f), f, "  ");
      }, i.equals = function(s, c) {
        return n.default.prototype.equals.call(i, s.replace(/,([\r\n])/g, "$1"), c.replace(/,([\r\n])/g, "$1"));
      };
    }), dr = De(function(r, e) {
      var t;
      Object.defineProperty(e, "__esModule", { value: !0 }), e.diffArrays = function(u, a, i) {
        return n.diff(u, a, i);
      }, e.arrayDiff = void 0;
      var n = new ((t = he) && t.__esModule ? t : { default: t }).default();
      e.arrayDiff = n, n.tokenize = function(u) {
        return u.slice();
      }, n.join = n.removeEmpty = function(u) {
        return u;
      };
    }), Ft = function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = e.split(/\r\n|[\n\v\f\r\x85]/), u = e.match(/\r\n|[\n\v\f\r\x85]/g) || [], a = [], i = 0;
      function o() {
        var l = {};
        for (a.push(l); i < n.length; ) {
          var p = n[i];
          if (/^(\-\-\-|\+\+\+|@@)\s/.test(p))
            break;
          var f = /^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(p);
          f && (l.index = f[1]), i++;
        }
        for (s(l), s(l), l.hunks = []; i < n.length; ) {
          var d = n[i];
          if (/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(d))
            break;
          if (/^@@/.test(d))
            l.hunks.push(c());
          else {
            if (d && t.strict)
              throw new Error("Unknown line " + (i + 1) + " " + JSON.stringify(d));
            i++;
          }
        }
      }
      function s(l) {
        var p = /^(---|\+\+\+)\s+(.*)$/.exec(n[i]);
        if (p) {
          var f = p[1] === "---" ? "old" : "new", d = p[2].split("	", 2), D = d[0].replace(/\\\\/g, "\\");
          /^".*"$/.test(D) && (D = D.substr(1, D.length - 2)), l[f + "FileName"] = D, l[f + "Header"] = (d[1] || "").trim(), i++;
        }
      }
      function c() {
        var l = i, p = n[i++].split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/), f = { oldStart: +p[1], oldLines: p[2] === void 0 ? 1 : +p[2], newStart: +p[3], newLines: p[4] === void 0 ? 1 : +p[4], lines: [], linedelimiters: [] };
        f.oldLines === 0 && (f.oldStart += 1), f.newLines === 0 && (f.newStart += 1);
        for (var d = 0, D = 0; i < n.length && !(n[i].indexOf("--- ") === 0 && i + 2 < n.length && n[i + 1].indexOf("+++ ") === 0 && n[i + 2].indexOf("@@") === 0); i++) {
          var v = n[i].length == 0 && i != n.length - 1 ? " " : n[i][0];
          if (v !== "+" && v !== "-" && v !== " " && v !== "\\")
            break;
          f.lines.push(n[i]), f.linedelimiters.push(u[i] || `
`), v === "+" ? d++ : v === "-" ? D++ : v === " " && (d++, D++);
        }
        if (d || f.newLines !== 1 || (f.newLines = 0), D || f.oldLines !== 1 || (f.oldLines = 0), t.strict) {
          if (d !== f.newLines)
            throw new Error("Added line count did not match for hunk at line " + (l + 1));
          if (D !== f.oldLines)
            throw new Error("Removed line count did not match for hunk at line " + (l + 1));
        }
        return f;
      }
      for (; i < n.length; )
        o();
      return a;
    }, Pn, zt = Object.defineProperty({ parsePatch: Ft }, "__esModule", { value: !0 }), ru = De(function(r, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function(t, n, u) {
        var a = !0, i = !1, o = !1, s = 1;
        return function c() {
          if (a && !o) {
            if (i ? s++ : a = !1, t + s <= u)
              return s;
            o = !0;
          }
          if (!i)
            return o || (a = !0), n <= t - s ? -s++ : (i = !0, c());
        };
      };
    }), ft = mc, fn = function(e, t) {
      typeof e == "string" && (e = (0, zt.parsePatch)(e));
      var n = 0;
      (function u() {
        var a = e[n++];
        if (!a)
          return t.complete();
        t.loadFile(a, function(i, o) {
          if (i)
            return t.complete(i);
          var s = mc(o, a, t);
          t.patched(a, s, function(c) {
            if (c)
              return t.complete(c);
            u();
          });
        });
      })();
    }, Uu = (Pn = ru) && Pn.__esModule ? Pn : { default: Pn };
    function mc(r, e) {
      var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (typeof e == "string" && (e = (0, zt.parsePatch)(e)), Array.isArray(e)) {
        if (e.length > 1)
          throw new Error("applyPatch only works with a single input.");
        e = e[0];
      }
      var n, u, a = r.split(/\r\n|[\n\v\f\r\x85]/), i = r.match(/\r\n|[\n\v\f\r\x85]/g) || [], o = e.hunks, s = t.compareLine || function(ue, Ce, oe, ae) {
        return Ce === ae;
      }, c = 0, l = t.fuzzFactor || 0, p = 0, f = 0;
      function d(ue, Ce) {
        for (var oe = 0; oe < ue.lines.length; oe++) {
          var ae = ue.lines[oe], ve = ae.length > 0 ? ae[0] : " ", Le = ae.length > 0 ? ae.substr(1) : ae;
          if (ve === " " || ve === "-") {
            if (!s(Ce + 1, a[Ce], ve, Le) && ++c > l)
              return !1;
            Ce++;
          }
        }
        return !0;
      }
      for (var D = 0; D < o.length; D++) {
        for (var v = o[D], y = a.length - v.oldLines, b = 0, S = f + v.oldStart - 1, F = (0, Uu.default)(S, p, y); b !== void 0; b = F())
          if (d(v, S + b)) {
            v.offset = f += b;
            break;
          }
        if (b === void 0)
          return !1;
        p = v.offset + v.oldStart + v.oldLines;
      }
      for (var x = 0, w = 0; w < o.length; w++) {
        var A = o[w], k = A.oldStart + A.offset + x - 1;
        x += A.newLines - A.oldLines;
        for (var O = 0; O < A.lines.length; O++) {
          var q = A.lines[O], H = q.length > 0 ? q[0] : " ", R = q.length > 0 ? q.substr(1) : q, $ = A.linedelimiters[O];
          if (H === " ")
            k++;
          else if (H === "-")
            a.splice(k, 1), i.splice(k, 1);
          else if (H === "+")
            a.splice(k, 0, R), i.splice(k, 0, $), k++;
          else if (H === "\\") {
            var K = A.lines[O - 1] ? A.lines[O - 1][0] : null;
            K === "+" ? n = !0 : K === "-" && (u = !0);
          }
        }
      }
      if (n)
        for (; !a[a.length - 1]; )
          a.pop(), i.pop();
      else
        u && (a.push(""), i.push(`
`));
      for (var ne = 0; ne < a.length - 1; ne++)
        a[ne] = a[ne] + i[ne];
      return a.join("");
    }
    var vc = Object.defineProperty({ applyPatch: ft, applyPatches: fn }, "__esModule", { value: !0 }), lf = yc, pf = Ec, ff = Cc, df = function(e, t, n, u, a, i) {
      return Cc(e, e, t, n, u, a, i);
    };
    function tu(r) {
      return function(e) {
        if (Array.isArray(e))
          return bo(e);
      }(r) || function(e) {
        if (typeof Symbol < "u" && Symbol.iterator in Object(e))
          return Array.from(e);
      }(r) || function(e, t) {
        if (!!e) {
          if (typeof e == "string")
            return bo(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
            return Array.from(e);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return bo(e, t);
        }
      }(r) || function() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    function bo(r, e) {
      (e == null || e > r.length) && (e = r.length);
      for (var t = 0, n = new Array(e); t < e; t++)
        n[t] = r[t];
      return n;
    }
    function yc(r, e, t, n, u, a, i) {
      i || (i = {}), i.context === void 0 && (i.context = 4);
      var o = (0, bt.diffLines)(t, n, i);
      function s(b) {
        return b.map(function(S) {
          return " " + S;
        });
      }
      o.push({ value: "", lines: [] });
      for (var c = [], l = 0, p = 0, f = [], d = 1, D = 1, v = function(S) {
        var F = o[S], x = F.lines || F.value.replace(/\n$/, "").split(`
`);
        if (F.lines = x, F.added || F.removed) {
          var w;
          if (!l) {
            var A = o[S - 1];
            l = d, p = D, A && (f = i.context > 0 ? s(A.lines.slice(-i.context)) : [], l -= f.length, p -= f.length);
          }
          (w = f).push.apply(w, tu(x.map(function(ne) {
            return (F.added ? "+" : "-") + ne;
          }))), F.added ? D += x.length : d += x.length;
        } else {
          if (l)
            if (x.length <= 2 * i.context && S < o.length - 2) {
              var k;
              (k = f).push.apply(k, tu(s(x)));
            } else {
              var O, q = Math.min(x.length, i.context);
              (O = f).push.apply(O, tu(s(x.slice(0, q))));
              var H = { oldStart: l, oldLines: d - l + q, newStart: p, newLines: D - p + q, lines: f };
              if (S >= o.length - 2 && x.length <= i.context) {
                var R = /\n$/.test(t), $ = /\n$/.test(n), K = x.length == 0 && f.length > H.oldLines;
                !R && K && t.length > 0 && f.splice(H.oldLines, 0, "\\ No newline at end of file"), (R || K) && $ || f.push("\\ No newline at end of file");
              }
              c.push(H), l = 0, p = 0, f = [];
            }
          d += x.length, D += x.length;
        }
      }, y = 0; y < o.length; y++)
        v(y);
      return { oldFileName: r, newFileName: e, oldHeader: u, newHeader: a, hunks: c };
    }
    function Ec(r) {
      var e = [];
      r.oldFileName == r.newFileName && e.push("Index: " + r.oldFileName), e.push("==================================================================="), e.push("--- " + r.oldFileName + (r.oldHeader === void 0 ? "" : "	" + r.oldHeader)), e.push("+++ " + r.newFileName + (r.newHeader === void 0 ? "" : "	" + r.newHeader));
      for (var t = 0; t < r.hunks.length; t++) {
        var n = r.hunks[t];
        n.oldLines === 0 && (n.oldStart -= 1), n.newLines === 0 && (n.newStart -= 1), e.push("@@ -" + n.oldStart + "," + n.oldLines + " +" + n.newStart + "," + n.newLines + " @@"), e.push.apply(e, n.lines);
      }
      return e.join(`
`) + `
`;
    }
    function Cc(r, e, t, n, u, a, i) {
      return Ec(yc(r, e, t, n, u, a, i));
    }
    var za = Object.defineProperty({ structuredPatch: lf, formatPatch: pf, createTwoFilesPatch: ff, createPatch: df }, "__esModule", { value: !0 }), Xa = function(e, t) {
      return e.length !== t.length ? !1 : ar(e, t);
    }, Fo = ar;
    function ar(r, e) {
      if (e.length > r.length)
        return !1;
      for (var t = 0; t < e.length; t++)
        if (e[t] !== r[t])
          return !1;
      return !0;
    }
    var So = Object.defineProperty({ arrayEqual: Xa, arrayStartsWith: Fo }, "__esModule", { value: !0 }), hf = wo, To = function(e, t, n) {
      e = Bo(e, n), t = Bo(t, n);
      var u = {};
      (e.index || t.index) && (u.index = e.index || t.index), (e.newFileName || t.newFileName) && (Ac(e) ? Ac(t) ? (u.oldFileName = Wu(u, e.oldFileName, t.oldFileName), u.newFileName = Wu(u, e.newFileName, t.newFileName), u.oldHeader = Wu(u, e.oldHeader, t.oldHeader), u.newHeader = Wu(u, e.newHeader, t.newHeader)) : (u.oldFileName = e.oldFileName, u.newFileName = e.newFileName, u.oldHeader = e.oldHeader, u.newHeader = e.newHeader) : (u.oldFileName = t.oldFileName || e.oldFileName, u.newFileName = t.newFileName || e.newFileName, u.oldHeader = t.oldHeader || e.oldHeader, u.newHeader = t.newHeader || e.newHeader)), u.hunks = [];
      for (var a = 0, i = 0, o = 0, s = 0; a < e.hunks.length || i < t.hunks.length; ) {
        var c = e.hunks[a] || { oldStart: 1 / 0 }, l = t.hunks[i] || { oldStart: 1 / 0 };
        if (ko(c, l))
          u.hunks.push(bc(c, o)), a++, s += c.newLines - c.oldLines;
        else if (ko(l, c))
          u.hunks.push(bc(l, s)), i++, o += l.newLines - l.oldLines;
        else {
          var p = { oldStart: Math.min(c.oldStart, l.oldStart), oldLines: 0, newStart: Math.min(c.newStart + o, l.oldStart + s), newLines: 0, lines: [] };
          Fc(p, c.oldStart, c.lines, l.oldStart, l.lines), i++, a++, u.hunks.push(p);
        }
      }
      return u;
    };
    function nu(r) {
      return function(e) {
        if (Array.isArray(e))
          return xo(e);
      }(r) || function(e) {
        if (typeof Symbol < "u" && Symbol.iterator in Object(e))
          return Array.from(e);
      }(r) || function(e, t) {
        if (!!e) {
          if (typeof e == "string")
            return xo(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
            return Array.from(e);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return xo(e, t);
        }
      }(r) || function() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    function xo(r, e) {
      (e == null || e > r.length) && (e = r.length);
      for (var t = 0, n = new Array(e); t < e; t++)
        n[t] = r[t];
      return n;
    }
    function wo(r) {
      var e = Jt(r.lines), t = e.oldLines, n = e.newLines;
      t !== void 0 ? r.oldLines = t : delete r.oldLines, n !== void 0 ? r.newLines = n : delete r.newLines;
    }
    function Bo(r, e) {
      if (typeof r == "string") {
        if (/^@@/m.test(r) || /^Index:/m.test(r))
          return (0, zt.parsePatch)(r)[0];
        if (!e)
          throw new Error("Must provide a base reference or pass in a patch");
        return (0, za.structuredPatch)(void 0, void 0, e, r);
      }
      return r;
    }
    function Ac(r) {
      return r.newFileName && r.newFileName !== r.oldFileName;
    }
    function Wu(r, e, t) {
      return e === t ? e : (r.conflict = !0, { mine: e, theirs: t });
    }
    function ko(r, e) {
      return r.oldStart < e.oldStart && r.oldStart + r.oldLines < e.oldStart;
    }
    function bc(r, e) {
      return { oldStart: r.oldStart, oldLines: r.oldLines, newStart: r.newStart + e, newLines: r.newLines, lines: r.lines };
    }
    function Fc(r, e, t, n, u) {
      var a = { offset: e, lines: t, index: 0 }, i = { offset: n, lines: u, index: 0 };
      for (No(r, a, i), No(r, i, a); a.index < a.lines.length && i.index < i.lines.length; ) {
        var o = a.lines[a.index], s = i.lines[i.index];
        if (o[0] !== "-" && o[0] !== "+" || s[0] !== "-" && s[0] !== "+")
          if (o[0] === "+" && s[0] === " ") {
            var c;
            (c = r.lines).push.apply(c, nu(Vr(a)));
          } else if (s[0] === "+" && o[0] === " ") {
            var l;
            (l = r.lines).push.apply(l, nu(Vr(i)));
          } else
            o[0] === "-" && s[0] === " " ? Ja(r, a, i) : s[0] === "-" && o[0] === " " ? Ja(r, i, a, !0) : o === s ? (r.lines.push(o), a.index++, i.index++) : In(r, Vr(a), Vr(i));
        else
          uu(r, a, i);
      }
      Po(r, a), Po(r, i), wo(r);
    }
    function uu(r, e, t) {
      var n = Vr(e), u = Vr(t);
      if (Xt(n) && Xt(u)) {
        var a, i;
        if ((0, So.arrayStartsWith)(n, u) && Io(t, n, n.length - u.length))
          return void (a = r.lines).push.apply(a, nu(n));
        if ((0, So.arrayStartsWith)(u, n) && Io(e, u, u.length - n.length))
          return void (i = r.lines).push.apply(i, nu(u));
      } else if ((0, So.arrayEqual)(n, u)) {
        var o;
        return void (o = r.lines).push.apply(o, nu(n));
      }
      In(r, n, u);
    }
    function Ja(r, e, t, n) {
      var u, a = Vr(e), i = function(o, s) {
        for (var c = [], l = [], p = 0, f = !1, d = !1; p < s.length && o.index < o.lines.length; ) {
          var D = o.lines[o.index], v = s[p];
          if (v[0] === "+")
            break;
          if (f = f || D[0] !== " ", l.push(v), p++, D[0] === "+")
            for (d = !0; D[0] === "+"; )
              c.push(D), D = o.lines[++o.index];
          v.substr(1) === D.substr(1) ? (c.push(D), o.index++) : d = !0;
        }
        if ((s[p] || "")[0] === "+" && f && (d = !0), d)
          return c;
        for (; p < s.length; )
          l.push(s[p++]);
        return { merged: l, changes: c };
      }(t, a);
      i.merged ? (u = r.lines).push.apply(u, nu(i.merged)) : In(r, n ? i : a, n ? a : i);
    }
    function In(r, e, t) {
      r.conflict = !0, r.lines.push({ conflict: !0, mine: e, theirs: t });
    }
    function No(r, e, t) {
      for (; e.offset < t.offset && e.index < e.lines.length; ) {
        var n = e.lines[e.index++];
        r.lines.push(n), e.offset++;
      }
    }
    function Po(r, e) {
      for (; e.index < e.lines.length; ) {
        var t = e.lines[e.index++];
        r.lines.push(t);
      }
    }
    function Vr(r) {
      for (var e = [], t = r.lines[r.index][0]; r.index < r.lines.length; ) {
        var n = r.lines[r.index];
        if (t === "-" && n[0] === "+" && (t = "+"), t !== n[0])
          break;
        e.push(n), r.index++;
      }
      return e;
    }
    function Xt(r) {
      return r.reduce(function(e, t) {
        return e && t[0] === "-";
      }, !0);
    }
    function Io(r, e, t) {
      for (var n = 0; n < t; n++) {
        var u = e[e.length - t + n].substr(1);
        if (r.lines[r.index + n] !== " " + u)
          return !1;
      }
      return r.index += t, !0;
    }
    function Jt(r) {
      var e = 0, t = 0;
      return r.forEach(function(n) {
        if (typeof n != "string") {
          var u = Jt(n.mine), a = Jt(n.theirs);
          e !== void 0 && (u.oldLines === a.oldLines ? e += u.oldLines : e = void 0), t !== void 0 && (u.newLines === a.newLines ? t += u.newLines : t = void 0);
        } else
          t === void 0 || n[0] !== "+" && n[0] !== " " || t++, e === void 0 || n[0] !== "-" && n[0] !== " " || e++;
      }), { oldLines: e, newLines: t };
    }
    var Yt = Object.defineProperty({ calcLineCount: hf, merge: To }, "__esModule", { value: !0 }), au = function(e) {
      for (var t, n, u = [], a = 0; a < e.length; a++)
        t = e[a], n = t.added ? 1 : t.removed ? -1 : 0, u.push([n, t.value]);
      return u;
    }, Ya = Object.defineProperty({ convertChangesToDMP: au }, "__esModule", { value: !0 }), Df = function(e) {
      for (var t = [], n = 0; n < e.length; n++) {
        var u = e[n];
        u.added ? t.push("<ins>") : u.removed && t.push("<del>"), t.push(Sc(u.value)), u.added ? t.push("</ins>") : u.removed && t.push("</del>");
      }
      return t.join("");
    };
    function Sc(r) {
      var e = r;
      return e = (e = (e = (e = e.replace(/&/g, "&amp;")).replace(/</g, "&lt;")).replace(/>/g, "&gt;")).replace(/"/g, "&quot;");
    }
    var Tc = Object.defineProperty({ convertChangesToXML: Df }, "__esModule", { value: !0 }), On = De(function(r, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "Diff", { enumerable: !0, get: function() {
        return t.default;
      } }), Object.defineProperty(e, "diffChars", { enumerable: !0, get: function() {
        return Ge.diffChars;
      } }), Object.defineProperty(e, "diffWords", { enumerable: !0, get: function() {
        return pn.diffWords;
      } }), Object.defineProperty(e, "diffWordsWithSpace", { enumerable: !0, get: function() {
        return pn.diffWordsWithSpace;
      } }), Object.defineProperty(e, "diffLines", { enumerable: !0, get: function() {
        return bt.diffLines;
      } }), Object.defineProperty(e, "diffTrimmedLines", { enumerable: !0, get: function() {
        return bt.diffTrimmedLines;
      } }), Object.defineProperty(e, "diffSentences", { enumerable: !0, get: function() {
        return Ht.diffSentences;
      } }), Object.defineProperty(e, "diffCss", { enumerable: !0, get: function() {
        return or.diffCss;
      } }), Object.defineProperty(e, "diffJson", { enumerable: !0, get: function() {
        return Ye.diffJson;
      } }), Object.defineProperty(e, "canonicalize", { enumerable: !0, get: function() {
        return Ye.canonicalize;
      } }), Object.defineProperty(e, "diffArrays", { enumerable: !0, get: function() {
        return dr.diffArrays;
      } }), Object.defineProperty(e, "applyPatch", { enumerable: !0, get: function() {
        return vc.applyPatch;
      } }), Object.defineProperty(e, "applyPatches", { enumerable: !0, get: function() {
        return vc.applyPatches;
      } }), Object.defineProperty(e, "parsePatch", { enumerable: !0, get: function() {
        return zt.parsePatch;
      } }), Object.defineProperty(e, "merge", { enumerable: !0, get: function() {
        return Yt.merge;
      } }), Object.defineProperty(e, "structuredPatch", { enumerable: !0, get: function() {
        return za.structuredPatch;
      } }), Object.defineProperty(e, "createTwoFilesPatch", { enumerable: !0, get: function() {
        return za.createTwoFilesPatch;
      } }), Object.defineProperty(e, "createPatch", { enumerable: !0, get: function() {
        return za.createPatch;
      } }), Object.defineProperty(e, "convertChangesToDMP", { enumerable: !0, get: function() {
        return Ya.convertChangesToDMP;
      } }), Object.defineProperty(e, "convertChangesToXML", { enumerable: !0, get: function() {
        return Tc.convertChangesToXML;
      } });
      var t = function(n) {
        return n && n.__esModule ? n : { default: n };
      }(he);
    });
    function Ka(r) {
      return { type: "concat", parts: r };
    }
    function xc(r) {
      return { type: "indent", contents: r };
    }
    function iu(r, e) {
      return { type: "align", contents: e, n: r };
    }
    function wc(r) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return { type: "group", id: e.id, contents: r, break: Boolean(e.shouldBreak), expandedStates: e.expandedStates };
    }
    var Oo = { type: "break-parent" }, Bc = { type: "line", hard: !0 }, kc = { type: "line", hard: !0, literal: !0 }, ou = Ka([Bc, Oo]), gf = Ka([kc, Oo]), Gu = { concat: Ka, join: function(e, t) {
      for (var n = [], u = 0; u < t.length; u++)
        u !== 0 && n.push(e), n.push(t[u]);
      return Ka(n);
    }, line: { type: "line" }, softline: { type: "line", soft: !0 }, hardline: ou, literalline: gf, group: wc, conditionalGroup: function(e, t) {
      return wc(e[0], Object.assign({}, t, { expandedStates: e }));
    }, fill: function(e) {
      return { type: "fill", parts: e };
    }, lineSuffix: function(e) {
      return { type: "line-suffix", contents: e };
    }, lineSuffixBoundary: { type: "line-suffix-boundary" }, cursor: { type: "cursor", placeholder: Symbol("cursor") }, breakParent: Oo, ifBreak: function(e, t) {
      var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return { type: "if-break", breakContents: e, flatContents: t, groupId: n.groupId };
    }, trim: { type: "trim" }, indent: xc, indentIfBreak: function(e, t) {
      return { type: "indent-if-break", contents: e, groupId: t.groupId, negate: t.negate };
    }, align: iu, addAlignmentToDoc: function(e, t, n) {
      var u = e;
      if (t > 0) {
        for (var a = 0; a < Math.floor(t / n); ++a)
          u = xc(u);
        u = iu(t % n, u), u = iu(Number.NEGATIVE_INFINITY, u);
      }
      return u;
    }, markAsRoot: function(e) {
      return iu({ type: "root" }, e);
    }, dedentToRoot: function(e) {
      return iu(Number.NEGATIVE_INFINITY, e);
    }, dedent: function(e) {
      return iu(-1, e);
    }, hardlineWithoutBreakParent: Bc, literallineWithoutBreakParent: kc, label: function(e, t) {
      return { type: "label", label: e, contents: t };
    } }, Qa = function(e) {
      return typeof e == "string" ? e.replace(function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.onlyFirst, u = n === void 0 ? !1 : n, a = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
        return new RegExp(a, u ? void 0 : "g");
      }(), "") : e;
    }, su = function(e) {
      return !Number.isNaN(e) && e >= 4352 && (e <= 4447 || e === 9001 || e === 9002 || 11904 <= e && e <= 12871 && e !== 12351 || 12880 <= e && e <= 19903 || 19968 <= e && e <= 42182 || 43360 <= e && e <= 43388 || 44032 <= e && e <= 55203 || 63744 <= e && e <= 64255 || 65040 <= e && e <= 65049 || 65072 <= e && e <= 65131 || 65281 <= e && e <= 65376 || 65504 <= e && e <= 65510 || 110592 <= e && e <= 110593 || 127488 <= e && e <= 127569 || 131072 <= e && e <= 262141);
    }, Za = su, Nc = su;
    Za.default = Nc;
    var Pc = function(e) {
      if (typeof e != "string" || e.length === 0 || (e = Qa(e)).length === 0)
        return 0;
      e = e.replace(/\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g, "  ");
      for (var t = 0, n = 0; n < e.length; n++) {
        var u = e.codePointAt(n);
        u <= 31 || u >= 127 && u <= 159 || u >= 768 && u <= 879 || (u > 65535 && n++, t += Za(u) ? 2 : 1);
      }
      return t;
    }, Ic = Pc, Oc = Pc;
    Ic.default = Oc;
    var Lo = function(e) {
      if (typeof e != "string")
        throw new TypeError("Expected a string");
      return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
    }, sr = function(e) {
      return e[e.length - 1];
    }, _a = function(e) {
      for (var t = -1, n = e == null ? 0 : e.length, u = {}; ++t < n; ) {
        var a = e[t];
        u[a[0]] = a[1];
      }
      return u;
    }, Pr = Pr !== void 0 ? Pr : typeof self < "u" ? self : typeof window < "u" ? window : {};
    function Ro() {
      throw new Error("setTimeout has not been defined");
    }
    function Mo() {
      throw new Error("clearTimeout has not been defined");
    }
    var at = Ro, dn = Mo;
    function jo(r) {
      if (at === setTimeout)
        return setTimeout(r, 0);
      if ((at === Ro || !at) && setTimeout)
        return at = setTimeout, setTimeout(r, 0);
      try {
        return at(r, 0);
      } catch {
        try {
          return at.call(null, r, 0);
        } catch {
          return at.call(this, r, 0);
        }
      }
    }
    typeof Pr.setTimeout == "function" && (at = setTimeout), typeof Pr.clearTimeout == "function" && (dn = clearTimeout);
    var Kt, Qt = [], Ln = !1, Hu = -1;
    function Lc() {
      Ln && Kt && (Ln = !1, Kt.length ? Qt = Kt.concat(Qt) : Hu = -1, Qt.length && $o());
    }
    function $o() {
      if (!Ln) {
        var r = jo(Lc);
        Ln = !0;
        for (var e = Qt.length; e; ) {
          for (Kt = Qt, Qt = []; ++Hu < e; )
            Kt && Kt[Hu].run();
          Hu = -1, e = Qt.length;
        }
        Kt = null, Ln = !1, function(t) {
          if (dn === clearTimeout)
            return clearTimeout(t);
          if ((dn === Mo || !dn) && clearTimeout)
            return dn = clearTimeout, clearTimeout(t);
          try {
            dn(t);
          } catch {
            try {
              return dn.call(null, t);
            } catch {
              return dn.call(this, t);
            }
          }
        }(r);
      }
    }
    function qo(r, e) {
      this.fun = r, this.array = e;
    }
    qo.prototype.run = function() {
      this.fun.apply(null, this.array);
    };
    function hn() {
    }
    var mf = hn, vf = hn, yf = hn, cu = hn, Vo = hn, ei = hn, ri = hn, Ur = Pr.performance || {}, Rn = Ur.now || Ur.mozNow || Ur.msNow || Ur.oNow || Ur.webkitNow || function() {
      return new Date().getTime();
    }, Ef = new Date(), Ir = { nextTick: function(e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
      Qt.push(new qo(e, t)), Qt.length !== 1 || Ln || jo($o);
    }, title: "browser", browser: !0, env: {}, argv: [], version: "", versions: {}, on: mf, addListener: vf, once: yf, off: cu, removeListener: Vo, removeAllListeners: ei, emit: ri, binding: function(e) {
      throw new Error("process.binding is not supported");
    }, cwd: function() {
      return "/";
    }, chdir: function(e) {
      throw new Error("process.chdir is not supported");
    }, umask: function() {
      return 0;
    }, hrtime: function(e) {
      var t = 1e-3 * Rn.call(Ur), n = Math.floor(t), u = Math.floor(t % 1 * 1e9);
      return e && (n -= e[0], (u -= e[1]) < 0 && (n--, u += 1e9)), [n, u];
    }, platform: "browser", release: {}, config: {}, uptime: function() {
      return (new Date() - Ef) / 1e3;
    } }, zu = Se(Ir) == "object" && Ir.env && Ir.env.NODE_DEBUG && /\bsemver\b/i.test(Ir.env.NODE_DEBUG) ? function() {
      for (var r, e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return (r = console).error.apply(r, ["SEMVER"].concat(t));
    } : function() {
    }, Uo = { SEMVER_SPEC_VERSION: "2.0.0", MAX_LENGTH: 256, MAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER || 9007199254740991, MAX_SAFE_COMPONENT_LENGTH: 16 }, Rc = De(function(r, e) {
      var t = Uo.MAX_SAFE_COMPONENT_LENGTH, n = (e = r.exports = {}).re = [], u = e.src = [], a = e.t = {}, i = 0, o = function(c, l, p) {
        var f = i++;
        zu(f, l), a[c] = f, u[f] = l, n[f] = new RegExp(l, p ? "g" : void 0);
      };
      o("NUMERICIDENTIFIER", "0|[1-9]\\d*"), o("NUMERICIDENTIFIERLOOSE", "[0-9]+"), o("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"), o("MAINVERSION", "(".concat(u[a.NUMERICIDENTIFIER], ")\\.") + "(".concat(u[a.NUMERICIDENTIFIER], ")\\.") + "(".concat(u[a.NUMERICIDENTIFIER], ")")), o("MAINVERSIONLOOSE", "(".concat(u[a.NUMERICIDENTIFIERLOOSE], ")\\.") + "(".concat(u[a.NUMERICIDENTIFIERLOOSE], ")\\.") + "(".concat(u[a.NUMERICIDENTIFIERLOOSE], ")")), o("PRERELEASEIDENTIFIER", "(?:".concat(u[a.NUMERICIDENTIFIER], "|").concat(u[a.NONNUMERICIDENTIFIER], ")")), o("PRERELEASEIDENTIFIERLOOSE", "(?:".concat(u[a.NUMERICIDENTIFIERLOOSE], "|").concat(u[a.NONNUMERICIDENTIFIER], ")")), o("PRERELEASE", "(?:-(".concat(u[a.PRERELEASEIDENTIFIER], "(?:\\.").concat(u[a.PRERELEASEIDENTIFIER], ")*))")), o("PRERELEASELOOSE", "(?:-?(".concat(u[a.PRERELEASEIDENTIFIERLOOSE], "(?:\\.").concat(u[a.PRERELEASEIDENTIFIERLOOSE], ")*))")), o("BUILDIDENTIFIER", "[0-9A-Za-z-]+"), o("BUILD", "(?:\\+(".concat(u[a.BUILDIDENTIFIER], "(?:\\.").concat(u[a.BUILDIDENTIFIER], ")*))")), o("FULLPLAIN", "v?".concat(u[a.MAINVERSION]).concat(u[a.PRERELEASE], "?").concat(u[a.BUILD], "?")), o("FULL", "^".concat(u[a.FULLPLAIN], "$")), o("LOOSEPLAIN", "[v=\\s]*".concat(u[a.MAINVERSIONLOOSE]).concat(u[a.PRERELEASELOOSE], "?").concat(u[a.BUILD], "?")), o("LOOSE", "^".concat(u[a.LOOSEPLAIN], "$")), o("GTLT", "((?:<|>)?=?)"), o("XRANGEIDENTIFIERLOOSE", "".concat(u[a.NUMERICIDENTIFIERLOOSE], "|x|X|\\*")), o("XRANGEIDENTIFIER", "".concat(u[a.NUMERICIDENTIFIER], "|x|X|\\*")), o("XRANGEPLAIN", "[v=\\s]*(".concat(u[a.XRANGEIDENTIFIER], ")") + "(?:\\.(".concat(u[a.XRANGEIDENTIFIER], ")") + "(?:\\.(".concat(u[a.XRANGEIDENTIFIER], ")") + "(?:".concat(u[a.PRERELEASE], ")?").concat(u[a.BUILD], "?") + ")?)?"), o("XRANGEPLAINLOOSE", "[v=\\s]*(".concat(u[a.XRANGEIDENTIFIERLOOSE], ")") + "(?:\\.(".concat(u[a.XRANGEIDENTIFIERLOOSE], ")") + "(?:\\.(".concat(u[a.XRANGEIDENTIFIERLOOSE], ")") + "(?:".concat(u[a.PRERELEASELOOSE], ")?").concat(u[a.BUILD], "?") + ")?)?"), o("XRANGE", "^".concat(u[a.GTLT], "\\s*").concat(u[a.XRANGEPLAIN], "$")), o("XRANGELOOSE", "^".concat(u[a.GTLT], "\\s*").concat(u[a.XRANGEPLAINLOOSE], "$")), o("COERCE", "".concat("(^|[^\\d])(\\d{1,").concat(t, "})") + "(?:\\.(\\d{1,".concat(t, "}))?") + "(?:\\.(\\d{1,".concat(t, "}))?") + "(?:$|[^\\d])"), o("COERCERTL", u[a.COERCE], !0), o("LONETILDE", "(?:~>?)"), o("TILDETRIM", "(\\s*)".concat(u[a.LONETILDE], "\\s+"), !0), e.tildeTrimReplace = "$1~", o("TILDE", "^".concat(u[a.LONETILDE]).concat(u[a.XRANGEPLAIN], "$")), o("TILDELOOSE", "^".concat(u[a.LONETILDE]).concat(u[a.XRANGEPLAINLOOSE], "$")), o("LONECARET", "(?:\\^)"), o("CARETTRIM", "(\\s*)".concat(u[a.LONECARET], "\\s+"), !0), e.caretTrimReplace = "$1^", o("CARET", "^".concat(u[a.LONECARET]).concat(u[a.XRANGEPLAIN], "$")), o("CARETLOOSE", "^".concat(u[a.LONECARET]).concat(u[a.XRANGEPLAINLOOSE], "$")), o("COMPARATORLOOSE", "^".concat(u[a.GTLT], "\\s*(").concat(u[a.LOOSEPLAIN], ")$|^$")), o("COMPARATOR", "^".concat(u[a.GTLT], "\\s*(").concat(u[a.FULLPLAIN], ")$|^$")), o("COMPARATORTRIM", "(\\s*)".concat(u[a.GTLT], "\\s*(").concat(u[a.LOOSEPLAIN], "|").concat(u[a.XRANGEPLAIN], ")"), !0), e.comparatorTrimReplace = "$1$2$3", o("HYPHENRANGE", "^\\s*(".concat(u[a.XRANGEPLAIN], ")") + "\\s+-\\s+" + "(".concat(u[a.XRANGEPLAIN], ")") + "\\s*$"), o("HYPHENRANGELOOSE", "^\\s*(".concat(u[a.XRANGEPLAINLOOSE], ")") + "\\s+-\\s+" + "(".concat(u[a.XRANGEPLAINLOOSE], ")") + "\\s*$"), o("STAR", "(<|>)?=?\\s*\\*"), o("GTE0", "^\\s*>=\\s*0.0.0\\s*$"), o("GTE0PRE", "^\\s*>=\\s*0.0.0-0\\s*$");
    }), Cf = ["includePrerelease", "loose", "rtl"], Af = function(e) {
      return e ? Se(e) != "object" ? { loose: !0 } : Cf.filter(function(t) {
        return e[t];
      }).reduce(function(t, n) {
        return t[n] = !0, t;
      }, {}) : {};
    }, lu = /^[0-9]+$/, Mc = function(e, t) {
      var n = lu.test(e), u = lu.test(t);
      return n && u && (e = +e, t = +t), e === t ? 0 : n && !u ? -1 : u && !n ? 1 : e < t ? -1 : 1;
    }, Mn = { compareIdentifiers: Mc, rcompareIdentifiers: function(e, t) {
      return Mc(t, e);
    } }, Wo = Uo.MAX_LENGTH, Xu = Uo.MAX_SAFE_INTEGER, ti = Rc.re, ni = Rc.t, St = Mn.compareIdentifiers, jc = /* @__PURE__ */ function() {
      function r(e, t) {
        if (se(this, r), t = Af(t), e instanceof r) {
          if (e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease)
            return e;
          e = e.version;
        } else if (typeof e != "string")
          throw new TypeError("Invalid Version: ".concat(e));
        if (e.length > Wo)
          throw new TypeError("version is longer than ".concat(Wo, " characters"));
        zu("SemVer", e, t), this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease;
        var n = e.trim().match(t.loose ? ti[ni.LOOSE] : ti[ni.FULL]);
        if (!n)
          throw new TypeError("Invalid Version: ".concat(e));
        if (this.raw = e, this.major = +n[1], this.minor = +n[2], this.patch = +n[3], this.major > Xu || this.major < 0)
          throw new TypeError("Invalid major version");
        if (this.minor > Xu || this.minor < 0)
          throw new TypeError("Invalid minor version");
        if (this.patch > Xu || this.patch < 0)
          throw new TypeError("Invalid patch version");
        n[4] ? this.prerelease = n[4].split(".").map(function(u) {
          if (/^[0-9]+$/.test(u)) {
            var a = +u;
            if (a >= 0 && a < Xu)
              return a;
          }
          return u;
        }) : this.prerelease = [], this.build = n[5] ? n[5].split(".") : [], this.format();
      }
      return ce(r, [{ key: "format", value: function() {
        return this.version = "".concat(this.major, ".").concat(this.minor, ".").concat(this.patch), this.prerelease.length && (this.version += "-".concat(this.prerelease.join("."))), this.version;
      } }, { key: "toString", value: function() {
        return this.version;
      } }, { key: "compare", value: function(t) {
        if (zu("SemVer.compare", this.version, this.options, t), !(t instanceof r)) {
          if (typeof t == "string" && t === this.version)
            return 0;
          t = new r(t, this.options);
        }
        return t.version === this.version ? 0 : this.compareMain(t) || this.comparePre(t);
      } }, { key: "compareMain", value: function(t) {
        return t instanceof r || (t = new r(t, this.options)), St(this.major, t.major) || St(this.minor, t.minor) || St(this.patch, t.patch);
      } }, { key: "comparePre", value: function(t) {
        if (t instanceof r || (t = new r(t, this.options)), this.prerelease.length && !t.prerelease.length)
          return -1;
        if (!this.prerelease.length && t.prerelease.length)
          return 1;
        if (!this.prerelease.length && !t.prerelease.length)
          return 0;
        var n = 0;
        do {
          var u = this.prerelease[n], a = t.prerelease[n];
          if (zu("prerelease compare", n, u, a), u === void 0 && a === void 0)
            return 0;
          if (a === void 0)
            return 1;
          if (u === void 0)
            return -1;
          if (u !== a)
            return St(u, a);
        } while (++n);
      } }, { key: "compareBuild", value: function(t) {
        t instanceof r || (t = new r(t, this.options));
        var n = 0;
        do {
          var u = this.build[n], a = t.build[n];
          if (zu("prerelease compare", n, u, a), u === void 0 && a === void 0)
            return 0;
          if (a === void 0)
            return 1;
          if (u === void 0)
            return -1;
          if (u !== a)
            return St(u, a);
        } while (++n);
      } }, { key: "inc", value: function(t, n) {
        switch (t) {
          case "premajor":
            this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", n);
            break;
          case "preminor":
            this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", n);
            break;
          case "prepatch":
            this.prerelease.length = 0, this.inc("patch", n), this.inc("pre", n);
            break;
          case "prerelease":
            this.prerelease.length === 0 && this.inc("patch", n), this.inc("pre", n);
            break;
          case "major":
            this.minor === 0 && this.patch === 0 && this.prerelease.length !== 0 || this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
            break;
          case "minor":
            this.patch === 0 && this.prerelease.length !== 0 || this.minor++, this.patch = 0, this.prerelease = [];
            break;
          case "patch":
            this.prerelease.length === 0 && this.patch++, this.prerelease = [];
            break;
          case "pre":
            if (this.prerelease.length === 0)
              this.prerelease = [0];
            else {
              for (var u = this.prerelease.length; --u >= 0; )
                typeof this.prerelease[u] == "number" && (this.prerelease[u]++, u = -2);
              u === -1 && this.prerelease.push(0);
            }
            n && (this.prerelease[0] === n ? isNaN(this.prerelease[1]) && (this.prerelease = [n, 0]) : this.prerelease = [n, 0]);
            break;
          default:
            throw new Error("invalid increment argument: ".concat(t));
        }
        return this.format(), this.raw = this.version, this;
      } }]), r;
    }(), Go = jc, ui = function(e, t, n) {
      return new Go(e, n).compare(new Go(t, n));
    }, $c = function(e, t, n) {
      return ui(e, t, n) < 0;
    }, Ho, zo, Xo, ai, Ju, qc, bf = function(e, t, n) {
      return ui(e, t, n) >= 0;
    }, Jo = De(function(r, e) {
      function t() {
        for (var y = [], b = 0; b < arguments.length; b++)
          y[b] = arguments[b];
      }
      function n() {
        return typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : { add: t, delete: t, get: t, set: t, has: function(b) {
          return !1;
        } };
      }
      Object.defineProperty(e, "__esModule", { value: !0 }), e.outdent = void 0;
      var u = Object.prototype.hasOwnProperty, a = function(b, S) {
        return u.call(b, S);
      };
      function i(y, b) {
        for (var S in b)
          a(b, S) && (y[S] = b[S]);
        return y;
      }
      var o = /^[ \t]*(?:\r\n|\r|\n)/, s = /(?:\r\n|\r|\n)[ \t]*$/, c = /^(?:[\r\n]|$)/, l = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/, p = /^[ \t]*[\r\n][ \t\r\n]*$/;
      function f(y, b, S) {
        var F = 0, x = y[0].match(l);
        x && (F = x[1].length);
        var w = new RegExp("(\\r\\n|\\r|\\n).{0," + F + "}", "g");
        b && (y = y.slice(1));
        var A = S.newline, k = S.trimLeadingNewline, O = S.trimTrailingNewline, q = typeof A == "string", H = y.length;
        return y.map(function(R, $) {
          return R = R.replace(w, "$1"), $ === 0 && k && (R = R.replace(o, "")), $ === H - 1 && O && (R = R.replace(s, "")), q && (R = R.replace(/\r\n|\n|\r/g, function(K) {
            return A;
          })), R;
        });
      }
      function d(y, b) {
        for (var S = "", F = 0, x = y.length; F < x; F++)
          S += y[F], F < x - 1 && (S += b[F]);
        return S;
      }
      function D(y) {
        return a(y, "raw") && a(y, "length");
      }
      var v = function y(b) {
        var S = n(), F = n();
        return i(function x(w) {
          for (var A = [], k = 1; k < arguments.length; k++)
            A[k - 1] = arguments[k];
          if (D(w)) {
            var O = w, q = (A[0] === x || A[0] === v) && p.test(O[0]) && c.test(O[1]), H = q ? F : S, R = H.get(O);
            if (R || (R = f(O, q, b), H.set(O, R)), A.length === 0)
              return R[0];
            var $ = d(R, q ? A.slice(1) : A);
            return $;
          }
          return y(i(i({}, b), w || {}));
        }, { string: function(w) {
          return f([w], !1, b)[0];
        } });
      }({ trimLeadingNewline: !0, trimTrailingNewline: !0 });
      e.outdent = v, e.default = v;
      try {
        r.exports = v, Object.defineProperty(v, "__esModule", { value: !0 }), v.default = v, v.outdent = v;
      } catch {
      }
    }), Zt = Jo.outdent, Yo = "Config", ii = "Editor", oi = "Other", _t = "Global", jn = "Special", Ff = { cursorOffset: { since: "1.4.0", category: jn, type: "int", default: -1, range: { start: -1, end: Number.POSITIVE_INFINITY, step: 1 }, description: Zt(Ho || (Ho = U([`
      Print (to stderr) where a cursor at the given position would move to after formatting.
      This option cannot be used with --range-start and --range-end.
    `]))), cliCategory: ii }, endOfLine: { since: "1.15.0", category: _t, type: "choice", default: [{ since: "1.15.0", value: "auto" }, { since: "2.0.0", value: "lf" }], description: "Which end of line characters to apply.", choices: [{ value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos" }, { value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows" }, { value: "cr", description: "Carriage Return character only (\\r), used very rarely" }, { value: "auto", description: Zt(zo || (zo = U([`
          Maintain existing
          (mixed values within one file are normalised by looking at what's used after the first line)
        `]))) }] }, filepath: { since: "1.4.0", category: jn, type: "path", description: "Specify the input filepath. This will be used to do parser inference.", cliName: "stdin-filepath", cliCategory: oi, cliDescription: "Path to the file to pretend that stdin comes from." }, insertPragma: { since: "1.8.0", category: jn, type: "boolean", default: !1, description: "Insert @format pragma into file's first docblock comment.", cliCategory: oi }, parser: { since: "0.0.10", category: _t, type: "choice", default: [{ since: "0.0.10", value: "babylon" }, { since: "1.13.0", value: void 0 }], description: "Which parser to use.", exception: function(e) {
      return typeof e == "string" || typeof e == "function";
    }, choices: [{ value: "flow", description: "Flow" }, { value: "babel", since: "1.16.0", description: "JavaScript" }, { value: "babel-flow", since: "1.16.0", description: "Flow" }, { value: "babel-ts", since: "2.0.0", description: "TypeScript" }, { value: "typescript", since: "1.4.0", description: "TypeScript" }, { value: "espree", since: "2.2.0", description: "JavaScript" }, { value: "meriyah", since: "2.2.0", description: "JavaScript" }, { value: "css", since: "1.7.1", description: "CSS" }, { value: "less", since: "1.7.1", description: "Less" }, { value: "scss", since: "1.7.1", description: "SCSS" }, { value: "json", since: "1.5.0", description: "JSON" }, { value: "json5", since: "1.13.0", description: "JSON5" }, { value: "json-stringify", since: "1.13.0", description: "JSON.stringify" }, { value: "graphql", since: "1.5.0", description: "GraphQL" }, { value: "markdown", since: "1.8.0", description: "Markdown" }, { value: "mdx", since: "1.15.0", description: "MDX" }, { value: "vue", since: "1.10.0", description: "Vue" }, { value: "yaml", since: "1.14.0", description: "YAML" }, { value: "glimmer", since: "2.3.0", description: "Ember / Handlebars" }, { value: "html", since: "1.15.0", description: "HTML" }, { value: "angular", since: "1.15.0", description: "Angular" }, { value: "lwc", since: "1.17.0", description: "Lightning Web Components" }] }, plugins: { since: "1.10.0", type: "path", array: !0, default: [{ value: [] }], category: _t, description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.", exception: function(e) {
      return typeof e == "string" || Se(e) == "object";
    }, cliName: "plugin", cliCategory: Yo }, pluginSearchDirs: { since: "1.13.0", type: "path", array: !0, default: [{ value: [] }], category: _t, description: Zt(Xo || (Xo = U([`
      Custom directory that contains prettier plugins in node_modules subdirectory.
      Overrides default behavior when plugins are searched relatively to the location of Prettier.
      Multiple values are accepted.
    `]))), exception: function(e) {
      return typeof e == "string" || Se(e) == "object";
    }, cliName: "plugin-search-dir", cliCategory: Yo }, printWidth: { since: "0.0.0", category: _t, type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 } }, rangeEnd: { since: "1.4.0", category: jn, type: "int", default: Number.POSITIVE_INFINITY, range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }, description: Zt(ai || (ai = U([`
      Format code ending at a given character offset (exclusive).
      The range will extend forwards to the end of the selected statement.
      This option cannot be used with --cursor-offset.
    `]))), cliCategory: ii }, rangeStart: { since: "1.4.0", category: jn, type: "int", default: 0, range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }, description: Zt(Ju || (Ju = U([`
      Format code starting at a given character offset.
      The range will extend backwards to the start of the first line containing the selected statement.
      This option cannot be used with --cursor-offset.
    `]))), cliCategory: ii }, requirePragma: { since: "1.7.0", category: jn, type: "boolean", default: !1, description: Zt(qc || (qc = U([`
      Require either '@prettier' or '@format' to be present in the file's first docblock comment
      in order for it to be formatted.
    `]))), cliCategory: oi }, tabWidth: { type: "int", category: _t, default: 2, description: "Number of spaces per indentation level.", range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 } }, useTabs: { since: "1.0.0", category: _t, type: "boolean", default: !1, description: "Indent with tabs instead of spaces." }, embeddedLanguageFormatting: { since: "2.1.0", category: _t, type: "choice", default: [{ since: "2.1.0", value: "auto" }], description: "Control how Prettier formats quoted code embedded in the file.", choices: [{ value: "auto", description: "Format embedded code if Prettier can automatically identify it." }, { value: "off", description: "Never automatically format embedded code." }] } }, Ko = { compare: ui, lt: $c, gte: bf }, Vc = re.version, Uc = Ff, si = { getSupportInfo: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.plugins, n = t === void 0 ? [] : t, u = e.showUnreleased, a = u === void 0 ? !1 : u, i = e.showDeprecated, o = i === void 0 ? !1 : i, s = e.showInternal, c = s === void 0 ? !1 : s, l = Vc.split("-", 1)[0], p = n.reduce(function(v, y) {
        return [].concat(_(v), _(y.languages || []));
      }, []).filter(d), f = function(v, y) {
        return Object.entries(v).map(function(b) {
          var S = ke(b, 2), F = S[0], x = S[1];
          return Object.assign(Zn({}, y, F), x);
        });
      }(Object.assign.apply(Object, [{}].concat(_(n.map(function(v) {
        var y = v.options;
        return y;
      })), [Uc])), "name").filter(function(v) {
        return d(v) && D(v);
      }).sort(function(v, y) {
        return v.name === y.name ? 0 : v.name < y.name ? -1 : 1;
      }).map(function(v) {
        return c ? v : M(v, ["cliName", "cliCategory", "cliDescription"]);
      }).map(function(v) {
        v = Object.assign({}, v), Array.isArray(v.default) && (v.default = v.default.length === 1 ? v.default[0].value : v.default.filter(d).sort(function(b, S) {
          return Ko.compare(S.since, b.since);
        })[0].value), Array.isArray(v.choices) && (v.choices = v.choices.filter(function(b) {
          return d(b) && D(b);
        }), v.name === "parser" && function(b, S, F) {
          var x = new Set(b.choices.map(function(R) {
            return R.value;
          })), w = le(S), A;
          try {
            for (w.s(); !(A = w.n()).done; ) {
              var k = A.value;
              if (k.parsers) {
                var O = le(k.parsers), q;
                try {
                  var H = function() {
                    var $ = q.value;
                    if (!x.has($)) {
                      x.add($);
                      var K = F.find(function(ue) {
                        return ue.parsers && ue.parsers[$];
                      }), ne = k.name;
                      K && K.name && (ne += " (plugin: ".concat(K.name, ")")), b.choices.push({ value: $, description: ne });
                    }
                  };
                  for (O.s(); !(q = O.n()).done; )
                    H();
                } catch (R) {
                  O.e(R);
                } finally {
                  O.f();
                }
              }
            }
          } catch (R) {
            w.e(R);
          } finally {
            w.f();
          }
        }(v, p, n));
        var y = _a(n.filter(function(b) {
          return b.defaultOptions && b.defaultOptions[v.name] !== void 0;
        }).map(function(b) {
          return [b.name, b.defaultOptions[v.name]];
        }));
        return Object.assign({}, v, { pluginDefaults: y });
      });
      return { languages: p, options: f };
      function d(v) {
        return a || !("since" in v) || v.since && Ko.gte(l, v.since);
      }
      function D(v) {
        return o || !("deprecated" in v) || v.deprecated && Ko.lt(l, v.deprecated);
      }
    } }, Wc = si.getSupportInfo, $n = /[^\x20-\x7F]/;
    function pu(r) {
      return function(e, t, n) {
        var u = n && n.backwards;
        if (t === !1)
          return !1;
        for (var a = e.length, i = t; i >= 0 && i < a; ) {
          var o = e.charAt(i);
          if (r instanceof RegExp) {
            if (!r.test(o))
              return i;
          } else if (!r.includes(o))
            return i;
          u ? i-- : i++;
        }
        return (i === -1 || i === a) && i;
      };
    }
    var Gc = pu(/\s/), Dn = pu(" 	"), Qo = pu(",; 	"), Zo = pu(/[^\n\r]/);
    function ci(r, e) {
      if (e === !1)
        return !1;
      if (r.charAt(e) === "/" && r.charAt(e + 1) === "*") {
        for (var t = e + 2; t < r.length; ++t)
          if (r.charAt(t) === "*" && r.charAt(t + 1) === "/")
            return t + 2;
      }
      return e;
    }
    function li(r, e) {
      return e !== !1 && (r.charAt(e) === "/" && r.charAt(e + 1) === "/" ? Zo(r, e) : e);
    }
    function qn(r, e, t) {
      var n = t && t.backwards;
      if (e === !1)
        return !1;
      var u = r.charAt(e);
      if (n) {
        if (r.charAt(e - 1) === "\r" && u === `
`)
          return e - 2;
        if (u === `
` || u === "\r" || u === "\u2028" || u === "\u2029")
          return e - 1;
      } else {
        if (u === "\r" && r.charAt(e + 1) === `
`)
          return e + 2;
        if (u === `
` || u === "\r" || u === "\u2028" || u === "\u2029")
          return e + 1;
      }
      return e;
    }
    function fu(r, e) {
      var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = Dn(r, t.backwards ? e - 1 : e, t);
      return n !== qn(r, n, t);
    }
    function Vn(r, e) {
      for (var t = null, n = e; n !== t; )
        t = n, n = Qo(r, n), n = ci(r, n), n = Dn(r, n);
      return n = li(r, n), n = qn(r, n), n !== !1 && fu(r, n);
    }
    function Yu(r, e) {
      for (var t = null, n = e; n !== t; )
        t = n, n = Dn(r, n), n = ci(r, n), n = li(r, n), n = qn(r, n);
      return n;
    }
    function pi(r, e, t) {
      return Yu(r, t(e));
    }
    function Hc(r, e) {
      for (var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, n = 0, u = t; u < r.length; ++u)
        r[u] === "	" ? n = n + e - n % e : n++;
      return n;
    }
    function Ku(r, e) {
      var t = r.slice(1, -1), n = { quote: '"', regex: /"/g }, u = { quote: "'", regex: /'/g }, a = e === "'" ? u : n, i = a === u ? n : u, o = a.quote;
      return (t.includes(a.quote) || t.includes(i.quote)) && (o = (t.match(a.regex) || []).length > (t.match(i.regex) || []).length ? i.quote : a.quote), o;
    }
    function fi(r, e, t) {
      var n = e === '"' ? "'" : '"', u = r.replace(/\\([\S\s])|(["'])/g, function(a, i, o) {
        return i === n ? i : o === e ? "\\" + o : o || (t && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(i) ? i : "\\" + i);
      });
      return e + u + e;
    }
    function Qu(r, e) {
      (r.comments || (r.comments = [])).push(e), e.printed = !1, e.nodeDescription = function(t) {
        var n = t.type || t.kind || "(unknown type)", u = String(t.name || t.id && (Se(t.id) == "object" ? t.id.name : t.id) || t.key && (Se(t.key) == "object" ? t.key.name : t.key) || t.value && (Se(t.value) == "object" ? "" : String(t.value)) || t.operator || "");
        return u.length > 20 && (u = u.slice(0, 19) + "\u2026"), n + (u ? " " + u : "");
      }(r);
    }
    var X = { inferParserByLanguage: function(e, t) {
      var n = Wc({ plugins: t.plugins }), u = n.languages, a = u.find(function(i) {
        var o = i.name;
        return o.toLowerCase() === e;
      }) || u.find(function(i) {
        var o = i.aliases;
        return Array.isArray(o) && o.includes(e);
      }) || u.find(function(i) {
        var o = i.extensions;
        return Array.isArray(o) && o.includes(".".concat(e));
      });
      return a && a.parsers[0];
    }, replaceEndOfLineWith: function(e, t) {
      var n = [], u = le(e.split(`
`)), a;
      try {
        for (u.s(); !(a = u.n()).done; ) {
          var i = a.value;
          n.length > 0 && n.push(t), n.push(i);
        }
      } catch (o) {
        u.e(o);
      } finally {
        u.f();
      }
      return n;
    }, getStringWidth: function(e) {
      return e ? $n.test(e) ? Ic(e) : e.length : 0;
    }, getMaxContinuousCount: function(e, t) {
      var n = e.match(new RegExp("(".concat(Lo(t), ")+"), "g"));
      return n === null ? 0 : n.reduce(function(u, a) {
        return Math.max(u, a.length / t.length);
      }, 0);
    }, getMinNotPresentContinuousCount: function(e, t) {
      var n = e.match(new RegExp("(".concat(Lo(t), ")+"), "g"));
      if (n === null)
        return 0;
      var u = /* @__PURE__ */ new Map(), a = 0, i = le(n), o;
      try {
        for (i.s(); !(o = i.n()).done; ) {
          var s = o.value, c = s.length / t.length;
          u.set(c, !0), c > a && (a = c);
        }
      } catch (p) {
        i.e(p);
      } finally {
        i.f();
      }
      for (var l = 1; l < a; l++)
        if (!u.get(l))
          return l;
      return a + 1;
    }, getPenultimate: function(e) {
      return e[e.length - 2];
    }, getLast: sr, getNextNonSpaceNonCommentCharacterIndexWithStartIndex: Yu, getNextNonSpaceNonCommentCharacterIndex: pi, getNextNonSpaceNonCommentCharacter: function(e, t, n) {
      return e.charAt(pi(e, t, n));
    }, skip: pu, skipWhitespace: Gc, skipSpaces: Dn, skipToLineEnd: Qo, skipEverythingButNewLine: Zo, skipInlineComment: ci, skipTrailingComment: li, skipNewline: qn, isNextLineEmptyAfterIndex: Vn, isNextLineEmpty: function(e, t, n) {
      return Vn(e, n(t));
    }, isPreviousLineEmpty: function(e, t, n) {
      var u = n(t) - 1;
      return u = Dn(e, u, { backwards: !0 }), u = qn(e, u, { backwards: !0 }), u = Dn(e, u, { backwards: !0 }), u !== qn(e, u, { backwards: !0 });
    }, hasNewline: fu, hasNewlineInRange: function(e, t, n) {
      for (var u = t; u < n; ++u)
        if (e.charAt(u) === `
`)
          return !0;
      return !1;
    }, hasSpaces: function(e, t) {
      var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return Dn(e, n.backwards ? t - 1 : t, n) !== t;
    }, getAlignmentSize: Hc, getIndentSize: function(e, t) {
      var n = e.lastIndexOf(`
`);
      return n === -1 ? 0 : Hc(e.slice(n + 1).match(/^[\t ]*/)[0], t);
    }, getPreferredQuote: Ku, printString: function(e, t) {
      return fi(e.slice(1, -1), t.parser === "json" || t.parser === "json5" && t.quoteProps === "preserve" && !t.singleQuote ? '"' : t.__isInHtmlAttribute ? "'" : Ku(e, t.singleQuote ? "'" : '"'), !(t.parser === "css" || t.parser === "less" || t.parser === "scss" || t.__embeddedInHtml));
    }, printNumber: function(e) {
      return e.toLowerCase().replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(\d)/, "$1$2$3").replace(/^([+-]?[\d.]+)e[+-]?0+$/, "$1").replace(/^([+-])?\./, "$10.").replace(/(\.\d+?)0+(?=e|$)/, "$1").replace(/\.(?=e|$)/, "");
    }, makeString: fi, addLeadingComment: function(e, t) {
      t.leading = !0, t.trailing = !1, Qu(e, t);
    }, addDanglingComment: function(e, t, n) {
      t.leading = !1, t.trailing = !1, n && (t.marker = n), Qu(e, t);
    }, addTrailingComment: function(e, t) {
      t.leading = !1, t.trailing = !0, Qu(e, t);
    }, isFrontMatterNode: function(e) {
      return e && e.type === "front-matter";
    }, getShebang: function(e) {
      if (!e.startsWith("#!"))
        return "";
      var t = e.indexOf(`
`);
      return t === -1 ? e : e.slice(0, t);
    }, isNonEmptyArray: function(e) {
      return Array.isArray(e) && e.length > 0;
    }, createGroupIdMapper: function(e) {
      var t = /* @__PURE__ */ new WeakMap();
      return function(n) {
        return t.has(n) || t.set(n, Symbol(e)), t.get(n);
      };
    } }, du = { guessEndOfLine: function(e) {
      var t = e.indexOf("\r");
      return t >= 0 ? e.charAt(t + 1) === `
` ? "crlf" : "cr" : "lf";
    }, convertEndOfLineToChars: function(e) {
      switch (e) {
        case "cr":
          return "\r";
        case "crlf":
          return `\r
`;
        default:
          return `
`;
      }
    }, countEndOfLineChars: function(e, t) {
      var n;
      if (t === `
`)
        n = /\n/g;
      else if (t === "\r")
        n = /\r/g;
      else {
        if (t !== `\r
`)
          throw new Error('Unexpected "eol" '.concat(JSON.stringify(t), "."));
        n = /\r\n/g;
      }
      var u = e.match(n);
      return u ? u.length : 0;
    }, normalizeEndOfLine: function(e) {
      return e.replace(/\r\n?/g, `
`);
    } }, zc = Gu.literalline, gn = function(e) {
      return Array.isArray(e) || e && e.type === "concat";
    }, hu = function(e) {
      if (Array.isArray(e))
        return e;
      if (e.type !== "concat" && e.type !== "fill")
        throw new Error("Expect doc type to be `concat` or `fill`.");
      return e.parts;
    }, Xc = {};
    function Zu(r, e, t, n) {
      for (var u = [r]; u.length > 0; ) {
        var a = u.pop();
        if (a !== Xc) {
          if (t && u.push(a, Xc), !e || e(a) !== !1)
            if (gn(a) || a.type === "fill")
              for (var i = hu(a), o = i.length - 1; o >= 0; --o)
                u.push(i[o]);
            else if (a.type === "if-break")
              a.flatContents && u.push(a.flatContents), a.breakContents && u.push(a.breakContents);
            else if (a.type === "group" && a.expandedStates)
              if (n)
                for (var s = a.expandedStates.length - 1; s >= 0; --s)
                  u.push(a.expandedStates[s]);
              else
                u.push(a.contents);
            else
              a.contents && u.push(a.contents);
        } else
          t(u.pop());
      }
    }
    function _u(r, e) {
      var t = /* @__PURE__ */ new Map();
      return n(r);
      function n(u) {
        if (t.has(u))
          return t.get(u);
        var a = function(i) {
          if (Array.isArray(i))
            return e(i.map(n));
          if (i.type === "concat" || i.type === "fill") {
            var o = i.parts.map(n);
            return e(Object.assign({}, i, { parts: o }));
          }
          if (i.type === "if-break") {
            var s = i.breakContents && n(i.breakContents), c = i.flatContents && n(i.flatContents);
            return e(Object.assign({}, i, { breakContents: s, flatContents: c }));
          }
          if (i.type === "group" && i.expandedStates) {
            var l = i.expandedStates.map(n), p = l[0];
            return e(Object.assign({}, i, { contents: p, expandedStates: l }));
          }
          if (i.contents) {
            var f = n(i.contents);
            return e(Object.assign({}, i, { contents: f }));
          }
          return e(i);
        }(u);
        return t.set(u, a), a;
      }
    }
    function di(r, e, t) {
      var n = t, u = !1;
      return Zu(r, function(a) {
        var i = e(a);
        if (i !== void 0 && (u = !0, n = i), u)
          return !1;
      }), n;
    }
    function Sf(r) {
      return !(r.type !== "group" || !r.break) || !(r.type !== "line" || !r.hard) || r.type === "break-parent" || void 0;
    }
    function Jc(r) {
      if (r.length > 0) {
        var e = sr(r);
        e.expandedStates || e.break || (e.break = "propagated");
      }
      return null;
    }
    function Yc(r) {
      return r.type !== "line" || r.hard ? r.type === "if-break" ? r.flatContents || "" : r : r.soft ? "" : " ";
    }
    var vr = function(e, t) {
      return e && e.type === "line" && e.hard && t && t.type === "break-parent";
    };
    function Me(r) {
      if (!r)
        return r;
      if (gn(r) || r.type === "fill") {
        for (var e = hu(r); e.length > 1 && vr.apply(void 0, _(e.slice(-2))); )
          e.length -= 2;
        if (e.length > 0) {
          var t = Me(sr(e));
          e[e.length - 1] = t;
        }
        return Array.isArray(r) ? e : Object.assign({}, r, { parts: e });
      }
      switch (r.type) {
        case "align":
        case "indent":
        case "indent-if-break":
        case "group":
        case "line-suffix":
        case "label": {
          var n = Me(r.contents);
          return Object.assign({}, r, { contents: n });
        }
        case "if-break": {
          var u = Me(r.breakContents), a = Me(r.flatContents);
          return Object.assign({}, r, { breakContents: u, flatContents: a });
        }
      }
      return r;
    }
    function Kc(r) {
      return _u(r, function(e) {
        return function(t) {
          switch (t.type) {
            case "fill":
              if (t.parts.length === 0 || t.parts.every(function(p) {
                return p === "";
              }))
                return "";
              break;
            case "group":
              if (!(t.contents || t.id || t.break || t.expandedStates))
                return "";
              if (t.contents.type === "group" && t.contents.id === t.id && t.contents.break === t.break && t.contents.expandedStates === t.expandedStates)
                return t.contents;
              break;
            case "align":
            case "indent":
            case "indent-if-break":
            case "line-suffix":
              if (!t.contents)
                return "";
              break;
            case "if-break":
              if (!t.flatContents && !t.breakContents)
                return "";
          }
          if (!gn(t))
            return t;
          var n = [], u = le(hu(t)), a;
          try {
            for (u.s(); !(a = u.n()).done; ) {
              var i = a.value;
              if (!!i) {
                var o = gn(i) ? hu(i) : [i], s = wb(o), c = s[0], l = s.slice(1);
                typeof c == "string" && typeof sr(n) == "string" ? n[n.length - 1] += c : n.push(c), n.push.apply(n, _(l));
              }
            }
          } catch (p) {
            u.e(p);
          } finally {
            u.f();
          }
          return n.length === 0 ? "" : n.length === 1 ? n[0] : Array.isArray(t) ? n : Object.assign({}, t, { parts: n });
        }(e);
      });
    }
    function hi(r) {
      for (var e = [], t = r.filter(Boolean); t.length > 0; ) {
        var n = t.shift();
        n && (gn(n) ? t.unshift.apply(t, _(hu(n))) : e.length > 0 && typeof sr(e) == "string" && typeof n == "string" ? e[e.length - 1] += n : e.push(n));
      }
      return e;
    }
    var Un = { isConcat: gn, getDocParts: hu, willBreak: function(e) {
      return di(e, Sf, !1);
    }, traverseDoc: Zu, findInDoc: di, mapDoc: _u, propagateBreaks: function(e) {
      var t = /* @__PURE__ */ new Set(), n = [];
      Zu(e, function(u) {
        if (u.type === "break-parent" && Jc(n), u.type === "group") {
          if (n.push(u), t.has(u))
            return !1;
          t.add(u);
        }
      }, function(u) {
        u.type === "group" && n.pop().break && Jc(n);
      }, !0);
    }, removeLines: function(e) {
      return _u(e, Yc);
    }, stripTrailingHardline: function(e) {
      return Me(Kc(e));
    }, normalizeParts: hi, normalizeDoc: function(e) {
      return _u(e, function(t) {
        return Array.isArray(t) ? hi(t) : t.parts ? Object.assign({}, t, { parts: hi(t.parts) }) : t;
      });
    }, cleanDoc: Kc, replaceNewlinesWithLiterallines: function(e) {
      return _u(e, function(t) {
        return typeof t == "string" && t.includes(`
`) ? t.split(/(\n)/g).map(function(n, u) {
          return u % 2 == 0 ? n : zc;
        }) : t;
      });
    } }, Qc = X.getStringWidth, en = X.getLast, Tf = du.convertEndOfLineToChars, xf = Gu.fill, _o = Gu.cursor, Di = Gu.indent, Zc = Un.isConcat, _c = Un.getDocParts, ea;
    function es(r, e) {
      return rs(r, { type: "indent" }, e);
    }
    function el(r, e, t) {
      return e === Number.NEGATIVE_INFINITY ? r.root || { value: "", length: 0, queue: [] } : e < 0 ? rs(r, { type: "dedent" }, t) : e ? e.type === "root" ? Object.assign({}, r, { root: r }) : rs(r, { type: typeof e == "string" ? "stringAlign" : "numberAlign", n: e }, t) : r;
    }
    function rs(r, e, t) {
      var n = e.type === "dedent" ? r.queue.slice(0, -1) : [].concat(_(r.queue), [e]), u = "", a = 0, i = 0, o = 0, s = le(n), c;
      try {
        for (s.s(); !(c = s.n()).done; ) {
          var l = c.value;
          switch (l.type) {
            case "indent":
              d(), t.useTabs ? p(1) : f(t.tabWidth);
              break;
            case "stringAlign":
              d(), u += l.n, a += l.n.length;
              break;
            case "numberAlign":
              i += 1, o += l.n;
              break;
            default:
              throw new Error("Unexpected type '".concat(l.type, "'"));
          }
        }
      } catch (y) {
        s.e(y);
      } finally {
        s.f();
      }
      return D(), Object.assign({}, r, { value: u, length: a, queue: n });
      function p(y) {
        u += "	".repeat(y), a += t.tabWidth * y;
      }
      function f(y) {
        u += " ".repeat(y), a += y;
      }
      function d() {
        t.useTabs ? function() {
          i > 0 && p(i), v();
        }() : D();
      }
      function D() {
        o > 0 && f(o), v();
      }
      function v() {
        i = 0, o = 0;
      }
    }
    function ts(r) {
      if (r.length === 0)
        return 0;
      for (var e = 0; r.length > 0 && typeof en(r) == "string" && /^[\t ]*$/.test(en(r)); )
        e += r.pop().length;
      if (r.length > 0 && typeof en(r) == "string") {
        var t = en(r).replace(/[\t ]*$/, "");
        e += en(r).length - t.length, r[r.length - 1] = t;
      }
      return e;
    }
    function Du(r, e, t, n, u, a) {
      for (var i = e.length, o = [r], s = []; t >= 0; ) {
        if (o.length === 0) {
          if (i === 0)
            return !0;
          o.push(e[i - 1]), i--;
          continue;
        }
        var c = o.pop(), l = ke(c, 3), p = l[0], f = l[1], d = l[2];
        if (typeof d == "string")
          s.push(d), t -= Qc(d);
        else if (Zc(d))
          for (var D = _c(d), v = D.length - 1; v >= 0; v--)
            o.push([p, f, D[v]]);
        else
          switch (d.type) {
            case "indent":
              o.push([es(p, n), f, d.contents]);
              break;
            case "align":
              o.push([el(p, d.n, n), f, d.contents]);
              break;
            case "trim":
              t += ts(s);
              break;
            case "group": {
              if (a && d.break)
                return !1;
              var y = d.break ? 1 : f;
              o.push([p, y, d.expandedStates && y === 1 ? en(d.expandedStates) : d.contents]), d.id && (ea[d.id] = y);
              break;
            }
            case "fill":
              for (var b = d.parts.length - 1; b >= 0; b--)
                o.push([p, f, d.parts[b]]);
              break;
            case "if-break":
            case "indent-if-break": {
              var S = d.groupId ? ea[d.groupId] : f;
              if (S === 1) {
                var F = d.type === "if-break" ? d.breakContents : d.negate ? d.contents : Di(d.contents);
                F && o.push([p, f, F]);
              }
              if (S === 2) {
                var x = d.type === "if-break" ? d.flatContents : d.negate ? Di(d.contents) : d.contents;
                x && o.push([p, f, x]);
              }
              break;
            }
            case "line":
              switch (f) {
                case 2:
                  if (!d.hard) {
                    d.soft || (s.push(" "), t -= 1);
                    break;
                  }
                  return !0;
                case 1:
                  return !0;
              }
              break;
            case "line-suffix":
              u = !0;
              break;
            case "line-suffix-boundary":
              if (u)
                return !1;
              break;
            case "label":
              o.push([p, f, d.contents]);
          }
      }
      return !1;
    }
    var wf = { printDocToString: function(e, t) {
      ea = {};
      for (var n = t.printWidth, u = Tf(t.endOfLine), a = 0, i = [[{ value: "", length: 0, queue: [] }, 1, e]], o = [], s = !1, c = []; i.length > 0; ) {
        var l = i.pop(), p = ke(l, 3), f = p[0], d = p[1], D = p[2];
        if (typeof D == "string") {
          var v = u !== `
` ? D.replace(/\n/g, u) : D;
          o.push(v), a += Qc(v);
        } else if (Zc(D))
          for (var y = _c(D), b = y.length - 1; b >= 0; b--)
            i.push([f, d, y[b]]);
        else
          switch (D.type) {
            case "cursor":
              o.push(_o.placeholder);
              break;
            case "indent":
              i.push([es(f, t), d, D.contents]);
              break;
            case "align":
              i.push([el(f, D.n, t), d, D.contents]);
              break;
            case "trim":
              a -= ts(o);
              break;
            case "group":
              switch (d) {
                case 2:
                  if (!s) {
                    i.push([f, D.break ? 1 : 2, D.contents]);
                    break;
                  }
                case 1: {
                  s = !1;
                  var S = [f, 2, D.contents], F = n - a, x = c.length > 0;
                  if (!D.break && Du(S, i, F, t, x))
                    i.push(S);
                  else if (D.expandedStates) {
                    var w = en(D.expandedStates);
                    if (D.break) {
                      i.push([f, 1, w]);
                      break;
                    }
                    for (var A = 1; A < D.expandedStates.length + 1; A++) {
                      if (A >= D.expandedStates.length) {
                        i.push([f, 1, w]);
                        break;
                      }
                      {
                        var k = [f, 2, D.expandedStates[A]];
                        if (Du(k, i, F, t, x)) {
                          i.push(k);
                          break;
                        }
                      }
                    }
                  } else
                    i.push([f, 1, D.contents]);
                  break;
                }
              }
              D.id && (ea[D.id] = en(i)[1]);
              break;
            case "fill": {
              var O = n - a, q = D.parts;
              if (q.length === 0)
                break;
              var H = ke(q, 2), R = H[0], $ = H[1], K = [f, 2, R], ne = [f, 1, R], ue = Du(K, [], O, t, c.length > 0, !0);
              if (q.length === 1) {
                ue ? i.push(K) : i.push(ne);
                break;
              }
              var Ce = [f, 2, $], oe = [f, 1, $];
              if (q.length === 2) {
                ue ? i.push(Ce, K) : i.push(oe, ne);
                break;
              }
              q.splice(0, 2);
              var ae = [f, d, xf(q)];
              Du([f, 2, [R, $, q[0]]], [], O, t, c.length > 0, !0) ? i.push(ae, Ce, K) : ue ? i.push(ae, oe, K) : i.push(ae, oe, ne);
              break;
            }
            case "if-break":
            case "indent-if-break": {
              var ve = D.groupId ? ea[D.groupId] : d;
              if (ve === 1) {
                var Le = D.type === "if-break" ? D.breakContents : D.negate ? D.contents : Di(D.contents);
                Le && i.push([f, d, Le]);
              }
              if (ve === 2) {
                var Te = D.type === "if-break" ? D.flatContents : D.negate ? Di(D.contents) : D.contents;
                Te && i.push([f, d, Te]);
              }
              break;
            }
            case "line-suffix":
              c.push([f, d, D.contents]);
              break;
            case "line-suffix-boundary":
              c.length > 0 && i.push([f, d, { type: "line", hard: !0 }]);
              break;
            case "line":
              switch (d) {
                case 2:
                  if (!D.hard) {
                    D.soft || (o.push(" "), a += 1);
                    break;
                  }
                  s = !0;
                case 1:
                  if (c.length > 0) {
                    i.push.apply(i, [[f, d, D]].concat(_(c.reverse()))), c = [];
                    break;
                  }
                  D.literal ? f.root ? (o.push(u, f.root.value), a = f.root.length) : (o.push(u), a = 0) : (a -= ts(o), o.push(u + f.value), a = f.length);
              }
              break;
            case "label":
              i.push([f, d, D.contents]);
          }
        i.length === 0 && c.length > 0 && (i.push.apply(i, _(c.reverse())), c = []);
      }
      var Ne = o.indexOf(_o.placeholder);
      if (Ne !== -1) {
        var Oe = o.indexOf(_o.placeholder, Ne + 1), We = o.slice(0, Ne).join(""), Re = o.slice(Ne + 1, Oe).join("");
        return { formatted: We + Re + o.slice(Oe + 1).join(""), cursorNodeStart: We.length, cursorNodeText: Re };
      }
      return { formatted: o.join("") };
    } }, gi = Un.isConcat, rl = Un.getDocParts;
    function Tt(r) {
      if (!r)
        return "";
      if (gi(r)) {
        var e = [], t = le(rl(r)), n;
        try {
          for (t.s(); !(n = t.n()).done; ) {
            var u = n.value;
            if (gi(u))
              e.push.apply(e, _(Tt(u).parts));
            else {
              var a = Tt(u);
              a !== "" && e.push(a);
            }
          }
        } catch (i) {
          t.e(i);
        } finally {
          t.f();
        }
        return { type: "concat", parts: e };
      }
      return r.type === "if-break" ? Object.assign({}, r, { breakContents: Tt(r.breakContents), flatContents: Tt(r.flatContents) }) : r.type === "group" ? Object.assign({}, r, { contents: Tt(r.contents), expandedStates: r.expandedStates && r.expandedStates.map(Tt) }) : r.type === "fill" ? { type: "fill", parts: r.parts.map(Tt) } : r.contents ? Object.assign({}, r, { contents: Tt(r.contents) }) : r;
    }
    var fe = { builders: Gu, printer: wf, utils: Un, debug: { printDocToDebug: function(e) {
      var t = /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ new Set();
      return function a(i, o, s) {
        if (typeof i == "string")
          return JSON.stringify(i);
        if (gi(i)) {
          var c = rl(i).map(a).filter(Boolean);
          return c.length === 1 ? c[0] : "[".concat(c.join(", "), "]");
        }
        if (i.type === "line") {
          var l = Array.isArray(s) && s[o + 1] && s[o + 1].type === "break-parent";
          return i.literal ? l ? "literalline" : "literallineWithoutBreakParent" : i.hard ? l ? "hardline" : "hardlineWithoutBreakParent" : i.soft ? "softline" : "line";
        }
        if (i.type === "break-parent")
          return Array.isArray(s) && s[o - 1] && s[o - 1].type === "line" && s[o - 1].hard ? void 0 : "breakParent";
        if (i.type === "trim")
          return "trim";
        if (i.type === "indent")
          return "indent(" + a(i.contents) + ")";
        if (i.type === "align")
          return i.n === Number.NEGATIVE_INFINITY ? "dedentToRoot(" + a(i.contents) + ")" : i.n < 0 ? "dedent(" + a(i.contents) + ")" : i.n.type === "root" ? "markAsRoot(" + a(i.contents) + ")" : "align(" + JSON.stringify(i.n) + ", " + a(i.contents) + ")";
        if (i.type === "if-break")
          return "ifBreak(" + a(i.breakContents) + (i.flatContents ? ", " + a(i.flatContents) : "") + (i.groupId ? (i.flatContents ? "" : ', ""') + ", { groupId: ".concat(u(i.groupId), " }") : "") + ")";
        if (i.type === "indent-if-break") {
          var p = [];
          i.negate && p.push("negate: true"), i.groupId && p.push("groupId: ".concat(u(i.groupId)));
          var f = p.length > 0 ? ", { ".concat(p.join(", "), " }") : "";
          return "indentIfBreak(".concat(a(i.contents)).concat(f, ")");
        }
        if (i.type === "group") {
          var d = [];
          i.break && i.break !== "propagated" && d.push("shouldBreak: true"), i.id && d.push("id: ".concat(u(i.id)));
          var D = d.length > 0 ? ", { ".concat(d.join(", "), " }") : "";
          return i.expandedStates ? "conditionalGroup([".concat(i.expandedStates.map(function(v) {
            return a(v);
          }).join(","), "]").concat(D, ")") : "group(".concat(a(i.contents)).concat(D, ")");
        }
        if (i.type === "fill")
          return "fill([".concat(i.parts.map(function(v) {
            return a(v);
          }).join(", "), "])");
        if (i.type === "line-suffix")
          return "lineSuffix(" + a(i.contents) + ")";
        if (i.type === "line-suffix-boundary")
          return "lineSuffixBoundary";
        if (i.type === "label")
          return "label(".concat(JSON.stringify(i.label), ", ").concat(a(i.contents), ")");
        throw new Error("Unknown doc type " + i.type);
      }(Tt(e));
      function u(a) {
        if (Se(a) != "symbol")
          return JSON.stringify(String(a));
        if (a in t)
          return t[a];
        for (var i = String(a).slice(7, -1) || "symbol", o = 0; ; o++) {
          var s = i + (o > 0 ? " #".concat(o) : "");
          if (!n.has(s))
            return n.add(s), t[a] = "Symbol.for(".concat(JSON.stringify(s), ")");
        }
      }
    } } }, xt = Object.freeze({ __proto__: null, default: {} });
    function tl(r, e) {
      for (var t = 0, n = r.length - 1; n >= 0; n--) {
        var u = r[n];
        u === "." ? r.splice(n, 1) : u === ".." ? (r.splice(n, 1), t++) : t && (r.splice(n, 1), t--);
      }
      if (e)
        for (; t--; t)
          r.unshift("..");
      return r;
    }
    var Bf = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, ns = function(e) {
      return Bf.exec(e).slice(1);
    };
    function mi() {
      for (var r = "", e = !1, t = arguments.length - 1; t >= -1 && !e; t--) {
        var n = t >= 0 ? arguments[t] : "/";
        if (typeof n != "string")
          throw new TypeError("Arguments to path.resolve must be strings");
        n && (r = n + "/" + r, e = n.charAt(0) === "/");
      }
      return (e ? "/" : "") + (r = tl(yi(r.split("/"), function(u) {
        return !!u;
      }), !e).join("/")) || ".";
    }
    function us(r) {
      var e = Ue(r), t = il(r, -1) === "/";
      return (r = tl(yi(r.split("/"), function(n) {
        return !!n;
      }), !e).join("/")) || e || (r = "."), r && t && (r += "/"), (e ? "/" : "") + r;
    }
    function Ue(r) {
      return r.charAt(0) === "/";
    }
    function wt() {
      var r = Array.prototype.slice.call(arguments, 0);
      return us(yi(r, function(e, t) {
        if (typeof e != "string")
          throw new TypeError("Arguments to path.join must be strings");
        return e;
      }).join("/"));
    }
    function nl(r, e) {
      function t(c) {
        for (var l = 0; l < c.length && c[l] === ""; l++)
          ;
        for (var p = c.length - 1; p >= 0 && c[p] === ""; p--)
          ;
        return l > p ? [] : c.slice(l, p - l + 1);
      }
      r = mi(r).substr(1), e = mi(e).substr(1);
      for (var n = t(r.split("/")), u = t(e.split("/")), a = Math.min(n.length, u.length), i = a, o = 0; o < a; o++)
        if (n[o] !== u[o]) {
          i = o;
          break;
        }
      var s = [];
      for (o = i; o < n.length; o++)
        s.push("..");
      return (s = s.concat(u.slice(i))).join("/");
    }
    function vi(r) {
      var e = ns(r), t = e[0], n = e[1];
      return t || n ? (n && (n = n.substr(0, n.length - 1)), t + n) : ".";
    }
    function ul(r, e) {
      var t = ns(r)[2];
      return e && t.substr(-1 * e.length) === e && (t = t.substr(0, t.length - e.length)), t;
    }
    function al(r) {
      return ns(r)[3];
    }
    var kf = { extname: al, basename: ul, dirname: vi, sep: "/", delimiter: ":", relative: nl, join: wt, isAbsolute: Ue, normalize: us, resolve: mi };
    function yi(r, e) {
      if (r.filter)
        return r.filter(e);
      for (var t = [], n = 0; n < r.length; n++)
        e(r[n], n, r) && t.push(r[n]);
      return t;
    }
    var il = "ab".substr(-1) === "b" ? function(r, e, t) {
      return r.substr(e, t);
    } : function(r, e, t) {
      return e < 0 && (e = r.length + e), r.substr(e, t);
    }, ol = Object.freeze({ __proto__: null, resolve: mi, normalize: us, isAbsolute: Ue, join: wt, relative: nl, sep: "/", delimiter: ":", dirname: vi, basename: ul, extname: al, default: kf }), Bt = [], it = [], Nf = typeof Uint8Array < "u" ? Uint8Array : Array, as = !1;
    function sl() {
      as = !0;
      for (var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", e = 0, t = r.length; e < t; ++e)
        Bt[e] = r[e], it[r.charCodeAt(e)] = e;
      it["-".charCodeAt(0)] = 62, it["_".charCodeAt(0)] = 63;
    }
    function Pf(r, e, t) {
      for (var n, u, a = [], i = e; i < t; i += 3)
        n = (r[i] << 16) + (r[i + 1] << 8) + r[i + 2], a.push(Bt[(u = n) >> 18 & 63] + Bt[u >> 12 & 63] + Bt[u >> 6 & 63] + Bt[63 & u]);
      return a.join("");
    }
    function Ei(r) {
      var e;
      as || sl();
      for (var t = r.length, n = t % 3, u = "", a = [], i = 16383, o = 0, s = t - n; o < s; o += i)
        a.push(Pf(r, o, o + i > s ? s : o + i));
      return n === 1 ? (e = r[t - 1], u += Bt[e >> 2], u += Bt[e << 4 & 63], u += "==") : n === 2 && (e = (r[t - 2] << 8) + r[t - 1], u += Bt[e >> 10], u += Bt[e >> 4 & 63], u += Bt[e << 2 & 63], u += "="), a.push(u), a.join("");
    }
    function Ci(r, e, t, n, u) {
      var a, i, o = 8 * u - n - 1, s = (1 << o) - 1, c = s >> 1, l = -7, p = t ? u - 1 : 0, f = t ? -1 : 1, d = r[e + p];
      for (p += f, a = d & (1 << -l) - 1, d >>= -l, l += o; l > 0; a = 256 * a + r[e + p], p += f, l -= 8)
        ;
      for (i = a & (1 << -l) - 1, a >>= -l, l += n; l > 0; i = 256 * i + r[e + p], p += f, l -= 8)
        ;
      if (a === 0)
        a = 1 - c;
      else {
        if (a === s)
          return i ? NaN : 1 / 0 * (d ? -1 : 1);
        i += Math.pow(2, n), a -= c;
      }
      return (d ? -1 : 1) * i * Math.pow(2, a - n);
    }
    function is(r, e, t, n, u, a) {
      var i, o, s, c = 8 * a - u - 1, l = (1 << c) - 1, p = l >> 1, f = u === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, d = n ? 0 : a - 1, D = n ? 1 : -1, v = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
      for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (o = isNaN(e) ? 1 : 0, i = l) : (i = Math.floor(Math.log(e) / Math.LN2), e * (s = Math.pow(2, -i)) < 1 && (i--, s *= 2), (e += i + p >= 1 ? f / s : f * Math.pow(2, 1 - p)) * s >= 2 && (i++, s /= 2), i + p >= l ? (o = 0, i = l) : i + p >= 1 ? (o = (e * s - 1) * Math.pow(2, u), i += p) : (o = e * Math.pow(2, p - 1) * Math.pow(2, u), i = 0)); u >= 8; r[t + d] = 255 & o, d += D, o /= 256, u -= 8)
        ;
      for (i = i << u | o, c += u; c > 0; r[t + d] = 255 & i, d += D, i /= 256, c -= 8)
        ;
      r[t + d - D] |= 128 * v;
    }
    var Ai = {}.toString, os = Array.isArray || function(r) {
      return Ai.call(r) == "[object Array]";
    };
    function ss() {
      return Z.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
    }
    function rn(r, e) {
      if (ss() < e)
        throw new RangeError("Invalid typed array length");
      return Z.TYPED_ARRAY_SUPPORT ? (r = new Uint8Array(e)).__proto__ = Z.prototype : (r === null && (r = new Z(e)), r.length = e), r;
    }
    function Z(r, e, t) {
      if (!(Z.TYPED_ARRAY_SUPPORT || this instanceof Z))
        return new Z(r, e, t);
      if (typeof r == "number") {
        if (typeof e == "string")
          throw new Error("If encoding is specified then the first argument must be a string");
        return ls(this, r);
      }
      return cl(this, r, e, t);
    }
    function cl(r, e, t, n) {
      if (typeof e == "number")
        throw new TypeError('"value" argument must not be a number');
      return typeof ArrayBuffer < "u" && e instanceof ArrayBuffer ? function(u, a, i, o) {
        if (a.byteLength, i < 0 || a.byteLength < i)
          throw new RangeError("'offset' is out of bounds");
        if (a.byteLength < i + (o || 0))
          throw new RangeError("'length' is out of bounds");
        return a = i === void 0 && o === void 0 ? new Uint8Array(a) : o === void 0 ? new Uint8Array(a, i) : new Uint8Array(a, i, o), Z.TYPED_ARRAY_SUPPORT ? (u = a).__proto__ = Z.prototype : u = ps(u, a), u;
      }(r, e, t, n) : typeof e == "string" ? function(u, a, i) {
        if (typeof i == "string" && i !== "" || (i = "utf8"), !Z.isEncoding(i))
          throw new TypeError('"encoding" must be a valid string encoding');
        var o = 0 | ll(a, i), s = (u = rn(u, o)).write(a, i);
        return s !== o && (u = u.slice(0, s)), u;
      }(r, e, t) : function(u, a) {
        if (kt(a)) {
          var i = 0 | fs(a.length);
          return (u = rn(u, i)).length === 0 || a.copy(u, 0, 0, i), u;
        }
        if (a) {
          if (typeof ArrayBuffer < "u" && a.buffer instanceof ArrayBuffer || "length" in a)
            return typeof a.length != "number" || (o = a.length) != o ? rn(u, 0) : ps(u, a);
          if (a.type === "Buffer" && os(a.data))
            return ps(u, a.data);
        }
        var o;
        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
      }(r, e);
    }
    function cs(r) {
      if (typeof r != "number")
        throw new TypeError('"size" argument must be a number');
      if (r < 0)
        throw new RangeError('"size" argument must not be negative');
    }
    function ls(r, e) {
      if (cs(e), r = rn(r, e < 0 ? 0 : 0 | fs(e)), !Z.TYPED_ARRAY_SUPPORT)
        for (var t = 0; t < e; ++t)
          r[t] = 0;
      return r;
    }
    function ps(r, e) {
      var t = e.length < 0 ? 0 : 0 | fs(e.length);
      r = rn(r, t);
      for (var n = 0; n < t; n += 1)
        r[n] = 255 & e[n];
      return r;
    }
    function fs(r) {
      if (r >= ss())
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + ss().toString(16) + " bytes");
      return 0 | r;
    }
    function kt(r) {
      return !(r == null || !r._isBuffer);
    }
    function ll(r, e) {
      if (kt(r))
        return r.length;
      if (typeof ArrayBuffer < "u" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(r) || r instanceof ArrayBuffer))
        return r.byteLength;
      typeof r != "string" && (r = "" + r);
      var t = r.length;
      if (t === 0)
        return 0;
      for (var n = !1; ; )
        switch (e) {
          case "ascii":
          case "latin1":
          case "binary":
            return t;
          case "utf8":
          case "utf-8":
          case void 0:
            return W(r).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return 2 * t;
          case "hex":
            return t >>> 1;
          case "base64":
            return te(r).length;
          default:
            if (n)
              return W(r).length;
            e = ("" + e).toLowerCase(), n = !0;
        }
    }
    function If(r, e, t) {
      var n = !1;
      if ((e === void 0 || e < 0) && (e = 0), e > this.length || ((t === void 0 || t > this.length) && (t = this.length), t <= 0) || (t >>>= 0) <= (e >>>= 0))
        return "";
      for (r || (r = "utf8"); ; )
        switch (r) {
          case "hex":
            return V(this, e, t);
          case "utf8":
          case "utf-8":
            return Q(this, e, t);
          case "ascii":
            return de(this, e, t);
          case "latin1":
          case "binary":
            return z(this, e, t);
          case "base64":
            return j(this, e, t);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return J(this, e, t);
          default:
            if (n)
              throw new TypeError("Unknown encoding: " + r);
            r = (r + "").toLowerCase(), n = !0;
        }
    }
    function mn(r, e, t) {
      var n = r[e];
      r[e] = r[t], r[t] = n;
    }
    function ra(r, e, t, n, u) {
      if (r.length === 0)
        return -1;
      if (typeof t == "string" ? (n = t, t = 0) : t > 2147483647 ? t = 2147483647 : t < -2147483648 && (t = -2147483648), t = +t, isNaN(t) && (t = u ? 0 : r.length - 1), t < 0 && (t = r.length + t), t >= r.length) {
        if (u)
          return -1;
        t = r.length - 1;
      } else if (t < 0) {
        if (!u)
          return -1;
        t = 0;
      }
      if (typeof e == "string" && (e = Z.from(e, n)), kt(e))
        return e.length === 0 ? -1 : E(r, e, t, n, u);
      if (typeof e == "number")
        return e &= 255, Z.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == "function" ? u ? Uint8Array.prototype.indexOf.call(r, e, t) : Uint8Array.prototype.lastIndexOf.call(r, e, t) : E(r, [e], t, n, u);
      throw new TypeError("val must be string, number or Buffer");
    }
    function E(r, e, t, n, u) {
      var a, i = 1, o = r.length, s = e.length;
      if (n !== void 0 && ((n = String(n).toLowerCase()) === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
        if (r.length < 2 || e.length < 2)
          return -1;
        i = 2, o /= 2, s /= 2, t /= 2;
      }
      function c(d, D) {
        return i === 1 ? d[D] : d.readUInt16BE(D * i);
      }
      if (u) {
        var l = -1;
        for (a = t; a < o; a++)
          if (c(r, a) === c(e, l === -1 ? 0 : a - l)) {
            if (l === -1 && (l = a), a - l + 1 === s)
              return l * i;
          } else
            l !== -1 && (a -= a - l), l = -1;
      } else
        for (t + s > o && (t = o - s), a = t; a >= 0; a--) {
          for (var p = !0, f = 0; f < s; f++)
            if (c(r, a + f) !== c(e, f)) {
              p = !1;
              break;
            }
          if (p)
            return a;
        }
      return -1;
    }
    function h(r, e, t, n) {
      t = Number(t) || 0;
      var u = r.length - t;
      n ? (n = Number(n)) > u && (n = u) : n = u;
      var a = e.length;
      if (a % 2 != 0)
        throw new TypeError("Invalid hex string");
      n > a / 2 && (n = a / 2);
      for (var i = 0; i < n; ++i) {
        var o = parseInt(e.substr(2 * i, 2), 16);
        if (isNaN(o))
          return i;
        r[t + i] = o;
      }
      return i;
    }
    function g(r, e, t, n) {
      return ie(W(e, r.length - t), r, t, n);
    }
    function m(r, e, t, n) {
      return ie(function(u) {
        for (var a = [], i = 0; i < u.length; ++i)
          a.push(255 & u.charCodeAt(i));
        return a;
      }(e), r, t, n);
    }
    function C(r, e, t, n) {
      return m(r, e, t, n);
    }
    function T(r, e, t, n) {
      return ie(te(e), r, t, n);
    }
    function L(r, e, t, n) {
      return ie(function(u, a) {
        for (var i, o, s, c = [], l = 0; l < u.length && !((a -= 2) < 0); ++l)
          o = (i = u.charCodeAt(l)) >> 8, s = i % 256, c.push(s), c.push(o);
        return c;
      }(e, r.length - t), r, t, n);
    }
    function j(r, e, t) {
      return e === 0 && t === r.length ? Ei(r) : Ei(r.slice(e, t));
    }
    function Q(r, e, t) {
      t = Math.min(r.length, t);
      for (var n = [], u = e; u < t; ) {
        var a, i, o, s, c = r[u], l = null, p = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
        if (u + p <= t)
          switch (p) {
            case 1:
              c < 128 && (l = c);
              break;
            case 2:
              (192 & (a = r[u + 1])) == 128 && (s = (31 & c) << 6 | 63 & a) > 127 && (l = s);
              break;
            case 3:
              a = r[u + 1], i = r[u + 2], (192 & a) == 128 && (192 & i) == 128 && (s = (15 & c) << 12 | (63 & a) << 6 | 63 & i) > 2047 && (s < 55296 || s > 57343) && (l = s);
              break;
            case 4:
              a = r[u + 1], i = r[u + 2], o = r[u + 3], (192 & a) == 128 && (192 & i) == 128 && (192 & o) == 128 && (s = (15 & c) << 18 | (63 & a) << 12 | (63 & i) << 6 | 63 & o) > 65535 && s < 1114112 && (l = s);
          }
        l === null ? (l = 65533, p = 1) : l > 65535 && (l -= 65536, n.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), n.push(l), u += p;
      }
      return function(f) {
        var d = f.length;
        if (d <= pe)
          return String.fromCharCode.apply(String, f);
        for (var D = "", v = 0; v < d; )
          D += String.fromCharCode.apply(String, f.slice(v, v += pe));
        return D;
      }(n);
    }
    Z.TYPED_ARRAY_SUPPORT = Pr.TYPED_ARRAY_SUPPORT === void 0 || Pr.TYPED_ARRAY_SUPPORT, Z.poolSize = 8192, Z._augment = function(r) {
      return r.__proto__ = Z.prototype, r;
    }, Z.from = function(r, e, t) {
      return cl(null, r, e, t);
    }, Z.TYPED_ARRAY_SUPPORT && (Z.prototype.__proto__ = Uint8Array.prototype, Z.__proto__ = Uint8Array), Z.alloc = function(r, e, t) {
      return function(n, u, a, i) {
        return cs(u), u <= 0 ? rn(n, u) : a !== void 0 ? typeof i == "string" ? rn(n, u).fill(a, i) : rn(n, u).fill(a) : rn(n, u);
      }(null, r, e, t);
    }, Z.allocUnsafe = function(r) {
      return ls(null, r);
    }, Z.allocUnsafeSlow = function(r) {
      return ls(null, r);
    }, Z.isBuffer = Ie, Z.compare = function(r, e) {
      if (!kt(r) || !kt(e))
        throw new TypeError("Arguments must be Buffers");
      if (r === e)
        return 0;
      for (var t = r.length, n = e.length, u = 0, a = Math.min(t, n); u < a; ++u)
        if (r[u] !== e[u]) {
          t = r[u], n = e[u];
          break;
        }
      return t < n ? -1 : n < t ? 1 : 0;
    }, Z.isEncoding = function(r) {
      switch (String(r).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return !0;
        default:
          return !1;
      }
    }, Z.concat = function(r, e) {
      if (!os(r))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (r.length === 0)
        return Z.alloc(0);
      var t;
      if (e === void 0)
        for (e = 0, t = 0; t < r.length; ++t)
          e += r[t].length;
      var n = Z.allocUnsafe(e), u = 0;
      for (t = 0; t < r.length; ++t) {
        var a = r[t];
        if (!kt(a))
          throw new TypeError('"list" argument must be an Array of Buffers');
        a.copy(n, u), u += a.length;
      }
      return n;
    }, Z.byteLength = ll, Z.prototype._isBuffer = !0, Z.prototype.swap16 = function() {
      var r = this.length;
      if (r % 2 != 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (var e = 0; e < r; e += 2)
        mn(this, e, e + 1);
      return this;
    }, Z.prototype.swap32 = function() {
      var r = this.length;
      if (r % 4 != 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (var e = 0; e < r; e += 4)
        mn(this, e, e + 3), mn(this, e + 1, e + 2);
      return this;
    }, Z.prototype.swap64 = function() {
      var r = this.length;
      if (r % 8 != 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (var e = 0; e < r; e += 8)
        mn(this, e, e + 7), mn(this, e + 1, e + 6), mn(this, e + 2, e + 5), mn(this, e + 3, e + 4);
      return this;
    }, Z.prototype.toString = function() {
      var r = 0 | this.length;
      return r === 0 ? "" : arguments.length === 0 ? Q(this, 0, r) : If.apply(this, arguments);
    }, Z.prototype.equals = function(r) {
      if (!kt(r))
        throw new TypeError("Argument must be a Buffer");
      return this === r || Z.compare(this, r) === 0;
    }, Z.prototype.inspect = function() {
      var r = "";
      return this.length > 0 && (r = this.toString("hex", 0, 50).match(/.{2}/g).join(" "), this.length > 50 && (r += " ... ")), "<Buffer " + r + ">";
    }, Z.prototype.compare = function(r, e, t, n, u) {
      if (!kt(r))
        throw new TypeError("Argument must be a Buffer");
      if (e === void 0 && (e = 0), t === void 0 && (t = r ? r.length : 0), n === void 0 && (n = 0), u === void 0 && (u = this.length), e < 0 || t > r.length || n < 0 || u > this.length)
        throw new RangeError("out of range index");
      if (n >= u && e >= t)
        return 0;
      if (n >= u)
        return -1;
      if (e >= t)
        return 1;
      if (this === r)
        return 0;
      for (var a = (u >>>= 0) - (n >>>= 0), i = (t >>>= 0) - (e >>>= 0), o = Math.min(a, i), s = this.slice(n, u), c = r.slice(e, t), l = 0; l < o; ++l)
        if (s[l] !== c[l]) {
          a = s[l], i = c[l];
          break;
        }
      return a < i ? -1 : i < a ? 1 : 0;
    }, Z.prototype.includes = function(r, e, t) {
      return this.indexOf(r, e, t) !== -1;
    }, Z.prototype.indexOf = function(r, e, t) {
      return ra(this, r, e, t, !0);
    }, Z.prototype.lastIndexOf = function(r, e, t) {
      return ra(this, r, e, t, !1);
    }, Z.prototype.write = function(r, e, t, n) {
      if (e === void 0)
        n = "utf8", t = this.length, e = 0;
      else if (t === void 0 && typeof e == "string")
        n = e, t = this.length, e = 0;
      else {
        if (!isFinite(e))
          throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        e |= 0, isFinite(t) ? (t |= 0, n === void 0 && (n = "utf8")) : (n = t, t = void 0);
      }
      var u = this.length - e;
      if ((t === void 0 || t > u) && (t = u), r.length > 0 && (t < 0 || e < 0) || e > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      n || (n = "utf8");
      for (var a = !1; ; )
        switch (n) {
          case "hex":
            return h(this, r, e, t);
          case "utf8":
          case "utf-8":
            return g(this, r, e, t);
          case "ascii":
            return m(this, r, e, t);
          case "latin1":
          case "binary":
            return C(this, r, e, t);
          case "base64":
            return T(this, r, e, t);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return L(this, r, e, t);
          default:
            if (a)
              throw new TypeError("Unknown encoding: " + n);
            n = ("" + n).toLowerCase(), a = !0;
        }
    }, Z.prototype.toJSON = function() {
      return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
    };
    var pe = 4096;
    function de(r, e, t) {
      var n = "";
      t = Math.min(r.length, t);
      for (var u = e; u < t; ++u)
        n += String.fromCharCode(127 & r[u]);
      return n;
    }
    function z(r, e, t) {
      var n = "";
      t = Math.min(r.length, t);
      for (var u = e; u < t; ++u)
        n += String.fromCharCode(r[u]);
      return n;
    }
    function V(r, e, t) {
      var n = r.length;
      (!e || e < 0) && (e = 0), (!t || t < 0 || t > n) && (t = n);
      for (var u = "", a = e; a < t; ++a)
        u += P(r[a]);
      return u;
    }
    function J(r, e, t) {
      for (var n = r.slice(e, t), u = "", a = 0; a < n.length; a += 2)
        u += String.fromCharCode(n[a] + 256 * n[a + 1]);
      return u;
    }
    function Ee(r, e, t) {
      if (r % 1 != 0 || r < 0)
        throw new RangeError("offset is not uint");
      if (r + e > t)
        throw new RangeError("Trying to access beyond buffer length");
    }
    function ee(r, e, t, n, u, a) {
      if (!kt(r))
        throw new TypeError('"buffer" argument must be a Buffer instance');
      if (e > u || e < a)
        throw new RangeError('"value" argument is out of bounds');
      if (t + n > r.length)
        throw new RangeError("Index out of range");
    }
    function ge(r, e, t, n) {
      e < 0 && (e = 65535 + e + 1);
      for (var u = 0, a = Math.min(r.length - t, 2); u < a; ++u)
        r[t + u] = (e & 255 << 8 * (n ? u : 1 - u)) >>> 8 * (n ? u : 1 - u);
    }
    function me(r, e, t, n) {
      e < 0 && (e = 4294967295 + e + 1);
      for (var u = 0, a = Math.min(r.length - t, 4); u < a; ++u)
        r[t + u] = e >>> 8 * (n ? u : 3 - u) & 255;
    }
    function xe(r, e, t, n, u, a) {
      if (t + n > r.length)
        throw new RangeError("Index out of range");
      if (t < 0)
        throw new RangeError("Index out of range");
    }
    function Be(r, e, t, n, u) {
      return u || xe(r, 0, t, 4), is(r, e, t, n, 23, 4), t + 4;
    }
    function G(r, e, t, n, u) {
      return u || xe(r, 0, t, 8), is(r, e, t, n, 52, 8), t + 8;
    }
    Z.prototype.slice = function(r, e) {
      var t, n = this.length;
      if ((r = ~~r) < 0 ? (r += n) < 0 && (r = 0) : r > n && (r = n), (e = e === void 0 ? n : ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), e < r && (e = r), Z.TYPED_ARRAY_SUPPORT)
        (t = this.subarray(r, e)).__proto__ = Z.prototype;
      else {
        var u = e - r;
        t = new Z(u, void 0);
        for (var a = 0; a < u; ++a)
          t[a] = this[a + r];
      }
      return t;
    }, Z.prototype.readUIntLE = function(r, e, t) {
      r |= 0, e |= 0, t || Ee(r, e, this.length);
      for (var n = this[r], u = 1, a = 0; ++a < e && (u *= 256); )
        n += this[r + a] * u;
      return n;
    }, Z.prototype.readUIntBE = function(r, e, t) {
      r |= 0, e |= 0, t || Ee(r, e, this.length);
      for (var n = this[r + --e], u = 1; e > 0 && (u *= 256); )
        n += this[r + --e] * u;
      return n;
    }, Z.prototype.readUInt8 = function(r, e) {
      return e || Ee(r, 1, this.length), this[r];
    }, Z.prototype.readUInt16LE = function(r, e) {
      return e || Ee(r, 2, this.length), this[r] | this[r + 1] << 8;
    }, Z.prototype.readUInt16BE = function(r, e) {
      return e || Ee(r, 2, this.length), this[r] << 8 | this[r + 1];
    }, Z.prototype.readUInt32LE = function(r, e) {
      return e || Ee(r, 4, this.length), (this[r] | this[r + 1] << 8 | this[r + 2] << 16) + 16777216 * this[r + 3];
    }, Z.prototype.readUInt32BE = function(r, e) {
      return e || Ee(r, 4, this.length), 16777216 * this[r] + (this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3]);
    }, Z.prototype.readIntLE = function(r, e, t) {
      r |= 0, e |= 0, t || Ee(r, e, this.length);
      for (var n = this[r], u = 1, a = 0; ++a < e && (u *= 256); )
        n += this[r + a] * u;
      return n >= (u *= 128) && (n -= Math.pow(2, 8 * e)), n;
    }, Z.prototype.readIntBE = function(r, e, t) {
      r |= 0, e |= 0, t || Ee(r, e, this.length);
      for (var n = e, u = 1, a = this[r + --n]; n > 0 && (u *= 256); )
        a += this[r + --n] * u;
      return a >= (u *= 128) && (a -= Math.pow(2, 8 * e)), a;
    }, Z.prototype.readInt8 = function(r, e) {
      return e || Ee(r, 1, this.length), 128 & this[r] ? -1 * (255 - this[r] + 1) : this[r];
    }, Z.prototype.readInt16LE = function(r, e) {
      e || Ee(r, 2, this.length);
      var t = this[r] | this[r + 1] << 8;
      return 32768 & t ? 4294901760 | t : t;
    }, Z.prototype.readInt16BE = function(r, e) {
      e || Ee(r, 2, this.length);
      var t = this[r + 1] | this[r] << 8;
      return 32768 & t ? 4294901760 | t : t;
    }, Z.prototype.readInt32LE = function(r, e) {
      return e || Ee(r, 4, this.length), this[r] | this[r + 1] << 8 | this[r + 2] << 16 | this[r + 3] << 24;
    }, Z.prototype.readInt32BE = function(r, e) {
      return e || Ee(r, 4, this.length), this[r] << 24 | this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3];
    }, Z.prototype.readFloatLE = function(r, e) {
      return e || Ee(r, 4, this.length), Ci(this, r, !0, 23, 4);
    }, Z.prototype.readFloatBE = function(r, e) {
      return e || Ee(r, 4, this.length), Ci(this, r, !1, 23, 4);
    }, Z.prototype.readDoubleLE = function(r, e) {
      return e || Ee(r, 8, this.length), Ci(this, r, !0, 52, 8);
    }, Z.prototype.readDoubleBE = function(r, e) {
      return e || Ee(r, 8, this.length), Ci(this, r, !1, 52, 8);
    }, Z.prototype.writeUIntLE = function(r, e, t, n) {
      r = +r, e |= 0, t |= 0, n || ee(this, r, e, t, Math.pow(2, 8 * t) - 1, 0);
      var u = 1, a = 0;
      for (this[e] = 255 & r; ++a < t && (u *= 256); )
        this[e + a] = r / u & 255;
      return e + t;
    }, Z.prototype.writeUIntBE = function(r, e, t, n) {
      r = +r, e |= 0, t |= 0, n || ee(this, r, e, t, Math.pow(2, 8 * t) - 1, 0);
      var u = t - 1, a = 1;
      for (this[e + u] = 255 & r; --u >= 0 && (a *= 256); )
        this[e + u] = r / a & 255;
      return e + t;
    }, Z.prototype.writeUInt8 = function(r, e, t) {
      return r = +r, e |= 0, t || ee(this, r, e, 1, 255, 0), Z.TYPED_ARRAY_SUPPORT || (r = Math.floor(r)), this[e] = 255 & r, e + 1;
    }, Z.prototype.writeUInt16LE = function(r, e, t) {
      return r = +r, e |= 0, t || ee(this, r, e, 2, 65535, 0), Z.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & r, this[e + 1] = r >>> 8) : ge(this, r, e, !0), e + 2;
    }, Z.prototype.writeUInt16BE = function(r, e, t) {
      return r = +r, e |= 0, t || ee(this, r, e, 2, 65535, 0), Z.TYPED_ARRAY_SUPPORT ? (this[e] = r >>> 8, this[e + 1] = 255 & r) : ge(this, r, e, !1), e + 2;
    }, Z.prototype.writeUInt32LE = function(r, e, t) {
      return r = +r, e |= 0, t || ee(this, r, e, 4, 4294967295, 0), Z.TYPED_ARRAY_SUPPORT ? (this[e + 3] = r >>> 24, this[e + 2] = r >>> 16, this[e + 1] = r >>> 8, this[e] = 255 & r) : me(this, r, e, !0), e + 4;
    }, Z.prototype.writeUInt32BE = function(r, e, t) {
      return r = +r, e |= 0, t || ee(this, r, e, 4, 4294967295, 0), Z.TYPED_ARRAY_SUPPORT ? (this[e] = r >>> 24, this[e + 1] = r >>> 16, this[e + 2] = r >>> 8, this[e + 3] = 255 & r) : me(this, r, e, !1), e + 4;
    }, Z.prototype.writeIntLE = function(r, e, t, n) {
      if (r = +r, e |= 0, !n) {
        var u = Math.pow(2, 8 * t - 1);
        ee(this, r, e, t, u - 1, -u);
      }
      var a = 0, i = 1, o = 0;
      for (this[e] = 255 & r; ++a < t && (i *= 256); )
        r < 0 && o === 0 && this[e + a - 1] !== 0 && (o = 1), this[e + a] = (r / i >> 0) - o & 255;
      return e + t;
    }, Z.prototype.writeIntBE = function(r, e, t, n) {
      if (r = +r, e |= 0, !n) {
        var u = Math.pow(2, 8 * t - 1);
        ee(this, r, e, t, u - 1, -u);
      }
      var a = t - 1, i = 1, o = 0;
      for (this[e + a] = 255 & r; --a >= 0 && (i *= 256); )
        r < 0 && o === 0 && this[e + a + 1] !== 0 && (o = 1), this[e + a] = (r / i >> 0) - o & 255;
      return e + t;
    }, Z.prototype.writeInt8 = function(r, e, t) {
      return r = +r, e |= 0, t || ee(this, r, e, 1, 127, -128), Z.TYPED_ARRAY_SUPPORT || (r = Math.floor(r)), r < 0 && (r = 255 + r + 1), this[e] = 255 & r, e + 1;
    }, Z.prototype.writeInt16LE = function(r, e, t) {
      return r = +r, e |= 0, t || ee(this, r, e, 2, 32767, -32768), Z.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & r, this[e + 1] = r >>> 8) : ge(this, r, e, !0), e + 2;
    }, Z.prototype.writeInt16BE = function(r, e, t) {
      return r = +r, e |= 0, t || ee(this, r, e, 2, 32767, -32768), Z.TYPED_ARRAY_SUPPORT ? (this[e] = r >>> 8, this[e + 1] = 255 & r) : ge(this, r, e, !1), e + 2;
    }, Z.prototype.writeInt32LE = function(r, e, t) {
      return r = +r, e |= 0, t || ee(this, r, e, 4, 2147483647, -2147483648), Z.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & r, this[e + 1] = r >>> 8, this[e + 2] = r >>> 16, this[e + 3] = r >>> 24) : me(this, r, e, !0), e + 4;
    }, Z.prototype.writeInt32BE = function(r, e, t) {
      return r = +r, e |= 0, t || ee(this, r, e, 4, 2147483647, -2147483648), r < 0 && (r = 4294967295 + r + 1), Z.TYPED_ARRAY_SUPPORT ? (this[e] = r >>> 24, this[e + 1] = r >>> 16, this[e + 2] = r >>> 8, this[e + 3] = 255 & r) : me(this, r, e, !1), e + 4;
    }, Z.prototype.writeFloatLE = function(r, e, t) {
      return Be(this, r, e, !0, t);
    }, Z.prototype.writeFloatBE = function(r, e, t) {
      return Be(this, r, e, !1, t);
    }, Z.prototype.writeDoubleLE = function(r, e, t) {
      return G(this, r, e, !0, t);
    }, Z.prototype.writeDoubleBE = function(r, e, t) {
      return G(this, r, e, !1, t);
    }, Z.prototype.copy = function(r, e, t, n) {
      if (t || (t = 0), n || n === 0 || (n = this.length), e >= r.length && (e = r.length), e || (e = 0), n > 0 && n < t && (n = t), n === t || r.length === 0 || this.length === 0)
        return 0;
      if (e < 0)
        throw new RangeError("targetStart out of bounds");
      if (t < 0 || t >= this.length)
        throw new RangeError("sourceStart out of bounds");
      if (n < 0)
        throw new RangeError("sourceEnd out of bounds");
      n > this.length && (n = this.length), r.length - e < n - t && (n = r.length - e + t);
      var u, a = n - t;
      if (this === r && t < e && e < n)
        for (u = a - 1; u >= 0; --u)
          r[u + e] = this[u + t];
      else if (a < 1e3 || !Z.TYPED_ARRAY_SUPPORT)
        for (u = 0; u < a; ++u)
          r[u + e] = this[u + t];
      else
        Uint8Array.prototype.set.call(r, this.subarray(t, t + a), e);
      return a;
    }, Z.prototype.fill = function(r, e, t, n) {
      if (typeof r == "string") {
        if (typeof e == "string" ? (n = e, e = 0, t = this.length) : typeof t == "string" && (n = t, t = this.length), r.length === 1) {
          var u = r.charCodeAt(0);
          u < 256 && (r = u);
        }
        if (n !== void 0 && typeof n != "string")
          throw new TypeError("encoding must be a string");
        if (typeof n == "string" && !Z.isEncoding(n))
          throw new TypeError("Unknown encoding: " + n);
      } else
        typeof r == "number" && (r &= 255);
      if (e < 0 || this.length < e || this.length < t)
        throw new RangeError("Out of range index");
      if (t <= e)
        return this;
      var a;
      if (e >>>= 0, t = t === void 0 ? this.length : t >>> 0, r || (r = 0), typeof r == "number")
        for (a = e; a < t; ++a)
          this[a] = r;
      else {
        var i = kt(r) ? r : W(new Z(r, n).toString()), o = i.length;
        for (a = 0; a < t - e; ++a)
          this[a + e] = i[a % o];
      }
      return this;
    };
    var Y = /[^+\/0-9A-Za-z-_]/g;
    function P(r) {
      return r < 16 ? "0" + r.toString(16) : r.toString(16);
    }
    function W(r, e) {
      var t;
      e = e || 1 / 0;
      for (var n = r.length, u = null, a = [], i = 0; i < n; ++i) {
        if ((t = r.charCodeAt(i)) > 55295 && t < 57344) {
          if (!u) {
            if (t > 56319) {
              (e -= 3) > -1 && a.push(239, 191, 189);
              continue;
            }
            if (i + 1 === n) {
              (e -= 3) > -1 && a.push(239, 191, 189);
              continue;
            }
            u = t;
            continue;
          }
          if (t < 56320) {
            (e -= 3) > -1 && a.push(239, 191, 189), u = t;
            continue;
          }
          t = 65536 + (u - 55296 << 10 | t - 56320);
        } else
          u && (e -= 3) > -1 && a.push(239, 191, 189);
        if (u = null, t < 128) {
          if ((e -= 1) < 0)
            break;
          a.push(t);
        } else if (t < 2048) {
          if ((e -= 2) < 0)
            break;
          a.push(t >> 6 | 192, 63 & t | 128);
        } else if (t < 65536) {
          if ((e -= 3) < 0)
            break;
          a.push(t >> 12 | 224, t >> 6 & 63 | 128, 63 & t | 128);
        } else {
          if (!(t < 1114112))
            throw new Error("Invalid code point");
          if ((e -= 4) < 0)
            break;
          a.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, 63 & t | 128);
        }
      }
      return a;
    }
    function te(r) {
      return function(e) {
        var t, n, u, a, i, o;
        as || sl();
        var s = e.length;
        if (s % 4 > 0)
          throw new Error("Invalid string. Length must be a multiple of 4");
        i = e[s - 2] === "=" ? 2 : e[s - 1] === "=" ? 1 : 0, o = new Nf(3 * s / 4 - i), u = i > 0 ? s - 4 : s;
        var c = 0;
        for (t = 0, n = 0; t < u; t += 4, n += 3)
          a = it[e.charCodeAt(t)] << 18 | it[e.charCodeAt(t + 1)] << 12 | it[e.charCodeAt(t + 2)] << 6 | it[e.charCodeAt(t + 3)], o[c++] = a >> 16 & 255, o[c++] = a >> 8 & 255, o[c++] = 255 & a;
        return i === 2 ? (a = it[e.charCodeAt(t)] << 2 | it[e.charCodeAt(t + 1)] >> 4, o[c++] = 255 & a) : i === 1 && (a = it[e.charCodeAt(t)] << 10 | it[e.charCodeAt(t + 1)] << 4 | it[e.charCodeAt(t + 2)] >> 2, o[c++] = a >> 8 & 255, o[c++] = 255 & a), o;
      }(function(e) {
        if ((e = function(t) {
          return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
        }(e).replace(Y, "")).length < 2)
          return "";
        for (; e.length % 4 != 0; )
          e += "=";
        return e;
      }(r));
    }
    function ie(r, e, t, n) {
      for (var u = 0; u < n && !(u + t >= e.length || u >= r.length); ++u)
        e[u + t] = r[u];
      return u;
    }
    function Ie(r) {
      return r != null && (!!r._isBuffer || je(r) || function(e) {
        return typeof e.readFloatLE == "function" && typeof e.slice == "function" && je(e.slice(0, 0));
      }(r));
    }
    function je(r) {
      return !!r.constructor && typeof r.constructor.isBuffer == "function" && r.constructor.isBuffer(r);
    }
    var Xe = Ve(xt), Sr = /* @__PURE__ */ function() {
      function r(e, t) {
        se(this, r), (t = t || {}).readChunk || (t.readChunk = 1024), t.newLineCharacter ? t.newLineCharacter = t.newLineCharacter.charCodeAt(0) : t.newLineCharacter = 10, this.fd = typeof e == "number" ? e : Xe.openSync(e, "r"), this.options = t, this.newLineCharacter = t.newLineCharacter, this.reset();
      }
      return ce(r, [{ key: "_searchInBuffer", value: function(t, n) {
        for (var u = -1, a = 0; a <= t.length; a++)
          if (t[a] === n) {
            u = a;
            break;
          }
        return u;
      } }, { key: "reset", value: function() {
        this.eofReached = !1, this.linesCache = [], this.fdPosition = 0;
      } }, { key: "close", value: function() {
        Xe.closeSync(this.fd), this.fd = null;
      } }, { key: "_extractLines", value: function(t) {
        for (var n, u = [], a = 0, i = 0; ; ) {
          var o = t[a++];
          if (o === this.newLineCharacter)
            n = t.slice(i, a), u.push(n), i = a;
          else if (o === void 0)
            break;
        }
        var s = t.slice(i, a);
        return s.length && u.push(s), u;
      } }, { key: "_readChunk", value: function(t) {
        var n, u = 0, a = [];
        do {
          var i = new Z(this.options.readChunk);
          n = Xe.readSync(this.fd, i, 0, this.options.readChunk, this.fdPosition), u += n, this.fdPosition = this.fdPosition + n, a.push(i);
        } while (n && this._searchInBuffer(a[a.length - 1], this.options.newLineCharacter) === -1);
        var o = Z.concat(a);
        return n < this.options.readChunk && (this.eofReached = !0, o = o.slice(0, u)), u && (this.linesCache = this._extractLines(o), t && (this.linesCache[0] = Z.concat([t, this.linesCache[0]]))), u;
      } }, { key: "next", value: function() {
        if (!this.fd)
          return !1;
        var t, n = !1;
        return this.eofReached && this.linesCache.length === 0 ? n : (this.linesCache.length || (t = this._readChunk()), this.linesCache.length && (n = this.linesCache.shift(), n[n.length - 1] !== this.newLineCharacter && (t = this._readChunk(n), t && (n = this.linesCache.shift()))), this.eofReached && this.linesCache.length === 0 && this.close(), n && n[n.length - 1] === this.newLineCharacter && (n = n.slice(0, n.length - 1)), n);
      } }]), r;
    }(), gr = /* @__PURE__ */ function(r) {
      br(t, r);
      var e = Fr(t);
      function t() {
        return se(this, t), e.apply(this, arguments);
      }
      return ce(t);
    }(/* @__PURE__ */ Do(Error)), Or = /* @__PURE__ */ function(r) {
      br(t, r);
      var e = Fr(t);
      function t() {
        return se(this, t), e.apply(this, arguments);
      }
      return ce(t);
    }(/* @__PURE__ */ Do(Error)), ot = /* @__PURE__ */ function(r) {
      br(t, r);
      var e = Fr(t);
      function t() {
        return se(this, t), e.apply(this, arguments);
      }
      return ce(t);
    }(/* @__PURE__ */ Do(Error)), Nt = /* @__PURE__ */ function(r) {
      br(t, r);
      var e = Fr(t);
      function t() {
        return se(this, t), e.apply(this, arguments);
      }
      return ce(t);
    }(/* @__PURE__ */ Do(Error)), dt = { ConfigError: gr, DebugError: Or, UndefinedParserError: ot, ArgExpansionBailout: Nt }, vn = function(e, t) {
      return (vn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, u) {
        n.__proto__ = u;
      } || function(n, u) {
        for (var a in u)
          u.hasOwnProperty(a) && (n[a] = u[a]);
      })(e, t);
    };
    /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.
    
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
    
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */
    var gu = function() {
      return (gu = Object.assign || function(e) {
        for (var t, n = 1, u = arguments.length; n < u; n++)
          for (var a in t = arguments[n])
            Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
        return e;
      }).apply(this, arguments);
    };
    function mu(r) {
      var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
      if (t)
        return t.call(r);
      if (r && typeof r.length == "number")
        return { next: function() {
          return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
        } };
      throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function Lr(r, e) {
      var t = typeof Symbol == "function" && r[Symbol.iterator];
      if (!t)
        return r;
      var n, u, a = t.call(r), i = [];
      try {
        for (; (e === void 0 || e-- > 0) && !(n = a.next()).done; )
          i.push(n.value);
      } catch (o) {
        u = { error: o };
      } finally {
        try {
          n && !n.done && (t = a.return) && t.call(a);
        } finally {
          if (u)
            throw u.error;
        }
      }
      return i;
    }
    function Tr(r) {
      return this instanceof Tr ? (this.v = r, this) : new Tr(r);
    }
    var Ze = Object.freeze({ __proto__: null, __extends: function(e, t) {
      function n() {
        this.constructor = e;
      }
      vn(e, t), e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
    }, get __assign() {
      return gu;
    }, __rest: function(e, t) {
      var n = {};
      for (var u in e)
        Object.prototype.hasOwnProperty.call(e, u) && t.indexOf(u) < 0 && (n[u] = e[u]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function") {
        var a = 0;
        for (u = Object.getOwnPropertySymbols(e); a < u.length; a++)
          t.indexOf(u[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, u[a]) && (n[u[a]] = e[u[a]]);
      }
      return n;
    }, __decorate: function(e, t, n, u) {
      var a, i = arguments.length, o = i < 3 ? t : u === null ? u = Object.getOwnPropertyDescriptor(t, n) : u;
      if ((typeof Reflect > "u" ? "undefined" : Se(Reflect)) == "object" && typeof Reflect.decorate == "function")
        o = Reflect.decorate(e, t, n, u);
      else
        for (var s = e.length - 1; s >= 0; s--)
          (a = e[s]) && (o = (i < 3 ? a(o) : i > 3 ? a(t, n, o) : a(t, n)) || o);
      return i > 3 && o && Object.defineProperty(t, n, o), o;
    }, __param: function(e, t) {
      return function(n, u) {
        t(n, u, e);
      };
    }, __metadata: function(e, t) {
      if ((typeof Reflect > "u" ? "undefined" : Se(Reflect)) == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(e, t);
    }, __awaiter: function(e, t, n, u) {
      return new (n || (n = Promise))(function(a, i) {
        function o(l) {
          try {
            c(u.next(l));
          } catch (p) {
            i(p);
          }
        }
        function s(l) {
          try {
            c(u.throw(l));
          } catch (p) {
            i(p);
          }
        }
        function c(l) {
          var p;
          l.done ? a(l.value) : (p = l.value, p instanceof n ? p : new n(function(f) {
            f(p);
          })).then(o, s);
        }
        c((u = u.apply(e, t || [])).next());
      });
    }, __generator: function(e, t) {
      var n, u, a, i, o = { label: 0, sent: function() {
        if (1 & a[0])
          throw a[1];
        return a[1];
      }, trys: [], ops: [] };
      return i = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (i[Symbol.iterator] = function() {
        return this;
      }), i;
      function s(c) {
        return function(l) {
          return function(p) {
            if (n)
              throw new TypeError("Generator is already executing.");
            for (; o; )
              try {
                if (n = 1, u && (a = 2 & p[0] ? u.return : p[0] ? u.throw || ((a = u.return) && a.call(u), 0) : u.next) && !(a = a.call(u, p[1])).done)
                  return a;
                switch (u = 0, a && (p = [2 & p[0], a.value]), p[0]) {
                  case 0:
                  case 1:
                    a = p;
                    break;
                  case 4:
                    return o.label++, { value: p[1], done: !1 };
                  case 5:
                    o.label++, u = p[1], p = [0];
                    continue;
                  case 7:
                    p = o.ops.pop(), o.trys.pop();
                    continue;
                  default:
                    if (a = o.trys, !((a = a.length > 0 && a[a.length - 1]) || p[0] !== 6 && p[0] !== 2)) {
                      o = 0;
                      continue;
                    }
                    if (p[0] === 3 && (!a || p[1] > a[0] && p[1] < a[3])) {
                      o.label = p[1];
                      break;
                    }
                    if (p[0] === 6 && o.label < a[1]) {
                      o.label = a[1], a = p;
                      break;
                    }
                    if (a && o.label < a[2]) {
                      o.label = a[2], o.ops.push(p);
                      break;
                    }
                    a[2] && o.ops.pop(), o.trys.pop();
                    continue;
                }
                p = t.call(e, o);
              } catch (f) {
                p = [6, f], u = 0;
              } finally {
                n = a = 0;
              }
            if (5 & p[0])
              throw p[1];
            return { value: p[0] ? p[1] : void 0, done: !0 };
          }([c, l]);
        };
      }
    }, __createBinding: function(e, t, n, u) {
      u === void 0 && (u = n), e[u] = t[n];
    }, __exportStar: function(e, t) {
      for (var n in e)
        n === "default" || t.hasOwnProperty(n) || (t[n] = e[n]);
    }, __values: mu, __read: Lr, __spread: function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e = e.concat(Lr(arguments[t]));
      return e;
    }, __spreadArrays: function() {
      for (var e = 0, t = 0, n = arguments.length; t < n; t++)
        e += arguments[t].length;
      var u = Array(e), a = 0;
      for (t = 0; t < n; t++)
        for (var i = arguments[t], o = 0, s = i.length; o < s; o++, a++)
          u[a] = i[o];
      return u;
    }, __await: Tr, __asyncGenerator: function(e, t, n) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var u, a = n.apply(e, t || []), i = [];
      return u = {}, o("next"), o("throw"), o("return"), u[Symbol.asyncIterator] = function() {
        return this;
      }, u;
      function o(f) {
        a[f] && (u[f] = function(d) {
          return new Promise(function(D, v) {
            i.push([f, d, D, v]) > 1 || s(f, d);
          });
        });
      }
      function s(f, d) {
        try {
          (D = a[f](d)).value instanceof Tr ? Promise.resolve(D.value.v).then(c, l) : p(i[0][2], D);
        } catch (v) {
          p(i[0][3], v);
        }
        var D;
      }
      function c(f) {
        s("next", f);
      }
      function l(f) {
        s("throw", f);
      }
      function p(f, d) {
        f(d), i.shift(), i.length && s(i[0][0], i[0][1]);
      }
    }, __asyncDelegator: function(e) {
      var t, n;
      return t = {}, u("next"), u("throw", function(a) {
        throw a;
      }), u("return"), t[Symbol.iterator] = function() {
        return this;
      }, t;
      function u(a, i) {
        t[a] = e[a] ? function(o) {
          return (n = !n) ? { value: Tr(e[a](o)), done: a === "return" } : i ? i(o) : o;
        } : i;
      }
    }, __asyncValues: function(e) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var t, n = e[Symbol.asyncIterator];
      return n ? n.call(e) : (e = mu(e), t = {}, u("next"), u("throw"), u("return"), t[Symbol.asyncIterator] = function() {
        return this;
      }, t);
      function u(a) {
        t[a] = e[a] && function(i) {
          return new Promise(function(o, s) {
            (function(c, l, p, f) {
              Promise.resolve(f).then(function(d) {
                c({ value: d, done: p });
              }, l);
            })(o, s, (i = e[a](i)).done, i.value);
          });
        };
      }
    }, __makeTemplateObject: function(e, t) {
      return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
    }, __importStar: function(e) {
      if (e && e.__esModule)
        return e;
      var t = {};
      if (e != null)
        for (var n in e)
          Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e, t;
    }, __importDefault: function(e) {
      return e && e.__esModule ? e : { default: e };
    }, __classPrivateFieldGet: function(e, t) {
      if (!t.has(e))
        throw new TypeError("attempted to get private field on non-instance");
      return t.get(e);
    }, __classPrivateFieldSet: function(e, t, n) {
      if (!t.has(e))
        throw new TypeError("attempted to set private field on non-instance");
      return t.set(e, n), n;
    } }), Rr = De(function(r, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), e.apiDescriptor = { key: function(n) {
        return /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(n) ? n : JSON.stringify(n);
      }, value: function(n) {
        if (n === null || Se(n) != "object")
          return JSON.stringify(n);
        if (Array.isArray(n))
          return "[".concat(n.map(function(a) {
            return e.apiDescriptor.value(a);
          }).join(", "), "]");
        var u = Object.keys(n);
        return u.length === 0 ? "{}" : "{ ".concat(u.map(function(a) {
          return "".concat(e.apiDescriptor.key(a), ": ").concat(e.apiDescriptor.value(n[a]));
        }).join(", "), " }");
      }, pair: function(n) {
        var u = n.key, a = n.value;
        return e.apiDescriptor.value(Zn({}, u, a));
      } };
    }), mr = De(function(r, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), Ze.__exportStar(Rr, e);
    }), yr = /[|\\{}()[\]^$+*?.]/g, Mr = function(e) {
      if (typeof e != "string")
        throw new TypeError("Expected a string");
      return e.replace(yr, "\\$&");
    }, jr = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] }, $e = De(function(r) {
      var e = {};
      for (var t in jr)
        jr.hasOwnProperty(t) && (e[jr[t]] = t);
      var n = r.exports = { rgb: { channels: 3, labels: "rgb" }, hsl: { channels: 3, labels: "hsl" }, hsv: { channels: 3, labels: "hsv" }, hwb: { channels: 3, labels: "hwb" }, cmyk: { channels: 4, labels: "cmyk" }, xyz: { channels: 3, labels: "xyz" }, lab: { channels: 3, labels: "lab" }, lch: { channels: 3, labels: "lch" }, hex: { channels: 1, labels: ["hex"] }, keyword: { channels: 1, labels: ["keyword"] }, ansi16: { channels: 1, labels: ["ansi16"] }, ansi256: { channels: 1, labels: ["ansi256"] }, hcg: { channels: 3, labels: ["h", "c", "g"] }, apple: { channels: 3, labels: ["r16", "g16", "b16"] }, gray: { channels: 1, labels: ["gray"] } };
      for (var u in n)
        if (n.hasOwnProperty(u)) {
          if (!("channels" in n[u]))
            throw new Error("missing channels property: " + u);
          if (!("labels" in n[u]))
            throw new Error("missing channel labels property: " + u);
          if (n[u].labels.length !== n[u].channels)
            throw new Error("channel and label counts mismatch: " + u);
          var a = n[u].channels, i = n[u].labels;
          delete n[u].channels, delete n[u].labels, Object.defineProperty(n[u], "channels", { value: a }), Object.defineProperty(n[u], "labels", { value: i });
        }
      n.rgb.hsl = function(o) {
        var s, c, l = o[0] / 255, p = o[1] / 255, f = o[2] / 255, d = Math.min(l, p, f), D = Math.max(l, p, f), v = D - d;
        return D === d ? s = 0 : l === D ? s = (p - f) / v : p === D ? s = 2 + (f - l) / v : f === D && (s = 4 + (l - p) / v), (s = Math.min(60 * s, 360)) < 0 && (s += 360), c = (d + D) / 2, [s, 100 * (D === d ? 0 : c <= 0.5 ? v / (D + d) : v / (2 - D - d)), 100 * c];
      }, n.rgb.hsv = function(o) {
        var s, c, l, p, f, d = o[0] / 255, D = o[1] / 255, v = o[2] / 255, y = Math.max(d, D, v), b = y - Math.min(d, D, v), S = function(x) {
          return (y - x) / 6 / b + 0.5;
        };
        return b === 0 ? p = f = 0 : (f = b / y, s = S(d), c = S(D), l = S(v), d === y ? p = l - c : D === y ? p = 1 / 3 + s - l : v === y && (p = 2 / 3 + c - s), p < 0 ? p += 1 : p > 1 && (p -= 1)), [360 * p, 100 * f, 100 * y];
      }, n.rgb.hwb = function(o) {
        var s = o[0], c = o[1], l = o[2];
        return [n.rgb.hsl(o)[0], 100 * (1 / 255 * Math.min(s, Math.min(c, l))), 100 * (l = 1 - 1 / 255 * Math.max(s, Math.max(c, l)))];
      }, n.rgb.cmyk = function(o) {
        var s, c = o[0] / 255, l = o[1] / 255, p = o[2] / 255;
        return [100 * ((1 - c - (s = Math.min(1 - c, 1 - l, 1 - p))) / (1 - s) || 0), 100 * ((1 - l - s) / (1 - s) || 0), 100 * ((1 - p - s) / (1 - s) || 0), 100 * s];
      }, n.rgb.keyword = function(o) {
        var s = e[o];
        if (s)
          return s;
        var c, l, p, f = 1 / 0;
        for (var d in jr)
          if (jr.hasOwnProperty(d)) {
            var D = jr[d], v = (l = o, p = D, Math.pow(l[0] - p[0], 2) + Math.pow(l[1] - p[1], 2) + Math.pow(l[2] - p[2], 2));
            v < f && (f = v, c = d);
          }
        return c;
      }, n.keyword.rgb = function(o) {
        return jr[o];
      }, n.rgb.xyz = function(o) {
        var s = o[0] / 255, c = o[1] / 255, l = o[2] / 255;
        return [100 * (0.4124 * (s = s > 0.04045 ? Math.pow((s + 0.055) / 1.055, 2.4) : s / 12.92) + 0.3576 * (c = c > 0.04045 ? Math.pow((c + 0.055) / 1.055, 2.4) : c / 12.92) + 0.1805 * (l = l > 0.04045 ? Math.pow((l + 0.055) / 1.055, 2.4) : l / 12.92)), 100 * (0.2126 * s + 0.7152 * c + 0.0722 * l), 100 * (0.0193 * s + 0.1192 * c + 0.9505 * l)];
      }, n.rgb.lab = function(o) {
        var s = n.rgb.xyz(o), c = s[0], l = s[1], p = s[2];
        return l /= 100, p /= 108.883, c = (c /= 95.047) > 8856e-6 ? Math.pow(c, 1 / 3) : 7.787 * c + 16 / 116, [116 * (l = l > 8856e-6 ? Math.pow(l, 1 / 3) : 7.787 * l + 16 / 116) - 16, 500 * (c - l), 200 * (l - (p = p > 8856e-6 ? Math.pow(p, 1 / 3) : 7.787 * p + 16 / 116))];
      }, n.hsl.rgb = function(o) {
        var s, c, l, p, f, d = o[0] / 360, D = o[1] / 100, v = o[2] / 100;
        if (D === 0)
          return [f = 255 * v, f, f];
        s = 2 * v - (c = v < 0.5 ? v * (1 + D) : v + D - v * D), p = [0, 0, 0];
        for (var y = 0; y < 3; y++)
          (l = d + 1 / 3 * -(y - 1)) < 0 && l++, l > 1 && l--, f = 6 * l < 1 ? s + 6 * (c - s) * l : 2 * l < 1 ? c : 3 * l < 2 ? s + (c - s) * (2 / 3 - l) * 6 : s, p[y] = 255 * f;
        return p;
      }, n.hsl.hsv = function(o) {
        var s = o[0], c = o[1] / 100, l = o[2] / 100, p = c, f = Math.max(l, 0.01);
        return c *= (l *= 2) <= 1 ? l : 2 - l, p *= f <= 1 ? f : 2 - f, [s, 100 * (l === 0 ? 2 * p / (f + p) : 2 * c / (l + c)), 100 * ((l + c) / 2)];
      }, n.hsv.rgb = function(o) {
        var s = o[0] / 60, c = o[1] / 100, l = o[2] / 100, p = Math.floor(s) % 6, f = s - Math.floor(s), d = 255 * l * (1 - c), D = 255 * l * (1 - c * f), v = 255 * l * (1 - c * (1 - f));
        switch (l *= 255, p) {
          case 0:
            return [l, v, d];
          case 1:
            return [D, l, d];
          case 2:
            return [d, l, v];
          case 3:
            return [d, D, l];
          case 4:
            return [v, d, l];
          case 5:
            return [l, d, D];
        }
      }, n.hsv.hsl = function(o) {
        var s, c, l, p = o[0], f = o[1] / 100, d = o[2] / 100, D = Math.max(d, 0.01);
        return l = (2 - f) * d, c = f * D, [p, 100 * (c = (c /= (s = (2 - f) * D) <= 1 ? s : 2 - s) || 0), 100 * (l /= 2)];
      }, n.hwb.rgb = function(o) {
        var s, c, l, p, f, d, D, v = o[0] / 360, y = o[1] / 100, b = o[2] / 100, S = y + b;
        switch (S > 1 && (y /= S, b /= S), l = 6 * v - (s = Math.floor(6 * v)), (1 & s) != 0 && (l = 1 - l), p = y + l * ((c = 1 - b) - y), s) {
          default:
          case 6:
          case 0:
            f = c, d = p, D = y;
            break;
          case 1:
            f = p, d = c, D = y;
            break;
          case 2:
            f = y, d = c, D = p;
            break;
          case 3:
            f = y, d = p, D = c;
            break;
          case 4:
            f = p, d = y, D = c;
            break;
          case 5:
            f = c, d = y, D = p;
        }
        return [255 * f, 255 * d, 255 * D];
      }, n.cmyk.rgb = function(o) {
        var s = o[0] / 100, c = o[1] / 100, l = o[2] / 100, p = o[3] / 100;
        return [255 * (1 - Math.min(1, s * (1 - p) + p)), 255 * (1 - Math.min(1, c * (1 - p) + p)), 255 * (1 - Math.min(1, l * (1 - p) + p))];
      }, n.xyz.rgb = function(o) {
        var s, c, l, p = o[0] / 100, f = o[1] / 100, d = o[2] / 100;
        return c = -0.9689 * p + 1.8758 * f + 0.0415 * d, l = 0.0557 * p + -0.204 * f + 1.057 * d, s = (s = 3.2406 * p + -1.5372 * f + -0.4986 * d) > 31308e-7 ? 1.055 * Math.pow(s, 1 / 2.4) - 0.055 : 12.92 * s, c = c > 31308e-7 ? 1.055 * Math.pow(c, 1 / 2.4) - 0.055 : 12.92 * c, l = l > 31308e-7 ? 1.055 * Math.pow(l, 1 / 2.4) - 0.055 : 12.92 * l, [255 * (s = Math.min(Math.max(0, s), 1)), 255 * (c = Math.min(Math.max(0, c), 1)), 255 * (l = Math.min(Math.max(0, l), 1))];
      }, n.xyz.lab = function(o) {
        var s = o[0], c = o[1], l = o[2];
        return c /= 100, l /= 108.883, s = (s /= 95.047) > 8856e-6 ? Math.pow(s, 1 / 3) : 7.787 * s + 16 / 116, [116 * (c = c > 8856e-6 ? Math.pow(c, 1 / 3) : 7.787 * c + 16 / 116) - 16, 500 * (s - c), 200 * (c - (l = l > 8856e-6 ? Math.pow(l, 1 / 3) : 7.787 * l + 16 / 116))];
      }, n.lab.xyz = function(o) {
        var s, c, l, p = o[0];
        s = o[1] / 500 + (c = (p + 16) / 116), l = c - o[2] / 200;
        var f = Math.pow(c, 3), d = Math.pow(s, 3), D = Math.pow(l, 3);
        return c = f > 8856e-6 ? f : (c - 16 / 116) / 7.787, s = d > 8856e-6 ? d : (s - 16 / 116) / 7.787, l = D > 8856e-6 ? D : (l - 16 / 116) / 7.787, [s *= 95.047, c *= 100, l *= 108.883];
      }, n.lab.lch = function(o) {
        var s, c = o[0], l = o[1], p = o[2];
        return (s = 360 * Math.atan2(p, l) / 2 / Math.PI) < 0 && (s += 360), [c, Math.sqrt(l * l + p * p), s];
      }, n.lch.lab = function(o) {
        var s, c = o[0], l = o[1];
        return s = o[2] / 360 * 2 * Math.PI, [c, l * Math.cos(s), l * Math.sin(s)];
      }, n.rgb.ansi16 = function(o) {
        var s = o[0], c = o[1], l = o[2], p = 1 in arguments ? arguments[1] : n.rgb.hsv(o)[2];
        if ((p = Math.round(p / 50)) === 0)
          return 30;
        var f = 30 + (Math.round(l / 255) << 2 | Math.round(c / 255) << 1 | Math.round(s / 255));
        return p === 2 && (f += 60), f;
      }, n.hsv.ansi16 = function(o) {
        return n.rgb.ansi16(n.hsv.rgb(o), o[2]);
      }, n.rgb.ansi256 = function(o) {
        var s = o[0], c = o[1], l = o[2];
        return s === c && c === l ? s < 8 ? 16 : s > 248 ? 231 : Math.round((s - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(s / 255 * 5) + 6 * Math.round(c / 255 * 5) + Math.round(l / 255 * 5);
      }, n.ansi16.rgb = function(o) {
        var s = o % 10;
        if (s === 0 || s === 7)
          return o > 50 && (s += 3.5), [s = s / 10.5 * 255, s, s];
        var c = 0.5 * (1 + ~~(o > 50));
        return [(1 & s) * c * 255, (s >> 1 & 1) * c * 255, (s >> 2 & 1) * c * 255];
      }, n.ansi256.rgb = function(o) {
        if (o >= 232) {
          var s = 10 * (o - 232) + 8;
          return [s, s, s];
        }
        var c;
        return o -= 16, [Math.floor(o / 36) / 5 * 255, Math.floor((c = o % 36) / 6) / 5 * 255, c % 6 / 5 * 255];
      }, n.rgb.hex = function(o) {
        var s = (((255 & Math.round(o[0])) << 16) + ((255 & Math.round(o[1])) << 8) + (255 & Math.round(o[2]))).toString(16).toUpperCase();
        return "000000".substring(s.length) + s;
      }, n.hex.rgb = function(o) {
        var s = o.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
        if (!s)
          return [0, 0, 0];
        var c = s[0];
        s[0].length === 3 && (c = c.split("").map(function(p) {
          return p + p;
        }).join(""));
        var l = parseInt(c, 16);
        return [l >> 16 & 255, l >> 8 & 255, 255 & l];
      }, n.rgb.hcg = function(o) {
        var s, c = o[0] / 255, l = o[1] / 255, p = o[2] / 255, f = Math.max(Math.max(c, l), p), d = Math.min(Math.min(c, l), p), D = f - d;
        return s = D <= 0 ? 0 : f === c ? (l - p) / D % 6 : f === l ? 2 + (p - c) / D : 4 + (c - l) / D + 4, s /= 6, [360 * (s %= 1), 100 * D, 100 * (D < 1 ? d / (1 - D) : 0)];
      }, n.hsl.hcg = function(o) {
        var s = o[1] / 100, c = o[2] / 100, l = 1, p = 0;
        return (l = c < 0.5 ? 2 * s * c : 2 * s * (1 - c)) < 1 && (p = (c - 0.5 * l) / (1 - l)), [o[0], 100 * l, 100 * p];
      }, n.hsv.hcg = function(o) {
        var s = o[1] / 100, c = o[2] / 100, l = s * c, p = 0;
        return l < 1 && (p = (c - l) / (1 - l)), [o[0], 100 * l, 100 * p];
      }, n.hcg.rgb = function(o) {
        var s = o[0] / 360, c = o[1] / 100, l = o[2] / 100;
        if (c === 0)
          return [255 * l, 255 * l, 255 * l];
        var p, f = [0, 0, 0], d = s % 1 * 6, D = d % 1, v = 1 - D;
        switch (Math.floor(d)) {
          case 0:
            f[0] = 1, f[1] = D, f[2] = 0;
            break;
          case 1:
            f[0] = v, f[1] = 1, f[2] = 0;
            break;
          case 2:
            f[0] = 0, f[1] = 1, f[2] = D;
            break;
          case 3:
            f[0] = 0, f[1] = v, f[2] = 1;
            break;
          case 4:
            f[0] = D, f[1] = 0, f[2] = 1;
            break;
          default:
            f[0] = 1, f[1] = 0, f[2] = v;
        }
        return p = (1 - c) * l, [255 * (c * f[0] + p), 255 * (c * f[1] + p), 255 * (c * f[2] + p)];
      }, n.hcg.hsv = function(o) {
        var s = o[1] / 100, c = s + o[2] / 100 * (1 - s), l = 0;
        return c > 0 && (l = s / c), [o[0], 100 * l, 100 * c];
      }, n.hcg.hsl = function(o) {
        var s = o[1] / 100, c = o[2] / 100 * (1 - s) + 0.5 * s, l = 0;
        return c > 0 && c < 0.5 ? l = s / (2 * c) : c >= 0.5 && c < 1 && (l = s / (2 * (1 - c))), [o[0], 100 * l, 100 * c];
      }, n.hcg.hwb = function(o) {
        var s = o[1] / 100, c = s + o[2] / 100 * (1 - s);
        return [o[0], 100 * (c - s), 100 * (1 - c)];
      }, n.hwb.hcg = function(o) {
        var s = o[1] / 100, c = 1 - o[2] / 100, l = c - s, p = 0;
        return l < 1 && (p = (c - l) / (1 - l)), [o[0], 100 * l, 100 * p];
      }, n.apple.rgb = function(o) {
        return [o[0] / 65535 * 255, o[1] / 65535 * 255, o[2] / 65535 * 255];
      }, n.rgb.apple = function(o) {
        return [o[0] / 255 * 65535, o[1] / 255 * 65535, o[2] / 255 * 65535];
      }, n.gray.rgb = function(o) {
        return [o[0] / 100 * 255, o[0] / 100 * 255, o[0] / 100 * 255];
      }, n.gray.hsl = n.gray.hsv = function(o) {
        return [0, 0, o[0]];
      }, n.gray.hwb = function(o) {
        return [0, 100, o[0]];
      }, n.gray.cmyk = function(o) {
        return [0, 0, 0, o[0]];
      }, n.gray.lab = function(o) {
        return [o[0], 0, 0];
      }, n.gray.hex = function(o) {
        var s = 255 & Math.round(o[0] / 100 * 255), c = ((s << 16) + (s << 8) + s).toString(16).toUpperCase();
        return "000000".substring(c.length) + c;
      }, n.rgb.gray = function(o) {
        return [(o[0] + o[1] + o[2]) / 3 / 255 * 100];
      };
    });
    function ht(r) {
      var e = function() {
        for (var c = {}, l = Object.keys($e), p = l.length, f = 0; f < p; f++)
          c[l[f]] = { distance: -1, parent: null };
        return c;
      }(), t = [r];
      for (e[r].distance = 0; t.length; )
        for (var n = t.pop(), u = Object.keys($e[n]), a = u.length, i = 0; i < a; i++) {
          var o = u[i], s = e[o];
          s.distance === -1 && (s.distance = e[n].distance + 1, s.parent = n, t.unshift(o));
        }
      return e;
    }
    function Wn(r, e) {
      return function(t) {
        return e(r(t));
      };
    }
    function Dt(r, e) {
      for (var t = [e[r].parent, r], n = $e[e[r].parent][r], u = e[r].parent; e[u].parent; )
        t.unshift(e[u].parent), n = Wn($e[e[u].parent][u], n), u = e[u].parent;
      return n.conversion = t, n;
    }
    var Pt = {};
    Object.keys($e).forEach(function(r) {
      Pt[r] = {}, Object.defineProperty(Pt[r], "channels", { value: $e[r].channels }), Object.defineProperty(Pt[r], "labels", { value: $e[r].labels });
      var e = function(t) {
        for (var n = ht(t), u = {}, a = Object.keys(n), i = a.length, o = 0; o < i; o++) {
          var s = a[o];
          n[s].parent !== null && (u[s] = Dt(s, n));
        }
        return u;
      }(r);
      Object.keys(e).forEach(function(t) {
        var n = e[t];
        Pt[r][t] = function(u) {
          var a = function(o) {
            if (o == null)
              return o;
            arguments.length > 1 && (o = Array.prototype.slice.call(arguments));
            var s = u(o);
            if (Se(s) == "object")
              for (var c = s.length, l = 0; l < c; l++)
                s[l] = Math.round(s[l]);
            return s;
          };
          return "conversion" in u && (a.conversion = u.conversion), a;
        }(n), Pt[r][t].raw = function(u) {
          var a = function(o) {
            return o == null ? o : (arguments.length > 1 && (o = Array.prototype.slice.call(arguments)), u(o));
          };
          return "conversion" in u && (a.conversion = u.conversion), a;
        }(n);
      });
    });
    var Gn, bi = Pt, xr = De(function(r) {
      var e = function(a, i) {
        return function() {
          var o = a.apply(bi, arguments);
          return "\x1B[".concat(o + i, "m");
        };
      }, t = function(a, i) {
        return function() {
          var o = a.apply(bi, arguments);
          return "\x1B[".concat(38 + i, ";5;").concat(o, "m");
        };
      }, n = function(a, i) {
        return function() {
          var o = a.apply(bi, arguments);
          return "\x1B[".concat(38 + i, ";2;").concat(o[0], ";").concat(o[1], ";").concat(o[2], "m");
        };
      };
      Object.defineProperty(r, "exports", { enumerable: !0, get: function() {
        var a = /* @__PURE__ */ new Map(), i = { modifier: { reset: [0, 0], bold: [1, 22], dim: [2, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], hidden: [8, 28], strikethrough: [9, 29] }, color: { black: [30, 39], red: [31, 39], green: [32, 39], yellow: [33, 39], blue: [34, 39], magenta: [35, 39], cyan: [36, 39], white: [37, 39], gray: [90, 39], redBright: [91, 39], greenBright: [92, 39], yellowBright: [93, 39], blueBright: [94, 39], magentaBright: [95, 39], cyanBright: [96, 39], whiteBright: [97, 39] }, bgColor: { bgBlack: [40, 49], bgRed: [41, 49], bgGreen: [42, 49], bgYellow: [43, 49], bgBlue: [44, 49], bgMagenta: [45, 49], bgCyan: [46, 49], bgWhite: [47, 49], bgBlackBright: [100, 49], bgRedBright: [101, 49], bgGreenBright: [102, 49], bgYellowBright: [103, 49], bgBlueBright: [104, 49], bgMagentaBright: [105, 49], bgCyanBright: [106, 49], bgWhiteBright: [107, 49] } };
        i.color.grey = i.color.gray;
        for (var o = 0, s = Object.keys(i); o < s.length; o++) {
          for (var c = s[o], l = i[c], p = 0, f = Object.keys(l); p < f.length; p++) {
            var d = f[p], D = l[d];
            i[d] = { open: "\x1B[".concat(D[0], "m"), close: "\x1B[".concat(D[1], "m") }, l[d] = i[d], a.set(D[0], D[1]);
          }
          Object.defineProperty(i, c, { value: l, enumerable: !1 }), Object.defineProperty(i, "codes", { value: a, enumerable: !1 });
        }
        var v = function(A) {
          return A;
        }, y = function(A, k, O) {
          return [A, k, O];
        };
        i.color.close = "\x1B[39m", i.bgColor.close = "\x1B[49m", i.color.ansi = { ansi: e(v, 0) }, i.color.ansi256 = { ansi256: t(v, 0) }, i.color.ansi16m = { rgb: n(y, 0) }, i.bgColor.ansi = { ansi: e(v, 10) }, i.bgColor.ansi256 = { ansi256: t(v, 10) }, i.bgColor.ansi16m = { rgb: n(y, 10) };
        for (var b = 0, S = Object.keys(bi); b < S.length; b++) {
          var F = S[b];
          if (Se(bi[F]) == "object") {
            var x = bi[F];
            F === "ansi16" && (F = "ansi"), "ansi16" in x && (i.color.ansi[F] = e(x.ansi16, 0), i.bgColor.ansi[F] = e(x.ansi16, 10)), "ansi256" in x && (i.color.ansi256[F] = t(x.ansi256, 0), i.bgColor.ansi256[F] = t(x.ansi256, 10)), "rgb" in x && (i.color.ansi16m[F] = n(x.rgb, 0), i.bgColor.ansi16m[F] = n(x.rgb, 10));
          }
        }
        return i;
      } });
    });
    function XD() {
      if (Gn === void 0) {
        var r = new ArrayBuffer(2), e = new Uint8Array(r), t = new Uint16Array(r);
        if (e[0] = 1, e[1] = 2, t[0] === 258)
          Gn = "BE";
        else {
          if (t[0] !== 513)
            throw new Error("unable to figure out endianess");
          Gn = "LE";
        }
      }
      return Gn;
    }
    function JD() {
      return Pr.location !== void 0 ? Pr.location.hostname : "";
    }
    function YD() {
      return [];
    }
    function KD() {
      return 0;
    }
    function QD() {
      return Number.MAX_VALUE;
    }
    function ZD() {
      return Number.MAX_VALUE;
    }
    function _D() {
      return [];
    }
    function eg() {
      return "Browser";
    }
    function rg() {
      return Pr.navigator !== void 0 ? Pr.navigator.appVersion : "";
    }
    function tg() {
    }
    function ng() {
    }
    function ug() {
      return "javascript";
    }
    function ag() {
      return "browser";
    }
    function Of() {
      return "/tmp";
    }
    var ig = Of, XF = { EOL: `
`, arch: ug, platform: ag, tmpdir: ig, tmpDir: Of, networkInterfaces: tg, getNetworkInterfaces: ng, release: rg, type: eg, cpus: _D, totalmem: ZD, freemem: QD, uptime: KD, loadavg: YD, hostname: JD, endianness: XD }, cr = function(e, t) {
      t = t || Ir.argv;
      var n = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--", u = t.indexOf(n + e), a = t.indexOf("--");
      return u !== -1 && (a === -1 || u < a);
    }, JF = Ve(Object.freeze({ __proto__: null, endianness: XD, hostname: JD, loadavg: YD, uptime: KD, freemem: QD, totalmem: ZD, cpus: _D, type: eg, release: rg, networkInterfaces: tg, getNetworkInterfaces: ng, arch: ug, platform: ag, tmpDir: Of, tmpdir: ig, EOL: `
`, default: XF })), Wr = Ir.env, Fi;
    function Lf(r) {
      return function(e) {
        return e !== 0 && { level: e, hasBasic: !0, has256: e >= 2, has16m: e >= 3 };
      }(function(e) {
        if (Fi === !1)
          return 0;
        if (cr("color=16m") || cr("color=full") || cr("color=truecolor"))
          return 3;
        if (cr("color=256"))
          return 2;
        if (e && !e.isTTY && Fi !== !0)
          return 0;
        var t = Fi ? 1 : 0;
        if ("CI" in Wr)
          return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some(function(u) {
            return u in Wr;
          }) || Wr.CI_NAME === "codeship" ? 1 : t;
        if ("TEAMCITY_VERSION" in Wr)
          return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(Wr.TEAMCITY_VERSION) ? 1 : 0;
        if (Wr.COLORTERM === "truecolor")
          return 3;
        if ("TERM_PROGRAM" in Wr) {
          var n = parseInt((Wr.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
          switch (Wr.TERM_PROGRAM) {
            case "iTerm.app":
              return n >= 3 ? 3 : 2;
            case "Apple_Terminal":
              return 2;
          }
        }
        return /-256(color)?$/i.test(Wr.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(Wr.TERM) || "COLORTERM" in Wr ? 1 : (Wr.TERM, t);
      }(r));
    }
    cr("no-color") || cr("no-colors") || cr("color=false") ? Fi = !1 : (cr("color") || cr("colors") || cr("color=true") || cr("color=always")) && (Fi = !0), "FORCE_COLOR" in Wr && (Fi = Wr.FORCE_COLOR.length === 0 || parseInt(Wr.FORCE_COLOR, 10) !== 0);
    var YF = { supportsColor: Lf, stdout: Lf(Ir.stdout), stderr: Lf(Ir.stderr) }, KF = /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi, og = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g, QF = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/, ZF = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi, _F = /* @__PURE__ */ new Map([["n", `
`], ["r", "\r"], ["t", "	"], ["b", "\b"], ["f", "\f"], ["v", "\v"], ["0", "\0"], ["\\", "\\"], ["e", "\x1B"], ["a", "\x07"]]);
    function sg(r) {
      return r[0] === "u" && r.length === 5 || r[0] === "x" && r.length === 3 ? String.fromCharCode(parseInt(r.slice(1), 16)) : _F.get(r) || r;
    }
    function e3(r, e) {
      var t = [], n = e.trim().split(/\s*,\s*/g), u, a = le(n), i;
      try {
        for (a.s(); !(i = a.n()).done; ) {
          var o = i.value;
          if (isNaN(o)) {
            if (!(u = o.match(QF)))
              throw new Error("Invalid Chalk template style argument: ".concat(o, " (in style '").concat(r, "')"));
            t.push(u[2].replace(ZF, function(s, c, l) {
              return c ? sg(c) : l;
            }));
          } else
            t.push(Number(o));
        }
      } catch (s) {
        a.e(s);
      } finally {
        a.f();
      }
      return t;
    }
    function r3(r) {
      og.lastIndex = 0;
      for (var e = [], t; (t = og.exec(r)) !== null; ) {
        var n = t[1];
        if (t[2]) {
          var u = e3(n, t[2]);
          e.push([n].concat(u));
        } else
          e.push([n]);
      }
      return e;
    }
    function cg(r, e) {
      var t = {}, n = le(e), u;
      try {
        for (n.s(); !(u = n.n()).done; ) {
          var a = u.value, i = le(a.styles), o;
          try {
            for (i.s(); !(o = i.n()).done; ) {
              var s = o.value;
              t[s[0]] = a.inverse ? null : s.slice(1);
            }
          } catch (d) {
            i.e(d);
          } finally {
            i.f();
          }
        }
      } catch (d) {
        n.e(d);
      } finally {
        n.f();
      }
      for (var c = r, l = 0, p = Object.keys(t); l < p.length; l++) {
        var f = p[l];
        if (Array.isArray(t[f])) {
          if (!(f in c))
            throw new Error("Unknown Chalk style: ".concat(f));
          c = t[f].length > 0 ? c[f].apply(c, t[f]) : c[f];
        }
      }
      return c;
    }
    var t3 = function(e, t) {
      var n = [], u = [], a = [];
      if (t.replace(KF, function(o, s, c, l, p, f) {
        if (s)
          a.push(sg(s));
        else if (l) {
          var d = a.join("");
          a = [], u.push(n.length === 0 ? d : cg(e, n)(d)), n.push({ inverse: c, styles: r3(l) });
        } else if (p) {
          if (n.length === 0)
            throw new Error("Found extraneous } in Chalk template literal");
          u.push(cg(e, n)(a.join(""))), a = [], n.pop();
        } else
          a.push(f);
      }), u.push(a.join("")), n.length > 0) {
        var i = "Chalk template literal is missing ".concat(n.length, " closing bracket").concat(n.length === 1 ? "" : "s", " (`}`)");
        throw new Error(i);
      }
      return u.join("");
    }, ta = De(function(r) {
      var e = YF.stdout, t = ["ansi", "ansi", "ansi256", "ansi16m"], n = /* @__PURE__ */ new Set(["gray"]), u = /* @__PURE__ */ Object.create(null);
      function a(w, A) {
        A = A || {};
        var k = e ? e.level : 0;
        w.level = A.level === void 0 ? k : A.level, w.enabled = "enabled" in A ? A.enabled : w.level > 0;
      }
      function i(w) {
        if (!this || !(this instanceof i) || this.template) {
          var A = {};
          return a(A, w), A.template = function() {
            var k = [].slice.call(arguments);
            return x.apply(null, [A.template].concat(k));
          }, Object.setPrototypeOf(A, i.prototype), Object.setPrototypeOf(A.template, A), A.template.constructor = i, A.template;
        }
        a(this, w);
      }
      for (var o = function() {
        var A = c[s];
        xr[A].closeRe = new RegExp(Mr(xr[A].close), "g"), u[A] = { get: function() {
          var O = xr[A];
          return S.call(this, this._styles ? this._styles.concat(O) : [O], this._empty, A);
        } };
      }, s = 0, c = Object.keys(xr); s < c.length; s++)
        o();
      u.visible = { get: function() {
        return S.call(this, this._styles || [], !0, "visible");
      } }, xr.color.closeRe = new RegExp(Mr(xr.color.close), "g");
      for (var l = function() {
        var A = f[p];
        n.has(A) || (u[A] = { get: function() {
          var O = this.level;
          return function() {
            var q = xr.color[t[O]][A].apply(null, arguments), H = { open: q, close: xr.color.close, closeRe: xr.color.closeRe };
            return S.call(this, this._styles ? this._styles.concat(H) : [H], this._empty, A);
          };
        } });
      }, p = 0, f = Object.keys(xr.color.ansi); p < f.length; p++)
        l();
      xr.bgColor.closeRe = new RegExp(Mr(xr.bgColor.close), "g");
      for (var d = function() {
        var A = v[D];
        if (n.has(A))
          return "continue";
        u["bg" + A[0].toUpperCase() + A.slice(1)] = { get: function() {
          var O = this.level;
          return function() {
            var q = xr.bgColor[t[O]][A].apply(null, arguments), H = { open: q, close: xr.bgColor.close, closeRe: xr.bgColor.closeRe };
            return S.call(this, this._styles ? this._styles.concat(H) : [H], this._empty, A);
          };
        } };
      }, D = 0, v = Object.keys(xr.bgColor.ansi); D < v.length; D++)
        var y = d();
      var b = Object.defineProperties(function() {
      }, u);
      function S(w, A, k) {
        var O = function H() {
          return F.apply(H, arguments);
        };
        O._styles = w, O._empty = A;
        var q = this;
        return Object.defineProperty(O, "level", { enumerable: !0, get: function() {
          return q.level;
        }, set: function(R) {
          q.level = R;
        } }), Object.defineProperty(O, "enabled", { enumerable: !0, get: function() {
          return q.enabled;
        }, set: function(R) {
          q.enabled = R;
        } }), O.hasGrey = this.hasGrey || k === "gray" || k === "grey", O.__proto__ = b, O;
      }
      function F() {
        var w = arguments, A = w.length, k = String(arguments[0]);
        if (A === 0)
          return "";
        if (A > 1)
          for (var O = 1; O < A; O++)
            k += " " + w[O];
        if (!this.enabled || this.level <= 0 || !k)
          return this._empty ? "" : k;
        var q = xr.dim.open, H = le(this._styles.slice().reverse()), R;
        try {
          for (H.s(); !(R = H.n()).done; ) {
            var $ = R.value;
            k = $.open + k.replace($.closeRe, $.open) + $.close, k = k.replace(/\r?\n/g, "".concat($.close, "$&").concat($.open));
          }
        } catch (K) {
          H.e(K);
        } finally {
          H.f();
        }
        return xr.dim.open = q, k;
      }
      function x(w, A) {
        if (!Array.isArray(A))
          return [].slice.call(arguments, 1).join(" ");
        for (var k = [].slice.call(arguments, 2), O = [A.raw[0]], q = 1; q < A.length; q++)
          O.push(String(k[q - 1]).replace(/[{}\\]/g, "\\$&")), O.push(String(A.raw[q]));
        return t3(w, O.join(""));
      }
      Object.defineProperties(i.prototype, u), r.exports = i(), r.exports.supportsColor = e, r.exports.default = r.exports;
    }), lg = Object.defineProperty({ commonDeprecatedHandler: function(e, t, n) {
      var u = n.descriptor, a = ["".concat(ta.default.yellow(typeof e == "string" ? u.key(e) : u.pair(e)), " is deprecated")];
      return t && a.push("we now treat it as ".concat(ta.default.blue(typeof t == "string" ? u.key(t) : u.pair(t)))), a.join("; ") + ".";
    } }, "__esModule", { value: !0 }), n3 = De(function(r, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), Ze.__exportStar(lg, e);
    }), u3 = Object.defineProperty({ commonInvalidHandler: function(e, t, n) {
      return ["Invalid ".concat(ta.default.red(n.descriptor.key(e)), " value."), "Expected ".concat(ta.default.blue(n.schemas[e].expected(n)), ","), "but received ".concat(ta.default.red(n.descriptor.value(t)), ".")].join(" ");
    } }, "__esModule", { value: !0 }), pg = De(function(r, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), Ze.__exportStar(u3, e);
    }), Rf = [], fg = [], dg = Object.defineProperty({ levenUnknownHandler: function(e, t, n) {
      var u = n.descriptor, a = n.logger, i = n.schemas, o = ["Ignored unknown option ".concat(ta.default.yellow(u.pair({ key: e, value: t })), ".")], s = Object.keys(i).sort().find(function(c) {
        return function(l, p) {
          if (l === p)
            return 0;
          var f = l;
          l.length > p.length && (l = p, p = f);
          var d = l.length, D = p.length;
          if (d === 0)
            return D;
          if (D === 0)
            return d;
          for (; d > 0 && l.charCodeAt(~-d) === p.charCodeAt(~-D); )
            d--, D--;
          if (d === 0)
            return D;
          for (var v, y, b, S, F = 0; F < d && l.charCodeAt(F) === p.charCodeAt(F); )
            F++;
          if (D -= F, (d -= F) == 0)
            return D;
          for (var x = 0, w = 0; x < d; )
            fg[F + x] = l.charCodeAt(F + x), Rf[x] = ++x;
          for (; w < D; )
            for (v = p.charCodeAt(F + w), b = w++, y = w, x = 0; x < d; x++)
              S = v === fg[F + x] ? b : b + 1, b = Rf[x], y = Rf[x] = b > y ? S > y ? y + 1 : S : S > b ? b + 1 : S;
          return y;
        }(e, c) < 3;
      });
      s && o.push("Did you mean ".concat(ta.default.blue(u.key(s)), "?")), a.warn(o.join(" "));
    } }, "__esModule", { value: !0 }), a3 = De(function(r, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), Ze.__exportStar(dg, e);
    }), i3 = De(function(r, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), Ze.__exportStar(n3, e), Ze.__exportStar(pg, e), Ze.__exportStar(a3, e);
    }), o3 = ["default", "expected", "validate", "deprecated", "forward", "redirect", "overlap", "preprocess", "postprocess"];
    function hg(r, e) {
      var t = new r(e), n = Object.create(t), u = le(o3), a;
      try {
        for (u.s(); !(a = u.n()).done; ) {
          var i = a.value;
          i in e && (n[i] = l3(e[i], t, Dg.prototype[i].length));
        }
      } catch (o) {
        u.e(o);
      } finally {
        u.f();
      }
      return n;
    }
    var s3 = hg, Dg = /* @__PURE__ */ function() {
      function r(e) {
        se(this, r), this.name = e.name;
      }
      return ce(r, [{ key: "default", value: function(t) {
      } }, { key: "expected", value: function(t) {
        return "nothing";
      } }, { key: "validate", value: function(t, n) {
        return !1;
      } }, { key: "deprecated", value: function(t, n) {
        return !1;
      } }, { key: "forward", value: function(t, n) {
      } }, { key: "redirect", value: function(t, n) {
      } }, { key: "overlap", value: function(t, n, u) {
        return t;
      } }, { key: "preprocess", value: function(t, n) {
        return t;
      } }, { key: "postprocess", value: function(t, n) {
        return t;
      } }], [{ key: "create", value: function(t) {
        return hg(this, t);
      } }]), r;
    }(), c3 = Dg;
    function l3(r, e, t) {
      return typeof r == "function" ? function() {
        for (var n = arguments.length, u = new Array(n), a = 0; a < n; a++)
          u[a] = arguments[a];
        return r.apply(void 0, _(u.slice(0, t - 1)).concat([e], _(u.slice(t - 1))));
      } : function() {
        return r;
      };
    }
    var vu = Object.defineProperty({ createSchema: s3, Schema: c3 }, "__esModule", { value: !0 }), p3 = /* @__PURE__ */ function(r) {
      br(t, r);
      var e = Fr(t);
      function t(n) {
        var u;
        return se(this, t), u = e.call(this, n), u._sourceName = n.sourceName, u;
      }
      return ce(t, [{ key: "expected", value: function(u) {
        return u.schemas[this._sourceName].expected(u);
      } }, { key: "validate", value: function(u, a) {
        return a.schemas[this._sourceName].validate(u, a);
      } }, { key: "redirect", value: function(u, a) {
        return this._sourceName;
      } }]), t;
    }(vu.Schema), f3 = p3, d3 = Object.defineProperty({ AliasSchema: f3 }, "__esModule", { value: !0 }), h3 = /* @__PURE__ */ function(r) {
      br(t, r);
      var e = Fr(t);
      function t() {
        return se(this, t), e.apply(this, arguments);
      }
      return ce(t, [{ key: "expected", value: function() {
        return "anything";
      } }, { key: "validate", value: function() {
        return !0;
      } }]), t;
    }(vu.Schema), D3 = h3, g3 = Object.defineProperty({ AnySchema: D3 }, "__esModule", { value: !0 }), m3 = /* @__PURE__ */ function(r) {
      br(t, r);
      var e = Fr(t);
      function t(n) {
        var u;
        se(this, t);
        var a = n.valueSchema, i = n.name, o = i === void 0 ? a.name : i, s = Ze.__rest(n, ["valueSchema", "name"]);
        return u = e.call(this, Object.assign({}, s, { name: o })), u._valueSchema = a, u;
      }
      return ce(t, [{ key: "expected", value: function(u) {
        return "an array of ".concat(this._valueSchema.expected(u));
      } }, { key: "validate", value: function(u, a) {
        if (!Array.isArray(u))
          return !1;
        var i = [], o = le(u), s;
        try {
          for (o.s(); !(s = o.n()).done; ) {
            var c = s.value, l = a.normalizeValidateResult(this._valueSchema.validate(c, a), c);
            l !== !0 && i.push(l.value);
          }
        } catch (p) {
          o.e(p);
        } finally {
          o.f();
        }
        return i.length === 0 || { value: i };
      } }, { key: "deprecated", value: function(u, a) {
        var i = [], o = le(u), s;
        try {
          for (o.s(); !(s = o.n()).done; ) {
            var c = s.value, l = a.normalizeDeprecatedResult(this._valueSchema.deprecated(c, a), c);
            l !== !1 && i.push.apply(i, _(l.map(function(p) {
              var f = p.value;
              return { value: [f] };
            })));
          }
        } catch (p) {
          o.e(p);
        } finally {
          o.f();
        }
        return i;
      } }, { key: "forward", value: function(u, a) {
        var i = [], o = le(u), s;
        try {
          for (o.s(); !(s = o.n()).done; ) {
            var c = s.value, l = a.normalizeForwardResult(this._valueSchema.forward(c, a), c);
            i.push.apply(i, _(l.map(gg)));
          }
        } catch (p) {
          o.e(p);
        } finally {
          o.f();
        }
        return i;
      } }, { key: "redirect", value: function(u, a) {
        var i = [], o = [], s = le(u), c;
        try {
          for (s.s(); !(c = s.n()).done; ) {
            var l = c.value, p = a.normalizeRedirectResult(this._valueSchema.redirect(l, a), l);
            "remain" in p && i.push(p.remain), o.push.apply(o, _(p.redirect.map(gg)));
          }
        } catch (f) {
          s.e(f);
        } finally {
          s.f();
        }
        return i.length === 0 ? { redirect: o } : { redirect: o, remain: i };
      } }, { key: "overlap", value: function(u, a) {
        return u.concat(a);
      } }]), t;
    }(vu.Schema), v3 = m3;
    function gg(r) {
      var e = r.from, t = r.to;
      return { from: [e], to: t };
    }
    var y3 = Object.defineProperty({ ArraySchema: v3 }, "__esModule", { value: !0 }), E3 = /* @__PURE__ */ function(r) {
      br(t, r);
      var e = Fr(t);
      function t() {
        return se(this, t), e.apply(this, arguments);
      }
      return ce(t, [{ key: "expected", value: function() {
        return "true or false";
      } }, { key: "validate", value: function(u) {
        return typeof u == "boolean";
      } }]), t;
    }(vu.Schema), C3 = E3, A3 = Object.defineProperty({ BooleanSchema: C3 }, "__esModule", { value: !0 }), b3 = function(e, t) {
      var n = /* @__PURE__ */ Object.create(null), u = le(e), a;
      try {
        for (u.s(); !(a = u.n()).done; ) {
          var i = a.value, o = i[t];
          if (n[o])
            throw new Error("Duplicate ".concat(t, " ").concat(JSON.stringify(o)));
          n[o] = i;
        }
      } catch (s) {
        u.e(s);
      } finally {
        u.f();
      }
      return n;
    }, F3 = function(e, t) {
      var n = /* @__PURE__ */ new Map(), u = le(e), a;
      try {
        for (u.s(); !(a = u.n()).done; ) {
          var i = a.value, o = i[t];
          if (n.has(o))
            throw new Error("Duplicate ".concat(t, " ").concat(JSON.stringify(o)));
          n.set(o, i);
        }
      } catch (s) {
        u.e(s);
      } finally {
        u.f();
      }
      return n;
    }, S3 = function() {
      var e = /* @__PURE__ */ Object.create(null);
      return function(t) {
        var n = JSON.stringify(t);
        return !!e[n] || (e[n] = !0, !1);
      };
    }, T3 = function(e, t) {
      var n = [], u = [], a = le(e), i;
      try {
        for (a.s(); !(i = a.n()).done; ) {
          var o = i.value;
          t(o) ? n.push(o) : u.push(o);
        }
      } catch (s) {
        a.e(s);
      } finally {
        a.f();
      }
      return [n, u];
    }, x3 = function(e) {
      return e === Math.floor(e);
    }, w3 = function(e, t) {
      if (e === t)
        return 0;
      var n = Se(e), u = Se(t), a = ["undefined", "object", "boolean", "number", "string"];
      return n !== u ? a.indexOf(n) - a.indexOf(u) : n !== "string" ? Number(e) - Number(t) : e.localeCompare(t);
    }, B3 = function(e) {
      return e === void 0 ? {} : e;
    }, k3 = function(e, t) {
      return e === !0 || (e === !1 ? { value: t } : e);
    }, N3 = function(e, t) {
      var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
      return e !== !1 && (e === !0 ? !!n || [{ value: t }] : "value" in e ? [e] : e.length !== 0 && e);
    };
    function Mf(r, e) {
      return typeof r == "string" || "key" in r ? { from: e, to: r } : "from" in r ? { from: r.from, to: r.to } : { from: e, to: r.to };
    }
    var P3 = Mf;
    function mg(r, e) {
      return r === void 0 ? [] : Array.isArray(r) ? r.map(function(t) {
        return Mf(t, e);
      }) : [Mf(r, e)];
    }
    var I3 = mg, O3 = function(e, t) {
      var n = mg(Se(e) == "object" && "redirect" in e ? e.redirect : e, t);
      return n.length === 0 ? { remain: t, redirect: n } : Se(e) == "object" && "remain" in e ? { remain: e.remain, redirect: n } : { redirect: n };
    }, Gr = Object.defineProperty({ recordFromArray: b3, mapFromArray: F3, createAutoChecklist: S3, partition: T3, isInt: x3, comparePrimitive: w3, normalizeDefaultResult: B3, normalizeValidateResult: k3, normalizeDeprecatedResult: N3, normalizeTransferResult: P3, normalizeForwardResult: I3, normalizeRedirectResult: O3 }, "__esModule", { value: !0 }), L3 = /* @__PURE__ */ function(r) {
      br(t, r);
      var e = Fr(t);
      function t(n) {
        var u;
        return se(this, t), u = e.call(this, n), u._choices = Gr.mapFromArray(n.choices.map(function(a) {
          return a && Se(a) == "object" ? a : { value: a };
        }), "value"), u;
      }
      return ce(t, [{ key: "expected", value: function(u) {
        var a = this, i = u.descriptor, o = Array.from(this._choices.keys()).map(function(l) {
          return a._choices.get(l);
        }).filter(function(l) {
          return !l.deprecated;
        }).map(function(l) {
          return l.value;
        }).sort(Gr.comparePrimitive).map(i.value), s = o.slice(0, -2), c = o.slice(-2);
        return s.concat(c.join(" or ")).join(", ");
      } }, { key: "validate", value: function(u) {
        return this._choices.has(u);
      } }, { key: "deprecated", value: function(u) {
        var a = this._choices.get(u);
        return !(!a || !a.deprecated) && { value: u };
      } }, { key: "forward", value: function(u) {
        var a = this._choices.get(u);
        return a ? a.forward : void 0;
      } }, { key: "redirect", value: function(u) {
        var a = this._choices.get(u);
        return a ? a.redirect : void 0;
      } }]), t;
    }(vu.Schema), R3 = L3, M3 = Object.defineProperty({ ChoiceSchema: R3 }, "__esModule", { value: !0 }), j3 = /* @__PURE__ */ function(r) {
      br(t, r);
      var e = Fr(t);
      function t() {
        return se(this, t), e.apply(this, arguments);
      }
      return ce(t, [{ key: "expected", value: function() {
        return "a number";
      } }, { key: "validate", value: function(u, a) {
        return typeof u == "number";
      } }]), t;
    }(vu.Schema), $3 = j3, vg = Object.defineProperty({ NumberSchema: $3 }, "__esModule", { value: !0 }), q3 = /* @__PURE__ */ function(r) {
      br(t, r);
      var e = Fr(t);
      function t() {
        return se(this, t), e.apply(this, arguments);
      }
      return ce(t, [{ key: "expected", value: function() {
        return "an integer";
      } }, { key: "validate", value: function(u, a) {
        return a.normalizeValidateResult(Wa(kn(t.prototype), "validate", this).call(this, u, a), u) === !0 && Gr.isInt(u);
      } }]), t;
    }(vg.NumberSchema), V3 = q3, U3 = Object.defineProperty({ IntegerSchema: V3 }, "__esModule", { value: !0 }), W3 = /* @__PURE__ */ function(r) {
      br(t, r);
      var e = Fr(t);
      function t() {
        return se(this, t), e.apply(this, arguments);
      }
      return ce(t, [{ key: "expected", value: function() {
        return "a string";
      } }, { key: "validate", value: function(u) {
        return typeof u == "string";
      } }]), t;
    }(vu.Schema), G3 = W3, H3 = Object.defineProperty({ StringSchema: G3 }, "__esModule", { value: !0 }), z3 = De(function(r, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), Ze.__exportStar(d3, e), Ze.__exportStar(g3, e), Ze.__exportStar(y3, e), Ze.__exportStar(A3, e), Ze.__exportStar(M3, e), Ze.__exportStar(U3, e), Ze.__exportStar(vg, e), Ze.__exportStar(H3, e);
    }), X3 = Rr.apiDescriptor, J3 = dg.levenUnknownHandler, Y3 = pg.commonInvalidHandler, K3 = lg.commonDeprecatedHandler, pl = Object.defineProperty({ defaultDescriptor: X3, defaultUnknownHandler: J3, defaultInvalidHandler: Y3, defaultDeprecatedHandler: K3 }, "__esModule", { value: !0 }), yg = /* @__PURE__ */ function() {
      function r(e, t) {
        se(this, r);
        var n = t || {}, u = n.logger, a = u === void 0 ? console : u, i = n.descriptor, o = i === void 0 ? pl.defaultDescriptor : i, s = n.unknown, c = s === void 0 ? pl.defaultUnknownHandler : s, l = n.invalid, p = l === void 0 ? pl.defaultInvalidHandler : l, f = n.deprecated, d = f === void 0 ? pl.defaultDeprecatedHandler : f;
        this._utils = { descriptor: o, logger: a || { warn: function() {
        } }, schemas: Gr.recordFromArray(e, "name"), normalizeDefaultResult: Gr.normalizeDefaultResult, normalizeDeprecatedResult: Gr.normalizeDeprecatedResult, normalizeForwardResult: Gr.normalizeForwardResult, normalizeRedirectResult: Gr.normalizeRedirectResult, normalizeValidateResult: Gr.normalizeValidateResult }, this._unknownHandler = c, this._invalidHandler = p, this._deprecatedHandler = d, this.cleanHistory();
      }
      return ce(r, [{ key: "cleanHistory", value: function() {
        this._hasDeprecationWarned = Gr.createAutoChecklist();
      } }, { key: "normalize", value: function(t) {
        var n = this, u = {}, a = [t], i = function() {
          for (; a.length !== 0; ) {
            var b = a.shift(), S = n._applyNormalization(b, u);
            a.push.apply(a, _(S));
          }
        };
        i();
        for (var o = 0, s = Object.keys(this._utils.schemas); o < s.length; o++) {
          var c = s[o], l = this._utils.schemas[c];
          if (!(c in u)) {
            var p = Gr.normalizeDefaultResult(l.default(this._utils));
            "value" in p && a.push(Zn({}, c, p.value));
          }
        }
        i();
        for (var f = 0, d = Object.keys(this._utils.schemas); f < d.length; f++) {
          var D = d[f], v = this._utils.schemas[D];
          D in u && (u[D] = v.postprocess(u[D], this._utils));
        }
        return u;
      } }, { key: "_applyNormalization", value: function(t, n) {
        var u = this, a = [], i = Gr.partition(Object.keys(t), function(A) {
          return A in u._utils.schemas;
        }), o = ke(i, 2), s = o[0], c = o[1], l = le(s), p;
        try {
          var f = function() {
            var k = p.value, O = u._utils.schemas[k], q = O.preprocess(t[k], u._utils), H = Gr.normalizeValidateResult(O.validate(q, u._utils), q);
            if (H !== !0) {
              var R = H.value, $ = u._invalidHandler(k, R, u._utils);
              throw typeof $ == "string" ? new Error($) : $;
            }
            var K = function(Oe) {
              var We = Oe.from, Re = Oe.to;
              a.push(typeof Re == "string" ? Zn({}, Re, We) : Zn({}, Re.key, Re.value));
            }, ne = function(Oe) {
              var We = Oe.value, Re = Oe.redirectTo, Ke = Gr.normalizeDeprecatedResult(O.deprecated(We, u._utils), q, !0);
              if (Ke !== !1)
                if (Ke === !0)
                  u._hasDeprecationWarned(k) || u._utils.logger.warn(u._deprecatedHandler(k, Re, u._utils));
                else {
                  var Fe = le(Ke), be;
                  try {
                    for (Fe.s(); !(be = Fe.n()).done; ) {
                      var Qe = be.value.value, we = { key: k, value: Qe };
                      if (!u._hasDeprecationWarned(we)) {
                        var Pe = typeof Re == "string" ? { key: Re, value: Qe } : Re;
                        u._utils.logger.warn(u._deprecatedHandler(we, Pe, u._utils));
                      }
                    }
                  } catch (He) {
                    Fe.e(He);
                  } finally {
                    Fe.f();
                  }
                }
            };
            Gr.normalizeForwardResult(O.forward(q, u._utils), q).forEach(K);
            var ue = Gr.normalizeRedirectResult(O.redirect(q, u._utils), q);
            if (ue.redirect.forEach(K), "remain" in ue) {
              var Ce = ue.remain;
              n[k] = k in n ? O.overlap(n[k], Ce, u._utils) : Ce, ne({ value: Ce });
            }
            var oe = le(ue.redirect), ae;
            try {
              for (oe.s(); !(ae = oe.n()).done; ) {
                var ve = ae.value, Le = ve.from, Te = ve.to;
                ne({ value: Le, redirectTo: Te });
              }
            } catch (Ne) {
              oe.e(Ne);
            } finally {
              oe.f();
            }
          };
          for (l.s(); !(p = l.n()).done; )
            f();
        } catch (A) {
          l.e(A);
        } finally {
          l.f();
        }
        var d = le(c), D;
        try {
          for (d.s(); !(D = d.n()).done; ) {
            var v = D.value, y = t[v], b = this._unknownHandler(v, y, this._utils);
            if (b)
              for (var S = 0, F = Object.keys(b); S < F.length; S++) {
                var x = F[S], w = Zn({}, x, b[x]);
                x in this._utils.schemas ? a.push(w) : Object.assign(n, w);
              }
          }
        } catch (A) {
          d.e(A);
        } finally {
          d.f();
        }
        return a;
      } }]), r;
    }(), Q3 = yg, Z3 = Object.defineProperty({ normalize: function(e, t, n) {
      return new yg(t, n).normalize(e);
    }, Normalizer: Q3 }, "__esModule", { value: !0 }), gt = De(function(r, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), Ze.__exportStar(mr, e), Ze.__exportStar(i3, e), Ze.__exportStar(z3, e), Ze.__exportStar(Z3, e), Ze.__exportStar(vu, e);
    }), jf = [], Eg = [], Cg = function(e, t) {
      if (e === t)
        return 0;
      var n = e;
      e.length > t.length && (e = t, t = n);
      for (var u = e.length, a = t.length; u > 0 && e.charCodeAt(~-u) === t.charCodeAt(~-a); )
        u--, a--;
      for (var i, o, s, c, l = 0; l < u && e.charCodeAt(l) === t.charCodeAt(l); )
        l++;
      if (u -= l, a -= l, u === 0)
        return a;
      for (var p = 0, f = 0; p < u; )
        Eg[p] = e.charCodeAt(l + p), jf[p] = ++p;
      for (; f < a; )
        for (i = t.charCodeAt(l + f), s = f++, o = f, p = 0; p < u; p++)
          c = i === Eg[p] ? s : s + 1, s = jf[p], o = jf[p] = s > o ? c > o ? o + 1 : c : c > s ? s + 1 : c;
      return o;
    }, Ag = Cg, _3 = Cg;
    Ag.default = _3;
    for (var ds = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] }, bg = {}, $f = 0, Fg = Object.keys(ds); $f < Fg.length; $f++) {
      var Sg = Fg[$f];
      bg[ds[Sg]] = Sg;
    }
    for (var Ae = { rgb: { channels: 3, labels: "rgb" }, hsl: { channels: 3, labels: "hsl" }, hsv: { channels: 3, labels: "hsv" }, hwb: { channels: 3, labels: "hwb" }, cmyk: { channels: 4, labels: "cmyk" }, xyz: { channels: 3, labels: "xyz" }, lab: { channels: 3, labels: "lab" }, lch: { channels: 3, labels: "lch" }, hex: { channels: 1, labels: ["hex"] }, keyword: { channels: 1, labels: ["keyword"] }, ansi16: { channels: 1, labels: ["ansi16"] }, ansi256: { channels: 1, labels: ["ansi256"] }, hcg: { channels: 3, labels: ["h", "c", "g"] }, apple: { channels: 3, labels: ["r16", "g16", "b16"] }, gray: { channels: 1, labels: ["gray"] } }, na = Ae, qf = 0, Tg = Object.keys(Ae); qf < Tg.length; qf++) {
      var It = Tg[qf];
      if (!("channels" in Ae[It]))
        throw new Error("missing channels property: " + It);
      if (!("labels" in Ae[It]))
        throw new Error("missing channel labels property: " + It);
      if (Ae[It].labels.length !== Ae[It].channels)
        throw new Error("channel and label counts mismatch: " + It);
      var xg = Ae[It], eS = xg.channels, rS = xg.labels;
      delete Ae[It].channels, delete Ae[It].labels, Object.defineProperty(Ae[It], "channels", { value: eS }), Object.defineProperty(Ae[It], "labels", { value: rS });
    }
    function tS(r) {
      var e = function() {
        for (var c = {}, l = Object.keys(na), p = l.length, f = 0; f < p; f++)
          c[l[f]] = { distance: -1, parent: null };
        return c;
      }(), t = [r];
      for (e[r].distance = 0; t.length; )
        for (var n = t.pop(), u = Object.keys(na[n]), a = u.length, i = 0; i < a; i++) {
          var o = u[i], s = e[o];
          s.distance === -1 && (s.distance = e[n].distance + 1, s.parent = n, t.unshift(o));
        }
      return e;
    }
    function nS(r, e) {
      return function(t) {
        return e(r(t));
      };
    }
    function uS(r, e) {
      for (var t = [e[r].parent, r], n = na[e[r].parent][r], u = e[r].parent; e[u].parent; )
        t.unshift(e[u].parent), n = nS(na[e[u].parent][u], n), u = e[u].parent;
      return n.conversion = t, n;
    }
    Ae.rgb.hsl = function(r) {
      var e = r[0] / 255, t = r[1] / 255, n = r[2] / 255, u = Math.min(e, t, n), a = Math.max(e, t, n), i = a - u, o, s;
      a === u ? o = 0 : e === a ? o = (t - n) / i : t === a ? o = 2 + (n - e) / i : n === a && (o = 4 + (e - t) / i), o = Math.min(60 * o, 360), o < 0 && (o += 360);
      var c = (u + a) / 2;
      return s = a === u ? 0 : c <= 0.5 ? i / (a + u) : i / (2 - a - u), [o, 100 * s, 100 * c];
    }, Ae.rgb.hsv = function(r) {
      var e, t, n, u, a, i = r[0] / 255, o = r[1] / 255, s = r[2] / 255, c = Math.max(i, o, s), l = c - Math.min(i, o, s), p = function(d) {
        return (c - d) / 6 / l + 0.5;
      };
      return l === 0 ? (u = 0, a = 0) : (a = l / c, e = p(i), t = p(o), n = p(s), i === c ? u = n - t : o === c ? u = 1 / 3 + e - n : s === c && (u = 2 / 3 + t - e), u < 0 ? u += 1 : u > 1 && (u -= 1)), [360 * u, 100 * a, 100 * c];
    }, Ae.rgb.hwb = function(r) {
      var e = r[0], t = r[1], n = r[2], u = Ae.rgb.hsl(r)[0], a = 1 / 255 * Math.min(e, Math.min(t, n));
      return n = 1 - 1 / 255 * Math.max(e, Math.max(t, n)), [u, 100 * a, 100 * n];
    }, Ae.rgb.cmyk = function(r) {
      var e = r[0] / 255, t = r[1] / 255, n = r[2] / 255, u = Math.min(1 - e, 1 - t, 1 - n);
      return [100 * ((1 - e - u) / (1 - u) || 0), 100 * ((1 - t - u) / (1 - u) || 0), 100 * ((1 - n - u) / (1 - u) || 0), 100 * u];
    }, Ae.rgb.keyword = function(r) {
      var e = bg[r];
      if (e)
        return e;
      for (var t, n = 1 / 0, u = 0, a = Object.keys(ds); u < a.length; u++) {
        var i = a[u], o = (c = ds[i], Math.pow((s = r)[0] - c[0], 2) + Math.pow(s[1] - c[1], 2) + Math.pow(s[2] - c[2], 2));
        o < n && (n = o, t = i);
      }
      var s, c;
      return t;
    }, Ae.keyword.rgb = function(r) {
      return ds[r];
    }, Ae.rgb.xyz = function(r) {
      var e = r[0] / 255, t = r[1] / 255, n = r[2] / 255;
      return e = e > 0.04045 ? Math.pow((e + 0.055) / 1.055, 2.4) : e / 12.92, t = t > 0.04045 ? Math.pow((t + 0.055) / 1.055, 2.4) : t / 12.92, n = n > 0.04045 ? Math.pow((n + 0.055) / 1.055, 2.4) : n / 12.92, [100 * (0.4124 * e + 0.3576 * t + 0.1805 * n), 100 * (0.2126 * e + 0.7152 * t + 0.0722 * n), 100 * (0.0193 * e + 0.1192 * t + 0.9505 * n)];
    }, Ae.rgb.lab = function(r) {
      var e = Ae.rgb.xyz(r), t = e[0], n = e[1], u = e[2];
      return t /= 95.047, n /= 100, u /= 108.883, t = t > 8856e-6 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116, n = n > 8856e-6 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, u = u > 8856e-6 ? Math.pow(u, 1 / 3) : 7.787 * u + 16 / 116, [116 * n - 16, 500 * (t - n), 200 * (n - u)];
    }, Ae.hsl.rgb = function(r) {
      var e = r[0] / 360, t = r[1] / 100, n = r[2] / 100, u, a, i;
      if (t === 0)
        return i = 255 * n, [i, i, i];
      u = n < 0.5 ? n * (1 + t) : n + t - n * t;
      for (var o = 2 * n - u, s = [0, 0, 0], c = 0; c < 3; c++)
        a = e + 1 / 3 * -(c - 1), a < 0 && a++, a > 1 && a--, i = 6 * a < 1 ? o + 6 * (u - o) * a : 2 * a < 1 ? u : 3 * a < 2 ? o + (u - o) * (2 / 3 - a) * 6 : o, s[c] = 255 * i;
      return s;
    }, Ae.hsl.hsv = function(r) {
      var e = r[0], t = r[1] / 100, n = r[2] / 100, u = t, a = Math.max(n, 0.01);
      return n *= 2, t *= n <= 1 ? n : 2 - n, u *= a <= 1 ? a : 2 - a, [e, 100 * (n === 0 ? 2 * u / (a + u) : 2 * t / (n + t)), 100 * ((n + t) / 2)];
    }, Ae.hsv.rgb = function(r) {
      var e = r[0] / 60, t = r[1] / 100, n = r[2] / 100, u = Math.floor(e) % 6, a = e - Math.floor(e), i = 255 * n * (1 - t), o = 255 * n * (1 - t * a), s = 255 * n * (1 - t * (1 - a));
      switch (n *= 255, u) {
        case 0:
          return [n, s, i];
        case 1:
          return [o, n, i];
        case 2:
          return [i, n, s];
        case 3:
          return [i, o, n];
        case 4:
          return [s, i, n];
        case 5:
          return [n, i, o];
      }
    }, Ae.hsv.hsl = function(r) {
      var e = r[0], t = r[1] / 100, n = r[2] / 100, u = Math.max(n, 0.01), a, i;
      i = (2 - t) * n;
      var o = (2 - t) * u;
      return a = t * u, a /= o <= 1 ? o : 2 - o, a = a || 0, i /= 2, [e, 100 * a, 100 * i];
    }, Ae.hwb.rgb = function(r) {
      var e = r[0] / 360, t = r[1] / 100, n = r[2] / 100, u = t + n, a;
      u > 1 && (t /= u, n /= u);
      var i = Math.floor(6 * e), o = 1 - n;
      a = 6 * e - i, (1 & i) != 0 && (a = 1 - a);
      var s = t + a * (o - t), c, l, p;
      switch (i) {
        default:
        case 6:
        case 0:
          c = o, l = s, p = t;
          break;
        case 1:
          c = s, l = o, p = t;
          break;
        case 2:
          c = t, l = o, p = s;
          break;
        case 3:
          c = t, l = s, p = o;
          break;
        case 4:
          c = s, l = t, p = o;
          break;
        case 5:
          c = o, l = t, p = s;
      }
      return [255 * c, 255 * l, 255 * p];
    }, Ae.cmyk.rgb = function(r) {
      var e = r[0] / 100, t = r[1] / 100, n = r[2] / 100, u = r[3] / 100;
      return [255 * (1 - Math.min(1, e * (1 - u) + u)), 255 * (1 - Math.min(1, t * (1 - u) + u)), 255 * (1 - Math.min(1, n * (1 - u) + u))];
    }, Ae.xyz.rgb = function(r) {
      var e = r[0] / 100, t = r[1] / 100, n = r[2] / 100, u, a, i;
      return u = 3.2406 * e + -1.5372 * t + -0.4986 * n, a = -0.9689 * e + 1.8758 * t + 0.0415 * n, i = 0.0557 * e + -0.204 * t + 1.057 * n, u = u > 31308e-7 ? 1.055 * Math.pow(u, 1 / 2.4) - 0.055 : 12.92 * u, a = a > 31308e-7 ? 1.055 * Math.pow(a, 1 / 2.4) - 0.055 : 12.92 * a, i = i > 31308e-7 ? 1.055 * Math.pow(i, 1 / 2.4) - 0.055 : 12.92 * i, u = Math.min(Math.max(0, u), 1), a = Math.min(Math.max(0, a), 1), i = Math.min(Math.max(0, i), 1), [255 * u, 255 * a, 255 * i];
    }, Ae.xyz.lab = function(r) {
      var e = r[0], t = r[1], n = r[2];
      return e /= 95.047, t /= 100, n /= 108.883, e = e > 8856e-6 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, t = t > 8856e-6 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116, n = n > 8856e-6 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * t - 16, 500 * (e - t), 200 * (t - n)];
    }, Ae.lab.xyz = function(r) {
      var e, t, n;
      t = (r[0] + 16) / 116, e = r[1] / 500 + t, n = t - r[2] / 200;
      var u = Math.pow(t, 3), a = Math.pow(e, 3), i = Math.pow(n, 3);
      return t = u > 8856e-6 ? u : (t - 16 / 116) / 7.787, e = a > 8856e-6 ? a : (e - 16 / 116) / 7.787, n = i > 8856e-6 ? i : (n - 16 / 116) / 7.787, e *= 95.047, t *= 100, n *= 108.883, [e, t, n];
    }, Ae.lab.lch = function(r) {
      var e = r[0], t = r[1], n = r[2], u;
      return u = 360 * Math.atan2(n, t) / 2 / Math.PI, u < 0 && (u += 360), [e, Math.sqrt(t * t + n * n), u];
    }, Ae.lch.lab = function(r) {
      var e = r[0], t = r[1], n = r[2] / 360 * 2 * Math.PI;
      return [e, t * Math.cos(n), t * Math.sin(n)];
    }, Ae.rgb.ansi16 = function(r) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, t = ke(r, 3), n = t[0], u = t[1], a = t[2], i = e === null ? Ae.rgb.hsv(r)[2] : e;
      if (i = Math.round(i / 50), i === 0)
        return 30;
      var o = 30 + (Math.round(a / 255) << 2 | Math.round(u / 255) << 1 | Math.round(n / 255));
      return i === 2 && (o += 60), o;
    }, Ae.hsv.ansi16 = function(r) {
      return Ae.rgb.ansi16(Ae.hsv.rgb(r), r[2]);
    }, Ae.rgb.ansi256 = function(r) {
      var e = r[0], t = r[1], n = r[2];
      return e === t && t === n ? e < 8 ? 16 : e > 248 ? 231 : Math.round((e - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(e / 255 * 5) + 6 * Math.round(t / 255 * 5) + Math.round(n / 255 * 5);
    }, Ae.ansi16.rgb = function(r) {
      var e = r % 10;
      if (e === 0 || e === 7)
        return r > 50 && (e += 3.5), e = e / 10.5 * 255, [e, e, e];
      var t = 0.5 * (1 + ~~(r > 50));
      return [(1 & e) * t * 255, (e >> 1 & 1) * t * 255, (e >> 2 & 1) * t * 255];
    }, Ae.ansi256.rgb = function(r) {
      if (r >= 232) {
        var e = 10 * (r - 232) + 8;
        return [e, e, e];
      }
      var t;
      return r -= 16, [Math.floor(r / 36) / 5 * 255, Math.floor((t = r % 36) / 6) / 5 * 255, t % 6 / 5 * 255];
    }, Ae.rgb.hex = function(r) {
      var e = (((255 & Math.round(r[0])) << 16) + ((255 & Math.round(r[1])) << 8) + (255 & Math.round(r[2]))).toString(16).toUpperCase();
      return "000000".substring(e.length) + e;
    }, Ae.hex.rgb = function(r) {
      var e = r.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!e)
        return [0, 0, 0];
      var t = e[0];
      e[0].length === 3 && (t = t.split("").map(function(u) {
        return u + u;
      }).join(""));
      var n = parseInt(t, 16);
      return [n >> 16 & 255, n >> 8 & 255, 255 & n];
    }, Ae.rgb.hcg = function(r) {
      var e = r[0] / 255, t = r[1] / 255, n = r[2] / 255, u = Math.max(Math.max(e, t), n), a = Math.min(Math.min(e, t), n), i = u - a, o, s;
      return o = i < 1 ? a / (1 - i) : 0, s = i <= 0 ? 0 : u === e ? (t - n) / i % 6 : u === t ? 2 + (n - e) / i : 4 + (e - t) / i, s /= 6, s %= 1, [360 * s, 100 * i, 100 * o];
    }, Ae.hsl.hcg = function(r) {
      var e = r[1] / 100, t = r[2] / 100, n = t < 0.5 ? 2 * e * t : 2 * e * (1 - t), u = 0;
      return n < 1 && (u = (t - 0.5 * n) / (1 - n)), [r[0], 100 * n, 100 * u];
    }, Ae.hsv.hcg = function(r) {
      var e = r[1] / 100, t = r[2] / 100, n = e * t, u = 0;
      return n < 1 && (u = (t - n) / (1 - n)), [r[0], 100 * n, 100 * u];
    }, Ae.hcg.rgb = function(r) {
      var e = r[0] / 360, t = r[1] / 100, n = r[2] / 100;
      if (t === 0)
        return [255 * n, 255 * n, 255 * n];
      var u = [0, 0, 0], a = e % 1 * 6, i = a % 1, o = 1 - i, s = 0;
      switch (Math.floor(a)) {
        case 0:
          u[0] = 1, u[1] = i, u[2] = 0;
          break;
        case 1:
          u[0] = o, u[1] = 1, u[2] = 0;
          break;
        case 2:
          u[0] = 0, u[1] = 1, u[2] = i;
          break;
        case 3:
          u[0] = 0, u[1] = o, u[2] = 1;
          break;
        case 4:
          u[0] = i, u[1] = 0, u[2] = 1;
          break;
        default:
          u[0] = 1, u[1] = 0, u[2] = o;
      }
      return s = (1 - t) * n, [255 * (t * u[0] + s), 255 * (t * u[1] + s), 255 * (t * u[2] + s)];
    }, Ae.hcg.hsv = function(r) {
      var e = r[1] / 100, t = e + r[2] / 100 * (1 - e), n = 0;
      return t > 0 && (n = e / t), [r[0], 100 * n, 100 * t];
    }, Ae.hcg.hsl = function(r) {
      var e = r[1] / 100, t = r[2] / 100 * (1 - e) + 0.5 * e, n = 0;
      return t > 0 && t < 0.5 ? n = e / (2 * t) : t >= 0.5 && t < 1 && (n = e / (2 * (1 - t))), [r[0], 100 * n, 100 * t];
    }, Ae.hcg.hwb = function(r) {
      var e = r[1] / 100, t = e + r[2] / 100 * (1 - e);
      return [r[0], 100 * (t - e), 100 * (1 - t)];
    }, Ae.hwb.hcg = function(r) {
      var e = r[1] / 100, t = 1 - r[2] / 100, n = t - e, u = 0;
      return n < 1 && (u = (t - n) / (1 - n)), [r[0], 100 * n, 100 * u];
    }, Ae.apple.rgb = function(r) {
      return [r[0] / 65535 * 255, r[1] / 65535 * 255, r[2] / 65535 * 255];
    }, Ae.rgb.apple = function(r) {
      return [r[0] / 255 * 65535, r[1] / 255 * 65535, r[2] / 255 * 65535];
    }, Ae.gray.rgb = function(r) {
      return [r[0] / 100 * 255, r[0] / 100 * 255, r[0] / 100 * 255];
    }, Ae.gray.hsl = function(r) {
      return [0, 0, r[0]];
    }, Ae.gray.hsv = Ae.gray.hsl, Ae.gray.hwb = function(r) {
      return [0, 100, r[0]];
    }, Ae.gray.cmyk = function(r) {
      return [0, 0, 0, r[0]];
    }, Ae.gray.lab = function(r) {
      return [r[0], 0, 0];
    }, Ae.gray.hex = function(r) {
      var e = 255 & Math.round(r[0] / 100 * 255), t = ((e << 16) + (e << 8) + e).toString(16).toUpperCase();
      return "000000".substring(t.length) + t;
    }, Ae.rgb.gray = function(r) {
      return [(r[0] + r[1] + r[2]) / 3 / 255 * 100];
    };
    var Si = {};
    Object.keys(na).forEach(function(r) {
      Si[r] = {}, Object.defineProperty(Si[r], "channels", { value: na[r].channels }), Object.defineProperty(Si[r], "labels", { value: na[r].labels });
      var e = function(t) {
        for (var n = tS(t), u = {}, a = Object.keys(n), i = a.length, o = 0; o < i; o++) {
          var s = a[o];
          n[s].parent !== null && (u[s] = uS(s, n));
        }
        return u;
      }(r);
      Object.keys(e).forEach(function(t) {
        var n = e[t];
        Si[r][t] = function(u) {
          var a = function() {
            for (var o = arguments.length, s = new Array(o), c = 0; c < o; c++)
              s[c] = arguments[c];
            var l = s[0];
            if (l == null)
              return l;
            l.length > 1 && (s = l);
            var p = u(s);
            if (Se(p) == "object")
              for (var f = p.length, d = 0; d < f; d++)
                p[d] = Math.round(p[d]);
            return p;
          };
          return "conversion" in u && (a.conversion = u.conversion), a;
        }(n), Si[r][t].raw = function(u) {
          var a = function() {
            for (var o = arguments.length, s = new Array(o), c = 0; c < o; c++)
              s[c] = arguments[c];
            var l = s[0];
            return l == null ? l : (l.length > 1 && (s = l), u(s));
          };
          return "conversion" in u && (a.conversion = u.conversion), a;
        }(n);
      });
    });
    var aS = Si, hs = De(function(r) {
      var e = function(l, p) {
        return function() {
          var f = l.apply(void 0, arguments);
          return "\x1B[".concat(f + p, "m");
        };
      }, t = function(l, p) {
        return function() {
          var f = l.apply(void 0, arguments);
          return "\x1B[".concat(38 + p, ";5;").concat(f, "m");
        };
      }, n = function(l, p) {
        return function() {
          var f = l.apply(void 0, arguments);
          return "\x1B[".concat(38 + p, ";2;").concat(f[0], ";").concat(f[1], ";").concat(f[2], "m");
        };
      }, u = function(l) {
        return l;
      }, a = function(l, p, f) {
        return [l, p, f];
      }, i = function(l, p, f) {
        Object.defineProperty(l, p, { get: function() {
          var D = f();
          return Object.defineProperty(l, p, { value: D, enumerable: !0, configurable: !0 }), D;
        }, enumerable: !0, configurable: !0 });
      }, o, s = function(l, p, f, d) {
        o === void 0 && (o = aS);
        for (var D = d ? 10 : 0, v = {}, y = 0, b = Object.entries(o); y < b.length; y++) {
          var S = ke(b[y], 2), F = S[0], x = S[1], w = F === "ansi16" ? "ansi" : F;
          F === p ? v[w] = l(f, D) : Se(x) == "object" && (v[w] = l(x[p], D));
        }
        return v;
      };
      Object.defineProperty(r, "exports", { enumerable: !0, get: function() {
        var l = /* @__PURE__ */ new Map(), p = { modifier: { reset: [0, 0], bold: [1, 22], dim: [2, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], hidden: [8, 28], strikethrough: [9, 29] }, color: { black: [30, 39], red: [31, 39], green: [32, 39], yellow: [33, 39], blue: [34, 39], magenta: [35, 39], cyan: [36, 39], white: [37, 39], blackBright: [90, 39], redBright: [91, 39], greenBright: [92, 39], yellowBright: [93, 39], blueBright: [94, 39], magentaBright: [95, 39], cyanBright: [96, 39], whiteBright: [97, 39] }, bgColor: { bgBlack: [40, 49], bgRed: [41, 49], bgGreen: [42, 49], bgYellow: [43, 49], bgBlue: [44, 49], bgMagenta: [45, 49], bgCyan: [46, 49], bgWhite: [47, 49], bgBlackBright: [100, 49], bgRedBright: [101, 49], bgGreenBright: [102, 49], bgYellowBright: [103, 49], bgBlueBright: [104, 49], bgMagentaBright: [105, 49], bgCyanBright: [106, 49], bgWhiteBright: [107, 49] } };
        p.color.gray = p.color.blackBright, p.bgColor.bgGray = p.bgColor.bgBlackBright, p.color.grey = p.color.blackBright, p.bgColor.bgGrey = p.bgColor.bgBlackBright;
        for (var f = 0, d = Object.entries(p); f < d.length; f++) {
          for (var D = ke(d[f], 2), v = D[0], y = D[1], b = 0, S = Object.entries(y); b < S.length; b++) {
            var F = ke(S[b], 2), x = F[0], w = F[1];
            p[x] = { open: "\x1B[".concat(w[0], "m"), close: "\x1B[".concat(w[1], "m") }, y[x] = p[x], l.set(w[0], w[1]);
          }
          Object.defineProperty(p, v, { value: y, enumerable: !1 });
        }
        return Object.defineProperty(p, "codes", { value: l, enumerable: !1 }), p.color.close = "\x1B[39m", p.bgColor.close = "\x1B[49m", i(p.color, "ansi", function() {
          return s(e, "ansi16", u, !1);
        }), i(p.color, "ansi256", function() {
          return s(t, "ansi256", u, !1);
        }), i(p.color, "ansi16m", function() {
          return s(n, "rgb", a, !1);
        }), i(p.bgColor, "ansi", function() {
          return s(e, "ansi16", u, !0);
        }), i(p.bgColor, "ansi256", function() {
          return s(t, "ansi256", u, !0);
        }), i(p.bgColor, "ansi16m", function() {
          return s(n, "rgb", a, !0);
        }), p;
      } });
    });
    function wg() {
      return !1;
    }
    function Bg() {
      throw new Error("tty.ReadStream is not implemented");
    }
    function kg() {
      throw new Error("tty.ReadStream is not implemented");
    }
    var iS = { isatty: wg, ReadStream: Bg, WriteStream: kg }, Ot = function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ir.argv, n = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--", u = t.indexOf(n + e), a = t.indexOf("--");
      return u !== -1 && (a === -1 || u < a);
    }, Ng = Ve(Object.freeze({ __proto__: null, isatty: wg, ReadStream: Bg, WriteStream: kg, default: iS })), wr = Ir.env, Ti;
    function Vf(r) {
      return r !== 0 && { level: r, hasBasic: !0, has256: r >= 2, has16m: r >= 3 };
    }
    function Uf(r, e) {
      if (Ti === 0)
        return 0;
      if (Ot("color=16m") || Ot("color=full") || Ot("color=truecolor"))
        return 3;
      if (Ot("color=256"))
        return 2;
      if (r && !e && Ti === void 0)
        return 0;
      var t = Ti || 0;
      if (wr.TERM === "dumb")
        return t;
      if ("CI" in wr)
        return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some(function(u) {
          return u in wr;
        }) || wr.CI_NAME === "codeship" ? 1 : t;
      if ("TEAMCITY_VERSION" in wr)
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(wr.TEAMCITY_VERSION) ? 1 : 0;
      if (wr.COLORTERM === "truecolor")
        return 3;
      if ("TERM_PROGRAM" in wr) {
        var n = parseInt((wr.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (wr.TERM_PROGRAM) {
          case "iTerm.app":
            return n >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      return /-256(color)?$/i.test(wr.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(wr.TERM) || "COLORTERM" in wr ? 1 : t;
    }
    Ot("no-color") || Ot("no-colors") || Ot("color=false") || Ot("color=never") ? Ti = 0 : (Ot("color") || Ot("colors") || Ot("color=true") || Ot("color=always")) && (Ti = 1), "FORCE_COLOR" in wr && (Ti = wr.FORCE_COLOR === "true" ? 1 : wr.FORCE_COLOR === "false" ? 0 : wr.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(wr.FORCE_COLOR, 10), 3));
    var Pg = { supportsColor: function(e) {
      return Vf(Uf(e, e && e.isTTY));
    }, stdout: Vf(Uf(!0, Ng.isatty(1))), stderr: Vf(Uf(!0, Ng.isatty(2))) }, Ig = { stringReplaceAll: function(e, t, n) {
      var u = e.indexOf(t);
      if (u === -1)
        return e;
      var a = t.length, i = 0, o = "";
      do
        o += e.substr(i, u - i) + t + n, i = u + a, u = e.indexOf(t, i);
      while (u !== -1);
      return o += e.substr(i), o;
    }, stringEncaseCRLFWithFirstIndex: function(e, t, n, u) {
      var a = 0, i = "";
      do {
        var o = e[u - 1] === "\r";
        i += e.substr(a, (o ? u - 1 : u) - a) + t + (o ? `\r
` : `
`) + n, a = u + 1, u = e.indexOf(`
`, a);
      } while (u !== -1);
      return i += e.substr(a), i;
    } }, oS = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi, Og = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g, sS = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/, cS = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi, lS = /* @__PURE__ */ new Map([["n", `
`], ["r", "\r"], ["t", "	"], ["b", "\b"], ["f", "\f"], ["v", "\v"], ["0", "\0"], ["\\", "\\"], ["e", "\x1B"], ["a", "\x07"]]);
    function Lg(r) {
      var e = r[0] === "u", t = r[1] === "{";
      return e && !t && r.length === 5 || r[0] === "x" && r.length === 3 ? String.fromCharCode(parseInt(r.slice(1), 16)) : e && t ? String.fromCodePoint(parseInt(r.slice(2, -1), 16)) : lS.get(r) || r;
    }
    function pS(r, e) {
      var t = [], n = e.trim().split(/\s*,\s*/g), u, a = le(n), i;
      try {
        for (a.s(); !(i = a.n()).done; ) {
          var o = i.value, s = Number(o);
          if (Number.isNaN(s)) {
            if (!(u = o.match(sS)))
              throw new Error("Invalid Chalk template style argument: ".concat(o, " (in style '").concat(r, "')"));
            t.push(u[2].replace(cS, function(c, l, p) {
              return l ? Lg(l) : p;
            }));
          } else
            t.push(s);
        }
      } catch (c) {
        a.e(c);
      } finally {
        a.f();
      }
      return t;
    }
    function fS(r) {
      Og.lastIndex = 0;
      for (var e = [], t; (t = Og.exec(r)) !== null; ) {
        var n = t[1];
        if (t[2]) {
          var u = pS(n, t[2]);
          e.push([n].concat(u));
        } else
          e.push([n]);
      }
      return e;
    }
    function Rg(r, e) {
      var t = {}, n = le(e), u;
      try {
        for (n.s(); !(u = n.n()).done; ) {
          var a = u.value, i = le(a.styles), o;
          try {
            for (i.s(); !(o = i.n()).done; ) {
              var s = o.value;
              t[s[0]] = a.inverse ? null : s.slice(1);
            }
          } catch (y) {
            i.e(y);
          } finally {
            i.f();
          }
        }
      } catch (y) {
        n.e(y);
      } finally {
        n.f();
      }
      for (var c = r, l = 0, p = Object.entries(t); l < p.length; l++) {
        var f = ke(p[l], 2), d = f[0], D = f[1];
        if (Array.isArray(D)) {
          var v;
          if (!(d in c))
            throw new Error("Unknown Chalk style: ".concat(d));
          c = D.length > 0 ? (v = c)[d].apply(v, _(D)) : c[d];
        }
      }
      return c;
    }
    var dS = function(e, t) {
      var n = [], u = [], a = [];
      if (t.replace(oS, function(o, s, c, l, p, f) {
        if (s)
          a.push(Lg(s));
        else if (l) {
          var d = a.join("");
          a = [], u.push(n.length === 0 ? d : Rg(e, n)(d)), n.push({ inverse: c, styles: fS(l) });
        } else if (p) {
          if (n.length === 0)
            throw new Error("Found extraneous } in Chalk template literal");
          u.push(Rg(e, n)(a.join(""))), a = [], n.pop();
        } else
          a.push(f);
      }), u.push(a.join("")), n.length > 0) {
        var i = "Chalk template literal is missing ".concat(n.length, " closing bracket").concat(n.length === 1 ? "" : "s", " (`}`)");
        throw new Error(i);
      }
      return u.join("");
    }, Wf = Pg.stdout, Gf = Pg.stderr, hS = Ig.stringReplaceAll, DS = Ig.stringEncaseCRLFWithFirstIndex, fl = Array.isArray, Mg = ["ansi", "ansi", "ansi256", "ansi16m"], xi = /* @__PURE__ */ Object.create(null), gS = /* @__PURE__ */ ce(function r(e) {
      return se(this, r), jg(e);
    }), jg = function(e) {
      var t = {};
      return function(n) {
        var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (u.level && !(Number.isInteger(u.level) && u.level >= 0 && u.level <= 3))
          throw new Error("The `level` option should be an integer from 0 to 3");
        var a = Wf ? Wf.level : 0;
        n.level = u.level === void 0 ? a : u.level;
      }(t, e), t.template = function() {
        for (var n = arguments.length, u = new Array(n), a = 0; a < n; a++)
          u[a] = arguments[a];
        return Gg.apply(void 0, [t.template].concat(u));
      }, Object.setPrototypeOf(t, dl.prototype), Object.setPrototypeOf(t.template, t), t.template.constructor = function() {
        throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.");
      }, t.template.Instance = gS, t.template;
    };
    function dl(r) {
      return jg(r);
    }
    for (var mS = function() {
      var e = ke($g[Hf], 2), t = e[0], n = e[1];
      xi[t] = { get: function() {
        var a = hl(this, Jf(n.open, n.close, this._styler), this._isEmpty);
        return Object.defineProperty(this, t, { value: a }), a;
      } };
    }, Hf = 0, $g = Object.entries(hs); Hf < $g.length; Hf++)
      mS();
    xi.visible = { get: function() {
      var e = hl(this, this._styler, !0);
      return Object.defineProperty(this, "visible", { value: e }), e;
    } };
    for (var qg = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"], vS = function() {
      var e = Vg[zf];
      xi[e] = { get: function() {
        var n = this.level;
        return function() {
          var u, a = Jf((u = hs.color[Mg[n]])[e].apply(u, arguments), hs.color.close, this._styler);
          return hl(this, a, this._isEmpty);
        };
      } };
    }, zf = 0, Vg = qg; zf < Vg.length; zf++)
      vS();
    for (var yS = function() {
      var e = Ug[Xf];
      xi["bg" + e[0].toUpperCase() + e.slice(1)] = { get: function() {
        var n = this.level;
        return function() {
          var u, a = Jf((u = hs.bgColor[Mg[n]])[e].apply(u, arguments), hs.bgColor.close, this._styler);
          return hl(this, a, this._isEmpty);
        };
      } };
    }, Xf = 0, Ug = qg; Xf < Ug.length; Xf++)
      yS();
    var ES = Object.defineProperties(function() {
    }, Object.assign({}, xi, { level: { enumerable: !0, get: function() {
      return this._generator.level;
    }, set: function(e) {
      this._generator.level = e;
    } } })), Jf = function(e, t, n) {
      var u, a;
      return n === void 0 ? (u = e, a = t) : (u = n.openAll + e, a = t + n.closeAll), { open: e, close: t, openAll: u, closeAll: a, parent: n };
    }, hl = function(e, t, n) {
      var u = function a() {
        for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++)
          o[s] = arguments[s];
        return fl(o[0]) && fl(o[0].raw) ? Wg(a, Gg.apply(void 0, [a].concat(o))) : Wg(a, o.length === 1 ? "" + o[0] : o.join(" "));
      };
      return Object.setPrototypeOf(u, ES), u._generator = e, u._styler = t, u._isEmpty = n, u;
    }, Wg = function(e, t) {
      if (e.level <= 0 || !t)
        return e._isEmpty ? "" : t;
      var n = e._styler;
      if (n === void 0)
        return t;
      var u = n, a = u.openAll, i = u.closeAll;
      if (t.indexOf("\x1B") !== -1)
        for (; n !== void 0; )
          t = hS(t, n.close, n.open), n = n.parent;
      var o = t.indexOf(`
`);
      return o !== -1 && (t = DS(t, i, a, o)), a + t + i;
    }, Yf, Gg = function(e) {
      for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), u = 1; u < t; u++)
        n[u - 1] = arguments[u];
      var a = n[0];
      if (!fl(a) || !fl(a.raw))
        return n.join(" ");
      for (var i = n.slice(1), o = [a.raw[0]], s = 1; s < a.length; s++)
        o.push(String(i[s - 1]).replace(/[{}\\]/g, "\\$&"), String(a.raw[s]));
      return Yf === void 0 && (Yf = dS), Yf(e, o.join(""));
    };
    Object.defineProperties(dl.prototype, xi);
    var Dl = dl();
    Dl.supportsColor = Wf, Dl.stderr = dl({ level: Gf ? Gf.level : 0 }), Dl.stderr.supportsColor = Gf;
    var Hg = Dl, CS = function(e, t) {
      for (var n = -1, u = t.length, a = e.length; ++n < u; )
        e[a + n] = t[n];
      return e;
    }, AS = Se(ye) == "object" && ye && ye.Object === Object && ye, bS = (typeof self > "u" ? "undefined" : Se(self)) == "object" && self && self.Object === Object && self, wi = (AS || bS || Function("return this")()).Symbol, zg = Object.prototype, FS = zg.hasOwnProperty, SS = zg.toString, Ds = wi ? wi.toStringTag : void 0, TS = function(e) {
      var t = FS.call(e, Ds), n = e[Ds];
      try {
        e[Ds] = void 0;
        var u = !0;
      } catch {
      }
      var a = SS.call(e);
      return u && (t ? e[Ds] = n : delete e[Ds]), a;
    }, xS = Object.prototype.toString, wS = function(e) {
      return xS.call(e);
    }, Xg = wi ? wi.toStringTag : void 0, BS = function(e) {
      return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Xg && Xg in Object(e) ? TS(e) : wS(e);
    }, Jg = function(e) {
      return e != null && Se(e) == "object";
    }, Yg = function(e) {
      return Jg(e) && BS(e) == "[object Arguments]";
    }, Kg = Object.prototype, kS = Kg.hasOwnProperty, NS = Kg.propertyIsEnumerable, PS = Yg(function() {
      return arguments;
    }()) ? Yg : function(r) {
      return Jg(r) && kS.call(r, "callee") && !NS.call(r, "callee");
    }, IS = Array.isArray, Qg = wi ? wi.isConcatSpreadable : void 0, OS = function(e) {
      return IS(e) || PS(e) || !!(Qg && e && e[Qg]);
    }, LS = function r(e, t, n, u, a) {
      var i = -1, o = e.length;
      for (n || (n = OS), a || (a = []); ++i < o; ) {
        var s = e[i];
        t > 0 && n(s) ? t > 1 ? r(s, t - 1, n, u, a) : CS(a, s) : u || (a[a.length] = s);
      }
      return a;
    }, Kf = function(e) {
      return e != null && e.length ? LS(e, 1) : [];
    }, gl = { key: function(e) {
      return e.length === 1 ? "-".concat(e) : "--".concat(e);
    }, value: function(e) {
      return gt.apiDescriptor.value(e);
    }, pair: function(e) {
      var t = e.key, n = e.value;
      return n === !1 ? "--no-".concat(t) : n === !0 ? gl.key(t) : n === "" ? "".concat(gl.key(t), " without an argument") : "".concat(gl.key(t), "=").concat(n);
    } }, RS = /* @__PURE__ */ function(r) {
      br(t, r);
      var e = Fr(t);
      function t(n) {
        var u, a = n.name, i = n.flags;
        return se(this, t), u = e.call(this, { name: a, choices: i }), u._flags = _(i).sort(), u;
      }
      return ce(t, [{ key: "preprocess", value: function(u, a) {
        if (typeof u == "string" && u.length > 0 && !this._flags.includes(u)) {
          var i = this._flags.find(function(o) {
            return Ag(o, u) < 3;
          });
          if (i)
            return a.logger.warn(["Unknown flag ".concat(Hg.yellow(a.descriptor.value(u)), ","), "did you mean ".concat(Hg.blue(a.descriptor.value(i)), "?")].join(" ")), i;
        }
        return u;
      } }, { key: "expected", value: function() {
        return "a flag";
      } }]), t;
    }(gt.ChoiceSchema), Qf;
    function Zg(r, e) {
      var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = t.logger, u = t.isCLI, a = u === void 0 ? !1 : u, i = t.passThrough, o = i === void 0 ? !1 : i, s = o ? Array.isArray(o) ? function(D, v) {
        return o.includes(D) ? Zn({}, D, v) : void 0;
      } : function(D, v) {
        return Zn({}, D, v);
      } : function(D, v, y) {
        var b = M(y.schemas, ["_"]);
        return gt.levenUnknownHandler(D, v, Object.assign({}, y, { schemas: b }));
      }, c = a ? gl : gt.apiDescriptor, l = function(D, v) {
        var y = v.isCLI, b = [];
        y && b.push(gt.AnySchema.create({ name: "_" }));
        var S = le(D), F;
        try {
          for (S.s(); !(F = S.n()).done; ) {
            var x = F.value;
            b.push(MS(x, { isCLI: y, optionInfos: D })), x.alias && y && b.push(gt.AliasSchema.create({ name: x.alias, sourceName: x.name }));
          }
        } catch (w) {
          S.e(w);
        } finally {
          S.f();
        }
        return b;
      }(e, { isCLI: a }), p = new gt.Normalizer(l, { logger: n, unknown: s, descriptor: c }), f = n !== !1;
      f && Qf && (p._hasDeprecationWarned = Qf);
      var d = p.normalize(r);
      return f && (Qf = p._hasDeprecationWarned), d;
    }
    function MS(r, e) {
      var t = e.isCLI, n = e.optionInfos, u, a = { name: r.name }, i = {};
      switch (r.type) {
        case "int":
          u = gt.IntegerSchema, t && (a.preprocess = function(s) {
            return Number(s);
          });
          break;
        case "string":
          u = gt.StringSchema;
          break;
        case "choice":
          u = gt.ChoiceSchema, a.choices = r.choices.map(function(s) {
            return Se(s) == "object" && s.redirect ? Object.assign({}, s, { redirect: { to: { key: r.name, value: s.redirect } } }) : s;
          });
          break;
        case "boolean":
          u = gt.BooleanSchema;
          break;
        case "flag":
          u = RS, a.flags = Kf(n.map(function(s) {
            return [s.alias, s.description && s.name, s.oppositeDescription && "no-".concat(s.name)].filter(Boolean);
          }));
          break;
        case "path":
          u = gt.StringSchema;
          break;
        default:
          throw new Error("Unexpected type ".concat(r.type));
      }
      if (r.exception ? a.validate = function(s, c, l) {
        return r.exception(s) || c.validate(s, l);
      } : a.validate = function(s, c, l) {
        return s === void 0 || c.validate(s, l);
      }, r.redirect && (i.redirect = function(s) {
        return s ? { to: { key: r.redirect.option, value: r.redirect.value } } : void 0;
      }), r.deprecated && (i.deprecated = !0), t && !r.array) {
        var o = a.preprocess || function(s) {
          return s;
        };
        a.preprocess = function(s, c, l) {
          return c.preprocess(o(Array.isArray(s) ? sr(s) : s), l);
        };
      }
      return r.array ? gt.ArraySchema.create(Object.assign({}, t ? { preprocess: function(c) {
        return Array.isArray(c) ? c : [c];
      } } : {}, i, { valueSchema: u.create(a) })) : u.create(Object.assign({}, a, i));
    }
    var _g = { normalizeApiOptions: function(e, t, n) {
      return Zg(e, t, n);
    }, normalizeCliOptions: function(e, t, n) {
      return Zg(e, t, Object.assign({ isCLI: !0 }, n));
    } }, jS = X.isNonEmptyArray;
    function ml(r, e) {
      var t = e || {}, n = t.ignoreDecorators;
      if (!n) {
        var u = r.declaration && r.declaration.decorators || r.decorators;
        if (jS(u))
          return ml(u[0]);
      }
      return r.range ? r.range[0] : r.start;
    }
    function Zf(r) {
      return r.range ? r.range[1] : r.end;
    }
    function em(r, e) {
      return ml(r) === ml(e);
    }
    var tr = { locStart: ml, locEnd: Zf, hasSameLocStart: em, hasSameLoc: function(e, t) {
      return em(e, t) && function(n, u) {
        return Zf(n) === Zf(u);
      }(e, t);
    } }, $S = Object.defineProperty({ default: /((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(?:(?!\s*(?:\b|[\u0080-\uFFFF$\\'"~({]|[+\-!](?!=)|\.?\d))|[gmiyus]{1,6}\b(?![\u0080-\uFFFF$\\]|\s*(?:[+\-*%&|^<>!=?({]|\/(?![\/*])))))|(0[xX][\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?)|((?!\d)(?:(?!\s)[$\w\u0080-\uFFFF]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+)|(--|\+\+|&&|\|\||=>|\.{3}|(?:[+\-\/%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\](){}])|(\s+)|(^$|[\s\S])/g, matchToToken: function(e) {
      var t = { type: "invalid", value: e[0], closed: void 0 };
      return e[1] ? (t.type = "string", t.closed = !(!e[3] && !e[4])) : e[5] ? t.type = "comment" : e[6] ? (t.type = "comment", t.closed = !!e[7]) : e[8] ? t.type = "regex" : e[9] ? t.type = "number" : e[10] ? t.type = "name" : e[11] ? t.type = "punctuator" : e[12] && (t.type = "whitespace"), t;
    } }, "__esModule", { value: !0 }), qS = nm, VS = um, US = function(e) {
      for (var t = !0, n = 0; n < e.length; n++) {
        var u = e.charCodeAt(n);
        if ((64512 & u) == 55296 && n + 1 < e.length) {
          var a = e.charCodeAt(++n);
          (64512 & a) == 56320 && (u = 65536 + ((1023 & u) << 10) + (1023 & a));
        }
        if (t) {
          if (t = !1, !nm(u))
            return !1;
        } else if (!um(u))
          return !1;
      }
      return !t;
    }, _f = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC", rm = "\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF\u1AC0\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F", WS = new RegExp("[" + _f + "]"), GS = new RegExp("[" + _f + rm + "]");
    _f = rm = null;
    var tm = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 107, 20, 28, 22, 13, 52, 76, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 230, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 35, 56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8952, 286, 50, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42717, 35, 4148, 12, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938], HS = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 419, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
    function e0(r, e) {
      for (var t = 65536, n = 0, u = e.length; n < u; n += 2) {
        if (t += e[n], t > r)
          return !1;
        if (t += e[n + 1], t >= r)
          return !0;
      }
      return !1;
    }
    function nm(r) {
      return r < 65 ? r === 36 : r <= 90 || (r < 97 ? r === 95 : r <= 122 || (r <= 65535 ? r >= 170 && WS.test(String.fromCharCode(r)) : e0(r, tm)));
    }
    function um(r) {
      return r < 48 ? r === 36 : r < 58 || !(r < 65) && (r <= 90 || (r < 97 ? r === 95 : r <= 122 || (r <= 65535 ? r >= 170 && GS.test(String.fromCharCode(r)) : e0(r, tm) || e0(r, HS))));
    }
    var r0 = Object.defineProperty({ isIdentifierStart: qS, isIdentifierChar: VS, isIdentifierName: US }, "__esModule", { value: !0 }), zS = am, XS = im, JS = om, YS = function(e, t) {
      return im(e, t) || om(e);
    }, KS = function(e) {
      return _S.has(e);
    }, QS = ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"], ZS = ["eval", "arguments"], _S = /* @__PURE__ */ new Set(["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"]), e5 = new Set(QS), r5 = new Set(ZS);
    function am(r, e) {
      return e && r === "await" || r === "enum";
    }
    function im(r, e) {
      return am(r, e) || e5.has(r);
    }
    function om(r) {
      return r5.has(r);
    }
    var gs = Object.defineProperty({ isReservedWord: zS, isStrictReservedWord: XS, isStrictBindOnlyReservedWord: JS, isStrictBindReservedWord: YS, isKeyword: KS }, "__esModule", { value: !0 }), sm = De(function(r, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "isIdentifierName", { enumerable: !0, get: function() {
        return r0.isIdentifierName;
      } }), Object.defineProperty(e, "isIdentifierChar", { enumerable: !0, get: function() {
        return r0.isIdentifierChar;
      } }), Object.defineProperty(e, "isIdentifierStart", { enumerable: !0, get: function() {
        return r0.isIdentifierStart;
      } }), Object.defineProperty(e, "isReservedWord", { enumerable: !0, get: function() {
        return gs.isReservedWord;
      } }), Object.defineProperty(e, "isStrictBindOnlyReservedWord", { enumerable: !0, get: function() {
        return gs.isStrictBindOnlyReservedWord;
      } }), Object.defineProperty(e, "isStrictBindReservedWord", { enumerable: !0, get: function() {
        return gs.isStrictBindReservedWord;
      } }), Object.defineProperty(e, "isStrictReservedWord", { enumerable: !0, get: function() {
        return gs.isStrictReservedWord;
      } }), Object.defineProperty(e, "isKeyword", { enumerable: !0, get: function() {
        return gs.isKeyword;
      } });
    }), t5 = /[|\\{}()[\]^$+*?.]/g, t0 = function(e) {
      if (typeof e != "string")
        throw new TypeError("Expected a string");
      return e.replace(t5, "\\$&");
    }, ua = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] }, aa = De(function(r) {
      var e = {};
      for (var t in ua)
        ua.hasOwnProperty(t) && (e[ua[t]] = t);
      var n = r.exports = { rgb: { channels: 3, labels: "rgb" }, hsl: { channels: 3, labels: "hsl" }, hsv: { channels: 3, labels: "hsv" }, hwb: { channels: 3, labels: "hwb" }, cmyk: { channels: 4, labels: "cmyk" }, xyz: { channels: 3, labels: "xyz" }, lab: { channels: 3, labels: "lab" }, lch: { channels: 3, labels: "lch" }, hex: { channels: 1, labels: ["hex"] }, keyword: { channels: 1, labels: ["keyword"] }, ansi16: { channels: 1, labels: ["ansi16"] }, ansi256: { channels: 1, labels: ["ansi256"] }, hcg: { channels: 3, labels: ["h", "c", "g"] }, apple: { channels: 3, labels: ["r16", "g16", "b16"] }, gray: { channels: 1, labels: ["gray"] } };
      for (var u in n)
        if (n.hasOwnProperty(u)) {
          if (!("channels" in n[u]))
            throw new Error("missing channels property: " + u);
          if (!("labels" in n[u]))
            throw new Error("missing channel labels property: " + u);
          if (n[u].labels.length !== n[u].channels)
            throw new Error("channel and label counts mismatch: " + u);
          var a = n[u].channels, i = n[u].labels;
          delete n[u].channels, delete n[u].labels, Object.defineProperty(n[u], "channels", { value: a }), Object.defineProperty(n[u], "labels", { value: i });
        }
      n.rgb.hsl = function(o) {
        var s, c, l = o[0] / 255, p = o[1] / 255, f = o[2] / 255, d = Math.min(l, p, f), D = Math.max(l, p, f), v = D - d;
        return D === d ? s = 0 : l === D ? s = (p - f) / v : p === D ? s = 2 + (f - l) / v : f === D && (s = 4 + (l - p) / v), (s = Math.min(60 * s, 360)) < 0 && (s += 360), c = (d + D) / 2, [s, 100 * (D === d ? 0 : c <= 0.5 ? v / (D + d) : v / (2 - D - d)), 100 * c];
      }, n.rgb.hsv = function(o) {
        var s, c, l, p, f, d = o[0] / 255, D = o[1] / 255, v = o[2] / 255, y = Math.max(d, D, v), b = y - Math.min(d, D, v), S = function(x) {
          return (y - x) / 6 / b + 0.5;
        };
        return b === 0 ? p = f = 0 : (f = b / y, s = S(d), c = S(D), l = S(v), d === y ? p = l - c : D === y ? p = 1 / 3 + s - l : v === y && (p = 2 / 3 + c - s), p < 0 ? p += 1 : p > 1 && (p -= 1)), [360 * p, 100 * f, 100 * y];
      }, n.rgb.hwb = function(o) {
        var s = o[0], c = o[1], l = o[2];
        return [n.rgb.hsl(o)[0], 100 * (1 / 255 * Math.min(s, Math.min(c, l))), 100 * (l = 1 - 1 / 255 * Math.max(s, Math.max(c, l)))];
      }, n.rgb.cmyk = function(o) {
        var s, c = o[0] / 255, l = o[1] / 255, p = o[2] / 255;
        return [100 * ((1 - c - (s = Math.min(1 - c, 1 - l, 1 - p))) / (1 - s) || 0), 100 * ((1 - l - s) / (1 - s) || 0), 100 * ((1 - p - s) / (1 - s) || 0), 100 * s];
      }, n.rgb.keyword = function(o) {
        var s = e[o];
        if (s)
          return s;
        var c, l, p, f = 1 / 0;
        for (var d in ua)
          if (ua.hasOwnProperty(d)) {
            var D = ua[d], v = (l = o, p = D, Math.pow(l[0] - p[0], 2) + Math.pow(l[1] - p[1], 2) + Math.pow(l[2] - p[2], 2));
            v < f && (f = v, c = d);
          }
        return c;
      }, n.keyword.rgb = function(o) {
        return ua[o];
      }, n.rgb.xyz = function(o) {
        var s = o[0] / 255, c = o[1] / 255, l = o[2] / 255;
        return [100 * (0.4124 * (s = s > 0.04045 ? Math.pow((s + 0.055) / 1.055, 2.4) : s / 12.92) + 0.3576 * (c = c > 0.04045 ? Math.pow((c + 0.055) / 1.055, 2.4) : c / 12.92) + 0.1805 * (l = l > 0.04045 ? Math.pow((l + 0.055) / 1.055, 2.4) : l / 12.92)), 100 * (0.2126 * s + 0.7152 * c + 0.0722 * l), 100 * (0.0193 * s + 0.1192 * c + 0.9505 * l)];
      }, n.rgb.lab = function(o) {
        var s = n.rgb.xyz(o), c = s[0], l = s[1], p = s[2];
        return l /= 100, p /= 108.883, c = (c /= 95.047) > 8856e-6 ? Math.pow(c, 1 / 3) : 7.787 * c + 16 / 116, [116 * (l = l > 8856e-6 ? Math.pow(l, 1 / 3) : 7.787 * l + 16 / 116) - 16, 500 * (c - l), 200 * (l - (p = p > 8856e-6 ? Math.pow(p, 1 / 3) : 7.787 * p + 16 / 116))];
      }, n.hsl.rgb = function(o) {
        var s, c, l, p, f, d = o[0] / 360, D = o[1] / 100, v = o[2] / 100;
        if (D === 0)
          return [f = 255 * v, f, f];
        s = 2 * v - (c = v < 0.5 ? v * (1 + D) : v + D - v * D), p = [0, 0, 0];
        for (var y = 0; y < 3; y++)
          (l = d + 1 / 3 * -(y - 1)) < 0 && l++, l > 1 && l--, f = 6 * l < 1 ? s + 6 * (c - s) * l : 2 * l < 1 ? c : 3 * l < 2 ? s + (c - s) * (2 / 3 - l) * 6 : s, p[y] = 255 * f;
        return p;
      }, n.hsl.hsv = function(o) {
        var s = o[0], c = o[1] / 100, l = o[2] / 100, p = c, f = Math.max(l, 0.01);
        return c *= (l *= 2) <= 1 ? l : 2 - l, p *= f <= 1 ? f : 2 - f, [s, 100 * (l === 0 ? 2 * p / (f + p) : 2 * c / (l + c)), 100 * ((l + c) / 2)];
      }, n.hsv.rgb = function(o) {
        var s = o[0] / 60, c = o[1] / 100, l = o[2] / 100, p = Math.floor(s) % 6, f = s - Math.floor(s), d = 255 * l * (1 - c), D = 255 * l * (1 - c * f), v = 255 * l * (1 - c * (1 - f));
        switch (l *= 255, p) {
          case 0:
            return [l, v, d];
          case 1:
            return [D, l, d];
          case 2:
            return [d, l, v];
          case 3:
            return [d, D, l];
          case 4:
            return [v, d, l];
          case 5:
            return [l, d, D];
        }
      }, n.hsv.hsl = function(o) {
        var s, c, l, p = o[0], f = o[1] / 100, d = o[2] / 100, D = Math.max(d, 0.01);
        return l = (2 - f) * d, c = f * D, [p, 100 * (c = (c /= (s = (2 - f) * D) <= 1 ? s : 2 - s) || 0), 100 * (l /= 2)];
      }, n.hwb.rgb = function(o) {
        var s, c, l, p, f, d, D, v = o[0] / 360, y = o[1] / 100, b = o[2] / 100, S = y + b;
        switch (S > 1 && (y /= S, b /= S), l = 6 * v - (s = Math.floor(6 * v)), (1 & s) != 0 && (l = 1 - l), p = y + l * ((c = 1 - b) - y), s) {
          default:
          case 6:
          case 0:
            f = c, d = p, D = y;
            break;
          case 1:
            f = p, d = c, D = y;
            break;
          case 2:
            f = y, d = c, D = p;
            break;
          case 3:
            f = y, d = p, D = c;
            break;
          case 4:
            f = p, d = y, D = c;
            break;
          case 5:
            f = c, d = y, D = p;
        }
        return [255 * f, 255 * d, 255 * D];
      }, n.cmyk.rgb = function(o) {
        var s = o[0] / 100, c = o[1] / 100, l = o[2] / 100, p = o[3] / 100;
        return [255 * (1 - Math.min(1, s * (1 - p) + p)), 255 * (1 - Math.min(1, c * (1 - p) + p)), 255 * (1 - Math.min(1, l * (1 - p) + p))];
      }, n.xyz.rgb = function(o) {
        var s, c, l, p = o[0] / 100, f = o[1] / 100, d = o[2] / 100;
        return c = -0.9689 * p + 1.8758 * f + 0.0415 * d, l = 0.0557 * p + -0.204 * f + 1.057 * d, s = (s = 3.2406 * p + -1.5372 * f + -0.4986 * d) > 31308e-7 ? 1.055 * Math.pow(s, 1 / 2.4) - 0.055 : 12.92 * s, c = c > 31308e-7 ? 1.055 * Math.pow(c, 1 / 2.4) - 0.055 : 12.92 * c, l = l > 31308e-7 ? 1.055 * Math.pow(l, 1 / 2.4) - 0.055 : 12.92 * l, [255 * (s = Math.min(Math.max(0, s), 1)), 255 * (c = Math.min(Math.max(0, c), 1)), 255 * (l = Math.min(Math.max(0, l), 1))];
      }, n.xyz.lab = function(o) {
        var s = o[0], c = o[1], l = o[2];
        return c /= 100, l /= 108.883, s = (s /= 95.047) > 8856e-6 ? Math.pow(s, 1 / 3) : 7.787 * s + 16 / 116, [116 * (c = c > 8856e-6 ? Math.pow(c, 1 / 3) : 7.787 * c + 16 / 116) - 16, 500 * (s - c), 200 * (c - (l = l > 8856e-6 ? Math.pow(l, 1 / 3) : 7.787 * l + 16 / 116))];
      }, n.lab.xyz = function(o) {
        var s, c, l, p = o[0];
        s = o[1] / 500 + (c = (p + 16) / 116), l = c - o[2] / 200;
        var f = Math.pow(c, 3), d = Math.pow(s, 3), D = Math.pow(l, 3);
        return c = f > 8856e-6 ? f : (c - 16 / 116) / 7.787, s = d > 8856e-6 ? d : (s - 16 / 116) / 7.787, l = D > 8856e-6 ? D : (l - 16 / 116) / 7.787, [s *= 95.047, c *= 100, l *= 108.883];
      }, n.lab.lch = function(o) {
        var s, c = o[0], l = o[1], p = o[2];
        return (s = 360 * Math.atan2(p, l) / 2 / Math.PI) < 0 && (s += 360), [c, Math.sqrt(l * l + p * p), s];
      }, n.lch.lab = function(o) {
        var s, c = o[0], l = o[1];
        return s = o[2] / 360 * 2 * Math.PI, [c, l * Math.cos(s), l * Math.sin(s)];
      }, n.rgb.ansi16 = function(o) {
        var s = o[0], c = o[1], l = o[2], p = 1 in arguments ? arguments[1] : n.rgb.hsv(o)[2];
        if ((p = Math.round(p / 50)) === 0)
          return 30;
        var f = 30 + (Math.round(l / 255) << 2 | Math.round(c / 255) << 1 | Math.round(s / 255));
        return p === 2 && (f += 60), f;
      }, n.hsv.ansi16 = function(o) {
        return n.rgb.ansi16(n.hsv.rgb(o), o[2]);
      }, n.rgb.ansi256 = function(o) {
        var s = o[0], c = o[1], l = o[2];
        return s === c && c === l ? s < 8 ? 16 : s > 248 ? 231 : Math.round((s - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(s / 255 * 5) + 6 * Math.round(c / 255 * 5) + Math.round(l / 255 * 5);
      }, n.ansi16.rgb = function(o) {
        var s = o % 10;
        if (s === 0 || s === 7)
          return o > 50 && (s += 3.5), [s = s / 10.5 * 255, s, s];
        var c = 0.5 * (1 + ~~(o > 50));
        return [(1 & s) * c * 255, (s >> 1 & 1) * c * 255, (s >> 2 & 1) * c * 255];
      }, n.ansi256.rgb = function(o) {
        if (o >= 232) {
          var s = 10 * (o - 232) + 8;
          return [s, s, s];
        }
        var c;
        return o -= 16, [Math.floor(o / 36) / 5 * 255, Math.floor((c = o % 36) / 6) / 5 * 255, c % 6 / 5 * 255];
      }, n.rgb.hex = function(o) {
        var s = (((255 & Math.round(o[0])) << 16) + ((255 & Math.round(o[1])) << 8) + (255 & Math.round(o[2]))).toString(16).toUpperCase();
        return "000000".substring(s.length) + s;
      }, n.hex.rgb = function(o) {
        var s = o.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
        if (!s)
          return [0, 0, 0];
        var c = s[0];
        s[0].length === 3 && (c = c.split("").map(function(p) {
          return p + p;
        }).join(""));
        var l = parseInt(c, 16);
        return [l >> 16 & 255, l >> 8 & 255, 255 & l];
      }, n.rgb.hcg = function(o) {
        var s, c = o[0] / 255, l = o[1] / 255, p = o[2] / 255, f = Math.max(Math.max(c, l), p), d = Math.min(Math.min(c, l), p), D = f - d;
        return s = D <= 0 ? 0 : f === c ? (l - p) / D % 6 : f === l ? 2 + (p - c) / D : 4 + (c - l) / D + 4, s /= 6, [360 * (s %= 1), 100 * D, 100 * (D < 1 ? d / (1 - D) : 0)];
      }, n.hsl.hcg = function(o) {
        var s = o[1] / 100, c = o[2] / 100, l = 1, p = 0;
        return (l = c < 0.5 ? 2 * s * c : 2 * s * (1 - c)) < 1 && (p = (c - 0.5 * l) / (1 - l)), [o[0], 100 * l, 100 * p];
      }, n.hsv.hcg = function(o) {
        var s = o[1] / 100, c = o[2] / 100, l = s * c, p = 0;
        return l < 1 && (p = (c - l) / (1 - l)), [o[0], 100 * l, 100 * p];
      }, n.hcg.rgb = function(o) {
        var s = o[0] / 360, c = o[1] / 100, l = o[2] / 100;
        if (c === 0)
          return [255 * l, 255 * l, 255 * l];
        var p, f = [0, 0, 0], d = s % 1 * 6, D = d % 1, v = 1 - D;
        switch (Math.floor(d)) {
          case 0:
            f[0] = 1, f[1] = D, f[2] = 0;
            break;
          case 1:
            f[0] = v, f[1] = 1, f[2] = 0;
            break;
          case 2:
            f[0] = 0, f[1] = 1, f[2] = D;
            break;
          case 3:
            f[0] = 0, f[1] = v, f[2] = 1;
            break;
          case 4:
            f[0] = D, f[1] = 0, f[2] = 1;
            break;
          default:
            f[0] = 1, f[1] = 0, f[2] = v;
        }
        return p = (1 - c) * l, [255 * (c * f[0] + p), 255 * (c * f[1] + p), 255 * (c * f[2] + p)];
      }, n.hcg.hsv = function(o) {
        var s = o[1] / 100, c = s + o[2] / 100 * (1 - s), l = 0;
        return c > 0 && (l = s / c), [o[0], 100 * l, 100 * c];
      }, n.hcg.hsl = function(o) {
        var s = o[1] / 100, c = o[2] / 100 * (1 - s) + 0.5 * s, l = 0;
        return c > 0 && c < 0.5 ? l = s / (2 * c) : c >= 0.5 && c < 1 && (l = s / (2 * (1 - c))), [o[0], 100 * l, 100 * c];
      }, n.hcg.hwb = function(o) {
        var s = o[1] / 100, c = s + o[2] / 100 * (1 - s);
        return [o[0], 100 * (c - s), 100 * (1 - c)];
      }, n.hwb.hcg = function(o) {
        var s = o[1] / 100, c = 1 - o[2] / 100, l = c - s, p = 0;
        return l < 1 && (p = (c - l) / (1 - l)), [o[0], 100 * l, 100 * p];
      }, n.apple.rgb = function(o) {
        return [o[0] / 65535 * 255, o[1] / 65535 * 255, o[2] / 65535 * 255];
      }, n.rgb.apple = function(o) {
        return [o[0] / 255 * 65535, o[1] / 255 * 65535, o[2] / 255 * 65535];
      }, n.gray.rgb = function(o) {
        return [o[0] / 100 * 255, o[0] / 100 * 255, o[0] / 100 * 255];
      }, n.gray.hsl = n.gray.hsv = function(o) {
        return [0, 0, o[0]];
      }, n.gray.hwb = function(o) {
        return [0, 100, o[0]];
      }, n.gray.cmyk = function(o) {
        return [0, 0, 0, o[0]];
      }, n.gray.lab = function(o) {
        return [o[0], 0, 0];
      }, n.gray.hex = function(o) {
        var s = 255 & Math.round(o[0] / 100 * 255), c = ((s << 16) + (s << 8) + s).toString(16).toUpperCase();
        return "000000".substring(c.length) + c;
      }, n.rgb.gray = function(o) {
        return [(o[0] + o[1] + o[2]) / 3 / 255 * 100];
      };
    });
    function n5(r) {
      var e = function() {
        for (var c = {}, l = Object.keys(aa), p = l.length, f = 0; f < p; f++)
          c[l[f]] = { distance: -1, parent: null };
        return c;
      }(), t = [r];
      for (e[r].distance = 0; t.length; )
        for (var n = t.pop(), u = Object.keys(aa[n]), a = u.length, i = 0; i < a; i++) {
          var o = u[i], s = e[o];
          s.distance === -1 && (s.distance = e[n].distance + 1, s.parent = n, t.unshift(o));
        }
      return e;
    }
    function u5(r, e) {
      return function(t) {
        return e(r(t));
      };
    }
    function a5(r, e) {
      for (var t = [e[r].parent, r], n = aa[e[r].parent][r], u = e[r].parent; e[u].parent; )
        t.unshift(e[u].parent), n = u5(aa[e[u].parent][u], n), u = e[u].parent;
      return n.conversion = t, n;
    }
    var Bi = {};
    Object.keys(aa).forEach(function(r) {
      Bi[r] = {}, Object.defineProperty(Bi[r], "channels", { value: aa[r].channels }), Object.defineProperty(Bi[r], "labels", { value: aa[r].labels });
      var e = function(t) {
        for (var n = n5(t), u = {}, a = Object.keys(n), i = a.length, o = 0; o < i; o++) {
          var s = a[o];
          n[s].parent !== null && (u[s] = a5(s, n));
        }
        return u;
      }(r);
      Object.keys(e).forEach(function(t) {
        var n = e[t];
        Bi[r][t] = function(u) {
          var a = function(o) {
            if (o == null)
              return o;
            arguments.length > 1 && (o = Array.prototype.slice.call(arguments));
            var s = u(o);
            if (Se(s) == "object")
              for (var c = s.length, l = 0; l < c; l++)
                s[l] = Math.round(s[l]);
            return s;
          };
          return "conversion" in u && (a.conversion = u.conversion), a;
        }(n), Bi[r][t].raw = function(u) {
          var a = function(o) {
            return o == null ? o : (arguments.length > 1 && (o = Array.prototype.slice.call(arguments)), u(o));
          };
          return "conversion" in u && (a.conversion = u.conversion), a;
        }(n);
      });
    });
    var ki = Bi, Br = De(function(r) {
      var e = function(a, i) {
        return function() {
          var o = a.apply(ki, arguments);
          return "\x1B[".concat(o + i, "m");
        };
      }, t = function(a, i) {
        return function() {
          var o = a.apply(ki, arguments);
          return "\x1B[".concat(38 + i, ";5;").concat(o, "m");
        };
      }, n = function(a, i) {
        return function() {
          var o = a.apply(ki, arguments);
          return "\x1B[".concat(38 + i, ";2;").concat(o[0], ";").concat(o[1], ";").concat(o[2], "m");
        };
      };
      Object.defineProperty(r, "exports", { enumerable: !0, get: function() {
        var a = /* @__PURE__ */ new Map(), i = { modifier: { reset: [0, 0], bold: [1, 22], dim: [2, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], hidden: [8, 28], strikethrough: [9, 29] }, color: { black: [30, 39], red: [31, 39], green: [32, 39], yellow: [33, 39], blue: [34, 39], magenta: [35, 39], cyan: [36, 39], white: [37, 39], gray: [90, 39], redBright: [91, 39], greenBright: [92, 39], yellowBright: [93, 39], blueBright: [94, 39], magentaBright: [95, 39], cyanBright: [96, 39], whiteBright: [97, 39] }, bgColor: { bgBlack: [40, 49], bgRed: [41, 49], bgGreen: [42, 49], bgYellow: [43, 49], bgBlue: [44, 49], bgMagenta: [45, 49], bgCyan: [46, 49], bgWhite: [47, 49], bgBlackBright: [100, 49], bgRedBright: [101, 49], bgGreenBright: [102, 49], bgYellowBright: [103, 49], bgBlueBright: [104, 49], bgMagentaBright: [105, 49], bgCyanBright: [106, 49], bgWhiteBright: [107, 49] } };
        i.color.grey = i.color.gray;
        for (var o = 0, s = Object.keys(i); o < s.length; o++) {
          for (var c = s[o], l = i[c], p = 0, f = Object.keys(l); p < f.length; p++) {
            var d = f[p], D = l[d];
            i[d] = { open: "\x1B[".concat(D[0], "m"), close: "\x1B[".concat(D[1], "m") }, l[d] = i[d], a.set(D[0], D[1]);
          }
          Object.defineProperty(i, c, { value: l, enumerable: !1 }), Object.defineProperty(i, "codes", { value: a, enumerable: !1 });
        }
        var v = function(A) {
          return A;
        }, y = function(A, k, O) {
          return [A, k, O];
        };
        i.color.close = "\x1B[39m", i.bgColor.close = "\x1B[49m", i.color.ansi = { ansi: e(v, 0) }, i.color.ansi256 = { ansi256: t(v, 0) }, i.color.ansi16m = { rgb: n(y, 0) }, i.bgColor.ansi = { ansi: e(v, 10) }, i.bgColor.ansi256 = { ansi256: t(v, 10) }, i.bgColor.ansi16m = { rgb: n(y, 10) };
        for (var b = 0, S = Object.keys(ki); b < S.length; b++) {
          var F = S[b];
          if (Se(ki[F]) == "object") {
            var x = ki[F];
            F === "ansi16" && (F = "ansi"), "ansi16" in x && (i.color.ansi[F] = e(x.ansi16, 0), i.bgColor.ansi[F] = e(x.ansi16, 10)), "ansi256" in x && (i.color.ansi256[F] = t(x.ansi256, 0), i.bgColor.ansi256[F] = t(x.ansi256, 10)), "rgb" in x && (i.color.ansi16m[F] = n(x.rgb, 0), i.bgColor.ansi16m[F] = n(x.rgb, 10));
          }
        }
        return i;
      } });
    }), Hr = Ir.env, Ni;
    function n0(r) {
      return function(e) {
        return e !== 0 && { level: e, hasBasic: !0, has256: e >= 2, has16m: e >= 3 };
      }(function(e) {
        if (Ni === !1)
          return 0;
        if (cr("color=16m") || cr("color=full") || cr("color=truecolor"))
          return 3;
        if (cr("color=256"))
          return 2;
        if (e && !e.isTTY && Ni !== !0)
          return 0;
        var t = Ni ? 1 : 0;
        if ("CI" in Hr)
          return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some(function(u) {
            return u in Hr;
          }) || Hr.CI_NAME === "codeship" ? 1 : t;
        if ("TEAMCITY_VERSION" in Hr)
          return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(Hr.TEAMCITY_VERSION) ? 1 : 0;
        if (Hr.COLORTERM === "truecolor")
          return 3;
        if ("TERM_PROGRAM" in Hr) {
          var n = parseInt((Hr.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
          switch (Hr.TERM_PROGRAM) {
            case "iTerm.app":
              return n >= 3 ? 3 : 2;
            case "Apple_Terminal":
              return 2;
          }
        }
        return /-256(color)?$/i.test(Hr.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(Hr.TERM) || "COLORTERM" in Hr ? 1 : (Hr.TERM, t);
      }(r));
    }
    cr("no-color") || cr("no-colors") || cr("color=false") ? Ni = !1 : (cr("color") || cr("colors") || cr("color=true") || cr("color=always")) && (Ni = !0), "FORCE_COLOR" in Hr && (Ni = Hr.FORCE_COLOR.length === 0 || parseInt(Hr.FORCE_COLOR, 10) !== 0);
    var i5 = { supportsColor: n0, stdout: n0(Ir.stdout), stderr: n0(Ir.stderr) }, o5 = /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi, cm = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g, s5 = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/, c5 = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi, l5 = /* @__PURE__ */ new Map([["n", `
`], ["r", "\r"], ["t", "	"], ["b", "\b"], ["f", "\f"], ["v", "\v"], ["0", "\0"], ["\\", "\\"], ["e", "\x1B"], ["a", "\x07"]]);
    function lm(r) {
      return r[0] === "u" && r.length === 5 || r[0] === "x" && r.length === 3 ? String.fromCharCode(parseInt(r.slice(1), 16)) : l5.get(r) || r;
    }
    function p5(r, e) {
      var t = [], n = e.trim().split(/\s*,\s*/g), u, a = le(n), i;
      try {
        for (a.s(); !(i = a.n()).done; ) {
          var o = i.value;
          if (isNaN(o)) {
            if (!(u = o.match(s5)))
              throw new Error("Invalid Chalk template style argument: ".concat(o, " (in style '").concat(r, "')"));
            t.push(u[2].replace(c5, function(s, c, l) {
              return c ? lm(c) : l;
            }));
          } else
            t.push(Number(o));
        }
      } catch (s) {
        a.e(s);
      } finally {
        a.f();
      }
      return t;
    }
    function f5(r) {
      cm.lastIndex = 0;
      for (var e = [], t; (t = cm.exec(r)) !== null; ) {
        var n = t[1];
        if (t[2]) {
          var u = p5(n, t[2]);
          e.push([n].concat(u));
        } else
          e.push([n]);
      }
      return e;
    }
    function pm(r, e) {
      var t = {}, n = le(e), u;
      try {
        for (n.s(); !(u = n.n()).done; ) {
          var a = u.value, i = le(a.styles), o;
          try {
            for (i.s(); !(o = i.n()).done; ) {
              var s = o.value;
              t[s[0]] = a.inverse ? null : s.slice(1);
            }
          } catch (d) {
            i.e(d);
          } finally {
            i.f();
          }
        }
      } catch (d) {
        n.e(d);
      } finally {
        n.f();
      }
      for (var c = r, l = 0, p = Object.keys(t); l < p.length; l++) {
        var f = p[l];
        if (Array.isArray(t[f])) {
          if (!(f in c))
            throw new Error("Unknown Chalk style: ".concat(f));
          c = t[f].length > 0 ? c[f].apply(c, t[f]) : c[f];
        }
      }
      return c;
    }
    var d5 = function(e, t) {
      var n = [], u = [], a = [];
      if (t.replace(o5, function(o, s, c, l, p, f) {
        if (s)
          a.push(lm(s));
        else if (l) {
          var d = a.join("");
          a = [], u.push(n.length === 0 ? d : pm(e, n)(d)), n.push({ inverse: c, styles: f5(l) });
        } else if (p) {
          if (n.length === 0)
            throw new Error("Found extraneous } in Chalk template literal");
          u.push(pm(e, n)(a.join(""))), a = [], n.pop();
        } else
          a.push(f);
      }), u.push(a.join("")), n.length > 0) {
        var i = "Chalk template literal is missing ".concat(n.length, " closing bracket").concat(n.length === 1 ? "" : "s", " (`}`)");
        throw new Error(i);
      }
      return u.join("");
    }, h5 = De(function(r) {
      var e = i5.stdout, t = ["ansi", "ansi", "ansi256", "ansi16m"], n = /* @__PURE__ */ new Set(["gray"]), u = /* @__PURE__ */ Object.create(null);
      function a(w, A) {
        A = A || {};
        var k = e ? e.level : 0;
        w.level = A.level === void 0 ? k : A.level, w.enabled = "enabled" in A ? A.enabled : w.level > 0;
      }
      function i(w) {
        if (!this || !(this instanceof i) || this.template) {
          var A = {};
          return a(A, w), A.template = function() {
            var k = [].slice.call(arguments);
            return x.apply(null, [A.template].concat(k));
          }, Object.setPrototypeOf(A, i.prototype), Object.setPrototypeOf(A.template, A), A.template.constructor = i, A.template;
        }
        a(this, w);
      }
      for (var o = function() {
        var A = c[s];
        Br[A].closeRe = new RegExp(t0(Br[A].close), "g"), u[A] = { get: function() {
          var O = Br[A];
          return S.call(this, this._styles ? this._styles.concat(O) : [O], this._empty, A);
        } };
      }, s = 0, c = Object.keys(Br); s < c.length; s++)
        o();
      u.visible = { get: function() {
        return S.call(this, this._styles || [], !0, "visible");
      } }, Br.color.closeRe = new RegExp(t0(Br.color.close), "g");
      for (var l = function() {
        var A = f[p];
        n.has(A) || (u[A] = { get: function() {
          var O = this.level;
          return function() {
            var q = Br.color[t[O]][A].apply(null, arguments), H = { open: q, close: Br.color.close, closeRe: Br.color.closeRe };
            return S.call(this, this._styles ? this._styles.concat(H) : [H], this._empty, A);
          };
        } });
      }, p = 0, f = Object.keys(Br.color.ansi); p < f.length; p++)
        l();
      Br.bgColor.closeRe = new RegExp(t0(Br.bgColor.close), "g");
      for (var d = function() {
        var A = v[D];
        if (n.has(A))
          return "continue";
        u["bg" + A[0].toUpperCase() + A.slice(1)] = { get: function() {
          var O = this.level;
          return function() {
            var q = Br.bgColor[t[O]][A].apply(null, arguments), H = { open: q, close: Br.bgColor.close, closeRe: Br.bgColor.closeRe };
            return S.call(this, this._styles ? this._styles.concat(H) : [H], this._empty, A);
          };
        } };
      }, D = 0, v = Object.keys(Br.bgColor.ansi); D < v.length; D++)
        var y = d();
      var b = Object.defineProperties(function() {
      }, u);
      function S(w, A, k) {
        var O = function H() {
          return F.apply(H, arguments);
        };
        O._styles = w, O._empty = A;
        var q = this;
        return Object.defineProperty(O, "level", { enumerable: !0, get: function() {
          return q.level;
        }, set: function(R) {
          q.level = R;
        } }), Object.defineProperty(O, "enabled", { enumerable: !0, get: function() {
          return q.enabled;
        }, set: function(R) {
          q.enabled = R;
        } }), O.hasGrey = this.hasGrey || k === "gray" || k === "grey", O.__proto__ = b, O;
      }
      function F() {
        var w = arguments, A = w.length, k = String(arguments[0]);
        if (A === 0)
          return "";
        if (A > 1)
          for (var O = 1; O < A; O++)
            k += " " + w[O];
        if (!this.enabled || this.level <= 0 || !k)
          return this._empty ? "" : k;
        var q = Br.dim.open, H = le(this._styles.slice().reverse()), R;
        try {
          for (H.s(); !(R = H.n()).done; ) {
            var $ = R.value;
            k = $.open + k.replace($.closeRe, $.open) + $.close, k = k.replace(/\r?\n/g, "".concat($.close, "$&").concat($.open));
          }
        } catch (K) {
          H.e(K);
        } finally {
          H.f();
        }
        return Br.dim.open = q, k;
      }
      function x(w, A) {
        if (!Array.isArray(A))
          return [].slice.call(arguments, 1).join(" ");
        for (var k = [].slice.call(arguments, 2), O = [A.raw[0]], q = 1; q < A.length; q++)
          O.push(String(k[q - 1]).replace(/[{}\\]/g, "\\$&")), O.push(String(A.raw[q]));
        return d5(w, O.join(""));
      }
      Object.defineProperties(i.prototype, u), r.exports = i(), r.exports.supportsColor = e, r.exports.default = r.exports;
    }), D5 = Dm, g5 = gm, m5 = function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (Dm(t)) {
        var n = gm(t);
        return function(u, a) {
          var i = "", o = le(hm(a)), s;
          try {
            var c = function() {
              var p = s.value, f = p.type, d = p.value, D = u[f];
              i += D ? d.split(y5).map(function(v) {
                return D(v);
              }).join(`
`) : d;
            };
            for (o.s(); !(s = o.n()).done; )
              c();
          } catch (l) {
            o.e(l);
          } finally {
            o.f();
          }
          return i;
        }(function(u) {
          return { keyword: u.cyan, capitalized: u.yellow, jsxIdentifier: u.yellow, punctuator: u.yellow, number: u.magenta, string: u.green, regex: u.magenta, comment: u.grey, invalid: u.white.bgRed.bold };
        }(n), e);
      }
      return e;
    }, fm = function(r) {
      if (r && r.__esModule)
        return r;
      if (r === null || Se(r) != "object" && typeof r != "function")
        return { default: r };
      var e = dm();
      if (e && e.has(r))
        return e.get(r);
      var t = {}, n = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var u in r)
        if (Object.prototype.hasOwnProperty.call(r, u)) {
          var a = n ? Object.getOwnPropertyDescriptor(r, u) : null;
          a && (a.get || a.set) ? Object.defineProperty(t, u, a) : t[u] = r[u];
        }
      return t.default = r, e && e.set(r, t), t;
    }($S), u0 = function(r) {
      return r && r.__esModule ? r : { default: r };
    }(h5);
    function dm() {
      if (typeof WeakMap != "function")
        return null;
      var r = /* @__PURE__ */ new WeakMap();
      return dm = function() {
        return r;
      }, r;
    }
    var v5 = /* @__PURE__ */ new Set(["as", "async", "from", "get", "of", "set"]), y5 = /\r\n|[\n\r\u2028\u2029]/, E5 = /^[()[\]{}]$/, hm;
    {
      var C5 = fm.matchToToken, A5 = /^[a-z][\w-]*$/i, b5 = function(e, t, n) {
        if (e.type === "name") {
          if ((0, sm.isKeyword)(e.value) || (0, sm.isStrictReservedWord)(e.value, !0) || v5.has(e.value))
            return "keyword";
          if (A5.test(e.value) && (n[t - 1] === "<" || n.substr(t - 2, 2) == "</"))
            return "jsxIdentifier";
          if (e.value[0] !== e.value[0].toLowerCase())
            return "capitalized";
        }
        return e.type === "punctuator" && E5.test(e.value) ? "bracket" : e.type !== "invalid" || e.value !== "@" && e.value !== "#" ? e.type : "punctuator";
      };
      hm = /* @__PURE__ */ regeneratorRuntime.mark(function r(e) {
        var t, n;
        return regeneratorRuntime.wrap(function(a) {
          for (; ; )
            switch (a.prev = a.next) {
              case 0:
                if (!(t = fm.default.exec(e))) {
                  a.next = 6;
                  break;
                }
                return n = C5(t), a.next = 4, { type: b5(n, t.index, e), value: n.value };
              case 4:
                a.next = 0;
                break;
              case 6:
              case "end":
                return a.stop();
            }
        }, r);
      });
    }
    function Dm(r) {
      return !!u0.default.supportsColor || r.forceColor;
    }
    function gm(r) {
      return r.forceColor ? new u0.default.constructor({ enabled: !0, level: 1 }) : u0.default;
    }
    var F5 = Em, S5 = function(e, t, n) {
      var u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      if (!vm) {
        vm = !0;
        var a = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";
        new Error(a).name = "DeprecationWarning", console.warn(new Error(a));
      }
      return n = Math.max(n, 0), Em(e, { start: { column: n, line: t } }, u);
    }, a0 = function(r) {
      if (r && r.__esModule)
        return r;
      if (r === null || Se(r) != "object" && typeof r != "function")
        return { default: r };
      var e = mm();
      if (e && e.has(r))
        return e.get(r);
      var t = {}, n = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var u in r)
        if (Object.prototype.hasOwnProperty.call(r, u)) {
          var a = n ? Object.getOwnPropertyDescriptor(r, u) : null;
          a && (a.get || a.set) ? Object.defineProperty(t, u, a) : t[u] = r[u];
        }
      return t.default = r, e && e.set(r, t), t;
    }(Object.defineProperty({ shouldHighlight: D5, getChalk: g5, default: m5 }, "__esModule", { value: !0 }));
    function mm() {
      if (typeof WeakMap != "function")
        return null;
      var r = /* @__PURE__ */ new WeakMap();
      return mm = function() {
        return r;
      }, r;
    }
    var vm = !1, ym = /\r\n|[\n\r\u2028\u2029]/;
    function Em(r, e) {
      var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = (t.highlightCode || t.forceColor) && (0, a0.shouldHighlight)(t), u = (0, a0.getChalk)(t), a = function(v) {
        return { gutter: v.grey, marker: v.red.bold, message: v.red.bold };
      }(u), i = function(y, b) {
        return n ? y(b) : b;
      }, o = r.split(ym), s = function(v, y, b) {
        var S = Object.assign({ column: 0, line: -1 }, v.start), F = Object.assign({}, S, v.end), x = b || {}, w = x.linesAbove, A = w === void 0 ? 2 : w, k = x.linesBelow, O = k === void 0 ? 3 : k, q = S.line, H = S.column, R = F.line, $ = F.column, K = Math.max(q - (A + 1), 0), ne = Math.min(y.length, R + O);
        q === -1 && (K = 0), R === -1 && (ne = y.length);
        var ue = R - q, Ce = {};
        if (ue)
          for (var oe = 0; oe <= ue; oe++) {
            var ae = oe + q;
            if (H)
              if (oe === 0) {
                var ve = y[ae - 1].length;
                Ce[ae] = [H, ve - H + 1];
              } else if (oe === ue)
                Ce[ae] = [0, $];
              else {
                var Le = y[ae - oe].length;
                Ce[ae] = [0, Le];
              }
            else
              Ce[ae] = !0;
          }
        else
          Ce[q] = H === $ ? !H || [H, 0] : [H, $ - H];
        return { start: K, end: ne, markerLines: Ce };
      }(e, o, t), c = s.start, l = s.end, p = s.markerLines, f = e.start && typeof e.start.column == "number", d = String(l).length, D = (n ? (0, a0.default)(r, t) : r).split(ym).slice(c, l).map(function(v, y) {
        var b = c + 1 + y, S = " ".concat(b).slice(-d), F = " ".concat(S, " |"), x = p[b], w = !p[b + 1];
        if (x) {
          var A = "";
          if (Array.isArray(x)) {
            var k = v.slice(0, Math.max(x[0] - 1, 0)).replace(/[^\t]/g, " "), O = x[1] || 1;
            A = [`
 `, i(a.gutter, F.replace(/\d/g, " ")), " ", k, i(a.marker, "^").repeat(O)].join(""), w && t.message && (A += " " + i(a.message, t.message));
          }
          return [i(a.marker, ">"), i(a.gutter, F), v.length > 0 ? " ".concat(v) : "", A].join("");
        }
        return " ".concat(i(a.gutter, F)).concat(v.length > 0 ? " ".concat(v) : "");
      }).join(`
`);
      return t.message && !f && (D = "".concat(" ".repeat(d + 1)).concat(t.message, `
`).concat(D)), n ? u.reset(D) : D;
    }
    var T5 = Object.defineProperty({ codeFrameColumns: F5, default: S5 }, "__esModule", { value: !0 }), x5 = Ve(ol), w5 = dt.ConfigError, B5 = tr.locStart, k5 = tr.locEnd, N5 = Object.getOwnPropertyNames, P5 = Object.getOwnPropertyDescriptor;
    function Cm(r) {
      var e = {}, t = le(r.plugins), n;
      try {
        for (t.s(); !(n = t.n()).done; ) {
          var u = n.value;
          if (u.parsers) {
            var a = le(N5(u.parsers)), i;
            try {
              for (a.s(); !(i = a.n()).done; ) {
                var o = i.value;
                Object.defineProperty(e, o, P5(u.parsers, o));
              }
            } catch (s) {
              a.e(s);
            } finally {
              a.f();
            }
          }
        }
      } catch (s) {
        t.e(s);
      } finally {
        t.f();
      }
      return e;
    }
    function Am(r) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Cm(r);
      if (typeof r.parser == "function")
        return { parse: r.parser, astFormat: "estree", locStart: B5, locEnd: k5 };
      if (typeof r.parser == "string") {
        if (Object.prototype.hasOwnProperty.call(e, r.parser))
          return e[r.parser];
        throw new w5(`Couldn't resolve parser "`.concat(r.parser, '". Parsers must be explicitly added to the standalone bundle.'));
      }
    }
    var ia = { parse: function(e, t) {
      var n = Cm(t), u = Object.keys(n).reduce(function(s, c) {
        return Object.defineProperty(s, c, { enumerable: !0, get: function() {
          return n[c].parse;
        } });
      }, {}), a = Am(t, n);
      try {
        return a.preprocess && (e = a.preprocess(e, t)), { text: e, ast: a.parse(e, u, t) };
      } catch (s) {
        var i = s.loc;
        if (i) {
          var o = T5.codeFrameColumns;
          throw s.codeFrame = o(e, i, { highlightCode: !0 }), s.message += `
` + s.codeFrame, s;
        }
        throw s.stack;
      }
    }, resolveParser: Am }, I5 = dt.UndefinedParserError, bm = si.getSupportInfo, O5 = ia.resolveParser, i0 = { astFormat: "estree", printer: {}, originalText: void 0, locStart: null, locEnd: null };
    function Fm(r, e) {
      var t = x5.basename(r).toLowerCase(), n = bm({ plugins: e }).languages.filter(function(i) {
        return i.since !== null;
      }), u = n.find(function(i) {
        return i.extensions && i.extensions.some(function(o) {
          return t.endsWith(o);
        }) || i.filenames && i.filenames.some(function(o) {
          return o.toLowerCase() === t;
        });
      });
      if (!u && !t.includes(".")) {
        var a = function(i) {
          if (typeof i != "string")
            return "";
          var o;
          try {
            o = Xe.openSync(i, "r");
          } catch {
            return "";
          }
          try {
            var s = new Sr(o).next().toString("utf8"), c = s.match(/^#!\/(?:usr\/)?bin\/env\s+(\S+)/);
            if (c)
              return c[1];
            var l = s.match(/^#!\/(?:usr\/(?:local\/)?)?bin\/(\S+)/);
            return l ? l[1] : "";
          } catch {
            return "";
          } finally {
            try {
              Xe.closeSync(o);
            } catch {
            }
          }
        }(r);
        u = n.find(function(i) {
          return i.interpreters && i.interpreters.includes(a);
        });
      }
      return u && u.parsers[0];
    }
    var Sm = { normalize: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Object.assign({}, e), u = bm({ plugins: e.plugins, showUnreleased: !0, showDeprecated: !0 }).options, a = Object.assign({}, i0, _a(u.filter(function(v) {
        return v.default !== void 0;
      }).map(function(v) {
        return [v.name, v.default];
      })));
      if (!n.parser)
        if (n.filepath) {
          if (n.parser = Fm(n.filepath, n.plugins), !n.parser)
            throw new I5("No parser could be inferred for file: ".concat(n.filepath));
        } else
          (t.logger || console).warn("No parser and no filepath given, using 'babel' the parser now but this will throw an error in the future. Please specify a parser or a filepath so one can be inferred."), n.parser = "babel";
      var i = O5(_g.normalizeApiOptions(n, [u.find(function(v) {
        return v.name === "parser";
      })], { passThrough: !0, logger: !1 }));
      n.astFormat = i.astFormat, n.locEnd = i.locEnd, n.locStart = i.locStart;
      var o = function(v) {
        var y = v.astFormat;
        if (!y)
          throw new Error("getPlugin() requires astFormat to be set");
        var b = v.plugins.find(function(S) {
          return S.printers && S.printers[y];
        });
        if (!b)
          throw new Error(`Couldn't find plugin for AST format "`.concat(y, '"'));
        return b;
      }(n);
      n.printer = o.printers[n.astFormat];
      for (var s = _a(u.filter(function(v) {
        return v.pluginDefaults && v.pluginDefaults[o.name] !== void 0;
      }).map(function(v) {
        return [v.name, v.pluginDefaults[o.name]];
      })), c = Object.assign({}, a, s), l = 0, p = Object.entries(c); l < p.length; l++) {
        var f = ke(p[l], 2), d = f[0], D = f[1];
        n[d] !== null && n[d] !== void 0 || (n[d] = D);
      }
      return n.parser === "json" && (n.trailingComma = "none"), _g.normalizeApiOptions(n, u, Object.assign({ passThrough: Object.keys(i0) }, t));
    }, hiddenDefaults: i0, inferParser: Fm }, L5 = function r(e, t, n) {
      if (Array.isArray(e))
        return e.map(function(d) {
          return r(d, t, n);
        }).filter(Boolean);
      if (!e || Se(e) != "object")
        return e;
      var u = t.printer.massageAstNode, a;
      a = u && u.ignoredProperties ? u.ignoredProperties : /* @__PURE__ */ new Set();
      for (var i = {}, o = 0, s = Object.entries(e); o < s.length; o++) {
        var c = ke(s[o], 2), l = c[0], p = c[1];
        a.has(l) || typeof p == "function" || (i[l] = r(p, t, e));
      }
      if (u) {
        var f = u(e, i, n);
        if (f === null)
          return;
        if (f)
          return f;
      }
      return i;
    }, R5 = typeof Object.create == "function" ? function(r, e) {
      r.super_ = e, r.prototype = Object.create(e.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } });
    } : function(r, e) {
      r.super_ = e;
      var t = function() {
      };
      t.prototype = e.prototype, r.prototype = new t(), r.prototype.constructor = r;
    };
    function oa(r, e) {
      var t = { seen: [], stylize: j5 };
      return arguments.length >= 3 && (t.depth = arguments[2]), arguments.length >= 4 && (t.colors = arguments[3]), Tm(e) ? t.showHidden = e : e && $5(t, e), Pi(t.showHidden) && (t.showHidden = !1), Pi(t.depth) && (t.depth = 2), Pi(t.colors) && (t.colors = !1), Pi(t.customInspect) && (t.customInspect = !0), t.colors && (t.stylize = M5), vl(t, r, t.depth);
    }
    function M5(r, e) {
      var t = oa.styles[e];
      return t ? "\x1B[" + oa.colors[t][0] + "m" + r + "\x1B[" + oa.colors[t][1] + "m" : r;
    }
    function j5(r, e) {
      return r;
    }
    function vl(r, e, t) {
      if (r.customInspect && e && vs(e.inspect) && e.inspect !== oa && (!e.constructor || e.constructor.prototype !== e)) {
        var n = e.inspect(t, r);
        return wm(n) || (n = vl(r, n, t)), n;
      }
      var u = function(d, D) {
        if (Pi(D))
          return d.stylize("undefined", "undefined");
        if (wm(D)) {
          var v = "'" + JSON.stringify(D).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
          return d.stylize(v, "string");
        }
        if (y = D, typeof y == "number")
          return d.stylize("" + D, "number");
        var y;
        if (Tm(D))
          return d.stylize("" + D, "boolean");
        if (xm(D))
          return d.stylize("null", "null");
      }(r, e);
      if (u)
        return u;
      var a = Object.keys(e), i = function(d) {
        var D = {};
        return d.forEach(function(v, y) {
          D[v] = !0;
        }), D;
      }(a);
      if (r.showHidden && (a = Object.getOwnPropertyNames(e)), Cl(e) && (a.indexOf("message") >= 0 || a.indexOf("description") >= 0))
        return o0(e);
      if (a.length === 0) {
        if (vs(e)) {
          var o = e.name ? ": " + e.name : "";
          return r.stylize("[Function" + o + "]", "special");
        }
        if (ms(e))
          return r.stylize(RegExp.prototype.toString.call(e), "regexp");
        if (El(e))
          return r.stylize(Date.prototype.toString.call(e), "date");
        if (Cl(e))
          return o0(e);
      }
      var s, c, l = "", p = !1, f = ["{", "}"];
      return s = e, Array.isArray(s) && (p = !0, f = ["[", "]"]), vs(e) && (l = " [Function" + (e.name ? ": " + e.name : "") + "]"), ms(e) && (l = " " + RegExp.prototype.toString.call(e)), El(e) && (l = " " + Date.prototype.toUTCString.call(e)), Cl(e) && (l = " " + o0(e)), a.length !== 0 || p && e.length != 0 ? t < 0 ? ms(e) ? r.stylize(RegExp.prototype.toString.call(e), "regexp") : r.stylize("[Object]", "special") : (r.seen.push(e), c = p ? function(d, D, v, y, b) {
        for (var S = [], F = 0, x = D.length; F < x; ++F)
          km(D, String(F)) ? S.push(s0(d, D, v, y, String(F), !0)) : S.push("");
        return b.forEach(function(w) {
          w.match(/^\d+$/) || S.push(s0(d, D, v, y, w, !0));
        }), S;
      }(r, e, t, i, a) : a.map(function(d) {
        return s0(r, e, t, i, d, p);
      }), r.seen.pop(), function(d, D, v) {
        return d.reduce(function(y, b) {
          return b.indexOf(`
`), y + b.replace(/\u001b\[\d\d?m/g, "").length + 1;
        }, 0) > 60 ? v[0] + (D === "" ? "" : D + `
 `) + " " + d.join(`,
  `) + " " + v[1] : v[0] + D + " " + d.join(", ") + " " + v[1];
      }(c, l, f)) : f[0] + l + f[1];
    }
    function o0(r) {
      return "[" + Error.prototype.toString.call(r) + "]";
    }
    function s0(r, e, t, n, u, a) {
      var i, o, s;
      if ((s = Object.getOwnPropertyDescriptor(e, u) || { value: e[u] }).get ? o = s.set ? r.stylize("[Getter/Setter]", "special") : r.stylize("[Getter]", "special") : s.set && (o = r.stylize("[Setter]", "special")), km(n, u) || (i = "[" + u + "]"), o || (r.seen.indexOf(s.value) < 0 ? (o = xm(t) ? vl(r, s.value, null) : vl(r, s.value, t - 1)).indexOf(`
`) > -1 && (o = a ? o.split(`
`).map(function(c) {
        return "  " + c;
      }).join(`
`).substr(2) : `
` + o.split(`
`).map(function(c) {
        return "   " + c;
      }).join(`
`)) : o = r.stylize("[Circular]", "special")), Pi(i)) {
        if (a && u.match(/^\d+$/))
          return o;
        (i = JSON.stringify("" + u)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (i = i.substr(1, i.length - 2), i = r.stylize(i, "name")) : (i = i.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), i = r.stylize(i, "string"));
      }
      return i + ": " + o;
    }
    function Tm(r) {
      return typeof r == "boolean";
    }
    function xm(r) {
      return r === null;
    }
    function wm(r) {
      return typeof r == "string";
    }
    function Pi(r) {
      return r === void 0;
    }
    function ms(r) {
      return yl(r) && c0(r) === "[object RegExp]";
    }
    function yl(r) {
      return Se(r) == "object" && r !== null;
    }
    function El(r) {
      return yl(r) && c0(r) === "[object Date]";
    }
    function Cl(r) {
      return yl(r) && (c0(r) === "[object Error]" || r instanceof Error);
    }
    function vs(r) {
      return typeof r == "function";
    }
    function Bm(r) {
      return r === null || typeof r == "boolean" || typeof r == "number" || typeof r == "string" || Se(r) == "symbol" || r === void 0;
    }
    function c0(r) {
      return Object.prototype.toString.call(r);
    }
    function $5(r, e) {
      if (!e || !yl(e))
        return r;
      for (var t = Object.keys(e), n = t.length; n--; )
        r[t[n]] = e[t[n]];
      return r;
    }
    function km(r, e) {
      return Object.prototype.hasOwnProperty.call(r, e);
    }
    function Nm(r, e) {
      if (r === e)
        return 0;
      for (var t = r.length, n = e.length, u = 0, a = Math.min(t, n); u < a; ++u)
        if (r[u] !== e[u]) {
          t = r[u], n = e[u];
          break;
        }
      return t < n ? -1 : n < t ? 1 : 0;
    }
    oa.colors = { bold: [1, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], white: [37, 39], grey: [90, 39], black: [30, 39], blue: [34, 39], cyan: [36, 39], green: [32, 39], magenta: [35, 39], red: [31, 39], yellow: [33, 39] }, oa.styles = { special: "cyan", number: "yellow", boolean: "yellow", undefined: "grey", null: "bold", string: "green", date: "magenta", regexp: "red" };
    var l0, q5 = Object.prototype.hasOwnProperty, Pm = Object.keys || function(r) {
      var e = [];
      for (var t in r)
        q5.call(r, t) && e.push(t);
      return e;
    }, Im = Array.prototype.slice;
    function Om() {
      return l0 !== void 0 ? l0 : l0 = function() {
      }.name === "foo";
    }
    function Lm(r) {
      return Object.prototype.toString.call(r);
    }
    function Rm(r) {
      return !Ie(r) && typeof Pr.ArrayBuffer == "function" && (typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(r) : !!r && (r instanceof DataView || !!(r.buffer && r.buffer instanceof ArrayBuffer)));
    }
    function _r(r, e) {
      r || et(r, !0, e, "==", ys);
    }
    var V5 = /\s*function\s+([^\(\s]*)\s*/;
    function Mm(r) {
      if (vs(r)) {
        if (Om())
          return r.name;
        var e = r.toString().match(V5);
        return e && e[1];
      }
    }
    function Al(r) {
      this.name = "AssertionError", this.actual = r.actual, this.expected = r.expected, this.operator = r.operator, r.message ? (this.message = r.message, this.generatedMessage = !1) : (this.message = function(o) {
        return jm($m(o.actual), 128) + " " + o.operator + " " + jm($m(o.expected), 128);
      }(this), this.generatedMessage = !0);
      var e = r.stackStartFunction || et;
      if (Error.captureStackTrace)
        Error.captureStackTrace(this, e);
      else {
        var t = new Error();
        if (t.stack) {
          var n = t.stack, u = Mm(e), a = n.indexOf(`
` + u);
          if (a >= 0) {
            var i = n.indexOf(`
`, a + 1);
            n = n.substring(i + 1);
          }
          this.stack = n;
        }
      }
    }
    function jm(r, e) {
      return typeof r == "string" ? r.length < e ? r : r.slice(0, e) : r;
    }
    function $m(r) {
      if (Om() || !vs(r))
        return oa(r);
      var e = Mm(r);
      return "[Function" + (e ? ": " + e : "") + "]";
    }
    function et(r, e, t, n, u) {
      throw new Al({ message: t, actual: r, expected: e, operator: n, stackStartFunction: u });
    }
    function ys(r, e) {
      r || et(r, !0, e, "==", ys);
    }
    function p0(r, e, t) {
      r != e && et(r, e, t, "==", p0);
    }
    function f0(r, e, t) {
      r == e && et(r, e, t, "!=", f0);
    }
    function d0(r, e, t) {
      Ii(r, e, !1) || et(r, e, t, "deepEqual", d0);
    }
    function h0(r, e, t) {
      Ii(r, e, !0) || et(r, e, t, "deepStrictEqual", h0);
    }
    function Ii(r, e, t, n) {
      if (r === e)
        return !0;
      if (Ie(r) && Ie(e))
        return Nm(r, e) === 0;
      if (El(r) && El(e))
        return r.getTime() === e.getTime();
      if (ms(r) && ms(e))
        return r.source === e.source && r.global === e.global && r.multiline === e.multiline && r.lastIndex === e.lastIndex && r.ignoreCase === e.ignoreCase;
      if (r !== null && Se(r) == "object" || e !== null && Se(e) == "object") {
        if (Rm(r) && Rm(e) && Lm(r) === Lm(e) && !(r instanceof Float32Array || r instanceof Float64Array))
          return Nm(new Uint8Array(r.buffer), new Uint8Array(e.buffer)) === 0;
        if (Ie(r) !== Ie(e))
          return !1;
        var u = (n = n || { actual: [], expected: [] }).actual.indexOf(r);
        return u !== -1 && u === n.expected.indexOf(e) || (n.actual.push(r), n.expected.push(e), function(a, i, o, s) {
          if (a == null || i == null)
            return !1;
          if (Bm(a) || Bm(i))
            return a === i;
          if (o && Object.getPrototypeOf(a) !== Object.getPrototypeOf(i))
            return !1;
          var c = qm(a), l = qm(i);
          if (c && !l || !c && l)
            return !1;
          if (c)
            return Ii(a = Im.call(a), i = Im.call(i), o);
          var p, f, d = Pm(a), D = Pm(i);
          if (d.length !== D.length)
            return !1;
          for (d.sort(), D.sort(), f = d.length - 1; f >= 0; f--)
            if (d[f] !== D[f])
              return !1;
          for (f = d.length - 1; f >= 0; f--)
            if (!Ii(a[p = d[f]], i[p], o, s))
              return !1;
          return !0;
        }(r, e, t, n));
      }
      return t ? r === e : r == e;
    }
    function qm(r) {
      return Object.prototype.toString.call(r) == "[object Arguments]";
    }
    function D0(r, e, t) {
      Ii(r, e, !1) && et(r, e, t, "notDeepEqual", D0);
    }
    function g0(r, e, t) {
      Ii(r, e, !0) && et(r, e, t, "notDeepStrictEqual", g0);
    }
    function m0(r, e, t) {
      r !== e && et(r, e, t, "===", m0);
    }
    function v0(r, e, t) {
      r === e && et(r, e, t, "!==", v0);
    }
    function Vm(r, e) {
      if (!r || !e)
        return !1;
      if (Object.prototype.toString.call(e) == "[object RegExp]")
        return e.test(r);
      try {
        if (r instanceof e)
          return !0;
      } catch {
      }
      return !Error.isPrototypeOf(e) && e.call({}, r) === !0;
    }
    function Um(r, e, t, n) {
      var u;
      if (typeof e != "function")
        throw new TypeError('"block" argument must be a function');
      typeof t == "string" && (n = t, t = null), u = function(o) {
        var s;
        try {
          o();
        } catch (c) {
          s = c;
        }
        return s;
      }(e), n = (t && t.name ? " (" + t.name + ")." : ".") + (n ? " " + n : "."), r && !u && et(u, t, "Missing expected exception" + n);
      var a = typeof n == "string", i = !r && u && !t;
      if ((!r && Cl(u) && a && Vm(u, t) || i) && et(u, t, "Got unwanted exception" + n), r && u && t && !Vm(u, t) || !r && u)
        throw u;
    }
    function Wm(r, e, t) {
      Um(!0, r, e, t);
    }
    function Gm(r, e, t) {
      Um(!1, r, e, t);
    }
    function Hm(r) {
      if (r)
        throw r;
    }
    _r.AssertionError = Al, R5(Al, Error), _r.fail = et, _r.ok = ys, _r.equal = p0, _r.notEqual = f0, _r.deepEqual = d0, _r.deepStrictEqual = h0, _r.notDeepEqual = D0, _r.notDeepStrictEqual = g0, _r.strictEqual = m0, _r.notStrictEqual = v0, _r.throws = Wm, _r.doesNotThrow = Gm, _r.ifError = Hm;
    var Hn = Ve(Object.freeze({ __proto__: null, default: _r, AssertionError: Al, fail: et, ok: ys, assert: ys, equal: p0, notEqual: f0, deepEqual: d0, deepStrictEqual: h0, notDeepEqual: D0, notDeepStrictEqual: g0, strictEqual: m0, notStrictEqual: v0, throws: Wm, doesNotThrow: Gm, ifError: Hm })), sa = fe.builders, U5 = sa.line, yu = sa.hardline, W5 = sa.breakParent, G5 = sa.indent, zm = sa.lineSuffix, Xm = sa.join, y0 = sa.cursor, Oi = X.hasNewline, H5 = X.skipNewline, z5 = X.skipSpaces, X5 = X.isPreviousLineEmpty, Es = X.addLeadingComment, E0 = X.addDanglingComment, Cs = X.addTrailingComment, C0 = /* @__PURE__ */ new WeakMap();
    function A0(r, e, t) {
      if (!!r) {
        var n = e.printer, u = e.locStart, a = e.locEnd;
        if (t) {
          if (n.canAttachComment && n.canAttachComment(r)) {
            var i;
            for (i = t.length - 1; i >= 0 && !(u(t[i]) <= u(r) && a(t[i]) <= a(r)); --i)
              ;
            return void t.splice(i + 1, 0, r);
          }
        } else if (C0.has(r))
          return C0.get(r);
        var o = n.getCommentChildNodes && n.getCommentChildNodes(r, e) || Se(r) == "object" && Object.entries(r).filter(function(p) {
          var f = ke(p, 1), d = f[0];
          return d !== "enclosingNode" && d !== "precedingNode" && d !== "followingNode" && d !== "tokens" && d !== "comments";
        }).map(function(p) {
          var f = ke(p, 2), d = f[1];
          return d;
        });
        if (o) {
          t || (t = [], C0.set(r, t));
          var s = le(o), c;
          try {
            for (s.s(); !(c = s.n()).done; ) {
              var l = c.value;
              A0(l, e, t);
            }
          } catch (p) {
            s.e(p);
          } finally {
            s.f();
          }
          return t;
        }
      }
    }
    function Jm(r, e, t, n) {
      for (var u = t.locStart, a = t.locEnd, i = u(e), o = a(e), s = A0(r, t), c, l, p = 0, f = s.length; p < f; ) {
        var d = p + f >> 1, D = s[d], v = u(D), y = a(D);
        if (v <= i && o <= y)
          return Jm(D, e, t, D);
        if (y <= i)
          c = D, p = d + 1;
        else {
          if (!(o <= v))
            throw new Error("Comment location overlaps with node location");
          l = D, f = d;
        }
      }
      if (n && n.type === "TemplateLiteral") {
        var b = n.quasis, S = S0(b, e, t);
        c && S0(b, c, t) !== S && (c = null), l && S0(b, l, t) !== S && (l = null);
      }
      return { enclosingNode: n, precedingNode: c, followingNode: l };
    }
    var b0 = function() {
      return !1;
    }, Ym = function(e) {
      return !/[\S\n\u2028\u2029]/.test(e);
    };
    function J5(r, e, t, n) {
      var u = t[n], a = u.comment, i = u.precedingNode, o = e.locStart, s = e.locEnd, c = o(a);
      if (i)
        for (var l = n - 1; l >= 0; l--) {
          var p = t[l], f = p.comment, d = p.precedingNode;
          if (d !== i || !Ym(r.slice(s(f), c)))
            break;
          c = o(f);
        }
      return Oi(r, c, { backwards: !0 });
    }
    function Y5(r, e, t, n) {
      var u = t[n], a = u.comment, i = u.followingNode, o = e.locStart, s = e.locEnd, c = s(a);
      if (i)
        for (var l = n + 1; l < t.length; l++) {
          var p = t[l], f = p.comment, d = p.followingNode;
          if (d !== i || !Ym(r.slice(c, o(f))))
            break;
          c = s(f);
        }
      return Oi(r, c);
    }
    function Km(r, e, t) {
      var n = r.length;
      if (n !== 0) {
        var u = r[0], a = u.precedingNode, i = u.followingNode, o = u.enclosingNode, s = t.printer.getGapRegex && t.printer.getGapRegex(o) || /^[\s(]*$/, c, l = t.locStart(i);
        for (c = n; c > 0; --c) {
          var p = r[c - 1], f = p.comment, d = p.precedingNode, D = p.followingNode;
          Hn.strictEqual(d, a), Hn.strictEqual(D, i);
          var v = e.slice(t.locEnd(f), l);
          if (!s.test(v))
            break;
          l = t.locStart(f);
        }
        var y = le(r.entries()), b;
        try {
          for (y.s(); !(b = y.n()).done; ) {
            var S = ke(b.value, 2), F = S[0], x = S[1].comment;
            F < c ? Cs(a, x) : Es(i, x);
          }
        } catch (O) {
          y.e(O);
        } finally {
          y.f();
        }
        for (var w = 0, A = [a, i]; w < A.length; w++) {
          var k = A[w];
          k.comments && k.comments.length > 1 && k.comments.sort(function(O, q) {
            return t.locStart(O) - t.locStart(q);
          });
        }
        r.length = 0;
      }
    }
    function F0(r, e) {
      return r.getValue().printed = !0, e.printer.printComment(r, e);
    }
    function S0(r, e, t) {
      for (var n = t.locStart(e) - 1, u = 1; u < r.length; ++u)
        if (n < t.locStart(r[u]))
          return u - 1;
      return 0;
    }
    function Qm(r, e, t) {
      var n = r.getValue();
      if (!n)
        return {};
      var u = n.comments || [];
      t && (u = u.filter(function(c) {
        return !t.has(c);
      }));
      var a = n === e.cursorNode;
      if (u.length === 0) {
        var i = a ? y0 : "";
        return { leading: i, trailing: i };
      }
      var o = [], s = [];
      return r.each(function() {
        var c = r.getValue();
        if (!(t && t.has(c))) {
          var l = c.leading, p = c.trailing;
          l ? o.push(function(f, d) {
            var D = f.getValue(), v = [F0(f, d)], y = d.printer, b = d.originalText, S = d.locStart, F = d.locEnd;
            if (y.isBlockComment && y.isBlockComment(D)) {
              var x = Oi(b, F(D)) ? Oi(b, S(D), { backwards: !0 }) ? yu : U5 : " ";
              v.push(x);
            } else
              v.push(yu);
            var w = H5(b, z5(b, F(D)));
            return w !== !1 && Oi(b, w) && v.push(yu), v;
          }(r, e)) : p && s.push(function(f, d) {
            var D = f.getValue(), v = F0(f, d), y = d.printer, b = d.originalText, S = d.locStart, F = y.isBlockComment && y.isBlockComment(D);
            if (Oi(b, S(D), { backwards: !0 })) {
              var x = X5(b, D, S);
              return zm([yu, x ? yu : "", v]);
            }
            var w = [" ", v];
            return F || (w = [zm(w), W5]), w;
          }(r, e));
        }
      }, "comments"), a && (o.unshift(y0), s.push(y0)), { leading: o, trailing: s };
    }
    var nr = { attach: function(e, t, n, u) {
      if (!!Array.isArray(e)) {
        var a = [], i = u.locStart, o = u.locEnd, s = u.printer.handleComments, c = s === void 0 ? {} : s, l = c.avoidAstMutation, p = c.ownLine, f = p === void 0 ? b0 : p, d = c.endOfLine, D = d === void 0 ? b0 : d, v = c.remaining, y = v === void 0 ? b0 : v, b = e.map(function(Le, Te) {
          return Object.assign({}, Jm(t, Le, u), { comment: Le, text: n, options: u, ast: t, isLastComment: e.length - 1 === Te });
        }), S = le(b.entries()), F;
        try {
          for (S.s(); !(F = S.n()).done; ) {
            var x = ke(F.value, 2), w = x[0], A = x[1], k = A.comment, O = A.precedingNode, q = A.enclosingNode, H = A.followingNode, R = A.text, $ = A.options, K = A.ast, ne = A.isLastComment;
            if ($.parser === "json" || $.parser === "json5" || $.parser === "__js_expression" || $.parser === "__vue_expression") {
              if (i(k) - i(K) <= 0) {
                Es(K, k);
                continue;
              }
              if (o(k) - o(K) >= 0) {
                Cs(K, k);
                continue;
              }
            }
            var ue = void 0;
            if (l ? ue = [A] : (k.enclosingNode = q, k.precedingNode = O, k.followingNode = H, ue = [k, R, $, K, ne]), J5(R, $, b, w))
              k.placement = "ownLine", f.apply(void 0, _(ue)) || (H ? Es(H, k) : O ? Cs(O, k) : E0(q || K, k));
            else if (Y5(R, $, b, w))
              k.placement = "endOfLine", D.apply(void 0, _(ue)) || (O ? Cs(O, k) : H ? Es(H, k) : E0(q || K, k));
            else if (k.placement = "remaining", !y.apply(void 0, _(ue)))
              if (O && H) {
                var Ce = a.length;
                Ce > 0 && a[Ce - 1].followingNode !== H && Km(a, R, $), a.push(A);
              } else
                O ? Cs(O, k) : H ? Es(H, k) : E0(q || K, k);
          }
        } catch (Le) {
          S.e(Le);
        } finally {
          S.f();
        }
        if (Km(a, n, u), !l) {
          var oe = le(e), ae;
          try {
            for (oe.s(); !(ae = oe.n()).done; ) {
              var ve = ae.value;
              delete ve.precedingNode, delete ve.enclosingNode, delete ve.followingNode;
            }
          } catch (Le) {
            oe.e(Le);
          } finally {
            oe.f();
          }
        }
      }
    }, printComments: function(e, t, n, u) {
      var a = Qm(e, n, u), i = a.leading, o = a.trailing;
      return i || o ? [i, t, o] : t;
    }, printCommentsSeparately: Qm, printDanglingComments: function(e, t, n, u) {
      var a = [], i = e.getValue();
      return i && i.comments ? (e.each(function() {
        var o = e.getValue();
        o.leading || o.trailing || u && !u(o) || a.push(F0(e, t));
      }, "comments"), a.length === 0 ? "" : n ? Xm(yu, a) : G5([yu, Xm(yu, a)])) : "";
    }, getSortedChildNodes: A0, ensureAllCommentsPrinted: function(e) {
      if (e) {
        var t = le(e), n;
        try {
          for (t.s(); !(n = t.n()).done; ) {
            var u = n.value;
            if (!u.printed)
              throw new Error('Comment "' + u.value.trim() + '" was not printed. Please report this error!');
            delete u.printed;
          }
        } catch (a) {
          t.e(a);
        } finally {
          t.f();
        }
      }
    } };
    function Zm(r, e) {
      var t = _m(r.stack, e);
      return t === -1 ? null : r.stack[t];
    }
    function _m(r, e) {
      for (var t = r.length - 1; t >= 0; t -= 2) {
        var n = r[t];
        if (n && !Array.isArray(n) && --e < 0)
          return t;
      }
      return -1;
    }
    var K5 = /* @__PURE__ */ function() {
      function r(e) {
        se(this, r), this.stack = [e];
      }
      return ce(r, [{ key: "getName", value: function() {
        var t = this.stack, n = t.length;
        return n > 1 ? t[n - 2] : null;
      } }, { key: "getValue", value: function() {
        return sr(this.stack);
      } }, { key: "getNode", value: function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        return Zm(this, t);
      } }, { key: "getParentNode", value: function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        return Zm(this, t + 1);
      } }, { key: "call", value: function(t) {
        for (var n = this.stack, u = n.length, a = sr(n), i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++)
          o[s - 1] = arguments[s];
        for (var c = 0, l = o; c < l.length; c++) {
          var p = l[c];
          a = a[p], n.push(p, a);
        }
        var f = t(this);
        return n.length = u, f;
      } }, { key: "callParent", value: function(t) {
        var n, u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = _m(this.stack, u + 1), i = this.stack.splice(a + 1), o = t(this);
        return (n = this.stack).push.apply(n, _(i)), o;
      } }, { key: "each", value: function(t) {
        for (var n = this.stack, u = n.length, a = sr(n), i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++)
          o[s - 1] = arguments[s];
        for (var c = 0, l = o; c < l.length; c++) {
          var p = l[c];
          a = a[p], n.push(p, a);
        }
        for (var f = 0; f < a.length; ++f)
          n.push(f, a[f]), t(this, f, a), n.length -= 2;
        n.length = u;
      } }, { key: "map", value: function(t) {
        for (var n = [], u = arguments.length, a = new Array(u > 1 ? u - 1 : 0), i = 1; i < u; i++)
          a[i - 1] = arguments[i];
        return this.each.apply(this, [function(o, s, c) {
          n[s] = t(o, s, c);
        }].concat(a)), n;
      } }, { key: "try", value: function(t) {
        var n = this.stack, u = _(n);
        try {
          return t();
        } finally {
          n.length = 0, n.push.apply(n, u);
        }
      } }, { key: "match", value: function() {
        for (var t = this.stack.length - 1, n = null, u = this.stack[t--], a = arguments.length, i = new Array(a), o = 0; o < a; o++)
          i[o] = arguments[o];
        for (var s = 0, c = i; s < c.length; s++) {
          var l = c[s];
          if (u === void 0)
            return !1;
          var p = null;
          if (typeof n == "number" && (p = n, n = this.stack[t--], u = this.stack[t--]), l && !l(u, n, p))
            return !1;
          n = this.stack[t--], u = this.stack[t--];
        }
        return !0;
      } }, { key: "findAncestor", value: function(t) {
        for (var n = this.stack.length - 1, u = null, a = this.stack[n--]; a; ) {
          var i = null;
          if (typeof u == "number" && (i = u, u = this.stack[n--], a = this.stack[n--]), u !== null && t(a, u, i))
            return a;
          u = this.stack[n--], a = this.stack[n--];
        }
      } }]), r;
    }(), Q5 = fe.utils.stripTrailingHardline, Z5 = Sm.normalize, _5 = { printSubtree: function(e, t, n, u) {
      if (n.printer.embed && n.embeddedLanguageFormatting === "auto")
        return n.printer.embed(e, t, function(a, i, o) {
          return function(s, c, l, p) {
            var f = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {}, d = f.stripTrailingHardline, D = d === void 0 ? !1 : d, v = Z5(Object.assign({}, l, c, { parentParser: l.parser, originalText: s }), { passThrough: !0 }), y = ia.parse(s, v), b = y.ast;
            s = y.text;
            var S = b.comments;
            delete b.comments, nr.attach(S, b, s, v), v[Symbol.for("comments")] = S || [], v[Symbol.for("tokens")] = b.tokens || [];
            var F = p(b, v);
            return nr.ensureAllCommentsPrinted(S), D ? typeof F == "string" ? F.replace(/(?:\r?\n)*$/, "") : Q5(F) : F;
          }(a, i, n, u, o);
        }, n);
    } }, ev = fe.builders, eT = ev.hardline, rT = ev.addAlignmentToDoc, tT = fe.utils.propagateBreaks, nT = nr.printComments;
    function rv(r, e) {
      var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, n = e.printer;
      n.preprocess && (r = n.preprocess(r, e));
      var u = /* @__PURE__ */ new Map(), a = new K5(r), i = o();
      return t > 0 && (i = rT([eT, i], t, e.tabWidth)), tT(i), i;
      function o(c, l) {
        return c === void 0 || c === a ? s(l) : Array.isArray(c) ? a.call.apply(a, [function() {
          return s(l);
        }].concat(_(c))) : a.call(function() {
          return s(l);
        }, c);
      }
      function s(c) {
        var l = a.getValue(), p = l && Se(l) == "object" && c === void 0;
        if (p && u.has(l))
          return u.get(l);
        var f = function(d, D, v, y) {
          var b = d.getValue(), S = D.printer, F, x;
          if (S.hasPrettierIgnore && S.hasPrettierIgnore(d)) {
            var w = function(A, k) {
              var O = k.originalText, q = k[Symbol.for("comments")], H = k.locStart, R = k.locEnd, $ = H(A), K = R(A), ne = /* @__PURE__ */ new Set(), ue = le(q), Ce;
              try {
                for (ue.s(); !(Ce = ue.n()).done; ) {
                  var oe = Ce.value;
                  H(oe) >= $ && R(oe) <= K && (oe.printed = !0, ne.add(oe));
                }
              } catch (ae) {
                ue.e(ae);
              } finally {
                ue.f();
              }
              return { doc: O.slice($, K), printedComments: ne };
            }(b, D);
            F = w.doc, x = w.printedComments;
          } else {
            if (b)
              try {
                F = _5.printSubtree(d, v, D, rv);
              } catch (A) {
                if (ye.PRETTIER_DEBUG)
                  throw A;
              }
            F || (F = S.print(d, D, v, y));
          }
          return S.willPrintOwnComments && S.willPrintOwnComments(d, D) || (F = nT(d, F, D, x)), F;
        }(a, e, o, c);
        return p && u.set(l, f), f;
      }
    }
    var T0 = rv;
    function tv(r) {
      for (var e = r.length - 1; ; ) {
        var t = r[e];
        if (!t || t.type !== "Program" && t.type !== "File")
          break;
        e--;
      }
      return r.slice(0, e + 1);
    }
    function bl(r, e, t, n) {
      var u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [], a = arguments.length > 5 ? arguments[5] : void 0, i = t.locStart, o = t.locEnd, s = i(r), c = o(r);
      if (!(e > c || e < s || a === "rangeEnd" && e === s || a === "rangeStart" && e === c)) {
        var l = le(nr.getSortedChildNodes(r, t)), p;
        try {
          for (l.s(); !(p = l.n()).done; ) {
            var f = p.value, d = bl(f, e, t, n, [r].concat(_(u)), a);
            if (d)
              return d;
          }
        } catch (D) {
          l.e(D);
        } finally {
          l.f();
        }
        return !n || n(r, u[0]) ? { node: r, parentNodes: u } : void 0;
      }
    }
    var nv = /* @__PURE__ */ new Set(["ObjectExpression", "ArrayExpression", "StringLiteral", "NumericLiteral", "BooleanLiteral", "NullLiteral", "UnaryExpression", "TemplateLiteral"]), uT = /* @__PURE__ */ new Set(["OperationDefinition", "FragmentDefinition", "VariableDefinition", "TypeExtensionDefinition", "ObjectTypeDefinition", "FieldDefinition", "DirectiveDefinition", "EnumTypeDefinition", "EnumValueDefinition", "InputValueDefinition", "InputObjectTypeDefinition", "SchemaDefinition", "OperationTypeDefinition", "InterfaceTypeDefinition", "UnionTypeDefinition", "ScalarTypeDefinition"]);
    function uv(r, e, t) {
      if (!e)
        return !1;
      switch (r.parser) {
        case "flow":
        case "babel":
        case "babel-flow":
        case "babel-ts":
        case "typescript":
        case "espree":
        case "meriyah":
          return function(n, u) {
            return u !== "DeclareExportDeclaration" && n !== "TypeParameterDeclaration" && (n === "Directive" || n === "TypeAlias" || n === "TSExportAssignment" || n.startsWith("Declare") || n.startsWith("TSDeclare") || n.endsWith("Statement") || n.endsWith("Declaration"));
          }(e.type, t && t.type);
        case "json":
        case "json5":
        case "json-stringify":
          return nv.has(e.type);
        case "graphql":
          return uT.has(e.kind);
        case "vue":
          return e.tag !== "root";
      }
      return !1;
    }
    var av = { calculateRange: function(e, t, n) {
      var u = t.rangeStart, a = t.rangeEnd, i = t.locStart, o = t.locEnd;
      Hn.ok(a > u);
      var s = e.slice(u, a).search(/\S/), c = s === -1;
      if (!c)
        for (u += s; a > u && !/\S/.test(e[a - 1]); --a)
          ;
      var l = bl(n, u, t, function(y, b) {
        return uv(t, y, b);
      }, [], "rangeStart"), p = c ? l : bl(n, a, t, function(y) {
        return uv(t, y);
      }, [], "rangeEnd");
      if (!l || !p)
        return { rangeStart: 0, rangeEnd: 0 };
      var f, d;
      if (function(y) {
        var b = y.parser;
        return b === "json" || b === "json5" || b === "json-stringify";
      }(t)) {
        var D = function(y, b) {
          var S = [y.node].concat(_(y.parentNodes)), F = new Set([b.node].concat(_(b.parentNodes)));
          return S.find(function(x) {
            return nv.has(x.type) && F.has(x);
          });
        }(l, p);
        f = D, d = D;
      } else {
        var v = function(y, b, S) {
          var F = S.locStart, x = S.locEnd, w = y.node, A = b.node;
          if (w === A)
            return { startNode: w, endNode: A };
          var k = F(y.node), O = le(tv(b.parentNodes)), q;
          try {
            for (O.s(); !(q = O.n()).done; ) {
              var H = q.value;
              if (!(F(H) >= k))
                break;
              A = H;
            }
          } catch (ue) {
            O.e(ue);
          } finally {
            O.f();
          }
          var R = x(b.node), $ = le(tv(y.parentNodes)), K;
          try {
            for ($.s(); !(K = $.n()).done; ) {
              var ne = K.value;
              if (!(x(ne) <= R))
                break;
              w = ne;
            }
          } catch (ue) {
            $.e(ue);
          } finally {
            $.f();
          }
          return { startNode: w, endNode: A };
        }(l, p, t);
        f = v.startNode, d = v.endNode;
      }
      return { rangeStart: Math.min(i(f), i(d)), rangeEnd: Math.max(o(f), o(d)) };
    }, findNodeAtOffset: bl }, x0 = fe.printer.printDocToString, aT = fe.debug.printDocToDebug, iT = X.getAlignmentSize, oT = du.guessEndOfLine, iv = du.convertEndOfLineToChars, ov = du.countEndOfLineChars, sT = du.normalizeEndOfLine, As = Sm.normalize, sv = Symbol("cursor");
    function cv(r, e, t) {
      var n = e.comments;
      return n && (delete e.comments, nr.attach(n, e, r, t)), t[Symbol.for("comments")] = n || [], t[Symbol.for("tokens")] = e.tokens || [], t.originalText = r, n;
    }
    function lv(r, e) {
      var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
      if (!r || r.trim().length === 0)
        return { formatted: "", cursorOffset: -1, comments: [] };
      var n = ia.parse(r, e), u = n.ast, a = n.text;
      if (e.cursorOffset >= 0) {
        var i = av.findNodeAtOffset(u, e.cursorOffset, e);
        i && i.node && (e.cursorNode = i.node);
      }
      var o = cv(a, u, e), s = T0(u, e, t), c = x0(s, e);
      if (nr.ensureAllCommentsPrinted(o), t > 0) {
        var l = c.formatted.trim();
        c.cursorNodeStart !== void 0 && (c.cursorNodeStart -= c.formatted.indexOf(l)), c.formatted = l + iv(e.endOfLine);
      }
      if (e.cursorOffset >= 0) {
        var p, f, d, D, v;
        if (e.cursorNode && c.cursorNodeText ? (p = e.locStart(e.cursorNode), f = a.slice(p, e.locEnd(e.cursorNode)), d = e.cursorOffset - p, D = c.cursorNodeStart, v = c.cursorNodeText) : (p = 0, f = a, d = e.cursorOffset, D = 0, v = c.formatted), f === v)
          return { formatted: c.formatted, cursorOffset: D + d, comments: o };
        var y = f.split("");
        y.splice(d, 0, sv);
        var b = v.split(""), S = On.diffArrays(y, b), F = D, x = le(S), w;
        try {
          for (x.s(); !(w = x.n()).done; ) {
            var A = w.value;
            if (A.removed) {
              if (A.value.includes(sv))
                break;
            } else
              F += A.count;
          }
        } catch (k) {
          x.e(k);
        } finally {
          x.f();
        }
        return { formatted: c.formatted, cursorOffset: F, comments: o };
      }
      return { formatted: c.formatted, cursorOffset: -1, comments: o };
    }
    function w0(r, e, t) {
      return typeof e != "number" || Number.isNaN(e) || e < 0 || e > r.length ? t : e;
    }
    function pv(r, e) {
      var t = e.cursorOffset, n = e.rangeStart, u = e.rangeEnd;
      return t = w0(r, t, -1), n = w0(r, n, 0), u = w0(r, u, r.length), Object.assign({}, e, { cursorOffset: t, rangeStart: n, rangeEnd: u });
    }
    function fv(r, e) {
      var t = pv(r, e), n = t.cursorOffset, u = t.rangeStart, a = t.rangeEnd, i = t.endOfLine, o = r.charAt(0) === "\uFEFF";
      if (o && (r = r.slice(1), n--, u--, a--), i === "auto" && (i = oT(r)), r.includes("\r")) {
        var s = function(l) {
          return ov(r.slice(0, Math.max(l, 0)), `\r
`);
        };
        n -= s(n), u -= s(u), a -= s(a), r = sT(r);
      }
      return { hasBOM: o, text: r, options: pv(r, Object.assign({}, e, { cursorOffset: n, rangeStart: u, rangeEnd: a, endOfLine: i })) };
    }
    function dv(r, e) {
      var t = ia.resolveParser(e);
      return !t.hasPragma || t.hasPragma(r);
    }
    function hv(r, e) {
      var t, n = fv(r, As(e)), u = n.hasBOM, a = n.text, i = n.options;
      return i.rangeStart >= i.rangeEnd && a !== "" || i.requirePragma && !dv(a, i) ? { formatted: r, cursorOffset: e.cursorOffset, comments: [] } : (i.rangeStart > 0 || i.rangeEnd < a.length ? t = function(o, s) {
        var c = ia.parse(o, s), l = c.ast, p = c.text, f = av.calculateRange(p, s, l), d = f.rangeStart, D = f.rangeEnd, v = p.slice(d, D), y = Math.min(d, p.lastIndexOf(`
`, d) + 1), b = p.slice(y, d).match(/^\s*/)[0], S = iT(b, s.tabWidth), F = lv(v, Object.assign({}, s, { rangeStart: 0, rangeEnd: Number.POSITIVE_INFINITY, cursorOffset: s.cursorOffset > d && s.cursorOffset < D ? s.cursorOffset - d : -1, endOfLine: "lf" }), S), x = F.formatted.trimEnd(), w = s.cursorOffset;
        w >= D ? w += x.length - v.length : F.cursorOffset >= 0 && (w = F.cursorOffset + d);
        var A = p.slice(0, d) + x + p.slice(D);
        if (s.endOfLine !== "lf") {
          var k = iv(s.endOfLine);
          w >= 0 && k === `\r
` && (w += ov(A.slice(0, w), `
`)), A = A.replace(/\n/g, k);
        }
        return { formatted: A, cursorOffset: w, comments: F.comments };
      }(a, i) : (!i.requirePragma && i.insertPragma && i.printer.insertPragma && !dv(a, i) && (a = i.printer.insertPragma(a)), t = lv(a, i)), u && (t.formatted = "\uFEFF" + t.formatted, t.cursorOffset >= 0 && t.cursorOffset++), t);
    }
    var Li = { formatWithCursor: hv, parse: function(e, t, n) {
      var u = fv(e, As(t)), a = u.text, i = u.options, o = ia.parse(a, i);
      return n && (o.ast = L5(o.ast, i)), o;
    }, formatAST: function(e, t) {
      t = As(t);
      var n = T0(e, t);
      return x0(n, t);
    }, formatDoc: function(e, t) {
      return hv(aT(e), Object.assign({}, t, { parser: "__js_expression" })).formatted;
    }, printToDoc: function(e, t) {
      t = As(t);
      var n = ia.parse(e, t), u = n.ast, a = n.text;
      return cv(a, u, t), T0(u, t);
    }, printDocToString: function(e, t) {
      return x0(e, As(t));
    } }, cT = X.getMaxContinuousCount, lT = X.getStringWidth, pT = X.getAlignmentSize, fT = X.getIndentSize, dT = X.skip, hT = X.skipWhitespace, DT = X.skipSpaces, gT = X.skipNewline, mT = X.skipToLineEnd, vT = X.skipEverythingButNewLine, yT = X.skipInlineComment, ET = X.skipTrailingComment, CT = X.hasNewline, AT = X.hasNewlineInRange, bT = X.hasSpaces, FT = X.isNextLineEmpty, ST = X.isNextLineEmptyAfterIndex, TT = X.isPreviousLineEmpty, xT = X.getNextNonSpaceNonCommentCharacterIndex, wT = X.makeString, BT = X.addLeadingComment, kT = X.addDanglingComment, NT = X.addTrailingComment, PT = { getMaxContinuousCount: cT, getStringWidth: lT, getAlignmentSize: pT, getIndentSize: fT, skip: dT, skipWhitespace: hT, skipSpaces: DT, skipNewline: gT, skipToLineEnd: mT, skipEverythingButNewLine: vT, skipInlineComment: yT, skipTrailingComment: ET, hasNewline: CT, hasNewlineInRange: AT, hasSpaces: bT, isNextLineEmpty: FT, isNextLineEmptyAfterIndex: ST, isPreviousLineEmpty: TT, getNextNonSpaceNonCommentCharacterIndex: xT, makeString: wT, addLeadingComment: BT, addDanglingComment: kT, addTrailingComment: NT }, lr = function(e, t) {
      var n = e.languageId, u = M(e, ["languageId"]);
      return Object.assign({ linguistLanguageId: n }, u, t(e));
    }, IT = De(function(r) {
      (function() {
        function e(n) {
          if (n == null)
            return !1;
          switch (n.type) {
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
        function t(n) {
          switch (n.type) {
            case "IfStatement":
              return n.alternate != null ? n.alternate : n.consequent;
            case "LabeledStatement":
            case "ForStatement":
            case "ForInStatement":
            case "WhileStatement":
            case "WithStatement":
              return n.body;
          }
          return null;
        }
        r.exports = { isExpression: function(u) {
          if (u == null)
            return !1;
          switch (u.type) {
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
        }, isStatement: e, isIterationStatement: function(u) {
          if (u == null)
            return !1;
          switch (u.type) {
            case "DoWhileStatement":
            case "ForInStatement":
            case "ForStatement":
            case "WhileStatement":
              return !0;
          }
          return !1;
        }, isSourceElement: function(u) {
          return e(u) || u != null && u.type === "FunctionDeclaration";
        }, isProblematicIfStatement: function(u) {
          var a;
          if (u.type !== "IfStatement" || u.alternate == null)
            return !1;
          a = u.consequent;
          do {
            if (a.type === "IfStatement" && a.alternate == null)
              return !0;
            a = t(a);
          } while (a);
          return !1;
        }, trailingStatement: t };
      })();
    }), Dv = De(function(r) {
      (function() {
        var e, t, n, u, a, i;
        function o(s) {
          return s <= 65535 ? String.fromCharCode(s) : String.fromCharCode(Math.floor((s - 65536) / 1024) + 55296) + String.fromCharCode((s - 65536) % 1024 + 56320);
        }
        for (t = { NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/, NonAsciiIdentifierPart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/ }, e = { NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/, NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/ }, n = [5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279], u = new Array(128), i = 0; i < 128; ++i)
          u[i] = i >= 97 && i <= 122 || i >= 65 && i <= 90 || i === 36 || i === 95;
        for (a = new Array(128), i = 0; i < 128; ++i)
          a[i] = i >= 97 && i <= 122 || i >= 65 && i <= 90 || i >= 48 && i <= 57 || i === 36 || i === 95;
        r.exports = { isDecimalDigit: function(c) {
          return 48 <= c && c <= 57;
        }, isHexDigit: function(c) {
          return 48 <= c && c <= 57 || 97 <= c && c <= 102 || 65 <= c && c <= 70;
        }, isOctalDigit: function(c) {
          return c >= 48 && c <= 55;
        }, isWhiteSpace: function(c) {
          return c === 32 || c === 9 || c === 11 || c === 12 || c === 160 || c >= 5760 && n.indexOf(c) >= 0;
        }, isLineTerminator: function(c) {
          return c === 10 || c === 13 || c === 8232 || c === 8233;
        }, isIdentifierStartES5: function(c) {
          return c < 128 ? u[c] : t.NonAsciiIdentifierStart.test(o(c));
        }, isIdentifierPartES5: function(c) {
          return c < 128 ? a[c] : t.NonAsciiIdentifierPart.test(o(c));
        }, isIdentifierStartES6: function(c) {
          return c < 128 ? u[c] : e.NonAsciiIdentifierStart.test(o(c));
        }, isIdentifierPartES6: function(c) {
          return c < 128 ? a[c] : e.NonAsciiIdentifierPart.test(o(c));
        } };
      })();
    }), OT = De(function(r) {
      (function() {
        var e = Dv;
        function t(s, c) {
          return !(!c && s === "yield") && n(s, c);
        }
        function n(s, c) {
          if (c && function(l) {
            switch (l) {
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
          }(s))
            return !0;
          switch (s.length) {
            case 2:
              return s === "if" || s === "in" || s === "do";
            case 3:
              return s === "var" || s === "for" || s === "new" || s === "try";
            case 4:
              return s === "this" || s === "else" || s === "case" || s === "void" || s === "with" || s === "enum";
            case 5:
              return s === "while" || s === "break" || s === "catch" || s === "throw" || s === "const" || s === "yield" || s === "class" || s === "super";
            case 6:
              return s === "return" || s === "typeof" || s === "delete" || s === "switch" || s === "export" || s === "import";
            case 7:
              return s === "default" || s === "finally" || s === "extends";
            case 8:
              return s === "function" || s === "continue" || s === "debugger";
            case 10:
              return s === "instanceof";
            default:
              return !1;
          }
        }
        function u(s, c) {
          return s === "null" || s === "true" || s === "false" || t(s, c);
        }
        function a(s, c) {
          return s === "null" || s === "true" || s === "false" || n(s, c);
        }
        function i(s) {
          var c, l, p;
          if (s.length === 0 || (p = s.charCodeAt(0), !e.isIdentifierStartES5(p)))
            return !1;
          for (c = 1, l = s.length; c < l; ++c)
            if (p = s.charCodeAt(c), !e.isIdentifierPartES5(p))
              return !1;
          return !0;
        }
        function o(s) {
          var c, l, p, f, d;
          if (s.length === 0)
            return !1;
          for (d = e.isIdentifierStartES6, c = 0, l = s.length; c < l; ++c) {
            if (55296 <= (p = s.charCodeAt(c)) && p <= 56319) {
              if (++c >= l || !(56320 <= (f = s.charCodeAt(c)) && f <= 57343))
                return !1;
              p = 1024 * (p - 55296) + (f - 56320) + 65536;
            }
            if (!d(p))
              return !1;
            d = e.isIdentifierPartES6;
          }
          return !0;
        }
        r.exports = { isKeywordES5: t, isKeywordES6: n, isReservedWordES5: u, isReservedWordES6: a, isRestrictedWord: function(c) {
          return c === "eval" || c === "arguments";
        }, isIdentifierNameES5: i, isIdentifierNameES6: o, isIdentifierES5: function(c, l) {
          return i(c) && !u(c, l);
        }, isIdentifierES6: function(c, l) {
          return o(c) && !a(c, l);
        } };
      })();
    }), LT = De(function(r, e) {
      e.ast = IT, e.code = Dv, e.keyword = OT;
    }).keyword.isIdentifierNameES5, gv = X.getLast, mv = X.hasNewline, RT = X.skipWhitespace, vv = X.isNonEmptyArray, MT = X.isNextLineEmptyAfterIndex, yv = tr.locStart, B0 = tr.locEnd, Ev = tr.hasSameLocStart, Cv = "(?:(?=.)\\s)", jT = new RegExp("^".concat(Cv, "*:")), $T = new RegExp("^".concat(Cv, "*::"));
    function Av(r) {
      return r.type === "AssignmentExpression" || r.type === "BinaryExpression" || r.type === "LogicalExpression" || r.type === "NGPipeExpression" || r.type === "ConditionalExpression" || ca(r) || la(r) || r.type === "SequenceExpression" || r.type === "TaggedTemplateExpression" || r.type === "BindExpression" || r.type === "UpdateExpression" && !r.prefix || r.type === "TSAsExpression" || r.type === "TSNonNullExpression";
    }
    function bs(r) {
      return r.type === "Block" || r.type === "CommentBlock" || r.type === "MultiLine";
    }
    function bv(r) {
      return r.type === "Line" || r.type === "CommentLine" || r.type === "SingleLine" || r.type === "HashbangComment" || r.type === "HTMLOpen" || r.type === "HTMLClose";
    }
    var qT = /* @__PURE__ */ new Set(["ExportDefaultDeclaration", "ExportDefaultSpecifier", "DeclareExportDeclaration", "ExportNamedDeclaration", "ExportAllDeclaration"]);
    function Fv(r) {
      return r && qT.has(r.type);
    }
    function k0(r) {
      return r.type === "NumericLiteral" || r.type === "Literal" && typeof r.value == "number";
    }
    function N0(r) {
      return r.type === "StringLiteral" || r.type === "Literal" && typeof r.value == "string";
    }
    function Fs(r) {
      return r.type === "FunctionExpression" || r.type === "ArrowFunctionExpression";
    }
    function P0(r) {
      return ca(r) && r.callee.type === "Identifier" && (r.callee.name === "async" || r.callee.name === "inject" || r.callee.name === "fakeAsync");
    }
    function I0(r) {
      return r.type === "JSXElement" || r.type === "JSXFragment";
    }
    function Sv(r) {
      return r.kind === "get" || r.kind === "set";
    }
    function Tv(r) {
      return Sv(r) || Ev(r, r.value);
    }
    var VT = /* @__PURE__ */ new Set(["BinaryExpression", "LogicalExpression", "NGPipeExpression"]), UT = /* @__PURE__ */ new Set(["AnyTypeAnnotation", "TSAnyKeyword", "NullLiteralTypeAnnotation", "TSNullKeyword", "ThisTypeAnnotation", "TSThisType", "NumberTypeAnnotation", "TSNumberKeyword", "VoidTypeAnnotation", "TSVoidKeyword", "BooleanTypeAnnotation", "TSBooleanKeyword", "BigIntTypeAnnotation", "TSBigIntKeyword", "SymbolTypeAnnotation", "TSSymbolKeyword", "StringTypeAnnotation", "TSStringKeyword", "BooleanLiteralTypeAnnotation", "StringLiteralTypeAnnotation", "BigIntLiteralTypeAnnotation", "NumberLiteralTypeAnnotation", "TSLiteralType", "TSTemplateLiteralType", "EmptyTypeAnnotation", "MixedTypeAnnotation", "TSNeverKeyword", "TSObjectKeyword", "TSUndefinedKeyword", "TSUnknownKeyword"]), xv = /^(skip|[fx]?(it|describe|test))$/;
    function ca(r) {
      return r && (r.type === "CallExpression" || r.type === "OptionalCallExpression");
    }
    function la(r) {
      return r && (r.type === "MemberExpression" || r.type === "OptionalMemberExpression");
    }
    function O0(r, e) {
      return I0(e) ? q0(e) : Ri(e, Lt.Leading, function(t) {
        return mv(r, B0(t));
      });
    }
    function wv(r) {
      return /^(\d+|\d+\.\d+)$/.test(r);
    }
    function Bv(r) {
      return r.quasis.some(function(e) {
        return e.value.raw.includes(`
`);
      });
    }
    function kv(r) {
      return r.extra ? r.extra.raw : r.raw;
    }
    var Nv = { "==": !0, "!=": !0, "===": !0, "!==": !0 }, Fl = { "*": !0, "/": !0, "%": !0 }, L0 = { ">>": !0, ">>>": !0, "<<": !0 }, Pv = {}, Sl = le([["|>"], ["??"], ["||"], ["&&"], ["|"], ["^"], ["&"], ["==", "===", "!=", "!=="], ["<", ">", "<=", ">=", "in", "instanceof"], [">>", "<<", ">>>"], ["+", "-"], ["*", "/", "%"], ["**"]].entries()), Iv;
    try {
      for (Sl.s(); !(Iv = Sl.n()).done; ) {
        var Ov = ke(Iv.value, 2), WT = Ov[0], GT = Ov[1], Tl = le(GT), Lv;
        try {
          for (Tl.s(); !(Lv = Tl.n()).done; ) {
            var HT = Lv.value;
            Pv[HT] = WT;
          }
        } catch (r) {
          Tl.e(r);
        } finally {
          Tl.f();
        }
      }
    } catch (r) {
      Sl.e(r);
    } finally {
      Sl.f();
    }
    function R0(r) {
      return Pv[r];
    }
    var M0 = /* @__PURE__ */ new WeakMap();
    function j0(r) {
      if (M0.has(r))
        return M0.get(r);
      var e = [];
      return r.this && e.push(r.this), Array.isArray(r.parameters) ? e.push.apply(e, _(r.parameters)) : Array.isArray(r.params) && e.push.apply(e, _(r.params)), r.rest && e.push(r.rest), M0.set(r, e), e;
    }
    var $0 = /* @__PURE__ */ new WeakMap();
    function Rv(r) {
      return r.value.trim() === "prettier-ignore" && !r.unignore;
    }
    function q0(r) {
      return r && (r.prettierIgnore || Ri(r, Lt.PrettierIgnore));
    }
    var Lt = { Leading: 2, Trailing: 4, Dangling: 8, Block: 16, Line: 32, PrettierIgnore: 64, First: 128, Last: 256 }, Mv = function(e, t) {
      if (typeof e == "function" && (t = e, e = 0), e || t)
        return function(n, u, a) {
          return !(e & Lt.Leading && !n.leading || e & Lt.Trailing && !n.trailing || e & Lt.Dangling && (n.leading || n.trailing) || e & Lt.Block && !bs(n) || e & Lt.Line && !bv(n) || e & Lt.First && u !== 0 || e & Lt.Last && u !== a.length - 1 || e & Lt.PrettierIgnore && !Rv(n) || t && !t(n));
        };
    };
    function Ri(r, e, t) {
      if (!r || !vv(r.comments))
        return !1;
      var n = Mv(e, t);
      return !n || r.comments.some(n);
    }
    function jv(r, e, t) {
      if (!r || !Array.isArray(r.comments))
        return [];
      var n = Mv(e, t);
      return n ? r.comments.filter(n) : r.comments;
    }
    function $v(r) {
      return ca(r) || r.type === "NewExpression" || r.type === "ImportExpression";
    }
    var I = { getFunctionParameters: j0, iterateFunctionParametersPath: function(e, t) {
      var n = e.getValue(), u = 0, a = function(o) {
        return t(o, u++);
      };
      n.this && e.call(a, "this"), Array.isArray(n.parameters) ? e.each(a, "parameters") : Array.isArray(n.params) && e.each(a, "params"), n.rest && e.call(a, "rest");
    }, getCallArguments: function(e) {
      if ($0.has(e))
        return $0.get(e);
      var t = e.type === "ImportExpression" ? [e.source] : e.arguments;
      return $0.set(e, t), t;
    }, iterateCallArgumentsPath: function(e, t) {
      e.getValue().type === "ImportExpression" ? e.call(function(n) {
        return t(n, 0);
      }, "source") : e.each(t, "arguments");
    }, hasRestParameter: function(e) {
      if (e.rest)
        return !0;
      var t = j0(e);
      return t.length > 0 && gv(t).type === "RestElement";
    }, getLeftSidePathName: function(e, t) {
      if (t.expressions)
        return ["expressions", 0];
      if (t.left)
        return ["left"];
      if (t.test)
        return ["test"];
      if (t.object)
        return ["object"];
      if (t.callee)
        return ["callee"];
      if (t.tag)
        return ["tag"];
      if (t.argument)
        return ["argument"];
      if (t.expression)
        return ["expression"];
      throw new Error("Unexpected node has no left side.");
    }, getParentExportDeclaration: function(e) {
      var t = e.getParentNode();
      return e.getName() === "declaration" && Fv(t) ? t : null;
    }, getTypeScriptMappedTypeModifier: function(e, t) {
      return e === "+" ? "+" + t : e === "-" ? "-" + t : t;
    }, hasFlowAnnotationComment: function(e) {
      return e && bs(e[0]) && $T.test(e[0].value);
    }, hasFlowShorthandAnnotationComment: function(e) {
      return e.extra && e.extra.parenthesized && vv(e.trailingComments) && bs(e.trailingComments[0]) && jT.test(e.trailingComments[0].value);
    }, hasLeadingOwnLineComment: O0, hasNakedLeftSide: Av, hasNode: function r(e, t) {
      if (!e || Se(e) != "object")
        return !1;
      if (Array.isArray(e))
        return e.some(function(u) {
          return r(u, t);
        });
      var n = t(e);
      return typeof n == "boolean" ? n : Object.values(e).some(function(u) {
        return r(u, t);
      });
    }, hasIgnoreComment: function(e) {
      return q0(e.getValue());
    }, hasNodeIgnoreComment: q0, identity: function(e) {
      return e;
    }, isBinaryish: function(e) {
      return VT.has(e.type);
    }, isBlockComment: bs, isCallLikeExpression: $v, isLineComment: bv, isPrettierIgnoreComment: Rv, isCallExpression: ca, isMemberExpression: la, isExportDeclaration: Fv, isFlowAnnotationComment: function(e, t) {
      var n = yv(t), u = RT(e, B0(t));
      return u !== !1 && e.slice(n, n + 2) === "/*" && e.slice(u, u + 2) === "*/";
    }, isFunctionCompositionArgs: function(e) {
      if (e.length <= 1)
        return !1;
      var t = 0, n = le(e), u;
      try {
        for (n.s(); !(u = n.n()).done; ) {
          var a = u.value;
          if (Fs(a)) {
            if (t += 1, t > 1)
              return !0;
          } else if (ca(a)) {
            var i = le(a.arguments), o;
            try {
              for (i.s(); !(o = i.n()).done; ) {
                var s = o.value;
                if (Fs(s))
                  return !0;
              }
            } catch (c) {
              i.e(c);
            } finally {
              i.f();
            }
          }
        }
      } catch (c) {
        n.e(c);
      } finally {
        n.f();
      }
      return !1;
    }, isFunctionNotation: Tv, isFunctionOrArrowExpression: Fs, isGetterOrSetter: Sv, isJestEachTemplateLiteral: function(e, t) {
      var n = /^[fx]?(describe|it|test)$/;
      return t.type === "TaggedTemplateExpression" && t.quasi === e && t.tag.type === "MemberExpression" && t.tag.property.type === "Identifier" && t.tag.property.name === "each" && (t.tag.object.type === "Identifier" && n.test(t.tag.object.name) || t.tag.object.type === "MemberExpression" && t.tag.object.property.type === "Identifier" && (t.tag.object.property.name === "only" || t.tag.object.property.name === "skip") && t.tag.object.object.type === "Identifier" && n.test(t.tag.object.object.name));
    }, isJsxNode: I0, isLiteral: function(e) {
      return e.type === "BooleanLiteral" || e.type === "DirectiveLiteral" || e.type === "Literal" || e.type === "NullLiteral" || e.type === "NumericLiteral" || e.type === "BigIntLiteral" || e.type === "DecimalLiteral" || e.type === "RegExpLiteral" || e.type === "StringLiteral" || e.type === "TemplateLiteral" || e.type === "TSTypeLiteral" || e.type === "JSXText";
    }, isLongCurriedCallExpression: function(e) {
      var t = e.getValue(), n = e.getParentNode();
      return ca(t) && ca(n) && n.callee === t && t.arguments.length > n.arguments.length && n.arguments.length > 0;
    }, isSimpleCallArgument: function r(e, t) {
      if (t >= 2)
        return !1;
      var n = function(i) {
        return r(i, t + 1);
      }, u = e.type === "Literal" && "regex" in e && e.regex.pattern || e.type === "RegExpLiteral" && e.pattern;
      return !(u && u.length > 5) && (e.type === "Literal" || e.type === "BigIntLiteral" || e.type === "DecimalLiteral" || e.type === "BooleanLiteral" || e.type === "NullLiteral" || e.type === "NumericLiteral" || e.type === "RegExpLiteral" || e.type === "StringLiteral" || e.type === "Identifier" || e.type === "ThisExpression" || e.type === "Super" || e.type === "PrivateName" || e.type === "PrivateIdentifier" || e.type === "ArgumentPlaceholder" || e.type === "Import" || (e.type === "TemplateLiteral" ? e.quasis.every(function(a) {
        return !a.value.raw.includes(`
`);
      }) && e.expressions.every(n) : e.type === "ObjectExpression" ? e.properties.every(function(a) {
        return !a.computed && (a.shorthand || a.value && n(a.value));
      }) : e.type === "ArrayExpression" ? e.elements.every(function(a) {
        return a === null || n(a);
      }) : e.type === "ImportExpression" ? n(e.source) : $v(e) ? r(e.callee, t) && e.arguments.every(n) : la(e) ? r(e.object, t) && r(e.property, t) : e.type !== "UnaryExpression" || e.operator !== "!" && e.operator !== "-" ? e.type === "TSNonNullExpression" && r(e.expression, t) : r(e.argument, t)));
    }, isMemberish: function(e) {
      return la(e) || e.type === "BindExpression" && Boolean(e.object);
    }, isNumericLiteral: k0, isSignedNumericLiteral: function(e) {
      return e.type === "UnaryExpression" && (e.operator === "+" || e.operator === "-") && k0(e.argument);
    }, isObjectType: function(e) {
      return e.type === "ObjectTypeAnnotation" || e.type === "TSTypeLiteral";
    }, isObjectTypePropertyAFunction: function(e) {
      return !(e.type !== "ObjectTypeProperty" && e.type !== "ObjectTypeInternalSlot" || e.value.type !== "FunctionTypeAnnotation" || e.static || Tv(e));
    }, isSimpleType: function(e) {
      return !!e && (!(e.type !== "GenericTypeAnnotation" && e.type !== "TSTypeReference" || e.typeParameters) || !!UT.has(e.type));
    }, isSimpleNumber: wv, isSimpleTemplateLiteral: function(e) {
      var t = "expressions";
      e.type === "TSTemplateLiteralType" && (t = "types");
      var n = e[t];
      return n.length !== 0 && n.every(function(u) {
        if (Ri(u))
          return !1;
        if (u.type === "Identifier" || u.type === "ThisExpression")
          return !0;
        if (la(u)) {
          for (var a = u; la(a); )
            if (a.property.type !== "Identifier" && a.property.type !== "Literal" && a.property.type !== "StringLiteral" && a.property.type !== "NumericLiteral" || (a = a.object, Ri(a)))
              return !1;
          return a.type === "Identifier" || a.type === "ThisExpression";
        }
        return !1;
      });
    }, isStringLiteral: N0, isStringPropSafeToUnquote: function(e, t) {
      return t.parser !== "json" && N0(e.key) && kv(e.key).slice(1, -1) === e.key.value && (LT(e.key.value) && !((t.parser === "typescript" || t.parser === "babel-ts") && e.type === "ClassProperty") || wv(e.key.value) && String(Number(e.key.value)) === e.key.value && (t.parser === "babel" || t.parser === "espree" || t.parser === "meriyah"));
    }, isTemplateOnItsOwnLine: function(e, t) {
      return (e.type === "TemplateLiteral" && Bv(e) || e.type === "TaggedTemplateExpression" && Bv(e.quasi)) && !mv(t, yv(e), { backwards: !0 });
    }, isTestCall: function r(e, t) {
      if (e.type !== "CallExpression")
        return !1;
      if (e.arguments.length === 1) {
        if (P0(e) && t && r(t))
          return Fs(e.arguments[0]);
        if (function(n) {
          return n.callee.type === "Identifier" && /^(before|after)(Each|All)$/.test(n.callee.name) && n.arguments.length === 1;
        }(e))
          return P0(e.arguments[0]);
      } else if ((e.arguments.length === 2 || e.arguments.length === 3) && (e.callee.type === "Identifier" && xv.test(e.callee.name) || function(n) {
        return la(n.callee) && n.callee.object.type === "Identifier" && n.callee.property.type === "Identifier" && xv.test(n.callee.object.name) && (n.callee.property.name === "only" || n.callee.property.name === "skip");
      }(e)) && (function(n) {
        return n.type === "TemplateLiteral";
      }(e.arguments[0]) || N0(e.arguments[0])))
        return !(e.arguments[2] && !k0(e.arguments[2])) && ((e.arguments.length === 2 ? Fs(e.arguments[1]) : function(n) {
          return n.type === "FunctionExpression" || n.type === "ArrowFunctionExpression" && n.body.type === "BlockStatement";
        }(e.arguments[1]) && j0(e.arguments[1]).length <= 1) || P0(e.arguments[1]));
      return !1;
    }, isTheOnlyJsxElementInMarkdown: function(e, t) {
      if (e.parentParser !== "markdown" && e.parentParser !== "mdx")
        return !1;
      var n = t.getNode();
      if (!n.expression || !I0(n.expression))
        return !1;
      var u = t.getParentNode();
      return u.type === "Program" && u.body.length === 1;
    }, isTSXFile: function(e) {
      return e.filepath && /\.tsx$/i.test(e.filepath);
    }, isTypeAnnotationAFunction: function(e) {
      return !(e.type !== "TypeAnnotation" && e.type !== "TSTypeAnnotation" || e.typeAnnotation.type !== "FunctionTypeAnnotation" || e.static || Ev(e, e.typeAnnotation));
    }, isNextLineEmpty: function(e, t) {
      var n = t.originalText;
      return MT(n, B0(e));
    }, needsHardlineAfterDanglingComment: function(e) {
      if (!Ri(e))
        return !1;
      var t = gv(jv(e, Lt.Dangling));
      return t && !bs(t);
    }, rawText: kv, returnArgumentHasLeadingComment: function(e, t) {
      if (O0(e.originalText, t))
        return !0;
      if (Av(t)) {
        for (var n, u = t; n = (a = u).expressions ? a.expressions[0] : a.left || a.test || a.callee || a.object || a.tag || a.argument || a.expression; )
          if (u = n, O0(e.originalText, u))
            return !0;
      }
      var a;
      return !1;
    }, shouldPrintComma: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "es5";
      return e.trailingComma === "es5" && t === "es5" || e.trailingComma === "all" && (t === "all" || t === "es5");
    }, isBitwiseOperator: function(e) {
      return Boolean(L0[e]) || e === "|" || e === "^" || e === "&";
    }, shouldFlatten: function(e, t) {
      return R0(t) === R0(e) && e !== "**" && (!Nv[e] || !Nv[t]) && !(t === "%" && Fl[e] || e === "%" && Fl[t]) && (t === e || !Fl[t] || !Fl[e]) && (!L0[e] || !L0[t]);
    }, startsWithNoLookaheadToken: function r(e, t) {
      switch ((e = function(n) {
        for (; n.left; )
          n = n.left;
        return n;
      }(e)).type) {
        case "FunctionExpression":
        case "ClassExpression":
        case "DoExpression":
          return t;
        case "ObjectExpression":
          return !0;
        case "MemberExpression":
        case "OptionalMemberExpression":
          return r(e.object, t);
        case "TaggedTemplateExpression":
          return e.tag.type !== "FunctionExpression" && r(e.tag, t);
        case "CallExpression":
        case "OptionalCallExpression":
          return e.callee.type !== "FunctionExpression" && r(e.callee, t);
        case "ConditionalExpression":
          return r(e.test, t);
        case "UpdateExpression":
          return !e.prefix && r(e.argument, t);
        case "BindExpression":
          return e.object && r(e.object, t);
        case "SequenceExpression":
          return r(e.expressions[0], t);
        case "TSAsExpression":
        case "TSNonNullExpression":
          return r(e.expression, t);
        default:
          return !1;
      }
    }, getPrecedence: R0, hasComment: Ri, getComments: jv, CommentCheckFlags: Lt }, qv = X.getStringWidth, zT = X.getIndentSize, Eu = fe.builders, Vv = Eu.join, V0 = Eu.hardline, xl = Eu.softline, Uv = Eu.group, U0 = Eu.indent, XT = Eu.align, wl = Eu.lineSuffixBoundary, JT = Eu.addAlignmentToDoc, Wv = fe.printer.printDocToString, YT = fe.utils.mapDoc, KT = I.isBinaryish, QT = I.isJestEachTemplateLiteral, ZT = I.isSimpleTemplateLiteral, Gv = I.hasComment, _T = I.isMemberExpression;
    function Hv(r) {
      return r.replace(/([\\`]|\${)/g, "\\$1");
    }
    var Cu = { printTemplateLiteral: function(e, t, n) {
      var u = e.getValue();
      if (u.type === "TemplateLiteral" && QT(u, e.getParentNode())) {
        var a = function(l, p, f) {
          var d = l.getNode(), D = d.quasis[0].value.raw.trim().split(/\s*\|\s*/);
          if (D.length > 1 || D.some(function(oe) {
            return oe.length > 0;
          })) {
            p.__inJestEach = !0;
            var v = l.map(f, "expressions");
            p.__inJestEach = !1;
            for (var y = [], b = v.map(function(oe) {
              return "${" + Wv(oe, Object.assign({}, p, { printWidth: Number.POSITIVE_INFINITY, endOfLine: "lf" })).formatted + "}";
            }), S = [{ hasLineBreak: !1, cells: [] }], F = 1; F < d.quasis.length; F++) {
              var x = sr(S), w = b[F - 1];
              x.cells.push(w), w.includes(`
`) && (x.hasLineBreak = !0), d.quasis[F].value.raw.includes(`
`) && S.push({ hasLineBreak: !1, cells: [] });
            }
            var A = Math.max.apply(Math, [D.length].concat(_(S.map(function(oe) {
              return oe.cells.length;
            })))), k = Array.from({ length: A }).fill(0), O = [{ cells: D }].concat(_(S.filter(function(oe) {
              return oe.cells.length > 0;
            }))), q = le(O.filter(function(oe) {
              return !oe.hasLineBreak;
            })), H;
            try {
              for (q.s(); !(H = q.n()).done; ) {
                var R = H.value.cells, $ = le(R.entries()), K;
                try {
                  for ($.s(); !(K = $.n()).done; ) {
                    var ne = ke(K.value, 2), ue = ne[0], Ce = ne[1];
                    k[ue] = Math.max(k[ue], qv(Ce));
                  }
                } catch (oe) {
                  $.e(oe);
                } finally {
                  $.f();
                }
              }
            } catch (oe) {
              q.e(oe);
            } finally {
              q.f();
            }
            return y.push(wl, "`", U0([V0, Vv(V0, O.map(function(oe) {
              return Vv(" | ", oe.cells.map(function(ae, ve) {
                return oe.hasLineBreak ? ae : ae + " ".repeat(k[ve] - qv(ae));
              }));
            }))]), V0, "`"), y;
          }
        }(e, n, t);
        if (a)
          return a;
      }
      var i = "expressions";
      u.type === "TSTemplateLiteralType" && (i = "types");
      var o = [], s = e.map(t, i), c = ZT(u);
      return c && (s = s.map(function(l) {
        return Wv(l, Object.assign({}, n, { printWidth: Number.POSITIVE_INFINITY })).formatted;
      })), o.push(wl, "`"), e.each(function(l) {
        var p = l.getName();
        if (o.push(t()), p < s.length) {
          var f = n.tabWidth, d = l.getValue(), D = zT(d.value.raw, f), v = s[p];
          if (!c) {
            var y = u[i][p];
            (Gv(y) || _T(y) || y.type === "ConditionalExpression" || y.type === "SequenceExpression" || y.type === "TSAsExpression" || KT(y)) && (v = [U0([xl, v]), xl]);
          }
          var b = D === 0 && d.value.raw.endsWith(`
`) ? XT(Number.NEGATIVE_INFINITY, v) : JT(v, D, f);
          o.push(Uv(["${", b, wl, "}"]));
        }
      }, "quasis"), o.push("`"), o;
    }, printTemplateExpressions: function(e, t) {
      return e.map(function(n) {
        return function(u, a) {
          var i = u.getValue(), o = a();
          return Gv(i) && (o = Uv([U0([xl, o]), xl])), ["${", o, wl, "}"];
        }(n, t);
      }, "expressions");
    }, escapeTemplateCharacters: function(e, t) {
      return YT(e, function(n) {
        return typeof n == "string" ? t ? n.replace(/(\\*)`/g, "$1$1\\`") : Hv(n) : n;
      });
    }, uncookTemplateElementValue: Hv }, Bl = fe.builders, ex = Bl.indent, zv = Bl.softline, rx = Bl.literalline, tx = Bl.dedentToRoot, nx = Cu.escapeTemplateCharacters, ux = function(e, t, n) {
      var u = e.getValue().quasis[0].value.raw.replace(/((?:\\\\)*)\\`/g, function(s, c) {
        return "\\".repeat(c.length / 2) + "`";
      }), a = function(s) {
        var c = s.match(/^([^\S\n]*)\S/m);
        return c === null ? "" : c[1];
      }(u), i = a !== "";
      i && (u = u.replace(new RegExp("^".concat(a), "gm"), ""));
      var o = nx(n(u, { parser: "markdown", __inJsTemplate: !0 }, { stripTrailingHardline: !0 }), !0);
      return ["`", i ? ex([zv, o]) : [rx, tx(o)], zv, "`"];
    }, ax = X.isNonEmptyArray, W0 = fe.builders, ix = W0.indent, ox = W0.hardline, sx = W0.softline, G0 = fe.utils, cx = G0.mapDoc, lx = G0.replaceNewlinesWithLiterallines, px = G0.cleanDoc, fx = Cu.printTemplateExpressions, dx = function(e, t, n) {
      var u = e.getValue(), a = u.quasis.map(function(o) {
        return o.value.raw;
      }), i = 0;
      return function(o, s, c) {
        if (s.quasis.length === 1 && !s.quasis[0].value.raw.trim())
          return "``";
        var l = function(p, f) {
          if (!ax(f))
            return p;
          var d = 0, D = cx(px(p), function(v) {
            return typeof v == "string" && v.includes("@prettier-placeholder") ? v.split(/@prettier-placeholder-(\d+)-id/).map(function(y, b) {
              return b % 2 == 0 ? lx(y) : (d++, f[y]);
            }) : v;
          });
          return f.length === d ? D : null;
        }(o, c);
        if (!l)
          throw new Error("Couldn't insert all the expressions");
        return ["`", ix([ox, l]), sx, "`"];
      }(n(a.reduce(function(o, s, c) {
        return c === 0 ? s : o + "@prettier-placeholder-" + i++ + "-id" + s;
      }, ""), { parser: "scss" }, { stripTrailingHardline: !0 }), u, fx(e, t));
    }, H0 = fe.builders, hx = H0.indent, Xv = H0.join, Ss = H0.hardline, Dx = Cu.escapeTemplateCharacters, gx = Cu.printTemplateExpressions;
    function mx(r) {
      var e = [], t = !1, n = r.map(function(c) {
        return c.trim();
      }), u = le(n.entries()), a;
      try {
        for (u.s(); !(a = u.n()).done; ) {
          var i = ke(a.value, 2), o = i[0], s = i[1];
          s !== "" && (n[o - 1] === "" && t ? e.push([Ss, s]) : e.push(s), t = !0);
        }
      } catch (c) {
        u.e(c);
      } finally {
        u.f();
      }
      return e.length === 0 ? null : Xv(Ss, e);
    }
    var vx = function(e, t, n) {
      var u = e.getValue(), a = u.quasis.length;
      if (a === 1 && u.quasis[0].value.raw.trim() === "")
        return "``";
      for (var i = gx(e, t), o = [], s = 0; s < a; s++) {
        var c = s === 0, l = s === a - 1, p = u.quasis[s].value.cooked, f = p.split(`
`), d = f.length, D = i[s], v = d > 2 && f[0].trim() === "" && f[1].trim() === "", y = d > 2 && f[d - 1].trim() === "" && f[d - 2].trim() === "", b = f.every(function(F) {
          return /^\s*(?:#[^\n\r]*)?$/.test(F);
        });
        if (!l && /#[^\n\r]*$/.test(f[d - 1]))
          return null;
        var S = null;
        S = b ? mx(f) : n(p, { parser: "graphql" }, { stripTrailingHardline: !0 }), S ? (S = Dx(S, !1), !c && v && o.push(""), o.push(S), !l && y && o.push("")) : c || l || !v || o.push(""), D && o.push(D);
      }
      return ["`", hx([Ss, Xv(Ss, o)]), Ss, "`"];
    }, kl = fe.builders, Jv = kl.indent, yx = kl.line, Ex = kl.hardline, Nl = kl.group, Cx = fe.utils.mapDoc, Ax = Cu.printTemplateExpressions, bx = Cu.uncookTemplateElementValue, z0 = 0, Fx = function(e, t, n, u, a) {
      var i = a.parser, o = e.getValue(), s = z0;
      z0 = z0 + 1 >>> 0;
      var c = function(x) {
        return "PRETTIER_HTML_PLACEHOLDER_".concat(x, "_").concat(s, "_IN_JS");
      }, l = o.quasis.map(function(F, x, w) {
        return x === w.length - 1 ? F.value.cooked : F.value.cooked + c(x);
      }).join(""), p = Ax(e, t);
      if (p.length === 0 && l.trim().length === 0)
        return "``";
      var f = new RegExp(c("(\\d+)"), "g"), d = 0, D = n(l, { parser: i, __onHtmlRoot: function(x) {
        d = x.children.length;
      } }, { stripTrailingHardline: !0 }), v = Cx(D, function(F) {
        if (typeof F != "string")
          return F;
        for (var x = [], w = F.split(f), A = 0; A < w.length; A++) {
          var k = w[A];
          if (A % 2 == 0) {
            k && (k = bx(k), u.__embeddedInHtml && (k = k.replace(/<\/(script)\b/gi, "<\\/$1")), x.push(k));
            continue;
          }
          var O = Number(k);
          x.push(p[O]);
        }
        return x;
      }), y = /^\s/.test(l) ? " " : "", b = /\s$/.test(l) ? " " : "", S = u.htmlWhitespaceSensitivity === "ignore" ? Ex : y && b ? yx : null;
      return Nl(S ? ["`", Jv([S, Nl(v)]), S, "`"] : ["`", y, d > 1 ? Jv(Nl(v)) : Nl(v), b, "`"]);
    }, Sx = I.hasComment, Yv = I.CommentCheckFlags;
    function Tx(r) {
      return function(e) {
        var t = e.getValue(), n = e.getParentNode(), u = e.getParentNode(1);
        return u && t.quasis && n.type === "JSXExpressionContainer" && u.type === "JSXElement" && u.openingElement.name.name === "style" && u.openingElement.attributes.some(function(a) {
          return a.name.name === "jsx";
        }) || n && n.type === "TaggedTemplateExpression" && n.tag.type === "Identifier" && n.tag.name === "css" || n && n.type === "TaggedTemplateExpression" && n.tag.type === "MemberExpression" && n.tag.object.name === "css" && (n.tag.property.name === "global" || n.tag.property.name === "resolve");
      }(r) || function(e) {
        var t = e.getParentNode();
        if (!t || t.type !== "TaggedTemplateExpression")
          return !1;
        var n = t.tag;
        switch (n.type) {
          case "MemberExpression":
            return Pl(n.object) || Qv(n);
          case "CallExpression":
            return Pl(n.callee) || n.callee.type === "MemberExpression" && (n.callee.object.type === "MemberExpression" && (Pl(n.callee.object.object) || Qv(n.callee.object)) || n.callee.object.type === "CallExpression" && Pl(n.callee.object.callee));
          case "Identifier":
            return n.name === "css";
          default:
            return !1;
        }
      }(r) || function(e) {
        var t = e.getParentNode(), n = e.getParentNode(1);
        return n && t.type === "JSXExpressionContainer" && n.type === "JSXAttribute" && n.name.type === "JSXIdentifier" && n.name.name === "css";
      }(r) || function(e) {
        return e.match.apply(e, [function(t) {
          return t.type === "TemplateLiteral";
        }, function(t, n) {
          return t.type === "ArrayExpression" && n === "elements";
        }, function(t, n) {
          return (t.type === "Property" || t.type === "ObjectProperty") && t.key.type === "Identifier" && t.key.name === "styles" && n === "value";
        }].concat(Kv));
      }(r) ? "css" : function(e) {
        var t = e.getValue(), n = e.getParentNode();
        return Zv(t, "GraphQL") || n && (n.type === "TaggedTemplateExpression" && (n.tag.type === "MemberExpression" && n.tag.object.name === "graphql" && n.tag.property.name === "experimental" || n.tag.type === "Identifier" && (n.tag.name === "gql" || n.tag.name === "graphql")) || n.type === "CallExpression" && n.callee.type === "Identifier" && n.callee.name === "graphql");
      }(r) ? "graphql" : function(e) {
        return Zv(e.getValue(), "HTML") || e.match(function(t) {
          return t.type === "TemplateLiteral";
        }, function(t, n) {
          return t.type === "TaggedTemplateExpression" && t.tag.type === "Identifier" && t.tag.name === "html" && n === "quasi";
        });
      }(r) ? "html" : function(e) {
        return e.match.apply(e, [function(t) {
          return t.type === "TemplateLiteral";
        }, function(t, n) {
          return (t.type === "Property" || t.type === "ObjectProperty") && t.key.type === "Identifier" && t.key.name === "template" && n === "value";
        }].concat(Kv));
      }(r) ? "angular" : function(e) {
        var t = e.getValue(), n = e.getParentNode();
        return n && n.type === "TaggedTemplateExpression" && t.quasis.length === 1 && n.tag.type === "Identifier" && (n.tag.name === "md" || n.tag.name === "markdown");
      }(r) ? "markdown" : void 0;
    }
    var Kv = [function(r, e) {
      return r.type === "ObjectExpression" && e === "properties";
    }, function(r, e) {
      return r.type === "CallExpression" && r.callee.type === "Identifier" && r.callee.name === "Component" && e === "arguments";
    }, function(r, e) {
      return r.type === "Decorator" && e === "expression";
    }];
    function Pl(r) {
      return r.type === "Identifier" && r.name === "styled";
    }
    function Qv(r) {
      return /^[A-Z]/.test(r.object.name) && r.property.name === "extend";
    }
    function Zv(r, e) {
      return Sx(r, Yv.Block | Yv.Leading, function(t) {
        var n = t.value;
        return n === " ".concat(e, " ");
      });
    }
    var xx = function(e, t, n, u) {
      var a = e.getValue();
      if (!(a.type !== "TemplateLiteral" || function(o) {
        var s = o.quasis;
        return s.some(function(c) {
          var l = c.value.cooked;
          return l === null;
        });
      }(a))) {
        var i = Tx(e);
        return i ? i === "markdown" ? ux(e, t, n) : i === "css" ? dx(e, t, n) : i === "graphql" ? vx(e, t, n) : i === "html" || i === "angular" ? Fx(e, t, n, u, { parser: i }) : void 0 : void 0;
      }
    }, wx = I.isBlockComment, Bx = /* @__PURE__ */ new Set(["range", "raw", "comments", "leadingComments", "trailingComments", "innerComments", "extra", "start", "end", "loc", "flags", "errors", "tokens"]), Mi = function(e) {
      var t = le(e.quasis), n;
      try {
        for (t.s(); !(n = t.n()).done; ) {
          var u = n.value;
          delete u.value;
        }
      } catch (a) {
        t.e(a);
      } finally {
        t.f();
      }
    };
    function _v(r, e, t) {
      if (r.type === "Program" && delete e.sourceType, r.type !== "BigIntLiteral" && r.type !== "BigIntLiteralTypeAnnotation" || e.value && (e.value = e.value.toLowerCase()), r.type !== "BigIntLiteral" && r.type !== "Literal" || e.bigint && (e.bigint = e.bigint.toLowerCase()), r.type === "DecimalLiteral" && (e.value = Number(e.value)), r.type === "EmptyStatement" || r.type === "JSXText" || r.type === "JSXExpressionContainer" && (r.expression.type === "Literal" || r.expression.type === "StringLiteral") && r.expression.value === " ")
        return null;
      if (r.type !== "Property" && r.type !== "ObjectProperty" && r.type !== "MethodDefinition" && r.type !== "ClassProperty" && r.type !== "ClassMethod" && r.type !== "PropertyDefinition" && r.type !== "TSDeclareMethod" && r.type !== "TSPropertySignature" && r.type !== "ObjectTypeProperty" || Se(r.key) != "object" || !r.key || r.key.type !== "Literal" && r.key.type !== "NumericLiteral" && r.key.type !== "StringLiteral" && r.key.type !== "Identifier" || delete e.key, r.type === "JSXElement" && r.openingElement.name.name === "style" && r.openingElement.attributes.some(function(v) {
        return v.name.name === "jsx";
      })) {
        var n = le(e.children), u;
        try {
          for (n.s(); !(u = n.n()).done; ) {
            var a = u.value, i = a.type, o = a.expression;
            i === "JSXExpressionContainer" && o.type === "TemplateLiteral" && Mi(o);
          }
        } catch (v) {
          n.e(v);
        } finally {
          n.f();
        }
      }
      r.type === "JSXAttribute" && r.name.name === "css" && r.value.type === "JSXExpressionContainer" && r.value.expression.type === "TemplateLiteral" && Mi(e.value.expression), r.type === "JSXAttribute" && r.value && r.value.type === "Literal" && /["']|&quot;|&apos;/.test(r.value.value) && (e.value.value = e.value.value.replace(/["']|&quot;|&apos;/g, '"'));
      var s = r.expression || r.callee;
      if (r.type === "Decorator" && s.type === "CallExpression" && s.callee.name === "Component" && s.arguments.length === 1) {
        var c = r.expression.arguments[0].properties, l = le(e.expression.arguments[0].properties.entries()), p;
        try {
          for (l.s(); !(p = l.n()).done; ) {
            var f = ke(p.value, 2), d = f[0], D = f[1];
            switch (c[d].key.name) {
              case "styles":
                D.value.type === "ArrayExpression" && Mi(D.value.elements[0]);
                break;
              case "template":
                D.value.type === "TemplateLiteral" && Mi(D.value);
            }
          }
        } catch (v) {
          l.e(v);
        } finally {
          l.f();
        }
      }
      return r.type !== "TaggedTemplateExpression" || r.tag.type !== "MemberExpression" && (r.tag.type !== "Identifier" || r.tag.name !== "gql" && r.tag.name !== "graphql" && r.tag.name !== "css" && r.tag.name !== "md" && r.tag.name !== "markdown" && r.tag.name !== "html") && r.tag.type !== "CallExpression" || Mi(e.quasi), r.type === "TemplateLiteral" && (r.leadingComments && r.leadingComments.some(function(v) {
        return wx(v) && ["GraphQL", "HTML"].some(function(y) {
          return v.value === " ".concat(y, " ");
        });
      }) || t.type === "CallExpression" && t.callee.name === "graphql" || !r.leadingComments) && Mi(e), r.type === "InterpreterDirective" && (e.value = e.value.trimEnd()), r.type !== "TSIntersectionType" && r.type !== "TSUnionType" || r.types.length !== 1 ? void 0 : e.types[0];
    }
    _v.ignoredProperties = Bx;
    var kx = _v, ey = function(e) {
      if (typeof e != "string")
        throw new TypeError("Expected a string");
      var t = e.match(/(?:\r?\n)/g) || [];
      if (t.length !== 0) {
        var n = t.filter(function(u) {
          return u === `\r
`;
        }).length;
        return n > t.length - n ? `\r
` : `
`;
      }
    }, ry = ey;
    ry.graceful = function(r) {
      return typeof r == "string" && ey(r) || `
`;
    };
    var Nx = function(e) {
      var t = e.match(ty);
      return t ? t[0].trimLeft() : "";
    }, Px = function(e) {
      var t = e.match(ty);
      return t && t[0] ? e.substring(t[0].length) : e;
    }, Ix = function(e) {
      return iy(e).pragmas;
    }, Ox = iy, Lx = function(e) {
      var t = e.comments, n = t === void 0 ? "" : t, u = e.pragmas, a = u === void 0 ? {} : u, i = (0, J0().default)(n) || X0().EOL, o = " *", s = Object.keys(a), c = s.map(function(f) {
        return oy(f, a[f]);
      }).reduce(function(f, d) {
        return f.concat(d);
      }, []).map(function(f) {
        return " * " + f + i;
      }).join("");
      if (!n) {
        if (s.length === 0)
          return "";
        if (s.length === 1 && !Array.isArray(a[s[0]])) {
          var l = a[s[0]];
          return "".concat("/**", " ").concat(oy(s[0], l)[0]).concat(" */");
        }
      }
      var p = n.split(i).map(function(f) {
        return "".concat(o, " ").concat(f);
      }).join(i) + i;
      return "/**" + i + (n ? p : "") + (n && s.length ? o + i : "") + c + " */";
    };
    function X0() {
      var r = JF;
      return X0 = function() {
        return r;
      }, r;
    }
    function J0() {
      var r = function(e) {
        return e && e.__esModule ? e : { default: e };
      }(ry);
      return J0 = function() {
        return r;
      }, r;
    }
    var Rx = /\*\/$/, Mx = /^\/\*\*/, ty = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/, jx = /(^|\s+)\/\/([^\r\n]*)/g, ny = /^(\r?\n)+/, $x = /(?:^|\r?\n) *(@[^\r\n]*?) *\r?\n *(?![^@\r\n]*\/\/[^]*)([^@\r\n\s][^@\r\n]+?) *\r?\n/g, uy = /(?:^|\r?\n) *@(\S+) *([^\r\n]*)/g, qx = /(\r?\n|^) *\* ?/g, ay = [];
    function iy(r) {
      var e = (0, J0().default)(r) || X0().EOL;
      r = r.replace(Mx, "").replace(Rx, "").replace(qx, "$1");
      for (var t = ""; t !== r; )
        t = r, r = r.replace($x, "".concat(e, "$1 $2").concat(e));
      r = r.replace(ny, "").trimRight();
      for (var n = /* @__PURE__ */ Object.create(null), u = r.replace(uy, "").replace(ny, "").trimRight(), a; a = uy.exec(r); ) {
        var i = a[2].replace(jx, "");
        typeof n[a[1]] == "string" || Array.isArray(n[a[1]]) ? n[a[1]] = ay.concat(n[a[1]], i) : n[a[1]] = i;
      }
      return { comments: u, pragmas: n };
    }
    function oy(r, e) {
      return ay.concat(e).map(function(t) {
        return "@".concat(r, " ").concat(t).trim();
      });
    }
    var Il = Object.defineProperty({ extract: Nx, strip: Px, parse: Ix, parseWithComments: Ox, print: Lx }, "__esModule", { value: !0 }), Vx = Il.parseWithComments, Ux = Il.strip, Wx = Il.extract, Gx = Il.print, Hx = X.getShebang, zx = du.normalizeEndOfLine;
    function sy(r) {
      var e = Hx(r);
      e && (r = r.slice(e.length + 1));
      var t = Wx(r), n = Vx(t), u = n.pragmas, a = n.comments;
      return { shebang: e, text: r, pragmas: u, comments: a };
    }
    var Y0 = { hasPragma: function(e) {
      var t = Object.keys(sy(e).pragmas);
      return t.includes("prettier") || t.includes("format");
    }, insertPragma: function(e) {
      var t = sy(e), n = t.shebang, u = t.text, a = t.pragmas, i = t.comments, o = Ux(u), s = Gx({ pragmas: Object.assign({ format: "" }, a), comments: i.trimStart() });
      return (n ? "".concat(n, `
`) : "") + zx(s) + (o.startsWith(`
`) ? `
` : `

`) + o;
    } }, cy = X.getLast, Xx = X.hasNewline, K0 = X.getNextNonSpaceNonCommentCharacterIndexWithStartIndex, pa = X.getNextNonSpaceNonCommentCharacter, Jx = X.hasNewlineInRange, kr = X.addLeadingComment, zr = X.addTrailingComment, zn = X.addDanglingComment, Yx = X.getNextNonSpaceNonCommentCharacterIndex, ly = X.isNonEmptyArray, py = I.isBlockComment, Ol = I.getFunctionParameters, Q0 = I.isPrettierIgnoreComment, Kx = I.isJsxNode, Qx = I.hasFlowShorthandAnnotationComment, fy = I.hasFlowAnnotationComment, Zx = I.hasIgnoreComment, _x = I.isCallLikeExpression, ew = I.getCallArguments, dy = I.isCallExpression, rw = I.isMemberExpression, hy = tr.locStart, Rt = tr.locEnd;
    function ji(r, e) {
      var t = (r.body || r.properties).find(function(n) {
        var u = n.type;
        return u !== "EmptyStatement";
      });
      t ? kr(t, e) : zn(r, e);
    }
    function Z0(r, e) {
      r.type === "BlockStatement" ? ji(r, e) : kr(r, e);
    }
    function tw(r) {
      var e = r.comment, t = r.followingNode;
      return !(!t || !by(e)) && (kr(t, e), !0);
    }
    function _0(r) {
      var e = r.comment, t = r.precedingNode, n = r.enclosingNode, u = r.followingNode, a = r.text;
      return !n || n.type !== "IfStatement" || !u ? !1 : pa(a, e, Rt) === ")" ? (zr(t, e), !0) : t === n.consequent && u === n.alternate ? (t.type === "BlockStatement" ? zr(t, e) : zn(n, e), !0) : u.type === "BlockStatement" ? (ji(u, e), !0) : u.type === "IfStatement" ? (Z0(u.consequent, e), !0) : n.consequent === u && (kr(u, e), !0);
    }
    function ed(r) {
      var e = r.comment, t = r.precedingNode, n = r.enclosingNode, u = r.followingNode, a = r.text;
      return !n || n.type !== "WhileStatement" || !u ? !1 : pa(a, e, Rt) === ")" ? (zr(t, e), !0) : u.type === "BlockStatement" ? (ji(u, e), !0) : n.body === u && (kr(u, e), !0);
    }
    function Dy(r) {
      var e = r.comment, t = r.precedingNode, n = r.enclosingNode, u = r.followingNode;
      return !(!n || n.type !== "TryStatement" && n.type !== "CatchClause" || !u) && (n.type === "CatchClause" && t ? (zr(t, e), !0) : u.type === "BlockStatement" ? (ji(u, e), !0) : u.type === "TryStatement" ? (Z0(u.finalizer, e), !0) : u.type === "CatchClause" && (Z0(u.body, e), !0));
    }
    function nw(r) {
      var e = r.comment, t = r.enclosingNode, n = r.followingNode;
      return !(!rw(t) || !n || n.type !== "Identifier") && (kr(t, e), !0);
    }
    function uw(r) {
      var e = r.comment, t = r.precedingNode, n = r.enclosingNode, u = r.followingNode, a = r.text, i = t && !Jx(a, Rt(t), hy(e));
      return !(t && i || !n || n.type !== "ConditionalExpression" && n.type !== "TSConditionalType" || !u) && (kr(u, e), !0);
    }
    function aw(r) {
      var e = r.comment, t = r.precedingNode, n = r.enclosingNode;
      return !(!n || n.type !== "ObjectProperty" && n.type !== "Property" || !n.shorthand || n.key !== t || n.value.type !== "AssignmentPattern") && (zr(n.value.left, e), !0);
    }
    function gy(r) {
      var e = r.comment, t = r.precedingNode, n = r.enclosingNode, u = r.followingNode;
      if (n && (n.type === "ClassDeclaration" || n.type === "ClassExpression" || n.type === "DeclareClass" || n.type === "DeclareInterface" || n.type === "InterfaceDeclaration" || n.type === "TSInterfaceDeclaration")) {
        if (ly(n.decorators) && (!u || u.type !== "Decorator"))
          return zr(cy(n.decorators), e), !0;
        if (n.body && u === n.body)
          return ji(n.body, e), !0;
        if (u)
          for (var a = 0, i = ["implements", "extends", "mixins"]; a < i.length; a++) {
            var o = i[a];
            if (n[o] && u === n[o][0])
              return !t || t !== n.id && t !== n.typeParameters && t !== n.superClass ? zn(n, e, o) : zr(t, e), !0;
          }
      }
      return !1;
    }
    function my(r) {
      var e = r.comment, t = r.precedingNode, n = r.enclosingNode, u = r.text;
      return (n && t && (n.type === "Property" || n.type === "TSDeclareMethod" || n.type === "TSAbstractMethodDefinition") && t.type === "Identifier" && n.key === t && pa(u, t, Rt) !== ":" || !(!t || !n || t.type !== "Decorator" || n.type !== "ClassMethod" && n.type !== "ClassProperty" && n.type !== "PropertyDefinition" && n.type !== "TSAbstractClassProperty" && n.type !== "TSAbstractMethodDefinition" && n.type !== "TSDeclareMethod" && n.type !== "MethodDefinition")) && (zr(t, e), !0);
    }
    function iw(r) {
      var e = r.comment, t = r.precedingNode, n = r.enclosingNode, u = r.text;
      return pa(u, e, Rt) === "(" && !(!t || !n || n.type !== "FunctionDeclaration" && n.type !== "FunctionExpression" && n.type !== "ClassMethod" && n.type !== "MethodDefinition" && n.type !== "ObjectMethod") && (zr(t, e), !0);
    }
    function ow(r) {
      var e = r.comment, t = r.enclosingNode, n = r.text;
      if (!t || t.type !== "ArrowFunctionExpression")
        return !1;
      var u = Yx(n, e, Rt);
      return u !== !1 && n.slice(u, u + 2) === "=>" && (zn(t, e), !0);
    }
    function sw(r) {
      var e = r.comment, t = r.enclosingNode, n = r.text;
      return pa(n, e, Rt) === ")" && (t && (Ay(t) && Ol(t).length === 0 || _x(t) && ew(t).length === 0) ? (zn(t, e), !0) : !(!t || t.type !== "MethodDefinition" && t.type !== "TSAbstractMethodDefinition" || Ol(t.value).length !== 0) && (zn(t.value, e), !0));
    }
    function vy(r) {
      var e = r.comment, t = r.precedingNode, n = r.enclosingNode, u = r.followingNode, a = r.text;
      if (t && t.type === "FunctionTypeParam" && n && n.type === "FunctionTypeAnnotation" && u && u.type !== "FunctionTypeParam" || t && (t.type === "Identifier" || t.type === "AssignmentPattern") && n && Ay(n) && pa(a, e, Rt) === ")")
        return zr(t, e), !0;
      if (n && n.type === "FunctionDeclaration" && u && u.type === "BlockStatement") {
        var i = function() {
          var o = Ol(n);
          if (o.length > 0)
            return K0(a, Rt(cy(o)));
          var s = K0(a, Rt(n.id));
          return s !== !1 && K0(a, s + 1);
        }();
        if (hy(e) > i)
          return ji(u, e), !0;
      }
      return !1;
    }
    function yy(r) {
      var e = r.comment, t = r.enclosingNode;
      return !(!t || t.type !== "ImportSpecifier") && (kr(t, e), !0);
    }
    function Ey(r) {
      var e = r.comment, t = r.enclosingNode;
      return !(!t || t.type !== "LabeledStatement") && (kr(t, e), !0);
    }
    function cw(r) {
      var e = r.comment, t = r.enclosingNode;
      return !(!t || t.type !== "ContinueStatement" && t.type !== "BreakStatement" || t.label) && (zr(t, e), !0);
    }
    function lw(r) {
      var e = r.comment, t = r.precedingNode, n = r.enclosingNode;
      return !!(dy(n) && t && n.callee === t && n.arguments.length > 0) && (kr(n.arguments[0], e), !0);
    }
    function pw(r) {
      var e = r.comment, t = r.precedingNode, n = r.enclosingNode, u = r.followingNode;
      return !n || n.type !== "UnionTypeAnnotation" && n.type !== "TSUnionType" ? (u && (u.type === "UnionTypeAnnotation" || u.type === "TSUnionType") && Q0(e) && (u.types[0].prettierIgnore = !0, e.unignore = !0), !1) : (Q0(e) && (u.prettierIgnore = !0, e.unignore = !0), !!t && (zr(t, e), !0));
    }
    function fw(r) {
      var e = r.comment, t = r.enclosingNode;
      return !(!t || t.type !== "Property" && t.type !== "ObjectProperty") && (kr(t, e), !0);
    }
    function rd(r) {
      var e = r.comment, t = r.enclosingNode, n = r.followingNode, u = r.ast, a = r.isLastComment;
      return u && u.body && u.body.length === 0 ? (a ? zn(u, e) : kr(u, e), !0) : t && t.type === "Program" && t.body.length === 0 && t.directives && t.directives.length === 0 ? (a ? zn(t, e) : kr(t, e), !0) : !(!n || n.type !== "Program" || n.body.length !== 0 || !t || t.type !== "ModuleExpression") && (zn(n, e), !0);
    }
    function dw(r) {
      var e = r.comment, t = r.enclosingNode;
      return !(!t || t.type !== "ForInStatement" && t.type !== "ForOfStatement") && (kr(t, e), !0);
    }
    function hw(r) {
      var e = r.comment, t = r.precedingNode, n = r.enclosingNode, u = r.text;
      return !!(t && t.type === "ImportSpecifier" && n && n.type === "ImportDeclaration" && Xx(u, Rt(e))) && (zr(t, e), !0);
    }
    function Dw(r) {
      var e = r.comment, t = r.enclosingNode;
      return !(!t || t.type !== "AssignmentPattern") && (kr(t, e), !0);
    }
    function gw(r) {
      var e = r.comment, t = r.enclosingNode;
      return !(!t || t.type !== "TypeAlias") && (kr(t, e), !0);
    }
    function mw(r) {
      var e = r.comment, t = r.enclosingNode, n = r.followingNode;
      return !(!t || t.type !== "VariableDeclarator" && t.type !== "AssignmentExpression" || !n || n.type !== "ObjectExpression" && n.type !== "ArrayExpression" && n.type !== "TemplateLiteral" && n.type !== "TaggedTemplateExpression" && !py(e)) && (kr(n, e), !0);
    }
    function vw(r) {
      var e = r.comment, t = r.enclosingNode, n = r.followingNode, u = r.text;
      return !(n || !t || t.type !== "TSMethodSignature" && t.type !== "TSDeclareFunction" && t.type !== "TSAbstractMethodDefinition" || pa(u, e, Rt) !== ";") && (zr(t, e), !0);
    }
    function Cy(r) {
      var e = r.comment, t = r.enclosingNode, n = r.followingNode;
      if (Q0(e) && t && t.type === "TSMappedType" && n && n.type === "TSTypeParameter" && n.constraint)
        return t.prettierIgnore = !0, e.unignore = !0, !0;
    }
    function yw(r) {
      var e = r.comment, t = r.precedingNode, n = r.enclosingNode, u = r.followingNode;
      return !(!n || n.type !== "TSMappedType") && (u && u.type === "TSTypeParameter" && u.name ? (kr(u.name, e), !0) : !(!t || t.type !== "TSTypeParameter" || !t.constraint) && (zr(t.constraint, e), !0));
    }
    function Ay(r) {
      return r.type === "ArrowFunctionExpression" || r.type === "FunctionExpression" || r.type === "FunctionDeclaration" || r.type === "ObjectMethod" || r.type === "ClassMethod" || r.type === "TSDeclareFunction" || r.type === "TSCallSignatureDeclaration" || r.type === "TSConstructSignatureDeclaration" || r.type === "TSMethodSignature" || r.type === "TSConstructorType" || r.type === "TSFunctionType" || r.type === "TSDeclareMethod";
    }
    function by(r) {
      return py(r) && r.value[0] === "*" && /@type\b/.test(r.value);
    }
    var $i = { handleOwnLineComment: function(e) {
      return [Cy, vy, nw, _0, ed, Dy, gy, yy, dw, pw, rd, hw, Dw, my, Ey].some(function(t) {
        return t(e);
      });
    }, handleEndOfLineComment: function(e) {
      return [tw, vy, uw, yy, _0, ed, Dy, gy, Ey, lw, fw, rd, gw, mw].some(function(t) {
        return t(e);
      });
    }, handleRemainingComment: function(e) {
      return [Cy, _0, ed, aw, sw, my, rd, ow, iw, yw, cw, vw].some(function(t) {
        return t(e);
      });
    }, isTypeCastComment: by, getCommentChildNodes: function(e, t) {
      if ((t.parser === "typescript" || t.parser === "flow" || t.parser === "espree" || t.parser === "meriyah") && e.type === "MethodDefinition" && e.value && e.value.type === "FunctionExpression" && Ol(e.value).length === 0 && !e.value.returnType && !ly(e.value.typeParameters) && e.value.body)
        return [].concat(_(e.decorators || []), [e.key, e.value.body]);
    }, willPrintOwnComments: function(e) {
      var t = e.getValue(), n = e.getParentNode();
      return (t && (Kx(t) || Qx(t) || dy(n) && (fy(t.leadingComments) || fy(t.trailingComments))) || n && (n.type === "JSXSpreadAttribute" || n.type === "JSXSpreadChild" || n.type === "UnionTypeAnnotation" || n.type === "TSUnionType" || (n.type === "ClassDeclaration" || n.type === "ClassExpression") && n.superClass === t)) && (!Zx(e) || n.type === "UnionTypeAnnotation" || n.type === "TSUnionType");
    } }, Ew = I.getFunctionParameters, Cw = I.getLeftSidePathName, Aw = I.hasFlowShorthandAnnotationComment, bw = I.hasNakedLeftSide, Fy = I.hasNode, Fw = I.isBitwiseOperator, Sy = I.startsWithNoLookaheadToken, Sw = I.shouldFlatten, Ty = I.getPrecedence, xy = I.isCallExpression, Tw = I.isMemberExpression;
    function td(r, e) {
      var t = r.getParentNode();
      if (!t)
        return !1;
      var n = r.getName(), u = r.getNode();
      if (e.__isInHtmlInterpolation && !e.bracketSpacing && function(F) {
        switch (F.type) {
          case "ObjectExpression":
            return !0;
          default:
            return !1;
        }
      }(u) && Ts(r))
        return !0;
      if (function(F) {
        return F.type === "BlockStatement" || F.type === "BreakStatement" || F.type === "ClassBody" || F.type === "ClassDeclaration" || F.type === "ClassMethod" || F.type === "ClassProperty" || F.type === "PropertyDefinition" || F.type === "ClassPrivateProperty" || F.type === "ContinueStatement" || F.type === "DebuggerStatement" || F.type === "DeclareClass" || F.type === "DeclareExportAllDeclaration" || F.type === "DeclareExportDeclaration" || F.type === "DeclareFunction" || F.type === "DeclareInterface" || F.type === "DeclareModule" || F.type === "DeclareModuleExports" || F.type === "DeclareVariable" || F.type === "DoWhileStatement" || F.type === "EnumDeclaration" || F.type === "ExportAllDeclaration" || F.type === "ExportDefaultDeclaration" || F.type === "ExportNamedDeclaration" || F.type === "ExpressionStatement" || F.type === "ForInStatement" || F.type === "ForOfStatement" || F.type === "ForStatement" || F.type === "FunctionDeclaration" || F.type === "IfStatement" || F.type === "ImportDeclaration" || F.type === "InterfaceDeclaration" || F.type === "LabeledStatement" || F.type === "MethodDefinition" || F.type === "ReturnStatement" || F.type === "SwitchStatement" || F.type === "ThrowStatement" || F.type === "TryStatement" || F.type === "TSDeclareFunction" || F.type === "TSEnumDeclaration" || F.type === "TSImportEqualsDeclaration" || F.type === "TSInterfaceDeclaration" || F.type === "TSModuleDeclaration" || F.type === "TSNamespaceExportDeclaration" || F.type === "TypeAlias" || F.type === "VariableDeclaration" || F.type === "WhileStatement" || F.type === "WithStatement";
      }(u))
        return !1;
      if (e.parser !== "flow" && Aw(r.getValue()))
        return !0;
      if (u.type === "Identifier")
        return !!(u.extra && u.extra.parenthesized && /^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(u.name)) || n === "left" && u.name === "async" && t.type === "ForOfStatement" && !t.await;
      switch (t.type) {
        case "ParenthesizedExpression":
          return !1;
        case "ClassDeclaration":
        case "ClassExpression":
          if (n === "superClass" && (u.type === "ArrowFunctionExpression" || u.type === "AssignmentExpression" || u.type === "AwaitExpression" || u.type === "BinaryExpression" || u.type === "ConditionalExpression" || u.type === "LogicalExpression" || u.type === "NewExpression" || u.type === "ObjectExpression" || u.type === "ParenthesizedExpression" || u.type === "SequenceExpression" || u.type === "TaggedTemplateExpression" || u.type === "UnaryExpression" || u.type === "UpdateExpression" || u.type === "YieldExpression" || u.type === "TSNonNullExpression"))
            return !0;
          break;
        case "ExportDefaultDeclaration":
          return wy(r, e) || u.type === "SequenceExpression";
        case "Decorator":
          if (n === "expression") {
            for (var a = !1, i = !1, o = u; o; )
              switch (o.type) {
                case "MemberExpression":
                  i = !0, o = o.object;
                  break;
                case "CallExpression":
                  if (i || a)
                    return !0;
                  a = !0, o = o.callee;
                  break;
                case "Identifier":
                  return !1;
                default:
                  return !0;
              }
            return !0;
          }
          break;
        case "ExpressionStatement":
          if (Sy(u, !0))
            return !0;
          break;
        case "ArrowFunctionExpression":
          if (n === "body" && u.type !== "SequenceExpression" && Sy(u, !1))
            return !0;
      }
      switch (u.type) {
        case "UpdateExpression":
          if (t.type === "UnaryExpression")
            return u.prefix && (u.operator === "++" && t.operator === "+" || u.operator === "--" && t.operator === "-");
        case "UnaryExpression":
          switch (t.type) {
            case "UnaryExpression":
              return u.operator === t.operator && (u.operator === "+" || u.operator === "-");
            case "BindExpression":
              return !0;
            case "MemberExpression":
            case "OptionalMemberExpression":
              return n === "object";
            case "TaggedTemplateExpression":
              return !0;
            case "NewExpression":
            case "CallExpression":
            case "OptionalCallExpression":
              return n === "callee";
            case "BinaryExpression":
              return n === "left" && t.operator === "**";
            case "TSNonNullExpression":
              return !0;
            default:
              return !1;
          }
        case "BinaryExpression":
          if (t.type === "UpdateExpression" || t.type === "PipelineTopicExpression" && u.operator === "|>" || u.operator === "in" && function(F) {
            for (var x = 0, w = F.getValue(); w; ) {
              var A = F.getParentNode(x++);
              if (A && A.type === "ForStatement" && A.init === w)
                return !0;
              w = A;
            }
            return !1;
          }(r))
            return !0;
          if (u.operator === "|>" && u.extra && u.extra.parenthesized) {
            var s = r.getParentNode(1);
            if (s.type === "BinaryExpression" && s.operator === "|>")
              return !0;
          }
        case "TSTypeAssertion":
        case "TSAsExpression":
        case "LogicalExpression":
          switch (t.type) {
            case "TSAsExpression":
              return u.type !== "TSAsExpression";
            case "ConditionalExpression":
              return u.type === "TSAsExpression";
            case "CallExpression":
            case "NewExpression":
            case "OptionalCallExpression":
              return n === "callee";
            case "ClassExpression":
            case "ClassDeclaration":
              return n === "superClass";
            case "TSTypeAssertion":
            case "TaggedTemplateExpression":
            case "UnaryExpression":
            case "JSXSpreadAttribute":
            case "SpreadElement":
            case "SpreadProperty":
            case "BindExpression":
            case "AwaitExpression":
            case "TSNonNullExpression":
            case "UpdateExpression":
              return !0;
            case "MemberExpression":
            case "OptionalMemberExpression":
              return n === "object";
            case "AssignmentExpression":
            case "AssignmentPattern":
              return n === "left" && (u.type === "TSTypeAssertion" || u.type === "TSAsExpression");
            case "LogicalExpression":
              if (u.type === "LogicalExpression")
                return t.operator !== u.operator;
            case "BinaryExpression": {
              var c = u.operator, l = u.type;
              if (!c && l !== "TSTypeAssertion")
                return !0;
              var p = Ty(c), f = t.operator, d = Ty(f);
              return d > p || n === "right" && d === p || d === p && !Sw(f, c) || (d < p && c === "%" ? f === "+" || f === "-" : !!Fw(f));
            }
            default:
              return !1;
          }
        case "SequenceExpression":
          switch (t.type) {
            case "ReturnStatement":
            case "ForStatement":
              return !1;
            case "ExpressionStatement":
              return n !== "expression";
            case "ArrowFunctionExpression":
              return n !== "body";
            default:
              return !0;
          }
        case "YieldExpression":
          if (t.type === "UnaryExpression" || t.type === "AwaitExpression" || t.type === "TSAsExpression" || t.type === "TSNonNullExpression" || n === "expression" && u.argument && u.argument.type === "PipelinePrimaryTopicReference" && t.type === "PipelineTopicExpression")
            return !0;
        case "AwaitExpression":
          switch (t.type) {
            case "TaggedTemplateExpression":
            case "UnaryExpression":
            case "LogicalExpression":
            case "SpreadElement":
            case "SpreadProperty":
            case "TSAsExpression":
            case "TSNonNullExpression":
            case "BindExpression":
              return !0;
            case "MemberExpression":
            case "OptionalMemberExpression":
              return n === "object";
            case "NewExpression":
            case "CallExpression":
            case "OptionalCallExpression":
              return n === "callee";
            case "ConditionalExpression":
              return n === "test";
            case "BinaryExpression":
              return !(!u.argument && t.operator === "|>");
            default:
              return !1;
          }
        case "TSJSDocFunctionType":
        case "TSConditionalType":
          if (n === "extendsType" && t.type === "TSConditionalType")
            return !0;
        case "TSFunctionType":
        case "TSConstructorType":
          if (n === "checkType" && t.type === "TSConditionalType")
            return !0;
        case "TSUnionType":
        case "TSIntersectionType":
          if ((t.type === "TSUnionType" || t.type === "TSIntersectionType") && t.types.length > 1 && (!u.types || u.types.length > 1))
            return !0;
        case "TSInferType":
          if (u.type === "TSInferType" && t.type === "TSRestType")
            return !1;
        case "TSTypeOperator":
          return t.type === "TSArrayType" || t.type === "TSOptionalType" || t.type === "TSRestType" || n === "objectType" && t.type === "TSIndexedAccessType" || t.type === "TSTypeOperator" || t.type === "TSTypeAnnotation" && /^TSJSDoc/.test(r.getParentNode(1).type);
        case "ArrayTypeAnnotation":
          return t.type === "NullableTypeAnnotation";
        case "IntersectionTypeAnnotation":
        case "UnionTypeAnnotation":
          return t.type === "ArrayTypeAnnotation" || t.type === "NullableTypeAnnotation" || t.type === "IntersectionTypeAnnotation" || t.type === "UnionTypeAnnotation";
        case "NullableTypeAnnotation":
          return t.type === "ArrayTypeAnnotation";
        case "FunctionTypeAnnotation": {
          var D = t.type === "NullableTypeAnnotation" ? r.getParentNode(1) : t;
          return D.type === "UnionTypeAnnotation" || D.type === "IntersectionTypeAnnotation" || D.type === "ArrayTypeAnnotation" || D.type === "NullableTypeAnnotation" || t.type === "FunctionTypeParam" && t.name === null && Ew(u).some(function(F) {
            return F.typeAnnotation && F.typeAnnotation.type === "NullableTypeAnnotation";
          });
        }
        case "OptionalIndexedAccessType":
          return n === "objectType" && t.type === "IndexedAccessType";
        case "StringLiteral":
        case "NumericLiteral":
        case "Literal":
          if (typeof u.value == "string" && t.type === "ExpressionStatement" && !t.directive) {
            var v = r.getParentNode(1);
            return v.type === "Program" || v.type === "BlockStatement";
          }
          return n === "object" && t.type === "MemberExpression" && typeof u.value == "number";
        case "AssignmentExpression": {
          var y = r.getParentNode(1);
          return n === "body" && t.type === "ArrowFunctionExpression" || (n !== "key" || t.type !== "ClassProperty" && t.type !== "PropertyDefinition" || !t.computed) && (n !== "init" && n !== "update" || t.type !== "ForStatement") && (t.type === "ExpressionStatement" ? u.left.type === "ObjectPattern" : (n !== "key" || t.type !== "TSPropertySignature") && t.type !== "AssignmentExpression" && (t.type !== "SequenceExpression" || !y || y.type !== "ForStatement" || y.init !== t && y.update !== t) && (n !== "value" || t.type !== "Property" || !y || y.type !== "ObjectPattern" || !y.properties.includes(t)) && t.type !== "NGChainedExpression");
        }
        case "ConditionalExpression":
          switch (t.type) {
            case "TaggedTemplateExpression":
            case "UnaryExpression":
            case "SpreadElement":
            case "SpreadProperty":
            case "BinaryExpression":
            case "LogicalExpression":
            case "NGPipeExpression":
            case "ExportDefaultDeclaration":
            case "AwaitExpression":
            case "JSXSpreadAttribute":
            case "TSTypeAssertion":
            case "TypeCastExpression":
            case "TSAsExpression":
            case "TSNonNullExpression":
              return !0;
            case "NewExpression":
            case "CallExpression":
            case "OptionalCallExpression":
              return n === "callee";
            case "ConditionalExpression":
              return n === "test";
            case "MemberExpression":
            case "OptionalMemberExpression":
              return n === "object";
            default:
              return !1;
          }
        case "FunctionExpression":
          switch (t.type) {
            case "NewExpression":
            case "CallExpression":
            case "OptionalCallExpression":
              return n === "callee";
            case "TaggedTemplateExpression":
              return !0;
            default:
              return !1;
          }
        case "ArrowFunctionExpression":
          switch (t.type) {
            case "PipelineTopicExpression":
              return Boolean(u.extra && u.extra.parenthesized);
            case "BinaryExpression":
              return t.operator !== "|>" || u.extra && u.extra.parenthesized;
            case "NewExpression":
            case "CallExpression":
            case "OptionalCallExpression":
              return n === "callee";
            case "MemberExpression":
            case "OptionalMemberExpression":
              return n === "object";
            case "TSAsExpression":
            case "TSNonNullExpression":
            case "BindExpression":
            case "TaggedTemplateExpression":
            case "UnaryExpression":
            case "LogicalExpression":
            case "AwaitExpression":
            case "TSTypeAssertion":
              return !0;
            case "ConditionalExpression":
              return n === "test";
            default:
              return !1;
          }
        case "ClassExpression":
          switch (t.type) {
            case "NewExpression":
              return n === "callee";
            default:
              return !1;
          }
        case "OptionalMemberExpression":
        case "OptionalCallExpression": {
          var b = r.getParentNode(1);
          if (n === "object" && t.type === "MemberExpression" || n === "callee" && (t.type === "CallExpression" || t.type === "NewExpression") || t.type === "TSNonNullExpression" && b.type === "MemberExpression" && b.object === t)
            return !0;
        }
        case "CallExpression":
        case "MemberExpression":
        case "TaggedTemplateExpression":
        case "TSNonNullExpression":
          if (n === "callee" && (t.type === "BindExpression" || t.type === "NewExpression"))
            for (var S = u; S; )
              switch (S.type) {
                case "CallExpression":
                case "OptionalCallExpression":
                  return !0;
                case "MemberExpression":
                case "OptionalMemberExpression":
                case "BindExpression":
                  S = S.object;
                  break;
                case "TaggedTemplateExpression":
                  S = S.tag;
                  break;
                case "TSNonNullExpression":
                  S = S.expression;
                  break;
                default:
                  return !1;
              }
          return !1;
        case "BindExpression":
          return n === "callee" && (t.type === "BindExpression" || t.type === "NewExpression") || n === "object" && Tw(t);
        case "NGPipeExpression":
          return !(t.type === "NGRoot" || t.type === "NGMicrosyntaxExpression" || t.type === "ObjectProperty" && (!u.extra || !u.extra.parenthesized) || t.type === "ArrayExpression" || xy(t) && t.arguments[n] === u || n === "right" && t.type === "NGPipeExpression" || n === "property" && t.type === "MemberExpression" || t.type === "AssignmentExpression");
        case "JSXFragment":
        case "JSXElement":
          return n === "callee" || n === "left" && t.type === "BinaryExpression" && t.operator === "<" || t.type !== "ArrayExpression" && t.type !== "ArrowFunctionExpression" && t.type !== "AssignmentExpression" && t.type !== "AssignmentPattern" && t.type !== "BinaryExpression" && t.type !== "NewExpression" && t.type !== "ConditionalExpression" && t.type !== "ExpressionStatement" && t.type !== "JsExpressionRoot" && t.type !== "JSXAttribute" && t.type !== "JSXElement" && t.type !== "JSXExpressionContainer" && t.type !== "JSXFragment" && t.type !== "LogicalExpression" && t.type !== "ObjectProperty" && !xy(t) && t.type !== "Property" && t.type !== "ReturnStatement" && t.type !== "ThrowStatement" && t.type !== "TypeCastExpression" && t.type !== "VariableDeclarator" && t.type !== "YieldExpression";
        case "TypeAnnotation":
          return n === "returnType" && t.type === "ArrowFunctionExpression" && function(F) {
            return Fy(F, function(x) {
              return x.type === "ObjectTypeAnnotation" && Fy(x, function(w) {
                return w.type === "FunctionTypeAnnotation" || void 0;
              }) || void 0;
            });
          }(u);
      }
      return !1;
    }
    function Ts(r) {
      var e = r.getValue(), t = r.getParentNode(), n = r.getName();
      switch (t.type) {
        case "NGPipeExpression":
          if (typeof n == "number" && t.arguments[n] === e && t.arguments.length - 1 === n)
            return r.callParent(Ts);
          break;
        case "ObjectProperty":
          if (n === "value") {
            var u = r.getParentNode(1);
            return sr(u.properties) === t;
          }
          break;
        case "BinaryExpression":
        case "LogicalExpression":
          if (n === "right")
            return r.callParent(Ts);
          break;
        case "ConditionalExpression":
          if (n === "alternate")
            return r.callParent(Ts);
          break;
        case "UnaryExpression":
          if (t.prefix)
            return r.callParent(Ts);
      }
      return !1;
    }
    function wy(r, e) {
      var t = r.getValue(), n = r.getParentNode();
      return t.type === "FunctionExpression" || t.type === "ClassExpression" ? n.type === "ExportDefaultDeclaration" || !td(r, e) : !(!bw(t) || n.type !== "ExportDefaultDeclaration" && td(r, e)) && r.call.apply(r, [function(u) {
        return wy(u, e);
      }].concat(_(Cw(r, t))));
    }
    var qi = td, By = function(e, t) {
      switch (t.parser) {
        case "json":
        case "json5":
        case "json-stringify":
        case "__js_expression":
        case "__vue_expression":
          return Object.assign({}, e, { type: t.parser.startsWith("__") ? "JsExpressionRoot" : "JsonRoot", node: e, comments: [], rootMarker: t.rootMarker });
        default:
          return e;
      }
    }, xs = fe.builders, ky = xs.join, Ny = xs.line, xw = xs.group, Py = xs.softline, ww = xs.indent, Iy = { isVueEventBindingExpression: function r(e) {
      switch (e.type) {
        case "MemberExpression":
          switch (e.property.type) {
            case "Identifier":
            case "NumericLiteral":
            case "StringLiteral":
              return r(e.object);
          }
          return !1;
        case "Identifier":
          return !0;
        default:
          return !1;
      }
    }, printHtmlBinding: function(e, t, n) {
      var u = e.getValue();
      if (t.__onHtmlBindingRoot && e.getName() === null && t.__onHtmlBindingRoot(u, t), u.type === "File")
        return t.__isVueForBindingLeft ? e.call(function(a) {
          var i = ky([",", Ny], a.map(n, "params")), o = a.getValue(), s = o.params;
          return s.length === 1 ? i : ["(", ww([Py, xw(i)]), Py, ")"];
        }, "program", "body", 0) : t.__isVueBindings ? e.call(function(a) {
          return ky([",", Ny], a.map(n, "params"));
        }, "program", "body", 0) : void 0;
    } }, Bw = nr.printComments, kw = X.getLast, Au = fe.builders, Nw = Au.join, Oy = Au.line, Ll = Au.softline, Xn = Au.group, nd = Au.indent, Pw = Au.align, Iw = Au.ifBreak, Ow = Au.indentIfBreak, ud = fe.utils, Lw = ud.cleanDoc, Rw = ud.getDocParts, Mw = ud.isConcat, jw = I.hasLeadingOwnLineComment, Ly = I.isBinaryish, Ry = I.isJsxNode, My = I.shouldFlatten, jy = I.hasComment, $y = I.CommentCheckFlags, qy = I.isCallExpression, $w = I.isMemberExpression, qw = 0;
    function Vy(r, e, t, n, u) {
      var a = [], i = r.getValue();
      if (Ly(i)) {
        My(i.operator, i.left.operator) ? a = [].concat(_(a), _(r.call(function(y) {
          return Vy(y, e, t, !0, u);
        }, "left"))) : a.push(Xn(e("left")));
        var o = Rl(i), s = (i.operator === "|>" || i.type === "NGPipeExpression" || i.operator === "|" && t.parser === "__vue_expression") && !jw(t.originalText, i.right), c = i.type === "NGPipeExpression" ? "|" : i.operator, l = i.type === "NGPipeExpression" && i.arguments.length > 0 ? Xn(nd([Ll, ": ", Nw([Ll, ":", Iw(" ")], r.map(e, "arguments").map(function(y) {
          return Pw(2, Xn(y));
        }))])) : "", p = o ? [c, " ", e("right"), l] : [s ? Oy : "", c, s ? " " : Oy, e("right"), l], f = r.getParentNode(), d = jy(i.left, $y.Trailing | $y.Line), D = d || !(u && i.type === "LogicalExpression") && f.type !== i.type && i.left.type !== i.type && i.right.type !== i.type;
        if (a.push(s ? "" : " ", D ? Xn(p, { shouldBreak: d }) : p), n && jy(i)) {
          var v = Lw(Bw(r, a, t));
          a = Mw(v) || v.type === "fill" ? Rw(v) : [v];
        }
      } else
        a.push(Xn(e()));
      return a;
    }
    function Rl(r) {
      return r.type === "LogicalExpression" && (r.right.type === "ObjectExpression" && r.right.properties.length > 0 || r.right.type === "ArrayExpression" && r.right.elements.length > 0 || !!Ry(r.right));
    }
    var ad = { printBinaryishExpression: function(e, t, n) {
      var u = e.getValue(), a = e.getParentNode(), i = e.getParentNode(1), o = u !== a.body && (a.type === "IfStatement" || a.type === "WhileStatement" || a.type === "SwitchStatement" || a.type === "DoWhileStatement"), s = Vy(e, n, t, !1, o);
      if (o)
        return s;
      if (qy(a) && a.callee === u || a.type === "UnaryExpression" || $w(a) && !a.computed)
        return Xn([nd([Ll].concat(_(s))), Ll]);
      var c = a.type === "ReturnStatement" || a.type === "ThrowStatement" || a.type === "JSXExpressionContainer" && i.type === "JSXAttribute" || u.operator !== "|" && a.type === "JsExpressionRoot" || u.type !== "NGPipeExpression" && (a.type === "NGRoot" && t.parser === "__ng_binding" || a.type === "NGMicrosyntaxExpression" && i.type === "NGMicrosyntax" && i.body.length === 1) || u === a.body && a.type === "ArrowFunctionExpression" || u !== a.body && a.type === "ForStatement" || a.type === "ConditionalExpression" && i.type !== "ReturnStatement" && i.type !== "ThrowStatement" && !qy(i) || a.type === "TemplateLiteral", l = a.type === "AssignmentExpression" || a.type === "VariableDeclarator" || a.type === "ClassProperty" || a.type === "PropertyDefinition" || a.type === "TSAbstractClassProperty" || a.type === "ClassPrivateProperty" || a.type === "ObjectProperty" || a.type === "Property", p = Ly(u.left) && My(u.operator, u.left.operator);
      if (c || Rl(u) && !p || !Rl(u) && l)
        return Xn(s);
      if (s.length === 0)
        return "";
      var f = Ry(u.right), d = s.findIndex(function(F) {
        return typeof F != "string" && !Array.isArray(F) && F.type === "group";
      }), D = s.slice(0, d === -1 ? 1 : d + 1), v = s.slice(D.length, f ? -1 : void 0), y = Symbol("logicalChain-" + ++qw), b = Xn([].concat(_(D), [nd(v)]), { id: y });
      if (!f)
        return b;
      var S = kw(s);
      return Xn([b, Ow(S, { groupId: y })]);
    }, shouldInlineLogicalExpression: Rl }, id = fe.builders, Vw = id.join, Uy = id.line, Uw = id.group, Ww = I.hasNode, Gw = I.hasComment, Hw = I.getComments, zw = ad.printBinaryishExpression;
    function Wy(r, e, t) {
      return r.type === "NGMicrosyntaxKeyedExpression" && r.key.name === "of" && e === 1 && t.body[0].type === "NGMicrosyntaxLet" && t.body[0].value === null;
    }
    var Xw = { printAngular: function(e, t, n) {
      var u = e.getValue();
      switch (u.type) {
        case "NGRoot":
          return [n("node"), Gw(u.node) ? " //" + Hw(u.node)[0].value.trimEnd() : ""];
        case "NGPipeExpression":
          return zw(e, t, n);
        case "NGChainedExpression":
          return Uw(Vw([";", Uy], e.map(function(s) {
            return function(c) {
              return Ww(c.getValue(), function(l) {
                switch (l.type) {
                  case void 0:
                    return !1;
                  case "CallExpression":
                  case "OptionalCallExpression":
                  case "AssignmentExpression":
                    return !0;
                }
              });
            }(s) ? n() : ["(", n(), ")"];
          }, "expressions")));
        case "NGEmptyExpression":
          return "";
        case "NGQuotedExpression":
          return [u.prefix, ": ", u.value.trim()];
        case "NGMicrosyntax":
          return e.map(function(s, c) {
            return [c === 0 ? "" : Wy(s.getValue(), c, u) ? " " : [";", Uy], n()];
          }, "body");
        case "NGMicrosyntaxKey":
          return /^[$_a-z][\w$]*(-[$_a-z][\w$])*$/i.test(u.name) ? u.name : JSON.stringify(u.name);
        case "NGMicrosyntaxExpression":
          return [n("expression"), u.alias === null ? "" : [" as ", n("alias")]];
        case "NGMicrosyntaxKeyedExpression": {
          var a = e.getName(), i = e.getParentNode(), o = Wy(u, a, i) || (a === 1 && (u.key.name === "then" || u.key.name === "else") || a === 2 && u.key.name === "else" && i.body[a - 1].type === "NGMicrosyntaxKeyedExpression" && i.body[a - 1].key.name === "then") && i.body[0].type === "NGMicrosyntaxExpression";
          return [n("key"), o ? " " : ": ", n("expression")];
        }
        case "NGMicrosyntaxLet":
          return ["let ", n("key"), u.value === null ? "" : [" = ", n("value")]];
        case "NGMicrosyntaxAs":
          return [n("key"), " as ", n("alias")];
      }
    } }, Gy = nr.printComments, Hy = nr.printDanglingComments, yn = fe.builders, Ml = yn.line, pr = yn.hardline, Xr = yn.softline, fa = yn.group, da = yn.indent, Jw = yn.conditionalGroup, Yw = yn.fill, od = yn.ifBreak, zy = yn.lineSuffixBoundary, Xy = yn.join, Jy = fe.utils.willBreak, ws = X.getLast, Kw = X.getPreferredQuote, jl = I.isJsxNode, Bs = I.rawText, $l = I.isLiteral, Yy = I.isCallExpression, sd = I.isStringLiteral, Qw = I.isBinaryish, Mt = I.hasComment, ha = I.CommentCheckFlags, Zw = I.hasNodeIgnoreComment, _w = $i.willPrintOwnComments, cd = function(e) {
      return e === "" || e === Ml || e === pr || e === Xr;
    };
    function e8(r, e, t) {
      var n = r.getValue();
      if (n.type === "JSXElement" && function(ne) {
        if (ne.children.length === 0)
          return !0;
        if (ne.children.length > 1)
          return !1;
        var ue = ne.children[0];
        return $l(ue) && !ks(ue);
      }(n))
        return [t("openingElement"), t("closingElement")];
      var u = n.type === "JSXElement" ? t("openingElement") : t("openingFragment"), a = n.type === "JSXElement" ? t("closingElement") : t("closingFragment");
      if (n.children.length === 1 && n.children[0].type === "JSXExpressionContainer" && (n.children[0].expression.type === "TemplateLiteral" || n.children[0].expression.type === "TaggedTemplateExpression"))
        return [u].concat(_(r.map(t, "children")), [a]);
      n.children = n.children.map(function(ne) {
        return function(ue) {
          return ue.type === "JSXExpressionContainer" && $l(ue.expression) && ue.expression.value === " " && !Mt(ue.expression);
        }(ne) ? { type: "JSXText", value: " ", raw: " " } : ne;
      });
      for (var i = n.children.filter(jl).length > 0, o = n.children.filter(function(ne) {
        return ne.type === "JSXExpressionContainer";
      }).length > 1, s = n.type === "JSXElement" && n.openingElement.attributes.length > 1, c = Jy(u) || i || s || o, l = r.getParentNode().rootMarker === "mdx", p = e.singleQuote ? "{' '}" : '{" "}', f = l ? " " : od([p, Xr], " "), d = function(ne, ue, Ce, oe, ae) {
        var ve = [];
        return ne.each(function(Le, Te, Ne) {
          var Oe = Le.getValue();
          if ($l(Oe)) {
            var We = Bs(Oe);
            if (ks(Oe)) {
              var Re = We.split(ql);
              if (Re[0] === "") {
                if (ve.push(""), Re.shift(), /\n/.test(Re[0])) {
                  var Ke = Ne[Te + 1];
                  ve.push(Qy(ae, Re[1], Oe, Ke));
                } else
                  ve.push(oe);
                Re.shift();
              }
              var Fe;
              if (ws(Re) === "" && (Re.pop(), Fe = Re.pop()), Re.length === 0)
                return;
              var be = le(Re.entries()), Qe;
              try {
                for (be.s(); !(Qe = be.n()).done; ) {
                  var we = ke(Qe.value, 2), Pe = we[0], He = we[1];
                  Pe % 2 == 1 ? ve.push(Ml) : ve.push(He);
                }
              } catch (cn) {
                be.e(cn);
              } finally {
                be.f();
              }
              if (Fe !== void 0)
                if (/\n/.test(Fe)) {
                  var er = Ne[Te + 1];
                  ve.push(Qy(ae, ws(ve), Oe, er));
                } else
                  ve.push(oe);
              else {
                var Cr = Ne[Te + 1];
                ve.push(Ky(ae, ws(ve), Oe, Cr));
              }
            } else
              /\n/.test(We) ? We.match(/\n/g).length > 1 && ve.push("", pr) : ve.push("", oe);
          } else {
            var Wt = Ce();
            ve.push(Wt);
            var Zr = Ne[Te + 1];
            if (Zr && ks(Zr)) {
              var wn = n8(Bs(Zr)).split(ql)[0];
              ve.push(Ky(ae, wn, Oe, Zr));
            } else
              ve.push(pr);
          }
        }, "children"), ve;
      }(r, 0, t, f, n.openingElement && n.openingElement.name && n.openingElement.name.name === "fbt"), D = n.children.some(function(ne) {
        return ks(ne);
      }), v = d.length - 2; v >= 0; v--) {
        var y = d[v] === "" && d[v + 1] === "", b = d[v] === pr && d[v + 1] === "" && d[v + 2] === pr, S = (d[v] === Xr || d[v] === pr) && d[v + 1] === "" && d[v + 2] === f, F = d[v] === f && d[v + 1] === "" && (d[v + 2] === Xr || d[v + 2] === pr), x = d[v] === f && d[v + 1] === "" && d[v + 2] === f, w = d[v] === Xr && d[v + 1] === "" && d[v + 2] === pr || d[v] === pr && d[v + 1] === "" && d[v + 2] === Xr;
        b && D || y || S || x || w ? d.splice(v, 2) : F && d.splice(v + 1, 2);
      }
      for (; d.length > 0 && cd(ws(d)); )
        d.pop();
      for (; d.length > 1 && cd(d[0]) && cd(d[1]); )
        d.shift(), d.shift();
      var A = [], k = le(d.entries()), O;
      try {
        for (k.s(); !(O = k.n()).done; ) {
          var q = ke(O.value, 2), H = q[0], R = q[1];
          if (R === f) {
            if (H === 1 && d[H - 1] === "") {
              if (d.length === 2) {
                A.push(p);
                continue;
              }
              A.push([p, pr]);
              continue;
            }
            if (H === d.length - 1) {
              A.push(p);
              continue;
            }
            if (d[H - 1] === "" && d[H - 2] === pr) {
              A.push(p);
              continue;
            }
          }
          A.push(R), Jy(R) && (c = !0);
        }
      } catch (ne) {
        k.e(ne);
      } finally {
        k.f();
      }
      var $ = D ? Yw(A) : fa(A, { shouldBreak: !0 });
      if (l)
        return $;
      var K = fa([u, da([pr, $]), pr, a]);
      return c ? K : Jw([fa([u].concat(_(d), [a])), K]);
    }
    function Ky(r, e, t, n) {
      return r ? "" : t.type === "JSXElement" && !t.closingElement || n && n.type === "JSXElement" && !n.closingElement ? e.length === 1 ? Xr : pr : Xr;
    }
    function Qy(r, e, t, n) {
      return r ? pr : e.length === 1 ? t.type === "JSXElement" && !t.closingElement || n && n.type === "JSXElement" && !n.closingElement ? pr : Xr : pr;
    }
    function r8(r, e, t) {
      return function(n, u, a) {
        var i = n.getParentNode();
        if (!i || { ArrayExpression: !0, JSXAttribute: !0, JSXElement: !0, JSXExpressionContainer: !0, JSXFragment: !0, ExpressionStatement: !0, CallExpression: !0, OptionalCallExpression: !0, ConditionalExpression: !0, JsExpressionRoot: !0 }[i.type])
          return u;
        var o = n.match(void 0, function(c) {
          return c.type === "ArrowFunctionExpression";
        }, Yy, function(c) {
          return c.type === "JSXExpressionContainer";
        }), s = qi(n, a);
        return fa([s ? "" : od("("), da([Xr, u]), Xr, s ? "" : od(")")], { shouldBreak: o });
      }(r, Gy(r, e8(r, e, t), e), e);
    }
    function Zy(r, e, t) {
      var n = r.getValue();
      return ["{", r.call(function(u) {
        var a = ["...", t()], i = u.getValue();
        return Mt(i) && _w(u) ? [da([Xr, Gy(u, a, e)]), Xr] : a;
      }, n.type === "JSXSpreadAttribute" ? "argument" : "expression"), "}"];
    }
    var ql = new RegExp(`([ 
\r	]+)`), t8 = new RegExp(`[^ 
\r	]`), n8 = function(e) {
      return e.replace(new RegExp("(?:^" + ql.source + "|" + ql.source + "$)"), "");
    };
    function ks(r) {
      return $l(r) && (t8.test(Bs(r)) || !/\n/.test(Bs(r)));
    }
    var _y = { hasJsxIgnoreComment: function(e) {
      var t = e.getValue(), n = e.getParentNode();
      if (!(n && t && jl(t) && jl(n)))
        return !1;
      for (var u = null, a = n.children.indexOf(t); a > 0; a--) {
        var i = n.children[a - 1];
        if (i.type !== "JSXText" || ks(i)) {
          u = i;
          break;
        }
      }
      return u && u.type === "JSXExpressionContainer" && u.expression.type === "JSXEmptyExpression" && Zw(u.expression);
    }, printJsx: function(e, t, n) {
      var u = e.getValue();
      switch (u.type) {
        case "JSXAttribute":
          return function(a, i, o) {
            var s = a.getValue(), c = [];
            if (c.push(o("name")), s.value) {
              var l;
              if (sd(s.value)) {
                var p = Bs(s.value).replace(/&apos;/g, "'").replace(/&quot;/g, '"'), f = Kw(p, i.jsxSingleQuote ? "'" : '"'), d = f === "'" ? "&apos;" : "&quot;";
                p = p.slice(1, -1).replace(new RegExp(f, "g"), d), l = [f, p, f];
              } else
                l = o("value");
              c.push("=", l);
            }
            return c;
          }(e, t, n);
        case "JSXIdentifier":
          return String(u.name);
        case "JSXNamespacedName":
          return Xy(":", [n("namespace"), n("name")]);
        case "JSXMemberExpression":
          return Xy(".", [n("object"), n("property")]);
        case "JSXSpreadAttribute":
          return Zy(e, t, n);
        case "JSXSpreadChild":
          return Zy(e, t, n);
        case "JSXExpressionContainer":
          return function(a, i, o) {
            var s = a.getValue(), c = a.getParentNode(0), l = s.expression.type === "JSXEmptyExpression" || !Mt(s.expression) && (s.expression.type === "ArrayExpression" || s.expression.type === "ObjectExpression" || s.expression.type === "ArrowFunctionExpression" || Yy(s.expression) || s.expression.type === "FunctionExpression" || s.expression.type === "TemplateLiteral" || s.expression.type === "TaggedTemplateExpression" || s.expression.type === "DoExpression" || jl(c) && (s.expression.type === "ConditionalExpression" || Qw(s.expression)));
            return fa(l ? ["{", o("expression"), zy, "}"] : ["{", da([Xr, o("expression")]), Xr, zy, "}"]);
          }(e, 0, n);
        case "JSXFragment":
        case "JSXElement":
          return r8(e, t, n);
        case "JSXOpeningElement":
          return function(a, i, o) {
            var s = a.getValue(), c = s.name && Mt(s.name) || s.typeParameters && Mt(s.typeParameters);
            if (s.selfClosing && s.attributes.length === 0 && !c)
              return ["<", o("name"), o("typeParameters"), " />"];
            if (s.attributes && s.attributes.length === 1 && s.attributes[0].value && sd(s.attributes[0].value) && !s.attributes[0].value.value.includes(`
`) && !c && !Mt(s.attributes[0]))
              return fa(["<", o("name"), o("typeParameters"), " "].concat(_(a.map(o, "attributes")), [s.selfClosing ? " />" : ">"]));
            var l = s.attributes.length > 0 && Mt(ws(s.attributes), ha.Trailing), p = s.attributes.length === 0 && !c || i.jsxBracketSameLine && (!c || s.attributes.length > 0) && !l, f = s.attributes && s.attributes.some(function(d) {
              return d.value && sd(d.value) && d.value.value.includes(`
`);
            });
            return fa(["<", o("name"), o("typeParameters"), da(a.map(function() {
              return [Ml, o()];
            }, "attributes")), s.selfClosing ? Ml : p ? ">" : Xr, s.selfClosing ? "/>" : p ? "" : ">"], { shouldBreak: f });
          }(e, t, n);
        case "JSXClosingElement":
          return function(a, i, o) {
            var s = a.getValue(), c = [];
            c.push("</");
            var l = o("name");
            return Mt(s.name, ha.Leading | ha.Line) ? c.push(da([pr, l]), pr) : Mt(s.name, ha.Leading | ha.Block) ? c.push(" ", l) : c.push(l), c.push(">"), c;
          }(e, 0, n);
        case "JSXOpeningFragment":
        case "JSXClosingFragment":
          return function(a, i) {
            var o = a.getValue(), s = Mt(o), c = Mt(o, ha.Line), l = o.type === "JSXOpeningFragment";
            return [l ? "<" : "</", da([c ? pr : s && !l ? " " : "", Hy(a, i, !0)]), c ? pr : "", ">"];
          }(e, t);
        case "JSXEmptyExpression":
          return function(a, i) {
            var o = a.getValue(), s = Mt(o, ha.Line);
            return [Hy(a, i, !s), s ? pr : ""];
          }(e, t);
        case "JSXText":
          throw new Error("JSXTest should be handled by JSXElement");
      }
    } }, u8 = X.isNonEmptyArray, ld = fe.builders, a8 = ld.indent, i8 = ld.join, o8 = ld.line, s8 = I.isFlowAnnotationComment, hr = { printOptionalToken: function(e) {
      var t = e.getValue();
      return !t.optional || t.type === "Identifier" && t === e.getParentNode().key ? "" : t.type === "OptionalCallExpression" || t.type === "OptionalMemberExpression" && t.computed ? "?." : "?";
    }, printFunctionTypeParameters: function(e, t, n) {
      var u = e.getValue();
      return u.typeArguments ? n("typeArguments") : u.typeParameters ? n("typeParameters") : "";
    }, printBindExpressionCallee: function(e, t, n) {
      return ["::", n("callee")];
    }, printTypeScriptModifiers: function(e, t, n) {
      var u = e.getValue();
      return u8(u.modifiers) ? [i8(" ", e.map(n, "modifiers")), " "] : "";
    }, printTypeAnnotation: function(e, t, n) {
      var u = e.getValue();
      if (!u.typeAnnotation)
        return "";
      var a = e.getParentNode(), i = u.definite || a && a.type === "VariableDeclarator" && a.definite, o = a.type === "DeclareFunction" && a.id === u;
      return s8(t.originalText, u.typeAnnotation) ? [" /*: ", n("typeAnnotation"), " */"] : [o ? "" : i ? "!: " : ": ", n("typeAnnotation")];
    }, adjustClause: function(e, t, n) {
      return e.type === "EmptyStatement" ? ";" : e.type === "BlockStatement" || n ? [" ", t] : a8([o8, t]);
    } }, e2 = nr.printDanglingComments, Da = fe.builders, r2 = Da.line, Vl = Da.softline, pd = Da.hardline, fd = Da.group, c8 = Da.indent, t2 = Da.ifBreak, l8 = Da.fill, p8 = X.getLast, f8 = X.hasNewline, d8 = I.shouldPrintComma, Ul = I.hasComment, Ns = I.CommentCheckFlags, n2 = I.isNextLineEmpty, h8 = I.isNumericLiteral, D8 = I.isSignedNumericLiteral, g8 = tr.locStart, m8 = hr.printOptionalToken, v8 = hr.printTypeAnnotation;
    function u2(r, e) {
      return r.elements.length > 1 && r.elements.every(function(t) {
        return t && (h8(t) || D8(t) && !Ul(t.argument)) && !Ul(t, Ns.Trailing | Ns.Line, function(n) {
          return !f8(e.originalText, g8(n), { backwards: !0 });
        });
      });
    }
    function a2(r, e, t, n) {
      var u = [], a = [];
      return r.each(function(i) {
        u.push(a, fd(n())), a = [",", r2], i.getValue() && n2(i.getValue(), e) && a.push(Vl);
      }, t), u;
    }
    function y8(r, e, t, n) {
      var u = [];
      return r.each(function(a, i, o) {
        var s = i === o.length - 1;
        u.push([t(), s ? n : ","]), s || u.push(n2(a.getValue(), e) ? [pd, pd] : Ul(o[i + 1], Ns.Leading | Ns.Line) ? pd : r2);
      }, "elements"), l8(u);
    }
    var Ps = { printArray: function(e, t, n) {
      var u = e.getValue(), a = [], i = u.type === "TupleExpression" ? "#[" : "[";
      if (u.elements.length === 0)
        Ul(u, Ns.Dangling) ? a.push(fd([i, e2(e, t), Vl, "]"])) : a.push(i, "]");
      else {
        var o = p8(u.elements), s = !(o && o.type === "RestElement"), c = o === null, l = Symbol("array"), p = !t.__inJestEach && u.elements.length > 1 && u.elements.every(function(D, v, y) {
          var b = D && D.type;
          if (b !== "ArrayExpression" && b !== "ObjectExpression")
            return !1;
          var S = y[v + 1];
          if (S && b !== S.type)
            return !1;
          var F = b === "ArrayExpression" ? "elements" : "properties";
          return D[F] && D[F].length > 1;
        }), f = u2(u, t), d = s ? c ? "," : d8(t) ? f ? t2(",", "", { groupId: l }) : t2(",") : "" : "";
        a.push(fd([i, c8([Vl, f ? y8(e, t, n, d) : [a2(e, t, "elements", n), d], e2(e, t, !0)]), Vl, "]"], { shouldBreak: p, id: l }));
      }
      return a.push(m8(e), v8(e, t, n)), a;
    }, printArrayItems: a2, isConciselyPrintedArray: u2 }, E8 = nr.printDanglingComments, i2 = X.getLast, C8 = X.getPenultimate, A8 = I.getFunctionParameters, ga = I.hasComment, dd = I.CommentCheckFlags, b8 = I.isFunctionCompositionArgs, F8 = I.isJsxNode, S8 = I.isLongCurriedCallExpression, T8 = I.shouldPrintComma, x8 = I.getCallArguments, o2 = I.iterateCallArgumentsPath, w8 = I.isNextLineEmpty, B8 = I.isCallExpression, bu = fe.builders, Wl = bu.line, Gl = bu.hardline, s2 = bu.softline, Hl = bu.group, c2 = bu.indent, k8 = bu.conditionalGroup, N8 = bu.ifBreak, P8 = bu.breakParent, zl = fe.utils.willBreak, I8 = dt.ArgExpansionBailout, O8 = Ps.isConciselyPrintedArray;
    function Is(r) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      return r.type === "ObjectExpression" && (r.properties.length > 0 || ga(r)) || r.type === "ArrayExpression" && (r.elements.length > 0 || ga(r)) || r.type === "TSTypeAssertion" && Is(r.expression) || r.type === "TSAsExpression" && Is(r.expression) || r.type === "FunctionExpression" || r.type === "ArrowFunctionExpression" && (!r.returnType || !r.returnType.typeAnnotation || r.returnType.typeAnnotation.type !== "TSTypeReference" || (t = r.body).type === "BlockStatement" && (t.body.some(function(n) {
        return n.type !== "EmptyStatement";
      }) || ga(t, dd.Dangling))) && (r.body.type === "BlockStatement" || r.body.type === "ArrowFunctionExpression" && Is(r.body, !0) || r.body.type === "ObjectExpression" || r.body.type === "ArrayExpression" || !e && (B8(r.body) || r.body.type === "ConditionalExpression") || F8(r.body)) || r.type === "DoExpression" || r.type === "ModuleExpression";
      var t;
    }
    var hd = function(e, t, n) {
      var u = e.getValue(), a = u.type === "ImportExpression", i = x8(u);
      if (i.length === 0)
        return ["(", E8(e, t, !0), ")"];
      if (function(b) {
        return b.length === 2 && b[0].type === "ArrowFunctionExpression" && A8(b[0]).length === 0 && b[0].body.type === "BlockStatement" && b[1].type === "ArrayExpression" && !b.some(function(S) {
          return ga(S);
        });
      }(i))
        return ["(", n(["arguments", 0]), ", ", n(["arguments", 1]), ")"];
      var o = !1, s = !1, c = i.length - 1, l = [];
      o2(e, function(b, S) {
        var F = b.getNode(), x = [n()];
        S === c || (w8(F, t) ? (S === 0 && (s = !0), o = !0, x.push(",", Gl, Gl)) : x.push(",", Wl)), l.push(x);
      });
      var p = a || u.callee && u.callee.type === "Import" || !T8(t, "all") ? "" : ",";
      function f() {
        return Hl(["(", c2([Wl].concat(l)), p, Wl, ")"], { shouldBreak: !0 });
      }
      if (o || e.getParentNode().type !== "Decorator" && b8(i))
        return f();
      var d = function(b) {
        if (b.length !== 2)
          return !1;
        var S = ke(b, 2), F = S[0], x = S[1];
        return F.type === "ModuleExpression" && function(w) {
          return w.type === "ObjectExpression" && w.properties.length === 1 && w.properties[0].type === "ObjectProperty" && w.properties[0].key.type === "Identifier" && w.properties[0].key.name === "type" && w.properties[0].value.type === "StringLiteral" && w.properties[0].value.value === "module";
        }(x) ? !0 : !ga(F) && (F.type === "FunctionExpression" || F.type === "ArrowFunctionExpression" && F.body.type === "BlockStatement") && x.type !== "FunctionExpression" && x.type !== "ArrowFunctionExpression" && x.type !== "ConditionalExpression" && !Is(x);
      }(i), D = function(b, S) {
        var F = i2(b), x = C8(b);
        return !ga(F, dd.Leading) && !ga(F, dd.Trailing) && Is(F) && (!x || x.type !== F.type) && (b.length !== 2 || x.type !== "ArrowFunctionExpression" || F.type !== "ArrayExpression") && !(b.length > 1 && F.type === "ArrayExpression" && O8(F, S));
      }(i, t);
      if (d || D) {
        if (d ? l.slice(1).some(zl) : l.slice(0, -1).some(zl))
          return f();
        var v = [];
        try {
          e.try(function() {
            o2(e, function(b, S) {
              d && S === 0 && (v = [[n([], { expandFirstArg: !0 }), l.length > 1 ? "," : "", s ? Gl : Wl, s ? Gl : ""]].concat(_(l.slice(1)))), D && S === c && (v = [].concat(_(l.slice(0, -1)), [n([], { expandLastArg: !0 })]));
            });
          });
        } catch (b) {
          if (b instanceof I8)
            return f();
          throw b;
        }
        return [l.some(zl) ? P8 : "", k8([["("].concat(_(v), [")"]), d ? ["(", Hl(v[0], { shouldBreak: !0 })].concat(_(v.slice(1)), [")"]) : ["("].concat(_(l.slice(0, -1)), [Hl(i2(v), { shouldBreak: !0 }), ")"]), f()])];
      }
      var y = ["(", c2([s2].concat(l)), N8(p), s2, ")"];
      return S8(e) ? y : Hl(y, { shouldBreak: l.some(zl) || o });
    }, Xl = fe.builders, Dd = Xl.softline, l2 = Xl.group, p2 = Xl.indent, L8 = Xl.label, R8 = I.isNumericLiteral, f2 = I.isMemberExpression, d2 = I.isCallExpression, M8 = hr.printOptionalToken;
    function h2(r, e, t) {
      var n = t("property"), u = r.getValue(), a = M8(r);
      return u.computed ? !u.property || R8(u.property) ? [a, "[", n, "]"] : l2([a, "[", p2([Dd, n]), Dd, "]"]) : [a, ".", n];
    }
    var D2 = { printMemberExpression: function(e, t, n) {
      var u = e.getValue(), a = e.getParentNode(), i, o = 0;
      do
        i = e.getParentNode(o), o++;
      while (i && (f2(i) || i.type === "TSNonNullExpression"));
      var s = n("object"), c = h2(e, t, n), l = i && (i.type === "NewExpression" || i.type === "BindExpression" || i.type === "AssignmentExpression" && i.left.type !== "Identifier") || u.computed || u.object.type === "Identifier" && u.property.type === "Identifier" && !f2(a) || (a.type === "AssignmentExpression" || a.type === "VariableDeclarator") && (d2(u.object) && u.object.arguments.length > 0 || u.object.type === "TSNonNullExpression" && d2(u.object.expression) && u.object.expression.arguments.length > 0 || s.label === "member-chain");
      return L8(s.label === "member-chain" ? "member-chain" : "member", [s, l ? c : l2(p2([Dd, c]))]);
    }, printMemberLookup: h2 }, gd = nr.printComments, Vi = X.getLast, j8 = X.isNextLineEmptyAfterIndex, $8 = X.getNextNonSpaceNonCommentCharacterIndex, Fu = I.isCallExpression, md = I.isMemberExpression, q8 = I.isFunctionOrArrowExpression, V8 = I.isLongCurriedCallExpression, Os = I.isMemberish, g2 = I.isNumericLiteral, U8 = I.isSimpleCallArgument, Ls = I.hasComment, Jl = I.CommentCheckFlags, W8 = I.isNextLineEmpty, G8 = tr.locEnd, ma = fe.builders, H8 = ma.join, Yl = ma.hardline, vd = ma.group, z8 = ma.indent, X8 = ma.conditionalGroup, J8 = ma.breakParent, Y8 = ma.label, yd = fe.utils.willBreak, K8 = D2.printMemberLookup, m2 = hr.printOptionalToken, v2 = hr.printFunctionTypeParameters, Q8 = hr.printBindExpressionCallee, Z8 = function(e, t, n) {
      var u = e.getParentNode(), a = !u || u.type === "ExpressionStatement", i = [];
      function o(R) {
        var $ = t.originalText, K = $8($, R, G8);
        return $.charAt(K) === ")" ? K !== !1 && j8($, K + 1) : W8(R, t);
      }
      function s(R) {
        var $ = R.getValue();
        Fu($) && (Os($.callee) || Fu($.callee)) ? (i.unshift({ node: $, printed: [gd(R, [m2(R), v2(R, t, n), hd(R, t, n)], t), o($) ? Yl : ""] }), R.call(function(K) {
          return s(K);
        }, "callee")) : Os($) ? (i.unshift({ node: $, needsParens: qi(R, t), printed: gd(R, md($) ? K8(R, t, n) : Q8(R, t, n), t) }), R.call(function(K) {
          return s(K);
        }, "object")) : $.type === "TSNonNullExpression" ? (i.unshift({ node: $, printed: gd(R, "!", t) }), R.call(function(K) {
          return s(K);
        }, "expression")) : i.unshift({ node: $, printed: n() });
      }
      var c = e.getValue();
      i.unshift({ node: c, printed: [m2(e), v2(e, t, n), hd(e, t, n)] }), c.callee && e.call(function(R) {
        return s(R);
      }, "callee");
      for (var l = [], p = [i[0]], f = 1; f < i.length && (i[f].node.type === "TSNonNullExpression" || Fu(i[f].node) || md(i[f].node) && i[f].node.computed && g2(i[f].node.property)); ++f)
        p.push(i[f]);
      if (!Fu(i[0].node))
        for (; f + 1 < i.length && Os(i[f].node) && Os(i[f + 1].node); ++f)
          p.push(i[f]);
      l.push(p), p = [];
      for (var d = !1; f < i.length; ++f) {
        if (d && Os(i[f].node)) {
          if (i[f].node.computed && g2(i[f].node.property)) {
            p.push(i[f]);
            continue;
          }
          l.push(p), p = [], d = !1;
        }
        (Fu(i[f].node) || i[f].node.type === "ImportExpression") && (d = !0), p.push(i[f]), Ls(i[f].node, Jl.Trailing) && (l.push(p), p = [], d = !1);
      }
      function D(R) {
        return /^[A-Z]|^[$_]+$/.test(R);
      }
      p.length > 0 && l.push(p);
      var v = l.length >= 2 && !Ls(l[1][0].node) && function(R) {
        var $ = R[1].length > 0 && R[1][0].node.computed;
        if (R[0].length === 1) {
          var K = R[0][0].node;
          return K.type === "ThisExpression" || K.type === "Identifier" && (D(K.name) || a && function(ue) {
            return ue.length <= t.tabWidth;
          }(K.name) || $);
        }
        var ne = Vi(R[0]).node;
        return md(ne) && ne.property.type === "Identifier" && (D(ne.property.name) || $);
      }(l);
      function y(R) {
        var $ = R.map(function(K) {
          return K.printed;
        });
        return R.length > 0 && Vi(R).needsParens ? ["("].concat(_($), [")"]) : $;
      }
      var b = l.map(y), S = b, F = v ? 3 : 2, x = Kf(l), w = x.slice(1, -1).some(function(R) {
        return Ls(R.node, Jl.Leading);
      }) || x.slice(0, -1).some(function(R) {
        return Ls(R.node, Jl.Trailing);
      }) || l[F] && Ls(l[F][0].node, Jl.Leading);
      if (l.length <= F && !w)
        return V8(e) ? S : vd(S);
      var A = Vi(l[v ? 1 : 0]).node, k = !Fu(A) && o(A), O = [y(l[0]), v ? l.slice(1, 2).map(y) : "", k ? Yl : "", function(R) {
        return R.length === 0 ? "" : z8(vd([Yl, H8(Yl, R.map(y))]));
      }(l.slice(v ? 2 : 1))], q = i.map(function(R) {
        var $ = R.node;
        return $;
      }).filter(Fu), H;
      return H = w || q.length > 2 && q.some(function(R) {
        return !R.arguments.every(function($) {
          return U8($, 0);
        });
      }) || b.slice(0, -1).some(yd) || function() {
        var R = Vi(Vi(l)).node, $ = Vi(b);
        return Fu(R) && yd($) && q.slice(0, -1).some(function(K) {
          return K.arguments.some(q8);
        });
      }() ? vd(O) : [yd(S) || k ? J8 : "", X8([S, O])], Y8("member-chain", H);
    }, y2 = fe.builders, _8 = y2.join, eB = y2.group, E2 = I.getCallArguments, rB = I.hasFlowAnnotationComment, tB = I.isCallExpression, nB = I.isMemberish, uB = I.isStringLiteral, aB = I.isTemplateOnItsOwnLine, iB = I.isTestCall, oB = I.iterateCallArgumentsPath, sB = hr.printOptionalToken, C2 = hr.printFunctionTypeParameters, A2 = { printCallExpression: function(e, t, n) {
      var u = e.getValue(), a = e.getParentNode(), i = u.type === "NewExpression", o = u.type === "ImportExpression", s = sB(e), c = E2(u);
      if (c.length > 0 && (!o && !i && function(d, D) {
        if (d.callee.type !== "Identifier")
          return !1;
        if (d.callee.name === "require")
          return !0;
        if (d.callee.name === "define") {
          var v = E2(d);
          return D.type === "ExpressionStatement" && (v.length === 1 || v.length === 2 && v[0].type === "ArrayExpression" || v.length === 3 && uB(v[0]) && v[1].type === "ArrayExpression");
        }
        return !1;
      }(u, a) || c.length === 1 && aB(c[0], t.originalText) || !i && iB(u, a))) {
        var l = [];
        return oB(e, function() {
          l.push(n());
        }), [i ? "new " : "", n("callee"), s, C2(e, t, n), "(", _8(", ", l), ")"];
      }
      var p = (t.parser === "babel" || t.parser === "babel-flow") && u.callee && u.callee.type === "Identifier" && rB(u.callee.trailingComments);
      if (p && (u.callee.trailingComments[0].printed = !0), !o && !i && nB(u.callee) && !e.call(function(d) {
        return qi(d, t);
      }, "callee"))
        return Z8(e, t, n);
      var f = [i ? "new " : "", o ? "import" : n("callee"), s, p ? "/*:: ".concat(u.callee.trailingComments[0].value.slice(2).trim(), " */") : "", C2(e, t, n), hd(e, t, n)];
      return o || tB(u.callee) ? eB(f) : f;
    } }, cB = X.isNonEmptyArray, lB = X.getStringWidth, Kl = fe.builders, Ql = Kl.line, mt = Kl.group, Ed = Kl.indent, pB = Kl.indentIfBreak, fB = fe.utils.cleanDoc, dB = I.hasLeadingOwnLineComment, b2 = I.isBinaryish, F2 = I.isStringLiteral, hB = I.isLiteral, DB = I.isNumericLiteral, gB = I.isCallExpression, mB = I.isMemberExpression, vB = I.getCallArguments, yB = I.rawText, S2 = I.hasComment, EB = I.isSignedNumericLiteral, T2 = ad.shouldInlineLogicalExpression, CB = A2.printCallExpression;
    function Cd(r, e, t, n, u, a) {
      var i = function(c, l, p, f, d) {
        var D = c.getValue(), v = D[d];
        if (!v)
          return "only-left";
        var y = !Zl(v);
        if (c.match(Zl, x2, function(S) {
          return !y || S.type !== "ExpressionStatement" && S.type !== "VariableDeclaration";
        }))
          return y ? v.type === "ArrowFunctionExpression" && v.body.type === "ArrowFunctionExpression" ? "chain-tail-arrow-chain" : "chain-tail" : "chain";
        if (!y && Zl(v.right) || dB(l.originalText, v))
          return "break-after-operator";
        if (v.type === "CallExpression" && v.callee.name === "require" || l.parser === "json5" || l.parser === "json")
          return "never-break-after-operator";
        if (function(S) {
          if (x2(S)) {
            var F = S.left || S.id;
            return F.type === "ObjectPattern" && F.properties.length > 2 && F.properties.some(function(x) {
              return (x.type === "ObjectProperty" || x.type === "Property") && (!x.shorthand || x.value && x.value.type === "AssignmentPattern");
            });
          }
          return !1;
        }(D))
          return "break-lhs";
        var b = function(S, F, x) {
          if (S.type !== "ObjectProperty" && S.type !== "Property")
            return !1;
          F = fB(F);
          var w = 3;
          return typeof F == "string" && lB(F) < x.tabWidth + w;
        }(D, f, l);
        return c.call(function() {
          return function(S, F, x, w) {
            var A = S.getValue();
            if (b2(A) && !T2(A))
              return !0;
            switch (A.type) {
              case "StringLiteralTypeAnnotation":
              case "SequenceExpression":
                return !0;
              case "ConditionalExpression": {
                var k = A.test;
                return b2(k) && !T2(k);
              }
              case "ClassExpression":
                return cB(A.decorators);
            }
            if (w)
              return !1;
            for (var O = A, q = []; ; )
              if (O.type === "UnaryExpression")
                O = O.argument, q.push("argument");
              else {
                if (O.type !== "TSNonNullExpression")
                  break;
                O = O.expression, q.push("expression");
              }
            return !!(F2(O) || S.call.apply(S, [function() {
              return w2(S, F, x);
            }].concat(q)));
          }(c, l, p, b);
        }, d) ? "break-after-operator" : b || v.type === "TemplateLiteral" || v.type === "TaggedTemplateExpression" || v.type === "BooleanLiteral" || DB(v) || v.type === "ClassExpression" ? "never-break-after-operator" : "fluid";
      }(r, e, t, n, a), o = t(a, { assignmentLayout: i });
      switch (i) {
        case "break-after-operator":
          return mt([mt(n), u, mt(Ed([Ql, o]))]);
        case "never-break-after-operator":
          return mt([mt(n), u, " ", o]);
        case "fluid": {
          var s = Symbol("assignment");
          return mt([mt(n), u, mt(Ed(Ql), { id: s }), pB(o, { groupId: s })]);
        }
        case "break-lhs":
          return mt([n, u, " ", mt(o)]);
        case "chain":
          return [mt(n), u, Ql, o];
        case "chain-tail":
          return [mt(n), u, Ed([Ql, o])];
        case "chain-tail-arrow-chain":
          return [mt(n), u, o];
        case "only-left":
          return n;
      }
    }
    function Zl(r) {
      return r.type === "AssignmentExpression";
    }
    function x2(r) {
      return Zl(r) || r.type === "VariableDeclarator";
    }
    function w2(r, e, t) {
      var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, u = r.getValue(), a = function() {
        return w2(r, e, t, !0);
      };
      if (u.type === "TSNonNullExpression")
        return r.call(a, "expression");
      if (gB(u)) {
        if (CB(r, e, t).label === "member-chain")
          return !1;
        var i = vB(u);
        return !!(i.length === 0 || i.length === 1 && function(o, s) {
          var c = s.printWidth;
          if (S2(o))
            return !1;
          var l = 0.25 * c;
          if (o.type === "ThisExpression" || o.type === "Identifier" && o.name.length <= l || EB(o) && !S2(o.argument))
            return !0;
          var p = o.type === "Literal" && "regex" in o && o.regex.pattern || o.type === "RegExpLiteral" && o.pattern;
          return p ? p.length <= l : F2(o) ? yB(o).length <= l : o.type === "TemplateLiteral" ? o.expressions.length === 0 && o.quasis[0].value.raw.length <= l && !o.quasis[0].value.raw.includes(`
`) : hB(o);
        }(i[0], e)) && r.call(a, "callee");
      }
      return mB(u) ? r.call(a, "object") : n && (u.type === "Identifier" || u.type === "ThisExpression");
    }
    var Rs = { printVariableDeclarator: function(e, t, n) {
      return Cd(e, t, n, n("id"), " =", "init");
    }, printAssignmentExpression: function(e, t, n) {
      var u = e.getValue();
      return Cd(e, t, n, n("left"), [" ", u.operator], "right");
    }, printAssignment: Cd }, AB = X.getNextNonSpaceNonCommentCharacter, bB = nr.printDanglingComments, Ui = fe.builders, FB = Ui.line, B2 = Ui.hardline, k2 = Ui.softline, SB = Ui.group, TB = Ui.indent, xB = Ui.ifBreak, N2 = fe.utils, P2 = N2.removeLines, Ad = N2.willBreak, bd = I.getFunctionParameters, wB = I.iterateFunctionParametersPath, BB = I.isSimpleType, kB = I.isTestCall, NB = I.isTypeAnnotationAFunction, Fd = I.isObjectType, PB = I.isObjectTypePropertyAFunction, IB = I.hasRestParameter, OB = I.shouldPrintComma, LB = I.hasComment, RB = I.isNextLineEmpty, MB = tr.locEnd, jB = dt.ArgExpansionBailout, $B = hr.printFunctionTypeParameters;
    function I2(r) {
      if (!r)
        return !1;
      var e = bd(r);
      if (e.length !== 1)
        return !1;
      var t = ke(e, 1), n = t[0];
      return !LB(n) && (n.type === "ObjectPattern" || n.type === "ArrayPattern" || n.type === "Identifier" && n.typeAnnotation && (n.typeAnnotation.type === "TypeAnnotation" || n.typeAnnotation.type === "TSTypeAnnotation") && Fd(n.typeAnnotation.typeAnnotation) || n.type === "FunctionTypeParam" && Fd(n.typeAnnotation) || n.type === "AssignmentPattern" && (n.left.type === "ObjectPattern" || n.left.type === "ArrayPattern") && (n.right.type === "Identifier" || n.right.type === "ObjectExpression" && n.right.properties.length === 0 || n.right.type === "ArrayExpression" && n.right.elements.length === 0));
    }
    var va = { printFunctionParameters: function(e, t, n, u, a) {
      var i = e.getValue(), o = bd(i), s = a ? $B(e, n, t) : "";
      if (o.length === 0)
        return [s, "(", bB(e, n, !0, function(D) {
          return AB(n.originalText, D, MB) === ")";
        }), ")"];
      var c = e.getParentNode(), l = kB(c), p = I2(i), f = [];
      if (wB(e, function(D, v) {
        var y = v === o.length - 1;
        y && i.rest && f.push("..."), f.push(t()), y || (f.push(","), l || p ? f.push(" ") : RB(o[v], n) ? f.push(B2, B2) : f.push(FB));
      }), u) {
        if (Ad(s) || Ad(f))
          throw new jB();
        return SB([P2(s), "(", P2(f), ")"]);
      }
      var d = o.every(function(D) {
        return !D.decorators;
      });
      return p && d || l ? [s, "("].concat(f, [")"]) : (PB(c) || NB(c) || c.type === "TypeAlias" || c.type === "UnionTypeAnnotation" || c.type === "TSUnionType" || c.type === "IntersectionTypeAnnotation" || c.type === "FunctionTypeAnnotation" && c.returnType === i) && o.length === 1 && o[0].name === null && i.this !== o[0] && o[0].typeAnnotation && i.typeParameters === null && BB(o[0].typeAnnotation) && !i.rest ? n.arrowParens === "always" ? ["("].concat(f, [")"]) : f : [s, "(", TB([k2].concat(f)), xB(!IB(i) && OB(n, "all") ? "," : ""), k2, ")"];
    }, shouldHugFunctionParameters: I2, shouldGroupFunctionParameters: function(e, t) {
      var n = function(i) {
        var o;
        return i.returnType ? (o = i.returnType, o.typeAnnotation && (o = o.typeAnnotation)) : i.typeAnnotation && (o = i.typeAnnotation), o;
      }(e);
      if (!n)
        return !1;
      var u = e.typeParameters && e.typeParameters.params;
      if (u) {
        if (u.length > 1)
          return !1;
        if (u.length === 1) {
          var a = u[0];
          if (a.constraint || a.default)
            return !1;
        }
      }
      return bd(e).length === 1 && (Fd(n) || Ad(t));
    } }, qB = nr.printComments, VB = nr.printDanglingComments, UB = X.getLast, ya = fe.builders, Ea = ya.group, O2 = ya.join, Sd = ya.line, Ms = ya.softline, Ca = ya.indent, WB = ya.align, _l = ya.ifBreak, L2 = tr.locStart, GB = I.isSimpleType, js = I.isObjectType, R2 = I.hasLeadingOwnLineComment, HB = I.isObjectTypePropertyAFunction, zB = I.shouldPrintComma, XB = Rs.printAssignment, JB = va.printFunctionParameters, YB = va.shouldGroupFunctionParameters, KB = Ps.printArrayItems;
    function M2(r) {
      if (GB(r) || js(r))
        return !0;
      if (r.type === "UnionTypeAnnotation" || r.type === "TSUnionType") {
        var e = r.types.filter(function(n) {
          return n.type === "VoidTypeAnnotation" || n.type === "TSVoidKeyword" || n.type === "NullLiteralTypeAnnotation" || n.type === "TSNullKeyword";
        }).length, t = r.types.some(function(n) {
          return n.type === "ObjectTypeAnnotation" || n.type === "TSTypeLiteral" || n.type === "GenericTypeAnnotation" || n.type === "TSTypeReference";
        });
        if (r.types.length - 1 === e && t)
          return !0;
      }
      return !1;
    }
    var rt = { printOpaqueType: function(e, t, n) {
      var u = t.semi ? ";" : "", a = e.getValue(), i = [];
      return i.push("opaque type ", n("id"), n("typeParameters")), a.supertype && i.push(": ", n("supertype")), a.impltype && i.push(" = ", n("impltype")), i.push(u), i;
    }, printTypeAlias: function(e, t, n) {
      var u = t.semi ? ";" : "", a = e.getValue(), i = [];
      a.declare && i.push("declare "), i.push("type ", n("id"), n("typeParameters"));
      var o = a.type === "TSTypeAliasDeclaration" ? "typeAnnotation" : "right";
      return [XB(e, t, n, i, " =", o), u];
    }, printIntersectionType: function(e, t, n) {
      for (var u = e.getValue(), a = e.map(n, "types"), i = [], o = !1, s = 0; s < a.length; ++s)
        s === 0 ? i.push(a[s]) : js(u.types[s - 1]) && js(u.types[s]) ? i.push([" & ", o ? Ca(a[s]) : a[s]]) : js(u.types[s - 1]) || js(u.types[s]) ? (s > 1 && (o = !0), i.push(" & ", s > 1 ? Ca(a[s]) : a[s])) : i.push(Ca([" &", Sd, a[s]]));
      return Ea(i);
    }, printUnionType: function(e, t, n) {
      var u = e.getValue(), a = e.getParentNode(), i = !(a.type === "TypeParameterInstantiation" || a.type === "TSTypeParameterInstantiation" || a.type === "GenericTypeAnnotation" || a.type === "TSTypeReference" || a.type === "TSTypeAssertion" || a.type === "TupleTypeAnnotation" || a.type === "TSTupleType" || a.type === "FunctionTypeParam" && !a.name && e.getParentNode(1).this !== a || (a.type === "TypeAlias" || a.type === "VariableDeclarator" || a.type === "TSTypeAliasDeclaration") && R2(t.originalText, u)), o = M2(u), s = e.map(function(p) {
        var f = n();
        return o || (f = WB(2, f)), qB(p, f, t);
      }, "types");
      if (o)
        return O2(" | ", s);
      var c = i && !R2(t.originalText, u), l = [_l([c ? Sd : "", "| "]), O2([Sd, "| "], s)];
      return qi(e, t) ? Ea([Ca(l), Ms]) : a.type === "TupleTypeAnnotation" && a.types.length > 1 || a.type === "TSTupleType" && a.elementTypes.length > 1 ? Ea([Ca([_l(["(", Ms]), l]), Ms, _l(")")]) : Ea(i ? Ca(l) : l);
    }, printFunctionType: function(e, t, n) {
      var u = e.getValue(), a = [], i = e.getParentNode(0), o = e.getParentNode(1), s = e.getParentNode(2), c = u.type === "TSFunctionType" || !((i.type === "ObjectTypeProperty" || i.type === "ObjectTypeInternalSlot") && !i.variance && !i.optional && L2(i) === L2(u) || i.type === "ObjectTypeCallProperty" || s && s.type === "DeclareFunction"), l = c && (i.type === "TypeAnnotation" || i.type === "TSTypeAnnotation"), p = l && c && (i.type === "TypeAnnotation" || i.type === "TSTypeAnnotation") && o.type === "ArrowFunctionExpression";
      HB(i) && (c = !0, l = !0), p && a.push("(");
      var f = JB(e, n, t, !1, !0), d = u.returnType || u.predicate || u.typeAnnotation ? [c ? " => " : ": ", n("returnType"), n("predicate"), n("typeAnnotation")] : "", D = YB(u, d);
      return a.push(D ? Ea(f) : f), d && a.push(d), p && a.push(")"), Ea(a);
    }, printTupleType: function(e, t, n) {
      var u = e.getValue(), a = u.type === "TSTupleType" ? "elementTypes" : "types", i = u[a].length > 0 && UB(u[a]).type === "TSRestType";
      return Ea(["[", Ca([Ms, KB(e, t, a, n)]), _l(zB(t, "all") && !i ? "," : ""), VB(e, t, !0), Ms, "]"]);
    }, printIndexedAccessType: function(e, t, n) {
      var u = e.getValue(), a = u.type === "OptionalIndexedAccessType" && u.optional ? "?.[" : "[";
      return [n("objectType"), a, n("indexType"), "]"];
    }, shouldHugType: M2 }, QB = nr.printDanglingComments, Aa = fe.builders, j2 = Aa.join, ZB = Aa.line, _B = Aa.hardline, $2 = Aa.softline, e6 = Aa.group, r6 = Aa.indent, t6 = Aa.ifBreak, n6 = I.isTestCall, q2 = I.hasComment, V2 = I.CommentCheckFlags, u6 = I.isTSXFile, a6 = I.shouldPrintComma, i6 = I.getFunctionParameters, o6 = X.createGroupIdMapper, s6 = rt.shouldHugType, U2 = o6("typeParameters");
    function c6(r, e) {
      var t = r.getValue();
      if (!q2(t, V2.Dangling))
        return "";
      var n = !q2(t, V2.Line), u = QB(r, e, n);
      return n ? u : [u, _B];
    }
    var Wi = { printTypeParameter: function(e, t, n) {
      var u = e.getValue(), a = [], i = e.getParentNode();
      return i.type === "TSMappedType" ? (a.push("[", n("name")), u.constraint && a.push(" in ", n("constraint")), i.nameType && a.push(" as ", e.callParent(function() {
        return n("nameType");
      })), a.push("]"), a) : (u.variance && a.push(n("variance")), a.push(n("name")), u.bound && a.push(": ", n("bound")), u.constraint && a.push(" extends ", n("constraint")), u.default && a.push(" = ", n("default")), a);
    }, printTypeParameters: function(e, t, n, u) {
      var a = e.getValue();
      if (!a[u])
        return "";
      if (!Array.isArray(a[u]))
        return n(u);
      var i = e.getNode(2);
      if (i && n6(i) || a[u].length === 0 || a[u].length === 1 && (s6(a[u][0]) || a[u][0].type === "NullableTypeAnnotation"))
        return ["<", j2(", ", e.map(n, u)), c6(e, t), ">"];
      var o = a.type === "TSTypeParameterInstantiation" ? "" : i6(a).length === 1 && u6(t) && !a[u][0].constraint && e.getParentNode().type === "ArrowFunctionExpression" ? "," : a6(t, "all") ? t6(",") : "";
      return e6(["<", r6([$2, j2([",", ZB], e.map(n, u))]), o, $2, ">"], { id: U2(a) });
    }, getTypeParametersGroupId: U2 }, W2 = nr.printComments, l6 = X.printString, Td = X.printNumber, p6 = I.isNumericLiteral, f6 = I.isSimpleNumber, d6 = I.isStringLiteral, G2 = I.isStringPropSafeToUnquote, H2 = I.rawText, h6 = Rs.printAssignment, ep = /* @__PURE__ */ new WeakMap();
    function z2(r, e, t) {
      var n = r.getNode();
      if (n.computed)
        return ["[", t("key"), "]"];
      var u = r.getParentNode(), a = n.key;
      if (n.type === "ClassPrivateProperty" && a.type === "Identifier")
        return ["#", t("key")];
      if (e.quoteProps === "consistent" && !ep.has(u)) {
        var i = (u.properties || u.body || u.members).some(function(s) {
          return !s.computed && s.key && d6(s.key) && !G2(s, e);
        });
        ep.set(u, i);
      }
      if ((a.type === "Identifier" || p6(a) && f6(Td(H2(a))) && String(a.value) === Td(H2(a)) && e.parser !== "typescript" && e.parser !== "babel-ts") && (e.parser === "json" || e.quoteProps === "consistent" && ep.get(u))) {
        var o = l6(JSON.stringify(a.type === "Identifier" ? a.name : a.value.toString()), e);
        return r.call(function(s) {
          return W2(s, o, e);
        }, "key");
      }
      return G2(n, e) && (e.quoteProps === "as-needed" || e.quoteProps === "consistent" && !ep.get(u)) ? r.call(function(s) {
        return W2(s, /^\d/.test(a.value) ? Td(a.value) : a.value, e);
      }, "key") : t("key");
    }
    var $s = { printProperty: function(e, t, n) {
      return e.getValue().shorthand ? n("value") : h6(e, t, n, z2(e, t, n), ":", "value");
    }, printPropertyKey: z2 }, X2 = nr.printDanglingComments, D6 = nr.printCommentsSeparately, g6 = X.getNextNonSpaceNonCommentCharacterIndex, Su = fe.builders, xd = Su.line, ba = Su.softline, st = Su.group, Gi = Su.indent, Hi = Su.ifBreak, J2 = Su.hardline, m6 = Su.join, v6 = Su.indentIfBreak, wd = I.getFunctionParameters, y6 = I.hasLeadingOwnLineComment, E6 = I.isFlowAnnotationComment, C6 = I.isJsxNode, A6 = I.isTemplateOnItsOwnLine, b6 = I.shouldPrintComma, F6 = I.startsWithNoLookaheadToken, S6 = I.returnArgumentHasLeadingComment, T6 = I.isBinaryish, x6 = I.isLineComment, rp = I.hasComment, w6 = I.getComments, Y2 = I.CommentCheckFlags, B6 = I.isCallLikeExpression, k6 = tr.locEnd, Bd = va.printFunctionParameters, K2 = va.shouldGroupFunctionParameters, N6 = $s.printPropertyKey, Q2 = hr.printFunctionTypeParameters;
    function kd(r, e, t) {
      var n = r.getNode(), u = Bd(r, t, e), a = Nd(r, t, e), i = K2(n, a), o = [Q2(r, e, t), st([i ? st(u) : u, a])];
      return n.body ? o.push(" ", t("body")) : o.push(e.semi ? ";" : ""), o;
    }
    function Z2(r, e) {
      return e.arrowParens === "always" ? !1 : e.arrowParens === "avoid" ? function(t) {
        var n = wd(t);
        return !(n.length !== 1 || t.typeParameters || rp(t, Y2.Dangling) || n[0].type !== "Identifier" || n[0].typeAnnotation || rp(n[0]) || n[0].optional || t.predicate || t.returnType);
      }(r.getValue()) : !1;
    }
    function Nd(r, e, t) {
      var n = r.getValue(), u = e("returnType");
      if (n.returnType && E6(t.originalText, n.returnType))
        return [" /*: ", u, " */"];
      var a = [u];
      return n.returnType && n.returnType.typeAnnotation && a.unshift(": "), n.predicate && a.push(n.returnType ? " " : ": ", e("predicate")), a;
    }
    function _2(r, e, t) {
      var n = r.getValue(), u = e.semi ? ";" : "", a = [];
      n.argument && (S6(e, n.argument) ? a.push([" (", Gi([J2, t("argument")]), J2, ")"]) : T6(n.argument) || n.argument.type === "SequenceExpression" ? a.push(st([Hi(" (", " "), Gi([ba, t("argument")]), ba, Hi(")")])) : a.push(" ", t("argument")));
      var i = w6(n), o = sr(i), s = o && x6(o);
      return s && a.push(u), rp(n, Y2.Dangling) && a.push(" ", X2(r, e, !0)), s || a.push(u), a;
    }
    var Jn = { printFunctionDeclaration: function(e, t, n, u) {
      var a = e.getValue(), i = [];
      a.type === "TSDeclareFunction" && a.declare && i.push("declare "), a.async && i.push("async "), a.generator ? i.push("function* ") : i.push("function "), a.id && i.push(t("id"));
      var o = Bd(e, t, n, u), s = Nd(e, t, n), c = K2(a, s);
      return i.push(Q2(e, n, t), st([c ? st(o) : o, s]), a.body ? " " : "", t("body")), !n.semi || !a.declare && a.body || i.push(";"), i;
    }, printArrowFunctionExpression: function(e, t, n, u) {
      var a = e.getValue(), i = [], o = [], s = !1;
      if (function d() {
        var D = function(S, F, x, w) {
          var A = [];
          S.getValue().async && A.push("async "), Z2(S, F) ? A.push(x(["params", 0])) : A.push(st([Bd(S, x, F, w && (w.expandLastArg || w.expandFirstArg), !0), Nd(S, x, F)]));
          var k = X2(S, F, !0, function(O) {
            var q = g6(F.originalText, O, k6);
            return q !== !1 && F.originalText.slice(q, q + 2) === "=>";
          });
          return k && A.push(" ", k), A;
        }(e, t, n, u);
        if (i.length === 0)
          i.push(D);
        else {
          var v = D6(e, t), y = v.leading, b = v.trailing;
          i.push([y, D]), o.unshift(b);
        }
        s = s || a.returnType && wd(a).length > 0 || a.typeParameters || wd(a).some(function(S) {
          return S.type !== "Identifier";
        }), a.body.type !== "ArrowFunctionExpression" || u && u.expandLastArg ? o.unshift(n("body", u)) : (a = a.body, e.call(d, "body"));
      }(), i.length > 1)
        return function(d, D, v, y, b, S) {
          var F = d.getName(), x = d.getParentNode(), w = B6(x) && F === "callee", A = Boolean(D && D.assignmentLayout), k = S.body.type !== "BlockStatement" && S.body.type !== "ObjectExpression", O = w && k || D && D.assignmentLayout === "chain-tail-arrow-chain", q = Symbol("arrow-chain");
          return st([st(Gi([w || A ? ba : "", st(m6([" =>", xd], v), { shouldBreak: y })]), { id: q, shouldBreak: O }), " =>", v6(k ? Gi([xd, b]) : [" ", b], { groupId: q }), w ? Hi(ba, "", { groupId: q }) : ""]);
        }(e, u, i, s, o, a);
      var c = i;
      if (c.push(" =>"), !y6(t.originalText, a.body) && (a.body.type === "ArrayExpression" || a.body.type === "ObjectExpression" || a.body.type === "BlockStatement" || C6(a.body) || A6(a.body, t.originalText) || a.body.type === "ArrowFunctionExpression" || a.body.type === "DoExpression"))
        return st([].concat(c, [" ", o]));
      if (a.body.type === "SequenceExpression")
        return st([].concat(c, [st([" (", Gi([ba, o]), ba, ")"])]));
      var l = (u && u.expandLastArg || e.getParentNode().type === "JSXExpressionContainer") && !rp(a), p = u && u.expandLastArg && b6(t, "all"), f = a.body.type === "ConditionalExpression" && !F6(a.body, !1);
      return st([].concat(c, [st([Gi([xd, f ? Hi("", "(") : "", o, f ? Hi("", ")") : ""]), l ? [Hi(p ? "," : ""), ba] : ""])]));
    }, printMethod: function(e, t, n) {
      var u = e.getNode(), a = u.kind, i = u.value || u, o = [];
      return a && a !== "init" && a !== "method" && a !== "constructor" ? (Hn.ok(a === "get" || a === "set"), o.push(a, " ")) : i.async && o.push("async "), i.generator && o.push("*"), o.push(N6(e, t, n), u.optional || u.key.optional ? "?" : ""), u === i ? o.push(kd(e, t, n)) : i.type === "FunctionExpression" ? o.push(e.call(function(s) {
        return kd(s, t, n);
      }, "value")) : o.push(n("value")), o;
    }, printReturnStatement: function(e, t, n) {
      return ["return", _2(e, t, n)];
    }, printThrowStatement: function(e, t, n) {
      return ["throw", _2(e, t, n)];
    }, printMethodInternal: kd, shouldPrintParamsWithoutParens: Z2 }, e1 = X.isNonEmptyArray, P6 = X.hasNewline, qs = fe.builders, tp = qs.line, np = qs.hardline, Pd = qs.join, I6 = qs.breakParent, O6 = qs.group, r1 = tr.locStart, L6 = tr.locEnd, R6 = I.getParentExportDeclaration;
    function t1(r, e) {
      return r.decorators.some(function(t) {
        return P6(e.originalText, L6(t));
      });
    }
    function n1(r) {
      if (r.type !== "ExportDefaultDeclaration" && r.type !== "ExportNamedDeclaration" && r.type !== "DeclareExportDeclaration")
        return !1;
      var e = r.declaration && r.declaration.decorators;
      return e1(e) && r1(r, { ignoreDecorators: !0 }) > r1(e[0]);
    }
    var up = { printDecorators: function(e, t, n) {
      var u = e.getValue(), a = u.decorators;
      if (!(!e1(a) || n1(e.getParentNode()))) {
        var i = u.type === "ClassExpression" || u.type === "ClassDeclaration" || t1(u, t);
        return [R6(e) ? np : i ? I6 : "", Pd(tp, e.map(n, "decorators")), tp];
      }
    }, printClassMemberDecorators: function(e, t, n) {
      var u = e.getValue();
      return O6([Pd(tp, e.map(n, "decorators")), t1(u, t) ? np : tp]);
    }, printDecoratorsBeforeExport: function(e, t, n) {
      return [Pd(np, e.map(n, "declaration", "decorators")), np];
    }, hasDecoratorsBeforeExport: n1 }, zi = X.isNonEmptyArray, M6 = X.createGroupIdMapper, j6 = nr.printComments, $6 = nr.printDanglingComments, Fa = fe.builders, q6 = Fa.join, Vs = Fa.line, u1 = Fa.hardline, a1 = Fa.softline, ap = Fa.group, ip = Fa.indent, Id = Fa.ifBreak, Od = I.hasComment, Ld = I.CommentCheckFlags, V6 = Wi.getTypeParametersGroupId, U6 = Jn.printMethod, W6 = hr.printOptionalToken, G6 = hr.printTypeAnnotation, H6 = $s.printPropertyKey, z6 = Rs.printAssignment, i1 = up.printClassMemberDecorators, o1 = M6("heritageGroup");
    function s1(r) {
      return r.typeParameters && !Od(r.typeParameters, Ld.Trailing | Ld.Line) && !function(e) {
        return ["superClass", "extends", "mixins", "implements"].filter(function(t) {
          return Boolean(e[t]);
        }).length > 1;
      }(r);
    }
    function Rd(r, e, t, n) {
      var u = r.getValue();
      if (!zi(u[n]))
        return "";
      var a = $6(r, e, !0, function(i) {
        var o = i.marker;
        return o === n;
      });
      return [s1(u) ? Id(" ", Vs, { groupId: V6(u.typeParameters) }) : Vs, a, a && u1, n, ap(ip([Vs, q6([",", Vs], r.map(t, n))]))];
    }
    function X6(r, e, t) {
      var n = t("superClass");
      return r.getParentNode().type === "AssignmentExpression" ? ap(Id(["(", ip([a1, n]), a1, ")"], n)) : n;
    }
    var Tu = { printClass: function(e, t, n) {
      var u = e.getValue(), a = [];
      u.declare && a.push("declare "), u.abstract && a.push("abstract "), a.push("class");
      var i = u.id && Od(u.id, Ld.Trailing) || u.superClass && Od(u.superClass) || zi(u.extends) || zi(u.mixins) || zi(u.implements), o = [], s = [];
      if (u.id && o.push(" ", n("id")), o.push(n("typeParameters")), u.superClass) {
        var c = ["extends ", X6(e, t, n), n("superTypeParameters")], l = e.call(function(f) {
          return j6(f, c, t);
        }, "superClass");
        i ? s.push(Vs, ap(l)) : s.push(" ", l);
      } else
        s.push(Rd(e, t, n, "extends"));
      if (s.push(Rd(e, t, n, "mixins"), Rd(e, t, n, "implements")), i) {
        var p;
        p = s1(u) ? [].concat(o, [ip(s)]) : ip([].concat(o, [s])), a.push(ap(p, { id: o1(u) }));
      } else
        a.push.apply(a, o.concat(s));
      return a.push(" ", n("body")), a;
    }, printClassMethod: function(e, t, n) {
      var u = e.getValue(), a = [];
      return zi(u.decorators) && a.push(i1(e, t, n)), u.accessibility && a.push(u.accessibility + " "), u.readonly && a.push("readonly "), u.declare && a.push("declare "), u.static && a.push("static "), u.override && a.push("override "), (u.type === "TSAbstractMethodDefinition" || u.abstract) && a.push("abstract "), a.push(U6(e, t, n)), a;
    }, printClassProperty: function(e, t, n) {
      var u = e.getValue(), a = [], i = t.semi ? ";" : "";
      return zi(u.decorators) && a.push(i1(e, t, n)), u.accessibility && a.push(u.accessibility + " "), u.declare && a.push("declare "), u.static && a.push("static "), u.override && a.push("override "), (u.type === "TSAbstractClassProperty" || u.abstract) && a.push("abstract "), u.readonly && a.push("readonly "), u.variance && a.push(n("variance")), a.push(H6(e, t, n), W6(e), G6(e, t, n)), [z6(e, t, n, a, " =", "value"), i];
    }, printHardlineAfterHeritage: function(e) {
      return Id(u1, "", { groupId: o1(e) });
    } }, c1 = X.isNonEmptyArray, Us = fe.builders, J6 = Us.join, Md = Us.line, jd = Us.group, $d = Us.indent, Y6 = Us.ifBreak, l1 = I.hasComment, K6 = I.identity, qd = I.CommentCheckFlags, Q6 = Wi.getTypeParametersGroupId, Z6 = hr.printTypeScriptModifiers, Vd = { printInterface: function(e, t, n) {
      var u = e.getValue(), a = [];
      u.declare && a.push("declare "), u.type === "TSInterfaceDeclaration" && a.push(u.abstract ? "abstract " : "", Z6(e, t, n)), a.push("interface");
      var i = [], o = [];
      u.type !== "InterfaceTypeAnnotation" && i.push(" ", n("id"), n("typeParameters"));
      var s = u.typeParameters && !l1(u.typeParameters, qd.Trailing | qd.Line);
      return c1(u.extends) && o.push(s ? Y6(" ", Md, { groupId: Q6(u.typeParameters) }) : Md, "extends ", (u.extends.length === 1 ? K6 : $d)(J6([",", Md], e.map(n, "extends")))), u.id && l1(u.id, qd.Trailing) || c1(u.extends) ? s ? a.push(jd([].concat(i, [$d(o)]))) : a.push(jd($d([].concat(i, o)))) : a.push.apply(a, i.concat(o)), a.push(" ", n("body")), jd(a);
    } }, Ud = X.isNonEmptyArray, Sa = fe.builders, p1 = Sa.softline, _6 = Sa.group, ek = Sa.indent, Wd = Sa.join, Gd = Sa.line, rk = Sa.ifBreak, tk = Sa.hardline, nk = nr.printDanglingComments, f1 = I.hasComment, uk = I.CommentCheckFlags, ak = I.shouldPrintComma, ik = I.needsHardlineAfterDanglingComment, d1 = tr.locStart, ok = tr.hasSameLoc, sk = up.hasDecoratorsBeforeExport, ck = up.printDecoratorsBeforeExport;
    function Hd(r, e, t) {
      var n = r.getValue();
      if (!n.source)
        return "";
      var u = [];
      return D1(n, e) || u.push(" from"), u.push(" ", t("source")), u;
    }
    function h1(r, e, t) {
      var n = r.getValue();
      if (D1(n, e))
        return "";
      var u = [" "];
      if (Ud(n.specifiers)) {
        var a = [], i = [];
        r.each(function() {
          var o = r.getValue().type;
          if (o === "ExportNamespaceSpecifier" || o === "ExportDefaultSpecifier" || o === "ImportNamespaceSpecifier" || o === "ImportDefaultSpecifier")
            a.push(t());
          else {
            if (o !== "ExportSpecifier" && o !== "ImportSpecifier")
              throw new Error("Unknown specifier type ".concat(JSON.stringify(o)));
            i.push(t());
          }
        }, "specifiers"), u.push(Wd(", ", a)), i.length > 0 && (a.length > 0 && u.push(", "), i.length > 1 || a.length > 0 || n.specifiers.some(function(o) {
          return f1(o);
        }) ? u.push(_6(["{", ek([e.bracketSpacing ? Gd : p1, Wd([",", Gd], i)]), rk(ak(e) ? "," : ""), e.bracketSpacing ? Gd : p1, "}"])) : u.push(["{", e.bracketSpacing ? " " : ""].concat(i, [e.bracketSpacing ? " " : "", "}"])));
      } else
        u.push("{}");
      return u;
    }
    function D1(r, e) {
      var t = r.type, n = r.importKind, u = r.source, a = r.specifiers;
      return t === "ImportDeclaration" && !Ud(a) && n !== "type" && !/{\s*}/.test(e.originalText.slice(d1(r), d1(u)));
    }
    function zd(r, e, t) {
      var n = r.getNode();
      return Ud(n.assertions) ? [" assert {", e.bracketSpacing ? " " : "", Wd(", ", r.map(t, "assertions")), e.bracketSpacing ? " " : "", "}"] : "";
    }
    var Xi = { printImportDeclaration: function(e, t, n) {
      var u = e.getValue(), a = t.semi ? ";" : "", i = [], o = u.importKind;
      return i.push("import"), o && o !== "value" && i.push(" ", o), i.push(h1(e, t, n), Hd(e, t, n), zd(e, t, n), a), i;
    }, printExportDeclaration: function(e, t, n) {
      var u = e.getValue(), a = [];
      sk(u) && a.push(ck(e, t, n));
      var i = u.type, o = u.exportKind, s = u.declaration;
      return a.push("export"), (u.default || i === "ExportDefaultDeclaration") && a.push(" default"), f1(u, uk.Dangling) && (a.push(" ", nk(e, t, !0)), ik(u) && a.push(tk)), s ? a.push(" ", n("declaration")) : a.push(o === "type" ? " type" : "", h1(e, t, n), Hd(e, t, n), zd(e, t, n)), function(c, l) {
        if (!l.semi)
          return !1;
        var p = c.type, f = c.declaration, d = c.default || p === "ExportDefaultDeclaration";
        if (!f)
          return !0;
        var D = f.type;
        return !!(d && D !== "ClassDeclaration" && D !== "FunctionDeclaration" && D !== "TSInterfaceDeclaration" && D !== "DeclareClass" && D !== "DeclareFunction" && D !== "TSDeclareFunction" && D !== "EnumDeclaration");
      }(u, t) && a.push(";"), a;
    }, printExportAllDeclaration: function(e, t, n) {
      var u = e.getValue(), a = t.semi ? ";" : "", i = [], o = u.exportKind, s = u.exported;
      return i.push("export"), o === "type" && i.push(" type"), i.push(" *"), s && i.push(" as ", n("exported")), i.push(Hd(e, t, n), zd(e, t, n), a), i;
    }, printModuleSpecifier: function(e, t, n) {
      var u = e.getNode(), a = u.type, i = u.importKind, o = [];
      a === "ImportSpecifier" && i && o.push(i, " ");
      var s = a.startsWith("Import"), c = s ? "imported" : "local", l = s ? "local" : "exported", p = "", f = "";
      return a === "ExportNamespaceSpecifier" || a === "ImportNamespaceSpecifier" ? p = "*" : u[c] && (p = n(c)), !u[l] || u[c] && ok(u[c], u[l]) || (f = n(l)), o.push(p, p && f ? " as " : "", f), o;
    } }, lk = I.getParentExportDeclaration, pk = Tu.printClass, g1 = rt.printOpaqueType, m1 = rt.printTypeAlias, fk = rt.printIntersectionType, dk = rt.printUnionType, hk = rt.printFunctionType, Dk = rt.printTupleType, gk = rt.printIndexedAccessType, mk = Vd.printInterface, vk = Wi.printTypeParameters, yk = Xi.printExportDeclaration, Ek = Xi.printExportAllDeclaration;
    function En(r, e) {
      var t = lk(r);
      return t ? (Hn.strictEqual(t.type, "DeclareExportDeclaration"), e) : ["declare ", e];
    }
    var Ck = { printFlow: function(e, t, n) {
      var u = e.getValue(), a = t.semi ? ";" : "";
      switch (u.type) {
        case "DeclareClass":
          return En(e, pk(e, t, n));
        case "DeclareFunction":
          return En(e, ["function ", n("id"), u.predicate ? " " : "", n("predicate"), a]);
        case "DeclareModule":
          return En(e, ["module ", n("id"), " ", n("body")]);
        case "DeclareModuleExports":
          return En(e, ["module.exports", ": ", n("typeAnnotation"), a]);
        case "DeclareVariable":
          return En(e, ["var ", n("id"), a]);
        case "DeclareOpaqueType":
          return En(e, g1(e, t, n));
        case "DeclareInterface":
          return En(e, mk(e, t, n));
        case "DeclareTypeAlias":
          return En(e, m1(e, t, n));
        case "DeclareExportDeclaration":
          return En(e, yk(e, t, n));
        case "DeclareExportAllDeclaration":
          return En(e, Ek(e, t, n));
        case "OpaqueType":
          return g1(e, t, n);
        case "TypeAlias":
          return m1(e, t, n);
        case "IntersectionTypeAnnotation":
          return fk(e, t, n);
        case "UnionTypeAnnotation":
          return dk(e, t, n);
        case "FunctionTypeAnnotation":
          return hk(e, t, n);
        case "TupleTypeAnnotation":
          return Dk(e, t, n);
        case "GenericTypeAnnotation":
          return [n("id"), vk(e, t, n, "typeParameters")];
        case "IndexedAccessType":
        case "OptionalIndexedAccessType":
          return gk(e, t, n);
        case "TypeAnnotation":
          return n("typeAnnotation");
      }
    } }, Ak = X.hasNewlineInRange, op = I.isJsxNode, bk = I.isBlockComment, Xd = I.getComments, Fk = I.isCallExpression, v1 = I.isMemberExpression, Sk = tr.locStart, Tk = tr.locEnd, xu = fe.builders, y1 = xu.line, Ws = xu.softline, E1 = xu.group, sp = xu.indent, cp = xu.align, lp = xu.ifBreak, xk = xu.dedent, wk = xu.breakParent;
    function Bk(r, e, t) {
      var n = r.getValue(), u = n.type === "ConditionalExpression", a = u ? "alternate" : "falseType", i = r.getParentNode(), o = u ? t("test") : [t("checkType"), " ", "extends", " ", t("extendsType")];
      return i.type === n.type && i[a] === n ? cp(2, o) : o;
    }
    var kk = /* @__PURE__ */ new Map([["AssignmentExpression", "right"], ["VariableDeclarator", "init"], ["ReturnStatement", "argument"], ["ThrowStatement", "argument"], ["UnaryExpression", "argument"], ["YieldExpression", "argument"]]), C1 = { printTernary: function(e, t, n) {
      var u = e.getValue(), a = u.type === "ConditionalExpression", i = a ? "consequent" : "trueType", o = a ? "alternate" : "falseType", s = a ? ["test"] : ["checkType", "extendsType"], c = u[i], l = u[o], p = [], f = !1, d = e.getParentNode(), D = d.type === u.type && s.some(function(K) {
        return d[K] === u;
      }), v, y, b = d.type === u.type && !D, S = 0;
      do
        y = v || u, v = e.getParentNode(S), S++;
      while (v && v.type === u.type && s.every(function(K) {
        return v[K] !== y;
      }));
      var F = v || d, x = y;
      if (a && (op(u[s[0]]) || op(c) || op(l) || function(K) {
        for (var ne = [K], ue = 0; ue < ne.length; ue++)
          for (var Ce = ne[ue], oe = 0, ae = ["test", "consequent", "alternate"]; oe < ae.length; oe++) {
            var ve = ae[oe], Le = Ce[ve];
            if (op(Le))
              return !0;
            Le.type === "ConditionalExpression" && ne.push(Le);
          }
        return !1;
      }(x))) {
        f = !0, b = !0;
        var w = function(ne) {
          return [lp("("), sp([Ws, ne]), Ws, lp(")")];
        }, A = function(ne) {
          return ne.type === "NullLiteral" || ne.type === "Literal" && ne.value === null || ne.type === "Identifier" && ne.name === "undefined";
        };
        p.push(" ? ", A(c) ? n(i) : w(n(i)), " : ", l.type === u.type || A(l) ? n(o) : w(n(o)));
      } else {
        var k = [y1, "? ", c.type === u.type ? lp("", "(") : "", cp(2, n(i)), c.type === u.type ? lp("", ")") : "", y1, ": ", l.type === u.type ? n(o) : cp(2, n(o))];
        p.push(d.type !== u.type || d[o] === u || D ? k : t.useTabs ? xk(sp(k)) : cp(Math.max(0, t.tabWidth - 2), k));
      }
      var O = Kf([].concat(_(s.map(function(K) {
        return Xd(u[K]);
      })), [Xd(c), Xd(l)])).some(function(K) {
        return bk(K) && Ak(t.originalText, Sk(K), Tk(K));
      }), q = !f && (v1(d) || d.type === "NGPipeExpression" && d.left === u) && !d.computed, H = function(K) {
        var ne = K.getValue();
        if (ne.type !== "ConditionalExpression")
          return !1;
        for (var ue, Ce = ne, oe = 0; !ue; oe++) {
          var ae = K.getParentNode(oe);
          Fk(ae) && ae.callee === Ce || v1(ae) && ae.object === Ce || ae.type === "TSNonNullExpression" && ae.expression === Ce ? Ce = ae : ae.type === "NewExpression" && ae.callee === Ce || ae.type === "TSAsExpression" && ae.expression === Ce ? (ue = K.getParentNode(oe + 1), Ce = ae) : ue = ae;
        }
        return Ce !== ne && ue[kk.get(ue.type)] === Ce;
      }(e), R = ($ = [Bk(e, 0, n), b ? p : sp(p), a && q && !H ? Ws : ""], d === F ? E1($, { shouldBreak: O }) : O ? [$, wk] : $), $;
      return D || H ? E1([sp([Ws, R]), Ws]) : R;
    } }, A1 = nr.printDanglingComments, Ji = fe.builders, pp = Ji.line, Jd = Ji.softline, Yd = Ji.group, Nk = Ji.indent, b1 = Ji.ifBreak, F1 = Ji.hardline, S1 = X.getLast, Pk = X.hasNewlineInRange, Ik = X.hasNewline, Ok = X.isNonEmptyArray, Lk = I.shouldPrintComma, Gs = I.hasComment, Rk = I.getComments, Hs = I.CommentCheckFlags, Mk = I.isNextLineEmpty, zs = tr.locStart, jk = tr.locEnd, T1 = hr.printOptionalToken, Kd = hr.printTypeAnnotation, x1 = va.shouldHugFunctionParameters, $k = rt.shouldHugType, qk = Tu.printHardlineAfterHeritage, w1 = { printObject: function(e, t, n) {
      var u = t.semi ? ";" : "", a = e.getValue(), i;
      i = a.type === "TSTypeLiteral" ? "members" : a.type === "TSInterfaceBody" ? "body" : "properties";
      var o = a.type === "ObjectTypeAnnotation", s = [i];
      o && s.push("indexers", "callProperties", "internalSlots");
      for (var c = s.map(function(R) {
        return a[R][0];
      }).sort(function(R, $) {
        return zs(R) - zs($);
      })[0], l = e.getParentNode(0), p = o && l && (l.type === "InterfaceDeclaration" || l.type === "DeclareInterface" || l.type === "DeclareClass") && e.getName() === "body", f = a.type === "TSInterfaceBody" || p || a.type === "ObjectPattern" && l.type !== "FunctionDeclaration" && l.type !== "FunctionExpression" && l.type !== "ArrowFunctionExpression" && l.type !== "ObjectMethod" && l.type !== "ClassMethod" && l.type !== "ClassPrivateMethod" && l.type !== "AssignmentPattern" && l.type !== "CatchClause" && a.properties.some(function(R) {
        return R.value && (R.value.type === "ObjectPattern" || R.value.type === "ArrayPattern");
      }) || a.type !== "ObjectPattern" && c && Pk(t.originalText, zs(a), zs(c)), d = p ? ";" : a.type === "TSInterfaceBody" || a.type === "TSTypeLiteral" ? b1(u, ";") : ",", D = a.type === "RecordExpression" ? "#{" : a.exact ? "{|" : "{", v = a.exact ? "|}" : "}", y = [], b = 0, S = s; b < S.length; b++) {
        var F = S[b];
        e.each(function(R) {
          var $ = R.getValue();
          y.push({ node: $, printed: n(), loc: zs($) });
        }, F);
      }
      s.length > 1 && y.sort(function(R, $) {
        return R.loc - $.loc;
      });
      var x = [], w = y.map(function(R) {
        var $ = [].concat(_(x), [Yd(R.printed)]);
        return x = [d, pp], R.node.type !== "TSPropertySignature" && R.node.type !== "TSMethodSignature" && R.node.type !== "TSConstructSignatureDeclaration" || !Gs(R.node, Hs.PrettierIgnore) || x.shift(), Mk(R.node, t) && x.push(F1), $;
      });
      if (a.inexact) {
        var A;
        if (Gs(a, Hs.Dangling)) {
          var k = Gs(a, Hs.Line);
          A = [A1(e, t, !0), k || Ik(t.originalText, jk(S1(Rk(a)))) ? F1 : pp, "..."];
        } else
          A = ["..."];
        w.push([].concat(_(x), _(A)));
      }
      var O = S1(a[i]), q = !(a.inexact || O && O.type === "RestElement" || O && (O.type === "TSPropertySignature" || O.type === "TSCallSignatureDeclaration" || O.type === "TSMethodSignature" || O.type === "TSConstructSignatureDeclaration") && Gs(O, Hs.PrettierIgnore)), H;
      if (w.length === 0) {
        if (!Gs(a, Hs.Dangling))
          return [D, v, Kd(e, t, n)];
        H = Yd([D, A1(e, t), Jd, v, T1(e), Kd(e, t, n)]);
      } else
        H = [p && Ok(a.properties) ? qk(l) : "", D, Nk([t.bracketSpacing ? pp : Jd].concat(_(w))), b1(q && (d !== "," || Lk(t)) ? d : ""), t.bracketSpacing ? pp : Jd, v, T1(e), Kd(e, t, n)];
      return e.match(function(R) {
        return R.type === "ObjectPattern" && !R.decorators;
      }, function(R, $, K) {
        return x1(R) && ($ === "params" || $ === "parameters" || $ === "this" || $ === "rest") && K === 0;
      }) || e.match($k, function(R, $) {
        return $ === "typeAnnotation";
      }, function(R, $) {
        return $ === "typeAnnotation";
      }, function(R, $, K) {
        return x1(R) && ($ === "params" || $ === "parameters" || $ === "this" || $ === "rest") && K === 0;
      }) || !f && e.match(function(R) {
        return R.type === "ObjectPattern";
      }, function(R) {
        return R.type === "AssignmentExpression" || R.type === "VariableDeclarator";
      }) ? H : Yd(H, { shouldBreak: f });
    } }, B1 = fe.builders.hardline, Vk = I.getLeftSidePathName, Uk = I.hasNakedLeftSide, Wk = I.isJsxNode, Gk = I.isTheOnlyJsxElementInMarkdown, Hk = I.hasComment, zk = I.CommentCheckFlags, Xk = I.isNextLineEmpty, Jk = Jn.shouldPrintParamsWithoutParens;
    function k1(r, e, t, n) {
      var u = r.getValue(), a = [], i = u.type === "ClassBody", o = function(s) {
        for (var c = s.length - 1; c >= 0; c--) {
          var l = s[c];
          if (l.type !== "EmptyStatement")
            return l;
        }
      }(u[n]);
      return r.each(function(s, c, l) {
        var p = s.getValue();
        if (p.type !== "EmptyStatement") {
          var f = t();
          e.semi || i || Gk(e, s) || !function(d, D) {
            return d.getNode().type !== "ExpressionStatement" ? !1 : d.call(function(v) {
              return N1(v, D);
            }, "expression");
          }(s, e) ? a.push(f) : Hk(p, zk.Leading) ? a.push(t([], { needsSemi: !0 })) : a.push(";", f), !e.semi && i && Yk(p) && function(d, D) {
            var v = d.key && d.key.name;
            if (!(v !== "static" && v !== "get" && v !== "set" || d.value || d.typeAnnotation))
              return !0;
            if (!D || D.static || D.accessibility)
              return !1;
            if (!D.computed) {
              var y = D.key && D.key.name;
              if (y === "in" || y === "instanceof")
                return !0;
            }
            switch (D.type) {
              case "ClassProperty":
              case "PropertyDefinition":
              case "TSAbstractClassProperty":
                return D.computed;
              case "MethodDefinition":
              case "TSAbstractMethodDefinition":
              case "ClassMethod":
              case "ClassPrivateMethod": {
                if ((D.value ? D.value.async : D.async) || D.kind === "get" || D.kind === "set")
                  return !1;
                var b = D.value ? D.value.generator : D.generator;
                return !(!D.computed && !b);
              }
              case "TSIndexSignature":
                return !0;
            }
            return !1;
          }(p, l[c + 1]) && a.push(";"), p !== o && (a.push(B1), Xk(p, e) && a.push(B1));
        }
      }, n), a;
    }
    function N1(r, e) {
      var t = r.getValue();
      switch (t.type) {
        case "ParenthesizedExpression":
        case "TypeCastExpression":
        case "ArrayExpression":
        case "ArrayPattern":
        case "TemplateLiteral":
        case "TemplateElement":
        case "RegExpLiteral":
          return !0;
        case "ArrowFunctionExpression":
          if (!Jk(r, e))
            return !0;
          break;
        case "UnaryExpression": {
          var n = t.prefix, u = t.operator;
          if (n && (u === "+" || u === "-"))
            return !0;
          break;
        }
        case "BindExpression":
          if (!t.object)
            return !0;
          break;
        case "Literal":
          if (t.regex)
            return !0;
          break;
        default:
          if (Wk(t))
            return !0;
      }
      return !!qi(r, e) || !!Uk(t) && r.call.apply(r, [function(a) {
        return N1(a, e);
      }].concat(_(Vk(r, t))));
    }
    var Yk = function(e) {
      var t = e.type;
      return t === "ClassProperty" || t === "PropertyDefinition" || t === "ClassPrivateProperty";
    }, P1 = { printBody: function(e, t, n) {
      return k1(e, t, n, "body");
    }, printSwitchCaseConsequent: function(e, t, n) {
      return k1(e, t, n, "consequent");
    } }, Kk = nr.printDanglingComments, I1 = X.isNonEmptyArray, O1 = fe.builders, Yi = O1.hardline, Qk = O1.indent, Zk = I.hasComment, _k = I.CommentCheckFlags, eN = I.isNextLineEmpty, rN = Tu.printHardlineAfterHeritage, tN = P1.printBody;
    function L1(r, e, t) {
      var n = r.getValue(), u = I1(n.directives), a = n.body.some(function(c) {
        return c.type !== "EmptyStatement";
      }), i = Zk(n, _k.Dangling);
      if (!u && !a && !i)
        return "";
      var o = [];
      if (u && r.each(function(c, l, p) {
        o.push(t()), (l < p.length - 1 || a || i) && (o.push(Yi), eN(c.getValue(), e) && o.push(Yi));
      }, "directives"), a && o.push(tN(r, e, t)), i && o.push(Kk(r, e, !0)), n.type === "Program") {
        var s = r.getParentNode();
        s && s.type === "ModuleExpression" || o.push(Yi);
      }
      return o;
    }
    var Qd = { printBlock: function(e, t, n) {
      var u = e.getValue(), a = [];
      if (u.type === "StaticBlock" && a.push("static "), u.type === "ClassBody" && I1(u.body)) {
        var i = e.getParentNode();
        a.push(rN(i));
      }
      a.push("{");
      var o = L1(e, t, n);
      if (o)
        a.push(Qk([Yi, o]), Yi);
      else {
        var s = e.getParentNode(), c = e.getParentNode(1);
        s.type === "ArrowFunctionExpression" || s.type === "FunctionExpression" || s.type === "FunctionDeclaration" || s.type === "ObjectMethod" || s.type === "ClassMethod" || s.type === "ClassPrivateMethod" || s.type === "ForStatement" || s.type === "WhileStatement" || s.type === "DoWhileStatement" || s.type === "DoExpression" || s.type === "CatchClause" && !c.finalizer || s.type === "TSModuleDeclaration" || s.type === "TSDeclareFunction" || u.type === "StaticBlock" || u.type === "ClassBody" || a.push(Yi);
      }
      return a.push("}"), a;
    }, printBlockBody: L1 }, Zd = nr.printDanglingComments, nN = X.hasNewlineInRange, wu = fe.builders, R1 = wu.join, M1 = wu.line, j1 = wu.hardline, jt = wu.softline, tt = wu.group, Ki = wu.indent, uN = wu.conditionalGroup, fp = wu.ifBreak, aN = I.isLiteral, $1 = I.getTypeScriptMappedTypeModifier, q1 = I.shouldPrintComma, iN = I.isCallExpression, oN = I.isMemberExpression, _d = tr.locStart, sN = tr.locEnd, V1 = hr.printOptionalToken, eh = hr.printTypeScriptModifiers, cN = C1.printTernary, U1 = va.printFunctionParameters, lN = va.shouldGroupFunctionParameters, pN = Cu.printTemplateLiteral, fN = Ps.printArrayItems, dN = w1.printObject, hN = Tu.printClassProperty, DN = Tu.printClassMethod, gN = Wi.printTypeParameter, rh = Wi.printTypeParameters, mN = $s.printPropertyKey, vN = Jn.printFunctionDeclaration, yN = Jn.printMethodInternal, EN = Vd.printInterface, CN = Qd.printBlock, AN = rt.printTypeAlias, bN = rt.printIntersectionType, FN = rt.printUnionType, SN = rt.printFunctionType, TN = rt.printTupleType, xN = rt.printIndexedAccessType, wN = { printTypescript: function(e, t, n) {
      var u = e.getValue(), a = t.semi ? ";" : "", i = [];
      switch (u.type) {
        case "TSTypeAssertion": {
          var o = !(u.expression.type === "ArrayExpression" || u.expression.type === "ObjectExpression"), s = tt(["<", Ki([jt, n("typeAnnotation")]), jt, ">"]), c = [fp("("), Ki([jt, n("expression")]), jt, fp(")")];
          return o ? uN([[s, n("expression")], [s, tt(c, { shouldBreak: !0 })], [s, n("expression")]]) : tt([s, n("expression")]);
        }
        case "TSDeclareFunction":
          return vN(e, n, t);
        case "TSExportAssignment":
          return ["export = ", n("expression"), a];
        case "TSModuleBlock":
          return CN(e, t, n);
        case "TSInterfaceBody":
        case "TSTypeLiteral":
          return dN(e, t, n);
        case "TSTypeAliasDeclaration":
          return AN(e, t, n);
        case "TSQualifiedName":
          return R1(".", [n("left"), n("right")]);
        case "TSAbstractMethodDefinition":
        case "TSDeclareMethod":
          return DN(e, t, n);
        case "TSAbstractClassProperty":
          return hN(e, t, n);
        case "TSInterfaceHeritage":
        case "TSExpressionWithTypeArguments":
          return i.push(n("expression")), u.typeParameters && i.push(n("typeParameters")), i;
        case "TSTemplateLiteralType":
          return pN(e, n, t);
        case "TSNamedTupleMember":
          return [n("label"), u.optional ? "?" : "", ": ", n("elementType")];
        case "TSRestType":
          return ["...", n("typeAnnotation")];
        case "TSOptionalType":
          return [n("typeAnnotation"), "?"];
        case "TSInterfaceDeclaration":
          return EN(e, t, n);
        case "TSClassImplements":
          return [n("expression"), n("typeParameters")];
        case "TSTypeParameterDeclaration":
        case "TSTypeParameterInstantiation":
          return rh(e, t, n, "params");
        case "TSTypeParameter":
        case "TypeParameter":
          return gN(e, t, n);
        case "TypeofTypeAnnotation":
          return ["typeof ", n("argument")];
        case "TSAbstractKeyword":
          return "abstract";
        case "TSAsyncKeyword":
          return "async";
        case "TSDeclareKeyword":
          return "declare";
        case "TSExportKeyword":
          return "export";
        case "TSNeverKeyword":
          return "never";
        case "TSObjectKeyword":
          return "object";
        case "TSProtectedKeyword":
          return "protected";
        case "TSPrivateKeyword":
          return "private";
        case "TSPublicKeyword":
          return "public";
        case "TSReadonlyKeyword":
          return "readonly";
        case "TSStaticKeyword":
          return "static";
        case "TSUndefinedKeyword":
          return "undefined";
        case "TSUnknownKeyword":
          return "unknown";
        case "TSIntrinsicKeyword":
          return "intrinsic";
        case "TSAsExpression": {
          i.push(n("expression"), " as ", n("typeAnnotation"));
          var l = e.getParentNode();
          return iN(l) && l.callee === u || oN(l) && l.object === u ? tt([Ki([jt].concat(i)), jt]) : i;
        }
        case "TSArrayType":
          return [n("elementType"), "[]"];
        case "TSPropertySignature":
          return u.export && i.push("export "), u.accessibility && i.push(u.accessibility + " "), u.static && i.push("static "), u.readonly && i.push("readonly "), i.push(mN(e, t, n), V1(e)), u.typeAnnotation && i.push(": ", n("typeAnnotation")), u.initializer && i.push(" = ", n("initializer")), i;
        case "TSParameterProperty":
          return u.accessibility && i.push(u.accessibility + " "), u.export && i.push("export "), u.static && i.push("static "), u.readonly && i.push("readonly "), i.push(n("parameter")), i;
        case "TSTypeQuery":
          return ["typeof ", n("exprName")];
        case "TSIndexSignature": {
          var p = e.getParentNode(), f = u.parameters.length > 1 ? fp(q1(t) ? "," : "") : "", d = tt([Ki([jt, R1([", ", jt], e.map(n, "parameters"))]), f, jt]);
          return [u.export ? "export " : "", u.accessibility ? [u.accessibility, " "] : "", u.static ? "static " : "", u.readonly ? "readonly " : "", u.declare ? "declare " : "", "[", u.parameters ? d : "", u.typeAnnotation ? "]: " : "]", u.typeAnnotation ? n("typeAnnotation") : "", p.type === "ClassBody" ? a : ""];
        }
        case "TSTypePredicate":
          return [u.asserts ? "asserts " : "", n("parameterName"), u.typeAnnotation ? [" is ", n("typeAnnotation")] : ""];
        case "TSNonNullExpression":
          return [n("expression"), "!"];
        case "TSImportType":
          return [u.isTypeOf ? "typeof " : "", "import(", n(u.parameter ? "parameter" : "argument"), ")", u.qualifier ? [".", n("qualifier")] : "", rh(e, t, n, "typeParameters")];
        case "TSLiteralType":
          return n("literal");
        case "TSIndexedAccessType":
          return xN(e, t, n);
        case "TSConstructSignatureDeclaration":
        case "TSCallSignatureDeclaration":
        case "TSConstructorType":
          if (u.type === "TSConstructorType" && u.abstract && i.push("abstract "), u.type !== "TSCallSignatureDeclaration" && i.push("new "), i.push(tt(U1(e, n, t, !1, !0))), u.returnType || u.typeAnnotation) {
            var D = u.type === "TSConstructorType";
            i.push(D ? " => " : ": ", n("returnType"), n("typeAnnotation"));
          }
          return i;
        case "TSTypeOperator":
          return [u.operator, " ", n("typeAnnotation")];
        case "TSMappedType": {
          var v = nN(t.originalText, _d(u), sN(u));
          return tt(["{", Ki([t.bracketSpacing ? M1 : jt, u.readonly ? [$1(u.readonly, "readonly"), " "] : "", eh(e, t, n), n("typeParameter"), u.optional ? $1(u.optional, "?") : "", u.typeAnnotation ? ": " : "", n("typeAnnotation"), fp(a)]), Zd(e, t, !0), t.bracketSpacing ? M1 : jt, "}"], { shouldBreak: v });
        }
        case "TSMethodSignature": {
          var y = u.kind && u.kind !== "method" ? "".concat(u.kind, " ") : "";
          i.push(u.accessibility ? [u.accessibility, " "] : "", y, u.export ? "export " : "", u.static ? "static " : "", u.readonly ? "readonly " : "", u.abstract ? "abstract " : "", u.declare ? "declare " : "", u.computed ? "[" : "", n("key"), u.computed ? "]" : "", V1(e));
          var b = U1(e, n, t, !1, !0), S = u.returnType ? "returnType" : "typeAnnotation", F = u[S], x = F ? n(S) : "", w = lN(u, x);
          return i.push(w ? tt(b) : b), F && i.push(": ", tt(x)), tt(i);
        }
        case "TSNamespaceExportDeclaration":
          return i.push("export as namespace ", n("id")), t.semi && i.push(";"), tt(i);
        case "TSEnumDeclaration":
          return u.declare && i.push("declare "), u.modifiers && i.push(eh(e, t, n)), u.const && i.push("const "), i.push("enum ", n("id"), " "), u.members.length === 0 ? i.push(tt(["{", Zd(e, t), jt, "}"])) : i.push(tt(["{", Ki([j1, fN(e, t, "members", n), q1(t, "es5") ? "," : ""]), Zd(e, t, !0), j1, "}"])), i;
        case "TSEnumMember":
          return i.push(n("id")), u.initializer && i.push(" = ", n("initializer")), i;
        case "TSImportEqualsDeclaration":
          return u.isExport && i.push("export "), i.push("import "), u.importKind && u.importKind !== "value" && i.push(u.importKind, " "), i.push(n("id"), " = ", n("moduleReference")), t.semi && i.push(";"), tt(i);
        case "TSExternalModuleReference":
          return ["require(", n("expression"), ")"];
        case "TSModuleDeclaration": {
          var A = e.getParentNode(), k = aN(u.id), O = A.type === "TSModuleDeclaration", q = u.body && u.body.type === "TSModuleDeclaration";
          if (O)
            i.push(".");
          else {
            u.declare && i.push("declare "), i.push(eh(e, t, n));
            var H = t.originalText.slice(_d(u), _d(u.id));
            u.id.type === "Identifier" && u.id.name === "global" && !/namespace|module/.test(H) || i.push(k || /(^|\s)module(\s|$)/.test(H) ? "module " : "namespace ");
          }
          return i.push(n("id")), q ? i.push(n("body")) : u.body ? i.push(" ", tt(n("body"))) : i.push(a), i;
        }
        case "TSPrivateIdentifier":
          return u.escapedText;
        case "TSConditionalType":
          return cN(e, t, n);
        case "TSInferType":
          return ["infer", " ", n("typeParameter")];
        case "TSIntersectionType":
          return bN(e, t, n);
        case "TSUnionType":
          return FN(e, t, n);
        case "TSFunctionType":
          return SN(e, t, n);
        case "TSTupleType":
          return TN(e, t, n);
        case "TSTypeReference":
          return [n("typeName"), rh(e, t, n, "typeParameters")];
        case "TSTypeAnnotation":
          return n("typeAnnotation");
        case "TSEmptyBodyFunctionExpression":
          return yN(e, t, n);
        case "TSJSDocAllType":
          return "*";
        case "TSJSDocUnknownType":
          return "?";
        case "TSJSDocNullableType":
          return ["?", n("typeAnnotation")];
        case "TSJSDocNonNullableType":
          return ["!", n("typeAnnotation")];
        case "TSJSDocFunctionType":
          return ["function(", "): ", n("typeAnnotation")];
      }
    } }, BN = X.hasNewline, W1 = fe.builders, kN = W1.join, G1 = W1.hardline, NN = fe.utils.replaceNewlinesWithLiterallines, PN = I.isLineComment, IN = I.isBlockComment, H1 = tr.locStart, z1 = tr.locEnd, ON = { printComment: function(e, t) {
      var n = e.getValue();
      if (PN(n))
        return t.originalText.slice(H1(n), z1(n)).trimEnd();
      if (IN(n)) {
        if (function(o) {
          var s = "*".concat(o.value, "*").split(`
`);
          return s.length > 1 && s.every(function(c) {
            return c.trim()[0] === "*";
          });
        }(n)) {
          var u = function(o) {
            var s = o.value.split(`
`);
            return ["/*", kN(G1, s.map(function(c, l) {
              return l === 0 ? c.trimEnd() : " " + (l < s.length - 1 ? c.trim() : c.trimStart());
            })), "*/"];
          }(n);
          return n.trailing && !BN(t.originalText, H1(n), { backwards: !0 }) ? [G1, u] : u;
        }
        var a = z1(n), i = t.originalText.slice(a - 3, a) === "*-/";
        return ["/*", NN(n.value), i ? "*-/" : "*/"];
      }
      throw new Error("Not a comment: " + JSON.stringify(n));
    } }, X1 = X.printString, th = X.printNumber;
    function J1(r) {
      return r.toLowerCase();
    }
    function Y1(r) {
      var e = r.pattern, t = r.flags;
      return t = t.split("").sort().join(""), "/".concat(e, "/").concat(t);
    }
    var LN = { printLiteral: function(e, t) {
      var n = e.getNode();
      switch (n.type) {
        case "RegExpLiteral":
          return Y1(n);
        case "BigIntLiteral":
          return J1(n.bigint || n.extra.raw);
        case "NumericLiteral":
          return th(n.extra.raw);
        case "StringLiteral":
          return X1(n.extra.raw, t);
        case "NullLiteral":
          return "null";
        case "BooleanLiteral":
          return String(n.value);
        case "DecimalLiteral":
          return th(n.value) + "m";
        case "Literal": {
          if (n.regex)
            return Y1(n.regex);
          if (n.bigint)
            return J1(n.raw);
          var u = n.value;
          return typeof u == "number" ? th(n.raw) : typeof u == "string" ? X1(n.raw, t) : String(u);
        }
      }
    } }, dp = nr.printDanglingComments, K1 = X.hasNewline, RN = X.printString, Q1 = X.printNumber, Ta = fe.builders, nh = Ta.join, Xs = Ta.line, $r = Ta.hardline, Dr = Ta.softline, MN = Ta.literalline, ir = Ta.group, qr = Ta.indent, jN = Y0.insertPragma, $N = I.getCallArguments, qN = I.hasFlowShorthandAnnotationComment, Qi = I.hasComment, uh = I.CommentCheckFlags, VN = I.isFunctionNotation, UN = I.isGetterOrSetter, WN = I.isTheOnlyJsxElementInMarkdown, ah = I.isBlockComment, GN = I.isLineComment, Z1 = I.isNextLineEmpty, HN = I.needsHardlineAfterDanglingComment, _1 = I.rawText, zN = I.shouldPrintComma, XN = I.hasIgnoreComment, eE = I.isCallExpression, JN = I.isMemberExpression, rE = tr.locStart, tE = tr.locEnd, YN = Iy.printHtmlBinding, KN = Iy.isVueEventBindingExpression, QN = Xw.printAngular, ZN = _y.printJsx, _N = _y.hasJsxIgnoreComment, e9 = Ck.printFlow, r9 = wN.printTypescript, hp = hr.printOptionalToken, t9 = hr.printBindExpressionCallee, ih = hr.printTypeAnnotation, Bu = hr.adjustClause, n9 = Xi.printImportDeclaration, u9 = Xi.printExportDeclaration, a9 = Xi.printExportAllDeclaration, i9 = Xi.printModuleSpecifier, o9 = C1.printTernary, s9 = Cu.printTemplateLiteral, c9 = Ps.printArray, l9 = Ps.printArrayItems, p9 = w1.printObject, f9 = Tu.printClass, d9 = Tu.printClassMethod, h9 = Tu.printClassProperty, D9 = Wi.printTypeParameters, g9 = $s.printPropertyKey, m9 = $s.printProperty, v9 = Jn.printFunctionDeclaration, y9 = Jn.printArrowFunctionExpression, nE = Jn.printMethod, E9 = Jn.printReturnStatement, C9 = Jn.printThrowStatement, A9 = A2.printCallExpression, b9 = Vd.printInterface, F9 = Rs.printVariableDeclarator, S9 = Rs.printAssignmentExpression, T9 = ad.printBinaryishExpression, x9 = P1.printSwitchCaseConsequent, w9 = D2.printMemberExpression, B9 = Qd.printBlock, k9 = Qd.printBlockBody, N9 = ON.printComment, P9 = LN.printLiteral, I9 = up.printDecorators;
    function uE(r, e) {
      var t = _1(r), n = t.slice(1, -1);
      if (n.includes('"') || n.includes("'"))
        return t;
      var u = e.singleQuote ? "'" : '"';
      return u + n + u;
    }
    var O9 = { preprocess: By, print: function(e, t, n, u) {
      var a = function(f, d, D, v) {
        var y = f.getValue(), b = d.semi ? ";" : "";
        if (!y)
          return "";
        if (typeof y == "string")
          return y;
        for (var S = 0, F = [P9, YN, QN, ZN, e9, r9]; S < F.length; S++) {
          var x = F[S], w = x(f, d, D);
          if (w !== void 0)
            return w;
        }
        var A = [];
        switch (y.type) {
          case "JsExpressionRoot":
            return D("node");
          case "JsonRoot":
            return [D("node"), $r];
          case "File":
            return y.program && y.program.interpreter && A.push(D(["program", "interpreter"])), A.push(D("program")), A;
          case "Program":
            return k9(f, d, D);
          case "EmptyStatement":
            return "";
          case "ExpressionStatement":
            if (y.directive)
              return [uE(y.expression, d), b];
            if (d.parser === "__vue_event_binding") {
              var k = f.getParentNode();
              if (k.type === "Program" && k.body.length === 1 && k.body[0] === y)
                return [D("expression"), KN(y.expression) ? ";" : ""];
            }
            return [D("expression"), WN(d, f) ? "" : b];
          case "ParenthesizedExpression":
            return !Qi(y.expression) && (y.expression.type === "ObjectExpression" || y.expression.type === "ArrayExpression") ? ["(", D("expression"), ")"] : ir(["(", qr([Dr, D("expression")]), Dr, ")"]);
          case "AssignmentExpression":
            return S9(f, d, D);
          case "VariableDeclarator":
            return F9(f, d, D);
          case "BinaryExpression":
          case "LogicalExpression":
            return T9(f, d, D);
          case "AssignmentPattern":
            return [D("left"), " = ", D("right")];
          case "OptionalMemberExpression":
          case "MemberExpression":
            return w9(f, d, D);
          case "MetaProperty":
            return [D("meta"), ".", D("property")];
          case "BindExpression":
            return y.object && A.push(D("object")), A.push(ir(qr([Dr, t9(f, d, D)]))), A;
          case "Identifier":
            return [y.name, hp(f), ih(f, d, D)];
          case "V8IntrinsicIdentifier":
            return ["%", y.name];
          case "SpreadElement":
          case "SpreadElementPattern":
          case "SpreadProperty":
          case "SpreadPropertyPattern":
          case "RestElement":
          case "ObjectTypeSpreadProperty":
            return ["...", D("argument"), ih(f, d, D)];
          case "FunctionDeclaration":
          case "FunctionExpression": {
            var O = !1;
            if (v && v.expandLastArg) {
              var q = f.getParentNode();
              eE(q) && $N(q).length > 1 && (O = !0);
            }
            return v9(f, D, d, O);
          }
          case "ArrowFunctionExpression":
            return y9(f, d, D, v);
          case "YieldExpression":
            return A.push("yield"), y.delegate && A.push("*"), y.argument && A.push(" ", D("argument")), A;
          case "AwaitExpression":
            if (A.push("await"), y.argument) {
              A.push(" ", D("argument"));
              var H = f.getParentNode();
              if (eE(H) && H.callee === y || JN(H) && H.object === y) {
                A = [qr([Dr].concat(_(A))), Dr];
                var R = f.findAncestor(function(Ar) {
                  return Ar.type === "AwaitExpression" || Ar.type === "BlockStatement";
                });
                if (!R || R.type !== "AwaitExpression")
                  return ir(A);
              }
            }
            return A;
          case "ExportDefaultDeclaration":
          case "ExportNamedDeclaration":
            return u9(f, d, D);
          case "ExportAllDeclaration":
            return a9(f, d, D);
          case "ImportDeclaration":
            return n9(f, d, D);
          case "ImportSpecifier":
          case "ExportSpecifier":
          case "ImportNamespaceSpecifier":
          case "ExportNamespaceSpecifier":
          case "ImportDefaultSpecifier":
          case "ExportDefaultSpecifier":
            return i9(f, d, D);
          case "ImportAttribute":
            return [D("key"), ": ", D("value")];
          case "Import":
            return "import";
          case "BlockStatement":
          case "StaticBlock":
          case "ClassBody":
            return B9(f, d, D);
          case "ThrowStatement":
            return C9(f, d, D);
          case "ReturnStatement":
            return E9(f, d, D);
          case "NewExpression":
          case "ImportExpression":
          case "OptionalCallExpression":
          case "CallExpression":
            return A9(f, d, D);
          case "ObjectTypeInternalSlot":
            return [y.static ? "static " : "", "[[", D("id"), "]]", hp(f), y.method ? "" : ": ", D("value")];
          case "ObjectExpression":
          case "ObjectPattern":
          case "ObjectTypeAnnotation":
          case "RecordExpression":
            return p9(f, d, D);
          case "ObjectProperty":
          case "Property":
            return y.method || y.kind === "get" || y.kind === "set" ? nE(f, d, D) : m9(f, d, D);
          case "ObjectMethod":
            return nE(f, d, D);
          case "Decorator":
            return ["@", D("expression")];
          case "ArrayExpression":
          case "ArrayPattern":
          case "TupleExpression":
            return c9(f, d, D);
          case "SequenceExpression": {
            var $ = f.getParentNode(0);
            if ($.type === "ExpressionStatement" || $.type === "ForStatement") {
              var K = [];
              return f.each(function(Ar, fo) {
                fo === 0 ? K.push(D()) : K.push(",", qr([Xs, D()]));
              }, "expressions"), ir(K);
            }
            return ir(nh([",", Xs], f.map(D, "expressions")));
          }
          case "ThisExpression":
            return "this";
          case "Super":
            return "super";
          case "Directive":
            return [D("value"), b];
          case "DirectiveLiteral":
            return uE(y, d);
          case "UnaryExpression":
            return A.push(y.operator), /[a-z]$/.test(y.operator) && A.push(" "), Qi(y.argument) ? A.push(ir(["(", qr([Dr, D("argument")]), Dr, ")"])) : A.push(D("argument")), A;
          case "UpdateExpression":
            return A.push(D("argument"), y.operator), y.prefix && A.reverse(), A;
          case "ConditionalExpression":
            return o9(f, d, D);
          case "VariableDeclaration": {
            var ne = f.map(D, "declarations"), ue = f.getParentNode(), Ce = ue.type === "ForStatement" || ue.type === "ForInStatement" || ue.type === "ForOfStatement", oe = y.declarations.some(function(Ar) {
              return Ar.init;
            }), ae;
            return ne.length !== 1 || Qi(y.declarations[0]) ? ne.length > 0 && (ae = qr(ne[0])) : ae = ne[0], A = [y.declare ? "declare " : "", y.kind, ae ? [" ", ae] : "", qr(ne.slice(1).map(function(Ar) {
              return [",", oe && !Ce ? $r : Xs, Ar];
            }))], Ce && ue.body !== y || A.push(b), ir(A);
          }
          case "WithStatement":
            return ir(["with (", D("object"), ")", Bu(y.body, D("body"))]);
          case "IfStatement": {
            var ve = Bu(y.consequent, D("consequent")), Le = ir(["if (", ir([qr([Dr, D("test")]), Dr]), ")", ve]);
            if (A.push(Le), y.alternate) {
              var Te = Qi(y.consequent, uh.Trailing | uh.Line) || HN(y), Ne = y.consequent.type === "BlockStatement" && !Te;
              A.push(Ne ? " " : $r), Qi(y, uh.Dangling) && A.push(dp(f, d, !0), Te ? $r : " "), A.push("else", ir(Bu(y.alternate, D("alternate"), y.alternate.type === "IfStatement")));
            }
            return A;
          }
          case "ForStatement": {
            var Oe = Bu(y.body, D("body")), We = dp(f, d, !0), Re = We ? [We, Dr] : "";
            return y.init || y.test || y.update ? [Re, ir(["for (", ir([qr([Dr, D("init"), ";", Xs, D("test"), ";", Xs, D("update")]), Dr]), ")", Oe])] : [Re, ir(["for (;;)", Oe])];
          }
          case "WhileStatement":
            return ir(["while (", ir([qr([Dr, D("test")]), Dr]), ")", Bu(y.body, D("body"))]);
          case "ForInStatement":
            return ir(["for (", D("left"), " in ", D("right"), ")", Bu(y.body, D("body"))]);
          case "ForOfStatement":
            return ir(["for", y.await ? " await" : "", " (", D("left"), " of ", D("right"), ")", Bu(y.body, D("body"))]);
          case "DoWhileStatement": {
            var Ke = Bu(y.body, D("body"));
            return A = [ir(["do", Ke])], y.body.type === "BlockStatement" ? A.push(" ") : A.push($r), A.push("while (", ir([qr([Dr, D("test")]), Dr]), ")", b), A;
          }
          case "DoExpression":
            return [y.async ? "async " : "", "do ", D("body")];
          case "BreakStatement":
            return A.push("break"), y.label && A.push(" ", D("label")), A.push(b), A;
          case "ContinueStatement":
            return A.push("continue"), y.label && A.push(" ", D("label")), A.push(b), A;
          case "LabeledStatement":
            return y.body.type === "EmptyStatement" ? [D("label"), ":;"] : [D("label"), ": ", D("body")];
          case "TryStatement":
            return ["try ", D("block"), y.handler ? [" ", D("handler")] : "", y.finalizer ? [" finally ", D("finalizer")] : ""];
          case "CatchClause":
            if (y.param) {
              var Fe = Qi(y.param, function(Ar) {
                return !ah(Ar) || Ar.leading && K1(d.originalText, tE(Ar)) || Ar.trailing && K1(d.originalText, rE(Ar), { backwards: !0 });
              }), be = D("param");
              return ["catch ", Fe ? ["(", qr([Dr, be]), Dr, ") "] : ["(", be, ") "], D("body")];
            }
            return ["catch ", D("body")];
          case "SwitchStatement":
            return [ir(["switch (", qr([Dr, D("discriminant")]), Dr, ")"]), " {", y.cases.length > 0 ? qr([$r, nh($r, f.map(function(Ar, fo, Hp) {
              var cc = Ar.getValue();
              return [D(), fo !== Hp.length - 1 && Z1(cc, d) ? $r : ""];
            }, "cases"))]) : "", $r, "}"];
          case "SwitchCase": {
            y.test ? A.push("case ", D("test"), ":") : A.push("default:");
            var Qe = y.consequent.filter(function(Ar) {
              return Ar.type !== "EmptyStatement";
            });
            if (Qe.length > 0) {
              var we = x9(f, d, D);
              A.push(Qe.length === 1 && Qe[0].type === "BlockStatement" ? [" ", we] : qr([$r, we]));
            }
            return A;
          }
          case "DebuggerStatement":
            return ["debugger", b];
          case "ClassDeclaration":
          case "ClassExpression":
            return f9(f, d, D);
          case "ClassMethod":
          case "ClassPrivateMethod":
          case "MethodDefinition":
            return d9(f, d, D);
          case "ClassProperty":
          case "PropertyDefinition":
          case "ClassPrivateProperty":
            return h9(f, d, D);
          case "TemplateElement":
            return nh(MN, y.value.raw.split(/\r?\n/g));
          case "TemplateLiteral":
            return s9(f, D, d);
          case "TaggedTemplateExpression":
            return [D("tag"), D("typeParameters"), D("quasi")];
          case "Node":
          case "Printable":
          case "SourceLocation":
          case "Position":
          case "Statement":
          case "Function":
          case "Pattern":
          case "Expression":
          case "Declaration":
          case "Specifier":
          case "NamedSpecifier":
          case "Comment":
          case "MemberTypeAnnotation":
          case "Type":
            throw new Error("unprintable type: " + JSON.stringify(y.type));
          case "ExistsTypeAnnotation":
            return "*";
          case "EmptyTypeAnnotation":
            return "empty";
          case "MixedTypeAnnotation":
            return "mixed";
          case "ArrayTypeAnnotation":
            return [D("elementType"), "[]"];
          case "BooleanLiteralTypeAnnotation":
            return String(y.value);
          case "EnumDeclaration":
            return ["enum ", D("id"), " ", D("body")];
          case "EnumBooleanBody":
          case "EnumNumberBody":
          case "EnumStringBody":
          case "EnumSymbolBody":
            if (y.type === "EnumSymbolBody" || y.explicitType) {
              var Pe = null;
              switch (y.type) {
                case "EnumBooleanBody":
                  Pe = "boolean";
                  break;
                case "EnumNumberBody":
                  Pe = "number";
                  break;
                case "EnumStringBody":
                  Pe = "string";
                  break;
                case "EnumSymbolBody":
                  Pe = "symbol";
              }
              A.push("of ", Pe, " ");
            }
            if (y.members.length !== 0 || y.hasUnknownMembers) {
              var He = y.members.length > 0 ? [$r, l9(f, d, "members", D), y.hasUnknownMembers || zN(d) ? "," : ""] : [];
              A.push(ir(["{", qr([].concat(He, _(y.hasUnknownMembers ? [$r, "..."] : []))), dp(f, d, !0), $r, "}"]));
            } else
              A.push(ir(["{", dp(f, d), Dr, "}"]));
            return A;
          case "EnumBooleanMember":
          case "EnumNumberMember":
          case "EnumStringMember":
            return [D("id"), " = ", Se(y.init) == "object" ? D("init") : String(y.init)];
          case "EnumDefaultedMember":
            return D("id");
          case "FunctionTypeParam": {
            var er = y.name ? D("name") : f.getParentNode().this === y ? "this" : "";
            return [er, hp(f), er ? ": " : "", D("typeAnnotation")];
          }
          case "InterfaceDeclaration":
          case "InterfaceTypeAnnotation":
            return b9(f, d, D);
          case "ClassImplements":
          case "InterfaceExtends":
            return [D("id"), D("typeParameters")];
          case "NullableTypeAnnotation":
            return ["?", D("typeAnnotation")];
          case "Variance": {
            var Cr = y.kind;
            return Hn.ok(Cr === "plus" || Cr === "minus"), Cr === "plus" ? "+" : "-";
          }
          case "ObjectTypeCallProperty":
            return y.static && A.push("static "), A.push(D("value")), A;
          case "ObjectTypeIndexer":
            return [y.variance ? D("variance") : "", "[", D("id"), y.id ? ": " : "", D("key"), "]: ", D("value")];
          case "ObjectTypeProperty": {
            var Wt = "";
            return y.proto ? Wt = "proto " : y.static && (Wt = "static "), [Wt, UN(y) ? y.kind + " " : "", y.variance ? D("variance") : "", g9(f, d, D), hp(f), VN(y) ? "" : ": ", D("value")];
          }
          case "QualifiedTypeIdentifier":
            return [D("qualification"), ".", D("id")];
          case "StringLiteralTypeAnnotation":
            return RN(_1(y), d);
          case "NumberLiteralTypeAnnotation":
            Hn.strictEqual(Se(y.value), "number");
          case "BigIntLiteralTypeAnnotation":
            return y.extra ? Q1(y.extra.raw) : Q1(y.raw);
          case "TypeCastExpression":
            return ["(", D("expression"), ih(f, d, D), ")"];
          case "TypeParameterDeclaration":
          case "TypeParameterInstantiation": {
            var Zr = D9(f, d, D, "params");
            if (d.parser === "flow") {
              var wn = rE(y), cn = tE(y), Ru = d.originalText.lastIndexOf("/*", wn), Va = d.originalText.indexOf("*/", cn);
              if (Ru !== -1 && Va !== -1) {
                var po = d.originalText.slice(Ru + 2, Va).trim();
                if (po.startsWith("::") && !po.includes("/*") && !po.includes("*/"))
                  return ["/*:: ", Zr, " */"];
              }
            }
            return Zr;
          }
          case "InferredPredicate":
            return "%checks";
          case "DeclaredPredicate":
            return ["%checks(", D("value"), ")"];
          case "AnyTypeAnnotation":
          case "TSAnyKeyword":
            return "any";
          case "BooleanTypeAnnotation":
          case "TSBooleanKeyword":
            return "boolean";
          case "BigIntTypeAnnotation":
          case "TSBigIntKeyword":
            return "bigint";
          case "TSConstKeyword":
            return "const";
          case "NullLiteralTypeAnnotation":
          case "TSNullKeyword":
            return "null";
          case "NumberTypeAnnotation":
          case "TSNumberKeyword":
            return "number";
          case "SymbolTypeAnnotation":
          case "TSSymbolKeyword":
            return "symbol";
          case "StringTypeAnnotation":
          case "TSStringKeyword":
            return "string";
          case "VoidTypeAnnotation":
          case "TSVoidKeyword":
            return "void";
          case "ThisTypeAnnotation":
          case "TSThisType":
            return "this";
          case "PrivateIdentifier":
            return ["#", D("name")];
          case "PrivateName":
            return ["#", D("id")];
          case "InterpreterDirective":
            return A.push("#!", y.value, $r), Z1(y, d) && A.push($r), A;
          case "PipelineBareFunction":
            return D("callee");
          case "PipelineTopicExpression":
            return D("expression");
          case "PipelinePrimaryTopicReference":
            return "#";
          case "ArgumentPlaceholder":
            return "?";
          case "ModuleExpression": {
            A.push("module {");
            var sc = D("body");
            return sc && A.push(qr([$r, sc]), $r), A.push("}"), A;
          }
          default:
            throw new Error("unknown type: " + JSON.stringify(y.type));
        }
      }(e, t, n, u);
      if (!a)
        return "";
      var i = e.getValue(), o = i.type;
      if (o === "ClassMethod" || o === "ClassPrivateMethod" || o === "ClassProperty" || o === "PropertyDefinition" || o === "TSAbstractClassProperty" || o === "ClassPrivateProperty" || o === "MethodDefinition" || o === "TSAbstractMethodDefinition" || o === "TSDeclareMethod")
        return a;
      var s = I9(e, t, n);
      if (s)
        return ir([].concat(_(s), [a]));
      if (!qi(e, t))
        return u && u.needsSemi ? [";", a] : a;
      var c = [u && u.needsSemi ? ";(" : "(", a];
      if (qN(i)) {
        var l = ke(i.trailingComments, 1), p = l[0];
        c.push(" /*", p.value.trimStart(), "*/"), p.printed = !0;
      }
      return c.push(")"), c;
    }, embed: xx, insertPragma: jN, massageAstNode: kx, hasPrettierIgnore: function(e) {
      return XN(e) || _N(e);
    }, willPrintOwnComments: $i.willPrintOwnComments, canAttachComment: function(e) {
      return e.type && !ah(e) && !GN(e) && e.type !== "EmptyStatement" && e.type !== "TemplateElement" && e.type !== "Import" && e.type !== "TSEmptyBodyFunctionExpression";
    }, printComment: N9, isBlockComment: ah, handleComments: { avoidAstMutation: !0, ownLine: $i.handleOwnLineComment, endOfLine: $i.handleEndOfLineComment, remaining: $i.handleRemainingComment }, getCommentChildNodes: $i.getCommentChildNodes }, oh = fe.builders, xa = oh.hardline, aE = oh.indent, iE = oh.join, L9 = /* @__PURE__ */ new Set(["start", "end", "extra", "loc", "comments", "leadingComments", "trailingComments", "innerComments", "errors", "range", "tokens"]);
    function oE(r, e) {
      var t = r.type;
      if (t !== "ObjectProperty" || r.key.type !== "Identifier") {
        if (t === "UnaryExpression" && r.operator === "+")
          return e.argument;
        if (t !== "ArrayExpression")
          return t === "TemplateLiteral" ? { type: "StringLiteral", value: r.quasis[0].value.cooked } : void 0;
        var n = le(r.elements.entries()), u;
        try {
          for (n.s(); !(u = n.n()).done; ) {
            var a = ke(u.value, 2), i = a[0], o = a[1];
            o === null && e.elements.splice(i, 0, { type: "NullLiteral" });
          }
        } catch (s) {
          n.e(s);
        } finally {
          n.f();
        }
      } else
        e.key = { type: "StringLiteral", value: r.key.name };
    }
    oE.ignoredProperties = L9;
    var R9 = { preprocess: By, print: function(e, t, n) {
      var u = e.getValue();
      switch (u.type) {
        case "JsonRoot":
          return [n("node"), xa];
        case "ArrayExpression": {
          if (u.elements.length === 0)
            return "[]";
          var a = e.map(function() {
            return e.getValue() === null ? "null" : n();
          }, "elements");
          return ["[", aE([xa, iE([",", xa], a)]), xa, "]"];
        }
        case "ObjectExpression":
          return u.properties.length === 0 ? "{}" : ["{", aE([xa, iE([",", xa], e.map(n, "properties"))]), xa, "}"];
        case "ObjectProperty":
          return [n("key"), ": ", n("value")];
        case "UnaryExpression":
          return [u.operator === "+" ? "" : u.operator, n("argument")];
        case "NullLiteral":
          return "null";
        case "BooleanLiteral":
          return u.value ? "true" : "false";
        case "StringLiteral":
        case "NumericLiteral":
          return JSON.stringify(u.value);
        case "Identifier": {
          var i = e.getParentNode();
          return i && i.type === "ObjectProperty" && i.key === u ? JSON.stringify(u.name) : u.name;
        }
        case "TemplateLiteral":
          return n(["quasis", 0]);
        case "TemplateElement":
          return JSON.stringify(u.value.cooked);
        default:
          throw new Error("unknown type: " + JSON.stringify(u.type));
      }
    }, massageAstNode: oE }, sh = "Common", Yn = { bracketSpacing: { since: "0.0.0", category: sh, type: "boolean", default: !0, description: "Print spaces between brackets.", oppositeDescription: "Do not print spaces between brackets." }, singleQuote: { since: "0.0.0", category: sh, type: "boolean", default: !1, description: "Use single quotes instead of double quotes." }, proseWrap: { since: "1.8.2", category: sh, type: "choice", default: [{ since: "1.8.2", value: !0 }, { since: "1.9.0", value: "preserve" }], description: "How to wrap prose.", choices: [{ since: "1.9.0", value: "always", description: "Wrap prose if it exceeds the print width." }, { since: "1.9.0", value: "never", description: "Do not wrap prose." }, { since: "1.9.0", value: "preserve", description: "Wrap prose as-is." }] } }, Zi = "JavaScript", M9 = { arrowParens: { since: "1.9.0", category: Zi, type: "choice", default: [{ since: "1.9.0", value: "avoid" }, { since: "2.0.0", value: "always" }], description: "Include parentheses around a sole arrow function parameter.", choices: [{ value: "always", description: "Always include parens. Example: `(x) => x`" }, { value: "avoid", description: "Omit parens when possible. Example: `x => x`" }] }, bracketSpacing: Yn.bracketSpacing, jsxBracketSameLine: { since: "0.17.0", category: Zi, type: "boolean", default: !1, description: "Put > on the last line instead of at a new line." }, semi: { since: "1.0.0", category: Zi, type: "boolean", default: !0, description: "Print semicolons.", oppositeDescription: "Do not print semicolons, except at the beginning of lines which may need them." }, singleQuote: Yn.singleQuote, jsxSingleQuote: { since: "1.15.0", category: Zi, type: "boolean", default: !1, description: "Use single quotes in JSX." }, quoteProps: { since: "1.17.0", category: Zi, type: "choice", default: "as-needed", description: "Change when properties in objects are quoted.", choices: [{ value: "as-needed", description: "Only add quotes around object properties where required." }, { value: "consistent", description: "If at least one property in an object requires quotes, quote all properties." }, { value: "preserve", description: "Respect the input use of quotes in object properties." }] }, trailingComma: { since: "0.0.0", category: Zi, type: "choice", default: [{ since: "0.0.0", value: !1 }, { since: "0.19.0", value: "none" }, { since: "2.0.0", value: "es5" }], description: "Print trailing commas wherever possible when multi-line.", choices: [{ value: "es5", description: "Trailing commas where valid in ES5 (objects, arrays, etc.)" }, { value: "none", description: "No trailing commas." }, { value: "all", description: "Trailing commas wherever possible (including function arguments)." }] } }, ch = { name: "JavaScript", type: "programming", tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "text/javascript", color: "#f1e05a", aliases: ["js", "node"], extensions: [".js", "._js", ".bones", ".cjs", ".es", ".es6", ".frag", ".gs", ".jake", ".jsb", ".jscad", ".jsfl", ".jsm", ".jss", ".jsx", ".mjs", ".njs", ".pac", ".sjs", ".ssjs", ".xsjs", ".xsjslib"], filenames: ["Jakefile"], interpreters: ["chakra", "d8", "gjs", "js", "node", "nodejs", "qjs", "rhino", "v8", "v8-shell"], languageId: 183 }, j9 = { name: "TypeScript", type: "programming", color: "#2b7489", aliases: ["ts"], interpreters: ["deno", "ts-node"], extensions: [".ts"], tmScope: "source.ts", aceMode: "typescript", codemirrorMode: "javascript", codemirrorMimeType: "application/typescript", languageId: 378 }, $9 = { name: "TSX", type: "programming", group: "TypeScript", extensions: [".tsx"], tmScope: "source.tsx", aceMode: "javascript", codemirrorMode: "jsx", codemirrorMimeType: "text/jsx", languageId: 94901924 }, sE = { name: "JSON", type: "data", tmScope: "source.json", aceMode: "json", codemirrorMode: "javascript", codemirrorMimeType: "application/json", extensions: [".json", ".avsc", ".geojson", ".gltf", ".har", ".ice", ".JSON-tmLanguage", ".jsonl", ".mcmeta", ".tfstate", ".tfstate.backup", ".topojson", ".webapp", ".webmanifest", ".yy", ".yyp"], filenames: [".arcconfig", ".htmlhintrc", ".tern-config", ".tern-project", ".watchmanconfig", "Pipfile.lock", "composer.lock", "mcmod.info"], languageId: 174 }, q9 = { name: "JSON with Comments", type: "data", group: "JSON", tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "text/javascript", aliases: ["jsonc"], extensions: [".jsonc", ".sublime-build", ".sublime-commands", ".sublime-completions", ".sublime-keymap", ".sublime-macro", ".sublime-menu", ".sublime-mousemap", ".sublime-project", ".sublime-settings", ".sublime-theme", ".sublime-workspace", ".sublime_metrics", ".sublime_session"], filenames: [".babelrc", ".eslintrc.json", ".jscsrc", ".jshintrc", ".jslintrc", "devcontainer.json", "jsconfig.json", "language-configuration.json", "tsconfig.json", "tslint.json"], languageId: 423 }, V9 = { name: "JSON5", type: "data", extensions: [".json5"], tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "application/json", languageId: 175 }, U9 = { languages: [lr(ch, function(r) {
      return { since: "0.0.0", parsers: ["babel", "espree", "meriyah", "babel-flow", "babel-ts", "flow", "typescript"], vscodeLanguageIds: ["javascript", "mongo"], extensions: [].concat(_(r.extensions.filter(function(e) {
        return e !== ".jsx";
      })), [".wxs"]) };
    }), lr(ch, function() {
      return { name: "Flow", since: "0.0.0", parsers: ["flow", "babel-flow"], vscodeLanguageIds: ["javascript"], aliases: [], filenames: [], extensions: [".js.flow"] };
    }), lr(ch, function() {
      return { name: "JSX", since: "0.0.0", parsers: ["babel", "babel-flow", "babel-ts", "flow", "typescript", "espree", "meriyah"], vscodeLanguageIds: ["javascriptreact"], aliases: void 0, filenames: void 0, extensions: [".jsx"], group: "JavaScript", interpreters: void 0, tmScope: "source.js.jsx", aceMode: "javascript", codemirrorMode: "jsx", codemirrorMimeType: "text/jsx", color: void 0 };
    }), lr(j9, function() {
      return { since: "1.4.0", parsers: ["typescript", "babel-ts"], vscodeLanguageIds: ["typescript"] };
    }), lr($9, function() {
      return { since: "1.4.0", parsers: ["typescript", "babel-ts"], vscodeLanguageIds: ["typescriptreact"] };
    }), lr(sE, function() {
      return { name: "JSON.stringify", since: "1.13.0", parsers: ["json-stringify"], vscodeLanguageIds: ["json"], extensions: [], filenames: ["package.json", "package-lock.json", "composer.json"] };
    }), lr(sE, function(r) {
      return { since: "1.5.0", parsers: ["json"], vscodeLanguageIds: ["json"], extensions: r.extensions.filter(function(e) {
        return e !== ".jsonl";
      }) };
    }), lr(q9, function(r) {
      return { since: "1.5.0", parsers: ["json"], vscodeLanguageIds: ["jsonc"], filenames: [].concat(_(r.filenames), [".eslintrc"]) };
    }), lr(V9, function() {
      return { since: "1.13.0", parsers: ["json5"], vscodeLanguageIds: ["json5"] };
    })], options: M9, printers: { estree: O9, "estree-json": R9 }, parsers: { get babel() {
      return {}.parsers.babel;
    }, get "babel-flow"() {
      return {}.parsers["babel-flow"];
    }, get "babel-ts"() {
      return {}.parsers["babel-ts"];
    }, get json() {
      return {}.parsers.json;
    }, get json5() {
      return {}.parsers.json5;
    }, get "json-stringify"() {
      return {}.parsers["json-stringify"];
    }, get __js_expression() {
      return {}.parsers.__js_expression;
    }, get __vue_expression() {
      return {}.parsers.__vue_expression;
    }, get __vue_event_binding() {
      return {}.parsers.__vue_event_binding;
    }, get flow() {
      return {}.parsers.flow;
    }, get typescript() {
      return {}.parsers.typescript;
    }, get __ng_action() {
      return {}.parsers.__ng_action;
    }, get __ng_binding() {
      return {}.parsers.__ng_binding;
    }, get __ng_interpolation() {
      return {}.parsers.__ng_interpolation;
    }, get __ng_directive() {
      return {}.parsers.__ng_directive;
    }, get espree() {
      return {}.parsers.espree;
    }, get meriyah() {
      return {}.parsers.meriyah;
    } } }, cE = X.isFrontMatterNode, W9 = /* @__PURE__ */ new Set(["raw", "raws", "sourceIndex", "source", "before", "after", "trailingComma"]);
    function lE(r, e, t) {
      if (cE(r) && r.lang === "yaml" && delete e.value, r.type === "css-comment" && t.type === "css-root" && t.nodes.length > 0 && ((t.nodes[0] === r || cE(t.nodes[0]) && t.nodes[1] === r) && (delete e.text, /^\*\s*@(format|prettier)\s*$/.test(r.text)) || t.type === "css-root" && sr(t.nodes) === r))
        return null;
      if (r.type === "value-root" && delete e.text, r.type !== "media-query" && r.type !== "media-query-list" && r.type !== "media-feature-expression" || delete e.value, r.type === "css-rule" && delete e.params, r.type === "selector-combinator" && (e.value = e.value.replace(/\s+/g, " ")), r.type === "media-feature" && (e.value = e.value.replace(/ /g, "")), (r.type === "value-word" && (r.isColor && r.isHex || ["initial", "inherit", "unset", "revert"].includes(e.value.replace().toLowerCase())) || r.type === "media-feature" || r.type === "selector-root-invalid" || r.type === "selector-pseudo") && (e.value = e.value.toLowerCase()), r.type === "css-decl" && (e.prop = e.prop.toLowerCase()), r.type !== "css-atrule" && r.type !== "css-import" || (e.name = e.name.toLowerCase()), r.type === "value-number" && (e.unit = e.unit.toLowerCase()), r.type !== "media-feature" && r.type !== "media-keyword" && r.type !== "media-type" && r.type !== "media-unknown" && r.type !== "media-url" && r.type !== "media-value" && r.type !== "selector-attribute" && r.type !== "selector-string" && r.type !== "selector-class" && r.type !== "selector-combinator" && r.type !== "value-string" || !e.value || (e.value = e.value.replace(/'/g, '"').replace(/\\([^\dA-Fa-f])/g, "$1")), r.type === "selector-attribute" && (e.attribute = e.attribute.trim(), e.namespace && typeof e.namespace == "string" && (e.namespace = e.namespace.trim(), e.namespace.length === 0 && (e.namespace = !0)), e.value && (e.value = e.value.trim().replace(/^["']|["']$/g, ""), delete e.quoted)), r.type !== "media-value" && r.type !== "media-type" && r.type !== "value-number" && r.type !== "selector-root-invalid" && r.type !== "selector-class" && r.type !== "selector-combinator" && r.type !== "selector-tag" || !e.value || (e.value = e.value.replace(/([\d+.Ee-]+)([A-Za-z]*)/g, function(u, a, i) {
        var o = Number(a);
        return Number.isNaN(o) ? u : o + i.toLowerCase();
      })), r.type === "selector-tag") {
        var n = r.value.toLowerCase();
        ["from", "to"].includes(n) && (e.value = n);
      }
      r.type === "css-atrule" && r.name.toLowerCase() === "supports" && delete e.value, r.type === "selector-unknown" && delete e.value;
    }
    lE.ignoredProperties = W9;
    var G9 = lE, pE = fe.builders, fE = pE.hardline, H9 = pE.markAsRoot, lh = function(e, t) {
      if (e.lang === "yaml") {
        var n = e.value.trim(), u = n ? t(n, { parser: "yaml" }, { stripTrailingHardline: !0 }) : "";
        return H9([e.startDelimiter, fE, u, u ? fE : "", e.endDelimiter]);
      }
    }, z9 = fe.builders.hardline, X9 = function(e, t, n) {
      var u = e.getValue();
      if (u.type === "front-matter") {
        var a = lh(u, n);
        return a ? [a, z9] : "";
      }
    }, J9 = new RegExp("^(?<startDelimiter>-{3}|\\+{3})(?<language>[^\\n]*)\\n(?:|(?<value>[\\S\\s]*?)\\n)(?<endDelimiter>\\k<startDelimiter>|\\.{3})[^\\S\\n]*(?:\\n|$)"), Dp = function(e) {
      var t = e.match(J9);
      if (!t)
        return { content: e };
      var n = t.groups, u = n.startDelimiter, a = n.language, i = n.value, o = i === void 0 ? "" : i, s = n.endDelimiter, c = a.trim() || "yaml";
      if (u === "+++" && (c = "toml"), c !== "yaml" && u !== s)
        return { content: e };
      var l = ke(t, 1), p = l[0];
      return { frontMatter: { type: "front-matter", lang: c, value: o, startDelimiter: u, endDelimiter: s, raw: p.replace(/\n$/, "") }, content: p.replace(/[^\n]/g, " ") + e.slice(p.length) };
    }, Y9 = { hasPragma: function(e) {
      return Y0.hasPragma(Dp(e).content);
    }, insertPragma: function(e) {
      var t = Dp(e), n = t.frontMatter, u = t.content;
      return (n ? n.raw + `

` : "") + Y0.insertPragma(u);
    } }, dE = X.isNonEmptyArray, K9 = /* @__PURE__ */ new Set(["red", "green", "blue", "alpha", "a", "rgb", "hue", "h", "saturation", "s", "lightness", "l", "whiteness", "w", "blackness", "b", "tint", "shade", "blend", "blenda", "contrast", "hsl", "hsla", "hwb", "hwba"]);
    function hE(r, e) {
      for (var t = Array.isArray(e) ? e : [e], n, u = -1; n = r.getParentNode(++u); )
        if (t.includes(n.type))
          return u;
      return -1;
    }
    function ku(r, e) {
      var t = hE(r, e);
      return t === -1 ? null : r.getParentNode(t);
    }
    function DE(r) {
      return r.type === "value-operator" && r.value === "*";
    }
    function gE(r) {
      return r.type === "value-operator" && r.value === "/";
    }
    function mE(r) {
      return r.type === "value-operator" && r.value === "+";
    }
    function vE(r) {
      return r.type === "value-operator" && r.value === "-";
    }
    function yE(r) {
      return r.type === "value-operator" && r.value === "%";
    }
    function ph(r) {
      return r.type === "value-comma_group" && r.groups && r.groups[1] && r.groups[1].type === "value-colon";
    }
    function gp(r) {
      return r.type === "value-paren_group" && r.groups && r.groups[0] && ph(r.groups[0]);
    }
    function EE(r) {
      return r && r.type === "value-colon";
    }
    var qe = { getAncestorCounter: hE, getAncestorNode: ku, getPropOfDeclNode: function(e) {
      var t = ku(e, "css-decl");
      return t && t.prop && t.prop.toLowerCase();
    }, hasSCSSInterpolation: function(e) {
      if (dE(e)) {
        for (var t = e.length - 1; t > 0; t--)
          if (e[t].type === "word" && e[t].value === "{" && e[t - 1].type === "word" && e[t - 1].value.endsWith("#"))
            return !0;
      }
      return !1;
    }, hasStringOrFunction: function(e) {
      if (dE(e)) {
        for (var t = 0; t < e.length; t++)
          if (e[t].type === "string" || e[t].type === "func")
            return !0;
      }
      return !1;
    }, maybeToLowerCase: function(e) {
      return e.includes("$") || e.includes("@") || e.includes("#") || e.startsWith("%") || e.startsWith("--") || e.startsWith(":--") || e.includes("(") && e.includes(")") ? e : e.toLowerCase();
    }, insideValueFunctionNode: function(e, t) {
      var n = ku(e, "value-func");
      return n && n.value && n.value.toLowerCase() === t;
    }, insideICSSRuleNode: function(e) {
      var t = ku(e, "css-rule");
      return t && t.raws && t.raws.selector && (t.raws.selector.startsWith(":import") || t.raws.selector.startsWith(":export"));
    }, insideAtRuleNode: function(e, t) {
      var n = Array.isArray(t) ? t : [t], u = ku(e, "css-atrule");
      return u && n.includes(u.name.toLowerCase());
    }, insideURLFunctionInImportAtRuleNode: function(e) {
      var t = e.getValue(), n = ku(e, "css-atrule");
      return n && n.name === "import" && t.groups[0].value === "url" && t.groups.length === 2;
    }, isKeyframeAtRuleKeywords: function(e, t) {
      var n = ku(e, "css-atrule");
      return n && n.name && n.name.toLowerCase().endsWith("keyframes") && ["from", "to"].includes(t.toLowerCase());
    }, isWideKeywords: function(e) {
      return ["initial", "inherit", "unset", "revert"].includes(e.toLowerCase());
    }, isSCSS: function(e, t) {
      return e === "less" || e === "scss" ? e === "scss" : /(\w\s*:\s*[^:}]+|#){|@import[^\n]+(?:url|,)/.test(t);
    }, isSCSSVariable: function(e) {
      return Boolean(e && e.type === "word" && e.value.startsWith("$"));
    }, isLastNode: function(e, t) {
      var n = e.getParentNode();
      if (!n)
        return !1;
      var u = n.nodes;
      return u && u.indexOf(t) === u.length - 1;
    }, isLessParser: function(e) {
      return e.parser === "css" || e.parser === "less";
    }, isSCSSControlDirectiveNode: function(e) {
      return e.type === "css-atrule" && ["if", "else", "for", "each", "while"].includes(e.name);
    }, isDetachedRulesetDeclarationNode: function(e) {
      return !!e.selector && (typeof e.selector == "string" && /^@.+:.*$/.test(e.selector) || e.selector.value && /^@.+:.*$/.test(e.selector.value));
    }, isRelationalOperatorNode: function(e) {
      return e.type === "value-word" && ["<", ">", "<=", ">="].includes(e.value);
    }, isEqualityOperatorNode: function(e) {
      return e.type === "value-word" && ["==", "!="].includes(e.value);
    }, isMultiplicationNode: DE, isDivisionNode: gE, isAdditionNode: mE, isSubtractionNode: vE, isModuloNode: yE, isMathOperatorNode: function(e) {
      return DE(e) || gE(e) || mE(e) || vE(e) || yE(e);
    }, isEachKeywordNode: function(e) {
      return e.type === "value-word" && e.value === "in";
    }, isForKeywordNode: function(e) {
      return e.type === "value-word" && ["from", "through", "end"].includes(e.value);
    }, isURLFunctionNode: function(e) {
      return e.type === "value-func" && e.value.toLowerCase() === "url";
    }, isIfElseKeywordNode: function(e) {
      return e.type === "value-word" && ["and", "or", "not"].includes(e.value);
    }, hasComposesNode: function(e) {
      return e.value && e.value.type === "value-root" && e.value.group && e.value.group.type === "value-value" && e.prop.toLowerCase() === "composes";
    }, hasParensAroundNode: function(e) {
      return e.value && e.value.group && e.value.group.group && e.value.group.group.type === "value-paren_group" && e.value.group.group.open !== null && e.value.group.group.close !== null;
    }, hasEmptyRawBefore: function(e) {
      return e.raws && e.raws.before === "";
    }, isSCSSNestedPropertyNode: function(e) {
      return !!e.selector && e.selector.replace(/\/\*.*?\*\//, "").replace(/\/\/.*?\n/, "").trim().endsWith(":");
    }, isDetachedRulesetCallNode: function(e) {
      return e.raws && e.raws.params && /^\(\s*\)$/.test(e.raws.params);
    }, isTemplatePlaceholderNode: function(e) {
      return e.name.startsWith("prettier-placeholder");
    }, isTemplatePropNode: function(e) {
      return e.prop.startsWith("@prettier-placeholder");
    }, isPostcssSimpleVarNode: function(e, t) {
      return e.value === "$$" && e.type === "value-func" && t && t.type === "value-word" && !t.raws.before;
    }, isKeyValuePairNode: ph, isKeyValuePairInParenGroupNode: gp, isKeyInValuePairNode: function(e, t) {
      if (!ph(t))
        return !1;
      var n = t.groups, u = n.indexOf(e);
      return u !== -1 && EE(n[u + 1]);
    }, isSCSSMapItemNode: function(e) {
      var t = e.getValue();
      if (t.groups.length === 0)
        return !1;
      var n = e.getParentNode(1);
      if (!(gp(t) || n && gp(n)))
        return !1;
      var u = ku(e, "css-decl");
      return !!(u && u.prop && u.prop.startsWith("$")) || !!gp(n) || n.type === "value-func";
    }, isInlineValueCommentNode: function(e) {
      return e.type === "value-comment" && e.inline;
    }, isHashNode: function(e) {
      return e.type === "value-word" && e.value === "#";
    }, isLeftCurlyBraceNode: function(e) {
      return e.type === "value-word" && e.value === "{";
    }, isRightCurlyBraceNode: function(e) {
      return e.type === "value-word" && e.value === "}";
    }, isWordNode: function(e) {
      return ["value-word", "value-atword"].includes(e.type);
    }, isColonNode: EE, isMediaAndSupportsKeywords: function(e) {
      return e.value && ["not", "and", "or"].includes(e.value.toLowerCase());
    }, isColorAdjusterFuncNode: function(e) {
      return e.type === "value-func" && K9.has(e.value.toLowerCase());
    }, lastLineHasInlineComment: function(e) {
      return /\/\//.test(e.split(/[\n\r]/).pop());
    }, stringifyNode: function r(e) {
      if (e.groups)
        return (e.open && e.open.value ? e.open.value : "") + e.groups.reduce(function(u, a, i) {
          return u + r(a) + (e.groups[0].type === "comma_group" && i !== e.groups.length - 1 ? "," : "");
        }, "") + (e.close && e.close.value ? e.close.value : "");
      var t = e.raws && e.raws.before ? e.raws.before : "", n = e.raws && e.raws.quote ? e.raws.quote : "";
      return t + n + (e.type === "atword" ? "@" : "") + (e.value ? e.value : "") + n + (e.unit ? e.unit : "") + (e.group ? r(e.group) : "") + (e.raws && e.raws.after ? e.raws.after : "");
    }, isAtWordPlaceholderNode: function(e) {
      return e && e.type === "value-atword" && e.value.startsWith("prettier-placeholder-");
    } }, CE = function(e, t) {
      for (var n = 0, u = 0; u < e.line - 1; ++u)
        n = t.indexOf(`
`, n) + 1;
      return n + e.column;
    }, Q9 = X.getLast, Z9 = X.skipEverythingButNewLine;
    function AE(r, e) {
      return typeof r.sourceIndex == "number" ? r.sourceIndex : r.source ? CE(r.source.start, e) - 1 : null;
    }
    function bE(r, e) {
      if (r.type === "css-comment" && r.inline)
        return Z9(e, r.source.startOffset);
      var t = r.nodes && Q9(r.nodes);
      return t && r.source && !r.source.end && (r = t), r.source && r.source.end ? CE(r.source.end, e) : null;
    }
    function FE(r, e, t) {
      r.source && (r.source.startOffset = AE(r, t) + e, r.source.endOffset = bE(r, t) + e);
      for (var n in r) {
        var u = r[n];
        n !== "source" && u && Se(u) == "object" && FE(u, e, t);
      }
    }
    function _9(r) {
      var e = r.source.startOffset;
      return typeof r.prop == "string" && (e += r.prop.length), r.type === "css-atrule" && typeof r.name == "string" && (e += 1 + r.name.length + r.raws.afterName.match(/^\s*:?\s*/)[0].length), r.type !== "css-atrule" && r.raws && typeof r.raws.between == "string" && (e += r.raws.between.length), e;
    }
    var SE = { locStart: function(e) {
      return e.source.startOffset;
    }, locEnd: function(e) {
      return e.source.endOffset;
    }, calculateLoc: function r(e, t) {
      e.source && (e.source.startOffset = AE(e, t), e.source.endOffset = bE(e, t));
      for (var n in e) {
        var u = e[n];
        n !== "source" && u && Se(u) == "object" && (u.type === "value-root" || u.type === "value-unknown" ? FE(u, _9(e), u.text || u.value) : r(u, t));
      }
    }, replaceQuotesInInlineComments: function(e) {
      for (var t, n = "initial", u = "initial", a = !1, i = [], o = 0; o < e.length; o++) {
        var s = e[o];
        switch (n) {
          case "initial":
            if (s === "'") {
              n = "single-quotes";
              continue;
            }
            if (s === '"') {
              n = "double-quotes";
              continue;
            }
            if ((s === "u" || s === "U") && e.slice(o, o + 4).toLowerCase() === "url(") {
              n = "url", o += 3;
              continue;
            }
            if (s === "*" && e[o - 1] === "/") {
              n = "comment-block";
              continue;
            }
            if (s === "/" && e[o - 1] === "/") {
              n = "comment-inline", t = o - 1;
              continue;
            }
            continue;
          case "single-quotes":
            if (s === "'" && e[o - 1] !== "\\" && (n = u, u = "initial"), s === `
` || s === "\r")
              return e;
            continue;
          case "double-quotes":
            if (s === '"' && e[o - 1] !== "\\" && (n = u, u = "initial"), s === `
` || s === "\r")
              return e;
            continue;
          case "url":
            if (s === ")" && (n = "initial"), s === `
` || s === "\r")
              return e;
            if (s === "'") {
              n = "single-quotes", u = "url";
              continue;
            }
            if (s === '"') {
              n = "double-quotes", u = "url";
              continue;
            }
            continue;
          case "comment-block":
            s === "/" && e[o - 1] === "*" && (n = "initial");
            continue;
          case "comment-inline":
            s !== '"' && s !== "'" && s !== "*" || (a = !0), s !== `
` && s !== "\r" || (a && i.push([t, o]), n = "initial", a = !1);
            continue;
        }
      }
      for (var c = 0, l = i; c < l.length; c++) {
        var p = ke(l[c], 2), f = p[0], d = p[1];
        e = e.slice(0, f) + e.slice(f, d).replace(/["'*]/g, " ") + e.slice(d);
      }
      return e;
    } }, eP = X.printNumber, TE = X.printString, rP = X.hasNewline, xE = X.isFrontMatterNode, tP = X.isNextLineEmpty, nP = X.isNonEmptyArray, Cn = fe.builders, _i = Cn.join, ct = Cn.line, nt = Cn.hardline, Nu = Cn.softline, tn = Cn.group, fh = Cn.fill, $t = Cn.indent, mp = Cn.dedent, wE = Cn.ifBreak, BE = Cn.breakParent, kE = fe.utils, uP = kE.removeLines, NE = kE.getDocParts, aP = Y9.insertPragma, dh = qe.getAncestorNode, iP = qe.getPropOfDeclNode, wa = qe.maybeToLowerCase, vp = qe.insideValueFunctionNode, oP = qe.insideICSSRuleNode, hh = qe.insideAtRuleNode, sP = qe.insideURLFunctionInImportAtRuleNode, cP = qe.isKeyframeAtRuleKeywords, lP = qe.isWideKeywords, pP = qe.isSCSS, Dh = qe.isLastNode, PE = qe.isLessParser, gh = qe.isSCSSControlDirectiveNode, fP = qe.isDetachedRulesetDeclarationNode, dP = qe.isRelationalOperatorNode, hP = qe.isEqualityOperatorNode, IE = qe.isMultiplicationNode, mh = qe.isDivisionNode, Ba = qe.isAdditionNode, Js = qe.isSubtractionNode, vh = qe.isMathOperatorNode, DP = qe.isEachKeywordNode, gP = qe.isForKeywordNode, mP = qe.isURLFunctionNode, vP = qe.isIfElseKeywordNode, yP = qe.hasComposesNode, EP = qe.hasParensAroundNode, eo = qe.hasEmptyRawBefore, CP = qe.isKeyValuePairNode, AP = qe.isKeyInValuePairNode, OE = qe.isDetachedRulesetCallNode, LE = qe.isTemplatePlaceholderNode, bP = qe.isTemplatePropNode, FP = qe.isPostcssSimpleVarNode, SP = qe.isSCSSMapItemNode, RE = qe.isInlineValueCommentNode, yh = qe.isHashNode, ME = qe.isLeftCurlyBraceNode, Eh = qe.isRightCurlyBraceNode, yp = qe.isWordNode, jE = qe.isColonNode, TP = qe.isMediaAndSupportsKeywords, xP = qe.isColorAdjusterFuncNode, Ys = qe.lastLineHasInlineComment, Ch = qe.isAtWordPlaceholderNode, ka = SE.locStart, Pu = SE.locEnd;
    function wP(r) {
      return r.trailingComma === "es5" || r.trailingComma === "all";
    }
    function Ks(r, e, t) {
      var n = [];
      return r.each(function(u, a, i) {
        var o = i[a - 1];
        if (o && o.type === "css-comment" && o.text.trim() === "prettier-ignore") {
          var s = u.getValue();
          n.push(e.originalText.slice(ka(s), Pu(s)));
        } else
          n.push(t());
        a !== i.length - 1 && (i[a + 1].type === "css-comment" && !rP(e.originalText, ka(i[a + 1]), { backwards: !0 }) && !xE(i[a]) || i[a + 1].type === "css-atrule" && i[a + 1].name === "else" && i[a].type !== "css-comment" ? n.push(" ") : (n.push(e.__isHTMLStyleAttribute ? ct : nt), tP(e.originalText, u.getValue(), Pu) && !xE(i[a]) && n.push(nt)));
      }, "nodes"), n;
    }
    var $E = /(["'])(?:(?!\1)[^\\]|\\[\S\s])*\1/g, BP = new RegExp($E.source + "|" + "(".concat(/[$@]?[A-Z_a-z\u0080-\uFFFF][\w\u0080-\uFFFF-]*/g.source, ")?") + "(".concat(/(?:\d*\.\d+|\d+\.?)(?:[Ee][+-]?\d+)?/g.source, ")") + "(".concat(/[A-Za-z]+/g.source, ")?"), "g");
    function An(r, e) {
      return r.replace($E, function(t) {
        return TE(t, e);
      });
    }
    function kP(r, e) {
      var t = e.singleQuote ? "'" : '"';
      return r.includes('"') || r.includes("'") ? r : t + r + t;
    }
    function ro(r) {
      return r.replace(BP, function(e, t, n, u, a) {
        return !n && u ? qE(u) + wa(a || "") : e;
      });
    }
    function qE(r) {
      return eP(r).replace(/\.0(?=$|e)/, "");
    }
    var NP = { print: function(e, t, n) {
      var u = e.getValue();
      if (!u)
        return "";
      if (typeof u == "string")
        return u;
      switch (u.type) {
        case "front-matter":
          return [u.raw, nt];
        case "css-root": {
          var a = Ks(e, t, n), i = u.raws.after.trim();
          return [a, i ? " ".concat(i) : "", NE(a).length > 0 ? nt : ""];
        }
        case "css-comment": {
          var o = u.inline || u.raws.inline, s = t.originalText.slice(ka(u), Pu(u));
          return o ? s.trimEnd() : s;
        }
        case "css-rule":
          return [n("selector"), u.important ? " !important" : "", u.nodes ? [u.selector && u.selector.type === "selector-unknown" && Ys(u.selector.value) ? ct : " ", "{", u.nodes.length > 0 ? $t([nt, Ks(e, t, n)]) : "", nt, "}", fP(u) ? ";" : ""] : ";"];
        case "css-decl": {
          var c = e.getParentNode(), l = u.raws.between, p = l.trim(), f = p === ":", d = yP(u) ? uP(n("value")) : n("value");
          return !f && Ys(p) && (d = $t([nt, mp(d)])), [u.raws.before.replace(/[\s;]/g, ""), oP(e) ? u.prop : wa(u.prop), p.startsWith("//") ? " " : "", p, u.extend ? "" : " ", PE(t) && u.extend && u.selector ? ["extend(", n("selector"), ")"] : "", d, u.raws.important ? u.raws.important.replace(/\s*!\s*important/i, " !important") : u.important ? " !important" : "", u.raws.scssDefault ? u.raws.scssDefault.replace(/\s*!default/i, " !default") : u.scssDefault ? " !default" : "", u.raws.scssGlobal ? u.raws.scssGlobal.replace(/\s*!global/i, " !global") : u.scssGlobal ? " !global" : "", u.nodes ? [" {", $t([Nu, Ks(e, t, n)]), Nu, "}"] : bP(u) && !c.raws.semicolon && t.originalText[Pu(u) - 1] !== ";" ? "" : t.__isHTMLStyleAttribute && Dh(e, u) ? wE(";") : ";"];
        }
        case "css-atrule": {
          var D = e.getParentNode(), v = LE(u) && !D.raws.semicolon && t.originalText[Pu(u) - 1] !== ";";
          if (PE(t)) {
            if (u.mixin)
              return [n("selector"), u.important ? " !important" : "", v ? "" : ";"];
            if (u.function)
              return [u.name, n("params"), v ? "" : ";"];
            if (u.variable)
              return ["@", u.name, ": ", u.value ? n("value") : "", u.raws.between.trim() ? u.raws.between.trim() + " " : "", u.nodes ? ["{", $t([u.nodes.length > 0 ? Nu : "", Ks(e, t, n)]), Nu, "}"] : "", v ? "" : ";"];
          }
          return ["@", OE(u) || u.name.endsWith(":") ? u.name : wa(u.name), u.params ? [OE(u) ? "" : LE(u) ? u.raws.afterName === "" ? "" : u.name.endsWith(":") ? " " : /^\s*\n\s*\n/.test(u.raws.afterName) ? [nt, nt] : /^\s*\n/.test(u.raws.afterName) ? nt : " " : " ", n("params")] : "", u.selector ? $t([" ", n("selector")]) : "", u.value ? tn([" ", n("value"), gh(u) ? EP(u) ? " " : ct : ""]) : u.name === "else" ? " " : "", u.nodes ? [gh(u) ? "" : u.selector && !u.selector.nodes && typeof u.selector.value == "string" && Ys(u.selector.value) || !u.selector && typeof u.params == "string" && Ys(u.params) ? ct : " ", "{", $t([u.nodes.length > 0 ? Nu : "", Ks(e, t, n)]), Nu, "}"] : v ? "" : ";"];
        }
        case "media-query-list": {
          var y = [];
          return e.each(function(lc) {
            var Qn = lc.getValue();
            Qn.type === "media-query" && Qn.value === "" || y.push(n());
          }, "nodes"), tn($t(_i(ct, y)));
        }
        case "media-query":
          return [_i(" ", e.map(n, "nodes")), Dh(e, u) ? "" : ","];
        case "media-type":
          return ro(An(u.value, t));
        case "media-feature-expression":
          return u.nodes ? ["("].concat(_(e.map(n, "nodes")), [")"]) : u.value;
        case "media-feature":
          return wa(An(u.value.replace(/ +/g, " "), t));
        case "media-colon":
          return [u.value, " "];
        case "media-value":
          return ro(An(u.value, t));
        case "media-keyword":
          return An(u.value, t);
        case "media-url":
          return An(u.value.replace(/^url\(\s+/gi, "url(").replace(/\s+\)$/gi, ")"), t);
        case "media-unknown":
          return u.value;
        case "selector-root":
          return tn([hh(e, "custom-selector") ? [dh(e, "css-atrule").customSelector, ct] : "", _i([",", hh(e, ["extend", "custom-selector", "nest"]) ? ct : nt], e.map(n, "nodes"))]);
        case "selector-selector":
          return tn($t(e.map(n, "nodes")));
        case "selector-comment":
          return u.value;
        case "selector-string":
          return An(u.value, t);
        case "selector-tag": {
          var b = e.getParentNode(), S = b && b.nodes.indexOf(u), F = S && b.nodes[S - 1];
          return [u.namespace ? [u.namespace === !0 ? "" : u.namespace.trim(), "|"] : "", F.type === "selector-nesting" ? u.value : ro(cP(e, u.value) ? u.value.toLowerCase() : u.value)];
        }
        case "selector-id":
          return ["#", u.value];
        case "selector-class":
          return [".", ro(An(u.value, t))];
        case "selector-attribute":
          return ["[", u.namespace ? [u.namespace === !0 ? "" : u.namespace.trim(), "|"] : "", u.attribute.trim(), u.operator ? u.operator : "", u.value ? kP(An(u.value.trim(), t), t) : "", u.insensitive ? " i" : "", "]"];
        case "selector-combinator":
          if (u.value === "+" || u.value === ">" || u.value === "~" || u.value === ">>>") {
            var x = e.getParentNode();
            return [x.type === "selector-selector" && x.nodes[0] === u ? "" : ct, u.value, Dh(e, u) ? "" : " "];
          }
          return [u.value.trim().startsWith("(") ? ct : "", ro(An(u.value.trim(), t)) || ct];
        case "selector-universal":
          return [u.namespace ? [u.namespace === !0 ? "" : u.namespace.trim(), "|"] : "", u.value];
        case "selector-pseudo":
          return [wa(u.value), nP(u.nodes) ? ["(", _i(", ", e.map(n, "nodes")), ")"] : ""];
        case "selector-nesting":
          return u.value;
        case "selector-unknown": {
          var w = dh(e, "css-rule");
          if (w && w.isSCSSNesterProperty)
            return ro(An(wa(u.value), t));
          var A = e.getParentNode();
          if (A.raws && A.raws.selector) {
            var k = ka(A), O = k + A.raws.selector.length;
            return t.originalText.slice(k, O).trim();
          }
          var q = e.getParentNode(1);
          if (A.type === "value-paren_group" && q && q.type === "value-func" && q.value === "selector") {
            var H = ka(A.open) + 1, R = Pu(A.close) - 1, $ = t.originalText.slice(H, R).trim();
            return Ys($) ? [BE, $] : $;
          }
          return u.value;
        }
        case "value-value":
        case "value-root":
          return n("group");
        case "value-comment":
          return t.originalText.slice(ka(u), Pu(u));
        case "value-comma_group": {
          for (var K = e.getParentNode(), ne = e.getParentNode(1), ue = iP(e), Ce = ue && K.type === "value-value" && (ue === "grid" || ue.startsWith("grid-template")), oe = dh(e, "css-atrule"), ae = oe && gh(oe), ve = u.groups.some(function(lc) {
            return RE(lc);
          }), Le = e.map(n, "groups"), Te = [], Ne = vp(e, "url"), Oe = !1, We = !1, Re = 0; Re < u.groups.length; ++Re) {
            Te.push(Le[Re]);
            var Ke = u.groups[Re - 1], Fe = u.groups[Re], be = u.groups[Re + 1], Qe = u.groups[Re + 2];
            if (Ne) {
              (be && Ba(be) || Ba(Fe)) && Te.push(" ");
              continue;
            }
            if (!!be && !(Fe.type === "value-word" && Fe.value.endsWith("-") && Ch(be))) {
              var we = Fe.type === "value-string" && Fe.value.startsWith("#{"), Pe = Oe && be.type === "value-string" && be.value.endsWith("}");
              if (we || Pe) {
                Oe = !Oe;
                continue;
              }
              if (!Oe && !(jE(Fe) || jE(be)) && !(Fe.type === "value-atword" && Fe.value === "") && Fe.value !== "~" && !(Fe.value && Fe.value.includes("\\") && be && be.type !== "value-comment") && !(Ke && Ke.value && Ke.value.indexOf("\\") === Ke.value.length - 1 && Fe.type === "value-operator" && Fe.value === "/") && Fe.value !== "\\" && !FP(Fe, be) && !(yh(Fe) || ME(Fe) || Eh(be) || ME(be) && eo(be) || Eh(Fe) && eo(be)) && !(Fe.value === "--" && yh(be))) {
                var He = vh(Fe), er = vh(be);
                if (!((He && yh(be) || er && Eh(Fe)) && eo(be)) && !(!Ke && mh(Fe)) && !(vp(e, "calc") && (Ba(Fe) || Ba(be) || Js(Fe) || Js(be)) && eo(be))) {
                  var Cr = (Ba(Fe) || Js(Fe)) && Re === 0 && (be.type === "value-number" || be.isHex) && ne && xP(ne) && !eo(be), Wt = Qe && Qe.type === "value-func" || Qe && yp(Qe) || Fe.type === "value-func" || yp(Fe), Zr = be.type === "value-func" || yp(be) || Ke && Ke.type === "value-func" || Ke && yp(Ke);
                  if (IE(be) || IE(Fe) || vp(e, "calc") || Cr || !(mh(be) && !Wt || mh(Fe) && !Zr || Ba(be) && !Wt || Ba(Fe) && !Zr || Js(be) || Js(Fe)) || !(eo(be) || He && (!Ke || Ke && vh(Ke))))
                    if (RE(Fe)) {
                      if (K.type === "value-paren_group") {
                        Te.push(mp(nt));
                        continue;
                      }
                      Te.push(nt);
                    } else
                      ae && (hP(be) || dP(be) || vP(be) || DP(Fe) || gP(Fe)) || oe && oe.name.toLowerCase() === "namespace" ? Te.push(" ") : Ce ? Fe.source && be.source && Fe.source.start.line !== be.source.start.line ? (Te.push(nt), We = !0) : Te.push(" ") : er ? Te.push(" ") : be && be.value === "..." || Ch(Fe) && Ch(be) && Pu(Fe) === ka(be) || Te.push(ct);
                }
              }
            }
          }
          return ve && Te.push(BE), We && Te.unshift(nt), ae ? tn($t(Te)) : sP(e) ? tn(fh(Te)) : tn($t(fh(Te)));
        }
        case "value-paren_group": {
          var wn = e.getParentNode();
          if (wn && mP(wn) && (u.groups.length === 1 || u.groups.length > 0 && u.groups[0].type === "value-comma_group" && u.groups[0].groups.length > 0 && u.groups[0].groups[0].type === "value-word" && u.groups[0].groups[0].value.startsWith("data:")))
            return [u.open ? n("open") : "", _i(",", e.map(n, "groups")), u.close ? n("close") : ""];
          if (!u.open) {
            for (var cn = e.map(n, "groups"), Ru = [], Va = 0; Va < cn.length; Va++)
              Va !== 0 && Ru.push([",", ct]), Ru.push(cn[Va]);
            return tn($t(fh(Ru)));
          }
          var po = SP(e), sc = sr(u.groups), Ar = sc && sc.type === "value-comment", fo = AP(u, wn), Hp = tn([u.open ? n("open") : "", $t([Nu, _i([",", ct], e.map(function(lc) {
            var Qn = lc.getValue(), mD = n();
            if (CP(Qn) && Qn.type === "value-comma_group" && Qn.groups && Qn.groups[0].type !== "value-paren_group" && Qn.groups[2] && Qn.groups[2].type === "value-paren_group") {
              var eb = NE(mD.contents.contents);
              return eb[1] = tn(eb[1]), tn(mp(mD));
            }
            return mD;
          }, "groups"))]), wE(!Ar && pP(t.parser, t.originalText) && po && wP(t) ? "," : ""), Nu, u.close ? n("close") : ""], { shouldBreak: po && !fo });
          return fo ? mp(Hp) : Hp;
        }
        case "value-func":
          return [u.value, hh(e, "supports") && TP(u) ? " " : "", n("group")];
        case "value-paren":
          return u.value;
        case "value-number":
          return [qE(u.value), wa(u.unit)];
        case "value-operator":
          return u.value;
        case "value-word":
          return u.isColor && u.isHex || lP(u.value) ? u.value.toLowerCase() : u.value;
        case "value-colon": {
          var cc = e.getParentNode(), _A = cc && cc.groups.indexOf(u), gD = _A && cc.groups[_A - 1];
          return [u.value, gD && typeof gD.value == "string" && sr(gD.value) === "\\" || vp(e, "url") ? "" : ct];
        }
        case "value-comma":
          return [u.value, " "];
        case "value-string":
          return TE(u.raws.quote + u.value + u.raws.quote, t);
        case "value-atword":
          return ["@", u.value];
        case "value-unicode-range":
        case "value-unknown":
          return u.value;
        default:
          throw new Error("Unknown postcss type ".concat(JSON.stringify(u.type)));
      }
    }, embed: X9, insertPragma: aP, massageAstNode: G9 }, PP = { singleQuote: Yn.singleQuote }, IP = { name: "PostCSS", type: "markup", tmScope: "source.postcss", group: "CSS", extensions: [".pcss", ".postcss"], aceMode: "text", languageId: 262764437 }, OP = { name: "Less", type: "markup", color: "#1d365d", extensions: [".less"], tmScope: "source.css.less", aceMode: "less", codemirrorMode: "css", codemirrorMimeType: "text/css", languageId: 198 }, LP = { name: "SCSS", type: "markup", color: "#c6538c", tmScope: "source.css.scss", aceMode: "scss", codemirrorMode: "css", codemirrorMimeType: "text/x-scss", extensions: [".scss"], languageId: 329 }, RP = { languages: [lr({ name: "CSS", type: "markup", tmScope: "source.css", aceMode: "css", codemirrorMode: "css", codemirrorMimeType: "text/css", color: "#563d7c", extensions: [".css"], languageId: 50 }, function(r) {
      return { since: "1.4.0", parsers: ["css"], vscodeLanguageIds: ["css"], extensions: [].concat(_(r.extensions), [".wxss"]) };
    }), lr(IP, function() {
      return { since: "1.4.0", parsers: ["css"], vscodeLanguageIds: ["postcss"] };
    }), lr(OP, function() {
      return { since: "1.4.0", parsers: ["less"], vscodeLanguageIds: ["less"] };
    }), lr(LP, function() {
      return { since: "1.4.0", parsers: ["scss"], vscodeLanguageIds: ["scss"] };
    })], options: PP, printers: { postcss: NP }, parsers: { get css() {
      return {}.parsers.css;
    }, get less() {
      return {}.parsers.less;
    }, get scss() {
      return {}.parsers.scss;
    } } }, VE = { locStart: function(e) {
      return e.loc.start.offset;
    }, locEnd: function(e) {
      return e.loc.end.offset;
    } };
    function UE(r, e) {
      if (r.type === "TextNode") {
        var t = r.chars.trim();
        if (!t)
          return null;
        e.chars = t.replace(/[\t\n\f\r ]+/g, " ");
      }
      r.type === "AttrNode" && r.name.toLowerCase() === "class" && delete e.value;
    }
    UE.ignoredProperties = /* @__PURE__ */ new Set(["loc", "selfClosing"]);
    var MP = UE, jP = /* @__PURE__ */ new Set(["area", "base", "basefont", "bgsound", "br", "col", "command", "embed", "frame", "hr", "image", "img", "input", "isindex", "keygen", "link", "menuitem", "meta", "nextid", "param", "source", "track", "wbr"]);
    function WE(r) {
      return Na(r, ["TextNode"]) && !/\S/.test(r.chars);
    }
    function Na(r, e) {
      return r && e.includes(r.type);
    }
    function Ah(r, e) {
      return Na(r.getParentNode(0), e);
    }
    function GE(r, e) {
      var t = r.getValue(), n = r.getParentNode(0) || {}, u = n.children || n.body || n.parts || [], a = u.indexOf(t);
      return a !== -1 && u[a + e];
    }
    function bh(r) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
      return GE(r, -e);
    }
    function HE(r) {
      return GE(r, 1);
    }
    function zE(r) {
      return Na(r, ["MustacheCommentStatement"]) && typeof r.value == "string" && r.value.trim() === "prettier-ignore";
    }
    var bn = { getNextNode: HE, getPreviousNode: bh, hasPrettierIgnore: function(e) {
      var t = e.getValue(), n = bh(e, 2);
      return zE(t) || zE(n);
    }, isLastNodeOfSiblings: function(e) {
      var t = e.getValue(), n = e.getParentNode(0);
      return !(!Ah(e, ["ElementNode"]) || sr(n.children) !== t) || !(!Ah(e, ["Block"]) || sr(n.body) !== t);
    }, isNextNodeOfSomeType: function(e, t) {
      return Na(HE(e), t);
    }, isNodeOfSomeType: Na, isParentOfSomeType: Ah, isPreviousNodeOfSomeType: function(e, t) {
      return Na(bh(e), t);
    }, isVoid: function(e) {
      return function(t) {
        return Na(t, ["ElementNode"]) && typeof t.tag == "string" && (function(n) {
          return n.toUpperCase() === n;
        }(t.tag[0]) || t.tag.includes("."));
      }(e) && e.children.every(function(t) {
        return WE(t);
      }) || jP.has(e.tag);
    }, isWhitespaceNode: WE }, Fn = fe.builders, XE = Fn.dedent, JE = Fn.fill, Sn = Fn.group, to = Fn.hardline, YE = Fn.ifBreak, vt = Fn.indent, Ep = Fn.join, lt = Fn.line, Kn = Fn.softline, $P = Fn.literalline, qP = fe.utils.getDocParts, KE = X.isNonEmptyArray, VP = X.replaceEndOfLineWith, Fh = VE.locStart, Sh = VE.locEnd, UP = bn.getNextNode, WP = bn.getPreviousNode, GP = bn.hasPrettierIgnore, QE = bn.isLastNodeOfSiblings, Cp = bn.isNextNodeOfSomeType, Th = bn.isNodeOfSomeType, Ap = bn.isParentOfSomeType, xh = bn.isPreviousNodeOfSomeType, ZE = bn.isVoid, _E = bn.isWhitespaceNode;
    function eC(r, e, t) {
      var n = r.getValue().children.every(function(u) {
        return _E(u);
      });
      return e.htmlWhitespaceSensitivity === "ignore" && n ? "" : r.map(function(u, a) {
        var i = t();
        return a === 0 && e.htmlWhitespaceSensitivity === "ignore" ? [Kn, i] : i;
      }, "children");
    }
    function HP(r) {
      return ZE(r) ? YE([Kn, "/>"], [" />", Kn]) : YE([Kn, ">"], ">");
    }
    function bp(r) {
      return [r.escaped === !1 ? "{{{" : "{{", r.strip && r.strip.open ? "~" : ""];
    }
    function Fp(r) {
      var e = r.escaped === !1 ? "}}}" : "}}";
      return [r.strip && r.strip.close ? "~" : "", e];
    }
    function rC(r) {
      return [bp(r), r.closeStrip.open ? "~" : "", "/"];
    }
    function tC(r) {
      var e = Fp(r);
      return [r.closeStrip.close ? "~" : "", e];
    }
    function nC(r) {
      return [bp(r), r.inverseStrip.open ? "~" : ""];
    }
    function uC(r) {
      var e = Fp(r);
      return [r.inverseStrip.close ? "~" : "", e];
    }
    function zP(r, e) {
      var t = r.getValue(), n = function(s) {
        return [bp(s), s.openStrip.open ? "~" : "", "#"];
      }(t), u = function(s) {
        var c = Fp(s);
        return [s.openStrip.close ? "~" : "", c];
      }(t), a = [Bh(r, e)], i = Sp(r, e);
      if (i && a.push(lt, i), KE(t.program.blockParams)) {
        var o = pC(t.program);
        a.push(lt, o);
      }
      return Sn([n, vt(a), Kn, u]);
    }
    function XP(r, e) {
      return [e.htmlWhitespaceSensitivity === "ignore" ? to : "", nC(r), "else", uC(r)];
    }
    function JP(r, e) {
      var t = r.getParentNode(1);
      return [nC(t), "else if ", Sp(r, e), uC(t)];
    }
    function YP(r, e, t) {
      var n = r.getValue();
      return t.htmlWhitespaceSensitivity === "ignore" ? [aC(n) ? Kn : to, rC(n), e("path"), tC(n)] : [rC(n), e("path"), tC(n)];
    }
    function aC(r) {
      return Th(r, ["BlockStatement"]) && r.program.body.every(function(e) {
        return _E(e);
      });
    }
    function iC(r) {
      return Th(r, ["BlockStatement"]) && r.inverse;
    }
    function oC(r, e, t) {
      if (aC(r.getValue()))
        return "";
      var n = e("program");
      return t.htmlWhitespaceSensitivity === "ignore" ? vt([to, n]) : vt(n);
    }
    function sC(r, e, t) {
      var n = r.getValue(), u = e("inverse"), a = t.htmlWhitespaceSensitivity === "ignore" ? [to, u] : u;
      return function(i) {
        return iC(i) && i.inverse.body.length === 1 && Th(i.inverse.body[0], ["BlockStatement"]) && i.inverse.body[0].path.parts[0] === "if";
      }(n) ? a : iC(n) ? [XP(n, t), vt(a)] : "";
    }
    function cC(r) {
      return qP(Ep(lt, function(e) {
        return e.split(/[\t\n\f\r ]+/);
      }(r)));
    }
    function no(r) {
      return (r = typeof r == "string" ? r : "").split(`
`).length - 1;
    }
    function Qs() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      return new Array(Math.min(r, 2)).fill(to);
    }
    function wh(r, e) {
      var t = { quote: '"', regex: /"/g }, n = { quote: "'", regex: /'/g }, u = r.singleQuote ? n : t, a = u === n ? t : n, i = !1;
      return (e.includes(u.quote) || e.includes(a.quote)) && (i = (e.match(u.regex) || []).length > (e.match(a.regex) || []).length), i ? a : u;
    }
    function KP(r, e) {
      var t = Bh(r, e), n = Sp(r, e);
      return n ? vt([t, lt, Sn(n)]) : t;
    }
    function lC(r, e) {
      var t = Bh(r, e), n = Sp(r, e);
      return n ? [vt([t, lt, n]), Kn] : t;
    }
    function Bh(r, e) {
      return e("path");
    }
    function Sp(r, e) {
      var t = r.getValue(), n = [];
      if (t.params.length > 0) {
        var u = r.map(e, "params");
        n.push.apply(n, _(u));
      }
      if (t.hash && t.hash.pairs.length > 0) {
        var a = e("hash");
        n.push(a);
      }
      return n.length === 0 ? "" : Ep(lt, n);
    }
    function pC(r) {
      return ["as |", r.blockParams.join(" "), "|"];
    }
    var QP = { print: function(e, t, n) {
      var u = e.getValue();
      if (!u)
        return "";
      if (GP(e))
        return t.originalText.slice(Fh(u), Sh(u));
      switch (u.type) {
        case "Block":
        case "Program":
        case "Template":
          return Sn(e.map(n, "body"));
        case "ElementNode": {
          var a = Sn(function(we, Pe) {
            var He = we.getValue(), er = ["attributes", "modifiers", "comments", "blockParams"].filter(function(Cr) {
              return KE(He[Cr]);
            }).map(function(Cr) {
              return [lt, Cr === "blockParams" ? pC(He) : Ep(lt, we.map(Pe, Cr))];
            });
            return ["<", He.tag, vt(er), HP(He)];
          }(e, n)), i = t.htmlWhitespaceSensitivity === "ignore" && Cp(e, ["ElementNode"]) ? Kn : "";
          if (ZE(u))
            return [a, i];
          var o = ["</", u.tag, ">"];
          return u.children.length === 0 ? [a, vt(o), i] : t.htmlWhitespaceSensitivity === "ignore" ? [a, vt(eC(e, t, n)), to, vt(o), i] : [a, vt(Sn(eC(e, t, n))), vt(o), i];
        }
        case "BlockStatement": {
          var s = e.getParentNode(1);
          return s && s.inverse && s.inverse.body.length === 1 && s.inverse.body[0] === u && s.inverse.body[0].path.parts[0] === "if" ? [JP(e, n), oC(e, n, t), sC(e, n, t)] : [zP(e, n), Sn([oC(e, n, t), sC(e, n, t), YP(e, n, t)])];
        }
        case "ElementModifierStatement":
          return Sn(["{{", lC(e, n), "}}"]);
        case "MustacheStatement":
          return Sn([bp(u), lC(e, n), Fp(u)]);
        case "SubExpression":
          return Sn(["(", KP(e, n), Kn, ")"]);
        case "AttrNode": {
          var c = u.value.type === "TextNode";
          if (c && u.value.chars === "" && Fh(u.value) === Sh(u.value))
            return u.name;
          var l = c ? wh(t, u.value.chars).quote : u.value.type === "ConcatStatement" ? wh(t, u.value.parts.filter(function(we) {
            return we.type === "TextNode";
          }).map(function(we) {
            return we.chars;
          }).join("")).quote : "", p = n("value");
          return [u.name, "=", l, u.name === "class" && l ? Sn(vt(p)) : p, l];
        }
        case "ConcatStatement":
          return e.map(n, "parts");
        case "Hash":
          return Ep(lt, e.map(n, "pairs"));
        case "HashPair":
          return [u.key, "=", n("value")];
        case "TextNode": {
          var f = u.chars.replace(/{{/g, "\\{{"), d = function(we) {
            for (var Pe = 0; Pe < 2; Pe++) {
              var He = we.getParentNode(Pe);
              if (He && He.type === "AttrNode")
                return He.name.toLowerCase();
            }
          }(e);
          if (d) {
            if (d === "class") {
              var D = f.trim().split(/\s+/).join(" "), v = !1, y = !1;
              return Ap(e, ["ConcatStatement"]) && (xh(e, ["MustacheStatement"]) && /^\s/.test(f) && (v = !0), Cp(e, ["MustacheStatement"]) && /\s$/.test(f) && D !== "" && (y = !0)), [v ? lt : "", D, y ? lt : ""];
            }
            return VP(f, $P);
          }
          var b = /^[\t\n\f\r ]*$/.test(f), S = !WP(e), F = !UP(e);
          if (t.htmlWhitespaceSensitivity !== "ignore") {
            var x = /^[\t\n\f\r ]*/, w = /[\t\n\f\r ]*$/, A = F && Ap(e, ["Template"]), k = S && Ap(e, ["Template"]);
            if (b) {
              if (k || A)
                return "";
              var O = [lt], q = no(f);
              return q && (O = Qs(q)), QE(e) && (O = O.map(function(we) {
                return XE(we);
              })), O;
            }
            var H = f.match(x), R = ke(H, 1), $ = R[0], K = f.match(w), ne = ke(K, 1), ue = ne[0], Ce = [];
            if ($) {
              Ce = [lt];
              var oe = no($);
              oe && (Ce = Qs(oe)), f = f.replace(x, "");
            }
            var ae = [];
            if (ue) {
              if (!A) {
                ae = [lt];
                var ve = no(ue);
                ve && (ae = Qs(ve)), QE(e) && (ae = ae.map(function(we) {
                  return XE(we);
                }));
              }
              f = f.replace(w, "");
            }
            return [].concat(_(Ce), [JE(cC(f))], _(ae));
          }
          var Le = no(f), Te = function(we) {
            return no(((we = typeof we == "string" ? we : "").match(/^([^\S\n\r]*[\n\r])+/g) || [])[0] || "");
          }(f), Ne = function(we) {
            return no(((we = typeof we == "string" ? we : "").match(/([\n\r][^\S\n\r]*)+$/g) || [])[0] || "");
          }(f);
          if ((S || F) && b && Ap(e, ["Block", "ElementNode", "Template"]))
            return "";
          b && Le ? (Te = Math.min(Le, 2), Ne = 0) : (Cp(e, ["BlockStatement", "ElementNode"]) && (Ne = Math.max(Ne, 1)), xh(e, ["BlockStatement", "ElementNode"]) && (Te = Math.max(Te, 1)));
          var Oe = "", We = "";
          return Ne === 0 && Cp(e, ["MustacheStatement"]) && (We = " "), Te === 0 && xh(e, ["MustacheStatement"]) && (Oe = " "), S && (Te = 0, Oe = ""), F && (Ne = 0, We = ""), f = f.replace(/^[\t\n\f\r ]+/g, Oe).replace(/[\t\n\f\r ]+$/, We), [].concat(_(Qs(Te)), [JE(cC(f))], _(Qs(Ne)));
        }
        case "MustacheCommentStatement": {
          var Re = Fh(u), Ke = Sh(u), Fe = t.originalText.charAt(Re + 2) === "~", be = t.originalText.charAt(Ke - 3) === "~", Qe = u.value.includes("}}") ? "--" : "";
          return ["{{", Fe ? "~" : "", "!", Qe, u.value, Qe, be ? "~" : "", "}}"];
        }
        case "PathExpression":
          return u.original;
        case "BooleanLiteral":
          return String(u.value);
        case "CommentStatement":
          return ["<!--", u.value, "-->"];
        case "StringLiteral":
          return function(we, Pe) {
            var He = wh(Pe, we), er = He.quote, Cr = He.regex;
            return [er, we.replace(Cr, "\\".concat(er)), er];
          }(u.value, t);
        case "NumberLiteral":
          return String(u.value);
        case "UndefinedLiteral":
          return "undefined";
        case "NullLiteral":
          return "null";
        default:
          throw new Error("unknown glimmer type: " + JSON.stringify(u.type));
      }
    }, massageAstNode: MP }, ZP = { languages: [lr({ name: "Handlebars", type: "markup", color: "#f7931e", aliases: ["hbs", "htmlbars"], extensions: [".handlebars", ".hbs"], tmScope: "text.html.handlebars", aceMode: "handlebars", languageId: 155 }, function() {
      return { since: "2.3.0", parsers: ["glimmer"], vscodeLanguageIds: ["handlebars"] };
    })], printers: { glimmer: QP }, parsers: { get glimmer() {
      return {}.parsers.glimmer;
    } } }, _P = { hasPragma: function(e) {
      return /^\s*#[^\S\n]*@(format|prettier)\s*(\n|$)/.test(e);
    }, insertPragma: function(e) {
      return `# @format

` + e;
    } }, fC = { locStart: function(e) {
      return typeof e.start == "number" ? e.start : e.loc && e.loc.start;
    }, locEnd: function(e) {
      return typeof e.end == "number" ? e.end : e.loc && e.loc.end;
    } }, Pa = fe.builders, Nr = Pa.join, ze = Pa.hardline, uo = Pa.line, ur = Pa.softline, yt = Pa.group, Jr = Pa.indent, nn = Pa.ifBreak, dC = X.isNextLineEmpty, kh = X.isNonEmptyArray, e4 = _P.insertPragma, r4 = fC.locStart, hC = fC.locEnd;
    function Yr(r, e, t) {
      if (t.directives.length === 0)
        return "";
      var n = Nr(uo, r.map(e, "directives"));
      return t.kind === "FragmentDefinition" || t.kind === "OperationDefinition" ? yt([uo, n]) : [" ", yt(Jr([ur, n]))];
    }
    function Tn(r, e, t) {
      var n = r.getValue().length;
      return r.map(function(u, a) {
        var i = t();
        return dC(e.originalText, u.getValue(), hC) && a < n - 1 ? [i, ze] : i;
      });
    }
    function DC(r, e, t) {
      for (var n = r.getNode(), u = [], a = n.interfaces, i = r.map(function(d) {
        return t(d);
      }, "interfaces"), o = 0; o < a.length; o++) {
        var s = a[o];
        u.push(i[o]);
        var c = a[o + 1];
        if (c) {
          var l = e.originalText.slice(s.loc.end, c.loc.start), p = l.includes("#"), f = l.replace(/#.*/g, "").trim();
          u.push(f === "," ? "," : " &", p ? uo : " ");
        }
      }
      return u;
    }
    function gC() {
    }
    gC.ignoredProperties = /* @__PURE__ */ new Set(["loc", "comments"]);
    var t4 = { print: function(e, t, n) {
      var u = e.getValue();
      if (!u)
        return "";
      if (typeof u == "string")
        return u;
      switch (u.kind) {
        case "Document": {
          var a = [];
          return e.each(function(s, c, l) {
            a.push(n()), c !== l.length - 1 && (a.push(ze), dC(t.originalText, s.getValue(), hC) && a.push(ze));
          }, "definitions"), [].concat(a, [ze]);
        }
        case "OperationDefinition": {
          var i = t.originalText[r4(u)] !== "{", o = Boolean(u.name);
          return [i ? u.operation : "", i && o ? [" ", n("name")] : "", i && !o && kh(u.variableDefinitions) ? " " : "", kh(u.variableDefinitions) ? yt(["(", Jr([ur, Nr([nn("", ", "), ur], e.map(n, "variableDefinitions"))]), ur, ")"]) : "", Yr(e, n, u), u.selectionSet && (i || o) ? " " : "", n("selectionSet")];
        }
        case "FragmentDefinition":
          return ["fragment ", n("name"), kh(u.variableDefinitions) ? yt(["(", Jr([ur, Nr([nn("", ", "), ur], e.map(n, "variableDefinitions"))]), ur, ")"]) : "", " on ", n("typeCondition"), Yr(e, n, u), " ", n("selectionSet")];
        case "SelectionSet":
          return ["{", Jr([ze, Nr(ze, e.call(function(s) {
            return Tn(s, t, n);
          }, "selections"))]), ze, "}"];
        case "Field":
          return yt([u.alias ? [n("alias"), ": "] : "", n("name"), u.arguments.length > 0 ? yt(["(", Jr([ur, Nr([nn("", ", "), ur], e.call(function(s) {
            return Tn(s, t, n);
          }, "arguments"))]), ur, ")"]) : "", Yr(e, n, u), u.selectionSet ? " " : "", n("selectionSet")]);
        case "Name":
          return u.value;
        case "StringValue":
          return u.block ? ['"""', ze, Nr(ze, u.value.replace(/"""/g, "\\$&").split(`
`)), ze, '"""'] : ['"', u.value.replace(/["\\]/g, "\\$&").replace(/\n/g, "\\n"), '"'];
        case "IntValue":
        case "FloatValue":
        case "EnumValue":
          return u.value;
        case "BooleanValue":
          return u.value ? "true" : "false";
        case "NullValue":
          return "null";
        case "Variable":
          return ["$", n("name")];
        case "ListValue":
          return yt(["[", Jr([ur, Nr([nn("", ", "), ur], e.map(n, "values"))]), ur, "]"]);
        case "ObjectValue":
          return yt(["{", t.bracketSpacing && u.fields.length > 0 ? " " : "", Jr([ur, Nr([nn("", ", "), ur], e.map(n, "fields"))]), ur, nn("", t.bracketSpacing && u.fields.length > 0 ? " " : ""), "}"]);
        case "ObjectField":
        case "Argument":
          return [n("name"), ": ", n("value")];
        case "Directive":
          return ["@", n("name"), u.arguments.length > 0 ? yt(["(", Jr([ur, Nr([nn("", ", "), ur], e.call(function(s) {
            return Tn(s, t, n);
          }, "arguments"))]), ur, ")"]) : ""];
        case "NamedType":
          return n("name");
        case "VariableDefinition":
          return [n("variable"), ": ", n("type"), u.defaultValue ? [" = ", n("defaultValue")] : "", Yr(e, n, u)];
        case "ObjectTypeExtension":
        case "ObjectTypeDefinition":
          return [n("description"), u.description ? ze : "", u.kind === "ObjectTypeExtension" ? "extend " : "", "type ", n("name"), u.interfaces.length > 0 ? [" implements "].concat(_(DC(e, t, n))) : "", Yr(e, n, u), u.fields.length > 0 ? [" {", Jr([ze, Nr(ze, e.call(function(s) {
            return Tn(s, t, n);
          }, "fields"))]), ze, "}"] : ""];
        case "FieldDefinition":
          return [n("description"), u.description ? ze : "", n("name"), u.arguments.length > 0 ? yt(["(", Jr([ur, Nr([nn("", ", "), ur], e.call(function(s) {
            return Tn(s, t, n);
          }, "arguments"))]), ur, ")"]) : "", ": ", n("type"), Yr(e, n, u)];
        case "DirectiveDefinition":
          return [n("description"), u.description ? ze : "", "directive ", "@", n("name"), u.arguments.length > 0 ? yt(["(", Jr([ur, Nr([nn("", ", "), ur], e.call(function(s) {
            return Tn(s, t, n);
          }, "arguments"))]), ur, ")"]) : "", u.repeatable ? " repeatable" : "", " on ", Nr(" | ", e.map(n, "locations"))];
        case "EnumTypeExtension":
        case "EnumTypeDefinition":
          return [n("description"), u.description ? ze : "", u.kind === "EnumTypeExtension" ? "extend " : "", "enum ", n("name"), Yr(e, n, u), u.values.length > 0 ? [" {", Jr([ze, Nr(ze, e.call(function(s) {
            return Tn(s, t, n);
          }, "values"))]), ze, "}"] : ""];
        case "EnumValueDefinition":
          return [n("description"), u.description ? ze : "", n("name"), Yr(e, n, u)];
        case "InputValueDefinition":
          return [n("description"), u.description ? u.description.block ? ze : uo : "", n("name"), ": ", n("type"), u.defaultValue ? [" = ", n("defaultValue")] : "", Yr(e, n, u)];
        case "InputObjectTypeExtension":
        case "InputObjectTypeDefinition":
          return [n("description"), u.description ? ze : "", u.kind === "InputObjectTypeExtension" ? "extend " : "", "input ", n("name"), Yr(e, n, u), u.fields.length > 0 ? [" {", Jr([ze, Nr(ze, e.call(function(s) {
            return Tn(s, t, n);
          }, "fields"))]), ze, "}"] : ""];
        case "SchemaDefinition":
          return ["schema", Yr(e, n, u), " {", u.operationTypes.length > 0 ? Jr([ze, Nr(ze, e.call(function(s) {
            return Tn(s, t, n);
          }, "operationTypes"))]) : "", ze, "}"];
        case "OperationTypeDefinition":
          return [n("operation"), ": ", n("type")];
        case "InterfaceTypeExtension":
        case "InterfaceTypeDefinition":
          return [n("description"), u.description ? ze : "", u.kind === "InterfaceTypeExtension" ? "extend " : "", "interface ", n("name"), u.interfaces.length > 0 ? [" implements "].concat(_(DC(e, t, n))) : "", Yr(e, n, u), u.fields.length > 0 ? [" {", Jr([ze, Nr(ze, e.call(function(s) {
            return Tn(s, t, n);
          }, "fields"))]), ze, "}"] : ""];
        case "FragmentSpread":
          return ["...", n("name"), Yr(e, n, u)];
        case "InlineFragment":
          return ["...", u.typeCondition ? [" on ", n("typeCondition")] : "", Yr(e, n, u), " ", n("selectionSet")];
        case "UnionTypeExtension":
        case "UnionTypeDefinition":
          return yt([n("description"), u.description ? ze : "", yt([u.kind === "UnionTypeExtension" ? "extend " : "", "union ", n("name"), Yr(e, n, u), u.types.length > 0 ? [" =", nn("", " "), Jr([nn([uo, "  "]), Nr([uo, "| "], e.map(n, "types"))])] : ""])]);
        case "ScalarTypeExtension":
        case "ScalarTypeDefinition":
          return [n("description"), u.description ? ze : "", u.kind === "ScalarTypeExtension" ? "extend " : "", "scalar ", n("name"), Yr(e, n, u)];
        case "NonNullType":
          return [n("type"), "!"];
        case "ListType":
          return ["[", n("type"), "]"];
        default:
          throw new Error("unknown graphql type: " + JSON.stringify(u.kind));
      }
    }, massageAstNode: gC, hasPrettierIgnore: function(e) {
      var t = e.getValue();
      return t && Array.isArray(t.comments) && t.comments.some(function(n) {
        return n.value.trim() === "prettier-ignore";
      });
    }, insertPragma: e4, printComment: function(e) {
      var t = e.getValue();
      if (t.kind === "Comment")
        return "#" + t.value.trimEnd();
      throw new Error("Not a comment: " + JSON.stringify(t));
    }, canAttachComment: function(e) {
      return e.kind && e.kind !== "Comment";
    } }, n4 = { bracketSpacing: Yn.bracketSpacing }, u4 = { languages: [lr({ name: "GraphQL", type: "data", color: "#e10098", extensions: [".graphql", ".gql", ".graphqls"], tmScope: "source.graphql", aceMode: "text", languageId: 139 }, function() {
      return { since: "1.5.0", parsers: ["graphql"], vscodeLanguageIds: ["graphql"] };
    })], options: n4, printers: { graphql: t4 }, parsers: { get graphql() {
      return {}.parsers.graphql;
    } } }, Tp = { locStart: function(e) {
      return e.position.start.offset;
    }, locEnd: function(e) {
      return e.position.end.offset;
    } }, mC = X.getLast, vC = Tp.locStart, yC = Tp.locEnd, Nh = { cjkPattern: "(?:[\\u02ea-\\u02eb\\u1100-\\u11ff\\u2e80-\\u2e99\\u2e9b-\\u2ef3\\u2f00-\\u2fd5\\u2ff0-\\u303f\\u3041-\\u3096\\u3099-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312f\\u3131-\\u318e\\u3190-\\u3191\\u3196-\\u31ba\\u31c0-\\u31e3\\u31f0-\\u321e\\u322a-\\u3247\\u3260-\\u327e\\u328a-\\u32b0\\u32c0-\\u32cb\\u32d0-\\u3370\\u337b-\\u337f\\u33e0-\\u33fe\\u3400-\\u4db5\\u4e00-\\u9fef\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufe10-\\ufe1f\\ufe30-\\ufe6f\\uff00-\\uffef]|[\\ud840-\\ud868\\ud86a-\\ud86c\\ud86f-\\ud872\\ud874-\\ud879][\\udc00-\\udfff]|\\ud82c[\\udc00-\\udd1e\\udd50-\\udd52\\udd64-\\udd67]|\\ud83c[\\ude00\\ude50-\\ude51]|\\ud869[\\udc00-\\uded6\\udf00-\\udfff]|\\ud86d[\\udc00-\\udf34\\udf40-\\udfff]|\\ud86e[\\udc00-\\udc1d\\udc20-\\udfff]|\\ud873[\\udc00-\\udea1\\udeb0-\\udfff]|\\ud87a[\\udc00-\\udfe0]|\\ud87e[\\udc00-\\ude1d])(?:[\\ufe00-\\ufe0f]|\\udb40[\\udd00-\\uddef])?", kPattern: "[\\u1100-\\u11ff\\u3001-\\u3003\\u3008-\\u3011\\u3013-\\u301f\\u302e-\\u3030\\u3037\\u30fb\\u3131-\\u318e\\u3200-\\u321e\\u3260-\\u327e\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\ufe45-\\ufe46\\uff61-\\uff65\\uffa0-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc]", punctuationPattern: "[\\u0021-\\u002f\\u003a-\\u0040\\u005b-\\u0060\\u007b-\\u007e\\u00a1\\u00a7\\u00ab\\u00b6-\\u00b7\\u00bb\\u00bf\\u037e\\u0387\\u055a-\\u055f\\u0589-\\u058a\\u05be\\u05c0\\u05c3\\u05c6\\u05f3-\\u05f4\\u0609-\\u060a\\u060c-\\u060d\\u061b\\u061e-\\u061f\\u066a-\\u066d\\u06d4\\u0700-\\u070d\\u07f7-\\u07f9\\u0830-\\u083e\\u085e\\u0964-\\u0965\\u0970\\u09fd\\u0a76\\u0af0\\u0c77\\u0c84\\u0df4\\u0e4f\\u0e5a-\\u0e5b\\u0f04-\\u0f12\\u0f14\\u0f3a-\\u0f3d\\u0f85\\u0fd0-\\u0fd4\\u0fd9-\\u0fda\\u104a-\\u104f\\u10fb\\u1360-\\u1368\\u1400\\u166e\\u169b-\\u169c\\u16eb-\\u16ed\\u1735-\\u1736\\u17d4-\\u17d6\\u17d8-\\u17da\\u1800-\\u180a\\u1944-\\u1945\\u1a1e-\\u1a1f\\u1aa0-\\u1aa6\\u1aa8-\\u1aad\\u1b5a-\\u1b60\\u1bfc-\\u1bff\\u1c3b-\\u1c3f\\u1c7e-\\u1c7f\\u1cc0-\\u1cc7\\u1cd3\\u2010-\\u2027\\u2030-\\u2043\\u2045-\\u2051\\u2053-\\u205e\\u207d-\\u207e\\u208d-\\u208e\\u2308-\\u230b\\u2329-\\u232a\\u2768-\\u2775\\u27c5-\\u27c6\\u27e6-\\u27ef\\u2983-\\u2998\\u29d8-\\u29db\\u29fc-\\u29fd\\u2cf9-\\u2cfc\\u2cfe-\\u2cff\\u2d70\\u2e00-\\u2e2e\\u2e30-\\u2e4f\\u3001-\\u3003\\u3008-\\u3011\\u3014-\\u301f\\u3030\\u303d\\u30a0\\u30fb\\ua4fe-\\ua4ff\\ua60d-\\ua60f\\ua673\\ua67e\\ua6f2-\\ua6f7\\ua874-\\ua877\\ua8ce-\\ua8cf\\ua8f8-\\ua8fa\\ua8fc\\ua92e-\\ua92f\\ua95f\\ua9c1-\\ua9cd\\ua9de-\\ua9df\\uaa5c-\\uaa5f\\uaade-\\uaadf\\uaaf0-\\uaaf1\\uabeb\\ufd3e-\\ufd3f\\ufe10-\\ufe19\\ufe30-\\ufe52\\ufe54-\\ufe61\\ufe63\\ufe68\\ufe6a-\\ufe6b\\uff01-\\uff03\\uff05-\\uff0a\\uff0c-\\uff0f\\uff1a-\\uff1b\\uff1f-\\uff20\\uff3b-\\uff3d\\uff3f\\uff5b\\uff5d\\uff5f-\\uff65]|\\ud800[\\udd00-\\udd02\\udf9f\\udfd0]|\\ud801[\\udd6f]|\\ud802[\\udc57\\udd1f\\udd3f\\ude50-\\ude58\\ude7f\\udef0-\\udef6\\udf39-\\udf3f\\udf99-\\udf9c]|\\ud803[\\udf55-\\udf59]|\\ud804[\\udc47-\\udc4d\\udcbb-\\udcbc\\udcbe-\\udcc1\\udd40-\\udd43\\udd74-\\udd75\\uddc5-\\uddc8\\uddcd\\udddb\\udddd-\\udddf\\ude38-\\ude3d\\udea9]|\\ud805[\\udc4b-\\udc4f\\udc5b\\udc5d\\udcc6\\uddc1-\\uddd7\\ude41-\\ude43\\ude60-\\ude6c\\udf3c-\\udf3e]|\\ud806[\\udc3b\\udde2\\ude3f-\\ude46\\ude9a-\\ude9c\\ude9e-\\udea2]|\\ud807[\\udc41-\\udc45\\udc70-\\udc71\\udef7-\\udef8\\udfff]|\\ud809[\\udc70-\\udc74]|\\ud81a[\\ude6e-\\ude6f\\udef5\\udf37-\\udf3b\\udf44]|\\ud81b[\\ude97-\\ude9a\\udfe2]|\\ud82f[\\udc9f]|\\ud836[\\ude87-\\ude8b]|\\ud83a[\\udd5e-\\udd5f]" }, Ph = Nh.cjkPattern, a4 = Nh.kPattern, EC = Nh.punctuationPattern, CC = ["liquidNode", "inlineCode", "emphasis", "strong", "delete", "wikiLink", "link", "linkReference", "image", "imageReference", "footnote", "footnoteReference", "sentence", "whitespace", "word", "break", "inlineMath"], i4 = [].concat(CC, ["tableCell", "paragraph", "heading"]), o4 = new RegExp(a4), Ih = new RegExp(EC);
    function xp(r, e) {
      var t = e.slice(r.position.start.offset, r.position.end.offset).match(/^\s*(\d+)(\.|\))(\s*)/), n = ke(t, 4), u = n[1], a = n[2], i = n[3];
      return { numberText: u, marker: a, leadingSpaces: i };
    }
    var un = { mapAst: function(e, t) {
      return function n(u, a, i) {
        var o = Object.assign({}, t(u, a, i));
        return o.children && (o.children = o.children.map(function(s, c) {
          return n(s, c, [o].concat(_(i)));
        })), o;
      }(e, null, []);
    }, splitText: function(e, t) {
      var n = "non-cjk", u = "cj-letter", a = "cjk-punctuation", i = [], o = (t.proseWrap === "preserve" ? e : e.replace(new RegExp("(".concat(Ph, `)
(`).concat(Ph, ")"), "g"), "$1$2")).split(/([\t\n ]+)/), s = le(o.entries()), c;
      try {
        for (s.s(); !(c = s.n()).done; ) {
          var l = ke(c.value, 2), p = l[0], f = l[1];
          if (p % 2 == 1) {
            i.push({ type: "whitespace", value: /\n/.test(f) ? `
` : " " });
            continue;
          }
          if (!((p === 0 || p === o.length - 1) && f === "")) {
            var d = f.split(new RegExp("(".concat(Ph, ")"))), D = le(d.entries()), v;
            try {
              for (D.s(); !(v = D.n()).done; ) {
                var y = ke(v.value, 2), b = y[0], S = y[1];
                (b !== 0 && b !== d.length - 1 || S !== "") && (b % 2 != 0 ? F(Ih.test(S) ? { type: "word", value: S, kind: a, hasLeadingPunctuation: !0, hasTrailingPunctuation: !0 } : { type: "word", value: S, kind: o4.test(S) ? "k-letter" : u, hasLeadingPunctuation: !1, hasTrailingPunctuation: !1 }) : S !== "" && F({ type: "word", value: S, kind: n, hasLeadingPunctuation: Ih.test(S[0]), hasTrailingPunctuation: Ih.test(mC(S)) }));
              }
            } catch (x) {
              D.e(x);
            } finally {
              D.f();
            }
          }
        }
      } catch (x) {
        s.e(x);
      } finally {
        s.f();
      }
      return i;
      function F(x) {
        var w = mC(i), A, k;
        w && w.type === "word" && (w.kind === n && x.kind === u && !w.hasTrailingPunctuation || w.kind === u && x.kind === n && !x.hasLeadingPunctuation ? i.push({ type: "whitespace", value: " " }) : (A = n, k = a, w.kind === A && x.kind === k || w.kind === k && x.kind === A || [w.value, x.value].some(function(O) {
          return /\u3000/.test(O);
        }) || i.push({ type: "whitespace", value: "" }))), i.push(x);
      }
    }, punctuationPattern: EC, getFencedCodeBlockValue: function(e, t) {
      var n = e.value;
      return e.position.end.offset === t.length && n.endsWith(`
`) && t.endsWith(`
`) ? n.slice(0, -1) : n;
    }, getOrderedListItemInfo: xp, hasGitDiffFriendlyOrderedList: function(e, t) {
      if (!e.ordered || e.children.length < 2)
        return !1;
      var n = Number(xp(e.children[0], t.originalText).numberText), u = Number(xp(e.children[1], t.originalText).numberText);
      if (n === 0 && e.children.length > 2) {
        var a = Number(xp(e.children[2], t.originalText).numberText);
        return u === 1 && a === 1;
      }
      return u === 1;
    }, INLINE_NODE_TYPES: CC, INLINE_NODE_WRAPPER_TYPES: i4, isAutolink: function(e) {
      if (!e || e.type !== "link" || e.children.length !== 1)
        return !1;
      var t = e.children[0];
      return t && vC(e) === vC(t) && yC(e) === yC(t);
    } }, s4 = X.inferParserByLanguage, c4 = X.getMaxContinuousCount, AC = fe.builders, Oh = AC.hardline, l4 = AC.markAsRoot, p4 = fe.utils.replaceNewlinesWithLiterallines, f4 = un.getFencedCodeBlockValue, d4 = function(e, t, n, u) {
      var a = e.getValue();
      if (a.type === "code" && a.lang !== null) {
        var i = s4(a.lang, u);
        if (i) {
          var o = u.__inJsTemplate ? "~" : "`", s = o.repeat(Math.max(3, c4(a.value, o) + 1)), c = n(f4(a, u.originalText), { parser: i }, { stripTrailingHardline: !0 });
          return l4([s, a.lang, a.meta ? " " + a.meta : "", Oh, p4(c), Oh, s]);
        }
      }
      switch (a.type) {
        case "front-matter":
          return lh(a, n);
        case "importExport":
          return [n(a.value, { parser: "babel" }, { stripTrailingHardline: !0 }), Oh];
        case "jsx":
          return n("<$>".concat(a.value, "</$>"), { parser: "__js_expression", rootMarker: "mdx" }, { stripTrailingHardline: !0 });
      }
      return null;
    }, bC = ["format", "prettier"];
    function FC(r) {
      var e = "@(".concat(bC.join("|"), ")"), t = new RegExp(["<!--\\s*".concat(e, "\\s*-->"), `<!--.*\r?
[\\s\\S]*(^|
)[^\\S
]*`.concat(e, `[^\\S
]*($|
)[\\s\\S]*
.*-->`)].join("|"), "m"), n = r.match(t);
      return n && n.index === 0;
    }
    var SC = { startWithPragma: FC, hasPragma: function(e) {
      return FC(Dp(e).content.trimStart());
    }, insertPragma: function(e) {
      var t = Dp(e), n = "<!-- @".concat(bC[0], " -->");
      return t.frontMatter ? "".concat(t.frontMatter.raw, `

`).concat(n, `

`).concat(t.content) : "".concat(n, `

`).concat(t.content);
    } }, TC = un.getOrderedListItemInfo, Ia = un.mapAst, h4 = un.splitText, D4 = /^([\u0000-\uffff]|[\ud800-\udbff][\udc00-\udfff])$/;
    function xC(r, e, t) {
      return Ia(r, function(n) {
        if (!n.children)
          return n;
        var u = n.children.reduce(function(a, i) {
          var o = sr(a);
          return o && e(o, i) ? a.splice(-1, 1, t(o, i)) : a.push(i), a;
        }, []);
        return Object.assign({}, n, { children: u });
      });
    }
    var g4 = function(e, t) {
      return e = function(n) {
        return xC(n, function(u, a) {
          return u.type === "importExport" && a.type === "importExport";
        }, function(u, a) {
          return { type: "importExport", value: u.value + `

` + a.value, position: { start: u.position.start, end: a.position.end } };
        });
      }(e = function(n) {
        return Ia(n, function(u) {
          return u.type !== "import" && u.type !== "export" ? u : Object.assign({}, u, { type: "importExport" });
        });
      }(e = function(n, u) {
        return Ia(n, function(a, i, o) {
          var s = ke(o, 1), c = s[0];
          if (a.type !== "text")
            return a;
          var l = a.value;
          return c.type === "paragraph" && (i === 0 && (l = l.trimStart()), i === c.children.length - 1 && (l = l.trimEnd())), { type: "sentence", position: a.position, children: h4(l, u) };
        });
      }(e = function(n, u) {
        return Ia(n, function(o, s, c) {
          if (o.type === "list" && o.children.length > 0) {
            for (var l = 0; l < c.length; l++) {
              var p = c[l];
              if (p.type === "list" && !p.isAligned)
                return o.isAligned = !1, o;
            }
            o.isAligned = i(o);
          }
          return o;
        });
        function a(o) {
          return o.children.length === 0 ? -1 : o.children[0].position.start.column - 1;
        }
        function i(o) {
          if (!o.ordered)
            return !0;
          var s = ke(o.children, 2), c = s[0], l = s[1];
          if (TC(c, u.originalText).leadingSpaces.length > 1)
            return !0;
          var p = a(c);
          return p === -1 ? !1 : o.children.length === 1 ? p % u.tabWidth == 0 : p !== a(l) ? !1 : p % u.tabWidth == 0 ? !0 : TC(l, u.originalText).leadingSpaces.length > 1;
        }
      }(e = function(n, u) {
        return Ia(n, function(a, i, o) {
          if (a.type === "code") {
            var s = /^\n?( {4,}|\t)/.test(u.originalText.slice(a.position.start.offset, a.position.end.offset));
            if (a.isIndented = s, s)
              for (var c = 0; c < o.length; c++) {
                var l = o[c];
                if (l.hasIndentedCodeblock)
                  break;
                l.type === "list" && (l.hasIndentedCodeblock = !0);
              }
          }
          return a;
        });
      }(e = function(n) {
        return Ia(n, function(u) {
          return u.type !== "inlineCode" ? u : Object.assign({}, u, { value: u.value.replace(/\s+/g, " ") });
        });
      }(e = function(n) {
        return xC(n, function(u, a) {
          return u.type === "text" && a.type === "text";
        }, function(u, a) {
          return { type: "text", value: u.value + a.value, position: { start: u.position.start, end: a.position.end } };
        });
      }(e = function(n, u) {
        return Ia(n, function(a) {
          return a.type === "text" && a.value !== "*" && a.value !== "_" && D4.test(a.value) && a.position.end.offset - a.position.start.offset !== a.value.length ? Object.assign({}, a, { value: u.originalText.slice(a.position.start.offset, a.position.end.offset) }) : a;
        });
      }(e, t))), t), t), t)));
    }, m4 = X.isFrontMatterNode, v4 = SC.startWithPragma, y4 = /* @__PURE__ */ new Set(["position", "raw"]);
    function wC(r, e, t) {
      return r.type !== "front-matter" && r.type !== "code" && r.type !== "yaml" && r.type !== "import" && r.type !== "export" && r.type !== "jsx" || delete e.value, r.type === "list" && delete e.isAligned, r.type !== "list" && r.type !== "listItem" || (delete e.spread, delete e.loose), r.type === "text" ? null : (r.type === "inlineCode" && (e.value = r.value.replace(/[\t\n ]+/g, " ")), r.type === "wikiLink" && (e.value = r.value.trim().replace(/[\t\n]+/g, " ")), r.type !== "definition" && r.type !== "linkReference" || (e.label = r.label.trim().replace(/[\t\n ]+/g, " ").toLowerCase()), r.type !== "definition" && r.type !== "link" && r.type !== "image" || !r.title || (e.title = r.title.replace(/\\(["')])/g, "$1")), t && t.type === "root" && t.children.length > 0 && (t.children[0] === r || m4(t.children[0]) && t.children[1] === r) && r.type === "html" && v4(r.value) ? null : void 0);
    }
    wC.ignoredProperties = y4;
    var E4 = wC, wp = X.getLast, C4 = X.getMinNotPresentContinuousCount, A4 = X.getMaxContinuousCount, b4 = X.getStringWidth, F4 = X.isNonEmptyArray, Et = fe.builders, BC = Et.breakParent, kC = Et.join, NC = Et.line, PC = Et.literalline, IC = Et.markAsRoot, Kr = Et.hardline, Lh = Et.softline, S4 = Et.ifBreak, T4 = Et.fill, ao = Et.align, x4 = Et.indent, Bp = Et.group, OC = Et.hardlineWithoutBreakParent, w4 = fe.utils.normalizeDoc, B4 = fe.printer.printDocToString, Zs = X.replaceEndOfLineWith, k4 = SC.insertPragma, N4 = Tp.locStart, P4 = Tp.locEnd, I4 = un.getFencedCodeBlockValue, O4 = un.hasGitDiffFriendlyOrderedList, L4 = un.splitText, LC = un.punctuationPattern, R4 = un.INLINE_NODE_TYPES, M4 = un.INLINE_NODE_WRAPPER_TYPES, RC = un.isAutolink, MC = /* @__PURE__ */ new Set(["importExport"]), j4 = ["heading", "tableCell", "link", "wikiLink"], $4 = /* @__PURE__ */ new Set(["listItem", "definition", "footnoteDefinition"]);
    function jC(r, e, t, n) {
      var u = r.getValue(), a = u.checked === null ? "" : u.checked ? "[x] " : "[ ] ";
      return [a, Qr(r, e, t, { processor: function(o, s) {
        if (s === 0 && o.getValue().type !== "list")
          return ao(" ".repeat(a.length), t());
        var c = " ".repeat((l = e.tabWidth - n.length, f = 3, l < (p = 0) ? p : l > f ? f : l)), l, p, f;
        return [c, ao(c, t())];
      } })];
    }
    function $C(r, e) {
      return function(t, n, u) {
        var a = -1, i = le(n.children), o;
        try {
          for (i.s(); !(o = i.n()).done; ) {
            var s = o.value;
            if (s.type === t.type && u(s) ? a++ : a = -1, s === t)
              return a;
          }
        } catch (c) {
          i.e(c);
        } finally {
          i.f();
        }
      }(r, e, function(t) {
        return t.ordered === r.ordered;
      });
    }
    function qC(r, e) {
      for (var t = Array.isArray(e) ? e : [e], n, u = -1; n = r.getParentNode(++u); )
        if (t.includes(n.type))
          return u;
      return -1;
    }
    function Rh(r, e) {
      var t = qC(r, e);
      return t === -1 ? null : r.getParentNode(t);
    }
    function VC(r, e, t) {
      if (t.proseWrap === "preserve" && e === `
`)
        return Kr;
      var n = t.proseWrap === "always" && !Rh(r, j4);
      return e !== "" ? n ? NC : " " : n ? Lh : "";
    }
    function q4(r, e, t) {
      var n = [], u = null, a = r.getValue(), i = a.children, o = le(i.entries()), s;
      try {
        for (o.s(); !(s = o.n()).done; ) {
          var c = ke(s.value, 2), l = c[0], p = c[1];
          switch (Mh(p)) {
            case "start":
              u === null && (u = { index: l, offset: p.position.end.offset });
              break;
            case "end":
              u !== null && (n.push({ start: u, end: { index: l, offset: p.position.start.offset } }), u = null);
          }
        }
      } catch (f) {
        o.e(f);
      } finally {
        o.f();
      }
      return Qr(r, e, t, { processor: function(d, D) {
        if (n.length > 0) {
          var v = n[0];
          if (D === v.start.index)
            return [i[v.start.index].value, e.originalText.slice(v.start.offset, v.end.offset), i[v.end.index].value];
          if (v.start.index < D && D < v.end.index)
            return !1;
          if (D === v.end.index)
            return n.shift(), !1;
        }
        return t();
      } });
    }
    function Qr(r, e, t) {
      var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, u = n.postprocessor, a = n.processor || function() {
        return t();
      }, i = r.getValue(), o = [], s;
      return r.each(function(c, l) {
        var p = c.getValue(), f = a(c, l);
        if (f !== !1) {
          var d = { parts: o, prevNode: s, parentNode: i, options: e };
          (function(D, v) {
            var y = v.parts.length === 0, b = R4.includes(D.type), S = D.type === "html" && M4.includes(v.parentNode.type);
            return !y && !b && !S;
          })(p, d) && (o.push(Kr), s && MC.has(s.type) || (function(D, v) {
            var y = (v.prevNode && v.prevNode.type) === D.type && $4.has(D.type), b = v.parentNode.type === "listItem" && !v.parentNode.loose, S = v.prevNode && v.prevNode.type === "listItem" && v.prevNode.loose, F = Mh(v.prevNode) === "next", x = D.type === "html" && v.prevNode && v.prevNode.type === "html" && v.prevNode.position.end.line + 1 === D.position.start.line, w = D.type === "html" && v.parentNode.type === "listItem" && v.prevNode && v.prevNode.type === "paragraph" && v.prevNode.position.end.line + 1 === D.position.start.line;
            return S || !(y || b || F || x || w);
          }(p, d) || UC(p, d)) && o.push(Kr), UC(p, d) && o.push(Kr)), o.push(f), s = p;
        }
      }, "children"), u ? u(o) : o;
    }
    function V4(r) {
      for (var e = r; F4(e.children); )
        e = wp(e.children);
      return e;
    }
    function Mh(r) {
      if (r.type !== "html")
        return !1;
      var e = r.value.match(/^<!--\s*prettier-ignore(?:-(start|end))?\s*-->$/);
      return e !== null && (e[1] ? e[1] : "next");
    }
    function UC(r, e) {
      var t = e.prevNode && e.prevNode.type === "list", n = r.type === "code" && r.isIndented;
      return t && n;
    }
    function jh(r) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], t = [" "].concat(_(Array.isArray(e) ? e : [e]));
      return new RegExp(t.map(function(n) {
        return "\\".concat(n);
      }).join("|")).test(r) ? "<".concat(r, ">") : r;
    }
    function kp(r, e) {
      var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
      if (!r)
        return "";
      if (t)
        return " " + kp(r, e, !1);
      if ((r = r.replace(/\\(["')])/g, "$1")).includes('"') && r.includes("'") && !r.includes(")"))
        return "(".concat(r, ")");
      var n = r.split("'").length - 1, u = r.split('"').length - 1, a = n > u ? '"' : u > n || e.singleQuote ? "'" : '"';
      return r = (r = r.replace(/\\/, "\\\\")).replace(new RegExp("(".concat(a, ")"), "g"), "\\$1"), "".concat(a).concat(r).concat(a);
    }
    var U4 = { preprocess: g4, print: function(e, t, n) {
      var u = e.getValue();
      if (function(ae) {
        var ve = Rh(ae, ["linkReference", "imageReference"]);
        return ve && (ve.type !== "linkReference" || ve.referenceType !== "full");
      }(e))
        return L4(t.originalText.slice(u.position.start.offset, u.position.end.offset), t).map(function(ae) {
          return ae.type === "word" ? ae.value : ae.value === "" ? "" : VC(e, ae.value, t);
        });
      switch (u.type) {
        case "front-matter":
          return t.originalText.slice(u.position.start.offset, u.position.end.offset);
        case "root":
          return u.children.length === 0 ? "" : [w4(q4(e, t, n)), MC.has(V4(u).type) ? "" : Kr];
        case "paragraph":
          return Qr(e, t, n, { postprocessor: T4 });
        case "sentence":
          return Qr(e, t, n);
        case "word": {
          var a = u.value.replace(/\*/g, "\\$&").replace(new RegExp(["(^|".concat(LC, ")(_+)"), "(_+)(".concat(LC, "|$)")].join("|"), "g"), function(ae, ve, Le, Te, Ne) {
            return (Le ? "".concat(ve).concat(Le) : "".concat(Te).concat(Ne)).replace(/_/g, "\\_");
          }), i = function(ve, Le, Te) {
            return ve.type === "sentence" && Te === 0;
          }, o = function(ve, Le, Te) {
            return RC(ve.children[Te - 1]);
          };
          return a !== u.value && (e.match(void 0, i, o) || e.match(void 0, i, function(ae, ve, Le) {
            return ae.type === "emphasis" && Le === 0;
          }, o)) && (a = a.replace(/^(\\?[*_])+/, function(ae) {
            return ae.replace(/\\/g, "");
          })), a;
        }
        case "whitespace": {
          var s = e.getParentNode(), c = s.children.indexOf(u), l = s.children[c + 1], p = l && /^>|^([*+-]|#{1,6}|\d+[).])$/.test(l.value) ? "never" : t.proseWrap;
          return VC(e, u.value, { proseWrap: p });
        }
        case "emphasis": {
          var f;
          if (RC(u.children[0]))
            f = t.originalText[u.position.start.offset];
          else {
            var d = e.getParentNode(), D = d.children.indexOf(u), v = d.children[D - 1], y = d.children[D + 1];
            f = v && v.type === "sentence" && v.children.length > 0 && wp(v.children).type === "word" && !wp(v.children).hasTrailingPunctuation || y && y.type === "sentence" && y.children.length > 0 && y.children[0].type === "word" && !y.children[0].hasLeadingPunctuation || Rh(e, "emphasis") ? "*" : "_";
          }
          return [f, Qr(e, t, n), f];
        }
        case "strong":
          return ["**", Qr(e, t, n), "**"];
        case "delete":
          return ["~~", Qr(e, t, n), "~~"];
        case "inlineCode": {
          var b = C4(u.value, "`"), S = "`".repeat(b || 1), F = b && !/^\s/.test(u.value) ? " " : "";
          return [S, F, u.value, F, S];
        }
        case "wikiLink": {
          var x = "";
          return x = t.proseWrap === "preserve" ? u.value : u.value.replace(/[\t\n]+/g, " "), ["[[", x, "]]"];
        }
        case "link":
          switch (t.originalText[u.position.start.offset]) {
            case "<": {
              var w = "mailto:";
              return ["<", u.url.startsWith(w) && t.originalText.slice(u.position.start.offset + 1, u.position.start.offset + 1 + w.length) !== w ? u.url.slice(w.length) : u.url, ">"];
            }
            case "[":
              return ["[", Qr(e, t, n), "](", jh(u.url, ")"), kp(u.title, t), ")"];
            default:
              return t.originalText.slice(u.position.start.offset, u.position.end.offset);
          }
        case "image":
          return ["![", u.alt || "", "](", jh(u.url, ")"), kp(u.title, t), ")"];
        case "blockquote":
          return ["> ", ao("> ", Qr(e, t, n))];
        case "heading":
          return ["#".repeat(u.depth) + " ", Qr(e, t, n)];
        case "code": {
          if (u.isIndented) {
            var A = " ".repeat(4);
            return ao(A, [A].concat(_(Zs(u.value, Kr))));
          }
          var k = t.__inJsTemplate ? "~" : "`", O = k.repeat(Math.max(3, A4(u.value, k) + 1));
          return [O, u.lang || "", u.meta ? " " + u.meta : "", Kr].concat(_(Zs(I4(u, t.originalText), Kr)), [Kr, O]);
        }
        case "html": {
          var q = e.getParentNode(), H = q.type === "root" && wp(q.children) === u ? u.value.trimEnd() : u.value, R = /^<!--[\S\s]*-->$/.test(H);
          return Zs(H, R ? Kr : IC(PC));
        }
        case "list": {
          var $ = $C(u, e.getParentNode()), K = O4(u, t);
          return Qr(e, t, n, { processor: function(ve, Le) {
            var Te = function() {
              var Oe = u.ordered ? (Le === 0 ? u.start : K ? 1 : u.start + Le) + ($ % 2 == 0 ? ". " : ") ") : $ % 2 == 0 ? "- " : "* ";
              return u.isAligned || u.hasIndentedCodeblock ? function(We, Re) {
                var Ke = Fe();
                return We + " ".repeat(Ke >= 4 ? 0 : Ke);
                function Fe() {
                  var be = We.length % Re.tabWidth;
                  return be === 0 ? 0 : Re.tabWidth - be;
                }
              }(Oe, t) : Oe;
            }(), Ne = ve.getValue();
            return Ne.children.length === 2 && Ne.children[1].type === "html" && Ne.children[0].position.start.column !== Ne.children[1].position.start.column ? [Te, jC(ve, t, n, Te)] : [Te, ao(" ".repeat(Te.length), jC(ve, t, n, Te))];
          } });
        }
        case "thematicBreak": {
          var ne = qC(e, "list");
          return ne === -1 ? "---" : $C(e.getParentNode(ne), e.getParentNode(ne + 1)) % 2 == 0 ? "***" : "---";
        }
        case "linkReference":
          return ["[", Qr(e, t, n), "]", u.referenceType === "full" ? ["[", u.identifier, "]"] : u.referenceType === "collapsed" ? "[]" : ""];
        case "imageReference":
          switch (u.referenceType) {
            case "full":
              return ["![", u.alt || "", "][", u.identifier, "]"];
            default:
              return ["![", u.alt, "]", u.referenceType === "collapsed" ? "[]" : ""];
          }
        case "definition": {
          var ue = t.proseWrap === "always" ? NC : " ";
          return Bp(["[", u.identifier, "]:", x4([ue, jh(u.url), u.title === null ? "" : [ue, kp(u.title, t, !1)]])]);
        }
        case "footnote":
          return ["[^", Qr(e, t, n), "]"];
        case "footnoteReference":
          return ["[^", u.identifier, "]"];
        case "footnoteDefinition": {
          var Ce = e.getParentNode().children[e.getName() + 1], oe = u.children.length === 1 && u.children[0].type === "paragraph" && (t.proseWrap === "never" || t.proseWrap === "preserve" && u.children[0].position.start.line === u.children[0].position.end.line);
          return ["[^", u.identifier, "]: ", oe ? Qr(e, t, n) : Bp([ao(" ".repeat(4), Qr(e, t, n, { processor: function(ve, Le) {
            return Le === 0 ? Bp([Lh, n()]) : n();
          } })), Ce && Ce.type === "footnoteDefinition" ? Lh : ""])];
        }
        case "table":
          return function(ae, ve, Le) {
            var Te = ae.getValue(), Ne = [], Oe = ae.map(function(Qe) {
              return Qe.map(function(we, Pe) {
                var He = B4(Le(), ve).formatted, er = b4(He);
                return Ne[Pe] = Math.max(Ne[Pe] || 3, er), { text: He, width: er };
              }, "children");
            }, "children"), We = Ke(!1);
            if (ve.proseWrap !== "never")
              return [BC, We];
            var Re = Ke(!0);
            return [BC, Bp(S4(Re, We))];
            function Ke(Qe) {
              var we = [be(Oe[0], Qe), Fe(Qe)];
              return Oe.length > 1 && we.push(kC(OC, Oe.slice(1).map(function(Pe) {
                return be(Pe, Qe);
              }))), kC(OC, we);
            }
            function Fe(Qe) {
              var we = Ne.map(function(Pe, He) {
                var er = Te.align[He], Cr = er === "center" || er === "left" ? ":" : "-", Wt = er === "center" || er === "right" ? ":" : "-", Zr = Qe ? "-" : "-".repeat(Pe - 2);
                return "".concat(Cr).concat(Zr).concat(Wt);
              });
              return "| ".concat(we.join(" | "), " |");
            }
            function be(Qe, we) {
              var Pe = Qe.map(function(He, er) {
                var Cr = He.text, Wt = He.width;
                if (we)
                  return Cr;
                var Zr = Ne[er] - Wt, wn = Te.align[er], cn = 0;
                wn === "right" ? cn = Zr : wn === "center" && (cn = Math.floor(Zr / 2));
                var Ru = Zr - cn;
                return "".concat(" ".repeat(cn)).concat(Cr).concat(" ".repeat(Ru));
              });
              return "| ".concat(Pe.join(" | "), " |");
            }
          }(e, t, n);
        case "tableCell":
          return Qr(e, t, n);
        case "break":
          return /\s/.test(t.originalText[u.position.start.offset]) ? ["  ", IC(PC)] : ["\\", Kr];
        case "liquidNode":
          return Zs(u.value, Kr);
        case "importExport":
          return [u.value, Kr];
        case "jsx":
          return u.value;
        case "math":
          return ["$$", Kr, u.value ? [].concat(_(Zs(u.value, Kr)), [Kr]) : "", "$$"];
        case "inlineMath":
          return t.originalText.slice(N4(u), P4(u));
        case "tableRow":
        case "listItem":
        default:
          throw new Error("Unknown markdown type ".concat(JSON.stringify(u.type)));
      }
    }, embed: d4, massageAstNode: E4, hasPrettierIgnore: function(e) {
      var t = Number(e.getName());
      return t !== 0 && Mh(e.getParentNode().children[t - 1]) === "next";
    }, insertPragma: k4 }, W4 = { proseWrap: Yn.proseWrap, singleQuote: Yn.singleQuote }, WC = { name: "Markdown", type: "prose", color: "#083fa1", aliases: ["pandoc"], aceMode: "markdown", codemirrorMode: "gfm", codemirrorMimeType: "text/x-gfm", wrap: !0, extensions: [".md", ".markdown", ".mdown", ".mdwn", ".mdx", ".mkd", ".mkdn", ".mkdown", ".ronn", ".scd", ".workbook"], filenames: ["contents.lr"], tmScope: "source.gfm", languageId: 222 }, G4 = { languages: [lr(WC, function(r) {
      return { since: "1.8.0", parsers: ["markdown"], vscodeLanguageIds: ["markdown"], filenames: [].concat(_(r.filenames), ["README"]), extensions: r.extensions.filter(function(e) {
        return e !== ".mdx";
      }) };
    }), lr(WC, function() {
      return { name: "MDX", since: "1.15.0", parsers: ["mdx"], vscodeLanguageIds: ["mdx"], filenames: [], extensions: [".mdx"] };
    })], options: W4, printers: { mdast: U4 }, parsers: { get remark() {
      return {}.parsers.remark;
    }, get markdown() {
      return {}.parsers.remark;
    }, get mdx() {
      return {}.parsers.mdx;
    } } }, H4 = X.isFrontMatterNode, z4 = /* @__PURE__ */ new Set(["sourceSpan", "startSourceSpan", "endSourceSpan", "nameSpan", "valueSpan"]);
    function GC(r, e) {
      return r.type === "text" || r.type === "comment" || H4(r) || r.type === "yaml" || r.type === "toml" ? null : (r.type === "attribute" && delete e.value, void (r.type === "docType" && delete e.value));
    }
    GC.ignoredProperties = z4;
    var X4 = GC, J4 = { "*": ["accesskey", "autocapitalize", "autofocus", "class", "contenteditable", "dir", "draggable", "enterkeyhint", "hidden", "id", "inputmode", "is", "itemid", "itemprop", "itemref", "itemscope", "itemtype", "lang", "nonce", "slot", "spellcheck", "style", "tabindex", "title", "translate"], a: ["accesskey", "charset", "coords", "download", "href", "hreflang", "name", "ping", "referrerpolicy", "rel", "rev", "shape", "tabindex", "target", "type"], abbr: ["title"], applet: ["align", "alt", "archive", "code", "codebase", "height", "hspace", "name", "object", "vspace", "width"], area: ["accesskey", "alt", "coords", "download", "href", "hreflang", "nohref", "ping", "referrerpolicy", "rel", "shape", "tabindex", "target", "type"], audio: ["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"], base: ["href", "target"], basefont: ["color", "face", "size"], bdo: ["dir"], blockquote: ["cite"], body: ["alink", "background", "bgcolor", "link", "text", "vlink"], br: ["clear"], button: ["accesskey", "autofocus", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "name", "tabindex", "type", "value"], canvas: ["height", "width"], caption: ["align"], col: ["align", "char", "charoff", "span", "valign", "width"], colgroup: ["align", "char", "charoff", "span", "valign", "width"], data: ["value"], del: ["cite", "datetime"], details: ["open"], dfn: ["title"], dialog: ["open"], dir: ["compact"], div: ["align"], dl: ["compact"], embed: ["height", "src", "type", "width"], fieldset: ["disabled", "form", "name"], font: ["color", "face", "size"], form: ["accept", "accept-charset", "action", "autocomplete", "enctype", "method", "name", "novalidate", "target"], frame: ["frameborder", "longdesc", "marginheight", "marginwidth", "name", "noresize", "scrolling", "src"], frameset: ["cols", "rows"], h1: ["align"], h2: ["align"], h3: ["align"], h4: ["align"], h5: ["align"], h6: ["align"], head: ["profile"], hr: ["align", "noshade", "size", "width"], html: ["manifest", "version"], iframe: ["align", "allow", "allowfullscreen", "allowpaymentrequest", "allowusermedia", "frameborder", "height", "loading", "longdesc", "marginheight", "marginwidth", "name", "referrerpolicy", "sandbox", "scrolling", "src", "srcdoc", "width"], img: ["align", "alt", "border", "crossorigin", "decoding", "height", "hspace", "ismap", "loading", "longdesc", "name", "referrerpolicy", "sizes", "src", "srcset", "usemap", "vspace", "width"], input: ["accept", "accesskey", "align", "alt", "autocomplete", "autofocus", "checked", "dirname", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "height", "ismap", "list", "max", "maxlength", "min", "minlength", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "src", "step", "tabindex", "title", "type", "usemap", "value", "width"], ins: ["cite", "datetime"], isindex: ["prompt"], label: ["accesskey", "for", "form"], legend: ["accesskey", "align"], li: ["type", "value"], link: ["as", "charset", "color", "crossorigin", "disabled", "href", "hreflang", "imagesizes", "imagesrcset", "integrity", "media", "nonce", "referrerpolicy", "rel", "rev", "sizes", "target", "title", "type"], map: ["name"], menu: ["compact"], meta: ["charset", "content", "http-equiv", "name", "scheme"], meter: ["high", "low", "max", "min", "optimum", "value"], object: ["align", "archive", "border", "classid", "codebase", "codetype", "data", "declare", "form", "height", "hspace", "name", "standby", "tabindex", "type", "typemustmatch", "usemap", "vspace", "width"], ol: ["compact", "reversed", "start", "type"], optgroup: ["disabled", "label"], option: ["disabled", "label", "selected", "value"], output: ["for", "form", "name"], p: ["align"], param: ["name", "type", "value", "valuetype"], pre: ["width"], progress: ["max", "value"], q: ["cite"], script: ["async", "charset", "crossorigin", "defer", "integrity", "language", "nomodule", "nonce", "referrerpolicy", "src", "type"], select: ["autocomplete", "autofocus", "disabled", "form", "multiple", "name", "required", "size", "tabindex"], slot: ["name"], source: ["media", "sizes", "src", "srcset", "type"], style: ["media", "nonce", "title", "type"], table: ["align", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "rules", "summary", "width"], tbody: ["align", "char", "charoff", "valign"], td: ["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"], textarea: ["accesskey", "autocomplete", "autofocus", "cols", "dirname", "disabled", "form", "maxlength", "minlength", "name", "placeholder", "readonly", "required", "rows", "tabindex", "wrap"], tfoot: ["align", "char", "charoff", "valign"], th: ["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"], thead: ["align", "char", "charoff", "valign"], time: ["datetime"], tr: ["align", "bgcolor", "char", "charoff", "valign"], track: ["default", "kind", "label", "src", "srclang"], ul: ["compact", "type"], video: ["autoplay", "controls", "crossorigin", "height", "loop", "muted", "playsinline", "poster", "preload", "src", "width"] }, Y4 = X.inferParserByLanguage, $h = X.isFrontMatterNode, Np = { CSS_DISPLAY_TAGS: { area: "none", base: "none", basefont: "none", datalist: "none", head: "none", link: "none", meta: "none", noembed: "none", noframes: "none", param: "block", rp: "none", script: "block", source: "block", style: "none", template: "inline", track: "block", title: "none", html: "block", body: "block", address: "block", blockquote: "block", center: "block", div: "block", figure: "block", figcaption: "block", footer: "block", form: "block", header: "block", hr: "block", legend: "block", listing: "block", main: "block", p: "block", plaintext: "block", pre: "block", xmp: "block", slot: "contents", ruby: "ruby", rt: "ruby-text", article: "block", aside: "block", h1: "block", h2: "block", h3: "block", h4: "block", h5: "block", h6: "block", hgroup: "block", nav: "block", section: "block", dir: "block", dd: "block", dl: "block", dt: "block", ol: "block", ul: "block", li: "list-item", table: "table", caption: "table-caption", colgroup: "table-column-group", col: "table-column", thead: "table-header-group", tbody: "table-row-group", tfoot: "table-footer-group", tr: "table-row", td: "table-cell", th: "table-cell", fieldset: "block", button: "inline-block", details: "block", summary: "block", dialog: "block", meter: "inline-block", progress: "inline-block", object: "inline-block", video: "inline-block", audio: "inline-block", select: "inline-block", option: "block", optgroup: "block" }, CSS_DISPLAY_DEFAULT: "inline", CSS_WHITE_SPACE_TAGS: { listing: "pre", plaintext: "pre", pre: "pre", xmp: "pre", nobr: "nowrap", table: "initial", textarea: "pre-wrap" }, CSS_WHITE_SPACE_DEFAULT: "normal" }, K4 = Np.CSS_DISPLAY_TAGS, Q4 = Np.CSS_DISPLAY_DEFAULT, Z4 = Np.CSS_WHITE_SPACE_TAGS, _4 = Np.CSS_WHITE_SPACE_DEFAULT, eI = zC(["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "bgsound", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "command", "content", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "image", "img", "input", "ins", "isindex", "kbd", "keygen", "label", "legend", "li", "link", "listing", "main", "map", "mark", "marquee", "math", "menu", "menuitem", "meta", "meter", "multicol", "nav", "nextid", "nobr", "noembed", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "plaintext", "pre", "progress", "q", "rb", "rbc", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xmp"]), rI = function(r, e) {
      for (var t = /* @__PURE__ */ Object.create(null), n = 0, u = Object.entries(r); n < u.length; n++) {
        var a = ke(u[n], 2), i = a[0], o = a[1];
        t[i] = e(o, i);
      }
      return t;
    }(J4, zC), tI = /* @__PURE__ */ new Set(["	", `
`, "\f", "\r", " "]), HC = function(e) {
      return e.replace(/[\t\n\f\r ]+$/, "");
    }, nI = function(e) {
      return e.match(/^[\t\n\f\r ]*/)[0];
    };
    function zC(r) {
      var e = /* @__PURE__ */ Object.create(null), t = le(r), n;
      try {
        for (t.s(); !(n = t.n()).done; ) {
          var u = n.value;
          e[u] = !0;
        }
      } catch (a) {
        t.e(a);
      } finally {
        t.f();
      }
      return e;
    }
    function XC(r, e) {
      return !(r.type !== "ieConditionalComment" || !r.lastChild || r.lastChild.isSelfClosing || r.lastChild.endSourceSpan) || r.type === "ieConditionalComment" && !r.complete || !(!io(r) || !r.children.some(function(t) {
        return t.type !== "text" && t.type !== "interpolation";
      })) || !(!Uh(r, e) || Oa(r) || r.type === "interpolation");
    }
    function JC(r) {
      return r.type === "attribute" || !r.parent || typeof r.index != "number" || r.index === 0 ? !1 : function(e) {
        return e.type === "comment" && e.value.trim() === "prettier-ignore";
      }(r.parent.children[r.index - 1]);
    }
    function Oa(r) {
      return r.type === "element" && (r.fullName === "script" || r.fullName === "style" || r.fullName === "svg:style" || Pp(r) && (r.name === "script" || r.name === "style"));
    }
    function YC(r) {
      return qh(r).startsWith("pre");
    }
    function KC(r) {
      return r.type === "element" && r.children.length > 0 && (["html", "head", "ul", "ol", "select"].includes(r.name) || r.cssDisplay.startsWith("table") && r.cssDisplay !== "table-cell");
    }
    function QC(r) {
      return rA(r) || r.type === "element" && r.fullName === "br" || ZC(r);
    }
    function ZC(r) {
      return _C(r) && eA(r);
    }
    function _C(r) {
      return r.hasLeadingSpaces && (r.prev ? r.prev.sourceSpan.end.line < r.sourceSpan.start.line : r.parent.type === "root" || r.parent.startSourceSpan.end.line < r.sourceSpan.start.line);
    }
    function eA(r) {
      return r.hasTrailingSpaces && (r.next ? r.next.sourceSpan.start.line > r.sourceSpan.end.line : r.parent.type === "root" || r.parent.endSourceSpan && r.parent.endSourceSpan.start.line > r.sourceSpan.end.line);
    }
    function rA(r) {
      switch (r.type) {
        case "ieConditionalComment":
        case "comment":
        case "directive":
          return !0;
        case "element":
          return ["script", "select"].includes(r.name);
      }
      return !1;
    }
    function tA(r) {
      var e = r.attrMap, t = e.type, n = e.lang;
      return t === "module" || t === "text/javascript" || t === "text/babel" || t === "application/javascript" || n === "jsx" ? "babel" : t === "application/x-typescript" || n === "ts" || n === "tsx" ? "typescript" : t === "text/markdown" ? "markdown" : t === "text/html" ? "html" : t && (t.endsWith("json") || t.endsWith("importmap")) ? "json" : t === "text/x-handlebars-template" ? "glimmer" : void 0;
    }
    function _s(r) {
      return r === "block" || r === "list-item" || r.startsWith("table");
    }
    function io(r) {
      return qh(r).startsWith("pre");
    }
    function Pp(r) {
      return r.type === "element" && !r.hasExplicitNamespace && !["html", "svg"].includes(r.namespace);
    }
    function qh(r) {
      return r.type === "element" && (!r.namespace || Pp(r)) && Z4[r.name] || _4;
    }
    var uI = /* @__PURE__ */ new Set(["template", "style", "script"]);
    function Ip(r, e) {
      return Vh(r, e) && !uI.has(r.fullName);
    }
    function Vh(r, e) {
      return e.parser === "vue" && r.type === "element" && r.parent.type === "root" && r.fullName.toLowerCase() !== "html";
    }
    function Uh(r, e) {
      return Vh(r, e) && (Ip(r, e) || r.attrMap.lang && r.attrMap.lang !== "html");
    }
    var Je = { HTML_ELEMENT_ATTRIBUTES: rI, HTML_TAGS: eI, htmlTrim: function(e) {
      return function(t) {
        return t.replace(/^[\t\n\f\r ]+/, "");
      }(HC(e));
    }, htmlTrimPreserveIndentation: function(e) {
      return function(t) {
        return t.replace(/^[\t\f\r ]*?\n/g, "");
      }(HC(e));
    }, splitByHtmlWhitespace: function(e) {
      return e.split(/[\t\n\f\r ]+/);
    }, hasHtmlWhitespace: function(e) {
      return /[\t\n\f\r ]/.test(e);
    }, getLeadingAndTrailingHtmlWhitespace: function(e) {
      var t = e.match(/^([\t\n\f\r ]*)([\S\s]*?)([\t\n\f\r ]*)$/), n = ke(t, 4), u = n[1], a = n[2], i = n[3];
      return { leadingWhitespace: u, trailingWhitespace: i, text: a };
    }, canHaveInterpolation: function(e) {
      return e.children && !Oa(e);
    }, countChars: function(e, t) {
      for (var n = 0, u = 0; u < e.length; u++)
        e[u] === t && n++;
      return n;
    }, countParents: function(e, t) {
      for (var n = 0, u = e.stack.length - 1; u >= 0; u--) {
        var a = e.stack[u];
        a && Se(a) == "object" && !Array.isArray(a) && t(a) && n++;
      }
      return n;
    }, dedentString: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function(n) {
        var u = Number.POSITIVE_INFINITY, a = le(n.split(`
`)), i;
        try {
          for (a.s(); !(i = a.n()).done; ) {
            var o = i.value;
            if (o.length !== 0) {
              if (!tI.has(o[0]))
                return 0;
              var s = nI(o).length;
              o.length !== s && s < u && (u = s);
            }
          }
        } catch (c) {
          a.e(c);
        } finally {
          a.f();
        }
        return u === Number.POSITIVE_INFINITY ? 0 : u;
      }(e);
      return t === 0 ? e : e.split(`
`).map(function(n) {
        return n.slice(t);
      }).join(`
`);
    }, forceBreakChildren: KC, forceBreakContent: function(e) {
      return KC(e) || e.type === "element" && e.children.length > 0 && (["body", "script", "style"].includes(e.name) || e.children.some(function(t) {
        return function(n) {
          return n.children && n.children.some(function(u) {
            return u.type !== "text";
          });
        }(t);
      })) || e.firstChild && e.firstChild === e.lastChild && e.firstChild.type !== "text" && _C(e.firstChild) && (!e.lastChild.isTrailingSpaceSensitive || eA(e.lastChild));
    }, forceNextEmptyLine: function(e) {
      return $h(e) || e.next && e.sourceSpan.end && e.sourceSpan.end.line + 1 < e.next.sourceSpan.start.line;
    }, getLastDescendant: function r(e) {
      return e.lastChild ? r(e.lastChild) : e;
    }, getNodeCssStyleDisplay: function(e, t) {
      if (e.prev && e.prev.type === "comment") {
        var n = e.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/);
        if (n)
          return n[1];
      }
      var u = !1;
      if (e.type === "element" && e.namespace === "svg") {
        if (!function(a, i) {
          for (var o = a; o; ) {
            if (i(o))
              return !0;
            o = o.parent;
          }
          return !1;
        }(e, function(a) {
          return a.fullName === "svg:foreignObject";
        }))
          return e.name === "svg" ? "inline-block" : "block";
        u = !0;
      }
      switch (t.htmlWhitespaceSensitivity) {
        case "strict":
          return "inline";
        case "ignore":
          return "block";
        default:
          return t.parser === "vue" && e.parent && e.parent.type === "root" ? "block" : e.type === "element" && (!e.namespace || u || Pp(e)) && K4[e.name] || Q4;
      }
    }, getNodeCssStyleWhiteSpace: qh, getPrettierIgnoreAttributeCommentData: function(e) {
      var t = e.trim().match(/^prettier-ignore-attribute(?:\s+([^]+))?$/);
      return !!t && (!t[1] || t[1].split(/\s+/));
    }, hasPrettierIgnore: JC, inferScriptParser: function(e, t) {
      return e.name !== "script" || e.attrMap.src ? e.name === "style" ? function(n) {
        var u = n.attrMap.lang;
        return u && u !== "postcss" && u !== "css" ? u === "scss" ? "scss" : u === "less" ? "less" : void 0 : "css";
      }(e) : t && Uh(e, t) ? tA(e) || !("src" in e.attrMap) && Y4(e.attrMap.lang, t) : void 0 : e.attrMap.lang || e.attrMap.type ? tA(e) : "babel";
    }, isVueCustomBlock: Ip, isVueNonHtmlBlock: Uh, isVueSlotAttribute: function(e) {
      var t = e.fullName;
      return t.charAt(0) === "#" || t === "slot-scope" || t === "v-slot" || t.startsWith("v-slot:");
    }, isVueSfcBindingsAttribute: function(e, t) {
      var n = e.parent;
      if (!Vh(n, t))
        return !1;
      var u = n.fullName, a = e.fullName;
      return u === "script" && a === "setup" || u === "style" && a === "vars";
    }, isDanglingSpaceSensitiveNode: function(e) {
      return t = e.cssDisplay, !(_s(t) || t === "inline-block" || Oa(e));
      var t;
    }, isIndentationSensitiveNode: YC, isLeadingSpaceSensitiveNode: function(e, t) {
      var n = function() {
        if ($h(e))
          return !1;
        if ((e.type === "text" || e.type === "interpolation") && e.prev && (e.prev.type === "text" || e.prev.type === "interpolation"))
          return !0;
        if (!e.parent || e.parent.cssDisplay === "none")
          return !1;
        if (io(e.parent))
          return !0;
        if (!e.prev && (e.parent.type === "root" || io(e) && e.parent || Oa(e.parent) || Ip(e.parent, t) || (u = e.parent.cssDisplay, _s(u) || u === "inline-block")))
          return !1;
        var u;
        return !(e.prev && !function(a) {
          return !_s(a);
        }(e.prev.cssDisplay));
      }();
      return n && !e.prev && e.parent && e.parent.tagDefinition && e.parent.tagDefinition.ignoreFirstLf ? e.type === "interpolation" : n;
    }, isPreLikeNode: io, isScriptLikeTag: Oa, isTextLikeNode: function(e) {
      return e.type === "text" || e.type === "comment";
    }, isTrailingSpaceSensitiveNode: function(e, t) {
      return !$h(e) && (!(e.type !== "text" && e.type !== "interpolation" || !e.next || e.next.type !== "text" && e.next.type !== "interpolation") || !(!e.parent || e.parent.cssDisplay === "none") && (!!io(e.parent) || !(!e.next && (e.parent.type === "root" || io(e) && e.parent || Oa(e.parent) || Ip(e.parent, t) || (n = e.parent.cssDisplay, _s(n) || n === "inline-block"))) && !(e.next && !function(u) {
        return !_s(u);
      }(e.next.cssDisplay))));
      var n;
    }, isWhitespaceSensitiveNode: function(e) {
      return Oa(e) || e.type === "interpolation" || YC(e);
    }, isUnknownNamespace: Pp, preferHardlineAsLeadingSpaces: function(e) {
      return rA(e) || e.prev && QC(e.prev) || ZC(e);
    }, preferHardlineAsTrailingSpaces: QC, shouldNotPrintClosingTag: function(e, t) {
      return !e.isSelfClosing && !e.endSourceSpan && (JC(e) || XC(e.parent, t));
    }, shouldPreserveContent: XC, unescapeQuoteEntities: function(e) {
      return e.replace(/&apos;/g, "'").replace(/&quot;/g, '"');
    } }, Wh = De(function(r, e) {
      function t(n) {
        return e.$0 <= n && n <= e.$9;
      }
      /**
      * @license
      * Copyright Google Inc. All Rights Reserved.
      *
      * Use of this source code is governed by an MIT-style license that can be
      * found in the LICENSE file at https://angular.io/license
      */
      Object.defineProperty(e, "__esModule", { value: !0 }), e.$EOF = 0, e.$BSPACE = 8, e.$TAB = 9, e.$LF = 10, e.$VTAB = 11, e.$FF = 12, e.$CR = 13, e.$SPACE = 32, e.$BANG = 33, e.$DQ = 34, e.$HASH = 35, e.$$ = 36, e.$PERCENT = 37, e.$AMPERSAND = 38, e.$SQ = 39, e.$LPAREN = 40, e.$RPAREN = 41, e.$STAR = 42, e.$PLUS = 43, e.$COMMA = 44, e.$MINUS = 45, e.$PERIOD = 46, e.$SLASH = 47, e.$COLON = 58, e.$SEMICOLON = 59, e.$LT = 60, e.$EQ = 61, e.$GT = 62, e.$QUESTION = 63, e.$0 = 48, e.$7 = 55, e.$9 = 57, e.$A = 65, e.$E = 69, e.$F = 70, e.$X = 88, e.$Z = 90, e.$LBRACKET = 91, e.$BACKSLASH = 92, e.$RBRACKET = 93, e.$CARET = 94, e.$_ = 95, e.$a = 97, e.$b = 98, e.$e = 101, e.$f = 102, e.$n = 110, e.$r = 114, e.$t = 116, e.$u = 117, e.$v = 118, e.$x = 120, e.$z = 122, e.$LBRACE = 123, e.$BAR = 124, e.$RBRACE = 125, e.$NBSP = 160, e.$PIPE = 124, e.$TILDA = 126, e.$AT = 64, e.$BT = 96, e.isWhitespace = function(n) {
        return n >= e.$TAB && n <= e.$SPACE || n == e.$NBSP;
      }, e.isDigit = t, e.isAsciiLetter = function(n) {
        return n >= e.$a && n <= e.$z || n >= e.$A && n <= e.$Z;
      }, e.isAsciiHexDigit = function(n) {
        return n >= e.$a && n <= e.$f || n >= e.$A && n <= e.$F || t(n);
      }, e.isNewLine = function(n) {
        return n === e.$LF || n === e.$CR;
      }, e.isOctalDigit = function(n) {
        return e.$0 <= n && n <= e.$7;
      };
    });
    /**
    * @license
    * Copyright Google Inc. All Rights Reserved.
    *
    * Use of this source code is governed by an MIT-style license that can be
    * found in the LICENSE file at https://angular.io/license
    */
    var nA = /* @__PURE__ */ function() {
      function r(e, t, n) {
        se(this, r), this.filePath = e, this.name = t, this.members = n;
      }
      return ce(r, [{ key: "assertNoMembers", value: function() {
        if (this.members.length)
          throw new Error("Illegal state: symbol without members expected, but got ".concat(JSON.stringify(this), "."));
      } }]), r;
    }(), aI = nA, iI = /* @__PURE__ */ function() {
      function r() {
        se(this, r), this.cache = /* @__PURE__ */ new Map();
      }
      return ce(r, [{ key: "get", value: function(t, n, u) {
        var a = (u = u || []).length ? ".".concat(u.join(".")) : "", i = '"'.concat(t, '".').concat(n).concat(a), o = this.cache.get(i);
        return o || (o = new nA(t, n, u), this.cache.set(i, o)), o;
      } }]), r;
    }(), Op = Object.defineProperty({ StaticSymbol: aI, StaticSymbolCache: iI }, "__esModule", { value: !0 });
    /**
    * @license
    * Copyright Google Inc. All Rights Reserved.
    *
    * Use of this source code is governed by an MIT-style license that can be
    * found in the LICENSE file at https://angular.io/license
    */
    var oI = /-+([a-z0-9])/g, sI = function(e) {
      return e.replace(oI, function() {
        for (var t = arguments.length, n = new Array(t), u = 0; u < t; u++)
          n[u] = arguments[u];
        return n[1].toUpperCase();
      });
    }, cI = function(e, t) {
      return uA(e, ":", t);
    }, lI = function(e, t) {
      return uA(e, ".", t);
    };
    function uA(r, e, t) {
      var n = r.indexOf(e);
      return n == -1 ? t : [r.slice(0, n).trim(), r.slice(n + 1).trim()];
    }
    function Gh(r, e, t) {
      return Array.isArray(r) ? e.visitArray(r, t) : function(n) {
        return Se(n) == "object" && n !== null && Object.getPrototypeOf(n) === CI;
      }(r) ? e.visitStringMap(r, t) : r == null || typeof r == "string" || typeof r == "number" || typeof r == "boolean" ? e.visitPrimitive(r, t) : e.visitOther(r, t);
    }
    var pI = Gh, fI = function(e) {
      return e != null;
    }, dI = function(e) {
      return e === void 0 ? null : e;
    }, hI = /* @__PURE__ */ function() {
      function r() {
        se(this, r);
      }
      return ce(r, [{ key: "visitArray", value: function(t, n) {
        var u = this;
        return t.map(function(a) {
          return Gh(a, u, n);
        });
      } }, { key: "visitStringMap", value: function(t, n) {
        var u = this, a = {};
        return Object.keys(t).forEach(function(i) {
          a[i] = Gh(t[i], u, n);
        }), a;
      } }, { key: "visitPrimitive", value: function(t, n) {
        return t;
      } }, { key: "visitOther", value: function(t, n) {
        return t;
      } }]), r;
    }(), DI = { assertSync: function(e) {
      if (Lp(e))
        throw new Error("Illegal state: value cannot be a promise");
      return e;
    }, then: function(e, t) {
      return Lp(e) ? e.then(t) : t(e);
    }, all: function(e) {
      return e.some(Lp) ? Promise.all(e) : e;
    } }, gI = function(e) {
      throw new Error("Internal Error: ".concat(e));
    }, mI = function(e, t) {
      var n = Error(e);
      return n[aA] = !0, t && (n[iA] = t), n;
    }, aA = "ngSyntaxError", iA = "ngParseErrors", vI = function(e) {
      return e[aA];
    }, yI = function(e) {
      return e[iA] || [];
    }, EI = function(e) {
      return e.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
    }, CI = Object.getPrototypeOf({}), AI = function(e) {
      for (var t = "", n = 0; n < e.length; n++) {
        var u = e.charCodeAt(n);
        if (u >= 55296 && u <= 56319 && e.length > n + 1) {
          var a = e.charCodeAt(n + 1);
          a >= 56320 && a <= 57343 && (n++, u = (u - 55296 << 10) + a - 56320 + 65536);
        }
        u <= 127 ? t += String.fromCharCode(u) : u <= 2047 ? t += String.fromCharCode(u >> 6 & 31 | 192, 63 & u | 128) : u <= 65535 ? t += String.fromCharCode(u >> 12 | 224, u >> 6 & 63 | 128, 63 & u | 128) : u <= 2097151 && (t += String.fromCharCode(u >> 18 & 7 | 240, u >> 12 & 63 | 128, u >> 6 & 63 | 128, 63 & u | 128));
      }
      return t;
    }, bI = function r(e) {
      if (typeof e == "string")
        return e;
      if (e instanceof Array)
        return "[" + e.map(r).join(", ") + "]";
      if (e == null)
        return "" + e;
      if (e.overriddenName)
        return "".concat(e.overriddenName);
      if (e.name)
        return "".concat(e.name);
      if (!e.toString)
        return "object";
      var t = e.toString();
      if (t == null)
        return "" + t;
      var n = t.indexOf(`
`);
      return n === -1 ? t : t.substring(0, n);
    }, FI = function(e) {
      return typeof e == "function" && e.hasOwnProperty("__forward_ref__") ? e() : e;
    };
    function Lp(r) {
      return !!r && typeof r.then == "function";
    }
    var SI = Lp, TI = /* @__PURE__ */ ce(function r(e) {
      se(this, r), this.full = e;
      var t = e.split(".");
      this.major = t[0], this.minor = t[1], this.patch = t.slice(2).join(".");
    }), xI = typeof window < "u" && window, wI = typeof self < "u" && typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && self, BI = ye !== void 0 && ye || xI || wI, Rp = Object.defineProperty({ dashCaseToCamelCase: sI, splitAtColon: cI, splitAtPeriod: lI, visitValue: pI, isDefined: fI, noUndefined: dI, ValueTransformer: hI, SyncAsync: DI, error: gI, syntaxError: mI, isSyntaxError: vI, getParseErrors: yI, escapeRegExp: EI, utf8Encode: AI, stringify: bI, resolveForwardRef: FI, isPromise: SI, Version: TI, global: BI }, "__esModule", { value: !0 }), Hh = De(function(r, e) {
      /**
      * @license
      * Copyright Google Inc. All Rights Reserved.
      *
      * Use of this source code is governed by an MIT-style license that can be
      * found in the LICENSE file at https://angular.io/license
      */
      Object.defineProperty(e, "__esModule", { value: !0 });
      var t = /^(?:(?:\[([^\]]+)\])|(?:\(([^\)]+)\)))|(\@[-\w]+)$/;
      function n(p) {
        return p.replace(/\W/g, "_");
      }
      e.sanitizeIdentifier = n;
      var u = 0;
      function a(p) {
        if (!p || !p.reference)
          return null;
        var f = p.reference;
        if (f instanceof Op.StaticSymbol)
          return f.name;
        if (f.__anonymousType)
          return f.__anonymousType;
        var d = Rp.stringify(f);
        return d.indexOf("(") >= 0 ? (d = "anonymous_".concat(u++), f.__anonymousType = d) : d = n(d), d;
      }
      var i;
      e.identifierName = a, e.identifierModuleUrl = function(p) {
        var f = p.reference;
        return f instanceof Op.StaticSymbol ? f.filePath : "./".concat(Rp.stringify(f));
      }, e.viewClassName = function(p, f) {
        return "View_".concat(a({ reference: p }), "_").concat(f);
      }, e.rendererTypeName = function(p) {
        return "RenderType_".concat(a({ reference: p }));
      }, e.hostViewClassName = function(p) {
        return "HostView_".concat(a({ reference: p }));
      }, e.componentFactoryName = function(p) {
        return "".concat(a({ reference: p }), "NgFactory");
      }, function(p) {
        p[p.Pipe = 0] = "Pipe", p[p.Directive = 1] = "Directive", p[p.NgModule = 2] = "NgModule", p[p.Injectable = 3] = "Injectable";
      }(i = e.CompileSummaryKind || (e.CompileSummaryKind = {})), e.tokenName = function(p) {
        return p.value != null ? n(p.value) : a(p.identifier);
      }, e.tokenReference = function(p) {
        return p.identifier != null ? p.identifier.reference : p.value;
      }, e.CompileStylesheetMetadata = /* @__PURE__ */ function() {
        function p() {
          var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, d = f.moduleUrl, D = f.styles, v = f.styleUrls;
          se(this, p), this.moduleUrl = d || null, this.styles = s(D), this.styleUrls = s(v);
        }
        return ce(p);
      }(), e.CompileTemplateMetadata = /* @__PURE__ */ function() {
        function p(f) {
          var d = f.encapsulation, D = f.template, v = f.templateUrl, y = f.htmlAst, b = f.styles, S = f.styleUrls, F = f.externalStylesheets, x = f.animations, w = f.ngContentSelectors, A = f.interpolation, k = f.isInline, O = f.preserveWhitespaces;
          if (se(this, p), this.encapsulation = d, this.template = D, this.templateUrl = v, this.htmlAst = y, this.styles = s(b), this.styleUrls = s(S), this.externalStylesheets = s(F), this.animations = x ? c(x) : [], this.ngContentSelectors = w || [], A && A.length != 2)
            throw new Error("'interpolation' should have a start and an end symbol.");
          this.interpolation = A, this.isInline = k, this.preserveWhitespaces = O;
        }
        return ce(p, [{ key: "toSummary", value: function() {
          return { ngContentSelectors: this.ngContentSelectors, encapsulation: this.encapsulation, styles: this.styles, animations: this.animations };
        } }]), p;
      }();
      var o = /* @__PURE__ */ function() {
        function p(f) {
          var d = f.isHost, D = f.type, v = f.isComponent, y = f.selector, b = f.exportAs, S = f.changeDetection, F = f.inputs, x = f.outputs, w = f.hostListeners, A = f.hostProperties, k = f.hostAttributes, O = f.providers, q = f.viewProviders, H = f.queries, R = f.guards, $ = f.viewQueries, K = f.entryComponents, ne = f.template, ue = f.componentViewType, Ce = f.rendererType, oe = f.componentFactory;
          se(this, p), this.isHost = !!d, this.type = D, this.isComponent = v, this.selector = y, this.exportAs = b, this.changeDetection = S, this.inputs = F, this.outputs = x, this.hostListeners = w, this.hostProperties = A, this.hostAttributes = k, this.providers = s(O), this.viewProviders = s(q), this.queries = s(H), this.guards = R, this.viewQueries = s($), this.entryComponents = s(K), this.template = ne, this.componentViewType = ue, this.rendererType = Ce, this.componentFactory = oe;
        }
        return ce(p, [{ key: "toSummary", value: function() {
          return { summaryKind: i.Directive, type: this.type, isComponent: this.isComponent, selector: this.selector, exportAs: this.exportAs, inputs: this.inputs, outputs: this.outputs, hostListeners: this.hostListeners, hostProperties: this.hostProperties, hostAttributes: this.hostAttributes, providers: this.providers, viewProviders: this.viewProviders, queries: this.queries, guards: this.guards, viewQueries: this.viewQueries, entryComponents: this.entryComponents, changeDetection: this.changeDetection, template: this.template && this.template.toSummary(), componentViewType: this.componentViewType, rendererType: this.rendererType, componentFactory: this.componentFactory };
        } }], [{ key: "create", value: function(d) {
          var D = d.isHost, v = d.type, y = d.isComponent, b = d.selector, S = d.exportAs, F = d.changeDetection, x = d.inputs, w = d.outputs, A = d.host, k = d.providers, O = d.viewProviders, q = d.queries, H = d.guards, R = d.viewQueries, $ = d.entryComponents, K = d.template, ne = d.componentViewType, ue = d.rendererType, Ce = d.componentFactory, oe = {}, ae = {}, ve = {};
          A != null && Object.keys(A).forEach(function(Ne) {
            var Oe = A[Ne], We = Ne.match(t);
            We === null ? ve[Ne] = Oe : We[1] != null ? ae[We[1]] = Oe : We[2] != null && (oe[We[2]] = Oe);
          });
          var Le = {};
          x != null && x.forEach(function(Ne) {
            var Oe = Rp.splitAtColon(Ne, [Ne, Ne]);
            Le[Oe[0]] = Oe[1];
          });
          var Te = {};
          return w != null && w.forEach(function(Ne) {
            var Oe = Rp.splitAtColon(Ne, [Ne, Ne]);
            Te[Oe[0]] = Oe[1];
          }), new p({ isHost: D, type: v, isComponent: !!y, selector: b, exportAs: S, changeDetection: F, inputs: Le, outputs: Te, hostListeners: oe, hostProperties: ae, hostAttributes: ve, providers: k, viewProviders: O, queries: q, guards: H, viewQueries: R, entryComponents: $, template: K, componentViewType: ne, rendererType: ue, componentFactory: Ce });
        } }]), p;
      }();
      e.CompileDirectiveMetadata = o, e.CompilePipeMetadata = /* @__PURE__ */ function() {
        function p(f) {
          var d = f.type, D = f.name, v = f.pure;
          se(this, p), this.type = d, this.name = D, this.pure = !!v;
        }
        return ce(p, [{ key: "toSummary", value: function() {
          return { summaryKind: i.Pipe, type: this.type, name: this.name, pure: this.pure };
        } }]), p;
      }(), e.CompileShallowModuleMetadata = /* @__PURE__ */ function() {
        function p() {
          se(this, p);
        }
        return ce(p);
      }(), e.CompileNgModuleMetadata = /* @__PURE__ */ function() {
        function p(f) {
          var d = f.type, D = f.providers, v = f.declaredDirectives, y = f.exportedDirectives, b = f.declaredPipes, S = f.exportedPipes, F = f.entryComponents, x = f.bootstrapComponents, w = f.importedModules, A = f.exportedModules, k = f.schemas, O = f.transitiveModule, q = f.id;
          se(this, p), this.type = d || null, this.declaredDirectives = s(v), this.exportedDirectives = s(y), this.declaredPipes = s(b), this.exportedPipes = s(S), this.providers = s(D), this.entryComponents = s(F), this.bootstrapComponents = s(x), this.importedModules = s(w), this.exportedModules = s(A), this.schemas = s(k), this.id = q || null, this.transitiveModule = O || null;
        }
        return ce(p, [{ key: "toSummary", value: function() {
          var d = this.transitiveModule;
          return { summaryKind: i.NgModule, type: this.type, entryComponents: d.entryComponents, providers: d.providers, modules: d.modules, exportedDirectives: d.exportedDirectives, exportedPipes: d.exportedPipes };
        } }]), p;
      }();
      function s(p) {
        return p || [];
      }
      e.TransitiveCompileNgModuleMetadata = /* @__PURE__ */ function() {
        function p() {
          se(this, p), this.directivesSet = /* @__PURE__ */ new Set(), this.directives = [], this.exportedDirectivesSet = /* @__PURE__ */ new Set(), this.exportedDirectives = [], this.pipesSet = /* @__PURE__ */ new Set(), this.pipes = [], this.exportedPipesSet = /* @__PURE__ */ new Set(), this.exportedPipes = [], this.modulesSet = /* @__PURE__ */ new Set(), this.modules = [], this.entryComponentsSet = /* @__PURE__ */ new Set(), this.entryComponents = [], this.providers = [];
        }
        return ce(p, [{ key: "addProvider", value: function(d, D) {
          this.providers.push({ provider: d, module: D });
        } }, { key: "addDirective", value: function(d) {
          this.directivesSet.has(d.reference) || (this.directivesSet.add(d.reference), this.directives.push(d));
        } }, { key: "addExportedDirective", value: function(d) {
          this.exportedDirectivesSet.has(d.reference) || (this.exportedDirectivesSet.add(d.reference), this.exportedDirectives.push(d));
        } }, { key: "addPipe", value: function(d) {
          this.pipesSet.has(d.reference) || (this.pipesSet.add(d.reference), this.pipes.push(d));
        } }, { key: "addExportedPipe", value: function(d) {
          this.exportedPipesSet.has(d.reference) || (this.exportedPipesSet.add(d.reference), this.exportedPipes.push(d));
        } }, { key: "addModule", value: function(d) {
          this.modulesSet.has(d.reference) || (this.modulesSet.add(d.reference), this.modules.push(d));
        } }, { key: "addEntryComponent", value: function(d) {
          this.entryComponentsSet.has(d.componentType) || (this.entryComponentsSet.add(d.componentType), this.entryComponents.push(d));
        } }]), p;
      }();
      function c(p) {
        return p.reduce(function(f, d) {
          var D = Array.isArray(d) ? c(d) : d;
          return f.concat(D);
        }, []);
      }
      function l(p) {
        return p.replace(/(\w+:\/\/[\w:-]+)?(\/+)?/, "ng:///");
      }
      e.ProviderMeta = /* @__PURE__ */ function() {
        function p(f, d) {
          var D = d.useClass, v = d.useValue, y = d.useExisting, b = d.useFactory, S = d.deps, F = d.multi;
          se(this, p), this.token = f, this.useClass = D || null, this.useValue = v, this.useExisting = y, this.useFactory = b || null, this.dependencies = S || null, this.multi = !!F;
        }
        return ce(p);
      }(), e.flatten = c, e.templateSourceUrl = function(p, f, d) {
        var D;
        return D = d.isInline ? f.type.reference instanceof Op.StaticSymbol ? "".concat(f.type.reference.filePath, ".").concat(f.type.reference.name, ".html") : "".concat(a(p), "/").concat(a(f.type), ".html") : d.templateUrl, f.type.reference instanceof Op.StaticSymbol ? D : l(D);
      }, e.sharedStylesheetJitUrl = function(p, f) {
        var d = p.moduleUrl.split(/\/\\/g), D = d[d.length - 1];
        return l("css/".concat(f).concat(D, ".ngstyle.js"));
      }, e.ngModuleJitUrl = function(p) {
        return l("".concat(a(p.type), "/module.ngfactory.js"));
      }, e.templateJitUrl = function(p, f) {
        return l("".concat(a(p), "/").concat(a(f.type), ".ngfactory.js"));
      };
    }), kI = De(function(r, e) {
      Object.defineProperty(e, "__esModule", { value: !0 });
      /**
      * @license
      * Copyright Google Inc. All Rights Reserved.
      *
      * Use of this source code is governed by an MIT-style license that can be
      * found in the LICENSE file at https://angular.io/license
      */
      var t = /* @__PURE__ */ function() {
        function i(o, s, c, l) {
          se(this, i), this.file = o, this.offset = s, this.line = c, this.col = l;
        }
        return ce(i, [{ key: "toString", value: function() {
          return this.offset != null ? "".concat(this.file.url, "@").concat(this.line, ":").concat(this.col) : this.file.url;
        } }, { key: "moveBy", value: function(s) {
          for (var c = this.file.content, l = c.length, p = this.offset, f = this.line, d = this.col; p > 0 && s < 0; )
            if (p--, s++, c.charCodeAt(p) == Wh.$LF) {
              f--;
              var D = c.substr(0, p - 1).lastIndexOf(String.fromCharCode(Wh.$LF));
              d = D > 0 ? p - D : p;
            } else
              d--;
          for (; p < l && s > 0; ) {
            var v = c.charCodeAt(p);
            p++, s--, v == Wh.$LF ? (f++, d = 0) : d++;
          }
          return new i(this.file, p, f, d);
        } }, { key: "getContext", value: function(s, c) {
          var l = this.file.content, p = this.offset;
          if (p != null) {
            p > l.length - 1 && (p = l.length - 1);
            for (var f = p, d = 0, D = 0; d < s && p > 0 && (p--, d++, l[p] != `
` || ++D != c); )
              ;
            for (d = 0, D = 0; d < s && f < l.length - 1 && (f++, d++, l[f] != `
` || ++D != c); )
              ;
            return { before: l.substring(p, this.offset), after: l.substring(this.offset, f + 1) };
          }
          return null;
        } }]), i;
      }();
      e.ParseLocation = t;
      var n = /* @__PURE__ */ ce(function i(o, s) {
        se(this, i), this.content = o, this.url = s;
      });
      e.ParseSourceFile = n;
      var u = /* @__PURE__ */ function() {
        function i(o, s) {
          var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
          se(this, i), this.start = o, this.end = s, this.details = c;
        }
        return ce(i, [{ key: "toString", value: function() {
          return this.start.file.content.substring(this.start.offset, this.end.offset);
        } }]), i;
      }(), a;
      e.ParseSourceSpan = u, e.EMPTY_PARSE_LOCATION = new t(new n("", ""), 0, 0, 0), e.EMPTY_SOURCE_SPAN = new u(e.EMPTY_PARSE_LOCATION, e.EMPTY_PARSE_LOCATION), function(i) {
        i[i.WARNING = 0] = "WARNING", i[i.ERROR = 1] = "ERROR";
      }(a = e.ParseErrorLevel || (e.ParseErrorLevel = {})), e.ParseError = /* @__PURE__ */ function() {
        function i(o, s) {
          var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : a.ERROR;
          se(this, i), this.span = o, this.msg = s, this.level = c;
        }
        return ce(i, [{ key: "contextualMessage", value: function() {
          var s = this.span.start.getContext(100, 3);
          return s ? "".concat(this.msg, ' ("').concat(s.before, "[").concat(a[this.level], " ->]").concat(s.after, '")') : this.msg;
        } }, { key: "toString", value: function() {
          var s = this.span.details ? ", ".concat(this.span.details) : "";
          return "".concat(this.contextualMessage(), ": ").concat(this.span.start).concat(s);
        } }]), i;
      }(), e.typeSourceSpan = function(i, o) {
        var s = Hh.identifierModuleUrl(o), c = s != null ? "in ".concat(i, " ").concat(Hh.identifierName(o), " in ").concat(s) : "in ".concat(i, " ").concat(Hh.identifierName(o)), l = new n("", c);
        return new u(new t(l, -1, -1, -1), new t(l, -1, -1, -1));
      }, e.r3JitTypeSourceSpan = function(i, o, s) {
        var c = "in ".concat(i, " ").concat(o, " in ").concat(s), l = new n("", c);
        return new u(new t(l, -1, -1, -1), new t(l, -1, -1, -1));
      };
    }), Iu = kI.ParseSourceSpan, NI = Je.htmlTrim, PI = Je.getLeadingAndTrailingHtmlWhitespace, II = Je.hasHtmlWhitespace, OI = Je.canHaveInterpolation, LI = Je.getNodeCssStyleDisplay, RI = Je.isDanglingSpaceSensitiveNode, MI = Je.isIndentationSensitiveNode, jI = Je.isLeadingSpaceSensitiveNode, $I = Je.isTrailingSpaceSensitiveNode, qI = Je.isWhitespaceSensitiveNode, VI = [function(r) {
      return r.map(function(e) {
        if (e.type === "element" && e.tagDefinition.ignoreFirstLf && e.children.length > 0 && e.children[0].type === "text" && e.children[0].value[0] === `
`) {
          var t = wb(e.children), n = t[0], u = t.slice(1);
          return e.clone({ children: n.value.length === 1 ? u : [n.clone({ value: n.value.slice(1) })].concat(_(u)) });
        }
        return e;
      });
    }, function(r) {
      var e = function(n) {
        return n.type === "element" && n.prev && n.prev.type === "ieConditionalStartComment" && n.prev.sourceSpan.end.offset === n.startSourceSpan.start.offset && n.firstChild && n.firstChild.type === "ieConditionalEndComment" && n.firstChild.sourceSpan.start.offset === n.startSourceSpan.end.offset;
      };
      return r.map(function(t) {
        if (t.children) {
          var n = t.children.map(e);
          if (n.some(Boolean)) {
            for (var u = [], a = 0; a < t.children.length; a++) {
              var i = t.children[a];
              if (!n[a + 1])
                if (n[a]) {
                  var o = i.prev, s = i.firstChild, c = new Iu(o.sourceSpan.start, s.sourceSpan.end), l = new Iu(c.start, i.sourceSpan.end);
                  u.push(i.clone({ condition: o.condition, sourceSpan: l, startSourceSpan: c, children: i.children.slice(1) }));
                } else
                  u.push(i);
            }
            return t.clone({ children: u });
          }
        }
        return t;
      });
    }, function(r) {
      return function(e, t, n) {
        return e.map(function(u) {
          if (u.children) {
            var a = u.children.map(t);
            if (a.some(Boolean)) {
              for (var i = [], o = 0; o < u.children.length; o++) {
                var s = u.children[o];
                if (s.type !== "text" && !a[o]) {
                  i.push(s);
                  continue;
                }
                var c = s.type === "text" ? s : s.clone({ type: "text", value: n(s) });
                if (i.length === 0 || sr(i).type !== "text") {
                  i.push(c);
                  continue;
                }
                var l = i.pop();
                i.push(l.clone({ value: l.value + c.value, sourceSpan: new Iu(l.sourceSpan.start, c.sourceSpan.end) }));
              }
              return u.clone({ children: i });
            }
          }
          return u;
        });
      }(r, function(e) {
        return e.type === "cdata";
      }, function(e) {
        return "<![CDATA[".concat(e.value, "]]>");
      });
    }, function(r, e) {
      if (e.parser === "html")
        return r;
      var t = /{{([\S\s]+?)}}/g;
      return r.map(function(n) {
        if (!OI(n))
          return n;
        var u = [], a = le(n.children), i;
        try {
          for (a.s(); !(i = a.n()).done; ) {
            var o = i.value;
            if (o.type !== "text") {
              u.push(o);
              continue;
            }
            for (var s = o.sourceSpan.start, c = null, l = o.value.split(t), p = 0; p < l.length; p++, s = c) {
              var f = l[p];
              p % 2 != 0 ? (c = s.moveBy(f.length + 4), u.push({ type: "interpolation", sourceSpan: new Iu(s, c), children: f.length === 0 ? [] : [{ type: "text", value: f, sourceSpan: new Iu(s.moveBy(2), c.moveBy(-2)) }] })) : (c = s.moveBy(f.length), f.length > 0 && u.push({ type: "text", value: f, sourceSpan: new Iu(s, c) }));
            }
          }
        } catch (d) {
          a.e(d);
        } finally {
          a.f();
        }
        return n.clone({ children: u });
      });
    }, function(r) {
      var e = "whitespace";
      return r.map(function(t) {
        if (!t.children)
          return t;
        if (t.children.length === 0 || t.children.length === 1 && t.children[0].type === "text" && NI(t.children[0].value).length === 0)
          return t.clone({ children: [], hasDanglingSpaces: t.children.length > 0 });
        var n = qI(t), u = MI(t);
        return t.clone({ isWhitespaceSensitive: n, isIndentationSensitive: u, children: t.children.reduce(function(a, i) {
          if (i.type !== "text" || n)
            return [].concat(_(a), [i]);
          var o = [], s = PI(i.value), c = s.leadingWhitespace, l = s.text, p = s.trailingWhitespace;
          return c && o.push({ type: e }), l && o.push({ type: "text", value: l, sourceSpan: new Iu(i.sourceSpan.start.moveBy(c.length), i.sourceSpan.end.moveBy(-p.length)) }), p && o.push({ type: e }), [].concat(_(a), o);
        }, []).reduce(function(a, i, o, s) {
          if (i.type === e)
            return a;
          var c = o !== 0 && s[o - 1].type === e, l = o !== s.length - 1 && s[o + 1].type === e;
          return [].concat(_(a), [Object.assign({}, i, { hasLeadingSpaces: c, hasTrailingSpaces: l })]);
        }, []) });
      });
    }, function(r, e) {
      return r.map(function(t) {
        return Object.assign(t, { cssDisplay: LI(t, e) });
      });
    }, function(r) {
      return r.map(function(e) {
        return Object.assign(e, { isSelfClosing: !e.children || e.type === "element" && (e.tagDefinition.isVoid || e.startSourceSpan === e.endSourceSpan) });
      });
    }, function(r, e) {
      return r.map(function(t) {
        return t.type !== "element" ? t : Object.assign(t, { hasHtmComponentClosingTag: t.endSourceSpan && /^<\s*\/\s*\/\s*>$/.test(e.originalText.slice(t.endSourceSpan.start.offset, t.endSourceSpan.end.offset)) });
      });
    }, function(r, e) {
      return r.map(function(t) {
        return t.children ? t.children.length === 0 ? t.clone({ isDanglingSpaceSensitive: RI(t) }) : t.clone({ children: t.children.map(function(n) {
          return Object.assign({}, n, { isLeadingSpaceSensitive: jI(n, e), isTrailingSpaceSensitive: $I(n, e) });
        }).map(function(n, u, a) {
          return Object.assign({}, n, { isLeadingSpaceSensitive: (u === 0 || a[u - 1].isTrailingSpaceSensitive) && n.isLeadingSpaceSensitive, isTrailingSpaceSensitive: (u === a.length - 1 || a[u + 1].isLeadingSpaceSensitive) && n.isTrailingSpaceSensitive });
        }) }) : t;
      });
    }, function(r) {
      var e = function(n) {
        return n.type === "element" && n.attrs.length === 0 && n.children.length === 1 && n.firstChild.type === "text" && !II(n.children[0].value) && !n.firstChild.hasLeadingSpaces && !n.firstChild.hasTrailingSpaces && n.isLeadingSpaceSensitive && !n.hasLeadingSpaces && n.isTrailingSpaceSensitive && !n.hasTrailingSpaces && n.prev && n.prev.type === "text" && n.next && n.next.type === "text";
      };
      return r.map(function(t) {
        if (t.children) {
          var n = t.children.map(e);
          if (n.some(Boolean)) {
            for (var u = [], a = 0; a < t.children.length; a++) {
              var i = t.children[a];
              if (n[a]) {
                var o = u.pop(), s = t.children[++a], c = s.isTrailingSpaceSensitive, l = s.hasTrailingSpaces;
                u.push(o.clone({ value: o.value + "<".concat(i.rawName, ">") + i.firstChild.value + "</".concat(i.rawName, ">") + s.value, sourceSpan: new Iu(o.sourceSpan.start, s.sourceSpan.end), isTrailingSpaceSensitive: c, hasTrailingSpaces: l }));
              } else
                u.push(i);
            }
            return t.clone({ children: u });
          }
        }
        return t;
      });
    }], UI = function(e, t) {
      var n = le(VI), u;
      try {
        for (n.s(); !(u = n.n()).done; ) {
          var a = u.value;
          e = a(e, t);
        }
      } catch (i) {
        n.e(i);
      } finally {
        n.f();
      }
      return e;
    }, WI = { hasPragma: function(e) {
      return /^\s*<!--\s*@(format|prettier)\s*-->/.test(e);
    }, insertPragma: function(e) {
      return `<!-- @format -->

` + e.replace(/^\s*\n/, "");
    } }, oA = { locStart: function(e) {
      return e.sourceSpan.start.offset;
    }, locEnd: function(e) {
      return e.sourceSpan.end.offset;
    } }, GI = fe.builders.group, zh = { isVueEventBindingExpression: function(e) {
      var t = e.trim();
      return /^([\w$]+|\([^)]*?\))\s*=>|^function\s*\(/.test(t) || /^[$A-Z_a-z][\w$]*(?:\.[$A-Z_a-z][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[$A-Z_a-z][\w$]*])*$/.test(t);
    }, printVueFor: function(e, t) {
      var n = function(o) {
        var s = /([^]*?)\s+(in|of)\s+([^]*)/, c = /,([^,\]}]*)(?:,([^,\]}]*))?$/, l = /^\(|\)$/g, p = o.match(s);
        if (!!p) {
          var f = {};
          f.for = p[3].trim();
          var d = p[1].trim().replace(l, ""), D = d.match(c);
          return D ? (f.alias = d.replace(c, ""), f.iterator1 = D[1].trim(), D[2] && (f.iterator2 = D[2].trim())) : f.alias = d, { left: "".concat([f.alias, f.iterator1, f.iterator2].filter(Boolean).join(",")), operator: p[2], right: f.for };
        }
      }(e), u = n.left, a = n.operator, i = n.right;
      return [GI(t("function _(".concat(u, ") {}"), { parser: "babel", __isVueForBindingLeft: !0 })), " ", a, " ", t(i, { parser: "__js_expression" }, { stripTrailingHardline: !0 })];
    }, printVueBindings: function(e, t) {
      return t("function _(".concat(e, ") {}"), { parser: "babel", __isVueBindings: !0 });
    } }, HI = De(function(r) {
      (function(e, t) {
        r.exports ? r.exports = t() : e.parseSrcset = t();
      })(ye, function() {
        return function(e, t) {
          var n = t && t.logger || console;
          function u(A) {
            return A === " " || A === "	" || A === `
` || A === "\f" || A === "\r";
          }
          function a(A) {
            var k, O = A.exec(e.substring(S));
            if (O)
              return k = O[0], S += k.length, k;
          }
          for (var i, o, s, c, l, p = e.length, f = /^[ \t\n\r\u000c]+/, d = /^[, \t\n\r\u000c]+/, D = /^[^ \t\n\r\u000c]+/, v = /[,]+$/, y = /^\d+$/, b = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, S = 0, F = []; ; ) {
            if (a(d), S >= p)
              return F;
            i = a(D), o = [], i.slice(-1) === "," ? (i = i.replace(v, ""), w()) : x();
          }
          function x() {
            for (a(f), s = "", c = "in descriptor"; ; ) {
              if (l = e.charAt(S), c === "in descriptor")
                if (u(l))
                  s && (o.push(s), s = "", c = "after descriptor");
                else {
                  if (l === ",")
                    return S += 1, s && o.push(s), void w();
                  if (l === "(")
                    s += l, c = "in parens";
                  else {
                    if (l === "")
                      return s && o.push(s), void w();
                    s += l;
                  }
                }
              else if (c === "in parens")
                if (l === ")")
                  s += l, c = "in descriptor";
                else {
                  if (l === "")
                    return o.push(s), void w();
                  s += l;
                }
              else if (c === "after descriptor" && !u(l)) {
                if (l === "")
                  return void w();
                c = "in descriptor", S -= 1;
              }
              S += 1;
            }
          }
          function w() {
            var A, k, O, q, H, R, $, K, ne, ue = !1, Ce = {};
            for (q = 0; q < o.length; q++)
              R = (H = o[q])[H.length - 1], $ = H.substring(0, H.length - 1), K = parseInt($, 10), ne = parseFloat($), y.test($) && R === "w" ? ((A || k) && (ue = !0), K === 0 ? ue = !0 : A = K) : b.test($) && R === "x" ? ((A || k || O) && (ue = !0), ne < 0 ? ue = !0 : k = ne) : y.test($) && R === "h" ? ((O || k) && (ue = !0), K === 0 ? ue = !0 : O = K) : ue = !0;
            ue ? n && n.error && n.error("Invalid srcset descriptor found in '" + e + "' at '" + H + "'.") : (Ce.url = i, A && (Ce.w = A), k && (Ce.d = k), O && (Ce.h = O), F.push(Ce));
          }
        };
      });
    }), oo = fe.builders, zI = oo.group, XI = oo.ifBreak, JI = oo.indent, Xh = oo.join, Jh = oo.line, sA = oo.softline, YI = ["__", "--", "_", "-"];
    function KI(r) {
      var e = r.search(/[^_-]/);
      if (e !== -1) {
        var t = le(YI), n;
        try {
          for (t.s(); !(n = t.n()).done; ) {
            var u = n.value, a = r.indexOf(u, e);
            if (a !== -1)
              return r.slice(0, a);
          }
        } catch (i) {
          t.e(i);
        } finally {
          t.f();
        }
      }
      return r;
    }
    var cA = { printImgSrcset: function(e) {
      var t = HI(e, { logger: { error: function(D) {
        throw new Error(D);
      } } }), n = t.some(function(d) {
        var D = d.w;
        return D;
      }), u = t.some(function(d) {
        var D = d.h;
        return D;
      });
      if (n + u + t.some(function(d) {
        var D = d.d;
        return D;
      }) > 1)
        throw new Error("Mixed descriptor in srcset is not supported");
      var a = n ? "w" : u ? "h" : "d", i = n ? "w" : u ? "h" : "x", o = function(D) {
        return Math.max.apply(Math, _(D));
      }, s = t.map(function(d) {
        return d.url;
      }), c = o(s.map(function(d) {
        return d.length;
      })), l = t.map(function(d) {
        return d[a];
      }).map(function(d) {
        return d ? d.toString() : "";
      }), p = l.map(function(d) {
        var D = d.indexOf(".");
        return D === -1 ? d.length : D;
      }), f = o(p);
      return Xh([",", Jh], s.map(function(d, D) {
        var v = [d], y = l[D];
        if (y) {
          var b = c - d.length + 1, S = f - p[D], F = " ".repeat(b + S);
          v.push(XI(F, " "), y + i);
        }
        return v;
      }));
    }, printClassNames: function(e) {
      for (var t = e.trim().split(/\s+/), n = [], u, a = 0; a < t.length; a++) {
        var i = KI(t[a]);
        i !== u && i !== t[a - 1] && n.push([]), sr(n).push(t[a]), u = i;
      }
      return [JI([sA, Xh(Jh, n.map(function(o) {
        return zI(Xh(Jh, o));
      }))]), sA];
    } }, qt = fe.builders, Yh = qt.breakParent, QI = qt.dedentToRoot, lA = qt.fill, Ct = qt.group, Er = qt.hardline, Kh = qt.ifBreak, ZI = qt.indentIfBreak, ec = qt.indent, pA = qt.join, At = qt.line, xn = qt.literalline, an = qt.softline, Mp = fe.utils, _I = Mp.mapDoc, eO = Mp.cleanDoc, fA = Mp.getDocParts, rO = Mp.isConcat, on = X.replaceEndOfLineWith, tO = X.isNonEmptyArray, dA = Je.htmlTrimPreserveIndentation, nO = Je.splitByHtmlWhitespace, hA = Je.countChars, uO = Je.countParents, DA = Je.dedentString, aO = Je.forceBreakChildren, iO = Je.forceBreakContent, jp = Je.forceNextEmptyLine, gA = Je.getLastDescendant, oO = Je.getPrettierIgnoreAttributeCommentData, mA = Je.hasPrettierIgnore, vA = Je.inferScriptParser, sO = Je.isVueCustomBlock, cO = Je.isVueNonHtmlBlock, lO = Je.isVueSlotAttribute, pO = Je.isVueSfcBindingsAttribute, Qh = Je.isScriptLikeTag, Vt = Je.isTextLikeNode, Zh = Je.preferHardlineAsLeadingSpaces, yA = Je.shouldNotPrintClosingTag, fO = Je.shouldPreserveContent, EA = Je.unescapeQuoteEntities, dO = Je.isPreLikeNode, hO = WI.insertPragma, _h = oA.locStart, eD = oA.locEnd, DO = zh.printVueFor, gO = zh.printVueBindings, mO = zh.isVueEventBindingExpression, vO = cA.printImgSrcset, yO = cA.printClassNames;
    function CA(r, e, t) {
      var n = r.getValue();
      if (aO(n))
        return [Yh].concat(_(r.map(function(o) {
          var s = o.getValue(), c = s.prev ? i(s.prev, s) : "";
          return [c ? [c, jp(s.prev) ? Er : ""] : "", a(o)];
        }, "children")));
      var u = n.children.map(function() {
        return Symbol("");
      });
      return r.map(function(o, s) {
        var c = o.getValue();
        if (Vt(c)) {
          if (c.prev && Vt(c.prev)) {
            var l = i(c.prev, c);
            if (l)
              return jp(c.prev) ? [Er, Er, a(o)] : [l, a(o)];
          }
          return a(o);
        }
        var p = [], f = [], d = [], D = [], v = c.prev ? i(c.prev, c) : "", y = c.next ? i(c, c.next) : "";
        return v && (jp(c.prev) ? p.push(Er, Er) : v === Er ? p.push(Er) : Vt(c.prev) ? f.push(v) : f.push(Kh("", an, { groupId: u[s - 1] }))), y && (jp(c) ? Vt(c.next) && D.push(Er, Er) : y === Er ? Vt(c.next) && D.push(Er) : d.push(y)), [].concat(p, [Ct([].concat(f, [Ct([a(o)].concat(d), { id: u[s] })]))], D);
      }, "children");
      function a(o) {
        var s = o.getValue();
        return mA(s) ? [Ra(s, e)].concat(_(on(e.originalText.slice(_h(s) + (s.prev && Vp(s.prev) ? nD(s).length : 0), eD(s) - (s.next && La(s.next) ? nc(s, e).length : 0)), xn)), [Ma(s, e)]) : t();
      }
      function i(o, s) {
        return Vt(o) && Vt(s) ? o.isTrailingSpaceSensitive ? o.hasTrailingSpaces ? Zh(s) ? Er : At : "" : Zh(s) ? Er : an : Vp(o) && (mA(s) || s.firstChild || s.isSelfClosing || s.type === "element" && s.attrs.length > 0) || o.type === "element" && o.isSelfClosing && La(s) ? "" : !s.isLeadingSpaceSensitive || Zh(s) || La(s) && o.lastChild && tc(o.lastChild) && o.lastChild.lastChild && tc(o.lastChild.lastChild) ? Er : s.hasLeadingSpaces ? At : an;
      }
    }
    function AA(r, e) {
      var t = r.startSourceSpan.end.offset;
      r.firstChild && Up(r.firstChild) && (t -= uD(r).length);
      var n = r.endSourceSpan.start.offset;
      return r.lastChild && tc(r.lastChild) ? n += aD(r, e).length : rc(r) && (n -= nc(r.lastChild, e).length), e.originalText.slice(t, n);
    }
    function EO(r, e, t) {
      var n = r.getValue();
      if (!tO(n.attrs))
        return n.isSelfClosing ? " " : "";
      var u = n.prev && n.prev.type === "comment" && oO(n.prev.value), a = typeof u == "boolean" ? function() {
        return u;
      } : Array.isArray(u) ? function(c) {
        return u.includes(c.rawName);
      } : function() {
        return !1;
      }, i = r.map(function(c) {
        var l = c.getValue();
        return a(l) ? on(e.originalText.slice(_h(l), eD(l)), xn) : t();
      }, "attrs"), o = n.type === "element" && n.fullName === "script" && n.attrs.length === 1 && n.attrs[0].fullName === "src" && n.children.length === 0, s = [ec([o ? " " : At, pA(At, i)])];
      return n.firstChild && Up(n.firstChild) || n.isSelfClosing && rc(n.parent) || o ? s.push(n.isSelfClosing ? " " : "") : s.push(n.isSelfClosing ? At : an), s;
    }
    function rD(r, e, t) {
      var n = r.getValue();
      return [$p(n, e), EO(r, e, t), n.isSelfClosing ? "" : CO(n)];
    }
    function $p(r, e) {
      return r.prev && Vp(r.prev) ? "" : [Ra(r, e), nD(r)];
    }
    function CO(r) {
      return r.firstChild && Up(r.firstChild) ? "" : uD(r);
    }
    function tD(r, e) {
      return [r.isSelfClosing ? "" : AO(r, e), qp(r, e)];
    }
    function AO(r, e) {
      return r.lastChild && tc(r.lastChild) ? "" : [bO(r, e), aD(r, e)];
    }
    function qp(r, e) {
      return (r.next ? La(r.next) : rc(r.parent)) ? "" : [nc(r, e), Ma(r, e)];
    }
    function Vp(r) {
      return r.next && !Vt(r.next) && Vt(r) && r.isTrailingSpaceSensitive && !r.hasTrailingSpaces;
    }
    function Up(r) {
      return !r.prev && r.isLeadingSpaceSensitive && !r.hasLeadingSpaces;
    }
    function La(r) {
      return r.prev && r.prev.type !== "docType" && !Vt(r.prev) && r.isLeadingSpaceSensitive && !r.hasLeadingSpaces;
    }
    function rc(r) {
      return r.lastChild && r.lastChild.isTrailingSpaceSensitive && !r.lastChild.hasTrailingSpaces && !Vt(gA(r.lastChild)) && !dO(r);
    }
    function tc(r) {
      return !r.next && !r.hasTrailingSpaces && r.isTrailingSpaceSensitive && Vt(gA(r));
    }
    function Ra(r, e) {
      return Up(r) ? uD(r.parent) : La(r) ? nc(r.prev, e) : "";
    }
    function bO(r, e) {
      return rc(r) ? nc(r.lastChild, e) : "";
    }
    function Ma(r, e) {
      return tc(r) ? aD(r.parent, e) : Vp(r) ? nD(r.next) : "";
    }
    function nD(r) {
      switch (r.type) {
        case "ieConditionalComment":
        case "ieConditionalStartComment":
          return "<!--[if ".concat(r.condition);
        case "ieConditionalEndComment":
          return "<!--<!";
        case "interpolation":
          return "{{";
        case "docType":
          return "<!DOCTYPE";
        case "element":
          if (r.condition)
            return "<!--[if ".concat(r.condition, "]><!--><").concat(r.rawName);
        default:
          return "<".concat(r.rawName);
      }
    }
    function uD(r) {
      switch (Hn(!r.isSelfClosing), r.type) {
        case "ieConditionalComment":
          return "]>";
        case "element":
          if (r.condition)
            return "><!--<![endif]-->";
        default:
          return ">";
      }
    }
    function aD(r, e) {
      if (Hn(!r.isSelfClosing), yA(r, e))
        return "";
      switch (r.type) {
        case "ieConditionalComment":
          return "<!";
        case "element":
          if (r.hasHtmComponentClosingTag)
            return "<//";
        default:
          return "</".concat(r.rawName);
      }
    }
    function nc(r, e) {
      if (yA(r, e))
        return "";
      switch (r.type) {
        case "ieConditionalComment":
        case "ieConditionalEndComment":
          return "[endif]-->";
        case "ieConditionalStartComment":
          return "]><!-->";
        case "interpolation":
          return "}}";
        case "element":
          if (r.isSelfClosing)
            return "/>";
        default:
          return ">";
      }
    }
    function bA(r) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : r.value;
      return r.parent.isWhitespaceSensitive ? r.parent.isIndentationSensitive ? on(e, xn) : on(DA(dA(e)), Er) : fA(pA(At, nO(e)));
    }
    var FO = { preprocess: UI, print: function(e, t, n) {
      var u = e.getValue();
      switch (u.type) {
        case "front-matter":
          return on(u.raw, xn);
        case "root":
          return t.__onHtmlRoot && t.__onHtmlRoot(u), [Ct(CA(e, t, n)), Er];
        case "element":
        case "ieConditionalComment": {
          if (fO(u, t))
            return [Ra(u, t), Ct(rD(e, t, n))].concat(_(on(AA(u, t), xn)), _(tD(u, t)), [Ma(u, t)]);
          var a = u.children.length === 1 && u.firstChild.type === "interpolation" && u.firstChild.isLeadingSpaceSensitive && !u.firstChild.hasLeadingSpaces && u.lastChild.isTrailingSpaceSensitive && !u.lastChild.hasTrailingSpaces, i = Symbol("element-attr-group-id");
          return [Ct([Ct(rD(e, t, n), { id: i }), u.children.length === 0 ? u.hasDanglingSpaces && u.isDanglingSpaceSensitive ? At : "" : [iO(u) ? Yh : "", (d = [a ? Kh(an, "", { groupId: i }) : u.firstChild.hasLeadingSpaces && u.firstChild.isLeadingSpaceSensitive ? At : u.firstChild.type === "text" && u.isWhitespaceSensitive && u.isIndentationSensitive ? QI(an) : an, CA(e, t, n)], a ? ZI(d, { groupId: i }) : !Qh(u) && !sO(u, t) || u.parent.type !== "root" || t.parser !== "vue" || t.vueIndentScriptAndStyle ? ec(d) : d), (u.next ? La(u.next) : rc(u.parent)) ? u.lastChild.hasTrailingSpaces && u.lastChild.isTrailingSpaceSensitive ? " " : "" : a ? Kh(an, "", { groupId: i }) : u.lastChild.hasTrailingSpaces && u.lastChild.isTrailingSpaceSensitive ? At : (u.lastChild.type === "comment" || u.lastChild.type === "text" && u.isWhitespaceSensitive && u.isIndentationSensitive) && new RegExp("\\n[\\t ]{".concat(t.tabWidth * uO(e, function(D) {
            return D.parent && D.parent.type !== "root";
          }), "}$")).test(u.lastChild.value) ? "" : an]]), tD(u, t)];
        }
        case "ieConditionalStartComment":
        case "ieConditionalEndComment":
          return [$p(u), qp(u)];
        case "interpolation":
          return [$p(u, t)].concat(_(e.map(n, "children")), [qp(u, t)]);
        case "text": {
          if (u.parent.type === "interpolation") {
            var o = /\n[^\S\n]*?$/, s = o.test(u.value), c = s ? u.value.replace(o, "") : u.value;
            return [].concat(_(on(c, xn)), [s ? Er : ""]);
          }
          var l = eO([Ra(u, t)].concat(_(bA(u)), [Ma(u, t)]));
          return rO(l) || l.type === "fill" ? lA(fA(l)) : l;
        }
        case "docType":
          return [Ct([$p(u, t), " ", u.value.replace(/^html\b/i, "html").replace(/\s+/g, " ")]), qp(u, t)];
        case "comment":
          return [Ra(u, t)].concat(_(on(t.originalText.slice(_h(u), eD(u)), xn)), [Ma(u, t)]);
        case "attribute": {
          if (u.value === null)
            return u.rawName;
          var p = EA(u.value), f = hA(p, "'") < hA(p, '"') ? "'" : '"';
          return [u.rawName, "=", f].concat(_(on(f === '"' ? p.replace(/"/g, "&quot;") : p.replace(/'/g, "&apos;"), xn)), [f]);
        }
        default:
          throw new Error("Unexpected node type ".concat(u.type));
      }
      var d;
    }, insertPragma: hO, massageAstNode: X4, embed: function(e, t, n, u) {
      var a = e.getValue();
      switch (a.type) {
        case "element":
          if (Qh(a) || a.type === "interpolation")
            return;
          if (!a.isSelfClosing && cO(a, u)) {
            var i = vA(a, u);
            if (!i)
              return;
            var o = AA(a, u), s = /^\s*$/.test(o), c = "";
            return s || (c = n(dA(o), { parser: i, __embeddedInHtml: !0 }, { stripTrailingHardline: !0 }), s = c === ""), [Ra(a, u), Ct(rD(e, u, t)), s ? "" : Er, c, s ? "" : Er, tD(a, u), Ma(a, u)];
          }
          break;
        case "text":
          if (Qh(a.parent)) {
            var l = vA(a.parent);
            if (l) {
              var p = l === "markdown" ? DA(a.value.replace(/^[^\S\n]*?\n/, "")) : a.value, f = { parser: l, __embeddedInHtml: !0 };
              if (u.parser === "html" && l === "babel") {
                var d = "script", D = a.parent.attrMap;
                D && (D.type === "module" || D.type === "text/babel" && D["data-type"] === "module") && (d = "module"), f.__babelSourceType = d;
              }
              return [Yh, Ra(a, u), n(p, f, { stripTrailingHardline: !0 }), Ma(a, u)];
            }
          } else if (a.parent.type === "interpolation") {
            var v = { __isInHtmlInterpolation: !0, __embeddedInHtml: !0 };
            return u.parser === "angular" ? (v.parser = "__ng_interpolation", v.trailingComma = "none") : u.parser === "vue" ? v.parser = "__vue_expression" : v.parser = "__js_expression", [ec([At, n(a.value, v, { stripTrailingHardline: !0 })]), a.parent.next && La(a.parent.next) ? " " : At];
          }
          break;
        case "attribute": {
          if (!a.value)
            break;
          if (/^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(u.originalText.slice(a.valueSpan.start.offset, a.valueSpan.end.offset)))
            return [a.rawName, "=", a.value];
          if (u.parser === "lwc" && /^{[\S\s]*}$/.test(u.originalText.slice(a.valueSpan.start.offset, a.valueSpan.end.offset)))
            return [a.rawName, "=", a.value];
          var y = function(b, S, F) {
            var x = function(Pe) {
              return new RegExp(Pe.join("|")).test(b.fullName);
            }, w = function() {
              return EA(b.value);
            }, A = !1, k = function(Pe, He) {
              var er = Pe.type === "NGRoot" ? Pe.node.type === "NGMicrosyntax" && Pe.node.body.length === 1 && Pe.node.body[0].type === "NGMicrosyntaxExpression" ? Pe.node.body[0].expression : Pe.node : Pe.type === "JsExpressionRoot" ? Pe.node : Pe;
              !er || er.type !== "ObjectExpression" && er.type !== "ArrayExpression" && (He.parser !== "__vue_expression" || er.type !== "TemplateLiteral" && er.type !== "StringLiteral") || (A = !0);
            }, O = function(Pe) {
              return Ct(Pe);
            }, q = function(Pe) {
              var He = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
              return Ct([ec([an, Pe]), He ? an : ""]);
            }, H = function(Pe) {
              return A ? O(Pe) : q(Pe);
            }, R = function(Pe, He) {
              return S(Pe, Object.assign({ __onHtmlBindingRoot: k, __embeddedInHtml: !0 }, He), { stripTrailingHardline: !0 });
            };
            if (b.fullName === "srcset" && (b.parent.fullName === "img" || b.parent.fullName === "source"))
              return q(vO(w()));
            if (b.fullName === "class" && !F.parentParser) {
              var $ = w();
              if (!$.includes("{{"))
                return yO($);
            }
            if (b.fullName === "style" && !F.parentParser) {
              var K = w();
              if (!K.includes("{{"))
                return q(R(K, { parser: "css", __isHTMLStyleAttribute: !0 }));
            }
            if (F.parser === "vue") {
              if (b.fullName === "v-for")
                return DO(w(), R);
              if (lO(b) || pO(b, F))
                return gO(w(), R);
              var ne = ["^:", "^v-bind:"], ue = ["^v-"];
              if (x(["^@", "^v-on:"])) {
                var Ce = w();
                return H(R(Ce, { parser: mO(Ce) ? "__js_expression" : "__vue_event_binding" }));
              }
              if (x(ne))
                return H(R(w(), { parser: "__vue_expression" }));
              if (x(ue))
                return H(R(w(), { parser: "__js_expression" }));
            }
            if (F.parser === "angular") {
              var oe = function(Pe, He) {
                return R(Pe, Object.assign({}, He, { trailingComma: "none" }));
              }, ae = ["^\\*"], ve = ["^\\[.+\\]$", "^bind(on)?-", "^ng-(if|show|hide|class|style)$"], Le = ["^i18n(-.+)?$"];
              if (x(["^\\(.+\\)$", "^on-"]))
                return H(oe(w(), { parser: "__ng_action" }));
              if (x(ve))
                return H(oe(w(), { parser: "__ng_binding" }));
              if (x(Le)) {
                var Te = w().trim();
                return q(lA(bA(b, Te)), !Te.includes("@@"));
              }
              if (x(ae))
                return H(oe(w(), { parser: "__ng_directive" }));
              var Ne = /{{([\S\s]+?)}}/g, Oe = w();
              if (Ne.test(Oe)) {
                var We = [], Re = le(Oe.split(Ne).entries()), Ke;
                try {
                  for (Re.s(); !(Ke = Re.n()).done; ) {
                    var Fe = ke(Ke.value, 2), be = Fe[0], Qe = Fe[1];
                    if (be % 2 == 0)
                      We.push(on(Qe, xn));
                    else
                      try {
                        We.push(Ct(["{{", ec([At, oe(Qe, { parser: "__ng_interpolation", __isInHtmlInterpolation: !0 })]), At, "}}"]));
                      } catch {
                        We.push("{{", on(Qe, xn), "}}");
                      }
                  }
                } catch (we) {
                  Re.e(we);
                } finally {
                  Re.f();
                }
                return Ct(We);
              }
            }
            return null;
          }(a, function(b, S) {
            return n(b, Object.assign({ __isInHtmlAttribute: !0, __embeddedInHtml: !0 }, S), { stripTrailingHardline: !0 });
          }, u);
          if (y)
            return [a.rawName, '="', Ct(_I(y, function(b) {
              return typeof b == "string" ? b.replace(/"/g, "&quot;") : b;
            })), '"'];
          break;
        }
        case "front-matter":
          return lh(a, n);
      }
    } }, FA = "HTML", SO = { htmlWhitespaceSensitivity: { since: "1.15.0", category: FA, type: "choice", default: "css", description: "How to handle whitespaces in HTML.", choices: [{ value: "css", description: "Respect the default value of CSS display property." }, { value: "strict", description: "Whitespaces are considered sensitive." }, { value: "ignore", description: "Whitespaces are considered insensitive." }] }, vueIndentScriptAndStyle: { since: "1.19.0", category: FA, type: "boolean", default: !1, description: "Indent script and style tags in Vue files." } }, iD = { name: "HTML", type: "markup", tmScope: "text.html.basic", aceMode: "html", codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", color: "#e34c26", aliases: ["xhtml"], extensions: [".html", ".htm", ".html.hl", ".inc", ".xht", ".xhtml"], languageId: 146 }, TO = { name: "Vue", type: "markup", color: "#2c3e50", extensions: [".vue"], tmScope: "text.html.vue", aceMode: "html", languageId: 391 }, xO = { languages: [lr(iD, function() {
      return { name: "Angular", since: "1.15.0", parsers: ["angular"], vscodeLanguageIds: ["html"], extensions: [".component.html"], filenames: [] };
    }), lr(iD, function(r) {
      return { since: "1.15.0", parsers: ["html"], vscodeLanguageIds: ["html"], extensions: [].concat(_(r.extensions), [".mjml"]) };
    }), lr(iD, function() {
      return { name: "Lightning Web Components", since: "1.17.0", parsers: ["lwc"], vscodeLanguageIds: ["html"], extensions: [], filenames: [] };
    }), lr(TO, function() {
      return { since: "1.10.0", parsers: ["vue"], vscodeLanguageIds: ["vue"] };
    })], printers: { html: FO }, options: SO, parsers: { get html() {
      return {}.parsers.html;
    }, get vue() {
      return {}.parsers.vue;
    }, get angular() {
      return {}.parsers.angular;
    }, get lwc() {
      return {}.parsers.lwc;
    } } }, SA = { isPragma: function(e) {
      return /^\s*@(prettier|format)\s*$/.test(e);
    }, hasPragma: function(e) {
      return /^\s*#[^\S\n]*@(prettier|format)\s*?(\n|$)/.test(e);
    }, insertPragma: function(e) {
      return `# @format

`.concat(e);
    } }, wO = { locStart: function(e) {
      return e.position.start.offset;
    }, locEnd: function(e) {
      return e.position.end.offset;
    } }, BO = function(e, t, n, u) {
      if (e.getValue().type === "root" && u.filepath && /(?:[/\\]|^)\.prettierrc$/.test(u.filepath))
        return n(u.originalText, Object.assign({}, u, { parser: "json" }));
    }, Ut = X.getLast, uc = X.isNonEmptyArray;
    function TA(r, e) {
      return r && typeof r.type == "string" && (!e || e.includes(r.type));
    }
    function xA(r) {
      return r.value.trim() === "prettier-ignore";
    }
    function oD(r) {
      return r && uc(r.leadingComments);
    }
    function wA(r) {
      return r && uc(r.middleComments);
    }
    function BA(r) {
      return r && r.indicatorComment;
    }
    function kA(r) {
      return r && r.trailingComment;
    }
    function sD(r) {
      return r && uc(r.endComments);
    }
    function NA(r) {
      var e = [], t, n = le(r.split(/( +)/g)), u;
      try {
        for (n.s(); !(u = n.n()).done; ) {
          var a = u.value;
          a !== " " ? t === " " ? e.push(a) : e.push((e.pop() || "") + a) : t === void 0 && e.unshift(""), t = a;
        }
      } catch (i) {
        n.e(i);
      } finally {
        n.f();
      }
      return t === " " && e.push((e.pop() || "") + " "), e[0] === "" && (e.shift(), e.unshift(" " + (e.shift() || ""))), e;
    }
    var _e = { getLast: Ut, getAncestorCount: function(e, t) {
      for (var n = 0, u = e.stack.length - 1, a = 0; a < u; a++) {
        var i = e.stack[a];
        TA(i) && t(i) && n++;
      }
      return n;
    }, isNode: TA, isEmptyNode: function(e) {
      return !uc(e.children) && !function(t) {
        return oD(t) || wA(t) || BA(t) || kA(t) || sD(t);
      }(e);
    }, isInlineNode: function(e) {
      if (!e)
        return !0;
      switch (e.type) {
        case "plain":
        case "quoteDouble":
        case "quoteSingle":
        case "alias":
        case "flowMapping":
        case "flowSequence":
          return !0;
        default:
          return !1;
      }
    }, mapNode: function r(e, t, n) {
      return t("children" in e ? Object.assign({}, e, { children: e.children.map(function(u) {
        return r(u, t, e);
      }) }) : e, n);
    }, defineShortcut: function(e, t, n) {
      Object.defineProperty(e, t, { get: n, enumerable: !1 });
    }, isNextLineEmpty: function(e, t) {
      for (var n = 0, u = t.length, a = e.position.end.offset - 1; a < u; a++) {
        var i = t[a];
        if (i === `
` && n++, n === 1 && /\S/.test(i))
          return !1;
        if (n === 2)
          return !0;
      }
      return !1;
    }, isLastDescendantNode: function(e) {
      switch (e.getValue().type) {
        case "tag":
        case "anchor":
        case "comment":
          return !1;
      }
      for (var t = e.stack.length, n = 1; n < t; n++) {
        var u = e.stack[n], a = e.stack[n - 1];
        if (Array.isArray(a) && typeof u == "number" && u !== a.length - 1)
          return !1;
      }
      return !0;
    }, getBlockValueLineContents: function(e, t) {
      var n = t.parentIndent, u = t.isLastDescendant, a = t.options, i = e.position.start.line === e.position.end.line ? "" : a.originalText.slice(e.position.start.offset, e.position.end.offset).match(/^[^\n]*?\n([\S\s]*)$/)[1], o = e.indent === null ? (s = i.match(/^( *)\S/m)) ? s[1].length : Number.POSITIVE_INFINITY : e.indent - 1 + n, s, c = i.split(`
`).map(function(p) {
        return p.slice(o);
      });
      return a.proseWrap === "preserve" || e.type === "blockLiteral" ? l(c.map(function(p) {
        return p.length === 0 ? [] : [p];
      })) : l(c.map(function(p) {
        return p.length === 0 ? [] : NA(p);
      }).reduce(function(p, f, d) {
        return d !== 0 && c[d - 1].length > 0 && f.length > 0 && !/^\s/.test(f[0]) && !/^\s|\s$/.test(Ut(p)) ? [].concat(_(p.slice(0, -1)), [[].concat(_(Ut(p)), _(f))]) : [].concat(_(p), [f]);
      }, []).map(function(p) {
        return p.reduce(function(f, d) {
          return f.length > 0 && /\s$/.test(Ut(f)) ? [].concat(_(f.slice(0, -1)), [Ut(f) + " " + d]) : [].concat(_(f), [d]);
        }, []);
      }).map(function(p) {
        return a.proseWrap === "never" ? [p.join(" ")] : p;
      }));
      function l(p) {
        if (e.chomping === "keep")
          return Ut(p).length === 0 ? p.slice(0, -1) : p;
        for (var f = 0, d = p.length - 1; d >= 0 && p[d].length === 0; d--)
          f++;
        return f === 0 ? p : f >= 2 && !u ? p.slice(0, -(f - 1)) : p.slice(0, -f);
      }
    }, getFlowScalarLineContents: function(e, t, n) {
      var u = t.split(`
`).map(function(a, i, o) {
        return i === 0 && i === o.length - 1 ? a : i !== 0 && i !== o.length - 1 ? a.trim() : i === 0 ? a.trimEnd() : a.trimStart();
      });
      return n.proseWrap === "preserve" ? u.map(function(a) {
        return a.length === 0 ? [] : [a];
      }) : u.map(function(a) {
        return a.length === 0 ? [] : NA(a);
      }).reduce(function(a, i, o) {
        return o !== 0 && u[o - 1].length > 0 && i.length > 0 && (e !== "quoteDouble" || !Ut(Ut(a)).endsWith("\\")) ? [].concat(_(a.slice(0, -1)), [[].concat(_(Ut(a)), _(i))]) : [].concat(_(a), [i]);
      }, []).map(function(a) {
        return n.proseWrap === "never" ? [a.join(" ")] : a;
      });
    }, getLastDescendantNode: function r(e) {
      return uc(e.children) ? r(Ut(e.children)) : e;
    }, hasPrettierIgnore: function(e) {
      var t = e.getValue();
      if (t.type === "documentBody") {
        var n = e.getParentNode();
        return sD(n.head) && xA(Ut(n.head.endComments));
      }
      return oD(t) && xA(Ut(t.leadingComments));
    }, hasLeadingComments: oD, hasMiddleComments: wA, hasIndicatorComment: BA, hasTrailingComment: kA, hasEndComments: sD }, ac = _e.defineShortcut, kO = _e.mapNode;
    function NO(r) {
      switch (r.type) {
        case "document":
          ac(r, "head", function() {
            return r.children[0];
          }), ac(r, "body", function() {
            return r.children[1];
          });
          break;
        case "documentBody":
        case "sequenceItem":
        case "flowSequenceItem":
        case "mappingKey":
        case "mappingValue":
          ac(r, "content", function() {
            return r.children[0];
          });
          break;
        case "mappingItem":
        case "flowMappingItem":
          ac(r, "key", function() {
            return r.children[0];
          }), ac(r, "value", function() {
            return r.children[1];
          });
      }
      return r;
    }
    var PO = function(e) {
      return kO(e, NO);
    }, PA = fe.builders, IO = PA.softline, OO = PA.align, LO = _e.hasEndComments, RO = _e.isNextLineEmpty, MO = _e.isNode, cD = /* @__PURE__ */ new WeakMap();
    function IA(r) {
      return LO(r) && !MO(r, ["documentHead", "documentBody", "flowMapping", "flowSequence"]);
    }
    var ja = { alignWithSpaces: function(e, t) {
      return OO(" ".repeat(e), t);
    }, shouldPrintEndComments: IA, printNextEmptyLine: function(e, t) {
      var n = e.getValue(), u = e.stack[0], a;
      return cD.has(u) ? a = cD.get(u) : (a = /* @__PURE__ */ new Set(), cD.set(u, a)), a.has(n.position.end.line) || (a.add(n.position.end.line), !RO(n, t) || IA(e.getParentNode())) ? "" : IO;
    } }, ic = fe.builders, jO = ic.ifBreak, OA = ic.line, $O = ic.softline, LA = ic.hardline, qO = ic.join, RA = _e.isEmptyNode, VO = _e.getLast, UO = _e.hasEndComments, WO = ja.printNextEmptyLine, GO = ja.alignWithSpaces;
    function MA(r, e, t) {
      var n = r.getValue(), u = n.type === "flowMapping", a = u ? "{" : "[", i = u ? "}" : "]", o = $O;
      u && n.children.length > 0 && t.bracketSpacing && (o = OA);
      var s = VO(n.children), c = s && s.type === "flowMappingItem" && RA(s.key) && RA(s.value);
      return [a, GO(t.tabWidth, [o, HO(r, e, t), t.trailingComma === "none" ? "" : jO(","), UO(n) ? [LA, qO(LA, r.map(e, "endComments"))] : ""]), c ? "" : o, i];
    }
    function HO(r, e, t) {
      var n = r.getValue();
      return r.map(function(u, a) {
        return [e(), a === n.children.length - 1 ? "" : [",", OA, n.children[a].position.start.line !== n.children[a + 1].position.start.line ? WO(u, t.originalText) : ""]];
      }, "children");
    }
    var jA = { printFlowMapping: MA, printFlowSequence: MA }, so = fe.builders, zO = so.conditionalGroup, $A = so.group, Wp = so.hardline, qA = so.ifBreak, XO = so.join, JO = so.line, Gp = _e.hasLeadingComments, VA = _e.hasMiddleComments, lD = _e.hasTrailingComment, pD = _e.hasEndComments, UA = _e.isNode, WA = _e.isEmptyNode, GA = _e.isInlineNode, $a = ja.alignWithSpaces;
    function HA(r, e) {
      if (!r)
        return !0;
      switch (r.type) {
        case "plain":
        case "quoteSingle":
        case "quoteDouble":
          break;
        case "alias":
          return !0;
        default:
          return !1;
      }
      if (e.proseWrap === "preserve")
        return r.position.start.line === r.position.end.line;
      if (/\\$/m.test(e.originalText.slice(r.position.start.offset, r.position.end.offset)))
        return !1;
      switch (e.proseWrap) {
        case "never":
          return !r.value.includes(`
`);
        case "always":
          return !/[\n ]/.test(r.value);
        default:
          return !1;
      }
    }
    var YO = function(e, t, n, u, a) {
      var i = e.key, o = e.value, s = WA(i), c = WA(o);
      if (s && c)
        return ": ";
      var l = u("key"), p = function(S) {
        return S.key.content && S.key.content.type === "alias";
      }(e) ? " " : "";
      if (c)
        return e.type === "flowMappingItem" && t.type === "flowMapping" ? l : e.type !== "mappingItem" || !HA(i.content, a) || lD(i.content) || t.tag && t.tag.value === "tag:yaml.org,2002:set" ? ["? ", $a(2, l)] : [l, p, ":"];
      var f = u("value");
      if (s)
        return [": ", $a(2, f)];
      if (Gp(o) || !GA(i.content))
        return ["? ", $a(2, l), Wp, XO("", n.map(u, "value", "leadingComments").map(function(S) {
          return [S, Wp];
        })), ": ", $a(2, f)];
      if (function(S) {
        if (!S)
          return !0;
        switch (S.type) {
          case "plain":
          case "quoteDouble":
          case "quoteSingle":
            return S.position.start.line === S.position.end.line;
          case "alias":
            return !0;
          default:
            return !1;
        }
      }(i.content) && !Gp(i.content) && !VA(i.content) && !lD(i.content) && !pD(i) && !Gp(o.content) && !VA(o.content) && !pD(o) && HA(o.content, a))
        return [l, p, ": ", f];
      var d = Symbol("mappingKey"), D = $A([qA("? "), $A($a(2, l), { id: d })]), v = [Wp, ": ", $a(2, f)], y = [p, ":"];
      Gp(o.content) || pD(o) && o.content && !UA(o.content, ["mapping", "sequence"]) || t.type === "mapping" && lD(i.content) && GA(o.content) || UA(o.content, ["mapping", "sequence"]) && o.content.tag === null && o.content.anchor === null ? y.push(Wp) : o.content && y.push(JO), y.push(f);
      var b = $a(a.tabWidth, y);
      return zO([[D, qA(v, b, { groupId: d })]]);
    }, Ou = fe.builders, KO = Ou.dedent, zA = Ou.dedentToRoot, QO = Ou.fill, fD = Ou.hardline, ZO = Ou.join, _O = Ou.line, XA = Ou.literalline, e7 = Ou.markAsRoot, r7 = fe.utils.getDocParts, t7 = _e.getAncestorCount, n7 = _e.getBlockValueLineContents, u7 = _e.hasIndicatorComment, a7 = _e.isLastDescendantNode, i7 = _e.isNode, JA = ja.alignWithSpaces, o7 = function(e, t, n) {
      var u = e.getValue(), a = t7(e, function(v) {
        return i7(v, ["sequence", "mapping"]);
      }), i = a7(e), o = [u.type === "blockFolded" ? ">" : "|"];
      u.indent !== null && o.push(u.indent.toString()), u.chomping !== "clip" && o.push(u.chomping === "keep" ? "+" : "-"), u7(u) && o.push(" ", t("indicatorComment"));
      var s = n7(u, { parentIndent: a, isLastDescendant: i, options: n }), c = [], l = le(s.entries()), p;
      try {
        for (l.s(); !(p = l.n()).done; ) {
          var f = ke(p.value, 2), d = f[0], D = f[1];
          d === 0 && c.push(fD), c.push(QO(r7(ZO(_O, D)))), d !== s.length - 1 ? c.push(D.length === 0 ? fD : e7(XA)) : u.chomping === "keep" && i && c.push(zA(D.length === 0 ? fD : XA));
        }
      } catch (v) {
        l.e(v);
      } finally {
        l.f();
      }
      return u.indent === null ? o.push(KO(JA(n.tabWidth, c))) : o.push(zA(JA(u.indent - 1 + a, c))), o;
    }, Lu = fe.builders, s7 = Lu.breakParent, c7 = Lu.fill, l7 = Lu.group, fr = Lu.hardline, sn = Lu.join, p7 = Lu.line, f7 = Lu.lineSuffix, d7 = Lu.literalline, h7 = fe.utils.getDocParts, D7 = X.replaceEndOfLineWith, g7 = X.isPreviousLineEmpty, m7 = SA.insertPragma, v7 = SA.isPragma, dD = wO.locStart, y7 = _e.getFlowScalarLineContents, YA = _e.getLastDescendantNode, E7 = _e.hasLeadingComments, KA = _e.hasMiddleComments, co = _e.hasTrailingComment, hD = _e.hasEndComments, C7 = _e.hasPrettierIgnore, A7 = _e.isLastDescendantNode, lo = _e.isNode, b7 = _e.isInlineNode, QA = ja.alignWithSpaces, F7 = ja.printNextEmptyLine, S7 = ja.shouldPrintEndComments, T7 = jA.printFlowMapping, x7 = jA.printFlowSequence;
    function ZA(r, e) {
      return co(r) || e && (e.head.children.length > 0 || hD(e.head));
    }
    function oc(r, e, t) {
      var n = y7(r, e, t);
      return sn(fr, n.map(function(u) {
        return c7(h7(sn(p7, u)));
      }));
    }
    var w7 = { preprocess: PO, embed: BO, print: function(e, t, n) {
      var u = e.getValue(), a = [];
      u.type !== "mappingValue" && E7(u) && a.push([sn(fr, e.map(n, "leadingComments")), fr]);
      var i = u.tag, o = u.anchor;
      i && a.push(n("tag")), i && o && a.push(" "), o && a.push(n("anchor"));
      var s = "";
      lo(u, ["mapping", "sequence", "comment", "directive", "mappingItem", "sequenceItem"]) && !A7(e) && (s = F7(e, t.originalText)), (i || o) && (lo(u, ["sequence", "mapping"]) && !KA(u) ? a.push(fr) : a.push(" ")), KA(u) && a.push([u.middleComments.length === 1 ? "" : fr, sn(fr, e.map(n, "middleComments")), fr]);
      var c = e.getParentNode();
      return C7(e) ? a.push(D7(t.originalText.slice(u.position.start.offset, u.position.end.offset).trimEnd(), d7)) : a.push(l7(function(l, p, f, d, D) {
        switch (l.type) {
          case "root": {
            var v = l.children, y = [];
            f.each(function($, K) {
              var ne = v[K], ue = v[K + 1];
              K !== 0 && y.push(fr), y.push(D()), ZA(ne, ue) ? (y.push(fr, "..."), co(ne) && y.push(" ", D("trailingComment"))) : ue && !co(ue.head) && y.push(fr, "---");
            }, "children");
            var b = YA(l);
            return lo(b, ["blockLiteral", "blockFolded"]) && b.chomping === "keep" || y.push(fr), y;
          }
          case "document": {
            var S = [];
            return function($, K, ne, ue) {
              return ne.children[0] === $ && /---(\s|$)/.test(ue.originalText.slice(dD($), dD($) + 4)) || $.head.children.length > 0 || hD($.head) || co($.head) ? "head" : ZA($, K) ? !1 : !!K && "root";
            }(l, p.children[f.getName() + 1], p, d) === "head" && ((l.head.children.length > 0 || l.head.endComments.length > 0) && S.push(D("head")), co(l.head) ? S.push(["---", " ", D(["head", "trailingComment"])]) : S.push("---")), function($) {
              return $.body.children.length > 0 || hD($.body);
            }(l) && S.push(D("body")), sn(fr, S);
          }
          case "documentHead":
            return sn(fr, [].concat(_(f.map(D, "children")), _(f.map(D, "endComments"))));
          case "documentBody": {
            var F = l.children, x = l.endComments, w = "";
            if (F.length > 0 && x.length > 0) {
              var A = YA(l);
              lo(A, ["blockFolded", "blockLiteral"]) ? A.chomping !== "keep" && (w = [fr, fr]) : w = fr;
            }
            return [sn(fr, f.map(D, "children")), w, sn(fr, f.map(D, "endComments"))];
          }
          case "directive":
            return ["%", sn(" ", [l.name].concat(_(l.parameters)))];
          case "comment":
            return ["#", l.value];
          case "alias":
            return ["*", l.value];
          case "tag":
            return d.originalText.slice(l.position.start.offset, l.position.end.offset);
          case "anchor":
            return ["&", l.value];
          case "plain":
            return oc(l.type, d.originalText.slice(l.position.start.offset, l.position.end.offset), d);
          case "quoteDouble":
          case "quoteSingle": {
            var k = "'", O = '"', q = d.originalText.slice(l.position.start.offset + 1, l.position.end.offset - 1);
            if (l.type === "quoteSingle" && q.includes("\\") || l.type === "quoteDouble" && /\\[^"]/.test(q)) {
              var H = l.type === "quoteDouble" ? O : k;
              return [H, oc(l.type, q, d), H];
            }
            if (q.includes(O))
              return [k, oc(l.type, l.type === "quoteDouble" ? q.replace(/\\"/g, O).replace(/'/g, k.repeat(2)) : q, d), k];
            if (q.includes(k))
              return [O, oc(l.type, l.type === "quoteSingle" ? q.replace(/''/g, k) : q, d), O];
            var R = d.singleQuote ? k : O;
            return [R, oc(l.type, q, d), R];
          }
          case "blockFolded":
          case "blockLiteral":
            return o7(f, D, d);
          case "mapping":
          case "sequence":
            return sn(fr, f.map(D, "children"));
          case "sequenceItem":
            return ["- ", QA(2, l.content ? D("content") : "")];
          case "mappingKey":
          case "mappingValue":
            return l.content ? D("content") : "";
          case "mappingItem":
          case "flowMappingItem":
            return YO(l, p, f, D, d);
          case "flowMapping":
            return T7(f, D, d);
          case "flowSequence":
            return x7(f, D, d);
          case "flowSequenceItem":
            return D("content");
          default:
            throw new Error("Unexpected node type ".concat(l.type));
        }
      }(u, c, e, t, n))), co(u) && !lo(u, ["document", "documentHead"]) && a.push(f7([u.type !== "mappingValue" || u.content ? " " : "", c.type === "mappingKey" && e.getParentNode(2).type === "mapping" && b7(u) ? "" : s7, n("trailingComment")])), S7(u) && a.push(QA(u.type === "sequenceItem" ? 2 : 0, [fr, sn(fr, e.map(function(l) {
        return [g7(t.originalText, l.getValue(), dD) ? fr : "", n()];
      }, "endComments"))])), a.push(s), a;
    }, massageAstNode: function(e, t) {
      if (lo(t))
        switch (delete t.position, t.type) {
          case "comment":
            if (v7(t.value))
              return null;
            break;
          case "quoteDouble":
          case "quoteSingle":
            t.type = "quote";
        }
    }, insertPragma: m7 }, B7 = { bracketSpacing: Yn.bracketSpacing, singleQuote: Yn.singleQuote, proseWrap: Yn.proseWrap }, k7 = [U9, RP, ZP, u4, G4, xO, { languages: [lr({ name: "YAML", type: "data", color: "#cb171e", tmScope: "source.yaml", aliases: ["yml"], extensions: [".yml", ".mir", ".reek", ".rviz", ".sublime-syntax", ".syntax", ".yaml", ".yaml-tmlanguage", ".yaml.sed", ".yml.mysql"], filenames: [".clang-format", ".clang-tidy", ".gemrc", "glide.lock", "yarn.lock"], aceMode: "yaml", codemirrorMode: "yaml", codemirrorMimeType: "text/x-yaml", languageId: 407 }, function(r) {
      return { since: "1.14.0", parsers: ["yaml"], vscodeLanguageIds: ["yaml", "ansible", "home-assistant"], filenames: [].concat(_(r.filenames.filter(function(e) {
        return e !== "yarn.lock";
      })), [".prettierrc"]) };
    })], printers: { yaml: w7 }, options: B7, parsers: { get yaml() {
      return {}.parsers.yaml;
    } } }], N7 = re.version, P7 = si.getSupportInfo, I7 = k7.map(function(r) {
      return M(r, ["parsers"]);
    });
    function qa(r) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
      return function() {
        for (var t = arguments.length, n = new Array(t), u = 0; u < t; u++)
          n[u] = arguments[u];
        var a = n[e] || {}, i = a.plugins || [];
        return n[e] = Object.assign({}, a, { plugins: [].concat(_(I7), _(Array.isArray(i) ? i : Object.values(i))) }), r.apply(void 0, n);
      };
    }
    var DD = qa(Li.formatWithCursor);
    return { formatWithCursor: DD, format: function(e, t) {
      return DD(e, t).formatted;
    }, check: function(e, t) {
      var n = DD(e, t), u = n.formatted;
      return u === e;
    }, doc: fe, getSupportInfo: qa(P7, 0), version: N7, util: PT, __debug: { parse: qa(Li.parse), formatAST: qa(Li.formatAST), formatDoc: qa(Li.formatDoc), printToDoc: qa(Li.printToDoc), printDocToString: qa(Li.printDocToString) } };
  });
})(zF);
var T$ = /* @__PURE__ */ Hb(zF.exports), R$ = vL(2)(function(B, N) {
  return B === !1 ? N : B === "dedent" || B === !0 ? FL(N) : T$.format(N, { parser: B, plugins: [S$], htmlWhitespaceSensitivity: "ignore" }).trim();
});
export {
  R$ as formatter
};
//# sourceMappingURL=formatter-0d5cb0eb.3431e2ff.js.map
