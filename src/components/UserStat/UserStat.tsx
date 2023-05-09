import { LocalGitHubUser } from 'types';
import styles from './UserStat.module.scss';

export interface UserStatProps  extends Pick <LocalGitHubUser, 'repos' |'followers' | 'following'> {}



export const UserStat = ({ repos, followers, following}: UserStatProps) => (
  <div className={styles.userStat}>
    <div className={styles.userInfo}>
      <div className={styles.infoTitle}>Repos</div>
      <div className={styles.infoNumber}>{repos}</div>
    </div>
    <div className={styles.userInfo}>
      <div className={styles.infoTitle}>following</div>
      <div className={styles.infoNumber}>{following}</div>
    </div>
    <div className={styles.userInfo}>
      <div className={styles.infoTitle}>followers</div>
      <div className={styles.infoNumber}>{followers}</div>
    </div>
  </div>
);
