import { NavLink } from "react-router-dom"


export default function Home() {
  return (
    <>
      <section className="home">
        <div className="overlay p-10">
          <article className="text-center md:text-left">
            <h3 className="text-gray-400 text-xl uppercase">
            Make your childhood dream come true !!!{" "}
              <span className="block font-semibold tracking-widest text-4xl text-white md:text-5xl lg:text-6xl 2xl:text-7xl mb-10 mt-3">
              NapoleonSpace
              </span>
            </h3>

            <p className="text-gray-400 md:w-11/12 lg:w-1/2">
            Our company will provide you with fast and comfortable trips to different destinations in space, with the best pilots and rockets on the market, while ensuring low prices.
            </p>
          </article>
          <article>
          <NavLink
                to="/destination"
                exact

              >
                  <button className="bg-white text-gray-900 font-bold uppercase text-2xl w-40 h-40 rounded-full shadow xl:h-52 xl:w-52 xl:text-4xl animate-pulse mt-10 md:mt-0">
              Explore
            </button>
              </NavLink>
          </article>
        </div>
      </section>
    </>
  )
}
