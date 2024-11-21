// Number(넘버) 다양한 타입(문자열, 불리언 등)을 숫자형으로 변환합니다.
// 문자열에 숫자만 포함되어 있으면 변환이 성공합니다.
// 공백(문자열)도 숫자형으로 변환됩니다.
// 숫자로 변환할 수 없는 값은 NaN을 반환합니다.
// console.log(Number('123'));    // 123 (문자열 → 숫자)
// console.log(Number('123.45')); // 123.45 (소수 포함 가능)
// console.log(Number('abc'));    // NaN (문자열이 숫자로 변환 불가)
// console.log(Number(true));     // 1 (불리언 true → 숫자)
// console.log(Number(false));    // 0 (불리언 false → 숫자)
// console.log(Number('   '));    // 0 (공백은 숫자 0으로 변환)

// String(스트링) 다양한 타입(숫자, 불리언 등)을 문자열로 변환합니다.
// 숫자, 불리언, 배열, 객체 등 모든 값을 문자열로 변환할 수 있습니다.
// console.log(String(123));       // '123' (숫자 → 문자열)
// console.log(String(123.45));    // '123.45' (소수 포함)
// console.log(String(true));      // 'true' (불리언 → 문자열)
// console.log(String(false));     // 'false'
// console.log(String(null));      // 'null'
// console.log(String(undefined)); // 'undefined'
// console.log(String([1, 2, 3])); // '1,2,3' (배열 → 문자열)

// parseInt(파아스인트) 문자열을 정수형 숫자로 변환합니다.
// 문자열이 숫자로 시작하면 변환 가능하며, 정수 부분만 추출합니다.
// 숫자가 아닌 문자가 나오면 변환을 중단합니다.
// 공백은 무시합니다.
// 기본 10진수로 처리되지만, 두 번째 인수로 진수를 명시할 수 있습니다.
// console.log(parseInt('123'));       // 123 (문자열 → 정수)
// console.log(parseInt('123.45'));    // 123 (소수점 이하 무시)
// console.log(parseInt('   456abc')); // 456 (숫자 뒤의 문자는 무시)
// console.log(parseInt('abc123'));    // NaN (문자열이 숫자로 시작하지 않음)
// console.log(parseInt('101', 2));    // 5 (이진수 '101' → 10진수)
// console.log(parseInt('0x1A', 16));  // 26 (16진수 '1A' → 10진수)

// parseFloat(파아스 플로우트) 문자열을 부동소수점 숫자(실수)로 변환합니다.
// 문자열이 숫자로 시작하면 변환 가능하며, 소수점도 포함하여 변환합니다.
// 숫자가 아닌 문자가 나오면 변환을 중단합니다.
// 공백은 무시합니다.
// console.log(parseFloat('123.45'));    // 123.45 (문자열 → 실수)
// console.log(parseFloat('123.45abc')); // 123.45 (문자 이후는 무시)
// console.log(parseFloat('   456.78')); // 456.78 (공백 무시)
// console.log(parseFloat('abc123.45')); // NaN (문자열이 숫자로 시작하지 않음)
// console.log(parseFloat('0.1e2'));     // 10 (과학적 표기법도 변환 가능)

// Number(): "완전한 숫자"로 변환. 숫자 외 값은 NaN.
// String(): "문자열"로 변환. 항상 변환 가능.
// parseInt(): "정수"만 추출. 진수를 설정할 수 있음.
// parseFloat(): "실수"까지 변환. 소수점 포함 가능.

