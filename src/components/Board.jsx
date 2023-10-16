import Score from "./Score";
import Card from "./Card";
import { useEffect, useState } from "react";

const Board = ({api}) => {
  const [clickedImages, setClickedImages] = useState([]);
  const [highscore, setHighscore] = useState(0);
  const [currentscore, setCurrentscore] = useState(0);
  const [images, setImages] = useState([]);
  let isUsed = true;

  useEffect(() => {
    const fetchdata = async () => {
        let data = await api.get_image();
        setImages([...images, {url: data.url, id: data.id}]);
    }
    if (!isUsed || images.length === 12) return
    fetchdata();
    return () => isUsed = false;
  }, [images]);

  const shuffle = array => {
    return array
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
  }

  const image_already_clicked = clicked_image => {
    for (const image of clickedImages){
      if(clicked_image.id === image.id) return true;
    }
    return false;
  }

  const click_on_card = image => {
    if((currentscore + 1) % 12 === 0){
      alert("Every image clicked one time!");
      setImages([]);
      return
    }
    if (!image_already_clicked(image)){
      setCurrentscore(currentscore + 1);
      if (currentscore + 1 > highscore){
        setHighscore(currentscore + 1);
      }
      setClickedImages([...clickedImages, image])
    }
    else {
      setCurrentscore(0);
      setClickedImages([]);
      alert("Image already clicked!");
      setImages([]);
      return
    }
    setImages([...shuffle(images)])
  }
  return (
    <>
    <Score currentscore={currentscore} highscore={highscore}/>
    <section className="board">
        { 
        images.map(image => {
          return <Card key={image.id} img={image} on_click={() => {click_on_card(image)}}/>;
        })}
      
    </section>
    </>
  )
}
export default Board;