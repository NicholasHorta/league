export class MatchSetupProperties {
    
    constructor(
        public teamSetOne: string[],
        public managerSetOne: string[],
        public generatedTeamOne: any[],
        public generatedTeamTwo: any[],
        public coinTossWinners: string[],
        public teamOneCaptain: string,
        public teamTwoCaptain: string,
        public possessionIndexMatchOne: number,
        public setupComplete: false,
        public abandonIfNavigateAway: false
    ) {};

}
