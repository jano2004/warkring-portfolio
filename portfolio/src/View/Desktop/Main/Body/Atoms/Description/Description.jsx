import {style} from "./style";

export default function Description({isLoaded}) {
    return (
        <p style={{...style.description, ...(isLoaded && style.flyIn)}}>
            Wir erstellen Webseiten, die
            <a style={{...style.a}} href={'hrefHanlder'}> deinen Ansprühen entsprechen.</a><br/>
            Hebe dich ab
            <a style={{...style.a}} href={'hrefHanlder'}> von deiner Konkurrenz </a>
            mit individuellem Design und SEO
        </p>
    )
}