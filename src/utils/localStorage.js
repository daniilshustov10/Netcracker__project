export class Storage {
    static getFromLocalStorage() {
        return JSON.parse(localStorage.getItem("trello")) || {};
    }

    static getColumns() {
        const trello = Storage.getFromLocalStorage();
        return Object.keys(trello).includes("columns") ? trello.columns : [];
    }

    static addColumn(column) {
        const trello = Storage.getFromLocalStorage();
        Object.keys(trello).includes("columns")
            ? trello.columns.push(column)
            : (trello.columns = [column]);

        localStorage.setItem("trello", JSON.stringify(trello));
    }

    static deleteColumn(columnId) {
        const trello = Storage.getFromLocalStorage();

        trello.columns = trello.columns.filter(
            (column) => column.id !== columnId
        );

        localStorage.setItem("trello", JSON.stringify(trello));
    }

    static updateColumnHead(columnId, head) {
        const trello = Storage.getFromLocalStorage();

        trello.columns.find((column) => column.id === columnId).head = head;

        localStorage.setItem("trello", JSON.stringify(trello));
    }

    static getColumn(columnId) {
        const trello = Storage.getFromLocalStorage();

        return trello.columns.find((column) => column.id === columnId);
    }

    static addCard(columnId, card) {
        const trello = Storage.getFromLocalStorage();

        trello.columns
            .find((column) => column.id === columnId)
            .cards.push(card);

        localStorage.setItem("trello", JSON.stringify(trello));
    }

    static updateCard(columnId, cardId, content) {
        const trello = Storage.getFromLocalStorage();

        trello.columns
            .find((column) => column.id === columnId)
            .cards.map((card) => {
                if (card.id === cardId) card.content = content;
            });

        localStorage.setItem("trello", JSON.stringify(trello));
    }

    static deleteCard(columnId, cardId) {
        const trello = Storage.getFromLocalStorage();

        trello.columns.find(
            (column) => column.id === columnId
        ).cards = trello.columns
            .find((column) => column.id === columnId)
            .cards.filter((card) => card.id !== cardId);

        localStorage.setItem("trello", JSON.stringify(trello));
    }
}
