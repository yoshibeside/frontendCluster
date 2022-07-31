import React from "react";
import SingleCluster from "././SingleCluster";
import { ResultType } from "./SingleCluster";

export interface Propss {
  results: ResultType[]
}

const TodoList: React.FC<Propss> = ({results}) => {
  return (
    <div className="todos">
      {results?.map((value,index) => (
        <SingleCluster
          result={value}
          key={`list_results${index}`}
        />
      ))}
    </div>
  );
};

export default TodoList;