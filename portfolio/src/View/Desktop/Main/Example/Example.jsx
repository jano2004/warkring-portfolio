import { GrFormNextLink } from "react-icons/gr";
import { FaRegCirclePlay } from "react-icons/fa6";
import Graphic from './graphic.webp';
import {useState} from "react";

export default function Example({activate}) {
    const [hoverMore, setHoverMore] = useState(false);
    const [hoverVideo, setHoverVideo] = useState(false);

    return (
        <div style={{...style.main}}>
            <div style={{...style.container}}>
                <div style={{...style.left, justifyContent: window.innerWidth <= 1275 ? 'center' : 'end', width: window.innerWidth <= 1275 ? '100%' : '50%'}}>
                    <div style={{...style.leftContainer}}>
                        <div style={{...style.banner, ...(activate && style.bannerSlideIn)}}>
                            <p style={{...style.bannerText}}>Die macht des Codes</p>
                        </div>
                        <h1 style={{...style.header}}>Lasse alle Deine visuellen Träume in Erfüllung gehen.</h1>
                        <p style={{...style.text}}>Die Macht des Codes ermöglicht es Dir, alle freiheiten bei Erstellung deiner Website zu nutzen.</p>
                        <div style={{...style.buttonContainer}}>
                            <button style={{...style.more, ...(hoverMore && style.moreHover), ...(activate && style.moreSlideIn)}} onMouseEnter={() => setHoverMore(true)} onMouseLeave={() => setHoverMore(false)}>
                                <p style={{...style.buttonText, color: hoverMore ? 'white' : 'black'}}>
                                    Erfahre mehr
                                </p>
                                <GrFormNextLink size={25} color={hoverMore ? 'white' : 'black'} style={{transition: 'all 0.3s ease-in-out'}}/>
                            </button>
                            <button style={{...style.video, ...(hoverVideo && style.videoHover), ...(activate && style.videoSlideIn)}} onMouseEnter={() => setHoverVideo(true)} onMouseLeave={() => setHoverVideo(false)}>
                                <FaRegCirclePlay size={15} color={hoverVideo ? 'black' : 'white'} style={{transition: 'all 0.3s ease-in-out'}}/>
                                <p style={{...style.buttonText, color: hoverVideo ? 'black' : 'white'}}>
                                    Video ansehen
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
                {window.innerWidth >= 1275 &&
                    <div style={{...style.right, height: window.innerWidth <= 1400 ? '70%' : '80%'}}>
                    <div style={{...style.rightContainer, ...(activate && style.rightContainerBlurIn)}}>
                            <img style={{
                            ...style.rightImage,
                            width: window.innerWidth <= 1400 ? '90%' : '100%',
                            marginLeft: window.innerWidth <= 1400 ? '30px' : '0'}}
                                 src={Graphic}
                                 alt={'graphic'}/>
                    </div>
                </div>}
            </div>
        </div>
    )
}

const style = {
    main: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100vh',
        background: 'black',
        userSelect: 'none'
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '60%',
        background: ''
    },
    left: {
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
        width: '50%',
        height: '100%',
        background: ''
    },
    leftContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: '75%',
        height: '80%',
        background: ''
    },
    banner: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '25px',
        width: '170px',
        background: 'black',
        borderRadius: '8px',
        border: '1px solid white',
        opacity: '0',
        transform: 'translateY(-300%)',
        transition: 'all 0.5s ease-in-out'
    },
    bannerSlideIn: {
        opacity: '1',
        transform: 'translateY(0)',
    },
    bannerText: {
        color: 'white',
        fontSize: '0.9rem'
    },
    header: {
        fontSize: '3.4rem',
        fontWeight: '800',
        color: 'white',
        margin: '10px 0 10px 0'
    },
    text: {
        fontSize: '1.2rem',
        fontWeight: '400',
        width: '80%',
        color: 'white',
        margin: '0 0 30px 0'
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: '20px',
        background: '',
    },
    more: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5px',
        background: 'white',
        borderRadius: '10px',
        border: '1px solid rgb(37,118,136)',
        height: '50px',
        padding: '0 15px',
        cursor: 'pointer',
        opacity: '0',
        transform: 'translateX(-100%)',
        transition: 'all 0.5s ease-in-out'
    },
    moreHover: {
        background: 'black',
        border: '1px solid white',
        transition: 'all 0.3s ease-in-out'
    },
    moreSlideIn: {
        opacity: '1',
        transform: 'translateX(0)',
    },
    video: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5px',
        background: 'black',
        borderRadius: '10px',
        border: '1px solid white',
        height: '50px',
        padding: '0 15px',
        cursor: 'pointer',
        opacity: '0',
        transform: 'translateX(-100%)',
        transition: 'all 0.5s ease-in-out',
    },
    videoHover: {
        background: 'white',
        border: '1px solid black',
        transition: 'all 0.3s ease-in-out',
    },
    videoSlideIn: {
        opacity: '1',
        transform: 'translateX(0)',
    },
    buttonText: {
        fontSize: '1rem',
        transition: 'all 0.3s ease-in-out'
    },
    right: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        width: '50%',
        height: '100%',
        overflow: 'hidden',
        transition: 'all 0.3s ease-in-out',
        background: ''
    },
    rightContainer: {
        display: 'flex',
        alignItems: 'center',
        width: '75%',
        borderRadius: '10px',
        opacity: '0',
        transition: 'all 0.4s ease-in-out',
        background: ''
    },
    rightContainerBlurIn: {
        opacity: '1',
    },
    rightImage: {
        width: '100%',
        objectFit: 'cover',
        objectPosition: 'top',
        transition: 'all 0.2s ease-in-out'
    }
}