"use client";
import { useState } from "react";

const topics = ["Drone products or services", "Pehelwan updates", "Partnerships", "General enquiry"] as const;
const marathiTopics = ["ड्रोन उत्पादने किंवा सेवा", "Pehelwan अपडेट", "भागीदारी", "सामान्य चौकशी"] as const;

export default function ContactTopics({ tractor = false, language = "en" }: { tractor?: boolean; language?: "en" | "mr" }) {
  const options = language === "mr" ? marathiTopics : topics;
  const [topic, setTopic] = useState<string>(tractor ? options[1] : options[0]);
  return <div className="contact-topic"><label htmlFor="interest-topic">{language === "mr" ? "कशाबद्दल चौकशी करायची आहे?" : "What are you interested in?"}</label><select id="interest-topic" value={topic} onChange={(event) => setTopic(event.target.value)}>{options.map((option) => <option key={option}>{option}</option>)}</select><p>{language === "mr" ? "फॉर्म भरताना हा विषय नमूद करा: " : "When completing the form, please mention: "}<strong>{topic}</strong>.</p></div>;
}
