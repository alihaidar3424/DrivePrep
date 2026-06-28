import type { GuidelineSeed } from "./types";
import { sourceLinks } from "./source-links";

export const generalGuidelines: GuidelineSeed[] = [
  {
    slug: "traffic-signs-overview",
    titleEn: "Understanding Traffic Signs",
    titleUr: "ٹریفک سائنز کو سمجھنا",
    excerptEn: "Shapes and colours of regulatory, warning, and informatory signs — with ITP poster references.",
    excerptUr: "رégulatory، warning اور informatory سائنز — آئی ٹی پی پوسٹرز کے حوالے سے۔",
    category: "Road Signs",
    sortOrder: 1,
    sourceEn:
      "Based on official Islamabad Traffic Police sign guides and Punjab Traffic Police handbook materials.",
    sourceUr:
      "سرکاری اسلام آباد ٹریفک پولیس سائن گائیڈز اور پنجاب ٹریفک پولیس کتابی مواد پر مبنی۔",
    sourceLinks: sourceLinks("itpRoadSigns", "itpTouchscreenTest", "punjabDownloads"),
    contentEn: `Traffic signs are the visual language of the road. Pakistan uses international-style signs taught by Islamabad Traffic Police (ITP) and tested in official driving exams.

## Three main types
- **Warning signs** — red-bordered triangles; hazards ahead (curves, crossings, road works)
- **Mandatory / regulatory signs** — red circles; orders you must obey (speed, no entry, turn directions)
- **Informatory signs** — blue or green rectangles; directions, facilities, motorway markers

## How to study here
Read the **ITP poster articles** in this section — they match the 23 official education posters on the ITP website.

## Quick tips for the test
- Triangles usually warn; circles usually command or prohibit
- Blue signs often give information or mandatory direction on motorways
- Red always means stop, prohibition, or danger
- When unsure, choose the safest and most cautious option`,
    contentUr: `ٹریفک سائنز سڑک کی بصری زبان ہیں۔ پاکستان بین الاقوامی طرز کے سائنز استعمال کرتا ہے جو آئی ٹی پی سikhاتی ہے اور سرکاری امتحان میں آتے ہیں۔

## تین اہم اقسام
- **Warning (متنبہ)** — سرخ مثلث؛ آگے خطرات
- **Mandatory (لازمی)** — سرخ دائرہ؛ احکامات
- **Informatory (اطلاعی)** — نیلا/سبز؛ سمت اور سہولیات

## یہاں کیسے پڑھیں
اس سیکشن میں **آئی ٹی پی پوسٹر مضامین** پڑھیں — یہ 23 سرکاری تعلیمی پوسٹرز سے مطابقت رکھتے ہیں۔

## ٹیسٹ کے فوری نکات
- مثلث = تنبیہ؛ دائرہ = حکم یا ممنوع
- نیلا = معلومات یا لازمی سمت
- سرخ = رکنا، ممنوع یا خطرہ
- شک ہو تو سب سے محفوظ جواب چunیں`,
  },
  {
    slug: "licensing-requirements",
    titleEn: "Licensing Requirements",
    titleUr: "لائسنس کی ضروریات",
    excerptEn: "Eligibility, documents, and steps to obtain a learner or regular driving licence.",
    excerptUr: "اہلیت، دستاویزات، اور لرنر یا باقاعدہ ڈرائیونگ لائسنس حاصل کرنے کے مراحل۔",
    category: "Licensing & Eligibility",
    sortOrder: 10,
    sourceLinks: sourceLinks("punjabDownloads", "licenseVerification"),
    contentEn: `To drive legally in Pakistan you need a valid driving licence issued by the relevant traffic authority.

## Minimum age
Applicants must meet the minimum age set by provincial traffic rules — typically 18 years for a private car licence.

## Learner's permit
A learner's permit allows supervised practice. You must display an "L" plate and be accompanied by a licensed driver where required.

## Required documents (typical)
- CNIC or valid identity document
- Medical fitness certificate where applicable
- Passport-size photographs
- Application form from the licensing office
- Latest Pakistan Highway Code (required for licence renewal)

## Theory and practical test
You must pass a written/theory test on traffic rules and signs, then a practical driving test on the road.

> See also: **Driver Licensing Law (1965)** in this guidelines section.`,
    contentUr: `پاکستان میں قانونی طور پر گاڑی چلانے کے لیے متعلقہ ٹریفک اتھارٹی کا جائز ڈرائیونگ لائسنس ضروری ہے۔

## کم از کم عمر
درخواست دہندگان کو صوبائی قوانین کی کم از کم عمر پوری کرنی ہوگی — نجی کار کے لیے عام طور پر 18 سال۔

## لرنر پرمٹ
لرنر پرمٹ نگرانی میں مشق کی اجازت دیتا ہے۔ "L" پلیٹ لگائیں اور جہاں ضروری ہو لائسنس یافتہ ڈرائیور ساتھ ہو۔

## ضروری دستاویزات (عام)
- CNIC یا جائز شناختی دستاویز
- طبی فٹness سرٹیفکیٹ (جہاں لاگو ہو)
- پاسپورٹ سائز تصاویر
- لائسنسنگ دفتر کا فارم
- تازہ Pakistan Highway Code (لائسنس تجدید کے لیے ضروری)

## تھیوری اور عملی ٹیسٹ
ٹریفک قوانین و سائنز کا تحریری/ تھیوری ٹیسٹ پاس کریں، پھر سڑک پر عملی ٹیسٹ۔

> مزید: **Driver Licensing Law (1965)**`,
  },
  {
    slug: "traffic-rules-right-of-way",
    titleEn: "Traffic Rules & Right of Way",
    titleUr: "ٹریفک قوانین اور راستے کا حق",
    excerptEn: "Basic rules for intersections, roundabouts, and yielding to pedestrians.",
    excerptUr: "چوراہوں، roundabouts اور پیدل چلنے والوں کو راستہ دینے کے بنیادی قوانین۔",
    category: "Traffic Rules",
    sortOrder: 11,
    sourceLinks: sourceLinks("itpRoadSigns", "punjabDownloads"),
    contentEn: `Following traffic rules keeps everyone safe and is heavily tested in the driving exam.

## At intersections
- Obey traffic signals and stop signs completely.
- Yield to vehicles already in the intersection when required.
- Do not block the junction.

## Roundabouts
Give way to traffic already circulating inside the roundabout unless signs say otherwise. In Pakistan, ITP teaches giving way to traffic from the **right** before entering.

## Pedestrians
Stop for pedestrians at marked crossings. Slow down near schools and markets.

## Lane discipline
Keep to your lane; use indicators before turning or changing lanes.`,
    contentUr: `ٹریفک قوانین کی پابندی سب کی حفاظت کرتی ہے اور ڈرائیونگ امتحان میں کثرت سے آتے ہیں۔

## چوراہوں پر
- سگنل اور STOP سائن کی مکمل پابندی کریں۔
- جہاں ضروری ہو پہلے سے چوراہے میں موجود گاڑیوں کو راستہ دیں۔
- چوراہہ بند نہ کریں۔

## Roundabouts
گردش میں موجود ٹریفک کو راستہ دیں۔ پاکستان میں آئی ٹی پی دائیں سے آنے والوں کو ترجیح سikhاتی ہے۔

## پیدل چلنے والے
نشان زدہ کراسنگ پر رکیں۔ اسکول اور بازاروں کے قریب رفتار کم کریں۔

## لین نظم
اپنی لین میں رہیں؛ موڑ یا لین تبدیلی سے پہلے انڈیکیٹر استعمال کریں۔`,
  },
  {
    slug: "speed-safe-driving",
    titleEn: "Speed Limits & Safe Driving",
    titleUr: "رفتار کی حد اور محفوظ ڈرائیونگ",
    excerptEn: "Legal speed limits, following distance, and driving in rain or at night.",
    excerptUr: "قانونی رفتار، فاصلہ برقرار رکھنا، بارش یا رات میں ڈرائیونگ۔",
    category: "Speed & Safe Driving",
    sortOrder: 12,
    sourceLinks: sourceLinks("punjabDownloads", "itpViolations"),
    contentEn: `Driving at a safe speed gives you time to react to hazards.

## Speed limits
Always obey posted speed limits. Limits may be lower near schools, hospitals, and construction zones. Mandatory circle signs show numeric limits (e.g. 50 km/h).

## Following distance
Keep at least a two-second gap from the vehicle ahead in good conditions; increase distance in rain or fog.

## Night driving
Use low beam in traffic; switch to high beam only on dark open roads without oncoming traffic.

## Mobile phones
Do not use a handheld mobile phone while driving. Pull over safely if you must take a call.`,
    contentUr: `محفوظ رفتار خطرات پر ردعمل کا وقت دیتی ہے۔

## رفتار کی حد
نشان زدہ حد کی پابندی کریں۔ اسکول، ہسپتال اور construction zones میں حد کم ہو سکتی ہے۔

## فاصلہ
اچھی حالت میں آگے والی گاڑی سے کم از کم دو سیکنڈ کا فاصلہ رکھیں؛ بارش یا دھند میں بڑھائیں۔

## رات کی ڈرائیونگ
ٹریفک میں low beam؛ high beam صرف تاریک کھلی سڑک پر بغیر آنے والی گاڑی کے۔

## موبائل
ڈرائیونگ میں ہینڈ ہیلڈ فون استعمال نہ کریں۔ ضرورت ہو تو محفوظ جگہ روک کر کال کریں۔`,
  },
  {
    slug: "parking-overtaking",
    titleEn: "Parking & Overtaking",
    titleUr: "پارکنگ اور اوورٹیک",
    excerptEn: "Where you may park, and how to overtake safely on Pakistani roads.",
    excerptUr: "کہاں پارک کر سکتے ہیں اور پاکستانی سڑکوں پر محفوظ اوورٹیک کیسے کریں۔",
    category: "Parking & Overtaking",
    sortOrder: 13,
    sourceLinks: sourceLinks("itpRoadSigns", "punjabDownloads"),
    contentEn: `Incorrect parking or overtaking causes accidents and traffic fines.

## Parking
- Do not park on footpaths, zebra crossings, or within no-parking zones.
- On hills, turn wheels appropriately and use the handbrake.
- Do not block driveways or fire hydrants.

## Overtaking
- Overtake only when the road ahead is clear and legal.
- Never overtake on a curve, hill crest, or near a junction.
- Return to your lane only when you can see the overtaken vehicle in your mirror.
- Road markings: solid centre line means no overtaking; broken line allows overtaking when safe.`,
    contentUr: `غلط پارکنگ یا اوورٹیک حادثات اور جرمانے کا سبب بنتے ہیں۔

## پارکنگ
- فٹ پاتھ، زیبرا کراسنگ یا no-parking زون میں پارک نہ کریں۔
- پہاڑی پر پہیے موڑیں اور handbrake استعمال کریں۔
- دروازے یا fire hydrant نہ بند کریں۔

## اوورٹیک
- صرف جب سامنے سڑک صاف اور قانونی ہو۔
- موڑ، چوٹی یا چوراہے کے قریب اوورٹیک نہ کریں۔
- mirror میں گاڑی نظر آنے کے بعد اپنی لین میں واپس آئیں۔
- لکیر: سفید درمیانی لکیر = اوورٹیک منع؛ ٹوٹی = محفوظ ہو تو اجازت۔`,
  },
  {
    slug: "safety-equipment",
    titleEn: "Safety Equipment & Seat Belts",
    titleUr: "حفاظتی سامان اور سیٹ بیلٹ",
    excerptEn: "Seat belts, helmets, lights, and essential vehicle checks before driving.",
    excerptUr: "سیٹ بیلٹ، ہیلمیٹ، لائٹس، اور ڈرائیونگ سے پہلے گاڑی کی ضروری جانچ۔",
    category: "Safety & Equipment",
    sortOrder: 14,
    sourceLinks: sourceLinks("punjabDownloads"),
    contentEn: `Safety equipment protects you and others on every journey.

## Seat belts
Driver and front passengers must wear seat belts. Ensure rear passengers are buckled where belts are fitted.

## Helmets (motorcycles)
Riders and pillion passengers must wear approved helmets securely fastened (required by law).

## Lights and indicators
Check headlights, brake lights, and indicators before driving. Replace faulty bulbs promptly.

## Tyres and brakes
Maintain adequate tyre tread and tyre pressure. Have brakes inspected regularly.`,
    contentUr: `حفاظتی سامان ہر سفر میں آپ اور دوسروں کی حفاظت کرتا ہے۔

## سیٹ بیلٹ
ڈرائیور اور اگلی سیٹ کے مسافروں کو بیلٹ باندھنا ضروری ہے۔ پچھلی سیٹ پر بھی جہاں بیلٹ ہو باندھیں۔

## ہیلمیٹ (موٹر سائیکل)
رائیڈر اور pillion دونوں منظور شدہ ہیلمیٹ مضبوطی سے پہنیں (قانون کے تحت لازمی)۔

## لائٹس اور انڈیکیٹر
ڈرائیونگ سے پہلے headlights، brake lights اور indicators چیک کریں۔

## ٹائر اور بریک
ٹائر کی گہrai اور ہوا درست رکھیں۔ بریک باقاعدہ چیک کروائیں۔`,
  },
  {
    slug: "emergencies-accidents",
    titleEn: "Emergencies & Accidents",
    titleUr: "ایمرجنسی اور حادثات",
    excerptEn: "What to do after a collision and how to handle vehicle breakdowns.",
    excerptUr: "ٹکر کے بعد کیا کریں اور گاڑی خراب ہونے پر کیا کریں۔",
    category: "Emergencies & Accidents",
    sortOrder: 15,
    sourceLinks: sourceLinks("punjabDownloads", "itpHome"),
    contentEn: `Knowing emergency procedures reduces harm and keeps you legal after an incident.

## At an accident scene
- Stop immediately if you are involved or witness a serious collision (required by law).
- Turn on hazard lights and warn other traffic.
- Call emergency services and traffic police if anyone is injured.
- Do not move seriously injured persons unless they are in immediate danger.

## Breakdowns
Move the vehicle off the carriageway if possible. Use hazard lights and a warning triangle if available.

## First aid basics
Keep a basic first-aid kit in the vehicle. Only provide help within your ability and training.`,
    contentUr: `ایمرجنسی طریقہ کار نقصان کم کرتے ہیں اور واقعے کے بعد قانونی رہنے میں مدد کرتے ہیں۔

## حادثے کی جگہ
- شامل ہوں یا سنگین ٹکر دیکھیں تو فوراً رکیں (قانون کے تحت لازمی)۔
- hazard lights آن کریں اور دوسروں کو خبردار کریں۔
- زخمی ہوں تو emergency اور ٹریفک پولیس بلائیں۔
- سنگین زخمیوں کو فوری خطرے کے بغیر نہ ہلائیں۔

## خرابی
ممکن ہو تو گاڑی سڑک سے ہٹائیں۔ hazard lights اور warning triangle استعمال کریں۔

## ابتدائی طبی امداد
گاڑی میں first-aid kit رکھیں۔ صرف اپنی صلاحیت کے اندر مدد کریں۔`,
  },
  {
    slug: "penalties-violations",
    titleEn: "Common Violations & Penalties",
    titleUr: "عام خلاف ورزیاں اور سزائیں",
    excerptEn: "Informational overview of frequent traffic offences in Pakistan.",
    excerptUr: "پاکستان میں عام ٹریفک offences کا معلوماتی جائزہ۔",
    category: "Penalties & Violations",
    sortOrder: 16,
    sourceLinks: sourceLinks("itpViolations", "punjabDownloads"),
    contentEn: `Traffic violations can result in fines, licence suspension, or court action. This section is for learning only — penalties change by province and are enforced by traffic police.

## Common offences
- Running a red light or stop sign
- Exceeding the speed limit
- Driving without a valid licence or insurance
- Using a mobile phone while driving
- Wrong-way driving or illegal U-turns

## Responsible driving
Following rules protects your licence, your safety, and other road users. Use this app to practice before your official test.

> See also: **Traffic Offences & Penalties (1965)**`,
    contentUr: `ٹریفک خلاف ورزیاں جرمانے، لائسنس معطلی یا عدالت کا سبب بن سکتی ہیں۔ یہ صرف تعلیم کے لیے ہے — سزائیں صوبے کے مطابق بدلتی ہیں۔

## عام offences
- سرخ بتی یا STOP کی خلاف ورزی
- رفتار کی حد سے تجاوز
- بغیر جائز لائسنس یا insurance
- ڈرائیونگ میں موبائل
- غلط سمت یا illegal U-turn

## ذمہ دار ڈرائیونگ
قوانین کی پابندی لائسنس، آپ کی اور دوسروں کی حفاظت کرتی ہے۔ سرکاری ٹیسٹ سے پہلے اس ایپ سے مشق کریں۔

> مزید: **Traffic Offences & Penalties (1965)**`,
  },
];
