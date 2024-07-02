export default function SelectDropdown({ items, setSelectedIndex, selectedIndex }) {
    const handleChange = (index) => {
        setSelectedIndex(index);
        console.log('ist: ' + index + ', war: ' + selectedIndex);
    }

    return (
        <select
            style={style.select}
            onChange={event =>  handleChange(event.target.value)}
            value={selectedIndex}>
            {items.map((item, index) => (
                <option key={index} value={index}>{item}</option>
            ))}
        </select>
    );
}

const style = {
    select: {
        width: '85%',
        height: '70px',
        padding: '0 0 0 20px',
        fontSize: '17px',
        borderRadius: '10px',
        border: '2px solid #D9D9D9',
        background: 'white',
        cursor: 'pointer',
        appearance: 'none',
        webkitAppearance: 'none'
    },
}