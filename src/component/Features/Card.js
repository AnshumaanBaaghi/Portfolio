import React from "react"

const Card = (props) => {
  return (
    <>
      <div className='box btn_shadow'>
        {!props.image ? <div style={{ fontSize: '45px' }}>Express</div> : <img src={props.image} alt='' />}
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <a href='/'>
          <i className='fas fa-arrow-right'></i>
        </a>
      </div>
    </>
  )
}

export default Card
