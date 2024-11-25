


var check = document.querySelector("#shippingInfo"); //체크박스의 id

            check.addEventListener("click", function () { //check요소에 이벤트가 발생했을 때 실행할 함수
                var nameInfo = document.querySelector("#billingName").value;
                var telInfo = document.querySelector("#billingTel").value;
                var addrInfo = document.querySelector("#billingAddr").value;

                if (check.checked == true) { //체크되었다면
                    document.querySelector("#shippingName").value = nameInfo; //이름을 배송정보에 복사
                    document.querySelector("#shippingTel").value = telInfo;
                    document.querySelector("#shippingAddr").value = addrInfo;
                } else {
                    document.querySelector("#shippingName").value = "";
                    document.querySelector("#shippingTel").value = "";
                    document.querySelector("#shippingAddr").value = "";
                }
            });