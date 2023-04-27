import React, {useState} from "react";
import styled from "styled-components";
import BurgerButton from "./BurgerButton";
import { click } from "@testing-library/user-event/dist/click";

const Navbar = ()=>{

    const [clicked, setClicked]=useState(false);

    const handlerClick= ()=> {
        //console.log('funciona');
        setClicked(!clicked)
    }


    return(
        <>
        <NavContainer>
            <h2>Navbar <span>responsive</span></h2>
            <div className={`link ${clicked ? 'active': ''}`}>
                <a href="">home</a>
                <a href="">About</a>
                <a href="">Shop</a>
                <a href="">Contact</a>
                <a href="">Blog</a>
            </div>
            <div className="burger">
                <BurgerButton clicked={clicked} handlerClick={handlerClick}></BurgerButton>
            </div>
            <BgDiv className={`inicial ${clicked ? 'active' : ''} `}></BgDiv>
        </NavContainer>
        
        </>
    );
}

export default Navbar; 

const NavContainer = styled.nav`
h2{
    font-weigth:400;
    color:white;
    span{
        font-weigth:bold;
    }
}

padding: .4rem;
background-color:#333;
display:flex;
align-items:center;
justify-content:space-between;



a{
    color:white;
    text-decoration:none;
    margin-right:1rem;
}

.link{
    position:absolute;
    top:-700px;
    left:-2000px;
    margin-left:auto;
    margin-right:auto;
    text-alignt:center;
    a{
        color:white;
        display:block;
        font-size:2rem;
    }

    @media(min-width: 768px){
        position:initial;
        margin:0;
        a{
            font-size:1rem;
            color:white;
            display:inline;
        }
    }
}

.link.active{
    width:100%;
    display:block;
    position:absolute;
    top:30%;
    margin-left:auto;
    margin-right:auto;
    left:0;
    right:0;
    text-align:center;
    a{
        color:white;
        margin-top:1rem;
    }
}

.burger{
    @media(min-width: 768px){
        display:none;
    }
}

`

const BgDiv = styled.div`
    position:absolute;
    background-color:#222;
    width:100%;
    height:100%;
    top:-700px;
    left:-100px;
    z-index:-1;
    transition:all .6s ease;
    &.active{
        border-radius:0 0 80% 0;
        top:0;
        left:0;
        width:100%;
        height:100%;
        
    }

`

