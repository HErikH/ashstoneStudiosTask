import { useMemo, useState } from "react";
import Header from "./components/header/Header";
import Posts from "./components/posts/Posts";
import { useDebounce } from "use-debounce";
import "./App.scss";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery] = useDebounce(searchQuery, 300);
  
  const processedQuery = useMemo(() => {
    return debouncedSearchQuery.trim().toLowerCase();
  }, [debouncedSearchQuery]);

  return (
    <>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Posts processedQuery={processedQuery} />
    </>
  );
}

export default App;
