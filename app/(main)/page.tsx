import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
import DashboardCard from "@/components/dashboard/DashboardCard";
import PostsTable from "@/components/posts/PostsTable";
import { Newspaper, Folder, User, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        <DashboardCard
          title="Post"
          count={100}
          icon={
            <Newspaper
              className="text-slate-500 dark:text-slate-200"
              size={62}
            />
          }
        />
        <DashboardCard
          title="Categories"
          count={12}
          icon={
            <Folder className="text-slate-500 dark:text-slate-200" size={62} />
          }
        />
        <DashboardCard
          title="Users"
          count={750}
          icon={
            <User className="text-slate-500 dark:text-slate-200" size={62} />
          }
        />
        <DashboardCard
          title="Comments"
          count={1200}
          icon={
            <MessageCircle
              className="text-slate-500 dark:text-slate-200"
              size={62}
            />
          }
        />
      </div>
      <AnalyticsChart />
      <PostsTable limit={5} />
    </>
  );
}
