import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import FallBack from "./components/FallBack";
import {
  ProductDetails,
  ProductReviews,
  Reccomendations,
} from "./components/product";

function App() {
  return (
    <div className="product-container">
      <SafeComponent>
        <ProductDetails />
      </SafeComponent>

      <SafeComponent>
        <ProductReviews />
      </SafeComponent>

      <SafeComponent>
        <Reccomendations />
      </SafeComponent>
    </div>
  );
}

function SafeComponent({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary fallback={(props) => <FallBack {...(props as any)} />}>
      {children}
    </ErrorBoundary>
  );
}

export default App;
