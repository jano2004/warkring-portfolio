import { MdOutlineNavigateNext } from "react-icons/md";

export default function Body() {
    return (
        <div style={{height: '800px', width: '100%', background: 'white'}}>
            <div style={{
                width: '100%',
                height: '700px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                background: 'white'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    gap: '10px',
                    height: '30px',
                    width: 'auto',
                    padding: '0 20px 0 20px',
                    borderRadius: '20px',
                    background: '#F4F5F5'
                }}>
                    <div style={{
                        width: '13px',
                        height: '13px',
                        background: '#9BCF53',
                        borderRadius: '50%'
                    }}/>
                    <p style={{
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
                        fontWeight: '200',
                        margin: '0'
                    }}>
                        Freie Kapazitäten für Juni/2024
                    </p>
                </div>
                <div>
                    <p style={{
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
                        fontWeight: '500',
                        margin: '0',
                        fontSize: '1.5rem'
                    }}>
                        Webdesign und Entwicklung für B2B und B2P
                    </p>
                </div>
                <div>
                    <p style={{
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
                        fontWeight: '400',
                        margin: '0',
                        fontSize: '3.5rem',
                        textAlign: 'center',
                        letterSpacing: '1.5px'
                    }}>
                        Webseiten für Verkauf <br/>und Informationsverbreitung
                    </p>
                </div>
                <div>
                    <p style={{
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
                        fontWeight: '200',
                        margin: '0',
                        fontSize: '1.5rem',
                        textAlign: 'center'
                    }}>
                        Wir erstellen Webseiten, die
                        <p1 style={{fontWeight: '500', textAlign: 'center'}}> deinen Ansprühen entsprechen.</p1>
                        <br/>
                        Hebe dich ab
                        <p1 style={{fontWeight: '500', textAlign: 'center'}}> von deiner Konkurrenz </p1>
                        mit individuellem Design und SEO
                    </p>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '30px'}}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '45px',
                        width: 'auto',
                        padding: '0 22px 0 22px',
                        background: '#9BCF53', borderRadius: '7px'}}>
                        <p style={{color: 'white', fontWeight: '400'}}>Kostenlose Website-Analyse</p>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '10px'}}>
                        <p style={{color: 'black', fontWeight: '400'}}>Neues Projekt anfragen</p>
                        <MdOutlineNavigateNext size={'20px'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}