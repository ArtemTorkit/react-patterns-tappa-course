import { useEffect } from "react";
import "./App.css";
import Toolbar from "./components/Toolbar";
import { useToast } from "./hooks/useToast";

function App() {
  const addToast = useToast();

  useEffect(() => {
    const showToasts = setInterval(() => {
      addToast({ message: "HELLO THIS IS THE TOAST!" });
    }, 10000);

    return () => {
      clearInterval(showToasts);
    };
  }, []);

  return (
    <div
    //  style={{display:'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}
    >
      <Toolbar start={<div>1</div>} center={<div>2</div>} end={<div>3</div>} />
    </div>
  );
}

export default App;
