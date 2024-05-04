import './ServiceCardMobile.css';
export default function ServiceCard({props}) {
    return (
        <section className={'services_servicecard_section'}>
            <h1 className={'services_service_header'}>{props.title}</h1>
            <p className={'services_service_text'}>{props.text}</p>
            <ul className={'services_service_list'}>
                {props.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
        </section>
    )
}