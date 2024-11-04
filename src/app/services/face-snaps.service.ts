import { Injectable } from '@angular/core';
import { FaceSnap } from '../model/face-snap';
import { SnapType } from '../model/snap-type.type';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  private faceSnaps: FaceSnap[] = [
    new FaceSnap(
      'Archibalde',
      'This is a Face Snap component',
      new Date(),
      5,
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
    ),
    new FaceSnap(
      'hadrien',
      'This is a Face Snap component',
      new Date(),
      264445,
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
    ).withLocation('Paris fieu'),
  ];

  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps];
  }

  getFaceSnapById(faceSnapId: string): FaceSnap {
    const foundFaceSnap = this.faceSnaps.find(
      (faceSnap) => faceSnap.id === faceSnapId
    );
    if (!foundFaceSnap) {
      throw Error;
    } else {
      return foundFaceSnap;
    }
  }

  snap(faceSnapId: string, snapType: SnapType): void {
    const foundedFaceSnap = this.getFaceSnapById(faceSnapId);
    if (!foundedFaceSnap) {
      throw Error('not snap match');
    } else if (snapType === 'snap') {
      foundedFaceSnap.onAddsnap();
    } else {
      foundedFaceSnap.onRemovesnap();
    }
  }
}
