import "./App.css";

import Form from "./component/Form";

import ItemData from "./Data/Db.jsx";
import VIdeos from "./VideoComponenets/VIdeos";
import VideoDB from "./Data/VideoDB";
import PlayButton from "./VideoComponenets/PlayButton";

import FormVideo from "./VideoComponenets/FormVideo";
import { useState } from "react";
import CartList from "./component/CartList";

function App() {
  // let items = [
  //   {
  //     id: 1,
  //     title: "Item-1",
  //     price: "409",
  //     Quantity: "65",
  //   },
  //   {
  //     id: 2,
  //     title: "Item-2",
  //     price: "999",
  //     Quantity: "42",
  //   },
  //   {
  //     id: 3,
  //     title: "Item-3",
  //     price: "1999",
  //     Quantity: "1",
  //   },
  // ];
  const [items, setItems] = useState(ItemData);
  function addCart(cart) {
    setItems([...items, { ...cart, id: items.length + 1 }]);
  }
  return (
    <>
      <div className="text-3xl font-bold underline">CART</div>
      <div>
        {/* <button
          type=""
          onClick={() => {
            setItems([
              ...items,
              {
                id: items.length + 1,
                title: "Item-2",
                price: "999",
                Quantity: "165",
              },
            ]);
          }}
        >
          Add Items
        </button> */}
      </div>
      <Form onAddCart={addCart}></Form>
      <CartList items={items}></CartList>

      <FormVideo></FormVideo>

      <div className="w-half">
        {VideoDB.map((video) => (
          <VIdeos
            key={video.id}
            title={video.title}
            channel={video.channel}
            views={video.views}
          >
            <PlayButton
              onPlay={() => console.log("Play", video.title)}
              onPause={() => console.log("Pause and Remove ", video.title)}
            >
              {video.title}
            </PlayButton>
          </VIdeos>
        ))}
      </div>
    </>
  );
}

export default App;
