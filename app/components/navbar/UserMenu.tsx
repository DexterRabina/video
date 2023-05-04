"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import UserItems from "./UserItems";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";
import useRentModal from "@/app/hooks/useRentModal";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}
const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal();

  const [isOpen, setIsOpen] = useState(false);
  const toogleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }
    // open rent modal
    rentModal.onOpen();
  }, [currentUser, loginModal, rentModal]);
  return (
    <>
      <div className="relative">
        <div className="flex flex-row items-center gap-3">
          <div
            onClick={onRent}
            className="hidden px-4 py-3 text-sm font-semibold transition rounded-full cursor-pointer md:block hover:bg-neutral-100"
          >
            Airbnb your Home
          </div>
          <div
            onClick={toogleOpen}
            className="
            p-2
            md:py-1 
            md-px-2 
            border-[1px] 
            border-neutral-200 
            flex 
            flex-row 
            items-center 
            rounded-full 
            cursor-pointer 
            hover:border-green-300 
            hover:shadow-xl 
            transition"
          >
            <AiOutlineMenu />
            <div className="hidden pl-1 md:block">
              <Avatar src={currentUser?.image} />
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="absolute rounded-xl shadow-md w-[40vw] bg-white overflow-hidden right-0 top-12 md:w-3/4 text-sm ">
            <div className="flex flex-col cursor-pointer">
              {currentUser ? (
                <>
                  <UserItems label="My Trips" onClick={() => {}} />
                  <UserItems label="My favorites" onClick={() => {}} />
                  <UserItems label="My properties" onClick={() => {}} />
                  <UserItems label="My revervation" onClick={() => {}} />
                  <UserItems
                    label="Airbnb my home"
                    onClick={rentModal.onOpen}
                  />
                  <hr />
                  <UserItems label="Log out" onClick={() => signOut()} />
                </>
              ) : (
                <>
                  <UserItems label="Log in" onClick={loginModal.onOpen} />
                  <UserItems label="Sign up" onClick={registerModal.onOpen} />
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserMenu;
