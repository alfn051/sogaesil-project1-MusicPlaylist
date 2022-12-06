import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import MusicEditForm from './MusicEditForm';
import styles from '../styles/MusicDetail.module.css';

function MusicDetail({musicList = [], onUpdateMusic=f=>f, editable=f=>f, setEditable=f=>f, setPageHome=f=>f}) {
    const musicId = useParams();
    const [music, setMusic] = useState({
        id: "",
        title: "", 
        singer: "", 
        playtime: "", 
        genre: "", 
        videoLink: "", 
        imgShortLink: "", 
        imgLink: "", 
        lyrics: ""
    });

    const [musics, setMusics] = useState(musicList);

    useEffect(() => {
        setMusic(
            musics.find((music) => {
                return music.id === musicId.id;
            })
        );
        setPageHome(false);
    }, [musicId])

    

    return (
        <div>
            <div className={styles.border}>
                {editable? 
                    <MusicEditForm musicList={musicList} id={musicId.id} title={music.title} singer={music.singer} playtime={music.playtime} genre={music.genre} videoLink={music.videoLink} imgShortLink={music.imgShortLink} imgLink={music.imgLink} lyrics={music.lyrics} onUpdateMusic={onUpdateMusic} editable={editable} setEditable={setEditable}></MusicEditForm>
                    :
                        <table className={styles.table}><tbody><tr><td><br /><br /></td></tr></tbody>
                            <tbody className={styles.tbody_title}>
                                <tr>
                                    <td className={styles.td_img} rowSpan={6}>
                                    {music.imgShortLink
                                    ? <img src={`https://cdnimg.melon.co.kr/cm2/album/images/${music.imgShortLink}.jpg/melon/resize/500/quality/80/optimize`}></img>
                                    : (music.imgLink? <img src={`${music.imgLink.substring(0, music.imgLink.length - 30)}resize/500/quality/80/optimize`}></img> 
                                    : <img src='https://v2.akbotong.com/files/image/album_cover/920?300'></img>)}
                                    </td>
                                </tr>
                                <tr><td className={styles.text} colSpan={2}><h1>{music.title}</h1></td></tr>
                                <tr><td className={styles.text} colSpan={2}><h3>{music.singer}</h3></td></tr>
                                <tr><td className={styles.small_text}>재생시간</td><td className={styles.text}>{music.playtime}</td></tr>
                                <tr className={styles.last_tr}><td className={styles.small_text}>장르</td><td className={styles.text}>{music.genre}</td></tr>
                            </tbody>
                            {music.videoLink?
                            <tbody>
                                <tr><td colSpan={3}><br /><br />
                                    <iframe width="800" height="450" src={`https://www.youtube.com/embed/${music.videoLink.substring(32, )}?autoplay=1&mute=0`} title="YouTube video player" frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </td></tr>
                                
                            </tbody> : null}
                            <tbody>
                                <tr><td colSpan={3}><h4>가사</h4><pre>{music.lyrics}</pre></td></tr>
                            </tbody>
                        </table>
}
            </div>
        </div>
    );
}

export default MusicDetail;

 {/* <tr className='musicItem' onClick={()=>viewable? setViewable(false): setViewable(true)}>
                 <td>
                    {imgShortLink
                     ? <img src={`https://cdnimg.melon.co.kr/cm2/album/images/${imgShortLink}.jpg/melon/resize/120/quality/80/optimize`}></img>
                     : (imgLink? <img src={imgLink}></img> : <img src='https://cdnimg.melon.co.kr/resource/image/web/default/noArtist_300_160727.jpg/melon/resize/120'></img>)}
                     </td>
                 <td>{title}</td><td>{singer}</td><td>{playtime}</td><td>{genre}</td>
                 <td><span className="material-icons" onClick={removeClick}>delete</span>
                 <Link to={`/music/${title}`}><span className="material-icons">library_music</span></Link></td>
                                
             </tr>
             {viewable? <tr><td colSpan={6}><h4>가사</h4><pre>{lyrics}</pre></td></tr> : null} */}