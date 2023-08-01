import styled from "styled-components";

const H1 = styled.h1``;

import { Link } from "react-router-dom";

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    // padding-top: 40px;
    // padding-right: 40px;
`;

const Li = styled.div`
    display: flex;
    justify-content: end;
`;

function Resume() {
    return (
        <>
            <Li>
                <Link className="link" to="/devprojects">
                    back.
                </Link>
            </Li>
            <Header>
                <H1>Resumé.</H1>
            </Header>
        </>
    );
}

export default Resume;
