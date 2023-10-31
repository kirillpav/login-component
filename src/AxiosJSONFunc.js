import React from "react";
import axios from "axios";

function test() {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios.get("./json/test.json").then((res) => {
			setData(res.data);
		});
	}, []);

	return (
		<>
			{data.courses.map((course, index) => (
				<p>{course}</p> // this can be done for any json as long as u pass whatever object you need to use, just an axios func for dymanic importing
			))}
		</>
	);
}
