import React, {useState} from 'react';
import { MdOutlineQuestionMark } from 'react-icons/md';
import { IoArrowBackOutline } from "react-icons/io5";
import {colors} from "../../../../../../Services/ThemeService/Colors";
import { cssVariables } from '../../../../../../Services/abstand';

export default function SelectableTile({props, id, state, changeState }) {

    const [flip, setFlip] = useState(false)

    const handleFlip = (event) => {
        event.stopPropagation();
        setFlip(!flip);
    };

    const commonStyles = {
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center',
        width: '155px', height: '155px',
        borderRadius: '20px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        transition: 'background 0.2s, color 0.2s',
    };

    const handleChangeOfState = () => {
        changeState(state ? null : id);
    }

    const styleUnselected = {
        ...commonStyles,
        background: colors.selectableTileUnselectedColor(false),
    };

    const styleSelected = {
        ...commonStyles,
        background: colors.selectableTileUnselectedColor(true),
    };

    const textCommonStyles = {
        fontSize: cssVariables['--font_body_text'],
        fontWeight: 'normal', 
        textAlign: 'center', 
        width: '90%',
        transition: 'color 0.2s'
    };

    const styleHeaderUnselected = {
        ...textCommonStyles,
        color: colors.mainTextColor,
    };

    const styleHeaderSelected = {
        ...textCommonStyles,
        color: colors.cardBorderColor,
    };

    return (
        !flip ?
        <UnflippedTile handleChangeOfState={handleChangeOfState} styleSelected={styleSelected} styleUnselected={styleUnselected} state={state} styleHeaderSelected={styleHeaderSelected} styleHeaderUnselected={styleHeaderUnselected} props={props} handleFlip={handleFlip}/>
            : <FlippedTile handleChangeOfState={handleChangeOfState} styleSelected={styleSelected} styleUnselected={styleUnselected} state={state} styleHeaderSelected={styleHeaderSelected} styleHeaderUnselected={styleHeaderUnselected} props={props} handleFlip={handleFlip}/>
    );
}

function UnflippedTile({handleChangeOfState, styleSelected, styleUnselected, state, styleHeaderSelected, styleHeaderUnselected, props, handleFlip}) {
    return (
        <div onClick={handleChangeOfState} style={state ? styleSelected : styleUnselected}>
            <h1 style={state ? styleHeaderSelected : styleHeaderUnselected}>{props}</h1>
            <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '100%', height: '20px'}}>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '15px', width: '15px', margin: '0 10px 12px 0', borderRadius: '50%', background: 'transparent', border: '1px solid #C4C4C4'}} onClick={handleFlip}>
                    <MdOutlineQuestionMark color={'#C4C4C4'}/>
                </div>
            </div>
        </div>
    )
}

function FlippedTile({handleChangeOfState, styleSelected, styleUnselected, state, styleHeaderSelected, styleHeaderUnselected, props, handleFlip}) {
    return (
        <div onClick={handleChangeOfState} style={state ? styleSelected : styleUnselected}>
            <h1 style={state ? styleHeaderSelected : styleHeaderUnselected}>Mehr Infos.</h1>
            <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '100%', height: '20px'}}>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '15px', width: '15px', margin: '0 10px 12px 0', borderRadius: '50%', background: 'transparent', border: '1px solid #C4C4C4', transform: 'rotate(180deg)', zIndex: '99'}} onClick={handleFlip}>
                    <IoArrowBackOutline color={'#C4C4C4'}/>
                </div>
            </div>
        </div>
    )
}