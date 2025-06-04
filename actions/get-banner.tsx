import { Banner } from "@/types";

const URL = `${process.env.PUBLIC_API_URL}/banners`;

const getBanner = async (id: string): Promise<Banner | null> => {
  const res = await fetch(`${URL}/${id}`, { next: { revalidate: 0 } });

  if (!res.ok) {
    console.error("Failed to fetch banner:", res.statusText);
    return null;
  }

  const data = await res.json();

  // Optional: validasi struktur data
  if (!data || !data.label || !data.imageUrl) {
    console.warn("Invalid banner data structure:", data);
    return null;
  }

  return data;
};

export default getBanner;
