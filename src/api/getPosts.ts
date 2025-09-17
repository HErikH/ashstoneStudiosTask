import type { T_Post } from "../types/posts";

export async function getPosts(): Promise<T_Post[] | undefined> {
  try {
    const response = await fetch(
      "https://cloud.codesupply.co/endpoint/react/data.json"
    );

    return response.json();
  } catch (error) {
    console.error("Something went wrong: ", error);
  }
}
