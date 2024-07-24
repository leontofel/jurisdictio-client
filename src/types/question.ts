export interface Question {
  id: number;
  title: string;
  body: string;
  author_id: number;
  answer_count: number;
  created_at: string;
  updated_at: string;
}

export interface GetQuestionsResponse {
  questions: Question[];
  error?: string;
}

export interface GetRequestPayload {
  order?: string;
  offset?: string;
}
