import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { createArticle } from "../assets/js/near/utils";
import { useNavigate } from "react-router-dom";

function Article() {
  const [fileUrl, setfileUrl] = useState("");
  const [name, setName] = useState("");
  const [heading, setHeading] = useState("");
  const [author, setAuthor] = useState("");
  const [content, SetContent] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (name && heading && author && content && fileUrl) {
      setLoading(true);
      createArticle(name, heading, author, content, fileUrl);
      setTimeout(() => {
        navigate("/my-articles");
      }, 7000);
    } else {
      alert("Fill all form details....");
    }
  };
  return (
    <div className="articleContainer">
      <div className="formContainer">
        <Card className="mt-5 formCard">
          <Card.Body>
            <Card.Title>Create Your Article By Filling Information</Card.Title>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Article Name</Form.Label>
                <Form.Control
                  placeholder="Enter name of your article"
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Article Heading</Form.Label>
                <Form.Control
                  placeholder="Enter heading of your article"
                  onChange={(e) => setHeading(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Author Name</Form.Label>
                <Form.Control
                  placeholder="Enter name of author"
                  onChange={(e) => setAuthor(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Article Image URL</Form.Label>
                {fileUrl ? (
                  <div className="uploadedImgContainer">
                    <img
                      src={fileUrl}
                      alt="Article Image"
                      className="uploadedImg"
                    />
                  </div>
                ) : (
                  <Form.Group className="mb-3">
                    <Form.Control
                      placeholder="https://image.jpg"
                      onChange={(e) => setfileUrl(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                )}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Article Content</Form.Label>
                <Form.Control
                  placeholder="Write or paste your article content"
                  as="textarea"
                  rows={8}
                  onChange={(e) => SetContent(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Form>
            <Button
              className="mt-3"
              variant="primary"
              onClick={() => handleSubmit()}
            >
              {loading ? "Creating ..." : " Create Article"}
            </Button>
          </Card.Body>
        </Card>
      </div>
      <svg
        className="curveSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#a2d9ff"
          fill-opacity="1"
          d="M0,128L60,133.3C120,139,240,149,360,144C480,139,600,117,720,138.7C840,160,960,224,1080,240C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default Article;
