import { Storage } from "../../utils/localStorage";
import { Component } from "../Component";
import { Board } from '../Board';
import { template } from "./column.template";
import { isAllowedKeyCode } from "../../utils/isAllowedKeyCode";
import { MAX_COLUMN_HEAD_LENGTH } from "../../utils/constant";

export class Column extends Component {
    constructor(props = {}) {
        super(props);
        this.component = null;
    }

    getColumnHead() {
        return Storage.getColumnHead(this.props.id);
    }

    updateColumnHead(head) {

        Storage.updateColumnHead(this.props.id, head);
    }

    deleteColumn() {

        Storage.deleteColumn(this.props.id);
    }

    addCard(content) {

        const card = {
            id: Date.now(),
            content
        }

        Storage.addCard(this.props.id, card);
    }

    addListener() {
        const columnDelete = this.component.querySelector('.column__delete');
        const columnContent = this.component.querySelector('.column__content');
        const columnContentHead = columnContent.querySelector('.column__content-head');
        const addCard = columnContent.querySelector('.column__content-add');
        const columnContentForm = columnContent.querySelector('.column__content-form');
        const form = columnContentForm.querySelector('.form');

        columnContentForm.classList.toggle('_hide');
        
        this.component.addEventListener('click', (function columnClickHandler(event) {
            if (event.target === addCard) {
                columnContentForm.classList.toggle('_hide');
                addCard.classList.toggle('_hide');
            }

            if (event.target === form.cancel) {
                columnContentForm.classList.toggle('_hide');
                addCard.classList.toggle('_hide');
            }

            if (event.target === columnDelete) {
                this.deleteColumn();

                this.component.removeEventListener('click', columnClickHandler);                

                document.querySelector('.board').replaceWith(new Board(Storage.getColumns()).render());
            }

            if (event.target === columnContentHead) {
                columnContentHead.setAttribute('contenteditable', 'true');
                columnContentHead.focus();
            }

        }).bind(this))

        form.addEventListener('submit', (function submitHandler(event) {
            event.preventDefault();          

            this.addCard(form.input.value.trim());

            form.removeEventListener('submit', submitHandler);

            const newComponent = new Column(Storage.getColumn(this.props.id)).render();
            this.component.replaceWith(newComponent); 
            this.component = newComponent;
        
            document.querySelectorAll('.column__content-list').forEach(list => {
               if (list === this.component.querySelector('.column__content-list')) list.scrollTop = list.scrollHeight;
            })   
            
        }).bind(this));
        
        columnContentHead.addEventListener('keydown', (function keyHandler(event) {
            if (!event.shiftKey && event.code === 'Enter') {
                event.preventDefault();

                const newHead = columnContentHead.textContent.trim();

                if (newHead.length && this.props.head !== newHead) {
                    this.updateColumnHead(newHead);
                }

                columnContentHead.blur();
            }
           
        }).bind(this));

        columnContentHead.addEventListener('blur', (function blurHandler(event) {
            const newHead = columnContentHead.textContent.trim();

            if (newHead.length) {
                if (this.props.head !== newHead) this.updateColumnHead(newHead);                
                columnContentHead.removeAttribute('contenteditable'); 
            } else {
                columnContentHead.textContent = this.getColumnHead();
            }
            // } else {
            //     if (!columnContentHead.classList.contains('_warning')) columnContentHead.classList.add('_warning');
            //     columnContentHead.focus();
            // }       

        }).bind(this));


        columnContentHead.addEventListener('keydown', function keydownHandler(event) {
            if (this.textContent.length === MAX_COLUMN_HEAD_LENGTH && !isAllowedKeyCode(event)) {
                event.preventDefault();
            }
        });

        columnContentHead.addEventListener('paste', function pasteHandler(event) {
            if (event.clipboardData) {
                if (event.clipboardData.getData('Text').length + this.textContent.length > MAX_COLUMN_HEAD_LENGTH && event.keyCode !== 8) {
                    event.preventDefault();
                    this.textContent = this.textContent + event.clipboardData.getData('Text').slice(0, MAX_COLUMN_HEAD_LENGTH - this.textContent.length);
                }
            }
        });
    }    

    render() {
        this.component = this.compile(template(this.props));

        this.addListener();

        return this.component;
    }
}
