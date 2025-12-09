
import Page from '../Page'
import './App.css'
import { CartProvider,  TogglePageProvider } from './Provider'

function App() {

  return (
      <CartProvider>
        <TogglePageProvider>
          <Page />
        </TogglePageProvider>
      </CartProvider>
  )
}

export default App
