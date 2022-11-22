class ScorePanel {
    //  分数栏，，记录分数，级别
    score: number = 0;
    level: number = 1;
    maxScore: number = 100;

    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    constructor() {
        this.scoreEle = document.getElementById('score');
        this.levelEle = document.getElementById('level');
        this.initScorePanel();
    }

    initScorePanel() {
        this.scoreEle.innerHTML = `SCORE: ${this.score}`;
        this.levelEle.innerHTML = `LEVEL: ${this.level}`;
    }

    addScore() {

        this.score ++;
        if(this.score%10 === 0) {
            this.level = Math.floor(this.score / 10);
        }
        
        if(this.score <= this.maxScore) {
            this.initScorePanel();
        }

    }
}

export default ScorePanel;