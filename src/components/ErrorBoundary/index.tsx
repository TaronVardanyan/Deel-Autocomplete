import React, { ErrorInfo } from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      hasError: true
    });
  }

  render() {
    if (this.state.hasError) {
      // You can render a fallback UI on Error
      return <div>Something went wrong.</div>;
    }
    // Render the children components if everything is good
    return this.props.children;
  }
}

export default ErrorBoundary;
