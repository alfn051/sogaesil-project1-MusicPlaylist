import React from "react";
import {Link} from 'react-router-dom';
import styles from '../styles/Header.module.css';

function Header({setAddible=f=>f, onPageHome='', setPageHome=f=>f, setEditable=f=>f}) {
  return (
    <div>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td>
              <Link className={styles.link} onClick={()=>{setAddible(false); setEditable(false)}} to='/'><span className="material-symbols-outlined">Home</span></Link>
            </td>
            <td>
              <h2><span className= "material-icons-small">fast_rewind</span>Music PlayList<span className="material-icons-small">fast_forward</span></h2>
            </td>
            <td>
              {onPageHome
                ? <span onClick={()=>setAddible(true)} className={`${styles.cursor} material-symbols-outlined`}>library_add</span> 
                : <span onClick={()=>setEditable(true)} className={`${styles.cursor} material-symbols-outlined`}>edit</span>}
            </td>
          </tr>
        </tbody>
      </table>  
    </div>
  );
}

export default Header;
