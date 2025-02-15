import Icon from "./Icon";
import { useAuth } from "@/contexts/AuthContext";
import { ModalContext } from "@/contexts/ModalContext";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useWindowSize } from "@/hooks/useWindowSize";
import { IconName } from "@/types/type";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState, useEffect, useContext } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const elem = useRef<HTMLDivElement>(null as unknown as HTMLDivElement);
  const profileElem = useRef<HTMLDivElement>(null as unknown as HTMLDivElement);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isProfileMenu, setIsProfileMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true); // State to control visibility

  const isCoursePage = pathname.startsWith("/course/");

  const { openLoginModal } = useContext(ModalContext);
  const account = useAuth();
  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width > 1024) {
      setIsMobileMenuOpen(false);
    }
  }, [windowSize]);

  useOnClickOutside(elem, () => setDropdownOpen(false));
  useOnClickOutside(profileElem, () => setIsProfileMenu(false));

  useEffect(() => {
    document.body.style.overflow =
      isMobileMenuOpen || isDropdownOpen || isProfileMenu ? "hidden" : "";
  }, [isMobileMenuOpen, isDropdownOpen, isProfileMenu]);

  useEffect(() => {
    let hideTimeout: NodeJS.Timeout;
    if (!isHovered && isCoursePage) {
      hideTimeout = setTimeout(() => setIsVisible(false), 1000); // Delay hiding
      setIsProfileMenu(false);
    } else {
      setIsVisible(true); // Show immediately when hovered
    }
    return () => clearTimeout(hideTimeout);
  }, [isHovered, isCoursePage]);

  return (
    <>
      {/* Invisible hover zone above navbar */}
      {isCoursePage && (
        <div
          className="fixed top-0 left-0 w-full h-12 z-40"
          onMouseEnter={() => setIsHovered(true)}
        />
      )}

      <motion.header
        className={`fixed backdrop-blur-sm text-white py-4 px-7 flex justify-between items-center w-full font-orbitron font-medium z-50 ${
          isMobileMenuOpen ? "bg-[#181A1B]" : ""
        }`}
        initial={{ y: isCoursePage ? -100 : 0 }} // Slide-up only in /course/intro
        animate={{ y: isCoursePage && !isHovered ? -70 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        onMouseEnter={() => isCoursePage && setIsHovered(true)}
        onMouseLeave={() => isCoursePage && setIsHovered(false)}
      >
        <div className="flex items-center space-x-1">
          <Icon name="Logo" size={32} />
          <Link href="/" className="md:text-xl text-lg font-bold">
            HACKERFORCE
          </Link>
        </div>

        <nav className="hidden lg:flex space-x-7" ref={elem}>
          {[
            { label: "Home", href: "/" },
            { label: "About us", href: "/about" },
            { label: "Learn", href: "#", isDropdown: true },
            { label: "Subscription", href: "/subscription" },
            { label: "Shop", href: "/shop" },
            { label: "Contact", href: "/contact" },
          ].map(({ label, href, isDropdown }) =>
            isDropdown ? (
              <div key={label} className="relative">
                <button
                  className="flex items-center space-x-1 hover:text-red duration-200 text-sm xl:text-lg"
                  onClick={() => setDropdownOpen((prev) => !prev)}
                >
                  <span className="flex items-center justify-center gap-1">
                    {label}{" "}
                    <IoIosArrowDown
                      className={
                        !isDropdownOpen
                          ? "rotate-0 duration-200"
                          : " rotate-180 duration-200"
                      }
                    />
                  </span>
                </button>
                <DropdownMenu
                  isDropdownOpen={isDropdownOpen}
                  onClose={() => {
                    setDropdownOpen(false);
                  }}
                />
              </div>
            ) : (
              <Link
                key={href}
                href={href}
                className="hover:text-red duration-200 text-sm xl:text-lg"
                onClick={() => setDropdownOpen(false)}
              >
                {label}
              </Link>
            )
          )}
        </nav>

        <div
          className="justify-end items-center gap-3 inline-flex relative"
          ref={profileElem}
        >
          {!account.loggedIn && (
            <div
              className="lg:flex hidden h-9 px-6 py-2 bg-red hover:bg-[#7a1b1f] cursor-pointer duration-200 rounded-lg justify-center items-center"
              onClick={openLoginModal}
            >
              <span className="text-white text-sm font-medium">
                Login/Register
              </span>
            </div>
          )}

          {!isMobileMenuOpen && account.loggedIn && (
            <div
              className="justify-start items-center gap-2 flex cursor-pointer"
              onClick={() => setIsProfileMenu(!isProfileMenu)}
            >
              <Image
                width={40}
                height={50}
                src="/imgs/about/about1.png"
                alt="Avatar"
                className="rounded-full border-2 border-grey"
              />
              <div className="item-center hidden md:flex gap-1 justify-center">
                <div className="text-white text-sm font-medium font-['Orbitron'] leading-tight truncate">
                  Jackthefile
                </div>
                <IoIosArrowDown
                  className={`${
                    !isProfileMenu
                      ? "rotate-0 duration-200"
                      : " rotate-180 duration-200"
                  }`}
                />
              </div>
            </div>
          )}

          <ProfileDropdownMenu
            headerShowState={isVisible}
            isProfileMenu={isProfileMenu}
            onCloseMenu={() => setIsProfileMenu(false)}
            onLogout={() => account.logout()}
          />
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? (
              <IoClose size={26} />
            ) : (
              <Icon name="HamburgerIcon" size={24} />
            )}
          </button>
        </div>
      </motion.header>
      {isMobileMenuOpen && (
        <MobileMenu
          onClose={() => setIsMobileMenuOpen(false)}
          onMobileMenuClose={() => setIsMobileMenuOpen(false)}
          openLoginModal={openLoginModal}
        />
      )}
      <div
        className={`absolute top-0 bottom-0 left-0 right-0 bg-dark bg-opacity-85 z-40 ${
          isDropdownOpen || isProfileMenu ? "block" : "hidden"
        }`}
      />
    </>
  );
};

const DropdownMenu = ({
  onClose,
  isDropdownOpen,
}: {
  onClose: () => void;
  isDropdownOpen: boolean;
}) => (
  <div
    className={`absolute w-[166px] h-[189.99px] z-50 duration-300 ${
      !isDropdownOpen
        ? "opacity-0 pointer-events-none"
        : "opacity-100 pointer-events-auto z-[9999]"
    }`}
  >
    <div className="z-2 w-[164px] h-[178px] top-[10.75px] bg-dark absolute rounded-lg shadow-lg border border-[#2f3132] flex-col justify-center items-center inline-flex">
      <DropdownItem href="/section" label="Sections" onClick={onClose} />
      {[
        { icon: "PracticeIcon", label: "Practice" },
        { icon: "CatalogIcon", label: "Catalog" },
        { icon: "ChambersIcon", label: "Chambers" },
        { icon: "ColosseumsIcon", label: "Colosseums" },
      ].map(({ icon, label }) => (
        <DisabledDropdownItem key={label} icon={icon} label={label} />
      ))}
    </div>
  </div>
);

const MobileDropdownMenu = ({ onClose }: { onClose: () => void }) => (
  <div className="w-full z-50 flex items-center justify-center mt-3">
    <div className="z-2 flex-col justify-center items-center inline-flex w-full">
      <DropdownItem href="/section" label="Sections" onClick={onClose} />
      {[
        { icon: "PracticeIcon", label: "Practice" },
        { icon: "CatalogIcon", label: "Catalog" },
        { icon: "ChambersIcon", label: "Chambers" },
        { icon: "ColosseumsIcon", label: "Colosseums" },
      ].map(({ icon, label }) => (
        <DisabledDropdownItem key={label} icon={icon} label={label} />
      ))}
    </div>
  </div>
);

const MobileMenu = ({
  onClose,
  onMobileMenuClose,
  openLoginModal,
}: {
  onClose: () => void;
  onMobileMenuClose: () => void;
  openLoginModal: () => void;
}) => {
  const [isMobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  return (
    <div
      className="fixed top-[63px] bottom-0 left-0 right-0 bg-[#181a1b] z-50 lg:hidden w-full"
      id="mobileMenu"
    >
      <div className="w-full flex items-center justify-center flex-col relative font-orbitron text-white gap-7 pt-5">
        {[
          { label: "Home", href: "/" },
          { label: "About us", href: "/about" },
          { label: "Learn", href: "#", isDropdown: true },
          { label: "Subscription", href: "/subscription" },
          { label: "Shop", href: "/shop" },
          { label: "Contact us", href: "/contact" },
        ].map(({ label, href, isDropdown }) =>
          isDropdown ? (
            <div
              key={label}
              className="relative w-full flex items-center justify-center flex-col"
            >
              <button
                className="flex items-center space-x-1 hover:text-red duration-200"
                onClick={() => setMobileDropdownOpen((prev) => !prev)}
              >
                <span className="flex items-center justify-center gap-1 text-white">
                  {label} <IoIosArrowDown />
                </span>
              </button>
              {isMobileDropdownOpen && (
                <MobileDropdownMenu
                  onClose={() => {
                    setMobileDropdownOpen(false);
                    onMobileMenuClose();
                  }}
                />
              )}
            </div>
          ) : (
            <Link
              key={href}
              href={href}
              className="hover:text-red duration-200"
              onClick={onClose}
            >
              {label}
            </Link>
          )
        )}
        <div
          className="px-6 py-3 bg-[#972123] hover:bg-[#7a1b1f] duration-200 rounded-lg cursor-pointer"
          onClick={() => {
            onClose();
            openLoginModal();
          }}
        >
          <span className="text-white text-sm font-medium">Login/Register</span>
        </div>
      </div>
    </div>
  );
};

const DropdownItem = ({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) => (
  <Link href={href} className="w-full" onClick={onClick}>
    <div className="cursor-pointer self-stretch px-3 py-2 border-b border-[#2f3132] flex items-center gap-2.5 w-full lg:justify-start justify-center">
      <Icon
        name={"SectionsIcon"}
        size={16}
        className="text-white hover:text-red duration-200"
      />
      <span className="text-white text-xs font-medium">{label}</span>
    </div>
  </Link>
);

const DisabledDropdownItem = ({
  icon,
  label,
}: {
  icon: string;
  label: string;
}) => (
  <div className="self-stretch px-3 py-2 border-b border-[#2f3132] gap-2.5 opacity-50 blur-sm cursor-not-allowed w-full flex items-center lg:justify-start justify-center">
    <Icon
      name={icon as IconName}
      size={16}
      className="text-white hover:text-red duration-200"
    />
    <span className="text-white text-xs font-medium">{label}</span>
  </div>
);

const menuItems = [
  { name: "Dashboard", icon: "DashboardIcon", link: "/dashboard" },
  { name: "Settings", icon: "SettingIcon", link: "/setting" },
  // { name: "My Profile", icon: "ProfileIcon", link: "/setting?tab=account" },
  { name: "T&C’s", icon: "TermIcon", link: "/term" },
  { name: "Log out", icon: "LogoutIcon", link: "/" },
];

const ProfileMenuItem = ({
  name,
  icon,
  isFirst,
  isLast,
  link,
  onCloseMenu,
  onLogout,
}: {
  name: string;
  icon: string;
  isFirst: boolean;
  isLast: boolean;
  link: string;
  onCloseMenu: () => void;
  onLogout: () => void;
}) => (
  <Link
    href={isLast ? "/" : link}
    className={`flex w-full cursor-pointer px-3 py-2 items-center gap-2.5 transition-colors duration-200 
      ${isLast ? "rounded-b-lg" : "border-b border-[#2f3132]"} ${
      isFirst && "rounded-t-lg"
    }
      hover:bg-[#972123]`}
    onClick={() => {
      onCloseMenu();
      isLast && onLogout();
    }}
  >
    <Icon
      name={icon as IconName}
      size={20}
      className="text-white transition-colors duration-200 hover:text-red"
    />
    <span className="text-white text-xs font-medium font-['Orbitron'] leading-tight">
      {name}
    </span>
  </Link>
);
const ProfileDropdownMenu = ({
  headerShowState,
  isProfileMenu,
  onCloseMenu,
  onLogout,
}: {
  headerShowState: boolean;
  isProfileMenu: boolean;
  onCloseMenu: () => void;
  onLogout: () => void;
}) => (
  <div
    className={`absolute bg-[#1d1f20] top-12 duration-300 right-1 rounded-b-lg
    ${
      !isProfileMenu
        ? "opacity-0 pointer-events-none"
        : "opacity-100 pointer-events-auto z-[9999]"
    }
 `}
  >
    <div className="w-[164px] rounded-lg shadow-[0px_4px_32px_0px_rgba(0,0,0,0.70)] border border-grey flex flex-col">
      {menuItems.map((item, index) => (
        <ProfileMenuItem
          onCloseMenu={onCloseMenu}
          onLogout={onLogout}
          key={item.name}
          name={item.name}
          icon={item.icon}
          isLast={index === menuItems.length - 1}
          link={item.link}
          isFirst={index === 0}
        />
      ))}
    </div>
  </div>
);

export default Header;
