import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../model/face-snap';
import { DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [NgStyle, NgClass, UpperCasePipe, DatePipe],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss',
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  is_liked!: boolean;

  constructor(
    private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.prepareInterface();
    this.getFaceSnap();
  }

  private prepareInterface() {
    this.is_liked = false;
  }

  private getFaceSnap() {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  onSnap(): void {
    if (!this.is_liked) {
      this.faceSnapsService.snap(this.faceSnap.id, 'snap');
      this.is_liked = true;
    } else {
      this.faceSnapsService.snap(this.faceSnap.id, 'unsnap');
      this.is_liked = false;
    }
  }
}
