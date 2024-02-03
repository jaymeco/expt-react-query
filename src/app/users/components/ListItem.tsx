'use client'

import { Eye } from "lucide-react";
import Image from "next/image";

interface ListItemProps {
  name: string;
  avatar: string;
  description: string;
  login: string;
}

export default function ListItem(props: ListItemProps) {
  const { name, avatar, description, login } = props;

  function goToUserDetails() {
    console.log(login);
  }

  return (
    <div onClick={() => goToUserDetails()} className="group/item w-full px-2 py-3 cursor-pointer hover:bg-neutral-950 flex flew-row items-center justify-between">
      <div className="flex flex-row items-center gap-4">
        <Image className="rounded" alt={name} src={avatar} />
        <div>
          <h4>{name}</h4>
          <p className="text-neutral-500 text-sm">{description}</p>
        </div>
      </div>
      <Eye className="hidden group-hover/item:block text-neutral-500" />
    </div>
  );
}
