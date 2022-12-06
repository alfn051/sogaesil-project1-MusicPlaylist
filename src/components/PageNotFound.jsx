import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';

function PageNotFound(props) {

    const location = useLocation();

    return (
        <div>
            <p>{location.pathname}에 대한 페이지를 찾을수 없습니다. </p>
            <Link to='/'><p>Home으로</p></Link>
            {/* <button onClick={()=>navigation.location('/')}>Home</button> */}
        </div>
    );
}

export default PageNotFound;