import { GrFormNextLink } from "react-icons/gr";
import { FaRegCirclePlay } from "react-icons/fa6";
import Graphic from './x_graphic.webp';
import {useState} from "react";
import {style} from "./style";

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