import { useMemo } from "react";

export function useSortListObj(list: any[] | undefined) {
  const listSorted = useMemo(() => {
    if (!list) return [];
    return list
      .map((el) => ({
        url: el.url,
        id: el.id,
        name: el.name,
        created_at: new Date(el.updated_at),
      }))
      .sort((objA, objB) => Number(objB.created_at) - Number(objA.created_at));
  }, [list]);
  return listSorted;
}
