import React from "react";
import SingleTodo from "./SingleTodo";
import { ResultType } from "./SingleTodo";

export interface Propss {
  results: ResultType[]
}

const TodoList: React.FC<Propss> = ({results}) => {
  return (
    <div className="todos">
      {results?.map((value,index) => (
        <SingleTodo
          result={value}
          key={`list_results${index}`}
        />
      ))}
    </div>
  );
};

export default TodoList;