import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import translations from './translations.json'

export type Locale = 'en' | 'uk' | 'ru'
type TranslationKey = keyof typeof translations
type Translate = (key: string, values?: Record<string, string>) => string
const storageKey = 'outtuna-language'

function savedLocale(): Locale {
  try {
    const saved = localStorage.getItem(storageKey)
    if (saved === 'uk' || saved === 'ru') return saved
  } catch {
    /* Storage may be unavailable in private browsing. */
  }
  return 'en'
}

export function translate(
  locale: Locale,
  key: string,
  values: Record<string, string> = {},
) {
  const entry = translations[key as TranslationKey]
  const text = locale === 'en' || !entry ? key : entry[locale === 'uk' ? 0 : 1]
  return text.replace(
    /\{(\w+)\}/g,
    (match, name: string) => values[name] ?? match,
  )
}

const I18nContext = createContext<{
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translate
} | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(savedLocale)
  useEffect(() => {
    document.documentElement.lang = locale
    const description = document.querySelector('meta[name="description"]')
    description?.setAttribute(
      'content',
      translate(
        locale,
        'OutTuna / Gleb. Desktop apps, useful scripts, systems programming and music on the side. Explore the projects and the person behind them.',
      ),
    )
    try {
      localStorage.setItem(storageKey, locale)
    } catch {
      /* Keep the in-memory selection. */
    }
  }, [locale])
  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: (key: string, values?: Record<string, string>) =>
        translate(locale, key, values),
    }),
    [locale],
  )
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) throw new Error('useI18n requires I18nProvider')
  return context
}

export function projectCountLabel(locale: Locale, count: number) {
  const form = new Intl.PluralRules(locale).select(count)
  if (locale === 'en') return count === 1 ? 'PROJECT' : 'PROJECTS'
  if (locale === 'uk')
    return form === 'one' ? 'ПРОЄКТ' : form === 'few' ? 'ПРОЄКТИ' : 'ПРОЄКТІВ'
  return form === 'one' ? 'ПРОЕКТ' : form === 'few' ? 'ПРОЕКТА' : 'ПРОЕКТОВ'
}
