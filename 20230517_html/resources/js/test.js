//<script> 태그는 작성하지 않음.
// 팝업창 종류
// 1. alert - 확인버튼만있음
alert("이건 alert");
// 2. comfirm - 확인/취소 (예/아니오) (true / false 값이 retrun됨)
var confirmValue = confirm("컨펌창");
alert(confirmValue);
console.log(confirmValue)
document.write(confirmValue);
// 3. prompt - 입력 - 확인 / 취소 (입력한 값이 return 됨)
var promptValue = prompt("컴펌창")
alert(promptValue);
console.log(promptValue);
document.write(promptValue);