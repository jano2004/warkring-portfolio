import { style } from "./style";

export default function Card({ icon, text, header, size, transition, render }) {
    const cardStyle = size
        ? { ...style.main, height: `${size}px`, width: `${size}px`,
            transform: `${!render && transition ? transition.X : ''} ${!render && transition ? transition.Y : ''}`,
            transition: 'transform 0.7s ease-in-out' }
        : { ...style.main };
    return (
        <div style={{...cardStyle, transform: `${!render && transition ? transition.X : ''} ${!render && transition ? transition.Y : ''}`,
            transition: 'transform 0.7s ease-in-out'}}>
            {icon}
        </div>
    );
}