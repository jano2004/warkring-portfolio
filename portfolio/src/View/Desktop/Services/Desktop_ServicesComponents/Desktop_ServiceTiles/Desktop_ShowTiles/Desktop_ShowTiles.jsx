import './Desktop_ShowTiles.css';
import iconPremium from '../../../Services_Images/best.png';
import iconCustom from '../../../Services_Images/hands.png';

function ShowSmallTile({service}) {
    const isCustomService = service.serviceName === 'Custom';

    const icon = isCustomService ? iconCustom : iconPremium;
    return(
        <div className='desktop_small_tile'>
            <div className='desktop_small_tile_header'>
                <h1>Warkring {service.serviceName}</h1>
            </div>
            <div className='desktop_small_tile_text'>
                <p>{service.serviceAdvertisingText}</p>
                <div className='desktop_small_tile_text_button'>
                    <button>Weiter Infos</button>
                </div>
            </div>
            <div className='desktop_small_tile_icon'>
                <img src={icon} alt='Best Icon'/> 
            </div>
        </div>
    )
}

export default ShowSmallTile;