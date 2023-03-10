import {type NextPage} from "next";
import Image, {StaticImageData} from "next/image";

import {useCategories, useSelectedPage} from "@/hooks";
import addIcon from "@/assets/icons/add.svg";

const Items: NextPage = () => {
  const {data, isLoading} = useCategories();

  useSelectedPage("items");
  if (isLoading) return <div>Loading...</div>;

  return (
    <section>
      <ul className="flex flex-col gap-7">
        {data && data.categories.length > 0 ? (
          data.categories.map(({id, name, items}) => {
            return (
              <li key={id} className="flex flex-col gap-4">
                <h2 className="font-medium text-lg">{name}</h2>
                <ul className="grid grid-cols-2 gap-x-3 gap-y-6">
                  {items.map(({id, name}) => {
                    return (
                      <li
                        key={id}
                        className="text-sm font-medium flex items-center justify-between p-4 rounded-xl shadow-outer"
                      >
                        {name}
                        <Image
                          alt="Add item icon"
                          className="h-6 w-6"
                          src={addIcon as StaticImageData}
                        />
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })
        ) : (
          <p>Nothing here yet. Add some items...</p>
        )}
      </ul>
    </section>
  );
};

export default Items;
