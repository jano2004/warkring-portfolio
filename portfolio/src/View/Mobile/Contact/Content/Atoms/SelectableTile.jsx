import React, { useEffect } from 'react';
import useDarkMode from "../../../../../Services/ThemeService/ThemeService";
import {colors} from "../../../../../Services/ThemeService/Colors";

export default function SelectableTile({props, id, state, changeState, scrollToNextComponent, position}) {

    const [isDarkMode] = useDarkMode();

    useEffect(() => {
        if (state) {
            handleScroll();
        }
        // eslint-disable-next-line
    }, [state]);

    const handleSelect = () => {
        if (!state) {
            changeState(id);
        } else {
            changeState('');
        }
    }

    const handleScroll = () => {
        switch (position) {
            case 'first':
                scrollToNextComponent('second');
                break;
            case 'second':
                scrollToNextComponent('third');
                break;
            case 'third':
                console.log('test')
                scrollToNextComponent('fourth');
                break;
            default:
                break;
        }
    }

    const styleUnselected = {
        display: 'flex', justifyContent: 'center', alignItems: 'flex-start',
        background: colors.selectableTileUnselectedColor(isDarkMode),
        width: '160px', height: '160px',
        borderRadius: '7px',
        transition: 'background 0.15s, color 0.1s'
    }

    const styleSelected = {
        display: 'flex', justifyContent: 'center', alignItems: 'flex-start',
        background: colors.selectableTileSelectedColor(isDarkMode),
        width: '160px', height: '160px',
        borderRadius: '7px',
        transition: 'background 0.15s, color 0.1s'
    }

    const styleHeaderUnselected = {
        fontSize: '1rem', fontWeight: '200', textAlign: 'center', width: '90%',
        color: colors.mainTextColor(isDarkMode), transition: 'color o.1s'
    }

    const styleHeaderSelected = {
        fontSize: '1rem', fontWeight: '200', textAlign: 'center', width: '90%',
        color: colors.selectableTileTextColor(isDarkMode), transition: 'color o.1s'
    }

    return (
        <div onClick={handleSelect} style={state ? styleSelected : styleUnselected}>
            <h1 style={state ? styleHeaderSelected : styleHeaderUnselected}>{props}</h1>
        </div>
    );
}