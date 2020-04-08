export interface CycleJobDataItem {
  id: number;
  cron: string;
  args: string;
  mode: number;
  type: number;
  description: string;
  state: number;
  shopid: number
}
