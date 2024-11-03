import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../model/face-snap';
import { DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';

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

  ngOnInit() {
    this.is_liked = false;
  }

  onSnap(): void {
    if (!this.is_liked) {
      this.faceSnap.onAddsnap();
      this.is_liked = true;
    } else {
      this.faceSnap.onRemovesnap();
      this.is_liked = false;
    }
  }
}
