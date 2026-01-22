import { client } from "@/utils/http";

const USER_ID = 3643;

export const getPosts = async () => {
  const response = await client.get(`/posts?userId=${USER_ID}`);

  return response.data;
};

export const createPost = async ({ title, body }) => {
  const response = await client.post("/posts", {
    title,
    body,
    userId: USER_ID,
  });

  return response.data;
};

export const updatePost = async ({ id, title, body }) => {
  const response = await client.patch(`/posts/${id}`, {
    userId: USER_ID,
    title,
    body,
  });

  return response.data;
};

export const deletePost = async (id) => {
  const response = await client.delete(`/posts/${id}`);

  return response.data;
};
