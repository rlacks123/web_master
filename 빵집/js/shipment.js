


var check = document.querySelector("#checkboxx"); //체크박스의 id

            check.addEventListener("click", function () { //check요소에 이벤트가 발생했을 때 실행할 함수
                var nameInfo = document.querySelector("#idName").value;
                var telInfo = document.querySelector("#idTel").value;
                var addrInfo = document.querySelector("#idAddr").value;

                if (check.checked == true) { //체크되었다면
                    document.querySelector("#chName").value = nameInfo; //이름을 배송정보에 복사
                    document.querySelector("#chTel").value = telInfo;
                    document.querySelector("#chAddr").value = addrInfo;
                } else {
                    document.querySelector("#chName").value = "";
                    document.querySelector("#chTel").value = "";
                    document.querySelector("#chAddr").value = "";
                }
            });