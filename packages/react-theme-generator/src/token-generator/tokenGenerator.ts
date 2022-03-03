/**
 * Generates a set of Tokens (A map of CSS variable names) based on the provided Theme object.
 */
export function tokenGenerator<TTheme>(theme: TTheme): Record<keyof TTheme, string> {
  const tokens = {} as Record<keyof TTheme, string>;
  const keys = Object.keys(theme) as (keyof TTheme)[];

  for (const key of keys) {
    tokens[key] = `var(--${key})`;
  }

  return tokens;
}
