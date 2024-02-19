import { useState } from "react";



function Container({ children, title }) {

    const [collapsed, setCollapsed] = useState(false)

    function handleToggleCollapse() {
        setCollapsed(t => !t)
    }
    return (
        <>
            <div className="child">
                <div>{title} <button onClick={handleToggleCollapse} className="Container" >toggle</button></div>
                {collapsed && <div>{children}</div>}
            </div>
        </>
    );
}

export default Container;