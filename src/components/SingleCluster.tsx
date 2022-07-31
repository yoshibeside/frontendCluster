import { useRef } from "react";
import {
  ScatterChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Scatter,
  Cell,
  ResponsiveContainer
} from "recharts";


export type ResultType = {
  Result: NodeType[]
}

export interface NodeType{
	ID: Number
	X: Number
	Y: Number
	Color: string 
}

export interface ResultProps {
  result: ResultType
}

const SingleTodo: React.FC<ResultProps> = ({result}): JSX.Element => {

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className="todos__single">
      
      <ResponsiveContainer width="99%" height={400}>
      <ScatterChart
      width={300}
      height={400}
    >
      <CartesianGrid width = {300}/>
      <XAxis
        type="number"
        domain={[0, 'auto']}
        dataKey="X"
        name="Speed"
      />
      <YAxis
        type="number"
        domain={[0, 'auto']}
        dataKey="Y"
        name="Accuracy"
      />
      <Tooltip cursor={{ strokeDasharray: "3 3" }} />
      <Scatter name="A school" data={result.Result}>
        {result.Result.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.Color ?? "#8884d8"} />
        ))}
      </Scatter>
    </ScatterChart>

      </ResponsiveContainer>
        
      <div>
        
      </div>
    </form>
  );
};
// }
// function SingleTodo(props) {

//   const inputRef = useRef<HTMLInputElement>(null);

//   // const handleEdit = (e: React.FormEvent, id: number) => {
//   //   e.preventDefault();
//   //   setTodos(
//   //     todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
//   //   );
//   //   setEdit(false);
//   // };

//   // const handleDelete = (id: number) => {
//   //   setTodos(todos.filter((todo) => todo.id !== id));
//   // };

//   return (
//     <form className="todos__single">
//       <ResponsiveContainer width="99%" height={400}>
//       <ScatterChart
//       width={300}
//       height={400}
//     >
//       <CartesianGrid width = {300}/>
//       <XAxis
//         type="number"
//         domain={[0, 100]}
//         dataKey="x"
//         name="Speed"
//       />
//       <YAxis
//         type="number"
//         domain={[0, 100]}
//         dataKey="y"
//         name="Accuracy"
//       />
//       <Tooltip cursor={{ strokeDasharray: "3 3" }} />
//       <Scatter name="A school" data={data}>
//         {data.map((entry, index) => (
//           <Cell key={`cell-${index}`} fill={entry.colourType ?? "#8884d8"} />
//         ))}
//       </Scatter>
//     </ScatterChart>

//       </ResponsiveContainer>
        
//       <div>
        
//       </div>
//     </form>
//   );
// };

export default SingleTodo;