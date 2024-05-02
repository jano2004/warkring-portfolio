import './MobileCard.css';
export default function Card({header, text}) {
    return (
        <div className={'card_main_container'} >
            <div className={'card_main_content'}>
                <h1>{header}</h1>
                <p>{text}</p>
            </div>
        </div>
    )
}