import { useRef } from 'react'
import './App.css'

import useLocalStorage from './hooks/useLocalStorage';
import useFetch from './hooks/useFetch';
import useClipboard from './hooks/useClipboard';
import useClickOutside from './hooks/useClickOutside';

function App() {
  const [name, setName] = useLocalStorage<string>('name', 'Artem');

  const  { copyToClipboard } = useClipboard();

  const {data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos/1', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log('Data:', data, 'Loading:', loading, 'Error:', error);

  const containerRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(containerRef, ()=> {console.log('Clicked outside!')});

  return (
    <>
    <div style={{ padding: '20px' }} ref={containerRef}>
      <button onClick={() => copyToClipboard(name)}>Copy Name to Clipboard</button>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
    </>
  )
}

export default App
