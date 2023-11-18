export class EventDTO {
    id: number;
    name: string;
    date: string | null;
    description: string;
    location: string;
    planner: string;
    picture?: string;
  
    constructor() {
      this.id = 0;
      this.name = "";
      this.date = "";
      this.description = "";
      this.location = "";
      this.planner = "";
    }
}