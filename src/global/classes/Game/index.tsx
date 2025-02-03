import uuid from 'react-native-uuid';
import { IGame, IPlatform, IScore, IStatus } from '../../types';

export default class Game {
  private id: string;
  private create_date: string;
  private name: string;
  private platform: IPlatform = 'Outro';
  private play_time: number = 0;
  private status?: IStatus;
  private interest_score?: number; // Eixo x = interessancia
  private quality_score?: number; // Eixo y = qualidade (1 representando 'J' e 10 representando 'A')
  private finish_date?: string;

  private sync_game?: string;
  private cover?: string;

  constructor(game: IGame) {
    if (!game.name.trim()) {
      throw new Error("The name cannot be empty");
    }

    this.name = game.name;
    this.id = game.id || uuid.v4(); 
    this.create_date = game.create_date || (new Date()).toString();

    if(game.platform) this.platform = game.platform;
    if(game.play_time) this.play_time = game.play_time;

    this.status = game.status;
    this.interest_score = game.interest_score;
    this.quality_score = game.quality_score;
    this.finish_date = game.finish_date;
    this.sync_game = game.sync_game;
    this.cover = game.cover;
  }

  // getters
  public get getId(): string { return this.id }
  public get getName(): string { return this.name }
  public get getCreateDate(): string { return this.create_date }
  public get getPlatform(): IPlatform { return this.platform }
  public get getStatus(): IStatus | undefined{ return this.status }
  public get getInterestScore(): number | undefined  { return this.interest_score }
  public get getQualityScore(): number | undefined  { return this.quality_score }
  public get getPlayTime(): number { return this.play_time }
  public get getFinishDate(): string | undefined { return this.finish_date }
  public get getSyncGame(): string | undefined { return this.sync_game }
  public get getCover(): string | undefined { return this.cover }
  //setters
  public set setPlatform(platform: IPlatform) { this.platform = platform }
  public set setStatus(status: IStatus) { this.status = status }
  public set setPlayTime(playTime: number){ this.play_time = playTime }
  public set setFinishDate(date: string){ this.finish_date = date }
  public set setSyncGame(sync_game: string) { this.sync_game = sync_game }
  public set setName(name: string) {
    if (!name.trim()) {
      throw new Error("The name cannot be empty");
    }

    this.name = name;
  }
  public set setInterestScore(score: number) {
    if (score < 1 || score > 10) {
      throw new Error("Invalid interest score");
    }

    this.interest_score = score;
  }
  public set setQualityScore(score: number) {
    if (score < 1 || score > 10) {
      throw new Error("Invalid quaity score");
    }

    this.quality_score = score;
  }

  // methods
  public getAllAtributes(): IGame {
    return {
      id: this.id,
      create_date: this.create_date,
      name: this.name,
      platform: this.platform,
      status: this.status,
      interest_score: this.interest_score,
      quality_score: this.quality_score,
      play_time: this.play_time,
      finish_date: this.finish_date,
    };
  }
  public getPlaytimeInHours(): number {
    return Math.floor(this.play_time / 60);
  }
  public getTotalPlaytime(): string {
    const hours = Math.floor(this.play_time / 60);
    const minutes = this.play_time%60;

    return `${hours} horas e ${minutes} minutos`;
  }
  public getScoreQuadrant(): IScore | undefined {
    if (this.quality_score === undefined || this.interest_score === undefined) {
      return undefined;
    }
    
    const goodQuality = (this.quality_score > 5);
    const goodInterest = (this.interest_score > 5);

    if (goodQuality && goodInterest) {
      return 'Bom';
    } else if (!goodQuality && !goodInterest) {
      return 'Ruim';
    } else {
      return 'Mediano';
    }
  }
  public getOverallScore(): string {
    if (this.quality_score === undefined || this.interest_score === undefined) {
      return 'N/A';
    }
    
    let score = '';
  
    const letters = ['J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];
    score = letters[this.quality_score - 1];
    score += this.interest_score.toString();
  
    return score;
  }
};
