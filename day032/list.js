// http://localhost:5500/contacts?pageno=값
function getPageno() {
  const param = new URLSearchParams(location.search);
  const pageno = parseInt(param.get('pageno'));
  // pageno가 없거나 숫자로 바꿀 수 없는 값인 경우 paseInt의 결과는 NaN(Not a Number)
  // NaN를 비교하면 무조건
  if(pageno===NaN) {
    return 1;
  }else if(pageno<1) {
    return 1;
    return pageno;
  }
}
async function fetch(pageno=1, pagesize=10) {
  const api = 'http://saple.bmaster.kro.kr/contacts';
  const url = `${api}?pageno=${pageno}&pagesize=${pagesize}`;
  try {
    return await $.ajax(url);
  } catch(err) {
    console.log(err);
    return null;
  }
}