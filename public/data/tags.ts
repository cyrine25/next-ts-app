export interface SelectTags {
  readonly value: string
  readonly label: string
}
export const tags: ReadonlyArray<SelectTags> = [
  { value: 'Kafka', label: 'Kafka' },
  { value: 'React', label: 'React' },
  { value: 'Kotlin', label: 'Kotlin' },
  { value: 'Kubernetes', label: 'Kubernetes' },
  { value: 'Docker', label: 'Docker' },
  { value: 'Java', label: 'Java' },
  { value: 'Spring Cloud', label: 'Spring Cloud' },
  { value: 'GCP', label: 'GCP' },
  { value: 'Tag 10', label: 'Tag 10' },
]
