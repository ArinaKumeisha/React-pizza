import React from 'react'

export const Categories = () => {
  const [activeCategory, setActiveCategory] = React.useState(0)

  const categories = [
    { id: 0, title: 'Мясные' },
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
