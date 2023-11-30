import { Pagination } from "@/models/pagination";
import { InfiniteData } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export namespace PaginationLogic {
  export const handleGetNextParam = <T>(
    lastPage: Pagination<T>
  ): number | false => {
    if (lastPage.meta.current_page < lastPage.meta.last_page) {
      return lastPage.meta.current_page + 1;
    }
    return false;
  };

  export const handleCalculateDataLength = <T>(
    data: InfiniteData<Pagination<T>> | undefined
  ): number => {
    if (data === undefined || !data.pages) {
      return 0;
    }
    const dataLength = data.pages.reduce((accumulator, page) => {
      return accumulator + page.data.length;
    }, 0);
    return dataLength;
  };

  export const useDataLength = <T>(
    data: InfiniteData<Pagination<T>> | undefined
  ): number => {
    const [dataLength, setDataLength] = useState(0);

    useEffect(() => {
      setDataLength(PaginationLogic.handleCalculateDataLength(data));
    }, [data]);

    return dataLength;
  };
}
