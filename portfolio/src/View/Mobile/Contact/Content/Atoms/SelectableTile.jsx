import React, { useEffect } from 'react';

export default function SelectableTile({props, id, state, changeState, scrollToNextComponent, position}) {

    // useEffect Hook, der nach jedem Zustandsupdate ausgeführt wird
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
        background: '#F8F8F8',
        width: '160px', height: '160px',
        border: '1px solid #F8F8F8', borderRadius: '7px',
        transition: 'background 0.15s, color 0.1s'
    }

    const styleSelected = {
        display: 'flex', justifyContent: 'center', alignItems: 'flex-start',
        background: '#171717',
        width: '160px', height: '160px',
        border: '1px solid #F8F8F8', borderRadius: '7px',
        transition: 'background 0.15s, color 0.1s'
    }

    const styleHeaderUnselected = {
        fontSize: '1rem', fontWeight: '200', textAlign: 'center', width: '90%',
        color: '#171717', transition: 'color o.1s'
    }

    const styleHeaderSelected = {
        fontSize: '1rem', fontWeight: '200', textAlign: 'center', width: '90%',
        color: '#F8F8F8', transition: 'color o.1s'
    }

    return (
        <div className={'selectable_tile'} onClick={handleSelect} style={state ? styleSelected : styleUnselected}>
            <h1 style={state ? styleHeaderSelected : styleHeaderUnselected}>{props}</h1>
        </div>
    );
}