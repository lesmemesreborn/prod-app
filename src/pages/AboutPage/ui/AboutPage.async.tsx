import { lazy } from 'react'

// @ts-expect-error
export const AboutPageAsync = lazy(async () => await import('./AboutPage'))
