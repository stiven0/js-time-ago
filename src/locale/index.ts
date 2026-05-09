import { registerLocale } from './registry';
import { en } from './en';
import { es } from './es';
import { pt } from './pt';

// Registra los locales built-in automáticamente al importar la librería
registerLocale('en', en);
registerLocale('es', es);
registerLocale('pt', pt);

export { registerLocale, getLocaleDict } from './registry';
export { en } from './en';
export { es } from './es';
export { pt } from './pt';

// Legacy re-exports (backward compatibility)
export { secondsEs, minutesEs, hoursEs, daysEs, weeksEs, monthsEs, yearsEs } from './es';
export { secondsEn, minutesEn, hoursEn, daysEn, weeksEn, monthsEn, yearsEn } from './en';
export { secondsPt, minutesPt, hoursPt, daysPt, weeksPt, monthsPt, yearsPt } from './pt';
