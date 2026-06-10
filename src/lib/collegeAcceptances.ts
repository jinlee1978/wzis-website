// Class of 2026 university acceptances.
// University names only (no student names). `count` is set when 2+ students
// were accepted to the same university; omitted for a single acceptance.
// Shared across the home, academics, and college-acceptance pages so the
// list is defined in exactly one place.

export interface AcceptanceUniversity {
  name: string;
  count?: number;
}

export interface ClassAcceptances {
  southKorea: AcceptanceUniversity[];
  international: AcceptanceUniversity[];
}

export const classOf2026: ClassAcceptances = {
  southKorea: [
    { name: 'Seoul National University' },
    { name: 'Korea University', count: 2 },
    { name: 'Yonsei University', count: 2 },
    { name: 'Sungkyunkwan University', count: 3 },
    { name: 'Hanyang University', count: 2 },
    { name: 'Korea Aerospace University', count: 2 },
  ],
  international: [
    { name: 'Fudan University', count: 2 },
    { name: 'Shanghai Jiao Tong University' },
    { name: 'University of Macau' },
    { name: 'Virginia Tech' },
    { name: 'Iowa State University' },
    { name: 'University of Pittsburgh' },
    { name: 'North Carolina State University' },
    { name: 'Arizona State University' },
  ],
};

// Convenience flat list (South Korea first) for compact displays.
export const classOf2026All: AcceptanceUniversity[] = [
  ...classOf2026.southKorea,
  ...classOf2026.international,
];

// Headline universities for the compact homepage hero showcase. The full
// list lives in the detailed "Class of 2026" section further down the page.
export const classOf2026Featured: AcceptanceUniversity[] = [
  { name: 'Seoul National University' },
  { name: 'Korea University' },
  { name: 'Yonsei University' },
  { name: 'Fudan University' },
  { name: 'Shanghai Jiao Tong University' },
  { name: 'Virginia Tech' },
];
