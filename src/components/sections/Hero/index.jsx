import Button from "../../core/Buttons";
function Hero() {
  return (
    <>
      <section>
        <div className="border-2 border-green-500 grid grid-cols-1 md:grid-cols-2">
          <div className="border-2 border-red-600 grid place-content-center">
            <svg
              width="180"
              height="180"
              viewBox="0 0 180 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="border-2 border-purple-400"
            >
              <g clipPath="url(#clip0_6_427)">
                <path
                  d="M118.253 98.3162V109.566C118.253 114.745 122.433 118.941 127.593 118.941H144.405C146.468 118.941 148.141 120.62 148.141 122.691V175.191C148.141 177.262 146.468 178.941 144.405 178.941H121.989C119.925 178.941 118.253 177.262 118.253 175.191V128.316C118.253 123.137 114.072 118.941 108.913 118.941H32.3244C30.2613 118.941 28.5884 117.262 28.5884 115.191V92.6912C28.5884 90.6203 30.2613 88.9412 32.3244 88.9412H108.913C114.072 88.9412 118.253 84.7453 118.253 79.5662V38.3162C118.253 33.137 114.072 28.9412 108.913 28.9412H32.3244C30.2613 28.9412 28.5884 27.262 28.5884 25.1912V2.69118C28.5884 0.620344 30.2613 -1.05882 32.3244 -1.05882H114.517C116.58 -1.05882 118.253 0.620344 118.253 2.69118V19.5662C118.253 24.7453 122.433 28.9412 127.593 28.9412H144.405C146.468 28.9412 148.141 30.6203 148.141 32.6912V85.1912C148.141 87.262 146.468 88.9412 144.405 88.9412H127.593C122.433 88.9412 118.253 93.137 118.253 98.3162Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_6_427">
                  <rect width="180" height="180" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>
            <div>
              <h2 className="text-4xl font-semibold">Hero section</h2>
              <h3 className="text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                eos at ducimus, quaerat omnis suscipit ullam magnam velit!
              </h3>
            </div>
            <div>
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <Button size="small" state="inactive">
                    Utvalgte
                  </Button>
                  <Button size="small" state="hover">
                    Kontakt
                  </Button>
                  <Button size="small" state="active">
                    Kontakt
                  </Button>
                </div>
                <div className="flex space-x-4">
                  <Button size="large" state="inactive">
                    Utvalgte
                  </Button>
                  <Button size="large" state="hover">
                    Kontakt
                  </Button>
                  <Button size="large" state="active">
                    Kontakt
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;