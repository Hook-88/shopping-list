export default function MenuItem({children}) {
    
    return (
        <li className="px-3 py-1 border-b border-white/20 last:border-none">
            {children}
        </li>
    )
}