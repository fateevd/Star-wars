import {useLocation} from "react-router-dom";

export const useParseUrl = () => {
    return new URLSearchParams(useLocation().search);
}