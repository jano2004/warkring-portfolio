import './MainPageService.css';

function MainPageService(props) {
    const background = { backgroundColor: props.background}

    return (
        <div className="pricing-card">
            <div className="e-card playing">
                <div className="image"></div>

                <div className="wave" style={background}></div>
                <div className="wave" style={background}></div>
                <div className="wave" style={background}></div>

                <div className="pricing-card-text-container">
                    <div className="pricing-card-text-container-header">
                        <h1>HEADER</h1>
                    </div>
                    <div className="pricing-card-text-container-text">
                        <p>Description-Text</p>
                    </div>
                    <div className="pricing-card-text-container-button">
                        <button>MEHR INFOS</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPageService;