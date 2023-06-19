    // eslint-disable-next-line
    import React from "react";
    import "./BottomTabs.css";
    import { Link } from "react-router-dom";
    import { useSelector } from "react-redux";
    import HomeIcon from "@material-ui/icons/Home";
    import SearchIcon from '@material-ui/icons/Search';
    import LocalMallIcon from '@material-ui/icons/LocalMall';
    import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
    import PersonIcon from '@material-ui/icons/Person';
    import DehazeIcon from '@material-ui/icons/Dehaze';
    import Cart from "../components/cart/Cart";
    import Wishlist from "../components/Wishlist/Wishlist";
    const BottomTab = () => {

    //   const { cartItems } = useSelector((state) => state.cart);
    //   const { favouriteItems } = useSelector((state) => state.favourite);
    const { cart } = useSelector((state) => state.cart);
    const { wishlist } = useSelector((state) => state.wishlist);
      return (
        <>
        <div className="bottomOption">
          <Link to="/">
            <HomeIcon  
            style={{
              color:"#000",
              fontSize:"35px",
              margin:"5px",
              opacity:".8"
            }}
            />
          </Link>
          <Link to="/best-selling">
           <SearchIcon 
           style={{
            color:"#000",
            fontSize:"35px",
            margin:"5px"
          }}
           />
          </Link>
          <Link to="/">
            <div style={{
              position:"relative"
            }}>
            <LocalMallIcon 
             style={{
              color:"#000",
              fontSize:"35px",
              margin:"5px",
              opacity:".8"
            }} 
            />
            
             <span style={{
                fontSize:"12px",
              position:"absolute",
              bottom:"70%",
              left:"10%",
              height:"15px",
              width:"15px",
              border:"none",
              background:"#ff4c4c",
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              borderRadius:"50%",
              color:"#fff",
              fontWeight:"100"
            }}>{cart && cart.length}</span>
            </div>
          </Link>
          <Link to="/">
            <div style={{
              position:"relative"
            }}>
            <FavoriteBorderIcon 
            style={{
              color:"#000",
              fontSize:"35px",
              margin:"5px",
              opacity:".8",
            }} 
            />
             <span style={{
                 fontSize:"12px",
              position:"absolute",
              bottom:"70%",
              left:"10%",
              height:"15px",
              width:"15px",
              border:"none",
              background:"#ff4c4c",
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              borderRadius:"50%",
              color:"#fff",
              fontWeight:"100",
            }}> {wishlist && wishlist.length}</span>
            </div>
          </Link>
          <Link to="/">
          <PersonIcon 
           style={{
            color:"#000",
            fontSize:"35px",
            margin:"5px",
            opacity:".8"
          }}
          />
          </Link>
          <Link to="/">
            <DehazeIcon style={{
              color:"#000",
              fontSize:"35px",
              margin:"5px",
              opacity:".8"
            }} />
          </Link>
        </div>
        </>
      );
    };
    
    export default BottomTab;
    