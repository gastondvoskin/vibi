"use client"

import React from "react"
import NavButton from "./commons/NavButton"
export default function NavBar (){
    return(
        <>
        <nav>
            <NavButton name="home" route="/home"/>
            <NavButton name="compra" route="/compra"/>
            <NavButton name="vende" route="/vende"/>
            <NavButton name="financia" route="/financia"/>
            <NavButton name="servicios" route="/servicios"/>
        </nav>
        </>
    )
}
