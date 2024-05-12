import SelectableTile from "../Atoms/SelectableTile";
export default function RadioSelect({content, selected, setSelected, scrollToNextComponent}) {

    const style = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px'
    }

    const changeSelected = (props) => {
        setSelected(props);
    }

    return (
        <div style={style}>
            {content.map(item => (
                <SelectableTile key={item.id}
                                props={item.props}
                                id={item.id}
                                state={item.state}
                                position={item.position}
                                changeState={changeSelected}
                                scrollToNextComponent={scrollToNextComponent}/>
            ))}
        </div>
    )
}