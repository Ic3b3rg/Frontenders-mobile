export interface RepositoryCardInterface {
    name: string;
    id: number;
    created_at: string | Date;
    url: string;
  }

export type RepositoryCardList = RepositoryCardInterface[]