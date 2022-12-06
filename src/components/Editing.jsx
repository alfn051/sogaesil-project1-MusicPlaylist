import React, {useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Editing(props) {
    const musicId = useParams();
    const navigation = useNavigate();

    useEffect(() => {
        navigation(`/music/${musicId.id}`)
    }, [])

    
    return (
        <div>
            <h2>수정중입니다.</h2>
        </div>
    );
}

export default Editing;