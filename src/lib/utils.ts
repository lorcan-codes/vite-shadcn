import { type ClassValue, clsx } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"
import { isArbitraryLength, isTshirtSize } from "./validators"


const twMerge = extendTailwindMerge({
  // use the `extend` key in case you want to extend instead of override
  override: {
      classGroups: {
        'font-size': [{ text: ['base', isTshirtSize, isArbitraryLength, 'h1'] }],
      }
  }
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
