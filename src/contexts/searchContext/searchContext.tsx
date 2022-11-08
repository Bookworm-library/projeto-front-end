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
  setLibrary: React.Dispatch<SetStateAction<iBooks[] | undefined>>;
  removeFromWishlist: () => Promise<void>;
  removeFromLibrary: () => Promise<void>;
  addToRecomendedList: () => Promise<void>;
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
  const [currentBook, setCurrentBook] = useState<iBooks>();
  const [library, setLibrary] = useState<iBooks[] | undefined>([
    {
      id: "132456789",
      volumeInfo: {
        title: "PlaceHolder",
        authors: "PlaceHolder",
        description: "PlaceHolder",
        imageLinks: {
          thumbnail:
            "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1663085107/amc-cdn/production/2/movies/62300/62331/PosterDynamic/142915.jpg",
        },
      },
    },
    {
      id: "132456789123",
      volumeInfo: {
        title: "PlaceHolder2",
        authors: "PlaceHolder2",
        description: "PlaceHolder2",
        imageLinks: undefined,
      },
    },
  ]);

  const location = useLocation();
  const navigate = useNavigate();
  const userId = localStorage.getItem("@BookwordmLibrary:userId");
  const token = localStorage.getItem("@BookwordmLibrary:token");

  async function getInfoUserLogin() {
    const { data } = await apiFake.get(`users/${userId}`, {
      headers: { authorization: `Bearer ${token}` },
    });
    const livrosUser = data.library;
    const order = livrosUser?.reverse();
    setLibrary(order);
  }
  useEffect(() => {
    getInfoUserLogin();
    setLoading(false);
  }, [library]);

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

  const removeFromWishlist = async () => {
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
        const filter = wishlist.filter(
          (book: iBooks) => book.id !== currentBook?.id
        );
        const body = {
          wishlist: filter,
        };
        const { data } = await apiFake.patch(`users/${userId}`, body, {
          headers: { authorization: `Bearer ${token}` },
        });
        toast.success("Livro removido da lista de desejos!", {
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
        setLibrary(data.library);

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

  const removeFromLibrary = async () => {
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
        const filter = library.filter(
          (book: iBooks) => book.id !== currentBook?.id
        );
        const body = {
          library: filter,
        };
        const { data } = await apiFake.patch(`users/${userId}`, body, {
          headers: { authorization: `Bearer ${token}` },
        });
        toast.success("Livro removido da biblioteca!", {
          theme: "colored",
          position: "top-right",
          autoClose: 2000,
        });
        setLibrary(body.library);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addToRecomendedList = async () => {
    try {
      const {
        data: { recomended },
      } = await apiFake(`users/${userId}`, {
        headers: { authorization: `Bearer ${token}` },
      });
      const find = recomended.find((book: iBooks) => {
        return book.id === currentBook?.id;
      });
      if (find) {
        toast.error("Você já recomendou este livro", {
          theme: "colored",
          position: "top-right",
          autoClose: 2000,
        });
      } else {
        const body = { recomended: [...recomended, currentBook] };
        const post = await apiFake.patch(`users/${userId}`, body, {
          headers: { authorization: `Bearer ${token}` },
        });
        toast.success("Livro Recomendado com sucesso", {
          theme: "colored",
          position: "top-right",
          autoClose: 2000,
        });
        try {
          const { data } = await apiFake.get(
            `livrosRecomendados/${currentBook?.id}`,
            { headers: { authorization: `Bearer ${token}` } }
          );
          const votes = data.votes;
          const patch = await apiFake.patch(
            `livrosRecomendados/${currentBook?.id}`,
            { votes: votes + 1 },
            { headers: { authorization: `Bearer ${token}` } }
          );
        } catch (error) {
          const book = { ...currentBook, votes: 1 };
          const post = await apiFake.post(`livrosRecomendados`, book, {
            headers: { authorization: `Bearer ${token}` },
          });
        }
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
        setLibrary,
        removeFromWishlist,
        removeFromLibrary,
        addToRecomendedList,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
