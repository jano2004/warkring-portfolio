import './MainPageService.css';

function MainPageService(props) {
    return (
        <div className="Main_PageService_Container">
            <div className="PageService_Container">
                <div className="PageService_Header">
                    <h1>{props.serviceObject.type}</h1>
                </div>
                <div className="PageService_Features">
                    <p>{props.serviceObject.description}</p>
                </div>
                <div className="PageService_CTA_Price_Container">
                    <div className="PageService_Price_Container">
                        <p>{props.serviceObject.price}<a>,- €</a></p>
                    </div>
                    <div className="PageService_CTA_Container">
                        <button>MEHR ERFAHREN</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPageService;