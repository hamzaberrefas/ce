import { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ options = [], initialOption }) => {

    if (options.length === 0) {
        return (<></>);
    }

    const [selected, setSelected] = useState(initialOption ?? options[0]);

    const [highlighted, setHighlighted] = useState();

    const handleOnClick = (option) => {
        setSelected(option);
    }

    const setHover = (option) => {
        setHighlighted(option);
    }

    const clearHover = () => {
        setHighlighted(undefined);
    }

    return (<div className="ti-dropdown hs-dropdown">
        <button type="button" className="ti-btn ti-btn-ghost-info ti-dropdown-toggle me-2 !py-2 !shadow-none" aria-expanded="false">
            {selected.label}<i className="ri-arrow-down-s-line align-middle inline-block"></i>
        </button>
        <ul className="hs-dropdown-menu ti-dropdown-menu hidden" onMouseLeave={() => clearHover()}>
            {options.map((option, index) => (
                <li className="p-2 cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-800" onClick={() => handleOnClick(option)} onMouseEnter={() => setHover(option)}><Link className={`ti-dropdown-item-${index}`} to="#">{option.label}</Link></li>
            ))}
            {highlighted && (<li>
                <hr className="dropdown-divider" />
            </li>)}
            {highlighted && (<p className="p-2 max-w-40">{highlighted.description}</p>)}
        </ul>
    </div>);
}

export default Dropdown;