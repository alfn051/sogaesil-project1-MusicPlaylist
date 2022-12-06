import "./App.css";
import {Route, Routes}  from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import React from "react";
import {useState} from "react";
import musicData from "./data/music-data.json";
import {v4} from 'uuid';
import MusicDetail from "./components/MusicDetail";
import PageNotFound from "./components/PageNotFound";
import Editing from "./components/Editing";


function App() {

  const [musicList, setMusicList] = useState(musicData.musicList)

  const removeMusic = (id) => {
    if(window.confirm('정말로 삭제하시겠습니까?') == true){
      const newMusicList = musicList.filter(music => music.id !== id);
      setMusicList(newMusicList);
    }
  }

  const addMusic = (title, singer, playtime, genre, videoLink, imgLink, lyrics) => {
    const music = {id:v4(), title:title, singer:singer, playtime:playtime, genre:genre, videoLink:videoLink, imgLink:imgLink, lyrics:lyrics};
    const newMusicList = [...musicList, music];
    setMusicList(newMusicList);
  }

  const updateMusic = (id, title, singer, playtime, genre, videoLink, imgShortLink, imgLink, lyrics) =>{
    const newMusicList = musicList.map(
      music => music.id===id? {id, title, singer, playtime, genre, videoLink, imgShortLink, imgLink, lyrics}: music
    );
    setMusicList(newMusicList);
  }

  const [addible, setAddible] = useState(false);
  const [editable, setEditable] = useState(false);
  const [onPageHome, setPageHome] = useState(true);


  return <div className="App">
    <Header setAddible={setAddible} setEditable={setEditable} onPageHome={onPageHome} setPageHome={setPageHome}></Header>

    <Routes>
      <Route path="/" element={<Home musicList={musicList} onRemoveMusic={removeMusic} onAddMusic={addMusic} onUpdateMusic={updateMusic} addible={addible} setAddible={setAddible} setPageHome={setPageHome}/>}></Route>
      <Route path='/music/:id' element={<MusicDetail musicList={musicList} onUpdateMusic={updateMusic} editable={editable} setEditable={setEditable} setPageHome={setPageHome}></MusicDetail>}></Route>
      <Route path='/editing/:id' element={<Editing></Editing>}></Route>
      <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
    </Routes>

    <Footer></Footer>
  </div>;
}

export default App;
