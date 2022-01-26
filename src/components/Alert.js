import React from 'react';

export default function Alert(props) {
    const styles = {
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        top: '10px',
        zIndex: '100'
    }

    // const capitalized = (word)=>{
    //     let lower = word.toLowerCase()
    //     return lower.charAt(0).toUpperCase() + lower.slice(1)
    // }
  return (
    props.alert && <div style={styles} className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        {/* <strong>{capitalized(props.alert.type)}</strong> */}
        {'  '+props.alert.messsage}
    </div>
  );
}
