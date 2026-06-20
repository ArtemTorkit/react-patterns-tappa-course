import { useState, lazy, Suspense } from "react";
import "./App.css";
import SearchUsers from "./components/SearchUsers";
import SearchUsersTransition from "./components/SearchUsersTransition";

const BandwidthHeavyComponent = lazy(
  () => import("./components/BandwidthHeavyComponent"),
);

function App() {
  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <SearchUsers />
      <SearchUsersTransition />

      <button onClick={handleToggle}>
        {isOpen ? "Close" : "Open"} Heavy Component
      </button>
      
      <Suspense fallback={<div>Loading heavy assets...</div>}>
        {isOpen && <BandwidthHeavyComponent />}
      </Suspense>
    </>
  );
}

export default App;
