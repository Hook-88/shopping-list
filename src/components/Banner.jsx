import { useStore } from "../store/store"
import Card from "./Card"

export default function Banner() {
    const banner = useStore(state => state.banner)
    
    return (
        banner ?
            <Card className="bg-green-700/50 text-white border border-white/10 text-center">
                {banner.bannerText}
            </Card> : null
    )
}