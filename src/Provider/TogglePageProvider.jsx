import { useState } from "react"
import { TogglePageContext } from "../Context"

const TogglePageProvider = ({ children }) => {
    const [page, setPage] = useState('Home');
    return (
        <TogglePageContext.Provider value={{ page, setPage }}>
            {children}
        </TogglePageContext.Provider>
    )
}
export default TogglePageProvider;