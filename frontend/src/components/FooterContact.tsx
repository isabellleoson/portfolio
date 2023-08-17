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

const Smile = styled.p`
    margin-top: -20px;
    cursor: pointer;
    text-align: center;

    @media (min-width: 750px) {
        display: none;
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
            <label onClick={Submit}>
                <P>Contact me</P>
                <Smile>&#128578;</Smile>
            </label>
        </>
    );
}

export default FooterContact;
