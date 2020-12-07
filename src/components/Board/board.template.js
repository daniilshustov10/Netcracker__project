import { Column } from "../Column/column.component";
import { Form } from "../Form/form.component";

export function template(props) {
    return {
        tag: 'section', 
        attrs: {},
        classes: ['wrapper__board', 'board'],
        textContent: null,
        childNodes: [
            ...props.map(column => new Column(column).render()),
            { 
                tag: 'div', 
                attrs: {}, 
                classes: ['board__add-column'], 
                textContent: null, 
                childNodes: [
                    { 
                        tag: 'div', 
                        attrs: {}, 
                        classes: ['board__add-column-content'], 
                        textContent: 'Добавьте еще одну колонку'
                    },
                    { 
                        tag: 'div', 
                        attrs: {}, 
                        classes: ['board__add-column-form'], 
                        textContent: null,
                        childNodes: [
                            new Form({
                                placeholder: 'Введите название столбца',
                                buttonName: 'Добавить список'
                            }).render()                            
                        ]
                    }
                ]
            }, 
            {
                tag: 'button',
                attrs: { 'hidden': 'true' },
                classes: ['board__button'],
                textContent: 'Назад'
            }
        ]
    }
}

