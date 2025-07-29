"use client"
import { useState, useEffect, useRef } from "react"
import { CheckCircle, Wifi, FileText } from "lucide-react"

const steps = [
  {
    title: "Installation Rapide",
    description:
      "Recevez votre capteur PharmaSensor et installez-le en quelques minutes dans votre pharmacie, sans outils complexes.",
    icon: <CheckCircle className="h-8 w-8" />,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Surveillance Automatique",
    description:
      "Les données de température sont relevées en continu et transmises automatiquement à notre plateforme cloud sécurisée.",
    icon: <Wifi className="h-8 w-8" />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Alertes & Rapports",
    description:
      "Recevez des alertes en temps réel en cas d'anomalie et accédez à des rapports de conformité prêts pour les inspections.",
    icon: <FileText className="h-8 w-8" />,
    color: "bg-yellow-100 text-yellow-600",
  },
]

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Défilement automatique
  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      setActiveStep((s) => (s + 1) % steps.length)
    }, 6000)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [activeStep])

  // Navigation manuelle : reset timer
  const goToStep = (idx: number) => {
    setActiveStep(idx)
  }
  const nextStep = () => setActiveStep((s) => Math.min(s + 1, steps.length - 1))
  const prevStep = () => setActiveStep((s) => Math.max(s - 1, 0))

  return (
    <section className="w-full py-16 md:py-24 flex justify-center">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800 mb-2">
            Comment ça marche ?
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            3 Étapes Simples
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground">
            De l'installation à la conformité, PharmaSensor vous accompagne à chaque étape.
          </p>
        </div>
        {/* Stepper horizontal */}
        <div className="flex flex-col items-center w-full">
          <div className="flex w-full max-w-2xl justify-between items-center mb-8 relative">
            {steps.map((step, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center z-10">
                <button
                  className={`flex items-center justify-center h-14 w-14 rounded-full border-4 transition-all duration-300 mb-2
                    ${
                      activeStep === idx
                        ? `${step.color} border-green-600 scale-110 shadow-lg`
                        : "bg-white text-gray-400 border-gray-200 hover:border-green-400"
                    }
                  `}
                  onClick={() => goToStep(idx)}
                  aria-current={activeStep === idx ? "step" : undefined}
                >
                  {step.icon}
                </button>
                <span className={`text-sm font-medium ${activeStep === idx ? "text-green-700" : "text-gray-500"}`}>{step.title}</span>
              </div>
            ))}
            {/* Ligne de progression */}
            <div className="absolute top-1/2 left-7 right-7 h-1 bg-gray-200 z-0 rounded-full" />
            <div
              className="absolute top-1/2 left-7 h-1 bg-green-500 z-0 rounded-full transition-all duration-500"
              style={{
                width: `calc(${(activeStep) / (steps.length - 1)} * (100% - 56px))`,
                right: `calc(${100 - (activeStep) / (steps.length - 1) * 100}% - 28px)`
              }}
            />
          </div>
          {/* Contenu animé */}
          <div className="relative w-full max-w-xl min-h-[200px] mx-auto">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`absolute left-0 right-0 top-0 transition-all duration-500 ${activeStep === idx ? "opacity-100 translate-y-0 z-10" : "opacity-0 translate-y-8 z-0 pointer-events-none"}`}
              >
                <div className="flex flex-col items-center rounded-xl border bg-white p-10 shadow-xl text-center">
                  <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full ${step.color} shadow`}>{step.icon}</div>
                  <h3 className="text-2xl font-bold mb-2 text-green-800">{step.title}</h3>
                  <p className="text-muted-foreground text-lg mb-2">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Navigation boutons */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={prevStep}
              disabled={activeStep === 0}
              className="rounded-md px-6 py-2 bg-green-100 text-green-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Précédent
            </button>
            <button
              onClick={nextStep}
              disabled={activeStep === steps.length - 1}
              className="rounded-md px-6 py-2 bg-green-600 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed transition shadow"
            >
              Suivant
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 