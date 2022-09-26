import { a1 as ee, l as te } from "./iframe.6f0d8ddb.js";
import { U as yr, V as Tr, _ as ne, W as wr, X as oe, Y as le, Z as ie, $ as se } from "./Props.e30088b6.js";
import "./es.string.from-code-point.bdf0f098.js";
import "./es.regexp.flags.b11df199.js";
import { useState as ce, useCallback as ve } from "react";
import { j as X, a as Er } from "./jsx-runtime.1e0c78f5.js";
import "./string.15091591.js";
import "./es.map.constructor.be929aeb.js";
import "./es.number.to-fixed.963eadaa.js";
function ue(r, a, e) {
  return a in r ? Object.defineProperty(r, a, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[a] = e, r;
}
function xa(r, a) {
  return fe(r) || ge(r, a) || de(r, a) || pe();
}
function pe() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function de(r, a) {
  if (!!r) {
    if (typeof r == "string")
      return aa(r, a);
    var e = Object.prototype.toString.call(r).slice(8, -1);
    if (e === "Object" && r.constructor && (e = r.constructor.name), e === "Map" || e === "Set")
      return Array.from(r);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return aa(r, a);
  }
}
function aa(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, t = new Array(a); e < a; e++)
    t[e] = r[e];
  return t;
}
function ge(r, a) {
  var e = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (e != null) {
    var t = [], o = !0, s = !1, p, l;
    try {
      for (e = e.call(r); !(o = (p = e.next()).done) && (t.push(p.value), !(a && t.length === a)); o = !0)
        ;
    } catch (f) {
      s = !0, l = f;
    } finally {
      try {
        !o && e.return != null && e.return();
      } finally {
        if (s)
          throw l;
      }
    }
    return t;
  }
}
function fe(r) {
  if (Array.isArray(r))
    return r;
}
function W(r) {
  return W = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
    return typeof a;
  } : function(a) {
    return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
  }, W(r);
}
var Sa = $r;
$r.displayName = "jsx";
$r.aliases = [];
function $r(r) {
  (function(a) {
    var e = a.util.clone(a.languages.javascript), t = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source, o = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source, s = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
    function p(x, m) {
      return x = x.replace(/<S>/g, function() {
        return t;
      }).replace(/<BRACES>/g, function() {
        return o;
      }).replace(/<SPREAD>/g, function() {
        return s;
      }), RegExp(x, m);
    }
    s = p(s).source, a.languages.jsx = a.languages.extend("markup", e), a.languages.jsx.tag.pattern = p(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source), a.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/, a.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/, a.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, a.languages.jsx.tag.inside.comment = e.comment, a.languages.insertBefore("inside", "attr-name", {
      spread: {
        pattern: p(/<SPREAD>/.source),
        inside: a.languages.jsx
      }
    }, a.languages.jsx.tag), a.languages.insertBefore("inside", "special-attr", {
      script: {
        pattern: p(/=<BRACES>/.source),
        alias: "language-javascript",
        inside: {
          "script-punctuation": {
            pattern: /^=(?=\{)/,
            alias: "punctuation"
          },
          rest: a.languages.jsx
        }
      }
    }, a.languages.jsx.tag);
    var l = function x(m) {
      return m ? typeof m == "string" ? m : typeof m.content == "string" ? m.content : m.content.map(x).join("") : "";
    }, f = function x(m) {
      for (var d = [], h = 0; h < m.length; h++) {
        var b = m[h], L = !1;
        if (typeof b != "string" && (b.type === "tag" && b.content[0] && b.content[0].type === "tag" ? b.content[0].content[0].content === "</" ? d.length > 0 && d[d.length - 1].tagName === l(b.content[0].content[1]) && d.pop() : b.content[b.content.length - 1].content === "/>" || d.push({
          tagName: l(b.content[0].content[1]),
          openedBraces: 0
        }) : d.length > 0 && b.type === "punctuation" && b.content === "{" ? d[d.length - 1].openedBraces++ : d.length > 0 && d[d.length - 1].openedBraces > 0 && b.type === "punctuation" && b.content === "}" ? d[d.length - 1].openedBraces-- : L = !0), (L || typeof b == "string") && d.length > 0 && d[d.length - 1].openedBraces === 0) {
          var A = l(b);
          h < m.length - 1 && (typeof m[h + 1] == "string" || m[h + 1].type === "plain-text") && (A += l(m[h + 1]), m.splice(h + 1, 1)), h > 0 && (typeof m[h - 1] == "string" || m[h - 1].type === "plain-text") && (A = l(m[h - 1]) + A, m.splice(h - 1, 1), h--), m[h] = new a.Token("plain-text", A, null, A);
        }
        b.content && typeof b.content != "string" && x(b.content);
      }
    };
    a.hooks.add("after-tokenize", function(x) {
      x.language !== "jsx" && x.language !== "tsx" || f(x.tokens);
    });
  })(r);
}
var me = Sa, he = Dr;
Dr.displayName = "bash";
Dr.aliases = ["shell"];
function Dr(r) {
  (function(a) {
    var e = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b", t = {
      pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
      lookbehind: !0,
      alias: "punctuation",
      inside: null
    }, o = {
      bash: t,
      environment: {
        pattern: RegExp("\\$" + e),
        alias: "constant"
      },
      variable: [
        {
          pattern: /\$?\(\([\s\S]+?\)\)/,
          greedy: !0,
          inside: {
            variable: [{
              pattern: /(^\$\(\([\s\S]+)\)\)/,
              lookbehind: !0
            }, /^\$\(\(/],
            number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
            operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
            punctuation: /\(\(?|\)\)?|,|;/
          }
        },
        {
          pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
          greedy: !0,
          inside: {
            variable: /^\$\(|^`|\)$|`$/
          }
        },
        {
          pattern: /\$\{[^}]+\}/,
          greedy: !0,
          inside: {
            operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
            punctuation: /[\[\]]/,
            environment: {
              pattern: RegExp("(\\{)" + e),
              lookbehind: !0,
              alias: "constant"
            }
          }
        },
        /\$(?:\w+|[#?*!@$])/
      ],
      entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
    };
    a.languages.bash = {
      shebang: {
        pattern: /^#!\s*\/.*/,
        alias: "important"
      },
      comment: {
        pattern: /(^|[^"{\\$])#.*/,
        lookbehind: !0
      },
      "function-name": [
        {
          pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
          lookbehind: !0,
          alias: "function"
        },
        {
          pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
          alias: "function"
        }
      ],
      "for-or-select": {
        pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
        alias: "variable",
        lookbehind: !0
      },
      "assign-left": {
        pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
        inside: {
          environment: {
            pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + e),
            lookbehind: !0,
            alias: "constant"
          }
        },
        alias: "variable",
        lookbehind: !0
      },
      string: [
        {
          pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
          lookbehind: !0,
          greedy: !0,
          inside: o
        },
        {
          pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
          lookbehind: !0,
          greedy: !0,
          inside: {
            bash: t
          }
        },
        {
          pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
          lookbehind: !0,
          greedy: !0,
          inside: o
        },
        {
          pattern: /(^|[^$\\])'[^']*'/,
          lookbehind: !0,
          greedy: !0
        },
        {
          pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
          greedy: !0,
          inside: {
            entity: o.entity
          }
        }
      ],
      environment: {
        pattern: RegExp("\\$?" + e),
        alias: "constant"
      },
      variable: o.variable,
      function: {
        pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
        lookbehind: !0
      },
      keyword: {
        pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
        lookbehind: !0
      },
      builtin: {
        pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
        lookbehind: !0,
        alias: "class-name"
      },
      boolean: {
        pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
        lookbehind: !0
      },
      "file-descriptor": {
        pattern: /\B&\d\b/,
        alias: "important"
      },
      operator: {
        pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
        inside: {
          "file-descriptor": {
            pattern: /^\d/,
            alias: "important"
          }
        }
      },
      punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
      number: {
        pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
        lookbehind: !0
      }
    }, t.inside = a.languages.bash;
    for (var s = ["comment", "function-name", "for-or-select", "assign-left", "string", "environment", "function", "keyword", "builtin", "boolean", "file-descriptor", "operator", "punctuation", "number"], p = o.variable[1].inside, l = 0; l < s.length; l++)
      p[s[l]] = a.languages.bash[s[l]];
    a.languages.shell = a.languages.bash;
  })(r);
}
var be = he, qa = Cr;
Cr.displayName = "css";
Cr.aliases = [];
function Cr(r) {
  (function(a) {
    var e = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    a.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
        inside: {
          rule: /^@[\w-]+/,
          "selector-function-argument": {
            pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: !0,
            alias: "selector"
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: !0
          }
        }
      },
      url: {
        pattern: RegExp("\\burl\\((?:" + e.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
        greedy: !0,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: {
            pattern: RegExp("^" + e.source + "$"),
            alias: "url"
          }
        }
      },
      selector: {
        pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + e.source + ")*(?=\\s*\\{)"),
        lookbehind: !0
      },
      string: {
        pattern: e,
        greedy: !0
      },
      property: {
        pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: !0
      },
      important: /!important\b/i,
      function: {
        pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
        lookbehind: !0
      },
      punctuation: /[(){};:,]/
    }, a.languages.css.atrule.inside.rest = a.languages.css;
    var t = a.languages.markup;
    t && (t.tag.addInlined("style", "css"), t.tag.addAttribute("style", "css"));
  })(r);
}
var ye = qa, we = Rr;
Rr.displayName = "jsExtras";
Rr.aliases = [];
function Rr(r) {
  (function(a) {
    a.languages.insertBefore("javascript", "function-variable", {
      "method-variable": {
        pattern: RegExp("(\\.\\s*)" + a.languages.javascript["function-variable"].pattern.source),
        lookbehind: !0,
        alias: ["function-variable", "method", "function", "property-access"]
      }
    }), a.languages.insertBefore("javascript", "function", {
      method: {
        pattern: RegExp("(\\.\\s*)" + a.languages.javascript.function.source),
        lookbehind: !0,
        alias: ["function", "property-access"]
      }
    }), a.languages.insertBefore("javascript", "constant", {
      "known-class-name": [{
        pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
        alias: "class-name"
      }, {
        pattern: /\b(?:[A-Z]\w*)Error\b/,
        alias: "class-name"
      }]
    });
    function e(f, x) {
      return RegExp(f.replace(/<ID>/g, function() {
        return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
      }), x);
    }
    a.languages.insertBefore("javascript", "keyword", {
      imports: {
        pattern: e(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),
        lookbehind: !0,
        inside: a.languages.javascript
      },
      exports: {
        pattern: e(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),
        lookbehind: !0,
        inside: a.languages.javascript
      }
    }), a.languages.javascript.keyword.unshift({
      pattern: /\b(?:as|default|export|from|import)\b/,
      alias: "module"
    }, {
      pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
      alias: "control-flow"
    }, {
      pattern: /\bnull\b/,
      alias: ["null", "nil"]
    }, {
      pattern: /\bundefined\b/,
      alias: "nil"
    }), a.languages.insertBefore("javascript", "operator", {
      spread: {
        pattern: /\.{3}/,
        alias: "operator"
      },
      arrow: {
        pattern: /=>/,
        alias: "operator"
      }
    }), a.languages.insertBefore("javascript", "punctuation", {
      "property-access": {
        pattern: e(/(\.\s*)#?<ID>/.source),
        lookbehind: !0
      },
      "maybe-class-name": {
        pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
        lookbehind: !0
      },
      dom: {
        pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
        alias: "variable"
      },
      console: {
        pattern: /\bconsole(?=\s*\.)/,
        alias: "class-name"
      }
    });
    for (var t = ["function", "function-variable", "method", "method-variable", "property-access"], o = 0; o < t.length; o++) {
      var s = t[o], p = a.languages.javascript[s];
      a.util.type(p) === "RegExp" && (p = a.languages.javascript[s] = {
        pattern: p
      });
      var l = p.inside || {};
      p.inside = l, l["maybe-class-name"] = /^[A-Z][\s\S]*/;
    }
  })(r);
}
var xe = we, Se = Ir;
Ir.displayName = "json";
Ir.aliases = ["webmanifest"];
function Ir(r) {
  r.languages.json = {
    property: {
      pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
      lookbehind: !0,
      greedy: !0
    },
    string: {
      pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
      lookbehind: !0,
      greedy: !0
    },
    comment: {
      pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
      greedy: !0
    },
    number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    punctuation: /[{}[\],]/,
    operator: /:/,
    boolean: /\b(?:false|true)\b/,
    null: {
      pattern: /\bnull\b/,
      alias: "keyword"
    }
  }, r.languages.webmanifest = r.languages.json;
}
var qe = Se, Ae = Or;
Or.displayName = "graphql";
Or.aliases = [];
function Or(r) {
  r.languages.graphql = {
    comment: /#.*/,
    description: {
      pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
      greedy: !0,
      alias: "string",
      inside: {
        "language-markdown": {
          pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
          lookbehind: !0,
          inside: r.languages.markdown
        }
      }
    },
    string: {
      pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
      greedy: !0
    },
    number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    boolean: /\b(?:false|true)\b/,
    variable: /\$[a-z_]\w*/i,
    directive: {
      pattern: /@[a-z_]\w*/i,
      alias: "function"
    },
    "attr-name": {
      pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
      greedy: !0
    },
    "atom-input": {
      pattern: /\b[A-Z]\w*Input\b/,
      alias: "class-name"
    },
    scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
    constant: /\b[A-Z][A-Z_\d]*\b/,
    "class-name": {
      pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
      lookbehind: !0
    },
    fragment: {
      pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
      lookbehind: !0,
      alias: "function"
    },
    "definition-mutation": {
      pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
      lookbehind: !0,
      alias: "function"
    },
    "definition-query": {
      pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
      lookbehind: !0,
      alias: "function"
    },
    keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
    operator: /[!=|&]|\.{3}/,
    "property-query": /\w+(?=\s*\()/,
    object: /\w+(?=\s*\{)/,
    punctuation: /[!(){}\[\]:=,]/,
    property: /\w+/
  }, r.hooks.add("after-tokenize", function(e) {
    if (e.language !== "graphql")
      return;
    var t = e.tokens.filter(function(q) {
      return typeof q != "string" && q.type !== "comment" && q.type !== "scalar";
    }), o = 0;
    function s(q) {
      return t[o + q];
    }
    function p(q, E) {
      E = E || 0;
      for (var c = 0; c < q.length; c++) {
        var n = s(c + E);
        if (!n || n.type !== q[c])
          return !1;
      }
      return !0;
    }
    function l(q, E) {
      for (var c = 1, n = o; n < t.length; n++) {
        var v = t[n], u = v.content;
        if (v.type === "punctuation" && typeof u == "string") {
          if (q.test(u))
            c++;
          else if (E.test(u) && (c--, c === 0))
            return n;
        }
      }
      return -1;
    }
    function f(q, E) {
      var c = q.alias;
      c ? Array.isArray(c) || (q.alias = c = [c]) : q.alias = c = [], c.push(E);
    }
    for (; o < t.length; ) {
      var x = t[o++];
      if (x.type === "keyword" && x.content === "mutation") {
        var m = [];
        if (p(["definition-mutation", "punctuation"]) && s(1).content === "(") {
          o += 2;
          var d = l(/^\($/, /^\)$/);
          if (d === -1)
            continue;
          for (; o < d; o++) {
            var h = s(0);
            h.type === "variable" && (f(h, "variable-input"), m.push(h.content));
          }
          o = d + 1;
        }
        if (p(["punctuation", "property-query"]) && s(0).content === "{" && (o++, f(s(0), "property-mutation"), m.length > 0)) {
          var b = l(/^\{$/, /^\}$/);
          if (b === -1)
            continue;
          for (var L = o; L < b; L++) {
            var A = t[L];
            A.type === "variable" && m.indexOf(A.content) >= 0 && f(A, "variable-input");
          }
        }
      }
    }
  });
}
var Ee = Ae, Aa = Fr;
Fr.displayName = "markup";
Fr.aliases = ["html", "mathml", "svg", "xml", "ssml", "atom", "rss"];
function Fr(r) {
  r.languages.markup = {
    comment: {
      pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
      greedy: !0
    },
    prolog: {
      pattern: /<\?[\s\S]+?\?>/,
      greedy: !0
    },
    doctype: {
      pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: !0,
      inside: {
        "internal-subset": {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: !0,
          greedy: !0,
          inside: null
        },
        string: {
          pattern: /"[^"]*"|'[^']*'/,
          greedy: !0
        },
        punctuation: /^<!|>$|[[\]]/,
        "doctype-tag": /^DOCTYPE/i,
        name: /[^\s<>'"]+/
      }
    },
    cdata: {
      pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
      greedy: !0
    },
    tag: {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: !0,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/
          }
        },
        "special-attr": [],
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [{
              pattern: /^=/,
              alias: "attr-equals"
            }, /"|'/]
          }
        },
        punctuation: /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/
          }
        }
      }
    },
    entity: [{
      pattern: /&[\da-z]{1,8};/i,
      alias: "named-entity"
    }, /&#x?[\da-f]{1,8};/i]
  }, r.languages.markup.tag.inside["attr-value"].inside.entity = r.languages.markup.entity, r.languages.markup.doctype.inside["internal-subset"].inside = r.languages.markup, r.hooks.add("wrap", function(a) {
    a.type === "entity" && (a.attributes.title = a.content.value.replace(/&amp;/, "&"));
  }), Object.defineProperty(r.languages.markup.tag, "addInlined", {
    value: function(e, t) {
      var o = {};
      o["language-" + t] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: !0,
        inside: r.languages[t]
      }, o.cdata = /^<!\[CDATA\[|\]\]>$/i;
      var s = {
        "included-cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: o
        }
      };
      s["language-" + t] = {
        pattern: /[\s\S]+/,
        inside: r.languages[t]
      };
      var p = {};
      p[e] = {
        pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
          return e;
        }), "i"),
        lookbehind: !0,
        greedy: !0,
        inside: s
      }, r.languages.insertBefore("markup", "cdata", p);
    }
  }), Object.defineProperty(r.languages.markup.tag, "addAttribute", {
    value: function(e, t) {
      r.languages.markup.tag.inside["special-attr"].push({
        pattern: RegExp(/(^|["'\s])/.source + "(?:" + e + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
        lookbehind: !0,
        inside: {
          "attr-name": /^[^\s=]+/,
          "attr-value": {
            pattern: /=[\s\S]+/,
            inside: {
              value: {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: !0,
                alias: [t, "language-" + t],
                inside: r.languages[t]
              },
              punctuation: [{
                pattern: /^=/,
                alias: "attr-equals"
              }, /"|'/]
            }
          }
        }
      });
    }
  }), r.languages.html = r.languages.markup, r.languages.mathml = r.languages.markup, r.languages.svg = r.languages.markup, r.languages.xml = r.languages.extend("markup", {}), r.languages.ssml = r.languages.xml, r.languages.atom = r.languages.xml, r.languages.rss = r.languages.xml;
}
var ke = Aa, Le = Ur;
Ur.displayName = "markdown";
Ur.aliases = ["md"];
function Ur(r) {
  (function(a) {
    var e = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
    function t(d) {
      return d = d.replace(/<inner>/g, function() {
        return e;
      }), RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + d + ")");
    }
    var o = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source, s = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function() {
      return o;
    }), p = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
    a.languages.markdown = a.languages.extend("markup", {}), a.languages.insertBefore("markdown", "prolog", {
      "front-matter-block": {
        pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          punctuation: /^---|---$/,
          "front-matter": {
            pattern: /\S+(?:\s+\S+)*/,
            alias: ["yaml", "language-yaml"],
            inside: a.languages.yaml
          }
        }
      },
      blockquote: {
        pattern: /^>(?:[\t ]*>)*/m,
        alias: "punctuation"
      },
      table: {
        pattern: RegExp("^" + s + p + "(?:" + s + ")*", "m"),
        inside: {
          "table-data-rows": {
            pattern: RegExp("^(" + s + p + ")(?:" + s + ")*$"),
            lookbehind: !0,
            inside: {
              "table-data": {
                pattern: RegExp(o),
                inside: a.languages.markdown
              },
              punctuation: /\|/
            }
          },
          "table-line": {
            pattern: RegExp("^(" + s + ")" + p + "$"),
            lookbehind: !0,
            inside: {
              punctuation: /\||:?-{3,}:?/
            }
          },
          "table-header-row": {
            pattern: RegExp("^" + s + "$"),
            inside: {
              "table-header": {
                pattern: RegExp(o),
                alias: "important",
                inside: a.languages.markdown
              },
              punctuation: /\|/
            }
          }
        }
      },
      code: [{
        pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
        lookbehind: !0,
        alias: "keyword"
      }, {
        pattern: /^```[\s\S]*?^```$/m,
        greedy: !0,
        inside: {
          "code-block": {
            pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
            lookbehind: !0
          },
          "code-language": {
            pattern: /^(```).+/,
            lookbehind: !0
          },
          punctuation: /```/
        }
      }],
      title: [{
        pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
        alias: "important",
        inside: {
          punctuation: /==+$|--+$/
        }
      }, {
        pattern: /(^\s*)#.+/m,
        lookbehind: !0,
        alias: "important",
        inside: {
          punctuation: /^#+|#+$/
        }
      }],
      hr: {
        pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
        lookbehind: !0,
        alias: "punctuation"
      },
      list: {
        pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
        lookbehind: !0,
        alias: "punctuation"
      },
      "url-reference": {
        pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
        inside: {
          variable: {
            pattern: /^(!?\[)[^\]]+/,
            lookbehind: !0
          },
          string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
          punctuation: /^[\[\]!:]|[<>]/
        },
        alias: "url"
      },
      bold: {
        pattern: t(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),
        lookbehind: !0,
        greedy: !0,
        inside: {
          content: {
            pattern: /(^..)[\s\S]+(?=..$)/,
            lookbehind: !0,
            inside: {}
          },
          punctuation: /\*\*|__/
        }
      },
      italic: {
        pattern: t(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),
        lookbehind: !0,
        greedy: !0,
        inside: {
          content: {
            pattern: /(^.)[\s\S]+(?=.$)/,
            lookbehind: !0,
            inside: {}
          },
          punctuation: /[*_]/
        }
      },
      strike: {
        pattern: t(/(~~?)(?:(?!~)<inner>)+\2/.source),
        lookbehind: !0,
        greedy: !0,
        inside: {
          content: {
            pattern: /(^~~?)[\s\S]+(?=\1$)/,
            lookbehind: !0,
            inside: {}
          },
          punctuation: /~~?/
        }
      },
      "code-snippet": {
        pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
        lookbehind: !0,
        greedy: !0,
        alias: ["code", "keyword"]
      },
      url: {
        pattern: t(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),
        lookbehind: !0,
        greedy: !0,
        inside: {
          operator: /^!/,
          content: {
            pattern: /(^\[)[^\]]+(?=\])/,
            lookbehind: !0,
            inside: {}
          },
          variable: {
            pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
            lookbehind: !0
          },
          url: {
            pattern: /(^\]\()[^\s)]+/,
            lookbehind: !0
          },
          string: {
            pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
            lookbehind: !0
          }
        }
      }
    }), ["url", "bold", "italic", "strike"].forEach(function(d) {
      ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(h) {
        d !== h && (a.languages.markdown[d].inside.content.inside[h] = a.languages.markdown[h]);
      });
    }), a.hooks.add("after-tokenize", function(d) {
      if (d.language !== "markdown" && d.language !== "md")
        return;
      function h(b) {
        if (!(!b || typeof b == "string"))
          for (var L = 0, A = b.length; L < A; L++) {
            var q = b[L];
            if (q.type !== "code") {
              h(q.content);
              continue;
            }
            var E = q.content[1], c = q.content[3];
            if (E && c && E.type === "code-language" && c.type === "code-block" && typeof E.content == "string") {
              var n = E.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp");
              n = (/[a-z][\w-]*/i.exec(n) || [""])[0].toLowerCase();
              var v = "language-" + n;
              c.alias ? typeof c.alias == "string" ? c.alias = [c.alias, v] : c.alias.push(v) : c.alias = [v];
            }
          }
      }
      h(d.tokens);
    }), a.hooks.add("wrap", function(d) {
      if (d.type === "code-block") {
        for (var h = "", b = 0, L = d.classes.length; b < L; b++) {
          var A = d.classes[b], q = /language-(.+)/.exec(A);
          if (q) {
            h = q[1];
            break;
          }
        }
        var E = a.languages[h];
        if (E)
          d.content = a.highlight(m(d.content.value), E, h);
        else if (h && h !== "none" && a.plugins.autoloader) {
          var c = "md-" + new Date().valueOf() + "-" + Math.floor(Math.random() * 1e16);
          d.attributes.id = c, a.plugins.autoloader.loadLanguages(h, function() {
            var n = document.getElementById(c);
            n && (n.innerHTML = a.highlight(n.textContent, a.languages[h], h));
          });
        }
      }
    });
    var l = RegExp(a.languages.markup.tag.pattern.source, "gi"), f = {
      amp: "&",
      lt: "<",
      gt: ">",
      quot: '"'
    }, x = String.fromCodePoint || String.fromCharCode;
    function m(d) {
      var h = d.replace(l, "");
      return h = h.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(b, L) {
        if (L = L.toLowerCase(), L[0] === "#") {
          var A;
          return L[1] === "x" ? A = parseInt(L.slice(2), 16) : A = Number(L.slice(1)), x(A);
        } else {
          var q = f[L];
          return q || b;
        }
      }), h;
    }
    a.languages.md = a.languages.markdown;
  })(r);
}
var Ne = Le, Te = _r;
_r.displayName = "yaml";
_r.aliases = ["yml"];
function _r(r) {
  (function(a) {
    var e = /[*&][^\s[\]{},]+/, t = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/, o = "(?:" + t.source + "(?:[ 	]+" + e.source + ")?|" + e.source + "(?:[ 	]+" + t.source + ")?)", s = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function() {
      return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
    }), p = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
    function l(f, x) {
      x = (x || "").replace(/m/g, "") + "m";
      var m = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function() {
        return o;
      }).replace(/<<value>>/g, function() {
        return f;
      });
      return RegExp(m, x);
    }
    a.languages.yaml = {
      scalar: {
        pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function() {
          return o;
        })),
        lookbehind: !0,
        alias: "string"
      },
      comment: /#.*/,
      key: {
        pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function() {
          return o;
        }).replace(/<<key>>/g, function() {
          return "(?:" + s + "|" + p + ")";
        })),
        lookbehind: !0,
        greedy: !0,
        alias: "atrule"
      },
      directive: {
        pattern: /(^[ \t]*)%.+/m,
        lookbehind: !0,
        alias: "important"
      },
      datetime: {
        pattern: l(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),
        lookbehind: !0,
        alias: "number"
      },
      boolean: {
        pattern: l(/false|true/.source, "i"),
        lookbehind: !0,
        alias: "important"
      },
      null: {
        pattern: l(/null|~/.source, "i"),
        lookbehind: !0,
        alias: "important"
      },
      string: {
        pattern: l(p),
        lookbehind: !0,
        greedy: !0
      },
      number: {
        pattern: l(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"),
        lookbehind: !0
      },
      tag: t,
      important: e,
      punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
    }, a.languages.yml = a.languages.yaml;
  })(r);
}
var $e = Te, Ea = Br;
Br.displayName = "typescript";
Br.aliases = ["ts"];
function Br(r) {
  (function(a) {
    a.languages.typescript = a.languages.extend("javascript", {
      "class-name": {
        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
        lookbehind: !0,
        greedy: !0,
        inside: null
      },
      builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
    }), a.languages.typescript.keyword.push(
      /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
      /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
      /\btype\b(?=\s*(?:[\{*]|$))/
    ), delete a.languages.typescript.parameter, delete a.languages.typescript["literal-property"];
    var e = a.languages.extend("typescript", {});
    delete e["class-name"], a.languages.typescript["class-name"].inside = e, a.languages.insertBefore("typescript", "function", {
      decorator: {
        pattern: /@[$\w\xA0-\uFFFF]+/,
        inside: {
          at: {
            pattern: /^@/,
            alias: "operator"
          },
          function: /^[\s\S]+/
        }
      },
      "generic-function": {
        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
        greedy: !0,
        inside: {
          function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
          generic: {
            pattern: /<[\s\S]+/,
            alias: "class-name",
            inside: e
          }
        }
      }
    }), a.languages.ts = a.languages.typescript;
  })(r);
}
var De = Ea, Ce = Sa, Re = Ea, Ie = jr;
jr.displayName = "tsx";
jr.aliases = [];
function jr(r) {
  r.register(Ce), r.register(Re), function(a) {
    var e = a.util.clone(a.languages.typescript);
    a.languages.tsx = a.languages.extend("jsx", e), delete a.languages.tsx.parameter, delete a.languages.tsx["literal-property"];
    var t = a.languages.tsx.tag;
    t.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + "(?:" + t.pattern.source + ")", t.pattern.flags), t.lookbehind = !0;
  }(r);
}
var Oe = Ie;
function Fe(r, a) {
  if (r == null)
    return {};
  var e = se(r, a), t, o;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(r);
    for (o = 0; o < s.length; o++)
      t = s[o], !(a.indexOf(t) >= 0) && (!Object.prototype.propertyIsEnumerable.call(r, t) || (e[t] = r[t]));
  }
  return e;
}
function kr(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, t = new Array(a); e < a; e++)
    t[e] = r[e];
  return t;
}
function Ue(r) {
  if (Array.isArray(r))
    return kr(r);
}
function _e(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null)
    return Array.from(r);
}
function Be(r, a) {
  if (!!r) {
    if (typeof r == "string")
      return kr(r, a);
    var e = Object.prototype.toString.call(r).slice(8, -1);
    if (e === "Object" && r.constructor && (e = r.constructor.name), e === "Map" || e === "Set")
      return Array.from(r);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return kr(r, a);
  }
}
function je() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function He(r) {
  return Ue(r) || _e(r) || Be(r) || je();
}
function Ve(r, a, e) {
  return a in r ? Object.defineProperty(r, a, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[a] = e, r;
}
function rr(r) {
  for (var a = 1; a < arguments.length; a++) {
    var e = arguments[a] != null ? Object(arguments[a]) : {}, t = Object.keys(e);
    typeof Object.getOwnPropertySymbols == "function" && t.push.apply(t, Object.getOwnPropertySymbols(e).filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.forEach(function(o) {
      Ve(r, o, e[o]);
    });
  }
  return r;
}
function Ge(r) {
  var a = r.length;
  if (a === 0 || a === 1)
    return r;
  if (a === 2)
    return [r[0], r[1], "".concat(r[0], ".").concat(r[1]), "".concat(r[1], ".").concat(r[0])];
  if (a === 3)
    return [r[0], r[1], r[2], "".concat(r[0], ".").concat(r[1]), "".concat(r[0], ".").concat(r[2]), "".concat(r[1], ".").concat(r[0]), "".concat(r[1], ".").concat(r[2]), "".concat(r[2], ".").concat(r[0]), "".concat(r[2], ".").concat(r[1]), "".concat(r[0], ".").concat(r[1], ".").concat(r[2]), "".concat(r[0], ".").concat(r[2], ".").concat(r[1]), "".concat(r[1], ".").concat(r[0], ".").concat(r[2]), "".concat(r[1], ".").concat(r[2], ".").concat(r[0]), "".concat(r[2], ".").concat(r[0], ".").concat(r[1]), "".concat(r[2], ".").concat(r[1], ".").concat(r[0])];
  if (a >= 4)
    return [r[0], r[1], r[2], r[3], "".concat(r[0], ".").concat(r[1]), "".concat(r[0], ".").concat(r[2]), "".concat(r[0], ".").concat(r[3]), "".concat(r[1], ".").concat(r[0]), "".concat(r[1], ".").concat(r[2]), "".concat(r[1], ".").concat(r[3]), "".concat(r[2], ".").concat(r[0]), "".concat(r[2], ".").concat(r[1]), "".concat(r[2], ".").concat(r[3]), "".concat(r[3], ".").concat(r[0]), "".concat(r[3], ".").concat(r[1]), "".concat(r[3], ".").concat(r[2]), "".concat(r[0], ".").concat(r[1], ".").concat(r[2]), "".concat(r[0], ".").concat(r[1], ".").concat(r[3]), "".concat(r[0], ".").concat(r[2], ".").concat(r[1]), "".concat(r[0], ".").concat(r[2], ".").concat(r[3]), "".concat(r[0], ".").concat(r[3], ".").concat(r[1]), "".concat(r[0], ".").concat(r[3], ".").concat(r[2]), "".concat(r[1], ".").concat(r[0], ".").concat(r[2]), "".concat(r[1], ".").concat(r[0], ".").concat(r[3]), "".concat(r[1], ".").concat(r[2], ".").concat(r[0]), "".concat(r[1], ".").concat(r[2], ".").concat(r[3]), "".concat(r[1], ".").concat(r[3], ".").concat(r[0]), "".concat(r[1], ".").concat(r[3], ".").concat(r[2]), "".concat(r[2], ".").concat(r[0], ".").concat(r[1]), "".concat(r[2], ".").concat(r[0], ".").concat(r[3]), "".concat(r[2], ".").concat(r[1], ".").concat(r[0]), "".concat(r[2], ".").concat(r[1], ".").concat(r[3]), "".concat(r[2], ".").concat(r[3], ".").concat(r[0]), "".concat(r[2], ".").concat(r[3], ".").concat(r[1]), "".concat(r[3], ".").concat(r[0], ".").concat(r[1]), "".concat(r[3], ".").concat(r[0], ".").concat(r[2]), "".concat(r[3], ".").concat(r[1], ".").concat(r[0]), "".concat(r[3], ".").concat(r[1], ".").concat(r[2]), "".concat(r[3], ".").concat(r[2], ".").concat(r[0]), "".concat(r[3], ".").concat(r[2], ".").concat(r[1]), "".concat(r[0], ".").concat(r[1], ".").concat(r[2], ".").concat(r[3]), "".concat(r[0], ".").concat(r[1], ".").concat(r[3], ".").concat(r[2]), "".concat(r[0], ".").concat(r[2], ".").concat(r[1], ".").concat(r[3]), "".concat(r[0], ".").concat(r[2], ".").concat(r[3], ".").concat(r[1]), "".concat(r[0], ".").concat(r[3], ".").concat(r[1], ".").concat(r[2]), "".concat(r[0], ".").concat(r[3], ".").concat(r[2], ".").concat(r[1]), "".concat(r[1], ".").concat(r[0], ".").concat(r[2], ".").concat(r[3]), "".concat(r[1], ".").concat(r[0], ".").concat(r[3], ".").concat(r[2]), "".concat(r[1], ".").concat(r[2], ".").concat(r[0], ".").concat(r[3]), "".concat(r[1], ".").concat(r[2], ".").concat(r[3], ".").concat(r[0]), "".concat(r[1], ".").concat(r[3], ".").concat(r[0], ".").concat(r[2]), "".concat(r[1], ".").concat(r[3], ".").concat(r[2], ".").concat(r[0]), "".concat(r[2], ".").concat(r[0], ".").concat(r[1], ".").concat(r[3]), "".concat(r[2], ".").concat(r[0], ".").concat(r[3], ".").concat(r[1]), "".concat(r[2], ".").concat(r[1], ".").concat(r[0], ".").concat(r[3]), "".concat(r[2], ".").concat(r[1], ".").concat(r[3], ".").concat(r[0]), "".concat(r[2], ".").concat(r[3], ".").concat(r[0], ".").concat(r[1]), "".concat(r[2], ".").concat(r[3], ".").concat(r[1], ".").concat(r[0]), "".concat(r[3], ".").concat(r[0], ".").concat(r[1], ".").concat(r[2]), "".concat(r[3], ".").concat(r[0], ".").concat(r[2], ".").concat(r[1]), "".concat(r[3], ".").concat(r[1], ".").concat(r[0], ".").concat(r[2]), "".concat(r[3], ".").concat(r[1], ".").concat(r[2], ".").concat(r[0]), "".concat(r[3], ".").concat(r[2], ".").concat(r[0], ".").concat(r[1]), "".concat(r[3], ".").concat(r[2], ".").concat(r[1], ".").concat(r[0])];
}
var Ar = {};
function ze(r) {
  if (r.length === 0 || r.length === 1)
    return r;
  var a = r.join(".");
  return Ar[a] || (Ar[a] = Ge(r)), Ar[a];
}
function Me(r) {
  var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = arguments.length > 2 ? arguments[2] : void 0, t = r.filter(function(s) {
    return s !== "token";
  }), o = ze(t);
  return o.reduce(function(s, p) {
    return rr({}, s, e[p]);
  }, a);
}
function ea(r) {
  return r.join(" ");
}
function Pe(r, a) {
  var e = 0;
  return function(t) {
    return e += 1, t.map(function(o, s) {
      return ka({
        node: o,
        stylesheet: r,
        useInlineStyles: a,
        key: "code-segment-".concat(e, "-").concat(s)
      });
    });
  };
}
function ka(r) {
  var a = r.node, e = r.stylesheet, t = r.style, o = t === void 0 ? {} : t, s = r.useInlineStyles, p = r.key, l = a.properties, f = a.type, x = a.tagName, m = a.value;
  if (f === "text")
    return m;
  if (x) {
    var d = Pe(e, s), h;
    if (!s)
      h = rr({}, l, {
        className: ea(l.className)
      });
    else {
      var b = Object.keys(e).reduce(function(E, c) {
        return c.split(".").forEach(function(n) {
          E.includes(n) || E.push(n);
        }), E;
      }, []), L = l.className && l.className.includes("token") ? ["token"] : [], A = l.className && L.concat(l.className.filter(function(E) {
        return !b.includes(E);
      }));
      h = rr({}, l, {
        className: ea(A) || void 0,
        style: Me(l.className, Object.assign({}, l.style, o), e)
      });
    }
    var q = d(a.children);
    return /* @__PURE__ */ X(x, {
      ...h,
      children: q
    }, p);
  }
}
var Ze = function(a, e) {
  var t = a.listLanguages();
  return t.indexOf(e) !== -1;
}, Ye = /\n/g;
function We(r) {
  return r.match(Ye);
}
function Je(r) {
  var a = r.lines, e = r.startingLineNumber, t = r.style;
  return a.map(function(o, s) {
    var p = s + e;
    return /* @__PURE__ */ X("span", {
      className: "react-syntax-highlighter-line-number",
      style: typeof t == "function" ? t(p) : t,
      children: "".concat(p, `
`)
    }, "line-".concat(s));
  });
}
function Ke(r) {
  var a = r.codeString, e = r.codeStyle, t = r.containerStyle, o = t === void 0 ? {
    float: "left",
    paddingRight: "10px"
  } : t, s = r.numberStyle, p = s === void 0 ? {} : s, l = r.startingLineNumber;
  return /* @__PURE__ */ X("code", {
    style: Object.assign({}, e, o),
    children: Je({
      lines: a.replace(/\n$/, "").split(`
`),
      style: p,
      startingLineNumber: l
    })
  });
}
function Xe(r) {
  return "".concat(r.toString().length, ".25em");
}
function La(r, a) {
  return {
    type: "element",
    tagName: "span",
    properties: {
      key: "line-number--".concat(r),
      className: ["comment", "linenumber", "react-syntax-highlighter-line-number"],
      style: a
    },
    children: [{
      type: "text",
      value: r
    }]
  };
}
function Na(r, a, e) {
  var t = {
    display: "inline-block",
    minWidth: Xe(e),
    paddingRight: "1em",
    textAlign: "right",
    userSelect: "none"
  }, o = typeof r == "function" ? r(a) : r, s = rr({}, t, o);
  return s;
}
function br(r) {
  var a = r.children, e = r.lineNumber, t = r.lineNumberStyle, o = r.largestLineNumber, s = r.showInlineLineNumbers, p = r.lineProps, l = p === void 0 ? {} : p, f = r.className, x = f === void 0 ? [] : f, m = r.showLineNumbers, d = r.wrapLongLines, h = typeof l == "function" ? l(e) : l;
  if (h.className = x, e && s) {
    var b = Na(t, e, o);
    a.unshift(La(e, b));
  }
  return d & m && (h.style = rr({}, h.style, {
    display: "flex"
  })), {
    type: "element",
    tagName: "span",
    properties: h,
    children: a
  };
}
function Ta(r) {
  for (var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], t = 0; t < r.length; t++) {
    var o = r[t];
    if (o.type === "text")
      e.push(br({
        children: [o],
        className: He(new Set(a))
      }));
    else if (o.children) {
      var s = a.concat(o.properties.className);
      e = e.concat(Ta(o.children, s));
    }
  }
  return e;
}
function Qe(r, a, e, t, o, s, p, l, f) {
  var x, m = Ta(r.value), d = [], h = -1, b = 0;
  function L(u, i) {
    var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return br({
      children: u,
      lineNumber: i,
      lineNumberStyle: l,
      largestLineNumber: p,
      showInlineLineNumbers: o,
      lineProps: e,
      className: g,
      showLineNumbers: t,
      wrapLongLines: f
    });
  }
  function A(u, i) {
    if (t && i && o) {
      var g = Na(l, i, p);
      u.unshift(La(i, g));
    }
    return u;
  }
  function q(u, i) {
    var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return a || g.length > 0 ? L(u, i, g) : A(u, i);
  }
  for (var E = function() {
    var i = m[b], g = i.children[0].value, y = We(g);
    if (y) {
      var w = g.split(`
`);
      w.forEach(function(S, N) {
        var R = t && d.length + s, I = {
          type: "text",
          value: "".concat(S, `
`)
        };
        if (N === 0) {
          var G = m.slice(h + 1, b).concat(br({
            children: [I],
            className: i.properties.className
          })), j = q(G, R);
          d.push(j);
        } else if (N === w.length - 1) {
          var _ = m[b + 1] && m[b + 1].children && m[b + 1].children[0];
          if (_) {
            var J = {
              type: "text",
              value: "".concat(S)
            }, T = br({
              children: [J],
              className: i.properties.className
            });
            m.splice(b + 1, 0, T);
          } else {
            var O = [I], C = q(O, R, i.properties.className);
            d.push(C);
          }
        } else {
          var $ = [I], F = q($, R, i.properties.className);
          d.push(F);
        }
      }), h = b;
    }
    b++;
  }; b < m.length; )
    E();
  if (h !== m.length - 1) {
    var c = m.slice(h + 1, m.length);
    if (c && c.length) {
      var n = t && d.length + s, v = q(c, n);
      d.push(v);
    }
  }
  return a ? d : (x = []).concat.apply(x, d);
}
function rt(r) {
  var a = r.rows, e = r.stylesheet, t = r.useInlineStyles;
  return a.map(function(o, s) {
    return ka({
      node: o,
      stylesheet: e,
      useInlineStyles: t,
      key: "code-segement".concat(s)
    });
  });
}
function $a(r) {
  return r && typeof r.highlightAuto < "u";
}
function at(r) {
  var a = r.astGenerator, e = r.language, t = r.code, o = r.defaultCodeValue;
  if ($a(a)) {
    var s = Ze(a, e);
    return e === "text" ? {
      value: o,
      language: "text"
    } : s ? a.highlight(e, t) : a.highlightAuto(t);
  }
  try {
    return e && e !== "text" ? {
      value: a.highlight(t, e)
    } : {
      value: o
    };
  } catch {
    return {
      value: o
    };
  }
}
function et(r, a) {
  return function(t) {
    var o = t.language, s = t.children, p = t.style, l = p === void 0 ? a : p, f = t.customStyle, x = f === void 0 ? {} : f, m = t.codeTagProps, d = m === void 0 ? {
      className: o ? "language-".concat(o) : void 0,
      style: rr({}, l['code[class*="language-"]'], l['code[class*="language-'.concat(o, '"]')])
    } : m, h = t.useInlineStyles, b = h === void 0 ? !0 : h, L = t.showLineNumbers, A = L === void 0 ? !1 : L, q = t.showInlineLineNumbers, E = q === void 0 ? !0 : q, c = t.startingLineNumber, n = c === void 0 ? 1 : c, v = t.lineNumberContainerStyle, u = t.lineNumberStyle, i = u === void 0 ? {} : u, g = t.wrapLines, y = t.wrapLongLines, w = y === void 0 ? !1 : y, S = t.lineProps, N = S === void 0 ? {} : S, R = t.renderer, I = t.PreTag, G = I === void 0 ? "pre" : I, j = t.CodeTag, _ = j === void 0 ? "code" : j, J = t.code, T = J === void 0 ? Array.isArray(s) ? s[0] : s : J, O = t.astGenerator, C = Fe(t, ["language", "children", "style", "customStyle", "codeTagProps", "useInlineStyles", "showLineNumbers", "showInlineLineNumbers", "startingLineNumber", "lineNumberContainerStyle", "lineNumberStyle", "wrapLines", "wrapLongLines", "lineProps", "renderer", "PreTag", "CodeTag", "code", "astGenerator"]);
    O = O || r;
    var $ = A ? /* @__PURE__ */ X(Ke, {
      containerStyle: v,
      codeStyle: d.style || {},
      numberStyle: i,
      startingLineNumber: n,
      codeString: T
    }) : null, F = l.hljs || l['pre[class*="language-"]'] || {
      backgroundColor: "#fff"
    }, nr = $a(O) ? "hljs" : "prismjs", H = b ? Object.assign({}, C, {
      style: Object.assign({}, F, x)
    }) : Object.assign({}, C, {
      className: C.className ? "".concat(nr, " ").concat(C.className) : nr,
      style: Object.assign({}, x)
    });
    if (!O)
      return /* @__PURE__ */ Er(G, {
        ...H,
        children: [$, /* @__PURE__ */ X(_, {
          ...d,
          children: T
        })]
      });
    (g === void 0 && R || w) && (g = !0), R = R || rt;
    var Y = [{
      type: "text",
      value: T
    }], z = at({
      astGenerator: O,
      language: o,
      code: T,
      defaultCodeValue: Y
    });
    z.language === null && (z.value = Y);
    var K = z.value.length + n, sr = Qe(z, g, N, A, E, n, K, i, w);
    return w ? d.style = rr({}, d.style, {
      whiteSpace: "pre-wrap"
    }) : d.style = rr({}, d.style, {
      whiteSpace: "pre"
    }), /* @__PURE__ */ X(G, {
      ...H,
      children: /* @__PURE__ */ Er(_, {
        ...d,
        children: [!E && $, R({
          rows: sr,
          stylesheet: l,
          useInlineStyles: b
        })]
      })
    });
  };
}
var tt = ot, nt = Object.prototype.hasOwnProperty;
function ot() {
  for (var r = {}, a = 0; a < arguments.length; a++) {
    var e = arguments[a];
    for (var t in e)
      nt.call(e, t) && (r[t] = e[t]);
  }
  return r;
}
var Da = Ca, Hr = Ca.prototype;
Hr.space = null;
Hr.normal = {};
Hr.property = {};
function Ca(r, a, e) {
  this.property = r, this.normal = a, e && (this.space = e);
}
var ta = tt, lt = Da, it = st;
function st(r) {
  for (var a = r.length, e = [], t = [], o = -1, s, p; ++o < a; )
    s = r[o], e.push(s.property), t.push(s.normal), p = s.space;
  return new lt(ta.apply(null, e), ta.apply(null, t), p);
}
var Vr = ct;
function ct(r) {
  return r.toLowerCase();
}
var Ra = Ia, P = Ia.prototype;
P.space = null;
P.attribute = null;
P.property = null;
P.boolean = !1;
P.booleanish = !1;
P.overloadedBoolean = !1;
P.number = !1;
P.commaSeparated = !1;
P.spaceSeparated = !1;
P.commaOrSpaceSeparated = !1;
P.mustUseProperty = !1;
P.defined = !1;
function Ia(r, a) {
  this.property = r, this.attribute = a;
}
var Q = {}, vt = 0;
Q.boolean = tr();
Q.booleanish = tr();
Q.overloadedBoolean = tr();
Q.number = tr();
Q.spaceSeparated = tr();
Q.commaSeparated = tr();
Q.commaOrSpaceSeparated = tr();
function tr() {
  return Math.pow(2, ++vt);
}
var Oa = Ra, na = Q, Fa = Gr;
Gr.prototype = new Oa();
Gr.prototype.defined = !0;
var Ua = ["boolean", "booleanish", "overloadedBoolean", "number", "commaSeparated", "spaceSeparated", "commaOrSpaceSeparated"], ut = Ua.length;
function Gr(r, a, e, t) {
  var o = -1, s;
  for (oa(this, "space", t), Oa.call(this, r, a); ++o < ut; )
    s = Ua[o], oa(this, s, (e & na[s]) === na[s]);
}
function oa(r, a, e) {
  e && (r[a] = e);
}
var la = Vr, pt = Da, dt = Fa, dr = gt;
function gt(r) {
  var a = r.space, e = r.mustUseProperty || [], t = r.attributes || {}, o = r.properties, s = r.transform, p = {}, l = {}, f, x;
  for (f in o)
    x = new dt(f, s(t, f), o[f], a), e.indexOf(f) !== -1 && (x.mustUseProperty = !0), p[f] = x, l[la(f)] = f, l[la(x.attribute)] = f;
  return new pt(p, l, a);
}
var ft = dr, mt = ft({
  space: "xlink",
  transform: ht,
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
});
function ht(r, a) {
  return "xlink:" + a.slice(5).toLowerCase();
}
var bt = dr, yt = bt({
  space: "xml",
  transform: wt,
  properties: {
    xmlLang: null,
    xmlBase: null,
    xmlSpace: null
  }
});
function wt(r, a) {
  return "xml:" + a.slice(3).toLowerCase();
}
var xt = St;
function St(r, a) {
  return a in r ? r[a] : a;
}
var qt = xt, _a = At;
function At(r, a) {
  return qt(r, a.toLowerCase());
}
var Et = dr, kt = _a, Lt = Et({
  space: "xmlns",
  attributes: {
    xmlnsxlink: "xmlns:xlink"
  },
  transform: kt,
  properties: {
    xmlns: null,
    xmlnsXLink: null
  }
}), zr = Q, Nt = dr, V = zr.booleanish, M = zr.number, er = zr.spaceSeparated, Tt = Nt({
  transform: $t,
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: V,
    ariaAutoComplete: null,
    ariaBusy: V,
    ariaChecked: V,
    ariaColCount: M,
    ariaColIndex: M,
    ariaColSpan: M,
    ariaControls: er,
    ariaCurrent: null,
    ariaDescribedBy: er,
    ariaDetails: null,
    ariaDisabled: V,
    ariaDropEffect: er,
    ariaErrorMessage: null,
    ariaExpanded: V,
    ariaFlowTo: er,
    ariaGrabbed: V,
    ariaHasPopup: null,
    ariaHidden: V,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: er,
    ariaLevel: M,
    ariaLive: null,
    ariaModal: V,
    ariaMultiLine: V,
    ariaMultiSelectable: V,
    ariaOrientation: null,
    ariaOwns: er,
    ariaPlaceholder: null,
    ariaPosInSet: M,
    ariaPressed: V,
    ariaReadOnly: V,
    ariaRelevant: null,
    ariaRequired: V,
    ariaRoleDescription: er,
    ariaRowCount: M,
    ariaRowIndex: M,
    ariaRowSpan: M,
    ariaSelected: V,
    ariaSetSize: M,
    ariaSort: null,
    ariaValueMax: M,
    ariaValueMin: M,
    ariaValueNow: M,
    ariaValueText: null,
    role: null
  }
});
function $t(r, a) {
  return a === "role" ? a : "aria-" + a.slice(4).toLowerCase();
}
var ir = Q, Dt = dr, Ct = _a, k = ir.boolean, Rt = ir.overloadedBoolean, cr = ir.booleanish, D = ir.number, B = ir.spaceSeparated, mr = ir.commaSeparated, It = Dt({
  space: "html",
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  transform: Ct,
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    abbr: null,
    accept: mr,
    acceptCharset: B,
    accessKey: B,
    action: null,
    allow: null,
    allowFullScreen: k,
    allowPaymentRequest: k,
    allowUserMedia: k,
    alt: null,
    as: null,
    async: k,
    autoCapitalize: null,
    autoComplete: B,
    autoFocus: k,
    autoPlay: k,
    capture: k,
    charSet: null,
    checked: k,
    cite: null,
    className: B,
    cols: D,
    colSpan: null,
    content: null,
    contentEditable: cr,
    controls: k,
    controlsList: B,
    coords: D | mr,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: k,
    defer: k,
    dir: null,
    dirName: null,
    disabled: k,
    download: Rt,
    draggable: cr,
    encType: null,
    enterKeyHint: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: k,
    formTarget: null,
    headers: B,
    height: D,
    hidden: k,
    high: D,
    href: null,
    hrefLang: null,
    htmlFor: B,
    httpEquiv: B,
    id: null,
    imageSizes: null,
    imageSrcSet: mr,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: k,
    itemId: null,
    itemProp: B,
    itemRef: B,
    itemScope: k,
    itemType: B,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: k,
    low: D,
    manifest: null,
    max: null,
    maxLength: D,
    media: null,
    method: null,
    min: null,
    minLength: D,
    multiple: k,
    muted: k,
    name: null,
    nonce: null,
    noModule: k,
    noValidate: k,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforePrint: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextMenu: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: k,
    optimum: D,
    pattern: null,
    ping: B,
    placeholder: null,
    playsInline: k,
    poster: null,
    preload: null,
    readOnly: k,
    referrerPolicy: null,
    rel: B,
    required: k,
    reversed: k,
    rows: D,
    rowSpan: D,
    sandbox: B,
    scope: null,
    scoped: k,
    seamless: k,
    selected: k,
    shape: null,
    size: D,
    sizes: null,
    slot: null,
    span: D,
    spellCheck: cr,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: mr,
    start: D,
    step: null,
    style: null,
    tabIndex: D,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: k,
    useMap: null,
    value: cr,
    width: D,
    wrap: null,
    align: null,
    aLink: null,
    archive: B,
    axis: null,
    background: null,
    bgColor: null,
    border: D,
    borderColor: null,
    bottomMargin: D,
    cellPadding: null,
    cellSpacing: null,
    char: null,
    charOff: null,
    classId: null,
    clear: null,
    code: null,
    codeBase: null,
    codeType: null,
    color: null,
    compact: k,
    declare: k,
    event: null,
    face: null,
    frame: null,
    frameBorder: null,
    hSpace: D,
    leftMargin: D,
    link: null,
    longDesc: null,
    lowSrc: null,
    marginHeight: D,
    marginWidth: D,
    noResize: k,
    noHref: k,
    noShade: k,
    noWrap: k,
    object: null,
    profile: null,
    prompt: null,
    rev: null,
    rightMargin: D,
    rules: null,
    scheme: null,
    scrolling: cr,
    standby: null,
    summary: null,
    text: null,
    topMargin: D,
    valueType: null,
    version: null,
    vAlign: null,
    vLink: null,
    vSpace: D,
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: k,
    disableRemotePlayback: k,
    prefix: null,
    property: null,
    results: D,
    security: null,
    unselectable: null
  }
}), Ot = it, Ft = mt, Ut = yt, _t = Lt, Bt = Tt, jt = It, Ht = Ot([Ut, Ft, _t, Bt, jt]), Vt = Vr, Gt = Fa, zt = Ra, Mr = "data", Mt = Yt, Pt = /^data[-\w.:]+$/i, Ba = /-[a-z]/g, Zt = /[A-Z]/g;
function Yt(r, a) {
  var e = Vt(a), t = a, o = zt;
  return e in r.normal ? r.property[r.normal[e]] : (e.length > 4 && e.slice(0, 4) === Mr && Pt.test(a) && (a.charAt(4) === "-" ? t = Wt(a) : a = Jt(a), o = Gt), new o(t, a));
}
function Wt(r) {
  var a = r.slice(5).replace(Ba, Xt);
  return Mr + a.charAt(0).toUpperCase() + a.slice(1);
}
function Jt(r) {
  var a = r.slice(4);
  return Ba.test(a) ? r : (a = a.replace(Zt, Kt), a.charAt(0) !== "-" && (a = "-" + a), Mr + a);
}
function Kt(r) {
  return "-" + r.toLowerCase();
}
function Xt(r) {
  return r.charAt(1).toUpperCase();
}
var Qt = rn, ia = /[#.]/g;
function rn(r, a) {
  for (var e = r || "", t = a || "div", o = {}, s = 0, p, l, f; s < e.length; )
    ia.lastIndex = s, f = ia.exec(e), p = e.slice(s, f ? f.index : e.length), p && (l ? l === "#" ? o.id = p : o.className ? o.className.push(p) : o.className = [p] : t = p, s += p.length), f && (l = f[0], s++);
  return {
    type: "element",
    tagName: t,
    properties: o,
    children: []
  };
}
var Pr = {};
Pr.parse = tn;
Pr.stringify = nn;
var sa = "", an = " ", en = /[ \t\n\r\f]+/g;
function tn(r) {
  var a = String(r || sa).trim();
  return a === sa ? [] : a.split(en);
}
function nn(r) {
  return r.join(an).trim();
}
var Zr = {};
Zr.parse = on;
Zr.stringify = ln;
var Lr = ",", ca = " ", ur = "";
function on(r) {
  for (var a = [], e = String(r || ur), t = e.indexOf(Lr), o = 0, s = !1, p; !s; )
    t === -1 && (t = e.length, s = !0), p = e.slice(o, t).trim(), (p || !s) && a.push(p), o = t + 1, t = e.indexOf(Lr, o);
  return a;
}
function ln(r, a) {
  var e = a || {}, t = e.padLeft === !1 ? ur : ca, o = e.padRight ? ca : ur;
  return r[r.length - 1] === ur && (r = r.concat(ur)), r.join(o + Lr + t).trim();
}
var sn = Mt, va = Vr, cn = Qt, ua = Pr.parse, pa = Zr.parse, vn = pn, un = {}.hasOwnProperty;
function pn(r, a, e) {
  var t = e ? hn(e) : null;
  return o;
  function o(p, l) {
    var f = cn(p, a), x = Array.prototype.slice.call(arguments, 2), m = f.tagName.toLowerCase(), d;
    if (f.tagName = t && un.call(t, m) ? t[m] : m, l && dn(l, f) && (x.unshift(l), l = null), l)
      for (d in l)
        s(f.properties, d, l[d]);
    return ja(f.children, x), f.tagName === "template" && (f.content = {
      type: "root",
      children: f.children
    }, f.children = []), f;
  }
  function s(p, l, f) {
    var x, m, d;
    f == null || f !== f || (x = sn(r, l), m = x.property, d = f, typeof d == "string" && (x.spaceSeparated ? d = ua(d) : x.commaSeparated ? d = pa(d) : x.commaOrSpaceSeparated && (d = ua(pa(d).join(" ")))), m === "style" && typeof f != "string" && (d = mn(d)), m === "className" && p.className && (d = p.className.concat(d)), p[m] = fn(x, m, d));
  }
}
function dn(r, a) {
  return typeof r == "string" || "length" in r || gn(a.tagName, r);
}
function gn(r, a) {
  var e = a.type;
  return r === "input" || !e || typeof e != "string" ? !1 : W(a.children) === "object" && "length" in a.children ? !0 : (e = e.toLowerCase(), r === "button" ? e !== "menu" && e !== "submit" && e !== "reset" && e !== "button" : "value" in a);
}
function ja(r, a) {
  var e, t;
  if (typeof a == "string" || typeof a == "number") {
    r.push({
      type: "text",
      value: String(a)
    });
    return;
  }
  if (W(a) === "object" && "length" in a) {
    for (e = -1, t = a.length; ++e < t; )
      ja(r, a[e]);
    return;
  }
  if (W(a) !== "object" || !("type" in a))
    throw new Error("Expected node, nodes, or string, got `" + a + "`");
  r.push(a);
}
function fn(r, a, e) {
  var t, o, s;
  if (W(e) !== "object" || !("length" in e))
    return da(r, a, e);
  for (o = e.length, t = -1, s = []; ++t < o; )
    s[t] = da(r, a, e[t]);
  return s;
}
function da(r, a, e) {
  var t = e;
  return r.number || r.positiveNumber ? !isNaN(t) && t !== "" && (t = Number(t)) : (r.boolean || r.overloadedBoolean) && typeof t == "string" && (t === "" || va(e) === va(a)) && (t = !0), t;
}
function mn(r) {
  var a = [], e;
  for (e in r)
    a.push([e, r[e]].join(": "));
  return a.join("; ");
}
function hn(r) {
  for (var a = r.length, e = -1, t = {}, o; ++e < a; )
    o = r[e], t[o.toLowerCase()] = o;
  return t;
}
var bn = Ht, yn = vn, Ha = yn(bn, "div");
Ha.displayName = "html";
var wn = Ha, xn = wn, Sn = "\xC6", qn = "&", An = "\xC1", En = "\xC2", kn = "\xC0", Ln = "\xC5", Nn = "\xC3", Tn = "\xC4", $n = "\xA9", Dn = "\xC7", Cn = "\xD0", Rn = "\xC9", In = "\xCA", On = "\xC8", Fn = "\xCB", Un = ">", _n = "\xCD", Bn = "\xCE", jn = "\xCC", Hn = "\xCF", Vn = "<", Gn = "\xD1", zn = "\xD3", Mn = "\xD4", Pn = "\xD2", Zn = "\xD8", Yn = "\xD5", Wn = "\xD6", Jn = '"', Kn = "\xAE", Xn = "\xDE", Qn = "\xDA", ro = "\xDB", ao = "\xD9", eo = "\xDC", to = "\xDD", no = "\xE1", oo = "\xE2", lo = "\xB4", io = "\xE6", so = "\xE0", co = "&", vo = "\xE5", uo = "\xE3", po = "\xE4", go = "\xA6", fo = "\xE7", mo = "\xB8", ho = "\xA2", bo = "\xA9", yo = "\xA4", wo = "\xB0", xo = "\xF7", So = "\xE9", qo = "\xEA", Ao = "\xE8", Eo = "\xF0", ko = "\xEB", Lo = "\xBD", No = "\xBC", To = "\xBE", $o = ">", Do = "\xED", Co = "\xEE", Ro = "\xA1", Io = "\xEC", Oo = "\xBF", Fo = "\xEF", Uo = "\xAB", _o = "<", Bo = "\xAF", jo = "\xB5", Ho = "\xB7", Vo = "\xA0", Go = "\xAC", zo = "\xF1", Mo = "\xF3", Po = "\xF4", Zo = "\xF2", Yo = "\xAA", Wo = "\xBA", Jo = "\xF8", Ko = "\xF5", Xo = "\xF6", Qo = "\xB6", rl = "\xB1", al = "\xA3", el = '"', tl = "\xBB", nl = "\xAE", ol = "\xA7", ll = "\xAD", il = "\xB9", sl = "\xB2", cl = "\xB3", vl = "\xDF", ul = "\xFE", pl = "\xD7", dl = "\xFA", gl = "\xFB", fl = "\xF9", ml = "\xA8", hl = "\xFC", bl = "\xFD", yl = "\xA5", wl = "\xFF", xl = {
  AElig: Sn,
  AMP: qn,
  Aacute: An,
  Acirc: En,
  Agrave: kn,
  Aring: Ln,
  Atilde: Nn,
  Auml: Tn,
  COPY: $n,
  Ccedil: Dn,
  ETH: Cn,
  Eacute: Rn,
  Ecirc: In,
  Egrave: On,
  Euml: Fn,
  GT: Un,
  Iacute: _n,
  Icirc: Bn,
  Igrave: jn,
  Iuml: Hn,
  LT: Vn,
  Ntilde: Gn,
  Oacute: zn,
  Ocirc: Mn,
  Ograve: Pn,
  Oslash: Zn,
  Otilde: Yn,
  Ouml: Wn,
  QUOT: Jn,
  REG: Kn,
  THORN: Xn,
  Uacute: Qn,
  Ucirc: ro,
  Ugrave: ao,
  Uuml: eo,
  Yacute: to,
  aacute: no,
  acirc: oo,
  acute: lo,
  aelig: io,
  agrave: so,
  amp: co,
  aring: vo,
  atilde: uo,
  auml: po,
  brvbar: go,
  ccedil: fo,
  cedil: mo,
  cent: ho,
  copy: bo,
  curren: yo,
  deg: wo,
  divide: xo,
  eacute: So,
  ecirc: qo,
  egrave: Ao,
  eth: Eo,
  euml: ko,
  frac12: Lo,
  frac14: No,
  frac34: To,
  gt: $o,
  iacute: Do,
  icirc: Co,
  iexcl: Ro,
  igrave: Io,
  iquest: Oo,
  iuml: Fo,
  laquo: Uo,
  lt: _o,
  macr: Bo,
  micro: jo,
  middot: Ho,
  nbsp: Vo,
  not: Go,
  ntilde: zo,
  oacute: Mo,
  ocirc: Po,
  ograve: Zo,
  ordf: Yo,
  ordm: Wo,
  oslash: Jo,
  otilde: Ko,
  ouml: Xo,
  para: Qo,
  plusmn: rl,
  pound: al,
  quot: el,
  raquo: tl,
  reg: nl,
  sect: ol,
  shy: ll,
  sup1: il,
  sup2: sl,
  sup3: cl,
  szlig: vl,
  thorn: ul,
  times: pl,
  uacute: dl,
  ucirc: gl,
  ugrave: fl,
  uml: ml,
  uuml: hl,
  yacute: bl,
  yen: yl,
  yuml: wl
}, Sl = {
  0: "\uFFFD",
  128: "\u20AC",
  130: "\u201A",
  131: "\u0192",
  132: "\u201E",
  133: "\u2026",
  134: "\u2020",
  135: "\u2021",
  136: "\u02C6",
  137: "\u2030",
  138: "\u0160",
  139: "\u2039",
  140: "\u0152",
  142: "\u017D",
  145: "\u2018",
  146: "\u2019",
  147: "\u201C",
  148: "\u201D",
  149: "\u2022",
  150: "\u2013",
  151: "\u2014",
  152: "\u02DC",
  153: "\u2122",
  154: "\u0161",
  155: "\u203A",
  156: "\u0153",
  158: "\u017E",
  159: "\u0178"
}, Va = ql;
function ql(r) {
  var a = typeof r == "string" ? r.charCodeAt(0) : r;
  return a >= 48 && a <= 57;
}
var Al = El;
function El(r) {
  var a = typeof r == "string" ? r.charCodeAt(0) : r;
  return a >= 97 && a <= 102 || a >= 65 && a <= 70 || a >= 48 && a <= 57;
}
var kl = Ll;
function Ll(r) {
  var a = typeof r == "string" ? r.charCodeAt(0) : r;
  return a >= 97 && a <= 122 || a >= 65 && a <= 90;
}
var Nl = kl, Tl = Va, $l = Dl;
function Dl(r) {
  return Nl(r) || Tl(r);
}
var Cl = "\xC6", Rl = "\xC6", Il = "&", Ol = "&", Fl = "\xC1", Ul = "\xC1", _l = "\u0102", Bl = "\xC2", jl = "\xC2", Hl = "\u0410", Vl = "\u{1D504}", Gl = "\xC0", zl = "\xC0", Ml = "\u0391", Pl = "\u0100", Zl = "\u2A53", Yl = "\u0104", Wl = "\u{1D538}", Jl = "\u2061", Kl = "\xC5", Xl = "\xC5", Ql = "\u{1D49C}", ri = "\u2254", ai = "\xC3", ei = "\xC3", ti = "\xC4", ni = "\xC4", oi = "\u2216", li = "\u2AE7", ii = "\u2306", si = "\u0411", ci = "\u2235", vi = "\u212C", ui = "\u0392", pi = "\u{1D505}", di = "\u{1D539}", gi = "\u02D8", fi = "\u212C", mi = "\u224E", hi = "\u0427", bi = "\xA9", yi = "\xA9", wi = "\u0106", xi = "\u22D2", Si = "\u2145", qi = "\u212D", Ai = "\u010C", Ei = "\xC7", ki = "\xC7", Li = "\u0108", Ni = "\u2230", Ti = "\u010A", $i = "\xB8", Di = "\xB7", Ci = "\u212D", Ri = "\u03A7", Ii = "\u2299", Oi = "\u2296", Fi = "\u2295", Ui = "\u2297", _i = "\u2232", Bi = "\u201D", ji = "\u2019", Hi = "\u2237", Vi = "\u2A74", Gi = "\u2261", zi = "\u222F", Mi = "\u222E", Pi = "\u2102", Zi = "\u2210", Yi = "\u2233", Wi = "\u2A2F", Ji = "\u{1D49E}", Ki = "\u22D3", Xi = "\u224D", Qi = "\u2145", rs = "\u2911", as = "\u0402", es = "\u0405", ts = "\u040F", ns = "\u2021", os = "\u21A1", ls = "\u2AE4", is = "\u010E", ss = "\u0414", cs = "\u2207", vs = "\u0394", us = "\u{1D507}", ps = "\xB4", ds = "\u02D9", gs = "\u02DD", fs = "`", ms = "\u02DC", hs = "\u22C4", bs = "\u2146", ys = "\u{1D53B}", ws = "\xA8", xs = "\u20DC", Ss = "\u2250", qs = "\u222F", As = "\xA8", Es = "\u21D3", ks = "\u21D0", Ls = "\u21D4", Ns = "\u2AE4", Ts = "\u27F8", $s = "\u27FA", Ds = "\u27F9", Cs = "\u21D2", Rs = "\u22A8", Is = "\u21D1", Os = "\u21D5", Fs = "\u2225", Us = "\u2193", _s = "\u2913", Bs = "\u21F5", js = "\u0311", Hs = "\u2950", Vs = "\u295E", Gs = "\u21BD", zs = "\u2956", Ms = "\u295F", Ps = "\u21C1", Zs = "\u2957", Ys = "\u22A4", Ws = "\u21A7", Js = "\u21D3", Ks = "\u{1D49F}", Xs = "\u0110", Qs = "\u014A", rc = "\xD0", ac = "\xD0", ec = "\xC9", tc = "\xC9", nc = "\u011A", oc = "\xCA", lc = "\xCA", ic = "\u042D", sc = "\u0116", cc = "\u{1D508}", vc = "\xC8", uc = "\xC8", pc = "\u2208", dc = "\u0112", gc = "\u25FB", fc = "\u25AB", mc = "\u0118", hc = "\u{1D53C}", bc = "\u0395", yc = "\u2A75", wc = "\u2242", xc = "\u21CC", Sc = "\u2130", qc = "\u2A73", Ac = "\u0397", Ec = "\xCB", kc = "\xCB", Lc = "\u2203", Nc = "\u2147", Tc = "\u0424", $c = "\u{1D509}", Dc = "\u25FC", Cc = "\u25AA", Rc = "\u{1D53D}", Ic = "\u2200", Oc = "\u2131", Fc = "\u2131", Uc = "\u0403", _c = ">", Bc = ">", jc = "\u0393", Hc = "\u03DC", Vc = "\u011E", Gc = "\u0122", zc = "\u011C", Mc = "\u0413", Pc = "\u0120", Zc = "\u{1D50A}", Yc = "\u22D9", Wc = "\u{1D53E}", Jc = "\u2265", Kc = "\u22DB", Xc = "\u2267", Qc = "\u2AA2", rv = "\u2277", av = "\u2A7E", ev = "\u2273", tv = "\u{1D4A2}", nv = "\u226B", ov = "\u042A", lv = "\u02C7", iv = "^", sv = "\u0124", cv = "\u210C", vv = "\u210B", uv = "\u210D", pv = "\u2500", dv = "\u210B", gv = "\u0126", fv = "\u224E", mv = "\u224F", hv = "\u0415", bv = "\u0132", yv = "\u0401", wv = "\xCD", xv = "\xCD", Sv = "\xCE", qv = "\xCE", Av = "\u0418", Ev = "\u0130", kv = "\u2111", Lv = "\xCC", Nv = "\xCC", Tv = "\u2111", $v = "\u012A", Dv = "\u2148", Cv = "\u21D2", Rv = "\u222C", Iv = "\u222B", Ov = "\u22C2", Fv = "\u2063", Uv = "\u2062", _v = "\u012E", Bv = "\u{1D540}", jv = "\u0399", Hv = "\u2110", Vv = "\u0128", Gv = "\u0406", zv = "\xCF", Mv = "\xCF", Pv = "\u0134", Zv = "\u0419", Yv = "\u{1D50D}", Wv = "\u{1D541}", Jv = "\u{1D4A5}", Kv = "\u0408", Xv = "\u0404", Qv = "\u0425", ru = "\u040C", au = "\u039A", eu = "\u0136", tu = "\u041A", nu = "\u{1D50E}", ou = "\u{1D542}", lu = "\u{1D4A6}", iu = "\u0409", su = "<", cu = "<", vu = "\u0139", uu = "\u039B", pu = "\u27EA", du = "\u2112", gu = "\u219E", fu = "\u013D", mu = "\u013B", hu = "\u041B", bu = "\u27E8", yu = "\u2190", wu = "\u21E4", xu = "\u21C6", Su = "\u2308", qu = "\u27E6", Au = "\u2961", Eu = "\u21C3", ku = "\u2959", Lu = "\u230A", Nu = "\u2194", Tu = "\u294E", $u = "\u22A3", Du = "\u21A4", Cu = "\u295A", Ru = "\u22B2", Iu = "\u29CF", Ou = "\u22B4", Fu = "\u2951", Uu = "\u2960", _u = "\u21BF", Bu = "\u2958", ju = "\u21BC", Hu = "\u2952", Vu = "\u21D0", Gu = "\u21D4", zu = "\u22DA", Mu = "\u2266", Pu = "\u2276", Zu = "\u2AA1", Yu = "\u2A7D", Wu = "\u2272", Ju = "\u{1D50F}", Ku = "\u22D8", Xu = "\u21DA", Qu = "\u013F", rp = "\u27F5", ap = "\u27F7", ep = "\u27F6", tp = "\u27F8", np = "\u27FA", op = "\u27F9", lp = "\u{1D543}", ip = "\u2199", sp = "\u2198", cp = "\u2112", vp = "\u21B0", up = "\u0141", pp = "\u226A", dp = "\u041C", gp = "\u205F", fp = "\u2133", mp = "\u{1D510}", hp = "\u2213", bp = "\u{1D544}", yp = "\u2133", wp = "\u039C", xp = "\u040A", Sp = "\u0143", qp = "\u0147", Ap = "\u0145", Ep = "\u041D", kp = "\u200B", Lp = "\u200B", Np = "\u200B", Tp = "\u200B", $p = "\u226B", Dp = "\u226A", Cp = `
`, Rp = "\u{1D511}", Ip = "\u2060", Op = "\xA0", Fp = "\u2115", Up = "\u2AEC", _p = "\u2262", Bp = "\u226D", jp = "\u2226", Hp = "\u2209", Vp = "\u2260", Gp = "\u2242\u0338", zp = "\u2204", Mp = "\u226F", Pp = "\u2271", Zp = "\u2267\u0338", Yp = "\u226B\u0338", Wp = "\u2279", Jp = "\u2A7E\u0338", Kp = "\u2275", Xp = "\u224E\u0338", Qp = "\u224F\u0338", rd = "\u22EA", ad = "\u29CF\u0338", ed = "\u22EC", td = "\u226E", nd = "\u2270", od = "\u2278", ld = "\u226A\u0338", id = "\u2A7D\u0338", sd = "\u2274", cd = "\u2AA2\u0338", vd = "\u2AA1\u0338", ud = "\u2280", pd = "\u2AAF\u0338", dd = "\u22E0", gd = "\u220C", fd = "\u22EB", md = "\u29D0\u0338", hd = "\u22ED", bd = "\u228F\u0338", yd = "\u22E2", wd = "\u2290\u0338", xd = "\u22E3", Sd = "\u2282\u20D2", qd = "\u2288", Ad = "\u2281", Ed = "\u2AB0\u0338", kd = "\u22E1", Ld = "\u227F\u0338", Nd = "\u2283\u20D2", Td = "\u2289", $d = "\u2241", Dd = "\u2244", Cd = "\u2247", Rd = "\u2249", Id = "\u2224", Od = "\u{1D4A9}", Fd = "\xD1", Ud = "\xD1", _d = "\u039D", Bd = "\u0152", jd = "\xD3", Hd = "\xD3", Vd = "\xD4", Gd = "\xD4", zd = "\u041E", Md = "\u0150", Pd = "\u{1D512}", Zd = "\xD2", Yd = "\xD2", Wd = "\u014C", Jd = "\u03A9", Kd = "\u039F", Xd = "\u{1D546}", Qd = "\u201C", rg = "\u2018", ag = "\u2A54", eg = "\u{1D4AA}", tg = "\xD8", ng = "\xD8", og = "\xD5", lg = "\xD5", ig = "\u2A37", sg = "\xD6", cg = "\xD6", vg = "\u203E", ug = "\u23DE", pg = "\u23B4", dg = "\u23DC", gg = "\u2202", fg = "\u041F", mg = "\u{1D513}", hg = "\u03A6", bg = "\u03A0", yg = "\xB1", wg = "\u210C", xg = "\u2119", Sg = "\u2ABB", qg = "\u227A", Ag = "\u2AAF", Eg = "\u227C", kg = "\u227E", Lg = "\u2033", Ng = "\u220F", Tg = "\u2237", $g = "\u221D", Dg = "\u{1D4AB}", Cg = "\u03A8", Rg = '"', Ig = '"', Og = "\u{1D514}", Fg = "\u211A", Ug = "\u{1D4AC}", _g = "\u2910", Bg = "\xAE", jg = "\xAE", Hg = "\u0154", Vg = "\u27EB", Gg = "\u21A0", zg = "\u2916", Mg = "\u0158", Pg = "\u0156", Zg = "\u0420", Yg = "\u211C", Wg = "\u220B", Jg = "\u21CB", Kg = "\u296F", Xg = "\u211C", Qg = "\u03A1", rf = "\u27E9", af = "\u2192", ef = "\u21E5", tf = "\u21C4", nf = "\u2309", of = "\u27E7", lf = "\u295D", sf = "\u21C2", cf = "\u2955", vf = "\u230B", uf = "\u22A2", pf = "\u21A6", df = "\u295B", gf = "\u22B3", ff = "\u29D0", mf = "\u22B5", hf = "\u294F", bf = "\u295C", yf = "\u21BE", wf = "\u2954", xf = "\u21C0", Sf = "\u2953", qf = "\u21D2", Af = "\u211D", Ef = "\u2970", kf = "\u21DB", Lf = "\u211B", Nf = "\u21B1", Tf = "\u29F4", $f = "\u0429", Df = "\u0428", Cf = "\u042C", Rf = "\u015A", If = "\u2ABC", Of = "\u0160", Ff = "\u015E", Uf = "\u015C", _f = "\u0421", Bf = "\u{1D516}", jf = "\u2193", Hf = "\u2190", Vf = "\u2192", Gf = "\u2191", zf = "\u03A3", Mf = "\u2218", Pf = "\u{1D54A}", Zf = "\u221A", Yf = "\u25A1", Wf = "\u2293", Jf = "\u228F", Kf = "\u2291", Xf = "\u2290", Qf = "\u2292", rm = "\u2294", am = "\u{1D4AE}", em = "\u22C6", tm = "\u22D0", nm = "\u22D0", om = "\u2286", lm = "\u227B", im = "\u2AB0", sm = "\u227D", cm = "\u227F", vm = "\u220B", um = "\u2211", pm = "\u22D1", dm = "\u2283", gm = "\u2287", fm = "\u22D1", mm = "\xDE", hm = "\xDE", bm = "\u2122", ym = "\u040B", wm = "\u0426", xm = "	", Sm = "\u03A4", qm = "\u0164", Am = "\u0162", Em = "\u0422", km = "\u{1D517}", Lm = "\u2234", Nm = "\u0398", Tm = "\u205F\u200A", $m = "\u2009", Dm = "\u223C", Cm = "\u2243", Rm = "\u2245", Im = "\u2248", Om = "\u{1D54B}", Fm = "\u20DB", Um = "\u{1D4AF}", _m = "\u0166", Bm = "\xDA", jm = "\xDA", Hm = "\u219F", Vm = "\u2949", Gm = "\u040E", zm = "\u016C", Mm = "\xDB", Pm = "\xDB", Zm = "\u0423", Ym = "\u0170", Wm = "\u{1D518}", Jm = "\xD9", Km = "\xD9", Xm = "\u016A", Qm = "_", rh = "\u23DF", ah = "\u23B5", eh = "\u23DD", th = "\u22C3", nh = "\u228E", oh = "\u0172", lh = "\u{1D54C}", ih = "\u2191", sh = "\u2912", ch = "\u21C5", vh = "\u2195", uh = "\u296E", ph = "\u22A5", dh = "\u21A5", gh = "\u21D1", fh = "\u21D5", mh = "\u2196", hh = "\u2197", bh = "\u03D2", yh = "\u03A5", wh = "\u016E", xh = "\u{1D4B0}", Sh = "\u0168", qh = "\xDC", Ah = "\xDC", Eh = "\u22AB", kh = "\u2AEB", Lh = "\u0412", Nh = "\u22A9", Th = "\u2AE6", $h = "\u22C1", Dh = "\u2016", Ch = "\u2016", Rh = "\u2223", Ih = "|", Oh = "\u2758", Fh = "\u2240", Uh = "\u200A", _h = "\u{1D519}", Bh = "\u{1D54D}", jh = "\u{1D4B1}", Hh = "\u22AA", Vh = "\u0174", Gh = "\u22C0", zh = "\u{1D51A}", Mh = "\u{1D54E}", Ph = "\u{1D4B2}", Zh = "\u{1D51B}", Yh = "\u039E", Wh = "\u{1D54F}", Jh = "\u{1D4B3}", Kh = "\u042F", Xh = "\u0407", Qh = "\u042E", rb = "\xDD", ab = "\xDD", eb = "\u0176", tb = "\u042B", nb = "\u{1D51C}", ob = "\u{1D550}", lb = "\u{1D4B4}", ib = "\u0178", sb = "\u0416", cb = "\u0179", vb = "\u017D", ub = "\u0417", pb = "\u017B", db = "\u200B", gb = "\u0396", fb = "\u2128", mb = "\u2124", hb = "\u{1D4B5}", bb = "\xE1", yb = "\xE1", wb = "\u0103", xb = "\u223E", Sb = "\u223E\u0333", qb = "\u223F", Ab = "\xE2", Eb = "\xE2", kb = "\xB4", Lb = "\xB4", Nb = "\u0430", Tb = "\xE6", $b = "\xE6", Db = "\u2061", Cb = "\u{1D51E}", Rb = "\xE0", Ib = "\xE0", Ob = "\u2135", Fb = "\u2135", Ub = "\u03B1", _b = "\u0101", Bb = "\u2A3F", jb = "&", Hb = "&", Vb = "\u2227", Gb = "\u2A55", zb = "\u2A5C", Mb = "\u2A58", Pb = "\u2A5A", Zb = "\u2220", Yb = "\u29A4", Wb = "\u2220", Jb = "\u2221", Kb = "\u29A8", Xb = "\u29A9", Qb = "\u29AA", ry = "\u29AB", ay = "\u29AC", ey = "\u29AD", ty = "\u29AE", ny = "\u29AF", oy = "\u221F", ly = "\u22BE", iy = "\u299D", sy = "\u2222", cy = "\xC5", vy = "\u237C", uy = "\u0105", py = "\u{1D552}", dy = "\u2248", gy = "\u2A70", fy = "\u2A6F", my = "\u224A", hy = "\u224B", by = "'", yy = "\u2248", wy = "\u224A", xy = "\xE5", Sy = "\xE5", qy = "\u{1D4B6}", Ay = "*", Ey = "\u2248", ky = "\u224D", Ly = "\xE3", Ny = "\xE3", Ty = "\xE4", $y = "\xE4", Dy = "\u2233", Cy = "\u2A11", Ry = "\u2AED", Iy = "\u224C", Oy = "\u03F6", Fy = "\u2035", Uy = "\u223D", _y = "\u22CD", By = "\u22BD", jy = "\u2305", Hy = "\u2305", Vy = "\u23B5", Gy = "\u23B6", zy = "\u224C", My = "\u0431", Py = "\u201E", Zy = "\u2235", Yy = "\u2235", Wy = "\u29B0", Jy = "\u03F6", Ky = "\u212C", Xy = "\u03B2", Qy = "\u2136", rw = "\u226C", aw = "\u{1D51F}", ew = "\u22C2", tw = "\u25EF", nw = "\u22C3", ow = "\u2A00", lw = "\u2A01", iw = "\u2A02", sw = "\u2A06", cw = "\u2605", vw = "\u25BD", uw = "\u25B3", pw = "\u2A04", dw = "\u22C1", gw = "\u22C0", fw = "\u290D", mw = "\u29EB", hw = "\u25AA", bw = "\u25B4", yw = "\u25BE", ww = "\u25C2", xw = "\u25B8", Sw = "\u2423", qw = "\u2592", Aw = "\u2591", Ew = "\u2593", kw = "\u2588", Lw = "=\u20E5", Nw = "\u2261\u20E5", Tw = "\u2310", $w = "\u{1D553}", Dw = "\u22A5", Cw = "\u22A5", Rw = "\u22C8", Iw = "\u2557", Ow = "\u2554", Fw = "\u2556", Uw = "\u2553", _w = "\u2550", Bw = "\u2566", jw = "\u2569", Hw = "\u2564", Vw = "\u2567", Gw = "\u255D", zw = "\u255A", Mw = "\u255C", Pw = "\u2559", Zw = "\u2551", Yw = "\u256C", Ww = "\u2563", Jw = "\u2560", Kw = "\u256B", Xw = "\u2562", Qw = "\u255F", rx = "\u29C9", ax = "\u2555", ex = "\u2552", tx = "\u2510", nx = "\u250C", ox = "\u2500", lx = "\u2565", ix = "\u2568", sx = "\u252C", cx = "\u2534", vx = "\u229F", ux = "\u229E", px = "\u22A0", dx = "\u255B", gx = "\u2558", fx = "\u2518", mx = "\u2514", hx = "\u2502", bx = "\u256A", yx = "\u2561", wx = "\u255E", xx = "\u253C", Sx = "\u2524", qx = "\u251C", Ax = "\u2035", Ex = "\u02D8", kx = "\xA6", Lx = "\xA6", Nx = "\u{1D4B7}", Tx = "\u204F", $x = "\u223D", Dx = "\u22CD", Cx = "\\", Rx = "\u29C5", Ix = "\u27C8", Ox = "\u2022", Fx = "\u2022", Ux = "\u224E", _x = "\u2AAE", Bx = "\u224F", jx = "\u224F", Hx = "\u0107", Vx = "\u2229", Gx = "\u2A44", zx = "\u2A49", Mx = "\u2A4B", Px = "\u2A47", Zx = "\u2A40", Yx = "\u2229\uFE00", Wx = "\u2041", Jx = "\u02C7", Kx = "\u2A4D", Xx = "\u010D", Qx = "\xE7", rS = "\xE7", aS = "\u0109", eS = "\u2A4C", tS = "\u2A50", nS = "\u010B", oS = "\xB8", lS = "\xB8", iS = "\u29B2", sS = "\xA2", cS = "\xA2", vS = "\xB7", uS = "\u{1D520}", pS = "\u0447", dS = "\u2713", gS = "\u2713", fS = "\u03C7", mS = "\u25CB", hS = "\u29C3", bS = "\u02C6", yS = "\u2257", wS = "\u21BA", xS = "\u21BB", SS = "\xAE", qS = "\u24C8", AS = "\u229B", ES = "\u229A", kS = "\u229D", LS = "\u2257", NS = "\u2A10", TS = "\u2AEF", $S = "\u29C2", DS = "\u2663", CS = "\u2663", RS = ":", IS = "\u2254", OS = "\u2254", FS = ",", US = "@", _S = "\u2201", BS = "\u2218", jS = "\u2201", HS = "\u2102", VS = "\u2245", GS = "\u2A6D", zS = "\u222E", MS = "\u{1D554}", PS = "\u2210", ZS = "\xA9", YS = "\xA9", WS = "\u2117", JS = "\u21B5", KS = "\u2717", XS = "\u{1D4B8}", QS = "\u2ACF", rq = "\u2AD1", aq = "\u2AD0", eq = "\u2AD2", tq = "\u22EF", nq = "\u2938", oq = "\u2935", lq = "\u22DE", iq = "\u22DF", sq = "\u21B6", cq = "\u293D", vq = "\u222A", uq = "\u2A48", pq = "\u2A46", dq = "\u2A4A", gq = "\u228D", fq = "\u2A45", mq = "\u222A\uFE00", hq = "\u21B7", bq = "\u293C", yq = "\u22DE", wq = "\u22DF", xq = "\u22CE", Sq = "\u22CF", qq = "\xA4", Aq = "\xA4", Eq = "\u21B6", kq = "\u21B7", Lq = "\u22CE", Nq = "\u22CF", Tq = "\u2232", $q = "\u2231", Dq = "\u232D", Cq = "\u21D3", Rq = "\u2965", Iq = "\u2020", Oq = "\u2138", Fq = "\u2193", Uq = "\u2010", _q = "\u22A3", Bq = "\u290F", jq = "\u02DD", Hq = "\u010F", Vq = "\u0434", Gq = "\u2146", zq = "\u2021", Mq = "\u21CA", Pq = "\u2A77", Zq = "\xB0", Yq = "\xB0", Wq = "\u03B4", Jq = "\u29B1", Kq = "\u297F", Xq = "\u{1D521}", Qq = "\u21C3", rA = "\u21C2", aA = "\u22C4", eA = "\u22C4", tA = "\u2666", nA = "\u2666", oA = "\xA8", lA = "\u03DD", iA = "\u22F2", sA = "\xF7", cA = "\xF7", vA = "\xF7", uA = "\u22C7", pA = "\u22C7", dA = "\u0452", gA = "\u231E", fA = "\u230D", mA = "$", hA = "\u{1D555}", bA = "\u02D9", yA = "\u2250", wA = "\u2251", xA = "\u2238", SA = "\u2214", qA = "\u22A1", AA = "\u2306", EA = "\u2193", kA = "\u21CA", LA = "\u21C3", NA = "\u21C2", TA = "\u2910", $A = "\u231F", DA = "\u230C", CA = "\u{1D4B9}", RA = "\u0455", IA = "\u29F6", OA = "\u0111", FA = "\u22F1", UA = "\u25BF", _A = "\u25BE", BA = "\u21F5", jA = "\u296F", HA = "\u29A6", VA = "\u045F", GA = "\u27FF", zA = "\u2A77", MA = "\u2251", PA = "\xE9", ZA = "\xE9", YA = "\u2A6E", WA = "\u011B", JA = "\xEA", KA = "\xEA", XA = "\u2255", QA = "\u044D", rE = "\u0117", aE = "\u2147", eE = "\u2252", tE = "\u{1D522}", nE = "\u2A9A", oE = "\xE8", lE = "\xE8", iE = "\u2A96", sE = "\u2A98", cE = "\u2A99", vE = "\u23E7", uE = "\u2113", pE = "\u2A95", dE = "\u2A97", gE = "\u0113", fE = "\u2205", mE = "\u2205", hE = "\u2205", bE = "\u2004", yE = "\u2005", wE = "\u2003", xE = "\u014B", SE = "\u2002", qE = "\u0119", AE = "\u{1D556}", EE = "\u22D5", kE = "\u29E3", LE = "\u2A71", NE = "\u03B5", TE = "\u03B5", $E = "\u03F5", DE = "\u2256", CE = "\u2255", RE = "\u2242", IE = "\u2A96", OE = "\u2A95", FE = "=", UE = "\u225F", _E = "\u2261", BE = "\u2A78", jE = "\u29E5", HE = "\u2253", VE = "\u2971", GE = "\u212F", zE = "\u2250", ME = "\u2242", PE = "\u03B7", ZE = "\xF0", YE = "\xF0", WE = "\xEB", JE = "\xEB", KE = "\u20AC", XE = "!", QE = "\u2203", rk = "\u2130", ak = "\u2147", ek = "\u2252", tk = "\u0444", nk = "\u2640", ok = "\uFB03", lk = "\uFB00", ik = "\uFB04", sk = "\u{1D523}", ck = "\uFB01", vk = "fj", uk = "\u266D", pk = "\uFB02", dk = "\u25B1", gk = "\u0192", fk = "\u{1D557}", mk = "\u2200", hk = "\u22D4", bk = "\u2AD9", yk = "\u2A0D", wk = "\xBC", xk = "\xBD", Sk = "\u2153", qk = "\xBC", Ak = "\u2155", Ek = "\u2159", kk = "\u215B", Lk = "\u2154", Nk = "\u2156", Tk = "\xBE", $k = "\xBE", Dk = "\u2157", Ck = "\u215C", Rk = "\u2158", Ik = "\u215A", Ok = "\u215D", Fk = "\u215E", Uk = "\u2044", _k = "\u2322", Bk = "\u{1D4BB}", jk = "\u2267", Hk = "\u2A8C", Vk = "\u01F5", Gk = "\u03B3", zk = "\u03DD", Mk = "\u2A86", Pk = "\u011F", Zk = "\u011D", Yk = "\u0433", Wk = "\u0121", Jk = "\u2265", Kk = "\u22DB", Xk = "\u2265", Qk = "\u2267", r1 = "\u2A7E", a1 = "\u2A7E", e1 = "\u2AA9", t1 = "\u2A80", n1 = "\u2A82", o1 = "\u2A84", l1 = "\u22DB\uFE00", i1 = "\u2A94", s1 = "\u{1D524}", c1 = "\u226B", v1 = "\u22D9", u1 = "\u2137", p1 = "\u0453", d1 = "\u2277", g1 = "\u2A92", f1 = "\u2AA5", m1 = "\u2AA4", h1 = "\u2269", b1 = "\u2A8A", y1 = "\u2A8A", w1 = "\u2A88", x1 = "\u2A88", S1 = "\u2269", q1 = "\u22E7", A1 = "\u{1D558}", E1 = "`", k1 = "\u210A", L1 = "\u2273", N1 = "\u2A8E", T1 = "\u2A90", $1 = ">", D1 = ">", C1 = "\u2AA7", R1 = "\u2A7A", I1 = "\u22D7", O1 = "\u2995", F1 = "\u2A7C", U1 = "\u2A86", _1 = "\u2978", B1 = "\u22D7", j1 = "\u22DB", H1 = "\u2A8C", V1 = "\u2277", G1 = "\u2273", z1 = "\u2269\uFE00", M1 = "\u2269\uFE00", P1 = "\u21D4", Z1 = "\u200A", Y1 = "\xBD", W1 = "\u210B", J1 = "\u044A", K1 = "\u2194", X1 = "\u2948", Q1 = "\u21AD", rL = "\u210F", aL = "\u0125", eL = "\u2665", tL = "\u2665", nL = "\u2026", oL = "\u22B9", lL = "\u{1D525}", iL = "\u2925", sL = "\u2926", cL = "\u21FF", vL = "\u223B", uL = "\u21A9", pL = "\u21AA", dL = "\u{1D559}", gL = "\u2015", fL = "\u{1D4BD}", mL = "\u210F", hL = "\u0127", bL = "\u2043", yL = "\u2010", wL = "\xED", xL = "\xED", SL = "\u2063", qL = "\xEE", AL = "\xEE", EL = "\u0438", kL = "\u0435", LL = "\xA1", NL = "\xA1", TL = "\u21D4", $L = "\u{1D526}", DL = "\xEC", CL = "\xEC", RL = "\u2148", IL = "\u2A0C", OL = "\u222D", FL = "\u29DC", UL = "\u2129", _L = "\u0133", BL = "\u012B", jL = "\u2111", HL = "\u2110", VL = "\u2111", GL = "\u0131", zL = "\u22B7", ML = "\u01B5", PL = "\u2105", ZL = "\u221E", YL = "\u29DD", WL = "\u0131", JL = "\u222B", KL = "\u22BA", XL = "\u2124", QL = "\u22BA", rN = "\u2A17", aN = "\u2A3C", eN = "\u0451", tN = "\u012F", nN = "\u{1D55A}", oN = "\u03B9", lN = "\u2A3C", iN = "\xBF", sN = "\xBF", cN = "\u{1D4BE}", vN = "\u2208", uN = "\u22F9", pN = "\u22F5", dN = "\u22F4", gN = "\u22F3", fN = "\u2208", mN = "\u2062", hN = "\u0129", bN = "\u0456", yN = "\xEF", wN = "\xEF", xN = "\u0135", SN = "\u0439", qN = "\u{1D527}", AN = "\u0237", EN = "\u{1D55B}", kN = "\u{1D4BF}", LN = "\u0458", NN = "\u0454", TN = "\u03BA", $N = "\u03F0", DN = "\u0137", CN = "\u043A", RN = "\u{1D528}", IN = "\u0138", ON = "\u0445", FN = "\u045C", UN = "\u{1D55C}", _N = "\u{1D4C0}", BN = "\u21DA", jN = "\u21D0", HN = "\u291B", VN = "\u290E", GN = "\u2266", zN = "\u2A8B", MN = "\u2962", PN = "\u013A", ZN = "\u29B4", YN = "\u2112", WN = "\u03BB", JN = "\u27E8", KN = "\u2991", XN = "\u27E8", QN = "\u2A85", rT = "\xAB", aT = "\xAB", eT = "\u2190", tT = "\u21E4", nT = "\u291F", oT = "\u291D", lT = "\u21A9", iT = "\u21AB", sT = "\u2939", cT = "\u2973", vT = "\u21A2", uT = "\u2AAB", pT = "\u2919", dT = "\u2AAD", gT = "\u2AAD\uFE00", fT = "\u290C", mT = "\u2772", hT = "{", bT = "[", yT = "\u298B", wT = "\u298F", xT = "\u298D", ST = "\u013E", qT = "\u013C", AT = "\u2308", ET = "{", kT = "\u043B", LT = "\u2936", NT = "\u201C", TT = "\u201E", $T = "\u2967", DT = "\u294B", CT = "\u21B2", RT = "\u2264", IT = "\u2190", OT = "\u21A2", FT = "\u21BD", UT = "\u21BC", _T = "\u21C7", BT = "\u2194", jT = "\u21C6", HT = "\u21CB", VT = "\u21AD", GT = "\u22CB", zT = "\u22DA", MT = "\u2264", PT = "\u2266", ZT = "\u2A7D", YT = "\u2A7D", WT = "\u2AA8", JT = "\u2A7F", KT = "\u2A81", XT = "\u2A83", QT = "\u22DA\uFE00", r$ = "\u2A93", a$ = "\u2A85", e$ = "\u22D6", t$ = "\u22DA", n$ = "\u2A8B", o$ = "\u2276", l$ = "\u2272", i$ = "\u297C", s$ = "\u230A", c$ = "\u{1D529}", v$ = "\u2276", u$ = "\u2A91", p$ = "\u21BD", d$ = "\u21BC", g$ = "\u296A", f$ = "\u2584", m$ = "\u0459", h$ = "\u226A", b$ = "\u21C7", y$ = "\u231E", w$ = "\u296B", x$ = "\u25FA", S$ = "\u0140", q$ = "\u23B0", A$ = "\u23B0", E$ = "\u2268", k$ = "\u2A89", L$ = "\u2A89", N$ = "\u2A87", T$ = "\u2A87", $$ = "\u2268", D$ = "\u22E6", C$ = "\u27EC", R$ = "\u21FD", I$ = "\u27E6", O$ = "\u27F5", F$ = "\u27F7", U$ = "\u27FC", _$ = "\u27F6", B$ = "\u21AB", j$ = "\u21AC", H$ = "\u2985", V$ = "\u{1D55D}", G$ = "\u2A2D", z$ = "\u2A34", M$ = "\u2217", P$ = "_", Z$ = "\u25CA", Y$ = "\u25CA", W$ = "\u29EB", J$ = "(", K$ = "\u2993", X$ = "\u21C6", Q$ = "\u231F", rD = "\u21CB", aD = "\u296D", eD = "\u200E", tD = "\u22BF", nD = "\u2039", oD = "\u{1D4C1}", lD = "\u21B0", iD = "\u2272", sD = "\u2A8D", cD = "\u2A8F", vD = "[", uD = "\u2018", pD = "\u201A", dD = "\u0142", gD = "<", fD = "<", mD = "\u2AA6", hD = "\u2A79", bD = "\u22D6", yD = "\u22CB", wD = "\u22C9", xD = "\u2976", SD = "\u2A7B", qD = "\u2996", AD = "\u25C3", ED = "\u22B4", kD = "\u25C2", LD = "\u294A", ND = "\u2966", TD = "\u2268\uFE00", $D = "\u2268\uFE00", DD = "\u223A", CD = "\xAF", RD = "\xAF", ID = "\u2642", OD = "\u2720", FD = "\u2720", UD = "\u21A6", _D = "\u21A6", BD = "\u21A7", jD = "\u21A4", HD = "\u21A5", VD = "\u25AE", GD = "\u2A29", zD = "\u043C", MD = "\u2014", PD = "\u2221", ZD = "\u{1D52A}", YD = "\u2127", WD = "\xB5", JD = "\xB5", KD = "\u2223", XD = "*", QD = "\u2AF0", r0 = "\xB7", a0 = "\xB7", e0 = "\u2212", t0 = "\u229F", n0 = "\u2238", o0 = "\u2A2A", l0 = "\u2ADB", i0 = "\u2026", s0 = "\u2213", c0 = "\u22A7", v0 = "\u{1D55E}", u0 = "\u2213", p0 = "\u{1D4C2}", d0 = "\u223E", g0 = "\u03BC", f0 = "\u22B8", m0 = "\u22B8", h0 = "\u22D9\u0338", b0 = "\u226B\u20D2", y0 = "\u226B\u0338", w0 = "\u21CD", x0 = "\u21CE", S0 = "\u22D8\u0338", q0 = "\u226A\u20D2", A0 = "\u226A\u0338", E0 = "\u21CF", k0 = "\u22AF", L0 = "\u22AE", N0 = "\u2207", T0 = "\u0144", $0 = "\u2220\u20D2", D0 = "\u2249", C0 = "\u2A70\u0338", R0 = "\u224B\u0338", I0 = "\u0149", O0 = "\u2249", F0 = "\u266E", U0 = "\u266E", _0 = "\u2115", B0 = "\xA0", j0 = "\xA0", H0 = "\u224E\u0338", V0 = "\u224F\u0338", G0 = "\u2A43", z0 = "\u0148", M0 = "\u0146", P0 = "\u2247", Z0 = "\u2A6D\u0338", Y0 = "\u2A42", W0 = "\u043D", J0 = "\u2013", K0 = "\u2260", X0 = "\u21D7", Q0 = "\u2924", rC = "\u2197", aC = "\u2197", eC = "\u2250\u0338", tC = "\u2262", nC = "\u2928", oC = "\u2242\u0338", lC = "\u2204", iC = "\u2204", sC = "\u{1D52B}", cC = "\u2267\u0338", vC = "\u2271", uC = "\u2271", pC = "\u2267\u0338", dC = "\u2A7E\u0338", gC = "\u2A7E\u0338", fC = "\u2275", mC = "\u226F", hC = "\u226F", bC = "\u21CE", yC = "\u21AE", wC = "\u2AF2", xC = "\u220B", SC = "\u22FC", qC = "\u22FA", AC = "\u220B", EC = "\u045A", kC = "\u21CD", LC = "\u2266\u0338", NC = "\u219A", TC = "\u2025", $C = "\u2270", DC = "\u219A", CC = "\u21AE", RC = "\u2270", IC = "\u2266\u0338", OC = "\u2A7D\u0338", FC = "\u2A7D\u0338", UC = "\u226E", _C = "\u2274", BC = "\u226E", jC = "\u22EA", HC = "\u22EC", VC = "\u2224", GC = "\u{1D55F}", zC = "\xAC", MC = "\xAC", PC = "\u2209", ZC = "\u22F9\u0338", YC = "\u22F5\u0338", WC = "\u2209", JC = "\u22F7", KC = "\u22F6", XC = "\u220C", QC = "\u220C", rR = "\u22FE", aR = "\u22FD", eR = "\u2226", tR = "\u2226", nR = "\u2AFD\u20E5", oR = "\u2202\u0338", lR = "\u2A14", iR = "\u2280", sR = "\u22E0", cR = "\u2AAF\u0338", vR = "\u2280", uR = "\u2AAF\u0338", pR = "\u21CF", dR = "\u219B", gR = "\u2933\u0338", fR = "\u219D\u0338", mR = "\u219B", hR = "\u22EB", bR = "\u22ED", yR = "\u2281", wR = "\u22E1", xR = "\u2AB0\u0338", SR = "\u{1D4C3}", qR = "\u2224", AR = "\u2226", ER = "\u2241", kR = "\u2244", LR = "\u2244", NR = "\u2224", TR = "\u2226", $R = "\u22E2", DR = "\u22E3", CR = "\u2284", RR = "\u2AC5\u0338", IR = "\u2288", OR = "\u2282\u20D2", FR = "\u2288", UR = "\u2AC5\u0338", _R = "\u2281", BR = "\u2AB0\u0338", jR = "\u2285", HR = "\u2AC6\u0338", VR = "\u2289", GR = "\u2283\u20D2", zR = "\u2289", MR = "\u2AC6\u0338", PR = "\u2279", ZR = "\xF1", YR = "\xF1", WR = "\u2278", JR = "\u22EA", KR = "\u22EC", XR = "\u22EB", QR = "\u22ED", rI = "\u03BD", aI = "#", eI = "\u2116", tI = "\u2007", nI = "\u22AD", oI = "\u2904", lI = "\u224D\u20D2", iI = "\u22AC", sI = "\u2265\u20D2", cI = ">\u20D2", vI = "\u29DE", uI = "\u2902", pI = "\u2264\u20D2", dI = "<\u20D2", gI = "\u22B4\u20D2", fI = "\u2903", mI = "\u22B5\u20D2", hI = "\u223C\u20D2", bI = "\u21D6", yI = "\u2923", wI = "\u2196", xI = "\u2196", SI = "\u2927", qI = "\u24C8", AI = "\xF3", EI = "\xF3", kI = "\u229B", LI = "\xF4", NI = "\xF4", TI = "\u043E", $I = "\u229D", DI = "\u0151", CI = "\u2A38", RI = "\u2299", II = "\u29BC", OI = "\u0153", FI = "\u29BF", UI = "\u{1D52C}", _I = "\u02DB", BI = "\xF2", jI = "\xF2", HI = "\u29C1", VI = "\u29B5", GI = "\u03A9", zI = "\u222E", MI = "\u21BA", PI = "\u29BE", ZI = "\u29BB", YI = "\u203E", WI = "\u29C0", JI = "\u014D", KI = "\u03C9", XI = "\u03BF", QI = "\u29B6", rO = "\u2296", aO = "\u{1D560}", eO = "\u29B7", tO = "\u29B9", nO = "\u2295", oO = "\u2228", lO = "\u21BB", iO = "\xBA", sO = "\u2134", cO = "\u2134", vO = "\xAA", uO = "\xBA", pO = "\u22B6", dO = "\u2A56", gO = "\u2A57", fO = "\u2A5B", mO = "\u2134", hO = "\xF8", bO = "\xF8", yO = "\u2298", wO = "\xF5", xO = "\xF5", SO = "\u2297", qO = "\u2A36", AO = "\xF6", EO = "\xF6", kO = "\u233D", LO = "\xB6", NO = "\xB6", TO = "\u2225", $O = "\u2AF3", DO = "\u2AFD", CO = "\u2202", RO = "\u043F", IO = "%", OO = ".", FO = "\u2030", UO = "\u22A5", _O = "\u2031", BO = "\u{1D52D}", jO = "\u03C6", HO = "\u03D5", VO = "\u2133", GO = "\u260E", zO = "\u03C0", MO = "\u22D4", PO = "\u03D6", ZO = "\u210F", YO = "\u210E", WO = "\u210F", JO = "+", KO = "\u2A23", XO = "\u229E", QO = "\u2A22", rF = "\u2214", aF = "\u2A25", eF = "\u2A72", tF = "\xB1", nF = "\xB1", oF = "\u2A26", lF = "\u2A27", iF = "\xB1", sF = "\u2A15", cF = "\u{1D561}", vF = "\xA3", uF = "\xA3", pF = "\u227A", dF = "\u2AB3", gF = "\u2AB7", fF = "\u227C", mF = "\u2AAF", hF = "\u227A", bF = "\u2AB7", yF = "\u227C", wF = "\u2AAF", xF = "\u2AB9", SF = "\u2AB5", qF = "\u22E8", AF = "\u227E", EF = "\u2032", kF = "\u2119", LF = "\u2AB5", NF = "\u2AB9", TF = "\u22E8", $F = "\u220F", DF = "\u232E", CF = "\u2312", RF = "\u2313", IF = "\u221D", OF = "\u221D", FF = "\u227E", UF = "\u22B0", _F = "\u{1D4C5}", BF = "\u03C8", jF = "\u2008", HF = "\u{1D52E}", VF = "\u2A0C", GF = "\u{1D562}", zF = "\u2057", MF = "\u{1D4C6}", PF = "\u210D", ZF = "\u2A16", YF = "?", WF = "\u225F", JF = '"', KF = '"', XF = "\u21DB", QF = "\u21D2", rU = "\u291C", aU = "\u290F", eU = "\u2964", tU = "\u223D\u0331", nU = "\u0155", oU = "\u221A", lU = "\u29B3", iU = "\u27E9", sU = "\u2992", cU = "\u29A5", vU = "\u27E9", uU = "\xBB", pU = "\xBB", dU = "\u2192", gU = "\u2975", fU = "\u21E5", mU = "\u2920", hU = "\u2933", bU = "\u291E", yU = "\u21AA", wU = "\u21AC", xU = "\u2945", SU = "\u2974", qU = "\u21A3", AU = "\u219D", EU = "\u291A", kU = "\u2236", LU = "\u211A", NU = "\u290D", TU = "\u2773", $U = "}", DU = "]", CU = "\u298C", RU = "\u298E", IU = "\u2990", OU = "\u0159", FU = "\u0157", UU = "\u2309", _U = "}", BU = "\u0440", jU = "\u2937", HU = "\u2969", VU = "\u201D", GU = "\u201D", zU = "\u21B3", MU = "\u211C", PU = "\u211B", ZU = "\u211C", YU = "\u211D", WU = "\u25AD", JU = "\xAE", KU = "\xAE", XU = "\u297D", QU = "\u230B", r_ = "\u{1D52F}", a_ = "\u21C1", e_ = "\u21C0", t_ = "\u296C", n_ = "\u03C1", o_ = "\u03F1", l_ = "\u2192", i_ = "\u21A3", s_ = "\u21C1", c_ = "\u21C0", v_ = "\u21C4", u_ = "\u21CC", p_ = "\u21C9", d_ = "\u219D", g_ = "\u22CC", f_ = "\u02DA", m_ = "\u2253", h_ = "\u21C4", b_ = "\u21CC", y_ = "\u200F", w_ = "\u23B1", x_ = "\u23B1", S_ = "\u2AEE", q_ = "\u27ED", A_ = "\u21FE", E_ = "\u27E7", k_ = "\u2986", L_ = "\u{1D563}", N_ = "\u2A2E", T_ = "\u2A35", $_ = ")", D_ = "\u2994", C_ = "\u2A12", R_ = "\u21C9", I_ = "\u203A", O_ = "\u{1D4C7}", F_ = "\u21B1", U_ = "]", __ = "\u2019", B_ = "\u2019", j_ = "\u22CC", H_ = "\u22CA", V_ = "\u25B9", G_ = "\u22B5", z_ = "\u25B8", M_ = "\u29CE", P_ = "\u2968", Z_ = "\u211E", Y_ = "\u015B", W_ = "\u201A", J_ = "\u227B", K_ = "\u2AB4", X_ = "\u2AB8", Q_ = "\u0161", rB = "\u227D", aB = "\u2AB0", eB = "\u015F", tB = "\u015D", nB = "\u2AB6", oB = "\u2ABA", lB = "\u22E9", iB = "\u2A13", sB = "\u227F", cB = "\u0441", vB = "\u22C5", uB = "\u22A1", pB = "\u2A66", dB = "\u21D8", gB = "\u2925", fB = "\u2198", mB = "\u2198", hB = "\xA7", bB = "\xA7", yB = ";", wB = "\u2929", xB = "\u2216", SB = "\u2216", qB = "\u2736", AB = "\u{1D530}", EB = "\u2322", kB = "\u266F", LB = "\u0449", NB = "\u0448", TB = "\u2223", $B = "\u2225", DB = "\xAD", CB = "\xAD", RB = "\u03C3", IB = "\u03C2", OB = "\u03C2", FB = "\u223C", UB = "\u2A6A", _B = "\u2243", BB = "\u2243", jB = "\u2A9E", HB = "\u2AA0", VB = "\u2A9D", GB = "\u2A9F", zB = "\u2246", MB = "\u2A24", PB = "\u2972", ZB = "\u2190", YB = "\u2216", WB = "\u2A33", JB = "\u29E4", KB = "\u2223", XB = "\u2323", QB = "\u2AAA", rj = "\u2AAC", aj = "\u2AAC\uFE00", ej = "\u044C", tj = "/", nj = "\u29C4", oj = "\u233F", lj = "\u{1D564}", ij = "\u2660", sj = "\u2660", cj = "\u2225", vj = "\u2293", uj = "\u2293\uFE00", pj = "\u2294", dj = "\u2294\uFE00", gj = "\u228F", fj = "\u2291", mj = "\u228F", hj = "\u2291", bj = "\u2290", yj = "\u2292", wj = "\u2290", xj = "\u2292", Sj = "\u25A1", qj = "\u25A1", Aj = "\u25AA", Ej = "\u25AA", kj = "\u2192", Lj = "\u{1D4C8}", Nj = "\u2216", Tj = "\u2323", $j = "\u22C6", Dj = "\u2606", Cj = "\u2605", Rj = "\u03F5", Ij = "\u03D5", Oj = "\xAF", Fj = "\u2282", Uj = "\u2AC5", _j = "\u2ABD", Bj = "\u2286", jj = "\u2AC3", Hj = "\u2AC1", Vj = "\u2ACB", Gj = "\u228A", zj = "\u2ABF", Mj = "\u2979", Pj = "\u2282", Zj = "\u2286", Yj = "\u2AC5", Wj = "\u228A", Jj = "\u2ACB", Kj = "\u2AC7", Xj = "\u2AD5", Qj = "\u2AD3", r2 = "\u227B", a2 = "\u2AB8", e2 = "\u227D", t2 = "\u2AB0", n2 = "\u2ABA", o2 = "\u2AB6", l2 = "\u22E9", i2 = "\u227F", s2 = "\u2211", c2 = "\u266A", v2 = "\u2283", u2 = "\xB9", p2 = "\xB2", d2 = "\xB3", g2 = "\u2AC6", f2 = "\u2ABE", m2 = "\u2AD8", h2 = "\u2287", b2 = "\u2AC4", y2 = "\u27C9", w2 = "\u2AD7", x2 = "\u297B", S2 = "\u2AC2", q2 = "\u2ACC", A2 = "\u228B", E2 = "\u2AC0", k2 = "\u2283", L2 = "\u2287", N2 = "\u2AC6", T2 = "\u228B", $2 = "\u2ACC", D2 = "\u2AC8", C2 = "\u2AD4", R2 = "\u2AD6", I2 = "\u21D9", O2 = "\u2926", F2 = "\u2199", U2 = "\u2199", _2 = "\u292A", B2 = "\xDF", j2 = "\xDF", H2 = "\u2316", V2 = "\u03C4", G2 = "\u23B4", z2 = "\u0165", M2 = "\u0163", P2 = "\u0442", Z2 = "\u20DB", Y2 = "\u2315", W2 = "\u{1D531}", J2 = "\u2234", K2 = "\u2234", X2 = "\u03B8", Q2 = "\u03D1", rH = "\u03D1", aH = "\u2248", eH = "\u223C", tH = "\u2009", nH = "\u2248", oH = "\u223C", lH = "\xFE", iH = "\xFE", sH = "\u02DC", cH = "\xD7", vH = "\xD7", uH = "\u22A0", pH = "\u2A31", dH = "\u2A30", gH = "\u222D", fH = "\u2928", mH = "\u22A4", hH = "\u2336", bH = "\u2AF1", yH = "\u{1D565}", wH = "\u2ADA", xH = "\u2929", SH = "\u2034", qH = "\u2122", AH = "\u25B5", EH = "\u25BF", kH = "\u25C3", LH = "\u22B4", NH = "\u225C", TH = "\u25B9", $H = "\u22B5", DH = "\u25EC", CH = "\u225C", RH = "\u2A3A", IH = "\u2A39", OH = "\u29CD", FH = "\u2A3B", UH = "\u23E2", _H = "\u{1D4C9}", BH = "\u0446", jH = "\u045B", HH = "\u0167", VH = "\u226C", GH = "\u219E", zH = "\u21A0", MH = "\u21D1", PH = "\u2963", ZH = "\xFA", YH = "\xFA", WH = "\u2191", JH = "\u045E", KH = "\u016D", XH = "\xFB", QH = "\xFB", rV = "\u0443", aV = "\u21C5", eV = "\u0171", tV = "\u296E", nV = "\u297E", oV = "\u{1D532}", lV = "\xF9", iV = "\xF9", sV = "\u21BF", cV = "\u21BE", vV = "\u2580", uV = "\u231C", pV = "\u231C", dV = "\u230F", gV = "\u25F8", fV = "\u016B", mV = "\xA8", hV = "\xA8", bV = "\u0173", yV = "\u{1D566}", wV = "\u2191", xV = "\u2195", SV = "\u21BF", qV = "\u21BE", AV = "\u228E", EV = "\u03C5", kV = "\u03D2", LV = "\u03C5", NV = "\u21C8", TV = "\u231D", $V = "\u231D", DV = "\u230E", CV = "\u016F", RV = "\u25F9", IV = "\u{1D4CA}", OV = "\u22F0", FV = "\u0169", UV = "\u25B5", _V = "\u25B4", BV = "\u21C8", jV = "\xFC", HV = "\xFC", VV = "\u29A7", GV = "\u21D5", zV = "\u2AE8", MV = "\u2AE9", PV = "\u22A8", ZV = "\u299C", YV = "\u03F5", WV = "\u03F0", JV = "\u2205", KV = "\u03D5", XV = "\u03D6", QV = "\u221D", rG = "\u2195", aG = "\u03F1", eG = "\u03C2", tG = "\u228A\uFE00", nG = "\u2ACB\uFE00", oG = "\u228B\uFE00", lG = "\u2ACC\uFE00", iG = "\u03D1", sG = "\u22B2", cG = "\u22B3", vG = "\u0432", uG = "\u22A2", pG = "\u2228", dG = "\u22BB", gG = "\u225A", fG = "\u22EE", mG = "|", hG = "|", bG = "\u{1D533}", yG = "\u22B2", wG = "\u2282\u20D2", xG = "\u2283\u20D2", SG = "\u{1D567}", qG = "\u221D", AG = "\u22B3", EG = "\u{1D4CB}", kG = "\u2ACB\uFE00", LG = "\u228A\uFE00", NG = "\u2ACC\uFE00", TG = "\u228B\uFE00", $G = "\u299A", DG = "\u0175", CG = "\u2A5F", RG = "\u2227", IG = "\u2259", OG = "\u2118", FG = "\u{1D534}", UG = "\u{1D568}", _G = "\u2118", BG = "\u2240", jG = "\u2240", HG = "\u{1D4CC}", VG = "\u22C2", GG = "\u25EF", zG = "\u22C3", MG = "\u25BD", PG = "\u{1D535}", ZG = "\u27FA", YG = "\u27F7", WG = "\u03BE", JG = "\u27F8", KG = "\u27F5", XG = "\u27FC", QG = "\u22FB", rz = "\u2A00", az = "\u{1D569}", ez = "\u2A01", tz = "\u2A02", nz = "\u27F9", oz = "\u27F6", lz = "\u{1D4CD}", iz = "\u2A06", sz = "\u2A04", cz = "\u25B3", vz = "\u22C1", uz = "\u22C0", pz = "\xFD", dz = "\xFD", gz = "\u044F", fz = "\u0177", mz = "\u044B", hz = "\xA5", bz = "\xA5", yz = "\u{1D536}", wz = "\u0457", xz = "\u{1D56A}", Sz = "\u{1D4CE}", qz = "\u044E", Az = "\xFF", Ez = "\xFF", kz = "\u017A", Lz = "\u017E", Nz = "\u0437", Tz = "\u017C", $z = "\u2128", Dz = "\u03B6", Cz = "\u{1D537}", Rz = "\u0436", Iz = "\u21DD", Oz = "\u{1D56B}", Fz = "\u{1D4CF}", Uz = "\u200D", _z = "\u200C", Bz = {
  AEli: Cl,
  AElig: Rl,
  AM: Il,
  AMP: Ol,
  Aacut: Fl,
  Aacute: Ul,
  Abreve: _l,
  Acir: Bl,
  Acirc: jl,
  Acy: Hl,
  Afr: Vl,
  Agrav: Gl,
  Agrave: zl,
  Alpha: Ml,
  Amacr: Pl,
  And: Zl,
  Aogon: Yl,
  Aopf: Wl,
  ApplyFunction: Jl,
  Arin: Kl,
  Aring: Xl,
  Ascr: Ql,
  Assign: ri,
  Atild: ai,
  Atilde: ei,
  Aum: ti,
  Auml: ni,
  Backslash: oi,
  Barv: li,
  Barwed: ii,
  Bcy: si,
  Because: ci,
  Bernoullis: vi,
  Beta: ui,
  Bfr: pi,
  Bopf: di,
  Breve: gi,
  Bscr: fi,
  Bumpeq: mi,
  CHcy: hi,
  COP: bi,
  COPY: yi,
  Cacute: wi,
  Cap: xi,
  CapitalDifferentialD: Si,
  Cayleys: qi,
  Ccaron: Ai,
  Ccedi: Ei,
  Ccedil: ki,
  Ccirc: Li,
  Cconint: Ni,
  Cdot: Ti,
  Cedilla: $i,
  CenterDot: Di,
  Cfr: Ci,
  Chi: Ri,
  CircleDot: Ii,
  CircleMinus: Oi,
  CirclePlus: Fi,
  CircleTimes: Ui,
  ClockwiseContourIntegral: _i,
  CloseCurlyDoubleQuote: Bi,
  CloseCurlyQuote: ji,
  Colon: Hi,
  Colone: Vi,
  Congruent: Gi,
  Conint: zi,
  ContourIntegral: Mi,
  Copf: Pi,
  Coproduct: Zi,
  CounterClockwiseContourIntegral: Yi,
  Cross: Wi,
  Cscr: Ji,
  Cup: Ki,
  CupCap: Xi,
  DD: Qi,
  DDotrahd: rs,
  DJcy: as,
  DScy: es,
  DZcy: ts,
  Dagger: ns,
  Darr: os,
  Dashv: ls,
  Dcaron: is,
  Dcy: ss,
  Del: cs,
  Delta: vs,
  Dfr: us,
  DiacriticalAcute: ps,
  DiacriticalDot: ds,
  DiacriticalDoubleAcute: gs,
  DiacriticalGrave: fs,
  DiacriticalTilde: ms,
  Diamond: hs,
  DifferentialD: bs,
  Dopf: ys,
  Dot: ws,
  DotDot: xs,
  DotEqual: Ss,
  DoubleContourIntegral: qs,
  DoubleDot: As,
  DoubleDownArrow: Es,
  DoubleLeftArrow: ks,
  DoubleLeftRightArrow: Ls,
  DoubleLeftTee: Ns,
  DoubleLongLeftArrow: Ts,
  DoubleLongLeftRightArrow: $s,
  DoubleLongRightArrow: Ds,
  DoubleRightArrow: Cs,
  DoubleRightTee: Rs,
  DoubleUpArrow: Is,
  DoubleUpDownArrow: Os,
  DoubleVerticalBar: Fs,
  DownArrow: Us,
  DownArrowBar: _s,
  DownArrowUpArrow: Bs,
  DownBreve: js,
  DownLeftRightVector: Hs,
  DownLeftTeeVector: Vs,
  DownLeftVector: Gs,
  DownLeftVectorBar: zs,
  DownRightTeeVector: Ms,
  DownRightVector: Ps,
  DownRightVectorBar: Zs,
  DownTee: Ys,
  DownTeeArrow: Ws,
  Downarrow: Js,
  Dscr: Ks,
  Dstrok: Xs,
  ENG: Qs,
  ET: rc,
  ETH: ac,
  Eacut: ec,
  Eacute: tc,
  Ecaron: nc,
  Ecir: oc,
  Ecirc: lc,
  Ecy: ic,
  Edot: sc,
  Efr: cc,
  Egrav: vc,
  Egrave: uc,
  Element: pc,
  Emacr: dc,
  EmptySmallSquare: gc,
  EmptyVerySmallSquare: fc,
  Eogon: mc,
  Eopf: hc,
  Epsilon: bc,
  Equal: yc,
  EqualTilde: wc,
  Equilibrium: xc,
  Escr: Sc,
  Esim: qc,
  Eta: Ac,
  Eum: Ec,
  Euml: kc,
  Exists: Lc,
  ExponentialE: Nc,
  Fcy: Tc,
  Ffr: $c,
  FilledSmallSquare: Dc,
  FilledVerySmallSquare: Cc,
  Fopf: Rc,
  ForAll: Ic,
  Fouriertrf: Oc,
  Fscr: Fc,
  GJcy: Uc,
  G: _c,
  GT: Bc,
  Gamma: jc,
  Gammad: Hc,
  Gbreve: Vc,
  Gcedil: Gc,
  Gcirc: zc,
  Gcy: Mc,
  Gdot: Pc,
  Gfr: Zc,
  Gg: Yc,
  Gopf: Wc,
  GreaterEqual: Jc,
  GreaterEqualLess: Kc,
  GreaterFullEqual: Xc,
  GreaterGreater: Qc,
  GreaterLess: rv,
  GreaterSlantEqual: av,
  GreaterTilde: ev,
  Gscr: tv,
  Gt: nv,
  HARDcy: ov,
  Hacek: lv,
  Hat: iv,
  Hcirc: sv,
  Hfr: cv,
  HilbertSpace: vv,
  Hopf: uv,
  HorizontalLine: pv,
  Hscr: dv,
  Hstrok: gv,
  HumpDownHump: fv,
  HumpEqual: mv,
  IEcy: hv,
  IJlig: bv,
  IOcy: yv,
  Iacut: wv,
  Iacute: xv,
  Icir: Sv,
  Icirc: qv,
  Icy: Av,
  Idot: Ev,
  Ifr: kv,
  Igrav: Lv,
  Igrave: Nv,
  Im: Tv,
  Imacr: $v,
  ImaginaryI: Dv,
  Implies: Cv,
  Int: Rv,
  Integral: Iv,
  Intersection: Ov,
  InvisibleComma: Fv,
  InvisibleTimes: Uv,
  Iogon: _v,
  Iopf: Bv,
  Iota: jv,
  Iscr: Hv,
  Itilde: Vv,
  Iukcy: Gv,
  Ium: zv,
  Iuml: Mv,
  Jcirc: Pv,
  Jcy: Zv,
  Jfr: Yv,
  Jopf: Wv,
  Jscr: Jv,
  Jsercy: Kv,
  Jukcy: Xv,
  KHcy: Qv,
  KJcy: ru,
  Kappa: au,
  Kcedil: eu,
  Kcy: tu,
  Kfr: nu,
  Kopf: ou,
  Kscr: lu,
  LJcy: iu,
  L: su,
  LT: cu,
  Lacute: vu,
  Lambda: uu,
  Lang: pu,
  Laplacetrf: du,
  Larr: gu,
  Lcaron: fu,
  Lcedil: mu,
  Lcy: hu,
  LeftAngleBracket: bu,
  LeftArrow: yu,
  LeftArrowBar: wu,
  LeftArrowRightArrow: xu,
  LeftCeiling: Su,
  LeftDoubleBracket: qu,
  LeftDownTeeVector: Au,
  LeftDownVector: Eu,
  LeftDownVectorBar: ku,
  LeftFloor: Lu,
  LeftRightArrow: Nu,
  LeftRightVector: Tu,
  LeftTee: $u,
  LeftTeeArrow: Du,
  LeftTeeVector: Cu,
  LeftTriangle: Ru,
  LeftTriangleBar: Iu,
  LeftTriangleEqual: Ou,
  LeftUpDownVector: Fu,
  LeftUpTeeVector: Uu,
  LeftUpVector: _u,
  LeftUpVectorBar: Bu,
  LeftVector: ju,
  LeftVectorBar: Hu,
  Leftarrow: Vu,
  Leftrightarrow: Gu,
  LessEqualGreater: zu,
  LessFullEqual: Mu,
  LessGreater: Pu,
  LessLess: Zu,
  LessSlantEqual: Yu,
  LessTilde: Wu,
  Lfr: Ju,
  Ll: Ku,
  Lleftarrow: Xu,
  Lmidot: Qu,
  LongLeftArrow: rp,
  LongLeftRightArrow: ap,
  LongRightArrow: ep,
  Longleftarrow: tp,
  Longleftrightarrow: np,
  Longrightarrow: op,
  Lopf: lp,
  LowerLeftArrow: ip,
  LowerRightArrow: sp,
  Lscr: cp,
  Lsh: vp,
  Lstrok: up,
  Lt: pp,
  Map: "\u2905",
  Mcy: dp,
  MediumSpace: gp,
  Mellintrf: fp,
  Mfr: mp,
  MinusPlus: hp,
  Mopf: bp,
  Mscr: yp,
  Mu: wp,
  NJcy: xp,
  Nacute: Sp,
  Ncaron: qp,
  Ncedil: Ap,
  Ncy: Ep,
  NegativeMediumSpace: kp,
  NegativeThickSpace: Lp,
  NegativeThinSpace: Np,
  NegativeVeryThinSpace: Tp,
  NestedGreaterGreater: $p,
  NestedLessLess: Dp,
  NewLine: Cp,
  Nfr: Rp,
  NoBreak: Ip,
  NonBreakingSpace: Op,
  Nopf: Fp,
  Not: Up,
  NotCongruent: _p,
  NotCupCap: Bp,
  NotDoubleVerticalBar: jp,
  NotElement: Hp,
  NotEqual: Vp,
  NotEqualTilde: Gp,
  NotExists: zp,
  NotGreater: Mp,
  NotGreaterEqual: Pp,
  NotGreaterFullEqual: Zp,
  NotGreaterGreater: Yp,
  NotGreaterLess: Wp,
  NotGreaterSlantEqual: Jp,
  NotGreaterTilde: Kp,
  NotHumpDownHump: Xp,
  NotHumpEqual: Qp,
  NotLeftTriangle: rd,
  NotLeftTriangleBar: ad,
  NotLeftTriangleEqual: ed,
  NotLess: td,
  NotLessEqual: nd,
  NotLessGreater: od,
  NotLessLess: ld,
  NotLessSlantEqual: id,
  NotLessTilde: sd,
  NotNestedGreaterGreater: cd,
  NotNestedLessLess: vd,
  NotPrecedes: ud,
  NotPrecedesEqual: pd,
  NotPrecedesSlantEqual: dd,
  NotReverseElement: gd,
  NotRightTriangle: fd,
  NotRightTriangleBar: md,
  NotRightTriangleEqual: hd,
  NotSquareSubset: bd,
  NotSquareSubsetEqual: yd,
  NotSquareSuperset: wd,
  NotSquareSupersetEqual: xd,
  NotSubset: Sd,
  NotSubsetEqual: qd,
  NotSucceeds: Ad,
  NotSucceedsEqual: Ed,
  NotSucceedsSlantEqual: kd,
  NotSucceedsTilde: Ld,
  NotSuperset: Nd,
  NotSupersetEqual: Td,
  NotTilde: $d,
  NotTildeEqual: Dd,
  NotTildeFullEqual: Cd,
  NotTildeTilde: Rd,
  NotVerticalBar: Id,
  Nscr: Od,
  Ntild: Fd,
  Ntilde: Ud,
  Nu: _d,
  OElig: Bd,
  Oacut: jd,
  Oacute: Hd,
  Ocir: Vd,
  Ocirc: Gd,
  Ocy: zd,
  Odblac: Md,
  Ofr: Pd,
  Ograv: Zd,
  Ograve: Yd,
  Omacr: Wd,
  Omega: Jd,
  Omicron: Kd,
  Oopf: Xd,
  OpenCurlyDoubleQuote: Qd,
  OpenCurlyQuote: rg,
  Or: ag,
  Oscr: eg,
  Oslas: tg,
  Oslash: ng,
  Otild: og,
  Otilde: lg,
  Otimes: ig,
  Oum: sg,
  Ouml: cg,
  OverBar: vg,
  OverBrace: ug,
  OverBracket: pg,
  OverParenthesis: dg,
  PartialD: gg,
  Pcy: fg,
  Pfr: mg,
  Phi: hg,
  Pi: bg,
  PlusMinus: yg,
  Poincareplane: wg,
  Popf: xg,
  Pr: Sg,
  Precedes: qg,
  PrecedesEqual: Ag,
  PrecedesSlantEqual: Eg,
  PrecedesTilde: kg,
  Prime: Lg,
  Product: Ng,
  Proportion: Tg,
  Proportional: $g,
  Pscr: Dg,
  Psi: Cg,
  QUO: Rg,
  QUOT: Ig,
  Qfr: Og,
  Qopf: Fg,
  Qscr: Ug,
  RBarr: _g,
  RE: Bg,
  REG: jg,
  Racute: Hg,
  Rang: Vg,
  Rarr: Gg,
  Rarrtl: zg,
  Rcaron: Mg,
  Rcedil: Pg,
  Rcy: Zg,
  Re: Yg,
  ReverseElement: Wg,
  ReverseEquilibrium: Jg,
  ReverseUpEquilibrium: Kg,
  Rfr: Xg,
  Rho: Qg,
  RightAngleBracket: rf,
  RightArrow: af,
  RightArrowBar: ef,
  RightArrowLeftArrow: tf,
  RightCeiling: nf,
  RightDoubleBracket: of,
  RightDownTeeVector: lf,
  RightDownVector: sf,
  RightDownVectorBar: cf,
  RightFloor: vf,
  RightTee: uf,
  RightTeeArrow: pf,
  RightTeeVector: df,
  RightTriangle: gf,
  RightTriangleBar: ff,
  RightTriangleEqual: mf,
  RightUpDownVector: hf,
  RightUpTeeVector: bf,
  RightUpVector: yf,
  RightUpVectorBar: wf,
  RightVector: xf,
  RightVectorBar: Sf,
  Rightarrow: qf,
  Ropf: Af,
  RoundImplies: Ef,
  Rrightarrow: kf,
  Rscr: Lf,
  Rsh: Nf,
  RuleDelayed: Tf,
  SHCHcy: $f,
  SHcy: Df,
  SOFTcy: Cf,
  Sacute: Rf,
  Sc: If,
  Scaron: Of,
  Scedil: Ff,
  Scirc: Uf,
  Scy: _f,
  Sfr: Bf,
  ShortDownArrow: jf,
  ShortLeftArrow: Hf,
  ShortRightArrow: Vf,
  ShortUpArrow: Gf,
  Sigma: zf,
  SmallCircle: Mf,
  Sopf: Pf,
  Sqrt: Zf,
  Square: Yf,
  SquareIntersection: Wf,
  SquareSubset: Jf,
  SquareSubsetEqual: Kf,
  SquareSuperset: Xf,
  SquareSupersetEqual: Qf,
  SquareUnion: rm,
  Sscr: am,
  Star: em,
  Sub: tm,
  Subset: nm,
  SubsetEqual: om,
  Succeeds: lm,
  SucceedsEqual: im,
  SucceedsSlantEqual: sm,
  SucceedsTilde: cm,
  SuchThat: vm,
  Sum: um,
  Sup: pm,
  Superset: dm,
  SupersetEqual: gm,
  Supset: fm,
  THOR: mm,
  THORN: hm,
  TRADE: bm,
  TSHcy: ym,
  TScy: wm,
  Tab: xm,
  Tau: Sm,
  Tcaron: qm,
  Tcedil: Am,
  Tcy: Em,
  Tfr: km,
  Therefore: Lm,
  Theta: Nm,
  ThickSpace: Tm,
  ThinSpace: $m,
  Tilde: Dm,
  TildeEqual: Cm,
  TildeFullEqual: Rm,
  TildeTilde: Im,
  Topf: Om,
  TripleDot: Fm,
  Tscr: Um,
  Tstrok: _m,
  Uacut: Bm,
  Uacute: jm,
  Uarr: Hm,
  Uarrocir: Vm,
  Ubrcy: Gm,
  Ubreve: zm,
  Ucir: Mm,
  Ucirc: Pm,
  Ucy: Zm,
  Udblac: Ym,
  Ufr: Wm,
  Ugrav: Jm,
  Ugrave: Km,
  Umacr: Xm,
  UnderBar: Qm,
  UnderBrace: rh,
  UnderBracket: ah,
  UnderParenthesis: eh,
  Union: th,
  UnionPlus: nh,
  Uogon: oh,
  Uopf: lh,
  UpArrow: ih,
  UpArrowBar: sh,
  UpArrowDownArrow: ch,
  UpDownArrow: vh,
  UpEquilibrium: uh,
  UpTee: ph,
  UpTeeArrow: dh,
  Uparrow: gh,
  Updownarrow: fh,
  UpperLeftArrow: mh,
  UpperRightArrow: hh,
  Upsi: bh,
  Upsilon: yh,
  Uring: wh,
  Uscr: xh,
  Utilde: Sh,
  Uum: qh,
  Uuml: Ah,
  VDash: Eh,
  Vbar: kh,
  Vcy: Lh,
  Vdash: Nh,
  Vdashl: Th,
  Vee: $h,
  Verbar: Dh,
  Vert: Ch,
  VerticalBar: Rh,
  VerticalLine: Ih,
  VerticalSeparator: Oh,
  VerticalTilde: Fh,
  VeryThinSpace: Uh,
  Vfr: _h,
  Vopf: Bh,
  Vscr: jh,
  Vvdash: Hh,
  Wcirc: Vh,
  Wedge: Gh,
  Wfr: zh,
  Wopf: Mh,
  Wscr: Ph,
  Xfr: Zh,
  Xi: Yh,
  Xopf: Wh,
  Xscr: Jh,
  YAcy: Kh,
  YIcy: Xh,
  YUcy: Qh,
  Yacut: rb,
  Yacute: ab,
  Ycirc: eb,
  Ycy: tb,
  Yfr: nb,
  Yopf: ob,
  Yscr: lb,
  Yuml: ib,
  ZHcy: sb,
  Zacute: cb,
  Zcaron: vb,
  Zcy: ub,
  Zdot: pb,
  ZeroWidthSpace: db,
  Zeta: gb,
  Zfr: fb,
  Zopf: mb,
  Zscr: hb,
  aacut: bb,
  aacute: yb,
  abreve: wb,
  ac: xb,
  acE: Sb,
  acd: qb,
  acir: Ab,
  acirc: Eb,
  acut: kb,
  acute: Lb,
  acy: Nb,
  aeli: Tb,
  aelig: $b,
  af: Db,
  afr: Cb,
  agrav: Rb,
  agrave: Ib,
  alefsym: Ob,
  aleph: Fb,
  alpha: Ub,
  amacr: _b,
  amalg: Bb,
  am: jb,
  amp: Hb,
  and: Vb,
  andand: Gb,
  andd: zb,
  andslope: Mb,
  andv: Pb,
  ang: Zb,
  ange: Yb,
  angle: Wb,
  angmsd: Jb,
  angmsdaa: Kb,
  angmsdab: Xb,
  angmsdac: Qb,
  angmsdad: ry,
  angmsdae: ay,
  angmsdaf: ey,
  angmsdag: ty,
  angmsdah: ny,
  angrt: oy,
  angrtvb: ly,
  angrtvbd: iy,
  angsph: sy,
  angst: cy,
  angzarr: vy,
  aogon: uy,
  aopf: py,
  ap: dy,
  apE: gy,
  apacir: fy,
  ape: my,
  apid: hy,
  apos: by,
  approx: yy,
  approxeq: wy,
  arin: xy,
  aring: Sy,
  ascr: qy,
  ast: Ay,
  asymp: Ey,
  asympeq: ky,
  atild: Ly,
  atilde: Ny,
  aum: Ty,
  auml: $y,
  awconint: Dy,
  awint: Cy,
  bNot: Ry,
  backcong: Iy,
  backepsilon: Oy,
  backprime: Fy,
  backsim: Uy,
  backsimeq: _y,
  barvee: By,
  barwed: jy,
  barwedge: Hy,
  bbrk: Vy,
  bbrktbrk: Gy,
  bcong: zy,
  bcy: My,
  bdquo: Py,
  becaus: Zy,
  because: Yy,
  bemptyv: Wy,
  bepsi: Jy,
  bernou: Ky,
  beta: Xy,
  beth: Qy,
  between: rw,
  bfr: aw,
  bigcap: ew,
  bigcirc: tw,
  bigcup: nw,
  bigodot: ow,
  bigoplus: lw,
  bigotimes: iw,
  bigsqcup: sw,
  bigstar: cw,
  bigtriangledown: vw,
  bigtriangleup: uw,
  biguplus: pw,
  bigvee: dw,
  bigwedge: gw,
  bkarow: fw,
  blacklozenge: mw,
  blacksquare: hw,
  blacktriangle: bw,
  blacktriangledown: yw,
  blacktriangleleft: ww,
  blacktriangleright: xw,
  blank: Sw,
  blk12: qw,
  blk14: Aw,
  blk34: Ew,
  block: kw,
  bne: Lw,
  bnequiv: Nw,
  bnot: Tw,
  bopf: $w,
  bot: Dw,
  bottom: Cw,
  bowtie: Rw,
  boxDL: Iw,
  boxDR: Ow,
  boxDl: Fw,
  boxDr: Uw,
  boxH: _w,
  boxHD: Bw,
  boxHU: jw,
  boxHd: Hw,
  boxHu: Vw,
  boxUL: Gw,
  boxUR: zw,
  boxUl: Mw,
  boxUr: Pw,
  boxV: Zw,
  boxVH: Yw,
  boxVL: Ww,
  boxVR: Jw,
  boxVh: Kw,
  boxVl: Xw,
  boxVr: Qw,
  boxbox: rx,
  boxdL: ax,
  boxdR: ex,
  boxdl: tx,
  boxdr: nx,
  boxh: ox,
  boxhD: lx,
  boxhU: ix,
  boxhd: sx,
  boxhu: cx,
  boxminus: vx,
  boxplus: ux,
  boxtimes: px,
  boxuL: dx,
  boxuR: gx,
  boxul: fx,
  boxur: mx,
  boxv: hx,
  boxvH: bx,
  boxvL: yx,
  boxvR: wx,
  boxvh: xx,
  boxvl: Sx,
  boxvr: qx,
  bprime: Ax,
  breve: Ex,
  brvba: kx,
  brvbar: Lx,
  bscr: Nx,
  bsemi: Tx,
  bsim: $x,
  bsime: Dx,
  bsol: Cx,
  bsolb: Rx,
  bsolhsub: Ix,
  bull: Ox,
  bullet: Fx,
  bump: Ux,
  bumpE: _x,
  bumpe: Bx,
  bumpeq: jx,
  cacute: Hx,
  cap: Vx,
  capand: Gx,
  capbrcup: zx,
  capcap: Mx,
  capcup: Px,
  capdot: Zx,
  caps: Yx,
  caret: Wx,
  caron: Jx,
  ccaps: Kx,
  ccaron: Xx,
  ccedi: Qx,
  ccedil: rS,
  ccirc: aS,
  ccups: eS,
  ccupssm: tS,
  cdot: nS,
  cedi: oS,
  cedil: lS,
  cemptyv: iS,
  cen: sS,
  cent: cS,
  centerdot: vS,
  cfr: uS,
  chcy: pS,
  check: dS,
  checkmark: gS,
  chi: fS,
  cir: mS,
  cirE: hS,
  circ: bS,
  circeq: yS,
  circlearrowleft: wS,
  circlearrowright: xS,
  circledR: SS,
  circledS: qS,
  circledast: AS,
  circledcirc: ES,
  circleddash: kS,
  cire: LS,
  cirfnint: NS,
  cirmid: TS,
  cirscir: $S,
  clubs: DS,
  clubsuit: CS,
  colon: RS,
  colone: IS,
  coloneq: OS,
  comma: FS,
  commat: US,
  comp: _S,
  compfn: BS,
  complement: jS,
  complexes: HS,
  cong: VS,
  congdot: GS,
  conint: zS,
  copf: MS,
  coprod: PS,
  cop: ZS,
  copy: YS,
  copysr: WS,
  crarr: JS,
  cross: KS,
  cscr: XS,
  csub: QS,
  csube: rq,
  csup: aq,
  csupe: eq,
  ctdot: tq,
  cudarrl: nq,
  cudarrr: oq,
  cuepr: lq,
  cuesc: iq,
  cularr: sq,
  cularrp: cq,
  cup: vq,
  cupbrcap: uq,
  cupcap: pq,
  cupcup: dq,
  cupdot: gq,
  cupor: fq,
  cups: mq,
  curarr: hq,
  curarrm: bq,
  curlyeqprec: yq,
  curlyeqsucc: wq,
  curlyvee: xq,
  curlywedge: Sq,
  curre: qq,
  curren: Aq,
  curvearrowleft: Eq,
  curvearrowright: kq,
  cuvee: Lq,
  cuwed: Nq,
  cwconint: Tq,
  cwint: $q,
  cylcty: Dq,
  dArr: Cq,
  dHar: Rq,
  dagger: Iq,
  daleth: Oq,
  darr: Fq,
  dash: Uq,
  dashv: _q,
  dbkarow: Bq,
  dblac: jq,
  dcaron: Hq,
  dcy: Vq,
  dd: Gq,
  ddagger: zq,
  ddarr: Mq,
  ddotseq: Pq,
  de: Zq,
  deg: Yq,
  delta: Wq,
  demptyv: Jq,
  dfisht: Kq,
  dfr: Xq,
  dharl: Qq,
  dharr: rA,
  diam: aA,
  diamond: eA,
  diamondsuit: tA,
  diams: nA,
  die: oA,
  digamma: lA,
  disin: iA,
  div: sA,
  divid: cA,
  divide: vA,
  divideontimes: uA,
  divonx: pA,
  djcy: dA,
  dlcorn: gA,
  dlcrop: fA,
  dollar: mA,
  dopf: hA,
  dot: bA,
  doteq: yA,
  doteqdot: wA,
  dotminus: xA,
  dotplus: SA,
  dotsquare: qA,
  doublebarwedge: AA,
  downarrow: EA,
  downdownarrows: kA,
  downharpoonleft: LA,
  downharpoonright: NA,
  drbkarow: TA,
  drcorn: $A,
  drcrop: DA,
  dscr: CA,
  dscy: RA,
  dsol: IA,
  dstrok: OA,
  dtdot: FA,
  dtri: UA,
  dtrif: _A,
  duarr: BA,
  duhar: jA,
  dwangle: HA,
  dzcy: VA,
  dzigrarr: GA,
  eDDot: zA,
  eDot: MA,
  eacut: PA,
  eacute: ZA,
  easter: YA,
  ecaron: WA,
  ecir: JA,
  ecirc: KA,
  ecolon: XA,
  ecy: QA,
  edot: rE,
  ee: aE,
  efDot: eE,
  efr: tE,
  eg: nE,
  egrav: oE,
  egrave: lE,
  egs: iE,
  egsdot: sE,
  el: cE,
  elinters: vE,
  ell: uE,
  els: pE,
  elsdot: dE,
  emacr: gE,
  empty: fE,
  emptyset: mE,
  emptyv: hE,
  emsp13: bE,
  emsp14: yE,
  emsp: wE,
  eng: xE,
  ensp: SE,
  eogon: qE,
  eopf: AE,
  epar: EE,
  eparsl: kE,
  eplus: LE,
  epsi: NE,
  epsilon: TE,
  epsiv: $E,
  eqcirc: DE,
  eqcolon: CE,
  eqsim: RE,
  eqslantgtr: IE,
  eqslantless: OE,
  equals: FE,
  equest: UE,
  equiv: _E,
  equivDD: BE,
  eqvparsl: jE,
  erDot: HE,
  erarr: VE,
  escr: GE,
  esdot: zE,
  esim: ME,
  eta: PE,
  et: ZE,
  eth: YE,
  eum: WE,
  euml: JE,
  euro: KE,
  excl: XE,
  exist: QE,
  expectation: rk,
  exponentiale: ak,
  fallingdotseq: ek,
  fcy: tk,
  female: nk,
  ffilig: ok,
  fflig: lk,
  ffllig: ik,
  ffr: sk,
  filig: ck,
  fjlig: vk,
  flat: uk,
  fllig: pk,
  fltns: dk,
  fnof: gk,
  fopf: fk,
  forall: mk,
  fork: hk,
  forkv: bk,
  fpartint: yk,
  frac1: wk,
  frac12: xk,
  frac13: Sk,
  frac14: qk,
  frac15: Ak,
  frac16: Ek,
  frac18: kk,
  frac23: Lk,
  frac25: Nk,
  frac3: Tk,
  frac34: $k,
  frac35: Dk,
  frac38: Ck,
  frac45: Rk,
  frac56: Ik,
  frac58: Ok,
  frac78: Fk,
  frasl: Uk,
  frown: _k,
  fscr: Bk,
  gE: jk,
  gEl: Hk,
  gacute: Vk,
  gamma: Gk,
  gammad: zk,
  gap: Mk,
  gbreve: Pk,
  gcirc: Zk,
  gcy: Yk,
  gdot: Wk,
  ge: Jk,
  gel: Kk,
  geq: Xk,
  geqq: Qk,
  geqslant: r1,
  ges: a1,
  gescc: e1,
  gesdot: t1,
  gesdoto: n1,
  gesdotol: o1,
  gesl: l1,
  gesles: i1,
  gfr: s1,
  gg: c1,
  ggg: v1,
  gimel: u1,
  gjcy: p1,
  gl: d1,
  glE: g1,
  gla: f1,
  glj: m1,
  gnE: h1,
  gnap: b1,
  gnapprox: y1,
  gne: w1,
  gneq: x1,
  gneqq: S1,
  gnsim: q1,
  gopf: A1,
  grave: E1,
  gscr: k1,
  gsim: L1,
  gsime: N1,
  gsiml: T1,
  g: $1,
  gt: D1,
  gtcc: C1,
  gtcir: R1,
  gtdot: I1,
  gtlPar: O1,
  gtquest: F1,
  gtrapprox: U1,
  gtrarr: _1,
  gtrdot: B1,
  gtreqless: j1,
  gtreqqless: H1,
  gtrless: V1,
  gtrsim: G1,
  gvertneqq: z1,
  gvnE: M1,
  hArr: P1,
  hairsp: Z1,
  half: Y1,
  hamilt: W1,
  hardcy: J1,
  harr: K1,
  harrcir: X1,
  harrw: Q1,
  hbar: rL,
  hcirc: aL,
  hearts: eL,
  heartsuit: tL,
  hellip: nL,
  hercon: oL,
  hfr: lL,
  hksearow: iL,
  hkswarow: sL,
  hoarr: cL,
  homtht: vL,
  hookleftarrow: uL,
  hookrightarrow: pL,
  hopf: dL,
  horbar: gL,
  hscr: fL,
  hslash: mL,
  hstrok: hL,
  hybull: bL,
  hyphen: yL,
  iacut: wL,
  iacute: xL,
  ic: SL,
  icir: qL,
  icirc: AL,
  icy: EL,
  iecy: kL,
  iexc: LL,
  iexcl: NL,
  iff: TL,
  ifr: $L,
  igrav: DL,
  igrave: CL,
  ii: RL,
  iiiint: IL,
  iiint: OL,
  iinfin: FL,
  iiota: UL,
  ijlig: _L,
  imacr: BL,
  image: jL,
  imagline: HL,
  imagpart: VL,
  imath: GL,
  imof: zL,
  imped: ML,
  in: "\u2208",
  incare: PL,
  infin: ZL,
  infintie: YL,
  inodot: WL,
  int: JL,
  intcal: KL,
  integers: XL,
  intercal: QL,
  intlarhk: rN,
  intprod: aN,
  iocy: eN,
  iogon: tN,
  iopf: nN,
  iota: oN,
  iprod: lN,
  iques: iN,
  iquest: sN,
  iscr: cN,
  isin: vN,
  isinE: uN,
  isindot: pN,
  isins: dN,
  isinsv: gN,
  isinv: fN,
  it: mN,
  itilde: hN,
  iukcy: bN,
  ium: yN,
  iuml: wN,
  jcirc: xN,
  jcy: SN,
  jfr: qN,
  jmath: AN,
  jopf: EN,
  jscr: kN,
  jsercy: LN,
  jukcy: NN,
  kappa: TN,
  kappav: $N,
  kcedil: DN,
  kcy: CN,
  kfr: RN,
  kgreen: IN,
  khcy: ON,
  kjcy: FN,
  kopf: UN,
  kscr: _N,
  lAarr: BN,
  lArr: jN,
  lAtail: HN,
  lBarr: VN,
  lE: GN,
  lEg: zN,
  lHar: MN,
  lacute: PN,
  laemptyv: ZN,
  lagran: YN,
  lambda: WN,
  lang: JN,
  langd: KN,
  langle: XN,
  lap: QN,
  laqu: rT,
  laquo: aT,
  larr: eT,
  larrb: tT,
  larrbfs: nT,
  larrfs: oT,
  larrhk: lT,
  larrlp: iT,
  larrpl: sT,
  larrsim: cT,
  larrtl: vT,
  lat: uT,
  latail: pT,
  late: dT,
  lates: gT,
  lbarr: fT,
  lbbrk: mT,
  lbrace: hT,
  lbrack: bT,
  lbrke: yT,
  lbrksld: wT,
  lbrkslu: xT,
  lcaron: ST,
  lcedil: qT,
  lceil: AT,
  lcub: ET,
  lcy: kT,
  ldca: LT,
  ldquo: NT,
  ldquor: TT,
  ldrdhar: $T,
  ldrushar: DT,
  ldsh: CT,
  le: RT,
  leftarrow: IT,
  leftarrowtail: OT,
  leftharpoondown: FT,
  leftharpoonup: UT,
  leftleftarrows: _T,
  leftrightarrow: BT,
  leftrightarrows: jT,
  leftrightharpoons: HT,
  leftrightsquigarrow: VT,
  leftthreetimes: GT,
  leg: zT,
  leq: MT,
  leqq: PT,
  leqslant: ZT,
  les: YT,
  lescc: WT,
  lesdot: JT,
  lesdoto: KT,
  lesdotor: XT,
  lesg: QT,
  lesges: r$,
  lessapprox: a$,
  lessdot: e$,
  lesseqgtr: t$,
  lesseqqgtr: n$,
  lessgtr: o$,
  lesssim: l$,
  lfisht: i$,
  lfloor: s$,
  lfr: c$,
  lg: v$,
  lgE: u$,
  lhard: p$,
  lharu: d$,
  lharul: g$,
  lhblk: f$,
  ljcy: m$,
  ll: h$,
  llarr: b$,
  llcorner: y$,
  llhard: w$,
  lltri: x$,
  lmidot: S$,
  lmoust: q$,
  lmoustache: A$,
  lnE: E$,
  lnap: k$,
  lnapprox: L$,
  lne: N$,
  lneq: T$,
  lneqq: $$,
  lnsim: D$,
  loang: C$,
  loarr: R$,
  lobrk: I$,
  longleftarrow: O$,
  longleftrightarrow: F$,
  longmapsto: U$,
  longrightarrow: _$,
  looparrowleft: B$,
  looparrowright: j$,
  lopar: H$,
  lopf: V$,
  loplus: G$,
  lotimes: z$,
  lowast: M$,
  lowbar: P$,
  loz: Z$,
  lozenge: Y$,
  lozf: W$,
  lpar: J$,
  lparlt: K$,
  lrarr: X$,
  lrcorner: Q$,
  lrhar: rD,
  lrhard: aD,
  lrm: eD,
  lrtri: tD,
  lsaquo: nD,
  lscr: oD,
  lsh: lD,
  lsim: iD,
  lsime: sD,
  lsimg: cD,
  lsqb: vD,
  lsquo: uD,
  lsquor: pD,
  lstrok: dD,
  l: gD,
  lt: fD,
  ltcc: mD,
  ltcir: hD,
  ltdot: bD,
  lthree: yD,
  ltimes: wD,
  ltlarr: xD,
  ltquest: SD,
  ltrPar: qD,
  ltri: AD,
  ltrie: ED,
  ltrif: kD,
  lurdshar: LD,
  luruhar: ND,
  lvertneqq: TD,
  lvnE: $D,
  mDDot: DD,
  mac: CD,
  macr: RD,
  male: ID,
  malt: OD,
  maltese: FD,
  map: UD,
  mapsto: _D,
  mapstodown: BD,
  mapstoleft: jD,
  mapstoup: HD,
  marker: VD,
  mcomma: GD,
  mcy: zD,
  mdash: MD,
  measuredangle: PD,
  mfr: ZD,
  mho: YD,
  micr: WD,
  micro: JD,
  mid: KD,
  midast: XD,
  midcir: QD,
  middo: r0,
  middot: a0,
  minus: e0,
  minusb: t0,
  minusd: n0,
  minusdu: o0,
  mlcp: l0,
  mldr: i0,
  mnplus: s0,
  models: c0,
  mopf: v0,
  mp: u0,
  mscr: p0,
  mstpos: d0,
  mu: g0,
  multimap: f0,
  mumap: m0,
  nGg: h0,
  nGt: b0,
  nGtv: y0,
  nLeftarrow: w0,
  nLeftrightarrow: x0,
  nLl: S0,
  nLt: q0,
  nLtv: A0,
  nRightarrow: E0,
  nVDash: k0,
  nVdash: L0,
  nabla: N0,
  nacute: T0,
  nang: $0,
  nap: D0,
  napE: C0,
  napid: R0,
  napos: I0,
  napprox: O0,
  natur: F0,
  natural: U0,
  naturals: _0,
  nbs: B0,
  nbsp: j0,
  nbump: H0,
  nbumpe: V0,
  ncap: G0,
  ncaron: z0,
  ncedil: M0,
  ncong: P0,
  ncongdot: Z0,
  ncup: Y0,
  ncy: W0,
  ndash: J0,
  ne: K0,
  neArr: X0,
  nearhk: Q0,
  nearr: rC,
  nearrow: aC,
  nedot: eC,
  nequiv: tC,
  nesear: nC,
  nesim: oC,
  nexist: lC,
  nexists: iC,
  nfr: sC,
  ngE: cC,
  nge: vC,
  ngeq: uC,
  ngeqq: pC,
  ngeqslant: dC,
  nges: gC,
  ngsim: fC,
  ngt: mC,
  ngtr: hC,
  nhArr: bC,
  nharr: yC,
  nhpar: wC,
  ni: xC,
  nis: SC,
  nisd: qC,
  niv: AC,
  njcy: EC,
  nlArr: kC,
  nlE: LC,
  nlarr: NC,
  nldr: TC,
  nle: $C,
  nleftarrow: DC,
  nleftrightarrow: CC,
  nleq: RC,
  nleqq: IC,
  nleqslant: OC,
  nles: FC,
  nless: UC,
  nlsim: _C,
  nlt: BC,
  nltri: jC,
  nltrie: HC,
  nmid: VC,
  nopf: GC,
  no: zC,
  not: MC,
  notin: PC,
  notinE: ZC,
  notindot: YC,
  notinva: WC,
  notinvb: JC,
  notinvc: KC,
  notni: XC,
  notniva: QC,
  notnivb: rR,
  notnivc: aR,
  npar: eR,
  nparallel: tR,
  nparsl: nR,
  npart: oR,
  npolint: lR,
  npr: iR,
  nprcue: sR,
  npre: cR,
  nprec: vR,
  npreceq: uR,
  nrArr: pR,
  nrarr: dR,
  nrarrc: gR,
  nrarrw: fR,
  nrightarrow: mR,
  nrtri: hR,
  nrtrie: bR,
  nsc: yR,
  nsccue: wR,
  nsce: xR,
  nscr: SR,
  nshortmid: qR,
  nshortparallel: AR,
  nsim: ER,
  nsime: kR,
  nsimeq: LR,
  nsmid: NR,
  nspar: TR,
  nsqsube: $R,
  nsqsupe: DR,
  nsub: CR,
  nsubE: RR,
  nsube: IR,
  nsubset: OR,
  nsubseteq: FR,
  nsubseteqq: UR,
  nsucc: _R,
  nsucceq: BR,
  nsup: jR,
  nsupE: HR,
  nsupe: VR,
  nsupset: GR,
  nsupseteq: zR,
  nsupseteqq: MR,
  ntgl: PR,
  ntild: ZR,
  ntilde: YR,
  ntlg: WR,
  ntriangleleft: JR,
  ntrianglelefteq: KR,
  ntriangleright: XR,
  ntrianglerighteq: QR,
  nu: rI,
  num: aI,
  numero: eI,
  numsp: tI,
  nvDash: nI,
  nvHarr: oI,
  nvap: lI,
  nvdash: iI,
  nvge: sI,
  nvgt: cI,
  nvinfin: vI,
  nvlArr: uI,
  nvle: pI,
  nvlt: dI,
  nvltrie: gI,
  nvrArr: fI,
  nvrtrie: mI,
  nvsim: hI,
  nwArr: bI,
  nwarhk: yI,
  nwarr: wI,
  nwarrow: xI,
  nwnear: SI,
  oS: qI,
  oacut: AI,
  oacute: EI,
  oast: kI,
  ocir: LI,
  ocirc: NI,
  ocy: TI,
  odash: $I,
  odblac: DI,
  odiv: CI,
  odot: RI,
  odsold: II,
  oelig: OI,
  ofcir: FI,
  ofr: UI,
  ogon: _I,
  ograv: BI,
  ograve: jI,
  ogt: HI,
  ohbar: VI,
  ohm: GI,
  oint: zI,
  olarr: MI,
  olcir: PI,
  olcross: ZI,
  oline: YI,
  olt: WI,
  omacr: JI,
  omega: KI,
  omicron: XI,
  omid: QI,
  ominus: rO,
  oopf: aO,
  opar: eO,
  operp: tO,
  oplus: nO,
  or: oO,
  orarr: lO,
  ord: iO,
  order: sO,
  orderof: cO,
  ordf: vO,
  ordm: uO,
  origof: pO,
  oror: dO,
  orslope: gO,
  orv: fO,
  oscr: mO,
  oslas: hO,
  oslash: bO,
  osol: yO,
  otild: wO,
  otilde: xO,
  otimes: SO,
  otimesas: qO,
  oum: AO,
  ouml: EO,
  ovbar: kO,
  par: LO,
  para: NO,
  parallel: TO,
  parsim: $O,
  parsl: DO,
  part: CO,
  pcy: RO,
  percnt: IO,
  period: OO,
  permil: FO,
  perp: UO,
  pertenk: _O,
  pfr: BO,
  phi: jO,
  phiv: HO,
  phmmat: VO,
  phone: GO,
  pi: zO,
  pitchfork: MO,
  piv: PO,
  planck: ZO,
  planckh: YO,
  plankv: WO,
  plus: JO,
  plusacir: KO,
  plusb: XO,
  pluscir: QO,
  plusdo: rF,
  plusdu: aF,
  pluse: eF,
  plusm: tF,
  plusmn: nF,
  plussim: oF,
  plustwo: lF,
  pm: iF,
  pointint: sF,
  popf: cF,
  poun: vF,
  pound: uF,
  pr: pF,
  prE: dF,
  prap: gF,
  prcue: fF,
  pre: mF,
  prec: hF,
  precapprox: bF,
  preccurlyeq: yF,
  preceq: wF,
  precnapprox: xF,
  precneqq: SF,
  precnsim: qF,
  precsim: AF,
  prime: EF,
  primes: kF,
  prnE: LF,
  prnap: NF,
  prnsim: TF,
  prod: $F,
  profalar: DF,
  profline: CF,
  profsurf: RF,
  prop: IF,
  propto: OF,
  prsim: FF,
  prurel: UF,
  pscr: _F,
  psi: BF,
  puncsp: jF,
  qfr: HF,
  qint: VF,
  qopf: GF,
  qprime: zF,
  qscr: MF,
  quaternions: PF,
  quatint: ZF,
  quest: YF,
  questeq: WF,
  quo: JF,
  quot: KF,
  rAarr: XF,
  rArr: QF,
  rAtail: rU,
  rBarr: aU,
  rHar: eU,
  race: tU,
  racute: nU,
  radic: oU,
  raemptyv: lU,
  rang: iU,
  rangd: sU,
  range: cU,
  rangle: vU,
  raqu: uU,
  raquo: pU,
  rarr: dU,
  rarrap: gU,
  rarrb: fU,
  rarrbfs: mU,
  rarrc: hU,
  rarrfs: bU,
  rarrhk: yU,
  rarrlp: wU,
  rarrpl: xU,
  rarrsim: SU,
  rarrtl: qU,
  rarrw: AU,
  ratail: EU,
  ratio: kU,
  rationals: LU,
  rbarr: NU,
  rbbrk: TU,
  rbrace: $U,
  rbrack: DU,
  rbrke: CU,
  rbrksld: RU,
  rbrkslu: IU,
  rcaron: OU,
  rcedil: FU,
  rceil: UU,
  rcub: _U,
  rcy: BU,
  rdca: jU,
  rdldhar: HU,
  rdquo: VU,
  rdquor: GU,
  rdsh: zU,
  real: MU,
  realine: PU,
  realpart: ZU,
  reals: YU,
  rect: WU,
  re: JU,
  reg: KU,
  rfisht: XU,
  rfloor: QU,
  rfr: r_,
  rhard: a_,
  rharu: e_,
  rharul: t_,
  rho: n_,
  rhov: o_,
  rightarrow: l_,
  rightarrowtail: i_,
  rightharpoondown: s_,
  rightharpoonup: c_,
  rightleftarrows: v_,
  rightleftharpoons: u_,
  rightrightarrows: p_,
  rightsquigarrow: d_,
  rightthreetimes: g_,
  ring: f_,
  risingdotseq: m_,
  rlarr: h_,
  rlhar: b_,
  rlm: y_,
  rmoust: w_,
  rmoustache: x_,
  rnmid: S_,
  roang: q_,
  roarr: A_,
  robrk: E_,
  ropar: k_,
  ropf: L_,
  roplus: N_,
  rotimes: T_,
  rpar: $_,
  rpargt: D_,
  rppolint: C_,
  rrarr: R_,
  rsaquo: I_,
  rscr: O_,
  rsh: F_,
  rsqb: U_,
  rsquo: __,
  rsquor: B_,
  rthree: j_,
  rtimes: H_,
  rtri: V_,
  rtrie: G_,
  rtrif: z_,
  rtriltri: M_,
  ruluhar: P_,
  rx: Z_,
  sacute: Y_,
  sbquo: W_,
  sc: J_,
  scE: K_,
  scap: X_,
  scaron: Q_,
  sccue: rB,
  sce: aB,
  scedil: eB,
  scirc: tB,
  scnE: nB,
  scnap: oB,
  scnsim: lB,
  scpolint: iB,
  scsim: sB,
  scy: cB,
  sdot: vB,
  sdotb: uB,
  sdote: pB,
  seArr: dB,
  searhk: gB,
  searr: fB,
  searrow: mB,
  sec: hB,
  sect: bB,
  semi: yB,
  seswar: wB,
  setminus: xB,
  setmn: SB,
  sext: qB,
  sfr: AB,
  sfrown: EB,
  sharp: kB,
  shchcy: LB,
  shcy: NB,
  shortmid: TB,
  shortparallel: $B,
  sh: DB,
  shy: CB,
  sigma: RB,
  sigmaf: IB,
  sigmav: OB,
  sim: FB,
  simdot: UB,
  sime: _B,
  simeq: BB,
  simg: jB,
  simgE: HB,
  siml: VB,
  simlE: GB,
  simne: zB,
  simplus: MB,
  simrarr: PB,
  slarr: ZB,
  smallsetminus: YB,
  smashp: WB,
  smeparsl: JB,
  smid: KB,
  smile: XB,
  smt: QB,
  smte: rj,
  smtes: aj,
  softcy: ej,
  sol: tj,
  solb: nj,
  solbar: oj,
  sopf: lj,
  spades: ij,
  spadesuit: sj,
  spar: cj,
  sqcap: vj,
  sqcaps: uj,
  sqcup: pj,
  sqcups: dj,
  sqsub: gj,
  sqsube: fj,
  sqsubset: mj,
  sqsubseteq: hj,
  sqsup: bj,
  sqsupe: yj,
  sqsupset: wj,
  sqsupseteq: xj,
  squ: Sj,
  square: qj,
  squarf: Aj,
  squf: Ej,
  srarr: kj,
  sscr: Lj,
  ssetmn: Nj,
  ssmile: Tj,
  sstarf: $j,
  star: Dj,
  starf: Cj,
  straightepsilon: Rj,
  straightphi: Ij,
  strns: Oj,
  sub: Fj,
  subE: Uj,
  subdot: _j,
  sube: Bj,
  subedot: jj,
  submult: Hj,
  subnE: Vj,
  subne: Gj,
  subplus: zj,
  subrarr: Mj,
  subset: Pj,
  subseteq: Zj,
  subseteqq: Yj,
  subsetneq: Wj,
  subsetneqq: Jj,
  subsim: Kj,
  subsub: Xj,
  subsup: Qj,
  succ: r2,
  succapprox: a2,
  succcurlyeq: e2,
  succeq: t2,
  succnapprox: n2,
  succneqq: o2,
  succnsim: l2,
  succsim: i2,
  sum: s2,
  sung: c2,
  sup: v2,
  sup1: u2,
  sup2: p2,
  sup3: d2,
  supE: g2,
  supdot: f2,
  supdsub: m2,
  supe: h2,
  supedot: b2,
  suphsol: y2,
  suphsub: w2,
  suplarr: x2,
  supmult: S2,
  supnE: q2,
  supne: A2,
  supplus: E2,
  supset: k2,
  supseteq: L2,
  supseteqq: N2,
  supsetneq: T2,
  supsetneqq: $2,
  supsim: D2,
  supsub: C2,
  supsup: R2,
  swArr: I2,
  swarhk: O2,
  swarr: F2,
  swarrow: U2,
  swnwar: _2,
  szli: B2,
  szlig: j2,
  target: H2,
  tau: V2,
  tbrk: G2,
  tcaron: z2,
  tcedil: M2,
  tcy: P2,
  tdot: Z2,
  telrec: Y2,
  tfr: W2,
  there4: J2,
  therefore: K2,
  theta: X2,
  thetasym: Q2,
  thetav: rH,
  thickapprox: aH,
  thicksim: eH,
  thinsp: tH,
  thkap: nH,
  thksim: oH,
  thor: lH,
  thorn: iH,
  tilde: sH,
  time: cH,
  times: vH,
  timesb: uH,
  timesbar: pH,
  timesd: dH,
  tint: gH,
  toea: fH,
  top: mH,
  topbot: hH,
  topcir: bH,
  topf: yH,
  topfork: wH,
  tosa: xH,
  tprime: SH,
  trade: qH,
  triangle: AH,
  triangledown: EH,
  triangleleft: kH,
  trianglelefteq: LH,
  triangleq: NH,
  triangleright: TH,
  trianglerighteq: $H,
  tridot: DH,
  trie: CH,
  triminus: RH,
  triplus: IH,
  trisb: OH,
  tritime: FH,
  trpezium: UH,
  tscr: _H,
  tscy: BH,
  tshcy: jH,
  tstrok: HH,
  twixt: VH,
  twoheadleftarrow: GH,
  twoheadrightarrow: zH,
  uArr: MH,
  uHar: PH,
  uacut: ZH,
  uacute: YH,
  uarr: WH,
  ubrcy: JH,
  ubreve: KH,
  ucir: XH,
  ucirc: QH,
  ucy: rV,
  udarr: aV,
  udblac: eV,
  udhar: tV,
  ufisht: nV,
  ufr: oV,
  ugrav: lV,
  ugrave: iV,
  uharl: sV,
  uharr: cV,
  uhblk: vV,
  ulcorn: uV,
  ulcorner: pV,
  ulcrop: dV,
  ultri: gV,
  umacr: fV,
  um: mV,
  uml: hV,
  uogon: bV,
  uopf: yV,
  uparrow: wV,
  updownarrow: xV,
  upharpoonleft: SV,
  upharpoonright: qV,
  uplus: AV,
  upsi: EV,
  upsih: kV,
  upsilon: LV,
  upuparrows: NV,
  urcorn: TV,
  urcorner: $V,
  urcrop: DV,
  uring: CV,
  urtri: RV,
  uscr: IV,
  utdot: OV,
  utilde: FV,
  utri: UV,
  utrif: _V,
  uuarr: BV,
  uum: jV,
  uuml: HV,
  uwangle: VV,
  vArr: GV,
  vBar: zV,
  vBarv: MV,
  vDash: PV,
  vangrt: ZV,
  varepsilon: YV,
  varkappa: WV,
  varnothing: JV,
  varphi: KV,
  varpi: XV,
  varpropto: QV,
  varr: rG,
  varrho: aG,
  varsigma: eG,
  varsubsetneq: tG,
  varsubsetneqq: nG,
  varsupsetneq: oG,
  varsupsetneqq: lG,
  vartheta: iG,
  vartriangleleft: sG,
  vartriangleright: cG,
  vcy: vG,
  vdash: uG,
  vee: pG,
  veebar: dG,
  veeeq: gG,
  vellip: fG,
  verbar: mG,
  vert: hG,
  vfr: bG,
  vltri: yG,
  vnsub: wG,
  vnsup: xG,
  vopf: SG,
  vprop: qG,
  vrtri: AG,
  vscr: EG,
  vsubnE: kG,
  vsubne: LG,
  vsupnE: NG,
  vsupne: TG,
  vzigzag: $G,
  wcirc: DG,
  wedbar: CG,
  wedge: RG,
  wedgeq: IG,
  weierp: OG,
  wfr: FG,
  wopf: UG,
  wp: _G,
  wr: BG,
  wreath: jG,
  wscr: HG,
  xcap: VG,
  xcirc: GG,
  xcup: zG,
  xdtri: MG,
  xfr: PG,
  xhArr: ZG,
  xharr: YG,
  xi: WG,
  xlArr: JG,
  xlarr: KG,
  xmap: XG,
  xnis: QG,
  xodot: rz,
  xopf: az,
  xoplus: ez,
  xotime: tz,
  xrArr: nz,
  xrarr: oz,
  xscr: lz,
  xsqcup: iz,
  xuplus: sz,
  xutri: cz,
  xvee: vz,
  xwedge: uz,
  yacut: pz,
  yacute: dz,
  yacy: gz,
  ycirc: fz,
  ycy: mz,
  ye: hz,
  yen: bz,
  yfr: yz,
  yicy: wz,
  yopf: xz,
  yscr: Sz,
  yucy: qz,
  yum: Az,
  yuml: Ez,
  zacute: kz,
  zcaron: Lz,
  zcy: Nz,
  zdot: Tz,
  zeetrf: $z,
  zeta: Dz,
  zfr: Cz,
  zhcy: Rz,
  zigrarr: Iz,
  zopf: Oz,
  zscr: Fz,
  zwj: Uz,
  zwnj: _z
}, ga = Bz, jz = Vz, Hz = {}.hasOwnProperty;
function Vz(r) {
  return Hz.call(ga, r) ? ga[r] : !1;
}
var fa = xl, ma = Sl, Gz = Va, zz = Al, Ga = $l, Mz = jz, Pz = o3, Zz = {}.hasOwnProperty, or = String.fromCharCode, Yz = Function.prototype, ha = {
  warning: null,
  reference: null,
  text: null,
  warningContext: null,
  referenceContext: null,
  textContext: null,
  position: {},
  additional: null,
  attribute: !1,
  nonTerminated: !0
}, Wz = 9, ba = 10, Jz = 12, Kz = 32, ya = 38, Xz = 59, Qz = 60, r3 = 61, a3 = 35, e3 = 88, t3 = 120, n3 = 65533, lr = "named", Yr = "hexadecimal", Wr = "decimal", Jr = {};
Jr[Yr] = 16;
Jr[Wr] = 10;
var xr = {};
xr[lr] = Ga;
xr[Wr] = Gz;
xr[Yr] = zz;
var za = 1, Ma = 2, Pa = 3, Za = 4, Ya = 5, Nr = 6, Wa = 7, ar = {};
ar[za] = "Named character references must be terminated by a semicolon";
ar[Ma] = "Numeric character references must be terminated by a semicolon";
ar[Pa] = "Named character references cannot be empty";
ar[Za] = "Numeric character references cannot be empty";
ar[Ya] = "Named character references must be known";
ar[Nr] = "Numeric character references cannot be disallowed";
ar[Wa] = "Numeric character references cannot be outside the permissible Unicode range";
function o3(r, a) {
  var e = {}, t, o;
  a || (a = {});
  for (o in ha)
    t = a[o], e[o] = t == null ? ha[o] : t;
  return (e.position.indent || e.position.start) && (e.indent = e.position.indent || [], e.position = e.position.start), l3(r, e);
}
function l3(r, a) {
  var e = a.additional, t = a.nonTerminated, o = a.text, s = a.reference, p = a.warning, l = a.textContext, f = a.referenceContext, x = a.warningContext, m = a.position, d = a.indent || [], h = r.length, b = 0, L = -1, A = m.column || 1, q = m.line || 1, E = "", c = [], n, v, u, i, g, y, w, S, N, R, I, G, j, _, J, T, O, C, $;
  for (typeof e == "string" && (e = e.charCodeAt(0)), T = F(), S = p ? nr : Yz, b--, h++; ++b < h; )
    if (g === ba && (A = d[L] || 1), g = r.charCodeAt(b), g === ya) {
      if (w = r.charCodeAt(b + 1), w === Wz || w === ba || w === Jz || w === Kz || w === ya || w === Qz || w !== w || e && w === e) {
        E += or(g), A++;
        continue;
      }
      for (j = b + 1, G = j, $ = j, w === a3 ? ($ = ++G, w = r.charCodeAt($), w === e3 || w === t3 ? (_ = Yr, $ = ++G) : _ = Wr) : _ = lr, n = "", I = "", i = "", J = xr[_], $--; ++$ < h && (w = r.charCodeAt($), !!J(w)); )
        i += or(w), _ === lr && Zz.call(fa, i) && (n = i, I = fa[i]);
      u = r.charCodeAt($) === Xz, u && ($++, v = _ === lr ? Mz(i) : !1, v && (n = i, I = v)), C = 1 + $ - j, !u && !t || (i ? _ === lr ? (u && !I ? S(Ya, 1) : (n !== i && ($ = G + n.length, C = 1 + $ - G, u = !1), u || (N = n ? za : Pa, a.attribute ? (w = r.charCodeAt($), w === r3 ? (S(N, C), I = null) : Ga(w) ? I = null : S(N, C)) : S(N, C))), y = I) : (u || S(Ma, C), y = parseInt(i, Jr[_]), i3(y) ? (S(Wa, C), y = or(n3)) : y in ma ? (S(Nr, C), y = ma[y]) : (R = "", s3(y) && S(Nr, C), y > 65535 && (y -= 65536, R += or(y >>> 10 | 55296), y = 56320 | y & 1023), y = R + or(y))) : _ !== lr && S(Za, C)), y ? (H(), T = F(), b = $ - 1, A += $ - j + 1, c.push(y), O = F(), O.offset++, s && s.call(f, y, {
        start: T,
        end: O
      }, r.slice(j - 1, $)), T = O) : (i = r.slice(j - 1, $), E += i, A += i.length, b = $ - 1);
    } else
      g === 10 && (q++, L++, A = 0), g === g ? (E += or(g), A++) : H();
  return c.join("");
  function F() {
    return {
      line: q,
      column: A,
      offset: b + (m.offset || 0)
    };
  }
  function nr(Y, z) {
    var K = F();
    K.column += z, K.offset += z, p.call(x, ar[Y], K, Y);
  }
  function H() {
    E && (c.push(E), o && o.call(l, E, {
      start: T,
      end: F()
    }), E = "");
  }
}
function i3(r) {
  return r >= 55296 && r <= 57343 || r > 1114111;
}
function s3(r) {
  return r >= 1 && r <= 8 || r === 11 || r >= 13 && r <= 31 || r >= 127 && r <= 159 || r >= 64976 && r <= 65007 || (r & 65535) === 65535 || (r & 65535) === 65534;
}
var Ja = {
  exports: {}
};
(function(r) {
  var a = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */
  var e = function(t) {
    var o = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, s = 0, p = {}, l = {
      manual: t.Prism && t.Prism.manual,
      disableWorkerMessageHandler: t.Prism && t.Prism.disableWorkerMessageHandler,
      util: {
        encode: function c(n) {
          return n instanceof f ? new f(n.type, c(n.content), n.alias) : Array.isArray(n) ? n.map(c) : n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
        },
        type: function(n) {
          return Object.prototype.toString.call(n).slice(8, -1);
        },
        objId: function(n) {
          return n.__id || Object.defineProperty(n, "__id", {
            value: ++s
          }), n.__id;
        },
        clone: function c(n, v) {
          v = v || {};
          var u, i;
          switch (l.util.type(n)) {
            case "Object":
              if (i = l.util.objId(n), v[i])
                return v[i];
              u = {}, v[i] = u;
              for (var g in n)
                n.hasOwnProperty(g) && (u[g] = c(n[g], v));
              return u;
            case "Array":
              return i = l.util.objId(n), v[i] ? v[i] : (u = [], v[i] = u, n.forEach(function(y, w) {
                u[w] = c(y, v);
              }), u);
            default:
              return n;
          }
        },
        getLanguage: function(n) {
          for (; n; ) {
            var v = o.exec(n.className);
            if (v)
              return v[1].toLowerCase();
            n = n.parentElement;
          }
          return "none";
        },
        setLanguage: function(n, v) {
          n.className = n.className.replace(RegExp(o, "gi"), ""), n.classList.add("language-" + v);
        },
        currentScript: function() {
          if (typeof document > "u")
            return null;
          if ("currentScript" in document && 1 < 2)
            return document.currentScript;
          try {
            throw new Error();
          } catch (i) {
            var n = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(i.stack) || [])[1];
            if (n) {
              var v = document.getElementsByTagName("script");
              for (var u in v)
                if (v[u].src == n)
                  return v[u];
            }
            return null;
          }
        },
        isActive: function(n, v, u) {
          for (var i = "no-" + v; n; ) {
            var g = n.classList;
            if (g.contains(v))
              return !0;
            if (g.contains(i))
              return !1;
            n = n.parentElement;
          }
          return !!u;
        }
      },
      languages: {
        plain: p,
        plaintext: p,
        text: p,
        txt: p,
        extend: function(n, v) {
          var u = l.util.clone(l.languages[n]);
          for (var i in v)
            u[i] = v[i];
          return u;
        },
        insertBefore: function(n, v, u, i) {
          i = i || l.languages;
          var g = i[n], y = {};
          for (var w in g)
            if (g.hasOwnProperty(w)) {
              if (w == v)
                for (var S in u)
                  u.hasOwnProperty(S) && (y[S] = u[S]);
              u.hasOwnProperty(w) || (y[w] = g[w]);
            }
          var N = i[n];
          return i[n] = y, l.languages.DFS(l.languages, function(R, I) {
            I === N && R != n && (this[R] = y);
          }), y;
        },
        DFS: function c(n, v, u, i) {
          i = i || {};
          var g = l.util.objId;
          for (var y in n)
            if (n.hasOwnProperty(y)) {
              v.call(n, y, n[y], u || y);
              var w = n[y], S = l.util.type(w);
              S === "Object" && !i[g(w)] ? (i[g(w)] = !0, c(w, v, null, i)) : S === "Array" && !i[g(w)] && (i[g(w)] = !0, c(w, v, y, i));
            }
        }
      },
      plugins: {},
      highlightAll: function(n, v) {
        l.highlightAllUnder(document, n, v);
      },
      highlightAllUnder: function(n, v, u) {
        var i = {
          callback: u,
          container: n,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        l.hooks.run("before-highlightall", i), i.elements = Array.prototype.slice.apply(i.container.querySelectorAll(i.selector)), l.hooks.run("before-all-elements-highlight", i);
        for (var g = 0, y; y = i.elements[g++]; )
          l.highlightElement(y, v === !0, i.callback);
      },
      highlightElement: function(n, v, u) {
        var i = l.util.getLanguage(n), g = l.languages[i];
        l.util.setLanguage(n, i);
        var y = n.parentElement;
        y && y.nodeName.toLowerCase() === "pre" && l.util.setLanguage(y, i);
        var w = n.textContent, S = {
          element: n,
          language: i,
          grammar: g,
          code: w
        };
        function N(I) {
          S.highlightedCode = I, l.hooks.run("before-insert", S), S.element.innerHTML = S.highlightedCode, l.hooks.run("after-highlight", S), l.hooks.run("complete", S), u && u.call(S.element);
        }
        if (l.hooks.run("before-sanity-check", S), y = S.element.parentElement, y && y.nodeName.toLowerCase() === "pre" && !y.hasAttribute("tabindex") && y.setAttribute("tabindex", "0"), !S.code) {
          l.hooks.run("complete", S), u && u.call(S.element);
          return;
        }
        if (l.hooks.run("before-highlight", S), !S.grammar) {
          N(l.util.encode(S.code));
          return;
        }
        if (v && t.Worker) {
          var R = new Worker(l.filename);
          R.onmessage = function(I) {
            N(I.data);
          }, R.postMessage(JSON.stringify({
            language: S.language,
            code: S.code,
            immediateClose: !0
          }));
        } else
          N(l.highlight(S.code, S.grammar, S.language));
      },
      highlight: function(n, v, u) {
        var i = {
          code: n,
          grammar: v,
          language: u
        };
        if (l.hooks.run("before-tokenize", i), !i.grammar)
          throw new Error('The language "' + i.language + '" has no grammar.');
        return i.tokens = l.tokenize(i.code, i.grammar), l.hooks.run("after-tokenize", i), f.stringify(l.util.encode(i.tokens), i.language);
      },
      tokenize: function(n, v) {
        var u = v.rest;
        if (u) {
          for (var i in u)
            v[i] = u[i];
          delete v.rest;
        }
        var g = new d();
        return h(g, g.head, n), m(n, g, v, g.head, 0), L(g);
      },
      hooks: {
        all: {},
        add: function(n, v) {
          var u = l.hooks.all;
          u[n] = u[n] || [], u[n].push(v);
        },
        run: function(n, v) {
          var u = l.hooks.all[n];
          if (!(!u || !u.length))
            for (var i = 0, g; g = u[i++]; )
              g(v);
        }
      },
      Token: f
    };
    t.Prism = l;
    function f(c, n, v, u) {
      this.type = c, this.content = n, this.alias = v, this.length = (u || "").length | 0;
    }
    f.stringify = function c(n, v) {
      if (typeof n == "string")
        return n;
      if (Array.isArray(n)) {
        var u = "";
        return n.forEach(function(S) {
          u += c(S, v);
        }), u;
      }
      var i = {
        type: n.type,
        content: c(n.content, v),
        tag: "span",
        classes: ["token", n.type],
        attributes: {},
        language: v
      }, g = n.alias;
      g && (Array.isArray(g) ? Array.prototype.push.apply(i.classes, g) : i.classes.push(g)), l.hooks.run("wrap", i);
      var y = "";
      for (var w in i.attributes)
        y += " " + w + '="' + (i.attributes[w] || "").replace(/"/g, "&quot;") + '"';
      return "<" + i.tag + ' class="' + i.classes.join(" ") + '"' + y + ">" + i.content + "</" + i.tag + ">";
    };
    function x(c, n, v, u) {
      c.lastIndex = n;
      var i = c.exec(v);
      if (i && u && i[1]) {
        var g = i[1].length;
        i.index += g, i[0] = i[0].slice(g);
      }
      return i;
    }
    function m(c, n, v, u, i, g) {
      for (var y in v)
        if (!(!v.hasOwnProperty(y) || !v[y])) {
          var w = v[y];
          w = Array.isArray(w) ? w : [w];
          for (var S = 0; S < w.length; ++S) {
            if (g && g.cause == y + "," + S)
              return;
            var N = w[S], R = N.inside, I = !!N.lookbehind, G = !!N.greedy, j = N.alias;
            if (G && !N.pattern.global) {
              var _ = N.pattern.toString().match(/[imsuy]*$/)[0];
              N.pattern = RegExp(N.pattern.source, _ + "g");
            }
            for (var J = N.pattern || N, T = u.next, O = i; T !== n.tail && !(g && O >= g.reach); O += T.value.length, T = T.next) {
              var C = T.value;
              if (n.length > c.length)
                return;
              if (!(C instanceof f)) {
                var $ = 1, F;
                if (G) {
                  if (F = x(J, O, c, I), !F || F.index >= c.length)
                    break;
                  var z = F.index, nr = F.index + F[0].length, H = O;
                  for (H += T.value.length; z >= H; )
                    T = T.next, H += T.value.length;
                  if (H -= T.value.length, O = H, T.value instanceof f)
                    continue;
                  for (var Y = T; Y !== n.tail && (H < nr || typeof Y.value == "string"); Y = Y.next)
                    $++, H += Y.value.length;
                  $--, C = c.slice(O, H), F.index -= O;
                } else if (F = x(J, 0, C, I), !F)
                  continue;
                var z = F.index, K = F[0], sr = C.slice(0, z), ra = C.slice(z + K.length), Sr = O + C.length;
                g && Sr > g.reach && (g.reach = Sr);
                var fr = T.prev;
                sr && (fr = h(n, fr, sr), O += sr.length), b(n, fr, $);
                var ae = new f(y, R ? l.tokenize(K, R) : K, j, K);
                if (T = h(n, fr, ae), ra && h(n, T, ra), $ > 1) {
                  var qr = {
                    cause: y + "," + S,
                    reach: Sr
                  };
                  m(c, n, v, T.prev, O, qr), g && qr.reach > g.reach && (g.reach = qr.reach);
                }
              }
            }
          }
        }
    }
    function d() {
      var c = {
        value: null,
        prev: null,
        next: null
      }, n = {
        value: null,
        prev: c,
        next: null
      };
      c.next = n, this.head = c, this.tail = n, this.length = 0;
    }
    function h(c, n, v) {
      var u = n.next, i = {
        value: v,
        prev: n,
        next: u
      };
      return n.next = i, u.prev = i, c.length++, i;
    }
    function b(c, n, v) {
      for (var u = n.next, i = 0; i < v && u !== c.tail; i++)
        u = u.next;
      n.next = u, u.prev = n, c.length -= i;
    }
    function L(c) {
      for (var n = [], v = c.head.next; v !== c.tail; )
        n.push(v.value), v = v.next;
      return n;
    }
    if (!t.document)
      return t.addEventListener && (l.disableWorkerMessageHandler || t.addEventListener("message", function(c) {
        var n = JSON.parse(c.data), v = n.language, u = n.code, i = n.immediateClose;
        t.postMessage(l.highlight(u, l.languages[v], v)), i && t.close();
      }, !1)), l;
    var A = l.util.currentScript();
    A && (l.filename = A.src, A.hasAttribute("data-manual") && (l.manual = !0));
    function q() {
      l.manual || l.highlightAll();
    }
    if (!l.manual) {
      var E = document.readyState;
      E === "loading" || E === "interactive" && A && A.defer ? document.addEventListener("DOMContentLoaded", q) : window.requestAnimationFrame ? window.requestAnimationFrame(q) : window.setTimeout(q, 16);
    }
    return l;
  }(a);
  r.exports && (r.exports = e), typeof yr < "u" && (yr.Prism = e);
})(Ja);
var c3 = Kr;
Kr.displayName = "clike";
Kr.aliases = [];
function Kr(r) {
  r.languages.clike = {
    comment: [{
      pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
      lookbehind: !0,
      greedy: !0
    }, {
      pattern: /(^|[^\\:])\/\/.*/,
      lookbehind: !0,
      greedy: !0
    }],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0
    },
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
  };
}
var v3 = Xr;
Xr.displayName = "javascript";
Xr.aliases = ["js"];
function Xr(r) {
  r.languages.javascript = r.languages.extend("clike", {
    "class-name": [r.languages.clike["class-name"], {
      pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
      lookbehind: !0
    }],
    keyword: [{
      pattern: /((?:^|\})\s*)catch\b/,
      lookbehind: !0
    }, {
      pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: !0
    }],
    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp(/(^|[^\w$])/.source + "(?:" + (/NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source),
      lookbehind: !0
    },
    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  }), r.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, r.languages.insertBefore("javascript", "keyword", {
    regex: {
      pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
      lookbehind: !0,
      greedy: !0,
      inside: {
        "regex-source": {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: !0,
          alias: "language-regex",
          inside: r.languages.regex
        },
        "regex-delimiter": /^\/|\/$/,
        "regex-flags": /^[a-z]+$/
      }
    },
    "function-variable": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: "function"
    },
    parameter: [{
      pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
      lookbehind: !0,
      inside: r.languages.javascript
    }, {
      pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
      lookbehind: !0,
      inside: r.languages.javascript
    }, {
      pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
      lookbehind: !0,
      inside: r.languages.javascript
    }, {
      pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
      lookbehind: !0,
      inside: r.languages.javascript
    }],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  }), r.languages.insertBefore("javascript", "string", {
    hashbang: {
      pattern: /^#!.*/,
      greedy: !0,
      alias: "comment"
    },
    "template-string": {
      pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: !0,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: !0,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation"
            },
            rest: r.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    },
    "string-property": {
      pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
      lookbehind: !0,
      greedy: !0,
      alias: "property"
    }
  }), r.languages.insertBefore("javascript", "operator", {
    "literal-property": {
      pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: !0,
      alias: "property"
    }
  }), r.languages.markup && (r.languages.markup.tag.addInlined("script", "javascript"), r.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), r.languages.js = r.languages.javascript;
}
var pr = (typeof globalThis > "u" ? "undefined" : W(globalThis)) === "object" ? globalThis : (typeof self > "u" ? "undefined" : W(self)) === "object" ? self : (typeof window > "u" ? "undefined" : W(window)) === "object" ? window : W(yr) === "object" ? yr : {}, u3 = k3();
pr.Prism = {
  manual: !0,
  disableWorkerMessageHandler: !0
};
var p3 = xn, d3 = Pz, Ka = Ja.exports, g3 = Aa, f3 = qa, m3 = c3, h3 = v3;
u3();
var Qr = {}.hasOwnProperty;
function Xa() {
}
Xa.prototype = Ka;
var U = new Xa(), Qa = U;
U.highlight = y3;
U.register = gr;
U.alias = b3;
U.registered = w3;
U.listLanguages = x3;
gr(g3);
gr(f3);
gr(m3);
gr(h3);
U.util.encode = A3;
U.Token.stringify = S3;
function gr(r) {
  if (typeof r != "function" || !r.displayName)
    throw new Error("Expected `function` for `grammar`, got `" + r + "`");
  U.languages[r.displayName] === void 0 && r(U);
}
function b3(r, a) {
  var e = U.languages, t = r, o, s, p, l;
  a && (t = {}, t[r] = a);
  for (o in t)
    for (s = t[o], s = typeof s == "string" ? [s] : s, p = s.length, l = -1; ++l < p; )
      e[s[l]] = e[o];
}
function y3(r, a) {
  var e = Ka.highlight, t;
  if (typeof r != "string")
    throw new Error("Expected `string` for `value`, got `" + r + "`");
  if (U.util.type(a) === "Object")
    t = a, a = null;
  else {
    if (typeof a != "string")
      throw new Error("Expected `string` for `name`, got `" + a + "`");
    if (Qr.call(U.languages, a))
      t = U.languages[a];
    else
      throw new Error("Unknown language: `" + a + "` is not registered");
  }
  return e.call(this, r, t, a);
}
function w3(r) {
  if (typeof r != "string")
    throw new Error("Expected `string` for `language`, got `" + r + "`");
  return Qr.call(U.languages, r);
}
function x3() {
  var r = U.languages, a = [], e;
  for (e in r)
    Qr.call(r, e) && W(r[e]) === "object" && a.push(e);
  return a;
}
function S3(r, a, e) {
  var t;
  return typeof r == "string" ? {
    type: "text",
    value: r
  } : U.util.type(r) === "Array" ? q3(r, a) : (t = {
    type: r.type,
    content: U.Token.stringify(r.content, a, e),
    tag: "span",
    classes: ["token", r.type],
    attributes: {},
    language: a,
    parent: e
  }, r.alias && (t.classes = t.classes.concat(r.alias)), U.hooks.run("wrap", t), p3(t.tag + "." + t.classes.join("."), E3(t.attributes), t.content));
}
function q3(r, a) {
  for (var e = [], t = r.length, o = -1, s; ++o < t; )
    s = r[o], s !== "" && s !== null && s !== void 0 && e.push(s);
  for (o = -1, t = e.length; ++o < t; )
    s = e[o], e[o] = U.Token.stringify(s, a, e);
  return e;
}
function A3(r) {
  return r;
}
function E3(r) {
  var a;
  for (a in r)
    r[a] = d3(r[a]);
  return r;
}
function k3() {
  var r = "Prism" in pr, a = r ? pr.Prism : void 0;
  return e;
  function e() {
    r ? pr.Prism = a : delete pr.Prism, r = void 0, a = void 0;
  }
}
var re = et(Qa, {});
re.registerLanguage = function(r, a) {
  return Qa.register(a);
};
var Z = re, hr = Tr.navigator, vr = Tr.document, wa = Tr.window;
Z.registerLanguage("jsextra", xe);
Z.registerLanguage("jsx", me);
Z.registerLanguage("json", qe);
Z.registerLanguage("yml", $e);
Z.registerLanguage("md", Ne);
Z.registerLanguage("bash", be);
Z.registerLanguage("css", ye);
Z.registerLanguage("html", ke);
Z.registerLanguage("tsx", Oe);
Z.registerLanguage("typescript", De);
Z.registerLanguage("graphql", Ee);
var L3 = ee(2)(function(r) {
  return Object.entries(r.code || {}).reduce(function(a, e) {
    var t = xa(e, 2), o = t[0], s = t[1];
    return Object.assign(Object.assign({}, a), ue({}, "* .".concat(o), s));
  }, {});
}), N3 = T3();
function T3() {
  var r = this;
  return hr != null && hr.clipboard ? function(a) {
    return hr.clipboard.writeText(a);
  } : function(a) {
    return ne(r, void 0, void 0, /* @__PURE__ */ regeneratorRuntime.mark(function e() {
      var t, o;
      return regeneratorRuntime.wrap(function(p) {
        for (; ; )
          switch (p.prev = p.next) {
            case 0:
              t = vr.createElement("TEXTAREA"), o = vr.activeElement, t.value = a, vr.body.appendChild(t), t.select(), vr.execCommand("copy"), vr.body.removeChild(t), o.focus();
            case 8:
            case "end":
              return p.stop();
          }
      }, e);
    }));
  };
}
var $3 = wr.div(function(r) {
  var a = r.theme;
  return {
    position: "relative",
    overflow: "hidden",
    color: a.color.defaultText
  };
}, function(r) {
  var a = r.theme, e = r.bordered;
  return e ? {
    border: "1px solid ".concat(a.appBorderColor),
    borderRadius: a.borderRadius,
    background: a.background.content
  } : {};
}), D3 = wr(function(r) {
  var a = r.children, e = r.className;
  return /* @__PURE__ */ X(oe, {
    horizontal: !0,
    vertical: !0,
    className: e,
    children: a
  });
})({
  position: "relative"
}, function(r) {
  var a = r.theme;
  return L3(a);
}), C3 = wr.pre(function(r) {
  var a = r.theme, e = r.padded;
  return {
    display: "flex",
    justifyContent: "flex-start",
    margin: 0,
    padding: e ? a.layoutMargin : 0
  };
}), R3 = wr.div(function(r) {
  var a = r.theme;
  return {
    flex: 1,
    paddingLeft: 2,
    paddingRight: a.layoutMargin,
    opacity: 1
  };
}), G3 = function(a) {
  var e = a.children, t = a.language, o = t === void 0 ? "jsx" : t, s = a.copyable, p = s === void 0 ? !1 : s, l = a.bordered, f = l === void 0 ? !1 : l, x = a.padded, m = x === void 0 ? !1 : x, d = a.format, h = d === void 0 ? !0 : d, b = a.formatter, L = b === void 0 ? null : b, A = a.className, q = A === void 0 ? null : A, E = a.showLineNumbers, c = E === void 0 ? !1 : E, n = le(a, ["children", "language", "copyable", "bordered", "padded", "format", "formatter", "className", "showLineNumbers"]);
  if (typeof e != "string" || !e.trim())
    return null;
  var v = L ? L(h, e) : e.trim(), u = ce(!1), i = xa(u, 2), g = i[0], y = i[1], w = ve(function(S) {
    S.preventDefault();
    var N = wa.getSelection().toString(), R = S.type !== "click" && N ? N : v;
    N3(R).then(function() {
      y(!0), wa.setTimeout(function() {
        return y(!1);
      }, 1500);
    }).catch(te.error);
  }, []);
  return /* @__PURE__ */ Er($3, {
    bordered: f,
    padded: m,
    className: q,
    onCopyCapture: w,
    children: [/* @__PURE__ */ X(D3, {
      children: /* @__PURE__ */ X(Z, {
        ...Object.assign({
          padded: m || f,
          language: o,
          showLineNumbers: c,
          showInlineLineNumbers: c,
          useInlineStyles: !1,
          PreTag: C3,
          CodeTag: R3,
          lineNumberContainerStyle: {}
        }, n),
        children: v
      })
    }), p ? /* @__PURE__ */ X(ie, {
      actionItems: [{
        title: g ? "Copied" : "Copy",
        onClick: w
      }]
    }) : null]
  });
};
export {
  G3 as SyntaxHighlighter,
  T3 as createCopyToClipboardFunction,
  G3 as default
};
//# sourceMappingURL=syntaxhighlighter-b07b042a.f964dd6f.js.map
