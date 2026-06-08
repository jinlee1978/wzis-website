// Maps a university display name to its logo file under
// /public/images/universities. The same school appears under different name
// strings across the Class of 2026 (full names) and Class of 2025 (short
// names) lists, so multiple keys can resolve to the same slug.
//
// SLUG_FILE holds the actual on-disk filename per slug (extension varies:
// some logos are .svg, some .png).
//
// STANDARD for adding a school: every university gets its real emblem as a
// card. Fetch the logo with `node scripts/fetch-university-logo.mjs --name
// "<University>" --slug <slug>`, then add the two map lines it prints below.
// Full process: docs/updating-college-acceptances.md

// Display name -> slug
const NAME_TO_SLUG: Record<string, string> = {
  // --- Class of 2026: South Korea ---
  'Seoul National University': 'seoul-national',
  'Korea University': 'korea-university',
  'Yonsei University': 'yonsei',
  'Hanyang University': 'hanyang',
  'Korea Aerospace University': 'korea-aerospace',
  // --- Class of 2026: International ---
  'Fudan University': 'fudan',
  'Shanghai Jiao Tong University': 'shanghai-jiao-tong',
  'University of Macau': 'macau',
  'Virginia Tech': 'virginia-tech',
  'Iowa State University': 'iowa-state',
  'University of Pittsburgh': 'pittsburgh',
  'North Carolina State University': 'nc-state',
  'Arizona State University': 'arizona-state',

  // --- Class of 2025: South Korea (short names) ---
  Yonsei: 'yonsei',
  Sungkyunkwan: 'sungkyunkwan',
  Sogang: 'sogang',
  Hanyang: 'hanyang',
  'Chung-Ang': 'chung-ang',
  'Kyung Hee': 'kyung-hee',
  'Hankuk Univ. of Foreign Studies': 'hufs',
  'Korea Aerospace': 'korea-aerospace',
  'Ewha Womans': 'ewha',
  Konkuk: 'konkuk',
  Kookmin: 'kookmin',
  Hongik: 'hongik',
  Inha: 'inha',
  Kyonggi: 'kyonggi',
  'Handong Global': 'handong',
  // --- Class of 2025: International (short names) ---
  Rutgers: 'rutgers',
  'Stony Brook': 'stony-brook',
  UConn: 'uconn',
  'Union College NY': 'union-college',
  'Indiana Bloomington': 'indiana',
  'University of Nottingham': 'nottingham',
  'University of Liverpool': 'liverpool',
  'Chinese University of HK': 'cuhk',
  'HK University of Science & Tech': 'hkust',
  'Beijing Foreign Studies': 'beijing-foreign-studies',
};

// slug -> actual filename in /public/images/universities
const SLUG_FILE: Record<string, string> = {
  // Korea
  'seoul-national': 'seoul-national.svg',
  'korea-university': 'korea-university.svg',
  yonsei: 'yonsei.svg',
  hanyang: 'hanyang.svg',
  'korea-aerospace': 'korea-aerospace.png',
  sungkyunkwan: 'sungkyunkwan.svg',
  sogang: 'sogang.png',
  'chung-ang': 'chung-ang.png',
  'kyung-hee': 'kyung-hee.png',
  hufs: 'hufs.png',
  ewha: 'ewha.svg',
  konkuk: 'konkuk.svg',
  kookmin: 'kookmin.jpg',
  hongik: 'hongik.svg',
  inha: 'inha.jpg',
  kyonggi: 'kyonggi.svg',
  handong: 'handong.png',
  // China / Hong Kong / Macau
  fudan: 'fudan-red.png',
  'shanghai-jiao-tong': 'shanghai-jiao-tong.png',
  macau: 'macau.svg',
  cuhk: 'cuhk.png',
  hkust: 'hkust.svg',
  'beijing-foreign-studies': 'beijing-foreign-studies.jpg',
  // US / UK
  'virginia-tech': 'virginia-tech.svg',
  'iowa-state': 'iowa-state.svg',
  pittsburgh: 'pittsburgh.svg',
  'nc-state': 'nc-state.svg',
  'arizona-state': 'arizona-state.svg',
  rutgers: 'rutgers.svg',
  'stony-brook': 'stony-brook.svg',
  uconn: 'uconn.svg',
  'union-college': 'union-college.svg',
  indiana: 'indiana.svg',
  nottingham: 'nottingham.svg',
  liverpool: 'liverpool.svg',
};

export function getUniversityLogo(name: string): string | undefined {
  const slug = NAME_TO_SLUG[name];
  if (!slug) return undefined;
  const file = SLUG_FILE[slug];
  return file ? `/images/universities/${file}` : undefined;
}
