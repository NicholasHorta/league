export class MatchProgression {
    private isMatchStarted: boolean;
    private isMatchComplete: boolean;
    private isMotmAppointed: boolean;
    private matchFullTimeSeconds: number;
    private matchMiliSecondInterval: number;
    private ninetyMinMark: number;
    private refFoulGracePeriod: number;
    private phaseOfAttack: number;
    public matchSecondsVisual: number;
    public matchMinutesVisual: number;
    public matchTimeTotalIncrement: number;

    constructor(seconds: number, minutes: number, incrementalValue: number) {
        this.isMatchStarted = false;
        this.isMatchComplete = false;
        this.isMotmAppointed = false;
        this.matchFullTimeSeconds = 5580;
        this.matchMiliSecondInterval = 22.2;
        this.ninetyMinMark = 5380;
        this.refFoulGracePeriod = 558;
        this.phaseOfAttack = 1;
        this.matchSecondsVisual = seconds;
        this.matchMinutesVisual = minutes;
        this.matchTimeTotalIncrement = incrementalValue;
    };

    /// Getters
    get getIsMatchStarted() {
        return this.isMatchStarted;
    };

    get getIsMatchComplete() {
        return this.isMatchComplete;
    };

    get getIsMotmAppointed() {
        return this.isMotmAppointed;
    };

    get getMatchFullTimeSeconds() {
        return this.matchFullTimeSeconds;
    };

    get getMatchMiliSecondInterval() {
        return this.matchMiliSecondInterval;
    };

    get getMatchTimeTotalIncrement() {
        return this.matchTimeTotalIncrement;
    };

    get getMatchSecondsVisual() {
        return this.matchSecondsVisual;
    };

    get getMatchMinutesVisual() {
        return this.matchMinutesVisual;
    };

    get getNinetyMinMark() {
        return this.ninetyMinMark;
    };

    get getRefFoulGracePeriod() {
        return this.refFoulGracePeriod;
    };

    get getPhaseOfAttack() {
        return this.phaseOfAttack;
    };


    /// Setters
    set setIsMatchStarted(bool: boolean) {
        this.isMatchStarted = bool;
    };

    set setIsMatchComplete(bool: boolean) {
        this.isMatchComplete = bool;
    };

    set setIsMotmAppointed(bool: boolean) {
        this.isMotmAppointed = bool;
    };

    set setPhaseOfAttack(value: number) {
        this.phaseOfAttack = value;
    };
}

