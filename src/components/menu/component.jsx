import { MenuText } from "../menuText/component"


export const Menu = ({ menu }) => {
    return (
        <ul>
            {menu.map((m) =>
                <li>
                    {<MenuText menuText={m.name} />}
                </li>)}
        </ul>
    )
}