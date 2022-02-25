import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import Link from "next/link";

const handleClick = (e) => {
  e.preventDefault();
  router.push(href);
};

const VideoCard = (props) => {
  return (
    <Link href={props.link}>
      <a>
        <div className="w-full rounded-2xl py-2 px-1 shadow shadow-gray-1000">
          <div>
            <img src={props.image} alt={props.title} className="object-cover" />
          </div>
          <div className="p-0 py-3 md:py-1 md:px-2">
            <div className="mt-3 flex justify-between py-1">
              <h3 className="text-semibold tracking-wider text-lg">
                {props.title}
              </h3>
              <button className="  px-2 rounded text-sm font-medium bg-blue-500">
                Watch Now
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-2">
              Whatch the hottest girls do the unthinkable.  These girls can't wait to get nasty. 
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default VideoCard;

//   <Card border="dark" style={{ width: '100%' }}>
//     <Link href={props.link}>
//     <a>
//       <Card.Img variant="top" type='button' src={props.image} />
//     </a>
// </Link>
//   <Card.Body>
//     <Row>
//       <Col className="d-flex align-items-center">
//       <Card.Title>{props.title}</Card.Title>
//       </Col>
//       <Col className="d-flex justify-content-end">
//     <Button variant="primary">Watch Now</Button>
//     </Col>
//     </Row>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content.
//     </Card.Text>
//   </Card.Body>
// </Card>
