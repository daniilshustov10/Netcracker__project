export function template() {
    return {
        tag: 'section', 
        attrs: {},
        classes: ['wrapper__header', 'header'], 
        textContent: null,
        childNodes: [
            { 
                tag: 'a', 
                attrs: {href: '/'}, 
                classes: ['header__logo'], 
                textContent: 'Mello'
            },
            {
                tag: 'button', 
                attrs: {type: 'button'}, 
                classes: ['header__button', 'button', '_light'], 
                textContent: 'Сменить тему'
            }
        ]
    }
}