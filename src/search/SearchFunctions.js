import axios from "axios";

const jaums = new Set([
  " ",
  "ㄱ",
  "ㄴ",
  "ㄷ",
  "ㄹ",
  "ㅁ",
  "ㅂ",
  "ㅅ",
  "ㅇ",
  "ㅈ",
  "ㅊ",
  "ㅋ",
  "ㅌ",
  "ㅍ",
  "ㅎ",
  "ㄳ",
  "ㄵ",
  "ㄶ",
  "ㄺ",
  "ㄻ",
  "ㄼ",
  "ㄽ",
  "ㄾ",
  "ㄿ",
  "ㅀ",
  "ㅄ",
]);

export const isChousngQuery = (query) => {
  for (let c of query) {
    if (!jaums.has(c)) {
      return false;
    }
  }

  return true;
};

export const onChange = async (value, contextDispatch) => {
  const query = value;

  if (query.length < 2) {
    contextDispatch({
      type: "SUGGESTS",
      value: [],
    });
    return;
  }

  const url = isChousngQuery(query) ? "/api/book/chosung" : "/api/book/ac";

  await axios({
    url: url,
    method: "get",
    params: {
      query,
    },
  })
    .then((res) => {
      console.log(res.data.titles);
      contextDispatch({
        type: "SUGGESTS",
        value: res.data.titles,
      });
    })
    .catch((err) => {
      console.error(err);
      alert(err);
    });
};

export const onSearch = async (query, page = 1, contextDispatch) => {
  if (query.length <= 0) {
    return;
  }

  await axios({
    url: "/api/book/search",
    method: "get",
    params: {
      query,
      page,
    },
  })
    .then((res) => {
      contextDispatch({
        type: "DATA",
        value: {
          query: query,
          currentPage: page,
          totalCount: res.data.totalHits,
          books: res.data.books,
          suggests: [],
        },
      });
      console.log(res.data);
    })
    .catch((err) => {
      console.error(err);
      alert(err);
    });
};
