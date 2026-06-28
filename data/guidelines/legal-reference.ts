import type { GuidelineSeed } from "./types";
import { PUNJAB_PDF_SOURCE_LINKS, sourceLinks } from "./source-links";

const MVO_SOURCE_EN =
  "Based on the Motor Vehicles Ordinance, 1965 — the main driving law in Pakistan. Download the full document from Punjab Traffic Police.";
const MVO_SOURCE_UR =
  "Motor Vehicles Ordinance, 1965 پر مبنی — پاکستان کا بنیادی ڈرائیونگ قانون۔ مکمل دستاویز پنجاب ٹریفک پولیس کی ویب سائٹ سے ڈاؤن لوڈ کریں۔";

const HIGHWAY_SOURCE_EN =
  "Based on the official Pakistan Highway Code handbook published by Punjab Traffic Police. Content summarised here for study.";
const HIGHWAY_SOURCE_UR =
  "پنجاب ٹریفک پولیس کا سرکاری پاکستان ہائی وے کوڈ پر مبنی۔ مطالعے کے لیے یہاں خلاصہ پیش کیا گیا ہے۔";

export const legalReferenceGuidelines: GuidelineSeed[] = [
  {
    slug: "pakistan-highway-code",
    titleEn: "Pakistan Highway Code",
    titleUr: "پاکستان ہائی وے کوڈ",
    excerptEn: "Core driving rules from the official Pakistan Highway Code handbook used for licence renewal.",
    excerptUr: "سرکاری پاکستان ہائی وے کوڈ سے بنیادی ڈرائیونگ قوانین — لائسنس تجدید کے لیے ضروری۔",
    category: "Highway Code",
    sortOrder: 20,
    sourceEn: HIGHWAY_SOURCE_EN,
    sourceUr: HIGHWAY_SOURCE_UR,
    sourceLinks: PUNJAB_PDF_SOURCE_LINKS,
    contentEn: `The Pakistan Highway Code is the official handbook for safe and lawful driving. Licence renewal under the Motor Vehicles Ordinance requires holding the latest Federal Government edition.

## Before you drive
- Ensure your licence, registration, and insurance are valid
- Check lights, indicators, tyres, brakes, and mirrors
- Adjust seat and mirrors; fasten seat belt
- Do not drive if tired, ill, or under the influence of alcohol or drugs

## On the road
- Obey all traffic signs, signals, and road markings
- Keep to the left unless overtaking where permitted
- Maintain safe speed and following distance
- Signal before turning or changing lanes
- Give way to pedestrians at crossings and to emergency vehicles

## Overtaking & parking
- Overtake only when the road ahead is clear and markings allow it
- Never overtake at junctions, bends, or hills where vision is limited
- Park only where permitted; do not block driveways or crossings

## At junctions & roundabouts
- Stop fully at STOP signs and red signals
- Give way where required — especially at roundabouts to traffic from the right
- Do not enter a box junction unless your exit is clear

## Accidents
- Stop if involved or if someone is injured
- Warn other traffic; call police and ambulance if needed
- Exchange details; do not leave the scene unlawfully

> Study tip: Many driving-test questions here come directly from Highway Code rules and ITP sign posters.`,
    contentUr: `پاکستان ہائی وے کوڈ محفوظ اور قانونی ڈرائیونگ کی سرکاری کتاب ہے۔ Motor Vehicles Ordinance کے تحت لائسنس تجدید کے لیے وفاقی حکومت کا تازہ ترین ایڈیشن رکھنا ضروری ہے۔

## ڈرائیونگ سے پہلے
- لائسنس، رجسٹریشن اور انشورنس درست ہوں
- لائٹس، انڈیکیٹر، ٹائر، بریک اور mirrors چیک کریں
- سیٹ و mirrors درست کریں؛ سیٹ بیلٹ باندھیں
- thaka، بیمار یا نشے میں گاڑی نہ چلائیں

## سڑک پر
- تمام سائنز، سگنل اور لکیروں کی پابندی
- جہاں اجازت ہو اوورٹیک کے سوا بائیں چلیں
- محفوظ رفتار اور فاصلہ برقرار رکھیں
- موڑ یا لین تبدیلی سے پہلے اشارہ دیں
- کراسنگ پر پیدل چلنے والوں اور emergency گاڑیوں کو راستہ دیں

## اوورٹیک اور پارکنگ
- صرف صاف سڑک اور اجازت والی لکیر پر اوورٹیک
- چوراہے، موڑ یا پہاڑی پر جہاں نظر محدود ہو اوورٹیک نہ کریں
- صرف جائز جگہ پارک کریں؛ دروازے یا کراسنگ نہ بند کریں

## چوراہے اور گول چکر
- STOP اور سرخ بتی پر مکمل رکیں
- جہاں ضروری ہو راستہ دیں — گول چکر میں دائیں سے آنے والوں کو
- بکس چوک میں داخل نہ ہوں جب تک نکلنے کا راستہ صاف نہ ہو

## حادثات
- شامل ہوں یا زخمی ہوں تو رکیں
- دوسروں کو خبردار کریں؛ ضرورت پر پولیس/ایمبولینس
- تفصیلات کا تبادلہ؛ غیر قانونی طور پر جگہ نہ چھوڑیں

> مطالعے کا مشورہ: یہاں کے کئی سوالات ہائی وے کوڈ اور آئی ٹی پی سائن پوسٹرز سے آتے ہیں۔`,
  },
  {
    slug: "mvo-driver-licensing",
    titleEn: "Driver Licensing Law (1965)",
    titleUr: "ڈرائیور لائسنس قانون (1965)",
    excerptEn: "Legal requirements for learner permits, licence classes, tests, renewal, and disqualification.",
    excerptUr: "لرنر پرمٹ، لائسنس کی اقسام، ٹیسٹ، تجدید اور نااہلی کے قانونی تقاضے۔",
    category: "Licensing & Eligibility",
    sortOrder: 21,
    sourceEn: MVO_SOURCE_EN,
    sourceUr: MVO_SOURCE_UR,
    sourceLinks: [...PUNJAB_PDF_SOURCE_LINKS, ...sourceLinks("licenseVerification")],
    contentEn: `Chapter II of the Motor Vehicles Ordinance, 1965 governs driving licences in Pakistan.

## Key legal rules
- **No driving without a licence** — it is an offence to drive without a valid licence for that vehicle class
- **Minimum age** — applicants must meet the age prescribed for the licence class (typically 18 for private cars)
- **Licence classes** include motor cycle, motor car, motor cab, delivery van, light transport, heavy transport, tractor, and road roller
- **Competence test** — applicants must pass the prescribed driving test (Third Schedule) unless exempt (e.g. certain armed forces drivers)
- **Heavy transport** — requires holding another licence class for at least three years before applying
- **Validity** — private car/motorcycle licences may be valid up to three years; other classes typically twelve months per renewal
- **Renewal** — holders must possess the latest Pakistan Highway Code; late renewal may require retesting after three years
- **Disqualification** — licensing authorities may disqualify habitual offenders, drunk drivers, or those driving dangerously

## Practical steps (typical)
- Apply at the licensing authority with CNIC, photos, medical certificate, and fees
- Pass theory/sign test and practical road test
- Display learner plate ("L") when on a learner permit where required`,
    contentUr: `Motor Vehicles Ordinance, 1965 کا باب II پاکستان میں ڈرائیونگ لائسنس کو کنٹرول کرتا ہے۔

## اہم قانونی اصول
- **بغیر لائسنس ڈرائیونگ ممنوع** — بغیر جائز لائسنس گاڑی چلانا offence ہے
- **کم از کم عمر** — متعلقہ کلاس کے لیے مقررہ عمر (نجی کار کے لیے عام طور پر 18)
- **لائسنس کی اقسام** — موٹر سائیکل، موٹر کار، موٹر کیب، ڈیلیوری وین، لائٹ/ہیوی ٹرانسپورٹ، ٹریکٹر، روڈ رولر
- **قابلیت کا ٹیسٹ** — Third Schedule کا عملی ٹیسٹ (کچھ فوجی ڈرائیوروں کے لیے استثناء)
- **ہیوی ٹرانسپورٹ** — درخواست سے پہلے کم از کم 3 سال دوسری کلاس کا لائسنس
- **میعاد** — نجی کار/موٹر سائیکل 3 سال تک؛ دیگر کلاسز عام طور پر 12 ماہ
- **تجدید** — تازہ Pakistan Highway Code ہونا ضروری؛ 3 سال بعد دیر سے تجدید پر دوبارہ ٹیسٹ
- **نااہلی** — عادتاً خلاف ورز، نشے میں یا خطرناک ڈرائیونگ پر لائسنس منسوخ

## عملی مراحل (عام)
- CNIC، تصاویر، طبی سرٹیفکیٹ اور فیس کے ساتھ درخواست
- تھیوری/سائن اور عملی سڑک ٹیسٹ پاس کریں
- لرنر پرمٹ پر جہاں ضروری ہو "L" پلیٹ لگائیں`,
  },
  {
    slug: "mvo-traffic-control",
    titleEn: "Traffic Control Law (1965)",
    titleUr: "ٹریفک کنٹرول قانون (1965)",
    excerptEn: "Legal duties: speed limits, traffic signs, signals, stopping, accidents, and right-of-way.",
    excerptUr: "قانونی فرائض: رفتار، سائنز، سگنل، رکنا، حادثات اور راستے کا حق۔",
    category: "Traffic Rules",
    sortOrder: 22,
    sourceEn: MVO_SOURCE_EN,
    sourceUr: MVO_SOURCE_UR,
    sourceLinks: PUNJAB_PDF_SOURCE_LINKS,
    contentEn: `Chapter VII (Control of Traffic) of the Motor Vehicles Ordinance sets enforceable road rules.

## Speed & weight
- Obey posted speed limits (Eighth Schedule lists limits by vehicle type)
- Do not drive a vehicle exceeding permissible weight or axle load

## Signs & signals
- **Duty to obey traffic signs** — drivers must obey official signs erected under the Ordinance (Ninth Schedule)
- Follow police signals and traffic light signals (Eleventh Schedule)

## Safe driving duties
- Do not leave a vehicle in a dangerous position
- Do not obstruct the driver or ride on running boards
- Obey rules for stationary vehicles and pillion riding
- **Helmet** — riders must wear a helmet (Section 89-A)
- Stop at railway crossings when required
- **After an accident** — stop, give information, and render assistance as required by law

## Documents
- Carry and produce your driving licence and registration certificate when asked by authorised officers`,
    contentUr: `Motor Vehicles Ordinance کا باب VII (Control of Traffic) نافذ شدہ سڑک قوانین مقرر کرتا ہے۔

## رفتار اور وزن
- نشان زدہ رفتار کی حد کی پابندی (Eighth Schedule)
- مجاز وزن یا axle load سے زیادہ گاڑی نہ چلائیں

## سائنز اور سگنل
- **ٹریفک سائنز کی پابندی** — Ninth Schedule کے تحت لگے سرکاری سائنز
- پولیس اور ٹریفک لائٹ سگنل (Eleventh Schedule)

## محفوظ ڈرائیونگ
- گاڑی خطرناک جگہ نہ چھوڑیں
- ڈرائیور میں رکاوٹ یا running board پر سواری نہ کریں
- رکی ہوئی گاڑی اور pillion کے قواعد
- **ہیلمیٹ** — Section 89-A
- ریلوے کراسنگ پر ضرورت پر رکیں
- **حادثے کے بعد** — رکیں، معلومات دیں، قانون کے مطابق مدد

## دستاویزات
- مجاز افسر کے کہنے پر لائسنس اور رجسٹریشن دکھائیں`,
  },
  {
    slug: "mvo-offences-penalties",
    titleEn: "Traffic Offences & Penalties (1965)",
    titleUr: "ٹریفک خلاف ورزیاں و سزائیں (1965)",
    excerptEn: "Overview of Chapter VIII offences: speeding, dangerous driving, DUI, and accident failures.",
    excerptUr: "باب VIII خلاف ورزیوں کا جائزہ: تیز رفتاری، خطرناک ڈرائیونگ، نشہ اور حادثے میں کوتاہی۔",
    category: "Penalties & Violations",
    sortOrder: 23,
    sourceEn: MVO_SOURCE_EN,
    sourceUr: MVO_SOURCE_UR,
    sourceLinks: [...PUNJAB_PDF_SOURCE_LINKS, ...sourceLinks("itpViolations")],
    contentEn: `Chapter VIII of the Motor Vehicles Ordinance lists offences and penalties. Exact fines vary by province and are updated by traffic police.

## Common offences under the Ordinance
- Driving without a valid licence
- Driving at excessive speed
- Driving recklessly or dangerously
- Driving under the influence of drink or drugs
- Driving when unfit through disease or disability
- Using a vehicle in unsafe condition
- Using a vehicle without permit (transport vehicles)
- Failing to stop after an accident or furnish required information
- Disobeying traffic signs or lawful orders
- Unauthorised interference with a vehicle

## Enforcement powers
- Police may arrest without warrant for certain offences
- Officers may seize documents or detain vehicles used without registration or permit
- Courts may disqualify offenders from holding a licence
- Many cases may be disposed of summarily

> This summary is for learning only. Always follow current provincial traffic police rules and fine schedules.`,
    contentUr: `Motor Vehicles Ordinance کا باب VIII خلاف ورزیوں اور سزاؤں کی فہرست دیتا ہے۔ جرمانے صوبے کے مطابق بدلتے ہیں۔

## Ordinance کے تحت عام خلاف ورزیاں
- بغیر جائز لائسنس ڈرائیونگ
- excessive speed
- reckless یا dangerous driving
- شراب/منشیات کے زیرِ اثر ڈرائیونگ
- بیماری یا disability کی وجہ سے unfit ڈرائیونگ
- unsafe condition میں گاڑی
- permit کے بغیر transport vehicle
- حادثے کے بعد نہ رکنا یا معلومات نہ دینا
- سائنز یا قانونی حکم کی خلاف ورزی
- گاڑی میں غیر مجاز مداخلت

## نفاذ
- بعض offences پر بغیر warrant گرفتاری
- دستاویزات ضبط یا بغیر رجسٹریشن گاڑی روکنا
- عدالت لائسنس نااہل کر سکتی ہے
- بہت سے مقدمات summary طریقے سے

> یہ خلاصہ صرف تعلیم کے لیے ہے۔ ہمیشہ موجودہ صوبائی ٹریفک پولیس قوانین پیروی کریں۔`,
  },
];
