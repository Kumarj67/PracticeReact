import "./App.css";

import Form from "./component/Form";

import ItemData from "./Data/Db.jsx";
// import VIdeos from "./VideoComponenets/VIdeos";
// import VideoDB from "./Data/VideoDB";
// import PlayButton from "./VideoComponenets/PlayButton";

// import FormVideo from "./VideoComponenets/FormVideo";
import { useState } from "react";
import CartList from "./component/CartList";

function App() {
  // Videos
  // const [videos, setVideos] = useState([
  //   {
  //     id: 1,
  //     title: "Node JS Tutorial",
  //     channel: "Coder",
  //     views: "10M",
  //   },
  // ]);
  // function handleSubmit(e) {
  //   e.stopPropagation();
  //   setVideos({ ...videos, id: videos.length + 1 });
  // }

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

  // State Declared To add Items through form
  const [items, setItems] = useState(ItemData);
  // State declare to edit the added items through form
  const [editableItem, setEditableItem] = useState(null);

  // Forms through which new Items are added
  function addCart(cart) {
    setItems([...items, { ...cart, id: items.length + 1 }]);
  }
  // Function created to deleted the added items
  function deleteItems(id) {
    setItems(items.filter((cartItem) => cartItem.id !== id));
    // console.log(id);
  }
  // Function created to edit the added items
  function editItems(id) {
    setEditableItem(items.find((cartItem) => cartItem.id === id));
    // console.log(id);
  }
  // Function created to update the edited items
  function updateItem(item) {
    const index = items.findIndex((cartItem) => cartItem.id === item.id);
    const newItems = [...items];
    newItems.splice(index, 1, item);
    setItems(newItems);
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
      {/* addition ,updating and  then editing the items from form so editable state */}
      <Form
        onAddCart={addCart}
        onEditableItem={editableItem}
        onUpdateItems={updateItem}
      ></Form>
      {/* deleting and  edit  */}
      <CartList
        onEditItems={editItems}
        onDeleteItems={deleteItems}
        items={items}
      ></CartList>
      {/* <FormVideo></FormVideo>

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
        ))} */}
      {/* </div> */}
    </>
  );
}

export default App;
