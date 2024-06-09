import Header from "../Header/Header";
import Body from "./Body/Body";
import ShortInfo from "./Infos/ShortInfo";
import Example from "./Example/Example";
import { useState, useEffect, useRef } from "react";

export default function Main() {
    const [activate, setActivate] = useState(false);
    const shortInfoRef = useRef(null);

    const handleScroll = (isVisible) => {
        setActivate(isVisible);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    handleScroll(entry.isIntersecting);
                });
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.5,
            }
        );

        if (shortInfoRef.current) {
            observer.observe(shortInfoRef.current);
        }

        return () => {
            if (shortInfoRef.current) {
                // eslint-disable-next-line
                observer.unobserve(shortInfoRef.current);
            }
        };
    }, [shortInfoRef]);

    const style = {
        section: {
            width: '100%',
            overflowX: 'hidden',
        },
        header: {
            width: '100%',
        },
        body: {
            width: '100%',
            height: '85vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'white',
        },
        scrollView: {
            width: '100%',
            height: '100vh',
            overflowY: 'scroll',
            scrollSnapType: 'y mandatory',
            scrollBehavior: 'smooth'
        },
        shortInfo: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            background: 'white',
            scrollSnapAlign: 'center'
        },
        example: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            scrollSnapAlign: 'center',
            background: 'black'
        }
    };

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
                    <ShortInfo activate={activate}/>
                </div>
                <div style={style.example}>
                    <Example/>
                </div>
            </div>
        </div>
    );
}
