import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function AlertDismissibleExample() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>
          Hello, this is my web-shop, here you can buy a lot of books!
        </Alert.Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          facilis rem repellendus doloremque obcaecati eligendi error ullam
          delectus sunt asperiores eos eveniet est quas atque iusto odio esse,
          quos aut?
        </p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Click here for more info</Button>;
}

export default AlertDismissibleExample;
