import React from 'react'

// export async function getStaticPaths() {
//   const res = await fetch(`https://the-gits.herokuapp.com/api/v1/shopping-list`)
//   const data = await res.json()

//   const uniqueShopName = [...new Set(data.map(shop => shop.shoppingListName))];

//   const paths = uniqueShopName.map(name => {
//     return {
//       params: { id: name}
//     }
//   })
//   return {
//     paths,
//     fallback: false, // can also be true or 'blocking'
//   }
// }
// can we add shop name (i.e. Lidl to the "Hello")
//useEffect to fecth items filtered by shop name

/*
use getStaticPaths to map through the data by the uquice shop name
(use the logic from ./shopping/index.js to reduce the names down)
use the paths params to create a page per shop name (i.e. Lidl)

then use the ideas from here https://nextjs.org/docs/basic-features/data-fetching/client-side 
to fetch data client-side to get the list items.
use the api-by-name route in the backend 
(http://localhost:3000/api/v1/shopping-list/Tesco) (+name)


// This is a code example from the next.js docs to fetch the data
import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then((res) => res.json())
function Profile() {
  const { data, error } = useSWR('/api/profile-data', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.bio}</p>
    </div>
  )

*/

const ListOfItems = () => {
  return (
    <div>Hello</div>
  )
}

export default ListOfItems
