export default function MenuItem({children}) {
    
    return (
        <li className="grid border-b border-white/20 last:border-none">
            {children}
        </li>
    )
}