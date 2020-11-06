import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'

interface Props {
  children?: React.ReactChild
  top?: React.ReactChild
}

export default function NaePageWrapper(props: Props) {
  return (
    <Fragment>
      {!!props.top && props.top}
      <Container className='pt-4 pb-4'>
        {!!props.children && props.children}
      </Container>
    </Fragment>
  )
}
