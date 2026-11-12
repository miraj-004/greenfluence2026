// Single editable source for outbound organizer-controlled destinations.
export const FORM_LINKS = {
  team: "https://forms.gle/3yBS3TH8KpvEdsjS9",
  club: "https://forms.gle/yBMQPpCDSBoAF8tp8",
  ambassador: "https://forms.gle/kqDHXPES5hYWummq5",
} as const;

export const ORG_LINKS = {
  earthsAnts: "https://www.earthsants.org/",
  esdm: "https://www.daffodilvarsity.edu.bd/department/esdm/contact-us",
  sdgs: "https://sdgs.un.org/goals",
} as const;

export function isValidFormUrl(url: string | undefined): url is string {
  if (!url) return false;
  try {
    const u = new URL(url);
    return u.protocol === "https:";
  } catch {
    return false;
  }
}
