import './Catalog.css';

function Catalog({handleHomeClick, handleMoreClick, handelContactClick}) {
    return (
        <section className='main_catalog_section'>
            <button onClick={handleHomeClick}>Home</button>
            <button onClick={handleMoreClick}>Services</button>
            <button onClick={handelContactClick}>Kontakt</button>
            <button>Features</button>
        </section>
    )
}

export default Catalog;