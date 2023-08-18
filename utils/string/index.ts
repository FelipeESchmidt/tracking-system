export const removeNonAlphanumeric = (input: string): string => {
  const result = input.replace(/[^a-z0-9]/gi, "");
  return result;
};

export const capitalize = (text: string) => {
  const firstChar = text.slice(0, 1).toUpperCase();

  const rest = text.substring(1).toLocaleLowerCase();

  return `${firstChar}${rest}`;
};
