"use client";
import React, { useState } from "react";
import CardList from "./CardList";

export default function Wrapper() {
  const [isRead, setIsRead] = useState<boolean>(false);
  return (
    <div className="desktop:rounded-2xl desktop:pt-[37px] desktop:px-[30px] bg-white px-4 py-6">
      <div className="flex flex-row items-center justify-between">
        <div className="desktop:gap-[12px] flex flex-row items-center gap-[10px]">
          <div className="desktop:text-[24px] text-[20px] leading-[25px] font-bold">
            Notifications
          </div>
          {!isRead && <div className="badge">3</div>}
        </div>
        <button
          onClick={() => setIsRead(!isRead)}
          className="text-secondary-500 desktop:text-[16px] card-link text-[14px]"
        >
          Mark all as read
        </button>
      </div>
      <div className="desktop:mt-[33px] mt-[24px]">
        <CardList isRead={isRead} />
      </div>
    </div>
  );
}
