import BlockDataImageIda from "../Images/idaIcon.png";
import BlockDataImageQub from "../Images/qubIcon.png";
import BlockDataImageSuw from "../Images/suwIcon.png";
import BlockDataImageTue from "../Images/tueIcon.png";

let blockDataHeaderIda = "INDIVIDUELLE DESIGNANPASSUNG";
let blockDataTextIda = "Durch unsere individuelle Designanpassung möchten wir sicherstellen, dass Ihr Projekt einzigartig ist und sich von der Masse abhebt. Wir setzen auf innovative Techniken und kreative Lösungen, um sicherzustellen, dass Ihr Design nicht nur ästhetisch ansprechend ist, sondern auch funktional und benutzerfreundlich.";
let blockDataImageIda = BlockDataImageIda;
let blockDataAlignmentIda = null;
let blockDataIda = new Array(3);
blockDataIda[0] = blockDataHeaderIda;
blockDataIda[1] = blockDataTextIda;
blockDataIda[2] = blockDataImageIda;
blockDataIda[3] = blockDataAlignmentIda;

let blockDataHeaderQub = "QUALITÄT UND BENUTZERERFAHRUNG";
let blockDataTextQub = "Qualität steht bei uns an erster Stelle. Wir sind bestrebt, Inhalte von höchster Güte zu erstellen, die nicht nur informieren, sondern auch inspirieren. Unsere Website bietet eine intuitive, benutzerfreundliche Navigation, die sicherstellt, dass Ihre Erfahrung bei uns positiv und einprägsam ist. Wir glauben, dass eine hervorragende Benutzererfahrung der Schlüssel zur Bindung von Kunden und Besuchern ist.";
let blockDataImageQub = BlockDataImageQub;
let blockDataAlignmentQub = null;
let blockDataQub = new Array(3);
blockDataQub[0] = blockDataHeaderQub;
blockDataQub[1] = blockDataTextQub;
blockDataQub[2] = blockDataImageQub;
blockDataQub[3] = blockDataAlignmentQub;

let blockDataHeaderSuw = "SKALIERBARKEIT UND WACHSTUMSPOTENZIAL ";
let blockDataTextSuw = "Wir verstehen, dass Wachstum und Anpassungsfähigkeit Hand in Hand gehen. Unsere Plattform ist mit Blick auf Skalierbarkeit und Flexibilität gestaltet, um mit Ihrem Geschäft mitwachsen zu können. Von der Erweiterung der Angebotspalette bis hin zur Erschließung neuer Märkte – wir bieten die notwendige Unterstützung und Technologie, um Ihr Potenzial voll auszuschöpfen.";
let blockDataImageSuw = BlockDataImageSuw;
let blockDataAlignmentSuw = "right";
let blockDataSuw = new Array(3);
blockDataSuw[0] = blockDataHeaderSuw;
blockDataSuw[1] = blockDataTextSuw;
blockDataSuw[2] = blockDataImageSuw;
blockDataSuw[3] = blockDataAlignmentSuw;

let blockDataHeaderTue = "TRAFFIC UND EINNAHMEN";
let blockDataTextTue = "Eine starke Online-Präsenz ist der Schlüssel zum Erfolg. Unser Fokus liegt auf der Generierung von hochwertigem Traffic und der Steigerung der Einnahmen. Durch gezielte Marketingstrategien und kontinuierliche Analyse unserer Besucherströme optimieren wir die Sichtbarkeit und Wirksamkeit unserer Website, um nicht nur mehr Besucher anzuziehen, sondern diese auch in loyale Kunden zu verwandeln.";
let blockDataImageTue = BlockDataImageTue;
let blockDataAlignmentTue = "right";
let blockDataTue = new Array(3);
blockDataTue[0] = blockDataHeaderTue;
blockDataTue[1] = blockDataTextTue;
blockDataTue[2] = blockDataImageTue;
blockDataTue[3] = blockDataAlignmentTue;

export let blockData = Array(4);
blockData[0] = blockDataTue;
blockData[1] = blockDataQub;
blockData[2] = blockDataSuw;
blockData[3] = blockDataIda;