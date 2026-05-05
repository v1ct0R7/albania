export interface DailyPlanItem {
  title: string;
  focus: string;
  description: string;
  meal: string;
  stay: string;
}

export interface Itinerary {
  id: string;
  title: string;
  days: number;
  travelStyle: string;
  description: string;
  route: string;
  dailyPlan: DailyPlanItem[];
}
