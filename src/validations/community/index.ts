import * as Yup from "yup";

const create_post_schema = Yup.object().shape({
  description: Yup.string().required("Content cant be empty"),
  status: Yup.string().required("Status of post is require"),
  title: Yup.string(),
});

export { create_post_schema };
