import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { AuthContextProvider, useAuth } from "../context/authContext";
import { Slot, useRouter, useSegments } from "expo-router";

function MainLayout() {
  const { isAuthenticated } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (typeof isAuthenticated === "undefined") return;

    if (!isAuthenticated) return router.replace("signin");

    if (segments[0] !== "app") return router.replace("home");
  }, [isAuthenticated]);

  return <Slot />;
}

export default function Rootlayout() {
  return (
    <AuthContextProvider>
      <MainLayout />
    </AuthContextProvider>
  );
}
