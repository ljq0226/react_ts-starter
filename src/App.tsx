import { Button } from 'antd'
import List from '@/components/List'
import About from '@/components/About'
import Home from '@/components/Home'
import { Routes, Route, Link } from 'react-router-dom'
function App() {

  return (
    <div className="App">
      <Button type='primary'>Test</Button>
      <h1 className="text-red-500 underline">123</h1>
      <Link to="/home">To Home</Link>
      <Link to="/about">To About</Link>
      <List></List>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>






    </div>
  )
}
export default App
