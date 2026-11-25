export default function DroneModelVisual({ name, variant, language = "en" }: { name: string; variant: string; language?: "en" | "mr" }) {
  const model = name.includes("16L") ? "16L" : "10L";
  const variantLabel = language === "mr" ? ({ "Without sensors": "सेन्सरशिवाय", "With sensors": "सेन्सरसह", Kit: "किट" } as Record<string, string>)[variant] : variant;

  return (
    <div className="drone-model-visual" aria-hidden="true">
      <span className="drone-model-kicker">{language === "mr" ? "मामा / कृषी ड्रोन" : "MAMA / AGRICULTURAL DRONES"}</span>
      <strong>{model}</strong>
      <span className="drone-model-orbit drone-model-orbit-one" />
      <span className="drone-model-orbit drone-model-orbit-two" />
      <span className="drone-model-variant">{variantLabel}</span>
    </div>
  );
}
