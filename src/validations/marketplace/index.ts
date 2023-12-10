import * as Yup from "yup";

const create_swap_listings_schema = Yup.object().shape({
  description: Yup.string().required(),
  isbn: Yup.string(),
  title: Yup.string().required(),
  condition: Yup.string().required(),
  price: Yup.string().required(),
  genre: Yup.string().required(),
  author: Yup.string().required(),
});

export { create_swap_listings_schema };
