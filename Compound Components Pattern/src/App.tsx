import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'
import Tabs from './components/Tabs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card>
        <Card.Header>
          <h2>Card Title</h2>
        </Card.Header>
        <Card.Image src={heroImg} alt="Hero Image" />
        <Card.Body>
          <p>This is the body of the card. It can contain any content you like.</p>
        </Card.Body>
        <Card.Footer>
          <button onClick={() => setCount(count + 1)}>Count: {count}</button>
        </Card.Footer>

        <Tabs>
          <Tabs.Item label="Tab 1">Content for Tab 1</Tabs.Item>
          <Tabs.Item label="Tab 2">Content for Tab 2</Tabs.Item>
          <Tabs.Item label="Tab 3">Content for Tab 3</Tabs.Item>
        </Tabs>
       </Card>
    </>
  )
}

export default App
