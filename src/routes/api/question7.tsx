import {render} from "../../utils.ts";
import {Question} from "../../pages/question.tsx";

export default async function question7(_: Request): Promise<Response> {
    return render(<Question number={7}/>)
}