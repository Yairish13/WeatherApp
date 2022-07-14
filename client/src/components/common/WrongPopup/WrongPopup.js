import React from 'react'
import Popup from '../Popup/Popup'

function WrongPopup({togglePopup}) {
    return (
        <Popup
          content={
            <>
              <b>Oops</b>
              <p>
                Looks like there is no place like this, try to type correct
                place please :)
              </p>
            </>
          }
          handleClose={togglePopup}
        />
    )
}

export default WrongPopup
