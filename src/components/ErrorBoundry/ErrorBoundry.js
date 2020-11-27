import { Component } from 'react';
import ErrorIndicator from "../ErrorIndicator"

export default class ErrorBoundry extends Component {

  state = {
      hasError: false
  }

  componentDidCatch() {
      this.setState({hasError: true})
  }

  render() {
      return (this.hasError) ? (<ErrorIndicator />) : (this.props.children)
  }
}