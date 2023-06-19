import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import Carousel from "react-material-ui-carousel";
const Hero = () => {
  return (
    <Carousel>
    <div
      className={`relative min-h-[70vh] 800px:min-h-[100vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/originals/60/b3/f7/60b3f7f1dbfb3e0c761d1868178c4a4d.png)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%] `}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
         LET'S <br /> DO IT.
        </h1>
        {/* <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
          assumenda? Quisquam itaque <br /> exercitationem labore vel, dolore
          quidem asperiores, laudantium temporibus soluta optio consequatur{" "}
          <br /> aliquam deserunt officia. Dolorum saepe nulla provident.
        </p> */}
        <p className="max-w-md font-normal text-gray-600 text-base">
              Create your unique and exclusive shirt with our brand-new 3D customization tool. <strong>Unleash your imagination</strong>{" "} and define your own style.
              </p>

        <Link to="https://wedesignetshirts.netlify.app/" className="inline-block">
            <div className={`${styles.button} mt-5 `}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Design Now
                 </span>
            </div>
        </Link>
      </div>
    </div>




    <div
      className={`relative min-h-[70vh] 800px:min-h-[100vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/originals/65/04/9f/65049ff31d223b5a9a758a943eec2ccc.png)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#000000] font-[600] capitalize`}
        >
         LET'S <br /> DO IT.
        </h1>
        {/* <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
          assumenda? Quisquam itaque <br /> exercitationem labore vel, dolore
          quidem asperiores, laudantium temporibus soluta optio consequatur{" "}
          <br /> aliquam deserunt officia. Dolorum saepe nulla provident.
        </p> */}
        <p className="max-w-md font-normal text-black text-base">
              Create your unique and exclusive shirt with our brand-new 3D customization tool. <strong>Unleash your imagination</strong>{" "} and define your own style.
              </p>

        <Link to="https://wedesignetshirts.netlify.app/s" className="inline-block">
            <div className={`${styles.button} mt-5  `}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Design Now
                 </span>
            </div>
        </Link>
      </div>
    </div>





    <div
      className={`relative min-h-[70vh] 800px:min-h-[100vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/originals/90/e1/9d/90e19d438947ffe6677f5fea0dfe24c9.png)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#000000] font-[600] capitalize`}
        >
         LET'S <br /> DO IT.
        </h1>
        {/* <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
          assumenda? Quisquam itaque <br /> exercitationem labore vel, dolore
          quidem asperiores, laudantium temporibus soluta optio consequatur{" "}
          <br /> aliquam deserunt officia. Dolorum saepe nulla provident.
        </p> */}
        <p className="max-w-md font-normal text-black text-base">
              Create your unique and exclusive shirt with our brand-new 3D customization tool. <strong>Unleash your imagination</strong>{" "} and define your own style.
              </p>

        <Link to="https://wedesignetshirts.netlify.app/" className="inline-block">
            <div className={`${styles.button} mt-5  `}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Design Now
                 </span>
            </div>
        </Link>
      </div>
    </div>







    </Carousel>
  );
};

export default Hero;



// import React from "react";
// import { Link } from "react-router-dom";
// import styles from "../../../styles/styles";
// import Carousel from "react-material-ui-carousel";

// const Hero = () => {
//   return (
//   <div className="banner">
//   <Carousel>
//     <img src={"https://img.freepik.com/premium-vector/black-wide-technology-background_79145-249.jpg"} className="bgImg rounded-b-3xl "/>
//     <img src={"https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/05/23130043/Fashion-Designing-Courses.jpg"} className="bgImg rounded-b-3xl"/>
//   </Carousel>
//   <div>
//     <h1>
//       L
//     </h1>
//     </div>
// {/* <div className="home__content justify-center text-center">
//   <div style={{
//     display:"flex",
//     alignItems:"center",
//   }}>
//   {/* <h2 style={{
//     fontFamily: "Segoe Script",
//     fontSize: "3em",
//     fontWeight:"500"
//   }}>Buy 2 Get</h2> */}
//   {/* <span style={{
//     padding:"10px",
//     backgroundColor:"#fff",
//     margin:"0px 10px",
//     textAlign:"center",
//     width:"150px",
//     height:"40px",
//     color: "#26c",
//     fontFamily: "Segoe Script",
//     fontSize: "2.4em",
//     display:"flex",
//     justifyContent:"center",
//     lineHeight:".7",
//     alignItems:"center"
//   }}>1 Free</span> 
//   </div>
//   <div>
//     <h2 style={{
//       fontSize:"4.5em",
//       fontFamily:"Poppins,sans-serif",
//       color:"#fff",
//     }}>Fashionable</h2>
//   </div>
//   <div>
//     <h2 style={{
//       fontSize:"4.5em",
//       fontWeight:"400",
//       fontFamily:"Poppins,sans-serif",
//       color:"#fff",
//       lineHeight:".7"
//     }}>Collection</h2>
//   </div>
//   <div>
//     <h2
//     style={{
//       fontWeight:"400",
//       fontFamily:"Poppins,sans-serif",
//       color:"#fff",
//       fontSize:"1em",
//       paddingTop:"10px"
//     }}
//     >
//     Get Free Shipping on all orders over 499INR
//     </h2>
//   </div>
//   <div>
//     <a href="#container">
//     <button type="submit" style={{
//       width:"135px",
//       height:"50px",
//       border:"none",
//       background:"#3BB77E",
//       margin:"10px 0",
//       fontSize:"1.2vmax",
//       color:"#fff",
//       cursor:"pointer"
//     }}
//     className="Home__button"
//     >SHOP NOW</button>
//     </a>
//   </div>
//   </div> */}
// </div> 

//   );
// };

// export default Hero;
