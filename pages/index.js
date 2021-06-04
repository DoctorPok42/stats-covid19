import Head from "next/head";
import Link from "next/link";
const moment = require("moment");

export default function Home({ covids }) {
  return (
    <>
      <Head>
        <title>Covid-Stats</title>
      </Head>
      <main class="container">
        <div class="top">
          <h1>Covid-Info</h1>

          <div class="link">
            <Link href={``}>
              <a id="here">all</a>
            </Link>

            <Link href={`./country`}>
              <a>select country</a>
            </Link>
          </div>
        </div>

        <div class="he">
          <h1>Today</h1>
        </div>
        <div class="content">
          <h2>
            Cases : <span>{covids.todayCases}</span>
          </h2>
          <h2>
            Deaths : <span>{covids.todayDeaths}</span>
          </h2>
          <h2>
            Recovered : <span>{covids.todayRecovered}</span>
          </h2>
          <h3>Updated {moment(covids.updated).fromNow()}</h3>
        </div>

        <div class="he">
          <h1>Total</h1>
        </div>
        <div class="content">
          <h2>
            Cases : <span>{covids.cases}</span>
          </h2>
          <h2>
            Deaths : <span>{covids.deaths}</span>
          </h2>
          <h2>
            Recovered : <span>{covids.recovered}</span>
          </h2>
          <h3>Updated {moment(covids.updated).fromNow()}</h3>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const covids = await fetch(
    `https://disease.sh/v3/covid-19/all?yesterday=true&twoDaysAgo=true&allowNull=true`
  ).then((r) => r.json());
  return {
    props: {
      covids,
    },
  };
}