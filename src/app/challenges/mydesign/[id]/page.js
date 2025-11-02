"use client";

import { useParams } from "next/navigation";
import MyGarageView from "@/app/component/Challenges/MyGarageView/MyGarageView";

export default function ChallengeDetailPage() {
  const { id } = useParams();

  return (
     <div style={{
      position: "fixed",
      inset: 0,
      backgroundColor: "rgba(0,0,0,0.95)",
      zIndex: 9999
    }}>
      <MyGarageView />
    </div>
  );
}
