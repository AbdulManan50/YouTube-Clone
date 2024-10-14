import React from "react";

export default function Loading() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="loader border-t-4 border-b-4 border-white rounded-full w-16 h-16 animate-spin"></div>
      </div>
    </>
  );
}
