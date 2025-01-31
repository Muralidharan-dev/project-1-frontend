import { useState } from 'react';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import Header from '../../components/navBars/Header/Header';
import './Home.css'
const Home=({loginState,setLoginState})=>{
    const [selectMenu,setSelectMenu]=useState("all");
  
    return(
        <>
        <div className='back'>

        </div>
        <div>
            <Header loginState={loginState} setLoginState={setLoginState}/>
        </div>
          <ExploreMenu selectMenu={selectMenu} setSelectMenu={setSelectMenu}/>
          {console.log(selectMenu)}
          <FoodDisplay selectMenu={selectMenu}/>
        </>
    );
}
export default Home;