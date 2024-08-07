import { Link } from 'react-router-dom';

export default function CallToButton({children,style, target}) {
    if (style) {
        return (
            <div style={{display: 'flex', justifyContent: 'center',}}>
                <Link to={target} style={style}>{ children }</Link>
            </div>
        )
    }
}