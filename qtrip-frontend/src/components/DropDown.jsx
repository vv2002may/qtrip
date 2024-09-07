import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";

export default function DropDown() {
  const navigate = useNavigate();

  return (
    <Dropdown >
      <Dropdown.Toggle className="hover:bg-green-700 p-2 rounded-lg" variant="success" id="dropdown-basic">
        User
      </Dropdown.Toggle>

      <Dropdown.Menu rootCloseEvent={"click"} className="flex flex-col bg-orange-500 backdrop-blur rounded-lg p-2">
        <Dropdown.Item
          className=" hover:bg-green-700 p-2 rounded-lg"
          onClick={() => {
            //  navigate("/reservations");
             window.location.href = "/reservations";
          }}
        >
          Reservations
        </Dropdown.Item>
        <Dropdown.Item
          className=" hover:bg-green-700 p-2 rounded-lg"
          onClick={() => {
            localStorage.clear();
             // navigate("/");
             window.location.href = "/";
          }}
        >
          Sign Out
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}