export default function PageHeader({children}) {

    return (
        <header className="bg-white/10 px-4 py-2 text-lg grid grid-cols-6 mb-4">
            {children}
        </header>
    )
}
