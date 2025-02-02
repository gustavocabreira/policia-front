import ICrime from "./ICrime";

export default interface ICategory {
  id: number,
  name: string,
  order: number,
  crimes: ICrime[],
}