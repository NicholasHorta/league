export class TeamPositionIndex {

    private positionKeeper: number;
    private positionDefAndMid: number[];
    private positionMidAndAttMidAndStriker: number[];
    private positionAttMidAndStriker: number[];
    private positionAllOutOfBoxPlayers: number[];
    private positionToSub: number[][];
    
    constructor() {
        this.positionKeeper = 0;
        this.positionDefAndMid = [1, 2, 3, 4, 5, 6, 7];
        this.positionMidAndAttMidAndStriker = [5, 6, 7, 8, 9, 10];
        this.positionAttMidAndStriker = [8, 9, 10];
        this.positionAllOutOfBoxPlayers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.positionToSub = [[1, 2, 3, 4], [5, 6, 7], [8, 9], [10]];
    }

    get getKeeper() {
        return this.positionKeeper;
    };
    get getDefAndMid() {
        return this.positionDefAndMid;
    };
    get getMidAndAttMidAndStriker() {
        return this.positionMidAndAttMidAndStriker;
    };
    get getAttMidAndStriker() {
        return this.positionAttMidAndStriker;
    };
    get getAllOutOfBoxPlayers() {
        return this.positionAllOutOfBoxPlayers;
    };
    get getValidSubPositions(){
        return this.positionToSub;
    }
}