import "./Block.css";

function Block({ header, text, image, alignment }) {
    return (
        <div className="main_block_container">
            <div className="block_container">
                {alignment === "right" ? (
                    <>
                        <div className="block_left">
                            <h1 className="block_head">{header}</h1>
                            <p>{text}</p>
                        </div>
                        <div className="block_right">
                            <img src={image} alt={header.toLowerCase()} />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="block_right">
                            <img src={image} alt={header.toLowerCase()} />
                        </div>
                        <div className="block_left">
                            <h1>{header}</h1>
                            <p>{text}</p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}


export default Block;