import axiosInstance from "./axiosInstance";

// Fetch white papers with optional category filter
export const fetchWhitePapers = async (category = "", page = 1, signal) => {
  let url = `/api/worx-sales-whitepapers?populate=*&pagination[page]=${page}&pagination[pageSize]=6`;
  if (category && category !== "All") {
    const encodedCategory = encodeURIComponent(category);
    url += `&filters[categories][name][$containsi]=${encodedCategory}`;
  }
  try {
    const { data } = await axiosInstance.get(url, { signal });
    return data;
  } catch (error) {
    throw new Error(`White Papers API Error: ${error.message}`);
  }
};

// Fetch a single white paper by slug
export const fetchWhitepaperBySlug = async (slug, signal) => {
  try {
    const { data } = await axiosInstance.get(
      `/api/worx-sales-whitepapers?filters[slug][$eq]=${slug}&populate=*`,
      { signal }
    );
    return data;
  } catch (error) {
    throw new Error(`White Papers API Error: ${error.message}`);
  }
};
