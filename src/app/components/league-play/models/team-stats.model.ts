export class TeamStats {
    constructor(
        public goals: number,
        public yellowCards: number,
        public corners: number,
        public redCards: number,
        public goalFromCorner: number,
        public keeperSaves: number,
        public successfulTackles: number,
        public shotsOnTarget: number,
        public totalPossession: number,
        public substitutions: number,
        public totalPasses: number
    ) { };
}