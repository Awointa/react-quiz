import React from "react";

export default function Progress({
	index,
	numQuestions,
	points,
	maxPossiblePoints,
}) {
	return (
		<heaader className="progress">
			<p>
				Question <strong>{index + 1}</strong> /{numQuestions}
			</p>

			<p>
				<strong>{points}</strong> / {maxPossiblePoints}
			</p>
		</heaader>
	);
}
