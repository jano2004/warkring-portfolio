import { GrFormNextLink } from "react-icons/gr";
import { FaRegCirclePlay } from "react-icons/fa6";
import Graphic from './x_graphic.webp';
import {useState} from "react";
import {style, content} from "./style";

export default function Example({activate}) {
    const [hoverMore, setHoverMore] = useState(false);
    const [hoverVideo, setHoverVideo] = useState(false);

    return (
        <div style={{...style.main}}>
            <div style={{...style.container.main}}>
                <div style={{...style.container.left.main,
                    justifyContent: window.innerWidth <= 1275 ? 'center' : 'end',
                    width: window.innerWidth <= 1275 ? '100%' : '50%'}}>
                    <div style={{...style.container.left.container}}>
                        <div style={{...style.container.left.banner.main,
                            ...(activate && style.container.left.banner.slideIn)}}>
                            <p style={{...style.container.left.banner.text}}>
                                {content.banner}
                            </p>
                        </div>
                        <h1 style={{...style.container.left.header}}>
                            {content.header}
                        </h1>
                        <p style={{...style.container.left.text}}>
                            {content.info}
                        </p>
                        <div style={{...style.container.left.button.container}}>
                            <button style={{...style.container.left.button.more.main, ...(hoverMore && style.container.left.button.more.hover), ...(activate && style.container.left.button.slideIn)}} onMouseEnter={() => setHoverMore(true)} onMouseLeave={() => setHoverMore(false)}>
                                <p style={{...style.container.left.button.text, color: hoverMore ? 'white' : 'black'}}>
                                    {content.buttons.more}
                                </p>
                                <GrFormNextLink size={25} color={hoverMore ? 'white' : 'black'} style={{transition: 'all 0.3s ease-in-out'}}/>
                            </button>
                            <button style={{...style.container.left.button.video.main, ...(hoverVideo && style.container.left.button.video.hover), ...(activate && style.container.left.button.slideIn)}} onMouseEnter={() => setHoverVideo(true)} onMouseLeave={() => setHoverVideo(false)}>
                                <FaRegCirclePlay size={15} color={hoverVideo ? 'black' : 'white'} style={{transition: 'all 0.3s ease-in-out'}}/>
                                <p style={{...style.container.left.button.text, color: hoverVideo ? 'black' : 'white'}}>
                                    {content.buttons.video}
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
                {window.innerWidth >= 1275 &&
                    <div style={{...style.container.right.main, height: window.innerWidth <= 1400 ? '70%' : '80%'}}>
                        <div style={{...style.container.right.container.main, ...(activate && style.container.right.container.blurIn)}}>
                            <img style={{
                                ...style.container.right.image,
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