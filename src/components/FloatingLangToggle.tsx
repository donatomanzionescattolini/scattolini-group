import {useTranslation} from '../i18n.tsx';
import './FloatingLangToggle.scss';

export default function FloatingLangToggle() {
    const {lang, setLang} = useTranslation();

    return (
        <div className="floating-lang-toggle d-lg-none">
            <button
                type="button"
                className={`lang-btn ${lang === 'es' ? 'active' : ''}`}
                onClick={() => setLang('es')}
                aria-label="Cambiar a español"
            >
                ES
            </button>
            <button
                type="button"
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => setLang('en')}
                aria-label="Switch to English"
            >
                EN
            </button>
        </div>
    );
}
