import Image from "next/image";
import Link from "next/link";
import React from "react";
import ActionButton from "../ActionButton";

const EventCard = ({ event }) => {
  const { imageUrl, name, location, interested_ids, going_ids, id } = event || [];
  return (
    <div className="overflow-hidden rounded-md bg-[#242526]">
      <Image
        src={imageUrl}
        alt={name}
        className="w-full"
        width={500}
        height={500}
      />

      <div className="p-3">
        <Link href={`/details/${id}`} className="font-bold text-lg">
          {name}
        </Link>
        <p className="text-[#9C9C9C] text-sm mt-1">{location}</p>
        <div className="text-[#737373] text-sm mt-1">
          <span>{interested_ids?.length} Interested</span>
          <span className="mx-1">|</span>
          <span>{going_ids?.length} Going</span>
        </div>
        <ActionButton />
      </div>
    </div>
  );
};

export default EventCard;
