import './Desktop_ShowBigTile.css';
import laptop_image from '../../../Services_Images/macbook.png';

function ShowBigTile() {
    return(
        <div className='desktop_big_tile'>
            <div className='desktop_big_tile_description'>
                <div className='desktop_big_tile_text'>
                    <p>Individuelles Design genau nach Ihrem Wunsch.</p>
                    <div className='desktop_big_tile_text_button'>
                        <button>Weiter Infos</button>
                    </div>
                </div>
            </div>
            <div className='desktop_big_tile_image'>
                <img src={laptop_image} alt='Laptop Image'/> 
            </div>
        </div>
    )
}

export default ShowBigTile;