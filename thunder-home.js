(function() {
  var books = [
    // SCIENCE - Boards Dominator
    { img: 'https://raw.githubusercontent.com/commercesehoga/books/main/photo_4909327286859926962_y.jpg', title: 'Boards Dominator — Physics', sub: 'Most Repeated Topics · Topper Answer Sheet · 3 Mock Tests · Mind Maps · 5 PYQ Papers', badge: 'Science · FREE', link: 'https://drive.google.com/drive/u/0/folders/1AQ39MTziS5b5BEuCOIiWB_b8A5rC8Gai' },
    { img: 'https://raw.githubusercontent.com/commercesehoga/books/main/photo_4922813557183810432_y.jpg', title: 'Boards Dominator — Chemistry', sub: 'IMP Questions · Chapter-wise PYQs · Colourful Mind Maps · 5 Sample Papers', badge: 'Science · FREE', link: 'https://drive.google.com/drive/u/0/folders/1AQ39MTziS5b5BEuCOIiWB_b8A5rC8Gai' },
    { img: 'https://raw.githubusercontent.com/commercesehoga/books/main/photo_4927446211988491220_y.jpg', title: 'Boards Dominator — Biology', sub: 'Most Repeated Topics · Topper Format · 5 PYQ Papers · 3 Mock Tests', badge: 'Science · FREE', link: 'https://drive.google.com/drive/u/0/folders/1AQ39MTziS5b5BEuCOIiWB_b8A5rC8Gai' },
    { img: 'https://raw.githubusercontent.com/commercesehoga/books/main/photo_6084659406831291790_y.jpg', title: 'Boards Dominator — Mathematics', sub: 'Mind Maps · Topper Answer Sheet · 5 Sample Papers · 5 PYQ Board Papers', badge: 'Science · FREE', link: 'https://drive.google.com/drive/u/0/folders/1AQ39MTziS5b5BEuCOIiWB_b8A5rC8Gai' },
    { img: 'https://raw.githubusercontent.com/commercesehoga/books/main/photo_6057485470872046814_y.jpg', title: 'Boards Dominator — Physical Education', sub: 'Chapter-Wise PYQs · High Priority Topics · 5 Full Sample Papers · Cheat Sheet', badge: 'Science · FREE', link: 'https://drive.google.com/drive/u/0/folders/1AQ39MTziS5b5BEuCOIiWB_b8A5rC8Gai' },
    // HUMANITIES - Boards Killer + Pro Series
    { img: 'https://raw.githubusercontent.com/commercesehoga/books/main/photo_4940627101547695096_y.jpg', title: 'Boards Killer — History', sub: 'IMP Topics · PYQs · Top 50 MCQs · Case Studies · VBQ · Topper Sheets', badge: 'Humanities · FREE', link: 'https://drive.google.com/drive/u/0/folders/1AQ39MTziS5b5BEuCOIiWB_b8A5rC8Gai' },
    { img: 'https://raw.githubusercontent.com/commercesehoga/books/main/photo_4951850989258476381_y.jpg', title: 'Boards Killer — Political Science', sub: 'IMP Topics · Top 50 MCQs · Case Studies · VBQ · 3 Sample Papers', badge: 'Humanities · FREE', link: 'https://drive.google.com/drive/u/0/folders/1AQ39MTziS5b5BEuCOIiWB_b8A5rC8Gai' },
    { img: 'https://raw.githubusercontent.com/commercesehoga/books/main/photo_4920531370476506095_y.jpg', title: 'Boards Killer — Geography', sub: 'IMP Topics · Top 50 MCQs · Case Studies · VBQ · Topper Answer Sheets', badge: 'Humanities · FREE', link: 'https://drive.google.com/drive/u/0/folders/1AQ39MTziS5b5BEuCOIiWB_b8A5rC8Gai' },
    { img: 'https://raw.githubusercontent.com/commercesehoga/books/main/photo_6113973954490862805_y.jpg', title: 'Boards Killer — English', sub: 'Mindmap · Topper Sheet · How To Write · PYQs Grammar · Character Sketch', badge: 'Humanities · FREE', link: 'https://drive.google.com/drive/u/0/folders/1AQ39MTziS5b5BEuCOIiWB_b8A5rC8Gai' },
    { img: 'https://raw.githubusercontent.com/commercesehoga/books/main/photo_6127641665708166166_w.jpg', title: 'Boards Pro Series — Applied Maths', sub: 'Digital Notes · Sample Paper · PYQs · Thunder Special · IMP Questions', badge: 'Humanities · FREE', link: 'https://drive.google.com/drive/u/0/folders/1AQ39MTziS5b5BEuCOIiWB_b8A5rC8Gai' },
    { img: 'https://raw.githubusercontent.com/commercesehoga/books/main/photo_6129893465521851821_y.jpg', title: 'Boards Pro Series — Psychology', sub: 'Digital & Handwritten Notes · Sample Paper · PYQs · Thunder Special', badge: 'Humanities · FREE', link: 'https://drive.google.com/drive/u/0/folders/1AQ39MTziS5b5BEuCOIiWB_b8A5rC8Gai' },
    { img: 'https://raw.githubusercontent.com/commercesehoga/books/main/photo_4967569225237072796_y.jpg', title: 'Boards Pro Series — Fine Arts / Painting', sub: 'Digital Notes · Detail Notes · Sample Paper · PYQs · Be A Topper Guide', badge: 'Humanities · FREE', link: 'https://drive.google.com/drive/u/0/folders/1AQ39MTziS5b5BEuCOIiWB_b8A5rC8Gai' },
    // COMMERCE - Sample Papers + Topper Bundle + Pro Series
    { img: 'https://raw.githubusercontent.com/commercesehoga/books/main/photo_6334467078567431810_w.jpg', title: '20+ Sample Papers — Business Studies', sub: 'CBSE SQP · 5-Year PYQs · Keywords · 50 IMP Q · NCERT Underline · Topper Sheet', badge: 'Commerce · FREE', link: 'https://drive.google.com/drive/u/0/folders/1joTejQ8cbehcXiXettc4hEV-rE0xdDir' },
    { img: 'https://raw.githubusercontent.com/commercesehoga/books/main/photo_6334467078567431827_y.jpg', title: '20+ Sample Papers — Economics', sub: 'CBSE SQP · 5-Year PYQs · IMP Dates · Topper Sheet · Colourful Mindmap', badge: 'Commerce · FREE', link: 'https://drive.google.com/drive/u/0/folders/1joTejQ8cbehcXiXettc4hEV-rE0xdDir' },
    { img: 'https://raw.githubusercontent.com/commercesehoga/books/main/photo_6052869020978973973_y.jpg', title: '20+ Sample Papers — Accountancy', sub: 'CBSE SQP · 5-Year PYQs · Mindmap · One Page One Chapter · Head & Subhead', badge: 'Commerce · FREE', link: 'https://drive.google.com/drive/u/0/folders/1joTejQ8cbehcXiXettc4hEV-rE0xdDir' },
    { img: 'https://raw.githubusercontent.com/commercesehoga/books/main/photo_6129401245089861200_y.jpg', title: 'Economics Boards Topper — 5-Book Toolkit', sub: 'Basic to Advanced Learning · Topper Toolkit · NCERT by Thunder · Final Booster', badge: 'Economics · FREE', link: 'https://drive.google.com/drive/u/0/folders/1AQ39MTziS5b5BEuCOIiWB_b8A5rC8Gai' },
    { img: 'https://raw.githubusercontent.com/commercesehoga/books/main/photo_6147654443781000447_y.jpg', title: 'Boards Pro Series — Economics QB', sub: 'Latest CBSE Pattern · 5000+ Q · Chapterwise · Assertion & Reasoning · Case Study', badge: 'Economics · FREE', link: 'https://drive.google.com/drive/u/0/folders/1joTejQ8cbehcXiXettc4hEV-rE0xdDir' },
    // QUESTION BANK - Boards Pro Series QBs
    { img: 'https://raw.githubusercontent.com/commercesehoga/books/main/photo_6127641665708166166_w.jpg', title: 'Boards Pro Series — Applied Maths QB', sub: '5000+ Questions · PYQs · Chapterwise · Most Expected 2025-26 · Case Study', badge: 'Question Bank · FREE', link: 'https://drive.google.com/drive/u/0/folders/1joTejQ8cbehcXiXettc4hEV-rE0xdDir' },
    { img: 'https://raw.githubusercontent.com/commercesehoga/books/main/photo_6129893465521851791_y.jpg', title: 'Boards Pro Series — English QB', sub: 'Latest CBSE Pattern · 5000+ Q · Chapterwise · Competency-Based · Literature', badge: 'Question Bank · FREE', link: 'https://drive.google.com/drive/u/0/folders/1joTejQ8cbehcXiXettc4hEV-rE0xdDir' },
    { img: 'https://raw.githubusercontent.com/commercesehoga/books/main/photo_6134015448715038443_y.jpg', title: 'Boards Pro Series — Mathematics QB', sub: '5000+ Questions · Chapterwise · Case Study · Assertion & Reasoning', badge: 'Question Bank · FREE', link: 'https://drive.google.com/drive/u/0/folders/1joTejQ8cbehcXiXettc4hEV-rE0xdDir' },
    { img: 'https://raw.githubusercontent.com/commercesehoga/books/main/photo_6179387659323641953_w.jpg', title: 'Boards Pro Series — Information Practices QB', sub: '5000+ Q · Chapterwise · Programming & Database · Case Study · Viva Voce', badge: 'Question Bank · FREE', link: 'https://drive.google.com/drive/u/0/folders/1joTejQ8cbehcXiXettc4hEV-rE0xdDir' },
    { img: 'https://raw.githubusercontent.com/commercesehoga/books/main/photo_6179387659323641980_w.jpg', title: 'Boards Pro Series — Computer Science QB', sub: '5000+ Q · Chapterwise · Programming & Database · Practice Papers · MCQs', badge: 'Question Bank · FREE', link: 'https://drive.google.com/drive/u/0/folders/1joTejQ8cbehcXiXettc4hEV-rE0xdDir' },
    // CUET BOOKS - ₹99
    { img: 'https://raw.githubusercontent.com/commercesehoga/books/main/photo_6158707327368892506_y.jpg', title: 'One Book For CUET — Economics', sub: 'Microeconomics · Macroeconomics · Indian Economy · 30+ Mock Tests · Mind Maps', badge: 'CUET · ₹99', link: 'https://drive.google.com/drive/u/0/folders/1joTejQ8cbehcXiXettc4hEV-rE0xdDir' },
    { img: 'https://raw.githubusercontent.com/commercesehoga/books/main/photo_6181639459137327003_y.jpg', title: 'One Book For CUET — English', sub: 'Reading Comprehension · Vocabulary · Grammar · 30+ CBT Mock Tests', badge: 'CUET · ₹99', link: 'https://drive.google.com/drive/u/0/folders/1joTejQ8cbehcXiXettc4hEV-rE0xdDir' },
    { img: 'https://raw.githubusercontent.com/commercesehoga/books/main/photo_6183575716293709829_y.jpg', title: 'One Book For CUET — GAT', sub: '5000+ MCQs · Reasoning · Quant & Numerical Aptitude · 30+ CBT Mock Tests', badge: 'CUET · ₹99', link: 'https://drive.google.com/drive/u/0/folders/1joTejQ8cbehcXiXettc4hEV-rE0xdDir' },
    { img: 'https://raw.githubusercontent.com/commercesehoga/books/main/photo_6197109364401835402_y.jpg', title: 'One Book For CUET — Business Studies', sub: 'Principles of Management · Business Environment · Planning · Staffing · CBT Mocks', badge: 'CUET · ₹99', link: 'https://drive.google.com/drive/u/0/folders/1joTejQ8cbehcXiXettc4hEV-rE0xdDir' },
    { img: 'https://raw.githubusercontent.com/commercesehoga/books/main/photo_6212830293324926523_y.jpg', title: 'One Book For CUET — Accountancy', sub: 'Financial Accounting · Partnership · Company Accounts · Reconciliation', badge: 'CUET · ₹99', link: 'https://drive.google.com/drive/u/0/folders/1joTejQ8cbehcXiXettc4hEV-rE0xdDir' },
    { img: 'https://raw.githubusercontent.com/commercesehoga/books/main/photo_6226714677052378827_y.jpg', title: 'One Book For CUET — Political Science', sub: 'Indian Political System · Political Theories · PYQs 2023-25 · 20 Mock Tests', badge: 'CUET · ₹99', link: 'https://drive.google.com/drive/u/0/folders/1joTejQ8cbehcXiXettc4hEV-rE0xdDir' },
    { img: 'https://raw.githubusercontent.com/commercesehoga/books/main/photo_6226714677052378872_y.jpg', title: 'One Book For CUET — History', sub: 'Themes in Indian History I-III · 3-Year PYQs · 20 Mock Tests · QR for CBT', badge: 'CUET · ₹99', link: 'https://drive.google.com/drive/u/0/folders/1joTejQ8cbehcXiXettc4hEV-rE0xdDir' },
    // GK
    { img: 'https://raw.githubusercontent.com/commercesehoga/books/main/file_00000000c69871faac6321f850c6b1cd.jpg', title: 'General Knowledge — All Exams', sub: 'Top GK from India & World · UPSC · PSC · SSC · Railways', badge: 'GK · MindMaster', link: 'https://thunderstudy.indevs.in/GK_Thunderstudy_compressed.pdf' }
  ];

  var current = 0;
  var total = books.length;
  var stage = document.getElementById('gslider-stage');
  var dotsWrap = document.getElementById('gslider-dots');
  var cards = [];
  var dots = [];
  var autoTimer;
  var sectionVisible = true;

  /* Build cards */
  books.forEach(function(b, i) {
    var card = document.createElement('a');
    card.className = 'gslider-card';
    card.href = b.link;
    card.target = '_blank';
    card.rel = 'noopener';
    card.setAttribute('aria-label', b.title);
    card.innerHTML =
      '<img src="' + b.img + '" alt="' + b.title + '" loading="lazy">' +
      '<div class="gs-overlay">' +
        '<div class="gs-overlay-badge">' + b.badge + '</div>' +
        '<div class="gs-overlay-title">' + b.title + '</div>' +
        '<div class="gs-overlay-sub">' + b.sub + '</div>' +
      '</div>';
    card.addEventListener('click', function(e) {
      if (i !== current) { e.preventDefault(); goTo(i); }
    });
    stage.appendChild(card);
    cards.push(card);

    var dot = document.createElement('div');
    dot.className = 'gslider-dot';
    dot.addEventListener('click', function() { goTo(i); });
    dotsWrap.appendChild(dot);
    dots.push(dot);
  });

  function goTo(idx) {
    current = ((idx % total) + total) % total;
    render();
    resetAuto();
  }

  function gslide(dir) {
    goTo(current + dir);
  }
  window.gslide = gslide;

  function render() {
    /* 3D carousel positions: 5 visible slots */
    var positions = [
      /* far-left */  { x: -220, z: -120, scale: 0.62, opacity: 0.35, rotY: 28,  zIdx: 1 },
      /* left */      { x: -128, z: -40,  scale: 0.78, opacity: 0.65, rotY: 18,  zIdx: 2 },
      /* center */    { x: -90,  z: 60,   scale: 1.0,  opacity: 1.0,  rotY: 0,   zIdx: 5 },
      /* right */     { x: 52,   z: -40,  scale: 0.78, opacity: 0.65, rotY: -18, zIdx: 2 },
      /* far-right */ { x: 140,  z: -120, scale: 0.62, opacity: 0.35, rotY: -28, zIdx: 1 },
    ];

    cards.forEach(function(card, i) {
      var diff = i - current;
      /* wrap diff */
      if (diff > total/2)  diff -= total;
      if (diff < -total/2) diff += total;

      var slot = diff + 2; /* map -2..+2 → 0..4 */

      if (slot < 0 || slot > 4) {
        card.style.opacity = '0';
        card.style.pointerEvents = 'none';
        card.style.zIndex = '0';
        card.classList.remove('gs-center');
        return;
      }
      var p = positions[slot];
      card.style.opacity = p.opacity;
      card.style.zIndex = p.zIdx;
      card.style.pointerEvents = slot === 2 ? 'auto' : 'auto';
      card.style.transform =
        'translate(-50%, -50%) translateX(' + p.x + 'px) translateZ(' + p.z + 'px) rotateY(' + p.rotY + 'deg) scale(' + p.scale + ')';
      if (slot === 2) {
        card.classList.add('gs-center');
      } else {
        card.classList.remove('gs-center');
      }
    });

    dots.forEach(function(d, i) {
      d.classList.toggle('active', i === current);
    });

    var dBtn = document.getElementById('galaxy-download-btn');
    var dLabel = document.getElementById('galaxy-download-label');
    if (dBtn && dLabel) {
      var b = books[current];
      dBtn.href = b.link;
      dLabel.textContent = 'Download ' + b.title;
    }
  }

  function resetAuto() {
    clearInterval(autoTimer);
    if (!sectionVisible) return;
    autoTimer = setInterval(function() { goTo(current + 1); }, 15000);
  }

  /* Touch/swipe support */
  var touchStartX = 0;
  stage.addEventListener('touchstart', function(e) { touchStartX = e.touches[0].clientX; }, { passive: true });
  stage.addEventListener('touchend', function(e) {
    var dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) goTo(current + (dx < 0 ? 1 : -1));
  }, { passive: true });

  render();

  /* Pause auto-slide when the books section is not visible */
  var galaxySection = stage.closest('section') || stage.parentElement;
  if (galaxySection && 'IntersectionObserver' in window) {
    var galaxyObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        sectionVisible = entry.isIntersecting;
        if (sectionVisible) {
          resetAuto();
        } else {
          clearInterval(autoTimer);
        }
      });
    }, { threshold: 0.25 });
    galaxyObserver.observe(galaxySection);
  } else {
    resetAuto();
  }
})();

(function() {
  var fbBooks = [
    { img: 'https://raw.githubusercontent.com/commercesehoga/books/main/file_00000000c69871faac6321f850c6b1cd.jpg', title: 'General Knowledge — All Exams', sub: 'Top GK from India & World · UPSC · PSC · SSC · Railways', badge: 'GK · MindMaster', link: 'https://thunderstudy.indevs.in/GK_Thunderstudy_compressed.pdf' },
    { img: 'https://raw.githubusercontent.com/commercesehoga/books/main/photo_4909327286859926962_y.jpg', title: 'Boards Dominator — Physics', sub: 'Most Repeated Topics · Topper Answer Sheet · 3 Mock Tests · Mind Maps · 5 PYQ Papers', badge: 'Science · FREE', link: 'https://drive.google.com/drive/u/0/folders/1AQ39MTziS5b5BEuCOIiWB_b8A5rC8Gai' },
    { img: 'https://raw.githubusercontent.com/commercesehoga/books/main/photo_4922813557183810432_y.jpg', title: 'Boards Dominator — Chemistry', sub: 'IMP Questions · 5 Sample Papers', badge: 'Science · FREE', link: 'https://drive.google.com/drive/u/0/folders/1AQ39MTziS5b5BEuCOIiWB_b8A5rC8Gai' },
    { img: 'https://raw.githubusercontent.com/commercesehoga/books/main/photo_4927446211988491220_y.jpg', title: 'Boards Dominator — Biology', sub: 'Topper Format · 3 Mock Tests', badge: 'Science · FREE', link: 'https://drive.google.com/drive/u/0/folders/1AQ39MTziS5b5BEuCOIiWB_b8A5rC8Gai' },
    { img: 'https://raw.githubusercontent.com/commercesehoga/books/main/photo_4940627101547695096_y.jpg', title: 'Boards Killer — History', sub: 'IMP Topics · Case Studies · VBQ', badge: 'Humanities · FREE', link: 'https://drive.google.com/drive/u/0/folders/1AQ39MTziS5b5BEuCOIiWB_b8A5rC8Gai' },
    { img: 'https://raw.githubusercontent.com/commercesehoga/books/main/photo_4951850989258476381_y.jpg', title: 'Boards Killer — Political Science', sub: 'Top 50 MCQs · 3 Sample Papers', badge: 'Humanities · FREE', link: 'https://drive.google.com/drive/u/0/folders/1AQ39MTziS5b5BEuCOIiWB_b8A5rC8Gai' },
    { img: 'https://raw.githubusercontent.com/commercesehoga/books/main/photo_4920531370476506095_y.jpg', title: 'Boards Killer — Geography', sub: 'IMP Topics · Top 50 MCQs · Case Studies · VBQ · Topper Answer Sheets', badge: 'Humanities · FREE', link: 'https://drive.google.com/drive/u/0/folders/1AQ39MTziS5b5BEuCOIiWB_b8A5rC8Gai' },
    { img: 'https://raw.githubusercontent.com/commercesehoga/books/main/photo_6334467078567431810_w.jpg', title: '20+ Sample Papers — BST', sub: 'CBSE SQP · 5-Year PYQs · Keywords · NCERT Underline · Acronyms', badge: 'Commerce · FREE', link: 'https://drive.google.com/drive/u/0/folders/1joTejQ8cbehcXiXettc4hEV-rE0xdDir' },
    { img: 'https://raw.githubusercontent.com/commercesehoga/books/main/photo_6334467078567431827_y.jpg', title: '20+ Sample Papers — Economics', sub: 'CBSE SQP · 5-Year PYQs · IMP Dates · Topper Sheet · Colourful Mindmap', badge: 'Commerce · FREE', link: 'https://drive.google.com/drive/u/0/folders/1joTejQ8cbehcXiXettc4hEV-rE0xdDir' },
    { img: 'https://raw.githubusercontent.com/commercesehoga/books/main/photo_6052869020978973973_y.jpg', title: '20+ Sample Papers — Accountancy', sub: 'CBSE SQP · 5-Year PYQs · Mindmap · One Page One Chapter · Head & Subhead', badge: 'Commerce · FREE', link: 'https://drive.google.com/drive/u/0/folders/1joTejQ8cbehcXiXettc4hEV-rE0xdDir' },
    { img: 'https://raw.githubusercontent.com/commercesehoga/books/main/photo_6183575716293709829_y.jpg', title: 'One Book For CUET — GAT', sub: '5000+ MCQs · Reasoning · Quant & Numerical Aptitude · 30+ CBT Mock Tests', badge: 'CUET · ₹99', link: 'https://drive.google.com/drive/u/0/folders/1AQ39MTziS5b5BEuCOIiWB_b8A5rC8Gai' }
  ];

  var fbCurrent = 0;
  var fbTotal = fbBooks.length;
  var fbTimer;
  var fbVisible = true;

  var imgLeft = document.getElementById('fb-img-left');
  var imgCenter = document.getElementById('fb-img-center');
  var imgRight = document.getElementById('fb-img-right');
  var fbBadge = document.getElementById('fb-badge');
  var fbTitle = document.getElementById('fb-title');
  var fbSubEl = document.getElementById('fb-sub');
  var fbDownloadBtn = document.getElementById('fb-download-btn');
  var fbDownloadLabel = document.getElementById('fb-download-label');
  var fbDotsWrap = document.getElementById('fb-dots');
  var fbDots = [];

  fbBooks.forEach(function(b, i) {
    var dot = document.createElement('div');
    dot.className = 'fb-dot';
    dot.addEventListener('click', function() { fbGoTo(i); });
    fbDotsWrap.appendChild(dot);
    fbDots.push(dot);
  });

  function fbRender() {
    var leftIdx = (fbCurrent - 1 + fbTotal) % fbTotal;
    var rightIdx = (fbCurrent + 1) % fbTotal;
    var center = fbBooks[fbCurrent];
    var left = fbBooks[leftIdx];
    var right = fbBooks[rightIdx];

    imgLeft.src = left.img;
    imgLeft.alt = left.title;
    imgCenter.src = center.img;
    imgCenter.alt = center.title;
    imgRight.src = right.img;
    imgRight.alt = right.title;

    fbBadge.textContent = center.badge;
    fbTitle.textContent = center.title;
    fbSubEl.textContent = center.sub;
    fbDownloadBtn.href = center.link;
    fbDownloadLabel.textContent = 'Free Download — ' + center.title;

    fbDots.forEach(function(d, i) {
      d.classList.toggle('active', i === fbCurrent);
    });
  }

  function fbGoTo(idx) {
    fbCurrent = ((idx % fbTotal) + fbTotal) % fbTotal;
    fbRender();
    fbResetAuto();
  }
  window.__fbGoTo = fbGoTo;

  document.getElementById('fb-prev').addEventListener('click', function() { fbGoTo(fbCurrent - 1); });
  document.getElementById('fb-next').addEventListener('click', function() { fbGoTo(fbCurrent + 1); });
  document.getElementById('fb-card-left').addEventListener('click', function() { fbGoTo(fbCurrent - 1); });
  document.getElementById('fb-card-right').addEventListener('click', function() { fbGoTo(fbCurrent + 1); });

  function fbResetAuto() {
    clearInterval(fbTimer);
    if (!fbVisible) return;
    fbTimer = setInterval(function() { fbGoTo(fbCurrent + 1); }, 15000);
  }

  fbRender();

  var fbSection = document.getElementById('featured-book');
  if (fbSection && 'IntersectionObserver' in window) {
    var fbObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        fbVisible = entry.isIntersecting;
        if (fbVisible) { fbResetAuto(); } else { clearInterval(fbTimer); }
      });
    }, { threshold: 0.25 });
    fbObserver.observe(fbSection);
  } else {
    fbResetAuto();
  }
})();

// PWA global functions — defined first so onclick attributes can call them
  function pwaTriggerInstall() {
    if (window.pwaInstallPrompt) {
      window.pwaInstallPrompt.prompt();
      window.pwaInstallPrompt.userChoice.then(function() {
        window.pwaInstallPrompt = null;
        pwaDismiss();
      });
    }
  }
  function pwaDismiss() {
    var banner = document.getElementById('pwa-banner');
    if (banner) banner.classList.remove('show');
    try { localStorage.setItem('pwa-dismissed', '1'); } catch(e) {}
  }

  // Boot screen
  window.addEventListener('load', function() {
    if (isAdvancedSearchRoute()) {
      document.getElementById('boot').classList.add('hidden');
      document.getElementById('main').style.display = 'none';
      document.getElementById('search-page').hidden = false;
      initAdvancedSearchPage();
      return;
    }

    var alreadyBooted = sessionStorage.getItem('thunderstudy_booted');
    if (alreadyBooted) {
      document.getElementById('boot').classList.add('hidden');
      document.getElementById('main').classList.add('visible');
    } else {
      setTimeout(function() {
        document.getElementById('boot').classList.add('hidden');
        document.getElementById('main').classList.add('visible');
        sessionStorage.setItem('thunderstudy_booted', '1');
      }, 900);
    }
    loadThunderNotices();
  });

  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('img').forEach(function(img) {
      if (!img.hasAttribute('loading')) img.setAttribute('loading', 'lazy');
      if (!img.hasAttribute('decoding')) img.setAttribute('decoding', 'async');
    });
    var closeNotice = document.getElementById('notice-popup-close');
    var popup = document.getElementById('notice-popup');
    if (closeNotice && popup) {
      closeNotice.addEventListener('click', function() { popup.hidden = true; });
      popup.addEventListener('click', function(e) { if (e.target === popup) popup.hidden = true; });
    }
  });

  // FAQ toggle
  function toggleFaq(btn) {
    var isOpen = btn.getAttribute('aria-expanded') === 'true';
    // close all
    document.querySelectorAll('.faq-q').forEach(function(b) {
      b.setAttribute('aria-expanded', 'false');
      b.nextElementSibling.classList.remove('open');
    });
    if (!isOpen) {
      btn.setAttribute('aria-expanded', 'true');
      btn.nextElementSibling.classList.add('open');
    }
  }

  // Fade in cards on scroll
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.card, .subj-card').forEach(function(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.4s ease, transform 0.4s ease, box-shadow 0.2s, border-color 0.2s';
    observer.observe(el);
  });

  // Back to top
  var backTop = document.getElementById('back-top');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 400) {
      backTop.classList.add('visible');
    } else {
      backTop.classList.remove('visible');
    }
  });

  // ── Search ──────────────────────────────────────────────
  // Data loaded from search-index.js (THUNDER_SEARCH_DATA)
  // Falls back to empty array if file not loaded yet
  function getSearchData() {
    return (typeof THUNDER_SEARCH_DATA !== 'undefined') ? THUNDER_SEARCH_DATA : [];
  }

  var THUNDER_SEARCH_DATA_PROMISE = null;
  function ensureSearchDataLoaded() {
    if (getSearchData().length) return Promise.resolve(getSearchData());
    if (THUNDER_SEARCH_DATA_PROMISE) return THUNDER_SEARCH_DATA_PROMISE;
    THUNDER_SEARCH_DATA_PROMISE = new Promise(function(resolve, reject) {
      var s = document.createElement('script');
      s.src = 'search-index.js';
      s.defer = true;
      s.onload = function() { resolve(getSearchData()); };
      s.onerror = reject;
      document.head.appendChild(s);
    });
    return THUNDER_SEARCH_DATA_PROMISE;
  }

  // ── Advanced Search Engine ──────────────────────────────
  // Weighted relevance scoring + lightweight fuzzy (typo-tolerant)
  // matching + match highlighting. Falls back gracefully if a
  // word isn't found verbatim anywhere (small edit-distance check).

  function _escRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

  // Small edit-distance (Levenshtein) capped at 2 for perf — only used
  // on words of length >= 4 to avoid noisy short-word fuzzy matches.
  function _editDistance(a, b, max) {
    if (Math.abs(a.length - b.length) > max) return max + 1;
    var dp = [];
    for (var i = 0; i <= a.length; i++) dp.push([i]);
    for (var j = 0; j <= b.length; j++) dp[0][j] = j;
    for (i = 1; i <= a.length; i++) {
      for (j = 1; j <= b.length; j++) {
        dp[i][j] = a[i - 1] === b[j - 1]
          ? dp[i - 1][j - 1]
          : 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
      }
    }
    return dp[a.length][b.length];
  }

  function _fuzzyIncludes(haystackWords, word) {
    if (word.length < 4) return false;
    for (var i = 0; i < haystackWords.length; i++) {
      var hw = haystackWords[i];
      if (hw.length < 4) continue;
      if (_editDistance(hw, word, 1) <= 1) return true;
    }
    return false;
  }

  function _containsQueryTerm(haystack, word) {
    if (word.length <= 3) {
      return new RegExp('(^|[^a-z0-9])' + _escRe(word) + '([^a-z0-9]|$)', 'i').test(haystack);
    }
    return haystack.includes(word);
  }

  var SEARCH_STOP_WORDS = {
    a: true, an: true, and: true, are: true, all: true, any: true,
    for: true, from: true, in: true, me: true, of: true, on: true,
    please: true, show: true, the: true, to: true, with: true
  };

  var SEARCH_WORD_ALIASES = {
    '12th': 'class 12', '11th': 'class 11', '10th': 'class 10', '9th': 'class 9',
    '12vi': 'class 12', '11vi': 'class 11', '10vi': 'class 10',
    class12: 'class 12', class11: 'class 11', class10: 'class 10', class9: 'class 9',
    fountion: 'foundation', bower: 'browser', spl: 'special',
    maths: 'mathematics', math: 'mathematics',
    accounts: 'accountancy', acc: 'accountancy',
    eco: 'economics', phy: 'physics', chem: 'chemistry', bio: 'biology',
    gk: 'general knowledge', pyq: 'previous year question', imp: 'important',
    itihas: 'history', itihaas: 'history', vigyan: 'science', ganit: 'mathematics',
    arthshastra: 'economics', arthashastra: 'economics',
    rajniti: 'political science', rajneeti: 'political science',
    bhugol: 'geography', lekha: 'accountancy', hisab: 'accountancy',
    notespdf: 'notes pdf', samplepaper: 'sample paper', questionpaper: 'question paper'
  };

  function normalizeSearchQuery(q) {
    q = String(q || '').toLowerCase().replace(/[^\w.+#&/-]+/g, ' ').replace(/\s+/g, ' ').trim();
    Object.keys(SEARCH_WORD_ALIASES).forEach(function(key) {
      q = q.replace(new RegExp('(^|\\s)' + _escRe(key) + '(?=\\s|$)', 'g'), '$1' + SEARCH_WORD_ALIASES[key]);
    });
    return q.replace(/\s+/g, ' ').trim();
  }

  function searchWords(q) {
    return normalizeSearchQuery(q).split(/\s+/).filter(function(word) {
      return word && !SEARCH_STOP_WORDS[word];
    });
  }

  function _highlight(text, words) {
    var out = text;
    words.forEach(function(w) {
      if (!w) return;
      var re = new RegExp('(' + _escRe(w) + ')', 'ig');
      out = out.replace(re, '<mark>$1</mark>');
    });
    return out;
  }

  var THUNDER_SEARCH_INDEX = null;

  function indexTokens(text) {
    var seen = {};
    return normalizeSearchQuery(text).split(/\s+/).filter(function(word) {
      if (!word || SEARCH_STOP_WORDS[word] || seen[word]) return false;
      seen[word] = true;
      return true;
    });
  }

  function buildSearchIndex() {
    var data = getSearchData();
    var tokenMap = {};
    for (var i = 0; i < data.length; i++) {
      var d = data[i];
      var richText = d.searchText || [d.name, d.stream, d.badge, d.tags, d.url, (d.keywords || []).join(' ')].join(' ');
      d._nameL = String(d.name || '').toLowerCase();
      d._streamL = String(d.stream || '').toLowerCase();
      d._badgeL = String(d.badge || '').toLowerCase();
      d._tagsL = String(d.tags || '').toLowerCase();
      d._searchTextL = String(richText || '').toLowerCase();
      d._hayWords = d.searchTokens || indexTokens(richText);
      d._hayWords.forEach(function(token) {
        token = normalizeSearchQuery(token);
        if (!token || SEARCH_STOP_WORDS[token]) return;
        if (!tokenMap[token]) tokenMap[token] = [];
        tokenMap[token].push(i);
      });
    }
    THUNDER_SEARCH_INDEX = { data: data, tokenMap: tokenMap };
    return THUNDER_SEARCH_INDEX;
  }

  function getSearchIndex() {
    var data = getSearchData();
    if (THUNDER_SEARCH_INDEX && THUNDER_SEARCH_INDEX.data === data) return THUNDER_SEARCH_INDEX;
    return buildSearchIndex();
  }

  function candidateIndexes(qWords, index) {
    var counts = {};
    var required = 0;
    for (var w = 0; w < qWords.length; w++) {
      var word = qWords[w];
      var postings = index.tokenMap[word] || [];
      if (!postings.length && word.length > 3) {
        for (var token in index.tokenMap) {
          if (token.indexOf(word) !== -1 || word.indexOf(token) !== -1) {
            postings = postings.concat(index.tokenMap[token]);
          }
        }
      }
      if (!postings.length) return [];
      required++;
      for (var p = 0; p < postings.length; p++) counts[postings[p]] = (counts[postings[p]] || 0) + 1;
    }
    return Object.keys(counts).filter(function(idx) {
      return counts[idx] === required;
    }).map(function(idx) { return Number(idx); });
  }

  function rankedSearch(q) {
    var data = getSearchData();
    q = normalizeSearchQuery(q);
    var qWords = searchWords(q);
    var results = [];
    if (!qWords.length) return { list: data.slice(), words: [] };

    for (var k = 0; k < data.length; k++) {
      var d = data[k];
      var richText = d.searchText || [d.name, d.stream, d.badge, d.tags, d.url, (d.keywords || []).join(' ')].join(' ');
      var nameL = d._nameL || (d._nameL = String(d.name || '').toLowerCase());
      var streamL = d._streamL || (d._streamL = String(d.stream || '').toLowerCase());
      var badgeL = d._badgeL || (d._badgeL = String(d.badge || '').toLowerCase());
      var fullHay = d._searchTextL || (d._searchTextL = String(richText || '').toLowerCase());
      var hayWords = d._hayWords || (d._hayWords = d.searchTokens || fullHay.split(/\s+/).filter(Boolean));

      var score = 0;
      var matchedAll = true;
      var titleMatches = 0;

      // Whole-phrase bonuses (multi-word queries matching contiguously)
      if (nameL === q) score += 120;
      else if (nameL.indexOf(q) === 0) score += 60;
      else if (nameL.includes(q)) score += 35;
      if (fullHay.includes(q)) score += 18;
      if (qWords.indexOf('notes') !== -1 && (/chapter| ch [0-9]/.test(nameL) || fullHay.includes('chapter notes'))) score += 8;
      if (qWords.indexOf('chapter') !== -1 && (/chapter| ch [0-9]/.test(nameL) || fullHay.includes('chapter'))) score += 8;
      if ((qWords.indexOf('important') !== -1 || qWords.indexOf('imp') !== -1) && fullHay.includes('important')) score += 6;
      if (qWords.indexOf('special') !== -1 && fullHay.includes('special')) score += 6;
      if ((q.indexOf('class 12') !== -1 || qWords.indexOf('12') !== -1) && fullHay.includes('class 12')) score += 8;

      for (var w = 0; w < qWords.length; w++) {
        var word = qWords[w];
        var wordMatched = false;
        if (_containsQueryTerm(nameL, word)) { score += 16; wordMatched = true; titleMatches++; }
        if (_containsQueryTerm(fullHay, word)) { score += 6; wordMatched = true; }
        if (_containsQueryTerm(streamL, word)) { score += 4; wordMatched = true; }
        if (_containsQueryTerm(badgeL, word)) { score += 3; wordMatched = true; }
        if (!wordMatched && _fuzzyIncludes(hayWords, word)) { score += 2; wordMatched = true; }
        if (!wordMatched) { matchedAll = false; break; }
      }

      if (titleMatches === qWords.length) score += 28;
      if (resultType(d) === 'file' && (qWords.indexOf('pdf') !== -1 || qWords.indexOf('file') !== -1 || qWords.indexOf('download') !== -1)) score += 12;
      if (matchedAll && score > 0) results.push({ d: d, score: score });
    }

    results.sort(function(a, b) { return b.score - a.score; });
    return { list: results.map(function(r) { return r.d; }), words: qWords };
  }

  function escapeHtml(text) {
    return String(text || '').replace(/[&<>"']/g, function(ch) {
      return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]);
    });
  }

  function makeSearchUrl(q, filters) {
    var params = new URLSearchParams();
    q = (q || '').trim();
    filters = filters || {};
    if (q) params.set('q', q);
    if (filters.exam) params.set('exam', filters.exam);
    if (filters.subexam) params.set('subexam', filters.subexam);
    if (filters.type) params.set('type', filters.type);
    var query = params.toString();
    return '/search' + (query ? '?' + query : '');
  }

  function goAdvancedSearch(q, filters) {
    window.location.href = makeSearchUrl(q, filters);
  }

  function isAdvancedSearchRoute() {
    return /\/search\/?$/i.test(window.location.pathname);
  }

  function resultType(item) {
    var url = String(item.url || '').toLowerCase();
    var text = (String(item.name || '') + ' ' + String(item.tags || '') + ' ' + url).toLowerCase();
    return (/\.pdf(\?|#|$)/.test(url) || /\bpdf\b/.test(text) || /\bdownload\b/.test(text)) ? 'file' : 'browser';
  }

  function detectExam(item) {
    var text = (String(item.badge || '') + ' ' + String(item.stream || '') + ' ' + String(item.tags || '') + ' ' + String(item.name || '')).toLowerCase();
    var exams = ['cbse','ssc','banking','ca','cuet','jee','neet','upsc','nda','clat','cat','ncert','tet','ctet','dca','pgdca','bed'];
    for (var i = 0; i < exams.length; i++) {
      if (text.indexOf(exams[i]) !== -1) return exams[i];
    }
    return String(item.badge || 'other').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'other';
  }

  function detectSubExam(item) {
    var text = (String(item.name || '') + ' ' + String(item.stream || '') + ' ' + String(item.tags || '')).toLowerCase();
    var subs = [
      ['cbse-class-12', ['class 12','class12']],
      ['cbse-class-11', ['class 11','class11']],
      ['cbse-class-10', ['class 10','class10']],
      ['ca-foundation', ['ca foundation','foundation']],
      ['ca-inter', ['ca inter','intermediate']],
      ['ca-final', ['ca final']],
      ['ssc-cgl', ['ssc cgl','cgl']],
      ['ssc-chsl', ['ssc chsl','chsl']],
      ['ssc-mts', ['ssc mts','mts']],
      ['ibps', ['ibps']],
      ['sbi', ['sbi']],
      ['rbi', ['rbi']],
      ['neet-ug', ['neet']],
      ['jee-main', ['jee main','jee']],
      ['cuet-ug', ['cuet']]
    ];
    for (var i = 0; i < subs.length; i++) {
      for (var j = 0; j < subs[i][1].length; j++) {
        if (text.indexOf(subs[i][1][j]) !== -1) return subs[i][0];
      }
    }
    return (String(item.stream || item.badge || 'other').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40)) || 'other';
  }

  function labelFromSlug(slug) {
    return String(slug || '').split('-').filter(Boolean).map(function(part) {
      if (part.length <= 4) return part.toUpperCase();
      return part.charAt(0).toUpperCase() + part.slice(1);
    }).join(' ');
  }

  function filterResults(q, filters) {
    q = (q || '').trim().toLowerCase();
    filters = filters || {};
    var source = q ? rankedSearch(q).list : getSearchData().slice();
    return source.filter(function(item) {
      if (filters.exam && detectExam(item) !== filters.exam) return false;
      if (filters.subexam && detectSubExam(item) !== filters.subexam) return false;
      if (filters.type && resultType(item) !== filters.type) return false;
      return true;
    });
  }

  function renderResultItem(r, words) {
    var safeName = escapeHtml(r.name || '');
    var nameHtml = words && words.length ? _highlight(safeName, words.map(escapeHtml)) : safeName;
    var badge = escapeHtml(r.badge || resultType(r));
    var stream = escapeHtml(r.stream || '');
    var url = escapeHtml(r.url || '#');
    return '<a class="search-result-item" href="' + url + '" onpointerdown="window.location.href=this.href"><span class="sri-badge">' + badge + '</span><span>' + nameHtml + (stream ? ' <span style="color:#94a3b8;font-weight:400;font-size:0.8em">- ' + stream + '</span>' : '') + '</span></a>';
  }

  // Home search: show only 3 results, then send people to the full search screen.
  function doSearch(q) {
    var box = document.getElementById('search-results');
    q = q.trim().toLowerCase();
    if (!q || q.length < 1) { box.classList.remove('active'); box.innerHTML = ''; return; }
    if (!getSearchData().length) {
      box.innerHTML = '<div class="search-loading" aria-live="polite"><div class="search-skeleton-line"></div><div class="search-skeleton-line"></div><div class="search-skeleton-line"></div></div>';
      box.classList.add('active');
      ensureSearchDataLoaded().then(function() {
        var input = document.getElementById('search-input');
        if (input && input.value.trim().toLowerCase() === q && getSearchData().length) doSearch(input.value);
      }).catch(function() {
        box.innerHTML = '<div class="search-no-result">Search data is still loading. <br><a class="search-advanced-btn" href="' + makeSearchUrl(q) + '">Open advanced search</a></div>';
      });
      return;
    }

    var ranked = rankedSearch(q);
    var results = ranked.list;
    var qWords = ranked.words;
    var total = results.length;
    var limit = 3;
    var shown = results.slice(0, limit);

    if (shown.length === 0) {
      box.innerHTML = '<div class="search-no-result">No results for "' + escapeHtml(q) + '".<br><a class="search-advanced-btn" href="' + makeSearchUrl(q) + '">Advanced search</a></div>';
    } else {
      box.innerHTML = shown.map(function(r) {
        return renderResultItem(r, qWords);
      }).join('') + '<button type="button" class="search-see-all-btn" onmousedown="event.preventDefault()" onclick="submitSearch()">More results on advanced search (' + total + ') \u2192</button>';
    }
    box.classList.add('active');
  }

  // Search button, Enter key and More all open the full search screen.
  function submitSearch() {
    var input = document.getElementById('search-input');
    var q = (input.value || '').trim();
    goAdvancedSearch(q);
  }

  function closeSearch() {
    document.getElementById('search-results').classList.remove('active');
  }

  var NOTICE_API = 'https://script.google.com/macros/s/AKfycbzJ73IY4Qegxu090CE8LXYMi9ErmgdXWhl7by95rQAHDrz_sQbaKl-xzfNJoCYgOtP5PQ/exec';

  function noticeEsc(text) {
    return String(text || '').replace(/[&<>"']/g, function(ch) {
      return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]);
    });
  }

  function noticeActive(row) {
    if (!row || row.active === false) return false;
    if (!row.expiry) return true;
    var end = new Date(row.expiry);
    return isNaN(end.getTime()) || end >= new Date();
  }

  function renderNotices(rows) {
    var box = document.getElementById('notice-list');
    if (!box) return;
    var notices = (Array.isArray(rows) ? rows : []).filter(noticeActive).slice(0, 6);
    if (!notices.length) {
      box.innerHTML = '<div class="notice-card"><span class="notice-type">Clear</span><strong>No active notices</strong><p>New exam alerts and updates will appear here.</p></div>';
      return;
    }
    box.innerHTML = notices.map(function(n) {
      return '<article class="notice-card"><span class="notice-type">' + noticeEsc(n.type || n.noticeType || 'Notice') + '</span><strong>' + noticeEsc(n.title || 'ThunderStudy Notice') + '</strong><p>' + noticeEsc(n.message || '') + '</p></article>';
    }).join('');
    var popupNotice = notices.find(function(n) { return n.popup; });
    if (popupNotice) showNoticePopup(popupNotice);
  }

  function showNoticePopup(n) {
    var popup = document.getElementById('notice-popup');
    if (!popup) return;
    var key = 'notice-popup-' + (n.id || n.title || n.created || 'latest');
    try {
      if (sessionStorage.getItem(key)) return;
      sessionStorage.setItem(key, '1');
    } catch(e) {}
    document.getElementById('notice-popup-type').textContent = n.type || n.noticeType || 'Notice';
    document.getElementById('notice-popup-title').textContent = n.title || 'ThunderStudy Notice';
    document.getElementById('notice-popup-message').textContent = n.message || '';
    popup.hidden = false;
  }

  function loadThunderNotices() {
    var box = document.getElementById('notice-list');
    if (!box) return;
    fetch(NOTICE_API + '?action=getNotices', { cache: 'no-store' })
      .then(function(res) { return res.json(); })
      .then(renderNotices)
      .catch(function() {
        box.innerHTML = '<div class="notice-card"><span class="notice-type">Offline</span><strong>Could not load notices</strong><p>Please check again soon.</p></div>';
      });
  }

  function populateFilterOptions(select, values) {
    values.forEach(function(value) {
      if (!value) return;
      var opt = document.createElement('option');
      opt.value = value;
      opt.textContent = labelFromSlug(value);
      select.appendChild(opt);
    });
  }

  function initAdvancedSearchPage() {
    var params = new URLSearchParams(window.location.search);
    var input = document.getElementById('advanced-search-input');
    var exam = document.getElementById('filter-exam');
    var subexam = document.getElementById('filter-subexam');
    var type = document.getElementById('filter-type');
    var button = document.getElementById('advanced-search-button');
    var data = getSearchData();
    var exams = Array.from(new Set(data.map(detectExam))).sort();
    var subexams = Array.from(new Set(data.map(detectSubExam))).sort();

    populateFilterOptions(exam, exams);
    populateFilterOptions(subexam, subexams);

    var legacyQuery = '';
    if (!params.has('q') && window.location.search && window.location.search.indexOf('=') === -1) {
      legacyQuery = decodeURIComponent(window.location.search.slice(1).split('?')[0].replace(/\+/g, ' '));
    }

    input.value = params.get('q') || legacyQuery;
    exam.value = params.get('exam') || '';
    subexam.value = params.get('subexam') || '';
    type.value = params.get('type') || '';

    function currentFilters() {
      return { exam: exam.value, subexam: subexam.value, type: type.value };
    }

    function syncUrl() {
      history.replaceState(null, '', makeSearchUrl(input.value, currentFilters()));
    }

    function renderAdvanced() {
      var q = (input.value || '').trim();
      var filters = currentFilters();
      var qWords = searchWords(q);
      var results = filterResults(q, filters);
      var resultBox = document.getElementById('advanced-search-results');
      var summary = document.getElementById('advanced-search-summary');
      var hasFilter = !!(filters.exam || filters.subexam || filters.type);
      var mode = q && hasFilter ? 'search and filters' : q ? 'search' : hasFilter ? 'filters' : 'all resources';

      summary.textContent = results.length + ' result' + (results.length === 1 ? '' : 's') + ' found for ' + mode + '.';
      document.getElementById('search-end-title').textContent = results.length ? 'Need a different resource?' : 'No result found?';
      resultBox.innerHTML = results.length
        ? results.map(function(r) { return renderResultItem(r, qWords); }).join('')
        : '<div class="search-no-result">No matching result found. Try removing a filter or request the file below.</div>';
      syncUrl();
    }

    button.addEventListener('click', renderAdvanced);
    input.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        renderAdvanced();
      }
    });
    input.addEventListener('input', renderAdvanced);
    [exam, subexam, type].forEach(function(select) {
      select.addEventListener('change', renderAdvanced);
    });

    renderAdvanced();
  }

  // ── Service Worker registration (PWA) ──────────────────────
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('./sw.js', { scope: './' })
        .then(function(reg) {
          console.log('[ThunderStudy] SW registered, scope:', reg.scope);
          reg.addEventListener('updatefound', function() {
            var newWorker = reg.installing;
            if (!newWorker) return;
            newWorker.addEventListener('statechange', function() {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                console.log('[ThunderStudy] New version available. Refresh to update.');
              }
            });
          });
        })
        .catch(function(err) {
          console.warn('[ThunderStudy] SW registration failed:', err);
        });
    });
  }

  // PWA install prompt — must be global for onclick attributes
  window.pwaInstallPrompt = null;

  window.addEventListener('beforeinstallprompt', function(e) {
    e.preventDefault();
    window.pwaInstallPrompt = e;
    // Show the hero trust pill install button
    var htpBtn = document.getElementById('htp-install-btn');
    if (htpBtn) htpBtn.style.display = '';
    try {
      var dismissed = localStorage.getItem('pwa-dismissed');
      if (!dismissed) {
        setTimeout(function() {
          var banner = document.getElementById('pwa-banner');
          if (banner) banner.classList.add('show');
        }, 3000);
      }
    } catch(err) {}
  });

  function htpInstallApp() {
    if (window.pwaInstallPrompt) {
      window.pwaInstallPrompt.prompt();
      window.pwaInstallPrompt.userChoice.then(function(result) {
        if (result.outcome === 'accepted') {
          var htpBtn = document.getElementById('htp-install-btn');
          if (htpBtn) htpBtn.style.display = 'none';
        }
      });
    } else {
      var htpBtn = document.getElementById('htp-install-btn');
      if (htpBtn) htpBtn.style.display = 'none';
      pwaDismiss();
    }
  }

  window.addEventListener('load', function() {
    setTimeout(function() {
      if (!window.pwaInstallPrompt) {
        var htpBtn = document.getElementById('htp-install-btn');
        var banner = document.getElementById('pwa-banner');
        if (htpBtn) htpBtn.style.display = 'none';
        if (banner) banner.classList.remove('show');
      }
    }, 4500);
  });

  window.addEventListener('appinstalled', function() {
    pwaDismiss();
    console.log('[ThunderStudy] PWA installed successfully.');
  });

  document.querySelectorAll('a[target="_blank"]').forEach(function(a) {
    if (!a.title) {
      var text = a.textContent.trim() || a.getAttribute('aria-label') || '';
      if (text) a.title = text + ' — opens in new tab';
    }
  });

  // Accessibility: mark decorative SVGs as hidden from screen readers
  document.querySelectorAll('.card-icon svg, .subj-icon svg').forEach(function(svg) {
    if (!svg.getAttribute('aria-label') && !svg.getAttribute('aria-hidden')) {
      svg.setAttribute('aria-hidden', 'true');
    }
  });
