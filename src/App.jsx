import { Products } from './componets/Products'
import productList from './mocks/products.json'

function App () {
  return (
    <Products products={productList.products} />
  )
}

export default App
