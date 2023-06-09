"use client";

import AddPost from "./components/AddPost";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

//fetch all posts
const allPosts = async () => {
  const response = await axios.get("/api/posts/getPosts");
  return response.data;
};

export default function Home() {
  const { data, error, isLoading } = useQuery({
    queryFn: allPosts,
    queryKey: ["posts"],
  });
  if (error) return error;
  if (isLoading) return "Loading...";
  console.log(data);
  return (
    <main>
      <AddPost />
    </main>
  );
}
