import React from "react";

type FallbackProps = { error: Error; onRetry: () => void };

interface Props {
  fallback: React.ComponentType<FallbackProps>;
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  retryKey: number;
}

class ErrorBoundary extends React.Component<Props, State> {
  state: State = {
    hasError: false,
    error: null,
    retryKey: 0,
  };

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("Error: ", error.message);
    console.error("Component stack: ", info.componentStack);
  }

  handleRetry = () => {
    this.setState((prev) => ({
      hasError: false,
      error: null,
      retryKey: prev.retryKey + 1,
    }));
  };

  render() {
    const { hasError, error, retryKey } = this.state;
    const { fallback: Fallback, children } = this.props;

    if (hasError && error) {
      return <Fallback error={error} onRetry={this.handleRetry} />;
    }

    return <div key={retryKey}>{children}</div>;
  }
}

export default ErrorBoundary;