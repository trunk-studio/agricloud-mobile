export const RECEIVED_SEARCH_POST = 'RECEIVED_SEARCH_POST';

function receivedSearchPost(postList) {
  return {
    type: RECEIVED_SEARCH_POST,
    data: postList,
  };
}

export async function requestNews() {
  const searchApi = 'http://data.coa.gov.tw/Service/RedirectService.aspx?UnitId=061&url=http%3a%2f%2fdata.coa.gov.tw%2fService%2fOpenData%2fDataFileService.aspx%3fUnitId%3d061';
  const postList = await fetch(searchApi).then(response => response.json());
  return (dispatch) => {
    dispatch(receivedSearchPost(postList));
  };
}

export async function requestSearchPost(mIndex) {
  // const paramArray = [];
  // if (location) {
  //   paramArray.push(`lat=${location.lat}`);
  //   paramArray.push(`lon=${location.lon}`);
  // }
  // if (distance) {
  //   paramArray.push(`distance=${distance}`);
  // }
  // const param = paramArray.join('&');
  // const searchApi = `http://localhost:1337/rest/post/search/${keyword}?${param}`;
  // const postList = await fetch(searchApi).then(response => response.json());
  const searchApi = `http://data.coa.gov.tw/Service/OpenData/DataFileService.aspx?UnitId=061&$top=20&$filter=month+like+${mIndex}`;
  const postList = await fetch(searchApi).then(response => response.json());
  console.log('month->', mIndex);
  console.log('searchApi->', searchApi);

  return (dispatch) => {
    dispatch(receivedSearchPost(postList));
  };
}
