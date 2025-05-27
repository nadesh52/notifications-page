import { message } from "@/constants";
import Image from "next/image";
import React from "react";

export default function CardList({ isRead }: any) {
  return (
    <div className="desktop:gap-[8px] flex flex-col gap-[12px]">
      {/* card */}
      <div className={`${!isRead && "bg-secondary-100"} card-bg`}>
        <div className="flex flex-row gap-[14px]">
          <div>
            <Image
              src={`assets/images/avatar-mark-webber.webp`}
              width={90}
              height={90}
              alt="avatar"
              className="avatar"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-secondary-500 leading-[1.5]">
              <span className="card-name">Mark Webber</span>reacted to your
              recent post{" "}
              <span className="card-link font-bold">
                My first tournament today!
              </span>
              {!isRead && <div className="noti"></div>}
            </div>
            <p className="text-secondary-400">1m ago</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className={`${!isRead && "bg-secondary-100"} card-bg`}>
        <div className="flex flex-row gap-[14px]">
          <div>
            <Image
              src={`assets/images/avatar-angela-gray.webp`}
              width={90}
              height={90}
              alt="avatar"
              className="avatar"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-secondary-500 leading-[1.5]">
              <span className="card-name">Angela Gray</span>followed you
              {!isRead && <div className="noti"></div>}
            </div>
            <p className="text-secondary-400">5m ago</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className={`${!isRead && "bg-secondary-100"} card-bg`}>
        <div className="flex flex-row gap-[14px]">
          <div>
            <Image
              src={`assets/images/avatar-jacob-thompson.webp`}
              width={90}
              height={90}
              alt="avatar"
              className="avatar"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-secondary-500 leading-[1.5]">
              <span className="card-name">Jacob Thompson</span>has joined your
              group{" "}
              <span className="text-primary-blue card-link font-bold">
                Chess Club
              </span>
              {!isRead && <div className="noti"></div>}
            </div>
            <p className="text-secondary-400">1day ago</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="rounded-md p-4">
        <div className="flex flex-row gap-[14px]">
          <div>
            <Image
              src={`assets/images/avatar-rizky-hasanuddin.webp`}
              width={90}
              height={90}
              alt="avatar"
              className="avatar"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-secondary-500 leading-[1.5]">
              <span className="card-name">Rizky Hasanuddin</span>sent your
              private message
            </p>
            <p className="text-secondary-400">5days ago</p>
            <div className="border-secondary-200 desktop:rounded-md hover:bg-secondary-200 mt-[16px] rounded border px-[16px] py-[18px] hover:cursor-pointer">
              <p className="text-secondary-500">{message}</p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="rounded-md p-4">
        <div className="flex flex-row gap-[14px]">
          <div>
            <Image
              src={`assets/images/avatar-kimberly-smith.webp`}
              width={90}
              height={90}
              alt="avatar"
              className="avatar"
            />
          </div>
          <div className="flex grow flex-col">
            <p className="text-secondary-500 leading-[1.5]">
              <span className="card-name">Kimberly Smith</span>commented on your
              picture
            </p>
            <p className="text-secondary-400">1week ago</p>
          </div>
          <div>
            <Image
              src={"assets/images/image-chess.webp"}
              width={90}
              height={90}
              alt="avatar"
              className="avatar hover:ring-secondary-200 rounded-md hover:cursor-pointer hover:ring-2"
            />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="rounded-md p-4">
        <div className="flex flex-row gap-[14px]">
          <div>
            <Image
              src={`assets/images/avatar-nathan-peterson.webp`}
              width={90}
              height={90}
              alt="avatar"
              className="avatar"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-secondary-500 leading-[1.5]">
              <span className="card-name">Nathan Peterson</span>reacted to your
              recent recent post{" "}
              <span className="card-link font-bold">
                5 end-game strategies to increase your win rate
              </span>
            </p>
            <p className="text-secondary-400">2weeks ago</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="rounded-md p-4">
        <div className="flex flex-row gap-[14px]">
          <div>
            <Image
              src={`assets/images/avatar-anna-kim.webp`}
              width={90}
              height={90}
              alt="avatar"
              className="avatar"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-secondary-500 leading-[1.5]">
              <span className="card-name">Anna Kim</span>left the group{" "}
              <span className="text-primary-blue card-link font-bold">
                Chess Club
              </span>
            </p>
            <p className="text-secondary-400">2weeks ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}
