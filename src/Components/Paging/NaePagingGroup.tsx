import React, {Fragment, useEffect, useState} from 'react'
import NaePagingBtn from './NaePagingBtn'

interface Props {
  pages: number
  onClick: (page: number) => void
  activePage: number
}

export default function NaePagingGroup(props: Props) {
  const {pages, onClick, activePage} = props
  const [mapPages, setMapPages] = useState<number[]>([])

  const _setMapPages = () => {
    let _mapPages: number[] = []

    _mapPages.push(1)
    _mapPages.push(2)
    _mapPages.push(3)

    _mapPages.push(activePage - 2)
    _mapPages.push(activePage - 1)
    _mapPages.push(activePage)
    _mapPages.push(activePage + 1)
    _mapPages.push(activePage + 2)

    _mapPages.push(pages - 2)
    _mapPages.push(pages - 1)
    _mapPages.push(pages)

    _mapPages = _mapPages.filter(value => {
      return value >= 1 && value <= pages
    })
    _mapPages = _mapPages.filter((value, index, self) => {
      return self.indexOf(value) === index
    })
    _mapPages = _mapPages.sort((a, b) => a - b)

    setMapPages(_mapPages)
  }

  useEffect(_setMapPages, [pages, activePage])

  return (
    <div className='paging-group'>
      {mapPages.map((_p: number, index: number) => {
        const isSep = index > 0 && _p - mapPages[index - 1] > 1
        return (
          <Fragment key={'page-' + _p}>
            {isSep && <button>...</button>}
            <NaePagingBtn
              active={_p === activePage}
              onClick={() => onClick(_p)}
            >
              {_p}
            </NaePagingBtn>
          </Fragment>
        )
      })}
    </div>
  )
}
