import React, {useEffect} from 'react';
import MusicInputForm from './MusicInputForm';
import MusicList from './MusicList';

function Home({musicList=[], onRemoveMusic=f=>f, onAddMusic=f=>f, onUpdateMusic=f=>f, addible=false, setAddible=f=>f, setPageHome=f=>f}) {

    useEffect(() => {
        setPageHome(true);
    }, [])

    return (
        <div>
            {addible? <MusicInputForm onAddMusic={onAddMusic} addible={addible} setAddible={setAddible}></MusicInputForm> : null} 
            <MusicList musicList={musicList} onRemoveMusic={onRemoveMusic} onAddMusic={onAddMusic} onUpdateMusic={onUpdateMusic} ></MusicList>
            
        </div>
    );
}

export default Home;