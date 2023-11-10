import React from "react";

export default function Progress({ index, numQuestion }) {
	return (
		<heaader className="progress">
			<p>
				Question <strong>{index}</strong> / {numQuestion}
			</p>
		</heaader>
	);
}
