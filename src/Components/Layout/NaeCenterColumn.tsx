import React from 'react'
import { Col, Row } from 'react-bootstrap'

interface Props {
  children: React.ReactChild
  margins: number
}

export default function NaeCenterColumn(props: Props) {
  const centerWidth = 12 - props.margins * 2
  return (
    <Row>
      <Col sm={props.margins} />
      <Col sm={centerWidth}>{props.children}</Col>
      <Col sm={props.margins} />
    </Row>
  )
}
