/*
Copyright 2013 Daniel Wirtz <dcode@dcode.io>
Copyright 2009 The Closure Library Authors. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS-IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * @license Long.js (c) 2013 Daniel Wirtz <dcode@dcode.io>
 * Released under the Apache License, Version 2.0
 * see: https://github.com/dcodeIO/Long.js for details
 */

/*
 Copyright 2013-2014 Daniel Wirtz <dcode@dcode.io>

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

/**
 * @license ByteBuffer.js (c) 2013-2014 Daniel Wirtz <dcode@dcode.io>
 * This version of ByteBuffer.js uses an ArrayBuffer (AB) as its backing buffer and is compatible with modern browsers.
 * Released under the Apache License, Version 2.0
 * see: https://github.com/dcodeIO/ByteBuffer.js for details
 */

/**
     * lxiv-embeddable (c) 2014 Daniel Wirtz <dcode@dcode.io>
     * Released under the Apache License, Version 2.0
     * see: https://github.com/dcodeIO/lxiv for details
     */

/**
     * utfx-embeddable (c) 2014 Daniel Wirtz <dcode@dcode.io>
     * Released under the Apache License, Version 2.0
     * see: https://github.com/dcodeIO/utfx for details
     */

/*
 Copyright 2013 Daniel Wirtz <dcode@dcode.io>

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

/**
 * @license ProtoBuf.js (c) 2013 Daniel Wirtz <dcode@dcode.io>
 * Released under the Apache License, Version 2.0
 * see: https://github.com/dcodeIO/ProtoBuf.js for details
 */

/** @preserve
    (c) 2012 by Cédric Mesnil. All rights reserved.
  
    Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
  
        - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
        - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
  
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    */

(function() {
  var e,
    t,
    n,
    r,
    s,
    o,
    u,
    a,
    f,
    l = {},
    c = {},
    h,
    p,
    d = {},
    v = {},
    m,
    g,
    y,
    b,
    w,
    E,
    S,
    x,
    T,
    N,
    C,
    k,
    L,
    A = {},
    O,
    M,
    _,
    D,
    P,
    H,
    B,
    j,
    F,
    I,
    q,
    R,
    U = {},
    z,
    W,
    X,
    V,
    $,
    J,
    K,
    Q,
    G,
    Y,
    Z,
    et,
    tt,
    nt,
    rt,
    it,
    st,
    ot,
    ut,
    at,
    ft,
    lt,
    ct,
    ht,
    pt,
    dt,
    vt,
    mt,
    gt,
    yt,
    bt,
    wt,
    Et,
    St,
    xt,
    Tt = {},
    Nt = {},
    Ct = {},
    kt;
  e = function() {
    var e = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    };
    return function() {
      var t = Array.prototype.slice.call(arguments);
      if (t.length === 0)
        return {};
      if (t.length === 1)
        return t[0];
      var n, r, i = {}, s = t.shift();
      for (n = t.length - 1; n >= 0; n--) {
        t[n] = t[n] || {};
        for (r in t[n])
          e(i, r) || (s[r] = t[n][r], i[r] = null);
      }
      try {
        return s;
      } finally {
        t = n = r = i = s = null;
      }
    };
  }(), t = function(e) {
    var t = {};
    for (var n in e)
      Object.prototype.toString.call(e[n]) === '[object Object]'
        ? t[n] = cloneObj(e[n])
        : Object.prototype.toString.call(e[n]) === '[object Array]'
          ? t[n] = Array.prototype.concat.apply([], e[n])
          : t[n] = e[n];
    return t;
  }, n = function() {
    function t() {
      this.actions = {}, this.EVENT_OPEN = !0;
    }
    var e;
    return e = t.prototype, e.on = function(e, t) {
      var e = e.replace(/^\w/, function(e) {
        return e.toUpperCase();
      });
      this.actions['on' + e] ? this.actions['on' + e].push(t) : this.actions['on' + e] = [ t ];
    }, e.off = function(e, t) {
      var n = this.actions['on' + e];
      if (!t)
        n = null;
      else {
        var r = n.indexOf(t);
        r > -1 && n.splice(r, 1);
      }
    }, e.trigger = function(e, t) {
      var n = this.actions['on' + e];
      if (this.EVENT_OPEN && n && n.length)
        for (var r = 0; r < n.length; r++)
          n[r](t);
    }, e.switchEventStatus = function(e) {
      this.EVENT_OPEN = e;
    }, new t();
  }(), r = function() {}, s = function(e) {
    var t = document.cookie.match(new RegExp('(^| )' + e + '=([^;]*)(;|$)'));
    return t !== null ? unescape(t[2]) : null;
  }, o = function(e, t, n, r) {
    var i = new Date(), r = r || '/';
    i.setTime(i.getTime() + n), document.cookie = e + '=' + escape(t) + ';path=' + r + ';expires=' + i.toGMTString();
  }, u = function() {
    var e = navigator.userAgent;
    return e.indexOf('Android') > -1
      ? 'ANDROID'
      : e.indexOf('iPhone') > -1 || e.indexOf('iPad') > -1 || e.indexOf('iPod') > -1
        ? 'IOS'
        : e.indexOf('MAC') > -1 ? 'MAC' : e.indexOf('Windows Phone') > -1 || e.indexOf('WPDesktop') > -1 ? 'WP' : 'WEB';
  }, a = function(e) {
    e = e || 32;
    var t = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678', n = t.length, r = '';
    for (i = 0; i < e; i++)
      r += t.charAt(Math.floor(Math.random() * n));
    return r;
  }, f = function() {
    var e = {
      Send: function(e) {
        return e;
      },
      Login: function(e) {
        return e;
      },
      Logout: function(e) {
        return e;
      },
      Push: function(e) {
        return e;
      },
      GetUploadSign: function(e) {
        return e;
      },
      QueryActiveContacts: function(e) {
        return e;
      },
      QueryMsgs: function(e) {
        return e;
      },
      Error: function(e) {
        return e;
      }
    };
    return function(t, n) {
      return e[t] ? e[t](n) : n;
    };
  }(), l = function(i, l) {
    return i = {
      extend: e,
      clone: t,
      event: n,
      emptyFunc: r,
      getCookie: s,
      setCookie: o,
      platform: u,
      randomString: a,
      format: f
    }, i;
  }(l, e), c = function(e, t) {
    function o(e) {
      this.core = e, r(this, i);
    }
    var n = t, r = n.extend, i = n.event, s;
    return s = o.prototype, s.init = function(e) {
      var t = this;
      e = e ||
        {}, this.status = { lastQueryTime: e.lastQueryTime || new Date().getTime(), count: e.count || 20, msgCount: e.msgCount || 10, inboxEntryList: [] }, this.core.on('PushMessageReceived', function(e) {
        var n,
          r = e.length,
          i,
          s = t.status,
          o,
          u = t.core.status.currentUserId,
          a = [],
          f = !1,
          l = new Date().valueOf();
        for (n = 0; n < r; n++) {
          i = e[n];
          if (i.onlineMsg.content || i.onlineMsg.message) {
            i = i.onlineMsg;
            switch (i.chatType) {
              case 1:
                o = (u || i.toId) + ':' + i.fromId;
                break;
              case 2:
              case 3:
                o = i.toId;
            }
            f = s.inboxEntryList.some(function(e, t, n) {
              if (o === e.chatId)
                return e.lastMessages = [ i ], e.active || (e.unreadCount += 1), a.push(e), !0;
            }), f ||
              t.status.inboxEntryList.push({
                chatId: o,
                chatType: i.chatType,
                lastReadMsgSeq: i.seq,
                lastReadMsgTime: l,
                lastRecvMsgSeq: i.seq,
                lastRecvMsgTime: l,
                unreadCount: 0
              });
          }
        }
        !f && o && t.clearUnreadCount(o), a.length && t.trigger('IMTransientMessageReceived', a);
      }), this.getIMInboxEntryList(e);
    }, s.getIMInboxEntryList = function(e) {
      var t = this.status, n = e.count || t.count, r = [];
      e.fresh || t.inboxEntryList.length <= n
        ? this.fetchIMInboxEntryList(e)
        : (r = t.inboxEntryList.slice(0, n), e.success && e.success(r), e.complete && e.complete(r));
    }, s.fetchIMInboxEntryList = function(e) {
      var t = this.status, n = this, r = t.lastQueryTime, i = [];
      r || (r = t.lastQueryTime = new Date().getTime()), this.core.queryActiveContacts({
        lastQueryTime: r,
        msgsContactsNum: e.count || t.count,
        msgsNum: e.msgCount || t.msgCount,
        success: function(t) {
          i = n.addEntryList(t), e.success && e.success(i);
        },
        error: function(t) {
          e.error && e.error(t);
        },
        complete: function(t) {
          i = i.length ? i : t, e.complete && e.complete(i);
        }
      }), t.lastQueryTime = new Date().getTime();
    }, s.addEntryList = function(e) {
      var t = this.status.inboxEntryList, n = e.conversations, i = e.msgs, s = [];
      return n.forEach(function(e, n, i) {
        !t.some(function(t, n, i) {
          if (e.chatId === t.chatId)
            return r(t, e), s.push(t), !0;
        }) && t.push(e) && s.push(e) && (e.unreadCount = 0);
      }), i.forEach(function(e, t, n) {
        s.some(function(t, n, r) {
          var i = e.fromId || e.addresserID, s = e.toId || e.addresseeID;
          if (i === t.chatId || s === t.chatId || i + ':' + s === t.chatId || s + ':' + i === t.chatId)
            return t.lastMessages ? !t.lastMessages.some(function(t, n, r) {
                return t.clientMsgID === e.clientMsgID;
              }) && t.lastMessages.push(e) : t.lastMessages = [ e ], !0;
        });
      }), s.length && this.trigger('IMInboxEntryChanged', { add: s, remove: [] }), s;
    }, s.removeEntryList = function(e) {
      var t = e.chatIds || [], n = this.status.inboxEntryList, r = [];
      return t.forEach(function(e, t, i) {
        n.some(function(t, n, i) {
          if (t.chatId === e)
            return r = r.concat(i.splice(n, 1)), !0;
        });
      }), r.legnth && this.trigger('IMInboxEntryChanged', { add: [], remove: r }), r;
    }, s.active = function(e) {
      var t = this.status.inboxEntryList, n = this;
      t.some(function(t, r, i) {
        if (t.chatId === e)
          return t.active = !0, n.clearUnreadCount({ chatId: e }), !0;
      });
    }, s.deactive = function(e) {
      var t = this.status.inboxEntryList;
      t.some(function(t, n, r) {
        if (t.chatId === e)
          return t.active = !1, !0;
      });
    }, s.clearUnreadCount = function(e) {
      var t = this.status.inboxEntryList, n = this;
      t.some(function(t, i, s) {
        if (t.chatId === e.chatId)
          return n.core.readAck(
            r(
              {
                success: function(n) {
                  e.count = e.count ||
                    t.unreadCount, t.unreadCount -= e.count, t.unreadCount < 0 && (t.unreadCount = 0);
                }
              },
              t
            )
          ), !0;
      });
    }, e = o, e;
  }(c, l), h = function() {
    function e(e, t, n) {
      var r = (e || []).length, i = 0, s = r - 1, o = -1, u;
      if (!t)
        return -1;
      if (e[i].seq === t)
        return i;
      if (e[s].seq === t)
        return s;
      for (; s > i; ) {
        o = Math.ceil((s - i) / 2) + i, u = e[o];
        if (u.seq === t)
          return o;
        u.seq > t && o <= s ? (i = n ? o : i, s = n ? s : o) : u.seq < t && o <= s && (i = n ? i : o, s = n ? o : s);
      }
      return e[o].seq !== t && (o = -1), o;
    }
    return { binarySearch: e };
  }(), p = function() {
    function e(e) {
      var t = e.msgs, n = e.complete, r = e.error, i = this.core, s = 0, o = 0, u;
      t.forEach(function(e, a, f) {
        e.msgTemplate !== 'bdim_hi_text' && e.content.files.concat(e.content.images).forEach(function(e, a, f) {
            s++, i.getFileUrl({
              fileUrl: e.url || e.fileUrl,
              success: function(t) {
                var t = t.data ? t.data[0] : t;
                e.fileUrl
                  ? (e.originfileUrl = e.fileUrl, e.fileUrl = t.fileUrl)
                  : (e.originUrl = e.url, e.url = t.fileUrl);
              },
              error: function(t) {
                r && r({ code: 400, info: "Get file's http url fail", target: e });
              },
              complete: function(e) {
                o++, clearTimeout(u), u = setTimeout(
                  function() {
                    s === o && n(t);
                  },
                  0
                );
              }
            });
          });
      }), s === 0 && n(t);
    }
    return { pretreatFileUrl: e };
  }(), d = function(e, t, n, r) {
    function h(e) {
      this.core = e, s(this, o);
    }
    function p(e) {
      var t = e.data, n = t.content.images || [], r = t.content.files || [], i = 0;
      d.call(this, {
        files: n,
        complete: function(n) {
          n.code === 200 && (t.content.images = n.data, i++, i === 2 && e.complete(t));
        },
        error: function(t) {
          e.error && e.error(t);
        }
      }), d.call(this, {
        files: r,
        complete: function(n) {
          n.code === 200 && (t.content.files = n.data, i++, i === 2 && e.complete(t));
        },
        error: function(t) {
          e.error && e.error(t);
        }
      });
    }
    function d(e) {
      var t = 0, n, r = this.core, i = e.complete, s = 0, o = e.error, u = e.files, a = new Image();
      if (!u.length) {
        i({ code: 200, data: [] });
        return;
      }
      u.forEach(function(e, f, l) {
        e.file instanceof File || e.file instanceof Blob ? r.upload({
            file: e.file,
            success: function(t) {
              n = t.data || t ||
                {
                  authorization: ''
                }, n.authorization && n.authorization.indexOf('bce-auth') > -1 ? (e.md5 = n.uploadUrl.match(/[^\/]+$/)[0], e.size = n.size, e.url = 'implus://' + n.fid + '/' + e.md5) : (e.md5 = n.md5, e.size = n.size, e.url = n.url), ~e.file.type.indexOf('image') && !e.width && !e.height && (a.onload = function() {
                  e.height = a.naturalHeight, e.width = a.naturalWidth;
                }, a.src = window.URL.createObjectURL(
                  e.file
                )), e.fileId && (e.fileUrl = e.url) && delete e.url, delete e.file;
            },
            error: function(t) {
              o && o({ code: 400, info: 'file upload fail!', target: e, requestInfo: t });
            },
            complete: function(e) {
              t++, t === u.length && i && i({ code: 200, data: u });
            }
          }) : (s++, o && o({ code: 400, info: 'the file not the type of File or Blob', target: e }));
      });
    }
    function v(e) {
      var t = {}, n = e.message, r, i = e.msgTemplate || 'bdim_hi_' + e.type;
      e.content = {};
      switch (i) {
        case 'bdim_hi_text':
          r = m(n.text), e.content.texts = r.texts, e.content.urls = r.urls;
          break;
        case 'bdim_hi_file':
          e.content.files = g(n.file);
          break;
        case 'bdim_hi_image':
          e.content.images = y(n.image);
          break;
        case 'bdim_hi_custom':
          e.content = b(n.custom);
      }
      return e.order && (e.extra = e.order.join()), delete e.message, delete e.order, e;
    }
    function m(e, t) {
      var n = [], r = [];
      return e.forEach(function(e, i, s) {
        switch (e.type || '') {
          case 'url':
            e.urlId = e.urlId ||
              'url_' + (i + 1), t && (e.urlId = t + '_' + (i + 1)), e.title = e.text, delete e.text, r.push(e);
            break;
          case 'text':
          default:
            e.textId = e.textId ||
              'text_' +
                (i + 1), t && (e.textId = t + '_' + (i + 1)), e.content = e.text || e.content, delete e.text, n.push(e);
        }
        delete e.type;
      }), { urls: r, texts: n };
    }
    function g(e, t) {
      var n = [];
      return e.fileId = t || 'file', e.name = e.fileName, delete e.fileName, n.push(e), n;
    }
    function y(e, t) {
      var n = [];
      return e.imageId = t || 'image', [ e ];
    }
    function b(e) {
      var t = { texts: [], files: [], images: [], urls: [] }, n;
      for (var r in e)
        e.hasOwnProperty(r) && e[r].forEach(function(e, i, s) {
            for (var o in e)
              if (e.hasOwnProperty(o))
                switch (o) {
                  case 'text':
                    n = m(e[o], r + i), t.texts = t.texts.concat(n.texts), t.urls = t.urls.concat(n.urls);
                    break;
                  case 'image':
                    t.images = t.images.concat(y(e[o], r + i + '_' + (i + 1)));
                    break;
                  case 'file':
                    t.files = t.files.concat(g(e[o], r + i + '_' + (i + 1)));
                }
          });
      return t;
    }
    function w(e) {
      var t = e instanceof Array, n, r, i, s, o;
      return t || (e = [ e ]), e.forEach(function(e, t, u) {
        n = e.msgTemplate, r = undefined, i = undefined, s = undefined, o = undefined;
        switch (n) {
          case 'bdim_hi_text':
            r = E(e);
            break;
          case 'bdim_hi_file':
            i = S(e);
            break;
          case 'bdim_hi_image':
            s = x(e);
            break;
          case 'bdim_hi_custom':
            o = T(e);
        }
        e.message = {}, e.addresseeID = e.toId, e.addresserName = e.fromName, e.addresserID = e.fromId, r && (e.message.text = r), i && (e.message.file = i), s && (e.message.image = s), o && (e.message.custom = o), delete e.content, delete e.toId, delete e.fromName, delete e.fromId;
      }), t ? e : e[0];
    }
    function E(e) {
      var t = e.content.texts, n = e.content.urls, r = [];
      return t.forEach(function(e, t, n) {
        e.text = e.content, e.type = 'text', delete e.content, r.push(e);
      }), n.forEach(function(e, t, n) {
        e.text = e.title, e.type = 'url', delete e.title, r.push(e);
      }), r;
    }
    function S(e) {
      var t = e.content.files[0];
      return t;
    }
    function x(e) {
      var t = e.content.images, n = {};
      return t.forEach(function(e, t, r) {
        e.fileUrl = e.url, delete e.url, n[e.imageId] = e;
      }), n;
    }
    function T(e) {
      function l(e, t) {
        var n = e.match(/^(.*)(\d)$/), r = n[1], s = n[2] || 0;
        if (i[r])
          if (i[r][s])
            for (var o in t)
              t.hasOwnProperty(o) &&
                (i[r][s][o]
                  ? i[r][s][o] instanceof Array ? i[r][s][o].push(t[o]) : i[r][s][o] = [ i[r][s][o], t[o] ]
                  : i[r][s][o] = t[o]);
          else
            i[r].push(t);
        else
          i[r] = [ t ];
      }
      var t = e.extra || ''.replace(/(\[|\])/g, '').split(', '), n = e.content, r = {}, i = {}, s, o = /^[^_]+/, u;
      n.texts.length && (r.text = E(e)), n.images.length && (r.image = x(e)), n.files.length && (r.file = S(e));
      for (var a in r)
        if (r.hasOwnProperty(a)) {
          u = {};
          if (r[a] instanceof Array)
            r[a].forEach(function(e, t, n) {
              u = {}, s = e[e.type + 'Id'].match(o)[0], u[a] = e, l(s, u);
            });
          else
            switch (a) {
              case 'file':
                s = r[a][a + 'Id'].match(o)[0], u[a] = r[a], l(s, u);
                break;
              case 'image':
                for (var f in r[a])
                  u = {}, r[a].hasOwnProperty(f) && (s = r[a][f][a + 'Id'].match(o)[0], u[a] = r[a][f], l(s, u));
            }
        }
      return e.order = e.extra.split(','), i;
    }
    function N() {
      var e, t = Array.prototype.slice.call(arguments), n = t.shift();
      this.core.inbox.status && (e = this.core.inbox);
      try {
        if (e)
          return e[n].apply(e, t);
      } catch (r) {}
    }
    var i = t, s = i.extend, o = i.event, u = n, a = u.binarySearch, f = r, l = f.pretreatFileUrl, c;
    return c = h.prototype, c.init = function(e) {
      var t = this, n = this.core.status;
      return e = e ||
        {}, e.addresserID && e.addresseeID ? (this.status = { chatId: e.chatId || e.addresserID + ':' + e.addresseeID, chatType: e.chatType || 1, lastSeq: e.lastSeq || 0, messageList: [], active: !0, needCheckMoreMsgs: !1, addresserID: e.addresserID || n.currentUserId || '', addresseeID: e.chatType === 2 ? e.chatId : e.addresseeID || '', addresserName: e.addresserName || n.currentUserName, addresseeName: e.addresseeName || e.chatId, queryCount: e.queryCount || 10 }, this.getMessageList({ success: e.success, error: e.error, complete: e.complete }), this.core.on('PushMessageReceived', function(e) {
          var n, r = e.length, i, s = [];
          for (n = 0; n < r; n++)
            i = e[n].onlineMsg, i.content && (i.toId === t.status.addresserID || i.toId === t.status.chatId) && s.push(i);
          s.length &&
            (t.addMessageList(s), t.clearUnreadCount({
              lastReadMsgSeq: s[s.length - 1].seq,
              lastReadMsgTime: s[s.length - 1].serverTime
            }), t.trigger('NewMessageReceived', s));
        }), !0) : !1;
    }, c.active = function() {
      this.status.active = !0, this.switchEventStatus(!0), N.call(this, 'active', this.status.chatId);
    }, c.deactive = function() {
      this.status.active = !1, this.switchEventStatus(!1), N.call(this, 'deactive', this.status.chatId);
    }, c.stop = function() {
      this.status = {
        chatId: '',
        chatType: 1,
        lastSeq: 0,
        messageList: [],
        active: !0,
        needCheckMoreMsgs: !1,
        addresserID: '',
        addresseeID: '',
        addresserName: '',
        addresseeName: '',
        queryCount: 10
      }, this.switchEventStatus(!1);
    }, c.clearUnreadCount = function(e) {
      e
        ? (e.chatId = this.status.chatId, e.lastRecvMsgSeq = e.lastReadMsgSeq, e.lastRecvMsgTime = e.lastReadMsgTime)
        : e = { chatId: this.status.chatId }, N.call(this, 'clearUnreadCount', e);
    }, c.getMessageList = function(e) {
      var t = this.status,
        n = e.startSeq,
        r = e.lastSeq,
        i = -1,
        s = -1,
        o = t.messageList.length,
        u = e.count || t.queryCount,
        f = [];
      o &&
        (r && (i = a(this.status.messageList, r, 1)), n && (s = a(this.status.messageList, n, 1)), s >= 0 && i >= 0
          ? f = t.messageList.slice(i, s + 1)
          : !r && n && s >= u
            ? f = t.messageList.slice(s - u + 1, s + 1)
            : !n && r && o - i >= u && (f = t.messageList.slice(i, i + u)), f.length &&
          (e.success && e.success(f), e.complete && e.complete(f))), f.length || this.fetchMessageList(e);
    }, c.fetchMessageList = function(e) {
      var t = this.core,
        n = this.status,
        r = this,
        i = {
          chatId: n.chatId,
          chatType: n.chatType,
          count: e.count || n.queryCount,
          success: function(t) {
            l.call(r, {
              msgs: t.msgs,
              complete: function(n) {
                t.msgs = n, r.addMessageList(t.msgs), e.success && e.success(n);
              },
              error: function(t) {
                e.error && e.error(t);
              }
            });
          },
          error: function(t) {
            e.error && e.error(t);
          },
          complete: function(t) {
            var n = t;
            t.msgs && (n = t.msgs), e.complete && e.complete(n);
          }
        };
      e.startSeq && (i.startSeq = e.startSeq);
      if (n.lastSeq || e.lastSeq || !e.startSeq)
        i.endSeq = e.lastSeq || n.lastSeq;
      t.queryMsgs(i);
    }, c.originSend = function(e) {
      var t = this.status, n = s({}, e), r = this;
      n.fromId = t.addresserID, n.fromName = t.addresserName, n.toId = t.addresseeID, n.chatType = t.chatType, n.msgTemplate || n.type && (n.msgTemplate = 'bdim_hi_' + n.type), n.success = function(t, n) {
        e.success.apply(
          r,
          arguments
        ), r.addMessageList([ n.msg ]), N.call(r, 'addEntryList', { conversations: [ { chatId: r.status.chatId } ], msgs: [ n.msg ] });
      }, n.error = function(t) {
        e.error.apply(r, arguments), r.trigger('MessageSendError', e.msgs);
      }, this.core.send(n);
    }, c.sendMessage = function(e) {
      var t = this;
      e.isRealTime = !1, e = v(e), p.call(this, {
        data: e,
        complete: function(e) {
          t.originSend(e);
        },
        error: function(e) {
          e.error && e.error(e);
        }
      });
    }, c.sendTextMessage = function(e) {
      e.msgTemplate = 'bdim_hi_text', e.message = { text: e.text }, delete e.text, this.sendMessage(e);
    }, c.sendFileMessage = function(e) {
      e.msgTemplate = 'bdim_hi_file', e.message = { file: e.file }, delete e.file, this.sendMessage(e);
    }, c.sendImageMessage = function(e) {
      e.msgTemplate = 'bdim_hi_image', e.message = { image: e.image }, delete e.image, this.sendMessage(e);
    }, c.sendCustomMessage = function(e) {
      e.msgTemplate = 'bdim_hi_custom', e.message = { custom: e.custom }, delete e.custom, this.sendMessage(e);
    }, c.sendTransientMessage = function(e) {
      var t = this;
      e.isRealTime = !0, e = v(e), p.call(this, {
        data: e,
        complete: function(e) {
          t.originSend(e);
        },
        error: function(e) {
          e.error && e.error(e);
        }
      });
    }, c.addMessageList = function(e) {
      var t = this.status.messageList, n, r = -1;
      return e = w(
        e
      ), t.length ? (n = t.pop(), n.serverTime > e[0].serverTime ? (t.push(n), t = t.concat(e)) : n.serverTime > e[e.length - 1].serverTime ? (r = a(e, n.seq, 1), t.push(n), r > -1 && (t = t.concat(e.slice(r + 1, e.length + 1)))) : (t.push(n), n = e.pop(), n.serverTime > t[0].serverTime ? (e.push(n), t = e.concat(t)) : e.length && e[0].serverTime > t[0].serverTime ? (r = a(e, t[0].seq, 1), e.push(n), t = e.concat(e.slice(0, r + 1))) : e.push(n))) : t = [].concat(e), this.status.messageList = t, this.trigger('MessageChanged', e), e;
    }, e = h, e;
  }(d, l, h, p), v = function(e, t) {
    function s(e) {
      this.core = e, r(this, i), this.switchEventStatus(!1);
    }
    var n = t, r = n.extend, i = n.event, o = s.prototype;
    return o.init = function(e) {
      var t = this;
      return e = e ||
        {}, e.chatId ? (this.status = { chatId: e.chatId || '', chatType: e.chatType || 1, lastSeq: e.lastSeq || 0, messageList: [], needCheckMoreMsgs: !0, addresserID: e.addresserID || '', addresseeID: e.chatType === 2 ? e.chatId : e.addresseeID || '', addresserName: e.addresserName, addresseeName: e.addresseeName || e.chatId, queryCount: e.queryCount || 10 }, this.getMessageList({ success: e.success, error: e.error, complete: e.complete }), this.core.on('PushMessageReceived', function(e) {
          var n, r = e.length, i, s = [];
          for (n = 0; n < r; n++)
            i = e[n].onlineMsg, i.content && (i.toId === t.status.addresserID || i.toId === t.status.chatId) && s.push(i);
          s.length && t.addMessageList(s);
        }), this) : !1;
    }, o.getMessageList = function(e) {
      var t = {
        count: e.count || this.status.queryCount,
        success: function(t) {
          t instanceof Array && t.reverse(), e.success && e.success(t);
        },
        error: function(t) {
          e.error && e.error(t);
        },
        complete: function(t) {
          e.complete && e.complete(t);
        }
      };
      return e.start && (t.startSeq = e.start), this.core.conversation.getMessageList.call(this, t);
    }, o.fetchMessageList = function(e) {
      return this.core.conversation.fetchMessageList.apply(this, arguments);
    }, o.addMessageList = function(e) {
      return this.core.conversation.addMessageList.apply(this, arguments);
    }, e = s, e;
  }(v, l), function(e) {
    'use strict';

    var t = function(t, n, r) {
      this.low = t | 0, this.high = n | 0, this.unsigned = !!r;
    };
    t.isLong = function(e) {
      return (e && e instanceof t) === !0;
    };
    var n = {}, r = {};
    t.fromInt = function(e, i) {
      var s, o;
      if (!i) {
        e |= 0;
        if (-128 <= e && e < 128) {
          o = n[e];
          if (o)
            return o;
        }
        return s = new t(e, e < 0 ? -1 : 0, !1), -128 <= e && e < 128 && (n[e] = s), s;
      }
      e >>>= 0;
      if (0 <= e && e < 256) {
        o = r[e];
        if (o)
          return o;
      }
      return s = new t(e, (e | 0) < 0 ? -1 : 0, !0), 0 <= e && e < 256 && (r[e] = s), s;
    }, t.fromNumber = function(e, n) {
      return n = !!n, isNaN(e) || !isFinite(e) ? t.ZERO : !n && e <= -a ? t.MIN_VALUE : !n && e + 1 >= a ? t.MAX_VALUE : n && e >= u ? t.MAX_UNSIGNED_VALUE : e < 0 ? t.fromNumber(-e, n).negate() : new t(e % o | 0, e / o | 0, n);
    }, t.fromBits = function(e, n, r) {
      return new t(e, n, r);
    }, t.fromString = function(e, n, r) {
      if (e.length === 0)
        throw Error('number format error: empty string');
      if (e === 'NaN' || e === 'Infinity' || e === '+Infinity' || e === '-Infinity')
        return t.ZERO;
      typeof n == 'number' && (r = n, n = !1), r = r || 10;
      if (r < 2 || 36 < r)
        throw Error('radix out of range: ' + r);
      var i;
      if ((i = e.indexOf('-')) > 0)
        throw Error('number format error: interior "-" character: ' + e);
      if (i === 0)
        return t.fromString(e.substring(1), n, r).negate();
      var s = t.fromNumber(Math.pow(r, 8)), o = t.ZERO;
      for (var u = 0; u < e.length; u += 8) {
        var a = Math.min(8, e.length - u), f = parseInt(e.substring(u, u + a), r);
        if (a < 8) {
          var l = t.fromNumber(Math.pow(r, a));
          o = o.multiply(l).add(t.fromNumber(f));
        } else
          o = o.multiply(s), o = o.add(t.fromNumber(f));
      }
      return o.unsigned = n, o;
    }, t.fromValue = function(e) {
      return typeof e == 'number'
        ? t.fromNumber(e)
        : typeof e == 'string' ? t.fromString(e) : t.isLong(e) ? e : new t(e.low, e.high, e.unsigned);
    };
    var i = 65536, s = 1 << 24, o = i * i, u = o * o, a = u / 2, f = t.fromInt(s);
    t.ZERO = t.fromInt(0), t.UZERO = t.fromInt(0, !0), t.ONE = t.fromInt(1), t.UONE = t.fromInt(
      1,
      !0
    ), t.NEG_ONE = t.fromInt(-1), t.MAX_VALUE = t.fromBits(-1, 2147483647, !1), t.MAX_UNSIGNED_VALUE = t.fromBits(
      -1,
      -1,
      !0
    ), t.MIN_VALUE = t.fromBits(0, -2147483648, !1), t.prototype.toInt = function() {
      return this.unsigned ? this.low >>> 0 : this.low;
    }, t.prototype.toNumber = function() {
      return this.unsigned ? (this.high >>> 0) * o + (this.low >>> 0) : this.high * o + (this.low >>> 0);
    }, t.prototype.toString = function(e) {
      e = e || 10;
      if (e < 2 || 36 < e)
        throw RangeError('radix out of range: ' + e);
      if (this.isZero())
        return '0';
      var n;
      if (this.isNegative()) {
        if (this.equals(t.MIN_VALUE)) {
          var r = t.fromNumber(e), i = this.div(r);
          return n = i.multiply(r).subtract(this), i.toString(e) + n.toInt().toString(e);
        }
        return '-' + this.negate().toString(e);
      }
      var s = t.fromNumber(Math.pow(e, 6), this.unsigned);
      n = this;
      var o = '';
      for (;;) {
        var u = n.div(s), a = n.subtract(u.multiply(s)).toInt() >>> 0, f = a.toString(e);
        n = u;
        if (n.isZero())
          return f + o;
        while (f.length < 6)
          f = '0' + f;
        o = '' + f + o;
      }
    }, t.prototype.getHighBits = function() {
      return this.high;
    }, t.prototype.getHighBitsUnsigned = function() {
      return this.high >>> 0;
    }, t.prototype.getLowBits = function() {
      return this.low;
    }, t.prototype.getLowBitsUnsigned = function() {
      return this.low >>> 0;
    }, t.prototype.getNumBitsAbs = function() {
      if (this.isNegative())
        return this.equals(t.MIN_VALUE) ? 64 : this.negate().getNumBitsAbs();
      var e = this.high != 0 ? this.high : this.low;
      for (var n = 31; n > 0; n--)
        if ((e & 1 << n) != 0)
          break;
      return this.high != 0 ? n + 33 : n + 1;
    }, t.prototype.isZero = function() {
      return this.high === 0 && this.low === 0;
    }, t.prototype.isNegative = function() {
      return !this.unsigned && this.high < 0;
    }, t.prototype.isPositive = function() {
      return this.unsigned || this.high >= 0;
    }, t.prototype.isOdd = function() {
      return (this.low & 1) === 1;
    }, t.prototype.isEven = function() {
      return (this.low & 1) === 0;
    }, t.prototype.equals = function(e) {
      return t.isLong(e) ||
        (e = t.fromValue(
          e
        )), this.unsigned !== e.unsigned && this.high >>> 31 === 1 && e.high >>> 31 === 1 ? !1 : this.high === e.high && this.low === e.low;
    }, t.prototype.notEquals = function(e) {
      return t.isLong(e) || (e = t.fromValue(e)), !this.equals(e);
    }, t.prototype.lessThan = function(e) {
      return t.isLong(e) || (e = t.fromValue(e)), this.compare(e) < 0;
    }, t.prototype.lessThanOrEqual = function(e) {
      return t.isLong(e) || (e = t.fromValue(e)), this.compare(e) <= 0;
    }, t.prototype.greaterThan = function(e) {
      return t.isLong(e) || (e = t.fromValue(e)), this.compare(e) > 0;
    }, t.prototype.greaterThanOrEqual = function(e) {
      return this.compare(e) >= 0;
    }, t.prototype.compare = function(e) {
      if (this.equals(e))
        return 0;
      var t = this.isNegative(), n = e.isNegative();
      return t && !n
        ? -1
        : !t && n
          ? 1
          : this.unsigned
            ? e.high >>> 0 > this.high >>> 0 || e.high === this.high && e.low >>> 0 > this.low >>> 0 ? -1 : 1
            : this.subtract(e).isNegative() ? -1 : 1;
    }, t.prototype.negate = function() {
      return !this.unsigned && this.equals(t.MIN_VALUE) ? t.MIN_VALUE : this.not().add(t.ONE);
    }, t.prototype.add = function(e) {
      t.isLong(e) || (e = t.fromValue(e));
      var n = this.high >>> 16,
        r = this.high & 65535,
        i = this.low >>> 16,
        s = this.low & 65535,
        o = e.high >>> 16,
        u = e.high & 65535,
        a = e.low >>> 16,
        f = e.low & 65535,
        l = 0,
        c = 0,
        h = 0,
        p = 0;
      return p += s +
        f, h += p >>> 16, p &= 65535, h += i + a, c += h >>> 16, h &= 65535, c += r + u, l += c >>> 16, c &= 65535, l += n + o, l &= 65535, t.fromBits(h << 16 | p, l << 16 | c, this.unsigned);
    }, t.prototype.subtract = function(e) {
      return t.isLong(e) || (e = t.fromValue(e)), this.add(e.negate());
    }, t.prototype.multiply = function(e) {
      if (this.isZero())
        return t.ZERO;
      t.isLong(e) || (e = t.fromValue(e));
      if (e.isZero())
        return t.ZERO;
      if (this.equals(t.MIN_VALUE))
        return e.isOdd() ? t.MIN_VALUE : t.ZERO;
      if (e.equals(t.MIN_VALUE))
        return this.isOdd() ? t.MIN_VALUE : t.ZERO;
      if (this.isNegative())
        return e.isNegative() ? this.negate().multiply(e.negate()) : this.negate().multiply(e).negate();
      if (e.isNegative())
        return this.multiply(e.negate()).negate();
      if (this.lessThan(f) && e.lessThan(f))
        return t.fromNumber(this.toNumber() * e.toNumber(), this.unsigned);
      var n = this.high >>> 16,
        r = this.high & 65535,
        i = this.low >>> 16,
        s = this.low & 65535,
        o = e.high >>> 16,
        u = e.high & 65535,
        a = e.low >>> 16,
        l = e.low & 65535,
        c = 0,
        h = 0,
        p = 0,
        d = 0;
      return d += s *
        l, p += d >>> 16, d &= 65535, p += i * l, h += p >>> 16, p &= 65535, p += s * a, h += p >>> 16, p &= 65535, h += r * l, c += h >>> 16, h &= 65535, h += i * a, c += h >>> 16, h &= 65535, h += s * u, c += h >>> 16, h &= 65535, c += n * l + r * a + i * u + s * o, c &= 65535, t.fromBits(p << 16 | d, c << 16 | h, this.unsigned);
    }, t.prototype.div = function(e) {
      t.isLong(e) || (e = t.fromValue(e));
      if (e.isZero())
        throw new Error('division by zero');
      if (this.isZero())
        return this.unsigned ? t.UZERO : t.ZERO;
      var n, r, i;
      if (this.equals(t.MIN_VALUE)) {
        if (e.equals(t.ONE) || e.equals(t.NEG_ONE))
          return t.MIN_VALUE;
        if (e.equals(t.MIN_VALUE))
          return t.ONE;
        var s = this.shiftRight(1);
        return n = s
          .div(e)
          .shiftLeft(
            1
          ), n.equals(t.ZERO) ? e.isNegative() ? t.ONE : t.NEG_ONE : (r = this.subtract(e.multiply(n)), i = n.add(r.div(e)), i);
      }
      if (e.equals(t.MIN_VALUE))
        return this.unsigned ? t.UZERO : t.ZERO;
      if (this.isNegative())
        return e.isNegative() ? this.negate().div(e.negate()) : this.negate().div(e).negate();
      if (e.isNegative())
        return this.div(e.negate()).negate();
      i = t.ZERO, r = this;
      while (r.greaterThanOrEqual(e)) {
        n = Math.max(1, Math.floor(r.toNumber() / e.toNumber()));
        var o = Math.ceil(Math.log(n) / Math.LN2),
          u = o <= 48 ? 1 : Math.pow(2, o - 48),
          a = t.fromNumber(n),
          f = a.multiply(e);
        while (f.isNegative() || f.greaterThan(r))
          n -= u, a = t.fromNumber(n, this.unsigned), f = a.multiply(e);
        a.isZero() && (a = t.ONE), i = i.add(a), r = r.subtract(f);
      }
      return i;
    }, t.prototype.modulo = function(e) {
      return t.isLong(e) || (e = t.fromValue(e)), this.subtract(this.div(e).multiply(e));
    }, t.prototype.not = function() {
      return t.fromBits(~this.low, ~this.high, this.unsigned);
    }, t.prototype.and = function(e) {
      return t.isLong(e) || (e = t.fromValue(e)), t.fromBits(this.low & e.low, this.high & e.high, this.unsigned);
    }, t.prototype.or = function(e) {
      return t.isLong(e) || (e = t.fromValue(e)), t.fromBits(this.low | e.low, this.high | e.high, this.unsigned);
    }, t.prototype.xor = function(e) {
      return t.isLong(e) || (e = t.fromValue(e)), t.fromBits(this.low ^ e.low, this.high ^ e.high, this.unsigned);
    }, t.prototype.shiftLeft = function(e) {
      return t.isLong(e) &&
        (e = e.toInt()), (e &= 63) === 0 ? this : e < 32 ? t.fromBits(this.low << e, this.high << e | this.low >>> 32 - e, this.unsigned) : t.fromBits(0, this.low << e - 32, this.unsigned);
    }, t.prototype.shiftRight = function(e) {
      return t.isLong(e) &&
        (e = e.toInt()), (e &= 63) === 0 ? this : e < 32 ? t.fromBits(this.low >>> e | this.high << 32 - e, this.high >> e, this.unsigned) : t.fromBits(this.high >> e - 32, this.high >= 0 ? 0 : -1, this.unsigned);
    }, t.prototype.shiftRightUnsigned = function(e) {
      t.isLong(e) && (e = e.toInt()), e &= 63;
      if (e === 0)
        return this;
      var n = this.high;
      if (e < 32) {
        var r = this.low;
        return t.fromBits(r >>> e | n << 32 - e, n >>> e, this.unsigned);
      }
      return e === 32 ? t.fromBits(n, 0, this.unsigned) : t.fromBits(n >>> e - 32, 0, this.unsigned);
    }, t.prototype.toSigned = function() {
      return this.unsigned ? new t(this.low, this.high, !1) : this;
    }, t.prototype.toUnsigned = function() {
      return this.unsigned ? this : new t(this.low, this.high, !0);
    }, typeof require == 'function' && typeof module == 'object' && module && typeof exports == 'object' && exports
      ? module.exports = t
      : m = function() {
        return t;
      }();
  }(this), function(e) {
    'use strict';

    function t(e) {
      function o(e) {
        var t = 0;
        return function() {
          return t < e.length ? e.charCodeAt(t++) : null;
        };
      }
      function u() {
        var e = [], t = [];
        return function() {
          if (arguments.length === 0)
            return t.join('') + s.apply(String, e);
          e.length + arguments.length > 1024 && (t.push(s.apply(String, e)), e.length = 0), Array.prototype.push.apply(
            e,
            arguments
          );
        };
      }
      var t = function(e, n, i) {
        typeof e == 'undefined' && (e = t.DEFAULT_CAPACITY), typeof n == 'undefined' &&
          (n = t.DEFAULT_ENDIAN), typeof i == 'undefined' && (i = t.DEFAULT_NOASSERT);
        if (!i) {
          e |= 0;
          if (e < 0)
            throw RangeError('Illegal capacity');
          n = !!n, i = !!i;
        }
        this.buffer = e === 0 ? r : new ArrayBuffer(e), this.view = e === 0
          ? null
          : new DataView(
            this.buffer
          ), this.offset = 0, this.markedOffset = -1, this.limit = e, this.littleEndian = typeof n != 'undefined'
          ? !!n
          : !1, this.noAssert = !!i;
      };
      t.VERSION = '3.5.4', t.LITTLE_ENDIAN = !0, t.BIG_ENDIAN = !1, t.DEFAULT_CAPACITY = 16, t.DEFAULT_ENDIAN = t.BIG_ENDIAN, t.DEFAULT_NOASSERT = !1, t.Long = e ||
        null;
      var n = t.prototype, r = new ArrayBuffer(0), s = String.fromCharCode;
      t.allocate = function(e, n, r) {
        return new t(e, n, r);
      }, t.concat = function(e, n, r, i) {
        if (typeof n == 'boolean' || typeof n != 'string')
          i = r, r = n, n = undefined;
        var s = 0;
        for (var o = 0, u = e.length, a; o < u; ++o)
          t.isByteBuffer(e[o]) || (e[o] = t.wrap(e[o], n)), a = e[o].limit - e[o].offset, a > 0 && (s += a);
        if (s === 0)
          return new t(0, r, i);
        var f = new t(s, r, i), l, c = new Uint8Array(f.buffer);
        o = 0;
        while (o < u) {
          l = e[o++], a = l.limit - l.offset;
          if (a <= 0)
            continue;
          c.set(new Uint8Array(l.buffer).subarray(l.offset, l.limit), f.offset), f.offset += a;
        }
        return f.limit = f.offset, f.offset = 0, f;
      }, t.isByteBuffer = function(e) {
        return (e && e instanceof t) === !0;
      }, t.type = function() {
        return ArrayBuffer;
      }, t.wrap = function(e, r, s, o) {
        typeof r != 'string' && (o = s, s = r, r = undefined);
        if (typeof e == 'string') {
          typeof r == 'undefined' && (r = 'utf8');
          switch (r) {
            case 'base64':
              return t.fromBase64(e, s);
            case 'hex':
              return t.fromHex(e, s);
            case 'binary':
              return t.fromBinary(e, s);
            case 'utf8':
              return t.fromUTF8(e, s);
            case 'debug':
              return t.fromDebug(e, s);
            default:
              throw Error('Unsupported encoding: ' + r);
          }
        }
        if (e === null || typeof e != 'object')
          throw TypeError('Illegal buffer');
        var u;
        if (t.isByteBuffer(e))
          return u = n.clone.call(e), u.markedOffset = -1, u;
        if (e instanceof Uint8Array)
          u = new t(
            0,
            s,
            o
          ), e.length > 0 && (u.buffer = e.buffer, u.offset = e.byteOffset, u.limit = e.byteOffset + e.length, u.view = e.length > 0 ? new DataView(e.buffer) : null);
        else if (e instanceof ArrayBuffer)
          u = new t(
            0,
            s,
            o
          ), e.byteLength > 0 && (u.buffer = e, u.offset = 0, u.limit = e.byteLength, u.view = e.byteLength > 0 ? new DataView(e) : null);
        else {
          if (Object.prototype.toString.call(e) !== '[object Array]')
            throw TypeError('Illegal buffer');
          u = new t(e.length, s, o), u.limit = e.length;
          for (i = 0; i < e.length; ++i)
            u.view.setUint8(i, e[i]);
        }
        return u;
      }, n.writeInt8 = function(e, t) {
        var n = typeof t == 'undefined';
        n && (t = this.offset);
        if (!this.noAssert) {
          if (typeof e != 'number' || e % 1 !== 0)
            throw TypeError('Illegal value: ' + e + ' (not an integer)');
          e |= 0;
          if (typeof t != 'number' || t % 1 !== 0)
            throw TypeError('Illegal offset: ' + t + ' (not an integer)');
          t >>>= 0;
          if (t < 0 || t + 0 > this.buffer.byteLength)
            throw RangeError('Illegal offset: 0 <= ' + t + ' (+' + 0 + ') <= ' + this.buffer.byteLength);
        }
        t += 1;
        var r = this.buffer.byteLength;
        return t > r &&
          this.resize((r *= 2) > t ? r : t), t -= 1, this.view.setInt8(t, e), n && (this.offset += 1), this;
      }, n.writeByte = n.writeInt8, n.readInt8 = function(e) {
        var t = typeof e == 'undefined';
        t && (e = this.offset);
        if (!this.noAssert) {
          if (typeof e != 'number' || e % 1 !== 0)
            throw TypeError('Illegal offset: ' + e + ' (not an integer)');
          e >>>= 0;
          if (e < 0 || e + 1 > this.buffer.byteLength)
            throw RangeError('Illegal offset: 0 <= ' + e + ' (+' + 1 + ') <= ' + this.buffer.byteLength);
        }
        var n = this.view.getInt8(e);
        return t && (this.offset += 1), n;
      }, n.readByte = n.readInt8, n.writeUint8 = function(e, t) {
        var n = typeof t == 'undefined';
        n && (t = this.offset);
        if (!this.noAssert) {
          if (typeof e != 'number' || e % 1 !== 0)
            throw TypeError('Illegal value: ' + e + ' (not an integer)');
          e >>>= 0;
          if (typeof t != 'number' || t % 1 !== 0)
            throw TypeError('Illegal offset: ' + t + ' (not an integer)');
          t >>>= 0;
          if (t < 0 || t + 0 > this.buffer.byteLength)
            throw RangeError('Illegal offset: 0 <= ' + t + ' (+' + 0 + ') <= ' + this.buffer.byteLength);
        }
        t += 1;
        var r = this.buffer.byteLength;
        return t > r &&
          this.resize((r *= 2) > t ? r : t), t -= 1, this.view.setUint8(t, e), n && (this.offset += 1), this;
      }, n.readUint8 = function(e) {
        var t = typeof e == 'undefined';
        t && (e = this.offset);
        if (!this.noAssert) {
          if (typeof e != 'number' || e % 1 !== 0)
            throw TypeError('Illegal offset: ' + e + ' (not an integer)');
          e >>>= 0;
          if (e < 0 || e + 1 > this.buffer.byteLength)
            throw RangeError('Illegal offset: 0 <= ' + e + ' (+' + 1 + ') <= ' + this.buffer.byteLength);
        }
        var n = this.view.getUint8(e);
        return t && (this.offset += 1), n;
      }, n.writeInt16 = function(e, t) {
        var n = typeof t == 'undefined';
        n && (t = this.offset);
        if (!this.noAssert) {
          if (typeof e != 'number' || e % 1 !== 0)
            throw TypeError('Illegal value: ' + e + ' (not an integer)');
          e |= 0;
          if (typeof t != 'number' || t % 1 !== 0)
            throw TypeError('Illegal offset: ' + t + ' (not an integer)');
          t >>>= 0;
          if (t < 0 || t + 0 > this.buffer.byteLength)
            throw RangeError('Illegal offset: 0 <= ' + t + ' (+' + 0 + ') <= ' + this.buffer.byteLength);
        }
        t += 2;
        var r = this.buffer.byteLength;
        return t > r &&
          this.resize(
            (r *= 2) > t ? r : t
          ), t -= 2, this.view.setInt16(t, e, this.littleEndian), n && (this.offset += 2), this;
      }, n.writeShort = n.writeInt16, n.readInt16 = function(e) {
        var t = typeof e == 'undefined';
        t && (e = this.offset);
        if (!this.noAssert) {
          if (typeof e != 'number' || e % 1 !== 0)
            throw TypeError('Illegal offset: ' + e + ' (not an integer)');
          e >>>= 0;
          if (e < 0 || e + 2 > this.buffer.byteLength)
            throw RangeError('Illegal offset: 0 <= ' + e + ' (+' + 2 + ') <= ' + this.buffer.byteLength);
        }
        var n = this.view.getInt16(e, this.littleEndian);
        return t && (this.offset += 2), n;
      }, n.readShort = n.readInt16, n.writeUint16 = function(e, t) {
        var n = typeof t == 'undefined';
        n && (t = this.offset);
        if (!this.noAssert) {
          if (typeof e != 'number' || e % 1 !== 0)
            throw TypeError('Illegal value: ' + e + ' (not an integer)');
          e >>>= 0;
          if (typeof t != 'number' || t % 1 !== 0)
            throw TypeError('Illegal offset: ' + t + ' (not an integer)');
          t >>>= 0;
          if (t < 0 || t + 0 > this.buffer.byteLength)
            throw RangeError('Illegal offset: 0 <= ' + t + ' (+' + 0 + ') <= ' + this.buffer.byteLength);
        }
        t += 2;
        var r = this.buffer.byteLength;
        return t > r &&
          this.resize(
            (r *= 2) > t ? r : t
          ), t -= 2, this.view.setUint16(t, e, this.littleEndian), n && (this.offset += 2), this;
      }, n.readUint16 = function(e) {
        var t = typeof e == 'undefined';
        t && (e = this.offset);
        if (!this.noAssert) {
          if (typeof e != 'number' || e % 1 !== 0)
            throw TypeError('Illegal offset: ' + e + ' (not an integer)');
          e >>>= 0;
          if (e < 0 || e + 2 > this.buffer.byteLength)
            throw RangeError('Illegal offset: 0 <= ' + e + ' (+' + 2 + ') <= ' + this.buffer.byteLength);
        }
        var n = this.view.getUint16(e, this.littleEndian);
        return t && (this.offset += 2), n;
      }, n.writeInt32 = function(e, t) {
        var n = typeof t == 'undefined';
        n && (t = this.offset);
        if (!this.noAssert) {
          if (typeof e != 'number' || e % 1 !== 0)
            throw TypeError('Illegal value: ' + e + ' (not an integer)');
          e |= 0;
          if (typeof t != 'number' || t % 1 !== 0)
            throw TypeError('Illegal offset: ' + t + ' (not an integer)');
          t >>>= 0;
          if (t < 0 || t + 0 > this.buffer.byteLength)
            throw RangeError('Illegal offset: 0 <= ' + t + ' (+' + 0 + ') <= ' + this.buffer.byteLength);
        }
        t += 4;
        var r = this.buffer.byteLength;
        return t > r &&
          this.resize(
            (r *= 2) > t ? r : t
          ), t -= 4, this.view.setInt32(t, e, this.littleEndian), n && (this.offset += 4), this;
      }, n.writeInt = n.writeInt32, n.readInt32 = function(e) {
        var t = typeof e == 'undefined';
        t && (e = this.offset);
        if (!this.noAssert) {
          if (typeof e != 'number' || e % 1 !== 0)
            throw TypeError('Illegal offset: ' + e + ' (not an integer)');
          e >>>= 0;
          if (e < 0 || e + 4 > this.buffer.byteLength)
            throw RangeError('Illegal offset: 0 <= ' + e + ' (+' + 4 + ') <= ' + this.buffer.byteLength);
        }
        var n = this.view.getInt32(e, this.littleEndian);
        return t && (this.offset += 4), n;
      }, n.readInt = n.readInt32, n.writeUint32 = function(e, t) {
        var n = typeof t == 'undefined';
        n && (t = this.offset);
        if (!this.noAssert) {
          if (typeof e != 'number' || e % 1 !== 0)
            throw TypeError('Illegal value: ' + e + ' (not an integer)');
          e >>>= 0;
          if (typeof t != 'number' || t % 1 !== 0)
            throw TypeError('Illegal offset: ' + t + ' (not an integer)');
          t >>>= 0;
          if (t < 0 || t + 0 > this.buffer.byteLength)
            throw RangeError('Illegal offset: 0 <= ' + t + ' (+' + 0 + ') <= ' + this.buffer.byteLength);
        }
        t += 4;
        var r = this.buffer.byteLength;
        return t > r &&
          this.resize(
            (r *= 2) > t ? r : t
          ), t -= 4, this.view.setUint32(t, e, this.littleEndian), n && (this.offset += 4), this;
      }, n.readUint32 = function(e) {
        var t = typeof e == 'undefined';
        t && (e = this.offset);
        if (!this.noAssert) {
          if (typeof e != 'number' || e % 1 !== 0)
            throw TypeError('Illegal offset: ' + e + ' (not an integer)');
          e >>>= 0;
          if (e < 0 || e + 4 > this.buffer.byteLength)
            throw RangeError('Illegal offset: 0 <= ' + e + ' (+' + 4 + ') <= ' + this.buffer.byteLength);
        }
        var n = this.view.getUint32(e, this.littleEndian);
        return t && (this.offset += 4), n;
      }, e && (n.writeInt64 = function(t, n) {
          var r = typeof n == 'undefined';
          r && (n = this.offset);
          if (!this.noAssert) {
            if (typeof t == 'number')
              t = e.fromNumber(t);
            else if (!(t && t instanceof e))
              throw TypeError('Illegal value: ' + t + ' (not an integer or Long)');
            if (typeof n != 'number' || n % 1 !== 0)
              throw TypeError('Illegal offset: ' + n + ' (not an integer)');
            n >>>= 0;
            if (n < 0 || n + 0 > this.buffer.byteLength)
              throw RangeError('Illegal offset: 0 <= ' + n + ' (+' + 0 + ') <= ' + this.buffer.byteLength);
          }
          typeof t == 'number' && (t = e.fromNumber(t)), n += 8;
          var i = this.buffer.byteLength;
          return n > i &&
            this.resize(
              (i *= 2) > n ? i : n
            ), n -= 8, this.littleEndian ? (this.view.setInt32(n, t.low, !0), this.view.setInt32(n + 4, t.high, !0)) : (this.view.setInt32(n, t.high, !1), this.view.setInt32(n + 4, t.low, !1)), r && (this.offset += 8), this;
        }, n.writeLong = n.writeInt64, n.readInt64 = function(t) {
          var n = typeof t == 'undefined';
          n && (t = this.offset);
          if (!this.noAssert) {
            if (typeof t != 'number' || t % 1 !== 0)
              throw TypeError('Illegal offset: ' + t + ' (not an integer)');
            t >>>= 0;
            if (t < 0 || t + 8 > this.buffer.byteLength)
              throw RangeError('Illegal offset: 0 <= ' + t + ' (+' + 8 + ') <= ' + this.buffer.byteLength);
          }
          var r = this.littleEndian
            ? new e(this.view.getInt32(t, !0), this.view.getInt32(t + 4, !0), !1)
            : new e(this.view.getInt32(t + 4, !1), this.view.getInt32(t, !1), !1);
          return n && (this.offset += 8), r;
        }, n.readLong = n.readInt64, n.writeUint64 = function(t, n) {
          var r = typeof n == 'undefined';
          r && (n = this.offset);
          if (!this.noAssert) {
            if (typeof t == 'number')
              t = e.fromNumber(t);
            else if (!(t && t instanceof e))
              throw TypeError('Illegal value: ' + t + ' (not an integer or Long)');
            if (typeof n != 'number' || n % 1 !== 0)
              throw TypeError('Illegal offset: ' + n + ' (not an integer)');
            n >>>= 0;
            if (n < 0 || n + 0 > this.buffer.byteLength)
              throw RangeError('Illegal offset: 0 <= ' + n + ' (+' + 0 + ') <= ' + this.buffer.byteLength);
          }
          typeof t == 'number' && (t = e.fromNumber(t)), n += 8;
          var i = this.buffer.byteLength;
          return n > i &&
            this.resize(
              (i *= 2) > n ? i : n
            ), n -= 8, this.littleEndian ? (this.view.setInt32(n, t.low, !0), this.view.setInt32(n + 4, t.high, !0)) : (this.view.setInt32(n, t.high, !1), this.view.setInt32(n + 4, t.low, !1)), r && (this.offset += 8), this;
        }, n.readUint64 = function(t) {
          var n = typeof t == 'undefined';
          n && (t = this.offset);
          if (!this.noAssert) {
            if (typeof t != 'number' || t % 1 !== 0)
              throw TypeError('Illegal offset: ' + t + ' (not an integer)');
            t >>>= 0;
            if (t < 0 || t + 8 > this.buffer.byteLength)
              throw RangeError('Illegal offset: 0 <= ' + t + ' (+' + 8 + ') <= ' + this.buffer.byteLength);
          }
          var r = this.littleEndian
            ? new e(this.view.getInt32(t, !0), this.view.getInt32(t + 4, !0), !0)
            : new e(this.view.getInt32(t + 4, !1), this.view.getInt32(t, !1), !0);
          return n && (this.offset += 8), r;
        }), n.writeFloat32 = function(e, t) {
        var n = typeof t == 'undefined';
        n && (t = this.offset);
        if (!this.noAssert) {
          if (typeof e != 'number')
            throw TypeError('Illegal value: ' + e + ' (not a number)');
          if (typeof t != 'number' || t % 1 !== 0)
            throw TypeError('Illegal offset: ' + t + ' (not an integer)');
          t >>>= 0;
          if (t < 0 || t + 0 > this.buffer.byteLength)
            throw RangeError('Illegal offset: 0 <= ' + t + ' (+' + 0 + ') <= ' + this.buffer.byteLength);
        }
        t += 4;
        var r = this.buffer.byteLength;
        return t > r &&
          this.resize(
            (r *= 2) > t ? r : t
          ), t -= 4, this.view.setFloat32(t, e, this.littleEndian), n && (this.offset += 4), this;
      }, n.writeFloat = n.writeFloat32, n.readFloat32 = function(e) {
        var t = typeof e == 'undefined';
        t && (e = this.offset);
        if (!this.noAssert) {
          if (typeof e != 'number' || e % 1 !== 0)
            throw TypeError('Illegal offset: ' + e + ' (not an integer)');
          e >>>= 0;
          if (e < 0 || e + 4 > this.buffer.byteLength)
            throw RangeError('Illegal offset: 0 <= ' + e + ' (+' + 4 + ') <= ' + this.buffer.byteLength);
        }
        var n = this.view.getFloat32(e, this.littleEndian);
        return t && (this.offset += 4), n;
      }, n.readFloat = n.readFloat32, n.writeFloat64 = function(e, t) {
        var n = typeof t == 'undefined';
        n && (t = this.offset);
        if (!this.noAssert) {
          if (typeof e != 'number')
            throw TypeError('Illegal value: ' + e + ' (not a number)');
          if (typeof t != 'number' || t % 1 !== 0)
            throw TypeError('Illegal offset: ' + t + ' (not an integer)');
          t >>>= 0;
          if (t < 0 || t + 0 > this.buffer.byteLength)
            throw RangeError('Illegal offset: 0 <= ' + t + ' (+' + 0 + ') <= ' + this.buffer.byteLength);
        }
        t += 8;
        var r = this.buffer.byteLength;
        return t > r &&
          this.resize(
            (r *= 2) > t ? r : t
          ), t -= 8, this.view.setFloat64(t, e, this.littleEndian), n && (this.offset += 8), this;
      }, n.writeDouble = n.writeFloat64, n.readFloat64 = function(e) {
        var t = typeof e == 'undefined';
        t && (e = this.offset);
        if (!this.noAssert) {
          if (typeof e != 'number' || e % 1 !== 0)
            throw TypeError('Illegal offset: ' + e + ' (not an integer)');
          e >>>= 0;
          if (e < 0 || e + 8 > this.buffer.byteLength)
            throw RangeError('Illegal offset: 0 <= ' + e + ' (+' + 8 + ') <= ' + this.buffer.byteLength);
        }
        var n = this.view.getFloat64(e, this.littleEndian);
        return t && (this.offset += 8), n;
      }, n.readDouble = n.readFloat64, t.MAX_VARINT32_BYTES = 5, t.calculateVarint32 = function(e) {
        return e >>>= 0, e < 128 ? 1 : e < 16384 ? 2 : e < 1 << 21 ? 3 : e < 1 << 28 ? 4 : 5;
      }, t.zigZagEncode32 = function(e) {
        return ((e |= 0) << 1 ^ e >> 31) >>> 0;
      }, t.zigZagDecode32 = function(e) {
        return e >>> 1 ^ -(e & 1) | 0;
      }, n.writeVarint32 = function(e, n) {
        var r = typeof n == 'undefined';
        r && (n = this.offset);
        if (!this.noAssert) {
          if (typeof e != 'number' || e % 1 !== 0)
            throw TypeError('Illegal value: ' + e + ' (not an integer)');
          e |= 0;
          if (typeof n != 'number' || n % 1 !== 0)
            throw TypeError('Illegal offset: ' + n + ' (not an integer)');
          n >>>= 0;
          if (n < 0 || n + 0 > this.buffer.byteLength)
            throw RangeError('Illegal offset: 0 <= ' + n + ' (+' + 0 + ') <= ' + this.buffer.byteLength);
        }
        var i = t.calculateVarint32(e), s;
        n += i;
        var o = this.buffer.byteLength;
        return n > o &&
          this.resize(
            (o *= 2) > n ? o : n
          ), n -= i, this.view.setUint8(n, s = e | 128), e >>>= 0, e >= 128 ? (s = e >> 7 | 128, this.view.setUint8(n + 1, s), e >= 16384 ? (s = e >> 14 | 128, this.view.setUint8(n + 2, s), e >= 1 << 21 ? (s = e >> 21 | 128, this.view.setUint8(n + 3, s), e >= 1 << 28 ? (this.view.setUint8(n + 4, e >> 28 & 15), i = 5) : (this.view.setUint8(n + 3, s & 127), i = 4)) : (this.view.setUint8(n + 2, s & 127), i = 3)) : (this.view.setUint8(n + 1, s & 127), i = 2)) : (this.view.setUint8(n, s & 127), i = 1), r ? (this.offset += i, this) : i;
      }, n.writeVarint32ZigZag = function(e, n) {
        return this.writeVarint32(t.zigZagEncode32(e), n);
      }, n.readVarint32 = function(e) {
        var t = typeof e == 'undefined';
        t && (e = this.offset);
        if (!this.noAssert) {
          if (typeof e != 'number' || e % 1 !== 0)
            throw TypeError('Illegal offset: ' + e + ' (not an integer)');
          e >>>= 0;
          if (e < 0 || e + 1 > this.buffer.byteLength)
            throw RangeError('Illegal offset: 0 <= ' + e + ' (+' + 1 + ') <= ' + this.buffer.byteLength);
        }
        var n = 0, r = 0, i, s;
        do {
          s = e + n;
          if (!this.noAssert && s > this.limit) {
            var o = Error('Truncated');
            throw (o.truncated = !0, o);
          }
          i = this.view.getUint8(s), n < 5 && (r |= (i & 127) << 7 * n >>> 0), ++n;
        } while ((i & 128) === 128);
        return r |= 0, t ? (this.offset += n, r) : { value: r, length: n };
      }, n.readVarint32ZigZag = function(e) {
        var n = this.readVarint32(e);
        return typeof n == 'object' ? n.value = t.zigZagDecode32(n.value) : n = t.zigZagDecode32(n), n;
      }, e && (t.MAX_VARINT64_BYTES = 10, t.calculateVarint64 = function(t) {
          typeof t == 'number' && (t = e.fromNumber(t));
          var n = t.toInt() >>> 0,
            r = t.shiftRightUnsigned(28).toInt() >>> 0,
            i = t.shiftRightUnsigned(56).toInt() >>> 0;
          return i == 0
            ? r == 0
              ? n < 16384 ? n < 128 ? 1 : 2 : n < 1 << 21 ? 3 : 4
              : r < 16384 ? r < 128 ? 5 : 6 : r < 1 << 21 ? 7 : 8
            : i < 128 ? 9 : 10;
        }, t.zigZagEncode64 = function(t) {
          return typeof t == 'number'
            ? t = e.fromNumber(t, !1)
            : t.unsigned !== !1 && (t = t.toSigned()), t.shiftLeft(1).xor(t.shiftRight(63)).toUnsigned();
        }, t.zigZagDecode64 = function(t) {
          return typeof t == 'number'
            ? t = e.fromNumber(t, !1)
            : t.unsigned !== !1 &&
              (t = t.toSigned()), t.shiftRightUnsigned(1).xor(t.and(e.ONE).toSigned().negate()).toSigned();
        }, n.writeVarint64 = function(n, r) {
          var i = typeof r == 'undefined';
          i && (r = this.offset);
          if (!this.noAssert) {
            if (typeof n == 'number')
              n = e.fromNumber(n);
            else if (!(n && n instanceof e))
              throw TypeError('Illegal value: ' + n + ' (not an integer or Long)');
            if (typeof r != 'number' || r % 1 !== 0)
              throw TypeError('Illegal offset: ' + r + ' (not an integer)');
            r >>>= 0;
            if (r < 0 || r + 0 > this.buffer.byteLength)
              throw RangeError('Illegal offset: 0 <= ' + r + ' (+' + 0 + ') <= ' + this.buffer.byteLength);
          }
          typeof n == 'number' ? n = e.fromNumber(n, !1) : n.unsigned !== !1 && (n = n.toSigned());
          var s = t.calculateVarint64(n),
            o = n.toInt() >>> 0,
            u = n.shiftRightUnsigned(28).toInt() >>> 0,
            a = n.shiftRightUnsigned(56).toInt() >>> 0;
          r += s;
          var f = this.buffer.byteLength;
          r > f && this.resize((f *= 2) > r ? f : r), r -= s;
          switch (s) {
            case 10:
              this.view.setUint8(r + 9, a >>> 7 & 1);
            case 9:
              this.view.setUint8(r + 8, s !== 9 ? a | 128 : a & 127);
            case 8:
              this.view.setUint8(r + 7, s !== 8 ? u >>> 21 | 128 : u >>> 21 & 127);
            case 7:
              this.view.setUint8(r + 6, s !== 7 ? u >>> 14 | 128 : u >>> 14 & 127);
            case 6:
              this.view.setUint8(r + 5, s !== 6 ? u >>> 7 | 128 : u >>> 7 & 127);
            case 5:
              this.view.setUint8(r + 4, s !== 5 ? u | 128 : u & 127);
            case 4:
              this.view.setUint8(r + 3, s !== 4 ? o >>> 21 | 128 : o >>> 21 & 127);
            case 3:
              this.view.setUint8(r + 2, s !== 3 ? o >>> 14 | 128 : o >>> 14 & 127);
            case 2:
              this.view.setUint8(r + 1, s !== 2 ? o >>> 7 | 128 : o >>> 7 & 127);
            case 1:
              this.view.setUint8(r, s !== 1 ? o | 128 : o & 127);
          }
          return i ? (this.offset += s, this) : s;
        }, n.writeVarint64ZigZag = function(e, n) {
          return this.writeVarint64(t.zigZagEncode64(e), n);
        }, n.readVarint64 = function(t) {
          var n = typeof t == 'undefined';
          n && (t = this.offset);
          if (!this.noAssert) {
            if (typeof t != 'number' || t % 1 !== 0)
              throw TypeError('Illegal offset: ' + t + ' (not an integer)');
            t >>>= 0;
            if (t < 0 || t + 1 > this.buffer.byteLength)
              throw RangeError('Illegal offset: 0 <= ' + t + ' (+' + 1 + ') <= ' + this.buffer.byteLength);
          }
          var r = t, i = 0, s = 0, o = 0, u = 0;
          u = this.view.getUint8(t++), i = u & 127;
          if (u & 128) {
            u = this.view.getUint8(t++), i |= (u & 127) << 7;
            if (u & 128) {
              u = this.view.getUint8(t++), i |= (u & 127) << 14;
              if (u & 128) {
                u = this.view.getUint8(t++), i |= (u & 127) << 21;
                if (u & 128) {
                  u = this.view.getUint8(t++), s = u & 127;
                  if (u & 128) {
                    u = this.view.getUint8(t++), s |= (u & 127) << 7;
                    if (u & 128) {
                      u = this.view.getUint8(t++), s |= (u & 127) << 14;
                      if (u & 128) {
                        u = this.view.getUint8(t++), s |= (u & 127) << 21;
                        if (u & 128) {
                          u = this.view.getUint8(t++), o = u & 127;
                          if (u & 128) {
                            u = this.view.getUint8(t++), o |= (u & 127) << 7;
                            if (u & 128)
                              throw Error('Buffer overrun');
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          var a = e.fromBits(i | s << 28, s >>> 4 | o << 24, !1);
          return n ? (this.offset = t, a) : { value: a, length: t - r };
        }, n.readVarint64ZigZag = function(n) {
          var r = this.readVarint64(n);
          return r && r.value instanceof e ? r.value = t.zigZagDecode64(r.value) : r = t.zigZagDecode64(r), r;
        }), n.writeCString = function(e, t) {
        var n = typeof t == 'undefined';
        n && (t = this.offset);
        var r, i = e.length;
        if (!this.noAssert) {
          if (typeof e != 'string')
            throw TypeError('Illegal str: Not a string');
          for (r = 0; r < i; ++r)
            if (e.charCodeAt(r) === 0)
              throw RangeError('Illegal str: Contains NULL-characters');
          if (typeof t != 'number' || t % 1 !== 0)
            throw TypeError('Illegal offset: ' + t + ' (not an integer)');
          t >>>= 0;
          if (t < 0 || t + 0 > this.buffer.byteLength)
            throw RangeError('Illegal offset: 0 <= ' + t + ' (+' + 0 + ') <= ' + this.buffer.byteLength);
        }
        var s = t;
        i = f.calculateUTF16asUTF8(o(e))[1], t += i + 1;
        var u = this.buffer.byteLength;
        return t > u && this.resize((u *= 2) > t ? u : t), t -= i + 1, f.encodeUTF16toUTF8(
          o(e),
          function(e) {
            this.view.setUint8(t++, e);
          }.bind(this)
        ), this.view.setUint8(t++, 0), n ? (this.offset = t - s, this) : i;
      }, n.readCString = function(e) {
        var t = typeof e == 'undefined';
        t && (e = this.offset);
        if (!this.noAssert) {
          if (typeof e != 'number' || e % 1 !== 0)
            throw TypeError('Illegal offset: ' + e + ' (not an integer)');
          e >>>= 0;
          if (e < 0 || e + 1 > this.buffer.byteLength)
            throw RangeError('Illegal offset: 0 <= ' + e + ' (+' + 1 + ') <= ' + this.buffer.byteLength);
        }
        var n = e, r, i, s = -1;
        return f.decodeUTF8toUTF16(
          function() {
            if (s === 0)
              return null;
            if (e >= this.limit)
              throw RangeError('Illegal range: Truncated data, ' + e + ' < ' + this.limit);
            return (s = this.view.getUint8(e++)) === 0 ? null : s;
          }.bind(this),
          i = u(),
          !0
        ), t ? (this.offset = e, i()) : { string: i(), length: e - n };
      }, n.writeIString = function(e, t) {
        var n = typeof t == 'undefined';
        n && (t = this.offset);
        if (!this.noAssert) {
          if (typeof e != 'string')
            throw TypeError('Illegal str: Not a string');
          if (typeof t != 'number' || t % 1 !== 0)
            throw TypeError('Illegal offset: ' + t + ' (not an integer)');
          t >>>= 0;
          if (t < 0 || t + 0 > this.buffer.byteLength)
            throw RangeError('Illegal offset: 0 <= ' + t + ' (+' + 0 + ') <= ' + this.buffer.byteLength);
        }
        var r = t, i;
        i = f.calculateUTF16asUTF8(o(e), this.noAssert)[1], t += 4 + i;
        var s = this.buffer.byteLength;
        t > s &&
          this.resize(
            (s *= 2) > t ? s : t
          ), t -= 4 + i, this.view.setUint32(t, i, this.littleEndian), t += 4, f.encodeUTF16toUTF8(
          o(e),
          function(e) {
            this.view.setUint8(t++, e);
          }.bind(this)
        );
        if (t !== r + 4 + i)
          throw RangeError('Illegal range: Truncated data, ' + t + ' == ' + (t + 4 + i));
        return n ? (this.offset = t, this) : t - r;
      }, n.readIString = function(e) {
        var t = typeof e == 'undefined';
        t && (e = this.offset);
        if (!this.noAssert) {
          if (typeof e != 'number' || e % 1 !== 0)
            throw TypeError('Illegal offset: ' + e + ' (not an integer)');
          e >>>= 0;
          if (e < 0 || e + 4 > this.buffer.byteLength)
            throw RangeError('Illegal offset: 0 <= ' + e + ' (+' + 4 + ') <= ' + this.buffer.byteLength);
        }
        var n = 0, r = e, i;
        n = this.view.getUint32(e, this.littleEndian), e += 4;
        var s = e + n, o;
        return f.decodeUTF8toUTF16(
          function() {
            return e < s ? this.view.getUint8(e++) : null;
          }.bind(this),
          o = u(),
          this.noAssert
        ), i = o(), t ? (this.offset = e, i) : { string: i, length: e - r };
      }, t.METRICS_CHARS = 'c', t.METRICS_BYTES = 'b', n.writeUTF8String = function(e, t) {
        var n = typeof t == 'undefined';
        n && (t = this.offset);
        if (!this.noAssert) {
          if (typeof t != 'number' || t % 1 !== 0)
            throw TypeError('Illegal offset: ' + t + ' (not an integer)');
          t >>>= 0;
          if (t < 0 || t + 0 > this.buffer.byteLength)
            throw RangeError('Illegal offset: 0 <= ' + t + ' (+' + 0 + ') <= ' + this.buffer.byteLength);
        }
        var r, i = t;
        r = f.calculateUTF16asUTF8(o(e))[1], t += r;
        var s = this.buffer.byteLength;
        return t > s && this.resize((s *= 2) > t ? s : t), t -= r, f.encodeUTF16toUTF8(
          o(e),
          function(e) {
            this.view.setUint8(t++, e);
          }.bind(this)
        ), n ? (this.offset = t, this) : t - i;
      }, n.writeString = n.writeUTF8String, t.calculateUTF8Chars = function(e) {
        return f.calculateUTF16asUTF8(o(e))[0];
      }, t.calculateUTF8Bytes = function(e) {
        return f.calculateUTF16asUTF8(o(e))[1];
      }, n.readUTF8String = function(e, n, r) {
        typeof n == 'number' && (r = n, n = undefined);
        var i = typeof r == 'undefined';
        i && (r = this.offset), typeof n == 'undefined' && (n = t.METRICS_CHARS);
        if (!this.noAssert) {
          if (typeof e != 'number' || e % 1 !== 0)
            throw TypeError('Illegal length: ' + e + ' (not an integer)');
          e |= 0;
          if (typeof r != 'number' || r % 1 !== 0)
            throw TypeError('Illegal offset: ' + r + ' (not an integer)');
          r >>>= 0;
          if (r < 0 || r + 0 > this.buffer.byteLength)
            throw RangeError('Illegal offset: 0 <= ' + r + ' (+' + 0 + ') <= ' + this.buffer.byteLength);
        }
        var s = 0, o = r, a;
        if (n === t.METRICS_CHARS) {
          a = u(), f.decodeUTF8(
            function() {
              return s < e && r < this.limit ? this.view.getUint8(r++) : null;
            }.bind(this),
            function(e) {
              ++s, f.UTF8toUTF16(e, a);
            }.bind(this)
          );
          if (s !== e)
            throw RangeError('Illegal range: Truncated data, ' + s + ' == ' + e);
          return i ? (this.offset = r, a()) : { string: a(), length: r - o };
        }
        if (n === t.METRICS_BYTES) {
          if (!this.noAssert) {
            if (typeof r != 'number' || r % 1 !== 0)
              throw TypeError('Illegal offset: ' + r + ' (not an integer)');
            r >>>= 0;
            if (r < 0 || r + e > this.buffer.byteLength)
              throw RangeError('Illegal offset: 0 <= ' + r + ' (+' + e + ') <= ' + this.buffer.byteLength);
          }
          var l = r + e;
          f.decodeUTF8toUTF16(
            function() {
              return r < l ? this.view.getUint8(r++) : null;
            }.bind(this),
            a = u(),
            this.noAssert
          );
          if (r !== l)
            throw RangeError('Illegal range: Truncated data, ' + r + ' == ' + l);
          return i ? (this.offset = r, a()) : { string: a(), length: r - o };
        }
        throw TypeError('Unsupported metrics: ' + n);
      }, n.readString = n.readUTF8String, n.writeVString = function(e, n) {
        var r = typeof n == 'undefined';
        r && (n = this.offset);
        if (!this.noAssert) {
          if (typeof e != 'string')
            throw TypeError('Illegal str: Not a string');
          if (typeof n != 'number' || n % 1 !== 0)
            throw TypeError('Illegal offset: ' + n + ' (not an integer)');
          n >>>= 0;
          if (n < 0 || n + 0 > this.buffer.byteLength)
            throw RangeError('Illegal offset: 0 <= ' + n + ' (+' + 0 + ') <= ' + this.buffer.byteLength);
        }
        var i = n, s, u;
        s = f.calculateUTF16asUTF8(o(e), this.noAssert)[1], u = t.calculateVarint32(s), n += u + s;
        var a = this.buffer.byteLength;
        n > a && this.resize((a *= 2) > n ? a : n), n -= u + s, n += this.writeVarint32(s, n), f.encodeUTF16toUTF8(
          o(e),
          function(e) {
            this.view.setUint8(n++, e);
          }.bind(this)
        );
        if (n !== i + s + u)
          throw RangeError('Illegal range: Truncated data, ' + n + ' == ' + (n + s + u));
        return r ? (this.offset = n, this) : n - i;
      }, n.readVString = function(e) {
        var t = typeof e == 'undefined';
        t && (e = this.offset);
        if (!this.noAssert) {
          if (typeof e != 'number' || e % 1 !== 0)
            throw TypeError('Illegal offset: ' + e + ' (not an integer)');
          e >>>= 0;
          if (e < 0 || e + 1 > this.buffer.byteLength)
            throw RangeError('Illegal offset: 0 <= ' + e + ' (+' + 1 + ') <= ' + this.buffer.byteLength);
        }
        var n = this.readVarint32(e), r = e, i;
        e += n.length, n = n.value;
        var s = e + n, o = u();
        return f.decodeUTF8toUTF16(
          function() {
            return e < s ? this.view.getUint8(e++) : null;
          }.bind(this),
          o,
          this.noAssert
        ), i = o(), t ? (this.offset = e, i) : { string: i, length: e - r };
      }, n.append = function(e, n, r) {
        if (typeof n == 'number' || typeof n != 'string')
          r = n, n = undefined;
        var i = typeof r == 'undefined';
        i && (r = this.offset);
        if (!this.noAssert) {
          if (typeof r != 'number' || r % 1 !== 0)
            throw TypeError('Illegal offset: ' + r + ' (not an integer)');
          r >>>= 0;
          if (r < 0 || r + 0 > this.buffer.byteLength)
            throw RangeError('Illegal offset: 0 <= ' + r + ' (+' + 0 + ') <= ' + this.buffer.byteLength);
        }
        e instanceof t || (e = t.wrap(e, n));
        var s = e.limit - e.offset;
        if (s <= 0)
          return this;
        r += s;
        var o = this.buffer.byteLength;
        return r > o &&
          this.resize(
            (o *= 2) > r ? o : r
          ), r -= s, new Uint8Array(this.buffer, r).set(new Uint8Array(e.buffer).subarray(e.offset, e.limit)), e.offset += s, i && (this.offset += s), this;
      }, n.appendTo = function(e, t) {
        return e.append(this, t), this;
      }, n.assert = function(e) {
        return this.noAssert = !e, this;
      }, n.capacity = function() {
        return this.buffer.byteLength;
      }, n.clear = function() {
        return this.offset = 0, this.limit = this.buffer.byteLength, this.markedOffset = -1, this;
      }, n.clone = function(e) {
        var n = new t(0, this.littleEndian, this.noAssert);
        if (e) {
          var r = new ArrayBuffer(this.buffer.byteLength);
          new Uint8Array(r).set(this.buffer), n.buffer = r, n.view = new DataView(r);
        } else
          n.buffer = this.buffer, n.view = this.view;
        return n.offset = this.offset, n.markedOffset = this.markedOffset, n.limit = this.limit, n;
      }, n.compact = function(e, t) {
        typeof e == 'undefined' && (e = this.offset), typeof t == 'undefined' && (t = this.limit);
        if (!this.noAssert) {
          if (typeof e != 'number' || e % 1 !== 0)
            throw TypeError('Illegal begin: Not an integer');
          e >>>= 0;
          if (typeof t != 'number' || t % 1 !== 0)
            throw TypeError('Illegal end: Not an integer');
          t >>>= 0;
          if (e < 0 || e > t || t > this.buffer.byteLength)
            throw RangeError('Illegal range: 0 <= ' + e + ' <= ' + t + ' <= ' + this.buffer.byteLength);
        }
        if (e === 0 && t === this.buffer.byteLength)
          return this;
        var n = t - e;
        if (n === 0)
          return this.buffer = r, this.view = null, this.markedOffset >= 0 && (this.markedOffset -= e), this.offset = 0, this.limit = 0, this;
        var i = new ArrayBuffer(n);
        return new Uint8Array(
          i
        ).set(new Uint8Array(this.buffer).subarray(e, t)), this.buffer = i, this.view = new DataView(i), this.markedOffset >= 0 && (this.markedOffset -= e), this.offset = 0, this.limit = n, this;
      }, n.copy = function(e, n) {
        typeof e == 'undefined' && (e = this.offset), typeof n == 'undefined' && (n = this.limit);
        if (!this.noAssert) {
          if (typeof e != 'number' || e % 1 !== 0)
            throw TypeError('Illegal begin: Not an integer');
          e >>>= 0;
          if (typeof n != 'number' || n % 1 !== 0)
            throw TypeError('Illegal end: Not an integer');
          n >>>= 0;
          if (e < 0 || e > n || n > this.buffer.byteLength)
            throw RangeError('Illegal range: 0 <= ' + e + ' <= ' + n + ' <= ' + this.buffer.byteLength);
        }
        if (e === n)
          return new t(0, this.littleEndian, this.noAssert);
        var r = n - e, i = new t(r, this.littleEndian, this.noAssert);
        return i.offset = 0, i.limit = r, i.markedOffset >= 0 && (i.markedOffset -= e), this.copyTo(i, 0, e, n), i;
      }, n.copyTo = function(e, n, r, i) {
        var s, o;
        if (!this.noAssert && !t.isByteBuffer(e))
          throw TypeError('Illegal target: Not a ByteBuffer');
        n = (o = typeof n == 'undefined')
          ? e.offset
          : n |
            0, r = (s = typeof r == 'undefined') ? this.offset : r | 0, i = typeof i == 'undefined' ? this.limit : i | 0;
        if (n < 0 || n > e.buffer.byteLength)
          throw RangeError('Illegal target range: 0 <= ' + n + ' <= ' + e.buffer.byteLength);
        if (r < 0 || i > this.buffer.byteLength)
          throw RangeError('Illegal source range: 0 <= ' + r + ' <= ' + this.buffer.byteLength);
        var u = i - r;
        return u === 0
          ? e
          : (e.ensureCapacity(n + u), new Uint8Array(e.buffer).set(new Uint8Array(this.buffer).subarray(r, i), n), s &&
            (this.offset += u), o && (e.offset += u), this);
      }, n.ensureCapacity = function(e) {
        var t = this.buffer.byteLength;
        return t < e ? this.resize((t *= 2) > e ? t : e) : this;
      }, n.fill = function(e, t, n) {
        var r = typeof t == 'undefined';
        r &&
          (t = this.offset), typeof e == 'string' && e.length > 0 && (e = e.charCodeAt(0)), typeof t == 'undefined' && (t = this.offset), typeof n == 'undefined' && (n = this.limit);
        if (!this.noAssert) {
          if (typeof e != 'number' || e % 1 !== 0)
            throw TypeError('Illegal value: ' + e + ' (not an integer)');
          e |= 0;
          if (typeof t != 'number' || t % 1 !== 0)
            throw TypeError('Illegal begin: Not an integer');
          t >>>= 0;
          if (typeof n != 'number' || n % 1 !== 0)
            throw TypeError('Illegal end: Not an integer');
          n >>>= 0;
          if (t < 0 || t > n || n > this.buffer.byteLength)
            throw RangeError('Illegal range: 0 <= ' + t + ' <= ' + n + ' <= ' + this.buffer.byteLength);
        }
        if (t >= n)
          return this;
        while (t < n)
          this.view.setUint8(t++, e);
        return r && (this.offset = t), this;
      }, n.flip = function() {
        return this.limit = this.offset, this.offset = 0, this;
      }, n.mark = function(e) {
        e = typeof e == 'undefined' ? this.offset : e;
        if (!this.noAssert) {
          if (typeof e != 'number' || e % 1 !== 0)
            throw TypeError('Illegal offset: ' + e + ' (not an integer)');
          e >>>= 0;
          if (e < 0 || e + 0 > this.buffer.byteLength)
            throw RangeError('Illegal offset: 0 <= ' + e + ' (+' + 0 + ') <= ' + this.buffer.byteLength);
        }
        return this.markedOffset = e, this;
      }, n.order = function(e) {
        if (!this.noAssert && typeof e != 'boolean')
          throw TypeError('Illegal littleEndian: Not a boolean');
        return this.littleEndian = !!e, this;
      }, n.LE = function(e) {
        return this.littleEndian = typeof e != 'undefined' ? !!e : !0, this;
      }, n.BE = function(e) {
        return this.littleEndian = typeof e != 'undefined' ? !e : !1, this;
      }, n.prepend = function(e, n, r) {
        if (typeof n == 'number' || typeof n != 'string')
          r = n, n = undefined;
        var i = typeof r == 'undefined';
        i && (r = this.offset);
        if (!this.noAssert) {
          if (typeof r != 'number' || r % 1 !== 0)
            throw TypeError('Illegal offset: ' + r + ' (not an integer)');
          r >>>= 0;
          if (r < 0 || r + 0 > this.buffer.byteLength)
            throw RangeError('Illegal offset: 0 <= ' + r + ' (+' + 0 + ') <= ' + this.buffer.byteLength);
        }
        e instanceof t || (e = t.wrap(e, n));
        var s = e.limit - e.offset;
        if (s <= 0)
          return this;
        var o = s - r, u;
        if (o > 0) {
          var a = new ArrayBuffer(this.buffer.byteLength + o);
          u = new Uint8Array(
            a
          ), u.set(new Uint8Array(this.buffer).subarray(r, this.buffer.byteLength), s), this.buffer = a, this.view = new DataView(a), this.offset += o, this.markedOffset >= 0 && (this.markedOffset += o), this.limit += o, r += o;
        } else
          u = new Uint8Array(this.buffer);
        return u.set(
          new Uint8Array(e.buffer).subarray(e.offset, e.limit),
          r - s
        ), e.offset = e.limit, i && (this.offset -= s), this;
      }, n.prependTo = function(e, t) {
        return e.prepend(this, t), this;
      }, n.printDebug = function(e) {
        typeof e != 'function' &&
          (e = console.log.bind(
            console
          )), e(this.toString() + '\n' + '-------------------------------------------------------------------\n' + this.toDebug(!0));
      }, n.remaining = function() {
        return this.limit - this.offset;
      }, n.reset = function() {
        return this.markedOffset >= 0
          ? (this.offset = this.markedOffset, this.markedOffset = -1)
          : this.offset = 0, this;
      }, n.resize = function(e) {
        if (!this.noAssert) {
          if (typeof e != 'number' || e % 1 !== 0)
            throw TypeError('Illegal capacity: ' + e + ' (not an integer)');
          e |= 0;
          if (e < 0)
            throw RangeError('Illegal capacity: 0 <= ' + e);
        }
        if (this.buffer.byteLength < e) {
          var t = new ArrayBuffer(e);
          new Uint8Array(t).set(new Uint8Array(this.buffer)), this.buffer = t, this.view = new DataView(t);
        }
        return this;
      }, n.reverse = function(e, t) {
        typeof e == 'undefined' && (e = this.offset), typeof t == 'undefined' && (t = this.limit);
        if (!this.noAssert) {
          if (typeof e != 'number' || e % 1 !== 0)
            throw TypeError('Illegal begin: Not an integer');
          e >>>= 0;
          if (typeof t != 'number' || t % 1 !== 0)
            throw TypeError('Illegal end: Not an integer');
          t >>>= 0;
          if (e < 0 || e > t || t > this.buffer.byteLength)
            throw RangeError('Illegal range: 0 <= ' + e + ' <= ' + t + ' <= ' + this.buffer.byteLength);
        }
        return e === t
          ? this
          : (Array.prototype.reverse.call(new Uint8Array(this.buffer).subarray(e, t)), this.view = new DataView(
            this.buffer
          ), this);
      }, n.skip = function(e) {
        if (!this.noAssert) {
          if (typeof e != 'number' || e % 1 !== 0)
            throw TypeError('Illegal length: ' + e + ' (not an integer)');
          e |= 0;
        }
        var t = this.offset + e;
        if (!this.noAssert)
          if (t < 0 || t > this.buffer.byteLength)
            throw RangeError('Illegal length: 0 <= ' + this.offset + ' + ' + e + ' <= ' + this.buffer.byteLength);
        return this.offset = t, this;
      }, n.slice = function(e, t) {
        typeof e == 'undefined' && (e = this.offset), typeof t == 'undefined' && (t = this.limit);
        if (!this.noAssert) {
          if (typeof e != 'number' || e % 1 !== 0)
            throw TypeError('Illegal begin: Not an integer');
          e >>>= 0;
          if (typeof t != 'number' || t % 1 !== 0)
            throw TypeError('Illegal end: Not an integer');
          t >>>= 0;
          if (e < 0 || e > t || t > this.buffer.byteLength)
            throw RangeError('Illegal range: 0 <= ' + e + ' <= ' + t + ' <= ' + this.buffer.byteLength);
        }
        var n = this.clone();
        return n.offset = e, n.limit = t, n;
      }, n.toBuffer = function(e) {
        var t = this.offset, n = this.limit;
        if (t > n) {
          var i = t;
          t = n, n = i;
        }
        if (!this.noAssert) {
          if (typeof t != 'number' || t % 1 !== 0)
            throw TypeError('Illegal offset: Not an integer');
          t >>>= 0;
          if (typeof n != 'number' || n % 1 !== 0)
            throw TypeError('Illegal limit: Not an integer');
          n >>>= 0;
          if (t < 0 || t > n || n > this.buffer.byteLength)
            throw RangeError('Illegal range: 0 <= ' + t + ' <= ' + n + ' <= ' + this.buffer.byteLength);
        }
        if (!e && t === 0 && n === this.buffer.byteLength)
          return this.buffer;
        if (t === n)
          return r;
        var s = new ArrayBuffer(n - t);
        return new Uint8Array(s).set(new Uint8Array(this.buffer).subarray(t, n), 0), s;
      }, n.toArrayBuffer = n.toBuffer, n.toString = function(e, t, n) {
        if (typeof e == 'undefined')
          return 'ByteBufferAB(offset=' + this.offset + ',markedOffset=' + this.markedOffset + ',limit=' + this.limit +
            ',capacity=' +
            this.capacity() +
            ')';
        typeof e == 'number' && (e = 'utf8', t = e, n = t);
        switch (e) {
          case 'utf8':
            return this.toUTF8(t, n);
          case 'base64':
            return this.toBase64(t, n);
          case 'hex':
            return this.toHex(t, n);
          case 'binary':
            return this.toBinary(t, n);
          case 'debug':
            return this.toDebug();
          case 'columns':
            return this.toColumns();
          default:
            throw Error('Unsupported encoding: ' + e);
        }
      };
      var a = function() {
        var e = {},
          t = [
            65,
            66,
            67,
            68,
            69,
            70,
            71,
            72,
            73,
            74,
            75,
            76,
            77,
            78,
            79,
            80,
            81,
            82,
            83,
            84,
            85,
            86,
            87,
            88,
            89,
            90,
            97,
            98,
            99,
            100,
            101,
            102,
            103,
            104,
            105,
            106,
            107,
            108,
            109,
            110,
            111,
            112,
            113,
            114,
            115,
            116,
            117,
            118,
            119,
            120,
            121,
            122,
            48,
            49,
            50,
            51,
            52,
            53,
            54,
            55,
            56,
            57,
            43,
            47
          ],
          n = [];
        for (var r = 0, i = t.length; r < i; ++r)
          n[t[r]] = r;
        return e.encode = function(e, n) {
          var r, i;
          while ((r = e()) !== null)
            n(
              t[r >> 2 & 63]
            ), i = (r & 3) << 4, (r = e()) !== null ? (i |= r >> 4 & 15, n(t[(i | r >> 4 & 15) & 63]), i = (r & 15) << 2, (r = e()) !== null ? (n(t[(i | r >> 6 & 3) & 63]), n(t[r & 63])) : (n(t[i & 63]), n(61))) : (n(t[i & 63]), n(61), n(61));
        }, e.decode = function(e, t) {
          function o(e) {
            throw Error('Illegal character code: ' + e);
          }
          var r, i, s;
          while ((r = e()) !== null) {
            i = n[r], typeof i == 'undefined' && o(r);
            if ((r = e()) !== null) {
              s = n[r], typeof s == 'undefined' && o(r), t(i << 2 >>> 0 | (s & 48) >> 4);
              if ((r = e()) !== null) {
                i = n[r];
                if (typeof i == 'undefined') {
                  if (r === 61)
                    break;
                  o(r);
                }
                t((s & 15) << 4 >>> 0 | (i & 60) >> 2);
                if ((r = e()) !== null) {
                  s = n[r];
                  if (typeof s == 'undefined') {
                    if (r === 61)
                      break;
                    o(r);
                  }
                  t((i & 3) << 6 >>> 0 | s);
                }
              }
            }
          }
        }, e.test = function(e) {
          return /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(e);
        }, e;
      }();
      n.toBase64 = function(e, t) {
        typeof e == 'undefined' && (e = this.offset), typeof t == 'undefined' && (t = this.limit);
        if (!this.noAssert) {
          if (typeof e != 'number' || e % 1 !== 0)
            throw TypeError('Illegal begin: Not an integer');
          e >>>= 0;
          if (typeof t != 'number' || t % 1 !== 0)
            throw TypeError('Illegal end: Not an integer');
          t >>>= 0;
          if (e < 0 || e > t || t > this.buffer.byteLength)
            throw RangeError('Illegal range: 0 <= ' + e + ' <= ' + t + ' <= ' + this.buffer.byteLength);
        }
        var n;
        return a.encode(
          function() {
            return e < t ? this.view.getUint8(e++) : null;
          }.bind(this),
          n = u()
        ), n();
      }, t.fromBase64 = function(e, n, r) {
        if (!r) {
          if (typeof e != 'string')
            throw TypeError('Illegal str: Not a string');
          if (e.length % 4 !== 0)
            throw TypeError('Illegal str: Length not a multiple of 4');
        }
        var i = new t(e.length / 4 * 3, n, r), s = 0;
        return a.decode(o(e), function(e) {
          i.view.setUint8(s++, e);
        }), i.limit = s, i;
      }, t.btoa = function(e) {
        return t.fromBinary(e).toBase64();
      }, t.atob = function(e) {
        return t.fromBase64(e).toBinary();
      }, n.toBinary = function(e, t) {
        e = typeof e == 'undefined' ? this.offset : e, t = typeof t == 'undefined' ? this.limit : t;
        if (!this.noAssert) {
          if (typeof e != 'number' || e % 1 !== 0)
            throw TypeError('Illegal begin: Not an integer');
          e >>>= 0;
          if (typeof t != 'number' || t % 1 !== 0)
            throw TypeError('Illegal end: Not an integer');
          t >>>= 0;
          if (e < 0 || e > t || t > this.buffer.byteLength)
            throw RangeError('Illegal range: 0 <= ' + e + ' <= ' + t + ' <= ' + this.buffer.byteLength);
        }
        if (e === t)
          return '';
        var n = [], r = [];
        while (e < t)
          n.push(this.view.getUint8(e++)), n.length >= 1024 && (r.push(String.fromCharCode.apply(String, n)), n = []);
        return r.join('') + String.fromCharCode.apply(String, n);
      }, t.fromBinary = function(e, n, r) {
        if (!r && typeof e != 'string')
          throw TypeError('Illegal str: Not a string');
        var i = 0, s = e.length, o, u = new t(s, n, r);
        while (i < s) {
          o = e.charCodeAt(i);
          if (!r && o > 255)
            throw RangeError('Illegal charCode at ' + i + ': 0 <= ' + o + ' <= 255');
          u.view.setUint8(i++, o);
        }
        return u.limit = s, u;
      }, n.toDebug = function(e) {
        var t = -1, n = this.buffer.byteLength, r, i = '', s = '', o = '';
        while (t < n) {
          t !== -1 &&
            (r = this.view.getUint8(t), r < 16
              ? i += '0' + r.toString(16).toUpperCase()
              : i += r.toString(16).toUpperCase(), e && (s += r > 32 && r < 127 ? String.fromCharCode(r) : '.')), ++t;
          if (e && t > 0 && t % 16 === 0 && t !== n) {
            while (i.length < 51)
              i += ' ';
            o += i + s + '\n', i = s = '';
          }
          t === this.offset && t === this.limit
            ? i += t === this.markedOffset ? '!' : '|'
            : t === this.offset
              ? i += t === this.markedOffset ? '[' : '<'
              : t === this.limit
                ? i += t === this.markedOffset ? ']' : '>'
                : i += t === this.markedOffset ? "'" : e || t !== 0 && t !== n ? ' ' : '';
        }
        if (e && i !== ' ') {
          while (i.length < 51)
            i += ' ';
          o += i + s + '\n';
        }
        return e ? o : i;
      }, t.fromDebug = function(e, n, r) {
        var i = e.length, s = new t((i + 1) / 3 | 0, n, r), o = 0, u = 0, a, f, l = !1, c = !1, h = !1, p = !1, d = !1;
        while (o < i) {
          switch (a = e.charAt(o++)) {
            case '!':
              if (!r) {
                if (c || h || p) {
                  d = !0;
                  break;
                }
                c = h = p = !0;
              }
              s.offset = s.markedOffset = s.limit = u, l = !1;
              break;
            case '|':
              if (!r) {
                if (c || p) {
                  d = !0;
                  break;
                }
                c = p = !0;
              }
              s.offset = s.limit = u, l = !1;
              break;
            case '[':
              if (!r) {
                if (c || h) {
                  d = !0;
                  break;
                }
                c = h = !0;
              }
              s.offset = s.markedOffset = u, l = !1;
              break;
            case '<':
              if (!r) {
                if (c) {
                  d = !0;
                  break;
                }
                c = !0;
              }
              s.offset = u, l = !1;
              break;
            case ']':
              if (!r) {
                if (p || h) {
                  d = !0;
                  break;
                }
                p = h = !0;
              }
              s.limit = s.markedOffset = u, l = !1;
              break;
            case '>':
              if (!r) {
                if (p) {
                  d = !0;
                  break;
                }
                p = !0;
              }
              s.limit = u, l = !1;
              break;
            case "'":
              if (!r) {
                if (h) {
                  d = !0;
                  break;
                }
                h = !0;
              }
              s.markedOffset = u, l = !1;
              break;
            case ' ':
              l = !1;
              break;
            default:
              if (!r && l) {
                d = !0;
                break;
              }
              f = parseInt(a + e.charAt(o++), 16);
              if (!r)
                if (isNaN(f) || f < 0 || f > 255)
                  throw TypeError('Illegal str: Not a debug encoded string');
              s.view.setUint8(u++, f), l = !0;
          }
          if (d)
            throw TypeError('Illegal str: Invalid symbol at ' + o);
        }
        if (!r) {
          if (!c || !p)
            throw TypeError('Illegal str: Missing offset or limit');
          if (u < s.buffer.byteLength)
            throw TypeError('Illegal str: Not a debug encoded string (is it hex?) ' + u + ' < ' + i);
        }
        return s;
      }, n.toHex = function(e, t) {
        e = typeof e == 'undefined' ? this.offset : e, t = typeof t == 'undefined' ? this.limit : t;
        if (!this.noAssert) {
          if (typeof e != 'number' || e % 1 !== 0)
            throw TypeError('Illegal begin: Not an integer');
          e >>>= 0;
          if (typeof t != 'number' || t % 1 !== 0)
            throw TypeError('Illegal end: Not an integer');
          t >>>= 0;
          if (e < 0 || e > t || t > this.buffer.byteLength)
            throw RangeError('Illegal range: 0 <= ' + e + ' <= ' + t + ' <= ' + this.buffer.byteLength);
        }
        var n = new Array(t - e), r;
        while (e < t)
          r = this.view.getUint8(e++), r < 16 ? n.push('0', r.toString(16)) : n.push(r.toString(16));
        return n.join('');
      }, t.fromHex = function(e, n, r) {
        if (!r) {
          if (typeof e != 'string')
            throw TypeError('Illegal str: Not a string');
          if (e.length % 2 !== 0)
            throw TypeError('Illegal str: Length not a multiple of 2');
        }
        var i = e.length, s = new t(i / 2 | 0, n), o;
        for (var u = 0, a = 0; u < i; u += 2) {
          o = parseInt(e.substring(u, u + 2), 16);
          if (!r)
            if (!isFinite(o) || o < 0 || o > 255)
              throw TypeError('Illegal str: Contains non-hex characters');
          s.view.setUint8(a++, o);
        }
        return s.limit = a, s;
      };
      var f = function() {
        var e = {};
        return e.MAX_CODEPOINT = 1114111, e.encodeUTF8 = function(e, t) {
          var n = null;
          typeof e == 'number' && (n = e, e = function() {
              return null;
            });
          while (n !== null || (n = e()) !== null)
            n < 128
              ? t(n & 127)
              : n < 2048
                ? (t(n >> 6 & 31 | 192), t(n & 63 | 128))
                : n < 65536
                  ? (t(n >> 12 & 15 | 224), t(n >> 6 & 63 | 128), t(n & 63 | 128))
                  : (t(n >> 18 & 7 | 240), t(n >> 12 & 63 | 128), t(n >> 6 & 63 | 128), t(n & 63 | 128)), n = null;
        }, e.decodeUTF8 = function(e, t) {
          var n,
            r,
            i,
            s,
            o = function(e) {
              e = e.slice(0, e.indexOf(null));
              var t = Error(e.toString());
              throw (t.name = 'TruncatedError', t.bytes = e, t);
            };
          while ((n = e()) !== null)
            if ((n & 128) === 0)
              t(n);
            else if ((n & 224) === 192)
              (r = e()) === null && o([ n, r ]), t((n & 31) << 6 | r & 63);
            else if ((n & 240) === 224)
              ((r = e()) === null || (i = e()) === null) && o([ n, r, i ]), t((n & 15) << 12 | (r & 63) << 6 | i & 63);
            else {
              if ((n & 248) !== 240)
                throw RangeError('Illegal starting byte: ' + n);
              ((r = e()) === null || (i = e()) === null || (s = e()) === null) &&
                o([ n, r, i, s ]), t((n & 7) << 18 | (r & 63) << 12 | (i & 63) << 6 | s & 63);
            }
        }, e.UTF16toUTF8 = function(e, t) {
          var n, r = null;
          for (;;) {
            if ((n = r !== null ? r : e()) === null)
              break;
            if (n >= 55296 && n <= 57343 && (r = e()) !== null && r >= 56320 && r <= 57343) {
              t((n - 55296) * 1024 + r - 56320 + 65536), r = null;
              continue;
            }
            t(n);
          }
          r !== null && t(r);
        }, e.UTF8toUTF16 = function(e, t) {
          var n = null;
          typeof e == 'number' && (n = e, e = function() {
              return null;
            });
          while (n !== null || (n = e()) !== null)
            n <= 65535 ? t(n) : (n -= 65536, t((n >> 10) + 55296), t(n % 1024 + 56320)), n = null;
        }, e.encodeUTF16toUTF8 = function(t, n) {
          e.UTF16toUTF8(t, function(t) {
            e.encodeUTF8(t, n);
          });
        }, e.decodeUTF8toUTF16 = function(t, n) {
          e.decodeUTF8(t, function(t) {
            e.UTF8toUTF16(t, n);
          });
        }, e.calculateCodePoint = function(e) {
          return e < 128 ? 1 : e < 2048 ? 2 : e < 65536 ? 3 : 4;
        }, e.calculateUTF8 = function(t) {
          var n, r = 0;
          while ((n = t()) !== null)
            r += e.calculateCodePoint(n);
          return r;
        }, e.calculateUTF16asUTF8 = function(t) {
          var n = 0, r = 0;
          return e.UTF16toUTF8(t, function(t) {
            ++n, r += e.calculateCodePoint(t);
          }), [ n, r ];
        }, e;
      }();
      return n.toUTF8 = function(e, t) {
        typeof e == 'undefined' && (e = this.offset), typeof t == 'undefined' && (t = this.limit);
        if (!this.noAssert) {
          if (typeof e != 'number' || e % 1 !== 0)
            throw TypeError('Illegal begin: Not an integer');
          e >>>= 0;
          if (typeof t != 'number' || t % 1 !== 0)
            throw TypeError('Illegal end: Not an integer');
          t >>>= 0;
          if (e < 0 || e > t || t > this.buffer.byteLength)
            throw RangeError('Illegal range: 0 <= ' + e + ' <= ' + t + ' <= ' + this.buffer.byteLength);
        }
        var n;
        try {
          f.decodeUTF8toUTF16(
            function() {
              return e < t ? this.view.getUint8(e++) : null;
            }.bind(this),
            n = u()
          );
        } catch (r) {
          if (e !== t)
            throw RangeError('Illegal range: Truncated data, ' + e + ' != ' + t);
        }
        return n();
      }, t.fromUTF8 = function(e, n, r) {
        if (!r && typeof e != 'string')
          throw TypeError('Illegal str: Not a string');
        var i = new t(f.calculateUTF16asUTF8(o(e), !0)[1], n, r), s = 0;
        return f.encodeUTF16toUTF8(o(e), function(e) {
          i.view.setUint8(s++, e);
        }), i.limit = s, i;
      }, t;
    }
    typeof require == 'function' && typeof module == 'object' && module && typeof exports == 'object' && exports
      ? module.exports = function() {
        var e;
        try {
          e = long;
        } catch (n) {}
        return t(e);
      }()
      : g = function(e) {
        return t(e);
      }(m);
  }(this), function(e) {
    'use strict';

    function t(e) {
      var t = {};
      return t.VERSION = '3.8.2', t.WIRE_TYPES = {}, t.WIRE_TYPES.VARINT = 0, t.WIRE_TYPES.BITS64 = 1, t.WIRE_TYPES.LDELIM = 2, t.WIRE_TYPES.STARTGROUP = 3, t.WIRE_TYPES.ENDGROUP = 4, t.WIRE_TYPES.BITS32 = 5, t.PACKABLE_WIRE_TYPES = [
        t.WIRE_TYPES.VARINT,
        t.WIRE_TYPES.BITS64,
        t.WIRE_TYPES.BITS32
      ], t.TYPES = {
        int32: { name: 'int32', wireType: t.WIRE_TYPES.VARINT },
        uint32: { name: 'uint32', wireType: t.WIRE_TYPES.VARINT },
        sint32: { name: 'sint32', wireType: t.WIRE_TYPES.VARINT },
        int64: { name: 'int64', wireType: t.WIRE_TYPES.VARINT },
        uint64: { name: 'uint64', wireType: t.WIRE_TYPES.VARINT },
        sint64: { name: 'sint64', wireType: t.WIRE_TYPES.VARINT },
        bool: { name: 'bool', wireType: t.WIRE_TYPES.VARINT },
        double: { name: 'double', wireType: t.WIRE_TYPES.BITS64 },
        string: { name: 'string', wireType: t.WIRE_TYPES.LDELIM },
        bytes: { name: 'bytes', wireType: t.WIRE_TYPES.LDELIM },
        fixed32: { name: 'fixed32', wireType: t.WIRE_TYPES.BITS32 },
        sfixed32: { name: 'sfixed32', wireType: t.WIRE_TYPES.BITS32 },
        fixed64: { name: 'fixed64', wireType: t.WIRE_TYPES.BITS64 },
        sfixed64: { name: 'sfixed64', wireType: t.WIRE_TYPES.BITS64 },
        float: { name: 'float', wireType: t.WIRE_TYPES.BITS32 },
        enum: { name: 'enum', wireType: t.WIRE_TYPES.VARINT },
        message: { name: 'message', wireType: t.WIRE_TYPES.LDELIM },
        group: { name: 'group', wireType: t.WIRE_TYPES.STARTGROUP }
      }, t.ID_MIN = 1, t.ID_MAX = 536870911, t.ByteBuffer = e, t.Long = e.Long ||
        null, t.convertFieldsToCamelCase = !1, t.populateAccessors = !0, t.Util = function() {
        Object.create || (Object.create = function(e) {
            function t() {}
            if (arguments.length > 1)
              throw Error('Object.create polyfill only accepts the first parameter.');
            return t.prototype = e, new t();
          });
        var e = {};
        e.IS_NODE = !1;
        try {
          e.IS_NODE = typeof require == 'function' && typeof fs.readFileSync == 'function' &&
            typeof path.resolve == 'function';
        } catch (t) {}
        return e.XHR = function() {
          var e = [
            function() {
              return new XMLHttpRequest();
            },
            function() {
              return new ActiveXObject('Msxml2.XMLHTTP');
            },
            function() {
              return new ActiveXObject('Msxml3.XMLHTTP');
            },
            function() {
              return new ActiveXObject('Microsoft.XMLHTTP');
            }
          ],
            t = null;
          for (var n = 0; n < e.length; n++) {
            try {
              t = e[n]();
            } catch (r) {
              continue;
            }
            break;
          }
          if (!t)
            throw Error('XMLHttpRequest is not supported');
          return t;
        }, e.fetch = function(t, n) {
          n && typeof n != 'function' && (n = null);
          if (e.IS_NODE)
            if (n)
              fs.readFile(t, function(e, t) {
                e ? n(null) : n('' + t);
              });
            else
              try {
                return fs.readFileSync(t);
              } catch (r) {
                return null;
              }
          else {
            var i = e.XHR();
            i.open(
              'GET',
              t,
              n ? !0 : !1
            ), i.setRequestHeader('Accept', 'text/plain'), typeof i.overrideMimeType == 'function' && i.overrideMimeType('text/plain');
            if (!n)
              return i.send(
                null
              ), i.status == 200 || i.status == 0 && typeof i.responseText == 'string' ? i.responseText : null;
            i.onreadystatechange = function() {
              if (i.readyState != 4)
                return;
              i.status == 200 || i.status == 0 && typeof i.responseText == 'string' ? n(i.responseText) : n(null);
            };
            if (i.readyState == 4)
              return;
            i.send(null);
          }
        }, e.isArray = Array.isArray || function(e) {
            return Object.prototype.toString.call(e) === '[object Array]';
          }, e;
      }(), t.Lang = {
        OPEN: '{',
        CLOSE: '}',
        OPTOPEN: '[',
        OPTCLOSE: ']',
        OPTEND: ',',
        EQUAL: '=',
        END: ';',
        STRINGOPEN: '"',
        STRINGCLOSE: '"',
        STRINGOPEN_SQ: "'",
        STRINGCLOSE_SQ: "'",
        COPTOPEN: '(',
        COPTCLOSE: ')',
        DELIM: /[\s\{\}=;\[\],'"\(\)]/g,
        RULE: /^(?:required|optional|repeated)$/,
        TYPE: /^(?:double|float|int32|uint32|sint32|int64|uint64|sint64|fixed32|sfixed32|fixed64|sfixed64|bool|string|bytes)$/,
        NAME: /^[a-zA-Z_][a-zA-Z_0-9]*$/,
        TYPEDEF: /^[a-zA-Z][a-zA-Z_0-9]*$/,
        TYPEREF: /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)+$/,
        FQTYPEREF: /^(?:\.[a-zA-Z][a-zA-Z_0-9]*)+$/,
        NUMBER: /^-?(?:[1-9][0-9]*|0|0x[0-9a-fA-F]+|0[0-7]+|([0-9]*\.[0-9]+([Ee][+-]?[0-9]+)?))$/,
        NUMBER_DEC: /^(?:[1-9][0-9]*|0)$/,
        NUMBER_HEX: /^0x[0-9a-fA-F]+$/,
        NUMBER_OCT: /^0[0-7]+$/,
        NUMBER_FLT: /^[0-9]*\.[0-9]+([Ee][+-]?[0-9]+)?$/,
        ID: /^(?:[1-9][0-9]*|0|0x[0-9a-fA-F]+|0[0-7]+)$/,
        NEGID: /^\-?(?:[1-9][0-9]*|0|0x[0-9a-fA-F]+|0[0-7]+)$/,
        WHITESPACE: /\s/,
        STRING: /(?:"([^"\\]*(?:\\.[^"\\]*)*)")|(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g,
        BOOL: /^(?:true|false)$/i
      }, t.DotProto = function(e, t) {
        var n = {},
          r = function(e) {
            this.source = '' +
              e, this.index = 0, this.line = 1, this.stack = [], this.readingString = !1, this.stringEndsWith = t.STRINGCLOSE;
          },
          i = r.prototype;
        i._readString = function() {
          t.STRING.lastIndex = this.index - 1;
          var e;
          if ((e = t.STRING.exec(this.source)) !== null) {
            var n = typeof e[1] != 'undefined' ? e[1] : e[2];
            return this.index = t.STRING.lastIndex, this.stack.push(this.stringEndsWith), n;
          }
          throw Error('Unterminated string at line ' + this.line + ', index ' + this.index);
        }, i.next = function() {
          if (this.stack.length > 0)
            return this.stack.shift();
          if (this.index >= this.source.length)
            return null;
          if (this.readingString)
            return this.readingString = !1, this._readString();
          var e, n;
          do {
            e = !1;
            while (t.WHITESPACE.test(n = this.source.charAt(this.index))) {
              this.index++, n === '\n' && this.line++;
              if (this.index === this.source.length)
                return null;
            }
            if (this.source.charAt(this.index) === '/')
              if (this.source.charAt(++this.index) === '/') {
                while (this.source.charAt(this.index) !== '\n') {
                  this.index++;
                  if (this.index == this.source.length)
                    return null;
                }
                this.index++, this.line++, e = !0;
              } else {
                if (this.source.charAt(this.index) !== '*')
                  throw Error('Unterminated comment at line ' + this.line + ': /' + this.source.charAt(this.index));
                n = '';
                while (n + (n = this.source.charAt(this.index)) !== '*/') {
                  this.index++, n === '\n' && this.line++;
                  if (this.index === this.source.length)
                    return null;
                }
                this.index++, e = !0;
              }
          } while (e);
          if (this.index === this.source.length)
            return null;
          var r = this.index;
          t.DELIM.lastIndex = 0;
          var i = t.DELIM.test(this.source.charAt(r));
          if (!i) {
            ++r;
            while (r < this.source.length && !t.DELIM.test(this.source.charAt(r)))
              r++;
          } else
            ++r;
          var s = this.source.substring(this.index, this.index = r);
          return s === t.STRINGOPEN
            ? (this.readingString = !0, this.stringEndsWith = t.STRINGCLOSE)
            : s === t.STRINGOPEN_SQ && (this.readingString = !0, this.stringEndsWith = t.STRINGCLOSE_SQ), s;
        }, i.peek = function() {
          if (this.stack.length === 0) {
            var e = this.next();
            if (e === null)
              return null;
            this.stack.push(e);
          }
          return this.stack[0];
        }, i.toString = function() {
          return 'Tokenizer(' + this.index + '/' + this.source.length + ' at line ' + this.line + ')';
        }, n.Tokenizer = r;
        var s = function(e) {
          this.tn = new r(e);
        },
          o = s.prototype;
        return o.parse = function() {
          var e = { name: '[ROOT]', package: null, messages: [], enums: [], imports: [], options: {}, services: [] },
            t,
            n = !0;
          while (t = this.tn.next())
            switch (t) {
              case 'package':
                if (!n || e['package'] !== null)
                  throw Error('Unexpected package at line ' + this.tn.line);
                e['package'] = this._parsePackage(t);
                break;
              case 'import':
                if (!n)
                  throw Error('Unexpected import at line ' + this.tn.line);
                e.imports.push(this._parseImport(t));
                break;
              case 'message':
                this._parseMessage(e, null, t), n = !1;
                break;
              case 'enum':
                this._parseEnum(e, t), n = !1;
                break;
              case 'option':
                if (!n)
                  throw Error('Unexpected option at line ' + this.tn.line);
                this._parseOption(e, t);
                break;
              case 'service':
                this._parseService(e, t);
                break;
              case 'extend':
                this._parseExtend(e, t);
                break;
              case 'syntax':
                this._parseIgnoredStatement(e, t);
                break;
              default:
                throw Error('Unexpected token at line ' + this.tn.line + ': ' + t);
            }
          return delete e.name, e;
        }, o._parseNumber = function(e) {
          var n = 1;
          e.charAt(0) == '-' && (n = -1, e = e.substring(1));
          if (t.NUMBER_DEC.test(e))
            return n * parseInt(e, 10);
          if (t.NUMBER_HEX.test(e))
            return n * parseInt(e.substring(2), 16);
          if (t.NUMBER_OCT.test(e))
            return n * parseInt(e.substring(1), 8);
          if (t.NUMBER_FLT.test(e))
            return n * parseFloat(e);
          throw Error('Illegal number at line ' + this.tn.line + ': ' + (n < 0 ? '-' : '') + e);
        }, o._parseString = function() {
          var e = '', n;
          do {
            n = this.tn.next(), e += this.tn.next(), n = this.tn.next();
            if (n !== this.tn.stringEndsWith)
              throw Error('Illegal end of string at line ' + this.tn.line + ': ' + n);
            n = this.tn.peek();
          } while (n === t.STRINGOPEN || n === t.STRINGOPEN_SQ);
          return e;
        }, o._parseId = function(e, n) {
          var r = -1, i = 1;
          e.charAt(0) == '-' && (i = -1, e = e.substring(1));
          if (t.NUMBER_DEC.test(e))
            r = parseInt(e);
          else if (t.NUMBER_HEX.test(e))
            r = parseInt(e.substring(2), 16);
          else {
            if (!t.NUMBER_OCT.test(e))
              throw Error('Illegal id at line ' + this.tn.line + ': ' + (i < 0 ? '-' : '') + e);
            r = parseInt(e.substring(1), 8);
          }
          r = i * r | 0;
          if (!n && r < 0)
            throw Error('Illegal id at line ' + this.tn.line + ': ' + (i < 0 ? '-' : '') + e);
          return r;
        }, o._parsePackage = function(e) {
          e = this.tn.next();
          if (!t.TYPEREF.test(e))
            throw Error('Illegal package name at line ' + this.tn.line + ': ' + e);
          var n = e;
          e = this.tn.next();
          if (e != t.END)
            throw Error('Illegal end of package at line ' + this.tn.line + ': ' + e);
          return n;
        }, o._parseImport = function(e) {
          e = this.tn.peek(), e === 'public' && (this.tn.next(), e = this.tn.peek());
          if (e !== t.STRINGOPEN && e !== t.STRINGOPEN_SQ)
            throw Error('Illegal start of import at line ' + this.tn.line + ': ' + e);
          var n = this._parseString();
          e = this.tn.next();
          if (e !== t.END)
            throw Error('Illegal end of import at line ' + this.tn.line + ': ' + e);
          return n;
        }, o._parseOption = function(e, n) {
          n = this.tn.next();
          var r = !1;
          n == t.COPTOPEN && (r = !0, n = this.tn.next());
          if (!t.TYPEREF.test(n) && !/google\.protobuf\./.test(n))
            throw Error('Illegal option name in message ' + e.name + ' at line ' + this.tn.line + ': ' + n);
          var i = n;
          n = this.tn.next();
          if (r) {
            if (n !== t.COPTCLOSE)
              throw Error('Illegal end in message ' + e.name + ', option ' + i + ' at line ' + this.tn.line + ': ' + n);
            i = '(' + i + ')', n = this.tn.next(), t.FQTYPEREF.test(n) && (i += n, n = this.tn.next());
          }
          if (n !== t.EQUAL)
            throw Error(
              'Illegal operator in message ' + e.name + ', option ' + i + ' at line ' + this.tn.line + ': ' + n
            );
          var s;
          n = this.tn.peek();
          if (n === t.STRINGOPEN || n === t.STRINGOPEN_SQ)
            s = this._parseString();
          else {
            this.tn.next();
            if (t.NUMBER.test(n))
              s = this._parseNumber(n, !0);
            else if (t.BOOL.test(n))
              s = n === 'true';
            else {
              if (!t.TYPEREF.test(n))
                throw Error(
                  'Illegal option value in message ' + e.name + ', option ' + i + ' at line ' + this.tn.line + ': ' + n
                );
              s = n;
            }
          }
          n = this.tn.next();
          if (n !== t.END)
            throw Error(
              'Illegal end of option in message ' + e.name + ', option ' + i + ' at line ' + this.tn.line + ': ' + n
            );
          e.options[i] = s;
        }, o._parseIgnoredStatement = function(e, n) {
          var r;
          do {
            r = this.tn.next();
            if (r === null)
              throw Error('Unexpected EOF in ' + e.name + ', ' + n + ' at line ' + this.tn.line);
            if (r === t.END)
              break;
          } while (!0);
        }, o._parseService = function(e, n) {
          n = this.tn.next();
          if (!t.NAME.test(n))
            throw Error('Illegal service name at line ' + this.tn.line + ': ' + n);
          var r = n, i = { name: r, rpc: {}, options: {} };
          n = this.tn.next();
          if (n !== t.OPEN)
            throw Error('Illegal start of service ' + r + ' at line ' + this.tn.line + ': ' + n);
          do {
            n = this.tn.next();
            if (n === 'option')
              this._parseOption(i, n);
            else if (n === 'rpc')
              this._parseServiceRPC(i, n);
            else if (n !== t.CLOSE)
              throw Error('Illegal type of service ' + r + ' at line ' + this.tn.line + ': ' + n);
          } while (n !== t.CLOSE);
          e.services.push(i);
        }, o._parseServiceRPC = function(e, n) {
          var r = n;
          n = this.tn.next();
          if (!t.NAME.test(n))
            throw Error('Illegal method name in service ' + e.name + ' at line ' + this.tn.line + ': ' + n);
          var i = n, s = { request: null, response: null, options: {} };
          n = this.tn.next();
          if (n !== t.COPTOPEN)
            throw Error(
              'Illegal start of request type in service ' + e.name + '#' + i + ' at line ' + this.tn.line + ': ' + n
            );
          n = this.tn.next();
          if (!t.TYPEREF.test(n))
            throw Error('Illegal request type in service ' + e.name + '#' + i + ' at line ' + this.tn.line + ': ' + n);
          s.request = n, n = this.tn.next();
          if (n != t.COPTCLOSE)
            throw Error(
              'Illegal end of request type in service ' + e.name + '#' + i + ' at line ' + this.tn.line + ': ' + n
            );
          n = this.tn.next();
          if (n.toLowerCase() !== 'returns')
            throw Error('Illegal delimiter in service ' + e.name + '#' + i + ' at line ' + this.tn.line + ': ' + n);
          n = this.tn.next();
          if (n != t.COPTOPEN)
            throw Error(
              'Illegal start of response type in service ' + e.name + '#' + i + ' at line ' + this.tn.line + ': ' + n
            );
          n = this.tn.next(), s.response = n, n = this.tn.next();
          if (n !== t.COPTCLOSE)
            throw Error(
              'Illegal end of response type in service ' + e.name + '#' + i + ' at line ' + this.tn.line + ': ' + n
            );
          n = this.tn.next();
          if (n === t.OPEN) {
            do {
              n = this.tn.next();
              if (n === 'option')
                this._parseOption(s, n);
              else if (n !== t.CLOSE)
                throw Error(
                  'Illegal start of option inservice ' + e.name + '#' + i + ' at line ' + this.tn.line + ': ' + n
                );
            } while (n !== t.CLOSE);
            this.tn.peek() === t.END && this.tn.next();
          } else if (n !== t.END)
            throw Error('Illegal delimiter in service ' + e.name + '#' + i + ' at line ' + this.tn.line + ': ' + n);
          typeof e[r] == 'undefined' && (e[r] = {}), e[r][i] = s;
        }, o._parseMessage = function(e, n, r) {
          var i = {}, s = r === 'group';
          r = this.tn.next();
          if (!t.NAME.test(r))
            throw Error(
              'Illegal ' + (s ? 'group' : 'message') + ' name' + (e ? ' in message ' + e.name : '') + ' at line ' +
                this.tn.line +
                ': ' +
                r
            );
          i.name = r;
          if (s) {
            r = this.tn.next();
            if (r !== t.EQUAL)
              throw Error('Illegal id assignment after group ' + i.name + ' at line ' + this.tn.line + ': ' + r);
            r = this.tn.next();
            try {
              n.id = this._parseId(r);
            } catch (o) {
              throw Error(
                'Illegal field id value for group ' + i.name + '#' + n.name + ' at line ' + this.tn.line + ': ' + r
              );
            }
            i.isGroup = !0;
          }
          i.fields = [], i.enums = [], i.messages = [], i.options = {}, i.oneofs = {}, r = this.tn.next(), r === t.OPTOPEN && n && (this._parseFieldOptions(i, n, r), r = this.tn.next());
          if (r !== t.OPEN)
            throw Error(
              'Illegal start of ' + (s ? 'group' : 'message') + ' ' + i.name + ' at line ' + this.tn.line + ': ' + r
            );
          do {
            r = this.tn.next();
            if (r === t.CLOSE) {
              r = this.tn.peek(), r === t.END && this.tn.next();
              break;
            }
            if (t.RULE.test(r))
              this._parseMessageField(i, r);
            else if (r === 'oneof')
              this._parseMessageOneOf(i, r);
            else if (r === 'enum')
              this._parseEnum(i, r);
            else if (r === 'message')
              this._parseMessage(i, null, r);
            else if (r === 'option')
              this._parseOption(i, r);
            else if (r === 'extensions')
              i.extensions = this._parseExtensions(i, r);
            else {
              if (r !== 'extend')
                throw Error('Illegal token in message ' + i.name + ' at line ' + this.tn.line + ': ' + r);
              this._parseExtend(i, r);
            }
          } while (!0);
          return e.messages.push(i), i;
        }, o._parseMessageField = function(e, n) {
          var r = {}, i = null;
          r.rule = n, r.options = {}, n = this.tn.next();
          if (n === 'group') {
            i = this._parseMessage(e, r, n);
            if (!/^[A-Z]/.test(i.name))
              throw Error('Group names must start with a capital letter');
            r.type = i.name, r.name = i.name.toLowerCase(), n = this.tn.peek(), n === t.END && this.tn.next();
          } else {
            if (!t.TYPE.test(n) && !t.TYPEREF.test(n))
              throw Error('Illegal field type in message ' + e.name + ' at line ' + this.tn.line + ': ' + n);
            r.type = n, n = this.tn.next();
            if (!t.NAME.test(n))
              throw Error('Illegal field name in message ' + e.name + ' at line ' + this.tn.line + ': ' + n);
            r.name = n, n = this.tn.next();
            if (n !== t.EQUAL)
              throw Error('Illegal token in field ' + e.name + '#' + r.name + ' at line ' + this.tn.line + ': ' + n);
            n = this.tn.next();
            try {
              r.id = this._parseId(n);
            } catch (s) {
              throw Error(
                'Illegal field id in message ' + e.name + '#' + r.name + ' at line ' + this.tn.line + ': ' + n
              );
            }
            n = this.tn.next(), n === t.OPTOPEN && (this._parseFieldOptions(e, r, n), n = this.tn.next());
            if (n !== t.END)
              throw Error(
                'Illegal delimiter in message ' + e.name + '#' + r.name + ' at line ' + this.tn.line + ': ' + n
              );
          }
          return e.fields.push(r), r;
        }, o._parseMessageOneOf = function(e, n) {
          n = this.tn.next();
          if (!t.NAME.test(n))
            throw Error('Illegal oneof name in message ' + e.name + ' at line ' + this.tn.line + ': ' + n);
          var r = n, i, s = [];
          n = this.tn.next();
          if (n !== t.OPEN)
            throw Error('Illegal start of oneof ' + r + ' at line ' + this.tn.line + ': ' + n);
          while (this.tn.peek() !== t.CLOSE)
            i = this._parseMessageField(e, 'optional'), i.oneof = r, s.push(i.id);
          this.tn.next(), e.oneofs[r] = s;
        }, o._parseFieldOptions = function(e, n, r) {
          var i = !0;
          do {
            r = this.tn.next();
            if (r === t.OPTCLOSE)
              break;
            if (r === t.OPTEND) {
              if (i)
                throw Error(
                  'Illegal start of options in message ' + e.name + '#' + n.name + ' at line ' + this.tn.line + ': ' + r
                );
              r = this.tn.next();
            }
            this._parseFieldOption(e, n, r), i = !1;
          } while (!0);
        }, o._parseFieldOption = function(e, n, r) {
          var i = !1;
          r === t.COPTOPEN && (r = this.tn.next(), i = !0);
          if (!t.TYPEREF.test(r))
            throw Error('Illegal field option in ' + e.name + '#' + n.name + ' at line ' + this.tn.line + ': ' + r);
          var s = r;
          r = this.tn.next();
          if (i) {
            if (r !== t.COPTCLOSE)
              throw Error('Illegal delimiter in ' + e.name + '#' + n.name + ' at line ' + this.tn.line + ': ' + r);
            s = '(' + s + ')', r = this.tn.next(), t.FQTYPEREF.test(r) && (s += r, r = this.tn.next());
          }
          if (r !== t.EQUAL)
            throw Error('Illegal token in ' + e.name + '#' + n.name + ' at line ' + this.tn.line + ': ' + r);
          var o;
          r = this.tn.peek();
          if (r === t.STRINGOPEN || r === t.STRINGOPEN_SQ)
            o = this._parseString();
          else if (t.NUMBER.test(r, !0))
            o = this._parseNumber(this.tn.next(), !0);
          else if (t.BOOL.test(r))
            o = this.tn.next().toLowerCase() === 'true';
          else {
            if (!t.TYPEREF.test(r))
              throw Error(
                'Illegal value in message ' + e.name + '#' + n.name + ', option ' + s + ' at line ' + this.tn.line +
                  ': ' +
                  r
              );
            o = this.tn.next();
          }
          n.options[s] = o;
        }, o._parseEnum = function(e, n) {
          var r = {};
          n = this.tn.next();
          if (!t.NAME.test(n))
            throw Error('Illegal enum name in message ' + e.name + ' at line ' + this.tn.line + ': ' + n);
          r.name = n, n = this.tn.next();
          if (n !== t.OPEN)
            throw Error('Illegal start of enum ' + r.name + ' at line ' + this.tn.line + ': ' + n);
          r.values = [], r.options = {};
          do {
            n = this.tn.next();
            if (n === t.CLOSE) {
              n = this.tn.peek(), n === t.END && this.tn.next();
              break;
            }
            if (n == 'option')
              this._parseOption(r, n);
            else {
              if (!t.NAME.test(n))
                throw Error('Illegal name in enum ' + r.name + ' at line ' + this.tn.line + ': ' + n);
              this._parseEnumValue(r, n);
            }
          } while (!0);
          e.enums.push(r);
        }, o._parseEnumValue = function(e, n) {
          var r = {};
          r.name = n, n = this.tn.next();
          if (n !== t.EQUAL)
            throw Error('Illegal token in enum ' + e.name + ' at line ' + this.tn.line + ': ' + n);
          n = this.tn.next();
          try {
            r.id = this._parseId(n, !0);
          } catch (i) {
            throw Error('Illegal id in enum ' + e.name + ' at line ' + this.tn.line + ': ' + n);
          }
          e.values.push(r), n = this.tn.next();
          if (n === t.OPTOPEN) {
            var s = { options: {} };
            this._parseFieldOptions(e, s, n), n = this.tn.next();
          }
          if (n !== t.END)
            throw Error('Illegal delimiter in enum ' + e.name + ' at line ' + this.tn.line + ': ' + n);
        }, o._parseExtensions = function(n, r) {
          var i = [];
          r = this.tn.next(), r === 'min' ? i.push(e.ID_MIN) : r === 'max' ? i.push(e.ID_MAX) : i.push(this._parseNumber(r)), r = this.tn.next();
          if (r !== 'to')
            throw Error('Illegal extensions delimiter in message ' + n.name + ' at line ' + this.tn.line + ': ' + r);
          r = this.tn.next(), r === 'min' ? i.push(e.ID_MIN) : r === 'max' ? i.push(e.ID_MAX) : i.push(this._parseNumber(r)), r = this.tn.next();
          if (r !== t.END)
            throw Error('Illegal extensions delimiter in message ' + n.name + ' at line ' + this.tn.line + ': ' + r);
          return i;
        }, o._parseExtend = function(e, n) {
          n = this.tn.next();
          if (!t.TYPEREF.test(n))
            throw Error('Illegal message name at line ' + this.tn.line + ': ' + n);
          var r = {};
          r.ref = n, r.fields = [], n = this.tn.next();
          if (n !== t.OPEN)
            throw Error('Illegal start of extend ' + r.name + ' at line ' + this.tn.line + ': ' + n);
          do {
            n = this.tn.next();
            if (n === t.CLOSE) {
              n = this.tn.peek(), n == t.END && this.tn.next();
              break;
            }
            if (!t.RULE.test(n))
              throw Error('Illegal token in extend ' + r.name + ' at line ' + this.tn.line + ': ' + n);
            this._parseMessageField(r, n);
          } while (!0);
          return e.messages.push(r), r;
        }, o.toString = function() {
          return 'Parser';
        }, n.Parser = s, n;
      }(t, t.Lang), t.Reflect = function(t) {
        function f(e, n) {
          var r = n.readVarint32(), i = r & 7, s = r >> 3;
          switch (i) {
            case t.WIRE_TYPES.VARINT:
              do
                r = n.readUint8(); while ((r & 128) === 128);
              break;
            case t.WIRE_TYPES.BITS64:
              n.offset += 8;
              break;
            case t.WIRE_TYPES.LDELIM:
              r = n.readVarint32(), n.offset += r;
              break;
            case t.WIRE_TYPES.STARTGROUP:
              f(s, n);
              break;
            case t.WIRE_TYPES.ENDGROUP:
              if (s === e)
                return !1;
              throw Error('Illegal GROUPEND after unknown group: ' + s + ' (' + e + ' expected)');
            case t.WIRE_TYPES.BITS32:
              n.offset += 4;
              break;
            default:
              throw Error('Illegal wire type in unknown group ' + e + ': ' + i);
          }
          return !0;
        }
        function h(e, n) {
          if (
            e && typeof e.low == 'number' && typeof e.high == 'number' && typeof e.unsigned == 'boolean' &&
              e.low === e.low &&
              e.high === e.high
          )
            return new t.Long(e.low, e.high, typeof n == 'undefined' ? e.unsigned : n);
          if (typeof e == 'string')
            return t.Long.fromString(e, n || !1, 10);
          if (typeof e == 'number')
            return t.Long.fromNumber(e, n || !1);
          throw Error('not convertible to Long');
        }
        var n = {},
          r = function(e, t, n) {
            this.builder = e, this.parent = t, this.name = n, this.className;
          },
          i = r.prototype;
        i.fqn = function() {
          var e = this.name, t = this;
          do {
            t = t.parent;
            if (t == null)
              break;
            e = t.name + '.' + e;
          } while (!0);
          return e;
        }, i.toString = function(e) {
          return (e ? this.className + ' ' : '') + this.fqn();
        }, i.build = function() {
          throw Error(this.toString(!0) + ' cannot be built directly');
        }, n.T = r;
        var s = function(e, t, n, i) {
          r.call(this, e, t, n), this.className = 'Namespace', this.children = [], this.options = i || {};
        },
          o = s.prototype = Object.create(r.prototype);
        o.getChildren = function(e) {
          e = e || null;
          if (e == null)
            return this.children.slice();
          var t = [];
          for (var n = 0, r = this.children.length; n < r; ++n)
            this.children[n] instanceof e && t.push(this.children[n]);
          return t;
        }, o.addChild = function(e) {
          var t;
          if (t = this.getChild(e.name))
            if (t instanceof u.Field && t.name !== t.originalName && this.getChild(t.originalName) === null)
              t.name = t.originalName;
            else {
              if (!(e instanceof u.Field && e.name !== e.originalName && this.getChild(e.originalName) === null))
                throw Error('Duplicate name in namespace ' + this.toString(!0) + ': ' + e.name);
              e.name = e.originalName;
            }
          this.children.push(e);
        }, o.getChild = function(e) {
          var t = typeof e == 'number' ? 'id' : 'name';
          for (var n = 0, r = this.children.length; n < r; ++n)
            if (this.children[n][t] === e)
              return this.children[n];
          return null;
        }, o.resolve = function(e, t) {
          var r = e.split('.'), i = this, s = 0;
          if (r[s] === '') {
            while (i.parent !== null)
              i = i.parent;
            s++;
          }
          var o;
          do {
            do {
              o = i.getChild(r[s]);
              if (!o || !(o instanceof n.T) || t && o instanceof n.Message.Field) {
                i = null;
                break;
              }
              i = o, s++;
            } while (s < r.length);
            if (i != null)
              break;
            if (this.parent !== null)
              return this.parent.resolve(e, t);
          } while (i != null);
          return i;
        }, o.build = function() {
          var e = {}, t = this.children;
          for (var n = 0, r = t.length, i; n < r; ++n)
            i = t[n], i instanceof s && (e[i.name] = i.build());
          return Object.defineProperty && Object.defineProperty(e, '$options', { value: this.buildOpt() }), e;
        }, o.buildOpt = function() {
          var e = {}, t = Object.keys(this.options);
          for (var n = 0, r = t.length; n < r; ++n) {
            var i = t[n], s = this.options[t[n]];
            e[i] = s;
          }
          return e;
        }, o.getOption = function(e) {
          return typeof e == 'undefined'
            ? this.options
            : typeof this.options[e] != 'undefined' ? this.options[e] : null;
        }, n.Namespace = s;
        var u = function(e, n, r, i, o) {
          s.call(this, e, n, r, i), this.className = 'Message', this.extensions = [
            t.ID_MIN,
            t.ID_MAX
          ], this.clazz = null, this.isGroup = !!o, this._fields = null, this._fieldsById = null, this._fieldsByName = null;
        },
          a = u.prototype = Object.create(s.prototype);
        a.build = function(n) {
          if (this.clazz && !n)
            return this.clazz;
          var r = function(t, n) {
            function f(t, n) {
              var r = {};
              for (var i in t)
                t.hasOwnProperty(i) &&
                  (t[i] === null || typeof t[i] != 'object'
                    ? r[i] = t[i]
                    : t[i] instanceof e ? n && (r[i] = t[i].toBase64()) : r[i] = f(t[i], n));
              return r;
            }
            var r = n.getChildren(t.Reflect.Message.Field),
              i = n.getChildren(t.Reflect.Message.OneOf),
              s = function(n, s) {
                t.Builder.Message.call(this);
                for (var o = 0, u = i.length; o < u; ++o)
                  this[i[o].name] = null;
                for (o = 0, u = r.length; o < u; ++o) {
                  var a = r[o];
                  this[a.name] = a.repeated ? [] : null, a.required && a.defaultValue !== null &&
                    (this[a.name] = a.defaultValue);
                }
                if (arguments.length > 0)
                  if (
                    arguments.length !== 1 || typeof n != 'object' || typeof n.encode == 'function' ||
                      !!t.Util.isArray(n) ||
                      n instanceof e ||
                      n instanceof ArrayBuffer ||
                      !!(t.Long && n instanceof t.Long)
                  )
                    for (o = 0, u = arguments.length; o < u; ++o)
                      this.$set(r[o].name, arguments[o]);
                  else {
                    var f = Object.keys(n);
                    for (o = 0, u = f.length; o < u; ++o)
                      this.$set(f[o], n[f[o]]);
                  }
              },
              o = s.prototype = Object.create(t.Builder.Message.prototype);
            o.add = function(e, r, i) {
              var s = n._fieldsByName[e];
              if (!i) {
                if (!s)
                  throw Error(this + '#' + e + ' is undefined');
                if (!(s instanceof t.Reflect.Message.Field))
                  throw Error(this + '#' + e + ' is not a field: ' + s.toString(!0));
                if (!s.repeated)
                  throw Error(this + '#' + e + ' is not a repeated field');
              }
              this[s.name] === null && (this[s.name] = []), this[s.name].push(i ? r : s.verifyValue(r, !0));
            }, o.$add = o.add, o.set = function(e, r, i) {
              if (e && typeof e == 'object') {
                for (var s in e)
                  e.hasOwnProperty(s) && this.$set(s, e[s], i);
                return this;
              }
              var o = n._fieldsByName[e];
              if (!i) {
                if (!o)
                  throw Error(this + '#' + e + ' is not a field: undefined');
                if (!(o instanceof t.Reflect.Message.Field))
                  throw Error(this + '#' + e + ' is not a field: ' + o.toString(!0));
                this[o.name] = r = o.verifyValue(r);
              } else
                this[o.name] = r;
              return o.oneof &&
                (r !== null
                  ? (this[o.oneof.name] !== null && (this[this[o.oneof.name]] = null), this[o.oneof.name] = o.name)
                  : o.oneof.name === e && (this[o.oneof.name] = null)), this;
            }, o.$set = o.set, o.get = function(e, r) {
              if (r)
                return this[e];
              var i = n._fieldsByName[e];
              if (!!i && i instanceof t.Reflect.Message.Field) {
                if (i instanceof t.Reflect.Message.Field)
                  return this[i.name];
                throw Error(this + '#' + e + ' is not a field: ' + i.toString(!0));
              }
              throw Error(this + '#' + e + ' is not a field: undefined');
            }, o.$get = o.get;
            for (var u = 0; u < r.length; u++) {
              var a = r[u];
              if (a instanceof t.Reflect.Message.ExtensionField)
                continue;
              n.builder.options.populateAccessors && function(e) {
                  var t = e.originalName.replace(/(_[a-zA-Z])/g, function(e) {
                    return e.toUpperCase().replace('_', '');
                  });
                  t = t.substring(0, 1).toUpperCase() + t.substring(1);
                  var r = e.originalName.replace(/([A-Z])/g, function(e) {
                    return '_' + e;
                  }),
                    i = function(t, n) {
                      return this[e.name] = n ? t : e.verifyValue(t), this;
                    },
                    s = function() {
                      return this[e.name];
                    };
                  n.getChild('set' + t) === null &&
                    (o['set' +
                      t] = i), n.getChild('set_' + r) === null && (o['set_' + r] = i), n.getChild('get' + t) === null && (o['get' + t] = s), n.getChild('get_' + r) === null && (o['get_' + r] = s);
                }(a);
            }
            o.encode = function(t, r) {
              typeof t == 'boolean' && (r = t, t = undefined);
              var i = !1;
              t || (t = new e(), i = !0);
              var s = t.littleEndian;
              try {
                return n.encode(this, t.LE(), r), (i ? t.flip() : t).LE(s);
              } catch (o) {
                throw (t.LE(s), o);
              }
            }, o.calculate = function() {
              return n.calculate(this);
            }, o.encodeDelimited = function(t) {
              var r = !1;
              t || (t = new e(), r = !0);
              var i = new e().LE();
              return n.encode(this, i).flip(), t.writeVarint32(i.remaining()), t.append(i), r ? t.flip() : t;
            }, o.encodeAB = function() {
              try {
                return this.encode().toArrayBuffer();
              } catch (e) {
                throw (e.encoded && (e.encoded = e.encoded.toArrayBuffer()), e);
              }
            }, o.toArrayBuffer = o.encodeAB, o.encodeNB = function() {
              try {
                return this.encode().toBuffer();
              } catch (e) {
                throw (e.encoded && (e.encoded = e.encoded.toBuffer()), e);
              }
            }, o.toBuffer = o.encodeNB, o.encode64 = function() {
              try {
                return this.encode().toBase64();
              } catch (e) {
                throw (e.encoded && (e.encoded = e.encoded.toBase64()), e);
              }
            }, o.toBase64 = o.encode64, o.encodeHex = function() {
              try {
                return this.encode().toHex();
              } catch (e) {
                throw (e.encoded && (e.encoded = e.encoded.toHex()), e);
              }
            }, o.toHex = o.encodeHex, o.toRaw = function(e) {
              return f(this, !!e);
            }, s.decode = function(t, r) {
              typeof t == 'string' && (t = e.wrap(t, r ? r : 'base64')), t = t instanceof e ? t : e.wrap(t);
              var i = t.littleEndian;
              try {
                var s = n.decode(t.LE());
                return t.LE(i), s;
              } catch (o) {
                throw (t.LE(i), o);
              }
            }, s.decodeDelimited = function(t, r) {
              typeof t == 'string' && (t = e.wrap(t, r ? r : 'base64')), t = t instanceof e ? t : e.wrap(t);
              if (t.remaining() < 1)
                return null;
              var i = t.offset, s = t.readVarint32();
              if (t.remaining() < s)
                return t.offset = i, null;
              try {
                var o = n.decode(t.slice(t.offset, t.offset + s).LE());
                return t.offset += s, o;
              } catch (u) {
                throw (t.offset += s, u);
              }
            }, s.decode64 = function(e) {
              return s.decode(e, 'base64');
            }, s.decodeHex = function(e) {
              return s.decode(e, 'hex');
            }, o.toString = function() {
              return n.toString();
            };
            var l, c;
            return Object.defineProperty &&
              (Object.defineProperty(s, '$options', { value: n.buildOpt() }), Object.defineProperty(o, '$type', {
                get: function() {
                  return n;
                }
              })), s;
          }(t, this);
          this._fields = [], this._fieldsById = {}, this._fieldsByName = {};
          for (var i = 0, s = this.children.length, o; i < s; i++) {
            o = this.children[i];
            if (o instanceof v)
              r[o.name] = o.build();
            else if (o instanceof u)
              r[o.name] = o.build();
            else if (o instanceof u.Field)
              o.build(), this._fields.push(o), this._fieldsById[o.id] = o, this._fieldsByName[o.name] = o;
            else if (!(o instanceof u.OneOf) && !(o instanceof y))
              throw Error('Illegal reflect child of ' + this.toString(!0) + ': ' + children[i].toString(!0));
          }
          return this.clazz = r;
        }, a.encode = function(e, t, n) {
          var r = null, i;
          for (var s = 0, o = this._fields.length, u; s < o; ++s)
            i = this._fields[s], u = e[i.name], i.required && u === null ? r === null && (r = i) : i.encode(n ? u : i.verifyValue(u), t);
          if (r !== null) {
            var a = Error('Missing at least one required field for ' + this.toString(!0) + ': ' + r);
            throw (a.encoded = t, a);
          }
          return t;
        }, a.calculate = function(e) {
          for (var t = 0, n = 0, r = this._fields.length, i, s; n < r; ++n) {
            i = this._fields[n], s = e[i.name];
            if (i.required && s === null)
              throw Error('Missing at least one required field for ' + this.toString(!0) + ': ' + i);
            t += i.calculate(s);
          }
          return t;
        }, a.decode = function(e, n, r) {
          n = typeof n == 'number' ? n : -1;
          var i = e.offset, s = new this.clazz(), o, u, a, l;
          while (e.offset < i + n || n === -1 && e.remaining() > 0) {
            o = e.readVarint32(), u = o & 7, a = o >> 3;
            if (u === t.WIRE_TYPES.ENDGROUP) {
              if (a !== r)
                throw Error(
                  'Illegal group end indicator for ' + this.toString(!0) + ': ' + a + ' (' +
                    (r ? r + ' expected' : 'not a group') +
                    ')'
                );
              break;
            }
            if (!(l = this._fieldsById[a])) {
              switch (u) {
                case t.WIRE_TYPES.VARINT:
                  e.readVarint32();
                  break;
                case t.WIRE_TYPES.BITS32:
                  e.offset += 4;
                  break;
                case t.WIRE_TYPES.BITS64:
                  e.offset += 8;
                  break;
                case t.WIRE_TYPES.LDELIM:
                  var c = e.readVarint32();
                  e.offset += c;
                  break;
                case t.WIRE_TYPES.STARTGROUP:
                  while (f(a, e))
                    
                  break;
                default:
                  throw Error(
                    'Illegal wire type for unknown field ' + a + ' in ' + this.toString(!0) + '#decode: ' + u
                  );
              }
              continue;
            }
            l.repeated && !l.options.packed
              ? s[l.name].push(l.decode(u, e))
              : (s[l.name] = l.decode(u, e), l.oneof &&
                (this[l.oneof.name] !== null && (this[this[l.oneof.name]] = null), s[l.oneof.name] = l.name));
          }
          for (var h = 0, p = this._fields.length; h < p; ++h) {
            l = this._fields[h];
            if (s[l.name] === null) {
              if (l.required) {
                var d = Error('Missing at least one required field for ' + this.toString(!0) + ': ' + l.name);
                throw (d.decoded = s, d);
              }
              l.defaultValue !== null && (s[l.name] = l.defaultValue);
            }
          }
          return s;
        }, n.Message = u;
        var l = function(e, t, n, i, s, o, a, f) {
          r.call(this, e, t, s), this.className = 'Message.Field', this.required = n ===
            'required', this.repeated = n ===
            'repeated', this.type = i, this.resolvedType = null, this.id = o, this.options = a ||
            {}, this.defaultValue = null, this.oneof = f ||
            null, this.originalName = this.name, this.builder.options.convertFieldsToCamelCase &&
            !(this instanceof u.ExtensionField) &&
            (this.name = l._toCamelCase(this.name));
        };
        l._toCamelCase = function(e) {
          return e.replace(/_([a-zA-Z])/g, function(e, t) {
            return t.toUpperCase();
          });
        };
        var c = l.prototype = Object.create(r.prototype);
        c.build = function() {
          this.defaultValue = typeof this.options['default'] != 'undefined'
            ? this.verifyValue(this.options['default'])
            : null;
        }, c.verifyValue = function(n, r) {
          r = r || !1;
          var i = function(e, t) {
            throw Error(
              'Illegal value for ' + this.toString(!0) + ' of type ' + this.type.name + ': ' + e + ' (' + t + ')'
            );
          }.bind(this);
          if (n === null)
            return this.required && i(typeof n, 'required'), null;
          var s;
          if (this.repeated && !r) {
            t.Util.isArray(n) || (n = [ n ]);
            var o = [];
            for (s = 0; s < n.length; s++)
              o.push(this.verifyValue(n[s], !0));
            return o;
          }
          !this.repeated && t.Util.isArray(n) && i(typeof n, 'no array expected');
          switch (this.type) {
            case t.TYPES.int32:
            case t.TYPES.sint32:
            case t.TYPES.sfixed32:
              return (typeof n != 'number' || n === n && n % 1 !== 0) &&
                i(typeof n, 'not an integer'), n > 4294967295 ? n | 0 : n;
            case t.TYPES.uint32:
            case t.TYPES.fixed32:
              return (typeof n != 'number' || n === n && n % 1 !== 0) &&
                i(typeof n, 'not an integer'), n < 0 ? n >>> 0 : n;
            case t.TYPES.int64:
            case t.TYPES.sint64:
            case t.TYPES.sfixed64:
              if (t.Long)
                try {
                  return h(n, !1);
                } catch (u) {
                  i(typeof n, u.message);
                }
              else
                i(typeof n, 'requires Long.js');
            case t.TYPES.uint64:
            case t.TYPES.fixed64:
              if (t.Long)
                try {
                  return h(n, !0);
                } catch (u) {
                  i(typeof n, u.message);
                }
              else
                i(typeof n, 'requires Long.js');
            case t.TYPES.bool:
              return typeof n != 'boolean' && i(typeof n, 'not a boolean'), n;
            case t.TYPES['float']:
            case t.TYPES['double']:
              return typeof n != 'number' && i(typeof n, 'not a number'), n;
            case t.TYPES.string:
              return typeof n != 'string' && !(n && n instanceof String) && i(typeof n, 'not a string'), '' + n;
            case t.TYPES.bytes:
              if (e.isByteBuffer(n))
                return n;
              return e.wrap(n, 'base64');
            case t.TYPES['enum']:
              var a = this.resolvedType.getChildren(v.Value);
              for (s = 0; s < a.length; s++) {
                if (a[s].name == n)
                  return a[s].id;
                if (a[s].id == n)
                  return a[s].id;
              }
              i(n, 'not a valid enum value');
            case t.TYPES.group:
            case t.TYPES.message:
              (!n || typeof n != 'object') && i(typeof n, 'object expected');
              if (n instanceof this.resolvedType.clazz)
                return n;
              if (n instanceof t.Builder.Message) {
                var f = {};
                for (var s in n)
                  n.hasOwnProperty(s) && (f[s] = n[s]);
                n = f;
              }
              return new this.resolvedType.clazz(n);
          }
          throw Error(
            '[INTERNAL] Illegal value for ' + this.toString(!0) + ': ' + n + ' (undefined type ' + this.type + ')'
          );
        }, c.encode = function(n, r) {
          if (this.type === null || typeof this.type != 'object')
            throw Error('[INTERNAL] Unresolved type in ' + this.toString(!0) + ': ' + this.type);
          if (n === null || this.repeated && n.length == 0)
            return r;
          try {
            if (this.repeated) {
              var i;
              if (this.options.packed && t.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0) {
                r.writeVarint32(this.id << 3 | t.WIRE_TYPES.LDELIM), r.ensureCapacity(r.offset += 1);
                var s = r.offset;
                for (i = 0; i < n.length; i++)
                  this.encodeValue(n[i], r);
                var o = r.offset - s, u = e.calculateVarint32(o);
                if (u > 1) {
                  var a = r.slice(s, r.offset);
                  s += u - 1, r.offset = s, r.append(a);
                }
                r.writeVarint32(o, s - u);
              } else
                for (i = 0; i < n.length; i++)
                  r.writeVarint32(this.id << 3 | this.type.wireType), this.encodeValue(n[i], r);
            } else
              r.writeVarint32(this.id << 3 | this.type.wireType), this.encodeValue(n, r);
          } catch (f) {
            throw Error('Illegal value for ' + this.toString(!0) + ': ' + n + ' (' + f + ')');
          }
          return r;
        }, c.encodeValue = function(n, r) {
          if (n === null)
            return r;
          switch (this.type) {
            case t.TYPES.int32:
              n < 0 ? r.writeVarint64(n) : r.writeVarint32(n);
              break;
            case t.TYPES.uint32:
              r.writeVarint32(n);
              break;
            case t.TYPES.sint32:
              r.writeVarint32ZigZag(n);
              break;
            case t.TYPES.fixed32:
              r.writeUint32(n);
              break;
            case t.TYPES.sfixed32:
              r.writeInt32(n);
              break;
            case t.TYPES.int64:
            case t.TYPES.uint64:
              r.writeVarint64(n);
              break;
            case t.TYPES.sint64:
              r.writeVarint64ZigZag(n);
              break;
            case t.TYPES.fixed64:
              r.writeUint64(n);
              break;
            case t.TYPES.sfixed64:
              r.writeInt64(n);
              break;
            case t.TYPES.bool:
              typeof n == 'string'
                ? r.writeVarint32(n.toLowerCase() === 'false' ? 0 : !!n)
                : r.writeVarint32(n ? 1 : 0);
              break;
            case t.TYPES['enum']:
              r.writeVarint32(n);
              break;
            case t.TYPES['float']:
              r.writeFloat32(n);
              break;
            case t.TYPES['double']:
              r.writeFloat64(n);
              break;
            case t.TYPES.string:
              r.writeVString(n);
              break;
            case t.TYPES.bytes:
              if (n.remaining() < 0)
                throw Error('Illegal value for ' + this.toString(!0) + ': ' + n.remaining() + ' bytes remaining');
              var i = n.offset;
              r.writeVarint32(n.remaining()), r.append(n), n.offset = i;
              break;
            case t.TYPES.message:
              var s = new e().LE();
              this.resolvedType.encode(n, s), r.writeVarint32(s.offset), r.append(s.flip());
              break;
            case t.TYPES.group:
              this.resolvedType.encode(n, r), r.writeVarint32(this.id << 3 | t.WIRE_TYPES.ENDGROUP);
              break;
            default:
              throw Error('[INTERNAL] Illegal value to encode in ' + this.toString(!0) + ': ' + n + ' (unknown type)');
          }
          return r;
        }, c.calculate = function(n) {
          n = this.verifyValue(n);
          if (this.type === null || typeof this.type != 'object')
            throw Error('[INTERNAL] Unresolved type in ' + this.toString(!0) + ': ' + this.type);
          if (n === null || this.repeated && n.length == 0)
            return 0;
          var r = 0;
          try {
            if (this.repeated) {
              var i, s;
              if (this.options.packed && t.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0) {
                r += e.calculateVarint32(this.id << 3 | t.WIRE_TYPES.LDELIM), s = 0;
                for (i = 0; i < n.length; i++)
                  s += this.calculateValue(n[i]);
                r += e.calculateVarint32(s), r += s;
              } else
                for (i = 0; i < n.length; i++)
                  r += e.calculateVarint32(this.id << 3 | this.type.wireType), r += this.calculateValue(n[i]);
            } else
              r += e.calculateVarint32(this.id << 3 | this.type.wireType), r += this.calculateValue(n);
          } catch (o) {
            throw Error('Illegal value for ' + this.toString(!0) + ': ' + n + ' (' + o + ')');
          }
          return r;
        }, c.calculateValue = function(n) {
          if (n === null)
            return 0;
          var r;
          switch (this.type) {
            case t.TYPES.int32:
              return n < 0 ? e.calculateVarint64(n) : e.calculateVarint32(n);
            case t.TYPES.uint32:
              return e.calculateVarint32(n);
            case t.TYPES.sint32:
              return e.calculateVarint32(e.zigZagEncode32(n));
            case t.TYPES.fixed32:
            case t.TYPES.sfixed32:
            case t.TYPES['float']:
              return 4;
            case t.TYPES.int64:
            case t.TYPES.uint64:
              return e.calculateVarint64(n);
            case t.TYPES.sint64:
              return e.calculateVarint64(e.zigZagEncode64(n));
            case t.TYPES.fixed64:
            case t.TYPES.sfixed64:
              return 8;
            case t.TYPES.bool:
              return 1;
            case t.TYPES['enum']:
              return e.calculateVarint32(n);
            case t.TYPES['double']:
              return 8;
            case t.TYPES.string:
              return r = e.calculateUTF8Bytes(n), e.calculateVarint32(r) + r;
            case t.TYPES.bytes:
              if (n.remaining() < 0)
                throw Error('Illegal value for ' + this.toString(!0) + ': ' + n.remaining() + ' bytes remaining');
              return e.calculateVarint32(n.remaining()) + n.remaining();
            case t.TYPES.message:
              return r = this.resolvedType.calculate(n), e.calculateVarint32(r) + r;
            case t.TYPES.group:
              return r = this.resolvedType.calculate(n), r + e.calculateVarint32(this.id << 3 | t.WIRE_TYPES.ENDGROUP);
          }
          throw Error('[INTERNAL] Illegal value to encode in ' + this.toString(!0) + ': ' + n + ' (unknown type)');
        }, c.decode = function(e, n, r) {
          var i, s;
          if (e != this.type.wireType && (r || e != t.WIRE_TYPES.LDELIM || !this.repeated))
            throw Error(
              'Illegal wire type for field ' + this.toString(!0) + ': ' + e + ' (' + this.type.wireType + ' expected)'
            );
          if (
            e == t.WIRE_TYPES.LDELIM && this.repeated && this.options.packed &&
              t.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0 &&
              !r
          ) {
            s = n.readVarint32(), s = n.offset + s;
            var o = [];
            while (n.offset < s)
              o.push(this.decode(this.type.wireType, n, !0));
            return o;
          }
          switch (this.type) {
            case t.TYPES.int32:
              return n.readVarint32() | 0;
            case t.TYPES.uint32:
              return n.readVarint32() >>> 0;
            case t.TYPES.sint32:
              return n.readVarint32ZigZag() | 0;
            case t.TYPES.fixed32:
              return n.readUint32() >>> 0;
            case t.TYPES.sfixed32:
              return n.readInt32() | 0;
            case t.TYPES.int64:
              return n.readVarint64();
            case t.TYPES.uint64:
              return n.readVarint64().toUnsigned();
            case t.TYPES.sint64:
              return n.readVarint64ZigZag();
            case t.TYPES.fixed64:
              return n.readUint64();
            case t.TYPES.sfixed64:
              return n.readInt64();
            case t.TYPES.bool:
              return !!n.readVarint32();
            case t.TYPES['enum']:
              return n.readVarint32();
            case t.TYPES['float']:
              return n.readFloat();
            case t.TYPES['double']:
              return n.readDouble();
            case t.TYPES.string:
              return n.readVString();
            case t.TYPES.bytes:
              s = n.readVarint32();
              if (n.remaining() < s)
                throw Error(
                  'Illegal number of bytes for ' + this.toString(!0) + ': ' + s + ' required but got only ' +
                    n.remaining()
                );
              return i = n.clone(), i.limit = i.offset + s, n.offset += s, i;
            case t.TYPES.message:
              return s = n.readVarint32(), this.resolvedType.decode(n, s);
            case t.TYPES.group:
              return this.resolvedType.decode(n, -1, this.id);
          }
          throw Error('[INTERNAL] Illegal wire type for ' + this.toString(!0) + ': ' + e);
        }, n.Message.Field = l;
        var p = function(e, t, n, r, i, s, o) {
          l.call(this, e, t, n, r, i, s, o), this.extension;
        };
        p.prototype = Object.create(l.prototype), n.Message.ExtensionField = p;
        var d = function(e, t, n) {
          r.call(this, e, t, n), this.fields = [];
        };
        n.Message.OneOf = d;
        var v = function(e, t, n, r) {
          s.call(this, e, t, n, r), this.className = 'Enum', this.object = null;
        },
          m = v.prototype = Object.create(s.prototype);
        m.build = function() {
          var e = {}, t = this.getChildren(v.Value);
          for (var n = 0, r = t.length; n < r; ++n)
            e[t[n].name] = t[n].id;
          return Object.defineProperty &&
            Object.defineProperty(e, '$options', { value: this.buildOpt() }), this.object = e;
        }, n.Enum = v;
        var g = function(e, t, n, i) {
          r.call(this, e, t, n), this.className = 'Enum.Value', this.id = i;
        };
        g.prototype = Object.create(r.prototype), n.Enum.Value = g;
        var y = function(e, t, n, i) {
          r.call(this, e, t, n), this.field = i;
        };
        y.prototype = Object.create(r.prototype), n.Extension = y;
        var b = function(e, t, n, r) {
          s.call(this, e, t, n, r), this.className = 'Service', this.clazz = null;
        },
          w = b.prototype = Object.create(s.prototype);
        w.build = function(e) {
          return this.clazz && !e ? this.clazz : this.clazz = function(e, t) {
              var n = function(t) {
                e.Builder.Service.call(this), this.rpcImpl = t || function(e, t, n) {
                    setTimeout(
                      n.bind(this, Error('Not implemented, see: https://github.com/dcodeIO/ProtoBuf.js/wiki/Services')),
                      0
                    );
                  };
              },
                r = n.prototype = Object.create(e.Builder.Service.prototype);
              Object.defineProperty &&
                (Object.defineProperty(n, '$options', { value: t.buildOpt() }), Object.defineProperty(r, '$options', {
                  value: n.$options
                }));
              var i = t.getChildren(e.Reflect.Service.RPCMethod);
              for (var s = 0; s < i.length; s++)
                (function(e) {
                  r[e.name] = function(n, r) {
                    try {
                      if (!n || !(n instanceof e.resolvedRequestType.clazz)) {
                        setTimeout(
                          r.bind(
                            this,
                            Error('Illegal request type provided to service method ' + t.name + '#' + e.name)
                          ),
                          0
                        );
                        return;
                      }
                      this.rpcImpl(e.fqn(), n, function(n, i) {
                        if (n) {
                          r(n);
                          return;
                        }
                        try {
                          i = e.resolvedResponseType.clazz.decode(i);
                        } catch (s) {}
                        if (!i || !(i instanceof e.resolvedResponseType.clazz)) {
                          r(Error('Illegal response type received in service method ' + t.name + '#' + e.name));
                          return;
                        }
                        r(null, i);
                      });
                    } catch (i) {
                      setTimeout(r.bind(this, i), 0);
                    }
                  }, n[e.name] = function(t, r, i) {
                    new n(t)[e.name](r, i);
                  }, Object.defineProperty &&
                    (Object.defineProperty(n[e.name], '$options', {
                      value: e.buildOpt()
                    }), Object.defineProperty(r[e.name], '$options', { value: n[e.name].$options }));
                })(i[s]);
              return n;
            }(t, this);
        }, n.Service = b;
        var E = function(e, t, n, i) {
          r.call(this, e, t, n), this.className = 'Service.Method', this.options = i || {};
        },
          S = E.prototype = Object.create(r.prototype);
        S.buildOpt = o.buildOpt, n.Service.Method = E;
        var x = function(e, t, n, r, i, s) {
          E.call(
            this,
            e,
            t,
            n,
            s
          ), this.className = 'Service.RPCMethod', this.requestName = r, this.responseName = i, this.resolvedRequestType = null, this.resolvedResponseType = null;
        };
        return x.prototype = Object.create(E.prototype), n.Service.RPCMethod = x, n;
      }(t), t.Builder = function(e, t, n) {
        var r = function(e) {
          this.ns = new n.Namespace(
            this,
            null,
            ''
          ), this.ptr = this.ns, this.resolved = !1, this.result = null, this.files = {}, this.importRoot = null, this.options = e ||
            {};
        },
          i = r.prototype;
        return i.reset = function() {
          this.ptr = this.ns;
        }, i.define = function(e, r) {
          if (typeof e != 'string' || !t.TYPEREF.test(e))
            throw Error('Illegal package: ' + e);
          var i = e.split('.'), s;
          for (s = 0; s < i.length; s++)
            if (!t.NAME.test(i[s]))
              throw Error('Illegal package: ' + i[s]);
          for (s = 0; s < i.length; s++)
            this.ptr.getChild(i[s]) === null &&
              this.ptr.addChild(new n.Namespace(this, this.ptr, i[s], r)), this.ptr = this.ptr.getChild(i[s]);
          return this;
        }, r.isValidMessage = function(n) {
          if (typeof n.name != 'string' || !t.NAME.test(n.name))
            return !1;
          if (typeof n.values != 'undefined' || typeof n.rpc != 'undefined')
            return !1;
          var i;
          if (typeof n['fields'] != 'undefined') {
            if (!e.Util.isArray(n.fields))
              return !1;
            var s = [], o;
            for (i = 0; i < n.fields.length; i++) {
              if (!r.isValidMessageField(n.fields[i]))
                return !1;
              o = parseInt(n.fields[i].id, 10);
              if (s.indexOf(o) >= 0)
                return !1;
              s.push(o);
            }
            s = null;
          }
          if (typeof n['enums'] != 'undefined') {
            if (!e.Util.isArray(n.enums))
              return !1;
            for (i = 0; i < n.enums.length; i++)
              if (!r.isValidEnum(n.enums[i]))
                return !1;
          }
          if (typeof n['messages'] != 'undefined') {
            if (!e.Util.isArray(n.messages))
              return !1;
            for (i = 0; i < n.messages.length; i++)
              if (!r.isValidMessage(n.messages[i]) && !r.isValidExtend(n.messages[i]))
                return !1;
          }
          if (typeof n['extensions'] != 'undefined')
            if (
              !e.Util.isArray(n.extensions) || n.extensions.length !== 2 || typeof n.extensions[0] != 'number' ||
                typeof n.extensions[1] != 'number'
            )
              return !1;
          return !0;
        }, r.isValidMessageField = function(e) {
          if (
            typeof e.rule != 'string' || typeof e.name != 'string' || typeof e.type != 'string' ||
              typeof e.id == 'undefined'
          )
            return !1;
          if (!t.RULE.test(e.rule) || !t.NAME.test(e.name) || !t.TYPEREF.test(e.type) || !t.ID.test('' + e.id))
            return !1;
          if (typeof e['options'] != 'undefined') {
            if (typeof e['options'] != 'object')
              return !1;
            var n = Object.keys(e.options);
            for (var r = 0, i; r < n.length; r++)
              if (
                typeof (i = n[r]) != 'string' ||
                  typeof e.options[i] != 'string' && typeof e.options[i] != 'number' && typeof e.options[i] != 'boolean'
              )
                return !1;
          }
          return !0;
        }, r.isValidEnum = function(n) {
          if (typeof n.name != 'string' || !t.NAME.test(n.name))
            return !1;
          if (typeof n.values == 'undefined' || !e.Util.isArray(n.values) || n['values'].length == 0)
            return !1;
          for (var r = 0; r < n.values.length; r++) {
            if (typeof n['values'][r] != 'object')
              return !1;
            if (typeof n.values[r].name != 'string' || typeof n.values[r].id == 'undefined')
              return !1;
            if (!t.NAME.test(n.values[r].name) || !t.NEGID.test('' + n.values[r].id))
              return !1;
          }
          return !0;
        }, i.create = function(t) {
          if (!t)
            return this;
          e.Util.isArray(t) || (t = [ t ]);
          if (t.length == 0)
            return this;
          var i = [];
          i.push(t);
          while (i.length > 0) {
            t = i.pop();
            if (!e.Util.isArray(t))
              throw Error('Not a valid namespace: ' + JSON.stringify(t));
            while (t.length > 0) {
              var s = t.shift();
              if (r.isValidMessage(s)) {
                var o = new n.Message(this, this.ptr, s.name, s.options, s.isGroup), u = {};
                if (s.oneofs) {
                  var a = Object.keys(s.oneofs);
                  for (var f = 0, l = a.length; f < l; ++f)
                    o.addChild(u[a[f]] = new n.Message.OneOf(this, o, a[f]));
                }
                if (s.fields && s.fields.length > 0)
                  for (f = 0, l = s.fields.length; f < l; ++f) {
                    var c = s.fields[f];
                    if (o.getChild(c.id) !== null)
                      throw Error('Duplicate field id in message ' + o.name + ': ' + c.id);
                    if (c.options) {
                      var h = Object.keys(c.options);
                      for (var p = 0, d = h.length; p < d; ++p) {
                        if (typeof h[p] != 'string')
                          throw Error('Illegal field option name in message ' + o.name + '#' + c.name + ': ' + h[p]);
                        if (
                          typeof c.options[h[p]] != 'string' && typeof c.options[h[p]] != 'number' &&
                            typeof c.options[h[p]] != 'boolean'
                        )
                          throw Error(
                            'Illegal field option value in message ' + o.name + '#' + c.name + '#' + h[p] + ': ' +
                              c.options[h[p]]
                          );
                      }
                    }
                    var v = null;
                    if (typeof c['oneof'] == 'string') {
                      v = u[c.oneof];
                      if (typeof v == 'undefined')
                        throw Error('Illegal oneof in message ' + o.name + '#' + c.name + ': ' + c.oneof);
                    }
                    c = new n.Message.Field(
                      this,
                      o,
                      c.rule,
                      c.type,
                      c.name,
                      c.id,
                      c.options,
                      v
                    ), v && v.fields.push(c), o.addChild(c);
                  }
                var m = [];
                if (typeof s.enums != 'undefined' && s.enums.length > 0)
                  for (f = 0; f < s.enums.length; f++)
                    m.push(s.enums[f]);
                if (s.messages && s.messages.length > 0)
                  for (f = 0; f < s.messages.length; f++)
                    m.push(s.messages[f]);
                s.extensions &&
                  (o.extensions = s.extensions, o.extensions[0] < e.ID_MIN &&
                    (o.extensions[0] = e.ID_MIN), o.extensions[1] > e.ID_MAX &&
                    (o.extensions[1] = e.ID_MAX)), this.ptr.addChild(o);
                if (m.length > 0) {
                  i.push(t), t = m, m = null, this.ptr = o, o = null;
                  continue;
                }
                m = null, o = null;
              } else if (r.isValidEnum(s)) {
                o = new n.Enum(this, this.ptr, s.name, s.options);
                for (f = 0; f < s.values.length; f++)
                  o.addChild(new n.Enum.Value(this, o, s.values[f].name, s.values[f].id));
                this.ptr.addChild(o), o = null;
              } else if (r.isValidService(s)) {
                o = new n.Service(this, this.ptr, s.name, s.options);
                for (f in s.rpc)
                  s.rpc.hasOwnProperty(f) &&
                    o.addChild(new n.Service.RPCMethod(
                      this,
                      o,
                      f,
                      s.rpc[f].request,
                      s.rpc[f].response,
                      s.rpc[f].options
                    ));
                this.ptr.addChild(o), o = null;
              } else {
                if (!r.isValidExtend(s))
                  throw Error('Not a valid definition: ' + JSON.stringify(s));
                o = this.ptr.resolve(s.ref);
                if (o)
                  for (f = 0; f < s.fields.length; f++) {
                    if (o.getChild(s.fields[f].id) !== null)
                      throw Error('Duplicate extended field id in message ' + o.name + ': ' + s.fields[f].id);
                    if (s.fields[f].id < o.extensions[0] || s.fields[f].id > o.extensions[1])
                      throw Error(
                        'Illegal extended field id in message ' + o.name + ': ' + s.fields[f].id + ' (' +
                          o.extensions.join(' to ') +
                          ' expected)'
                      );
                    var g = s.fields[f].name;
                    this.options.convertFieldsToCamelCase &&
                      (g = n.Message.Field._toCamelCase(
                        s.fields[f].name
                      )), c = new n.Message.ExtensionField(this, o, s.fields[f].rule, s.fields[f].type, this.ptr.fqn() + '.' + g, s.fields[f].id, s.fields[f].options);
                    var y = new n.Extension(this, this.ptr, s.fields[f].name, c);
                    c.extension = y, this.ptr.addChild(y), o.addChild(c);
                  }
                else if (!/\.?google\.protobuf\./.test(s.ref))
                  throw Error('Extended message ' + s.ref + ' is not defined');
              }
              s = null;
            }
            t = null, this.ptr = this.ptr.parent;
          }
          return this.resolved = !1, this.result = null, this;
        }, i['import'] = function(t, n) {
          if (typeof n == 'string') {
            e.Util.IS_NODE && (n = path.resolve(n));
            if (this.files[n] === !0)
              return this.reset(), this;
            this.files[n] = !0;
          }
          if (!!t.imports && t.imports.length > 0) {
            var r, i = '/', s = !1;
            if (typeof n == 'object') {
              this.importRoot = n.root, s = !0, r = this.importRoot, n = n.file;
              if (r.indexOf('\\') >= 0 || n.indexOf('\\') >= 0)
                i = '\\';
            } else
              typeof n == 'string'
                ? this.importRoot
                  ? r = this.importRoot
                  : n.indexOf('/') >= 0
                    ? (r = n.replace(/\/[^\/]*$/, ''), r === '' && (r = '/'))
                    : n.indexOf('\\') >= 0 ? (r = n.replace(/\\[^\\]*$/, ''), i = '\\') : r = '.'
                : r = null;
            for (var o = 0; o < t.imports.length; o++)
              if (typeof t['imports'][o] == 'string') {
                if (!r)
                  throw Error('Cannot determine import root: File name is unknown');
                var u = t.imports[o];
                if (/^google\/protobuf\//.test(u))
                  continue;
                u = r + i + u;
                if (this.files[u] === !0)
                  continue;
                /\.proto$/i.test(u) && !e.DotProto && (u = u.replace(/\.proto$/, '.json'));
                var a = e.Util.fetch(u);
                if (a === null)
                  throw Error("Failed to import '" + u + "' in '" + n + "': File not found");
                /\.json$/i.test(u)
                  ? this['import'](JSON.parse(a + ''), u)
                  : this['import'](new e.DotProto.Parser(a + '').parse(), u);
              } else
                n ? /\.(\w+)$/.test(n) ? this['import'](
                      t.imports[o],
                      n.replace(/^(.+)\.(\w+)$/, function(e, t, n) {
                        return t + '_import' + o + '.' + n;
                      })
                    ) : this['import'](t.imports[o], n + '_import' + o) : this['import'](t.imports[o]);
            s && (this.importRoot = null);
          }
          return t.messages &&
            (t['package'] && this.define(t['package'], t.options), this.create(
              t.messages
            ), this.reset()), t.enums && (t['package'] && this.define(t['package'], t.options), this.create(t.enums), this.reset()), t.services && (t['package'] && this.define(t['package'], t.options), this.create(t.services), this.reset()), t['extends'] && (t['package'] && this.define(t['package'], t.options), this.create(t['extends']), this.reset()), this;
        }, r.isValidService = function(e) {
          return typeof e.name == 'string' && !!t.NAME.test(e.name) && typeof e.rpc == 'object';
        }, r.isValidExtend = function(n) {
          if (typeof n.ref != 'string' || !t.TYPEREF.test(n.ref))
            return !1;
          var i;
          if (typeof n['fields'] != 'undefined') {
            if (!e.Util.isArray(n.fields))
              return !1;
            var s = [], o;
            for (i = 0; i < n.fields.length; i++) {
              if (!r.isValidMessageField(n.fields[i]))
                return !1;
              o = parseInt(n.id, 10);
              if (s.indexOf(o) >= 0)
                return !1;
              s.push(o);
            }
            s = null;
          }
          return !0;
        }, i.resolveAll = function() {
          var r;
          if (this.ptr == null || typeof this.ptr.type == 'object')
            return;
          if (this.ptr instanceof n.Namespace) {
            var i = this.ptr.children;
            for (var s = 0, o = i.length; s < o; ++s)
              this.ptr = i[s], this.resolveAll();
          } else if (this.ptr instanceof n.Message.Field)
            if (!t.TYPE.test(this.ptr.type)) {
              if (!t.TYPEREF.test(this.ptr.type))
                throw Error('Illegal type reference in ' + this.ptr.toString(!0) + ': ' + this.ptr.type);
              r = (this.ptr instanceof n.Message.ExtensionField ? this.ptr.extension.parent : this.ptr.parent).resolve(
                this.ptr.type,
                !0
              );
              if (!r)
                throw Error('Unresolvable type reference in ' + this.ptr.toString(!0) + ': ' + this.ptr.type);
              this.ptr.resolvedType = r;
              if (r instanceof n.Enum)
                this.ptr.type = e.TYPES['enum'];
              else {
                if (!(r instanceof n.Message))
                  throw Error('Illegal type reference in ' + this.ptr.toString(!0) + ': ' + this.ptr.type);
                this.ptr.type = r.isGroup ? e.TYPES.group : e.TYPES.message;
              }
            } else
              this.ptr.type = e.TYPES[this.ptr.type];
          else if (!(this.ptr instanceof e.Reflect.Enum.Value))
            if (this.ptr instanceof e.Reflect.Service.Method) {
              if (!(this.ptr instanceof e.Reflect.Service.RPCMethod))
                throw Error('Illegal service type in ' + this.ptr.toString(!0));
              r = this.ptr.parent.resolve(this.ptr.requestName);
              if (!r || !(r instanceof e.Reflect.Message))
                throw Error('Illegal type reference in ' + this.ptr.toString(!0) + ': ' + this.ptr.requestName);
              this.ptr.resolvedRequestType = r, r = this.ptr.parent.resolve(this.ptr.responseName);
              if (!r || !(r instanceof e.Reflect.Message))
                throw Error('Illegal type reference in ' + this.ptr.toString(!0) + ': ' + this.ptr.responseName);
              this.ptr.resolvedResponseType = r;
            } else if (!(this.ptr instanceof e.Reflect.Message.OneOf) && !(this.ptr instanceof e.Reflect.Extension))
              throw Error('Illegal object in namespace: ' + typeof this.ptr + ':' + this.ptr);
          this.reset();
        }, i.build = function(e) {
          this.reset(), this.resolved ||
            (this.resolveAll(), this.resolved = !0, this.result = null), this.result == null && (this.result = this.ns.build());
          if (!e)
            return this.result;
          var t = e.split('.'), n = this.result;
          for (var r = 0; r < t.length; r++) {
            if (!n[t[r]]) {
              n = null;
              break;
            }
            n = n[t[r]];
          }
          return n;
        }, i.lookup = function(e) {
          return e ? this.ns.resolve(e) : this.ns;
        }, i.toString = function() {
          return 'Builder';
        }, r.Message = function() {}, r.Service = function() {}, r;
      }(t, t.Lang, t.Reflect), t.loadProto = function(e, n, r) {
        if (typeof n == 'string' || n && typeof n.file == 'string' && typeof n.root == 'string')
          r = n, n = undefined;
        return t.loadJson(new t.DotProto.Parser(e).parse(), n, r);
      }, t.protoFromString = t.loadProto, t.loadProtoFile = function(e, n, r) {
        if (n && typeof n == 'object')
          r = n, n = null;
        else if (!n || typeof n != 'function')
          n = null;
        if (n)
          return t.Util.fetch(typeof e == 'string' ? e : e.root + '/' + e.file, function(i) {
            if (i === null) {
              n(Error('Failed to fetch file'));
              return;
            }
            try {
              n(null, t.loadProto(i, r, e));
            } catch (s) {
              n(s);
            }
          });
        var i = t.Util.fetch(typeof e == 'object' ? e.root + '/' + e.file : e);
        return i === null ? null : t.loadProto(i, r, e);
      }, t.protoFromFile = t.loadProtoFile, t.newBuilder = function(e) {
        return e = e ||
          {}, typeof e['convertFieldsToCamelCase'] == 'undefined' && (e.convertFieldsToCamelCase = t.convertFieldsToCamelCase), typeof e['populateAccessors'] == 'undefined' && (e.populateAccessors = t.populateAccessors), new t.Builder(e);
      }, t.loadJson = function(e, n, r) {
        if (typeof n == 'string' || n && typeof n.file == 'string' && typeof n.root == 'string')
          r = n, n = null;
        if (!n || typeof n != 'object')
          n = t.newBuilder();
        return typeof e == 'string' && (e = JSON.parse(e)), n['import'](e, r), n.resolveAll(), n;
      }, t.loadJsonFile = function(e, n, r) {
        if (n && typeof n == 'object')
          r = n, n = null;
        else if (!n || typeof n != 'function')
          n = null;
        if (n)
          return t.Util.fetch(typeof e == 'string' ? e : e.root + '/' + e.file, function(i) {
            if (i === null) {
              n(Error('Failed to fetch file'));
              return;
            }
            try {
              n(null, t.loadJson(JSON.parse(i), r, e));
            } catch (s) {
              n(s);
            }
          });
        var i = t.Util.fetch(typeof e == 'object' ? e.root + '/' + e.file : e);
        return i === null ? null : t.loadJson(JSON.parse(i), r, e);
      }, t;
    }
    typeof require == 'function' && typeof module == 'object' && module && typeof exports == 'object' && exports
      ? module.exports = t(bytebuffer)
      : y = function(e) {
        return typeof t == 'function' ? t(e) : t;
      }(g);
  }(this), b = y
    .newBuilder({})
    ['import']({
      package: null,
      options: { java_package: 'com.baidu.im.frame.pb', optimize_for: 'LITE_RUNTIME' },
      messages: [
        {
          name: 'ImPushData',
          fields: [
            { rule: 'required', type: 'EImPushType', name: 'imPushType', id: 1 },
            { rule: 'required', type: 'bytes', name: 'pushData', id: 2 }
          ]
        }
      ],
      enums: [
        {
          name: 'EImPushType',
          values: [
            { name: 'IM_PUSH_CHAT_MSG', id: 1 },
            { name: 'IM_PUSH_CHAT_MSG_RECV_ACK', id: 2 },
            { name: 'IM_PUSH_CHAT_MSG_READ_ACK', id: 3 }
          ]
        }
      ]
    })
    .build(), w = y
    .newBuilder({})
    ['import']({
      package: null,
      options: { java_package: 'com.baidu.im.frame.pb', optimize_for: 'LITE_RUNTIME' },
      messages: [
        {
          name: 'Image',
          fields: [
            { rule: 'optional', type: 'string', name: 'imageId', id: 1 },
            { rule: 'required', type: 'string', name: 'md5', id: 2 },
            { rule: 'required', type: 'uint32', name: 'size', id: 3 },
            { rule: 'required', type: 'uint32', name: 'width', id: 4 },
            { rule: 'required', type: 'uint32', name: 'height', id: 5 },
            { rule: 'optional', type: 'string', name: 'url', id: 6 },
            { rule: 'optional', type: 'string', name: 'extInfo', id: 7 }
          ]
        },
        {
          name: 'Voice',
          fields: [
            { rule: 'optional', type: 'string', name: 'voiceId', id: 1 },
            { rule: 'required', type: 'string', name: 'md5', id: 2 },
            { rule: 'required', type: 'uint32', name: 'size', id: 3 },
            { rule: 'optional', type: 'uint32', name: 'timeLen', id: 4 },
            { rule: 'optional', type: 'string', name: 'url', id: 5 },
            { rule: 'optional', type: 'string', name: 'extInfo', id: 6 }
          ]
        },
        {
          name: 'File',
          fields: [
            { rule: 'optional', type: 'string', name: 'fileId', id: 1 },
            { rule: 'required', type: 'string', name: 'md5', id: 2 },
            { rule: 'required', type: 'uint32', name: 'size', id: 3 },
            { rule: 'optional', type: 'string', name: 'fileUrl', id: 4 },
            { rule: 'required', type: 'string', name: 'name', id: 5 },
            { rule: 'optional', type: 'string', name: 'extInfo', id: 6 }
          ]
        },
        {
          name: 'Text',
          fields: [
            { rule: 'required', type: 'string', name: 'textId', id: 1 },
            { rule: 'required', type: 'string', name: 'content', id: 2 },
            { rule: 'optional', type: 'string', name: 'title', id: 3 },
            { rule: 'optional', type: 'string', name: 'description', id: 4 },
            { rule: 'optional', type: 'string', name: 'extInfo', id: 5 }
          ]
        },
        {
          name: 'URL',
          fields: [
            { rule: 'required', type: 'string', name: 'urlId', id: 1 },
            { rule: 'required', type: 'string', name: 'url', id: 2 },
            { rule: 'optional', type: 'string', name: 'title', id: 3 },
            { rule: 'optional', type: 'string', name: 'extInfo', id: 4 }
          ]
        },
        {
          name: 'Data',
          fields: [
            { rule: 'required', type: 'string', name: 'dataId', id: 1 },
            { rule: 'required', type: 'bytes', name: 'content', id: 2 },
            { rule: 'optional', type: 'string', name: 'extInfo', id: 3 }
          ]
        },
        {
          name: 'MsgContent',
          fields: [
            { rule: 'repeated', type: 'Image', name: 'images', id: 1 },
            { rule: 'repeated', type: 'Voice', name: 'voices', id: 2 },
            { rule: 'repeated', type: 'File', name: 'files', id: 3 },
            { rule: 'repeated', type: 'Text', name: 'texts', id: 4 },
            { rule: 'repeated', type: 'URL', name: 'urls', id: 5 },
            { rule: 'repeated', type: 'Data', name: 'datas', id: 6 },
            { rule: 'repeated', type: 'bytes', name: 'extContent', id: 7 }
          ]
        },
        {
          name: 'OneMsg',
          fields: [
            { rule: 'optional', type: 'EChatType', name: 'chatType', id: 1 },
            { rule: 'optional', type: 'string', name: 'fromId', id: 2 },
            { rule: 'optional', type: 'string', name: 'fromName', id: 3 },
            { rule: 'optional', type: 'string', name: 'toId', id: 4 },
            { rule: 'optional', type: 'uint64', name: 'seq', id: 5 },
            { rule: 'required', type: 'MsgContent', name: 'content', id: 6 },
            { rule: 'required', type: 'string', name: 'view', id: 7 },
            { rule: 'optional', type: 'uint64', name: 'serverTime', id: 8 },
            { rule: 'required', type: 'uint64', name: 'sendTime', id: 9 },
            { rule: 'required', type: 'bool', name: 'isRealTime', id: 10 },
            { rule: 'repeated', type: 'string', name: 'options', id: 11 },
            { rule: 'optional', type: 'string', name: 'msgTemplate', id: 12 },
            { rule: 'optional', type: 'uint64', name: 'clientMsgID', id: 13 },
            { rule: 'optional', type: 'string', name: 'notifyText', id: 14 },
            { rule: 'optional', type: 'string', name: 'compatibleText', id: 15 },
            { rule: 'optional', type: 'uint64', name: 'previousSeq', id: 16 },
            { rule: 'optional', type: 'string', name: 'extra', id: 17 }
          ]
        }
      ],
      enums: [
        {
          name: 'EChatType',
          values: [ { name: 'CHAT_P2P', id: 1 }, { name: 'CHAT_P2G', id: 2 }, { name: 'CHAT_PA', id: 3 } ]
        },
        {
          name: 'EMsgTemplate',
          values: [
            { name: 'MSG_TEMPLATE_SIMPLE_TEXT', id: 1 },
            { name: 'MSG_TEMPLATE_SIMPLE_IMAGE', id: 2 },
            { name: 'MSG_TEMPLATE_SIMPLE_VOICE', id: 3 },
            { name: 'MSG_TEMPLATE_SIMPLE_FILE', id: 4 },
            { name: 'MSG_TEMPLATE_SIMPLE_DATA', id: 5 }
          ]
        }
      ]
    })
    .build(), E = y
    .newBuilder({})
    ['import']({
      package: null,
      options: { java_package: 'com.baidu.im.frame.pb', optimize_for: 'LITE_RUNTIME' },
      messages: [
        {
          name: 'GetDownloadSignReqItem',
          fields: [
            { rule: 'required', type: 'string', name: 'fileId', id: 1 },
            { rule: 'required', type: 'string', name: 'bossHost', id: 2 },
            { rule: 'required', type: 'string', name: 'md5', id: 3 }
          ]
        },
        {
          name: 'GetDownloadSignRspItem',
          fields: [
            { rule: 'required', type: 'string', name: 'fileId', id: 1 },
            { rule: 'required', type: 'string', name: 'sign', id: 2 },
            { rule: 'required', type: 'string', name: 'downloadUrl', id: 3 }
          ]
        },
        {
          name: 'GetDownloadSignReq',
          fields: [ { rule: 'repeated', type: 'GetDownloadSignReqItem', name: 'reqList', id: 1 } ]
        },
        {
          name: 'GetDownloadSignRsp',
          fields: [ { rule: 'repeated', type: 'GetDownloadSignRspItem', name: 'rspList', id: 1 } ]
        }
      ]
    })
    .build(), S = y
    .newBuilder({})
    ['import']({
      package: null,
      options: { java_package: 'com.baidu.im.frame.pb', optimize_for: 'LITE_RUNTIME' },
      messages: [
        {
          name: 'GetUploadSignReqItem',
          fields: [
            { rule: 'required', type: 'string', name: 'fileName', id: 1 },
            { rule: 'required', type: 'uint32', name: 'fileSize', id: 2 },
            { rule: 'required', type: 'string', name: 'md5', id: 3 },
            { rule: 'required', type: 'string', name: 'bmd5', id: 4 },
            { rule: 'required', type: 'string', name: 'bossHost', id: 5 },
            { rule: 'required', type: 'EFileType', name: 'fileType', id: 6 }
          ]
        },
        {
          name: 'GetUploadSignRspItem',
          fields: [
            { rule: 'required', type: 'string', name: 'fid', id: 1 },
            { rule: 'required', type: 'string', name: 'sign', id: 2 },
            { rule: 'required', type: 'string', name: 'uploadUrl', id: 3 },
            { rule: 'required', type: 'bool', name: 'exist', id: 4 }
          ]
        },
        {
          name: 'GetUploadSignReq',
          fields: [ { rule: 'repeated', type: 'GetUploadSignReqItem', name: 'reqList', id: 1 } ]
        },
        {
          name: 'GetUploadSignRsp',
          fields: [ { rule: 'repeated', type: 'GetUploadSignRspItem', name: 'rspList', id: 1 } ]
        }
      ],
      enums: [
        {
          name: 'EFileType',
          values: [ { name: 'FILE_IMAGE', id: 1 }, { name: 'FILE_VOICE', id: 2 }, { name: 'FILE_CUSTOM', id: 3 } ]
        }
      ]
    })
    .build(), x = y
    .newBuilder({})
    ['import']({
      package: null,
      options: { java_package: 'com.baidu.im.frame.pb', optimize_for: 'LITE_RUNTIME' },
      messages: [
        {
          name: 'MsgPushResult',
          fields: [
            { rule: 'required', type: 'EChatType', name: 'chatType', id: 1 },
            { rule: 'optional', type: 'string', name: 'toId', id: 2 },
            { rule: 'optional', type: 'EPlatformType', name: 'platformType', id: 3 },
            { rule: 'required', type: 'uint64', name: 'seq', id: 4 },
            { rule: 'required', type: 'bool', name: 'submitSuccess', id: 5 },
            { rule: 'optional', type: 'bool', name: 'msgReceived', id: 6 },
            { rule: 'optional', type: 'bool', name: 'notifyReceived', id: 7 }
          ]
        },
        {
          name: 'MsgRecvAckNotify',
          fields: [ { rule: 'repeated', type: 'MsgPushResult', name: 'msgPushResult', id: 1 } ]
        }
      ],
      enums: [
        {
          name: 'EPlatformType',
          values: [
            { name: 'WINDOWS', id: 1 },
            { name: 'MAC', id: 2 },
            { name: '_NIX', id: 4 },
            { name: 'ANDROID', id: 8 },
            { name: 'IOS', id: 16 },
            { name: 'WP', id: 32 },
            { name: 'WEB', id: 64 },
            { name: 'WINDOW_MOBILE', id: 128 }
          ]
        },
        {
          name: 'EChatType',
          values: [ { name: 'CHAT_P2P', id: 1 }, { name: 'CHAT_P2G', id: 2 }, { name: 'CHAT_PA', id: 3 } ]
        }
      ]
    })
    .build(), T = y
    .newBuilder({})
    ['import']({
      package: null,
      options: { java_package: 'com.baidu.im.frame.pb', optimize_for: 'LITE_RUNTIME' },
      messages: [
        {
          name: 'ChatConversation',
          fields: [
            { rule: 'required', type: 'EChatType', name: 'chatType', id: 1 },
            { rule: 'required', type: 'string', name: 'chatId', id: 2 },
            { rule: 'required', type: 'uint64', name: 'lastRecvMsgSeq', id: 3 },
            { rule: 'required', type: 'uint64', name: 'lastRecvMsgTime', id: 4 },
            { rule: 'required', type: 'uint64', name: 'lastReadMsgSeq', id: 5 },
            { rule: 'required', type: 'uint64', name: 'lastReadMsgTime', id: 6 }
          ]
        },
        {
          name: 'Image',
          fields: [
            { rule: 'optional', type: 'string', name: 'imageId', id: 1 },
            { rule: 'required', type: 'string', name: 'md5', id: 2 },
            { rule: 'required', type: 'uint32', name: 'size', id: 3 },
            { rule: 'required', type: 'uint32', name: 'width', id: 4 },
            { rule: 'required', type: 'uint32', name: 'height', id: 5 },
            { rule: 'optional', type: 'string', name: 'url', id: 6 },
            { rule: 'optional', type: 'string', name: 'extInfo', id: 7 }
          ]
        },
        {
          name: 'Voice',
          fields: [
            { rule: 'optional', type: 'string', name: 'voiceId', id: 1 },
            { rule: 'required', type: 'string', name: 'md5', id: 2 },
            { rule: 'required', type: 'uint32', name: 'size', id: 3 },
            { rule: 'optional', type: 'uint32', name: 'timeLen', id: 4 },
            { rule: 'optional', type: 'string', name: 'url', id: 5 },
            { rule: 'optional', type: 'string', name: 'extInfo', id: 6 }
          ]
        },
        {
          name: 'File',
          fields: [
            { rule: 'optional', type: 'string', name: 'fileId', id: 1 },
            { rule: 'required', type: 'string', name: 'md5', id: 2 },
            { rule: 'required', type: 'uint32', name: 'size', id: 3 },
            { rule: 'optional', type: 'string', name: 'fileUrl', id: 4 },
            { rule: 'required', type: 'string', name: 'name', id: 5 },
            { rule: 'optional', type: 'string', name: 'extInfo', id: 6 }
          ]
        },
        {
          name: 'Text',
          fields: [
            { rule: 'required', type: 'string', name: 'textId', id: 1 },
            { rule: 'required', type: 'string', name: 'content', id: 2 },
            { rule: 'optional', type: 'string', name: 'title', id: 3 },
            { rule: 'optional', type: 'string', name: 'description', id: 4 },
            { rule: 'optional', type: 'string', name: 'extInfo', id: 5 }
          ]
        },
        {
          name: 'URL',
          fields: [
            { rule: 'required', type: 'string', name: 'urlId', id: 1 },
            { rule: 'required', type: 'string', name: 'url', id: 2 },
            { rule: 'optional', type: 'string', name: 'title', id: 3 },
            { rule: 'optional', type: 'string', name: 'extInfo', id: 4 }
          ]
        },
        {
          name: 'Data',
          fields: [
            { rule: 'required', type: 'string', name: 'dataId', id: 1 },
            { rule: 'required', type: 'bytes', name: 'content', id: 2 },
            { rule: 'optional', type: 'string', name: 'extInfo', id: 3 }
          ]
        },
        {
          name: 'MsgContent',
          fields: [
            { rule: 'repeated', type: 'Image', name: 'images', id: 1 },
            { rule: 'repeated', type: 'Voice', name: 'voices', id: 2 },
            { rule: 'repeated', type: 'File', name: 'files', id: 3 },
            { rule: 'repeated', type: 'Text', name: 'texts', id: 4 },
            { rule: 'repeated', type: 'URL', name: 'urls', id: 5 },
            { rule: 'repeated', type: 'Data', name: 'datas', id: 6 },
            { rule: 'repeated', type: 'bytes', name: 'extContent', id: 7 }
          ]
        },
        {
          name: 'OneMsg',
          fields: [
            { rule: 'optional', type: 'EChatType', name: 'chatType', id: 1 },
            { rule: 'optional', type: 'string', name: 'fromId', id: 2 },
            { rule: 'optional', type: 'string', name: 'fromName', id: 3 },
            { rule: 'optional', type: 'string', name: 'toId', id: 4 },
            { rule: 'optional', type: 'uint64', name: 'seq', id: 5 },
            { rule: 'required', type: 'MsgContent', name: 'content', id: 6 },
            { rule: 'required', type: 'string', name: 'view', id: 7 },
            { rule: 'optional', type: 'uint64', name: 'serverTime', id: 8 },
            { rule: 'required', type: 'uint64', name: 'sendTime', id: 9 },
            { rule: 'required', type: 'bool', name: 'isRealTime', id: 10 },
            { rule: 'repeated', type: 'string', name: 'options', id: 11 },
            { rule: 'optional', type: 'string', name: 'msgTemplate', id: 12 },
            { rule: 'optional', type: 'uint64', name: 'clientMsgID', id: 13 },
            { rule: 'optional', type: 'string', name: 'notifyText', id: 14 },
            { rule: 'optional', type: 'string', name: 'compatibleText', id: 15 },
            { rule: 'optional', type: 'uint64', name: 'previousSeq', id: 16 },
            { rule: 'optional', type: 'string', name: 'extra', id: 17 }
          ]
        },
        {
          name: 'QueryActiveContactsReq',
          fields: [
            { rule: 'required', type: 'uint64', name: 'lastQueryTime', id: 1 },
            { rule: 'optional', type: 'uint32', name: 'needReturnMsgsContactsNum', id: 2 },
            { rule: 'optional', type: 'uint32', name: 'needReturnMsgsNum', id: 3 }
          ]
        },
        {
          name: 'QueryActiveContactsRsp',
          fields: [
            { rule: 'required', type: 'uint64', name: 'queryTime', id: 1 },
            { rule: 'repeated', type: 'ChatConversation', name: 'conversations', id: 2 },
            { rule: 'repeated', type: 'OneMsg', name: 'msgs', id: 3 }
          ]
        }
      ],
      enums: [
        {
          name: 'EChatType',
          values: [ { name: 'CHAT_P2P', id: 1 }, { name: 'CHAT_P2G', id: 2 }, { name: 'CHAT_PA', id: 3 } ]
        },
        {
          name: 'EMsgTemplate',
          values: [
            { name: 'MSG_TEMPLATE_SIMPLE_TEXT', id: 1 },
            { name: 'MSG_TEMPLATE_SIMPLE_IMAGE', id: 2 },
            { name: 'MSG_TEMPLATE_SIMPLE_VOICE', id: 3 },
            { name: 'MSG_TEMPLATE_SIMPLE_FILE', id: 4 },
            { name: 'MSG_TEMPLATE_SIMPLE_DATA', id: 5 }
          ]
        }
      ]
    })
    .build(), N = y
    .newBuilder({})
    ['import']({
      package: null,
      options: { java_package: 'com.baidu.im.frame.pb', optimize_for: 'LITE_RUNTIME' },
      messages: [
        {
          name: 'Image',
          fields: [
            { rule: 'optional', type: 'string', name: 'imageId', id: 1 },
            { rule: 'required', type: 'string', name: 'md5', id: 2 },
            { rule: 'required', type: 'uint32', name: 'size', id: 3 },
            { rule: 'required', type: 'uint32', name: 'width', id: 4 },
            { rule: 'required', type: 'uint32', name: 'height', id: 5 },
            { rule: 'optional', type: 'string', name: 'url', id: 6 },
            { rule: 'optional', type: 'string', name: 'extInfo', id: 7 }
          ]
        },
        {
          name: 'Voice',
          fields: [
            { rule: 'optional', type: 'string', name: 'voiceId', id: 1 },
            { rule: 'required', type: 'string', name: 'md5', id: 2 },
            { rule: 'required', type: 'uint32', name: 'size', id: 3 },
            { rule: 'optional', type: 'uint32', name: 'timeLen', id: 4 },
            { rule: 'optional', type: 'string', name: 'url', id: 5 },
            { rule: 'optional', type: 'string', name: 'extInfo', id: 6 }
          ]
        },
        {
          name: 'File',
          fields: [
            { rule: 'optional', type: 'string', name: 'fileId', id: 1 },
            { rule: 'required', type: 'string', name: 'md5', id: 2 },
            { rule: 'required', type: 'uint32', name: 'size', id: 3 },
            { rule: 'optional', type: 'string', name: 'fileUrl', id: 4 },
            { rule: 'required', type: 'string', name: 'name', id: 5 },
            { rule: 'optional', type: 'string', name: 'extInfo', id: 6 }
          ]
        },
        {
          name: 'Text',
          fields: [
            { rule: 'required', type: 'string', name: 'textId', id: 1 },
            { rule: 'required', type: 'string', name: 'content', id: 2 },
            { rule: 'optional', type: 'string', name: 'title', id: 3 },
            { rule: 'optional', type: 'string', name: 'description', id: 4 },
            { rule: 'optional', type: 'string', name: 'extInfo', id: 5 }
          ]
        },
        {
          name: 'URL',
          fields: [
            { rule: 'required', type: 'string', name: 'urlId', id: 1 },
            { rule: 'required', type: 'string', name: 'url', id: 2 },
            { rule: 'optional', type: 'string', name: 'title', id: 3 },
            { rule: 'optional', type: 'string', name: 'extInfo', id: 4 }
          ]
        },
        {
          name: 'Data',
          fields: [
            { rule: 'required', type: 'string', name: 'dataId', id: 1 },
            { rule: 'required', type: 'bytes', name: 'content', id: 2 },
            { rule: 'optional', type: 'string', name: 'extInfo', id: 3 }
          ]
        },
        {
          name: 'MsgContent',
          fields: [
            { rule: 'repeated', type: 'Image', name: 'images', id: 1 },
            { rule: 'repeated', type: 'Voice', name: 'voices', id: 2 },
            { rule: 'repeated', type: 'File', name: 'files', id: 3 },
            { rule: 'repeated', type: 'Text', name: 'texts', id: 4 },
            { rule: 'repeated', type: 'URL', name: 'urls', id: 5 },
            { rule: 'repeated', type: 'Data', name: 'datas', id: 6 },
            { rule: 'repeated', type: 'bytes', name: 'extContent', id: 7 }
          ]
        },
        {
          name: 'OneMsg',
          fields: [
            { rule: 'optional', type: 'EChatType', name: 'chatType', id: 1 },
            { rule: 'optional', type: 'string', name: 'fromId', id: 2 },
            { rule: 'optional', type: 'string', name: 'fromName', id: 3 },
            { rule: 'optional', type: 'string', name: 'toId', id: 4 },
            { rule: 'optional', type: 'uint64', name: 'seq', id: 5 },
            { rule: 'required', type: 'MsgContent', name: 'content', id: 6 },
            { rule: 'required', type: 'string', name: 'view', id: 7 },
            { rule: 'optional', type: 'uint64', name: 'serverTime', id: 8 },
            { rule: 'required', type: 'uint64', name: 'sendTime', id: 9 },
            { rule: 'required', type: 'bool', name: 'isRealTime', id: 10 },
            { rule: 'repeated', type: 'string', name: 'options', id: 11 },
            { rule: 'optional', type: 'string', name: 'msgTemplate', id: 12 },
            { rule: 'optional', type: 'uint64', name: 'clientMsgID', id: 13 },
            { rule: 'optional', type: 'string', name: 'notifyText', id: 14 },
            { rule: 'optional', type: 'string', name: 'compatibleText', id: 15 },
            { rule: 'optional', type: 'uint64', name: 'previousSeq', id: 16 },
            { rule: 'optional', type: 'string', name: 'extra', id: 17 }
          ]
        },
        {
          name: 'QueryMsgsRange',
          fields: [
            { rule: 'required', type: 'EChatType', name: 'chatType', id: 1 },
            { rule: 'required', type: 'string', name: 'chatId', id: 2 },
            { rule: 'optional', type: 'uint64', name: 'startSeq', id: 3 },
            { rule: 'optional', type: 'uint64', name: 'endSeq', id: 4 },
            { rule: 'optional', type: 'uint32', name: 'count', id: 5 }
          ]
        },
        {
          name: 'QueryMsgsRangeStatus',
          fields: [
            { rule: 'required', type: 'QueryMsgsRange', name: 'requestRange', id: 1 },
            { rule: 'required', type: 'bool', name: 'needCheckMoreMsgs', id: 2 }
          ]
        },
        {
          name: 'QueryMsgsReq',
          fields: [
            { rule: 'repeated', type: 'QueryMsgsRange', name: 'msgRanges', id: 1 },
            { rule: 'optional', type: 'uint32', name: 'count', id: 2 }
          ]
        },
        {
          name: 'QueryMsgsRsp',
          fields: [
            { rule: 'repeated', type: 'OneMsg', name: 'msgs', id: 1 },
            { rule: 'repeated', type: 'QueryMsgsRangeStatus', name: 'msgsRangeStatus', id: 2 }
          ]
        }
      ],
      enums: [
        {
          name: 'EChatType',
          values: [ { name: 'CHAT_P2P', id: 1 }, { name: 'CHAT_P2G', id: 2 }, { name: 'CHAT_PA', id: 3 } ]
        },
        {
          name: 'EMsgTemplate',
          values: [
            { name: 'MSG_TEMPLATE_SIMPLE_TEXT', id: 1 },
            { name: 'MSG_TEMPLATE_SIMPLE_IMAGE', id: 2 },
            { name: 'MSG_TEMPLATE_SIMPLE_VOICE', id: 3 },
            { name: 'MSG_TEMPLATE_SIMPLE_FILE', id: 4 },
            { name: 'MSG_TEMPLATE_SIMPLE_DATA', id: 5 }
          ]
        }
      ]
    })
    .build(), C = y
    .newBuilder({})
    ['import']({
      package: null,
      options: { java_package: 'com.baidu.im.frame.pb', optimize_for: 'LITE_RUNTIME' },
      messages: [
        {
          name: 'ChatConversation',
          fields: [
            { rule: 'required', type: 'EChatType', name: 'chatType', id: 1 },
            { rule: 'required', type: 'string', name: 'chatId', id: 2 },
            { rule: 'required', type: 'uint64', name: 'lastRecvMsgSeq', id: 3 },
            { rule: 'required', type: 'uint64', name: 'lastRecvMsgTime', id: 4 },
            { rule: 'required', type: 'uint64', name: 'lastReadMsgSeq', id: 5 },
            { rule: 'required', type: 'uint64', name: 'lastReadMsgTime', id: 6 }
          ]
        },
        {
          name: 'ReadAckReq',
          fields: [ { rule: 'repeated', type: 'ChatConversation', name: 'conversations', id: 1 } ]
        },
        { name: 'ReadAckRsp', fields: [] }
      ],
      enums: [
        {
          name: 'EChatType',
          values: [ { name: 'CHAT_P2P', id: 1 }, { name: 'CHAT_P2G', id: 2 }, { name: 'CHAT_PA', id: 3 } ]
        }
      ]
    })
    .build(), k = y
    .newBuilder({})
    ['import']({
      package: null,
      options: { java_package: 'com.baidu.im.frame.pb', optimize_for: 'LITE_RUNTIME' },
      messages: [
        {
          name: 'Image',
          fields: [
            { rule: 'optional', type: 'string', name: 'imageId', id: 1 },
            { rule: 'required', type: 'string', name: 'md5', id: 2 },
            { rule: 'required', type: 'uint32', name: 'size', id: 3 },
            { rule: 'required', type: 'uint32', name: 'width', id: 4 },
            { rule: 'required', type: 'uint32', name: 'height', id: 5 },
            { rule: 'optional', type: 'string', name: 'url', id: 6 },
            { rule: 'optional', type: 'string', name: 'extInfo', id: 7 }
          ]
        },
        {
          name: 'Voice',
          fields: [
            { rule: 'optional', type: 'string', name: 'voiceId', id: 1 },
            { rule: 'required', type: 'string', name: 'md5', id: 2 },
            { rule: 'required', type: 'uint32', name: 'size', id: 3 },
            { rule: 'optional', type: 'uint32', name: 'timeLen', id: 4 },
            { rule: 'optional', type: 'string', name: 'url', id: 5 },
            { rule: 'optional', type: 'string', name: 'extInfo', id: 6 }
          ]
        },
        {
          name: 'File',
          fields: [
            { rule: 'optional', type: 'string', name: 'fileId', id: 1 },
            { rule: 'required', type: 'string', name: 'md5', id: 2 },
            { rule: 'required', type: 'uint32', name: 'size', id: 3 },
            { rule: 'optional', type: 'string', name: 'fileUrl', id: 4 },
            { rule: 'required', type: 'string', name: 'name', id: 5 },
            { rule: 'optional', type: 'string', name: 'extInfo', id: 6 }
          ]
        },
        {
          name: 'Text',
          fields: [
            { rule: 'required', type: 'string', name: 'textId', id: 1 },
            { rule: 'required', type: 'string', name: 'content', id: 2 },
            { rule: 'optional', type: 'string', name: 'title', id: 3 },
            { rule: 'optional', type: 'string', name: 'description', id: 4 },
            { rule: 'optional', type: 'string', name: 'extInfo', id: 5 }
          ]
        },
        {
          name: 'URL',
          fields: [
            { rule: 'required', type: 'string', name: 'urlId', id: 1 },
            { rule: 'required', type: 'string', name: 'url', id: 2 },
            { rule: 'optional', type: 'string', name: 'title', id: 3 },
            { rule: 'optional', type: 'string', name: 'extInfo', id: 4 }
          ]
        },
        {
          name: 'Data',
          fields: [
            { rule: 'required', type: 'string', name: 'dataId', id: 1 },
            { rule: 'required', type: 'bytes', name: 'content', id: 2 },
            { rule: 'optional', type: 'string', name: 'extInfo', id: 3 }
          ]
        },
        {
          name: 'MsgContent',
          fields: [
            { rule: 'repeated', type: 'Image', name: 'images', id: 1 },
            { rule: 'repeated', type: 'Voice', name: 'voices', id: 2 },
            { rule: 'repeated', type: 'File', name: 'files', id: 3 },
            { rule: 'repeated', type: 'Text', name: 'texts', id: 4 },
            { rule: 'repeated', type: 'URL', name: 'urls', id: 5 },
            { rule: 'repeated', type: 'Data', name: 'datas', id: 6 },
            { rule: 'repeated', type: 'bytes', name: 'extContent', id: 7 }
          ]
        },
        {
          name: 'OneMsg',
          fields: [
            { rule: 'optional', type: 'EChatType', name: 'chatType', id: 1 },
            { rule: 'optional', type: 'string', name: 'fromId', id: 2 },
            { rule: 'optional', type: 'string', name: 'fromName', id: 3 },
            { rule: 'optional', type: 'string', name: 'toId', id: 4 },
            { rule: 'optional', type: 'uint64', name: 'seq', id: 5 },
            { rule: 'required', type: 'MsgContent', name: 'content', id: 6 },
            { rule: 'required', type: 'string', name: 'view', id: 7 },
            { rule: 'optional', type: 'uint64', name: 'serverTime', id: 8 },
            { rule: 'required', type: 'uint64', name: 'sendTime', id: 9 },
            { rule: 'required', type: 'bool', name: 'isRealTime', id: 10 },
            { rule: 'repeated', type: 'string', name: 'options', id: 11 },
            { rule: 'optional', type: 'string', name: 'msgTemplate', id: 12 },
            { rule: 'optional', type: 'uint64', name: 'clientMsgID', id: 13 },
            { rule: 'optional', type: 'string', name: 'notifyText', id: 14 },
            { rule: 'optional', type: 'string', name: 'compatibleText', id: 15 },
            { rule: 'optional', type: 'uint64', name: 'previousSeq', id: 16 },
            { rule: 'optional', type: 'string', name: 'extra', id: 17 }
          ]
        },
        { name: 'UploadSuccessReq', fields: [ { rule: 'repeated', type: 'string', name: 'fid', id: 1 } ] },
        { name: 'UploadSuccessRsp', fields: [] },
        { name: 'SendMsgReq', fields: [ { rule: 'required', type: 'OneMsg', name: 'msg', id: 1 } ] },
        {
          name: 'SendMsgRsp',
          fields: [
            { rule: 'optional', type: 'uint64', name: 'seq', id: 1 },
            { rule: 'optional', type: 'uint64', name: 'serverTime', id: 2 },
            { rule: 'optional', type: 'uint64', name: 'previousSeq', id: 3 }
          ]
        }
      ],
      enums: [
        {
          name: 'EChatType',
          values: [ { name: 'CHAT_P2P', id: 1 }, { name: 'CHAT_P2G', id: 2 }, { name: 'CHAT_PA', id: 3 } ]
        },
        {
          name: 'EMsgTemplate',
          values: [
            { name: 'MSG_TEMPLATE_SIMPLE_TEXT', id: 1 },
            { name: 'MSG_TEMPLATE_SIMPLE_IMAGE', id: 2 },
            { name: 'MSG_TEMPLATE_SIMPLE_VOICE', id: 3 },
            { name: 'MSG_TEMPLATE_SIMPLE_FILE', id: 4 },
            { name: 'MSG_TEMPLATE_SIMPLE_DATA', id: 5 }
          ]
        }
      ]
    })
    .build(), L = y
    .newBuilder({})
    ['import']({
      package: null,
      options: { java_package: 'com.baidu.im.frame.pb', optimize_for: 'LITE_RUNTIME' },
      messages: [
        { name: 'UploadSuccessReq', fields: [ { rule: 'repeated', type: 'string', name: 'fid', id: 1 } ] },
        { name: 'UploadSuccessRsp', fields: [] }
      ]
    })
    .build(), A = function(e, t) {
    var n = e = {},
      r = {
        pro_send_msg: [ [ 'Send', [ 'SendMsgReq', 'SendMsgRsp' ] ] ],
        pro_query_msgs: [ [ 'QueryMsgs', [ 'QueryMsgsReq', 'QueryMsgsRsp' ] ] ],
        pro_query_active_contacts: [
          [ 'QueryActiveContacts', [ 'QueryActiveContactsReq', 'QueryActiveContactsRsp' ] ]
        ],
        pro_read_ack: [ [ 'ReadAck', [ 'ReadAckReq', 'ReadAckRsp' ] ] ],
        pro_get_upload_sign: [ [ 'GetUploadSign', [ 'GetUploadSignReq', 'GetUploadSignRsp' ] ] ],
        pro_get_download_sign: [ [ 'GetDownloadSign', [ 'GetDownloadSignReq', 'GetDownloadSignRsp' ] ] ],
        pro_upload_success: [ [ 'UploadSuccess', [ 'UploadSuccessReq', 'UploadSuccessRsp' ] ] ],
        obj_im_push_data: [ 'ImPushData' ],
        obj_one_msg: [ 'OneMsg' ],
        pro_msg_recv_ack_notify: [ 'MsgRecvAckNotify' ]
      },
      i = {
        obj_im_push_data: b,
        obj_one_msg: w,
        pro_get_download_sign: E,
        pro_get_upload_sign: S,
        pro_msg_recv_ack_notify: x,
        pro_query_active_contacts: T,
        pro_query_msgs: N,
        pro_read_ack: C,
        pro_send_msg: k,
        pro_upload_success: L
      };
    for (var s in r)
      r.hasOwnProperty(s) && i.hasOwnProperty(s) && r[s].forEach(function(e) {
          typeof e == 'string' ? n[e] = i[s][e] : n[e[0]] = [ i[s][e[1][0]], i[s][e[1][1]] ];
        });
    return e;
  }(A, b), O = y
    .newBuilder({})
    ['import']({
      package: null,
      options: { java_package: 'com.baidu.im.frame.pb', optimize_for: 'LITE_RUNTIME' },
      messages: [
        {
          name: 'BizDownPackage',
          fields: [
            { rule: 'required', type: 'EPacketType', name: 'packetType', id: 1 },
            { rule: 'optional', type: 'uint32', name: 'bizCode', id: 2 },
            { rule: 'optional', type: 'bytes', name: 'bizData', id: 3 },
            { rule: 'optional', type: 'uint32', name: 'chunkId', id: 4, options: { default: 0 } }
          ]
        },
        {
          name: 'DownPacket',
          fields: [
            { rule: 'optional', type: 'string', name: 'sessionId', id: 1 },
            { rule: 'required', type: 'uint32', name: 'seq', id: 2 },
            { rule: 'required', type: 'int32', name: 'channelCode', id: 3 },
            { rule: 'optional', type: 'uint64', name: 'uid', id: 4 },
            { rule: 'optional', type: 'uint32', name: 'appId', id: 5 },
            { rule: 'optional', type: 'BizDownPackage', name: 'bizPackage', id: 6 }
          ]
        }
      ],
      enums: [
        {
          name: 'EPacketType',
          values: [
            { name: 'REQUEST', id: 1 },
            { name: 'RESPONSE', id: 2 },
            { name: 'NOTIFYCATION', id: 3 },
            { name: 'CUSTOM', id: 4 }
          ]
        }
      ]
    })
    .build(), M = y
    .newBuilder({})
    ['import']({
      package: null,
      options: { java_package: 'com.baidu.im.frame.pb', optimize_for: 'LITE_RUNTIME' },
      messages: [
        {
          name: 'KV',
          fields: [
            { rule: 'required', type: 'string', name: 'key', id: 1 },
            { rule: 'required', type: 'string', name: 'data', id: 2 }
          ]
        },
        {
          name: 'InformDesc',
          fields: [
            { rule: 'required', type: 'uint32', name: 'builderId', id: 1 },
            { rule: 'repeated', type: 'KV', name: 'builderArgs', id: 2 },
            { rule: 'required', type: 'uint32', name: 'openType', id: 3 },
            { rule: 'repeated', type: 'KV', name: 'openArgs', id: 4 }
          ]
        },
        {
          name: 'InformMessage',
          fields: [
            { rule: 'optional', type: 'string', name: 'title', id: 1 },
            { rule: 'required', type: 'string', name: 'description', id: 2 },
            { rule: 'repeated', type: 'InformDesc', name: 'imformDescs', id: 3 },
            { rule: 'repeated', type: 'KV', name: 'customContents', id: 4 }
          ]
        }
      ]
    })
    .build(), _ = y
    .newBuilder({})
    ['import']({
      package: null,
      options: { java_package: 'com.baidu.im.frame.pb', optimize_for: 'LITE_RUNTIME' },
      messages: [
        {
          name: 'KV',
          fields: [
            { rule: 'required', type: 'string', name: 'key', id: 1 },
            { rule: 'required', type: 'string', name: 'data', id: 2 }
          ]
        },
        {
          name: 'NormalMessage',
          fields: [
            { rule: 'optional', type: 'uint32', name: 'contentType', id: 1 },
            { rule: 'required', type: 'bytes', name: 'content', id: 2 },
            { rule: 'repeated', type: 'KV', name: 'customContents', id: 3 }
          ]
        }
      ]
    })
    .build(), D = y
    .newBuilder({})
    ['import']({
      package: null,
      options: { java_package: 'com.baidu.im.frame.pb', optimize_for: 'LITE_RUNTIME' },
      messages: [
        {
          name: 'KV',
          fields: [
            { rule: 'required', type: 'string', name: 'key', id: 1 },
            { rule: 'required', type: 'string', name: 'data', id: 2 }
          ]
        },
        {
          name: 'InformDesc',
          fields: [
            { rule: 'required', type: 'uint32', name: 'builderId', id: 1 },
            { rule: 'repeated', type: 'KV', name: 'builderArgs', id: 2 },
            { rule: 'required', type: 'uint32', name: 'openType', id: 3 },
            { rule: 'repeated', type: 'KV', name: 'openArgs', id: 4 }
          ]
        },
        {
          name: 'InformMessage',
          fields: [
            { rule: 'optional', type: 'string', name: 'title', id: 1 },
            { rule: 'required', type: 'string', name: 'description', id: 2 },
            { rule: 'repeated', type: 'InformDesc', name: 'imformDescs', id: 3 },
            { rule: 'repeated', type: 'KV', name: 'customContents', id: 4 }
          ]
        },
        {
          name: 'NormalMessage',
          fields: [
            { rule: 'optional', type: 'uint32', name: 'contentType', id: 1 },
            { rule: 'required', type: 'bytes', name: 'content', id: 2 },
            { rule: 'repeated', type: 'KV', name: 'customContents', id: 3 }
          ]
        },
        {
          name: 'NotifyMessage',
          fields: [
            { rule: 'required', type: 'ENotifyType', name: 'notifyType', id: 1 },
            { rule: 'required', type: 'bytes', name: 'notifyData', id: 2 }
          ]
        },
        {
          name: 'PushData',
          fields: [
            { rule: 'required', type: 'EMessageType', name: 'messageType', id: 1 },
            { rule: 'optional', type: 'NormalMessage', name: 'normalMessage', id: 2 },
            { rule: 'optional', type: 'NotifyMessage', name: 'sysNotifyMessage', id: 3 }
          ]
        }
      ],
      enums: [
        { name: 'EMessageType', values: [ { name: 'NORMAL_MSG', id: 1 }, { name: 'SYS_NOTIFY_MSG', id: 2 } ] },
        {
          name: 'ENotifyType',
          values: [
            { name: 'LOGOUT_NOTIFY', id: 1 },
            { name: 'CONFIG_CHANGED_NOTIFY', id: 2 },
            { name: 'UPLOAD_LOG_NOTIFY', id: 3 }
          ]
        }
      ]
    })
    .build(), P = y
    .newBuilder({})
    ['import']({
      package: null,
      options: { java_package: 'com.baidu.im.frame.pb', optimize_for: 'LITE_RUNTIME' },
      messages: [
        {
          name: 'BizUpPackage',
          fields: [
            { rule: 'required', type: 'EPacketType', name: 'packetType', id: 1 },
            { rule: 'optional', type: 'bytes', name: 'busiData', id: 2 },
            { rule: 'optional', type: 'uint32', name: 'chunkId', id: 3, options: { default: 0 } }
          ]
        },
        {
          name: 'BUAInfo',
          fields: [
            { rule: 'optional', type: 'string', name: 'deviceToken', id: 1 },
            { rule: 'optional', type: 'ENetworkType', name: 'network', id: 2 },
            { rule: 'optional', type: 'EAPNInfo', name: 'apn', id: 3 },
            { rule: 'optional', type: 'string', name: 'osVer', id: 4 },
            { rule: 'optional', type: 'string', name: 'sdkVer', id: 5 }
          ]
        },
        {
          name: 'BUA',
          fields: [
            { rule: 'optional', type: 'string', name: 'appVer', id: 1 },
            { rule: 'optional', type: 'uint32', name: 'mem', id: 2 },
            { rule: 'optional', type: 'uint32', name: 'sdCard', id: 3 },
            { rule: 'optional', type: 'BUAInfo', name: 'buaInfo', id: 4 }
          ]
        },
        {
          name: 'UpPacket',
          fields: [
            { rule: 'optional', type: 'string', name: 'sessionId', id: 1 },
            { rule: 'required', type: 'string', name: 'serviceName', id: 2 },
            { rule: 'required', type: 'string', name: 'methodName', id: 3 },
            { rule: 'required', type: 'uint32', name: 'seq', id: 4 },
            { rule: 'optional', type: 'uint64', name: 'uid', id: 5 },
            { rule: 'optional', type: 'uint32', name: 'appId', id: 6 },
            { rule: 'optional', type: 'BUA', name: 'bua', id: 7 },
            { rule: 'required', type: 'bool', name: 'sysPackage', id: 8 },
            { rule: 'required', type: 'BizUpPackage', name: 'bizPackage', id: 9 }
          ]
        }
      ],
      enums: [
        {
          name: 'EPacketType',
          values: [
            { name: 'REQUEST', id: 1 },
            { name: 'RESPONSE', id: 2 },
            { name: 'NOTIFYCATION', id: 3 },
            { name: 'CUSTOM', id: 4 }
          ]
        },
        {
          name: 'ENetworkType',
          values: [
            { name: 'APN_WWW', id: 1 },
            { name: 'APN_WIFI', id: 2 },
            { name: 'APN_2G', id: 3 },
            { name: 'APN_3G', id: 4 },
            { name: 'APN_4G', id: 5 },
            { name: 'APN_UNKNOWN', id: 6 }
          ]
        },
        {
          name: 'EAPNInfo',
          values: [
            { name: 'CHINA_MOBILE', id: 1 },
            { name: 'CHINA_UNICOM', id: 2 },
            { name: 'CHINA_TELECOM', id: 3 },
            { name: 'OTHER', id: 4 },
            { name: 'NETWORK_UNKNOWN', id: 5 }
          ]
        }
      ]
    })
    .build(), H = y
    .newBuilder({})
    ['import']({
      package: null,
      options: { java_package: 'com.baidu.im.frame.pb', optimize_for: 'LITE_RUNTIME' },
      messages: [
        {
          name: 'HeartbeatInfo',
          fields: [
            { rule: 'optional', type: 'uint32', name: 'appId', id: 1 },
            { rule: 'optional', type: 'string', name: 'sessionId', id: 2 },
            { rule: 'optional', type: 'bool', name: 'background', id: 3 }
          ]
        },
        {
          name: 'HeartbeatReq',
          fields: [
            { rule: 'optional', type: 'string', name: 'channelKey', id: 1 },
            { rule: 'optional', type: 'bool', name: 'background', id: 2 },
            { rule: 'repeated', type: 'HeartbeatInfo', name: 'info', id: 3 },
            { rule: 'optional', type: 'bytes', name: 'extra', id: 4 }
          ]
        },
        { name: 'HeartbeatResp', fields: [ { rule: 'optional', type: 'bytes', name: 'extra', id: 1 } ] }
      ]
    })
    .build(), B = y
    .newBuilder({})
    ['import']({
      package: null,
      options: { java_package: 'com.baidu.im.frame.pb', optimize_for: 'LITE_RUNTIME' },
      messages: [
        {
          name: 'PushOneMsg',
          fields: [
            { rule: 'required', type: 'uint64', name: 'msgId', id: 1 },
            { rule: 'required', type: 'EConfirmMode', name: 'confirmMode', id: 2 },
            { rule: 'optional', type: 'bytes', name: 'onlineMsg', id: 3 },
            { rule: 'optional', type: 'bytes', name: 'offlineMsg', id: 4 },
            { rule: 'optional', type: 'EPacketType', name: 'packetType', id: 5 },
            { rule: 'optional', type: 'uint64', name: 'ackId', id: 6 }
          ]
        },
        { name: 'PushMsgs', fields: [ { rule: 'repeated', type: 'PushOneMsg', name: 'msgs', id: 1 } ] }
      ],
      enums: [
        {
          name: 'EPacketType',
          values: [
            { name: 'REQUEST', id: 1 },
            { name: 'RESPONSE', id: 2 },
            { name: 'NOTIFYCATION', id: 3 },
            { name: 'CUSTOM', id: 4 }
          ]
        },
        { name: 'EConfirmMode', values: [ { name: 'ALWAYS_YES', id: 1 }, { name: 'ALWAYS_NO', id: 2 } ] }
      ]
    })
    .build(), j = y
    .newBuilder({})
    ['import']({
      package: null,
      options: { java_package: 'com.baidu.im.frame.pb', optimize_for: 'LITE_RUNTIME' },
      messages: [
        {
          name: 'PushMsgStatus',
          fields: [
            { rule: 'required', type: 'uint64', name: 'ackId', id: 1 },
            { rule: 'optional', type: 'EPushMsgStatus', name: 'onlineStatus', id: 2 },
            { rule: 'optional', type: 'EPushMsgStatus', name: 'offlineStatus', id: 3 }
          ]
        },
        {
          name: 'PushMsgConfirmReq',
          fields: [ { rule: 'repeated', type: 'PushMsgStatus', name: 'msgStatus', id: 1 } ]
        },
        { name: 'PushMsgConfirmRsp', fields: [] }
      ],
      enums: [
        {
          name: 'EPushMsgStatus',
          values: [
            { name: 'STATUS_SUCCESS', id: 1 },
            { name: 'STATUS_FAILED', id: 2 },
            { name: 'STATUS_APP_NOT_EXIST', id: 3 }
          ]
        }
      ]
    })
    .build(), F = y
    .newBuilder({})
    ['import']({
      package: null,
      options: { java_package: 'com.baidu.im.frame.pb', optimize_for: 'LITE_RUNTIME' },
      messages: [
        {
          name: 'DeviceInfo',
          fields: [
            { rule: 'required', type: 'string', name: 'deviceToken', id: 1 },
            { rule: 'required', type: 'uint32', name: 'deviceTypeId', id: 2 },
            { rule: 'optional', type: 'string', name: 'deviceName', id: 3 },
            { rule: 'optional', type: 'string', name: 'imei', id: 4 },
            { rule: 'optional', type: 'string', name: 'sdCard', id: 5 },
            { rule: 'required', type: 'EPlatformType', name: 'platform', id: 6 },
            { rule: 'optional', type: 'uint32', name: 'regTime', id: 7 }
          ]
        },
        {
          name: 'DeviceTypeInfo',
          fields: [
            { rule: 'required', type: 'EPlatformType', name: 'platform', id: 1 },
            { rule: 'optional', type: 'string', name: 'model', id: 2 },
            { rule: 'optional', type: 'string', name: 'os', id: 3 },
            { rule: 'optional', type: 'string', name: 'network', id: 4 },
            { rule: 'optional', type: 'string', name: 'sdDouble', id: 5 },
            { rule: 'optional', type: 'string', name: 'display', id: 6 },
            { rule: 'optional', type: 'string', name: 'manu', id: 7 },
            { rule: 'optional', type: 'string', name: 'screenSize', id: 8 }
          ]
        },
        {
          name: 'RegAppReq',
          fields: [
            { rule: 'required', type: 'string', name: 'apiKey', id: 1 },
            { rule: 'required', type: 'string', name: 'channelKey', id: 2 },
            { rule: 'required', type: 'DeviceInfo', name: 'deviceInfo', id: 3 },
            { rule: 'required', type: 'string', name: 'sign', id: 4 },
            { rule: 'required', type: 'DeviceTypeInfo', name: 'deviceTypeInfo', id: 5 }
          ]
        },
        {
          name: 'RegAppRsp',
          fields: [
            { rule: 'optional', type: 'uint32', name: 'deviceTypeId', id: 1 },
            { rule: 'required', type: 'string', name: 'deviceId', id: 2 }
          ]
        }
      ],
      enums: [
        {
          name: 'EPlatformType',
          values: [
            { name: 'WINDOWS', id: 1 },
            { name: 'MAC', id: 2 },
            { name: '_NIX', id: 4 },
            { name: 'ANDROID', id: 8 },
            { name: 'IOS', id: 16 },
            { name: 'WP', id: 32 },
            { name: 'WEB', id: 64 },
            { name: 'WINDOW_MOBILE', id: 128 }
          ]
        }
      ]
    })
    .build(), I = y
    .newBuilder({})
    ['import']({
      package: null,
      options: { java_package: 'com.baidu.im.frame.pb', optimize_for: 'LITE_RUNTIME' },
      messages: [
        {
          name: 'RelocateServerIPInfo',
          fields: [
            { rule: 'required', type: 'ERelocateType', name: 'relocateType', id: 1 },
            { rule: 'required', type: 'uint32', name: 'serverIp', id: 2 },
            { rule: 'required', type: 'uint32', name: 'serverPort', id: 3 }
          ]
        },
        {
          name: 'RegChannelReq',
          fields: [
            { rule: 'optional', type: 'string', name: 'channelKey', id: 1 },
            { rule: 'optional', type: 'string', name: 'extraInfo', id: 2 },
            { rule: 'optional', type: 'string', name: 'deviceToken', id: 3 }
          ]
        },
        {
          name: 'RegChannelRsp',
          fields: [
            { rule: 'required', type: 'string', name: 'channelKey', id: 1 },
            { rule: 'optional', type: 'RelocateServerIPInfo', name: 'relocateIP', id: 2 }
          ]
        }
      ],
      enums: [
        {
          name: 'ERelocateType',
          values: [
            { name: 'RELOCATE_NULL', id: 0 },
            { name: 'RELOCATE_DEBUG', id: 1 },
            { name: 'RELOCATE_BEST', id: 2 }
          ]
        }
      ]
    })
    .build(), q = y
    .newBuilder({})
    ['import']({
      package: null,
      options: { java_package: 'com.baidu.im.frame.pb', optimize_for: 'LITE_RUNTIME' },
      messages: [
        {
          name: 'KV',
          fields: [
            { rule: 'required', type: 'string', name: 'key', id: 1 },
            { rule: 'required', type: 'string', name: 'data', id: 2 }
          ]
        },
        {
          name: 'LoginReq',
          fields: [
            { rule: 'required', type: 'string', name: 'channelKey', id: 1 },
            { rule: 'optional', type: 'string', name: 'loginName', id: 2 },
            { rule: 'optional', type: 'string', name: 'password', id: 3 },
            { rule: 'optional', type: 'string', name: 'token', id: 4 },
            { rule: 'repeated', type: 'KV', name: 'args', id: 5 },
            { rule: 'optional', type: 'bytes', name: 'extra', id: 6 }
          ]
        },
        { name: 'LoginResp', fields: [ { rule: 'optional', type: 'bytes', name: 'extra', id: 1 } ] }
      ]
    })
    .build(), R = y
    .newBuilder({})
    ['import']({
      package: null,
      options: { java_package: 'com.baidu.im.frame.pb', optimize_for: 'LITE_RUNTIME' },
      messages: [
        { name: 'LogoutReq', fields: [ { rule: 'repeated', type: 'bytes', name: 'extra', id: 1 } ] },
        { name: 'LogoutResp', fields: [ { rule: 'repeated', type: 'bytes', name: 'extra', id: 1 } ] }
      ]
    })
    .build(), U = function(e, t) {
    var n = e = {},
      r = {
        obj_up_packet: [ 'UpPacket' ],
        obj_down_packet: [ 'DownPacket' ],
        pro_reg_channel: [ [ 'RegChannel', [ 'RegChannelReq', 'RegChannelRsp' ] ] ],
        pro_reg_app: [ [ 'RegApp', [ 'RegAppReq', 'RegAppRsp' ] ] ],
        pro_user_login: [ [ 'Login', [ 'LoginReq', 'LoginResp' ] ] ],
        pro_user_logout: [ [ 'Logout', [ 'LogoutReq', 'LogoutResp' ] ] ],
        pro_heartbeat: [ [ 'Heartbeat', [ 'HeartbeatReq', 'HeartbeatResp' ] ] ],
        pro_push: [ [ 'Push', [ 'PushOneMsg', 'PushMsgs' ] ] ],
        pro_push_confirm: [ [ 'PushConfirm', [ 'PushMsgConfirmReq', 'PushMsgConfirmRsp' ] ] ],
        obj_push_data: [ 'PushData' ],
        obj_inform_message: [ 'InformMessage' ],
        obj_normal_message: [ 'NormalMessage' ]
      },
      i = {
        obj_down_packet: O,
        obj_inform_message: M,
        obj_normal_message: _,
        obj_push_data: D,
        obj_up_packet: P,
        pro_heartbeat: H,
        pro_push: B,
        pro_push_confirm: j,
        pro_reg_app: F,
        pro_reg_channel: I,
        pro_user_login: q,
        pro_user_logout: R
      };
    for (var s in r)
      r.hasOwnProperty(s) && i.hasOwnProperty(s) && r[s].forEach(function(e) {
          typeof e == 'string' ? n[e] = i[s][e] : n[e[0]] = [ i[s][e[1][0]], i[s][e[1][1]] ];
        });
    return e;
  }(U, O), function(e, t) {
    typeof exports == 'object' ? module.exports = exports = t() : z = function() {
        return typeof t == 'function' ? t() : t;
      }();
  }(this, function() {
    var e = e || function(e, t) {
        var n = {},
          r = n.lib = {},
          i = r.Base = function() {
            function e() {}
            return {
              extend: function(t) {
                e.prototype = this;
                var n = new e();
                return t && n.mixIn(t), n.hasOwnProperty('init') || (n.init = function() {
                    n.$super.init.apply(this, arguments);
                  }), n.init.prototype = n, n.$super = this, n;
              },
              create: function() {
                var e = this.extend();
                return e.init.apply(e, arguments), e;
              },
              init: function() {},
              mixIn: function(e) {
                for (var t in e)
                  e.hasOwnProperty(t) && (this[t] = e[t]);
                e.hasOwnProperty('toString') && (this.toString = e.toString);
              },
              clone: function() {
                return this.init.prototype.extend(this);
              }
            };
          }(),
          s = r.WordArray = i.extend({
            init: function(e, n) {
              e = this.words = e || [], n != t ? this.sigBytes = n : this.sigBytes = e.length * 4;
            },
            toString: function(e) {
              return (e || u).stringify(this);
            },
            concat: function(e) {
              var t = this.words, n = e.words, r = this.sigBytes, i = e.sigBytes;
              this.clamp();
              if (r % 4)
                for (var s = 0; s < i; s++) {
                  var o = n[s >>> 2] >>> 24 - s % 4 * 8 & 255;
                  t[r + s >>> 2] |= o << 24 - (r + s) % 4 * 8;
                }
              else
                for (var s = 0; s < i; s += 4)
                  t[r + s >>> 2] = n[s >>> 2];
              return this.sigBytes += i, this;
            },
            clamp: function() {
              var t = this.words, n = this.sigBytes;
              t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4);
            },
            clone: function() {
              var e = i.clone.call(this);
              return e.words = this.words.slice(0), e;
            },
            random: function(t) {
              var n = [],
                r = function(t) {
                  var t = t, n = 987654321, r = 4294967295;
                  return function() {
                    n = 36969 * (n & 65535) + (n >> 16) & r, t = 18000 * (t & 65535) + (t >> 16) & r;
                    var i = (n << 16) + t & r;
                    return i /= 4294967296, i += 0.5, i * (e.random() > 0.5 ? 1 : -1);
                  };
                };
              for (var i = 0, o; i < t; i += 4) {
                var u = r((o || e.random()) * 4294967296);
                o = u() * 987654071, n.push(u() * 4294967296 | 0);
              }
              return new s.init(n, t);
            }
          }),
          o = n.enc = {},
          u = o.Hex = {
            stringify: function(e) {
              var t = e.words, n = e.sigBytes, r = [];
              for (var i = 0; i < n; i++) {
                var s = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                r.push((s >>> 4).toString(16)), r.push((s & 15).toString(16));
              }
              return r.join('');
            },
            parse: function(e) {
              var t = e.length, n = [];
              for (var r = 0; r < t; r += 2)
                n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4;
              return new s.init(n, t / 2);
            }
          },
          a = o.Latin1 = {
            stringify: function(e) {
              var t = e.words, n = e.sigBytes, r = [];
              for (var i = 0; i < n; i++) {
                var s = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                r.push(String.fromCharCode(s));
              }
              return r.join('');
            },
            parse: function(e) {
              var t = e.length, n = [];
              for (var r = 0; r < t; r++)
                n[r >>> 2] |= (e.charCodeAt(r) & 255) << 24 - r % 4 * 8;
              return new s.init(n, t);
            }
          },
          f = o.Utf8 = {
            stringify: function(e) {
              try {
                return decodeURIComponent(escape(a.stringify(e)));
              } catch (t) {
                throw new Error('Malformed UTF-8 data');
              }
            },
            parse: function(e) {
              return a.parse(unescape(encodeURIComponent(e)));
            }
          },
          l = r.BufferedBlockAlgorithm = i.extend({
            reset: function() {
              this._data = new s.init(), this._nDataBytes = 0;
            },
            _append: function(e) {
              typeof e == 'string' && (e = f.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
            },
            _process: function(t) {
              var n = this._data, r = n.words, i = n.sigBytes, o = this.blockSize, u = o * 4, a = i / u;
              t ? a = e.ceil(a) : a = e.max((a | 0) - this._minBufferSize, 0);
              var f = a * o, l = e.min(f * 4, i);
              if (f) {
                for (var c = 0; c < f; c += o)
                  this._doProcessBlock(r, c);
                var h = r.splice(0, f);
                n.sigBytes -= l;
              }
              return new s.init(h, l);
            },
            clone: function() {
              var e = i.clone.call(this);
              return e._data = this._data.clone(), e;
            },
            _minBufferSize: 0
          }),
          c = r.Hasher = l.extend({
            cfg: i.extend(),
            init: function(e) {
              this.cfg = this.cfg.extend(e), this.reset();
            },
            reset: function() {
              l.reset.call(this), this._doReset();
            },
            update: function(e) {
              return this._append(e), this._process(), this;
            },
            finalize: function(e) {
              e && this._append(e);
              var t = this._doFinalize();
              return t;
            },
            blockSize: 16,
            _createHelper: function(e) {
              return function(t, n) {
                return new e.init(n).finalize(t);
              };
            },
            _createHmacHelper: function(e) {
              return function(t, n) {
                return new h.HMAC.init(e, n).finalize(t);
              };
            }
          }),
          h = n.algo = {};
        return n;
      }(Math);
    return e;
  }), function(e, t) {
    typeof exports == 'object' ? module.exports = exports = t(core) : W = function(e) {
        return typeof t == 'function' ? t(e) : t;
      }(z);
  }(this, function(e) {
    return function(t) {
      var n = e,
        r = n.lib,
        i = r.Base,
        s = r.WordArray,
        o = n.x64 = {},
        u = o.Word = i.extend({
          init: function(e, t) {
            this.high = e, this.low = t;
          }
        }),
        a = o.WordArray = i.extend({
          init: function(e, n) {
            e = this.words = e || [], n != t ? this.sigBytes = n : this.sigBytes = e.length * 8;
          },
          toX32: function() {
            var e = this.words, t = e.length, n = [];
            for (var r = 0; r < t; r++) {
              var i = e[r];
              n.push(i.high), n.push(i.low);
            }
            return s.create(n, this.sigBytes);
          },
          clone: function() {
            var e = i.clone.call(this), t = e.words = this.words.slice(0), n = t.length;
            for (var r = 0; r < n; r++)
              t[r] = t[r].clone();
            return e;
          }
        });
    }(), e;
  }), function(e, t) {
    typeof exports == 'object' ? module.exports = exports = t(core) : X = function(e) {
        return typeof t == 'function' ? t(e) : t;
      }(z);
  }(this, function(e) {
    return function() {
      if (typeof ArrayBuffer != 'function')
        return;
      var t = e,
        n = t.lib,
        r = n.WordArray,
        i = r.init,
        s = r.init = function(e) {
          e instanceof ArrayBuffer && (e = new Uint8Array(e));
          if (
            e instanceof Int8Array || typeof Uint8ClampedArray != 'undefined' && e instanceof Uint8ClampedArray ||
              e instanceof Int16Array ||
              e instanceof Uint16Array ||
              e instanceof Int32Array ||
              e instanceof Uint32Array ||
              e instanceof Float32Array ||
              e instanceof Float64Array
          )
            e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          if (e instanceof Uint8Array) {
            var t = e.byteLength, n = [];
            for (var r = 0; r < t; r++)
              n[r >>> 2] |= e[r] << 24 - r % 4 * 8;
            i.call(this, n, t);
          } else
            i.apply(this, arguments);
        };
      s.prototype = r;
    }(), e.lib.WordArray;
  }), function(e, t) {
    typeof exports == 'object' ? module.exports = exports = t(core) : V = function(e) {
        return typeof t == 'function' ? t(e) : t;
      }(z);
  }(this, function(e) {
    return function() {
      function o(e) {
        return e << 8 & 4278255360 | e >>> 8 & 16711935;
      }
      var t = e,
        n = t.lib,
        r = n.WordArray,
        i = t.enc,
        s = i.Utf16 = i.Utf16BE = {
          stringify: function(e) {
            var t = e.words, n = e.sigBytes, r = [];
            for (var i = 0; i < n; i += 2) {
              var s = t[i >>> 2] >>> 16 - i % 4 * 8 & 65535;
              r.push(String.fromCharCode(s));
            }
            return r.join('');
          },
          parse: function(e) {
            var t = e.length, n = [];
            for (var i = 0; i < t; i++)
              n[i >>> 1] |= e.charCodeAt(i) << 16 - i % 2 * 16;
            return r.create(n, t * 2);
          }
        };
      i.Utf16LE = {
        stringify: function(e) {
          var t = e.words, n = e.sigBytes, r = [];
          for (var i = 0; i < n; i += 2) {
            var s = o(t[i >>> 2] >>> 16 - i % 4 * 8 & 65535);
            r.push(String.fromCharCode(s));
          }
          return r.join('');
        },
        parse: function(e) {
          var t = e.length, n = [];
          for (var i = 0; i < t; i++)
            n[i >>> 1] |= o(e.charCodeAt(i) << 16 - i % 2 * 16);
          return r.create(n, t * 2);
        }
      };
    }(), e.enc.Utf16;
  }), function(e, t) {
    typeof exports == 'object' ? module.exports = exports = t(core) : $ = function(e) {
        return typeof t == 'function' ? t(e) : t;
      }(z);
  }(this, function(e) {
    return function() {
      var t = e,
        n = t.lib,
        r = n.WordArray,
        i = t.enc,
        s = i.Base64 = {
          stringify: function(e) {
            var t = e.words, n = e.sigBytes, r = this._map;
            e.clamp();
            var i = [];
            for (var s = 0; s < n; s += 3) {
              var o = t[s >>> 2] >>> 24 - s % 4 * 8 & 255,
                u = t[s + 1 >>> 2] >>> 24 - (s + 1) % 4 * 8 & 255,
                a = t[s + 2 >>> 2] >>> 24 - (s + 2) % 4 * 8 & 255,
                f = o << 16 | u << 8 | a;
              for (var l = 0; l < 4 && s + l * 0.75 < n; l++)
                i.push(r.charAt(f >>> 6 * (3 - l) & 63));
            }
            var c = r.charAt(64);
            if (c)
              while (i.length % 4)
                i.push(c);
            return i.join('');
          },
          parse: function(e) {
            var t = e.length, n = this._map, i = n.charAt(64);
            if (i) {
              var s = e.indexOf(i);
              s != -1 && (t = s);
            }
            var o = [], u = 0;
            for (var a = 0; a < t; a++)
              if (a % 4) {
                var f = n.indexOf(e.charAt(a - 1)) << a % 4 * 2,
                  l = n.indexOf(e.charAt(a)) >>> 6 - a % 4 * 2,
                  c = f | l;
                o[u >>> 2] |= c << 24 - u % 4 * 8, u++;
              }
            return r.create(o, u);
          },
          _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
        };
    }(), e.enc.Base64;
  }), function(e, t) {
    typeof exports == 'object' ? module.exports = exports = t(core) : J = function(e) {
        return typeof t == 'function' ? t(e) : t;
      }(z);
  }(this, function(e) {
    return function(t) {
      function f(e, t, n, r, i, s, o) {
        var u = e + (t & n | ~t & r) + i + o;
        return (u << s | u >>> 32 - s) + t;
      }
      function l(e, t, n, r, i, s, o) {
        var u = e + (t & r | n & ~r) + i + o;
        return (u << s | u >>> 32 - s) + t;
      }
      function c(e, t, n, r, i, s, o) {
        var u = e + (t ^ n ^ r) + i + o;
        return (u << s | u >>> 32 - s) + t;
      }
      function h(e, t, n, r, i, s, o) {
        var u = e + (n ^ (t | ~r)) + i + o;
        return (u << s | u >>> 32 - s) + t;
      }
      var n = e, r = n.lib, i = r.WordArray, s = r.Hasher, o = n.algo, u = [];
      (function() {
        for (var e = 0; e < 64; e++)
          u[e] = t.abs(t.sin(e + 1)) * 4294967296 | 0;
      })();
      var a = o.MD5 = s.extend({
        _doReset: function() {
          this._hash = new i.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
        },
        _doProcessBlock: function(e, t) {
          for (var n = 0; n < 16; n++) {
            var r = t + n, i = e[r];
            e[r] = (i << 8 | i >>> 24) & 16711935 | (i << 24 | i >>> 8) & 4278255360;
          }
          var s = this._hash.words,
            o = e[t + 0],
            a = e[t + 1],
            p = e[t + 2],
            d = e[t + 3],
            v = e[t + 4],
            m = e[t + 5],
            g = e[t + 6],
            y = e[t + 7],
            b = e[t + 8],
            w = e[t + 9],
            E = e[t + 10],
            S = e[t + 11],
            x = e[t + 12],
            T = e[t + 13],
            N = e[t + 14],
            C = e[t + 15],
            k = s[0],
            L = s[1],
            A = s[2],
            O = s[3];
          k = f(
            k,
            L,
            A,
            O,
            o,
            7,
            u[0]
          ), O = f(O, k, L, A, a, 12, u[1]), A = f(A, O, k, L, p, 17, u[2]), L = f(L, A, O, k, d, 22, u[3]), k = f(k, L, A, O, v, 7, u[4]), O = f(O, k, L, A, m, 12, u[5]), A = f(A, O, k, L, g, 17, u[6]), L = f(L, A, O, k, y, 22, u[7]), k = f(k, L, A, O, b, 7, u[8]), O = f(O, k, L, A, w, 12, u[9]), A = f(A, O, k, L, E, 17, u[10]), L = f(L, A, O, k, S, 22, u[11]), k = f(k, L, A, O, x, 7, u[12]), O = f(O, k, L, A, T, 12, u[13]), A = f(A, O, k, L, N, 17, u[14]), L = f(L, A, O, k, C, 22, u[15]), k = l(k, L, A, O, a, 5, u[16]), O = l(O, k, L, A, g, 9, u[17]), A = l(A, O, k, L, S, 14, u[18]), L = l(L, A, O, k, o, 20, u[19]), k = l(k, L, A, O, m, 5, u[20]), O = l(O, k, L, A, E, 9, u[21]), A = l(A, O, k, L, C, 14, u[22]), L = l(L, A, O, k, v, 20, u[23]), k = l(k, L, A, O, w, 5, u[24]), O = l(O, k, L, A, N, 9, u[25]), A = l(A, O, k, L, d, 14, u[26]), L = l(L, A, O, k, b, 20, u[27]), k = l(k, L, A, O, T, 5, u[28]), O = l(O, k, L, A, p, 9, u[29]), A = l(A, O, k, L, y, 14, u[30]), L = l(L, A, O, k, x, 20, u[31]), k = c(k, L, A, O, m, 4, u[32]), O = c(O, k, L, A, b, 11, u[33]), A = c(A, O, k, L, S, 16, u[34]), L = c(L, A, O, k, N, 23, u[35]), k = c(k, L, A, O, a, 4, u[36]), O = c(O, k, L, A, v, 11, u[37]), A = c(A, O, k, L, y, 16, u[38]), L = c(L, A, O, k, E, 23, u[39]), k = c(k, L, A, O, T, 4, u[40]), O = c(O, k, L, A, o, 11, u[41]), A = c(A, O, k, L, d, 16, u[42]), L = c(L, A, O, k, g, 23, u[43]), k = c(k, L, A, O, w, 4, u[44]), O = c(O, k, L, A, x, 11, u[45]), A = c(A, O, k, L, C, 16, u[46]), L = c(L, A, O, k, p, 23, u[47]), k = h(k, L, A, O, o, 6, u[48]), O = h(O, k, L, A, y, 10, u[49]), A = h(A, O, k, L, N, 15, u[50]), L = h(L, A, O, k, m, 21, u[51]), k = h(k, L, A, O, x, 6, u[52]), O = h(O, k, L, A, d, 10, u[53]), A = h(A, O, k, L, E, 15, u[54]), L = h(L, A, O, k, a, 21, u[55]), k = h(k, L, A, O, b, 6, u[56]), O = h(O, k, L, A, C, 10, u[57]), A = h(A, O, k, L, g, 15, u[58]), L = h(L, A, O, k, T, 21, u[59]), k = h(k, L, A, O, v, 6, u[60]), O = h(O, k, L, A, S, 10, u[61]), A = h(A, O, k, L, p, 15, u[62]), L = h(L, A, O, k, w, 21, u[63]), s[0] = s[0] + k | 0, s[1] = s[1] + L | 0, s[2] = s[2] + A | 0, s[3] = s[3] + O | 0;
        },
        _doFinalize: function() {
          var e = this._data, n = e.words, r = this._nDataBytes * 8, i = e.sigBytes * 8;
          n[i >>> 5] |= 128 << 24 - i % 32;
          var s = t.floor(r / 4294967296), o = r;
          n[(i + 64 >>> 9 << 4) + 15] = (s << 8 | s >>> 24) & 16711935 |
            (s << 24 | s >>> 8) &
              4278255360, n[(i + 64 >>> 9 << 4) + 14] = (o << 8 | o >>> 24) & 16711935 | (o << 24 | o >>> 8) & 4278255360, e.sigBytes = (n.length + 1) * 4, this._process();
          var u = this._hash, a = u.words;
          for (var f = 0; f < 4; f++) {
            var l = a[f];
            a[f] = (l << 8 | l >>> 24) & 16711935 | (l << 24 | l >>> 8) & 4278255360;
          }
          return u;
        },
        clone: function() {
          var e = s.clone.call(this);
          return e._hash = this._hash.clone(), e;
        }
      });
      n.MD5 = s._createHelper(a), n.HmacMD5 = s._createHmacHelper(a);
    }(Math), e.MD5;
  }), function(e, t) {
    typeof exports == 'object' ? module.exports = exports = t(core) : K = function(e) {
        return typeof t == 'function' ? t(e) : t;
      }(z);
  }(this, function(e) {
    return function() {
      var t = e,
        n = t.lib,
        r = n.WordArray,
        i = n.Hasher,
        s = t.algo,
        o = [],
        u = s.SHA1 = i.extend({
          _doReset: function() {
            this._hash = new r.init([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
          },
          _doProcessBlock: function(e, t) {
            var n = this._hash.words, r = n[0], i = n[1], s = n[2], u = n[3], a = n[4];
            for (var f = 0; f < 80; f++) {
              if (f < 16)
                o[f] = e[t + f] | 0;
              else {
                var l = o[f - 3] ^ o[f - 8] ^ o[f - 14] ^ o[f - 16];
                o[f] = l << 1 | l >>> 31;
              }
              var c = (r << 5 | r >>> 27) + a + o[f];
              f < 20
                ? c += (i & s | ~i & u) + 1518500249
                : f < 40
                  ? c += (i ^ s ^ u) + 1859775393
                  : f < 60
                    ? c += (i & s | i & u | s & u) - 1894007588
                    : c += (i ^ s ^ u) - 899497514, a = u, u = s, s = i << 30 | i >>> 2, i = r, r = c;
            }
            n[0] = n[0] + r | 0, n[1] = n[1] + i | 0, n[2] = n[2] + s | 0, n[3] = n[3] + u | 0, n[4] = n[4] + a | 0;
          },
          _doFinalize: function() {
            var e = this._data, t = e.words, n = this._nDataBytes * 8, r = e.sigBytes * 8;
            return t[r >>> 5] |= 128 <<
              24 -
                r %
                  32, t[(r + 64 >>> 9 << 4) + 14] = Math.floor(n / 4294967296), t[(r + 64 >>> 9 << 4) + 15] = n, e.sigBytes = t.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var e = i.clone.call(this);
            return e._hash = this._hash.clone(), e;
          }
        });
      t.SHA1 = i._createHelper(u), t.HmacSHA1 = i._createHmacHelper(u);
    }(), e.SHA1;
  }), function(e, t) {
    typeof exports == 'object' ? module.exports = exports = t(core) : Q = function(e) {
        return typeof t == 'function' ? t(e) : t;
      }(z);
  }(this, function(e) {
    return function(t) {
      var n = e, r = n.lib, i = r.WordArray, s = r.Hasher, o = n.algo, u = [], a = [];
      (function() {
        function e(e) {
          var n = t.sqrt(e);
          for (var r = 2; r <= n; r++)
            if (!(e % r))
              return !1;
          return !0;
        }
        function n(e) {
          return (e - (e | 0)) * 4294967296 | 0;
        }
        var r = 2, i = 0;
        while (i < 64)
          e(r) && (i < 8 && (u[i] = n(t.pow(r, 0.5))), a[i] = n(t.pow(r, 1 / 3)), i++), r++;
      })();
      var f = [],
        l = o.SHA256 = s.extend({
          _doReset: function() {
            this._hash = new i.init(u.slice(0));
          },
          _doProcessBlock: function(e, t) {
            var n = this._hash.words, r = n[0], i = n[1], s = n[2], o = n[3], u = n[4], l = n[5], c = n[6], h = n[7];
            for (var p = 0; p < 64; p++) {
              if (p < 16)
                f[p] = e[t + p] | 0;
              else {
                var d = f[p - 15],
                  v = (d << 25 | d >>> 7) ^ (d << 14 | d >>> 18) ^ d >>> 3,
                  m = f[p - 2],
                  g = (m << 15 | m >>> 17) ^ (m << 13 | m >>> 19) ^ m >>> 10;
                f[p] = v + f[p - 7] + g + f[p - 16];
              }
              var y = u & l ^ ~u & c,
                b = r & i ^ r & s ^ i & s,
                w = (r << 30 | r >>> 2) ^ (r << 19 | r >>> 13) ^ (r << 10 | r >>> 22),
                E = (u << 26 | u >>> 6) ^ (u << 21 | u >>> 11) ^ (u << 7 | u >>> 25),
                S = h + E + y + a[p] + f[p],
                x = w + b;
              h = c, c = l, l = u, u = o + S | 0, o = s, s = i, i = r, r = S + x | 0;
            }
            n[0] = n[0] + r |
              0, n[1] = n[1] + i | 0, n[2] = n[2] + s | 0, n[3] = n[3] + o | 0, n[4] = n[4] + u | 0, n[5] = n[5] + l | 0, n[6] = n[6] + c | 0, n[7] = n[7] + h | 0;
          },
          _doFinalize: function() {
            var e = this._data, n = e.words, r = this._nDataBytes * 8, i = e.sigBytes * 8;
            return n[i >>> 5] |= 128 <<
              24 -
                i %
                  32, n[(i + 64 >>> 9 << 4) + 14] = t.floor(r / 4294967296), n[(i + 64 >>> 9 << 4) + 15] = r, e.sigBytes = n.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var e = s.clone.call(this);
            return e._hash = this._hash.clone(), e;
          }
        });
      n.SHA256 = s._createHelper(l), n.HmacSHA256 = s._createHmacHelper(l);
    }(Math), e.SHA256;
  }), function(e, t, n) {
    typeof exports == 'object' ? module.exports = exports = t(core, sha256) : G = function(e, n) {
        return typeof t == 'function' ? t(e, n) : t;
      }(z, Q);
  }(this, function(e) {
    return function() {
      var t = e,
        n = t.lib,
        r = n.WordArray,
        i = t.algo,
        s = i.SHA256,
        o = i.SHA224 = s.extend({
          _doReset: function() {
            this._hash = new r.init([
              3238371032,
              914150663,
              812702999,
              4144912697,
              4290775857,
              1750603025,
              1694076839,
              3204075428
            ]);
          },
          _doFinalize: function() {
            var e = s._doFinalize.call(this);
            return e.sigBytes -= 4, e;
          }
        });
      t.SHA224 = s._createHelper(o), t.HmacSHA224 = s._createHmacHelper(o);
    }(), e.SHA224;
  }), function(e, t, n) {
    typeof exports == 'object' ? module.exports = exports = t(core, x64_core) : Y = function(e, n) {
        return typeof t == 'function' ? t(e, n) : t;
      }(z, W);
  }(this, function(e) {
    return function() {
      function a() {
        return s.create.apply(s, arguments);
      }
      var t = e,
        n = t.lib,
        r = n.Hasher,
        i = t.x64,
        s = i.Word,
        o = i.WordArray,
        u = t.algo,
        f = [
          a(1116352408, 3609767458),
          a(1899447441, 602891725),
          a(3049323471, 3964484399),
          a(3921009573, 2173295548),
          a(961987163, 4081628472),
          a(1508970993, 3053834265),
          a(2453635748, 2937671579),
          a(2870763221, 3664609560),
          a(3624381080, 2734883394),
          a(310598401, 1164996542),
          a(607225278, 1323610764),
          a(1426881987, 3590304994),
          a(1925078388, 4068182383),
          a(2162078206, 991336113),
          a(2614888103, 633803317),
          a(3248222580, 3479774868),
          a(3835390401, 2666613458),
          a(4022224774, 944711139),
          a(264347078, 2341262773),
          a(604807628, 2007800933),
          a(770255983, 1495990901),
          a(1249150122, 1856431235),
          a(1555081692, 3175218132),
          a(1996064986, 2198950837),
          a(2554220882, 3999719339),
          a(2821834349, 766784016),
          a(2952996808, 2566594879),
          a(3210313671, 3203337956),
          a(3336571891, 1034457026),
          a(3584528711, 2466948901),
          a(113926993, 3758326383),
          a(338241895, 168717936),
          a(666307205, 1188179964),
          a(773529912, 1546045734),
          a(1294757372, 1522805485),
          a(1396182291, 2643833823),
          a(1695183700, 2343527390),
          a(1986661051, 1014477480),
          a(2177026350, 1206759142),
          a(2456956037, 344077627),
          a(2730485921, 1290863460),
          a(2820302411, 3158454273),
          a(3259730800, 3505952657),
          a(3345764771, 106217008),
          a(3516065817, 3606008344),
          a(3600352804, 1432725776),
          a(4094571909, 1467031594),
          a(275423344, 851169720),
          a(430227734, 3100823752),
          a(506948616, 1363258195),
          a(659060556, 3750685593),
          a(883997877, 3785050280),
          a(958139571, 3318307427),
          a(1322822218, 3812723403),
          a(1537002063, 2003034995),
          a(1747873779, 3602036899),
          a(1955562222, 1575990012),
          a(2024104815, 1125592928),
          a(2227730452, 2716904306),
          a(2361852424, 442776044),
          a(2428436474, 593698344),
          a(2756734187, 3733110249),
          a(3204031479, 2999351573),
          a(3329325298, 3815920427),
          a(3391569614, 3928383900),
          a(3515267271, 566280711),
          a(3940187606, 3454069534),
          a(4118630271, 4000239992),
          a(116418474, 1914138554),
          a(174292421, 2731055270),
          a(289380356, 3203993006),
          a(460393269, 320620315),
          a(685471733, 587496836),
          a(852142971, 1086792851),
          a(1017036298, 365543100),
          a(1126000580, 2618297676),
          a(1288033470, 3409855158),
          a(1501505948, 4234509866),
          a(1607167915, 987167468),
          a(1816402316, 1246189591)
        ],
        l = [];
      (function() {
        for (var e = 0; e < 80; e++)
          l[e] = a();
      })();
      var c = u.SHA512 = r.extend({
        _doReset: function() {
          this._hash = new o.init([
            new s.init(1779033703, 4089235720),
            new s.init(3144134277, 2227873595),
            new s.init(1013904242, 4271175723),
            new s.init(2773480762, 1595750129),
            new s.init(1359893119, 2917565137),
            new s.init(2600822924, 725511199),
            new s.init(528734635, 4215389547),
            new s.init(1541459225, 327033209)
          ]);
        },
        _doProcessBlock: function(e, t) {
          var n = this._hash.words,
            r = n[0],
            i = n[1],
            s = n[2],
            o = n[3],
            u = n[4],
            a = n[5],
            c = n[6],
            h = n[7],
            p = r.high,
            d = r.low,
            v = i.high,
            m = i.low,
            g = s.high,
            y = s.low,
            b = o.high,
            w = o.low,
            E = u.high,
            S = u.low,
            x = a.high,
            T = a.low,
            N = c.high,
            C = c.low,
            k = h.high,
            L = h.low,
            A = p,
            O = d,
            M = v,
            _ = m,
            D = g,
            P = y,
            H = b,
            B = w,
            j = E,
            F = S,
            I = x,
            q = T,
            R = N,
            U = C,
            z = k,
            W = L;
          for (var X = 0; X < 80; X++) {
            var V = l[X];
            if (X < 16)
              var $ = V.high = e[t + X * 2] | 0, J = V.low = e[t + X * 2 + 1] | 0;
            else {
              var K = l[X - 15],
                Q = K.high,
                G = K.low,
                Y = (Q >>> 1 | G << 31) ^ (Q >>> 8 | G << 24) ^ Q >>> 7,
                Z = (G >>> 1 | Q << 31) ^ (G >>> 8 | Q << 24) ^ (G >>> 7 | Q << 25),
                et = l[X - 2],
                tt = et.high,
                nt = et.low,
                rt = (tt >>> 19 | nt << 13) ^ (tt << 3 | nt >>> 29) ^ tt >>> 6,
                it = (nt >>> 19 | tt << 13) ^ (nt << 3 | tt >>> 29) ^ (nt >>> 6 | tt << 26),
                st = l[X - 7],
                ot = st.high,
                ut = st.low,
                at = l[X - 16],
                ft = at.high,
                lt = at.low,
                J = Z + ut,
                $ = Y + ot + (J >>> 0 < Z >>> 0 ? 1 : 0),
                J = J + it,
                $ = $ + rt + (J >>> 0 < it >>> 0 ? 1 : 0),
                J = J + lt,
                $ = $ + ft + (J >>> 0 < lt >>> 0 ? 1 : 0);
              V.high = $, V.low = J;
            }
            var ct = j & I ^ ~j & R,
              ht = F & q ^ ~F & U,
              pt = A & M ^ A & D ^ M & D,
              dt = O & _ ^ O & P ^ _ & P,
              vt = (A >>> 28 | O << 4) ^ (A << 30 | O >>> 2) ^ (A << 25 | O >>> 7),
              mt = (O >>> 28 | A << 4) ^ (O << 30 | A >>> 2) ^ (O << 25 | A >>> 7),
              gt = (j >>> 14 | F << 18) ^ (j >>> 18 | F << 14) ^ (j << 23 | F >>> 9),
              yt = (F >>> 14 | j << 18) ^ (F >>> 18 | j << 14) ^ (F << 23 | j >>> 9),
              bt = f[X],
              wt = bt.high,
              Et = bt.low,
              St = W + yt,
              xt = z + gt + (St >>> 0 < W >>> 0 ? 1 : 0),
              St = St + ht,
              xt = xt + ct + (St >>> 0 < ht >>> 0 ? 1 : 0),
              St = St + Et,
              xt = xt + wt + (St >>> 0 < Et >>> 0 ? 1 : 0),
              St = St + J,
              xt = xt + $ + (St >>> 0 < J >>> 0 ? 1 : 0),
              Tt = mt + dt,
              Nt = vt + pt + (Tt >>> 0 < mt >>> 0 ? 1 : 0);
            z = R, W = U, R = I, U = q, I = j, q = F, F = B + St | 0, j = H + xt + (F >>> 0 < B >>> 0 ? 1 : 0) | 0, H = D, B = P, D = M, P = _, M = A, _ = O, O = St + Tt | 0, A = xt + Nt + (O >>> 0 < St >>> 0 ? 1 : 0) | 0;
          }
          d = r.low = d +
            O, r.high = p + A + (d >>> 0 < O >>> 0 ? 1 : 0), m = i.low = m + _, i.high = v + M + (m >>> 0 < _ >>> 0 ? 1 : 0), y = s.low = y + P, s.high = g + D + (y >>> 0 < P >>> 0 ? 1 : 0), w = o.low = w + B, o.high = b + H + (w >>> 0 < B >>> 0 ? 1 : 0), S = u.low = S + F, u.high = E + j + (S >>> 0 < F >>> 0 ? 1 : 0), T = a.low = T + q, a.high = x + I + (T >>> 0 < q >>> 0 ? 1 : 0), C = c.low = C + U, c.high = N + R + (C >>> 0 < U >>> 0 ? 1 : 0), L = h.low = L + W, h.high = k + z + (L >>> 0 < W >>> 0 ? 1 : 0);
        },
        _doFinalize: function() {
          var e = this._data, t = e.words, n = this._nDataBytes * 8, r = e.sigBytes * 8;
          t[r >>> 5] |= 128 <<
            24 -
              r %
                32, t[(r + 128 >>> 10 << 5) + 30] = Math.floor(n / 4294967296), t[(r + 128 >>> 10 << 5) + 31] = n, e.sigBytes = t.length * 4, this._process();
          var i = this._hash.toX32();
          return i;
        },
        clone: function() {
          var e = r.clone.call(this);
          return e._hash = this._hash.clone(), e;
        },
        blockSize: 32
      });
      t.SHA512 = r._createHelper(c), t.HmacSHA512 = r._createHmacHelper(c);
    }(), e.SHA512;
  }), function(e, t, n) {
    typeof exports == 'object' ? module.exports = exports = t(core, x64_core, sha512) : Z = function(e, n, r) {
        return typeof t == 'function' ? t(e, n, r) : t;
      }(z, W, Y);
  }(this, function(e) {
    return function() {
      var t = e,
        n = t.x64,
        r = n.Word,
        i = n.WordArray,
        s = t.algo,
        o = s.SHA512,
        u = s.SHA384 = o.extend({
          _doReset: function() {
            this._hash = new i.init([
              new r.init(3418070365, 3238371032),
              new r.init(1654270250, 914150663),
              new r.init(2438529370, 812702999),
              new r.init(355462360, 4144912697),
              new r.init(1731405415, 4290775857),
              new r.init(2394180231, 1750603025),
              new r.init(3675008525, 1694076839),
              new r.init(1203062813, 3204075428)
            ]);
          },
          _doFinalize: function() {
            var e = o._doFinalize.call(this);
            return e.sigBytes -= 16, e;
          }
        });
      t.SHA384 = o._createHelper(u), t.HmacSHA384 = o._createHmacHelper(u);
    }(), e.SHA384;
  }), function(e, t, n) {
    typeof exports == 'object' ? module.exports = exports = t(core, x64_core) : et = function(e, n) {
        return typeof t == 'function' ? t(e, n) : t;
      }(z, W);
  }(this, function(e) {
    return function(t) {
      var n = e, r = n.lib, i = r.WordArray, s = r.Hasher, o = n.x64, u = o.Word, a = n.algo, f = [], l = [], c = [];
      (function() {
        var e = 1, t = 0;
        for (var n = 0; n < 24; n++) {
          f[e + 5 * t] = (n + 1) * (n + 2) / 2 % 64;
          var r = t % 5, i = (2 * e + 3 * t) % 5;
          e = r, t = i;
        }
        for (var e = 0; e < 5; e++)
          for (var t = 0; t < 5; t++)
            l[e + 5 * t] = t + (2 * e + 3 * t) % 5 * 5;
        var s = 1;
        for (var o = 0; o < 24; o++) {
          var a = 0, h = 0;
          for (var p = 0; p < 7; p++) {
            if (s & 1) {
              var d = (1 << p) - 1;
              d < 32 ? h ^= 1 << d : a ^= 1 << d - 32;
            }
            s & 128 ? s = s << 1 ^ 113 : s <<= 1;
          }
          c[o] = u.create(a, h);
        }
      })();
      var h = [];
      (function() {
        for (var e = 0; e < 25; e++)
          h[e] = u.create();
      })();
      var p = a.SHA3 = s.extend({
        cfg: s.cfg.extend({ outputLength: 512 }),
        _doReset: function() {
          var e = this._state = [];
          for (var t = 0; t < 25; t++)
            e[t] = new u.init();
          this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
        },
        _doProcessBlock: function(e, t) {
          var n = this._state, r = this.blockSize / 2;
          for (var i = 0; i < r; i++) {
            var s = e[t + 2 * i], o = e[t + 2 * i + 1];
            s = (s << 8 | s >>> 24) & 16711935 |
              (s << 24 | s >>> 8) & 4278255360, o = (o << 8 | o >>> 24) & 16711935 | (o << 24 | o >>> 8) & 4278255360;
            var u = n[i];
            u.high ^= o, u.low ^= s;
          }
          for (var a = 0; a < 24; a++) {
            for (var p = 0; p < 5; p++) {
              var d = 0, v = 0;
              for (var m = 0; m < 5; m++) {
                var u = n[p + 5 * m];
                d ^= u.high, v ^= u.low;
              }
              var g = h[p];
              g.high = d, g.low = v;
            }
            for (var p = 0; p < 5; p++) {
              var y = h[(p + 4) % 5],
                b = h[(p + 1) % 5],
                w = b.high,
                E = b.low,
                d = y.high ^ (w << 1 | E >>> 31),
                v = y.low ^ (E << 1 | w >>> 31);
              for (var m = 0; m < 5; m++) {
                var u = n[p + 5 * m];
                u.high ^= d, u.low ^= v;
              }
            }
            for (var S = 1; S < 25; S++) {
              var u = n[S], x = u.high, T = u.low, N = f[S];
              if (N < 32)
                var d = x << N | T >>> 32 - N, v = T << N | x >>> 32 - N;
              else
                var d = T << N - 32 | x >>> 64 - N, v = x << N - 32 | T >>> 64 - N;
              var C = h[l[S]];
              C.high = d, C.low = v;
            }
            var k = h[0], L = n[0];
            k.high = L.high, k.low = L.low;
            for (var p = 0; p < 5; p++)
              for (var m = 0; m < 5; m++) {
                var S = p + 5 * m, u = n[S], A = h[S], O = h[(p + 1) % 5 + 5 * m], M = h[(p + 2) % 5 + 5 * m];
                u.high = A.high ^ ~O.high & M.high, u.low = A.low ^ ~O.low & M.low;
              }
            var u = n[0], _ = c[a];
            u.high ^= _.high, u.low ^= _.low;
          }
        },
        _doFinalize: function() {
          var e = this._data, n = e.words, r = this._nDataBytes * 8, s = e.sigBytes * 8, o = this.blockSize * 32;
          n[s >>> 5] |= 1 <<
            24 - s % 32, n[(t.ceil((s + 1) / o) * o >>> 5) - 1] |= 128, e.sigBytes = n.length * 4, this._process();
          var u = this._state, a = this.cfg.outputLength / 8, f = a / 8, l = [];
          for (var c = 0; c < f; c++) {
            var h = u[c], p = h.high, d = h.low;
            p = (p << 8 | p >>> 24) & 16711935 |
              (p << 24 | p >>> 8) &
                4278255360, d = (d << 8 | d >>> 24) & 16711935 | (d << 24 | d >>> 8) & 4278255360, l.push(d), l.push(p);
          }
          return new i.init(l, a);
        },
        clone: function() {
          var e = s.clone.call(this), t = e._state = this._state.slice(0);
          for (var n = 0; n < 25; n++)
            t[n] = t[n].clone();
          return e;
        }
      });
      n.SHA3 = s._createHelper(p), n.HmacSHA3 = s._createHmacHelper(p);
    }(Math), e.SHA3;
  }), function(e, t) {
    typeof exports == 'object' ? module.exports = exports = t(core) : tt = function(e) {
        return typeof t == 'function' ? t(e) : t;
      }(z);
  }(this, function(e) {
    return function(t) {
      function d(e, t, n) {
        return e ^ t ^ n;
      }
      function v(e, t, n) {
        return e & t | ~e & n;
      }
      function m(e, t, n) {
        return (e | ~t) ^ n;
      }
      function g(e, t, n) {
        return e & n | t & ~n;
      }
      function y(e, t, n) {
        return e ^ (t | ~n);
      }
      function b(e, t) {
        return e << t | e >>> 32 - t;
      }
      var n = e,
        r = n.lib,
        i = r.WordArray,
        s = r.Hasher,
        o = n.algo,
        u = i.create([
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          7,
          4,
          13,
          1,
          10,
          6,
          15,
          3,
          12,
          0,
          9,
          5,
          2,
          14,
          11,
          8,
          3,
          10,
          14,
          4,
          9,
          15,
          8,
          1,
          2,
          7,
          0,
          6,
          13,
          11,
          5,
          12,
          1,
          9,
          11,
          10,
          0,
          8,
          12,
          4,
          13,
          3,
          7,
          15,
          14,
          5,
          6,
          2,
          4,
          0,
          5,
          9,
          7,
          12,
          2,
          10,
          14,
          1,
          3,
          8,
          11,
          6,
          15,
          13
        ]),
        a = i.create([
          5,
          14,
          7,
          0,
          9,
          2,
          11,
          4,
          13,
          6,
          15,
          8,
          1,
          10,
          3,
          12,
          6,
          11,
          3,
          7,
          0,
          13,
          5,
          10,
          14,
          15,
          8,
          12,
          4,
          9,
          1,
          2,
          15,
          5,
          1,
          3,
          7,
          14,
          6,
          9,
          11,
          8,
          12,
          2,
          10,
          0,
          4,
          13,
          8,
          6,
          4,
          1,
          3,
          11,
          15,
          0,
          5,
          12,
          2,
          13,
          9,
          7,
          10,
          14,
          12,
          15,
          10,
          4,
          1,
          5,
          8,
          7,
          6,
          2,
          13,
          14,
          0,
          3,
          9,
          11
        ]),
        f = i.create([
          11,
          14,
          15,
          12,
          5,
          8,
          7,
          9,
          11,
          13,
          14,
          15,
          6,
          7,
          9,
          8,
          7,
          6,
          8,
          13,
          11,
          9,
          7,
          15,
          7,
          12,
          15,
          9,
          11,
          7,
          13,
          12,
          11,
          13,
          6,
          7,
          14,
          9,
          13,
          15,
          14,
          8,
          13,
          6,
          5,
          12,
          7,
          5,
          11,
          12,
          14,
          15,
          14,
          15,
          9,
          8,
          9,
          14,
          5,
          6,
          8,
          6,
          5,
          12,
          9,
          15,
          5,
          11,
          6,
          8,
          13,
          12,
          5,
          12,
          13,
          14,
          11,
          8,
          5,
          6
        ]),
        l = i.create([
          8,
          9,
          9,
          11,
          13,
          15,
          15,
          5,
          7,
          7,
          8,
          11,
          14,
          14,
          12,
          6,
          9,
          13,
          15,
          7,
          12,
          8,
          9,
          11,
          7,
          7,
          12,
          7,
          6,
          15,
          13,
          11,
          9,
          7,
          15,
          11,
          8,
          6,
          6,
          14,
          12,
          13,
          5,
          14,
          13,
          13,
          7,
          5,
          15,
          5,
          8,
          11,
          14,
          14,
          6,
          14,
          6,
          9,
          12,
          9,
          12,
          5,
          15,
          8,
          8,
          5,
          12,
          9,
          12,
          5,
          14,
          6,
          8,
          13,
          6,
          5,
          15,
          13,
          11,
          11
        ]),
        c = i.create([ 0, 1518500249, 1859775393, 2400959708, 2840853838 ]),
        h = i.create([ 1352829926, 1548603684, 1836072691, 2053994217, 0 ]),
        p = o.RIPEMD160 = s.extend({
          _doReset: function() {
            this._hash = i.create([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
          },
          _doProcessBlock: function(e, t) {
            for (var n = 0; n < 16; n++) {
              var r = t + n, i = e[r];
              e[r] = (i << 8 | i >>> 24) & 16711935 | (i << 24 | i >>> 8) & 4278255360;
            }
            var s = this._hash.words,
              o = c.words,
              p = h.words,
              w = u.words,
              E = a.words,
              S = f.words,
              x = l.words,
              T,
              N,
              C,
              k,
              L,
              A,
              O,
              M,
              _,
              D;
            A = T = s[0], O = N = s[1], M = C = s[2], _ = k = s[3], D = L = s[4];
            var P;
            for (var n = 0; n < 80; n += 1)
              P = T + e[t + w[n]] |
                0, n < 16 ? P += d(N, C, k) + o[0] : n < 32 ? P += v(N, C, k) + o[1] : n < 48 ? P += m(N, C, k) + o[2] : n < 64 ? P += g(N, C, k) + o[3] : P += y(N, C, k) + o[4], P |= 0, P = b(P, S[n]), P = P + L | 0, T = L, L = k, k = b(C, 10), C = N, N = P, P = A + e[t + E[n]] | 0, n < 16 ? P += y(O, M, _) + p[0] : n < 32 ? P += g(O, M, _) + p[1] : n < 48 ? P += m(O, M, _) + p[2] : n < 64 ? P += v(O, M, _) + p[3] : P += d(O, M, _) + p[4], P |= 0, P = b(P, x[n]), P = P + D | 0, A = D, D = _, _ = b(M, 10), M = O, O = P;
            P = s[1] + C + _ |
              0, s[1] = s[2] + k + D | 0, s[2] = s[3] + L + A | 0, s[3] = s[4] + T + O | 0, s[4] = s[0] + N + M | 0, s[0] = P;
          },
          _doFinalize: function() {
            var e = this._data, t = e.words, n = this._nDataBytes * 8, r = e.sigBytes * 8;
            t[r >>> 5] |= 128 <<
              24 -
                r %
                  32, t[(r + 64 >>> 9 << 4) + 14] = (n << 8 | n >>> 24) & 16711935 | (n << 24 | n >>> 8) & 4278255360, e.sigBytes = (t.length + 1) * 4, this._process();
            var i = this._hash, s = i.words;
            for (var o = 0; o < 5; o++) {
              var u = s[o];
              s[o] = (u << 8 | u >>> 24) & 16711935 | (u << 24 | u >>> 8) & 4278255360;
            }
            return i;
          },
          clone: function() {
            var e = s.clone.call(this);
            return e._hash = this._hash.clone(), e;
          }
        });
      n.RIPEMD160 = s._createHelper(p), n.HmacRIPEMD160 = s._createHmacHelper(p);
    }(Math), e.RIPEMD160;
  }), function(e, t) {
    typeof exports == 'object' ? module.exports = exports = t(core) : nt = function(e) {
        return typeof t == 'function' ? t(e) : t;
      }(z);
  }(this, function(e) {
    (function() {
      var t = e,
        n = t.lib,
        r = n.Base,
        i = t.enc,
        s = i.Utf8,
        o = t.algo,
        u = o.HMAC = r.extend({
          init: function(e, t) {
            e = this._hasher = new e.init(), typeof t == 'string' && (t = s.parse(t));
            var n = e.blockSize, r = n * 4;
            t.sigBytes > r && (t = e.finalize(t)), t.clamp();
            var i = this._oKey = t.clone(), o = this._iKey = t.clone(), u = i.words, a = o.words;
            for (var f = 0; f < n; f++)
              u[f] ^= 1549556828, a[f] ^= 909522486;
            i.sigBytes = o.sigBytes = r, this.reset();
          },
          reset: function() {
            var e = this._hasher;
            e.reset(), e.update(this._iKey);
          },
          update: function(e) {
            return this._hasher.update(e), this;
          },
          finalize: function(e) {
            var t = this._hasher, n = t.finalize(e);
            t.reset();
            var r = t.finalize(this._oKey.clone().concat(n));
            return r;
          }
        });
    })();
  }), function(e, t, n) {
    typeof exports == 'object' ? module.exports = exports = t(core, sha1, hmac) : rt = function(e, n, r) {
        return typeof t == 'function' ? t(e, n, r) : t;
      }(z, K, nt);
  }(this, function(e) {
    return function() {
      var t = e,
        n = t.lib,
        r = n.Base,
        i = n.WordArray,
        s = t.algo,
        o = s.SHA1,
        u = s.HMAC,
        a = s.PBKDF2 = r.extend({
          cfg: r.extend({ keySize: 4, hasher: o, iterations: 1 }),
          init: function(e) {
            this.cfg = this.cfg.extend(e);
          },
          compute: function(e, t) {
            var n = this.cfg,
              r = u.create(n.hasher, e),
              s = i.create(),
              o = i.create([ 1 ]),
              a = s.words,
              f = o.words,
              l = n.keySize,
              c = n.iterations;
            while (a.length < l) {
              var h = r.update(t).finalize(o);
              r.reset();
              var p = h.words, d = p.length, v = h;
              for (var m = 1; m < c; m++) {
                v = r.finalize(v), r.reset();
                var g = v.words;
                for (var y = 0; y < d; y++)
                  p[y] ^= g[y];
              }
              s.concat(h), f[0]++;
            }
            return s.sigBytes = l * 4, s;
          }
        });
      t.PBKDF2 = function(e, t, n) {
        return a.create(n).compute(e, t);
      };
    }(), e.PBKDF2;
  }), function(e, t, n) {
    typeof exports == 'object' ? module.exports = exports = t(core, sha1, hmac) : it = function(e, n, r) {
        return typeof t == 'function' ? t(e, n, r) : t;
      }(z, K, nt);
  }(this, function(e) {
    return function() {
      var t = e,
        n = t.lib,
        r = n.Base,
        i = n.WordArray,
        s = t.algo,
        o = s.MD5,
        u = s.EvpKDF = r.extend({
          cfg: r.extend({ keySize: 4, hasher: o, iterations: 1 }),
          init: function(e) {
            this.cfg = this.cfg.extend(e);
          },
          compute: function(e, t) {
            var n = this.cfg, r = n.hasher.create(), s = i.create(), o = s.words, u = n.keySize, a = n.iterations;
            while (o.length < u) {
              f && r.update(f);
              var f = r.update(e).finalize(t);
              r.reset();
              for (var l = 1; l < a; l++)
                f = r.finalize(f), r.reset();
              s.concat(f);
            }
            return s.sigBytes = u * 4, s;
          }
        });
      t.EvpKDF = function(e, t, n) {
        return u.create(n).compute(e, t);
      };
    }(), e.EvpKDF;
  }), function(e, t) {
    typeof exports == 'object' ? module.exports = exports = t(core) : st = function(e) {
        return typeof t == 'function' ? t(e) : t;
      }(z);
  }(this, function(e) {
    e.lib.Cipher || function(t) {
        var n = e,
          r = n.lib,
          i = r.Base,
          s = r.WordArray,
          o = r.BufferedBlockAlgorithm,
          u = n.enc,
          a = u.Utf8,
          f = u.Base64,
          l = n.algo,
          c = l.EvpKDF,
          h = r.Cipher = o.extend({
            cfg: i.extend(),
            createEncryptor: function(e, t) {
              return this.create(this._ENC_XFORM_MODE, e, t);
            },
            createDecryptor: function(e, t) {
              return this.create(this._DEC_XFORM_MODE, e, t);
            },
            init: function(e, t, n) {
              this.cfg = this.cfg.extend(n), this._xformMode = e, this._key = t, this.reset();
            },
            reset: function() {
              o.reset.call(this), this._doReset();
            },
            process: function(e) {
              return this._append(e), this._process();
            },
            finalize: function(e) {
              e && this._append(e);
              var t = this._doFinalize();
              return t;
            },
            keySize: 4,
            ivSize: 4,
            _ENC_XFORM_MODE: 1,
            _DEC_XFORM_MODE: 2,
            _createHelper: function() {
              function e(e) {
                return typeof e == 'string' ? C : x;
              }
              return function(t) {
                return {
                  encrypt: function(n, r, i) {
                    return e(r).encrypt(t, n, r, i);
                  },
                  decrypt: function(n, r, i) {
                    return e(r).decrypt(t, n, r, i);
                  }
                };
              };
            }()
          }),
          p = r.StreamCipher = h.extend({
            _doFinalize: function() {
              var e = this._process(!0);
              return e;
            },
            blockSize: 1
          }),
          d = n.mode = {},
          v = r.BlockCipherMode = i.extend({
            createEncryptor: function(e, t) {
              return this.Encryptor.create(e, t);
            },
            createDecryptor: function(e, t) {
              return this.Decryptor.create(e, t);
            },
            init: function(e, t) {
              this._cipher = e, this._iv = t;
            }
          }),
          m = d.CBC = function() {
            function n(e, n, r) {
              var i = this._iv;
              if (i) {
                var s = i;
                this._iv = t;
              } else
                var s = this._prevBlock;
              for (var o = 0; o < r; o++)
                e[n + o] ^= s[o];
            }
            var e = v.extend();
            return e.Encryptor = e.extend({
              processBlock: function(e, t) {
                var r = this._cipher, i = r.blockSize;
                n.call(this, e, t, i), r.encryptBlock(e, t), this._prevBlock = e.slice(t, t + i);
              }
            }), e.Decryptor = e.extend({
              processBlock: function(e, t) {
                var r = this._cipher, i = r.blockSize, s = e.slice(t, t + i);
                r.decryptBlock(e, t), n.call(this, e, t, i), this._prevBlock = s;
              }
            }), e;
          }(),
          g = n.pad = {},
          y = g.Pkcs7 = {
            pad: function(e, t) {
              var n = t * 4, r = n - e.sigBytes % n, i = r << 24 | r << 16 | r << 8 | r, o = [];
              for (var u = 0; u < r; u += 4)
                o.push(i);
              var a = s.create(o, r);
              e.concat(a);
            },
            unpad: function(e) {
              var t = e.words[e.sigBytes - 1 >>> 2] & 255;
              e.sigBytes -= t;
            }
          },
          b = r.BlockCipher = h.extend({
            cfg: h.cfg.extend({ mode: m, padding: y }),
            reset: function() {
              h.reset.call(this);
              var e = this.cfg, t = e.iv, n = e.mode;
              if (this._xformMode == this._ENC_XFORM_MODE)
                var r = n.createEncryptor;
              else {
                var r = n.createDecryptor;
                this._minBufferSize = 1;
              }
              this._mode = r.call(n, this, t && t.words);
            },
            _doProcessBlock: function(e, t) {
              this._mode.processBlock(e, t);
            },
            _doFinalize: function() {
              var e = this.cfg.padding;
              if (this._xformMode == this._ENC_XFORM_MODE) {
                e.pad(this._data, this.blockSize);
                var t = this._process(!0);
              } else {
                var t = this._process(!0);
                e.unpad(t);
              }
              return t;
            },
            blockSize: 4
          }),
          w = r.CipherParams = i.extend({
            init: function(e) {
              this.mixIn(e);
            },
            toString: function(e) {
              return (e || this.formatter).stringify(this);
            }
          }),
          E = n.format = {},
          S = E.OpenSSL = {
            stringify: function(e) {
              var t = e.ciphertext, n = e.salt;
              if (n)
                var r = s.create([ 1398893684, 1701076831 ]).concat(n).concat(t);
              else
                var r = t;
              return r.toString(f);
            },
            parse: function(e) {
              var t = f.parse(e), n = t.words;
              if (n[0] == 1398893684 && n[1] == 1701076831) {
                var r = s.create(n.slice(2, 4));
                n.splice(0, 4), t.sigBytes -= 16;
              }
              return w.create({ ciphertext: t, salt: r });
            }
          },
          x = r.SerializableCipher = i.extend({
            cfg: i.extend({ format: S }),
            encrypt: function(e, t, n, r) {
              r = this.cfg.extend(r);
              var i = e.createEncryptor(n, r), s = i.finalize(t), o = i.cfg;
              return w.create({
                ciphertext: s,
                key: n,
                iv: o.iv,
                algorithm: e,
                mode: o.mode,
                padding: o.padding,
                blockSize: e.blockSize,
                formatter: r.format
              });
            },
            decrypt: function(e, t, n, r) {
              r = this.cfg.extend(r), t = this._parse(t, r.format);
              var i = e.createDecryptor(n, r).finalize(t.ciphertext);
              return i;
            },
            _parse: function(e, t) {
              return typeof e == 'string' ? t.parse(e, this) : e;
            }
          }),
          T = n.kdf = {},
          N = T.OpenSSL = {
            execute: function(e, t, n, r) {
              r || (r = s.random(8));
              var i = c.create({ keySize: t + n }).compute(e, r), o = s.create(i.words.slice(t), n * 4);
              return i.sigBytes = t * 4, w.create({ key: i, iv: o, salt: r });
            }
          },
          C = r.PasswordBasedCipher = x.extend({
            cfg: x.cfg.extend({ kdf: N }),
            encrypt: function(e, t, n, r) {
              r = this.cfg.extend(r);
              var i = r.kdf.execute(n, e.keySize, e.ivSize);
              r.iv = i.iv;
              var s = x.encrypt.call(this, e, t, i.key, r);
              return s.mixIn(i), s;
            },
            decrypt: function(e, t, n, r) {
              r = this.cfg.extend(r), t = this._parse(t, r.format);
              var i = r.kdf.execute(n, e.keySize, e.ivSize, t.salt);
              r.iv = i.iv;
              var s = x.decrypt.call(this, e, t, i.key, r);
              return s;
            }
          });
      }();
  }), function(e, t, n) {
    typeof exports == 'object' ? module.exports = exports = t(core, cipher_core) : ot = function(e, n) {
        return typeof t == 'function' ? t(e, n) : t;
      }(z, st);
  }(this, function(e) {
    return e.mode.CFB = function() {
      function n(e, t, n, r) {
        var i = this._iv;
        if (i) {
          var s = i.slice(0);
          this._iv = undefined;
        } else
          var s = this._prevBlock;
        r.encryptBlock(s, 0);
        for (var o = 0; o < n; o++)
          e[t + o] ^= s[o];
      }
      var t = e.lib.BlockCipherMode.extend();
      return t.Encryptor = t.extend({
        processBlock: function(e, t) {
          var r = this._cipher, i = r.blockSize;
          n.call(this, e, t, i, r), this._prevBlock = e.slice(t, t + i);
        }
      }), t.Decryptor = t.extend({
        processBlock: function(e, t) {
          var r = this._cipher, i = r.blockSize, s = e.slice(t, t + i);
          n.call(this, e, t, i, r), this._prevBlock = s;
        }
      }), t;
    }(), e.mode.CFB;
  }), function(e, t, n) {
    typeof exports == 'object' ? module.exports = exports = t(core, cipher_core) : ut = function(e, n) {
        return typeof t == 'function' ? t(e, n) : t;
      }(z, st);
  }(this, function(e) {
    return e.mode.CTR = function() {
      var t = e.lib.BlockCipherMode.extend(),
        n = t.Encryptor = t.extend({
          processBlock: function(e, t) {
            var n = this._cipher, r = n.blockSize, i = this._iv, s = this._counter;
            i && (s = this._counter = i.slice(0), this._iv = undefined);
            var o = s.slice(0);
            n.encryptBlock(o, 0), s[r - 1] = s[r - 1] + 1 | 0;
            for (var u = 0; u < r; u++)
              e[t + u] ^= o[u];
          }
        });
      return t.Decryptor = n, t;
    }(), e.mode.CTR;
  }), function(e, t, n) {
    typeof exports == 'object' ? module.exports = exports = t(core, cipher_core) : at = function(e, n) {
        return typeof t == 'function' ? t(e, n) : t;
      }(z, st);
  }(this, function(e) {
    return e.mode.CTRGladman = function() {
      function n(e) {
        if ((e >> 24 & 255) === 255) {
          var t = e >> 16 & 255, n = e >> 8 & 255, r = e & 255;
          t === 255
            ? (t = 0, n === 255 ? (n = 0, r === 255 ? r = 0 : ++r) : ++n)
            : ++t, e = 0, e += t << 16, e += n << 8, e += r;
        } else
          e += 1 << 24;
        return e;
      }
      function r(e) {
        return (e[0] = n(e[0])) === 0 && (e[1] = n(e[1])), e;
      }
      var t = e.lib.BlockCipherMode.extend(),
        i = t.Encryptor = t.extend({
          processBlock: function(e, t) {
            var n = this._cipher, i = n.blockSize, s = this._iv, o = this._counter;
            s && (o = this._counter = s.slice(0), this._iv = undefined), r(o);
            var u = o.slice(0);
            n.encryptBlock(u, 0);
            for (var a = 0; a < i; a++)
              e[t + a] ^= u[a];
          }
        });
      return t.Decryptor = i, t;
    }(), e.mode.CTRGladman;
  }), function(e, t, n) {
    typeof exports == 'object' ? module.exports = exports = t(core, cipher_core) : ft = function(e, n) {
        return typeof t == 'function' ? t(e, n) : t;
      }(z, st);
  }(this, function(e) {
    return e.mode.OFB = function() {
      var t = e.lib.BlockCipherMode.extend(),
        n = t.Encryptor = t.extend({
          processBlock: function(e, t) {
            var n = this._cipher, r = n.blockSize, i = this._iv, s = this._keystream;
            i && (s = this._keystream = i.slice(0), this._iv = undefined), n.encryptBlock(s, 0);
            for (var o = 0; o < r; o++)
              e[t + o] ^= s[o];
          }
        });
      return t.Decryptor = n, t;
    }(), e.mode.OFB;
  }), function(e, t, n) {
    typeof exports == 'object' ? module.exports = exports = t(core, cipher_core) : lt = function(e, n) {
        return typeof t == 'function' ? t(e, n) : t;
      }(z, st);
  }(this, function(e) {
    return e.mode.ECB = function() {
      var t = e.lib.BlockCipherMode.extend();
      return t.Encryptor = t.extend({
        processBlock: function(e, t) {
          this._cipher.encryptBlock(e, t);
        }
      }), t.Decryptor = t.extend({
        processBlock: function(e, t) {
          this._cipher.decryptBlock(e, t);
        }
      }), t;
    }(), e.mode.ECB;
  }), function(e, t, n) {
    typeof exports == 'object' ? module.exports = exports = t(core, cipher_core) : ct = function(e, n) {
        return typeof t == 'function' ? t(e, n) : t;
      }(z, st);
  }(this, function(e) {
    return e.pad.AnsiX923 = {
      pad: function(e, t) {
        var n = e.sigBytes, r = t * 4, i = r - n % r, s = n + i - 1;
        e.clamp(), e.words[s >>> 2] |= i << 24 - s % 4 * 8, e.sigBytes += i;
      },
      unpad: function(e) {
        var t = e.words[e.sigBytes - 1 >>> 2] & 255;
        e.sigBytes -= t;
      }
    }, e.pad.Ansix923;
  }), function(e, t, n) {
    typeof exports == 'object' ? module.exports = exports = t(core, cipher_core) : ht = function(e, n) {
        return typeof t == 'function' ? t(e, n) : t;
      }(z, st);
  }(this, function(e) {
    return e.pad.Iso10126 = {
      pad: function(t, n) {
        var r = n * 4, i = r - t.sigBytes % r;
        t.concat(e.lib.WordArray.random(i - 1)).concat(e.lib.WordArray.create([ i << 24 ], 1));
      },
      unpad: function(e) {
        var t = e.words[e.sigBytes - 1 >>> 2] & 255;
        e.sigBytes -= t;
      }
    }, e.pad.Iso10126;
  }), function(e, t, n) {
    typeof exports == 'object' ? module.exports = exports = t(core, cipher_core) : pt = function(e, n) {
        return typeof t == 'function' ? t(e, n) : t;
      }(z, st);
  }(this, function(e) {
    return e.pad.Iso97971 = {
      pad: function(t, n) {
        t.concat(e.lib.WordArray.create([ 2147483648 ], 1)), e.pad.ZeroPadding.pad(t, n);
      },
      unpad: function(t) {
        e.pad.ZeroPadding.unpad(t), t.sigBytes--;
      }
    }, e.pad.Iso97971;
  }), function(e, t, n) {
    typeof exports == 'object' ? module.exports = exports = t(core, cipher_core) : dt = function(e, n) {
        return typeof t == 'function' ? t(e, n) : t;
      }(z, st);
  }(this, function(e) {
    return e.pad.ZeroPadding = {
      pad: function(e, t) {
        var n = t * 4;
        e.clamp(), e.sigBytes += n - (e.sigBytes % n || n);
      },
      unpad: function(e) {
        var t = e.words, n = e.sigBytes - 1;
        while (!(t[n >>> 2] >>> 24 - n % 4 * 8 & 255))
          n--;
        e.sigBytes = n + 1;
      }
    }, e.pad.ZeroPadding;
  }), function(e, t, n) {
    typeof exports == 'object' ? module.exports = exports = t(core, cipher_core) : vt = function(e, n) {
        return typeof t == 'function' ? t(e, n) : t;
      }(z, st);
  }(this, function(e) {
    return e.pad.NoPadding = { pad: function() {}, unpad: function() {} }, e.pad.NoPadding;
  }), function(e, t, n) {
    typeof exports == 'object' ? module.exports = exports = t(core, cipher_core) : mt = function(e, n) {
        return typeof t == 'function' ? t(e, n) : t;
      }(z, st);
  }(this, function(e) {
    return function(t) {
      var n = e,
        r = n.lib,
        i = r.CipherParams,
        s = n.enc,
        o = s.Hex,
        u = n.format,
        a = u.Hex = {
          stringify: function(e) {
            return e.ciphertext.toString(o);
          },
          parse: function(e) {
            var t = o.parse(e);
            return i.create({ ciphertext: t });
          }
        };
    }(), e.format.Hex;
  }), function(e, t, n) {
    typeof exports == 'object'
      ? module.exports = exports = t(core, enc_base64, md5, evpkdf, cipher_core)
      : gt = function(e, n, r, i, s) {
        return typeof t == 'function' ? t(e, n, r, i, s) : t;
      }(z, $, J, it, st);
  }(this, function(e) {
    return function() {
      var t = e,
        n = t.lib,
        r = n.BlockCipher,
        i = t.algo,
        s = [],
        o = [],
        u = [],
        a = [],
        f = [],
        l = [],
        c = [],
        h = [],
        p = [],
        d = [];
      (function() {
        var e = [];
        for (var t = 0; t < 256; t++)
          t < 128 ? e[t] = t << 1 : e[t] = t << 1 ^ 283;
        var n = 0, r = 0;
        for (var t = 0; t < 256; t++) {
          var i = r ^ r << 1 ^ r << 2 ^ r << 3 ^ r << 4;
          i = i >>> 8 ^ i & 255 ^ 99, s[n] = i, o[i] = n;
          var v = e[n], m = e[v], g = e[m], y = e[i] * 257 ^ i * 16843008;
          u[n] = y << 24 | y >>> 8, a[n] = y << 16 | y >>> 16, f[n] = y << 8 | y >>> 24, l[n] = y;
          var y = g * 16843009 ^ m * 65537 ^ v * 257 ^ n * 16843008;
          c[i] = y << 24 |
            y >>>
              8, h[i] = y << 16 | y >>> 16, p[i] = y << 8 | y >>> 24, d[i] = y, n ? (n = v ^ e[e[e[g ^ v]]], r ^= e[e[r]]) : n = r = 1;
        }
      })();
      var v = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ],
        m = i.AES = r.extend({
          _doReset: function() {
            var e = this._key,
              t = e.words,
              n = e.sigBytes / 4,
              r = this._nRounds = n + 6,
              i = (r + 1) * 4,
              o = this._keySchedule = [];
            for (var u = 0; u < i; u++)
              if (u < n)
                o[u] = t[u];
              else {
                var a = o[u - 1];
                u % n
                  ? n > 6 && u % n == 4 &&
                    (a = s[a >>> 24] << 24 | s[a >>> 16 & 255] << 16 | s[a >>> 8 & 255] << 8 | s[a & 255])
                  : (a = a << 8 | a >>> 24, a = s[a >>> 24] << 24 | s[a >>> 16 & 255] << 16 | s[a >>> 8 & 255] << 8 |
                    s[a & 255], a ^= v[u / n | 0] << 24), o[u] = o[u - n] ^ a;
              }
            var f = this._invKeySchedule = [];
            for (var l = 0; l < i; l++) {
              var u = i - l;
              if (l % 4)
                var a = o[u];
              else
                var a = o[u - 4];
              l < 4 || u <= 4
                ? f[l] = a
                : f[l] = c[s[a >>> 24]] ^ h[s[a >>> 16 & 255]] ^ p[s[a >>> 8 & 255]] ^ d[s[a & 255]];
            }
          },
          encryptBlock: function(e, t) {
            this._doCryptBlock(e, t, this._keySchedule, u, a, f, l, s);
          },
          decryptBlock: function(e, t) {
            var n = e[t + 1];
            e[t + 1] = e[t + 3], e[t + 3] = n, this._doCryptBlock(e, t, this._invKeySchedule, c, h, p, d, o);
            var n = e[t + 1];
            e[t + 1] = e[t + 3], e[t + 3] = n;
          },
          _doCryptBlock: function(e, t, n, r, i, s, o, u) {
            var a = this._nRounds,
              f = e[t] ^ n[0],
              l = e[t + 1] ^ n[1],
              c = e[t + 2] ^ n[2],
              h = e[t + 3] ^ n[3],
              p = 4;
            for (var d = 1; d < a; d++) {
              var v = r[f >>> 24] ^ i[l >>> 16 & 255] ^ s[c >>> 8 & 255] ^ o[h & 255] ^ n[p++],
                m = r[l >>> 24] ^ i[c >>> 16 & 255] ^ s[h >>> 8 & 255] ^ o[f & 255] ^ n[p++],
                g = r[c >>> 24] ^ i[h >>> 16 & 255] ^ s[f >>> 8 & 255] ^ o[l & 255] ^ n[p++],
                y = r[h >>> 24] ^ i[f >>> 16 & 255] ^ s[l >>> 8 & 255] ^ o[c & 255] ^ n[p++];
              f = v, l = m, c = g, h = y;
            }
            var v = (u[f >>> 24] << 24 | u[l >>> 16 & 255] << 16 | u[c >>> 8 & 255] << 8 | u[h & 255]) ^ n[p++],
              m = (u[l >>> 24] << 24 | u[c >>> 16 & 255] << 16 | u[h >>> 8 & 255] << 8 | u[f & 255]) ^ n[p++],
              g = (u[c >>> 24] << 24 | u[h >>> 16 & 255] << 16 | u[f >>> 8 & 255] << 8 | u[l & 255]) ^ n[p++],
              y = (u[h >>> 24] << 24 | u[f >>> 16 & 255] << 16 | u[l >>> 8 & 255] << 8 | u[c & 255]) ^ n[p++];
            e[t] = v, e[t + 1] = m, e[t + 2] = g, e[t + 3] = y;
          },
          keySize: 8
        });
      t.AES = r._createHelper(m);
    }(), e.AES;
  }), function(e, t, n) {
    typeof exports == 'object'
      ? module.exports = exports = t(core, enc_base64, md5, evpkdf, cipher_core)
      : yt = function(e, n, r, i, s) {
        return typeof t == 'function' ? t(e, n, r, i, s) : t;
      }(z, $, J, it, st);
  }(this, function(e) {
    return function() {
      function h(e, t) {
        var n = (this._lBlock >>> e ^ this._rBlock) & t;
        this._rBlock ^= n, this._lBlock ^= n << e;
      }
      function p(e, t) {
        var n = (this._rBlock >>> e ^ this._lBlock) & t;
        this._lBlock ^= n, this._rBlock ^= n << e;
      }
      var t = e,
        n = t.lib,
        r = n.WordArray,
        i = n.BlockCipher,
        s = t.algo,
        o = [
          57,
          49,
          41,
          33,
          25,
          17,
          9,
          1,
          58,
          50,
          42,
          34,
          26,
          18,
          10,
          2,
          59,
          51,
          43,
          35,
          27,
          19,
          11,
          3,
          60,
          52,
          44,
          36,
          63,
          55,
          47,
          39,
          31,
          23,
          15,
          7,
          62,
          54,
          46,
          38,
          30,
          22,
          14,
          6,
          61,
          53,
          45,
          37,
          29,
          21,
          13,
          5,
          28,
          20,
          12,
          4
        ],
        u = [
          14,
          17,
          11,
          24,
          1,
          5,
          3,
          28,
          15,
          6,
          21,
          10,
          23,
          19,
          12,
          4,
          26,
          8,
          16,
          7,
          27,
          20,
          13,
          2,
          41,
          52,
          31,
          37,
          47,
          55,
          30,
          40,
          51,
          45,
          33,
          48,
          44,
          49,
          39,
          56,
          34,
          53,
          46,
          42,
          50,
          36,
          29,
          32
        ],
        a = [ 1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28 ],
        f = [
          {
            0: 8421888,
            268435456: 32768,
            536870912: 8421378,
            805306368: 2,
            1073741824: 512,
            1342177280: 8421890,
            1610612736: 8389122,
            1879048192: 8388608,
            2147483648: 514,
            2415919104: 8389120,
            2684354560: 33280,
            2952790016: 8421376,
            3221225472: 32770,
            3489660928: 8388610,
            3758096384: 0,
            4026531840: 33282,
            134217728: 0,
            402653184: 8421890,
            671088640: 33282,
            939524096: 32768,
            1207959552: 8421888,
            1476395008: 512,
            1744830464: 8421378,
            2013265920: 2,
            2281701376: 8389120,
            2550136832: 33280,
            2818572288: 8421376,
            3087007744: 8389122,
            3355443200: 8388610,
            3623878656: 32770,
            3892314112: 514,
            4160749568: 8388608,
            1: 32768,
            268435457: 2,
            536870913: 8421888,
            805306369: 8388608,
            1073741825: 8421378,
            1342177281: 33280,
            1610612737: 512,
            1879048193: 8389122,
            2147483649: 8421890,
            2415919105: 8421376,
            2684354561: 8388610,
            2952790017: 33282,
            3221225473: 514,
            3489660929: 8389120,
            3758096385: 32770,
            4026531841: 0,
            134217729: 8421890,
            402653185: 8421376,
            671088641: 8388608,
            939524097: 512,
            1207959553: 32768,
            1476395009: 8388610,
            1744830465: 2,
            2013265921: 33282,
            2281701377: 32770,
            2550136833: 8389122,
            2818572289: 514,
            3087007745: 8421888,
            3355443201: 8389120,
            3623878657: 0,
            3892314113: 33280,
            4160749569: 8421378
          },
          {
            0: 1074282512,
            16777216: 16384,
            33554432: 524288,
            50331648: 1074266128,
            67108864: 1073741840,
            83886080: 1074282496,
            100663296: 1073758208,
            117440512: 16,
            134217728: 540672,
            150994944: 1073758224,
            167772160: 1073741824,
            184549376: 540688,
            201326592: 524304,
            218103808: 0,
            234881024: 16400,
            251658240: 1074266112,
            8388608: 1073758208,
            25165824: 540688,
            41943040: 16,
            58720256: 1073758224,
            75497472: 1074282512,
            92274688: 1073741824,
            109051904: 524288,
            125829120: 1074266128,
            142606336: 524304,
            159383552: 0,
            176160768: 16384,
            192937984: 1074266112,
            209715200: 1073741840,
            226492416: 540672,
            243269632: 1074282496,
            260046848: 16400,
            268435456: 0,
            285212672: 1074266128,
            301989888: 1073758224,
            318767104: 1074282496,
            335544320: 1074266112,
            352321536: 16,
            369098752: 540688,
            385875968: 16384,
            402653184: 16400,
            419430400: 524288,
            436207616: 524304,
            452984832: 1073741840,
            469762048: 540672,
            486539264: 1073758208,
            503316480: 1073741824,
            520093696: 1074282512,
            276824064: 540688,
            293601280: 524288,
            310378496: 1074266112,
            327155712: 16384,
            343932928: 1073758208,
            360710144: 1074282512,
            377487360: 16,
            394264576: 1073741824,
            411041792: 1074282496,
            427819008: 1073741840,
            444596224: 1073758224,
            461373440: 524304,
            478150656: 0,
            494927872: 16400,
            511705088: 1074266128,
            528482304: 540672
          },
          {
            0: 260,
            1048576: 0,
            2097152: 67109120,
            3145728: 65796,
            4194304: 65540,
            5242880: 67108868,
            6291456: 67174660,
            7340032: 67174400,
            8388608: 67108864,
            9437184: 67174656,
            10485760: 65792,
            11534336: 67174404,
            12582912: 67109124,
            13631488: 65536,
            14680064: 4,
            15728640: 256,
            524288: 67174656,
            1572864: 67174404,
            2621440: 0,
            3670016: 67109120,
            4718592: 67108868,
            5767168: 65536,
            6815744: 65540,
            7864320: 260,
            8912896: 4,
            9961472: 256,
            11010048: 67174400,
            12058624: 65796,
            13107200: 65792,
            14155776: 67109124,
            15204352: 67174660,
            16252928: 67108864,
            16777216: 67174656,
            17825792: 65540,
            18874368: 65536,
            19922944: 67109120,
            20971520: 256,
            22020096: 67174660,
            23068672: 67108868,
            24117248: 0,
            25165824: 67109124,
            26214400: 67108864,
            27262976: 4,
            28311552: 65792,
            29360128: 67174400,
            30408704: 260,
            31457280: 65796,
            32505856: 67174404,
            17301504: 67108864,
            18350080: 260,
            19398656: 67174656,
            20447232: 0,
            21495808: 65540,
            22544384: 67109120,
            23592960: 256,
            24641536: 67174404,
            25690112: 65536,
            26738688: 67174660,
            27787264: 65796,
            28835840: 67108868,
            29884416: 67109124,
            30932992: 67174400,
            31981568: 4,
            33030144: 65792
          },
          {
            0: 2151682048,
            65536: 2147487808,
            131072: 4198464,
            196608: 2151677952,
            262144: 0,
            327680: 4198400,
            393216: 2147483712,
            458752: 4194368,
            524288: 2147483648,
            589824: 4194304,
            655360: 64,
            720896: 2147487744,
            786432: 2151678016,
            851968: 4160,
            917504: 4096,
            983040: 2151682112,
            32768: 2147487808,
            98304: 64,
            163840: 2151678016,
            229376: 2147487744,
            294912: 4198400,
            360448: 2151682112,
            425984: 0,
            491520: 2151677952,
            557056: 4096,
            622592: 2151682048,
            688128: 4194304,
            753664: 4160,
            819200: 2147483648,
            884736: 4194368,
            950272: 4198464,
            1015808: 2147483712,
            1048576: 4194368,
            1114112: 4198400,
            1179648: 2147483712,
            1245184: 0,
            1310720: 4160,
            1376256: 2151678016,
            1441792: 2151682048,
            1507328: 2147487808,
            1572864: 2151682112,
            1638400: 2147483648,
            1703936: 2151677952,
            1769472: 4198464,
            1835008: 2147487744,
            1900544: 4194304,
            1966080: 64,
            2031616: 4096,
            1081344: 2151677952,
            1146880: 2151682112,
            1212416: 0,
            1277952: 4198400,
            1343488: 4194368,
            1409024: 2147483648,
            1474560: 2147487808,
            1540096: 64,
            1605632: 2147483712,
            1671168: 4096,
            1736704: 2147487744,
            1802240: 2151678016,
            1867776: 4160,
            1933312: 2151682048,
            1998848: 4194304,
            2064384: 4198464
          },
          {
            0: 128,
            4096: 17039360,
            8192: 262144,
            12288: 536870912,
            16384: 537133184,
            20480: 16777344,
            24576: 553648256,
            28672: 262272,
            32768: 16777216,
            36864: 537133056,
            40960: 536871040,
            45056: 553910400,
            49152: 553910272,
            53248: 0,
            57344: 17039488,
            61440: 553648128,
            2048: 17039488,
            6144: 553648256,
            10240: 128,
            14336: 17039360,
            18432: 262144,
            22528: 537133184,
            26624: 553910272,
            30720: 536870912,
            34816: 537133056,
            38912: 0,
            43008: 553910400,
            47104: 16777344,
            51200: 536871040,
            55296: 553648128,
            59392: 16777216,
            63488: 262272,
            65536: 262144,
            69632: 128,
            73728: 536870912,
            77824: 553648256,
            81920: 16777344,
            86016: 553910272,
            90112: 537133184,
            94208: 16777216,
            98304: 553910400,
            102400: 553648128,
            106496: 17039360,
            110592: 537133056,
            114688: 262272,
            118784: 536871040,
            122880: 0,
            126976: 17039488,
            67584: 553648256,
            71680: 16777216,
            75776: 17039360,
            79872: 537133184,
            83968: 536870912,
            88064: 17039488,
            92160: 128,
            96256: 553910272,
            100352: 262272,
            104448: 553910400,
            108544: 0,
            112640: 553648128,
            116736: 16777344,
            120832: 262144,
            124928: 537133056,
            129024: 536871040
          },
          {
            0: 268435464,
            256: 8192,
            512: 270532608,
            768: 270540808,
            1024: 268443648,
            1280: 2097152,
            1536: 2097160,
            1792: 268435456,
            2048: 0,
            2304: 268443656,
            2560: 2105344,
            2816: 8,
            3072: 270532616,
            3328: 2105352,
            3584: 8200,
            3840: 270540800,
            128: 270532608,
            384: 270540808,
            640: 8,
            896: 2097152,
            1152: 2105352,
            1408: 268435464,
            1664: 268443648,
            1920: 8200,
            2176: 2097160,
            2432: 8192,
            2688: 268443656,
            2944: 270532616,
            3200: 0,
            3456: 270540800,
            3712: 2105344,
            3968: 268435456,
            4096: 268443648,
            4352: 270532616,
            4608: 270540808,
            4864: 8200,
            5120: 2097152,
            5376: 268435456,
            5632: 268435464,
            5888: 2105344,
            6144: 2105352,
            6400: 0,
            6656: 8,
            6912: 270532608,
            7168: 8192,
            7424: 268443656,
            7680: 270540800,
            7936: 2097160,
            4224: 8,
            4480: 2105344,
            4736: 2097152,
            4992: 268435464,
            5248: 268443648,
            5504: 8200,
            5760: 270540808,
            6016: 270532608,
            6272: 270540800,
            6528: 270532616,
            6784: 8192,
            7040: 2105352,
            7296: 2097160,
            7552: 0,
            7808: 268435456,
            8064: 268443656
          },
          {
            0: 1048576,
            16: 33555457,
            32: 1024,
            48: 1049601,
            64: 34604033,
            80: 0,
            96: 1,
            112: 34603009,
            128: 33555456,
            144: 1048577,
            160: 33554433,
            176: 34604032,
            192: 34603008,
            208: 1025,
            224: 1049600,
            240: 33554432,
            8: 34603009,
            24: 0,
            40: 33555457,
            56: 34604032,
            72: 1048576,
            88: 33554433,
            104: 33554432,
            120: 1025,
            136: 1049601,
            152: 33555456,
            168: 34603008,
            184: 1048577,
            200: 1024,
            216: 34604033,
            232: 1,
            248: 1049600,
            256: 33554432,
            272: 1048576,
            288: 33555457,
            304: 34603009,
            320: 1048577,
            336: 33555456,
            352: 34604032,
            368: 1049601,
            384: 1025,
            400: 34604033,
            416: 1049600,
            432: 1,
            448: 0,
            464: 34603008,
            480: 33554433,
            496: 1024,
            264: 1049600,
            280: 33555457,
            296: 34603009,
            312: 1,
            328: 33554432,
            344: 1048576,
            360: 1025,
            376: 34604032,
            392: 33554433,
            408: 34603008,
            424: 0,
            440: 34604033,
            456: 1049601,
            472: 1024,
            488: 33555456,
            504: 1048577
          },
          {
            0: 134219808,
            1: 131072,
            2: 134217728,
            3: 32,
            4: 131104,
            5: 134350880,
            6: 134350848,
            7: 2048,
            8: 134348800,
            9: 134219776,
            10: 133120,
            11: 134348832,
            12: 2080,
            13: 0,
            14: 134217760,
            15: 133152,
            2147483648: 2048,
            2147483649: 134350880,
            2147483650: 134219808,
            2147483651: 134217728,
            2147483652: 134348800,
            2147483653: 133120,
            2147483654: 133152,
            2147483655: 32,
            2147483656: 134217760,
            2147483657: 2080,
            2147483658: 131104,
            2147483659: 134350848,
            2147483660: 0,
            2147483661: 134348832,
            2147483662: 134219776,
            2147483663: 131072,
            16: 133152,
            17: 134350848,
            18: 32,
            19: 2048,
            20: 134219776,
            21: 134217760,
            22: 134348832,
            23: 131072,
            24: 0,
            25: 131104,
            26: 134348800,
            27: 134219808,
            28: 134350880,
            29: 133120,
            30: 2080,
            31: 134217728,
            2147483664: 131072,
            2147483665: 2048,
            2147483666: 134348832,
            2147483667: 133152,
            2147483668: 32,
            2147483669: 134348800,
            2147483670: 134217728,
            2147483671: 134219808,
            2147483672: 134350880,
            2147483673: 134217760,
            2147483674: 134219776,
            2147483675: 0,
            2147483676: 133120,
            2147483677: 2080,
            2147483678: 131104,
            2147483679: 134350848
          }
        ],
        l = [ 4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679 ],
        c = s.DES = i.extend({
          _doReset: function() {
            var e = this._key, t = e.words, n = [];
            for (var r = 0; r < 56; r++) {
              var i = o[r] - 1;
              n[r] = t[i >>> 5] >>> 31 - i % 32 & 1;
            }
            var s = this._subKeys = [];
            for (var f = 0; f < 16; f++) {
              var l = s[f] = [], c = a[f];
              for (var r = 0; r < 24; r++)
                l[r / 6 | 0] |= n[(u[r] - 1 + c) % 28] <<
                  31 - r % 6, l[4 + (r / 6 | 0)] |= n[28 + (u[r + 24] - 1 + c) % 28] << 31 - r % 6;
              l[0] = l[0] << 1 | l[0] >>> 31;
              for (var r = 1; r < 7; r++)
                l[r] = l[r] >>> (r - 1) * 4 + 3;
              l[7] = l[7] << 5 | l[7] >>> 27;
            }
            var h = this._invSubKeys = [];
            for (var r = 0; r < 16; r++)
              h[r] = s[15 - r];
          },
          encryptBlock: function(e, t) {
            this._doCryptBlock(e, t, this._subKeys);
          },
          decryptBlock: function(e, t) {
            this._doCryptBlock(e, t, this._invSubKeys);
          },
          _doCryptBlock: function(e, t, n) {
            this._lBlock = e[t], this._rBlock = e[t + 1], h.call(this, 4, 252645135), h.call(this, 16, 65535), p.call(this, 2, 858993459), p.call(this, 8, 16711935), h.call(this, 1, 1431655765);
            for (var r = 0; r < 16; r++) {
              var i = n[r], s = this._lBlock, o = this._rBlock, u = 0;
              for (var a = 0; a < 8; a++)
                u |= f[a][((o ^ i[a]) & l[a]) >>> 0];
              this._lBlock = o, this._rBlock = s ^ u;
            }
            var c = this._lBlock;
            this._lBlock = this._rBlock, this._rBlock = c, h.call(this, 1, 1431655765), p.call(this, 8, 16711935), p.call(this, 2, 858993459), h.call(this, 16, 65535), h.call(this, 4, 252645135), e[t] = this._lBlock, e[t + 1] = this._rBlock;
          },
          keySize: 2,
          ivSize: 2,
          blockSize: 2
        });
      t.DES = i._createHelper(c);
      var d = s.TripleDES = i.extend({
        _doReset: function() {
          var e = this._key, t = e.words;
          this._des1 = c.createEncryptor(
            r.create(t.slice(0, 2))
          ), this._des2 = c.createEncryptor(r.create(t.slice(2, 4))), this._des3 = c.createEncryptor(r.create(t.slice(4, 6)));
        },
        encryptBlock: function(e, t) {
          this._des1.encryptBlock(e, t), this._des2.decryptBlock(e, t), this._des3.encryptBlock(e, t);
        },
        decryptBlock: function(e, t) {
          this._des3.decryptBlock(e, t), this._des2.encryptBlock(e, t), this._des1.decryptBlock(e, t);
        },
        keySize: 6,
        ivSize: 2,
        blockSize: 2
      });
      t.TripleDES = i._createHelper(d);
    }(), e.TripleDES;
  }), function(e, t, n) {
    typeof exports == 'object'
      ? module.exports = exports = t(core, enc_base64, md5, evpkdf, cipher_core)
      : bt = function(e, n, r, i, s) {
        return typeof t == 'function' ? t(e, n, r, i, s) : t;
      }(z, $, J, it, st);
  }(this, function(e) {
    return function() {
      function o() {
        var e = this._S, t = this._i, n = this._j, r = 0;
        for (var i = 0; i < 4; i++) {
          t = (t + 1) % 256, n = (n + e[t]) % 256;
          var s = e[t];
          e[t] = e[n], e[n] = s, r |= e[(e[t] + e[n]) % 256] << 24 - i * 8;
        }
        return this._i = t, this._j = n, r;
      }
      var t = e,
        n = t.lib,
        r = n.StreamCipher,
        i = t.algo,
        s = i.RC4 = r.extend({
          _doReset: function() {
            var e = this._key, t = e.words, n = e.sigBytes, r = this._S = [];
            for (var i = 0; i < 256; i++)
              r[i] = i;
            for (var i = 0, s = 0; i < 256; i++) {
              var o = i % n, u = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;
              s = (s + r[i] + u) % 256;
              var a = r[i];
              r[i] = r[s], r[s] = a;
            }
            this._i = this._j = 0;
          },
          _doProcessBlock: function(e, t) {
            e[t] ^= o.call(this);
          },
          keySize: 8,
          ivSize: 0
        });
      t.RC4 = r._createHelper(s);
      var u = i.RC4Drop = s.extend({
        cfg: s.cfg.extend({ drop: 192 }),
        _doReset: function() {
          s._doReset.call(this);
          for (var e = this.cfg.drop; e > 0; e--)
            o.call(this);
        }
      });
      t.RC4Drop = r._createHelper(u);
    }(), e.RC4;
  }), function(e, t, n) {
    typeof exports == 'object'
      ? module.exports = exports = t(core, enc_base64, md5, evpkdf, cipher_core)
      : wt = function(e, n, r, i, s) {
        return typeof t == 'function' ? t(e, n, r, i, s) : t;
      }(z, $, J, it, st);
  }(this, function(e) {
    return function() {
      function f() {
        var e = this._X, t = this._C;
        for (var n = 0; n < 8; n++)
          o[n] = t[n];
        t[0] = t[0] + 1295307597 + this._b |
          0, t[1] = t[1] + 3545052371 + (t[0] >>> 0 < o[0] >>> 0 ? 1 : 0) | 0, t[2] = t[2] + 886263092 + (t[1] >>> 0 < o[1] >>> 0 ? 1 : 0) | 0, t[3] = t[3] + 1295307597 + (t[2] >>> 0 < o[2] >>> 0 ? 1 : 0) | 0, t[4] = t[4] + 3545052371 + (t[3] >>> 0 < o[3] >>> 0 ? 1 : 0) | 0, t[5] = t[5] + 886263092 + (t[4] >>> 0 < o[4] >>> 0 ? 1 : 0) | 0, t[6] = t[6] + 1295307597 + (t[5] >>> 0 < o[5] >>> 0 ? 1 : 0) | 0, t[7] = t[7] + 3545052371 + (t[6] >>> 0 < o[6] >>> 0 ? 1 : 0) | 0, this._b = t[7] >>> 0 < o[7] >>> 0 ? 1 : 0;
        for (var n = 0; n < 8; n++) {
          var r = e[n] + t[n],
            i = r & 65535,
            s = r >>> 16,
            a = ((i * i >>> 17) + i * s >>> 15) + s * s,
            f = ((r & 4294901760) * r | 0) + ((r & 65535) * r | 0);
          u[n] = a ^ f;
        }
        e[0] = u[0] + (u[7] << 16 | u[7] >>> 16) + (u[6] << 16 | u[6] >>> 16) |
          0, e[1] = u[1] + (u[0] << 8 | u[0] >>> 24) + u[7] | 0, e[2] = u[2] + (u[1] << 16 | u[1] >>> 16) + (u[0] << 16 | u[0] >>> 16) | 0, e[3] = u[3] + (u[2] << 8 | u[2] >>> 24) + u[1] | 0, e[4] = u[4] + (u[3] << 16 | u[3] >>> 16) + (u[2] << 16 | u[2] >>> 16) | 0, e[5] = u[5] + (u[4] << 8 | u[4] >>> 24) + u[3] | 0, e[6] = u[6] + (u[5] << 16 | u[5] >>> 16) + (u[4] << 16 | u[4] >>> 16) | 0, e[7] = u[7] + (u[6] << 8 | u[6] >>> 24) + u[5] | 0;
      }
      var t = e,
        n = t.lib,
        r = n.StreamCipher,
        i = t.algo,
        s = [],
        o = [],
        u = [],
        a = i.Rabbit = r.extend({
          _doReset: function() {
            var e = this._key.words, t = this.cfg.iv;
            for (var n = 0; n < 4; n++)
              e[n] = (e[n] << 8 | e[n] >>> 24) & 16711935 | (e[n] << 24 | e[n] >>> 8) & 4278255360;
            var r = this._X = [
              e[0],
              e[3] << 16 | e[2] >>> 16,
              e[1],
              e[0] << 16 | e[3] >>> 16,
              e[2],
              e[1] << 16 | e[0] >>> 16,
              e[3],
              e[2] << 16 | e[1] >>> 16
            ],
              i = this._C = [
                e[2] << 16 | e[2] >>> 16,
                e[0] & 4294901760 | e[1] & 65535,
                e[3] << 16 | e[3] >>> 16,
                e[1] & 4294901760 | e[2] & 65535,
                e[0] << 16 | e[0] >>> 16,
                e[2] & 4294901760 | e[3] & 65535,
                e[1] << 16 | e[1] >>> 16,
                e[3] & 4294901760 | e[0] & 65535
              ];
            this._b = 0;
            for (var n = 0; n < 4; n++)
              f.call(this);
            for (var n = 0; n < 8; n++)
              i[n] ^= r[n + 4 & 7];
            if (t) {
              var s = t.words,
                o = s[0],
                u = s[1],
                a = (o << 8 | o >>> 24) & 16711935 | (o << 24 | o >>> 8) & 4278255360,
                l = (u << 8 | u >>> 24) & 16711935 | (u << 24 | u >>> 8) & 4278255360,
                c = a >>> 16 | l & 4294901760,
                h = l << 16 | a & 65535;
              i[0] ^= a, i[1] ^= c, i[2] ^= l, i[3] ^= h, i[4] ^= a, i[5] ^= c, i[6] ^= l, i[7] ^= h;
              for (var n = 0; n < 4; n++)
                f.call(this);
            }
          },
          _doProcessBlock: function(e, t) {
            var n = this._X;
            f.call(
              this
            ), s[0] = n[0] ^ n[5] >>> 16 ^ n[3] << 16, s[1] = n[2] ^ n[7] >>> 16 ^ n[5] << 16, s[2] = n[4] ^ n[1] >>> 16 ^ n[7] << 16, s[3] = n[6] ^ n[3] >>> 16 ^ n[1] << 16;
            for (var r = 0; r < 4; r++)
              s[r] = (s[r] << 8 | s[r] >>> 24) & 16711935 | (s[r] << 24 | s[r] >>> 8) & 4278255360, e[t + r] ^= s[r];
          },
          blockSize: 4,
          ivSize: 2
        });
      t.Rabbit = r._createHelper(a);
    }(), e.Rabbit;
  }), function(e, t, n) {
    typeof exports == 'object'
      ? module.exports = exports = t(core, enc_base64, md5, evpkdf, cipher_core)
      : Et = function(e, n, r, i, s) {
        return typeof t == 'function' ? t(e, n, r, i, s) : t;
      }(z, $, J, it, st);
  }(this, function(e) {
    return function() {
      function f() {
        var e = this._X, t = this._C;
        for (var n = 0; n < 8; n++)
          o[n] = t[n];
        t[0] = t[0] + 1295307597 + this._b |
          0, t[1] = t[1] + 3545052371 + (t[0] >>> 0 < o[0] >>> 0 ? 1 : 0) | 0, t[2] = t[2] + 886263092 + (t[1] >>> 0 < o[1] >>> 0 ? 1 : 0) | 0, t[3] = t[3] + 1295307597 + (t[2] >>> 0 < o[2] >>> 0 ? 1 : 0) | 0, t[4] = t[4] + 3545052371 + (t[3] >>> 0 < o[3] >>> 0 ? 1 : 0) | 0, t[5] = t[5] + 886263092 + (t[4] >>> 0 < o[4] >>> 0 ? 1 : 0) | 0, t[6] = t[6] + 1295307597 + (t[5] >>> 0 < o[5] >>> 0 ? 1 : 0) | 0, t[7] = t[7] + 3545052371 + (t[6] >>> 0 < o[6] >>> 0 ? 1 : 0) | 0, this._b = t[7] >>> 0 < o[7] >>> 0 ? 1 : 0;
        for (var n = 0; n < 8; n++) {
          var r = e[n] + t[n],
            i = r & 65535,
            s = r >>> 16,
            a = ((i * i >>> 17) + i * s >>> 15) + s * s,
            f = ((r & 4294901760) * r | 0) + ((r & 65535) * r | 0);
          u[n] = a ^ f;
        }
        e[0] = u[0] + (u[7] << 16 | u[7] >>> 16) + (u[6] << 16 | u[6] >>> 16) |
          0, e[1] = u[1] + (u[0] << 8 | u[0] >>> 24) + u[7] | 0, e[2] = u[2] + (u[1] << 16 | u[1] >>> 16) + (u[0] << 16 | u[0] >>> 16) | 0, e[3] = u[3] + (u[2] << 8 | u[2] >>> 24) + u[1] | 0, e[4] = u[4] + (u[3] << 16 | u[3] >>> 16) + (u[2] << 16 | u[2] >>> 16) | 0, e[5] = u[5] + (u[4] << 8 | u[4] >>> 24) + u[3] | 0, e[6] = u[6] + (u[5] << 16 | u[5] >>> 16) + (u[4] << 16 | u[4] >>> 16) | 0, e[7] = u[7] + (u[6] << 8 | u[6] >>> 24) + u[5] | 0;
      }
      var t = e,
        n = t.lib,
        r = n.StreamCipher,
        i = t.algo,
        s = [],
        o = [],
        u = [],
        a = i.RabbitLegacy = r.extend({
          _doReset: function() {
            var e = this._key.words,
              t = this.cfg.iv,
              n = this._X = [
                e[0],
                e[3] << 16 | e[2] >>> 16,
                e[1],
                e[0] << 16 | e[3] >>> 16,
                e[2],
                e[1] << 16 | e[0] >>> 16,
                e[3],
                e[2] << 16 | e[1] >>> 16
              ],
              r = this._C = [
                e[2] << 16 | e[2] >>> 16,
                e[0] & 4294901760 | e[1] & 65535,
                e[3] << 16 | e[3] >>> 16,
                e[1] & 4294901760 | e[2] & 65535,
                e[0] << 16 | e[0] >>> 16,
                e[2] & 4294901760 | e[3] & 65535,
                e[1] << 16 | e[1] >>> 16,
                e[3] & 4294901760 | e[0] & 65535
              ];
            this._b = 0;
            for (var i = 0; i < 4; i++)
              f.call(this);
            for (var i = 0; i < 8; i++)
              r[i] ^= n[i + 4 & 7];
            if (t) {
              var s = t.words,
                o = s[0],
                u = s[1],
                a = (o << 8 | o >>> 24) & 16711935 | (o << 24 | o >>> 8) & 4278255360,
                l = (u << 8 | u >>> 24) & 16711935 | (u << 24 | u >>> 8) & 4278255360,
                c = a >>> 16 | l & 4294901760,
                h = l << 16 | a & 65535;
              r[0] ^= a, r[1] ^= c, r[2] ^= l, r[3] ^= h, r[4] ^= a, r[5] ^= c, r[6] ^= l, r[7] ^= h;
              for (var i = 0; i < 4; i++)
                f.call(this);
            }
          },
          _doProcessBlock: function(e, t) {
            var n = this._X;
            f.call(
              this
            ), s[0] = n[0] ^ n[5] >>> 16 ^ n[3] << 16, s[1] = n[2] ^ n[7] >>> 16 ^ n[5] << 16, s[2] = n[4] ^ n[1] >>> 16 ^ n[7] << 16, s[3] = n[6] ^ n[3] >>> 16 ^ n[1] << 16;
            for (var r = 0; r < 4; r++)
              s[r] = (s[r] << 8 | s[r] >>> 24) & 16711935 | (s[r] << 24 | s[r] >>> 8) & 4278255360, e[t + r] ^= s[r];
          },
          blockSize: 4,
          ivSize: 2
        });
      t.RabbitLegacy = r._createHelper(a);
    }(), e.RabbitLegacy;
  }), function(e, t, n) {
    typeof exports == 'object'
      ? module.exports = exports = t(
        core,
        x64_core,
        lib_typedarrays,
        enc_utf16,
        enc_base64,
        md5,
        sha1,
        sha256,
        sha224,
        sha512,
        sha384,
        sha3,
        ripemd160,
        hmac,
        pbkdf2,
        evpkdf,
        cipher_core,
        mode_cfb,
        mode_ctr,
        mode_ctr_gladman,
        mode_ofb,
        mode_ecb,
        pad_ansix923,
        pad_iso10126,
        pad_iso97971,
        pad_zeropadding,
        pad_nopadding,
        format_hex,
        aes,
        tripledes,
        rc4,
        rabbit,
        rabbit_legacy
      )
      : St = function(
        e,
        n,
        r,
        i,
        s,
        o,
        u,
        a,
        f,
        l,
        c,
        h,
        p,
        d,
        v,
        m,
        g,
        y,
        b,
        w,
        E,
        S,
        x,
        T,
        N,
        C,
        k,
        L,
        A,
        O,
        M,
        _,
        D
      ) {
        return typeof t == 'function'
          ? t(e, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k, L, A, O, M, _, D)
          : t;
      }(
        z,
        W,
        X,
        V,
        $,
        J,
        K,
        Q,
        G,
        Y,
        Z,
        et,
        tt,
        nt,
        rt,
        it,
        st,
        ot,
        ut,
        at,
        ft,
        lt,
        ct,
        ht,
        pt,
        dt,
        vt,
        mt,
        gt,
        yt,
        bt,
        wt,
        Et
      );
  }(this, function(e) {
    return e;
  }), xt = function(e) {
    return e;
  }(St), Tt = function(e) {
    function s(e) {
      function S(e) {
        var t = new Uint8Array(e), n = [];
        for (var r = 0; r < t.length; r += 4)
          n.push(t[r] << 24 | t[r + 1] << 16 | t[r + 2] << 8 | t[r + 3]);
        return o.lib.WordArray.create(n, t.length);
      }
      function x() {
        if (f === t.size)
          return;
        l = f + a, l > t.size && (l = t.size), d = t.slice(f, l), f = l, u.readAsArrayBuffer(d);
      }
      function T() {
        c = o.algo.MD5.create(), h = o.algo.SHA256.create(), m = 'COMPLETE', f = 0, l = f + a, b = {};
      }
      var t,
        s = [],
        o,
        u = new FileReader(),
        a = 2097152,
        f = 0,
        l = f + a,
        c,
        h,
        p,
        d,
        v = 1,
        m = 'COMPLETE',
        g = [
          'http://apps.bdimg.com/libs/crypto-js/3.1.2/rollups/md5.js',
          'http://apps.bdimg.com/libs/crypto-js/3.1.2/components/sha256-min.js'
        ],
        y = {},
        b,
        w;
      try {
        importScripts, w = !0;
      } catch (E) {
        n = { postMessage: function() {}, addEventListener: function() {} }, w = !1;
      }
      u.onloadend = function(e) {
        p = w ? S(u.result) : o.lib.WordArray.create(u.result);
        if (f === t.size) {
          c = c.finalize(
            p
          ), h = h.finalize(p), i = new Date().valueOf(), b = { status: 'COMPLETE', md5: c.toString(), sha256: h.toString(), timeCount: i - r }, n.postMessage(b), y.complete && y.complete(b), T();
          if (t = s.shift())
            m = 'DEALING', x();
        } else
          c.update(p), h.update(p), x();
        v++;
      }, w && n.addEventListener('message', function(e) {
          r = new Date().valueOf();
          var i = e.data;
          i.bufferSize &&
            (a = i.bufferSize), o || (y = i, !i.CryptoJSPath || i.CryptoJSPath instanceof Array ? n.importScripts.apply(n, i.CryptoJSPath || g) : n.importScripts(i.CryptoJSPath), o = n.CryptoJS, T()), m === 'COMPLETE' ? (t = e.data.file, m = 'DEALING', x()) : s.push(t);
        });
      if (!w)
        return function(e) {
          r = new Date().valueOf(), o || (o = xt), y = e, T(), m === 'COMPLETE' ? (t = e.file, m = 'DEALING', x()) : s.push(t);
        };
    }
    var t, n, r, i;
    return e = {
      getString: function() {
        return '(' + s.toString() + ')(this)';
      },
      getfunction: function() {
        return s;
      },
      getBlobUrl: function() {
        return window.URL.createObjectURL(new Blob([ this.getString() ], { type: 'text/javascript' }));
      },
      getHexSum: function() {
        return t || (t = s()), t.apply(this, arguments);
      }
    }, e;
  }(Tt), Nt = function(e, t, n, r, i, s, o, u) {
    function b(e) {
      return e.toString();
    }
    function w(e) {
      return e = e || {}, function(t) {
        e.success && t.code === 200 &&
          e.success(t), e.error && t.code !== 200 && e.error(t), e.complete && e.complete(t);
      };
    }
    function E(e, t) {
      var n = this;
      if (this.options.cancelFileValidate) {
        t && t({ md5: m(new Date().toString()).toString(), sha256: '' });
        return;
      }
      if (this.options.useWorker && window.Worker) {
        if (!this.hexWorker) {
          var r = d.getBlobUrl();
          this.hexWorker = new Worker(
            r
          ), window.URL.revokeObjectURL(r), this.hexWorker.addEventListener('message', function(e) {
            e.data.status === 'COMPLETE' && t && t.call(n, e.data);
          });
        }
        this.hexWorker.postMessage({ file: e, onlyMD5: this.options.cancelFileValidate });
      } else
        d.getHexSum({ file: e, onlyMD5: this.options.cancelFileValidate, complete: t || function() {} });
    }
    var a = t,
      f = n,
      l = r,
      c = i,
      h = s,
      p = o,
      d = u,
      v = xt,
      m = J,
      g = function(e) {
        e && (this.setOptions(e), this.handle());
      },
      y = g.prototype;
    return y.handleQueue = {
      generate: function(e) {
        this.currentPacket
          ? this.currentPacket = { seq: this.currentPacket.seq + 1, method: e }
          : this.currentPacket = {
            seq: parseInt((new Date().getTime() + '').slice(4), 10),
            method: e
          }, this.queue.push(this.currentPacket);
      },
      delete: function(e) {
        var t = this.queue;
        for (var n = 0; n < t.length; n++)
          if (t[n].seq === e)
            return t.splice(n, 1);
      },
      getMethod: function(e) {
        var t = this.queue;
        for (var n = 0; n < t.length; n++)
          if (t[n].seq === e)
            return t[n].method;
      }
    }, y.handle = function() {
      return this.WS_HANDLE === null &&
        (this.WS_HANDLE = new WebSocket(
          this.options.server
        ), this.WS_HANDLE.binaryType = 'arraybuffer', this.bindEvents()), this.WS_HANDLE;
    }, y.on = function(e, t) {
      var e = e.replace(/^\w/, function(e) {
        return e.toUpperCase();
      });
      this.events.indexOf(e) > -1 &&
        (this.actions['on' + e] ? this.actions['on' + e].push(t) : this.actions['on' + e] = [ t ]);
    }, y.off = function(e, t) {
      var n = this.actions['on' + e];
      if (!t)
        n = null;
      else {
        var r = n.indexOf(t);
        r > -1 && n.splice(r, 1);
      }
    }, y.trigger = function(e, t) {
      var n = [], r = [], i = this;
      e = e.split(' '), e.forEach(function(e, t, s) {
        n = n.concat(
          i.actions['on' + e] || []
        ), i.queueActions['on' + e] && r.push(i.queueActions['on' + e].shift() || {});
      }), r && r.length && r.forEach(function(e) {
          typeof e == 'function' && e(t);
        });
      if (n && n.length)
        for (var s = 0; s < n.length; s++)
          n[s](t);
    }, y.queueOnce = function(e, t) {
      var e = e.replace(/^\w/, function(e) {
        return e.toUpperCase();
      });
      this.events.indexOf(e) > -1 &&
        (this.queueActions['on' + e] ? this.queueActions['on' + e].push(t) : this.queueActions['on' + e] = [ t ]);
    }, y.bindEvents = function() {
      this.handle().onopen = this.onOpen.bind(
        this
      ), this.handle().onclose = this.onClose.bind(this), this.handle().onmessage = this.onMessage.bind(this), this.handle().onerror = this.onError.bind(this), this.ONLINE === undefined && this.bindOnlineEvent();
    }, y.bindOnlineEvent = function() {
      var e = this;
      this.ONLINE = !0, window.addEventListener('offline', function(t) {
        e.ONLINE = !1;
      }), window.addEventListener('online', function(t) {
        e.ONLINE = !0, e.WS_HANDLE && e.WS_HANDLE.readyState !== 1 && (e.WS_HANDLE = null, e.reconnect());
      });
    }, y.connect = function(e) {
      e = e || {}, this.queueOnce('ConnectStatusChanged', w(e)), this.handle();
    }, y.reconnect = function() {
      var e = this;
      this.connect({
        success: function() {
          e.trigger('Reconnected');
        },
        complete: function() {
          e.log('trigger reconnected');
        }
      });
    }, y.close = function(e) {
      this.WS_HANDLE &&
        (this.queueOnce(
          'ConnectStatusChanged',
          w(e)
        ), this.WS_HANDLE.close()), this.ACTIVE_CLOSE = !0, this.WS_HANDLE = null;
    }, y.getDeviceInfo = function() {
      var e = a.getCookie('deviceToken');
      e || (e = m(a.randomString(5) + new Date().getTime()).toString(), a.setCookie('deviceToken', e));
      var t = {};
      return t.deviceToken = e, t.deviceTypeId = this.deviceTypeId || 0, t.platform = a.platform(), t;
    }, y.retry = function(e, t) {
      var e = e.replace(/^\w/, function(e) {
        return e.toLowerCase();
      }),
        n = this.optionStore.getOpts(e, t),
        r = this.retryOpts[e] || (this.retryOpts[e] = {});
      r.seq === t
        ? r.retryCount++
        : r.retryCount = 1, r.retryCount <= this.options.tryCount && typeof this[e] == 'function' && this[e](n), r.seq = this.currentPacket.seq;
    }, y.onMessage = function(e) {
      var t = this.decode(e.data), n;
      t.bizPackage && t.bizPackage.packetType === 3 &&
        (t.method = 'Push'), this.appId = t.appId ? t.appId : this.appId, this.sessionId = t.sessionId ? t.sessionId : this.sessionId, a.setCookie('IMsessionId', this.sessionId), this.uid = t.uid ? t.uid : this.uid, this.log('GetServerMessage data'), this.log(t);
      if (t.method && t.bizPackage) {
        var r = p[t.method] || h[t.method], i;
        try {
          this.log(
            'method:' + t.method
          ), this.log(t), i = r[1].decode(t.bizPackage.bizData), t.method === 'Push' && (n = i.msgs[0].ackId);
        } catch (e) {
          i = {};
        }
        this.parseResult(
          i
        ), n && (i.msgs[0].ackId = n), this.trigger('GetServerMessage', { method: t.method, result: i, opts: t });
      }
      t.channelCode && t.channelCode !== 200 && t.method &&
        this.retry(t.method, t.seq), this.options.onMessage && this.options.onMessage(e, t);
    }, y.onOpen = function(e) {
      this.hasTryCount = 0, this.options.onOpen && this.options.onOpen(e), this.trigger('ConnectStatusChanged Connect', { code: 200, status: 'CONNECTED', readyState: this.WS_HANDLE ? this.WS_HANDLE.readyState : 0 });
    }, y.onClose = function(e) {
      var t = this;
      clearInterval(
        this.timer
      ), this.options.onClose && this.options.onClose(e), this.trigger('ConnectStatusChanged Disconnect', { code: 200, status: 'DISCONNECTED', readyState: this.WS_HANDLE ? this.WS_HANDLE.readyState : 0 }), !this.ACTIVE_CLOSE && this.ONLINE && this.options.autoReconnect && this.options.tryCount > this.hasTryCount && (this.ACTIVE_CLOSE = !1, this.WS_HANDLE = null, setTimeout(
          function() {
            t.reconnect();
          },
          1000
        ));
    }, y.onError = function(e) {
      clearInterval(
        this.timer
      ), this.WS_HANDLE = null, this.trigger('ConnectStatusChanged', { code: 400, status: 'ERROR', readyState: this.WS_HANDLE ? this.WS_HANDLE.readyState : 0 }), this.hasTryCount++, this.ONLINE && this.options.autoReconnect && this.options.tryCount > this.hasTryCount && this.reconnect();
    }, y.setOptions = function(e) {
      var t = this;
      this.options = e, this.WS_HANDLE = null, this.queue = [], this.currentPacket = null, this.actions = {}, this.queueActions = {}, this.optionStore = {
        setOpts: function(e, n, r) {
          r = t.currentPacket.seq, n = n || {};
          var i = { seq: r, data: n };
          this.store[e] ? this.store[e].push(i) : this.store[e] = [ i ], i.t = setTimeout(
            function() {
              n.timeout = !0, i.finish || t.trigger('Error', { code: '400', info: e + ' Error', seq: r });
            },
            n.timeout || t.options.timeout
          );
        },
        getOpts: function(e, t) {
          var n = this.store[e] || [], r = n.length, i;
          while (i = n[--r])
            if (i.seq === t)
              return i.timeout || (clearTimeout(i.t), i.finish = !0), i.data;
        },
        store: {}
      }, this.hasTryCount = 0, this.options.heartrate = e.heartrate || 300, this.options.timeout = e.timeout || 10000, this.options.tryCount = e.tryCount || 3, this.options.bossHost = this.options.bossHost || 'bj.bcebos.com', this.channelKey = this.options.channelKey, this.chatType = e.chatType || 1, this.events = [ 'Send', 'Login', 'Logout', 'Push', 'GetPushMessage', 'GetUploadSign', 'GetDownloadSign', 'PushConfirm', 'ReadAck', 'QueryActiveContacts', 'QueryMsgs', 'Heartbeat', 'Error', 'GetServerMessage', 'UserStatusChanged', 'Download', 'Upload', 'UploadSuccess', 'ConnectStatusChanged', 'Connect', 'Disconnect', 'Reconnected', 'Prelogin' ], this.callbacks = {}, this.retryOpts = {}, this.hexWorker, this.on('Prelogin', function(e) {
        var n = t.optionStore.getOpts('login', e.seq);
        t.log(
          'login extra:'
        ), t.log(e), e.extra && (t.channelKey = e.extra.toUTF8(), t.heartbeat(0, n), t.timer = setInterval(
            function() {
              t.heartbeat();
            },
            t.options.heartrate * 1000
          ));
      }), this.on('Push', function(e) {
        var n = e.msgs, r = [];
        for (var i = 0; i < n.length; i++)
          n[i].confirmMode === 1 &&
            t.confirmPush(
              n[i]
            ), r.push({ onlineMsg: t.decodePushOnline(n[i].onlineMsg), offlineMsg: t.decodePushOffline(n[i].offlineMsg) });
        t.log('Push:'), t.log(r), t.trigger('GetPushMessage', r);
      }), this.on('getDownloadSign', function(e) {
        var n, r = { data: [] }, i = 'success', s = [];
        if (e) {
          t.log(
            'getDownloadSign event opts:'
          ), t.log(e), n = t.optionStore.getOpts('getDownloadSign', e.seq), s = e.rspList;
          for (var o = 0; o < s.length; o++) {
            var u = s[o].sign, a = document.createElement('iframe');
            n.ONLY_RETURN ||
              (a.style.display = 'none', a.src = s[o].downloadUrl + '?authorization=' + u, a.onload = function() {
                this.remove();
              }, a.onerror = function() {
                this.remove(), i = 'error';
              }, document.body.appendChild(
                a
              )), r.data.push({ fileUrl: s[o].downloadUrl + '?authorization=' + u, fileId: s[o].fileId });
          }
          n[i] && n[i](r), n.complete && n.complete(r), t.trigger('Download', r);
        }
      }), this.on('getUploadSign', function(e) {
        var n = {}, r = e.rspList[0], i = t.optionStore.getOpts('getUploadSign', e.seq);
        n.authorization = r.sign, n.preOpts = e, n.size = r.fileSize || i.fileSize, n.uploadUrl = r.uploadUrl, n.fid = r.fid, n.data = i.file, n.$file = i.$file, n.md5 = i.md5, n.sha256 = i.bmd5, t.log('getUploadSign'), t.log(r), t.log('fileOpts:'), t.log(n), t.uploadFile(n);
      }), this.on('heartbeat', function(e) {
        t.log('heartbeat'), t.log(e);
      }), this.on('Error', function(e) {
        var n = t.currentMethod || '',
          r = t.optionStore.getOpts(n.replace(/^\S/, (n[0] || '').toLowerCase()), e.seq) || {};
        t.errorMethod = t.currentMethod, r.error && r.error(e), r.complete && r.complete(e);
      }), this.on('GetServerMessage', function(e) {
        var n = [ 'Push', 'GetDownloadSign', 'GetUploadSign', 'Login' ], r = e.method, i = e.result, s, o;
        t.log(
          'GetServerMessage'
        ), t.log(e), n.indexOf(r) === -1 && t.errorMethod !== r ? (s = t.optionStore.getOpts(r.replace(/^\S/, r[0].toLowerCase()), e.opts.seq) || {}, o = r === 'Heartbeat' && (s.success || s.complete || s.error), s.request && (t.parseResult(s.request), s.request.msg.seq = i.seq, s.request.msg.serverTime = i.serverTime), o && (r = 'Login'), i.code = 200, i.info = r + ' Success', (r === 'Logout' || o) && t.trigger('UserStatusChanged', i), s.origin && (i.data = s.origin), s.success && s.success(i, s.request), s.complete && s.complete(i, s.request)) : i.seq = e.opts.seq, t.errorMethod = '', o && (r = 'Heartbeat Login'), r === 'Login' && (r = 'Prelogin'), t.trigger(r, i);
      }), this.log = this.options.isDebug ? function() {
          window.console.log.apply(window.console, arguments);
        } : function() {}, this.deviceInfo = this.getDeviceInfo();
    }, y.encode = function(e, t, n) {
      this.handleQueue.generate.call(this, t);
      var r = {
        seq: this.currentPacket.seq,
        sysPackage: !0,
        appId: 0,
        bizPackage: { busiData: e.toBuffer(), packetType: 'REQUEST' },
        serviceName: 'CoreSession',
        methodName: t,
        bua: { buaInfo: { deviceToken: this.deviceInfo.deviceToken } }
      };
      n &&
        (r.serviceName = n), this.sessionId && (r.sessionId = this.sessionId), this.appId && (r.appId = this.appId), this.uid && (r.uid = this.uid), this.log('encode ' + t + ' seq:'), this.log(this.currentPacket.seq);
      var i = new p.UpPacket(r);
      return i.toBuffer();
    }, y.decode = function(e) {
      var e = p.DownPacket.decode(e), t = this.handleQueue.getMethod.call(this, e.seq);
      return this.currentMethod = e.method = t, this.errorHandle(e), e;
    }, y.errorHandle = function(e) {
      this.log('Enter errorHandle:'), this.log(e);
      if (e.channelCode === 200 && e.bizPackage && e.bizPackage.bizCode !== 0) {
        var t = e.bizPackage.bizCode || 501;
        this.trigger('Error', { code: t, info: e.method + ' Error', seq: e.seq });
      } else if (e.channelCode !== 200) {
        var t = e.bizPackage ? e.bizPackage.bizCode : 401;
        this.trigger('Error', { code: e.channelCode, info: e.method + ' Error', seq: e.seq });
      }
    }, y.decodePushOnline = function(e) {
      var t = p.PushData.decode(e).normalMessage;
      if (!t)
        return e;
      t = t.content;
      var n = h.ImPushData.decode(t), r;
      return n.imPushType === 1
        ? r = h.OneMsg.decode(n.pushData)
        : n.imPushType === 2 && (r = h.MsgRecvAckNotify.decode(t.pushData)), r = this.parseOnlineMsg(r), r;
    }, y.parseOnlineMsg = function(e) {
      if (e)
        for (var t in e)
          e[t] instanceof f && (e[t] = b(e[t]));
      for (var t in e)
        e.hasOwnProperty(t) && e[t] instanceof Array && !e[t].length && delete e[t];
      return e;
    }, y.decodePushOffline = function(e) {
      return p.InformMessage.decode(e);
    }, y.login = function(e) {
      var t = { channelKey: this.options.channelKey };
      e.token
        ? t.token = e.token
        : e.loginName && e.password && (t.loginName = e.loginName, t.password = e.password), this.log(p);
      var n = new p.Login[0](t), r = this.encode(n, 'Login');
      this.optionStore.setOpts('login', e), this.WS_HANDLE.send(r);
    }, y.logout = function(e) {
      var t = {}, n = new p.Logout[0](t), r = this.encode(n, 'Logout');
      this.optionStore.setOpts('logout', e), this.WS_HANDLE.send(r);
    }, y.send = function(e) {
      var t = [
        'content',
        'fromId',
        'fromName',
        'toId',
        'view',
        'chatType',
        'seq',
        'serverTime',
        'options',
        'notifyText',
        'msgTemplate',
        'clientMsgID',
        'compatibleText',
        'previousSeq',
        'extra',
        'isRealTime'
      ],
        n = {
          msg: {
            sendTime: f.fromNumber(new Date().getTime()),
            isRealTime: !1,
            clientMsgID: f.fromNumber(new Date().getTime() + Math.floor(Math.random() * 10000)),
            msgTemplate: 'bdim_hi_text',
            view: ''
          }
        };
      for (var r in e)
        t.indexOf(r) > -1 && (n.msg[r] = e[r]);
      var i = new h.Send[0](n), s = this.encode(i, 'Send', 'IMPlusMsg');
      e.request = i, this.optionStore.setOpts('send', e), this.WS_HANDLE.send(s);
    }, y.groupChat = function(e) {
      e.chatType = 2, this.send(e);
    }, y.heartbeat = function(e) {
      var t, n = { background: !0, channelKey: this.channelKey, info: { background: !0 } };
      n.info.appId = this.appId || 0;
      var e = e || this.sessionId;
      n.info.sessionId = e;
      var r = new p.Heartbeat[0](n), i = this.encode(r, 'Heartbeat');
      arguments[1] &&
        (t = arguments[1], this.optionStore.setOpts('heartbeat', {
          success: t.success || function() {},
          error: t.error || function() {},
          complete: t.complete || function() {}
        })), this.WS_HANDLE.send(i);
    }, y.confirmPush = function(e) {
      var t = { msgStatus: { ackId: e.ackId, onlineStatus: 1, offlineStatus: 1 } },
        n = new p.PushConfirm[0](t),
        r = this.encode(n, 'PushConfirm', 'CoreMsg');
      this.optionStore.setOpts('pushConfirm', e), this.WS_HANDLE.send(r);
    }, y.queryMsgs = function(e) {
      var t = this,
        n = [ 'startSeq', 'endSeq', 'count', 'chatId' ],
        r = { msgRanges: { chatType: e.chatType || t.chatType }, count: e.count };
      for (var i in e)
        n.indexOf(i) > -1 && (r.msgRanges[i] = e[i]);
      r.count = e.count || 10;
      var s = new h.QueryMsgs[0](r), o = this.encode(s, 'QueryMsgs', 'IMPlusMsg');
      this.optionStore.setOpts('queryMsgs', e), this.WS_HANDLE.send(o);
    }, y.queryActiveContacts = function(e) {
      var t = {
        lastQueryTime: f.fromInt(e.lastQueryTime),
        needReturnMsgsContactsNum: e.msgsContactsNum,
        needReturnMsgsNum: e.msgsNum
      },
        n = new h.QueryActiveContacts[0](t),
        r = this.encode(n, 'QueryActiveContacts', 'IMPlusMsg');
      this.optionStore.setOpts('queryActiveContacts', e), this.WS_HANDLE.send(r);
    }, y.readAck = function(e) {
      var t = {
        conversations: {
          chatType: e.chatType || this.chatType,
          chatId: e.chatId,
          lastRecvMsgSeq: f.fromInt(e.lastRecvMsgSeq),
          lastRecvMsgTime: f.fromInt(e.lastRecvMsgTime),
          lastReadMsgSeq: f.fromInt(e.lastReadMsgSeq),
          lastReadMsgTime: f.fromInt(e.lastReadMsgTime)
        }
      },
        n = new h.ReadAck[0](t),
        r = this.encode(n, 'ReadAck', 'IMPlusMsg');
      this.optionStore.setOpts('readAck', e), this.WS_HANDLE.send(r);
    }, y.getUploadSign = function(e) {
      var t = {
        reqList: { fileName: e.fileName, fileSize: e.fileSize, md5: e.md5, bmd5: e.bmd5 || '', fileType: e.fileType }
      };
      this.log('MD5:' + e.md5), t.reqList.bossHost = e.bossHost || this.options.bossHost;
      var n = new h.GetUploadSign[0](t), r = this.encode(n, 'GetUploadSign', 'IMPlusFile');
      this.optionStore.setOpts('getUploadSign', e), this.WS_HANDLE.send(r);
    }, y.getDownloadSign = function(e) {
      var t = { reqList: { fileId: '' + e.fileId, md5: e.md5 } };
      t.reqList.bossHost = e.bossHost || this.options.bossHost;
      var n = new h.GetDownloadSign[0](t), r = this.encode(n, 'GetDownloadSign', 'IMPlusFile');
      this.optionStore.setOpts('getDownloadSign', e), this.WS_HANDLE.send(r);
    }, y.uploadSuccess = function(e) {
      var t = e.fid,
        n = { fid: t },
        r = this.optionStore.getOpts('getUploadSign', e.preOpts.seq),
        i = new h.UploadSuccess[0](n),
        s = this.encode(i, 'UploadSuccess', 'IMPlusFile'),
        o = this;
      this.log('uploadSuccess opts:'), this.log(e), t && this.optionStore.setOpts('uploadSuccess', {
          fid: t,
          success: r.success,
          error: r.error,
          complete: function(e) {
            r.complete(e), setTimeout(
              function() {
                o.trigger('Upload');
              },
              0
            );
          },
          origin: e
        }), this.WS_HANDLE.send(s);
    }, y.uploadFile = function(e) {
      var t = this,
        n = new XMLHttpRequest(),
        r = e.uploadUrl.replace('bos.nj.baidubce.com', this.options.bossHost),
        i = e.authorization,
        s = e.sha256;
      n.open(
        'PUT',
        r
      ), n.setRequestHeader('Authorization', i), s && n.setRequestHeader('x-bce-content-sha256', s), n.setRequestHeader('Content-Type', 'text/plain'), n.setRequestHeader('x-bce-date', new Date().toISOString()), n.send(e.data), n.onreadystatechange = function(r) {
        n.readyState === 4 &&
          (n.status === 200
            ? (t.log('upload complete'), t.log('response: ' + n.responseText), t.uploadSuccess(e))
            : (t.currentMethod = 'uploadFile', t.trigger('Error', r)));
      };
    }, y.upload = function(e) {
      var t = this, n, r, i = e.file;
      E.call(t, i, function(r) {
        t.log(
          '总耗时: ' + r.timeCount
        ), n = { fileSize: i.size, md5: r.md5, bmd5: r.sha256, fileType: i.type, fileName: i.name || 'blob', file: i || r.result, $file: i, success: e.success, error: e.error, complete: e.complete }, t.log('file loadend signOpts!'), t.log(n);
        switch (n.fileType.match(/[^\/]*/).toString()) {
          case 'image':
            n.fileType = 1;
            break;
          case 'audio':
            n.fileType = 2;
            break;
          default:
            n.fileType = 3;
        }
        t.getUploadSign(n);
      });
    }, y.download = function(e) {
      this.getDownloadSign(e);
    }, y.getImage = function(e) {
      var t = e.imgUrl ? e.imgUrl.match(/^implus:\/\/(\d+)\/(.*)$/) : [];
      t = t ||
        [], e.ONLY_RETURN = !0, e.fileId = t[1] || e.fileId || '', e.md5 = t[2] || e.md5 || '', this.getDownloadSign(e);
    }, y.getFileUrl = function(e) {
      var t = e.fileUrl ? e.fileUrl.match(/^implus:\/\/(\d+)\/(.*)$/) : [];
      t = t ||
        [], e.ONLY_RETURN = !0, e.fileId = t[1] || e.fileId || '', e.md5 = t[2] || e.md5 || '', this.getDownloadSign(e);
    }, y.parseResult = function(e) {
      var t = e, n = 0;
      if (typeof t == 'object')
        if (t instanceof Array) {
          n = t.length;
          while (n > 0)
            n--, typeof t[n] == 'object' && (t[n] = this.parseResult(t[n]));
        } else if (t instanceof f)
          t = b(t);
        else
          for (n in t)
            t.hasOwnProperty(n) && typeof t[n] == 'object' && (t[n] = this.parseResult(t[n]));
      return t;
    }, e = g, e;
  }(Nt, l, m, g, y, A, U, Tt), Ct = function(e, t, n, r, i) {
    function m(e) {
      e && (h = new a(e), this.setOptions(e));
    }
    function g() {
      var e = this;
      this.on('ConnectStatusChanged', function(t) {
        var n = e.status;
        n.connectStatus = t.status, n.readyState = t.readyState;
      }), this.on('UserStatusChanged', function(t) {
        t.code === 200 && (e.status.userStatus = (t.info.split(' ') || '')[0]);
      }), this.on('PushMessageReceived', function(t) {
        var n;
        try {
          n = t[0], n.offlineMsg.title === '系统登出通知' && e.trigger('UserStatusChanged', { code: 200, info: 'Logout Success', detail: n.offlineMsg.title + ' -> ' + n.offlineMsg.description });
        } catch (r) {}
      });
    }
    function y(e) {
      return function(t) {
        var n = {
          uploadUrl: t.uploadUrl,
          fileStream: t.data,
          originFile: t.$file,
          authorization: t.authorization,
          sha256: t.sha256,
          md5: t.md5
        },
          r = {
            resolve: function(e) {
              h.uploadSuccess(t);
            },
            reject: function(e) {
              h.currentMethod = 'uploadFile', h.trigger('Error', e);
            }
          };
        e.setUploadAgent.call(h, n, r);
      };
    }
    var s = t,
      o = n,
      u = r,
      a = Nt,
      f = i,
      l = f.extend,
      c = f.event,
      h,
      p = [ 'off', 'trigger', 'events' ],
      d = {
        connect: 'content',
        login: 'login',
        logout: 'logout',
        disconnect: 'close',
        send: 'send',
        queryMsgs: 'queryMsgs',
        queryActiveContacts: 'queryActiveContacts',
        upload: 'upload',
        download: 'download',
        groupChat: 'groupChat',
        getFileUrl: 'getFileUrl',
        readAck: 'readAck'
      },
      v = {
        Send: 'Send',
        Login: 'Login',
        Logout: 'Logout',
        PushMessageReceived: 'GetPushMessage',
        QueryActiveContacts: 'QueryActiveContacts',
        QueryMsgs: 'QueryMsgs',
        Error: 'Error',
        UploadSuccess: 'UploadSuccess',
        ConnectStatusChanged: 'ConnectStatusChanged',
        UserStatusChanged: 'UserStatusChanged',
        Download: 'Download',
        Upload: 'Upload',
        Connect: 'Connect',
        Disconnect: 'Disconnect',
        Reconnected: 'Reconnected'
      };
    return m.prototype.setOptions = function(e) {
      var t = this, n;
      this.actions = {}, this.queueActions = {}, this.events = [], this.status = { connectStatus: 'DISCONNECTED', userStatus: 'Logout', currentUserId: e.currentUserId || '', currentUserName: e.currentUserName || '', readyState: 0 };
      for (n = p.length - 1; n >= 0; n--)
        h[p[n]] && (this[p[n]] = h[p[n]]);
      for (n in d)
        d.hasOwnProperty(n) && (this[n] = function(e) {
            return t.factory(e);
          }(d[n]));
      for (n in v)
        v.hasOwnProperty(n) && (h.events.indexOf(v[n]) > -1 && h.on(
              v[n],
              function(e) {
                return function(n) {
                  t.trigger(e, n);
                };
              }(n)
            ), t.events.indexOf(n) === -1 && t.events.push(n));
      e.setUpload && (t.upload = function() {
          e.setUpload.apply(h, arguments);
        }), e.setDownload && (t.download = function() {
          e.setDownload.apply(h, arguments);
        }), e.setGetFileUrl && (t.getFileUrl = function() {
          e.setGetFileUrl.apply(h, arguments);
        }), e.setUploadAgent &&
        (h.uploadFile = y(
          e
        )), g.call(this), this.inbox = new s(this), this.conversation = new o(this), this.chatHistory = new u(this);
    }, m.prototype.factory = function(e) {
      return h[e] ? e === 'login' ? function() {
            var t = arguments[0];
            return t.currentUserId &&
              (this.status.currentUserId = t.userId), t.currentUserName && (this.status.currentUserName = t.userName), h[e].apply(h, arguments);
          } : function() {
            return h[e].apply(h, arguments);
          } : function() {};
    }, m.prototype.on = function(e, t) {
      var e = e.replace(/^\w/, function(e) {
        return e.toUpperCase();
      });
      typeof t == 'function' &&
        (this.actions['on' + e] ? this.actions['on' + e].push(t) : this.actions['on' + e] = [ t ]);
    }, e = m, e;
  }(Ct, c, d, v, Nt), function(e) {
    window.BD_IM_SDK = window.BD_IM_SDK || e;
  }(Ct), kt = undefined;
})();
