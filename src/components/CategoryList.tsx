import {useCategories} from "@/hooks";

import {Category} from "./Category";

export const CategoryList = () => {
  const {data, isLoading} = useCategories();

  if (isLoading) return <div>Loading...</div>;
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
