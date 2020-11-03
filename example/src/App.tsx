import React, {Fragment} from 'react'

import 'nae-react-core-styles/dist/index.css'
import {NaeCoreStylesComponent} from "nae-react-core-styles";

const App = () => {
  return <Fragment>
    <NaeCoreStylesComponent/>
    <div className={"container"}>
      <div className={"row"}>
        <div className={"col"}>
          <div className={"card"}>
            <div className={"card-header"}>
              Card header
            </div>
            <div className={"card-body"}>
              Card body
            </div>
            <div className={"card-footer"}>
              <button className={"btn btn-success"}>Success</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
}

export default App
