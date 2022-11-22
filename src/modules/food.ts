class Food {
    foodEle: HTMLElement;
    constructor() {
        this.foodEle = document.getElementById('food');
    }

    get x() {
       return this.foodEle.offsetLeft;
    }

    get y() {
        return this.foodEle.offsetTop;
    }

    // change() 改变食物得位置
    change() {
        // 对食物位置进行限制判定
        // 贪吃蛇是以10 为单位前进得，，所以食物得位置也得在10得倍数得位置上
        // Math.round(),向上取整，，Math.floor(), 向下取整
        const left = Math.round(Math.random() * 29) * 10;
        const top = Math.round(Math.random() * 29) * 10;

        this.foodEle.style.left = left + "px";
        this.foodEle.style.top = top + "px";
    }
}

export default Food