import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/MusicForm.module.css';

function MusicEditForm({musicList=[], id='', onUpdateMusic=f=>f, editable=f=>f, setEditable=f=>f}) {

    // , title='', singer='', playtime='', genre='', videoLink='', imgShortLink='', imgLink='', lyrics=''

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

    useEffect(() => {
        setMusic(
            musicList.find((music) => {
                return music.id === id;
            })
        );
    }, [id]);

    const changeMusic = (key, value) => {
        setMusic((current) => {
            let newMusic = {...current};
            newMusic[key] = value;
            return newMusic;
        });
    };

    // const [txtTitle, setTitle] = useState(music.title);
    // const [txtSinger, setSinger] =useState(music.singer);
    // const [txtPlaytime, setPlaytime] =useState(music.playtime);
    // const [txtGenre, setGenre] =useState(music.genre);
    // const [txtVideoLink, setVideoLink] =useState(music.videoLink);
    // const [txtImgShortLink, setImgShortLink] =useState(music.imgShortLink);
    // const [txtImgLink, setImgLink] =useState(music.imgLink);
    // const [txtLyrics, setLyrics] =useState(music.lyrics);

    const navigation = useNavigate();


    const onSubmit = (event)=> {
        event.preventDefault();
        let shortLink='';
        if(music.imgLink){
            shortLink='';
        }else{shortLink=music.imgShortLink};
        onUpdateMusic(id, music.title, music.singer, music.playtime, music.genre, music.videoLink, shortLink, music.imgLink, music.lyrics);
        changeMusic('title', '')
        changeMusic('singer', '')
        changeMusic('playtime', '')
        changeMusic('genre', '')
        changeMusic('videoLink', '')
        changeMusic('imgLink', '')
        changeMusic('lyrics', '')
        navigation(`/editing/${id}`)
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <table className={styles.edit}>
                    <tbody>
                        <tr>
                            <td></td>
                            <td><h3>음악 수정하기</h3></td>
                            <td><button onClick={()=>setEditable(false)} type='submit'><span className="material-symbols-outlined">check_box</span></button>
                                <button onClick={()=>setEditable(false)}><span className="material-symbols-outlined">disabled_by_default</span></button></td>
                        </tr>
                        <tr>
                            <td><input className={styles.input} type='text' value={music.title} placeholder='노래제목' onChange={(event)=> changeMusic('title', event.target.value)}></input></td>
                            <td><input className={styles.input} type='text' value={music.singer} placeholder='가수' onChange={(event)=> changeMusic('singer', event.target.value)}></input></td>
                            <td><input className={styles.input} type='text' value={music.playtime} placeholder='0:00' onChange={(event)=> changeMusic('playtime', event.target.value)}></input></td>
                        </tr>
                        <tr>
                            <td><input className={styles.input} type='text' value={music.genre} placeholder='장르' onChange={(event)=> changeMusic('genre', event.target.value)}></input></td>
                            <td><input className={styles.input} type='text' value={music.videoLink} placeholder='유튜브링크' onChange={(event)=> changeMusic('videoLink', event.target.value)}></input></td>
                            <td><input className={styles.input} type='text' value={music.imgLink} placeholder='앨범아트 이미지 주소' onChange={(event)=> changeMusic('imgLink', event.target.value)}></input></td>
                        </tr>
                        <tr>
                            <td colSpan={3}><textarea className={styles.area} cols='122' rows='10' value={music.lyrics} placeholder='가사' onChange={(event)=> changeMusic('lyrics', event.target.value)}></textarea></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default MusicEditForm;



// const onSubmit = (event)=> {
//     event.preventDefault();
//     onUpdateMusic(id, txtTitle, txtSinger, txtPlaytime, txtGenre, txtVideoLink, txtImgShortLink, txtImgLink, txtLyrics)
//     setTitle('')
//     setSinger('')
//     setPlaytime('')
//     setGenre('')
//     setVideoLink('')
//     setImgLink('')
//     setLyrics('')
//     navigation(`/editing/${id}`)
// }

// return (
//     <div>
//         <form onSubmit={onSubmit}>
//             <table>
//                 <tbody>
//                     <tr>
//                         <td></td>
//                         <td><h3>음악 수정하기</h3></td>
//                         <td><button type='submit'><span className="material-symbols-outlined">check_box</span></button>
//                             <button onClick={()=>setEditable(false)}><span className="material-symbols-outlined">disabled_by_default</span></button></td>
//                     </tr>
//                     <tr>
//                         <td><input type='text' value={txtTitle} placeholder='노래제목' onChange={(event)=> setTitle(event.target.value)}></input></td>
//                         <td><input type='text' value={txtSinger} placeholder='가수' onChange={(event)=> setSinger(event.target.value)}></input></td>
//                         <td><input type='text' value={txtPlaytime} placeholder='0:00' onChange={(event)=> setPlaytime(event.target.value)}></input></td>
//                     </tr>
//                     <tr>
//                         <td><input type='text' value={txtGenre} placeholder='장르' onChange={(event)=> setGenre(event.target.value)}></input></td>
//                         <td><input type='text' value={txtVideoLink} placeholder='유튜브링크' onChange={(event)=> setVideoLink(event.target.value)}></input></td>
//                         <td><input type='text' value={txtImgLink} placeholder='앨범아트 이미지 주소' onChange={(event)=> setImgLink(event.target.value)}></input></td>
//                     </tr>
//                     <tr>
//                         <td colSpan={3}><textarea cols='122' rows='10' value={txtLyrics} placeholder='가사' onChange={(event)=> setLyrics(event.target.value)}></textarea></td>
//                     </tr>
//                 </tbody>
//             </table>
//         </form>
//     </div>
// );
// }