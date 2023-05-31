export function highlightMatch(text: string, match: string) {
  // Create a regular expression object with the match string and the 'g' flag for global search
  const regex = new RegExp(match, 'gi');

  // Replace the match with the same text wrapped in a <span> tag with a class for highlighting
  const highlightedString = text.replace(regex, '<span class="highlight">$&</span>');

  return highlightedString;
}
