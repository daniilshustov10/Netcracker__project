export class Element {
    constructor(tag = "div", attrs = {}, classes = [], textContent = "") {
        this.element = document.createElement(tag);

        Object.keys(attrs).forEach((attr) =>
            this.element.setAttribute(attr, attrs[attr])
        );

        if (classes.length) {
            classes.forEach((className) =>
                this.element.classList.add(className)
            );
        }

        if (textContent) {
            this.element.textContent = textContent;
        }

        return this.element;
    }
}
