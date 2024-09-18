interface Book {
  id: string;
  authorId: string;
  title: string;
  publishedAt: Date;
  description: string;
}

interface Author {
  id: string;
  name: string;
  age: number;
}
interface ApiResponse<D = object> {
  data?: D;
  status: number;
  error?: string;
}

async function promiseHandler<T = object>(url: string): Promise<ApiResponse<T>> {
  try {
    const getData = await fetch(url);
    const resultData: T = await getData.json();

    return {
      data: resultData,
      status: getData.status
    };
  } catch (e: any) {
    return {
      error: e,
      status: 500
    };
  }
}

const getAuthorData = async (bookId: string): Promise<Author | undefined> => {
  const { data, status } = await promiseHandler<Book>(`api/books/${bookId}`);
  if (status !== 200) return;
  if (!data) return;

  const { data: getAuthor, status: getAuthorStatus } = await promiseHandler<Author>(`api/author/${data.authorId}`);
  if (getAuthorStatus !== 200) return;
  if (!getAuthor) return;

  return getAuthor;
};
