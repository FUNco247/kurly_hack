export async function getAllItems() {
  const response = await fetch("http://3.34.2.197:8080/kurly-bird");
  const json = await response.json();
  return json;
}

export async function getAllArticles() {
  const response = await fetch(
    `http://3.34.2.197:8080/news?paged=false&pageSize=1000&sort.sorted=false&unpaged=true`
  );
  const json = await response.json();
  return json;
}
