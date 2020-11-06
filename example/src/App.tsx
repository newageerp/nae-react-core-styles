import React, {Fragment} from 'react'

import 'nae-react-core-styles/dist/index.css'
import {NaeCoreStylesComponent, NaeLayout, NaeNavBar} from "nae-react-core-styles";

const App = () => {
  return (
    <NaeLayout.NaePageWrapper top={<NaeNavBar.NaeTopNavbar/>}>
      <Fragment>
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
        <hr/>
        <NaeLayout.NaeCenterColumn margins={3}>{"NaeCenterColumn layout"}</NaeLayout.NaeCenterColumn>
        <hr/>
        <NaeLayout.NaePageViewLayout leftComponent={"NaePageViewLayout left"}
                                     rightComponent={"NaePageViewLayout right"}/>
        <NaeCoreStylesComponent/>
      </Fragment>
    </NaeLayout.NaePageWrapper>
  )
}

export default App
