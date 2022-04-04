import React from 'react';

export default function Die(props) {
    const styles = {
      backgroundColor: props.isclicked ? '#0B2434' : 'white',
      color: props.isclicked ? 'white' : 'black'
    };
    return(
        <div className='die-design' onClick={props.clickedDice} style={styles}>
            <h2>{props.value}</h2>
        </div>
    )
}