import {style, content} from "./style";
import SlideCard from "./Atoms/SlideCard/SlideCard";
import {useState} from "react";

export default function Speed({activate}) {

    const [hoverONE, setHoverONE] = useState(false)
    const [hoverTWO, setHoverTWO] = useState(false)
    const [hoverTHREE, setHoverTHREE] = useState(false)
    const [hoverFOUR, setHoverFOUR] = useState(false)

    return (
        <div style={{...style.main}}>
            <div style={{transform: !hoverONE ? 'translateX(30%)' : 'translateX(0)', transition: 'all 0.4s ease-in-out'}}>
                <SlideCard content={'LEISTUNG'}
                           background={content.ONE.bg}
                           border={content.ONE} activate={activate}
                           hover={hoverONE}
                           setHover={setHoverONE}/>
            </div>
            <div style={{transform: !hoverTWO ? 'translateX(30%)' : 'translateX(0)', transition: 'all 0.4s ease-in-out'}}>
                <SlideCard content={'SKALIERBARKEIT'}
                           background={content.TWO.bg}
                           border={content.TWO}
                           activate={activate}
                           hover={hoverTWO}
                           setHover={setHoverTWO}/>
            </div>
            <div style={{transform: !hoverTHREE ? 'translateX(30%)' : 'translateX(0)', transition: 'all 0.4s ease-in-out'}}>
                <SlideCard content={'GESCHWINDIGKEIT'}
                           background={content.THREE.bg}
                           border={content.THREE}
                           activate={activate}
                           hover={hoverTHREE}
                           setHover={setHoverTHREE}/>
            </div>
            <div style={{transform: !hoverFOUR ? 'translateX(30%)' : 'translateX(0)', transition: 'all 0.4s ease-in-out'}}>
                <SlideCard content={'EFFIZIENZ'}
                           background={content.FOUR.bg}
                           border={content.FOUR}
                           activate={activate}
                           hover={hoverFOUR}
                           setHover={setHoverFOUR}/>
            </div>
        </div>
    )
}