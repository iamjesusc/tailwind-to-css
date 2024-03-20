import { accesibilityClass } from './accesibility'
import { animationClasses } from './animation'
import { backgroundsClasses } from './backgrounds'
import { bordersClasses } from './borders'
import { effectsClasses } from './effects'
import { filtersClasses } from './filters'
import { flexGridClasses } from './flex-grid'
import { interactivityClasses } from './interactivity'
import { layoutClasses } from './layout'
import { sizesClasses } from './sizes'
import { spacingClasses } from './spacing'
import { svgClasses } from './svg'
import { tablesClasses } from './tables'
import { transformClasses } from './transform'
import { typografyClasses } from './typografy'

const allClasses = {
  ...accesibilityClass,
  ...typografyClasses,
  ...svgClasses,
  ...effectsClasses,
  ...tablesClasses,
  ...transformClasses,
  ...layoutClasses,
  ...animationClasses,
  ...backgroundsClasses,
  ...bordersClasses,
  ...sizesClasses,
  ...filtersClasses,
  ...flexGridClasses,
  ...interactivityClasses,
  ...spacingClasses,
}

export const classesMap = new Map(Object.entries(allClasses))
