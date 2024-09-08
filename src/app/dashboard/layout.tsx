import { Header, SideNav } from "@/app/dashboard/_components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="md:w-full md:max-w-64 fixed hidden md:block">
        <SideNav />
      </div>
      <div className="md:ml-64">
        <Header />
        {children}
      </div>
    </div>
  );
}
