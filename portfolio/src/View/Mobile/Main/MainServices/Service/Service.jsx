import './MainServiceMobile.css';
import {Link} from "react-router-dom";
export default function Service({ title, text, features }) {
    const removeWarningOfA = () => {
        return null;
    }

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className={'main_service_container'}>
            <div className={'main_service_text_header_list'}>
                <h1 className={'main_service_header'}>{title}</h1>
                <p className={'main_service_text'}>{text}</p>
                <ul className={'main_service_list'}>
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </div>
            <div className={'main_service_cta'}>
                <p>
                    <Link to={'/services'} className={'custom_link'} onClick={scrollToTop}><a href={removeWarningOfA()}>
                        Wenn Sie mehr zu diesem Service erfahren wollen, drücken Sie{' '}
                        <u>hier</u></a></Link>!
                </p>
            </div>
        </div>
    );
}