import { useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";

import { postAPI } from '../API/Apis';

// useMutation은 post, patch/put, delete 요청시 사용
export default function Mutation() {
    const queryClient = useQueryClient();

    const { isLoading, isSuccess, status, isError, data, error, mutate } = useMutation(postAPI, {
        onMutate: variable => {
            console.log("onMutate", variable);
        },
        retry: 1, // 실패시 재호출 몇번 할지
        onSuccess: data => {
            console.log(data)   // response
            queryClient.invalidateQueries('get_test_main');  // post 이후 get_test_main 으로 맵핑된 get함수를 호출한다.
            // queryClient.setQueryData(["get_test_main", { id: 5 }], data);    // post에서 나온 값을 get요청 할때는 setQueryData사용
        },
        onError: e => {
        console.log(e.message);
        }
    });

    useEffect(() => {
        mutate({ id: 222, pw:333 });    // mutate를 통해 전송 컨트롤
    }, []);

    return (
        <div>
        <div className="11">
            Mutation page: {isLoading && '...데이터 보내는 중'} {isSuccess && '전송 완료'}
        </div>
        </div>
    );
}
