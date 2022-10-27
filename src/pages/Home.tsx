import React from 'react'
import axios from 'axios'
import { Categories, Sorts, PizzaBlock, Skeleton } from '../components'
import type { Item } from '../components'

export type ObjType = {
  name: string
  sort: string
}
export const Home = () => {
  const [pizzas, setPizzas] = React.useState<Item[]>([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [selectedSort, setSelectedSort] = React.useState<ObjType>({
    sort: 'rating',
    name: 'популярности',
  }) //для сортировки (селект)

  const [activeCategory, setActiveCategory] = React.useState<number>(0) //для категорий пицц
  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const order = selectedSort.sort.includes('-') ? 'asc' : 'desc' //это для того, чтоб понять по возрастанию или по убыванию сортировать
      const sortBy = selectedSort.sort.replace('-', '') //вырезали минус, если он приходит, чтоб работал параметр в url
      const category = activeCategory > 0 ? `category=${activeCategory}` : '' //проверка, если категория есть показываем, если нет, то показываются все
      try {
        const response = await axios.get(
          `https://63074fc6c0d0f2b8012c2331.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`,
        )
        setPizzas(response.data)
        setIsLoading(false)
        console.log(response.data)
      } catch (e) {
        setIsLoading(false)
      }
    }
    fetchData()
    // window.scrollTo(0, 0)
  }, [activeCategory, selectedSort.sort])
  return (
    <>
      <div className="content__top">
        <Categories
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <Sorts selectedSort={selectedSort} setSelectedSort={setSelectedSort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : pizzas.map((item) => <PizzaBlock item={item} key={item.id} />)}
      </div>
    </>
  )
}
