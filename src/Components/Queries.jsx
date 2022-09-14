import { useState, useEffect, useMemo } from "react";
import {  useQueries } from "react-query";

import { getAPI } from '../API/Apis';

function Queries() {
  // 전체 작업들을 여기서 명시
  const result = useQueries([
    {
      queryKey: ["queries_1"],
      queryFn: parms => {
        console.log(parms)
        return getAPI ()
      },
      refetchOnWindowFocus: false
    },
    {
      queryKey: ["queries_2"],
      queryFn: getAPI,
      refetchOnWindowFocus: false
    }
  ]);

  const loadingFinishAll = useMemo(() => {
    return result.some(result => result.isLoading);
  }, [result]);

  const isfinishAll = useMemo(() => {
    return result.every(result => result.status === 'success');
  }, [result]);
  
  useEffect(() => {
    console.log(result); // 여기에 리스트로 useQuery의 값들이 넘어온다
  }, [result]);

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <p>Queries page: {loadingFinishAll && '...loading'} { isfinishAll && 'all success'}</p>
      </div>
    </div>
  );
}

export default Queries;
