import { useState } from "react";
import { useQuery } from "react-query";

import { getAPI } from '../API/Apis';

function Enabled() {
  const [flag, setFlag] = useState(false);
  const { isLoading, isSuccess, status, isError, data, error } = useQuery("get_test_enabled", getAPI, { enabled: flag, refetchOnWindowFocus: false});

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <p>Enabled page: { data?.text }</p>
        {/* 데이터가 캐싱되어 있어서 버튼을 눌러도 로딩중으로 안뜸 */}
        {isLoading && <p>원초적인 방법으로 로딩중...</p>}
        <button onClick={() => {setFlag(true);}}>누르면 Query 발동!!</button>
      </div>
    </div>
  );
}

export default Enabled;
