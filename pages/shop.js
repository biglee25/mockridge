import styled from "styled-components";
import Navbar from "../components/navbar";


function iframe() {
    return {
        __html: '<embed align="center" src="shop.html" style="position: absolute; top: 80px; right: 0; bottom: 0; padding: 0; margin: 0 auto; width: 100%; height: 100%; border: none; overflow-x: hidden; overflow-y: scroll; pointer-events: auto;"></embed>'
    }
}


export default function Shop() {
    return (
        <>
            <Navbar/>
            <div dangerouslySetInnerHTML={iframe()} className="frame" />
        </>

        )
}