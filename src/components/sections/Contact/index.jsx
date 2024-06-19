import photo from "/profile-img.png";
function Contact() {
  return (
    <>
      <div>
        <h1 className="text-4xl mb-6">Kontakt</h1>
        <section className="grid md:grid-cols-2 gap-4">
          <article className="rounded-2xl border-gray-500 p-4 border flex flex-col md:flex-row items-center md:items-start gap-4">
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
          <article className="rounded-2xl border-gray-500 p-4 border bg-gray-900 text-gray-300">
            <h2 className="text-2xl font-bold">Er ute på jobbjakt</h2>
            <h2 className="text-2xl">
              Kontakt for å fylle på med en nyutdannet frontend utvikler.
            </h2>
          </article>
        </section>
      </div>
    </>
  );
}

export default Contact;
