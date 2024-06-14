function Justify() {
  return (
    <>
      <div>
        <section>
          <header>
            <h2>Typography</h2>
          </header>
          <div>
            <h2 className="text-4xl uppercase font-bold">Project title</h2>
            <h2 className="text-3xl">Sub title goes here</h2>
            <h2 className="text-xl font-light">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
              consequuntur sunt error nulla illum quis repellendus voluptas
              magni recusandae, consectetur tempora id adipisci quia ullam quod
              soluta, nihil veritatis non aliquam? Quis.
            </h2>
          </div>
        </section>
        <section>
          <header>
            <h2>Buttons</h2>
          </header>
          <div>
            <button className="bg-slate-100 outline-2 outline outline-slate-300 hover:outline-slate-600 text-xl p-1 px-4 rounded-lg font-medium uppercase hover:transition duration-300">
              Button
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Justify;
