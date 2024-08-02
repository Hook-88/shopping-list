import PageHeader from "../../components/PageHeader"
import { Link } from "react-router-dom"
import { FaAngleLeft, FaCheck } from "react-icons/fa6"
import LinkNavBack from "../../components/Link/LinkNavBack"
import PageMain from "../../components/PageMain"
import List from "../../components/List/List"
import Card from "../../components/Card"
import Button from "../../components/Button"

export default function RecipePage() {
    
    return (
        <>
            <PageHeader>
                <LinkNavBack />
                <h1 className="col-span-4 col-start-2 text-center">Recipe Name...</h1>
            </PageHeader>
            <PageMain>
                <List listItemsArr={[]}>
                    <List.Header>
                        <List.Progress />
                            <button className="text-xs">
                                Select all
                            </button>
                    </List.Header>
                    <List.Body>
                        <List.Item className="border rounded border-transparent">
                            <Card className="flex items-center py-3">
                                Pan
                            </Card>
                        </List.Item>
                        <List.Item className="border rounded border-white/50">
                            <Card className="flex items-center py-3">
                                Jamon
                                <FaCheck className="ml-auto"/>
                            </Card>
                        </List.Item>
                        <List.Item className="border rounded border-transparent">
                            <Card className="flex items-center py-3 gap-1">
                                Mantaquilla
                                <small>
                                    (optional)
                                </small>
                            </Card>
                        </List.Item>
                    </List.Body>
                </List>

                <Card className="mt-8">
                    <Button className="w-full bg-green-900">
                        Add selection to shopping list
                    </Button>
                </Card>
            </PageMain>
        </>
    )
}