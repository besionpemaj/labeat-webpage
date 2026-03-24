/* ============================================================
   BATA sh.p.k — Main JavaScript
   ============================================================ */

/* ============================================================
   TRANSLATIONS  (IT = default | EN | SQ = Albanian)
   ============================================================ */
const translations = {

  /* ---- ITALIAN (default) ---- */
  it: {
    pageTitle:   'BATA sh.p.k – Assemblaggio Cavi Elettrici & Soluzioni Cablaggio',
    navHome:        'Home',
    navAbout:       'Chi Siamo',
    navServices:    'Servizi',
    navExperience:  'Esperienza',
    navContact:     'Contatti',

    heroEyebrow:  'Dal 1996',
    heroSubtitle: 'Assemblaggio Cavi Elettrici & Soluzioni Cablaggio',
    heroTagline:  'Assemblaggio professionale di cavi elettrici per partner europei.',
    heroCTA:      'Scopri di più',

    aboutTag:    'Chi Siamo',
    aboutTitle:  'About BATA',
    aboutP1:     'BATA opera dal 1996 con aziende del mercato dell\'Unione Europea. L\'azienda rappresenta professionalità, dinamismo e impegno nel soddisfare le esigenze dei clienti.',
    aboutP2:     'Oggi l\'azienda dispone di uno staff professionale che lavora con principi di correttezza, giustizia e qualità.',
    value1Title: 'Professionalità',
    value1Desc:  'Standard elevati e team qualificato.',
    value2Title: 'Dinamismo',
    value2Desc:  'Rapido adattamento alle esigenze del mercato.',
    value3Title: 'Determinazione',
    value3Desc:  'Risposta precisa alle richieste del cliente.',

    servicesTag:   'Cosa Facciamo',
    servicesTitle: 'Esperti in Assemblaggio<br/>Cavi Elettrici',
    servicesIntro: 'Dal 2019, BATA è specializzata nel montaggio e collegamento di cavi elettrici per elettrodomestici e industria. Lavoriamo con tutti i tipi di cavi, dai più complessi ai più semplici.',

    expTag:   'Il Nostro Percorso',
    expTitle: 'Esperienza &amp; Collaborazione<br/>Internazionale',
    expIntro: 'BATA è costruita su anni di lavoro ed esperienza, rafforzata dalla collaborazione con aziende italiane ed europee nel settore degli impianti elettrici.',
    exp1Title: '30+ Anni di Esperienza',
    exp1Desc:  'Fondata nel 1996, BATA ha accumulato profonde conoscenze nel settore elettrico.',
    exp2Title: 'Partner nel Mercato Europeo',
    exp2Desc:  'Stretta collaborazione con aziende italiane ed europee sin dai primi anni.',
    exp3Title: 'Specializzati dal 2019',
    exp3Desc:  'Specializzazione profonda nel montaggio di cavi elettrici per industria e uso domestico.',
    exp4Title: 'Garanzia di Qualità',
    exp4Desc:  'Ogni prodotto controllato secondo gli standard europei di qualità.',

    statFounded: 'Fondazione',
    statYears:   'Anni Attivi',
    statMarket:  'Mercato EU',
    statWorkers: 'Lavoratori',

    procTag:   'Produzione',
    procTitle: 'Processi operativi',
    procIntro: 'Le lavorazioni che eseguiamo quotidianamente sui cablaggi, dalla lettura degli schemi al collaudo finale.',
    proc1Title: 'Montaggio e collegamento secondo schemi elettrici',
    proc1Desc:  'Realizziamo cablaggi seguendo documentazione tecnica, schemi e specifiche del cliente, così ogni connessione corrisponde al progetto approvato.',
    proc2Title: 'Fastonature singola, doppia e varianti',
    proc2Desc:  'Applicazione di terminali faston maschio e femmina, configurazioni singole o doppie e soluzioni equivalenti richieste dalla commessa.',
    proc3Title: 'Saldatura',
    proc3Desc:  'Giunzioni a filo e a stagno su conduttori e componenti, con controlli visivi per solidità meccanica e continuità elettrica.',
    proc4Title: 'Twistimi',
    proc4Desc:  'Formazione di terminali twist per connessioni affidabili su più conduttori, in conformità alle istruzioni di montaggio.',
    proc5Title: 'Collaudo e controllo qualità',
    proc5Desc:  'Verifiche elettriche, prove di continuità e controlli dimensionali prima della spedizione, secondo gli standard concordati.',
    proc6Title: 'Lavorazioni cavi flat',
    proc6Desc:  'Taglio, preparazione e completamento di cavi piatti (flat) per display, flat-flex e applicazioni con ingombro ridotto.',

    innoTag:   'Il Nostro Approccio',
    innoTitle: 'Innovazione &amp;<br/>Affidabilità',
    innoDesc:  'Per noi l\'innovazione significa affidabilità, sostenibilità e soluzioni pratiche per i clienti. Non seguiamo le mode — costruiamo soluzioni durature e affidabili.',
    innoFeat1: 'Soluzioni affidabili a lungo termine',
    innoFeat2: 'Tecnologie collaudate sul campo',
    innoFeat3: 'Standard europei di produzione',

    contactTag:           'Contattaci',
    contactTitle:         'Contatta <span class="gold-text">BATA</span>',
    contactIntro:         'Siamo aperti alla collaborazione. Contattateci per qualsiasi esigenza o partnership.',
    contactLocationLabel: 'Sede',
    contactLocationValue: 'Shkodër, Albania',
    contactPhoneLabel:    'Telefono',
    contactPhoneValue:    '069 20 74 118',
    contactEmailLabel:    'Email',
    contactCTA:           'Richiedi Partnership',

    formNameLabel:        'Nome Completo',
    formNamePlaceholder:  'Il tuo nome',
    formEmailLabel:       'Indirizzo Email',
    formEmailPlaceholder: 'tua@email.com',
    formCompanyLabel:        'Azienda',
    formCompanyPlaceholder:  'La tua azienda',
    formMessageLabel:        'Messaggio',
    formMessagePlaceholder:  'Raccontaci del tuo progetto...',
    formSubmit:  'Invia Messaggio',
    formSending: 'Invio in corso…',
    formSent:    '✓ Messaggio Inviato!',

    mapTag:             'Dove Siamo',
    mapTitle:           'Trovaci',
    mapPlaceholderText: 'Inserisci il link della mappa nel codice HTML',

    footerTagline:   'Assemblaggio Cavi Elettrici &amp; Soluzioni Cablaggio<br/>Dal 1996',
    footerCopyright: '© 2026 BATA sh.p.k. Tutti i diritti riservati.',
  },

  /* ---- ENGLISH ---- */
  en: {
    pageTitle:   'BATA sh.p.k – Electrical Cable Assembly & Wiring Solutions',
    navHome:        'Home',
    navAbout:       'About',
    navServices:    'Services',
    navExperience:  'Experience',
    navContact:     'Contact',

    heroEyebrow:  'Since 1996',
    heroSubtitle: 'Electrical Cable Assembly & Wiring Solutions',
    heroTagline:  'Professional electrical cable assembly for European partners.',
    heroCTA:      'Learn More',

    aboutTag:    'Who We Are',
    aboutTitle:  'About BATA',
    aboutP1:     'BATA has been operating since 1996 with companies in the European Union market. The company represents professionalism, dynamism and dedication to meeting client needs.',
    aboutP2:     'Today the company has a professional staff working with principles of correctness, fairness and quality.',
    value1Title: 'Professionalism',
    value1Desc:  'High standards and a qualified team.',
    value2Title: 'Dynamism',
    value2Desc:  'Fast adaptation to market needs.',
    value3Title: 'Determination',
    value3Desc:  'Precise response to client requirements.',

    servicesTag:   'What We Do',
    servicesTitle: 'Electrical Cable Assembly<br/>Experts',
    servicesIntro: 'Since 2019, BATA has specialized in the assembly and connection of electrical cables for household appliances and industry. We work with all types of cables, from the most complex to the simplest.',

    expTag:   'Track Record',
    expTitle: 'Experience &amp; International<br/>Collaboration',
    expIntro: 'BATA is built on years of work and experience, strengthened by collaboration with Italian and European companies in the electrical installations sector.',
    exp1Title: '30+ Years of Experience',
    exp1Desc:  'Founded in 1996, BATA has accumulated deep knowledge in the electrical sector.',
    exp2Title: 'European Market Partners',
    exp2Desc:  'Close collaboration with Italian and European companies from the very beginning.',
    exp3Title: 'Specialized Since 2019',
    exp3Desc:  'Deep specialization in electrical cable assembly for industry and home use.',
    exp4Title: 'Quality Assurance',
    exp4Desc:  'Every product controlled according to European quality standards.',

    statFounded: 'Founded',
    statYears:   'Years Active',
    statMarket:  'EU Market',
    statWorkers: 'Workers',

    procTag:   'Production',
    procTitle: 'Operational processes',
    procIntro: 'The work we perform daily on harnesses, from reading electrical diagrams to final testing.',
    proc1Title: 'Assembly and connection to electrical diagrams',
    proc1Desc:  'We build harnesses following technical documentation, diagrams and client specifications so every connection matches the approved design.',
    proc2Title: 'Single, double Faston terminals and variants',
    proc2Desc:  'Application of male and female Faston terminals, single or double configurations and equivalent solutions required by the job.',
    proc3Title: 'Soldering',
    proc3Desc:  'Wire and solder joints on conductors and components, with visual checks for mechanical strength and electrical continuity.',
    proc4Title: 'Twist terminals',
    proc4Desc:  'Twist-type terminations for reliable multi-conductor connections, in line with assembly instructions.',
    proc5Title: 'Testing and quality control',
    proc5Desc:  'Electrical checks, continuity tests and dimensional inspection before shipment, according to agreed standards.',
    proc6Title: 'Flat cable processing',
    proc6Desc:  'Cutting, preparation and finishing of flat cables for displays, flex-flat and space-critical applications.',

    innoTag:   'Our Approach',
    innoTitle: 'Innovation &amp;<br/>Reliability',
    innoDesc:  'For us innovation means reliability, sustainability and practical solutions for clients. We don\'t follow trends — we build lasting and reliable solutions.',
    innoFeat1: 'Long-term reliable solutions',
    innoFeat2: 'Field-proven technologies',
    innoFeat3: 'European production standards',

    contactTag:           'Get In Touch',
    contactTitle:         'Contact <span class="gold-text">BATA</span>',
    contactIntro:         'We are open to collaboration. Contact us for any need or partnership.',
    contactLocationLabel: 'Location',
    contactLocationValue: 'Shkodër, Albania',
    contactPhoneLabel:    'Phone',
    contactPhoneValue:    '069 20 74 118',
    contactEmailLabel:    'Email',
    contactCTA:           'Request Partnership',

    formNameLabel:        'Full Name',
    formNamePlaceholder:  'Your name',
    formEmailLabel:       'Email Address',
    formEmailPlaceholder: 'your@email.com',
    formCompanyLabel:        'Company',
    formCompanyPlaceholder:  'Your company',
    formMessageLabel:        'Message',
    formMessagePlaceholder:  'Tell us about your project...',
    formSubmit:  'Send Message',
    formSending: 'Sending…',
    formSent:    '✓ Message Sent!',

    mapTag:             'Find Us',
    mapTitle:           'Our Location',
    mapPlaceholderText: 'Insert the map link in the HTML code',

    footerTagline:   'Electrical Cable Assembly &amp; Wiring Solutions<br/>Since 1996',
    footerCopyright: '© 2026 BATA sh.p.k. All rights reserved.',
  },

  /* ---- ALBANIAN (Shqip) ---- */
  sq: {
    pageTitle:   'BATA sh.p.k – Montim Kabllosh Elektrike & Zgjidhje Kabllimi',
    navHome:        'Kryefaqja',
    navAbout:       'Rreth Nesh',
    navServices:    'Shërbime',
    navExperience:  'Përvojë',
    navContact:     'Kontakt',

    heroEyebrow:  'Që nga viti 1996',
    heroSubtitle: 'Montim Kabllosh Elektrike & Zgjidhje Kabllimi',
    heroTagline:  'Montim profesional i kabllove elektrike për partnerë europianë.',
    heroCTA:      'Mëso Më Shumë',

    aboutTag:    'Kush Jemi',
    aboutTitle:  'Rreth BATA',
    aboutP1:     'BATA operon që nga viti 1996 me kompani të ndryshme në tregun e Bashkimit Europian.',
    aboutP2:     'Kompania karakterizohet nga profesionalizmi, dinamizmi, dhe përkushtimi në përmbushjen e nevojave të klientëve.',
    value1Title: 'Profesionalizëm',
    value1Desc:  'Standarde të larta dhe ekip i kualifikuar.',
    value2Title: 'Dinamizëm',
    value2Desc:  'Përshtatje e shpejtë me nevojat e tregut.',
    value3Title: 'Përkushtim',
    value3Desc:  'Përgjigje e saktë ndaj kërkesave të klientit.',

    servicesTag:   'Çfarë Bëjmë',
    servicesTitle: 'Ekspertë në Montimin<br/>e Kabllove Elektrike',
    servicesIntro: 'Që nga viti 2019, BATA është e specializuar në montimin dhe lidhjen e kabllove elektrike për pajisje shtëpiake dhe industri. Punojmë të gjitha llojet e kabllove elektrike, që përdoren për pajisje shtëpiake dhe në industri.',

    expTag:   'Rrugëtimi Ynë',
    expTitle: 'Përvojë &amp; Bashkëpunim<br/>Ndërkombëtar',
    expIntro: 'BATA është ndërtuar mbi punë dhe përvojë shumëvjeçare, e forcuar nga bashkëpunimi me kompani italiane dhe europiane në sektorin e instalimeve elektrike.',
    exp1Title: '30+ vjet përvojë',
    exp1Desc:  'Themeluar në 1996, BATA ka akumuluar njohuri të thella në sektorin elektrik.',
    exp2Title: 'Partnerë në tregun europian',
    exp2Desc:  'Bashkëpunim i ngushtë me kompani italiane dhe europiane që nga vitet e para.',
    exp3Title: 'Specialistë që nga 2019',
    exp3Desc:  'Specialistë në montimin e kabllove elektrike në fusha të ndryshme të industrisë.',
    exp4Title: 'Garanci në cilësi',
    exp4Desc:  'Çdo produkt i kontrolluar sipas standardeve europiane të cilësisë.',

    statFounded: 'Themelimi',
    statYears:   'Vjet Aktiv',
    statMarket:  'Tregu EU',
    statWorkers: 'Punëtorë',

    procTag:   'Prodhimi',
    procTitle: 'Proceset operative',
    procIntro: 'Punët që kryejmë çdo ditë në kabllot, nga leximi i skemave deri te testimi përfundimtar.',
    proc1Title: 'Montim dhe lidhje sipas skemave elektrike',
    proc1Desc:  'Montojmë kabllot duke ndjekur dokumentacionin teknik, skemat dhe specifikimet e klientit, që çdo lidhje të përputhet me projektin e miratuar.',
    proc2Title: 'Fastonime njëfishe, dyshe dhe variante',
    proc2Desc:  'Aplikim i terminaleve faston mashkull dhe femër, konfigurime njëfishe ose dyshe dhe zgjidhje ekuivalente sipas porosisë.',
    proc3Title: 'Saldim (lodhje me kalaj dhe me tel)',
    proc3Desc:  'Bashkime të salduara në tel dhe me kalaj mbi përcjellës dhe komponentë, me kontrolle vizuale për forcë mekanike dhe vazhdimësi elektrike.',
    proc4Title: 'Twist (terminalë të rrotulluar)',
    proc4Desc:  'Formim i terminaleve twist për lidhje të besueshme me shumë përcjellës, në përputhje me udhëzimet e montimit.',
    proc5Title: 'Testim dhe kontroll cilësie',
    proc5Desc:  'Kontrolle elektrike, teste vazhdimësie dhe matje dimensionale para dërgimit, sipas standardeve të rënë dakord.',
    proc6Title: 'Punime kabllo FLAT',
    proc6Desc:  'Përgatitje dhe përfundim i kabllove të sheshtë për ekrane, flat-flex dhe aplikime me hapësirë të kufizuar.',

    innoTag:   'Qasja Jonë',
    innoTitle: 'Inovacion &amp;<br/>Besueshmëri',
    innoDesc:  'Për ne inovacioni do të thotë besueshmëri, qëndrueshmëri dhe zgjidhje praktike për klientët. Ne nuk ndjekim trendet, por ndërtojmë zgjidhje afatgjata dhe të besueshme.',
    innoFeat1: 'Zgjidhje të besueshme afatgjata',
    innoFeat2: 'Teknologji të provuara në terren',
    innoFeat3: 'Standarde europiane të prodhimit',

    contactTag:           'Na Kontaktoni',
    contactTitle:         'Kontakto <span class="gold-text">BATA</span>',
    contactIntro:         'Jemi të hapur për bashkëpunim. Na kontaktoni për çdo nevojë ose partneritet.',
    contactLocationLabel: 'Vendndodhja',
    contactLocationValue: 'Shkodër, Shqipëri',
    contactPhoneLabel:    'Telefon',
    contactPhoneValue:    '069 20 74 118',
    contactEmailLabel:    'Email',
    contactCTA:           'Kërko Partneritet',

    formNameLabel:        'Emri i Plotë',
    formNamePlaceholder:  'Emri juaj',
    formEmailLabel:       'Adresa Email',
    formEmailPlaceholder: 'juaj@email.com',
    formCompanyLabel:        'Kompania',
    formCompanyPlaceholder:  'Kompania juaj',
    formMessageLabel:        'Mesazhi',
    formMessagePlaceholder:  'Na tregoni për projektin tuaj...',
    formSubmit:  'Dërgo Mesazhin',
    formSending: 'Duke dërguar…',
    formSent:    '✓ Mesazhi u Dërgua!',

    mapTag:             'Na Gjeni',
    mapTitle:           'Vendndodhja Jonë',
    mapPlaceholderText: 'Futni linkun e hartës në kodin HTML',

    footerTagline:   'Montim Kabllosh Elektrike &amp; Zgjidhje Kabllimi<br/>Që nga viti 1996',
    footerCopyright: '© 2026 BATA sh.p.k. Të gjitha të drejtat të rezervuara.',
  },
};

/* ============================================================
   LANGUAGE ENGINE
   ============================================================ */
let currentLang = 'it';

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;

  const t = translations[lang];

  /* HTML lang attribute */
  document.documentElement.lang = lang === 'sq' ? 'sq' : lang;

  /* Page title */
  document.title = t.pageTitle;

  /* Text content nodes */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  /* HTML content nodes (contain <br>, <span>, &amp; etc.) */
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  /* Placeholder attributes */
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  /* Update active state on ALL lang buttons (desktop + mobile) */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  /* Persist choice */
  try { localStorage.setItem('bata-lang', lang); } catch (e) { /* private browsing */ }
}

/* Attach click handlers to every language button */
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.getAttribute('data-lang');
    setLanguage(lang);
    /* Close mobile menu if open */
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* Load saved language, default to Italian */
const savedLang = (() => {
  try { return localStorage.getItem('bata-lang'); } catch (e) { return null; }
})();
setLanguage(savedLang || 'it');

/* ============================================================
   NAVBAR: scroll effect + active links
   ============================================================ */
const navbar  = document.getElementById('navbar');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function updateNavbar() {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}

function updateActiveLink() {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}

window.addEventListener('scroll', () => {
  updateNavbar();
  updateActiveLink();
}, { passive: true });

updateNavbar();

/* ============================================================
   HAMBURGER MENU
   ============================================================ */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ============================================================
   SMOOTH SCROLL (fallback for older browsers)
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

[
  '.about-text', '.about-image',
  '.service-card',
  '.exp-gallery', '.exp-bullets', '.exp-item',
  '.stat',
  '.process-card',
  '.innovation-text',
  '.contact-info', '.contact-form',
  '.map-header',
].forEach(selector => {
  document.querySelectorAll(selector).forEach((el, i) => {
    el.classList.add('reveal');
    if (i === 1) el.classList.add('reveal-delay-1');
    if (i === 2) el.classList.add('reveal-delay-2');
    if (i === 3) el.classList.add('reveal-delay-3');
    revealObserver.observe(el);
  });
});

/* ============================================================
   FADE GALLERIES (Chi Siamo + Esperienza)
   ============================================================ */
(function initFadeGalleries() {
  const AUTO_MS = 4500;
  const pauseFns = [];
  const resumeFns = [];

  document.querySelectorAll('.exp-gallery').forEach((gallery) => {
    const slides  = Array.from(gallery.querySelectorAll('.exp-gallery-slide'));
    const dots    = Array.from(gallery.querySelectorAll('.exp-gallery-dot'));
    const prevBtn = gallery.querySelector('.exp-gallery-btn--prev');
    const nextBtn = gallery.querySelector('.exp-gallery-btn--next');
    if (!slides.length) return;

    let idx   = 0;
    let timer = null;

    function goTo(i) {
      slides[idx].classList.remove('exp-gallery-slide--active');
      dots[idx]?.classList.remove('exp-gallery-dot--active');
      dots[idx]?.setAttribute('aria-selected', 'false');

      idx = ((i % slides.length) + slides.length) % slides.length;

      slides[idx].classList.add('exp-gallery-slide--active');
      dots[idx]?.classList.add('exp-gallery-dot--active');
      dots[idx]?.setAttribute('aria-selected', 'true');
    }

    function startAuto() {
      clearInterval(timer);
      timer = setInterval(() => goTo(idx + 1), AUTO_MS);
    }

    function stopAuto() {
      clearInterval(timer);
      timer = null;
    }

    prevBtn?.addEventListener('click', () => { goTo(idx - 1); startAuto(); });
    nextBtn?.addEventListener('click', () => { goTo(idx + 1); startAuto(); });

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => { goTo(i); startAuto(); });
    });

    gallery.addEventListener('mouseenter', stopAuto);
    gallery.addEventListener('mouseleave', startAuto);

    gallery.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft')  { e.preventDefault(); goTo(idx - 1); startAuto(); }
      if (e.key === 'ArrowRight') { e.preventDefault(); goTo(idx + 1); startAuto(); }
    });

    pauseFns.push(stopAuto);
    resumeFns.push(startAuto);
    startAuto();
  });

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      resumeFns.forEach((fn) => fn());
    } else {
      pauseFns.forEach((fn) => fn());
    }
  });
})();

/* ============================================================
   CONTACT FORM
   ============================================================ */
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const t   = translations[currentLang];

    btn.textContent = t.formSending;
    btn.disabled    = true;

    /* Simulate async send — replace with real fetch/API */
    setTimeout(() => {
      btn.textContent    = t.formSent;
      btn.style.background = '#2e7d32';
      form.reset();
      setTimeout(() => {
        btn.textContent    = t.formSubmit;
        btn.style.background = '';
        btn.disabled       = false;
      }, 3000);
    }, 1400);
  });
}

/* ============================================================
   COUNTER ANIMATION (stats)
   ============================================================ */
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el  = entry.target;
        const raw = el.textContent;
        const num = parseInt(raw.replace(/\D/g, ''), 10);

        if (!isNaN(num) && num > 0) {
          const suffix   = raw.replace(/\d/g, '');
          const duration = 1200;
          const step     = Math.ceil(num / (duration / 16));
          let   current  = 0;

          const timer = setInterval(() => {
            current = Math.min(current + step, num);
            el.textContent = current + suffix;
            if (current >= num) clearInterval(timer);
          }, 16);
        }
        counterObserver.unobserve(el);
      }
    });
  },
  { threshold: 0.5 }
);
document.querySelectorAll('.stat-number').forEach(c => counterObserver.observe(c));

/* ============================================================
   GOOGLE MAPS — auto-load if data-map-src is filled in
   ============================================================ */
const mapIframe  = document.querySelector('.map-iframe');
const mapOverlay = document.getElementById('mapOverlay');

if (mapIframe) {
  const realSrc = mapIframe.getAttribute('data-map-src') || '';
  if (realSrc && realSrc !== 'YOUR_GOOGLE_MAPS_EMBED_URL_HERE' && realSrc.startsWith('http')) {
    mapIframe.src = realSrc;
    if (mapOverlay) mapOverlay.style.display = 'none';
  }
}
