import Header from "../../Header/Header";
import Body from "../Body/Body";
import ShortInfo from "../Infos/ShortInfo";
import Example from "../Example/Example";
import MainInfo from "../MainInfo/MainInfo";
import { useState, useEffect, useRef } from "react";
import {style} from "./style";
//import Speed from "../Speed/Speed";

export default function Main() {
    const [activateSmallInfo, setActivateSmallInfo] = useState(false);
    const [activateExample, setActivateExample] = useState(false);
    const [activateMainInfo, setActivateMainInfo] = useState(false)
    const shortInfoRef = useRef(null);
    const exampleRef = useRef(null);
    const mainInfoRef = useRef(null);

    const handleScrollInfo = (isVisible) => {
        console.log('Info: %c' + isVisible, isVisible ? 'color: green' : 'color: red')
        if (isVisible && !activateSmallInfo) {
            setActivateSmallInfo(true);
        }
    };

    const handleScrollExample = (isVisible) => {
        console.log('Example: %c' + isVisible, isVisible ? 'color: green' : 'color: red')
        if (isVisible && !activateExample) {
            setActivateExample(true);
        }
    };

    const handleScrollMainInfo = (isVisible) => {
        console.log('MainInfo: %c' + isVisible, isVisible ? 'color: green' : 'color: red')
        if (isVisible && !activateMainInfo) {
            setActivateMainInfo(true);
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

        const observeMainInfo = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    handleScrollMainInfo(entry.isIntersecting);
                })
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.5,
            }
        )

        if (shortInfoRef.current) {
            observerInfo.observe(shortInfoRef.current);
        }

        if (exampleRef.current) {
            observerExample.observe(exampleRef.current);
        }

        if (mainInfoRef.current) {
            observeMainInfo.observe(mainInfoRef.current);
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
                <div style={style.white} id={'short_info'} ref={shortInfoRef}>
                    <ShortInfo activate={activateSmallInfo}/>
                </div>
                <div style={style.black} id={'example'} ref={exampleRef}>
                    <Example activate={activateExample}/>
                </div>
                <div style={style.black} id={'info'} ref={mainInfoRef}>
                    <MainInfo render={activateMainInfo}/>
                </div>
            </div>
        </div>
    );
}
