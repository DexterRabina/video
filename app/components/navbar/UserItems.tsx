"use client";

interface UserItemsProps {
  onClick: () => void;
  label: string;
}

const UserItems: React.FC<UserItemsProps> = ({ onClick, label }) => {
  return (
    <>
      <div
        onClick={onClick}
        className="font-semibold px-4 py-3 hover:bg-neutral-200"
      >
        {label}
      </div>
    </>
  );
};

export default UserItems;
