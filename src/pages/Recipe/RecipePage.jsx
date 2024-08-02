import PageHeader from "../../components/PageHeader"
import { Link } from "react-router-dom"
import { FaAngleLeft } from "react-icons/fa6"
import LinkNavBack from "../../components/Link/LinkNavBack"

export default function RecipePage() {
    
    return (
        <>
            <PageHeader>
                <LinkNavBack />
                <h1 className="col-span-4 col-start-2 text-center">Recipe Name...</h1>
            </PageHeader>
        </>
    )
}