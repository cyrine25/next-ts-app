import Link from 'next/link'

import style from './track.module.scss'

import { SeniorityLevel } from '@/domain/tracks'
type Props = {
  seniorityLevels: ReadonlyArray<SeniorityLevel>
  track: string
}
const Track = ({ track, seniorityLevels }: Props) => (
  <div className={style.track_container}>
    <div className={style.track_header}>
      <h1 className={style.track_title}>{track}</h1>
    </div>
    <div className={style.seniority_levels}>
      {seniorityLevels.map(seniority => (
        <Link href={{ pathname: '/questions' }} key={seniority.id} className={style.level} data-cy="seniority">
          <span className={style.arrow}></span>
          <p className={style.label}>{seniority.level}</p>
        </Link>
      ))}
    </div>
  </div>
)

export default Track
