import { Component } from "../Component";
import { template } from "../Board/board.template";
import { Storage } from "../../utils/localStorage";

export class Board extends Component {
    constructor(props = {}) {
        super(props);
        this.component = null;
    }

    addColumn(head) {
        
        Storage.addColumn({
            id: Date.now(),
            head,
            cards: []
        })
    }

    addListener() {        

        const addColumn = this.component.querySelector('.board__add-column');
        const addColumnContent = addColumn.querySelector('.board__add-column-content');
        const form = this.component.querySelector('.board__add-column-form');
        const formInput = form.querySelector('.form__input');
        const confirmButton = form.querySelector('[type=submit]'); 
        const boardButton = this.component.querySelector('.board__button');

        form.classList.toggle('_hide');

        addColumn.addEventListener('click',  (function addColumnHandler(event) {           
            form.classList.toggle('_hide');
            addColumn.classList.toggle('_form');
            addColumnContent.classList.toggle('_hide');
            
            if (event.target === formInput) {
                form.classList.toggle('_hide');
                addColumn.classList.toggle('_form');
                addColumnContent.classList.toggle('_hide');
            }

            if (event.target === confirmButton) {
                event.preventDefault();
                this.addColumn(formInput.value.trim());

                addColumn.removeEventListener('click', addColumnHandler);
                this.component.replaceWith(new Board(Storage.getColumns()).render());
                const newBoard = document.querySelector('.board');
                newBoard.scrollLeft = newBoard.clientWidth;
            }

        }).bind(this));

        const scrollLeft = new CustomEvent('scroll-left');

        boardButton.addEventListener('scroll-left', (function(event) {
            this.component.scrollTo(0, 0);
        }).bind(this));

        boardButton.addEventListener('click', function clickHandler(event) {
            boardButton.dispatchEvent(scrollLeft);
        });

        this.component.addEventListener('scroll', (function scrollHandler(event) {

            this.component.scrollWidth - this.component.clientWidth - this.component.scrollLeft < 100 
                ? boardButton.removeAttribute('hidden')
                : boardButton.setAttribute('hidden', 'true')

        }).bind(this));
    }

    render() {
        this.component = this.compile(template(this.props));

        this.addListener();

        return this.component;
    }
}