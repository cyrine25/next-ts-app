import Tag from './tag/Tag'

const Tags = () => {
  const tags = ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5', 'Tag 6', 'Tag 7', 'Tag 8', 'Tag 9', 'Tag 10']

  return (
    <div>
      {tags.map((tag: string, index: number) => (
        <Tag tagName={tag} key={index} />
      ))}
    </div>
  )
}

export default Tags
