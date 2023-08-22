import { RepositoryInterface } from "../types/apiService";

export function formatDate(date: Date | string) {
    date = new Date(date)
    return new Intl.DateTimeFormat('it-IT', { dateStyle: 'short', timeStyle: 'long' }).format(date)
}

export function deleteDashFromString(str: string) {
    return str.replaceAll('-', ' ').split(' ').map((word: string) => {
        const firstLetter = word.charAt(0)
        const firstLetterCap = firstLetter.toUpperCase()
        const remainingLetters = word.slice(1)
        return firstLetterCap + remainingLetters
    }).join(' ')
}

export function truncate(str:string, maxLength:number):string {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + '...';
    } else {
      return str;
    }
  }