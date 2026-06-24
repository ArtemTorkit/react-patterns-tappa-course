import { Suspense } from "react";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import UserData from "./components/UserData";
import Fallback from "./components/Fallback";

function App() {
  return (
    <div>
      <ErrorBoundary fallback={Fallback}>
        <Suspense fallback={<div>Fetching user data...</div>}>
          <UserData />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
