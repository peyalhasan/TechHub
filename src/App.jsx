
import Page from '../Page'
import './App.css'
import { TogglePageProvider } from './Provider'

function App() {

  return (
    <TogglePageProvider>
      <Page />
    </TogglePageProvider>
  )
}

export default App
