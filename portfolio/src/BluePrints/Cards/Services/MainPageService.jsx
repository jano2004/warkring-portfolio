import './MainPageService.css';

function MainPageService(props) {
    return (
        <div className="Main_PageService_Container">
            <div className="PageService_Container">
                <div className="PageService_Header">
                    <h1>HEADER</h1>
                </div>
                <div className="PageService_Features">
                    <p>- Feature 1</p>
                    <p>- Feature 2</p>
                    <p>- Feature 3</p>
                    <p>- Feature 4</p>
                    <p>- Feature 5</p>
                </div>
                <div className="PageService_Price_CTA">
                    <div className="PageService_Price">
                        <p>399,-</p>
                    </div>
                    <div className="PageService_CTA">
                        <button>MEHR ERFAHREN</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPageService;