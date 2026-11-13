// なすびのお庭：結果画面の「次のゲーム」（全作品で共通の部品）
// ・結果画面のボタンの下（広告の帯の上）に「▶ 次のゲーム 右にスライド」の行を足す
// ・右にスライドするか押すと「おすすめの画面」に切りかわる（帯 → おすすめ3つ → 大きい広告。広告はスマホのときだけ）
// ・左にスライドするか右上の ✖ で結果画面に戻る
// ・おすすめは next.json（1時間ごとに自動で作る）の「いま遊ばれている1位・2位」と「最新作」。固定の作品があれば「注目」としていちばん上。自分の作品は出さない
// ・おすすめの画面を出しているあいだは、結果画面の広告の場所を隠す（広告の上に画面を重ねないため。AdMax規約 第10条12号(2)）
// ・おすすめの画面の広告は、開いてから1.2秒は押せない。同じ広告の読みこみは30秒に1回まで
// ・おすすめに並んだ作品が配信中なら、そのカードの絵に「● 配信中」の帯を出す（開くたびに確かめる。1分に1回まで）。配信の一覧がある作品は下の LIVE に足す
// ・作品ごとの設定は window.NSB_NEXT = {g:作品の名前, r:[{a:行を入れる場所, v:結果画面}], ad:広告を出すか}
(function () {
  try {
    var C = window.NSB_NEXT;
    if (!C || !C.r || !C.r.length || window.__nsbNext) return;
    window.__nsbNext = 1;
    var BASE = 'https://nasubi-no-oniwa.github.io/';
    var SP = /iPhone|iPod|Android|Mobile|Windows Phone|BlackBerry/i.test(navigator.userAgent || '');
    var ADS = !!C.ad && SP && !/[?&]noad=1/.test(location.search);
    var AD = BASE + 'ad/', AD2 = BASE + 'ad/big.html', LOCK = 1200, MIN = 30000;
    var lang = (navigator.language || 'ja').slice(0, 2).toLowerCase();
    var T = {
      ja: { row: '次のゲーム　右にスライド', ttl: '次はこれで遊ぶ？', back: '◀ 左にスライドか ✖ で、結果にもどる', t1: 'いま1位', t2: 'いま2位', nw: '最新作', pin: '注目', lv: '配信中', fl1: '新作を毎日出してます', fl2: 'なすPをフォロー' },
      en: { row: 'Next game — slide right', ttl: 'Play this next?', back: '◀ Slide left or tap ✖ to go back', t1: 'Top now', t2: '#2 now', nw: 'Newest', pin: 'Featured', lv: 'LIVE', fl1: 'New games every day', fl2: 'Follow NasuP' },
      zh: { row: '下一個遊戲　往右滑', ttl: '接下來玩這個？', back: '◀ 往左滑或按 ✖ 回到結果', t1: '現在第1名', t2: '現在第2名', nw: '最新作', pin: '注目', lv: '直播中', fl1: '每天都有新作', fl2: '追蹤 なすP' },
      ko: { row: '다음 게임　오른쪽으로 밀기', ttl: '다음엔 이거 할래?', back: '◀ 왼쪽으로 밀거나 ✖ 로 결과로 돌아가기', t1: '지금 1위', t2: '지금 2위', nw: '최신작', pin: '주목', lv: '방송 중', fl1: '매일 신작 공개', fl2: 'なすP 팔로우' }
    };
    var t = T[lang] || T.en;
    // 配信中かどうかの置き場所（だれでも読める所だけ）。list：配信の一覧（中身があれば配信中）、flag：{on:true} の印
    var RT = '-default-rtdb.asia-southeast1.firebasedatabase.app/';
    var LIVE = {
      'enpitsu-life': ['https://ft-blue' + RT + 'el/live.json', 'list'],
      'fairies-tower': ['https://ft-green' + RT + 'ft_live.json', 'list'],
      'shiincrad': ['https://shiincrad' + RT + 'sh_live.json', 'list'],
      'integra-layer': ['https://integra-layer' + RT + 'stream.json', 'flag']
    };
    var liveAt = {};
    // 行の下に「作った人をフォロー」の1行（押すとXのフォローの画面が開く）
    var FOLLOW = 'https://x.com/intent/follow?screen_name=nath12345678901', follows = [];
    function mkFollow() {
      var a = el('a', 'display:block;box-sizing:border-box;width:100%;max-width:320px;margin:8px auto 0;padding:4px 0;text-align:center;font:12px/1.5 sans-serif;color:#667;text-decoration:none');
      a.className = 'nsb-follow'; a.href = FOLLOW; a.target = '_blank'; a.rel = 'noopener';
      a.innerHTML = esc(t.fl1) + '　<b style="color:#1d9bf0">𝕏 ' + esc(t.fl2) + ' ›</b>';
      ['touchstart', 'touchend', 'pointerdown', 'pointerup', 'mousedown', 'mouseup'].forEach(function (n) { a.addEventListener(n, stop); });
      a.addEventListener('click', function (e) { stop(e); ev('follow_click'); });
      return a;
    }
    function isLive(v, kind) {
      if (!v || typeof v !== 'object') return false;
      if (kind === 'flag') return !!v.on && /^https:\/\//.test(v.url || '');
      for (var k in v) { var x = v[k]; if (x && typeof x === 'object' && x.n && /^https:\/\//.test(x.u || '')) return true; }
      return false;
    }
    function checkLive() {
      if (!panel || !window.fetch) return;
      Array.prototype.forEach.call(panel.querySelectorAll('[data-lv]'), function (b) {
        var g = b.getAttribute('data-lv'), L = LIVE[g]; if (!L || Date.now() - (liveAt[g] || 0) < 60000) return;
        liveAt[g] = Date.now();
        fetch(L[0], { cache: 'no-store' }).then(function (r) { return r.ok ? r.json() : null; })
          .then(function (v) { b.style.display = isLive(v, L[1]) ? 'block' : 'none'; }).catch(function () {});
      });
    }
    var openedAt = 0, D = null, picks = [], rows = [], panel = null, opened = false, hid = [], adf = null, adf2 = null, adLast = 0, adTimer = 0;

    function el(tag, css, html) { var e = document.createElement(tag); if (css) e.style.cssText = css; if (html != null) e.innerHTML = html; return e; }
    function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
    function nm(x) { return (lang !== 'ja' && x.n && x.n[lang]) || (lang !== 'ja' && x.n && x.n.en) || x.name; }
    function ev(name) { try { if (typeof window.gtag === 'function') window.gtag('event', name, { from_game: C.g }); } catch (_) {} }
    function stop(e) { try { e.stopPropagation(); } catch (_) {} }

    function pick() {
      var ok = function (x) { return x && x.g !== C.g && !x.ex; };
      // 固定の作品（pin）は「注目」、それ以外は本当の順位で「いま1位」「いま2位」
      var top = (D.top || []).filter(ok), out = [], rank = 0;
      for (var i = 0; i < top.length && out.length < 2; i++) out.push([top[i].pin ? t.pin : (rank++ === 0 ? t.t1 : t.t2), top[i]]);
      var nw = (D.new || []).filter(function (x) { return ok(x) && out.every(function (p) { return p[1].g !== x.g; }); })[0];
      if (nw) out.push([t.nw, nw]);
      return out;
    }

    // ── 結果画面の行 ──
    function mkRow() {
      var r = el('div', 'display:block;position:relative;box-sizing:border-box;width:100%;max-width:320px;height:46px;margin:18px auto 0;padding:0;border-radius:23px;background:#e9eef8;box-shadow:inset 0 0 0 2px #3a7bd5;overflow:hidden;touch-action:none;user-select:none;-webkit-user-select:none;cursor:pointer;flex:0 0 auto;align-self:center;transform:none');
      r.className = 'nsb-next';
      var th = picks.map(function (p) { return p[1].img ? '<img alt="" src="' + esc(BASE + p[1].img) + '" style="width:26px;height:26px;border-radius:6px;object-fit:cover;margin-left:3px;opacity:.85;display:block">' : ''; }).join('');
      r.innerHTML = '<div class="k" style="position:absolute;left:4px;top:4px;width:38px;height:38px;border-radius:50%;background:#3a7bd5;color:#fff;font:bold 18px/38px sans-serif;text-align:center;z-index:2">▶</div>' +
        '<div style="position:absolute;left:52px;right:' + (th ? 96 : 12) + 'px;top:0;bottom:0;display:flex;align-items:center;font:bold 13px sans-serif;color:#2d5fa8;white-space:nowrap;overflow:hidden">' + esc(t.row) + '</div>' +
        '<div style="position:absolute;right:12px;top:10px;display:flex">' + th + '</div>';
      var k = r.querySelector('.k'), sx = null, moved = 0;
      function down(e) { stop(e); sx = (e.touches ? e.touches[0].clientX : e.clientX); moved = 0; k.style.transition = 'none'; }
      function move(e) { if (sx == null) return; stop(e); if (e.cancelable) e.preventDefault(); var x = (e.touches ? e.touches[0].clientX : e.clientX) - sx; moved = Math.max(moved, Math.abs(x)); x = Math.max(0, Math.min(r.clientWidth - 46, x)); k.style.transform = 'translateX(' + x + 'px)'; if (x > (r.clientWidth - 46) * 0.6) { sx = null; reset(); open(); } }
      function up(e) { if (sx == null) return; stop(e); sx = null; reset(); }
      function reset() { k.style.transition = 'transform .2s'; k.style.transform = 'translateX(0)'; }
      if (window.PointerEvent) { r.addEventListener('pointerdown', function (e) { try { r.setPointerCapture(e.pointerId); } catch (_) {} down(e); }); r.addEventListener('pointermove', move); r.addEventListener('pointerup', up); r.addEventListener('pointercancel', function (e) { stop(e); sx = null; reset(); }); }
      else { r.addEventListener('touchstart', down, { passive: true }); r.addEventListener('touchmove', move, { passive: false }); r.addEventListener('touchend', up); r.addEventListener('mousedown', down); r.addEventListener('mousemove', move); r.addEventListener('mouseup', up); }
      ['touchstart', 'touchmove', 'touchend', 'mousedown', 'mouseup'].forEach(function (n) { r.addEventListener(n, stop); });
      r.addEventListener('click', function (e) { stop(e); if (moved < 8) open(); });
      return r;
    }
    function placeRows() {
      for (var i = 0; i < C.r.length; i++) {
        var a = document.querySelector(C.r[i].a); if (!a) continue;
        var r = rows[i] || (rows[i] = mkRow());
        // 行は、広告の箱ではないいちばん後ろの中身のすぐ後ろに置く（広告が下にある作品では「ボタン → 行 → 帯」になる）
        var last = null;
        for (var n = a.lastElementChild; n; n = n.previousElementSibling) { if (n !== r && !(n.classList && (n.classList.contains('nsb-ad') || n.classList.contains('nsb-follow')))) { last = n; break; } }
        var want = last ? last.nextSibling : a.firstChild;
        if (r.parentNode !== a || (r !== want && r.previousElementSibling !== last)) a.insertBefore(r, want);
        var f = follows[i] || (follows[i] = mkFollow());
        if (r.nextSibling !== f) a.insertBefore(f, r.nextSibling);
      }
    }

    // ── おすすめの画面 ──
    function mkf(u, w, h) { var f = el('iframe', 'border:0;margin:0;padding:0;width:' + w + 'px;height:' + h + 'px;display:block;max-width:none;pointer-events:none'); f.title = 'ad'; f.setAttribute('scrolling', 'no'); f.width = w; f.height = h; f.src = u; return f; }
    function mkPanel() {
      var p = el('div', 'position:fixed;left:0;top:0;right:0;bottom:0;z-index:2147483000;background:#fffdf7;overflow-y:auto;-webkit-overflow-scrolling:touch;touch-action:pan-y;display:none;font-family:sans-serif;color:#222;text-align:center');
      p.className = 'nsb-next-panel';
      var cards = picks.map(function (q) {
        var x = q[1];
        return '<a href="' + esc(BASE + x.g + '/') + '" data-g="' + esc(x.g) + '" style="flex:1 1 0;max-width:112px;min-width:0;display:block;text-decoration:none;color:#222;background:#fff;border:1px solid #ddd;border-radius:12px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,.12)">' +
          '<div style="font:bold 11px sans-serif;color:#fff;background:' + (q[0] === t.nw ? '#e0457b' : q[0] === t.pin ? '#e8900c' : '#3a7bd5') + ';padding:3px 0">' + esc(q[0]) + '</div>' +
          '<div style="position:relative">' + (x.img ? '<img alt="" src="' + esc(BASE + x.img) + '" style="width:100%;aspect-ratio:1/1;object-fit:cover;display:block">' : '<div style="aspect-ratio:1/1;background:#f1ede4"></div>') +
          (LIVE[x.g] ? '<div data-lv="' + esc(x.g) + '" style="display:none;position:absolute;left:0;right:0;bottom:0;background:#e5262b;color:#fff;font:bold 11px sans-serif;padding:3px 0;letter-spacing:.05em">● ' + esc(t.lv) + '</div>' : '') + '</div>' +
          '<div style="font:bold 12px sans-serif;padding:6px 3px 8px;line-height:1.25;word-break:break-all">' + esc(nm(x)) + '</div></a>';
      }).join('');
      p.innerHTML = '<div style="position:sticky;top:0;background:#fffdf7;padding:14px 56px 10px;font:bold 18px sans-serif;color:#333;border-bottom:1px solid #eee;z-index:2">' + esc(t.ttl) +
        '<button type="button" class="x" aria-label="close" style="position:absolute;right:12px;top:8px;width:38px;height:38px;border:0;border-radius:50%;background:#eee;color:#555;font:bold 20px sans-serif;padding:0;cursor:pointer">✖</button></div>' +
        (ADS ? '<div class="b1" style="width:320px;height:50px;margin:20px auto 0;overflow:hidden"></div>' : '') +
        '<div style="display:flex;gap:10px;justify-content:center;margin:26px 12px 0">' + cards + '</div>' +
        (ADS ? '<div class="b2" style="width:300px;height:250px;margin:26px auto 0;overflow:hidden"></div>' : '') +
        '<div style="color:#888;font:13px sans-serif;margin:18px 12px 28px">' + esc(t.back) + '</div>';
      p.querySelector('.x').addEventListener('click', function (e) { stop(e); if (Date.now() - openedAt < 500) return; close(); });
      Array.prototype.forEach.call(p.querySelectorAll('a[data-g]'), function (a) { a.addEventListener('click', function (e) { if (Date.now() - openedAt < 500) { e.preventDefault(); return; } ev('next_click'); }); });
      // 左にスライドで戻る（広告の上で始まった指の動きは広告の中に入るので、ここには来ない）
      var sx = null, sy = 0;
      p.addEventListener('touchstart', function (e) { stop(e); var q = e.touches[0]; sx = q.clientX; sy = q.clientY; }, { passive: true });
      p.addEventListener('touchend', function (e) { stop(e); if (sx == null) return; var q = e.changedTouches[0], dx = q.clientX - sx, dy = q.clientY - sy; sx = null; if (dx < -70 && Math.abs(dy) < Math.abs(dx) * 0.7) close(); });
      p.addEventListener('mousedown', function (e) { sx = e.clientX; sy = e.clientY; });
      p.addEventListener('mouseup', function (e) { if (sx == null) return; var dx = e.clientX - sx, dy = e.clientY - sy; sx = null; if (dx < -70 && Math.abs(dy) < Math.abs(dx) * 0.7) close(); });
      ['touchmove', 'pointerdown', 'pointermove', 'pointerup', 'click', 'keydown'].forEach(function (n) { p.addEventListener(n, stop); });
      document.body.appendChild(p);
      return p;
    }
    function lockAds() {
      [adf, adf2].forEach(function (f) { if (f) f.style.pointerEvents = 'none'; });
      setTimeout(function () { if (opened) [adf, adf2].forEach(function (f) { if (f) f.style.pointerEvents = 'auto'; }); }, LOCK);
    }
    function killAds() { [adf, adf2].forEach(function (f) { if (f && f.parentNode) f.parentNode.removeChild(f); }); adf = adf2 = null; }
    function open() {
      if (opened || !picks.length) return;
      panel = panel || mkPanel();
      // 結果画面の広告の場所を隠す（広告の上に画面を重ねない）
      hid = [];
      C.r.forEach(function (c) { [c.a, c.v].forEach(function (s) { var e = s && document.querySelector(s); if (e && hid.indexOf(e) < 0) { hid.push(e); e.__nsbVis = [e.style.getPropertyValue('visibility'), e.style.getPropertyPriority('visibility')]; e.style.setProperty('visibility', 'hidden', 'important'); } }); });
      // タイトル画面などほかの場所の広告も、おすすめの画面のうしろでは出さない（広告の箱ごと隠すと、いつもの広告の仕組みが止める）
      Array.prototype.forEach.call(document.querySelectorAll('.nsb-ad'), function (e) { if (!panel.contains(e) && hid.indexOf(e) < 0) { hid.push(e); e.__nsbVis = [e.style.getPropertyValue('visibility'), e.style.getPropertyPriority('visibility')]; e.style.setProperty('visibility', 'hidden', 'important'); } });
      Array.prototype.forEach.call(document.querySelectorAll('.nsb-ad iframe'), function (f) { if (!panel.contains(f)) { f.style.visibility = 'hidden'; f.style.pointerEvents = 'none'; } });
      panel.style.display = 'block'; panel.scrollTop = 0; opened = true; openedAt = Date.now();
      checkLive();
      if (ADS) {
        clearTimeout(adTimer);
        if (!adf) { adf = mkf(AD, 320, 50); adf2 = mkf(AD2, 300, 250); panel.querySelector('.b1').appendChild(adf); panel.querySelector('.b2').appendChild(adf2); adLast = Date.now(); }
        lockAds();
      }
      ev('next_open');
    }
    function close() {
      if (!opened) return;
      opened = false; panel.style.display = 'none';
      [adf, adf2].forEach(function (f) { if (f) f.style.pointerEvents = 'none'; });
      if (adf) { clearTimeout(adTimer); adTimer = setTimeout(function () { if (!opened) killAds(); }, Math.max(2000, MIN - (Date.now() - adLast))); }
      hid.forEach(function (e) { var o = e.__nsbVis || ['', '']; if (o[0]) e.style.setProperty('visibility', o[0], o[1]); else e.style.removeProperty('visibility'); }); hid = [];
      // 結果画面の広告は、いつもの広告の仕組みがまた見せる（最初の1.2秒は押せない）
    }
    window.addEventListener('pageshow', function () { if (opened) close(); });

    function start() {
      picks = pick(); if (!picks.length) return;
      placeRows();
      try { new MutationObserver(function () { placeRows(); }).observe(document.body, { childList: true, subtree: true }); } catch (_) {}
      setInterval(placeRows, 1500);
    }
    function load() {
      var x = new XMLHttpRequest();
      x.open('GET', BASE + 'next/next.json?h=' + Math.floor(Date.now() / 600000), true);
      x.onload = function () { try { if (x.status === 200) { D = JSON.parse(x.responseText); start(); } } catch (e) { try { console.log('nasubi-next:', e && e.message); } catch (_) {} } };
      x.send();
    }
    if (document.body) load(); else document.addEventListener('DOMContentLoaded', load);
  } catch (e) {}
})();
