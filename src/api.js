export async function getAllItems() {
  const response = await fetch("http://3.34.2.197:8080/kurly-bird");
  const json = await response.json();
  return json;
}

export async function getAllArticles(pageParam) {
  const response = await fetch(
    `http://3.34.2.197:8080/news?paged=true&pageNumber=${pageParam}&pageSize=1000`
  );
  //console.log(response.data);
  const json = await response.json();
  //console.log(json);
  json.nextPage = pageParam + 1;
  json.isLast = json.last;
  return json;
}

export async function getCategory(categoryId) {
  const response = await fetch(
    `http://3.34.2.197:8080/kurly-bird/${categoryId}`
  );
  const json = await response.json();
  return json;
}

export async function getDetail(productId) {
  const response = await fetch(`http://3.34.2.197:8080/product/${productId}`);
  const json = await response.json();
  return json;
}
