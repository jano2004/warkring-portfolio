import SelectableTile from "../Atoms/SelectableTile";
export default function RadioSelect({content, setSelected }) {
    const style = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '15px'
    };

    const changeSelected = (props) => {
        setSelected(props);
    };

    return (
        <div style={style}>
            {content.map((item, index) => (
                <SelectableTile key={index}
                                props={item.props}
                                id={item.id}
                                state={item.state}
                                color={item.color}
                                changeState={changeSelected}/>
            ))}
        </div>
    );
}