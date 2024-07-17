export default function Card({children, className}) {
    
    return (
        <div className="bg-white/10 px-4 py-2 rounded">
            {children}
        </div>
    )
}