import styled from "styled-components";

const Button = styled.button`
    background-color: #342f2a;
    color: rgba(240, 232, 227, 1);
    padding-top: 0;
    font-size: 13px;
    width: 100px;
    height: 50px;
    border-radius: 40px 40px 999em 999em;

    @media (min-width: 750px) {
        // margin-right: 10px;
        margin-top: 10px;
        // margin: 0;
        width: 200px;
        height: 100px;
        font-size: 20px;
    }
`;

function Contact() {
    const Submit = () => {
        const recipient = "isabell.leoson@gmail.com";
        const subject = "Hejsan!";
        const body = `
                    `;

        const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
    };

    return (
        <>
            {" "}
            <Button onClick={Submit}>Let's talk!</Button>
        </>
    );
}

export default Contact;
