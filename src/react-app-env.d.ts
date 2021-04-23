/// <reference types="react-scripts" />
declare module '@marvelapp/react-ab-test' {
  import * as React from 'react'

  type ExperimentProps = {
    name: string
    userIdentifier?: string
    defaultVariantName?: string
  }

  type VariantProps = {
    name: string
  }

  export class Experiment extends React.Component<ExperimentProps, any> {}
  export class Variant extends React.Component<VariantProps, any> {}

  type EmitterCallback = (experimentName: string, variantName: string) => void

  type Subscription = {
    remove(): void
  }
  class Emitter {
    emitWin(experimentName: string): void
    addActiveVariantListener(experimentName?: string, callback: EmitterCallback): Subscription
    addPlayListener(experimentName?: string, callback: EmitterCallback): Subscription
    addWinListener(experimentName?: string, callback: EmitterCallback): Subscription
    defineVariants(
      experimentName: string,
      variantNames: string[],
      variantWeights: number[]
    ): void
    setActiveVariant(experimentName: string, variantName: string): void
    getActiveVariant(experimentName: string): string
    calculateActiveVariant(
      experimentName: string,
      userIdentifier?: string,
      defaultVariantName?: string
    ): string
    getSortedVariants(experimentName: string)
  }
  class ExperimentDebugger {
    setDebuggerAvailable(isAvailable: boolean): void
    enable(): void
    disable(): void
  }
  export const emitter = new Emitter()
  export const experimentDebugger = new ExperimentDebugger()
}