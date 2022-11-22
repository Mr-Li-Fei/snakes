import Food from './food';
import ScorePanel from './scorePanel';
import Snake from './snake';

class GameControl {
    food: Food;
    scorePanel: ScorePanel;
    snake: Snake;
    timer: any;

    // 设置方向值
    direction: string;

    constructor() {
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.snake = new Snake();

        this.init();
    }

    init() {
        // 初始化，绑定键盘事件
        document.addEventListener('keydown', this.handleEvent.bind(this));
    }

    handleEvent(ev: KeyboardEvent) {
        /**
         * ArrowUp 上
         * ArrowDown 下
         * ArrowLeft 左
         * ArrowRight 右
         */
        if(this.direction === ev.key) {
            return;
        }
        this.direction = ev.key;
        this.run();
    }

    // run 方法， 让snake 动起来
    run() {
        if(this.timer) {
            clearTimeout(this.timer);
        }

        let x = this.snake.x;
        let y = this.snake.y;

        switch(this.direction) {
            case "ArrowUp":
                y -= 10;
                break;
            case "ArrowDown":
                y += 10;
                break;
            case "ArrowLeft":
                x -= 10;
                break;
            case "ArrowRight":
                x += 10;
                break;
            default:
                return;        
        }

        if(x < 0 || x > 290) {
            alert('撞墙了!!')
            return;
        }

        if(y < 0 || y > 290) {
            alert('撞墙了!!')
            return;
        }


        this.moveBody();

        this.snake.x = x;
        this.snake.y = y;
        this.checkFood();
        // 注意这里setTimeout 得this指向,,无this指向操作，无箭头函数，this指向window
        this.timer = setTimeout(this.run.bind(this), 300 - (this.scorePanel.level -1) * 10);
    }

    checkFood() {
        if(this.snake.x === this.food.x
            && this.snake.y === this.food.y) {
                // console.log('eat');
                this.snake.addBodyLength();
                this.food.change();
                this.moveBody();
        }
    }

    moveBody() {
        // length = 2
        for(let i = this.snake.body.length -1; i > 0; i--) {
            let x = (this.snake.body[i - 1] as HTMLElement).offsetLeft;
            let y = (this.snake.body[i - 1] as HTMLElement).offsetTop;

            (this.snake.body[i] as HTMLElement).style.left = x + 'px';
            (this.snake.body[i] as HTMLElement).style.top = y + 'px';
        }
    }
}

export default GameControl;