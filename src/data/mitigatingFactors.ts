import IMitigatingFactor from "@/interfaces/IMitigatingFactor";

export const mitigatingFactors = [
  {
    id: 'retainedLawyer',
    label: "🔹 Retained Lawyer",
    selected: false,
    reduction: 20,
  },
  {
    id: 'confessedDefendant',
    label: "🔹 Confessed Defendant",
    selected: false,
    reduction: 20,
  },
  {
    id: 'resuscitatedInHospital',
    label: "🏥 Resuscitated in Hospital",
    selected: false,
    reduction: 10,
  },
  {
    id: 'possessionOfFirearm',
    label: "📋 Possession of Firearm",
    selected: false,
    reduction: 0,
  },
] as IMitigatingFactor[];
