"use client";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const params = useParams();
  const router = useRouter();

  return (
    <div>
      {params?.slug ? (
        <div>You are viewing: {params.slug}</div>
      ) : (
        <div>No slug found!</div>
      )}

      <button type="button" onClick={() => router.push("/about")}>
        Dashboard
      </button>
    </div>
  );
};

export default Page;
