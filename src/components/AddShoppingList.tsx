export const AddShoppingList = () => {
  return (
    <div className="relative rounded-br-3xl bg-white px-4 py-7 sm:rounded-none sm:rounded-bl-3xl">
      <input
        className="w-full rounded-lg border-2 border-gray-300 px-4 py-5 shadow-outer outline-none"
        placeholder="Enter a name"
        type="text"
      />
      <button className="absolute right-[15px] top-[29.5px] rounded-lg border-[1px] border-gray-300 bg-gray-300 px-6 py-5 font-bold text-white">
        Save
      </button>
    </div>
  );
};
