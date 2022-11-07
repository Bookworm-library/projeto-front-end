import { createContext, ReactNode, SetStateAction, useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { apiFake, apiSearch } from "../../services/api";

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
  currentBook: iBooks | undefined;
  setCurrentBook: React.Dispatch<React.SetStateAction<iBooks | undefined>>;
  submitSearch: () => void;
  addToWishlist: () => Promise<void>;
  addToLibrary: () => Promise<void>;
  library: iBooks[] | undefined;
  setLibrary: React.Dispatch<SetStateAction<iBooks[] | undefined>>
}

export interface iBooks {
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
  const [currentBook, setCurrentBook] = useState<iBooks>();
  const [library, setLibrary] = useState<iBooks[] | undefined>([])

  const location = useLocation();
  const navigate = useNavigate();
  const userId = localStorage.getItem("@BookwordmLibrary:userId");
  const token = localStorage.getItem("@BookwordmLibrary:token");

  async function getInfoUserLogin() {
    const { data } = await apiFake.get(`users/${userId}`, {
      headers: { authorization: `Bearer ${token}` },
    });
    const order = data.library.reverse()
    setLibrary(order)
  }

  useEffect(() => {
    getInfoUserLogin()
  }, [token])

  const submitSearch = async () => {
    if (location.pathname !== "/dashboard/pesquisa") {
      navigate("/dashboard/pesquisa");
    }
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
      setSearchResults(result);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const addToWishlist = async () => {
    try {
      const {
        data: { wishlist },
      } = await apiFake(`users/${userId}`, {
        headers: { authorization: `Bearer ${token}` },
      });
      const find = wishlist.find((book: iBooks) => {
        return book.id === currentBook?.id;
      });
      if (find) {
        toast.error("Este livro já está na sua lista de desejos!", {
          theme: "colored",
          position: "top-right",
          autoClose: 2000,
        });
      } else {
        const body = { wishlist: [...wishlist, currentBook] };
        const { data } = await apiFake.patch(`users/${userId}`, body, {
          headers: { authorization: `Bearer ${token}` },
        });
        toast.success("Livro adicionado à lista de desejos!", {
          theme: "colored",
          position: "top-right",
          autoClose: 2000,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addToLibrary = async () => {
    try {
      const {
        data: { library },
      } = await apiFake(`users/${userId}`, {
        headers: { authorization: `Bearer ${token}` },
      });
      const find = library.find((book: iBooks) => {
        return book.id === currentBook?.id;

      });

      if (find) {
        toast.error("Este livro já está na sua biblioteca!", {
          theme: "colored",
          position: "top-right",
          autoClose: 2000,
        });


      } else {
        const body = { library: [...library, currentBook] };
        const { data } = await apiFake.patch(`users/${userId}`, body, {
          headers: { authorization: `Bearer ${token}` },
        });
        const order = data.library.reverse()
        setLibrary(order)
        toast.success("Livro adicionado à biblioteca!", {
          theme: "colored",
          position: "top-right",
          autoClose: 2000,
        });
      }
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
        currentBook,
        setCurrentBook,
        addToWishlist,
        addToLibrary,
        library,
        setLibrary
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};