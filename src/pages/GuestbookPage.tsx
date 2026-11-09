import { useI18n } from '../i18n'
import { profile } from '../data/content'
import Box from '../components/Box'
import UnderConstruction from '../components/UnderConstruction'

export default function GuestbookPage() {
  const { t } = useI18n()
  return (
    <Box title={t('Guestbook')} tone="purple">
      <UnderConstruction />
      <p className="center">
        {t('The real guestbook is coming soon. Until then, say hi on GitHub!')}
      </p>
      <p className="center">
        <a href={profile.github} target="_blank" rel="noreferrer">
          &gt;&gt; github.com/{profile.handle} &lt;&lt;
        </a>
      </p>
    </Box>
  )
}
