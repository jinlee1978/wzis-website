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
    { name: 'Korea University' },
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
