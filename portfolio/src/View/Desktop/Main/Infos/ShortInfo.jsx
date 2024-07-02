import React from 'react';
import {style} from "./style";

export default function ShortInfo({activate}) {
    return (
        <div style={{...style.main}}>
            <div style={{...style.container}}>
                <div style={{...style.leftInfo, ...(activate && style.leftInfoSlideIn)}}>
                    <h1 style={{...style.infoHeader}}>Gewünschtes Webdesign</h1>
                    <p style={{...style.infoText}}>
                        Modernes,
                        <a style={{...style.a}} href={'hrefHanlder'}> ansprechendes Design</a>,
                        das Ihre Markenidentität widerspiegelt und Ihre
                        <a style={{...style.a}} href={'hrefHanlder'} > Zielgruppe anspricht.</a>
                    </p>
                </div>
            </div>
            <div style={{...style.container}}>
                <div style={{...style.rightInfo, ...(activate && style.rightInfoSlideIn)}}>
                    <h1 style={{...style.infoHeader}}>Professionelle Webentwicklung</h1>
                    <p style={{...style.infoText, width: '700px'}}>
                        Robuste und
                        <a style={{...style.a}} href={'hrefHanlder'}> skalierbare Lösungen</a>
                        , die auf
                        <a style={{...style.a}} href={'hrefHanlder'}> neuesten Technologien </a>
                        basieren und optimale Leistung garantieren.</p>
                </div>
            </div>
            <div style={{...style.container}}>
                <div style={{...style.leftInfo, ...(activate && style.leftInfoSlideIn)}}>
                    <h1 style={{...style.infoHeader}}>SEO und Digitales Marketing</h1>
                    <p style={{...style.infoText, width: '700px'}}>
                        Strategien, die Ihre <a style={{...style.a}} href={'hrefHanlder'}> Sichtbarkeit verbessern </a>
                        und den Traffic auf Ihrer Website erhöhen.
                    </p>
                </div>
            </div>
        </div>
    );
}