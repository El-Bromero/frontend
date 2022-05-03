import React from "react";

import './Avatar.css';

const Avatar = props => {
    return (
        <div className={`avatar ${props.className}`} style={props.style}>
            <img
                src={props.image}
                alt={props.alt}
                style={{ width: props.width, height: props.width}} 
            />
        </div>
    );
}

// function Avatar(className, image, alt, style, width) {
//     return (
//         <div className={`avatar ${className}`} style={style}>
//             <img
//                 src={image}
//                 alt={alt}
//                 style={{ width: width, height: width}} 
//             />
//         </div>
//     );
// };

export default Avatar;