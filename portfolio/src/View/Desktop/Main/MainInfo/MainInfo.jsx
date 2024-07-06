import Container from './Atoms/Container/Container';
import Section from "./Atoms/Section/Section";
import Card from "./Atoms/Card/Card";
import { content } from "./Content/content";

export default function MainInfo({render}) {
    return (
        <Container>
            {Object.entries(content.SECTION).map(([sectionKey, section]) => (
                <Section key={sectionKey} alignment={section.ALIGNMENT}>
                    {Object.entries(section.CONTENT).map(([contentKey, item]) => (
                        <Card key={contentKey} text={item.text} size={item.size} icon={item.icon} header={item.header} transition={item.transition} render={render}/>
                    ))}
                </Section>
            ))}
        </Container>
    );
}