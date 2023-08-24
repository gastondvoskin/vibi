export default function trimObjectValues(obj: { [key: string]: any }): void {
    for (const key in obj) {
      if (typeof obj[key] === 'string') {
        obj[key] = obj[key].trim();
      }
    }
  }