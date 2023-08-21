import Head from "next/head";
import Link from "next/link";
import { api } from "@/utils/api";
import { useState } from "react";
import { Box, Card, Flex, Table, TextArea } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';

export const runtime = 'experimental-edge'

export default function Home() {
  const [todo, setTodo] = useState("");
  const utils = api.useContext();

  const getTodos = api.todo.getTodos.useQuery();
  const submitTodo = api.todo.submitTodo.useMutation({
    onSuccess: ()=>{ 
      utils.todo.getTodos.invalidate();
    }
  })

  

  return (
    <main>
      
     <div className="p-20">
      <div className="text-center pb-20">
        <h1 className="text-4xl font-bold">Neon Todo App</h1>
        <p className="text-gray-400">Powered by NeonDB</p>
      </div>
      <form onSubmit={(e)=>{
          e.preventDefault(); 
          if(!todo) return;
            submitTodo.mutate({ text: todo });

          }} className="flex space-x-4">
          <input type="text" className="border focus:outline rounded-sm w-64" value={todo} placeholder="Add todo (min 5 characters)" onChange={(e)=>{ setTodo(e.target.value); }} />
          <button className="rounded-md bg-blue-600 text-white p-4">Save to Neon DB</button>
          
        </form>

        {/* {
        getTodos.isSuccess && getTodos.data.map((todo, i)=> (
            <div key={todo.id}> {todo.text}</div>
          )
        )} */}

        <Table.Root className="pt-10">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>id</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Todo</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Completed</Table.ColumnHeaderCell>

            </Table.Row>
          </Table.Header>

          <Table.Body>
            {
            getTodos.isSuccess && getTodos.data.map((todo, i)=> (
                // <div key={todo.id}> {todo.text}</div>
                <Table.Row key={todo.id}>
                  <Table.RowHeaderCell>{todo.id}</Table.RowHeaderCell>
                  <Table.Cell>{todo.text}</Table.Cell>
                  <Table.Cell>{todo.completed ? 'True' : 'False'}</Table.Cell>
                </Table.Row>
              )
            )}
          
          </Table.Body>
        </Table.Root>
     </div>
    </main>
     
  );
}
