export interface IEventProps {
  tipo: string;
  status: string;
  data: string;
  hora: string;
  descricao: string;
  local: string;
  codigo: string;
  cidade: string;
  uf: string;
  destino?: {
    local: string;
    codigo: string;
    cidade: string;
    bairro: string;
    uf: string;
  };
}

export interface IPackageProps {
  numero: string;
  sigla: string;
  nome: string;
  categoria: string;
  evento: Event[];
}
