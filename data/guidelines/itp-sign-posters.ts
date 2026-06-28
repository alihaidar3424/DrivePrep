import type { GuidelineSeed } from "./types";
import { ITP_SIGN_SOURCE_LINKS } from "./source-links";

const SOURCE_EN =
  "Based on official Islamabad Traffic Police education posters for Important Road Signs.";
const SOURCE_UR =
  "اسلام آباد ٹریفک پولیس کے سرکاری تعلیمی پوسٹرز (اہم سڑک کے نشانات) پر مبنی۔";

function withItpSources(item: GuidelineSeed): GuidelineSeed {
  return { ...item, sourceLinks: ITP_SIGN_SOURCE_LINKS };
}

function posterImage(n: number, altEn: string, altUr: string) {
  return `![${altEn}|${altUr}](/guidelines/itp-signs/${n}.jpg)`;
}

export const itpSignPosterGuidelinesRaw: GuidelineSeed[] = [
  {
    slug: "itp-warning-signs-part-1",
    titleEn: "Warning Signs — Part 1 (ITP)",
    titleUr: "متنبہی سائنز — حصہ ۱ (آئی ٹی پی)",
    excerptEn: "Red triangle warning signs: curves, junctions, road works, and hazards (ITP posters 1–5).",
    excerptUr: "سرخ مثلثی متنبہی سائنز: موڑ، چوراہے، سڑک کی مرمت اور خطرات (پوسٹر ۱–۵)۔",
    category: "Road Signs",
    sortOrder: 2,
    imageUrl: "/guidelines/itp-signs/1.jpg",
    imageAltEn: "ITP warning sign poster part 1",
    imageAltUr: "آئی ٹی پی متنبہی سائن پوسٹر حصہ ۱",
    sourceEn: SOURCE_EN,
    sourceUr: SOURCE_UR,
    contentEn: `${posterImage(1, "ITP warning signs poster 1", "آئی ٹی پی متنبہی سائنز پوسٹر ۱")}

## Signs covered
- Danger ahead — avoid proceeding if unsafe
- Minor road joining from the left
- Give way at Y-junction to traffic from the right
- Road works ahead
- Right bend ahead
- Roundabout ahead

${posterImage(2, "ITP warning signs poster 2", "آئی ٹی پی متنبہی سائنز پوسٹر ۲")}

## Signs covered
- Road narrows ahead
- Children crossing / school area
- Opening or swing bridge ahead
- Railway crossing without gates
- Soft road edges
- Strong crosswinds area

${posterImage(3, "ITP warning signs poster 3", "آئی ٹی پی متنبہی سائنز پوسٹر ۳")}

## Signs covered
- Unmanned railway crossing (St Andrew's cross)
- Minor road joining from the right
- Junction on a curve
- Wild animals crossing
- Other hazards — proceed with caution
- Double bend to the left

${posterImage(4, "ITP warning signs poster 4", "آئی ٹی پی متنبہی سائنز پوسٹر ۴")}

## Signs covered
- Minor roads joining from both sides
- Minor road joining from the right
- Steep descent ahead
- Risk of falling rocks
- Traffic signals ahead
- Major road crossing a minor road

${posterImage(5, "ITP warning signs poster 5", "آئی ٹی پی متنبہی سائنز پوسٹر ۵")}

## Signs covered
- Left bend ahead
- Dip in the road
- Hump or arched bridge ahead
- Minor road joining from the right
- Two-way traffic ahead — slow down
- Bicycle crossing ahead`,
    contentUr: `${posterImage(1, "ITP warning signs poster 1", "آئی ٹی پی متنبہی سائنز پوسٹر ۱")}

## شامل سائنز
- آگے خطرہ ہے — غیر محفوظ ہو تو آگے نہ بڑھیں
- بائیں طرف چھوٹی سڑک نکلتی ہے
- Y چوک میں دائیں سے آنے والی گاڑیوں کو راستہ دیں
- سڑک پر کام ہو رہا ہے
- دائیں طرف موڑ ہے
- آگے گول چکر آنے والا ہے

${posterImage(2, "ITP warning signs poster 2", "آئی ٹی پی متنبہی سائنز پوسٹر ۲")}

## شامل سائنز
- آگے سڑک تنگ ہو رہی ہے
- بچوں کے سڑک پار کرنے کا راستہ / اسکول
- کھلنے یا اوپر نیچے ہونے والا پل
- ریلوے پھاٹک بغیر گیٹ
- سڑک کے کنارے نرم ہیں
- تیز ہوا کا علاقہ

${posterImage(3, "ITP warning signs poster 3", "آئی ٹی پی متنبہی سائنز پوسٹر ۳")}

## شامل سائنز
- بغیر پھاٹک کے ریلوے کراسنگ
- دائیں طرف چھوٹی سڑک نکلتی ہے
- آگے موڑ میں چوک ہے
- جنگلی حیوانات کے گزرنے کی جگہ
- مختلف نوعیت کے خطرات — احتیاط سے چلیں
- بائیں طرف دہرا موڑ ہے

${posterImage(4, "ITP warning signs poster 4", "آئی ٹی پی متنبہی سائنز پوسٹر ۴")}

## شامل سائنز
- چھوٹی سڑکیں دائیں بائیں سے بڑی سڑک سے مل رہی ہیں
- چھوٹی سڑک دائیں سے بڑی سڑک سے مل رہی ہے
- آگے اترائی ہے
- آگے پتھروں کے گرنے کا خدشہ
- آگے ٹریفک کے اشارے ہیں
- بڑی سڑک چھوٹی سڑک کو کراس کر رہی ہے

${posterImage(5, "ITP warning signs poster 5", "آئی ٹی پی متنبہی سائنز پوسٹر ۵")}

## شامل سائنز
- بائیں طرف موڑ ہے
- آگے سڑک میں نشیب ہے
- آگے محرابی پل ہے
- چھوٹی سڑک دائیں سے آ کر بڑی سڑک سے مل رہی ہے
- آگے دوطرفہ ٹریفک ہے — رفتار آہستہ کریں
- آگے سائیکل کے گزرنے کی جگہ`,
  },
  {
    slug: "itp-warning-signs-part-2",
    titleEn: "Warning Signs — Part 2 (ITP)",
    titleUr: "متنبہی سائنز — حصہ ۲ (آئی ٹی پی)",
    excerptEn: "More warning signs: lanes, crossings, slippery roads, tunnels, and steep grades (ITP posters 6–10).",
    excerptUr: "مزید متنبہی سائنز: لینز، کراسنگ، پھسلن، سرنگ اور چڑھائی (پوسٹر ۶–۱۰)۔",
    category: "Road Signs",
    sortOrder: 3,
    imageUrl: "/guidelines/itp-signs/6.jpg",
    imageAltEn: "ITP warning sign poster part 2",
    imageAltUr: "آئی ٹی پی متنبہی سائن پوسٹر حصہ ۲",
    sourceEn: SOURCE_EN,
    sourceUr: SOURCE_UR,
    contentEn: `${posterImage(6, "ITP warning signs poster 6", "آئی ٹی پی متنبہی سائنز پوسٹر ۶")}

## Signs covered
- Minor road joining from the left
- Right turn permitted ahead
- Staggered junctions from left and right
- Right lane closed — use left lane
- Traffic signals not working
- Sharp deviation to the left

${posterImage(7, "ITP warning signs poster 7", "آئی ٹی پی متنبہی سائنز پوسٹر ۷")}

## Signs covered
- Narrow bridge ahead
- End of dual carriageway
- Low-flying aircraft area
- Double bend to the right
- Loose chippings / flying stones
- Low clearance overhead (max height shown)

${posterImage(8, "ITP warning signs poster 8", "آئی ٹی پی متنبہی سائنز پوسٹر ۸")}

## Signs covered
- Cattle crossing
- Risk of vehicle underside hitting ground
- Pedestrian crossing
- Give way to traffic from the right at junction
- Road narrows on the right
- Left lane closed — use right lane

${posterImage(9, "ITP warning signs poster 9", "آئی ٹی پی متنبہی سائنز پوسٹر ۹")}

## Signs covered
- Gated railway crossing
- T-junction ahead
- Light-controlled crossing (railway, airport, bridge)
- U-turn ahead
- Uneven road
- Slippery road

${posterImage(10, "ITP warning signs poster 10", "آئی ٹی پی متنبہی سائنز پوسٹر ۱۰")}

## Signs covered
- Tunnel ahead (distance may be shown)
- Steep ascent
- Snowy area ahead
- Staggered minor cross roads
- Two-way traffic crossing a one-way road`,
    contentUr: `${posterImage(6, "ITP warning signs poster 6", "آئی ٹی پی متنبہی سائنز پوسٹر ۶")}

## شامل سائنز
- چھوٹی سڑک بائیں طرف سے بڑی سڑک سے مل رہی ہے
- آگے سے دائیں مڑ سکتے ہیں
- بالترتیب بائیں اور دائیں چھوٹی سڑکیں مل رہی ہیں
- دائیں لین بند — بائیں لین میں چلیں
- ٹریفک اشارے قابلِ کار نہیں
- راستہ فوری تبدیلی بائیں طرف

${posterImage(7, "ITP warning signs poster 7", "آئی ٹی پی متنبہی سائنز پوسٹر ۷")}

## شامل سائنز
- آگے تنگ پل ہے
- آگے دوہری سڑک ختم ہے
- جہاز کی نچلی اڑان والا علاقہ
- دائیں طرف دہرا موڑ ہے
- پتھروں کے اڑ کر لگنے کا خدشہ
- سڑک اور بجلی کے تار میں کم فاصلہ — زیادہ سے زیادہ اونچائی درج

${posterImage(8, "ITP warning signs poster 8", "آئی ٹی پی متنبہی سائنز پوسٹر ۸")}

## شامل سائنز
- مویشیوں کے گزرنے کا راستہ
- گاڑی کی نچلی سطح لگنے کا اندیشہ
- پیدل اشخاص کے گزرنے کا راستہ
- چوک میں دائیں سے آنے والی گاڑیوں کا پہلے حق
- سڑک دائیں طرف سے تنگ ہو رہی ہے
- بائیں لین بند — دائیں لین میں چلیں

${posterImage(9, "ITP warning signs poster 9", "آئی ٹی پی متنبہی سائنز پوسٹر ۹")}

## شامل سائنز
- گیٹ والا ریلوے پھاٹک
- آگے ٹی کراس ہے
- بتیوں والے اشارے (ریلوے، ہوائی اڈہ، پل)
- آگے یوٹرن ہے
- غیر ہموار سڑک
- سڑک پر پھسلن ہے

${posterImage(10, "ITP warning signs poster 10", "آئی ٹی پی متنبہی سائنز پوسٹر ۱۰")}

## شامل سائنز
- آگے سرنگ ہے
- آگے چڑھائی ہے
- آگے برفباری کا علاقہ
- چھوٹی سڑکیں بالترتیب دائیں بائیں سے مل رہی ہیں
- دوطرفہ ٹریفک یکطرفہ سڑک کو کراس کرتی ہے`,
  },
  {
    slug: "itp-mandatory-signs-part-1",
    titleEn: "Mandatory Signs — Part 1 (ITP)",
    titleUr: "لازمی سائنز — حصہ ۱ (آئی ٹی پی)",
    excerptEn: "Circular mandatory signs: speed limits, no entry, overtaking bans, and weight limits (ITP posters 11–14).",
    excerptUr: "گول لازمی سائنز: رفتار، داخلہ ممنوع، اوورٹیک اور وزن کی حد (پوسٹر ۱۱–۱۴)۔",
    category: "Road Signs",
    sortOrder: 4,
    imageUrl: "/guidelines/itp-signs/11.jpg",
    imageAltEn: "ITP mandatory sign poster part 1",
    imageAltUr: "آئی ٹی پی لازمی سائن پوسٹر حصہ ۱",
    sourceEn: SOURCE_EN,
    sourceUr: SOURCE_UR,
    contentEn: `${posterImage(11, "ITP mandatory signs poster 11", "آئی ٹی پی لازمی سائنز پوسٹر ۱۱")}

## Signs covered
- Keep left
- No overtaking for heavy vehicles
- Dual carriageway starts
- No entry
- Height limit (e.g. 5 m)
- National speed limit applies

${posterImage(12, "ITP mandatory signs poster 12", "آئی ٹی پی لازمی سائنز پوسٹر ۱۲")}

## Signs covered
- Police and customs check post
- Stop — let traffic clear from both sides
- End of speed limit zone
- No overtaking
- Axle weight limit (e.g. 8 t)
- No horn

${posterImage(13, "ITP mandatory signs poster 13", "آئی ٹی پی لازمی سائنز پوسٹر ۱۳")}

## Signs covered
- Pedestrians prohibited
- Width limit (e.g. 3 m)
- Heavy vehicles prohibited
- Priority to oncoming traffic
- Go straight or turn left
- Mandatory roundabout — give way to traffic from the right

${posterImage(14, "ITP mandatory signs poster 14", "آئی ٹی پی لازمی سائنز پوسٹر ۱۴")}

## Signs covered
- Speed limit (e.g. 50 km/h)
- No parking
- No right turn
- No stopping — keep road clear
- End of all restrictions
- Police post ahead — stop when signaled`,
    contentUr: `${posterImage(11, "ITP mandatory signs poster 11", "آئی ٹی پی لازمی سائنز پوسٹر ۱۱")}

## شامل سائنز
- بائیں چلیں
- بڑی گاڑیوں کیلئے اوورٹیکنگ ممنوع
- آگے دوہری سڑک شروع ہے
- آگے داخلہ منع ہے
- اونچائی کی حد (مثلاً ۵ میٹر)
- قومی حد رفتار نافذ ہے

${posterImage(12, "ITP mandatory signs poster 12", "آئی ٹی پی لازمی سائنز پوسٹر ۱۲")}

## شامل سائنز
- پولیس اور کسٹم چیک پوسٹ
- رکیں — دائیں بائیں روڈ کلیئر ہونے دیں
- حد رفتار کی پابندی ختم
- اوورٹیکنگ ممنوع
- ایک محور پر وزن کی حد
- ہارن بجانا منع

${posterImage(13, "ITP mandatory signs poster 13", "آئی ٹی پی لازمی سائنز پوسٹر ۱۳")}

## شامل سائنز
- پیدل اشخاص کا داخلہ ممنوع
- چوڑائی کی حد
- ہیوی گاڑیوں کا داخلہ ممنوع
- سامنے سے آنے والی گاڑیوں کو ترجیح
- سیدھا آگے یا بائیں جائیں
- لازمی گول چکر — دائیں سے آنے والی ٹریفک کو راستہ دیں

${posterImage(14, "ITP mandatory signs poster 14", "آئی ٹی پی لازمی سائنز پوسٹر ۱۴")}

## شامل سائنز
- حد رفتار (مثلاً 50 کلومیٹر فی گھنٹہ)
- پارکنگ ممنوع
- دائیں مڑنا منع
- مت رکیں — سڑک خالی رکھیں
- تمام پابندیاں ختم
- آگے پولیس پوسٹ — اشارے پر رکیں`,
  },
  {
    slug: "itp-mandatory-signs-part-2",
    titleEn: "Mandatory Signs — Part 2 (ITP)",
    titleUr: "لازمی سائنز — حصہ ۲ (آئی ٹی پی)",
    excerptEn: "More mandatory signs: turns, U-turn ban, vehicle bans, and speed zones (ITP posters 15–18).",
    excerptUr: "مزید لازمی سائنز: موڑ، یوٹرن، گاڑیوں پر پابندی اور رفتار زون (پوسٹر ۱۵–۱۸)۔",
    category: "Road Signs",
    sortOrder: 5,
    imageUrl: "/guidelines/itp-signs/15.jpg",
    imageAltEn: "ITP mandatory sign poster part 2",
    imageAltUr: "آئی ٹی پی لازمی سائن پوسٹر حصہ ۲",
    sourceEn: SOURCE_EN,
    sourceUr: SOURCE_UR,
    contentEn: `${posterImage(15, "ITP mandatory signs poster 15", "آئی ٹی پی لازمی سائنز پوسٹر ۱۵")}

## Signs covered
- Road closed ahead
- Give way — stop and yield to traffic from the right
- Bicycles prohibited
- Laden weight limit (e.g. 7 t)
- Drive slowly
- Animal-drawn vehicles prohibited

${posterImage(16, "ITP mandatory signs poster 16", "آئی ٹی پی لازمی سائنز پوسٹر ۱۶")}

## Signs covered
- Keep right
- Turn right
- Vehicles over length limit prohibited
- Turn left
- U-turn prohibited
- Maximum speed 60 km/h

${posterImage(17, "ITP mandatory signs poster 17", "آئی ٹی پی لازمی سائنز پوسٹر ۱۷")}

## Signs covered
- Proceed straight ahead
- Speed zone change (e.g. 30 zone ends, 50 begins)
- Tractors prohibited
- All motor vehicles prohibited
- Lane control — stay in your lane
- Dual carriageway ends

${posterImage(18, "ITP mandatory signs poster 18", "آئی ٹی پی لازمی سائنز پوسٹر ۱۸")}

## Signs covered
- 30 km/h zone begins
- Motorcycles prohibited
- Turn left (mandatory)
- Turn right (mandatory)
- End of overtaking restriction
- No parking zone`,
    contentUr: `${posterImage(15, "ITP mandatory signs poster 15", "آئی ٹی پی لازمی سائنز پوسٹر ۱۵")}

## شامل سائنز
- آگے سڑک بند ہے
- رکیں — دائیں سے آنے والی ٹریفک کو راستہ دیں
- سائیکلوں کیلئے داخلہ ممنوع
- لیڈن وزن کی حد
- آہستہ چلیں
- جانوروں سے کھینچی جانے والی گاڑیوں کا داخلہ ممنوع

${posterImage(16, "ITP mandatory signs poster 16", "آئی ٹی پی لازمی سائنز پوسٹر ۱۶")}

## شامل سائنز
- دائیں چلیں
- دائیں مڑ جائیں
- لمبی گاڑیوں کا داخلہ ممنوع
- بائیں مڑ جائیں
- یوٹرن منع
- زیادہ سے زیادہ حد رفتار 60 کلومیٹر فی گھنٹہ

${posterImage(17, "ITP mandatory signs poster 17", "آئی ٹی پی لازمی سائنز پوسٹر ۱۷")}

## شامل سائنز
- سیدھا آگے جائیں
- رفتار زون تبدیل (30 ختم، 50 شروع)
- ٹریکٹر کا داخلہ ممنوع
- تمام گاڑیوں کا داخلہ ممنوع
- لین کنٹرول — اپنی لین میں رہیں
- دوہری سڑک ختم

${posterImage(18, "ITP mandatory signs poster 18", "آئی ٹی پی لازمی سائنز پوسٹر ۱۸")}

## شامل سائنز
- 30 کلومیٹر فی گھنٹہ زون شروع
- موٹر سائیکلوں کا داخلہ ممنوع
- بائیں مڑ جائیں (لازمی)
- دائیں مڑ جائیں (لازمی)
- اوورٹیکنگ پر پابندی ختم
- نو پارکنگ زون`,
  },
  {
    slug: "itp-informatory-markings",
    titleEn: "Road Markings & Junction Rules (ITP)",
    titleUr: "سڑک کی لکیریں اور چوراہے (آئی ٹی پی)",
    excerptEn: "Informatory diagrams: lane lines, box junctions, roundabouts, stop lines, and give-way rules.",
    excerptUr: "اطلاعی خاکے: لین لکیریں، بکس چوک، گول چکر، سٹاپ لائن اور راستہ دینے کے قوانین۔",
    category: "Road Signs",
    sortOrder: 6,
    imageUrl: "/guidelines/itp-signs/19.jpg",
    imageAltEn: "ITP informatory road markings poster",
    imageAltUr: "آئی ٹی پی اطلاعی سڑک لکیریں پوسٹر",
    sourceEn: SOURCE_EN,
    sourceUr: SOURCE_UR,
    contentEn: `${posterImage(19, "ITP informatory markings poster", "آئی ٹی پی اطلاعی لکیریں پوسٹر")}

## Road markings
- Broken white centre line — overtaking allowed when safe
- Solid yellow edge lines — no parking beyond the line
- Double solid yellow centre lines — stopping prohibited
- Solid white centre line — no overtaking
- Overtake only when no oncoming traffic on broken lines

## Junction rules
- Box junction — do not stop on yellow cross-hatching
- Roundabout — give way to traffic from the right
- Stop line — stop before entering the junction
- Inverted triangle — give-way warning sign
- Octagonal sign — stop warning sign`,
    contentUr: `${posterImage(19, "ITP informatory markings poster", "آئی ٹی پی اطلاعی لکیریں پوسٹر")}

## سڑک کی لکیریں
- درمیانی ٹوٹی لکیر — محفوظ ہو تو اوورٹیکنگ
- پیلی کنارے کی لکیر — لکیر کے باہر پارکنگ ممنوع
- دوہری پیلی درمیانی لکیر — رکنا منع
- سفید درمیانی لکیر — اوورٹیکنگ منع
- ٹوٹی لکیر پر صرف سامنے سے گاڑی نہ آ رہی ہو تو اوورٹیک

## چوراہے
- بکس چوک — زرد لائنوں پر رکنا منع
- گول چکر — دائیں سے آنے والی ٹریفک کو راستہ دیں
- رکنے کی لکیر — چوک میں داخل ہونے سے پہلے رکیں
- الٹا مثلث — راستہ دینے کا انتباہ
- آٹھ کونے — رکنے کا انتباہ`,
  },
  {
    slug: "itp-informatory-facilities",
    titleEn: "Informatory Signs — Facilities (ITP)",
    titleUr: "اطلاعی سائنز — سہولیات (آئی ٹی پی)",
    excerptEn: "Blue and green signs for parking, hospitals, fuel, food, and lane-control markings (ITP posters 20–21).",
    excerptUr: "نیلے و سبز نشانات: پارکنگ، ہسپتال، ایندھن، کھانا اور لین کنٹرول (پوسٹر ۲۰–۲۱)۔",
    category: "Road Signs",
    sortOrder: 7,
    imageUrl: "/guidelines/itp-signs/20.jpg",
    imageAltEn: "ITP informatory facility signs poster",
    imageAltUr: "آئی ٹی پی اطلاعی سہولیات پوسٹر",
    sourceEn: SOURCE_EN,
    sourceUr: SOURCE_UR,
    contentEn: `${posterImage(20, "ITP informatory facilities poster 20", "آئی ٹی پی اطلاعی سہولیات پوسٹر ۲۰")}

## Facility signs
- Parking direction (straight or right)
- First aid centre
- Hotel or motel
- Restaurant
- Cafeteria
- Camping site
- Picnic spot
- Caravan site

${posterImage(21, "ITP informatory facilities poster 21", "آئی ٹی پی اطلاعی سہولیات پوسٹر ۲۱")}

## More facilities & markings
- Telephone facility
- Petrol pump
- Parking direction (left or right)
- Bus stop
- Direction sign (city names and distances)
- Hospital
- Lane control marking — follow arrow direction only`,
    contentUr: `${posterImage(20, "ITP informatory facilities poster 20", "آئی ٹی پی اطلاعی سہولیات پوسٹر ۲۰")}

## سہولیات
- پارکنگ کی سمت (سیدھا یا دائیں)
- ابتدائی طبی امداد کا مرکز
- ہوٹل یا موٹل
- ریستوران
- کیفے ٹیریا
- کیمپ لگانے کی جگہ
- پکنک کی جگہ
- کاروان ٹھہرانے کی جگہ

${posterImage(21, "ITP informatory facilities poster 21", "آئی ٹی پی اطلاعی سہولیات پوسٹر ۲۱")}

## مزید سہولیات
- ٹیلی فون
- پٹرول پمپ
- پارکنگ کی سمت (بائیں یا دائیں)
- بس سٹاپ
- سمت کا سائن (شہر اور فاصلہ)
- ہسپتال
- لین کنٹرول — صرف تیر کی سمت چلیں`,
  },
  {
    slug: "itp-informatory-motorway",
    titleEn: "Informatory Signs — Motorway & Directions (ITP)",
    titleUr: "اطلاعی سائنز — موٹروے اور سمت (آئی ٹی پی)",
    excerptEn: "Motorway markers, city limits, one-way roads, dead ends, and zebra crossing rules (ITP posters 22–23).",
    excerptUr: "موٹروے نشانات، شہری حدود، یکطرفہ سڑک، بند سرا اور زیبرا کراسنگ (پوسٹر ۲۲–۲۳)۔",
    category: "Road Signs",
    sortOrder: 8,
    imageUrl: "/guidelines/itp-signs/22.jpg",
    imageAltEn: "ITP motorway and direction signs poster",
    imageAltUr: "آئی ٹی پی موٹروے و سمت پوسٹر",
    sourceEn: SOURCE_EN,
    sourceUr: SOURCE_UR,
    contentEn: `${posterImage(22, "ITP motorway signs poster 22", "آئی ٹی پی موٹروے پوسٹر ۲۲")}

## Motorway & direction signs
- Direction to toilet
- Motorway starts / ends
- Exit countdown markers (300 m, 200 m, 100 m)
- City limits start and end
- Direction and distance to cities
- Direction to airport
- One-way road

${posterImage(23, "ITP direction signs poster 23", "آئی ٹی پی سمت پوسٹر ۲۳")}

## Other informatory signs
- Dead end road
- Side road closed (left or right)
- Tourist information
- Lane closure ahead (distance shown)
- Priority over oncoming traffic
- Zebra crossing — do not stop on the stripes
- Zoo direction sign`,
    contentUr: `${posterImage(22, "ITP motorway signs poster 22", "آئی ٹی پی موٹروے پوسٹر ۲۲")}

## موٹروے و سمت
- بیت الخلا کی سمت
- موٹروے شروع / اختتام
- اخراج 300، 200، 100 میٹر
- شہری حدود شروع / ختم
- شہر کی سمت و فاصلہ
- ہوائی اڈے کی سمت
- یکطرفہ سڑک

${posterImage(23, "ITP direction signs poster 23", "آئی ٹی پی سمت پوسٹر ۲۳")}

## دیگر اطلاعی نشانات
- سرے پر سڑک بند
- دائیں/بائیں نکلنے والی سڑک بند
- سیاحوں کیلئے معلومات
- لین بندش (فاصلہ درج)
- جانے والی گاڑیوں کا پہلا حق
- زیبرا کراسنگ — لکیروں پر گاڑی نہ روکیں
- چڑیا گھر`,
  },
];

export const itpSignPosterGuidelines: GuidelineSeed[] = itpSignPosterGuidelinesRaw.map(withItpSources);
