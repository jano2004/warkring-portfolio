import Header from "../Header/Header";
import Group from "./Selection/Group";

export default function ContactMain() {
    return (
        <div style={{height: '100vh', background: 'white'}}>
            <Header />
            <div style={style.main}>
                {/* Progressbar */}
                <div style={style.progressbar}>

                </div>

                {/* SelectGroup */}
                <div style={style.selectgroup}>
                    <Group />
                </div>

                {/* FreeSpace */}
                <div style={style.freespace}>

                </div>
            </div>
        </div>
    )
}

const style = {
    main: {
      display: 'flex',
      flexDirection: 'row'
    },
    progressbar: {
        display: 'flex',
        justifyContent: 'center',
        height: '90vh',
        width: '25%',
        background: ''
    },
    selectgroup: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        height: '90vh',
        width: '50%',
        background: ''
    },
    freespace: {
        height: '90vh',
        width: '25%',
        background: ''
    }
}
