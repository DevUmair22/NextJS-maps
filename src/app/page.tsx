"use client"

import { MapComponent } from "@/components/MapComponent"
import MapProvider from "@/components/MapProvider"
import { useState } from "react"
import Step1 from "./_components/Step1"
import Step2 from "./_components/Step2"
import Step3 from "./_components/Step3"

enum Steps {
  "MEASUREMENT" = "MEASUREMENT",
  "SERVICES" = "SERVICES",
  "ESTIMATE" = "ESTIMATE"
}

export default function Home() {

  const allSteps = [Steps.ESTIMATE, Steps.MEASUREMENT, Steps.SERVICES]

  const [currentStep, setCurrentStep] = useState(Steps.ESTIMATE)

  // const RenderStep = () => {
  //   if (currentStep === Steps.ESTIMATE) return <Step1 />
  //   if (currentStep === Steps.MEASUREMENT) return <Step2 />
  //   if (currentStep === Steps.SERVICES) return <Step3 />
  // }

  const RenderStep = () => {
    const cureentStepContentComponent = {
      [Steps.ESTIMATE]: <Step1 />,
      [Steps.MEASUREMENT]: <Step2 />,
      [Steps.SERVICES]: <Step3 />,

    }
    return cureentStepContentComponent[currentStep]
  }

  const handleNext = () => {
    const indexOfCurrentStep = allSteps.findIndex((each) => each == currentStep)
    if (indexOfCurrentStep == allSteps.length - 1) return


    setCurrentStep(allSteps[indexOfCurrentStep + 1])
  }
  const handlePrev = () => {
    const indexOfCurrentStep = allSteps.findIndex((each) => each == currentStep)

    if (indexOfCurrentStep == 0) return

    setCurrentStep(allSteps[indexOfCurrentStep - 1])
  }

  return (
    // <MapProvider>
    //   <MapComponent/>
    // </MapProvider>
    <div className="w-full h-screen bg-blue-400 flex flex-col">
      <RenderStep />
      <div>
        <button onClick={handlePrev} >
          PREVIOUS
        </button>
        <button onClick={handleNext}>
          NEXT
        </button>

      </div>
    </div>
  )
}
