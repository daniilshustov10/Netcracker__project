import { Storage } from '../../utils/localStorage';
import { Board } from '../Board';
import { Header } from '../Header';

export function template() {
    return {
        tag: 'div',
        attrs: {},
        classes: ['app__wrapper', 'wrapper'],
        textContent: null,
        childNodes: [
            new Header().render(),
            new Board(Storage.getColumns()).render()
        ]
    }
}

