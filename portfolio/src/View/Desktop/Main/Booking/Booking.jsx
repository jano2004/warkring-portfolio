import * as React from 'react';
import { style, content } from "./style";

import Banner from "./Atoms/Banner/Banner";
import Calender from "./Atoms/Calender/Calender";

export default function Booking() {
    return (
        <div style={{...style.main.container}}>
            <div style={{...style.main.left.main}}>
                <Calender />
                <Banner>
                    {content.banner}
                </Banner>
            </div>
            <div style={{...style.main.right.main}}>

            </div>
        </div>
    )
}