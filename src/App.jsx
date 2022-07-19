import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { QrCode } from './components/QrCode'

function App() {
  const [count, setCount] = useState(0)

  return (
    <QrCode/>
  )
}

export default App
