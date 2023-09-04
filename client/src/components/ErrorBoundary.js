import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("Caught an error:", error, info);
        // Consider reporting the error to an error tracking service
        // e.g., sendErrorToService(error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h1>Oops! Something went wrong.</h1>
                    <p>We're sorry for the inconvenience. Please try refreshing the page or contact support if the issue persists.</p>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
