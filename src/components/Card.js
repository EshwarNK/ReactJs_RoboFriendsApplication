import React from 'react';

// const Card = (props) => {
// 	const {name, email} = props;
// 	return (
// 		// This is all JSX  robots.js
// 		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
// 		<img src={'https://robohash.org/${props.id}?200x200'} alt='robots'/>
// 			<div >
// 				<h2>{props.name}</h2>
// 				<p>{props.email}</p>
// 			</div> 
// 		</div>
// 		);
// }

const Card = ({ name, email, id }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;