
import React from "react"
import { Card, Image, Media, Title, Content } from "rbx";

const InfoContainer = ({text, img})=>{
    return(
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
    </Card>)
}

export default InfoContainer;