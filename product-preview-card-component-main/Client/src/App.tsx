export default function App() {
  return (
    <div className="bg-cream h-screen p-4 text-sizex mb-5   xs:flex xs:justify-center xs:items-center  ">
      <div className="flex flex-col mx-2 bg-white rounded overflow-hidden xs:flex-row xs:max-w-imgs xs:h-img xs:flex-grow-1">
        <img
          className="rounded max-w-img	"
          src="./assets/images/image-product-mobile.jpg"
        />
        <div className="flex flex-col xs:justify-center xs:flex-grow-1">
          <h2 className="text-dark-grayish-blue font-Montserrat mt-4 mx-5 tracking-spacex uppercase">
            Perfume
          </h2>
          <h1 className="text-very-dark-blue text-3xl font-bold font-Fraunces mx-5 my-1">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="mx-5 text-dark-grayish-blue font-Montserrat   mt-3">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="flex mt-4 mx-5   ">
            <p className="font-Fraunces  text-dark-cyan font-bold text-2xl">
              $149.99
            </p>
            <p className="font-Montserrat mx-4 text-sm mt-1 line-through  text-dark-grayish-blue mx-5">
              $169.99
            </p>
          </div>

          <button
            className=" bg-dark-cyan  mx-5 my-3 text-center flex justify-center align-middle
        py-2 text-white hover:bg-click-dark-cyan rounded"
          >
            <img className="mr-2 my-1" src="./assets/images/icon-cart.svg" />
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-5"></div>
    </div>
  );
}
