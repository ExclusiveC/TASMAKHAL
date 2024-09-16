const texts = {
    ru: {
        aboutTitle: "О компании",
        aboutText: "TasMakhal — ведущий поставщик травертина...",
        servicesTitle: "Услуги",
        servicesText: "Мы предлагаем следующие услуги...",
        contactTitle: "Контакты",
        contactText: "Для консультации свяжитесь с нами...",
        flag: 'ru'
    },
    kz: {
        aboutTitle: "Компания туралы",
        aboutText: "TasMakhal — травертиннің жетекші жеткізушісі...",
        servicesTitle: "Қызметтер",
        servicesText: "Біз келесі қызметтерді ұсынамыз...",
        contactTitle: "Байланыс",
        contactText: "Кеңес алу үшін бізбен хабарласыңыз...",
        flag: 'kz'
    },
    en: {
        aboutTitle: "About Us",
        aboutText: "TasMakhal is a leading supplier of travertine...",
        servicesTitle: "Services",
        servicesText: "We offer the following services...",
        contactTitle: "Contacts",
        contactText: "For consultation, contact us...",
        flag: 'en'
    },
    ar: {
        aboutTitle: "عن الشركة",
        aboutText: "TasMakhal هي المورد الرائد للحجر الترافرتين...",
        servicesTitle: "خدمات",
        servicesText: "نحن نقدم الخدمات التالية...",
        contactTitle: "اتصل بنا",
        contactText: "للتشاور، اتصل بنا...",
        flag: 'ar'
    }
};

function changeLanguage(lang) {
    if (texts[lang]) {
        document.querySelector('.about-title').textContent = texts[lang].aboutTitle || '';
        document.querySelector('.about-text').textContent = texts[lang].aboutText || '';
        document.querySelector('.services-title').textContent = texts[lang].servicesTitle || '';
        document.querySelector('.services-text').textContent = texts[lang].servicesText || '';
        document.querySelector('.contact-title').textContent = texts[lang].contactTitle || '';
        document.querySelector('.contact-text').textContent = texts[lang].contactText || '';

        // Обновляем отображаемый язык
        const dropdownBtn = document.getElementById('current-lang');
        dropdownBtn.innerHTML = `<img src="flags/${texts[lang].flag}.jpg" alt="${lang} Flag" class="flag-icon"> ${lang.toUpperCase()}`;
    }
}


window.onload = function() {
    changeLanguage('ru');
};

document.querySelectorAll('.dropdown-content a').forEach(item => {
    item.addEventListener('click', () => {
        const lang = item.getAttribute('onclick').match(/'(.*?)'/)[1];
        changeLanguage(lang);
    });
});
