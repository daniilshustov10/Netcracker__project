import { Element } from '../../modules/Element';

export class Component {
    constructor(props = {}) {
        this.props = props;
        this.element = null;
    }

    compile(template) {
        const { tag, attrs, classes, textContent  } = template;

        this.element = new Element(tag, attrs, classes, textContent);

        if (template.hasOwnProperty('childNodes') && template.childNodes.length) {
            this.createElementsFromChildNodes(this.element, template.childNodes);
        }

        return this.element;
    }

    createElementsFromChildNodes(element, childNodes) {
        childNodes.forEach(childElement => {
            if (childElement instanceof HTMLElement) {
                element.append(childElement);
            } else {
                const {tag, attrs, classes, textContent} = childElement;
                const elem = new Element(tag, attrs, classes, textContent);
                element.append(elem);
    
                if (childElement.hasOwnProperty('childNodes') && childElement.childNodes.length) {
                    this.createElementsFromChildNodes(elem, childElement.childNodes);
                }
            }           
        })
    }
    
    getElement() {
        return this.element;
    }
}

