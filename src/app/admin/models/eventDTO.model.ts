export class EventDTO {
    id: number;
    name: string;
    date: string | null;
  
    constructor() {
      this.id = 0;
      this.name = "";
      this.date = ""
    }
}