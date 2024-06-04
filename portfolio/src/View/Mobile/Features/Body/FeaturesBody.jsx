import { cssVariables } from '../../../../Services/abstand'
import { ShowSection }from './Content/Molecules/PackSection'

import { servicesData } from '../Content/FeaturesData';


export default function Body() {
    const styles = {
        mainSection: {
            backgroundColor: 'transparent',
        },
        mainContent: {
            backgroundColor: 'transparent',
            marginLeft: cssVariables['--width_outside_card_space'],
            marginRight: cssVariables['--width_outside_card_space'],
        },
        mainHeader: {
            fontSize: cssVariables['--font_main_heading'],
            marginTop: '0%',
            marginBottom: cssVariables['--height_header_space'],
        },
        mainHeaderH1: {
            margin: '0%',
            fontWeight: 'normal',
        },
    };

    return (
        <section style={styles.mainSection}>
            <div style={styles.mainContent}>
                <section style={styles.mainHeader}>
                    <h1 style={styles.mainHeaderH1}>Features</h1>
                </section>
                {servicesData.map((service, index) => (
                    <ShowSection key={index} cssVariables={cssVariables} pack={service} />
                ))}
            </div>
        </section>
    )
}