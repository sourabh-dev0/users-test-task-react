"use client"
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import store from "@/redux/store";

const inter = Inter({ subsets: ["latin"] });


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <Provider store={store}>
      {children}
      </Provider>

  );
}
