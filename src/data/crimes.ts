import ICrime from "@/interfaces/ICrime"

export const crimesContraVida = [
  {
    label: "Art. 5 - Tentativa de Homicídio**",
    subtitle: "Quando um individuo tenta matar alguém, mas não consegue.",
    pena: 7,
    multa: 20000,
    fianca: 0,
  },
  {
    label: "Art. 6 - Homicídio Culposo",
    subtitle: "Quando um indivíduo mata alguém sem intenção.",
    pena: 7,
    multa: 5000,
    fianca: 2500,
  },
  {
    label: "Art. 7 - Homicídio Doloso**",
    subtitle: "Quando um indivíduo mata alguém de propósito, utilizando de meios cruéis.",
    pena: 20,
    multa: 25000,
    fianca: 0,
  },
  {
    label: "Art. 8 - Homicídio Doloso Qualificado**",
    subtitle: "É uma forma mais grave de homicídio doloso, envolvendo circunstâncias agravantes.",
    pena: 25,
    multa: 25000,
    fianca: 0,
  },
  {
    label: "Art. 9 - Omissão de Socorro",
    pena: 10,
    multa: 2000,
    fianca: 4000,
  },
  {
    label: "Art. 10 - Lesão Corporal",
    pena: 12,
    multa: 10000,
    fianca: 20000,
  },
] as ICrime[];

export const crimesContraDireitosFundamentais = [
  {
    label: "Art. 11 - Sequestro**",
    pena: 10,
    multa: 25000,
    fianca: 0,
  },
  {
    label: "Art. 12 - Assédio Moral**",
    pena: 15,
    multa: 50000,
    fianca: 0,
  },
  {
    label: "Art. 13 - Calúnia, Injúria ou Difamação",
    pena: 12,
    multa: 5000,
    fianca: 10000,
  },
  {
    label: "Art. 14 - Invasão de Propriedade",
    pena: 5,
    multa: 5000,
    fianca: 10000,
  },
  {
    label: "Art. 15 - Perturbação do Sossego Alheio",
    pena: 0,
    multa: 20000,
    fianca: 40000,
  },
] as ICrime[];

export const crimesContraLiberdadePessoal = [
  {
    label: "Art. 16 - Ameaça",
    pena: 15,
    multa: 10000,
    fianca: 20000,
  },
  {
    label: "Art. 17 - Extorsão",
    pena: 5,
    multa: 10000,
    fianca: 12000,
  },
] as ICrime[];

export const crimesContraAdministracaoPublica = [
  {
    label: "Art. 18 - Agressão a Funcionário Público**",
    pena: 25,
    multa: 20000,
    fianca: 0,
  },
  {
    label: "Art. 19 - Falsidade Ideológica",
    pena: 10,
    multa: 10000,
    fianca: 20000,
  },
  {
    label: "Art. 20 - Prevaricação",
    pena: 10,
    multa: 10000,
    fianca: 15000,
  },
  {
    label: "Art. 21 - Abuso de Autoridade",
    pena: 10,
    multa: 5000,
    fianca: 8000,
  },
  {
    label: "Art. 22 - Falsa Comunicação de Crime",
    pena: 3,
    multa: 1000,
    fianca: 5000,
  },
  {
    label: "Art. 23 - Tentativa de Suborno",
    pena: 10,
    multa: 10000,
    fianca: 20000,
  },
  {
    label: "Art. 24 - Uso indevido do sistema de emergência",
    pena: 10,
    multa: 4000,
    fianca: 8000,
  },
  {
    label: "Art. 25 - Desacato**",
    pena: 20,
    multa: 70000,
    fianca: 0,
  },
  {
    label: "Art. 25.1 - Desacato 2x**",
    pena: 20,
    multa: 70000,
    fianca: 0,
  },
  {
    label: "Art. 25.2 - Desacato 3x**",
    pena: 20,
    multa: 70000,
    fianca: 0,
  },
  {
    label: "Art. 26 - Desobediência",
    pena: 7,
    multa: 15000,
    fianca: 30000,
  },
  {
    label: "Art. 26.1 - Desobediência 2x",
    pena: 10,
    multa: 15000,
    fianca: 30000,
  },
  {
    label: "Art. 26.2 - Desobediência 3x",
    pena: 12,
    multa: 15000,
    fianca: 30000,
  },
  {
    label: "Art. 27 - Obstrução de Justiça",
    pena: 10,
    multa: 15000,
    fianca: 20000,
  },
  {
    label: "Art. 28 - Ocultação de Provas",
    pena: 10,
    multa: 15000,
    fianca: 20000,
  },
  {
    label: "Art. 29 - Resistência a Prisão",
    pena: 12,
    multa: 15000,
    fianca: 30000,
  },
] as ICrime[];

export const crimesContraPatrimonio = [
  {
    label: "Art. 59 - Desmanche de Veículos",
    pena: 10,
    multa: 5000,
    fianca: 10000,
  },
  {
    label: "Art. 60 - Roubo",
    pena: 5,
    multa: 10000,
    fianca: 20000,
  },
  {
    label: "Art. 61 - Furto a Caixa Eletrônico",
    pena: 12,
    multa: 10000,
    fianca: 30000,
  },
  {
    label: "Art. 62 - Furto",
    pena: 5,
    multa: 7000,
    fianca: 14000,
  },
  {
    label: "Art. 63 - Receptação de Veículos",
    pena: 5,
    multa: 7000,
    fianca: 14000,
  },
  {
    label: "Art. 64 - Roubo de Veículos",
    pena: 10,
    multa: 9000,
    fianca: 18000,
  },
  {
    label: "Art. 65 - Tentativa de Furto",
    pena: 10,
    multa: 8000,
    fianca: 12000,
  },
  {
    label: "Art. 66 - Furto de Veículos",
    pena: 10,
    multa: 9000,
    fianca: 18000,
  },
] as ICrime[];

export const crimesContraOrdemPublica = [
  {
    label: "Art. 30 - Dano a Patrimônio Público",
    pena: 7,
    multa: 10000,
    fianca: 20000,
  },
  {
    label: "Art. 31 - Atentado ao Pudor",
    pena: 10,
    multa: 10000,
    fianca: 20000,
  },
  {
    label: "Art. 32 - Formação de Quadrilha",
    pena: 10,
    multa: 10000,
    fianca: 20000,
  },
  {
    label: "Art. 33 - Apologia ao Crime",
    pena: 12,
    multa: 15000,
    fianca: 30000,
  },
  {
    label: "Art. 34 - Posse de Arma em Público",
    pena: 15,
    multa: 18000,
    fianca: 36000,
  },
  {
    label: "Art. 35 - Uso de Máscara",
    pena: 0,
    multa: 10000,
    fianca: 20000,
  },
  {
    label: "Art. 36 - Uso de Equipamentos Restritos",
    pena: 5,
    multa: 10000,
    fianca: 20000,
  },
  {
    label: "Art. 37 - Vadiagem",
    pena: 12,
    multa: 10000,
    fianca: 15000,
  },
  {
    label: "Art. 38 - Tentativa de Fuga",
    pena: 15,
    multa: 15000,
    fianca: 30000,
  },
  {
    label: "Art. 39 - Vandalismo",
    pena: 5,
    multa: 10000,
    fianca: 20000,
  },
  {
    label: "Art. 40 - Réu Reincidente",
    pena: 10,
    multa: 0,
    fianca: 15000,
  },
  {
    label: "Art. 41 - Cúmplice",
    pena: 5,
    multa: 0,
    fianca: 15000,
  },
  {
    label: "Art. 42 - Tráfico de Armas",
    subtitle: "3 armas ou mais.",
    pena: 15,
    multa: 20000,
    fianca: 40000,
  },
  {
    label: "Art. 43 - Tráfico de Itens Ilegais",
    subtitle: "3 itens ou mais.",
    pena: 15,
    multa: 15000,
    fianca: 20000,
  },
  {
    label: "Art. 44 - Tráfico de Munições",
    subtitle: 'Acima de 100 munições.',
    pena: 15,
    multa: 10000,
    fianca: 20000,
  },
  {
    label: "Art. 45 - Tráfico de Drogas",
    subtitle: 'Acima de 100 drogas.',
    pena: 15,
    multa: 50000,
    fianca: 80000,
  },
  {
    label: "Art. 46 - Porte de Arma Pesada",
    subtitle: "Menos de 3 armas.",
    pena: 10,
    multa: 15000,
    fianca: 20000,
  },
  {
    label: "Art. 47 - Porte de Arma Leve",
    subtitle: "Menos de 3 armas.",
    pena: 10,
    multa: 10000,
    fianca: 15000,
  },
  {
    label: "Art. 48 - Porte de Arma Branca",
    pena: 0,
    multa: 5000,
    fianca: 7000,
  },
  {
    label: "Art. 49 - Posse de Peças de Armas",
    pena: 5,
    multa: 10000,
    fianca: 15000,
  },
  {
    label: "Art. 50 - Posse de Cápsulas",
    pena: 5,
    multa: 10000,
    fianca: 15000,
  },
  {
    label: "Art. 51 - Disparo de Arma de Fogo",
    pena: 10,
    multa: 5000,
    fianca: 10000,
  },
  {
    label: "Art. 52 - Posse de Munição",
    subtitle: "100 munições ou menos.",
    pena: 10,
    multa: 10000,
    fianca: 20000,
  },
  {
    label: "Art. 53 - Posse de Colete",
    pena: 10,
    multa: 10000,
    fianca: 20000,
  },
  {
    label: "Art. 54 - Aviãozinho",
    subtitle: "De 6 a 100 unidades (qualquer tipo de droga).",
    pena: 20,
    multa: 15000,
    fianca: 30000,
  },
  {
    label: "Art. 55 - Posse de Componentes Narcóticos",
    pena: 10,
    multa: 5000,
    fianca: 10000,
  },
  {
    label: "Art. 56 - Posse de Drogas",
    subtitle: "De 1 a 5 unidades (qualquer tipo de droga).",
    pena: 0,
    multa: 10000,
    fianca: 0,
  },
  {
    label: "Art. 57 - Posse de Itens Ilegais",
    subtitle: "Menos de 3 itens.",
    pena: 10,
    multa: 10000,
    fianca: 15000,
  },
  {
    label: "Art. 58 - Dinheiro Sujo",
    pena: 10,
    multa: 100,
    fianca: 20000,
  },
] as ICrime[];

export const crimesDeTransito = [
  {
    label: "Art. 67 - Condução Imprudente",
    pena: 2,
    multa: 5000,
    fianca: 0,
  },
  {
    label: "Art. 68 - Dirigir na Contra Mão",
    pena: 2,
    multa: 15000,
    fianca: 0,
  },
  {
    label: "Art. 69 - Alta Velocidade",
    pena: 2,
    multa: 10000,
    fianca: 0,
  },
  {
    label: "Art. 70 - Poluição Sonora",
    pena: 2,
    multa: 10000,
    fianca: 0,
  },
  {
    label: "Art. 71 - Corridas Ilegais",
    pena: 2,
    multa: 25000,
    fianca: 0,
  },
  {
    label: "Art. 72 - Uso Excessivo de Insulfilm",
    pena: 2,
    multa: 10000,
    fianca: 0,
  },
  {
    label: "Art. 73 - Veículo Irregular",
    pena: 2,
    multa: 5000,
    fianca: 0,
  },
  {
    label: "Art. 74 - Estacionar em área proibida",
    pena: 0,
    multa: 5000,
    fianca: 0,
  },
  {
    label: "Art. 75 - Não Ceder Passagem a Viaturas",
    pena: 0,
    multa: 2000,
    fianca: 0,
  },
  {
    label: "Art. 76 - Impedir o Fluxo do Tráfego",
    pena: 0,
    multa: 2000,
    fianca: 0,
  },
] as ICrime[];