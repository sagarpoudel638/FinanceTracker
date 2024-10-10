import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './components/Input'
import Card from './components/Card'

function App() {
  return(
  <>
      <Input inputlabel="Total Money in Bank" />
      <Input inputlabel="Fortnight Income" />
      <Input inputlabel="Regular Expenses" />
      <Input inputlabel="Money Lend"/>
      <Input inputlabel="Expected Expenses" />
      <Card></Card>
    </>
  )
}

export default App
