import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../model/face-snap';
import { DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgStyle, NgClass, UpperCasePipe, DatePipe],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  is_liked!: boolean;

  constructor(
    private faceSnapsService: FaceSnapsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.is_liked = false;
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

  show() {
    this.router.navigateByUrl(`facesnap/${this.faceSnap.id}`);
  }
}
