import IAtenuante from "@/interfaces/IAtenuante";

export const atenuantes = [
  {
    id: 'advogadoConstituido',
    label: "🔹 Advogado constituído",
    selected: false,
    reducao: 20,
  },
  {
    id: 'reuConfesso',
    label: "🔹 Réu confesso",
    selected: false,
    reducao: 20,
  },
  {
    id: 'reanimadoHP',
    label: "🏥 REANIMADO NO HP",
    selected: false,
    reducao: 10,
  },
  {
    id: 'possuiPorteDeArma',
    label: "📋 Possui porte de arma",
    selected: false,
    reducao: 0,
  },
] as IAtenuante[];