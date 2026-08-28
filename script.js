document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        sv: {
            intro: 'Välkommen till vår familjedomän som används för mejl.',
            portfolioIntro: 'För att se våra portfoliosidor kolla här:',
            ownerCaption: 'Ägare av domänen',
        },
        en: {
            intro: 'Welcome to our family domain used for email.',
            portfolioIntro: 'To see our portfolio sites, check here:',
            ownerCaption: 'Domain owner',
        },
    };

    const toggle = document.getElementById('lang-toggle');
    const langOptions = toggle.querySelectorAll('.lang-option');
    const i18nElements = document.querySelectorAll('[data-i18n]');

    function setLanguage(lang) {
        const dict = translations[lang] || translations.sv;

        i18nElements.forEach((el) => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                el.textContent = dict[key];
            }
        });

        langOptions.forEach((option) => {
            option.classList.toggle('active', option.dataset.lang === lang);
        });

        document.documentElement.lang = lang;

        try {
            localStorage.setItem('klintman-lang', lang);
        } catch (e) {
            // localStorage unavailable, ignore
        }
    }

    toggle.addEventListener('click', () => {
        const currentLang = document.documentElement.lang === 'en' ? 'en' : 'sv';
        setLanguage(currentLang === 'sv' ? 'en' : 'sv');
    });

    let initialLang = 'sv';
    try {
        initialLang = localStorage.getItem('klintman-lang') || 'sv';
    } catch (e) {
        // localStorage unavailable, keep default
    }
    setLanguage(initialLang);
});
