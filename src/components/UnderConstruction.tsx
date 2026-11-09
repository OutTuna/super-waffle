import { useI18n } from '../i18n'

export default function UnderConstruction({ text }: { text?: string }) {
  const { t } = useI18n()
  return (
    <div className="construction">
      <span aria-hidden="true">🚧</span>
      <strong>{text ?? t('UNDER CONSTRUCTION')}</strong>
      <span aria-hidden="true">🚧</span>
    </div>
  )
}
