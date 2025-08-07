export const formatToMarkdown = (text: string): string => {
  return text
    .replace(/\\n/g, '\n')
    .replace(/•/g, '-')
    .replace(/\\(?!n)/g, '');
}
