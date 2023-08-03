import styled from "styled-components";
import { Link } from "react-router-dom";

function DevNavbar() {
    return (
        <>
            <StyledMenu>
                {/* <Li>
                    <Link className="link" to="/glasskiosken">
                        Glasskiosken.
                    </Link>
                </Li>
                <Li>
                    <Link className="link" to="/insposite">
                        Inspirations sidan.
                    </Link>
                </Li>{" "}
                <Li>
                    <Link className="link" to="/urbangreens">
                        Urban Greens.
                    </Link>
                </Li>
                <Li>
                    <Link className="link" to="/globalize">
                        Globalize.
                    </Link>
                </Li> */}
                <Link className="link" to="/glasskiosken">
                    <Button>Glasskiosken.</Button>
                </Link>
                <Link className="link" to="/insposite">
                    <Button>Inspirationssidan.</Button>{" "}
                </Link>
                <Link className="link" to="/fakestore">
                    <Button>Fake Store.</Button>
                </Link>
                <Link className="link" to="/urbangreens">
                    <Button>Urban Greens.</Button>
                </Link>{" "}
                <Link className="link" to="/globalize">
                    <Button>Globalize.</Button>
                </Link>
            </StyledMenu>{" "}
        </>
    );
}

const StyledMenu = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media (min-width: 750px) {
        padding-left: 200px;
        padding-right: 200px;
    }

    // flex-direction: column;
`;

// const Li = styled.li`
//     color: black;
//     margin-left: 10px;
//     padding-left: 10px;
//     list-style: none;
// `;

const Button = styled.button`
    margin: 3px;
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
    color: rgb(240, 232, 227);

    @media (min-width: 750px) {
        width: 250px;
        height: 150px;
    }
`;

export default DevNavbar;
