export interface StatusState {
  testingInternally: string;
  finalizingTesting: string;
  lastUpdated: string;
}

export interface UpdateItem {
  id: string;
  date: string;
  text: string;
}

export interface SystemItem {
  id: string;
  title: string;
  description: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
}
