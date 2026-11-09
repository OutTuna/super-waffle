import { useState } from 'react'
import { useI18n } from '../i18n'
import { about, now, profile, techGroups } from '../data/content'
import Box from '../components/Box'

export default function AboutPage() {
  const { t } = useI18n()
  // Pulled live from GitHub; falls back to the monogram if it can't load.
  const [avatarFailed, setAvatarFailed] = useState(false)
  return (
    <>
      <Box title={t('About me')} tone="purple">
        <div className="about-card">
          <div className="avatar">
            {avatarFailed ? (
              <span aria-hidden="true">ot</span>
            ) : (
              <img
                src={`https://github.com/${profile.handle}.png?size=192`}
                alt={t('My GitHub avatar')}
                width={90}
                height={90}
                onError={() => setAvatarFailed(true)}
              />
            )}
          </div>
          <div>
            <table className="facts">
              <tbody>
                <tr>
                  <th scope="row">{t('Name')}:</th>
                  <td>{t(profile.name)}</td>
                </tr>
                <tr>
                  <th scope="row">{t('Nickname')}:</th>
                  <td>{profile.handle}</td>
                </tr>
                <tr>
                  <th scope="row">{t('Mood')}:</th>
                  <td>{t('compiling')} 😴</td>
                </tr>
                <tr>
                  <th scope="row">{t('Into')}:</th>
                  <td>{profile.roles.map((role) => t(role)).join(', ')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {about.map((paragraph) => (
          <p key={paragraph}>{t(paragraph)}</p>
        ))}
      </Box>

      <Box title={t('Right now')} tone="green">
        <ul className="star-list">
          {now.map((item) => (
            <li key={item.title}>
              <strong>{t(item.title)}:</strong> {t(item.text)}
            </li>
          ))}
        </ul>
      </Box>

      <Box title={t('My toolbox')}>
        <div className="toolbox">
          {techGroups.map((group) => (
            <div key={group.name}>
              <h3>{t(group.name)}</h3>
              <ul className="star-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Box>

      <Box title={t('Find me')} tone="red">
        <p className="center">
          <a href={profile.github} target="_blank" rel="noreferrer">
            github.com/{profile.handle}
          </a>
        </p>
      </Box>
    </>
  )
}
