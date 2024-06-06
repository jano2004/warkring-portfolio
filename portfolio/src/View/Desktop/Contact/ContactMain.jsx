import Header from "../Header/Header";
import Group from "./Selection/Group";
import {useEffect, useState} from "react";

export default function ContactMain() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div style={{height: '100vh', background: 'white'}}>
            <Header />
            <div style={style.main}>
                {/* FreeSpace */}
                <div style={style.freespace}>

                </div>

                {/* SelectGroup */}
                <div style={{...style.selectgroup, ...(isLoaded && style.selectgroupLoad)}}>
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
        background: '',
        opacity: 0,
        transition: 'opacity 0.4s ease-out'
    },
    selectgroupLoad: {
        opacity: 1
    },
    freespace: {
        height: '90vh',
        width: '25%',
        background: ''
    }
}
