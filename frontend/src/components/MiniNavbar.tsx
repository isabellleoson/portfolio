import styled from "styled-components";
import { Link } from "react-router-dom";

function MiniNavbar() {
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
                        Back.
                    </Link>
                </Li>
                <Li>
                    <Link className="link" to="/art">
                        Art.
                    </Link>
                </Li>
            </StyledMenu>{" "}
        </>
    );
}

const StyledMenu = styled.div`
    display: flex;
    justify-content: end;
    margin-right: 20px;
    margin-top: 20px;
    margin-bottom: 50px;
`;

const Li = styled.li`
    font-size: 10px;
    color: black;
    margin-left: 10px;
    padding-left: 10px;
    list-style: none;

    // &:hover {
    //     background-color: #f0f0f0;

    //     cursor: pointer;
    // }
`;

export default MiniNavbar;
