
import Page from '../Page'
import './App.css'
import { CartProvider, ProductProvider, TogglePageProvider } from './Provider'

function App() {

  return (
    <ProductProvider>
      <CartProvider>
        <TogglePageProvider>
          <Page />
        </TogglePageProvider>
      </CartProvider>
    </ProductProvider>
  )
}

export default App
