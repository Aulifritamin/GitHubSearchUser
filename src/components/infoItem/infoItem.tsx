import styles from './InfoItem.module.scss';

interface InfoItemProps {
  icon: React.ReactNode,
  text?: string | null,
  isLink?: boolean
 }

export const InfoItem = ({icon, isLink, text }: InfoItemProps) => {
  const currentText = text || 'Not available'
  let currentHREF = ''

  if(isLink) {
    currentHREF = text && text.startsWith('http') ? text : `https://${text}`
  }
  
  return(
    <div className={`${styles.infoItem}${text? '' : ` ${styles.empty}`}`}>
      {icon}
      <div>
        {isLink && text ? (
          <a href={currentHREF} target='_blank' rel='noreferrer' className={styles.link}>

          </a>
        ) : currentText}
      </div>
    </div>
)};
