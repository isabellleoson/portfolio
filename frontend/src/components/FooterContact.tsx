import styled from "styled-components";

const P = styled.p`
    cursor: pointer;
    margin-top: 5px;
    margin-bottom: 20px;

    &:hover {
        cursor: pointer;
        color: #706a66;
    }
`;

function FooterContact() {
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
            <P onClick={Submit}>Contact me</P>
        </>
    );
}

export default FooterContact;
