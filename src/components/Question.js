import { useQuiz } from "../QuizContextProvider";
import Options from "./Options";

export default function Question() {
	const { questions, index } = useQuiz();
	const question = questions[index];

	return (
		<div>
			<h4>{question}</h4>
			<Options question={question} />
		</div>
	);
}
