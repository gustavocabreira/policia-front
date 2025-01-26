export default interface ICrime {
  label: string;
  subtitle: string;
  sentence: number;
  fine: number;
  bail: number | null;
}