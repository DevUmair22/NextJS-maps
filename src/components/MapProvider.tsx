'use client';

import React from 'react'
import { Libraries, useJsApiLoader } from '@react-google-maps/api';
import { ReactNode } from 'react';


const libraries = ['places', 'drawing', 'geometry'];


export function MapProvider({ children }: { children: ReactNode }) {

  const { isLoaded: scriptLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API as string,
    libraries: libraries as Libraries,
  });

  if(loadError) return <p>Encountered error while loading google maps</p>

  if(!scriptLoaded) return <p>Map Script is loading ...</p>

  return    <div className='items-center justify-center flex flex-wrap'>
    <div className='flex border border-1 mx-auto w-1/2 '>
    {children}
    </div>

  </div>

  
  
}

export default MapProvider
