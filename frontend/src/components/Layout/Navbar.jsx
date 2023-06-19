// import React from 'react'
// import { Link } from 'react-router-dom'
// import { navItems } from '../../static/data'
// import styles from '../../styles/styles'

// const Navbar = ({active}) => {
//   return (
//     <div className={`block 800px:${styles.noramlFlex} styleNavHead`}>
//          {
//             navItems && navItems.map((i,index) => (
//                 <div className="flex">
//                     <Link to={i.url}
//                     className={`${active === index + 1 ? "text-[#17dd1f]" : "text-black 800px:text-[#fff]"} pb-[30px] 800px:pb-0 font-[200] px-6 cursor-pointer}`}
//                     >
//                     {i.title}
//                     </Link>
//                 </div>
//             ))
//          }
//     </div>
//   )
// }

// export default Navbar


import React from 'react'
import { Link } from 'react-router-dom'
import { navItems } from '../../static/data'
import styles from '../../styles/styles'

const Navbar = ({active}) => {
  return (
    <div className={`block 800px:${styles.noramlFlex} styleNavHead`}>
      <Link to="/">
      <img src="./wdlogo.png" alt="WeDeisgne" className="bg-no-repeat w-12 h-10"/>
         </Link>
         {
            navItems && navItems.map((i,index) => (
                <div className="flex">
                    <Link to={i.url}
                    className={`${active === index + 1 ? "text-[#000000]" : "text-[#000000]"} pb-[30px] 800px:pb-0 font-[200] px-5 cursor-pointer o-underline hover:underline }`}
                    >
                    {i.title}
                    </Link>
                </div>
            ))
         }
    </div>
  )
}

export default Navbar