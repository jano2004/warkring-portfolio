import './CardslideMain.css';
import Card from './Card/Card';

import { cardContent } from "./Card/CardContent";

export default function Cardslide() {
    return (
        <div className={'main_cardslide_container'}>
            {cardContent.map(item => (
                <Card
                    key={item.text}
                    header={item.header}
                    text={item.text}/>
            ))}
        </div>
    )
}