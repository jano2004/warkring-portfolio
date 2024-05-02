import './Desktop_ServiceTiles.css';
import { servicesData } from '../../ServiceData';
import { customServiceData } from '../../ServiceData';
import ShowSmallTile from './Desktop_ShowTiles/Desktop_ShowSmallTile';
import ShowBigTile from './Desktop_ShowTiles/Desktop_ShowBigTile';

function ServiceTiles() {
    return(
        <div className='desktop_tiles_container'>
            <div className='desktop_tiles_content'>
                <div className='desktop_tiles_top'>
                    <div className='desktop_tiles_top_first'>
                        <ShowSmallTile service={ servicesData[2] } />
                    </div>
                    <div className='desktop_tiles_top_second'>
                        <ShowSmallTile service={ customServiceData } />
                    </div>
                </div>
                <div className='desktop_tiles_bottom'>
                    <ShowBigTile />
                </div>
            </div>
        </div>
    )
}

export default ServiceTiles;