import Link from "next/link";
import {ArrowUturnLeftIcon} from "@heroicons/react/24/solid";
function StudioNavbar() {
    return
    
       (
        <div>
            <div>
                <Link href="/">Go to website </Link>
            </div>
            <>{props.renderDefault(props)}</>
        </div>
       )
    
}
export default StudioNavbar