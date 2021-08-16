
import React, {useState, useEffect} from "react"
import { Card, Image, Media, Title, Content, Column } from "rbx";

const InfoContainer = () =>{ 
  const [items, setItems] = useState([])
  const columns = []

  function PetContainer({text, img}){
    return(
        <Column size={4}>
          <Card>
            <Card.Image>
              <Image.Container size="3by2">
                <Image src={img} />
              </Image.Container>
            </Card.Image>
            <Card.Content>
              <Media>
                <Media.Item>
                  <Title as="p" size={4}>
                    John Smith
                  </Title>
                  <Title as="p" subtitle size={6}>
                    @johnsmith
                  </Title>
                </Media.Item>
              </Media>
              <Content>
                {text}
              </Content>
            </Card.Content>
          </Card>
        </Column>
    )
  }

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/tweets")
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result);
        },
      )
  }, [])


  items.map(i=>{
    columns.push(<PetContainer text={i.tweet} img={i.pics.length > 0 ? i.pics[0].media : "https://bulma.io/images/placeholders/1280x960.png"} />)    
  })

  return(
    columns
  )
  
}

export default InfoContainer;