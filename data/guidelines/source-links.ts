export type GuidelineSourceLink = {
  labelEn: string;
  labelUr: string;
  url: string;
};

export const OFFICIAL_LINKS = {
  itpRoadSigns: {
    url: "https://islamabadpolice.gov.pk/itp/road-signs.php",
    labelEn: "ITP — Important Road Signs",
    labelUr: "آئی ٹی پی — اہم سڑک کے نشانات",
  },
  itpTouchscreenTest: {
    url: "https://islamabadpolice.gov.pk/itp/touchscreen-test.php",
    labelEn: "ITP — Road Signs Test (demo)",
    labelUr: "آئی ٹی پی — سائنز ٹیسٹ (ڈیمو)",
  },
  itpViolations: {
    url: "https://islamabadpolice.gov.pk/itp/violation-and-fine.php",
    labelEn: "ITP — Traffic Violations & Fines",
    labelUr: "آئی ٹی پی — خلاف ورزیاں و جرمانے",
  },
  itpHome: {
    url: "https://islamabadpolice.gov.pk/itp/",
    labelEn: "Islamabad Traffic Police (ITP)",
    labelUr: "اسلام آباد ٹریفک پولیس (آئی ٹی پی)",
  },
  punjabDownloads: {
    url: "https://trafficpolice.punjab.gov.pk/downloads",
    labelEn: "Punjab Traffic Police — Official Handbooks",
    labelUr: "پنجاب ٹریفک پولیس — سرکاری کتابچے",
  },
  licenseVerification: {
    url: "https://ict.islamabadpolice.gov.pk/license_verification",
    labelEn: "ICT Driving Licence Verification",
    labelUr: "آئی سی ٹی ڈرائیونگ لائسنس تصدیق",
  },
} as const satisfies Record<string, GuidelineSourceLink>;

export function sourceLinks(
  ...keys: (keyof typeof OFFICIAL_LINKS)[]
): GuidelineSourceLink[] {
  return keys.map((key) => ({ ...OFFICIAL_LINKS[key] }));
}

/** Shared links for all ITP sign poster articles */
export const ITP_SIGN_SOURCE_LINKS = sourceLinks(
  "itpRoadSigns",
  "itpTouchscreenTest",
  "itpHome",
);

/** Shared links for Punjab PDF reference articles */
export const PUNJAB_PDF_SOURCE_LINKS = sourceLinks("punjabDownloads");
