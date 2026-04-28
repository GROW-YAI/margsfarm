import React from 'react';
import {
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { BsDroplet } from "react-icons/bs";
import { RiCustomerServiceLine } from "react-icons/ri";
import { MdOutlineCompost } from "react-icons/md";
import { LiaSeedlingSolid } from "react-icons/lia";
import { IoCallOutline } from "react-icons/io5";
import { IoLeafOutline } from "react-icons/io5";

export interface NavLink {
  name: string;
  id: string;
  icon?: React.ReactNode;
}

export interface Fertilizer {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const K = {
  NAVLINKS: [
    {
      name: "HOME",
      icon: <AiOutlineHome size={25} />,
      id: "#home",
    },
    {
      name: "ABOUT US",
      icon: <AiOutlineUser size={23} />,
      id: "#about",
    },
    {
      name: "SERVICES",
      icon: <RiCustomerServiceLine size={23} />,
      id: "#services",
    },
    {
      name: "CONTACT US",
      icon: <IoCallOutline size={23} />,
      id: "#contact",
    },
  ] as const,

  FERTILIZERS: [
    {
      icon: <BsDroplet size={25} color="#404A3D" />,
      title: "Liquid Fertilizer",
      description: "Liquid fertilizers are easy to apply and provide nutrients directly to plants.",
    },
    {
      icon: <MdOutlineCompost size={25} color="#404A3D" />,
      title: "Compost",
      description: "Compost is organic matter that has been decomposed and recycled as a fertilizer.",
    },
    {
      icon: <LiaSeedlingSolid size={25} color="#404A3D" />,
      title: "Manure",
      description: "Manure is animal waste used to enrich soil with essential nutrients.",
    },
    {
      icon: <IoLeafOutline size={25} color="#404A3D" />,
      title: "Biofertilizer",
      description: "Biofertilizers contain living microorganisms that promote plant growth by increasing nutrient availability and improving soil health.",
    },
  ] as const,
};

export default K;
