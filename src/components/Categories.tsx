import React from 'react'

type Props = {
  activeCategory: number
  setActiveCategory: (value: number) => void
}
export const Categories = ({ activeCategory, setActiveCategory }: Props) => {
  const categories = [
    { id: 0, title: 'Все' },
    { id: 1, title: 'Мясные' },
    { id: 2, title: 'Вегетарианская' },
    { id: 3, title: 'Гриль' },
    { id: 4, title: 'Острые' },
    { id: 5, title: 'Закрытые' },
  ]

  return (
    <div className="categories">
      <ul>
        {categories.map((item) => (
          <li
            key={item.title}
            onClick={() => setActiveCategory(item.id)}
            className={activeCategory === item.id ? 'active' : ''}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  )
}
