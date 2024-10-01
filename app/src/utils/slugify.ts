export const slugify = (str: string): string => str.replace(/ /g, '-');
export const unslugify = (str: string): string => str.replace(/-/g, ' ');
