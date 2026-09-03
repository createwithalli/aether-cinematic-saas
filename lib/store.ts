export type Contact = {
  id: string; name: string; company: string; email: string;
  stage: "Lead" | "Qualified" | "Proposal" | "Won"; value: number;
};
export type CalendarEvent = { id: string; title: string; day: number; time: string; kind: "call" | "demo" | "internal"; };
export type ChatMessage = { id: string; from: "you" | "peer"; plaintext?: string; cipher: string; at: string; };
export const seedContacts: Contact[] = [
  { id: "c1", name: "Maya Chen", company: "Lumen Labs", email: "maya@lumen.io", stage: "Proposal", value: 48000 },
  { id: "c2", name: "Omar Farouk", company: "Northwind", email: "omar@northwind.co", stage: "Qualified", value: 22000 },
  { id: "c3", name: "Elena Voss", company: "Helix", email: "elena@helix.xyz", stage: "Lead", value: 9000 },
  { id: "c4", name: "Jules Park", company: "Atlas DAO", email: "jules@atlas.eth", stage: "Won", value: 76000 },
  { id: "c5", name: "Ravi Shah", company: "Kinetic", email: "ravi@kinetic.app", stage: "Proposal", value: 31000 },
];
export const seedEvents: CalendarEvent[] = [
  { id: "e1", title: "Lumen product demo", day: 3, time: "10:00", kind: "demo" },
  { id: "e2", title: "Pipeline review", day: 5, time: "14:30", kind: "internal" },
  { id: "e3", title: "Omar discovery", day: 8, time: "09:15", kind: "call" },
  { id: "e4", title: "Atlas treasury sync", day: 12, time: "16:00", kind: "call" },
  { id: "e5", title: "Proposal workshop", day: 18, time: "11:00", kind: "internal" },
  { id: "e6", title: "Close Helix", day: 22, time: "15:45", kind: "demo" },
];
export function uid(prefix = "id") { return `${prefix}_${Math.random().toString(36).slice(2, 9)}`; }
