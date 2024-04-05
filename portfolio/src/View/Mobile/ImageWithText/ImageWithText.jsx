import './ImageWithText.css';

function ImageWithText({header, text, img}) {
    const textWithBreaks = text ? text.split('<br>').flatMap((part, index) => [index > 0 && <br key={index} />, part]) : '';

    return (
        <section className='main_imagewt_section'>
            <h1>{header}</h1>
            <p>{textWithBreaks}</p>
            <img src={img}/>
        </section>
    )
}

export default ImageWithText;