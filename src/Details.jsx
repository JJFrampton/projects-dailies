import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function Details() {
  let { taskId } = useParams()
  console.log(taskId)
  return (
    <p> Working ? Details {taskId}</p>
  );
}
export default Details;
