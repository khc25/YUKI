declare namespace yuki {
  export interface Translations {
    original: string
    translations: {
      [apiName: string]: string;
    }
  }

  export interface Translator {
    translate (text: string, callback: (translation: string) => void): void
    isEnable (): boolean
    setEnable (isEnable: boolean): void
    getName (): string
  }
}
