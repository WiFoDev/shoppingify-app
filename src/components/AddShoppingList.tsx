export const AddShoppingList = () => {
  return (
    <div className="relative rounded-br-3xl bg-white py-7 px-4">
      <input
        className="w-full rounded-lg border-2 border-gray-300 py-5 px-4 shadow-outer outline-none"
        placeholder="Enter a name"
        type="text"
      />
      <button className="absolute top-[29.5px] right-[15px] rounded-lg border-[1px] border-gray-300 bg-gray-300 py-5 px-6 font-bold text-white">
        Save
      </button>
    </div>
  );
};
