import Card from "react-bootstrap/Card";

function HomePageCard(props) {
  return (
    <Card
      style={{ width: "257px", height: "219px" }}
      className="bg-[#4D0000FD] text-white mx-4 my-2"
    >
      <Card.Body>
        <Card.Img src={props.icon} className="w-[40px] my-1" />
        <Card.Title className="text-[18px] font-marquee font-bold">
          {props.title}
        </Card.Title>
        <Card.Text className="text-[12px]">{props.desc}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default HomePageCard;
