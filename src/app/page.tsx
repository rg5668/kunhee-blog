import PostList from "@/components/Posts/PostList";
import MainBanner from "@/components/common/MainBanner";

export default function Home() {
  return (
    <div>
      <MainBanner />
      <PostList />
      <PostList />
      <PostList />
      <PostList />
    </div>
  );
}
