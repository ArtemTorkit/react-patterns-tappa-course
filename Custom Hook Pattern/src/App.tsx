import { useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import useLocalStorage from './hhoooks/useLocalStorage';
import useClipboard from './hhoooks/useClipboard';
import useFetch from './hhoooks/useFetch'
import useClickOutside from './hhoooks/useClickOutside';

function App() {
  const ref = useRef<React.RefObject<HTMLElement>>(null);

  const [name, setName] = useLocalStorage<string>('name', 'Artem');
  const  { copyToClipboard } = useClipboard();
  const {data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos/1', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  useClickOutside(ref, ()=> {console.log('Clicked outside!')});

  console.log('Data:', data);

  return (
    <>
    <div style={{ padding: '20px' }} ref={ref}>
      <button onClick={() => copyToClipboard(name)}>Copy Name to Clipboard</button>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
    </>
  )
}

export default App
