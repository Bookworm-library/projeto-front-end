import { createContext, ReactNode, useState } from "react";
import { apiSearch } from "../../services/api";

interface iSearchProviderProps {
  children: ReactNode;
}

interface iSearchContext {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  searchResults: iBooks[] | undefined;
  setSearchResults: React.Dispatch<React.SetStateAction<iBooks[] | undefined>>;
  submitSearch: () => void;
}

interface iBooks {
  id: string;
  volumeInfo: {
    title: string;
    authors: string | undefined;
    description: string;
    imageLinks:
      | {
          thumbnail: string;
        }
      | undefined;
  };
}

interface iBooksArray {
  items: iBooks[];
}

export const SearchContext = createContext<iSearchContext>(
  {} as iSearchContext
);

export const SearchProvider = ({ children }: iSearchProviderProps) => {
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [searchResults, setSearchResults] = useState<iBooks[]>();

  const submitSearch = async () => {
    try {
      setLoading(true);
      const {
        data: { items },
      } = await apiSearch.get<iBooksArray>("", {
        params: {
          q: search,
        },
      });
      const result = items.map((response: iBooks): iBooks => {
        const item = {
          id: response.id,
          volumeInfo: {
            title: response.volumeInfo.title,
            authors: response.volumeInfo.authors
              ? response.volumeInfo.authors[0]
              : "não encontrado",
            description: response.volumeInfo.description,
            imageLinks: response.volumeInfo.imageLinks?.thumbnail
              ? { thumbnail: response.volumeInfo.imageLinks.thumbnail }
              : undefined,
          },
        };
        return item;
      });
      console.log(result);
      setSearchResults(result);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        loading,
        setLoading,
        searchResults,
        setSearchResults,
        submitSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
