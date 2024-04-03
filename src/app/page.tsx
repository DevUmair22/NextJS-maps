"use client"

import { MapComponent } from "@/components/MapComponent"
import MapProvider from "@/components/MapProvider"

export default function Home() {

  return (
    <MapProvider>
      <MapComponent/>
    </MapProvider>
  )
}
