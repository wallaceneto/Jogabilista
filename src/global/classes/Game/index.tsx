import uuid from 'react-native-uuid';
import { useContext } from 'react';
import { ThemeContext } from '../../../storage/context';
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
  public get getStatus(): IStatus | 'Não informado' { return this.status || 'Não informado' }
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
  public getPlaytimeInHours(): string {
    const hours = Math.floor(this.play_time / 60);
    const plural = hours > 1 ? 's' : '';

    return `${hours} hora${plural}`;
  }
  public getPlaytimeInMinutes(): string {
    const minutes = this.play_time%60;
    const plural = minutes > 1 ? 's' : '';

    return `${minutes} minuto${plural}`;
  }
  public getTotalPlaytime(): string {
    const time = this.play_time;

    if (time === 0) return 'não jogado';
    
    let totalPlaytime = '';

    if (time < 60) {
      totalPlaytime = this.getPlaytimeInMinutes();
    } else {
      totalPlaytime = this.getPlaytimeInHours();
      if (time%60 > 0) {
        totalPlaytime += ' e ' + this.getPlaytimeInMinutes();
      }
    }

    return totalPlaytime;
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
  public getQualityLetter(): string {
    if (this.quality_score === undefined) return 'N/A';

    const letters = ['J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];
    return letters[this.quality_score - 1];
  }
  public getOverallScore(): string {
    if (this.quality_score === undefined || this.interest_score === undefined) {
      return 'N/A';
    }
    
    return this.getQualityLetter() + this.interest_score.toString();
  }
};
