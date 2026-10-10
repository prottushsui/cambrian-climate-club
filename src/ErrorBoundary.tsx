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

  handleGoHome = () => {
    window.location.assign(
      `${window.location.pathname}${window.location.search}#/`
    );
  };

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <main
            className="flex min-h-screen flex-col items-center justify-center bg-sandstone-50 px-4 py-16 text-center"
            role="alert"
            aria-labelledby="error-title"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-sandstone-300 bg-white text-3xl">
              🌱
            </div>
            <p className="editorial-kicker mb-3">A little site hiccup</p>
            <h1
              id="error-title"
              className="font-heading text-3xl font-semibold text-charcoal-900 sm:text-4xl"
            >
              Prottush is working, bro.
              <br />
              Let my man cook.
            </h1>
            <p className="mt-4 max-w-md text-charcoal-600">
              Something got tangled behind the scenes. The Climate Club is still
              growing — give us a moment, then try again.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                className="rounded-lg bg-primary px-5 py-3 font-semibold text-white transition hover:bg-primary-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                onClick={this.handleReload}
              >
                Try again
              </button>
              <button
                type="button"
                className="rounded-lg border border-sandstone-300 bg-white px-5 py-3 font-semibold text-charcoal-900 transition hover:bg-sandstone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                onClick={this.handleGoHome}
              >
                Back to home
              </button>
            </div>
            <p className="mt-8 text-sm text-charcoal-500">
              If this keeps happening, check back in a little while.
            </p>
          </main>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
