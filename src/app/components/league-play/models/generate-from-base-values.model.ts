import Util from "src/app/utils/utilities";
/// Base values of which a random number can be generated from
/// Math.floor( Math.random() * ARG )

export class GenerateFromBaseValues {
    private outOfBoxMax: number; // 5 positions to shoot from * 10 players
    private yellowCardMax: number; // 10 player * 10 players 
    private goalFromCornerMax: number; // 25m = distance to goal box from corner
    private goalChanceMax: number; // Difficulty = 20+ for a defender, 40+ for Goalkeeper, 2+ chance per foot
    private attDefStatMax: number; // (11 players + 4 subs + 1 manager) * 2
    private singleTeamPlayersAmtMax: number; // 11 Players 
    private registerCornerMax: number;
    private penaltyCallMax: number;
    private binaryOutput: number; // 0 | 1
    private tikiTakaThree: number; // Based on TikiTaka 3 point passing
    constructor() {
        this.outOfBoxMax = 55;
        this.yellowCardMax = 100;
        this.goalFromCornerMax = 25;
        this.attDefStatMax = 32;
        this.singleTeamPlayersAmtMax = 11;
        this.registerCornerMax = 15;
        this.penaltyCallMax = 23;
        this.tikiTakaThree = 3;
        this.goalChanceMax = 60;
        this.binaryOutput = 2; // +1 due to zero index
    };

    get genFromOutOfBoxMax() {
        const generatedValue = Util.returnRandomValueFromArg(this.outOfBoxMax);
        return generatedValue;
    };

    get genFromYellowCardMax() {
        const generatedValue = Util.returnRandomValueFromArg(this.yellowCardMax);
        return generatedValue;
    };

    get genFromGoalFromCornerMax() {
        const generatedValue = Util.returnRandomValueFromArg(this.goalFromCornerMax);
        return generatedValue;
    };

    get genFromGoalChanceMax() {
        const generatedValue = Util.returnRandomValueFromArg(this.goalChanceMax);
        return generatedValue;
    };

    get genFromAttDefStatMax() {
        const generatedValue = Util.returnRandomValueFromArg(this.attDefStatMax);
        return generatedValue;
    };

    get genFromSingleTeamPlayersAmtMax() {
        const generatedValue = Util.returnRandomValueFromArg(this.singleTeamPlayersAmtMax);
        return generatedValue;
    };

    get genFromRegisterCornerMax() {
        const generatedValue = Util.returnRandomValueFromArg(this.registerCornerMax);
        return generatedValue;
    };

    get genFromPenaltyCallMax() {
        const generatedValue = Util.returnRandomValueFromArg(this.penaltyCallMax);
        return generatedValue;
    };

    get genFromBinaryOutput() {
        const generatedValue = Util.returnRandomValueFromArg(this.binaryOutput);
        return generatedValue;
    };

    get genFromTikiTakaThree() {
        const generatedValue = Util.returnRandomValueFromArg(this.tikiTakaThree);
        return generatedValue + 1;
    };

}
