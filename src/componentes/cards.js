
import React from "react"
import { Card, Image, Media, Title, Content } from "rbx";

const InfoContainer = ()=>{
    return(
    <Card>
      <Card.Image>
        <Image.Container size="3by2">
          <Image src="https://bulma.io/images/placeholders/1280x960.png" />
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris. <a href="#@bulmaio">@bulmaio</a>.{' '}
          <a href="#css">#css</a> <a href="#responsive">#responsive</a>
          <br />
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </Content>
      </Card.Content>
    </Card>)
}

export default InfoContainer;