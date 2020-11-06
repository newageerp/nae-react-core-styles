import React from 'react'
import { Col, Container, Navbar, Row } from 'react-bootstrap'

interface Props {
  middleComponent?: React.ReactChild
  rightComponent?: React.ReactChild
}

export default function NaeTopNavbar(props: Props) {
  return (
    <Container fluid className='navbar'>
      <Row>
        <Col sm={12}>
          <Container>
            <Row className='nav-items'>
              <Col sm={2} className='v-center'>
                <Navbar.Brand href='#home'>NewAgeErp</Navbar.Brand>
              </Col>
              <Col sm={8} className='v-center'>
                {!!props.middleComponent && props.middleComponent}
              </Col>
              <Col sm={2} className='text-right'>
                {!!props.rightComponent && props.rightComponent}
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}
