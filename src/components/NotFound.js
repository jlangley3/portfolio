import React, { Fragment } from 'react'
import { Header, Image } from 'semantic-ui-react'

const NotFound = () => (
  <Fragment>
      <div style="height: 100%; margin: 0;">
  <div >
    <div >
      <div className="value">404</div>
      <div className="label">Error</div>
    </div>

    <div >
      <div className="header">Description</div>
      <p>Not found</p>
    </div>
  </div>
</div>
  </Fragment>
)

export default NotFound
