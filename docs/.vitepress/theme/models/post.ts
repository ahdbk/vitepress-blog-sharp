export interface Post {
    metaData: {
      title: string;
      author: string;
      category: string;
      cover: string;
      description: string;
      date: string;
    };
    path: string;
  }