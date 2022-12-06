import React from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/ListItem.module.css'



function MusicItem({id = '', title='no title', singer='no singer', playtime='0:00', genre='no genre', videolink='no link', imgShortLink='', imgLink='', lyrics='no lyrics', onRemove=f=>f}) {

    const [viewable, setViewable] = useState(false);

    const removeClick = () =>{
        onRemove(id);
    }

    return (
        <tbody>
            <tr className={styles.itemtr}>
                <td onClick={()=>viewable? setViewable(false): setViewable(true)}>
                    {imgShortLink
                    ? <img className={styles.img} src={`https://cdnimg.melon.co.kr/cm2/album/images/${imgShortLink}.jpg/melon/resize/500/quality/80/optimize`}></img>
                    : (imgLink? <img className={styles.img} src={`${imgLink.substring(0, imgLink.length - 30)}resize/500/quality/80/optimize`}></img> 
                    : <img className={styles.img} src='https://v2.akbotong.com/files/image/album_cover/920?300'></img>)}
                    </td>
                <td onClick={()=>viewable? setViewable(false): setViewable(true)}>{title}</td><td onClick={()=>viewable? setViewable(false): setViewable(true)}>{singer}</td><td onClick={()=>viewable? setViewable(false): setViewable(true)}>{playtime}</td><td onClick={()=>viewable? setViewable(false): setViewable(true)}>{genre}</td>
                <td><span className={`${styles.cursor} material-icons`} onClick={removeClick}>delete</span>
                <Link className={styles.link} to={`/music/${id}`}><span className="material-icons">play_circle</span></Link></td>
                                
            </tr>
            {viewable? <tr><td colSpan={6}><h4>가사</h4><pre>{lyrics}</pre></td></tr> : null}
        </tbody>
        
                
    );
}

export default MusicItem;


{/* <h3 onClick={()=>viewable? setViewable(false): setViewable(true)}>{title}{singer}</h3>
            {viewable? <div><p>{content}</p><button onClick={()=>editable? setEditable(false): setEditable(true)}>{editable? "취소": "수정"}</button><button onClick={handleClick}>삭제</button>
            {editable? <InputForm id={id} title={title} content={content} onUpdate={onUpdate} onEdit={setEditable}></InputForm> : null}</div> : null} */}