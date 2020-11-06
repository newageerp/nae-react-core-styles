import React from 'react'
import { Row, Col } from 'react-bootstrap'

interface Props {
  leftComponent: React.ReactChild
  rightComponent: React.ReactChild
}

export default function NaePageViewLayout(props: Props) {
  return (
    <Row>
      <Col sm={8}>{props.leftComponent}</Col>
      <Col sm={4}>{props.rightComponent}</Col>
    </Row>
  )
}
