import './App.css'
import './index.css';
import Navbar from './components/navbar/Navbar';
import Card1 from './components/card/Card1';
import Card2 from './components/card/Card2';
import Card3 from './components/card/Card3';

function App() {
  return (
    <>
      <Navbar/>
      <div className='flex flex-col md:flex-row justify-center gap-4'>
        <Card1/>
        <Card2/>
        <Card3/>
      </div>
    </>
  )
}

export default App
