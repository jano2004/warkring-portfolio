import './MainPageService.css';

function MainPageService(props) {
    return (
        <div className="Main_PageService_Container">
            <div className="PageService_Container">
                <div className="PageService_Header">
                    <h1>HEADER</h1>
                </div>
                <div className="PageService_Features">
                    <p>Short Description</p>
                </div>
                <div className="PageService_CTA_Price_Container">
                    <div className="PageService_Price_Container">
                        <p>399<a>,- €</a></p>
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