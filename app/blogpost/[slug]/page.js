"use client";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const params = useParams();
  

  return (
    <div>
      {params?.slug ? (
        <div>You are viewing: {params.slug}</div>
      ) : (
        <div>No slug found!</div>
      )}
    </div>
  );
};

export default Page;
