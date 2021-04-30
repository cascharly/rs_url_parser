const rawUrl = "https://www.rotunda.com/6/api/listings/3?sort=desc&limit=10";


const myUrl = new URL(rawUrl); // Use URL method
const parts = myUrl.pathname.split("/"); // Split pathname into array

const hash = {
  version: parts[1],
  collection: parts[3],
  id: parts[4],
  sort: myUrl.searchParams.get("sort"),
  limit: myUrl.searchParams.get("limit"),
};

console.log(hash);

// output  
// {
//      version: "6" 
//      collection: "listings"
//      id: "3"
//      sort: "desc"
//      limit: "10"
// }