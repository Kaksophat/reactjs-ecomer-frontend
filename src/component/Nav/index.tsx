import React from 'react'
import "./index.css"
interface Navprop {}
const Menubar =[
  {
    link:"#about",
    label: "About",
  },
  {
    link:"#menu",
    label: "Menu",
  },
  {
    link:"#contact",
    label:"Contact",
  }

]
const Nav:React.FC<Navprop>=(props)=> {
    const {}=props
  return (
    <>
       <nav>
          <a href="#" className='logo'>food website</a>
         {/* <ul>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#menu">Menu</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
         </ul>  */}
         <ul>
         {Menubar.map((item,index)=>(
          <li key={index}>
            <a href={item.link}>{item.label}</a>
          </li>
         ))}
         </ul>
       </nav>
    </>
  )
}

export default Nav