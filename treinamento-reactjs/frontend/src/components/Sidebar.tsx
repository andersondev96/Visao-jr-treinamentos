import Link from "next/link";
import { SideBarContainer } from "../styles/components/Sidebar";

import { FaUserAlt } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import { useState } from "react";

export function SideBar() {
  return (
    <SideBarContainer>
      <FaUserAlt className="userIcon" size={24} />
      <Link href="/">
        <a>
          <AiOutlineClose className="closeIcon" size={24} />
        </a>
      </Link>
    </SideBarContainer>
  );
}
