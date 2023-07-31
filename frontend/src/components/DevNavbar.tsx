import styled from "styled-components";
import { Link } from "react-router-dom";

function DevNavbar() {
    return (
        <>
            <StyledMenu>
                <Li>
                    <Link className="link" to="/glasskiosken">
                        Glasskiosken
                    </Link>
                </Li>

                <Li>
                    <Link className="link" to="/urbangreens">
                        Urban Greens
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
`;

export default DevNavbar;
