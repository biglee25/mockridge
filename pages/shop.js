import styled from "styled-components";
import Navbar from "../components/navbar";

const Padder = styled.div`
    margin-top: 5rem;
    position: absolute;
    top: 300px;
    left: 0;

`

function iframe() {
    return {
        __html: '<iframe src="shop.html" style="position: absolute; top: 300px; width: 100%; height: 100%; border: none"></iframe>'
    }
}


export default function Exercises() {
    return (
        <div>
            <Navbar/>
            <Padder/>
            <div dangerouslySetInnerHTML={iframe()} />
        </div>)
}