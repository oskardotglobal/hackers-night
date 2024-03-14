import {render} from "../../utils.ts";
import {End} from "../../pages/end.tsx";

export default async function end(_: Request): Promise<Response> {
    return render(<End/>)
}