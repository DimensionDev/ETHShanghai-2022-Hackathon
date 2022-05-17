import { useTranslation } from 'next-i18next'
import { Icon } from './Icon'

const config = [
  '/images/media-support/block_beats.svg',
  '/images/media-support/chain_catcher.svg',
  '/images/media-support/foresight_news.svg',
  '/images/media-support/panews.svg',
  '/images/media-support/odaily_news.svg',
  '/images/media-support/tech_flow.svg',
]

export const MediaSupport = () => {
  const { t } = useTranslation('common')
  return (
    <footer className="flex flex-col gap-y-14 text-white">
      <div>
        <h4 className="inline-flex border-b-6 border-nav text-4xl font-bold leading-6">{t('media_support')}</h4>
      </div>
      <div className="flex flex-col gap-y-6">
        <div className="flex gap-x-4">
          {config.map((x) => (
            <div className="inline-flex rounded-lg bg-support px-7 py-8">
              <img src={x} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
