export class FaceSnap {
  location?: string;
  id!: string;

  constructor(
    public title: string,
    public description: string,
    public created_at: Date,
    public snaps: number,
    public imgURL: string
  ) {
    this.id = crypto.randomUUID().substring(0, 8);
  }

  onAddsnap(): void {
    this.snaps++;
  }
  onRemovesnap(): void {
    this.snaps--;
  }
  setLocation(location: string): void {
    this.location = location;
  }
  withLocation(location: string): FaceSnap {
    this.location = location;
    return this;
  }
}
