import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class Authentication extends Component {
    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  Authentication.propTypes = {
    authenticated: PropTypes.bool,
  };
  Authentication.defaultProps = {
    authenticated: null,
  };
  Authentication.contextTypes = {
    router: PropTypes.object,
  };

  const mapStateToProps = function (state) {
    return {
      authenticated: state.auth.authenticated,
    };
  };

  return connect(mapStateToProps)(Authentication);
}
