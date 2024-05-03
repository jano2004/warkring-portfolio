import './MainServiceMobile.css';
export default function Service({ title, text, features }) {
    const scrollTo = () => {
        //scroll logic
    };

    const removeWarningOfA = () => {
        return null;
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
                    Wenn Sie mehr zu diesem Service erfahren wollen, drücken Sie{' '}
                    <a href={removeWarningOfA()} onClick={scrollTo}><u>hier</u></a>!
                </p>
            </div>
        </div>
    );
}