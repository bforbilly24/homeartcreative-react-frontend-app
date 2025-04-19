'use client'

import { useEffect, useRef } from 'react'

export default function ConsoleLogger() {
  const hasLogged = useRef(false)

  useEffect(() => {
    if (!hasLogged.current) {
      console.log(
        '%c Copyright © 2025 %cCircle IT %cAll rights reserved.',
        'color: #FFFFFF; background: #0052FE; font-size: 14px; padding: 5px 10px; border-radius: 5px 0 0 5px;',
        'color: #0052FE; background: #FFFFFF; font-size: 14px; padding: 5px 10px;',
        'color: #FFFFFF; background: #0052FE; font-size: 14px; padding: 5px 10px; border-radius: 0 5px 5px 0;'
      )
      hasLogged.current = true
    }
  }, [])

  return null
}
