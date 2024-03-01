export const useCutText = (text: string, limit: number) => {
  console.log(text)
  if (text.length > limit) {
    return text.substring(0, limit) + '...';
  }
  return text;
}
