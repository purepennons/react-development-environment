import React, { Component } from 'react'
import { Router, Route } from 'react-router'

import PropTypes from 'prop-types'
import styles from './style.scss'

import Header from '../Header/'
import Home from '../Home/'
import Footer from '../Footer/'

class Main extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {}

  componentWillReceiveProps() {}

  shouldComponentUpdate() {}

  handleChange() {}

  render() {
    return (
      <div className={`Main`}>
        <Header />

        <Route exact path="/" component={Home} />

        <Footer />
      </div>
    )
  }
}

Main.propTypes = {}

Main.defaultProps = {}

export default Main
