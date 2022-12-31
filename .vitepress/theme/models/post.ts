export interface Post {
    metaData: {
      title: string;
      author: string;
      category: string;
      categoryColor: string;
      cover: string;
      description: string;
      date: string;
    };
    readingTime: string;
    path: string;
  }