import React, {useState, useEffect} from "react"
import { Card, Image, Button,  Content, Column, Icon, Section } from "rbx";
import { FaTwitter } from 'react-icons/fa';

const Adopta = () =>{ 
  const [items, setItems] = useState([])
  let columns = []
  const group   = []

  function PetContainer({text, img, link}){
    return(<Column size={4}>
            <Card className="Pet-card">
              <Card.Image>
                <Image.Container size="3by2">
                  <Image src={img} />
                </Image.Container>
              </Card.Image>
              <Card.Content>
                <Content>
                  {text}
                </Content>
              </Card.Content>
              <Card.Footer>
                <Button color="info" size="small" key="info" as="a" href={link} target="_blank">
                  <Icon>
                    <FaTwitter />
                  </Icon>
                  <span>Ir al tweet</span>
                </Button>
              </Card.Footer>    
            </Card>
          </Column>)
  }

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/tweets")
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result);
        },
      )
  }, []);

  items.map((item, index)=>{
    columns.push(<PetContainer key={index} 
                               text={item.tweet} 
                               img={item.pics.length > 0 ? item.pics[0].media : "https://bulma.io/images/placeholders/1280x960.png"}
                               link={item.tweet_url}
                />);
    if(index !== 0){
      if(index%3===0 || index === (items.length-1)){
        group.push(<Column.Group key={index}>{columns}</Column.Group>);
        columns = [];
      }
    }
    return group;
  })
  
  return(
    <Section>
      <Content>
        {group}
      </Content>
    </Section>
  );
}
export default Adopta;