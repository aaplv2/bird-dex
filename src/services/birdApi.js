const WIKI_API_URL = "https://es.wikipedia.org/api/rest_v1/page/summary/";

export const fetchBirdData = async (birdName) => {
  try {
    const response = await fetch(
      `${WIKI_API_URL}${encodeURIComponent(birdName)}`
    );
    const data = await response.json();
    return {
      title: data.title,
      extract: data.extract,
      image: data.thumbnail?.source || "",
      url: data.content_urls?.desktop?.page || "",
    };
  } catch (error) {
    console.error("Error fetching bird data:", error);
    return null;
  }
};
