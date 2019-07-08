import { Component, OnInit } from '@angular/core';
import { P4PodcastService } from 'src/app/services/p4podcast.service';
import { PodcastModel } from 'src/app/models/podcast.model';

@Component({
  selector: 'app-podcast-list',
  templateUrl: './podcast-list.component.html',
  styleUrls: ['./podcast-list.component.scss']
})
export class PodcastListComponent implements OnInit {

  podcastList: PodcastModel[] = [];

  constructor(private podcastService: P4PodcastService) {}
  ngOnInit() {
    this.getPodcasts();
  }

  getPodcasts() {
    this.podcastService.getAllPodcasts(432).subscribe((podcasts: PodcastModel[]) => {
      this.podcastList = podcasts.reverse();
    });
  }
}
