import React from "react";
import {
    Container,
    Row,
    Col,
    Button,
    Image,
    Card
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
    return (
        <>
            <Card bg="dark" text="white">
                <Card.Header>Quote</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            Let your conversation be without covetousness; and be content with such thing as ye have: for He hath said, I will never leave thee, nor forsake thee
                        </p>
                        <footer className="blockquote-footer">
                            Paul
                            <cite title="Source Title">Hebrews</cite>
                        </footer>
                    </blockquote>
                </Card.Body>
                <Button variant="success" href="https://wa.me/6285741038847/" target="_blank">
                    Contact via "whatsapp"
                </Button>
            </Card>
        </>
    );
}

export default Footer;
