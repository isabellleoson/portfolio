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
                <Button>
                    <Link className="link" to="/glasskiosken">
                        Glasskiosken.
                    </Link>
                </Button>
                <Button>
                    <Link className="link" to="/insposite">
                        Inspirationssidan.
                    </Link>
                </Button>
                <Button>
                    {" "}
                    <Link className="link" to="/urbangreens">
                        Urban Greens.
                    </Link>
                </Button>
                <Button>
                    {" "}
                    <Link className="link" to="/globalize">
                        Globalize.
                    </Link>
                </Button>
            </StyledMenu>{" "}
        </>
    );
}

const StyledMenu = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    // flex-direction: column;
`;

const Li = styled.li`
    color: black;
    margin-left: 10px;
    padding-left: 10px;
    list-style: none;
`;

const Button = styled.button`
    margin: 3px;
`;

export default DevNavbar;
