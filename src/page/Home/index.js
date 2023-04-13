import { Navigate } from "react-router-dom";
import { useGifs } from "hooks/useGifs";
import ListGifs from "components/ListGifs";
import TrendingSearches from "components/TrendingSearches";
import Spinner from "components/Spinner";
import SearchForm from "components/SearchForm";
import { AppMain, AppWrapper } from "./Home.styles";
import { Helmet } from "react-helmet";

export default function Home() {
  const { gifs, errorState, loading } = useGifs();

  if (loading) {
    return (
      <>
        <Helmet>
          <title>Cargando...</title>
        </Helmet>
        <Spinner />
      </>
    );
  }

  if (errorState.hasError) return <Navigate to="/404" />;

  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>
      <header className="o-header">
        <SearchForm />
      </header>
      <AppWrapper>
        <AppMain>
          <div className="App-results">
            <h3 className="App-title">Última búsqueda</h3>
            <ListGifs gifs={gifs} />
          </div>
          <div className="App-category">
            <TrendingSearches />
          </div>
        </AppMain>
      </AppWrapper>
    </>
  );
}
