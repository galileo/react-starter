import React from 'react'
import { render } from 'react-dom'

import Sample from './containers/Sample/state'
import SampleForm from './containers/SampleForm/state'

render(
  <Sample />,
  document.getElementById('root')
)

render(
    <SampleForm/>,
    document.getElementById('form')
)

if (module.hot) {
  module.hot.accept()
}
