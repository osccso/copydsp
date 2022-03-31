import React from 'react'

const SideBarItem = () => {
  return (
    <Accordion.Item eventKey='0'>
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              <input type='checkbox' />
              <label for=''>industry</label>
            </Accordion.Body>
    </Accordion.Item>
  )
}

export default SideBarItem