# Align the website palette with the KOEnergy logo

## Changes
- Replace the existing forest-green theme with the logo’s deep navy, teal, and fresh green colours.
- Update backgrounds, text, borders, highlights, focus states, gradients, and shadows through the shared design tokens.
- Preserve all brochure content, imagery, layout, and existing interactions.
- Check the live page at desktop and mobile widths for contrast, readability, and visual consistency.

## Technical details
- Keep colour roles centralized in `src/styles.css` so every existing section and control updates consistently.
- Use the sampled logo colours as the basis for primary, accent, secondary, muted, border, and dark-mode tokens.
- Verify the generated page and current build diagnostics after the change.
