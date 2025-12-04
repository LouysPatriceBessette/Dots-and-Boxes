import React from 'react'
import { ButtonGroup, IconButton, Pagination } from '@chakra-ui/react'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'

export const ChakraPagination = ({
  count,
  pageSize,
  currentPage,
  setCurrentPage,
  setOffset,
}) => {
  return (
    <Pagination.Root
      count={count}
      pageSize={pageSize}
      defaultPage={currentPage}
      style={{marginBottom: '16px'}}
    >
      <ButtonGroup variant="ghost">
        <Pagination.PrevTrigger asChild>
          <IconButton>
            <LuChevronLeft />
          </IconButton>
        </Pagination.PrevTrigger>

        <Pagination.Items
          render={(page) => (
            <IconButton variant={{ base: 'ghost', _selected: 'outline' }}
              onClick={() => {
                setCurrentPage(page.value)
                setOffset((page.value -1) * pageSize)
              }}
            >
              {page.value}
            </IconButton>
          )}
        />

        <Pagination.NextTrigger asChild>
          <IconButton>
            <LuChevronRight />
          </IconButton>
        </Pagination.NextTrigger>
      </ButtonGroup>
    </Pagination.Root>
  )
}