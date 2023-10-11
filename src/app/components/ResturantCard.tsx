//import { Product } from "../page";
import { ProductList } from "../page";

export default function ResturantCard (props:ProductList ){

    return(
        <>
        {props.products.map((item) =>
        <div
            className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer"
          >
            <img
              src="https://resizer.otstatic.com/v2/photos/wide-huge/2/31852905.jpg"
              alt=""
              className="w-full h-36"
            />
            <div className="p-1">
              <h3 className="font-bold text-2xl mb-2 text-black">{item.productName}</h3>
              <div className="flex items-start">
                <div className="flex mb-2">*****</div>
                <p className="ml-2 text-black">{item.reviewno} reviews</p>
              </div>
              <div className="flex text-reg font-light capitalize">
                <p className=" mr-3 text-black">{item.type}</p>
                <p className="mr-3 text-black">$ {item.price}</p>
              
                <p className="text-black">{item.country}</p>
              </div>
              <p className="text-sm mt-1 font-bold text-black">Booked {item.bookingno} times today</p>
            </div>
          </div>
        )}
          </>
    )
}