import React, { Fragment } from 'react'

const Footer = () => {
  return (
    <Fragment>
      <footer className={'bg-dark text-light text-center'}>
        <div className={'container p-4'}>
          <h3>Christian Riaño Portfolio</h3>
          <p>{`2000 - ${new Date().getFullYear()}`}</p>
          <p>&copy; All rights reserver</p>
        </div>
      </footer>
    </Fragment>
  )
}

export default Footer
