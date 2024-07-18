import Container from './Atoms/Container/Container';
import Section from "./Atoms/Section/Section";
import Card from "./Atoms/Card/Card";
import { content } from "./Atoms/Content/content";

export default function MainInfo({render}) {
    return (
        <Container>
            {Object.entries(content.SECTION).map(([sectionKey, section]) => (
                <Section key={sectionKey} alignment={section.ALIGNMENT}>
                    {Object.entries(section.CONTENT).map(([contentKey, item]) => (
                        <Card key={contentKey} text={item.TEXT} size={item.SIZE} icon={item.ICON} header={item.HEADER} transition={item.TRANSITION} render={render}/>
                    ))}
                </Section>
            ))}
        </Container>
    );
}