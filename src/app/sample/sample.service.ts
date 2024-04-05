import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, firstValueFrom, Observable, tap} from 'rxjs';
import { environment } from "../../environments/environment";
import {Sample} from "./sample.model";

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  private readonly _sampleSource = new BehaviorSubject<Sample[]>([]);
  public readonly samples$ = this._sampleSource.asObservable();

  backendUrl: string;

  constructor(private httpClient: HttpClient) {
    this.backendUrl = `${environment.baseUrl}/api/sample`;
  }

  async loadSamplesAsync() {
    let samples = await firstValueFrom(this.httpClient.get<Sample[]>(this.backendUrl));
    this._sampleSource.next(samples)
  }

  async addSampleAsync(sample: Sample) {
    await firstValueFrom(this.httpClient.post(this.backendUrl, sample));
  }
}
