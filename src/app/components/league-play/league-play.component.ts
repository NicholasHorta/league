import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatchPropertiesService } from 'src/app/services/match-properties.service';
import { GenerateFromBaseValues } from './models/generate-from-base-values.model';
import { EventCodes } from './models/event-codes.model';
import { MatchProgression } from './models/match-progression.model';
import { TeamPositionIndex } from './models/team-position-index.model';
import { TeamStats } from './models/team-stats.model';
import Util from 'src/app/utils/utilities';
import { Router } from '@angular/router';
@Component({
  selector: 'league-play',
  templateUrl: './league-play.component.html',
  styleUrls: ['./league-play.component.css']
})
export class LeaguePlayComponent implements OnInit, OnDestroy {

  constructor(private matchPropertiesSVC: MatchPropertiesService, private router:Router) { };
  confirmedMatchProps: any = this.matchPropertiesSVC.completedMatchProperties;
  generateValue: GenerateFromBaseValues = new GenerateFromBaseValues();
  matchProgression: MatchProgression = new MatchProgression(0, 0, 0);
  teamOneStats: TeamStats = new TeamStats(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  teamTwoStats: TeamStats = new TeamStats(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  positionIndex: TeamPositionIndex = new TeamPositionIndex();
  eventCodes: EventCodes = new EventCodes();
  private _phaseValue: number = 1;
  matchTimeIncrementer: any;

  ngOnInit(){
    if(this.confirmedMatchProps.abandonIfNavigateAway){
      this.router.navigate(['']);
    };
  };

  matchTimeHandler() {
    console.log('%c Match Started', 'color: white; background: #ae00cc; padding: 4px 8px; border-radius: 10px;');
    this.matchProgression.setIsMatchStarted = true;
    this.audioHandler();
    this.matchTimeIncrementer = setInterval(() => {
      if (this.matchProgression.getIsMatchStarted && (this.matchProgression.matchTimeTotalIncrement % 12 === 0)) {
        this.matchPhaseHandler(this.matchProgression.getPhaseOfAttack, this.confirmedMatchProps.possessionIndexMatchOne);
      };
      this.matchProgression.matchTimeTotalIncrement += 1;
      this.matchProgression.matchTimeTotalIncrement % 60 === 0 ?
        this.matchProgression.matchSecondsVisual = 0
        :
        this.matchProgression.matchSecondsVisual += 1;
      if (this.matchProgression.matchTimeTotalIncrement % 60 === 0) this.matchProgression.matchMinutesVisual += 1;
      if (this.matchProgression.matchTimeTotalIncrement >= this.matchProgression.getMatchFullTimeSeconds) {
        this.matchProgression.setIsMatchStarted = false;
        this.matchProgression.setIsMatchComplete = true;
        clearInterval(this.matchTimeIncrementer);
      }
    }, this.matchProgression.getMatchMiliSecondInterval);
  }

  //$ Main Match Functionality -  
  generateAttackStat() {
    return this.generateValue.genFromAttDefStatMax;
  };
  generateDefenceStat() {
    return this.generateValue.genFromAttDefStatMax;
  };

  matchPhaseHandler(phase: number, teamIndex: number) {
    const updatePossessionStats = (teamIndex: number) => {
      if (teamIndex === 0) this.teamOneStats.totalPossession += 1;
      if (teamIndex === 1) this.teamTwoStats.totalPossession += 1;
    };
    if ((this.matchProgression.matchTimeTotalIncrement >= this.matchProgression.getNinetyMinMark) && !this.matchProgression.getIsMotmAppointed) {
      this.manOfTheMatchHandler();
    };
    if (phase === 1) {
      console.log(`---------- Init Phase Attack -> ${this.confirmedMatchProps.teamSetOne[this.confirmedMatchProps.possessionIndexMatchOne]} ----------`)
      updatePossessionStats(teamIndex);
      this.passesPerPhaseIncrement(teamIndex);
      console.log('%c PASS BY TEAM ', 'color: white; background: evergreen; padding: 4px 8px; border-radius: 10px; font-size: 2rem;', teamIndex);
      this.attackDefenceMatchHandler(this.generateAttackStat(), this.generateDefenceStat());
    } else if (phase === 2) {
      console.log(`---------- Second Phase Attack -> ${this.confirmedMatchProps.teamSetOne[this.confirmedMatchProps.possessionIndexMatchOne]} ----------`)
      updatePossessionStats(teamIndex);
      this.passesPerPhaseIncrement(teamIndex);
      console.log('%c PASS BY TEAM ', 'color: white; background: evergreen; padding: 4px 8px; border-radius: 10px; font-size: 2rem;', teamIndex);
      this.attackDefenceMatchHandler(this.generateAttackStat(), this.generateDefenceStat());
    } else if (phase === 3) {
      console.log(`---------- Final Phase Attack -> ${this.confirmedMatchProps.teamSetOne[this.confirmedMatchProps.possessionIndexMatchOne]} ----------`)
      updatePossessionStats(teamIndex);
      this.passesPerPhaseIncrement(teamIndex);
      console.log('%c PASS BY TEAM ', 'color: white; background: evergreen; padding: 4px 8px; border-radius: 10px; font-size: 2rem;', teamIndex);
      this.attackDefenceMatchHandler(this.generateAttackStat(), this.generateDefenceStat());
    } else {
      console.error('initMatchPhaseHandler Error');
    };
  };

  manOfTheMatchHandler() {
    const topScorerTeamOne = [...this.confirmedMatchProps.generatedTeamOne[0]].sort((a: any, b: any) => a.goals - b.goals).reverse()[0];
    const topScorerTeamTwo = [...this.confirmedMatchProps.generatedTeamTwo[0]].sort((a: any, b: any) => a.goals - b.goals).reverse()[0];
    if (this.confirmedMatchProps.generatedTeamOne[0][0].saves >= topScorerTeamOne.goals) {
      this.confirmedMatchProps.generatedTeamOne[0][0].motm = true;
    } else if (this.confirmedMatchProps.generatedTeamOne[0][0].saves < topScorerTeamOne.goals) {
      this.confirmedMatchProps.generatedTeamOne[0].forEach((i: any) => i.name === topScorerTeamOne.name ? i.motm = true : null);
    } else {
      this.confirmedMatchProps.generatedTeamOne[0][this.generateValue.genFromSingleTeamPlayersAmtMax].motm = true;
    };
    if (this.confirmedMatchProps.generatedTeamTwo[0][0].saves >= topScorerTeamTwo.goals) {
      this.confirmedMatchProps.generatedTeamTwo[0][0].motm = true;
    } else if (this.confirmedMatchProps.generatedTeamTwo[0][0].saves < topScorerTeamTwo.goals) {
      this.confirmedMatchProps.generatedTeamTwo[0].forEach((i: any) => i.name === topScorerTeamTwo.name ? i.motm = true : null);
    } else {
      this.confirmedMatchProps.generatedTeamTwo[0][this.generateValue.genFromSingleTeamPlayersAmtMax].motm = true;
    };
    this.matchProgression.setIsMotmAppointed = true;
    return;
  };


  attackDefenceMatchHandler(attStat: number, defStat: number) {
    console.log(`%c ATT -> ${attStat} DEF ->${defStat} `, 'color: black; background: white; padding: 4px 8px; border-radius: 10px;');
    //$ Attacking Conditionals
    if (attStat > defStat) {
      if (this.matchProgression.getPhaseOfAttack === 3) {
        console.log('----> ATT Progress++ to SHOOT IN THE BOX');
        this.shotFromInTheBox();
        return;
      } else if (this.matchProgression.getPhaseOfAttack === 2) {
        console.log('----> ATT Progress++');
        if (this.shotFromOutTheBox()) {
          console.log(`%c IS shot from out the box `, 'color: black; background: yellowgreen; padding: 4px 8px; border-radius: 10px;');
          this.isGoalFromDistance();
          return;
        } else {
          const genCornerCode = this.generateValue.genFromRegisterCornerMax;

          if (this.eventCodes.getCornerCodes.includes(genCornerCode)) {
            console.log('!!!!!! CORNER + - ', this.eventCodes.getCornerCodes.includes(genCornerCode), genCornerCode, ' - code generated')
            if (this.confirmedMatchProps.possessionIndexMatchOne === 0)
              this.cornersStatIncrement(0);
            if (this.confirmedMatchProps.possessionIndexMatchOne === 1)
              this.cornersStatIncrement(1);
            console.log(`%c REGULAR CORNER ++ for ${this.confirmedMatchProps.teamSetOne[this.confirmedMatchProps.possessionIndexMatchOne]} `, 'color: white; background: olive; padding: 4px 8px; border-radius: 10px;');
          };
          this.matchProgression.setPhaseOfAttack = this._phaseValue += 1;
          return
        }
      } else if (this.matchProgression.getPhaseOfAttack === 1) {
        console.log('----> ATT Progress++');
        this.matchProgression.setPhaseOfAttack = this._phaseValue += 1;
        return
      } else {
        console.log('%c GOT FUCKIN WREKCED ', 'color: white; background: red; padding: 4px 8px; border-radius: 10px;', this._phaseValue);
      }
    }

    //$ Defensive Conditionals
    if (defStat >= attStat) {

      const initVARCheck = () => { return defStat - attStat <= 2 };
      console.log('%c VAR CHECK ', 'color: white; background: red; padding: 4px 8px; border-radius: 10px;', defStat - attStat, defStat - attStat <= 2);
      if (this.matchProgression.getPhaseOfAttack === 3 && initVARCheck()) {
        const genPenaltyCode = this.generateValue.genFromPenaltyCallMax;

        if (this.eventCodes.getInTheBoxRedCardCodes.includes(genPenaltyCode)) {
          const isOnTarget = this.generateValue.genFromBinaryOutput;
          if (this.confirmedMatchProps.possessionIndexMatchOne === 0 && !this.eventCodes.getUsedRedCardCodes.includes(genPenaltyCode)) {
            console.log('!!!!!! Used RED - ', this.eventCodes.getUsedRedCardCodes.includes(genPenaltyCode), genPenaltyCode)
            console.log('!!!!!! Used RED - ', this.eventCodes.getUsedRedCardCodes, genPenaltyCode, ' - code generated', genPenaltyCode)
            if (this.generateValue.genFromBinaryOutput) {
              console.log(`%c PENALTY SAVED, NO GOAL FOR - ${this.confirmedMatchProps.teamSetOne[this.confirmedMatchProps.possessionIndexMatchOne]}`, 'color: white; background: deeppink; padding: 4px 8px; border-radius: 10px;', 'CODE: ', genPenaltyCode);
              this.shotOnTargetStatIncrement(isOnTarget, this.confirmedMatchProps.possessionIndexMatchOne);
              this.keeperSavesStatIncrement(isOnTarget, this.confirmedMatchProps.possessionIndexMatchOne);
              this.assignSaveToPlayerHandler(1);
            } else {
              console.log(`%c GOAL FROM PENALTY FOR - ${this.confirmedMatchProps.teamSetOne[this.confirmedMatchProps.possessionIndexMatchOne]} `, 'color: black; background: gold; padding: 4px 8px; border-radius: 10px;', 'CODE: ', genPenaltyCode);
              this.goalsStatIncrement(0);
              this.shotOnTargetStatIncrement(1, 0);
              this.assignInBoxGoalToPlayerHandler(0, false, true)
            };
            this.assignRedCardToPlayerHandler(1);
            this.redCardsStatIncrement(1);
          };
          if (this.confirmedMatchProps.possessionIndexMatchOne === 1 && !this.eventCodes.getUsedRedCardCodes.includes(genPenaltyCode)) {
            console.log('!!!!!! Used RED - ', this.eventCodes.getUsedRedCardCodes.includes(genPenaltyCode), genPenaltyCode)
            console.log('!!!!!! Used RED - ', this.eventCodes.getUsedRedCardCodes, genPenaltyCode, ' - code generated', genPenaltyCode)
            if (this.generateValue.genFromBinaryOutput) {
              console.log(`%c PENALTY SAVED, NO GOAL FOR - ${this.confirmedMatchProps.teamSetOne[this.confirmedMatchProps.possessionIndexMatchOne]}`, 'color: white; background: deeppink; padding: 4px 8px; border-radius: 10px;', 'CODE: ', genPenaltyCode);
              this.shotOnTargetStatIncrement(1, this.confirmedMatchProps.possessionIndexMatchOne);
              this.keeperSavesStatIncrement(1, this.confirmedMatchProps.possessionIndexMatchOne);
              this.assignSaveToPlayerHandler(0);
            } else {
              console.log(`%c GOAL FROM PENALTY FOR - ${this.confirmedMatchProps.teamSetOne[this.confirmedMatchProps.possessionIndexMatchOne]} `, 'color: black; background: gold; padding: 4px 8px; border-radius: 10px;', 'CODE: ', genPenaltyCode);
              this.goalsStatIncrement(1);
              this.shotOnTargetStatIncrement(1, 1);
              this.assignInBoxGoalToPlayerHandler(1, false, true)
            };
            this.assignRedCardToPlayerHandler(0);
            this.redCardsStatIncrement(0);
          };
          this.eventCodes.setUsedRedCardCodes = genPenaltyCode;
          console.log('!!!!!! Used RED - ', this.eventCodes.getUsedRedCardCodes.includes(genPenaltyCode), genPenaltyCode, ' - code generated')
        };
        this.matchProgression.setPhaseOfAttack = this._phaseValue = 1;
        this.confirmedMatchProps.possessionIndexMatchOne = Number(!this.confirmedMatchProps.possessionIndexMatchOne);
        // Accounting for misplaced pass resulting in giving possession
        if(!initVARCheck() && this.generateValue.genFromBinaryOutput) this.successfulTackleStatIncrement(this.confirmedMatchProps.possessionIndexMatchOne);
        console.log('%c SUCCESS TACKLE BY', 'color: white; background: maroon; padding: 4px 8px; border-radius: 10px; font-size: 2rem;', this.confirmedMatchProps.possessionIndexMatchOne);
        return;
      };

      if ((this.matchProgression.getPhaseOfAttack === 1 || this.matchProgression.getPhaseOfAttack === 2)
        && this.confirmedMatchProps.possessionIndexMatchOne === 1 && initVARCheck() && this.refFoulCheck()) {
        console.log('%c YELLOW CARD!!! ', 'color: black; background: yellow; padding: 4px 8px; border-radius: 10px;');
        this.yellowCardsStatIncrement(0);
        this.assignYellowCardToPlayerHandler(0)
        return
      } else if ((this.matchProgression.getPhaseOfAttack === 1 || this.matchProgression.getPhaseOfAttack === 2)
        && this.confirmedMatchProps.possessionIndexMatchOne === 0 && initVARCheck() && this.refFoulCheck()) {
        console.log('%c YELLOW CARD!!! ', 'color: black; background: yellow; padding: 4px 8px; border-radius: 10px;');
        this.yellowCardsStatIncrement(1);
        this.assignYellowCardToPlayerHandler(1)
        return
      } else {
        console.log('%c Game continues...... ', 'color: #333; background: snow; padding: 4px 8px; border-radius: 10px;');
        this.matchProgression.setPhaseOfAttack = this._phaseValue = 1;
        this.confirmedMatchProps.possessionIndexMatchOne = Number(!this.confirmedMatchProps.possessionIndexMatchOne);
        this.successfulTackleStatIncrement(this.confirmedMatchProps.possessionIndexMatchOne);
        console.log('%c SUCCESS TACKLE BY', 'color: white; background: maroon; padding: 4px 8px; border-radius: 10px; font-size: 2rem;', this.confirmedMatchProps.possessionIndexMatchOne);
        return;
      };
    };
  };

  //$ FOUL CHECK 
  refFoulCheck() {
    const genYellowCardCode = this.generateValue.genFromYellowCardMax;
    const yellowCardResult = this.eventCodes.getYellowCardCodes.includes(genYellowCardCode);

    /// Return to void foul checks if still within grace period (First 10min)
    if (this.matchProgression.matchTimeTotalIncrement <= this.matchProgression.getRefFoulGracePeriod) return;
    console.log(`%c YELLOW CARD CHECK`, 'color: white; background: indigo; padding: 4px 8px; border-radius: 10px;', 'CODE: ', genYellowCardCode, "IS YELLOW CARD?", yellowCardResult);
    if (yellowCardResult && !this.eventCodes.getUsedYellowCardCodes.includes(genYellowCardCode)) {
      console.log('!!!!!! Used YELLOW - ', this.eventCodes.getUsedYellowCardCodes.includes(genYellowCardCode), genYellowCardCode, ' - code generated')
      this.eventCodes.setUsedYellowCardCodes = genYellowCardCode;
      console.log('??????? DID IT PUSH - ', this.eventCodes.getUsedYellowCardCodes, genYellowCardCode, ' - code generated')
      return yellowCardResult;
    } else {
      return false;
    };
  };

  //$ OUT OF BOX SHOT 
  shotFromOutTheBox() {
    /// 5 OoB spots to shoot from * 11 players
    const genLongShotCode = this.generateValue.genFromOutOfBoxMax;
    console.log('%c GEN GEN LONG LONG ', 'color: yellow; background: cyan; padding: 4px 8px; border-radius: 10px;', genLongShotCode);
    let longShotResult = this.eventCodes.getLongShotCodes.includes(genLongShotCode);
    console.log('!!!!!! LONG SHOT CODE - ', this.eventCodes.getLongShotCodes, genLongShotCode, ' - code generated')
    console.log('?????? LONG SHOT CODE - ', this.eventCodes.getLongShotCodes.includes(genLongShotCode), genLongShotCode, ' - code generated')
    console.log('----> Is shot from OUT OF THE BOX ??? ', longShotResult);
    return longShotResult;
  };

  //$ GOAL SUCCESS FROM DISTANCE 
  isGoalFromDistance() {
    const genDistantGoalCode = this.generateValue.genFromGoalFromCornerMax;
    if (this.eventCodes.getGoalFromCornerCodes.includes(genDistantGoalCode)) {
      console.log('!!!!!! GOAL CORNER GET CHECK - ', this.eventCodes.getGoalFromCornerCodes.includes(genDistantGoalCode), genDistantGoalCode, ' - code generated')
      if (this.confirmedMatchProps.possessionIndexMatchOne === 0) {
        this.cornersStatIncrement(0);
        this.goalsFromCornerStatIncrement(0)
        this.goalsStatIncrement(0);
        this.shotOnTargetStatIncrement(1, 0);
        this.assignInBoxGoalToPlayerHandler(0, true, false);
      } else if (this.confirmedMatchProps.possessionIndexMatchOne === 1) {
        this.cornersStatIncrement(1);
        this.goalsFromCornerStatIncrement(1)
        this.goalsStatIncrement(1);
        this.shotOnTargetStatIncrement(1, 1);
        this.assignInBoxGoalToPlayerHandler(1, true, false);
      };
      console.log(`%c GOAL FROM CORNER for ${this.confirmedMatchProps.teamSetOne[this.confirmedMatchProps.possessionIndexMatchOne]}`, 'color: black; background: seagreen; padding: 4px 8px; border-radius: 10px;', 'code: ', genDistantGoalCode);
    } else {
      if (this.confirmedMatchProps.possessionIndexMatchOne === 0) {
        this.goalsStatIncrement(0);
        this.shotOnTargetStatIncrement(1, this.confirmedMatchProps.possessionIndexMatchOne);
        this.assignOutBoxGoalToPlayerHandler(0, false, false);
      } else if (this.confirmedMatchProps.possessionIndexMatchOne === 1) {
        this.goalsStatIncrement(1);
        this.shotOnTargetStatIncrement(1, this.confirmedMatchProps.possessionIndexMatchOne);
        this.assignOutBoxGoalToPlayerHandler(1, false, false);
      }
      console.log(`%c GOAL FROM OOB for ${this.confirmedMatchProps.teamSetOne[this.confirmedMatchProps.possessionIndexMatchOne]}`, 'color: black; background: yellowgreen; padding: 4px 8px; border-radius: 10px;', 'code: ', genDistantGoalCode);
    };
    this.matchProgression.setPhaseOfAttack = this._phaseValue = 1;
    this.confirmedMatchProps.possessionIndexMatchOne = Number(!this.confirmedMatchProps.possessionIndexMatchOne)
    return;
  };

  //$ GOAL SUCCESS FROM INSIDE THE BOX 
  shotFromInTheBox() {
    const genGoalCode = this.generateValue.genFromGoalChanceMax;
    if (this.confirmedMatchProps.possessionIndexMatchOne === 0 && this.eventCodes.getGoalCodes.includes(genGoalCode)) {
      this.goalsStatIncrement(0);
      this.shotOnTargetStatIncrement(1, this.confirmedMatchProps.possessionIndexMatchOne);
      this.assignInBoxGoalToPlayerHandler(0, false, false)
      console.log(`%c GOOOOOOOOOOAL FOOOOR ${this.confirmedMatchProps.teamSetOne[this.confirmedMatchProps.possessionIndexMatchOne]}`, 'color: white; background: mediumvioletred; padding: 4px 8px; border-radius: 10px;', 'CODE: ', genGoalCode);
    } else if (this.confirmedMatchProps.possessionIndexMatchOne === 1 && this.eventCodes.getGoalCodes.includes(genGoalCode)) {
      this.goalsStatIncrement(1);
      this.shotOnTargetStatIncrement(1, this.confirmedMatchProps.possessionIndexMatchOne);
      this.assignInBoxGoalToPlayerHandler(1, false, false)
      console.log(`%c GOOOOOOOOOOAL FOOOOR ${this.confirmedMatchProps.teamSetOne[this.confirmedMatchProps.possessionIndexMatchOne]}`, 'color: white; background: mediumvioletred; padding: 4px 8px; border-radius: 10px;', 'CODE: ', genGoalCode);
    } else {
      const isOnTarget = this.generateValue.genFromBinaryOutput
      this.keeperSavesStatIncrement(isOnTarget, this.confirmedMatchProps.possessionIndexMatchOne);
      this.shotOnTargetStatIncrement(isOnTarget, this.confirmedMatchProps.possessionIndexMatchOne);
      console.log(`%c GOALKEEPER SAVED THE SHOT FROM - ${this.confirmedMatchProps.teamSetOne[this.confirmedMatchProps.possessionIndexMatchOne]}`, 'color: #333; background: cyan; padding: 4px 8px; border-radius: 10px;', 'CODE: ', genGoalCode);
    };
    this.matchProgression.setPhaseOfAttack = this._phaseValue = 1;
    this.confirmedMatchProps.possessionIndexMatchOne = Number(!this.confirmedMatchProps.possessionIndexMatchOne)
    return;
  };

  audioHandler() {
    const refStartsGame = new Audio('../../../assets/audio/ref-game-start.mp3');
    refStartsGame.play();
  };

  assignInBoxGoalToPlayerHandler(teamIndex: number, inBoxFromDistance: boolean, isPenalty: boolean) {
    const player = this.randomNumericGoalAssignment(inBoxFromDistance, isPenalty);
    if (!this.isPlayerAlreadyRedCardedHandler(player)) {
      if (!teamIndex) {
        this.confirmedMatchProps.generatedTeamOne[0][player].goals += 1;
        console.log('%c ITB SCORER ', 'color: white; background: red; padding: 4px 8px; border-radius: 10px; font-size: 1.25rem', this.confirmedMatchProps.generatedTeamOne[0][player]);
      } else {
        this.confirmedMatchProps.generatedTeamTwo[0][player].goals += 1;
        console.log('%c ITB SCORER ', 'color: white; background: red; padding: 4px 8px; border-radius: 10px; font-size: 1.25rem', this.confirmedMatchProps.generatedTeamTwo[0][player]);
      };
    } else {
      this.assignInBoxGoalToPlayerHandler(teamIndex, inBoxFromDistance, isPenalty);
    }
  };

  assignSaveToPlayerHandler(teamIndex: number) {
    if (!teamIndex) {
      this.confirmedMatchProps.generatedTeamOne[0][this.positionIndex.getKeeper].saves += 1;
    } else {
      this.confirmedMatchProps.generatedTeamTwo[0][this.positionIndex.getKeeper].saves += 1;
    };
  };

  shotOnTargetStatIncrement(isOnTarget: number, teamIndex: number) {
    if (isOnTarget) {
      if (teamIndex === 0) {
        ++this.teamOneStats.shotsOnTarget;
        console.log('%c SHOT ON TARGET +++ ', 'color: black; background: wheat; padding: 4px 8px; border-radius: 10px;', teamIndex);
      } else if (teamIndex === 1) {
        ++this.teamTwoStats.shotsOnTarget;
        console.log('%c SHOT ON TARGET +++ ', 'color: black; background: wheat; padding: 4px 8px; border-radius: 10px;', teamIndex);
      };
    };
  };

  keeperSavesStatIncrement(isOnTarget: number, teamIndex: number) {
    if (isOnTarget) {
      if (teamIndex === 0) {
        ++this.teamTwoStats.keeperSaves;
        console.log('%c SAVE++ K2', 'color: white; background: indigo; padding: 4px 8px; border-radius: 10px;', teamIndex);
      } else if (teamIndex === 1) {
        ++this.teamOneStats.keeperSaves;
        console.log('%c SAVE++ K1', 'color: white; background: indigo; padding: 4px 8px; border-radius: 10px;', teamIndex);
      };
    };
  };

  redCardsStatIncrement(teamIndex: number) {
    if (teamIndex === 0) {
      ++this.teamOneStats.redCards;
    } else if (teamIndex === 1) {
      ++this.teamTwoStats.redCards;
    };
  };

  yellowCardsStatIncrement(teamIndex: number) {
    if (teamIndex === 0) {
      ++this.teamOneStats.yellowCards;
    } else if (teamIndex === 1) {
      ++this.teamTwoStats.yellowCards;
    };
  };

  cornersStatIncrement(teamIndex: number) {
    if (teamIndex === 0) {
      ++this.teamOneStats.corners;
    } else if (teamIndex === 1) {
      ++this.teamTwoStats.corners;
    };
  };

  goalsStatIncrement(teamIndex: number){
    if (teamIndex === 0) {
      ++this.teamOneStats.goals;
    } else if (teamIndex === 1) {
      ++this.teamTwoStats.goals;
    };
  }

  goalsFromCornerStatIncrement(teamIndex: number){
    if (teamIndex === 0) {
      ++this.teamOneStats.goalFromCorner;
    } else if (teamIndex === 1) {
      ++this.teamTwoStats.goalFromCorner;
    };
  }

  successfulPassStatIncrement(teamIndex: number){
    if (teamIndex === 0) {
      ++this.teamOneStats.goalFromCorner;
    } else if (teamIndex === 1) {
      ++this.teamTwoStats.goalFromCorner;
    };
  }

  passesPerPhaseIncrement(teamIndex: number){
    if (teamIndex === 0) {
      this.teamOneStats.totalPasses += this.generateValue.genFromTikiTakaThree;
    } else if (teamIndex === 1) {
      this.teamTwoStats.totalPasses += this.generateValue.genFromTikiTakaThree;
    };
  }

  successfulTackleStatIncrement(teamIndex: number){
    if (teamIndex === 0) {
      ++this.teamOneStats.successfulTackles;
    } else if (teamIndex === 1) {
      ++this.teamTwoStats.successfulTackles;
    };
  }

  randomNumericGoalAssignment(inBoxFromDistance: boolean, isPenalty: boolean) {
    let playerTargets: number[] = [];
    if (inBoxFromDistance) {
      playerTargets = this.positionIndex.getAllOutOfBoxPlayers;
    } else if (isPenalty) {
      playerTargets = this.positionIndex.getAttMidAndStriker;
    } else {
      playerTargets = this.positionIndex.getMidAndAttMidAndStriker;
    };

    const goalScorer = playerTargets[Util.returnRandomValueFromArg(playerTargets.length)];
    return goalScorer;
  }


  assignOutBoxGoalToPlayerHandler(teamIndex: number, inBoxFromDistance: boolean, isPenalty: boolean) {
    const player = this.randomNumericGoalAssignment(inBoxFromDistance, isPenalty);
    if (!this.isPlayerAlreadyRedCardedHandler(player)) {
      if (!teamIndex) {
        this.confirmedMatchProps.generatedTeamOne[0][player].goals += 1;
        console.log('%c OOB SCORER ', 'color: white; background: orange; padding: 4px 8px; border-radius: 10px; font-size: 1.25rem', this.confirmedMatchProps.generatedTeamOne[0][player]);
      } else {
        this.confirmedMatchProps.generatedTeamTwo[0][player].goals += 1;
        console.log('%c OOB SCORER ', 'color: white; background: orange; padding: 4px 8px; border-radius: 10px; font-size: 1.25rem', this.confirmedMatchProps.generatedTeamTwo[0][player]);
      };
    } else {
      this.assignOutBoxGoalToPlayerHandler(teamIndex, inBoxFromDistance, isPenalty);
    };
  };

  assignYellowCardToPlayerHandler(teamIndex: number) {
    const player = this.randomFoulAssignmentHandler();
    if (!this.isPlayerAlreadyRedCardedHandler(player)) {
      if (!teamIndex) {
        this.confirmedMatchProps.generatedTeamOne[0][player].yellowCards += 1;
        console.log('%c YELLOW CARD FOR ', 'color: white; background: orange; padding: 4px 8px; border-radius: 10px; font-size: 1.25rem', this.confirmedMatchProps.generatedTeamOne[0][player]);
        if (this.confirmedMatchProps.generatedTeamOne[0][player].yellowCards === 2) {
          this.confirmedMatchProps.generatedTeamOne[0][player].redCard = 1;
          this.redCardsStatIncrement(0);
        }
      } else {
        this.confirmedMatchProps.generatedTeamTwo[0][player].yellowCards += 1;
        console.log('%c YELLOW CARD FOR ', 'color: white; background: orange; padding: 4px 8px; border-radius: 10px; font-size: 1.25rem', this.confirmedMatchProps.generatedTeamTwo[0][player]);
        if (this.confirmedMatchProps.generatedTeamTwo[0][player].yellowCards === 2) {
          this.confirmedMatchProps.generatedTeamTwo[0][player].redCard = 1;
          this.redCardsStatIncrement(1);
        }
      };
    } else {
      this.assignYellowCardToPlayerHandler(teamIndex);
    }
  };

  assignRedCardToPlayerHandler(teamIndex: number) {
    const player = this.randomFoulAssignmentHandler();
    console.log('%c PLAYER NUMBER ', 'color: white; background: orangered; padding: 4px 8px; border-radius: 10px; font-size: 1.25rem;', player);
    if (!this.isPlayerAlreadyRedCardedHandler(player)) {
      if (!teamIndex) {
        this.confirmedMatchProps.generatedTeamOne[0][player].redCard += 1;
        console.log('%c RED CARD FOR ', 'color: white; background: orange; padding: 4px 8px; border-radius: 10px; font-size: 1.25rem', this.confirmedMatchProps.generatedTeamOne[0][player]);
      } else {
        this.confirmedMatchProps.generatedTeamTwo[0][player].redCard += 1;
        console.log('%c RED CARD FOR ', 'color: white; background: orange; padding: 4px 8px; border-radius: 10px; font-size: 1.25rem', this.confirmedMatchProps.generatedTeamTwo[0][player]);
      };
    } else {
      this.assignRedCardToPlayerHandler(teamIndex);
    }
  };

  randomFoulAssignmentHandler() {
    const randomPlayerFromEleven = this.generateValue.genFromSingleTeamPlayersAmtMax;
    let suspectPlayers: number[] = [];
    if (randomPlayerFromEleven >= 8) {
      suspectPlayers = this.positionIndex.getAllOutOfBoxPlayers;
    } else {
      console.log()
      suspectPlayers = this.positionIndex.getDefAndMid;
    };
    const receivingPlayer = suspectPlayers[Util.returnRandomValueFromArg(suspectPlayers.length)];
    return receivingPlayer;
  };

  isPlayerAlreadyRedCardedHandler(player: number) {
    console.log('%c IS THIS PLAYER RC BRUH ', 'color: indigo; border: 5px solid indigo; background: ivory; padding: 4px 8px; border-radius: 10px;', 'NUM---', player,);
    console.log(this.confirmedMatchProps.generatedTeamOne[0][player]);
    console.log(this.confirmedMatchProps.generatedTeamTwo[0][player]);
    let isRedCarded = false;
    this.confirmedMatchProps.generatedTeamOne[0][player].redCard ? isRedCarded = true : isRedCarded;
    this.confirmedMatchProps.generatedTeamTwo[0][player].redCard ? isRedCarded = true : isRedCarded;
    console.log('%c IS THE PLAYER RED CARDED ', 'color: white; background: salmon; padding: 4px 8px; border-radius: 10px; font-size: 1.25rem;', isRedCarded);
    return isRedCarded;
  };

  substitutionHandler(props: { id: number, teamId: number }) {
    let replacementPosition: number;
    let playerSubbedOut;
    let playerSubbedIn;

    replacementPosition = this.positionIndex.getValidSubPositions[props.id][Util.returnRandomValueFromArg(
      this.positionIndex.getValidSubPositions[props.id].length
    )];

    const isEligibleSubTeamOne = !this.confirmedMatchProps.generatedTeamOne[1][props.id].subbed;
    const isEligibleSubTeamTwo = !this.confirmedMatchProps.generatedTeamTwo[1][props.id].subbed;

    if (!this.isPlayerAlreadyRedCardedHandler(replacementPosition) && this.matchProgression.getIsMatchStarted) {
      if (props.teamId === 0 && isEligibleSubTeamOne && (this.eventCodes.getSubLimit > this.teamOneStats.substitutions)) {
        playerSubbedOut = this.confirmedMatchProps.generatedTeamOne[0].splice(replacementPosition, 1);
        playerSubbedIn = this.confirmedMatchProps.generatedTeamOne[1].splice(props.id, 1);
        playerSubbedOut[0].subbed = true;
        playerSubbedOut[0].captain ? this.confirmedMatchProps.generatedTeamOne[0][0].captain = true : null;
        playerSubbedIn[0].subbed = true;
        this.confirmedMatchProps.generatedTeamOne[0].splice(replacementPosition, 0, playerSubbedIn[0]);
        this.confirmedMatchProps.generatedTeamOne[1].splice(props.id, 0, playerSubbedOut[0]);
        this.teamOneStats.substitutions += 1;
        console.log('%c PLAYER SUBBED IN ', 'color: red; background: teal; padding: 4px 8px; border-radius: 10px;', playerSubbedIn, ' - IN OUT - ', playerSubbedOut);
      } else if (props.teamId === 1 && isEligibleSubTeamTwo && (this.eventCodes.getSubLimit > this.teamTwoStats.substitutions)) {
        playerSubbedOut = this.confirmedMatchProps.generatedTeamTwo[0].splice(replacementPosition, 1);
        playerSubbedIn = this.confirmedMatchProps.generatedTeamTwo[1].splice(props.id, 1);
        playerSubbedOut[0].subbed = true;
        playerSubbedOut[0].captain ? this.confirmedMatchProps.generatedTeamTwo[0][0].captain = true : null;
        playerSubbedIn[0].subbed = true;
        this.confirmedMatchProps.generatedTeamTwo[0].splice(replacementPosition, 0, playerSubbedIn[0]);
        this.confirmedMatchProps.generatedTeamTwo[1].splice(props.id, 0, playerSubbedOut[0]);
        this.teamTwoStats.substitutions += 1;
        console.log('%c PLAYER SUBBED IN ', 'color: red; background: teal; padding: 4px 8px; border-radius: 10px;', playerSubbedIn, ' - IN OUT - ', playerSubbedOut);
      } else {
        return;
      }
    }
  }

  ngOnDestroy(){
    clearInterval(this.matchTimeIncrementer);
  };
}
