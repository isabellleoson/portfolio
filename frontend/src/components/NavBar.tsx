import styled from "styled-components";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <StyledMenu>
                <Li>
                    <Link className="link" to="/devprojects">
                        <P>Projects.</P>
                    </Link>
                </Li>

                <Li>
                    <Link className="link" to="/resume">
                        <P>Resumé.</P>
                    </Link>
                </Li>
            </StyledMenu>{" "}
        </>
    );
}

const StyledMenu = styled.div`
    display: flex;
    justify-content: center;
    // align-items: space-between;
    // background-color: rgba(240, 232, 227, 0.5);
    // flex-direction: column;

    @media (min-width: 750px) {
        display: flex;
        flex-direction: row;
        // align-items: center;
        width: 280px;

        justify-content: space-around;
    }
`;

const Li = styled.li`
    color: black;
    margin-left: 5px;
    list-style: none;

    @media (min-width: 750px) {
        display: flex;
        flex-direction: row;
        align-content: space-between;
        justify-content: space-between;
        // align-items: center;
        // justify-content: center;
    }
`;

const P = styled.p`
    color: #342f2a;

    font-size: 14px;
    font-weight: bolder;

    &:hover {
        color: grey;
    }

    @media (min-width: 750px) {
        display: flex;
        flex-direction: row;

        align-content: space-between;
        justify-content: space-between;
        // align-items: center;
        // justify-content: center;
        font-size: 18px;
    }
`;

export default NavBar;
