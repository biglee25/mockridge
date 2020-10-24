import styled from "styled-components";
import Navbar from "../components/navbar";



function iframe() {
    return {
        __html: '<embed align="center" src="shop.html" style="position: absolute; top: 100px; left: 0 right: 0;  margin: 0 auto; padding: 0; width: 100%; border: none; overflow-x: hidden;></embed>'
    }
}


export default function Shop() {
    return (
        <>
        <Navbar/>
            <div dangerouslySetInnerHTML={iframe()}/>
        </>

        )
}