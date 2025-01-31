
import { menuList } from "../../assets/assets"
import './ExploreMenu.css'
const ExploreMenu = ({selectMenu,setSelectMenu}) => {
  const selectMenu1=(name)=>{
    console.log("hi hello");
   setSelectMenu(name);
  }
  return (
    <div className="explore-new">
      <h2>Explore our menus</h2>
      <div className="menu-items">
          {menuList.map((menu, ind) => (
            <div key={ind} className="menu-item">
          <img src={menu.menu_image} alt={`Menu ${ind}`} onClick={()=>selectMenu1(menu.menu_name)}/>
          <p>{menu.menu_name}</p>
            </div>
          ))}
      </div>
     
    </div>
  )
}

export default ExploreMenu;
