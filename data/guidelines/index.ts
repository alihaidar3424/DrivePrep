import { generalGuidelines } from "./general";
import { itpSignPosterGuidelines } from "./itp-sign-posters";
import { legalReferenceGuidelines } from "./legal-reference";
import type { GuidelineSeed } from "./types";

export type { GuidelineSeed, GuidelineSourceLink } from "./types";
export { OFFICIAL_LINKS, sourceLinks } from "./source-links";

export const guidelines: GuidelineSeed[] = [
  ...generalGuidelines,
  ...itpSignPosterGuidelines,
  ...legalReferenceGuidelines,
].sort((a, b) => a.sortOrder - b.sortOrder);
