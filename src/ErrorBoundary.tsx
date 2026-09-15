import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Keep diagnostics in the developer console without exposing internal
    // implementation details or stack traces to site visitors.
    console.error('Application rendering error', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <main className="flex min-h-screen flex-col items-center justify-center bg-sandstone-50 px-4 py-16 text-center">
            <p className="editorial-kicker mb-3">Unexpected error</p>
            <h1 className="font-heading text-3xl font-semibold text-charcoal-900">
              Something went wrong
            </h1>
            <p className="mt-3 max-w-md text-charcoal-600">
              The page could not be displayed. Please reload and try again.
            </p>
            <button
              type="button"
              className="mt-6 rounded-lg bg-primary px-5 py-3 font-semibold text-white transition hover:bg-primary-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              onClick={this.handleReload}
            >
              Reload page
            </button>
          </main>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
