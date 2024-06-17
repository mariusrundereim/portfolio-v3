import photo from "../../../../public/profile-img.png";
function Contact() {
  return (
    <>
      <div>
        <h1 className="text-4xl mb-6">Kontakt</h1>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl border-gray-500 p-4 border grid grid-cols-1 md:grid-cols-2">
            <div className="rounded-xl ">
              <img src={photo} className="rounded-xl " alt="" />
            </div>
            <div className="p-6">
              <div className="text-xl flex flex-col space-y-4">
                <div>
                  <h3 className="font-semibold">Marius Rundereim</h3>
                  <h3>Frontend utvikler</h3>
                </div>
                <div>
                  <p>marius.rundereim[]@gmail.com</p>
                  <p>404 58 454</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border-gray-500 p-4 border">
            <h2 className="text-2xl">Er ute på jobbjakt.</h2>
            <h2 className="text-2xl">
              Kontakt for å fylle på med en nyutdannet frontend utvikler.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
