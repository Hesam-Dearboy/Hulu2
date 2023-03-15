import Header from "../components/Header";
import Nav from "../components/Nav";
import Result from "../components/Result";
import requests from "../utils/requests";


export default function Home({results}) {
  console.log(results)
  return (
    <div>

      <main>
        <Header/>
        <Nav/>
      </main>

      <Result requests={results}/>

    </div>
  )
}


export async function getServerSideProps(context) {
  const genre = context.query.genre
  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`).then(
    res => res.json()
  ) 

  return{
    props : {
      results : request.results
    }
  }
}