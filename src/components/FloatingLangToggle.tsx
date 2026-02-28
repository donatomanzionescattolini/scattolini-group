import {useTranslation} from '../i18n.tsx';
import './FloatingLangToggle.scss';

export default function FloatingLangToggle() {
    const {lang, setLang, t} = useTranslation();

    return (
        <div className="floating-lang-toggle d-lg-none">
            <button
                type="button"
                className={`lang-btn ${lang === 'es' ? 'active' : ''}`}
                onClick={() => setLang('es')}
                aria-label={String(t('nav.switchToSpanish') || '')}
            >
                ES
            </button>
            <button
                type="button"
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => setLang('en')}
                aria-label={String(t('nav.switchToEnglish') || '')}
            >
                EN
            </button>
        </div>
    );
}
