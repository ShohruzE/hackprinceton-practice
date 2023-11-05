import React, { useState, useEffect } from 'react'

const Card = ({ content }) => {

  return (
    <div className="Card">
        <div className="Card-content">
            <p>{content}</p>
        </div>
    </div>
  )
}

export default Card;