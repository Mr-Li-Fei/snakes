class Snake {
    // 最重要得是sanke 得头和身体
    head: HTMLElement;
    body: HTMLCollection;

    snakeEle: Element;

    constructor() {
       this.snakeEle = document.getElementById("snake");
       this.head = document.querySelector("#snake > div");
       this.body = this.snakeEle.getElementsByTagName('div');
    }

    get x() {
        return this.head.offsetLeft;
    }

    get y() {
        return this.head.offsetTop;
    }

    set x(value: number) {
        this.head.style.left = value + 'px';
    }

    set y(value: number) {
        this.head.style.top = value + 'px';
    }

    addBodyLength() {
        this.snakeEle.insertAdjacentHTML('beforeend', '<div></div>')
    }
}

export default Snake;