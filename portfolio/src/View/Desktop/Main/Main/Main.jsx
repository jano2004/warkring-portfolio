import Header from "../../Header/Header";
import Body from "../Body/Body";
import ShortInfo from "../Infos/ShortInfo";
import Example from "../Example/Example";
import { useState, useEffect, useRef } from "react";
import {style} from "./style";
//import Booking from "../Booking/Booking";

export default function Main() {
    const [activateSmallInfo, setActivateSmallInfo] = useState(false);
    const [activateExample, setActivateExample] = useState(false);
    const [activateBooking, setActivateBooking] = useState(false);
    const shortInfoRef = useRef(null);
    const exampleRef = useRef(null);
    const bookingRef = useRef(null);

    const handleScrollInfo = (isVisible) => {
        console.log('Info: ' + isVisible)
        if (isVisible && !activateSmallInfo) {
            setActivateSmallInfo(true);
        }
    };

    const handleScrollExample = (isVisible) => {
        console.log('Example: ' + isVisible)
        if (isVisible && !activateExample) {
            setActivateExample(true);
        }
    };

    const handleScrollBooking = (isVisible) => {
        console.log('Booking: ' + isVisible)
        if (isVisible && !activateBooking) {
            setActivateBooking(true);
        }
    }

    useEffect(() => {
        const observerInfo = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    handleScrollInfo(entry.isIntersecting);
                });
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.5,
            }
        );

        const observerExample = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    handleScrollExample(entry.isIntersecting);
                });
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.5,
            }
        );

        const observerBooking = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    handleScrollBooking(entry.isIntersecting);
                })
            }
        )

        if (shortInfoRef.current) {
            observerInfo.observe(shortInfoRef.current);
        }

        if (exampleRef.current) {
            observerExample.observe(exampleRef.current);
        }

        if (bookingRef.current) {
            observerBooking.observe(bookingRef.current);
        }

        return () => {
            if (shortInfoRef.current) {
                // eslint-disable-next-line
                observerInfo.unobserve(shortInfoRef.current);
            }
            if (exampleRef.current) {
                // eslint-disable-next-line
                observerExample.unobserve(exampleRef.current);
            }
        };
        // eslint-disable-next-line
    }, [shortInfoRef, exampleRef]);

    return (
        <div style={style.section}>
            <div style={style.scrollView}>
                <div style={{height: '100vh', scrollSnapAlign: 'start', background: 'white'}}>
                    <div style={style.header}>
                        <Header/>
                    </div>
                    <div style={style.body}>
                        <Body/>
                    </div>
                </div>
                <div style={style.shortInfo} id={'short_info'} ref={shortInfoRef}>
                    <ShortInfo activate={activateSmallInfo}/>
                </div>
                <div style={style.example} id={'example'} ref={exampleRef}>
                    <Example activate={activateExample}/>
                </div>
                <div style={style.booking} id={'booking'} ref={bookingRef}>
                    {/*<Booking activate={activateBooking}/>*/}
                </div>
            </div>
        </div>
    );
}
