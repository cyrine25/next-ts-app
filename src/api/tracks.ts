import { SeniorityLevel, Tracks } from '@/domain/tracks'

const fetchTracks = async (): Promise<ReadonlyArray<Tracks>> => {
  const data = await fetch('http://127.0.0.1:3000/data/tracks.json')
  const tracks: ReadonlyArray<Tracks> = await data.json()
  return tracks.map((q: Tracks) => ({
    id: q.id,
    track: q.track,
    seniority_levels: q.seniority_levels.map((seniority: SeniorityLevel) => ({
      id: seniority.id,
      level: seniority.level,
    })),
  }))
}

export default fetchTracks
