import styled from "styled-components";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <StyledMenu>
                <Li>
                    <Link className="link" to="/">
                        Home.
                    </Link>
                </Li>
                <Li>
                    <Link className="link" to="/devprojects">
                        Frontend Development.
                    </Link>
                </Li>

                <Li>
                    <Link className="link" to="/resume">
                        Resume.
                    </Link>
                </Li>
            </StyledMenu>{" "}
        </>
    );
}

const StyledMenu = styled.div`
    display: flex;
    justify-content: center;
    // flex-direction: column;
`;

const Li = styled.li`
    color: black;
    margin-left: 10px;
    padding-left: 10px;
    list-style: none;

    // &:hover {
    //     // font-size: 17px;
    //     color: red;
    //     cursor: pointer;
    // }
`;

export default NavBar;
