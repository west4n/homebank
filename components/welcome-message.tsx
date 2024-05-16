"use client";

import { useUser } from "@clerk/nextjs";

export const WelcomeMessage = () => {
  const { user, isLoaded } = useUser();

  return (
    <div className="mb-4 space-y-2">
      <h2 className="text-2xl font-medium text-white lg:text-4xl">
        С возвращением{isLoaded ? ", " : ""}
        {user?.firstName} 👋🏻
      </h2>
      <p className="text-sm text-[#89B6FD] lg:text-base">
        Это обзор вашего финансового отёта.
      </p>
    </div>
  );
};
