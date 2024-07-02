import { MdOutlineNavigateNext } from "react-icons/md";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {style} from './style';

export default function Body() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hoverAnalyse, setHoverAnalyse] = useState(false);
    const [hoverProject, setHoverProject] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div style={{...style.main}}>
            <div style={{...style.container}}>
                <div>
                    <p style={{...style.miniHeader}}>
                        Webdesign und Entwicklung für B2B und B2P
                    </p>
                </div>
                <div>
                    <p style={{...style.mainHeader, ...(isLoaded && style.mainHeaderFlyIn)}}>
                        Webseiten für Verkauf <br/>und Informationsverbreitung
                    </p>
                </div>
                <div>
                    <p style={{...style.description, ...(isLoaded && style.descriptionFlyIn)}}>
                        Wir erstellen Webseiten, die
                        <a style={{...style.a}} href={'hrefHanlder'}> deinen Ansprühen entsprechen.</a><br/>
                        Hebe dich ab
                        <a style={{...style.a}} href={'hrefHanlder'}> von deiner Konkurrenz </a>
                        mit individuellem Design und SEO
                    </p>
                </div>
                <div style={{...style.anfrageContainer, ...(isLoaded && style.anfrageContainerFlyIn)}}>
                    <Link to={'/kontakt'} style={{textDecoration: 'none'}}>
                        <div style={{...style.anfrageAnalyseButton, ...(hoverAnalyse && style.hoverAnfrageAnalyseButton)}} onMouseEnter={() => setHoverAnalyse(true)} onMouseLeave={() => setHoverAnalyse(false)}>
                            <p style={{...style.anfrageAnalyseButtonText, color: hoverAnalyse ? 'black' : 'white'}}>Kostenlose Website-Analyse</p>
                        </div>
                    </Link>
                    <Link to={'/kontakt'} style={{textDecoration: 'none'}}>
                        <div style={{...style.anfrageProjektButton}} onMouseEnter={() => setHoverProject(true)} onMouseLeave={() => setHoverProject(false)}>
                            <p style={{...style.anfrageAnalyseButtonText, color: 'black', ...(hoverProject && style.anfrageProjektButtonHover)}}>
                                Neues Projekt anfragen
                            </p>
                            <MdOutlineNavigateNext size={'20px'} color={'black'}/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}