(function () {
  "use strict";

  var reduceMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function getCards() {
    return fetch("cards.json", { cache: "no-cache" })
      .then(function (r) { return r.json(); });
  }

  function qs(id) { return document.getElementById(id); }

  function param(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  /* ---------- Draw page ---------- */
  function initDraw(data) {
    var cards = data.cards;
    var deckName = data.deck || "Oracle";
    var flip = qs("flipCard");
    var cardImg = qs("cardImg");
    var hint = qs("tapHint");
    var reading = qs("reading");
    var nameEl = qs("cardName");
    var kwEl = qs("cardKeywords");
    var teaserEl = qs("teaser");
    var meaningEl = qs("meaning");
    var reflEl = qs("reflection");
    var current = -1;

    cards.forEach(function (c) { var i = new Image(); i.src = c.image; });

    function indexBySlug(slug) {
      for (var i = 0; i < cards.length; i++) { if (cards[i].slug === slug) return i; }
      return -1;
    }

    function pick() {
      if (cards.length < 2) return 0;
      var i;
      do { i = Math.floor(Math.random() * cards.length); } while (i === current);
      return i;
    }

    function reveal(i) {
      var c = cards[i];
      current = i;
      cardImg.src = c.image;
      cardImg.alt = c.name;
      nameEl.textContent = c.name;
      kwEl.textContent = c.keywords;
      teaserEl.textContent = c.teaser;
      meaningEl.innerHTML = "";
      c.meaning.forEach(function (p) {
        var el = document.createElement("p");
        el.textContent = p;
        meaningEl.appendChild(el);
      });
      reflEl.textContent = c.reflection;
      flip.classList.add("is-flipped");
      if (hint) hint.style.opacity = "0";
      requestAnimationFrame(function () { reading.classList.add("show"); });
      history.replaceState(null, "", "?card=" + c.slug);
      document.title = c.name + " — " + deckName;
    }

    function draw() {
      var next = pick();
      var wasFlipped = flip.classList.contains("is-flipped");
      var delay = (wasFlipped && !reduceMotion) ? 430 : 0;
      if (wasFlipped) {
        flip.classList.remove("is-flipped");
        reading.classList.remove("show");
      }
      setTimeout(function () { reveal(next); }, delay);
    }

    flip.addEventListener("click", draw);
    var again = qs("drawAgain");
    if (again) again.addEventListener("click", draw);

    var share = qs("shareBtn");
    if (share) share.addEventListener("click", function () {
      var url = window.location.href;
      var title = cards[current] ? cards[current].name : deckName;
      if (navigator.share) {
        navigator.share({ title: title, url: url }).catch(function () {});
      } else if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(showToast);
      } else {
        showToast();
      }
    });

    var slug = param("card");
    if (slug && indexBySlug(slug) !== -1) {
      var idx = indexBySlug(slug);
      if (reduceMotion) { reveal(idx); }
      else { setTimeout(function () { reveal(idx); }, 280); }
    } else if (hint) {
      hint.textContent = "Tap the card to reveal";
    }
  }

  /* ---------- Browse page ---------- */
  function initGrid(data) {
    var grid = qs("grid");
    data.cards.forEach(function (c) {
      var a = document.createElement("a");
      a.className = "tile";
      a.href = "draw.html?card=" + c.slug;
      var img = document.createElement("img");
      img.src = c.thumb;
      img.alt = c.name;
      img.loading = "lazy";
      var span = document.createElement("span");
      span.textContent = c.name;
      a.appendChild(img);
      a.appendChild(span);
      grid.appendChild(a);
    });
  }

  function showToast() {
    var t = qs("toast");
    if (!t) return;
    t.classList.add("show");
    setTimeout(function () { t.classList.remove("show"); }, 1800);
  }

  document.addEventListener("DOMContentLoaded", function () {
    getCards().then(function (data) {
      if (qs("flipCard")) initDraw(data);
      if (qs("grid")) initGrid(data);
    }).catch(function () {
      var err = qs("error");
      if (err) err.style.display = "block";
    });
  });
})();
