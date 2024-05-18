// Use the `.tsx` extension for TypeScript support
"use client";
import React from "react";
import { Provider } from "react-redux";
import store from "@/redux/store";
import Users from "@/components/Users";

interface UsersProps {
  children: React.ReactNode;
}

export default function User() {
  return <Provider store={store}>
    <Users/>
    </Provider>;
}
