import React, {Fragment} from 'react'

import 'nae-react-core-styles/dist/index.css'
import {NaeCoreStylesComponent, NaeLayout, NaeNavBar} from "nae-react-core-styles";
import {Button, Card, Col, Dropdown, Form, Row} from "react-bootstrap";

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


        <hr/>

        <Card>
          <Card.Body>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email"/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St"/>
              </Form.Group>

              <Form.Group controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor"/>
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Control as="select" defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control/>
                </Form.Group>
              </Form.Row>


              <Form.Row>
                <Form.Group as={Col} sm={3} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control/>
                </Form.Group>

                <Form.Group as={Col} sm={3} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Control as="select" defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} sm={3} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control/>
                </Form.Group>
              </Form.Row>

              <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out"/>
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>

            <hr/>
            <div role="group" className="btn-group-vertical">
              <button type="button" className="btn btn-outline-success">btn group 1</button>
              <button type="button" className="btn btn-danger">btn group 2</button>
            </div>

            <hr/>

            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Date</Form.Label>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Control placeholder={"from"}/>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Control placeholder={"to"}/>
                    </Form.Group>
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Field 1</Form.Label>
                <Form.Control/>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Field 2</Form.Label>
                <Form.Control/>
              </Form.Group>
              <Form.Group as={Col}>
              </Form.Group>
            </Form.Row>

            <hr/>

            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Select</Form.Label>
                <Form.Control
                  as="select"
                  className="mr-sm-2"
                >
                  <option value="0">0</option>
                  <option value={"1"}>1</option>
                  <option value={"2"}>2</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.File label="File"/>
              </Form.Group>
            </Form.Row>

          </Card.Body>
        </Card>

        <Card>
          <Card.Header>Dropdown</Card.Header>
          <Card.Body>
            <Dropdown>
              <Dropdown.Toggle variant="success">
                Dropdown success
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/">Item 1</Dropdown.Item>
                <Dropdown.Item href="/">Item 1</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <hr/>

            <Dropdown>
              <Dropdown.Toggle variant="light">
                Dropdown light
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/">Item 1</Dropdown.Item>
                <Dropdown.Item href="/">Item 1</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <hr/>

            <Dropdown>
              <Dropdown.Toggle variant="link">
                Dropdown link
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/">Item 1</Dropdown.Item>
                <Dropdown.Item href="/">Item 1</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Body>
        </Card>
      </Fragment>
    </NaeLayout.NaePageWrapper>
  )
}

export default App
