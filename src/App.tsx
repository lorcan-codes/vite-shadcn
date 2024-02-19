import './App.css'
import { Button } from './components/ui/button'

function App() {
  return (
    <div>
      <h1 className="text-2xl mb-3">
        Bug with using custom tailwind fontSize config in shadcn
      </h1>
      <Button className="text-4xl">text-4xl</Button>
      <Button className="text-h1">text-h1</Button>
      <div className="text-left">
        <h2 className="text-2xl mt-5 font-bold">Bug list</h2>
        <ul className='list-disc'>
          <li>"text-h1" should set fontSize to 50px</li>
          <li>
            Using "text-h1" should not override "text-primary-foreground" color
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
