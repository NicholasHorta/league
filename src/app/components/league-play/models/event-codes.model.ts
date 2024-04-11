export class EventCodes {
    private longShotCodes: number[]; // Is valid long shot
    private cornerCodes: number[]; // Is valid corner
    private goalFromCornerCodes: number[]; // Is valid goal from corner
    private goalCodes: number[]; // Is valid goal
    private yellowCardCodes: number[]; // Is valid yellow card
    private inTheBoxRedCardCodes: number[];// Is valid red card / PENALTY 
    private usedYellowCardCodes: number[]; // Used yellow cards
    private usedRedCardCodes: number[]; // Used red cards / PENALTY
    private subLimit: number;
    constructor() {
        this.longShotCodes = [3, 18, 28, 42, 50];
        this.cornerCodes = [3, 9, 14];
        this.goalFromCornerCodes = [2, 9, 12, 16, 23];
        this.goalCodes = [5, 15, 30, 45, 55];
        this.yellowCardCodes = [2, 7, 19, 41, 59, 77, 89, 94];
        this.inTheBoxRedCardCodes = [1, 11, 22];
        this.usedYellowCardCodes = [];
        this.usedRedCardCodes = [];
        this.subLimit = 3;
    };

    /// Getters
    get getLongShotCodes() {
        return this.longShotCodes;
    };

    get getCornerCodes() {
        return this.cornerCodes
    };

    get getGoalFromCornerCodes() {
        return this.goalFromCornerCodes;
    };

    get getGoalCodes() {
        return this.goalCodes;
    };

    get getYellowCardCodes() {
        return this.yellowCardCodes;
    };

    get getInTheBoxRedCardCodes() {
        return this.inTheBoxRedCardCodes;
    };

    get getUsedYellowCardCodes() {
        return this.usedYellowCardCodes;
    };

    get getUsedRedCardCodes() {
        return this.usedRedCardCodes;
    };

    get getSubLimit() {
        return this.subLimit;
    };


    /// Setters
    set setUsedRedCardCodes(code: number) {
        this.usedRedCardCodes.push(code);
    };

    set setUsedYellowCardCodes(code: number) {
        this.usedYellowCardCodes.push(code);
    };
}