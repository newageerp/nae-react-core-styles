import React, { Fragment } from 'react'
import { Card, Table } from 'react-bootstrap'
import { NaePaging } from '../..'

interface Props<T> {
  pageSize?: number
  activePage: number
  setActivePage: (p: number) => void
  dataToRender: T[]
  head: React.ReactChild
  renderItem: (item: T) => React.ReactChild
}

export default function NaeTableWithPaging<T>(props: Props<T>) {
  const {
    head,
    renderItem,
    dataToRender,
    activePage,
    setActivePage,
    pageSize = 20
  } = props

  const pages = Math.ceil(dataToRender.length / pageSize)
  const offsetStart = (activePage - 1) * pageSize
  const offsetEnd = offsetStart + pageSize

  return (
    <Fragment>
      <Card.Body>
        <Table striped hover className='mt-2'>
          <thead>{head}</thead>
          <tbody>
            {dataToRender.slice(offsetStart, offsetEnd).map(renderItem)}
          </tbody>
        </Table>
      </Card.Body>
      <Card.Footer>
        <div className='paging'>
          <NaePaging.Prev
            onClick={() => {
              setActivePage(Math.max(activePage - 1, 1))
            }}
          />
          <NaePaging.Group
            pages={pages}
            activePage={activePage}
            onClick={(p) => {
              setActivePage(p)
            }}
          />
          <NaePaging.Next
            onClick={() => {
              setActivePage(Math.min(activePage + 1, pages))
            }}
          />
        </div>
      </Card.Footer>
    </Fragment>
  )
}
