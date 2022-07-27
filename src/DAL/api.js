import pianos from "../data/productsData.json";
import categories from "../data/categoriesData.json";
import pianosImages from "../data/productsImgs.json";

const mapPiano = (piano) => {
  const pianoCategory = categories.find((category) => category.id === piano.id);
  const pianoImgs = [];
  pianosImages.forEach(
    (pianoImg) =>
      pianoImg.id === piano.id &&
      pianoImgs.push({
        imgSrc: pianoImg.imgSrc,
        imgTitleAlt: pianoImg.imgTitleAlt,
      })
  );
  return {
    id: piano.id,
    imgs: pianoImgs,
    category: pianoCategory,
    arrivedToStore: piano.arrived_to_store,
    unitsInStock: piano.units_in_stock,
    unitPrice: piano.unit_price,
  };
};

export const getPianos = () => {
  return new Promise((res) => {
    const mappedPianos = [];
    for (const piano of pianos) {
      mappedPianos.push(mapPiano(piano));
    }
    setTimeout(() => {
      res(mappedPianos);
    }, 2000);
  });
};

export const getPiano = (id) => {
  return new Promise((res) => {
    id = Number(id);
    const requestedPiano = pianos.find((piano) => piano.id === id);
    setTimeout(() => {
      res(mapPiano(requestedPiano));
    }, 2000);
  });
};
