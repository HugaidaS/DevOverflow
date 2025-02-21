import React from "react";

import LeftSideBar from "@/components/navigation/LeftSideBar/LeftSideBar";
import Navbar from "@/components/navigation/navbar";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      <Navbar />
      <div className="flex min-h-screen pt-20">
        <LeftSideBar />
        <div className="w-full">{children}</div>
      </div>
    </main>
  );
};
export default RootLayout;
