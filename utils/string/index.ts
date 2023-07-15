export const removeNonAlphanumeric = (input: string): string => {
  const result = input.replace(/[^a-z0-9]/gi, "");
  return result;
};
