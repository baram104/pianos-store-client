import pianos from "./data/productsData.json";
import categories from "./data/categoriesData.json";
import pianosImages from "./data/productsImgs.json";

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
    name: piano.name,
    description: piano.description,
    category: pianoCategory,
    arrivedToStore: piano.arrived_to_store,
    unitsInStock: piano.units_in_stock,
    unitPrice: piano.unit_price,
  };
};

export const getPianos = async () => {
  const res = await fetch("http://localhost:3100/products");
  return res.json();
};

export const getCategories = async () => {
  const res = await fetch("http://localhost:3100/categories");
  return res.json();
};

export const getPiano = async (id) => {
  const res = await fetch(`http://localhost:3100/products/${id}`);
  return res.json();
};
