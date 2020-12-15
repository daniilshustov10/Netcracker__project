export class Storage {
    static getFromLocalStorage() {
        return JSON.parse(localStorage.getItem("mello")) || {theme: 'dark'};
    }

    static changeTheme() {
        const mello = Storage.getFromLocalStorage();         
        mello.theme = mello.theme === 'light' ? 'dark' : 'light';

        localStorage.setItem("mello", JSON.stringify(mello));
    }

    static getTheme() {
        const mello = Storage.getFromLocalStorage();
        return mello.theme;        
    }

    static getColumns() {
        const mello = Storage.getFromLocalStorage();
        return Object.keys(mello).includes("columns") ? mello.columns : [];
    }

    static addColumn(column) {
        const mello = Storage.getFromLocalStorage();
        Object.keys(mello).includes("columns")
            ? mello.columns.push(column)
            : (mello.columns = [column]);

        localStorage.setItem("mello", JSON.stringify(mello));
    }

    static deleteColumn(columnId) {
        const mello = Storage.getFromLocalStorage();

        mello.columns = mello.columns.filter(
            (column) => column.id !== columnId
        );

        localStorage.setItem("mello", JSON.stringify(mello));
    }

    static getColumnHead(columnId) {
        const mello = Storage.getFromLocalStorage();

        return mello.columns.find(column => column.id === columnId).head
    }

    static updateColumnHead(columnId, head) {
        const mello = Storage.getFromLocalStorage();

        mello.columns.find((column) => column.id === columnId).head = head;

        localStorage.setItem("mello", JSON.stringify(mello));
    }

    static getColumn(columnId) {
        const mello = Storage.getFromLocalStorage();

        return mello.columns.find((column) => column.id === columnId);
    }

    static addCard(columnId, card) {
        const mello = Storage.getFromLocalStorage();

        mello.columns
            .find((column) => column.id === columnId)
            .cards.push(card);

        localStorage.setItem("mello", JSON.stringify(mello));
    }

    static updateCard(columnId, cardId, content) {
        const mello = Storage.getFromLocalStorage();

        mello.columns
            .find((column) => column.id === columnId)
            .cards.map((card) => {
                if (card.id === cardId) card.content = content;
            });

        localStorage.setItem("mello", JSON.stringify(mello));
    }

    static getCardContent(columnId, cardId) {
        const mello = Storage.getFromLocalStorage();

        return mello.columns
            .find(column => column.id === columnId).cards
            .find(card => card.id === cardId).content
    }

    static deleteCard(columnId, cardId) {
        const mello = Storage.getFromLocalStorage();

        mello.columns.find(
            (column) => column.id === columnId
        ).cards = mello.columns
            .find((column) => column.id === columnId)
            .cards.filter((card) => card.id !== cardId);

        localStorage.setItem("mello", JSON.stringify(mello));
    }
}
