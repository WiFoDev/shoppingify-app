import {SuperBalls} from "@uiball/loaders";

import {useCategories} from "@/hooks";

import {Category} from "./Category";

export const CategoryList = () => {
  const {data, isLoading} = useCategories();

  if (isLoading)
    return (
      <div className="grid place-content-center pt-6">
        <SuperBalls color="black" size={45} speed={1.4} />
      </div>
    );
  if (data && data.categories.length === 0)
    return <p>Nothing here yet. Add some items...</p>;

  return (
    <ul className="flex flex-col gap-7">
      {data &&
        data.categories.map((category) => {
          return <Category {...category} key={category.id} />;
        })}
    </ul>
  );
};
