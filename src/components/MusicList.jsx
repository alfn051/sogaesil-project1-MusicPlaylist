import React from 'react';
import MusicItem from './MusicItem';
import styles from '../styles/MusicList.module.css';

function MusicList({musicList=[], onRemoveMusic=f=>f, onAddMusic=f=>f, onUpdateMusic=f=>f}) {
    return (
        <div className={styles.border}>
            <table className={styles.table}>
                <thead>
                    <tr><th></th><th>제목</th><th>가수</th><th>재생시간</th><th>장르</th><th>삭제/더보기</th></tr>
                </thead>
                {musicList.map(
                music => <MusicItem key={music.id} {...music} onRemove={onRemoveMusic} onUpdate={onUpdateMusic}></MusicItem>
                )}
            </table>
            
        </div>
    );
}

export default MusicList;