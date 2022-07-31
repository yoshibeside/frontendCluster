export interface Node {
  ID: number;
  X: Float64Array;
  Y: Float64Array;
  Color: string;
}

export interface Clustering {
  cluster: number,
  result: Node[]
}