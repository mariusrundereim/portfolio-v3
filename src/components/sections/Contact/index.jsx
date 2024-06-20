import photo from "/profile-img.png";
function Contact() {
  return (
    <>
      <div>
        <h1 className="text-4xl mb-6">Kontakt</h1>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <article className="rounded-2xl border-gray-500 p-4 border gap-4 flex flex-col">
            <img
              src={photo}
              className="rounded-xl w-1/2 md:w-1/3 lg:w-1/4"
              alt="Marius Rundereim"
            />
            <div className="text-xl flex flex-col space-y-4">
              <div>
                <h3 className="font-semibold">Marius Rundereim</h3>
                <h3>Frontend utvikler</h3>
              </div>
              <div className="break-words">
                <p>marius.rundereim@gmail.com</p>
                <p>404 58 454</p>
              </div>
            </div>
          </article>
          <article className="rounded-2xl border-gray-500 p-8 border col-span-2 bg-gray-900 text-gray-200 hover:bg-gray-800 hover:transition-colors duration-700 cursor-default">
            <h2 className="text-2xl font-bold mb-4">Søker nye utfordringer</h2>
            <h2 className="text-xl font-light mb-2">
              Nyutdannet frontend-utvikler med lidenskap for brukervennlige
              løsninger søker spennende prosjekter.
            </h2>
            <h2 className="text-xl font-light">
              Ta kontakt så kan jeg muligens overbevise deg hvordan jeg kan
              bidra til å løfte deres digitale applikasjon! 🙂
            </h2>
          </article>
        </section>
      </div>
    </>
  );
}

export default Contact;
