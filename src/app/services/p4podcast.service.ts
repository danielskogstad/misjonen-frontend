import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {PodcastModel} from '../models/podcast.model';
import { Observable, ObservableInput, EMPTY } from 'rxjs';
import { expand, reduce } from 'rxjs/operators';

@Injectable()
export class P4PodcastService {

  constructor(private http: HttpClient) {}

  getPodcasts(sectionId: number, pageNumber: number): Observable<PodcastModel[]> {
    const params = this.getPodcastsUrlParams(sectionId, pageNumber);
    return this.http.get<PodcastModel[]>(environment.p4podcastUrl, { params });
  }

  getPodcastsUrlParams(sectionId: number, pageNumber: number) {
    const params: any = {};
    params.sectionId = sectionId;
    params.pageNumber = pageNumber;
    return params;
  }

  getAllPodcasts(sectionId: number) {
    let pageNumber = 1;
    return this.getPodcasts(sectionId, pageNumber).pipe(
      expand((value: PodcastModel[], index: number): any => {
        return value.length > 0 ? this.getPodcasts(sectionId, pageNumber++) : EMPTY;
      }),
      reduce((acc: PodcastModel[], data) => {
        return acc.concat(data);
      })
    );
  }
}
