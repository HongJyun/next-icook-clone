"use client";
import Image from "next/image";
import Link from "next/link";

interface Link {
  label: string;
  icon?: string;
  href: string;
}

const platformLinks: Link[] = [
  {
    label: "愛料理",
    icon: "",
    href: "/",
  },
  {
    label: "生活誌",
    icon: "",
    href: "/",
  },
  {
    label: "市集",
    icon: "",
    href: "/",
  },
  {
    label: "愛料理 TV",
    icon: "",
    href: "/",
  },
  {
    label: "iGood",
    icon: "",
    href: "/",
  },
  {
    label: "試用推薦",
    icon: "",
    href: "/",
  },
];

export const vipLink: Link = {
  label: "升級 VIP",
  icon: "",
  href: "/",
};

const authLinks: Link[] = [
  {
    label: "登入",
    icon: "",
    href: "/",
  },
  {
    label: "註冊",
    icon: "",
    href: "/",
  },
];

const NavBarMobile = () => {
  const toggleSidebar = () => {
    const overlay = document.querySelector("#nav .overlay");
    const sidebar = document.querySelector("#nav .sidebar");
    overlay?.classList.toggle("hidden");
    sidebar?.classList.toggle("translate-x-full");
  };

  return (
    <div className="flex items-center lg:hidden">
      <button onClick={toggleSidebar}>
        <Image
          src="/assets/icons/menu.svg"
          width={20}
          height={20}
          alt="menu"
        ></Image>
      </button>
      <div
        onClick={toggleSidebar}
        className="overlay hidden fixed inset-0 z-10 bg-black bg-opacity-70"
      ></div>
      <div className="sidebar fixed top-0 right-0 z-10 flex flex-col w-[240px] h-full bg-white divide-y divide-[#fbfaf8] transform translate-x-full transition-transform duration-200">
        <div className="py-[8px] px-[16px] text-[12px] text-neutral-tertiary bg-brand-light">
          愛料理
        </div>
        {platformLinks.map((link) => (
          <Link
            key={link.label}
            className="p-[16px] text-neutral-main hover:underline hover:text-neutral-secondary transition-colors duration-200"
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
        <Link
          key={vipLink.label}
          className="p-[16px] text-brand-primary hover:underline hover:text-neutral-secondary transition-colors duration-200"
          href={vipLink.href}
        >
          {vipLink.label}
        </Link>
        {authLinks.map((link) => (
          <Link
            key={link.label}
            className="p-[16px] text-neutral-main hover:underline hover:text-neutral-secondary transition-colors duration-200"
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export const NavBar = () => {
  return (
    <nav
      id="nav"
      className="bg-white border-t-2 border-t-brand-primary border-b border-b-[#e2e0db]"
    >
      <div className="container flex justify-between">
        <Link href="/">
          <figure className="relative">
            <Image
              className="w-[190px] md:w-[220px]"
              width={190}
              height={190}
              alt="Logo"
              src="https://tokyo-kitchen.icook.network/logos/iCook-desktop.svg"
            ></Image>
            <figcaption className="absolute top-1/2 left-[64px] flex flex-col transform -translate-y-1/2">
              <span className="text-[1.2rem] text-brand-primary">
                開啓美好生活
              </span>
              <span className="text-[2.1rem] text-neutral-main font-medium">
                愛料理
              </span>
            </figcaption>
          </figure>
        </Link>
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-[16px]">
            {platformLinks.map((link) => (
              <li key={link.label}>
                <Link
                  className="text-neutral-main hover:underline hover:text-neutral-secondary transition-colors duration-200"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pr-[16px] border-r" key={vipLink.label}>
              <Link
                className="text-brand-primary hover:underline hover:text-neutral-secondary transition-colors duration-200"
                href={vipLink.href}
              >
                {vipLink.label}
              </Link>
            </li>
          </ul>
          <ul className="pl-[16px] flex items-center gap-[16px]">
            {authLinks.map((link) => (
              <li key={link.label}>
                <Link
                  className="text-neutral-main hover:underline hover:text-neutral-secondary transition-colors duration-200"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <NavBarMobile></NavBarMobile>
      </div>
    </nav>
  );
};
