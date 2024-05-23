import React, { useEffect } from 'react';
import useDarkMode from "../../../../../Services/ThemeService/ThemeService";
import {colors} from "../../../../../Services/ThemeService/Colors";

export default function SelectableTile({props, id, tileKey, state, changeState, scrollToNextComponent, position}) {
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
    };

    const handleScroll = () => {
        switch (position) {
            case 'first':
                scrollToNextComponent('second');
                break;
            case 'second':
                scrollToNextComponent('third');
                break;
            case 'third':
                scrollToNextComponent('fourth');
                break;
            default:
                break;
        }
    };

    const commonStyles = {
        display: 'flex', justifyContent: 'center', alignItems: 'flex-start',
        width: '160px', height: '160px',
        borderRadius: '20px',
        transition: 'background 0.15s, color 0.1s',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)'
    };

    const styleUnselected = {
        ...commonStyles,
        background: colors.coloredSelectableTile(position),
    };

    const styleSelected = {
        ...commonStyles,
        background: colors.selectableTileUnselectedColor(isDarkMode),
    };

    const textCommonStyles = {
        fontSize: '1rem', fontWeight: '400', textAlign: 'center', width: '90%',
        transition: 'color o.1s'
    };

    const styleHeaderUnselected = {
        ...textCommonStyles,
        color: colors.selectableTileUnselectedColor(false)
    };

    const styleHeaderSelected = {
        ...textCommonStyles,
        color: colors.selectableTileUnselectedColor(true)
    };

    return (
        <div onClick={handleSelect} style={state ? styleSelected : styleUnselected}>
            <h1 style={state ? styleHeaderSelected : styleHeaderUnselected}>{props}</h1>
        </div>
    );
}
