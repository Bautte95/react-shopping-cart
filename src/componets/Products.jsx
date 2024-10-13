import '../componets/Products.css'
import { AddToCartIcon } from '../componets/Icons'

export const Products = ({ products }) => {
  const hasProducts = products.length > 0
  return (
    <main className='products'>
      {hasProducts
        ? (
          <ul className='products'>
            {products.map(product =>
              (
                <li key={product.id}>
                  <img src={product.thumbnail} alt={product.title} />
                  <div>
                    <strong>{product.title} - ${product.price}</strong>
                  </div>
                  <div>
                    <button><AddToCartIcon /></button>
                  </div>
                </li>
              )
            )}
          </ul>
          )
        : (<p>No hay productos para mostrar</p>)}
    </main>
  )
}
