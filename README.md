# React Pagination

# Technologies used

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)
- [Tailwind](https://tailwindcss.com/)

# Problem

Many time consuming work to make a pagination.

# Solution

Set of isolated components.

![Pagination Example](https://github.com/Leon740/react-pagination/blob/master/public/example.png 'Pagination Example')

# Components

You can use the created components, or create your own and consume a context.<br>
Pagination /

- Search
- Stats
- Body
- Controls /
- --- Numbers
- --- PrevButton
- --- NextButton

# PaginationContext

```ts
interface PaginationPropsI<Record> {
  children: ReactElement;
  recordsData: Record[];
  defaultActivePageId?: number;
  showRecordsPerPage?: number;
  // eslint-disable-next-line no-unused-vars
  paginationOnChange?: (pageId: number, recordsPerPage: number) => void;
  isSearchParams?: boolean;
  searchByKey?: keyof Record;
  // eslint-disable-next-line no-unused-vars
  handleSearch?: (query: string) => Record[];
}

const contextValue = {
  activePageId,
  setActivePageId,

  recordsPerPage,
  setRecordsPerPage,

  searchQuery,
  setSearchQuery,
  isSearchQuery,

  pagesQty,
  recordsData: foundRecords,
  recordsLength: foundRecords.length
};
```

# Storybook Playground

[https://leon740.github.io/react-pagination/storybook-static/](https://leon740.github.io/react-pagination/storybook-static/)

# Example

```ts
import { useFetch } from 'hooks/useFetch';
import { sanitizeStringFn } from 'utils';
import { BiLoaderAlt } from 'react-icons/bi';
import { Stats, Search, Body, SearchResultsNotFound, Pagination, Controls } from 'components';

interface RecordI {
  id: number;
  title: string;
  important?: boolean;
  userId?: number;
  body?: string;
}

export function Example() {
  const { data: POSTS, isLoading, error } = useFetch<RecordI[]>('/posts.mock.json');

  return (
    <div className="container px-8 mx-auto">
      <section>
        <h1 className="text-3xl my-16">Pagination</h1>

        {isLoading && (
          <div>
            <BiLoaderAlt className="animate-spin text-3xl" />
            <span>postsIsLoading</span>
          </div>
        )}

        {error && (
          <section>
            <h2 className="text-rose-600 p-4 rounded-lg bg-rose-100">{error}</h2>
          </section>
        )}

        {POSTS && !isLoading && (
          <Pagination<RecordI> recordsData={POSTS} isSearchParams searchByKey="title">
            <>
              <div className="my-16 flex flex-col md:flex-row items-start">
                <Search
                  classNames={{
                    parent: 'basis-full md:basis-1/2',
                    input: 'border border-black rounded-lg w-full p-2',
                    paragraph: 'mt-4',
                    resetButton: 'absolute top-1/2 -translate-y-1/2 right-2'
                  }}
                  placeholder="Search"
                />

                <div className="basis-full md:basis-1/2 text-right">
                  <Stats options={[10, 15, 20]} />
                </div>
              </div>

              <Body<RecordI>
                isLoader
                loaderOverlayClassName="absolute top-0 left-0 w-full h-full bg-slate-300 opacity-50 z-20"
                renderRecords={(recordsToShow, recordsLength, searchQuery, isSearchQuery) =>
                  recordsLength ? (
                    <ul className="flex flex-col gap-8 pb-16">
                      {recordsToShow.map(({ id, title }, index) => (
                        <li key={`post_${id}`} className="p-4 rounded-lg border border-black">
                          <h2 className="text-yellow-500">{index}</h2>
                          <h3 className="text-red-600">{id}</h3>
                          <h4 className="text-lg">{isSearchQuery ? title : title}</h4>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <SearchResultsNotFound
                      keywords={['Mercedes', 'Audi', 'BMW']}
                      classNames={{
                        listClassName: 'flex flex-row flex-wrap gap-4',
                        buttonClassName: 'px-2 py-1 rounded-lg border border-black'
                      }}
                    />
                  )
                }
              />

              <Controls
                classNames={{
                  parent:
                    'flex items-center justify-between gap-8 py-4 border-t-2 border-black sticky bottom-0 bg-white',
                  prevButton: 'text-xl p-2 border border-black rounded-full mr-8',
                  nextButton: 'text-xl p-2 border border-black rounded-full ml-8'
                }}
                numbersClassNames={{
                  parent: 'flex gap-2 items-center',
                  buttonBase: 'p-2 mx-2 border border-black',
                  buttonActive: 'bg-slate-700'
                }}
              />
            </>
          </Pagination>
        )}
      </section>
    </div>
  );
}
```

# Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- yarn storybook
- yarn start
