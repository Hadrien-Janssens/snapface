export class FaceSnap {
  location?: string;

  constructor(
    public title: string,
    public description: string,
    public created_at: Date,
    public snaps: number,
    public imgURL: string
  ) {}

  onAddsnap(): void {
    this.snaps++;
  }
  onRemovesnap(): void {
    this.snaps--;
  }
  setLocation(location: string): void {
    this.location = location;
  }
}
