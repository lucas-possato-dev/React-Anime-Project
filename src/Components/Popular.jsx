import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/global";
import styled from "styled-components";

function Popular() {
  const { popularAnime, isSearch } = useGlobalContext();

  const conditionalRender = () => {
    if (!isSearch) {
      return popularAnime.map((anime) => {
        return (
          <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
            <img src={anime.images.jpg.large_image_url} alt="" />
          </Link>
        );
      });
    }
  };
  return (
    <PopularStyled>
      <div className="popular-anime">{conditionalRender()}</div>
    </PopularStyled>
  );
}

const PopularStyled = styled.div``;

export default Popular;
