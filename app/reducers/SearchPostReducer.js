import {
  RECEIVED_SEARCH_POST,
} from '../actions/SearchPostActions';

export function search(state = {}, action) {
  switch (action.type) {
    case RECEIVED_SEARCH_POST:
      return {
        ...state,
        postList: [
          {
            _source: {
              uuid: '003',
              title: 'Intel 教你如何製作智慧爐灶，讓你可以煮飯時一心二用',
              uri: 'https://unsplash.it/300/400/?random',
              content: '根據外媒報導，Facebook Messenger 似乎已整裝待發，將推出新的店內消費付款功能。根據 Engadget、The Next Web 等網站引述 The Information 的說法，在 iOS 版本中的程式碼中透露，FB 已準備好讓 Messenger 具有支付功能，並可以選擇諸如 Apple Pay 、Google Pay 等等的合作支付方式。\n\n不僅如此，從程式碼中還暗示了許多像是「私密對話」等新功能即將出現。但到目前為止，Facebook 還沒有對此有任何正式回應。',
            },
          }, {
            _source: {
              uuid: '005',
              title: '用 AR 即時上妝網羅時尚大數據，玩美移動下載破 2 億',
              uri: 'https://unsplash.it/300/400/?random',
              content: '根據外媒報導，Facebook Messenger 似乎已整裝待發，將推出新的店內消費付款功能。根據 Engadget、The Next Web 等網站引述 The Information 的說法，在 iOS 版本中的程式碼中透露，FB 已準備好讓 Messenger 具有支付功能，並可以選擇諸如 Apple Pay 、Google Pay 等等的合作支付方式。\n\n不僅如此，從程式碼中還暗示了許多像是「私密對話」等新功能即將出現。但到目前為止，Facebook 還沒有對此有任何正式回應。',
            },
          },
        ],
      };
    default:
      return {
        ...state,
        postList: [
          {
            _source: {
              uuid: '001',
              title: '重複性太高、佈展太瑣碎，智慧城市展仍是老問題',
              uri: 'https://unsplash.it/300/400/?random',
              content: '根據外媒報導，Facebook Messenger 似乎已整裝待發，將推出新的店內消費付款功能。根據 Engadget、The Next Web 等網站引述 The Information 的說法，在 iOS 版本中的程式碼中透露，FB 已準備好讓 Messenger 具有支付功能，並可以選擇諸如 Apple Pay 、Google Pay 等等的合作支付方式。\n\n不僅如此，從程式碼中還暗示了許多像是「私密對話」等新功能即將出現。但到目前為止，Facebook 還沒有對此有任何正式回應。',
            },
          }, {
            _source: {
              uuid: '002',
              title: '為什麼介面設計中，使用者的個人頭像大多是圓形的？',
              uri: 'https://unsplash.it/300/400/?random',
              content: '根據外媒報導，Facebook Messenger 似乎已整裝待發，將推出新的店內消費付款功能。根據 Engadget、The Next Web 等網站引述 The Information 的說法，在 iOS 版本中的程式碼中透露，FB 已準備好讓 Messenger 具有支付功能，並可以選擇諸如 Apple Pay 、Google Pay 等等的合作支付方式。\n\n不僅如此，從程式碼中還暗示了許多像是「私密對話」等新功能即將出現。但到目前為止，Facebook 還沒有對此有任何正式回應。',
            },
          }, {
            _source: {
              uuid: '003',
              title: 'Intel 教你如何製作智慧爐灶，讓你可以煮飯時一心二用',
              uri: 'https://unsplash.it/300/400/?random',
              content: '根據外媒報導，Facebook Messenger 似乎已整裝待發，將推出新的店內消費付款功能。根據 Engadget、The Next Web 等網站引述 The Information 的說法，在 iOS 版本中的程式碼中透露，FB 已準備好讓 Messenger 具有支付功能，並可以選擇諸如 Apple Pay 、Google Pay 等等的合作支付方式。\n\n不僅如此，從程式碼中還暗示了許多像是「私密對話」等新功能即將出現。但到目前為止，Facebook 還沒有對此有任何正式回應。',
            },
          }, {
            _source: {
              uuid: '004',
              title: '台灣 VR/AR 協會正式成立，要讓本土 VR/AR 實力在國際發光！',
              uri: 'https://unsplash.it/300/400/?random',
              content: '根據外媒報導，Facebook Messenger 似乎已整裝待發，將推出新的店內消費付款功能。根據 Engadget、The Next Web 等網站引述 The Information 的說法，在 iOS 版本中的程式碼中透露，FB 已準備好讓 Messenger 具有支付功能，並可以選擇諸如 Apple Pay 、Google Pay 等等的合作支付方式。\n\n不僅如此，從程式碼中還暗示了許多像是「私密對話」等新功能即將出現。但到目前為止，Facebook 還沒有對此有任何正式回應。',
            },
          }, {
            _source: {
              uuid: '005',
              title: '用 AR 即時上妝網羅時尚大數據，玩美移動下載破 2 億',
              uri: 'https://unsplash.it/300/400/?random',
              content: '根據外媒報導，Facebook Messenger 似乎已整裝待發，將推出新的店內消費付款功能。根據 Engadget、The Next Web 等網站引述 The Information 的說法，在 iOS 版本中的程式碼中透露，FB 已準備好讓 Messenger 具有支付功能，並可以選擇諸如 Apple Pay 、Google Pay 等等的合作支付方式。\n\n不僅如此，從程式碼中還暗示了許多像是「私密對話」等新功能即將出現。但到目前為止，Facebook 還沒有對此有任何正式回應。',
            },
          },
        ],
      };
  }
}
