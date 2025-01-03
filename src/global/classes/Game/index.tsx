import uuid from 'react-native-uuid';
import { IGame, IPlatform, IStatus } from '../../types';

export default class Game {
  private id: string;
  private create_date: Date;
  private name: string;
  private platform: IPlatform = 'Outro';
  private play_time: number = 0;
  private status?: IStatus;
  private interest_score?: number; // Eixo x = interessancia
  private quality_score?: number; // Eixo y = qualidade (1 representando 'J' e 10 representando 'A')
  private finish_date?: Date;

  constructor(game: IGame) {
    if (!game.name.trim()) {
      throw new Error("The name cannot be empty");
    }

    this.name = game.name;
    this.id = uuid.v4(); 
    this.create_date = new Date();

    if(game.platform) this.platform = game.platform;
    if(game.play_time) this.play_time = game.play_time;

    this.status = game.status;
    this.interest_score = game.interest_score;
    this.quality_score = game.quality_score;
    this.finish_date = game.finish_date;
  }

  // getters
  public get getId(): string {
    return this.id;
  }
  public get getName(): string {
    return this.name;
  }
  public get getCreateDate(): Date {
    return this.create_date;
  }
  public get getPlatform(): IPlatform {
    return this.platform;
  }
  public get getStatus(): string{
    return this.status || 'N/A';
  }
  public get getInterestScore(): number | undefined  {
    return this.interest_score;
  }
  public get getQualityScore(): number | undefined  {
    return this.quality_score;
  }
  public get getPlayTime(): number {
    return this.play_time;
  }
  public get getFinishDate(): Date | undefined {
    return this.finish_date;
  }

  //setters
  public setName(name: string): void {
    if (!name.trim()) {
      throw new Error("The name cannot be empty");
    }

    this.name = name;
  }
  public setPlatform(platform: IPlatform): void {
    this.platform = platform;
  }
  public setStatus(status: IStatus): void {
    this.status = status;
  }
  public setInterestScore(score: number): void {
    if (score < 1 || score > 10) {
      throw new Error("Invalid interest score");
    }

    this.interest_score = score;
  }
  public setQualityScore(score: number): void {
    if (score < 1 || score > 10) {
      throw new Error("Invalid quaity score");
    }

    this.quality_score = score;
  }
  public setPlayTime(playTime: number): void {
    this.play_time = playTime;
  }
  public setFinishDate(date: Date): void {
    this.finish_date = date;
  }

  // methods
  public getPlaytimeInHours(): number {
    return Math.floor(this.play_time / 60);
  }
};
