export default function ListItem({children, onClick}) {
    
    return (
        <li onClick={onClick}>
            {children}
        </li>
    )
}