import { ThemeProvider } from "styled-components"

import { GlobalStyle } from "./styles/themes/global"
import { defaultTheme } from "./styles/themes/default"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ShoppingCartProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ShoppingCartProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
