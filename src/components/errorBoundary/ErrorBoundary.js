import { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        error: false,
    };

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
        this.setState({ error: true });
    }

    render() {
        if (this.state.error) {
            return (
                <h1 style={{ textAlign: 'center', marginTop: '20px' }}>
                    Error
                </h1>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
