import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

  const { data: images, loading } = useFetchGifs( category );

  return (
    <>
      <h3> {category} </h3>
      {loading && "Cargando"}
      <div className="animate__animated animate__fadeInDown card-grid">
        {images.map((img, index) => {
          return <GifGridItem key={index} {...img} />;
        })}
      </div>
    </>
  );
};
