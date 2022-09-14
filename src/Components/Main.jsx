import { useQuery } from "react-query";

import { getAPI } from '../API/Apis';

function Main() {
  const { isLoading, isSuccess, status, isError, data, error } = useQuery("get_test_main", (param) => {
    console.log(param) // param 으로 쿼리키등을 받아올 수 있다.
    return getAPI();
  }, {
    retry: 0, // 실패시 재호출 몇번 할지
    refetchOnWindowFocus: false, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
    suspense: true, // suspense 기능 사용
    onSuccess: data => {
      // 성공시 호출
      console.log(data);
    },
    onError: e => {
      // 실패시 호출 (401, 404 같은 error가 아니라 정말 api 호출이 실패한 경우만 호출됩니다.)
      // 강제로 에러 발생시키려면 api단에서 throw Error 날립니다.
      console.log(e.message);
    }
  
  });

  return (
    <div>
      <div className="11">
        Main page: {data.text}
      </div>
    </div>
  );
}

export default Main;
