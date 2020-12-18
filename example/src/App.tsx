import React, {Fragment} from 'react'

import 'nae-react-core-styles/dist/index.css'
import {NaeCoreStylesComponent, NaeLayout, NaeNavBar, NaePaging, NaeTable} from "nae-react-core-styles";
import {Button, Card, Col, Dropdown, Form, Nav, Row, Spinner, Table} from "react-bootstrap";

const App = () => {
  return (
    <NaeLayout.NaePageWrapper top={<NaeNavBar.NaeTopNavbar middleComponent={
      <Nav>
        <Nav.Link href={'/'}>Nav 1</Nav.Link>

        <Nav.Link href={'/'}>Nav 2</Nav.Link>

        <Nav.Item>
          <Dropdown>
            <Dropdown.Toggle variant="link">
              Dropdown
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/">Dropdown 1</Dropdown.Item>
              <Dropdown.Item href="/">Dropdown 2</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav.Item>

      </Nav>
    } rightComponent={<Button variant='outline-danger'>
      Logout
    </Button>}/>}>
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

            <hr/>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Spinner animation={"border"} variant="info"/>
            <Spinner animation={"grow"} variant="info"/>

            <Spinner animation={"border"} variant="success"/>
            <Spinner animation={"grow"} variant="success"/>
          </Card.Body>
        </Card>


        <Card className={"card-table"}>
          <Card.Header>
            <Row>
              <Col className={"v-center"}>
                Elements
              </Col>
              <Col className={"text-right"}>
                <Button variant={"success"}>New</Button>
              </Col>
            </Row>
          </Card.Header>
          <Card.Header className={"search"}>
            <Row>
              <Col className={"v-center"}>
                <input placeholder={"search"} className={"search-input"}/>
              </Col>
              <Col sm={2}>
                <select>
                  <option value={""}>Filter</option>
                </select>
              </Col>
              <Col sm={2}>
                <select>
                  <option value={""}>Filter</option>
                </select>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <Table striped={true} hover={true}>
              <thead>
              <tr>
                <NaeTable.th id={true}>ID</NaeTable.th>
                <NaeTable.th>Date</NaeTable.th>
                <NaeTable.th>Number</NaeTable.th>
                <NaeTable.th>Client</NaeTable.th>
                <NaeTable.th number={true}>Lines</NaeTable.th>
                <NaeTable.th number={true}>Total</NaeTable.th>
                <NaeTable.th number={true}>Total with Vat</NaeTable.th>
                <NaeTable.th>Currency</NaeTable.th>
                <NaeTable.th number={true}>Total, EUR</NaeTable.th>
                <NaeTable.th number={true}>Total with Vat, EUR</NaeTable.th>
              </tr>
              </thead>
              <tbody>

              <tr>
                <NaeTable.td id={true}>1</NaeTable.td>
                <NaeTable.td link={true}>2020-02-20</NaeTable.td>
                <NaeTable.td>000001</NaeTable.td>
                <NaeTable.td>Google</NaeTable.td>
                <NaeTable.td number={true}>1</NaeTable.td>
                <NaeTable.td number={true} small={true}>20.00</NaeTable.td>
                <NaeTable.td number={true} small={true}>22.00</NaeTable.td>
                <NaeTable.td small={true}>USD</NaeTable.td>
                <NaeTable.td number={true}>18.00</NaeTable.td>
                <NaeTable.td number={true}>20.00</NaeTable.td>
              </tr>

              <tr>
                <NaeTable.td id={true}>1</NaeTable.td>
                <NaeTable.td link={true}>2020-02-20</NaeTable.td>
                <NaeTable.td>000001</NaeTable.td>
                <NaeTable.td>Google</NaeTable.td>
                <NaeTable.td number={true}>1</NaeTable.td>
                <NaeTable.td number={true} small={true}>20.00</NaeTable.td>
                <NaeTable.td number={true} small={true}>22.00</NaeTable.td>
                <NaeTable.td small={true}>USD</NaeTable.td>
                <NaeTable.td number={true}>18.00</NaeTable.td>
                <NaeTable.td number={true}>20.00</NaeTable.td>
              </tr>


              </tbody>
            </Table>
          </Card.Body>
          <Card.Footer>
            <div className={"paging"}>
              <NaePaging.Prev onClick={() => {
              }}/>
              <NaePaging.Group pages={10} activePage={4} onClick={() => {
              }}/>
              <NaePaging.Next onClick={() => {
              }}/>
            </div>
          </Card.Footer>
          <Card.Footer>
            <div className={"paging"}>
              <NaePaging.Prev onClick={() => {
              }}/>
              <NaePaging.Group pages={10} activePage={6} onClick={() => {
              }}/>
              <NaePaging.Next onClick={() => {
              }}/>
            </div>
          </Card.Footer>
          <Card.Footer>
            <div className={"paging"}>
              <NaePaging.Prev onClick={() => {
              }}/>
              <NaePaging.Group pages={10} activePage={1} onClick={() => {
              }}/>
              <NaePaging.Next onClick={() => {
              }}/>
            </div>
          </Card.Footer>

          <Card.Footer>
            <div className={"paging"}>
              <NaePaging.Prev onClick={() => {
              }}/>
              <NaePaging.Group pages={5} activePage={4} onClick={() => {
              }}/>
              <NaePaging.Next onClick={() => {
              }}/>
            </div>
          </Card.Footer>
        </Card>
      </Fragment>
    </NaeLayout.NaePageWrapper>
  )
}

export default App
