import type Produto from "./Produto";

export default interface Categoria {
  id: number;
  nome: string;
  descricao: string;
  data: string;
  produto: Produto | null;
}