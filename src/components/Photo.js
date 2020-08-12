import React from 'react';
import {Link} from 'react-router-dom';

const Photo = ({farm, server, id, secret, title}) => {
    return (
       <Link to={`/photo/${id}`}>
           <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`} alt={title}/>
       </Link>
    );
}

export default Photo;