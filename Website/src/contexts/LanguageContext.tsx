import { createContext, useContext, useState } from "react"

interface LanguageContextType {
  language: "en" | "mr"
  setLanguage: (language: "en" | "mr") => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<"en" | "mr">("en")

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === null) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

