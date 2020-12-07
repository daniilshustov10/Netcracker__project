import { Card } from '../Card';
import { Form } from '../Form';

export function template(props) {
    return {
        tag: 'div',
        attrs: {},
        classes: ['board__column', 'column'],
        textContent: null, 
        childNodes: [
            {
                tag: 'div',
                attrs: {},
                classes: ['column__delete'],
                textContent: null
            },
            {
                tag: 'div',
                attrs: {},
                classes: ['column__content'],
                textContent: null,
                childNodes: [
                    {
                       tag: 'div',
                       attrs: {},
                       classes: ['column__content-head'],
                       textContent: props.head
                    },
                    {
                        tag: 'div',
                        attrs: {},
                        classes: ['column__content-list'],
                        textContent: null,
                        childNodes: props.cards.map(card => new Card({...card, columnId: props.id}).render())
                    },
                    {
                        tag: 'div',
                        attrs: {},
                        classes: ['column__content-add'],
                        textContent: 'Добавить карточку'
                    },
                    {
                        tag: 'div',
                        attrs: {},
                        classes: ['column__content-form'],
                        textContent: null,
                        childNodes: [
                            new Form({
                                placeholder: 'Название карточки',
                                buttonName: 'Добавить карточку'
                            }).render()
                        ]
                    },                    
                ]
            }
        ]
    }
}

