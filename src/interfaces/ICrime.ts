export default interface ICrime {
  name: string;
  description: string;
  sentence: number;
  fine: number;
  bail: number | null;
  category_id: number;
}