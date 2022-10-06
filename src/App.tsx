import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { GlobalStyles, styled } from '../stitches.config'
import { Header } from './Components/Header'
import { Home } from './Pages/Home'
import { Post } from './Pages/Post'

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '100vw',
  minHeight: '100vh',
  paddingBottom: 32,
})

const Content = styled('div', {
  width: '100%',
  maxWidth: 864,
  margin: '0 auto',
  marginTop: -80,
  display: 'flex',
  flexDirection: 'column',

  '@bp1': {
    padding: 24,
  },
})

function App() {
  GlobalStyles()

  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<Post />} />
          </Routes>
        </Content>
      </Container>
    </BrowserRouter>
  )
}

export default App
