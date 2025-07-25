import {
  require_react
} from "./chunk-D2KY6O3O.js";
import {
  __toESM
} from "./chunk-V4OQ3NZ2.js";

// node_modules/react-type-animation/dist/esm/index.es.js
var import_react = __toESM(require_react());
function i(e2, t2, r2, n2) {
  return new (r2 || (r2 = Promise))(function(o2, a2) {
    function i2(e3) {
      try {
        c2(n2.next(e3));
      } catch (e4) {
        a2(e4);
      }
    }
    function u2(e3) {
      try {
        c2(n2.throw(e3));
      } catch (e4) {
        a2(e4);
      }
    }
    function c2(e3) {
      var t3;
      e3.done ? o2(e3.value) : (t3 = e3.value, t3 instanceof r2 ? t3 : new r2(function(e4) {
        e4(t3);
      })).then(i2, u2);
    }
    c2((n2 = n2.apply(e2, t2 || [])).next());
  });
}
function u(e2, t2) {
  var r2, n2, o2, a2, i2 = { label: 0, sent: function() {
    if (1 & o2[0]) throw o2[1];
    return o2[1];
  }, trys: [], ops: [] };
  return a2 = { next: u2(0), throw: u2(1), return: u2(2) }, "function" == typeof Symbol && (a2[Symbol.iterator] = function() {
    return this;
  }), a2;
  function u2(a3) {
    return function(u3) {
      return function(a4) {
        if (r2) throw new TypeError("Generator is already executing.");
        for (; i2; ) try {
          if (r2 = 1, n2 && (o2 = 2 & a4[0] ? n2.return : a4[0] ? n2.throw || ((o2 = n2.return) && o2.call(n2), 0) : n2.next) && !(o2 = o2.call(n2, a4[1])).done) return o2;
          switch (n2 = 0, o2 && (a4 = [2 & a4[0], o2.value]), a4[0]) {
            case 0:
            case 1:
              o2 = a4;
              break;
            case 4:
              return i2.label++, { value: a4[1], done: false };
            case 5:
              i2.label++, n2 = a4[1], a4 = [0];
              continue;
            case 7:
              a4 = i2.ops.pop(), i2.trys.pop();
              continue;
            default:
              if (!(o2 = i2.trys, (o2 = o2.length > 0 && o2[o2.length - 1]) || 6 !== a4[0] && 2 !== a4[0])) {
                i2 = 0;
                continue;
              }
              if (3 === a4[0] && (!o2 || a4[1] > o2[0] && a4[1] < o2[3])) {
                i2.label = a4[1];
                break;
              }
              if (6 === a4[0] && i2.label < o2[1]) {
                i2.label = o2[1], o2 = a4;
                break;
              }
              if (o2 && i2.label < o2[2]) {
                i2.label = o2[2], i2.ops.push(a4);
                break;
              }
              o2[2] && i2.ops.pop(), i2.trys.pop();
              continue;
          }
          a4 = t2.call(e2, i2);
        } catch (e3) {
          a4 = [6, e3], n2 = 0;
        } finally {
          r2 = o2 = 0;
        }
        if (5 & a4[0]) throw a4[1];
        return { value: a4[0] ? a4[1] : void 0, done: true };
      }([a3, u3]);
    };
  }
}
function c(e2) {
  var t2 = "function" == typeof Symbol && Symbol.iterator, r2 = t2 && e2[t2], n2 = 0;
  if (r2) return r2.call(e2);
  if (e2 && "number" == typeof e2.length) return { next: function() {
    return e2 && n2 >= e2.length && (e2 = void 0), { value: e2 && e2[n2++], done: !e2 };
  } };
  throw new TypeError(t2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function l(e2, t2) {
  var r2 = "function" == typeof Symbol && e2[Symbol.iterator];
  if (!r2) return e2;
  var n2, o2, a2 = r2.call(e2), i2 = [];
  try {
    for (; (void 0 === t2 || t2-- > 0) && !(n2 = a2.next()).done; ) i2.push(n2.value);
  } catch (e3) {
    o2 = { error: e3 };
  } finally {
    try {
      n2 && !n2.done && (r2 = a2.return) && r2.call(a2);
    } finally {
      if (o2) throw o2.error;
    }
  }
  return i2;
}
function s(e2, t2, r2) {
  if (r2 || 2 === arguments.length) for (var n2, o2 = 0, a2 = t2.length; o2 < a2; o2++) !n2 && o2 in t2 || (n2 || (n2 = Array.prototype.slice.call(t2, 0, o2)), n2[o2] = t2[o2]);
  return e2.concat(n2 || Array.prototype.slice.call(t2));
}
function f(e2, t2, r2, n2, o2) {
  for (var a2 = [], f2 = 5; f2 < arguments.length; f2++) a2[f2 - 5] = arguments[f2];
  return i(this, void 0, void 0, function() {
    var i2, f3, h2, y2, v2, b2;
    return u(this, function(u2) {
      switch (u2.label) {
        case 0:
          u2.trys.push([0, 12, 13, 14]), i2 = c(a2), f3 = i2.next(), u2.label = 1;
        case 1:
          if (f3.done) return [3, 11];
          switch (h2 = f3.value, typeof h2) {
            case "string":
              return [3, 2];
            case "number":
              return [3, 4];
            case "function":
              return [3, 6];
          }
          return [3, 8];
        case 2:
          return [4, d(e2, t2, h2, r2, n2, o2)];
        case 3:
          return u2.sent(), [3, 10];
        case 4:
          return [4, p(h2)];
        case 5:
          return u2.sent(), [3, 10];
        case 6:
          return [4, h2.apply(void 0, s([e2, t2, r2, n2, o2], l(a2), false))];
        case 7:
          return u2.sent(), [3, 10];
        case 8:
          return [4, h2];
        case 9:
          u2.sent(), u2.label = 10;
        case 10:
          return f3 = i2.next(), [3, 1];
        case 11:
          return [3, 14];
        case 12:
          return y2 = u2.sent(), v2 = { error: y2 }, [3, 14];
        case 13:
          try {
            f3 && !f3.done && (b2 = i2.return) && b2.call(i2);
          } finally {
            if (v2) throw v2.error;
          }
          return [7];
        case 14:
          return [2];
      }
    });
  });
}
function d(e2, t2, r2, n2, o2, a2) {
  return i(this, void 0, void 0, function() {
    var i2, c2;
    return u(this, function(u2) {
      switch (u2.label) {
        case 0:
          return i2 = e2.textContent || "", c2 = function(e3, t3) {
            var r3 = l(t3).slice(0);
            return s(s([], l(e3), false), [NaN], false).findIndex(function(e4, t4) {
              return r3[t4] !== e4;
            });
          }(i2, r2), [4, h(e2, s(s([], l(v(i2, t2, c2)), false), l(y(r2, t2, c2)), false), n2, o2, a2)];
        case 1:
          return u2.sent(), [2];
      }
    });
  });
}
function p(e2) {
  return i(this, void 0, void 0, function() {
    return u(this, function(t2) {
      switch (t2.label) {
        case 0:
          return [4, new Promise(function(t3) {
            return setTimeout(t3, e2);
          })];
        case 1:
          return t2.sent(), [2];
      }
    });
  });
}
function h(e2, t2, r2, n2, o2) {
  return i(this, void 0, void 0, function() {
    var a2, i2, s2, f2, d2, h2, y2, v2, b2, m2, w, g, x;
    return u(this, function(S) {
      switch (S.label) {
        case 0:
          if (a2 = t2, o2) {
            for (i2 = 0, s2 = 1; s2 < t2.length; s2++) if (f2 = l([t2[s2 - 1], t2[s2]], 2), d2 = f2[0], (h2 = f2[1]).length > d2.length || "" === h2) {
              i2 = s2;
              break;
            }
            a2 = t2.slice(i2, t2.length);
          }
          S.label = 1;
        case 1:
          S.trys.push([1, 6, 7, 8]), y2 = c(function(e3) {
            var t3, r3, n3, o3, a3, i3, l2;
            return u(this, function(s3) {
              switch (s3.label) {
                case 0:
                  t3 = function(e4) {
                    return u(this, function(t4) {
                      switch (t4.label) {
                        case 0:
                          return [4, { op: function(t5) {
                            return requestAnimationFrame(function() {
                              return t5.textContent = e4;
                            });
                          }, opCode: function(t5) {
                            var r4 = t5.textContent || "";
                            return "" === e4 || r4.length > e4.length ? "DELETE" : "WRITING";
                          } }];
                        case 1:
                          return t4.sent(), [2];
                      }
                    });
                  }, s3.label = 1;
                case 1:
                  s3.trys.push([1, 6, 7, 8]), r3 = c(e3), n3 = r3.next(), s3.label = 2;
                case 2:
                  return n3.done ? [3, 5] : (o3 = n3.value, [5, t3(o3)]);
                case 3:
                  s3.sent(), s3.label = 4;
                case 4:
                  return n3 = r3.next(), [3, 2];
                case 5:
                  return [3, 8];
                case 6:
                  return a3 = s3.sent(), i3 = { error: a3 }, [3, 8];
                case 7:
                  try {
                    n3 && !n3.done && (l2 = r3.return) && l2.call(r3);
                  } finally {
                    if (i3) throw i3.error;
                  }
                  return [7];
                case 8:
                  return [2];
              }
            });
          }(a2)), v2 = y2.next(), S.label = 2;
        case 2:
          return v2.done ? [3, 5] : (b2 = v2.value, m2 = "WRITING" === b2.opCode(e2) ? r2 + r2 * (Math.random() - 0.5) : n2 + n2 * (Math.random() - 0.5), b2.op(e2), [4, p(m2)]);
        case 3:
          S.sent(), S.label = 4;
        case 4:
          return v2 = y2.next(), [3, 2];
        case 5:
          return [3, 8];
        case 6:
          return w = S.sent(), g = { error: w }, [3, 8];
        case 7:
          try {
            v2 && !v2.done && (x = y2.return) && x.call(y2);
          } finally {
            if (g) throw g.error;
          }
          return [7];
        case 8:
          return [2];
      }
    });
  });
}
function y(e2, t2, r2) {
  var n2, o2;
  return void 0 === r2 && (r2 = 0), u(this, function(a2) {
    switch (a2.label) {
      case 0:
        n2 = t2(e2), o2 = n2.length, a2.label = 1;
      case 1:
        return r2 < o2 ? [4, n2.slice(0, ++r2).join("")] : [3, 3];
      case 2:
        return a2.sent(), [3, 1];
      case 3:
        return [2];
    }
  });
}
function v(e2, t2, r2) {
  var n2, o2;
  return void 0 === r2 && (r2 = 0), u(this, function(a2) {
    switch (a2.label) {
      case 0:
        n2 = t2(e2), o2 = n2.length, a2.label = 1;
      case 1:
        return o2 > r2 ? [4, n2.slice(0, --o2).join("")] : [3, 3];
      case 2:
        return a2.sent(), [3, 1];
      case 3:
        return [2];
    }
  });
}
var b = "index-module_type__E-SaG";
!function(e2, t2) {
  void 0 === t2 && (t2 = {});
  var r2 = t2.insertAt;
  if (e2 && "undefined" != typeof document) {
    var n2 = document.head || document.getElementsByTagName("head")[0], o2 = document.createElement("style");
    o2.type = "text/css", "top" === r2 && n2.firstChild ? n2.insertBefore(o2, n2.firstChild) : n2.appendChild(o2), o2.styleSheet ? o2.styleSheet.cssText = e2 : o2.appendChild(document.createTextNode(e2));
  }
}(".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n");
var m = (0, import_react.memo)((0, import_react.forwardRef)(function(o2, a2) {
  var i2 = o2.sequence, u2 = o2.repeat, c2 = o2.className, d2 = o2.speed, p2 = void 0 === d2 ? 40 : d2, h2 = o2.deletionSpeed, y2 = o2.omitDeletionAnimation, v2 = void 0 !== y2 && y2, m2 = o2.preRenderFirstString, w = void 0 !== m2 && m2, g = o2.wrapper, x = void 0 === g ? "span" : g, S = o2.splitter, E = void 0 === S ? function(e2) {
    return s([], l(e2), false);
  } : S, _ = o2.cursor, k = void 0 === _ || _, O = o2.style, T = function(e2, t2) {
    var r2 = {};
    for (var n2 in e2) Object.prototype.hasOwnProperty.call(e2, n2) && t2.indexOf(n2) < 0 && (r2[n2] = e2[n2]);
    if (null != e2 && "function" == typeof Object.getOwnPropertySymbols) {
      var o3 = 0;
      for (n2 = Object.getOwnPropertySymbols(e2); o3 < n2.length; o3++) t2.indexOf(n2[o3]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, n2[o3]) && (r2[n2[o3]] = e2[n2[o3]]);
    }
    return r2;
  }(o2, ["sequence", "repeat", "className", "speed", "deletionSpeed", "omitDeletionAnimation", "preRenderFirstString", "wrapper", "splitter", "cursor", "style"]), A = T["aria-label"], C = T["aria-hidden"], N = T.role;
  h2 || (h2 = p2);
  var P = new Array(2).fill(40);
  [p2, h2].forEach(function(e2, t2) {
    switch (typeof e2) {
      case "number":
        P[t2] = Math.abs(e2 - 100);
        break;
      case "object":
        var r2 = e2.type, n2 = e2.value;
        if ("number" != typeof n2) break;
        if ("keyStrokeDelayInMs" === r2) P[t2] = n2;
    }
  });
  var j, I, G, D, M, R, q = P[0], F = P[1], B = function(e2, r2) {
    void 0 === r2 && (r2 = null);
    var o3 = (0, import_react.useRef)(r2);
    return (0, import_react.useEffect)(function() {
      e2 && ("function" == typeof e2 ? e2(o3.current) : e2.current = o3.current);
    }, [e2]), o3;
  }(a2), Q = b;
  j = c2 ? "".concat(k ? Q + " " : "").concat(c2) : k ? Q : "", I = (0, import_react.useRef)(function() {
    var e2, t2 = i2;
    u2 === 1 / 0 ? e2 = f : "number" == typeof u2 && (t2 = Array(1 + u2).fill(i2).flat());
    var r2 = e2 ? s(s([], l(t2), false), [e2], false) : s([], l(t2), false);
    return f.apply(void 0, s([B.current, E, q, F, v2], l(r2), false)), function() {
      B.current;
    };
  }), G = (0, import_react.useRef)(), D = (0, import_react.useRef)(false), M = (0, import_react.useRef)(false), R = l((0, import_react.useState)(0), 2)[1], D.current && (M.current = true), (0, import_react.useEffect)(function() {
    return D.current || (G.current = I.current(), D.current = true), R(function(e2) {
      return e2 + 1;
    }), function() {
      M.current && G.current && G.current();
    };
  }, []);
  var W = x, L = w ? i2.find(function(e2) {
    return "string" == typeof e2;
  }) || "" : null;
  return import_react.default.createElement(W, { "aria-hidden": C, "aria-label": A, role: N, style: O, className: j, children: A ? import_react.default.createElement("span", { "aria-hidden": "true", ref: B, children: L }) : L, ref: A ? void 0 : B });
}), function(e2, t2) {
  return true;
});
export {
  m as TypeAnimation
};
//# sourceMappingURL=react-type-animation.js.map
