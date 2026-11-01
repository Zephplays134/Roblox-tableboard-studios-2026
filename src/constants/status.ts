import { StatusState, UpdateItem, SystemItem } from '../types';

// Project 2026 status page
// Flip these two values to YES or NO when the status changes.
// Keep in sync with AGENTS.md rules.
export const STATUS: StatusState = {
  testingInternally: 'YES',
  finalizingTesting: 'NO',
  lastUpdated: 'October 30, 2026',
};

export const COUNTDOWN_TARGET = new Date(2026, 11, 31, 23, 59, 59);

export const UPDATES: UpdateItem[] = [
  {
    id: 'update-1',
    date: 'October 30, 2026',
    text: 'Added a live countdown to the status page, counting down to the end of the 2026 release window on December 31, 2026.',
  },
  {
    id: 'update-2',
    date: 'October 29, 2026',
    text: 'Internal testing is still in progress. The team is working through the build inside the studio; finalizing comes next once testing wraps.',
  },
  {
    id: 'update-3',
    date: 'October 29, 2026',
    text: 'Revamp the whole system: every major system on the ship is being revamped, reworked and upgraded across the board for Project 2026.',
  },
  {
    id: 'update-4',
    date: 'October 28, 2026',
    text: 'Internal testing of Project 2026 is officially in progress. The build is being tested inside Tableboard Studios.',
  },
  {
    id: 'update-5',
    date: 'October 2026',
    text: 'Development of the cruise ship simulator continues ahead of the 2026 release window.',
  },
];

export const MAJOR_SYSTEMS: SystemItem[] = [
  {
    id: 'sys-1',
    title: 'Revamp the Whole System',
    description: 'The whole system is getting a full revamp: every major system on the ship reworked and upgraded across the board for the 2026 build.',
  },
  {
    id: 'sys-2',
    title: 'Ship & Sailing',
    description: 'The core cruise ship simulator system: the vessel itself, sailing, and steering it around open water.',
  },
  {
    id: 'sys-3',
    title: 'Elevator AI',
    description: "Our in-house AI model, running the ship's elevators. Unlimited, fully free, keyless, and reliable.",
  },
  {
    id: 'sys-4',
    title: 'Cabins & Decks',
    description: 'Staterooms, decks, and guest areas players can explore and settle into during the voyage.',
  },
  {
    id: 'sys-5',
    title: 'Dining & Activities',
    description: 'Onboard dining and deck activities that keep guests busy between ports.',
  },
  {
    id: 'sys-6',
    title: 'Safety Systems',
    description: 'Lifeboats, drills, and emergency systems for a proper cruise experience.',
  },
];

export const ELEVATOR_FEATURES = [
  'Unlimited',
  'Fully free',
  'Keyless',
  'Reliable',
];

export const KNOWLEDGE = {
  greeting: "Ahoy! I'm Elevator, Tableboard Studios' AI. Ask me about Project 2026, the testing status, or me.",
  testing: 'Yes, Project 2026 is currently being tested internally. The team has the build live inside the studio right now.',
  finalizing: "Not yet. Internal testing is underway, but it isn't being finalized. This flips to YES when it is, and you'll see it in the status cards.",
  release: "No release date yet, it's TBA. The Updates section on this page is the first place a date will appear.",
  project: "Project 2026 is our cruise ship simulator for Roblox, developed by Tableboard Studios. It's currently in internal testing.",
  elevator: "I'm Elevator, Tableboard Studios' own AI model. Unlimited, fully free, keyless, and reliable. That means no API key, no sign-up, and no limits to use me here.",
  updates: 'Latest update (October 28, 2026): internal testing of Project 2026 is officially in progress. Scroll to the Updates section for the full log.',
  fallback: "I don't know that one yet. I can answer about Project 2026, internal testing, the release, or Elevator. Try one of the buttons below.",
};

export const PATTERNS: [RegExp, keyof typeof KNOWLEDGE][] = [
  [/\b(hi|hello|hey|ahoy|yo)\b/i, 'greeting'],
  [/test.*(intern|yes|no|status)|intern.*test|testing internally/i, 'testing'],
  [/finaliz|done testing|finished testing/i, 'finalizing'],
  [/release|launch|when.*(come|out|drop)|date/i, 'release'],
  [/project ?2026|cruise|ship|simulator/i, 'project'],
  [/elevator|your ?self|who are you|ai model/i, 'elevator'],
  [/update|news|new|changelog/i, 'updates'],
];

export function getElevatorAnswer(question: string): string {
  for (const [pattern, key] of PATTERNS) {
    if (pattern.test(question)) {
      return KNOWLEDGE[key];
    }
  }
  return KNOWLEDGE.fallback;
}
