import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchData = (
  url: string,
  { onMount }: { onMount?: boolean } = {}
): any => {
  const [data, setData] = useState<any>(undefined);
  const [isPending, setPending] = useState(false);

  const fetcher = ({
    cb = setData,
    method = 'get'
  }: { cb?: any; method?: 'get' | 'post' } = {}) => {
    setPending(true);
    (axios as any)(url)
      .then((res: any) => cb(res.data))
      .catch((_: any) => cb('API error!'))
      .finally(() => setPending(false));
  };

  useEffect(() => {
    onMount && fetcher();
    // eslint-disable-next-line
  }, []);

  return { data, setData, fetcher, isPending };
};

export { useFetchData };
