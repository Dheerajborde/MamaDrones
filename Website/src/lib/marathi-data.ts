const names: Record<string, string> = {
  "10l-drone": "१० लिटर कृषी ड्रोन",
  "10l-drone-sensors": "१० लिटर कृषी ड्रोन",
  "10l-kit": "मामा ड्रोन्स १० लिटर किट",
  "16l-kit": "मामा ड्रोन्स १६ लिटर किट",
};

const variants: Record<string, string> = {
  "10l-drone": "सेन्सरशिवाय",
  "10l-drone-sensors": "सेन्सरसह",
  "10l-kit": "किट",
  "16l-kit": "किट",
};

export const marathiDroneName = (slug: string) => names[slug] ?? slug;
export const marathiDroneVariant = (slug: string) => variants[slug] ?? "कृषी ड्रोन";
