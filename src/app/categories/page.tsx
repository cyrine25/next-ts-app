import Track from '../components/track/Track'

import style from './categories.module.scss'

import fetchTracks from '@/api/tracks'
import { Tracks } from '@/domain/tracks'
const Page = async () => {
  const tracks: ReadonlyArray<Tracks> = await fetchTracks()

  return (
    <div className={style.tracks}>
      <h1>Select Your track:</h1>
      <div className={style.tracks_container}>
        {tracks.map((track: Tracks) => (
          <div key={track.id} className={style.track} data-cy="track">
            <Track track={track.track} seniorityLevels={track.seniority_levels} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page
