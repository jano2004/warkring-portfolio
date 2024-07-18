import React from 'react';
import Card from "../Atoms/Card/Card";
import { content } from "../Atoms/Content/Content";

export default function Body() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <div id={'LEFT'}>
                <Card side={'LEFT'}/>
                {Object.keys(content.LEFT).map((key, index) => {
                    const item = content.LEFT[key];
                    if (item.header && item.text) {
                        return (
                            <div>
                                <Card side={'LEFT'}/>
                                <Card key={index} header={item.header} text={item.text} side="LEFT"/>
                            </div>
                        );
                    }
                    return null;
                })}
                <Card side={'LEFT'}/>
            </div>
            <div id={'LINE'} style={LINE}></div>
            <div id={'RIGHT'}>
                <Card side={'RIGHT'}/>
                {Object.keys(content.RIGHT).map((key, index) => {
                    const item = content.RIGHT[key];
                    if (item.header && item.text) {
                        return (
                            <div>
                                <Card key={index + 10} header={item.header} text={item.text} side="RIGHT"/>
                                <Card side={'RIGHT'}/>
                            </div>
                        );
                    }
                    return null;
                })}
                <Card side={'RIGHT'}/>
            </div>
        </div>
    )
}

const LINE = {
    height: '2950px',
    width: '5px',
    background: '#454545',
    borderRadius: '10px'
}