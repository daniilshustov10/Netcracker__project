export function template(props) {
    return {
        tag: 'div',
        attrs: {},
        classes: ['list__item', 'card'],
        textContent: null,
        childNodes: [
            { 
                tag: 'div', 
                attrs: {}, 
                classes: ['card__content'], 
                textContent: props.content 
            },
            { 
                tag: 'div', 
                attrs: {}, 
                classes: ['card__delete'], 
                textContent: null 
            }
        ]
    }
}



