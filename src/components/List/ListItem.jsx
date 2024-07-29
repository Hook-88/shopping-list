export default function ListItem({children, onClick, className}) {
    
    return (
        <li 
            onClick={onClick}
            className={className}
        >
            {children}
        </li>
    )
}