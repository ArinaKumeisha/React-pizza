import React from 'react'
import './scss/app.scss'
import { Categories, Header, Skeleton, Sorts } from './components'
import type { Item } from './components'
import axios from 'axios'
import { PizzaBlock } from './components'

function App() {
  const [pizzas, setPizzas] = React.useState<Item[]>([])
  const [isLoading, setIsLoading] = React.useState(true)
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://63074fc6c0d0f2b8012c2331.mockapi.io/items',
        )
        setPizzas(response.data)
        setIsLoading(false)
      } catch (e) {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sorts />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoading
              ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
              : pizzas.map((item) => <PizzaBlock item={item} key={item.id} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
