import axiosInstance from "./axiosInstance";

// Fetch blogs with optional category filter
export const fetchBlogs = async (category = "", page = 1, signal) => {
  let url = `/api/worx-sales-blogs?populate=*&pagination[page]=${page}&pagination[pageSize]=6`;
  if (category && category !== "All") {
    const encodedCategory = encodeURIComponent(category);
    url += `&filters[categories][name][$containsi]=${encodedCategory}`;
  }
  try {
    const { data } = await axiosInstance.get(url, { signal });
    return data;
  } catch (error) {
    throw new Error(`Blogs API Error: ${error.message}`);
  }
};

// Fetch a single blog by slug
export const fetchBlogBySlug = async (slug, signal) => {
  try {
    const { data } = await axiosInstance.get(
      `/api/worx-sales-blogs?filters[slug][$eq]=${slug}&populate=*`,
      { signal }
    );
    return data;
  } catch (error) {
    throw new Error(`Blogs API Error: ${error.message}`);
  }
};
