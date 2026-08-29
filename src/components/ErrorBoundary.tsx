import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error) {
    console.error('Error caught by ErrorBoundary:', error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-red-900">
          <div className="rounded-lg bg-red-800 p-8 text-white max-w-lg">
            <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
            <details className="whitespace-pre-wrap break-words">
              <summary className="cursor-pointer font-semibold mb-2">Error details</summary>
              <code className="text-sm">{this.state.error?.toString()}</code>
            </details>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
