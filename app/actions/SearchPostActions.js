export const REQUEST_SEARCH_POST = 'REQUEST_SEARCH_POST';
export const RECEIVED_SEARCH_POST = 'RECEIVED_SEARCH_POST';


function receivedSearchPost(postList) {
  return {
    type: RECEIVED_SEARCH_POST,
    data: postList.items,
  };
}

export async function requestSearchPost(keyword, distance, location) {
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
  const postList = {};
  postList.items = [{
    _source: {
      uuid: '001',
      title: '重複性太高、佈展太瑣碎，智慧城市展仍是老問題',
      uri: 'https://unsplash.it/300/400/?random',
      content: 'test',
    },
  }, {
    _source: {
      uuid: '002',
      title: '為什麼介面設計中，使用者的個人頭像大多是圓形的？',
      uri: 'https://unsplash.it/300/400/?random',
      content: 'test',
    },
  }, {
    _source: {
      uuid: '003',
      title: 'Intel 教你如何製作智慧爐灶，讓你可以煮飯時一心二用',
      uri: 'https://unsplash.it/300/400/?random',
      content: 'test',
    },
  }, {
    _source: {
      uuid: '004',
      title: '台灣 VR/AR 協會正式成立，要讓本土 VR/AR 實力在國際發光！',
      uri: 'https://unsplash.it/300/400/?random',
      content: 'test',
    },
  }, {
    _source: {
      uuid: '005',
      title: '用 AR 即時上妝網羅時尚大數據，玩美移動下載破 2 億',
      uri: 'https://unsplash.it/300/400/?random',
      content: 'test',
    },
  }];
  return (dispatch) => {
    dispatch(receivedSearchPost(postList));
  };
}
