export function template(props) {
    return {
        tag: 'form',
        attrs: {},
        classes: ['form'],
        textContent: null, 
        childNodes: [
            { 
                tag: 'input', 
                attrs: { 
                    type: 'text', 
                    placeholder: props.placeholder, 
                    name: 'input' 
                }, 
                classes: ['form__input'], 
                textContent: null 
            },
            { 
                tag: 'div',
                attrs: { name: 'footer' },
                classes: ['form__footer'],
                textContent: null,
                childNodes: [
                    {
                        tag: 'button',
                        attrs: {
                            type: 'submit',
                            name: 'confirm',
                            disabled: 'true'
                        },
                        classes: ['form__footer-button', 'button', '_primary'],
                        textContent: props.buttonName
                    },
                    {
                        tag: 'button',
                        attrs: {
                            type: 'button',
                            name: 'cancel'
                        },
                        classes: ['form__footer-button', 'button', '_secondary'],
                        textContent: "Отмена"
                    }
                ]            
            }
        ]
    }
}

