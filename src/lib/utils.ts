import { type ClassValue, clsx } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"


const twMerge = extendTailwindMerge({
  // use the `extend` key in case you want to extend instead of override
  extend: {
      classGroups: {
        'font-size': [{ text: ['h1'] }],
      }
  }
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
