import { LastQuestions } from "@components/question/LastQuestions";

export function Dashboard () {
    return (
        <div className="h-screen flex-col flex items-center justify-center">
            <h1 className="text-3xl">Dashboard</h1>
            <LastQuestions />
        </div>
    );
}