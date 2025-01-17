import photo from "/profile-img.png";
function Contact() {
  return (
    <>
      <section className="max-w-screen-xl mx-auto bg-white rounded-lg shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Content Column */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Kontakt</h1>
            <p className="text-lg leading-relaxed">📱 404 58 454</p>
            <p className="text-lg leading-relaxed">
              📭 marius.rundereim@gmail.com
            </p>
          </div>
          {/* Right Image Column */}
          <div className="relative h-full">
            <img
              src="/profile-img.png"
              className="aspect-square sm:aspect-auto w-full h-full object-cover rounded-lg"
              alt="Profile picture"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
