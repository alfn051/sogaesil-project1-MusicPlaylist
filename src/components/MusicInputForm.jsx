import React, { useState } from 'react';
import styles from '../styles/MusicForm.module.css';

function MusicInputForm({onAddMusic=f=>f, addible=f=>f, setAddible=f=>f}) {

    const[title, singer, playtime, genre, videoLink, imgLink, lyrics]=['','','','','','','']

    const [txtTitle, setTitle] = useState(title);
    const [txtSinger, setSinger] =useState(singer);
    const [txtPlaytime, setPlaytime] =useState(playtime);
    const [txtGenre, setGenre] =useState(genre);
    const [txtVideoLink, setVideoLink] =useState(videoLink);
    const [txtImgLink, setImgLink] =useState(imgLink);
    const [txtLyrics, setLyrics] =useState(lyrics);


    const onSubmit = (event)=> {
        event.preventDefault();
        onAddMusic(txtTitle, txtSinger, txtPlaytime, txtGenre, txtVideoLink, txtImgLink, txtLyrics);
        setTitle('');
        setSinger('');
        setPlaytime('');
        setGenre('');
        setVideoLink('');
        setImgLink('');
        setLyrics('');
        setAddible(false);
    }

    return (
        <div className={styles.add}>
            <form onSubmit={onSubmit}>
                <table className={styles.add_table}>
                    <tbody>
                        <tr>
                            <td></td>
                            <td><h3>음악 추가하기</h3></td>
                            <td><button type='submit'><span className="material-symbols-outlined">check_box</span></button>
                                <button onClick={()=>setAddible(false)}><span className="material-symbols-outlined">disabled_by_default</span></button></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={txtTitle} placeholder='노래제목' onChange={(event)=> setTitle(event.target.value)}></input></td>
                            <td><input type='text' value={txtSinger} placeholder='가수' onChange={(event)=> setSinger(event.target.value)}></input></td>
                            <td><input type='text' value={txtPlaytime} placeholder='0:00' onChange={(event)=> setPlaytime(event.target.value)}></input></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={txtGenre} placeholder='장르' onChange={(event)=> setGenre(event.target.value)}></input></td>
                            <td><input type='text' value={txtVideoLink} placeholder='유튜브링크' onChange={(event)=> setVideoLink(event.target.value)}></input></td>
                            <td><input type='text' value={txtImgLink} placeholder='앨범아트 이미지 주소' onChange={(event)=> setImgLink(event.target.value)}></input></td>
                        </tr>
                        <tr>
                            <td colSpan={3}><textarea cols='102' rows='27' value={txtLyrics} placeholder='가사' onChange={(event)=> setLyrics(event.target.value)}></textarea></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default MusicInputForm;

// title, singer, playtime, genre, videoLink, imgShortLink, lyrics

// const [txtTitle, setTitle] = useState(title);
// const [txtSinger, setSinger] =useState(Singer);
// const [txtPlaytime, setPlaytime] =useState(Playtime);
// const [txtGenre, setGenre] =useState(Genre);
// const [txtVideoLink, setVideoLink] =useState(VideoLink);
// const [txtImgLink, setImgLink] =useState(ImageLink);
// const [txtLyrics, setLyrics] =useState(Lyrics);